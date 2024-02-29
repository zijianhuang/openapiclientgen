import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An AGCO Power ECU */
	export interface AGCOPowerServicesModelsECU {

		/** The code used to activate the ECU. May not be modified. Returned only on activation. */
		ActivationCode?: string | null;

		/** A description why the ECU cannot be deactivated. */
		DamagedDescription?: string | null;

		/**
		 * The serial number of the ECU’s engine
		 * Required
		 */
		EngineSerialNumber: string;

		/** The serial number of the ECU that this ECU replaces. Required if activating an ECU.. */
		ReplacesECUSerialNumber?: string | null;

		/**
		 * The serial number of the ECU
		 * Required
		 */
		SerialNumber: string;

		/**
		 * The state of the ECU
		 * Required
		 */
		State: AGCOPowerServicesModelsECUState;
	}

	/** An AGCO Power ECU */
	export interface AGCOPowerServicesModelsECUFormProperties {

		/** The code used to activate the ECU. May not be modified. Returned only on activation. */
		ActivationCode: FormControl<string | null | undefined>,

		/** A description why the ECU cannot be deactivated. */
		DamagedDescription: FormControl<string | null | undefined>,

		/**
		 * The serial number of the ECU’s engine
		 * Required
		 */
		EngineSerialNumber: FormControl<string | null | undefined>,

		/** The serial number of the ECU that this ECU replaces. Required if activating an ECU.. */
		ReplacesECUSerialNumber: FormControl<string | null | undefined>,

		/**
		 * The serial number of the ECU
		 * Required
		 */
		SerialNumber: FormControl<string | null | undefined>,

		/**
		 * The state of the ECU
		 * Required
		 */
		State: FormControl<AGCOPowerServicesModelsECUState | null | undefined>,
	}
	export function CreateAGCOPowerServicesModelsECUFormGroup() {
		return new FormGroup<AGCOPowerServicesModelsECUFormProperties>({
			ActivationCode: new FormControl<string | null | undefined>(undefined),
			DamagedDescription: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9]{0,4096}$')]),
			EngineSerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^[A-Z][0-9]+$)|(^[ABCDEFGHJKLMNPRSTVWX1-9][5CMBL][ED][0-5][0-9][0-7][0-9][0-9][0-9]$)')]),
			ReplacesECUSerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^0?\d{23}$')]),
			SerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^0?\d{23}$')]),
			State: new FormControl<AGCOPowerServicesModelsECUState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AGCOPowerServicesModelsECUState { Active = 'Active', Inactive = 'Inactive', Damaged = 'Damaged' }


	/** Production data for an AGCO Power engine. */
	export interface AGCOPowerServicesModelsProductionData {

		/**
		 * Type of data. Valid types are (but not limited to)
		 * 'PowerCalibration'
		 * Required
		 */
		DataType: string;

		/**
		 * Raw values of the calibration data
		 * Required
		 */
		DataValues: string;
	}

	/** Production data for an AGCO Power engine. */
	export interface AGCOPowerServicesModelsProductionDataFormProperties {

		/**
		 * Type of data. Valid types are (but not limited to)
		 * 'PowerCalibration'
		 * Required
		 */
		DataType: FormControl<string | null | undefined>,

		/**
		 * Raw values of the calibration data
		 * Required
		 */
		DataValues: FormControl<string | null | undefined>,
	}
	export function CreateAGCOPowerServicesModelsProductionDataFormGroup() {
		return new FormGroup<AGCOPowerServicesModelsProductionDataFormProperties>({
			DataType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataValues: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Status of a voucher in the AGCO Power system */
	export interface AGCOPowerServicesModelsUserStatus {

		/**
		 * The dealer code of the voucher
		 * Required
		 */
		DealerCode: string;

		/** The state of the voucher */
		State?: AGCOPowerServicesModelsUserStatusState | null;

		/**
		 * The voucher code
		 * Required
		 */
		VoucherCode: string;
	}

	/** Status of a voucher in the AGCO Power system */
	export interface AGCOPowerServicesModelsUserStatusFormProperties {

		/**
		 * The dealer code of the voucher
		 * Required
		 */
		DealerCode: FormControl<string | null | undefined>,

		/** The state of the voucher */
		State: FormControl<AGCOPowerServicesModelsUserStatusState | null | undefined>,

		/**
		 * The voucher code
		 * Required
		 */
		VoucherCode: FormControl<string | null | undefined>,
	}
	export function CreateAGCOPowerServicesModelsUserStatusFormGroup() {
		return new FormGroup<AGCOPowerServicesModelsUserStatusFormProperties>({
			DealerCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<AGCOPowerServicesModelsUserStatusState | null | undefined>(undefined),
			VoucherCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AGCOPowerServicesModelsUserStatusState { Active = 'Active', Inactive = 'Inactive', None = 'None' }

	export interface APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCodeDefinition_ {
		Entities?: Array<AuthorizationCodesSharedModelsAuthorizationCodeDefinition>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCodeDefinition_FormProperties {
	}
	export function CreateAPIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCodeDefinition_FormGroup() {
		return new FormGroup<APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCodeDefinition_FormProperties>({
		});

	}


	/** Represents the model used to define how a type of authorization code is generated. */
	export interface AuthorizationCodesSharedModelsAuthorizationCodeDefinition {

		/** The value used for securing codes generated. */
		AuthorizationID?: string | null;

		/**
		 * The ID of the user that created this definition. Read only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CreatedByUserID?: number | null;

		/** A timestamp of when this definition was created. Read only. */
		CreatedDate?: Date | null;

		/** The defined fields to include in authorization codes generated from this definition. May not be updated. */
		DataFields?: Array<AuthorizationCodesSharedModelsDataField>;

		/**
		 * The ID of the user that deleted this definition. Read only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DeletedByUserID?: number | null;

		/** A timestamp of when this definition was deleted. Read only. */
		DeletedDate?: Date | null;

		/** A description of this definition. May not be updated. */
		Description?: string | null;

		/**
		 * The number of bits used for timestamp verification. Defaults to 5. May not be updated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DurationAccuracy?: number | null;

		/**
		 * The amount of duration for the specified duration unit used to calculate the Authorization Code. Defaults to 1. May not be updated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DurationAmount?: number | null;

		/** The units of duration used to calculate the Authorization Code. Defaults to 'Days'. May not be updated. */
		DurationUnits?: AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnits | null;

		/**
		 * The bit length of the hash data which will be used for the authorization code. Defaults to 20. May not be updated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		HashLength?: number | null;

		/** The ID of the authorization code definition. Read only. */
		ID?: string | null;

		/** Indicates whether this definition is enabled. True if generating codes is disabled. */
		IsDeleted?: boolean | null;

		/**
		 * The name of the authorization code definition. May not be updated.
		 * Required
		 */
		Name: string;

		/**
		 * The bit length of random data which will be included in the authorization code.  This is necessary to allow creation of "identical" authorization codes containing the same timestamp. Defaults to 5. May not be updated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RandomLength?: number | null;

		/** The defined fields to verify when reading authorization codes generated from this definition. May not be updated. */
		ValidationFields?: Array<AuthorizationCodesSharedModelsValidationField>;
	}

	/** Represents the model used to define how a type of authorization code is generated. */
	export interface AuthorizationCodesSharedModelsAuthorizationCodeDefinitionFormProperties {

		/** The value used for securing codes generated. */
		AuthorizationID: FormControl<string | null | undefined>,

		/**
		 * The ID of the user that created this definition. Read only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CreatedByUserID: FormControl<number | null | undefined>,

		/** A timestamp of when this definition was created. Read only. */
		CreatedDate: FormControl<Date | null | undefined>,

		/**
		 * The ID of the user that deleted this definition. Read only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DeletedByUserID: FormControl<number | null | undefined>,

		/** A timestamp of when this definition was deleted. Read only. */
		DeletedDate: FormControl<Date | null | undefined>,

		/** A description of this definition. May not be updated. */
		Description: FormControl<string | null | undefined>,

		/**
		 * The number of bits used for timestamp verification. Defaults to 5. May not be updated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DurationAccuracy: FormControl<number | null | undefined>,

		/**
		 * The amount of duration for the specified duration unit used to calculate the Authorization Code. Defaults to 1. May not be updated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DurationAmount: FormControl<number | null | undefined>,

		/** The units of duration used to calculate the Authorization Code. Defaults to 'Days'. May not be updated. */
		DurationUnits: FormControl<AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnits | null | undefined>,

		/**
		 * The bit length of the hash data which will be used for the authorization code. Defaults to 20. May not be updated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		HashLength: FormControl<number | null | undefined>,

		/** The ID of the authorization code definition. Read only. */
		ID: FormControl<string | null | undefined>,

		/** Indicates whether this definition is enabled. True if generating codes is disabled. */
		IsDeleted: FormControl<boolean | null | undefined>,

		/**
		 * The name of the authorization code definition. May not be updated.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The bit length of random data which will be included in the authorization code.  This is necessary to allow creation of "identical" authorization codes containing the same timestamp. Defaults to 5. May not be updated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RandomLength: FormControl<number | null | undefined>,
	}
	export function CreateAuthorizationCodesSharedModelsAuthorizationCodeDefinitionFormGroup() {
		return new FormGroup<AuthorizationCodesSharedModelsAuthorizationCodeDefinitionFormProperties>({
			AuthorizationID: new FormControl<string | null | undefined>(undefined),
			CreatedByUserID: new FormControl<number | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeletedByUserID: new FormControl<number | null | undefined>(undefined),
			DeletedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DurationAccuracy: new FormControl<number | null | undefined>(undefined),
			DurationAmount: new FormControl<number | null | undefined>(undefined),
			DurationUnits: new FormControl<AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnits | null | undefined>(undefined),
			HashLength: new FormControl<number | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			IsDeleted: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RandomLength: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AuthorizationCodesSharedModelsDataField {

		/**
		 * The number of decimal digits to be used by this data field. Required only by the 'Float' data type. Must be in range 1 - 15.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DigitsPrecision?: number | null;

		/**
		 * The maximum exponent to be used by this data field. Required only by the 'Float' data type. May not be greater than 307.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxExponent?: number | null;

		/**
		 * The maximum value that can be represented by this data field. Required only by the 'Decimal' data type.
		 * Type: double
		 */
		MaxValue?: number | null;

		/**
		 * The minimum exponent to be used by this data field. Required only by the 'Float' data type. May not be less than -292.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MinExponent?: number | null;

		/**
		 * The minimum value that can be represented by this data field. Required only by the 'Decimal' data type.
		 * Type: double
		 */
		MinValue?: number | null;

		/**
		 * The name of the field.
		 * Required
		 */
		Name: string;

		/**
		 * The resolution of values that can be represented by this data field. The base value is multiplied by this to compute the final value. Required only by the 'Decimal' data type.
		 * Type: double
		 */
		ScaleFactor?: number | null;

		/** Indicates whether this value is signed. Required only by the 'Float' data type. */
		Signed?: boolean | null;

		/**
		 * The type of this data field.
		 * Required
		 */
		Type: AuthorizationCodesSharedModelsDataFieldType;
	}
	export interface AuthorizationCodesSharedModelsDataFieldFormProperties {

		/**
		 * The number of decimal digits to be used by this data field. Required only by the 'Float' data type. Must be in range 1 - 15.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DigitsPrecision: FormControl<number | null | undefined>,

		/**
		 * The maximum exponent to be used by this data field. Required only by the 'Float' data type. May not be greater than 307.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxExponent: FormControl<number | null | undefined>,

		/**
		 * The maximum value that can be represented by this data field. Required only by the 'Decimal' data type.
		 * Type: double
		 */
		MaxValue: FormControl<number | null | undefined>,

		/**
		 * The minimum exponent to be used by this data field. Required only by the 'Float' data type. May not be less than -292.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MinExponent: FormControl<number | null | undefined>,

		/**
		 * The minimum value that can be represented by this data field. Required only by the 'Decimal' data type.
		 * Type: double
		 */
		MinValue: FormControl<number | null | undefined>,

		/**
		 * The name of the field.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The resolution of values that can be represented by this data field. The base value is multiplied by this to compute the final value. Required only by the 'Decimal' data type.
		 * Type: double
		 */
		ScaleFactor: FormControl<number | null | undefined>,

		/** Indicates whether this value is signed. Required only by the 'Float' data type. */
		Signed: FormControl<boolean | null | undefined>,

		/**
		 * The type of this data field.
		 * Required
		 */
		Type: FormControl<AuthorizationCodesSharedModelsDataFieldType | null | undefined>,
	}
	export function CreateAuthorizationCodesSharedModelsDataFieldFormGroup() {
		return new FormGroup<AuthorizationCodesSharedModelsDataFieldFormProperties>({
			DigitsPrecision: new FormControl<number | null | undefined>(undefined),
			MaxExponent: new FormControl<number | null | undefined>(undefined),
			MaxValue: new FormControl<number | null | undefined>(undefined),
			MinExponent: new FormControl<number | null | undefined>(undefined),
			MinValue: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScaleFactor: new FormControl<number | null | undefined>(undefined),
			Signed: new FormControl<boolean | null | undefined>(undefined),
			Type: new FormControl<AuthorizationCodesSharedModelsDataFieldType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuthorizationCodesSharedModelsDataFieldType { Boolean = 'Boolean', Decimal = 'Decimal', Float = 'Float', VariableLengthByteArray = 'VariableLengthByteArray' }

	export enum AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnits { Weeks = 'Weeks', Days = 'Days', Hours = 'Hours', Minutes = 'Minutes' }

	export interface AuthorizationCodesSharedModelsValidationField {

		/**
		 * The name of the field.
		 * Required
		 */
		Name: string;

		/**
		 * The type for this validation field.
		 * Required
		 */
		Type: AuthorizationCodesSharedModelsValidationFieldType;
	}
	export interface AuthorizationCodesSharedModelsValidationFieldFormProperties {

		/**
		 * The name of the field.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The type for this validation field.
		 * Required
		 */
		Type: FormControl<AuthorizationCodesSharedModelsValidationFieldType | null | undefined>,
	}
	export function CreateAuthorizationCodesSharedModelsValidationFieldFormGroup() {
		return new FormGroup<AuthorizationCodesSharedModelsValidationFieldFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<AuthorizationCodesSharedModelsValidationFieldType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuthorizationCodesSharedModelsValidationFieldType { Boolean = 'Boolean', Float = 'Float', Int = 'Int', StringCaseInsensitive = 'StringCaseInsensitive', StringCaseSensitive = 'StringCaseSensitive' }


	/** Metadata for the paged response */
	export interface APIPagedResponseMetadata {

		/**
		 * The number of entities this paged response is limited to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Limit: number;

		/**
		 * The number of entities prior to this page of items.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Offset: number;

		/**
		 * The total number of entities matching the request.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TotalCount: number;
	}

	/** Metadata for the paged response */
	export interface APIPagedResponseMetadataFormProperties {

		/**
		 * The number of entities this paged response is limited to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * The number of entities prior to this page of items.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Offset: FormControl<number | null | undefined>,

		/**
		 * The total number of entities matching the request.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateAPIPagedResponseMetadataFormGroup() {
		return new FormGroup<APIPagedResponseMetadataFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TotalCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCode_ {
		Entities?: Array<AuthorizationCodesSharedModelsAuthorizationCode>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCode_FormProperties {
	}
	export function CreateAPIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCode_FormGroup() {
		return new FormGroup<APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCode_FormProperties>({
		});

	}


	/** Represents the model containing an authorization code used to unlock a feature in machines and EDT */
	export interface AuthorizationCodesSharedModelsAuthorizationCode {

		/** The code to enter to unlock a feature. Read only. */
		Code?: string | null;

		/**
		 * The ID of the user that created this authorization code. Read only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CreatedByUserID?: number | null;

		/** A timestamp of when this code was created. Read only. */
		CreatedDate?: Date | null;

		/** The parameters and values contained as data in this authorization code. May not be updated. */
		DataParameters?: Array<AuthorizationCodesSharedModelsParameter>;

		/** The id of the definition for this authorization code. May not be updated. */
		DefinitionID?: string | null;

		/**
		 * The ID of the user that deleted this authorization code. Read only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DeletedByUserID?: number | null;

		/** A timestamp of when this authorization code was deleted. Read only. */
		DeletedDate?: Date | null;

		/** A date at which this code should begin being valid. Optional. Set on create only. */
		EffectiveDate?: Date | null;

		/**
		 * The identifier for the authorization code. Read only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID?: number | null;

		/** Indicates whether this code is deleted. */
		IsDeleted?: boolean | null;

		/** The parameters and values used to validate this authorization code. May not be updated. */
		ValidationParameters?: Array<AuthorizationCodesSharedModelsParameter>;
	}

	/** Represents the model containing an authorization code used to unlock a feature in machines and EDT */
	export interface AuthorizationCodesSharedModelsAuthorizationCodeFormProperties {

		/** The code to enter to unlock a feature. Read only. */
		Code: FormControl<string | null | undefined>,

		/**
		 * The ID of the user that created this authorization code. Read only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CreatedByUserID: FormControl<number | null | undefined>,

		/** A timestamp of when this code was created. Read only. */
		CreatedDate: FormControl<Date | null | undefined>,

		/** The id of the definition for this authorization code. May not be updated. */
		DefinitionID: FormControl<string | null | undefined>,

		/**
		 * The ID of the user that deleted this authorization code. Read only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DeletedByUserID: FormControl<number | null | undefined>,

		/** A timestamp of when this authorization code was deleted. Read only. */
		DeletedDate: FormControl<Date | null | undefined>,

		/** A date at which this code should begin being valid. Optional. Set on create only. */
		EffectiveDate: FormControl<Date | null | undefined>,

		/**
		 * The identifier for the authorization code. Read only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID: FormControl<number | null | undefined>,

		/** Indicates whether this code is deleted. */
		IsDeleted: FormControl<boolean | null | undefined>,
	}
	export function CreateAuthorizationCodesSharedModelsAuthorizationCodeFormGroup() {
		return new FormGroup<AuthorizationCodesSharedModelsAuthorizationCodeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			CreatedByUserID: new FormControl<number | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DefinitionID: new FormControl<string | null | undefined>(undefined),
			DeletedByUserID: new FormControl<number | null | undefined>(undefined),
			DeletedDate: new FormControl<Date | null | undefined>(undefined),
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<number | null | undefined>(undefined),
			IsDeleted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A parameter used to create an authorization code. */
	export interface AuthorizationCodesSharedModelsParameter {

		/**
		 * The name of the parameter. May not be updated.
		 * Required
		 */
		Name: string;

		/**
		 * The value of the parameter. May not be updated.
		 * Required
		 */
		Value: string;
	}

	/** A parameter used to create an authorization code. */
	export interface AuthorizationCodesSharedModelsParameterFormProperties {

		/**
		 * The name of the parameter. May not be updated.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The value of the parameter. May not be updated.
		 * Required
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationCodesSharedModelsParameterFormGroup() {
		return new FormGroup<AuthorizationCodesSharedModelsParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationContactInformation_ {
		Entities?: Array<AuthorizationCodesSharedModelsAuthorizationContactInformation>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationContactInformation_FormProperties {
	}
	export function CreateAPIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationContactInformation_FormGroup() {
		return new FormGroup<APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationContactInformation_FormProperties>({
		});

	}

	export interface AuthorizationCodesSharedModelsAuthorizationContactInformation {

		/**
		 * AuthorizationCode ID that the contact information ties into.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		AuthorizationCodeID: number;

		/** The authorization code. Read Only. */
		Code?: string | null;

		/**
		 * Name of contact requesting an authorization code. Minimum length of 3 characters.
		 * Required
		 */
		Contact: string;

		/** The name of the user that created this code. Read Only. */
		CreatedBy?: string | null;

		/** The date the authorization code was created. */
		CreatedDate?: Date | null;

		/**
		 * Dealer code that relates to the dealership. Minimum length of 3 characters.
		 * Required
		 */
		DealerCode: string;

		/**
		 * Name of dealership. Minimum length of 3 characters.
		 * Required
		 */
		Dealership: string;

		/** The name of the definition used for generating this authorization code. Read Only. */
		DefinitionName?: string | null;

		/** Email of contact. */
		Email?: string | null;

		/**
		 * ID of authorizationContactInformation
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID?: number | null;

		/** Optional notes used for internal use. */
		Notes?: string | null;

		/**
		 * Phone number of contact.
		 * Required
		 */
		Phone: string;
	}
	export interface AuthorizationCodesSharedModelsAuthorizationContactInformationFormProperties {

		/**
		 * AuthorizationCode ID that the contact information ties into.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		AuthorizationCodeID: FormControl<number | null | undefined>,

		/** The authorization code. Read Only. */
		Code: FormControl<string | null | undefined>,

		/**
		 * Name of contact requesting an authorization code. Minimum length of 3 characters.
		 * Required
		 */
		Contact: FormControl<string | null | undefined>,

		/** The name of the user that created this code. Read Only. */
		CreatedBy: FormControl<string | null | undefined>,

		/** The date the authorization code was created. */
		CreatedDate: FormControl<Date | null | undefined>,

		/**
		 * Dealer code that relates to the dealership. Minimum length of 3 characters.
		 * Required
		 */
		DealerCode: FormControl<string | null | undefined>,

		/**
		 * Name of dealership. Minimum length of 3 characters.
		 * Required
		 */
		Dealership: FormControl<string | null | undefined>,

		/** The name of the definition used for generating this authorization code. Read Only. */
		DefinitionName: FormControl<string | null | undefined>,

		/** Email of contact. */
		Email: FormControl<string | null | undefined>,

		/**
		 * ID of authorizationContactInformation
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID: FormControl<number | null | undefined>,

		/** Optional notes used for internal use. */
		Notes: FormControl<string | null | undefined>,

		/**
		 * Phone number of contact.
		 * Required
		 */
		Phone: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationCodesSharedModelsAuthorizationContactInformationFormGroup() {
		return new FormGroup<AuthorizationCodesSharedModelsAuthorizationContactInformationFormProperties>({
			AuthorizationCodeID: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Code: new FormControl<string | null | undefined>(undefined),
			Contact: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DealerCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Dealership: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefinitionName: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			ID: new FormControl<number | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			Phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface APIIPagedResponse_AuthorizationCodesSharedModelsCategoryUserReport_ {
		Entities?: Array<AuthorizationCodesSharedModelsCategoryUserReport>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_AuthorizationCodesSharedModelsCategoryUserReport_FormProperties {
	}
	export function CreateAPIIPagedResponse_AuthorizationCodesSharedModelsCategoryUserReport_FormGroup() {
		return new FormGroup<APIIPagedResponse_AuthorizationCodesSharedModelsCategoryUserReport_FormProperties>({
		});

	}

	export interface AuthorizationCodesSharedModelsCategoryUserReport {
		Categories?: Array<AuthorizationCodesSharedModelsCategory>;
		User?: AuthorizationCodesSharedModelsAuthorizationCodeUser;
	}
	export interface AuthorizationCodesSharedModelsCategoryUserReportFormProperties {
	}
	export function CreateAuthorizationCodesSharedModelsCategoryUserReportFormGroup() {
		return new FormGroup<AuthorizationCodesSharedModelsCategoryUserReportFormProperties>({
		});

	}


	/** A category for Authorization Code Definitions */
	export interface AuthorizationCodesSharedModelsCategory {

		/** A description of the Category. */
		Description?: string | null;

		/** The ID of the Category. */
		ID?: string | null;

		/** The Name of the Category. */
		Name?: string | null;
	}

	/** A category for Authorization Code Definitions */
	export interface AuthorizationCodesSharedModelsCategoryFormProperties {

		/** A description of the Category. */
		Description: FormControl<string | null | undefined>,

		/** The ID of the Category. */
		ID: FormControl<string | null | undefined>,

		/** The Name of the Category. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationCodesSharedModelsCategoryFormGroup() {
		return new FormGroup<AuthorizationCodesSharedModelsCategoryFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthorizationCodesSharedModelsAuthorizationCodeUser {
		Email?: string | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserID?: number | null;
		Username?: string | null;
	}
	export interface AuthorizationCodesSharedModelsAuthorizationCodeUserFormProperties {
		Email: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserID: FormControl<number | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationCodesSharedModelsAuthorizationCodeUserFormGroup() {
		return new FormGroup<AuthorizationCodesSharedModelsAuthorizationCodeUserFormProperties>({
			Email: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			UserID: new FormControl<number | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface APIIPagedResponse_AuthorizationCodesSharedModelsCategory_ {
		Entities?: Array<AuthorizationCodesSharedModelsCategory>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_AuthorizationCodesSharedModelsCategory_FormProperties {
	}
	export function CreateAPIIPagedResponse_AuthorizationCodesSharedModelsCategory_FormGroup() {
		return new FormGroup<APIIPagedResponse_AuthorizationCodesSharedModelsCategory_FormProperties>({
		});

	}

	export interface APIIPagedResponse_GlobalResourcesSharedModelsFileDownload_ {
		Entities?: Array<GlobalResourcesSharedModelsFileDownload>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_GlobalResourcesSharedModelsFileDownload_FormProperties {
	}
	export function CreateAPIIPagedResponse_GlobalResourcesSharedModelsFileDownload_FormGroup() {
		return new FormGroup<APIIPagedResponse_GlobalResourcesSharedModelsFileDownload_FormProperties>({
		});

	}


	/** A language used for string translations. */
	export interface GlobalResourcesSharedModelsFileDownload {

		/**
		 * The crc of the file (SHA256, HEX-encoded). Must be provided when creating a file.
		 * Required
		 */
		CRC: string;

		/**
		 * The type of file; sent as the content-type header.
		 * Required
		 */
		ContentType: string;

		/**
		 * The description of the file.
		 * Required
		 */
		Description: string;

		/** The Id of the file. */
		Id?: string | null;

		/**
		 * Indicates whether this file is available to the public for download.
		 * Required
		 */
		IsPublic: boolean;

		/**
		 * The name of the file when downloaded.
		 * Required
		 */
		Name: string;

		/**
		 * The Path of the file.
		 * Required
		 */
		Path: string;

		/**
		 * The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size?: string | null;

		/**
		 * Indicates the state of this file. Must be 'Created' when created.
		 * Required
		 */
		State: GlobalResourcesSharedModelsFileDownloadState;
	}

	/** A language used for string translations. */
	export interface GlobalResourcesSharedModelsFileDownloadFormProperties {

		/**
		 * The crc of the file (SHA256, HEX-encoded). Must be provided when creating a file.
		 * Required
		 */
		CRC: FormControl<string | null | undefined>,

		/**
		 * The type of file; sent as the content-type header.
		 * Required
		 */
		ContentType: FormControl<string | null | undefined>,

		/**
		 * The description of the file.
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/** The Id of the file. */
		Id: FormControl<string | null | undefined>,

		/**
		 * Indicates whether this file is available to the public for download.
		 * Required
		 */
		IsPublic: FormControl<boolean | null | undefined>,

		/**
		 * The name of the file when downloaded.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Path of the file.
		 * Required
		 */
		Path: FormControl<string | null | undefined>,

		/**
		 * The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size: FormControl<string | null | undefined>,

		/**
		 * Indicates the state of this file. Must be 'Created' when created.
		 * Required
		 */
		State: FormControl<GlobalResourcesSharedModelsFileDownloadState | null | undefined>,
	}
	export function CreateGlobalResourcesSharedModelsFileDownloadFormGroup() {
		return new FormGroup<GlobalResourcesSharedModelsFileDownloadFormProperties>({
			CRC: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined),
			IsPublic: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Size: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<GlobalResourcesSharedModelsFileDownloadState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GlobalResourcesSharedModelsFileDownloadState { Created = 'Created', Available = 'Available', Removed = 'Removed' }

	export interface APIIPagedResponse_GlobalResourcesSharedModelsGlobalImageCategory_ {
		Entities?: Array<GlobalResourcesSharedModelsGlobalImageCategory>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_GlobalResourcesSharedModelsGlobalImageCategory_FormProperties {
	}
	export function CreateAPIIPagedResponse_GlobalResourcesSharedModelsGlobalImageCategory_FormGroup() {
		return new FormGroup<APIIPagedResponse_GlobalResourcesSharedModelsGlobalImageCategory_FormProperties>({
		});

	}


	/** An image category from the Global Image library. */
	export interface GlobalResourcesSharedModelsGlobalImageCategory {

		/** The Id of the GlobalImage Categories. */
		Id?: string | null;

		/**
		 * The name of the globalImage Catetory.
		 * Required
		 */
		Name: string;
	}

	/** An image category from the Global Image library. */
	export interface GlobalResourcesSharedModelsGlobalImageCategoryFormProperties {

		/** The Id of the GlobalImage Categories. */
		Id: FormControl<string | null | undefined>,

		/**
		 * The name of the globalImage Catetory.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGlobalResourcesSharedModelsGlobalImageCategoryFormGroup() {
		return new FormGroup<GlobalResourcesSharedModelsGlobalImageCategoryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface APIIPagedResponse_GlobalResourcesSharedModelsGlobalImage_ {
		Entities?: Array<GlobalResourcesSharedModelsGlobalImage>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_GlobalResourcesSharedModelsGlobalImage_FormProperties {
	}
	export function CreateAPIIPagedResponse_GlobalResourcesSharedModelsGlobalImage_FormGroup() {
		return new FormGroup<APIIPagedResponse_GlobalResourcesSharedModelsGlobalImage_FormProperties>({
		});

	}


	/** An image from the Global Image library. */
	export interface GlobalResourcesSharedModelsGlobalImage {

		/**
		 * The Hash of the file (SHA256, HEX-encoded).
		 * Required
		 */
		CRC: string;

		/** The category of the file. */
		Categories?: Array<GlobalResourcesSharedModelsGlobalImageCategory>;

		/** The date of the file. */
		Date?: Date | null;

		/**
		 * The description of the file.
		 * Required
		 */
		Description: string;

		/**
		 * The height of the file.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Height: number;

		/** The Id of the GlobalImage Metadata. */
		Id?: string | null;

		/**
		 * The name of the file when downloaded.
		 * Required
		 */
		Name: string;

		/** The Publisher of the file. */
		Publisher?: string | null;

		/**
		 * The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size?: string | null;

		/**
		 * Indicates the state of this file. Must be 'Created' when created. Read Only.
		 * Required
		 */
		State: GlobalResourcesSharedModelsFileDownloadState;

		/**
		 * The Hash of the thumbnail file (SHA256, HEX-encoded).
		 * Required
		 */
		ThumbnailCRC: string;

		/**
		 * The size of the thumbnail file in bytes. Null until assigned by server when marked as 'Available'. Read Only
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		ThumbnailSize?: string | null;

		/**
		 * The width of the file.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Width: number;
	}

	/** An image from the Global Image library. */
	export interface GlobalResourcesSharedModelsGlobalImageFormProperties {

		/**
		 * The Hash of the file (SHA256, HEX-encoded).
		 * Required
		 */
		CRC: FormControl<string | null | undefined>,

		/** The date of the file. */
		Date: FormControl<Date | null | undefined>,

		/**
		 * The description of the file.
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The height of the file.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Height: FormControl<number | null | undefined>,

		/** The Id of the GlobalImage Metadata. */
		Id: FormControl<string | null | undefined>,

		/**
		 * The name of the file when downloaded.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** The Publisher of the file. */
		Publisher: FormControl<string | null | undefined>,

		/**
		 * The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size: FormControl<string | null | undefined>,

		/**
		 * Indicates the state of this file. Must be 'Created' when created. Read Only.
		 * Required
		 */
		State: FormControl<GlobalResourcesSharedModelsFileDownloadState | null | undefined>,

		/**
		 * The Hash of the thumbnail file (SHA256, HEX-encoded).
		 * Required
		 */
		ThumbnailCRC: FormControl<string | null | undefined>,

		/**
		 * The size of the thumbnail file in bytes. Null until assigned by server when marked as 'Available'. Read Only
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		ThumbnailSize: FormControl<string | null | undefined>,

		/**
		 * The width of the file.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Width: FormControl<number | null | undefined>,
	}
	export function CreateGlobalResourcesSharedModelsGlobalImageFormGroup() {
		return new FormGroup<GlobalResourcesSharedModelsGlobalImageFormProperties>({
			CRC: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Date: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Publisher: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<GlobalResourcesSharedModelsFileDownloadState | null | undefined>(undefined, [Validators.required]),
			ThumbnailCRC: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ThumbnailSize: new FormControl<string | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface APIIPagedResponse_GlobalResourcesSharedModelsLanguage_ {
		Entities?: Array<GlobalResourcesSharedModelsLanguage>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_GlobalResourcesSharedModelsLanguage_FormProperties {
	}
	export function CreateAPIIPagedResponse_GlobalResourcesSharedModelsLanguage_FormGroup() {
		return new FormGroup<APIIPagedResponse_GlobalResourcesSharedModelsLanguage_FormProperties>({
		});

	}


	/** A language used for string translations. */
	export interface GlobalResourcesSharedModelsLanguage {

		/**
		 * The description of the language (e.g. “English – United States”).
		 * Required
		 */
		Description: string;

		/** Indicates whether the API supports the language. Must be false when created. Read Only. */
		IsDeleted?: boolean | null;

		/**
		 * The Locale Id of the language.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		LocaleId: number;
	}

	/** A language used for string translations. */
	export interface GlobalResourcesSharedModelsLanguageFormProperties {

		/**
		 * The description of the language (e.g. “English – United States”).
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/** Indicates whether the API supports the language. Must be false when created. Read Only. */
		IsDeleted: FormControl<boolean | null | undefined>,

		/**
		 * The Locale Id of the language.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		LocaleId: FormControl<number | null | undefined>,
	}
	export function CreateGlobalResourcesSharedModelsLanguageFormGroup() {
		return new FormGroup<GlobalResourcesSharedModelsLanguageFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsDeleted: new FormControl<boolean | null | undefined>(undefined),
			LocaleId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface APIIPagedResponse_GlobalResourcesSharedModelsStringDefinition_ {
		Entities?: Array<GlobalResourcesSharedModelsStringDefinition>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_GlobalResourcesSharedModelsStringDefinition_FormProperties {
	}
	export function CreateAPIIPagedResponse_GlobalResourcesSharedModelsStringDefinition_FormGroup() {
		return new FormGroup<APIIPagedResponse_GlobalResourcesSharedModelsStringDefinition_FormProperties>({
		});

	}


	/** The definition of a string to be translated */
	export interface GlobalResourcesSharedModelsStringDefinition {

		/**
		 * The description of the string to be translated.
		 * Required
		 */
		DescriptionForTranslator: string;

		/** True if the string should not be translated. False by default. */
		DoNotTranslate?: boolean | null;

		/** The identifier for the string. Read Only. */
		Id?: string | null;

		/**
		 * The number of parameters expected for the string.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ParameterCount?: number | null;

		/** A value indicating the last modification of this string. Read Only. */
		Timestamp?: string | null;

		/** Translations for the string. */
		Translations?: Array<GlobalResourcesSharedModelsStringTranslation>;
	}

	/** The definition of a string to be translated */
	export interface GlobalResourcesSharedModelsStringDefinitionFormProperties {

		/**
		 * The description of the string to be translated.
		 * Required
		 */
		DescriptionForTranslator: FormControl<string | null | undefined>,

		/** True if the string should not be translated. False by default. */
		DoNotTranslate: FormControl<boolean | null | undefined>,

		/** The identifier for the string. Read Only. */
		Id: FormControl<string | null | undefined>,

		/**
		 * The number of parameters expected for the string.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ParameterCount: FormControl<number | null | undefined>,

		/** A value indicating the last modification of this string. Read Only. */
		Timestamp: FormControl<string | null | undefined>,
	}
	export function CreateGlobalResourcesSharedModelsStringDefinitionFormGroup() {
		return new FormGroup<GlobalResourcesSharedModelsStringDefinitionFormProperties>({
			DescriptionForTranslator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DoNotTranslate: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			ParameterCount: new FormControl<number | null | undefined>(undefined),
			Timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A translation of a string in a specific language */
	export interface GlobalResourcesSharedModelsStringTranslation {

		/**
		 * The id of the user to last edit thie translation
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		AuthorId?: number | null;

		/**
		 * The id of the language of the translation
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		LanguageId?: number | null;

		/** The state of the translation */
		State?: GlobalResourcesSharedModelsStringTranslationState | null;

		/** The id of the string that is translated */
		StringId?: string | null;

		/**
		 * The translated string
		 * Required
		 */
		StringValue: string;

		/** A value indicating the last modification of this translation. Read Only. */
		Timestamp?: string | null;
	}

	/** A translation of a string in a specific language */
	export interface GlobalResourcesSharedModelsStringTranslationFormProperties {

		/**
		 * The id of the user to last edit thie translation
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		AuthorId: FormControl<number | null | undefined>,

		/**
		 * The id of the language of the translation
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		LanguageId: FormControl<number | null | undefined>,

		/** The state of the translation */
		State: FormControl<GlobalResourcesSharedModelsStringTranslationState | null | undefined>,

		/** The id of the string that is translated */
		StringId: FormControl<string | null | undefined>,

		/**
		 * The translated string
		 * Required
		 */
		StringValue: FormControl<string | null | undefined>,

		/** A value indicating the last modification of this translation. Read Only. */
		Timestamp: FormControl<string | null | undefined>,
	}
	export function CreateGlobalResourcesSharedModelsStringTranslationFormGroup() {
		return new FormGroup<GlobalResourcesSharedModelsStringTranslationFormProperties>({
			AuthorId: new FormControl<number | null | undefined>(undefined),
			LanguageId: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<GlobalResourcesSharedModelsStringTranslationState | null | undefined>(undefined),
			StringId: new FormControl<string | null | undefined>(undefined),
			StringValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GlobalResourcesSharedModelsStringTranslationState { Original = 'Original', Requested = 'Requested', Processing = 'Processing', Processed = 'Processed', Validated = 'Validated', Invalidated = 'Invalidated', RequestPending = 'RequestPending', CreatePending = 'CreatePending' }

	export interface APIIPagedResponse_GlobalResourcesSharedModelsStringTranslation_ {
		Entities?: Array<GlobalResourcesSharedModelsStringTranslation>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_GlobalResourcesSharedModelsStringTranslation_FormProperties {
	}
	export function CreateAPIIPagedResponse_GlobalResourcesSharedModelsStringTranslation_FormGroup() {
		return new FormGroup<APIIPagedResponse_GlobalResourcesSharedModelsStringTranslation_FormProperties>({
		});

	}

	export interface APIIPagedResponse_GlobalResourcesSharedModelsTranslationRequest_ {
		Entities?: Array<GlobalResourcesSharedModelsTranslationRequest>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_GlobalResourcesSharedModelsTranslationRequest_FormProperties {
	}
	export function CreateAPIIPagedResponse_GlobalResourcesSharedModelsTranslationRequest_FormGroup() {
		return new FormGroup<APIIPagedResponse_GlobalResourcesSharedModelsTranslationRequest_FormProperties>({
		});

	}


	/** A request to translate specified strings into specified locales */
	export interface GlobalResourcesSharedModelsTranslationRequest {

		/**
		 * The ID of the user from which approval for the request is required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApprovalUserId?: number | null;

		/**
		 * Additional email addresses to CC on emails pertaining to the request
		 * Required
		 */
		CCEmailAddresses: Array<string>;

		/**
		 * The account to charge for the request
		 * Required
		 */
		ChargeToAccount: string;

		/**
		 * The date by which the translations in the request are needed. Defaults to 30 days from the current date
		 * Required
		 */
		Deadline: Date;

		/**
		 * The ID of the request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/**
		 * Locale IDs to which these strings are requested to be translated
		 * Required
		 */
		LocaleIds: Array<number>;

		/**
		 * Additional notes or comments about the request
		 * Required
		 */
		Notes: string;

		/**
		 * The ID of the user to which to address questions regarding the request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		QuestionsUserId?: number | null;

		/**
		 * The state of the request
		 * Required
		 */
		State: GlobalResourcesSharedModelsTranslationRequestState;

		/**
		 * The ID of the User that submitted the request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SubmittedBy?: number | null;

		/** The email address for the translator */
		TranslatorEmail?: string | null;

		/** The name of the translator */
		TranslatorName?: string | null;
	}

	/** A request to translate specified strings into specified locales */
	export interface GlobalResourcesSharedModelsTranslationRequestFormProperties {

		/**
		 * The ID of the user from which approval for the request is required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApprovalUserId: FormControl<number | null | undefined>,

		/**
		 * The account to charge for the request
		 * Required
		 */
		ChargeToAccount: FormControl<string | null | undefined>,

		/**
		 * The date by which the translations in the request are needed. Defaults to 30 days from the current date
		 * Required
		 */
		Deadline: FormControl<Date | null | undefined>,

		/**
		 * The ID of the request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Additional notes or comments about the request
		 * Required
		 */
		Notes: FormControl<string | null | undefined>,

		/**
		 * The ID of the user to which to address questions regarding the request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		QuestionsUserId: FormControl<number | null | undefined>,

		/**
		 * The state of the request
		 * Required
		 */
		State: FormControl<GlobalResourcesSharedModelsTranslationRequestState | null | undefined>,

		/**
		 * The ID of the User that submitted the request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SubmittedBy: FormControl<number | null | undefined>,

		/** The email address for the translator */
		TranslatorEmail: FormControl<string | null | undefined>,

		/** The name of the translator */
		TranslatorName: FormControl<string | null | undefined>,
	}
	export function CreateGlobalResourcesSharedModelsTranslationRequestFormGroup() {
		return new FormGroup<GlobalResourcesSharedModelsTranslationRequestFormProperties>({
			ApprovalUserId: new FormControl<number | null | undefined>(undefined),
			ChargeToAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Deadline: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<number | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QuestionsUserId: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<GlobalResourcesSharedModelsTranslationRequestState | null | undefined>(undefined, [Validators.required]),
			SubmittedBy: new FormControl<number | null | undefined>(undefined),
			TranslatorEmail: new FormControl<string | null | undefined>(undefined),
			TranslatorName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GlobalResourcesSharedModelsTranslationRequestState { NotSubmitted = 'NotSubmitted', Submitted = 'Submitted', Cancelled = 'Cancelled', Completed = 'Completed' }

	export interface APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetAttribute_ {
		Entities?: Array<GlobalResourcesSharedModelsTranslationSetAttribute>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetAttribute_FormProperties {
	}
	export function CreateAPIIPagedResponse_GlobalResourcesSharedModelsTranslationSetAttribute_FormGroup() {
		return new FormGroup<APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetAttribute_FormProperties>({
		});

	}


	/** An attribute of a */
	export interface GlobalResourcesSharedModelsTranslationSetAttribute {

		/**
		 * The ID of this attribute.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID?: number | null;

		/**
		 * The name of this Attribute.
		 * Required
		 */
		Name: string;

		/**
		 * The ID of the translation set to which this attribute belongs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TranslationSetID?: number | null;

		/** The value of this Attribute */
		Value?: string | null;
	}

	/** An attribute of a */
	export interface GlobalResourcesSharedModelsTranslationSetAttributeFormProperties {

		/**
		 * The ID of this attribute.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID: FormControl<number | null | undefined>,

		/**
		 * The name of this Attribute.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The ID of the translation set to which this attribute belongs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TranslationSetID: FormControl<number | null | undefined>,

		/** The value of this Attribute */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateGlobalResourcesSharedModelsTranslationSetAttributeFormGroup() {
		return new FormGroup<GlobalResourcesSharedModelsTranslationSetAttributeFormProperties>({
			ID: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]),
			TranslationSetID: new FormControl<number | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetSourceString_ {
		Entities?: Array<GlobalResourcesSharedModelsTranslationSetSourceString>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetSourceString_FormProperties {
	}
	export function CreateAPIIPagedResponse_GlobalResourcesSharedModelsTranslationSetSourceString_FormGroup() {
		return new FormGroup<APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetSourceString_FormProperties>({
		});

	}


	/** Information needed to translate a string in a translation set */
	export interface GlobalResourcesSharedModelsTranslationSetSourceString {

		/** A description of the string to translate. This should contain context and parameter count. */
		DescriptionForTranslator?: string | null;

		/**
		 * The ID of the language from which to translate the string
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		LanguageID?: number | null;

		/** The ID of the string to translate */
		StringID?: string | null;

		/** The string to translate */
		StringValue?: string | null;
	}

	/** Information needed to translate a string in a translation set */
	export interface GlobalResourcesSharedModelsTranslationSetSourceStringFormProperties {

		/** A description of the string to translate. This should contain context and parameter count. */
		DescriptionForTranslator: FormControl<string | null | undefined>,

		/**
		 * The ID of the language from which to translate the string
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		LanguageID: FormControl<number | null | undefined>,

		/** The ID of the string to translate */
		StringID: FormControl<string | null | undefined>,

		/** The string to translate */
		StringValue: FormControl<string | null | undefined>,
	}
	export function CreateGlobalResourcesSharedModelsTranslationSetSourceStringFormGroup() {
		return new FormGroup<GlobalResourcesSharedModelsTranslationSetSourceStringFormProperties>({
			DescriptionForTranslator: new FormControl<string | null | undefined>(undefined),
			LanguageID: new FormControl<number | null | undefined>(undefined),
			StringID: new FormControl<string | null | undefined>(undefined),
			StringValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetString_ {
		Entities?: Array<GlobalResourcesSharedModelsTranslationSetString>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetString_FormProperties {
	}
	export function CreateAPIIPagedResponse_GlobalResourcesSharedModelsTranslationSetString_FormGroup() {
		return new FormGroup<APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetString_FormProperties>({
		});

	}


	/** The resulting translation in a translation set.  is the  to which the string will be translated. */
	export interface GlobalResourcesSharedModelsTranslationSetString {

		/**
		 * The ID of the language into which to translate the string
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		LanguageID: number;

		/**
		 * The Id of the string translation that has been requested
		 * Required
		 */
		StringID: string;

		/** The string value returned from the translator */
		StringValue?: string | null;

		/**
		 * The id of the TranslationSet
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TranslationSetId: number;
	}

	/** The resulting translation in a translation set.  is the  to which the string will be translated. */
	export interface GlobalResourcesSharedModelsTranslationSetStringFormProperties {

		/**
		 * The ID of the language into which to translate the string
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		LanguageID: FormControl<number | null | undefined>,

		/**
		 * The Id of the string translation that has been requested
		 * Required
		 */
		StringID: FormControl<string | null | undefined>,

		/** The string value returned from the translator */
		StringValue: FormControl<string | null | undefined>,

		/**
		 * The id of the TranslationSet
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TranslationSetId: FormControl<number | null | undefined>,
	}
	export function CreateGlobalResourcesSharedModelsTranslationSetStringFormGroup() {
		return new FormGroup<GlobalResourcesSharedModelsTranslationSetStringFormProperties>({
			LanguageID: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StringID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StringValue: new FormControl<string | null | undefined>(undefined),
			TranslationSetId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface APIIPagedResponse_GlobalResourcesSharedModelsTranslationSet_ {
		Entities?: Array<GlobalResourcesSharedModelsTranslationSet>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_GlobalResourcesSharedModelsTranslationSet_FormProperties {
	}
	export function CreateAPIIPagedResponse_GlobalResourcesSharedModelsTranslationSet_FormGroup() {
		return new FormGroup<APIIPagedResponse_GlobalResourcesSharedModelsTranslationSet_FormProperties>({
		});

	}


	/** A set of strings submitted for translation */
	export interface GlobalResourcesSharedModelsTranslationSet {

		/** Attributes of the Translation Set */
		Attributes?: Array<GlobalResourcesSharedModelsTranslationSetAttribute>;

		/**
		 * IDs for files related to this translation set. For example, the original and processed files
		 * Required
		 */
		FileIDs: Array<string>;

		/**
		 * The id of the TranslationSet.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Read Only. The date the translation set was returned. */
		InDate?: Date | null;

		/** Notes on the TranslationSet */
		Notes?: string | null;

		/** Read Only. The date the translation set was sent out. */
		OutDate?: Date | null;

		/**
		 * An enum indicating the state of the translation set
		 * Required
		 */
		State: GlobalResourcesSharedModelsTranslationSetState;

		/**
		 * Read Only. The Id of the TranslationRequest which generated this translation set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TranslationRequestID?: number | null;
	}

	/** A set of strings submitted for translation */
	export interface GlobalResourcesSharedModelsTranslationSetFormProperties {

		/**
		 * The id of the TranslationSet.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Read Only. The date the translation set was returned. */
		InDate: FormControl<Date | null | undefined>,

		/** Notes on the TranslationSet */
		Notes: FormControl<string | null | undefined>,

		/** Read Only. The date the translation set was sent out. */
		OutDate: FormControl<Date | null | undefined>,

		/**
		 * An enum indicating the state of the translation set
		 * Required
		 */
		State: FormControl<GlobalResourcesSharedModelsTranslationSetState | null | undefined>,

		/**
		 * Read Only. The Id of the TranslationRequest which generated this translation set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TranslationRequestID: FormControl<number | null | undefined>,
	}
	export function CreateGlobalResourcesSharedModelsTranslationSetFormGroup() {
		return new FormGroup<GlobalResourcesSharedModelsTranslationSetFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			InDate: new FormControl<Date | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			OutDate: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<GlobalResourcesSharedModelsTranslationSetState | null | undefined>(undefined, [Validators.required]),
			TranslationRequestID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GlobalResourcesSharedModelsTranslationSetState { OutForProcessing = 'OutForProcessing', Processing = 'Processing', PendingApproval = 'PendingApproval', OutForTranslation = 'OutForTranslation', Cancelled = 'Cancelled', Completed = 'Completed' }

	export interface APIIPagedResponse_OASSupportSharedModelsTranslationKey_ {
		Entities?: Array<OASSupportSharedModelsTranslationKey>;

		/** Metadata for the paged response */
		Metadata?: APIPagedResponseMetadata;
	}
	export interface APIIPagedResponse_OASSupportSharedModelsTranslationKey_FormProperties {
	}
	export function CreateAPIIPagedResponse_OASSupportSharedModelsTranslationKey_FormGroup() {
		return new FormGroup<APIIPagedResponse_OASSupportSharedModelsTranslationKey_FormProperties>({
		});

	}


	/** A translation key to map the relationship of keyNames, usually for ODX, and string Ids */
	export interface OASSupportSharedModelsTranslationKey {

		/**
		 * The identifier for the translationKey. Read Only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID?: number | null;

		/**
		 * The key name of the item. One example is tkODX_HWIKM14R01
		 * Required
		 */
		KeyName: string;

		/**
		 * Foreign key to StringDefinitionID
		 * Required
		 */
		StringID: string;
	}

	/** A translation key to map the relationship of keyNames, usually for ODX, and string Ids */
	export interface OASSupportSharedModelsTranslationKeyFormProperties {

		/**
		 * The identifier for the translationKey. Read Only.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID: FormControl<number | null | undefined>,

		/**
		 * The key name of the item. One example is tkODX_HWIKM14R01
		 * Required
		 */
		KeyName: FormControl<string | null | undefined>,

		/**
		 * Foreign key to StringDefinitionID
		 * Required
		 */
		StringID: FormControl<string | null | undefined>,
	}
	export function CreateOASSupportSharedModelsTranslationKeyFormGroup() {
		return new FormGroup<OASSupportSharedModelsTranslationKeyFormProperties>({
			ID: new FormControl<number | null | undefined>(undefined),
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StringID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface APIModelsApiError {
		DeveloperMessage?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ErrorCode?: number | null;
		MoreInfo?: string | null;
		UserMessage?: string | null;
	}
	export interface APIModelsApiErrorFormProperties {
		DeveloperMessage: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ErrorCode: FormControl<number | null | undefined>,
		MoreInfo: FormControl<string | null | undefined>,
		UserMessage: FormControl<string | null | undefined>,
	}
	export function CreateAPIModelsApiErrorFormGroup() {
		return new FormGroup<APIModelsApiErrorFormProperties>({
			DeveloperMessage: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<number | null | undefined>(undefined),
			MoreInfo: new FormControl<string | null | undefined>(undefined),
			UserMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface APIModelsAuthenticatedUser {

		/** The user's email address */
		Email?: string | null;

		/** The MAC identifier to use for API access */
		MACId?: string | null;

		/** The MAC token to use for API access */
		MACToken?: string | null;

		/** The user's name */
		Name?: string | null;

		/** The token to use for API access */
		Token?: string | null;

		/**
		 * The user ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UserID?: number | null;

		/** The username used for authentication */
		Username?: string | null;
	}
	export interface APIModelsAuthenticatedUserFormProperties {

		/** The user's email address */
		Email: FormControl<string | null | undefined>,

		/** The MAC identifier to use for API access */
		MACId: FormControl<string | null | undefined>,

		/** The MAC token to use for API access */
		MACToken: FormControl<string | null | undefined>,

		/** The user's name */
		Name: FormControl<string | null | undefined>,

		/** The token to use for API access */
		Token: FormControl<string | null | undefined>,

		/**
		 * The user ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UserID: FormControl<number | null | undefined>,

		/** The username used for authentication */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAPIModelsAuthenticatedUserFormGroup() {
		return new FormGroup<APIModelsAuthenticatedUserFormProperties>({
			Email: new FormControl<string | null | undefined>(undefined),
			MACId: new FormControl<string | null | undefined>(undefined),
			MACToken: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Token: new FormControl<string | null | undefined>(undefined),
			UserID: new FormControl<number | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface APIModelsCredentials {

		/** The action to perform on the bearer token. Optional. Defaults to ‘None’. */
		BearerAction?: APIModelsCredentialsBearerAction | null;

		/** The action to perform on the MAC token. Optional. Defaults to ‘None’. */
		MACAction?: APIModelsCredentialsBearerAction | null;

		/**
		 * A secret word or phrase that must be used to gain admission
		 * Required
		 */
		password: string;

		/**
		 * A unique ID a user needs to login with
		 * Required
		 */
		username: string;
	}
	export interface APIModelsCredentialsFormProperties {

		/** The action to perform on the bearer token. Optional. Defaults to ‘None’. */
		BearerAction: FormControl<APIModelsCredentialsBearerAction | null | undefined>,

		/** The action to perform on the MAC token. Optional. Defaults to ‘None’. */
		MACAction: FormControl<APIModelsCredentialsBearerAction | null | undefined>,

		/**
		 * A secret word or phrase that must be used to gain admission
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * A unique ID a user needs to login with
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateAPIModelsCredentialsFormGroup() {
		return new FormGroup<APIModelsCredentialsFormProperties>({
			BearerAction: new FormControl<APIModelsCredentialsBearerAction | null | undefined>(undefined),
			MACAction: new FormControl<APIModelsCredentialsBearerAction | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum APIModelsCredentialsBearerAction { None = 'None', Reset = 'Reset', Disable = 'Disable' }

	export interface APIModelsLog {
		ID?: string | null;
		Message?: string | null;
		TimeStamp?: Date | null;
	}
	export interface APIModelsLogFormProperties {
		ID: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		TimeStamp: FormControl<Date | null | undefined>,
	}
	export function CreateAPIModelsLogFormGroup() {
		return new FormGroup<APIModelsLogFormProperties>({
			ID: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			TimeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface APIModelsNotification {
		CC_Addresses?: Array<string>;

		/** Required */
		IsBodyHtml: boolean;

		/** Required */
		MessageBody: string;

		/** Required */
		Subject: string;

		/** Required */
		To_Addresses: Array<string>;
	}
	export interface APIModelsNotificationFormProperties {

		/** Required */
		IsBodyHtml: FormControl<boolean | null | undefined>,

		/** Required */
		MessageBody: FormControl<string | null | undefined>,

		/** Required */
		Subject: FormControl<string | null | undefined>,
	}
	export function CreateAPIModelsNotificationFormGroup() {
		return new FormGroup<APIModelsNotificationFormProperties>({
			IsBodyHtml: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			MessageBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface APIModelsPasswordReset {

		/**
		 * The new password
		 * Required
		 */
		NewPassword: string;

		/**
		 * The password reset token
		 * Required
		 */
		Token: string;
	}
	export interface APIModelsPasswordResetFormProperties {

		/**
		 * The new password
		 * Required
		 */
		NewPassword: FormControl<string | null | undefined>,

		/**
		 * The password reset token
		 * Required
		 */
		Token: FormControl<string | null | undefined>,
	}
	export function CreateAPIModelsPasswordResetFormGroup() {
		return new FormGroup<APIModelsPasswordResetFormProperties>({
			NewPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface APIModelsPasswordResetRequest {

		/**
		 * The query string parameter name to use for supplying the password reset token
		 * Required
		 */
		ParameterName: string;

		/**
		 * The URL to direct the user to reset the password.
		 * Required
		 */
		Url: string;

		/**
		 * The username to reset the password for
		 * Required
		 */
		Username: string;
	}
	export interface APIModelsPasswordResetRequestFormProperties {

		/**
		 * The query string parameter name to use for supplying the password reset token
		 * Required
		 */
		ParameterName: FormControl<string | null | undefined>,

		/**
		 * The URL to direct the user to reset the password.
		 * Required
		 */
		Url: FormControl<string | null | undefined>,

		/**
		 * The username to reset the password for
		 * Required
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAPIModelsPasswordResetRequestFormGroup() {
		return new FormGroup<APIModelsPasswordResetRequestFormProperties>({
			ParameterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface APIModelsPermission {

		/** Description of data to be provided with Role Authorization */
		DataDescription?: string | null;

		/**
		 * Indicates if data is required or optional
		 * Required
		 */
		DataRequired: APIModelsPermissionDataRequired;
		Description?: string | null;

		/**
		 * The identifier of the permission.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/**
		 * The name of the permission.
		 * Required
		 */
		Name: string;
	}
	export interface APIModelsPermissionFormProperties {

		/** Description of data to be provided with Role Authorization */
		DataDescription: FormControl<string | null | undefined>,

		/**
		 * Indicates if data is required or optional
		 * Required
		 */
		DataRequired: FormControl<APIModelsPermissionDataRequired | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/**
		 * The identifier of the permission.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * The name of the permission.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAPIModelsPermissionFormGroup() {
		return new FormGroup<APIModelsPermissionFormProperties>({
			DataDescription: new FormControl<string | null | undefined>(undefined),
			DataRequired: new FormControl<APIModelsPermissionDataRequired | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum APIModelsPermissionDataRequired { Yes = 'Yes', No = 'No', Optional = 'Optional' }


	/** Defines an API Role */
	export interface APIModelsRole {

		/**
		 * Role description
		 * Required
		 */
		Description: string;

		/**
		 * The role's identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/**
		 * The name of the role. Must be alpha-numeric strings separated by a period (.).
		 * Required
		 */
		Name: string;
	}

	/** Defines an API Role */
	export interface APIModelsRoleFormProperties {

		/**
		 * Role description
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The role's identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * The name of the role. Must be alpha-numeric strings separated by a period (.).
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAPIModelsRoleFormGroup() {
		return new FormGroup<APIModelsRoleFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9a-zA-Z]*?[a-zA-Z]+[0-9a-zA-Z]*$')]),
		});

	}


	/** Change to the Permissions that a Role is given. */
	export interface APIModelsRolePermissionChange {

		/**
		 * The action to take.
		 * Required
		 */
		Action: APIModelsRolePermissionChangeAction;

		/**
		 * The name of the permission to grant or revoke.
		 * Required
		 */
		Permission: string;
	}

	/** Change to the Permissions that a Role is given. */
	export interface APIModelsRolePermissionChangeFormProperties {

		/**
		 * The action to take.
		 * Required
		 */
		Action: FormControl<APIModelsRolePermissionChangeAction | null | undefined>,

		/**
		 * The name of the permission to grant or revoke.
		 * Required
		 */
		Permission: FormControl<string | null | undefined>,
	}
	export function CreateAPIModelsRolePermissionChangeFormGroup() {
		return new FormGroup<APIModelsRolePermissionChangeFormProperties>({
			Action: new FormControl<APIModelsRolePermissionChangeAction | null | undefined>(undefined, [Validators.required]),
			Permission: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum APIModelsRolePermissionChangeAction { Grant = 'Grant', Revoke = 'Revoke' }

	export interface APIModelsRoleUserChange {

		/**
		 * The action to take with the user
		 * Required
		 */
		Action: APIModelsRolePermissionChangeAction;

		/**
		 * The Id of the User
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: number;
	}
	export interface APIModelsRoleUserChangeFormProperties {

		/**
		 * The action to take with the user
		 * Required
		 */
		Action: FormControl<APIModelsRolePermissionChangeAction | null | undefined>,

		/**
		 * The Id of the User
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,
	}
	export function CreateAPIModelsRoleUserChangeFormGroup() {
		return new FormGroup<APIModelsRoleUserChangeFormProperties>({
			Action: new FormControl<APIModelsRolePermissionChangeAction | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface APIModelsTokenOptions {

		/** The action to perform on the bearer token. Optional. Defaults to ‘None’. */
		BearerAction?: APIModelsCredentialsBearerAction | null;

		/** The action to perform on the MAC token. Optional. Defaults to ‘None’. */
		MACAction?: APIModelsCredentialsBearerAction | null;
	}
	export interface APIModelsTokenOptionsFormProperties {

		/** The action to perform on the bearer token. Optional. Defaults to ‘None’. */
		BearerAction: FormControl<APIModelsCredentialsBearerAction | null | undefined>,

		/** The action to perform on the MAC token. Optional. Defaults to ‘None’. */
		MACAction: FormControl<APIModelsCredentialsBearerAction | null | undefined>,
	}
	export function CreateAPIModelsTokenOptionsFormGroup() {
		return new FormGroup<APIModelsTokenOptionsFormProperties>({
			BearerAction: new FormControl<APIModelsCredentialsBearerAction | null | undefined>(undefined),
			MACAction: new FormControl<APIModelsCredentialsBearerAction | null | undefined>(undefined),
		});

	}

	export interface APIModelsUser {

		/** Never Returned.  When changing a user's password, this field must contain the new password. */
		ChangePassword?: string | null;

		/** The user's email address */
		Email?: string | null;

		/** The user's name */
		Name?: string | null;

		/** Never Returned.  Required when creating a new user or updating a user.  When changing a user's password this field must contain the current password. */
		Password?: string | null;

		/**
		 * The user ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UserID?: number | null;

		/** The username used for authentication */
		Username?: string | null;
	}
	export interface APIModelsUserFormProperties {

		/** Never Returned.  When changing a user's password, this field must contain the new password. */
		ChangePassword: FormControl<string | null | undefined>,

		/** The user's email address */
		Email: FormControl<string | null | undefined>,

		/** The user's name */
		Name: FormControl<string | null | undefined>,

		/** Never Returned.  Required when creating a new user or updating a user.  When changing a user's password this field must contain the current password. */
		Password: FormControl<string | null | undefined>,

		/**
		 * The user ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UserID: FormControl<number | null | undefined>,

		/** The username used for authentication */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAPIModelsUserFormGroup() {
		return new FormGroup<APIModelsUserFormProperties>({
			ChangePassword: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			UserID: new FormControl<number | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface APIModelsUserEffectivePermission {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PermissionId?: number | null;
		PermissionName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserID?: number | null;
	}
	export interface APIModelsUserEffectivePermissionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PermissionId: FormControl<number | null | undefined>,
		PermissionName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserID: FormControl<number | null | undefined>,
	}
	export function CreateAPIModelsUserEffectivePermissionFormGroup() {
		return new FormGroup<APIModelsUserEffectivePermissionFormProperties>({
			PermissionId: new FormControl<number | null | undefined>(undefined),
			PermissionName: new FormControl<string | null | undefined>(undefined),
			UserID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface APIModelsUserRoleChange {

		/**
		 * The action to take with the role
		 * Required
		 */
		Action: APIModelsRolePermissionChangeAction;

		/**
		 * The name of the role
		 * Required
		 */
		Name: string;
	}
	export interface APIModelsUserRoleChangeFormProperties {

		/**
		 * The action to take with the role
		 * Required
		 */
		Action: FormControl<APIModelsRolePermissionChangeAction | null | undefined>,

		/**
		 * The name of the role
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAPIModelsUserRoleChangeFormGroup() {
		return new FormGroup<APIModelsUserRoleChangeFormProperties>({
			Action: new FormControl<APIModelsRolePermissionChangeAction | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_APIModelsLog_ {

		/** Required */
		Entities: Array<APIModelsLog>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_APIModelsLog_FormProperties {
	}
	export function CreateAPIPagedResponse_APIModelsLog_FormGroup() {
		return new FormGroup<APIPagedResponse_APIModelsLog_FormProperties>({
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_APIModelsPermission_ {

		/** Required */
		Entities: Array<APIModelsPermission>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_APIModelsPermission_FormProperties {
	}
	export function CreateAPIPagedResponse_APIModelsPermission_FormGroup() {
		return new FormGroup<APIPagedResponse_APIModelsPermission_FormProperties>({
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_APIModelsRole_ {

		/** Required */
		Entities: Array<APIModelsRole>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_APIModelsRole_FormProperties {
	}
	export function CreateAPIPagedResponse_APIModelsRole_FormGroup() {
		return new FormGroup<APIPagedResponse_APIModelsRole_FormProperties>({
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_APIModelsUserEffectivePermission_ {

		/** Required */
		Entities: Array<APIModelsUserEffectivePermission>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_APIModelsUserEffectivePermission_FormProperties {
	}
	export function CreateAPIPagedResponse_APIModelsUserEffectivePermission_FormGroup() {
		return new FormGroup<APIPagedResponse_APIModelsUserEffectivePermission_FormProperties>({
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_APIModelsUser_ {

		/** Required */
		Entities: Array<APIModelsUser>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_APIModelsUser_FormProperties {
	}
	export function CreateAPIPagedResponse_APIModelsUser_FormGroup() {
		return new FormGroup<APIPagedResponse_APIModelsUser_FormProperties>({
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_BuildSystemSharedDTOActivityRun_ {

		/** Required */
		Entities: Array<BuildSystemSharedDTOActivityRun>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_BuildSystemSharedDTOActivityRun_FormProperties {
	}
	export function CreateAPIPagedResponse_BuildSystemSharedDTOActivityRun_FormGroup() {
		return new FormGroup<APIPagedResponse_BuildSystemSharedDTOActivityRun_FormProperties>({
		});

	}


	/** A DTO for an IActivityRun */
	export interface BuildSystemSharedDTOActivityRun {

		/**
		 * The identifier for the ActivityRun
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityRunID?: number | null;

		/** Read Only. The UTC date and time when the activity completed */
		EndDate?: Date | null;

		/**
		 * Read Only. The ID of the Job Activity that defines this activity run
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobActivityID?: number | null;

		/**
		 * Read Only. The ID of the JobRun under which this ActivityRun is executing
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobRunID?: number | null;

		/** The parameters used for this run of the activity.  Parameters cannot be added or removed, but output parameter values may be updated. */
		Parameters?: Array<BuildSystemSharedDTOParameterValue>;

		/** Read Only. The UTC date and time when the activity started */
		StartDate?: Date | null;

		/**
		 * A DTO for an IActivityRunStatus
		 * Required
		 */
		Status: BuildSystemSharedDTOActivityRunStatus;

		/** Read Only. The steps to be executed for the activity.  These steps come from the relationship through JobActivity down to ActivityStep */
		Steps?: Array<BuildSystemSharedDTOActivityStep>;
	}

	/** A DTO for an IActivityRun */
	export interface BuildSystemSharedDTOActivityRunFormProperties {

		/**
		 * The identifier for the ActivityRun
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityRunID: FormControl<number | null | undefined>,

		/** Read Only. The UTC date and time when the activity completed */
		EndDate: FormControl<Date | null | undefined>,

		/**
		 * Read Only. The ID of the Job Activity that defines this activity run
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobActivityID: FormControl<number | null | undefined>,

		/**
		 * Read Only. The ID of the JobRun under which this ActivityRun is executing
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobRunID: FormControl<number | null | undefined>,

		/** Read Only. The UTC date and time when the activity started */
		StartDate: FormControl<Date | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOActivityRunFormGroup() {
		return new FormGroup<BuildSystemSharedDTOActivityRunFormProperties>({
			ActivityRunID: new FormControl<number | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			JobActivityID: new FormControl<number | null | undefined>(undefined),
			JobRunID: new FormControl<number | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A DTO for an IParameterValue */
	export interface BuildSystemSharedDTOParameterValue {

		/** The parameter direction (Input or Output) */
		Direction?: BuildSystemSharedDTOParameterValueDirection | null;

		/** The name of the parameter this value is for */
		Name?: string | null;

		/** The parameter value in string representation */
		Value?: string | null;
	}

	/** A DTO for an IParameterValue */
	export interface BuildSystemSharedDTOParameterValueFormProperties {

		/** The parameter direction (Input or Output) */
		Direction: FormControl<BuildSystemSharedDTOParameterValueDirection | null | undefined>,

		/** The name of the parameter this value is for */
		Name: FormControl<string | null | undefined>,

		/** The parameter value in string representation */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOParameterValueFormGroup() {
		return new FormGroup<BuildSystemSharedDTOParameterValueFormProperties>({
			Direction: new FormControl<BuildSystemSharedDTOParameterValueDirection | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildSystemSharedDTOParameterValueDirection { Input = 'Input', Output = 'Output' }


	/** A DTO for an IActivityRunStatus */
	export interface BuildSystemSharedDTOActivityRunStatus {

		/**
		 * The activity step currently executing, indicated by numeric order
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrentStep?: number | null;

		/** The status of the ActivityRun */
		Status?: BuildSystemSharedDTOActivityRunStatusStatus | null;

		/**
		 * The percent progress from the currently executing step.  This value shall be null if progress is not available
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StepProgress?: number | null;

		/** The status text from the currently executing step */
		StepStatus?: string | null;
	}

	/** A DTO for an IActivityRunStatus */
	export interface BuildSystemSharedDTOActivityRunStatusFormProperties {

		/**
		 * The activity step currently executing, indicated by numeric order
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrentStep: FormControl<number | null | undefined>,

		/** The status of the ActivityRun */
		Status: FormControl<BuildSystemSharedDTOActivityRunStatusStatus | null | undefined>,

		/**
		 * The percent progress from the currently executing step.  This value shall be null if progress is not available
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StepProgress: FormControl<number | null | undefined>,

		/** The status text from the currently executing step */
		StepStatus: FormControl<string | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOActivityRunStatusFormGroup() {
		return new FormGroup<BuildSystemSharedDTOActivityRunStatusFormProperties>({
			CurrentStep: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<BuildSystemSharedDTOActivityRunStatusStatus | null | undefined>(undefined),
			StepProgress: new FormControl<number | null | undefined>(undefined),
			StepStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildSystemSharedDTOActivityRunStatusStatus { Ready = 'Ready', InProgress = 'InProgress', Succeeded = 'Succeeded', Cancelled = 'Cancelled', Failed = 'Failed' }


	/** A DTO for an IActivityStep */
	export interface BuildSystemSharedDTOActivityStep {

		/**
		 * The id of the activity this activity step belongs to
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityID?: number | null;

		/**
		 * The id of this activity step
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityStepID?: number | null;

		/** The implementation id which is used to look up the step implementation */
		ImplementationID?: string | null;

		/** The mapping of values from a source to be used for the step parameters */
		ParameterMappings?: Array<BuildSystemSharedDTOParameterMapping>;

		/**
		 * The order of this activity step relative to other activity steps
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RunOrder?: number | null;

		/**
		 * The id of the step
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StepID?: number | null;

		/** The name of the step */
		StepName?: string | null;

		/** Indicates the configuration for the ActivityStep to use at runtime.  The build agent must provide this configuration */
		UseConfig?: string | null;
	}

	/** A DTO for an IActivityStep */
	export interface BuildSystemSharedDTOActivityStepFormProperties {

		/**
		 * The id of the activity this activity step belongs to
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityID: FormControl<number | null | undefined>,

		/**
		 * The id of this activity step
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityStepID: FormControl<number | null | undefined>,

		/** The implementation id which is used to look up the step implementation */
		ImplementationID: FormControl<string | null | undefined>,

		/**
		 * The order of this activity step relative to other activity steps
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RunOrder: FormControl<number | null | undefined>,

		/**
		 * The id of the step
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StepID: FormControl<number | null | undefined>,

		/** The name of the step */
		StepName: FormControl<string | null | undefined>,

		/** Indicates the configuration for the ActivityStep to use at runtime.  The build agent must provide this configuration */
		UseConfig: FormControl<string | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOActivityStepFormGroup() {
		return new FormGroup<BuildSystemSharedDTOActivityStepFormProperties>({
			ActivityID: new FormControl<number | null | undefined>(undefined),
			ActivityStepID: new FormControl<number | null | undefined>(undefined),
			ImplementationID: new FormControl<string | null | undefined>(undefined),
			RunOrder: new FormControl<number | null | undefined>(undefined),
			StepID: new FormControl<number | null | undefined>(undefined),
			StepName: new FormControl<string | null | undefined>(undefined),
			UseConfig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A DTO for an IParameterMapping */
	export interface BuildSystemSharedDTOParameterMapping {

		/** The name of the parameter this mapping applies to */
		Name?: string | null;

		/** The source of the value.  The meaning of this value is determined by the source type.  When the source type is “Constant” then source is the value formatted as a string.  When the source type is “Variable” then the source is the name of the variable */
		Source?: string | null;

		/** The source type used for supplying the parameter */
		SourceType?: BuildSystemSharedDTOParameterMappingSourceType | null;
	}

	/** A DTO for an IParameterMapping */
	export interface BuildSystemSharedDTOParameterMappingFormProperties {

		/** The name of the parameter this mapping applies to */
		Name: FormControl<string | null | undefined>,

		/** The source of the value.  The meaning of this value is determined by the source type.  When the source type is “Constant” then source is the value formatted as a string.  When the source type is “Variable” then the source is the name of the variable */
		Source: FormControl<string | null | undefined>,

		/** The source type used for supplying the parameter */
		SourceType: FormControl<BuildSystemSharedDTOParameterMappingSourceType | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOParameterMappingFormGroup() {
		return new FormGroup<BuildSystemSharedDTOParameterMappingFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<BuildSystemSharedDTOParameterMappingSourceType | null | undefined>(undefined),
		});

	}

	export enum BuildSystemSharedDTOParameterMappingSourceType { Constant = 'Constant', Variable = 'Variable' }


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_BuildSystemSharedDTOActivity_ {

		/** Required */
		Entities: Array<BuildSystemSharedDTOActivity>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_BuildSystemSharedDTOActivity_FormProperties {
	}
	export function CreateAPIPagedResponse_BuildSystemSharedDTOActivity_FormGroup() {
		return new FormGroup<APIPagedResponse_BuildSystemSharedDTOActivity_FormProperties>({
		});

	}


	/** A DTO for an IActivity */
	export interface BuildSystemSharedDTOActivity {

		/**
		 * The ID of the activity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityID?: number | null;
		Deleted?: boolean | null;

		/** The name of the activity */
		Name?: string | null;

		/** The parameters for this activity */
		Parameters?: Array<BuildSystemSharedDTOParameter>;

		/** The steps which are performed for this activity */
		Steps?: Array<BuildSystemSharedDTOActivityStep>;
	}

	/** A DTO for an IActivity */
	export interface BuildSystemSharedDTOActivityFormProperties {

		/**
		 * The ID of the activity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityID: FormControl<number | null | undefined>,
		Deleted: FormControl<boolean | null | undefined>,

		/** The name of the activity */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOActivityFormGroup() {
		return new FormGroup<BuildSystemSharedDTOActivityFormProperties>({
			ActivityID: new FormControl<number | null | undefined>(undefined),
			Deleted: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A DTO for an IParameter */
	export interface BuildSystemSharedDTOParameter {

		/** The parameter direction (Input or Output) */
		Direction?: BuildSystemSharedDTOParameterValueDirection | null;

		/** The name of the parameter */
		Name?: string | null;

		/** The data type of the parameter */
		Type?: BuildSystemSharedDTOParameterType | null;
	}

	/** A DTO for an IParameter */
	export interface BuildSystemSharedDTOParameterFormProperties {

		/** The parameter direction (Input or Output) */
		Direction: FormControl<BuildSystemSharedDTOParameterValueDirection | null | undefined>,

		/** The name of the parameter */
		Name: FormControl<string | null | undefined>,

		/** The data type of the parameter */
		Type: FormControl<BuildSystemSharedDTOParameterType | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOParameterFormGroup() {
		return new FormGroup<BuildSystemSharedDTOParameterFormProperties>({
			Direction: new FormControl<BuildSystemSharedDTOParameterValueDirection | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<BuildSystemSharedDTOParameterType | null | undefined>(undefined),
		});

	}

	export enum BuildSystemSharedDTOParameterType { String = 'String', Boolean = 'Boolean', Integer = 'Integer', Float = 'Float', StringDictionary = 'StringDictionary' }


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_BuildSystemSharedDTOAgent_ {

		/** Required */
		Entities: Array<BuildSystemSharedDTOAgent>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_BuildSystemSharedDTOAgent_FormProperties {
	}
	export function CreateAPIPagedResponse_BuildSystemSharedDTOAgent_FormGroup() {
		return new FormGroup<APIPagedResponse_BuildSystemSharedDTOAgent_FormProperties>({
		});

	}


	/** A DTO for an IAgent */
	export interface BuildSystemSharedDTOAgent {

		/**
		 * The id of the Agent
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		AgentID?: number | null;

		/**
		 * The 'Heartbeat Interval' used by the Build Agent.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		KeepAliveInterval: number;

		/**
		 * The machine name of the computer the agent is running on
		 * Required
		 */
		MachineName: string;

		/**
		 * A DTO for an IAgentStatus
		 * Required
		 */
		Status: BuildSystemSharedDTOAgentStatus;

		/** The agent's step configurations */
		StepConfigurations?: Array<BuildSystemSharedDTOStepConfiguration>;

		/**
		 * The UserID of the Agent
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UserID: number;
	}

	/** A DTO for an IAgent */
	export interface BuildSystemSharedDTOAgentFormProperties {

		/**
		 * The id of the Agent
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		AgentID: FormControl<number | null | undefined>,

		/**
		 * The 'Heartbeat Interval' used by the Build Agent.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		KeepAliveInterval: FormControl<number | null | undefined>,

		/**
		 * The machine name of the computer the agent is running on
		 * Required
		 */
		MachineName: FormControl<string | null | undefined>,

		/**
		 * The UserID of the Agent
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UserID: FormControl<number | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOAgentFormGroup() {
		return new FormGroup<BuildSystemSharedDTOAgentFormProperties>({
			AgentID: new FormControl<number | null | undefined>(undefined),
			KeepAliveInterval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MachineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserID: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A DTO for an IAgentStatus */
	export interface BuildSystemSharedDTOAgentStatus {

		/** ReadOnly. The UTC date and time of the last status update */
		LastStatusUpdate?: Date | null;

		/**
		 * Indicates if the agent is online
		 * Required
		 */
		Online: boolean;
	}

	/** A DTO for an IAgentStatus */
	export interface BuildSystemSharedDTOAgentStatusFormProperties {

		/** ReadOnly. The UTC date and time of the last status update */
		LastStatusUpdate: FormControl<Date | null | undefined>,

		/**
		 * Indicates if the agent is online
		 * Required
		 */
		Online: FormControl<boolean | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOAgentStatusFormGroup() {
		return new FormGroup<BuildSystemSharedDTOAgentStatusFormProperties>({
			LastStatusUpdate: new FormControl<Date | null | undefined>(undefined),
			Online: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Step Configuration */
	export interface BuildSystemSharedDTOStepConfiguration {

		/** The configuration names supported.  The configurations collection is empty for steps which do not require configuration. */
		Configurations?: Array<string>;

		/**
		 * The Implementation ID of the step this configuration is for
		 * Required
		 */
		StepImplementationID: string;
	}

	/** Step Configuration */
	export interface BuildSystemSharedDTOStepConfigurationFormProperties {

		/**
		 * The Implementation ID of the step this configuration is for
		 * Required
		 */
		StepImplementationID: FormControl<string | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOStepConfigurationFormGroup() {
		return new FormGroup<BuildSystemSharedDTOStepConfigurationFormProperties>({
			StepImplementationID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_BuildSystemSharedDTOJobRun_ {

		/** Required */
		Entities: Array<BuildSystemSharedDTOJobRun>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_BuildSystemSharedDTOJobRun_FormProperties {
	}
	export function CreateAPIPagedResponse_BuildSystemSharedDTOJobRun_FormGroup() {
		return new FormGroup<APIPagedResponse_BuildSystemSharedDTOJobRun_FormProperties>({
		});

	}


	/** A DTO for an IJobRun */
	export interface BuildSystemSharedDTOJobRun {

		/** The activity runs belonging to this JobRun */
		ActivityRuns?: Array<BuildSystemSharedDTOActivityRun>;

		/** The UTC date and time when the job completed */
		EndDate?: Date | null;

		/**
		 * The ID of the job that defines the run
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobID?: number | null;

		/**
		 * The ID of this JobRun
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobRunID?: number | null;

		/** The parameters used for this run of the job */
		Parameters?: Array<BuildSystemSharedDTOParameterValue>;

		/** The UTC date and time when the job started */
		StartDate?: Date | null;

		/** The status of this JobRun */
		Status?: BuildSystemSharedDTOActivityRunStatusStatus | null;
	}

	/** A DTO for an IJobRun */
	export interface BuildSystemSharedDTOJobRunFormProperties {

		/** The UTC date and time when the job completed */
		EndDate: FormControl<Date | null | undefined>,

		/**
		 * The ID of the job that defines the run
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobID: FormControl<number | null | undefined>,

		/**
		 * The ID of this JobRun
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobRunID: FormControl<number | null | undefined>,

		/** The UTC date and time when the job started */
		StartDate: FormControl<Date | null | undefined>,

		/** The status of this JobRun */
		Status: FormControl<BuildSystemSharedDTOActivityRunStatusStatus | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOJobRunFormGroup() {
		return new FormGroup<BuildSystemSharedDTOJobRunFormProperties>({
			EndDate: new FormControl<Date | null | undefined>(undefined),
			JobID: new FormControl<number | null | undefined>(undefined),
			JobRunID: new FormControl<number | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<BuildSystemSharedDTOActivityRunStatusStatus | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_BuildSystemSharedDTOJob_ {

		/** Required */
		Entities: Array<BuildSystemSharedDTOJob>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_BuildSystemSharedDTOJob_FormProperties {
	}
	export function CreateAPIPagedResponse_BuildSystemSharedDTOJob_FormGroup() {
		return new FormGroup<APIPagedResponse_BuildSystemSharedDTOJob_FormProperties>({
		});

	}


	/** A DTO for an IJob */
	export interface BuildSystemSharedDTOJob {

		/** The activities which are performed for the job */
		Activities?: Array<BuildSystemSharedDTOJobActivity>;

		/** Indicates if the job has been deleted. */
		Deleted?: boolean | null;

		/**
		 * The ID of the job
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobID?: number | null;

		/** The name of the job */
		Name?: string | null;

		/** The parameters for the job */
		Parameters?: Array<BuildSystemSharedDTOParameter>;
	}

	/** A DTO for an IJob */
	export interface BuildSystemSharedDTOJobFormProperties {

		/** Indicates if the job has been deleted. */
		Deleted: FormControl<boolean | null | undefined>,

		/**
		 * The ID of the job
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobID: FormControl<number | null | undefined>,

		/** The name of the job */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOJobFormGroup() {
		return new FormGroup<BuildSystemSharedDTOJobFormProperties>({
			Deleted: new FormControl<boolean | null | undefined>(undefined),
			JobID: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A DTO for an IJobActivity */
	export interface BuildSystemSharedDTOJobActivity {

		/**
		 * The ID of the activity to be run as part of the job
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityID?: number | null;

		/**
		 * The ID of this job activity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobActivityID?: number | null;

		/**
		 * The ID of the job this job activity belongs to
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobID?: number | null;

		/** The mapping of values from a source to be used for the activity parameters */
		ParameterMappings?: Array<BuildSystemSharedDTOParameterMapping>;

		/**
		 * The order of this job activity relative to others in the job
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RunOrder?: number | null;
	}

	/** A DTO for an IJobActivity */
	export interface BuildSystemSharedDTOJobActivityFormProperties {

		/**
		 * The ID of the activity to be run as part of the job
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityID: FormControl<number | null | undefined>,

		/**
		 * The ID of this job activity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobActivityID: FormControl<number | null | undefined>,

		/**
		 * The ID of the job this job activity belongs to
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobID: FormControl<number | null | undefined>,

		/**
		 * The order of this job activity relative to others in the job
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RunOrder: FormControl<number | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOJobActivityFormGroup() {
		return new FormGroup<BuildSystemSharedDTOJobActivityFormProperties>({
			ActivityID: new FormControl<number | null | undefined>(undefined),
			JobActivityID: new FormControl<number | null | undefined>(undefined),
			JobID: new FormControl<number | null | undefined>(undefined),
			RunOrder: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_BuildSystemSharedDTOStep_ {

		/** Required */
		Entities: Array<BuildSystemSharedDTOStep>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_BuildSystemSharedDTOStep_FormProperties {
	}
	export function CreateAPIPagedResponse_BuildSystemSharedDTOStep_FormGroup() {
		return new FormGroup<APIPagedResponse_BuildSystemSharedDTOStep_FormProperties>({
		});

	}


	/** Step */
	export interface BuildSystemSharedDTOStep {

		/**
		 * Indicates if the step requires configuration values to be provided by the build agent
		 * Required
		 */
		ConfigRequired: boolean;

		/** Read Only.  Indicates if the record is deleted. */
		Deleted?: boolean | null;

		/** A description of the step to be presented to a user */
		Description?: string | null;

		/**
		 * The implementation ID used to lookup the step implementation when it is executed
		 * Required
		 */
		ImplementationID: string;

		/**
		 * The name of the step
		 * Required
		 */
		Name: string;

		/** The parameters for this step */
		Parameters?: Array<BuildSystemSharedDTOParameter>;

		/**
		 * The ID of the step
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StepID?: number | null;
	}

	/** Step */
	export interface BuildSystemSharedDTOStepFormProperties {

		/**
		 * Indicates if the step requires configuration values to be provided by the build agent
		 * Required
		 */
		ConfigRequired: FormControl<boolean | null | undefined>,

		/** Read Only.  Indicates if the record is deleted. */
		Deleted: FormControl<boolean | null | undefined>,

		/** A description of the step to be presented to a user */
		Description: FormControl<string | null | undefined>,

		/**
		 * The implementation ID used to lookup the step implementation when it is executed
		 * Required
		 */
		ImplementationID: FormControl<string | null | undefined>,

		/**
		 * The name of the step
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The ID of the step
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StepID: FormControl<number | null | undefined>,
	}
	export function CreateBuildSystemSharedDTOStepFormGroup() {
		return new FormGroup<BuildSystemSharedDTOStepFormProperties>({
			ConfigRequired: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Deleted: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ImplementationID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StepID: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute_ {

		/** Required */
		Entities: Array<ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute_FormProperties {
	}
	export function CreateAPIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute_FormGroup() {
		return new FormGroup<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute_FormProperties>({
		});

	}


	/** An attribute of a definition of the content for submission */
	export interface ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute {

		/**
		 * The ID of the content definition to which this attribute belongs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentDefinitionID?: number | null;

		/**
		 * The ID of this attribute.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID?: number | null;

		/**
		 * The name of this Attribute.
		 * Required
		 */
		Name: string;

		/** The value of this Attribute */
		Value?: string | null;
	}

	/** An attribute of a definition of the content for submission */
	export interface ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeFormProperties {

		/**
		 * The ID of the content definition to which this attribute belongs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentDefinitionID: FormControl<number | null | undefined>,

		/**
		 * The ID of this attribute.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID: FormControl<number | null | undefined>,

		/**
		 * The name of this Attribute.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** The value of this Attribute */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeFormGroup() {
		return new FormGroup<ContentSubmissionSharedBusinessEntitiesContentDefinitionAttributeFormProperties>({
			ContentDefinitionID: new FormControl<number | null | undefined>(undefined),
			ID: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinition_ {

		/** Required */
		Entities: Array<ContentSubmissionSharedBusinessEntitiesContentDefinition>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinition_FormProperties {
	}
	export function CreateAPIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinition_FormGroup() {
		return new FormGroup<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinition_FormProperties>({
		});

	}


	/** The definition of the content for submission */
	export interface ContentSubmissionSharedBusinessEntitiesContentDefinition {

		/** Attributes of this ContentDefinition */
		Attributes?: Array<ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute>;

		/**
		 * The ID of this content definition.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentDefinitionID?: number | null;

		/**
		 * The description used on the package type in the AGCO Update System
		 * Required
		 */
		Description: string;

		/** The name of this content. Name must be valid for Attribute on PackageType. */
		Name?: string | null;

		/** Read Only. The ID of the package type used for this content. */
		PackageTypeID?: string | null;

		/**
		 * The type of content.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TypeID?: number | null;
	}

	/** The definition of the content for submission */
	export interface ContentSubmissionSharedBusinessEntitiesContentDefinitionFormProperties {

		/**
		 * The ID of this content definition.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentDefinitionID: FormControl<number | null | undefined>,

		/**
		 * The description used on the package type in the AGCO Update System
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/** The name of this content. Name must be valid for Attribute on PackageType. */
		Name: FormControl<string | null | undefined>,

		/** Read Only. The ID of the package type used for this content. */
		PackageTypeID: FormControl<string | null | undefined>,

		/**
		 * The type of content.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TypeID: FormControl<number | null | undefined>,
	}
	export function CreateContentSubmissionSharedBusinessEntitiesContentDefinitionFormGroup() {
		return new FormGroup<ContentSubmissionSharedBusinessEntitiesContentDefinitionFormProperties>({
			ContentDefinitionID: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			PackageTypeID: new FormControl<string | null | undefined>(undefined),
			TypeID: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentReleaseVersion_ {

		/** Required */
		Entities: Array<ContentSubmissionSharedBusinessEntitiesContentReleaseVersion>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentReleaseVersion_FormProperties {
	}
	export function CreateAPIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentReleaseVersion_FormGroup() {
		return new FormGroup<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentReleaseVersion_FormProperties>({
		});

	}


	/** ContentReleaseVersion class */
	export interface ContentSubmissionSharedBusinessEntitiesContentReleaseVersion {

		/**
		 * ContentDefinitionID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentDefinitionID?: number | null;

		/**
		 * ContentReleaseID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentReleaseID?: number | null;

		/** deleted flag */
		Deleted?: boolean | null;

		/**
		 * PublisherUser ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		PublisherUserID?: number | null;

		/**
		 * rele4ase Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ReleaseID?: number | null;

		/** The URL at which test reports for this content can be found */
		TestReportUrl?: string | null;

		/** Updated Date */
		UpdatedDate?: Date | null;

		/**
		 * version
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Version?: number | null;
	}

	/** ContentReleaseVersion class */
	export interface ContentSubmissionSharedBusinessEntitiesContentReleaseVersionFormProperties {

		/**
		 * ContentDefinitionID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentDefinitionID: FormControl<number | null | undefined>,

		/**
		 * ContentReleaseID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentReleaseID: FormControl<number | null | undefined>,

		/** deleted flag */
		Deleted: FormControl<boolean | null | undefined>,

		/**
		 * PublisherUser ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		PublisherUserID: FormControl<number | null | undefined>,

		/**
		 * rele4ase Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ReleaseID: FormControl<number | null | undefined>,

		/** The URL at which test reports for this content can be found */
		TestReportUrl: FormControl<string | null | undefined>,

		/** Updated Date */
		UpdatedDate: FormControl<Date | null | undefined>,

		/**
		 * version
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Version: FormControl<number | null | undefined>,
	}
	export function CreateContentSubmissionSharedBusinessEntitiesContentReleaseVersionFormGroup() {
		return new FormGroup<ContentSubmissionSharedBusinessEntitiesContentReleaseVersionFormProperties>({
			ContentDefinitionID: new FormControl<number | null | undefined>(undefined),
			ContentReleaseID: new FormControl<number | null | undefined>(undefined),
			Deleted: new FormControl<boolean | null | undefined>(undefined),
			PublisherUserID: new FormControl<number | null | undefined>(undefined),
			ReleaseID: new FormControl<number | null | undefined>(undefined),
			TestReportUrl: new FormControl<string | null | undefined>(undefined),
			UpdatedDate: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute_ {

		/** Required */
		Entities: Array<ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute_FormProperties {
	}
	export function CreateAPIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute_FormGroup() {
		return new FormGroup<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute_FormProperties>({
		});

	}


	/** The definition of the content for submission */
	export interface ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute {

		/**
		 * The ID of the content submission to which this attribute belongs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentSubmissionID?: number | null;

		/**
		 * The ID of this attribute.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID?: number | null;

		/**
		 * The name of this Attribute.
		 * Required
		 */
		Name: string;

		/** The value of this Attribute */
		Value?: string | null;
	}

	/** The definition of the content for submission */
	export interface ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeFormProperties {

		/**
		 * The ID of the content submission to which this attribute belongs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentSubmissionID: FormControl<number | null | undefined>,

		/**
		 * The ID of this attribute.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID: FormControl<number | null | undefined>,

		/**
		 * The name of this Attribute.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** The value of this Attribute */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeFormGroup() {
		return new FormGroup<ContentSubmissionSharedBusinessEntitiesContentSubmissionAttributeFormProperties>({
			ContentSubmissionID: new FormControl<number | null | undefined>(undefined),
			ID: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmission_ {

		/** Required */
		Entities: Array<ContentSubmissionSharedBusinessEntitiesContentSubmission>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmission_FormProperties {
	}
	export function CreateAPIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmission_FormGroup() {
		return new FormGroup<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmission_FormProperties>({
		});

	}


	/** A content submission */
	export interface ContentSubmissionSharedBusinessEntitiesContentSubmission {

		/** Attributes of this ContentSubmission */
		Attributes?: Array<ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute>;

		/**
		 * ReadOnly. The ID of the Azure DevOps Build which will build the content package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		BuildID?: number | null;

		/**
		 * The ID of the Content Definition.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentDefinitionID?: number | null;

		/**
		 * The ID of this Content Submission.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentSubmissionID?: number | null;

		/** The definition of the content for submission */
		Definition?: ContentSubmissionSharedBusinessEntitiesContentDefinition;

		/**
		 * ReadOnly. The ID of the JobRun which will build the content package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobRunID?: number | null;

		/** The ID of package generated by this content submission. */
		PackageID?: string | null;

		/** Release Notes for this ContentSubmission */
		ReleaseNotes?: string | null;

		/** The SVN repository used as the source of this content submission */
		Repository?: string | null;

		/**
		 * The SVN revision used as the source of this content submission.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision?: number | null;

		/** Read Only. The UTC date and time the content submission was made. */
		SubmissionDate?: Date | null;

		/**
		 * Read Only. The ID of the user who submitted the content
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UserID?: number | null;

		/**
		 * Optional.  The version number assigned to this Content Submission and the resulting Package.
		 * If not provided, version shall be 1 if it is the first content submission for the
		 * ContentDefinitionID otherwise it shall be the highest content submission version for the
		 * specified ContentDefinitionID incremented by 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Version?: number | null;
	}

	/** A content submission */
	export interface ContentSubmissionSharedBusinessEntitiesContentSubmissionFormProperties {

		/**
		 * ReadOnly. The ID of the Azure DevOps Build which will build the content package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		BuildID: FormControl<number | null | undefined>,

		/**
		 * The ID of the Content Definition.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentDefinitionID: FormControl<number | null | undefined>,

		/**
		 * The ID of this Content Submission.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentSubmissionID: FormControl<number | null | undefined>,

		/**
		 * ReadOnly. The ID of the JobRun which will build the content package.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobRunID: FormControl<number | null | undefined>,

		/** The ID of package generated by this content submission. */
		PackageID: FormControl<string | null | undefined>,

		/** Release Notes for this ContentSubmission */
		ReleaseNotes: FormControl<string | null | undefined>,

		/** The SVN repository used as the source of this content submission */
		Repository: FormControl<string | null | undefined>,

		/**
		 * The SVN revision used as the source of this content submission.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Revision: FormControl<number | null | undefined>,

		/** Read Only. The UTC date and time the content submission was made. */
		SubmissionDate: FormControl<Date | null | undefined>,

		/**
		 * Read Only. The ID of the user who submitted the content
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UserID: FormControl<number | null | undefined>,

		/**
		 * Optional.  The version number assigned to this Content Submission and the resulting Package.
		 * If not provided, version shall be 1 if it is the first content submission for the
		 * ContentDefinitionID otherwise it shall be the highest content submission version for the
		 * specified ContentDefinitionID incremented by 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Version: FormControl<number | null | undefined>,
	}
	export function CreateContentSubmissionSharedBusinessEntitiesContentSubmissionFormGroup() {
		return new FormGroup<ContentSubmissionSharedBusinessEntitiesContentSubmissionFormProperties>({
			BuildID: new FormControl<number | null | undefined>(undefined),
			ContentDefinitionID: new FormControl<number | null | undefined>(undefined),
			ContentSubmissionID: new FormControl<number | null | undefined>(undefined),
			JobRunID: new FormControl<number | null | undefined>(undefined),
			PackageID: new FormControl<string | null | undefined>(undefined),
			ReleaseNotes: new FormControl<string | null | undefined>(undefined),
			Repository: new FormControl<string | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
			SubmissionDate: new FormControl<Date | null | undefined>(undefined),
			UserID: new FormControl<number | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesRelease_ {

		/** Required */
		Entities: Array<ContentSubmissionSharedBusinessEntitiesRelease>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesRelease_FormProperties {
	}
	export function CreateAPIPagedResponse_ContentSubmissionSharedBusinessEntitiesRelease_FormGroup() {
		return new FormGroup<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesRelease_FormProperties>({
		});

	}


	/** Release class */
	export interface ContentSubmissionSharedBusinessEntitiesRelease {

		/** Build Date */
		BuildDate?: Date | null;

		/** IDs of AUC Bundles associated with this Release. */
		BundleIDs?: Array<string>;

		/** Release Date */
		ReleaseDate?: Date | null;

		/**
		 * Release ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ReleaseID?: number | null;

		/** Release Number */
		ReleaseNumber?: string | null;

		/** Visible */
		Visible?: boolean | null;
	}

	/** Release class */
	export interface ContentSubmissionSharedBusinessEntitiesReleaseFormProperties {

		/** Build Date */
		BuildDate: FormControl<Date | null | undefined>,

		/** Release Date */
		ReleaseDate: FormControl<Date | null | undefined>,

		/**
		 * Release ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ReleaseID: FormControl<number | null | undefined>,

		/** Release Number */
		ReleaseNumber: FormControl<string | null | undefined>,

		/** Visible */
		Visible: FormControl<boolean | null | undefined>,
	}
	export function CreateContentSubmissionSharedBusinessEntitiesReleaseFormGroup() {
		return new FormGroup<ContentSubmissionSharedBusinessEntitiesReleaseFormProperties>({
			BuildDate: new FormControl<Date | null | undefined>(undefined),
			ReleaseDate: new FormControl<Date | null | undefined>(undefined),
			ReleaseID: new FormControl<number | null | undefined>(undefined),
			ReleaseNumber: new FormControl<string | null | undefined>(undefined),
			Visible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesUserContentDefinition_ {

		/** Required */
		Entities: Array<ContentSubmissionSharedBusinessEntitiesUserContentDefinition>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_ContentSubmissionSharedBusinessEntitiesUserContentDefinition_FormProperties {
	}
	export function CreateAPIPagedResponse_ContentSubmissionSharedBusinessEntitiesUserContentDefinition_FormGroup() {
		return new FormGroup<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesUserContentDefinition_FormProperties>({
		});

	}


	/** Relationship indicating that a User can manage submissions for the Content */
	export interface ContentSubmissionSharedBusinessEntitiesUserContentDefinition {

		/**
		 * The ID of the ContentDefinition.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentDefinitionID?: number | null;

		/**
		 * Read Only. The ID of the User to ContentDefinition relationship.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UserContentDefinitionID?: number | null;

		/**
		 * The ID of the user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UserID?: number | null;
	}

	/** Relationship indicating that a User can manage submissions for the Content */
	export interface ContentSubmissionSharedBusinessEntitiesUserContentDefinitionFormProperties {

		/**
		 * The ID of the ContentDefinition.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentDefinitionID: FormControl<number | null | undefined>,

		/**
		 * Read Only. The ID of the User to ContentDefinition relationship.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UserContentDefinitionID: FormControl<number | null | undefined>,

		/**
		 * The ID of the user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UserID: FormControl<number | null | undefined>,
	}
	export function CreateContentSubmissionSharedBusinessEntitiesUserContentDefinitionFormGroup() {
		return new FormGroup<ContentSubmissionSharedBusinessEntitiesUserContentDefinitionFormProperties>({
			ContentDefinitionID: new FormControl<number | null | undefined>(undefined),
			UserContentDefinitionID: new FormControl<number | null | undefined>(undefined),
			UserID: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_DealerDBModelsDealer_ {

		/** Required */
		Entities: Array<DealerDBModelsDealer>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_DealerDBModelsDealer_FormProperties {
	}
	export function CreateAPIPagedResponse_DealerDBModelsDealer_FormGroup() {
		return new FormGroup<APIPagedResponse_DealerDBModelsDealer_FormProperties>({
		});

	}

	export interface DealerDBModelsDealer {
		BillingAddress?: string | null;
		BillingAddress2?: string | null;
		BillingAddress3?: string | null;
		BillingAddress4?: string | null;
		BillingCity?: string | null;
		BillingCountry?: string | null;
		BillingCountryCode?: string | null;
		BillingState?: string | null;
		BillingZip?: string | null;
		Brands?: Array<string>;
		DealerCode?: string | null;
		DealerName?: string | null;
		DealerStatus?: string | null;
		DealerStatusUpdateDate?: string | null;
		Filler?: string | null;
		IsValid?: boolean | null;
		LanguagePreference?: string | null;
		Region1?: string | null;
		Region2?: string | null;
		RegionMapping?: string | null;
		RoleBrand?: string | null;
		ShippingAddress2?: string | null;
		ShippingAddress3?: string | null;
		ShippingAddress4?: string | null;
		ShippingCity?: string | null;
		ShippingCountry?: string | null;
		ShippingState?: string | null;
		ShippingStreet?: string | null;
		ShippingZip?: string | null;
		Telephone?: string | null;
		VATCode?: string | null;
	}
	export interface DealerDBModelsDealerFormProperties {
		BillingAddress: FormControl<string | null | undefined>,
		BillingAddress2: FormControl<string | null | undefined>,
		BillingAddress3: FormControl<string | null | undefined>,
		BillingAddress4: FormControl<string | null | undefined>,
		BillingCity: FormControl<string | null | undefined>,
		BillingCountry: FormControl<string | null | undefined>,
		BillingCountryCode: FormControl<string | null | undefined>,
		BillingState: FormControl<string | null | undefined>,
		BillingZip: FormControl<string | null | undefined>,
		DealerCode: FormControl<string | null | undefined>,
		DealerName: FormControl<string | null | undefined>,
		DealerStatus: FormControl<string | null | undefined>,
		DealerStatusUpdateDate: FormControl<string | null | undefined>,
		Filler: FormControl<string | null | undefined>,
		IsValid: FormControl<boolean | null | undefined>,
		LanguagePreference: FormControl<string | null | undefined>,
		Region1: FormControl<string | null | undefined>,
		Region2: FormControl<string | null | undefined>,
		RegionMapping: FormControl<string | null | undefined>,
		RoleBrand: FormControl<string | null | undefined>,
		ShippingAddress2: FormControl<string | null | undefined>,
		ShippingAddress3: FormControl<string | null | undefined>,
		ShippingAddress4: FormControl<string | null | undefined>,
		ShippingCity: FormControl<string | null | undefined>,
		ShippingCountry: FormControl<string | null | undefined>,
		ShippingState: FormControl<string | null | undefined>,
		ShippingStreet: FormControl<string | null | undefined>,
		ShippingZip: FormControl<string | null | undefined>,
		Telephone: FormControl<string | null | undefined>,
		VATCode: FormControl<string | null | undefined>,
	}
	export function CreateDealerDBModelsDealerFormGroup() {
		return new FormGroup<DealerDBModelsDealerFormProperties>({
			BillingAddress: new FormControl<string | null | undefined>(undefined),
			BillingAddress2: new FormControl<string | null | undefined>(undefined),
			BillingAddress3: new FormControl<string | null | undefined>(undefined),
			BillingAddress4: new FormControl<string | null | undefined>(undefined),
			BillingCity: new FormControl<string | null | undefined>(undefined),
			BillingCountry: new FormControl<string | null | undefined>(undefined),
			BillingCountryCode: new FormControl<string | null | undefined>(undefined),
			BillingState: new FormControl<string | null | undefined>(undefined),
			BillingZip: new FormControl<string | null | undefined>(undefined),
			DealerCode: new FormControl<string | null | undefined>(undefined),
			DealerName: new FormControl<string | null | undefined>(undefined),
			DealerStatus: new FormControl<string | null | undefined>(undefined),
			DealerStatusUpdateDate: new FormControl<string | null | undefined>(undefined),
			Filler: new FormControl<string | null | undefined>(undefined),
			IsValid: new FormControl<boolean | null | undefined>(undefined),
			LanguagePreference: new FormControl<string | null | undefined>(undefined),
			Region1: new FormControl<string | null | undefined>(undefined),
			Region2: new FormControl<string | null | undefined>(undefined),
			RegionMapping: new FormControl<string | null | undefined>(undefined),
			RoleBrand: new FormControl<string | null | undefined>(undefined),
			ShippingAddress2: new FormControl<string | null | undefined>(undefined),
			ShippingAddress3: new FormControl<string | null | undefined>(undefined),
			ShippingAddress4: new FormControl<string | null | undefined>(undefined),
			ShippingCity: new FormControl<string | null | undefined>(undefined),
			ShippingCountry: new FormControl<string | null | undefined>(undefined),
			ShippingState: new FormControl<string | null | undefined>(undefined),
			ShippingStreet: new FormControl<string | null | undefined>(undefined),
			ShippingZip: new FormControl<string | null | undefined>(undefined),
			Telephone: new FormControl<string | null | undefined>(undefined),
			VATCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_DealerDBModelsDealersPerCountry_ {

		/** Required */
		Entities: Array<DealerDBModelsDealersPerCountry>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_DealerDBModelsDealersPerCountry_FormProperties {
	}
	export function CreateAPIPagedResponse_DealerDBModelsDealersPerCountry_FormGroup() {
		return new FormGroup<APIPagedResponse_DealerDBModelsDealersPerCountry_FormProperties>({
		});

	}

	export interface DealerDBModelsDealersPerCountry {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count?: number | null;
		Country?: string | null;
	}
	export interface DealerDBModelsDealersPerCountryFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count: FormControl<number | null | undefined>,
		Country: FormControl<string | null | undefined>,
	}
	export function CreateDealerDBModelsDealersPerCountryFormGroup() {
		return new FormGroup<DealerDBModelsDealersPerCountryFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_DealerDBModelsLicense_ {

		/** Required */
		Entities: Array<DealerDBModelsLicense>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_DealerDBModelsLicense_FormProperties {
	}
	export function CreateAPIPagedResponse_DealerDBModelsLicense_FormGroup() {
		return new FormGroup<APIPagedResponse_DealerDBModelsLicense_FormProperties>({
		});

	}

	export interface DealerDBModelsLicense {

		/** True if license is active. */
		Active?: boolean | null;

		/** The date the license was created. */
		CreatedDate?: Date | null;

		/** The date the license was deactivated. */
		DeactivatedDate?: Date | null;

		/** The type of license (e.g. EDT, EDT Lite) */
		LicenseActivationType?: DealerDBModelsLicenseLicenseActivationType | null;

		/** The LicenseID */
		LicenseID?: string | null;

		/** The version of the license. */
		LicenseVersion?: string | null;

		/** The date the license was refreshed. */
		RefreshDate?: Date | null;

		/** Information about the system which is licensed. */
		SystemInfo?: string | null;

		/** The updated version of the license.  A value in this field indicates that the update has not been confirmed. */
		UpdatedLicenseVersion?: string | null;

		/** The voucher code that generated the license. */
		VoucherCode?: string | null;
	}
	export interface DealerDBModelsLicenseFormProperties {

		/** True if license is active. */
		Active: FormControl<boolean | null | undefined>,

		/** The date the license was created. */
		CreatedDate: FormControl<Date | null | undefined>,

		/** The date the license was deactivated. */
		DeactivatedDate: FormControl<Date | null | undefined>,

		/** The type of license (e.g. EDT, EDT Lite) */
		LicenseActivationType: FormControl<DealerDBModelsLicenseLicenseActivationType | null | undefined>,

		/** The LicenseID */
		LicenseID: FormControl<string | null | undefined>,

		/** The version of the license. */
		LicenseVersion: FormControl<string | null | undefined>,

		/** The date the license was refreshed. */
		RefreshDate: FormControl<Date | null | undefined>,

		/** Information about the system which is licensed. */
		SystemInfo: FormControl<string | null | undefined>,

		/** The updated version of the license.  A value in this field indicates that the update has not been confirmed. */
		UpdatedLicenseVersion: FormControl<string | null | undefined>,

		/** The voucher code that generated the license. */
		VoucherCode: FormControl<string | null | undefined>,
	}
	export function CreateDealerDBModelsLicenseFormGroup() {
		return new FormGroup<DealerDBModelsLicenseFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeactivatedDate: new FormControl<Date | null | undefined>(undefined),
			LicenseActivationType: new FormControl<DealerDBModelsLicenseLicenseActivationType | null | undefined>(undefined),
			LicenseID: new FormControl<string | null | undefined>(undefined),
			LicenseVersion: new FormControl<string | null | undefined>(undefined),
			RefreshDate: new FormControl<Date | null | undefined>(undefined),
			SystemInfo: new FormControl<string | null | undefined>(undefined),
			UpdatedLicenseVersion: new FormControl<string | null | undefined>(undefined),
			VoucherCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DealerDBModelsLicenseLicenseActivationType { EDT = 'EDT', EDTLite = 'EDTLite' }


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_DealerDBModelsVoucherHistory_ {

		/** Required */
		Entities: Array<DealerDBModelsVoucherHistory>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_DealerDBModelsVoucherHistory_FormProperties {
	}
	export function CreateAPIPagedResponse_DealerDBModelsVoucherHistory_FormGroup() {
		return new FormGroup<APIPagedResponse_DealerDBModelsVoucherHistory_FormProperties>({
		});

	}

	export interface DealerDBModelsVoucherHistory {
		ChangedDate?: Date | null;

		/** Read-Only. The date the voucher was created. */
		CreatedDate?: Date | null;

		/** The dealer code the voucher is assigned to.  Required for commercial vouchers. */
		DealerCode?: string | null;

		/** Read-Only. True if voucher has been deleted. */
		Deleted?: boolean | null;

		/** The email address. Required for Internal Vouchers */
		Email?: string | null;

		/** The expiration date of the voucher. Required for Temporary Vouchers. */
		ExpirationDate?: Date | null;

		/**
		 * The id of the voucher history item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID?: number | null;

		/** Required for Internal Vouchers */
		LicenseTo?: string | null;

		/** Read-Only. The user that made the last modification to the voucher. */
		ModifiedBy?: string | null;

		/** The order number of a commercial license. Required for Commercial Vouchers. Not supported for other Vouchers. */
		OrderNumber?: string | null;

		/** True if voucher has aleady been used.  False if the voucher has not been used. */
		Punched?: boolean | null;

		/** Read-Only. The date the voucher was punched. */
		PunchedDate?: Date | null;

		/** Required for Internal Vouchers */
		Purpose?: string | null;

		/** The type of voucher. */
		Type?: DealerDBModelsVoucherHistoryType | null;

		/** The voucher code. */
		VoucherCode?: string | null;
	}
	export interface DealerDBModelsVoucherHistoryFormProperties {
		ChangedDate: FormControl<Date | null | undefined>,

		/** Read-Only. The date the voucher was created. */
		CreatedDate: FormControl<Date | null | undefined>,

		/** The dealer code the voucher is assigned to.  Required for commercial vouchers. */
		DealerCode: FormControl<string | null | undefined>,

		/** Read-Only. True if voucher has been deleted. */
		Deleted: FormControl<boolean | null | undefined>,

		/** The email address. Required for Internal Vouchers */
		Email: FormControl<string | null | undefined>,

		/** The expiration date of the voucher. Required for Temporary Vouchers. */
		ExpirationDate: FormControl<Date | null | undefined>,

		/**
		 * The id of the voucher history item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID: FormControl<number | null | undefined>,

		/** Required for Internal Vouchers */
		LicenseTo: FormControl<string | null | undefined>,

		/** Read-Only. The user that made the last modification to the voucher. */
		ModifiedBy: FormControl<string | null | undefined>,

		/** The order number of a commercial license. Required for Commercial Vouchers. Not supported for other Vouchers. */
		OrderNumber: FormControl<string | null | undefined>,

		/** True if voucher has aleady been used.  False if the voucher has not been used. */
		Punched: FormControl<boolean | null | undefined>,

		/** Read-Only. The date the voucher was punched. */
		PunchedDate: FormControl<Date | null | undefined>,

		/** Required for Internal Vouchers */
		Purpose: FormControl<string | null | undefined>,

		/** The type of voucher. */
		Type: FormControl<DealerDBModelsVoucherHistoryType | null | undefined>,

		/** The voucher code. */
		VoucherCode: FormControl<string | null | undefined>,
	}
	export function CreateDealerDBModelsVoucherHistoryFormGroup() {
		return new FormGroup<DealerDBModelsVoucherHistoryFormProperties>({
			ChangedDate: new FormControl<Date | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DealerCode: new FormControl<string | null | undefined>(undefined),
			Deleted: new FormControl<boolean | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
			ID: new FormControl<number | null | undefined>(undefined),
			LicenseTo: new FormControl<string | null | undefined>(undefined),
			ModifiedBy: new FormControl<string | null | undefined>(undefined),
			OrderNumber: new FormControl<string | null | undefined>(undefined),
			Punched: new FormControl<boolean | null | undefined>(undefined),
			PunchedDate: new FormControl<Date | null | undefined>(undefined),
			Purpose: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DealerDBModelsVoucherHistoryType | null | undefined>(undefined),
			VoucherCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DealerDBModelsVoucherHistoryType { Commercial = 'Commercial', Internal = 'Internal', Temporary = 'Temporary', RightToRepair = 'RightToRepair' }


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_DealerDBModelsVoucher_ {

		/** Required */
		Entities: Array<DealerDBModelsVoucher>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_DealerDBModelsVoucher_FormProperties {
	}
	export function CreateAPIPagedResponse_DealerDBModelsVoucher_FormGroup() {
		return new FormGroup<APIPagedResponse_DealerDBModelsVoucher_FormProperties>({
		});

	}


	/** A voucher for EDT activation */
	export interface DealerDBModelsVoucher {

		/** Read-Only. The date the voucher was created. */
		CreatedDate?: Date | null;

		/** The dealer code the voucher is assigned to.  Required for commercial and right to repair vouchers. */
		DealerCode?: string | null;

		/** Read-Only. True if voucher has been deleted. */
		Deleted?: boolean | null;

		/** Required for internal vouchers. */
		Email?: string | null;

		/** The expiration date of the voucher. Required for Temporary and Right to Repair Vouchers. */
		ExpirationDate?: Date | null;

		/** Required for Internal Vouchers */
		LicenseTo?: string | null;

		/** Read-Only. The user that made the last modification to the voucher. */
		ModifiedBy?: string | null;

		/** The order number of a license. Required for Commercial and Right To Repair Vouchers. Not supported for other Vouchers. */
		OrderNumber?: string | null;

		/** True if voucher has aleady been used.  False if the voucher has not been used. */
		Punched?: boolean | null;

		/** Read-Only. The date the voucher was punched. */
		PunchedDate?: Date | null;

		/** Required for Internal Vouchers. Not supported for other Vouchers. */
		Purpose?: string | null;

		/** The type of voucher. Commercial is the default if not specified. */
		Type?: DealerDBModelsVoucherHistoryType | null;

		/** The voucher code. */
		VoucherCode?: string | null;
	}

	/** A voucher for EDT activation */
	export interface DealerDBModelsVoucherFormProperties {

		/** Read-Only. The date the voucher was created. */
		CreatedDate: FormControl<Date | null | undefined>,

		/** The dealer code the voucher is assigned to.  Required for commercial and right to repair vouchers. */
		DealerCode: FormControl<string | null | undefined>,

		/** Read-Only. True if voucher has been deleted. */
		Deleted: FormControl<boolean | null | undefined>,

		/** Required for internal vouchers. */
		Email: FormControl<string | null | undefined>,

		/** The expiration date of the voucher. Required for Temporary and Right to Repair Vouchers. */
		ExpirationDate: FormControl<Date | null | undefined>,

		/** Required for Internal Vouchers */
		LicenseTo: FormControl<string | null | undefined>,

		/** Read-Only. The user that made the last modification to the voucher. */
		ModifiedBy: FormControl<string | null | undefined>,

		/** The order number of a license. Required for Commercial and Right To Repair Vouchers. Not supported for other Vouchers. */
		OrderNumber: FormControl<string | null | undefined>,

		/** True if voucher has aleady been used.  False if the voucher has not been used. */
		Punched: FormControl<boolean | null | undefined>,

		/** Read-Only. The date the voucher was punched. */
		PunchedDate: FormControl<Date | null | undefined>,

		/** Required for Internal Vouchers. Not supported for other Vouchers. */
		Purpose: FormControl<string | null | undefined>,

		/** The type of voucher. Commercial is the default if not specified. */
		Type: FormControl<DealerDBModelsVoucherHistoryType | null | undefined>,

		/** The voucher code. */
		VoucherCode: FormControl<string | null | undefined>,
	}
	export function CreateDealerDBModelsVoucherFormGroup() {
		return new FormGroup<DealerDBModelsVoucherFormProperties>({
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DealerCode: new FormControl<string | null | undefined>(undefined),
			Deleted: new FormControl<boolean | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
			LicenseTo: new FormControl<string | null | undefined>(undefined),
			ModifiedBy: new FormControl<string | null | undefined>(undefined),
			OrderNumber: new FormControl<string | null | undefined>(undefined),
			Punched: new FormControl<boolean | null | undefined>(undefined),
			PunchedDate: new FormControl<Date | null | undefined>(undefined),
			Purpose: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DealerDBModelsVoucherHistoryType | null | undefined>(undefined),
			VoucherCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsAvailableUpdateGroupSubscription_ {

		/** Required */
		Entities: Array<UpdateSystemModelsAvailableUpdateGroupSubscription>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsAvailableUpdateGroupSubscription_FormProperties {
	}
	export function CreateAPIPagedResponse_UpdateSystemModelsAvailableUpdateGroupSubscription_FormGroup() {
		return new FormGroup<APIPagedResponse_UpdateSystemModelsAvailableUpdateGroupSubscription_FormProperties>({
		});

	}

	export interface UpdateSystemModelsAvailableUpdateGroupSubscription {

		/** The available subscriptions for this update group. */
		AvailableSubscriptions?: Array<UpdateSystemModelsAvailableSubscription>;
		UpdateGroup?: UpdateSystemModelsUpdateGroup;
	}
	export interface UpdateSystemModelsAvailableUpdateGroupSubscriptionFormProperties {
	}
	export function CreateUpdateSystemModelsAvailableUpdateGroupSubscriptionFormGroup() {
		return new FormGroup<UpdateSystemModelsAvailableUpdateGroupSubscriptionFormProperties>({
		});

	}

	export interface UpdateSystemModelsAvailableSubscription {
		PackageType?: UpdateSystemModelsPackageType;

		/** The type of subscription supported. */
		SubscriptionType?: UpdateSystemModelsAvailableSubscriptionSubscriptionType | null;
	}
	export interface UpdateSystemModelsAvailableSubscriptionFormProperties {

		/** The type of subscription supported. */
		SubscriptionType: FormControl<UpdateSystemModelsAvailableSubscriptionSubscriptionType | null | undefined>,
	}
	export function CreateUpdateSystemModelsAvailableSubscriptionFormGroup() {
		return new FormGroup<UpdateSystemModelsAvailableSubscriptionFormProperties>({
			SubscriptionType: new FormControl<UpdateSystemModelsAvailableSubscriptionSubscriptionType | null | undefined>(undefined),
		});

	}

	export interface UpdateSystemModelsPackageType {

		/** The inventory attribute (from the InventoryPackage) used to determine what version of this package type is installed. */
		Attribute?: string | null;

		/** The inventory category (from the InventoryPackage) used to determine what version of this package type is installed. */
		Category?: string | null;

		/**
		 * The description of the package type
		 * Required
		 */
		Description: string;

		/** Optional.  The icon to use for the PackageType, in base 64 */
		Icon?: string | null;

		/**
		 * The number of minutes to wait before requesting another inventory.  The default value is 1440 (24 hours).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InventoryFrequency?: number | null;

		/** The inventory package used to determine what version of this package type is installed. */
		InventoryPackage?: string | null;

		/** Optional. The StringID used to localize the description of the PackageType */
		LocalizedDescription?: string | null;

		/** Optional. The StringID used to localize the name of the PackageType */
		LocalizedName?: string | null;

		/**
		 * The maximum number of "chained" delta packages to use when updating the client
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxDeltaPackages?: number | null;

		/** Read Only. The package type id. */
		PackageTypeID?: string | null;
	}
	export interface UpdateSystemModelsPackageTypeFormProperties {

		/** The inventory attribute (from the InventoryPackage) used to determine what version of this package type is installed. */
		Attribute: FormControl<string | null | undefined>,

		/** The inventory category (from the InventoryPackage) used to determine what version of this package type is installed. */
		Category: FormControl<string | null | undefined>,

		/**
		 * The description of the package type
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/** Optional.  The icon to use for the PackageType, in base 64 */
		Icon: FormControl<string | null | undefined>,

		/**
		 * The number of minutes to wait before requesting another inventory.  The default value is 1440 (24 hours).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InventoryFrequency: FormControl<number | null | undefined>,

		/** The inventory package used to determine what version of this package type is installed. */
		InventoryPackage: FormControl<string | null | undefined>,

		/** Optional. The StringID used to localize the description of the PackageType */
		LocalizedDescription: FormControl<string | null | undefined>,

		/** Optional. The StringID used to localize the name of the PackageType */
		LocalizedName: FormControl<string | null | undefined>,

		/**
		 * The maximum number of "chained" delta packages to use when updating the client
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxDeltaPackages: FormControl<number | null | undefined>,

		/** Read Only. The package type id. */
		PackageTypeID: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsPackageTypeFormGroup() {
		return new FormGroup<UpdateSystemModelsPackageTypeFormProperties>({
			Attribute: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Icon: new FormControl<string | null | undefined>(undefined),
			InventoryFrequency: new FormControl<number | null | undefined>(undefined),
			InventoryPackage: new FormControl<string | null | undefined>(undefined),
			LocalizedDescription: new FormControl<string | null | undefined>(undefined),
			LocalizedName: new FormControl<string | null | undefined>(undefined),
			MaxDeltaPackages: new FormControl<number | null | undefined>(undefined),
			PackageTypeID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateSystemModelsAvailableSubscriptionSubscriptionType { Required = 'Required', IncludeByDefault = 'IncludeByDefault', ExcludeByDefault = 'ExcludeByDefault' }

	export interface UpdateSystemModelsUpdateGroup {

		/**
		 * The description of the update group
		 * Required
		 */
		Description: string;
		ID?: string | null;

		/**
		 * The time in minutes between inventory checks. Default value is 1440 minutes (one day).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InventoryFrequency?: number | null;

		/** The Package ID of the package used for inventory */
		InventoryPackage?: string | null;

		/** Optional. The StringID used to localize the description of the update group */
		LocalizedDescription?: string | null;

		/** Optional. The StringID used to localize the name of the update group */
		LocalizedName?: string | null;

		/**
		 * The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		Priority: number;

		/**
		 * A field to return in the status report for this update group.
		 * Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})
		 */
		ReportField?: string | null;

		/**
		 * The update type name
		 * Required
		 */
		UpdateType: string;

		/**
		 * A field used for validation in the status report for this update group.
		 * Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})
		 */
		ValidatingField?: string | null;

		/** The value to validate the ValidationField against. */
		ValueToValidate?: string | null;

		/** The version of the UpdateGroup, this value is incremented with each modification to a related Bundle or PackageType */
		Version?: string | null;
	}
	export interface UpdateSystemModelsUpdateGroupFormProperties {

		/**
		 * The description of the update group
		 * Required
		 */
		Description: FormControl<string | null | undefined>,
		ID: FormControl<string | null | undefined>,

		/**
		 * The time in minutes between inventory checks. Default value is 1440 minutes (one day).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InventoryFrequency: FormControl<number | null | undefined>,

		/** The Package ID of the package used for inventory */
		InventoryPackage: FormControl<string | null | undefined>,

		/** Optional. The StringID used to localize the description of the update group */
		LocalizedDescription: FormControl<string | null | undefined>,

		/** Optional. The StringID used to localize the name of the update group */
		LocalizedName: FormControl<string | null | undefined>,

		/**
		 * The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		Priority: FormControl<number | null | undefined>,

		/**
		 * A field to return in the status report for this update group.
		 * Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})
		 */
		ReportField: FormControl<string | null | undefined>,

		/**
		 * The update type name
		 * Required
		 */
		UpdateType: FormControl<string | null | undefined>,

		/**
		 * A field used for validation in the status report for this update group.
		 * Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})
		 */
		ValidatingField: FormControl<string | null | undefined>,

		/** The value to validate the ValidationField against. */
		ValueToValidate: FormControl<string | null | undefined>,

		/** The version of the UpdateGroup, this value is incremented with each modification to a related Bundle or PackageType */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsUpdateGroupFormGroup() {
		return new FormGroup<UpdateSystemModelsUpdateGroupFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ID: new FormControl<string | null | undefined>(undefined),
			InventoryFrequency: new FormControl<number | null | undefined>(undefined),
			InventoryPackage: new FormControl<string | null | undefined>(undefined),
			LocalizedDescription: new FormControl<string | null | undefined>(undefined),
			LocalizedName: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(100)]),
			ReportField: new FormControl<string | null | undefined>(undefined),
			UpdateType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValidatingField: new FormControl<string | null | undefined>(undefined),
			ValueToValidate: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsBundle_ {

		/** Required */
		Entities: Array<UpdateSystemModelsBundle>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsBundle_FormProperties {
	}
	export function CreateAPIPagedResponse_UpdateSystemModelsBundle_FormGroup() {
		return new FormGroup<APIPagedResponse_UpdateSystemModelsBundle_FormProperties>({
		});

	}

	export interface UpdateSystemModelsBundle {

		/** Default Value: false. During the creation of the Bundle, this field must be false. */
		Active?: boolean | null;

		/** Read-Only. */
		BundleID?: string | null;

		/**
		 * The bundle number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		BundleNumber: number;

		/**
		 * The Bundle description.
		 * Required
		 */
		Description: string;

		/**
		 * The update group this bundle belongs to.
		 * Required
		 */
		UpdateGroupID: string;
	}
	export interface UpdateSystemModelsBundleFormProperties {

		/** Default Value: false. During the creation of the Bundle, this field must be false. */
		Active: FormControl<boolean | null | undefined>,

		/** Read-Only. */
		BundleID: FormControl<string | null | undefined>,

		/**
		 * The bundle number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		BundleNumber: FormControl<number | null | undefined>,

		/**
		 * The Bundle description.
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The update group this bundle belongs to.
		 * Required
		 */
		UpdateGroupID: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsBundleFormGroup() {
		return new FormGroup<UpdateSystemModelsBundleFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			BundleID: new FormControl<string | null | undefined>(undefined),
			BundleNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateGroupID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsClientStatus_UpdateSystemModelsPagedClientStatusMetadata_ {

		/** Required */
		Entities: Array<UpdateSystemModelsClientStatus>;

		/** Required */
		Metadata: UpdateSystemModelsPagedClientStatusMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsClientStatus_UpdateSystemModelsPagedClientStatusMetadata_FormProperties {
	}
	export function CreateAPIPagedResponse_UpdateSystemModelsClientStatus_UpdateSystemModelsPagedClientStatusMetadata_FormGroup() {
		return new FormGroup<APIPagedResponse_UpdateSystemModelsClientStatus_UpdateSystemModelsPagedClientStatusMetadata_FormProperties>({
		});

	}

	export interface UpdateSystemModelsClientStatus {

		/** The Client ID */
		ClientID?: string | null;

		/** The time of the client's last check-in */
		LastCheckin?: Date | null;

		/**
		 * The number of minutes that have passed since the last check-in
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MinutesElapsed?: number | null;

		/** The result for the client included in the UpdateGroup's report */
		ReportResult?: string | null;

		/** True if the result for the client matches what is expected for the UpdateGroup */
		ReportResultIsValid?: boolean | null;

		/** The value for the client included in the UpdateGroup's report */
		ReportValue?: string | null;

		/** A descriptive name for the client */
		Tag?: string | null;
	}
	export interface UpdateSystemModelsClientStatusFormProperties {

		/** The Client ID */
		ClientID: FormControl<string | null | undefined>,

		/** The time of the client's last check-in */
		LastCheckin: FormControl<Date | null | undefined>,

		/**
		 * The number of minutes that have passed since the last check-in
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MinutesElapsed: FormControl<number | null | undefined>,

		/** The result for the client included in the UpdateGroup's report */
		ReportResult: FormControl<string | null | undefined>,

		/** True if the result for the client matches what is expected for the UpdateGroup */
		ReportResultIsValid: FormControl<boolean | null | undefined>,

		/** The value for the client included in the UpdateGroup's report */
		ReportValue: FormControl<string | null | undefined>,

		/** A descriptive name for the client */
		Tag: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsClientStatusFormGroup() {
		return new FormGroup<UpdateSystemModelsClientStatusFormProperties>({
			ClientID: new FormControl<string | null | undefined>(undefined),
			LastCheckin: new FormControl<Date | null | undefined>(undefined),
			MinutesElapsed: new FormControl<number | null | undefined>(undefined),
			ReportResult: new FormControl<string | null | undefined>(undefined),
			ReportResultIsValid: new FormControl<boolean | null | undefined>(undefined),
			ReportValue: new FormControl<string | null | undefined>(undefined),
			Tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSystemModelsPagedClientStatusMetadata {

		/**
		 * The number of entities this paged response is limited to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Limit: number;

		/**
		 * The number of entities prior to this page of items.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Offset: number;

		/**
		 * The label for data contained in ClientStatus.ReportResults
		 * Required
		 */
		ReportResultExpected: string;

		/**
		 * The label for data contained in ClientStatus.ReportResults
		 * Required
		 */
		ReportResultLabel: string;

		/**
		 * The label for data contained in ClientStatus.ReportValue
		 * Required
		 */
		ReportValueLabel: string;

		/**
		 * The total number of entities matching the request.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TotalCount: number;
	}
	export interface UpdateSystemModelsPagedClientStatusMetadataFormProperties {

		/**
		 * The number of entities this paged response is limited to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * The number of entities prior to this page of items.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Offset: FormControl<number | null | undefined>,

		/**
		 * The label for data contained in ClientStatus.ReportResults
		 * Required
		 */
		ReportResultExpected: FormControl<string | null | undefined>,

		/**
		 * The label for data contained in ClientStatus.ReportResults
		 * Required
		 */
		ReportResultLabel: FormControl<string | null | undefined>,

		/**
		 * The label for data contained in ClientStatus.ReportValue
		 * Required
		 */
		ReportValueLabel: FormControl<string | null | undefined>,

		/**
		 * The total number of entities matching the request.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSystemModelsPagedClientStatusMetadataFormGroup() {
		return new FormGroup<UpdateSystemModelsPagedClientStatusMetadataFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ReportResultExpected: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReportResultLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReportValueLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TotalCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsClient_ {

		/** Required */
		Entities: Array<UpdateSystemModelsClient>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsClient_FormProperties {
	}
	export function CreateAPIPagedResponse_UpdateSystemModelsClient_FormGroup() {
		return new FormGroup<APIPagedResponse_UpdateSystemModelsClient_FormProperties>({
		});

	}

	export interface UpdateSystemModelsClient {

		/** Read Only. The id of the client */
		ClientID?: string | null;

		/** Read Only. The time of the client's last checkin with the server. */
		LastCheckin?: Date | null;

		/** A description of the client that can be used for easy reference */
		Tag?: string | null;
	}
	export interface UpdateSystemModelsClientFormProperties {

		/** Read Only. The id of the client */
		ClientID: FormControl<string | null | undefined>,

		/** Read Only. The time of the client's last checkin with the server. */
		LastCheckin: FormControl<Date | null | undefined>,

		/** A description of the client that can be used for easy reference */
		Tag: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsClientFormGroup() {
		return new FormGroup<UpdateSystemModelsClientFormProperties>({
			ClientID: new FormControl<string | null | undefined>(undefined),
			LastCheckin: new FormControl<Date | null | undefined>(undefined),
			Tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsPackageStatusSummary_ {

		/** Required */
		Entities: Array<UpdateSystemModelsPackageStatusSummary>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsPackageStatusSummary_FormProperties {
	}
	export function CreateAPIPagedResponse_UpdateSystemModelsPackageStatusSummary_FormGroup() {
		return new FormGroup<APIPagedResponse_UpdateSystemModelsPackageStatusSummary_FormProperties>({
		});

	}

	export interface UpdateSystemModelsPackageStatusSummary {

		/** The average time required to complete the download */
		AverageDownloadTime?: string | null;

		/** The average time required to complete the install */
		AverageInstallTime?: string | null;

		/**
		 * The number of clients that have completed the download
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Downloaded?: string | null;

		/**
		 * The result of the install
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Error?: number | null;

		/**
		 * The number of clients that have completed the install
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Installed?: string | null;

		/** The name of the package */
		Package?: string | null;

		/** The ID of the package */
		PackageID?: string | null;

		/** The individual package status items */
		PackageStatusItems?: Array<UpdateSystemModelsPackageStatus>;
	}
	export interface UpdateSystemModelsPackageStatusSummaryFormProperties {

		/** The average time required to complete the download */
		AverageDownloadTime: FormControl<string | null | undefined>,

		/** The average time required to complete the install */
		AverageInstallTime: FormControl<string | null | undefined>,

		/**
		 * The number of clients that have completed the download
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Downloaded: FormControl<string | null | undefined>,

		/**
		 * The result of the install
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Error: FormControl<number | null | undefined>,

		/**
		 * The number of clients that have completed the install
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Installed: FormControl<string | null | undefined>,

		/** The name of the package */
		Package: FormControl<string | null | undefined>,

		/** The ID of the package */
		PackageID: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsPackageStatusSummaryFormGroup() {
		return new FormGroup<UpdateSystemModelsPackageStatusSummaryFormProperties>({
			AverageDownloadTime: new FormControl<string | null | undefined>(undefined),
			AverageInstallTime: new FormControl<string | null | undefined>(undefined),
			Downloaded: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<number | null | undefined>(undefined),
			Installed: new FormControl<string | null | undefined>(undefined),
			Package: new FormControl<string | null | undefined>(undefined),
			PackageID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSystemModelsPackageStatus {

		/** The id of the client */
		ClientID?: string | null;

		/** The client's tag */
		ClientKey?: string | null;

		/** The amount of time spent downloading */
		DownloadTime?: string | null;

		/** The number of bytes downloaded */
		Downloaded?: string | null;

		/** The time the package completed */
		InstallCompleted?: string | null;

		/** The package result */
		InstallResult?: string | null;

		/** The time the package was started */
		InstallStarted?: string | null;

		/** The amount of time required to run the package */
		InstallTime?: string | null;

		/** The download completion percentage */
		Percentage?: string | null;

		/** The total size of the package */
		Size?: string | null;

		/** The time the status was last updated */
		Timestamp?: Date | null;
	}
	export interface UpdateSystemModelsPackageStatusFormProperties {

		/** The id of the client */
		ClientID: FormControl<string | null | undefined>,

		/** The client's tag */
		ClientKey: FormControl<string | null | undefined>,

		/** The amount of time spent downloading */
		DownloadTime: FormControl<string | null | undefined>,

		/** The number of bytes downloaded */
		Downloaded: FormControl<string | null | undefined>,

		/** The time the package completed */
		InstallCompleted: FormControl<string | null | undefined>,

		/** The package result */
		InstallResult: FormControl<string | null | undefined>,

		/** The time the package was started */
		InstallStarted: FormControl<string | null | undefined>,

		/** The amount of time required to run the package */
		InstallTime: FormControl<string | null | undefined>,

		/** The download completion percentage */
		Percentage: FormControl<string | null | undefined>,

		/** The total size of the package */
		Size: FormControl<string | null | undefined>,

		/** The time the status was last updated */
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateSystemModelsPackageStatusFormGroup() {
		return new FormGroup<UpdateSystemModelsPackageStatusFormProperties>({
			ClientID: new FormControl<string | null | undefined>(undefined),
			ClientKey: new FormControl<string | null | undefined>(undefined),
			DownloadTime: new FormControl<string | null | undefined>(undefined),
			Downloaded: new FormControl<string | null | undefined>(undefined),
			InstallCompleted: new FormControl<string | null | undefined>(undefined),
			InstallResult: new FormControl<string | null | undefined>(undefined),
			InstallStarted: new FormControl<string | null | undefined>(undefined),
			InstallTime: new FormControl<string | null | undefined>(undefined),
			Percentage: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsPackageTypeIDtoBundle_ {

		/** Required */
		Entities: Array<UpdateSystemModelsPackageTypeIDtoBundle>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsPackageTypeIDtoBundle_FormProperties {
	}
	export function CreateAPIPagedResponse_UpdateSystemModelsPackageTypeIDtoBundle_FormGroup() {
		return new FormGroup<APIPagedResponse_UpdateSystemModelsPackageTypeIDtoBundle_FormProperties>({
		});

	}

	export interface UpdateSystemModelsPackageTypeIDtoBundle {

		/**
		 * The bundle to include the package in.
		 * Required
		 */
		BundleID: string;

		/**
		 * The package type id of the package to include
		 * Required
		 */
		PackageTypeID: string;

		/**
		 * The package version of the package to include
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		PackageVersion: number;

		/**
		 * The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		Priority: number;

		/** Optional. The type of subscription supported.  The default subscription type is Required. */
		SubscriptionType?: UpdateSystemModelsAvailableSubscriptionSubscriptionType | null;
	}
	export interface UpdateSystemModelsPackageTypeIDtoBundleFormProperties {

		/**
		 * The bundle to include the package in.
		 * Required
		 */
		BundleID: FormControl<string | null | undefined>,

		/**
		 * The package type id of the package to include
		 * Required
		 */
		PackageTypeID: FormControl<string | null | undefined>,

		/**
		 * The package version of the package to include
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		PackageVersion: FormControl<number | null | undefined>,

		/**
		 * The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		Priority: FormControl<number | null | undefined>,

		/** Optional. The type of subscription supported.  The default subscription type is Required. */
		SubscriptionType: FormControl<UpdateSystemModelsAvailableSubscriptionSubscriptionType | null | undefined>,
	}
	export function CreateUpdateSystemModelsPackageTypeIDtoBundleFormGroup() {
		return new FormGroup<UpdateSystemModelsPackageTypeIDtoBundleFormProperties>({
			BundleID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageTypeID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(100)]),
			SubscriptionType: new FormControl<UpdateSystemModelsAvailableSubscriptionSubscriptionType | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsPackageType_ {

		/** Required */
		Entities: Array<UpdateSystemModelsPackageType>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsPackageType_FormProperties {
	}
	export function CreateAPIPagedResponse_UpdateSystemModelsPackageType_FormGroup() {
		return new FormGroup<APIPagedResponse_UpdateSystemModelsPackageType_FormProperties>({
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsPackage_ {

		/** Required */
		Entities: Array<UpdateSystemModelsPackage>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsPackage_FormProperties {
	}
	export function CreateAPIPagedResponse_UpdateSystemModelsPackage_FormGroup() {
		return new FormGroup<APIPagedResponse_UpdateSystemModelsPackage_FormProperties>({
		});

	}

	export interface UpdateSystemModelsPackage {

		/** Value is true if package should run automatically. Default value is false. */
		Autorun?: boolean | null;

		/**
		 * The CRC used to validate the download.
		 * Required
		 */
		CRC: string;

		/**
		 * The package description
		 * Required
		 */
		Description: string;

		/** Optional. The StringID used to localize the name of the Package */
		LocalizedName?: string | null;

		/** Notes about the package */
		Notes?: string | null;

		/** Read Only. The package ID */
		PackageID?: string | null;

		/**
		 * The id of the package type this package belongs to.
		 * Required
		 */
		PackageTypeID: string;

		/**
		 * For delta packages, the previous version required.  For non-delta packages, the Previous version is 0.  Default value is 0.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		PreviousVersion?: number | null;

		/**
		 * The date the package was released
		 * Required
		 */
		ReleaseDate: Date;

		/** True if the package is released.  Default value is False. */
		Released?: boolean | null;

		/** True to remove the package after successful execution.  Default value is False. */
		RemoveOnSuccess?: boolean | null;

		/**
		 * The size of the file at the specified URL.  If a size is not supplied at creation time, the size will be determined by the response from the URL.
		 * If the size provided does not match the size in the response from the URL an error will be returned.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size?: string | null;

		/** The command line arguments for the package.  Default value is an empty string. */
		Switches?: string | null;

		/**
		 * The Url to download the package from.
		 * Required
		 */
		Url: string;

		/**
		 * The version.
		 * Required
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		Version: number;
	}
	export interface UpdateSystemModelsPackageFormProperties {

		/** Value is true if package should run automatically. Default value is false. */
		Autorun: FormControl<boolean | null | undefined>,

		/**
		 * The CRC used to validate the download.
		 * Required
		 */
		CRC: FormControl<string | null | undefined>,

		/**
		 * The package description
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/** Optional. The StringID used to localize the name of the Package */
		LocalizedName: FormControl<string | null | undefined>,

		/** Notes about the package */
		Notes: FormControl<string | null | undefined>,

		/** Read Only. The package ID */
		PackageID: FormControl<string | null | undefined>,

		/**
		 * The id of the package type this package belongs to.
		 * Required
		 */
		PackageTypeID: FormControl<string | null | undefined>,

		/**
		 * For delta packages, the previous version required.  For non-delta packages, the Previous version is 0.  Default value is 0.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		PreviousVersion: FormControl<number | null | undefined>,

		/**
		 * The date the package was released
		 * Required
		 */
		ReleaseDate: FormControl<Date | null | undefined>,

		/** True if the package is released.  Default value is False. */
		Released: FormControl<boolean | null | undefined>,

		/** True to remove the package after successful execution.  Default value is False. */
		RemoveOnSuccess: FormControl<boolean | null | undefined>,

		/**
		 * The size of the file at the specified URL.  If a size is not supplied at creation time, the size will be determined by the response from the URL.
		 * If the size provided does not match the size in the response from the URL an error will be returned.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size: FormControl<string | null | undefined>,

		/** The command line arguments for the package.  Default value is an empty string. */
		Switches: FormControl<string | null | undefined>,

		/**
		 * The Url to download the package from.
		 * Required
		 */
		Url: FormControl<string | null | undefined>,

		/**
		 * The version.
		 * Required
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		Version: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSystemModelsPackageFormGroup() {
		return new FormGroup<UpdateSystemModelsPackageFormProperties>({
			Autorun: new FormControl<boolean | null | undefined>(undefined),
			CRC: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LocalizedName: new FormControl<string | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			PackageID: new FormControl<string | null | undefined>(undefined),
			PackageTypeID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PreviousVersion: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
			ReleaseDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Released: new FormControl<boolean | null | undefined>(undefined),
			RemoveOnSuccess: new FormControl<boolean | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			Switches: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(2147483647)]),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsPriorityPackage_ {

		/** Required */
		Entities: Array<UpdateSystemModelsPriorityPackage>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsPriorityPackage_FormProperties {
	}
	export function CreateAPIPagedResponse_UpdateSystemModelsPriorityPackage_FormGroup() {
		return new FormGroup<APIPagedResponse_UpdateSystemModelsPriorityPackage_FormProperties>({
		});

	}

	export interface UpdateSystemModelsPriorityPackage {

		/**
		 * Read Only. From the package specified by package ID.
		 * Value is true if package should run automatically. Default value is false.
		 */
		Autorun?: boolean | null;

		/** Read Only. From the package specified by package ID. */
		CRC?: string | null;

		/**
		 * The ID of the client to receive the priority package
		 * Required
		 */
		ClientID: string;

		/** Read Only. From the package specified by package ID. */
		Description?: string | null;

		/** Read Only. From the package specified by package ID. */
		Notes?: string | null;

		/**
		 * The ID of the package to push as a priority package.
		 * Required
		 */
		PackageID: string;

		/** Read Only. From the package specified by package ID. */
		PackageTypeID?: string | null;

		/**
		 * Read Only. From the package specified by package ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		PreviousVersion?: number | null;

		/** Read Only. The ID of the priority package. */
		PriorityPackageID?: string | null;

		/**
		 * Read Only. From the package specified by package ID.
		 * The date the package was released
		 */
		ReleaseDate?: Date | null;

		/** Read Only. From the package specified by package ID. */
		Released?: boolean | null;

		/** Read Only. From the package specified by package ID. */
		RemoveOnSuccess?: boolean | null;

		/**
		 * Read Only. From the package specified by package ID.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size?: string | null;

		/** The command line arguments for the priority package.  Default value is an empty string. */
		Switches?: string | null;

		/** Read Only. The timestamp of the priority package. */
		TimeStamp?: Date | null;

		/** Read Only. From the package specified by package ID. */
		Url?: string | null;

		/**
		 * Read Only. From the package specified by package ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Version?: number | null;
	}
	export interface UpdateSystemModelsPriorityPackageFormProperties {

		/**
		 * Read Only. From the package specified by package ID.
		 * Value is true if package should run automatically. Default value is false.
		 */
		Autorun: FormControl<boolean | null | undefined>,

		/** Read Only. From the package specified by package ID. */
		CRC: FormControl<string | null | undefined>,

		/**
		 * The ID of the client to receive the priority package
		 * Required
		 */
		ClientID: FormControl<string | null | undefined>,

		/** Read Only. From the package specified by package ID. */
		Description: FormControl<string | null | undefined>,

		/** Read Only. From the package specified by package ID. */
		Notes: FormControl<string | null | undefined>,

		/**
		 * The ID of the package to push as a priority package.
		 * Required
		 */
		PackageID: FormControl<string | null | undefined>,

		/** Read Only. From the package specified by package ID. */
		PackageTypeID: FormControl<string | null | undefined>,

		/**
		 * Read Only. From the package specified by package ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		PreviousVersion: FormControl<number | null | undefined>,

		/** Read Only. The ID of the priority package. */
		PriorityPackageID: FormControl<string | null | undefined>,

		/**
		 * Read Only. From the package specified by package ID.
		 * The date the package was released
		 */
		ReleaseDate: FormControl<Date | null | undefined>,

		/** Read Only. From the package specified by package ID. */
		Released: FormControl<boolean | null | undefined>,

		/** Read Only. From the package specified by package ID. */
		RemoveOnSuccess: FormControl<boolean | null | undefined>,

		/**
		 * Read Only. From the package specified by package ID.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size: FormControl<string | null | undefined>,

		/** The command line arguments for the priority package.  Default value is an empty string. */
		Switches: FormControl<string | null | undefined>,

		/** Read Only. The timestamp of the priority package. */
		TimeStamp: FormControl<Date | null | undefined>,

		/** Read Only. From the package specified by package ID. */
		Url: FormControl<string | null | undefined>,

		/**
		 * Read Only. From the package specified by package ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Version: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSystemModelsPriorityPackageFormGroup() {
		return new FormGroup<UpdateSystemModelsPriorityPackageFormProperties>({
			Autorun: new FormControl<boolean | null | undefined>(undefined),
			CRC: new FormControl<string | null | undefined>(undefined),
			ClientID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			PackageID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageTypeID: new FormControl<string | null | undefined>(undefined),
			PreviousVersion: new FormControl<number | null | undefined>(undefined),
			PriorityPackageID: new FormControl<string | null | undefined>(undefined),
			ReleaseDate: new FormControl<Date | null | undefined>(undefined),
			Released: new FormControl<boolean | null | undefined>(undefined),
			RemoveOnSuccess: new FormControl<boolean | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			Switches: new FormControl<string | null | undefined>(undefined),
			TimeStamp: new FormControl<Date | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsUpdateGroupClientRelationship_ {

		/** Required */
		Entities: Array<UpdateSystemModelsUpdateGroupClientRelationship>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsUpdateGroupClientRelationship_FormProperties {
	}
	export function CreateAPIPagedResponse_UpdateSystemModelsUpdateGroupClientRelationship_FormGroup() {
		return new FormGroup<APIPagedResponse_UpdateSystemModelsUpdateGroupClientRelationship_FormProperties>({
		});

	}

	export interface UpdateSystemModelsUpdateGroupClientRelationship {

		/** The subscription status.  The status is active by default. */
		Active?: boolean | null;

		/**
		 * Read Only after creation. The client id of the subscriber.
		 * Required
		 */
		ClientID: string;

		/** ReadOnly. The timestamp of the last checkin. */
		LastCheckin?: Date | null;

		/** Read Only after creation. The relationship id.  A relationship id will be assigned if not provided on creation. */
		RelationshipID?: string | null;

		/**
		 * Read Only after creation. The update group to subscribe to.
		 * Required
		 */
		UpdateGroupID: string;
	}
	export interface UpdateSystemModelsUpdateGroupClientRelationshipFormProperties {

		/** The subscription status.  The status is active by default. */
		Active: FormControl<boolean | null | undefined>,

		/**
		 * Read Only after creation. The client id of the subscriber.
		 * Required
		 */
		ClientID: FormControl<string | null | undefined>,

		/** ReadOnly. The timestamp of the last checkin. */
		LastCheckin: FormControl<Date | null | undefined>,

		/** Read Only after creation. The relationship id.  A relationship id will be assigned if not provided on creation. */
		RelationshipID: FormControl<string | null | undefined>,

		/**
		 * Read Only after creation. The update group to subscribe to.
		 * Required
		 */
		UpdateGroupID: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsUpdateGroupClientRelationshipFormGroup() {
		return new FormGroup<UpdateSystemModelsUpdateGroupClientRelationshipFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			ClientID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastCheckin: new FormControl<Date | null | undefined>(undefined),
			RelationshipID: new FormControl<string | null | undefined>(undefined),
			UpdateGroupID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsUpdateGroupSubscription_ {

		/** Required */
		Entities: Array<UpdateSystemModelsUpdateGroupSubscription>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsUpdateGroupSubscription_FormProperties {
	}
	export function CreateAPIPagedResponse_UpdateSystemModelsUpdateGroupSubscription_FormGroup() {
		return new FormGroup<APIPagedResponse_UpdateSystemModelsUpdateGroupSubscription_FormProperties>({
		});

	}

	export interface UpdateSystemModelsUpdateGroupSubscription {

		/**
		 * The ClientID.
		 * Required
		 */
		ClientID: string;

		/**
		 * True to receive content of type indicated by PackageTypeID.
		 * Required
		 */
		Include: boolean;

		/**
		 * The PackageType to set subscription status for
		 * Required
		 */
		PackageTypeID: string;

		/**
		 * The Update Group this subscription is relevant for.
		 * Required
		 */
		UpdateGroupID: string;

		/**
		 * The Update Group Subscription ID.  This ID will be automatically assigned when creating an Update Group Subscription.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UpdateGroupSubscriptionID?: number | null;
	}
	export interface UpdateSystemModelsUpdateGroupSubscriptionFormProperties {

		/**
		 * The ClientID.
		 * Required
		 */
		ClientID: FormControl<string | null | undefined>,

		/**
		 * True to receive content of type indicated by PackageTypeID.
		 * Required
		 */
		Include: FormControl<boolean | null | undefined>,

		/**
		 * The PackageType to set subscription status for
		 * Required
		 */
		PackageTypeID: FormControl<string | null | undefined>,

		/**
		 * The Update Group this subscription is relevant for.
		 * Required
		 */
		UpdateGroupID: FormControl<string | null | undefined>,

		/**
		 * The Update Group Subscription ID.  This ID will be automatically assigned when creating an Update Group Subscription.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UpdateGroupSubscriptionID: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSystemModelsUpdateGroupSubscriptionFormGroup() {
		return new FormGroup<UpdateSystemModelsUpdateGroupSubscriptionFormProperties>({
			ClientID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Include: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			PackageTypeID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateGroupID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateGroupSubscriptionID: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsUpdateGroup_ {

		/** Required */
		Entities: Array<UpdateSystemModelsUpdateGroup>;

		/**
		 * Metadata for the paged response
		 * Required
		 */
		Metadata: APIPagedResponseMetadata;
	}

	/** A response containing a page of results and metadata concerning the results */
	export interface APIPagedResponse_UpdateSystemModelsUpdateGroup_FormProperties {
	}
	export function CreateAPIPagedResponse_UpdateSystemModelsUpdateGroup_FormGroup() {
		return new FormGroup<APIPagedResponse_UpdateSystemModelsUpdateGroup_FormProperties>({
		});

	}

	export interface AuthorizationCodesSharedModelsCodeValidationModel {
		ExpirationDate?: Date | null;
		IsValid?: boolean | null;
	}
	export interface AuthorizationCodesSharedModelsCodeValidationModelFormProperties {
		ExpirationDate: FormControl<Date | null | undefined>,
		IsValid: FormControl<boolean | null | undefined>,
	}
	export function CreateAuthorizationCodesSharedModelsCodeValidationModelFormGroup() {
		return new FormGroup<AuthorizationCodesSharedModelsCodeValidationModelFormProperties>({
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
			IsValid: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** IActivityRun */
	export interface BuildSystemSharedInterfacesIActivityRun {

		/**
		 * ActivityRunID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityRunID?: number | null;

		/** EndDate */
		EndDate?: Date | null;

		/**
		 * JobActivityID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobActivityID?: number | null;

		/**
		 * JobRunID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobRunID?: number | null;

		/** Parameters */
		Parameters?: Array<BuildSystemSharedInterfacesIParameterValue>;

		/** StartDate */
		StartDate?: Date | null;

		/**
		 * Declares members of objects that communicate the progress of an
		 * asynchronous activity run.
		 */
		Status?: BuildSystemSharedInterfacesIActivityRunStatus;

		/** Steps */
		Steps?: Array<BuildSystemSharedInterfacesIActivityStep>;
	}

	/** IActivityRun */
	export interface BuildSystemSharedInterfacesIActivityRunFormProperties {

		/**
		 * ActivityRunID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityRunID: FormControl<number | null | undefined>,

		/** EndDate */
		EndDate: FormControl<Date | null | undefined>,

		/**
		 * JobActivityID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobActivityID: FormControl<number | null | undefined>,

		/**
		 * JobRunID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobRunID: FormControl<number | null | undefined>,

		/** StartDate */
		StartDate: FormControl<Date | null | undefined>,
	}
	export function CreateBuildSystemSharedInterfacesIActivityRunFormGroup() {
		return new FormGroup<BuildSystemSharedInterfacesIActivityRunFormProperties>({
			ActivityRunID: new FormControl<number | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			JobActivityID: new FormControl<number | null | undefined>(undefined),
			JobRunID: new FormControl<number | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Declares members that must be implemented by parameter value objects. */
	export interface BuildSystemSharedInterfacesIParameterValue {

		/**
		 * Gets or sets a value indicating whether the parameter value is an
		 * input to the build part or an output from the build part.
		 */
		Direction?: BuildSystemSharedDTOParameterValueDirection | null;

		/** Gets or sets the name of the parameter. */
		Name?: string | null;

		/** Gets or sets the value of the parameter. */
		Value?: string | null;
	}

	/** Declares members that must be implemented by parameter value objects. */
	export interface BuildSystemSharedInterfacesIParameterValueFormProperties {

		/**
		 * Gets or sets a value indicating whether the parameter value is an
		 * input to the build part or an output from the build part.
		 */
		Direction: FormControl<BuildSystemSharedDTOParameterValueDirection | null | undefined>,

		/** Gets or sets the name of the parameter. */
		Name: FormControl<string | null | undefined>,

		/** Gets or sets the value of the parameter. */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateBuildSystemSharedInterfacesIParameterValueFormGroup() {
		return new FormGroup<BuildSystemSharedInterfacesIParameterValueFormProperties>({
			Direction: new FormControl<BuildSystemSharedDTOParameterValueDirection | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Declares members of objects that communicate the progress of an 
	 *             asynchronous activity run.
	 */
	export interface BuildSystemSharedInterfacesIActivityRunStatus {

		/**
		 * Gets or sets the number of the step the activity is currently running.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrentStep?: number | null;

		/** Gets or sets the status of the activity run. */
		Status?: BuildSystemSharedDTOActivityRunStatusStatus | null;

		/**
		 * Gets or sets a measurement of the current progress of the current step.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StepProgress?: number | null;

		/**
		 * Gets or sets a description of the current status of the currently
		 * running step.
		 */
		StepStatus?: string | null;
	}

	/**
	 * Declares members of objects that communicate the progress of an 
	 *             asynchronous activity run.
	 */
	export interface BuildSystemSharedInterfacesIActivityRunStatusFormProperties {

		/**
		 * Gets or sets the number of the step the activity is currently running.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrentStep: FormControl<number | null | undefined>,

		/** Gets or sets the status of the activity run. */
		Status: FormControl<BuildSystemSharedDTOActivityRunStatusStatus | null | undefined>,

		/**
		 * Gets or sets a measurement of the current progress of the current step.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StepProgress: FormControl<number | null | undefined>,

		/**
		 * Gets or sets a description of the current status of the currently
		 * running step.
		 */
		StepStatus: FormControl<string | null | undefined>,
	}
	export function CreateBuildSystemSharedInterfacesIActivityRunStatusFormGroup() {
		return new FormGroup<BuildSystemSharedInterfacesIActivityRunStatusFormProperties>({
			CurrentStep: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<BuildSystemSharedDTOActivityRunStatusStatus | null | undefined>(undefined),
			StepProgress: new FormControl<number | null | undefined>(undefined),
			StepStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IActivityStep */
	export interface BuildSystemSharedInterfacesIActivityStep {

		/**
		 * ActivityID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityID?: number | null;

		/**
		 * ActivityStepID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityStepID?: number | null;

		/** Implementation ID */
		ImplementationID?: string | null;

		/** ParameterMappings */
		ParameterMappings?: Array<BuildSystemSharedInterfacesIParameterMapping>;

		/**
		 * run order
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RunOrder?: number | null;

		/**
		 * step id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StepID?: number | null;

		/** steo name */
		StepName?: string | null;

		/** UseConfig */
		UseConfig?: string | null;
	}

	/** IActivityStep */
	export interface BuildSystemSharedInterfacesIActivityStepFormProperties {

		/**
		 * ActivityID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityID: FormControl<number | null | undefined>,

		/**
		 * ActivityStepID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActivityStepID: FormControl<number | null | undefined>,

		/** Implementation ID */
		ImplementationID: FormControl<string | null | undefined>,

		/**
		 * run order
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RunOrder: FormControl<number | null | undefined>,

		/**
		 * step id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StepID: FormControl<number | null | undefined>,

		/** steo name */
		StepName: FormControl<string | null | undefined>,

		/** UseConfig */
		UseConfig: FormControl<string | null | undefined>,
	}
	export function CreateBuildSystemSharedInterfacesIActivityStepFormGroup() {
		return new FormGroup<BuildSystemSharedInterfacesIActivityStepFormProperties>({
			ActivityID: new FormControl<number | null | undefined>(undefined),
			ActivityStepID: new FormControl<number | null | undefined>(undefined),
			ImplementationID: new FormControl<string | null | undefined>(undefined),
			RunOrder: new FormControl<number | null | undefined>(undefined),
			StepID: new FormControl<number | null | undefined>(undefined),
			StepName: new FormControl<string | null | undefined>(undefined),
			UseConfig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IParameterMapping */
	export interface BuildSystemSharedInterfacesIParameterMapping {

		/** name */
		Name?: string | null;

		/** Source */
		Source?: string | null;

		/** SourceType */
		SourceType?: BuildSystemSharedDTOParameterMappingSourceType | null;
	}

	/** IParameterMapping */
	export interface BuildSystemSharedInterfacesIParameterMappingFormProperties {

		/** name */
		Name: FormControl<string | null | undefined>,

		/** Source */
		Source: FormControl<string | null | undefined>,

		/** SourceType */
		SourceType: FormControl<BuildSystemSharedDTOParameterMappingSourceType | null | undefined>,
	}
	export function CreateBuildSystemSharedInterfacesIParameterMappingFormGroup() {
		return new FormGroup<BuildSystemSharedInterfacesIParameterMappingFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<BuildSystemSharedDTOParameterMappingSourceType | null | undefined>(undefined),
		});

	}


	/** interface of JobRun */
	export interface BuildSystemSharedInterfacesIJobRun {

		/** ActivityRuns */
		ActivityRuns?: Array<BuildSystemSharedInterfacesIActivityRun>;

		/** end date */
		EndDate?: Date | null;

		/**
		 * job id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobID?: number | null;

		/**
		 * JobRunID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobRunID?: number | null;

		/** Parameters */
		Parameters?: Array<BuildSystemSharedInterfacesIParameterValue>;

		/** Start Date */
		StartDate?: Date | null;

		/** status */
		Status?: BuildSystemSharedDTOActivityRunStatusStatus | null;
	}

	/** interface of JobRun */
	export interface BuildSystemSharedInterfacesIJobRunFormProperties {

		/** end date */
		EndDate: FormControl<Date | null | undefined>,

		/**
		 * job id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobID: FormControl<number | null | undefined>,

		/**
		 * JobRunID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobRunID: FormControl<number | null | undefined>,

		/** Start Date */
		StartDate: FormControl<Date | null | undefined>,

		/** status */
		Status: FormControl<BuildSystemSharedDTOActivityRunStatusStatus | null | undefined>,
	}
	export function CreateBuildSystemSharedInterfacesIJobRunFormGroup() {
		return new FormGroup<BuildSystemSharedInterfacesIJobRunFormProperties>({
			EndDate: new FormControl<Date | null | undefined>(undefined),
			JobID: new FormControl<number | null | undefined>(undefined),
			JobRunID: new FormControl<number | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<BuildSystemSharedDTOActivityRunStatusStatus | null | undefined>(undefined),
		});

	}


	/** A type of content available for submission */
	export interface ContentSubmissionSharedBusinessEntitiesContentSubmissionType {

		/** A template for the Attribute from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName} */
		AttributeTemplate?: string | null;

		/**
		 * The ID of the Azure DevOps Build Definition for which to create a Build. Either 'BuildDefinitionID' or 'JobID' is required.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		BuildDefinitionID?: number | null;

		/** A template for the category from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName} */
		CategoryTemplate?: string | null;

		/**
		 * A description for the Content Submission Type
		 * Required
		 */
		Description: string;

		/** Indicates whether this submission type is available to be used */
		Enabled?: boolean | null;

		/**
		 * The ID of the Content Submission Type
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID?: number | null;

		/** The ID of the Inventory Package from which to read the version of the package installed. */
		InventoryPackageID?: string | null;

		/**
		 * The ID of the JobDefinition for which to initiate a Job. A value of '0' will cause a submission to fail. Either 'BuildDefinitionID' or 'JobID' is required.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobID?: number | null;

		/**
		 * The Name of the Content Submission Type
		 * Required
		 */
		Name: string;

		/** A description of how release notes for this Content Submission Type are used */
		ReleaseNotesDescription?: string | null;
	}

	/** A type of content available for submission */
	export interface ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeFormProperties {

		/** A template for the Attribute from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName} */
		AttributeTemplate: FormControl<string | null | undefined>,

		/**
		 * The ID of the Azure DevOps Build Definition for which to create a Build. Either 'BuildDefinitionID' or 'JobID' is required.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		BuildDefinitionID: FormControl<number | null | undefined>,

		/** A template for the category from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName} */
		CategoryTemplate: FormControl<string | null | undefined>,

		/**
		 * A description for the Content Submission Type
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/** Indicates whether this submission type is available to be used */
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * The ID of the Content Submission Type
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ID: FormControl<number | null | undefined>,

		/** The ID of the Inventory Package from which to read the version of the package installed. */
		InventoryPackageID: FormControl<string | null | undefined>,

		/**
		 * The ID of the JobDefinition for which to initiate a Job. A value of '0' will cause a submission to fail. Either 'BuildDefinitionID' or 'JobID' is required.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobID: FormControl<number | null | undefined>,

		/**
		 * The Name of the Content Submission Type
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** A description of how release notes for this Content Submission Type are used */
		ReleaseNotesDescription: FormControl<string | null | undefined>,
	}
	export function CreateContentSubmissionSharedBusinessEntitiesContentSubmissionTypeFormGroup() {
		return new FormGroup<ContentSubmissionSharedBusinessEntitiesContentSubmissionTypeFormProperties>({
			AttributeTemplate: new FormControl<string | null | undefined>(undefined),
			BuildDefinitionID: new FormControl<number | null | undefined>(undefined),
			CategoryTemplate: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			ID: new FormControl<number | null | undefined>(undefined),
			InventoryPackageID: new FormControl<string | null | undefined>(undefined),
			JobID: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReleaseNotesDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Registration for an EDT Lite */
	export interface DealerDBModelsEDTLiteRegistration {

		/** The dealer code with which the EDT Lite was created. */
		DealerCode?: string | null;

		/**
		 * The date at which the content of the EDT Lite expires.
		 * Required
		 */
		ExpirationDate: Date;

		/**
		 * The identifier for the EDT Lite.
		 * Required
		 */
		InstanceID: string;

		/**
		 * The voucher code with which the EDT Lite was created.
		 * Required
		 */
		VoucherCode: string;
	}

	/** Registration for an EDT Lite */
	export interface DealerDBModelsEDTLiteRegistrationFormProperties {

		/** The dealer code with which the EDT Lite was created. */
		DealerCode: FormControl<string | null | undefined>,

		/**
		 * The date at which the content of the EDT Lite expires.
		 * Required
		 */
		ExpirationDate: FormControl<Date | null | undefined>,

		/**
		 * The identifier for the EDT Lite.
		 * Required
		 */
		InstanceID: FormControl<string | null | undefined>,

		/**
		 * The voucher code with which the EDT Lite was created.
		 * Required
		 */
		VoucherCode: FormControl<string | null | undefined>,
	}
	export function CreateDealerDBModelsEDTLiteRegistrationFormGroup() {
		return new FormGroup<DealerDBModelsEDTLiteRegistrationFormProperties>({
			DealerCode: new FormControl<string | null | undefined>(undefined),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			InstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VoucherCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DealerDBModelsLicenseActivation {

		/** The license key in base64 format.  This is only provided when the LicenseData is a new license. */
		Key?: string | null;

		/** The license data in base64 format. */
		LicenseData?: string | null;
	}
	export interface DealerDBModelsLicenseActivationFormProperties {

		/** The license key in base64 format.  This is only provided when the LicenseData is a new license. */
		Key: FormControl<string | null | undefined>,

		/** The license data in base64 format. */
		LicenseData: FormControl<string | null | undefined>,
	}
	export function CreateDealerDBModelsLicenseActivationFormGroup() {
		return new FormGroup<DealerDBModelsLicenseActivationFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			LicenseData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DealerDBModelsLicenseActivationConfirm {

		/**
		 * The license version to confirm
		 * Required
		 */
		LicenseVersion: string;
	}
	export interface DealerDBModelsLicenseActivationConfirmFormProperties {

		/**
		 * The license version to confirm
		 * Required
		 */
		LicenseVersion: FormControl<string | null | undefined>,
	}
	export function CreateDealerDBModelsLicenseActivationConfirmFormGroup() {
		return new FormGroup<DealerDBModelsLicenseActivationConfirmFormProperties>({
			LicenseVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DealerDBModelsLicenseActivationCreate {

		/**
		 * The Dealer Code of the dealer activating the license
		 * Required
		 */
		DealerCode: string;

		/** The type of license to create (e.g. EDT, EDT Lite) */
		LicenseActivationType?: DealerDBModelsLicenseLicenseActivationType | null;

		/**
		 * The dealer's postal code (zip code)
		 * Required
		 */
		PostalCode: string;

		/**
		 * Information about  the system being activated
		 * Required
		 */
		SystemInfo: string;

		/**
		 * The Voucher Code to use for activation
		 * Required
		 */
		VoucherCode: string;
	}
	export interface DealerDBModelsLicenseActivationCreateFormProperties {

		/**
		 * The Dealer Code of the dealer activating the license
		 * Required
		 */
		DealerCode: FormControl<string | null | undefined>,

		/** The type of license to create (e.g. EDT, EDT Lite) */
		LicenseActivationType: FormControl<DealerDBModelsLicenseLicenseActivationType | null | undefined>,

		/**
		 * The dealer's postal code (zip code)
		 * Required
		 */
		PostalCode: FormControl<string | null | undefined>,

		/**
		 * Information about  the system being activated
		 * Required
		 */
		SystemInfo: FormControl<string | null | undefined>,

		/**
		 * The Voucher Code to use for activation
		 * Required
		 */
		VoucherCode: FormControl<string | null | undefined>,
	}
	export function CreateDealerDBModelsLicenseActivationCreateFormGroup() {
		return new FormGroup<DealerDBModelsLicenseActivationCreateFormProperties>({
			DealerCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LicenseActivationType: new FormControl<DealerDBModelsLicenseLicenseActivationType | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SystemInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VoucherCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DealerDBModelsLicenseActivationUpdate {

		/**
		 * The license version to update
		 * Required
		 */
		LicenseVersion: string;

		/** Information about  the system being activated */
		SystemInfo?: string | null;
	}
	export interface DealerDBModelsLicenseActivationUpdateFormProperties {

		/**
		 * The license version to update
		 * Required
		 */
		LicenseVersion: FormControl<string | null | undefined>,

		/** Information about  the system being activated */
		SystemInfo: FormControl<string | null | undefined>,
	}
	export function CreateDealerDBModelsLicenseActivationUpdateFormGroup() {
		return new FormGroup<DealerDBModelsLicenseActivationUpdateFormProperties>({
			LicenseVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SystemInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics for a translation set */
	export interface GlobalResourcesSharedModelsTranslationSetStatistics {

		/** The IDs of languages for which translaions in this translation set have been requested */
		LanguageIDs?: Array<number>;

		/**
		 * The count of unique string definitions contained in this translation set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StringCount?: number | null;
	}

	/** Statistics for a translation set */
	export interface GlobalResourcesSharedModelsTranslationSetStatisticsFormProperties {

		/**
		 * The count of unique string definitions contained in this translation set
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StringCount: FormControl<number | null | undefined>,
	}
	export function CreateGlobalResourcesSharedModelsTranslationSetStatisticsFormGroup() {
		return new FormGroup<GlobalResourcesSharedModelsTranslationSetStatisticsFormProperties>({
			StringCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SystemObject {
	}
	export interface SystemObjectFormProperties {
	}
	export function CreateSystemObjectFormGroup() {
		return new FormGroup<SystemObjectFormProperties>({
		});

	}

	export interface UpdateSystemModelsAttributeValue {

		/**
		 * The attribute name
		 * Required
		 */
		Key: string;

		/** Read Only. The timestamp. */
		TimeStamp?: Date | null;

		/** The value */
		Value?: string | null;
	}
	export interface UpdateSystemModelsAttributeValueFormProperties {

		/**
		 * The attribute name
		 * Required
		 */
		Key: FormControl<string | null | undefined>,

		/** Read Only. The timestamp. */
		TimeStamp: FormControl<Date | null | undefined>,

		/** The value */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsAttributeValueFormGroup() {
		return new FormGroup<UpdateSystemModelsAttributeValueFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimeStamp: new FormControl<Date | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSystemModelsCategory {
		Values?: Array<UpdateSystemModelsAttributeValue>;

		/**
		 * The category name
		 * Required
		 */
		category: string;
	}
	export interface UpdateSystemModelsCategoryFormProperties {

		/**
		 * The category name
		 * Required
		 */
		category: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsCategoryFormGroup() {
		return new FormGroup<UpdateSystemModelsCategoryFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSystemModelsCheckinResult {

		/** The packages for the client to run. */
		Packages?: Array<UpdateSystemModelsPackage>;

		/** The package ids for the client to remove. */
		RemovePackages?: Array<string>;
	}
	export interface UpdateSystemModelsCheckinResultFormProperties {
	}
	export function CreateUpdateSystemModelsCheckinResultFormGroup() {
		return new FormGroup<UpdateSystemModelsCheckinResultFormProperties>({
		});

	}

	export interface UpdateSystemModelsClientInfo {

		/** The id of the client */
		ClientID?: string | null;

		/** The packages */
		Package?: Array<UpdateSystemModelsPackageReport>;
	}
	export interface UpdateSystemModelsClientInfoFormProperties {

		/** The id of the client */
		ClientID: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsClientInfoFormGroup() {
		return new FormGroup<UpdateSystemModelsClientInfoFormProperties>({
			ClientID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSystemModelsPackageReport {

		/** The package report's categories. */
		Categories?: Array<UpdateSystemModelsCategory>;

		/** Read Only. The package description */
		PackageDescription?: string | null;

		/** The PackageID. */
		PackageID?: string | null;
	}
	export interface UpdateSystemModelsPackageReportFormProperties {

		/** Read Only. The package description */
		PackageDescription: FormControl<string | null | undefined>,

		/** The PackageID. */
		PackageID: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsPackageReportFormGroup() {
		return new FormGroup<UpdateSystemModelsPackageReportFormProperties>({
			PackageDescription: new FormControl<string | null | undefined>(undefined),
			PackageID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model that retrieves the data for UpdateMetrics */
	export interface UpdateSystemModelsUpdateMetricsData {

		/** Active version (bundle number) of update type. */
		ActiveVersion?: string | null;

		/** Generic collection that is of type ActiveVersionByClientRecord */
		ActiveVersionByClient?: Array<UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord>;

		/** Generic collection that is of type CurrentStateByClientRecord */
		CurrentStateByClient?: Array<UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord>;

		/** Date that has been configured to only show the most recent clients with a cut off date. (Ex. year from current date) */
		CutOffDate?: Date | null;

		/** Data was refreshed at this time. */
		DataRefreshed?: Date | null;

		/**
		 * Sum of clients represented
		 * Filtered by updateType and lastCheckedInDate
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		FilteredClientCount?: number | null;

		/** Generic collection that is of type PackageErrorsRecord */
		PackageErrors?: Array<UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord>;

		/**
		 * Total clients we have ever serviced
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TotalClientCount?: number | null;
	}

	/** Model that retrieves the data for UpdateMetrics */
	export interface UpdateSystemModelsUpdateMetricsDataFormProperties {

		/** Active version (bundle number) of update type. */
		ActiveVersion: FormControl<string | null | undefined>,

		/** Date that has been configured to only show the most recent clients with a cut off date. (Ex. year from current date) */
		CutOffDate: FormControl<Date | null | undefined>,

		/** Data was refreshed at this time. */
		DataRefreshed: FormControl<Date | null | undefined>,

		/**
		 * Sum of clients represented
		 * Filtered by updateType and lastCheckedInDate
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		FilteredClientCount: FormControl<number | null | undefined>,

		/**
		 * Total clients we have ever serviced
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TotalClientCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSystemModelsUpdateMetricsDataFormGroup() {
		return new FormGroup<UpdateSystemModelsUpdateMetricsDataFormProperties>({
			ActiveVersion: new FormControl<string | null | undefined>(undefined),
			CutOffDate: new FormControl<Date | null | undefined>(undefined),
			DataRefreshed: new FormControl<Date | null | undefined>(undefined),
			FilteredClientCount: new FormControl<number | null | undefined>(undefined),
			TotalClientCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BundleNumber?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientCount?: number | null;
		ReleaseName?: string | null;
	}
	export interface UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecordFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BundleNumber: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientCount: FormControl<number | null | undefined>,
		ReleaseName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecordFormGroup() {
		return new FormGroup<UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecordFormProperties>({
			BundleNumber: new FormControl<number | null | undefined>(undefined),
			ClientCount: new FormControl<number | null | undefined>(undefined),
			ReleaseName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientCount?: number | null;
		State?: string | null;
	}
	export interface UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecordFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientCount: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecordFormGroup() {
		return new FormGroup<UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecordFormProperties>({
			ClientCount: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientCount?: number | null;
		ErrorCode?: string | null;
		LongDescription?: string | null;
		ShortDescription?: string | null;
	}
	export interface UpdateSystemModelsUpdateMetricsDataPackageErrorsRecordFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientCount: FormControl<number | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		LongDescription: FormControl<string | null | undefined>,
		ShortDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemModelsUpdateMetricsDataPackageErrorsRecordFormGroup() {
		return new FormGroup<UpdateSystemModelsUpdateMetricsDataPackageErrorsRecordFormProperties>({
			ClientCount: new FormControl<number | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			LongDescription: new FormControl<string | null | undefined>(undefined),
			ShortDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * No Documentation Found.
		 * No Documentation Found.
		 * Get api/v2/AftermarketServices/Certificates
		 * @return {SystemObject} OK
		 */
		AftermarketServices_GetCerts(): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'api/v2/AftermarketServices/Certificates', {});
		}

		/**
		 * Activate or Deactivate an ECU, or Report an ECU as Damaged.
		 * No Documentation Found.
		 * Put api/v2/AftermarketServices/ECUs/{serialNumber}
		 * @param {string} serialNumber The serial number of the ECU.
		 * @param {string} EDTInstanceId The EDT Instance Id of the kit calling this method.
		 * @param {AGCOPowerServicesModelsECU} requestBody The ecu to modify.
		 * @return {AGCOPowerServicesModelsECU} OK
		 */
		AftermarketServices_PutECU(serialNumber: string, EDTInstanceId: string, requestBody: AGCOPowerServicesModelsECU): Observable<AGCOPowerServicesModelsECU> {
			return this.http.put<AGCOPowerServicesModelsECU>(this.baseUri + 'api/v2/AftermarketServices/ECUs/' + (serialNumber == null ? '' : encodeURIComponent(serialNumber)) + '&EDTInstanceId=' + (EDTInstanceId == null ? '' : encodeURIComponent(EDTInstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get injector codes given engine.
		 * No Documentation Found.
		 * Get api/v2/AftermarketServices/Engines/{serialNumber}/IQACodes
		 * @param {string} serialNumber The serial number of the engine.
		 * @param {string} EDTInstanceId The EDT Instance Id of the kit calling this method.
		 * @return {Array<string>} OK
		 */
		AftermarketServices_GetEngineIQACodes(serialNumber: string, EDTInstanceId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v2/AftermarketServices/Engines/' + (serialNumber == null ? '' : encodeURIComponent(serialNumber)) + '/IQACodes&EDTInstanceId=' + (EDTInstanceId == null ? '' : encodeURIComponent(EDTInstanceId)), {});
		}

		/**
		 * Report the IQA codes used by an engine
		 * No Documentation Found.
		 * Put api/v2/AftermarketServices/Engines/{serialNumber}/IQACodes
		 * @param {string} serialNumber The serial number of the Engine
		 * @param {string} EDTInstanceId The EDT Instance Id of the kit calling this method.
		 * @param {Array<string>} requestBody A string array of IQA codes in physical order
		 * @return {boolean} OK
		 */
		AftermarketServices_PutIQACodes(serialNumber: string, EDTInstanceId: string, requestBody: Array<string>): Observable<boolean> {
			return this.http.put<boolean>(this.baseUri + 'api/v2/AftermarketServices/Engines/' + (serialNumber == null ? '' : encodeURIComponent(serialNumber)) + '/IQACodes&EDTInstanceId=' + (EDTInstanceId == null ? '' : encodeURIComponent(EDTInstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get production calibration data for given engine.
		 * No Documentation Found.
		 * Get api/v2/AftermarketServices/Engines/{serialNumber}/ProductionData
		 * @param {string} serialNumber The serial number of the engine.
		 * @param {string} EDTInstanceId The EDT Instance Id of the kit calling this method.
		 * @return {Array<AGCOPowerServicesModelsProductionData>} OK
		 */
		AftermarketServices_GetProductionData(serialNumber: string, EDTInstanceId: string): Observable<Array<AGCOPowerServicesModelsProductionData>> {
			return this.http.get<Array<AGCOPowerServicesModelsProductionData>>(this.baseUri + 'api/v2/AftermarketServices/Engines/' + (serialNumber == null ? '' : encodeURIComponent(serialNumber)) + '/ProductionData&EDTInstanceId=' + (EDTInstanceId == null ? '' : encodeURIComponent(EDTInstanceId)), {});
		}

		/**
		 * Check whether there is connectivity to AGCO Power Web Services
		 * No Documentation Found.
		 * Get api/v2/AftermarketServices/Hello
		 * @return {boolean} OK
		 */
		AftermarketServices_GetConnectionStatus(): Observable<boolean> {
			return this.http.get<boolean>(this.baseUri + 'api/v2/AftermarketServices/Hello', {});
		}

		/**
		 * Retrieve the status of an EDT Kit Registration with AGCO Power Web Services
		 * No Documentation Found.
		 * Get api/v2/AftermarketServices/UserStatuses
		 * @return {AGCOPowerServicesModelsUserStatus} OK
		 */
		AftermarketServices_GetUserStatus(voucherCode: string, dealerCode: string): Observable<AGCOPowerServicesModelsUserStatus> {
			return this.http.get<AGCOPowerServicesModelsUserStatus>(this.baseUri + 'api/v2/AftermarketServices/UserStatuses?voucherCode=' + (voucherCode == null ? '' : encodeURIComponent(voucherCode)) + '&dealerCode=' + (dealerCode == null ? '' : encodeURIComponent(dealerCode)), {});
		}

		/**
		 * Update the status of an EDT Kit Registration with AGCO Power Web Services
		 * No Documentation Found.
		 * Put api/v2/AftermarketServices/UserStatuses
		 * @return {boolean} OK
		 */
		AftermarketServices_UpdateUserStatus(requestBody: AGCOPowerServicesModelsUserStatus): Observable<boolean> {
			return this.http.put<boolean>(this.baseUri + 'api/v2/AftermarketServices/UserStatuses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Manage API tokens.
		 * No Documentation Found.
		 * Put api/v2/AuthenticatedUsers/{UserID}/Tokens
		 * @param {number} UserID Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {APIModelsTokenOptions} requestBody The options for token management.
		 * @return {void} 
		 */
		Authentication_PutManageTokens(UserID: number, requestBody: APIModelsTokenOptions): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/AuthenticatedUsers/' + UserID + '/Tokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Authenticate a user.
		 * No Documentation Found.
		 * Post api/v2/Authentication
		 * @param {APIModelsCredentials} requestBody Create a user account.
		 * @return {APIModelsAuthenticatedUser} OK
		 */
		Authentication_Default(requestBody: APIModelsCredentials): Observable<APIModelsAuthenticatedUser> {
			return this.http.post<APIModelsAuthenticatedUser>(this.baseUri + 'api/v2/Authentication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Acknowledges the connection to the API
		 * No Documentation Found.
		 * Get api/v2/Authentication/IsAlive
		 * @return {void} 
		 */
		Authentication_IsAlive(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/Authentication/IsAlive', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request a password reset.
		 * No Documentation Found.
		 * Post api/v2/Authentication/RequestPasswordReset
		 * @param {APIModelsPasswordResetRequest} requestBody The password reset request.
		 * @return {void} 
		 */
		Authentication_RequestPasswordReset(requestBody: APIModelsPasswordResetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/Authentication/RequestPasswordReset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset a password
		 * No Documentation Found.
		 * Post api/v2/Authentication/ResetPasword
		 * @param {APIModelsPasswordReset} requestBody The password reset detail.
		 * @return {void} 
		 */
		Authentication_ResetPasword(requestBody: APIModelsPasswordReset): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/Authentication/ResetPasword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get authorization categories.
		 * No Documentation Found.
		 * Get api/v2/AuthorizationCategories
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} userID Optional. Filter by categories visible to the provided user with the provided userID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} definitionID Optional. Filter by categories containing a definition with the provided ID.
		 * @return {APIIPagedResponse_AuthorizationCodesSharedModelsCategory_} OK
		 */
		AuthorizationCategories_Get(limit: number | null | undefined, offset: number | null | undefined, userID: number | null | undefined, definitionID: string | null | undefined): Observable<APIIPagedResponse_AuthorizationCodesSharedModelsCategory_> {
			return this.http.get<APIIPagedResponse_AuthorizationCodesSharedModelsCategory_>(this.baseUri + 'api/v2/AuthorizationCategories?limit=' + limit + '&offset=' + offset + '&userID=' + userID + '&definitionID=' + (definitionID == null ? '' : encodeURIComponent(definitionID)), {});
		}

		/**
		 * Add an authorization category.
		 * No Documentation Found.
		 * Post api/v2/AuthorizationCategories
		 * @param {AuthorizationCodesSharedModelsCategory} requestBody An authorization category.
		 * @return {string} OK
		 */
		AuthorizationCategories_Post(requestBody: AuthorizationCodesSharedModelsCategory): Observable<string> {
			return this.http.post(this.baseUri + 'api/v2/AuthorizationCategories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a report of access that users have to Authorization Categories.
		 * No Documentation Found.
		 * Get api/v2/AuthorizationCategories/Users
		 * @param {number} limit Optional. Defaults to 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. Defaults to 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} userIDs Optional. Includes only users with IDs on the provided comma-separated list.
		 * @param {string} categoryIDs Optional. Includes only users with categories with IDs on the provided comma-separated list.
		 * @param {boolean} includeCategories If true, include full Authorization Category detail. Defaults to false.
		 * @param {boolean} includeUsers If true, include full User detail. Defaults to false.
		 * @param {string} userSearch Optional. Includes only users with a Name, Username, or Email containing the provided value.
		 * @return {APIIPagedResponse_AuthorizationCodesSharedModelsCategoryUserReport_} OK
		 */
		AuthorizationCategories_GetUsers(limit: number | null | undefined, offset: number | null | undefined, userIDs: string | null | undefined, categoryIDs: string | null | undefined, includeCategories: boolean | null | undefined, includeUsers: boolean | null | undefined, userSearch: string | null | undefined): Observable<APIIPagedResponse_AuthorizationCodesSharedModelsCategoryUserReport_> {
			return this.http.get<APIIPagedResponse_AuthorizationCodesSharedModelsCategoryUserReport_>(this.baseUri + 'api/v2/AuthorizationCategories/Users?limit=' + limit + '&offset=' + offset + '&userIDs=' + (userIDs == null ? '' : encodeURIComponent(userIDs)) + '&categoryIDs=' + (categoryIDs == null ? '' : encodeURIComponent(categoryIDs)) + '&includeCategories=' + includeCategories + '&includeUsers=' + includeUsers + '&userSearch=' + (userSearch == null ? '' : encodeURIComponent(userSearch)), {});
		}

		/**
		 * Remove an authorization category.
		 * No Documentation Found.
		 * Delete api/v2/AuthorizationCategories/{id}
		 * @param {string} id The ID of the authorization category.
		 * @return {void} 
		 */
		AuthorizationCategories_Delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/AuthorizationCategories/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an authorization category.
		 * No Documentation Found.
		 * Put api/v2/AuthorizationCategories/{id}
		 * @param {AuthorizationCodesSharedModelsCategory} requestBody An authorization category.
		 * @return {void} 
		 */
		AuthorizationCategories_Put(id: string, requestBody: AuthorizationCodesSharedModelsCategory): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/AuthorizationCategories/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a category a user could see.
		 * No Documentation Found.
		 * Delete api/v2/AuthorizationCategories/{id}/Users/{userID}
		 * @param {number} userID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		AuthorizationCategories_RemoveUser(id: string, userID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/AuthorizationCategories/' + (id == null ? '' : encodeURIComponent(id)) + '/Users/' + userID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a category that a user can see.
		 * No Documentation Found.
		 * Post api/v2/AuthorizationCategories/{id}/Users/{userID}
		 * @param {number} userID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		AuthorizationCategories_AddUser(id: string, userID: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/AuthorizationCategories/' + (id == null ? '' : encodeURIComponent(id)) + '/Users/' + userID, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get authorization code definitions.
		 * Additional searches: validationFields[Name]=true and dataFields[Name]=true. These can be used to search for authorization code definitions that have the specified data or validation fields.
		 * Get api/v2/AuthorizationCodeDefinitions
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} name Optional. If specified, filters definitions by name. Starting and ending wildcards (*) supported.
		 * @param {number} createdByUserID Optional. If specified, filters definitions to those created by the given User ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} deletedByUserID Optional. If specified, filters definitions to those deleted by the given User ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} includeDeleted Optional. Whether to include deleted definitions. 'False' by default.
		 * @param {string} categoryID Optional. If specified, filters definitions with the designated categoryID.
		 * @return {APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCodeDefinition_} OK
		 */
		AuthorizationCodeDefinitions_GetAuthorizationCodeDefinition(limit: number | null | undefined, offset: number | null | undefined, name: string | null | undefined, createdByUserID: number | null | undefined, deletedByUserID: number | null | undefined, includeDeleted: boolean | null | undefined, categoryID: string | null | undefined): Observable<APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCodeDefinition_> {
			return this.http.get<APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCodeDefinition_>(this.baseUri + 'api/v2/AuthorizationCodeDefinitions?limit=' + limit + '&offset=' + offset + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&createdByUserID=' + createdByUserID + '&deletedByUserID=' + deletedByUserID + '&includeDeleted=' + includeDeleted + '&categoryID=' + (categoryID == null ? '' : encodeURIComponent(categoryID)), {});
		}

		/**
		 * Add an authorization code definition.
		 * No Documentation Found.
		 * Post api/v2/AuthorizationCodeDefinitions
		 * @param {AuthorizationCodesSharedModelsAuthorizationCodeDefinition} requestBody An authorization code definition.
		 * @return {string} OK
		 */
		AuthorizationCodeDefinitions_PostAuthorizationCodeDefinition(requestBody: AuthorizationCodesSharedModelsAuthorizationCodeDefinition): Observable<string> {
			return this.http.post(this.baseUri + 'api/v2/AuthorizationCodeDefinitions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Deletes the category from the authorization code definition.
		 * No Documentation Found.
		 * Delete api/v2/AuthorizationCodeDefinitions/{ID}/Categories/{categoryID}
		 * @param {string} categoryID A category ID, as a GUID.
		 * @return {void} 
		 */
		AuthorizationCodeDefinitions_RemoveCategoryFromDefinition(ID: string, categoryID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/AuthorizationCodeDefinitions/' + (ID == null ? '' : encodeURIComponent(ID)) + '/Categories/' + (categoryID == null ? '' : encodeURIComponent(categoryID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a category to an authorizationCodeDefintion.
		 * No Documentation Found.
		 * Post api/v2/AuthorizationCodeDefinitions/{ID}/Categories/{categoryID}
		 * @param {string} categoryID A category ID, as a GUID.
		 * @return {void} 
		 */
		AuthorizationCodeDefinitions_AddCategoryToDefinition(ID: string, categoryID: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/AuthorizationCodeDefinitions/' + (ID == null ? '' : encodeURIComponent(ID)) + '/Categories/' + (categoryID == null ? '' : encodeURIComponent(categoryID)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disable an authorization code definition
		 * No Documentation Found.
		 * Delete api/v2/AuthorizationCodeDefinitions/{id}
		 * @param {string} id The ID of the authorization code definition.
		 * @return {void} 
		 */
		AuthorizationCodeDefinitions_DeleteAuthorizationCodeDefinition(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/AuthorizationCodeDefinitions/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an authorization code definition by its ID
		 * No Documentation Found.
		 * Get api/v2/AuthorizationCodeDefinitions/{id}
		 * @param {string} id The ID of the authorization code definition.
		 * @return {AuthorizationCodesSharedModelsAuthorizationCodeDefinition} OK
		 */
		AuthorizationCodeDefinitionsGetById(id: string): Observable<AuthorizationCodesSharedModelsAuthorizationCodeDefinition> {
			return this.http.get<AuthorizationCodesSharedModelsAuthorizationCodeDefinition>(this.baseUri + 'api/v2/AuthorizationCodeDefinitions/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update an authorization code definition
		 * No Documentation Found.
		 * Put api/v2/AuthorizationCodeDefinitions/{id}
		 * @param {string} id The ID of the authorization code definition.
		 * @param {AuthorizationCodesSharedModelsAuthorizationCodeDefinition} requestBody An authorization code definition.
		 * @return {void} 
		 */
		AuthorizationCodeDefinitions_PutAuthorizationCodeDefinition(id: string, requestBody: AuthorizationCodesSharedModelsAuthorizationCodeDefinition): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/AuthorizationCodeDefinitions/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get authorization codes.
		 * Additional searches: validationParameters[Name]=Value and dataParameters[Name]=Value. These can be used to search for authorization codes that have been generated using specified values for data or validation parameters.
		 * Get api/v2/AuthorizationCodes
		 * @param {string} code Optional. If provided, searches for entities with the provided authorization code.
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} definitionID Optional. If specified, filters codes by definition id.
		 * @param {number} createdByUserID Optional. If specified, filters codes to those created by the given User ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} deletedByUserID Optional. If specified, filters codes to those deleted by the given User ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} includeDeleted Optional. Whether to include deleted codes. 'False' by default.
		 * @return {APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCode_} OK
		 */
		AuthorizationCodes_GetAuthorizationCodes(code: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, definitionID: string | null | undefined, createdByUserID: number | null | undefined, deletedByUserID: number | null | undefined, includeDeleted: boolean | null | undefined): Observable<APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCode_> {
			return this.http.get<APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationCode_>(this.baseUri + 'api/v2/AuthorizationCodes?code=' + (code == null ? '' : encodeURIComponent(code)) + '&limit=' + limit + '&offset=' + offset + '&definitionID=' + (definitionID == null ? '' : encodeURIComponent(definitionID)) + '&createdByUserID=' + createdByUserID + '&deletedByUserID=' + deletedByUserID + '&includeDeleted=' + includeDeleted, {});
		}

		/**
		 * Generates an authorization code using the provided definition and parameters.
		 * No Documentation Found.
		 * Post api/v2/AuthorizationCodes
		 * @param {AuthorizationCodesSharedModelsAuthorizationCode} requestBody The model from which to generate an authorization code.
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		AuthorizationCodes_PostAuthorizationCode(requestBody: AuthorizationCodesSharedModelsAuthorizationCode): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/AuthorizationCodes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Hide an authorization code.
		 * No Documentation Found.
		 * Delete api/v2/AuthorizationCodes/{id}
		 * @param {number} id The id of the authorization code.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		AuthorizationCodes_DeleteAuthorizationCode(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/AuthorizationCodes/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an authorization code by its ID.
		 * No Documentation Found.
		 * Get api/v2/AuthorizationCodes/{id}
		 * @param {number} id The id of the authorization code.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {AuthorizationCodesSharedModelsAuthorizationCode} OK
		 */
		AuthorizationCodes_GetAuthorizationCode(id: number): Observable<AuthorizationCodesSharedModelsAuthorizationCode> {
			return this.http.get<AuthorizationCodesSharedModelsAuthorizationCode>(this.baseUri + 'api/v2/AuthorizationCodes/' + id, {});
		}

		/**
		 * Update an authorization code.
		 * No Documentation Found.
		 * Put api/v2/AuthorizationCodes/{id}
		 * @param {number} id The id of the authorization code.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {AuthorizationCodesSharedModelsAuthorizationCode} requestBody The model from which to update an authorization code.
		 * @return {void} 
		 */
		AuthorizationCodes_PutAuthorizationCode(id: number, requestBody: AuthorizationCodesSharedModelsAuthorizationCode): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/AuthorizationCodes/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get contact information for an authorization code.
		 * No Documentation Found.
		 * Get api/v2/AuthorizationCodes/{id}/ContactInformation
		 * @param {number} id The id of the authorization code.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {AuthorizationCodesSharedModelsAuthorizationContactInformation} OK
		 */
		AuthorizationCodes_GetContactInformation(id: number): Observable<AuthorizationCodesSharedModelsAuthorizationContactInformation> {
			return this.http.get<AuthorizationCodesSharedModelsAuthorizationContactInformation>(this.baseUri + 'api/v2/AuthorizationCodes/' + id + '/ContactInformation', {});
		}

		/**
		 * No Documentation Found.
		 * No Documentation Found.
		 * Get api/v2/AuthorizationCodes/{id}/Validate
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {AuthorizationCodesSharedModelsCodeValidationModel} OK
		 */
		AuthorizationCodes_ValidateAuthorizationCode(id: number): Observable<AuthorizationCodesSharedModelsCodeValidationModel> {
			return this.http.get<AuthorizationCodesSharedModelsCodeValidationModel>(this.baseUri + 'api/v2/AuthorizationCodes/' + id + '/Validate', {});
		}

		/**
		 * Get contact information for authorization codes.
		 * No Documentation Found.
		 * Get api/v2/AuthorizationContactInformation
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} authorizationCode Optional. Search by authorization code.
		 * @param {Date} afterDate Optional. Include only data for authorization codes created after a provided date.
		 * @param {Date} beforeDate Optional. Include only data for authorization codes created before a provided date.
		 * @param {string} dealerCode Optional. Search by dealer code.
		 * @return {APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationContactInformation_} OK
		 */
		AuthorizationContactInformation_Get(limit: number | null | undefined, offset: number | null | undefined, authorizationCode: string | null | undefined, afterDate: Date | null | undefined, beforeDate: Date | null | undefined, dealerCode: string | null | undefined): Observable<APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationContactInformation_> {
			return this.http.get<APIIPagedResponse_AuthorizationCodesSharedModelsAuthorizationContactInformation_>(this.baseUri + 'api/v2/AuthorizationContactInformation?limit=' + limit + '&offset=' + offset + '&authorizationCode=' + (authorizationCode == null ? '' : encodeURIComponent(authorizationCode)) + '&afterDate=' + afterDate?.toISOString() + '&beforeDate=' + beforeDate?.toISOString() + '&dealerCode=' + (dealerCode == null ? '' : encodeURIComponent(dealerCode)), {});
		}

		/**
		 * Add contact information for authorization code.
		 * No Documentation Found.
		 * Post api/v2/AuthorizationContactInformation
		 * @param {AuthorizationCodesSharedModelsAuthorizationContactInformation} requestBody A contact information.
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		AuthorizationContactInformation_Post(requestBody: AuthorizationCodesSharedModelsAuthorizationContactInformation): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/AuthorizationContactInformation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of Brands.
		 * No Documentation Found.
		 * Get api/v2/Brands
		 * @return {Array<string>} OK
		 */
		Brands_Brands(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v2/Brands', {});
		}

		/**
		 * Get the list of bundles.
		 * No Documentation Found.
		 * Get api/v2/Bundles
		 * @param {string} UpdateGroupID Optional. Filter by UpdateGroup ID.
		 * @param {boolean} Active Optional. Filter by active status.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} BundleNumber Optional. If provided, filters by BundleNumber.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsBundle_} OK
		 */
		Bundles_GetBundles(UpdateGroupID: string | null | undefined, Active: boolean | null | undefined, limit: number | null | undefined, offset: number | null | undefined, BundleNumber: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsBundle_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsBundle_>(this.baseUri + 'api/v2/Bundles?UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&Active=' + Active + '&limit=' + limit + '&offset=' + offset + '&BundleNumber=' + BundleNumber, {});
		}

		/**
		 * Add a Bundle to the Update System.
		 * No Documentation Found.
		 * Post api/v2/Bundles
		 * @param {UpdateSystemModelsBundle} requestBody The bundle to add
		 * @return {string} OK
		 */
		Bundles_PostBundle(requestBody: UpdateSystemModelsBundle): Observable<string> {
			return this.http.post(this.baseUri + 'api/v2/Bundles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Delete a Bundle.
		 * No Documentation Found.
		 * Delete api/v2/Bundles/{ID}
		 * @param {string} ID The Bundle ID to Delete
		 * @return {void} 
		 */
		Bundles_DeleteBundle(ID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/Bundles/' + (ID == null ? '' : encodeURIComponent(ID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific Bundle by ID.
		 * No Documentation Found.
		 * Get api/v2/Bundles/{ID}
		 * @param {string} ID The Bundle ID
		 * @return {UpdateSystemModelsBundle} OK
		 */
		Bundles_GetBundle(ID: string): Observable<UpdateSystemModelsBundle> {
			return this.http.get<UpdateSystemModelsBundle>(this.baseUri + 'api/v2/Bundles/' + (ID == null ? '' : encodeURIComponent(ID)), {});
		}

		/**
		 * Modify a Bundle in the Update System.
		 * No Documentation Found.
		 * Put api/v2/Bundles/{ID}
		 * @param {string} ID The unique ID of the Bundle
		 * @param {UpdateSystemModelsBundle} requestBody The bundle to modify
		 * @return {void} 
		 */
		Bundles_PutBundle(ID: string, requestBody: UpdateSystemModelsBundle): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Bundles/' + (ID == null ? '' : encodeURIComponent(ID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a List of Clients in the Update System.
		 * No Documentation Found.
		 * Get api/v2/Clients
		 * @param {string} Tag Optional. Filter clients by Tag. Wildcards are supported (*).
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsClient_} OK
		 */
		Clients_Get(Tag: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsClient_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsClient_>(this.baseUri + 'api/v2/Clients?Tag=' + (Tag == null ? '' : encodeURIComponent(Tag)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get a list of Cached Files installed on the client Machine.
		 * No Documentation Found.
		 * Get api/v2/Clients/{ClientID}/CachedFiles
		 * @param {string} ClientID The ClientID of the Client
		 * @param {boolean} Expired Only Expired Files (true|false)
		 * @return {Array<string>} OK
		 */
		UpdateSystem_GetCachedFiles(ClientID: string, Expired: boolean): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v2/Clients/' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '/CachedFiles&Expired=' + Expired, {});
		}

		/**
		 * Get the package reports for a client.
		 * No Documentation Found.
		 * Get api/v2/Clients/{ClientID}/PackageReports
		 * @param {string} ClientID The Client ID
		 * @return {Array<UpdateSystemModelsPackageReport>} OK
		 */
		PackageReports_Default(ClientID: string): Observable<Array<UpdateSystemModelsPackageReport>> {
			return this.http.get<Array<UpdateSystemModelsPackageReport>>(this.baseUri + 'api/v2/Clients/' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '/PackageReports', {});
		}

		/**
		 * Submit a package report
		 * No Documentation Found.
		 * Put api/v2/Clients/{ClientID}/PackageReports
		 * @param {string} ClientID The Client ID
		 * @param {UpdateSystemModelsPackageReport} requestBody The Package Report
		 * @return {void} 
		 */
		PackageReportsPutByClientID(ClientID: string, requestBody: UpdateSystemModelsPackageReport): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Clients/' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '/PackageReports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Submit a batch of package reports
		 * No Documentation Found.
		 * Put api/v2/Clients/{ClientID}/PackageReports/Batch
		 * @param {string} ClientID The Client ID
		 * @param {Array<UpdateSystemModelsPackageReport>} requestBody The Package Reports
		 * @return {void} 
		 */
		PackageReports_Batch(ClientID: string, requestBody: Array<UpdateSystemModelsPackageReport>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Clients/' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '/PackageReports/Batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Client in the Update System.
		 * No Documentation Found.
		 * Get api/v2/Clients/{ID}
		 * @param {string} ID The Client ID
		 * @return {UpdateSystemModelsClient} OK
		 */
		ClientsGetByID(ID: string): Observable<UpdateSystemModelsClient> {
			return this.http.get<UpdateSystemModelsClient>(this.baseUri + 'api/v2/Clients/' + (ID == null ? '' : encodeURIComponent(ID)), {});
		}

		/**
		 * Update a Client.
		 * No Documentation Found.
		 * Put api/v2/Clients/{ID}
		 * @param {string} ID The Client ID
		 * @param {UpdateSystemModelsClient} requestBody Updated Client Object.
		 * @return {void} 
		 */
		Clients_Put(ID: string, requestBody: UpdateSystemModelsClient): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Clients/' + (ID == null ? '' : encodeURIComponent(ID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Client's Available Update Group Subscriptions
		 * No Documentation Found.
		 * Get api/v2/Clients/{ID}/AvailableUpdateGroupSubscriptions
		 * @param {string} ID The Client ID
		 * @param {string} UpdateGroupID Optional. Filter by Update Group.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsAvailableUpdateGroupSubscription_} OK
		 */
		Clients_GetAvailableSubscriptions(ID: string, UpdateGroupID: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsAvailableUpdateGroupSubscription_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsAvailableUpdateGroupSubscription_>(this.baseUri + 'api/v2/Clients/' + (ID == null ? '' : encodeURIComponent(ID)) + '/AvailableUpdateGroupSubscriptions&UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get a Client's Current Update Group Subscriptions
		 * No Documentation Found.
		 * Get api/v2/Clients/{ID}/UpdateGroupSubscriptions
		 * @param {string} ID The Client ID
		 * @param {string} UpdateGroupID Optional. Filter by Update Group.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsUpdateGroupSubscription_} OK
		 */
		Clients_GetSubscriptions(ID: string, UpdateGroupID: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsUpdateGroupSubscription_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsUpdateGroupSubscription_>(this.baseUri + 'api/v2/Clients/' + (ID == null ? '' : encodeURIComponent(ID)) + '/UpdateGroupSubscriptions&UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * No Documentation Found.
		 * No Documentation Found.
		 * Put api/v2/ContentDefinitionAttributes/Batch
		 * @return {void} 
		 */
		ContentDefinitions_PutContentDefinitionAttributes(requestBody: Array<ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/ContentDefinitionAttributes/Batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an Attribute from a ContentDefinition
		 * No Documentation Found.
		 * Delete api/v2/ContentDefinitionAttributes/{contentDefinitionAttributeID}
		 * @param {number} contentDefinitionAttributeID The ID of the Attribute to remove.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		ContentDefinitions_DeleteContentDefinitionAttribute(contentDefinitionAttributeID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/ContentDefinitionAttributes/' + contentDefinitionAttributeID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an Attribute for a ContentDefinition
		 * No Documentation Found.
		 * Put api/v2/ContentDefinitionAttributes/{contentDefinitionAttributeID}
		 * @param {number} contentDefinitionAttributeID The ID of the Attribute to update.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute} requestBody The Attribute to update.
		 * @return {void} 
		 */
		ContentDefinitions_PutContentDefinitionAttributeAsync(contentDefinitionAttributeID: number, requestBody: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/ContentDefinitionAttributes/' + contentDefinitionAttributeID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ContentDefinitions
		 * Gets a collection of ContentDefinitions. When successful, the response is a PagedResponse of ContentDefinitions.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/ContentDefinitions
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} userID Optional. Filter by UserID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} includeAttributes Names of Attributes to include when retrieving this definition. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.
		 * @param {string} name Optional. Filter by Name. Supports beginning and ending wildcard (*).
		 * @param {number} typeID Optional. Filter by TypeID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} packageTypeID Optional. Filter by PackageTypeID.
		 * @return {APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinition_} OK
		 */
		ContentDefinitions_GetContentDefinitions(limit: number | null | undefined, offset: number | null | undefined, userID: number | null | undefined, includeAttributes: string | null | undefined, name: string | null | undefined, typeID: number | null | undefined, packageTypeID: string | null | undefined): Observable<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinition_> {
			return this.http.get<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinition_>(this.baseUri + 'api/v2/ContentDefinitions?limit=' + limit + '&offset=' + offset + '&userID=' + userID + '&includeAttributes=' + (includeAttributes == null ? '' : encodeURIComponent(includeAttributes)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&typeID=' + typeID + '&packageTypeID=' + (packageTypeID == null ? '' : encodeURIComponent(packageTypeID)), {});
		}

		/**
		 * Create a ContentDefinition
		 * Creates a ContentDefinition.  The body of the POST is the ContentDefinition to create.
		 * The ContentDefinitionID will be assigned on creation of the Job.  When successful, the response
		 * is the JobID.  If unsuccessful, an appropriate ApiError is returned.
		 * Post api/v2/ContentDefinitions
		 * @param {ContentSubmissionSharedBusinessEntitiesContentDefinition} requestBody The ContentDefinition to create.
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentDefinitions_PostContentDefinition(requestBody: ContentSubmissionSharedBusinessEntitiesContentDefinition): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/ContentDefinitions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a ContentDefinition
		 * Deletes an ContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/ContentDefinitions/{contentDefinitionID}
		 * @param {number} contentDefinitionID The ID of the ContentDefinition to delete
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		ContentDefinitions_DeleteContentDefinition(contentDefinitionID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/ContentDefinitions/' + contentDefinitionID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a ContentDefinition by ID
		 * Gets a ContentDefinition by ID. When successful, the response is the requested ContentDefinition.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/ContentDefinitions/{contentDefinitionID}
		 * @param {number} contentDefinitionID The ID of the ContentDefinition to get.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} includeAttributes Names of Attributes to include when retrieving this definition. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.
		 * @return {ContentSubmissionSharedBusinessEntitiesContentDefinition} OK
		 */
		ContentDefinitions_GetContentDefinition(contentDefinitionID: number, includeAttributes: string | null | undefined): Observable<ContentSubmissionSharedBusinessEntitiesContentDefinition> {
			return this.http.get<ContentSubmissionSharedBusinessEntitiesContentDefinition>(this.baseUri + 'api/v2/ContentDefinitions/' + contentDefinitionID + '?includeAttributes=' + (includeAttributes == null ? '' : encodeURIComponent(includeAttributes)), {});
		}

		/**
		 * Update a ContentDefinition
		 * Updates a ContentDefinition.  The body of the PUT is the updated ContentDefinition.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/ContentDefinitions/{contentDefinitionID}
		 * @param {number} contentDefinitionID The ID of the ContentDefinition to update
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ContentSubmissionSharedBusinessEntitiesContentDefinition} requestBody The updated ContentDefinition
		 * @return {void} 
		 */
		ContentDefinitions_PutContentDefinition(contentDefinitionID: number, requestBody: ContentSubmissionSharedBusinessEntitiesContentDefinition): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/ContentDefinitions/' + contentDefinitionID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Attributes for a ContentDefinition
		 * No Documentation Found.
		 * Get api/v2/ContentDefinitions/{contentDefinitionID}/Attributes
		 * @param {number} contentDefinitionID The ID of the ContentDefinition.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} name Optional. Filter the attributes by Name.
		 * @return {APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute_} OK
		 */
		ContentDefinitions_GetContentDefinitionAttributes(contentDefinitionID: number, limit: number | null | undefined, offset: number | null | undefined, name: string | null | undefined): Observable<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute_> {
			return this.http.get<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute_>(this.baseUri + 'api/v2/ContentDefinitions/' + contentDefinitionID + '/Attributes?limit=' + limit + '&offset=' + offset + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Add an Attribute to a ContentDefinition
		 * No Documentation Found.
		 * Post api/v2/ContentDefinitions/{contentDefinitionID}/Attributes
		 * @param {number} contentDefinitionID The ID of the ContentDefinition
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute} requestBody The Attribute to add.
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentDefinitions_PostContentDefinitionAttribute(contentDefinitionID: number, requestBody: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/ContentDefinitions/' + contentDefinitionID + '/Attributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * No Documentation Found.
		 * No Documentation Found.
		 * Post api/v2/ContentDefinitions/{contentDefinitionID}/Attributes/Batch
		 * @param {number} contentDefinitionID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		ContentDefinitions_PostContentDefinitionAttributes(contentDefinitionID: number, requestBody: Array<ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/ContentDefinitions/' + contentDefinitionID + '/Attributes/Batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ContentReleaseVersion
		 * Gets a collection of ContentReleaseVersion. When successful, the response is a PagedResponse of ContentReleaseVersion.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/ContentReleases
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} deleted Optional. Filter by deleted.
		 * @param {number} releaseID Optional. Filter by releaseID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} userId Optional. Filter by UserID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} contentDefinitionID Optional. Filter by ContentDefinitionID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} version Optional. Filter by Version.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentReleaseVersion_} OK
		 */
		ContentRelease_GetContentReleaseVersion(limit: number | null | undefined, offset: number | null | undefined, deleted: boolean | null | undefined, releaseID: number | null | undefined, userId: number | null | undefined, contentDefinitionID: number | null | undefined, version: number | null | undefined): Observable<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentReleaseVersion_> {
			return this.http.get<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentReleaseVersion_>(this.baseUri + 'api/v2/ContentReleases?limit=' + limit + '&offset=' + offset + '&deleted=' + deleted + '&releaseID=' + releaseID + '&userId=' + userId + '&contentDefinitionID=' + contentDefinitionID + '&version=' + version, {});
		}

		/**
		 * Create a ContentReleaseVersion
		 * Creates a ContentReleaseVersion.  The body of the POST is the ContentReleaseVersion to create.
		 * The ContentReleaseId will be assigned on creation of the Job.  When successful, the response
		 * is the contentReleaseId.  If unsuccessful, an appropriate ApiError is returned.
		 * Post api/v2/ContentReleases
		 * @param {ContentSubmissionSharedBusinessEntitiesContentReleaseVersion} requestBody The ContentReleaseVersion to create.
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentRelease_PostContentRelease(requestBody: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/ContentReleases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a ContentReleaseVersion
		 * Deletes an ContentReleaseVersion. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/ContentReleases/{ContentReleaseId}
		 * @param {number} ContentReleaseId The ID of the ContentReleaseVersion to delete
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		ContentRelease_DeleteContentReleaseVersionn(ContentReleaseId: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/ContentReleases/' + ContentReleaseId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Content Release Version by ID
		 * Gets a ContentReleaseVersion by ID. When successful, the response is the requested ContentReleaseVersion.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/ContentReleases/{ContentReleaseId}
		 * @param {number} ContentReleaseId The ID of the ContentReleaseVersion to get.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ContentSubmissionSharedBusinessEntitiesContentReleaseVersion} OK
		 */
		ContentReleaseGetByContentReleaseId(ContentReleaseId: number): Observable<ContentSubmissionSharedBusinessEntitiesContentReleaseVersion> {
			return this.http.get<ContentSubmissionSharedBusinessEntitiesContentReleaseVersion>(this.baseUri + 'api/v2/ContentReleases/' + ContentReleaseId, {});
		}

		/**
		 * Update a ContentReleaseVersion
		 * Updates a ContentReleaseVersion.  The body of the PUT is the updated ContentReleaseVersion.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/ContentReleases/{ContentReleaseId}
		 * @param {number} ContentReleaseId The ID of the ContentReleaseVersion to update
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ContentSubmissionSharedBusinessEntitiesContentReleaseVersion} requestBody The updated ContentReleaseVersion
		 * @return {void} 
		 */
		ContentRelease_PutContentDefinition(ContentReleaseId: number, requestBody: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/ContentReleases/' + ContentReleaseId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * No Documentation Found.
		 * No Documentation Found.
		 * Put api/v2/ContentSubmissionAttributes/Batch
		 * @return {void} 
		 */
		ContentSubmissions_PutContentSubmissionAttributes(requestBody: Array<ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/ContentSubmissionAttributes/Batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an Attribute from a ContentSubmission
		 * No Documentation Found.
		 * Delete api/v2/ContentSubmissionAttributes/{contentSubmissionAttributeID}
		 * @param {number} contentSubmissionAttributeID The ID of the Attribute to remove.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		ContentSubmissions_DeleteContentSubmissionAttribute(contentSubmissionAttributeID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/ContentSubmissionAttributes/' + contentSubmissionAttributeID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an Attribute for a ContentSubmission
		 * No Documentation Found.
		 * Put api/v2/ContentSubmissionAttributes/{contentSubmissionAttributeID}
		 * @param {number} contentSubmissionAttributeID The ID of the Attribute to update.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute} requestBody The Attribute to update.
		 * @return {void} 
		 */
		ContentSubmissions_PutContentSubmissionAttributeAsync(contentSubmissionAttributeID: number, requestBody: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/ContentSubmissionAttributes/' + contentSubmissionAttributeID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns available Content Submission Types.
		 * No Documentation Found.
		 * Get api/v2/ContentSubmissionTypes
		 * @return {Array<ContentSubmissionSharedBusinessEntitiesContentSubmissionType>} OK
		 */
		ContentSubmissionTypes_GetContentSubmissionTypes(enabled: boolean | null | undefined): Observable<Array<ContentSubmissionSharedBusinessEntitiesContentSubmissionType>> {
			return this.http.get<Array<ContentSubmissionSharedBusinessEntitiesContentSubmissionType>>(this.baseUri + 'api/v2/ContentSubmissionTypes?enabled=' + enabled, {});
		}

		/**
		 * Add a Content Submission Type
		 * No Documentation Found.
		 * Post api/v2/ContentSubmissionTypes
		 * @param {ContentSubmissionSharedBusinessEntitiesContentSubmissionType} requestBody The Content Submission Type
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentSubmissionTypes_PostContentSubmissionType(requestBody: ContentSubmissionSharedBusinessEntitiesContentSubmissionType): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/ContentSubmissionTypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a Content Submission Type
		 * No Documentation Found.
		 * Delete api/v2/ContentSubmissionTypes/{id}
		 * @param {number} id The ID of the Content Submission Type
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		ContentSubmissionTypes_DeleteContentSubmissionType(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/ContentSubmissionTypes/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a Content Submission Type by its ID.
		 * No Documentation Found.
		 * Get api/v2/ContentSubmissionTypes/{id}
		 * @param {number} id The ID of the Content Submission Type
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ContentSubmissionSharedBusinessEntitiesContentSubmissionType} OK
		 */
		ContentSubmissionTypes_GetContentSubmissionType(id: number): Observable<ContentSubmissionSharedBusinessEntitiesContentSubmissionType> {
			return this.http.get<ContentSubmissionSharedBusinessEntitiesContentSubmissionType>(this.baseUri + 'api/v2/ContentSubmissionTypes/' + id, {});
		}

		/**
		 * Update a Content Submission Type
		 * No Documentation Found.
		 * Put api/v2/ContentSubmissionTypes/{id}
		 * @param {number} id The ID of the Content Submission Type
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ContentSubmissionSharedBusinessEntitiesContentSubmissionType} requestBody The Content Submission Type
		 * @return {void} 
		 */
		ContentSubmissionTypes_PutContentSubmissionType(id: number, requestBody: ContentSubmissionSharedBusinessEntitiesContentSubmissionType): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/ContentSubmissionTypes/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ContentSubmissions
		 * Gets a collection of ContentSubmissions. When successful, the response is a PagedResponse of ContentSubmissions. Additional searches: attributes[Name]=Value. This can be used to search for submissions that have the specified values for attributes. Beginning and ending wildcard (*) supported for value.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/ContentSubmissions
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} userID Optional. Filter by UserID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} contentDefinitionID Optional. Filter by ContentDefinitionID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} includeAttributes Names of Attributes to include when retrieving this submission. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.
		 * @param {number} releaseID Optional. Filter the submissions by whether they are part of the Release with the specified Release ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} typeID Optional. Filter submissions by their ContentDefinition's Type ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} version Optional. Filter submissions by their Version.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} includeDefinition Optional. If true, includes the ContentDefinition for each submission.
		 * @return {APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmission_} OK
		 */
		ContentSubmissions_GetContentSubmissions(limit: number | null | undefined, offset: number | null | undefined, userID: number | null | undefined, contentDefinitionID: number | null | undefined, includeAttributes: string | null | undefined, releaseID: number | null | undefined, typeID: number | null | undefined, version: number | null | undefined, includeDefinition: boolean | null | undefined): Observable<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmission_> {
			return this.http.get<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmission_>(this.baseUri + 'api/v2/ContentSubmissions?limit=' + limit + '&offset=' + offset + '&userID=' + userID + '&contentDefinitionID=' + contentDefinitionID + '&includeAttributes=' + (includeAttributes == null ? '' : encodeURIComponent(includeAttributes)) + '&releaseID=' + releaseID + '&typeID=' + typeID + '&version=' + version + '&includeDefinition=' + includeDefinition, {});
		}

		/**
		 * Create a ContentSubmission
		 * Creates a ContentSubmission.  The body of the POST is the ContentSubmission to create.
		 * The ContentSubmissionID will be assigned on creation of the Job.  When successful, the response
		 * is the ContentSubmissionID.  If unsuccessful, an appropriate ApiError is returned.
		 * Post api/v2/ContentSubmissions
		 * @param {ContentSubmissionSharedBusinessEntitiesContentSubmission} requestBody The ContentSubmission to create.
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentSubmissions_PostContentSubmission(requestBody: ContentSubmissionSharedBusinessEntitiesContentSubmission): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/ContentSubmissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a ContentSubmission
		 * Deletes an ContentSubmission. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/ContentSubmissions/{contentSubmissionID}
		 * @param {number} contentSubmissionID The ID of the ContentSubmission to delete
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		ContentSubmissions_DeleteContentSubmission(contentSubmissionID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/ContentSubmissions/' + contentSubmissionID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a ContentSubmission by ID
		 * Gets a ContentSubmission by ID. When successful, the response is the requested ContentSubmission.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/ContentSubmissions/{contentSubmissionID}
		 * @param {number} contentSubmissionID The ID of the ContentSubmission to get.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} includeAttributes Names of Attributes to include when retrieving this submission. This should be a comma-separated list.
		 * @return {ContentSubmissionSharedBusinessEntitiesContentSubmission} OK
		 */
		ContentSubmissions_GetContentSubmission(contentSubmissionID: number, includeAttributes: string | null | undefined): Observable<ContentSubmissionSharedBusinessEntitiesContentSubmission> {
			return this.http.get<ContentSubmissionSharedBusinessEntitiesContentSubmission>(this.baseUri + 'api/v2/ContentSubmissions/' + contentSubmissionID + '?includeAttributes=' + (includeAttributes == null ? '' : encodeURIComponent(includeAttributes)), {});
		}

		/**
		 * Update a ContentSubmission
		 * Updates a ContentSubmission.  The body of the PUT is the updated ContentSubmission.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/ContentSubmissions/{contentSubmissionID}
		 * @param {number} contentSubmissionID The ID of the ContentSubmission to update
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ContentSubmissionSharedBusinessEntitiesContentSubmission} requestBody The updated ContentSubmission
		 * @return {void} 
		 */
		ContentSubmissions_PutContentSubmission(contentSubmissionID: number, requestBody: ContentSubmissionSharedBusinessEntitiesContentSubmission): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/ContentSubmissions/' + contentSubmissionID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Attributes for a ContentSubmission
		 * No Documentation Found.
		 * Get api/v2/ContentSubmissions/{contentSubmissionID}/Attributes
		 * @param {number} contentSubmissionID The ID of the ContentSubmission.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} name Optional. Filter the attributes by Name.
		 * @return {APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute_} OK
		 */
		ContentSubmissions_GetContentSubmissionAttributes(contentSubmissionID: number, limit: number | null | undefined, offset: number | null | undefined, name: string | null | undefined): Observable<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute_> {
			return this.http.get<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute_>(this.baseUri + 'api/v2/ContentSubmissions/' + contentSubmissionID + '/Attributes?limit=' + limit + '&offset=' + offset + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Add an Attribute to a ContentSubmission
		 * No Documentation Found.
		 * Post api/v2/ContentSubmissions/{contentSubmissionID}/Attributes
		 * @param {number} contentSubmissionID The ID of the ContentSubmission
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute} requestBody The Attribute to add.
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ContentSubmissions_PostContentSubmissionAttribute(contentSubmissionID: number, requestBody: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/ContentSubmissions/' + contentSubmissionID + '/Attributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * No Documentation Found.
		 * No Documentation Found.
		 * Post api/v2/ContentSubmissions/{contentSubmissionID}/Attributes/Batch
		 * @param {number} contentSubmissionID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		ContentSubmissions_PostContentSubmissionAttributes(contentSubmissionID: number, requestBody: Array<ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/ContentSubmissions/' + contentSubmissionID + '/Attributes/Batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the status of a ContentSubmission
		 * No Documentation Found.
		 * Get api/v2/ContentSubmissions/{contentSubmissionID}/Status
		 * @param {number} contentSubmissionID The ID of the ContentSubmission to get.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} includeActivityRunDetails True to include all status details if JobRun. Defaults to false
		 * @return {BuildSystemSharedInterfacesIJobRun} OK
		 */
		ContentSubmissions_GetContentSubmissionStatus(contentSubmissionID: number, includeActivityRunDetails: boolean | null | undefined): Observable<BuildSystemSharedInterfacesIJobRun> {
			return this.http.get<BuildSystemSharedInterfacesIJobRun>(this.baseUri + 'api/v2/ContentSubmissions/' + contentSubmissionID + '/Status?includeActivityRunDetails=' + includeActivityRunDetails, {});
		}

		/**
		 * Get a total count of dealers per country
		 * No Documentation Found.
		 * Get api/v2/DealerByCountry
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_DealerDBModelsDealersPerCountry_} OK
		 */
		DealerByCountry_GetCountries(limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_DealerDBModelsDealersPerCountry_> {
			return this.http.get<APIPagedResponse_DealerDBModelsDealersPerCountry_>(this.baseUri + 'api/v2/DealerByCountry?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get a list of dealers.
		 * No Documentation Found.
		 * Get api/v2/Dealers
		 * @param {string} Brand The brand to filter by.
		 * @param {string} ShippingCountry The country to filter by.
		 * @param {string} DealerName The partial Dealer Name to filter by. Wildcard supported (*).
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_DealerDBModelsDealer_} OK
		 */
		Dealers_GetDealers(Brand: string | null | undefined, ShippingCountry: string | null | undefined, DealerName: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_DealerDBModelsDealer_> {
			return this.http.get<APIPagedResponse_DealerDBModelsDealer_>(this.baseUri + 'api/v2/Dealers?Brand=' + (Brand == null ? '' : encodeURIComponent(Brand)) + '&ShippingCountry=' + (ShippingCountry == null ? '' : encodeURIComponent(ShippingCountry)) + '&DealerName=' + (DealerName == null ? '' : encodeURIComponent(DealerName)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Lookup a dealer using a dealer code.
		 * No Documentation Found.
		 * Get api/v2/Dealers/{DealerCode}
		 * @param {string} DealerCode The Dealer Code to Search for
		 * @return {DealerDBModelsDealer} OK
		 */
		Dealers_GetDealerbyDealerCode(DealerCode: string): Observable<DealerDBModelsDealer> {
			return this.http.get<DealerDBModelsDealer>(this.baseUri + 'api/v2/Dealers/' + (DealerCode == null ? '' : encodeURIComponent(DealerCode)), {});
		}

		/**
		 * Get a paged response of file metadata.
		 * No Documentation Found.
		 * Get api/v2/Files
		 * @param {boolean} includeDeleted Indicates whether to include files marked as removed.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIIPagedResponse_GlobalResourcesSharedModelsFileDownload_} OK
		 */
		Files_GetFiles(includeDeleted: boolean | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIIPagedResponse_GlobalResourcesSharedModelsFileDownload_> {
			return this.http.get<APIIPagedResponse_GlobalResourcesSharedModelsFileDownload_>(this.baseUri + 'api/v2/Files?includeDeleted=' + includeDeleted + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Create the metadata for a file before uploading. The State of the File should be 'Created'.
		 * No Documentation Found.
		 * Post api/v2/Files
		 * @param {GlobalResourcesSharedModelsFileDownload} requestBody The file's metadata.
		 * @return {string} OK
		 */
		Files_PostFile(requestBody: GlobalResourcesSharedModelsFileDownload): Observable<string> {
			return this.http.post(this.baseUri + 'api/v2/Files', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Mark a file as 'Removed'. Disables download of the file and hides metadata from GET all method
		 * No Documentation Found.
		 * Delete api/v2/Files/{ID}
		 * @param {string} ID The file's id.
		 * @return {void} 
		 */
		Files_DeleteFile(ID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/Files/' + (ID == null ? '' : encodeURIComponent(ID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a file's metadata.
		 * No Documentation Found.
		 * Get api/v2/Files/{ID}
		 * @return {GlobalResourcesSharedModelsFileDownload} OK
		 */
		Files_GetFile(ID: string): Observable<GlobalResourcesSharedModelsFileDownload> {
			return this.http.get<GlobalResourcesSharedModelsFileDownload>(this.baseUri + 'api/v2/Files/' + (ID == null ? '' : encodeURIComponent(ID)), {});
		}

		/**
		 * Update the metadata for a file. Size may not be modified by the client.
		 * Update the metadata for a file. Size may not be modified by the client.
		 * Set status to 'Available' to publish a file. The file must be uploaded.
		 * Set status to 'Created' to reset a file's contents and re-upload.
		 * A file may only be 'Removed' by the DELETE method.
		 * Put api/v2/Files/{ID}
		 * @param {string} ID The file's id
		 * @param {GlobalResourcesSharedModelsFileDownload} requestBody The file's metadata
		 * @return {void} 
		 */
		Files_PutFile(ID: string, requestBody: GlobalResourcesSharedModelsFileDownload): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Files/' + (ID == null ? '' : encodeURIComponent(ID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Download the contents of a file. The current State of the File should be 'Available'.
		 * No Documentation Found.
		 * Get api/v2/Files/{ID}/FileContents
		 * @param {string} ID The file's metadata.
		 * @return {SystemObject} OK
		 */
		Files_GetFileContents(ID: string): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'api/v2/Files/' + (ID == null ? '' : encodeURIComponent(ID)) + '/FileContents', {});
		}

		/**
		 * Upload the contents of a file. The current State of the File should be 'Created'.
		 * No Documentation Found.
		 * Put api/v2/Files/{ID}/FileContents
		 * @param {string} ID The file's metadata.
		 * @return {SystemObject} OK
		 */
		Files_PutFileContents(ID: string): Observable<SystemObject> {
			return this.http.put<SystemObject>(this.baseUri + 'api/v2/Files/' + (ID == null ? '' : encodeURIComponent(ID)) + '/FileContents', null, {});
		}

		/**
		 * Get a paged response of file metadata.
		 * No Documentation Found.
		 * Get api/v2/GlobalImageCategories
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIIPagedResponse_GlobalResourcesSharedModelsGlobalImageCategory_} OK
		 */
		GlobalImageCategories_GetFiles(limit: number | null | undefined, offset: number | null | undefined): Observable<APIIPagedResponse_GlobalResourcesSharedModelsGlobalImageCategory_> {
			return this.http.get<APIIPagedResponse_GlobalResourcesSharedModelsGlobalImageCategory_>(this.baseUri + 'api/v2/GlobalImageCategories?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Create the metadata for a file before uploading. The State should be 'Created'.
		 * No Documentation Found.
		 * Post api/v2/GlobalImageCategories
		 * @param {GlobalResourcesSharedModelsGlobalImageCategory} requestBody The file's metadata.
		 * @return {string} OK
		 */
		GlobalImageCategories_PostFile(requestBody: GlobalResourcesSharedModelsGlobalImageCategory): Observable<string> {
			return this.http.post(this.baseUri + 'api/v2/GlobalImageCategories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Gets a file's metadata.
		 * No Documentation Found.
		 * Get api/v2/GlobalImageCategories/{ID}
		 * @param {string} ID The file's id.
		 * @return {GlobalResourcesSharedModelsGlobalImageCategory} OK
		 */
		GlobalImageCategories_GetFile(ID: string): Observable<GlobalResourcesSharedModelsGlobalImageCategory> {
			return this.http.get<GlobalResourcesSharedModelsGlobalImageCategory>(this.baseUri + 'api/v2/GlobalImageCategories/' + (ID == null ? '' : encodeURIComponent(ID)), {});
		}

		/**
		 * Get a paged response of GlobalImage.
		 * No Documentation Found.
		 * Get api/v2/GlobalImages
		 * @param {string} search Optional. Searches for matching global images with the matching Category Name, Publisher or Description
		 * @param {boolean} includeDeleted Indicates whether to include GlobalImages marked as removed.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIIPagedResponse_GlobalResourcesSharedModelsGlobalImage_} OK
		 */
		GlobalImages_GetGlobalImages(search: string | null | undefined, categoryId: string | null | undefined, publisher: string | null | undefined, includeDeleted: boolean | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIIPagedResponse_GlobalResourcesSharedModelsGlobalImage_> {
			return this.http.get<APIIPagedResponse_GlobalResourcesSharedModelsGlobalImage_>(this.baseUri + 'api/v2/GlobalImages?search=' + (search == null ? '' : encodeURIComponent(search)) + '&categoryId=' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '&publisher=' + (publisher == null ? '' : encodeURIComponent(publisher)) + '&includeDeleted=' + includeDeleted + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Create the metadata for a GlobalImage before uploading. The State should be 'Created'.
		 * No Documentation Found.
		 * Post api/v2/GlobalImages
		 * @param {boolean} overridePublisherOrDate Whether to set the publisher and date to the provided values.
		 * @param {GlobalResourcesSharedModelsGlobalImage} requestBody The file's metadata.
		 * @return {string} OK
		 */
		GlobalImages_PostGlobalImage(overridePublisherOrDate: boolean | null | undefined, requestBody: GlobalResourcesSharedModelsGlobalImage): Observable<string> {
			return this.http.post(this.baseUri + 'api/v2/GlobalImages?overridePublisherOrDate=' + overridePublisherOrDate, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Mark a file as 'Removed'. Disables download of the image and hides metadata from GET all method
		 * No Documentation Found.
		 * Delete api/v2/GlobalImages/{ID}
		 * @param {string} ID The GlobalImage's id.
		 * @return {void} 
		 */
		GlobalImages_DeleteFile(ID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/GlobalImages/' + (ID == null ? '' : encodeURIComponent(ID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a GlobalImage's metadata.
		 * No Documentation Found.
		 * Get api/v2/GlobalImages/{ID}
		 * @param {string} ID The GlobalImage's id.
		 * @return {GlobalResourcesSharedModelsGlobalImage} OK
		 */
		GlobalImages_GetGlobalImage(ID: string): Observable<GlobalResourcesSharedModelsGlobalImage> {
			return this.http.get<GlobalResourcesSharedModelsGlobalImage>(this.baseUri + 'api/v2/GlobalImages/' + (ID == null ? '' : encodeURIComponent(ID)), {});
		}

		/**
		 * Update the metadata for an image.
		 * Update the metadata for an image. Size may not be modified by the client.
		 * Set status to 'Available' to publish an image. Both the image and thumbnail must be uploaded.
		 * Set status to 'Created' to reset an image's contents and re-upload.
		 * A file may only be 'Removed' by the DELETE method.
		 * Put api/v2/GlobalImages/{ID}
		 * @param {string} ID The GlobalImage's id.
		 * @param {boolean} overridePublisherOrDate Whether to set the publisher and date to the provided values.
		 * @param {GlobalResourcesSharedModelsGlobalImage} requestBody The GlobalImage's metadata
		 * @return {void} 
		 */
		GlobalImages_PutGlobalImage(ID: string, overridePublisherOrDate: boolean | null | undefined, requestBody: GlobalResourcesSharedModelsGlobalImage): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/GlobalImages/' + (ID == null ? '' : encodeURIComponent(ID)) + '&overridePublisherOrDate=' + overridePublisherOrDate, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Download the contents of a GlobalImage. The current State of the GlobalImage should be 'Available'.
		 * No Documentation Found.
		 * Get api/v2/GlobalImages/{ID}/ImageContents
		 * @param {string} ID The global image metadata id.
		 * @param {boolean} isFullImage Indicated whether to download the full image or the thumbnail. Defaults to 'true'.
		 * @return {SystemObject} OK
		 */
		GlobalImages_GetGlobalImageContents(ID: string, isFullImage: boolean | null | undefined): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'api/v2/GlobalImages/' + (ID == null ? '' : encodeURIComponent(ID)) + '/ImageContents&isFullImage=' + isFullImage, {});
		}

		/**
		 * Upload the contents of a GlobalImage. The current State of the File for the GlobalImage should be 'Created'.
		 * Both the image and thumbnail must be uploaded.
		 * Set isFullImage = 'True' for Full Image, isFullImage = 'False' for Thumbnail
		 * Put api/v2/GlobalImages/{ID}/ImageContents
		 * @param {string} ID The global image metadata id.
		 * @param {boolean} isFullImage Indicated whether this is the full image or the thumbnail. Defaults to 'true'.
		 * @return {SystemObject} OK
		 */
		GlobalImages_PutGlobalImageContents(ID: string, isFullImage: boolean | null | undefined): Observable<SystemObject> {
			return this.http.put<SystemObject>(this.baseUri + 'api/v2/GlobalImages/' + (ID == null ? '' : encodeURIComponent(ID)) + '/ImageContents&isFullImage=' + isFullImage, null, {});
		}

		/**
		 * Get a list of the languages for which translations are supported. Returns a PagedResponse of Language objects.
		 * No Documentation Found.
		 * Get api/v2/Languages
		 * @param {number} limit limit the number of Language objects returned. Optional (defaults to 10).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset the number of Language objects to skip. Optional (defaults to 0).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} includeDeleted whether to include languages marked as deleted. Defaults to false
		 * @return {APIIPagedResponse_GlobalResourcesSharedModelsLanguage_} OK
		 */
		Languages_GetLanguages(limit: number | null | undefined, offset: number | null | undefined, includeDeleted: boolean | null | undefined): Observable<APIIPagedResponse_GlobalResourcesSharedModelsLanguage_> {
			return this.http.get<APIIPagedResponse_GlobalResourcesSharedModelsLanguage_>(this.baseUri + 'api/v2/Languages?limit=' + limit + '&offset=' + offset + '&includeDeleted=' + includeDeleted, {});
		}

		/**
		 * Add a Language to support for translations. Accepts a Language object. Returns the Id of the created object.
		 * No Documentation Found.
		 * Post api/v2/Languages
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Languages_CreateLanguage(requestBody: GlobalResourcesSharedModelsLanguage): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/Languages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a Language from those supported for translations. Marks language as deleted.
		 * No Documentation Found.
		 * Delete api/v2/Languages/{LocaleID}
		 * @param {number} LocaleID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Languages_DeleteLanguage(LocaleID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/Languages/' + LocaleID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a language by its id. Returns a Language object
		 * No Documentation Found.
		 * Get api/v2/Languages/{LocaleID}
		 * @param {number} LocaleID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GlobalResourcesSharedModelsLanguage} OK
		 */
		Languages_GetLanguage(LocaleID: number): Observable<GlobalResourcesSharedModelsLanguage> {
			return this.http.get<GlobalResourcesSharedModelsLanguage>(this.baseUri + 'api/v2/Languages/' + LocaleID, {});
		}

		/**
		 * Update a language’s description. Accepts a Language object.
		 * No Documentation Found.
		 * Put api/v2/Languages/{LocaleID}
		 * @param {number} LocaleID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Languages_UpdateLanguage(LocaleID: number, requestBody: GlobalResourcesSharedModelsLanguage): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Languages/' + LocaleID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a license activation.
		 * No Documentation Found.
		 * Post api/v2/LicenseActivations
		 * @param {DealerDBModelsLicenseActivationCreate} requestBody The data required for creating the license.
		 * @return {DealerDBModelsLicenseActivation} OK
		 */
		LicenseActivations_Post(requestBody: DealerDBModelsLicenseActivationCreate): Observable<DealerDBModelsLicenseActivation> {
			return this.http.post<DealerDBModelsLicenseActivation>(this.baseUri + 'api/v2/LicenseActivations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Register an EDT Lite with the Server
		 * No Documentation Found.
		 * Post api/v2/LicenseActivations/RegisterEDTLite
		 * @param {DealerDBModelsEDTLiteRegistration} requestBody The information required for registration.
		 * @return {boolean} OK
		 */
		LicenseActivations_PostRegisterEDTLite(requestBody: DealerDBModelsEDTLiteRegistration): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/v2/LicenseActivations/RegisterEDTLite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a license activiation.
		 * No Documentation Found.
		 * Put api/v2/LicenseActivations/{ID}
		 * @param {string} ID The ID of the license.
		 * @param {DealerDBModelsLicenseActivationUpdate} requestBody The data required for updating the license.
		 * @return {DealerDBModelsLicenseActivation} OK
		 */
		LicenseActivations_Put(ID: string, requestBody: DealerDBModelsLicenseActivationUpdate): Observable<DealerDBModelsLicenseActivation> {
			return this.http.put<DealerDBModelsLicenseActivation>(this.baseUri + 'api/v2/LicenseActivations/' + (ID == null ? '' : encodeURIComponent(ID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Confirm that the client has applied the updated license.
		 * No Documentation Found.
		 * Put api/v2/LicenseActivations/{ID}/Confirm
		 * @param {string} ID The ID of the license
		 * @param {DealerDBModelsLicenseActivationConfirm} requestBody The license data.
		 * @return {void} 
		 */
		LicenseActivations_PutConfirm(ID: string, requestBody: DealerDBModelsLicenseActivationConfirm): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/LicenseActivations/' + (ID == null ? '' : encodeURIComponent(ID)) + '/Confirm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of licenses with the specified criteria.
		 * No Documentation Found.
		 * Get api/v2/Licenses
		 * @param {string} VoucherCode Optional. Filter by VoucherCode
		 * @param {string} DealerCode Optional. Filter by DealerCode
		 * @param {Licenses_GetStatus} Status Optional. Filter by Status.  By default only active licenses will be returned.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_DealerDBModelsLicense_} OK
		 */
		Licenses_Get(VoucherCode: string | null | undefined, DealerCode: string | null | undefined, Status: Licenses_GetStatus | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_DealerDBModelsLicense_> {
			return this.http.get<APIPagedResponse_DealerDBModelsLicense_>(this.baseUri + 'api/v2/Licenses?VoucherCode=' + (VoucherCode == null ? '' : encodeURIComponent(VoucherCode)) + '&DealerCode=' + (DealerCode == null ? '' : encodeURIComponent(DealerCode)) + '&Status=' + Status + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get a license.
		 * No Documentation Found.
		 * Get api/v2/Licenses/{ID}
		 * @param {string} ID The ID of the license to get.
		 * @return {DealerDBModelsLicense} OK
		 */
		LicensesGetByID(ID: string): Observable<DealerDBModelsLicense> {
			return this.http.get<DealerDBModelsLicense>(this.baseUri + 'api/v2/Licenses/' + (ID == null ? '' : encodeURIComponent(ID)), {});
		}

		/**
		 * Get the API System logs, most recent first.
		 * No Documentation Found.
		 * Get api/v2/Logs
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_APIModelsLog_} OK
		 */
		Logs_GetLogs(limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_APIModelsLog_> {
			return this.http.get<APIPagedResponse_APIModelsLog_>(this.baseUri + 'api/v2/Logs?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Add a Log entry
		 * No Documentation Found.
		 * Post api/v2/Logs
		 * @param {string} Message Message to enter into the log
		 * @return {string} OK
		 */
		Logs_PostLog(Message: string): Observable<string> {
			return this.http.post(this.baseUri + 'api/v2/Logs?Message=' + (Message == null ? '' : encodeURIComponent(Message)), null, { responseType: 'text' });
		}

		/**
		 * Get a log by ID
		 * No Documentation Found.
		 * Get api/v2/Logs/{ID}
		 * @param {string} ID The Log ID
		 * @return {APIModelsLog} OK
		 */
		Logs_GetLog(ID: string): Observable<APIModelsLog> {
			return this.http.get<APIModelsLog>(this.baseUri + 'api/v2/Logs/' + (ID == null ? '' : encodeURIComponent(ID)), {});
		}

		/**
		 * Sends an email message.
		 * No Documentation Found.
		 * Post api/v2/Notifications
		 * @param {APIModelsNotification} requestBody The Notification Object.
		 * @return {void} 
		 */
		Notifications_PostMail(requestBody: APIModelsNotification): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/Notifications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all of the Package Types.
		 * No Documentation Found.
		 * Get api/v2/PackageTypes
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} userID Optional. The user ID to sort packageTypes by the user's access
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsPackageType_} OK
		 */
		PackageTypes_Get(limit: number | null | undefined, offset: number | null | undefined, userID: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsPackageType_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsPackageType_>(this.baseUri + 'api/v2/PackageTypes?limit=' + limit + '&offset=' + offset + '&userID=' + userID, {});
		}

		/**
		 * Add a Package Type.
		 * No Documentation Found.
		 * Post api/v2/PackageTypes
		 * @param {UpdateSystemModelsPackageType} requestBody The Package Type to add
		 * @return {string} OK
		 */
		PackageTypes_Post(requestBody: UpdateSystemModelsPackageType): Observable<string> {
			return this.http.post(this.baseUri + 'api/v2/PackageTypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Delete a Package Type.
		 * No Documentation Found.
		 * Delete api/v2/PackageTypes/{ID}
		 * @param {string} ID The Package Type ID
		 * @return {void} 
		 */
		PackageTypes_Delete(ID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/PackageTypes/' + (ID == null ? '' : encodeURIComponent(ID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific Package Type.
		 * No Documentation Found.
		 * Get api/v2/PackageTypes/{ID}
		 * @param {string} ID The Package Type ID
		 * @return {UpdateSystemModelsPackageType} OK
		 */
		PackageTypesGetByID(ID: string): Observable<UpdateSystemModelsPackageType> {
			return this.http.get<UpdateSystemModelsPackageType>(this.baseUri + 'api/v2/PackageTypes/' + (ID == null ? '' : encodeURIComponent(ID)), {});
		}

		/**
		 * Modify a Package Type.
		 * No Documentation Found.
		 * Put api/v2/PackageTypes/{ID}
		 * @param {string} ID The ID of the Package Type
		 * @param {UpdateSystemModelsPackageType} requestBody The Package Type to update
		 * @return {void} 
		 */
		PackageTypes_Put(ID: string, requestBody: UpdateSystemModelsPackageType): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/PackageTypes/' + (ID == null ? '' : encodeURIComponent(ID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a package type a user could see.
		 * No Documentation Found.
		 * Delete api/v2/PackageTypes/{id}/Users/{userID}
		 * @param {string} id The ID of the Package Type
		 * @param {number} userID The userID to link to the package type
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		PackageTypes_RemovePackageTypeUser(id: string, userID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/PackageTypes/' + (id == null ? '' : encodeURIComponent(id)) + '/Users/' + userID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a package type that a user can see.
		 * No Documentation Found.
		 * Post api/v2/PackageTypes/{id}/Users/{userID}
		 * @param {string} id The ID of the Package Type
		 * @param {number} userID The userID to link to the package type
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		PackageTypes_AddPackageTypeUser(id: string, userID: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/PackageTypes/' + (id == null ? '' : encodeURIComponent(id)) + '/Users/' + userID, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Package Type to Bundle Relationship.
		 * No Documentation Found.
		 * Delete api/v2/PackageTypetoBundles
		 * @param {string} BundleID The BundleID
		 * @param {string} PackageTypeID The PackageTypeID
		 * @return {void} 
		 */
		PackageTypetoBundles_Delete(BundleID: string, PackageTypeID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/PackageTypetoBundles?BundleID=' + (BundleID == null ? '' : encodeURIComponent(BundleID)) + '&PackageTypeID=' + (PackageTypeID == null ? '' : encodeURIComponent(PackageTypeID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all of the Package Type to Bundle Relationships.
		 * No Documentation Found.
		 * Get api/v2/PackageTypetoBundles
		 * @param {string} BundleID Optional. Filter by BundleID.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsPackageTypeIDtoBundle_} OK
		 */
		PackageTypetoBundles_Get(BundleID: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsPackageTypeIDtoBundle_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsPackageTypeIDtoBundle_>(this.baseUri + 'api/v2/PackageTypetoBundles?BundleID=' + (BundleID == null ? '' : encodeURIComponent(BundleID)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Add a new Package Type ID to Bundle Relationship.
		 * No Documentation Found.
		 * Post api/v2/PackageTypetoBundles
		 * @param {UpdateSystemModelsPackageTypeIDtoBundle} requestBody The PackageTypeToBundle to add.
		 * @return {void} 
		 */
		PackageTypetoBundles_Post(requestBody: UpdateSystemModelsPackageTypeIDtoBundle): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/PackageTypetoBundles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a Package Type ID to Bundle Relationship.
		 * No Documentation Found.
		 * Put api/v2/PackageTypetoBundles
		 * @param {UpdateSystemModelsPackageTypeIDtoBundle} requestBody The PackageTypeToBundle to update.
		 * @return {void} 
		 */
		PackageTypetoBundles_Put(requestBody: UpdateSystemModelsPackageTypeIDtoBundle): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/PackageTypetoBundles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Packages.
		 * No Documentation Found.
		 * Get api/v2/Packages
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} PackageTypeID Optional. If provided, filters by PackageTypeID.
		 * @param {number} Version Optional. If provided, filters by Version.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} Released Optional. If provided, filters by Released.
		 * @return {APIPagedResponse_UpdateSystemModelsPackage_} OK
		 */
		Packages_GetPackages(limit: number | null | undefined, offset: number | null | undefined, PackageTypeID: string | null | undefined, Version: number | null | undefined, Released: boolean | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsPackage_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsPackage_>(this.baseUri + 'api/v2/Packages?limit=' + limit + '&offset=' + offset + '&PackageTypeID=' + (PackageTypeID == null ? '' : encodeURIComponent(PackageTypeID)) + '&Version=' + Version + '&Released=' + Released, {});
		}

		/**
		 * Add a Package to the Update System.
		 * No Documentation Found.
		 * Post api/v2/Packages
		 * @param {UpdateSystemModelsPackage} requestBody The package to add.
		 * @return {string} OK
		 */
		Packages_PostPackage(requestBody: UpdateSystemModelsPackage): Observable<string> {
			return this.http.post(this.baseUri + 'api/v2/Packages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Delete a Package.
		 * No Documentation Found.
		 * Delete api/v2/Packages/{ID}
		 * @param {string} ID The Package ID to Delete
		 * @return {void} 
		 */
		Packages_DeletePackage(ID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/Packages/' + (ID == null ? '' : encodeURIComponent(ID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Find a Package.
		 * No Documentation Found.
		 * Get api/v2/Packages/{ID}
		 * @param {string} ID The Package ID to Search for
		 * @return {UpdateSystemModelsPackage} OK
		 */
		Packages_GetPackage(ID: string): Observable<UpdateSystemModelsPackage> {
			return this.http.get<UpdateSystemModelsPackage>(this.baseUri + 'api/v2/Packages/' + (ID == null ? '' : encodeURIComponent(ID)), {});
		}

		/**
		 * Modify a Packge to the Update System.
		 * No Documentation Found.
		 * Put api/v2/Packages/{ID}
		 * @param {string} ID The unique ID of the Package
		 * @param {UpdateSystemModelsPackage} requestBody The package to update.
		 * @return {void} 
		 */
		Packages_PutPackage(ID: string, requestBody: UpdateSystemModelsPackage): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Packages/' + (ID == null ? '' : encodeURIComponent(ID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Permissions
		 * No Documentation Found.
		 * Get api/v2/Permissions
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} name Filter by permission name. Supports ending wildcard (*). Optional.
		 * @return {APIPagedResponse_APIModelsPermission_} OK
		 */
		Permissions_GetPermissions(limit: number | null | undefined, offset: number | null | undefined, name: string | null | undefined): Observable<APIPagedResponse_APIModelsPermission_> {
			return this.http.get<APIPagedResponse_APIModelsPermission_>(this.baseUri + 'api/v2/Permissions?limit=' + limit + '&offset=' + offset + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Adds a Permission
		 * No Documentation Found.
		 * Post api/v2/Permissions
		 * @param {APIModelsPermission} requestBody Permission to add
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Permissions_PostPermission(requestBody: APIModelsPermission): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/Permissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Permission
		 * No Documentation Found.
		 * Delete api/v2/Permissions/{id}
		 * @param {number} id Id of Permission
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Permissions_DeletePermission(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/Permissions/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a Permission
		 * No Documentation Found.
		 * Get api/v2/Permissions/{id}
		 * @param {number} id Id of Permission
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIModelsPermission} OK
		 */
		Permissions_GetPermission(id: number): Observable<APIModelsPermission> {
			return this.http.get<APIModelsPermission>(this.baseUri + 'api/v2/Permissions/' + id, {});
		}

		/**
		 * Updates a Permission
		 * No Documentation Found.
		 * Put api/v2/Permissions/{id}
		 * @param {number} id Id of Permission
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {APIModelsPermission} requestBody The Updated Permission
		 * @return {void} 
		 */
		Permissions_PutPermission(id: number, requestBody: APIModelsPermission): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Permissions/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of Priority Packages by Client.
		 * No Documentation Found.
		 * Get api/v2/PriorityPackages
		 * @param {string} ClientID Optional. Filter priority packages by ClientID.
		 * @param {PriorityPackages_GetPriorityPackagesStatus} Status Optional. Filter returned packages by status. By default only active packages will be returned.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsPriorityPackage_} OK
		 */
		PriorityPackages_GetPriorityPackages(ClientID: string | null | undefined, Status: PriorityPackages_GetPriorityPackagesStatus | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsPriorityPackage_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsPriorityPackage_>(this.baseUri + 'api/v2/PriorityPackages?ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&Status=' + Status + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Add a Priority Package for a Client.
		 * No Documentation Found.
		 * Post api/v2/PriorityPackages
		 * @param {UpdateSystemModelsPriorityPackage} requestBody The PriorityPackage to add
		 * @return {string} OK
		 */
		PriorityPackages_PostPriorityPackages(requestBody: UpdateSystemModelsPriorityPackage): Observable<string> {
			return this.http.post(this.baseUri + 'api/v2/PriorityPackages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Delete a Priority Package for a Client.
		 * No Documentation Found.
		 * Delete api/v2/PriorityPackages/{ID}
		 * @param {string} ID The Priority Package ID
		 * @return {void} 
		 */
		PriorityPackages_DeletePriorityPackages(ID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/PriorityPackages/' + (ID == null ? '' : encodeURIComponent(ID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Priority Packages for a Client.
		 * No Documentation Found.
		 * Get api/v2/PriorityPackages/{ID}
		 * @param {string} ID The Priority Package ID
		 * @return {UpdateSystemModelsPriorityPackage} OK
		 */
		PriorityPackages_GetPriorityPackage(ID: string): Observable<UpdateSystemModelsPriorityPackage> {
			return this.http.get<UpdateSystemModelsPriorityPackage>(this.baseUri + 'api/v2/PriorityPackages/' + (ID == null ? '' : encodeURIComponent(ID)), {});
		}

		/**
		 * Get Release
		 * Gets a collection of Release. When successful, the response is a PagedResponse of Release.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/Releases
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} visible Optional. Filter by visible.
		 * @param {string} bundleID Optional. Filter by BundleID.
		 * @return {APIPagedResponse_ContentSubmissionSharedBusinessEntitiesRelease_} OK
		 */
		Release_GetReleases(limit: number | null | undefined, offset: number | null | undefined, visible: boolean | null | undefined, bundleID: string | null | undefined): Observable<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesRelease_> {
			return this.http.get<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesRelease_>(this.baseUri + 'api/v2/Releases?limit=' + limit + '&offset=' + offset + '&visible=' + visible + '&bundleID=' + (bundleID == null ? '' : encodeURIComponent(bundleID)), {});
		}

		/**
		 * Create a Release
		 * Creates a Release.  The body of the POST is the Release to create.
		 * The ReleaseId will be assigned on creation of the Job.  When successful, the response
		 * is the Release Id.  If unsuccessful, an appropriate ApiError is returned.
		 * Post api/v2/Releases
		 * @param {ContentSubmissionSharedBusinessEntitiesRelease} requestBody The Release to create.
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Release_PostRelease(requestBody: ContentSubmissionSharedBusinessEntitiesRelease): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/Releases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a  Release by ID
		 * Gets a Release by ID. When successful, the response is the requested Release.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/Releases/{ReleaseId}
		 * @param {number} ReleaseId The ID of the Release to get.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ContentSubmissionSharedBusinessEntitiesRelease} OK
		 */
		Release_GetRelease(ReleaseId: number): Observable<ContentSubmissionSharedBusinessEntitiesRelease> {
			return this.http.get<ContentSubmissionSharedBusinessEntitiesRelease>(this.baseUri + 'api/v2/Releases/' + ReleaseId, {});
		}

		/**
		 * Deletes the association between a release and a bundle.
		 * No Documentation Found.
		 * Delete api/v2/Releases/{ReleaseId}/Bundle/{BundleId}
		 * @param {number} ReleaseId The release identifier.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} BundleId The bundle identifier.
		 * @return {void} 
		 */
		Release_DeleteReleaseBundle(ReleaseId: number, BundleId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/Releases/' + ReleaseId + '/Bundle/' + (BundleId == null ? '' : encodeURIComponent(BundleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates the release with a bundle.
		 * No Documentation Found.
		 * Post api/v2/Releases/{ReleaseId}/Bundle/{BundleId}
		 * @param {number} ReleaseId The release identifier.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} BundleId The bundle identifier.
		 * @return {void} 
		 */
		Release_PostReleaseBundle(ReleaseId: number, BundleId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/Releases/' + ReleaseId + '/Bundle/' + (BundleId == null ? '' : encodeURIComponent(BundleId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a Release
		 * Updates a Release.  The body of the PUT is the updated Release.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/Releases/{releaseId}
		 * @param {number} releaseId The ID of the Release to update
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ContentSubmissionSharedBusinessEntitiesRelease} requestBody The updated Release
		 * @return {void} 
		 */
		Release_PutContentDefinition(releaseId: number, requestBody: ContentSubmissionSharedBusinessEntitiesRelease): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Releases/' + releaseId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a summary of all Packages in a Bundle
		 * No Documentation Found.
		 * Get api/v2/Reporting/BundleStatusSummary
		 * @param {string} BundleID The BundleID
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsPackageStatusSummary_} OK
		 */
		Reporting_BundleStatusSummary(BundleID: string, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsPackageStatusSummary_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsPackageStatusSummary_>(this.baseUri + 'api/v2/Reporting/BundleStatusSummary?BundleID=' + (BundleID == null ? '' : encodeURIComponent(BundleID)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get a list of bundles for UpdateGroup.
		 * No Documentation Found.
		 * Get api/v2/Reporting/BundlesInUpdateGroup
		 * @param {string} ID The UpdateGroupID
		 * @param {boolean} IncludeInactive Include Inactive Bundles (true|false)
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsBundle_} OK
		 */
		Reporting_BundlesInUpdateGroup(ID: string, IncludeInactive: boolean, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsBundle_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsBundle_>(this.baseUri + 'api/v2/Reporting/BundlesInUpdateGroup?ID=' + (ID == null ? '' : encodeURIComponent(ID)) + '&IncludeInactive=' + IncludeInactive + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get Client Information
		 * No Documentation Found.
		 * Get api/v2/Reporting/ClientInfo
		 * @param {string} ClientID The Client ID
		 * @return {UpdateSystemModelsClientInfo} OK
		 */
		Reporting_ClientInfo(ClientID: string): Observable<UpdateSystemModelsClientInfo> {
			return this.http.get<UpdateSystemModelsClientInfo>(this.baseUri + 'api/v2/Reporting/ClientInfo?ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)), {});
		}

		/**
		 * Get the current packages for an update group.
		 * No Documentation Found.
		 * Get api/v2/Reporting/CurrentPackagesInUpdateGroup
		 * @param {string} ID The UpdateGroupID
		 * @param {Reporting_CurrentPackagesInUpdateGroupSubscriptionTypeFilter} SubscriptionTypeFilter Optional.  The subscription type filter to use.  By default the Default packages (Required and IncludeByDefault) will be returned.
		 * @return {Array<UpdateSystemModelsPackage>} OK
		 */
		Reporting_CurrentPackagesInUpdateGroup(ID: string, SubscriptionTypeFilter: Reporting_CurrentPackagesInUpdateGroupSubscriptionTypeFilter | null | undefined): Observable<Array<UpdateSystemModelsPackage>> {
			return this.http.get<Array<UpdateSystemModelsPackage>>(this.baseUri + 'api/v2/Reporting/CurrentPackagesInUpdateGroup?ID=' + (ID == null ? '' : encodeURIComponent(ID)) + '&SubscriptionTypeFilter=' + SubscriptionTypeFilter, {});
		}

		/**
		 * Get a Client in the Update System.
		 * No Documentation Found.
		 * Get api/v2/Reporting/GetClient
		 * @param {string} ID The Client ID
		 * @return {UpdateSystemModelsClient} OK
		 */
		Reporting_GetClient(ID: string): Observable<UpdateSystemModelsClient> {
			return this.http.get<UpdateSystemModelsClient>(this.baseUri + 'api/v2/Reporting/GetClient?ID=' + (ID == null ? '' : encodeURIComponent(ID)), {});
		}

		/**
		 * Get a list of current Client Subscriptions.
		 * No Documentation Found.
		 * Get api/v2/Reporting/GetSubscriptions
		 * @param {string} ClientID Optional. Filter by Client ID
		 * @param {string} UpdateGroupID Optional. Filter by Update Group ID
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsUpdateGroupClientRelationship_} OK
		 */
		Reporting_GetSubscriptions(ClientID: string | null | undefined, UpdateGroupID: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsUpdateGroupClientRelationship_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsUpdateGroupClientRelationship_>(this.baseUri + 'api/v2/Reporting/GetSubscriptions?ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get a summary report for a Specific Package
		 * No Documentation Found.
		 * Get api/v2/Reporting/PackageStatusSummary
		 * @param {string} PackageID The Package ID
		 * @return {UpdateSystemModelsPackageStatusSummary} OK
		 */
		Reporting_PackageStatusSummary(PackageID: string): Observable<UpdateSystemModelsPackageStatusSummary> {
			return this.http.get<UpdateSystemModelsPackageStatusSummary>(this.baseUri + 'api/v2/Reporting/PackageStatusSummary?PackageID=' + (PackageID == null ? '' : encodeURIComponent(PackageID)), {});
		}

		/**
		 * Get a list of subscribed clients
		 * No Documentation Found.
		 * Get api/v2/Reporting/RegisteredClients
		 * @param {string} UpdateGroupID Optional but required when including any or all of following parameters: ReportValue, ReportResult, ReportResultIsValid. The Update Group ID. If not provided, all clients will be returned.
		 * @param {string} ClientID Optional. Filter where ClientID matches a value. Wildcards are supported (*).
		 * @param {string} Tag Optional. Filter where Tag matches a value. Wildcards are supported (*).
		 * @param {string} ReportResult Optional and UpdateGroupID must be included. Filter where ReportResult matches a value. Wildcards are supported (*).
		 * @param {boolean} ReportResultIsValid Optional and UpdateGroupID must be included. When 'true' filters results where ReportResult equals ReportResultExpected.  When 'false' filters results where ValueToValidate does not equal ReportResults.
		 * @param {string} ReportValue Optional and UpdateGroupID must be included. Filter where ReportValue matches a value. Wildcards are supported (*).
		 * @param {Date} LastCheckInBefore Optional. Filter where LastCheckIn occured before the provided date.
		 * @param {Date} LastCheckInAfter Optional. Filter where LastCheckIn occured after the provided date.
		 * @param {string} OrderBy Optional. Specify the order in which results should be returned. Use this format: [FieldName] [ASC|ASCENDING|DESC|DESCENDING],...   
		 *             If sort direction is not provided for a field, it will be sorted ascending.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsClientStatus_UpdateSystemModelsPagedClientStatusMetadata_} OK
		 */
		Reporting_RegisteredClients(UpdateGroupID: string | null | undefined, ClientID: string | null | undefined, Tag: string | null | undefined, ReportResult: string | null | undefined, ReportResultIsValid: boolean | null | undefined, ReportValue: string | null | undefined, LastCheckInBefore: Date | null | undefined, LastCheckInAfter: Date | null | undefined, OrderBy: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsClientStatus_UpdateSystemModelsPagedClientStatusMetadata_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsClientStatus_UpdateSystemModelsPagedClientStatusMetadata_>(this.baseUri + 'api/v2/Reporting/RegisteredClients?UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&Tag=' + (Tag == null ? '' : encodeURIComponent(Tag)) + '&ReportResult=' + (ReportResult == null ? '' : encodeURIComponent(ReportResult)) + '&ReportResultIsValid=' + ReportResultIsValid + '&ReportValue=' + (ReportValue == null ? '' : encodeURIComponent(ReportValue)) + '&LastCheckInBefore=' + LastCheckInBefore?.toISOString() + '&LastCheckInAfter=' + LastCheckInAfter?.toISOString() + '&OrderBy=' + (OrderBy == null ? '' : encodeURIComponent(OrderBy)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
		 * No Documentation Found.
		 * Get api/v2/Reporting/UpdateGroups
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsUpdateGroup_} OK
		 */
		Reporting_UpdateGroups(limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsUpdateGroup_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsUpdateGroup_>(this.baseUri + 'api/v2/Reporting/UpdateGroups?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get data for pie charts in UpdateMetrics.
		 * No Documentation Found.
		 * Get api/v2/Reporting/UpdateMetrics
		 * @param {string} UpdateGroupID The UpdateType in which clients must be for the report to include them.
		 * @param {number} bundleNumber Optional. Tells us which chart to show based upon filter.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {UpdateSystemModelsUpdateMetricsData} OK
		 */
		Reporting_UpdateMetrics(UpdateGroupID: string, bundleNumber: number | null | undefined): Observable<UpdateSystemModelsUpdateMetricsData> {
			return this.http.get<UpdateSystemModelsUpdateMetricsData>(this.baseUri + 'api/v2/Reporting/UpdateMetrics?UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&bundleNumber=' + bundleNumber, {});
		}

		/**
		 * List Roles
		 * No Documentation Found.
		 * Get api/v2/Roles
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} name Optional. Finds a role with the given name.
		 * @param {number} permissionID Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} permissionName Optional. Filters roles by whether they contain the provided permission.
		 * @return {APIPagedResponse_APIModelsRole_} OK
		 */
		Roles_GetRoles(limit: number | null | undefined, offset: number | null | undefined, name: string | null | undefined, permissionID: number | null | undefined, permissionName: string | null | undefined): Observable<APIPagedResponse_APIModelsRole_> {
			return this.http.get<APIPagedResponse_APIModelsRole_>(this.baseUri + 'api/v2/Roles?limit=' + limit + '&offset=' + offset + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&permissionID=' + permissionID + '&permissionName=' + (permissionName == null ? '' : encodeURIComponent(permissionName)), {});
		}

		/**
		 * Adds a User Role
		 * No Documentation Found.
		 * Post api/v2/Roles
		 * @param {APIModelsRole} requestBody Role to add
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Roles_PostRole(requestBody: APIModelsRole): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/Roles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a User Role
		 * No Documentation Found.
		 * Delete api/v2/Roles/{id}
		 * @param {number} id The role's id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Roles_DeleteRole(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/Roles/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a User Role
		 * No Documentation Found.
		 * Get api/v2/Roles/{id}
		 * @param {number} id The role's id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIModelsRole} OK
		 */
		Roles_GetRole(id: number): Observable<APIModelsRole> {
			return this.http.get<APIModelsRole>(this.baseUri + 'api/v2/Roles/' + id, {});
		}

		/**
		 * Updates a User Role
		 * No Documentation Found.
		 * Put api/v2/Roles/{id}
		 * @param {number} id The role's id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {APIModelsRole} requestBody The Updated Role
		 * @return {void} 
		 */
		Roles_PutRole(id: number, requestBody: APIModelsRole): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Roles/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the Permissions for a Role
		 * No Documentation Found.
		 * Get api/v2/Roles/{id}/Permissions
		 * @param {number} id The id of the Role
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} name Filter by permission name. Optional.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_APIModelsPermission_} OK
		 */
		Roles_GetRolePermissions(id: number, name: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_APIModelsPermission_> {
			return this.http.get<APIPagedResponse_APIModelsPermission_>(this.baseUri + 'api/v2/Roles/' + id + '/Permissions?name=' + (name == null ? '' : encodeURIComponent(name)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Manage the Permissions for a Role
		 * No Documentation Found.
		 * Put api/v2/Roles/{id}/Permissions
		 * @param {number} id The id of the Role
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<APIModelsRolePermissionChange>} requestBody Permissions Changes for the Role
		 * @return {void} 
		 */
		Roles_PutRolePermissions(id: number, requestBody: Array<APIModelsRolePermissionChange>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Roles/' + id + '/Permissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all user's in a role
		 * No Documentation Found.
		 * Get api/v2/Roles/{id}/Users
		 * @param {number} id The Role's ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_APIModelsUser_} OK
		 */
		UserPermissions_GetUsers(id: number, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_APIModelsUser_> {
			return this.http.get<APIPagedResponse_APIModelsUser_>(this.baseUri + 'api/v2/Roles/' + id + '/Users?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Update a Role's users
		 * No Documentation Found.
		 * Put api/v2/Roles/{id}/Users
		 * @param {number} id The Role's ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<APIModelsRoleUserChange>} requestBody A list of changes to the Role's Users
		 * @return {void} 
		 */
		UserPermissionsPutById(id: number, requestBody: Array<APIModelsRoleUserChange>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Roles/' + id + '/Users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a paged response of Global String Definitions.
		 * No Documentation Found.
		 * Get api/v2/StringDefinitions
		 * @param {number} limit Optional. The page limit. The default page limit is 10. Ignored if 'stringIds' is provided.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} modifiedAfterTimestamp Optional. Return only the StringDefinition objects that have a Timestamp value greater than that provided. This will be an encoded byte array.
		 * @param {boolean} includeTranslations Optional. Indicates whether to include the StringTranslations for the StringDefinition. Defaults to false.
		 * @param {string} stringText Optional. The text for which to search in the StringDefinition object’s translations. Only StringDefinition objects for matching StringTranslation objects are returned. Does not filter if no value is provided. Supports beginning and/or ending wildcards. includeTranslations must be true.
		 * @param {string} descriptionText Optional. The text for which to search in the StringDefinition description field. Only matching objects are returned. Does not filter if no value is provided. Supports beginning and/or ending wildcards.
		 * @param {boolean} useFullText Optional. This flag is used to determin whether to use the FullText Search or not.
		 * @param {boolean} includeDeletedLanguages Optional. Indicates whether to include languages marked as deleted. includeTranslations must be true. Defaults to false.
		 * @param {string} languageIds Optional. A comma-delimited list of language ids. Only StringTranslation objects with a matching language id will be returned. Optional. By default all locales are returned. includeTranslations must be true. The StringDefinition is still returned even if the filtered translations list is empty.
		 * @param {string} stringIds Optional. A comma-delimited list of string ids. Up to 40 string IDs may be provided. May not be used with 'modifiedAfterTimestamp', 'stringText', 'descriptionText', or 'useFullText'.
		 * @param {boolean} matchingTranslationsOnly Optional. If false, all translations for returned String Definitions are included. Must be used with 'stringText' provided and 'includeTranslations' = true.
		 * @return {APIIPagedResponse_GlobalResourcesSharedModelsStringDefinition_} OK
		 */
		StringDefinitions_GetDefinitions(limit: number | null | undefined, modifiedAfterTimestamp: string | null | undefined, includeTranslations: boolean | null | undefined, stringText: string | null | undefined, descriptionText: string | null | undefined, useFullText: boolean | null | undefined, includeDeletedLanguages: boolean | null | undefined, languageIds: string | null | undefined, stringIds: string | null | undefined, matchingTranslationsOnly: boolean | null | undefined): Observable<APIIPagedResponse_GlobalResourcesSharedModelsStringDefinition_> {
			return this.http.get<APIIPagedResponse_GlobalResourcesSharedModelsStringDefinition_>(this.baseUri + 'api/v2/StringDefinitions?limit=' + limit + '&modifiedAfterTimestamp=' + (modifiedAfterTimestamp == null ? '' : encodeURIComponent(modifiedAfterTimestamp)) + '&includeTranslations=' + includeTranslations + '&stringText=' + (stringText == null ? '' : encodeURIComponent(stringText)) + '&descriptionText=' + (descriptionText == null ? '' : encodeURIComponent(descriptionText)) + '&useFullText=' + useFullText + '&includeDeletedLanguages=' + includeDeletedLanguages + '&languageIds=' + (languageIds == null ? '' : encodeURIComponent(languageIds)) + '&stringIds=' + (stringIds == null ? '' : encodeURIComponent(stringIds)) + '&matchingTranslationsOnly=' + matchingTranslationsOnly, {});
		}

		/**
		 * Create StringDefinition object. The originating translation must be provided. Accepts an array of StringDefinition objects. Returns nothing.
		 * No Documentation Found.
		 * Post api/v2/StringDefinitions/Batch
		 * @param {Array<GlobalResourcesSharedModelsStringDefinition>} requestBody The StringDefinition Object array, along with originating translation.
		 * @return {void} 
		 */
		StringDefinitions_PostDefinition(requestBody: Array<GlobalResourcesSharedModelsStringDefinition>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/StringDefinitions/Batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update StringDefinition objects. Accepts an array of StringDefinition objects. This endpoint will add StringDefinitionChange objects to the database. The DescriptionForTranslator may not be modified after a String is submitted for translation.
		 * No Documentation Found.
		 * Put api/v2/StringDefinitions/Batch
		 * @param {Array<GlobalResourcesSharedModelsStringDefinition>} requestBody The Array of Definitions to update
		 * @return {void} 
		 */
		StringDefinitions_UpdateDefinitions(requestBody: Array<GlobalResourcesSharedModelsStringDefinition>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/StringDefinitions/Batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a paged response of Global String Definitions.
		 * No Documentation Found.
		 * Get api/v2/StringDefinitions/{ID}
		 * @param {boolean} includeTranslations Optional. Indicates whether to include the StringTranslations for the StringDefinition. Defaults to false.
		 * @param {boolean} includeDeletedLanguages Optional. Indicates whether to include languages marked as deleted. includeTranslations must be true. Defaults to false.
		 * @param {string} languageIds Optional. A comma-delimited list of language ids. Only StringTranslation objects with a matching language id will be returned. Optional. By default all locales are returned. includeTranslations must be true. The StringDefinition is still returned even if the filtered translations list is empty.
		 * @return {GlobalResourcesSharedModelsStringDefinition} OK
		 */
		StringDefinitions_GetDefinition(ID: string, includeTranslations: boolean | null | undefined, includeDeletedLanguages: boolean | null | undefined, languageIds: string | null | undefined): Observable<GlobalResourcesSharedModelsStringDefinition> {
			return this.http.get<GlobalResourcesSharedModelsStringDefinition>(this.baseUri + 'api/v2/StringDefinitions/' + (ID == null ? '' : encodeURIComponent(ID)) + '&includeTranslations=' + includeTranslations + '&includeDeletedLanguages=' + includeDeletedLanguages + '&languageIds=' + (languageIds == null ? '' : encodeURIComponent(languageIds)), {});
		}

		/**
		 * Get a paged response of Global String Translations.
		 * No Documentation Found.
		 * Get api/v2/StringTranslations
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} modifiedAfterTimestamp Optional. Return only the StringDefinition objects that have a Timestamp value greater than that provided. This will be an encoded byte array.
		 * @return {APIIPagedResponse_GlobalResourcesSharedModelsStringTranslation_} OK
		 */
		StringTranslations_GetTranslations(limit: number | null | undefined, modifiedAfterTimestamp: string | null | undefined): Observable<APIIPagedResponse_GlobalResourcesSharedModelsStringTranslation_> {
			return this.http.get<APIIPagedResponse_GlobalResourcesSharedModelsStringTranslation_>(this.baseUri + 'api/v2/StringTranslations?limit=' + limit + '&modifiedAfterTimestamp=' + (modifiedAfterTimestamp == null ? '' : encodeURIComponent(modifiedAfterTimestamp)), {});
		}

		/**
		 * Update corrections to string translations
		 * No Documentation Found.
		 * Put api/v2/StringTranslations/Batch
		 * @return {void} 
		 */
		StringTranslations_UpdateTranslations(requestBody: Array<GlobalResourcesSharedModelsStringTranslation>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/StringTranslations/Batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a single translation based upon stringId and languageId
		 * No Documentation Found.
		 * Get api/v2/StringTranslations/{stringId}/{languageId}
		 * @param {number} languageId Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GlobalResourcesSharedModelsStringTranslation} OK
		 */
		StringTranslations_GetTranslation(stringId: string, languageId: number): Observable<GlobalResourcesSharedModelsStringTranslation> {
			return this.http.get<GlobalResourcesSharedModelsStringTranslation>(this.baseUri + 'api/v2/StringTranslations/' + (stringId == null ? '' : encodeURIComponent(stringId)) + '/' + languageId, {});
		}

		/**
		 * Update a string value or a state for a string translation.
		 * No Documentation Found.
		 * Put api/v2/StringTranslations/{stringId}/{languageId}
		 * @param {number} languageId Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		StringTranslations_UpdateTranslation(stringId: string, languageId: number, requestBody: GlobalResourcesSharedModelsStringTranslation): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/StringTranslations/' + (stringId == null ? '' : encodeURIComponent(stringId)) + '/' + languageId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a paged response of TranslationKeys.
		 * Get api/v2/TranslationKeys
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} keyNames Can filter by keyNames, a comma deliminated list.
		 * @return {APIIPagedResponse_OASSupportSharedModelsTranslationKey_} OK
		 */
		TranslationKeys_Get(limit: number | null | undefined, offset: number | null | undefined, keyNames: string | null | undefined): Observable<APIIPagedResponse_OASSupportSharedModelsTranslationKey_> {
			return this.http.get<APIIPagedResponse_OASSupportSharedModelsTranslationKey_>(this.baseUri + 'api/v2/TranslationKeys?limit=' + limit + '&offset=' + offset + '&keyNames=' + (keyNames == null ? '' : encodeURIComponent(keyNames)), {});
		}

		/**
		 * Create a translationKey object.
		 * No Documentation Found.
		 * Post api/v2/TranslationKeys
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TranslationKeys_CreateTranslationKey(requestBody: OASSupportSharedModelsTranslationKey): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/TranslationKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get TranslationKey by ID
		 * No Documentation Found.
		 * Get api/v2/TranslationKeys/{ID}
		 * @param {number} ID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {OASSupportSharedModelsTranslationKey} OK
		 */
		TranslationKeys_GetTranslationKey(ID: number): Observable<OASSupportSharedModelsTranslationKey> {
			return this.http.get<OASSupportSharedModelsTranslationKey>(this.baseUri + 'api/v2/TranslationKeys/' + ID, {});
		}

		/**
		 * Update the StringID of the translationKey object.
		 * No Documentation Found.
		 * Put api/v2/TranslationKeys/{ID}
		 * @param {number} ID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		TranslationKeys_UpdateTranslationKey(ID: number, requestBody: OASSupportSharedModelsTranslationKey): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/TranslationKeys/' + ID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all TranslationRequest objects. Returns a PagedResponse of TranslationRequest objects with their language ids and string ids.
		 * No Documentation Found.
		 * Get api/v2/TranslationRequests
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIIPagedResponse_GlobalResourcesSharedModelsTranslationRequest_} OK
		 */
		TranslationRequests_GetTranslationRequests(limit: number | null | undefined, offset: number | null | undefined): Observable<APIIPagedResponse_GlobalResourcesSharedModelsTranslationRequest_> {
			return this.http.get<APIIPagedResponse_GlobalResourcesSharedModelsTranslationRequest_>(this.baseUri + 'api/v2/TranslationRequests?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Create a translation request. Accepts a TranslationRequest object. Returns the Id of the created object. The state of the TranslationRequest must be ‘NotSubmitted’.
		 * No Documentation Found.
		 * Post api/v2/TranslationRequests
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TranslationRequests_CreateTranslationRequest(requestBody: GlobalResourcesSharedModelsTranslationRequest): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/TranslationRequests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a TranslationRequest object by id. Returns TranslationRequest object with its language ids and string ids.
		 * No Documentation Found.
		 * Get api/v2/TranslationRequests/{Id}
		 * @param {number} Id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GlobalResourcesSharedModelsTranslationRequest} OK
		 */
		TranslationRequests_GetTranslationRequest(Id: number): Observable<GlobalResourcesSharedModelsTranslationRequest> {
			return this.http.get<GlobalResourcesSharedModelsTranslationRequest>(this.baseUri + 'api/v2/TranslationRequests/' + Id, {});
		}

		/**
		 * Update a TranslationRequest object by id. Accepts a TranslationRequest object.
		 * No Documentation Found.
		 * Put api/v2/TranslationRequests/{Id}
		 * @param {number} Id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		TranslationRequests_UpdateTranslationRequest(Id: number, doResendRequest: boolean | null | undefined, requestBody: GlobalResourcesSharedModelsTranslationRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/TranslationRequests/' + Id + '?doResendRequest=' + doResendRequest, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * No Documentation Found.
		 * No Documentation Found.
		 * Put api/v2/TranslationRequests/{Id}/Strings
		 * @param {number} Id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		TranslationRequests_UpdateTranslationRequestStrings(Id: number, requestBody: Array<string>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/TranslationRequests/' + Id + '/Strings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * No Documentation Found.
		 * No Documentation Found.
		 * Put api/v2/TranslationSetAttributes/Batch
		 * @return {void} 
		 */
		TranslationSets_UpdateTranslationSetAttributes(requestBody: Array<GlobalResourcesSharedModelsTranslationSetAttribute>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/TranslationSetAttributes/Batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a set of TranslationSetAttribute object
		 * No Documentation Found.
		 * Delete api/v2/TranslationSetAttributes/{ID}
		 * @param {number} ID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		TranslationSets_DeleteTranslationSetAttribute(ID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/TranslationSetAttributes/' + ID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a TranslationSetAttribute object
		 * No Documentation Found.
		 * Put api/v2/TranslationSetAttributes/{ID}
		 * @param {number} ID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		TranslationSets_UpdateTranslationSetAttribute(ID: number, requestBody: GlobalResourcesSharedModelsTranslationSetAttribute): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/TranslationSetAttributes/' + ID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a PagedResponse of TranslationSet objects. Related TranslationSetStrings are NOT returned
		 * No Documentation Found.
		 * Get api/v2/TranslationSets
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} translationRequestID Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} languageId Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} includeAttributes Names of Attributes to include when retrieving this submission. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.
		 * @return {APIIPagedResponse_GlobalResourcesSharedModelsTranslationSet_} OK
		 */
		TranslationSets_GetTranslationSets(limit: number | null | undefined, offset: number | null | undefined, translationRequestID: number | null | undefined, state: GlobalResourcesSharedModelsTranslationSetState | null | undefined, stringId: string | null | undefined, languageId: number | null | undefined, includeAttributes: string | null | undefined): Observable<APIIPagedResponse_GlobalResourcesSharedModelsTranslationSet_> {
			return this.http.get<APIIPagedResponse_GlobalResourcesSharedModelsTranslationSet_>(this.baseUri + 'api/v2/TranslationSets?limit=' + limit + '&offset=' + offset + '&translationRequestID=' + translationRequestID + '&state=' + state + '&stringId=' + (stringId == null ? '' : encodeURIComponent(stringId)) + '&languageId=' + languageId + '&includeAttributes=' + (includeAttributes == null ? '' : encodeURIComponent(includeAttributes)), {});
		}

		/**
		 * Get a TranslationSet object by its id. Related TranslationSetStrings are NOT returned.
		 * No Documentation Found.
		 * Get api/v2/TranslationSets/{ID}
		 * @param {number} ID Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} includeAttributes Names of Attributes to include when retrieving this Translation set. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.
		 * @return {GlobalResourcesSharedModelsTranslationSet} OK
		 */
		TranslationSets_GetTranslationSet(ID: number, includeAttributes: string | null | undefined): Observable<GlobalResourcesSharedModelsTranslationSet> {
			return this.http.get<GlobalResourcesSharedModelsTranslationSet>(this.baseUri + 'api/v2/TranslationSets/' + ID + '?includeAttributes=' + (includeAttributes == null ? '' : encodeURIComponent(includeAttributes)), {});
		}

		/**
		 * Update a Translation Set. Accepts a TranslationSet object. Only the state property may be updated.
		 * No Documentation Found.
		 * Put api/v2/TranslationSets/{ID}
		 * @param {number} ID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		TranslationSets_UpdateTranslationSet(ID: number, requestBody: GlobalResourcesSharedModelsTranslationSet): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/TranslationSets/' + ID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a PagedResponse of TranslationSetAttribute objects
		 * No Documentation Found.
		 * Get api/v2/TranslationSets/{ID}/Attributes
		 * @param {number} ID Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetAttribute_} OK
		 */
		TranslationSets_GetTranslationSetAttributes(ID: number, limit: number | null | undefined, offset: number | null | undefined, name: string | null | undefined): Observable<APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetAttribute_> {
			return this.http.get<APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetAttribute_>(this.baseUri + 'api/v2/TranslationSets/' + ID + '/Attributes?limit=' + limit + '&offset=' + offset + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Create a TranslationSetAttribute object
		 * No Documentation Found.
		 * Post api/v2/TranslationSets/{ID}/Attributes
		 * @param {number} ID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TranslationSets_PostTranslationSetAttribute(ID: number, requestBody: GlobalResourcesSharedModelsTranslationSetAttribute): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/TranslationSets/' + ID + '/Attributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * No Documentation Found.
		 * No Documentation Found.
		 * Post api/v2/TranslationSets/{ID}/Attributes/Batch
		 * @param {number} ID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		TranslationSets_PostTranslationSetAttributes(ID: number, requestBody: Array<GlobalResourcesSharedModelsTranslationSetAttribute>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/TranslationSets/' + ID + '/Attributes/Batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the information needed to translate a string in a translation set
		 * No Documentation Found.
		 * Get api/v2/TranslationSets/{ID}/SourceStrings
		 * @param {number} ID Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetSourceString_} OK
		 */
		TranslationSets_GetSourceStrings(ID: number, limit: number | null | undefined, offset: number | null | undefined): Observable<APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetSourceString_> {
			return this.http.get<APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetSourceString_>(this.baseUri + 'api/v2/TranslationSets/' + ID + '/SourceStrings?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Gets the statistics for translation sets such as the language ids and count of string definitions.
		 * No Documentation Found.
		 * Get api/v2/TranslationSets/{ID}/Statistics
		 * @param {number} ID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GlobalResourcesSharedModelsTranslationSetStatistics} OK
		 */
		TranslationSets_GetStatistics(ID: number): Observable<GlobalResourcesSharedModelsTranslationSetStatistics> {
			return this.http.get<GlobalResourcesSharedModelsTranslationSetStatistics>(this.baseUri + 'api/v2/TranslationSets/' + ID + '/Statistics', {});
		}

		/**
		 * Get a PagedResponse of TranslationSetString objects
		 * No Documentation Found.
		 * Get api/v2/TranslationSets/{ID}/Strings
		 * @param {number} ID Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetString_} OK
		 */
		TranslationSets_GetTranslationSetStrings(ID: number, limit: number | null | undefined, offset: number | null | undefined): Observable<APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetString_> {
			return this.http.get<APIIPagedResponse_GlobalResourcesSharedModelsTranslationSetString_>(this.baseUri + 'api/v2/TranslationSets/' + ID + '/Strings?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * No Documentation Found.
		 * No Documentation Found.
		 * Put api/v2/TranslationSets/{ID}/Strings
		 * @param {number} ID Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		TranslationSets_UpdateTranslationSetStrings(ID: number, requestBody: Array<GlobalResourcesSharedModelsTranslationSetString>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/TranslationSets/' + ID + '/Strings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of current Client Subscriptions.
		 * No Documentation Found.
		 * Get api/v2/UpdateGroupClientRelationships
		 * @param {string} ClientID Optional. Filter by Client ID
		 * @param {string} UpdateGroupID Optional. Filter by Update Group ID
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} Active Optional. Filter by Active
		 * @return {APIPagedResponse_UpdateSystemModelsUpdateGroupClientRelationship_} OK
		 */
		UpdateGroupClientRelationships_GetSubscriptions(ClientID: string | null | undefined, UpdateGroupID: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, Active: boolean | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsUpdateGroupClientRelationship_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsUpdateGroupClientRelationship_>(this.baseUri + 'api/v2/UpdateGroupClientRelationships?ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&limit=' + limit + '&offset=' + offset + '&Active=' + Active, {});
		}

		/**
		 * Add a subscription
		 * No Documentation Found.
		 * Post api/v2/UpdateGroupClientRelationships
		 * @param {UpdateSystemModelsUpdateGroupClientRelationship} requestBody The UpdateGroupClientRelationship to add.
		 * @return {string} OK
		 */
		UpdateGroupClientRelationships_PostSubscription(requestBody: UpdateSystemModelsUpdateGroupClientRelationship): Observable<string> {
			return this.http.post(this.baseUri + 'api/v2/UpdateGroupClientRelationships', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * DEPRECATED. Set client subscription status for an update group.
		 * No Documentation Found.
		 * Put api/v2/UpdateGroupClientRelationships
		 * @param {string} ClientID The Client ID.  This can be a client ID that has not been registered yet.
		 * @param {string} UpdateGroupID The Update Group ID
		 * @param {boolean} Active Subscribe the client to the Update Group.
		 * @return {void} 
		 */
		UpdateGroupClientRelationships_PutSubscriptionByClientIDUpdateGroupID(ClientID: string, UpdateGroupID: string, Active: boolean): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/UpdateGroupClientRelationships?ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&Active=' + Active, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a subscription by RelationshipID
		 * No Documentation Found.
		 * Get api/v2/UpdateGroupClientRelationships/{RelationshipID}
		 * @param {string} RelationshipID The RelationshipID.
		 * @return {UpdateSystemModelsUpdateGroupClientRelationship} OK
		 */
		UpdateGroupClientRelationships_GetSubscription(RelationshipID: string): Observable<UpdateSystemModelsUpdateGroupClientRelationship> {
			return this.http.get<UpdateSystemModelsUpdateGroupClientRelationship>(this.baseUri + 'api/v2/UpdateGroupClientRelationships/' + (RelationshipID == null ? '' : encodeURIComponent(RelationshipID)), {});
		}

		/**
		 * Updates a Subscription
		 * No Documentation Found.
		 * Put api/v2/UpdateGroupClientRelationships/{RelationshipID}
		 * @param {string} RelationshipID The relationship id of the UpdateGroupClientRelationship
		 * @param {UpdateSystemModelsUpdateGroupClientRelationship} requestBody The updated UpdateGroupClientRelationship
		 * @return {void} 
		 */
		UpdateGroupClientRelationships_PutSubscription(RelationshipID: string, requestBody: UpdateSystemModelsUpdateGroupClientRelationship): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/UpdateGroupClientRelationships/' + (RelationshipID == null ? '' : encodeURIComponent(RelationshipID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Update Group Subscriptions
		 * No Documentation Found.
		 * Get api/v2/UpdateGroupSubscriptions
		 * @param {string} UpdateGroupID Optional. Filter by Update Group ID.
		 * @param {string} PackageTypeID Optional. Filter by Package Type ID.
		 * @param {string} ClientID Optional. Filter by Client ID.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsUpdateGroupSubscription_} OK
		 */
		UpdateGroupSubscriptions_GetUpdateGroupSubscriptions(UpdateGroupID: string | null | undefined, PackageTypeID: string | null | undefined, ClientID: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsUpdateGroupSubscription_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsUpdateGroupSubscription_>(this.baseUri + 'api/v2/UpdateGroupSubscriptions?UpdateGroupID=' + (UpdateGroupID == null ? '' : encodeURIComponent(UpdateGroupID)) + '&PackageTypeID=' + (PackageTypeID == null ? '' : encodeURIComponent(PackageTypeID)) + '&ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Add an Update Group Subscription
		 * No Documentation Found.
		 * Post api/v2/UpdateGroupSubscriptions
		 * @param {UpdateSystemModelsUpdateGroupSubscription} requestBody The Update Group Subscription to add
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UpdateGroupSubscriptions_PostUpdateGroupSubscription(requestBody: UpdateSystemModelsUpdateGroupSubscription): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/UpdateGroupSubscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * No Documentation Found.
		 * No Documentation Found.
		 * Post api/v2/UpdateGroupSubscriptions/Batch
		 * @return {void} 
		 */
		UpdateGroupSubscriptions_PostUpdateGroupSubscriptions(requestBody: Array<UpdateSystemModelsUpdateGroupSubscription>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/UpdateGroupSubscriptions/Batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * No Documentation Found.
		 * No Documentation Found.
		 * Put api/v2/UpdateGroupSubscriptions/Batch
		 * @return {void} 
		 */
		UpdateGroupSubscriptions_PutUpdateGroupSubscriptions(requestBody: Array<UpdateSystemModelsUpdateGroupSubscription>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/UpdateGroupSubscriptions/Batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an Update Group Subscription
		 * No Documentation Found.
		 * Delete api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}
		 * @param {number} UpdateGroupSubscriptionID The Update Group Subscription ID to delete
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		UpdateGroupSubscriptions_DeleteUpdateGroupSubscription(UpdateGroupSubscriptionID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/UpdateGroupSubscriptions/' + UpdateGroupSubscriptionID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an Update Group Subscription
		 * No Documentation Found.
		 * Get api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}
		 * @param {number} UpdateGroupSubscriptionID The Update Group Subscription ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {UpdateSystemModelsUpdateGroupSubscription} OK
		 */
		UpdateGroupSubscriptions_GetUpdateGroupSubscription(UpdateGroupSubscriptionID: number): Observable<UpdateSystemModelsUpdateGroupSubscription> {
			return this.http.get<UpdateSystemModelsUpdateGroupSubscription>(this.baseUri + 'api/v2/UpdateGroupSubscriptions/' + UpdateGroupSubscriptionID, {});
		}

		/**
		 * Update an Update Group Subscription
		 * No Documentation Found.
		 * Put api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}
		 * @param {number} UpdateGroupSubscriptionID The Update Group Subscription ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {UpdateSystemModelsUpdateGroupSubscription} requestBody The updated Update Group Subscription
		 * @return {void} 
		 */
		UpdateGroupSubscriptions_PutUpdateGroupSubscription(UpdateGroupSubscriptionID: number, requestBody: UpdateSystemModelsUpdateGroupSubscription): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/UpdateGroupSubscriptions/' + UpdateGroupSubscriptionID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
		 * No Documentation Found.
		 * Get api/v2/UpdateGroups
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} userID Optional. The user ID to sort update groups by the user's access
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsUpdateGroup_} OK
		 */
		UpdateGroups_Get(limit: number | null | undefined, offset: number | null | undefined, userID: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsUpdateGroup_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsUpdateGroup_>(this.baseUri + 'api/v2/UpdateGroups?limit=' + limit + '&offset=' + offset + '&userID=' + userID, {});
		}

		/**
		 * Add a new Update Group.  The report field is a string that has a dot based request for a specific piece of submitted data.
		 * No Documentation Found.
		 * Post api/v2/UpdateGroups
		 * @return {string} OK
		 */
		UpdateGroups_Post(requestBody: UpdateSystemModelsUpdateGroup): Observable<string> {
			return this.http.post(this.baseUri + 'api/v2/UpdateGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Delete an Update Group.
		 * No Documentation Found.
		 * Delete api/v2/UpdateGroups/{ID}
		 * @param {string} ID The ID of the Update Group to Delete
		 * @return {void} 
		 */
		UpdateGroups_Delete(ID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/UpdateGroups/' + (ID == null ? '' : encodeURIComponent(ID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific Update Group by ID.
		 * No Documentation Found.
		 * Get api/v2/UpdateGroups/{ID}
		 * @param {string} ID The ID of the Update Group
		 * @return {UpdateSystemModelsUpdateGroup} OK
		 */
		UpdateGroupsGetByID(ID: string): Observable<UpdateSystemModelsUpdateGroup> {
			return this.http.get<UpdateSystemModelsUpdateGroup>(this.baseUri + 'api/v2/UpdateGroups/' + (ID == null ? '' : encodeURIComponent(ID)), {});
		}

		/**
		 * Modify an Update Group.
		 * No Documentation Found.
		 * Put api/v2/UpdateGroups/{ID}
		 * @param {string} ID ID of the Update Group
		 * @param {UpdateSystemModelsUpdateGroup} requestBody The Update Group to update.
		 * @return {void} 
		 */
		UpdateGroups_Put(ID: string, requestBody: UpdateSystemModelsUpdateGroup): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/UpdateGroups/' + (ID == null ? '' : encodeURIComponent(ID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of bundles for UpdateGroup.
		 * No Documentation Found.
		 * Get api/v2/UpdateGroups/{ID}/Bundles
		 * @param {string} ID The UpdateGroupID
		 * @param {boolean} IncludeInactive Include Inactive Bundles (true|false)
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_UpdateSystemModelsBundle_} OK
		 */
		UpdateGroups_GetUpdateGroupBundles(ID: string, IncludeInactive: boolean, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_UpdateSystemModelsBundle_> {
			return this.http.get<APIPagedResponse_UpdateSystemModelsBundle_>(this.baseUri + 'api/v2/UpdateGroups/' + (ID == null ? '' : encodeURIComponent(ID)) + '/Bundles&IncludeInactive=' + IncludeInactive + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Deletes an update group a user could see.
		 * No Documentation Found.
		 * Delete api/v2/UpdateGroups/{id}/Users/{userID}
		 * @param {string} id The ID of the update group
		 * @param {number} userID The userID to link to the update group
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		UpdateGroups_RemoveUpdateGroupUser(id: string, userID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/UpdateGroups/' + (id == null ? '' : encodeURIComponent(id)) + '/Users/' + userID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add an updateGroup that a user can see.
		 * No Documentation Found.
		 * Post api/v2/UpdateGroups/{id}/Users/{userID}
		 * @param {string} id The ID of the update group
		 * @param {number} userID The userID to link to the update group
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		UpdateGroups_AddUpdateGroupUser(id: string, userID: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/UpdateGroups/' + (id == null ? '' : encodeURIComponent(id)) + '/Users/' + userID, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks the Client ID into the Update System.
		 * No Documentation Found.
		 * Get api/v2/UpdateSystem
		 * @param {string} ClientID The Client ID to check-in.  If this is a new client ID it will be added to Clients.
		 * @param {boolean} Preview Get Pkgs w\o updating Datetimes(true|false)
		 * @param {boolean} RunAllInventories Force return inventories. Defaults to false.
		 * @return {UpdateSystemModelsCheckinResult} OK
		 */
		UpdateSystem_GetCheckin(ClientID: string, Preview: boolean, RunAllInventories: boolean | null | undefined): Observable<UpdateSystemModelsCheckinResult> {
			return this.http.get<UpdateSystemModelsCheckinResult>(this.baseUri + 'api/v2/UpdateSystem?ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&Preview=' + Preview + '&RunAllInventories=' + RunAllInventories, {});
		}

		/**
		 * Get UserContentDefinitions
		 * Gets a collection of UserContentDefinitions. When successful, the response is a PagedResponse of UserContentDefinitions.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/UserContentDefinitions
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} userID Optional. Filter by UserID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} contentDefinitionID Optional. Filter by ContentDefinitionID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_ContentSubmissionSharedBusinessEntitiesUserContentDefinition_} OK
		 */
		UserContentDefinitions_GetUserContentDefinitions(limit: number | null | undefined, offset: number | null | undefined, userID: number | null | undefined, contentDefinitionID: number | null | undefined): Observable<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesUserContentDefinition_> {
			return this.http.get<APIPagedResponse_ContentSubmissionSharedBusinessEntitiesUserContentDefinition_>(this.baseUri + 'api/v2/UserContentDefinitions?limit=' + limit + '&offset=' + offset + '&userID=' + userID + '&contentDefinitionID=' + contentDefinitionID, {});
		}

		/**
		 * Create a UserContentDefinition
		 * Creates a UserContentDefinition.  The body of the POST is the UserContentDefinition to create.
		 * The UserContentDefinitionID will be assigned on creation of the Job.  When successful, the response
		 * is the UserContentDefinitionID.  If unsuccessful, an appropriate ApiError is returned.
		 * Post api/v2/UserContentDefinitions
		 * @param {ContentSubmissionSharedBusinessEntitiesUserContentDefinition} requestBody The UserContentDefinition to create.
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UserContentDefinitions_PostUserContentDefinition(requestBody: ContentSubmissionSharedBusinessEntitiesUserContentDefinition): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/UserContentDefinitions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a UserContentDefinition
		 * Deletes an UserContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/UserContentDefinitions/{userContentDefinitionID}
		 * @param {number} userContentDefinitionID The ID of the UserContentDefinition to delete
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		UserContentDefinitions_DeleteUserContentDefinition(userContentDefinitionID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/UserContentDefinitions/' + userContentDefinitionID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a UserContentDefinition by ID
		 * Gets a UserContentDefinition by ID. When successful, the response is the requested UserContentDefinition.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/UserContentDefinitions/{userContentDefinitionID}
		 * @param {number} userContentDefinitionID The ID of the UserContentDefinition to get.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ContentSubmissionSharedBusinessEntitiesUserContentDefinition} OK
		 */
		UserContentDefinitions_GetUserContentDefinition(userContentDefinitionID: number): Observable<ContentSubmissionSharedBusinessEntitiesUserContentDefinition> {
			return this.http.get<ContentSubmissionSharedBusinessEntitiesUserContentDefinition>(this.baseUri + 'api/v2/UserContentDefinitions/' + userContentDefinitionID, {});
		}

		/**
		 * Get users
		 * No Documentation Found.
		 * Get api/v2/Users
		 * @param {string} username Optional. Search by username. Supports beginning and ending wildcards (*).
		 * @param {string} email Optional. Search by email. Supports beginning and ending wildcards (*).
		 * @param {string} name Optional. Search by name. Supports beginning and ending wildcards (*).
		 * @param {string} hasRole Optional. Return only users having the provided role name.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_APIModelsUser_} OK
		 */
		Users_Get(username: string | null | undefined, email: string | null | undefined, name: string | null | undefined, hasRole: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_APIModelsUser_> {
			return this.http.get<APIPagedResponse_APIModelsUser_>(this.baseUri + 'api/v2/Users?username=' + (username == null ? '' : encodeURIComponent(username)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&hasRole=' + (hasRole == null ? '' : encodeURIComponent(hasRole)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Create a user
		 * No Documentation Found.
		 * Post api/v2/Users
		 * @param {APIModelsUser} requestBody The user to create.
		 * @return {APIModelsUser} OK
		 */
		Users_Post(requestBody: APIModelsUser): Observable<APIModelsUser> {
			return this.http.post<APIModelsUser>(this.baseUri + 'api/v2/Users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the current user
		 * No Documentation Found.
		 * Get api/v2/Users/Current
		 * @return {APIModelsUser} OK
		 */
		Users_GetCurrentUser(): Observable<APIModelsUser> {
			return this.http.get<APIModelsUser>(this.baseUri + 'api/v2/Users/Current', {});
		}

		/**
		 * Update a user
		 * No Documentation Found.
		 * Put api/v2/Users/Current
		 * @param {APIModelsUser} requestBody The user
		 * @return {void} 
		 */
		Users_PutCurrentUser(requestBody: APIModelsUser): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Users/Current', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a user's permissions
		 * No Documentation Found.
		 * Get api/v2/Users/Current/Permissions
		 * @param {string} Permission Filter by permission name. Supports ending wildcard (*). Optional.
		 * @param {number} limit The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_APIModelsUserEffectivePermission_} OK
		 */
		UserPermissionsGetByPermissionAndLimitAndOffset(Permission: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_APIModelsUserEffectivePermission_> {
			return this.http.get<APIPagedResponse_APIModelsUserEffectivePermission_>(this.baseUri + 'api/v2/Users/Current/Permissions?Permission=' + (Permission == null ? '' : encodeURIComponent(Permission)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Gets the current user's roles
		 * No Documentation Found.
		 * Get api/v2/Users/Current/Roles
		 * @param {string} Role Filter by role name. Supports ending wildcard (*). Optional.
		 * @param {number} limit The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_APIModelsRole_} OK
		 */
		UserPermissions_GetCurrentUserRoles(Role: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_APIModelsRole_> {
			return this.http.get<APIPagedResponse_APIModelsRole_>(this.baseUri + 'api/v2/Users/Current/Roles?Role=' + (Role == null ? '' : encodeURIComponent(Role)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Delete a user
		 * No Documentation Found.
		 * Delete api/v2/Users/{id}
		 * @param {number} id The user id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Users_Delete(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/Users/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific user
		 * No Documentation Found.
		 * Get api/v2/Users/{id}
		 * @param {number} id The user ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIModelsUser} OK
		 */
		UsersGetById(id: number): Observable<APIModelsUser> {
			return this.http.get<APIModelsUser>(this.baseUri + 'api/v2/Users/' + id, {});
		}

		/**
		 * Update a user
		 * No Documentation Found.
		 * Put api/v2/Users/{id}
		 * @param {number} id The user id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {APIModelsUser} requestBody The user
		 * @return {void} 
		 */
		Users_Put(id: number, requestBody: APIModelsUser): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Users/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a user's permissions
		 * No Documentation Found.
		 * Get api/v2/Users/{id}/Permissions
		 * @param {number} id The User's ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Permission Filter by permission name. Supports ending wildcard (*). Optional.
		 * @param {number} limit The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_APIModelsUserEffectivePermission_} OK
		 */
		UserPermissions_GetPermissions(id: number, Permission: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_APIModelsUserEffectivePermission_> {
			return this.http.get<APIPagedResponse_APIModelsUserEffectivePermission_>(this.baseUri + 'api/v2/Users/' + id + '/Permissions?Permission=' + (Permission == null ? '' : encodeURIComponent(Permission)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get a user's roles
		 * No Documentation Found.
		 * Get api/v2/Users/{id}/Roles
		 * @param {number} id The User's ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Role Filter by role name. Supports ending wildcard (*). Optional.
		 * @param {number} limit The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_APIModelsRole_} OK
		 */
		UserPermissions_GetRoles(id: number, Role: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_APIModelsRole_> {
			return this.http.get<APIPagedResponse_APIModelsRole_>(this.baseUri + 'api/v2/Users/' + id + '/Roles?Role=' + (Role == null ? '' : encodeURIComponent(Role)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Update a user's roles
		 * No Documentation Found.
		 * Put api/v2/Users/{id}/Roles
		 * @param {number} id The User's ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<APIModelsUserRoleChange>} requestBody A list of changes to the User's Roles
		 * @return {void} 
		 */
		UserPermissions_Put(id: number, requestBody: Array<APIModelsUserRoleChange>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Users/' + id + '/Roles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets voucher history data
		 * No Documentation Found.
		 * Get api/v2/VoucherHistory
		 * @param {string} VoucherCode Optional. Filter history data by Voucher Code.
		 * @param {Date} ChangedBefore Optional. Filter history data where changes occured before provided date.
		 * @param {Date} ChangedAfter Optional. Filter history data where changes occured after provided date.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_DealerDBModelsVoucherHistory_} OK
		 */
		VoucherHistory_GetVoucherHistory(VoucherCode: string | null | undefined, ChangedBefore: Date | null | undefined, ChangedAfter: Date | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_DealerDBModelsVoucherHistory_> {
			return this.http.get<APIPagedResponse_DealerDBModelsVoucherHistory_>(this.baseUri + 'api/v2/VoucherHistory?VoucherCode=' + (VoucherCode == null ? '' : encodeURIComponent(VoucherCode)) + '&ChangedBefore=' + ChangedBefore?.toISOString() + '&ChangedAfter=' + ChangedAfter?.toISOString() + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Gets a list of vouchers
		 * No Documentation Found.
		 * Get api/v2/Vouchers
		 * @param {DealerDBModelsVoucherHistoryType} Type Optional. Filter vouchers by Type
		 * @param {string} DealerCode Optional. Filter vouchers by DealerCode
		 * @param {string} LicenseTo Optional. Filter vouchers by LicenseTo. Wildcard supported (*).
		 * @param {string} Purpose Optional. Filter vouchers by Purpose. Wildcard supported (*).
		 * @param {string} OrderNumber Optional. Filter vouchers by OrderNumber
		 * @param {string} Email Optional. Filter vouchers by Email. Wildcard supported (*).
		 * @param {string} ModifiedBy Optional. Filter vouchers by ModifiedBy
		 * @param {Date} CreatedAfter Optional. Filter vouchers by CreatedDate
		 * @param {Date} CreatedBefore Optional. Filter vouchers by CreatedDate
		 * @param {Date} PunchedAfter Optional. Filter vouchers by PunchedDate
		 * @param {Date} PunchedBefore Optional. Filter vouchers by PunchedDate
		 * @param {boolean} Punched Optional. Filter vouchers by Punched status
		 * @param {Date} ExpirationAfter Optional. Filter vouchers by ExpirationDate
		 * @param {Date} ExpirationBefore Optional. Filter vouchers by ExpirationDate
		 * @param {Vouchers_GetDeleted} Deleted Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_DealerDBModelsVoucher_} OK
		 */
		Vouchers_Get(Type: DealerDBModelsVoucherHistoryType | null | undefined, DealerCode: string | null | undefined, LicenseTo: string | null | undefined, Purpose: string | null | undefined, OrderNumber: string | null | undefined, Email: string | null | undefined, ModifiedBy: string | null | undefined, CreatedAfter: Date | null | undefined, CreatedBefore: Date | null | undefined, PunchedAfter: Date | null | undefined, PunchedBefore: Date | null | undefined, Punched: boolean | null | undefined, ExpirationAfter: Date | null | undefined, ExpirationBefore: Date | null | undefined, Deleted: Vouchers_GetDeleted | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_DealerDBModelsVoucher_> {
			return this.http.get<APIPagedResponse_DealerDBModelsVoucher_>(this.baseUri + 'api/v2/Vouchers?Type=' + Type + '&DealerCode=' + (DealerCode == null ? '' : encodeURIComponent(DealerCode)) + '&LicenseTo=' + (LicenseTo == null ? '' : encodeURIComponent(LicenseTo)) + '&Purpose=' + (Purpose == null ? '' : encodeURIComponent(Purpose)) + '&OrderNumber=' + (OrderNumber == null ? '' : encodeURIComponent(OrderNumber)) + '&Email=' + (Email == null ? '' : encodeURIComponent(Email)) + '&ModifiedBy=' + (ModifiedBy == null ? '' : encodeURIComponent(ModifiedBy)) + '&CreatedAfter=' + CreatedAfter?.toISOString() + '&CreatedBefore=' + CreatedBefore?.toISOString() + '&PunchedAfter=' + PunchedAfter?.toISOString() + '&PunchedBefore=' + PunchedBefore?.toISOString() + '&Punched=' + Punched + '&ExpirationAfter=' + ExpirationAfter?.toISOString() + '&ExpirationBefore=' + ExpirationBefore?.toISOString() + '&Deleted=' + Deleted + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Create a voucher
		 * No Documentation Found.
		 * Post api/v2/Vouchers
		 * @param {DealerDBModelsVoucher} requestBody The voucher to add.
		 * @return {string} OK
		 */
		Vouchers_Post(requestBody: DealerDBModelsVoucher): Observable<string> {
			return this.http.post(this.baseUri + 'api/v2/Vouchers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Delete a voucher
		 * No Documentation Found.
		 * Delete api/v2/Vouchers/{VoucherCode}
		 * @param {string} VoucherCode The voucher code of the voucher to delete.
		 * @return {void} 
		 */
		Vouchers_Delete(VoucherCode: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/Vouchers/' + (VoucherCode == null ? '' : encodeURIComponent(VoucherCode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a voucher
		 * No Documentation Found.
		 * Get api/v2/Vouchers/{VoucherCode}
		 * @param {string} VoucherCode The voucher code of the voucher to get.
		 * @param {Vouchers_GetDeleted} Deleted Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned.
		 * @return {DealerDBModelsVoucher} OK
		 */
		VouchersGetByVoucherCodeAndDeleted(VoucherCode: string, Deleted: Vouchers_GetDeleted | null | undefined): Observable<DealerDBModelsVoucher> {
			return this.http.get<DealerDBModelsVoucher>(this.baseUri + 'api/v2/Vouchers/' + (VoucherCode == null ? '' : encodeURIComponent(VoucherCode)) + '&Deleted=' + Deleted, {});
		}

		/**
		 * Update a voucher
		 * No Documentation Found.
		 * Put api/v2/Vouchers/{VoucherCode}
		 * @param {string} VoucherCode The voucher code of the voucher to update.
		 * @param {DealerDBModelsVoucher} requestBody The updated voucher.
		 * @return {void} 
		 */
		Vouchers_Put(VoucherCode: string, requestBody: DealerDBModelsVoucher): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/Vouchers/' + (VoucherCode == null ? '' : encodeURIComponent(VoucherCode)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a voucher's history.
		 * No Documentation Found.
		 * Get api/v2/Vouchers/{VoucherCode}/VoucherHistory
		 * @param {string} VoucherCode The voucher code to get history for.
		 * @param {number} limit Optional. The page limit. The default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset. The default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_DealerDBModelsVoucherHistory_} OK
		 */
		Vouchers_GetVoucherHistory(VoucherCode: string, limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_DealerDBModelsVoucherHistory_> {
			return this.http.get<APIPagedResponse_DealerDBModelsVoucherHistory_>(this.baseUri + 'api/v2/Vouchers/' + (VoucherCode == null ? '' : encodeURIComponent(VoucherCode)) + '/VoucherHistory&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Get Activities
		 * Gets a collection of Activities. When successful, the response is a PagedResponse of Activities.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/activities
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} isIncludeDeleted Does it include deleted activity, or not
		 * @return {APIPagedResponse_BuildSystemSharedDTOActivity_} OK
		 */
		Activities_GetActivities(limit: number | null | undefined, offset: number | null | undefined, isIncludeDeleted: boolean | null | undefined): Observable<APIPagedResponse_BuildSystemSharedDTOActivity_> {
			return this.http.get<APIPagedResponse_BuildSystemSharedDTOActivity_>(this.baseUri + 'api/v2/activities?limit=' + limit + '&offset=' + offset + '&isIncludeDeleted=' + isIncludeDeleted, {});
		}

		/**
		 * Create an Activity
		 * Creates an Activity.  The body of the POST is the Activity to create.  The ActivityID will be assigned
		 * on creation of the Activity.  When successful, the response is the ActivityID.  If unsuccessful, an
		 * appropriate ApiError is returned.
		 * Post api/v2/activities
		 * @param {BuildSystemSharedDTOActivity} requestBody The activity to create.  The ActivityID will be assigned on creation of the Activity.
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Activities_PostActivity(requestBody: BuildSystemSharedDTOActivity): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/activities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Mark the delete flag for the Activity
		 * Deletes an Activity. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/activities/{activityID}
		 * @param {number} activityID The id of the activity to delete
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Activities_DeleteActivity(activityID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/activities/' + activityID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an Activity by ID
		 * Gets an Activity by ID. When successful, the response is the requested Activity.  If unsuccessful,
		 * an appropriate ApiError is returned.
		 * Get api/v2/activities/{activityID}
		 * @param {number} activityID The ID of the Activity to get.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} isIncludeDeleted Does it include deleted activity, or not
		 * @return {BuildSystemSharedDTOActivity} OK
		 */
		Activities_GetActivity(activityID: number, isIncludeDeleted: boolean | null | undefined): Observable<BuildSystemSharedDTOActivity> {
			return this.http.get<BuildSystemSharedDTOActivity>(this.baseUri + 'api/v2/activities/' + activityID + '?isIncludeDeleted=' + isIncludeDeleted, {});
		}

		/**
		 * Update an Activity
		 * Updates an Activity.  The body of the PUT is the updated Activity.  When successful, the response is empty.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/activities/{activityID}
		 * @param {number} activityID The id of the activity to update
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {BuildSystemSharedDTOActivity} requestBody The updated activity
		 * @return {void} 
		 */
		Activities_PutActivity(activityID: number, requestBody: BuildSystemSharedDTOActivity): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/activities/' + activityID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ActivityRuns
		 * Gets a collection of ActivityRuns. When successful, the response is a PagedResponse of ActivityRuns.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/activityRuns
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {BuildSystemSharedDTOActivityRunStatusStatus} status Optional. Filter activity runs by status.  Value should be a comma separated list of status to include.
		 *             If not specified, the default status filter is “InProgress”.
		 * @return {APIPagedResponse_BuildSystemSharedDTOActivityRun_} OK
		 */
		ActivityRuns_GetActivityRuns(limit: number | null | undefined, offset: number | null | undefined, status: BuildSystemSharedDTOActivityRunStatusStatus | null | undefined): Observable<APIPagedResponse_BuildSystemSharedDTOActivityRun_> {
			return this.http.get<APIPagedResponse_BuildSystemSharedDTOActivityRun_>(this.baseUri + 'api/v2/activityRuns?limit=' + limit + '&offset=' + offset + '&status=' + status, {});
		}

		/**
		 * Get an ActivityRun by ID
		 * Gets an ActivityRun by ID. When successful, the response is the requested ActivityRun.  If unsuccessful,
		 * an appropriate ApiError is returned.
		 * Get api/v2/activityRuns/{activityRunID}
		 * @param {number} activityRunID The ID of the ActivityRun to get.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {BuildSystemSharedDTOActivityRun} OK
		 */
		ActivityRuns_GetActivityRun(activityRunID: number): Observable<BuildSystemSharedDTOActivityRun> {
			return this.http.get<BuildSystemSharedDTOActivityRun>(this.baseUri + 'api/v2/activityRuns/' + activityRunID, {});
		}

		/**
		 * Update an ActivityRun
		 * Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/activityRuns/{activityRunID}
		 * @param {number} activityRunID The ID of the ActivityRun to update ActivityRunStatus for.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {BuildSystemSharedDTOActivityRun} requestBody The updated ActivityRun.
		 * @return {void} 
		 */
		ActivityRuns_PutActivityRun(activityRunID: number, requestBody: BuildSystemSharedDTOActivityRun): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/activityRuns/' + activityRunID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the ActivityRunStatus of an ActivityRun
		 * Gets the ActivityRunStatus of an ActivityRun.  When successful, the response is the requested ActivityRunStatus.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/activityRuns/{activityRunID}/status
		 * @param {number} activityRunID The ID of the ActivityRun to get ActivityRunStatus for.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {BuildSystemSharedDTOActivityRunStatus} OK
		 */
		ActivityRuns_GetActivityRunStatus(activityRunID: number): Observable<BuildSystemSharedDTOActivityRunStatus> {
			return this.http.get<BuildSystemSharedDTOActivityRunStatus>(this.baseUri + 'api/v2/activityRuns/' + activityRunID + '/status', {});
		}

		/**
		 * Update the ActivityRunStatus of an ActivityRun
		 * Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/activityRuns/{activityRunID}/status
		 * @param {number} activityRunID The ID of the ActivityRun to update ActivityRunStatus for.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {BuildSystemSharedDTOActivityRunStatus} requestBody The updated ActivityRunStatus.
		 * @return {void} 
		 */
		ActivityRuns_PutActivityRunStatus(activityRunID: number, requestBody: BuildSystemSharedDTOActivityRunStatus): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/activityRuns/' + activityRunID + '/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Agents
		 * Gets a collection of Agents. When successful, the response is a PagedResponse of Agents.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/agents
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {APIPagedResponse_BuildSystemSharedDTOAgent_} OK
		 */
		Agents_GetAgents(limit: number | null | undefined, offset: number | null | undefined): Observable<APIPagedResponse_BuildSystemSharedDTOAgent_> {
			return this.http.get<APIPagedResponse_BuildSystemSharedDTOAgent_>(this.baseUri + 'api/v2/agents?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Create an Agent
		 * Creates an Agent.  The body of the POST is the Agent to create.  The AgentID will be assigned
		 * on creation of the Agent.  When successful, the response is the AgentID.  If unsuccessful, an
		 * appropriate ApiError is returned.
		 * Post api/v2/agents
		 * @param {BuildSystemSharedDTOAgent} requestBody The Agent to create.  The AgentID will be assigned on creation of the Agent.
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Agents_PostAgent(requestBody: BuildSystemSharedDTOAgent): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/agents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Agent associated with the current user
		 * Gets the Agent associated with the current user. When successful, the response is the requested Agent.  If unsuccessful,
		 * an appropriate ApiError is returned.
		 * Get api/v2/agents/Current
		 * @return {BuildSystemSharedDTOAgent} OK
		 */
		Agents_GetCurrentAgentAsync(): Observable<BuildSystemSharedDTOAgent> {
			return this.http.get<BuildSystemSharedDTOAgent>(this.baseUri + 'api/v2/agents/Current', {});
		}

		/**
		 * Get the ActivityRun of Agent associated with the current user
		 * Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
		 * assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/agents/Current/ActivityRun
		 * @return {BuildSystemSharedDTOActivityRun} OK
		 */
		Agents_GetCurrentAgentActivityRun(): Observable<BuildSystemSharedDTOActivityRun> {
			return this.http.get<BuildSystemSharedDTOActivityRun>(this.baseUri + 'api/v2/agents/Current/ActivityRun', {});
		}

		/**
		 * Delete an Agent
		 * Deletes an Agent. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/agents/{agentID}
		 * @param {number} agentID The id of the Agent to delete.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Agents_DeleteAgent(agentID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/agents/' + agentID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Agent
		 * Gets an Agent by ID. When successful, the response is the requested Agent.  If unsuccessful,
		 * an appropriate ApiError is returned.
		 * Get api/v2/agents/{agentID}
		 * @param {number} agentID The id of the Agent to get.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {BuildSystemSharedDTOAgent} OK
		 */
		Agents_GetAgentAsync(agentID: number): Observable<BuildSystemSharedDTOAgent> {
			return this.http.get<BuildSystemSharedDTOAgent>(this.baseUri + 'api/v2/agents/' + agentID, {});
		}

		/**
		 * Update an Agent
		 * Updates an Agent.  The body of the PUT is the updated Agent.  When successful, the response is empty.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/agents/{agentID}
		 * @param {number} agentID The id of the Agent to update.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {BuildSystemSharedDTOAgent} requestBody The updated Agent
		 * @return {void} 
		 */
		Agents_PutAgent(agentID: number, requestBody: BuildSystemSharedDTOAgent): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/agents/' + agentID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an Agent's ActivityRun
		 * Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
		 * assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/agents/{agentID}/ActivityRun
		 * @param {number} agentID The id of the Agent to get.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {BuildSystemSharedDTOActivityRun} OK
		 */
		Agents_GetAgentActivityRun(agentID: number): Observable<BuildSystemSharedDTOActivityRun> {
			return this.http.get<BuildSystemSharedDTOActivityRun>(this.baseUri + 'api/v2/agents/' + agentID + '/ActivityRun', {});
		}

		/**
		 * Update the ActivityRun assigned to the Agent.
		 * No Documentation Found.
		 * Put api/v2/agents/{agentID}/ActivityRun
		 * @param {number} agentID The id of the Agent to update.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {BuildSystemSharedDTOActivityRun} requestBody The ActivityRun assigned to the agent.  Only the ActivityRunID is used.
		 * @return {void} 
		 */
		Agents_PutAgentActivityRun(agentID: number, requestBody: BuildSystemSharedDTOActivityRun): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/agents/' + agentID + '/ActivityRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an Agent
		 * Updates the status of an Agent.The body of the PUT is the updated Agent status.  When successful,
		 * the response is empty.If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/agents/{agentID}/Status
		 * @param {number} agentID The id of the Agent to update.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {BuildSystemSharedDTOAgentStatus} requestBody The updated AgentStatus.
		 * @return {void} 
		 */
		Agents_PutAgentStatus(agentID: number, requestBody: BuildSystemSharedDTOAgentStatus): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/agents/' + agentID + '/Status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get JobRuns
		 * Gets a collection of JobRuns. When successful, the response is a PagedResponse of JobRuns.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/jobRuns
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} includeActivityRunDetails Optional. Indicates whether to include ActivityRun details.  Defaults to false.
		 * @return {APIPagedResponse_BuildSystemSharedDTOJobRun_} OK
		 */
		JobRuns_GetJobRuns(limit: number | null | undefined, offset: number | null | undefined, includeActivityRunDetails: boolean | null | undefined): Observable<APIPagedResponse_BuildSystemSharedDTOJobRun_> {
			return this.http.get<APIPagedResponse_BuildSystemSharedDTOJobRun_>(this.baseUri + 'api/v2/jobRuns?limit=' + limit + '&offset=' + offset + '&includeActivityRunDetails=' + includeActivityRunDetails, {});
		}

		/**
		 * Create a JobRun
		 * Creates a JobRun.  The body of the POST is the JobRun to create.  The JobRunID will be assigned on
		 * creation of the JobRun.  When successful, the response is the JobRunID.  If unsuccessful, an
		 * appropriate ApiError is returned.
		 * Post api/v2/jobRuns
		 * @param {BuildSystemSharedDTOJobRun} requestBody The JobRun to create.  The JobRunID will be assigned on creation of the JobRun.
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		JobRuns_PostJobRun(requestBody: BuildSystemSharedDTOJobRun): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/jobRuns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a JobRun
		 * Deletes a JobRun. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/jobRuns/{jobRunID}
		 * @param {number} jobRunID The id of the JobRun to delete
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		JobRuns_DeleteJobRun(jobRunID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/jobRuns/' + jobRunID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a JobRun by ID
		 * Gets a JobRun by ID. When successful, the response is the requested JobRun.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/jobRuns/{jobRunID}
		 * @param {number} jobRunID The ID of the JobRun to get.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} includeActivityRunDetails Optional. Indicates whether to include ActivityRun details.  Defaults to false.
		 * @return {BuildSystemSharedDTOJobRun} OK
		 */
		JobRuns_GetJobRun(jobRunID: number, includeActivityRunDetails: boolean | null | undefined): Observable<BuildSystemSharedDTOJobRun> {
			return this.http.get<BuildSystemSharedDTOJobRun>(this.baseUri + 'api/v2/jobRuns/' + jobRunID + '?includeActivityRunDetails=' + includeActivityRunDetails, {});
		}

		/**
		 * Update a JobRun
		 * ///
		 * Updates a JobRun.  The body of the PUT is the updated JobRun.
		 * When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/jobRuns/{jobRunID}
		 * @param {number} jobRunID The id of the JobRun to update
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {BuildSystemSharedDTOJobRun} requestBody The updated JobRun
		 * @return {void} 
		 */
		JobRuns_PutJobRun(jobRunID: number, requestBody: BuildSystemSharedDTOJobRun): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/jobRuns/' + jobRunID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Jobs
		 * Gets a collection of Jobs. When successful, the response is a PagedResponse of Jobs.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * ///
		 * Get api/v2/jobs
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} isIncludeDeleted Does it include deleted job, or not
		 * @return {APIPagedResponse_BuildSystemSharedDTOJob_} OK
		 */
		Jobs_GetJobs(limit: number | null | undefined, offset: number | null | undefined, isIncludeDeleted: boolean | null | undefined): Observable<APIPagedResponse_BuildSystemSharedDTOJob_> {
			return this.http.get<APIPagedResponse_BuildSystemSharedDTOJob_>(this.baseUri + 'api/v2/jobs?limit=' + limit + '&offset=' + offset + '&isIncludeDeleted=' + isIncludeDeleted, {});
		}

		/**
		 * Create a Job
		 * Creates a Job.  The body of the POST is the Job to create.  The JobID will be assigned on
		 * creation of the Job.  When successful, the response is the JobID.  If unsuccessful, an
		 * appropriate ApiError is returned.
		 * Post api/v2/jobs
		 * @param {BuildSystemSharedDTOJob} requestBody The job to create.  The JobID will be assigned on creation of the Job.
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Jobs_PostJob(requestBody: BuildSystemSharedDTOJob): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Mark the delete flag for the Job
		 * Deletes a Job. When successful, the response is empty.  If unsuccessful, an appropriate
		 * ApiError is returned.
		 * Delete api/v2/jobs/{jobID}
		 * @param {number} jobID The id of the job to delete
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Jobs_DeleteJob(jobID: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/jobs/' + jobID, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Job by ID
		 * Gets a Job by ID. When successful, the response is the requested Job.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Get api/v2/jobs/{jobID}
		 * @param {number} jobID The ID of the Job to get.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} isIncludeDeleted Does it include deleted job, or not
		 * @return {BuildSystemSharedDTOJob} OK
		 */
		Jobs_GetJob(jobID: number, isIncludeDeleted: boolean | null | undefined): Observable<BuildSystemSharedDTOJob> {
			return this.http.get<BuildSystemSharedDTOJob>(this.baseUri + 'api/v2/jobs/' + jobID + '?isIncludeDeleted=' + isIncludeDeleted, {});
		}

		/**
		 * Update a Job
		 * Updates a Job.  The body of the PUT is the updated Job.  When successful, the response is empty.
		 * If unsuccessful, an appropriate ApiError is returned.
		 * Put api/v2/jobs/{jobID}
		 * @param {number} jobID The id of the job to update
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {BuildSystemSharedDTOJob} requestBody The updated job
		 * @return {void} 
		 */
		Jobs_PutJob(jobID: number, requestBody: BuildSystemSharedDTOJob): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/jobs/' + jobID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Steps
		 * Gets a collection of Steps. When successful, the response is a PagedResponse of Steps.
		 * If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.
		 * Get api/v2/steps
		 * @param {number} limit Optional. The page limit.  If not specified, the default page limit is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Optional. The page offset.  If not specified, the default page offset is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} includeDeleted Does it include deleted step, or not
		 * @return {APIPagedResponse_BuildSystemSharedDTOStep_} OK
		 */
		Steps_GetSteps(limit: number | null | undefined, offset: number | null | undefined, includeDeleted: boolean | null | undefined): Observable<APIPagedResponse_BuildSystemSharedDTOStep_> {
			return this.http.get<APIPagedResponse_BuildSystemSharedDTOStep_>(this.baseUri + 'api/v2/steps?limit=' + limit + '&offset=' + offset + '&includeDeleted=' + includeDeleted, {});
		}

		/**
		 * Create a Step
		 * No Documentation Found.
		 * Post api/v2/steps
		 * @param {BuildSystemSharedDTOStep} requestBody The step to create
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Steps_PostStep(requestBody: BuildSystemSharedDTOStep): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/v2/steps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a Step by ID
		 * Gets a Step by ID. When successful, the response is the requested Step.
		 * If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.
		 * Get api/v2/steps/{stepID}
		 * @param {number} stepID The ID of the Step to get.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} isIncludeDeleted Does it include deleted step, or not
		 * @return {BuildSystemSharedDTOStep} OK
		 */
		Steps_GetStep(stepID: number, isIncludeDeleted: boolean | null | undefined): Observable<BuildSystemSharedDTOStep> {
			return this.http.get<BuildSystemSharedDTOStep>(this.baseUri + 'api/v2/steps/' + stepID + '?isIncludeDeleted=' + isIncludeDeleted, {});
		}

		/**
		 * Update a Step
		 * No Documentation Found.
		 * Put api/v2/steps/{stepID}
		 * @param {number} stepID The step ID of the step to update
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {BuildSystemSharedDTOStep} requestBody The updated step
		 * @return {void} 
		 */
		Steps_PutStep(stepID: number, requestBody: BuildSystemSharedDTOStep): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v2/steps/' + stepID, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Licenses_GetStatus { Active = 'Active', Inactive = 'Inactive', All = 'All' }

	export enum PriorityPackages_GetPriorityPackagesStatus { Active = 'Active', Completed = 'Completed', All = 'All' }

	export enum Reporting_CurrentPackagesInUpdateGroupSubscriptionTypeFilter { RequiredOnly = 'RequiredOnly', Default = 'Default', All = 'All' }

	export enum Vouchers_GetDeleted { NotDeleted = 'NotDeleted', Deleted = 'Deleted', All = 'All' }

}

