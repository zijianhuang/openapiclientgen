import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAliasOutput {

		/** Required */
		Alias: Alias;
	}
	export interface CreateAliasOutputFormProperties {
	}
	export function CreateCreateAliasOutputFormGroup() {
		return new FormGroup<CreateAliasOutputFormProperties>({
		});

	}


	/** Contains information about an alias. */
	export interface Alias {

		/** Required */
		AliasName: string;
		KeyArn?: string;
	}

	/** Contains information about an alias. */
	export interface AliasFormProperties {

		/** Required */
		AliasName: FormControl<string | null | undefined>,
		KeyArn: FormControl<string | null | undefined>,
	}
	export function CreateAliasFormGroup() {
		return new FormGroup<AliasFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAliasInput {

		/** Required */
		AliasName: string;
		KeyArn?: string;
	}
	export interface CreateAliasInputFormProperties {

		/** Required */
		AliasName: FormControl<string | null | undefined>,
		KeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasInputFormGroup() {
		return new FormGroup<CreateAliasInputFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface CreateKeyOutput {

		/** Required */
		Key: Key;
	}
	export interface CreateKeyOutputFormProperties {
	}
	export function CreateCreateKeyOutputFormGroup() {
		return new FormGroup<CreateKeyOutputFormProperties>({
		});

	}


	/** Metadata about an Amazon Web Services Payment Cryptography key. */
	export interface Key {

		/** Required */
		CreateTimestamp: Date;
		DeletePendingTimestamp?: Date;
		DeleteTimestamp?: Date;

		/** Required */
		Enabled: boolean;

		/** Required */
		Exportable: boolean;

		/** Required */
		KeyArn: string;

		/** Required */
		KeyAttributes: KeyAttributes;

		/** Required */
		KeyCheckValue: string;

		/** Required */
		KeyCheckValueAlgorithm: KeyCheckValueAlgorithm;

		/** Required */
		KeyOrigin: KeyOrigin;

		/** Required */
		KeyState: KeyState;
		UsageStartTimestamp?: Date;
		UsageStopTimestamp?: Date;
	}

	/** Metadata about an Amazon Web Services Payment Cryptography key. */
	export interface KeyFormProperties {

		/** Required */
		CreateTimestamp: FormControl<Date | null | undefined>,
		DeletePendingTimestamp: FormControl<Date | null | undefined>,
		DeleteTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		Exportable: FormControl<boolean | null | undefined>,

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyCheckValue: FormControl<string | null | undefined>,

		/** Required */
		KeyCheckValueAlgorithm: FormControl<KeyCheckValueAlgorithm | null | undefined>,

		/** Required */
		KeyOrigin: FormControl<KeyOrigin | null | undefined>,

		/** Required */
		KeyState: FormControl<KeyState | null | undefined>,
		UsageStartTimestamp: FormControl<Date | null | undefined>,
		UsageStopTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateKeyFormGroup() {
		return new FormGroup<KeyFormProperties>({
			CreateTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DeletePendingTimestamp: new FormControl<Date | null | undefined>(undefined),
			DeleteTimestamp: new FormControl<Date | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Exportable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyCheckValueAlgorithm: new FormControl<KeyCheckValueAlgorithm | null | undefined>(undefined, [Validators.required]),
			KeyOrigin: new FormControl<KeyOrigin | null | undefined>(undefined, [Validators.required]),
			KeyState: new FormControl<KeyState | null | undefined>(undefined, [Validators.required]),
			UsageStartTimestamp: new FormControl<Date | null | undefined>(undefined),
			UsageStopTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created. */
	export interface KeyAttributes {

		/** Required */
		KeyAlgorithm: KeyAlgorithm;

		/** Required */
		KeyClass: KeyClass;

		/** Required */
		KeyModesOfUse: KeyModesOfUse;

		/** Required */
		KeyUsage: KeyUsage;
	}

	/** The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created. */
	export interface KeyAttributesFormProperties {

		/** Required */
		KeyAlgorithm: FormControl<KeyAlgorithm | null | undefined>,

		/** Required */
		KeyClass: FormControl<KeyClass | null | undefined>,

		/** Required */
		KeyUsage: FormControl<KeyUsage | null | undefined>,
	}
	export function CreateKeyAttributesFormGroup() {
		return new FormGroup<KeyAttributesFormProperties>({
			KeyAlgorithm: new FormControl<KeyAlgorithm | null | undefined>(undefined, [Validators.required]),
			KeyClass: new FormControl<KeyClass | null | undefined>(undefined, [Validators.required]),
			KeyUsage: new FormControl<KeyUsage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum KeyAlgorithm { TDES_2KEY = 0, TDES_3KEY = 1, AES_128 = 2, AES_192 = 3, AES_256 = 4, RSA_2048 = 5, RSA_3072 = 6, RSA_4096 = 7 }

	export enum KeyClass { SYMMETRIC_KEY = 0, ASYMMETRIC_KEY_PAIR = 1, PRIVATE_KEY = 2, PUBLIC_KEY = 3 }


	/** The list of cryptographic operations that you can perform using the key. The modes of use are deﬁned in section A.5.3 of the TR-31 spec. */
	export interface KeyModesOfUse {
		Decrypt?: boolean | null;
		DeriveKey?: boolean | null;
		Encrypt?: boolean | null;
		Generate?: boolean | null;
		NoRestrictions?: boolean | null;
		Sign?: boolean | null;
		Unwrap?: boolean | null;
		Verify?: boolean | null;
		Wrap?: boolean | null;
	}

	/** The list of cryptographic operations that you can perform using the key. The modes of use are deﬁned in section A.5.3 of the TR-31 spec. */
	export interface KeyModesOfUseFormProperties {
		Decrypt: FormControl<boolean | null | undefined>,
		DeriveKey: FormControl<boolean | null | undefined>,
		Encrypt: FormControl<boolean | null | undefined>,
		Generate: FormControl<boolean | null | undefined>,
		NoRestrictions: FormControl<boolean | null | undefined>,
		Sign: FormControl<boolean | null | undefined>,
		Unwrap: FormControl<boolean | null | undefined>,
		Verify: FormControl<boolean | null | undefined>,
		Wrap: FormControl<boolean | null | undefined>,
	}
	export function CreateKeyModesOfUseFormGroup() {
		return new FormGroup<KeyModesOfUseFormProperties>({
			Decrypt: new FormControl<boolean | null | undefined>(undefined),
			DeriveKey: new FormControl<boolean | null | undefined>(undefined),
			Encrypt: new FormControl<boolean | null | undefined>(undefined),
			Generate: new FormControl<boolean | null | undefined>(undefined),
			NoRestrictions: new FormControl<boolean | null | undefined>(undefined),
			Sign: new FormControl<boolean | null | undefined>(undefined),
			Unwrap: new FormControl<boolean | null | undefined>(undefined),
			Verify: new FormControl<boolean | null | undefined>(undefined),
			Wrap: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum KeyUsage { TR31_B0_BASE_DERIVATION_KEY = 0, TR31_C0_CARD_VERIFICATION_KEY = 1, TR31_D0_SYMMETRIC_DATA_ENCRYPTION_KEY = 2, TR31_D1_ASYMMETRIC_KEY_FOR_DATA_ENCRYPTION = 3, TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS = 4, TR31_E1_EMV_MKEY_CONFIDENTIALITY = 5, TR31_E2_EMV_MKEY_INTEGRITY = 6, TR31_E4_EMV_MKEY_DYNAMIC_NUMBERS = 7, TR31_E5_EMV_MKEY_CARD_PERSONALIZATION = 8, TR31_E6_EMV_MKEY_OTHER = 9, TR31_K0_KEY_ENCRYPTION_KEY = 10, TR31_K1_KEY_BLOCK_PROTECTION_KEY = 11, TR31_K3_ASYMMETRIC_KEY_FOR_KEY_AGREEMENT = 12, TR31_M3_ISO_9797_3_MAC_KEY = 13, TR31_M6_ISO_9797_5_CMAC_KEY = 14, TR31_M7_HMAC_KEY = 15, TR31_P0_PIN_ENCRYPTION_KEY = 16, TR31_P1_PIN_GENERATION_KEY = 17, TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE = 18, TR31_V1_IBM3624_PIN_VERIFICATION_KEY = 19, TR31_V2_VISA_PIN_VERIFICATION_KEY = 20, TR31_K2_TR34_ASYMMETRIC_KEY = 21 }

	export enum KeyCheckValueAlgorithm { CMAC = 0, ANSI_X9_24 = 1 }


	/** Defines the source of a key */
	export enum KeyOrigin { EXTERNAL = 0, AWS_PAYMENT_CRYPTOGRAPHY = 1 }


	/** Defines the state of a key */
	export enum KeyState { CREATE_IN_PROGRESS = 0, CREATE_COMPLETE = 1, DELETE_PENDING = 2, DELETE_COMPLETE = 3 }

	export interface CreateKeyInput {
		Enabled?: boolean | null;

		/** Required */
		Exportable: boolean;

		/** Required */
		KeyAttributes: KeyAttributes;
		KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm;
		Tags?: Array<Tag>;
	}
	export interface CreateKeyInputFormProperties {
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		Exportable: FormControl<boolean | null | undefined>,
		KeyCheckValueAlgorithm: FormControl<KeyCheckValueAlgorithm | null | undefined>,
	}
	export function CreateCreateKeyInputFormGroup() {
		return new FormGroup<CreateKeyInputFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Exportable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			KeyCheckValueAlgorithm: new FormControl<KeyCheckValueAlgorithm | null | undefined>(undefined),
		});

	}


	/** A structure that contains information about a tag. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** A structure that contains information about a tag. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAliasOutput {
	}
	export interface DeleteAliasOutputFormProperties {
	}
	export function CreateDeleteAliasOutputFormGroup() {
		return new FormGroup<DeleteAliasOutputFormProperties>({
		});

	}

	export interface DeleteAliasInput {

		/** Required */
		AliasName: string;
	}
	export interface DeleteAliasInputFormProperties {

		/** Required */
		AliasName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAliasInputFormGroup() {
		return new FormGroup<DeleteAliasInputFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteKeyOutput {

		/** Required */
		Key: Key;
	}
	export interface DeleteKeyOutputFormProperties {
	}
	export function CreateDeleteKeyOutputFormGroup() {
		return new FormGroup<DeleteKeyOutputFormProperties>({
		});

	}

	export interface DeleteKeyInput {
		DeleteKeyInDays?: number | null;

		/** Required */
		KeyIdentifier: string;
	}
	export interface DeleteKeyInputFormProperties {
		DeleteKeyInDays: FormControl<number | null | undefined>,

		/** Required */
		KeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteKeyInputFormGroup() {
		return new FormGroup<DeleteKeyInputFormProperties>({
			DeleteKeyInDays: new FormControl<number | null | undefined>(undefined),
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExportKeyOutput {
		WrappedKey?: WrappedKey;
	}
	export interface ExportKeyOutputFormProperties {
	}
	export function CreateExportKeyOutputFormGroup() {
		return new FormGroup<ExportKeyOutputFormProperties>({
		});

	}


	/** Parameter information for generating a wrapped key using TR-31 or TR-34 standard. */
	export interface WrappedKey {

		/** Required */
		KeyMaterial: string;

		/** Required */
		WrappedKeyMaterialFormat: WrappedKeyMaterialFormat;

		/** Required */
		WrappingKeyArn: string;
	}

	/** Parameter information for generating a wrapped key using TR-31 or TR-34 standard. */
	export interface WrappedKeyFormProperties {

		/** Required */
		KeyMaterial: FormControl<string | null | undefined>,

		/** Required */
		WrappedKeyMaterialFormat: FormControl<WrappedKeyMaterialFormat | null | undefined>,

		/** Required */
		WrappingKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateWrappedKeyFormGroup() {
		return new FormGroup<WrappedKeyFormProperties>({
			KeyMaterial: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WrappedKeyMaterialFormat: new FormControl<WrappedKeyMaterialFormat | null | undefined>(undefined, [Validators.required]),
			WrappingKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WrappedKeyMaterialFormat { KEY_CRYPTOGRAM = 0, TR31_KEY_BLOCK = 1, TR34_KEY_BLOCK = 2 }

	export interface ExportKeyInput {

		/** Required */
		ExportKeyIdentifier: string;

		/** Required */
		KeyMaterial: ExportKeyMaterial;
	}
	export interface ExportKeyInputFormProperties {

		/** Required */
		ExportKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateExportKeyInputFormGroup() {
		return new FormGroup<ExportKeyInputFormProperties>({
			ExportKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameter information for key material export from Amazon Web Services Payment Cryptography. */
	export interface ExportKeyMaterial {
		Tr31KeyBlock?: ExportTr31KeyBlock;
		Tr34KeyBlock?: ExportTr34KeyBlock;
	}

	/** Parameter information for key material export from Amazon Web Services Payment Cryptography. */
	export interface ExportKeyMaterialFormProperties {
	}
	export function CreateExportKeyMaterialFormGroup() {
		return new FormGroup<ExportKeyMaterialFormProperties>({
		});

	}


	/** Parameter information for key material export using TR-31 standard. */
	export interface ExportTr31KeyBlock {

		/** Required */
		WrappingKeyIdentifier: string;
	}

	/** Parameter information for key material export using TR-31 standard. */
	export interface ExportTr31KeyBlockFormProperties {

		/** Required */
		WrappingKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateExportTr31KeyBlockFormGroup() {
		return new FormGroup<ExportTr31KeyBlockFormProperties>({
			WrappingKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameter information for key material export using TR-34 standard. */
	export interface ExportTr34KeyBlock {

		/** Required */
		CertificateAuthorityPublicKeyIdentifier: string;

		/** Required */
		ExportToken: string;

		/** Required */
		KeyBlockFormat: Tr34KeyBlockFormat;
		RandomNonce?: string;

		/** Required */
		WrappingKeyCertificate: string;
	}

	/** Parameter information for key material export using TR-34 standard. */
	export interface ExportTr34KeyBlockFormProperties {

		/** Required */
		CertificateAuthorityPublicKeyIdentifier: FormControl<string | null | undefined>,

		/** Required */
		ExportToken: FormControl<string | null | undefined>,

		/** Required */
		KeyBlockFormat: FormControl<Tr34KeyBlockFormat | null | undefined>,
		RandomNonce: FormControl<string | null | undefined>,

		/** Required */
		WrappingKeyCertificate: FormControl<string | null | undefined>,
	}
	export function CreateExportTr34KeyBlockFormGroup() {
		return new FormGroup<ExportTr34KeyBlockFormProperties>({
			CertificateAuthorityPublicKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExportToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyBlockFormat: new FormControl<Tr34KeyBlockFormat | null | undefined>(undefined, [Validators.required]),
			RandomNonce: new FormControl<string | null | undefined>(undefined),
			WrappingKeyCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Tr34KeyBlockFormat { X9_TR34_2012 = 0 }

	export interface GetAliasOutput {

		/** Required */
		Alias: Alias;
	}
	export interface GetAliasOutputFormProperties {
	}
	export function CreateGetAliasOutputFormGroup() {
		return new FormGroup<GetAliasOutputFormProperties>({
		});

	}

	export interface GetAliasInput {

		/** Required */
		AliasName: string;
	}
	export interface GetAliasInputFormProperties {

		/** Required */
		AliasName: FormControl<string | null | undefined>,
	}
	export function CreateGetAliasInputFormGroup() {
		return new FormGroup<GetAliasInputFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetKeyOutput {

		/** Required */
		Key: Key;
	}
	export interface GetKeyOutputFormProperties {
	}
	export function CreateGetKeyOutputFormGroup() {
		return new FormGroup<GetKeyOutputFormProperties>({
		});

	}

	export interface GetKeyInput {

		/** Required */
		KeyIdentifier: string;
	}
	export interface GetKeyInputFormProperties {

		/** Required */
		KeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetKeyInputFormGroup() {
		return new FormGroup<GetKeyInputFormProperties>({
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetParametersForExportOutput {

		/** Required */
		ExportToken: string;

		/** Required */
		ParametersValidUntilTimestamp: Date;

		/** Required */
		SigningKeyAlgorithm: KeyAlgorithm;

		/** Required */
		SigningKeyCertificate: string;

		/** Required */
		SigningKeyCertificateChain: string;
	}
	export interface GetParametersForExportOutputFormProperties {

		/** Required */
		ExportToken: FormControl<string | null | undefined>,

		/** Required */
		ParametersValidUntilTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		SigningKeyAlgorithm: FormControl<KeyAlgorithm | null | undefined>,

		/** Required */
		SigningKeyCertificate: FormControl<string | null | undefined>,

		/** Required */
		SigningKeyCertificateChain: FormControl<string | null | undefined>,
	}
	export function CreateGetParametersForExportOutputFormGroup() {
		return new FormGroup<GetParametersForExportOutputFormProperties>({
			ExportToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParametersValidUntilTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			SigningKeyAlgorithm: new FormControl<KeyAlgorithm | null | undefined>(undefined, [Validators.required]),
			SigningKeyCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SigningKeyCertificateChain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetParametersForExportInput {

		/** Required */
		KeyMaterialType: KeyMaterialType;

		/** Required */
		SigningKeyAlgorithm: KeyAlgorithm;
	}
	export interface GetParametersForExportInputFormProperties {

		/** Required */
		KeyMaterialType: FormControl<KeyMaterialType | null | undefined>,

		/** Required */
		SigningKeyAlgorithm: FormControl<KeyAlgorithm | null | undefined>,
	}
	export function CreateGetParametersForExportInputFormGroup() {
		return new FormGroup<GetParametersForExportInputFormProperties>({
			KeyMaterialType: new FormControl<KeyMaterialType | null | undefined>(undefined, [Validators.required]),
			SigningKeyAlgorithm: new FormControl<KeyAlgorithm | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum KeyMaterialType { TR34_KEY_BLOCK = 0, TR31_KEY_BLOCK = 1, ROOT_PUBLIC_KEY_CERTIFICATE = 2, TRUSTED_PUBLIC_KEY_CERTIFICATE = 3 }

	export interface GetParametersForImportOutput {

		/** Required */
		ImportToken: string;

		/** Required */
		ParametersValidUntilTimestamp: Date;

		/** Required */
		WrappingKeyAlgorithm: KeyAlgorithm;

		/** Required */
		WrappingKeyCertificate: string;

		/** Required */
		WrappingKeyCertificateChain: string;
	}
	export interface GetParametersForImportOutputFormProperties {

		/** Required */
		ImportToken: FormControl<string | null | undefined>,

		/** Required */
		ParametersValidUntilTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		WrappingKeyAlgorithm: FormControl<KeyAlgorithm | null | undefined>,

		/** Required */
		WrappingKeyCertificate: FormControl<string | null | undefined>,

		/** Required */
		WrappingKeyCertificateChain: FormControl<string | null | undefined>,
	}
	export function CreateGetParametersForImportOutputFormGroup() {
		return new FormGroup<GetParametersForImportOutputFormProperties>({
			ImportToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParametersValidUntilTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			WrappingKeyAlgorithm: new FormControl<KeyAlgorithm | null | undefined>(undefined, [Validators.required]),
			WrappingKeyCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WrappingKeyCertificateChain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetParametersForImportInput {

		/** Required */
		KeyMaterialType: KeyMaterialType;

		/** Required */
		WrappingKeyAlgorithm: KeyAlgorithm;
	}
	export interface GetParametersForImportInputFormProperties {

		/** Required */
		KeyMaterialType: FormControl<KeyMaterialType | null | undefined>,

		/** Required */
		WrappingKeyAlgorithm: FormControl<KeyAlgorithm | null | undefined>,
	}
	export function CreateGetParametersForImportInputFormGroup() {
		return new FormGroup<GetParametersForImportInputFormProperties>({
			KeyMaterialType: new FormControl<KeyMaterialType | null | undefined>(undefined, [Validators.required]),
			WrappingKeyAlgorithm: new FormControl<KeyAlgorithm | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPublicKeyCertificateOutput {

		/** Required */
		KeyCertificate: string;

		/** Required */
		KeyCertificateChain: string;
	}
	export interface GetPublicKeyCertificateOutputFormProperties {

		/** Required */
		KeyCertificate: FormControl<string | null | undefined>,

		/** Required */
		KeyCertificateChain: FormControl<string | null | undefined>,
	}
	export function CreateGetPublicKeyCertificateOutputFormGroup() {
		return new FormGroup<GetPublicKeyCertificateOutputFormProperties>({
			KeyCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyCertificateChain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPublicKeyCertificateInput {

		/** Required */
		KeyIdentifier: string;
	}
	export interface GetPublicKeyCertificateInputFormProperties {

		/** Required */
		KeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetPublicKeyCertificateInputFormGroup() {
		return new FormGroup<GetPublicKeyCertificateInputFormProperties>({
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportKeyOutput {

		/** Required */
		Key: Key;
	}
	export interface ImportKeyOutputFormProperties {
	}
	export function CreateImportKeyOutputFormGroup() {
		return new FormGroup<ImportKeyOutputFormProperties>({
		});

	}

	export interface ImportKeyInput {
		Enabled?: boolean | null;
		KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm;

		/** Required */
		KeyMaterial: ImportKeyMaterial;
		Tags?: Array<Tag>;
	}
	export interface ImportKeyInputFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		KeyCheckValueAlgorithm: FormControl<KeyCheckValueAlgorithm | null | undefined>,
	}
	export function CreateImportKeyInputFormGroup() {
		return new FormGroup<ImportKeyInputFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			KeyCheckValueAlgorithm: new FormControl<KeyCheckValueAlgorithm | null | undefined>(undefined),
		});

	}


	/** Parameter information for key material import. */
	export interface ImportKeyMaterial {
		RootCertificatePublicKey?: RootCertificatePublicKey;
		Tr31KeyBlock?: ImportTr31KeyBlock;
		Tr34KeyBlock?: ImportTr34KeyBlock;
		TrustedCertificatePublicKey?: TrustedCertificatePublicKey;
	}

	/** Parameter information for key material import. */
	export interface ImportKeyMaterialFormProperties {
	}
	export function CreateImportKeyMaterialFormGroup() {
		return new FormGroup<ImportKeyMaterialFormProperties>({
		});

	}


	/** Parameter information for root public key certificate import. */
	export interface RootCertificatePublicKey {

		/** Required */
		KeyAttributes: KeyAttributes;

		/** Required */
		PublicKeyCertificate: string;
	}

	/** Parameter information for root public key certificate import. */
	export interface RootCertificatePublicKeyFormProperties {

		/** Required */
		PublicKeyCertificate: FormControl<string | null | undefined>,
	}
	export function CreateRootCertificatePublicKeyFormGroup() {
		return new FormGroup<RootCertificatePublicKeyFormProperties>({
			PublicKeyCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameter information for key material import using TR-31 standard. */
	export interface ImportTr31KeyBlock {

		/** Required */
		WrappedKeyBlock: string;

		/** Required */
		WrappingKeyIdentifier: string;
	}

	/** Parameter information for key material import using TR-31 standard. */
	export interface ImportTr31KeyBlockFormProperties {

		/** Required */
		WrappedKeyBlock: FormControl<string | null | undefined>,

		/** Required */
		WrappingKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateImportTr31KeyBlockFormGroup() {
		return new FormGroup<ImportTr31KeyBlockFormProperties>({
			WrappedKeyBlock: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WrappingKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameter information for key material import using TR-34 standard. */
	export interface ImportTr34KeyBlock {

		/** Required */
		CertificateAuthorityPublicKeyIdentifier: string;

		/** Required */
		ImportToken: string;

		/** Required */
		KeyBlockFormat: Tr34KeyBlockFormat;
		RandomNonce?: string;

		/** Required */
		SigningKeyCertificate: string;

		/** Required */
		WrappedKeyBlock: string;
	}

	/** Parameter information for key material import using TR-34 standard. */
	export interface ImportTr34KeyBlockFormProperties {

		/** Required */
		CertificateAuthorityPublicKeyIdentifier: FormControl<string | null | undefined>,

		/** Required */
		ImportToken: FormControl<string | null | undefined>,

		/** Required */
		KeyBlockFormat: FormControl<Tr34KeyBlockFormat | null | undefined>,
		RandomNonce: FormControl<string | null | undefined>,

		/** Required */
		SigningKeyCertificate: FormControl<string | null | undefined>,

		/** Required */
		WrappedKeyBlock: FormControl<string | null | undefined>,
	}
	export function CreateImportTr34KeyBlockFormGroup() {
		return new FormGroup<ImportTr34KeyBlockFormProperties>({
			CertificateAuthorityPublicKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImportToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyBlockFormat: new FormControl<Tr34KeyBlockFormat | null | undefined>(undefined, [Validators.required]),
			RandomNonce: new FormControl<string | null | undefined>(undefined),
			SigningKeyCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WrappedKeyBlock: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameter information for trusted public key certificate import. */
	export interface TrustedCertificatePublicKey {

		/** Required */
		CertificateAuthorityPublicKeyIdentifier: string;

		/** Required */
		KeyAttributes: KeyAttributes;

		/** Required */
		PublicKeyCertificate: string;
	}

	/** Parameter information for trusted public key certificate import. */
	export interface TrustedCertificatePublicKeyFormProperties {

		/** Required */
		CertificateAuthorityPublicKeyIdentifier: FormControl<string | null | undefined>,

		/** Required */
		PublicKeyCertificate: FormControl<string | null | undefined>,
	}
	export function CreateTrustedCertificatePublicKeyFormGroup() {
		return new FormGroup<TrustedCertificatePublicKeyFormProperties>({
			CertificateAuthorityPublicKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PublicKeyCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAliasesOutput {

		/** Required */
		Aliases: Array<Alias>;
		NextToken?: string;
	}
	export interface ListAliasesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAliasesOutputFormGroup() {
		return new FormGroup<ListAliasesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAliasesInput {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAliasesInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAliasesInputFormGroup() {
		return new FormGroup<ListAliasesInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListKeysOutput {

		/** Required */
		Keys: Array<KeySummary>;
		NextToken?: string;
	}
	export interface ListKeysOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKeysOutputFormGroup() {
		return new FormGroup<ListKeysOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata about an Amazon Web Services Payment Cryptography key. */
	export interface KeySummary {

		/** Required */
		Enabled: boolean;

		/** Required */
		Exportable: boolean;

		/** Required */
		KeyArn: string;

		/** Required */
		KeyAttributes: KeyAttributes;

		/** Required */
		KeyCheckValue: string;

		/** Required */
		KeyState: KeyState;
	}

	/** Metadata about an Amazon Web Services Payment Cryptography key. */
	export interface KeySummaryFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		Exportable: FormControl<boolean | null | undefined>,

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyCheckValue: FormControl<string | null | undefined>,

		/** Required */
		KeyState: FormControl<KeyState | null | undefined>,
	}
	export function CreateKeySummaryFormGroup() {
		return new FormGroup<KeySummaryFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Exportable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyState: new FormControl<KeyState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListKeysInput {
		KeyState?: KeyState;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListKeysInputFormProperties {
		KeyState: FormControl<KeyState | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKeysInputFormGroup() {
		return new FormGroup<ListKeysInputFormProperties>({
			KeyState: new FormControl<KeyState | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		NextToken?: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface ListTagsForResourceOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceInput {
		MaxResults?: number | null;
		NextToken?: string;

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RestoreKeyOutput {

		/** Required */
		Key: Key;
	}
	export interface RestoreKeyOutputFormProperties {
	}
	export function CreateRestoreKeyOutputFormGroup() {
		return new FormGroup<RestoreKeyOutputFormProperties>({
		});

	}

	export interface RestoreKeyInput {

		/** Required */
		KeyIdentifier: string;
	}
	export interface RestoreKeyInputFormProperties {

		/** Required */
		KeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateRestoreKeyInputFormGroup() {
		return new FormGroup<RestoreKeyInputFormProperties>({
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartKeyUsageOutput {

		/** Required */
		Key: Key;
	}
	export interface StartKeyUsageOutputFormProperties {
	}
	export function CreateStartKeyUsageOutputFormGroup() {
		return new FormGroup<StartKeyUsageOutputFormProperties>({
		});

	}

	export interface StartKeyUsageInput {

		/** Required */
		KeyIdentifier: string;
	}
	export interface StartKeyUsageInputFormProperties {

		/** Required */
		KeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStartKeyUsageInputFormGroup() {
		return new FormGroup<StartKeyUsageInputFormProperties>({
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopKeyUsageOutput {

		/** Required */
		Key: Key;
	}
	export interface StopKeyUsageOutputFormProperties {
	}
	export function CreateStopKeyUsageOutputFormGroup() {
		return new FormGroup<StopKeyUsageOutputFormProperties>({
		});

	}

	export interface StopKeyUsageInput {

		/** Required */
		KeyIdentifier: string;
	}
	export interface StopKeyUsageInputFormProperties {

		/** Required */
		KeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStopKeyUsageInputFormGroup() {
		return new FormGroup<StopKeyUsageInputFormProperties>({
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface TagResourceInput {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UntagResourceInput {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAliasOutput {

		/** Required */
		Alias: Alias;
	}
	export interface UpdateAliasOutputFormProperties {
	}
	export function CreateUpdateAliasOutputFormGroup() {
		return new FormGroup<UpdateAliasOutputFormProperties>({
		});

	}

	export interface UpdateAliasInput {

		/** Required */
		AliasName: string;
		KeyArn?: string;
	}
	export interface UpdateAliasInputFormProperties {

		/** Required */
		AliasName: FormControl<string | null | undefined>,
		KeyArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAliasInputFormGroup() {
		return new FormGroup<UpdateAliasInputFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an <i>alias</i>, or a friendly name, for an Amazon Web Services Payment Cryptography key. You can use an alias to identify a key in the console and when you call cryptographic operations such as <a href="https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_EncryptData.html">EncryptData</a> or <a href="https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_DecryptData.html">DecryptData</a>.</p> <p>You can associate the alias with any key in the same Amazon Web Services Region. Each alias is associated with only one key at a time, but a key can have multiple aliases. You can't create an alias without a key. The alias must be unique in the account and Amazon Web Services Region, but you can create another alias with the same name in a different Amazon Web Services Region.</p> <p>To change the key that's associated with the alias, call <a>UpdateAlias</a>. To delete the alias, call <a>DeleteAlias</a>. These operations don't affect the underlying key. To get the alias that you created, call <a>ListAliases</a>.</p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>GetAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.CreateAlias
		 * @return {CreateAliasOutput} Success
		 */
		CreateAlias(requestBody: CreateAliasInput): Observable<CreateAliasOutput> {
			return this.http.post<CreateAliasOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.CreateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon Web Services Payment Cryptography key, a logical representation of a cryptographic key, that is unique in your account and Amazon Web Services Region. You use keys for cryptographic functions such as encryption and decryption. </p> <p>In addition to the key material used in cryptographic operations, an Amazon Web Services Payment Cryptography key includes metadata such as the key ARN, key usage, key origin, creation date, description, and key state.</p> <p>When you create a key, you specify both immutable and mutable data about the key. The immutable data contains key attributes that defines the scope and cryptographic operations that you can perform using the key, for example key class (example: <code>SYMMETRIC_KEY</code>), key algorithm (example: <code>TDES_2KEY</code>), key usage (example: <code>TR31_P0_PIN_ENCRYPTION_KEY</code>) and key modes of use (example: <code>Encrypt</code>). For information about valid combinations of key attributes, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. The mutable data contained within a key includes usage timestamp and key deletion timestamp and can be modified after creation.</p> <p>Amazon Web Services Payment Cryptography binds key attributes to keys using key blocks when you store or export them. Amazon Web Services Payment Cryptography stores the key contents wrapped and never stores or transmits them in the clear. </p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DeleteKey</a> </p> </li> <li> <p> <a>GetKey</a> </p> </li> <li> <p> <a>ListKeys</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.CreateKey
		 * @return {CreateKeyOutput} Success
		 */
		CreateKey(requestBody: CreateKeyInput): Observable<CreateKeyOutput> {
			return this.http.post<CreateKeyOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.CreateKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the alias, but doesn't affect the underlying key.</p> <p>Each key can have multiple aliases. To get the aliases of all keys, use the <a>ListAliases</a> operation. To change the alias of a key, first use <a>DeleteAlias</a> to delete the current alias and then use <a>CreateAlias</a> to create a new alias. To associate an existing alias with a different key, call <a>UpdateAlias</a>.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>GetAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.DeleteAlias
		 * @return {DeleteAliasOutput} Success
		 */
		DeleteAlias(requestBody: DeleteAliasInput): Observable<DeleteAliasOutput> {
			return this.http.post<DeleteAliasOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.DeleteAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the key material and all metadata associated with Amazon Web Services Payment Cryptography key.</p> <p>Key deletion is irreversible. After a key is deleted, you can't perform cryptographic operations using the key. For example, you can't decrypt data that was encrypted by a deleted Amazon Web Services Payment Cryptography key, and the data may become unrecoverable. Because key deletion is destructive, Amazon Web Services Payment Cryptography has a safety mechanism to prevent accidental deletion of a key. When you call this operation, Amazon Web Services Payment Cryptography disables the specified key but doesn't delete it until after a waiting period. The default waiting period is 7 days. To set a different waiting period, set <code>DeleteKeyInDays</code>. During the waiting period, the <code>KeyState</code> is <code>DELETE_PENDING</code>. After the key is deleted, the <code>KeyState</code> is <code>DELETE_COMPLETE</code>.</p> <p>If you delete key material, you can use <a>ImportKey</a> to reimport the same key material into the Amazon Web Services Payment Cryptography key.</p> <p>You should delete a key only when you are sure that you don't need to use it anymore and no other parties are utilizing this key. If you aren't sure, consider deactivating it instead by calling <a>StopKeyUsage</a>.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>RestoreKey</a> </p> </li> <li> <p> <a>StartKeyUsage</a> </p> </li> <li> <p> <a>StopKeyUsage</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.DeleteKey
		 * @return {DeleteKeyOutput} Success
		 */
		DeleteKey(requestBody: DeleteKeyInput): Observable<DeleteKeyOutput> {
			return this.http.post<DeleteKeyOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.DeleteKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports a key from Amazon Web Services Payment Cryptography using either ANSI X9 TR-34 or TR-31 key export standard.</p> <p>Amazon Web Services Payment Cryptography simplifies main or root key exchange process by eliminating the need of a paper-based key exchange process. It takes a modern and secure approach based of the ANSI X9 TR-34 key exchange standard.</p> <p>You can use <code>ExportKey</code> to export main or root keys such as KEK (Key Encryption Key), using asymmetric key exchange technique following ANSI X9 TR-34 standard. The ANSI X9 TR-34 standard uses asymmetric keys to establishes bi-directional trust between the two parties exchanging keys. After which you can export working keys using the ANSI X9 TR-31 symmetric key exchange standard as mandated by PCI PIN. Using this operation, you can share your Amazon Web Services Payment Cryptography generated keys with other service partners to perform cryptographic operations outside of Amazon Web Services Payment Cryptography </p> <p> <b>TR-34 key export</b> </p> <p>Amazon Web Services Payment Cryptography uses TR-34 asymmetric key exchange standard to export main keys such as KEK. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Host (KRH). In key export process, KDH is Amazon Web Services Payment Cryptography which initiates key export. KRH is the user receiving the key. Before you initiate TR-34 key export, you must obtain an export token by calling <a>GetParametersForExport</a>. This operation also returns the signing key certificate that KDH uses to sign the wrapped key to generate a TR-34 wrapped key block. The export token expires after 7 days.</p> <p>Set the following parameters:</p> <dl> <dt>CertificateAuthorityPublicKeyIdentifier</dt> <dd> <p>The <code>KeyARN</code> of the certificate chain that will sign the wrapping key certificate. This must exist within Amazon Web Services Payment Cryptography before you initiate TR-34 key export. If it does not exist, you can import it by calling <a>ImportKey</a> for <code>RootCertificatePublicKey</code>.</p> </dd> <dt>ExportToken</dt> <dd> <p>Obtained from KDH by calling <a>GetParametersForExport</a>.</p> </dd> <dt>WrappingKeyCertificate</dt> <dd> <p>Amazon Web Services Payment Cryptography uses this to wrap the key under export.</p> </dd> </dl> <p>When this operation is successful, Amazon Web Services Payment Cryptography returns the TR-34 wrapped key block. </p> <p> <b>TR-31 key export</b> </p> <p>Amazon Web Services Payment Cryptography uses TR-31 symmetric key exchange standard to export working keys. In TR-31, you must use a main key such as KEK to encrypt or wrap the key under export. To establish a KEK, you can use <a>CreateKey</a> or <a>ImportKey</a>. When this operation is successful, Amazon Web Services Payment Cryptography returns a TR-31 wrapped key block. </p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GetParametersForExport</a> </p> </li> <li> <p> <a>ImportKey</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.ExportKey
		 * @return {ExportKeyOutput} Success
		 */
		ExportKey(requestBody: ExportKeyInput): Observable<ExportKeyOutput> {
			return this.http.post<ExportKeyOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.ExportKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the Amazon Web Services Payment Cryptography key associated with the alias.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.GetAlias
		 * @return {GetAliasOutput} Success
		 */
		GetAlias(requestBody: GetAliasInput): Observable<GetAliasOutput> {
			return this.http.post<GetAliasOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.GetAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the key material for an Amazon Web Services Payment Cryptography key, including the immutable and mutable data specified when the key was created.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>DeleteKey</a> </p> </li> <li> <p> <a>ListKeys</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.GetKey
		 * @return {GetKeyOutput} Success
		 */
		GetKey(requestBody: GetKeyInput): Observable<GetKeyOutput> {
			return this.http.post<GetKeyOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.GetKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the export token and the signing key certificate to initiate a TR-34 key export from Amazon Web Services Payment Cryptography.</p> <p>The signing key certificate signs the wrapped key under export within the TR-34 key payload. The export token and signing key certificate must be in place and operational before calling <a>ExportKey</a>. The export token expires in 7 days. You can use the same export token to export multiple keys from your service account.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ExportKey</a> </p> </li> <li> <p> <a>GetParametersForImport</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.GetParametersForExport
		 * @return {GetParametersForExportOutput} Success
		 */
		GetParametersForExport(requestBody: GetParametersForExportInput): Observable<GetParametersForExportOutput> {
			return this.http.post<GetParametersForExportOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.GetParametersForExport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the import token and the wrapping key certificate to initiate a TR-34 key import into Amazon Web Services Payment Cryptography.</p> <p>The wrapping key certificate wraps the key under import within the TR-34 key payload. The import token and wrapping key certificate must be in place and operational before calling <a>ImportKey</a>. The import token expires in 7 days. The same import token can be used to import multiple keys into your service account.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GetParametersForExport</a> </p> </li> <li> <p> <a>ImportKey</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.GetParametersForImport
		 * @return {GetParametersForImportOutput} Success
		 */
		GetParametersForImport(requestBody: GetParametersForImportInput): Observable<GetParametersForImportOutput> {
			return this.http.post<GetParametersForImportOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.GetParametersForImport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the public key certificate of the asymmetric key pair that exists within Amazon Web Services Payment Cryptography.</p> <p>Unlike the private key of an asymmetric key, which never leaves Amazon Web Services Payment Cryptography unencrypted, callers with <code>GetPublicKeyCertificate</code> permission can download the public key certificate of the asymmetric key. You can share the public key certificate to allow others to encrypt messages and verify signatures outside of Amazon Web Services Payment Cryptography</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.GetPublicKeyCertificate
		 * @return {GetPublicKeyCertificateOutput} Success
		 */
		GetPublicKeyCertificate(requestBody: GetPublicKeyCertificateInput): Observable<GetPublicKeyCertificateOutput> {
			return this.http.post<GetPublicKeyCertificateOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.GetPublicKeyCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Imports keys and public key certificates into Amazon Web Services Payment Cryptography.</p> <p>Amazon Web Services Payment Cryptography simplifies main or root key exchange process by eliminating the need of a paper-based key exchange process. It takes a modern and secure approach based of the ANSI X9 TR-34 key exchange standard. </p> <p>You can use <code>ImportKey</code> to import main or root keys such as KEK (Key Encryption Key) using asymmetric key exchange technique following the ANSI X9 TR-34 standard. The ANSI X9 TR-34 standard uses asymmetric keys to establishes bi-directional trust between the two parties exchanging keys. </p> <p>After you have imported a main or root key, you can import working keys to perform various cryptographic operations within Amazon Web Services Payment Cryptography using the ANSI X9 TR-31 symmetric key exchange standard as mandated by PCI PIN.</p> <p>You can also import a <i>root public key certificate</i>, a self-signed certificate used to sign other public key certificates, or a <i>trusted public key certificate</i> under an already established root public key certificate. </p> <p> <b>To import a public root key certificate</b> </p> <p>Using this operation, you can import the public component (in PEM cerificate format) of your private root key. You can use the imported public root key certificate for digital signatures, for example signing wrapping key or signing key in TR-34, within your Amazon Web Services Payment Cryptography account. </p> <p>Set the following parameters:</p> <ul> <li> <p> <code>KeyMaterial</code>: <code>RootCertificatePublicKey</code> </p> </li> <li> <p> <code>KeyClass</code>: <code>PUBLIC_KEY</code> </p> </li> <li> <p> <code>KeyModesOfUse</code>: <code>Verify</code> </p> </li> <li> <p> <code>KeyUsage</code>: <code>TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE</code> </p> </li> <li> <p> <code>PublicKeyCertificate</code>: The certificate authority used to sign the root public key certificate.</p> </li> </ul> <p> <b>To import a trusted public key certificate</b> </p> <p>The root public key certificate must be in place and operational before you import a trusted public key certificate. Set the following parameters:</p> <ul> <li> <p> <code>KeyMaterial</code>: <code>TrustedCertificatePublicKey</code> </p> </li> <li> <p> <code>CertificateAuthorityPublicKeyIdentifier</code>: <code>KeyArn</code> of the <code>RootCertificatePublicKey</code>.</p> </li> <li> <p> <code>KeyModesOfUse</code> and <code>KeyUsage</code>: Corresponding to the cryptographic operations such as wrap, sign, or encrypt that you will allow the trusted public key certificate to perform.</p> </li> <li> <p> <code>PublicKeyCertificate</code>: The certificate authority used to sign the trusted public key certificate.</p> </li> </ul> <p> <b>Import main keys</b> </p> <p>Amazon Web Services Payment Cryptography uses TR-34 asymmetric key exchange standard to import main keys such as KEK. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Host (KRH). During the key import process, KDH is the user who initiates the key import and KRH is Amazon Web Services Payment Cryptography who receives the key. Before initiating TR-34 key import, you must obtain an import token by calling <a>GetParametersForImport</a>. This operation also returns the wrapping key certificate that KDH uses wrap key under import to generate a TR-34 wrapped key block. The import token expires after 7 days.</p> <p>Set the following parameters:</p> <ul> <li> <p> <code>CertificateAuthorityPublicKeyIdentifier</code>: The <code>KeyArn</code> of the certificate chain that will sign the signing key certificate and should exist within Amazon Web Services Payment Cryptography before initiating TR-34 key import. If it does not exist, you can import it by calling by calling <code>ImportKey</code> for <code>RootCertificatePublicKey</code>.</p> </li> <li> <p> <code>ImportToken</code>: Obtained from KRH by calling <a>GetParametersForImport</a>.</p> </li> <li> <p> <code>WrappedKeyBlock</code>: The TR-34 wrapped key block from KDH. It contains the KDH key under import, wrapped with KRH provided wrapping key certificate and signed by the KDH private signing key. This TR-34 key block is generated by the KDH Hardware Security Module (HSM) outside of Amazon Web Services Payment Cryptography.</p> </li> <li> <p> <code>SigningKeyCertificate</code>: The public component of the private key that signed the KDH TR-34 wrapped key block. In PEM certificate format.</p> </li> </ul> <note> <p>TR-34 is intended primarily to exchange 3DES keys. Your ability to export AES-128 and larger AES keys may be dependent on your source system.</p> </note> <p> <b>Import working keys</b> </p> <p>Amazon Web Services Payment Cryptography uses TR-31 symmetric key exchange standard to import working keys. A KEK must be established within Amazon Web Services Payment Cryptography by using TR-34 key import. To initiate a TR-31 key import, set the following parameters:</p> <ul> <li> <p> <code>WrappedKeyBlock</code>: The key under import and encrypted using KEK. The TR-31 key block generated by your HSM outside of Amazon Web Services Payment Cryptography. </p> </li> <li> <p> <code>WrappingKeyIdentifier</code>: The <code>KeyArn</code> of the KEK that Amazon Web Services Payment Cryptography uses to decrypt or unwrap the key under import.</p> </li> </ul> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ExportKey</a> </p> </li> <li> <p> <a>GetParametersForImport</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.ImportKey
		 * @return {ImportKeyOutput} Success
		 */
		ImportKey(requestBody: ImportKeyInput): Observable<ImportKeyOutput> {
			return this.http.post<ImportKeyOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.ImportKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the aliases for all keys in the caller's Amazon Web Services account and Amazon Web Services Region. You can filter the list of aliases. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-managealias.html">Using aliases</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the aliases. When the response contains only a subset of aliases, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListAliases</code> request to get more aliases. When you receive a response with no NextToken (or an empty or null value), that means there are no more aliases to get.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>GetAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.ListAliases
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAliasesOutput} Success
		 */
		ListAliases(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAliasesInput): Observable<ListAliasesOutput> {
			return this.http.post<ListAliasesOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.ListAliases?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the keys in the caller's Amazon Web Services account and Amazon Web Services Region. You can filter the list of keys.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the keys. When the response contains only a subset of keys, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListKeys</code> request to get more keys. When you receive a response with no NextToken (or an empty or null value), that means there are no more keys to get.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>DeleteKey</a> </p> </li> <li> <p> <a>GetKey</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.ListKeys
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListKeysOutput} Success
		 */
		ListKeys(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListKeysInput): Observable<ListKeysOutput> {
			return this.http.post<ListKeysOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.ListKeys?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the tags for an Amazon Web Services resource.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTagsForResource</code> request to get more tags. When you receive a response with no NextToken (or an empty or null value), that means there are no more tags to get.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>TagResource</a> </p> </li> <li> <p> <a>UntagResource</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.ListTagsForResource
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.ListTagsForResource?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Cancels a scheduled key deletion during the waiting period. Use this operation to restore a <code>Key</code> that is scheduled for deletion.</p> <p>During the waiting period, the <code>KeyState</code> is <code>DELETE_PENDING</code> and <code>deletePendingTimestamp</code> contains the date and time after which the <code>Key</code> will be deleted. After <code>Key</code> is restored, the <code>KeyState</code> is <code>CREATE_COMPLETE</code>, and the value for <code>deletePendingTimestamp</code> is removed.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DeleteKey</a> </p> </li> <li> <p> <a>StartKeyUsage</a> </p> </li> <li> <p> <a>StopKeyUsage</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.RestoreKey
		 * @return {RestoreKeyOutput} Success
		 */
		RestoreKey(requestBody: RestoreKeyInput): Observable<RestoreKeyOutput> {
			return this.http.post<RestoreKeyOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.RestoreKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables an Amazon Web Services Payment Cryptography key, which makes it active for cryptographic operations within Amazon Web Services Payment Cryptography</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>StopKeyUsage</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.StartKeyUsage
		 * @return {StartKeyUsageOutput} Success
		 */
		StartKeyUsage(requestBody: StartKeyUsageInput): Observable<StartKeyUsageOutput> {
			return this.http.post<StartKeyUsageOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.StartKeyUsage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables an Amazon Web Services Payment Cryptography key, which makes it inactive within Amazon Web Services Payment Cryptography.</p> <p>You can use this operation instead of <a>DeleteKey</a> to deactivate a key. You can enable the key in the future by calling <a>StartKeyUsage</a>.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DeleteKey</a> </p> </li> <li> <p> <a>StartKeyUsage</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.StopKeyUsage
		 * @return {StopKeyUsageOutput} Success
		 */
		StopKeyUsage(requestBody: StopKeyUsageInput): Observable<StopKeyUsageOutput> {
			return this.http.post<StopKeyUsageOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.StopKeyUsage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or edits tags on an Amazon Web Services Payment Cryptography key.</p> <note> <p>Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.</p> </note> <p>Each tag consists of a tag key and a tag value, both of which are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value. You can also add tags to an Amazon Web Services Payment Cryptography key when you create it with <a>CreateKey</a>.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ListTagsForResource</a> </p> </li> <li> <p> <a>UntagResource</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a tag from an Amazon Web Services Payment Cryptography key.</p> <note> <p>Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.</p> </note> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ListTagsForResource</a> </p> </li> <li> <p> <a>TagResource</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates an existing Amazon Web Services Payment Cryptography alias with a different key. Each alias is associated with only one Amazon Web Services Payment Cryptography key at a time, although a key can have multiple aliases. The alias and the Amazon Web Services Payment Cryptography key must be in the same Amazon Web Services account and Amazon Web Services Region</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>GetAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> </ul>
		 * Post #X-Amz-Target=PaymentCryptographyControlPlane.UpdateAlias
		 * @return {UpdateAliasOutput} Success
		 */
		UpdateAlias(requestBody: UpdateAliasInput): Observable<UpdateAliasOutput> {
			return this.http.post<UpdateAliasOutput>(this.baseUri + '#X-Amz-Target=PaymentCryptographyControlPlane.UpdateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateAliasX_Amz_Target { 'PaymentCryptographyControlPlane.CreateAlias' = 0 }

	export enum CreateKeyX_Amz_Target { 'PaymentCryptographyControlPlane.CreateKey' = 0 }

	export enum DeleteAliasX_Amz_Target { 'PaymentCryptographyControlPlane.DeleteAlias' = 0 }

	export enum DeleteKeyX_Amz_Target { 'PaymentCryptographyControlPlane.DeleteKey' = 0 }

	export enum ExportKeyX_Amz_Target { 'PaymentCryptographyControlPlane.ExportKey' = 0 }

	export enum GetAliasX_Amz_Target { 'PaymentCryptographyControlPlane.GetAlias' = 0 }

	export enum GetKeyX_Amz_Target { 'PaymentCryptographyControlPlane.GetKey' = 0 }

	export enum GetParametersForExportX_Amz_Target { 'PaymentCryptographyControlPlane.GetParametersForExport' = 0 }

	export enum GetParametersForImportX_Amz_Target { 'PaymentCryptographyControlPlane.GetParametersForImport' = 0 }

	export enum GetPublicKeyCertificateX_Amz_Target { 'PaymentCryptographyControlPlane.GetPublicKeyCertificate' = 0 }

	export enum ImportKeyX_Amz_Target { 'PaymentCryptographyControlPlane.ImportKey' = 0 }

	export enum ListAliasesX_Amz_Target { 'PaymentCryptographyControlPlane.ListAliases' = 0 }

	export enum ListKeysX_Amz_Target { 'PaymentCryptographyControlPlane.ListKeys' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'PaymentCryptographyControlPlane.ListTagsForResource' = 0 }

	export enum RestoreKeyX_Amz_Target { 'PaymentCryptographyControlPlane.RestoreKey' = 0 }

	export enum StartKeyUsageX_Amz_Target { 'PaymentCryptographyControlPlane.StartKeyUsage' = 0 }

	export enum StopKeyUsageX_Amz_Target { 'PaymentCryptographyControlPlane.StopKeyUsage' = 0 }

	export enum TagResourceX_Amz_Target { 'PaymentCryptographyControlPlane.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'PaymentCryptographyControlPlane.UntagResource' = 0 }

	export enum UpdateAliasX_Amz_Target { 'PaymentCryptographyControlPlane.UpdateAlias' = 0 }

}

