import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DecryptDataOutput {

		/** Required */
		KeyArn: string;

		/** Required */
		KeyCheckValue: string;

		/** Required */
		PlainText: string;
	}
	export interface DecryptDataOutputFormProperties {

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyCheckValue: FormControl<string | null | undefined>,

		/** Required */
		PlainText: FormControl<string | null | undefined>,
	}
	export function CreateDecryptDataOutputFormGroup() {
		return new FormGroup<DecryptDataOutputFormProperties>({
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PlainText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters for plaintext encryption using asymmetric keys. */
	export interface AsymmetricEncryptionAttributes {
		PaddingType?: PaddingType;
	}

	/** Parameters for plaintext encryption using asymmetric keys. */
	export interface AsymmetricEncryptionAttributesFormProperties {
		PaddingType: FormControl<PaddingType | null | undefined>,
	}
	export function CreateAsymmetricEncryptionAttributesFormGroup() {
		return new FormGroup<AsymmetricEncryptionAttributesFormProperties>({
			PaddingType: new FormControl<PaddingType | null | undefined>(undefined),
		});

	}

	export enum PaddingType { PKCS1 = 'PKCS1', OAEP_SHA1 = 'OAEP_SHA1', OAEP_SHA256 = 'OAEP_SHA256', OAEP_SHA512 = 'OAEP_SHA512' }


	/** Parameters that are required to encrypt plaintext data using DUKPT. */
	export interface DukptEncryptionAttributes {
		DukptKeyDerivationType?: DukptDerivationType;
		DukptKeyVariant?: DukptKeyVariant;
		InitializationVector?: string;

		/** Required */
		KeySerialNumber: string;
		Mode?: DukptEncryptionMode;
	}

	/** Parameters that are required to encrypt plaintext data using DUKPT. */
	export interface DukptEncryptionAttributesFormProperties {
		DukptKeyDerivationType: FormControl<DukptDerivationType | null | undefined>,
		DukptKeyVariant: FormControl<DukptKeyVariant | null | undefined>,
		InitializationVector: FormControl<string | null | undefined>,

		/** Required */
		KeySerialNumber: FormControl<string | null | undefined>,
		Mode: FormControl<DukptEncryptionMode | null | undefined>,
	}
	export function CreateDukptEncryptionAttributesFormGroup() {
		return new FormGroup<DukptEncryptionAttributesFormProperties>({
			DukptKeyDerivationType: new FormControl<DukptDerivationType | null | undefined>(undefined),
			DukptKeyVariant: new FormControl<DukptKeyVariant | null | undefined>(undefined),
			InitializationVector: new FormControl<string | null | undefined>(undefined),
			KeySerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Mode: new FormControl<DukptEncryptionMode | null | undefined>(undefined),
		});

	}

	export enum DukptDerivationType { TDES_2KEY = 'TDES_2KEY', TDES_3KEY = 'TDES_3KEY', AES_128 = 'AES_128', AES_192 = 'AES_192', AES_256 = 'AES_256' }

	export enum DukptKeyVariant { BIDIRECTIONAL = 'BIDIRECTIONAL', REQUEST = 'REQUEST', RESPONSE = 'RESPONSE' }

	export enum DukptEncryptionMode { ECB = 'ECB', CBC = 'CBC' }


	/** Parameters requried to encrypt plaintext data using symmetric keys. */
	export interface SymmetricEncryptionAttributes {
		InitializationVector?: string;

		/** Required */
		Mode: EncryptionMode;
		PaddingType?: PaddingType;
	}

	/** Parameters requried to encrypt plaintext data using symmetric keys. */
	export interface SymmetricEncryptionAttributesFormProperties {
		InitializationVector: FormControl<string | null | undefined>,

		/** Required */
		Mode: FormControl<EncryptionMode | null | undefined>,
		PaddingType: FormControl<PaddingType | null | undefined>,
	}
	export function CreateSymmetricEncryptionAttributesFormGroup() {
		return new FormGroup<SymmetricEncryptionAttributesFormProperties>({
			InitializationVector: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<EncryptionMode | null | undefined>(undefined, [Validators.required]),
			PaddingType: new FormControl<PaddingType | null | undefined>(undefined),
		});

	}

	export enum EncryptionMode { ECB = 'ECB', CBC = 'CBC', CFB = 'CFB', CFB1 = 'CFB1', CFB8 = 'CFB8', CFB64 = 'CFB64', CFB128 = 'CFB128', OFB = 'OFB' }

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface EncryptDataOutput {

		/** Required */
		CipherText: string;

		/** Required */
		KeyArn: string;

		/** Required */
		KeyCheckValue: string;
	}
	export interface EncryptDataOutputFormProperties {

		/** Required */
		CipherText: FormControl<string | null | undefined>,

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyCheckValue: FormControl<string | null | undefined>,
	}
	export function CreateEncryptDataOutputFormGroup() {
		return new FormGroup<EncryptDataOutputFormProperties>({
			CipherText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GenerateCardValidationDataOutput {

		/** Required */
		KeyArn: string;

		/** Required */
		KeyCheckValue: string;

		/** Required */
		ValidationData: string;
	}
	export interface GenerateCardValidationDataOutputFormProperties {

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyCheckValue: FormControl<string | null | undefined>,

		/** Required */
		ValidationData: FormControl<string | null | undefined>,
	}
	export function CreateGenerateCardValidationDataOutputFormGroup() {
		return new FormGroup<GenerateCardValidationDataOutputFormProperties>({
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValidationData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Card data parameters that are required to generate a Card Security Code (CSC2) for an AMEX payment card. */
	export interface AmexCardSecurityCodeVersion1 {

		/** Required */
		CardExpiryDate: string;
	}

	/** Card data parameters that are required to generate a Card Security Code (CSC2) for an AMEX payment card. */
	export interface AmexCardSecurityCodeVersion1FormProperties {

		/** Required */
		CardExpiryDate: FormControl<string | null | undefined>,
	}
	export function CreateAmexCardSecurityCodeVersion1FormGroup() {
		return new FormGroup<AmexCardSecurityCodeVersion1FormProperties>({
			CardExpiryDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Card data parameters that are required to generate a Card Security Code (CSC2) for an AMEX payment card. */
	export interface AmexCardSecurityCodeVersion2 {

		/** Required */
		CardExpiryDate: string;

		/** Required */
		ServiceCode: string;
	}

	/** Card data parameters that are required to generate a Card Security Code (CSC2) for an AMEX payment card. */
	export interface AmexCardSecurityCodeVersion2FormProperties {

		/** Required */
		CardExpiryDate: FormControl<string | null | undefined>,

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,
	}
	export function CreateAmexCardSecurityCodeVersion2FormGroup() {
		return new FormGroup<AmexCardSecurityCodeVersion2FormProperties>({
			CardExpiryDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Card data parameters that are required to generate a cardholder verification value for the payment card. */
	export interface CardHolderVerificationValue {

		/** Required */
		ApplicationTransactionCounter: string;

		/** Required */
		PanSequenceNumber: string;

		/** Required */
		UnpredictableNumber: string;
	}

	/** Card data parameters that are required to generate a cardholder verification value for the payment card. */
	export interface CardHolderVerificationValueFormProperties {

		/** Required */
		ApplicationTransactionCounter: FormControl<string | null | undefined>,

		/** Required */
		PanSequenceNumber: FormControl<string | null | undefined>,

		/** Required */
		UnpredictableNumber: FormControl<string | null | undefined>,
	}
	export function CreateCardHolderVerificationValueFormGroup() {
		return new FormGroup<CardHolderVerificationValueFormProperties>({
			ApplicationTransactionCounter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PanSequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UnpredictableNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Card data parameters that are required to verify CVV (Card Verification Value) for the payment card. */
	export interface CardVerificationValue1 {

		/** Required */
		CardExpiryDate: string;

		/** Required */
		ServiceCode: string;
	}

	/** Card data parameters that are required to verify CVV (Card Verification Value) for the payment card. */
	export interface CardVerificationValue1FormProperties {

		/** Required */
		CardExpiryDate: FormControl<string | null | undefined>,

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,
	}
	export function CreateCardVerificationValue1FormGroup() {
		return new FormGroup<CardVerificationValue1FormProperties>({
			CardExpiryDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Card data parameters that are required to verify Card Verification Value (CVV2) for the payment card. */
	export interface CardVerificationValue2 {

		/** Required */
		CardExpiryDate: string;
	}

	/** Card data parameters that are required to verify Card Verification Value (CVV2) for the payment card. */
	export interface CardVerificationValue2FormProperties {

		/** Required */
		CardExpiryDate: FormControl<string | null | undefined>,
	}
	export function CreateCardVerificationValue2FormGroup() {
		return new FormGroup<CardVerificationValue2FormProperties>({
			CardExpiryDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required to generate or verify Dynamic Card Verification Value (dCVV). */
	export interface DynamicCardVerificationCode {

		/** Required */
		ApplicationTransactionCounter: string;

		/** Required */
		PanSequenceNumber: string;

		/** Required */
		TrackData: string;

		/** Required */
		UnpredictableNumber: string;
	}

	/** Parameters that are required to generate or verify Dynamic Card Verification Value (dCVV). */
	export interface DynamicCardVerificationCodeFormProperties {

		/** Required */
		ApplicationTransactionCounter: FormControl<string | null | undefined>,

		/** Required */
		PanSequenceNumber: FormControl<string | null | undefined>,

		/** Required */
		TrackData: FormControl<string | null | undefined>,

		/** Required */
		UnpredictableNumber: FormControl<string | null | undefined>,
	}
	export function CreateDynamicCardVerificationCodeFormGroup() {
		return new FormGroup<DynamicCardVerificationCodeFormProperties>({
			ApplicationTransactionCounter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PanSequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TrackData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UnpredictableNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required to generate or verify Dynamic Card Verification Value (dCVV). */
	export interface DynamicCardVerificationValue {

		/** Required */
		ApplicationTransactionCounter: string;

		/** Required */
		CardExpiryDate: string;

		/** Required */
		PanSequenceNumber: string;

		/** Required */
		ServiceCode: string;
	}

	/** Parameters that are required to generate or verify Dynamic Card Verification Value (dCVV). */
	export interface DynamicCardVerificationValueFormProperties {

		/** Required */
		ApplicationTransactionCounter: FormControl<string | null | undefined>,

		/** Required */
		CardExpiryDate: FormControl<string | null | undefined>,

		/** Required */
		PanSequenceNumber: FormControl<string | null | undefined>,

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,
	}
	export function CreateDynamicCardVerificationValueFormGroup() {
		return new FormGroup<DynamicCardVerificationValueFormProperties>({
			ApplicationTransactionCounter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CardExpiryDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PanSequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GenerateMacOutput {

		/** Required */
		KeyArn: string;

		/** Required */
		KeyCheckValue: string;

		/** Required */
		Mac: string;
	}
	export interface GenerateMacOutputFormProperties {

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyCheckValue: FormControl<string | null | undefined>,

		/** Required */
		Mac: FormControl<string | null | undefined>,
	}
	export function CreateGenerateMacOutputFormGroup() {
		return new FormGroup<GenerateMacOutputFormProperties>({
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Mac: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MacAlgorithm { ISO9797_ALGORITHM1 = 'ISO9797_ALGORITHM1', ISO9797_ALGORITHM3 = 'ISO9797_ALGORITHM3', CMAC = 'CMAC', HMAC_SHA224 = 'HMAC_SHA224', HMAC_SHA256 = 'HMAC_SHA256', HMAC_SHA384 = 'HMAC_SHA384', HMAC_SHA512 = 'HMAC_SHA512' }


	/** Parameters required for DUKPT MAC generation and verification. */
	export interface MacAlgorithmDukpt {
		DukptDerivationType?: DukptDerivationType;

		/** Required */
		DukptKeyVariant: DukptKeyVariant;

		/** Required */
		KeySerialNumber: string;
	}

	/** Parameters required for DUKPT MAC generation and verification. */
	export interface MacAlgorithmDukptFormProperties {
		DukptDerivationType: FormControl<DukptDerivationType | null | undefined>,

		/** Required */
		DukptKeyVariant: FormControl<DukptKeyVariant | null | undefined>,

		/** Required */
		KeySerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateMacAlgorithmDukptFormGroup() {
		return new FormGroup<MacAlgorithmDukptFormProperties>({
			DukptDerivationType: new FormControl<DukptDerivationType | null | undefined>(undefined),
			DukptKeyVariant: new FormControl<DukptKeyVariant | null | undefined>(undefined, [Validators.required]),
			KeySerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required for EMV MAC generation and verification. */
	export interface MacAlgorithmEmv {

		/** Required */
		MajorKeyDerivationMode: MajorKeyDerivationMode;

		/** Required */
		PanSequenceNumber: string;

		/** Required */
		PrimaryAccountNumber: string;

		/** Required */
		SessionKeyDerivationMode: SessionKeyDerivationMode;

		/** Required */
		SessionKeyDerivationValue: SessionKeyDerivationValue;
	}

	/** Parameters that are required for EMV MAC generation and verification. */
	export interface MacAlgorithmEmvFormProperties {

		/** Required */
		MajorKeyDerivationMode: FormControl<MajorKeyDerivationMode | null | undefined>,

		/** Required */
		PanSequenceNumber: FormControl<string | null | undefined>,

		/** Required */
		PrimaryAccountNumber: FormControl<string | null | undefined>,

		/** Required */
		SessionKeyDerivationMode: FormControl<SessionKeyDerivationMode | null | undefined>,
	}
	export function CreateMacAlgorithmEmvFormGroup() {
		return new FormGroup<MacAlgorithmEmvFormProperties>({
			MajorKeyDerivationMode: new FormControl<MajorKeyDerivationMode | null | undefined>(undefined, [Validators.required]),
			PanSequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SessionKeyDerivationMode: new FormControl<SessionKeyDerivationMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MajorKeyDerivationMode { EMV_OPTION_A = 'EMV_OPTION_A', EMV_OPTION_B = 'EMV_OPTION_B' }

	export enum SessionKeyDerivationMode { EMV_COMMON_SESSION_KEY = 'EMV_COMMON_SESSION_KEY', EMV2000 = 'EMV2000', AMEX = 'AMEX', MASTERCARD_SESSION_KEY = 'MASTERCARD_SESSION_KEY', VISA = 'VISA' }


	/** Parameters to derive session key value using a MAC EMV algorithm. */
	export interface SessionKeyDerivationValue {
		ApplicationCryptogram?: string;
		ApplicationTransactionCounter?: string;
	}

	/** Parameters to derive session key value using a MAC EMV algorithm. */
	export interface SessionKeyDerivationValueFormProperties {
		ApplicationCryptogram: FormControl<string | null | undefined>,
		ApplicationTransactionCounter: FormControl<string | null | undefined>,
	}
	export function CreateSessionKeyDerivationValueFormGroup() {
		return new FormGroup<SessionKeyDerivationValueFormProperties>({
			ApplicationCryptogram: new FormControl<string | null | undefined>(undefined),
			ApplicationTransactionCounter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeneratePinDataOutput {

		/** Required */
		EncryptedPinBlock: string;

		/** Required */
		EncryptionKeyArn: string;

		/** Required */
		EncryptionKeyCheckValue: string;

		/** Required */
		GenerationKeyArn: string;

		/** Required */
		GenerationKeyCheckValue: string;

		/** Required */
		PinData: PinData;
	}
	export interface GeneratePinDataOutputFormProperties {

		/** Required */
		EncryptedPinBlock: FormControl<string | null | undefined>,

		/** Required */
		EncryptionKeyArn: FormControl<string | null | undefined>,

		/** Required */
		EncryptionKeyCheckValue: FormControl<string | null | undefined>,

		/** Required */
		GenerationKeyArn: FormControl<string | null | undefined>,

		/** Required */
		GenerationKeyCheckValue: FormControl<string | null | undefined>,
	}
	export function CreateGeneratePinDataOutputFormGroup() {
		return new FormGroup<GeneratePinDataOutputFormProperties>({
			EncryptedPinBlock: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EncryptionKeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GenerationKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GenerationKeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required to generate, translate, or verify PIN data. */
	export interface PinData {
		PinOffset?: string;
		VerificationValue?: string;
	}

	/** Parameters that are required to generate, translate, or verify PIN data. */
	export interface PinDataFormProperties {
		PinOffset: FormControl<string | null | undefined>,
		VerificationValue: FormControl<string | null | undefined>,
	}
	export function CreatePinDataFormGroup() {
		return new FormGroup<PinDataFormProperties>({
			PinOffset: new FormControl<string | null | undefined>(undefined),
			VerificationValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters that are required to generate or verify Ibm3624 natural PIN. */
	export interface Ibm3624NaturalPin {

		/** Required */
		DecimalizationTable: string;

		/** Required */
		PinValidationData: string;

		/** Required */
		PinValidationDataPadCharacter: string;
	}

	/** Parameters that are required to generate or verify Ibm3624 natural PIN. */
	export interface Ibm3624NaturalPinFormProperties {

		/** Required */
		DecimalizationTable: FormControl<string | null | undefined>,

		/** Required */
		PinValidationData: FormControl<string | null | undefined>,

		/** Required */
		PinValidationDataPadCharacter: FormControl<string | null | undefined>,
	}
	export function CreateIbm3624NaturalPinFormGroup() {
		return new FormGroup<Ibm3624NaturalPinFormProperties>({
			DecimalizationTable: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinValidationData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinValidationDataPadCharacter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required to generate or verify Ibm3624 PIN from offset PIN. */
	export interface Ibm3624PinFromOffset {

		/** Required */
		DecimalizationTable: string;

		/** Required */
		PinOffset: string;

		/** Required */
		PinValidationData: string;

		/** Required */
		PinValidationDataPadCharacter: string;
	}

	/** Parameters that are required to generate or verify Ibm3624 PIN from offset PIN. */
	export interface Ibm3624PinFromOffsetFormProperties {

		/** Required */
		DecimalizationTable: FormControl<string | null | undefined>,

		/** Required */
		PinOffset: FormControl<string | null | undefined>,

		/** Required */
		PinValidationData: FormControl<string | null | undefined>,

		/** Required */
		PinValidationDataPadCharacter: FormControl<string | null | undefined>,
	}
	export function CreateIbm3624PinFromOffsetFormGroup() {
		return new FormGroup<Ibm3624PinFromOffsetFormProperties>({
			DecimalizationTable: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinOffset: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinValidationData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinValidationDataPadCharacter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Pparameters that are required to generate or verify Ibm3624 PIN offset PIN. */
	export interface Ibm3624PinOffset {

		/** Required */
		DecimalizationTable: string;

		/** Required */
		EncryptedPinBlock: string;

		/** Required */
		PinValidationData: string;

		/** Required */
		PinValidationDataPadCharacter: string;
	}

	/** Pparameters that are required to generate or verify Ibm3624 PIN offset PIN. */
	export interface Ibm3624PinOffsetFormProperties {

		/** Required */
		DecimalizationTable: FormControl<string | null | undefined>,

		/** Required */
		EncryptedPinBlock: FormControl<string | null | undefined>,

		/** Required */
		PinValidationData: FormControl<string | null | undefined>,

		/** Required */
		PinValidationDataPadCharacter: FormControl<string | null | undefined>,
	}
	export function CreateIbm3624PinOffsetFormGroup() {
		return new FormGroup<Ibm3624PinOffsetFormProperties>({
			DecimalizationTable: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EncryptedPinBlock: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinValidationData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinValidationDataPadCharacter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required to generate or verify Ibm3624 random PIN. */
	export interface Ibm3624RandomPin {

		/** Required */
		DecimalizationTable: string;

		/** Required */
		PinValidationData: string;

		/** Required */
		PinValidationDataPadCharacter: string;
	}

	/** Parameters that are required to generate or verify Ibm3624 random PIN. */
	export interface Ibm3624RandomPinFormProperties {

		/** Required */
		DecimalizationTable: FormControl<string | null | undefined>,

		/** Required */
		PinValidationData: FormControl<string | null | undefined>,

		/** Required */
		PinValidationDataPadCharacter: FormControl<string | null | undefined>,
	}
	export function CreateIbm3624RandomPinFormGroup() {
		return new FormGroup<Ibm3624RandomPinFormProperties>({
			DecimalizationTable: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinValidationData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinValidationDataPadCharacter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required to generate or verify Visa PIN. */
	export interface VisaPin {

		/** Required */
		PinVerificationKeyIndex: number;
	}

	/** Parameters that are required to generate or verify Visa PIN. */
	export interface VisaPinFormProperties {

		/** Required */
		PinVerificationKeyIndex: FormControl<number | null | undefined>,
	}
	export function CreateVisaPinFormGroup() {
		return new FormGroup<VisaPinFormProperties>({
			PinVerificationKeyIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required to generate or verify Visa PVV (PIN Verification Value). */
	export interface VisaPinVerificationValue {

		/** Required */
		EncryptedPinBlock: string;

		/** Required */
		PinVerificationKeyIndex: number;
	}

	/** Parameters that are required to generate or verify Visa PVV (PIN Verification Value). */
	export interface VisaPinVerificationValueFormProperties {

		/** Required */
		EncryptedPinBlock: FormControl<string | null | undefined>,

		/** Required */
		PinVerificationKeyIndex: FormControl<number | null | undefined>,
	}
	export function CreateVisaPinVerificationValueFormGroup() {
		return new FormGroup<VisaPinVerificationValueFormProperties>({
			EncryptedPinBlock: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinVerificationKeyIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReEncryptDataOutput {

		/** Required */
		CipherText: string;

		/** Required */
		KeyArn: string;

		/** Required */
		KeyCheckValue: string;
	}
	export interface ReEncryptDataOutputFormProperties {

		/** Required */
		CipherText: FormControl<string | null | undefined>,

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyCheckValue: FormControl<string | null | undefined>,
	}
	export function CreateReEncryptDataOutputFormGroup() {
		return new FormGroup<ReEncryptDataOutputFormProperties>({
			CipherText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TranslatePinDataOutput {

		/** Required */
		KeyArn: string;

		/** Required */
		KeyCheckValue: string;

		/** Required */
		PinBlock: string;
	}
	export interface TranslatePinDataOutputFormProperties {

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyCheckValue: FormControl<string | null | undefined>,

		/** Required */
		PinBlock: FormControl<string | null | undefined>,
	}
	export function CreateTranslatePinDataOutputFormGroup() {
		return new FormGroup<TranslatePinDataOutputFormProperties>({
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinBlock: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required for tranlation between ISO9564 PIN format 0,3,4 tranlation. */
	export interface TranslationPinDataIsoFormat034 {

		/** Required */
		PrimaryAccountNumber: string;
	}

	/** Parameters that are required for tranlation between ISO9564 PIN format 0,3,4 tranlation. */
	export interface TranslationPinDataIsoFormat034FormProperties {

		/** Required */
		PrimaryAccountNumber: FormControl<string | null | undefined>,
	}
	export function CreateTranslationPinDataIsoFormat034FormGroup() {
		return new FormGroup<TranslationPinDataIsoFormat034FormProperties>({
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required for ISO9564 PIN format 1 tranlation. */
	export interface TranslationPinDataIsoFormat1 {
	}

	/** Parameters that are required for ISO9564 PIN format 1 tranlation. */
	export interface TranslationPinDataIsoFormat1FormProperties {
	}
	export function CreateTranslationPinDataIsoFormat1FormGroup() {
		return new FormGroup<TranslationPinDataIsoFormat1FormProperties>({
		});

	}

	export interface VerifyAuthRequestCryptogramOutput {
		AuthResponseValue?: string;

		/** Required */
		KeyArn: string;

		/** Required */
		KeyCheckValue: string;
	}
	export interface VerifyAuthRequestCryptogramOutputFormProperties {
		AuthResponseValue: FormControl<string | null | undefined>,

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyCheckValue: FormControl<string | null | undefined>,
	}
	export function CreateVerifyAuthRequestCryptogramOutputFormGroup() {
		return new FormGroup<VerifyAuthRequestCryptogramOutputFormProperties>({
			AuthResponseValue: new FormControl<string | null | undefined>(undefined),
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required for ARPC response generation using method1 after ARQC verification is successful. */
	export interface CryptogramVerificationArpcMethod1 {

		/** Required */
		AuthResponseCode: string;
	}

	/** Parameters that are required for ARPC response generation using method1 after ARQC verification is successful. */
	export interface CryptogramVerificationArpcMethod1FormProperties {

		/** Required */
		AuthResponseCode: FormControl<string | null | undefined>,
	}
	export function CreateCryptogramVerificationArpcMethod1FormGroup() {
		return new FormGroup<CryptogramVerificationArpcMethod1FormProperties>({
			AuthResponseCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required for ARPC response generation using method2 after ARQC verification is successful. */
	export interface CryptogramVerificationArpcMethod2 {

		/** Required */
		CardStatusUpdate: string;
		ProprietaryAuthenticationData?: string;
	}

	/** Parameters that are required for ARPC response generation using method2 after ARQC verification is successful. */
	export interface CryptogramVerificationArpcMethod2FormProperties {

		/** Required */
		CardStatusUpdate: FormControl<string | null | undefined>,
		ProprietaryAuthenticationData: FormControl<string | null | undefined>,
	}
	export function CreateCryptogramVerificationArpcMethod2FormGroup() {
		return new FormGroup<CryptogramVerificationArpcMethod2FormProperties>({
			CardStatusUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProprietaryAuthenticationData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to derive session key for an Amex payment card. */
	export interface SessionKeyAmex {

		/** Required */
		PanSequenceNumber: string;

		/** Required */
		PrimaryAccountNumber: string;
	}

	/** Parameters to derive session key for an Amex payment card. */
	export interface SessionKeyAmexFormProperties {

		/** Required */
		PanSequenceNumber: FormControl<string | null | undefined>,

		/** Required */
		PrimaryAccountNumber: FormControl<string | null | undefined>,
	}
	export function CreateSessionKeyAmexFormGroup() {
		return new FormGroup<SessionKeyAmexFormProperties>({
			PanSequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters to derive session key for an Emv2000 payment card for ARQC verification. */
	export interface SessionKeyEmv2000 {

		/** Required */
		ApplicationTransactionCounter: string;

		/** Required */
		PanSequenceNumber: string;

		/** Required */
		PrimaryAccountNumber: string;
	}

	/** Parameters to derive session key for an Emv2000 payment card for ARQC verification. */
	export interface SessionKeyEmv2000FormProperties {

		/** Required */
		ApplicationTransactionCounter: FormControl<string | null | undefined>,

		/** Required */
		PanSequenceNumber: FormControl<string | null | undefined>,

		/** Required */
		PrimaryAccountNumber: FormControl<string | null | undefined>,
	}
	export function CreateSessionKeyEmv2000FormGroup() {
		return new FormGroup<SessionKeyEmv2000FormProperties>({
			ApplicationTransactionCounter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PanSequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters to derive session key for an Emv common payment card for ARQC verification. */
	export interface SessionKeyEmvCommon {

		/** Required */
		ApplicationTransactionCounter: string;

		/** Required */
		PanSequenceNumber: string;

		/** Required */
		PrimaryAccountNumber: string;
	}

	/** Parameters to derive session key for an Emv common payment card for ARQC verification. */
	export interface SessionKeyEmvCommonFormProperties {

		/** Required */
		ApplicationTransactionCounter: FormControl<string | null | undefined>,

		/** Required */
		PanSequenceNumber: FormControl<string | null | undefined>,

		/** Required */
		PrimaryAccountNumber: FormControl<string | null | undefined>,
	}
	export function CreateSessionKeyEmvCommonFormGroup() {
		return new FormGroup<SessionKeyEmvCommonFormProperties>({
			ApplicationTransactionCounter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PanSequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters to derive session key for Mastercard payment card for ARQC verification. */
	export interface SessionKeyMastercard {

		/** Required */
		ApplicationTransactionCounter: string;

		/** Required */
		PanSequenceNumber: string;

		/** Required */
		PrimaryAccountNumber: string;

		/** Required */
		UnpredictableNumber: string;
	}

	/** Parameters to derive session key for Mastercard payment card for ARQC verification. */
	export interface SessionKeyMastercardFormProperties {

		/** Required */
		ApplicationTransactionCounter: FormControl<string | null | undefined>,

		/** Required */
		PanSequenceNumber: FormControl<string | null | undefined>,

		/** Required */
		PrimaryAccountNumber: FormControl<string | null | undefined>,

		/** Required */
		UnpredictableNumber: FormControl<string | null | undefined>,
	}
	export function CreateSessionKeyMastercardFormGroup() {
		return new FormGroup<SessionKeyMastercardFormProperties>({
			ApplicationTransactionCounter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PanSequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UnpredictableNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters to derive session key for Visa payment card for ARQC verification. */
	export interface SessionKeyVisa {

		/** Required */
		PanSequenceNumber: string;

		/** Required */
		PrimaryAccountNumber: string;
	}

	/** Parameters to derive session key for Visa payment card for ARQC verification. */
	export interface SessionKeyVisaFormProperties {

		/** Required */
		PanSequenceNumber: FormControl<string | null | undefined>,

		/** Required */
		PrimaryAccountNumber: FormControl<string | null | undefined>,
	}
	export function CreateSessionKeyVisaFormGroup() {
		return new FormGroup<SessionKeyVisaFormProperties>({
			PanSequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerificationFailedException {
	}
	export interface VerificationFailedExceptionFormProperties {
	}
	export function CreateVerificationFailedExceptionFormGroup() {
		return new FormGroup<VerificationFailedExceptionFormProperties>({
		});

	}

	export interface VerifyCardValidationDataOutput {

		/** Required */
		KeyArn: string;

		/** Required */
		KeyCheckValue: string;
	}
	export interface VerifyCardValidationDataOutputFormProperties {

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyCheckValue: FormControl<string | null | undefined>,
	}
	export function CreateVerifyCardValidationDataOutputFormGroup() {
		return new FormGroup<VerifyCardValidationDataOutputFormProperties>({
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required to generate or verify dCVC (Dynamic Card Verification Code). */
	export interface DiscoverDynamicCardVerificationCode {

		/** Required */
		ApplicationTransactionCounter: string;

		/** Required */
		CardExpiryDate: string;

		/** Required */
		UnpredictableNumber: string;
	}

	/** Parameters that are required to generate or verify dCVC (Dynamic Card Verification Code). */
	export interface DiscoverDynamicCardVerificationCodeFormProperties {

		/** Required */
		ApplicationTransactionCounter: FormControl<string | null | undefined>,

		/** Required */
		CardExpiryDate: FormControl<string | null | undefined>,

		/** Required */
		UnpredictableNumber: FormControl<string | null | undefined>,
	}
	export function CreateDiscoverDynamicCardVerificationCodeFormGroup() {
		return new FormGroup<DiscoverDynamicCardVerificationCodeFormProperties>({
			ApplicationTransactionCounter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CardExpiryDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UnpredictableNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerifyMacOutput {

		/** Required */
		KeyArn: string;

		/** Required */
		KeyCheckValue: string;
	}
	export interface VerifyMacOutputFormProperties {

		/** Required */
		KeyArn: FormControl<string | null | undefined>,

		/** Required */
		KeyCheckValue: FormControl<string | null | undefined>,
	}
	export function CreateVerifyMacOutputFormGroup() {
		return new FormGroup<VerifyMacOutputFormProperties>({
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerifyPinDataOutput {

		/** Required */
		EncryptionKeyArn: string;

		/** Required */
		EncryptionKeyCheckValue: string;

		/** Required */
		VerificationKeyArn: string;

		/** Required */
		VerificationKeyCheckValue: string;
	}
	export interface VerifyPinDataOutputFormProperties {

		/** Required */
		EncryptionKeyArn: FormControl<string | null | undefined>,

		/** Required */
		EncryptionKeyCheckValue: FormControl<string | null | undefined>,

		/** Required */
		VerificationKeyArn: FormControl<string | null | undefined>,

		/** Required */
		VerificationKeyCheckValue: FormControl<string | null | undefined>,
	}
	export function CreateVerifyPinDataOutputFormGroup() {
		return new FormGroup<VerifyPinDataOutputFormProperties>({
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EncryptionKeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VerificationKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VerificationKeyCheckValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required to generate or verify Ibm3624 PIN verification PIN. */
	export interface Ibm3624PinVerification {

		/** Required */
		DecimalizationTable: string;

		/** Required */
		PinOffset: string;

		/** Required */
		PinValidationData: string;

		/** Required */
		PinValidationDataPadCharacter: string;
	}

	/** Parameters that are required to generate or verify Ibm3624 PIN verification PIN. */
	export interface Ibm3624PinVerificationFormProperties {

		/** Required */
		DecimalizationTable: FormControl<string | null | undefined>,

		/** Required */
		PinOffset: FormControl<string | null | undefined>,

		/** Required */
		PinValidationData: FormControl<string | null | undefined>,

		/** Required */
		PinValidationDataPadCharacter: FormControl<string | null | undefined>,
	}
	export function CreateIbm3624PinVerificationFormGroup() {
		return new FormGroup<Ibm3624PinVerificationFormProperties>({
			DecimalizationTable: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinOffset: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinValidationData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinValidationDataPadCharacter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required to generate or verify Visa PIN. */
	export interface VisaPinVerification {

		/** Required */
		PinVerificationKeyIndex: number;

		/** Required */
		VerificationValue: string;
	}

	/** Parameters that are required to generate or verify Visa PIN. */
	export interface VisaPinVerificationFormProperties {

		/** Required */
		PinVerificationKeyIndex: FormControl<number | null | undefined>,

		/** Required */
		VerificationValue: FormControl<string | null | undefined>,
	}
	export function CreateVisaPinVerificationFormGroup() {
		return new FormGroup<VisaPinVerificationFormProperties>({
			PinVerificationKeyIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			VerificationValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Card data parameters that are required to generate Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC). */
	export interface CardGenerationAttributes {

		/** Card data parameters that are required to generate a Card Security Code (CSC2) for an AMEX payment card. */
		AmexCardSecurityCodeVersion1?: AmexCardSecurityCodeVersion1;
		AmexCardSecurityCodeVersion2?: AmexCardSecurityCodeVersion2;
		CardHolderVerificationValue?: CardHolderVerificationValue;
		CardVerificationValue1?: CardVerificationValue1;
		CardVerificationValue2?: CardVerificationValue2;
		DynamicCardVerificationCode?: DynamicCardVerificationCode;
		DynamicCardVerificationValue?: DynamicCardVerificationValue;
	}

	/** Card data parameters that are required to generate Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC). */
	export interface CardGenerationAttributesFormProperties {
	}
	export function CreateCardGenerationAttributesFormGroup() {
		return new FormGroup<CardGenerationAttributesFormProperties>({
		});

	}


	/** Card data parameters that are requried to verify Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC). */
	export interface CardVerificationAttributes {

		/** Card data parameters that are required to generate a Card Security Code (CSC2) for an AMEX payment card. */
		AmexCardSecurityCodeVersion1?: AmexCardSecurityCodeVersion1;
		AmexCardSecurityCodeVersion2?: AmexCardSecurityCodeVersion2;
		CardHolderVerificationValue?: CardHolderVerificationValue;
		CardVerificationValue1?: CardVerificationValue1;
		CardVerificationValue2?: CardVerificationValue2;
		DiscoverDynamicCardVerificationCode?: DiscoverDynamicCardVerificationCode;
		DynamicCardVerificationCode?: DynamicCardVerificationCode;
		DynamicCardVerificationValue?: DynamicCardVerificationValue;
	}

	/** Card data parameters that are requried to verify Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC). */
	export interface CardVerificationAttributesFormProperties {
	}
	export function CreateCardVerificationAttributesFormGroup() {
		return new FormGroup<CardVerificationAttributesFormProperties>({
		});

	}


	/** Parameters that are required for Authorization Response Cryptogram (ARPC) generation after Authorization Request Cryptogram (ARQC) verification is successful. */
	export interface CryptogramAuthResponse {
		ArpcMethod1?: CryptogramVerificationArpcMethod1;
		ArpcMethod2?: CryptogramVerificationArpcMethod2;
	}

	/** Parameters that are required for Authorization Response Cryptogram (ARPC) generation after Authorization Request Cryptogram (ARQC) verification is successful. */
	export interface CryptogramAuthResponseFormProperties {
	}
	export function CreateCryptogramAuthResponseFormGroup() {
		return new FormGroup<CryptogramAuthResponseFormProperties>({
		});

	}


	/** Parameters that are required to perform encryption and decryption operations. */
	export interface EncryptionDecryptionAttributes {

		/** Parameters for plaintext encryption using asymmetric keys. */
		Asymmetric?: AsymmetricEncryptionAttributes;

		/** Parameters that are required to encrypt plaintext data using DUKPT. */
		Dukpt?: DukptEncryptionAttributes;
		Symmetric?: SymmetricEncryptionAttributes;
	}

	/** Parameters that are required to perform encryption and decryption operations. */
	export interface EncryptionDecryptionAttributesFormProperties {
	}
	export function CreateEncryptionDecryptionAttributesFormGroup() {
		return new FormGroup<EncryptionDecryptionAttributesFormProperties>({
		});

	}

	export interface DecryptDataInput {

		/** Required */
		CipherText: string;

		/** Required */
		DecryptionAttributes: EncryptionDecryptionAttributes;
	}
	export interface DecryptDataInputFormProperties {

		/** Required */
		CipherText: FormControl<string | null | undefined>,
	}
	export function CreateDecryptDataInputFormGroup() {
		return new FormGroup<DecryptDataInputFormProperties>({
			CipherText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are used for Derived Unique Key Per Transaction (DUKPT) derivation algorithm. */
	export interface DukptAttributes {

		/** Required */
		DukptDerivationType: DukptDerivationType;

		/** Required */
		KeySerialNumber: string;
	}

	/** Parameters that are used for Derived Unique Key Per Transaction (DUKPT) derivation algorithm. */
	export interface DukptAttributesFormProperties {

		/** Required */
		DukptDerivationType: FormControl<DukptDerivationType | null | undefined>,

		/** Required */
		KeySerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateDukptAttributesFormGroup() {
		return new FormGroup<DukptAttributesFormProperties>({
			DukptDerivationType: new FormControl<DukptDerivationType | null | undefined>(undefined, [Validators.required]),
			KeySerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters required for encryption or decryption of data using DUKPT. */
	export interface DukptDerivationAttributes {
		DukptKeyDerivationType?: DukptDerivationType;
		DukptKeyVariant?: DukptKeyVariant;

		/** Required */
		KeySerialNumber: string;
	}

	/** Parameters required for encryption or decryption of data using DUKPT. */
	export interface DukptDerivationAttributesFormProperties {
		DukptKeyDerivationType: FormControl<DukptDerivationType | null | undefined>,
		DukptKeyVariant: FormControl<DukptKeyVariant | null | undefined>,

		/** Required */
		KeySerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateDukptDerivationAttributesFormGroup() {
		return new FormGroup<DukptDerivationAttributesFormProperties>({
			DukptKeyDerivationType: new FormControl<DukptDerivationType | null | undefined>(undefined),
			DukptKeyVariant: new FormControl<DukptKeyVariant | null | undefined>(undefined),
			KeySerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EncryptDataInput {

		/** Required */
		EncryptionAttributes: EncryptionDecryptionAttributes;

		/** Required */
		PlainText: string;
	}
	export interface EncryptDataInputFormProperties {

		/** Required */
		PlainText: FormControl<string | null | undefined>,
	}
	export function CreateEncryptDataInputFormGroup() {
		return new FormGroup<EncryptDataInputFormProperties>({
			PlainText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GenerateCardValidationDataInput {

		/** Required */
		GenerationAttributes: CardGenerationAttributes;

		/** Required */
		KeyIdentifier: string;

		/** Required */
		PrimaryAccountNumber: string;
		ValidationDataLength?: number | null;
	}
	export interface GenerateCardValidationDataInputFormProperties {

		/** Required */
		KeyIdentifier: FormControl<string | null | undefined>,

		/** Required */
		PrimaryAccountNumber: FormControl<string | null | undefined>,
		ValidationDataLength: FormControl<number | null | undefined>,
	}
	export function CreateGenerateCardValidationDataInputFormGroup() {
		return new FormGroup<GenerateCardValidationDataInputFormProperties>({
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValidationDataLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Parameters that are required for DUKPT, HMAC, or EMV MAC generation or verification. */
	export interface MacAttributes {
		Algorithm?: MacAlgorithm;
		DukptCmac?: MacAlgorithmDukpt;
		DukptIso9797Algorithm1?: MacAlgorithmDukpt;
		DukptIso9797Algorithm3?: MacAlgorithmDukpt;
		EmvMac?: MacAlgorithmEmv;
	}

	/** Parameters that are required for DUKPT, HMAC, or EMV MAC generation or verification. */
	export interface MacAttributesFormProperties {
		Algorithm: FormControl<MacAlgorithm | null | undefined>,
	}
	export function CreateMacAttributesFormGroup() {
		return new FormGroup<MacAttributesFormProperties>({
			Algorithm: new FormControl<MacAlgorithm | null | undefined>(undefined),
		});

	}

	export interface GenerateMacInput {

		/** Required */
		GenerationAttributes: MacAttributes;

		/** Required */
		KeyIdentifier: string;
		MacLength?: number | null;

		/** Required */
		MessageData: string;
	}
	export interface GenerateMacInputFormProperties {

		/** Required */
		KeyIdentifier: FormControl<string | null | undefined>,
		MacLength: FormControl<number | null | undefined>,

		/** Required */
		MessageData: FormControl<string | null | undefined>,
	}
	export function CreateGenerateMacInputFormGroup() {
		return new FormGroup<GenerateMacInputFormProperties>({
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MacLength: new FormControl<number | null | undefined>(undefined),
			MessageData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required for PIN data generation. */
	export interface PinGenerationAttributes {
		Ibm3624NaturalPin?: Ibm3624NaturalPin;
		Ibm3624PinFromOffset?: Ibm3624PinFromOffset;
		Ibm3624PinOffset?: Ibm3624PinOffset;
		Ibm3624RandomPin?: Ibm3624RandomPin;
		VisaPin?: VisaPin;
		VisaPinVerificationValue?: VisaPinVerificationValue;
	}

	/** Parameters that are required for PIN data generation. */
	export interface PinGenerationAttributesFormProperties {
	}
	export function CreatePinGenerationAttributesFormGroup() {
		return new FormGroup<PinGenerationAttributesFormProperties>({
		});

	}

	export enum PinBlockFormatForPinData { ISO_FORMAT_0 = 'ISO_FORMAT_0', ISO_FORMAT_3 = 'ISO_FORMAT_3' }

	export interface GeneratePinDataInput {

		/** Required */
		EncryptionKeyIdentifier: string;

		/** Required */
		GenerationAttributes: PinGenerationAttributes;

		/** Required */
		GenerationKeyIdentifier: string;

		/** Required */
		PinBlockFormat: PinBlockFormatForPinData;
		PinDataLength?: number | null;

		/** Required */
		PrimaryAccountNumber: string;
	}
	export interface GeneratePinDataInputFormProperties {

		/** Required */
		EncryptionKeyIdentifier: FormControl<string | null | undefined>,

		/** Required */
		GenerationKeyIdentifier: FormControl<string | null | undefined>,

		/** Required */
		PinBlockFormat: FormControl<PinBlockFormatForPinData | null | undefined>,
		PinDataLength: FormControl<number | null | undefined>,

		/** Required */
		PrimaryAccountNumber: FormControl<string | null | undefined>,
	}
	export function CreateGeneratePinDataInputFormGroup() {
		return new FormGroup<GeneratePinDataInputFormProperties>({
			EncryptionKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GenerationKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinBlockFormat: new FormControl<PinBlockFormatForPinData | null | undefined>(undefined, [Validators.required]),
			PinDataLength: new FormControl<number | null | undefined>(undefined),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters that are required for PIN data verification. */
	export interface PinVerificationAttributes {
		Ibm3624Pin?: Ibm3624PinVerification;
		VisaPin?: VisaPinVerification;
	}

	/** Parameters that are required for PIN data verification. */
	export interface PinVerificationAttributesFormProperties {
	}
	export function CreatePinVerificationAttributesFormGroup() {
		return new FormGroup<PinVerificationAttributesFormProperties>({
		});

	}


	/** Parameters that are required to perform reencryption operation. */
	export interface ReEncryptionAttributes {

		/** Parameters that are required to encrypt plaintext data using DUKPT. */
		Dukpt?: DukptEncryptionAttributes;
		Symmetric?: SymmetricEncryptionAttributes;
	}

	/** Parameters that are required to perform reencryption operation. */
	export interface ReEncryptionAttributesFormProperties {
	}
	export function CreateReEncryptionAttributesFormGroup() {
		return new FormGroup<ReEncryptionAttributesFormProperties>({
		});

	}

	export interface ReEncryptDataInput {

		/** Required */
		CipherText: string;

		/** Required */
		IncomingEncryptionAttributes: ReEncryptionAttributes;

		/** Required */
		OutgoingEncryptionAttributes: ReEncryptionAttributes;

		/** Required */
		OutgoingKeyIdentifier: string;
	}
	export interface ReEncryptDataInputFormProperties {

		/** Required */
		CipherText: FormControl<string | null | undefined>,

		/** Required */
		OutgoingKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateReEncryptDataInputFormGroup() {
		return new FormGroup<ReEncryptDataInputFormProperties>({
			CipherText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutgoingKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters to derive a session key for Authorization Response Cryptogram (ARQC) verification. */
	export interface SessionKeyDerivation {
		Amex?: SessionKeyAmex;
		Emv2000?: SessionKeyEmv2000;
		EmvCommon?: SessionKeyEmvCommon;
		Mastercard?: SessionKeyMastercard;
		Visa?: SessionKeyVisa;
	}

	/** Parameters to derive a session key for Authorization Response Cryptogram (ARQC) verification. */
	export interface SessionKeyDerivationFormProperties {
	}
	export function CreateSessionKeyDerivationFormGroup() {
		return new FormGroup<SessionKeyDerivationFormProperties>({
		});

	}


	/** Parameters that are required for translation between ISO9564 PIN block formats 0,1,3,4. */
	export interface TranslationIsoFormats {
		IsoFormat0?: TranslationPinDataIsoFormat034;
		IsoFormat1?: TranslationPinDataIsoFormat1;
		IsoFormat3?: TranslationPinDataIsoFormat034;
		IsoFormat4?: TranslationPinDataIsoFormat034;
	}

	/** Parameters that are required for translation between ISO9564 PIN block formats 0,1,3,4. */
	export interface TranslationIsoFormatsFormProperties {
	}
	export function CreateTranslationIsoFormatsFormGroup() {
		return new FormGroup<TranslationIsoFormatsFormProperties>({
		});

	}

	export interface TranslatePinDataInput {

		/** Required */
		EncryptedPinBlock: string;
		IncomingDukptAttributes?: DukptDerivationAttributes;

		/** Required */
		IncomingKeyIdentifier: string;

		/** Required */
		IncomingTranslationAttributes: TranslationIsoFormats;
		OutgoingDukptAttributes?: DukptDerivationAttributes;

		/** Required */
		OutgoingKeyIdentifier: string;

		/** Required */
		OutgoingTranslationAttributes: TranslationIsoFormats;
	}
	export interface TranslatePinDataInputFormProperties {

		/** Required */
		EncryptedPinBlock: FormControl<string | null | undefined>,

		/** Required */
		IncomingKeyIdentifier: FormControl<string | null | undefined>,

		/** Required */
		OutgoingKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateTranslatePinDataInputFormGroup() {
		return new FormGroup<TranslatePinDataInputFormProperties>({
			EncryptedPinBlock: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IncomingKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutgoingKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerifyAuthRequestCryptogramInput {

		/** Required */
		AuthRequestCryptogram: string;
		AuthResponseAttributes?: CryptogramAuthResponse;

		/** Required */
		KeyIdentifier: string;

		/** Required */
		MajorKeyDerivationMode: MajorKeyDerivationMode;

		/** Required */
		SessionKeyDerivationAttributes: SessionKeyDerivation;

		/** Required */
		TransactionData: string;
	}
	export interface VerifyAuthRequestCryptogramInputFormProperties {

		/** Required */
		AuthRequestCryptogram: FormControl<string | null | undefined>,

		/** Required */
		KeyIdentifier: FormControl<string | null | undefined>,

		/** Required */
		MajorKeyDerivationMode: FormControl<MajorKeyDerivationMode | null | undefined>,

		/** Required */
		TransactionData: FormControl<string | null | undefined>,
	}
	export function CreateVerifyAuthRequestCryptogramInputFormGroup() {
		return new FormGroup<VerifyAuthRequestCryptogramInputFormProperties>({
			AuthRequestCryptogram: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MajorKeyDerivationMode: new FormControl<MajorKeyDerivationMode | null | undefined>(undefined, [Validators.required]),
			TransactionData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerifyCardValidationDataInput {

		/** Required */
		KeyIdentifier: string;

		/** Required */
		PrimaryAccountNumber: string;

		/** Required */
		ValidationData: string;

		/** Required */
		VerificationAttributes: CardVerificationAttributes;
	}
	export interface VerifyCardValidationDataInputFormProperties {

		/** Required */
		KeyIdentifier: FormControl<string | null | undefined>,

		/** Required */
		PrimaryAccountNumber: FormControl<string | null | undefined>,

		/** Required */
		ValidationData: FormControl<string | null | undefined>,
	}
	export function CreateVerifyCardValidationDataInputFormGroup() {
		return new FormGroup<VerifyCardValidationDataInputFormProperties>({
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValidationData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerifyMacInput {

		/** Required */
		KeyIdentifier: string;

		/** Required */
		Mac: string;
		MacLength?: number | null;

		/** Required */
		MessageData: string;

		/** Required */
		VerificationAttributes: MacAttributes;
	}
	export interface VerifyMacInputFormProperties {

		/** Required */
		KeyIdentifier: FormControl<string | null | undefined>,

		/** Required */
		Mac: FormControl<string | null | undefined>,
		MacLength: FormControl<number | null | undefined>,

		/** Required */
		MessageData: FormControl<string | null | undefined>,
	}
	export function CreateVerifyMacInputFormGroup() {
		return new FormGroup<VerifyMacInputFormProperties>({
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Mac: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MacLength: new FormControl<number | null | undefined>(undefined),
			MessageData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerifyPinDataInput {
		DukptAttributes?: DukptAttributes;

		/** Required */
		EncryptedPinBlock: string;

		/** Required */
		EncryptionKeyIdentifier: string;

		/** Required */
		PinBlockFormat: PinBlockFormatForPinData;
		PinDataLength?: number | null;

		/** Required */
		PrimaryAccountNumber: string;

		/** Required */
		VerificationAttributes: PinVerificationAttributes;

		/** Required */
		VerificationKeyIdentifier: string;
	}
	export interface VerifyPinDataInputFormProperties {

		/** Required */
		EncryptedPinBlock: FormControl<string | null | undefined>,

		/** Required */
		EncryptionKeyIdentifier: FormControl<string | null | undefined>,

		/** Required */
		PinBlockFormat: FormControl<PinBlockFormatForPinData | null | undefined>,
		PinDataLength: FormControl<number | null | undefined>,

		/** Required */
		PrimaryAccountNumber: FormControl<string | null | undefined>,

		/** Required */
		VerificationKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateVerifyPinDataInputFormGroup() {
		return new FormGroup<VerifyPinDataInputFormProperties>({
			EncryptedPinBlock: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EncryptionKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PinBlockFormat: new FormControl<PinBlockFormatForPinData | null | undefined>(undefined, [Validators.required]),
			PinDataLength: new FormControl<number | null | undefined>(undefined),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VerificationKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Decrypts ciphertext data to plaintext using symmetric, asymmetric, or DUKPT data encryption key. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/decrypt-data.html">Decrypt data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>You can use an encryption key generated within Amazon Web Services Payment Cryptography, or you can import your own encryption key by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>. For this operation, the key must have <code>KeyModesOfUse</code> set to <code>Decrypt</code>. In asymmetric decryption, Amazon Web Services Payment Cryptography decrypts the ciphertext using the private component of the asymmetric encryption key pair. For data encryption outside of Amazon Web Services Payment Cryptography, you can export the public component of the asymmetric key pair by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetPublicKeyCertificate.html">GetPublicCertificate</a>.</p> <p>For symmetric and DUKPT decryption, Amazon Web Services Payment Cryptography supports <code>TDES</code> and <code>AES</code> algorithms. For asymmetric decryption, Amazon Web Services Payment Cryptography supports <code>RSA</code>. When you use DUKPT, for <code>TDES</code> algorithm, the ciphertext data length must be a multiple of 16 bytes. For <code>AES</code> algorithm, the ciphertext data length must be a multiple of 32 bytes.</p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>EncryptData</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetPublicKeyCertificate.html">GetPublicCertificate</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a> </p> </li> </ul>
		 * Post keys/{KeyIdentifier}/decrypt
		 * @param {string} KeyIdentifier The <code>keyARN</code> of the encryption key that Amazon Web Services Payment Cryptography uses for ciphertext decryption.
		 * @return {DecryptDataOutput} Success
		 */
		DecryptData(KeyIdentifier: string, requestBody: DecryptDataPostBody): Observable<DecryptDataOutput> {
			return this.http.post<DecryptDataOutput>(this.baseUri + 'keys/' + (KeyIdentifier == null ? '' : encodeURIComponent(KeyIdentifier)) + '/decrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Encrypts plaintext data to ciphertext using symmetric, asymmetric, or DUKPT data encryption key. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/encrypt-data.html">Encrypt data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>You can generate an encryption key within Amazon Web Services Payment Cryptography by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a>. You can import your own encryption key by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>. For this operation, the key must have <code>KeyModesOfUse</code> set to <code>Encrypt</code>. In asymmetric encryption, plaintext is encrypted using public component. You can import the public component of an asymmetric key pair created outside Amazon Web Services Payment Cryptography by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>). </p> <p>for symmetric and DUKPT encryption, Amazon Web Services Payment Cryptography supports <code>TDES</code> and <code>AES</code> algorithms. For asymmetric encryption, Amazon Web Services Payment Cryptography supports <code>RSA</code>. To encrypt using DUKPT, you must already have a DUKPT key in your account with <code>KeyModesOfUse</code> set to <code>DeriveKey</code>, or you can generate a new DUKPT key by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a>.</p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DecryptData</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetPublicKeyCertificate.html">GetPublicCertificate</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a> </p> </li> <li> <p> <a>ReEncryptData</a> </p> </li> </ul>
		 * Post keys/{KeyIdentifier}/encrypt
		 * @param {string} KeyIdentifier The <code>keyARN</code> of the encryption key that Amazon Web Services Payment Cryptography uses for plaintext encryption.
		 * @return {EncryptDataOutput} Success
		 */
		EncryptData(KeyIdentifier: string, requestBody: EncryptDataPostBody): Observable<EncryptDataOutput> {
			return this.http.post<EncryptDataOutput>(this.baseUri + 'keys/' + (KeyIdentifier == null ? '' : encodeURIComponent(KeyIdentifier)) + '/encrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC). For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/generate-card-data.html">Generate card data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>This operation generates a CVV or CSC value that is printed on a payment credit or debit card during card production. The CVV or CSC, PAN (Primary Account Number) and expiration date of the card are required to check its validity during transaction processing. To begin this operation, a CVK (Card Verification Key) encryption key is required. You can use <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a> or <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a> to establish a CVK within Amazon Web Services Payment Cryptography. The <code>KeyModesOfUse</code> should be set to <code>Generate</code> and <code>Verify</code> for a CVK encryption key. </p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a> </p> </li> <li> <p> <a>VerifyCardValidationData</a> </p> </li> </ul>
		 * Post cardvalidationdata/generate
		 * @return {GenerateCardValidationDataOutput} Success
		 */
		GenerateCardValidationData(requestBody: GenerateCardValidationDataPostBody): Observable<GenerateCardValidationDataOutput> {
			return this.http.post<GenerateCardValidationDataOutput>(this.baseUri + 'cardvalidationdata/generate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a Message Authentication Code (MAC) cryptogram within Amazon Web Services Payment Cryptography. </p> <p>You can use this operation when keys won't be shared but mutual data is present on both ends for validation. In this case, known data values are used to generate a MAC on both ends for comparision without sending or receiving data in ciphertext or plaintext. You can use this operation to generate a DUPKT, HMAC or EMV MAC by setting generation attributes and algorithm to the associated values. The MAC generation encryption key must have valid values for <code>KeyUsage</code> such as <code>TR31_M7_HMAC_KEY</code> for HMAC generation, and they key must have <code>KeyModesOfUse</code> set to <code>Generate</code> and <code>Verify</code>.</p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>VerifyMac</a> </p> </li> </ul>
		 * Post mac/generate
		 * @return {GenerateMacOutput} Success
		 */
		GenerateMac(requestBody: GenerateMacPostBody): Observable<GenerateMacOutput> {
			return this.http.post<GenerateMacOutput>(this.baseUri + 'mac/generate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates pin-related data such as PIN, PIN Verification Value (PVV), PIN Block, and PIN Offset during new card issuance or reissuance. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/generate-pin-data.html">Generate PIN data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation generates PIN, PVV, or PIN Offset and then encrypts it using Pin Encryption Key (PEK) to create an <code>EncryptedPinBlock</code> for transmission from Amazon Web Services Payment Cryptography. This operation uses a separate Pin Verification Key (PVK) for VISA PVV generation. </p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GenerateCardValidationData</a> </p> </li> <li> <p> <a>TranslatePinData</a> </p> </li> <li> <p> <a>VerifyPinData</a> </p> </li> </ul>
		 * Post pindata/generate
		 * @return {GeneratePinDataOutput} Success
		 */
		GeneratePinData(requestBody: GeneratePinDataPostBody): Observable<GeneratePinDataOutput> {
			return this.http.post<GeneratePinDataOutput>(this.baseUri + 'pindata/generate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Re-encrypt ciphertext using DUKPT, Symmetric and Asymmetric Data Encryption Keys. </p> <p>You can either generate an encryption key within Amazon Web Services Payment Cryptography by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a> or import your own encryption key by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>. The <code>KeyArn</code> for use with this operation must be in a compatible key state with <code>KeyModesOfUse</code> set to <code>Encrypt</code>. In asymmetric encryption, ciphertext is encrypted using public component (imported by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>) of the asymmetric key pair created outside of Amazon Web Services Payment Cryptography. </p> <p>For symmetric and DUKPT encryption, Amazon Web Services Payment Cryptography supports <code>TDES</code> and <code>AES</code> algorithms. For asymmetric encryption, Amazon Web Services Payment Cryptography supports <code>RSA</code>. To encrypt using DUKPT, a DUKPT key must already exist within your account with <code>KeyModesOfUse</code> set to <code>DeriveKey</code> or a new DUKPT can be generated by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a>.</p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DecryptData</a> </p> </li> <li> <p> <a>EncryptData</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetPublicKeyCertificate.html">GetPublicCertificate</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a> </p> </li> </ul>
		 * Post keys/{IncomingKeyIdentifier}/reencrypt
		 * @param {string} IncomingKeyIdentifier The <code>keyARN</code> of the encryption key of incoming ciphertext data.
		 * @return {ReEncryptDataOutput} Success
		 */
		ReEncryptData(IncomingKeyIdentifier: string, requestBody: ReEncryptDataPostBody): Observable<ReEncryptDataOutput> {
			return this.http.post<ReEncryptDataOutput>(this.baseUri + 'keys/' + (IncomingKeyIdentifier == null ? '' : encodeURIComponent(IncomingKeyIdentifier)) + '/reencrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Translates encrypted PIN block from and to ISO 9564 formats 0,1,3,4. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/translate-pin-data.html">Translate PIN data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>PIN block translation involves changing the encrytion of PIN block from one encryption key to another encryption key and changing PIN block format from one to another without PIN block data leaving Amazon Web Services Payment Cryptography. The encryption key transformation can be from PEK (Pin Encryption Key) to BDK (Base Derivation Key) for DUKPT or from BDK for DUKPT to PEK. Amazon Web Services Payment Cryptography supports <code>TDES</code> and <code>AES</code> key derivation type for DUKPT tranlations. You can use this operation for P2PE (Point to Point Encryption) use cases where the encryption keys should change but the processing system either does not need to, or is not permitted to, decrypt the data.</p> <p>The allowed combinations of PIN block format translations are guided by PCI. It is important to note that not all encrypted PIN block formats (example, format 1) require PAN (Primary Account Number) as input. And as such, PIN block format that requires PAN (example, formats 0,3,4) cannot be translated to a format (format 1) that does not require a PAN for generation. </p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <note> <p>At this time, Amazon Web Services Payment Cryptography does not support translations to PIN format 4.</p> </note> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GeneratePinData</a> </p> </li> <li> <p> <a>VerifyPinData</a> </p> </li> </ul>
		 * Post pindata/translate
		 * @return {TranslatePinDataOutput} Success
		 */
		TranslatePinData(requestBody: TranslatePinDataPostBody): Observable<TranslatePinDataOutput> {
			return this.http.post<TranslatePinDataOutput>(this.baseUri + 'pindata/translate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Verifies Authorization Request Cryptogram (ARQC) for a EMV chip payment card authorization. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/data-operations.verifyauthrequestcryptogram.html">Verify auth request cryptogram</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>ARQC generation is done outside of Amazon Web Services Payment Cryptography and is typically generated on a point of sale terminal for an EMV chip card to obtain payment authorization during transaction time. For ARQC verification, you must first import the ARQC generated outside of Amazon Web Services Payment Cryptography by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>. This operation uses the imported ARQC and an major encryption key (DUKPT) created by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a> to either provide a boolean ARQC verification result or provide an APRC (Authorization Response Cryptogram) response using Method 1 or Method 2. The <code>ARPC_METHOD_1</code> uses <code>AuthResponseCode</code> to generate ARPC and <code>ARPC_METHOD_2</code> uses <code>CardStatusUpdate</code> to generate ARPC. </p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>VerifyCardValidationData</a> </p> </li> <li> <p> <a>VerifyPinData</a> </p> </li> </ul>
		 * Post cryptogram/verify
		 * @return {VerifyAuthRequestCryptogramOutput} Success
		 */
		VerifyAuthRequestCryptogram(requestBody: VerifyAuthRequestCryptogramPostBody): Observable<VerifyAuthRequestCryptogramOutput> {
			return this.http.post<VerifyAuthRequestCryptogramOutput>(this.baseUri + 'cryptogram/verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Verifies card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2) and Card Security Codes (CSC). For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/verify-card-data.html">Verify card data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>This operation validates the CVV or CSC codes that is printed on a payment credit or debit card during card payment transaction. The input values are typically provided as part of an inbound transaction to an issuer or supporting platform partner. Amazon Web Services Payment Cryptography uses CVV or CSC, PAN (Primary Account Number) and expiration date of the card to check its validity during transaction processing. In this operation, the CVK (Card Verification Key) encryption key for use with card data verification is same as the one in used for <a>GenerateCardValidationData</a>. </p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GenerateCardValidationData</a> </p> </li> <li> <p> <a>VerifyAuthRequestCryptogram</a> </p> </li> <li> <p> <a>VerifyPinData</a> </p> </li> </ul>
		 * Post cardvalidationdata/verify
		 * @return {VerifyCardValidationDataOutput} Success
		 */
		VerifyCardValidationData(requestBody: VerifyCardValidationDataPostBody): Observable<VerifyCardValidationDataOutput> {
			return this.http.post<VerifyCardValidationDataOutput>(this.baseUri + 'cardvalidationdata/verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Verifies a Message Authentication Code (MAC). </p> <p>You can use this operation when keys won't be shared but mutual data is present on both ends for validation. In this case, known data values are used to generate a MAC on both ends for verification without sending or receiving data in ciphertext or plaintext. You can use this operation to verify a DUPKT, HMAC or EMV MAC by setting generation attributes and algorithm to the associated values. Use the same encryption key for MAC verification as you use for <a>GenerateMac</a>. </p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GenerateMac</a> </p> </li> </ul>
		 * Post mac/verify
		 * @return {VerifyMacOutput} Success
		 */
		VerifyMac(requestBody: VerifyMacPostBody): Observable<VerifyMacOutput> {
			return this.http.post<VerifyMacOutput>(this.baseUri + 'mac/verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Verifies pin-related data such as PIN and PIN Offset using algorithms including VISA PVV and IBM3624. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/verify-pin-data.html">Verify PIN data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>This operation verifies PIN data for user payment card. A card holder PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation uses PIN Verification Key (PVK) for PIN or PIN Offset generation and then encrypts it using PIN Encryption Key (PEK) to create an <code>EncryptedPinBlock</code> for transmission from Amazon Web Services Payment Cryptography. </p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GeneratePinData</a> </p> </li> <li> <p> <a>TranslatePinData</a> </p> </li> </ul>
		 * Post pindata/verify
		 * @return {VerifyPinDataOutput} Success
		 */
		VerifyPinData(requestBody: VerifyPinDataPostBody): Observable<VerifyPinDataOutput> {
			return this.http.post<VerifyPinDataOutput>(this.baseUri + 'pindata/verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface DecryptDataPostBody {

		/**
		 * The ciphertext to decrypt.
		 * Required
		 * Max length: 4096
		 * Min length: 16
		 */
		CipherText: string;

		/**
		 * Parameters that are required to perform encryption and decryption operations.
		 * Required
		 */
		DecryptionAttributes: DecryptDataPostBodyDecryptionAttributes;
	}
	export interface DecryptDataPostBodyFormProperties {

		/**
		 * The ciphertext to decrypt.
		 * Required
		 * Max length: 4096
		 * Min length: 16
		 */
		CipherText: FormControl<string | null | undefined>,
	}
	export function CreateDecryptDataPostBodyFormGroup() {
		return new FormGroup<DecryptDataPostBodyFormProperties>({
			CipherText: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(16), Validators.maxLength(4096), Validators.pattern('^(?:[0-9a-fA-F][0-9a-fA-F])+$')]),
		});

	}

	export interface DecryptDataPostBodyDecryptionAttributes {

		/** Parameters for plaintext encryption using asymmetric keys. */
		Asymmetric?: AsymmetricEncryptionAttributes;

		/** Parameters that are required to encrypt plaintext data using DUKPT. */
		Dukpt?: DukptEncryptionAttributes;
		Symmetric?: SymmetricEncryptionAttributes;
	}
	export interface DecryptDataPostBodyDecryptionAttributesFormProperties {
	}
	export function CreateDecryptDataPostBodyDecryptionAttributesFormGroup() {
		return new FormGroup<DecryptDataPostBodyDecryptionAttributesFormProperties>({
		});

	}

	export interface EncryptDataPostBody {

		/**
		 * Parameters that are required to perform encryption and decryption operations.
		 * Required
		 */
		EncryptionAttributes: EncryptDataPostBodyEncryptionAttributes;

		/**
		 * The plaintext to be encrypted.
		 * Required
		 * Max length: 4064
		 * Min length: 16
		 */
		PlainText: string;
	}
	export interface EncryptDataPostBodyFormProperties {

		/**
		 * The plaintext to be encrypted.
		 * Required
		 * Max length: 4064
		 * Min length: 16
		 */
		PlainText: FormControl<string | null | undefined>,
	}
	export function CreateEncryptDataPostBodyFormGroup() {
		return new FormGroup<EncryptDataPostBodyFormProperties>({
			PlainText: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(16), Validators.maxLength(4064), Validators.pattern('^(?:[0-9a-fA-F][0-9a-fA-F])+$')]),
		});

	}

	export interface EncryptDataPostBodyEncryptionAttributes {

		/** Parameters for plaintext encryption using asymmetric keys. */
		Asymmetric?: AsymmetricEncryptionAttributes;

		/** Parameters that are required to encrypt plaintext data using DUKPT. */
		Dukpt?: DukptEncryptionAttributes;
		Symmetric?: SymmetricEncryptionAttributes;
	}
	export interface EncryptDataPostBodyEncryptionAttributesFormProperties {
	}
	export function CreateEncryptDataPostBodyEncryptionAttributesFormGroup() {
		return new FormGroup<EncryptDataPostBodyEncryptionAttributesFormProperties>({
		});

	}

	export interface GenerateCardValidationDataPostBody {

		/**
		 * Card data parameters that are required to generate Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC).
		 * Required
		 */
		GenerationAttributes: GenerateCardValidationDataPostBodyGenerationAttributes;

		/**
		 * The <code>keyARN</code> of the CVK encryption key that Amazon Web Services Payment Cryptography uses to generate card data.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		KeyIdentifier: string;

		/**
		 * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder.
		 * Required
		 * Max length: 19
		 * Min length: 12
		 */
		PrimaryAccountNumber: string;

		/**
		 * The length of the CVV or CSC to be generated. The default value is 3.
		 * Minimum: 3
		 * Maximum: 5
		 */
		ValidationDataLength?: number | null;
	}
	export interface GenerateCardValidationDataPostBodyFormProperties {

		/**
		 * The <code>keyARN</code> of the CVK encryption key that Amazon Web Services Payment Cryptography uses to generate card data.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		KeyIdentifier: FormControl<string | null | undefined>,

		/**
		 * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder.
		 * Required
		 * Max length: 19
		 * Min length: 12
		 */
		PrimaryAccountNumber: FormControl<string | null | undefined>,

		/**
		 * The length of the CVV or CSC to be generated. The default value is 3.
		 * Minimum: 3
		 * Maximum: 5
		 */
		ValidationDataLength: FormControl<number | null | undefined>,
	}
	export function CreateGenerateCardValidationDataPostBodyFormGroup() {
		return new FormGroup<GenerateCardValidationDataPostBodyFormProperties>({
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(322), Validators.pattern('^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:(key/[0-9a-zA-Z]{16,64}|alias/[a-zA-Z0-9/_-]+)$|^alias/[a-zA-Z0-9/_-]+$')]),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(19), Validators.pattern('^[0-9]+$')]),
			ValidationDataLength: new FormControl<number | null | undefined>(undefined, [Validators.min(3), Validators.max(5)]),
		});

	}

	export interface GenerateCardValidationDataPostBodyGenerationAttributes {

		/** Card data parameters that are required to generate a Card Security Code (CSC2) for an AMEX payment card. */
		AmexCardSecurityCodeVersion1?: AmexCardSecurityCodeVersion1;
		AmexCardSecurityCodeVersion2?: AmexCardSecurityCodeVersion2;
		CardHolderVerificationValue?: CardHolderVerificationValue;
		CardVerificationValue1?: CardVerificationValue1;
		CardVerificationValue2?: CardVerificationValue2;
		DynamicCardVerificationCode?: DynamicCardVerificationCode;
		DynamicCardVerificationValue?: DynamicCardVerificationValue;
	}
	export interface GenerateCardValidationDataPostBodyGenerationAttributesFormProperties {
	}
	export function CreateGenerateCardValidationDataPostBodyGenerationAttributesFormGroup() {
		return new FormGroup<GenerateCardValidationDataPostBodyGenerationAttributesFormProperties>({
		});

	}

	export interface GenerateMacPostBody {

		/**
		 * Parameters that are required for DUKPT, HMAC, or EMV MAC generation or verification.
		 * Required
		 */
		GenerationAttributes: GenerateMacPostBodyGenerationAttributes;

		/**
		 * The <code>keyARN</code> of the MAC generation encryption key.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		KeyIdentifier: string;

		/**
		 * The length of a MAC under generation.
		 * Minimum: 4
		 * Maximum: 16
		 */
		MacLength?: number | null;

		/**
		 * The data for which a MAC is under generation.
		 * Required
		 * Max length: 4096
		 * Min length: 2
		 */
		MessageData: string;
	}
	export interface GenerateMacPostBodyFormProperties {

		/**
		 * The <code>keyARN</code> of the MAC generation encryption key.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		KeyIdentifier: FormControl<string | null | undefined>,

		/**
		 * The length of a MAC under generation.
		 * Minimum: 4
		 * Maximum: 16
		 */
		MacLength: FormControl<number | null | undefined>,

		/**
		 * The data for which a MAC is under generation.
		 * Required
		 * Max length: 4096
		 * Min length: 2
		 */
		MessageData: FormControl<string | null | undefined>,
	}
	export function CreateGenerateMacPostBodyFormGroup() {
		return new FormGroup<GenerateMacPostBodyFormProperties>({
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(322), Validators.pattern('^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:(key/[0-9a-zA-Z]{16,64}|alias/[a-zA-Z0-9/_-]+)$|^alias/[a-zA-Z0-9/_-]+$')]),
			MacLength: new FormControl<number | null | undefined>(undefined, [Validators.min(4), Validators.max(16)]),
			MessageData: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(4096), Validators.pattern('^[0-9a-fA-F]+$')]),
		});

	}

	export interface GenerateMacPostBodyGenerationAttributes {
		Algorithm?: MacAlgorithm;
		DukptCmac?: MacAlgorithmDukpt;
		DukptIso9797Algorithm1?: MacAlgorithmDukpt;
		DukptIso9797Algorithm3?: MacAlgorithmDukpt;
		EmvMac?: MacAlgorithmEmv;
	}
	export interface GenerateMacPostBodyGenerationAttributesFormProperties {
		Algorithm: FormControl<MacAlgorithm | null | undefined>,
	}
	export function CreateGenerateMacPostBodyGenerationAttributesFormGroup() {
		return new FormGroup<GenerateMacPostBodyGenerationAttributesFormProperties>({
			Algorithm: new FormControl<MacAlgorithm | null | undefined>(undefined),
		});

	}

	export interface GeneratePinDataPostBody {

		/**
		 * The <code>keyARN</code> of the PEK that Amazon Web Services Payment Cryptography uses to encrypt the PIN Block.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		EncryptionKeyIdentifier: string;

		/**
		 * Parameters that are required for PIN data generation.
		 * Required
		 */
		GenerationAttributes: GeneratePinDataPostBodyGenerationAttributes;

		/**
		 * The <code>keyARN</code> of the PEK that Amazon Web Services Payment Cryptography uses for pin data generation.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		GenerationKeyIdentifier: string;

		/**
		 * <p>The PIN encoding format for pin data generation as specified in ISO 9564. Amazon Web Services Payment Cryptography supports <code>ISO_Format_0</code> and <code>ISO_Format_3</code>.</p> <p>The <code>ISO_Format_0</code> PIN block format is equivalent to the ANSI X9.8, VISA-1, and ECI-1 PIN block formats. It is similar to a VISA-4 PIN block format. It supports a PIN from 4 to 12 digits in length.</p> <p>The <code>ISO_Format_3</code> PIN block format is the same as <code>ISO_Format_0</code> except that the fill digits are random values from 10 to 15.</p>
		 * Required
		 */
		PinBlockFormat: PinBlockFormatForPinData;

		/**
		 * The length of PIN under generation.
		 * Minimum: 4
		 * Maximum: 12
		 */
		PinDataLength?: number | null;

		/**
		 * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder.
		 * Required
		 * Max length: 19
		 * Min length: 12
		 */
		PrimaryAccountNumber: string;
	}
	export interface GeneratePinDataPostBodyFormProperties {

		/**
		 * The <code>keyARN</code> of the PEK that Amazon Web Services Payment Cryptography uses to encrypt the PIN Block.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		EncryptionKeyIdentifier: FormControl<string | null | undefined>,

		/**
		 * The <code>keyARN</code> of the PEK that Amazon Web Services Payment Cryptography uses for pin data generation.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		GenerationKeyIdentifier: FormControl<string | null | undefined>,

		/**
		 * <p>The PIN encoding format for pin data generation as specified in ISO 9564. Amazon Web Services Payment Cryptography supports <code>ISO_Format_0</code> and <code>ISO_Format_3</code>.</p> <p>The <code>ISO_Format_0</code> PIN block format is equivalent to the ANSI X9.8, VISA-1, and ECI-1 PIN block formats. It is similar to a VISA-4 PIN block format. It supports a PIN from 4 to 12 digits in length.</p> <p>The <code>ISO_Format_3</code> PIN block format is the same as <code>ISO_Format_0</code> except that the fill digits are random values from 10 to 15.</p>
		 * Required
		 */
		PinBlockFormat: FormControl<PinBlockFormatForPinData | null | undefined>,

		/**
		 * The length of PIN under generation.
		 * Minimum: 4
		 * Maximum: 12
		 */
		PinDataLength: FormControl<number | null | undefined>,

		/**
		 * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder.
		 * Required
		 * Max length: 19
		 * Min length: 12
		 */
		PrimaryAccountNumber: FormControl<string | null | undefined>,
	}
	export function CreateGeneratePinDataPostBodyFormGroup() {
		return new FormGroup<GeneratePinDataPostBodyFormProperties>({
			EncryptionKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(322), Validators.pattern('^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:(key/[0-9a-zA-Z]{16,64}|alias/[a-zA-Z0-9/_-]+)$|^alias/[a-zA-Z0-9/_-]+$')]),
			GenerationKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(322), Validators.pattern('^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:(key/[0-9a-zA-Z]{16,64}|alias/[a-zA-Z0-9/_-]+)$|^alias/[a-zA-Z0-9/_-]+$')]),
			PinBlockFormat: new FormControl<PinBlockFormatForPinData | null | undefined>(undefined, [Validators.required]),
			PinDataLength: new FormControl<number | null | undefined>(undefined, [Validators.min(4), Validators.max(12)]),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(19), Validators.pattern('^[0-9]+$')]),
		});

	}

	export interface GeneratePinDataPostBodyGenerationAttributes {
		Ibm3624NaturalPin?: Ibm3624NaturalPin;
		Ibm3624PinFromOffset?: Ibm3624PinFromOffset;
		Ibm3624PinOffset?: Ibm3624PinOffset;
		Ibm3624RandomPin?: Ibm3624RandomPin;
		VisaPin?: VisaPin;
		VisaPinVerificationValue?: VisaPinVerificationValue;
	}
	export interface GeneratePinDataPostBodyGenerationAttributesFormProperties {
	}
	export function CreateGeneratePinDataPostBodyGenerationAttributesFormGroup() {
		return new FormGroup<GeneratePinDataPostBodyGenerationAttributesFormProperties>({
		});

	}

	export interface ReEncryptDataPostBody {

		/**
		 * Ciphertext to be encrypted. The minimum allowed length is 16 bytes and maximum allowed length is 4096 bytes.
		 * Required
		 * Max length: 4096
		 * Min length: 16
		 */
		CipherText: string;

		/**
		 * Parameters that are required to perform reencryption operation.
		 * Required
		 */
		IncomingEncryptionAttributes: ReEncryptDataPostBodyIncomingEncryptionAttributes;

		/**
		 * Parameters that are required to perform reencryption operation.
		 * Required
		 */
		OutgoingEncryptionAttributes: ReEncryptDataPostBodyOutgoingEncryptionAttributes;

		/**
		 * The <code>keyARN</code> of the encryption key of outgoing ciphertext data after encryption by Amazon Web Services Payment Cryptography.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		OutgoingKeyIdentifier: string;
	}
	export interface ReEncryptDataPostBodyFormProperties {

		/**
		 * Ciphertext to be encrypted. The minimum allowed length is 16 bytes and maximum allowed length is 4096 bytes.
		 * Required
		 * Max length: 4096
		 * Min length: 16
		 */
		CipherText: FormControl<string | null | undefined>,

		/**
		 * The <code>keyARN</code> of the encryption key of outgoing ciphertext data after encryption by Amazon Web Services Payment Cryptography.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		OutgoingKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateReEncryptDataPostBodyFormGroup() {
		return new FormGroup<ReEncryptDataPostBodyFormProperties>({
			CipherText: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(16), Validators.maxLength(4096), Validators.pattern('^(?:[0-9a-fA-F][0-9a-fA-F])+$')]),
			OutgoingKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(322), Validators.pattern('^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:(key/[0-9a-zA-Z]{16,64}|alias/[a-zA-Z0-9/_-]+)$|^alias/[a-zA-Z0-9/_-]+$')]),
		});

	}

	export interface ReEncryptDataPostBodyIncomingEncryptionAttributes {

		/** Parameters that are required to encrypt plaintext data using DUKPT. */
		Dukpt?: DukptEncryptionAttributes;
		Symmetric?: SymmetricEncryptionAttributes;
	}
	export interface ReEncryptDataPostBodyIncomingEncryptionAttributesFormProperties {
	}
	export function CreateReEncryptDataPostBodyIncomingEncryptionAttributesFormGroup() {
		return new FormGroup<ReEncryptDataPostBodyIncomingEncryptionAttributesFormProperties>({
		});

	}

	export interface ReEncryptDataPostBodyOutgoingEncryptionAttributes {

		/** Parameters that are required to encrypt plaintext data using DUKPT. */
		Dukpt?: DukptEncryptionAttributes;
		Symmetric?: SymmetricEncryptionAttributes;
	}
	export interface ReEncryptDataPostBodyOutgoingEncryptionAttributesFormProperties {
	}
	export function CreateReEncryptDataPostBodyOutgoingEncryptionAttributesFormGroup() {
		return new FormGroup<ReEncryptDataPostBodyOutgoingEncryptionAttributesFormProperties>({
		});

	}

	export interface TranslatePinDataPostBody {

		/**
		 * The encrypted PIN block data that Amazon Web Services Payment Cryptography translates.
		 * Required
		 * Max length: 32
		 * Min length: 16
		 */
		EncryptedPinBlock: string;

		/** Parameters required for encryption or decryption of data using DUKPT. */
		IncomingDukptAttributes?: TranslatePinDataPostBodyIncomingDukptAttributes;

		/**
		 * The <code>keyARN</code> of the encryption key under which incoming PIN block data is encrypted. This key type can be PEK or BDK.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		IncomingKeyIdentifier: string;

		/**
		 * Parameters that are required for translation between ISO9564 PIN block formats 0,1,3,4.
		 * Required
		 */
		IncomingTranslationAttributes: TranslatePinDataPostBodyIncomingTranslationAttributes;

		/** Parameters required for encryption or decryption of data using DUKPT. */
		OutgoingDukptAttributes?: TranslatePinDataPostBodyOutgoingDukptAttributes;

		/**
		 * The <code>keyARN</code> of the encryption key for encrypting outgoing PIN block data. This key type can be PEK or BDK.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		OutgoingKeyIdentifier: string;

		/**
		 * Parameters that are required for translation between ISO9564 PIN block formats 0,1,3,4.
		 * Required
		 */
		OutgoingTranslationAttributes: TranslatePinDataPostBodyOutgoingTranslationAttributes;
	}
	export interface TranslatePinDataPostBodyFormProperties {

		/**
		 * The encrypted PIN block data that Amazon Web Services Payment Cryptography translates.
		 * Required
		 * Max length: 32
		 * Min length: 16
		 */
		EncryptedPinBlock: FormControl<string | null | undefined>,

		/**
		 * The <code>keyARN</code> of the encryption key under which incoming PIN block data is encrypted. This key type can be PEK or BDK.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		IncomingKeyIdentifier: FormControl<string | null | undefined>,

		/**
		 * The <code>keyARN</code> of the encryption key for encrypting outgoing PIN block data. This key type can be PEK or BDK.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		OutgoingKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateTranslatePinDataPostBodyFormGroup() {
		return new FormGroup<TranslatePinDataPostBodyFormProperties>({
			EncryptedPinBlock: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(16), Validators.maxLength(32), Validators.pattern('^[0-9a-fA-F]+$')]),
			IncomingKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(322), Validators.pattern('^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:(key/[0-9a-zA-Z]{16,64}|alias/[a-zA-Z0-9/_-]+)$|^alias/[a-zA-Z0-9/_-]+$')]),
			OutgoingKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(322), Validators.pattern('^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:(key/[0-9a-zA-Z]{16,64}|alias/[a-zA-Z0-9/_-]+)$|^alias/[a-zA-Z0-9/_-]+$')]),
		});

	}

	export interface TranslatePinDataPostBodyIncomingDukptAttributes {
		DukptKeyDerivationType?: DukptDerivationType;
		DukptKeyVariant?: DukptKeyVariant;
		KeySerialNumber?: string;
	}
	export interface TranslatePinDataPostBodyIncomingDukptAttributesFormProperties {
		DukptKeyDerivationType: FormControl<DukptDerivationType | null | undefined>,
		DukptKeyVariant: FormControl<DukptKeyVariant | null | undefined>,
		KeySerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateTranslatePinDataPostBodyIncomingDukptAttributesFormGroup() {
		return new FormGroup<TranslatePinDataPostBodyIncomingDukptAttributesFormProperties>({
			DukptKeyDerivationType: new FormControl<DukptDerivationType | null | undefined>(undefined),
			DukptKeyVariant: new FormControl<DukptKeyVariant | null | undefined>(undefined),
			KeySerialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TranslatePinDataPostBodyIncomingTranslationAttributes {
		IsoFormat0?: TranslationPinDataIsoFormat034;
		IsoFormat1?: TranslationPinDataIsoFormat1;
		IsoFormat3?: TranslationPinDataIsoFormat034;
		IsoFormat4?: TranslationPinDataIsoFormat034;
	}
	export interface TranslatePinDataPostBodyIncomingTranslationAttributesFormProperties {
	}
	export function CreateTranslatePinDataPostBodyIncomingTranslationAttributesFormGroup() {
		return new FormGroup<TranslatePinDataPostBodyIncomingTranslationAttributesFormProperties>({
		});

	}

	export interface TranslatePinDataPostBodyOutgoingDukptAttributes {
		DukptKeyDerivationType?: DukptDerivationType;
		DukptKeyVariant?: DukptKeyVariant;
		KeySerialNumber?: string;
	}
	export interface TranslatePinDataPostBodyOutgoingDukptAttributesFormProperties {
		DukptKeyDerivationType: FormControl<DukptDerivationType | null | undefined>,
		DukptKeyVariant: FormControl<DukptKeyVariant | null | undefined>,
		KeySerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateTranslatePinDataPostBodyOutgoingDukptAttributesFormGroup() {
		return new FormGroup<TranslatePinDataPostBodyOutgoingDukptAttributesFormProperties>({
			DukptKeyDerivationType: new FormControl<DukptDerivationType | null | undefined>(undefined),
			DukptKeyVariant: new FormControl<DukptKeyVariant | null | undefined>(undefined),
			KeySerialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TranslatePinDataPostBodyOutgoingTranslationAttributes {
		IsoFormat0?: TranslationPinDataIsoFormat034;
		IsoFormat1?: TranslationPinDataIsoFormat1;
		IsoFormat3?: TranslationPinDataIsoFormat034;
		IsoFormat4?: TranslationPinDataIsoFormat034;
	}
	export interface TranslatePinDataPostBodyOutgoingTranslationAttributesFormProperties {
	}
	export function CreateTranslatePinDataPostBodyOutgoingTranslationAttributesFormGroup() {
		return new FormGroup<TranslatePinDataPostBodyOutgoingTranslationAttributesFormProperties>({
		});

	}

	export interface VerifyAuthRequestCryptogramPostBody {

		/**
		 * The auth request cryptogram imported into Amazon Web Services Payment Cryptography for ARQC verification using a major encryption key and transaction data.
		 * Required
		 * Max length: 16
		 * Min length: 16
		 */
		AuthRequestCryptogram: string;

		/** Parameters that are required for Authorization Response Cryptogram (ARPC) generation after Authorization Request Cryptogram (ARQC) verification is successful. */
		AuthResponseAttributes?: VerifyAuthRequestCryptogramPostBodyAuthResponseAttributes;

		/**
		 * The <code>keyARN</code> of the major encryption key that Amazon Web Services Payment Cryptography uses for ARQC verification.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		KeyIdentifier: string;

		/**
		 * The method to use when deriving the major encryption key for ARQC verification within Amazon Web Services Payment Cryptography. The same key derivation mode was used for ARQC generation outside of Amazon Web Services Payment Cryptography.
		 * Required
		 */
		MajorKeyDerivationMode: MajorKeyDerivationMode;

		/**
		 * Parameters to derive a session key for Authorization Response Cryptogram (ARQC) verification.
		 * Required
		 */
		SessionKeyDerivationAttributes: VerifyAuthRequestCryptogramPostBodySessionKeyDerivationAttributes;

		/**
		 * The transaction data that Amazon Web Services Payment Cryptography uses for ARQC verification. The same transaction is used for ARQC generation outside of Amazon Web Services Payment Cryptography.
		 * Required
		 * Max length: 1024
		 * Min length: 2
		 */
		TransactionData: string;
	}
	export interface VerifyAuthRequestCryptogramPostBodyFormProperties {

		/**
		 * The auth request cryptogram imported into Amazon Web Services Payment Cryptography for ARQC verification using a major encryption key and transaction data.
		 * Required
		 * Max length: 16
		 * Min length: 16
		 */
		AuthRequestCryptogram: FormControl<string | null | undefined>,

		/**
		 * The <code>keyARN</code> of the major encryption key that Amazon Web Services Payment Cryptography uses for ARQC verification.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		KeyIdentifier: FormControl<string | null | undefined>,

		/**
		 * The method to use when deriving the major encryption key for ARQC verification within Amazon Web Services Payment Cryptography. The same key derivation mode was used for ARQC generation outside of Amazon Web Services Payment Cryptography.
		 * Required
		 */
		MajorKeyDerivationMode: FormControl<MajorKeyDerivationMode | null | undefined>,

		/**
		 * The transaction data that Amazon Web Services Payment Cryptography uses for ARQC verification. The same transaction is used for ARQC generation outside of Amazon Web Services Payment Cryptography.
		 * Required
		 * Max length: 1024
		 * Min length: 2
		 */
		TransactionData: FormControl<string | null | undefined>,
	}
	export function CreateVerifyAuthRequestCryptogramPostBodyFormGroup() {
		return new FormGroup<VerifyAuthRequestCryptogramPostBodyFormProperties>({
			AuthRequestCryptogram: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9a-fA-F]+$')]),
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(322), Validators.pattern('^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:(key/[0-9a-zA-Z]{16,64}|alias/[a-zA-Z0-9/_-]+)$|^alias/[a-zA-Z0-9/_-]+$')]),
			MajorKeyDerivationMode: new FormControl<MajorKeyDerivationMode | null | undefined>(undefined, [Validators.required]),
			TransactionData: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(1024), Validators.pattern('^[0-9a-fA-F]+$')]),
		});

	}

	export interface VerifyAuthRequestCryptogramPostBodyAuthResponseAttributes {
		ArpcMethod1?: CryptogramVerificationArpcMethod1;
		ArpcMethod2?: CryptogramVerificationArpcMethod2;
	}
	export interface VerifyAuthRequestCryptogramPostBodyAuthResponseAttributesFormProperties {
	}
	export function CreateVerifyAuthRequestCryptogramPostBodyAuthResponseAttributesFormGroup() {
		return new FormGroup<VerifyAuthRequestCryptogramPostBodyAuthResponseAttributesFormProperties>({
		});

	}

	export interface VerifyAuthRequestCryptogramPostBodySessionKeyDerivationAttributes {
		Amex?: SessionKeyAmex;
		Emv2000?: SessionKeyEmv2000;
		EmvCommon?: SessionKeyEmvCommon;
		Mastercard?: SessionKeyMastercard;
		Visa?: SessionKeyVisa;
	}
	export interface VerifyAuthRequestCryptogramPostBodySessionKeyDerivationAttributesFormProperties {
	}
	export function CreateVerifyAuthRequestCryptogramPostBodySessionKeyDerivationAttributesFormGroup() {
		return new FormGroup<VerifyAuthRequestCryptogramPostBodySessionKeyDerivationAttributesFormProperties>({
		});

	}

	export interface VerifyCardValidationDataPostBody {

		/**
		 * The <code>keyARN</code> of the CVK encryption key that Amazon Web Services Payment Cryptography uses to verify card data.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		KeyIdentifier: string;

		/**
		 * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder.
		 * Required
		 * Max length: 19
		 * Min length: 12
		 */
		PrimaryAccountNumber: string;

		/**
		 * The CVV or CSC value for use for card data verification within Amazon Web Services Payment Cryptography.
		 * Required
		 * Max length: 5
		 * Min length: 3
		 */
		ValidationData: string;

		/**
		 * Card data parameters that are requried to verify Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC).
		 * Required
		 */
		VerificationAttributes: VerifyCardValidationDataPostBodyVerificationAttributes;
	}
	export interface VerifyCardValidationDataPostBodyFormProperties {

		/**
		 * The <code>keyARN</code> of the CVK encryption key that Amazon Web Services Payment Cryptography uses to verify card data.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		KeyIdentifier: FormControl<string | null | undefined>,

		/**
		 * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder.
		 * Required
		 * Max length: 19
		 * Min length: 12
		 */
		PrimaryAccountNumber: FormControl<string | null | undefined>,

		/**
		 * The CVV or CSC value for use for card data verification within Amazon Web Services Payment Cryptography.
		 * Required
		 * Max length: 5
		 * Min length: 3
		 */
		ValidationData: FormControl<string | null | undefined>,
	}
	export function CreateVerifyCardValidationDataPostBodyFormGroup() {
		return new FormGroup<VerifyCardValidationDataPostBodyFormProperties>({
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(322), Validators.pattern('^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:(key/[0-9a-zA-Z]{16,64}|alias/[a-zA-Z0-9/_-]+)$|^alias/[a-zA-Z0-9/_-]+$')]),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(19), Validators.pattern('^[0-9]+$')]),
			ValidationData: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(5), Validators.pattern('^[0-9]+$')]),
		});

	}

	export interface VerifyCardValidationDataPostBodyVerificationAttributes {

		/** Card data parameters that are required to generate a Card Security Code (CSC2) for an AMEX payment card. */
		AmexCardSecurityCodeVersion1?: AmexCardSecurityCodeVersion1;
		AmexCardSecurityCodeVersion2?: AmexCardSecurityCodeVersion2;
		CardHolderVerificationValue?: CardHolderVerificationValue;
		CardVerificationValue1?: CardVerificationValue1;
		CardVerificationValue2?: CardVerificationValue2;
		DiscoverDynamicCardVerificationCode?: DiscoverDynamicCardVerificationCode;
		DynamicCardVerificationCode?: DynamicCardVerificationCode;
		DynamicCardVerificationValue?: DynamicCardVerificationValue;
	}
	export interface VerifyCardValidationDataPostBodyVerificationAttributesFormProperties {
	}
	export function CreateVerifyCardValidationDataPostBodyVerificationAttributesFormGroup() {
		return new FormGroup<VerifyCardValidationDataPostBodyVerificationAttributesFormProperties>({
		});

	}

	export interface VerifyMacPostBody {

		/**
		 * The <code>keyARN</code> of the encryption key that Amazon Web Services Payment Cryptography uses to verify MAC data.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		KeyIdentifier: string;

		/**
		 * The MAC being verified.
		 * Required
		 * Max length: 128
		 * Min length: 4
		 */
		Mac: string;

		/**
		 * The length of the MAC.
		 * Minimum: 4
		 * Maximum: 16
		 */
		MacLength?: number | null;

		/**
		 * The data on for which MAC is under verification.
		 * Required
		 * Max length: 4096
		 * Min length: 2
		 */
		MessageData: string;

		/**
		 * Parameters that are required for DUKPT, HMAC, or EMV MAC generation or verification.
		 * Required
		 */
		VerificationAttributes: VerifyMacPostBodyVerificationAttributes;
	}
	export interface VerifyMacPostBodyFormProperties {

		/**
		 * The <code>keyARN</code> of the encryption key that Amazon Web Services Payment Cryptography uses to verify MAC data.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		KeyIdentifier: FormControl<string | null | undefined>,

		/**
		 * The MAC being verified.
		 * Required
		 * Max length: 128
		 * Min length: 4
		 */
		Mac: FormControl<string | null | undefined>,

		/**
		 * The length of the MAC.
		 * Minimum: 4
		 * Maximum: 16
		 */
		MacLength: FormControl<number | null | undefined>,

		/**
		 * The data on for which MAC is under verification.
		 * Required
		 * Max length: 4096
		 * Min length: 2
		 */
		MessageData: FormControl<string | null | undefined>,
	}
	export function CreateVerifyMacPostBodyFormGroup() {
		return new FormGroup<VerifyMacPostBodyFormProperties>({
			KeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(322), Validators.pattern('^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:(key/[0-9a-zA-Z]{16,64}|alias/[a-zA-Z0-9/_-]+)$|^alias/[a-zA-Z0-9/_-]+$')]),
			Mac: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(4), Validators.maxLength(128), Validators.pattern('^[0-9a-fA-F]+$')]),
			MacLength: new FormControl<number | null | undefined>(undefined, [Validators.min(4), Validators.max(16)]),
			MessageData: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(4096), Validators.pattern('^[0-9a-fA-F]+$')]),
		});

	}

	export interface VerifyMacPostBodyVerificationAttributes {
		Algorithm?: MacAlgorithm;
		DukptCmac?: MacAlgorithmDukpt;
		DukptIso9797Algorithm1?: MacAlgorithmDukpt;
		DukptIso9797Algorithm3?: MacAlgorithmDukpt;
		EmvMac?: MacAlgorithmEmv;
	}
	export interface VerifyMacPostBodyVerificationAttributesFormProperties {
		Algorithm: FormControl<MacAlgorithm | null | undefined>,
	}
	export function CreateVerifyMacPostBodyVerificationAttributesFormGroup() {
		return new FormGroup<VerifyMacPostBodyVerificationAttributesFormProperties>({
			Algorithm: new FormControl<MacAlgorithm | null | undefined>(undefined),
		});

	}

	export interface VerifyPinDataPostBody {

		/** Parameters that are used for Derived Unique Key Per Transaction (DUKPT) derivation algorithm. */
		DukptAttributes?: VerifyPinDataPostBodyDukptAttributes;

		/**
		 * The encrypted PIN block data that Amazon Web Services Payment Cryptography verifies.
		 * Required
		 * Max length: 32
		 * Min length: 16
		 */
		EncryptedPinBlock: string;

		/**
		 * The <code>keyARN</code> of the encryption key under which the PIN block data is encrypted. This key type can be PEK or BDK.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		EncryptionKeyIdentifier: string;

		/**
		 * <p>The PIN encoding format for pin data generation as specified in ISO 9564. Amazon Web Services Payment Cryptography supports <code>ISO_Format_0</code> and <code>ISO_Format_3</code>.</p> <p>The <code>ISO_Format_0</code> PIN block format is equivalent to the ANSI X9.8, VISA-1, and ECI-1 PIN block formats. It is similar to a VISA-4 PIN block format. It supports a PIN from 4 to 12 digits in length.</p> <p>The <code>ISO_Format_3</code> PIN block format is the same as <code>ISO_Format_0</code> except that the fill digits are random values from 10 to 15.</p>
		 * Required
		 */
		PinBlockFormat: PinBlockFormatForPinData;

		/**
		 * The length of PIN being verified.
		 * Minimum: 4
		 * Maximum: 12
		 */
		PinDataLength?: number | null;

		/**
		 * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder.
		 * Required
		 * Max length: 19
		 * Min length: 12
		 */
		PrimaryAccountNumber: string;

		/**
		 * Parameters that are required for PIN data verification.
		 * Required
		 */
		VerificationAttributes: VerifyPinDataPostBodyVerificationAttributes;

		/**
		 * The <code>keyARN</code> of the PIN verification key.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		VerificationKeyIdentifier: string;
	}
	export interface VerifyPinDataPostBodyFormProperties {

		/**
		 * The encrypted PIN block data that Amazon Web Services Payment Cryptography verifies.
		 * Required
		 * Max length: 32
		 * Min length: 16
		 */
		EncryptedPinBlock: FormControl<string | null | undefined>,

		/**
		 * The <code>keyARN</code> of the encryption key under which the PIN block data is encrypted. This key type can be PEK or BDK.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		EncryptionKeyIdentifier: FormControl<string | null | undefined>,

		/**
		 * <p>The PIN encoding format for pin data generation as specified in ISO 9564. Amazon Web Services Payment Cryptography supports <code>ISO_Format_0</code> and <code>ISO_Format_3</code>.</p> <p>The <code>ISO_Format_0</code> PIN block format is equivalent to the ANSI X9.8, VISA-1, and ECI-1 PIN block formats. It is similar to a VISA-4 PIN block format. It supports a PIN from 4 to 12 digits in length.</p> <p>The <code>ISO_Format_3</code> PIN block format is the same as <code>ISO_Format_0</code> except that the fill digits are random values from 10 to 15.</p>
		 * Required
		 */
		PinBlockFormat: FormControl<PinBlockFormatForPinData | null | undefined>,

		/**
		 * The length of PIN being verified.
		 * Minimum: 4
		 * Maximum: 12
		 */
		PinDataLength: FormControl<number | null | undefined>,

		/**
		 * The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder.
		 * Required
		 * Max length: 19
		 * Min length: 12
		 */
		PrimaryAccountNumber: FormControl<string | null | undefined>,

		/**
		 * The <code>keyARN</code> of the PIN verification key.
		 * Required
		 * Max length: 322
		 * Min length: 7
		 */
		VerificationKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateVerifyPinDataPostBodyFormGroup() {
		return new FormGroup<VerifyPinDataPostBodyFormProperties>({
			EncryptedPinBlock: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(16), Validators.maxLength(32), Validators.pattern('^[0-9a-fA-F]+$')]),
			EncryptionKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(322), Validators.pattern('^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:(key/[0-9a-zA-Z]{16,64}|alias/[a-zA-Z0-9/_-]+)$|^alias/[a-zA-Z0-9/_-]+$')]),
			PinBlockFormat: new FormControl<PinBlockFormatForPinData | null | undefined>(undefined, [Validators.required]),
			PinDataLength: new FormControl<number | null | undefined>(undefined, [Validators.min(4), Validators.max(12)]),
			PrimaryAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(19), Validators.pattern('^[0-9]+$')]),
			VerificationKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(322), Validators.pattern('^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:(key/[0-9a-zA-Z]{16,64}|alias/[a-zA-Z0-9/_-]+)$|^alias/[a-zA-Z0-9/_-]+$')]),
		});

	}

	export interface VerifyPinDataPostBodyDukptAttributes {
		DukptDerivationType?: DukptDerivationType;
		KeySerialNumber?: string;
	}
	export interface VerifyPinDataPostBodyDukptAttributesFormProperties {
		DukptDerivationType: FormControl<DukptDerivationType | null | undefined>,
		KeySerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateVerifyPinDataPostBodyDukptAttributesFormGroup() {
		return new FormGroup<VerifyPinDataPostBodyDukptAttributesFormProperties>({
			DukptDerivationType: new FormControl<DukptDerivationType | null | undefined>(undefined),
			KeySerialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerifyPinDataPostBodyVerificationAttributes {
		Ibm3624Pin?: Ibm3624PinVerification;
		VisaPin?: VisaPinVerification;
	}
	export interface VerifyPinDataPostBodyVerificationAttributesFormProperties {
	}
	export function CreateVerifyPinDataPostBodyVerificationAttributesFormGroup() {
		return new FormGroup<VerifyPinDataPostBodyVerificationAttributesFormProperties>({
		});

	}

}

