import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This is Data Type gives a low level textual error code to help categorise an error response. The applicable HTTP response code is also given. */
	export enum ErrorCode { 'UK.OBIE.Field.Expected' = 'UK.OBIE.Field.Expected', 'UK.OBIE.Field.Invalid' = 'UK.OBIE.Field.Invalid', 'UK.OBIE.Field.InvalidDate' = 'UK.OBIE.Field.InvalidDate', 'UK.OBIE.Field.Missing' = 'UK.OBIE.Field.Missing', 'UK.OBIE.Field.Unexpected' = 'UK.OBIE.Field.Unexpected', 'UK.OBIE.Header.Invalid' = 'UK.OBIE.Header.Invalid', 'UK.OBIE.Header.Missing' = 'UK.OBIE.Header.Missing', 'UK.OBIE.Resource.ConsentMismatch' = 'UK.OBIE.Resource.ConsentMismatch', 'UK.OBIE.Resource.InvalidConsentStatus' = 'UK.OBIE.Resource.InvalidConsentStatus', 'UK.OBIE.Resource.InvalidFormat' = 'UK.OBIE.Resource.InvalidFormat', 'UK.OBIE.Resource.NotFound' = 'UK.OBIE.Resource.NotFound', 'UK.OBIE.Rules.AfterCutOffDateTime' = 'UK.OBIE.Rules.AfterCutOffDateTime', 'UK.OBIE.Rules.DuplicateReference' = 'UK.OBIE.Rules.DuplicateReference', 'UK.OBIE.Signature.Invalid' = 'UK.OBIE.Signature.Invalid', 'UK.OBIE.Signature.InvalidClaim' = 'UK.OBIE.Signature.InvalidClaim', 'UK.OBIE.Signature.MissingClaim' = 'UK.OBIE.Signature.MissingClaim', 'UK.OBIE.Signature.Malformed' = 'UK.OBIE.Signature.Malformed', 'UK.OBIE.Signature.Missing' = 'UK.OBIE.Signature.Missing', 'UK.OBIE.Signature.Unexpected' = 'UK.OBIE.Signature.Unexpected', 'UK.OBIE.Unsupported.AccountIdentifier' = 'UK.OBIE.Unsupported.AccountIdentifier', 'UK.OBIE.Unsupported.AccountSecondaryIdentifier' = 'UK.OBIE.Unsupported.AccountSecondaryIdentifier', 'UK.OBIE.Unsupported.Currency' = 'UK.OBIE.Unsupported.Currency', 'UK.OBIE.Unsupported.EventType' = 'UK.OBIE.Unsupported.EventType', 'UK.OBIE.Unsupported.Frequency' = 'UK.OBIE.Unsupported.Frequency', 'UK.OBIE.Unsupported.LocalInstrument' = 'UK.OBIE.Unsupported.LocalInstrument', 'UK.OBIE.Unsupported.Scheme' = 'UK.OBIE.Unsupported.Scheme', 'UK.OBIE.Reauthenticate' = 'UK.OBIE.Reauthenticate', 'UK.OBIE.Rules.ResourceAlreadyExists' = 'UK.OBIE.Rules.ResourceAlreadyExists', 'UK.OBIE.UnexpectedError' = 'UK.OBIE.UnexpectedError' }

	export interface ErrorResponse {
		errorMessage?: string | null;
	}
	export interface ErrorResponseFormProperties {
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Links relevant to the payload */
	export interface Links {
		First?: string | null;
		Last?: string | null;
		Next?: string | null;
		Prev?: string | null;

		/** Required */
		Self: string;
	}

	/** Links relevant to the payload */
	export interface LinksFormProperties {
		First: FormControl<string | null | undefined>,
		Last: FormControl<string | null | undefined>,
		Next: FormControl<string | null | undefined>,
		Prev: FormControl<string | null | undefined>,

		/** Required */
		Self: FormControl<string | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			First: new FormControl<string | null | undefined>(undefined),
			Last: new FormControl<string | null | undefined>(undefined),
			Next: new FormControl<string | null | undefined>(undefined),
			Prev: new FormControl<string | null | undefined>(undefined),
			Self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Meta Data relevant to the payload */
	export interface Meta {

		/**
		 * All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstAvailableDateTime?: string | null;

		/**
		 * All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastAvailableDateTime?: string | null;
		TotalPages?: number | null;
	}

	/** Meta Data relevant to the payload */
	export interface MetaFormProperties {

		/**
		 * All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstAvailableDateTime: FormControl<string | null | undefined>,

		/**
		 * All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastAvailableDateTime: FormControl<string | null | undefined>,
		TotalPages: FormControl<number | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			FirstAvailableDateTime: new FormControl<string | null | undefined>(undefined),
			LastAvailableDateTime: new FormControl<string | null | undefined>(undefined),
			TotalPages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Unambiguous identification of the account to which credit and debit entries are made. */
	export interface OBAccount6 {

		/** Provides the details to identify an account. */
		Account?: Array<OBCashAccount5>;

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/** Required */
		AccountSubType: OBAccount6AccountSubType;

		/** Required */
		AccountType: OBAccount6AccountType;

		/**
		 * Identification of the currency in which the account is held.  Usage: Currency should only be used in case one and the same account number covers several currencies and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 * Required
		 */
		Currency: string;

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname?: string | null;

		/** Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		OpeningDate?: Date | null;
		Servicer?: OBBranchAndFinancialInstitutionIdentification5;
	}

	/** Unambiguous identification of the account to which credit and debit entries are made. */
	export interface OBAccount6FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		AccountSubType: FormControl<OBAccount6AccountSubType | null | undefined>,

		/** Required */
		AccountType: FormControl<OBAccount6AccountType | null | undefined>,

		/**
		 * Identification of the currency in which the account is held.  Usage: Currency should only be used in case one and the same account number covers several currencies and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname: FormControl<string | null | undefined>,

		/** Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		OpeningDate: FormControl<Date | null | undefined>,
	}
	export function CreateOBAccount6FormGroup() {
		return new FormGroup<OBAccount6FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			AccountSubType: new FormControl<OBAccount6AccountSubType | null | undefined>(undefined, [Validators.required]),
			AccountType: new FormControl<OBAccount6AccountType | null | undefined>(undefined, [Validators.required]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Nickname: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			OpeningDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBCashAccount5 {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: string;

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number(in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification?: string | null;
	}
	export interface OBCashAccount5FormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: FormControl<string | null | undefined>,

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number(in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification: FormControl<string | null | undefined>,
	}
	export function CreateOBCashAccount5FormGroup() {
		return new FormGroup<OBCashAccount5FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export enum OBAccount6AccountSubType { ChargeCard = 'ChargeCard', CreditCard = 'CreditCard', CurrentAccount = 'CurrentAccount', EMoney = 'EMoney', Loan = 'Loan', Mortgage = 'Mortgage', PrePaidCard = 'PrePaidCard', Savings = 'Savings' }

	export enum OBAccount6AccountType { Business = 'Business', Personal = 'Personal' }

	export interface OBBranchAndFinancialInstitutionIdentification5 {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: string;
	}
	export interface OBBranchAndFinancialInstitutionIdentification5FormProperties {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBBranchAndFinancialInstitutionIdentification5FormGroup() {
		return new FormGroup<OBBranchAndFinancialInstitutionIdentification5FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBActiveOrHistoricCurrencyAndAmount {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}
	export interface OBActiveOrHistoricCurrencyAndAmountFormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBActiveOrHistoricCurrencyAndAmountFormGroup() {
		return new FormGroup<OBActiveOrHistoricCurrencyAndAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}[\.,]\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export enum OBBalanceType1Code { ClosingAvailable = 'ClosingAvailable', ClosingBooked = 'ClosingBooked', ClosingCleared = 'ClosingCleared', Expected = 'Expected', ForwardAvailable = 'ForwardAvailable', Information = 'Information', InterimAvailable = 'InterimAvailable', InterimBooked = 'InterimBooked', InterimCleared = 'InterimCleared', OpeningAvailable = 'OpeningAvailable', OpeningBooked = 'OpeningBooked', OpeningCleared = 'OpeningCleared', PreviouslyClosedBooked = 'PreviouslyClosedBooked' }

	export interface OBBeneficiary5 {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId?: string | null;

		/** Specifies the Beneficiary Type. */
		BeneficiaryType?: OBBeneficiary5BeneficiaryType | null;
		CreditorAccount?: OBCashAccount5;
	}
	export interface OBBeneficiary5FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/** Specifies the Beneficiary Type. */
		BeneficiaryType: FormControl<OBBeneficiary5BeneficiaryType | null | undefined>,
	}
	export function CreateOBBeneficiary5FormGroup() {
		return new FormGroup<OBBeneficiary5FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			BeneficiaryType: new FormControl<OBBeneficiary5BeneficiaryType | null | undefined>(undefined),
		});

	}

	export enum OBBeneficiary5BeneficiaryType { Trusted = 'Trusted', Ordinary = 'Ordinary' }


	/** Specifies the Beneficiary Type. */
	export enum OBBeneficiaryType1Code { Trusted = 'Trusted', Ordinary = 'Ordinary' }


	/** Unambiguous identification of the account of the creditor, in the case of a debit transaction. */
	export interface OBCashAccount6 {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Max length: 256
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Name?: string | null;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}

	/** Unambiguous identification of the account of the creditor, in the case of a debit transaction. */
	export interface OBCashAccount6FormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBCashAccount6FormGroup() {
		return new FormGroup<OBCashAccount6FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of elements used to define the balance details. */
	export interface OBCashBalance1 {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/** Required */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/** Required */
		CreditDebitIndicator: OBCashBalance1CreditDebitIndicator;

		/** Set of elements used to provide details on the credit line. */
		CreditLine?: Array<OBCreditLine1>;

		/**
		 * Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
		 * Required
		 */
		DateTime: Date;

		/** Required */
		Type: OBBalanceType1Code;
	}

	/** Set of elements used to define the balance details. */
	export interface OBCashBalance1FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		CreditDebitIndicator: FormControl<OBCashBalance1CreditDebitIndicator | null | undefined>,

		/**
		 * Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
		 * Required
		 */
		DateTime: FormControl<Date | null | undefined>,

		/** Required */
		Type: FormControl<OBBalanceType1Code | null | undefined>,
	}
	export function CreateOBCashBalance1FormGroup() {
		return new FormGroup<OBCashBalance1FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			CreditDebitIndicator: new FormControl<OBCashBalance1CreditDebitIndicator | null | undefined>(undefined, [Validators.required]),
			DateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<OBBalanceType1Code | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OBCashBalance1CreditDebitIndicator { Credit = 'Credit', Debit = 'Debit' }

	export interface OBCreditLine1 {
		Amount?: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Indicates whether or not the credit line is included in the balance of the account.
		 * Usage: If not present, credit line is not included in the balance amount of the account.
		 * Required
		 */
		Included: boolean;
		Type?: OBCreditLine1Type | null;
	}
	export interface OBCreditLine1FormProperties {

		/**
		 * Indicates whether or not the credit line is included in the balance of the account.
		 * Usage: If not present, credit line is not included in the balance amount of the account.
		 * Required
		 */
		Included: FormControl<boolean | null | undefined>,
		Type: FormControl<OBCreditLine1Type | null | undefined>,
	}
	export function CreateOBCreditLine1FormGroup() {
		return new FormGroup<OBCreditLine1FormProperties>({
			Included: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<OBCreditLine1Type | null | undefined>(undefined),
		});

	}

	export enum OBCreditLine1Type { Available = 'Available', Credit = 'Credit', Emergency = 'Emergency', 'Pre-Agreed' = 'Pre-Agreed', Temporary = 'Temporary' }

	export enum OBCreditDebitCode { Credit = 'Credit', Debit = 'Debit' }

	export enum OBEntryStatus1Code { Booked = 'Booked', Pending = 'Pending' }

	export interface OBError1 {

		/**
		 * This is Data Type gives a low level textual error code to help categorise an error response. The applicable HTTP response code is also given.
		 * Required
		 */
		ErrorCode: ErrorCode;

		/**
		 * A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'OBIE doesn't standardise this field
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		Message: string;

		/**
		 * Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency
		 * Max length: 500
		 * Min length: 1
		 */
		Path?: string | null;
	}
	export interface OBError1FormProperties {

		/**
		 * This is Data Type gives a low level textual error code to help categorise an error response. The applicable HTTP response code is also given.
		 * Required
		 */
		ErrorCode: FormControl<ErrorCode | null | undefined>,

		/**
		 * A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'OBIE doesn't standardise this field
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,

		/**
		 * Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency
		 * Max length: 500
		 * Min length: 1
		 */
		Path: FormControl<string | null | undefined>,
	}
	export function CreateOBError1FormGroup() {
		return new FormGroup<OBError1FormProperties>({
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
		});

	}


	/** An array of detail error codes, and messages, and URLs to documentation to help remediation. */
	export interface OBErrorResponse1 {

		/**
		 * High level textual error code, to help categorize the errors.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Code: string;

		/**
		 * Gets or Sets Errors
		 * Required
		 */
		Errors: Array<OBError1>;

		/**
		 * A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.
		 * Max length: 40
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Brief Error message, e.g., 'There is something wrong with the request parameters provided'
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		Message: string;
	}

	/** An array of detail error codes, and messages, and URLs to documentation to help remediation. */
	export interface OBErrorResponse1FormProperties {

		/**
		 * High level textual error code, to help categorize the errors.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.
		 * Max length: 40
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Brief Error message, e.g., 'There is something wrong with the request parameters provided'
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateOBErrorResponse1FormGroup() {
		return new FormGroup<OBErrorResponse1FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
		});

	}

	export enum OBExternalAccountSubType1Code { ChargeCard = 'ChargeCard', CreditCard = 'CreditCard', CurrentAccount = 'CurrentAccount', EMoney = 'EMoney', Loan = 'Loan', Mortgage = 'Mortgage', PrePaidCard = 'PrePaidCard', Savings = 'Savings' }

	export enum OBExternalAccountType1Code { Business = 'Business', Personal = 'Personal' }

	export enum OBExternalLimitType1Code { Available = 'Available', Credit = 'Credit', Emergency = 'Emergency', 'Pre-Agreed' = 'Pre-Agreed', Temporary = 'Temporary' }


	/** Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP. */
	export enum OBExternalPermissions1Code { ReadAccountsBasic = 'ReadAccountsBasic', ReadAccountsDetail = 'ReadAccountsDetail', ReadBalances = 'ReadBalances', ReadBeneficiariesBasic = 'ReadBeneficiariesBasic', ReadBeneficiariesDetail = 'ReadBeneficiariesDetail', ReadDirectDebits = 'ReadDirectDebits', ReadOffers = 'ReadOffers', ReadPAN = 'ReadPAN', ReadParty = 'ReadParty', ReadPartyPSU = 'ReadPartyPSU', ReadProducts = 'ReadProducts', ReadScheduledPaymentsBasic = 'ReadScheduledPaymentsBasic', ReadScheduledPaymentsDetail = 'ReadScheduledPaymentsDetail', ReadStandingOrdersBasic = 'ReadStandingOrdersBasic', ReadStandingOrdersDetail = 'ReadStandingOrdersDetail', ReadStatementsBasic = 'ReadStatementsBasic', ReadStatementsDetail = 'ReadStatementsDetail', ReadTransactionsBasic = 'ReadTransactionsBasic', ReadTransactionsCredits = 'ReadTransactionsCredits', ReadTransactionsDebits = 'ReadTransactionsDebits', ReadTransactionsDetail = 'ReadTransactionsDetail' }


	/** Specifies the status of consent resource in code form. */
	export enum OBExternalRequestStatus1Code { Authorised = 'Authorised', AwaitingAuthorisation = 'AwaitingAuthorisation', Rejected = 'Rejected', Revoked = 'Revoked' }

	export enum OBExternalScheduleType1Code { Arrival = 'Arrival', Execution = 'Execution' }

	export enum OBExternalStandingOrderStatus1Code { Active = 'Active', Inactive = 'Inactive' }

	export enum OBExternalStatementType1Code { AccountClosure = 'AccountClosure', AccountOpening = 'AccountOpening', Annual = 'Annual', Interim = 'Interim', RegularPeriodic = 'RegularPeriodic' }

	export interface OBParty2 {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 70
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		PartyId: string;
	}
	export interface OBParty2FormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		PartyId: FormControl<string | null | undefined>,
	}
	export function CreateOBParty2FormGroup() {
		return new FormGroup<OBParty2FormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			PartyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
		});

	}

	export interface OBReadAccount5 {

		/** Required */
		Data: OBReadDataAccount5;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadAccount5FormProperties {
	}
	export function CreateOBReadAccount5FormGroup() {
		return new FormGroup<OBReadAccount5FormProperties>({
		});

	}

	export interface OBReadDataAccount5 {

		/** Unambiguous identification of the account to which credit and debit entries are made. */
		Account?: Array<OBAccount6>;
	}
	export interface OBReadDataAccount5FormProperties {
	}
	export function CreateOBReadDataAccount5FormGroup() {
		return new FormGroup<OBReadDataAccount5FormProperties>({
		});

	}

	export interface OBReadBalance1 {

		/** Required */
		Data: OBReadDataBalance1;

		/**
		 * Links relevant to the payload
		 * Required
		 */
		Links: Links;

		/**
		 * Meta Data relevant to the payload
		 * Required
		 */
		Meta: Meta;
	}
	export interface OBReadBalance1FormProperties {
	}
	export function CreateOBReadBalance1FormGroup() {
		return new FormGroup<OBReadBalance1FormProperties>({
		});

	}

	export interface OBReadDataBalance1 {

		/**
		 * Set of elements used to define the balance details.
		 * Required
		 */
		Balance: Array<OBCashBalance1>;
	}
	export interface OBReadDataBalance1FormProperties {
	}
	export function CreateOBReadDataBalance1FormGroup() {
		return new FormGroup<OBReadDataBalance1FormProperties>({
		});

	}

	export interface OBReadBeneficiary5 {

		/** Required */
		Data: OBReadDataBeneficiary5;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadBeneficiary5FormProperties {
	}
	export function CreateOBReadBeneficiary5FormGroup() {
		return new FormGroup<OBReadBeneficiary5FormProperties>({
		});

	}

	export interface OBReadDataBeneficiary5 {
		Beneficiary?: Array<OBBeneficiary5>;
	}
	export interface OBReadDataBeneficiary5FormProperties {
	}
	export function CreateOBReadDataBeneficiary5FormGroup() {
		return new FormGroup<OBReadDataBeneficiary5FormProperties>({
		});

	}

	export interface OBReadConsent1 {

		/** Required */
		Data: OBReadData1;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.
		 * Required
		 */
		Risk: OBRisk2;
	}
	export interface OBReadConsent1FormProperties {
	}
	export function CreateOBReadConsent1FormGroup() {
		return new FormGroup<OBReadConsent1FormProperties>({
		});

	}

	export interface OBReadData1 {

		/** Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		ExpirationDateTime?: Date | null;

		/**
		 * Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.
		 * Required
		 */
		Permissions: Array<OBExternalPermissions1Code>;

		/** Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		TransactionFromDateTime?: Date | null;

		/** Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		TransactionToDateTime?: Date | null;
	}
	export interface OBReadData1FormProperties {

		/** Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/** Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		TransactionFromDateTime: FormControl<Date | null | undefined>,

		/** Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		TransactionToDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBReadData1FormGroup() {
		return new FormGroup<OBReadData1FormProperties>({
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			TransactionFromDateTime: new FormControl<Date | null | undefined>(undefined),
			TransactionToDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info. */
	export interface OBRisk2 {
	}

	/** The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info. */
	export interface OBRisk2FormProperties {
	}
	export function CreateOBRisk2FormGroup() {
		return new FormGroup<OBRisk2FormProperties>({
		});

	}

	export interface OBReadConsentResponse1 {

		/** Required */
		Data: OBReadDataConsentResponse1;

		/**
		 * Links relevant to the payload
		 * Required
		 */
		Links: Links;

		/**
		 * Meta Data relevant to the payload
		 * Required
		 */
		Meta: Meta;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.
		 * Required
		 */
		Risk: OBRisk2;
	}
	export interface OBReadConsentResponse1FormProperties {
	}
	export function CreateOBReadConsentResponse1FormGroup() {
		return new FormGroup<OBReadConsentResponse1FormProperties>({
		});

	}

	export interface OBReadDataConsentResponse1 {

		/**
		 * Unique identification as assigned to identify the account access consent resource.
		 * Required
		 */
		ConsentId: string;

		/**
		 * Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: Date;

		/** Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		ExpirationDateTime?: Date | null;

		/**
		 * Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.
		 * Required
		 */
		Permissions: Array<OBExternalPermissions1Code>;

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: OBExternalRequestStatus1Code;

		/**
		 * Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;

		/** Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		TransactionFromDateTime?: Date | null;

		/** Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		TransactionToDateTime?: Date | null;
	}
	export interface OBReadDataConsentResponse1FormProperties {

		/**
		 * Unique identification as assigned to identify the account access consent resource.
		 * Required
		 */
		ConsentId: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: FormControl<Date | null | undefined>,

		/** Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: FormControl<OBExternalRequestStatus1Code | null | undefined>,

		/**
		 * Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,

		/** Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		TransactionFromDateTime: FormControl<Date | null | undefined>,

		/** Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 */
		TransactionToDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBReadDataConsentResponse1FormGroup() {
		return new FormGroup<OBReadDataConsentResponse1FormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<OBExternalRequestStatus1Code | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			TransactionFromDateTime: new FormControl<Date | null | undefined>(undefined),
			TransactionToDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBReadDataParty2 {
		Party?: OBParty2;
	}
	export interface OBReadDataParty2FormProperties {
	}
	export function CreateOBReadDataParty2FormGroup() {
		return new FormGroup<OBReadDataParty2FormProperties>({
		});

	}

	export interface OBReadDataParty3 {
		Party?: Array<OBParty2>;
	}
	export interface OBReadDataParty3FormProperties {
	}
	export function CreateOBReadDataParty3FormGroup() {
		return new FormGroup<OBReadDataParty3FormProperties>({
		});

	}

	export interface OBReadDataScheduledPayment3 {
		ScheduledPayment?: Array<OBScheduledPayment3>;
	}
	export interface OBReadDataScheduledPayment3FormProperties {
	}
	export function CreateOBReadDataScheduledPayment3FormGroup() {
		return new FormGroup<OBReadDataScheduledPayment3FormProperties>({
		});

	}

	export interface OBScheduledPayment3 {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;
		CreditorAccount?: OBCashAccount5;

		/**
		 * A reference value provided by the PSU to the PISP while setting up the scheduled payment.
		 * Max length: 35
		 * Min length: 1
		 */
		DebtorReference?: string | null;

		/** Required */
		InstructedAmount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		ScheduledPaymentDateTime: Date;

		/**
		 * A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		ScheduledPaymentId?: string | null;

		/** Required */
		ScheduledType: OBExternalScheduleType1Code;
	}
	export interface OBScheduledPayment3FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A reference value provided by the PSU to the PISP while setting up the scheduled payment.
		 * Max length: 35
		 * Min length: 1
		 */
		DebtorReference: FormControl<string | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		ScheduledPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		ScheduledPaymentId: FormControl<string | null | undefined>,

		/** Required */
		ScheduledType: FormControl<OBExternalScheduleType1Code | null | undefined>,
	}
	export function CreateOBScheduledPayment3FormGroup() {
		return new FormGroup<OBScheduledPayment3FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			DebtorReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			ScheduledPaymentDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ScheduledPaymentId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			ScheduledType: new FormControl<OBExternalScheduleType1Code | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadDataStandingOrder5 {
		StandingOrder?: Array<OBStandingOrder5>;
	}
	export interface OBReadDataStandingOrder5FormProperties {
	}
	export function CreateOBReadDataStandingOrder5FormGroup() {
		return new FormGroup<OBReadDataStandingOrder5FormProperties>({
		});

	}

	export interface OBStandingOrder5 {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;
		CreditorAccount?: OBCashAccount5;
		FinalPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime?: Date | null;
		FirstPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstPaymentDateTime?: Date | null;

		/**
		 * Individual Definitions:
		 * IntrvlMnthDay - An interval specified in months(between 01, 02, 03, 04, 06, 12, 24), specifying the day within the month(01 to 31)
		 * Full Regular Expression:
		 * ^(IntrvlMnthDay:(0[1,2,3,4,6]|12|24):(0[1-9]|[12] [0-9]|3[01]))$
		 * Required
		 */
		Frequency: string;
		LastPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastPaymentDateTime?: Date | null;
		NextPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		NextPaymentDateTime?: Date | null;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		StandingOrderId?: string | null;
		StandingOrderStatusCode?: OBExternalStandingOrderStatus1Code | null;
	}
	export interface OBStandingOrder5FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Individual Definitions:
		 * IntrvlMnthDay - An interval specified in months(between 01, 02, 03, 04, 06, 12, 24), specifying the day within the month(01 to 31)
		 * Full Regular Expression:
		 * ^(IntrvlMnthDay:(0[1,2,3,4,6]|12|24):(0[1-9]|[12] [0-9]|3[01]))$
		 * Required
		 */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		NextPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		StandingOrderId: FormControl<string | null | undefined>,
		StandingOrderStatusCode: FormControl<OBExternalStandingOrderStatus1Code | null | undefined>,
	}
	export function CreateOBStandingOrder5FormGroup() {
		return new FormGroup<OBStandingOrder5FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			FinalPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			FirstPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			Frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(IntrvlMnthDay:(0[1,2,3,4,6]|12|24):(0[1-9]|[12] [0-9]|3[01]))$')]),
			LastPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			NextPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			StandingOrderId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			StandingOrderStatusCode: new FormControl<OBExternalStandingOrderStatus1Code | null | undefined>(undefined),
		});

	}

	export interface OBReadDataStatement2 {

		/** Provides further details on a statement resource. */
		Statement?: Array<OBStatement2>;
	}
	export interface OBReadDataStatement2FormProperties {
	}
	export function CreateOBReadDataStatement2FormGroup() {
		return new FormGroup<OBReadDataStatement2FormProperties>({
		});

	}


	/** Provides further details on a statement resource. */
	export interface OBStatement2 {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: Date;

		/**
		 * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		EndDateTime: Date;

		/**
		 * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StartDateTime: Date;

		/**
		 * Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 40
		 * Min length: 1
		 */
		StatementId?: string | null;

		/**
		 * Unique reference for the statement. This reference may be optionally populated if available.
		 * Max length: 35
		 * Min length: 1
		 */
		StatementReference?: string | null;

		/** Required */
		Type: OBExternalStatementType1Code;
	}

	/** Provides further details on a statement resource. */
	export interface OBStatement2FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		EndDateTime: FormControl<Date | null | undefined>,

		/**
		 * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StartDateTime: FormControl<Date | null | undefined>,

		/**
		 * Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 40
		 * Min length: 1
		 */
		StatementId: FormControl<string | null | undefined>,

		/**
		 * Unique reference for the statement. This reference may be optionally populated if available.
		 * Max length: 35
		 * Min length: 1
		 */
		StatementReference: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<OBExternalStatementType1Code | null | undefined>,
	}
	export function CreateOBStatement2FormGroup() {
		return new FormGroup<OBStatement2FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StartDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			StatementReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Type: new FormControl<OBExternalStatementType1Code | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadDataTransaction6 {

		/** Provides further details on an entry in the report. */
		Transaction?: Array<OBTransaction6>;
	}
	export interface OBReadDataTransaction6FormProperties {
	}
	export function CreateOBReadDataTransaction6FormGroup() {
		return new FormGroup<OBReadDataTransaction6FormProperties>({
		});

	}


	/** Provides further details on an entry in the report. */
	export interface OBTransaction6 {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/** Required */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/** Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account. */
		Balance?: OBTransactionCashBalance;

		/**
		 * Date and time when a transaction entry is posted to an account on the account servicer's books.
		 * Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		BookingDateTime: Date;

		/** Required */
		CreditDebitIndicator: OBCashBalance1CreditDebitIndicator;

		/** Unambiguous identification of the account of the creditor, in the case of a debit transaction. */
		CreditorAccount?: OBCashAccount6;

		/** Unambiguous identification of the account of the creditor, in the case of a debit transaction. */
		DebtorAccount?: OBCashAccount6;

		/** Set of elements to fully identify a proprietary bank transaction code. */
		ProprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1;

		/** Required */
		Status: OBEntryStatus1Code;

		/**
		 * Further details of the transaction.
		 * This is the transaction narrative, which is unstructured text.
		 * Max length: 500
		 * Min length: 1
		 */
		TransactionInformation?: string | null;

		/**
		 * Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionReference?: string | null;

		/**
		 * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
		 * Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.
		 * For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used.In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ValueDateTime?: Date | null;
	}

	/** Provides further details on an entry in the report. */
	export interface OBTransaction6FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Date and time when a transaction entry is posted to an account on the account servicer's books.
		 * Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		BookingDateTime: FormControl<Date | null | undefined>,

		/** Required */
		CreditDebitIndicator: FormControl<OBCashBalance1CreditDebitIndicator | null | undefined>,

		/** Required */
		Status: FormControl<OBEntryStatus1Code | null | undefined>,

		/**
		 * Further details of the transaction.
		 * This is the transaction narrative, which is unstructured text.
		 * Max length: 500
		 * Min length: 1
		 */
		TransactionInformation: FormControl<string | null | undefined>,

		/**
		 * Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionReference: FormControl<string | null | undefined>,

		/**
		 * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
		 * Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.
		 * For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used.In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone.An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ValueDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBTransaction6FormGroup() {
		return new FormGroup<OBTransaction6FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			BookingDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CreditDebitIndicator: new FormControl<OBCashBalance1CreditDebitIndicator | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<OBEntryStatus1Code | null | undefined>(undefined, [Validators.required]),
			TransactionInformation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
			TransactionReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(210)]),
			ValueDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account. */
	export interface OBTransactionCashBalance {

		/** Required */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/** Required */
		CreditDebitIndicator: OBCashBalance1CreditDebitIndicator;

		/** Required */
		Type: OBBalanceType1Code;
	}

	/** Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account. */
	export interface OBTransactionCashBalanceFormProperties {

		/** Required */
		CreditDebitIndicator: FormControl<OBCashBalance1CreditDebitIndicator | null | undefined>,

		/** Required */
		Type: FormControl<OBBalanceType1Code | null | undefined>,
	}
	export function CreateOBTransactionCashBalanceFormGroup() {
		return new FormGroup<OBTransactionCashBalanceFormProperties>({
			CreditDebitIndicator: new FormControl<OBCashBalance1CreditDebitIndicator | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<OBBalanceType1Code | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Set of elements to fully identify a proprietary bank transaction code. */
	export interface ProprietaryBankTransactionCodeStructure1 {

		/**
		 * Proprietary bank transaction code to identify the underlying transaction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Code: string;

		/**
		 * Identification of the issuer of the proprietary bank transaction code.
		 * Max length: 35
		 * Min length: 1
		 */
		Issuer?: string | null;
	}

	/** Set of elements to fully identify a proprietary bank transaction code. */
	export interface ProprietaryBankTransactionCodeStructure1FormProperties {

		/**
		 * Proprietary bank transaction code to identify the underlying transaction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Identification of the issuer of the proprietary bank transaction code.
		 * Max length: 35
		 * Min length: 1
		 */
		Issuer: FormControl<string | null | undefined>,
	}
	export function CreateProprietaryBankTransactionCodeStructure1FormGroup() {
		return new FormGroup<ProprietaryBankTransactionCodeStructure1FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			Issuer: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export interface OBReadParty2 {

		/** Required */
		Data: OBReadDataParty2;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadParty2FormProperties {
	}
	export function CreateOBReadParty2FormGroup() {
		return new FormGroup<OBReadParty2FormProperties>({
		});

	}

	export interface OBReadParty3 {

		/** Required */
		Data: OBReadDataParty3;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadParty3FormProperties {
	}
	export function CreateOBReadParty3FormGroup() {
		return new FormGroup<OBReadParty3FormProperties>({
		});

	}

	export interface OBReadScheduledPayment3 {

		/** Required */
		Data: OBReadDataScheduledPayment3;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadScheduledPayment3FormProperties {
	}
	export function CreateOBReadScheduledPayment3FormGroup() {
		return new FormGroup<OBReadScheduledPayment3FormProperties>({
		});

	}

	export interface OBReadStandingOrder6 {

		/** Required */
		Data: OBReadDataStandingOrder5;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadStandingOrder6FormProperties {
	}
	export function CreateOBReadStandingOrder6FormGroup() {
		return new FormGroup<OBReadStandingOrder6FormProperties>({
		});

	}

	export interface OBReadStatement2 {

		/** Required */
		Data: OBReadDataStatement2;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadStatement2FormProperties {
	}
	export function CreateOBReadStatement2FormGroup() {
		return new FormGroup<OBReadStatement2FormProperties>({
		});

	}

	export interface OBReadTransaction6 {

		/** Required */
		Data: OBReadDataTransaction6;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadTransaction6FormProperties {
	}
	export function CreateOBReadTransaction6FormGroup() {
		return new FormGroup<OBReadTransaction6FormProperties>({
		});

	}


	/** Sandbox model */
	export interface Sandbox {

		/**
		 * Sandbox id
		 * Required
		 */
		sandboxId: string;

		/** List of users */
		users?: Array<SandboxUser>;
	}

	/** Sandbox model */
	export interface SandboxFormProperties {

		/**
		 * Sandbox id
		 * Required
		 */
		sandboxId: FormControl<string | null | undefined>,
	}
	export function CreateSandboxFormGroup() {
		return new FormGroup<SandboxFormProperties>({
			sandboxId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_-]+$')]),
		});

	}


	/** User data */
	export interface SandboxUser {

		/** List of accounts */
		accounts?: Array<SandboxBankAccount>;

		/** List of cards */
		cards?: Array<SandboxCard>;

		/** Retry cache entries */
		retryCacheEntries?: Array<SandboxRetryCacheEntry>;

		/** Connected user id */
		userId?: string | null;
	}

	/** User data */
	export interface SandboxUserFormProperties {

		/** Connected user id */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateSandboxUserFormGroup() {
		return new FormGroup<SandboxUserFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sandbox bank account */
	export interface SandboxBankAccount {

		/** List of account's beneficiaries */
		beneficiaries?: Array<SandboxBeneficiary>;

		/** General account information */
		info?: SandboxBankAccountInfo;

		/** Connected party information */
		party?: SandboxParty;

		/** List of account's scheduled payments */
		scheduledPayments?: Array<SandboxScheduledPayment>;

		/** List of account's standing orders */
		standingOrders?: Array<SandboxStandingOrder>;

		/** List of account's statements */
		statements?: Array<SandboxStatement>;

		/** List of account's transactions */
		transactions?: Array<SandboxTransaction>;
	}

	/** Sandbox bank account */
	export interface SandboxBankAccountFormProperties {
	}
	export function CreateSandboxBankAccountFormGroup() {
		return new FormGroup<SandboxBankAccountFormProperties>({
		});

	}


	/** Beneficiary information */
	export interface SandboxBeneficiary {

		/** Beneficiary name */
		name?: string | null;
	}

	/** Beneficiary information */
	export interface SandboxBeneficiaryFormProperties {

		/** Beneficiary name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSandboxBeneficiaryFormGroup() {
		return new FormGroup<SandboxBeneficiaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** General account information */
	export interface SandboxBankAccountInfo {

		/**
		 * Account's sub-type (ChargeCard, CreditCard, CurrentAccount ...)
		 * Required
		 */
		accountSubType: string;

		/**
		 * Account's type (Business, Personal)
		 * Required
		 */
		accountType: string;

		/**
		 * Account's alias
		 * Max length: 70
		 * Min length: 1
		 */
		alias?: string | null;

		/** Account's available balance */
		availableBalance?: number | null;

		/**
		 * Currency (EUR, USD ...)
		 * Required
		 */
		currency: string;

		/**
		 * Account's description
		 * Max length: 35
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * Account's IBAN
		 * Required
		 */
		iban: string;

		/** Account's ledger balance */
		ledgerBalance?: number | null;

		/** Account's opening date */
		openingDate?: Date | null;

		/** Account's overdraft limit */
		overdraftLimit?: number | null;
	}

	/** General account information */
	export interface SandboxBankAccountInfoFormProperties {

		/**
		 * Account's sub-type (ChargeCard, CreditCard, CurrentAccount ...)
		 * Required
		 */
		accountSubType: FormControl<string | null | undefined>,

		/**
		 * Account's type (Business, Personal)
		 * Required
		 */
		accountType: FormControl<string | null | undefined>,

		/**
		 * Account's alias
		 * Max length: 70
		 * Min length: 1
		 */
		alias: FormControl<string | null | undefined>,

		/** Account's available balance */
		availableBalance: FormControl<number | null | undefined>,

		/**
		 * Currency (EUR, USD ...)
		 * Required
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * Account's description
		 * Max length: 35
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Account's IBAN
		 * Required
		 */
		iban: FormControl<string | null | undefined>,

		/** Account's ledger balance */
		ledgerBalance: FormControl<number | null | undefined>,

		/** Account's opening date */
		openingDate: FormControl<Date | null | undefined>,

		/** Account's overdraft limit */
		overdraftLimit: FormControl<number | null | undefined>,
	}
	export function CreateSandboxBankAccountInfoFormGroup() {
		return new FormGroup<SandboxBankAccountInfoFormProperties>({
			accountSubType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accountType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			availableBalance: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			iban: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ledgerBalance: new FormControl<number | null | undefined>(undefined),
			openingDate: new FormControl<Date | null | undefined>(undefined),
			overdraftLimit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Connected party information */
	export interface SandboxParty {

		/** Party id */
		id?: string | null;

		/** Name */
		name?: string | null;
	}

	/** Connected party information */
	export interface SandboxPartyFormProperties {

		/** Party id */
		id: FormControl<string | null | undefined>,

		/** Name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSandboxPartyFormGroup() {
		return new FormGroup<SandboxPartyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Scheduled payment information */
	export interface SandboxScheduledPayment {

		/** Amount */
		amount?: number | null;

		/**
		 * Scheduled payment's short description
		 * Max length: 35
		 * Min length: 1
		 */
		description?: string | null;

		/** Scheduled payment's execution date */
		executionDate?: Date | null;

		/**
		 * Debtor / Sender reference
		 * Max length: 35
		 * Min length: 1
		 */
		senderReference?: string | null;
	}

	/** Scheduled payment information */
	export interface SandboxScheduledPaymentFormProperties {

		/** Amount */
		amount: FormControl<number | null | undefined>,

		/**
		 * Scheduled payment's short description
		 * Max length: 35
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** Scheduled payment's execution date */
		executionDate: FormControl<Date | null | undefined>,

		/**
		 * Debtor / Sender reference
		 * Max length: 35
		 * Min length: 1
		 */
		senderReference: FormControl<string | null | undefined>,
	}
	export function CreateSandboxScheduledPaymentFormGroup() {
		return new FormGroup<SandboxScheduledPaymentFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			executionDate: new FormControl<Date | null | undefined>(undefined),
			senderReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}


	/** Standing order information */
	export interface SandboxStandingOrder {

		/** Standing order amount */
		amount?: number | null;

		/** Standing order short description */
		description?: string | null;

		/** Standing order final collection date */
		finalPaymentDate?: Date | null;

		/** Standing order first collection date */
		firstPaymentDate?: Date | null;

		/**
		 * Standing order frequency
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		frequency: string;

		/** Standing order last executed payment date */
		lastPaymentDate?: Date | null;

		/** Standing order next collection date */
		nextPaymentDate?: Date | null;

		/** Standing order status (Active, Inactive) */
		status?: string | null;
	}

	/** Standing order information */
	export interface SandboxStandingOrderFormProperties {

		/** Standing order amount */
		amount: FormControl<number | null | undefined>,

		/** Standing order short description */
		description: FormControl<string | null | undefined>,

		/** Standing order final collection date */
		finalPaymentDate: FormControl<Date | null | undefined>,

		/** Standing order first collection date */
		firstPaymentDate: FormControl<Date | null | undefined>,

		/**
		 * Standing order frequency
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		frequency: FormControl<string | null | undefined>,

		/** Standing order last executed payment date */
		lastPaymentDate: FormControl<Date | null | undefined>,

		/** Standing order next collection date */
		nextPaymentDate: FormControl<Date | null | undefined>,

		/** Standing order status (Active, Inactive) */
		status: FormControl<string | null | undefined>,
	}
	export function CreateSandboxStandingOrderFormGroup() {
		return new FormGroup<SandboxStandingOrderFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			finalPaymentDate: new FormControl<Date | null | undefined>(undefined),
			firstPaymentDate: new FormControl<Date | null | undefined>(undefined),
			frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			lastPaymentDate: new FormControl<Date | null | undefined>(undefined),
			nextPaymentDate: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statement information */
	export interface SandboxStatement {

		/** Statement month */
		month?: number | null;

		/** Statement number */
		number?: string | null;

		/** Statement year */
		year?: number | null;
	}

	/** Statement information */
	export interface SandboxStatementFormProperties {

		/** Statement month */
		month: FormControl<number | null | undefined>,

		/** Statement number */
		number: FormControl<string | null | undefined>,

		/** Statement year */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSandboxStatementFormGroup() {
		return new FormGroup<SandboxStatementFormProperties>({
			month: new FormControl<number | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Transaction information */
	export interface SandboxTransaction {

		/** Balance */
		accountingBalance?: number | null;

		/** Amount */
		amount?: number | null;

		/** Booking date time */
		bookingDateTime?: Date | null;

		/** Credit / Debit indicator */
		creditDebit?: string | null;

		/** Currency (EUR, USD ...) */
		currency?: string | null;

		/** Description */
		description?: string | null;

		/** Transaction reference */
		reference?: string | null;

		/** Related account */
		relatedAccount?: string | null;

		/** Related account */
		relatedName?: string | null;

		/** Transaction code */
		transactionCode?: string | null;

		/** Valeur */
		valueDateTime?: Date | null;
	}

	/** Transaction information */
	export interface SandboxTransactionFormProperties {

		/** Balance */
		accountingBalance: FormControl<number | null | undefined>,

		/** Amount */
		amount: FormControl<number | null | undefined>,

		/** Booking date time */
		bookingDateTime: FormControl<Date | null | undefined>,

		/** Credit / Debit indicator */
		creditDebit: FormControl<string | null | undefined>,

		/** Currency (EUR, USD ...) */
		currency: FormControl<string | null | undefined>,

		/** Description */
		description: FormControl<string | null | undefined>,

		/** Transaction reference */
		reference: FormControl<string | null | undefined>,

		/** Related account */
		relatedAccount: FormControl<string | null | undefined>,

		/** Related account */
		relatedName: FormControl<string | null | undefined>,

		/** Transaction code */
		transactionCode: FormControl<string | null | undefined>,

		/** Valeur */
		valueDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSandboxTransactionFormGroup() {
		return new FormGroup<SandboxTransactionFormProperties>({
			accountingBalance: new FormControl<number | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			bookingDateTime: new FormControl<Date | null | undefined>(undefined),
			creditDebit: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			relatedAccount: new FormControl<string | null | undefined>(undefined),
			relatedName: new FormControl<string | null | undefined>(undefined),
			transactionCode: new FormControl<string | null | undefined>(undefined),
			valueDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Sandbox card */
	export interface SandboxCard {

		/** Sandbox card information */
		info?: SandboxCardInfo;

		/** Connected party information */
		party?: SandboxParty;

		/** Card statements */
		statements?: Array<SandboxStatement>;

		/** Card transactions */
		transactions?: Array<SandboxTransaction>;
	}

	/** Sandbox card */
	export interface SandboxCardFormProperties {
	}
	export function CreateSandboxCardFormGroup() {
		return new FormGroup<SandboxCardFormProperties>({
		});

	}


	/** Sandbox card information */
	export interface SandboxCardInfo {

		/** Available balance */
		availableBalance?: number | null;

		/** Credit limit ( applicable to credit cards ) */
		creditLimit?: number | null;

		/** Description */
		description?: string | null;

		/**
		 * Expiration date (05/2022)
		 * Required
		 * Max length: 7
		 * Min length: 1
		 */
		expiration: string;

		/**
		 * Holder name
		 * Required
		 */
		holderName: string;

		/** Ledger balance */
		ledgerBalance?: number | null;

		/**
		 * Card number
		 * Required
		 * Max length: 16
		 * Min length: 1
		 */
		number: string;

		/** Sub type */
		subType?: string | null;

		/** Type */
		type?: string | null;
	}

	/** Sandbox card information */
	export interface SandboxCardInfoFormProperties {

		/** Available balance */
		availableBalance: FormControl<number | null | undefined>,

		/** Credit limit ( applicable to credit cards ) */
		creditLimit: FormControl<number | null | undefined>,

		/** Description */
		description: FormControl<string | null | undefined>,

		/**
		 * Expiration date (05/2022)
		 * Required
		 * Max length: 7
		 * Min length: 1
		 */
		expiration: FormControl<string | null | undefined>,

		/**
		 * Holder name
		 * Required
		 */
		holderName: FormControl<string | null | undefined>,

		/** Ledger balance */
		ledgerBalance: FormControl<number | null | undefined>,

		/**
		 * Card number
		 * Required
		 * Max length: 16
		 * Min length: 1
		 */
		number: FormControl<string | null | undefined>,

		/** Sub type */
		subType: FormControl<string | null | undefined>,

		/** Type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSandboxCardInfoFormGroup() {
		return new FormGroup<SandboxCardInfoFormProperties>({
			availableBalance: new FormControl<number | null | undefined>(undefined),
			creditLimit: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expiration: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(7)]),
			holderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ledgerBalance: new FormControl<number | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(16)]),
			subType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Keeps the number of calls without x-fapi-customer-ip-address header present */
	export interface SandboxRetryCacheEntry {

		/** Cache key */
		cacheKey?: string | null;

		/** Number of retries ( up to 4 ) */
		count?: number | null;

		/** Expiration timestamp of the entry */
		expirationTimestamp?: Date | null;
	}

	/** Keeps the number of calls without x-fapi-customer-ip-address header present */
	export interface SandboxRetryCacheEntryFormProperties {

		/** Cache key */
		cacheKey: FormControl<string | null | undefined>,

		/** Number of retries ( up to 4 ) */
		count: FormControl<number | null | undefined>,

		/** Expiration timestamp of the entry */
		expirationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateSandboxRetryCacheEntryFormGroup() {
		return new FormGroup<SandboxRetryCacheEntryFormProperties>({
			cacheKey: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			expirationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Request to create a new sandbox */
	export interface SandboxRequest {

		/**
		 * Sandbox Id
		 * Required
		 */
		sandboxId: string;
	}

	/** Request to create a new sandbox */
	export interface SandboxRequestFormProperties {

		/**
		 * Sandbox Id
		 * Required
		 */
		sandboxId: FormControl<string | null | undefined>,
	}
	export function CreateSandboxRequestFormGroup() {
		return new FormGroup<SandboxRequestFormProperties>({
			sandboxId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_-]+$')]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create Account Access Consents
		 * Create Account Access Consents
		 * Post account-access-consents
		 * @param {OBReadConsent1} requestBody Default
		 * @return {void} 
		 */
		Account_access_consentsPost(requestBody: OBReadConsent1, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account-access-consents', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Account Access Consents
		 * Delete Account Access Consents by Consent ID
		 * Delete account-access-consents/{consentId}
		 * @param {string} consentId ConsentId
		 * @return {void} 
		 */
		Account_access_consents_consentIdDelete(consentId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account-access-consents/' + (consentId == null ? '' : encodeURIComponent(consentId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Account Access Consents
		 * Get Account Access Consents by Consent ID
		 * Get account-access-consents/{consentId}
		 * @param {string} consentId ConsentId
		 * @return {OBReadConsentResponse1} Account Access Consents Read
		 */
		Account_access_consents_consentIdGet(consentId: string, headersHandler?: () => HttpHeaders): Observable<OBReadConsentResponse1> {
			return this.http.get<OBReadConsentResponse1>(this.baseUri + 'account-access-consents/' + (consentId == null ? '' : encodeURIComponent(consentId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Accounts
		 * Get Accounts
		 * Get accounts
		 * @return {OBReadAccount5} Accounts Read
		 */
		AccountsGet(headersHandler?: () => HttpHeaders): Observable<OBReadAccount5> {
			return this.http.get<OBReadAccount5>(this.baseUri + 'accounts', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Accounts
		 * Get Accounts by Account ID
		 * Get accounts/{accountId}
		 * @param {string} accountId AccountId
		 * @return {OBReadAccount5} Accounts Read
		 */
		Accounts_accountIdGet(accountId: string, headersHandler?: () => HttpHeaders): Observable<OBReadAccount5> {
			return this.http.get<OBReadAccount5>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Balances
		 * Get Balances by Account ID
		 * Get accounts/{accountId}/balances
		 * @param {string} accountId AccountId
		 * @return {OBReadBalance1} Balances Read
		 */
		Accounts_accountIdBalancesGet(accountId: string, headersHandler?: () => HttpHeaders): Observable<OBReadBalance1> {
			return this.http.get<OBReadBalance1>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/balances', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Beneficiaries
		 * Get Beneficiaries by Account ID
		 * Get accounts/{accountId}/beneficiaries
		 * @param {string} accountId AccountId
		 * @return {OBReadBeneficiary5} Beneficiaries Read
		 */
		Accounts_accountIdBeneficiariesGet(accountId: string, headersHandler?: () => HttpHeaders): Observable<OBReadBeneficiary5> {
			return this.http.get<OBReadBeneficiary5>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/beneficiaries', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Parties
		 * Get Parties by Account ID
		 * Get accounts/{accountId}/parties
		 * @param {string} accountId AccountId
		 * @return {OBReadParty3} Party Read
		 */
		Accounts_accountIdPartiesGet(accountId: string, headersHandler?: () => HttpHeaders): Observable<OBReadParty3> {
			return this.http.get<OBReadParty3>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/parties', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Party
		 * Get Party by Account ID
		 * Get accounts/{accountId}/party
		 * @param {string} accountId AccountId
		 * @return {OBReadParty2} Party Read
		 */
		Accounts_accountIdPartyGet(accountId: string, headersHandler?: () => HttpHeaders): Observable<OBReadParty2> {
			return this.http.get<OBReadParty2>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/party', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Scheduled Payments
		 * Get Scheduled Payments by Account ID
		 * Get accounts/{accountId}/scheduled-payments
		 * @param {string} accountId AccountId
		 * @return {OBReadScheduledPayment3} Scheduled Payments Read
		 */
		Accounts_accountIdScheduled_paymentsGet(accountId: string, headersHandler?: () => HttpHeaders): Observable<OBReadScheduledPayment3> {
			return this.http.get<OBReadScheduledPayment3>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/scheduled-payments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Standing Orders
		 * Get Standing Orders by Account ID
		 * Get accounts/{accountId}/standing-orders
		 * @param {string} accountId AccountId
		 * @return {OBReadStandingOrder6} Standing Orders Read
		 */
		Accounts_accountIdStanding_ordersGet(accountId: string, headersHandler?: () => HttpHeaders): Observable<OBReadStandingOrder6> {
			return this.http.get<OBReadStandingOrder6>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/standing-orders', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Statements
		 * Get Statements by Account ID
		 * Get accounts/{accountId}/statements
		 * @param {string} accountId AccountId
		 * @param {Date} fromStatementDateTime The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
		 * @param {Date} toStatementDateTime The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
		 * @return {OBReadStatement2} Statements Read
		 */
		Accounts_accountIdStatementsGetByFromStatementDateTimeAndToStatementDateTime(accountId: string, fromStatementDateTime: Date | null | undefined, toStatementDateTime: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<OBReadStatement2> {
			return this.http.get<OBReadStatement2>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/statements&fromStatementDateTime=' + fromStatementDateTime?.toISOString() + '&toStatementDateTime=' + toStatementDateTime?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Statements
		 * Get Statements by Account ID and Statement ID
		 * Get accounts/{accountId}/statements/{statementId}
		 * @param {string} accountId AccountId
		 * @param {string} statementId StatementId
		 * @return {OBReadStatement2} Statements Read
		 */
		Accounts_accountIdStatements_statementIdGet(accountId: string, statementId: string, headersHandler?: () => HttpHeaders): Observable<OBReadStatement2> {
			return this.http.get<OBReadStatement2>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/statements/' + (statementId == null ? '' : encodeURIComponent(statementId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Statements
		 * Get Statement PDF File by Account ID and Statement ID
		 * Get accounts/{accountId}/statements/{statementId}/file
		 * @param {string} accountId AccountId
		 * @param {string} statementId StatementId
		 * @return {void} Statements Read
		 */
		Accounts_accountIdStatements_statementIdFileGet(accountId: string, statementId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/statements/' + (statementId == null ? '' : encodeURIComponent(statementId)) + '/file', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Transactions
		 * Get Transactions by Account ID and Statement ID
		 * Get accounts/{accountId}/statements/{statementId}/transactions
		 * @param {string} accountId AccountId
		 * @param {string} statementId StatementId
		 * @return {OBReadTransaction6} Transactions Read
		 */
		Accounts_accountIdStatements_statementIdTransactionsGet(accountId: string, statementId: string, headersHandler?: () => HttpHeaders): Observable<OBReadTransaction6> {
			return this.http.get<OBReadTransaction6>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/statements/' + (statementId == null ? '' : encodeURIComponent(statementId)) + '/transactions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Transactions
		 * Get Transactions by Account ID
		 * Get accounts/{accountId}/transactions
		 * @param {string} accountId AccountId
		 * @param {Date} fromBookingDateTime The UTC ISO 8601 Date Time to filter transactions FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
		 * @param {Date} toBookingDateTime The UTC ISO 8601 Date Time to filter transactions TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
		 * @return {OBReadTransaction6} Transactions Read
		 */
		Accounts_accountIdTransactionsGetByFromBookingDateTimeAndToBookingDateTime(accountId: string, fromBookingDateTime: Date | null | undefined, toBookingDateTime: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<OBReadTransaction6> {
			return this.http.get<OBReadTransaction6>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/transactions&fromBookingDateTime=' + fromBookingDateTime?.toISOString() + '&toBookingDateTime=' + toBookingDateTime?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Party
		 * Get Party
		 * Get party
		 * @return {OBReadParty2} Party Read
		 */
		PartyGet(headersHandler?: () => HttpHeaders): Observable<OBReadParty2> {
			return this.http.get<OBReadParty2>(this.baseUri + 'party', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Sandbox
		 * Create Sandbox
		 * Post sandbox
		 * @param {SandboxRequest} requestBody SandboxRequest
		 * @return {void} 
		 */
		SandboxPost(requestBody: SandboxRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sandbox', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Import Sandbox
		 * Import Sandbox
		 * Put sandbox
		 * @param {Sandbox} requestBody Sandbox
		 * @return {void} 
		 */
		SandboxPut(requestBody: Sandbox, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sandbox', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Sandbox
		 * Delete Sandbox
		 * Delete sandbox/{sandboxId}
		 * @param {string} sandboxId Sandbox Id
		 * @return {void} 
		 */
		Sandbox_sandboxIdDelete(sandboxId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sandbox/' + (sandboxId == null ? '' : encodeURIComponent(sandboxId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Export Sandbox
		 * Export Sandbox
		 * Get sandbox/{sandboxId}
		 * @param {string} sandboxId Sandbox Id
		 * @return {Sandbox} OK
		 */
		Sandbox_sandboxIdGet(sandboxId: string, headersHandler?: () => HttpHeaders): Observable<Sandbox> {
			return this.http.get<Sandbox>(this.baseUri + 'sandbox/' + (sandboxId == null ? '' : encodeURIComponent(sandboxId)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

