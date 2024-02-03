import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddressDataDto {

		/**
		 * customer additional address line
		 * Max length: 50
		 * Min length: 1
		 */
		addressAddition?: string | null;

		/**
		 * customer city
		 * Max length: 50
		 * Min length: 1
		 */
		city?: string | null;

		/**
		 * customer company name
		 * Max length: 50
		 * Min length: 2
		 */
		company?: string | null;

		/**
		 * customer country code (2 letter ISO-3166 code)
		 * Max length: 2
		 * Min length: 2
		 */
		country?: string | null;

		/**
		 * customer first name
		 * Max length: 50
		 * Min length: 1
		 */
		firstName?: string | null;

		/**
		 * customer last name
		 * Max length: 50
		 * Min length: 2
		 */
		lastName?: string | null;

		/**
		 * customer state code
		 * Max length: 2
		 * Min length: 2
		 */
		state?: string | null;

		/**
		 * customer street name
		 * Max length: 50
		 * Min length: 2
		 */
		street?: string | null;

		/**
		 * customer postcode
		 * Max length: 10
		 * Min length: 2
		 */
		zip?: string | null;
	}
	export interface AddressDataDtoFormProperties {

		/**
		 * customer additional address line
		 * Max length: 50
		 * Min length: 1
		 */
		addressAddition: FormControl<string | null | undefined>,

		/**
		 * customer city
		 * Max length: 50
		 * Min length: 1
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * customer company name
		 * Max length: 50
		 * Min length: 2
		 */
		company: FormControl<string | null | undefined>,

		/**
		 * customer country code (2 letter ISO-3166 code)
		 * Max length: 2
		 * Min length: 2
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * customer first name
		 * Max length: 50
		 * Min length: 1
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * customer last name
		 * Max length: 50
		 * Min length: 2
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * customer state code
		 * Max length: 2
		 * Min length: 2
		 */
		state: FormControl<string | null | undefined>,

		/**
		 * customer street name
		 * Max length: 50
		 * Min length: 2
		 */
		street: FormControl<string | null | undefined>,

		/**
		 * customer postcode
		 * Max length: 10
		 * Min length: 2
		 */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateAddressDataDtoFormGroup() {
		return new FormGroup<AddressDataDtoFormProperties>({
			addressAddition: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[^\u0000\\!=<>?+;"*\d]+$')]),
			company: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(50)]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[A-Z]{2}')]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(50)]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[A-Z]{2}')]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(50)]),
			zip: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(10), Validators.pattern('[0-9A-Za-z_.\-/]{2,10}')]),
		});

	}

	export interface CartItemDto {

		/** delivery period end date */
		deliveryDateEnd?: Date | null;

		/** delivery date */
		deliveryDateStart?: Date | null;

		/**
		 * item description
		 * Max length: 255
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * item number
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		number: string;

		/**
		 * gross price of single item
		 * Required
		 * Minimum: -1999999999
		 * Maximum: 1999999999
		 */
		price: number;

		/**
		 * total number of ordered items
		 * Required
		 * Minimum: 1
		 * Maximum: 999999
		 */
		quantity: number;

		/**
		 * item type
		 * Required
		 */
		type: CartItemDtoType;

		/**
		 * vat rate (<100 in %, >=100 in bp)
		 * Minimum: 0
		 * Maximum: 9999
		 */
		vatRate?: number | null;
	}
	export interface CartItemDtoFormProperties {

		/** delivery period end date */
		deliveryDateEnd: FormControl<Date | null | undefined>,

		/** delivery date */
		deliveryDateStart: FormControl<Date | null | undefined>,

		/**
		 * item description
		 * Max length: 255
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * item number
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * gross price of single item
		 * Required
		 * Minimum: -1999999999
		 * Maximum: 1999999999
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * total number of ordered items
		 * Required
		 * Minimum: 1
		 * Maximum: 999999
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * item type
		 * Required
		 */
		type: FormControl<CartItemDtoType | null | undefined>,

		/**
		 * vat rate (<100 in %, >=100 in bp)
		 * Minimum: 0
		 * Maximum: 9999
		 */
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateCartItemDtoFormGroup() {
		return new FormGroup<CartItemDtoFormProperties>({
			deliveryDateEnd: new FormControl<Date | null | undefined>(undefined),
			deliveryDateStart: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('[0-9A-Za-z(){} +\-_#/:\[\]]{1,32}')]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-1999999999), Validators.max(1999999999)]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999)]),
			type: new FormControl<CartItemDtoType | null | undefined>(undefined, [Validators.required]),
			vatRate: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(9999)]),
		});

	}

	export enum CartItemDtoType { goods = 'goods', shipment = 'shipment', handling = 'handling', voucher = 'voucher' }


	/** relevant information for the invoice module */
	export interface InvoiceInformationDto {

		/**
		 * id that should be put on the invoice
		 * Max length: 20
		 * Min length: 0
		 */
		invoiceId?: string | null;

		/**
		 * short text that should be put after the invoice
		 * Max length: 255
		 * Min length: 0
		 */
		invoiceText?: string | null;
	}

	/** relevant information for the invoice module */
	export interface InvoiceInformationDtoFormProperties {

		/**
		 * id that should be put on the invoice
		 * Max length: 20
		 * Min length: 0
		 */
		invoiceId: FormControl<string | null | undefined>,

		/**
		 * short text that should be put after the invoice
		 * Max length: 255
		 * Min length: 0
		 */
		invoiceText: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceInformationDtoFormGroup() {
		return new FormGroup<InvoiceInformationDtoFormProperties>({
			invoiceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(20)]),
			invoiceText: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}


	/** a link create request */
	export interface LinkCreateRequest {

		/**
		 * identifier for the subaccount
		 * Required
		 */
		accountId: string;

		/** link activation status */
		active?: boolean | null;

		/** backgroundImage css property */
		backgroundImage?: string | null;
		billing?: AddressDataDto;

		/**
		 * currency code
		 * Required
		 * Max length: 3
		 * Min length: 3
		 */
		currency: LinkCreateRequestCurrency;

		/**
		 * free format description of the payment
		 * Max length: 255
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * email the invoice should be delivered to
		 * Max length: 254
		 * Min length: 4
		 */
		email?: string | null;

		/** final redirect after a final payment */
		errorUrl?: string | null;

		/** link expiration date, the link will only be executable until end of that day */
		expiration?: Date | null;

		/** designates the type of transaction that will be created */
		intent?: LinkCreateRequestIntent | null;

		/** relevant information for the invoice module */
		invoiceInformation?: InvoiceInformationDto;

		/** link ISO language code */
		language?: LinkCreateRequestLanguage | null;

		/** logo url */
		logo?: string | null;

		/**
		 * identifier for the merchant
		 * Required
		 */
		merchantId: string;

		/**
		 * execution mode
		 * Required
		 */
		mode: LinkCreateRequestMode;

		/** Url where the notification will be send after link was executed */
		notifyUrl?: string | null;

		/** list of available payment methods */
		paymentMethods?: Array<string>;

		/**
		 * identifier for the portal
		 * Required
		 */
		portalId: string;

		/**
		 * payment reference number, has to be unique per merchant and mode
		 * Required
		 */
		reference: string;
		shipping?: AddressDataDto;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 400
		 */
		shoppingCart: Array<CartItemDto>;

		/** final redirect after a successful payment */
		successUrl?: string | null;

		/** identifier for the user */
		userId?: string | null;
	}

	/** a link create request */
	export interface LinkCreateRequestFormProperties {

		/**
		 * identifier for the subaccount
		 * Required
		 */
		accountId: FormControl<string | null | undefined>,

		/** link activation status */
		active: FormControl<boolean | null | undefined>,

		/** backgroundImage css property */
		backgroundImage: FormControl<string | null | undefined>,

		/**
		 * currency code
		 * Required
		 * Max length: 3
		 * Min length: 3
		 */
		currency: FormControl<LinkCreateRequestCurrency | null | undefined>,

		/**
		 * free format description of the payment
		 * Max length: 255
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * email the invoice should be delivered to
		 * Max length: 254
		 * Min length: 4
		 */
		email: FormControl<string | null | undefined>,

		/** final redirect after a final payment */
		errorUrl: FormControl<string | null | undefined>,

		/** link expiration date, the link will only be executable until end of that day */
		expiration: FormControl<Date | null | undefined>,

		/** designates the type of transaction that will be created */
		intent: FormControl<LinkCreateRequestIntent | null | undefined>,

		/** link ISO language code */
		language: FormControl<LinkCreateRequestLanguage | null | undefined>,

		/** logo url */
		logo: FormControl<string | null | undefined>,

		/**
		 * identifier for the merchant
		 * Required
		 */
		merchantId: FormControl<string | null | undefined>,

		/**
		 * execution mode
		 * Required
		 */
		mode: FormControl<LinkCreateRequestMode | null | undefined>,

		/** Url where the notification will be send after link was executed */
		notifyUrl: FormControl<string | null | undefined>,

		/**
		 * identifier for the portal
		 * Required
		 */
		portalId: FormControl<string | null | undefined>,

		/**
		 * payment reference number, has to be unique per merchant and mode
		 * Required
		 */
		reference: FormControl<string | null | undefined>,

		/** final redirect after a successful payment */
		successUrl: FormControl<string | null | undefined>,

		/** identifier for the user */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateLinkCreateRequestFormGroup() {
		return new FormGroup<LinkCreateRequestFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9]+')]),
			active: new FormControl<boolean | null | undefined>(undefined),
			backgroundImage: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<LinkCreateRequestCurrency | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(254)]),
			errorUrl: new FormControl<string | null | undefined>(undefined),
			expiration: new FormControl<Date | null | undefined>(undefined),
			intent: new FormControl<LinkCreateRequestIntent | null | undefined>(undefined),
			language: new FormControl<LinkCreateRequestLanguage | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9]+')]),
			mode: new FormControl<LinkCreateRequestMode | null | undefined>(undefined, [Validators.required]),
			notifyUrl: new FormControl<string | null | undefined>(undefined),
			portalId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9]+')]),
			reference: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9a-zA-Z.\\-_/]{1,20}')]),
			successUrl: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]+')]),
		});

	}

	export enum LinkCreateRequestCurrency { ALL = 'ALL', DZD = 'DZD', ARS = 'ARS', AUD = 'AUD', BSD = 'BSD', BHD = 'BHD', BDT = 'BDT', AMD = 'AMD', BBD = 'BBD', BMD = 'BMD', BTN = 'BTN', BOB = 'BOB', BWP = 'BWP', BZD = 'BZD', SBD = 'SBD', BND = 'BND', MMK = 'MMK', BIF = 'BIF', KHR = 'KHR', CAD = 'CAD', CVE = 'CVE', KYD = 'KYD', LKR = 'LKR', CLP = 'CLP', CNY = 'CNY', COP = 'COP', KMF = 'KMF', CRC = 'CRC', HRK = 'HRK', CUP = 'CUP', CZK = 'CZK', DKK = 'DKK', DOP = 'DOP', SVC = 'SVC', ETB = 'ETB', ERN = 'ERN', FKP = 'FKP', FJD = 'FJD', DJF = 'DJF', GMD = 'GMD', GIP = 'GIP', GTQ = 'GTQ', GNF = 'GNF', GYD = 'GYD', HTG = 'HTG', HNL = 'HNL', HKD = 'HKD', HUF = 'HUF', ISK = 'ISK', INR = 'INR', IDR = 'IDR', IRR = 'IRR', IQD = 'IQD', ILS = 'ILS', JMD = 'JMD', JPY = 'JPY', KZT = 'KZT', JOD = 'JOD', KES = 'KES', KPW = 'KPW', KRW = 'KRW', KWD = 'KWD', KGS = 'KGS', LAK = 'LAK', LBP = 'LBP', LSL = 'LSL', LRD = 'LRD', LYD = 'LYD', MOP = 'MOP', MWK = 'MWK', MYR = 'MYR', MVR = 'MVR', MUR = 'MUR', MXN = 'MXN', MNT = 'MNT', MDL = 'MDL', MAD = 'MAD', OMR = 'OMR', NAD = 'NAD', NPR = 'NPR', ANG = 'ANG', AWG = 'AWG', VUV = 'VUV', NZD = 'NZD', NIO = 'NIO', NGN = 'NGN', NOK = 'NOK', PKR = 'PKR', PAB = 'PAB', PGK = 'PGK', PYG = 'PYG', PEN = 'PEN', PHP = 'PHP', QAR = 'QAR', RUB = 'RUB', RWF = 'RWF', SHP = 'SHP', SAR = 'SAR', SCR = 'SCR', SLL = 'SLL', SGD = 'SGD', VND = 'VND', SOS = 'SOS', ZAR = 'ZAR', SSP = 'SSP', SZL = 'SZL', SEK = 'SEK', CHF = 'CHF', SYP = 'SYP', THB = 'THB', TOP = 'TOP', TTD = 'TTD', AED = 'AED', TND = 'TND', UGX = 'UGX', MKD = 'MKD', EGP = 'EGP', GBP = 'GBP', TZS = 'TZS', USD = 'USD', UYU = 'UYU', UZS = 'UZS', WST = 'WST', YER = 'YER', TWD = 'TWD', UYW = 'UYW', VES = 'VES', MRU = 'MRU', STN = 'STN', CUC = 'CUC', ZWL = 'ZWL', BYN = 'BYN', TMT = 'TMT', GHS = 'GHS', SDG = 'SDG', UYI = 'UYI', RSD = 'RSD', MZN = 'MZN', AZN = 'AZN', RON = 'RON', CHE = 'CHE', CHW = 'CHW', TRY = 'TRY', XAF = 'XAF', XCD = 'XCD', XOF = 'XOF', XPF = 'XPF', XBA = 'XBA', XBB = 'XBB', XBC = 'XBC', XBD = 'XBD', XAU = 'XAU', XDR = 'XDR', XAG = 'XAG', XPT = 'XPT', XTS = 'XTS', XPD = 'XPD', XUA = 'XUA', ZMW = 'ZMW', SRD = 'SRD', MGA = 'MGA', COU = 'COU', AFN = 'AFN', TJS = 'TJS', AOA = 'AOA', BGN = 'BGN', CDF = 'CDF', BAM = 'BAM', EUR = 'EUR', MXV = 'MXV', UAH = 'UAH', GEL = 'GEL', BOV = 'BOV', PLN = 'PLN', BRL = 'BRL', CLF = 'CLF', XSU = 'XSU', USN = 'USN' }

	export enum LinkCreateRequestIntent { authorization = 'authorization', preauthorization = 'preauthorization' }

	export enum LinkCreateRequestLanguage { de_DE = 'de_DE', en_US = 'en_US' }

	export enum LinkCreateRequestMode { live = 'live', test = 'test' }

	export interface LinkResponse {

		/** identifier for the subaccount */
		accountId?: string | null;

		/** link activation status */
		active?: boolean | null;

		/**
		 * total amount of all shopping cart items in lowest denomination
		 * Minimum: 1
		 * Maximum: 1999999999
		 */
		amount?: number | null;

		/** backgroundImage css property */
		backgroundImage?: string | null;
		billing?: AddressDataDto;

		/** created time in ISO 8601 format */
		created?: number | null;

		/**
		 * currency code
		 * Max length: 3
		 * Min length: 3
		 */
		currency?: LinkCreateRequestCurrency | null;

		/**
		 * free format description of the payment
		 * Max length: 255
		 */
		description?: string | null;

		/**
		 * customer email for invoices or payment notification
		 * Max length: 254
		 * Min length: 4
		 */
		email?: string | null;

		/** final redirect after a failed payment */
		errorUrl?: string | null;

		/** link expiration date, the link will only be executable until end of that day */
		expiration?: Date | null;

		/** hash for the client API */
		hash?: string | null;

		/**
		 * link id
		 * Max length: 32
		 * Min length: 32
		 */
		id?: string | null;

		/** designates the type of transaction that will be created */
		intent?: LinkCreateRequestIntent | null;

		/** relevant information for the invoice module */
		invoiceInformation?: InvoiceInformationDto;

		/** link ISO language code */
		language?: LinkCreateRequestLanguage | null;

		/** customer payment link */
		link?: string | null;

		/** logo url */
		logo?: string | null;

		/** identifier for the merchant */
		merchantId?: string | null;

		/** execution mode */
		mode?: LinkCreateRequestMode | null;

		/** last modified time in ISO 8601 format */
		modified?: number | null;

		/** notify url. If unset no notification will be send */
		notifyUrl?: string | null;

		/** available payment methods */
		paymentMethod?: LinkResponsePaymentMethod | null;

		/** list of available payment methods */
		paymentMethods?: Array<LinkResponsePaymentMethod>;

		/** identifier of the created payment process. */
		paymentProcess?: string | null;

		/** identifier for the portal */
		portalId?: string | null;

		/** redirect url. empty if the payment process does not require a redirect. */
		redirectUrl?: string | null;

		/**
		 * payment reference number, has to be unique per merchant and mode
		 * Max length: 20
		 * Min length: 1
		 */
		reference?: string | null;
		shipping?: AddressDataDto;
		shoppingCart?: Array<CartItemDto>;

		/** link status */
		status?: LinkResponseStatus | null;

		/** final redirect after a successful payment */
		successUrl?: string | null;

		/** identifier of the created user. */
		userId?: string | null;
	}
	export interface LinkResponseFormProperties {

		/** identifier for the subaccount */
		accountId: FormControl<string | null | undefined>,

		/** link activation status */
		active: FormControl<boolean | null | undefined>,

		/**
		 * total amount of all shopping cart items in lowest denomination
		 * Minimum: 1
		 * Maximum: 1999999999
		 */
		amount: FormControl<number | null | undefined>,

		/** backgroundImage css property */
		backgroundImage: FormControl<string | null | undefined>,

		/** created time in ISO 8601 format */
		created: FormControl<number | null | undefined>,

		/**
		 * currency code
		 * Max length: 3
		 * Min length: 3
		 */
		currency: FormControl<LinkCreateRequestCurrency | null | undefined>,

		/**
		 * free format description of the payment
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * customer email for invoices or payment notification
		 * Max length: 254
		 * Min length: 4
		 */
		email: FormControl<string | null | undefined>,

		/** final redirect after a failed payment */
		errorUrl: FormControl<string | null | undefined>,

		/** link expiration date, the link will only be executable until end of that day */
		expiration: FormControl<Date | null | undefined>,

		/** hash for the client API */
		hash: FormControl<string | null | undefined>,

		/**
		 * link id
		 * Max length: 32
		 * Min length: 32
		 */
		id: FormControl<string | null | undefined>,

		/** designates the type of transaction that will be created */
		intent: FormControl<LinkCreateRequestIntent | null | undefined>,

		/** link ISO language code */
		language: FormControl<LinkCreateRequestLanguage | null | undefined>,

		/** customer payment link */
		link: FormControl<string | null | undefined>,

		/** logo url */
		logo: FormControl<string | null | undefined>,

		/** identifier for the merchant */
		merchantId: FormControl<string | null | undefined>,

		/** execution mode */
		mode: FormControl<LinkCreateRequestMode | null | undefined>,

		/** last modified time in ISO 8601 format */
		modified: FormControl<number | null | undefined>,

		/** notify url. If unset no notification will be send */
		notifyUrl: FormControl<string | null | undefined>,

		/** available payment methods */
		paymentMethod: FormControl<LinkResponsePaymentMethod | null | undefined>,

		/** identifier of the created payment process. */
		paymentProcess: FormControl<string | null | undefined>,

		/** identifier for the portal */
		portalId: FormControl<string | null | undefined>,

		/** redirect url. empty if the payment process does not require a redirect. */
		redirectUrl: FormControl<string | null | undefined>,

		/**
		 * payment reference number, has to be unique per merchant and mode
		 * Max length: 20
		 * Min length: 1
		 */
		reference: FormControl<string | null | undefined>,

		/** link status */
		status: FormControl<LinkResponseStatus | null | undefined>,

		/** final redirect after a successful payment */
		successUrl: FormControl<string | null | undefined>,

		/** identifier of the created user. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateLinkResponseFormGroup() {
		return new FormGroup<LinkResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1999999999)]),
			backgroundImage: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<LinkCreateRequestCurrency | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(254)]),
			errorUrl: new FormControl<string | null | undefined>(undefined),
			expiration: new FormControl<Date | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32)]),
			intent: new FormControl<LinkCreateRequestIntent | null | undefined>(undefined),
			language: new FormControl<LinkCreateRequestLanguage | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<LinkCreateRequestMode | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			notifyUrl: new FormControl<string | null | undefined>(undefined),
			paymentMethod: new FormControl<LinkResponsePaymentMethod | null | undefined>(undefined),
			paymentProcess: new FormControl<string | null | undefined>(undefined),
			portalId: new FormControl<string | null | undefined>(undefined),
			redirectUrl: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(20)]),
			status: new FormControl<LinkResponseStatus | null | undefined>(undefined),
			successUrl: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LinkResponsePaymentMethod { visa = 'visa', mastercard = 'mastercard', amex = 'amex', paypal = 'paypal', sofort = 'sofort', paydirekt = 'paydirekt', 'postfinance-e' = 'postfinance-e', 'postfinance-card' = 'postfinance-card', bancontact = 'bancontact', przelewy24 = 'przelewy24', alipay = 'alipay', ideal = 'ideal', eps = 'eps', giropay = 'giropay', sepa = 'sepa' }

	export enum LinkResponseStatus { ready = 'ready', created = 'created', executed = 'executed', expired = 'expired', deactivated = 'deactivated' }

	export interface PageLinkResponse {
		content?: Array<LinkResponse>;
		empty?: boolean | null;
		first?: boolean | null;
		last?: boolean | null;
		number?: number | null;
		numberOfElements?: number | null;
		pageable?: Pageable;
		size?: number | null;
		sort?: Sort;
		totalElements?: number | null;
		totalPages?: number | null;
	}
	export interface PageLinkResponseFormProperties {
		empty: FormControl<boolean | null | undefined>,
		first: FormControl<boolean | null | undefined>,
		last: FormControl<boolean | null | undefined>,
		number: FormControl<number | null | undefined>,
		numberOfElements: FormControl<number | null | undefined>,
		size: FormControl<number | null | undefined>,
		totalElements: FormControl<number | null | undefined>,
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreatePageLinkResponseFormGroup() {
		return new FormGroup<PageLinkResponseFormProperties>({
			empty: new FormControl<boolean | null | undefined>(undefined),
			first: new FormControl<boolean | null | undefined>(undefined),
			last: new FormControl<boolean | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			numberOfElements: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			totalElements: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Pageable {
		offset?: number | null;
		pageNumber?: number | null;
		pageSize?: number | null;
		paged?: boolean | null;
		sort?: Sort;
		unpaged?: boolean | null;
	}
	export interface PageableFormProperties {
		offset: FormControl<number | null | undefined>,
		pageNumber: FormControl<number | null | undefined>,
		pageSize: FormControl<number | null | undefined>,
		paged: FormControl<boolean | null | undefined>,
		unpaged: FormControl<boolean | null | undefined>,
	}
	export function CreatePageableFormGroup() {
		return new FormGroup<PageableFormProperties>({
			offset: new FormControl<number | null | undefined>(undefined),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			paged: new FormControl<boolean | null | undefined>(undefined),
			unpaged: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Sort {
		empty?: boolean | null;
		sorted?: boolean | null;
		unsorted?: boolean | null;
	}
	export interface SortFormProperties {
		empty: FormControl<boolean | null | undefined>,
		sorted: FormControl<boolean | null | undefined>,
		unsorted: FormControl<boolean | null | undefined>,
	}
	export function CreateSortFormGroup() {
		return new FormGroup<SortFormProperties>({
			empty: new FormControl<boolean | null | undefined>(undefined),
			sorted: new FormControl<boolean | null | undefined>(undefined),
			unsorted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all payment links.
		 * Get v1/payment-links
		 * @return {PageLinkResponse} default response
		 */
		GetPaymentLinks(page: number | null | undefined, limit: number | null | undefined, merchantId: string, accountId: string, portalId: string, mode: string): Observable<PageLinkResponse> {
			return this.http.get<PageLinkResponse>(this.baseUri + 'v1/payment-links?page=' + page + '&limit=' + limit + '&merchantId=' + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '&accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&portalId=' + (portalId == null ? '' : encodeURIComponent(portalId)) + '&mode=' + (mode == null ? '' : encodeURIComponent(mode)), {});
		}

		/**
		 * Create a payment link.
		 * Post v1/payment-links
		 * @return {LinkResponse} default response
		 */
		CreatePaymentLink(requestBody: LinkCreateRequest): Observable<LinkResponse> {
			return this.http.post<LinkResponse>(this.baseUri + 'v1/payment-links', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get payment link by id.
		 * Get v1/payment-links/{linkId}
		 * @return {LinkResponse} default response
		 */
		GetPaymentLink(linkId: string): Observable<LinkResponse> {
			return this.http.get<LinkResponse>(this.baseUri + 'v1/payment-links/' + (linkId == null ? '' : encodeURIComponent(linkId)), {});
		}

		/**
		 * Update a payment link.
		 * Put v1/payment-links/{linkId}
		 * @return {LinkResponse} default response
		 */
		UpdatePaymentLink(linkId: string, requestBody: LinkCreateRequest): Observable<LinkResponse> {
			return this.http.put<LinkResponse>(this.baseUri + 'v1/payment-links/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

