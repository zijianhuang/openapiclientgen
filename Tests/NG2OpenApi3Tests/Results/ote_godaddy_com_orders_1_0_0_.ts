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

	export enum AddressCountry { AC = 0, AD = 1, AE = 2, AF = 3, AG = 4, AI = 5, AL = 6, AM = 7, AO = 8, AQ = 9, AR = 10, AS = 11, AT = 12, AU = 13, AW = 14, AX = 15, AZ = 16, BA = 17, BB = 18, BD = 19, BE = 20, BF = 21, BG = 22, BH = 23, BI = 24, BJ = 25, BM = 26, BN = 27, BO = 28, BQ = 29, BR = 30, BS = 31, BT = 32, BV = 33, BW = 34, BY = 35, BZ = 36, CA = 37, CC = 38, CD = 39, CF = 40, CG = 41, CH = 42, CI = 43, CK = 44, CL = 45, CM = 46, CN = 47, CO = 48, CR = 49, CV = 50, CW = 51, CX = 52, CY = 53, CZ = 54, DE = 55, DJ = 56, DK = 57, DM = 58, DO = 59, DZ = 60, EC = 61, EE = 62, EG = 63, EH = 64, ER = 65, ES = 66, ET = 67, FI = 68, FJ = 69, FK = 70, FM = 71, FO = 72, FR = 73, GA = 74, GB = 75, GD = 76, GE = 77, GF = 78, GG = 79, GH = 80, GI = 81, GL = 82, GM = 83, GN = 84, GP = 85, GQ = 86, GR = 87, GS = 88, GT = 89, GU = 90, GW = 91, GY = 92, HK = 93, HM = 94, HN = 95, HR = 96, HT = 97, HU = 98, ID = 99, IE = 100, IL = 101, IM = 102, IN = 103, IO = 104, IQ = 105, IS = 106, IT = 107, JE = 108, JM = 109, JO = 110, JP = 111, KE = 112, KG = 113, KH = 114, KI = 115, KM = 116, KN = 117, KR = 118, KV = 119, KW = 120, KY = 121, KZ = 122, LA = 123, LB = 124, LC = 125, LI = 126, LK = 127, LR = 128, LS = 129, LT = 130, LU = 131, LV = 132, LY = 133, MA = 134, MC = 135, MD = 136, ME = 137, MG = 138, MH = 139, MK = 140, ML = 141, MM = 142, MN = 143, MO = 144, MP = 145, MQ = 146, MR = 147, MS = 148, MT = 149, MU = 150, MV = 151, MW = 152, MX = 153, MY = 154, MZ = 155, NA = 156, NC = 157, NE = 158, NF = 159, NG = 160, NI = 161, NL = 162, NO = 163, NP = 164, NR = 165, NU = 166, NZ = 167, OM = 168, PA = 169, PE = 170, PF = 171, PG = 172, PH = 173, PK = 174, PL = 175, PM = 176, PN = 177, PR = 178, PS = 179, PT = 180, PW = 181, PY = 182, QA = 183, RE = 184, RO = 185, RS = 186, RU = 187, RW = 188, SA = 189, SB = 190, SC = 191, SE = 192, SG = 193, SH = 194, SI = 195, SJ = 196, SK = 197, SL = 198, SM = 199, SN = 200, SO = 201, SR = 202, ST = 203, SV = 204, SX = 205, SZ = 206, TC = 207, TD = 208, TF = 209, TG = 210, TH = 211, TJ = 212, TK = 213, TL = 214, TM = 215, TN = 216, TO = 217, TP = 218, TR = 219, TT = 220, TV = 221, TW = 222, TZ = 223, UA = 224, UG = 225, UM = 226, US = 227, UY = 228, UZ = 229, VA = 230, VC = 231, VE = 232, VG = 233, VI = 234, VN = 235, VU = 236, WF = 237, WS = 238, YE = 239, YT = 240, ZA = 241, ZM = 242, ZW = 243 }

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
		period?: number | null;

		/** The unit of time that periodCount is measured in */
		periodUnit?: LineItemPeriodUnit | null;

		/** Unique identifier of the current product */
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
		period: FormControl<number | null | undefined>,

		/** The unit of time that periodCount is measured in */
		periodUnit: FormControl<LineItemPeriodUnit | null | undefined>,

		/** Unique identifier of the current product */
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

	export enum LineItemPeriodUnit { MONTH = 0, QUARTER = 1, SEMI_ANNUAL = 2, YEAR = 3, ONE_TIME = 4 }

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
		rate?: number | null;
	}
	export interface LineItemPricingTaxDetailFormProperties {

		/** Tax amount */
		amount: FormControl<string | null | undefined>,
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

	export enum PaymentCategory { CREDIT_CARD = 0, PAYPAL = 1, ACH = 2, GIFT_CARD = 3, IN_STORE_CREDIT = 4, PREPAID = 5 }

	export enum PaymentSubcategory { CHECKING_PERSONAL = 0, CHECKING_BUSINESS = 1, VISA = 2, MASTER_CARD = 3, AMEX = 4, JCB = 5, UNIONPAY = 6 }

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

		/** Number of records available */
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

		/** Number of records available */
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
		 * @param {number} paymentProfileId Payment profile id to use as the filter of results
		 * @param {string} parentOrderId Parent order id to use as the filter of results
		 * @param {number} offset Number of results to skip for pagination
		 * @param {number} limit Maximum number of items to return
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

	export enum ListSort { createdAt = 0, '-createdAt' = 1, orderId = 2, '-orderId' = 3, 'pricing.total' = 4, '-pricing.total' = 5 }

}

