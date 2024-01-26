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

	export enum CartItemDtoType { goods = 0, shipment = 1, handling = 2, voucher = 3 }


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

	export enum LinkCreateRequestCurrency { ALL = 0, DZD = 1, ARS = 2, AUD = 3, BSD = 4, BHD = 5, BDT = 6, AMD = 7, BBD = 8, BMD = 9, BTN = 10, BOB = 11, BWP = 12, BZD = 13, SBD = 14, BND = 15, MMK = 16, BIF = 17, KHR = 18, CAD = 19, CVE = 20, KYD = 21, LKR = 22, CLP = 23, CNY = 24, COP = 25, KMF = 26, CRC = 27, HRK = 28, CUP = 29, CZK = 30, DKK = 31, DOP = 32, SVC = 33, ETB = 34, ERN = 35, FKP = 36, FJD = 37, DJF = 38, GMD = 39, GIP = 40, GTQ = 41, GNF = 42, GYD = 43, HTG = 44, HNL = 45, HKD = 46, HUF = 47, ISK = 48, INR = 49, IDR = 50, IRR = 51, IQD = 52, ILS = 53, JMD = 54, JPY = 55, KZT = 56, JOD = 57, KES = 58, KPW = 59, KRW = 60, KWD = 61, KGS = 62, LAK = 63, LBP = 64, LSL = 65, LRD = 66, LYD = 67, MOP = 68, MWK = 69, MYR = 70, MVR = 71, MUR = 72, MXN = 73, MNT = 74, MDL = 75, MAD = 76, OMR = 77, NAD = 78, NPR = 79, ANG = 80, AWG = 81, VUV = 82, NZD = 83, NIO = 84, NGN = 85, NOK = 86, PKR = 87, PAB = 88, PGK = 89, PYG = 90, PEN = 91, PHP = 92, QAR = 93, RUB = 94, RWF = 95, SHP = 96, SAR = 97, SCR = 98, SLL = 99, SGD = 100, VND = 101, SOS = 102, ZAR = 103, SSP = 104, SZL = 105, SEK = 106, CHF = 107, SYP = 108, THB = 109, TOP = 110, TTD = 111, AED = 112, TND = 113, UGX = 114, MKD = 115, EGP = 116, GBP = 117, TZS = 118, USD = 119, UYU = 120, UZS = 121, WST = 122, YER = 123, TWD = 124, UYW = 125, VES = 126, MRU = 127, STN = 128, CUC = 129, ZWL = 130, BYN = 131, TMT = 132, GHS = 133, SDG = 134, UYI = 135, RSD = 136, MZN = 137, AZN = 138, RON = 139, CHE = 140, CHW = 141, TRY = 142, XAF = 143, XCD = 144, XOF = 145, XPF = 146, XBA = 147, XBB = 148, XBC = 149, XBD = 150, XAU = 151, XDR = 152, XAG = 153, XPT = 154, XTS = 155, XPD = 156, XUA = 157, ZMW = 158, SRD = 159, MGA = 160, COU = 161, AFN = 162, TJS = 163, AOA = 164, BGN = 165, CDF = 166, BAM = 167, EUR = 168, MXV = 169, UAH = 170, GEL = 171, BOV = 172, PLN = 173, BRL = 174, CLF = 175, XSU = 176, USN = 177 }

	export enum LinkCreateRequestIntent { authorization = 0, preauthorization = 1 }

	export enum LinkCreateRequestLanguage { de_DE = 0, en_US = 1 }

	export enum LinkCreateRequestMode { live = 0, test = 1 }

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

	export enum LinkResponsePaymentMethod { visa = 0, mastercard = 1, amex = 2, paypal = 3, sofort = 4, paydirekt = 5, 'postfinance-e' = 6, 'postfinance-card' = 7, bancontact = 8, przelewy24 = 9, alipay = 10, ideal = 11, eps = 12, giropay = 13, sepa = 14 }

	export enum LinkResponseStatus { ready = 0, created = 1, executed = 2, expired = 3, deactivated = 4 }

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

