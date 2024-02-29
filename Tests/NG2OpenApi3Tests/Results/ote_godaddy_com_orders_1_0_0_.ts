import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address {

		/** Required */
		address1: string;
		address2?: string | null;

		/** Required */
		city: string;

		/**
		 * Two-letter ISO country code to be used as a hint for target region<br/><br/>
		 * NOTE: These are sample values, there are many
		 * <a href='http://www.iso.org/iso/country_codes.htm'>more</a>
		 * Required
		 */
		country: AddressCountry;

		/**
		 * Postal or zip code
		 * Required
		 */
		postalCode: string;

		/**
		 * State or province or territory
		 * Required
		 */
		state: string;
	}
	export interface AddressFormProperties {

		/** Required */
		address1: FormControl<string | null | undefined>,
		address2: FormControl<string | null | undefined>,

		/** Required */
		city: FormControl<string | null | undefined>,

		/**
		 * Two-letter ISO country code to be used as a hint for target region<br/><br/>
		 * NOTE: These are sample values, there are many
		 * <a href='http://www.iso.org/iso/country_codes.htm'>more</a>
		 * Required
		 */
		country: FormControl<AddressCountry | null | undefined>,

		/**
		 * Postal or zip code
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * State or province or territory
		 * Required
		 */
		state: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<AddressCountry | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddressCountry { AC = 'AC', AD = 'AD', AE = 'AE', AF = 'AF', AG = 'AG', AI = 'AI', AL = 'AL', AM = 'AM', AO = 'AO', AQ = 'AQ', AR = 'AR', AS = 'AS', AT = 'AT', AU = 'AU', AW = 'AW', AX = 'AX', AZ = 'AZ', BA = 'BA', BB = 'BB', BD = 'BD', BE = 'BE', BF = 'BF', BG = 'BG', BH = 'BH', BI = 'BI', BJ = 'BJ', BM = 'BM', BN = 'BN', BO = 'BO', BQ = 'BQ', BR = 'BR', BS = 'BS', BT = 'BT', BV = 'BV', BW = 'BW', BY = 'BY', BZ = 'BZ', CA = 'CA', CC = 'CC', CD = 'CD', CF = 'CF', CG = 'CG', CH = 'CH', CI = 'CI', CK = 'CK', CL = 'CL', CM = 'CM', CN = 'CN', CO = 'CO', CR = 'CR', CV = 'CV', CW = 'CW', CX = 'CX', CY = 'CY', CZ = 'CZ', DE = 'DE', DJ = 'DJ', DK = 'DK', DM = 'DM', DO = 'DO', DZ = 'DZ', EC = 'EC', EE = 'EE', EG = 'EG', EH = 'EH', ER = 'ER', ES = 'ES', ET = 'ET', FI = 'FI', FJ = 'FJ', FK = 'FK', FM = 'FM', FO = 'FO', FR = 'FR', GA = 'GA', GB = 'GB', GD = 'GD', GE = 'GE', GF = 'GF', GG = 'GG', GH = 'GH', GI = 'GI', GL = 'GL', GM = 'GM', GN = 'GN', GP = 'GP', GQ = 'GQ', GR = 'GR', GS = 'GS', GT = 'GT', GU = 'GU', GW = 'GW', GY = 'GY', HK = 'HK', HM = 'HM', HN = 'HN', HR = 'HR', HT = 'HT', HU = 'HU', ID = 'ID', IE = 'IE', IL = 'IL', IM = 'IM', IN = 'IN', IO = 'IO', IQ = 'IQ', IS = 'IS', IT = 'IT', JE = 'JE', JM = 'JM', JO = 'JO', JP = 'JP', KE = 'KE', KG = 'KG', KH = 'KH', KI = 'KI', KM = 'KM', KN = 'KN', KR = 'KR', KV = 'KV', KW = 'KW', KY = 'KY', KZ = 'KZ', LA = 'LA', LB = 'LB', LC = 'LC', LI = 'LI', LK = 'LK', LR = 'LR', LS = 'LS', LT = 'LT', LU = 'LU', LV = 'LV', LY = 'LY', MA = 'MA', MC = 'MC', MD = 'MD', ME = 'ME', MG = 'MG', MH = 'MH', MK = 'MK', ML = 'ML', MM = 'MM', MN = 'MN', MO = 'MO', MP = 'MP', MQ = 'MQ', MR = 'MR', MS = 'MS', MT = 'MT', MU = 'MU', MV = 'MV', MW = 'MW', MX = 'MX', MY = 'MY', MZ = 'MZ', NA = 'NA', NC = 'NC', NE = 'NE', NF = 'NF', NG = 'NG', NI = 'NI', NL = 'NL', NO = 'NO', NP = 'NP', NR = 'NR', NU = 'NU', NZ = 'NZ', OM = 'OM', PA = 'PA', PE = 'PE', PF = 'PF', PG = 'PG', PH = 'PH', PK = 'PK', PL = 'PL', PM = 'PM', PN = 'PN', PR = 'PR', PS = 'PS', PT = 'PT', PW = 'PW', PY = 'PY', QA = 'QA', RE = 'RE', RO = 'RO', RS = 'RS', RU = 'RU', RW = 'RW', SA = 'SA', SB = 'SB', SC = 'SC', SE = 'SE', SG = 'SG', SH = 'SH', SI = 'SI', SJ = 'SJ', SK = 'SK', SL = 'SL', SM = 'SM', SN = 'SN', SO = 'SO', SR = 'SR', ST = 'ST', SV = 'SV', SX = 'SX', SZ = 'SZ', TC = 'TC', TD = 'TD', TF = 'TF', TG = 'TG', TH = 'TH', TJ = 'TJ', TK = 'TK', TL = 'TL', TM = 'TM', TN = 'TN', TO = 'TO', TP = 'TP', TR = 'TR', TT = 'TT', TV = 'TV', TW = 'TW', TZ = 'TZ', UA = 'UA', UG = 'UG', UM = 'UM', US = 'US', UY = 'UY', UZ = 'UZ', VA = 'VA', VC = 'VC', VE = 'VE', VG = 'VG', VI = 'VI', VN = 'VN', VU = 'VU', WF = 'WF', WS = 'WS', YE = 'YE', YT = 'YT', ZA = 'ZA', ZM = 'ZM', ZW = 'ZW' }

	export interface BillTo {

		/** Required */
		contact: Contact;

		/** Tax id used for calculating the tax the customer is required to pay */
		taxId?: string | null;
	}
	export interface BillToFormProperties {

		/** Tax id used for calculating the tax the customer is required to pay */
		taxId: FormControl<string | null | undefined>,
	}
	export function CreateBillToFormGroup() {
		return new FormGroup<BillToFormProperties>({
			taxId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contact {

		/** Required */
		addressMailing: Address;

		/** Required */
		email: string;
		fax?: string | null;
		jobTitle?: string | null;

		/** Required */
		nameFirst: string;

		/** Required */
		nameLast: string;
		nameMiddle?: string | null;
		organization?: string | null;

		/** Required */
		phone: string;
	}
	export interface ContactFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		jobTitle: FormControl<string | null | undefined>,

		/** Required */
		nameFirst: FormControl<string | null | undefined>,

		/** Required */
		nameLast: FormControl<string | null | undefined>,
		nameMiddle: FormControl<string | null | undefined>,
		organization: FormControl<string | null | undefined>,

		/** Required */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fax: new FormControl<string | null | undefined>(undefined),
			jobTitle: new FormControl<string | null | undefined>(undefined),
			nameFirst: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameLast: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameMiddle: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** List of the specific fields, and the errors found with their contents */
		fields?: Array<ErrorField>;

		/** Human-readable, English description of the error */
		message?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the error */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorField {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** Human-readable, English description of the problem with the contents of the field */
		message?: string | null;

		/**
		 * <ul>
		 * <li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li>
		 * <strong style='margin-left: 12px;'>OR</strong>
		 * <li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li>
		 * </ul>
		 * Required
		 */
		path: string;

		/** JSONPath referring to a field containing an error, which is referenced by `path` */
		pathRelated?: string | null;
	}
	export interface ErrorFieldFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the problem with the contents of the field */
		message: FormControl<string | null | undefined>,

		/**
		 * <ul>
		 * <li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li>
		 * <strong style='margin-left: 12px;'>OR</strong>
		 * <li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li>
		 * </ul>
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/** JSONPath referring to a field containing an error, which is referenced by `path` */
		pathRelated: FormControl<string | null | undefined>,
	}
	export function CreateErrorFieldFormGroup() {
		return new FormGroup<ErrorFieldFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pathRelated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorLimit {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** List of the specific fields, and the errors found with their contents */
		fields?: Array<ErrorField>;

		/** Human-readable, English description of the error */
		message?: string | null;

		/**
		 * Number of seconds to wait before attempting a similar request
		 * Required
		 */
		retryAfterSec: string;
	}
	export interface ErrorLimitFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the error */
		message: FormControl<string | null | undefined>,

		/**
		 * Number of seconds to wait before attempting a similar request
		 * Required
		 */
		retryAfterSec: FormControl<string | null | undefined>,
	}
	export function CreateErrorLimitFormGroup() {
		return new FormGroup<ErrorLimitFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			retryAfterSec: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LineItem {

		/** A collection of domain names purchased if the current product is domain */
		domains?: Array<string>;

		/**
		 * Human readable description of the current product
		 * Required
		 */
		label: string;

		/** Type: double */
		period?: number | null;

		/** The unit of time that periodCount is measured in */
		periodUnit?: LineItemPeriodUnit | null;

		/**
		 * Unique identifier of the current product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pfid?: number | null;

		/** Required */
		pricing: LineItemPricing;

		/**
		 * Number of the current product included in the specified order
		 * Required
		 */
		quantity: string;
		taxCollector?: LineItemTaxCollector;
	}
	export interface LineItemFormProperties {

		/**
		 * Human readable description of the current product
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/** Type: double */
		period: FormControl<number | null | undefined>,

		/** The unit of time that periodCount is measured in */
		periodUnit: FormControl<LineItemPeriodUnit | null | undefined>,

		/**
		 * Unique identifier of the current product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pfid: FormControl<number | null | undefined>,

		/**
		 * Number of the current product included in the specified order
		 * Required
		 */
		quantity: FormControl<string | null | undefined>,
	}
	export function CreateLineItemFormGroup() {
		return new FormGroup<LineItemFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined),
			periodUnit: new FormControl<LineItemPeriodUnit | null | undefined>(undefined),
			pfid: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LineItemPeriodUnit { MONTH = 'MONTH', QUARTER = 'QUARTER', SEMI_ANNUAL = 'SEMI_ANNUAL', YEAR = 'YEAR', ONE_TIME = 'ONE_TIME' }

	export interface LineItemPricing {

		/**
		 * Discount off of sale price for given `quantity` and `period` <pre>`discount` = `sale` - `subtotal`</pre>
		 * Required
		 */
		discount: string;

		/** Required */
		fees: OrderFee;

		/**
		 * List price for given `quantity` and `period`
		 * Required
		 */
		list: string;

		/**
		 * Actual price for the current product
		 * Required
		 */
		sale: string;

		/**
		 * Savings off of list price for given `quantity` and `period` <pre>`savings` = `list` - `subtotal`</pre>
		 * Required
		 */
		savings: string;

		/**
		 * Price with any discounts and without taxes or fees for given `quantity` and `period`
		 * Required
		 */
		subtotal: string;

		/**
		 * Taxes for given `quantity` and `period`
		 * Required
		 */
		taxes: string;

		/**
		 * Pricing for a single unit of the given item
		 * Required
		 */
		unit: string;
	}
	export interface LineItemPricingFormProperties {

		/**
		 * Discount off of sale price for given `quantity` and `period` <pre>`discount` = `sale` - `subtotal`</pre>
		 * Required
		 */
		discount: FormControl<string | null | undefined>,

		/**
		 * List price for given `quantity` and `period`
		 * Required
		 */
		list: FormControl<string | null | undefined>,

		/**
		 * Actual price for the current product
		 * Required
		 */
		sale: FormControl<string | null | undefined>,

		/**
		 * Savings off of list price for given `quantity` and `period` <pre>`savings` = `list` - `subtotal`</pre>
		 * Required
		 */
		savings: FormControl<string | null | undefined>,

		/**
		 * Price with any discounts and without taxes or fees for given `quantity` and `period`
		 * Required
		 */
		subtotal: FormControl<string | null | undefined>,

		/**
		 * Taxes for given `quantity` and `period`
		 * Required
		 */
		taxes: FormControl<string | null | undefined>,

		/**
		 * Pricing for a single unit of the given item
		 * Required
		 */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateLineItemPricingFormGroup() {
		return new FormGroup<LineItemPricingFormProperties>({
			discount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			list: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sale: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			savings: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subtotal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taxes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LineItemPricingTaxDetail {

		/** Tax amount */
		amount?: string | null;

		/** Type: double */
		rate?: number | null;
	}
	export interface LineItemPricingTaxDetailFormProperties {

		/** Tax amount */
		amount: FormControl<string | null | undefined>,

		/** Type: double */
		rate: FormControl<number | null | undefined>,
	}
	export function CreateLineItemPricingTaxDetailFormGroup() {
		return new FormGroup<LineItemPricingTaxDetailFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LineItemSummary {

		/**
		 * Product label of the current line item
		 * Required
		 */
		label: string;
	}
	export interface LineItemSummaryFormProperties {

		/**
		 * Product label of the current line item
		 * Required
		 */
		label: FormControl<string | null | undefined>,
	}
	export function CreateLineItemSummaryFormGroup() {
		return new FormGroup<LineItemSummaryFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LineItemTaxCollector {

		/**
		 * Unique identifier for the company
		 * Required
		 */
		taxCollectorId: string;
	}
	export interface LineItemTaxCollectorFormProperties {

		/**
		 * Unique identifier for the company
		 * Required
		 */
		taxCollectorId: FormControl<string | null | undefined>,
	}
	export function CreateLineItemTaxCollectorFormGroup() {
		return new FormGroup<LineItemTaxCollectorFormProperties>({
			taxCollectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LineItemUnitPricing {

		/**
		 * Discount without consideration of `quantity` and `period`
		 * Required
		 */
		discount: string;

		/** Required */
		fees: OrderFee;

		/**
		 * List price without consideration of `quantity` and `period`
		 * Required
		 */
		list: string;

		/**
		 * Sale price without consideration of `quantity` and `period`
		 * Required
		 */
		sale: string;

		/**
		 * Savings without consideration of `quantity` and `period`
		 * Required
		 */
		savings: string;

		/**
		 * Taxes without consideration of `quantity` and `period`
		 * Required
		 */
		taxes: string;
	}
	export interface LineItemUnitPricingFormProperties {

		/**
		 * Discount without consideration of `quantity` and `period`
		 * Required
		 */
		discount: FormControl<string | null | undefined>,

		/**
		 * List price without consideration of `quantity` and `period`
		 * Required
		 */
		list: FormControl<string | null | undefined>,

		/**
		 * Sale price without consideration of `quantity` and `period`
		 * Required
		 */
		sale: FormControl<string | null | undefined>,

		/**
		 * Savings without consideration of `quantity` and `period`
		 * Required
		 */
		savings: FormControl<string | null | undefined>,

		/**
		 * Taxes without consideration of `quantity` and `period`
		 * Required
		 */
		taxes: FormControl<string | null | undefined>,
	}
	export function CreateLineItemUnitPricingFormGroup() {
		return new FormGroup<LineItemUnitPricingFormProperties>({
			discount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			list: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sale: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			savings: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taxes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Order {

		/** Required */
		billTo: BillTo;

		/**
		 * Date and time when the current order is created on
		 * Required
		 */
		createdAt: string;

		/**
		 * Currency in which the order has been placed
		 * Required
		 */
		currency: string;

		/** Required */
		items: Array<LineItem>;

		/**
		 * Unique identifier of current order
		 * Required
		 */
		orderId: string;

		/**
		 * Unique identifier of the parent order. All refund/chargeback orders are tied to the original order.
		 * The orginal order's `orderId` is the `parentOrderId` of refund/chargeback orders
		 */
		parentOrderId?: string | null;

		/** Required */
		payments: Array<Payment>;

		/** Required */
		pricing: OrderPricing;
	}
	export interface OrderFormProperties {

		/**
		 * Date and time when the current order is created on
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/**
		 * Currency in which the order has been placed
		 * Required
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of current order
		 * Required
		 */
		orderId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the parent order. All refund/chargeback orders are tied to the original order.
		 * The orginal order's `orderId` is the `parentOrderId` of refund/chargeback orders
		 */
		parentOrderId: FormControl<string | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentOrderId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Payment {

		/**
		 * Amount paid by the current payment
		 * Required
		 */
		amount: string;

		/**
		 * The category of payment method used at the time of purchase.
		 * Most common values are listed in the enum.
		 * Required
		 */
		category: PaymentCategory;

		/**
		 * Unique identifier of the payment profile used by current payment
		 * Required
		 */
		paymentProfileId: string;

		/**
		 * The subcategory of payment method used at the time of purchase.
		 * This field is only set for certain payment categories, such as ACH and CREDIT_CARD.
		 * Most common values are listed in the enum.
		 */
		subcategory?: PaymentSubcategory | null;
	}
	export interface PaymentFormProperties {

		/**
		 * Amount paid by the current payment
		 * Required
		 */
		amount: FormControl<string | null | undefined>,

		/**
		 * The category of payment method used at the time of purchase.
		 * Most common values are listed in the enum.
		 * Required
		 */
		category: FormControl<PaymentCategory | null | undefined>,

		/**
		 * Unique identifier of the payment profile used by current payment
		 * Required
		 */
		paymentProfileId: FormControl<string | null | undefined>,

		/**
		 * The subcategory of payment method used at the time of purchase.
		 * This field is only set for certain payment categories, such as ACH and CREDIT_CARD.
		 * Most common values are listed in the enum.
		 */
		subcategory: FormControl<PaymentSubcategory | null | undefined>,
	}
	export function CreatePaymentFormGroup() {
		return new FormGroup<PaymentFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			category: new FormControl<PaymentCategory | null | undefined>(undefined, [Validators.required]),
			paymentProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subcategory: new FormControl<PaymentSubcategory | null | undefined>(undefined),
		});

	}

	export enum PaymentCategory { CREDIT_CARD = 'CREDIT_CARD', PAYPAL = 'PAYPAL', ACH = 'ACH', GIFT_CARD = 'GIFT_CARD', IN_STORE_CREDIT = 'IN_STORE_CREDIT', PREPAID = 'PREPAID' }

	export enum PaymentSubcategory { CHECKING_PERSONAL = 'CHECKING_PERSONAL', CHECKING_BUSINESS = 'CHECKING_BUSINESS', VISA = 'VISA', MASTER_CARD = 'MASTER_CARD', AMEX = 'AMEX', JCB = 'JCB', UNIONPAY = 'UNIONPAY' }

	export interface OrderFee {

		/** Domain registration transaction fee charged by ICANN */
		icann?: string | null;

		/**
		 * Sum of all fees
		 * Required
		 */
		total: string;
	}
	export interface OrderFeeFormProperties {

		/** Domain registration transaction fee charged by ICANN */
		icann: FormControl<string | null | undefined>,

		/**
		 * Sum of all fees
		 * Required
		 */
		total: FormControl<string | null | undefined>,
	}
	export function CreateOrderFeeFormGroup() {
		return new FormGroup<OrderFeeFormProperties>({
			icann: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OrderList {

		/**
		 * A collection of orders
		 * Required
		 */
		orders: Array<OrderSummary>;

		/** Required */
		pagination: Pagination;
	}
	export interface OrderListFormProperties {
	}
	export function CreateOrderListFormGroup() {
		return new FormGroup<OrderListFormProperties>({
		});

	}

	export interface OrderSummary {

		/**
		 * Date and time when the current order was created
		 * Required
		 */
		createdAt: string;

		/**
		 * Currency in which the order was placed
		 * Required
		 */
		currency: string;

		/**
		 * Sets of two or more line items in current order
		 * Required
		 */
		items: Array<LineItemSummary>;

		/**
		 * Unique identifier of the current order
		 * Required
		 */
		orderId: string;

		/**
		 * Unique identifier of the parent order. All refund/chargeback orders are tied to the original order.
		 * The orginal order's `orderId` is the `parentOrderId` of refund/chargeback orders
		 */
		parentOrderId?: string | null;

		/** Required */
		pricing: OrderSummaryPricing;
	}
	export interface OrderSummaryFormProperties {

		/**
		 * Date and time when the current order was created
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/**
		 * Currency in which the order was placed
		 * Required
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the current order
		 * Required
		 */
		orderId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the parent order. All refund/chargeback orders are tied to the original order.
		 * The orginal order's `orderId` is the `parentOrderId` of refund/chargeback orders
		 */
		parentOrderId: FormControl<string | null | undefined>,
	}
	export function CreateOrderSummaryFormGroup() {
		return new FormGroup<OrderSummaryFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentOrderId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderPricing {

		/**
		 * Discount from promotional pricing
		 * Required
		 */
		discount: string;

		/** Required */
		fees: OrderFee;

		/** Type: double */
		id?: number | null;

		/**
		 * Sum of list prices for the entire cart
		 * Required
		 */
		list: string;

		/**
		 * Savings off of list price <pre>`savings` = `list` - `subtotal`</pre>
		 * Required
		 */
		savings: string;

		/**
		 * Price with `discount` and without taxes or fees
		 * Required
		 */
		subtotal: string;

		/** A collection of line item tax details */
		taxDetails?: Array<LineItemPricingTaxDetail>;

		/**
		 * Taxes for the entire cart
		 * Required
		 */
		taxes: string;

		/**
		 * Price the customer pays <pre>`total` = `subtotal` + `taxes` + `fees.total`</pre>
		 * Required
		 */
		total: string;
	}
	export interface OrderPricingFormProperties {

		/**
		 * Discount from promotional pricing
		 * Required
		 */
		discount: FormControl<string | null | undefined>,

		/** Type: double */
		id: FormControl<number | null | undefined>,

		/**
		 * Sum of list prices for the entire cart
		 * Required
		 */
		list: FormControl<string | null | undefined>,

		/**
		 * Savings off of list price <pre>`savings` = `list` - `subtotal`</pre>
		 * Required
		 */
		savings: FormControl<string | null | undefined>,

		/**
		 * Price with `discount` and without taxes or fees
		 * Required
		 */
		subtotal: FormControl<string | null | undefined>,

		/**
		 * Taxes for the entire cart
		 * Required
		 */
		taxes: FormControl<string | null | undefined>,

		/**
		 * Price the customer pays <pre>`total` = `subtotal` + `taxes` + `fees.total`</pre>
		 * Required
		 */
		total: FormControl<string | null | undefined>,
	}
	export function CreateOrderPricingFormGroup() {
		return new FormGroup<OrderPricingFormProperties>({
			discount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			list: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			savings: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subtotal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taxes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OrderSummaryPricing {

		/**
		 * Total amount charged for the current order. Negative for Refund and Chargeback
		 * Required
		 */
		total: string;
	}
	export interface OrderSummaryPricingFormProperties {

		/**
		 * Total amount charged for the current order. Negative for Refund and Chargeback
		 * Required
		 */
		total: FormControl<string | null | undefined>,
	}
	export function CreateOrderSummaryPricingFormGroup() {
		return new FormGroup<OrderSummaryPricingFormProperties>({
			total: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Pagination {

		/** URI to access the first page */
		first?: string | null;

		/** URI to access the last page */
		last?: string | null;

		/** URI to access the next page */
		next?: string | null;

		/** URI to access the previous page */
		previous?: string | null;

		/**
		 * Number of records available
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface PaginationFormProperties {

		/** URI to access the first page */
		first: FormControl<string | null | undefined>,

		/** URI to access the last page */
		last: FormControl<string | null | undefined>,

		/** URI to access the next page */
		next: FormControl<string | null | undefined>,

		/** URI to access the previous page */
		previous: FormControl<string | null | undefined>,

		/**
		 * Number of records available
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			first: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of orders for the authenticated shopper. Only one filter may be used at a time
		 * <strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>
		 * Get v1/orders
		 * @param {string} periodStart Start of range indicating what time-frame should be returned. Inclusive
		 * @param {string} periodEnd End of range indicating what time-frame should be returned. Inclusive
		 * @param {string} domain Domain name to use as the filter of results
		 * @param {number} productGroupId Product group id to use as the filter of results
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} paymentProfileId Payment profile id to use as the filter of results
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} parentOrderId Parent order id to use as the filter of results
		 * @param {number} offset Number of results to skip for pagination
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Maximum number of items to return
		 *     Minimum: 1    Maximum: 10000
		 * @param {ListSort} sort Property name that will be used to sort results. '-' indicates descending
		 * @return {OrderList} Request was successful
		 */
		List(periodStart: string | null | undefined, periodEnd: string | null | undefined, domain: string | null | undefined, productGroupId: number | null | undefined, paymentProfileId: number | null | undefined, parentOrderId: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, sort: ListSort | null | undefined): Observable<OrderList> {
			return this.http.get<OrderList>(this.baseUri + 'v1/orders?periodStart=' + (periodStart == null ? '' : encodeURIComponent(periodStart)) + '&periodEnd=' + (periodEnd == null ? '' : encodeURIComponent(periodEnd)) + '&domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&productGroupId=' + productGroupId + '&paymentProfileId=' + paymentProfileId + '&parentOrderId=' + (parentOrderId == null ? '' : encodeURIComponent(parentOrderId)) + '&offset=' + offset + '&limit=' + limit + '&sort=' + sort, {});
		}

		/**
		 * Retrieve details for specified order
		 * <strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>
		 * Get v1/orders/{orderId}
		 * @param {string} orderId Order id whose details are to be retrieved
		 * @return {Order} Request was successful
		 */
		Get(orderId: string): Observable<Order> {
			return this.http.get<Order>(this.baseUri + 'v1/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)), {});
		}
	}

	export enum ListSort { createdAt = 'createdAt', '-createdAt' = '-createdAt', orderId = 'orderId', '-orderId' = '-orderId', 'pricing.total' = 'pricing.total', '-pricing.total' = '-pricing.total' }

}

