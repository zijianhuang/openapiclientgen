import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccountingCustomer {
		account?: LinkedLedgerAccount;
		addresses?: Array<Address>;
		bank_accounts?: Array<BankAccount>;

		/** The channel through which the transaction is processed. */
		channel?: string | null;

		/** The name of the company. */
		company_name?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Display ID */
		display_id?: string | null;

		/** Display name */
		display_name?: string | null;

		/** The third-party API ID of original entity */
		downstream_id?: string | null;
		emails?: Array<Email>;

		/** The first name of the person. */
		first_name?: string | null;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/** Is this an individual or business customer */
		individual?: boolean | null;

		/** The last name of the person. */
		last_name?: string | null;

		/** Middle name of the person. */
		middle_name?: string | null;

		/** Some notes about this customer */
		notes?: string | null;

		/** The parent customer this entity is linked to. */
		parent?: LinkedParentCustomer;

		/** Payment method used for the transaction, such as cash, credit card, bank transfer, or check */
		payment_method?: string | null;
		phone_numbers?: Array<PhoneNumber>;

		/** If true, indicates this is a Project. */
		project?: boolean | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/** Customer status */
		status?: AccountingCustomerStatus | null;
		suffix?: string | null;
		tax_number?: string | null;
		tax_rate?: LinkedTaxRate;

		/** The job title of the person. */
		title?: string | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
		websites?: Array<Website>;
	}
	export interface AccountingCustomerFormProperties {

		/** The channel through which the transaction is processed. */
		channel: FormControl<string | null | undefined>,

		/** The name of the company. */
		company_name: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** Display ID */
		display_id: FormControl<string | null | undefined>,

		/** Display name */
		display_name: FormControl<string | null | undefined>,

		/** The third-party API ID of original entity */
		downstream_id: FormControl<string | null | undefined>,

		/** The first name of the person. */
		first_name: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Is this an individual or business customer */
		individual: FormControl<boolean | null | undefined>,

		/** The last name of the person. */
		last_name: FormControl<string | null | undefined>,

		/** Middle name of the person. */
		middle_name: FormControl<string | null | undefined>,

		/** Some notes about this customer */
		notes: FormControl<string | null | undefined>,

		/** Payment method used for the transaction, such as cash, credit card, bank transfer, or check */
		payment_method: FormControl<string | null | undefined>,

		/** If true, indicates this is a Project. */
		project: FormControl<boolean | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** Customer status */
		status: FormControl<AccountingCustomerStatus | null | undefined>,
		suffix: FormControl<string | null | undefined>,
		tax_number: FormControl<string | null | undefined>,

		/** The job title of the person. */
		title: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateAccountingCustomerFormGroup() {
		return new FormGroup<AccountingCustomerFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			display_id: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			downstream_id: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			individual: new FormControl<boolean | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			payment_method: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<boolean | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AccountingCustomerStatus | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
			tax_number: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedLedgerAccount {

		/** The code assigned to the account. */
		code?: string | null;

		/** The unique identifier for the account. */
		id?: string | null;

		/** The name of the account. */
		name?: string | null;

		/** The nominal code of the account. */
		nominal_code?: string | null;
	}
	export interface LinkedLedgerAccountFormProperties {

		/** The code assigned to the account. */
		code: FormControl<string | null | undefined>,

		/** The unique identifier for the account. */
		id: FormControl<string | null | undefined>,

		/** The name of the account. */
		name: FormControl<string | null | undefined>,

		/** The nominal code of the account. */
		nominal_code: FormControl<string | null | undefined>,
	}
	export function CreateLinkedLedgerAccountFormGroup() {
		return new FormGroup<LinkedLedgerAccountFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nominal_code: new FormControl<string | null | undefined>(undefined),
		});

	}

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


	/** The parent customer this entity is linked to. */
	export interface LinkedParentCustomer {

		/**
		 * The parent ID of the customer this entity is linked to.
		 * Required
		 */
		id: string;

		/** The name of the parent customer. */
		name?: string | null;
	}

	/** The parent customer this entity is linked to. */
	export interface LinkedParentCustomerFormProperties {

		/**
		 * The parent ID of the customer this entity is linked to.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The name of the parent customer. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLinkedParentCustomerFormGroup() {
		return new FormGroup<LinkedParentCustomerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
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

	export enum AccountingCustomerStatus { active = 'active', inactive = 'inactive', archived = 'archived', 'gdpr-erasure-request' = 'gdpr-erasure-request', unknown = 'unknown' }

	export interface LinkedTaxRate {

		/** Tax rate code */
		code?: string | null;

		/** The ID of the object. */
		id?: string | null;

		/** Name of the tax rate */
		name?: string | null;

		/**
		 * Rate of the tax rate
		 * Type: double
		 */
		rate?: number | null;
	}
	export interface LinkedTaxRateFormProperties {

		/** Tax rate code */
		code: FormControl<string | null | undefined>,

		/** The ID of the object. */
		id: FormControl<string | null | undefined>,

		/** Name of the tax rate */
		name: FormControl<string | null | undefined>,

		/**
		 * Rate of the tax rate
		 * Type: double
		 */
		rate: FormControl<number | null | undefined>,
	}
	export function CreateLinkedTaxRateFormGroup() {
		return new FormGroup<LinkedTaxRateFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
		});

	}

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

	export enum AccountingEventType { '*' = '*', 'accounting.customer.created' = 'accounting.customer.created', 'accounting.customer.updated' = 'accounting.customer.updated', 'accounting.customer.deleted' = 'accounting.customer.deleted', 'accounting.invoice.created' = 'accounting.invoice.created', 'accounting.invoice.updated' = 'accounting.invoice.updated', 'accounting.invoice.deleted' = 'accounting.invoice.deleted', 'accounting.invoice_item.created' = 'accounting.invoice_item.created', 'accounting.invoice_item.updated' = 'accounting.invoice_item.updated', 'accounting.invoice_item.deleted' = 'accounting.invoice_item.deleted', 'accounting.ledger_account.created' = 'accounting.ledger_account.created', 'accounting.ledger_account.updated' = 'accounting.ledger_account.updated', 'accounting.ledger_account.deleted' = 'accounting.ledger_account.deleted', 'accounting.tax_rate.created' = 'accounting.tax_rate.created', 'accounting.tax_rate.updated' = 'accounting.tax_rate.updated', 'accounting.tax_rate.deleted' = 'accounting.tax_rate.deleted', 'accounting.bill.created' = 'accounting.bill.created', 'accounting.bill.updated' = 'accounting.bill.updated', 'accounting.bill.deleted' = 'accounting.bill.deleted', 'accounting.payment.created' = 'accounting.payment.created', 'accounting.payment.updated' = 'accounting.payment.updated', 'accounting.payment.deleted' = 'accounting.payment.deleted', 'accounting.supplier.created' = 'accounting.supplier.created', 'accounting.supplier.updated' = 'accounting.supplier.updated', 'accounting.supplier.deleted' = 'accounting.supplier.deleted', 'accounting.purchase-order.created' = 'accounting.purchase-order.created', 'accounting.purchase-order.updated' = 'accounting.purchase-order.updated', 'accounting.purchase-order.deleted' = 'accounting.purchase-order.deleted' }

	export interface AccountingWebhookEvent {
	}
	export interface AccountingWebhookEventFormProperties {
	}
	export function CreateAccountingWebhookEventFormGroup() {
		return new FormGroup<AccountingWebhookEventFormProperties>({
		});

	}

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

	export interface BalanceSheet {

		/** Required */
		assets: BalanceSheetAssets;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The start date of the report */
		end_date?: string | null;

		/** Required */
		equity: BalanceSheetEquity;

		/** A unique identifier for an object. */
		id?: string | null;

		/** Required */
		liabilities: BalanceSheetLiabilities;

		/**
		 * The name of the report
		 * Required
		 */
		report_name: string;

		/**
		 * The start date of the report
		 * Required
		 */
		start_date: string;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface BalanceSheetFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** The start date of the report */
		end_date: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the report
		 * Required
		 */
		report_name: FormControl<string | null | undefined>,

		/**
		 * The start date of the report
		 * Required
		 */
		start_date: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateBalanceSheetFormGroup() {
		return new FormGroup<BalanceSheetFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			id: new FormControl<string | null | undefined>(undefined),
			report_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start_date: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BalanceSheetAssets {

		/** Required */
		current_assets: BalanceSheetAssetsCurrent_assets;

		/** Required */
		fixed_assets: BalanceSheetAssetsFixed_assets;

		/**
		 * Total assets
		 * Required
		 * Type: double
		 */
		total: number;
	}
	export interface BalanceSheetAssetsFormProperties {

		/**
		 * Total assets
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBalanceSheetAssetsFormGroup() {
		return new FormGroup<BalanceSheetAssetsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BalanceSheetAssetsCurrent_assets {

		/** Required */
		BalanceSheetAssetsCurrent_assetsAccounts: Array<BalanceSheetAssetsCurrent_assetsAccounts>;

		/**
		 * Total current assets
		 * Required
		 * Type: double
		 */
		total: number;
	}
	export interface BalanceSheetAssetsCurrent_assetsFormProperties {

		/**
		 * Total current assets
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBalanceSheetAssetsCurrent_assetsFormGroup() {
		return new FormGroup<BalanceSheetAssetsCurrent_assetsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BalanceSheetAssetsCurrent_assetsAccounts {

		/** A unique identifier for an object. */
		id?: string | null;

		/** The name of the current asset account */
		name?: string | null;

		/**
		 * The value of the current asset
		 * Type: double
		 */
		value?: number | null;
	}
	export interface BalanceSheetAssetsCurrent_assetsAccountsFormProperties {

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** The name of the current asset account */
		name: FormControl<string | null | undefined>,

		/**
		 * The value of the current asset
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateBalanceSheetAssetsCurrent_assetsAccountsFormGroup() {
		return new FormGroup<BalanceSheetAssetsCurrent_assetsAccountsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BalanceSheetAssetsFixed_assets {

		/** Required */
		BalanceSheetAssetsFixed_assetsAccounts: Array<BalanceSheetAssetsFixed_assetsAccounts>;

		/**
		 * Total fixed assets
		 * Required
		 * Type: double
		 */
		total: number;
	}
	export interface BalanceSheetAssetsFixed_assetsFormProperties {

		/**
		 * Total fixed assets
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBalanceSheetAssetsFixed_assetsFormGroup() {
		return new FormGroup<BalanceSheetAssetsFixed_assetsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BalanceSheetAssetsFixed_assetsAccounts {

		/** A unique identifier for an object. */
		id?: string | null;

		/** The name of the fixed asset account */
		name?: string | null;

		/**
		 * The value of the fixed asset
		 * Type: double
		 */
		value?: number | null;
	}
	export interface BalanceSheetAssetsFixed_assetsAccountsFormProperties {

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** The name of the fixed asset account */
		name: FormControl<string | null | undefined>,

		/**
		 * The value of the fixed asset
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateBalanceSheetAssetsFixed_assetsAccountsFormGroup() {
		return new FormGroup<BalanceSheetAssetsFixed_assetsAccountsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BalanceSheetEquity {

		/** Required */
		BalanceSheetEquityItems: Array<BalanceSheetEquityItems>;

		/**
		 * Total equity
		 * Required
		 * Type: double
		 */
		total: number;
	}
	export interface BalanceSheetEquityFormProperties {

		/**
		 * Total equity
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBalanceSheetEquityFormGroup() {
		return new FormGroup<BalanceSheetEquityFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BalanceSheetEquityItems {

		/** A unique identifier for an object. */
		id?: string | null;

		/** The type of the equity */
		name?: string | null;

		/**
		 * The equity amount
		 * Type: double
		 */
		value?: number | null;
	}
	export interface BalanceSheetEquityItemsFormProperties {

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** The type of the equity */
		name: FormControl<string | null | undefined>,

		/**
		 * The equity amount
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateBalanceSheetEquityItemsFormGroup() {
		return new FormGroup<BalanceSheetEquityItemsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BalanceSheetLiabilities {

		/** Required */
		BalanceSheetLiabilitiesAccounts: Array<BalanceSheetLiabilitiesAccounts>;

		/**
		 * Total liabilities
		 * Required
		 * Type: double
		 */
		total: number;
	}
	export interface BalanceSheetLiabilitiesFormProperties {

		/**
		 * Total liabilities
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBalanceSheetLiabilitiesFormGroup() {
		return new FormGroup<BalanceSheetLiabilitiesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BalanceSheetLiabilitiesAccounts {

		/** A unique identifier for an object. */
		id?: string | null;

		/** The name of the liability account */
		name?: string | null;

		/**
		 * The value of the liability
		 * Type: double
		 */
		value?: number | null;
	}
	export interface BalanceSheetLiabilitiesAccountsFormProperties {

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** The name of the liability account */
		name: FormControl<string | null | undefined>,

		/**
		 * The value of the liability
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateBalanceSheetLiabilitiesAccountsFormGroup() {
		return new FormGroup<BalanceSheetLiabilitiesAccountsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BalanceSheetFilter {

		/** Filter by end date. If end date is given, start date is required. */
		end_date?: string | null;

		/** Filter by start date. If start date is given, end date is required. */
		start_date?: string | null;
	}
	export interface BalanceSheetFilterFormProperties {

		/** Filter by end date. If end date is given, start date is required. */
		end_date: FormControl<string | null | undefined>,

		/** Filter by start date. If start date is given, end date is required. */
		start_date: FormControl<string | null | undefined>,
	}
	export function CreateBalanceSheetFilterFormGroup() {
		return new FormGroup<BalanceSheetFilterFormProperties>({
			end_date: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Bill {

		/** Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row. */
		accounting_by_row?: boolean | null;

		/**
		 * Balance of bill due.
		 * Type: double
		 */
		balance?: number | null;
		bank_account?: BankAccount;

		/**
		 * Date bill was issued - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		bill_date?: Date | null;

		/** Reference to supplier bill number */
		bill_number?: string | null;

		/** The channel through which the transaction is processed. */
		channel?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/**
		 * Currency Exchange Rate at the time entity was recorded/generated.
		 * Type: double
		 */
		currency_rate?: number | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/**
		 * Amount of deposit made to this bill.
		 * Type: double
		 */
		deposit?: number | null;

		/**
		 * Discount percentage applied to this transaction.
		 * Type: double
		 */
		discount_percentage?: number | null;

		/** The third-party API ID of original entity */
		downstream_id?: string | null;

		/**
		 * The due date is the date on which a payment is scheduled to be received - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		due_date?: Date | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** language code according to ISO 639-1. For the United States - EN */
		language?: string | null;
		ledger_account?: LinkedLedgerAccount;
		line_items?: Array<BillLineItem>;
		notes?: string | null;

		/**
		 * The paid date is the date on which a payment was sent to the supplier - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		paid_date?: Date | null;

		/** Payment method used for the transaction, such as cash, credit card, bank transfer, or check */
		payment_method?: string | null;

		/** A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. */
		po_number?: string | null;

		/** Optional bill reference. */
		reference?: string | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/** Invoice status */
		status?: BillStatus | null;

		/**
		 * Sub-total amount, normally before tax.
		 * Type: double
		 */
		sub_total?: number | null;

		/** The supplier this entity is linked to. */
		supplier?: LinkedSupplier;

		/** Applicable tax id/code override if tax is not supplied on a line item basis. */
		tax_code?: string | null;

		/** Amounts are including tax */
		tax_inclusive?: boolean | null;

		/** Terms of payment. */
		terms?: string | null;

		/**
		 * Total amount of bill, including tax.
		 * Type: double
		 */
		total?: number | null;

		/**
		 * Total tax amount applied to this bill.
		 * Type: double
		 */
		total_tax?: number | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface BillFormProperties {

		/** Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row. */
		accounting_by_row: FormControl<boolean | null | undefined>,

		/**
		 * Balance of bill due.
		 * Type: double
		 */
		balance: FormControl<number | null | undefined>,

		/**
		 * Date bill was issued - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		bill_date: FormControl<Date | null | undefined>,

		/** Reference to supplier bill number */
		bill_number: FormControl<string | null | undefined>,

		/** The channel through which the transaction is processed. */
		channel: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/**
		 * Currency Exchange Rate at the time entity was recorded/generated.
		 * Type: double
		 */
		currency_rate: FormControl<number | null | undefined>,

		/**
		 * Amount of deposit made to this bill.
		 * Type: double
		 */
		deposit: FormControl<number | null | undefined>,

		/**
		 * Discount percentage applied to this transaction.
		 * Type: double
		 */
		discount_percentage: FormControl<number | null | undefined>,

		/** The third-party API ID of original entity */
		downstream_id: FormControl<string | null | undefined>,

		/**
		 * The due date is the date on which a payment is scheduled to be received - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		due_date: FormControl<Date | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** language code according to ISO 639-1. For the United States - EN */
		language: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,

		/**
		 * The paid date is the date on which a payment was sent to the supplier - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		paid_date: FormControl<Date | null | undefined>,

		/** Payment method used for the transaction, such as cash, credit card, bank transfer, or check */
		payment_method: FormControl<string | null | undefined>,

		/** A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. */
		po_number: FormControl<string | null | undefined>,

		/** Optional bill reference. */
		reference: FormControl<string | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** Invoice status */
		status: FormControl<BillStatus | null | undefined>,

		/**
		 * Sub-total amount, normally before tax.
		 * Type: double
		 */
		sub_total: FormControl<number | null | undefined>,

		/** Applicable tax id/code override if tax is not supplied on a line item basis. */
		tax_code: FormControl<string | null | undefined>,

		/** Amounts are including tax */
		tax_inclusive: FormControl<boolean | null | undefined>,

		/** Terms of payment. */
		terms: FormControl<string | null | undefined>,

		/**
		 * Total amount of bill, including tax.
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Total tax amount applied to this bill.
		 * Type: double
		 */
		total_tax: FormControl<number | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateBillFormGroup() {
		return new FormGroup<BillFormProperties>({
			accounting_by_row: new FormControl<boolean | null | undefined>(undefined),
			balance: new FormControl<number | null | undefined>(undefined),
			bill_date: new FormControl<Date | null | undefined>(undefined),
			bill_number: new FormControl<string | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			currency_rate: new FormControl<number | null | undefined>(undefined),
			deposit: new FormControl<number | null | undefined>(undefined),
			discount_percentage: new FormControl<number | null | undefined>(undefined),
			downstream_id: new FormControl<string | null | undefined>(undefined),
			due_date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			paid_date: new FormControl<Date | null | undefined>(undefined),
			payment_method: new FormControl<string | null | undefined>(undefined),
			po_number: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BillStatus | null | undefined>(undefined),
			sub_total: new FormControl<number | null | undefined>(undefined),
			tax_code: new FormControl<string | null | undefined>(undefined),
			tax_inclusive: new FormControl<boolean | null | undefined>(undefined),
			terms: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			total_tax: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BillLineItem {

		/** User defined item code */
		code?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Department id */
		department_id?: string | null;

		/** User defined description */
		description?: string | null;

		/**
		 * Discount amount applied to the line item when supported downstream.
		 * Type: double
		 */
		discount_amount?: number | null;

		/**
		 * Discount percentage applied to the line item when supported downstream.
		 * Type: double
		 */
		discount_percentage?: number | null;

		/** A unique identifier for an object. */
		id?: string | null;
		item?: LinkedInvoiceItem;
		ledger_account?: LinkedLedgerAccount;

		/**
		 * Line number in the invoice
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		line_number?: number | null;

		/** Location id */
		location_id?: string | null;

		/** Type: double */
		quantity?: number | null;

		/** Row ID */
		row_id?: string | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/**
		 * Tax amount
		 * Type: double
		 */
		tax_amount?: number | null;
		tax_rate?: LinkedTaxRate;

		/**
		 * Total amount of the line item
		 * Type: double
		 */
		total_amount?: number | null;

		/** Bill Line Item type */
		type?: BillLineItemType | null;

		/** Description of the unit type the item is sold as, ie: kg, hour. */
		unit_of_measure?: string | null;

		/** Type: double */
		unit_price?: number | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface BillLineItemFormProperties {

		/** User defined item code */
		code: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Department id */
		department_id: FormControl<string | null | undefined>,

		/** User defined description */
		description: FormControl<string | null | undefined>,

		/**
		 * Discount amount applied to the line item when supported downstream.
		 * Type: double
		 */
		discount_amount: FormControl<number | null | undefined>,

		/**
		 * Discount percentage applied to the line item when supported downstream.
		 * Type: double
		 */
		discount_percentage: FormControl<number | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * Line number in the invoice
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		line_number: FormControl<number | null | undefined>,

		/** Location id */
		location_id: FormControl<string | null | undefined>,

		/** Type: double */
		quantity: FormControl<number | null | undefined>,

		/** Row ID */
		row_id: FormControl<string | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/**
		 * Tax amount
		 * Type: double
		 */
		tax_amount: FormControl<number | null | undefined>,

		/**
		 * Total amount of the line item
		 * Type: double
		 */
		total_amount: FormControl<number | null | undefined>,

		/** Bill Line Item type */
		type: FormControl<BillLineItemType | null | undefined>,

		/** Description of the unit type the item is sold as, ie: kg, hour. */
		unit_of_measure: FormControl<string | null | undefined>,

		/** Type: double */
		unit_price: FormControl<number | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateBillLineItemFormGroup() {
		return new FormGroup<BillLineItemFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			department_id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discount_amount: new FormControl<number | null | undefined>(undefined),
			discount_percentage: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			line_number: new FormControl<number | null | undefined>(undefined),
			location_id: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			row_id: new FormControl<string | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			tax_amount: new FormControl<number | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<BillLineItemType | null | undefined>(undefined),
			unit_of_measure: new FormControl<string | null | undefined>(undefined),
			unit_price: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedInvoiceItem {

		/** User defined item code */
		code?: string | null;

		/** ID of the linked item. A reference to the [invoice item](https://developers.apideck.com/apis/accounting/reference#tag/Invoice-Items) that was used to create this line item */
		id?: string | null;

		/** User defined item name */
		name?: string | null;
	}
	export interface LinkedInvoiceItemFormProperties {

		/** User defined item code */
		code: FormControl<string | null | undefined>,

		/** ID of the linked item. A reference to the [invoice item](https://developers.apideck.com/apis/accounting/reference#tag/Invoice-Items) that was used to create this line item */
		id: FormControl<string | null | undefined>,

		/** User defined item name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLinkedInvoiceItemFormGroup() {
		return new FormGroup<LinkedInvoiceItemFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BillLineItemType { expense_item = 'expense_item', expense_account = 'expense_account' }

	export enum BillStatus { draft = 'draft', submitted = 'submitted', authorised = 'authorised', partially_paid = 'partially_paid', paid = 'paid', void = 'void', credit = 'credit', deleted = 'deleted' }


	/** The supplier this entity is linked to. */
	export interface LinkedSupplier {
		address?: Address;

		/** The company name of the supplier. */
		company_name?: string | null;

		/** The display ID of the supplier. */
		display_id?: string | null;

		/** The display name of the supplier. */
		display_name?: string | null;

		/**
		 * The ID of the supplier this entity is linked to.
		 * Required
		 */
		id: string;
	}

	/** The supplier this entity is linked to. */
	export interface LinkedSupplierFormProperties {

		/** The company name of the supplier. */
		company_name: FormControl<string | null | undefined>,

		/** The display ID of the supplier. */
		display_id: FormControl<string | null | undefined>,

		/** The display name of the supplier. */
		display_name: FormControl<string | null | undefined>,

		/**
		 * The ID of the supplier this entity is linked to.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateLinkedSupplierFormGroup() {
		return new FormGroup<LinkedSupplierFormProperties>({
			company_name: new FormControl<string | null | undefined>(undefined),
			display_id: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BillsSort {

		/** The field on which to sort the Bills */
		by?: BillsSortBy | null;

		/** The direction in which to sort the results */
		direction?: BillsSortDirection | null;
	}
	export interface BillsSortFormProperties {

		/** The field on which to sort the Bills */
		by: FormControl<BillsSortBy | null | undefined>,

		/** The direction in which to sort the results */
		direction: FormControl<BillsSortDirection | null | undefined>,
	}
	export function CreateBillsSortFormGroup() {
		return new FormGroup<BillsSortFormProperties>({
			by: new FormControl<BillsSortBy | null | undefined>(undefined),
			direction: new FormControl<BillsSortDirection | null | undefined>(undefined),
		});

	}

	export enum BillsSortBy { updated_at = 'updated_at' }

	export enum BillsSortDirection { asc = 'asc', desc = 'desc' }

	export interface Company {

		/** An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity. */
		abn_branch?: string | null;

		/** An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia. */
		abn_or_tfn?: string | null;

		/** The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank. */
		acn?: string | null;
		addresses?: Array<Address>;

		/** The annual revenue of the company */
		annual_revenue?: string | null;
		bank_accounts?: Array<BankAccount>;

		/**
		 * The date of birth of the person.
		 * Type: DateOnly
		 */
		birthday?: Date | null;

		/** Creation date */
		created_at?: Date | null;

		/** Created by user ID */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;
		custom_fields?: Array<CustomField>;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Whether the company is deleted or not */
		deleted?: boolean | null;

		/** A description of the company */
		description?: string | null;
		emails?: Array<Email>;

		/** The fax number of the company */
		fax?: string | null;

		/** The first name of the person. */
		first_name?: string | null;

		/** Unique identifier for the company */
		id?: string | null;

		/** The Image URL of the company */
		image?: string | null;

		/** The industry represents the type of business the company is in. */
		industry?: string | null;

		/**
		 * Number of interactions
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interaction_count?: number | null;

		/** Last activity date */
		last_activity_at?: Date | null;

		/** The last name of the person. */
		last_name?: string | null;

		/**
		 * Name of the company
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** Number of employees */
		number_of_employees?: string | null;

		/** Owner ID */
		owner_id?: string | null;

		/** The ownership indicates the type of ownership of the company. */
		ownership?: string | null;

		/** Parent ID */
		parent_id?: string | null;

		/** A payee number is a unique number that identifies a payee for tax purposes. */
		payee_number?: string | null;
		phone_numbers?: Array<PhoneNumber>;

		/** Whether the company is read-only or not */
		read_only?: boolean | null;
		row_type?: CompanyRow_type;

		/** A sales tax number is a unique number that identifies a company for tax purposes. */
		sales_tax_number?: string | null;

		/** A formal salutation for the person. For example, 'Mr', 'Mrs' */
		salutation?: string | null;
		social_links?: Array<SocialLink>;

		/** The status of the company */
		status?: string | null;
		tags?: Array<string>;

		/** Last updated date */
		updated_at?: Date | null;

		/** Updated by user ID */
		updated_by?: string | null;

		/** The VAT number of the company */
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

		/** The annual revenue of the company */
		annual_revenue: FormControl<string | null | undefined>,

		/**
		 * The date of birth of the person.
		 * Type: DateOnly
		 */
		birthday: FormControl<Date | null | undefined>,

		/** Creation date */
		created_at: FormControl<Date | null | undefined>,

		/** Created by user ID */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** Whether the company is deleted or not */
		deleted: FormControl<boolean | null | undefined>,

		/** A description of the company */
		description: FormControl<string | null | undefined>,

		/** The fax number of the company */
		fax: FormControl<string | null | undefined>,

		/** The first name of the person. */
		first_name: FormControl<string | null | undefined>,

		/** Unique identifier for the company */
		id: FormControl<string | null | undefined>,

		/** The Image URL of the company */
		image: FormControl<string | null | undefined>,

		/** The industry represents the type of business the company is in. */
		industry: FormControl<string | null | undefined>,

		/**
		 * Number of interactions
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interaction_count: FormControl<number | null | undefined>,

		/** Last activity date */
		last_activity_at: FormControl<Date | null | undefined>,

		/** The last name of the person. */
		last_name: FormControl<string | null | undefined>,

		/**
		 * Name of the company
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Number of employees */
		number_of_employees: FormControl<string | null | undefined>,

		/** Owner ID */
		owner_id: FormControl<string | null | undefined>,

		/** The ownership indicates the type of ownership of the company. */
		ownership: FormControl<string | null | undefined>,

		/** Parent ID */
		parent_id: FormControl<string | null | undefined>,

		/** A payee number is a unique number that identifies a payee for tax purposes. */
		payee_number: FormControl<string | null | undefined>,

		/** Whether the company is read-only or not */
		read_only: FormControl<boolean | null | undefined>,

		/** A sales tax number is a unique number that identifies a company for tax purposes. */
		sales_tax_number: FormControl<string | null | undefined>,

		/** A formal salutation for the person. For example, 'Mr', 'Mrs' */
		salutation: FormControl<string | null | undefined>,

		/** The status of the company */
		status: FormControl<string | null | undefined>,

		/** Last updated date */
		updated_at: FormControl<Date | null | undefined>,

		/** Updated by user ID */
		updated_by: FormControl<string | null | undefined>,

		/** The VAT number of the company */
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

	export interface CompanyInfo {
		addresses?: Array<Address>;

		/** Whether sales tax is calculated automatically for the company */
		automated_sales_tax?: boolean | null;

		/** The name of the company. */
		company_name?: string | null;

		/**
		 * Date when company file was created
		 * Type: DateOnly
		 */
		company_start_date?: Date | null;

		/** country code according to ISO 3166-1 alpha-2. */
		country?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;
		default_sales_tax?: TaxRate;
		emails?: Array<Email>;

		/** The start month of fiscal year. */
		fiscal_year_start_month?: CompanyInfoFiscal_year_start_month | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** language code according to ISO 639-1. For the United States - EN */
		language?: string | null;

		/** The legal name of the company */
		legal_name?: string | null;
		phone_numbers?: Array<PhoneNumber>;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/** Whether sales tax is enabled for the company */
		sales_tax_enabled?: boolean | null;
		sales_tax_number?: string | null;

		/** Based on the status some functionality is enabled or disabled. */
		status?: CompanyInfoStatus | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface CompanyInfoFormProperties {

		/** Whether sales tax is calculated automatically for the company */
		automated_sales_tax: FormControl<boolean | null | undefined>,

		/** The name of the company. */
		company_name: FormControl<string | null | undefined>,

		/**
		 * Date when company file was created
		 * Type: DateOnly
		 */
		company_start_date: FormControl<Date | null | undefined>,

		/** country code according to ISO 3166-1 alpha-2. */
		country: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** The start month of fiscal year. */
		fiscal_year_start_month: FormControl<CompanyInfoFiscal_year_start_month | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** language code according to ISO 639-1. For the United States - EN */
		language: FormControl<string | null | undefined>,

		/** The legal name of the company */
		legal_name: FormControl<string | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** Whether sales tax is enabled for the company */
		sales_tax_enabled: FormControl<boolean | null | undefined>,
		sales_tax_number: FormControl<string | null | undefined>,

		/** Based on the status some functionality is enabled or disabled. */
		status: FormControl<CompanyInfoStatus | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateCompanyInfoFormGroup() {
		return new FormGroup<CompanyInfoFormProperties>({
			automated_sales_tax: new FormControl<boolean | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			company_start_date: new FormControl<Date | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			fiscal_year_start_month: new FormControl<CompanyInfoFiscal_year_start_month | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			legal_name: new FormControl<string | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			sales_tax_enabled: new FormControl<boolean | null | undefined>(undefined),
			sales_tax_number: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CompanyInfoStatus | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxRate {

		/** Tax code assigned to identify this tax rate. */
		code?: string | null;
		TaxRateComponents?: Array<TaxRateComponents>;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Description of tax rate */
		description?: string | null;

		/**
		 * Effective tax rate
		 * Type: double
		 */
		effective_tax_rate?: number | null;

		/** ID assigned to identify this tax rate. */
		id?: string | null;

		/**
		 * Name assigned to identify this tax rate.
		 * Min length: 1
		 */
		name?: string | null;

		/** ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities. */
		original_tax_rate_id?: string | null;

		/** Report Tax type to aggregate tax collected or paid for reporting purposes */
		report_tax_type?: string | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/** Tax rate status */
		status?: TaxRateStatus | null;

		/** Unique identifier for the account for tax collected. */
		tax_payable_account_id?: string | null;

		/** Unique identifier for the account for tax remitted. */
		tax_remitted_account_id?: string | null;

		/**
		 * Not compounded sum of the components of a tax rate
		 * Type: double
		 */
		total_tax_rate?: number | null;

		/** Tax type used to indicate the source of tax collected or paid */
		type?: string | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface TaxRateFormProperties {

		/** Tax code assigned to identify this tax rate. */
		code: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Description of tax rate */
		description: FormControl<string | null | undefined>,

		/**
		 * Effective tax rate
		 * Type: double
		 */
		effective_tax_rate: FormControl<number | null | undefined>,

		/** ID assigned to identify this tax rate. */
		id: FormControl<string | null | undefined>,

		/**
		 * Name assigned to identify this tax rate.
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities. */
		original_tax_rate_id: FormControl<string | null | undefined>,

		/** Report Tax type to aggregate tax collected or paid for reporting purposes */
		report_tax_type: FormControl<string | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** Tax rate status */
		status: FormControl<TaxRateStatus | null | undefined>,

		/** Unique identifier for the account for tax collected. */
		tax_payable_account_id: FormControl<string | null | undefined>,

		/** Unique identifier for the account for tax remitted. */
		tax_remitted_account_id: FormControl<string | null | undefined>,

		/**
		 * Not compounded sum of the components of a tax rate
		 * Type: double
		 */
		total_tax_rate: FormControl<number | null | undefined>,

		/** Tax type used to indicate the source of tax collected or paid */
		type: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateTaxRateFormGroup() {
		return new FormGroup<TaxRateFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			effective_tax_rate: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			original_tax_rate_id: new FormControl<string | null | undefined>(undefined),
			report_tax_type: new FormControl<string | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TaxRateStatus | null | undefined>(undefined),
			tax_payable_account_id: new FormControl<string | null | undefined>(undefined),
			tax_remitted_account_id: new FormControl<string | null | undefined>(undefined),
			total_tax_rate: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxRateComponents {
		compound?: boolean | null;
		id?: string | null;

		/** Min length: 1 */
		name?: string | null;

		/** Type: double */
		rate?: number | null;
	}
	export interface TaxRateComponentsFormProperties {
		compound: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,

		/** Type: double */
		rate: FormControl<number | null | undefined>,
	}
	export function CreateTaxRateComponentsFormGroup() {
		return new FormGroup<TaxRateComponentsFormProperties>({
			compound: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			rate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TaxRateStatus { active = 'active', inactive = 'inactive', archived = 'archived' }

	export enum CompanyInfoFiscal_year_start_month { January = 'January', February = 'February', March = 'March', April = 'April', May = 'May', June = 'June', July = 'July', August = 'August', September = 'September', October = 'October', November = 'November', December = 'December' }

	export enum CompanyInfoStatus { active = 'active', inactive = 'inactive' }

	export interface Contact {

		/** The active status of the contact. */
		active?: boolean | null;
		addresses?: Array<Address>;

		/** The birthday of the contact. */
		birthday?: string | null;

		/** The company the contact is associated with. */
		company_id?: string | null;

		/** The name of the company the contact is associated with. */
		company_name?: string | null;

		/** The creation date of the contact. */
		created_at?: Date | null;

		/**
		 * The current balance of the contact.
		 * Type: double
		 */
		current_balance?: number | null;
		custom_fields?: Array<CustomField>;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The department of the contact. */
		department?: string | null;

		/** The description of the contact. */
		description?: string | null;
		email_domain?: string | null;
		emails?: Array<Email>;

		/** The fax number of the contact. */
		fax?: string | null;

		/** The first call date of the contact. */
		first_call_at?: Date | null;

		/** The first email date of the contact. */
		first_email_at?: Date | null;

		/** The first name of the contact. */
		first_name?: string | null;

		/** The gender of the contact. */
		gender?: ContactGender | null;

		/** Unique identifier for the contact. */
		id?: string | null;
		image?: string | null;

		/** language code according to ISO 639-1. For the United States - EN */
		language?: string | null;

		/** The last activity date of the contact. */
		last_activity_at?: Date | null;

		/** The last name of the contact. */
		last_name?: string | null;

		/** The lead the contact is associated with. */
		lead_id?: string | null;

		/** The lead source of the contact. */
		lead_source?: string | null;

		/** The middle name of the contact. */
		middle_name?: string | null;

		/**
		 * Full name of the contact.
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** The owner of the contact. */
		owner_id?: string | null;
		phone_numbers?: Array<PhoneNumber>;

		/** The URL of the photo of a person. */
		photo_url?: string | null;

		/** The prefix of the contact. */
		prefix?: string | null;
		social_links?: Array<SocialLink>;

		/** The status of the contact. */
		status?: string | null;

		/** The suffix of the contact. */
		suffix?: string | null;
		tags?: Array<string>;

		/** The job title of the contact. */
		title?: string | null;

		/** The type of the contact. */
		type?: ContactType | null;

		/** The last update date of the contact. */
		updated_at?: Date | null;
		websites?: Array<Website>;
	}
	export interface ContactFormProperties {

		/** The active status of the contact. */
		active: FormControl<boolean | null | undefined>,

		/** The birthday of the contact. */
		birthday: FormControl<string | null | undefined>,

		/** The company the contact is associated with. */
		company_id: FormControl<string | null | undefined>,

		/** The name of the company the contact is associated with. */
		company_name: FormControl<string | null | undefined>,

		/** The creation date of the contact. */
		created_at: FormControl<Date | null | undefined>,

		/**
		 * The current balance of the contact.
		 * Type: double
		 */
		current_balance: FormControl<number | null | undefined>,

		/** The department of the contact. */
		department: FormControl<string | null | undefined>,

		/** The description of the contact. */
		description: FormControl<string | null | undefined>,
		email_domain: FormControl<string | null | undefined>,

		/** The fax number of the contact. */
		fax: FormControl<string | null | undefined>,

		/** The first call date of the contact. */
		first_call_at: FormControl<Date | null | undefined>,

		/** The first email date of the contact. */
		first_email_at: FormControl<Date | null | undefined>,

		/** The first name of the contact. */
		first_name: FormControl<string | null | undefined>,

		/** The gender of the contact. */
		gender: FormControl<ContactGender | null | undefined>,

		/** Unique identifier for the contact. */
		id: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,

		/** language code according to ISO 639-1. For the United States - EN */
		language: FormControl<string | null | undefined>,

		/** The last activity date of the contact. */
		last_activity_at: FormControl<Date | null | undefined>,

		/** The last name of the contact. */
		last_name: FormControl<string | null | undefined>,

		/** The lead the contact is associated with. */
		lead_id: FormControl<string | null | undefined>,

		/** The lead source of the contact. */
		lead_source: FormControl<string | null | undefined>,

		/** The middle name of the contact. */
		middle_name: FormControl<string | null | undefined>,

		/**
		 * Full name of the contact.
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** The owner of the contact. */
		owner_id: FormControl<string | null | undefined>,

		/** The URL of the photo of a person. */
		photo_url: FormControl<string | null | undefined>,

		/** The prefix of the contact. */
		prefix: FormControl<string | null | undefined>,

		/** The status of the contact. */
		status: FormControl<string | null | undefined>,

		/** The suffix of the contact. */
		suffix: FormControl<string | null | undefined>,

		/** The job title of the contact. */
		title: FormControl<string | null | undefined>,

		/** The type of the contact. */
		type: FormControl<ContactType | null | undefined>,

		/** The last update date of the contact. */
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

	export enum ContactGender { male = 'male', female = 'female', unisex = 'unisex' }

	export enum ContactType { customer = 'customer', supplier = 'supplier', employee = 'employee', personal = 'personal' }

	export interface CreateBillResponse {

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
	export interface CreateBillResponseFormProperties {

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
	export function CreateCreateBillResponseFormGroup() {
		return new FormGroup<CreateBillResponseFormProperties>({
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

	export interface CreateCreditNoteResponse {

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
	export interface CreateCreditNoteResponseFormProperties {

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
	export function CreateCreateCreditNoteResponseFormGroup() {
		return new FormGroup<CreateCreditNoteResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCustomerResponse {

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
	export interface CreateCustomerResponseFormProperties {

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
	export function CreateCreateCustomerResponseFormGroup() {
		return new FormGroup<CreateCustomerResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateInvoiceItemResponse {

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
	export interface CreateInvoiceItemResponseFormProperties {

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
	export function CreateCreateInvoiceItemResponseFormGroup() {
		return new FormGroup<CreateInvoiceItemResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateInvoiceResponse {

		/** Required */
		data: InvoiceResponse;

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
	export interface CreateInvoiceResponseFormProperties {

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
	export function CreateCreateInvoiceResponseFormGroup() {
		return new FormGroup<CreateInvoiceResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvoiceResponse {

		/** The third-party API ID of original entity */
		downstream_id?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;
	}
	export interface InvoiceResponseFormProperties {

		/** The third-party API ID of original entity */
		downstream_id: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceResponseFormGroup() {
		return new FormGroup<InvoiceResponseFormProperties>({
			downstream_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateJournalEntryResponse {

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
	export interface CreateJournalEntryResponseFormProperties {

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
	export function CreateCreateJournalEntryResponseFormGroup() {
		return new FormGroup<CreateJournalEntryResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLedgerAccountResponse {

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
	export interface CreateLedgerAccountResponseFormProperties {

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
	export function CreateCreateLedgerAccountResponseFormGroup() {
		return new FormGroup<CreateLedgerAccountResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePaymentResponse {

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
	export interface CreatePaymentResponseFormProperties {

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
	export function CreateCreatePaymentResponseFormGroup() {
		return new FormGroup<CreatePaymentResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePurchaseOrderResponse {

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
	export interface CreatePurchaseOrderResponseFormProperties {

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
	export function CreateCreatePurchaseOrderResponseFormGroup() {
		return new FormGroup<CreatePurchaseOrderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSupplierResponse {

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
	export interface CreateSupplierResponseFormProperties {

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
	export function CreateCreateSupplierResponseFormGroup() {
		return new FormGroup<CreateSupplierResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTaxRateResponse {

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
	export interface CreateTaxRateResponseFormProperties {

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
	export function CreateCreateTaxRateResponseFormGroup() {
		return new FormGroup<CreateTaxRateResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreditNote {
		account?: LinkedLedgerAccount;
		CreditNoteAllocations?: Array<CreditNoteAllocations>;

		/**
		 * The balance reflecting any payments made against the transaction.
		 * Type: double
		 */
		balance?: number | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/**
		 * Currency Exchange Rate at the time entity was recorded/generated.
		 * Type: double
		 */
		currency_rate?: number | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The customer this entity is linked to. */
		customer?: LinkedCustomer;

		/** Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD */
		date_issued?: Date | null;

		/** Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD */
		date_paid?: Date | null;

		/**
		 * Unique identifier representing the entity
		 * Required
		 */
		id: string;
		line_items?: Array<InvoiceLineItem>;

		/** Optional note to be associated with the credit note. */
		note?: string | null;

		/** Credit note number. */
		number?: string | null;

		/** Optional reference message ie: Debit remittance detail. */
		reference?: string | null;

		/**
		 * Indicates the total credit amount still available to apply towards the payment.
		 * Type: double
		 */
		remaining_credit?: number | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/** Status of credit notes */
		status?: CreditNoteStatus | null;

		/**
		 * Sub-total amount, normally before tax.
		 * Type: double
		 */
		sub_total?: number | null;

		/** Applicable tax id/code override if tax is not supplied on a line item basis. */
		tax_code?: string | null;

		/** Amounts are including tax */
		tax_inclusive?: boolean | null;

		/** Optional terms to be associated with the credit note. */
		terms?: string | null;

		/**
		 * Amount of transaction
		 * Required
		 * Type: double
		 */
		total_amount: number;

		/**
		 * Total tax amount applied to this invoice.
		 * Type: double
		 */
		total_tax?: number | null;

		/** Type of payment */
		type?: CreditNoteType | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface CreditNoteFormProperties {

		/**
		 * The balance reflecting any payments made against the transaction.
		 * Type: double
		 */
		balance: FormControl<number | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/**
		 * Currency Exchange Rate at the time entity was recorded/generated.
		 * Type: double
		 */
		currency_rate: FormControl<number | null | undefined>,

		/** Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD */
		date_issued: FormControl<Date | null | undefined>,

		/** Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD */
		date_paid: FormControl<Date | null | undefined>,

		/**
		 * Unique identifier representing the entity
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Optional note to be associated with the credit note. */
		note: FormControl<string | null | undefined>,

		/** Credit note number. */
		number: FormControl<string | null | undefined>,

		/** Optional reference message ie: Debit remittance detail. */
		reference: FormControl<string | null | undefined>,

		/**
		 * Indicates the total credit amount still available to apply towards the payment.
		 * Type: double
		 */
		remaining_credit: FormControl<number | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** Status of credit notes */
		status: FormControl<CreditNoteStatus | null | undefined>,

		/**
		 * Sub-total amount, normally before tax.
		 * Type: double
		 */
		sub_total: FormControl<number | null | undefined>,

		/** Applicable tax id/code override if tax is not supplied on a line item basis. */
		tax_code: FormControl<string | null | undefined>,

		/** Amounts are including tax */
		tax_inclusive: FormControl<boolean | null | undefined>,

		/** Optional terms to be associated with the credit note. */
		terms: FormControl<string | null | undefined>,

		/**
		 * Amount of transaction
		 * Required
		 * Type: double
		 */
		total_amount: FormControl<number | null | undefined>,

		/**
		 * Total tax amount applied to this invoice.
		 * Type: double
		 */
		total_tax: FormControl<number | null | undefined>,

		/** Type of payment */
		type: FormControl<CreditNoteType | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateCreditNoteFormGroup() {
		return new FormGroup<CreditNoteFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			currency_rate: new FormControl<number | null | undefined>(undefined),
			date_issued: new FormControl<Date | null | undefined>(undefined),
			date_paid: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			remaining_credit: new FormControl<number | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CreditNoteStatus | null | undefined>(undefined),
			sub_total: new FormControl<number | null | undefined>(undefined),
			tax_code: new FormControl<string | null | undefined>(undefined),
			tax_inclusive: new FormControl<boolean | null | undefined>(undefined),
			terms: new FormControl<string | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_tax: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<CreditNoteType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreditNoteAllocations {

		/**
		 * Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.
		 * Type: double
		 */
		amount?: number | null;
		code?: string | null;

		/** Unique identifier of entity this payment should be attributed to. */
		id?: string | null;

		/** Type of entity this payment should be attributed to. */
		type?: CreditNoteAllocationsType | null;
	}
	export interface CreditNoteAllocationsFormProperties {

		/**
		 * Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,
		code: FormControl<string | null | undefined>,

		/** Unique identifier of entity this payment should be attributed to. */
		id: FormControl<string | null | undefined>,

		/** Type of entity this payment should be attributed to. */
		type: FormControl<CreditNoteAllocationsType | null | undefined>,
	}
	export function CreateCreditNoteAllocationsFormGroup() {
		return new FormGroup<CreditNoteAllocationsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CreditNoteAllocationsType | null | undefined>(undefined),
		});

	}

	export enum CreditNoteAllocationsType { invoice = 'invoice', order = 'order', expense = 'expense', credit_memo = 'credit_memo', over_payment = 'over_payment', pre_payment = 'pre_payment' }


	/** The customer this entity is linked to. */
	export interface LinkedCustomer {

		/** The company name of the customer. */
		company_name?: string | null;

		/** The display ID of the customer. */
		display_id?: string | null;

		/** The display name of the customer. */
		display_name?: string | null;

		/**
		 * The ID of the customer this entity is linked to.
		 * Required
		 */
		id: string;

		/** The name of the customer. Deprecated, use display_name instead. */
		name?: string | null;
	}

	/** The customer this entity is linked to. */
	export interface LinkedCustomerFormProperties {

		/** The company name of the customer. */
		company_name: FormControl<string | null | undefined>,

		/** The display ID of the customer. */
		display_id: FormControl<string | null | undefined>,

		/** The display name of the customer. */
		display_name: FormControl<string | null | undefined>,

		/**
		 * The ID of the customer this entity is linked to.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The name of the customer. Deprecated, use display_name instead. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLinkedCustomerFormGroup() {
		return new FormGroup<LinkedCustomerFormProperties>({
			company_name: new FormControl<string | null | undefined>(undefined),
			display_id: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceLineItem {

		/** User defined item code */
		code?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Department id */
		department_id?: string | null;

		/** User defined description */
		description?: string | null;

		/**
		 * Discount amount applied to the line item when supported downstream.
		 * Type: double
		 */
		discount_amount?: number | null;

		/**
		 * Discount percentage applied to the line item when supported downstream.
		 * Type: double
		 */
		discount_percentage?: number | null;

		/** A unique identifier for an object. */
		id?: string | null;
		item?: LinkedInvoiceItem;
		ledger_account?: LinkedLedgerAccount;

		/**
		 * Line number in the invoice
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		line_number?: number | null;

		/** Location id */
		location_id?: string | null;

		/** Type: double */
		quantity?: number | null;

		/** Row ID */
		row_id?: string | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/**
		 * Tax amount
		 * Type: double
		 */
		tax_amount?: number | null;
		tax_rate?: LinkedTaxRate;

		/**
		 * Total amount of the line item
		 * Type: double
		 */
		total_amount?: number | null;

		/** Item type */
		type?: InvoiceLineItemType | null;

		/** Description of the unit type the item is sold as, ie: kg, hour. */
		unit_of_measure?: string | null;

		/** Type: double */
		unit_price?: number | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface InvoiceLineItemFormProperties {

		/** User defined item code */
		code: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Department id */
		department_id: FormControl<string | null | undefined>,

		/** User defined description */
		description: FormControl<string | null | undefined>,

		/**
		 * Discount amount applied to the line item when supported downstream.
		 * Type: double
		 */
		discount_amount: FormControl<number | null | undefined>,

		/**
		 * Discount percentage applied to the line item when supported downstream.
		 * Type: double
		 */
		discount_percentage: FormControl<number | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * Line number in the invoice
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		line_number: FormControl<number | null | undefined>,

		/** Location id */
		location_id: FormControl<string | null | undefined>,

		/** Type: double */
		quantity: FormControl<number | null | undefined>,

		/** Row ID */
		row_id: FormControl<string | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/**
		 * Tax amount
		 * Type: double
		 */
		tax_amount: FormControl<number | null | undefined>,

		/**
		 * Total amount of the line item
		 * Type: double
		 */
		total_amount: FormControl<number | null | undefined>,

		/** Item type */
		type: FormControl<InvoiceLineItemType | null | undefined>,

		/** Description of the unit type the item is sold as, ie: kg, hour. */
		unit_of_measure: FormControl<string | null | undefined>,

		/** Type: double */
		unit_price: FormControl<number | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceLineItemFormGroup() {
		return new FormGroup<InvoiceLineItemFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			department_id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discount_amount: new FormControl<number | null | undefined>(undefined),
			discount_percentage: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			line_number: new FormControl<number | null | undefined>(undefined),
			location_id: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			row_id: new FormControl<string | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			tax_amount: new FormControl<number | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<InvoiceLineItemType | null | undefined>(undefined),
			unit_of_measure: new FormControl<string | null | undefined>(undefined),
			unit_price: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvoiceLineItemType { sales_item = 'sales_item', discount = 'discount', info = 'info', sub_total = 'sub_total' }

	export enum CreditNoteStatus { draft = 'draft', authorised = 'authorised', paid = 'paid', voided = 'voided', deleted = 'deleted' }

	export enum CreditNoteType { accounts_receivable_credit = 'accounts_receivable_credit', accounts_payable_credit = 'accounts_payable_credit' }


	/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
	export enum Currency { UNKNOWN_CURRENCY = 'UNKNOWN_CURRENCY', AED = 'AED', AFN = 'AFN', ALL = 'ALL', AMD = 'AMD', ANG = 'ANG', AOA = 'AOA', ARS = 'ARS', AUD = 'AUD', AWG = 'AWG', AZN = 'AZN', BAM = 'BAM', BBD = 'BBD', BDT = 'BDT', BGN = 'BGN', BHD = 'BHD', BIF = 'BIF', BMD = 'BMD', BND = 'BND', BOB = 'BOB', BOV = 'BOV', BRL = 'BRL', BSD = 'BSD', BTN = 'BTN', BWP = 'BWP', BYR = 'BYR', BZD = 'BZD', CAD = 'CAD', CDF = 'CDF', CHE = 'CHE', CHF = 'CHF', CHW = 'CHW', CLF = 'CLF', CLP = 'CLP', CNY = 'CNY', COP = 'COP', COU = 'COU', CRC = 'CRC', CUC = 'CUC', CUP = 'CUP', CVE = 'CVE', CZK = 'CZK', DJF = 'DJF', DKK = 'DKK', DOP = 'DOP', DZD = 'DZD', EGP = 'EGP', ERN = 'ERN', ETB = 'ETB', EUR = 'EUR', FJD = 'FJD', FKP = 'FKP', GBP = 'GBP', GEL = 'GEL', GHS = 'GHS', GIP = 'GIP', GMD = 'GMD', GNF = 'GNF', GTQ = 'GTQ', GYD = 'GYD', HKD = 'HKD', HNL = 'HNL', HRK = 'HRK', HTG = 'HTG', HUF = 'HUF', IDR = 'IDR', ILS = 'ILS', INR = 'INR', IQD = 'IQD', IRR = 'IRR', ISK = 'ISK', JMD = 'JMD', JOD = 'JOD', JPY = 'JPY', KES = 'KES', KGS = 'KGS', KHR = 'KHR', KMF = 'KMF', KPW = 'KPW', KRW = 'KRW', KWD = 'KWD', KYD = 'KYD', KZT = 'KZT', LAK = 'LAK', LBP = 'LBP', LKR = 'LKR', LRD = 'LRD', LSL = 'LSL', LTL = 'LTL', LVL = 'LVL', LYD = 'LYD', MAD = 'MAD', MDL = 'MDL', MGA = 'MGA', MKD = 'MKD', MMK = 'MMK', MNT = 'MNT', MOP = 'MOP', MRO = 'MRO', MUR = 'MUR', MVR = 'MVR', MWK = 'MWK', MXN = 'MXN', MXV = 'MXV', MYR = 'MYR', MZN = 'MZN', NAD = 'NAD', NGN = 'NGN', NIO = 'NIO', NOK = 'NOK', NPR = 'NPR', NZD = 'NZD', OMR = 'OMR', PAB = 'PAB', PEN = 'PEN', PGK = 'PGK', PHP = 'PHP', PKR = 'PKR', PLN = 'PLN', PYG = 'PYG', QAR = 'QAR', RON = 'RON', RSD = 'RSD', RUB = 'RUB', RWF = 'RWF', SAR = 'SAR', SBD = 'SBD', SCR = 'SCR', SDG = 'SDG', SEK = 'SEK', SGD = 'SGD', SHP = 'SHP', SLL = 'SLL', SOS = 'SOS', SRD = 'SRD', SSP = 'SSP', STD = 'STD', SVC = 'SVC', SYP = 'SYP', SZL = 'SZL', THB = 'THB', TJS = 'TJS', TMT = 'TMT', TND = 'TND', TOP = 'TOP', TRC = 'TRC', TRY = 'TRY', TTD = 'TTD', TWD = 'TWD', TZS = 'TZS', UAH = 'UAH', UGX = 'UGX', USD = 'USD', USN = 'USN', USS = 'USS', UYI = 'UYI', UYU = 'UYU', UZS = 'UZS', VEF = 'VEF', VND = 'VND', VUV = 'VUV', WST = 'WST', XAF = 'XAF', XAG = 'XAG', XAU = 'XAU', XBA = 'XBA', XBB = 'XBB', XBC = 'XBC', XBD = 'XBD', XCD = 'XCD', XDR = 'XDR', XOF = 'XOF', XPD = 'XPD', XPF = 'XPF', XPT = 'XPT', XTS = 'XTS', XXX = 'XXX', YER = 'YER', ZAR = 'ZAR', ZMK = 'ZMK', ZMW = 'ZMW', BTC = 'BTC', ETH = 'ETH' }

	export interface Customer {
		account?: LinkedLedgerAccount;
		addresses?: Array<Address>;
		bank_accounts?: Array<BankAccount>;

		/** The channel through which the transaction is processed. */
		channel?: string | null;

		/** The name of the company. */
		company_name?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Display ID */
		display_id?: string | null;

		/** Display name */
		display_name?: string | null;

		/** The third-party API ID of original entity */
		downstream_id?: string | null;
		emails?: Array<Email>;

		/** The first name of the person. */
		first_name?: string | null;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/** Is this an individual or business customer */
		individual?: boolean | null;

		/** The last name of the person. */
		last_name?: string | null;

		/** Middle name of the person. */
		middle_name?: string | null;

		/** Some notes about this customer */
		notes?: string | null;

		/** The parent customer this entity is linked to. */
		parent?: LinkedParentCustomer;

		/** Payment method used for the transaction, such as cash, credit card, bank transfer, or check */
		payment_method?: string | null;
		phone_numbers?: Array<PhoneNumber>;

		/** If true, indicates this is a Project. */
		project?: boolean | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/** Customer status */
		status?: AccountingCustomerStatus | null;
		suffix?: string | null;
		tax_number?: string | null;
		tax_rate?: LinkedTaxRate;

		/** The job title of the person. */
		title?: string | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
		websites?: Array<Website>;
	}
	export interface CustomerFormProperties {

		/** The channel through which the transaction is processed. */
		channel: FormControl<string | null | undefined>,

		/** The name of the company. */
		company_name: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** Display ID */
		display_id: FormControl<string | null | undefined>,

		/** Display name */
		display_name: FormControl<string | null | undefined>,

		/** The third-party API ID of original entity */
		downstream_id: FormControl<string | null | undefined>,

		/** The first name of the person. */
		first_name: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Is this an individual or business customer */
		individual: FormControl<boolean | null | undefined>,

		/** The last name of the person. */
		last_name: FormControl<string | null | undefined>,

		/** Middle name of the person. */
		middle_name: FormControl<string | null | undefined>,

		/** Some notes about this customer */
		notes: FormControl<string | null | undefined>,

		/** Payment method used for the transaction, such as cash, credit card, bank transfer, or check */
		payment_method: FormControl<string | null | undefined>,

		/** If true, indicates this is a Project. */
		project: FormControl<boolean | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** Customer status */
		status: FormControl<AccountingCustomerStatus | null | undefined>,
		suffix: FormControl<string | null | undefined>,
		tax_number: FormControl<string | null | undefined>,

		/** The job title of the person. */
		title: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateCustomerFormGroup() {
		return new FormGroup<CustomerFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			display_id: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			downstream_id: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			individual: new FormControl<boolean | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			payment_method: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<boolean | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AccountingCustomerStatus | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
			tax_number: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomersFilter {

		/** Company Name of customer to search for */
		company_name?: string | null;

		/** Display Name of customer to search for */
		display_name?: string | null;

		/** Email of customer to search for */
		email?: string | null;

		/** First name of customer to search for */
		first_name?: string | null;

		/** Last name of customer to search for */
		last_name?: string | null;

		/** Status of customer to filter on */
		status?: CustomersFilterStatus | null;
	}
	export interface CustomersFilterFormProperties {

		/** Company Name of customer to search for */
		company_name: FormControl<string | null | undefined>,

		/** Display Name of customer to search for */
		display_name: FormControl<string | null | undefined>,

		/** Email of customer to search for */
		email: FormControl<string | null | undefined>,

		/** First name of customer to search for */
		first_name: FormControl<string | null | undefined>,

		/** Last name of customer to search for */
		last_name: FormControl<string | null | undefined>,

		/** Status of customer to filter on */
		status: FormControl<CustomersFilterStatus | null | undefined>,
	}
	export function CreateCustomersFilterFormGroup() {
		return new FormGroup<CustomersFilterFormProperties>({
			company_name: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CustomersFilterStatus | null | undefined>(undefined),
		});

	}

	export enum CustomersFilterStatus { active = 'active', inactive = 'inactive', archived = 'archived', all = 'all' }

	export interface DeleteBillResponse {

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
	export interface DeleteBillResponseFormProperties {

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
	export function CreateDeleteBillResponseFormGroup() {
		return new FormGroup<DeleteBillResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteCreditNoteResponse {

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
	export interface DeleteCreditNoteResponseFormProperties {

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
	export function CreateDeleteCreditNoteResponseFormGroup() {
		return new FormGroup<DeleteCreditNoteResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteCustomerResponse {

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
	export interface DeleteCustomerResponseFormProperties {

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
	export function CreateDeleteCustomerResponseFormGroup() {
		return new FormGroup<DeleteCustomerResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteInvoiceItemResponse {

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
	export interface DeleteInvoiceItemResponseFormProperties {

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
	export function CreateDeleteInvoiceItemResponseFormGroup() {
		return new FormGroup<DeleteInvoiceItemResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteInvoiceResponse {

		/** Required */
		data: InvoiceResponse;

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
	export interface DeleteInvoiceResponseFormProperties {

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
	export function CreateDeleteInvoiceResponseFormGroup() {
		return new FormGroup<DeleteInvoiceResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteJournalEntryResponse {

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
	export interface DeleteJournalEntryResponseFormProperties {

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
	export function CreateDeleteJournalEntryResponseFormGroup() {
		return new FormGroup<DeleteJournalEntryResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLedgerAccountResponse {

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
	export interface DeleteLedgerAccountResponseFormProperties {

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
	export function CreateDeleteLedgerAccountResponseFormGroup() {
		return new FormGroup<DeleteLedgerAccountResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePaymentResponse {

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
	export interface DeletePaymentResponseFormProperties {

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
	export function CreateDeletePaymentResponseFormGroup() {
		return new FormGroup<DeletePaymentResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePurchaseOrderResponse {

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
	export interface DeletePurchaseOrderResponseFormProperties {

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
	export function CreateDeletePurchaseOrderResponseFormGroup() {
		return new FormGroup<DeletePurchaseOrderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSupplierResponse {

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
	export interface DeleteSupplierResponseFormProperties {

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
	export function CreateDeleteSupplierResponseFormGroup() {
		return new FormGroup<DeleteSupplierResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTaxRateResponse {

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
	export interface DeleteTaxRateResponseFormProperties {

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
	export function CreateDeleteTaxRateResponseFormGroup() {
		return new FormGroup<DeleteTaxRateResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBalanceSheetResponse {

		/** Required */
		data: BalanceSheet;

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
	export interface GetBalanceSheetResponseFormProperties {

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
	export function CreateGetBalanceSheetResponseFormGroup() {
		return new FormGroup<GetBalanceSheetResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBillResponse {

		/** Required */
		data: Bill;

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
	export interface GetBillResponseFormProperties {

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
	export function CreateGetBillResponseFormGroup() {
		return new FormGroup<GetBillResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBillsResponse {

		/** Required */
		data: Array<Bill>;

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
	export interface GetBillsResponseFormProperties {

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
	export function CreateGetBillsResponseFormGroup() {
		return new FormGroup<GetBillsResponseFormProperties>({
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

	export interface GetCompanyInfoResponse {

		/** Required */
		data: CompanyInfo;

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
	export interface GetCompanyInfoResponseFormProperties {

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
	export function CreateGetCompanyInfoResponseFormGroup() {
		return new FormGroup<GetCompanyInfoResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCreditNoteResponse {

		/** Required */
		data: CreditNote;

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
	export interface GetCreditNoteResponseFormProperties {

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
	export function CreateGetCreditNoteResponseFormGroup() {
		return new FormGroup<GetCreditNoteResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCreditNotesResponse {

		/** Required */
		data: Array<CreditNote>;

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
	export interface GetCreditNotesResponseFormProperties {

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
	export function CreateGetCreditNotesResponseFormGroup() {
		return new FormGroup<GetCreditNotesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCustomerResponse {

		/** Required */
		data: Customer;

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
	export interface GetCustomerResponseFormProperties {

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
	export function CreateGetCustomerResponseFormGroup() {
		return new FormGroup<GetCustomerResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCustomersResponse {

		/** Required */
		data: Array<Customer>;

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
	export interface GetCustomersResponseFormProperties {

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
	export function CreateGetCustomersResponseFormGroup() {
		return new FormGroup<GetCustomersResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInvoiceItemResponse {

		/** Required */
		data: InvoiceItem;

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
	export interface GetInvoiceItemResponseFormProperties {

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
	export function CreateGetInvoiceItemResponseFormGroup() {
		return new FormGroup<GetInvoiceItemResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvoiceItem {
		active?: boolean | null;
		asset_account?: LinkedLedgerAccount;

		/** User defined item code */
		code?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** A short description of the item */
		description?: string | null;
		expense_account?: LinkedLedgerAccount;

		/** The ID of the item. */
		id?: string | null;
		income_account?: LinkedLedgerAccount;

		/**
		 * The date of opening balance if inventory item is tracked - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		inventory_date?: Date | null;

		/** Item name */
		name?: string | null;
		purchase_details?: InvoiceItemPurchase_details;

		/** Item is available for purchase transactions */
		purchased?: boolean | null;

		/** Type: double */
		quantity?: number | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;
		sales_details?: InvoiceItemSales_details;

		/** Item will be available on sales transactions */
		sold?: boolean | null;

		/** If true, transactions for this item are taxable */
		taxable?: boolean | null;

		/** Item is inventoried */
		tracked?: boolean | null;
		tracking_category?: LinkedTrackingCategory;

		/** Item type */
		type?: InvoiceItemType | null;

		/** Type: double */
		unit_price?: number | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface InvoiceItemFormProperties {
		active: FormControl<boolean | null | undefined>,

		/** User defined item code */
		code: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** A short description of the item */
		description: FormControl<string | null | undefined>,

		/** The ID of the item. */
		id: FormControl<string | null | undefined>,

		/**
		 * The date of opening balance if inventory item is tracked - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		inventory_date: FormControl<Date | null | undefined>,

		/** Item name */
		name: FormControl<string | null | undefined>,

		/** Item is available for purchase transactions */
		purchased: FormControl<boolean | null | undefined>,

		/** Type: double */
		quantity: FormControl<number | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** Item will be available on sales transactions */
		sold: FormControl<boolean | null | undefined>,

		/** If true, transactions for this item are taxable */
		taxable: FormControl<boolean | null | undefined>,

		/** Item is inventoried */
		tracked: FormControl<boolean | null | undefined>,

		/** Item type */
		type: FormControl<InvoiceItemType | null | undefined>,

		/** Type: double */
		unit_price: FormControl<number | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceItemFormGroup() {
		return new FormGroup<InvoiceItemFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inventory_date: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			purchased: new FormControl<boolean | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			sold: new FormControl<boolean | null | undefined>(undefined),
			taxable: new FormControl<boolean | null | undefined>(undefined),
			tracked: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<InvoiceItemType | null | undefined>(undefined),
			unit_price: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceItemPurchase_details {

		/** Amounts are including tax */
		tax_inclusive?: boolean | null;
		tax_rate?: LinkedTaxRate;

		/** Description of the unit type the item is sold as, ie: kg, hour. */
		unit_of_measure?: string | null;

		/** Type: double */
		unit_price?: number | null;
	}
	export interface InvoiceItemPurchase_detailsFormProperties {

		/** Amounts are including tax */
		tax_inclusive: FormControl<boolean | null | undefined>,

		/** Description of the unit type the item is sold as, ie: kg, hour. */
		unit_of_measure: FormControl<string | null | undefined>,

		/** Type: double */
		unit_price: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceItemPurchase_detailsFormGroup() {
		return new FormGroup<InvoiceItemPurchase_detailsFormProperties>({
			tax_inclusive: new FormControl<boolean | null | undefined>(undefined),
			unit_of_measure: new FormControl<string | null | undefined>(undefined),
			unit_price: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceItemSales_details {

		/** Amounts are including tax */
		tax_inclusive?: boolean | null;
		tax_rate?: LinkedTaxRate;

		/** Description of the unit type the item is sold as, ie: kg, hour. */
		unit_of_measure?: string | null;

		/** Type: double */
		unit_price?: number | null;
	}
	export interface InvoiceItemSales_detailsFormProperties {

		/** Amounts are including tax */
		tax_inclusive: FormControl<boolean | null | undefined>,

		/** Description of the unit type the item is sold as, ie: kg, hour. */
		unit_of_measure: FormControl<string | null | undefined>,

		/** Type: double */
		unit_price: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceItemSales_detailsFormGroup() {
		return new FormGroup<InvoiceItemSales_detailsFormProperties>({
			tax_inclusive: new FormControl<boolean | null | undefined>(undefined),
			unit_of_measure: new FormControl<string | null | undefined>(undefined),
			unit_price: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LinkedTrackingCategory {

		/** The unique identifier for the tracking category. */
		id?: string | null;

		/** The name of the tracking category. */
		name?: string | null;
	}
	export interface LinkedTrackingCategoryFormProperties {

		/** The unique identifier for the tracking category. */
		id: FormControl<string | null | undefined>,

		/** The name of the tracking category. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLinkedTrackingCategoryFormGroup() {
		return new FormGroup<LinkedTrackingCategoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvoiceItemType { inventory = 'inventory', service = 'service', other = 'other' }

	export interface GetInvoiceItemsResponse {

		/** Required */
		data: Array<InvoiceItem>;

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
	export interface GetInvoiceItemsResponseFormProperties {

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
	export function CreateGetInvoiceItemsResponseFormGroup() {
		return new FormGroup<GetInvoiceItemsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInvoiceResponse {

		/** Required */
		data: Invoice;

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
	export interface GetInvoiceResponseFormProperties {

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
	export function CreateGetInvoiceResponseFormGroup() {
		return new FormGroup<GetInvoiceResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Invoice {

		/** Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row. */
		accounting_by_row?: boolean | null;

		/**
		 * Balance of invoice due.
		 * Type: double
		 */
		balance?: number | null;
		bank_account?: BankAccount;
		billing_address?: Address;

		/** The channel through which the transaction is processed. */
		channel?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/**
		 * Currency Exchange Rate at the time entity was recorded/generated.
		 * Type: double
		 */
		currency_rate?: number | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The customer this entity is linked to. */
		customer?: LinkedCustomer;

		/** Customer memo */
		customer_memo?: string | null;

		/**
		 * Amount of deposit made to this invoice.
		 * Type: double
		 */
		deposit?: number | null;

		/**
		 * Discount amount applied to this invoice.
		 * Type: double
		 */
		discount_amount?: number | null;

		/**
		 * Discount percentage applied to this invoice.
		 * Type: double
		 */
		discount_percentage?: number | null;

		/** The third-party API ID of original entity */
		downstream_id?: string | null;

		/**
		 * The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		due_date?: Date | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/**
		 * Date invoice was issued - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		invoice_date?: Date | null;

		/** Invoice sent to contact/customer. */
		invoice_sent?: boolean | null;

		/** language code according to ISO 639-1. For the United States - EN */
		language?: string | null;
		ledger_account?: LinkedLedgerAccount;
		line_items?: Array<InvoiceLineItem>;

		/** Invoice number. */
		number?: string | null;

		/** Payment method used for the transaction, such as cash, credit card, bank transfer, or check */
		payment_method?: string | null;

		/** A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. */
		po_number?: string | null;

		/** Optional invoice reference. */
		reference?: string | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;
		shipping_address?: Address;

		/** URL link to a source document - shown as 'Go to [appName]' in the downstream app. Currently only supported for Xero. */
		source_document_url?: string | null;

		/** Invoice status */
		status?: BillStatus | null;

		/**
		 * Sub-total amount, normally before tax.
		 * Type: double
		 */
		sub_total?: number | null;

		/** Applicable tax id/code override if tax is not supplied on a line item basis. */
		tax_code?: string | null;

		/** Amounts are including tax */
		tax_inclusive?: boolean | null;

		/** Optional invoice template */
		template_id?: string | null;

		/** Terms of payment. */
		terms?: string | null;

		/**
		 * Total amount of invoice, including tax.
		 * Type: double
		 */
		total?: number | null;

		/**
		 * Total tax amount applied to this invoice.
		 * Type: double
		 */
		total_tax?: number | null;
		tracking_category?: LinkedTrackingCategory;

		/** Invoice type */
		type?: InvoiceType | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface InvoiceFormProperties {

		/** Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row. */
		accounting_by_row: FormControl<boolean | null | undefined>,

		/**
		 * Balance of invoice due.
		 * Type: double
		 */
		balance: FormControl<number | null | undefined>,

		/** The channel through which the transaction is processed. */
		channel: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/**
		 * Currency Exchange Rate at the time entity was recorded/generated.
		 * Type: double
		 */
		currency_rate: FormControl<number | null | undefined>,

		/** Customer memo */
		customer_memo: FormControl<string | null | undefined>,

		/**
		 * Amount of deposit made to this invoice.
		 * Type: double
		 */
		deposit: FormControl<number | null | undefined>,

		/**
		 * Discount amount applied to this invoice.
		 * Type: double
		 */
		discount_amount: FormControl<number | null | undefined>,

		/**
		 * Discount percentage applied to this invoice.
		 * Type: double
		 */
		discount_percentage: FormControl<number | null | undefined>,

		/** The third-party API ID of original entity */
		downstream_id: FormControl<string | null | undefined>,

		/**
		 * The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		due_date: FormControl<Date | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * Date invoice was issued - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		invoice_date: FormControl<Date | null | undefined>,

		/** Invoice sent to contact/customer. */
		invoice_sent: FormControl<boolean | null | undefined>,

		/** language code according to ISO 639-1. For the United States - EN */
		language: FormControl<string | null | undefined>,

		/** Invoice number. */
		number: FormControl<string | null | undefined>,

		/** Payment method used for the transaction, such as cash, credit card, bank transfer, or check */
		payment_method: FormControl<string | null | undefined>,

		/** A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. */
		po_number: FormControl<string | null | undefined>,

		/** Optional invoice reference. */
		reference: FormControl<string | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** URL link to a source document - shown as 'Go to [appName]' in the downstream app. Currently only supported for Xero. */
		source_document_url: FormControl<string | null | undefined>,

		/** Invoice status */
		status: FormControl<BillStatus | null | undefined>,

		/**
		 * Sub-total amount, normally before tax.
		 * Type: double
		 */
		sub_total: FormControl<number | null | undefined>,

		/** Applicable tax id/code override if tax is not supplied on a line item basis. */
		tax_code: FormControl<string | null | undefined>,

		/** Amounts are including tax */
		tax_inclusive: FormControl<boolean | null | undefined>,

		/** Optional invoice template */
		template_id: FormControl<string | null | undefined>,

		/** Terms of payment. */
		terms: FormControl<string | null | undefined>,

		/**
		 * Total amount of invoice, including tax.
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Total tax amount applied to this invoice.
		 * Type: double
		 */
		total_tax: FormControl<number | null | undefined>,

		/** Invoice type */
		type: FormControl<InvoiceType | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceFormGroup() {
		return new FormGroup<InvoiceFormProperties>({
			accounting_by_row: new FormControl<boolean | null | undefined>(undefined),
			balance: new FormControl<number | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			currency_rate: new FormControl<number | null | undefined>(undefined),
			customer_memo: new FormControl<string | null | undefined>(undefined),
			deposit: new FormControl<number | null | undefined>(undefined),
			discount_amount: new FormControl<number | null | undefined>(undefined),
			discount_percentage: new FormControl<number | null | undefined>(undefined),
			downstream_id: new FormControl<string | null | undefined>(undefined),
			due_date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			invoice_date: new FormControl<Date | null | undefined>(undefined),
			invoice_sent: new FormControl<boolean | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			payment_method: new FormControl<string | null | undefined>(undefined),
			po_number: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			source_document_url: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BillStatus | null | undefined>(undefined),
			sub_total: new FormControl<number | null | undefined>(undefined),
			tax_code: new FormControl<string | null | undefined>(undefined),
			tax_inclusive: new FormControl<boolean | null | undefined>(undefined),
			template_id: new FormControl<string | null | undefined>(undefined),
			terms: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			total_tax: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<InvoiceType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvoiceType { standard = 'standard', credit = 'credit', service = 'service', product = 'product', supplier = 'supplier', other = 'other' }

	export interface GetInvoicesResponse {

		/** Required */
		data: Array<Invoice>;

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
	export interface GetInvoicesResponseFormProperties {

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
	export function CreateGetInvoicesResponseFormGroup() {
		return new FormGroup<GetInvoicesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetJournalEntriesResponse {

		/** Required */
		data: Array<JournalEntry>;

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
	export interface GetJournalEntriesResponseFormProperties {

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
	export function CreateGetJournalEntriesResponseFormGroup() {
		return new FormGroup<GetJournalEntriesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JournalEntry {

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/**
		 * Currency Exchange Rate at the time entity was recorded/generated.
		 * Type: double
		 */
		currency_rate?: number | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** A unique identifier for an object. */
		id?: string | null;

		/** Journal symbol of the entry. For example IND for indirect costs */
		journal_symbol?: string | null;

		/**
		 * Requires a minimum of 2 line items that sum to 0
		 * Minimum items: 2
		 */
		line_items?: Array<JournalEntryLineItem>;

		/** Reference for the journal entry. */
		memo?: string | null;

		/** Journal entry number. */
		number?: string | null;

		/** This is the date on which the journal entry was added. This can be different from the creation date and can also be backdated. */
		posted_at?: Date | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/** Applicable tax id/code override if tax is not supplied on a line item basis. */
		tax_code?: string | null;

		/** The specific category of tax associated with a transaction like sales or purchase */
		tax_type?: string | null;

		/** Journal entry title */
		title?: string | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface JournalEntryFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/**
		 * Currency Exchange Rate at the time entity was recorded/generated.
		 * Type: double
		 */
		currency_rate: FormControl<number | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** Journal symbol of the entry. For example IND for indirect costs */
		journal_symbol: FormControl<string | null | undefined>,

		/** Reference for the journal entry. */
		memo: FormControl<string | null | undefined>,

		/** Journal entry number. */
		number: FormControl<string | null | undefined>,

		/** This is the date on which the journal entry was added. This can be different from the creation date and can also be backdated. */
		posted_at: FormControl<Date | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** Applicable tax id/code override if tax is not supplied on a line item basis. */
		tax_code: FormControl<string | null | undefined>,

		/** The specific category of tax associated with a transaction like sales or purchase */
		tax_type: FormControl<string | null | undefined>,

		/** Journal entry title */
		title: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateJournalEntryFormGroup() {
		return new FormGroup<JournalEntryFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			currency_rate: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			journal_symbol: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			posted_at: new FormControl<Date | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			tax_code: new FormControl<string | null | undefined>(undefined),
			tax_type: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JournalEntryLineItem {

		/** The customer this entity is linked to. */
		customer?: LinkedCustomer;

		/** A unique identifier for an object. */
		department_id?: string | null;

		/** User defined description */
		description?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** Required */
		ledger_account: LinkedLedgerAccount;

		/** A unique identifier for an object. */
		location_id?: string | null;

		/**
		 * Sub-total amount, normally before tax.
		 * Type: double
		 */
		sub_total?: number | null;

		/** The supplier this entity is linked to. */
		supplier?: LinkedSupplier;

		/**
		 * Tax amount
		 * Type: double
		 */
		tax_amount?: number | null;
		tax_rate?: LinkedTaxRate;

		/**
		 * Debit entries are considered positive, and credit entries are considered negative.
		 * Type: double
		 */
		total_amount?: number | null;
		tracking_category?: LinkedTrackingCategory;

		/**
		 * Debit entries are considered positive, and credit entries are considered negative.
		 * Required
		 */
		type: JournalEntryLineItemType;
	}
	export interface JournalEntryLineItemFormProperties {

		/** A unique identifier for an object. */
		department_id: FormControl<string | null | undefined>,

		/** User defined description */
		description: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		location_id: FormControl<string | null | undefined>,

		/**
		 * Sub-total amount, normally before tax.
		 * Type: double
		 */
		sub_total: FormControl<number | null | undefined>,

		/**
		 * Tax amount
		 * Type: double
		 */
		tax_amount: FormControl<number | null | undefined>,

		/**
		 * Debit entries are considered positive, and credit entries are considered negative.
		 * Type: double
		 */
		total_amount: FormControl<number | null | undefined>,

		/**
		 * Debit entries are considered positive, and credit entries are considered negative.
		 * Required
		 */
		type: FormControl<JournalEntryLineItemType | null | undefined>,
	}
	export function CreateJournalEntryLineItemFormGroup() {
		return new FormGroup<JournalEntryLineItemFormProperties>({
			department_id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location_id: new FormControl<string | null | undefined>(undefined),
			sub_total: new FormControl<number | null | undefined>(undefined),
			tax_amount: new FormControl<number | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<JournalEntryLineItemType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JournalEntryLineItemType { debit = 'debit', credit = 'credit' }

	export interface GetJournalEntryResponse {

		/** Required */
		data: JournalEntry;

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
	export interface GetJournalEntryResponseFormProperties {

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
	export function CreateGetJournalEntryResponseFormGroup() {
		return new FormGroup<GetJournalEntryResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLedgerAccountResponse {

		/** Required */
		data: LedgerAccount;

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
	export interface GetLedgerAccountResponseFormProperties {

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
	export function CreateGetLedgerAccountResponseFormGroup() {
		return new FormGroup<GetLedgerAccountResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LedgerAccount {

		/** Whether the account is active or not. */
		active?: boolean | null;
		bank_account?: BankAccount;

		/** The categories of the account. */
		LedgerAccountCategories?: Array<LedgerAccountCategories>;

		/** The classification of account. */
		classification?: LedgerAccountClassification | null;

		/** The code assigned to the account. */
		code?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/**
		 * The current balance of the account.
		 * Type: double
		 */
		current_balance?: number | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The description of the account. */
		description?: string | null;

		/** The human readable display ID used when displaying the account */
		display_id?: string | null;

		/** The fully qualified name of the account. */
		fully_qualified_name?: string | null;

		/** Whether the account is a header or not. */
		header?: boolean | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/**
		 * Reconciliation Date means the last calendar day of each Reconciliation Period.
		 * Type: DateOnly
		 */
		last_reconciliation_date?: Date | null;

		/** Type: double */
		level?: number | null;

		/** The name of the account. */
		name?: string | null;

		/** The nominal code of the ledger account. */
		nominal_code?: string | null;

		/**
		 * The opening balance of the account.
		 * Type: double
		 */
		opening_balance?: number | null;
		parent_account?: LedgerAccountParent_account;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/** The status of the account. */
		status?: TaxRateStatus | null;

		/** Whether the account is a sub account or not. */
		sub_account?: boolean | null;

		/** The sub accounts of the account. */
		LedgerAccountSub_accounts?: Array<LedgerAccountSub_accounts>;

		/** The sub type of account. */
		sub_type?: string | null;
		tax_rate?: LinkedTaxRate;

		/** The tax type of the account. */
		tax_type?: string | null;

		/** The type of account. */
		type?: LedgerAccountType | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface LedgerAccountFormProperties {

		/** Whether the account is active or not. */
		active: FormControl<boolean | null | undefined>,

		/** The classification of account. */
		classification: FormControl<LedgerAccountClassification | null | undefined>,

		/** The code assigned to the account. */
		code: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/**
		 * The current balance of the account.
		 * Type: double
		 */
		current_balance: FormControl<number | null | undefined>,

		/** The description of the account. */
		description: FormControl<string | null | undefined>,

		/** The human readable display ID used when displaying the account */
		display_id: FormControl<string | null | undefined>,

		/** The fully qualified name of the account. */
		fully_qualified_name: FormControl<string | null | undefined>,

		/** Whether the account is a header or not. */
		header: FormControl<boolean | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * Reconciliation Date means the last calendar day of each Reconciliation Period.
		 * Type: DateOnly
		 */
		last_reconciliation_date: FormControl<Date | null | undefined>,

		/** Type: double */
		level: FormControl<number | null | undefined>,

		/** The name of the account. */
		name: FormControl<string | null | undefined>,

		/** The nominal code of the ledger account. */
		nominal_code: FormControl<string | null | undefined>,

		/**
		 * The opening balance of the account.
		 * Type: double
		 */
		opening_balance: FormControl<number | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** The status of the account. */
		status: FormControl<TaxRateStatus | null | undefined>,

		/** Whether the account is a sub account or not. */
		sub_account: FormControl<boolean | null | undefined>,

		/** The sub type of account. */
		sub_type: FormControl<string | null | undefined>,

		/** The tax type of the account. */
		tax_type: FormControl<string | null | undefined>,

		/** The type of account. */
		type: FormControl<LedgerAccountType | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateLedgerAccountFormGroup() {
		return new FormGroup<LedgerAccountFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			classification: new FormControl<LedgerAccountClassification | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			current_balance: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			display_id: new FormControl<string | null | undefined>(undefined),
			fully_qualified_name: new FormControl<string | null | undefined>(undefined),
			header: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_reconciliation_date: new FormControl<Date | null | undefined>(undefined),
			level: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nominal_code: new FormControl<string | null | undefined>(undefined),
			opening_balance: new FormControl<number | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TaxRateStatus | null | undefined>(undefined),
			sub_account: new FormControl<boolean | null | undefined>(undefined),
			sub_type: new FormControl<string | null | undefined>(undefined),
			tax_type: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<LedgerAccountType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LedgerAccountCategories {
		id?: string | null;

		/** The name of the category. */
		name?: string | null;
	}
	export interface LedgerAccountCategoriesFormProperties {
		id: FormControl<string | null | undefined>,

		/** The name of the category. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLedgerAccountCategoriesFormGroup() {
		return new FormGroup<LedgerAccountCategoriesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LedgerAccountClassification { asset = 'asset', equity = 'equity', expense = 'expense', liability = 'liability', revenue = 'revenue', income = 'income', other_income = 'other_income', other_expense = 'other_expense', costs_of_sales = 'costs_of_sales' }

	export interface LedgerAccountParent_account {

		/** The human readable display ID used when displaying the parent account */
		display_id?: string | null;

		/** The ID of the parent account. */
		id?: string | null;

		/** The name of the parent account. */
		name?: string | null;
	}
	export interface LedgerAccountParent_accountFormProperties {

		/** The human readable display ID used when displaying the parent account */
		display_id: FormControl<string | null | undefined>,

		/** The ID of the parent account. */
		id: FormControl<string | null | undefined>,

		/** The name of the parent account. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLedgerAccountParent_accountFormGroup() {
		return new FormGroup<LedgerAccountParent_accountFormProperties>({
			display_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LedgerAccountSub_accounts {

		/** The name of the sub account. */
		account_sub_name?: string | null;

		/** The ID of the sub account. */
		id?: string | null;
	}
	export interface LedgerAccountSub_accountsFormProperties {

		/** The name of the sub account. */
		account_sub_name: FormControl<string | null | undefined>,

		/** The ID of the sub account. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateLedgerAccountSub_accountsFormGroup() {
		return new FormGroup<LedgerAccountSub_accountsFormProperties>({
			account_sub_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LedgerAccountType { accounts_receivable = 'accounts_receivable', revenue = 'revenue', sales = 'sales', other_income = 'other_income', bank = 'bank', current_asset = 'current_asset', fixed_asset = 'fixed_asset', non_current_asset = 'non_current_asset', other_asset = 'other_asset', balancesheet = 'balancesheet', equity = 'equity', expense = 'expense', other_expense = 'other_expense', costs_of_sales = 'costs_of_sales', accounts_payable = 'accounts_payable', credit_card = 'credit_card', current_liability = 'current_liability', non_current_liability = 'non_current_liability', other_liability = 'other_liability', other = 'other' }

	export interface GetLedgerAccountsResponse {

		/** Required */
		data: Array<LedgerAccount>;

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
	export interface GetLedgerAccountsResponseFormProperties {

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
	export function CreateGetLedgerAccountsResponseFormGroup() {
		return new FormGroup<GetLedgerAccountsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPaymentResponse {

		/** Required */
		data: Payment;

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
	export interface GetPaymentResponseFormProperties {

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
	export function CreateGetPaymentResponseFormGroup() {
		return new FormGroup<GetPaymentResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Payment {
		account?: LinkedLedgerAccount;

		/** Unique identifier for the account to allocate payment to. */
		accounts_receivable_account_id?: string | null;

		/** Type of accounts receivable account. */
		accounts_receivable_account_type?: string | null;
		PaymentAllocations?: Array<PaymentAllocations>;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/**
		 * Currency Exchange Rate at the time entity was recorded/generated.
		 * Type: double
		 */
		currency_rate?: number | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The customer this entity is linked to. */
		customer?: LinkedCustomer;

		/** Payment id to be displayed. */
		display_id?: string | null;

		/** The third-party API ID of original entity */
		downstream_id?: string | null;

		/**
		 * Unique identifier representing the entity
		 * Required
		 */
		id: string;

		/** Optional note to be associated with the payment. */
		note?: string | null;

		/** Payment method name */
		payment_method?: string | null;

		/** Unique identifier for the payment method. */
		payment_method_id?: string | null;

		/** Optional reference message returned by payment method on processing */
		payment_method_reference?: string | null;

		/** Payment has been reconciled */
		reconciled?: boolean | null;

		/** Optional payment reference message ie: Debit remittance detail. */
		reference?: string | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/** Status of payment */
		status?: PaymentStatus | null;

		/** The supplier this entity is linked to. */
		supplier?: LinkedSupplier;

		/**
		 * Amount of payment
		 * Required
		 * Type: double
		 */
		total_amount: number;

		/**
		 * Date transaction was entered - YYYY:MM::DDThh:mm:ss.sTZD
		 * Required
		 */
		transaction_date: Date;

		/** Type of payment */
		type?: PaymentType | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface PaymentFormProperties {

		/** Unique identifier for the account to allocate payment to. */
		accounts_receivable_account_id: FormControl<string | null | undefined>,

		/** Type of accounts receivable account. */
		accounts_receivable_account_type: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/**
		 * Currency Exchange Rate at the time entity was recorded/generated.
		 * Type: double
		 */
		currency_rate: FormControl<number | null | undefined>,

		/** Payment id to be displayed. */
		display_id: FormControl<string | null | undefined>,

		/** The third-party API ID of original entity */
		downstream_id: FormControl<string | null | undefined>,

		/**
		 * Unique identifier representing the entity
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Optional note to be associated with the payment. */
		note: FormControl<string | null | undefined>,

		/** Payment method name */
		payment_method: FormControl<string | null | undefined>,

		/** Unique identifier for the payment method. */
		payment_method_id: FormControl<string | null | undefined>,

		/** Optional reference message returned by payment method on processing */
		payment_method_reference: FormControl<string | null | undefined>,

		/** Payment has been reconciled */
		reconciled: FormControl<boolean | null | undefined>,

		/** Optional payment reference message ie: Debit remittance detail. */
		reference: FormControl<string | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** Status of payment */
		status: FormControl<PaymentStatus | null | undefined>,

		/**
		 * Amount of payment
		 * Required
		 * Type: double
		 */
		total_amount: FormControl<number | null | undefined>,

		/**
		 * Date transaction was entered - YYYY:MM::DDThh:mm:ss.sTZD
		 * Required
		 */
		transaction_date: FormControl<Date | null | undefined>,

		/** Type of payment */
		type: FormControl<PaymentType | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreatePaymentFormGroup() {
		return new FormGroup<PaymentFormProperties>({
			accounts_receivable_account_id: new FormControl<string | null | undefined>(undefined),
			accounts_receivable_account_type: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			currency_rate: new FormControl<number | null | undefined>(undefined),
			display_id: new FormControl<string | null | undefined>(undefined),
			downstream_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined),
			payment_method: new FormControl<string | null | undefined>(undefined),
			payment_method_id: new FormControl<string | null | undefined>(undefined),
			payment_method_reference: new FormControl<string | null | undefined>(undefined),
			reconciled: new FormControl<boolean | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PaymentStatus | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			transaction_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PaymentType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentAllocations {

		/**
		 * Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.
		 * Type: double
		 */
		amount?: number | null;
		code?: string | null;

		/** Unique identifier of entity this payment should be attributed to. */
		id?: string | null;

		/** Type of entity this payment should be attributed to. */
		type?: CreditNoteAllocationsType | null;
	}
	export interface PaymentAllocationsFormProperties {

		/**
		 * Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,
		code: FormControl<string | null | undefined>,

		/** Unique identifier of entity this payment should be attributed to. */
		id: FormControl<string | null | undefined>,

		/** Type of entity this payment should be attributed to. */
		type: FormControl<CreditNoteAllocationsType | null | undefined>,
	}
	export function CreatePaymentAllocationsFormGroup() {
		return new FormGroup<PaymentAllocationsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CreditNoteAllocationsType | null | undefined>(undefined),
		});

	}

	export enum PaymentStatus { authorised = 'authorised', paid = 'paid', voided = 'voided', deleted = 'deleted' }

	export enum PaymentType { accounts_receivable = 'accounts_receivable', accounts_payable = 'accounts_payable', accounts_receivable_credit = 'accounts_receivable_credit', accounts_payable_credit = 'accounts_payable_credit', accounts_receivable_overpayment = 'accounts_receivable_overpayment', accounts_payable_overpayment = 'accounts_payable_overpayment', accounts_receivable_prepayment = 'accounts_receivable_prepayment', accounts_payable_prepayment = 'accounts_payable_prepayment' }

	export interface GetPaymentsResponse {

		/** Required */
		data: Array<Payment>;

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
	export interface GetPaymentsResponseFormProperties {

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
	export function CreateGetPaymentsResponseFormGroup() {
		return new FormGroup<GetPaymentsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProfitAndLossResponse {

		/** Required */
		data: ProfitAndLoss;

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
	export interface GetProfitAndLossResponseFormProperties {

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
	export function CreateGetProfitAndLossResponseFormGroup() {
		return new FormGroup<GetProfitAndLossResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfitAndLoss {

		/** Required */
		currency: string;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Customer id */
		customer_id?: string | null;

		/** The start date of the report */
		end_date?: string | null;

		/** Required */
		expenses: ProfitAndLossExpenses;
		gross_profit?: ProfitAndLossGross_profit;

		/** A unique identifier for an object. */
		id?: string | null;

		/** Required */
		income: ProfitAndLossIncome;
		net_income?: ProfitAndLossNet_income;
		net_operating_income?: ProfitAndLossNet_operating_income;

		/**
		 * The name of the report
		 * Required
		 */
		report_name: string;

		/** The start date of the report */
		start_date?: string | null;
	}
	export interface ProfitAndLossFormProperties {

		/** Required */
		currency: FormControl<string | null | undefined>,

		/** Customer id */
		customer_id: FormControl<string | null | undefined>,

		/** The start date of the report */
		end_date: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the report
		 * Required
		 */
		report_name: FormControl<string | null | undefined>,

		/** The start date of the report */
		start_date: FormControl<string | null | undefined>,
	}
	export function CreateProfitAndLossFormGroup() {
		return new FormGroup<ProfitAndLossFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customer_id: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
			id: new FormControl<string | null | undefined>(undefined),
			report_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}$')]),
		});

	}

	export interface ProfitAndLossExpenses {

		/** Required */
		records: Array<string>;

		/**
		 * Total expense
		 * Required
		 * Type: double
		 */
		total: number;
	}
	export interface ProfitAndLossExpensesFormProperties {

		/**
		 * Total expense
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateProfitAndLossExpensesFormGroup() {
		return new FormGroup<ProfitAndLossExpensesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfitAndLossGross_profit {

		/** Required */
		records: Array<string>;

		/**
		 * Total gross profit
		 * Required
		 * Type: double
		 */
		total: number;
	}
	export interface ProfitAndLossGross_profitFormProperties {

		/**
		 * Total gross profit
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateProfitAndLossGross_profitFormGroup() {
		return new FormGroup<ProfitAndLossGross_profitFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfitAndLossIncome {

		/** Required */
		records: Array<string>;

		/**
		 * Total income
		 * Required
		 * Type: double
		 */
		total: number;
	}
	export interface ProfitAndLossIncomeFormProperties {

		/**
		 * Total income
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateProfitAndLossIncomeFormGroup() {
		return new FormGroup<ProfitAndLossIncomeFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfitAndLossNet_income {

		/** Required */
		records: Array<string>;

		/**
		 * Total net income
		 * Required
		 * Type: double
		 */
		total: number;
	}
	export interface ProfitAndLossNet_incomeFormProperties {

		/**
		 * Total net income
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateProfitAndLossNet_incomeFormGroup() {
		return new FormGroup<ProfitAndLossNet_incomeFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfitAndLossNet_operating_income {

		/** Required */
		records: Array<string>;

		/**
		 * Total net operating income
		 * Required
		 * Type: double
		 */
		total: number;
	}
	export interface ProfitAndLossNet_operating_incomeFormProperties {

		/**
		 * Total net operating income
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateProfitAndLossNet_operating_incomeFormGroup() {
		return new FormGroup<ProfitAndLossNet_operating_incomeFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPurchaseOrderResponse {

		/** Required */
		data: PurchaseOrder;

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
	export interface GetPurchaseOrderResponseFormProperties {

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
	export function CreateGetPurchaseOrderResponseFormGroup() {
		return new FormGroup<GetPurchaseOrderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PurchaseOrder {

		/** Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row. */
		accounting_by_row?: boolean | null;
		bank_account?: BankAccount;

		/** The channel through which the transaction is processed. */
		channel?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/**
		 * Currency Exchange Rate at the time entity was recorded/generated.
		 * Type: double
		 */
		currency_rate?: number | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/**
		 * The date on which the purchase order is to be delivered - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		delivery_date?: Date | null;

		/**
		 * Discount percentage applied to this transaction.
		 * Type: double
		 */
		discount_percentage?: number | null;

		/** The third-party API ID of original entity */
		downstream_id?: string | null;

		/**
		 * The due date is the date on which a payment is scheduled to be received - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		due_date?: Date | null;

		/**
		 * The date on which the order is expected to arrive - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		expected_arrival_date?: Date | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/**
		 * Date purchase order was issued - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		issued_date?: Date | null;
		ledger_account?: LinkedLedgerAccount;
		line_items?: Array<InvoiceLineItem>;

		/** Message for the supplier. This text appears on the Purchase Order. */
		memo?: string | null;

		/** Payment method used for the transaction, such as cash, credit card, bank transfer, or check */
		payment_method?: string | null;

		/** A PO Number uniquely identifies a purchase order and is generally defined by the buyer. */
		po_number?: string | null;

		/** Optional purchase order reference. */
		reference?: string | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;
		shipping_address?: Address;
		status?: PurchaseOrderStatus | null;

		/**
		 * Sub-total amount, normally before tax.
		 * Type: double
		 */
		sub_total?: number | null;

		/** The supplier this entity is linked to. */
		supplier?: LinkedSupplier;

		/** Applicable tax id/code override if tax is not supplied on a line item basis. */
		tax_code?: string | null;

		/** Amounts are including tax */
		tax_inclusive?: boolean | null;

		/** Optional purchase order template */
		template_id?: string | null;

		/**
		 * Total amount of invoice, including tax.
		 * Type: double
		 */
		total?: number | null;

		/**
		 * Total tax amount applied to this invoice.
		 * Type: double
		 */
		total_tax?: number | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface PurchaseOrderFormProperties {

		/** Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row. */
		accounting_by_row: FormControl<boolean | null | undefined>,

		/** The channel through which the transaction is processed. */
		channel: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/**
		 * Currency Exchange Rate at the time entity was recorded/generated.
		 * Type: double
		 */
		currency_rate: FormControl<number | null | undefined>,

		/**
		 * The date on which the purchase order is to be delivered - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		delivery_date: FormControl<Date | null | undefined>,

		/**
		 * Discount percentage applied to this transaction.
		 * Type: double
		 */
		discount_percentage: FormControl<number | null | undefined>,

		/** The third-party API ID of original entity */
		downstream_id: FormControl<string | null | undefined>,

		/**
		 * The due date is the date on which a payment is scheduled to be received - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		due_date: FormControl<Date | null | undefined>,

		/**
		 * The date on which the order is expected to arrive - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		expected_arrival_date: FormControl<Date | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * Date purchase order was issued - YYYY-MM-DD.
		 * Type: DateOnly
		 */
		issued_date: FormControl<Date | null | undefined>,

		/** Message for the supplier. This text appears on the Purchase Order. */
		memo: FormControl<string | null | undefined>,

		/** Payment method used for the transaction, such as cash, credit card, bank transfer, or check */
		payment_method: FormControl<string | null | undefined>,

		/** A PO Number uniquely identifies a purchase order and is generally defined by the buyer. */
		po_number: FormControl<string | null | undefined>,

		/** Optional purchase order reference. */
		reference: FormControl<string | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,
		status: FormControl<PurchaseOrderStatus | null | undefined>,

		/**
		 * Sub-total amount, normally before tax.
		 * Type: double
		 */
		sub_total: FormControl<number | null | undefined>,

		/** Applicable tax id/code override if tax is not supplied on a line item basis. */
		tax_code: FormControl<string | null | undefined>,

		/** Amounts are including tax */
		tax_inclusive: FormControl<boolean | null | undefined>,

		/** Optional purchase order template */
		template_id: FormControl<string | null | undefined>,

		/**
		 * Total amount of invoice, including tax.
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Total tax amount applied to this invoice.
		 * Type: double
		 */
		total_tax: FormControl<number | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOrderFormGroup() {
		return new FormGroup<PurchaseOrderFormProperties>({
			accounting_by_row: new FormControl<boolean | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			currency_rate: new FormControl<number | null | undefined>(undefined),
			delivery_date: new FormControl<Date | null | undefined>(undefined),
			discount_percentage: new FormControl<number | null | undefined>(undefined),
			downstream_id: new FormControl<string | null | undefined>(undefined),
			due_date: new FormControl<Date | null | undefined>(undefined),
			expected_arrival_date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			issued_date: new FormControl<Date | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			payment_method: new FormControl<string | null | undefined>(undefined),
			po_number: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PurchaseOrderStatus | null | undefined>(undefined),
			sub_total: new FormControl<number | null | undefined>(undefined),
			tax_code: new FormControl<string | null | undefined>(undefined),
			tax_inclusive: new FormControl<boolean | null | undefined>(undefined),
			template_id: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			total_tax: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PurchaseOrderStatus { draft = 'draft', open = 'open', closed = 'closed', deleted = 'deleted', billed = 'billed', other = 'other' }

	export interface GetPurchaseOrdersResponse {

		/** Required */
		data: Array<PurchaseOrder>;

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
	export interface GetPurchaseOrdersResponseFormProperties {

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
	export function CreateGetPurchaseOrdersResponseFormGroup() {
		return new FormGroup<GetPurchaseOrdersResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSupplierResponse {

		/** Required */
		data: Supplier;

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
	export interface GetSupplierResponseFormProperties {

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
	export function CreateGetSupplierResponseFormGroup() {
		return new FormGroup<GetSupplierResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Supplier {
		account?: LinkedLedgerAccount;
		addresses?: Array<Address>;
		bank_accounts?: Array<BankAccount>;

		/** The channel through which the transaction is processed. */
		channel?: string | null;

		/** The name of the company. */
		company_name?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Display ID */
		display_id?: string | null;

		/** Display name */
		display_name?: string | null;

		/** The third-party API ID of original entity */
		downstream_id?: string | null;
		emails?: Array<Email>;

		/** The first name of the person. */
		first_name?: string | null;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/** Is this an individual or business supplier */
		individual?: boolean | null;

		/** The last name of the person. */
		last_name?: string | null;

		/** Middle name of the person. */
		middle_name?: string | null;

		/** Some notes about this supplier */
		notes?: string | null;

		/** Payment method used for the transaction, such as cash, credit card, bank transfer, or check */
		payment_method?: string | null;
		phone_numbers?: Array<PhoneNumber>;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;

		/** Supplier status */
		status?: AccountingCustomerStatus | null;
		suffix?: string | null;
		tax_number?: string | null;
		tax_rate?: LinkedTaxRate;

		/** The job title of the person. */
		title?: string | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
		websites?: Array<Website>;
	}
	export interface SupplierFormProperties {

		/** The channel through which the transaction is processed. */
		channel: FormControl<string | null | undefined>,

		/** The name of the company. */
		company_name: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** Display ID */
		display_id: FormControl<string | null | undefined>,

		/** Display name */
		display_name: FormControl<string | null | undefined>,

		/** The third-party API ID of original entity */
		downstream_id: FormControl<string | null | undefined>,

		/** The first name of the person. */
		first_name: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Is this an individual or business supplier */
		individual: FormControl<boolean | null | undefined>,

		/** The last name of the person. */
		last_name: FormControl<string | null | undefined>,

		/** Middle name of the person. */
		middle_name: FormControl<string | null | undefined>,

		/** Some notes about this supplier */
		notes: FormControl<string | null | undefined>,

		/** Payment method used for the transaction, such as cash, credit card, bank transfer, or check */
		payment_method: FormControl<string | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,

		/** Supplier status */
		status: FormControl<AccountingCustomerStatus | null | undefined>,
		suffix: FormControl<string | null | undefined>,
		tax_number: FormControl<string | null | undefined>,

		/** The job title of the person. */
		title: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateSupplierFormGroup() {
		return new FormGroup<SupplierFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			display_id: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			downstream_id: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			individual: new FormControl<boolean | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			payment_method: new FormControl<string | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AccountingCustomerStatus | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
			tax_number: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSuppliersResponse {

		/** Required */
		data: Array<Supplier>;

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
	export interface GetSuppliersResponseFormProperties {

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
	export function CreateGetSuppliersResponseFormGroup() {
		return new FormGroup<GetSuppliersResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTaxRateResponse {

		/** Required */
		data: TaxRate;

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
	export interface GetTaxRateResponseFormProperties {

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
	export function CreateGetTaxRateResponseFormGroup() {
		return new FormGroup<GetTaxRateResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTaxRatesResponse {

		/** Required */
		data: Array<TaxRate>;

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
	export interface GetTaxRatesResponseFormProperties {

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
	export function CreateGetTaxRatesResponseFormGroup() {
		return new FormGroup<GetTaxRatesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvoiceItemAssetAccount {

		/** The code assigned to the account. */
		code?: string | null;

		/** The unique identifier for the account. */
		id?: string | null;

		/** The name of the account. */
		name?: string | null;

		/** The nominal code of the account. */
		nominal_code?: string | null;
	}
	export interface InvoiceItemAssetAccountFormProperties {

		/** The code assigned to the account. */
		code: FormControl<string | null | undefined>,

		/** The unique identifier for the account. */
		id: FormControl<string | null | undefined>,

		/** The name of the account. */
		name: FormControl<string | null | undefined>,

		/** The nominal code of the account. */
		nominal_code: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceItemAssetAccountFormGroup() {
		return new FormGroup<InvoiceItemAssetAccountFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nominal_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceItemExpenseAccount {

		/** The code assigned to the account. */
		code?: string | null;

		/** The unique identifier for the account. */
		id?: string | null;

		/** The name of the account. */
		name?: string | null;

		/** The nominal code of the account. */
		nominal_code?: string | null;
	}
	export interface InvoiceItemExpenseAccountFormProperties {

		/** The code assigned to the account. */
		code: FormControl<string | null | undefined>,

		/** The unique identifier for the account. */
		id: FormControl<string | null | undefined>,

		/** The name of the account. */
		name: FormControl<string | null | undefined>,

		/** The nominal code of the account. */
		nominal_code: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceItemExpenseAccountFormGroup() {
		return new FormGroup<InvoiceItemExpenseAccountFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nominal_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceItemIncomeAccount {

		/** The code assigned to the account. */
		code?: string | null;

		/** The unique identifier for the account. */
		id?: string | null;

		/** The name of the account. */
		name?: string | null;

		/** The nominal code of the account. */
		nominal_code?: string | null;
	}
	export interface InvoiceItemIncomeAccountFormProperties {

		/** The code assigned to the account. */
		code: FormControl<string | null | undefined>,

		/** The unique identifier for the account. */
		id: FormControl<string | null | undefined>,

		/** The name of the account. */
		name: FormControl<string | null | undefined>,

		/** The nominal code of the account. */
		nominal_code: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceItemIncomeAccountFormGroup() {
		return new FormGroup<InvoiceItemIncomeAccountFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nominal_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceItemsFilter {

		/** Name of Invoice Items to search for */
		name?: string | null;
	}
	export interface InvoiceItemsFilterFormProperties {

		/** Name of Invoice Items to search for */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceItemsFilterFormGroup() {
		return new FormGroup<InvoiceItemsFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoicesSort {

		/** The field on which to sort the Invoices */
		by?: BillsSortBy | null;

		/** The direction in which to sort the results */
		direction?: BillsSortDirection | null;
	}
	export interface InvoicesSortFormProperties {

		/** The field on which to sort the Invoices */
		by: FormControl<BillsSortBy | null | undefined>,

		/** The direction in which to sort the results */
		direction: FormControl<BillsSortDirection | null | undefined>,
	}
	export function CreateInvoicesSortFormGroup() {
		return new FormGroup<InvoicesSortFormProperties>({
			by: new FormControl<BillsSortBy | null | undefined>(undefined),
			direction: new FormControl<BillsSortDirection | null | undefined>(undefined),
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

	export interface PaymentsFilter {

		/** Invoice number for payments to filter on */
		invoice_number?: string | null;
	}
	export interface PaymentsFilterFormProperties {

		/** Invoice number for payments to filter on */
		invoice_number: FormControl<string | null | undefined>,
	}
	export function CreatePaymentsFilterFormGroup() {
		return new FormGroup<PaymentsFilterFormProperties>({
			invoice_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProfitAndLossFilter {

		/** Filter by customer id */
		customer_id?: string | null;

		/** Filter by end date. If end date is given, start date is required. */
		end_date?: string | null;

		/** Filter by start date. If start date is given, end date is required. */
		start_date?: string | null;
	}
	export interface ProfitAndLossFilterFormProperties {

		/** Filter by customer id */
		customer_id: FormControl<string | null | undefined>,

		/** Filter by end date. If end date is given, start date is required. */
		end_date: FormControl<string | null | undefined>,

		/** Filter by start date. If start date is given, end date is required. */
		start_date: FormControl<string | null | undefined>,
	}
	export function CreateProfitAndLossFilterFormGroup() {
		return new FormGroup<ProfitAndLossFilterFormProperties>({
			customer_id: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProfitAndLossRecord {
		id?: string | null;
		title?: string | null;

		/** Required */
		type: string;

		/** Type: double */
		value?: number | null;
	}
	export interface ProfitAndLossRecordFormProperties {
		id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProfitAndLossRecordFormGroup() {
		return new FormGroup<ProfitAndLossRecordFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProfitAndLossSection {
		id?: string | null;
		records?: Array<string>;
		title?: string | null;

		/** Type: double */
		total?: number | null;

		/** Required */
		type: string;
	}
	export interface ProfitAndLossSectionFormProperties {
		id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProfitAndLossSectionFormGroup() {
		return new FormGroup<ProfitAndLossSectionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The direction in which to sort the results */
	export enum SortDirection { asc = 'asc', desc = 'desc' }

	export interface SuppliersFilter {

		/** Company Name of supplier to search for */
		company_name?: string | null;

		/** Display Name of supplier to search for */
		display_name?: string | null;

		/** Email of supplier to search for */
		email?: string | null;

		/** First name of supplier to search for */
		first_name?: string | null;

		/** Last name of supplier to search for */
		last_name?: string | null;
	}
	export interface SuppliersFilterFormProperties {

		/** Company Name of supplier to search for */
		company_name: FormControl<string | null | undefined>,

		/** Display Name of supplier to search for */
		display_name: FormControl<string | null | undefined>,

		/** Email of supplier to search for */
		email: FormControl<string | null | undefined>,

		/** First name of supplier to search for */
		first_name: FormControl<string | null | undefined>,

		/** Last name of supplier to search for */
		last_name: FormControl<string | null | undefined>,
	}
	export function CreateSuppliersFilterFormGroup() {
		return new FormGroup<SuppliersFilterFormProperties>({
			company_name: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxRatesFilter {

		/** Boolean to describe if tax rate can be used for asset accounts */
		assets?: boolean | null;

		/** Boolean to describe if tax rate can be used for equity accounts */
		equity?: boolean | null;

		/** Boolean to describe if tax rate can be used for expense accounts */
		expenses?: boolean | null;

		/** Boolean to describe if tax rate can be used for liability accounts */
		liabilities?: boolean | null;

		/** Boolean to describe if tax rate can be used for revenue accounts */
		revenue?: boolean | null;
	}
	export interface TaxRatesFilterFormProperties {

		/** Boolean to describe if tax rate can be used for asset accounts */
		assets: FormControl<boolean | null | undefined>,

		/** Boolean to describe if tax rate can be used for equity accounts */
		equity: FormControl<boolean | null | undefined>,

		/** Boolean to describe if tax rate can be used for expense accounts */
		expenses: FormControl<boolean | null | undefined>,

		/** Boolean to describe if tax rate can be used for liability accounts */
		liabilities: FormControl<boolean | null | undefined>,

		/** Boolean to describe if tax rate can be used for revenue accounts */
		revenue: FormControl<boolean | null | undefined>,
	}
	export function CreateTaxRatesFilterFormGroup() {
		return new FormGroup<TaxRatesFilterFormProperties>({
			assets: new FormControl<boolean | null | undefined>(undefined),
			equity: new FormControl<boolean | null | undefined>(undefined),
			expenses: new FormControl<boolean | null | undefined>(undefined),
			liabilities: new FormControl<boolean | null | undefined>(undefined),
			revenue: new FormControl<boolean | null | undefined>(undefined),
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

	export interface UpdateBillResponse {

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
	export interface UpdateBillResponseFormProperties {

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
	export function CreateUpdateBillResponseFormGroup() {
		return new FormGroup<UpdateBillResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCreditNoteResponse {

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
	export interface UpdateCreditNoteResponseFormProperties {

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
	export function CreateUpdateCreditNoteResponseFormGroup() {
		return new FormGroup<UpdateCreditNoteResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCustomerResponse {

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
	export interface UpdateCustomerResponseFormProperties {

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
	export function CreateUpdateCustomerResponseFormGroup() {
		return new FormGroup<UpdateCustomerResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInvoiceItemsResponse {

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
	export interface UpdateInvoiceItemsResponseFormProperties {

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
	export function CreateUpdateInvoiceItemsResponseFormGroup() {
		return new FormGroup<UpdateInvoiceItemsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInvoiceResponse {

		/** Required */
		data: InvoiceResponse;

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
	export interface UpdateInvoiceResponseFormProperties {

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
	export function CreateUpdateInvoiceResponseFormGroup() {
		return new FormGroup<UpdateInvoiceResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateJournalEntryResponse {

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
	export interface UpdateJournalEntryResponseFormProperties {

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
	export function CreateUpdateJournalEntryResponseFormGroup() {
		return new FormGroup<UpdateJournalEntryResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateLedgerAccountResponse {

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
	export interface UpdateLedgerAccountResponseFormProperties {

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
	export function CreateUpdateLedgerAccountResponseFormGroup() {
		return new FormGroup<UpdateLedgerAccountResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePaymentResponse {

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
	export interface UpdatePaymentResponseFormProperties {

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
	export function CreateUpdatePaymentResponseFormGroup() {
		return new FormGroup<UpdatePaymentResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePurchaseOrderResponse {

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
	export interface UpdatePurchaseOrderResponseFormProperties {

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
	export function CreateUpdatePurchaseOrderResponseFormGroup() {
		return new FormGroup<UpdatePurchaseOrderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSupplierResponse {

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
	export interface UpdateSupplierResponseFormProperties {

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
	export function CreateUpdateSupplierResponseFormGroup() {
		return new FormGroup<UpdateSupplierResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateTaxRateResponse {

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
	export interface UpdateTaxRateResponseFormProperties {

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
	export function CreateUpdateTaxRateResponseFormGroup() {
		return new FormGroup<UpdateTaxRateResponseFormProperties>({
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
		 * Get BalanceSheet
		 * Get BalanceSheet
		 * Get accounting/balance-sheet
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {BalanceSheetFilter} filter Apply filters
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {GetBalanceSheetResponse} BalanceSheet
		 */
		BalanceSheetOne(pass_through: PassThroughQuery | null | undefined, filter: BalanceSheetFilter | null | undefined, raw: boolean | null | undefined): Observable<GetBalanceSheetResponse> {
			return this.http.get<GetBalanceSheetResponse>(this.baseUri + 'accounting/balance-sheet?pass_through=' + pass_through + '&filter=' + filter + '&raw=' + raw, {});
		}

		/**
		 * List Bills
		 * List Bills
		 * Get accounting/bills
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {BillsSort} sort Apply sorting
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetBillsResponse} Bills
		 */
		BillsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, sort: BillsSort | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetBillsResponse> {
			return this.http.get<GetBillsResponse>(this.baseUri + 'accounting/bills?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&sort=' + sort + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Bill
		 * Create Bill
		 * Post accounting/bills
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		BillsAdd(raw: boolean | null | undefined, requestBody: Bill): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounting/bills?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Bill
		 * Delete Bill
		 * Delete accounting/bills/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteBillResponse} Bill deleted
		 */
		BillsDelete(id: string, raw: boolean | null | undefined): Observable<DeleteBillResponse> {
			return this.http.delete<DeleteBillResponse>(this.baseUri + 'accounting/bills/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Bill
		 * Get Bill
		 * Get accounting/bills/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetBillResponse} Bill
		 */
		BillsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetBillResponse> {
			return this.http.get<GetBillResponse>(this.baseUri + 'accounting/bills/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Bill
		 * Update Bill
		 * Patch accounting/bills/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateBillResponse} Bill Updated
		 */
		BillsUpdate(id: string, raw: boolean | null | undefined, requestBody: Bill): Observable<UpdateBillResponse> {
			return this.http.patch<UpdateBillResponse>(this.baseUri + 'accounting/bills/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get company info
		 * Get company info
		 * Get accounting/company-info
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetCompanyInfoResponse} CompanyInfo
		 */
		CompanyInfoOne(raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetCompanyInfoResponse> {
			return this.http.get<GetCompanyInfoResponse>(this.baseUri + 'accounting/company-info?raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * List Credit Notes
		 * List Credit Notes
		 * Get accounting/credit-notes
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetCreditNotesResponse} Credit Notes
		 */
		CreditNotesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetCreditNotesResponse> {
			return this.http.get<GetCreditNotesResponse>(this.baseUri + 'accounting/credit-notes?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Credit Note
		 * Create Credit Note
		 * Post accounting/credit-notes
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		CreditNotesAdd(raw: boolean | null | undefined, requestBody: CreditNote): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounting/credit-notes?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Credit Note
		 * Delete Credit Note
		 * Delete accounting/credit-notes/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteCreditNoteResponse} Credit Note deleted
		 */
		CreditNotesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteCreditNoteResponse> {
			return this.http.delete<DeleteCreditNoteResponse>(this.baseUri + 'accounting/credit-notes/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Credit Note
		 * Get Credit Note
		 * Get accounting/credit-notes/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetCreditNoteResponse} Credit Note
		 */
		CreditNotesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetCreditNoteResponse> {
			return this.http.get<GetCreditNoteResponse>(this.baseUri + 'accounting/credit-notes/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Credit Note
		 * Update Credit Note
		 * Patch accounting/credit-notes/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateCreditNoteResponse} Credit Note updated
		 */
		CreditNotesUpdate(id: string, raw: boolean | null | undefined, requestBody: CreditNote): Observable<UpdateCreditNoteResponse> {
			return this.http.patch<UpdateCreditNoteResponse>(this.baseUri + 'accounting/credit-notes/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Customers
		 * List Customers
		 * Get accounting/customers
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {CustomersFilter} filter Apply filters
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetCustomersResponse} Customers
		 */
		CustomersAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: CustomersFilter | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetCustomersResponse> {
			return this.http.get<GetCustomersResponse>(this.baseUri + 'accounting/customers?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Customer
		 * Create Customer
		 * Post accounting/customers
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		CustomersAdd(raw: boolean | null | undefined, requestBody: Customer): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounting/customers?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Customer
		 * Delete Customer
		 * Delete accounting/customers/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteCustomerResponse} Customers
		 */
		CustomersDelete(id: string, raw: boolean | null | undefined): Observable<DeleteCustomerResponse> {
			return this.http.delete<DeleteCustomerResponse>(this.baseUri + 'accounting/customers/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Customer
		 * Get Customer
		 * Get accounting/customers/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetCustomerResponse} Customer
		 */
		CustomersOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetCustomerResponse> {
			return this.http.get<GetCustomerResponse>(this.baseUri + 'accounting/customers/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Customer
		 * Update Customer
		 * Patch accounting/customers/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateCustomerResponse} Customers
		 */
		CustomersUpdate(id: string, raw: boolean | null | undefined, requestBody: Customer): Observable<UpdateCustomerResponse> {
			return this.http.patch<UpdateCustomerResponse>(this.baseUri + 'accounting/customers/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Invoice Items
		 * List Invoice Items
		 * Get accounting/invoice-items
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {InvoiceItemsFilter} filter Apply filters
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetInvoiceItemsResponse} InvoiceItems
		 */
		InvoiceItemsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: InvoiceItemsFilter | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetInvoiceItemsResponse> {
			return this.http.get<GetInvoiceItemsResponse>(this.baseUri + 'accounting/invoice-items?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Invoice Item
		 * Create Invoice Item
		 * Post accounting/invoice-items
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		InvoiceItemsAdd(raw: boolean | null | undefined, requestBody: InvoiceItem): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounting/invoice-items?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Invoice Item
		 * Delete Invoice Item
		 * Delete accounting/invoice-items/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteTaxRateResponse} InvoiceItems
		 */
		InvoiceItemsDelete(id: string, raw: boolean | null | undefined): Observable<DeleteTaxRateResponse> {
			return this.http.delete<DeleteTaxRateResponse>(this.baseUri + 'accounting/invoice-items/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Invoice Item
		 * Get Invoice Item
		 * Get accounting/invoice-items/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetInvoiceItemResponse} InvoiceItems
		 */
		InvoiceItemsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetInvoiceItemResponse> {
			return this.http.get<GetInvoiceItemResponse>(this.baseUri + 'accounting/invoice-items/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Invoice Item
		 * Update Invoice Item
		 * Patch accounting/invoice-items/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateInvoiceItemsResponse} InvoiceItems
		 */
		InvoiceItemsUpdate(id: string, raw: boolean | null | undefined, requestBody: InvoiceItem): Observable<UpdateInvoiceItemsResponse> {
			return this.http.patch<UpdateInvoiceItemsResponse>(this.baseUri + 'accounting/invoice-items/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Invoices
		 * List Invoices
		 * Get accounting/invoices
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {InvoicesSort} sort Apply sorting
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetInvoicesResponse} Invoices
		 */
		InvoicesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, sort: InvoicesSort | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetInvoicesResponse> {
			return this.http.get<GetInvoicesResponse>(this.baseUri + 'accounting/invoices?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&sort=' + sort + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Invoice
		 * Create Invoice
		 * Post accounting/invoices
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		InvoicesAdd(raw: boolean | null | undefined, requestBody: Invoice): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounting/invoices?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Invoice
		 * Delete Invoice
		 * Delete accounting/invoices/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteInvoiceResponse} Invoice deleted
		 */
		InvoicesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteInvoiceResponse> {
			return this.http.delete<DeleteInvoiceResponse>(this.baseUri + 'accounting/invoices/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Invoice
		 * Get Invoice
		 * Get accounting/invoices/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetInvoiceResponse} Invoice
		 */
		InvoicesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetInvoiceResponse> {
			return this.http.get<GetInvoiceResponse>(this.baseUri + 'accounting/invoices/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Invoice
		 * Update Invoice
		 * Patch accounting/invoices/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateInvoiceResponse} Invoice updated
		 */
		InvoicesUpdate(id: string, raw: boolean | null | undefined, requestBody: Invoice): Observable<UpdateInvoiceResponse> {
			return this.http.patch<UpdateInvoiceResponse>(this.baseUri + 'accounting/invoices/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Journal Entries
		 * List Journal Entries
		 * Get accounting/journal-entries
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetJournalEntriesResponse} JournalEntry
		 */
		JournalEntriesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetJournalEntriesResponse> {
			return this.http.get<GetJournalEntriesResponse>(this.baseUri + 'accounting/journal-entries?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Journal Entry
		 * Create Journal Entry
		 * Post accounting/journal-entries
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		JournalEntriesAdd(raw: boolean | null | undefined, requestBody: JournalEntry): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounting/journal-entries?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Journal Entry
		 * Delete Journal Entry
		 * Delete accounting/journal-entries/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteJournalEntryResponse} JournalEntries
		 */
		JournalEntriesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteJournalEntryResponse> {
			return this.http.delete<DeleteJournalEntryResponse>(this.baseUri + 'accounting/journal-entries/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Journal Entry
		 * Get Journal Entry
		 * Get accounting/journal-entries/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetJournalEntryResponse} JournalEntries
		 */
		JournalEntriesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetJournalEntryResponse> {
			return this.http.get<GetJournalEntryResponse>(this.baseUri + 'accounting/journal-entries/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Journal Entry
		 * Update Journal Entry
		 * Patch accounting/journal-entries/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateJournalEntryResponse} JournalEntries
		 */
		JournalEntriesUpdate(id: string, raw: boolean | null | undefined, requestBody: JournalEntry): Observable<UpdateJournalEntryResponse> {
			return this.http.patch<UpdateJournalEntryResponse>(this.baseUri + 'accounting/journal-entries/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Ledger Accounts
		 * List Ledger Accounts
		 * Get accounting/ledger-accounts
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetLedgerAccountsResponse} LedgerAccounts
		 */
		LedgerAccountsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetLedgerAccountsResponse> {
			return this.http.get<GetLedgerAccountsResponse>(this.baseUri + 'accounting/ledger-accounts?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Ledger Account
		 * Create Ledger Account
		 * Post accounting/ledger-accounts
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		LedgerAccountsAdd(raw: boolean | null | undefined, requestBody: LedgerAccount): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounting/ledger-accounts?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Ledger Account
		 * Delete Ledger Account
		 * Delete accounting/ledger-accounts/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteLedgerAccountResponse} LedgerAccount deleted
		 */
		LedgerAccountsDelete(id: string, raw: boolean | null | undefined): Observable<DeleteLedgerAccountResponse> {
			return this.http.delete<DeleteLedgerAccountResponse>(this.baseUri + 'accounting/ledger-accounts/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Ledger Account
		 * Get Ledger Account
		 * Get accounting/ledger-accounts/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetLedgerAccountResponse} LedgerAccount
		 */
		LedgerAccountsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetLedgerAccountResponse> {
			return this.http.get<GetLedgerAccountResponse>(this.baseUri + 'accounting/ledger-accounts/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Ledger Account
		 * Update Ledger Account
		 * Patch accounting/ledger-accounts/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateLedgerAccountResponse} LedgerAccount updated
		 */
		LedgerAccountsUpdate(id: string, raw: boolean | null | undefined, requestBody: LedgerAccount): Observable<UpdateLedgerAccountResponse> {
			return this.http.patch<UpdateLedgerAccountResponse>(this.baseUri + 'accounting/ledger-accounts/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Payments
		 * List Payments
		 * Get accounting/payments
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {PaymentsFilter} filter Apply filters
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetPaymentsResponse} Payments
		 */
		PaymentsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: PaymentsFilter | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetPaymentsResponse> {
			return this.http.get<GetPaymentsResponse>(this.baseUri + 'accounting/payments?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Payment
		 * Create Payment
		 * Post accounting/payments
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		PaymentsAdd(raw: boolean | null | undefined, requestBody: Payment): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounting/payments?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Payment
		 * Delete Payment
		 * Delete accounting/payments/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeletePaymentResponse} Payment deleted
		 */
		PaymentsDelete(id: string, raw: boolean | null | undefined): Observable<DeletePaymentResponse> {
			return this.http.delete<DeletePaymentResponse>(this.baseUri + 'accounting/payments/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Payment
		 * Get Payment
		 * Get accounting/payments/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetPaymentResponse} Payment
		 */
		PaymentsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetPaymentResponse> {
			return this.http.get<GetPaymentResponse>(this.baseUri + 'accounting/payments/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Payment
		 * Update Payment
		 * Patch accounting/payments/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdatePaymentResponse} Payment Updated
		 */
		PaymentsUpdate(id: string, raw: boolean | null | undefined, requestBody: Payment): Observable<UpdatePaymentResponse> {
			return this.http.patch<UpdatePaymentResponse>(this.baseUri + 'accounting/payments/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Profit and Loss
		 * Get Profit and Loss
		 * Get accounting/profit-and-loss
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {ProfitAndLossFilter} filter Apply filters
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetProfitAndLossResponse} Profit & Loss Report
		 */
		ProfitAndLossOne(raw: boolean | null | undefined, filter: ProfitAndLossFilter | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetProfitAndLossResponse> {
			return this.http.get<GetProfitAndLossResponse>(this.baseUri + 'accounting/profit-and-loss?raw=' + raw + '&filter=' + filter + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * List Purchase Orders
		 * List Purchase Orders
		 * Get accounting/purchase-orders
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @return {GetPurchaseOrdersResponse} PurchaseOrders
		 */
		PurchaseOrdersAll(raw: boolean | null | undefined, cursor: string | null | undefined, pass_through: PassThroughQuery | null | undefined, limit: number | null | undefined): Observable<GetPurchaseOrdersResponse> {
			return this.http.get<GetPurchaseOrdersResponse>(this.baseUri + 'accounting/purchase-orders?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&pass_through=' + pass_through + '&limit=' + limit, {});
		}

		/**
		 * Create Purchase Order
		 * Create Purchase Order
		 * Post accounting/purchase-orders
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		PurchaseOrdersAdd(raw: boolean | null | undefined, requestBody: PurchaseOrder): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounting/purchase-orders?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Purchase Order
		 * Delete Purchase Order
		 * Delete accounting/purchase-orders/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeletePurchaseOrderResponse} PurchaseOrders
		 */
		PurchaseOrdersDelete(id: string, raw: boolean | null | undefined): Observable<DeletePurchaseOrderResponse> {
			return this.http.delete<DeletePurchaseOrderResponse>(this.baseUri + 'accounting/purchase-orders/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Purchase Order
		 * Get Purchase Order
		 * Get accounting/purchase-orders/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {GetPurchaseOrderResponse} PurchaseOrders
		 */
		PurchaseOrdersOne(id: string, raw: boolean | null | undefined): Observable<GetPurchaseOrderResponse> {
			return this.http.get<GetPurchaseOrderResponse>(this.baseUri + 'accounting/purchase-orders/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Update Purchase Order
		 * Update Purchase Order
		 * Patch accounting/purchase-orders/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdatePurchaseOrderResponse} PurchaseOrders
		 */
		PurchaseOrdersUpdate(id: string, raw: boolean | null | undefined, requestBody: PurchaseOrder): Observable<UpdatePurchaseOrderResponse> {
			return this.http.patch<UpdatePurchaseOrderResponse>(this.baseUri + 'accounting/purchase-orders/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Suppliers
		 * List Suppliers
		 * Get accounting/suppliers
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {SuppliersFilter} filter Apply filters
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetSuppliersResponse} Suppliers
		 */
		SuppliersAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: SuppliersFilter | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetSuppliersResponse> {
			return this.http.get<GetSuppliersResponse>(this.baseUri + 'accounting/suppliers?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Supplier
		 * Create Supplier
		 * Post accounting/suppliers
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		SuppliersAdd(raw: boolean | null | undefined, requestBody: Supplier): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounting/suppliers?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Supplier
		 * Delete Supplier
		 * Delete accounting/suppliers/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteSupplierResponse} Supplier deleted
		 */
		SuppliersDelete(id: string, raw: boolean | null | undefined): Observable<DeleteSupplierResponse> {
			return this.http.delete<DeleteSupplierResponse>(this.baseUri + 'accounting/suppliers/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Supplier
		 * Get Supplier
		 * Get accounting/suppliers/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetSupplierResponse} Supplier
		 */
		SuppliersOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetSupplierResponse> {
			return this.http.get<GetSupplierResponse>(this.baseUri + 'accounting/suppliers/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Supplier
		 * Update Supplier
		 * Patch accounting/suppliers/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateSupplierResponse} Supplier updated
		 */
		SuppliersUpdate(id: string, raw: boolean | null | undefined, requestBody: Supplier): Observable<UpdateSupplierResponse> {
			return this.http.patch<UpdateSupplierResponse>(this.baseUri + 'accounting/suppliers/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Tax Rates
		 * List Tax Rates. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Connectors Affected: Quickbooks
		 * Get accounting/tax-rates
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {TaxRatesFilter} filter Apply filters
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetTaxRatesResponse} TaxRates
		 */
		TaxRatesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: TaxRatesFilter | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetTaxRatesResponse> {
			return this.http.get<GetTaxRatesResponse>(this.baseUri + 'accounting/tax-rates?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Tax Rate
		 * Create Tax Rate
		 * Post accounting/tax-rates
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		TaxRatesAdd(raw: boolean | null | undefined, requestBody: TaxRate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounting/tax-rates?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Tax Rate
		 * Delete Tax Rate
		 * Delete accounting/tax-rates/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteTaxRateResponse} TaxRates deleted
		 */
		TaxRatesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteTaxRateResponse> {
			return this.http.delete<DeleteTaxRateResponse>(this.baseUri + 'accounting/tax-rates/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Tax Rate
		 * Get Tax Rate. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Support will soon be added to return the actual rate/percentage by doing additional calls in the background to provide the full view of a given tax rate. Connectors Affected: Quickbooks
		 * Get accounting/tax-rates/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetTaxRateResponse} TaxRate
		 */
		TaxRatesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetTaxRateResponse> {
			return this.http.get<GetTaxRateResponse>(this.baseUri + 'accounting/tax-rates/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Tax Rate
		 * Update Tax Rate
		 * Patch accounting/tax-rates/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateTaxRateResponse} TaxRate updated
		 */
		TaxRatesUpdate(id: string, raw: boolean | null | undefined, requestBody: TaxRate): Observable<UpdateTaxRateResponse> {
			return this.http.patch<UpdateTaxRateResponse>(this.baseUri + 'accounting/tax-rates/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

