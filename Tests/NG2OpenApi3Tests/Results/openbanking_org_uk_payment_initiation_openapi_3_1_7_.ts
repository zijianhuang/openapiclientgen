import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface File {
	}
	export interface FileFormProperties {
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
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


	/** Amount of money associated with the charge type. */
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

	/** Amount of money associated with the charge type. */
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
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** Identifies the nature of the postal address. */
	export enum OBAddressTypeCode { Business = 0, Correspondence = 1, DeliveryTo = 2, MailTo = 3, POBox = 4, Postal = 5, Residential = 6, Statement = 7 }

	export interface OBCashAccountCreditor3 {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 */
		Identification: string;

		/**
		 * Name of the account, as assigned by the account servicing institution.  Usage The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.
		 * Required
		 */
		Name: string;

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: string;

		/**
		 * Secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 */
		SecondaryIdentification?: string | null;
	}
	export interface OBCashAccountCreditor3FormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name of the account, as assigned by the account servicing institution.  Usage The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: FormControl<string | null | undefined>,

		/**
		 * Secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 */
		SecondaryIdentification: FormControl<string | null | undefined>,
	}
	export function CreateOBCashAccountCreditor3FormGroup() {
		return new FormGroup<OBCashAccountCreditor3FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(34)]),
		});

	}


	/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
	export interface OBCashAccountDebtor4 {

		/** ^ Identification assigned by an institution to identify an account. This identification is known by the account owner. | Max256Text */
		Identification?: string | null;

		/** ^ Name of the account, as assigned by the account servicing institution.  Usage The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account. */
		Name?: string | null;

		/** ^ Name of the identification scheme, in a coded form as published in an external list. | Namespaced Enumeration OBExternalAccountIdentification4Code */
		SchemeName?: string | null;

		/** ^ This is secondary identification of the account, as assigned by the account servicing institution.  This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination) | Max34Text */
		SecondaryIdentification?: string | null;
	}

	/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
	export interface OBCashAccountDebtor4FormProperties {

		/** ^ Identification assigned by an institution to identify an account. This identification is known by the account owner. | Max256Text */
		Identification: FormControl<string | null | undefined>,

		/** ^ Name of the account, as assigned by the account servicing institution.  Usage The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account. */
		Name: FormControl<string | null | undefined>,

		/** ^ Name of the identification scheme, in a coded form as published in an external list. | Namespaced Enumeration OBExternalAccountIdentification4Code */
		SchemeName: FormControl<string | null | undefined>,

		/** ^ This is secondary identification of the account, as assigned by the account servicing institution.  This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination) | Max34Text */
		SecondaryIdentification: FormControl<string | null | undefined>,
	}
	export function CreateOBCashAccountDebtor4FormGroup() {
		return new FormGroup<OBCashAccountDebtor4FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SchemeName: new FormControl<string | null | undefined>(undefined),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
	export enum OBChargeBearerType1Code { BorneByCreditor = 0, BorneByDebtor = 1, FollowingServiceLevel = 2, Shared = 3 }

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


	/** Information that locates and identifies a specific address, as defined by postal services. */
	export interface OBPostalAddress6 {

		/**
		 * Minimum items: 0
		 * Maximum items: 7
		 */
		AddressLine?: Array<string>;

		/** Identifies the nature of the postal address. */
		AddressType?: OBAddressTypeCode | null;

		/**
		 * Number that identifies the position of a building on a street.
		 * Max length: 16
		 * Min length: 1
		 */
		BuildingNumber?: string | null;

		/** Nation with its own government. */
		Country?: string | null;

		/**
		 * Identifies a subdivision of a country such as state, region, county.
		 * Max length: 35
		 * Min length: 1
		 */
		CountrySubDivision?: string | null;

		/**
		 * Identification of a division of a large organisation or building.
		 * Max length: 70
		 * Min length: 1
		 */
		Department?: string | null;

		/**
		 * Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.
		 * Max length: 16
		 * Min length: 1
		 */
		PostCode?: string | null;

		/**
		 * Name of a street or thoroughfare.
		 * Max length: 70
		 * Min length: 1
		 */
		StreetName?: string | null;

		/**
		 * Identification of a sub-division of a large organisation or building.
		 * Max length: 70
		 * Min length: 1
		 */
		SubDepartment?: string | null;

		/**
		 * Name of a built-up area, with defined boundaries, and a local government.
		 * Max length: 35
		 * Min length: 1
		 */
		TownName?: string | null;
	}

	/** Information that locates and identifies a specific address, as defined by postal services. */
	export interface OBPostalAddress6FormProperties {

		/** Identifies the nature of the postal address. */
		AddressType: FormControl<OBAddressTypeCode | null | undefined>,

		/**
		 * Number that identifies the position of a building on a street.
		 * Max length: 16
		 * Min length: 1
		 */
		BuildingNumber: FormControl<string | null | undefined>,

		/** Nation with its own government. */
		Country: FormControl<string | null | undefined>,

		/**
		 * Identifies a subdivision of a country such as state, region, county.
		 * Max length: 35
		 * Min length: 1
		 */
		CountrySubDivision: FormControl<string | null | undefined>,

		/**
		 * Identification of a division of a large organisation or building.
		 * Max length: 70
		 * Min length: 1
		 */
		Department: FormControl<string | null | undefined>,

		/**
		 * Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.
		 * Max length: 16
		 * Min length: 1
		 */
		PostCode: FormControl<string | null | undefined>,

		/**
		 * Name of a street or thoroughfare.
		 * Max length: 70
		 * Min length: 1
		 */
		StreetName: FormControl<string | null | undefined>,

		/**
		 * Identification of a sub-division of a large organisation or building.
		 * Max length: 70
		 * Min length: 1
		 */
		SubDepartment: FormControl<string | null | undefined>,

		/**
		 * Name of a built-up area, with defined boundaries, and a local government.
		 * Max length: 35
		 * Min length: 1
		 */
		TownName: FormControl<string | null | undefined>,
	}
	export function CreateOBPostalAddress6FormGroup() {
		return new FormGroup<OBPostalAddress6FormProperties>({
			AddressType: new FormControl<OBAddressTypeCode | null | undefined>(undefined),
			BuildingNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16)]),
			Country: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Z]{2,2}$')]),
			CountrySubDivision: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Department: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			PostCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16)]),
			StreetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			SubDepartment: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			TownName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}


	/** The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments. */
	export interface OBRisk1 {

		/** Information that locates and identifies a specific address, as defined by postal services or in free format text. */
		DeliveryAddress?: OBRisk1DeliveryAddress;

		/**
		 * Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.
		 * Max length: 4
		 * Min length: 3
		 */
		MerchantCategoryCode?: string | null;

		/**
		 * The unique customer identifier of the PSU with the merchant.
		 * Max length: 70
		 * Min length: 1
		 */
		MerchantCustomerIdentification?: string | null;

		/** Specifies the payment context */
		PaymentContextCode?: OBRisk1PaymentContextCode | null;
	}

	/** The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments. */
	export interface OBRisk1FormProperties {

		/**
		 * Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.
		 * Max length: 4
		 * Min length: 3
		 */
		MerchantCategoryCode: FormControl<string | null | undefined>,

		/**
		 * The unique customer identifier of the PSU with the merchant.
		 * Max length: 70
		 * Min length: 1
		 */
		MerchantCustomerIdentification: FormControl<string | null | undefined>,

		/** Specifies the payment context */
		PaymentContextCode: FormControl<OBRisk1PaymentContextCode | null | undefined>,
	}
	export function CreateOBRisk1FormGroup() {
		return new FormGroup<OBRisk1FormProperties>({
			MerchantCategoryCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(4)]),
			MerchantCustomerIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			PaymentContextCode: new FormControl<OBRisk1PaymentContextCode | null | undefined>(undefined),
		});

	}

	export interface OBRisk1DeliveryAddress {

		/**
		 * Minimum items: 0
		 * Maximum items: 2
		 */
		AddressLine?: Array<string>;

		/**
		 * Number that identifies the position of a building on a street.
		 * Max length: 16
		 * Min length: 1
		 */
		BuildingNumber?: string | null;

		/**
		 * Nation with its own government, occupying a particular territory.
		 * Required
		 */
		Country: string;

		/**
		 * Identifies a subdivision of a country such as state, region, county.
		 * Max length: 35
		 * Min length: 1
		 */
		CountrySubDivision?: string | null;

		/**
		 * Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.
		 * Max length: 16
		 * Min length: 1
		 */
		PostCode?: string | null;

		/**
		 * Name of a street or thoroughfare.
		 * Max length: 70
		 * Min length: 1
		 */
		StreetName?: string | null;

		/**
		 * Name of a built-up area, with defined boundaries, and a local government.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		TownName: string;
	}
	export interface OBRisk1DeliveryAddressFormProperties {

		/**
		 * Number that identifies the position of a building on a street.
		 * Max length: 16
		 * Min length: 1
		 */
		BuildingNumber: FormControl<string | null | undefined>,

		/**
		 * Nation with its own government, occupying a particular territory.
		 * Required
		 */
		Country: FormControl<string | null | undefined>,

		/**
		 * Identifies a subdivision of a country such as state, region, county.
		 * Max length: 35
		 * Min length: 1
		 */
		CountrySubDivision: FormControl<string | null | undefined>,

		/**
		 * Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.
		 * Max length: 16
		 * Min length: 1
		 */
		PostCode: FormControl<string | null | undefined>,

		/**
		 * Name of a street or thoroughfare.
		 * Max length: 70
		 * Min length: 1
		 */
		StreetName: FormControl<string | null | undefined>,

		/**
		 * Name of a built-up area, with defined boundaries, and a local government.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		TownName: FormControl<string | null | undefined>,
	}
	export function CreateOBRisk1DeliveryAddressFormGroup() {
		return new FormGroup<OBRisk1DeliveryAddressFormProperties>({
			BuildingNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16)]),
			Country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{2,2}$')]),
			CountrySubDivision: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			PostCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16)]),
			StreetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			TownName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export enum OBRisk1PaymentContextCode { BillPayment = 0, EcommerceGoods = 1, EcommerceServices = 2, Other = 3, PartyToParty = 4 }


	/** Supporting Data provided by TPP, when requesting SCA Exemption. */
	export interface OBSCASupportData1 {

		/**
		 * Specifies a character string with a maximum length of 40 characters.
		 * Usage: This field indicates whether the PSU was subject to SCA performed by the TPP
		 * Max length: 40
		 */
		AppliedAuthenticationApproach?: OBSCASupportData1AppliedAuthenticationApproach | null;

		/**
		 * If the payment is recurring, then this field is populated with the transaction identifier of the previous payment occurrence so that the ASPSP can verify that the PISP, amount and the payee are the same as the previous occurrence. The value here refers to the payment id e.g. DomesticPaymentId
		 * Max length: 40
		 * Min length: 1
		 */
		ReferencePaymentOrderId?: string | null;

		/** This field allows a PISP to request specific SCA Exemption for a Payment Initiation */
		RequestedSCAExemptionType?: OBSCASupportData1RequestedSCAExemptionType | null;
	}

	/** Supporting Data provided by TPP, when requesting SCA Exemption. */
	export interface OBSCASupportData1FormProperties {

		/**
		 * Specifies a character string with a maximum length of 40 characters.
		 * Usage: This field indicates whether the PSU was subject to SCA performed by the TPP
		 * Max length: 40
		 */
		AppliedAuthenticationApproach: FormControl<OBSCASupportData1AppliedAuthenticationApproach | null | undefined>,

		/**
		 * If the payment is recurring, then this field is populated with the transaction identifier of the previous payment occurrence so that the ASPSP can verify that the PISP, amount and the payee are the same as the previous occurrence. The value here refers to the payment id e.g. DomesticPaymentId
		 * Max length: 40
		 * Min length: 1
		 */
		ReferencePaymentOrderId: FormControl<string | null | undefined>,

		/** This field allows a PISP to request specific SCA Exemption for a Payment Initiation */
		RequestedSCAExemptionType: FormControl<OBSCASupportData1RequestedSCAExemptionType | null | undefined>,
	}
	export function CreateOBSCASupportData1FormGroup() {
		return new FormGroup<OBSCASupportData1FormProperties>({
			AppliedAuthenticationApproach: new FormControl<OBSCASupportData1AppliedAuthenticationApproach | null | undefined>(undefined, [Validators.maxLength(40)]),
			ReferencePaymentOrderId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			RequestedSCAExemptionType: new FormControl<OBSCASupportData1RequestedSCAExemptionType | null | undefined>(undefined),
		});

	}

	export enum OBSCASupportData1AppliedAuthenticationApproach { CA = 0, SCA = 1 }

	export enum OBSCASupportData1RequestedSCAExemptionType { BillPayment = 0, ContactlessTravel = 1, EcommerceGoods = 2, EcommerceServices = 3, Kiosk = 4, Parking = 5, PartyToParty = 6 }


	/** Additional information that can not be captured in the structured fields and/or any other specific block. */
	export interface OBSupplementaryData1 {
	}

	/** Additional information that can not be captured in the structured fields and/or any other specific block. */
	export interface OBSupplementaryData1FormProperties {
	}
	export function CreateOBSupplementaryData1FormGroup() {
		return new FormGroup<OBSupplementaryData1FormProperties>({
		});

	}

	export interface OBWriteDomestic2 {

		/** Required */
		Data: OBWriteDomestic2Data;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteDomestic2FormProperties {
	}
	export function CreateOBWriteDomestic2FormGroup() {
		return new FormGroup<OBWriteDomestic2FormProperties>({
		});

	}

	export interface OBWriteDomestic2Data {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
		 * Required
		 */
		Initiation: OBWriteDomestic2DataInitiation;
	}
	export interface OBWriteDomestic2DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomestic2DataFormGroup() {
		return new FormGroup<OBWriteDomestic2DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface OBWriteDomestic2DataInitiation {

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteDomestic2DataInitiationCreditorAccount;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		CreditorPostalAddress?: OBPostalAddress6;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteDomestic2DataInitiationDebtorAccount;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: string;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteDomestic2DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteDomestic2DataInitiationRemittanceInformation;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteDomestic2DataInitiationFormProperties {

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomestic2DataInitiationFormGroup() {
		return new FormGroup<OBWriteDomestic2DataInitiationFormProperties>({
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteDomestic2DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomestic2DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomestic2DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteDomestic2DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomestic2DataInitiationDebtorAccount {

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
	export interface OBWriteDomestic2DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteDomestic2DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteDomestic2DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomestic2DataInitiationInstructedAmount {

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
	export interface OBWriteDomestic2DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteDomestic2DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteDomestic2DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomestic2DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteDomestic2DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomestic2DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteDomestic2DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteDomesticConsent4 {

		/** Required */
		Data: OBWriteDomesticConsent4Data;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteDomesticConsent4FormProperties {
	}
	export function CreateOBWriteDomesticConsent4FormGroup() {
		return new FormGroup<OBWriteDomesticConsent4FormProperties>({
		});

	}

	export interface OBWriteDomesticConsent4Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteDomesticConsent4DataAuthorisation;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
		 * Required
		 */
		Initiation: OBWriteDomesticConsent4DataInitiation;

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount?: OBWriteDomesticConsent4DataReadRefundAccount | null;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;
	}
	export interface OBWriteDomesticConsent4DataFormProperties {

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount: FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>,
	}
	export function CreateOBWriteDomesticConsent4DataFormGroup() {
		return new FormGroup<OBWriteDomesticConsent4DataFormProperties>({
			ReadRefundAccount: new FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>(undefined),
		});

	}

	export interface OBWriteDomesticConsent4DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteDomesticConsent4DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticConsent4DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteDomesticConsent4DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OBWriteDomesticConsent4DataAuthorisationAuthorisationType { Any = 0, Single = 1 }

	export interface OBWriteDomesticConsent4DataInitiation {

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteDomesticConsent4DataInitiationCreditorAccount;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		CreditorPostalAddress?: OBPostalAddress6;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteDomesticConsent4DataInitiationDebtorAccount;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: string;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteDomesticConsent4DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteDomesticConsent4DataInitiationRemittanceInformation;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteDomesticConsent4DataInitiationFormProperties {

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticConsent4DataInitiationFormGroup() {
		return new FormGroup<OBWriteDomesticConsent4DataInitiationFormProperties>({
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteDomesticConsent4DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticConsent4DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticConsent4DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticConsent4DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticConsent4DataInitiationDebtorAccount {

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
	export interface OBWriteDomesticConsent4DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteDomesticConsent4DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticConsent4DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticConsent4DataInitiationInstructedAmount {

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
	export interface OBWriteDomesticConsent4DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteDomesticConsent4DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteDomesticConsent4DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticConsent4DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteDomesticConsent4DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticConsent4DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteDomesticConsent4DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export enum OBWriteDomesticConsent4DataReadRefundAccount { No = 0, Yes = 1 }

	export interface OBWriteDomesticConsentResponse5 {

		/** Required */
		Data: OBWriteDomesticConsentResponse5Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteDomesticConsentResponse5FormProperties {
	}
	export function CreateOBWriteDomesticConsentResponse5FormGroup() {
		return new FormGroup<OBWriteDomesticConsentResponse5FormProperties>({
		});

	}

	export interface OBWriteDomesticConsentResponse5Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteDomesticConsentResponse5DataAuthorisation;
		OBWriteDomesticConsentResponse5DataCharges?: Array<OBWriteDomesticConsentResponse5DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime?: Date | null;

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime?: Date | null;

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime?: Date | null;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
		 * Required
		 */
		Initiation: OBWriteDomesticConsentResponse5DataInitiation;

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount?: OBWriteDomesticConsent4DataReadRefundAccount | null;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: OBWriteDomesticConsentResponse5DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteDomesticConsentResponse5DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime: FormControl<Date | null | undefined>,

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount: FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>,

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticConsentResponse5DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticConsentResponse5DataFormGroup() {
		return new FormGroup<OBWriteDomesticConsentResponse5DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CutOffDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpectedExecutionDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpectedSettlementDateTime: new FormControl<Date | null | undefined>(undefined),
			ReadRefundAccount: new FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticConsentResponse5DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticConsentResponse5DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteDomesticConsentResponse5DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticConsentResponse5DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteDomesticConsentResponse5DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteDomesticConsentResponse5DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteDomesticConsentResponse5DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticConsentResponse5DataChargesFormGroup() {
		return new FormGroup<OBWriteDomesticConsentResponse5DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticConsentResponse5DataInitiation {

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteDomesticConsentResponse5DataInitiationCreditorAccount;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		CreditorPostalAddress?: OBPostalAddress6;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteDomesticConsentResponse5DataInitiationDebtorAccount;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: string;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteDomesticConsentResponse5DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteDomesticConsentResponse5DataInitiationRemittanceInformation;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteDomesticConsentResponse5DataInitiationFormProperties {

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticConsentResponse5DataInitiationFormGroup() {
		return new FormGroup<OBWriteDomesticConsentResponse5DataInitiationFormProperties>({
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteDomesticConsentResponse5DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticConsentResponse5DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticConsentResponse5DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticConsentResponse5DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticConsentResponse5DataInitiationDebtorAccount {

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
	export interface OBWriteDomesticConsentResponse5DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteDomesticConsentResponse5DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticConsentResponse5DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticConsentResponse5DataInitiationInstructedAmount {

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
	export interface OBWriteDomesticConsentResponse5DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteDomesticConsentResponse5DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteDomesticConsentResponse5DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticConsentResponse5DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteDomesticConsentResponse5DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticConsentResponse5DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteDomesticConsentResponse5DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export enum OBWriteDomesticConsentResponse5DataStatus { Authorised = 0, AwaitingAuthorisation = 1, Consumed = 2, Rejected = 3 }

	export interface OBWriteDomesticResponse5 {

		/** Required */
		Data: OBWriteDomesticResponse5Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBWriteDomesticResponse5FormProperties {
	}
	export function CreateOBWriteDomesticResponse5FormGroup() {
		return new FormGroup<OBWriteDomesticResponse5FormProperties>({
		});

	}

	export interface OBWriteDomesticResponse5Data {
		OBWriteDomesticResponse5DataCharges?: Array<OBWriteDomesticResponse5DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: Date;

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the domestic payment resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		DomesticPaymentId: string;

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime?: Date | null;

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime?: Date | null;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
		 * Required
		 */
		Initiation: OBWriteDomesticResponse5DataInitiation;

		/** The multiple authorisation flow response from the ASPSP. */
		MultiAuthorisation?: OBWriteDomesticResponse5DataMultiAuthorisation;

		/** Unambiguous identification of the refund account to which a refund will be made as a result of the transaction. */
		Refund?: OBWriteDomesticResponse5DataRefund;

		/**
		 * Specifies the status of the payment information group.
		 * Required
		 */
		Status: OBWriteDomesticResponse5DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteDomesticResponse5DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: FormControl<Date | null | undefined>,

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the domestic payment resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		DomesticPaymentId: FormControl<string | null | undefined>,

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the status of the payment information group.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticResponse5DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticResponse5DataFormGroup() {
		return new FormGroup<OBWriteDomesticResponse5DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DomesticPaymentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			ExpectedExecutionDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpectedSettlementDateTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticResponse5DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticResponse5DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteDomesticResponse5DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticResponse5DataChargesFormGroup() {
		return new FormGroup<OBWriteDomesticResponse5DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticResponse5DataInitiation {

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteDomesticResponse5DataInitiationCreditorAccount;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		CreditorPostalAddress?: OBPostalAddress6;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteDomesticResponse5DataInitiationDebtorAccount;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: string;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteDomesticResponse5DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteDomesticResponse5DataInitiationRemittanceInformation;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteDomesticResponse5DataInitiationFormProperties {

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticResponse5DataInitiationFormGroup() {
		return new FormGroup<OBWriteDomesticResponse5DataInitiationFormProperties>({
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteDomesticResponse5DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticResponse5DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticResponse5DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticResponse5DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticResponse5DataInitiationDebtorAccount {

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
	export interface OBWriteDomesticResponse5DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteDomesticResponse5DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticResponse5DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticResponse5DataInitiationInstructedAmount {

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
	export interface OBWriteDomesticResponse5DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteDomesticResponse5DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteDomesticResponse5DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticResponse5DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteDomesticResponse5DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticResponse5DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteDomesticResponse5DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteDomesticResponse5DataMultiAuthorisation {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime?: Date | null;

		/** Number of authorisations received. */
		NumberReceived?: number | null;

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired?: number | null;

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: OBWriteDomesticResponse5DataMultiAuthorisationStatus;
	}
	export interface OBWriteDomesticResponse5DataMultiAuthorisationFormProperties {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime: FormControl<Date | null | undefined>,

		/** Number of authorisations received. */
		NumberReceived: FormControl<number | null | undefined>,

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired: FormControl<number | null | undefined>,

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>,
	}
	export function CreateOBWriteDomesticResponse5DataMultiAuthorisationFormGroup() {
		return new FormGroup<OBWriteDomesticResponse5DataMultiAuthorisationFormProperties>({
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
			NumberReceived: new FormControl<number | null | undefined>(undefined),
			NumberRequired: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OBWriteDomesticResponse5DataMultiAuthorisationStatus { Authorised = 0, AwaitingFurtherAuthorisation = 1, Rejected = 2 }

	export interface OBWriteDomesticResponse5DataRefund {

		/**
		 * Provides the details to identify an account.
		 * Required
		 */
		Account: OBWriteDomesticResponse5DataRefundAccount;
	}
	export interface OBWriteDomesticResponse5DataRefundFormProperties {
	}
	export function CreateOBWriteDomesticResponse5DataRefundFormGroup() {
		return new FormGroup<OBWriteDomesticResponse5DataRefundFormProperties>({
		});

	}

	export interface OBWriteDomesticResponse5DataRefundAccount {

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
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticResponse5DataRefundAccountFormProperties {

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
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticResponse5DataRefundAccountFormGroup() {
		return new FormGroup<OBWriteDomesticResponse5DataRefundAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export enum OBWriteDomesticResponse5DataStatus { AcceptedCreditSettlementCompleted = 0, AcceptedSettlementCompleted = 1, AcceptedSettlementInProcess = 2, AcceptedWithoutPosting = 3, Pending = 4, Rejected = 5 }

	export interface OBWriteDomesticScheduled2 {

		/** Required */
		Data: OBWriteDomesticScheduled2Data;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteDomesticScheduled2FormProperties {
	}
	export function CreateOBWriteDomesticScheduled2FormGroup() {
		return new FormGroup<OBWriteDomesticScheduled2FormProperties>({
		});

	}

	export interface OBWriteDomesticScheduled2Data {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
		 * Required
		 */
		Initiation: OBWriteDomesticScheduled2DataInitiation;
	}
	export interface OBWriteDomesticScheduled2DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduled2DataFormGroup() {
		return new FormGroup<OBWriteDomesticScheduled2DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface OBWriteDomesticScheduled2DataInitiation {

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteDomesticScheduled2DataInitiationCreditorAccount;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		CreditorPostalAddress?: OBPostalAddress6;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteDomesticScheduled2DataInitiationDebtorAccount;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteDomesticScheduled2DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteDomesticScheduled2DataInitiationRemittanceInformation;

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: Date;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteDomesticScheduled2DataInitiationFormProperties {

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduled2DataInitiationFormGroup() {
		return new FormGroup<OBWriteDomesticScheduled2DataInitiationFormProperties>({
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			RequestedExecutionDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticScheduled2DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticScheduled2DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticScheduled2DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticScheduled2DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticScheduled2DataInitiationDebtorAccount {

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
	export interface OBWriteDomesticScheduled2DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteDomesticScheduled2DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticScheduled2DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticScheduled2DataInitiationInstructedAmount {

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
	export interface OBWriteDomesticScheduled2DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteDomesticScheduled2DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteDomesticScheduled2DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticScheduled2DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteDomesticScheduled2DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduled2DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteDomesticScheduled2DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteDomesticScheduledConsent4 {

		/** Required */
		Data: OBWriteDomesticScheduledConsent4Data;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteDomesticScheduledConsent4FormProperties {
	}
	export function CreateOBWriteDomesticScheduledConsent4FormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsent4FormProperties>({
		});

	}

	export interface OBWriteDomesticScheduledConsent4Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteDomesticScheduledConsent4DataAuthorisation;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
		 * Required
		 */
		Initiation: OBWriteDomesticScheduledConsent4DataInitiation;

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: OBWriteDomesticScheduledConsent4DataPermission;

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount?: OBWriteDomesticConsent4DataReadRefundAccount | null;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;
	}
	export interface OBWriteDomesticScheduledConsent4DataFormProperties {

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>,

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount: FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledConsent4DataFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsent4DataFormProperties>({
			Permission: new FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>(undefined, [Validators.required]),
			ReadRefundAccount: new FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>(undefined),
		});

	}

	export interface OBWriteDomesticScheduledConsent4DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteDomesticScheduledConsent4DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledConsent4DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsent4DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteDomesticScheduledConsent4DataInitiation {

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteDomesticScheduledConsent4DataInitiationCreditorAccount;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		CreditorPostalAddress?: OBPostalAddress6;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteDomesticScheduledConsent4DataInitiationDebtorAccount;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteDomesticScheduledConsent4DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteDomesticScheduledConsent4DataInitiationRemittanceInformation;

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: Date;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteDomesticScheduledConsent4DataInitiationFormProperties {

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledConsent4DataInitiationFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsent4DataInitiationFormProperties>({
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			RequestedExecutionDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticScheduledConsent4DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticScheduledConsent4DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticScheduledConsent4DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsent4DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticScheduledConsent4DataInitiationDebtorAccount {

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
	export interface OBWriteDomesticScheduledConsent4DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteDomesticScheduledConsent4DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsent4DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticScheduledConsent4DataInitiationInstructedAmount {

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
	export interface OBWriteDomesticScheduledConsent4DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteDomesticScheduledConsent4DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsent4DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticScheduledConsent4DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteDomesticScheduledConsent4DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledConsent4DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsent4DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export enum OBWriteDomesticScheduledConsent4DataPermission { Create = 0 }

	export interface OBWriteDomesticScheduledConsentResponse5 {

		/** Required */
		Data: OBWriteDomesticScheduledConsentResponse5Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteDomesticScheduledConsentResponse5FormProperties {
	}
	export function CreateOBWriteDomesticScheduledConsentResponse5FormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsentResponse5FormProperties>({
		});

	}

	export interface OBWriteDomesticScheduledConsentResponse5Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteDomesticScheduledConsentResponse5DataAuthorisation;
		OBWriteDomesticScheduledConsentResponse5DataCharges?: Array<OBWriteDomesticScheduledConsentResponse5DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime?: Date | null;

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime?: Date | null;

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime?: Date | null;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
		 * Required
		 */
		Initiation: OBWriteDomesticScheduledConsentResponse5DataInitiation;

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: OBWriteDomesticScheduledConsent4DataPermission;

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount?: OBWriteDomesticConsent4DataReadRefundAccount | null;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: OBWriteDomesticConsentResponse5DataStatus;

		/**
		 * Date and time at which the consent resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteDomesticScheduledConsentResponse5DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>,

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount: FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>,

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticConsentResponse5DataStatus | null | undefined>,

		/**
		 * Date and time at which the consent resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledConsentResponse5DataFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsentResponse5DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CutOffDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpectedExecutionDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpectedSettlementDateTime: new FormControl<Date | null | undefined>(undefined),
			Permission: new FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>(undefined, [Validators.required]),
			ReadRefundAccount: new FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticConsentResponse5DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticScheduledConsentResponse5DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteDomesticScheduledConsentResponse5DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledConsentResponse5DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsentResponse5DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteDomesticScheduledConsentResponse5DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteDomesticScheduledConsentResponse5DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledConsentResponse5DataChargesFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsentResponse5DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticScheduledConsentResponse5DataInitiation {

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		CreditorPostalAddress?: OBPostalAddress6;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation;

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: Date;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteDomesticScheduledConsentResponse5DataInitiationFormProperties {

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledConsentResponse5DataInitiationFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsentResponse5DataInitiationFormProperties>({
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			RequestedExecutionDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount {

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
	export interface OBWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount {

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
	export interface OBWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteDomesticScheduledResponse5 {

		/** Required */
		Data: OBWriteDomesticScheduledResponse5Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBWriteDomesticScheduledResponse5FormProperties {
	}
	export function CreateOBWriteDomesticScheduledResponse5FormGroup() {
		return new FormGroup<OBWriteDomesticScheduledResponse5FormProperties>({
		});

	}

	export interface OBWriteDomesticScheduledResponse5Data {
		OBWriteDomesticScheduledResponse5DataCharges?: Array<OBWriteDomesticScheduledResponse5DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: Date;

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the domestic schedule payment resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		DomesticScheduledPaymentId: string;

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime?: Date | null;

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime?: Date | null;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
		 * Required
		 */
		Initiation: OBWriteDomesticScheduledResponse5DataInitiation;

		/** The multiple authorisation flow response from the ASPSP. */
		MultiAuthorisation?: OBWriteDomesticScheduledResponse5DataMultiAuthorisation;

		/** Unambiguous identification of the refund account to which a refund will be made as a result of the transaction. */
		Refund?: OBWriteDomesticScheduledResponse5DataRefund;

		/**
		 * Specifies the status of the payment order resource.
		 * Required
		 */
		Status: OBWriteDomesticScheduledResponse5DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteDomesticScheduledResponse5DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: FormControl<Date | null | undefined>,

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the domestic schedule payment resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		DomesticScheduledPaymentId: FormControl<string | null | undefined>,

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the status of the payment order resource.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticScheduledResponse5DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledResponse5DataFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledResponse5DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DomesticScheduledPaymentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			ExpectedExecutionDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpectedSettlementDateTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticScheduledResponse5DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticScheduledResponse5DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteDomesticScheduledResponse5DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledResponse5DataChargesFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledResponse5DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticScheduledResponse5DataInitiation {

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteDomesticScheduledResponse5DataInitiationCreditorAccount;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		CreditorPostalAddress?: OBPostalAddress6;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteDomesticScheduledResponse5DataInitiationDebtorAccount;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteDomesticScheduledResponse5DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteDomesticScheduledResponse5DataInitiationRemittanceInformation;

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: Date;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteDomesticScheduledResponse5DataInitiationFormProperties {

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledResponse5DataInitiationFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledResponse5DataInitiationFormProperties>({
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			RequestedExecutionDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticScheduledResponse5DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticScheduledResponse5DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticScheduledResponse5DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledResponse5DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticScheduledResponse5DataInitiationDebtorAccount {

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
	export interface OBWriteDomesticScheduledResponse5DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteDomesticScheduledResponse5DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledResponse5DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticScheduledResponse5DataInitiationInstructedAmount {

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
	export interface OBWriteDomesticScheduledResponse5DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteDomesticScheduledResponse5DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledResponse5DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticScheduledResponse5DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteDomesticScheduledResponse5DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledResponse5DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledResponse5DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteDomesticScheduledResponse5DataMultiAuthorisation {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime?: Date | null;

		/** Number of authorisations received. */
		NumberReceived?: number | null;

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired?: number | null;

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: OBWriteDomesticResponse5DataMultiAuthorisationStatus;
	}
	export interface OBWriteDomesticScheduledResponse5DataMultiAuthorisationFormProperties {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime: FormControl<Date | null | undefined>,

		/** Number of authorisations received. */
		NumberReceived: FormControl<number | null | undefined>,

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired: FormControl<number | null | undefined>,

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>,
	}
	export function CreateOBWriteDomesticScheduledResponse5DataMultiAuthorisationFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledResponse5DataMultiAuthorisationFormProperties>({
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
			NumberReceived: new FormControl<number | null | undefined>(undefined),
			NumberRequired: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticScheduledResponse5DataRefund {

		/**
		 * Provides the details to identify an account.
		 * Required
		 */
		Account: OBWriteDomesticScheduledResponse5DataRefundAccount;
	}
	export interface OBWriteDomesticScheduledResponse5DataRefundFormProperties {
	}
	export function CreateOBWriteDomesticScheduledResponse5DataRefundFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledResponse5DataRefundFormProperties>({
		});

	}

	export interface OBWriteDomesticScheduledResponse5DataRefundAccount {

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
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticScheduledResponse5DataRefundAccountFormProperties {

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
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticScheduledResponse5DataRefundAccountFormGroup() {
		return new FormGroup<OBWriteDomesticScheduledResponse5DataRefundAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export enum OBWriteDomesticScheduledResponse5DataStatus { Cancelled = 0, InitiationCompleted = 1, InitiationFailed = 2, InitiationPending = 3 }

	export interface OBWriteDomesticStandingOrder3 {

		/** Required */
		Data: OBWriteDomesticStandingOrder3Data;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteDomesticStandingOrder3FormProperties {
	}
	export function CreateOBWriteDomesticStandingOrder3FormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrder3FormProperties>({
		});

	}

	export interface OBWriteDomesticStandingOrder3Data {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
		 * Required
		 */
		Initiation: OBWriteDomesticStandingOrder3DataInitiation;
	}
	export interface OBWriteDomesticStandingOrder3DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticStandingOrder3DataFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrder3DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface OBWriteDomesticStandingOrder3DataInitiation {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 */
		CreditorAccount: OBWriteDomesticStandingOrder3DataInitiationCreditorAccount;

		/** Provides the details to identify the debtor account. */
		DebtorAccount?: OBWriteDomesticStandingOrder3DataInitiationDebtorAccount;

		/** The amount of the final Standing Order */
		FinalPaymentAmount?: OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount;

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime?: Date | null;

		/**
		 * The amount of the first Standing Order
		 * Required
		 */
		FirstPaymentAmount: OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount;

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: Date;

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: string;

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments?: string | null;

		/** The amount of the recurring Standing Order */
		RecurringPaymentAmount?: OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount;

		/**
		 * The date on which the first recurring payment for a Standing Order schedule will be made.
		 * Usage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RecurringPaymentDateTime?: Date | null;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteDomesticStandingOrder3DataInitiationFormProperties {

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments: FormControl<string | null | undefined>,

		/**
		 * The date on which the first recurring payment for a Standing Order schedule will be made.
		 * Usage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RecurringPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticStandingOrder3DataInitiationFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrder3DataInitiationFormProperties>({
			FinalPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			FirstPaymentDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$')]),
			NumberOfPayments: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			RecurringPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export interface OBWriteDomesticStandingOrder3DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticStandingOrder3DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticStandingOrder3DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrder3DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticStandingOrder3DataInitiationDebtorAccount {

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
	export interface OBWriteDomesticStandingOrder3DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrder3DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrder3DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount {

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
	export interface OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount {

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
	export interface OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount {

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
	export interface OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsent5 {

		/** Required */
		Data: OBWriteDomesticStandingOrderConsent5Data;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteDomesticStandingOrderConsent5FormProperties {
	}
	export function CreateOBWriteDomesticStandingOrderConsent5FormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsent5FormProperties>({
		});

	}

	export interface OBWriteDomesticStandingOrderConsent5Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteDomesticStandingOrderConsent5DataAuthorisation;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
		 * Required
		 */
		Initiation: OBWriteDomesticStandingOrderConsent5DataInitiation;

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: OBWriteDomesticScheduledConsent4DataPermission;

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount?: OBWriteDomesticConsent4DataReadRefundAccount | null;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;
	}
	export interface OBWriteDomesticStandingOrderConsent5DataFormProperties {

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>,

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount: FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>,
	}
	export function CreateOBWriteDomesticStandingOrderConsent5DataFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsent5DataFormProperties>({
			Permission: new FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>(undefined, [Validators.required]),
			ReadRefundAccount: new FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>(undefined),
		});

	}

	export interface OBWriteDomesticStandingOrderConsent5DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteDomesticStandingOrderConsent5DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticStandingOrderConsent5DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsent5DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteDomesticStandingOrderConsent5DataInitiation {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 */
		CreditorAccount: OBWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount;

		/** Provides the details to identify the debtor account. */
		DebtorAccount?: OBWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount;

		/** The amount of the final Standing Order */
		FinalPaymentAmount?: OBWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount;

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime?: Date | null;

		/**
		 * The amount of the first Standing Order
		 * Required
		 */
		FirstPaymentAmount: OBWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount;

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: Date;

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: string;

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments?: string | null;

		/** The amount of the recurring Standing Order */
		RecurringPaymentAmount?: OBWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount;

		/**
		 * The date on which the first recurring payment for a Standing Order schedule will be made.
		 * Usage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RecurringPaymentDateTime?: Date | null;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteDomesticStandingOrderConsent5DataInitiationFormProperties {

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments: FormControl<string | null | undefined>,

		/**
		 * The date on which the first recurring payment for a Standing Order schedule will be made.
		 * Usage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RecurringPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticStandingOrderConsent5DataInitiationFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsent5DataInitiationFormProperties>({
			FinalPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			FirstPaymentDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$')]),
			NumberOfPayments: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			RecurringPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticStandingOrderConsent5DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticStandingOrderConsent5DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsent5DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount {

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
	export interface OBWriteDomesticStandingOrderConsent5DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrderConsent5DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsent5DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount {

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
	export interface OBWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount {

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
	export interface OBWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount {

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
	export interface OBWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsentResponse6 {

		/** Required */
		Data: OBWriteDomesticStandingOrderConsentResponse6Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteDomesticStandingOrderConsentResponse6FormProperties {
	}
	export function CreateOBWriteDomesticStandingOrderConsentResponse6FormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsentResponse6FormProperties>({
		});

	}

	export interface OBWriteDomesticStandingOrderConsentResponse6Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteDomesticStandingOrderConsentResponse6DataAuthorisation;
		OBWriteDomesticStandingOrderConsentResponse6DataCharges?: Array<OBWriteDomesticStandingOrderConsentResponse6DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime?: Date | null;

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
		 * Required
		 */
		Initiation: OBWriteDomesticStandingOrderConsentResponse6DataInitiation;

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: OBWriteDomesticScheduledConsent4DataPermission;

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount?: OBWriteDomesticConsent4DataReadRefundAccount | null;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: OBWriteDomesticConsentResponse5DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteDomesticStandingOrderConsentResponse6DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>,

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount: FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>,

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticConsentResponse5DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticStandingOrderConsentResponse6DataFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsentResponse6DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CutOffDateTime: new FormControl<Date | null | undefined>(undefined),
			Permission: new FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>(undefined, [Validators.required]),
			ReadRefundAccount: new FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticConsentResponse5DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsentResponse6DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteDomesticStandingOrderConsentResponse6DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticStandingOrderConsentResponse6DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsentResponse6DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteDomesticStandingOrderConsentResponse6DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteDomesticStandingOrderConsentResponse6DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticStandingOrderConsentResponse6DataChargesFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsentResponse6DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsentResponse6DataInitiation {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 */
		CreditorAccount: OBWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount;

		/** The amount of the final Standing Order */
		FinalPaymentAmount?: OBWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount;

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime?: Date | null;

		/**
		 * The amount of the first Standing Order
		 * Required
		 */
		FirstPaymentAmount: OBWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount;

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: Date;

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: string;

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments?: string | null;

		/** The amount of the recurring Standing Order */
		RecurringPaymentAmount?: OBWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount;

		/**
		 * The date on which the first recurring payment for a Standing Order schedule will be made.
		 * Usage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RecurringPaymentDateTime?: Date | null;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteDomesticStandingOrderConsentResponse6DataInitiationFormProperties {

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments: FormControl<string | null | undefined>,

		/**
		 * The date on which the first recurring payment for a Standing Order schedule will be made.
		 * Usage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RecurringPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticStandingOrderConsentResponse6DataInitiationFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsentResponse6DataInitiationFormProperties>({
			FinalPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			FirstPaymentDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$')]),
			NumberOfPayments: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			RecurringPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount {

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
	export interface OBWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount {

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
	export interface OBWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount {

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
	export interface OBWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount {

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
	export interface OBWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticStandingOrderResponse6 {

		/** Required */
		Data: OBWriteDomesticStandingOrderResponse6Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBWriteDomesticStandingOrderResponse6FormProperties {
	}
	export function CreateOBWriteDomesticStandingOrderResponse6FormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderResponse6FormProperties>({
		});

	}

	export interface OBWriteDomesticStandingOrderResponse6Data {
		OBWriteDomesticStandingOrderResponse6DataCharges?: Array<OBWriteDomesticStandingOrderResponse6DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the domestic standing order resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		DomesticStandingOrderId: string;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
		 * Required
		 */
		Initiation: OBWriteDomesticStandingOrderResponse6DataInitiation;

		/** The multiple authorisation flow response from the ASPSP. */
		MultiAuthorisation?: OBWriteDomesticStandingOrderResponse6DataMultiAuthorisation;

		/** Unambiguous identification of the refund account to which a refund will be made as a result of the transaction. */
		Refund?: OBWriteDomesticStandingOrderResponse6DataRefund;

		/**
		 * Specifies the status of the payment order resource.
		 * Required
		 */
		Status: OBWriteDomesticScheduledResponse5DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteDomesticStandingOrderResponse6DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the domestic standing order resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		DomesticStandingOrderId: FormControl<string | null | undefined>,

		/**
		 * Specifies the status of the payment order resource.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticScheduledResponse5DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteDomesticStandingOrderResponse6DataFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderResponse6DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DomesticStandingOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			Status: new FormControl<OBWriteDomesticScheduledResponse5DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticStandingOrderResponse6DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteDomesticStandingOrderResponse6DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticStandingOrderResponse6DataChargesFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderResponse6DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticStandingOrderResponse6DataInitiation {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 */
		CreditorAccount: OBWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount;

		/** The amount of the final Standing Order */
		FinalPaymentAmount?: OBWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount;

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime?: Date | null;

		/**
		 * The amount of the first Standing Order
		 * Required
		 */
		FirstPaymentAmount: OBWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount;

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: Date;

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: string;

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments?: string | null;

		/** The amount of the recurring Standing Order */
		RecurringPaymentAmount?: OBWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount;

		/**
		 * The date on which the first recurring payment for a Standing Order schedule will be made.
		 * Usage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RecurringPaymentDateTime?: Date | null;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteDomesticStandingOrderResponse6DataInitiationFormProperties {

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments: FormControl<string | null | undefined>,

		/**
		 * The date on which the first recurring payment for a Standing Order schedule will be made.
		 * Usage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RecurringPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteDomesticStandingOrderResponse6DataInitiationFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderResponse6DataInitiationFormProperties>({
			FinalPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			FirstPaymentDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$')]),
			NumberOfPayments: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			RecurringPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export interface OBWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticStandingOrderResponse6DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticStandingOrderResponse6DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderResponse6DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount {

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
	export interface OBWriteDomesticStandingOrderResponse6DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrderResponse6DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderResponse6DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount {

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
	export interface OBWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount {

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
	export interface OBWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount {

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
	export interface OBWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmountFormProperties {

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
	export function CreateOBWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteDomesticStandingOrderResponse6DataMultiAuthorisation {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime?: Date | null;

		/** Number of authorisations received. */
		NumberReceived?: number | null;

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired?: number | null;

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: OBWriteDomesticResponse5DataMultiAuthorisationStatus;
	}
	export interface OBWriteDomesticStandingOrderResponse6DataMultiAuthorisationFormProperties {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime: FormControl<Date | null | undefined>,

		/** Number of authorisations received. */
		NumberReceived: FormControl<number | null | undefined>,

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired: FormControl<number | null | undefined>,

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>,
	}
	export function CreateOBWriteDomesticStandingOrderResponse6DataMultiAuthorisationFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderResponse6DataMultiAuthorisationFormProperties>({
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
			NumberReceived: new FormControl<number | null | undefined>(undefined),
			NumberRequired: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteDomesticStandingOrderResponse6DataRefund {

		/**
		 * Provides the details to identify an account.
		 * Required
		 */
		Account: OBWriteDomesticStandingOrderResponse6DataRefundAccount;
	}
	export interface OBWriteDomesticStandingOrderResponse6DataRefundFormProperties {
	}
	export function CreateOBWriteDomesticStandingOrderResponse6DataRefundFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderResponse6DataRefundFormProperties>({
		});

	}

	export interface OBWriteDomesticStandingOrderResponse6DataRefundAccount {

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
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteDomesticStandingOrderResponse6DataRefundAccountFormProperties {

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
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteDomesticStandingOrderResponse6DataRefundAccountFormGroup() {
		return new FormGroup<OBWriteDomesticStandingOrderResponse6DataRefundAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteFile2 {

		/** Required */
		Data: OBWriteFile2Data;
	}
	export interface OBWriteFile2FormProperties {
	}
	export function CreateOBWriteFile2FormGroup() {
		return new FormGroup<OBWriteFile2FormProperties>({
		});

	}

	export interface OBWriteFile2Data {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
		 * Required
		 */
		Initiation: OBWriteFile2DataInitiation;
	}
	export interface OBWriteFile2DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteFile2DataFormGroup() {
		return new FormGroup<OBWriteFile2DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface OBWriteFile2DataInitiation {

		/** Total of all individual amounts included in the group, irrespective of currencies. */
		ControlSum?: number | null;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteFile2DataInitiationDebtorAccount;

		/**
		 * A base64 encoding of a SHA256 hash of the file to be uploaded.
		 * Required
		 * Max length: 44
		 * Min length: 1
		 */
		FileHash: string;

		/**
		 * Reference for the file.
		 * Max length: 40
		 * Min length: 1
		 */
		FileReference?: string | null;

		/**
		 * Specifies the payment file type.
		 * Required
		 */
		FileType: string;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/** Number of individual transactions contained in the payment information group. */
		NumberOfTransactions?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteFile2DataInitiationRemittanceInformation;

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RequestedExecutionDateTime?: Date | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteFile2DataInitiationFormProperties {

		/** Total of all individual amounts included in the group, irrespective of currencies. */
		ControlSum: FormControl<number | null | undefined>,

		/**
		 * A base64 encoding of a SHA256 hash of the file to be uploaded.
		 * Required
		 * Max length: 44
		 * Min length: 1
		 */
		FileHash: FormControl<string | null | undefined>,

		/**
		 * Reference for the file.
		 * Max length: 40
		 * Min length: 1
		 */
		FileReference: FormControl<string | null | undefined>,

		/**
		 * Specifies the payment file type.
		 * Required
		 */
		FileType: FormControl<string | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/** Number of individual transactions contained in the payment information group. */
		NumberOfTransactions: FormControl<string | null | undefined>,

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RequestedExecutionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteFile2DataInitiationFormGroup() {
		return new FormGroup<OBWriteFile2DataInitiationFormProperties>({
			ControlSum: new FormControl<number | null | undefined>(undefined),
			FileHash: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(44)]),
			FileReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			FileType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			NumberOfTransactions: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]{1,15}')]),
			RequestedExecutionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteFile2DataInitiationDebtorAccount {

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
	export interface OBWriteFile2DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteFile2DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteFile2DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteFile2DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteFile2DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteFile2DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteFile2DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteFileConsent3 {

		/** Required */
		Data: OBWriteFileConsent3Data;
	}
	export interface OBWriteFileConsent3FormProperties {
	}
	export function CreateOBWriteFileConsent3FormGroup() {
		return new FormGroup<OBWriteFileConsent3FormProperties>({
		});

	}

	export interface OBWriteFileConsent3Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteFileConsent3DataAuthorisation;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
		 * Required
		 */
		Initiation: OBWriteFileConsent3DataInitiation;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;
	}
	export interface OBWriteFileConsent3DataFormProperties {
	}
	export function CreateOBWriteFileConsent3DataFormGroup() {
		return new FormGroup<OBWriteFileConsent3DataFormProperties>({
		});

	}

	export interface OBWriteFileConsent3DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteFileConsent3DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteFileConsent3DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteFileConsent3DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteFileConsent3DataInitiation {

		/** Total of all individual amounts included in the group, irrespective of currencies. */
		ControlSum?: number | null;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteFileConsent3DataInitiationDebtorAccount;

		/**
		 * A base64 encoding of a SHA256 hash of the file to be uploaded.
		 * Required
		 * Max length: 44
		 * Min length: 1
		 */
		FileHash: string;

		/**
		 * Reference for the file.
		 * Max length: 40
		 * Min length: 1
		 */
		FileReference?: string | null;

		/**
		 * Specifies the payment file type.
		 * Required
		 */
		FileType: string;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/** Number of individual transactions contained in the payment information group. */
		NumberOfTransactions?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteFileConsent3DataInitiationRemittanceInformation;

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RequestedExecutionDateTime?: Date | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteFileConsent3DataInitiationFormProperties {

		/** Total of all individual amounts included in the group, irrespective of currencies. */
		ControlSum: FormControl<number | null | undefined>,

		/**
		 * A base64 encoding of a SHA256 hash of the file to be uploaded.
		 * Required
		 * Max length: 44
		 * Min length: 1
		 */
		FileHash: FormControl<string | null | undefined>,

		/**
		 * Reference for the file.
		 * Max length: 40
		 * Min length: 1
		 */
		FileReference: FormControl<string | null | undefined>,

		/**
		 * Specifies the payment file type.
		 * Required
		 */
		FileType: FormControl<string | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/** Number of individual transactions contained in the payment information group. */
		NumberOfTransactions: FormControl<string | null | undefined>,

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RequestedExecutionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteFileConsent3DataInitiationFormGroup() {
		return new FormGroup<OBWriteFileConsent3DataInitiationFormProperties>({
			ControlSum: new FormControl<number | null | undefined>(undefined),
			FileHash: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(44)]),
			FileReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			FileType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			NumberOfTransactions: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]{1,15}')]),
			RequestedExecutionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteFileConsent3DataInitiationDebtorAccount {

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
	export interface OBWriteFileConsent3DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteFileConsent3DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteFileConsent3DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteFileConsent3DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteFileConsent3DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteFileConsent3DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteFileConsent3DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteFileConsentResponse4 {

		/** Required */
		Data: OBWriteFileConsentResponse4Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBWriteFileConsentResponse4FormProperties {
	}
	export function CreateOBWriteFileConsentResponse4FormGroup() {
		return new FormGroup<OBWriteFileConsentResponse4FormProperties>({
		});

	}

	export interface OBWriteFileConsentResponse4Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteFileConsentResponse4DataAuthorisation;
		OBWriteFileConsentResponse4DataCharges?: Array<OBWriteFileConsentResponse4DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime?: Date | null;

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
		 * Required
		 */
		Initiation: OBWriteFileConsentResponse4DataInitiation;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: OBWriteFileConsentResponse4DataStatus;

		/**
		 * Date and time at which the consent resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteFileConsentResponse4DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: FormControl<OBWriteFileConsentResponse4DataStatus | null | undefined>,

		/**
		 * Date and time at which the consent resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteFileConsentResponse4DataFormGroup() {
		return new FormGroup<OBWriteFileConsentResponse4DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CutOffDateTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<OBWriteFileConsentResponse4DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteFileConsentResponse4DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteFileConsentResponse4DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteFileConsentResponse4DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteFileConsentResponse4DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteFileConsentResponse4DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteFileConsentResponse4DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteFileConsentResponse4DataChargesFormGroup() {
		return new FormGroup<OBWriteFileConsentResponse4DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteFileConsentResponse4DataInitiation {

		/** Total of all individual amounts included in the group, irrespective of currencies. */
		ControlSum?: number | null;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteFileConsentResponse4DataInitiationDebtorAccount;

		/**
		 * A base64 encoding of a SHA256 hash of the file to be uploaded.
		 * Required
		 * Max length: 44
		 * Min length: 1
		 */
		FileHash: string;

		/**
		 * Reference for the file.
		 * Max length: 40
		 * Min length: 1
		 */
		FileReference?: string | null;

		/**
		 * Specifies the payment file type.
		 * Required
		 */
		FileType: string;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/** Number of individual transactions contained in the payment information group. */
		NumberOfTransactions?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteFileConsentResponse4DataInitiationRemittanceInformation;

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RequestedExecutionDateTime?: Date | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteFileConsentResponse4DataInitiationFormProperties {

		/** Total of all individual amounts included in the group, irrespective of currencies. */
		ControlSum: FormControl<number | null | undefined>,

		/**
		 * A base64 encoding of a SHA256 hash of the file to be uploaded.
		 * Required
		 * Max length: 44
		 * Min length: 1
		 */
		FileHash: FormControl<string | null | undefined>,

		/**
		 * Reference for the file.
		 * Max length: 40
		 * Min length: 1
		 */
		FileReference: FormControl<string | null | undefined>,

		/**
		 * Specifies the payment file type.
		 * Required
		 */
		FileType: FormControl<string | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/** Number of individual transactions contained in the payment information group. */
		NumberOfTransactions: FormControl<string | null | undefined>,

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RequestedExecutionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteFileConsentResponse4DataInitiationFormGroup() {
		return new FormGroup<OBWriteFileConsentResponse4DataInitiationFormProperties>({
			ControlSum: new FormControl<number | null | undefined>(undefined),
			FileHash: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(44)]),
			FileReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			FileType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			NumberOfTransactions: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]{1,15}')]),
			RequestedExecutionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteFileConsentResponse4DataInitiationDebtorAccount {

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
	export interface OBWriteFileConsentResponse4DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteFileConsentResponse4DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteFileConsentResponse4DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteFileConsentResponse4DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteFileConsentResponse4DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteFileConsentResponse4DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteFileConsentResponse4DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export enum OBWriteFileConsentResponse4DataStatus { Authorised = 0, AwaitingAuthorisation = 1, AwaitingUpload = 2, Consumed = 3, Rejected = 4 }

	export interface OBWriteFileResponse3 {

		/** Required */
		Data: OBWriteFileResponse3Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBWriteFileResponse3FormProperties {
	}
	export function CreateOBWriteFileResponse3FormGroup() {
		return new FormGroup<OBWriteFileResponse3FormProperties>({
		});

	}

	export interface OBWriteFileResponse3Data {
		OBWriteFileResponse3DataCharges?: Array<OBWriteFileResponse3DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: Date;

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the file payment resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		FilePaymentId: string;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
		 * Required
		 */
		Initiation: OBWriteFileResponse3DataInitiation;

		/** The multiple authorisation flow response from the ASPSP. */
		MultiAuthorisation?: OBWriteFileResponse3DataMultiAuthorisation;

		/**
		 * Specifies the status of the payment order resource.
		 * Required
		 */
		Status: OBWriteFileResponse3DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteFileResponse3DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: FormControl<Date | null | undefined>,

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the file payment resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		FilePaymentId: FormControl<string | null | undefined>,

		/**
		 * Specifies the status of the payment order resource.
		 * Required
		 */
		Status: FormControl<OBWriteFileResponse3DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteFileResponse3DataFormGroup() {
		return new FormGroup<OBWriteFileResponse3DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			FilePaymentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			Status: new FormControl<OBWriteFileResponse3DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteFileResponse3DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteFileResponse3DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteFileResponse3DataChargesFormGroup() {
		return new FormGroup<OBWriteFileResponse3DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteFileResponse3DataInitiation {

		/** Total of all individual amounts included in the group, irrespective of currencies. */
		ControlSum?: number | null;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteFileResponse3DataInitiationDebtorAccount;

		/**
		 * A base64 encoding of a SHA256 hash of the file to be uploaded.
		 * Required
		 * Max length: 44
		 * Min length: 1
		 */
		FileHash: string;

		/**
		 * Reference for the file.
		 * Max length: 40
		 * Min length: 1
		 */
		FileReference?: string | null;

		/**
		 * Specifies the payment file type.
		 * Required
		 */
		FileType: string;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/** Number of individual transactions contained in the payment information group. */
		NumberOfTransactions?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteFileResponse3DataInitiationRemittanceInformation;

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RequestedExecutionDateTime?: Date | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteFileResponse3DataInitiationFormProperties {

		/** Total of all individual amounts included in the group, irrespective of currencies. */
		ControlSum: FormControl<number | null | undefined>,

		/**
		 * A base64 encoding of a SHA256 hash of the file to be uploaded.
		 * Required
		 * Max length: 44
		 * Min length: 1
		 */
		FileHash: FormControl<string | null | undefined>,

		/**
		 * Reference for the file.
		 * Max length: 40
		 * Min length: 1
		 */
		FileReference: FormControl<string | null | undefined>,

		/**
		 * Specifies the payment file type.
		 * Required
		 */
		FileType: FormControl<string | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/** Number of individual transactions contained in the payment information group. */
		NumberOfTransactions: FormControl<string | null | undefined>,

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		RequestedExecutionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteFileResponse3DataInitiationFormGroup() {
		return new FormGroup<OBWriteFileResponse3DataInitiationFormProperties>({
			ControlSum: new FormControl<number | null | undefined>(undefined),
			FileHash: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(44)]),
			FileReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			FileType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			NumberOfTransactions: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]{1,15}')]),
			RequestedExecutionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteFileResponse3DataInitiationDebtorAccount {

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
	export interface OBWriteFileResponse3DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteFileResponse3DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteFileResponse3DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteFileResponse3DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteFileResponse3DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteFileResponse3DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteFileResponse3DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteFileResponse3DataMultiAuthorisation {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime?: Date | null;

		/** Number of authorisations received. */
		NumberReceived?: number | null;

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired?: number | null;

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: OBWriteDomesticResponse5DataMultiAuthorisationStatus;
	}
	export interface OBWriteFileResponse3DataMultiAuthorisationFormProperties {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime: FormControl<Date | null | undefined>,

		/** Number of authorisations received. */
		NumberReceived: FormControl<number | null | undefined>,

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired: FormControl<number | null | undefined>,

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>,
	}
	export function CreateOBWriteFileResponse3DataMultiAuthorisationFormGroup() {
		return new FormGroup<OBWriteFileResponse3DataMultiAuthorisationFormProperties>({
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
			NumberReceived: new FormControl<number | null | undefined>(undefined),
			NumberRequired: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OBWriteFileResponse3DataStatus { InitiationCompleted = 0, InitiationFailed = 1, InitiationPending = 2 }

	export interface OBWriteFundsConfirmationResponse1 {

		/** Required */
		Data: OBWriteFundsConfirmationResponse1Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBWriteFundsConfirmationResponse1FormProperties {
	}
	export function CreateOBWriteFundsConfirmationResponse1FormGroup() {
		return new FormGroup<OBWriteFundsConfirmationResponse1FormProperties>({
		});

	}

	export interface OBWriteFundsConfirmationResponse1Data {

		/** Result of a funds availability check. */
		FundsAvailableResult?: OBWriteFundsConfirmationResponse1DataFundsAvailableResult;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteFundsConfirmationResponse1DataFormProperties {
	}
	export function CreateOBWriteFundsConfirmationResponse1DataFormGroup() {
		return new FormGroup<OBWriteFundsConfirmationResponse1DataFormProperties>({
		});

	}

	export interface OBWriteFundsConfirmationResponse1DataFundsAvailableResult {

		/**
		 * Flag to indicate the availability of funds given the Amount in the consent request.
		 * Required
		 */
		FundsAvailable: boolean;

		/**
		 * Date and time at which the funds availability check was generated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FundsAvailableDateTime: Date;
	}
	export interface OBWriteFundsConfirmationResponse1DataFundsAvailableResultFormProperties {

		/**
		 * Flag to indicate the availability of funds given the Amount in the consent request.
		 * Required
		 */
		FundsAvailable: FormControl<boolean | null | undefined>,

		/**
		 * Date and time at which the funds availability check was generated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FundsAvailableDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteFundsConfirmationResponse1DataFundsAvailableResultFormGroup() {
		return new FormGroup<OBWriteFundsConfirmationResponse1DataFundsAvailableResultFormProperties>({
			FundsAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			FundsAvailableDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternational3 {

		/** Required */
		Data: OBWriteInternational3Data;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteInternational3FormProperties {
	}
	export function CreateOBWriteInternational3FormGroup() {
		return new FormGroup<OBWriteInternational3FormProperties>({
		});

	}

	export interface OBWriteInternational3Data {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
		 * Required
		 */
		Initiation: OBWriteInternational3DataInitiation;
	}
	export interface OBWriteInternational3DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternational3DataFormGroup() {
		return new FormGroup<OBWriteInternational3DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface OBWriteInternational3DataInitiation {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer?: OBChargeBearerType1Code | null;

		/** Party to which an amount of money is due. */
		Creditor?: OBWriteInternational3DataInitiationCreditor;

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteInternational3DataInitiationCreditorAccount;

		/** Financial institution servicing an account for the creditor. */
		CreditorAgent?: OBWriteInternational3DataInitiationCreditorAgent;

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: string;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteInternational3DataInitiationDebtorAccount;

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode?: string | null;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: string;

		/** Provides details on the currency exchange rate and contract. */
		ExchangeRateInformation?: OBWriteInternational3DataInitiationExchangeRateInformation;

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteInternational3DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority?: OBWriteInternational3DataInitiationInstructionPriority | null;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteInternational3DataInitiationRemittanceInformation;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteInternational3DataInitiationFormProperties {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: FormControl<string | null | undefined>,

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode: FormControl<string | null | undefined>,

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority: FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternational3DataInitiationFormGroup() {
		return new FormGroup<OBWriteInternational3DataInitiationFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined),
			CurrencyOfTransfer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			DestinationCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z]{2,2}')]),
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			ExtendedPurpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			InstructionPriority: new FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>(undefined),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			Purpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4)]),
		});

	}

	export interface OBWriteInternational3DataInitiationCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternational3DataInitiationCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternational3DataInitiationCreditorFormGroup() {
		return new FormGroup<OBWriteInternational3DataInitiationCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternational3DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternational3DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternational3DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteInternational3DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternational3DataInitiationCreditorAgent {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternational3DataInitiationCreditorAgentFormProperties {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternational3DataInitiationCreditorAgentFormGroup() {
		return new FormGroup<OBWriteInternational3DataInitiationCreditorAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternational3DataInitiationDebtorAccount {

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
	export interface OBWriteInternational3DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteInternational3DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteInternational3DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternational3DataInitiationExchangeRateInformation {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification?: string | null;

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate?: number | null;

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: OBWriteInternational3DataInitiationExchangeRateInformationRateType;

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: string;
	}
	export interface OBWriteInternational3DataInitiationExchangeRateInformationFormProperties {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification: FormControl<string | null | undefined>,

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate: FormControl<number | null | undefined>,

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>,

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternational3DataInitiationExchangeRateInformationFormGroup() {
		return new FormGroup<OBWriteInternational3DataInitiationExchangeRateInformationFormProperties>({
			ContractIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ExchangeRate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>(undefined, [Validators.required]),
			UnitCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export enum OBWriteInternational3DataInitiationExchangeRateInformationRateType { Actual = 0, Agreed = 1, Indicative = 2 }

	export interface OBWriteInternational3DataInitiationInstructedAmount {

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
	export interface OBWriteInternational3DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteInternational3DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteInternational3DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export enum OBWriteInternational3DataInitiationInstructionPriority { Normal = 0, Urgent = 1 }

	export interface OBWriteInternational3DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteInternational3DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternational3DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteInternational3DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalConsent5 {

		/** Required */
		Data: OBWriteInternationalConsent5Data;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteInternationalConsent5FormProperties {
	}
	export function CreateOBWriteInternationalConsent5FormGroup() {
		return new FormGroup<OBWriteInternationalConsent5FormProperties>({
		});

	}

	export interface OBWriteInternationalConsent5Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteInternationalConsent5DataAuthorisation;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
		 * Required
		 */
		Initiation: OBWriteInternationalConsent5DataInitiation;

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount?: OBWriteDomesticConsent4DataReadRefundAccount | null;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;
	}
	export interface OBWriteInternationalConsent5DataFormProperties {

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount: FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>,
	}
	export function CreateOBWriteInternationalConsent5DataFormGroup() {
		return new FormGroup<OBWriteInternationalConsent5DataFormProperties>({
			ReadRefundAccount: new FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalConsent5DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteInternationalConsent5DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalConsent5DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteInternationalConsent5DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalConsent5DataInitiation {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer?: OBChargeBearerType1Code | null;

		/** Party to which an amount of money is due. */
		Creditor?: OBWriteInternationalConsent5DataInitiationCreditor;

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteInternationalConsent5DataInitiationCreditorAccount;

		/** Financial institution servicing an account for the creditor. */
		CreditorAgent?: OBWriteInternationalConsent5DataInitiationCreditorAgent;

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: string;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteInternationalConsent5DataInitiationDebtorAccount;

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode?: string | null;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: string;

		/** Provides details on the currency exchange rate and contract. */
		ExchangeRateInformation?: OBWriteInternationalConsent5DataInitiationExchangeRateInformation;

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteInternationalConsent5DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority?: OBWriteInternational3DataInitiationInstructionPriority | null;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteInternationalConsent5DataInitiationRemittanceInformation;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteInternationalConsent5DataInitiationFormProperties {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: FormControl<string | null | undefined>,

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode: FormControl<string | null | undefined>,

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority: FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalConsent5DataInitiationFormGroup() {
		return new FormGroup<OBWriteInternationalConsent5DataInitiationFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined),
			CurrencyOfTransfer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			DestinationCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z]{2,2}')]),
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			ExtendedPurpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			InstructionPriority: new FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>(undefined),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			Purpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4)]),
		});

	}

	export interface OBWriteInternationalConsent5DataInitiationCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalConsent5DataInitiationCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalConsent5DataInitiationCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalConsent5DataInitiationCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalConsent5DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalConsent5DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalConsent5DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalConsent5DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalConsent5DataInitiationCreditorAgent {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalConsent5DataInitiationCreditorAgentFormProperties {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalConsent5DataInitiationCreditorAgentFormGroup() {
		return new FormGroup<OBWriteInternationalConsent5DataInitiationCreditorAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalConsent5DataInitiationDebtorAccount {

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
	export interface OBWriteInternationalConsent5DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteInternationalConsent5DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalConsent5DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalConsent5DataInitiationExchangeRateInformation {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification?: string | null;

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate?: number | null;

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: OBWriteInternational3DataInitiationExchangeRateInformationRateType;

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: string;
	}
	export interface OBWriteInternationalConsent5DataInitiationExchangeRateInformationFormProperties {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification: FormControl<string | null | undefined>,

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate: FormControl<number | null | undefined>,

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>,

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalConsent5DataInitiationExchangeRateInformationFormGroup() {
		return new FormGroup<OBWriteInternationalConsent5DataInitiationExchangeRateInformationFormProperties>({
			ContractIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ExchangeRate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>(undefined, [Validators.required]),
			UnitCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalConsent5DataInitiationInstructedAmount {

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
	export interface OBWriteInternationalConsent5DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteInternationalConsent5DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteInternationalConsent5DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalConsent5DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteInternationalConsent5DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalConsent5DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteInternationalConsent5DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalConsentResponse6 {

		/** Required */
		Data: OBWriteInternationalConsentResponse6Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteInternationalConsentResponse6FormProperties {
	}
	export function CreateOBWriteInternationalConsentResponse6FormGroup() {
		return new FormGroup<OBWriteInternationalConsentResponse6FormProperties>({
		});

	}

	export interface OBWriteInternationalConsentResponse6Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteInternationalConsentResponse6DataAuthorisation;
		OBWriteInternationalConsentResponse6DataCharges?: Array<OBWriteInternationalConsentResponse6DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime?: Date | null;

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/** Further detailed information on the exchange rate that has been used in the payment transaction. */
		ExchangeRateInformation?: OBWriteInternationalConsentResponse6DataExchangeRateInformation;

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime?: Date | null;

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime?: Date | null;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
		 * Required
		 */
		Initiation: OBWriteInternationalConsentResponse6DataInitiation;

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount?: OBWriteDomesticConsent4DataReadRefundAccount | null;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: OBWriteDomesticConsentResponse5DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteInternationalConsentResponse6DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime: FormControl<Date | null | undefined>,

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount: FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>,

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticConsentResponse5DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalConsentResponse6DataFormGroup() {
		return new FormGroup<OBWriteInternationalConsentResponse6DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CutOffDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpectedExecutionDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpectedSettlementDateTime: new FormControl<Date | null | undefined>(undefined),
			ReadRefundAccount: new FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticConsentResponse5DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalConsentResponse6DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteInternationalConsentResponse6DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalConsentResponse6DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteInternationalConsentResponse6DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalConsentResponse6DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteInternationalConsentResponse6DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalConsentResponse6DataChargesFormGroup() {
		return new FormGroup<OBWriteInternationalConsentResponse6DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalConsentResponse6DataExchangeRateInformation {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification?: string | null;

		/**
		 * The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.
		 * Required
		 */
		ExchangeRate: number;

		/**
		 * Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: OBWriteInternational3DataInitiationExchangeRateInformationRateType;

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: string;
	}
	export interface OBWriteInternationalConsentResponse6DataExchangeRateInformationFormProperties {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification: FormControl<string | null | undefined>,

		/**
		 * The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.
		 * Required
		 */
		ExchangeRate: FormControl<number | null | undefined>,

		/**
		 * Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>,

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalConsentResponse6DataExchangeRateInformationFormGroup() {
		return new FormGroup<OBWriteInternationalConsentResponse6DataExchangeRateInformationFormProperties>({
			ContractIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ExchangeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			RateType: new FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>(undefined, [Validators.required]),
			UnitCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalConsentResponse6DataInitiation {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer?: OBChargeBearerType1Code | null;

		/** Party to which an amount of money is due. */
		Creditor?: OBWriteInternationalConsentResponse6DataInitiationCreditor;

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteInternationalConsentResponse6DataInitiationCreditorAccount;

		/** Financial institution servicing an account for the creditor. */
		CreditorAgent?: OBWriteInternationalConsentResponse6DataInitiationCreditorAgent;

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: string;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteInternationalConsentResponse6DataInitiationDebtorAccount;

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode?: string | null;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: string;

		/** Provides details on the currency exchange rate and contract. */
		ExchangeRateInformation?: OBWriteInternationalConsentResponse6DataInitiationExchangeRateInformation;

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteInternationalConsentResponse6DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority?: OBWriteInternational3DataInitiationInstructionPriority | null;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteInternationalConsentResponse6DataInitiationRemittanceInformation;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteInternationalConsentResponse6DataInitiationFormProperties {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: FormControl<string | null | undefined>,

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode: FormControl<string | null | undefined>,

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority: FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalConsentResponse6DataInitiationFormGroup() {
		return new FormGroup<OBWriteInternationalConsentResponse6DataInitiationFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined),
			CurrencyOfTransfer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			DestinationCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z]{2,2}')]),
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			ExtendedPurpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			InstructionPriority: new FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>(undefined),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			Purpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4)]),
		});

	}

	export interface OBWriteInternationalConsentResponse6DataInitiationCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalConsentResponse6DataInitiationCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalConsentResponse6DataInitiationCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalConsentResponse6DataInitiationCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalConsentResponse6DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalConsentResponse6DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalConsentResponse6DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalConsentResponse6DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalConsentResponse6DataInitiationCreditorAgent {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalConsentResponse6DataInitiationCreditorAgentFormProperties {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalConsentResponse6DataInitiationCreditorAgentFormGroup() {
		return new FormGroup<OBWriteInternationalConsentResponse6DataInitiationCreditorAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalConsentResponse6DataInitiationDebtorAccount {

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
	export interface OBWriteInternationalConsentResponse6DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteInternationalConsentResponse6DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalConsentResponse6DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalConsentResponse6DataInitiationExchangeRateInformation {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification?: string | null;

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate?: number | null;

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: OBWriteInternational3DataInitiationExchangeRateInformationRateType;

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: string;
	}
	export interface OBWriteInternationalConsentResponse6DataInitiationExchangeRateInformationFormProperties {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification: FormControl<string | null | undefined>,

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate: FormControl<number | null | undefined>,

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>,

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalConsentResponse6DataInitiationExchangeRateInformationFormGroup() {
		return new FormGroup<OBWriteInternationalConsentResponse6DataInitiationExchangeRateInformationFormProperties>({
			ContractIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ExchangeRate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>(undefined, [Validators.required]),
			UnitCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalConsentResponse6DataInitiationInstructedAmount {

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
	export interface OBWriteInternationalConsentResponse6DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteInternationalConsentResponse6DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteInternationalConsentResponse6DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalConsentResponse6DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteInternationalConsentResponse6DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalConsentResponse6DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteInternationalConsentResponse6DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalResponse5 {

		/** Required */
		Data: OBWriteInternationalResponse5Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBWriteInternationalResponse5FormProperties {
	}
	export function CreateOBWriteInternationalResponse5FormGroup() {
		return new FormGroup<OBWriteInternationalResponse5FormProperties>({
		});

	}

	export interface OBWriteInternationalResponse5Data {
		OBWriteInternationalResponse5DataCharges?: Array<OBWriteInternationalResponse5DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: Date;

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/** Further detailed information on the exchange rate that has been used in the payment transaction. */
		ExchangeRateInformation?: OBWriteInternationalResponse5DataExchangeRateInformation;

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime?: Date | null;

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime?: Date | null;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
		 * Required
		 */
		Initiation: OBWriteInternationalResponse5DataInitiation;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the international payment resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		InternationalPaymentId: string;

		/** The multiple authorisation flow response from the ASPSP. */
		MultiAuthorisation?: OBWriteInternationalResponse5DataMultiAuthorisation;
		Refund?: OBWriteInternationalResponse5DataRefund;

		/**
		 * Specifies the status of the payment information group.
		 * Required
		 */
		Status: OBWriteDomesticResponse5DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteInternationalResponse5DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime: FormControl<Date | null | undefined>,

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the international payment resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		InternationalPaymentId: FormControl<string | null | undefined>,

		/**
		 * Specifies the status of the payment information group.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticResponse5DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalResponse5DataFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExpectedExecutionDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpectedSettlementDateTime: new FormControl<Date | null | undefined>(undefined),
			InternationalPaymentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			Status: new FormControl<OBWriteDomesticResponse5DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalResponse5DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteInternationalResponse5DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalResponse5DataChargesFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalResponse5DataExchangeRateInformation {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification?: string | null;

		/**
		 * The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.
		 * Required
		 */
		ExchangeRate: number;

		/**
		 * Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: OBWriteInternational3DataInitiationExchangeRateInformationRateType;

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: string;
	}
	export interface OBWriteInternationalResponse5DataExchangeRateInformationFormProperties {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification: FormControl<string | null | undefined>,

		/**
		 * The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.
		 * Required
		 */
		ExchangeRate: FormControl<number | null | undefined>,

		/**
		 * Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>,

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalResponse5DataExchangeRateInformationFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataExchangeRateInformationFormProperties>({
			ContractIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ExchangeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			RateType: new FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>(undefined, [Validators.required]),
			UnitCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalResponse5DataInitiation {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer?: OBChargeBearerType1Code | null;

		/** Party to which an amount of money is due. */
		Creditor?: OBWriteInternationalResponse5DataInitiationCreditor;

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteInternationalResponse5DataInitiationCreditorAccount;

		/** Financial institution servicing an account for the creditor. */
		CreditorAgent?: OBWriteInternationalResponse5DataInitiationCreditorAgent;

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: string;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteInternationalResponse5DataInitiationDebtorAccount;

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode?: string | null;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: string;

		/** Provides details on the currency exchange rate and contract. */
		ExchangeRateInformation?: OBWriteInternationalResponse5DataInitiationExchangeRateInformation;

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteInternationalResponse5DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority?: OBWriteInternational3DataInitiationInstructionPriority | null;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteInternationalResponse5DataInitiationRemittanceInformation;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteInternationalResponse5DataInitiationFormProperties {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: FormControl<string | null | undefined>,

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode: FormControl<string | null | undefined>,

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority: FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalResponse5DataInitiationFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataInitiationFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined),
			CurrencyOfTransfer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			DestinationCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z]{2,2}')]),
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			ExtendedPurpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			InstructionPriority: new FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>(undefined),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			Purpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4)]),
		});

	}

	export interface OBWriteInternationalResponse5DataInitiationCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalResponse5DataInitiationCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalResponse5DataInitiationCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataInitiationCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalResponse5DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalResponse5DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalResponse5DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalResponse5DataInitiationCreditorAgent {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalResponse5DataInitiationCreditorAgentFormProperties {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalResponse5DataInitiationCreditorAgentFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataInitiationCreditorAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalResponse5DataInitiationDebtorAccount {

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
	export interface OBWriteInternationalResponse5DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteInternationalResponse5DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalResponse5DataInitiationExchangeRateInformation {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification?: string | null;

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate?: number | null;

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: OBWriteInternational3DataInitiationExchangeRateInformationRateType;

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: string;
	}
	export interface OBWriteInternationalResponse5DataInitiationExchangeRateInformationFormProperties {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification: FormControl<string | null | undefined>,

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate: FormControl<number | null | undefined>,

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>,

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalResponse5DataInitiationExchangeRateInformationFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataInitiationExchangeRateInformationFormProperties>({
			ContractIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ExchangeRate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>(undefined, [Validators.required]),
			UnitCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalResponse5DataInitiationInstructedAmount {

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
	export interface OBWriteInternationalResponse5DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteInternationalResponse5DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalResponse5DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteInternationalResponse5DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalResponse5DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalResponse5DataMultiAuthorisation {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime?: Date | null;

		/** Number of authorisations received. */
		NumberReceived?: number | null;

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired?: number | null;

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: OBWriteDomesticResponse5DataMultiAuthorisationStatus;
	}
	export interface OBWriteInternationalResponse5DataMultiAuthorisationFormProperties {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime: FormControl<Date | null | undefined>,

		/** Number of authorisations received. */
		NumberReceived: FormControl<number | null | undefined>,

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired: FormControl<number | null | undefined>,

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>,
	}
	export function CreateOBWriteInternationalResponse5DataMultiAuthorisationFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataMultiAuthorisationFormProperties>({
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
			NumberReceived: new FormControl<number | null | undefined>(undefined),
			NumberRequired: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalResponse5DataRefund {

		/**
		 * Provides the details to identify an account.
		 * Required
		 */
		Account: OBWriteInternationalResponse5DataRefundAccount;

		/** Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution. */
		Agent?: OBWriteInternationalResponse5DataRefundAgent;

		/** Set of elements used to identify a person or an organisation. */
		Creditor?: OBWriteInternationalResponse5DataRefundCreditor;
	}
	export interface OBWriteInternationalResponse5DataRefundFormProperties {
	}
	export function CreateOBWriteInternationalResponse5DataRefundFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataRefundFormProperties>({
		});

	}

	export interface OBWriteInternationalResponse5DataRefundAccount {

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
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalResponse5DataRefundAccountFormProperties {

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
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalResponse5DataRefundAccountFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataRefundAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalResponse5DataRefundAgent {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalResponse5DataRefundAgentFormProperties {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalResponse5DataRefundAgentFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataRefundAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalResponse5DataRefundCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalResponse5DataRefundCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalResponse5DataRefundCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalResponse5DataRefundCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalScheduled3 {

		/** Required */
		Data: OBWriteInternationalScheduled3Data;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteInternationalScheduled3FormProperties {
	}
	export function CreateOBWriteInternationalScheduled3FormGroup() {
		return new FormGroup<OBWriteInternationalScheduled3FormProperties>({
		});

	}

	export interface OBWriteInternationalScheduled3Data {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
		 * Required
		 */
		Initiation: OBWriteInternationalScheduled3DataInitiation;
	}
	export interface OBWriteInternationalScheduled3DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduled3DataFormGroup() {
		return new FormGroup<OBWriteInternationalScheduled3DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface OBWriteInternationalScheduled3DataInitiation {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer?: OBChargeBearerType1Code | null;

		/** Party to which an amount of money is due. */
		Creditor?: OBWriteInternationalScheduled3DataInitiationCreditor;

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteInternationalScheduled3DataInitiationCreditorAccount;

		/** Financial institution servicing an account for the creditor. */
		CreditorAgent?: OBWriteInternationalScheduled3DataInitiationCreditorAgent;

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: string;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteInternationalScheduled3DataInitiationDebtorAccount;

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode?: string | null;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification?: string | null;

		/** Provides details on the currency exchange rate and contract. */
		ExchangeRateInformation?: OBWriteInternationalScheduled3DataInitiationExchangeRateInformation;

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteInternationalScheduled3DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority?: OBWriteInternational3DataInitiationInstructionPriority | null;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteInternationalScheduled3DataInitiationRemittanceInformation;

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: Date;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteInternationalScheduled3DataInitiationFormProperties {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: FormControl<string | null | undefined>,

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode: FormControl<string | null | undefined>,

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority: FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose: FormControl<string | null | undefined>,

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduled3DataInitiationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduled3DataInitiationFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined),
			CurrencyOfTransfer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			DestinationCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z]{2,2}')]),
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			ExtendedPurpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			InstructionPriority: new FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>(undefined),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			Purpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4)]),
			RequestedExecutionDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalScheduled3DataInitiationCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalScheduled3DataInitiationCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduled3DataInitiationCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalScheduled3DataInitiationCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalScheduled3DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalScheduled3DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalScheduled3DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalScheduled3DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalScheduled3DataInitiationCreditorAgent {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalScheduled3DataInitiationCreditorAgentFormProperties {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduled3DataInitiationCreditorAgentFormGroup() {
		return new FormGroup<OBWriteInternationalScheduled3DataInitiationCreditorAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalScheduled3DataInitiationDebtorAccount {

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
	export interface OBWriteInternationalScheduled3DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteInternationalScheduled3DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalScheduled3DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalScheduled3DataInitiationExchangeRateInformation {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification?: string | null;

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate?: number | null;

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: OBWriteInternational3DataInitiationExchangeRateInformationRateType;

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: string;
	}
	export interface OBWriteInternationalScheduled3DataInitiationExchangeRateInformationFormProperties {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification: FormControl<string | null | undefined>,

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate: FormControl<number | null | undefined>,

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>,

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduled3DataInitiationExchangeRateInformationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduled3DataInitiationExchangeRateInformationFormProperties>({
			ContractIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ExchangeRate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>(undefined, [Validators.required]),
			UnitCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalScheduled3DataInitiationInstructedAmount {

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
	export interface OBWriteInternationalScheduled3DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteInternationalScheduled3DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteInternationalScheduled3DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalScheduled3DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteInternationalScheduled3DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduled3DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduled3DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalScheduledConsent5 {

		/** Required */
		Data: OBWriteInternationalScheduledConsent5Data;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteInternationalScheduledConsent5FormProperties {
	}
	export function CreateOBWriteInternationalScheduledConsent5FormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsent5FormProperties>({
		});

	}

	export interface OBWriteInternationalScheduledConsent5Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteInternationalScheduledConsent5DataAuthorisation;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
		 * Required
		 */
		Initiation: OBWriteInternationalScheduledConsent5DataInitiation;

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: OBWriteDomesticScheduledConsent4DataPermission;

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount?: OBWriteDomesticConsent4DataReadRefundAccount | null;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;
	}
	export interface OBWriteInternationalScheduledConsent5DataFormProperties {

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>,

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount: FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsent5DataFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsent5DataFormProperties>({
			Permission: new FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>(undefined, [Validators.required]),
			ReadRefundAccount: new FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalScheduledConsent5DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteInternationalScheduledConsent5DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsent5DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsent5DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalScheduledConsent5DataInitiation {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer?: OBChargeBearerType1Code | null;

		/** Party to which an amount of money is due. */
		Creditor?: OBWriteInternationalScheduledConsent5DataInitiationCreditor;

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteInternationalScheduledConsent5DataInitiationCreditorAccount;

		/** Financial institution servicing an account for the creditor. */
		CreditorAgent?: OBWriteInternationalScheduledConsent5DataInitiationCreditorAgent;

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: string;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteInternationalScheduledConsent5DataInitiationDebtorAccount;

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode?: string | null;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification?: string | null;

		/** Provides details on the currency exchange rate and contract. */
		ExchangeRateInformation?: OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation;

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteInternationalScheduledConsent5DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority?: OBWriteInternational3DataInitiationInstructionPriority | null;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteInternationalScheduledConsent5DataInitiationRemittanceInformation;

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: Date;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteInternationalScheduledConsent5DataInitiationFormProperties {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: FormControl<string | null | undefined>,

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode: FormControl<string | null | undefined>,

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority: FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose: FormControl<string | null | undefined>,

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsent5DataInitiationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsent5DataInitiationFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined),
			CurrencyOfTransfer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			DestinationCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z]{2,2}')]),
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			ExtendedPurpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			InstructionPriority: new FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>(undefined),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			Purpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4)]),
			RequestedExecutionDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalScheduledConsent5DataInitiationCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalScheduledConsent5DataInitiationCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsent5DataInitiationCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsent5DataInitiationCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalScheduledConsent5DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalScheduledConsent5DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalScheduledConsent5DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsent5DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalScheduledConsent5DataInitiationCreditorAgent {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalScheduledConsent5DataInitiationCreditorAgentFormProperties {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsent5DataInitiationCreditorAgentFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsent5DataInitiationCreditorAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalScheduledConsent5DataInitiationDebtorAccount {

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
	export interface OBWriteInternationalScheduledConsent5DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteInternationalScheduledConsent5DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsent5DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification?: string | null;

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate?: number | null;

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: OBWriteInternational3DataInitiationExchangeRateInformationRateType;

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: string;
	}
	export interface OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationFormProperties {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification: FormControl<string | null | undefined>,

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate: FormControl<number | null | undefined>,

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>,

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationFormProperties>({
			ContractIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ExchangeRate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>(undefined, [Validators.required]),
			UnitCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalScheduledConsent5DataInitiationInstructedAmount {

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
	export interface OBWriteInternationalScheduledConsent5DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteInternationalScheduledConsent5DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsent5DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalScheduledConsent5DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteInternationalScheduledConsent5DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsent5DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsent5DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalScheduledConsentResponse6 {

		/** Required */
		Data: OBWriteInternationalScheduledConsentResponse6Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteInternationalScheduledConsentResponse6FormProperties {
	}
	export function CreateOBWriteInternationalScheduledConsentResponse6FormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsentResponse6FormProperties>({
		});

	}

	export interface OBWriteInternationalScheduledConsentResponse6Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteInternationalScheduledConsentResponse6DataAuthorisation;
		OBWriteInternationalScheduledConsentResponse6DataCharges?: Array<OBWriteInternationalScheduledConsentResponse6DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime?: Date | null;

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/** Further detailed information on the exchange rate that has been used in the payment transaction. */
		ExchangeRateInformation?: OBWriteInternationalScheduledConsentResponse6DataExchangeRateInformation;

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime?: Date | null;

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime?: Date | null;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
		 * Required
		 */
		Initiation: OBWriteInternationalScheduledConsentResponse6DataInitiation;

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: OBWriteDomesticScheduledConsent4DataPermission;

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount?: OBWriteDomesticConsent4DataReadRefundAccount | null;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: OBWriteDomesticConsentResponse5DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteInternationalScheduledConsentResponse6DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>,

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount: FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>,

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticConsentResponse5DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsentResponse6DataFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsentResponse6DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CutOffDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpectedExecutionDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpectedSettlementDateTime: new FormControl<Date | null | undefined>(undefined),
			Permission: new FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>(undefined, [Validators.required]),
			ReadRefundAccount: new FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticConsentResponse5DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalScheduledConsentResponse6DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteInternationalScheduledConsentResponse6DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsentResponse6DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsentResponse6DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalScheduledConsentResponse6DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteInternationalScheduledConsentResponse6DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsentResponse6DataChargesFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsentResponse6DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalScheduledConsentResponse6DataExchangeRateInformation {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification?: string | null;

		/**
		 * The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.
		 * Required
		 */
		ExchangeRate: number;

		/**
		 * Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: OBWriteInternational3DataInitiationExchangeRateInformationRateType;

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: string;
	}
	export interface OBWriteInternationalScheduledConsentResponse6DataExchangeRateInformationFormProperties {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification: FormControl<string | null | undefined>,

		/**
		 * The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.
		 * Required
		 */
		ExchangeRate: FormControl<number | null | undefined>,

		/**
		 * Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>,

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsentResponse6DataExchangeRateInformationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsentResponse6DataExchangeRateInformationFormProperties>({
			ContractIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ExchangeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			RateType: new FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>(undefined, [Validators.required]),
			UnitCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalScheduledConsentResponse6DataInitiation {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer?: OBChargeBearerType1Code | null;

		/** Party to which an amount of money is due. */
		Creditor?: OBWriteInternationalScheduledConsentResponse6DataInitiationCreditor;

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount;

		/** Financial institution servicing an account for the creditor. */
		CreditorAgent?: OBWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent;

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: string;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount;

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode?: string | null;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification?: string | null;

		/** Provides details on the currency exchange rate and contract. */
		ExchangeRateInformation?: OBWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation;

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority?: OBWriteInternational3DataInitiationInstructionPriority | null;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation;

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: Date;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationFormProperties {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: FormControl<string | null | undefined>,

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode: FormControl<string | null | undefined>,

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority: FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose: FormControl<string | null | undefined>,

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsentResponse6DataInitiationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsentResponse6DataInitiationFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined),
			CurrencyOfTransfer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			DestinationCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z]{2,2}')]),
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			ExtendedPurpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			InstructionPriority: new FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>(undefined),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			Purpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4)]),
			RequestedExecutionDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsentResponse6DataInitiationCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsentResponse6DataInitiationCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
		});

	}

	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgentFormProperties {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgentFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount {

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
	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification?: string | null;

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate?: number | null;

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: OBWriteInternational3DataInitiationExchangeRateInformationRateType;

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: string;
	}
	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationFormProperties {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification: FormControl<string | null | undefined>,

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate: FormControl<number | null | undefined>,

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>,

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationFormProperties>({
			ContractIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ExchangeRate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>(undefined, [Validators.required]),
			UnitCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount {

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
	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalScheduledResponse6 {

		/** Required */
		Data: OBWriteInternationalScheduledResponse6Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBWriteInternationalScheduledResponse6FormProperties {
	}
	export function CreateOBWriteInternationalScheduledResponse6FormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6FormProperties>({
		});

	}

	export interface OBWriteInternationalScheduledResponse6Data {
		OBWriteInternationalScheduledResponse6DataCharges?: Array<OBWriteInternationalScheduledResponse6DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: Date;

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/** Further detailed information on the exchange rate that has been used in the payment transaction. */
		ExchangeRateInformation?: OBWriteInternationalScheduledResponse6DataExchangeRateInformation;

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime?: Date | null;

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime?: Date | null;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
		 * Required
		 */
		Initiation: OBWriteInternationalScheduledResponse6DataInitiation;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the international scheduled payment resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		InternationalScheduledPaymentId: string;

		/** The multiple authorisation flow response from the ASPSP. */
		MultiAuthorisation?: OBWriteInternationalScheduledResponse6DataMultiAuthorisation;
		Refund?: OBWriteInternationalScheduledResponse6DataRefund;

		/**
		 * Specifies the status of the payment order resource.
		 * Required
		 */
		Status: OBWriteDomesticScheduledResponse5DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteInternationalScheduledResponse6DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedExecutionDateTime: FormControl<Date | null | undefined>,

		/**
		 * Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpectedSettlementDateTime: FormControl<Date | null | undefined>,

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the international scheduled payment resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		InternationalScheduledPaymentId: FormControl<string | null | undefined>,

		/**
		 * Specifies the status of the payment order resource.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticScheduledResponse5DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledResponse6DataFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExpectedExecutionDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpectedSettlementDateTime: new FormControl<Date | null | undefined>(undefined),
			InternationalScheduledPaymentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			Status: new FormControl<OBWriteDomesticScheduledResponse5DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteInternationalScheduledResponse6DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledResponse6DataChargesFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataExchangeRateInformation {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification?: string | null;

		/**
		 * The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.
		 * Required
		 */
		ExchangeRate: number;

		/**
		 * Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: OBWriteInternational3DataInitiationExchangeRateInformationRateType;

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: string;
	}
	export interface OBWriteInternationalScheduledResponse6DataExchangeRateInformationFormProperties {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification: FormControl<string | null | undefined>,

		/**
		 * The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.
		 * Required
		 */
		ExchangeRate: FormControl<number | null | undefined>,

		/**
		 * Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>,

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledResponse6DataExchangeRateInformationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataExchangeRateInformationFormProperties>({
			ContractIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ExchangeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			RateType: new FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>(undefined, [Validators.required]),
			UnitCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataInitiation {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer?: OBChargeBearerType1Code | null;

		/** Party to which an amount of money is due. */
		Creditor?: OBWriteInternationalScheduledResponse6DataInitiationCreditor;

		/**
		 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
		 * Required
		 */
		CreditorAccount: OBWriteInternationalScheduledResponse6DataInitiationCreditorAccount;

		/** Financial institution servicing an account for the creditor. */
		CreditorAgent?: OBWriteInternationalScheduledResponse6DataInitiationCreditorAgent;

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: string;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteInternationalScheduledResponse6DataInitiationDebtorAccount;

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode?: string | null;

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification?: string | null;

		/** Provides details on the currency exchange rate and contract. */
		ExchangeRateInformation?: OBWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation;

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteInternationalScheduledResponse6DataInitiationInstructedAmount;

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: string;

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority?: OBWriteInternational3DataInitiationInstructionPriority | null;

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose?: string | null;

		/** Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system. */
		RemittanceInformation?: OBWriteInternationalScheduledResponse6DataInitiationRemittanceInformation;

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: Date;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteInternationalScheduledResponse6DataInitiationFormProperties {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: FormControl<string | null | undefined>,

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode: FormControl<string | null | undefined>,

		/**
		 * Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.
		 * Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.
		 * OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.
		 * Max length: 35
		 * Min length: 1
		 */
		EndToEndIdentification: FormControl<string | null | undefined>,

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose: FormControl<string | null | undefined>,

		/**
		 * Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.
		 * Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		InstructionIdentification: FormControl<string | null | undefined>,

		/** Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. */
		InstructionPriority: FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>,

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose: FormControl<string | null | undefined>,

		/**
		 * Date at which the initiating party requests the clearing agent to process the payment.
		 * Usage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		RequestedExecutionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledResponse6DataInitiationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataInitiationFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined),
			CurrencyOfTransfer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			DestinationCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z]{2,2}')]),
			EndToEndIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			ExtendedPurpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			InstructionIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			InstructionPriority: new FormControl<OBWriteInternational3DataInitiationInstructionPriority | null | undefined>(undefined),
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			Purpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4)]),
			RequestedExecutionDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataInitiationCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalScheduledResponse6DataInitiationCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledResponse6DataInitiationCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataInitiationCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalScheduledResponse6DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalScheduledResponse6DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataInitiationCreditorAgent {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalScheduledResponse6DataInitiationCreditorAgentFormProperties {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledResponse6DataInitiationCreditorAgentFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataInitiationCreditorAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataInitiationDebtorAccount {

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
	export interface OBWriteInternationalScheduledResponse6DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteInternationalScheduledResponse6DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification?: string | null;

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate?: number | null;

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: OBWriteInternational3DataInitiationExchangeRateInformationRateType;

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: string;
	}
	export interface OBWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationFormProperties {

		/**
		 * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
		 * Max length: 256
		 * Min length: 1
		 */
		ContractIdentification: FormControl<string | null | undefined>,

		/** The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. */
		ExchangeRate: FormControl<number | null | undefined>,

		/**
		 * Specifies the type used to complete the currency exchange.
		 * Required
		 */
		RateType: FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>,

		/**
		 * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
		 * Required
		 */
		UnitCurrency: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationFormProperties>({
			ContractIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ExchangeRate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<OBWriteInternational3DataInitiationExchangeRateInformationRateType | null | undefined>(undefined, [Validators.required]),
			UnitCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataInitiationInstructedAmount {

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
	export interface OBWriteInternationalScheduledResponse6DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteInternationalScheduledResponse6DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataInitiationRemittanceInformation {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured?: string | null;
	}
	export interface OBWriteInternationalScheduledResponse6DataInitiationRemittanceInformationFormProperties {

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.
		 * Max length: 140
		 * Min length: 1
		 */
		Unstructured: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledResponse6DataInitiationRemittanceInformationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataInitiationRemittanceInformationFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Unstructured: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataMultiAuthorisation {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime?: Date | null;

		/** Number of authorisations received. */
		NumberReceived?: number | null;

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired?: number | null;

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: OBWriteDomesticResponse5DataMultiAuthorisationStatus;
	}
	export interface OBWriteInternationalScheduledResponse6DataMultiAuthorisationFormProperties {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime: FormControl<Date | null | undefined>,

		/** Number of authorisations received. */
		NumberReceived: FormControl<number | null | undefined>,

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired: FormControl<number | null | undefined>,

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledResponse6DataMultiAuthorisationFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataMultiAuthorisationFormProperties>({
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
			NumberReceived: new FormControl<number | null | undefined>(undefined),
			NumberRequired: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataRefund {

		/**
		 * Provides the details to identify an account.
		 * Required
		 */
		Account: OBWriteInternationalScheduledResponse6DataRefundAccount;

		/** Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution. */
		Agent?: OBWriteInternationalScheduledResponse6DataRefundAgent;

		/** Set of elements used to identify a person or an organisation. */
		Creditor?: OBWriteInternationalScheduledResponse6DataRefundCreditor;
	}
	export interface OBWriteInternationalScheduledResponse6DataRefundFormProperties {
	}
	export function CreateOBWriteInternationalScheduledResponse6DataRefundFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataRefundFormProperties>({
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataRefundAccount {

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
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalScheduledResponse6DataRefundAccountFormProperties {

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
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalScheduledResponse6DataRefundAccountFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataRefundAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataRefundAgent {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalScheduledResponse6DataRefundAgentFormProperties {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledResponse6DataRefundAgentFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataRefundAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalScheduledResponse6DataRefundCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalScheduledResponse6DataRefundCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalScheduledResponse6DataRefundCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalScheduledResponse6DataRefundCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
		});

	}

	export interface OBWriteInternationalStandingOrder4 {

		/** Required */
		Data: OBWriteInternationalStandingOrder4Data;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteInternationalStandingOrder4FormProperties {
	}
	export function CreateOBWriteInternationalStandingOrder4FormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrder4FormProperties>({
		});

	}

	export interface OBWriteInternationalStandingOrder4Data {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
		 * Required
		 */
		Initiation: OBWriteInternationalStandingOrder4DataInitiation;
	}
	export interface OBWriteInternationalStandingOrder4DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrder4DataFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrder4DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface OBWriteInternationalStandingOrder4DataInitiation {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer?: OBChargeBearerType1Code | null;

		/** Party to which an amount of money is due. */
		Creditor?: OBWriteInternationalStandingOrder4DataInitiationCreditor;

		/**
		 * Provides the details to identify the beneficiary account.
		 * Required
		 */
		CreditorAccount: OBWriteInternationalStandingOrder4DataInitiationCreditorAccount;

		/**
		 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
		 * This is the servicer of the beneficiary account.
		 */
		CreditorAgent?: OBWriteInternationalStandingOrder4DataInitiationCreditorAgent;

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: string;

		/** Provides the details to identify the debtor account. */
		DebtorAccount?: OBWriteInternationalStandingOrder4DataInitiationDebtorAccount;

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode?: string | null;

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose?: string | null;

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime?: Date | null;

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: Date;

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: string;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteInternationalStandingOrder4DataInitiationInstructedAmount;

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments?: string | null;

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose?: string | null;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteInternationalStandingOrder4DataInitiationFormProperties {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: FormControl<string | null | undefined>,

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode: FormControl<string | null | undefined>,

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose: FormControl<string | null | undefined>,

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments: FormControl<string | null | undefined>,

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose: FormControl<string | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrder4DataInitiationFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrder4DataInitiationFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined),
			CurrencyOfTransfer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			DestinationCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z]{2,2}')]),
			ExtendedPurpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			FinalPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			FirstPaymentDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$')]),
			NumberOfPayments: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Purpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4)]),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export interface OBWriteInternationalStandingOrder4DataInitiationCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalStandingOrder4DataInitiationCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrder4DataInitiationCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrder4DataInitiationCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
		});

	}

	export interface OBWriteInternationalStandingOrder4DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalStandingOrder4DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalStandingOrder4DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrder4DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalStandingOrder4DataInitiationCreditorAgent {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalStandingOrder4DataInitiationCreditorAgentFormProperties {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrder4DataInitiationCreditorAgentFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrder4DataInitiationCreditorAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalStandingOrder4DataInitiationDebtorAccount {

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
	export interface OBWriteInternationalStandingOrder4DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteInternationalStandingOrder4DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrder4DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalStandingOrder4DataInitiationInstructedAmount {

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
	export interface OBWriteInternationalStandingOrder4DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteInternationalStandingOrder4DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrder4DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalStandingOrderConsent6 {

		/** Required */
		Data: OBWriteInternationalStandingOrderConsent6Data;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteInternationalStandingOrderConsent6FormProperties {
	}
	export function CreateOBWriteInternationalStandingOrderConsent6FormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsent6FormProperties>({
		});

	}

	export interface OBWriteInternationalStandingOrderConsent6Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteInternationalStandingOrderConsent6DataAuthorisation;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
		 * Required
		 */
		Initiation: OBWriteInternationalStandingOrderConsent6DataInitiation;

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: OBWriteDomesticScheduledConsent4DataPermission;

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount?: OBWriteDomesticConsent4DataReadRefundAccount | null;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;
	}
	export interface OBWriteInternationalStandingOrderConsent6DataFormProperties {

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>,

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount: FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderConsent6DataFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsent6DataFormProperties>({
			Permission: new FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>(undefined, [Validators.required]),
			ReadRefundAccount: new FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalStandingOrderConsent6DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteInternationalStandingOrderConsent6DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderConsent6DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsent6DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalStandingOrderConsent6DataInitiation {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer?: OBChargeBearerType1Code | null;

		/** Party to which an amount of money is due. */
		Creditor?: OBWriteInternationalStandingOrderConsent6DataInitiationCreditor;

		/**
		 * Provides the details to identify the beneficiary account.
		 * Required
		 */
		CreditorAccount: OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount;

		/**
		 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
		 * This is the servicer of the beneficiary account.
		 */
		CreditorAgent?: OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent;

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: string;

		/** Provides the details to identify the debtor account. */
		DebtorAccount?: OBWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount;

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode?: string | null;

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose?: string | null;

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime?: Date | null;

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: Date;

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: string;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount;

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments?: string | null;

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose?: string | null;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteInternationalStandingOrderConsent6DataInitiationFormProperties {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: FormControl<string | null | undefined>,

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode: FormControl<string | null | undefined>,

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose: FormControl<string | null | undefined>,

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments: FormControl<string | null | undefined>,

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose: FormControl<string | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderConsent6DataInitiationFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsent6DataInitiationFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined),
			CurrencyOfTransfer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			DestinationCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z]{2,2}')]),
			ExtendedPurpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			FinalPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			FirstPaymentDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$')]),
			NumberOfPayments: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Purpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4)]),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export interface OBWriteInternationalStandingOrderConsent6DataInitiationCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalStandingOrderConsent6DataInitiationCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderConsent6DataInitiationCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsent6DataInitiationCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
		});

	}

	export interface OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalStandingOrderConsent6DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAgentFormProperties {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderConsent6DataInitiationCreditorAgentFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount {

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
	export interface OBWriteInternationalStandingOrderConsent6DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteInternationalStandingOrderConsent6DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsent6DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount {

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
	export interface OBWriteInternationalStandingOrderConsent6DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteInternationalStandingOrderConsent6DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsent6DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalStandingOrderConsentResponse7 {

		/** Required */
		Data: OBWriteInternationalStandingOrderConsentResponse7Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
		 * Required
		 */
		Risk: OBRisk1;
	}
	export interface OBWriteInternationalStandingOrderConsentResponse7FormProperties {
	}
	export function CreateOBWriteInternationalStandingOrderConsentResponse7FormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsentResponse7FormProperties>({
		});

	}

	export interface OBWriteInternationalStandingOrderConsentResponse7Data {

		/** The authorisation type request from the TPP. */
		Authorisation?: OBWriteInternationalStandingOrderConsentResponse7DataAuthorisation;
		OBWriteInternationalStandingOrderConsentResponse7DataCharges?: Array<OBWriteInternationalStandingOrderConsentResponse7DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime?: Date | null;

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
		 * Required
		 */
		Initiation: OBWriteInternationalStandingOrderConsentResponse7DataInitiation;

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: OBWriteDomesticScheduledConsent4DataPermission;

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount?: OBWriteDomesticConsent4DataReadRefundAccount | null;

		/** Supporting Data provided by TPP, when requesting SCA Exemption. */
		SCASupportData?: OBSCASupportData1;

		/**
		 * Specifies the status of resource in code form.
		 * Required
		 */
		Status: OBWriteDomesticConsentResponse5DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteInternationalStandingOrderConsentResponse7DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CutOffDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the Open Banking service request types.
		 * Required
		 */
		Permission: FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>,

		/** Specifies to share the refund account details with PISP */
		ReadRefundAccount: FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>,

		/**
		 * Specifies the status of resource in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticConsentResponse5DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderConsentResponse7DataFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsentResponse7DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CutOffDateTime: new FormControl<Date | null | undefined>(undefined),
			Permission: new FormControl<OBWriteDomesticScheduledConsent4DataPermission | null | undefined>(undefined, [Validators.required]),
			ReadRefundAccount: new FormControl<OBWriteDomesticConsent4DataReadRefundAccount | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticConsentResponse5DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalStandingOrderConsentResponse7DataAuthorisation {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: OBWriteDomesticConsent4DataAuthorisationAuthorisationType;

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime?: Date | null;
	}
	export interface OBWriteInternationalStandingOrderConsentResponse7DataAuthorisationFormProperties {

		/**
		 * Type of authorisation flow requested.
		 * Required
		 */
		AuthorisationType: FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>,

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderConsentResponse7DataAuthorisationFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsentResponse7DataAuthorisationFormProperties>({
			AuthorisationType: new FormControl<OBWriteDomesticConsent4DataAuthorisationAuthorisationType | null | undefined>(undefined, [Validators.required]),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalStandingOrderConsentResponse7DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteInternationalStandingOrderConsentResponse7DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderConsentResponse7DataChargesFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsentResponse7DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalStandingOrderConsentResponse7DataInitiation {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer?: OBChargeBearerType1Code | null;

		/** Party to which an amount of money is due. */
		Creditor?: OBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor;

		/**
		 * Provides the details to identify the beneficiary account.
		 * Required
		 */
		CreditorAccount: OBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount;

		/**
		 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
		 * This is the servicer of the beneficiary account.
		 */
		CreditorAgent?: OBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent;

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: string;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount;

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode?: string | null;

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose?: string | null;

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime?: Date | null;

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: Date;

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: string;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount;

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments?: string | null;

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose?: string | null;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteInternationalStandingOrderConsentResponse7DataInitiationFormProperties {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: FormControl<string | null | undefined>,

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode: FormControl<string | null | undefined>,

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose: FormControl<string | null | undefined>,

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments: FormControl<string | null | undefined>,

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose: FormControl<string | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderConsentResponse7DataInitiationFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsentResponse7DataInitiationFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined),
			CurrencyOfTransfer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			DestinationCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z]{2,2}')]),
			ExtendedPurpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			FinalPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			FirstPaymentDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$')]),
			NumberOfPayments: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Purpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4)]),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export interface OBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
		});

	}

	export interface OBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgentFormProperties {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgentFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount {

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
	export interface OBWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount {

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
	export interface OBWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7 {

		/** Required */
		Data: OBWriteInternationalStandingOrderResponse7Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBWriteInternationalStandingOrderResponse7FormProperties {
	}
	export function CreateOBWriteInternationalStandingOrderResponse7FormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7FormProperties>({
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7Data {
		OBWriteInternationalStandingOrderResponse7DataCharges?: Array<OBWriteInternationalStandingOrderResponse7DataCharges>;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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

		/** ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent. */
		Debtor?: OBCashAccountDebtor4;

		/**
		 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
		 * Required
		 */
		Initiation: OBWriteInternationalStandingOrderResponse7DataInitiation;

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the international standing order resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		InternationalStandingOrderId: string;

		/** The multiple authorisation flow response from the ASPSP. */
		MultiAuthorisation?: OBWriteInternationalStandingOrderResponse7DataMultiAuthorisation;
		Refund?: OBWriteInternationalStandingOrderResponse7DataRefund;

		/**
		 * Specifies the status of resource in code form.
		 * Required
		 */
		Status: OBWriteDomesticScheduledResponse5DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWriteInternationalStandingOrderResponse7DataFormProperties {

		/**
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.
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
		 * OB: Unique identification as assigned by the ASPSP to uniquely identify the international standing order resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		InternationalStandingOrderId: FormControl<string | null | undefined>,

		/**
		 * Specifies the status of resource in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticScheduledResponse5DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderResponse7DataFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			InternationalStandingOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			Status: new FormControl<OBWriteDomesticScheduledResponse5DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7DataCharges {

		/**
		 * Amount of money associated with the charge type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount;

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: OBChargeBearerType1Code;

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBWriteInternationalStandingOrderResponse7DataChargesFormProperties {

		/**
		 * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
		 * Required
		 */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Charge type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderResponse7DataChargesFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7DataChargesFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7DataInitiation {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer?: OBChargeBearerType1Code | null;

		/** Party to which an amount of money is due. */
		Creditor?: OBWriteInternationalStandingOrderResponse7DataInitiationCreditor;

		/**
		 * Provides the details to identify the beneficiary account.
		 * Required
		 */
		CreditorAccount: OBWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount;

		/**
		 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
		 * This is the servicer of the beneficiary account.
		 */
		CreditorAgent?: OBWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent;

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: string;

		/** Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction. */
		DebtorAccount?: OBWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount;

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode?: string | null;

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose?: string | null;

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime?: Date | null;

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: Date;

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: string;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount;

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments?: string | null;

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose?: string | null;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBWriteInternationalStandingOrderResponse7DataInitiationFormProperties {

		/** Specifies which party/parties will bear the charges associated with the processing of the payment transaction. */
		ChargeBearer: FormControl<OBChargeBearerType1Code | null | undefined>,

		/**
		 * Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.
		 * Required
		 */
		CurrencyOfTransfer: FormControl<string | null | undefined>,

		/** Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). */
		DestinationCountryCode: FormControl<string | null | undefined>,

		/**
		 * Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.
		 * Max length: 140
		 * Min length: 1
		 */
		ExtendedPurpose: FormControl<string | null | undefined>,

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		FirstPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Individual Definitions:
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments: FormControl<string | null | undefined>,

		/**
		 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
		 * The list of valid codes is an external code list published separately.
		 * External code sets can be downloaded from www.iso20022.org.
		 * Max length: 4
		 * Min length: 1
		 */
		Purpose: FormControl<string | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderResponse7DataInitiationFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7DataInitiationFormProperties>({
			ChargeBearer: new FormControl<OBChargeBearerType1Code | null | undefined>(undefined),
			CurrencyOfTransfer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			DestinationCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z]{2,2}')]),
			ExtendedPurpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			FinalPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			FirstPaymentDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$')]),
			NumberOfPayments: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Purpose: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4)]),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7DataInitiationCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalStandingOrderResponse7DataInitiationCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderResponse7DataInitiationCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7DataInitiationCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalStandingOrderResponse7DataInitiationCreditorAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level.
		 * Note, the account name is not the product name or the nickname of the account.
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalStandingOrderResponse7DataInitiationCreditorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7DataInitiationCreditorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalStandingOrderResponse7DataInitiationCreditorAgentFormProperties {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderResponse7DataInitiationCreditorAgentFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7DataInitiationCreditorAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount {

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
	export interface OBWriteInternationalStandingOrderResponse7DataInitiationDebtorAccountFormProperties {

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
	export function CreateOBWriteInternationalStandingOrderResponse7DataInitiationDebtorAccountFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7DataInitiationDebtorAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount {

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
	export interface OBWriteInternationalStandingOrderResponse7DataInitiationInstructedAmountFormProperties {

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
	export function CreateOBWriteInternationalStandingOrderResponse7DataInitiationInstructedAmountFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7DataInitiationInstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7DataMultiAuthorisation {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime?: Date | null;

		/** Number of authorisations received. */
		NumberReceived?: number | null;

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired?: number | null;

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: OBWriteDomesticResponse5DataMultiAuthorisationStatus;
	}
	export interface OBWriteInternationalStandingOrderResponse7DataMultiAuthorisationFormProperties {

		/**
		 * Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastUpdateDateTime: FormControl<Date | null | undefined>,

		/** Number of authorisations received. */
		NumberReceived: FormControl<number | null | undefined>,

		/** Number of authorisations required for payment order (total required at the start of the multi authorisation journey). */
		NumberRequired: FormControl<number | null | undefined>,

		/**
		 * Specifies the status of the authorisation flow in code form.
		 * Required
		 */
		Status: FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderResponse7DataMultiAuthorisationFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7DataMultiAuthorisationFormProperties>({
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
			NumberReceived: new FormControl<number | null | undefined>(undefined),
			NumberRequired: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<OBWriteDomesticResponse5DataMultiAuthorisationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7DataRefund {

		/**
		 * Provides the details to identify an account.
		 * Required
		 */
		Account: OBWriteInternationalStandingOrderResponse7DataRefundAccount;

		/** Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution. */
		Agent?: OBWriteInternationalStandingOrderResponse7DataRefundAgent;

		/** Set of elements used to identify a person or an organisation. */
		Creditor?: OBWriteInternationalStandingOrderResponse7DataRefundCreditor;
	}
	export interface OBWriteInternationalStandingOrderResponse7DataRefundFormProperties {
	}
	export function CreateOBWriteInternationalStandingOrderResponse7DataRefundFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7DataRefundFormProperties>({
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7DataRefundAccount {

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
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;

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
	export interface OBWriteInternationalStandingOrderResponse7DataRefundAccountFormProperties {

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
		 * OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.
		 * Required
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
	export function CreateOBWriteInternationalStandingOrderResponse7DataRefundAccountFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7DataRefundAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7DataRefundAgent {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}
	export interface OBWriteInternationalStandingOrderResponse7DataRefundAgentFormProperties {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderResponse7DataRefundAgentFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7DataRefundAgentFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBWriteInternationalStandingOrderResponse7DataRefundCreditor {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;
	}
	export interface OBWriteInternationalStandingOrderResponse7DataRefundCreditorFormProperties {

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBWriteInternationalStandingOrderResponse7DataRefundCreditorFormGroup() {
		return new FormGroup<OBWriteInternationalStandingOrderResponse7DataRefundCreditorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
		});

	}

	export interface OBWritePaymentDetailsResponse1 {

		/** Required */
		Data: OBWritePaymentDetailsResponse1Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBWritePaymentDetailsResponse1FormProperties {
	}
	export function CreateOBWritePaymentDetailsResponse1FormGroup() {
		return new FormGroup<OBWritePaymentDetailsResponse1FormProperties>({
		});

	}

	export interface OBWritePaymentDetailsResponse1Data {
		OBWritePaymentDetailsResponse1DataPaymentStatus?: Array<OBWritePaymentDetailsResponse1DataPaymentStatus>;
	}
	export interface OBWritePaymentDetailsResponse1DataFormProperties {
	}
	export function CreateOBWritePaymentDetailsResponse1DataFormGroup() {
		return new FormGroup<OBWritePaymentDetailsResponse1DataFormProperties>({
		});

	}

	export interface OBWritePaymentDetailsResponse1DataPaymentStatus {

		/**
		 * Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.
		 * Required
		 * Max length: 210
		 * Min length: 1
		 */
		PaymentTransactionId: string;

		/**
		 * Status of a transfe, as assigned by the transaction administrator.
		 * Required
		 */
		Status: OBWritePaymentDetailsResponse1DataPaymentStatusStatus;

		/** Payment status details as per underlying Payment Rail. */
		StatusDetail?: OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetail;

		/**
		 * Date and time at which the status was assigned to the transfer.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;
	}
	export interface OBWritePaymentDetailsResponse1DataPaymentStatusFormProperties {

		/**
		 * Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.
		 * Required
		 * Max length: 210
		 * Min length: 1
		 */
		PaymentTransactionId: FormControl<string | null | undefined>,

		/**
		 * Status of a transfe, as assigned by the transaction administrator.
		 * Required
		 */
		Status: FormControl<OBWritePaymentDetailsResponse1DataPaymentStatusStatus | null | undefined>,

		/**
		 * Date and time at which the status was assigned to the transfer.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBWritePaymentDetailsResponse1DataPaymentStatusFormGroup() {
		return new FormGroup<OBWritePaymentDetailsResponse1DataPaymentStatusFormProperties>({
			PaymentTransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(210)]),
			Status: new FormControl<OBWritePaymentDetailsResponse1DataPaymentStatusStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OBWritePaymentDetailsResponse1DataPaymentStatusStatus { Accepted = 0, AcceptedCancellationRequest = 1, AcceptedCreditSettlementCompleted = 2, AcceptedCustomerProfile = 3, AcceptedFundsChecked = 4, AcceptedSettlementCompleted = 5, AcceptedSettlementInProcess = 6, AcceptedTechnicalValidation = 7, AcceptedWithChange = 8, AcceptedWithoutPosting = 9, Cancelled = 10, NoCancellationProcess = 11, PartiallyAcceptedCancellationRequest = 12, PartiallyAcceptedTechnicalCorrect = 13, PaymentCancelled = 14, Pending = 15, PendingCancellationRequest = 16, Received = 17, Rejected = 18, RejectedCancellationRequest = 19 }

	export interface OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetail {

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument?: string | null;

		/**
		 * Status of a transfer, as assigned by the transaction administrator.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Status: string;

		/** Reason Code provided for the status of a transfer. */
		StatusReason?: OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReason | null;

		/**
		 * Reason provided for the status of a transfer.
		 * Max length: 256
		 * Min length: 1
		 */
		StatusReasonDescription?: string | null;
	}
	export interface OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailFormProperties {

		/**
		 * User community specific instrument.
		 * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
		 */
		LocalInstrument: FormControl<string | null | undefined>,

		/**
		 * Status of a transfer, as assigned by the transaction administrator.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Status: FormControl<string | null | undefined>,

		/** Reason Code provided for the status of a transfer. */
		StatusReason: FormControl<OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReason | null | undefined>,

		/**
		 * Reason provided for the status of a transfer.
		 * Max length: 256
		 * Min length: 1
		 */
		StatusReasonDescription: FormControl<string | null | undefined>,
	}
	export function CreateOBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailFormGroup() {
		return new FormGroup<OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailFormProperties>({
			LocalInstrument: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			StatusReason: new FormControl<OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReason | null | undefined>(undefined),
			StatusReasonDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export enum OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReason { Cancelled = 0, PendingFailingSettlement = 1, PendingSettlement = 2, Proprietary = 3, ProprietaryRejection = 4, Suspended = 5, Unmatched = 6 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create Domestic Payment Consents
		 * Post domestic-payment-consents
		 * @param {OBWriteDomesticConsent4} requestBody Default
		 * @return {void} 
		 */
		CreateDomesticPaymentConsents(requestBody: OBWriteDomesticConsent4): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'domestic-payment-consents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Domestic Payment Consents
		 * Get domestic-payment-consents/{ConsentId}
		 * @param {string} ConsentId ConsentId
		 * @return {OBWriteDomesticConsentResponse5} Domestic Payment Consents Read
		 */
		GetDomesticPaymentConsentsConsentId(ConsentId: string): Observable<OBWriteDomesticConsentResponse5> {
			return this.http.get<OBWriteDomesticConsentResponse5>(this.baseUri + 'domestic-payment-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)), {});
		}

		/**
		 * Get Domestic Payment Consents Funds Confirmation
		 * Get domestic-payment-consents/{ConsentId}/funds-confirmation
		 * @param {string} ConsentId ConsentId
		 * @return {OBWriteFundsConfirmationResponse1} Domestic Payment Consents Read
		 */
		GetDomesticPaymentConsentsConsentIdFundsConfirmation(ConsentId: string): Observable<OBWriteFundsConfirmationResponse1> {
			return this.http.get<OBWriteFundsConfirmationResponse1>(this.baseUri + 'domestic-payment-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)) + '/funds-confirmation', {});
		}

		/**
		 * Create Domestic Payments
		 * Post domestic-payments
		 * @param {OBWriteDomestic2} requestBody Default
		 * @return {void} 
		 */
		CreateDomesticPayments(requestBody: OBWriteDomestic2): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'domestic-payments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Domestic Payments
		 * Get domestic-payments/{DomesticPaymentId}
		 * @param {string} DomesticPaymentId DomesticPaymentId
		 * @return {OBWriteDomesticResponse5} Domestic Payments Read
		 */
		GetDomesticPaymentsDomesticPaymentId(DomesticPaymentId: string): Observable<OBWriteDomesticResponse5> {
			return this.http.get<OBWriteDomesticResponse5>(this.baseUri + 'domestic-payments/' + (DomesticPaymentId == null ? '' : encodeURIComponent(DomesticPaymentId)), {});
		}

		/**
		 * Get Payment Details
		 * Get domestic-payments/{DomesticPaymentId}/payment-details
		 * @param {string} DomesticPaymentId DomesticPaymentId
		 * @return {OBWritePaymentDetailsResponse1} Payment Details Read
		 */
		GetDomesticPaymentsDomesticPaymentIdPaymentDetails(DomesticPaymentId: string): Observable<OBWritePaymentDetailsResponse1> {
			return this.http.get<OBWritePaymentDetailsResponse1>(this.baseUri + 'domestic-payments/' + (DomesticPaymentId == null ? '' : encodeURIComponent(DomesticPaymentId)) + '/payment-details', {});
		}

		/**
		 * Create Domestic Scheduled Payment Consents
		 * Post domestic-scheduled-payment-consents
		 * @param {OBWriteDomesticScheduledConsent4} requestBody Default
		 * @return {void} 
		 */
		CreateDomesticScheduledPaymentConsents(requestBody: OBWriteDomesticScheduledConsent4): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'domestic-scheduled-payment-consents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Domestic Scheduled Payment Consents
		 * Get domestic-scheduled-payment-consents/{ConsentId}
		 * @param {string} ConsentId ConsentId
		 * @return {OBWriteDomesticScheduledConsentResponse5} Domestic Scheduled Payment Consents Read
		 */
		GetDomesticScheduledPaymentConsentsConsentId(ConsentId: string): Observable<OBWriteDomesticScheduledConsentResponse5> {
			return this.http.get<OBWriteDomesticScheduledConsentResponse5>(this.baseUri + 'domestic-scheduled-payment-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)), {});
		}

		/**
		 * Create Domestic Scheduled Payments
		 * Post domestic-scheduled-payments
		 * @param {OBWriteDomesticScheduled2} requestBody Default
		 * @return {void} 
		 */
		CreateDomesticScheduledPayments(requestBody: OBWriteDomesticScheduled2): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'domestic-scheduled-payments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Domestic Scheduled Payments
		 * Get domestic-scheduled-payments/{DomesticScheduledPaymentId}
		 * @param {string} DomesticScheduledPaymentId DomesticScheduledPaymentId
		 * @return {OBWriteDomesticScheduledResponse5} Domestic Scheduled Payments Read
		 */
		GetDomesticScheduledPaymentsDomesticScheduledPaymentId(DomesticScheduledPaymentId: string): Observable<OBWriteDomesticScheduledResponse5> {
			return this.http.get<OBWriteDomesticScheduledResponse5>(this.baseUri + 'domestic-scheduled-payments/' + (DomesticScheduledPaymentId == null ? '' : encodeURIComponent(DomesticScheduledPaymentId)), {});
		}

		/**
		 * Get Payment Details
		 * Get domestic-scheduled-payments/{DomesticScheduledPaymentId}/payment-details
		 * @param {string} DomesticScheduledPaymentId DomesticScheduledPaymentId
		 * @return {OBWritePaymentDetailsResponse1} Payment Details Read
		 */
		GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails(DomesticScheduledPaymentId: string): Observable<OBWritePaymentDetailsResponse1> {
			return this.http.get<OBWritePaymentDetailsResponse1>(this.baseUri + 'domestic-scheduled-payments/' + (DomesticScheduledPaymentId == null ? '' : encodeURIComponent(DomesticScheduledPaymentId)) + '/payment-details', {});
		}

		/**
		 * Create Domestic Standing Order Consents
		 * Post domestic-standing-order-consents
		 * @param {OBWriteDomesticStandingOrderConsent5} requestBody Default
		 * @return {void} 
		 */
		CreateDomesticStandingOrderConsents(requestBody: OBWriteDomesticStandingOrderConsent5): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'domestic-standing-order-consents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Domestic Standing Order Consents
		 * Get domestic-standing-order-consents/{ConsentId}
		 * @param {string} ConsentId ConsentId
		 * @return {OBWriteDomesticStandingOrderConsentResponse6} Domestic Standing Order Consents Read
		 */
		GetDomesticStandingOrderConsentsConsentId(ConsentId: string): Observable<OBWriteDomesticStandingOrderConsentResponse6> {
			return this.http.get<OBWriteDomesticStandingOrderConsentResponse6>(this.baseUri + 'domestic-standing-order-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)), {});
		}

		/**
		 * Create Domestic Standing Orders
		 * Post domestic-standing-orders
		 * @param {OBWriteDomesticStandingOrder3} requestBody Default
		 * @return {void} 
		 */
		CreateDomesticStandingOrders(requestBody: OBWriteDomesticStandingOrder3): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'domestic-standing-orders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Domestic Standing Orders
		 * Get domestic-standing-orders/{DomesticStandingOrderId}
		 * @param {string} DomesticStandingOrderId DomesticStandingOrderId
		 * @return {OBWriteDomesticStandingOrderResponse6} Domestic Standing Orders Read
		 */
		GetDomesticStandingOrdersDomesticStandingOrderId(DomesticStandingOrderId: string): Observable<OBWriteDomesticStandingOrderResponse6> {
			return this.http.get<OBWriteDomesticStandingOrderResponse6>(this.baseUri + 'domestic-standing-orders/' + (DomesticStandingOrderId == null ? '' : encodeURIComponent(DomesticStandingOrderId)), {});
		}

		/**
		 * Get Payment Details
		 * Get domestic-standing-orders/{DomesticStandingOrderId}/payment-details
		 * @param {string} DomesticStandingOrderId DomesticStandingOrderId
		 * @return {OBWritePaymentDetailsResponse1} Payment Details Read
		 */
		GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails(DomesticStandingOrderId: string): Observable<OBWritePaymentDetailsResponse1> {
			return this.http.get<OBWritePaymentDetailsResponse1>(this.baseUri + 'domestic-standing-orders/' + (DomesticStandingOrderId == null ? '' : encodeURIComponent(DomesticStandingOrderId)) + '/payment-details', {});
		}

		/**
		 * Create File Payment Consents
		 * Post file-payment-consents
		 * @param {OBWriteFileConsent3} requestBody Default
		 * @return {void} 
		 */
		CreateFilePaymentConsents(requestBody: OBWriteFileConsent3): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'file-payment-consents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get File Payment Consents
		 * Get file-payment-consents/{ConsentId}
		 * @param {string} ConsentId ConsentId
		 * @return {OBWriteFileConsentResponse4} File Payment Consents Read
		 */
		GetFilePaymentConsentsConsentId(ConsentId: string): Observable<OBWriteFileConsentResponse4> {
			return this.http.get<OBWriteFileConsentResponse4>(this.baseUri + 'file-payment-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)), {});
		}

		/**
		 * Get File Payment Consents
		 * Get file-payment-consents/{ConsentId}/file
		 * @param {string} ConsentId ConsentId
		 * @return {File} File Payment Consents Read
		 */
		GetFilePaymentConsentsConsentIdFile(ConsentId: string): Observable<File> {
			return this.http.get<File>(this.baseUri + 'file-payment-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)) + '/file', {});
		}

		/**
		 * Create File Payment Consents
		 * Post file-payment-consents/{ConsentId}/file
		 * @param {string} ConsentId ConsentId
		 * @param {File} requestBody Default
		 * @return {void} File Payment Consents Created
		 */
		CreateFilePaymentConsentsConsentIdFile(ConsentId: string, requestBody: File): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'file-payment-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)) + '/file', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create File Payments
		 * Post file-payments
		 * @param {OBWriteFile2} requestBody Default
		 * @return {void} 
		 */
		CreateFilePayments(requestBody: OBWriteFile2): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'file-payments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get File Payments
		 * Get file-payments/{FilePaymentId}
		 * @param {string} FilePaymentId FilePaymentId
		 * @return {OBWriteFileResponse3} File Payments Read
		 */
		GetFilePaymentsFilePaymentId(FilePaymentId: string): Observable<OBWriteFileResponse3> {
			return this.http.get<OBWriteFileResponse3>(this.baseUri + 'file-payments/' + (FilePaymentId == null ? '' : encodeURIComponent(FilePaymentId)), {});
		}

		/**
		 * Get Payment Details
		 * Get file-payments/{FilePaymentId}/payment-details
		 * @param {string} FilePaymentId FilePaymentId
		 * @return {OBWritePaymentDetailsResponse1} Payment Details Read
		 */
		GetFilePaymentsFilePaymentIdPaymentDetails(FilePaymentId: string): Observable<OBWritePaymentDetailsResponse1> {
			return this.http.get<OBWritePaymentDetailsResponse1>(this.baseUri + 'file-payments/' + (FilePaymentId == null ? '' : encodeURIComponent(FilePaymentId)) + '/payment-details', {});
		}

		/**
		 * Get File Payments
		 * Get file-payments/{FilePaymentId}/report-file
		 * @param {string} FilePaymentId FilePaymentId
		 * @return {File} File Payments Read
		 */
		GetFilePaymentsFilePaymentIdReportFile(FilePaymentId: string): Observable<File> {
			return this.http.get<File>(this.baseUri + 'file-payments/' + (FilePaymentId == null ? '' : encodeURIComponent(FilePaymentId)) + '/report-file', {});
		}

		/**
		 * Create International Payment Consents
		 * Post international-payment-consents
		 * @param {OBWriteInternationalConsent5} requestBody Default
		 * @return {void} 
		 */
		CreateInternationalPaymentConsents(requestBody: OBWriteInternationalConsent5): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'international-payment-consents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get International Payment Consents
		 * Get international-payment-consents/{ConsentId}
		 * @param {string} ConsentId ConsentId
		 * @return {OBWriteInternationalConsentResponse6} International Payment Consents Read
		 */
		GetInternationalPaymentConsentsConsentId(ConsentId: string): Observable<OBWriteInternationalConsentResponse6> {
			return this.http.get<OBWriteInternationalConsentResponse6>(this.baseUri + 'international-payment-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)), {});
		}

		/**
		 * Get International Payment Consents Funds Confirmation
		 * Get international-payment-consents/{ConsentId}/funds-confirmation
		 * @param {string} ConsentId ConsentId
		 * @return {OBWriteFundsConfirmationResponse1} International Payment Consents Read
		 */
		GetInternationalPaymentConsentsConsentIdFundsConfirmation(ConsentId: string): Observable<OBWriteFundsConfirmationResponse1> {
			return this.http.get<OBWriteFundsConfirmationResponse1>(this.baseUri + 'international-payment-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)) + '/funds-confirmation', {});
		}

		/**
		 * Create International Payments
		 * Post international-payments
		 * @param {OBWriteInternational3} requestBody Default
		 * @return {void} 
		 */
		CreateInternationalPayments(requestBody: OBWriteInternational3): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'international-payments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get International Payments
		 * Get international-payments/{InternationalPaymentId}
		 * @param {string} InternationalPaymentId InternationalPaymentId
		 * @return {OBWriteInternationalResponse5} International Payments Read
		 */
		GetInternationalPaymentsInternationalPaymentId(InternationalPaymentId: string): Observable<OBWriteInternationalResponse5> {
			return this.http.get<OBWriteInternationalResponse5>(this.baseUri + 'international-payments/' + (InternationalPaymentId == null ? '' : encodeURIComponent(InternationalPaymentId)), {});
		}

		/**
		 * Get Payment Details
		 * Get international-payments/{InternationalPaymentId}/payment-details
		 * @param {string} InternationalPaymentId InternationalPaymentId
		 * @return {OBWritePaymentDetailsResponse1} Payment Details Read
		 */
		GetInternationalPaymentsInternationalPaymentIdPaymentDetails(InternationalPaymentId: string): Observable<OBWritePaymentDetailsResponse1> {
			return this.http.get<OBWritePaymentDetailsResponse1>(this.baseUri + 'international-payments/' + (InternationalPaymentId == null ? '' : encodeURIComponent(InternationalPaymentId)) + '/payment-details', {});
		}

		/**
		 * Create International Scheduled Payment Consents
		 * Post international-scheduled-payment-consents
		 * @param {OBWriteInternationalScheduledConsent5} requestBody Default
		 * @return {void} 
		 */
		CreateInternationalScheduledPaymentConsents(requestBody: OBWriteInternationalScheduledConsent5): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'international-scheduled-payment-consents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get International Scheduled Payment Consents
		 * Get international-scheduled-payment-consents/{ConsentId}
		 * @param {string} ConsentId ConsentId
		 * @return {OBWriteInternationalScheduledConsentResponse6} International Scheduled Payment Consents Read
		 */
		GetInternationalScheduledPaymentConsentsConsentId(ConsentId: string): Observable<OBWriteInternationalScheduledConsentResponse6> {
			return this.http.get<OBWriteInternationalScheduledConsentResponse6>(this.baseUri + 'international-scheduled-payment-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)), {});
		}

		/**
		 * Get International Scheduled Payment Consents Funds Confirmation
		 * Get international-scheduled-payment-consents/{ConsentId}/funds-confirmation
		 * @param {string} ConsentId ConsentId
		 * @return {OBWriteFundsConfirmationResponse1} International Scheduled Payment Consents Read
		 */
		GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmation(ConsentId: string): Observable<OBWriteFundsConfirmationResponse1> {
			return this.http.get<OBWriteFundsConfirmationResponse1>(this.baseUri + 'international-scheduled-payment-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)) + '/funds-confirmation', {});
		}

		/**
		 * Create International Scheduled Payments
		 * Post international-scheduled-payments
		 * @param {OBWriteInternationalScheduled3} requestBody Default
		 * @return {void} 
		 */
		CreateInternationalScheduledPayments(requestBody: OBWriteInternationalScheduled3): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'international-scheduled-payments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get International Scheduled Payments
		 * Get international-scheduled-payments/{InternationalScheduledPaymentId}
		 * @param {string} InternationalScheduledPaymentId InternationalScheduledPaymentId
		 * @return {OBWriteInternationalScheduledResponse6} International Scheduled Payments Read
		 */
		GetInternationalScheduledPaymentsInternationalScheduledPaymentId(InternationalScheduledPaymentId: string): Observable<OBWriteInternationalScheduledResponse6> {
			return this.http.get<OBWriteInternationalScheduledResponse6>(this.baseUri + 'international-scheduled-payments/' + (InternationalScheduledPaymentId == null ? '' : encodeURIComponent(InternationalScheduledPaymentId)), {});
		}

		/**
		 * Get Payment Details
		 * Get international-scheduled-payments/{InternationalScheduledPaymentId}/payment-details
		 * @param {string} InternationalScheduledPaymentId InternationalScheduledPaymentId
		 * @return {OBWritePaymentDetailsResponse1} Payment Details Read
		 */
		GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails(InternationalScheduledPaymentId: string): Observable<OBWritePaymentDetailsResponse1> {
			return this.http.get<OBWritePaymentDetailsResponse1>(this.baseUri + 'international-scheduled-payments/' + (InternationalScheduledPaymentId == null ? '' : encodeURIComponent(InternationalScheduledPaymentId)) + '/payment-details', {});
		}

		/**
		 * Create International Standing Order Consents
		 * Post international-standing-order-consents
		 * @param {OBWriteInternationalStandingOrderConsent6} requestBody Default
		 * @return {void} 
		 */
		CreateInternationalStandingOrderConsents(requestBody: OBWriteInternationalStandingOrderConsent6): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'international-standing-order-consents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get International Standing Order Consents
		 * Get international-standing-order-consents/{ConsentId}
		 * @param {string} ConsentId ConsentId
		 * @return {OBWriteInternationalStandingOrderConsentResponse7} International Standing Order Consents Read
		 */
		GetInternationalStandingOrderConsentsConsentId(ConsentId: string): Observable<OBWriteInternationalStandingOrderConsentResponse7> {
			return this.http.get<OBWriteInternationalStandingOrderConsentResponse7>(this.baseUri + 'international-standing-order-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)), {});
		}

		/**
		 * Create International Standing Orders
		 * Post international-standing-orders
		 * @param {OBWriteInternationalStandingOrder4} requestBody Default
		 * @return {void} 
		 */
		CreateInternationalStandingOrders(requestBody: OBWriteInternationalStandingOrder4): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'international-standing-orders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get International Standing Orders
		 * Get international-standing-orders/{InternationalStandingOrderPaymentId}
		 * @param {string} InternationalStandingOrderPaymentId InternationalStandingOrderPaymentId
		 * @return {OBWriteInternationalStandingOrderResponse7} International Standing Orders Read
		 */
		GetInternationalStandingOrdersInternationalStandingOrderPaymentId(InternationalStandingOrderPaymentId: string): Observable<OBWriteInternationalStandingOrderResponse7> {
			return this.http.get<OBWriteInternationalStandingOrderResponse7>(this.baseUri + 'international-standing-orders/' + (InternationalStandingOrderPaymentId == null ? '' : encodeURIComponent(InternationalStandingOrderPaymentId)), {});
		}

		/**
		 * Get Payment Details
		 * Get international-standing-orders/{InternationalStandingOrderPaymentId}/payment-details
		 * @param {string} InternationalStandingOrderPaymentId InternationalStandingOrderPaymentId
		 * @return {OBWritePaymentDetailsResponse1} Payment Details Read
		 */
		GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails(InternationalStandingOrderPaymentId: string): Observable<OBWritePaymentDetailsResponse1> {
			return this.http.get<OBWritePaymentDetailsResponse1>(this.baseUri + 'international-standing-orders/' + (InternationalStandingOrderPaymentId == null ? '' : encodeURIComponent(InternationalStandingOrderPaymentId)) + '/payment-details', {});
		}
	}

}

