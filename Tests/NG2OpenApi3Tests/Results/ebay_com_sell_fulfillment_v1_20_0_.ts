import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This type is used by base request of the <strong>acceptPaymentDispute</strong> method. */
	export interface AcceptPaymentDisputeRequest {

		/** This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller. */
		returnAddress?: ReturnAddress;

		/**
		 * This integer value indicates the revision number of the payment dispute. This field is required. The current <strong>revision</strong> number for a payment dispute can be retrieved with the <strong>getPaymentDispute</strong> method. Each time an action is taken against a payment dispute, this integer value increases by 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		revision?: number | null;
	}

	/** This type is used by base request of the <strong>acceptPaymentDispute</strong> method. */
	export interface AcceptPaymentDisputeRequestFormProperties {

		/**
		 * This integer value indicates the revision number of the payment dispute. This field is required. The current <strong>revision</strong> number for a payment dispute can be retrieved with the <strong>getPaymentDispute</strong> method. Each time an action is taken against a payment dispute, this integer value increases by 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		revision: FormControl<number | null | undefined>,
	}
	export function CreateAcceptPaymentDisputeRequestFormGroup() {
		return new FormGroup<AcceptPaymentDisputeRequestFormProperties>({
			revision: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller. */
	export interface ReturnAddress {

		/** The first line of the street address. */
		addressLine1?: string | null;

		/** The second line of the street address. This line is not always necessarily, but is often used for apartment number or suite number, or other relevant information that can not fit on the first line. */
		addressLine2?: string | null;

		/** The city of the return address. */
		city?: string | null;

		/** The country's two-digt, ISO 3166-1 country code. See the enumeration type for a country's value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		country?: string | null;

		/** The county of the return address. Counties are not applicable to all countries. */
		county?: string | null;

		/** The full name of return address owner. */
		fullName?: string | null;

		/** The postal code of the return address. */
		postalCode?: string | null;

		/** This type is used by the <strong>returnAddress</strong field that is used by the payment dispute methods. If a buyer is returning the item (under payment dispute) to the seller, a primary phone number for the seller must be provided. */
		primaryPhone?: Phone;

		/** The state or province of the return address. */
		stateOrProvince?: string | null;
	}

	/** This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller. */
	export interface ReturnAddressFormProperties {

		/** The first line of the street address. */
		addressLine1: FormControl<string | null | undefined>,

		/** The second line of the street address. This line is not always necessarily, but is often used for apartment number or suite number, or other relevant information that can not fit on the first line. */
		addressLine2: FormControl<string | null | undefined>,

		/** The city of the return address. */
		city: FormControl<string | null | undefined>,

		/** The country's two-digt, ISO 3166-1 country code. See the enumeration type for a country's value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		country: FormControl<string | null | undefined>,

		/** The county of the return address. Counties are not applicable to all countries. */
		county: FormControl<string | null | undefined>,

		/** The full name of return address owner. */
		fullName: FormControl<string | null | undefined>,

		/** The postal code of the return address. */
		postalCode: FormControl<string | null | undefined>,

		/** The state or province of the return address. */
		stateOrProvince: FormControl<string | null | undefined>,
	}
	export function CreateReturnAddressFormGroup() {
		return new FormGroup<ReturnAddressFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			stateOrProvince: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the <strong>returnAddress</strong field that is used by the payment dispute methods. If a buyer is returning the item (under payment dispute) to the seller, a primary phone number for the seller must be provided. */
	export interface Phone {

		/** The seller's country calling code. This field is needed if the buyer is located in a different country than the seller. It is also OK to provide if the buyer and seller are both located in the same country. For a full list of calling codes for all countries, see the <a href="https://countrycode.org/ " target="_blank">countrycode.org</a> site. */
		countryCode?: string | null;

		/** The seller's primary phone number associated with the return address. When this number is provided in a <strong>contestPaymentDispute</strong> or <strong>contestPaymentDispute</strong> method, it is provided as one continuous numeric string, including the area code. So, if the phone number's area code was '408', a number in this field may look something like this: <br><br><code>"number" : "4088084356"</code><br><br>If the buyer is located in a different country than the seller, the seller's country calling code will need to be specified in the <strong>countryCode</strong> field. */
		number?: string | null;
	}

	/** This type is used by the <strong>returnAddress</strong field that is used by the payment dispute methods. If a buyer is returning the item (under payment dispute) to the seller, a primary phone number for the seller must be provided. */
	export interface PhoneFormProperties {

		/** The seller's country calling code. This field is needed if the buyer is located in a different country than the seller. It is also OK to provide if the buyer and seller are both located in the same country. For a full list of calling codes for all countries, see the <a href="https://countrycode.org/ " target="_blank">countrycode.org</a> site. */
		countryCode: FormControl<string | null | undefined>,

		/** The seller's primary phone number associated with the return address. When this number is provided in a <strong>contestPaymentDispute</strong> or <strong>contestPaymentDispute</strong> method, it is provided as one continuous numeric string, including the area code. So, if the phone number's area code was '408', a number in this field may look something like this: <br><br><code>"number" : "4088084356"</code><br><br>If the buyer is located in a different country than the seller, the seller's country calling code will need to be specified in the <strong>countryCode</strong> field. */
		number: FormControl<string | null | undefined>,
	}
	export function CreatePhoneFormGroup() {
		return new FormGroup<PhoneFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the request payload of the <strong>addEvidence</strong> method. The <strong>addEvidence</strong> method is used to create a new evidence set against a payment dispute with one or more evidence files. */
	export interface AddEvidencePaymentDisputeRequest {

		/** This field is used to indicate the type of evidence being provided through one or more evidence files. All evidence files (if more than one) should be associated with the evidence type passed in this field. See the <strong>EvidenceTypeEnum</strong> type for the supported evidence types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a> */
		evidenceType?: string | null;

		/** This array is used to specify one or more evidence files that will become part of a new evidence set associated with a payment dispute. At least one evidence file must be specified in the <strong>files</strong> array.<br><br> The unique identifier of an evidence file is returned in the response payload of the <strong>uploadEvidence</strong> method. */
		files?: Array<FileEvidence>;

		/** This required array identifies the order line item(s) for which the evidence file(s) will be applicable. Both the <strong>itemId</strong> and <strong>lineItemID</strong> fields are needed to identify each order line item, and both of these values are returned under the <strong>evidenceRequests.lineItems</strong> array in the <strong>getPaymentDispute</strong> response. */
		lineItems?: Array<OrderLineItems>;
	}

	/** This type is used by the request payload of the <strong>addEvidence</strong> method. The <strong>addEvidence</strong> method is used to create a new evidence set against a payment dispute with one or more evidence files. */
	export interface AddEvidencePaymentDisputeRequestFormProperties {

		/** This field is used to indicate the type of evidence being provided through one or more evidence files. All evidence files (if more than one) should be associated with the evidence type passed in this field. See the <strong>EvidenceTypeEnum</strong> type for the supported evidence types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a> */
		evidenceType: FormControl<string | null | undefined>,
	}
	export function CreateAddEvidencePaymentDisputeRequestFormGroup() {
		return new FormGroup<AddEvidencePaymentDisputeRequestFormProperties>({
			evidenceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used to store the unique identifier of an evidence file. Evidence files are used by seller to contest a payment dispute. */
	export interface FileEvidence {

		/** If an <strong>uploadEvidenceFile</strong> call is successful, a unique identifier of this evidence file will be returned in the <strong>uploadEvidenceFile</strong> response payload.  This unique <strong>fileId</strong> value is then used to either add this evidence file to a new evidence set using the <strong>addEvidence</strong> method, or to add this file to an existing evidence set using the <strong>updateEvidence</strong> method.<br><br>Note that if an evidence set already exists for a payment dispute, the <strong>getPaymentDispute</strong> method will return both the <strong>evidenceId</strong> (unique identifier of evidence set) value, and the <strong>fileId</strong> (unique identifier of a file within that evidence set) value(s). */
		fileId?: string | null;
	}

	/** This type is used to store the unique identifier of an evidence file. Evidence files are used by seller to contest a payment dispute. */
	export interface FileEvidenceFormProperties {

		/** If an <strong>uploadEvidenceFile</strong> call is successful, a unique identifier of this evidence file will be returned in the <strong>uploadEvidenceFile</strong> response payload.  This unique <strong>fileId</strong> value is then used to either add this evidence file to a new evidence set using the <strong>addEvidence</strong> method, or to add this file to an existing evidence set using the <strong>updateEvidence</strong> method.<br><br>Note that if an evidence set already exists for a payment dispute, the <strong>getPaymentDispute</strong> method will return both the <strong>evidenceId</strong> (unique identifier of evidence set) value, and the <strong>fileId</strong> (unique identifier of a file within that evidence set) value(s). */
		fileId: FormControl<string | null | undefined>,
	}
	export function CreateFileEvidenceFormGroup() {
		return new FormGroup<FileEvidenceFormProperties>({
			fileId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the <strong>lineItems</strong> array that is used to identify one or more line items in the order with the payment dispute. */
	export interface OrderLineItems {

		/** The unique identifier of the eBay listing associated with the order. */
		itemId?: string | null;

		/** The unique identifier of the line item within the order. The <strong>lineItemId</strong> value is created once the buyer actually purchases the item, or if there is a commitment to buy (such as an auction that is won by the buyer, an accepted Best Offer, or other situation that does not require immediate payment from the buyer). */
		lineItemId?: string | null;
	}

	/** This type is used by the <strong>lineItems</strong> array that is used to identify one or more line items in the order with the payment dispute. */
	export interface OrderLineItemsFormProperties {

		/** The unique identifier of the eBay listing associated with the order. */
		itemId: FormControl<string | null | undefined>,

		/** The unique identifier of the line item within the order. The <strong>lineItemId</strong> value is created once the buyer actually purchases the item, or if there is a commitment to buy (such as an auction that is won by the buyer, an accepted Best Offer, or other situation that does not require immediate payment from the buyer). */
		lineItemId: FormControl<string | null | undefined>,
	}
	export function CreateOrderLineItemsFormGroup() {
		return new FormGroup<OrderLineItemsFormProperties>({
			itemId: new FormControl<string | null | undefined>(undefined),
			lineItemId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the response payload of the <strong>addEvidence</strong> method. Its only field is an unique identifier of an evidence set. */
	export interface AddEvidencePaymentDisputeResponse {

		/** The value returned in this field is the unique identifier of the newly-created evidence set. Upon a successful call, this value is automatically genererated. This new evidence set for the payment dispute includes the evidence file(s) that were passed in to the <strong>fileId</strong> array in the request payload. The <strong>evidenceId</strong> value will be needed if the seller wishes to add to the evidence set by using the <strong>updateEvidence</strong> method, or if they want to retrieve a specific evidence file within the evidence set by using the <strong>fetchEvidenceContent</strong> method. */
		evidenceId?: string | null;
	}

	/** This type is used by the response payload of the <strong>addEvidence</strong> method. Its only field is an unique identifier of an evidence set. */
	export interface AddEvidencePaymentDisputeResponseFormProperties {

		/** The value returned in this field is the unique identifier of the newly-created evidence set. Upon a successful call, this value is automatically genererated. This new evidence set for the payment dispute includes the evidence file(s) that were passed in to the <strong>fileId</strong> array in the request payload. The <strong>evidenceId</strong> value will be needed if the seller wishes to add to the evidence set by using the <strong>updateEvidence</strong> method, or if they want to retrieve a specific evidence file within the evidence set by using the <strong>fetchEvidenceContent</strong> method. */
		evidenceId: FormControl<string | null | undefined>,
	}
	export function CreateAddEvidencePaymentDisputeResponseFormGroup() {
		return new FormGroup<AddEvidencePaymentDisputeResponseFormProperties>({
			evidenceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains the details of a geographical address. */
	export interface Address {

		/** The first line of the street address.<br><br><span class="tablenote"><strong>Note:</strong> <b>addressLine1</b> will not be returned for any order that is more than 90 days old.</span> */
		addressLine1?: string | null;

		/** The second line of the street address. This field can be used for additional address information, such as a suite or apartment number. This field will be returned if defined for the shipping address.<br><br><span class="tablenote"><strong>Note:</strong> <b>addressLine2</b> will not be returned for any order that is more than 90 days old.</span><br><span class="tablenote"><b>Note:</b> As of January 31, 2022, <b>addressLine2</b> no longer returns EU VAT tax information. To determine line-item level VAT tax information, refer to <a href="#response.orders.lineItems.ebayCollectAndRemitTaxes.ebayReference">eBayReference</a>.</span> */
		addressLine2?: string | null;

		/** The city of the shipping destination. */
		city?: string | null;

		/** The country of the shipping destination, represented as a two-letter ISO 3166-1 alpha-2 country code. For example, <code>US</code> represents the United States, and <code>DE</code> represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		countryCode?: string | null;

		/** The county of the shipping destination. Counties typically, but not always, contain multiple cities or towns. This field is returned if known/available. */
		county?: string | null;

		/** The postal code of the shipping destination. Usually referred to as Zip codes in the US. Most countries have postal codes, but not all. The postal code will be returned if applicable. */
		postalCode?: string | null;

		/** The state or province of the shipping destination. Most countries have states or provinces, but not all. The state or province will be returned if applicable. */
		stateOrProvince?: string | null;
	}

	/** This type contains the details of a geographical address. */
	export interface AddressFormProperties {

		/** The first line of the street address.<br><br><span class="tablenote"><strong>Note:</strong> <b>addressLine1</b> will not be returned for any order that is more than 90 days old.</span> */
		addressLine1: FormControl<string | null | undefined>,

		/** The second line of the street address. This field can be used for additional address information, such as a suite or apartment number. This field will be returned if defined for the shipping address.<br><br><span class="tablenote"><strong>Note:</strong> <b>addressLine2</b> will not be returned for any order that is more than 90 days old.</span><br><span class="tablenote"><b>Note:</b> As of January 31, 2022, <b>addressLine2</b> no longer returns EU VAT tax information. To determine line-item level VAT tax information, refer to <a href="#response.orders.lineItems.ebayCollectAndRemitTaxes.ebayReference">eBayReference</a>.</span> */
		addressLine2: FormControl<string | null | undefined>,

		/** The city of the shipping destination. */
		city: FormControl<string | null | undefined>,

		/** The country of the shipping destination, represented as a two-letter ISO 3166-1 alpha-2 country code. For example, <code>US</code> represents the United States, and <code>DE</code> represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		countryCode: FormControl<string | null | undefined>,

		/** The county of the shipping destination. Counties typically, but not always, contain multiple cities or towns. This field is returned if known/available. */
		county: FormControl<string | null | undefined>,

		/** The postal code of the shipping destination. Usually referred to as Zip codes in the US. Most countries have postal codes, but not all. The postal code will be returned if applicable. */
		postalCode: FormControl<string | null | undefined>,

		/** The state or province of the shipping destination. Most countries have states or provinces, but not all. The state or province will be returned if applicable. */
		stateOrProvince: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			stateOrProvince: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
	export interface Amount {

		/** A three-letter ISO 4217 code that indicates the currency of the amount in the <b>convertedFromValue</b> field. This value is required or returned only if currency conversion/localization is required, and represents the pre-conversion currency. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		convertedFromCurrency?: string | null;

		/** The monetary amount before any conversion is performed, in the currency specified by the <b>convertedFromCurrency</b> field. This value is required or returned only if currency conversion/localization is required. The <b>value</b> field contains the converted amount of this value, in the currency specified by the <b>currency</b> field. */
		convertedFromValue?: string | null;

		/** A three-letter ISO 4217 code that indicates the currency of the amount in the <b>value</b> field. If currency conversion/localization is required, this is the post-conversion currency of the amount in the <b>value</b> field.<br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		currency?: string | null;

		/** The monetary amount, in the currency specified by the <b>currency</b> field. If currency conversion/localization is required, this value is the converted amount, and the <b>convertedFromValue</b> field contains the amount in the original currency.  <br><br><i>Required in</i> the <b>amount</b> type. */
		value?: string | null;
	}

	/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
	export interface AmountFormProperties {

		/** A three-letter ISO 4217 code that indicates the currency of the amount in the <b>convertedFromValue</b> field. This value is required or returned only if currency conversion/localization is required, and represents the pre-conversion currency. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		convertedFromCurrency: FormControl<string | null | undefined>,

		/** The monetary amount before any conversion is performed, in the currency specified by the <b>convertedFromCurrency</b> field. This value is required or returned only if currency conversion/localization is required. The <b>value</b> field contains the converted amount of this value, in the currency specified by the <b>currency</b> field. */
		convertedFromValue: FormControl<string | null | undefined>,

		/** A three-letter ISO 4217 code that indicates the currency of the amount in the <b>value</b> field. If currency conversion/localization is required, this is the post-conversion currency of the amount in the <b>value</b> field.<br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		currency: FormControl<string | null | undefined>,

		/** The monetary amount, in the currency specified by the <b>currency</b> field. If currency conversion/localization is required, this value is the converted amount, and the <b>convertedFromValue</b> field contains the amount in the original currency.  <br><br><i>Required in</i> the <b>amount</b> type. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmountFormGroup() {
		return new FormGroup<AmountFormProperties>({
			convertedFromCurrency: new FormControl<string | null | undefined>(undefined),
			convertedFromValue: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains information about a sales promotion that is applied to a line item. */
	export interface AppliedPromotion {

		/** A description of the applied sales promotion. */
		description?: string | null;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		discountAmount?: Amount;

		/** An eBay-generated unique identifier of the sales promotion.<br><br> Multiple types of sales promotions are available to eBay Store owners, including order size/volume discounts, shipping discounts, special coupons, and price markdowns. Sales promotions can be managed through the Marketing tab of Seller Hub in My eBay, or by using the Trading API's <b>SetPromotionalSale</b> call or the Marketing API's <b>createItemPromotion</b> method. */
		promotionId?: string | null;
	}

	/** This type contains information about a sales promotion that is applied to a line item. */
	export interface AppliedPromotionFormProperties {

		/** A description of the applied sales promotion. */
		description: FormControl<string | null | undefined>,

		/** An eBay-generated unique identifier of the sales promotion.<br><br> Multiple types of sales promotions are available to eBay Store owners, including order size/volume discounts, shipping discounts, special coupons, and price markdowns. Sales promotions can be managed through the Marketing tab of Seller Hub in My eBay, or by using the Trading API's <b>SetPromotionalSale</b> call or the Marketing API's <b>createItemPromotion</b> method. */
		promotionId: FormControl<string | null | undefined>,
	}
	export function CreateAppliedPromotionFormGroup() {
		return new FormGroup<AppliedPromotionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			promotionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains information about the order's buyer. */
	export interface Buyer {

		/** This type contains shipping and contact information for a buyer or an eBay shipping partner. */
		buyerRegistrationAddress?: ExtendedContact;

		/** This container consists of address information that can be used by sellers for tax purpose. */
		taxAddress?: TaxAddress;

		/** This type is used by the <strong>taxIdentifier</strong> container that is returned in <strong>getOrder</strong>. The <strong>taxIdentifier</strong> container consists of taxpayer identification information for buyers from Italy, Spain, or Guatemala. It is currently only returned for orders occurring on the eBay Italy or eBay Spain marketplaces.<br><br><span class="tablenote"><strong>Note:</strong> Currently, the <strong>taxIdentifier</strong> container is only returned in <strong>getOrder</strong> and not in <strong>getOrders</strong>. So, if a seller wanted to view a buyer's tax information for a particular order returned in <strong>getOrders</strong>, that seller would need to use the <strong>orderId</strong> value for that particular order, and then run a <strong>getOrder</strong> call against that order ID. </span> */
		taxIdentifier?: TaxIdentifier;

		/** The buyer's eBay user ID. */
		username?: string | null;
	}

	/** This type contains information about the order's buyer. */
	export interface BuyerFormProperties {

		/** The buyer's eBay user ID. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateBuyerFormGroup() {
		return new FormGroup<BuyerFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains shipping and contact information for a buyer or an eBay shipping partner. */
	export interface ExtendedContact {

		/** The company name associated with the buyer or eBay shipping partner. This field is only returned if defined/applicable to the buyer or eBay shipping partner. */
		companyName?: string | null;

		/** This type contains the details of a geographical address. */
		contactAddress?: Address;

		/** This field contains the email address of the buyer. This address will be returned for up to 14 days from order creation. If an order is more than 14 days old, no address is returned.<br><br><span class="tablenote"> <strong>Note:</strong> If returned, this field contains the email address of the buyer, even for Global Shipping Program shipments.<br><br>The <b>email</b> will not be returned for any order that is more than 90 days old.</span> */
		email?: string | null;

		/** The full name of the buyer or eBay shipping partner.<br><br><span class="tablenote"><strong>Note:</strong> The <b>fullName</b> will not be returned for any order that is more than 90 days old.</span> */
		fullName?: string | null;

		/** This type contains a string field representing a telephone number. */
		primaryPhone?: PhoneNumber;
	}

	/** This type contains shipping and contact information for a buyer or an eBay shipping partner. */
	export interface ExtendedContactFormProperties {

		/** The company name associated with the buyer or eBay shipping partner. This field is only returned if defined/applicable to the buyer or eBay shipping partner. */
		companyName: FormControl<string | null | undefined>,

		/** This field contains the email address of the buyer. This address will be returned for up to 14 days from order creation. If an order is more than 14 days old, no address is returned.<br><br><span class="tablenote"> <strong>Note:</strong> If returned, this field contains the email address of the buyer, even for Global Shipping Program shipments.<br><br>The <b>email</b> will not be returned for any order that is more than 90 days old.</span> */
		email: FormControl<string | null | undefined>,

		/** The full name of the buyer or eBay shipping partner.<br><br><span class="tablenote"><strong>Note:</strong> The <b>fullName</b> will not be returned for any order that is more than 90 days old.</span> */
		fullName: FormControl<string | null | undefined>,
	}
	export function CreateExtendedContactFormGroup() {
		return new FormGroup<ExtendedContactFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains a string field representing a telephone number. */
	export interface PhoneNumber {

		/** The primary telephone number for the shipping recipient. */
		phoneNumber?: string | null;
	}

	/** This type contains a string field representing a telephone number. */
	export interface PhoneNumberFormProperties {

		/** The primary telephone number for the shipping recipient. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberFormGroup() {
		return new FormGroup<PhoneNumberFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This container consists of address information that can be used by sellers for tax purpose. */
	export interface TaxAddress {

		/** The city name that can be used by sellers for tax purpose. */
		city?: string | null;

		/** The country code that can be used by sellers for tax purpose, represented as a two-letter ISO 3166-1 alpha-2 country code. For example, <strong>US</strong> represents the United States, and <strong>DE</strong> represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		countryCode?: string | null;

		/** The postal code that can be used by sellers for tax purpose. Usually referred to as Zip codes in the US. */
		postalCode?: string | null;

		/** The state name that can be used by sellers for tax purpose. */
		stateOrProvince?: string | null;
	}

	/** This container consists of address information that can be used by sellers for tax purpose. */
	export interface TaxAddressFormProperties {

		/** The city name that can be used by sellers for tax purpose. */
		city: FormControl<string | null | undefined>,

		/** The country code that can be used by sellers for tax purpose, represented as a two-letter ISO 3166-1 alpha-2 country code. For example, <strong>US</strong> represents the United States, and <strong>DE</strong> represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		countryCode: FormControl<string | null | undefined>,

		/** The postal code that can be used by sellers for tax purpose. Usually referred to as Zip codes in the US. */
		postalCode: FormControl<string | null | undefined>,

		/** The state name that can be used by sellers for tax purpose. */
		stateOrProvince: FormControl<string | null | undefined>,
	}
	export function CreateTaxAddressFormGroup() {
		return new FormGroup<TaxAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			stateOrProvince: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the <strong>taxIdentifier</strong> container that is returned in <strong>getOrder</strong>. The <strong>taxIdentifier</strong> container consists of taxpayer identification information for buyers from Italy, Spain, or Guatemala. It is currently only returned for orders occurring on the eBay Italy or eBay Spain marketplaces.<br><br><span class="tablenote"><strong>Note:</strong> Currently, the <strong>taxIdentifier</strong> container is only returned in <strong>getOrder</strong> and not in <strong>getOrders</strong>. So, if a seller wanted to view a buyer's tax information for a particular order returned in <strong>getOrders</strong>, that seller would need to use the <strong>orderId</strong> value for that particular order, and then run a <strong>getOrder</strong> call against that order ID. </span> */
	export interface TaxIdentifier {

		/** This two-letter code indicates the country that issued the buyer's tax ID. The country that the two-letter code represents can be found in the <strong>CountryCodeEnum</strong> type, or in the  <a href="https://www.iso.org/iso-3166-country-codes.html ">ISO 3166</a> standard. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		issuingCountry?: string | null;

		/** This enumeration value indicates the type of tax identification being used for the buyer. The different tax types are defined in the <strong>TaxIdentifierTypeEnum</strong> type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxIdentifierTypeEnum'>eBay API documentation</a> */
		taxIdentifierType?: string | null;

		/** This value is the unique tax ID associated with the buyer. The type of tax identification is shown in the <strong>taxIdentifierType</strong> field. */
		taxpayerId?: string | null;
	}

	/** This type is used by the <strong>taxIdentifier</strong> container that is returned in <strong>getOrder</strong>. The <strong>taxIdentifier</strong> container consists of taxpayer identification information for buyers from Italy, Spain, or Guatemala. It is currently only returned for orders occurring on the eBay Italy or eBay Spain marketplaces.<br><br><span class="tablenote"><strong>Note:</strong> Currently, the <strong>taxIdentifier</strong> container is only returned in <strong>getOrder</strong> and not in <strong>getOrders</strong>. So, if a seller wanted to view a buyer's tax information for a particular order returned in <strong>getOrders</strong>, that seller would need to use the <strong>orderId</strong> value for that particular order, and then run a <strong>getOrder</strong> call against that order ID. </span> */
	export interface TaxIdentifierFormProperties {

		/** This two-letter code indicates the country that issued the buyer's tax ID. The country that the two-letter code represents can be found in the <strong>CountryCodeEnum</strong> type, or in the  <a href="https://www.iso.org/iso-3166-country-codes.html ">ISO 3166</a> standard. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		issuingCountry: FormControl<string | null | undefined>,

		/** This enumeration value indicates the type of tax identification being used for the buyer. The different tax types are defined in the <strong>TaxIdentifierTypeEnum</strong> type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxIdentifierTypeEnum'>eBay API documentation</a> */
		taxIdentifierType: FormControl<string | null | undefined>,

		/** This value is the unique tax ID associated with the buyer. The type of tax identification is shown in the <strong>taxIdentifierType</strong> field. */
		taxpayerId: FormControl<string | null | undefined>,
	}
	export function CreateTaxIdentifierFormGroup() {
		return new FormGroup<TaxIdentifierFormProperties>({
			issuingCountry: new FormControl<string | null | undefined>(undefined),
			taxIdentifierType: new FormControl<string | null | undefined>(undefined),
			taxpayerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains information about a buyer request to cancel an order. */
	export interface CancelRequest {

		/** The date and time that the order cancellation was completed, if applicable. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the cancellation request has actually been approved by the seller.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		cancelCompletedDate?: string | null;

		/** This string value indicates the party who made the initial cancellation request. Typically, either the 'Buyer' or 'Seller'. If a cancellation request has been made, this field should be returned. */
		cancelInitiator?: string | null;

		/** The reason why the <b>cancelInitiator</b> initiated the cancellation request. Cancellation reasons for a buyer might include 'order placed by mistake' or 'order won't arrive in time'. For a seller, a typical cancellation reason is 'out of stock'. If a cancellation request has been made, this field should be returned. */
		cancelReason?: string | null;

		/** The unique identifier of the order cancellation request. This field is returned for each cancellation request. */
		cancelRequestId?: string | null;

		/** The current stage or condition of the cancellation request. This field is returned for each cancellation request. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CancelRequestStateEnum'>eBay API documentation</a> */
		cancelRequestState?: string | null;

		/** The date and time that the order cancellation was requested. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is returned for each cancellation request.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		cancelRequestedDate?: string | null;
	}

	/** This type contains information about a buyer request to cancel an order. */
	export interface CancelRequestFormProperties {

		/** The date and time that the order cancellation was completed, if applicable. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the cancellation request has actually been approved by the seller.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		cancelCompletedDate: FormControl<string | null | undefined>,

		/** This string value indicates the party who made the initial cancellation request. Typically, either the 'Buyer' or 'Seller'. If a cancellation request has been made, this field should be returned. */
		cancelInitiator: FormControl<string | null | undefined>,

		/** The reason why the <b>cancelInitiator</b> initiated the cancellation request. Cancellation reasons for a buyer might include 'order placed by mistake' or 'order won't arrive in time'. For a seller, a typical cancellation reason is 'out of stock'. If a cancellation request has been made, this field should be returned. */
		cancelReason: FormControl<string | null | undefined>,

		/** The unique identifier of the order cancellation request. This field is returned for each cancellation request. */
		cancelRequestId: FormControl<string | null | undefined>,

		/** The current stage or condition of the cancellation request. This field is returned for each cancellation request. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CancelRequestStateEnum'>eBay API documentation</a> */
		cancelRequestState: FormControl<string | null | undefined>,

		/** The date and time that the order cancellation was requested. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is returned for each cancellation request.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		cancelRequestedDate: FormControl<string | null | undefined>,
	}
	export function CreateCancelRequestFormGroup() {
		return new FormGroup<CancelRequestFormProperties>({
			cancelCompletedDate: new FormControl<string | null | undefined>(undefined),
			cancelInitiator: new FormControl<string | null | undefined>(undefined),
			cancelReason: new FormControl<string | null | undefined>(undefined),
			cancelRequestId: new FormControl<string | null | undefined>(undefined),
			cancelRequestState: new FormControl<string | null | undefined>(undefined),
			cancelRequestedDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains information about any requests that have been made to cancel an order. */
	export interface CancelStatus {

		/** This array contains details of one or more buyer requests to cancel the order. <br><br><b>For the getOrders call:</b>  This array is returned but is always empty.<br><b>For the getOrder call:</b> This array is returned fully populated with information about any cancellation requests. */
		cancelRequests?: Array<CancelRequest>;

		/** The state of the order with regard to cancellation. This field is always returned, and if there are no cancellation requests, a value of <code>NONE_REQUESTED</code> is returned.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CancelStateEnum'>eBay API documentation</a> */
		cancelState?: string | null;

		/** The date and time the order was cancelled, if applicable. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		cancelledDate?: string | null;
	}

	/** This type contains information about any requests that have been made to cancel an order. */
	export interface CancelStatusFormProperties {

		/** The state of the order with regard to cancellation. This field is always returned, and if there are no cancellation requests, a value of <code>NONE_REQUESTED</code> is returned.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CancelStateEnum'>eBay API documentation</a> */
		cancelState: FormControl<string | null | undefined>,

		/** The date and time the order was cancelled, if applicable. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		cancelledDate: FormControl<string | null | undefined>,
	}
	export function CreateCancelStatusFormGroup() {
		return new FormGroup<CancelStatusFormProperties>({
			cancelState: new FormControl<string | null | undefined>(undefined),
			cancelledDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the request payload of the <strong>contestPaymentDispute</strong> method. */
	export interface ContestPaymentDisputeRequest {

		/** This field shows information that the seller provides about the dispute, such as the basis for the dispute, any relevant evidence, tracking numbers, and so forth.<br><br>This field is limited to 1000 characters. */
		note?: string | null;

		/** This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller. */
		returnAddress?: ReturnAddress;

		/**
		 * This integer value indicates the revision number of the payment dispute. This field is required. The current <strong>revision</strong> number for a payment dispute can be retrieved with the <strong>getPaymentDispute</strong> method. Each time an action is taken against a payment dispute, this integer value increases by 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		revision?: number | null;
	}

	/** This type is used by the request payload of the <strong>contestPaymentDispute</strong> method. */
	export interface ContestPaymentDisputeRequestFormProperties {

		/** This field shows information that the seller provides about the dispute, such as the basis for the dispute, any relevant evidence, tracking numbers, and so forth.<br><br>This field is limited to 1000 characters. */
		note: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the revision number of the payment dispute. This field is required. The current <strong>revision</strong> number for a payment dispute can be retrieved with the <strong>getPaymentDispute</strong> method. Each time an action is taken against a payment dispute, this integer value increases by 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		revision: FormControl<number | null | undefined>,
	}
	export function CreateContestPaymentDisputeRequestFormGroup() {
		return new FormGroup<ContestPaymentDisputeRequestFormProperties>({
			note: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type contains a breakdown of all costs associated with the fulfillment of a line item. */
	export interface DeliveryCost {

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		discountAmount?: Amount;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		handlingCost?: Amount;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		importCharges?: Amount;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		shippingCost?: Amount;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		shippingIntermediationFee?: Amount;
	}

	/** This type contains a breakdown of all costs associated with the fulfillment of a line item. */
	export interface DeliveryCostFormProperties {
	}
	export function CreateDeliveryCostFormGroup() {
		return new FormGroup<DeliveryCostFormProperties>({
		});

	}


	/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
	export interface DisputeAmount {

		/** The three-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " target="_blank">ISO 4217</a> code representing the currency of the amount in the <b> convertedFromValue</b> field. This value is the pre-conversion currency.<br><br>This field is only returned if/when currency conversion was applied by eBay. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		convertedFromCurrency?: string | null;

		/** The monetary amount before any conversion is performed, in the currency specified by the <b> convertedFromCurrency</b> field. This value is the pre-conversion amount. The <b> value</b> field contains the converted amount of this value, in the currency specified by the <b> currency</b> field.<br><br>This field is only returned if/when currency conversion was applied by eBay. */
		convertedFromValue?: string | null;

		/** A three-letter ISO 4217 code that indicates the currency of the amount in the <b>value</b> field. This field is always returned with any container using <b>Amount</b> type. <br><br><b>Default</b>: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		currency?: string | null;

		/** The exchange rate used for the monetary conversion. This field shows the exchange rate used to convert the dollar value in the <b>value</b> field from the dollar value in the <b>convertedFromValue</b> field.<br><br>This field is only returned if/when currency conversion was applied by eBay. */
		exchangeRate?: string | null;

		/** The monetary amount, in the currency specified by the <b>currency</b> field. This field is always returned with any container using <b>Amount</b> type. */
		value?: string | null;
	}

	/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
	export interface DisputeAmountFormProperties {

		/** The three-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " target="_blank">ISO 4217</a> code representing the currency of the amount in the <b> convertedFromValue</b> field. This value is the pre-conversion currency.<br><br>This field is only returned if/when currency conversion was applied by eBay. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		convertedFromCurrency: FormControl<string | null | undefined>,

		/** The monetary amount before any conversion is performed, in the currency specified by the <b> convertedFromCurrency</b> field. This value is the pre-conversion amount. The <b> value</b> field contains the converted amount of this value, in the currency specified by the <b> currency</b> field.<br><br>This field is only returned if/when currency conversion was applied by eBay. */
		convertedFromValue: FormControl<string | null | undefined>,

		/** A three-letter ISO 4217 code that indicates the currency of the amount in the <b>value</b> field. This field is always returned with any container using <b>Amount</b> type. <br><br><b>Default</b>: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		currency: FormControl<string | null | undefined>,

		/** The exchange rate used for the monetary conversion. This field shows the exchange rate used to convert the dollar value in the <b>value</b> field from the dollar value in the <b>convertedFromValue</b> field.<br><br>This field is only returned if/when currency conversion was applied by eBay. */
		exchangeRate: FormControl<string | null | undefined>,

		/** The monetary amount, in the currency specified by the <b>currency</b> field. This field is always returned with any container using <b>Amount</b> type. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDisputeAmountFormGroup() {
		return new FormGroup<DisputeAmountFormProperties>({
			convertedFromCurrency: new FormControl<string | null | undefined>(undefined),
			convertedFromValue: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			exchangeRate: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the <strong>evidence</strong> array that is returned in the <strong>getPaymentDispute</strong> response if one or more evidential documents are associated with the payment dispute.  */
	export interface DisputeEvidence {

		/** Unique identifier of the evidential file set. Potentially, each evidential file set can have more than one file, that is why there is this file set identifier, and then an identifier for each file within this file set. */
		evidenceId?: string | null;

		/** This enumeration value shows the type of evidential file provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a> */
		evidenceType?: string | null;

		/** This array shows the name, ID, file type, and upload date for each provided file. */
		files?: Array<FileInfo>;

		/** This array shows one or more order line items associated with the evidential document that has been provided. */
		lineItems?: Array<OrderLineItems>;

		/** The timestamp in this field shows the date/time when the seller provided a requested evidential document to eBay. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		providedDate?: string | null;

		/** The timestamp in this field shows the date/time when eBay requested the evidential document from the seller in response to a payment dispute. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		requestDate?: string | null;

		/** The timestamp in this field shows the date/time when the seller was expected to provide a requested evidential document to eBay.  <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		respondByDate?: string | null;

		/** This array shows the shipping carrier and shipment tracking number associated with each shipment package of the order. This array is returned under the <strong>evidence</strong> container if the seller has provided shipment tracking information as evidence to support <code>PROOF_OF_DELIVERY</code> for an INR-related payment dispute. */
		shipmentTracking?: Array<TrackingInfo>;
	}

	/** This type is used by the <strong>evidence</strong> array that is returned in the <strong>getPaymentDispute</strong> response if one or more evidential documents are associated with the payment dispute.  */
	export interface DisputeEvidenceFormProperties {

		/** Unique identifier of the evidential file set. Potentially, each evidential file set can have more than one file, that is why there is this file set identifier, and then an identifier for each file within this file set. */
		evidenceId: FormControl<string | null | undefined>,

		/** This enumeration value shows the type of evidential file provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a> */
		evidenceType: FormControl<string | null | undefined>,

		/** The timestamp in this field shows the date/time when the seller provided a requested evidential document to eBay. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		providedDate: FormControl<string | null | undefined>,

		/** The timestamp in this field shows the date/time when eBay requested the evidential document from the seller in response to a payment dispute. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		requestDate: FormControl<string | null | undefined>,

		/** The timestamp in this field shows the date/time when the seller was expected to provide a requested evidential document to eBay.  <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		respondByDate: FormControl<string | null | undefined>,
	}
	export function CreateDisputeEvidenceFormGroup() {
		return new FormGroup<DisputeEvidenceFormProperties>({
			evidenceId: new FormControl<string | null | undefined>(undefined),
			evidenceType: new FormControl<string | null | undefined>(undefined),
			providedDate: new FormControl<string | null | undefined>(undefined),
			requestDate: new FormControl<string | null | undefined>(undefined),
			respondByDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the <strong>files</strong> array, which shows the name, ID, file type, and upload date for each provided evidential file. */
	export interface FileInfo {

		/** The unique identifier of the evidence file. */
		fileId?: string | null;

		/** The type of file uploaded. Supported file extensions are .JPEG, .JPG, and .PNG., and maximum file size allowed is 1.5 MB. */
		fileType?: string | null;

		/** The seller-provided name of the evidence file. */
		name?: string | null;

		/** The timestamp in this field shows the date/time when the seller uploaded the evidential document to eBay. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		uploadedDate?: string | null;
	}

	/** This type is used by the <strong>files</strong> array, which shows the name, ID, file type, and upload date for each provided evidential file. */
	export interface FileInfoFormProperties {

		/** The unique identifier of the evidence file. */
		fileId: FormControl<string | null | undefined>,

		/** The type of file uploaded. Supported file extensions are .JPEG, .JPG, and .PNG., and maximum file size allowed is 1.5 MB. */
		fileType: FormControl<string | null | undefined>,

		/** The seller-provided name of the evidence file. */
		name: FormControl<string | null | undefined>,

		/** The timestamp in this field shows the date/time when the seller uploaded the evidential document to eBay. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		uploadedDate: FormControl<string | null | undefined>,
	}
	export function CreateFileInfoFormGroup() {
		return new FormGroup<FileInfoFormProperties>({
			fileId: new FormControl<string | null | undefined>(undefined),
			fileType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uploadedDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used for seller provided shipment tracking information. */
	export interface TrackingInfo {

		/** This string value represents the shipment tracking number of the package. */
		shipmentTrackingNumber?: string | null;

		/** This string value represents the shipping carrier used to ship the package. */
		shippingCarrierCode?: string | null;
	}

	/** This type is used for seller provided shipment tracking information. */
	export interface TrackingInfoFormProperties {

		/** This string value represents the shipment tracking number of the package. */
		shipmentTrackingNumber: FormControl<string | null | undefined>,

		/** This string value represents the shipping carrier used to ship the package. */
		shippingCarrierCode: FormControl<string | null | undefined>,
	}
	export function CreateTrackingInfoFormGroup() {
		return new FormGroup<TrackingInfoFormProperties>({
			shipmentTrackingNumber: new FormControl<string | null | undefined>(undefined),
			shippingCarrierCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the base response payload of the <strong>getPaymentDisputeSummaries</strong> method. Each payment dispute that matches the input criteria is returned under the <strong>paymentDisputeSummaries</strong> array. */
	export interface DisputeSummaryResponse {

		/** The URI of the <strong>getPaymentDisputeSummaries</strong> call request that produced the current page of the result set. */
		href?: string | null;

		/**
		 * This value shows the maximum number of payment disputes that will appear on one page of the result set. The <strong>limit</strong> value can be passed in as a query parameter in the request, or if it is not used, it defaults to <code>200</code>. If the value in the <strong>total</strong> field exceeds this <strong>limit</strong> value, there are multiple pages in the current result set.<br><br><b>Min</b>: 1; <b>Max</b>: 200; <b>Default</b>: 200
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The <strong>getPaymentDisputeSummaries</strong> call URI to use if you wish to view the next page of the result set. For example, the following URI returns records 11 thru 20 from the collection of payment disputes:<br><br><code>path/payment_dispute_summary?limit=10&offset=10</code><br><br>This field is only returned if there is a next page of results to view based on the current input criteria. */
		next?: string | null;

		/**
		 * This integer value indicates the number of payment disputes skipped before listing the first payment dispute from the result set. The <strong>offset</strong> value can be passed in as a query parameter in the request, or if it is not used, it defaults to <code>0</code> and the first payment dispute of the result set is shown at the top of the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** Each payment dispute that matches the input criteria is returned under this array. If no payment disputes are found, an empty array is returned. */
		paymentDisputeSummaries?: Array<PaymentDisputeSummary>;

		/** The <strong>getPaymentDisputeSummaries</strong> call URI to use if you wish to view the previous page of the result set. For example, the following URI returns records 1 thru 10 from the collection of payment disputes:<br><br><code>path/payment_dispute_summary?limit=10&offset=0</code><br><br>This field is only returned if there is a previous page of results to view based on the current input criteria. */
		prev?: string | null;

		/**
		 * This integer value is the total number of payment disputes that matched the input criteria. If the total number of entries exceeds the value that was set for <strong>limit</strong> in the request payload, you will have to make multiple API calls to see all pages of the results set. This field is returned even if it is <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** This type defines the base response payload of the <strong>getPaymentDisputeSummaries</strong> method. Each payment dispute that matches the input criteria is returned under the <strong>paymentDisputeSummaries</strong> array. */
	export interface DisputeSummaryResponseFormProperties {

		/** The URI of the <strong>getPaymentDisputeSummaries</strong> call request that produced the current page of the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * This value shows the maximum number of payment disputes that will appear on one page of the result set. The <strong>limit</strong> value can be passed in as a query parameter in the request, or if it is not used, it defaults to <code>200</code>. If the value in the <strong>total</strong> field exceeds this <strong>limit</strong> value, there are multiple pages in the current result set.<br><br><b>Min</b>: 1; <b>Max</b>: 200; <b>Default</b>: 200
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The <strong>getPaymentDisputeSummaries</strong> call URI to use if you wish to view the next page of the result set. For example, the following URI returns records 11 thru 20 from the collection of payment disputes:<br><br><code>path/payment_dispute_summary?limit=10&offset=10</code><br><br>This field is only returned if there is a next page of results to view based on the current input criteria. */
		next: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the number of payment disputes skipped before listing the first payment dispute from the result set. The <strong>offset</strong> value can be passed in as a query parameter in the request, or if it is not used, it defaults to <code>0</code> and the first payment dispute of the result set is shown at the top of the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The <strong>getPaymentDisputeSummaries</strong> call URI to use if you wish to view the previous page of the result set. For example, the following URI returns records 1 thru 10 from the collection of payment disputes:<br><br><code>path/payment_dispute_summary?limit=10&offset=0</code><br><br>This field is only returned if there is a previous page of results to view based on the current input criteria. */
		prev: FormControl<string | null | undefined>,

		/**
		 * This integer value is the total number of payment disputes that matched the input criteria. If the total number of entries exceeds the value that was set for <strong>limit</strong> in the request payload, you will have to make multiple API calls to see all pages of the results set. This field is returned even if it is <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateDisputeSummaryResponseFormGroup() {
		return new FormGroup<DisputeSummaryResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type is used by each payment dispute that is returned with the <strong>getPaymentDisputeSummaries</strong> method. */
	export interface PaymentDisputeSummary {

		/** This type defines the monetary value of the payment dispute, and the currency used. */
		amount?: SimpleAmount;

		/** This is the buyer's eBay user ID. This field is returned for all payment disputes returned in the response. */
		buyerUsername?: string | null;

		/** The timestamp in this field shows the date/time when the payment dispute was closed, so this field is only returned for payment disputes in the <code>CLOSED</code> state.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		closedDate?: string | null;

		/** The timestamp in this field shows the date/time when the payment dispute was opened. This field is returned for payment disputes in all states.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		openDate?: string | null;

		/** This is the unique identifier of the order involved in the payment dispute. */
		orderId?: string | null;

		/** This is the unique identifier of the payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. This identifier is passed in at the end of the <strong>getPaymentDispute</strong> call URI to retrieve a specific payment dispute. The <strong>getPaymentDispute</strong> method returns more details about a payment dispute than the <strong>getPaymentDisputeSummaries</strong> method. */
		paymentDisputeId?: string | null;

		/** The enumeration value in this field gives the current status of the payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeStateEnum'>eBay API documentation</a> */
		paymentDisputeStatus?: string | null;

		/** The enumeration value in this field gives the reason why the buyer initiated the payment dispute. See <strong>DisputeReasonEnum</strong> type for a description of the supported reasons that buyers can give for initiating a payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeReasonEnum'>eBay API documentation</a> */
		reason?: string | null;

		/** The timestamp in this field shows the date/time when the seller must response to a payment dispute, so this field is only returned for payment disputes in the <code>ACTION_NEEDED</code> state. For payment disputes that require action by the seller, that same seller must call <strong>getPaymentDispute</strong> to see the next action(s) that they can take against the payment dispute.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		respondByDate?: string | null;
	}

	/** This type is used by each payment dispute that is returned with the <strong>getPaymentDisputeSummaries</strong> method. */
	export interface PaymentDisputeSummaryFormProperties {

		/** This is the buyer's eBay user ID. This field is returned for all payment disputes returned in the response. */
		buyerUsername: FormControl<string | null | undefined>,

		/** The timestamp in this field shows the date/time when the payment dispute was closed, so this field is only returned for payment disputes in the <code>CLOSED</code> state.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		closedDate: FormControl<string | null | undefined>,

		/** The timestamp in this field shows the date/time when the payment dispute was opened. This field is returned for payment disputes in all states.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		openDate: FormControl<string | null | undefined>,

		/** This is the unique identifier of the order involved in the payment dispute. */
		orderId: FormControl<string | null | undefined>,

		/** This is the unique identifier of the payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. This identifier is passed in at the end of the <strong>getPaymentDispute</strong> call URI to retrieve a specific payment dispute. The <strong>getPaymentDispute</strong> method returns more details about a payment dispute than the <strong>getPaymentDisputeSummaries</strong> method. */
		paymentDisputeId: FormControl<string | null | undefined>,

		/** The enumeration value in this field gives the current status of the payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeStateEnum'>eBay API documentation</a> */
		paymentDisputeStatus: FormControl<string | null | undefined>,

		/** The enumeration value in this field gives the reason why the buyer initiated the payment dispute. See <strong>DisputeReasonEnum</strong> type for a description of the supported reasons that buyers can give for initiating a payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeReasonEnum'>eBay API documentation</a> */
		reason: FormControl<string | null | undefined>,

		/** The timestamp in this field shows the date/time when the seller must response to a payment dispute, so this field is only returned for payment disputes in the <code>ACTION_NEEDED</code> state. For payment disputes that require action by the seller, that same seller must call <strong>getPaymentDispute</strong> to see the next action(s) that they can take against the payment dispute.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		respondByDate: FormControl<string | null | undefined>,
	}
	export function CreatePaymentDisputeSummaryFormGroup() {
		return new FormGroup<PaymentDisputeSummaryFormProperties>({
			buyerUsername: new FormControl<string | null | undefined>(undefined),
			closedDate: new FormControl<string | null | undefined>(undefined),
			openDate: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			paymentDisputeId: new FormControl<string | null | undefined>(undefined),
			paymentDisputeStatus: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			respondByDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the monetary value of the payment dispute, and the currency used. */
	export interface SimpleAmount {

		/** A three-letter ISO 4217 code (such as <code>USD</code> for US site) that indicates the currency of the amount in the <strong>value</strong> field. Both the <strong>value</strong> and <strong>currency</strong> fields are always returned with the <strong>amount</strong> container. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		currency?: string | null;

		/** The monetary amount of the payment dispute. Both the <strong>value</strong> and <strong>currency</strong> fields are always returned with the <strong>amount</strong> container. */
		value?: string | null;
	}

	/** This type defines the monetary value of the payment dispute, and the currency used. */
	export interface SimpleAmountFormProperties {

		/** A three-letter ISO 4217 code (such as <code>USD</code> for US site) that indicates the currency of the amount in the <strong>value</strong> field. Both the <strong>value</strong> and <strong>currency</strong> fields are always returned with the <strong>amount</strong> container. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		currency: FormControl<string | null | undefined>,

		/** The monetary amount of the payment dispute. Both the <strong>value</strong> and <strong>currency</strong> fields are always returned with the <strong>amount</strong> container. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSimpleAmountFormGroup() {
		return new FormGroup<SimpleAmountFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains information about the type and amount of tax that eBay will collect and remit to the state, province, country, or other taxing authority in the buyer's location, as required by that taxing authority.<br><br>'Collect and Remit' tax includes:<ul><li>US state-mandated sales tax</li><li>Federal and Provincial Sales Tax in Canada</li><li>'Goods and Services' tax in Canada, Australia, and New Zealand</li><li>VAT collected for the UK and EU countries</li></ul> */
	export interface EbayCollectAndRemitTax {

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		amount?: Amount;

		/** This field indicates the collection method used to collect the 'Collect and Remit' tax for the order. This field is always returned for orders subject to 'Collect and Remit' tax, and its value is always <code>NET</code>.<br><br><span class="tablenote"><strong>Note:</strong> Although the <strong>collectionMethod</strong> field is returned for all orders subject to 'Collect and Remit' tax, the <strong>collectionMethod</strong> field and the <strong>CollectionMethodEnum</strong> type are not currently of any practical use, although this field may have use in the future. If and when the logic of this field is changed, this note will be updated and a note will also be added to the Release Notes.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CollectionMethodEnum'>eBay API documentation</a> */
		collectionMethod?: string | null;

		/** This type describes the VAT tax details. The eBay VAT tax type and the eBay VAT identifier number will be returned if a VAT tax is applicable for the order.<br><br><span class="tablenote"><b>Note:</b>  As of January 31, 2022, <b>addressLine2</b> no longer returns EU VAT tax information.</span> */
		ebayReference?: EbayTaxReference;

		/** The type of tax and fees that eBay will collect and remit to the taxing or fee authority. See the <strong>TaxTypeEnum</strong> type definition for more information about each tax or fee type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxTypeEnum'>eBay API documentation</a> */
		taxType?: string | null;
	}

	/** This type contains information about the type and amount of tax that eBay will collect and remit to the state, province, country, or other taxing authority in the buyer's location, as required by that taxing authority.<br><br>'Collect and Remit' tax includes:<ul><li>US state-mandated sales tax</li><li>Federal and Provincial Sales Tax in Canada</li><li>'Goods and Services' tax in Canada, Australia, and New Zealand</li><li>VAT collected for the UK and EU countries</li></ul> */
	export interface EbayCollectAndRemitTaxFormProperties {

		/** This field indicates the collection method used to collect the 'Collect and Remit' tax for the order. This field is always returned for orders subject to 'Collect and Remit' tax, and its value is always <code>NET</code>.<br><br><span class="tablenote"><strong>Note:</strong> Although the <strong>collectionMethod</strong> field is returned for all orders subject to 'Collect and Remit' tax, the <strong>collectionMethod</strong> field and the <strong>CollectionMethodEnum</strong> type are not currently of any practical use, although this field may have use in the future. If and when the logic of this field is changed, this note will be updated and a note will also be added to the Release Notes.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CollectionMethodEnum'>eBay API documentation</a> */
		collectionMethod: FormControl<string | null | undefined>,

		/** The type of tax and fees that eBay will collect and remit to the taxing or fee authority. See the <strong>TaxTypeEnum</strong> type definition for more information about each tax or fee type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxTypeEnum'>eBay API documentation</a> */
		taxType: FormControl<string | null | undefined>,
	}
	export function CreateEbayCollectAndRemitTaxFormGroup() {
		return new FormGroup<EbayCollectAndRemitTaxFormProperties>({
			collectionMethod: new FormControl<string | null | undefined>(undefined),
			taxType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type describes the VAT tax details. The eBay VAT tax type and the eBay VAT identifier number will be returned if a VAT tax is applicable for the order.<br><br><span class="tablenote"><b>Note:</b>  As of January 31, 2022, <b>addressLine2</b> no longer returns EU VAT tax information.</span> */
	export interface EbayTaxReference {

		/** This field value is returned to indicate the VAT tax type, which will vary by country/region. This string value will be one of the following:<ul><li><code>ABN</code>: if this string is returned, the ID in the <strong>value</strong> field is an Australia tax ID</li><li><code>DDG</code>: if this string is returned, it indicates that tax has been collected and remitted for Digitally Delivered Goods (DDG)</li><li><code>IOSS</code>: if this string is returned, the ID in the <strong>value</strong> field is an eBay EU or UK IOSS number</li><li><code>IRD</code>: if this string is returned, the ID in the <strong>value</strong> field is an eBay New Zealand tax ID</li><li><code>OSS</code>: if this string is returned, the ID in the <strong>value</strong> field is an  eBay Germany VAT ID</li><li><code>VOEC</code>: if this string is returned, the ID in the <strong>value</strong> field is an eBay Norway tax ID</li></ul> */
		name?: string | null;

		/** The value returned in this field is the VAT identifier number (VATIN), which will vary by country/region. This field will be returned if VAT tax is applicable for the order. The <strong>name</strong> field indicates the VAT tax type, which will vary by country/region: <ul><li><strong>ABN</strong>: <em>eBay AU tax ID</em></li><li><strong>IOSS</strong>: <em>eBay EU IOSS number</em> / <em>eBay UK IOSS number</em></li><li><strong>IRD</strong>: <em>eBay NZ tax ID</em></li><li><strong>OSS</strong>: <em>eBay DE VAT ID</em></li><li><strong>VOEC</strong>: <em>eBay NO number</em></li></ul> */
		value?: string | null;
	}

	/** This type describes the VAT tax details. The eBay VAT tax type and the eBay VAT identifier number will be returned if a VAT tax is applicable for the order.<br><br><span class="tablenote"><b>Note:</b>  As of January 31, 2022, <b>addressLine2</b> no longer returns EU VAT tax information.</span> */
	export interface EbayTaxReferenceFormProperties {

		/** This field value is returned to indicate the VAT tax type, which will vary by country/region. This string value will be one of the following:<ul><li><code>ABN</code>: if this string is returned, the ID in the <strong>value</strong> field is an Australia tax ID</li><li><code>DDG</code>: if this string is returned, it indicates that tax has been collected and remitted for Digitally Delivered Goods (DDG)</li><li><code>IOSS</code>: if this string is returned, the ID in the <strong>value</strong> field is an eBay EU or UK IOSS number</li><li><code>IRD</code>: if this string is returned, the ID in the <strong>value</strong> field is an eBay New Zealand tax ID</li><li><code>OSS</code>: if this string is returned, the ID in the <strong>value</strong> field is an  eBay Germany VAT ID</li><li><code>VOEC</code>: if this string is returned, the ID in the <strong>value</strong> field is an eBay Norway tax ID</li></ul> */
		name: FormControl<string | null | undefined>,

		/** The value returned in this field is the VAT identifier number (VATIN), which will vary by country/region. This field will be returned if VAT tax is applicable for the order. The <strong>name</strong> field indicates the VAT tax type, which will vary by country/region: <ul><li><strong>ABN</strong>: <em>eBay AU tax ID</em></li><li><strong>IOSS</strong>: <em>eBay EU IOSS number</em> / <em>eBay UK IOSS number</em></li><li><strong>IRD</strong>: <em>eBay NZ tax ID</em></li><li><strong>OSS</strong>: <em>eBay DE VAT ID</em></li><li><strong>VOEC</strong>: <em>eBay NO number</em></li></ul> */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEbayTaxReferenceFormGroup() {
		return new FormGroup<EbayTaxReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains the breakdown of costs that are collected by eBay from the buyer. */
	export interface EbayCollectedCharges {

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		ebayShipping?: Amount;
	}

	/** This type contains the breakdown of costs that are collected by eBay from the buyer. */
	export interface EbayCollectedChargesFormProperties {
	}
	export function CreateEbayCollectedChargesFormGroup() {
		return new FormGroup<EbayCollectedChargesFormProperties>({
		});

	}


	/** This type is used to provide details about an order line item being fulfilled by eBay or an eBay fulfillment partner. */
	export interface EbayFulfillmentProgram {

		/** The value returned in this field indicates the party that is handling fulfillment of the order line item. <br><br>Valid value: <code>EBAY</code> */
		fulfilledBy?: string | null;
	}

	/** This type is used to provide details about an order line item being fulfilled by eBay or an eBay fulfillment partner. */
	export interface EbayFulfillmentProgramFormProperties {

		/** The value returned in this field indicates the party that is handling fulfillment of the order line item. <br><br>Valid value: <code>EBAY</code> */
		fulfilledBy: FormControl<string | null | undefined>,
	}
	export function CreateEbayFulfillmentProgramFormGroup() {
		return new FormGroup<EbayFulfillmentProgramFormProperties>({
			fulfilledBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used to provide details about an order line item being managed through eBay International Shipping. */
	export interface EbayInternationalShipping {

		/** The value returned in this field indicates the party that is responsible for managing returns of the order line item.<br><br>Valid value: <code>EBAY</code> */
		returnsManagedBy?: string | null;
	}

	/** This type is used to provide details about an order line item being managed through eBay International Shipping. */
	export interface EbayInternationalShippingFormProperties {

		/** The value returned in this field indicates the party that is responsible for managing returns of the order line item.<br><br>Valid value: <code>EBAY</code> */
		returnsManagedBy: FormControl<string | null | undefined>,
	}
	export function CreateEbayInternationalShippingFormGroup() {
		return new FormGroup<EbayInternationalShippingFormProperties>({
			returnsManagedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains information about the management of the shipping for the order. */
	export interface EbayShipping {

		/** This field contains the shipping label provider. If <code>EBAY</code>, this order is managed by eBay shipping and a free shipping label by eBay is downloadable by the seller via the eBay website. */
		shippingLabelProvidedBy?: string | null;
	}

	/** This type contains information about the management of the shipping for the order. */
	export interface EbayShippingFormProperties {

		/** This field contains the shipping label provider. If <code>EBAY</code>, this order is managed by eBay shipping and a free shipping label by eBay is downloadable by the seller via the eBay website. */
		shippingLabelProvidedBy: FormControl<string | null | undefined>,
	}
	export function CreateEbayShippingFormGroup() {
		return new FormGroup<EbayShippingFormProperties>({
			shippingLabelProvidedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EbayVaultProgram {

		/** This field specifies how an eBay vault order will be fulfilled. Supported options are:<ul><li><b>Seller to Vault</b>: the order will be shipped by the seller to an authenticator.</li><li><b>Vault to Vault</b>: the order will be shipped from an eBay vault to the buyer's vault.</li><li><b>Vault to Buyer</b>: the order will be shipped from an eBay vault to the buyer's shipping address.</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:EbayVaultFulfillmentTypeEnum'>eBay API documentation</a> */
		fulfillmentType?: string | null;
	}
	export interface EbayVaultProgramFormProperties {

		/** This field specifies how an eBay vault order will be fulfilled. Supported options are:<ul><li><b>Seller to Vault</b>: the order will be shipped by the seller to an authenticator.</li><li><b>Vault to Vault</b>: the order will be shipped from an eBay vault to the buyer's vault.</li><li><b>Vault to Buyer</b>: the order will be shipped from an eBay vault to the buyer's shipping address.</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:EbayVaultFulfillmentTypeEnum'>eBay API documentation</a> */
		fulfillmentType: FormControl<string | null | undefined>,
	}
	export function CreateEbayVaultProgramFormGroup() {
		return new FormGroup<EbayVaultProgramFormProperties>({
			fulfillmentType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains a error or warning related to a call request.  */
	export interface Error {

		/** The context or source of this error or warning. */
		category?: string | null;

		/** The name of the domain containing the service or application. For example, <code>sell</code> is a domain. */
		domain?: string | null;

		/**
		 * A positive integer that uniquely identifies the specific error condition that occurred. Your application can use these values as error code identifiers in your customized error-handling algorithms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId?: number | null;

		/** A list of one or more specific request elements (if any) associated with the error or warning. The format of these strings depends on the request payload format. For JSON, use JSONPath notation. */
		inputRefIds?: Array<string>;

		/** An expanded version of the <b>message</b> field. <br><br><b>Maximum length:</b> 200 characters */
		longMessage?: string | null;

		/** A message about the error or warning which is device agnostic and readable by end users and application developers. It explains what the error or warning is, and how to fix it (in a general sense). If applicable, the value is localized to the end user's requested locale. <br><br><b>Maximum length:</b> 50 characters */
		message?: string | null;

		/** A list of one or more specific response elements (if any) associated with the error or warning. The format of these strings depends on the request payload format. For JSON, use JSONPath notation. */
		outputRefIds?: Array<string>;

		/** Contains a list of name-value pairs that provide additional information concerning this error or warning. Each item in the list is an input parameter that contributed to the error or warning condition. */
		parameters?: Array<ErrorParameter>;

		/** The name of the domain's subsystem or subdivision. For example, <code>fulfillment</code> is a subdomain in the <code>sell</code> domain. */
		subdomain?: string | null;
	}

	/** This type contains a error or warning related to a call request.  */
	export interface ErrorFormProperties {

		/** The context or source of this error or warning. */
		category: FormControl<string | null | undefined>,

		/** The name of the domain containing the service or application. For example, <code>sell</code> is a domain. */
		domain: FormControl<string | null | undefined>,

		/**
		 * A positive integer that uniquely identifies the specific error condition that occurred. Your application can use these values as error code identifiers in your customized error-handling algorithms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId: FormControl<number | null | undefined>,

		/** An expanded version of the <b>message</b> field. <br><br><b>Maximum length:</b> 200 characters */
		longMessage: FormControl<string | null | undefined>,

		/** A message about the error or warning which is device agnostic and readable by end users and application developers. It explains what the error or warning is, and how to fix it (in a general sense). If applicable, the value is localized to the end user's requested locale. <br><br><b>Maximum length:</b> 50 characters */
		message: FormControl<string | null | undefined>,

		/** The name of the domain's subsystem or subdivision. For example, <code>fulfillment</code> is a subdomain in the <code>sell</code> domain. */
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


	/** This type contains the name and value of an input parameter that contributed to a specific error or warning condition. */
	export interface ErrorParameter {

		/** This is the name of input field that caused an issue with the call request. */
		name?: string | null;

		/** This is the actual value that was passed in for the element specified in the <strong>name</strong> field. */
		value?: string | null;
	}

	/** This type contains the name and value of an input parameter that contributed to a specific error or warning condition. */
	export interface ErrorParameterFormProperties {

		/** This is the name of input field that caused an issue with the call request. */
		name: FormControl<string | null | undefined>,

		/** This is the actual value that was passed in for the element specified in the <strong>name</strong> field. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorParameterFormGroup() {
		return new FormGroup<ErrorParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the <strong>evidenceRequests</strong> array that is returned in the <strong>getPaymentDispute</strong> response if one or more evidential documents are being requested to help resolve the payment dispute. */
	export interface EvidenceRequest {

		/** Unique identifier of the evidential file set. Potentially, each evidential file set can have more than one file, that is why there is this file set identifier, and then an identifier for each file within this file set. */
		evidenceId?: string | null;

		/** This enumeration value shows the type of evidential document provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a> */
		evidenceType?: string | null;

		/** This array shows one or more order line items associated with the evidential document that has been provided. */
		lineItems?: Array<OrderLineItems>;

		/** The timestamp in this field shows the date/time when eBay requested the evidential document from the seller in response to a payment dispute. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		requestDate?: string | null;

		/** The timestamp in this field shows the date/time when the seller is expected to provide a requested evidential document to eBay.  <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		respondByDate?: string | null;
	}

	/** This type is used by the <strong>evidenceRequests</strong> array that is returned in the <strong>getPaymentDispute</strong> response if one or more evidential documents are being requested to help resolve the payment dispute. */
	export interface EvidenceRequestFormProperties {

		/** Unique identifier of the evidential file set. Potentially, each evidential file set can have more than one file, that is why there is this file set identifier, and then an identifier for each file within this file set. */
		evidenceId: FormControl<string | null | undefined>,

		/** This enumeration value shows the type of evidential document provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a> */
		evidenceType: FormControl<string | null | undefined>,

		/** The timestamp in this field shows the date/time when eBay requested the evidential document from the seller in response to a payment dispute. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		requestDate: FormControl<string | null | undefined>,

		/** The timestamp in this field shows the date/time when the seller is expected to provide a requested evidential document to eBay.  <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		respondByDate: FormControl<string | null | undefined>,
	}
	export function CreateEvidenceRequestFormGroup() {
		return new FormGroup<EvidenceRequestFormProperties>({
			evidenceId: new FormControl<string | null | undefined>(undefined),
			evidenceType: new FormControl<string | null | undefined>(undefined),
			requestDate: new FormControl<string | null | undefined>(undefined),
			respondByDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains a set of specifications for processing a fulfillment of an order, including the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order. */
	export interface FulfillmentStartInstruction {

		/** This field is only returned if its value is <code>true</code> and indicates that the fulfillment will be shipped via eBay's Global Shipping Program, eBay International Shipping, or the Authenticity Guarantee service program. <br><br>For more information, see the <a href="https://www.ebay.com/help/selling/shipping-items/setting-shipping-options/global-shipping-program?id=4646 " target="_blank">Global Shipping Program</a> help topic. */
		ebaySupportedFulfillment?: boolean | null;

		/** This type contains the details of a geographical address. */
		finalDestinationAddress?: Address;

		/** The enumeration value returned in this field indicates the method of fulfillment that will be used to deliver this set of line items (this package) to the buyer. This field will have a value of <code>SHIP_TO</code> if the <b>ebaySupportedFulfillment</b> field is returned with a value of <code>true</code>. See the <strong>FulfillmentInstructionsType</strong> definition for more information about different fulfillment types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:FulfillmentInstructionsType'>eBay API documentation</a> */
		fulfillmentInstructionsType?: string | null;

		/** This is the estimated latest date that the fulfillment will be completed. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned ifthe value of the <b>fulfillmentInstructionsType</b> field is <code>DIGITAL</code> or <code>PREPARE_FOR_PICKUP</code>.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		maxEstimatedDeliveryDate?: string | null;

		/** This is the estimated earliest date that the fulfillment will be completed. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned if  the value of the <b>fulfillmentInstructionsType</b> field is <code>DIGITAL</code> or <code>PREPARE_FOR_PICKUP</code>.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		minEstimatedDeliveryDate?: string | null;

		/** This type is used to indicate the merchant's store where the buyer will pickup their In-Store Pickup order. The <b>pickupStep</b> container is only returned for In-Store Pickup orders. The In-Store Pickup feature is supported in the US, Canada, UK, Germany, and Australia marketplaces. */
		pickupStep?: PickupStep;

		/** This type contains shipping information for a fulfillment, including the shipping carrier, the shipping service option, the shipment destination, and the Global Shipping Program reference ID. */
		shippingStep?: ShippingStep;
	}

	/** This type contains a set of specifications for processing a fulfillment of an order, including the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order. */
	export interface FulfillmentStartInstructionFormProperties {

		/** This field is only returned if its value is <code>true</code> and indicates that the fulfillment will be shipped via eBay's Global Shipping Program, eBay International Shipping, or the Authenticity Guarantee service program. <br><br>For more information, see the <a href="https://www.ebay.com/help/selling/shipping-items/setting-shipping-options/global-shipping-program?id=4646 " target="_blank">Global Shipping Program</a> help topic. */
		ebaySupportedFulfillment: FormControl<boolean | null | undefined>,

		/** The enumeration value returned in this field indicates the method of fulfillment that will be used to deliver this set of line items (this package) to the buyer. This field will have a value of <code>SHIP_TO</code> if the <b>ebaySupportedFulfillment</b> field is returned with a value of <code>true</code>. See the <strong>FulfillmentInstructionsType</strong> definition for more information about different fulfillment types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:FulfillmentInstructionsType'>eBay API documentation</a> */
		fulfillmentInstructionsType: FormControl<string | null | undefined>,

		/** This is the estimated latest date that the fulfillment will be completed. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned ifthe value of the <b>fulfillmentInstructionsType</b> field is <code>DIGITAL</code> or <code>PREPARE_FOR_PICKUP</code>.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		maxEstimatedDeliveryDate: FormControl<string | null | undefined>,

		/** This is the estimated earliest date that the fulfillment will be completed. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned if  the value of the <b>fulfillmentInstructionsType</b> field is <code>DIGITAL</code> or <code>PREPARE_FOR_PICKUP</code>.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		minEstimatedDeliveryDate: FormControl<string | null | undefined>,
	}
	export function CreateFulfillmentStartInstructionFormGroup() {
		return new FormGroup<FulfillmentStartInstructionFormProperties>({
			ebaySupportedFulfillment: new FormControl<boolean | null | undefined>(undefined),
			fulfillmentInstructionsType: new FormControl<string | null | undefined>(undefined),
			maxEstimatedDeliveryDate: new FormControl<string | null | undefined>(undefined),
			minEstimatedDeliveryDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used to indicate the merchant's store where the buyer will pickup their In-Store Pickup order. The <b>pickupStep</b> container is only returned for In-Store Pickup orders. The In-Store Pickup feature is supported in the US, Canada, UK, Germany, and Australia marketplaces. */
	export interface PickupStep {

		/** A merchant-defined unique identifier of the merchant's store where the buyer will pick up their In-Store Pickup order.<br><br> This field is always returned with the <b>pickupStep</b> container. */
		merchantLocationKey?: string | null;
	}

	/** This type is used to indicate the merchant's store where the buyer will pickup their In-Store Pickup order. The <b>pickupStep</b> container is only returned for In-Store Pickup orders. The In-Store Pickup feature is supported in the US, Canada, UK, Germany, and Australia marketplaces. */
	export interface PickupStepFormProperties {

		/** A merchant-defined unique identifier of the merchant's store where the buyer will pick up their In-Store Pickup order.<br><br> This field is always returned with the <b>pickupStep</b> container. */
		merchantLocationKey: FormControl<string | null | undefined>,
	}
	export function CreatePickupStepFormGroup() {
		return new FormGroup<PickupStepFormProperties>({
			merchantLocationKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains shipping information for a fulfillment, including the shipping carrier, the shipping service option, the shipment destination, and the Global Shipping Program reference ID. */
	export interface ShippingStep {

		/** This type contains shipping and contact information for a buyer or an eBay shipping partner. */
		shipTo?: ExtendedContact;

		/** This is the unique identifer of the Global Shipping Program (GSP) shipment. This field is only returned if the line item is being shipped via GSP (the value of the <b>fulfillmentStartInstructions.ebaySupportedFulfillment</b> field will be <code>true</code>. The international shipping provider uses the <b>shipToReferenceId</b> value as the primary reference number to retrieve the relevant details about the buyer, the order, and the fulfillment, so the shipment can be completed. <br><br>Sellers must include this value on the shipping label immediately above the street address of the international shipping provider. <br><br>Example: "Reference #1234567890123456" <br><br><span class="tablenote"><strong>Note:</strong> This value is the same as the <b>ShipToAddress.ReferenceID</b> value returned by the Trading API's GetOrders call.</span> */
		shipToReferenceId?: string | null;

		/** The unique identifier of the shipping carrier being used to ship the line item. <br><br><span class="tablenote"><strong>Note:</strong> The Trading API's <a href="https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call can be used to retrieve the latest shipping carrier and shipping service option enumeration values.</span> */
		shippingCarrierCode?: string | null;

		/** The unique identifier of the shipping service option being used to ship the line item.<br><br><span class="tablenote"><strong>Note:</strong> Use the Trading API's <a href="/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call to retrieve the latest shipping carrier and shipping service option enumeration values. When making the <a href="/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call, include the <strong>DetailName</strong> field in the request payload and set its value to <code>ShippingServiceDetails</code>. Each valid shipping service option (returned in <strong>ShippingServiceDetails.ShippingService</strong> field) and corresponding shipping carrier (returned in <strong>ShippingServiceDetails.ShippingCarrier</strong> field) is returned in response payload.</span> */
		shippingServiceCode?: string | null;
	}

	/** This type contains shipping information for a fulfillment, including the shipping carrier, the shipping service option, the shipment destination, and the Global Shipping Program reference ID. */
	export interface ShippingStepFormProperties {

		/** This is the unique identifer of the Global Shipping Program (GSP) shipment. This field is only returned if the line item is being shipped via GSP (the value of the <b>fulfillmentStartInstructions.ebaySupportedFulfillment</b> field will be <code>true</code>. The international shipping provider uses the <b>shipToReferenceId</b> value as the primary reference number to retrieve the relevant details about the buyer, the order, and the fulfillment, so the shipment can be completed. <br><br>Sellers must include this value on the shipping label immediately above the street address of the international shipping provider. <br><br>Example: "Reference #1234567890123456" <br><br><span class="tablenote"><strong>Note:</strong> This value is the same as the <b>ShipToAddress.ReferenceID</b> value returned by the Trading API's GetOrders call.</span> */
		shipToReferenceId: FormControl<string | null | undefined>,

		/** The unique identifier of the shipping carrier being used to ship the line item. <br><br><span class="tablenote"><strong>Note:</strong> The Trading API's <a href="https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call can be used to retrieve the latest shipping carrier and shipping service option enumeration values.</span> */
		shippingCarrierCode: FormControl<string | null | undefined>,

		/** The unique identifier of the shipping service option being used to ship the line item.<br><br><span class="tablenote"><strong>Note:</strong> Use the Trading API's <a href="/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call to retrieve the latest shipping carrier and shipping service option enumeration values. When making the <a href="/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call, include the <strong>DetailName</strong> field in the request payload and set its value to <code>ShippingServiceDetails</code>. Each valid shipping service option (returned in <strong>ShippingServiceDetails.ShippingService</strong> field) and corresponding shipping carrier (returned in <strong>ShippingServiceDetails.ShippingCarrier</strong> field) is returned in response payload.</span> */
		shippingServiceCode: FormControl<string | null | undefined>,
	}
	export function CreateShippingStepFormGroup() {
		return new FormGroup<ShippingStepFormProperties>({
			shipToReferenceId: new FormControl<string | null | undefined>(undefined),
			shippingCarrierCode: new FormControl<string | null | undefined>(undefined),
			shippingServiceCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains information about a digital gift card line item that was purchased as a gift and sent to the recipient by email.<br><br><span class="tablenote"><strong>Note:</strong> <b>GiftDetails</b> will not be returned for any order that is more than 90 days old.</span> */
	export interface GiftDetails {

		/** This field contains the gift message from the buyer to the gift recipient. This field is only returned if the buyer of the gift included a message for the gift.<br><br><span class="tablenote"><strong>Note:</strong> The <b>message</b> will not be returned for any order that is more than 90 days old.</span> */
		message?: string | null;

		/** The email address of the gift recipient. The seller will send the digital gift card to this email address.<br><br><span class="tablenote"><strong>Note:</strong> The <b>recipientEmail</b> will not be returned for any order that is more than 90 days old.</span> */
		recipientEmail?: string | null;

		/** The name of the buyer, which will appear on the email that is sent to the gift recipient.<br><br><span class="tablenote"><strong>Note:</strong> The <b>senderName</b> will not be returned for any order that is more than 90 days old.</span> */
		senderName?: string | null;
	}

	/** This type contains information about a digital gift card line item that was purchased as a gift and sent to the recipient by email.<br><br><span class="tablenote"><strong>Note:</strong> <b>GiftDetails</b> will not be returned for any order that is more than 90 days old.</span> */
	export interface GiftDetailsFormProperties {

		/** This field contains the gift message from the buyer to the gift recipient. This field is only returned if the buyer of the gift included a message for the gift.<br><br><span class="tablenote"><strong>Note:</strong> The <b>message</b> will not be returned for any order that is more than 90 days old.</span> */
		message: FormControl<string | null | undefined>,

		/** The email address of the gift recipient. The seller will send the digital gift card to this email address.<br><br><span class="tablenote"><strong>Note:</strong> The <b>recipientEmail</b> will not be returned for any order that is more than 90 days old.</span> */
		recipientEmail: FormControl<string | null | undefined>,

		/** The name of the buyer, which will appear on the email that is sent to the gift recipient.<br><br><span class="tablenote"><strong>Note:</strong> The <b>senderName</b> will not be returned for any order that is more than 90 days old.</span> */
		senderName: FormControl<string | null | undefined>,
	}
	export function CreateGiftDetailsFormGroup() {
		return new FormGroup<GiftDetailsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			recipientEmail: new FormControl<string | null | undefined>(undefined),
			senderName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return. */
	export interface InfoFromBuyer {

		/** This field shows any note that was left by the buyer in regard to the dispute. */
		note?: string | null;

		/** This array shows shipment tracking information for one or more shipping packages being returned to the buyer after a payment dispute. */
		returnShipmentTracking?: Array<TrackingInfo>;
	}

	/** This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return. */
	export interface InfoFromBuyerFormProperties {

		/** This field shows any note that was left by the buyer in regard to the dispute. */
		note: FormControl<string | null | undefined>,
	}
	export function CreateInfoFromBuyerFormGroup() {
		return new FormGroup<InfoFromBuyerFormProperties>({
			note: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The base type used by the request payload of the <b>issueRefund</b> method. */
	export interface IssueRefundRequest {

		/** This free-text field allows the seller to clarify why the refund is being issued to the buyer.<br><br><b>Max Length</b>: 100 */
		comment?: string | null;

		/** This type defines the monetary value of the payment dispute, and the currency used. */
		orderLevelRefundAmount?: SimpleAmount;

		/** The enumeration value passed into this field indicates the reason for the refund. One of the defined enumeration values in the <b>ReasonForRefundEnum</b> type must be used.<br><br>This field is required, and it is highly recommended that sellers use the correct refund reason, especially in the case of a buyer-requested cancellation or 'buyer remorse' return to indicate that there was nothing wrong with the item(s) or with the shipment of the order.<br><br><span class="tablenote"><strong>Note:</strong> If issuing refunds for more than one order line item, keep in mind that the refund reason must be the same for each of the order line items. If the refund reason is different for one or more order line items in an order, the seller would need to make separate <b>issueRefund</b> calls, one for each refund reason. </span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ReasonForRefundEnum'>eBay API documentation</a> */
		reasonForRefund?: string | null;

		/** The <b>refundItems</b> array is only required if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the <b>orderLevelRefundAmount</b> container to specify the amount of the refund for the entire order. */
		refundItems?: Array<RefundItem>;
	}

	/** The base type used by the request payload of the <b>issueRefund</b> method. */
	export interface IssueRefundRequestFormProperties {

		/** This free-text field allows the seller to clarify why the refund is being issued to the buyer.<br><br><b>Max Length</b>: 100 */
		comment: FormControl<string | null | undefined>,

		/** The enumeration value passed into this field indicates the reason for the refund. One of the defined enumeration values in the <b>ReasonForRefundEnum</b> type must be used.<br><br>This field is required, and it is highly recommended that sellers use the correct refund reason, especially in the case of a buyer-requested cancellation or 'buyer remorse' return to indicate that there was nothing wrong with the item(s) or with the shipment of the order.<br><br><span class="tablenote"><strong>Note:</strong> If issuing refunds for more than one order line item, keep in mind that the refund reason must be the same for each of the order line items. If the refund reason is different for one or more order line items in an order, the seller would need to make separate <b>issueRefund</b> calls, one for each refund reason. </span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ReasonForRefundEnum'>eBay API documentation</a> */
		reasonForRefund: FormControl<string | null | undefined>,
	}
	export function CreateIssueRefundRequestFormGroup() {
		return new FormGroup<IssueRefundRequestFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			reasonForRefund: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the <b>orderLevelRefundAmount</b> container to specify the amount of the refund for the entire order. */
	export interface RefundItem {

		/** Type defining the <b>legacyReference</b> container. This container is needed if the seller is issuing a refund for an individual order line item, and wishes to use an item ID and transaction ID to identify the order line item. */
		legacyReference?: LegacyReference;

		/** The unique identifier of an order line item. This identifier is created once a buyer purchases a 'Buy It Now' item or if an auction listing ends with a winning bidder. Either this field or the <b>legacyReference</b> container is needed to identify an individual order line item that will receive a refund.<br><br><span class="tablenote"><strong>Note:</strong> The <b>lineItemId</b> field is used to identify an order line item in REST API format, and the  <b>legacyReference</b> container is used to identify an order line item in Trading/legacy API format. Both legacy and REST API identifiers are returned in <b>getOrder</b> (Fulfillment API) and <b>GetOrders</b> (Trading API).</span> */
		lineItemId?: string | null;

		/** This type defines the monetary value of the payment dispute, and the currency used. */
		refundAmount?: SimpleAmount;
	}

	/** This type is used if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the <b>orderLevelRefundAmount</b> container to specify the amount of the refund for the entire order. */
	export interface RefundItemFormProperties {

		/** The unique identifier of an order line item. This identifier is created once a buyer purchases a 'Buy It Now' item or if an auction listing ends with a winning bidder. Either this field or the <b>legacyReference</b> container is needed to identify an individual order line item that will receive a refund.<br><br><span class="tablenote"><strong>Note:</strong> The <b>lineItemId</b> field is used to identify an order line item in REST API format, and the  <b>legacyReference</b> container is used to identify an order line item in Trading/legacy API format. Both legacy and REST API identifiers are returned in <b>getOrder</b> (Fulfillment API) and <b>GetOrders</b> (Trading API).</span> */
		lineItemId: FormControl<string | null | undefined>,
	}
	export function CreateRefundItemFormGroup() {
		return new FormGroup<RefundItemFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type defining the <b>legacyReference</b> container. This container is needed if the seller is issuing a refund for an individual order line item, and wishes to use an item ID and transaction ID to identify the order line item. */
	export interface LegacyReference {

		/** The unique identifier of a listing in legacy/Trading API format. <br><br><span class="tablenote"><strong>Note:</strong> Both <b>legacyItemId</b> and <b>legacyTransactionId</b> are needed to identify an order line item. </span> */
		legacyItemId?: string | null;

		/** The unique identifier of a sale/transaction in legacy/Trading API format. A 'transaction ID' is created once a buyer purchases a 'Buy It Now' item or if an auction listing ends with a winning bidder. <br><br><span class="tablenote"><strong>Note:</strong> Both <b>legacyItemId</b> and <b>legacyTransactionId</b> are needed to identify an order line item. </span> */
		legacyTransactionId?: string | null;
	}

	/** Type defining the <b>legacyReference</b> container. This container is needed if the seller is issuing a refund for an individual order line item, and wishes to use an item ID and transaction ID to identify the order line item. */
	export interface LegacyReferenceFormProperties {

		/** The unique identifier of a listing in legacy/Trading API format. <br><br><span class="tablenote"><strong>Note:</strong> Both <b>legacyItemId</b> and <b>legacyTransactionId</b> are needed to identify an order line item. </span> */
		legacyItemId: FormControl<string | null | undefined>,

		/** The unique identifier of a sale/transaction in legacy/Trading API format. A 'transaction ID' is created once a buyer purchases a 'Buy It Now' item or if an auction listing ends with a winning bidder. <br><br><span class="tablenote"><strong>Note:</strong> Both <b>legacyItemId</b> and <b>legacyTransactionId</b> are needed to identify an order line item. </span> */
		legacyTransactionId: FormControl<string | null | undefined>,
	}
	export function CreateLegacyReferenceFormGroup() {
		return new FormGroup<LegacyReferenceFormProperties>({
			legacyItemId: new FormControl<string | null | undefined>(undefined),
			legacyTransactionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type describes the physical location of an order. */
	export interface ItemLocation {

		/** The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code representing the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		countryCode?: string | null;

		/** Indicates the geographical location of the item (along with the value in the <strong>countryCode</strong> field). This field provides city, province, state, or similar information. */
		location?: string | null;

		/** The postal code of the address. */
		postalCode?: string | null;
	}

	/** This type describes the physical location of an order. */
	export interface ItemLocationFormProperties {

		/** The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code representing the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		countryCode: FormControl<string | null | undefined>,

		/** Indicates the geographical location of the item (along with the value in the <strong>countryCode</strong> field). This field provides city, province, state, or similar information. */
		location: FormControl<string | null | undefined>,

		/** The postal code of the address. */
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreateItemLocationFormGroup() {
		return new FormGroup<ItemLocationFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains the details of each line item in an order. */
	export interface LineItem {

		/** This array contains information about one or more sales promotions or discounts applied to the line item. It is always returned, but will be returned as an empty array if no special sales promotions or discounts apply to the order line item. */
		appliedPromotions?: Array<AppliedPromotion>;

		/** This type contains a breakdown of all costs associated with the fulfillment of a line item. */
		deliveryCost?: DeliveryCost;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		discountedLineItemCost?: Amount;

		/** This container will be returned if the order line item is subject to a 'Collect and Remit' tax that eBay will collect and remit to the proper taxing authority on the buyer's behalf.<br><br>'Collect and Remit' tax includes:<ul><li>US state-mandated sales tax</li><li>Federal and Provincial Sales Tax in Canada</li><li>'Goods and Services' tax in Canada, Australia, and New Zealand</li><li>VAT collected for the UK and EU countries</li></ul>The amount of this tax is shown in the <strong>amount</strong> field, and the type of tax is shown in the <strong>taxType</strong> field.<br><br>eBay will display the tax type and amount during checkout in accordance with the buyer's address, and handle collection and remittance of the tax without requiring the seller to take any action. */
		ebayCollectAndRemitTaxes?: Array<EbayCollectAndRemitTax>;

		/** This type contains the breakdown of costs that are collected by eBay from the buyer. */
		ebayCollectedCharges?: EbayCollectedCharges;

		/** This type contains information about a digital gift card line item that was purchased as a gift and sent to the recipient by email.<br><br><span class="tablenote"><strong>Note:</strong> <b>GiftDetails</b> will not be returned for any order that is more than 90 days old.</span> */
		giftDetails?: GiftDetails;

		/** This type describes the physical location of an order. */
		itemLocation?: ItemLocation;

		/** The eBay-generated legacy listing item ID of the listing. Note that the unique identifier of a listing in REST-based APIs is called the <strong>listingId</strong> instead. */
		legacyItemId?: string | null;

		/** The unique identifier of a single variation within a multiple-variation listing. This field is only returned if the line item purchased was from a multiple-variation listing. */
		legacyVariationId?: string | null;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		lineItemCost?: Amount;

		/** This type contains the specifications for processing the fulfillment of a line item, including the handling window and the delivery window. These fields provide guidance for <i>eBay Guaranteed Delivery</i> as well as for non-guaranteed delivery. */
		lineItemFulfillmentInstructions?: LineItemFulfillmentInstructions;

		/** This enumeration value indicates the current fulfillment status of the line item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:LineItemFulfillmentStatusEnum'>eBay API documentation</a> */
		lineItemFulfillmentStatus?: string | null;

		/** This is the unique identifier of an eBay order line item. This field is created as soon as there is a commitment to buy from the seller. */
		lineItemId?: string | null;

		/** An array of one or more line items related to the corresponding order, but not a part of that order. Details include the order ID, line item ID, and title of the linked line item, the seller of that item, item specifics, estimated delivery times, and shipment tracking (if available). */
		linkedOrderLineItems?: Array<LinkedOrderLineItem>;

		/** The unique identifier of the eBay marketplace where the line item was listed. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		listingMarketplaceId?: string | null;

		/** This type contains information about the eBay programs under which a line item was listed and sold. */
		properties?: LineItemProperties;

		/** The unique identifier of the eBay marketplace where the line item was listed. Often, the <strong>listingMarketplaceId</strong> and the <strong>purchaseMarketplaceId</strong> identifier are the same, but there are occasions when an item will surface on multiple eBay marketplaces. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		purchaseMarketplaceId?: string | null;

		/**
		 * The number of units of the line item in the order. These are represented as a group by a single <b>lineItemId</b>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** This array is always returned, but is returned as an empty array unless the seller has submitted a partial or full refund to the buyer for the order. If a refund has occurred, the refund amount and refund date will be shown for each refund. */
		refunds?: Array<LineItemRefund>;

		/** Seller-defined Stock-Keeping Unit (SKU). This inventory identifier must be unique within the seller's eBay inventory. SKUs are optional when listing in the legacy/Trading API system, but SKUs are required when listing items through the Inventory API model. */
		sku?: string | null;

		/** The eBay listing type of the line item. The most common listing types are <code>AUCTION</code> and <code>FIXED_PRICE</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:SoldFormatEnum'>eBay API documentation</a> */
		soldFormat?: string | null;

		/** Contains a list of taxes applied to the line item, if any. This array is always returned, but will be returned as empty if no taxes are applicable to the line item. */
		taxes?: Array<Tax>;

		/** The title of the listing. */
		title?: string | null;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		total?: Amount;

		/** An array of aspect name-value pairs that identifies the specific variation of a multi-variation listing. This array can contain multiple name-value pairs, such as <code>color:blue</code> and <code>size:large</code>, and will only be returned for orders created from a multiple-variation listing. */
		variationAspects?: Array<NameValuePair>;
	}

	/** This type contains the details of each line item in an order. */
	export interface LineItemFormProperties {

		/** The eBay-generated legacy listing item ID of the listing. Note that the unique identifier of a listing in REST-based APIs is called the <strong>listingId</strong> instead. */
		legacyItemId: FormControl<string | null | undefined>,

		/** The unique identifier of a single variation within a multiple-variation listing. This field is only returned if the line item purchased was from a multiple-variation listing. */
		legacyVariationId: FormControl<string | null | undefined>,

		/** This enumeration value indicates the current fulfillment status of the line item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:LineItemFulfillmentStatusEnum'>eBay API documentation</a> */
		lineItemFulfillmentStatus: FormControl<string | null | undefined>,

		/** This is the unique identifier of an eBay order line item. This field is created as soon as there is a commitment to buy from the seller. */
		lineItemId: FormControl<string | null | undefined>,

		/** The unique identifier of the eBay marketplace where the line item was listed. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		listingMarketplaceId: FormControl<string | null | undefined>,

		/** The unique identifier of the eBay marketplace where the line item was listed. Often, the <strong>listingMarketplaceId</strong> and the <strong>purchaseMarketplaceId</strong> identifier are the same, but there are occasions when an item will surface on multiple eBay marketplaces. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		purchaseMarketplaceId: FormControl<string | null | undefined>,

		/**
		 * The number of units of the line item in the order. These are represented as a group by a single <b>lineItemId</b>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Seller-defined Stock-Keeping Unit (SKU). This inventory identifier must be unique within the seller's eBay inventory. SKUs are optional when listing in the legacy/Trading API system, but SKUs are required when listing items through the Inventory API model. */
		sku: FormControl<string | null | undefined>,

		/** The eBay listing type of the line item. The most common listing types are <code>AUCTION</code> and <code>FIXED_PRICE</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:SoldFormatEnum'>eBay API documentation</a> */
		soldFormat: FormControl<string | null | undefined>,

		/** The title of the listing. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateLineItemFormGroup() {
		return new FormGroup<LineItemFormProperties>({
			legacyItemId: new FormControl<string | null | undefined>(undefined),
			legacyVariationId: new FormControl<string | null | undefined>(undefined),
			lineItemFulfillmentStatus: new FormControl<string | null | undefined>(undefined),
			lineItemId: new FormControl<string | null | undefined>(undefined),
			listingMarketplaceId: new FormControl<string | null | undefined>(undefined),
			purchaseMarketplaceId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			soldFormat: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains the specifications for processing the fulfillment of a line item, including the handling window and the delivery window. These fields provide guidance for <i>eBay Guaranteed Delivery</i> as well as for non-guaranteed delivery. */
	export interface LineItemFulfillmentInstructions {

		/** This field is returned as <code>true</code> if the order line item is qualified for eBay Guaranteed Delivery, or <code>false</code> if it is not eligible. Only domestic shipments are available for eBay Guaranteed Delivery. At this time, eBay Guaranteed Delivery is only available to a select number of sellers on the US and Australia sites, but this feature will be enabled on more eBay sites in 2019.<br><br>  There are two different eBay Guaranteed Delivery options - 'Handling time' option and 'Door-to-Door' option. With both options, the seller is commiting to getting the order delivered to the buyer within three business days after purchase. <br><br> With the 'Handling time' option, the seller's stated handling time for a listing must be 'same-day' or '1-day', and at least one of the available shipping service options should have a shipping time that guarantees that the buyer receives the order on time. With this option, eBay will set the 'ship-by date' and expected delivery window for the seller, and the seller should just make sure they physically ship the order by the <strong>shipToDate</strong>.<br><br> With the 'Door-to-door' option, the seller must create regional shipping rate tables (with shipping costs and delivery times based on destination regions), and then apply these regional shipping rates/delivery times to the listing. <br><br> If a 'Door-to-door' order does not arrive on time, the seller must refund the buyer the full shipping cost (if any), and the buyer also has the option of returning the item for a full refund, and the seller will also have to pay the return shipping cost. With 'Handling time' option, as long as the seller meets the stated handling time, and ships using the correct shipping service option, eBay will refund the buyer the shipping cost and pay for return shipping label (if buyer wants to return item) if the order arrives after the expected delivery time. <br><br> For more information on the details and requirements of eBay Guaranteed Delivery, see the <a href="https://www.ebay.com/help/selling/shipping-items/offering-ebay-guaranteed-delivery?id=4645 " target="_blank">Offering eBay Guaranteed Delivery</a> help topic.<br><br> This field will always be returned regardless of whether the listing site offers eBay Guaranteed Delivery or if the seller is opted in to the feature. */
		guaranteedDelivery?: boolean | null;

		/** The estimated latest date and time that the buyer can expect to receive the line item based on the seller's stated handling time and the transit times of the available shipping service options. If the listing is eligible for eBay Guaranteed Delivery (value of <b>guaranteedDelivery</b> field is <code>true</code>, the seller must pay extra attention to this date, as a failure to deliver by this date/time can result in a 'Late shipment' seller defect, and can affect seller level and Top-Rated Seller status. In addition to the seller defect, buyers will be eligible for a shipping cost refund, and will also be eligible to return the item for a full refund (with no return shipping charge) if they choose. <br><br><span class="tablenote"><strong>Note:</strong> This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code></span> */
		maxEstimatedDeliveryDate?: string | null;

		/** The estimated earliest date and time that the buyer can expect to receive the line item based on the seller's stated handling time and the transit times of the available shipping service options.<br><br><span class="tablenote"><strong>Note:</strong> This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code></span> */
		minEstimatedDeliveryDate?: string | null;

		/** The latest date and time by which the seller should ship line item in order to meet the expected delivery window. This timestamp will be set by eBay based on time of purchase and the seller's stated handling time. If the listing is eligible for eBay Guaranteed Delivery (value of <b>guaranteedDelivery</b> field is <code>true</code>, the seller must pay extra attention to this date, as a failure to physically ship the line item by this date/time can result in a 'Late shipment' seller defect, and can affect seller level and Top-Rated Seller status. In addition to the seller defect, buyers will be eligible for a shipping cost refund, and will also be eligible to return the item for a full refund (with no return shipping charge) if they choose. <br><br><span class="tablenote"><strong>Note:</strong> This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code></span> */
		shipByDate?: string | null;
	}

	/** This type contains the specifications for processing the fulfillment of a line item, including the handling window and the delivery window. These fields provide guidance for <i>eBay Guaranteed Delivery</i> as well as for non-guaranteed delivery. */
	export interface LineItemFulfillmentInstructionsFormProperties {

		/** This field is returned as <code>true</code> if the order line item is qualified for eBay Guaranteed Delivery, or <code>false</code> if it is not eligible. Only domestic shipments are available for eBay Guaranteed Delivery. At this time, eBay Guaranteed Delivery is only available to a select number of sellers on the US and Australia sites, but this feature will be enabled on more eBay sites in 2019.<br><br>  There are two different eBay Guaranteed Delivery options - 'Handling time' option and 'Door-to-Door' option. With both options, the seller is commiting to getting the order delivered to the buyer within three business days after purchase. <br><br> With the 'Handling time' option, the seller's stated handling time for a listing must be 'same-day' or '1-day', and at least one of the available shipping service options should have a shipping time that guarantees that the buyer receives the order on time. With this option, eBay will set the 'ship-by date' and expected delivery window for the seller, and the seller should just make sure they physically ship the order by the <strong>shipToDate</strong>.<br><br> With the 'Door-to-door' option, the seller must create regional shipping rate tables (with shipping costs and delivery times based on destination regions), and then apply these regional shipping rates/delivery times to the listing. <br><br> If a 'Door-to-door' order does not arrive on time, the seller must refund the buyer the full shipping cost (if any), and the buyer also has the option of returning the item for a full refund, and the seller will also have to pay the return shipping cost. With 'Handling time' option, as long as the seller meets the stated handling time, and ships using the correct shipping service option, eBay will refund the buyer the shipping cost and pay for return shipping label (if buyer wants to return item) if the order arrives after the expected delivery time. <br><br> For more information on the details and requirements of eBay Guaranteed Delivery, see the <a href="https://www.ebay.com/help/selling/shipping-items/offering-ebay-guaranteed-delivery?id=4645 " target="_blank">Offering eBay Guaranteed Delivery</a> help topic.<br><br> This field will always be returned regardless of whether the listing site offers eBay Guaranteed Delivery or if the seller is opted in to the feature. */
		guaranteedDelivery: FormControl<boolean | null | undefined>,

		/** The estimated latest date and time that the buyer can expect to receive the line item based on the seller's stated handling time and the transit times of the available shipping service options. If the listing is eligible for eBay Guaranteed Delivery (value of <b>guaranteedDelivery</b> field is <code>true</code>, the seller must pay extra attention to this date, as a failure to deliver by this date/time can result in a 'Late shipment' seller defect, and can affect seller level and Top-Rated Seller status. In addition to the seller defect, buyers will be eligible for a shipping cost refund, and will also be eligible to return the item for a full refund (with no return shipping charge) if they choose. <br><br><span class="tablenote"><strong>Note:</strong> This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code></span> */
		maxEstimatedDeliveryDate: FormControl<string | null | undefined>,

		/** The estimated earliest date and time that the buyer can expect to receive the line item based on the seller's stated handling time and the transit times of the available shipping service options.<br><br><span class="tablenote"><strong>Note:</strong> This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code></span> */
		minEstimatedDeliveryDate: FormControl<string | null | undefined>,

		/** The latest date and time by which the seller should ship line item in order to meet the expected delivery window. This timestamp will be set by eBay based on time of purchase and the seller's stated handling time. If the listing is eligible for eBay Guaranteed Delivery (value of <b>guaranteedDelivery</b> field is <code>true</code>, the seller must pay extra attention to this date, as a failure to physically ship the line item by this date/time can result in a 'Late shipment' seller defect, and can affect seller level and Top-Rated Seller status. In addition to the seller defect, buyers will be eligible for a shipping cost refund, and will also be eligible to return the item for a full refund (with no return shipping charge) if they choose. <br><br><span class="tablenote"><strong>Note:</strong> This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code></span> */
		shipByDate: FormControl<string | null | undefined>,
	}
	export function CreateLineItemFulfillmentInstructionsFormGroup() {
		return new FormGroup<LineItemFulfillmentInstructionsFormProperties>({
			guaranteedDelivery: new FormControl<boolean | null | undefined>(undefined),
			maxEstimatedDeliveryDate: new FormControl<string | null | undefined>(undefined),
			minEstimatedDeliveryDate: new FormControl<string | null | undefined>(undefined),
			shipByDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains data on a line item that is related to, but not a part of the order. */
	export interface LinkedOrderLineItem {

		/** This array contains the complete set of items aspects for the linked line item. For example:<br><pre>"lineItemAspects": [<br>    {<br>        "name": "Tire Type",<br>        "value": "All Season"<br>    },<br><br>    ...<br> <br>    {<br>        "name": "Car Type",<br>        "value": "Performance"<br>    }<br>]</pre><span class="tablenote"><strong>Note:</strong> All item specifics for the listing are returned. The name/value pairs returned are in the language of the linked line item's listing site, which may vary from the seller's language.</span> */
		lineItemAspects?: Array<NameValuePair>;

		/** The unique identifier of the linked order line item. */
		lineItemId?: string | null;

		/** The end of the date range in which the linked line item is expected to be delivered to the shipping address. */
		maxEstimatedDeliveryDate?: string | null;

		/** The beginning of the date range in which the linked line item is expected to be delivered to the shipping address. */
		minEstimatedDeliveryDate?: string | null;

		/** The unique identifier of the order to which the linked line item belongs. */
		orderId?: string | null;

		/** The eBay user ID of the seller who sold the linked line item. For example, the user ID of the tire seller. */
		sellerId?: string | null;

		/** An array containing any shipment tracking information available for the linked line item. */
		shipments?: Array<TrackingInfo>;

		/** The listing title of the linked line item. */
		title?: string | null;
	}

	/** This type contains data on a line item that is related to, but not a part of the order. */
	export interface LinkedOrderLineItemFormProperties {

		/** The unique identifier of the linked order line item. */
		lineItemId: FormControl<string | null | undefined>,

		/** The end of the date range in which the linked line item is expected to be delivered to the shipping address. */
		maxEstimatedDeliveryDate: FormControl<string | null | undefined>,

		/** The beginning of the date range in which the linked line item is expected to be delivered to the shipping address. */
		minEstimatedDeliveryDate: FormControl<string | null | undefined>,

		/** The unique identifier of the order to which the linked line item belongs. */
		orderId: FormControl<string | null | undefined>,

		/** The eBay user ID of the seller who sold the linked line item. For example, the user ID of the tire seller. */
		sellerId: FormControl<string | null | undefined>,

		/** The listing title of the linked line item. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateLinkedOrderLineItemFormGroup() {
		return new FormGroup<LinkedOrderLineItemFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			maxEstimatedDeliveryDate: new FormControl<string | null | undefined>(undefined),
			minEstimatedDeliveryDate: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			sellerId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains the name-value specifics of a multi-variation listing (<b>variationAspects</b>) or the name-value specifics for all item aspects of a linked line item (<b>linkedOrderLineItems</b>). */
	export interface NameValuePair {

		/** The text representing the name of the aspect for the name-value pair. For example, <code>color</code>, or <code>Tire Type</code>. */
		name?: string | null;

		/** The value of the aspect for the name-value pair. For example, <code>red</code>, or <code>All Season</code>. */
		value?: string | null;
	}

	/** This type contains the name-value specifics of a multi-variation listing (<b>variationAspects</b>) or the name-value specifics for all item aspects of a linked line item (<b>linkedOrderLineItems</b>). */
	export interface NameValuePairFormProperties {

		/** The text representing the name of the aspect for the name-value pair. For example, <code>color</code>, or <code>Tire Type</code>. */
		name: FormControl<string | null | undefined>,

		/** The value of the aspect for the name-value pair. For example, <code>red</code>, or <code>All Season</code>. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateNameValuePairFormGroup() {
		return new FormGroup<NameValuePairFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains information about the eBay programs under which a line item was listed and sold. */
	export interface LineItemProperties {

		/** A value of <code>true</code> indicates that the line item is covered by eBay's Buyer Protection program. */
		buyerProtection?: boolean | null;

		/** This field is only returned if <code>true</code> and indicates that the purchase occurred by the buyer and seller mutually agreeing on a Best Offer amount. The Best Offer feature can be set up for any listing type, but if this feature is set up for an auction listing, it will no longer be available once a bid has been placed on the listing. */
		fromBestOffer?: boolean | null;

		/** This field is only returned if <code>true</code> and indicates that the line item was sold as a result of a seller's ad campaign. */
		soldViaAdCampaign?: boolean | null;
	}

	/** This type contains information about the eBay programs under which a line item was listed and sold. */
	export interface LineItemPropertiesFormProperties {

		/** A value of <code>true</code> indicates that the line item is covered by eBay's Buyer Protection program. */
		buyerProtection: FormControl<boolean | null | undefined>,

		/** This field is only returned if <code>true</code> and indicates that the purchase occurred by the buyer and seller mutually agreeing on a Best Offer amount. The Best Offer feature can be set up for any listing type, but if this feature is set up for an auction listing, it will no longer be available once a bid has been placed on the listing. */
		fromBestOffer: FormControl<boolean | null | undefined>,

		/** This field is only returned if <code>true</code> and indicates that the line item was sold as a result of a seller's ad campaign. */
		soldViaAdCampaign: FormControl<boolean | null | undefined>,
	}
	export function CreateLineItemPropertiesFormGroup() {
		return new FormGroup<LineItemPropertiesFormProperties>({
			buyerProtection: new FormControl<boolean | null | undefined>(undefined),
			fromBestOffer: new FormControl<boolean | null | undefined>(undefined),
			soldViaAdCampaign: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This type contains refund information for a line item. */
	export interface LineItemRefund {

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		amount?: Amount;

		/** The date and time that the refund was issued for the line item. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the refund has been issued. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		refundDate?: string | null;

		/** Unique identifier of a refund that was initiated for an order's line item through the <b>issueRefund</b> method. If the <b>issueRefund</b> method was used to issue a refund at the order level, this identifier is returned at the order level instead (<b>paymentSummary.refunds.refundId</b> field).<br><br> A <b>refundId</b> value is returned in the response of the <b>issueRefund</b> method, and this same value will be returned in the <b>getOrder</b> and <b>getOrders</b> responses for pending and completed refunds. */
		refundId?: string | null;

		/** This field is reserved for internal or future use. */
		refundReferenceId?: string | null;
	}

	/** This type contains refund information for a line item. */
	export interface LineItemRefundFormProperties {

		/** The date and time that the refund was issued for the line item. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the refund has been issued. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		refundDate: FormControl<string | null | undefined>,

		/** Unique identifier of a refund that was initiated for an order's line item through the <b>issueRefund</b> method. If the <b>issueRefund</b> method was used to issue a refund at the order level, this identifier is returned at the order level instead (<b>paymentSummary.refunds.refundId</b> field).<br><br> A <b>refundId</b> value is returned in the response of the <b>issueRefund</b> method, and this same value will be returned in the <b>getOrder</b> and <b>getOrders</b> responses for pending and completed refunds. */
		refundId: FormControl<string | null | undefined>,

		/** This field is reserved for internal or future use. */
		refundReferenceId: FormControl<string | null | undefined>,
	}
	export function CreateLineItemRefundFormGroup() {
		return new FormGroup<LineItemRefundFormProperties>({
			refundDate: new FormControl<string | null | undefined>(undefined),
			refundId: new FormControl<string | null | undefined>(undefined),
			refundReferenceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains information about any sales tax applied to a line item. */
	export interface Tax {

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		amount?: Amount;

		/** Tax type. This field is only available when <strong>fieldGroups</strong> is set to <code>TAX_BREAKDOWN</code>. If the order has fees, a breakdown of the fees is also provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxTypeEnum'>eBay API documentation</a> */
		taxType?: string | null;
	}

	/** This type contains information about any sales tax applied to a line item. */
	export interface TaxFormProperties {

		/** Tax type. This field is only available when <strong>fieldGroups</strong> is set to <code>TAX_BREAKDOWN</code>. If the order has fees, a breakdown of the fees is also provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxTypeEnum'>eBay API documentation</a> */
		taxType: FormControl<string | null | undefined>,
	}
	export function CreateTaxFormGroup() {
		return new FormGroup<TaxFormProperties>({
			taxType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type identifies the line item and quantity of that line item that comprises one fulfillment, such as a shipping package. */
	export interface LineItemReference {

		/** This is the unique identifier of the eBay order line item that is part of the shipping fulfillment. The line item ID is created as soon as there is a commitment to buy from the seller. */
		lineItemId?: string | null;

		/**
		 * This is the number of lineItems associated with the <a href="#request.trackingNumber">trackingNumber</a> specified by the seller. This must be a whole number greater than zero (0).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;
	}

	/** This type identifies the line item and quantity of that line item that comprises one fulfillment, such as a shipping package. */
	export interface LineItemReferenceFormProperties {

		/** This is the unique identifier of the eBay order line item that is part of the shipping fulfillment. The line item ID is created as soon as there is a commitment to buy from the seller. */
		lineItemId: FormControl<string | null | undefined>,

		/**
		 * This is the number of lineItems associated with the <a href="#request.trackingNumber">trackingNumber</a> specified by the seller. This must be a whole number greater than zero (0).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateLineItemReferenceFormGroup() {
		return new FormGroup<LineItemReferenceFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type is used to provide details about one or more monetary transactions that occur as part of a payment dispute. */
	export interface MonetaryTransaction {

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		amount?: DisputeAmount;

		/** This timestamp indicates when the monetary transaction occurred. A date is returned for all monetary transactions.<br><br> The following format is used: <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. For example, <code>2015-08-04T19:09:02.768Z</code>. */
		date?: string | null;

		/** This enumeration value indicates the reason for the monetary transaction. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:MonetaryTransactionReasonEnum'>eBay API documentation</a> */
		reason?: string | null;

		/** This enumeration value indicates whether the monetary transaction is a charge or a credit to the seller. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:MonetaryTransactionTypeEnum'>eBay API documentation</a> */
		type?: string | null;
	}

	/** This type is used to provide details about one or more monetary transactions that occur as part of a payment dispute. */
	export interface MonetaryTransactionFormProperties {

		/** This timestamp indicates when the monetary transaction occurred. A date is returned for all monetary transactions.<br><br> The following format is used: <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. For example, <code>2015-08-04T19:09:02.768Z</code>. */
		date: FormControl<string | null | undefined>,

		/** This enumeration value indicates the reason for the monetary transaction. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:MonetaryTransactionReasonEnum'>eBay API documentation</a> */
		reason: FormControl<string | null | undefined>,

		/** This enumeration value indicates whether the monetary transaction is a charge or a credit to the seller. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:MonetaryTransactionTypeEnum'>eBay API documentation</a> */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMonetaryTransactionFormGroup() {
		return new FormGroup<MonetaryTransactionFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status. */
	export interface Order {

		/** This type contains information about the order's buyer. */
		buyer?: Buyer;

		/** This field contains any comments that the buyer left for the seller about the order during checkout process. This field is only returned if a buyer left comments at checkout time. */
		buyerCheckoutNotes?: string | null;

		/** This type contains information about any requests that have been made to cancel an order. */
		cancelStatus?: CancelStatus;

		/** The date and time that the order was created. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		creationDate?: string | null;

		/** This field is only returned if <code>true</code>, and indicates that eBay will collect tax (US state-mandated sales tax, Federal and Provincial Sales Tax in Canada, 'Goods and Services' tax in Canada, Australia, and New Zealand, and VAT collected for UK and EU countries,) for at least one line item in the order, and remit the tax to the taxing authority of the buyer's residence. If this field is returned, the seller should search for one or more <strong>ebayCollectAndRemitTaxes</strong> containers at the line item level to get more information about the type of tax and the amount. */
		ebayCollectAndRemitTax?: boolean | null;

		/** This array contains a list of one or more <strong>getShippingFulfillment</strong> call URIs that can be used to retrieve shipping fulfillments that have been set up for the order. */
		fulfillmentHrefs?: Array<string>;

		/** This container consists of a set of specifications for fulfilling the order, including the type of fulfillment, shipping carrier and service, shipping address, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.<br><br><span class="tablenote"><strong>Note:</strong> Although this container is presented as an array, it currently returns only one set of fulfillment specifications. Additional array members will be supported in future functionality.</span> */
		fulfillmentStartInstructions?: Array<FulfillmentStartInstruction>;

		/** The date and time that the order was last modified. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		lastModifiedDate?: string | null;

		/** The unique identifier of the order in legacy format, as traditionally used by the Trading API (and other legacy APIs). Both the <b>orderId</b> field and this field are always returned. */
		legacyOrderId?: string | null;

		/** This array contains the details for all line items that comprise the order. */
		lineItems?: Array<LineItem>;

		/** The degree to which fulfillment of the order is complete. See the <strong>OrderFulfillmentStatus</strong> type definition for more information about each possible fulfillment state. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:OrderFulfillmentStatus'>eBay API documentation</a> */
		orderFulfillmentStatus?: string | null;

		/** The unique identifier of the order. Both the <b>legacyOrderId</b> field (traditionally used by Trading and other legacy APIS) and this field are always returned. */
		orderId?: string | null;

		/** The enumeration value returned in this field indicates the current payment status of an order, or in case of a refund request, the current status of the refund. See the <strong>OrderPaymentStatusEnum</strong> type definition for more information about each possible payment/refund state. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:OrderPaymentStatusEnum'>eBay API documentation</a> */
		orderPaymentStatus?: string | null;

		/** This type contains information about the various monetary exchanges that apply to the net balance due for the order. */
		paymentSummary?: PaymentSummary;

		/** This type contains a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts. */
		pricingSummary?: PricingSummary;

		/** This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program or eBay shipping. */
		program?: Program;

		/** An eBay-generated identifier that is used to identify and manage orders through the Selling Manager and Selling Manager Pro tools. This order identifier can also be found on the Orders grid page and in the Sales Record pages in Seller Hub. A <strong>salesRecordReference</strong> number is only generated and returned at the order level, and not at the order line item level.<br><br> In cases where the seller does not have a Selling Manager or Selling Manager Pro subscription nor access to Seller Hub, this field may not be returned. */
		salesRecordReference?: string | null;

		/** The unique eBay user ID of the seller who sold the order. */
		sellerId?: string | null;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		totalFeeBasisAmount?: Amount;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		totalMarketplaceFee?: Amount;
	}

	/** This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status. */
	export interface OrderFormProperties {

		/** This field contains any comments that the buyer left for the seller about the order during checkout process. This field is only returned if a buyer left comments at checkout time. */
		buyerCheckoutNotes: FormControl<string | null | undefined>,

		/** The date and time that the order was created. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		creationDate: FormControl<string | null | undefined>,

		/** This field is only returned if <code>true</code>, and indicates that eBay will collect tax (US state-mandated sales tax, Federal and Provincial Sales Tax in Canada, 'Goods and Services' tax in Canada, Australia, and New Zealand, and VAT collected for UK and EU countries,) for at least one line item in the order, and remit the tax to the taxing authority of the buyer's residence. If this field is returned, the seller should search for one or more <strong>ebayCollectAndRemitTaxes</strong> containers at the line item level to get more information about the type of tax and the amount. */
		ebayCollectAndRemitTax: FormControl<boolean | null | undefined>,

		/** The date and time that the order was last modified. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		lastModifiedDate: FormControl<string | null | undefined>,

		/** The unique identifier of the order in legacy format, as traditionally used by the Trading API (and other legacy APIs). Both the <b>orderId</b> field and this field are always returned. */
		legacyOrderId: FormControl<string | null | undefined>,

		/** The degree to which fulfillment of the order is complete. See the <strong>OrderFulfillmentStatus</strong> type definition for more information about each possible fulfillment state. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:OrderFulfillmentStatus'>eBay API documentation</a> */
		orderFulfillmentStatus: FormControl<string | null | undefined>,

		/** The unique identifier of the order. Both the <b>legacyOrderId</b> field (traditionally used by Trading and other legacy APIS) and this field are always returned. */
		orderId: FormControl<string | null | undefined>,

		/** The enumeration value returned in this field indicates the current payment status of an order, or in case of a refund request, the current status of the refund. See the <strong>OrderPaymentStatusEnum</strong> type definition for more information about each possible payment/refund state. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:OrderPaymentStatusEnum'>eBay API documentation</a> */
		orderPaymentStatus: FormControl<string | null | undefined>,

		/** An eBay-generated identifier that is used to identify and manage orders through the Selling Manager and Selling Manager Pro tools. This order identifier can also be found on the Orders grid page and in the Sales Record pages in Seller Hub. A <strong>salesRecordReference</strong> number is only generated and returned at the order level, and not at the order line item level.<br><br> In cases where the seller does not have a Selling Manager or Selling Manager Pro subscription nor access to Seller Hub, this field may not be returned. */
		salesRecordReference: FormControl<string | null | undefined>,

		/** The unique eBay user ID of the seller who sold the order. */
		sellerId: FormControl<string | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			buyerCheckoutNotes: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			ebayCollectAndRemitTax: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedDate: new FormControl<string | null | undefined>(undefined),
			legacyOrderId: new FormControl<string | null | undefined>(undefined),
			orderFulfillmentStatus: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			orderPaymentStatus: new FormControl<string | null | undefined>(undefined),
			salesRecordReference: new FormControl<string | null | undefined>(undefined),
			sellerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains information about the various monetary exchanges that apply to the net balance due for the order. */
	export interface PaymentSummary {

		/** This array consists of payment information for the order, including payment status, payment method, payment amount, and payment date. This array is always returned, although some of the fields under this container will not be returned until payment has been made. */
		payments?: Array<Payment>;

		/** This array is always returned, but is returned as an empty array unless the seller has submitted a partial or full refund to the buyer for the order. If a refund has occurred, the refund amount and refund date will be shown for each refund. */
		refunds?: Array<OrderRefund>;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		totalDueSeller?: Amount;
	}

	/** This type contains information about the various monetary exchanges that apply to the net balance due for the order. */
	export interface PaymentSummaryFormProperties {
	}
	export function CreatePaymentSummaryFormGroup() {
		return new FormGroup<PaymentSummaryFormProperties>({
		});

	}


	/** This type is used to provide details about the seller payments for an order. */
	export interface Payment {

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		amount?: Amount;

		/** The date and time that the payment was received by the seller. This field will not be returned if buyer has yet to pay for the order. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		paymentDate?: string | null;

		/** This container is only returned if eBay is temporarily holding the seller's funds for the order. If a payment hold has been placed on the order, this container includes the reason for the payment hold, the expected release date of the funds into the seller's account, the current state of the hold, and as soon as the payment hold has been released, the actual release date. */
		paymentHolds?: Array<PaymentHold>;

		/** The payment method used to pay for the order. See the <strong>PaymentMethodTypeEnum</strong> type for more information on the payment methods. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:PaymentMethodTypeEnum'>eBay API documentation</a> */
		paymentMethod?: string | null;

		/** This field is only returned if payment has been made by the buyer, and the <strong>paymentMethod</strong> is <code>ESCROW</code>. This field contains a special ID for ESCROW. */
		paymentReferenceId?: string | null;

		/** The enumeration value returned in this field indicates the status of the payment for the order. See the <strong>PaymentStatusEnum</strong> type definition for more information on the possible payment states. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:PaymentStatusEnum'>eBay API documentation</a> */
		paymentStatus?: string | null;
	}

	/** This type is used to provide details about the seller payments for an order. */
	export interface PaymentFormProperties {

		/** The date and time that the payment was received by the seller. This field will not be returned if buyer has yet to pay for the order. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		paymentDate: FormControl<string | null | undefined>,

		/** The payment method used to pay for the order. See the <strong>PaymentMethodTypeEnum</strong> type for more information on the payment methods. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:PaymentMethodTypeEnum'>eBay API documentation</a> */
		paymentMethod: FormControl<string | null | undefined>,

		/** This field is only returned if payment has been made by the buyer, and the <strong>paymentMethod</strong> is <code>ESCROW</code>. This field contains a special ID for ESCROW. */
		paymentReferenceId: FormControl<string | null | undefined>,

		/** The enumeration value returned in this field indicates the status of the payment for the order. See the <strong>PaymentStatusEnum</strong> type definition for more information on the possible payment states. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:PaymentStatusEnum'>eBay API documentation</a> */
		paymentStatus: FormControl<string | null | undefined>,
	}
	export function CreatePaymentFormGroup() {
		return new FormGroup<PaymentFormProperties>({
			paymentDate: new FormControl<string | null | undefined>(undefined),
			paymentMethod: new FormControl<string | null | undefined>(undefined),
			paymentReferenceId: new FormControl<string | null | undefined>(undefined),
			paymentStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains information about a hold placed on a payment to a seller for an order, including the reason why the buyer's payment for the order is being held, the expected release date of the funds into the seller's account, the current state of the hold, and the actual release date if the payment has been released, and possible actions the seller can take to expedite the payout of funds into their account. */
	export interface PaymentHold {

		/** The date and time that the payment being held is expected to be released to the seller. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field will be returned if known by eBay. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		expectedReleaseDate?: string | null;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		holdAmount?: Amount;

		/** The reason that the payment is being held. A seller's payment may be held for a number of reasons, including when the seller is new, the seller's level is below standard, or if a return case or 'Significantly not as described' case is pending against the seller. This field is always returned with the <strong>paymentHolds</strong> array. */
		holdReason?: string | null;

		/** The current stage or condition of the hold. This field is always returned with the <strong>paymentHolds</strong> array.<br><br><b>Applicable values:</b><ul><li><code>HELD</code></li><li><code>HELD_PENDING</code></li><li><code>NOT_HELD</code></li><li><code>RELEASE_CONFIRMED</code></li><li><code>RELEASE_FAILED</code></li><li><code>RELEASE_PENDING</code></li><li><code>RELEASED</code></li></ul> */
		holdState?: string | null;

		/** The date and time that the payment being held was actually released to the seller. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the seller's payment is actually released into the seller's account.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		releaseDate?: string | null;

		/** A list of one or more possible actions that the seller can take to expedite the release of the payment hold. */
		sellerActionsToRelease?: Array<SellerActionsToRelease>;
	}

	/** This type contains information about a hold placed on a payment to a seller for an order, including the reason why the buyer's payment for the order is being held, the expected release date of the funds into the seller's account, the current state of the hold, and the actual release date if the payment has been released, and possible actions the seller can take to expedite the payout of funds into their account. */
	export interface PaymentHoldFormProperties {

		/** The date and time that the payment being held is expected to be released to the seller. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field will be returned if known by eBay. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		expectedReleaseDate: FormControl<string | null | undefined>,

		/** The reason that the payment is being held. A seller's payment may be held for a number of reasons, including when the seller is new, the seller's level is below standard, or if a return case or 'Significantly not as described' case is pending against the seller. This field is always returned with the <strong>paymentHolds</strong> array. */
		holdReason: FormControl<string | null | undefined>,

		/** The current stage or condition of the hold. This field is always returned with the <strong>paymentHolds</strong> array.<br><br><b>Applicable values:</b><ul><li><code>HELD</code></li><li><code>HELD_PENDING</code></li><li><code>NOT_HELD</code></li><li><code>RELEASE_CONFIRMED</code></li><li><code>RELEASE_FAILED</code></li><li><code>RELEASE_PENDING</code></li><li><code>RELEASED</code></li></ul> */
		holdState: FormControl<string | null | undefined>,

		/** The date and time that the payment being held was actually released to the seller. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the seller's payment is actually released into the seller's account.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		releaseDate: FormControl<string | null | undefined>,
	}
	export function CreatePaymentHoldFormGroup() {
		return new FormGroup<PaymentHoldFormProperties>({
			expectedReleaseDate: new FormControl<string | null | undefined>(undefined),
			holdReason: new FormControl<string | null | undefined>(undefined),
			holdState: new FormControl<string | null | undefined>(undefined),
			releaseDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used to state possible action(s) that a seller can take to release a payment hold placed against an order. */
	export interface SellerActionsToRelease {

		/** A possible action that the seller can take to expedite the release of a payment hold. A <strong>sellerActionToRelease</strong> field is returned for each possible action that a seller may take. Possible actions may include providing shipping/tracking information, issuing a refund, providing refund information, contacting customer support, etc. */
		sellerActionToRelease?: string | null;
	}

	/** This type is used to state possible action(s) that a seller can take to release a payment hold placed against an order. */
	export interface SellerActionsToReleaseFormProperties {

		/** A possible action that the seller can take to expedite the release of a payment hold. A <strong>sellerActionToRelease</strong> field is returned for each possible action that a seller may take. Possible actions may include providing shipping/tracking information, issuing a refund, providing refund information, contacting customer support, etc. */
		sellerActionToRelease: FormControl<string | null | undefined>,
	}
	export function CreateSellerActionsToReleaseFormGroup() {
		return new FormGroup<SellerActionsToReleaseFormProperties>({
			sellerActionToRelease: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains information about a refund issued for an order. This does not include line item level refunds. */
	export interface OrderRefund {

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		amount?: Amount;

		/** The date and time that the refund was issued. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the refund has been issued. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		refundDate?: string | null;

		/** Unique identifier of a refund that was initiated for an order through the <b>issueRefund</b> method. If the <b>issueRefund</b> method was used to issue one or more refunds at the line item level, these refund identifiers are returned at the line item level instead (<b>lineItems.refunds.refundId</b> field).<br><br> A <b>refundId</b> value is returned in the response of the <b>issueRefund</b> method, and this same value will be returned in the <b>getOrders</b> and <b>getOrders</b> responses for pending and completed refunds. For other refunds, see the <b>refundReferenceId</b> field. */
		refundId?: string | null;

		/** The eBay-generated unique identifier for the refund. This field is not returned until the refund has been issued. */
		refundReferenceId?: string | null;

		/** This enumeration value indicates the current status of the refund to the buyer. This container is always returned for each refund. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:RefundStatusEnum'>eBay API documentation</a> */
		refundStatus?: string | null;
	}

	/** This type contains information about a refund issued for an order. This does not include line item level refunds. */
	export interface OrderRefundFormProperties {

		/** The date and time that the refund was issued. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the refund has been issued. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		refundDate: FormControl<string | null | undefined>,

		/** Unique identifier of a refund that was initiated for an order through the <b>issueRefund</b> method. If the <b>issueRefund</b> method was used to issue one or more refunds at the line item level, these refund identifiers are returned at the line item level instead (<b>lineItems.refunds.refundId</b> field).<br><br> A <b>refundId</b> value is returned in the response of the <b>issueRefund</b> method, and this same value will be returned in the <b>getOrders</b> and <b>getOrders</b> responses for pending and completed refunds. For other refunds, see the <b>refundReferenceId</b> field. */
		refundId: FormControl<string | null | undefined>,

		/** The eBay-generated unique identifier for the refund. This field is not returned until the refund has been issued. */
		refundReferenceId: FormControl<string | null | undefined>,

		/** This enumeration value indicates the current status of the refund to the buyer. This container is always returned for each refund. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:RefundStatusEnum'>eBay API documentation</a> */
		refundStatus: FormControl<string | null | undefined>,
	}
	export function CreateOrderRefundFormGroup() {
		return new FormGroup<OrderRefundFormProperties>({
			refundDate: new FormControl<string | null | undefined>(undefined),
			refundId: new FormControl<string | null | undefined>(undefined),
			refundReferenceId: new FormControl<string | null | undefined>(undefined),
			refundStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts. */
	export interface PricingSummary {

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		adjustment?: Amount;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		deliveryCost?: Amount;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		deliveryDiscount?: Amount;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		fee?: Amount;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		priceDiscount?: Amount;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		priceSubtotal?: Amount;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		tax?: Amount;

		/** This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable. */
		total?: Amount;
	}

	/** This type contains a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts. */
	export interface PricingSummaryFormProperties {
	}
	export function CreatePricingSummaryFormGroup() {
		return new FormGroup<PricingSummaryFormProperties>({
		});

	}


	/** This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program or eBay shipping. */
	export interface Program {

		/** This type is used to provide the status and outcome of an order line item going through the Authenticity Guarantee verification process. */
		authenticityVerification?: PostSaleAuthenticationProgram;

		/** This type is used to provide details about an order line item being managed through eBay International Shipping. */
		ebayInternationalShipping?: EbayInternationalShipping;

		/** This type contains information about the management of the shipping for the order. */
		ebayShipping?: EbayShipping;
		ebayVault?: EbayVaultProgram;

		/** This type is used to provide details about an order line item being fulfilled by eBay or an eBay fulfillment partner. */
		fulfillmentProgram?: EbayFulfillmentProgram;
	}

	/** This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program or eBay shipping. */
	export interface ProgramFormProperties {
	}
	export function CreateProgramFormGroup() {
		return new FormGroup<ProgramFormProperties>({
		});

	}


	/** This type is used to provide the status and outcome of an order line item going through the Authenticity Guarantee verification process. */
	export interface PostSaleAuthenticationProgram {

		/** This field indicates the result of the authenticity verification inspection on an order line item. This field is not returned when the status value of the order line item is <code>PENDING</code> or <code>PASSED</code>. The possible values returned here are <code>NOT_AUTHENTIC</code>, <code>NOT_AS_DESCRIBED</code>, <code>CUSTOMIZED</code>, <code>MISCATEGORIZED</code>, or <code>NOT_AUTHENTIC_NO_RETURN</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:AuthenticityVerificationReasonEnum'>eBay API documentation</a> */
		outcomeReason?: string | null;

		/** The value in this field indicates whether the order line item has passed or failed the authenticity verification inspection, or if the inspection and/or results are still pending. The possible values returned here are <code>PENDING</code>, <code>PASSED</code>, <code>FAILED</code>, or <code>PASSED_WITH_EXCEPTION</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:AuthenticityVerificationStatusEnum'>eBay API documentation</a> */
		status?: string | null;
	}

	/** This type is used to provide the status and outcome of an order line item going through the Authenticity Guarantee verification process. */
	export interface PostSaleAuthenticationProgramFormProperties {

		/** This field indicates the result of the authenticity verification inspection on an order line item. This field is not returned when the status value of the order line item is <code>PENDING</code> or <code>PASSED</code>. The possible values returned here are <code>NOT_AUTHENTIC</code>, <code>NOT_AS_DESCRIBED</code>, <code>CUSTOMIZED</code>, <code>MISCATEGORIZED</code>, or <code>NOT_AUTHENTIC_NO_RETURN</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:AuthenticityVerificationReasonEnum'>eBay API documentation</a> */
		outcomeReason: FormControl<string | null | undefined>,

		/** The value in this field indicates whether the order line item has passed or failed the authenticity verification inspection, or if the inspection and/or results are still pending. The possible values returned here are <code>PENDING</code>, <code>PASSED</code>, <code>FAILED</code>, or <code>PASSED_WITH_EXCEPTION</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:AuthenticityVerificationStatusEnum'>eBay API documentation</a> */
		status: FormControl<string | null | undefined>,
	}
	export function CreatePostSaleAuthenticationProgramFormGroup() {
		return new FormGroup<PostSaleAuthenticationProgramFormProperties>({
			outcomeReason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains the specifications for the collection of orders that match the search or filter criteria of a <b>getOrders</b> call. The collection is grouped into a result set, and based on the query parameters that are set (including the <strong>limit</strong> and <strong>offset</strong> parameters), the result set may included multiple pages, but only one page of the result set can be viewed at a time. */
	export interface OrderSearchPagedCollection {

		/** The URI of the <b>getOrders</b> call request that produced the current page of the result set. */
		href?: string | null;

		/**
		 * The maximum number of orders returned per page of the result set. The <strong>limit</strong> value can be passed in as a query parameter, or if omitted, its value defaults to <code>50</code>. <br><br><span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer orders than the <strong>limit</strong> value.  To determine the number of pages in a result set, divide the <b>total</b> value (total number of orders matching input criteria) by this <strong>limit</strong> value, and then round up to the next integer. For example, if the <b>total</b> value was <code>120</code> (120 total orders) and the <strong>limit</strong> value was <code>50</code> (show 50 orders per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getOrders</strong> calls to view all orders matching the input criteria. </span><b>Default:</b> <code>50</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The <b>getOrders</b> call URI to use if you wish to view the  next page of the result set. For example, the following URI returns records 41 thru 50 from the collection of orders: <br><br><code><i>path</i>/order?limit=10&offset=40 </code><br><br>This field is only returned if there is a next page of results to view based on the current input criteria.<br> */
		next?: string | null;

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** This array contains one or more orders that are part of the current result set, that is controlled by the input criteria. The details of each order include information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status. <br><br>By default, orders are returned according to creation date (oldest to newest), but the order will vary according to any filter that is set in request. */
		orders?: Array<Order>;

		/** The <b>getOrders</b> call URI for the previous result set. For example, the following URI returns orders 21 thru 30 from the collection of orders: <br><br><code><i>path</i>/order?limit=10&offset=20</code><br><br>This field is only returned if there is a previous page of results to view based on the current input criteria. */
		prev?: string | null;

		/**
		 * The total number of orders in the results set based on the current input criteria.<br><br><span class="tablenote"><strong>Note:</strong> If no orders are found, this field is returned with a value of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;

		/** This array is returned if one or more errors or warnings occur with the call request. */
		warnings?: Array<Error>;
	}

	/** This type contains the specifications for the collection of orders that match the search or filter criteria of a <b>getOrders</b> call. The collection is grouped into a result set, and based on the query parameters that are set (including the <strong>limit</strong> and <strong>offset</strong> parameters), the result set may included multiple pages, but only one page of the result set can be viewed at a time. */
	export interface OrderSearchPagedCollectionFormProperties {

		/** The URI of the <b>getOrders</b> call request that produced the current page of the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The maximum number of orders returned per page of the result set. The <strong>limit</strong> value can be passed in as a query parameter, or if omitted, its value defaults to <code>50</code>. <br><br><span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer orders than the <strong>limit</strong> value.  To determine the number of pages in a result set, divide the <b>total</b> value (total number of orders matching input criteria) by this <strong>limit</strong> value, and then round up to the next integer. For example, if the <b>total</b> value was <code>120</code> (120 total orders) and the <strong>limit</strong> value was <code>50</code> (show 50 orders per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getOrders</strong> calls to view all orders matching the input criteria. </span><b>Default:</b> <code>50</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The <b>getOrders</b> call URI to use if you wish to view the  next page of the result set. For example, the following URI returns records 41 thru 50 from the collection of orders: <br><br><code><i>path</i>/order?limit=10&offset=40 </code><br><br>This field is only returned if there is a next page of results to view based on the current input criteria.<br> */
		next: FormControl<string | null | undefined>,

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The <b>getOrders</b> call URI for the previous result set. For example, the following URI returns orders 21 thru 30 from the collection of orders: <br><br><code><i>path</i>/order?limit=10&offset=20</code><br><br>This field is only returned if there is a previous page of results to view based on the current input criteria. */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of orders in the results set based on the current input criteria.<br><br><span class="tablenote"><strong>Note:</strong> If no orders are found, this field is returned with a value of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateOrderSearchPagedCollectionFormGroup() {
		return new FormGroup<OrderSearchPagedCollectionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type is used by the base response of the <strong>getPaymentDispute</strong> method. The <strong>getPaymentDispute</strong> method retrieves detailed information on a specific payment dispute. */
	export interface PaymentDispute {

		/** This type defines the monetary value of the payment dispute, and the currency used. */
		amount?: SimpleAmount;

		/** The value(s) returned in this array indicate the choices that the seller has when responding to the payment dispute. Once the seller has responded to the payment dispute, this field will no longer be shown, and instead, the <strong>sellerResponse</strong> field will show the decision that the seller made. */
		availableChoices?: Array<string>;

		/** This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return. */
		buyerProvided?: InfoFromBuyer;

		/** This is the eBay user ID of the buyer that initiated the payment dispute. */
		buyerUsername?: string | null;

		/** The timestamp in this field shows the date/time when the payment dispute was closed, so this field is only returned for payment disputes in the <code>CLOSED</code> state.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		closedDate?: string | null;

		/** This container shows any evidence that has been provided by the seller to contest the payment dispute. Evidence may include shipment tracking information, proof of authentication documentation, image(s) to proof that an item is as described, or financial documentation/invoice.<br><br>This container is only returned if the seller has provided at least one document used as evidence against the payment dispute. */
		evidence?: Array<DisputeEvidence>;

		/** This container is returned if one or more evidence documents are being requested from the seller. */
		evidenceRequests?: Array<EvidenceRequest>;

		/** This array is used to identify one or more order line items associated with the payment dispute. There will always be at least one <b>itemId</b>/<b>lineItemId</b> pair returned in this array. */
		lineItems?: Array<OrderLineItems>;

		/** This array provide details about one or more monetary transactions that occur as part of a payment dispute. This array is only returned once one or more monetary transacations occur with a payment dispute. */
		monetaryTransactions?: Array<MonetaryTransaction>;

		/** This field shows information that the seller provides about the dispute, such as the basis for the dispute, any relevant evidence, tracking numbers, and so forth.<br><br>This field is limited to 1000 characters. */
		note?: string | null;

		/** The timestamp in this field shows the date/time when the payment dispute was opened. This field is returned for payment disputes in all states.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		openDate?: string | null;

		/** This is the unique identifier of the order involved in the payment dispute. */
		orderId?: string | null;

		/** This is the unique identifier of the payment dispute. This is the same identifier that is passed in to the call URI. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. */
		paymentDisputeId?: string | null;

		/** The enumeration value in this field gives the current status of the payment dispute. The status of a payment dispute partially determines other fields that are returned in the response. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeStateEnum'>eBay API documentation</a> */
		paymentDisputeStatus?: string | null;

		/** The enumeration value in this field gives the reason why the buyer initiated the payment dispute. See <strong>DisputeReasonEnum</strong> type for a description of the supported reasons that buyers can give for initiating a payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeReasonEnum'>eBay API documentation</a> */
		reason?: string | null;

		/** This type is used by the <strong>resolution</strong> container that is returned for payment disputes that have been resolved. */
		resolution?: PaymentDisputeOutcomeDetail;

		/** The timestamp in this field shows the date/time when the seller must response to a payment dispute, so this field is only returned for payment disputes in the <code>ACTION_NEEDED</code> state. For payment disputes that currently require action by the seller, that same seller should look at the <strong>availableChoices</strong> array to see the available actions.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		respondByDate?: string | null;

		/** This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller. */
		returnAddress?: ReturnAddress;

		/**
		 * This integer value indicates the revision number of the payment dispute. Each time an action is taken against a payment dispute, this integer value increases by 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		revision?: number | null;

		/** The enumeration value returned in this field indicates how the seller has responded to the payment dispute. The seller has the option of accepting the payment dispute and agreeing to issue a refund, accepting the payment dispute and agreeing to issue a refund as long as the buyer returns the item, or contesting the payment dispute. This field is returned as soon as the seller makes an initial decision on the payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:SellerResponseEnum'>eBay API documentation</a> */
		sellerResponse?: string | null;
	}

	/** This type is used by the base response of the <strong>getPaymentDispute</strong> method. The <strong>getPaymentDispute</strong> method retrieves detailed information on a specific payment dispute. */
	export interface PaymentDisputeFormProperties {

		/** This is the eBay user ID of the buyer that initiated the payment dispute. */
		buyerUsername: FormControl<string | null | undefined>,

		/** The timestamp in this field shows the date/time when the payment dispute was closed, so this field is only returned for payment disputes in the <code>CLOSED</code> state.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		closedDate: FormControl<string | null | undefined>,

		/** This field shows information that the seller provides about the dispute, such as the basis for the dispute, any relevant evidence, tracking numbers, and so forth.<br><br>This field is limited to 1000 characters. */
		note: FormControl<string | null | undefined>,

		/** The timestamp in this field shows the date/time when the payment dispute was opened. This field is returned for payment disputes in all states.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		openDate: FormControl<string | null | undefined>,

		/** This is the unique identifier of the order involved in the payment dispute. */
		orderId: FormControl<string | null | undefined>,

		/** This is the unique identifier of the payment dispute. This is the same identifier that is passed in to the call URI. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. */
		paymentDisputeId: FormControl<string | null | undefined>,

		/** The enumeration value in this field gives the current status of the payment dispute. The status of a payment dispute partially determines other fields that are returned in the response. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeStateEnum'>eBay API documentation</a> */
		paymentDisputeStatus: FormControl<string | null | undefined>,

		/** The enumeration value in this field gives the reason why the buyer initiated the payment dispute. See <strong>DisputeReasonEnum</strong> type for a description of the supported reasons that buyers can give for initiating a payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeReasonEnum'>eBay API documentation</a> */
		reason: FormControl<string | null | undefined>,

		/** The timestamp in this field shows the date/time when the seller must response to a payment dispute, so this field is only returned for payment disputes in the <code>ACTION_NEEDED</code> state. For payment disputes that currently require action by the seller, that same seller should look at the <strong>availableChoices</strong> array to see the available actions.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		respondByDate: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the revision number of the payment dispute. Each time an action is taken against a payment dispute, this integer value increases by 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		revision: FormControl<number | null | undefined>,

		/** The enumeration value returned in this field indicates how the seller has responded to the payment dispute. The seller has the option of accepting the payment dispute and agreeing to issue a refund, accepting the payment dispute and agreeing to issue a refund as long as the buyer returns the item, or contesting the payment dispute. This field is returned as soon as the seller makes an initial decision on the payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:SellerResponseEnum'>eBay API documentation</a> */
		sellerResponse: FormControl<string | null | undefined>,
	}
	export function CreatePaymentDisputeFormGroup() {
		return new FormGroup<PaymentDisputeFormProperties>({
			buyerUsername: new FormControl<string | null | undefined>(undefined),
			closedDate: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			openDate: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			paymentDisputeId: new FormControl<string | null | undefined>(undefined),
			paymentDisputeStatus: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			respondByDate: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			sellerResponse: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the <strong>resolution</strong> container that is returned for payment disputes that have been resolved. */
	export interface PaymentDisputeOutcomeDetail {

		/** This type defines the monetary value of the payment dispute, and the currency used. */
		fees?: SimpleAmount;

		/** This type defines the monetary value of the payment dispute, and the currency used. */
		protectedAmount?: SimpleAmount;

		/** This enumeration value indicates if the seller is fully protected, partially protected, or not protected by eBay for the payment dispute. This field is always returned once the payment dispute is resolved. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ProtectionStatusEnum'>eBay API documentation</a> */
		protectionStatus?: string | null;

		/** The enumeration value returned in this field indicates the outcome of the payment dispute for the seller. This field is always returned once the payment dispute is resolved. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:OutcomeEnum'>eBay API documentation</a> */
		reasonForClosure?: string | null;

		/** This type defines the monetary value of the payment dispute, and the currency used. */
		recoupAmount?: SimpleAmount;

		/** This type defines the monetary value of the payment dispute, and the currency used. */
		totalFeeCredit?: SimpleAmount;
	}

	/** This type is used by the <strong>resolution</strong> container that is returned for payment disputes that have been resolved. */
	export interface PaymentDisputeOutcomeDetailFormProperties {

		/** This enumeration value indicates if the seller is fully protected, partially protected, or not protected by eBay for the payment dispute. This field is always returned once the payment dispute is resolved. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ProtectionStatusEnum'>eBay API documentation</a> */
		protectionStatus: FormControl<string | null | undefined>,

		/** The enumeration value returned in this field indicates the outcome of the payment dispute for the seller. This field is always returned once the payment dispute is resolved. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:OutcomeEnum'>eBay API documentation</a> */
		reasonForClosure: FormControl<string | null | undefined>,
	}
	export function CreatePaymentDisputeOutcomeDetailFormGroup() {
		return new FormGroup<PaymentDisputeOutcomeDetailFormProperties>({
			protectionStatus: new FormControl<string | null | undefined>(undefined),
			reasonForClosure: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by each recorded activity on a payment dispute, from creation to resolution. */
	export interface PaymentDisputeActivity {

		/** The timestamp in this field shows the date/time of the payment dispute activity.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		activityDate?: string | null;

		/** This enumeration value indicates the type of activity that occured on the payment dispute. For example, a value of <code>DISPUTE_OPENED</code> is returned when a payment disute is first created,  a value indicating the seller's decision on the dispute, such as <code>SELLER_CONTEST</code>, is returned when seller makes a decision to accept or contest dispute, and a value of <code>DISPUTE_CLOSED</code> is returned when a payment disute is resolved. See <strong>ActivityEnum</strong> for an explanation of each of the values that may be returned here. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ActivityEnum'>eBay API documentation</a> */
		activityType?: string | null;

		/** This enumeration value indicates the actor that performed the action. Possible values include the <code>BUYER</code>, <code>SELLER</code>, <code>CS_AGENT</code> (eBay customer service), or <code>SYSTEM</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ActorEnum'>eBay API documentation</a> */
		actor?: string | null;
	}

	/** This type is used by each recorded activity on a payment dispute, from creation to resolution. */
	export interface PaymentDisputeActivityFormProperties {

		/** The timestamp in this field shows the date/time of the payment dispute activity.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>. */
		activityDate: FormControl<string | null | undefined>,

		/** This enumeration value indicates the type of activity that occured on the payment dispute. For example, a value of <code>DISPUTE_OPENED</code> is returned when a payment disute is first created,  a value indicating the seller's decision on the dispute, such as <code>SELLER_CONTEST</code>, is returned when seller makes a decision to accept or contest dispute, and a value of <code>DISPUTE_CLOSED</code> is returned when a payment disute is resolved. See <strong>ActivityEnum</strong> for an explanation of each of the values that may be returned here. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ActivityEnum'>eBay API documentation</a> */
		activityType: FormControl<string | null | undefined>,

		/** This enumeration value indicates the actor that performed the action. Possible values include the <code>BUYER</code>, <code>SELLER</code>, <code>CS_AGENT</code> (eBay customer service), or <code>SYSTEM</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ActorEnum'>eBay API documentation</a> */
		actor: FormControl<string | null | undefined>,
	}
	export function CreatePaymentDisputeActivityFormGroup() {
		return new FormGroup<PaymentDisputeActivityFormProperties>({
			activityDate: new FormControl<string | null | undefined>(undefined),
			activityType: new FormControl<string | null | undefined>(undefined),
			actor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the base response of the <strong>getActivities</strong> method, and includes a log of all activities of a payment dispute, from creation to resolution. */
	export interface PaymentDisputeActivityHistory {

		/** This array holds all activities of a payment dispute, from creation to resolution. For each activity, the activity type, the actor, and a timestamp is shown. The <strong>getActivities</strong> response is dynamic, and grows with each recorded activity. */
		activity?: Array<PaymentDisputeActivity>;
	}

	/** This type is used by the base response of the <strong>getActivities</strong> method, and includes a log of all activities of a payment dispute, from creation to resolution. */
	export interface PaymentDisputeActivityHistoryFormProperties {
	}
	export function CreatePaymentDisputeActivityHistoryFormGroup() {
		return new FormGroup<PaymentDisputeActivityHistoryFormProperties>({
		});

	}


	/** This is the base type of the <b>issueRefund</b> response payload. As long as the <b>issueRefund</b> method does not trigger an error, a response payload will be returned. */
	export interface Refund {

		/** The unique identifier of the order refund. This value is returned unless the refund operation fails (<b>refundStatus</b> value shows <code>FAILED</code>). This identifier can be used to track the status of the refund through a <b>getOrder</b> or <b>getOrders</b> call. For order-level refunds, check the <b>paymentSummary.refunds.refundId</b> field in the <b>getOrder</b>/<b>getOrders</b> response, and for line item level refunds, check the <b>lineItems.refunds.refundId</b> field(s) in the <b>getOrder</b>/<b>getOrders</b> response. */
		refundId?: string | null;

		/** The value returned in this field indicates the success or failure of the refund operation. A successful <b>issueRefund</b> operation should result in a value of <code>PENDING</code>. A failed <b>issueRefund</b> operation should result in a value of <code>FAILED</code>, and an HTTP status code and/or and API error code may also get returned to possibly indicate the issue.<br><br>The refunds issued through this method are processed asynchronously, so the refund will not show as 'Refunded' right away. A seller will have to make a subsequent <a href="https://developer.ebay.com/api-docs/sell/fulfillment/resources/order/methods/getOrder" target="_blank">getOrder</a> call to check the status of the refund.  The status of an order refund can be found in the <a href="https://developer.ebay.com/api-docs/sell/fulfillment/resources/order/methods/getOrder#response.paymentSummary.refunds.refundStatus" target="_blank">paymentSummary.refunds.refundStatus</a> field of the <a href="https://developer.ebay.com/api-docs/sell/fulfillment/resources/order/methods/getOrder" target="_blank">getOrder</a> response. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:RefundStatusEnum'>eBay API documentation</a> */
		refundStatus?: string | null;
	}

	/** This is the base type of the <b>issueRefund</b> response payload. As long as the <b>issueRefund</b> method does not trigger an error, a response payload will be returned. */
	export interface RefundFormProperties {

		/** The unique identifier of the order refund. This value is returned unless the refund operation fails (<b>refundStatus</b> value shows <code>FAILED</code>). This identifier can be used to track the status of the refund through a <b>getOrder</b> or <b>getOrders</b> call. For order-level refunds, check the <b>paymentSummary.refunds.refundId</b> field in the <b>getOrder</b>/<b>getOrders</b> response, and for line item level refunds, check the <b>lineItems.refunds.refundId</b> field(s) in the <b>getOrder</b>/<b>getOrders</b> response. */
		refundId: FormControl<string | null | undefined>,

		/** The value returned in this field indicates the success or failure of the refund operation. A successful <b>issueRefund</b> operation should result in a value of <code>PENDING</code>. A failed <b>issueRefund</b> operation should result in a value of <code>FAILED</code>, and an HTTP status code and/or and API error code may also get returned to possibly indicate the issue.<br><br>The refunds issued through this method are processed asynchronously, so the refund will not show as 'Refunded' right away. A seller will have to make a subsequent <a href="https://developer.ebay.com/api-docs/sell/fulfillment/resources/order/methods/getOrder" target="_blank">getOrder</a> call to check the status of the refund.  The status of an order refund can be found in the <a href="https://developer.ebay.com/api-docs/sell/fulfillment/resources/order/methods/getOrder#response.paymentSummary.refunds.refundStatus" target="_blank">paymentSummary.refunds.refundStatus</a> field of the <a href="https://developer.ebay.com/api-docs/sell/fulfillment/resources/order/methods/getOrder" target="_blank">getOrder</a> response. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:RefundStatusEnum'>eBay API documentation</a> */
		refundStatus: FormControl<string | null | undefined>,
	}
	export function CreateRefundFormGroup() {
		return new FormGroup<RefundFormProperties>({
			refundId: new FormControl<string | null | undefined>(undefined),
			refundStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains the complete details of an existing fulfillment for an order. */
	export interface ShippingFulfillment {

		/** The unique identifier of the fulfillment; for example, <code>9405509699937003457459</code>. This eBay-generated value is created with a successful <b>createShippingFulfillment</b> call. */
		fulfillmentId?: string | null;

		/** This array contains a list of one or more line items (and purchased quantity) to which the fulfillment applies. */
		lineItems?: Array<LineItemReference>;

		/** The tracking number provided by the shipping carrier for the package shipped in this fulfillment. This field is returned if available. */
		shipmentTrackingNumber?: string | null;

		/** The date and time that the fulfillment package was shipped. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field should only be returned if the package has been shipped.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		shippedDate?: string | null;

		/** The eBay code identifying the shipping carrier for this fulfillment. This field is returned if available. <br><br><span class="tablenote"><strong>Note:</strong> The Trading API's <b>ShippingCarrierCodeType</b> enumeration type contains the most current list of eBay shipping carrier codes and the countries served by each carrier. See <a href="https://developer.ebay.com/Devzone/XML/docs/Reference/eBay/types/ShippingCarrierCodeType.html " target="_blank">ShippingCarrierCodeType</a>.</span> */
		shippingCarrierCode?: string | null;
	}

	/** This type contains the complete details of an existing fulfillment for an order. */
	export interface ShippingFulfillmentFormProperties {

		/** The unique identifier of the fulfillment; for example, <code>9405509699937003457459</code>. This eBay-generated value is created with a successful <b>createShippingFulfillment</b> call. */
		fulfillmentId: FormControl<string | null | undefined>,

		/** The tracking number provided by the shipping carrier for the package shipped in this fulfillment. This field is returned if available. */
		shipmentTrackingNumber: FormControl<string | null | undefined>,

		/** The date and time that the fulfillment package was shipped. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field should only be returned if the package has been shipped.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code> */
		shippedDate: FormControl<string | null | undefined>,

		/** The eBay code identifying the shipping carrier for this fulfillment. This field is returned if available. <br><br><span class="tablenote"><strong>Note:</strong> The Trading API's <b>ShippingCarrierCodeType</b> enumeration type contains the most current list of eBay shipping carrier codes and the countries served by each carrier. See <a href="https://developer.ebay.com/Devzone/XML/docs/Reference/eBay/types/ShippingCarrierCodeType.html " target="_blank">ShippingCarrierCodeType</a>.</span> */
		shippingCarrierCode: FormControl<string | null | undefined>,
	}
	export function CreateShippingFulfillmentFormGroup() {
		return new FormGroup<ShippingFulfillmentFormProperties>({
			fulfillmentId: new FormControl<string | null | undefined>(undefined),
			shipmentTrackingNumber: new FormControl<string | null | undefined>(undefined),
			shippedDate: new FormControl<string | null | undefined>(undefined),
			shippingCarrierCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains the details for creating a fulfillment for an order. */
	export interface ShippingFulfillmentDetails {

		/** This array contains a list of or more line items and the quantity that will be shipped in the same package. */
		lineItems?: Array<LineItemReference>;

		/** This is the actual date and time that the fulfillment package was shipped. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. The seller should use the actual date/time that the package was shipped, but if this field is omitted, it will default to the current date/time.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code><br><br><b>Default:</b> The current date and time. */
		shippedDate?: string | null;

		/** The unique identifier of the shipping carrier being used to ship the line item(s). Technically, the <strong>shippingCarrierCode</strong> and <strong>trackingNumber</strong> fields are optional, but generally these fields will be provided if the shipping carrier and tracking number are known. <br><br><span class="tablenote"><strong>Note:</strong> Use the Trading API's <a href="https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call to retrieve the latest shipping carrier enumeration values. When making the <a href="https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call, include the <strong>DetailName</strong> field in the request payload and set its value to <code>ShippingCarrierDetails</code>. Each valid shipping carrier enumeration value is returned in a <strong>ShippingCarrierDetails.ShippingCarrier</strong> field in the response payload.</span> */
		shippingCarrierCode?: string | null;

		/** The tracking number provided by the shipping carrier for this fulfillment. The seller should be careful that this tracking number is accurate since the buyer will use this tracking number to track shipment, and eBay has no way to verify the accuracy of this number.<br><br>This field and the <b>shippingCarrierCode</b> field are mutually dependent. If you include one, you must also include the other.<br><br><span class="tablenote"><strong>Note:</strong> If you include <b>trackingNumber</b> (and <b>shippingCarrierCode</b>) in the request, the resulting fulfillment's ID (returned in the HTTP location code) is the tracking number. If you do not include shipment tracking information, the resulting fulfillment ID will default to an arbitrary number such as <code>999</code>.</span><br><span class="tablenote"><strong>Note:</strong> Only alphanumeric characters are supported for shipment tracking numbers. Spaces, hyphens, and all other special characters are not supported. Do not include a space in the tracking number even if a space appears in the tracking number on the shipping label.</span> */
		trackingNumber?: string | null;
	}

	/** This type contains the details for creating a fulfillment for an order. */
	export interface ShippingFulfillmentDetailsFormProperties {

		/** This is the actual date and time that the fulfillment package was shipped. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. The seller should use the actual date/time that the package was shipped, but if this field is omitted, it will default to the current date/time.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code><br><br><b>Default:</b> The current date and time. */
		shippedDate: FormControl<string | null | undefined>,

		/** The unique identifier of the shipping carrier being used to ship the line item(s). Technically, the <strong>shippingCarrierCode</strong> and <strong>trackingNumber</strong> fields are optional, but generally these fields will be provided if the shipping carrier and tracking number are known. <br><br><span class="tablenote"><strong>Note:</strong> Use the Trading API's <a href="https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call to retrieve the latest shipping carrier enumeration values. When making the <a href="https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call, include the <strong>DetailName</strong> field in the request payload and set its value to <code>ShippingCarrierDetails</code>. Each valid shipping carrier enumeration value is returned in a <strong>ShippingCarrierDetails.ShippingCarrier</strong> field in the response payload.</span> */
		shippingCarrierCode: FormControl<string | null | undefined>,

		/** The tracking number provided by the shipping carrier for this fulfillment. The seller should be careful that this tracking number is accurate since the buyer will use this tracking number to track shipment, and eBay has no way to verify the accuracy of this number.<br><br>This field and the <b>shippingCarrierCode</b> field are mutually dependent. If you include one, you must also include the other.<br><br><span class="tablenote"><strong>Note:</strong> If you include <b>trackingNumber</b> (and <b>shippingCarrierCode</b>) in the request, the resulting fulfillment's ID (returned in the HTTP location code) is the tracking number. If you do not include shipment tracking information, the resulting fulfillment ID will default to an arbitrary number such as <code>999</code>.</span><br><span class="tablenote"><strong>Note:</strong> Only alphanumeric characters are supported for shipment tracking numbers. Spaces, hyphens, and all other special characters are not supported. Do not include a space in the tracking number even if a space appears in the tracking number on the shipping label.</span> */
		trackingNumber: FormControl<string | null | undefined>,
	}
	export function CreateShippingFulfillmentDetailsFormGroup() {
		return new FormGroup<ShippingFulfillmentDetailsFormProperties>({
			shippedDate: new FormControl<string | null | undefined>(undefined),
			shippingCarrierCode: new FormControl<string | null | undefined>(undefined),
			trackingNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a <b>getShippingFulfillments</b> call. The <b>fulfillments</b> container returns an array of all the fulfillments in the collection. */
	export interface ShippingFulfillmentPagedCollection {

		/** This array contains one or more fulfillments required for the order that was specified in method endpoint. */
		fulfillments?: Array<ShippingFulfillment>;

		/**
		 * The total number of fulfillments in the specified order.<br><br><span class="tablenote"><strong>Note:</strong> If no fulfillments are found for the order, this field is returned with a value of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;

		/** This array is only returned if one or more errors or warnings occur with the call request. */
		warnings?: Array<Error>;
	}

	/** This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a <b>getShippingFulfillments</b> call. The <b>fulfillments</b> container returns an array of all the fulfillments in the collection. */
	export interface ShippingFulfillmentPagedCollectionFormProperties {

		/**
		 * The total number of fulfillments in the specified order.<br><br><span class="tablenote"><strong>Note:</strong> If no fulfillments are found for the order, this field is returned with a value of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateShippingFulfillmentPagedCollectionFormGroup() {
		return new FormGroup<ShippingFulfillmentPagedCollectionFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type is used by the request payload of the <strong>updateEvidence</strong> method. The <strong>updateEvidence</strong> method is used to update an existing evidence set against a payment dispute with one or more evidence files. */
	export interface UpdateEvidencePaymentDisputeRequest {

		/** The unique identifier of the evidence set that is being updated with new evidence files. */
		evidenceId?: string | null;

		/** This field is used to indicate the type of evidence being provided through one or more evidence files. All evidence files (if more than one) should be associated with the evidence type passed in this field. See the <strong>EvidenceTypeEnum</strong> type for the supported evidence types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a> */
		evidenceType?: string | null;

		/** This array is used to specify one or more evidence files that will be added to the evidence set associated with a payment dispute. At least one evidence file must be specified in the <strong>files</strong> array.<br><br> The unique identifier of an evidence file is returned in the response payload of the <strong>uploadEvidence</strong> method. */
		files?: Array<FileEvidence>;

		/** This required array identifies the order line item(s) for which the evidence file(s) will be applicable. Both the <strong>itemId</strong> and <strong>lineItemID</strong> fields are needed to identify each order line item, and both of these values are returned under the <strong>evidenceRequests.lineItems</strong> array in the <strong>getPaymentDispute</strong> response. */
		lineItems?: Array<OrderLineItems>;
	}

	/** This type is used by the request payload of the <strong>updateEvidence</strong> method. The <strong>updateEvidence</strong> method is used to update an existing evidence set against a payment dispute with one or more evidence files. */
	export interface UpdateEvidencePaymentDisputeRequestFormProperties {

		/** The unique identifier of the evidence set that is being updated with new evidence files. */
		evidenceId: FormControl<string | null | undefined>,

		/** This field is used to indicate the type of evidence being provided through one or more evidence files. All evidence files (if more than one) should be associated with the evidence type passed in this field. See the <strong>EvidenceTypeEnum</strong> type for the supported evidence types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a> */
		evidenceType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEvidencePaymentDisputeRequestFormGroup() {
		return new FormGroup<UpdateEvidencePaymentDisputeRequestFormProperties>({
			evidenceId: new FormControl<string | null | undefined>(undefined),
			evidenceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Use this call to search for and retrieve one or more orders based on their creation date, last modification date, or fulfillment status using the <b>filter</b> parameter. You can alternatively specify a list of orders using the <b>orderIds</b> parameter. Include the optional <b>fieldGroups</b> query parameter set to <code>TAX_BREAKDOWN</code> to return a breakdown of the taxes and fees. <br><br> The returned <b>Order</b> objects contain information you can use to create and process fulfillments, including: <ul> <li>Information about the buyer and seller</li> <li>Information about the order's line items</li> <li>The plans for packaging, addressing and shipping the order</li> <li>The status of payment, packaging, addressing, and shipping the order</li> <li>A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs</li> <li>A summary of applied taxes and fees, and optionally a breakdown of each </li></ul> <br><br> <span class="tablenote"><strong>Important:</strong> In this call, the <b>cancelStatus.cancelRequests</b> array is returned but is always empty. Use the <b>getOrder</b> call instead, which returns this array fully populated with information about any cancellation requests.</span>
		 * Get order
		 * @param {string} fieldGroups The response type associated with the order. The only presently supported value is <code>TAX_BREAKDOWN</code>. This type returns a breakdown of tax and fee values associated with the order.
		 * @param {string} filter One or more comma-separated criteria for narrowing down the collection of orders returned by this call. These criteria correspond to specific fields in the response payload. Multiple filter criteria combine to further restrict the results. <br><br><span class="tablenote"><strong>Note:</strong> <b>getOrders</b> can return orders up to two years old. Do not set the <code>creationdate</code> filter to a date beyond two years in the past.</span><br><span class="tablenote"><strong>Note:</strong> If the <b>orderIds</b> parameter is included in the request, the <b>filter</b> parameter will be ignored.</span><br>The available criteria are as follows: <dl> <dt><code><b>creationdate</b></code></dt> <dd>The time period during which qualifying orders were created (the <b>orders.creationDate</b> field). In the URI, this is expressed as a starting timestamp, with or without an ending timestamp (in brackets). The timestamps are in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock.For example: <ul> <li><code>creationdate:[2016-02-21T08:25:43.511Z..]</code> identifies orders created on or after the given timestamp.</li> <li><code>creationdate:[2016-02-21T08:25:43.511Z..2016-04-21T08:25:43.511Z]</code> identifies orders created between the given timestamps, inclusive.</li> </ul> </dd> <dt><code><b>lastmodifieddate</b></code></dt> <dd>The time period during which qualifying orders were last modified (the <b>orders.modifiedDate</b> field).  In the URI, this is expressed as a starting timestamp, with or without an ending timestamp (in brackets). The timestamps are in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock.For example: <ul> <li><code>lastmodifieddate:[2016-05-15T08:25:43.511Z..]</code> identifies orders modified on or after the given timestamp.</li> <li><code>lastmodifieddate:[2016-05-15T08:25:43.511Z..2016-05-31T08:25:43.511Z]</code> identifies orders modified between the given timestamps, inclusive.</li> </ul> <span class="tablenote"><strong>Note:</strong> If <b>creationdate</b> and <b>lastmodifieddate</b> are both included, only <b>creationdate</b> is used.</span> <br><br></dd> <dt><code><b>orderfulfillmentstatus</b></code></dt> <dd>The degree to which qualifying orders have been shipped (the <b>orders.orderFulfillmentStatus</b> field). In the URI, this is expressed as one of the following value combinations: <ul> <li><code>orderfulfillmentstatus:{NOT_STARTED|IN_PROGRESS}</code> specifies orders for which no shipping fulfillments have been started, plus orders for which at least one shipping fulfillment has been started but not completed.</li> <li><code>orderfulfillmentstatus:{FULFILLED|IN_PROGRESS}</code> specifies orders for which all shipping fulfillments have been completed, plus orders for which at least one shipping fulfillment has been started but not completed.</li> </ul> <span class="tablenote"><strong>Note:</strong> The values <code>NOT_STARTED</code>, <code>IN_PROGRESS</code>, and <code>FULFILLED</code> can be used in various combinations, but only the combinations shown here are currently supported.</span> </dd> </dl> Here is an example of a <b>getOrders</b> call using all of these filters: <br><br> <code>GET https://api.ebay.com/sell/v1/order?<br>filter=<b>creationdate</b>:%5B2016-03-21T08:25:43.511Z..2016-04-21T08:25:43.511Z%5D,<br><b>lastmodifieddate</b>:%5B2016-05-15T08:25:43.511Z..%5D,<br><b>orderfulfillmentstatus</b>:%7BNOT_STARTED%7CIN_PROGRESS%7D</code> <br><br> <span class="tablenote"><strong>Note:</strong> This call requires that certain special characters in the URI query string be percent-encoded: <br> &nbsp;&nbsp;&nbsp;&nbsp;<code>[</code> = <code>%5B</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>]</code> = <code>%5D</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>{</code> = <code>%7B</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>|</code> = <code>%7C</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>}</code> = <code>%7D</code> <br> This query filter example uses these codes.</span> For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/fulfillment/types/api:FilterField
		 * @param {string} limit The number of orders to return per page of the result set. Use this parameter in conjunction with the <b>offset</b> parameter to control the pagination of the output. <br><br>For example, if <b>offset</b> is set to <code>10</code> and <b>limit</b> is set to <code>10</code>, the call retrieves orders 11 thru 20 from the result set. <br><br> If a limit is not set, the <b>limit</b> defaults to 50 and returns up to 50 orders. If a requested limit is more than 200, the call fails and returns an error.<br ><br> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>. If the <b>orderIds</b> parameter is included in the request, this parameter will be ignored.</span> <br><br> <b>Maximum:</b> <code>200</code> <br> <b>Default:</b> <code>50</code>
		 * @param {string} offset Specifies the number of orders to skip in the result set before returning the first order in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>
		 * @param {string} orderIds A comma-separated list of the unique identifiers of the orders to retrieve (maximum 50). If one or more order ID values are specified through the <b>orderIds</b> query parameter, all other query parameters will be ignored.<br><br><span class="tablenote"><strong>Note:</strong> <b>getOrders</b> can return orders up to two years old. Do not provide the orderId for an order created more than two years in the past.</span>
		 * @return {OrderSearchPagedCollection} Success
		 */
		GetOrders(fieldGroups: string | null | undefined, filter: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined, orderIds: string | null | undefined): Observable<OrderSearchPagedCollection> {
			return this.http.get<OrderSearchPagedCollection>(this.baseUri + 'order?fieldGroups=' + (fieldGroups == null ? '' : encodeURIComponent(fieldGroups)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&orderIds=' + (orderIds == null ? '' : encodeURIComponent(orderIds)), {});
		}

		/**
		 * Use this call to retrieve the contents of an order based on its unique identifier, <i>orderId</i>. This value was returned in the <b> getOrders</b> call's <b>orders.orderId</b> field when you searched for orders by creation date, modification date, or fulfillment status. Include the optional <b>fieldGroups</b> query parameter set to <code>TAX_BREAKDOWN</code> to return a breakdown of the taxes and fees. <br><br> The returned <b>Order</b> object contains information you can use to create and process fulfillments, including: <ul> <li>Information about the buyer and seller</li> <li>Information about the order's line items</li> <li> The plans for packaging, addressing and shipping the order</li> <li>The status of payment, packaging, addressing, and shipping the order</li> <li>A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs</li> <li>A summary of applied taxes and fees, and optionally a breakdown of each </li></ul>
		 * Get order/{orderId}
		 * @param {string} fieldGroups The response type associated with the order. The only presently supported value is <code>TAX_BREAKDOWN</code>. This type returns a breakdown of tax and fee values associated with the order.
		 * @param {string} orderId The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.<span class="tablenote"><strong>Note:</strong> <b>getOrders</b> can return orders up to two years old. Do not provide the orderId for an order created more than two years in the past.</span>
		 * @return {Order} Success
		 */
		GetOrder(fieldGroups: string | null | undefined, orderId: string): Observable<Order> {
			return this.http.get<Order>(this.baseUri + 'order/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '?fieldGroups=' + (fieldGroups == null ? '' : encodeURIComponent(fieldGroups)), {});
		}

		/**
		 * Use this call to retrieve the contents of all fulfillments currently defined for a specified order based on the order's unique identifier, <b>orderId</b>. This value is returned in the <b>getOrders</b> call's <b>members.orderId</b> field when you search for orders by creation date or shipment status.
		 * Get order/{orderId}/shipping_fulfillment
		 * @param {string} orderId The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.
		 * @return {ShippingFulfillmentPagedCollection} Success
		 */
		GetShippingFulfillments(orderId: string): Observable<ShippingFulfillmentPagedCollection> {
			return this.http.get<ShippingFulfillmentPagedCollection>(this.baseUri + 'order/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/shipping_fulfillment', {});
		}

		/**
		 * When you group an order's line items into one or more packages, each package requires a corresponding plan for handling, addressing, and shipping; this is a <i>shipping fulfillment</i>. For each package, execute this call once to generate a shipping fulfillment associated with that package. <br><br> <span class="tablenote"><strong>Note:</strong> A single line item in an order can consist of multiple units of a purchased item, and one unit can consist of multiple parts or components. Although these components might be provided by the manufacturer in separate packaging, the seller must include all components of a given line item in the same package.</span> <br><br>Before using this call for a given package, you must determine which line items are in the package. If the package has been shipped, you should provide the date of shipment in the request. If not provided, it will default to the current date and time.
		 * Post order/{orderId}/shipping_fulfillment
		 * @param {string} orderId The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.
		 * @param {ShippingFulfillmentDetails} requestBody fulfillment payload
		 * @return {void} 
		 */
		CreateShippingFulfillment(orderId: string, requestBody: ShippingFulfillmentDetails): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'order/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/shipping_fulfillment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Use this call to retrieve the contents of a fulfillment based on its unique identifier, <b>fulfillmentId</b> (combined with the associated order's <b>orderId</b>). The <b>fulfillmentId</b> value was originally generated by the <b>createShippingFulfillment</b> call, and is returned by the <b>getShippingFulfillments</b> call in the <b>members.fulfillmentId</b> field.
		 * Get order/{orderId}/shipping_fulfillment/{fulfillmentId}
		 * @param {string} fulfillmentId The unique identifier of the fulfillment. This eBay-generated value was created by the <b>Create Shipping Fulfillment</b> call, and returned by the <b>getShippingFulfillments</b> call in the <b>fulfillments.fulfillmentId</b> field; for example, <code>9405509699937003457459</code>.
		 * @param {string} orderId The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.
		 * @return {ShippingFulfillment} Success
		 */
		GetShippingFulfillment(fulfillmentId: string, orderId: string): Observable<ShippingFulfillment> {
			return this.http.get<ShippingFulfillment>(this.baseUri + 'order/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/shipping_fulfillment/' + (fulfillmentId == null ? '' : encodeURIComponent(fulfillmentId)), {});
		}

		/**
		 * Issue Refund
		 * <div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span> Due to EU &amp; UK Payments regulatory requirements, an additional security verification via Digital Signatures is required for certain API calls that are made on behalf of EU/UK sellers, including <b>issueRefund</b>. Please refer to <a href="/develop/guides/digital-signatures-for-apis " target="_blank">Digital Signatures for APIs</a> to learn more on the impacted APIs and the process to create signatures to be included in the HTTP payload.</p></div><br> This method allows a seller to issue a full or partial refund to a buyer for an order. Full or partial refunds can be issued at the order level or line item level.<br><br>The refunds issued through this method are processed asynchronously, so the refund will not show as 'Refunded' right away. A seller will have to make a subsequent <a href="/api-docs/sell/fulfillment/resources/order/methods/getOrder" target="_blank">getOrder</a> call to check the status of the refund.  The status of an order refund can be found in the <a href="/api-docs/sell/fulfillment/resources/order/methods/getOrder#response.paymentSummary.refunds.refundStatus" target="_blank">paymentSummary.refunds.refundStatus</a> field of the <a href="/api-docs/sell/fulfillment/resources/order/methods/getOrder" target="_blank">getOrder</a> response.
		 * Post order/{order_id}/issue_refund
		 * @param {string} order_id The unique identifier of the order. Order IDs are returned in the <b>getOrders</b> method (and <b>GetOrders</b> call of Trading API). The <b>issueRefund</b> method supports the legacy API Order IDs and REST API order IDs.
		 * @return {Refund} OK
		 */
		IssueRefund(order_id: string, requestBody: IssueRefundRequest): Observable<Refund> {
			return this.http.post<Refund>(this.baseUri + 'order/' + (order_id == null ? '' : encodeURIComponent(order_id)) + '/issue_refund', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Payment Dispute Details
		 * This method retrieves detailed information on a specific payment dispute. The payment dispute identifier is passed in as path parameter at the end of the call URI.<br><br>Below is a summary of the information that is retrieved:<ul><li>Current status of payment dispute</li><li>Amount of the payment dispute</li><li>Reason the payment dispute was opened</li><li>Order and line items associated with the payment dispute</li><li>Seller response options if an action is currently required on the payment dispute</li><li>Details on the results of the payment dispute if it has been closed</li><li>Details on any evidence that was provided by the seller to fight the payment dispute</li></ul>
		 * Get payment_dispute/{payment_dispute_id}
		 * @param {string} payment_dispute_id This is the unique identifier of the payment dispute. This path parameter must be passed in at the end of the call URI to identify the payment dispute to retrieve. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.
		 * @return {PaymentDispute} Success
		 */
		GetPaymentDispute(payment_dispute_id: string): Observable<PaymentDispute> {
			return this.http.get<PaymentDispute>(this.baseUri + 'payment_dispute/' + (payment_dispute_id == null ? '' : encodeURIComponent(payment_dispute_id)), {});
		}

		/**
		 * Accept Payment Dispute
		 * This method is used if the seller wishes to accept a payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br>The <strong>revision</strong> field in the request payload is required, and the <strong>returnAddress</strong> field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on theste fields.
		 * Post payment_dispute/{payment_dispute_id}/accept
		 * @param {string} payment_dispute_id This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to accept. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.
		 * @return {void} 
		 */
		AcceptPaymentDispute(payment_dispute_id: string, requestBody: AcceptPaymentDisputeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'payment_dispute/' + (payment_dispute_id == null ? '' : encodeURIComponent(payment_dispute_id)) + '/accept', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Payment Dispute Activity
		 * This method retrieve a log of activity for a payment dispute. The identifier of the payment dispute is passed in as a path parameter. The output includes a timestamp for each action of the payment dispute, from creation to resolution, and all steps in between.
		 * Get payment_dispute/{payment_dispute_id}/activity
		 * @param {string} payment_dispute_id This is the unique identifier of the payment dispute. This path parameter must be passed in at the end of the call URI to identify the payment dispute for which the user wishes to see all activity. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.
		 * @return {PaymentDisputeActivityHistory} Success
		 */
		GetActivities(payment_dispute_id: string): Observable<PaymentDisputeActivityHistory> {
			return this.http.get<PaymentDisputeActivityHistory>(this.baseUri + 'payment_dispute/' + (payment_dispute_id == null ? '' : encodeURIComponent(payment_dispute_id)) + '/activity', {});
		}

		/**
		 * Add an Evidence File
		 * This method is used by the seller to add one or more evidence files to address a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> All evidence files should be uploaded using <strong>addEvidence</strong> and <strong>updateEvidence</strong>  before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using <strong>contestPaymentDispute</strong> or through My eBay), the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods can no longer be used. In the <strong>evidenceRequests</strong> array of the <strong>getPaymentDispute</strong> response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute.</span><br><br>The file(s) to add are identified through the <strong>files</strong> array in the request payload.  Adding one or more new evidence files for a payment dispute triggers the creation of an evidence file, and the unique identifier for the new evidence file is automatically generated and returned in the <strong>evidenceId</strong> field of the <strong>addEvidence</strong> response payload upon a successful call.<br><br>The type of evidence being added should be specified in the <strong>evidenceType</strong> field. All files being added (if more than one) should correspond to this evidence type.<br><br>Upon a successful call, an <strong>evidenceId</strong> value is returned in the response. This indicates that a new evidence set has been created for the payment dispute, and this evidence set includes the evidence file(s) that were passed in to the <strong>fileId</strong> array. The <strong>evidenceId</strong> value will be needed if the seller wishes to add to the evidence set by using the <strong>updateEvidence</strong> method, or if they want to retrieve a specific evidence file within the evidence set by using the <strong>fetchEvidenceContent</strong> method.
		 * Post payment_dispute/{payment_dispute_id}/add_evidence
		 * @param {string} payment_dispute_id This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to add evidence for a contested payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.
		 * @return {AddEvidencePaymentDisputeResponse} Success
		 */
		AddEvidence(payment_dispute_id: string, requestBody: AddEvidencePaymentDisputeRequest): Observable<AddEvidencePaymentDisputeResponse> {
			return this.http.post<AddEvidencePaymentDisputeResponse>(this.baseUri + 'payment_dispute/' + (payment_dispute_id == null ? '' : encodeURIComponent(payment_dispute_id)) + '/add_evidence', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Contest Payment Dispute
		 * This method is used if the seller wishes to contest a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> Before contesting a payment dispute, the seller must upload all supporting files using the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods. Once the seller has officially contested the dispute (using <strong>contestPaymentDispute</strong>), the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods can no longer be used. In the <strong>evidenceRequests</strong> array of the <strong>getPaymentDispute</strong> response, eBay prompts the seller with the type of supporting file(s) that will be needed to contest the payment dispute.</span><br><br>If a seller decides to contest a payment dispute, that seller should be prepared to provide supporting documents such as proof of delivery, proof of authentication, or other documents. The type of supporting documents that the seller will provide will depend on why the buyer filed the payment dispute.<br><br>The <strong>revision</strong> field in the request payload is required, and the <strong>returnAddress</strong> field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on these fields.
		 * Post payment_dispute/{payment_dispute_id}/contest
		 * @param {string} payment_dispute_id This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to contest. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.
		 * @return {void} 
		 */
		ContestPaymentDispute(payment_dispute_id: string, requestBody: ContestPaymentDisputeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'payment_dispute/' + (payment_dispute_id == null ? '' : encodeURIComponent(payment_dispute_id)) + '/contest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Payment Dispute Evidence File
		 * This call retrieves a specific evidence file for a payment dispute. The following three identifying parameters are needed in the call URI:<ul><li><strong>payment_dispute_id</strong>: the identifier of the payment dispute. The identifier of each payment dispute is returned in the <strong>getPaymentDisputeSummaries</strong> response.</li><li><strong>evidence_id</strong>: the identifier of the evidential file set. The identifier of an evidential file set for a payment dispute is returned under the <strong>evidence</strong> array in the <strong>getPaymentDispute</strong> response.</li><li><strong>file_id</strong>: the identifier of an evidential file. This file must belong to the evidential file set identified through the <strong>evidence_id</strong> query parameter. The identifier of each evidential file is returned under the <strong>evidence.files</strong> array in the <strong>getPaymentDispute</strong> response.</li></ul><p>An actual binary file is returned if the call is successful. An error will occur if any of three identifiers are invalid.</p>
		 * Get payment_dispute/{payment_dispute_id}/fetch_evidence_content
		 * @param {string} payment_dispute_id The identifier of the payment dispute. The identifier of each payment dispute is returned in the <strong>getPaymentDisputeSummaries</strong> response. This identifier is passed in as a path parameter at the end of the call URI.
		 * @param {string} evidence_id The identifier of the evidential file set. The identifier of an evidential file set for a payment dispute is returned under the <strong>evidence</strong> array in the <strong>getPaymentDispute</strong> response.<br><br>Below is an example of the syntax to use for this query parameter:<br><br><code>evidence_id=12345678</code>
		 * @param {string} file_id The identifier of an evidential file. This file must belong to the evidential file set identified through the <strong>evidence_id</strong> query parameter. The identifier of each evidential file is returned under the <strong>evidence.files</strong> array in the <strong>getPaymentDispute</strong> response. <br><br>Below is an example of the syntax to use for this query parameter:<br><br><code>file_id=12345678</code> 
		 * @return {void} Success
		 */
		FetchEvidenceContent(payment_dispute_id: string, evidence_id: string, file_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'payment_dispute/' + (payment_dispute_id == null ? '' : encodeURIComponent(payment_dispute_id)) + '/fetch_evidence_content&evidence_id=' + (evidence_id == null ? '' : encodeURIComponent(evidence_id)) + '&file_id=' + (file_id == null ? '' : encodeURIComponent(file_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update evidence
		 * This method is used by the seller to update an existing evidence set for a payment dispute with one or more evidence files. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> All evidence files should be uploaded using <strong>addEvidence</strong> and <strong>updateEvidence</strong>  before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using <strong>contestPaymentDispute</strong> or through My eBay), the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods can no longer be used. In the <strong>evidenceRequests</strong> array of the <strong>getPaymentDispute</strong> response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute.</span><br><br>The unique identifier of the evidence set to update is specified through the <strong>evidenceId</strong> field, and the file(s) to add are identified through the <strong>files</strong> array in the request payload. The unique identifier for an evidence file is automatically generated and returned in the <strong>fileId</strong> field of the <strong>uploadEvidence</strong> response payload upon a successful call. Sellers must make sure to capture the <strong>fileId</strong> value for each evidence file that is uploaded with the <strong>uploadEvidence</strong> method.<br><br>The type of evidence being added should be specified in the <strong>evidenceType</strong> field.  All files being added (if more than one) should correspond to this evidence type.<br><br>Upon a successful call, an http status code of <code>204 Success</code> is returned. There is no response payload unless an error occurs. To verify that a new file is a part of the evidence set, the seller can use the <strong>fetchEvidenceContent</strong> method, passing in the proper <strong>evidenceId</strong> and <strong>fileId</strong> values.
		 * Post payment_dispute/{payment_dispute_id}/update_evidence
		 * @param {string} payment_dispute_id This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to update the evidence set for a contested payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.
		 * @return {void} 
		 */
		UpdateEvidence(payment_dispute_id: string, requestBody: UpdateEvidencePaymentDisputeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'payment_dispute/' + (payment_dispute_id == null ? '' : encodeURIComponent(payment_dispute_id)) + '/update_evidence', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload an Evidence File
		 * This method is used to upload an evidence file for a contested payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> The <strong>uploadEvidenceFile</strong> only uploads an encrypted, binary image file (using <strong>multipart/form-data</strong> HTTP request header), and does not have a JSON-based request payload.<br><br>Use 'file' as the name of the key that you use to upload the image file. The upload will not be successful if a different key name is used.<br><br>The three image formats supported at this time are <strong>.JPEG</strong>, <strong>.JPG</strong>, and <strong>.PNG</strong>.</span><br><br>After the file is successfully uploaded, the seller will need to grab the <strong>fileId</strong> value in the response payload to add this file to a new evidence set using the <strong>addEvidence</strong> method, or to add this file to an existing evidence set using the <strong>updateEvidence</strong> method.
		 * Post payment_dispute/{payment_dispute_id}/upload_evidence_file
		 * @param {string} payment_dispute_id This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to upload an evidence file. This identifier is automatically created by eBay after the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.
		 * @return {FileEvidence} Success
		 */
		UploadEvidenceFile(payment_dispute_id: string): Observable<FileEvidence> {
			return this.http.post<FileEvidence>(this.baseUri + 'payment_dispute/' + (payment_dispute_id == null ? '' : encodeURIComponent(payment_dispute_id)) + '/upload_evidence_file', null, {});
		}

		/**
		 * Search Payment Dispute by Filters
		 * This method is used retrieve one or more payment disputes filed against the seller. These payment disputes can be open or recently closed. The following filter types are available in the request payload to control the payment disputes that are returned:<ul><li>Dispute filed against a specific order (<b>order_id</b> parameter is used)</li><li>Dispute(s) filed by a specific buyer (<b>buyer_username</b> parameter is used)</li><li>Dispute(s) filed within a specific date range (<b>open_date_from</b> and/or <b>open_date_to</b> parameters are used)</li><li>Disputes in a specific state (<b>payment_dispute_status</b> parameter is used)</li></ul>More than one of these filter types can be used together. See the request payload request fields for more information about how each filter is used.<br><br>If none of the filters are used, all open and recently closed payment disputes are returned.<br><br>Pagination is also available. See the <b>limit</b> and <b>offset</b> fields for more information on how pagination is used for this method.
		 * Get payment_dispute_summary
		 * @param {string} order_id This filter is used if the seller wishes to retrieve one or more payment disputes filed against a specific order. It is possible that there can be more than one dispute filed against an order if the order has multiple line items. If this filter is used, any other filters are ignored.
		 * @param {string} buyer_username This filter is used if the seller wishes to retrieve one or more payment disputes opened by a specific seller. The string that is passed in to this query parameter is the eBay user ID of the buyer.
		 * @param {string} open_date_from The <b>open_date_from</b> and/or <b>open_date_to</b> date filters are used if the seller wishes to retrieve payment disputes opened within a specific date range. A maximum date range that may be set with the <b>open_date_from</b> and/or <b>open_date_to</b> filters is 90 days. These date filters use the ISO-8601 24-hour date and time format, and time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu.<br><br>The <b>open_date_from</b> field sets the beginning date of the date range, and can be set as far back as 18 months from the present time. If a <b>open_date_from</b> field is used, but a <b>open_date_to</b> field is not used, the <b>open_date_to</b> value will default to 90 days after the date specified in the <b>open_date_from</b> field, or to the present time if less than 90 days in the past.<br><br>The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.
		 * @param {string} open_date_to The <b>open_date_from</b> and/or <b>open_date_to</b> date filters are used if the seller wishes to retrieve payment disputes opened within a specific date range. A maximum date range that may be set with the <b>open_date_from</b> and/or <b>open_date_to</b> filters is 90 days. These date filters use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu.<br><br>The <b>open_date_to</b> field sets the ending date of the date range, and can be set up to 90 days from the date set in the <b>open_date_from</b> field. <br><br>The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.
		 * @param {string} payment_dispute_status This filter is used if the seller wishes to only retrieve payment disputes in a specific state. More than one value can be specified. If no <b>payment_dispute_status</b> filter is used, payment disputes in all states are returned in the response. See <strong>DisputeStateEnum</strong> type for supported values.
		 * @param {string} limit The value passed in this query parameter sets the maximum number of payment disputes to return per page of data. The value passed in this field should be an integer from 1 to 200. If this query parameter is not set, up to 200 records will be returned on each page of results.<br><br><b>Min</b>: 1; <b>Max</b>: 200; <b>Default</b>: 200
		 * @param {string} offset This field is used to specify the number of records to skip in the result set before returning the first payment dispute in the paginated response. A zero-based index is used, so if you set the <b>offset</b> value to <code>0</code> (default value), the first payment dispute in the result set appears at the top of the response. <br><br>Combine <b>offset</b> with the <b>limit</b> parameter to control the payment disputes returned in the response. For example, if you supply an <b>offset</b> value of <code>0</code> and a <b>limit</b> value of <code>10</code>, the response will contain the first 10 payment disputes from the result set that matches the input criteria. If you supply an <b>offset</b> value of <code>10</code> and a <b>limit</b> value of <code>20</code>, the response will contain payment disputes 11-30 from the result set that matches the input criteria.<br><br><b>Min</b>: 0; <b>Max</b>: total number of payment disputes - 1; <b>Default</b>: 0
		 * @return {DisputeSummaryResponse} Success
		 */
		GetPaymentDisputeSummaries(order_id: string | null | undefined, buyer_username: string | null | undefined, open_date_from: string | null | undefined, open_date_to: string | null | undefined, payment_dispute_status: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined): Observable<DisputeSummaryResponse> {
			return this.http.get<DisputeSummaryResponse>(this.baseUri + 'payment_dispute_summary?order_id=' + (order_id == null ? '' : encodeURIComponent(order_id)) + '&buyer_username=' + (buyer_username == null ? '' : encodeURIComponent(buyer_username)) + '&open_date_from=' + (open_date_from == null ? '' : encodeURIComponent(open_date_from)) + '&open_date_to=' + (open_date_to == null ? '' : encodeURIComponent(open_date_to)) + '&payment_dispute_status=' + (payment_dispute_status == null ? '' : encodeURIComponent(payment_dispute_status)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}
	}

}

