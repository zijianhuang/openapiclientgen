import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address {

		/** Name of city. */
		city?: string | null;

		/** Name of the contact person at the address */
		contact_name?: string | null;

		/** country code according to ISO 3166-1 alpha-2. */
		country?: string | null;

		/** Address field that holds a sublocality, such as a county */
		county?: string | null;

		/** Email address of the address */
		email?: string | null;

		/** Fax number of the address */
		fax?: string | null;

		/** Unique identifier for the address. */
		id?: string | null;

		/** Latitude of the address */
		latitude?: string | null;

		/** Line 1 of the address e.g. number, street, suite, apt #, etc. */
		line1?: string | null;

		/** Line 2 of the address */
		line2?: string | null;

		/** Line 3 of the address */
		line3?: string | null;

		/** Line 4 of the address */
		line4?: string | null;

		/** Longitude of the address */
		longitude?: string | null;

		/** The name of the address. */
		name?: string | null;

		/** Additional notes */
		notes?: string | null;

		/** Phone number of the address */
		phone_number?: string | null;

		/** Zip code or equivalent. */
		postal_code?: string | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/** Salutation of the contact person at the address */
		salutation?: string | null;

		/** Name of state */
		state?: string | null;

		/** Street number */
		street_number?: string | null;

		/** The address string. Some APIs don't provide structured address data. */
		string?: string | null;

		/** The type of address. */
		type?: AddressType | null;

		/** Website of the address */
		website?: string | null;
	}
	export interface AddressFormProperties {

		/** Name of city. */
		city: FormControl<string | null | undefined>,

		/** Name of the contact person at the address */
		contact_name: FormControl<string | null | undefined>,

		/** country code according to ISO 3166-1 alpha-2. */
		country: FormControl<string | null | undefined>,

		/** Address field that holds a sublocality, such as a county */
		county: FormControl<string | null | undefined>,

		/** Email address of the address */
		email: FormControl<string | null | undefined>,

		/** Fax number of the address */
		fax: FormControl<string | null | undefined>,

		/** Unique identifier for the address. */
		id: FormControl<string | null | undefined>,

		/** Latitude of the address */
		latitude: FormControl<string | null | undefined>,

		/** Line 1 of the address e.g. number, street, suite, apt #, etc. */
		line1: FormControl<string | null | undefined>,

		/** Line 2 of the address */
		line2: FormControl<string | null | undefined>,

		/** Line 3 of the address */
		line3: FormControl<string | null | undefined>,

		/** Line 4 of the address */
		line4: FormControl<string | null | undefined>,

		/** Longitude of the address */
		longitude: FormControl<string | null | undefined>,

		/** The name of the address. */
		name: FormControl<string | null | undefined>,

		/** Additional notes */
		notes: FormControl<string | null | undefined>,

		/** Phone number of the address */
		phone_number: FormControl<string | null | undefined>,

		/** Zip code or equivalent. */
		postal_code: FormControl<string | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** Salutation of the contact person at the address */
		salutation: FormControl<string | null | undefined>,

		/** Name of state */
		state: FormControl<string | null | undefined>,

		/** Street number */
		street_number: FormControl<string | null | undefined>,

		/** The address string. Some APIs don't provide structured address data. */
		string: FormControl<string | null | undefined>,

		/** The type of address. */
		type: FormControl<AddressType | null | undefined>,

		/** Website of the address */
		website: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			contact_name: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<string | null | undefined>(undefined),
			line1: new FormControl<string | null | undefined>(undefined),
			line2: new FormControl<string | null | undefined>(undefined),
			line3: new FormControl<string | null | undefined>(undefined),
			line4: new FormControl<string | null | undefined>(undefined),
			longitude: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			salutation: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street_number: new FormControl<string | null | undefined>(undefined),
			string: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AddressType | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AddressType { primary = 'primary', secondary = 'secondary', home = 'home', office = 'office', shipping = 'shipping', billing = 'billing', other = 'other' }

	export interface BadRequestResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface BadRequestResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateBadRequestResponseFormGroup() {
		return new FormGroup<BadRequestResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BankAccount {

		/** The name which you used in opening your bank account. */
		account_name?: string | null;

		/** A bank account number is a number that is tied to your bank account. If you have several bank accounts, such as personal, joint, business (and so on), each account will have a different account number. */
		account_number?: string | null;

		/** The type of bank account. */
		account_type?: BankAccountAccount_type | null;

		/** A bank code is a code assigned by a central bank, a bank supervisory body or a Bankers Association in a country to all its licensed member banks or financial institutions. */
		bank_code?: string | null;

		/** The name of the bank */
		bank_name?: string | null;

		/** The Bank Identifier Code (BIC). */
		bic?: string | null;

		/** A branch identifier is a unique identifier for a branch of a bank or financial institution. */
		branch_identifier?: string | null;

		/** A BSB is a 6 digit numeric code used for identifying the branch of an Australian or New Zealand bank or financial institution. */
		bsb_number?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/** The International Bank Account Number (IBAN). */
		iban?: string | null;

		/** A routing number is a nine-digit code used to identify a financial institution in the United States. */
		routing_number?: string | null;
	}
	export interface BankAccountFormProperties {

		/** The name which you used in opening your bank account. */
		account_name: FormControl<string | null | undefined>,

		/** A bank account number is a number that is tied to your bank account. If you have several bank accounts, such as personal, joint, business (and so on), each account will have a different account number. */
		account_number: FormControl<string | null | undefined>,

		/** The type of bank account. */
		account_type: FormControl<BankAccountAccount_type | null | undefined>,

		/** A bank code is a code assigned by a central bank, a bank supervisory body or a Bankers Association in a country to all its licensed member banks or financial institutions. */
		bank_code: FormControl<string | null | undefined>,

		/** The name of the bank */
		bank_name: FormControl<string | null | undefined>,

		/** The Bank Identifier Code (BIC). */
		bic: FormControl<string | null | undefined>,

		/** A branch identifier is a unique identifier for a branch of a bank or financial institution. */
		branch_identifier: FormControl<string | null | undefined>,

		/** A BSB is a 6 digit numeric code used for identifying the branch of an Australian or New Zealand bank or financial institution. */
		bsb_number: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** The International Bank Account Number (IBAN). */
		iban: FormControl<string | null | undefined>,

		/** A routing number is a nine-digit code used to identify a financial institution in the United States. */
		routing_number: FormControl<string | null | undefined>,
	}
	export function CreateBankAccountFormGroup() {
		return new FormGroup<BankAccountFormProperties>({
			account_name: new FormControl<string | null | undefined>(undefined),
			account_number: new FormControl<string | null | undefined>(undefined),
			account_type: new FormControl<BankAccountAccount_type | null | undefined>(undefined),
			bank_code: new FormControl<string | null | undefined>(undefined),
			bank_name: new FormControl<string | null | undefined>(undefined),
			bic: new FormControl<string | null | undefined>(undefined),
			branch_identifier: new FormControl<string | null | undefined>(undefined),
			bsb_number: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			iban: new FormControl<string | null | undefined>(undefined),
			routing_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BankAccountAccount_type { bank_account = 'bank_account', credit_card = 'credit_card', other = 'other' }

	export enum BankAccountCurrency { UNKNOWN_CURRENCY = 'UNKNOWN_CURRENCY', AED = 'AED', AFN = 'AFN', ALL = 'ALL', AMD = 'AMD', ANG = 'ANG', AOA = 'AOA', ARS = 'ARS', AUD = 'AUD', AWG = 'AWG', AZN = 'AZN', BAM = 'BAM', BBD = 'BBD', BDT = 'BDT', BGN = 'BGN', BHD = 'BHD', BIF = 'BIF', BMD = 'BMD', BND = 'BND', BOB = 'BOB', BOV = 'BOV', BRL = 'BRL', BSD = 'BSD', BTN = 'BTN', BWP = 'BWP', BYR = 'BYR', BZD = 'BZD', CAD = 'CAD', CDF = 'CDF', CHE = 'CHE', CHF = 'CHF', CHW = 'CHW', CLF = 'CLF', CLP = 'CLP', CNY = 'CNY', COP = 'COP', COU = 'COU', CRC = 'CRC', CUC = 'CUC', CUP = 'CUP', CVE = 'CVE', CZK = 'CZK', DJF = 'DJF', DKK = 'DKK', DOP = 'DOP', DZD = 'DZD', EGP = 'EGP', ERN = 'ERN', ETB = 'ETB', EUR = 'EUR', FJD = 'FJD', FKP = 'FKP', GBP = 'GBP', GEL = 'GEL', GHS = 'GHS', GIP = 'GIP', GMD = 'GMD', GNF = 'GNF', GTQ = 'GTQ', GYD = 'GYD', HKD = 'HKD', HNL = 'HNL', HRK = 'HRK', HTG = 'HTG', HUF = 'HUF', IDR = 'IDR', ILS = 'ILS', INR = 'INR', IQD = 'IQD', IRR = 'IRR', ISK = 'ISK', JMD = 'JMD', JOD = 'JOD', JPY = 'JPY', KES = 'KES', KGS = 'KGS', KHR = 'KHR', KMF = 'KMF', KPW = 'KPW', KRW = 'KRW', KWD = 'KWD', KYD = 'KYD', KZT = 'KZT', LAK = 'LAK', LBP = 'LBP', LKR = 'LKR', LRD = 'LRD', LSL = 'LSL', LTL = 'LTL', LVL = 'LVL', LYD = 'LYD', MAD = 'MAD', MDL = 'MDL', MGA = 'MGA', MKD = 'MKD', MMK = 'MMK', MNT = 'MNT', MOP = 'MOP', MRO = 'MRO', MUR = 'MUR', MVR = 'MVR', MWK = 'MWK', MXN = 'MXN', MXV = 'MXV', MYR = 'MYR', MZN = 'MZN', NAD = 'NAD', NGN = 'NGN', NIO = 'NIO', NOK = 'NOK', NPR = 'NPR', NZD = 'NZD', OMR = 'OMR', PAB = 'PAB', PEN = 'PEN', PGK = 'PGK', PHP = 'PHP', PKR = 'PKR', PLN = 'PLN', PYG = 'PYG', QAR = 'QAR', RON = 'RON', RSD = 'RSD', RUB = 'RUB', RWF = 'RWF', SAR = 'SAR', SBD = 'SBD', SCR = 'SCR', SDG = 'SDG', SEK = 'SEK', SGD = 'SGD', SHP = 'SHP', SLL = 'SLL', SOS = 'SOS', SRD = 'SRD', SSP = 'SSP', STD = 'STD', SVC = 'SVC', SYP = 'SYP', SZL = 'SZL', THB = 'THB', TJS = 'TJS', TMT = 'TMT', TND = 'TND', TOP = 'TOP', TRC = 'TRC', TRY = 'TRY', TTD = 'TTD', TWD = 'TWD', TZS = 'TZS', UAH = 'UAH', UGX = 'UGX', USD = 'USD', USN = 'USN', USS = 'USS', UYI = 'UYI', UYU = 'UYU', UZS = 'UZS', VEF = 'VEF', VND = 'VND', VUV = 'VUV', WST = 'WST', XAF = 'XAF', XAG = 'XAG', XAU = 'XAU', XBA = 'XBA', XBB = 'XBB', XBC = 'XBC', XBD = 'XBD', XCD = 'XCD', XDR = 'XDR', XOF = 'XOF', XPD = 'XPD', XPF = 'XPF', XPT = 'XPT', XTS = 'XTS', XXX = 'XXX', YER = 'YER', ZAR = 'ZAR', ZMK = 'ZMK', ZMW = 'ZMW', BTC = 'BTC', ETH = 'ETH' }

	export interface Benefit {

		/**
		 * The amount deducted for benefit.
		 * Type: double
		 */
		employee_deduction?: number | null;

		/**
		 * The amount of employer contribution.
		 * Type: double
		 */
		employer_contribution?: number | null;

		/** The name of the benefit. */
		name?: string | null;
	}
	export interface BenefitFormProperties {

		/**
		 * The amount deducted for benefit.
		 * Type: double
		 */
		employee_deduction: FormControl<number | null | undefined>,

		/**
		 * The amount of employer contribution.
		 * Type: double
		 */
		employer_contribution: FormControl<number | null | undefined>,

		/** The name of the benefit. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBenefitFormGroup() {
		return new FormGroup<BenefitFormProperties>({
			employee_deduction: new FormControl<number | null | undefined>(undefined),
			employer_contribution: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Compensation {

		/** An array of employee benefits for the pay period. */
		benefits?: Array<Benefit>;

		/** An array of employee deductions for the pay period. */
		deductions?: Array<Deduction>;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		employee_id: string;

		/**
		 * The employee's gross pay. Only available when payroll has been processed
		 * Type: double
		 */
		gross_pay?: number | null;

		/**
		 * The employee's net pay. Only available when payroll has been processed
		 * Type: double
		 */
		net_pay?: number | null;

		/** An array of employer and employee taxes for the pay period. */
		taxes?: Array<Tax>;
	}
	export interface CompensationFormProperties {

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		employee_id: FormControl<string | null | undefined>,

		/**
		 * The employee's gross pay. Only available when payroll has been processed
		 * Type: double
		 */
		gross_pay: FormControl<number | null | undefined>,

		/**
		 * The employee's net pay. Only available when payroll has been processed
		 * Type: double
		 */
		net_pay: FormControl<number | null | undefined>,
	}
	export function CreateCompensationFormGroup() {
		return new FormGroup<CompensationFormProperties>({
			employee_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gross_pay: new FormControl<number | null | undefined>(undefined),
			net_pay: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Deduction {

		/**
		 * The amount deducted.
		 * Type: double
		 */
		amount?: number | null;

		/** The name of the deduction. */
		name?: string | null;
	}
	export interface DeductionFormProperties {

		/**
		 * The amount deducted.
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/** The name of the deduction. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeductionFormGroup() {
		return new FormGroup<DeductionFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tax {

		/**
		 * The amount of the tax.
		 * Type: double
		 */
		amount?: number | null;

		/** Paid by employer. */
		employer?: boolean | null;

		/** The name of the tax. */
		name?: string | null;
	}
	export interface TaxFormProperties {

		/**
		 * The amount of the tax.
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/** Paid by employer. */
		employer: FormControl<boolean | null | undefined>,

		/** The name of the tax. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTaxFormGroup() {
		return new FormGroup<TaxFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			employer: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDepartmentResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateDepartmentResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateDepartmentResponseFormGroup() {
		return new FormGroup<CreateDepartmentResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnifiedId {

		/**
		 * The unique identifier of the resource
		 * Required
		 */
		id: string;
	}
	export interface UnifiedIdFormProperties {

		/**
		 * The unique identifier of the resource
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUnifiedIdFormGroup() {
		return new FormGroup<UnifiedIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEmployeeResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateEmployeeResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateEmployeeResponseFormGroup() {
		return new FormGroup<CreateEmployeeResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateHrisCompanyResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateHrisCompanyResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateHrisCompanyResponseFormGroup() {
		return new FormGroup<CreateHrisCompanyResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTimeOffRequestResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateTimeOffRequestResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateTimeOffRequestResponseFormGroup() {
		return new FormGroup<CreateTimeOffRequestResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
	export enum Currency { UNKNOWN_CURRENCY = 'UNKNOWN_CURRENCY', AED = 'AED', AFN = 'AFN', ALL = 'ALL', AMD = 'AMD', ANG = 'ANG', AOA = 'AOA', ARS = 'ARS', AUD = 'AUD', AWG = 'AWG', AZN = 'AZN', BAM = 'BAM', BBD = 'BBD', BDT = 'BDT', BGN = 'BGN', BHD = 'BHD', BIF = 'BIF', BMD = 'BMD', BND = 'BND', BOB = 'BOB', BOV = 'BOV', BRL = 'BRL', BSD = 'BSD', BTN = 'BTN', BWP = 'BWP', BYR = 'BYR', BZD = 'BZD', CAD = 'CAD', CDF = 'CDF', CHE = 'CHE', CHF = 'CHF', CHW = 'CHW', CLF = 'CLF', CLP = 'CLP', CNY = 'CNY', COP = 'COP', COU = 'COU', CRC = 'CRC', CUC = 'CUC', CUP = 'CUP', CVE = 'CVE', CZK = 'CZK', DJF = 'DJF', DKK = 'DKK', DOP = 'DOP', DZD = 'DZD', EGP = 'EGP', ERN = 'ERN', ETB = 'ETB', EUR = 'EUR', FJD = 'FJD', FKP = 'FKP', GBP = 'GBP', GEL = 'GEL', GHS = 'GHS', GIP = 'GIP', GMD = 'GMD', GNF = 'GNF', GTQ = 'GTQ', GYD = 'GYD', HKD = 'HKD', HNL = 'HNL', HRK = 'HRK', HTG = 'HTG', HUF = 'HUF', IDR = 'IDR', ILS = 'ILS', INR = 'INR', IQD = 'IQD', IRR = 'IRR', ISK = 'ISK', JMD = 'JMD', JOD = 'JOD', JPY = 'JPY', KES = 'KES', KGS = 'KGS', KHR = 'KHR', KMF = 'KMF', KPW = 'KPW', KRW = 'KRW', KWD = 'KWD', KYD = 'KYD', KZT = 'KZT', LAK = 'LAK', LBP = 'LBP', LKR = 'LKR', LRD = 'LRD', LSL = 'LSL', LTL = 'LTL', LVL = 'LVL', LYD = 'LYD', MAD = 'MAD', MDL = 'MDL', MGA = 'MGA', MKD = 'MKD', MMK = 'MMK', MNT = 'MNT', MOP = 'MOP', MRO = 'MRO', MUR = 'MUR', MVR = 'MVR', MWK = 'MWK', MXN = 'MXN', MXV = 'MXV', MYR = 'MYR', MZN = 'MZN', NAD = 'NAD', NGN = 'NGN', NIO = 'NIO', NOK = 'NOK', NPR = 'NPR', NZD = 'NZD', OMR = 'OMR', PAB = 'PAB', PEN = 'PEN', PGK = 'PGK', PHP = 'PHP', PKR = 'PKR', PLN = 'PLN', PYG = 'PYG', QAR = 'QAR', RON = 'RON', RSD = 'RSD', RUB = 'RUB', RWF = 'RWF', SAR = 'SAR', SBD = 'SBD', SCR = 'SCR', SDG = 'SDG', SEK = 'SEK', SGD = 'SGD', SHP = 'SHP', SLL = 'SLL', SOS = 'SOS', SRD = 'SRD', SSP = 'SSP', STD = 'STD', SVC = 'SVC', SYP = 'SYP', SZL = 'SZL', THB = 'THB', TJS = 'TJS', TMT = 'TMT', TND = 'TND', TOP = 'TOP', TRC = 'TRC', TRY = 'TRY', TTD = 'TTD', TWD = 'TWD', TZS = 'TZS', UAH = 'UAH', UGX = 'UGX', USD = 'USD', USN = 'USN', USS = 'USS', UYI = 'UYI', UYU = 'UYU', UZS = 'UZS', VEF = 'VEF', VND = 'VND', VUV = 'VUV', WST = 'WST', XAF = 'XAF', XAG = 'XAG', XAU = 'XAU', XBA = 'XBA', XBB = 'XBB', XBC = 'XBC', XBD = 'XBD', XCD = 'XCD', XDR = 'XDR', XOF = 'XOF', XPD = 'XPD', XPF = 'XPF', XPT = 'XPT', XTS = 'XTS', XXX = 'XXX', YER = 'YER', ZAR = 'ZAR', ZMK = 'ZMK', ZMW = 'ZMW', BTC = 'BTC', ETH = 'ETH' }

	export interface CustomField {

		/** More information about the custom field */
		description?: string | null;

		/**
		 * Unique identifier for the custom field.
		 * Required
		 */
		id: string;

		/** Name of the custom field. */
		name?: string | null;
		value?: string;
	}
	export interface CustomFieldFormProperties {

		/** More information about the custom field */
		description: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the custom field.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Name of the custom field. */
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomFieldFormGroup() {
		return new FormGroup<CustomFieldFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** When custom mappings are configured on the resource, the result is included here. */
	export interface CustomMappings {
	}

	/** When custom mappings are configured on the resource, the result is included here. */
	export interface CustomMappingsFormProperties {
	}
	export function CreateCustomMappingsFormGroup() {
		return new FormGroup<CustomMappingsFormProperties>({
		});

	}

	export interface DeleteDepartmentResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteDepartmentResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteDepartmentResponseFormGroup() {
		return new FormGroup<DeleteDepartmentResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEmployeeResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteEmployeeResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteEmployeeResponseFormGroup() {
		return new FormGroup<DeleteEmployeeResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteHrisCompanyResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteHrisCompanyResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteHrisCompanyResponseFormGroup() {
		return new FormGroup<DeleteHrisCompanyResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTimeOffRequestResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteTimeOffRequestResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteTimeOffRequestResponseFormGroup() {
		return new FormGroup<DeleteTimeOffRequestResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Department {
		code?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;
		description?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** Department name */
		name?: string | null;

		/** Parent ID */
		parent_id?: string | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface DepartmentFormProperties {
		code: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** Department name */
		name: FormControl<string | null | undefined>,

		/** Parent ID */
		parent_id: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateDepartmentFormGroup() {
		return new FormGroup<DepartmentFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent_id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Email {

		/**
		 * Email address
		 * Required
		 * Min length: 1
		 */
		email: string;

		/** Unique identifier for the email address */
		id?: string | null;

		/** Email type */
		type?: EmailType | null;
	}
	export interface EmailFormProperties {

		/**
		 * Email address
		 * Required
		 * Min length: 1
		 */
		email: FormControl<string | null | undefined>,

		/** Unique identifier for the email address */
		id: FormControl<string | null | undefined>,

		/** Email type */
		type: FormControl<EmailType | null | undefined>,
	}
	export function CreateEmailFormGroup() {
		return new FormGroup<EmailFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EmailType | null | undefined>(undefined),
		});

	}

	export enum EmailType { primary = 'primary', secondary = 'secondary', work = 'work', personal = 'personal', billing = 'billing', other = 'other' }

	export interface Employee {
		addresses?: Array<Address>;
		bank_accounts?: Array<BankAccount>;

		/**
		 * The date of birth of the person.
		 * Type: DateOnly
		 */
		birthday?: Date | null;

		/** The unique identifier of the company. */
		company_id?: string | null;

		/** The name of the company. */
		company_name?: string | null;
		compensations?: Array<EmployeeCompensation>;

		/**
		 * Country code according to ISO 3166-1 alpha-2.
		 * Min length: 2
		 * Max length: 2
		 */
		country_of_birth?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;
		custom_fields?: Array<CustomField>;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/**
		 * The date the person deceased.
		 * Type: DateOnly
		 */
		deceased_on?: Date | null;

		/** Flag to indicate if the object is deleted. */
		deleted?: boolean | null;

		/** The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field. */
		department?: string | null;

		/** Unique identifier of the department ID this employee belongs to. */
		department_id?: string | null;

		/** Name of the department this employee belongs to. */
		department_name?: string | null;

		/** A description of the object. */
		description?: string | null;

		/** Indicate the employee's dietary preference. */
		dietary_preference?: string | null;

		/** Direct reports is an array of ids that reflect the individuals in an organizational hierarchy who are directly supervised by this specific employee. */
		direct_reports?: Array<string>;

		/** The name used to display the employee, often a combination of their first and last names. */
		display_name?: string | null;

		/** The division the person is currently in. Usually a collection of departments or teams or regions. */
		division?: string | null;

		/** Unique identifier of the division this employee belongs to. */
		division_id?: string | null;
		emails?: Array<Email>;

		/** An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company. */
		employee_number?: string | null;

		/** An End Date is the date that the employee ended working at the company */
		employment_end_date?: string | null;
		employment_role?: EmployeeEmployment_role;

		/** A Start Date is the date that the employee started working at the company */
		employment_start_date?: string | null;

		/** The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status. */
		employment_status?: EmployeeEmployment_status | null;

		/** The ethnicity of the employee */
		ethnicity?: string | null;

		/** The first name of the person. */
		first_name?: string | null;

		/** Indicate the employee's food allergies. */
		food_allergies?: Array<string>;

		/** The gender represents the gender identity of a person. */
		gender?: EmployeeGender | null;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/** The initials of the person, usually derived from their first, middle, and last names. */
		initials?: string | null;
		jobs?: Array<EmployeeJob>;
		languages?: Array<string>;

		/** The last name of the person. */
		last_name?: string | null;

		/** The reason because the employment ended. */
		leaving_reason?: EmployeeLeaving_reason | null;
		manager?: EmployeeManager;

		/** The marital status of the employee. */
		marital_status?: string | null;

		/** Middle name of the person. */
		middle_name?: string | null;
		nationalities?: Array<string>;
		partner?: Person;
		phone_numbers?: Array<PhoneNumber>;

		/** The URL of the photo of a person. */
		photo_url?: string | null;

		/** language code according to ISO 639-1. For the United States - EN */
		preferred_language?: string | null;

		/** The name the employee prefers to be addressed by, which may be different from their legal name. */
		preferred_name?: string | null;
		probation_period?: EmployeeProbation_period;

		/** The preferred pronouns of the person. */
		pronouns?: string | null;
		record_url?: string | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/** A formal salutation for the person. For example, 'Mr', 'Mrs' */
		salutation?: string | null;
		social_links?: Array<SocialLink>;

		/** A unique identifier assigned by the government. This field is considered sensitive information and may be subject to special security and privacy restrictions. */
		social_security_number?: string | null;

		/** When the employee is imported as a new hire, this field indicates what system (e.g. the name of the ATS) this employee was imported from. */
		source?: string | null;

		/** Unique identifier of the employee in the system this employee was imported from (e.g. the ID in the ATS). */
		source_id?: string | null;
		tags?: Array<string>;
		tax_code?: string | null;
		tax_id?: string | null;

		/** The team the person is currently in. */
		team?: Team;

		/** The time zone related to the resource. The value is a string containing a standard time zone identifier, e.g. Europe/London. */
		timezone?: string | null;

		/** The job title of the person. */
		title?: string | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;

		/** Indicates if the employee works from a remote location. */
		works_remote?: boolean | null;
	}
	export interface EmployeeFormProperties {

		/**
		 * The date of birth of the person.
		 * Type: DateOnly
		 */
		birthday: FormControl<Date | null | undefined>,

		/** The unique identifier of the company. */
		company_id: FormControl<string | null | undefined>,

		/** The name of the company. */
		company_name: FormControl<string | null | undefined>,

		/**
		 * Country code according to ISO 3166-1 alpha-2.
		 * Min length: 2
		 * Max length: 2
		 */
		country_of_birth: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/**
		 * The date the person deceased.
		 * Type: DateOnly
		 */
		deceased_on: FormControl<Date | null | undefined>,

		/** Flag to indicate if the object is deleted. */
		deleted: FormControl<boolean | null | undefined>,

		/** The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field. */
		department: FormControl<string | null | undefined>,

		/** Unique identifier of the department ID this employee belongs to. */
		department_id: FormControl<string | null | undefined>,

		/** Name of the department this employee belongs to. */
		department_name: FormControl<string | null | undefined>,

		/** A description of the object. */
		description: FormControl<string | null | undefined>,

		/** Indicate the employee's dietary preference. */
		dietary_preference: FormControl<string | null | undefined>,

		/** The name used to display the employee, often a combination of their first and last names. */
		display_name: FormControl<string | null | undefined>,

		/** The division the person is currently in. Usually a collection of departments or teams or regions. */
		division: FormControl<string | null | undefined>,

		/** Unique identifier of the division this employee belongs to. */
		division_id: FormControl<string | null | undefined>,

		/** An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company. */
		employee_number: FormControl<string | null | undefined>,

		/** An End Date is the date that the employee ended working at the company */
		employment_end_date: FormControl<string | null | undefined>,

		/** A Start Date is the date that the employee started working at the company */
		employment_start_date: FormControl<string | null | undefined>,

		/** The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status. */
		employment_status: FormControl<EmployeeEmployment_status | null | undefined>,

		/** The ethnicity of the employee */
		ethnicity: FormControl<string | null | undefined>,

		/** The first name of the person. */
		first_name: FormControl<string | null | undefined>,

		/** The gender represents the gender identity of a person. */
		gender: FormControl<EmployeeGender | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The initials of the person, usually derived from their first, middle, and last names. */
		initials: FormControl<string | null | undefined>,

		/** The last name of the person. */
		last_name: FormControl<string | null | undefined>,

		/** The reason because the employment ended. */
		leaving_reason: FormControl<EmployeeLeaving_reason | null | undefined>,

		/** The marital status of the employee. */
		marital_status: FormControl<string | null | undefined>,

		/** Middle name of the person. */
		middle_name: FormControl<string | null | undefined>,

		/** The URL of the photo of a person. */
		photo_url: FormControl<string | null | undefined>,

		/** language code according to ISO 639-1. For the United States - EN */
		preferred_language: FormControl<string | null | undefined>,

		/** The name the employee prefers to be addressed by, which may be different from their legal name. */
		preferred_name: FormControl<string | null | undefined>,

		/** The preferred pronouns of the person. */
		pronouns: FormControl<string | null | undefined>,
		record_url: FormControl<string | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** A formal salutation for the person. For example, 'Mr', 'Mrs' */
		salutation: FormControl<string | null | undefined>,

		/** A unique identifier assigned by the government. This field is considered sensitive information and may be subject to special security and privacy restrictions. */
		social_security_number: FormControl<string | null | undefined>,

		/** When the employee is imported as a new hire, this field indicates what system (e.g. the name of the ATS) this employee was imported from. */
		source: FormControl<string | null | undefined>,

		/** Unique identifier of the employee in the system this employee was imported from (e.g. the ID in the ATS). */
		source_id: FormControl<string | null | undefined>,
		tax_code: FormControl<string | null | undefined>,
		tax_id: FormControl<string | null | undefined>,

		/** The time zone related to the resource. The value is a string containing a standard time zone identifier, e.g. Europe/London. */
		timezone: FormControl<string | null | undefined>,

		/** The job title of the person. */
		title: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,

		/** Indicates if the employee works from a remote location. */
		works_remote: FormControl<boolean | null | undefined>,
	}
	export function CreateEmployeeFormGroup() {
		return new FormGroup<EmployeeFormProperties>({
			birthday: new FormControl<Date | null | undefined>(undefined),
			company_id: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			country_of_birth: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2)]),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			deceased_on: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			department: new FormControl<string | null | undefined>(undefined),
			department_id: new FormControl<string | null | undefined>(undefined),
			department_name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			dietary_preference: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			division: new FormControl<string | null | undefined>(undefined),
			division_id: new FormControl<string | null | undefined>(undefined),
			employee_number: new FormControl<string | null | undefined>(undefined),
			employment_end_date: new FormControl<string | null | undefined>(undefined),
			employment_start_date: new FormControl<string | null | undefined>(undefined),
			employment_status: new FormControl<EmployeeEmployment_status | null | undefined>(undefined),
			ethnicity: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<EmployeeGender | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			initials: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			leaving_reason: new FormControl<EmployeeLeaving_reason | null | undefined>(undefined),
			marital_status: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			photo_url: new FormControl<string | null | undefined>(undefined),
			preferred_language: new FormControl<string | null | undefined>(undefined),
			preferred_name: new FormControl<string | null | undefined>(undefined),
			pronouns: new FormControl<string | null | undefined>(undefined),
			record_url: new FormControl<string | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			salutation: new FormControl<string | null | undefined>(undefined),
			social_security_number: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined),
			tax_code: new FormControl<string | null | undefined>(undefined),
			tax_id: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			works_remote: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EmployeeCompensation {

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/** The date on which a change to an employee's compensation takes effect. */
		effective_date?: string | null;

		/** The FLSA status for this compensation. */
		flsa_status?: EmployeeCompensationFlsa_status | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** The ID of the job to which the compensation belongs. */
		job_id?: string | null;

		/** Frequency of employee compensation. */
		payment_frequency?: EmployeeCompensationPayment_frequency | null;

		/** Unit of measurement for employee compensation. */
		payment_unit?: EmployeeCompensationPayment_unit | null;

		/**
		 * The amount paid per payment unit.
		 * Type: double
		 */
		rate?: number | null;
	}
	export interface EmployeeCompensationFormProperties {

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** The date on which a change to an employee's compensation takes effect. */
		effective_date: FormControl<string | null | undefined>,

		/** The FLSA status for this compensation. */
		flsa_status: FormControl<EmployeeCompensationFlsa_status | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** The ID of the job to which the compensation belongs. */
		job_id: FormControl<string | null | undefined>,

		/** Frequency of employee compensation. */
		payment_frequency: FormControl<EmployeeCompensationPayment_frequency | null | undefined>,

		/** Unit of measurement for employee compensation. */
		payment_unit: FormControl<EmployeeCompensationPayment_unit | null | undefined>,

		/**
		 * The amount paid per payment unit.
		 * Type: double
		 */
		rate: FormControl<number | null | undefined>,
	}
	export function CreateEmployeeCompensationFormGroup() {
		return new FormGroup<EmployeeCompensationFormProperties>({
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			effective_date: new FormControl<string | null | undefined>(undefined),
			flsa_status: new FormControl<EmployeeCompensationFlsa_status | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			job_id: new FormControl<string | null | undefined>(undefined),
			payment_frequency: new FormControl<EmployeeCompensationPayment_frequency | null | undefined>(undefined),
			payment_unit: new FormControl<EmployeeCompensationPayment_unit | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EmployeeCompensationFlsa_status { exempt = 'exempt', 'salaried-nonexempt' = 'salaried-nonexempt', nonexempt = 'nonexempt', owner = 'owner', other = 'other' }

	export enum EmployeeCompensationPayment_frequency { weekly = 'weekly', biweekly = 'biweekly', monthly = 'monthly', 'pro-rata' = 'pro-rata', other = 'other' }

	export enum EmployeeCompensationPayment_unit { hour = 'hour', week = 'week', month = 'month', year = 'year', paycheck = 'paycheck', other = 'other' }

	export interface EmployeeEmployment_role {

		/** The work schedule of the employee. */
		sub_type?: EmployeeEmployment_roleSub_type | null;

		/** The type of employment relationship the employee has with the organization. */
		type?: EmployeeEmployment_roleType | null;
	}
	export interface EmployeeEmployment_roleFormProperties {

		/** The work schedule of the employee. */
		sub_type: FormControl<EmployeeEmployment_roleSub_type | null | undefined>,

		/** The type of employment relationship the employee has with the organization. */
		type: FormControl<EmployeeEmployment_roleType | null | undefined>,
	}
	export function CreateEmployeeEmployment_roleFormGroup() {
		return new FormGroup<EmployeeEmployment_roleFormProperties>({
			sub_type: new FormControl<EmployeeEmployment_roleSub_type | null | undefined>(undefined),
			type: new FormControl<EmployeeEmployment_roleType | null | undefined>(undefined),
		});

	}

	export enum EmployeeEmployment_roleSub_type { full_time = 'full_time', part_time = 'part_time', hourly = 'hourly', other = 'other' }

	export enum EmployeeEmployment_roleType { contractor = 'contractor', employee = 'employee', freelance = 'freelance', temp = 'temp', internship = 'internship', other = 'other' }

	export enum EmployeeEmployment_status { active = 'active', inactive = 'inactive', terminated = 'terminated', other = 'other' }

	export enum EmployeeGender { male = 'male', female = 'female', unisex = 'unisex', other = 'other', not_specified = 'not_specified' }

	export interface EmployeeJob {

		/**
		 * The rate of pay for the employee in their current job role.
		 * Type: double
		 */
		compensation_rate?: number | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/** A unique identifier for an object. */
		employee_id?: string | null;

		/**
		 * The date on which the employee leaves or is expected to leave their current job role.
		 * Type: DateOnly
		 */
		end_date?: Date | null;

		/**
		 * The date on which the employee was hired by the organization
		 * Type: DateOnly
		 */
		hired_at?: Date | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** Indicates whether this the employee's primary job. */
		is_primary?: boolean | null;
		location?: Address;

		/** Unit of measurement for employee compensation. */
		payment_unit?: EmployeeCompensationPayment_unit | null;

		/** The position and responsibilities of the person within the organization. */
		role?: string | null;

		/**
		 * The date on which the employee starts working in their current job role.
		 * Type: DateOnly
		 */
		start_date?: Date | null;

		/** The job title of the person. */
		title?: string | null;
	}
	export interface EmployeeJobFormProperties {

		/**
		 * The rate of pay for the employee in their current job role.
		 * Type: double
		 */
		compensation_rate: FormControl<number | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** A unique identifier for an object. */
		employee_id: FormControl<string | null | undefined>,

		/**
		 * The date on which the employee leaves or is expected to leave their current job role.
		 * Type: DateOnly
		 */
		end_date: FormControl<Date | null | undefined>,

		/**
		 * The date on which the employee was hired by the organization
		 * Type: DateOnly
		 */
		hired_at: FormControl<Date | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** Indicates whether this the employee's primary job. */
		is_primary: FormControl<boolean | null | undefined>,

		/** Unit of measurement for employee compensation. */
		payment_unit: FormControl<EmployeeCompensationPayment_unit | null | undefined>,

		/** The position and responsibilities of the person within the organization. */
		role: FormControl<string | null | undefined>,

		/**
		 * The date on which the employee starts working in their current job role.
		 * Type: DateOnly
		 */
		start_date: FormControl<Date | null | undefined>,

		/** The job title of the person. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeJobFormGroup() {
		return new FormGroup<EmployeeJobFormProperties>({
			compensation_rate: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			employee_id: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<Date | null | undefined>(undefined),
			hired_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_primary: new FormControl<boolean | null | undefined>(undefined),
			payment_unit: new FormControl<EmployeeCompensationPayment_unit | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EmployeeLeaving_reason { dismissed = 'dismissed', resigned = 'resigned', redundancy = 'redundancy', other = 'other' }

	export interface EmployeeManager {

		/** The email address of the manager. */
		email?: string | null;

		/** The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status. */
		employment_status?: EmployeeEmployment_status | null;

		/** The first name of the person. */
		first_name?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** The last name of the person. */
		last_name?: string | null;

		/** The name of the manager, often a combination of their first and last names. */
		name?: string | null;
	}
	export interface EmployeeManagerFormProperties {

		/** The email address of the manager. */
		email: FormControl<string | null | undefined>,

		/** The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status. */
		employment_status: FormControl<EmployeeEmployment_status | null | undefined>,

		/** The first name of the person. */
		first_name: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** The last name of the person. */
		last_name: FormControl<string | null | undefined>,

		/** The name of the manager, often a combination of their first and last names. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeManagerFormGroup() {
		return new FormGroup<EmployeeManagerFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			employment_status: new FormControl<EmployeeEmployment_status | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Person {

		/**
		 * Date of birth
		 * Type: DateOnly
		 */
		birthday?: Date | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/**
		 * Date of death
		 * Type: DateOnly
		 */
		deceased_on?: Date | null;

		/** The first name of the person. */
		first_name?: string | null;

		/** The gender represents the gender identity of a person. */
		gender?: EmployeeGender | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** Initials of the person */
		initials?: string | null;

		/** The last name of the person. */
		last_name?: string | null;

		/** Middle name of the person. */
		middle_name?: string | null;
	}
	export interface PersonFormProperties {

		/**
		 * Date of birth
		 * Type: DateOnly
		 */
		birthday: FormControl<Date | null | undefined>,

		/**
		 * Date of death
		 * Type: DateOnly
		 */
		deceased_on: FormControl<Date | null | undefined>,

		/** The first name of the person. */
		first_name: FormControl<string | null | undefined>,

		/** The gender represents the gender identity of a person. */
		gender: FormControl<EmployeeGender | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** Initials of the person */
		initials: FormControl<string | null | undefined>,

		/** The last name of the person. */
		last_name: FormControl<string | null | undefined>,

		/** Middle name of the person. */
		middle_name: FormControl<string | null | undefined>,
	}
	export function CreatePersonFormGroup() {
		return new FormGroup<PersonFormProperties>({
			birthday: new FormControl<Date | null | undefined>(undefined),
			deceased_on: new FormControl<Date | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<EmployeeGender | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			initials: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneNumber {

		/** The area code of the phone number, e.g. 323 */
		area_code?: string | null;

		/** The country code of the phone number, e.g. +1 */
		country_code?: string | null;

		/** The extension of the phone number */
		extension?: string | null;

		/** Unique identifier of the phone number */
		id?: string | null;

		/**
		 * The phone number
		 * Required
		 * Min length: 1
		 */
		number: string;

		/** The type of phone number */
		type?: PhoneNumberType | null;
	}
	export interface PhoneNumberFormProperties {

		/** The area code of the phone number, e.g. 323 */
		area_code: FormControl<string | null | undefined>,

		/** The country code of the phone number, e.g. +1 */
		country_code: FormControl<string | null | undefined>,

		/** The extension of the phone number */
		extension: FormControl<string | null | undefined>,

		/** Unique identifier of the phone number */
		id: FormControl<string | null | undefined>,

		/**
		 * The phone number
		 * Required
		 * Min length: 1
		 */
		number: FormControl<string | null | undefined>,

		/** The type of phone number */
		type: FormControl<PhoneNumberType | null | undefined>,
	}
	export function CreatePhoneNumberFormGroup() {
		return new FormGroup<PhoneNumberFormProperties>({
			area_code: new FormControl<string | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			extension: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			type: new FormControl<PhoneNumberType | null | undefined>(undefined),
		});

	}

	export enum PhoneNumberType { primary = 'primary', secondary = 'secondary', home = 'home', work = 'work', office = 'office', mobile = 'mobile', assistant = 'assistant', fax = 'fax', 'direct-dial-in' = 'direct-dial-in', personal = 'personal', other = 'other' }

	export interface EmployeeProbation_period {

		/**
		 * The date that the employee ended their probation period at the company.
		 * Type: DateOnly
		 */
		end_date?: Date | null;

		/**
		 * The date that the employee started their probation period at the company.
		 * Type: DateOnly
		 */
		start_date?: Date | null;
	}
	export interface EmployeeProbation_periodFormProperties {

		/**
		 * The date that the employee ended their probation period at the company.
		 * Type: DateOnly
		 */
		end_date: FormControl<Date | null | undefined>,

		/**
		 * The date that the employee started their probation period at the company.
		 * Type: DateOnly
		 */
		start_date: FormControl<Date | null | undefined>,
	}
	export function CreateEmployeeProbation_periodFormGroup() {
		return new FormGroup<EmployeeProbation_periodFormProperties>({
			end_date: new FormControl<Date | null | undefined>(undefined),
			start_date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SocialLink {

		/** Unique identifier of the social link */
		id?: string | null;

		/** Type of the social link, e.g. twitter */
		type?: string | null;

		/**
		 * URL of the social link, e.g. https://www.twitter.com/apideck
		 * Required
		 * Min length: 1
		 */
		url: string;
	}
	export interface SocialLinkFormProperties {

		/** Unique identifier of the social link */
		id: FormControl<string | null | undefined>,

		/** Type of the social link, e.g. twitter */
		type: FormControl<string | null | undefined>,

		/**
		 * URL of the social link, e.g. https://www.twitter.com/apideck
		 * Required
		 * Min length: 1
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSocialLinkFormGroup() {
		return new FormGroup<SocialLinkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** The team the person is currently in. */
	export interface Team {

		/** The unique identifier of the team. */
		id?: string | null;

		/** The name of the team. */
		name?: string | null;
	}

	/** The team the person is currently in. */
	export interface TeamFormProperties {

		/** The unique identifier of the team. */
		id: FormControl<string | null | undefined>,

		/** The name of the team. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeList {

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The first name of the person. */
		first_name?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** The last name of the person. */
		last_name?: string | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;
	}
	export interface EmployeeListFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The first name of the person. */
		first_name: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** The last name of the person. */
		last_name: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateEmployeeListFormGroup() {
		return new FormGroup<EmployeeListFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface EmployeePayroll {

		/**
		 * The date on which employees will be paid for the payroll.
		 * Required
		 */
		check_date: string;

		/** The unique identifier of the company. */
		company_id?: string | null;

		/** An array of compensations for the payroll. */
		compensations?: Array<Compensation>;

		/** ID of the employee */
		employee_id?: string | null;

		/**
		 * The end date, inclusive, of the pay period.
		 * Required
		 */
		end_date: string;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/**
		 * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated.
		 * Required
		 */
		processed: boolean;

		/** The date the payroll was processed. */
		processed_date?: string | null;

		/**
		 * The start date, inclusive, of the pay period.
		 * Required
		 */
		start_date: string;
		totals?: PayrollTotals;
	}
	export interface EmployeePayrollFormProperties {

		/**
		 * The date on which employees will be paid for the payroll.
		 * Required
		 */
		check_date: FormControl<string | null | undefined>,

		/** The unique identifier of the company. */
		company_id: FormControl<string | null | undefined>,

		/** ID of the employee */
		employee_id: FormControl<string | null | undefined>,

		/**
		 * The end date, inclusive, of the pay period.
		 * Required
		 */
		end_date: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated.
		 * Required
		 */
		processed: FormControl<boolean | null | undefined>,

		/** The date the payroll was processed. */
		processed_date: FormControl<string | null | undefined>,

		/**
		 * The start date, inclusive, of the pay period.
		 * Required
		 */
		start_date: FormControl<string | null | undefined>,
	}
	export function CreateEmployeePayrollFormGroup() {
		return new FormGroup<EmployeePayrollFormProperties>({
			check_date: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			company_id: new FormControl<string | null | undefined>(undefined),
			employee_id: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			processed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			processed_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			start_date: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
		});

	}

	export interface PayrollTotals {

		/**
		 * The total check amount for the payroll.
		 * Type: double
		 */
		check_amount?: number | null;

		/**
		 * The total company debit for the payroll.
		 * Type: double
		 */
		company_debit?: number | null;

		/**
		 * The total amount of employee deducted benefits for the payroll.
		 * Type: double
		 */
		employee_benefit_deductions?: number | null;

		/**
		 * The total amount of employee paid taxes for the payroll.
		 * Type: double
		 */
		employee_taxes?: number | null;

		/**
		 * The total amount of company contributed benefits for the payroll.
		 * Type: double
		 */
		employer_benefit_contributions?: number | null;

		/**
		 * The total amount of employer paid taxes for the payroll.
		 * Type: double
		 */
		employer_taxes?: number | null;

		/**
		 * The gross pay amount for the payroll.
		 * Type: double
		 */
		gross_pay?: number | null;

		/**
		 * The net pay amount for the payroll.
		 * Type: double
		 */
		net_pay?: number | null;

		/**
		 * The total tax debit for the payroll.
		 * Type: double
		 */
		tax_debit?: number | null;
	}
	export interface PayrollTotalsFormProperties {

		/**
		 * The total check amount for the payroll.
		 * Type: double
		 */
		check_amount: FormControl<number | null | undefined>,

		/**
		 * The total company debit for the payroll.
		 * Type: double
		 */
		company_debit: FormControl<number | null | undefined>,

		/**
		 * The total amount of employee deducted benefits for the payroll.
		 * Type: double
		 */
		employee_benefit_deductions: FormControl<number | null | undefined>,

		/**
		 * The total amount of employee paid taxes for the payroll.
		 * Type: double
		 */
		employee_taxes: FormControl<number | null | undefined>,

		/**
		 * The total amount of company contributed benefits for the payroll.
		 * Type: double
		 */
		employer_benefit_contributions: FormControl<number | null | undefined>,

		/**
		 * The total amount of employer paid taxes for the payroll.
		 * Type: double
		 */
		employer_taxes: FormControl<number | null | undefined>,

		/**
		 * The gross pay amount for the payroll.
		 * Type: double
		 */
		gross_pay: FormControl<number | null | undefined>,

		/**
		 * The net pay amount for the payroll.
		 * Type: double
		 */
		net_pay: FormControl<number | null | undefined>,

		/**
		 * The total tax debit for the payroll.
		 * Type: double
		 */
		tax_debit: FormControl<number | null | undefined>,
	}
	export function CreatePayrollTotalsFormGroup() {
		return new FormGroup<PayrollTotalsFormProperties>({
			check_amount: new FormControl<number | null | undefined>(undefined),
			company_debit: new FormControl<number | null | undefined>(undefined),
			employee_benefit_deductions: new FormControl<number | null | undefined>(undefined),
			employee_taxes: new FormControl<number | null | undefined>(undefined),
			employer_benefit_contributions: new FormControl<number | null | undefined>(undefined),
			employer_taxes: new FormControl<number | null | undefined>(undefined),
			gross_pay: new FormControl<number | null | undefined>(undefined),
			net_pay: new FormControl<number | null | undefined>(undefined),
			tax_debit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EmployeeSchedules {
		employee?: Employee;
		schedules?: Array<Schedule>;
	}
	export interface EmployeeSchedulesFormProperties {
	}
	export function CreateEmployeeSchedulesFormGroup() {
		return new FormGroup<EmployeeSchedulesFormProperties>({
		});

	}

	export interface Schedule {

		/**
		 * The end date, inclusive, of the schedule period.
		 * Required
		 */
		end_date: string;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/**
		 * The start date, inclusive, of the schedule period.
		 * Required
		 */
		start_date: string;

		/** Required */
		work_pattern: ScheduleWork_pattern;
	}
	export interface ScheduleFormProperties {

		/**
		 * The end date, inclusive, of the schedule period.
		 * Required
		 */
		end_date: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The start date, inclusive, of the schedule period.
		 * Required
		 */
		start_date: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			end_date: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start_date: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
		});

	}

	export interface ScheduleWork_pattern {
		even_weeks?: ScheduleWork_patternEven_weeks;
		odd_weeks?: ScheduleWork_patternOdd_weeks;
	}
	export interface ScheduleWork_patternFormProperties {
	}
	export function CreateScheduleWork_patternFormGroup() {
		return new FormGroup<ScheduleWork_patternFormProperties>({
		});

	}

	export interface ScheduleWork_patternEven_weeks {

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_friday?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_monday?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_saturday?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_sunday?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_thursday?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_tuesday?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_wednesday?: number | null;
	}
	export interface ScheduleWork_patternEven_weeksFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_friday: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_monday: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_saturday: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_sunday: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_thursday: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_tuesday: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_wednesday: FormControl<number | null | undefined>,
	}
	export function CreateScheduleWork_patternEven_weeksFormGroup() {
		return new FormGroup<ScheduleWork_patternEven_weeksFormProperties>({
			hours_friday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
			hours_monday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
			hours_saturday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
			hours_sunday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
			hours_thursday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
			hours_tuesday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
			hours_wednesday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
		});

	}

	export interface ScheduleWork_patternOdd_weeks {

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_friday?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_monday?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_saturday?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_sunday?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_thursday?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_tuesday?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_wednesday?: number | null;
	}
	export interface ScheduleWork_patternOdd_weeksFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_friday: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_monday: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_saturday: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_sunday: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_thursday: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_tuesday: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 24
		 */
		hours_wednesday: FormControl<number | null | undefined>,
	}
	export function CreateScheduleWork_patternOdd_weeksFormGroup() {
		return new FormGroup<ScheduleWork_patternOdd_weeksFormProperties>({
			hours_friday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
			hours_monday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
			hours_saturday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
			hours_sunday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
			hours_thursday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
			hours_tuesday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
			hours_wednesday: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(24), Validators.pattern('^(\d{1,2})(\.\d{1,2})?$')]),
		});

	}

	export interface EmployeesFilter {

		/** Company ID to filter on */
		company_id?: string | null;

		/** ID of the department to filter on */
		department_id?: string | null;

		/** Email to filter on */
		email?: string | null;

		/** Employee number to filter on */
		employee_number?: string | null;

		/** Employment status to filter on */
		employment_status?: EmployeeEmployment_status | null;

		/** First Name to filter on */
		first_name?: string | null;

		/** Last Name to filter on */
		last_name?: string | null;

		/** Manager id to filter on */
		manager_id?: string | null;

		/** Job title to filter on */
		title?: string | null;
	}
	export interface EmployeesFilterFormProperties {

		/** Company ID to filter on */
		company_id: FormControl<string | null | undefined>,

		/** ID of the department to filter on */
		department_id: FormControl<string | null | undefined>,

		/** Email to filter on */
		email: FormControl<string | null | undefined>,

		/** Employee number to filter on */
		employee_number: FormControl<string | null | undefined>,

		/** Employment status to filter on */
		employment_status: FormControl<EmployeeEmployment_status | null | undefined>,

		/** First Name to filter on */
		first_name: FormControl<string | null | undefined>,

		/** Last Name to filter on */
		last_name: FormControl<string | null | undefined>,

		/** Manager id to filter on */
		manager_id: FormControl<string | null | undefined>,

		/** Job title to filter on */
		title: FormControl<string | null | undefined>,
	}
	export function CreateEmployeesFilterFormGroup() {
		return new FormGroup<EmployeesFilterFormProperties>({
			company_id: new FormControl<string | null | undefined>(undefined),
			department_id: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			employee_number: new FormControl<string | null | undefined>(undefined),
			employment_status: new FormControl<EmployeeEmployment_status | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			manager_id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeesSort {

		/** The field on which to sort the Employees */
		by?: EmployeesSortBy | null;

		/** The direction in which to sort the results */
		direction?: EmployeesSortDirection | null;
	}
	export interface EmployeesSortFormProperties {

		/** The field on which to sort the Employees */
		by: FormControl<EmployeesSortBy | null | undefined>,

		/** The direction in which to sort the results */
		direction: FormControl<EmployeesSortDirection | null | undefined>,
	}
	export function CreateEmployeesSortFormGroup() {
		return new FormGroup<EmployeesSortFormProperties>({
			by: new FormControl<EmployeesSortBy | null | undefined>(undefined),
			direction: new FormControl<EmployeesSortDirection | null | undefined>(undefined),
		});

	}

	export enum EmployeesSortBy { first_name = 'first_name', last_name = 'last_name', created_at = 'created_at', updated_at = 'updated_at' }

	export enum EmployeesSortDirection { asc = 'asc', desc = 'desc' }


	/** The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status. */
	export enum EmploymentStatus { active = 'active', inactive = 'inactive', terminated = 'terminated', other = 'other' }


	/** The gender represents the gender identity of a person. */
	export enum Gender { male = 'male', female = 'female', unisex = 'unisex', other = 'other', not_specified = 'not_specified' }

	export interface GetDepartmentResponse {

		/** Required */
		data: Department;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetDepartmentResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetDepartmentResponseFormGroup() {
		return new FormGroup<GetDepartmentResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDepartmentsResponse {

		/** Required */
		data: Array<Department>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetDepartmentsResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetDepartmentsResponseFormGroup() {
		return new FormGroup<GetDepartmentsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Links to navigate to previous or next pages through the API */
	export interface Links {

		/** Link to navigate to the current page through the API */
		current?: string | null;

		/** Link to navigate to the previous page through the API */
		next?: string | null;

		/** Link to navigate to the previous page through the API */
		previous?: string | null;
	}

	/** Links to navigate to previous or next pages through the API */
	export interface LinksFormProperties {

		/** Link to navigate to the current page through the API */
		current: FormControl<string | null | undefined>,

		/** Link to navigate to the previous page through the API */
		next: FormControl<string | null | undefined>,

		/** Link to navigate to the previous page through the API */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			current: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response metadata */
	export interface Meta {

		/** Cursors to navigate to previous or next pages through the API */
		cursors?: MetaCursors;

		/**
		 * Number of items returned in the data property of the response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		items_on_page?: number | null;
	}

	/** Response metadata */
	export interface MetaFormProperties {

		/**
		 * Number of items returned in the data property of the response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		items_on_page: FormControl<number | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			items_on_page: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MetaCursors {

		/** Cursor to navigate to the current page of results through the API */
		current?: string | null;

		/** Cursor to navigate to the next page of results through the API */
		next?: string | null;

		/** Cursor to navigate to the previous page of results through the API */
		previous?: string | null;
	}
	export interface MetaCursorsFormProperties {

		/** Cursor to navigate to the current page of results through the API */
		current: FormControl<string | null | undefined>,

		/** Cursor to navigate to the next page of results through the API */
		next: FormControl<string | null | undefined>,

		/** Cursor to navigate to the previous page of results through the API */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateMetaCursorsFormGroup() {
		return new FormGroup<MetaCursorsFormProperties>({
			current: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEmployeePayrollResponse {

		/** Required */
		data: EmployeePayroll;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetEmployeePayrollResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetEmployeePayrollResponseFormGroup() {
		return new FormGroup<GetEmployeePayrollResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEmployeePayrollsResponse {

		/** Required */
		data: Array<EmployeePayroll>;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetEmployeePayrollsResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetEmployeePayrollsResponseFormGroup() {
		return new FormGroup<GetEmployeePayrollsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEmployeeResponse {

		/** Required */
		data: Employee;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetEmployeeResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetEmployeeResponseFormGroup() {
		return new FormGroup<GetEmployeeResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEmployeeSchedulesResponse {

		/** Required */
		data: EmployeeSchedules;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetEmployeeSchedulesResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetEmployeeSchedulesResponseFormGroup() {
		return new FormGroup<GetEmployeeSchedulesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEmployeesResponse {

		/** Required */
		data: Array<Employee>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetEmployeesResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetEmployeesResponseFormGroup() {
		return new FormGroup<GetEmployeesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetHrisCompaniesResponse {

		/** Required */
		data: Array<HrisCompany>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetHrisCompaniesResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetHrisCompaniesResponseFormGroup() {
		return new FormGroup<GetHrisCompaniesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HrisCompany {
		addresses?: Array<Address>;

		/** An Company Number, Company ID or Company Code, is a unique number that has been assigned to each company. */
		company_number?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Min length: 1 */
		debtor_id?: string | null;
		deleted?: boolean | null;

		/** Min length: 1 */
		display_name?: string | null;
		emails?: Array<Email>;

		/** A unique identifier for an object. */
		id?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		legal_name: string;
		phone_numbers?: Array<PhoneNumber>;
		status?: HrisCompanyStatus | null;

		/** Min length: 1 */
		subdomain?: string | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
		websites?: Array<Website>;
	}
	export interface HrisCompanyFormProperties {

		/** An Company Number, Company ID or Company Code, is a unique number that has been assigned to each company. */
		company_number: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** Min length: 1 */
		debtor_id: FormControl<string | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		display_name: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		legal_name: FormControl<string | null | undefined>,
		status: FormControl<HrisCompanyStatus | null | undefined>,

		/** Min length: 1 */
		subdomain: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateHrisCompanyFormGroup() {
		return new FormGroup<HrisCompanyFormProperties>({
			company_number: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			debtor_id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			id: new FormControl<string | null | undefined>(undefined),
			legal_name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			status: new FormControl<HrisCompanyStatus | null | undefined>(undefined),
			subdomain: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HrisCompanyStatus { active = 'active', inactive = 'inactive', trial = 'trial', other = 'other' }

	export interface Website {

		/** Unique identifier for the website */
		id?: string | null;

		/** The type of website */
		type?: WebsiteType | null;

		/**
		 * The website URL
		 * Required
		 * Min length: 1
		 */
		url: string;
	}
	export interface WebsiteFormProperties {

		/** Unique identifier for the website */
		id: FormControl<string | null | undefined>,

		/** The type of website */
		type: FormControl<WebsiteType | null | undefined>,

		/**
		 * The website URL
		 * Required
		 * Min length: 1
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebsiteFormGroup() {
		return new FormGroup<WebsiteFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<WebsiteType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum WebsiteType { primary = 'primary', secondary = 'secondary', work = 'work', personal = 'personal', other = 'other' }

	export interface GetHrisCompanyResponse {

		/** Required */
		data: HrisCompany;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetHrisCompanyResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetHrisCompanyResponseFormGroup() {
		return new FormGroup<GetHrisCompanyResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetHrisJobResponse {

		/** Required */
		data: HrisJob;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetHrisJobResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetHrisJobResponseFormGroup() {
		return new FormGroup<GetHrisJobResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HrisJob {

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Department name */
		department?: string | null;

		/** Id of the employee */
		employee_id?: string | null;

		/** The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status. */
		employment_status?: EmployeeEmployment_status | null;

		/** Type: DateOnly */
		end_date?: Date | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** Indicates whether this the employee's primary job. */
		is_primary?: boolean | null;
		location?: HrisJobLocation;

		/** Type: DateOnly */
		start_date?: Date | null;

		/** The job title of the person. */
		title?: string | null;
	}
	export interface HrisJobFormProperties {

		/** Department name */
		department: FormControl<string | null | undefined>,

		/** Id of the employee */
		employee_id: FormControl<string | null | undefined>,

		/** The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status. */
		employment_status: FormControl<EmployeeEmployment_status | null | undefined>,

		/** Type: DateOnly */
		end_date: FormControl<Date | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** Indicates whether this the employee's primary job. */
		is_primary: FormControl<boolean | null | undefined>,

		/** Type: DateOnly */
		start_date: FormControl<Date | null | undefined>,

		/** The job title of the person. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateHrisJobFormGroup() {
		return new FormGroup<HrisJobFormProperties>({
			department: new FormControl<string | null | undefined>(undefined),
			employee_id: new FormControl<string | null | undefined>(undefined),
			employment_status: new FormControl<EmployeeEmployment_status | null | undefined>(undefined),
			end_date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_primary: new FormControl<boolean | null | undefined>(undefined),
			start_date: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HrisJobLocation {
		name?: string | null;
	}
	export interface HrisJobLocationFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateHrisJobLocationFormGroup() {
		return new FormGroup<HrisJobLocationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetHrisJobsResponse {

		/** Required */
		data: HrisJobs;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetHrisJobsResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetHrisJobsResponseFormGroup() {
		return new FormGroup<GetHrisJobsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HrisJobs {
		employee?: Employee;
		jobs?: Array<HrisJob>;
	}
	export interface HrisJobsFormProperties {
	}
	export function CreateHrisJobsFormGroup() {
		return new FormGroup<HrisJobsFormProperties>({
		});

	}

	export interface GetPayrollResponse {

		/** Required */
		data: Payroll;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetPayrollResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetPayrollResponseFormGroup() {
		return new FormGroup<GetPayrollResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Payroll {

		/**
		 * The date on which employees will be paid for the payroll.
		 * Required
		 */
		check_date: string;

		/** The unique identifier of the company. */
		company_id?: string | null;

		/** An array of compensations for the payroll. */
		compensations?: Array<Compensation>;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/**
		 * The end date, inclusive, of the pay period.
		 * Required
		 */
		end_date: string;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/**
		 * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated.
		 * Required
		 */
		processed: boolean;

		/** The date the payroll was processed. */
		processed_date?: string | null;

		/**
		 * The start date, inclusive, of the pay period.
		 * Required
		 */
		start_date: string;
		totals?: PayrollTotals;
	}
	export interface PayrollFormProperties {

		/**
		 * The date on which employees will be paid for the payroll.
		 * Required
		 */
		check_date: FormControl<string | null | undefined>,

		/** The unique identifier of the company. */
		company_id: FormControl<string | null | undefined>,

		/**
		 * The end date, inclusive, of the pay period.
		 * Required
		 */
		end_date: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated.
		 * Required
		 */
		processed: FormControl<boolean | null | undefined>,

		/** The date the payroll was processed. */
		processed_date: FormControl<string | null | undefined>,

		/**
		 * The start date, inclusive, of the pay period.
		 * Required
		 */
		start_date: FormControl<string | null | undefined>,
	}
	export function CreatePayrollFormGroup() {
		return new FormGroup<PayrollFormProperties>({
			check_date: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			company_id: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			processed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			processed_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			start_date: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
		});

	}

	export interface GetPayrollsResponse {

		/** Required */
		data: Array<Payroll>;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetPayrollsResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetPayrollsResponseFormGroup() {
		return new FormGroup<GetPayrollsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTimeOffRequestResponse {

		/** Required */
		data: TimeOffRequest;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetTimeOffRequestResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetTimeOffRequestResponseFormGroup() {
		return new FormGroup<GetTimeOffRequestResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TimeOffRequest {

		/**
		 * The amount of time off requested.
		 * Type: double
		 */
		amount?: number | null;

		/** The date the request was approved */
		approval_date?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Description of the time off request. */
		description?: string | null;

		/** ID of the employee */
		employee_id?: string | null;

		/** The end date of the time off request. */
		end_date?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;
		notes?: TimeOffRequestNotes;

		/** ID of the policy */
		policy_id?: string | null;

		/** The date the request was made. */
		request_date?: string | null;

		/** The type of request */
		request_type?: TimeOffRequestRequest_type | null;

		/** The start date of the time off request. */
		start_date?: string | null;

		/** The status of the time off request. */
		status?: TimeOffRequestStatus | null;

		/** The unit of time off requested. Possible values include: `hours`, `days`, or `other`. */
		units?: TimeOffRequestUnits | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface TimeOffRequestFormProperties {

		/**
		 * The amount of time off requested.
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/** The date the request was approved */
		approval_date: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Description of the time off request. */
		description: FormControl<string | null | undefined>,

		/** ID of the employee */
		employee_id: FormControl<string | null | undefined>,

		/** The end date of the time off request. */
		end_date: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** ID of the policy */
		policy_id: FormControl<string | null | undefined>,

		/** The date the request was made. */
		request_date: FormControl<string | null | undefined>,

		/** The type of request */
		request_type: FormControl<TimeOffRequestRequest_type | null | undefined>,

		/** The start date of the time off request. */
		start_date: FormControl<string | null | undefined>,

		/** The status of the time off request. */
		status: FormControl<TimeOffRequestStatus | null | undefined>,

		/** The unit of time off requested. Possible values include: `hours`, `days`, or `other`. */
		units: FormControl<TimeOffRequestUnits | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateTimeOffRequestFormGroup() {
		return new FormGroup<TimeOffRequestFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			approval_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			employee_id: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			id: new FormControl<string | null | undefined>(undefined),
			policy_id: new FormControl<string | null | undefined>(undefined),
			request_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			request_type: new FormControl<TimeOffRequestRequest_type | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			status: new FormControl<TimeOffRequestStatus | null | undefined>(undefined),
			units: new FormControl<TimeOffRequestUnits | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimeOffRequestNotes {
		employee?: string | null;
		manager?: string | null;
	}
	export interface TimeOffRequestNotesFormProperties {
		employee: FormControl<string | null | undefined>,
		manager: FormControl<string | null | undefined>,
	}
	export function CreateTimeOffRequestNotesFormGroup() {
		return new FormGroup<TimeOffRequestNotesFormProperties>({
			employee: new FormControl<string | null | undefined>(undefined),
			manager: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TimeOffRequestRequest_type { vacation = 'vacation', sick = 'sick', personal = 'personal', jury_duty = 'jury_duty', volunteer = 'volunteer', bereavement = 'bereavement', other = 'other' }

	export enum TimeOffRequestStatus { requested = 'requested', approved = 'approved', declined = 'declined', cancelled = 'cancelled', deleted = 'deleted', other = 'other' }

	export enum TimeOffRequestUnits { days = 'days', hours = 'hours', other = 'other' }

	export interface GetTimeOffRequestsResponse {

		/** Required */
		data: Array<TimeOffRequest>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetTimeOffRequestsResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetTimeOffRequestsResponseFormGroup() {
		return new FormGroup<GetTimeOffRequestsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HrisEventType { '*' = '*', 'hris.employee.created' = 'hris.employee.created', 'hris.employee.updated' = 'hris.employee.updated', 'hris.employee.terminated' = 'hris.employee.terminated', 'hris.employee.deleted' = 'hris.employee.deleted', 'hris.company.created' = 'hris.company.created', 'hris.company.updated' = 'hris.company.updated', 'hris.company.deleted' = 'hris.company.deleted' }

	export interface HrisWebhookEvent extends WebhookEvent {
		event_type?: HrisEventType | null;
	}
	export interface HrisWebhookEventFormProperties extends WebhookEventFormProperties {
		event_type: FormControl<HrisEventType | null | undefined>,
	}
	export function CreateHrisWebhookEventFormGroup() {
		return new FormGroup<HrisWebhookEventFormProperties>({
			consumer_id: new FormControl<string | null | undefined>(undefined),
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<string | null | undefined>(undefined),
			entity_url: new FormControl<string | null | undefined>(undefined),
			event_id: new FormControl<string | null | undefined>(undefined),
			execution_attempt: new FormControl<number | null | undefined>(undefined),
			occurred_at: new FormControl<string | null | undefined>(undefined),
			service_id: new FormControl<string | null | undefined>(undefined),
			unified_api: new FormControl<WebhookEventUnified_api | null | undefined>(undefined),
			event_type: new FormControl<HrisEventType | null | undefined>(undefined),
		});

	}

	export interface NotFoundResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface NotFoundResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateNotFoundResponseFormGroup() {
		return new FormGroup<NotFoundResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotImplementedResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface NotImplementedResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateNotImplementedResponseFormGroup() {
		return new FormGroup<NotImplementedResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PassThroughQuery {

		/** All passthrough query parameters are passed along to the connector as is (?pass_through[search]=leads becomes ?search=leads) */
		example_downstream_property?: string | null;
	}
	export interface PassThroughQueryFormProperties {

		/** All passthrough query parameters are passed along to the connector as is (?pass_through[search]=leads becomes ?search=leads) */
		example_downstream_property: FormControl<string | null | undefined>,
	}
	export function CreatePassThroughQueryFormGroup() {
		return new FormGroup<PassThroughQueryFormProperties>({
			example_downstream_property: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Frequency of employee compensation. */
	export enum PaymentFrequency { weekly = 'weekly', biweekly = 'biweekly', monthly = 'monthly', 'pro-rata' = 'pro-rata', other = 'other' }

	export interface PaymentRequiredResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface PaymentRequiredResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreatePaymentRequiredResponseFormGroup() {
		return new FormGroup<PaymentRequiredResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Unit of measurement for employee compensation. */
	export enum PaymentUnit { hour = 'hour', week = 'week', month = 'month', year = 'year', paycheck = 'paycheck', other = 'other' }

	export interface PayrollsFilter {

		/** Return payrolls whose pay period is before the end date */
		end_date?: string | null;

		/** Return payrolls whose pay period is after the start date */
		start_date?: string | null;
	}
	export interface PayrollsFilterFormProperties {

		/** Return payrolls whose pay period is before the end date */
		end_date: FormControl<string | null | undefined>,

		/** Return payrolls whose pay period is after the start date */
		start_date: FormControl<string | null | undefined>,
	}
	export function CreatePayrollsFilterFormGroup() {
		return new FormGroup<PayrollsFilterFormProperties>({
			end_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			start_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
		});

	}


	/** The direction in which to sort the results */
	export enum SortDirection { asc = 'asc', desc = 'desc' }

	export interface TimeOffRequestsFilter {

		/** Employee ID */
		employee_id?: string | null;

		/** End date */
		end_date?: string | null;

		/** Start date */
		start_date?: string | null;

		/** Time off request status to filter on */
		time_off_request_status?: TimeOffRequestStatus | null;
	}
	export interface TimeOffRequestsFilterFormProperties {

		/** Employee ID */
		employee_id: FormControl<string | null | undefined>,

		/** End date */
		end_date: FormControl<string | null | undefined>,

		/** Start date */
		start_date: FormControl<string | null | undefined>,

		/** Time off request status to filter on */
		time_off_request_status: FormControl<TimeOffRequestStatus | null | undefined>,
	}
	export function CreateTimeOffRequestsFilterFormGroup() {
		return new FormGroup<TimeOffRequestsFilterFormProperties>({
			employee_id: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			start_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			time_off_request_status: new FormControl<TimeOffRequestStatus | null | undefined>(undefined),
		});

	}

	export interface TooManyRequestsResponse {
		detail?: TooManyRequestsResponseDetail;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface TooManyRequestsResponseFormProperties {

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateTooManyRequestsResponseFormGroup() {
		return new FormGroup<TooManyRequestsResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyRequestsResponseDetail {
		context?: string | null;
		error?: string | null;
	}
	export interface TooManyRequestsResponseDetailFormProperties {
		context: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
	}
	export function CreateTooManyRequestsResponseDetailFormGroup() {
		return new FormGroup<TooManyRequestsResponseDetailFormProperties>({
			context: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnauthorizedResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnauthorizedResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnauthorizedResponseFormGroup() {
		return new FormGroup<UnauthorizedResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnexpectedErrorResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnexpectedErrorResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnexpectedErrorResponseFormGroup() {
		return new FormGroup<UnexpectedErrorResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnprocessableResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnprocessableResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessableResponseFormGroup() {
		return new FormGroup<UnprocessableResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDepartmentResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateDepartmentResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDepartmentResponseFormGroup() {
		return new FormGroup<UpdateDepartmentResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEmployeeResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateEmployeeResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEmployeeResponseFormGroup() {
		return new FormGroup<UpdateEmployeeResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateHrisCompanyResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateHrisCompanyResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateHrisCompanyResponseFormGroup() {
		return new FormGroup<UpdateHrisCompanyResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateTimeOffRequestResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateTimeOffRequestResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateTimeOffRequestResponseFormGroup() {
		return new FormGroup<UpdateTimeOffRequestResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookEvent {

		/** Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID. */
		consumer_id?: string | null;

		/** The service provider's ID of the entity that triggered this event */
		entity_id?: string | null;

		/** The type entity that triggered this event */
		entity_type?: string | null;

		/** The url to retrieve entity detail. */
		entity_url?: string | null;

		/** Unique reference to this request event */
		event_id?: string | null;

		/**
		 * The current count this request event has been attempted
		 * Type: double
		 */
		execution_attempt?: number | null;

		/** ISO Datetime for when the original event occurred */
		occurred_at?: string | null;

		/** Service provider identifier */
		service_id?: string | null;

		/** Name of Apideck Unified API */
		unified_api?: WebhookEventUnified_api | null;
	}
	export interface WebhookEventFormProperties {

		/** Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID. */
		consumer_id: FormControl<string | null | undefined>,

		/** The service provider's ID of the entity that triggered this event */
		entity_id: FormControl<string | null | undefined>,

		/** The type entity that triggered this event */
		entity_type: FormControl<string | null | undefined>,

		/** The url to retrieve entity detail. */
		entity_url: FormControl<string | null | undefined>,

		/** Unique reference to this request event */
		event_id: FormControl<string | null | undefined>,

		/**
		 * The current count this request event has been attempted
		 * Type: double
		 */
		execution_attempt: FormControl<number | null | undefined>,

		/** ISO Datetime for when the original event occurred */
		occurred_at: FormControl<string | null | undefined>,

		/** Service provider identifier */
		service_id: FormControl<string | null | undefined>,

		/** Name of Apideck Unified API */
		unified_api: FormControl<WebhookEventUnified_api | null | undefined>,
	}
	export function CreateWebhookEventFormGroup() {
		return new FormGroup<WebhookEventFormProperties>({
			consumer_id: new FormControl<string | null | undefined>(undefined),
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<string | null | undefined>(undefined),
			entity_url: new FormControl<string | null | undefined>(undefined),
			event_id: new FormControl<string | null | undefined>(undefined),
			execution_attempt: new FormControl<number | null | undefined>(undefined),
			occurred_at: new FormControl<string | null | undefined>(undefined),
			service_id: new FormControl<string | null | undefined>(undefined),
			unified_api: new FormControl<WebhookEventUnified_api | null | undefined>(undefined),
		});

	}

	export enum WebhookEventUnified_api { accounting = 'accounting', ats = 'ats', calendar = 'calendar', crm = 'crm', csp = 'csp', 'customer-support' = 'customer-support', ecommerce = 'ecommerce', email = 'email', 'email-marketing' = 'email-marketing', 'expense-management' = 'expense-management', 'file-storage' = 'file-storage', form = 'form', hris = 'hris', lead = 'lead', payroll = 'payroll', pos = 'pos', procurement = 'procurement', 'project-management' = 'project-management', script = 'script', sms = 'sms', spreadsheet = 'spreadsheet', 'team-messaging' = 'team-messaging', 'issue-tracking' = 'issue-tracking', 'time-registration' = 'time-registration', 'transactional-email' = 'transactional-email', vault = 'vault', 'data-warehouse' = 'data-warehouse' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Companies
		 * List Companies
		 * Get hris/companies
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetHrisCompaniesResponse} Companies
		 */
		CompaniesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetHrisCompaniesResponse> {
			return this.http.get<GetHrisCompaniesResponse>(this.baseUri + 'hris/companies?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Company
		 * Create Company
		 * Post hris/companies
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		CompaniesAdd(raw: boolean | null | undefined, requestBody: HrisCompany): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'hris/companies?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Company
		 * Delete Company
		 * Delete hris/companies/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteHrisCompanyResponse} Companies
		 */
		CompaniesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteHrisCompanyResponse> {
			return this.http.delete<DeleteHrisCompanyResponse>(this.baseUri + 'hris/companies/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Company
		 * Get Company
		 * Get hris/companies/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetHrisCompanyResponse} Company
		 */
		CompaniesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetHrisCompanyResponse> {
			return this.http.get<GetHrisCompanyResponse>(this.baseUri + 'hris/companies/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Company
		 * Update Company
		 * Patch hris/companies/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateHrisCompanyResponse} Companies
		 */
		CompaniesUpdate(id: string, raw: boolean | null | undefined, requestBody: HrisCompany): Observable<UpdateHrisCompanyResponse> {
			return this.http.patch<UpdateHrisCompanyResponse>(this.baseUri + 'hris/companies/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Departments
		 * List Departments
		 * Get hris/departments
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetDepartmentsResponse} Departments
		 */
		DepartmentsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetDepartmentsResponse> {
			return this.http.get<GetDepartmentsResponse>(this.baseUri + 'hris/departments?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Department
		 * Create Department
		 * Post hris/departments
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		DepartmentsAdd(raw: boolean | null | undefined, requestBody: Department): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'hris/departments?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Department
		 * Delete Department
		 * Delete hris/departments/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteDepartmentResponse} Departments
		 */
		DepartmentsDelete(id: string, raw: boolean | null | undefined): Observable<DeleteDepartmentResponse> {
			return this.http.delete<DeleteDepartmentResponse>(this.baseUri + 'hris/departments/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Department
		 * Get Department
		 * Get hris/departments/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetDepartmentResponse} Departments
		 */
		DepartmentsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetDepartmentResponse> {
			return this.http.get<GetDepartmentResponse>(this.baseUri + 'hris/departments/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Department
		 * Update Department
		 * Patch hris/departments/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateDepartmentResponse} Departments
		 */
		DepartmentsUpdate(id: string, raw: boolean | null | undefined, requestBody: Department): Observable<UpdateDepartmentResponse> {
			return this.http.patch<UpdateDepartmentResponse>(this.baseUri + 'hris/departments/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Employees
		 * Apideck operates as a stateless Unified API, which means that the list endpoint only provides a portion of the employee model. This is due to the fact that most HRIS systems do not readily provide all data in every call. However, you can access the complete employee model through an employee detail call.
		 * Get hris/employees
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {EmployeesFilter} filter Apply filters
		 * @param {EmployeesSort} sort Apply sorting
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetEmployeesResponse} Employees
		 */
		EmployeesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: EmployeesFilter | null | undefined, sort: EmployeesSort | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetEmployeesResponse> {
			return this.http.get<GetEmployeesResponse>(this.baseUri + 'hris/employees?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&sort=' + sort + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Employee
		 * Create Employee
		 * Post hris/employees
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		EmployeesAdd(raw: boolean | null | undefined, requestBody: Employee): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'hris/employees?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Employee
		 * Delete Employee
		 * Delete hris/employees/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteEmployeeResponse} Employees
		 */
		EmployeesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteEmployeeResponse> {
			return this.http.delete<DeleteEmployeeResponse>(this.baseUri + 'hris/employees/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Employee
		 * Get Employee
		 * Get hris/employees/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetEmployeeResponse} Employees
		 */
		EmployeesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetEmployeeResponse> {
			return this.http.get<GetEmployeeResponse>(this.baseUri + 'hris/employees/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Employee
		 * Update Employee
		 * Patch hris/employees/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateEmployeeResponse} Employees
		 */
		EmployeesUpdate(id: string, raw: boolean | null | undefined, requestBody: Employee): Observable<UpdateEmployeeResponse> {
			return this.http.patch<UpdateEmployeeResponse>(this.baseUri + 'hris/employees/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Payroll
		 * List Payroll
		 * Get hris/payrolls
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {PayrollsFilter} filter Apply filters
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetPayrollsResponse} Payrolls
		 */
		PayrollsAll(raw: boolean | null | undefined, filter: PayrollsFilter | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetPayrollsResponse> {
			return this.http.get<GetPayrollsResponse>(this.baseUri + 'hris/payrolls?raw=' + raw + '&filter=' + filter + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * List Employee Payrolls
		 * List payrolls for employee
		 * Get hris/payrolls/employees/{employee_id}
		 * @param {string} employee_id ID of the employee you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {PayrollsFilter} filter Apply filters
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetEmployeePayrollsResponse} EmployeePayrolls
		 */
		EmployeePayrollsAll(employee_id: string, raw: boolean | null | undefined, filter: PayrollsFilter | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetEmployeePayrollsResponse> {
			return this.http.get<GetEmployeePayrollsResponse>(this.baseUri + 'hris/payrolls/employees/' + (employee_id == null ? '' : encodeURIComponent(employee_id)) + '&raw=' + raw + '&filter=' + filter + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Get Employee Payroll
		 * Get payroll for employee
		 * Get hris/payrolls/employees/{employee_id}/payrolls/{payroll_id}
		 * @param {string} payroll_id ID of the payroll you are acting upon.
		 * @param {string} employee_id ID of the employee you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetEmployeePayrollResponse} Payrolls
		 */
		EmployeePayrollsOne(payroll_id: string, employee_id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetEmployeePayrollResponse> {
			return this.http.get<GetEmployeePayrollResponse>(this.baseUri + 'hris/payrolls/employees/' + (employee_id == null ? '' : encodeURIComponent(employee_id)) + '/payrolls/' + (payroll_id == null ? '' : encodeURIComponent(payroll_id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Get Payroll
		 * Get Payroll
		 * Get hris/payrolls/{payroll_id}
		 * @param {string} payroll_id ID of the payroll you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetPayrollResponse} Payrolls
		 */
		PayrollsOne(payroll_id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetPayrollResponse> {
			return this.http.get<GetPayrollResponse>(this.baseUri + 'hris/payrolls/' + (payroll_id == null ? '' : encodeURIComponent(payroll_id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * List Employee Schedules
		 * List schedules for employee, a schedule is a work pattern, not the actual worked hours, for an employee.
		 * Get hris/schedules/employees/{employee_id}
		 * @param {string} employee_id ID of the employee you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetEmployeeSchedulesResponse} EmployeeSchedules
		 */
		EmployeeSchedulesAll(employee_id: string, raw: boolean | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetEmployeeSchedulesResponse> {
			return this.http.get<GetEmployeeSchedulesResponse>(this.baseUri + 'hris/schedules/employees/' + (employee_id == null ? '' : encodeURIComponent(employee_id)) + '&raw=' + raw + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * List Time Off Requests
		 * List Time Off Requests
		 * Get hris/time-off-requests
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {TimeOffRequestsFilter} filter Apply filters
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetTimeOffRequestsResponse} TimeOffRequests
		 */
		TimeOffRequestsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: TimeOffRequestsFilter | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetTimeOffRequestsResponse> {
			return this.http.get<GetTimeOffRequestsResponse>(this.baseUri + 'hris/time-off-requests?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Time Off Request
		 * Create Time Off Request
		 * Post hris/time-off-requests
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		TimeOffRequestsAdd(raw: boolean | null | undefined, requestBody: TimeOffRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'hris/time-off-requests?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Time Off Request
		 * Delete Time Off Request
		 * Delete hris/time-off-requests/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteTimeOffRequestResponse} TimeOffRequests
		 */
		TimeOffRequestsDelete(id: string, raw: boolean | null | undefined): Observable<DeleteTimeOffRequestResponse> {
			return this.http.delete<DeleteTimeOffRequestResponse>(this.baseUri + 'hris/time-off-requests/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Time Off Request
		 * Get Time Off Request
		 * Get hris/time-off-requests/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetTimeOffRequestResponse} TimeOffRequests
		 */
		TimeOffRequestsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetTimeOffRequestResponse> {
			return this.http.get<GetTimeOffRequestResponse>(this.baseUri + 'hris/time-off-requests/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Time Off Request
		 * Update Time Off Request
		 * Patch hris/time-off-requests/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateTimeOffRequestResponse} TimeOffRequests
		 */
		TimeOffRequestsUpdate(id: string, raw: boolean | null | undefined, requestBody: TimeOffRequest): Observable<UpdateTimeOffRequestResponse> {
			return this.http.patch<UpdateTimeOffRequestResponse>(this.baseUri + 'hris/time-off-requests/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

