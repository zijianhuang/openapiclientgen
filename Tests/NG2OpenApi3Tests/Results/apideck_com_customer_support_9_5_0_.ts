import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address {

		/** Name of city. */
		city?: string | null;
		contact_name?: string | null;

		/** country code according to ISO 3166-1 alpha-2. */
		country?: string | null;

		/** Address field that holds a sublocality, such as a county */
		county?: string | null;
		email?: string | null;
		fax?: string | null;
		id?: string | null;
		latitude?: string | null;

		/** Line 1 of the address e.g. number, street, suite, apt #, etc. */
		line1?: string | null;

		/** Line 2 of the address */
		line2?: string | null;

		/** Line 3 of the address */
		line3?: string | null;

		/** Line 4 of the address */
		line4?: string | null;
		longitude?: string | null;
		name?: string | null;
		phone_number?: string | null;

		/** Zip code or equivalent. */
		postal_code?: string | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;
		salutation?: string | null;

		/** Name of state */
		state?: string | null;

		/** Street number */
		street_number?: string | null;
		string?: string | null;
		type?: AddressType | null;
		website?: string | null;
	}
	export interface AddressFormProperties {

		/** Name of city. */
		city: FormControl<string | null | undefined>,
		contact_name: FormControl<string | null | undefined>,

		/** country code according to ISO 3166-1 alpha-2. */
		country: FormControl<string | null | undefined>,

		/** Address field that holds a sublocality, such as a county */
		county: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		latitude: FormControl<string | null | undefined>,

		/** Line 1 of the address e.g. number, street, suite, apt #, etc. */
		line1: FormControl<string | null | undefined>,

		/** Line 2 of the address */
		line2: FormControl<string | null | undefined>,

		/** Line 3 of the address */
		line3: FormControl<string | null | undefined>,

		/** Line 4 of the address */
		line4: FormControl<string | null | undefined>,
		longitude: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,

		/** Zip code or equivalent. */
		postal_code: FormControl<string | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,
		salutation: FormControl<string | null | undefined>,

		/** Name of state */
		state: FormControl<string | null | undefined>,

		/** Street number */
		street_number: FormControl<string | null | undefined>,
		string: FormControl<string | null | undefined>,
		type: FormControl<AddressType | null | undefined>,
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

	export enum AddressType { primary = 0, secondary = 1, home = 2, office = 3, shipping = 4, billing = 5, other = 6 }

	export interface BadRequestResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
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

		/** HTTP status code */
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
		bic?: string | null;

		/** A branch identifier is a unique identifier for a branch of a bank or financial institution. */
		branch_identifier?: string | null;

		/** A BSB is a 6 digit numeric code used for identifying the branch of an Australian or New Zealand bank or financial institution. */
		bsb_number?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;
		iban?: string | null;
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
		bic: FormControl<string | null | undefined>,

		/** A branch identifier is a unique identifier for a branch of a bank or financial institution. */
		branch_identifier: FormControl<string | null | undefined>,

		/** A BSB is a 6 digit numeric code used for identifying the branch of an Australian or New Zealand bank or financial institution. */
		bsb_number: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,
		iban: FormControl<string | null | undefined>,
	}
	export function CreateBankAccountFormGroup() {
		return new FormGroup<BankAccountFormProperties>({
			account_name: new FormControl<string | null | undefined>(undefined),
			account_number: new FormControl<string | null | undefined>(undefined),
			account_type: new FormControl<BankAccountAccount_type | null | undefined>(undefined),
			bank_code: new FormControl<string | null | undefined>(undefined),
			bic: new FormControl<string | null | undefined>(undefined),
			branch_identifier: new FormControl<string | null | undefined>(undefined),
			bsb_number: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			iban: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BankAccountAccount_type { bank_account = 0, credit_card = 1, other = 2 }

	export enum BankAccountCurrency { UNKNOWN_CURRENCY = 0, AED = 1, AFN = 2, ALL = 3, AMD = 4, ANG = 5, AOA = 6, ARS = 7, AUD = 8, AWG = 9, AZN = 10, BAM = 11, BBD = 12, BDT = 13, BGN = 14, BHD = 15, BIF = 16, BMD = 17, BND = 18, BOB = 19, BOV = 20, BRL = 21, BSD = 22, BTN = 23, BWP = 24, BYR = 25, BZD = 26, CAD = 27, CDF = 28, CHE = 29, CHF = 30, CHW = 31, CLF = 32, CLP = 33, CNY = 34, COP = 35, COU = 36, CRC = 37, CUC = 38, CUP = 39, CVE = 40, CZK = 41, DJF = 42, DKK = 43, DOP = 44, DZD = 45, EGP = 46, ERN = 47, ETB = 48, EUR = 49, FJD = 50, FKP = 51, GBP = 52, GEL = 53, GHS = 54, GIP = 55, GMD = 56, GNF = 57, GTQ = 58, GYD = 59, HKD = 60, HNL = 61, HRK = 62, HTG = 63, HUF = 64, IDR = 65, ILS = 66, INR = 67, IQD = 68, IRR = 69, ISK = 70, JMD = 71, JOD = 72, JPY = 73, KES = 74, KGS = 75, KHR = 76, KMF = 77, KPW = 78, KRW = 79, KWD = 80, KYD = 81, KZT = 82, LAK = 83, LBP = 84, LKR = 85, LRD = 86, LSL = 87, LTL = 88, LVL = 89, LYD = 90, MAD = 91, MDL = 92, MGA = 93, MKD = 94, MMK = 95, MNT = 96, MOP = 97, MRO = 98, MUR = 99, MVR = 100, MWK = 101, MXN = 102, MXV = 103, MYR = 104, MZN = 105, NAD = 106, NGN = 107, NIO = 108, NOK = 109, NPR = 110, NZD = 111, OMR = 112, PAB = 113, PEN = 114, PGK = 115, PHP = 116, PKR = 117, PLN = 118, PYG = 119, QAR = 120, RON = 121, RSD = 122, RUB = 123, RWF = 124, SAR = 125, SBD = 126, SCR = 127, SDG = 128, SEK = 129, SGD = 130, SHP = 131, SLL = 132, SOS = 133, SRD = 134, SSP = 135, STD = 136, SVC = 137, SYP = 138, SZL = 139, THB = 140, TJS = 141, TMT = 142, TND = 143, TOP = 144, TRC = 145, TRY = 146, TTD = 147, TWD = 148, TZS = 149, UAH = 150, UGX = 151, USD = 152, USN = 153, USS = 154, UYI = 155, UYU = 156, UZS = 157, VEF = 158, VND = 159, VUV = 160, WST = 161, XAF = 162, XAG = 163, XAU = 164, XBA = 165, XBB = 166, XBC = 167, XBD = 168, XCD = 169, XDR = 170, XOF = 171, XPD = 172, XPF = 173, XPT = 174, XTS = 175, XXX = 176, YER = 177, ZAR = 178, ZMK = 179, ZMW = 180, BTC = 181, ETH = 182 }

	export interface Company {

		/** An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity. */
		abn_branch?: string | null;

		/** An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia. */
		abn_or_tfn?: string | null;

		/** The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank. */
		acn?: string | null;
		addresses?: Array<Address>;

		/** Annual revenue */
		annual_revenue?: string | null;
		bank_accounts?: Array<BankAccount>;

		/** The date of birth of the person. */
		birthday?: Date | null;
		created_at?: Date | null;
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;
		custom_fields?: Array<CustomField>;
		deleted?: boolean | null;
		description?: string | null;
		emails?: Array<Email>;
		fax?: string | null;

		/** The first name of the person. */
		first_name?: string | null;
		id?: string | null;
		image?: string | null;

		/** Industry */
		industry?: string | null;
		interaction_count?: number | null;
		last_activity_at?: Date | null;

		/** The last name of the person. */
		last_name?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** Number of employees */
		number_of_employees?: string | null;
		owner_id?: string | null;

		/** Ownership */
		ownership?: string | null;

		/** Parent ID */
		parent_id?: string | null;
		payee_number?: string | null;
		phone_numbers?: Array<PhoneNumber>;
		read_only?: boolean | null;
		row_type?: CompanyRow_type;
		sales_tax_number?: string | null;

		/** A formal salutation for the person. For example, 'Mr', 'Mrs' */
		salutation?: string | null;
		social_links?: Array<SocialLink>;
		status?: string | null;
		tags?: Array<string>;
		updated_at?: Date | null;
		updated_by?: string | null;

		/** VAT number */
		vat_number?: string | null;
		websites?: Array<Website>;
	}
	export interface CompanyFormProperties {

		/** An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity. */
		abn_branch: FormControl<string | null | undefined>,

		/** An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia. */
		abn_or_tfn: FormControl<string | null | undefined>,

		/** The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank. */
		acn: FormControl<string | null | undefined>,

		/** Annual revenue */
		annual_revenue: FormControl<string | null | undefined>,

		/** The date of birth of the person. */
		birthday: FormControl<Date | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,

		/** The first name of the person. */
		first_name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,

		/** Industry */
		industry: FormControl<string | null | undefined>,
		interaction_count: FormControl<number | null | undefined>,
		last_activity_at: FormControl<Date | null | undefined>,

		/** The last name of the person. */
		last_name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Number of employees */
		number_of_employees: FormControl<string | null | undefined>,
		owner_id: FormControl<string | null | undefined>,

		/** Ownership */
		ownership: FormControl<string | null | undefined>,

		/** Parent ID */
		parent_id: FormControl<string | null | undefined>,
		payee_number: FormControl<string | null | undefined>,
		read_only: FormControl<boolean | null | undefined>,
		sales_tax_number: FormControl<string | null | undefined>,

		/** A formal salutation for the person. For example, 'Mr', 'Mrs' */
		salutation: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
		updated_by: FormControl<string | null | undefined>,

		/** VAT number */
		vat_number: FormControl<string | null | undefined>,
	}
	export function CreateCompanyFormGroup() {
		return new FormGroup<CompanyFormProperties>({
			abn_branch: new FormControl<string | null | undefined>(undefined),
			abn_or_tfn: new FormControl<string | null | undefined>(undefined),
			acn: new FormControl<string | null | undefined>(undefined),
			annual_revenue: new FormControl<string | null | undefined>(undefined),
			birthday: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			industry: new FormControl<string | null | undefined>(undefined),
			interaction_count: new FormControl<number | null | undefined>(undefined),
			last_activity_at: new FormControl<Date | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			number_of_employees: new FormControl<string | null | undefined>(undefined),
			owner_id: new FormControl<string | null | undefined>(undefined),
			ownership: new FormControl<string | null | undefined>(undefined),
			parent_id: new FormControl<string | null | undefined>(undefined),
			payee_number: new FormControl<string | null | undefined>(undefined),
			read_only: new FormControl<boolean | null | undefined>(undefined),
			sales_tax_number: new FormControl<string | null | undefined>(undefined),
			salutation: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			vat_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomField {

		/** More information about the custom field */
		description?: string | null;

		/** Required */
		id: string;

		/** Name of the custom field. */
		name?: string | null;
		value?: string;
	}
	export interface CustomFieldFormProperties {

		/** More information about the custom field */
		description: FormControl<string | null | undefined>,

		/** Required */
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

	export interface Email {

		/**
		 * Required
		 * Min length: 1
		 */
		email: string;
		id?: string | null;
		type?: EmailType | null;
	}
	export interface EmailFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		email: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		type: FormControl<EmailType | null | undefined>,
	}
	export function CreateEmailFormGroup() {
		return new FormGroup<EmailFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EmailType | null | undefined>(undefined),
		});

	}

	export enum EmailType { primary = 0, secondary = 1, work = 2, personal = 3, billing = 4, other = 5 }

	export interface PhoneNumber {
		area_code?: string | null;
		country_code?: string | null;
		extension?: string | null;
		id?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		number: string;
		type?: PhoneNumberType | null;
	}
	export interface PhoneNumberFormProperties {
		area_code: FormControl<string | null | undefined>,
		country_code: FormControl<string | null | undefined>,
		extension: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		number: FormControl<string | null | undefined>,
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

	export enum PhoneNumberType { primary = 0, secondary = 1, home = 2, work = 3, office = 4, mobile = 5, assistant = 6, fax = 7, 'direct-dial-in' = 8, personal = 9, other = 10 }

	export interface CompanyRow_type {
		id?: string | null;
		name?: string | null;
	}
	export interface CompanyRow_typeFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCompanyRow_typeFormGroup() {
		return new FormGroup<CompanyRow_typeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SocialLink {
		id?: string | null;
		type?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		url: string;
	}
	export interface SocialLinkFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,

		/**
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

	export interface Website {
		id?: string | null;
		type?: WebsiteType | null;

		/**
		 * Required
		 * Min length: 1
		 */
		url: string;
	}
	export interface WebsiteFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<WebsiteType | null | undefined>,

		/**
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

	export enum WebsiteType { primary = 0, secondary = 1, work = 2, personal = 3, other = 4 }

	export interface Contact {
		active?: boolean | null;
		addresses?: Array<Address>;
		birthday?: string | null;
		company_id?: string | null;
		company_name?: string | null;
		created_at?: Date | null;
		current_balance?: number | null;
		custom_fields?: Array<CustomField>;
		department?: string | null;
		description?: string | null;
		email_domain?: string | null;
		emails?: Array<Email>;
		fax?: string | null;
		first_call_at?: Date | null;
		first_email_at?: Date | null;
		first_name?: string | null;
		gender?: ContactGender | null;
		id?: string | null;
		image?: string | null;

		/** language code according to ISO 639-1. For the United States - EN */
		language?: string | null;
		last_activity_at?: Date | null;
		last_name?: string | null;
		lead_id?: string | null;
		lead_source?: string | null;
		middle_name?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		owner_id?: string | null;
		phone_numbers?: Array<PhoneNumber>;

		/** The URL of the photo of a person. */
		photo_url?: string | null;
		prefix?: string | null;
		social_links?: Array<SocialLink>;
		status?: string | null;
		suffix?: string | null;
		tags?: Array<string>;
		title?: string | null;
		type?: ContactType | null;
		updated_at?: Date | null;
		websites?: Array<Website>;
	}
	export interface ContactFormProperties {
		active: FormControl<boolean | null | undefined>,
		birthday: FormControl<string | null | undefined>,
		company_id: FormControl<string | null | undefined>,
		company_name: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		current_balance: FormControl<number | null | undefined>,
		department: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		email_domain: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		first_call_at: FormControl<Date | null | undefined>,
		first_email_at: FormControl<Date | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		gender: FormControl<ContactGender | null | undefined>,
		id: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,

		/** language code according to ISO 639-1. For the United States - EN */
		language: FormControl<string | null | undefined>,
		last_activity_at: FormControl<Date | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		lead_id: FormControl<string | null | undefined>,
		lead_source: FormControl<string | null | undefined>,
		middle_name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		owner_id: FormControl<string | null | undefined>,

		/** The URL of the photo of a person. */
		photo_url: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		suffix: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<ContactType | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			birthday: new FormControl<string | null | undefined>(undefined),
			company_id: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			current_balance: new FormControl<number | null | undefined>(undefined),
			department: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			email_domain: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			first_call_at: new FormControl<Date | null | undefined>(undefined),
			first_email_at: new FormControl<Date | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<ContactGender | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			last_activity_at: new FormControl<Date | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			lead_id: new FormControl<string | null | undefined>(undefined),
			lead_source: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			owner_id: new FormControl<string | null | undefined>(undefined),
			photo_url: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ContactType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ContactGender { male = 0, female = 1, unisex = 2 }

	export enum ContactType { customer = 0, supplier = 1, employee = 2, personal = 3 }

	export interface CreateCustomerSupportCustomerResponse {

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
		 */
		status_code: number;
	}
	export interface CreateCustomerSupportCustomerResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateCustomerSupportCustomerResponseFormGroup() {
		return new FormGroup<CreateCustomerSupportCustomerResponseFormProperties>({
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


	/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
	export enum Currency { UNKNOWN_CURRENCY = 0, AED = 1, AFN = 2, ALL = 3, AMD = 4, ANG = 5, AOA = 6, ARS = 7, AUD = 8, AWG = 9, AZN = 10, BAM = 11, BBD = 12, BDT = 13, BGN = 14, BHD = 15, BIF = 16, BMD = 17, BND = 18, BOB = 19, BOV = 20, BRL = 21, BSD = 22, BTN = 23, BWP = 24, BYR = 25, BZD = 26, CAD = 27, CDF = 28, CHE = 29, CHF = 30, CHW = 31, CLF = 32, CLP = 33, CNY = 34, COP = 35, COU = 36, CRC = 37, CUC = 38, CUP = 39, CVE = 40, CZK = 41, DJF = 42, DKK = 43, DOP = 44, DZD = 45, EGP = 46, ERN = 47, ETB = 48, EUR = 49, FJD = 50, FKP = 51, GBP = 52, GEL = 53, GHS = 54, GIP = 55, GMD = 56, GNF = 57, GTQ = 58, GYD = 59, HKD = 60, HNL = 61, HRK = 62, HTG = 63, HUF = 64, IDR = 65, ILS = 66, INR = 67, IQD = 68, IRR = 69, ISK = 70, JMD = 71, JOD = 72, JPY = 73, KES = 74, KGS = 75, KHR = 76, KMF = 77, KPW = 78, KRW = 79, KWD = 80, KYD = 81, KZT = 82, LAK = 83, LBP = 84, LKR = 85, LRD = 86, LSL = 87, LTL = 88, LVL = 89, LYD = 90, MAD = 91, MDL = 92, MGA = 93, MKD = 94, MMK = 95, MNT = 96, MOP = 97, MRO = 98, MUR = 99, MVR = 100, MWK = 101, MXN = 102, MXV = 103, MYR = 104, MZN = 105, NAD = 106, NGN = 107, NIO = 108, NOK = 109, NPR = 110, NZD = 111, OMR = 112, PAB = 113, PEN = 114, PGK = 115, PHP = 116, PKR = 117, PLN = 118, PYG = 119, QAR = 120, RON = 121, RSD = 122, RUB = 123, RWF = 124, SAR = 125, SBD = 126, SCR = 127, SDG = 128, SEK = 129, SGD = 130, SHP = 131, SLL = 132, SOS = 133, SRD = 134, SSP = 135, STD = 136, SVC = 137, SYP = 138, SZL = 139, THB = 140, TJS = 141, TMT = 142, TND = 143, TOP = 144, TRC = 145, TRY = 146, TTD = 147, TWD = 148, TZS = 149, UAH = 150, UGX = 151, USD = 152, USN = 153, USS = 154, UYI = 155, UYU = 156, UZS = 157, VEF = 158, VND = 159, VUV = 160, WST = 161, XAF = 162, XAG = 163, XAU = 164, XBA = 165, XBB = 166, XBC = 167, XBD = 168, XCD = 169, XDR = 170, XOF = 171, XPD = 172, XPF = 173, XPT = 174, XTS = 175, XXX = 176, YER = 177, ZAR = 178, ZMK = 179, ZMW = 180, BTC = 181, ETH = 182 }

	export interface CustomerSupportCustomer {
		addresses?: Array<Address>;
		bank_accounts?: BankAccount;

		/** The name of the company. */
		company_name?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;
		emails?: Array<Email>;

		/** The first name of the person. */
		first_name?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;
		individual?: boolean | null;

		/** The last name of the person. */
		last_name?: string | null;
		notes?: string | null;
		phone_numbers?: Array<PhoneNumber>;

		/** Customer status */
		status?: CustomerSupportCustomerStatus | null;
		tax_number?: string | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface CustomerSupportCustomerFormProperties {

		/** The name of the company. */
		company_name: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** The first name of the person. */
		first_name: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,
		individual: FormControl<boolean | null | undefined>,

		/** The last name of the person. */
		last_name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,

		/** Customer status */
		status: FormControl<CustomerSupportCustomerStatus | null | undefined>,
		tax_number: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateCustomerSupportCustomerFormGroup() {
		return new FormGroup<CustomerSupportCustomerFormProperties>({
			company_name: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			individual: new FormControl<boolean | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CustomerSupportCustomerStatus | null | undefined>(undefined),
			tax_number: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomerSupportCustomerStatus { active = 0, archived = 1, 'gdpr-erasure-request' = 2, unknown = 3 }

	export interface DeleteCustomerSupportCustomerResponse {

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
		 */
		status_code: number;
	}
	export interface DeleteCustomerSupportCustomerResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteCustomerSupportCustomerResponseFormGroup() {
		return new FormGroup<DeleteCustomerSupportCustomerResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCustomerSupportCustomerResponse {

		/** Required */
		data: CustomerSupportCustomer;

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
		 */
		status_code: number;
	}
	export interface GetCustomerSupportCustomerResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetCustomerSupportCustomerResponseFormGroup() {
		return new FormGroup<GetCustomerSupportCustomerResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCustomerSupportCustomersResponse {

		/** Required */
		data: Array<CustomerSupportCustomer>;

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
		 */
		status_code: number;
	}
	export interface GetCustomerSupportCustomersResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetCustomerSupportCustomersResponseFormGroup() {
		return new FormGroup<GetCustomerSupportCustomersResponseFormProperties>({
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

		/** Number of items returned in the data property of the response */
		items_on_page?: number | null;
	}

	/** Response metadata */
	export interface MetaFormProperties {

		/** Number of items returned in the data property of the response */
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

	export interface Lead {
		addresses?: Array<Address>;
		company_id?: string | null;

		/** Required */
		company_name: string;
		contact_id?: string | null;
		created_at?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;
		custom_fields?: Array<CustomField>;
		description?: string | null;
		emails?: Array<Email>;
		fax?: string | null;
		first_name?: string | null;
		id?: string | null;

		/** language code according to ISO 639-1. For the United States - EN */
		language?: string | null;
		last_name?: string | null;
		lead_source?: string | null;
		monetary_amount?: number | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		owner_id?: string | null;
		phone_numbers?: Array<PhoneNumber>;
		prefix?: string | null;
		social_links?: Array<SocialLink>;
		status?: string | null;
		tags?: Array<string>;
		title?: string | null;
		updated_at?: string | null;
		websites?: Array<Website>;
	}
	export interface LeadFormProperties {
		company_id: FormControl<string | null | undefined>,

		/** Required */
		company_name: FormControl<string | null | undefined>,
		contact_id: FormControl<string | null | undefined>,
		created_at: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,
		description: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** language code according to ISO 639-1. For the United States - EN */
		language: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		lead_source: FormControl<string | null | undefined>,
		monetary_amount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		owner_id: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateLeadFormGroup() {
		return new FormGroup<LeadFormProperties>({
			company_id: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contact_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			lead_source: new FormControl<string | null | undefined>(undefined),
			monetary_amount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			owner_id: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

	export interface Opportunity {

		/** The actual closing date for the opportunity. If close_date is null, the opportunity is not closed yet. */
		close_date?: Date | null;

		/** The unique identifier of the company associated with the opportunity. */
		company_id?: string | null;

		/** The name of the company associated with the opportunity. */
		company_name?: string | null;

		/** The unique identifier of the contact associated with the opportunity. */
		contact_id?: string | null;

		/** An array of unique identifiers of all contacts associated with the opportunity. */
		contact_ids?: Array<string>;

		/** The date and time when the opportunity was created. */
		created_at?: Date | null;

		/** The unique identifier of the user who created the opportunity. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;
		custom_fields?: Array<CustomField>;

		/** The date and time when the opportunity was last contacted. */
		date_last_contacted?: Date | null;

		/** The date and time when the lead associated with the opportunity was created. */
		date_lead_created?: Date | null;

		/** The date and time when the stage of the opportunity was last changed. */
		date_stage_changed?: Date | null;

		/** Indicates whether the opportunity has been deleted. */
		deleted?: boolean | null;

		/** A description of the opportunity. */
		description?: string | null;

		/** The expected revenue from the opportunity */
		expected_revenue?: number | null;

		/** A unique identifier for the opportunity. */
		id?: string | null;

		/** The number of interactions with the opportunity. */
		interaction_count?: number | null;

		/** The date and time of the last activity associated with the opportunity. */
		last_activity_at?: string | null;

		/** The unique identifier of the lead associated with the opportunity. */
		lead_id?: string | null;

		/** The source of the lead associated with the opportunity. */
		lead_source?: string | null;

		/** The reason why the opportunity was lost. */
		loss_reason?: string | null;

		/** The unique identifier of the reason why the opportunity was lost. */
		loss_reason_id?: string | null;

		/** The monetary value associated with the opportunity */
		monetary_amount?: number | null;

		/** The unique identifier of the user who owns the opportunity. */
		owner_id?: string | null;

		/** The unique identifier of the pipeline associated with the opportunity */
		pipeline_id?: string | null;

		/** The unique identifier of the stage in the pipeline associated with the opportunity. */
		pipeline_stage_id?: string | null;

		/**
		 * The unique identifier of the primary contact associated with the opportunity.
		 * Required
		 */
		primary_contact_id: string;

		/** The priority level of the opportunity. */
		priority?: string | null;

		/** The unique identifier of the source of the opportunity. */
		source_id?: string | null;

		/** The date and time when the stage of the opportunity was last changed. */
		stage_last_changed_at?: Date | null;

		/** The current status of the opportunity. */
		status?: string | null;

		/** The unique identifier of the current status of the opportunity. */
		status_id?: string | null;
		tags?: Array<string>;

		/**
		 * The title or name of the opportunity.
		 * Required
		 * Min length: 1
		 */
		title: string;

		/** The type of the opportunity */
		type?: string | null;

		/** The date and time when the opportunity was last updated. */
		updated_at?: Date | null;

		/** The unique identifier of the user who last updated the opportunity. */
		updated_by?: string | null;

		/** The probability of winning the opportunity, expressed as a percentage. */
		win_probability?: number | null;

		/** The reason why the opportunity was won. */
		won_reason?: string | null;

		/** The unique identifier of the reason why the opportunity was won. */
		won_reason_id?: string | null;
	}
	export interface OpportunityFormProperties {

		/** The actual closing date for the opportunity. If close_date is null, the opportunity is not closed yet. */
		close_date: FormControl<Date | null | undefined>,

		/** The unique identifier of the company associated with the opportunity. */
		company_id: FormControl<string | null | undefined>,

		/** The name of the company associated with the opportunity. */
		company_name: FormControl<string | null | undefined>,

		/** The unique identifier of the contact associated with the opportunity. */
		contact_id: FormControl<string | null | undefined>,

		/** The date and time when the opportunity was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The unique identifier of the user who created the opportunity. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** The date and time when the opportunity was last contacted. */
		date_last_contacted: FormControl<Date | null | undefined>,

		/** The date and time when the lead associated with the opportunity was created. */
		date_lead_created: FormControl<Date | null | undefined>,

		/** The date and time when the stage of the opportunity was last changed. */
		date_stage_changed: FormControl<Date | null | undefined>,

		/** Indicates whether the opportunity has been deleted. */
		deleted: FormControl<boolean | null | undefined>,

		/** A description of the opportunity. */
		description: FormControl<string | null | undefined>,

		/** The expected revenue from the opportunity */
		expected_revenue: FormControl<number | null | undefined>,

		/** A unique identifier for the opportunity. */
		id: FormControl<string | null | undefined>,

		/** The number of interactions with the opportunity. */
		interaction_count: FormControl<number | null | undefined>,

		/** The date and time of the last activity associated with the opportunity. */
		last_activity_at: FormControl<string | null | undefined>,

		/** The unique identifier of the lead associated with the opportunity. */
		lead_id: FormControl<string | null | undefined>,

		/** The source of the lead associated with the opportunity. */
		lead_source: FormControl<string | null | undefined>,

		/** The reason why the opportunity was lost. */
		loss_reason: FormControl<string | null | undefined>,

		/** The unique identifier of the reason why the opportunity was lost. */
		loss_reason_id: FormControl<string | null | undefined>,

		/** The monetary value associated with the opportunity */
		monetary_amount: FormControl<number | null | undefined>,

		/** The unique identifier of the user who owns the opportunity. */
		owner_id: FormControl<string | null | undefined>,

		/** The unique identifier of the pipeline associated with the opportunity */
		pipeline_id: FormControl<string | null | undefined>,

		/** The unique identifier of the stage in the pipeline associated with the opportunity. */
		pipeline_stage_id: FormControl<string | null | undefined>,

		/**
		 * The unique identifier of the primary contact associated with the opportunity.
		 * Required
		 */
		primary_contact_id: FormControl<string | null | undefined>,

		/** The priority level of the opportunity. */
		priority: FormControl<string | null | undefined>,

		/** The unique identifier of the source of the opportunity. */
		source_id: FormControl<string | null | undefined>,

		/** The date and time when the stage of the opportunity was last changed. */
		stage_last_changed_at: FormControl<Date | null | undefined>,

		/** The current status of the opportunity. */
		status: FormControl<string | null | undefined>,

		/** The unique identifier of the current status of the opportunity. */
		status_id: FormControl<string | null | undefined>,

		/**
		 * The title or name of the opportunity.
		 * Required
		 * Min length: 1
		 */
		title: FormControl<string | null | undefined>,

		/** The type of the opportunity */
		type: FormControl<string | null | undefined>,

		/** The date and time when the opportunity was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The unique identifier of the user who last updated the opportunity. */
		updated_by: FormControl<string | null | undefined>,

		/** The probability of winning the opportunity, expressed as a percentage. */
		win_probability: FormControl<number | null | undefined>,

		/** The reason why the opportunity was won. */
		won_reason: FormControl<string | null | undefined>,

		/** The unique identifier of the reason why the opportunity was won. */
		won_reason_id: FormControl<string | null | undefined>,
	}
	export function CreateOpportunityFormGroup() {
		return new FormGroup<OpportunityFormProperties>({
			close_date: new FormControl<Date | null | undefined>(undefined),
			company_id: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			contact_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			date_last_contacted: new FormControl<Date | null | undefined>(undefined),
			date_lead_created: new FormControl<Date | null | undefined>(undefined),
			date_stage_changed: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expected_revenue: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			interaction_count: new FormControl<number | null | undefined>(undefined),
			last_activity_at: new FormControl<string | null | undefined>(undefined),
			lead_id: new FormControl<string | null | undefined>(undefined),
			lead_source: new FormControl<string | null | undefined>(undefined),
			loss_reason: new FormControl<string | null | undefined>(undefined),
			loss_reason_id: new FormControl<string | null | undefined>(undefined),
			monetary_amount: new FormControl<number | null | undefined>(undefined),
			owner_id: new FormControl<string | null | undefined>(undefined),
			pipeline_id: new FormControl<string | null | undefined>(undefined),
			pipeline_stage_id: new FormControl<string | null | undefined>(undefined),
			primary_contact_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<string | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined),
			stage_last_changed_at: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			status_id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			win_probability: new FormControl<number | null | undefined>(undefined),
			won_reason: new FormControl<string | null | undefined>(undefined),
			won_reason_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentRequiredResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
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

		/** HTTP status code */
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

	export interface TooManyRequestsResponse {
		detail?: TooManyRequestsResponseDetail;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

	export interface UpdateCustomerSupportCustomerResponse {

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
		 */
		status_code: number;
	}
	export interface UpdateCustomerSupportCustomerResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateCustomerSupportCustomerResponseFormGroup() {
		return new FormGroup<UpdateCustomerSupportCustomerResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Customer Support Customers
		 * List Customer Support Customers
		 * Get customer-support/customers
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetCustomerSupportCustomersResponse} CustomerSupportCustomers
		 */
		CustomersAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, fields: string | null | undefined): Observable<GetCustomerSupportCustomersResponse> {
			return this.http.get<GetCustomerSupportCustomersResponse>(this.baseUri + 'customer-support/customers?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Customer Support Customer
		 * Create Customer Support Customer
		 * Post customer-support/customers
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		CustomersAdd(raw: boolean | null | undefined, requestBody: CustomerSupportCustomer): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'customer-support/customers?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Customer Support Customer
		 * Delete Customer Support Customer
		 * Delete customer-support/customers/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteCustomerSupportCustomerResponse} CustomerSupportCustomers
		 */
		CustomersDelete(id: string, raw: boolean | null | undefined): Observable<DeleteCustomerSupportCustomerResponse> {
			return this.http.delete<DeleteCustomerSupportCustomerResponse>(this.baseUri + 'customer-support/customers/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Customer Support Customer
		 * Get Customer Support Customer
		 * Get customer-support/customers/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetCustomerSupportCustomerResponse} CustomerSupportCustomers
		 */
		CustomersOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetCustomerSupportCustomerResponse> {
			return this.http.get<GetCustomerSupportCustomerResponse>(this.baseUri + 'customer-support/customers/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Customer Support Customer
		 * Update Customer Support Customer
		 * Patch customer-support/customers/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateCustomerSupportCustomerResponse} CustomerSupportCustomers
		 */
		CustomersUpdate(id: string, raw: boolean | null | undefined, requestBody: CustomerSupportCustomer): Observable<UpdateCustomerSupportCustomerResponse> {
			return this.http.patch<UpdateCustomerSupportCustomerResponse>(this.baseUri + 'customer-support/customers/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

