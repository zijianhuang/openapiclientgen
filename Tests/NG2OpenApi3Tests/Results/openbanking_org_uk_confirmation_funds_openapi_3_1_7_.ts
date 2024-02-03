import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstAvailableDateTime?: Date | null;

		/**
		 * All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastAvailableDateTime?: Date | null;
		TotalPages?: number | null;
	}

	/** Meta Data relevant to the payload */
	export interface MetaFormProperties {

		/**
		 * All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstAvailableDateTime: FormControl<Date | null | undefined>,

		/**
		 * All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastAvailableDateTime: FormControl<Date | null | undefined>,
		TotalPages: FormControl<number | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			FirstAvailableDateTime: new FormControl<Date | null | undefined>(undefined),
			LastAvailableDateTime: new FormControl<Date | null | undefined>(undefined),
			TotalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OBError1 {

		/**
		 * Low level textual error code, e.g., UK.OBIE.Field.Missing
		 * Required
		 */
		ErrorCode: string;

		/**
		 * A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'
		 * OBIE doesn't standardise this field
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

		/** URL to help remediate the problem, or provide more information, or to API Reference, or help etc */
		Url?: string | null;
	}
	export interface OBError1FormProperties {

		/**
		 * Low level textual error code, e.g., UK.OBIE.Field.Missing
		 * Required
		 */
		ErrorCode: FormControl<string | null | undefined>,

		/**
		 * A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'
		 * OBIE doesn't standardise this field
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

		/** URL to help remediate the problem, or provide more information, or to API Reference, or help etc */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateOBError1FormGroup() {
		return new FormGroup<OBError1FormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
			Url: new FormControl<string | null | undefined>(undefined),
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
		 * Required
		 * Minimum items: 1
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

	export interface OBFundsConfirmation1 {

		/** Required */
		Data: OBFundsConfirmation1Data;
	}
	export interface OBFundsConfirmation1FormProperties {
	}
	export function CreateOBFundsConfirmation1FormGroup() {
		return new FormGroup<OBFundsConfirmation1FormProperties>({
		});

	}

	export interface OBFundsConfirmation1Data {

		/**
		 * Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
		 * Required
		 */
		InstructedAmount: OBFundsConfirmation1DataInstructedAmount;

		/**
		 * Unique reference, as assigned by the CBPII, to unambiguously refer to the request related to the payment transaction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: string;
	}
	export interface OBFundsConfirmation1DataFormProperties {

		/**
		 * Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,

		/**
		 * Unique reference, as assigned by the CBPII, to unambiguously refer to the request related to the payment transaction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,
	}
	export function CreateOBFundsConfirmation1DataFormGroup() {
		return new FormGroup<OBFundsConfirmation1DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export interface OBFundsConfirmation1DataInstructedAmount {

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
	export interface OBFundsConfirmation1DataInstructedAmountFormProperties {

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
	export function CreateOBFundsConfirmation1DataInstructedAmountFormGroup() {
		return new FormGroup<OBFundsConfirmation1DataInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBFundsConfirmationConsent1 {

		/** Required */
		Data: OBFundsConfirmationConsent1Data;
	}
	export interface OBFundsConfirmationConsent1FormProperties {
	}
	export function CreateOBFundsConfirmationConsent1FormGroup() {
		return new FormGroup<OBFundsConfirmationConsent1FormProperties>({
		});

	}

	export interface OBFundsConfirmationConsent1Data {

		/**
		 * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
		 * Required
		 */
		DebtorAccount: OBFundsConfirmationConsent1DataDebtorAccount;

		/**
		 * Specified date and time the funds confirmation authorisation will expire.
		 * If this is not populated, the authorisation will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;
	}
	export interface OBFundsConfirmationConsent1DataFormProperties {

		/**
		 * Specified date and time the funds confirmation authorisation will expire.
		 * If this is not populated, the authorisation will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBFundsConfirmationConsent1DataFormGroup() {
		return new FormGroup<OBFundsConfirmationConsent1DataFormProperties>({
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBFundsConfirmationConsent1DataDebtorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * Name of the account, as assigned by the account servicing institution.
		 * Usage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.
		 * Max length: 350
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
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification?: string | null;
	}
	export interface OBFundsConfirmationConsent1DataDebtorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name of the account, as assigned by the account servicing institution.
		 * Usage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.
		 * Max length: 350
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
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification: FormControl<string | null | undefined>,
	}
	export function CreateOBFundsConfirmationConsent1DataDebtorAccountFormGroup() {
		return new FormGroup<OBFundsConfirmationConsent1DataDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBFundsConfirmationConsentResponse1 {

		/** Required */
		Data: OBFundsConfirmationConsentResponse1Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBFundsConfirmationConsentResponse1FormProperties {
	}
	export function CreateOBFundsConfirmationConsentResponse1FormGroup() {
		return new FormGroup<OBFundsConfirmationConsentResponse1FormProperties>({
		});

	}

	export interface OBFundsConfirmationConsentResponse1Data {

		/**
		 * Unique identification as assigned to identify the funds confirmation consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: Date;

		/**
		 * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
		 * Required
		 */
		DebtorAccount: OBFundsConfirmationConsentResponse1DataDebtorAccount;

		/**
		 * Specified date and time the funds confirmation authorisation will expire.
		 * If this is not populated, the authorisation will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: OBFundsConfirmationConsentResponse1DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBFundsConfirmationConsentResponse1DataFormProperties {

		/**
		 * Unique identification as assigned to identify the funds confirmation consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specified date and time the funds confirmation authorisation will expire.
		 * If this is not populated, the authorisation will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: FormControl<OBFundsConfirmationConsentResponse1DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBFundsConfirmationConsentResponse1DataFormGroup() {
		return new FormGroup<OBFundsConfirmationConsentResponse1DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<OBFundsConfirmationConsentResponse1DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBFundsConfirmationConsentResponse1DataDebtorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * Name of the account, as assigned by the account servicing institution.
		 * Usage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.
		 * Max length: 350
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
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification?: string | null;
	}
	export interface OBFundsConfirmationConsentResponse1DataDebtorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name of the account, as assigned by the account servicing institution.
		 * Usage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.
		 * Max length: 350
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
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification: FormControl<string | null | undefined>,
	}
	export function CreateOBFundsConfirmationConsentResponse1DataDebtorAccountFormGroup() {
		return new FormGroup<OBFundsConfirmationConsentResponse1DataDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export enum OBFundsConfirmationConsentResponse1DataStatus { Authorised = 'Authorised', AwaitingAuthorisation = 'AwaitingAuthorisation', Rejected = 'Rejected', Revoked = 'Revoked' }

	export interface OBFundsConfirmationResponse1 {

		/** Required */
		Data: OBFundsConfirmationResponse1Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBFundsConfirmationResponse1FormProperties {
	}
	export function CreateOBFundsConfirmationResponse1FormGroup() {
		return new FormGroup<OBFundsConfirmationResponse1FormProperties>({
		});

	}

	export interface OBFundsConfirmationResponse1Data {

		/**
		 * Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: Date;

		/**
		 * Flag to indicate the result of a confirmation of funds check.
		 * Required
		 */
		FundsAvailable: boolean;

		/**
		 * Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		FundsConfirmationId: string;

		/**
		 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
		 * Required
		 */
		InstructedAmount: OBFundsConfirmationResponse1DataInstructedAmount;

		/**
		 * Unique reference, as assigned by the CBPII, to unambiguously refer to the request related to the payment transaction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: string;
	}
	export interface OBFundsConfirmationResponse1DataFormProperties {

		/**
		 * Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Flag to indicate the result of a confirmation of funds check.
		 * Required
		 */
		FundsAvailable: FormControl<boolean | null | undefined>,

		/**
		 * Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		FundsConfirmationId: FormControl<string | null | undefined>,

		/**
		 * Unique reference, as assigned by the CBPII, to unambiguously refer to the request related to the payment transaction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,
	}
	export function CreateOBFundsConfirmationResponse1DataFormGroup() {
		return new FormGroup<OBFundsConfirmationResponse1DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			FundsAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			FundsConfirmationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export interface OBFundsConfirmationResponse1DataInstructedAmount {

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
	export interface OBFundsConfirmationResponse1DataInstructedAmountFormProperties {

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
	export function CreateOBFundsConfirmationResponse1DataInstructedAmountFormGroup() {
		return new FormGroup<OBFundsConfirmationResponse1DataInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create Funds Confirmation Consent
		 * Post funds-confirmation-consents
		 * @param {OBFundsConfirmationConsent1} requestBody Default
		 * @return {void} 
		 */
		CreateFundsConfirmationConsents(requestBody: OBFundsConfirmationConsent1): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'funds-confirmation-consents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Funds Confirmation Consent
		 * Delete funds-confirmation-consents/{ConsentId}
		 * @param {string} ConsentId ConsentId
		 * @return {void} 
		 */
		DeleteFundsConfirmationConsentsConsentId(ConsentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'funds-confirmation-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Funds Confirmation Consent
		 * Get funds-confirmation-consents/{ConsentId}
		 * @param {string} ConsentId ConsentId
		 * @return {void} Funds Confirmation Consent Read
		 */
		GetFundsConfirmationConsentsConsentId(ConsentId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'funds-confirmation-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Funds Confirmation
		 * Post funds-confirmations
		 * @param {OBFundsConfirmation1} requestBody Default
		 * @return {void} 
		 */
		CreateFundsConfirmations(requestBody: OBFundsConfirmation1): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'funds-confirmations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

