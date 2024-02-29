import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
	export interface Amount {

		/** The three-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " target="_blank">ISO 4217</a> code representing the currency of the amount in the <b> convertedFromValue</b> field. This value is the pre-conversion currency.<br><br>This field is only returned if/when currency conversion was applied by eBay. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		convertedFromCurrency?: string | null;

		/** The monetary amount before any conversion is performed, in the currency specified by the <b> convertedFromCurrency</b> field. This value is the pre-conversion amount. The <b> value</b> field contains the converted amount of this value, in the currency specified by the <b> currency</b> field.<br><br>This field is only returned if/when currency conversion was applied by eBay. */
		convertedFromValue?: string | null;

		/** A three-letter ISO 4217 code that indicates the currency of the amount in the <b>value</b> field. This field is always returned with any container using <b>Amount</b> type. <br><br><b>Default</b>: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		currency?: string | null;

		/** The exchange rate used for the monetary conversion. This field shows the exchange rate used to convert the dollar value in the <b>value</b> field from the dollar value in the <b>convertedFromValue</b> field.<br><br>This field is only returned when eBay does a currency version, and a currency conversion is generally needed if the buyer is viewing, or has purchased an item on an international site. <br><br>This field is only returned if/when currency conversion was applied by eBay. */
		exchangeRate?: string | null;

		/** The monetary amount, in the currency specified by the <b>currency</b> field. This field is always returned with any container using <b>Amount</b> type. */
		value?: string | null;
	}

	/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
	export interface AmountFormProperties {

		/** The three-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " target="_blank">ISO 4217</a> code representing the currency of the amount in the <b> convertedFromValue</b> field. This value is the pre-conversion currency.<br><br>This field is only returned if/when currency conversion was applied by eBay. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		convertedFromCurrency: FormControl<string | null | undefined>,

		/** The monetary amount before any conversion is performed, in the currency specified by the <b> convertedFromCurrency</b> field. This value is the pre-conversion amount. The <b> value</b> field contains the converted amount of this value, in the currency specified by the <b> currency</b> field.<br><br>This field is only returned if/when currency conversion was applied by eBay. */
		convertedFromValue: FormControl<string | null | undefined>,

		/** A three-letter ISO 4217 code that indicates the currency of the amount in the <b>value</b> field. This field is always returned with any container using <b>Amount</b> type. <br><br><b>Default</b>: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		currency: FormControl<string | null | undefined>,

		/** The exchange rate used for the monetary conversion. This field shows the exchange rate used to convert the dollar value in the <b>value</b> field from the dollar value in the <b>convertedFromValue</b> field.<br><br>This field is only returned when eBay does a currency version, and a currency conversion is generally needed if the buyer is viewing, or has purchased an item on an international site. <br><br>This field is only returned if/when currency conversion was applied by eBay. */
		exchangeRate: FormControl<string | null | undefined>,

		/** The monetary amount, in the currency specified by the <b>currency</b> field. This field is always returned with any container using <b>Amount</b> type. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmountFormGroup() {
		return new FormGroup<AmountFormProperties>({
			convertedFromCurrency: new FormControl<string | null | undefined>(undefined),
			convertedFromValue: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			exchangeRate: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the <b>balanceAdjustment</b> container, which shows the seller payout balance that will be applied toward the charges outlined in the <b>charges</b> array. */
	export interface BalanceAdjustment {

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		adjustmentAmount?: Amount;

		/** The enumeration value returned here indicates if the charge is a <code>DEBIT</code> or a <code>CREDIT</code> to the seller. Generally, all transfer transaction types are going to be <code>DEBIT</code>, since the money is being tranferred from the seller to eBay. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		adjustmentType?: string | null;
	}

	/** This type is used by the <b>balanceAdjustment</b> container, which shows the seller payout balance that will be applied toward the charges outlined in the <b>charges</b> array. */
	export interface BalanceAdjustmentFormProperties {

		/** The enumeration value returned here indicates if the charge is a <code>DEBIT</code> or a <code>CREDIT</code> to the seller. Generally, all transfer transaction types are going to be <code>DEBIT</code>, since the money is being tranferred from the seller to eBay. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		adjustmentType: FormControl<string | null | undefined>,
	}
	export function CreateBalanceAdjustmentFormGroup() {
		return new FormGroup<BalanceAdjustmentFormProperties>({
			adjustmentType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used to express details about the buyer associated with an order. At this time, the only field in this type is the eBay user ID of the buyer, but more fields may get added at a later date. */
	export interface Buyer {

		/** The eBay user ID of the order's buyer. */
		username?: string | null;
	}

	/** This type is used to express details about the buyer associated with an order. At this time, the only field in this type is the eBay user ID of the buyer, but more fields may get added at a later date. */
	export interface BuyerFormProperties {

		/** The eBay user ID of the order's buyer. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateBuyerFormGroup() {
		return new FormGroup<BuyerFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the <b>charge</b> container, which is an array of one or more charges related to the transfer. */
	export interface Charge {

		/** The unique identifier of an order cancellation. This field is only applicable and returned if the charge is related to an order  cancellation. */
		cancellationId?: string | null;

		/** The unique identifier of a case filed against an order. This field is only applicable and returned if the charge is related to a case filed against an order. */
		caseId?: string | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		chargeNetAmount?: Amount;

		/** The unique identifier of an Item Not Received (INR) inquiry filed against an order. This field is only applicable and returned if the charge is related to has an INR inquiry filed against the order. */
		inquiryId?: string | null;

		/** The unique identifier of the order that is associated with the charge. */
		orderId?: string | null;

		/** The unique identifier of a third-party payment dispute filed against an order. This occurs when the buyer files a dispute against the order with their payment provider, and then the dispute comes into eBay's system. This field is only applicable and returned if the charge is related to a third-party payment dispute filed against an order. */
		paymentDisputeId?: string | null;

		/** The unique identifier of a buyer refund associated with the charge. */
		refundId?: string | null;

		/** The unique identifier of an order return. This field is only applicable and returned if the charge is related to an order that was returned by the buyer. */
		returnId?: string | null;
	}

	/** This type is used by the <b>charge</b> container, which is an array of one or more charges related to the transfer. */
	export interface ChargeFormProperties {

		/** The unique identifier of an order cancellation. This field is only applicable and returned if the charge is related to an order  cancellation. */
		cancellationId: FormControl<string | null | undefined>,

		/** The unique identifier of a case filed against an order. This field is only applicable and returned if the charge is related to a case filed against an order. */
		caseId: FormControl<string | null | undefined>,

		/** The unique identifier of an Item Not Received (INR) inquiry filed against an order. This field is only applicable and returned if the charge is related to has an INR inquiry filed against the order. */
		inquiryId: FormControl<string | null | undefined>,

		/** The unique identifier of the order that is associated with the charge. */
		orderId: FormControl<string | null | undefined>,

		/** The unique identifier of a third-party payment dispute filed against an order. This occurs when the buyer files a dispute against the order with their payment provider, and then the dispute comes into eBay's system. This field is only applicable and returned if the charge is related to a third-party payment dispute filed against an order. */
		paymentDisputeId: FormControl<string | null | undefined>,

		/** The unique identifier of a buyer refund associated with the charge. */
		refundId: FormControl<string | null | undefined>,

		/** The unique identifier of an order return. This field is only applicable and returned if the charge is related to an order that was returned by the buyer. */
		returnId: FormControl<string | null | undefined>,
	}
	export function CreateChargeFormGroup() {
		return new FormGroup<ChargeFormProperties>({
			cancellationId: new FormControl<string | null | undefined>(undefined),
			caseId: new FormControl<string | null | undefined>(undefined),
			inquiryId: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			paymentDisputeId: new FormControl<string | null | undefined>(undefined),
			refundId: new FormControl<string | null | undefined>(undefined),
			returnId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields that can be returned in an error. */
	export interface Error {

		/** Identifies the type of erro. */
		category?: string | null;

		/** Name for the primary system where the error occurred. This is relevant for application errors. */
		domain?: string | null;

		/**
		 * A unique number to identify the error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId?: number | null;

		/** An array of request elements most closely associated to the error. */
		inputRefIds?: Array<string>;

		/** A more detailed explanation of the error. */
		longMessage?: string | null;

		/** Information on how to correct the problem, in the end user's terms and language where applicable. */
		message?: string | null;

		/** An array of request elements most closely associated to the error. */
		outputRefIds?: Array<string>;

		/** An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned. */
		parameters?: Array<ErrorParameter>;

		/** Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc. */
		subdomain?: string | null;
	}

	/** This type defines the fields that can be returned in an error. */
	export interface ErrorFormProperties {

		/** Identifies the type of erro. */
		category: FormControl<string | null | undefined>,

		/** Name for the primary system where the error occurred. This is relevant for application errors. */
		domain: FormControl<string | null | undefined>,

		/**
		 * A unique number to identify the error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId: FormControl<number | null | undefined>,

		/** A more detailed explanation of the error. */
		longMessage: FormControl<string | null | undefined>,

		/** Information on how to correct the problem, in the end user's terms and language where applicable. */
		message: FormControl<string | null | undefined>,

		/** Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc. */
		subdomain: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			errorId: new FormControl<number | null | undefined>(undefined),
			longMessage: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			subdomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorParameter {

		/** The object of the error. */
		name?: string | null;

		/** The value of the object. */
		value?: string | null;
	}
	export interface ErrorParameterFormProperties {

		/** The object of the error. */
		name: FormControl<string | null | undefined>,

		/** The value of the object. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorParameterFormGroup() {
		return new FormGroup<ErrorParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used to display fees that are automatically deducted from seller payouts. */
	export interface Fee {

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		amount?: Amount;

		/** This container returns jurisdiction information about region-specific fees that are charged to sellers. */
		feeJurisdiction?: FeeJurisdiction;

		/** A description of the fee that was deducted from the seller payout. */
		feeMemo?: string | null;

		/** The enumeration value returned here indicates the type of fee that was deducted from the seller payout. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/api:FeeTypeEnum'>eBay API documentation</a> */
		feeType?: string | null;
	}

	/** This type is used to display fees that are automatically deducted from seller payouts. */
	export interface FeeFormProperties {

		/** A description of the fee that was deducted from the seller payout. */
		feeMemo: FormControl<string | null | undefined>,

		/** The enumeration value returned here indicates the type of fee that was deducted from the seller payout. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/api:FeeTypeEnum'>eBay API documentation</a> */
		feeType: FormControl<string | null | undefined>,
	}
	export function CreateFeeFormGroup() {
		return new FormGroup<FeeFormProperties>({
			feeMemo: new FormControl<string | null | undefined>(undefined),
			feeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This container returns jurisdiction information about region-specific fees that are charged to sellers. */
	export interface FeeJurisdiction {

		/** String value that indicates the name of the region to which a region-specific fee applies.<br><br>The set of valid <b>regionName</b> values that may be returned is determined by the <b>regionType</b> value.<br><br><span class="tablenote"><strong>Note:</strong> Currently, supported <b>regionName</b> values that may be returned are standard two-character country or state codes.<br><br>Typical examples include:<ul><li><b>MX</b> [Mexico]</li><li><b>IN</b> [India]</li><li><b>US</b> [United States]</li><li>CA [California]</li><li>VT [Vermont]</li><li>ME [Maine]</li></ul></span> */
		regionName?: string | null;

		/** The enumeration value returned here indicates the type of region that is collecting the corresponding fee. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:RegionTypeEnum'>eBay API documentation</a> */
		regionType?: string | null;
	}

	/** This container returns jurisdiction information about region-specific fees that are charged to sellers. */
	export interface FeeJurisdictionFormProperties {

		/** String value that indicates the name of the region to which a region-specific fee applies.<br><br>The set of valid <b>regionName</b> values that may be returned is determined by the <b>regionType</b> value.<br><br><span class="tablenote"><strong>Note:</strong> Currently, supported <b>regionName</b> values that may be returned are standard two-character country or state codes.<br><br>Typical examples include:<ul><li><b>MX</b> [Mexico]</li><li><b>IN</b> [India]</li><li><b>US</b> [United States]</li><li>CA [California]</li><li>VT [Vermont]</li><li>ME [Maine]</li></ul></span> */
		regionName: FormControl<string | null | undefined>,

		/** The enumeration value returned here indicates the type of region that is collecting the corresponding fee. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:RegionTypeEnum'>eBay API documentation</a> */
		regionType: FormControl<string | null | undefined>,
	}
	export function CreateFeeJurisdictionFormGroup() {
		return new FormGroup<FeeJurisdictionFormProperties>({
			regionName: new FormControl<string | null | undefined>(undefined),
			regionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type provided details on the funding source for the transfer. */
	export interface FundingSource {

		/** The brand name of the credit card or the name of the financial institution that is the source of payment. This field may not be populated for other funding sources. */
		brand?: string | null;

		/** This field provides a note about the funding source. If the seller's credit card or bank account is the funding source, this field might contain the last four digits of the credit card or bank account. This field may also be returned as null. */
		memo?: string | null;

		/** The string value returned here indicates the funding source. Possible values include the following:<ul><li><code>AVAILABLE_FUNDS</code>: transfer is funded with seller payout funds</li><li><code>CREDIT_CARD</code>: transfer is funded with seller's credit card</li><li><code>BANK</code>: transfer is funded with a direct debit to seller's bank account on file with eBay</li><li><code>PAY_UPON_INVOICE</code>: eBay will bill the seller for the transfer on the monthly invoice</li></ul> */
		type?: string | null;
	}

	/** This type provided details on the funding source for the transfer. */
	export interface FundingSourceFormProperties {

		/** The brand name of the credit card or the name of the financial institution that is the source of payment. This field may not be populated for other funding sources. */
		brand: FormControl<string | null | undefined>,

		/** This field provides a note about the funding source. If the seller's credit card or bank account is the funding source, this field might contain the last four digits of the credit card or bank account. This field may also be returned as null. */
		memo: FormControl<string | null | undefined>,

		/** The string value returned here indicates the funding source. Possible values include the following:<ul><li><code>AVAILABLE_FUNDS</code>: transfer is funded with seller payout funds</li><li><code>CREDIT_CARD</code>: transfer is funded with seller's credit card</li><li><code>BANK</code>: transfer is funded with a direct debit to seller's bank account on file with eBay</li><li><code>PAY_UPON_INVOICE</code>: eBay will bill the seller for the transfer on the monthly invoice</li></ul> */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFundingSourceFormGroup() {
		return new FormGroup<FundingSourceFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used to show the fees that are deducted from a seller payout for each line item in an order. */
	export interface OrderLineItem {

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		feeBasisAmount?: Amount;

		/** The unique identifier of an order line item. */
		lineItemId?: string | null;

		/** An array of all fees accrued for the order line item and deducted from a seller payout. */
		marketplaceFees?: Array<Fee>;
	}

	/** This type is used to show the fees that are deducted from a seller payout for each line item in an order. */
	export interface OrderLineItemFormProperties {

		/** The unique identifier of an order line item. */
		lineItemId: FormControl<string | null | undefined>,
	}
	export function CreateOrderLineItemFormGroup() {
		return new FormGroup<OrderLineItemFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used to express the details of one seller payout that is returned with the <strong>getPayout</strong> or <strong>getPayouts</strong> methods. */
	export interface Payout {

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		amount?: Amount;

		/** This field contains additional information provided by the bank and passed on by the payment processor; e.g., the manner in which the transaction will appear on the seller's bank statement. The field is returned only when provided by the bank and processor. */
		bankReference?: string | null;

		/** This timestamp indicates the date/time when eBay last attempted to process a seller payout but it failed. This field is only returned if a seller payout fails, and the <strong>payoutStatus</strong> value shows <code>RETRYABLE_FAILED</code> or <code>TERMINAL_FAILED</code>. A seller can filter on the <b>lastAttemptedPayoutDate</b> in a <b>getPayouts</b> request. */
		lastAttemptedPayoutDate?: string | null;

		/** This timestamp indicates when the seller payout began processing. The following format is used: <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. For example, <code>2015-08-04T19:09:02.768Z</code>. This field is still returned even if the payout was pending but failed (<strong>payoutStatus</strong> value shows <code>RETRYABLE_FAILED</code> or <code>TERMINAL_FAILED</code>). */
		payoutDate?: string | null;

		/** The unique identifier of the seller payout. This identifier is generated once eBay begins processing the payout to the seller's bank account. */
		payoutId?: string | null;

		/** This type provides details about the seller's account that received (or is scheduled to receive) a payout. */
		payoutInstrument?: PayoutInstrument;

		/** This field contains information provided by upstream components, based on internal and external commitments. A typical message would contain the expected arrival time of the payout. */
		payoutMemo?: string | null;

		/** This enumeration value indicates the current status of the seller payout. For a successful payout, the value returned will be <code>SUCCEEDED</code>. See the <strong>PayoutStatusEnum</strong> type for more details on each payout status value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:PayoutStatusEnum'>eBay API documentation</a> */
		payoutStatus?: string | null;

		/** This field provides more details about the current status of payout. The description returned here will correspond with enumeration value returned in the <strong>payoutStatus</strong> field. The following shows what description text might appear based on the different <strong>payoutStatus</strong> values:<ul><li><code>INITIATED</code>: <em>Preparing to send</em></li><li><code>SUCCEEDED</code>: <em>Funds sent</em></li><li><code>REVERSED</code>: <em>Waiting to retry : Money rejected by seller's bank</em></li><li><code>RETRYABLE_FAILED</code>: <em>Waiting to retry</em></li><li><code>TERMINAL_FAILED</code>: <em>Payout failed</em></li></ul> */
		payoutStatusDescription?: string | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		totalAmount?: Amount;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		totalFee?: Amount;

		/**
		 * This integer value indicates the number of monetary transactions (all orders, refunds, and credits, etc.) that have occurred with the corresponding payout. Its value should always be at least <code>1</code>, since there is at least one order per seller payout.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transactionCount?: number | null;
	}

	/** This type is used to express the details of one seller payout that is returned with the <strong>getPayout</strong> or <strong>getPayouts</strong> methods. */
	export interface PayoutFormProperties {

		/** This field contains additional information provided by the bank and passed on by the payment processor; e.g., the manner in which the transaction will appear on the seller's bank statement. The field is returned only when provided by the bank and processor. */
		bankReference: FormControl<string | null | undefined>,

		/** This timestamp indicates the date/time when eBay last attempted to process a seller payout but it failed. This field is only returned if a seller payout fails, and the <strong>payoutStatus</strong> value shows <code>RETRYABLE_FAILED</code> or <code>TERMINAL_FAILED</code>. A seller can filter on the <b>lastAttemptedPayoutDate</b> in a <b>getPayouts</b> request. */
		lastAttemptedPayoutDate: FormControl<string | null | undefined>,

		/** This timestamp indicates when the seller payout began processing. The following format is used: <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. For example, <code>2015-08-04T19:09:02.768Z</code>. This field is still returned even if the payout was pending but failed (<strong>payoutStatus</strong> value shows <code>RETRYABLE_FAILED</code> or <code>TERMINAL_FAILED</code>). */
		payoutDate: FormControl<string | null | undefined>,

		/** The unique identifier of the seller payout. This identifier is generated once eBay begins processing the payout to the seller's bank account. */
		payoutId: FormControl<string | null | undefined>,

		/** This field contains information provided by upstream components, based on internal and external commitments. A typical message would contain the expected arrival time of the payout. */
		payoutMemo: FormControl<string | null | undefined>,

		/** This enumeration value indicates the current status of the seller payout. For a successful payout, the value returned will be <code>SUCCEEDED</code>. See the <strong>PayoutStatusEnum</strong> type for more details on each payout status value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:PayoutStatusEnum'>eBay API documentation</a> */
		payoutStatus: FormControl<string | null | undefined>,

		/** This field provides more details about the current status of payout. The description returned here will correspond with enumeration value returned in the <strong>payoutStatus</strong> field. The following shows what description text might appear based on the different <strong>payoutStatus</strong> values:<ul><li><code>INITIATED</code>: <em>Preparing to send</em></li><li><code>SUCCEEDED</code>: <em>Funds sent</em></li><li><code>REVERSED</code>: <em>Waiting to retry : Money rejected by seller's bank</em></li><li><code>RETRYABLE_FAILED</code>: <em>Waiting to retry</em></li><li><code>TERMINAL_FAILED</code>: <em>Payout failed</em></li></ul> */
		payoutStatusDescription: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the number of monetary transactions (all orders, refunds, and credits, etc.) that have occurred with the corresponding payout. Its value should always be at least <code>1</code>, since there is at least one order per seller payout.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transactionCount: FormControl<number | null | undefined>,
	}
	export function CreatePayoutFormGroup() {
		return new FormGroup<PayoutFormProperties>({
			bankReference: new FormControl<string | null | undefined>(undefined),
			lastAttemptedPayoutDate: new FormControl<string | null | undefined>(undefined),
			payoutDate: new FormControl<string | null | undefined>(undefined),
			payoutId: new FormControl<string | null | undefined>(undefined),
			payoutMemo: new FormControl<string | null | undefined>(undefined),
			payoutStatus: new FormControl<string | null | undefined>(undefined),
			payoutStatusDescription: new FormControl<string | null | undefined>(undefined),
			transactionCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type provides details about the seller's account that received (or is scheduled to receive) a payout. */
	export interface PayoutInstrument {

		/** This value is the last four digits of the account that the seller uses to receive the payout. This may be the last four digits of a bank account, a debit card, or a payment processor account such as Payoneer. */
		accountLastFourDigits?: string | null;

		/** This value indicates the type of account that received the payout. The value returned in this field may be:<br><ul><li><code>BANK</code>: indicates that the payout was made to a seller's bank account.</li><li><code>CARD</code>: indicates that the payout went to a seller's debit card</li><li>The name of a digital wallet provider or payment processor (e.g., <code>PAYONEER</code>)</li></ul> */
		instrumentType?: string | null;

		/** When <b>instrumentType</b> returns <code>BANK</code>, this value is the seller-provided nickname that the seller uses to represent the bank account that receives the payout.<br><br>When <b>instrumentType</b> returns <code>CARD</code>, this value is the debit card network for the debit card that receives the payout.<br><br>When <b>instrumentType</b> returns a provider of digital wallet or payment processing services, the value returned is the name of the service provider (e.g., <code>PAYONEER</code>). */
		nickname?: string | null;
	}

	/** This type provides details about the seller's account that received (or is scheduled to receive) a payout. */
	export interface PayoutInstrumentFormProperties {

		/** This value is the last four digits of the account that the seller uses to receive the payout. This may be the last four digits of a bank account, a debit card, or a payment processor account such as Payoneer. */
		accountLastFourDigits: FormControl<string | null | undefined>,

		/** This value indicates the type of account that received the payout. The value returned in this field may be:<br><ul><li><code>BANK</code>: indicates that the payout was made to a seller's bank account.</li><li><code>CARD</code>: indicates that the payout went to a seller's debit card</li><li>The name of a digital wallet provider or payment processor (e.g., <code>PAYONEER</code>)</li></ul> */
		instrumentType: FormControl<string | null | undefined>,

		/** When <b>instrumentType</b> returns <code>BANK</code>, this value is the seller-provided nickname that the seller uses to represent the bank account that receives the payout.<br><br>When <b>instrumentType</b> returns <code>CARD</code>, this value is the debit card network for the debit card that receives the payout.<br><br>When <b>instrumentType</b> returns a provider of digital wallet or payment processing services, the value returned is the name of the service provider (e.g., <code>PAYONEER</code>). */
		nickname: FormControl<string | null | undefined>,
	}
	export function CreatePayoutInstrumentFormGroup() {
		return new FormGroup<PayoutInstrumentFormProperties>({
			accountLastFourDigits: new FormControl<string | null | undefined>(undefined),
			instrumentType: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is the base response type of the <strong>getPayoutSummary</strong> method, and contains the total count of seller payouts (that match the input criteria), the total count of monetary transactions (order payment, buyer refunds, or seller credits) associated with those payouts, and the total value of those seller payouts. */
	export interface PayoutSummaryResponse {

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		amount?: Amount;

		/**
		 * This integer value indicates the total count of payouts to the seller that match the input criteria. This field is always returned, even if there are no payouts that match the input criteria (its value will show <code>0</code>).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		payoutCount?: number | null;

		/**
		 * This integer value indicates the total count of monetary transactions (order payments, buyer refunds, and seller credits) associated with the payouts that match the input criteria. This field is always returned, even if there are no payouts that match the input criteria (its value will show <code>0</code>). If there is at least one payout that matches the input criteria, the value in this field will be at least <code>1</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transactionCount?: number | null;
	}

	/** This type is the base response type of the <strong>getPayoutSummary</strong> method, and contains the total count of seller payouts (that match the input criteria), the total count of monetary transactions (order payment, buyer refunds, or seller credits) associated with those payouts, and the total value of those seller payouts. */
	export interface PayoutSummaryResponseFormProperties {

		/**
		 * This integer value indicates the total count of payouts to the seller that match the input criteria. This field is always returned, even if there are no payouts that match the input criteria (its value will show <code>0</code>).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		payoutCount: FormControl<number | null | undefined>,

		/**
		 * This integer value indicates the total count of monetary transactions (order payments, buyer refunds, and seller credits) associated with the payouts that match the input criteria. This field is always returned, even if there are no payouts that match the input criteria (its value will show <code>0</code>). If there is at least one payout that matches the input criteria, the value in this field will be at least <code>1</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transactionCount: FormControl<number | null | undefined>,
	}
	export function CreatePayoutSummaryResponseFormGroup() {
		return new FormGroup<PayoutSummaryResponseFormProperties>({
			payoutCount: new FormControl<number | null | undefined>(undefined),
			transactionCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type is the base response type of the <strong>getPayouts</strong> method, and contains an array of one or more payouts (that match the input criteria), the total count of payouts in the response, and various pagination data for the results set. */
	export interface Payouts {

		/** The URI of the <b>getPayouts</b> call request that produced the current page of the result set. */
		href?: string | null;

		/**
		 * The maximum number of payouts that may be returned per page of the result set. The <strong>limit</strong> value can be passed in as a query parameter, or if omitted, its value defaults to <code>20</code>. <br><br><span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer payouts than the <strong>limit</strong> value.  To determine the number of pages in a result set, divide the <b>total</b> value (total number of payouts matching input criteria) by this <strong>limit</strong> value, and then round up to the next integer. For example, if the <b>total</b> value was <code>120</code> (120 total payouts) and the <strong>limit</strong> value was <code>50</code> (show 50 payouts per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getPayouts</strong> calls to view all payouts matching the input criteria. </span><br><br><b>Maximum:</b> <code>200</code> <br> <b>Default:</b> <code>20</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The <b>getPayouts</b> call URI to use if you wish to view the next page of the result set. <br><br>This field is only returned if there is a next page of results to view based on the current input criteria. */
		next?: string | null;

		/**
		 * This integer value indicates the actual position that the first payout returned on the current page has in the results set. So, if you wanted to view the 11th payout of the result set, you would set the <strong>offset</strong> value in the request to <code>10</code>. <br><br>In the request, you can use the <b>offset</b> parameter in conjunction with the <b>limit</b> parameter to control the pagination of the output. For example, if <b>offset</b> is set to <code>30</code> and <b>limit</b> is set to <code>10</code>, the call retrieves payouts 31 thru 40 from the resulting collection of payouts. <br><br> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span><br><br><b>Default:</b> <code>0</code> (zero)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** An array of one or more payouts that match the input criteria. Details for each payout include the unique identifier of the payout, the status of the payout, the amount of the payout, and the number of monetary transactions associated with the payout. */
		payouts?: Array<Payout>;

		/** The <b>getPayouts</b> call URI to use if you wish to view the previous page of the result set. <br><br>This field is only returned if there is a previous page of results to view based on the current input criteria. */
		prev?: string | null;

		/**
		 * This integer value is the total number of payouts in the results set based on the current input criteria. Based on the total number of payouts that match the criteria, and on the <strong>limit</strong> and <strong>offset</strong> values, there may be additional pages in the results set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** This type is the base response type of the <strong>getPayouts</strong> method, and contains an array of one or more payouts (that match the input criteria), the total count of payouts in the response, and various pagination data for the results set. */
	export interface PayoutsFormProperties {

		/** The URI of the <b>getPayouts</b> call request that produced the current page of the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of payouts that may be returned per page of the result set. The <strong>limit</strong> value can be passed in as a query parameter, or if omitted, its value defaults to <code>20</code>. <br><br><span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer payouts than the <strong>limit</strong> value.  To determine the number of pages in a result set, divide the <b>total</b> value (total number of payouts matching input criteria) by this <strong>limit</strong> value, and then round up to the next integer. For example, if the <b>total</b> value was <code>120</code> (120 total payouts) and the <strong>limit</strong> value was <code>50</code> (show 50 payouts per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getPayouts</strong> calls to view all payouts matching the input criteria. </span><br><br><b>Maximum:</b> <code>200</code> <br> <b>Default:</b> <code>20</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The <b>getPayouts</b> call URI to use if you wish to view the next page of the result set. <br><br>This field is only returned if there is a next page of results to view based on the current input criteria. */
		next: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the actual position that the first payout returned on the current page has in the results set. So, if you wanted to view the 11th payout of the result set, you would set the <strong>offset</strong> value in the request to <code>10</code>. <br><br>In the request, you can use the <b>offset</b> parameter in conjunction with the <b>limit</b> parameter to control the pagination of the output. For example, if <b>offset</b> is set to <code>30</code> and <b>limit</b> is set to <code>10</code>, the call retrieves payouts 31 thru 40 from the resulting collection of payouts. <br><br> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span><br><br><b>Default:</b> <code>0</code> (zero)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The <b>getPayouts</b> call URI to use if you wish to view the previous page of the result set. <br><br>This field is only returned if there is a previous page of results to view based on the current input criteria. */
		prev: FormControl<string | null | undefined>,

		/**
		 * This integer value is the total number of payouts in the results set based on the current input criteria. Based on the total number of payouts that match the criteria, and on the <strong>limit</strong> and <strong>offset</strong> values, there may be additional pages in the results set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePayoutsFormGroup() {
		return new FormGroup<PayoutsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This field is returned for NON_SALE_CHARGE transactions that contain non-transactional seller fees. */
	export interface Reference {

		/** The identifier of the transaction as specified by the <strong>referenceType</strong>. For example, with a <strong>referenceType</strong> of <strong>item_id</strong>, the <strong>referenceId</strong> refers to a unique item. This item may have several <code>NON_SALE_CHARGE</code> transactions. */
		referenceId?: string | null;

		/** An enumeration value that identifies the reference type associated with the <strong>referenceId</strong>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:ReferenceTypeEnum'>eBay API documentation</a> */
		referenceType?: string | null;
	}

	/** This field is returned for NON_SALE_CHARGE transactions that contain non-transactional seller fees. */
	export interface ReferenceFormProperties {

		/** The identifier of the transaction as specified by the <strong>referenceType</strong>. For example, with a <strong>referenceType</strong> of <strong>item_id</strong>, the <strong>referenceId</strong> refers to a unique item. This item may have several <code>NON_SALE_CHARGE</code> transactions. */
		referenceId: FormControl<string | null | undefined>,

		/** An enumeration value that identifies the reference type associated with the <strong>referenceId</strong>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:ReferenceTypeEnum'>eBay API documentation</a> */
		referenceType: FormControl<string | null | undefined>,
	}
	export function CreateReferenceFormGroup() {
		return new FormGroup<ReferenceFormProperties>({
			referenceId: new FormControl<string | null | undefined>(undefined),
			referenceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the response payload of the <strong>getSellerFundsSummary</strong> method. All of the funds returned in  <strong>getSellerFundsSummary</strong> are funds that have not yet been paid to the seller through a seller payout. If there are no funds that are pending, on hold, or being processed for the seller's account, no response payload is returned, and an http status code of <code>204 - No Content</code> is returned instead. */
	export interface SellerFundsSummaryResponse {

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		availableFunds?: Amount;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		fundsOnHold?: Amount;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		processingFunds?: Amount;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		totalFunds?: Amount;
	}

	/** This type is used by the response payload of the <strong>getSellerFundsSummary</strong> method. All of the funds returned in  <strong>getSellerFundsSummary</strong> are funds that have not yet been paid to the seller through a seller payout. If there are no funds that are pending, on hold, or being processed for the seller's account, no response payload is returned, and an http status code of <code>204 - No Content</code> is returned instead. */
	export interface SellerFundsSummaryResponseFormProperties {
	}
	export function CreateSellerFundsSummaryResponseFormGroup() {
		return new FormGroup<SellerFundsSummaryResponseFormProperties>({
		});

	}


	/** This type is used to express the details of one of the following monetary transactions: a buyer's payment for an order, a refund to the buyer for a returned item or cancelled order, or a credit issued by eBay to the seller's account. */
	export interface Transaction {

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		amount?: Amount;

		/** The enumeration value returned in this field indicates if the monetary transaction amount is a (<code>CREDIT</code>) or a (<code>DEBIT</code>) to the seller's account. Typically, the <code>SALE</code> and <code>CREDIT</code> transaction types are credits to the seller's account, and the <code>REFUND</code>, <code>DISPUTE</code>, <code>SHIPPING_LABEL</code>, and <code>TRANSFER</code> transaction types are debits to the seller's account. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		bookingEntry?: string | null;

		/** This type is used to express details about the buyer associated with an order. At this time, the only field in this type is the eBay user ID of the buyer, but more fields may get added at a later date. */
		buyer?: Buyer;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		eBayCollectedTaxAmount?: Amount;

		/** This container returns jurisdiction information about region-specific fees that are charged to sellers. */
		feeJurisdiction?: FeeJurisdiction;

		/** The type of fee. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/api:FeeTypeEnum'>eBay API documentation</a> */
		feeType?: string | null;

		/** The unique identifier of the eBay order associated with the monetary transaction. */
		orderId?: string | null;

		/** This array shows the fees that are deducted from a seller payout for each line item in an order.<br><br><span class="tablenote"><strong>Note:</strong> In some cases, a transaction fee might be returned asynchronously from the associated order. In such cases, you can determine the order to which the fee applies by examining the referenceID value of the fee, which should match the ID of the order. */
		orderLineItems?: Array<OrderLineItem>;

		/** This string value indicates the entity that is processing  the payment. */
		paymentsEntity?: string | null;

		/** The unique identifier of the seller payout associated with the monetary transaction. This identifier is generated once eBay begins processing the payout for the corresponding order. This field will not be returned if eBay has not yet begun processing the payout for an order. */
		payoutId?: string | null;

		/** This field contains reference information for the transaction fee. This includes an ID and the type of ID provided (such as item ID). */
		references?: Array<Reference>;

		/** The Sales Record Number associated with a sales order. Sales Record Numbers are Selling Manager/Selling Manager Pro identifiers that are created at order checkout.<br><br><span class="tablenote"><strong>Note:</strong> For all orders originating after February 1, 2020, a value of <code>0</code> will be returned in this field. The Sales Record Number field has also been removed from Seller Hub. Instead of <strong>salesRecordReference</strong>, depend on <strong>orderId</strong> instead as the identifier of the order. The <strong>salesRecordReference</strong> field has been scheduled for deprecation, and a date for when this field will no longer be returned at all will be announced soon.</span> */
		salesRecordReference?: string | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		totalFeeAmount?: Amount;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		totalFeeBasisAmount?: Amount;

		/** This timestamp indicates when the monetary transaction (order purchase, buyer refund, seller credit) occurred. The following (UTC) format is used: <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. For example, <code>2015-08-04T19:09:02.768Z</code>. */
		transactionDate?: string | null;

		/** The unique identifier of the monetary transaction. A monetary transaction can be a sales order, an order refund to the buyer, a credit to the seller's account, a debit to the seller for the purchase of a shipping label, or a transaction where eBay recouped money from the seller if the seller lost a buyer-initiated payment dispute. */
		transactionId?: string | null;

		/** This field provides more details on shipping label transactions and transactions where the funds are being held by eBay. For shipping label transactions, the <b>transactionMemo</b> gives details about a purchase, a refund, or a price adjustment to the cost of the shipping label. For on-hold transactions, the <b>transactionMemo</b> provides information on the reason for the hold or when the hold will be released (e.g., "Funds on hold. Estimated release on Jun 1").<br><br>This field is only returned if applicable/available. */
		transactionMemo?: string | null;

		/** This enumeration value indicates the current status of the seller payout associated with the monetary transaction. See the <code>TransactionStatusEnum</code> type for more information on the different states. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:TransactionStatusEnum'>eBay API documentation</a> */
		transactionStatus?: string | null;

		/** This enumeration value indicates the type of monetary transaction. Examples of monetary transactions include a buyer's payment for an order, a refund to the buyer for a returned item or cancelled order, or a credit issued by eBay to the seller's account. For a complete list of monetary transaction types within the <strong>Finances API</strong>, see the <a href="/api-docs/sell/finances/types/pay:TransactionTypeEnum">TransactionTypeEnum</a> type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:TransactionTypeEnum'>eBay API documentation</a> */
		transactionType?: string | null;
	}

	/** This type is used to express the details of one of the following monetary transactions: a buyer's payment for an order, a refund to the buyer for a returned item or cancelled order, or a credit issued by eBay to the seller's account. */
	export interface TransactionFormProperties {

		/** The enumeration value returned in this field indicates if the monetary transaction amount is a (<code>CREDIT</code>) or a (<code>DEBIT</code>) to the seller's account. Typically, the <code>SALE</code> and <code>CREDIT</code> transaction types are credits to the seller's account, and the <code>REFUND</code>, <code>DISPUTE</code>, <code>SHIPPING_LABEL</code>, and <code>TRANSFER</code> transaction types are debits to the seller's account. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		bookingEntry: FormControl<string | null | undefined>,

		/** The type of fee. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/api:FeeTypeEnum'>eBay API documentation</a> */
		feeType: FormControl<string | null | undefined>,

		/** The unique identifier of the eBay order associated with the monetary transaction. */
		orderId: FormControl<string | null | undefined>,

		/** This string value indicates the entity that is processing  the payment. */
		paymentsEntity: FormControl<string | null | undefined>,

		/** The unique identifier of the seller payout associated with the monetary transaction. This identifier is generated once eBay begins processing the payout for the corresponding order. This field will not be returned if eBay has not yet begun processing the payout for an order. */
		payoutId: FormControl<string | null | undefined>,

		/** The Sales Record Number associated with a sales order. Sales Record Numbers are Selling Manager/Selling Manager Pro identifiers that are created at order checkout.<br><br><span class="tablenote"><strong>Note:</strong> For all orders originating after February 1, 2020, a value of <code>0</code> will be returned in this field. The Sales Record Number field has also been removed from Seller Hub. Instead of <strong>salesRecordReference</strong>, depend on <strong>orderId</strong> instead as the identifier of the order. The <strong>salesRecordReference</strong> field has been scheduled for deprecation, and a date for when this field will no longer be returned at all will be announced soon.</span> */
		salesRecordReference: FormControl<string | null | undefined>,

		/** This timestamp indicates when the monetary transaction (order purchase, buyer refund, seller credit) occurred. The following (UTC) format is used: <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. For example, <code>2015-08-04T19:09:02.768Z</code>. */
		transactionDate: FormControl<string | null | undefined>,

		/** The unique identifier of the monetary transaction. A monetary transaction can be a sales order, an order refund to the buyer, a credit to the seller's account, a debit to the seller for the purchase of a shipping label, or a transaction where eBay recouped money from the seller if the seller lost a buyer-initiated payment dispute. */
		transactionId: FormControl<string | null | undefined>,

		/** This field provides more details on shipping label transactions and transactions where the funds are being held by eBay. For shipping label transactions, the <b>transactionMemo</b> gives details about a purchase, a refund, or a price adjustment to the cost of the shipping label. For on-hold transactions, the <b>transactionMemo</b> provides information on the reason for the hold or when the hold will be released (e.g., "Funds on hold. Estimated release on Jun 1").<br><br>This field is only returned if applicable/available. */
		transactionMemo: FormControl<string | null | undefined>,

		/** This enumeration value indicates the current status of the seller payout associated with the monetary transaction. See the <code>TransactionStatusEnum</code> type for more information on the different states. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:TransactionStatusEnum'>eBay API documentation</a> */
		transactionStatus: FormControl<string | null | undefined>,

		/** This enumeration value indicates the type of monetary transaction. Examples of monetary transactions include a buyer's payment for an order, a refund to the buyer for a returned item or cancelled order, or a credit issued by eBay to the seller's account. For a complete list of monetary transaction types within the <strong>Finances API</strong>, see the <a href="/api-docs/sell/finances/types/pay:TransactionTypeEnum">TransactionTypeEnum</a> type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:TransactionTypeEnum'>eBay API documentation</a> */
		transactionType: FormControl<string | null | undefined>,
	}
	export function CreateTransactionFormGroup() {
		return new FormGroup<TransactionFormProperties>({
			bookingEntry: new FormControl<string | null | undefined>(undefined),
			feeType: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			paymentsEntity: new FormControl<string | null | undefined>(undefined),
			payoutId: new FormControl<string | null | undefined>(undefined),
			salesRecordReference: new FormControl<string | null | undefined>(undefined),
			transactionDate: new FormControl<string | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
			transactionMemo: new FormControl<string | null | undefined>(undefined),
			transactionStatus: new FormControl<string | null | undefined>(undefined),
			transactionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is the base response type of the <strong>getTransactionSummary</strong> method, and based on the filters that are used in the <strong>getTransactionSummary</strong> call URI, the response may include  total count and amount of the seller's sales and credits, total count and amount of buyer refunds, and total count and amount of seller payment holds. */
	export interface TransactionSummaryResponse {

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		adjustmentAmount?: Amount;

		/** The credit debit sign indicator for adjustment. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		adjustmentBookingEntry?: string | null;

		/**
		 * Total adjustment count for given payee within a specified period.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		adjustmentCount?: number | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		balanceTransferAmount?: Amount;

		/** The credit debit sign indicator for the balance transfer. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		balanceTransferBookingEntry?: string | null;

		/**
		 * The total balance transfer count for given payee within the specified period.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balanceTransferCount?: number | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		creditAmount?: Amount;

		/** The enumeration value indicates whether the dollar amount in the <strong>creditAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>CREDIT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		creditBookingEntry?: string | null;

		/**
		 * This integer value indicates the total number of the seller's sales and/or credits that match the input criteria. <br><br><span class="tablenote"><strong>Note:</strong> Unless the <b>transactionType</b> filter is used in the request to retrieve a specific type of monetary transaction (sale, buyer refund, or seller credit), the <b>creditCount</b> and <b>creditAmount</b> fields account for both order sales and seller credits (the count and value is not distinguished between the two monetary transaction types).</span><br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to either <code>REFUND</code>, <code>DISPUTE</code>, or <code>SHIPPING_LABEL</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		creditCount?: number | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		disputeAmount?: Amount;

		/** The enumeration value indicates whether the dollar amount in the <strong>disputeAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code>, but its possible that <code>CREDIT</code> could be returned if the seller contested one or more payment disputes and won the dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		disputeBookingEntry?: string | null;

		/**
		 * This integer value indicates the total number of payment disputes that have been initiated by one or more buyers. Only the orders that match the input criteria are considered. The Payment Disputes methods in the Fulfillment API can be used by the seller to retrieve more information about any payment disputes. <br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to any value other than <code>DISPUTE</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		disputeCount?: number | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		loanRepaymentAmount?: Amount;

		/** The enumeration value indicates whether the <code>loanRepaymentAmount</code> is a <code>DEBIT</code> against, or a <code>CREDIT</code> to, the sellers's account.<br><br>For most <code>loanRepaymentAmount</code> transactions, <code>loanRepaymentBookingEntry</code> will be <b>DEBIT</b>. However, if a loan repayment transaction is reversed, that transaction will be shown as a <b>CREDIT</b>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		loanRepaymentBookingEntry?: string | null;

		/**
		 * This integer value indicates the total number of <code>LOAN_REPAYMENT</code> transactions (i.e., <code>DEBIT</code> and <code>CREDIT</code>,) that match the input criteria.<br><br>This field is generally returned even if it equals <b>0</b>. However it will not be returned if a <code>transactionType</code> filter is used and its value has been set to any enumeration value other than <code>LOAN_REPAYMENT</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		loanRepaymentCount?: number | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		nonSaleChargeAmount?: Amount;

		/** The credit/debit sign indicator for the non-sale charge. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		nonSaleChargeBookingEntry?: string | null;

		/**
		 * The total non-sale charge count for given payee within a specified period.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nonSaleChargeCount?: number | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		onHoldAmount?: Amount;

		/** The enumeration value indicates whether the dollar amount in the <strong>onHoldAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>CREDIT</code>, since on-hold funds should eventually be released as part of a payout to the seller once the hold is cleared. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		onHoldBookingEntry?: string | null;

		/**
		 * This integer value indicates the total number of order sales where the associated funds are on hold. Only the orders that match the input criteria are considered.<br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionStatus</strong> filter is used, and its value is set to any value other than <code>FUNDS_ON_HOLD</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		onHoldCount?: number | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		refundAmount?: Amount;

		/** The enumeration value indicates whether the dollar amount in the <strong>refundAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code> since this a refund from the seller to the buyer. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		refundBookingEntry?: string | null;

		/**
		 * This integer value indicates the total number of buyer refunds that match the input criteria. <br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to any value other than <code>REFUND</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refundCount?: number | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		shippingLabelAmount?: Amount;

		/** The enumeration value indicates whether the dollar amount in the <strong>shippingLabelAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code>, as eBay will charge the seller when eBay shipping labels are purchased, but it can be <code>CREDIT</code> if the seller was refunded for a shipping label or was possibly overcharged for a shipping label. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		shippingLabelBookingEntry?: string | null;

		/**
		 * This is the total number of eBay shipping labels purchased by the seller. The count returned here may depend on the specified input criteria.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shippingLabelCount?: number | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		transferAmount?: Amount;

		/** The enumeration value indicates whether the dollar amount in the <strong>transferAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code> since this a seller reimbursement to eBay for buyer refunds. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		transferBookingEntry?: string | null;

		/**
		 * This integer value indicates the total number of buyer refund transfers that match the input criteria. <br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to any value other than <code>TRANSFER</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transferCount?: number | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		withdrawalAmount?: Amount;

		/** The enumeration value indicates whether the dollar amount in the <strong>withdrawalAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code> since this transaction involves a debit to the seller's available payout funds. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		withdrawalBookingEntry?: string | null;

		/**
		 * This integer value indicates the total number of on-demand payouts (withdrawals) that match the input criteria. <br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to any value other than <code>WITHDRAWAL</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		withdrawalCount?: number | null;
	}

	/** This type is the base response type of the <strong>getTransactionSummary</strong> method, and based on the filters that are used in the <strong>getTransactionSummary</strong> call URI, the response may include  total count and amount of the seller's sales and credits, total count and amount of buyer refunds, and total count and amount of seller payment holds. */
	export interface TransactionSummaryResponseFormProperties {

		/** The credit debit sign indicator for adjustment. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		adjustmentBookingEntry: FormControl<string | null | undefined>,

		/**
		 * Total adjustment count for given payee within a specified period.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		adjustmentCount: FormControl<number | null | undefined>,

		/** The credit debit sign indicator for the balance transfer. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		balanceTransferBookingEntry: FormControl<string | null | undefined>,

		/**
		 * The total balance transfer count for given payee within the specified period.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balanceTransferCount: FormControl<number | null | undefined>,

		/** The enumeration value indicates whether the dollar amount in the <strong>creditAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>CREDIT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		creditBookingEntry: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the total number of the seller's sales and/or credits that match the input criteria. <br><br><span class="tablenote"><strong>Note:</strong> Unless the <b>transactionType</b> filter is used in the request to retrieve a specific type of monetary transaction (sale, buyer refund, or seller credit), the <b>creditCount</b> and <b>creditAmount</b> fields account for both order sales and seller credits (the count and value is not distinguished between the two monetary transaction types).</span><br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to either <code>REFUND</code>, <code>DISPUTE</code>, or <code>SHIPPING_LABEL</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		creditCount: FormControl<number | null | undefined>,

		/** The enumeration value indicates whether the dollar amount in the <strong>disputeAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code>, but its possible that <code>CREDIT</code> could be returned if the seller contested one or more payment disputes and won the dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		disputeBookingEntry: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the total number of payment disputes that have been initiated by one or more buyers. Only the orders that match the input criteria are considered. The Payment Disputes methods in the Fulfillment API can be used by the seller to retrieve more information about any payment disputes. <br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to any value other than <code>DISPUTE</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		disputeCount: FormControl<number | null | undefined>,

		/** The enumeration value indicates whether the <code>loanRepaymentAmount</code> is a <code>DEBIT</code> against, or a <code>CREDIT</code> to, the sellers's account.<br><br>For most <code>loanRepaymentAmount</code> transactions, <code>loanRepaymentBookingEntry</code> will be <b>DEBIT</b>. However, if a loan repayment transaction is reversed, that transaction will be shown as a <b>CREDIT</b>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		loanRepaymentBookingEntry: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the total number of <code>LOAN_REPAYMENT</code> transactions (i.e., <code>DEBIT</code> and <code>CREDIT</code>,) that match the input criteria.<br><br>This field is generally returned even if it equals <b>0</b>. However it will not be returned if a <code>transactionType</code> filter is used and its value has been set to any enumeration value other than <code>LOAN_REPAYMENT</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		loanRepaymentCount: FormControl<number | null | undefined>,

		/** The credit/debit sign indicator for the non-sale charge. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		nonSaleChargeBookingEntry: FormControl<string | null | undefined>,

		/**
		 * The total non-sale charge count for given payee within a specified period.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nonSaleChargeCount: FormControl<number | null | undefined>,

		/** The enumeration value indicates whether the dollar amount in the <strong>onHoldAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>CREDIT</code>, since on-hold funds should eventually be released as part of a payout to the seller once the hold is cleared. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		onHoldBookingEntry: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the total number of order sales where the associated funds are on hold. Only the orders that match the input criteria are considered.<br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionStatus</strong> filter is used, and its value is set to any value other than <code>FUNDS_ON_HOLD</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		onHoldCount: FormControl<number | null | undefined>,

		/** The enumeration value indicates whether the dollar amount in the <strong>refundAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code> since this a refund from the seller to the buyer. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		refundBookingEntry: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the total number of buyer refunds that match the input criteria. <br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to any value other than <code>REFUND</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refundCount: FormControl<number | null | undefined>,

		/** The enumeration value indicates whether the dollar amount in the <strong>shippingLabelAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code>, as eBay will charge the seller when eBay shipping labels are purchased, but it can be <code>CREDIT</code> if the seller was refunded for a shipping label or was possibly overcharged for a shipping label. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		shippingLabelBookingEntry: FormControl<string | null | undefined>,

		/**
		 * This is the total number of eBay shipping labels purchased by the seller. The count returned here may depend on the specified input criteria.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shippingLabelCount: FormControl<number | null | undefined>,

		/** The enumeration value indicates whether the dollar amount in the <strong>transferAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code> since this a seller reimbursement to eBay for buyer refunds. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		transferBookingEntry: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the total number of buyer refund transfers that match the input criteria. <br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to any value other than <code>TRANSFER</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transferCount: FormControl<number | null | undefined>,

		/** The enumeration value indicates whether the dollar amount in the <strong>withdrawalAmount</strong> field is a charge (debit) to the seller or a credit. Typically, the enumeration value returned here will be <code>DEBIT</code> since this transaction involves a debit to the seller's available payout funds. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/pay:BookingEntryEnum'>eBay API documentation</a> */
		withdrawalBookingEntry: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the total number of on-demand payouts (withdrawals) that match the input criteria. <br><br>This field is generally returned, even if <code>0</code>, but it will not be returned if a <strong>transactionType</strong> filter is used, and its value is set to any value other than <code>WITHDRAWAL</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		withdrawalCount: FormControl<number | null | undefined>,
	}
	export function CreateTransactionSummaryResponseFormGroup() {
		return new FormGroup<TransactionSummaryResponseFormProperties>({
			adjustmentBookingEntry: new FormControl<string | null | undefined>(undefined),
			adjustmentCount: new FormControl<number | null | undefined>(undefined),
			balanceTransferBookingEntry: new FormControl<string | null | undefined>(undefined),
			balanceTransferCount: new FormControl<number | null | undefined>(undefined),
			creditBookingEntry: new FormControl<string | null | undefined>(undefined),
			creditCount: new FormControl<number | null | undefined>(undefined),
			disputeBookingEntry: new FormControl<string | null | undefined>(undefined),
			disputeCount: new FormControl<number | null | undefined>(undefined),
			loanRepaymentBookingEntry: new FormControl<string | null | undefined>(undefined),
			loanRepaymentCount: new FormControl<number | null | undefined>(undefined),
			nonSaleChargeBookingEntry: new FormControl<string | null | undefined>(undefined),
			nonSaleChargeCount: new FormControl<number | null | undefined>(undefined),
			onHoldBookingEntry: new FormControl<string | null | undefined>(undefined),
			onHoldCount: new FormControl<number | null | undefined>(undefined),
			refundBookingEntry: new FormControl<string | null | undefined>(undefined),
			refundCount: new FormControl<number | null | undefined>(undefined),
			shippingLabelBookingEntry: new FormControl<string | null | undefined>(undefined),
			shippingLabelCount: new FormControl<number | null | undefined>(undefined),
			transferBookingEntry: new FormControl<string | null | undefined>(undefined),
			transferCount: new FormControl<number | null | undefined>(undefined),
			withdrawalBookingEntry: new FormControl<string | null | undefined>(undefined),
			withdrawalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This is the base response type of the <b>getTransactions</b> method. The <b>getTransactions</b> response includes details on one or more monetary transactions that match the input criteria, as well as pagination data.  */
	export interface Transactions {

		/** The URI of the <b>getTransactions</b> method request that produced the current page of the result set. */
		href?: string | null;

		/**
		 * The maximum number of monetary transactions that may be returned per page of the result set. The <strong>limit</strong> value can be passed in as a query parameter, or if omitted, its value defaults to <code>20</code>. <br><br><span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer monetary transactions than the <strong>limit</strong> value.  To determine the number of pages in a result set, divide the <b>total</b> value (total number of monetary transactions matching input criteria) by this <strong>limit</strong> value, and then round up to the next integer. For example, if the <b>total</b> value was <code>120</code> (120 total monetary transactions) and the <strong>limit</strong> value was <code>50</code> (show 50 monetary transactions per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getTransactions</strong> calls to view all monetary transactions matching the input criteria. </span><br><br><b>Maximum:</b> <code>200</code> <br> <b>Default:</b> <code>20</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The <b>getTransactions</b> method URI to use if you wish to view the next page of the result set. <br><br>This field is only returned if there is a next page of results to view based on the current input criteria. */
		next?: string | null;

		/**
		 * This integer value indicates the actual position that the first monetary transaction returned on the current page has in the results set. So, if you wanted to view the 11th monetary transaction of the result set, you would set the <strong>offset</strong> value in the request to <code>10</code>. <br><br>In the request, you can use the <b>offset</b> parameter in conjunction with the <b>limit</b> parameter to control the pagination of the output. For example, if <b>offset</b> is set to <code>30</code> and <b>limit</b> is set to <code>10</code>, the method retrieves monetary transactions 31 thru 40 from the resulting collection of monetary transactions. <br><br> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span><br><br><b>Default:</b> <code>0</code> (zero)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The <b>getTransactions</b> method URI to use if you wish to view the previous page of the result set. <br><br>This field is only returned if there is a previous page of results to view based on the current input criteria. */
		prev?: string | null;

		/**
		 * This integer value is the total amount of monetary transactions in the result set based on the current input criteria. Based on the total number of monetary transactions that match the criteria, and on the <strong>limit</strong> and <strong>offset</strong> values, there may be additional pages in the results set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;

		/** An array of one or more monetary transactions that match the input criteria. Details for each monetary transaction may include the unique identifier of the order associated with the monetary transaction, the status of the transaction, the amount of the order, the order's buyer, and the unique identifier of the payout (if a payout has been initiated/issued for the order). */
		transactions?: Array<Transaction>;
	}

	/** This is the base response type of the <b>getTransactions</b> method. The <b>getTransactions</b> response includes details on one or more monetary transactions that match the input criteria, as well as pagination data.  */
	export interface TransactionsFormProperties {

		/** The URI of the <b>getTransactions</b> method request that produced the current page of the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of monetary transactions that may be returned per page of the result set. The <strong>limit</strong> value can be passed in as a query parameter, or if omitted, its value defaults to <code>20</code>. <br><br><span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer monetary transactions than the <strong>limit</strong> value.  To determine the number of pages in a result set, divide the <b>total</b> value (total number of monetary transactions matching input criteria) by this <strong>limit</strong> value, and then round up to the next integer. For example, if the <b>total</b> value was <code>120</code> (120 total monetary transactions) and the <strong>limit</strong> value was <code>50</code> (show 50 monetary transactions per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getTransactions</strong> calls to view all monetary transactions matching the input criteria. </span><br><br><b>Maximum:</b> <code>200</code> <br> <b>Default:</b> <code>20</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The <b>getTransactions</b> method URI to use if you wish to view the next page of the result set. <br><br>This field is only returned if there is a next page of results to view based on the current input criteria. */
		next: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the actual position that the first monetary transaction returned on the current page has in the results set. So, if you wanted to view the 11th monetary transaction of the result set, you would set the <strong>offset</strong> value in the request to <code>10</code>. <br><br>In the request, you can use the <b>offset</b> parameter in conjunction with the <b>limit</b> parameter to control the pagination of the output. For example, if <b>offset</b> is set to <code>30</code> and <b>limit</b> is set to <code>10</code>, the method retrieves monetary transactions 31 thru 40 from the resulting collection of monetary transactions. <br><br> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span><br><br><b>Default:</b> <code>0</code> (zero)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The <b>getTransactions</b> method URI to use if you wish to view the previous page of the result set. <br><br>This field is only returned if there is a previous page of results to view based on the current input criteria. */
		prev: FormControl<string | null | undefined>,

		/**
		 * This integer value is the total amount of monetary transactions in the result set based on the current input criteria. Based on the total number of monetary transactions that match the criteria, and on the <strong>limit</strong> and <strong>offset</strong> values, there may be additional pages in the results set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateTransactionsFormGroup() {
		return new FormGroup<TransactionsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type is the base response type used by <code>TRANSFER</code> transaction type that is returned in the response. */
	export interface Transfer {

		/** This type provided details on the funding source for the transfer. */
		fundingSource?: FundingSource;

		/** This timestamp indicates the date/time of the transfer. The following (UTC) format is used: <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. For example, <code>2020-08-04T19:09:02.768Z</code> */
		transactionDate?: string | null;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		transferAmount?: Amount;

		/** This type is used by the <b>transferDetail</b> container, which provides more details about the transfer and the charge(s) associated with the transfer. */
		transferDetail?: TransferDetail;

		/** The unique identifier of the <code>TRANSFER</code> transaction type. This is the same value that was passed into the end of the call URI. */
		transferId?: string | null;
	}

	/** This type is the base response type used by <code>TRANSFER</code> transaction type that is returned in the response. */
	export interface TransferFormProperties {

		/** This timestamp indicates the date/time of the transfer. The following (UTC) format is used: <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. For example, <code>2020-08-04T19:09:02.768Z</code> */
		transactionDate: FormControl<string | null | undefined>,

		/** The unique identifier of the <code>TRANSFER</code> transaction type. This is the same value that was passed into the end of the call URI. */
		transferId: FormControl<string | null | undefined>,
	}
	export function CreateTransferFormGroup() {
		return new FormGroup<TransferFormProperties>({
			transactionDate: new FormControl<string | null | undefined>(undefined),
			transferId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the <b>transferDetail</b> container, which provides more details about the transfer and the charge(s) associated with the transfer. */
	export interface TransferDetail {

		/** This type is used by the <b>balanceAdjustment</b> container, which shows the seller payout balance that will be applied toward the charges outlined in the <b>charges</b> array. */
		balanceAdjustment?: BalanceAdjustment;

		/** This container is an array of one or more charges related to the transfer. Charges can be related to an order cancellation, order return, case, payment dispute, etc. */
		charges?: Array<Charge>;

		/** This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit. */
		totalChargeNetAmount?: Amount;
	}

	/** This type is used by the <b>transferDetail</b> container, which provides more details about the transfer and the charge(s) associated with the transfer. */
	export interface TransferDetailFormProperties {
	}
	export function CreateTransferDetailFormGroup() {
		return new FormGroup<TransferDetailFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span> Due to EU &amp; UK Payments regulatory requirements, an additional security verification via Digital Signatures is required for certain API calls that are made on behalf of EU/UK sellers, including all <b>Finances API</b> methods. Please refer to <a href="/develop/guides/digital-signatures-for-apis " target="_blank">Digital Signatures for APIs</a> to learn more on the impacted APIs and the process to create signatures to be included in the HTTP payload.</p></div><br>This method is used to retrieve the details of one or more seller payouts. By using the <b>filter</b> query parameter, users can retrieve payouts processed within a specific date range, and/or they can retrieve payouts in a specific state.<br><br>There are also pagination and sort query parameters that allow users to control the payouts that are returned in the response.<br><br>If no payouts match the input criteria, an empty payload is returned.
		 * Get payout
		 * @param {string} filter The three filter types that can be used here are discussed below. If none of these filters are used, all recent payouts in all states are returned:<ul><li><b>payoutDate</b>: search for payouts within a specific range of dates. The date format to use is <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. Below is the proper syntax to use if filtering by a date range: <br><br><code>https://apiz.ebay.com/sell/finances/v1/payout?filter=payoutDate:[2018-12-17T00:00:01.000Z..2018-12-24T00:00:01.000Z]</code><br><br>Alternatively, the user could omit the ending date, and the date range would include the starting date and up to 90 days past that date, or the current date if the starting date is less than 90 days in the past.</li><li><b>lastAttemptedPayoutDate</b>: search for attempted payouts that failed within a specific range of dates. In order to use this filter, the <b>payoutStatus</b> filter must also be used and its value must be set to <code>RETRYABLE_FAILED</code>. The date format to use is <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. The same syntax used for the <b>payoutDate</b> filter is also used for the <b>lastAttemptedPayoutDate</b> filter. <br><br>This filter is only applicable (and will return results) if one or more seller payouts have failed, but are retryable.</li> <li><b>payoutStatus</b>: search for payouts in a particular state. Only one payout state can be specified with this filter. The supported <b>payoutStatus</b> values are as follows:<ul><li><code>INITIATED</code>: search for payouts that have been initiated but not processed.</li><li><code>SUCCEEDED</code>: search for successful payouts.</li><li><code>RETRYABLE_FAILED</code>: search for payouts that failed, but ones which will be tried again. This value must be used if filtering by <b>lastAttemptedPayoutDate</b>. </li><li><code>TERMINAL_FAILED</code>: search for payouts that failed, and ones that will not be tried again.</li><li> <code>REVERSED</code>: search for payouts that were reversed. </li></ul>Below is the proper syntax to use if filtering by payout status: <br><br><code>https://apiz.ebay.com/sell/finances/v1/payout?filter=payoutStatus:{SUCCEEDED}</code></ul><br>If both the <b>payoutDate</b> and <b>payoutStatus</b> filters are used, payouts must satisfy both criteria to be returned. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/finances/types/cos:FilterField
		 * @param {string} limit The number of payouts to return per page of the result set. Use this parameter in conjunction with the <b>offset</b> parameter to control the pagination of the output. <br><br> For example, if <b>offset</b> is set to <code>10</code> and <b>limit</b> is set to <code>10</code>, the method retrieves payouts 11 thru 20 from the result set. <br><br> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first payout in the results set has an offset value of <code>0</code>. </span> <br><br> <b>Maximum:</b> <code>200</code> <br> <b>Default:</b> <code>20</code>
		 * @param {string} offset This integer value indicates the actual position that the first payout returned on the current page has in the results set. So, if you wanted to view the 11th payout of the result set, you would set the <strong>offset</strong> value in the request to <code>10</code>. <br><br>In the request, you can use the <b>offset</b> parameter in conjunction with the <b>limit</b> parameter to control the pagination of the output. For example, if <b>offset</b> is set to <code>30</code> and <b>limit</b> is set to <code>10</code>, the method retrieves payouts 31 thru 40 from the resulting collection of payouts. <br><br> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first payout in the results set has an offset value of <code>0</code>.</span><br><br><b>Default:</b> <code>0</code> (zero)
		 * @param {string} sort By default, payouts or failed payouts that match the input criteria are sorted in descending order according to the payout date/last attempted payout date (i.e., most recent payouts returned first).<br><br>To view payouts in ascending order instead (i.e., oldest payouts/attempted payouts first,) you would include the <b>sort</b> query parameter, and then set the value of its <b>field</b> parameter to <code>payoutDate</code> or <code>lastAttemptedPayoutDate</code> (if searching for failed, retryable payouts). Below is the proper syntax to use if filtering by a payout date range in ascending order:<br><br><code>https://apiz.ebay.com/sell/finances/v1/payout?filter=payoutDate:[2018-12-17T00:00:01.000Z..2018-12-24T00:00:01.000Z]&sort=payoutDate</code><br><br>Payouts can only be sorted according to payout date, and can not be sorted by payout status. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/finances/types/cos:SortField
		 * @return {Payouts} Success
		 */
		GetPayouts(filter: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined, sort: string | null | undefined): Observable<Payouts> {
			return this.http.get<Payouts>(this.baseUri + 'payout?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * <div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span> Due to EU &amp; UK Payments regulatory requirements, an additional security verification via Digital Signatures is required for certain API calls that are made on behalf of EU/UK sellers, including all <b>Finances API</b> methods. Please refer to <a href="/develop/guides/digital-signatures-for-apis " target="_blank">Digital Signatures for APIs</a> to learn more on the impacted APIs and the process to create signatures to be included in the HTTP payload.</p></div><br>This method retrieves details on a specific seller payout. The unique identfier of the payout is passed in as a path parameter at the end of the call URI. <br><br>The <b>getPayouts</b> method can be used to retrieve the unique identifier of a payout, or the user can check Seller Hub.
		 * Get payout/{payout_Id}
		 * @param {string} payout_Id The unique identfier of the payout is passed in as a path parameter at the end of the call URI. <br><br>The <b>getPayouts</b> method can be used to retrieve the unique identifier of a payout, or the user can check Seller Hub to get the payout ID.
		 * @return {Payout} Success
		 */
		GetPayout(payout_Id: string): Observable<Payout> {
			return this.http.get<Payout>(this.baseUri + 'payout/' + (payout_Id == null ? '' : encodeURIComponent(payout_Id)), {});
		}

		/**
		 * <div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span> Due to EU &amp; UK Payments regulatory requirements, an additional security verification via Digital Signatures is required for certain API calls that are made on behalf of EU/UK sellers, including all <b>Finances API</b> methods. Please refer to <a href="/develop/guides/digital-signatures-for-apis " target="_blank">Digital Signatures for APIs</a> to learn more on the impacted APIs and the process to create signatures to be included in the HTTP payload.</p></div><br>This method is used to retrieve cumulative values for payouts in a particular state, or all states. The metadata in the response includes total payouts, the total number of monetary transactions (sales, refunds, credits) associated with those payouts, and the total dollar value of all payouts.<br><br>If the <b>filter</b> query parameter is used to filter by payout status, only one payout status value may be used. If the <b>filter</b> query parameter is not used to filter by a specific payout status, cumulative values for payouts in all states are returned.<br><br>The user can also use the <b>filter</b> query parameter to specify a date range, and then only payouts that were processed within that date range are considered.
		 * Get payout_summary
		 * @param {string} filter The two filter types that can be used here are discussed below. One or both of these filter types can be used. If none of these filters are used, the data returned in the response will reflect payouts, in all states, processed within the last 90 days. <ul><li><b>payoutDate</b>: consider payouts processed within a specific range of dates. The date format to use is <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. Below is the proper syntax to use if filtering by a date range: <br><br><code>https://apiz.ebay.com/sell/finances/v1/payout_summary?filter=payoutDate:[2018-12-17T00:00:01.000Z..2018-12-24T00:00:01.000Z]</code><br><br>Alternatively, the user could omit the ending date, and the date range would include the starting date and up to 90 days past that date, or the current date if the starting date is less than 90 days in the past.</li> <li><b>payoutStatus</b>: consider only the payouts in a particular state. Only one payout state can be specified with this filter. The supported <b>payoutStatus</b> values are as follows:<ul><li><code>INITIATED</code>: search for payouts that have been initiated but not processed.</li><li><code>SUCCEEDED</code>: consider only successful payouts.</li><li><code>RETRYABLE_FAILED</code>: consider only payouts that failed, but ones which will be tried again.</li><li><code>TERMINAL_FAILED</code>: consider only payouts that failed, and ones that will not be tried again.</li><li> <code>REVERSED</code>: consider only payouts that were reversed. </li></ul>Below is the proper syntax to use if filtering by payout status: <br><br><code>https://apiz.ebay.com/sell/finances/v1/payout_summary?filter=payoutStatus:{SUCCEEDED}</code></ul><br>If both the <b>payoutDate</b> and <b>payoutStatus</b> filters are used, only the payouts that satisfy both criteria are considered in the results. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/finances/types/cos:FilterField
		 * @return {PayoutSummaryResponse} Success
		 */
		GetPayoutSummary(filter: string | null | undefined): Observable<PayoutSummaryResponse> {
			return this.http.get<PayoutSummaryResponse>(this.baseUri + 'payout_summary?filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * <div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span> Due to EU &amp; UK Payments regulatory requirements, an additional security verification via Digital Signatures is required for certain API calls that are made on behalf of EU/UK sellers, including all <b>Finances API</b> methods. Please refer to <a href="/develop/guides/digital-signatures-for-apis " target="_blank">Digital Signatures for APIs</a> to learn more on the impacted APIs and the process to create signatures to be included in the HTTP payload.</p></div><br>This method retrieves all pending funds that have not yet been distibuted through a seller payout.<br><br>There are no input parameters for this method. The response payload includes available funds, funds being processed, funds on hold, and also an aggregate count of all three of these categories.<br><br>If there are no funds that are pending, on hold, or being processed for the seller's account, no response payload is returned, and an http status code of <code>204 - No Content</code> is returned instead.
		 * Get seller_funds_summary
		 * @return {SellerFundsSummaryResponse} Success
		 */
		GetSellerFundsSummary(): Observable<SellerFundsSummaryResponse> {
			return this.http.get<SellerFundsSummaryResponse>(this.baseUri + 'seller_funds_summary', {});
		}

		/**
		 * <div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span> Due to EU &amp; UK Payments regulatory requirements, an additional security verification via Digital Signatures is required for certain API calls that are made on behalf of EU/UK sellers, including all <b>Finances API</b> methods. Please refer to <a href="/develop/guides/digital-signatures-for-apis " target="_blank">Digital Signatures for APIs</a> to learn more on the impacted APIs and the process to create signatures to be included in the HTTP payload.</p></div><br>The <b>getTransactions</b> method allows a seller to retrieve information about one or more of their monetary transactions.<br><br><span class="tablenote"><b>Note:</b> For a complete list of transaction types, refer to <a href="/api-docs/sell/finances/types/pay:TransactionTypeEnum " target="_blank ">TransactionTypeEnum</a>.</span><br>Numerous input filters are available which can be used individualy or combined to refine the data that are returned. For example:<ul><li><code>SALE</code> transactions for August 15, 2022;</li><li><code>RETURN</code> transactions for the month of January, 2021;</li><li>Transactions currently in a <code>transactionStatus</code> equal to <code>FUNDS_ON_HOLD</code>.</li></ul>Refer to the <a href="#uri.filter ">filter</a> field for additional information about each filter and its use.<br><br>Pagination and sort query parameters are also provided that allow users to further control how monetary transactions are displayed in the response.<br><br>If no monetary transactions match the input criteria, an http status code of <em>204 No Content</em> is returned with no response payload.
		 * Get transaction
		 * @param {string} filter Numerous filters are available for the <strong>getTransactions</strong> method, and these filters are discussed below. One or more of these filter types can be used. If none of these filters are used, all monetary transactions from the last 90 days are returned:<ul><li><b>transactionDate</b>: search for monetary transactions that occurred within a specific range of dates.<br><br><span class="tablenote"><strong>Note:</strong> All dates must be input using UTC format (<code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>) and should be adjusted accordingly for the local timezone of the user.</span><br><br>Below is the proper syntax to use if filtering by a date range: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction?filter=transactionDate:[2018-10-23T00:00:01.000Z..2018-11-09T00:00:01.000Z]</code><br><br>Alternatively, the user could omit the ending date, and the date range would include the starting date and up to 90 days past that date, or the current date if the starting date is less than 90 days in the past.</li>  <li><b>transactionType</b>: search for a specific type of monetary transaction. The supported <b>transactionType</b> values are as follows:<ul><li><code>SALE</code>: a sales order.</li><li> <code>REFUND</code>: a refund to the buyer after an order cancellation or return.</li><li><code>CREDIT</code>: a credit issued by eBay to the seller's account.</li><li><code>DISPUTE</code>: a monetary transaction associated with a payment dispute between buyer and seller.</li><li><code>NON_SALE_CHARGE</code>: a monetary transaction involving a seller transferring money to eBay for the balance of a charge for NON_SALE_CHARGE transactions (transactions that contain non-transactional seller fees). These can include a one-time payment, monthly/yearly subscription fees charged monthly, NRC charges, and fee credits.</li><li><code>SHIPPING_LABEL</code>: a monetary transaction where eBay is billing the seller for an eBay shipping label. Note that the shipping label functionality will initially only be available to a select number of sellers.</li><li><code>TRANSFER</code>: A transfer is a monetary transaction where eBay is billing the seller for reimbursement of a charge. An example of a transfer is a seller reimbursing eBay for a buyer refund.</li><li><code>ADJUSTMENT</code>: An adjustment is a monetary transaction where eBay is crediting or debiting the seller's account.</li><li><code>WITHDRAWAL</code>: A withdrawal is a monetary transaction where the seller requests an on-demand payout from eBay.<br><br><span class="tablenote"><b>Note:</b> On-demand payout is not available for sellers who are already on a <b>daily</b> payout schedule. In order to initiate an on-demand payout, a seller must be on a <b>weekly</b>, <b>bi-weekly</b>, or <b>monthly</b> payout schedule.</span></li><li><code>LOAN_REPAYMENT</code>: A monetary transaction related to the repayment of an outstanding loan balance for approved participants enrolled in the <a href="https://pages.ebay.com/sellercapital/ " target="_blank ">eBay Seller Capital financing program</a>.<br><br><span class="tablenote"><b>Note:</b> eBay Seller Capital financing is only available in select marketplaces. Refer to <a href="/api-docs/sell/finances/overview.html#loans " target="_blank ">Marketplace availability for eBay Seller Capital funding program</a> for current marketplace eligibility.</span></li></ul>Below is the proper syntax to use if filtering by a monetary transaction type: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction?filter=transactionType:{SALE}</code></li><li><b>transactionStatus</b>: this filter type is only applicable for sales orders, and allows the user to filter seller payouts in a particular state.  The supported <b>transactionStatus</b> values are as follows:<ul><li><code>PAYOUT</code>: this indicates that the proceeds from the corresponding sales order has been paid out to the seller's account.</li><li><code>FUNDS_PROCESSING</code>: this indicates that the funds for the corresponding monetary transaction are currently being processed.</li><li><code>FUNDS_AVAILABLE_FOR_PAYOUT</code>: this indicates that the proceeds from the corresponding sales order are available for a seller payout, but processing has not yet begun.</li><li><code>FUNDS_ON_HOLD</code>: this indicates that the proceeds from the corresponding sales order are currently being held by eBay, and are not yet available for a seller payout.</li><li><code>COMPLETED</code>: this indicates that the funds for the corresponding <code>TRANSFER</code> monetary transaction have transferred and the transaction has completed.</li><li><code>FAILED</code>: this indicates the process has failed for the corresponding <code>TRANSFER</code> monetary transaction. </li></ul>Below is the proper syntax to use if filtering by transaction status: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction?filter=transactionStatus:{PAYOUT}</code></li><li><b>buyerUsername</b>: the eBay user ID of the buyer involved in the monetary transaction. Only monetary transactions involving this buyer are returned. Below is the proper syntax to use if filtering by a specific eBay buyer: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction?filter=buyerUsername:{buyer1234}</code> </li><li><b>salesRecordReference</b>: the unique Selling Manager identifier of the order involved in the monetary transaction. Only monetary transactions involving this Selling Manager Sales Record ID are returned. Below is the proper syntax to use if filtering by a specific Selling Manager Sales Record ID: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction?filter=salesRecordReference:{123}</code><br><br><span class="tablenote"><strong>Note:</strong> For all orders originating after February 1, 2020, a value of <code>0</code> will be returned in the <b>salesRecordReference</b> field. So, this filter will only be useful to retrieve orders than occurred before this date. </span></li><li><b>payoutId</b>: the unique identifier of a seller payout. This value is auto-generated by eBay once the seller payout is set to be processed. Only monetary transactions involving this Payout ID are returned. Below is the proper syntax to use if filtering by a specific Payout ID: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction?filter=payoutId:{5********8}</code>  </li><li><b>transactionId</b>: the unique identifier of a monetary transaction. For a sales order, the <b>orderId</b> filter should be used instead. Only the monetary transaction defined by the identifier is returned.<br><br><span class="tablenote"><strong>Note:</strong> This filter cannot be used alone; the <b>transactionType</b> must also be specified when filtering by transaction ID.</span><br><br>Below is the proper syntax to use if filtering by a specific transaction ID: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction?filter=transactionId:{0*-0***0-3***3}&filter=transactionType:{SALE}</code> </li><li><b>orderId</b>: the unique identifier of a sales order. Only monetary transaction(s) associated with this <b>orderId</b> value are returned.<br><br>For any other monetary transaction, the <b>transactionId</b> filter should be used instead.<br><br>Below is the proper syntax to use if filtering by a specific order ID:<br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction?filter=orderId:{0*-0***0-3***3}</code> </li></ul> For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/finances/types/cos:FilterField
		 * @param {string} limit The number of monetary transactions to return per page of the result set. Use this parameter in conjunction with the <b>offset</b> parameter to control the pagination of the output. <br><br> For example, if <b>offset</b> is set to <code>10</code> and <b>limit</b> is set to <code>10</code>, the method retrieves monetary transactions 11 thru 20 from the result set. <br><br> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span> <br><br> <b>Maximum:</b><code> 1000</code> <br> <b>Default:</b><code> 20</code>
		 * @param {string} offset This integer value indicates the actual position that the first monetary transaction returned on the current page has in the results set. So, if you wanted to view the 11th monetary transaction of the result set, you would set the <strong>offset</strong> value in the request to <code>10</code>. <br><br>In the request, you can use the <b>offset</b> parameter in conjunction with the <b>limit</b> parameter to control the pagination of the output. For example, if <b>offset</b> is set to <code>30</code> and <b>limit</b> is set to <code>10</code>, the method retrieves transactions 31 thru 40 from the resulting collection of transactions. <br><br> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span><br><b>Default:</b> <code>0</code> (zero)
		 * @param {string} sort Sorting is not yet available for the <b>getTransactions</b> method. By default, monetary transactions that match the input criteria are sorted in descending order according to the transaction date. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/finances/types/cos:SortField
		 * @return {Transactions} Success
		 */
		GetTransactions(filter: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined, sort: string | null | undefined): Observable<Transactions> {
			return this.http.get<Transactions>(this.baseUri + 'transaction?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * <div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span> Due to EU &amp; UK Payments regulatory requirements, an additional security verification via Digital Signatures is required for certain API calls that are made on behalf of EU/UK sellers, including all <b>Finances API</b> methods. Please refer to <a href="/develop/guides/digital-signatures-for-apis " target="_blank">Digital Signatures for APIs</a> to learn more on the impacted APIs and the process to create signatures to be included in the HTTP payload.</p></div><br>The <b>getTransactionSummary</b> method retrieves cumulative information for monetary transactions. If applicable, the number of payments with a <code>transactionStatus</code> equal to <code>FUNDS_ON_HOLD</code> and the total monetary amount of these on-hold payments are also returned.<br><br><span class="tablenote"><b>Note:</b> For a complete list of transaction types, refer to <a href="/api-docs/sell/finances/types/pay:TransactionTypeEnum " target="_blank ">TransactionTypeEnum</a>.</span><br>Refer to the <a href="#uri.filter ">filter</a> field for additional information about each filter and its use.<br><br><span class="tablenote"><b>Note:</b> Unless a <code>transactionType</code> filter is used to retrieve a specific type of transaction (e.g., <code>SALE</code>, <code>REFUND</code>, etc.,) the <a href="#response.creditCount">creditCount</a> and <a href="#response.creditAmount">creditAmount</a> response fields both include <i>order sales</i> and <i>seller credits</i> information. That is, the <b>count</b> and <b>value</b> fields do not distinguish between these two types monetary transactions.</span>
		 * Get transaction_summary
		 * @param {string} filter Numerous filters are available for the <strong>getTransactionSummary</strong> method, and these filters are discussed below. One or more of these filter types can be used. The <b>transactionStatus</b> filter must be used. All other filters are optional. <ul><li><b>transactionStatus</b>: the data returned in the response pertains to the sales, payouts, and transfer status set. The supported <b>transactionStatus</b> values are as follows:<ul><li><code>PAYOUT</code>: only consider monetary transactions where the proceeds from the sales order(s) have been paid out to the seller's bank account.</li><li><code>FUNDS_PROCESSING</code>: only consider monetary transactions where the proceeds from the sales order(s) are currently being processed.</li><li><code>FUNDS_AVAILABLE_FOR_PAYOUT</code>: only consider monetary transactions where the proceeds from the sales order(s) are available for a seller payout, but processing has not yet begun.</li><li><code>FUNDS_ON_HOLD</code>: only consider monetary transactions where the proceeds from the sales order(s) are currently being held by eBay, and are not yet available for a seller payout.</li><li><code>COMPLETED</code>: this indicates that the funds for the corresponding <code>TRANSFER</code> monetary transaction have transferred and the transaction has completed.</li><li><code>FAILED</code>: this indicates the process has failed for the corresponding <code>TRANSFER</code> monetary transaction. </li></ul>Below is the proper syntax to use when setting up the <b>transactionStatus</b> filter: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=transactionStatus:&#123;PAYOUT&#125;</code></li><li><b>transactionDate</b>: only consider monetary transactions that occurred within a specific range of dates.<br><br><span class="tablenote"><strong>Note:</strong> All dates must be input using UTC format (<code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>) and should be adjusted accordingly for the local timezone of the user.</span><br><br>Below is the proper syntax to use if filtering by a date range: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=transactionDate:&#91;2018-10-23T00:00:01.000Z..2018-11-09T00:00:01.000Z&#93;</code><br><br>Alternatively, the user could omit the ending date, and the date range would include the starting date and up to 90 days past that date, or the current date if the starting date is less than 90 days in the past.</li>  <li><b>transactionType</b>: only consider a specific type of monetary transaction. The supported <b>transactionType</b> values are as follows:<ul><li><code>SALE</code>: a sales order.</li><li> <code>REFUND</code>: a refund to the buyer after an order cancellation or return.</li><li><code>CREDIT</code>: a credit issued by eBay to the seller's account.</li><li><code>DISPUTE</code>: a monetary transaction associated with a payment dispute between buyer and seller.</li><li><code>NON_SALE_CHARGE</code>: a monetary transaction involving a seller transferring money to eBay for the balance of a charge for NON_SALE_CHARGE transactions (transactions that contain non-transactional seller fees). These can include a one-time payment, monthly/yearly subscription fees charged monthly, NRC charges, and fee credits.</li><li><code>SHIPPING_LABEL</code>: a monetary transaction where eBay is billing the seller for an eBay shipping label. Note that the shipping label functionality will initially only be available to a select number of sellers.</li><li><code>TRANSFER</code>: A transfer is a monetary transaction where eBay is billing the seller for reimbursement of a charge. An example of a transfer is a seller reimbursing eBay for a buyer refund.</li><li><code>ADJUSTMENT</code>: An adjustment is a monetary transaction where eBay is crediting or debiting the seller's account.</li><li><code>WITHDRAWAL</code>: A withdrawal is a monetary transaction where the seller requests an on-demand payout from eBay.<br><br><span class="tablenote"><b>Note:</b> On-demand payout is not available for sellers who are already on a <b>daily</b> payout schedule. In order to initiate an on-demand payout, a seller must be on a <b>weekly</b>, <b>bi-weekly</b>, or <b>monthly</b> payout schedule.</span></li><li><code>LOAN_REPAYMENT</code>: A monetary transaction related to the repayment of an outstanding loan balance for approved participants enrolled in the <a href="https://pages.ebay.com/sellercapital/ " target="_blank ">eBay Seller Capital financing program</a>.<br><br><span class="tablenote"><b>Note:</b> eBay Seller Capital financing is only available in select marketplaces. Refer to <a href="/api-docs/sell/finances/overview.html#loans " target="_blank ">Marketplace availability for eBay Seller Capital funding program</a> for current marketplace eligibility.</span></li></ul>Below is the proper syntax to use if filtering by a monetary transaction type: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=transactionType:{SALE}</code></li><li><b>buyerUsername</b>: only consider monetary transactions involving a specific buyer (specified with the buyer's eBay user ID). Below is the proper syntax to use if filtering by a specific eBay buyer: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=buyerUsername:&#123;buyer1234&#125;</code> </li><li><b>salesRecordReference</b>: only consider monetary transactions corresponding to a specific order (identified with a Selling Manager order identifier). Below is the proper syntax to use if filtering by a specific Selling Manager Sales Record ID: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=salesRecordReference:&#123;123&#125;</code><br><br><span class="tablenote"><strong>Note:</strong> For all orders originating after February 1, 2020, a value of <code>0</code> will be returned in the <b>salesRecordReference</b> field. So, this filter will only be useful to retrieve orders than occurred before this date.</span> </li><li><b>payoutId</b>: only consider monetary transactions related to a specific seller payout (identified with a Payout ID). This value is auto-generated by eBay once the seller payout is set to be processed. Below is the proper syntax to use if filtering by a specific Payout ID: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=payoutId:&#123;5********8&#125;</code>  </li><li><b>transactionId</b>: the unique identifier of a monetary transaction. For a sales order, the <b>orderId</b> filter should be used instead. Only the monetary transaction(s) associated with this <b>transactionId</b> value are returned.<br><br><span class="tablenote"><strong>Note:</strong> This filter cannot be used alone; the <b>transactionType</b> must also be specified when filtering by transaction ID.</span><br><br>Below is the proper syntax to use if filtering by a specific transaction ID: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=transactionId:{0*-0***0-3***3}&filter=transactionType:{SALE}</code> </li><li><b>orderId</b>: the unique identifier of a sales order. For any other monetary transaction, the <b>transactionId</b> filter should be used instead. Only the monetary transaction(s) associated with this <b>orderId</b> value are returned. Below is the proper syntax to use if filtering by a specific order ID: <br><br><code>https://apiz.ebay.com/sell/finances/v1/transaction_summary?filter=orderId:{0*-0***0-3***3}</code> </li></ul> For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/finances/types/cos:FilterField
		 * @return {TransactionSummaryResponse} Success
		 */
		GetTransactionSummary(filter: string | null | undefined): Observable<TransactionSummaryResponse> {
			return this.http.get<TransactionSummaryResponse>(this.baseUri + 'transaction_summary?filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * <div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span> Due to EU &amp; UK Payments regulatory requirements, an additional security verification via Digital Signatures is required for certain API calls that are made on behalf of EU/UK sellers, including all <b>Finances API</b> methods. Please refer to <a href="/develop/guides/digital-signatures-for-apis " target="_blank">Digital Signatures for APIs</a> to learn more on the impacted APIs and the process to create signatures to be included in the HTTP payload.</p></div><br>This method retrieves detailed information regarding a <code>TRANSFER</code> transaction type. A <code>TRANSFER</code> is a  monetary transaction type that involves a seller transferring money to eBay for reimbursement of one or more charges. For example, when a seller reimburses eBay for a buyer refund.<br><br>If an ID is passed into the URI that is an identifier for another transaction type, this call will return an http status code of <code>404 Not found</code>.
		 * Get transfer/{transfer_Id}
		 * @param {string} transfer_Id The unique identifier of the <code>TRANSFER</code> transaction type you wish to retrieve.
		 * @return {Transfer} Success.
		 */
		GetTransfer(transfer_Id: string): Observable<Transfer> {
			return this.http.get<Transfer>(this.baseUri + 'transfer/' + (transfer_Id == null ? '' : encodeURIComponent(transfer_Id)), {});
		}
	}

}

