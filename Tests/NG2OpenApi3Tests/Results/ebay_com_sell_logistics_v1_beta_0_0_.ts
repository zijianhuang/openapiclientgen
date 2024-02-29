import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This complex type contains information about a shipping option that can be purchased in addition to the base shipping cost of a recommended rate. Additional options for each rate are defined, named, and offered by the selected shipping carrier. Examples include shipping insurance or the requirement for a recipient signature. */
	export interface AdditionalOption {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		additionalCost?: Amount;

		/** The name of a shipping option that can be purchased in addition to the base shipping cost of this rate. The value supplied in this field must match exactly the option name as supplied by the selected rate. */
		optionType?: string | null;
	}

	/** This complex type contains information about a shipping option that can be purchased in addition to the base shipping cost of a recommended rate. Additional options for each rate are defined, named, and offered by the selected shipping carrier. Examples include shipping insurance or the requirement for a recipient signature. */
	export interface AdditionalOptionFormProperties {

		/** The name of a shipping option that can be purchased in addition to the base shipping cost of this rate. The value supplied in this field must match exactly the option name as supplied by the selected rate. */
		optionType: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalOptionFormGroup() {
		return new FormGroup<AdditionalOptionFormProperties>({
			optionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that describes the value of a monetary amount as represented by a global currency. */
	export interface Amount {

		/** The base currency applied to the <b>value</b> field to establish a monetary amount.  <br><br>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html" title="https://www.iso.org" target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.  <br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		currency?: string | null;

		/** The monetary amount in the specified <b>currency</b>. */
		value?: string | null;
	}

	/** A complex type that describes the value of a monetary amount as represented by a global currency. */
	export interface AmountFormProperties {

		/** The base currency applied to the <b>value</b> field to establish a monetary amount.  <br><br>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html" title="https://www.iso.org" target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.  <br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		currency: FormControl<string | null | undefined>,

		/** The monetary amount in the specified <b>currency</b>. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmountFormGroup() {
		return new FormGroup<AmountFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type contains contact information for an individual buyer or seller. */
	export interface Contact {

		/** The company name with which the contact is associated. */
		companyName?: string | null;

		/** This complex type specifies the details of a geographical address. */
		contactAddress?: ContactAddress;

		/** The contact's full name. */
		fullName?: string | null;

		/** This complex type contains a string field representing a telephone number. */
		primaryPhone?: PhoneNumber;
	}

	/** This complex type contains contact information for an individual buyer or seller. */
	export interface ContactFormProperties {

		/** The company name with which the contact is associated. */
		companyName: FormControl<string | null | undefined>,

		/** The contact's full name. */
		fullName: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type specifies the details of a geographical address. */
	export interface ContactAddress {

		/** The first line of the street address. */
		addressLine1?: string | null;

		/** The second line of the street address. Use this field for additional address information, such as a suite or apartment number. */
		addressLine2?: string | null;

		/** The city in which the address is located. */
		city?: string | null;

		/** The country of the address, represented as two-letter <a href="https://www.iso.org/iso-3166-country-codes.html" title="https://www.iso.org" target="_blank">ISO 3166</a> country code. For example, <code>US</code> represents the United States and <code>DE</code> represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/bas:CountryCodeEnum'>eBay API documentation</a> */
		countryCode?: string | null;

		/** The county (not country) in which the address is located. Counties typically contain multiple cities or towns. */
		county?: string | null;

		/** The postal code of the address. */
		postalCode?: string | null;

		/** The state or province in which the address is located. States and provinces often contain multiple counties. */
		stateOrProvince?: string | null;
	}

	/** This complex type specifies the details of a geographical address. */
	export interface ContactAddressFormProperties {

		/** The first line of the street address. */
		addressLine1: FormControl<string | null | undefined>,

		/** The second line of the street address. Use this field for additional address information, such as a suite or apartment number. */
		addressLine2: FormControl<string | null | undefined>,

		/** The city in which the address is located. */
		city: FormControl<string | null | undefined>,

		/** The country of the address, represented as two-letter <a href="https://www.iso.org/iso-3166-country-codes.html" title="https://www.iso.org" target="_blank">ISO 3166</a> country code. For example, <code>US</code> represents the United States and <code>DE</code> represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/bas:CountryCodeEnum'>eBay API documentation</a> */
		countryCode: FormControl<string | null | undefined>,

		/** The county (not country) in which the address is located. Counties typically contain multiple cities or towns. */
		county: FormControl<string | null | undefined>,

		/** The postal code of the address. */
		postalCode: FormControl<string | null | undefined>,

		/** The state or province in which the address is located. States and provinces often contain multiple counties. */
		stateOrProvince: FormControl<string | null | undefined>,
	}
	export function CreateContactAddressFormGroup() {
		return new FormGroup<ContactAddressFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			stateOrProvince: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type contains a string field representing a telephone number. */
	export interface PhoneNumber {

		/** A telephone number. */
		phoneNumber?: string | null;
	}

	/** This complex type contains a string field representing a telephone number. */
	export interface PhoneNumberFormProperties {

		/** A telephone number. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberFormGroup() {
		return new FormGroup<PhoneNumberFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type contains the request payload for the <b>createFromShippingQuote</b> method. */
	export interface CreateShipmentFromQuoteRequest {

		/** Supply a list of one or more shipping options that the seller wants to purchase for this shipment.  <br><br>The <b>baseShippingCost</b> field that's associated with the selected shipping rate is the cost of the base service offered in the rate. In addition to the base service, sellers can add additional shipping services to the base service. Shipping options include things such as shipping insurance or a recipient's signature upon delivery. The cost of any added services is summed with the base shipping cost to determine the final cost for the shipment. All options added to the shipment must be chosen from the set of shipping options offered with the selected rate. */
		additionalOptions?: Array<AdditionalOption>;

		/** Optional text to be printed on the shipping label if the selected shipping carrier supports custom messages on their labels. */
		labelCustomMessage?: string | null;

		/** The seller's desired label size. Any supplied value is applied only if the shipping carrier supports multiple label sizes, otherwise the carrier's default label size is used.  <br><brCurrently, the only valid value is: <code>4"x6"</code> */
		labelSize?: string | null;

		/** The eBay-assigned ID of the shipping rate that the seller selected for the shipment. This value is generated by a call to <b>createShippingQuote</b> and is returned in the <b>rates.rateId</b> field. */
		rateId?: string | null;

		/** This complex type contains contact information for an individual buyer or seller. */
		returnTo?: Contact;

		/** The unique eBay-assigned ID of the shipping quote that was generated by a call to <b>createShippingQuote</b>. */
		shippingQuoteId?: string | null;
	}

	/** This complex type contains the request payload for the <b>createFromShippingQuote</b> method. */
	export interface CreateShipmentFromQuoteRequestFormProperties {

		/** Optional text to be printed on the shipping label if the selected shipping carrier supports custom messages on their labels. */
		labelCustomMessage: FormControl<string | null | undefined>,

		/** The seller's desired label size. Any supplied value is applied only if the shipping carrier supports multiple label sizes, otherwise the carrier's default label size is used.  <br><brCurrently, the only valid value is: <code>4"x6"</code> */
		labelSize: FormControl<string | null | undefined>,

		/** The eBay-assigned ID of the shipping rate that the seller selected for the shipment. This value is generated by a call to <b>createShippingQuote</b> and is returned in the <b>rates.rateId</b> field. */
		rateId: FormControl<string | null | undefined>,

		/** The unique eBay-assigned ID of the shipping quote that was generated by a call to <b>createShippingQuote</b>. */
		shippingQuoteId: FormControl<string | null | undefined>,
	}
	export function CreateCreateShipmentFromQuoteRequestFormGroup() {
		return new FormGroup<CreateShipmentFromQuoteRequestFormProperties>({
			labelCustomMessage: new FormControl<string | null | undefined>(undefined),
			labelSize: new FormControl<string | null | undefined>(undefined),
			rateId: new FormControl<string | null | undefined>(undefined),
			shippingQuoteId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type defines the dimensions of a package to be shipped. */
	export interface Dimensions {

		/** The numeric value of the height of the package. */
		height?: string | null;

		/** The numeric value of the length of the package. */
		length?: string | null;

		/** The unit of measure used to express the height, length, and width of the package. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:LengthUnitOfMeasureEnum'>eBay API documentation</a> */
		unit?: string | null;

		/** The numeric value of the width of the package. */
		width?: string | null;
	}

	/** This complex type defines the dimensions of a package to be shipped. */
	export interface DimensionsFormProperties {

		/** The numeric value of the height of the package. */
		height: FormControl<string | null | undefined>,

		/** The numeric value of the length of the package. */
		length: FormControl<string | null | undefined>,

		/** The unit of measure used to express the height, length, and width of the package. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:LengthUnitOfMeasureEnum'>eBay API documentation</a> */
		unit: FormControl<string | null | undefined>,

		/** The numeric value of the width of the package. */
		width: FormControl<string | null | undefined>,
	}
	export function CreateDimensionsFormGroup() {
		return new FormGroup<DimensionsFormProperties>({
			height: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container that defines the elements of error and warning message. */
	export interface Error {

		/** The category type for this error or warning. It takes a string that can have one of three values:<ul><li><code>Application</code>: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service's business logic, system failures, or request errors from a dependency.</li><li><code>Business</code>: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as "Seller does not ship item to Antarctica" or "Buyer ineligible to purchase an alcoholic item". Business errors are not syntactical input errors.</li><li><code>Request</code>: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.</li></ul> */
		category?: string | null;

		/** Name of the domain containing the service or application. */
		domain?: string | null;

		/**
		 * A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId?: number | null;

		/** Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use <i>JSONPath</i> notation. */
		inputRefIds?: Array<string>;

		/** An expanded version of message that should be around 100-200 characters long, but is not required to be such. */
		longMessage?: string | null;

		/** An end user and app-developer friendly device agnostic message. It explains what the error or warning is, and how to fix it (in a general sense). Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale. */
		message?: string | null;

		/** Identifies specific response elements associated with the error, if any. Path format is the same as <code>inputRefId</code>. */
		outputRefIds?: Array<string>;

		/** This optional complex field type contains a list of one or more context-specific <code>ErrorParameter</code> objects, with each item in the list entry being a parameter (or input field name) that caused an error condition. Each <code>ErrorParameter</code> object consists of two fields, a <code>name</code> and a <code>value</code>. */
		parameters?: Array<ErrorParameter>;

		/** Name of the domain's subsystem or subdivision. For example, checkout is a subdomain in the buying domain. */
		subdomain?: string | null;
	}

	/** A container that defines the elements of error and warning message. */
	export interface ErrorFormProperties {

		/** The category type for this error or warning. It takes a string that can have one of three values:<ul><li><code>Application</code>: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service's business logic, system failures, or request errors from a dependency.</li><li><code>Business</code>: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as "Seller does not ship item to Antarctica" or "Buyer ineligible to purchase an alcoholic item". Business errors are not syntactical input errors.</li><li><code>Request</code>: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.</li></ul> */
		category: FormControl<string | null | undefined>,

		/** Name of the domain containing the service or application. */
		domain: FormControl<string | null | undefined>,

		/**
		 * A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId: FormControl<number | null | undefined>,

		/** An expanded version of message that should be around 100-200 characters long, but is not required to be such. */
		longMessage: FormControl<string | null | undefined>,

		/** An end user and app-developer friendly device agnostic message. It explains what the error or warning is, and how to fix it (in a general sense). Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale. */
		message: FormControl<string | null | undefined>,

		/** Name of the domain's subsystem or subdivision. For example, checkout is a subdomain in the buying domain. */
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


	/** Container for an error parameter. */
	export interface ErrorParameter {

		/** Name of the entity that threw the error. */
		name?: string | null;

		/** A description of the error. */
		value?: string | null;
	}

	/** Container for an error parameter. */
	export interface ErrorParameterFormProperties {

		/** Name of the entity that threw the error. */
		name: FormControl<string | null | undefined>,

		/** A description of the error. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorParameterFormGroup() {
		return new FormGroup<ErrorParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type defines an order from which a seller is including one or more line items in a single package to be shipped. */
	export interface Order {

		/** The e-commerce platform or environment where the order was created. Use the value <code>EBAY</code> to get the rates available for eBay orders. */
		channel?: string | null;

		/** The unique ID of the order supplied by the channel of origin. For eBay orders, this would be the <b>orderId</b>. */
		orderId?: string | null;
	}

	/** This complex type defines an order from which a seller is including one or more line items in a single package to be shipped. */
	export interface OrderFormProperties {

		/** The e-commerce platform or environment where the order was created. Use the value <code>EBAY</code> to get the rates available for eBay orders. */
		channel: FormControl<string | null | undefined>,

		/** The unique ID of the order supplied by the channel of origin. For eBay orders, this would be the <b>orderId</b>. */
		orderId: FormControl<string | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type specifies the dimensions and weight of a package. */
	export interface PackageSpecification {

		/** This complex type defines the dimensions of a package to be shipped. */
		dimensions?: Dimensions;

		/** This complex type contains information about the weight of an object such as a shipping package. */
		weight?: Weight;
	}

	/** This complex type specifies the dimensions and weight of a package. */
	export interface PackageSpecificationFormProperties {
	}
	export function CreatePackageSpecificationFormGroup() {
		return new FormGroup<PackageSpecificationFormProperties>({
		});

	}


	/** This complex type contains information about the weight of an object such as a shipping package. */
	export interface Weight {

		/** The unit of measurement used to specify the weight of a shipping package. Both the <strong>unit</strong> and <strong>value</strong> fields are required if the <strong>weight</strong> container is used. If the English system of measurement is being used, the applicable values for weight units are <code>POUND</code> and <code>OUNCE</CODE>. If the metric system of measurement is being used, the applicable values for weight units are <code>KILOGRAM</code> and <code>GRAM</code>. The metric system is used by most countries outside of the US. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:WeightUnitOfMeasureEnum'>eBay API documentation</a> */
		unit?: string | null;

		/** The numeric value of the weight of the package, as measured by the value of <b>unit</b>. */
		value?: string | null;
	}

	/** This complex type contains information about the weight of an object such as a shipping package. */
	export interface WeightFormProperties {

		/** The unit of measurement used to specify the weight of a shipping package. Both the <strong>unit</strong> and <strong>value</strong> fields are required if the <strong>weight</strong> container is used. If the English system of measurement is being used, the applicable values for weight units are <code>POUND</code> and <code>OUNCE</CODE>. If the metric system of measurement is being used, the applicable values for weight units are <code>KILOGRAM</code> and <code>GRAM</code>. The metric system is used by most countries outside of the US. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:WeightUnitOfMeasureEnum'>eBay API documentation</a> */
		unit: FormControl<string | null | undefined>,

		/** The numeric value of the weight of the package, as measured by the value of <b>unit</b>. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWeightFormGroup() {
		return new FormGroup<WeightFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type defines a time window for the pickup of a package. */
	export interface PickupSlot {

		/** The date and time the pickup slot ends, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code> */
		pickupSlotEndTime?: string | null;

		/** Seller-defined name for the pickup slot. <!-- Max characters? --> */
		pickupSlotId?: string | null;

		/** The date and time the pickup slot begins, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> UTC string. */
		pickupSlotStartTime?: string | null;

		/** The time zone of the pickup location, returned as <a href="https://www.iana.org/time-zones" target="_blank">Time Zone Database</a> ID (also know as an Olson time zone ID). */
		pickupSlotTimeZone?: string | null;
	}

	/** This complex type defines a time window for the pickup of a package. */
	export interface PickupSlotFormProperties {

		/** The date and time the pickup slot ends, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code> */
		pickupSlotEndTime: FormControl<string | null | undefined>,

		/** Seller-defined name for the pickup slot. <!-- Max characters? --> */
		pickupSlotId: FormControl<string | null | undefined>,

		/** The date and time the pickup slot begins, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> UTC string. */
		pickupSlotStartTime: FormControl<string | null | undefined>,

		/** The time zone of the pickup location, returned as <a href="https://www.iana.org/time-zones" target="_blank">Time Zone Database</a> ID (also know as an Olson time zone ID). */
		pickupSlotTimeZone: FormControl<string | null | undefined>,
	}
	export function CreatePickupSlotFormGroup() {
		return new FormGroup<PickupSlotFormProperties>({
			pickupSlotEndTime: new FormControl<string | null | undefined>(undefined),
			pickupSlotId: new FormControl<string | null | undefined>(undefined),
			pickupSlotStartTime: new FormControl<string | null | undefined>(undefined),
			pickupSlotTimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The "rate" that has been selected and purchased for the shipment, as referenced by the <b>rateId</b> value. */
	export interface PurchasedRate {

		/** An list of additional, optional features that have been purchased for the shipment. */
		additionalOptions?: Array<AdditionalOption>;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		baseShippingCost?: Amount;

		/** The time zone of the destination according to <a href="https://www.iana.org/time-zones" target="_blank">Time Zone Database</a>. For example, "America/Los_Angeles". */
		destinationTimeZone?: string | null;

		/** A string value representing maximum (latest) estimated delivery time, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code> */
		maxEstimatedDeliveryDate?: string | null;

		/** A string value representing minimum (earliest) estimated delivery time, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a>ISO 8601</a> UTC string. */
		minEstimatedDeliveryDate?: string | null;

		/** A list of pickup networks compatible with the shipping service. */
		pickupNetworks?: Array<string>;

		/** This unique eBay-assigned ID value is returned only if the shipment has been configured for a scheduled pickup. */
		pickupSlotId?: string | null;

		/** The type of pickup or drop off configured for the shipment. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:PickupTypeEnum'>eBay API documentation</a> */
		pickupType?: string | null;

		/** The eBay-generated ID of the shipping rate that the seller has chosen to purchase for the shipment. */
		rateId?: string | null;

		/** The ID code for the carrier that was selected for the package shipment. */
		shippingCarrierCode?: string | null;

		/** The name of the shipping carrier. */
		shippingCarrierName?: string | null;

		/** The unique eBay-generated ID of the <i>shipping quote</i> from which the seller selected a shipping rate (<b>rateId</b>). */
		shippingQuoteId?: string | null;

		/** String ID code for the shipping service selected for the package shipment. This is a service that the shipping carrier supplies. */
		shippingServiceCode?: string | null;

		/** The name of the shipping service. */
		shippingServiceName?: string | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		totalShippingCost?: Amount;
	}

	/** The "rate" that has been selected and purchased for the shipment, as referenced by the <b>rateId</b> value. */
	export interface PurchasedRateFormProperties {

		/** The time zone of the destination according to <a href="https://www.iana.org/time-zones" target="_blank">Time Zone Database</a>. For example, "America/Los_Angeles". */
		destinationTimeZone: FormControl<string | null | undefined>,

		/** A string value representing maximum (latest) estimated delivery time, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code> */
		maxEstimatedDeliveryDate: FormControl<string | null | undefined>,

		/** A string value representing minimum (earliest) estimated delivery time, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a>ISO 8601</a> UTC string. */
		minEstimatedDeliveryDate: FormControl<string | null | undefined>,

		/** This unique eBay-assigned ID value is returned only if the shipment has been configured for a scheduled pickup. */
		pickupSlotId: FormControl<string | null | undefined>,

		/** The type of pickup or drop off configured for the shipment. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:PickupTypeEnum'>eBay API documentation</a> */
		pickupType: FormControl<string | null | undefined>,

		/** The eBay-generated ID of the shipping rate that the seller has chosen to purchase for the shipment. */
		rateId: FormControl<string | null | undefined>,

		/** The ID code for the carrier that was selected for the package shipment. */
		shippingCarrierCode: FormControl<string | null | undefined>,

		/** The name of the shipping carrier. */
		shippingCarrierName: FormControl<string | null | undefined>,

		/** The unique eBay-generated ID of the <i>shipping quote</i> from which the seller selected a shipping rate (<b>rateId</b>). */
		shippingQuoteId: FormControl<string | null | undefined>,

		/** String ID code for the shipping service selected for the package shipment. This is a service that the shipping carrier supplies. */
		shippingServiceCode: FormControl<string | null | undefined>,

		/** The name of the shipping service. */
		shippingServiceName: FormControl<string | null | undefined>,
	}
	export function CreatePurchasedRateFormGroup() {
		return new FormGroup<PurchasedRateFormProperties>({
			destinationTimeZone: new FormControl<string | null | undefined>(undefined),
			maxEstimatedDeliveryDate: new FormControl<string | null | undefined>(undefined),
			minEstimatedDeliveryDate: new FormControl<string | null | undefined>(undefined),
			pickupSlotId: new FormControl<string | null | undefined>(undefined),
			pickupType: new FormControl<string | null | undefined>(undefined),
			rateId: new FormControl<string | null | undefined>(undefined),
			shippingCarrierCode: new FormControl<string | null | undefined>(undefined),
			shippingCarrierName: new FormControl<string | null | undefined>(undefined),
			shippingQuoteId: new FormControl<string | null | undefined>(undefined),
			shippingServiceCode: new FormControl<string | null | undefined>(undefined),
			shippingServiceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type contains live quote information about a shipping service that's available for a given shipping quote request, including the shipping carrier and service, delivery window, shipping cost, and additional shipping options. */
	export interface Rate {

		/** Contains service and pricing information for one or more shipping options that are offered by the carrier and can be purchased in addition to the base shipping service provided by this rate. Shipping options can include items such as <code>INSURANCE</code> and <code>SIGNATURE</code>. */
		additionalOptions?: Array<AdditionalOption>;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		baseShippingCost?: Amount;

		/** The name of the time zone region, as defined in the <a href="http://www.iana.org/time-zones"  target="_blank">IANA Time Zone Database</a>, to which the package is being shipped.  <br><br>Delivery dates are calculated relative to this time zone.  <br><br><span class="tablenote"><strong>Note:</strong> This is different from a Coordinated Universal Time (UTC) offset. For example, the <i>America/Los_Angeles</i> time zone identifies a region with the UTC standard time offset of <code>-08:00</code>, but so do several other time zones, including <i>America/Tijuana</i>,<i>America/Dawson</i>, and <i>Pacific/Pitcairn</i>.</span> */
		destinationTimeZone?: string | null;

		/** The latest stated date and time the shipment will be delivered at this rate.  <br><br>The time stamp is formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code> */
		maxEstimatedDeliveryDate?: string | null;

		/** The estimated earliest date and time the shipment will be delivered at this rate. The time stamp is formatted as an ISO 8601 UTC string. */
		minEstimatedDeliveryDate?: string | null;

		/** A list of pickup networks compatible with the shipping service. */
		pickupNetworks?: Array<string>;

		/** A list of available pickup slots for the package. */
		pickupSlots?: Array<PickupSlot>;

		/** The type of pickup or drop-off service associated with the <b>pickupSlots</b> time frames. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:PickupTypeEnum'>eBay API documentation</a> */
		pickupType?: string | null;

		/** The unique eBay-assigned ID for this shipping rate. */
		rateId?: string | null;

		/** A list of reasons this rate is recommended. Available values are: <ul> <li><code>BUYER_CHOSEN</code> &mdash; The rate meets or exceeds the requirements of the buyer's preferred shipping option.</li> <li><code>CHEAPEST_ON_TIME</code> &mdash; The rate is the cheapest rate available that will provide delivery within the seller's time frame commitment.</li>  <li><code>EBAY_PLUS_OK</code> &mdash; The rate complies with the shipping requirements of the eBay Plus program.</li> <li><code>FASTEST_ON_TIME</code> &mdash; The rate has the fastest shipping time, and will provide delivery within the seller's time frame commitment.</li> <li><code>GUARANTEED_DELIVERY_OK</code> &mdash; The rate complies with the shipping requirements of the eBay Guaranteed Delivery program.</li></ul> */
		rateRecommendation?: Array<string>;

		/** The code name of the shipping carrier who will provide the service identified by <b>shippingServiceCode</b>. */
		shippingCarrierCode?: string | null;

		/** The common name of the shipping carrier. */
		shippingCarrierName?: string | null;

		/** The code name of the shipping service to be provided by the carrier identified by <b>shippingCarrierCode</b>. */
		shippingServiceCode?: string | null;

		/** The common name of the shipping service. */
		shippingServiceName?: string | null;
	}

	/** This complex type contains live quote information about a shipping service that's available for a given shipping quote request, including the shipping carrier and service, delivery window, shipping cost, and additional shipping options. */
	export interface RateFormProperties {

		/** The name of the time zone region, as defined in the <a href="http://www.iana.org/time-zones"  target="_blank">IANA Time Zone Database</a>, to which the package is being shipped.  <br><br>Delivery dates are calculated relative to this time zone.  <br><br><span class="tablenote"><strong>Note:</strong> This is different from a Coordinated Universal Time (UTC) offset. For example, the <i>America/Los_Angeles</i> time zone identifies a region with the UTC standard time offset of <code>-08:00</code>, but so do several other time zones, including <i>America/Tijuana</i>,<i>America/Dawson</i>, and <i>Pacific/Pitcairn</i>.</span> */
		destinationTimeZone: FormControl<string | null | undefined>,

		/** The latest stated date and time the shipment will be delivered at this rate.  <br><br>The time stamp is formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code> */
		maxEstimatedDeliveryDate: FormControl<string | null | undefined>,

		/** The estimated earliest date and time the shipment will be delivered at this rate. The time stamp is formatted as an ISO 8601 UTC string. */
		minEstimatedDeliveryDate: FormControl<string | null | undefined>,

		/** The type of pickup or drop-off service associated with the <b>pickupSlots</b> time frames. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:PickupTypeEnum'>eBay API documentation</a> */
		pickupType: FormControl<string | null | undefined>,

		/** The unique eBay-assigned ID for this shipping rate. */
		rateId: FormControl<string | null | undefined>,

		/** The code name of the shipping carrier who will provide the service identified by <b>shippingServiceCode</b>. */
		shippingCarrierCode: FormControl<string | null | undefined>,

		/** The common name of the shipping carrier. */
		shippingCarrierName: FormControl<string | null | undefined>,

		/** The code name of the shipping service to be provided by the carrier identified by <b>shippingCarrierCode</b>. */
		shippingServiceCode: FormControl<string | null | undefined>,

		/** The common name of the shipping service. */
		shippingServiceName: FormControl<string | null | undefined>,
	}
	export function CreateRateFormGroup() {
		return new FormGroup<RateFormProperties>({
			destinationTimeZone: new FormControl<string | null | undefined>(undefined),
			maxEstimatedDeliveryDate: new FormControl<string | null | undefined>(undefined),
			minEstimatedDeliveryDate: new FormControl<string | null | undefined>(undefined),
			pickupType: new FormControl<string | null | undefined>(undefined),
			rateId: new FormControl<string | null | undefined>(undefined),
			shippingCarrierCode: new FormControl<string | null | undefined>(undefined),
			shippingCarrierName: new FormControl<string | null | undefined>(undefined),
			shippingServiceCode: new FormControl<string | null | undefined>(undefined),
			shippingServiceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label.  */
	export interface Shipment {

		/** This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request. */
		cancellation?: ShipmentCancellation;

		/** The date and time the shipment was created, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code> */
		creationDate?: string | null;

		/** If supported by the selected shipping carrier, this field can contain optional seller text to be printed on the shipping label. */
		labelCustomMessage?: string | null;

		/** The direct URL the seller can use to download an image of the shipping label. By default, the file format is PDF. See <a href="/api-docs/sell/logistics/resources/shipment/methods/downloadLabelFile">downloadLabelFile</a> for requesting different response file formats. */
		labelDownloadUrl?: string | null;

		/** The seller's desired label size. The support for multi-sized labels is shipping-carrier specific and if the size requested in the <b>creaateFromShippingQuote</b> call matches a size the carrier supports, the value will be represented here in the shipment. <br><br>Currently, the only valid value is: <code>4"x6"</code> */
		labelSize?: string | null;

		/** This list value is optionally assigned by the seller. When present, each element in the returned list contains seller-assigned information about an order (such as an order number). Because a package can contain all or part of one or more orders, this field provides a way for sellers to identify the packages that contain specific orders. */
		orders?: Array<Order>;

		/** This complex type specifies the dimensions and weight of a package. */
		packageSpecification?: PackageSpecification;

		/** The "rate" that has been selected and purchased for the shipment, as referenced by the <b>rateId</b> value. */
		rate?: PurchasedRate;

		/** This complex type contains contact information for an individual buyer or seller. */
		returnTo?: Contact;

		/** This complex type contains contact information for an individual buyer or seller. */
		shipFrom?: Contact;

		/** This complex type contains contact information for an individual buyer or seller. */
		shipTo?: Contact;

		/** The unique eBay-assigned ID for the shipment. The ID is generated when the shipment is created by a call to <b>createFromShippingQuote</b>. */
		shipmentId?: string | null;

		/** A unique carrier-assigned ID string that can be used to track the shipment. */
		shipmentTrackingNumber?: string | null;
	}

	/** This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label.  */
	export interface ShipmentFormProperties {

		/** The date and time the shipment was created, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code> */
		creationDate: FormControl<string | null | undefined>,

		/** If supported by the selected shipping carrier, this field can contain optional seller text to be printed on the shipping label. */
		labelCustomMessage: FormControl<string | null | undefined>,

		/** The direct URL the seller can use to download an image of the shipping label. By default, the file format is PDF. See <a href="/api-docs/sell/logistics/resources/shipment/methods/downloadLabelFile">downloadLabelFile</a> for requesting different response file formats. */
		labelDownloadUrl: FormControl<string | null | undefined>,

		/** The seller's desired label size. The support for multi-sized labels is shipping-carrier specific and if the size requested in the <b>creaateFromShippingQuote</b> call matches a size the carrier supports, the value will be represented here in the shipment. <br><br>Currently, the only valid value is: <code>4"x6"</code> */
		labelSize: FormControl<string | null | undefined>,

		/** The unique eBay-assigned ID for the shipment. The ID is generated when the shipment is created by a call to <b>createFromShippingQuote</b>. */
		shipmentId: FormControl<string | null | undefined>,

		/** A unique carrier-assigned ID string that can be used to track the shipment. */
		shipmentTrackingNumber: FormControl<string | null | undefined>,
	}
	export function CreateShipmentFormGroup() {
		return new FormGroup<ShipmentFormProperties>({
			creationDate: new FormControl<string | null | undefined>(undefined),
			labelCustomMessage: new FormControl<string | null | undefined>(undefined),
			labelDownloadUrl: new FormControl<string | null | undefined>(undefined),
			labelSize: new FormControl<string | null | undefined>(undefined),
			shipmentId: new FormControl<string | null | undefined>(undefined),
			shipmentTrackingNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request. */
	export interface ShipmentCancellation {

		/** The time and date the request was made to cancel the shipment, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> UTC string. */
		cancellationRequestedDate?: string | null;

		/** This enum specifies the current cancellation status of a shipment, if a cancellation request has been made. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:ShipmentCancellationStatusEnum'>eBay API documentation</a> */
		cancellationStatus?: string | null;
	}

	/** This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request. */
	export interface ShipmentCancellationFormProperties {

		/** The time and date the request was made to cancel the shipment, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> UTC string. */
		cancellationRequestedDate: FormControl<string | null | undefined>,

		/** This enum specifies the current cancellation status of a shipment, if a cancellation request has been made. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:ShipmentCancellationStatusEnum'>eBay API documentation</a> */
		cancellationStatus: FormControl<string | null | undefined>,
	}
	export function CreateShipmentCancellationFormGroup() {
		return new FormGroup<ShipmentCancellationFormProperties>({
			cancellationRequestedDate: new FormControl<string | null | undefined>(undefined),
			cancellationStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type describes a "shipping quote," which contains the parameters for a package shipment. The shipping quote contains a list of "live quotes" or <i>rates</i> for the shipment. Rates are offerd by a carrier for a particular service, of set of services, for shipping the package. Included in the shipping quote are the package specifications, the shipment's origin and destination addresses, and the shipping parameters specified by the seller.  <br><br>Use the <b>rateId</b> value to select the specific service you want when you create a shipment by calling <b>createFromShippingQuote</b>. */
	export interface ShippingQuote {

		/** The date and time this quote was created, expressed as an ISO 8601 UTC string. */
		creationDate?: string | null;

		/** The last date and time that this quote will be honored, expressed as an ISO 8601 UTC string. After this time the quote expires and the expressed rates can no longer be purchased. */
		expirationDate?: string | null;

		/** This list value is optionally assigned by the seller. When present, each element in the returned list contains seller-assigned information about an order (such as an order number). Because a package can contain all or part of one or more orders, this field provides a way for sellers to identify the packages that contain specific orders. */
		orders?: Array<Order>;

		/** This complex type specifies the dimensions and weight of a package. */
		packageSpecification?: PackageSpecification;

		/** A list of <i>rates</i> where each rate, as identified by a <b>rateId</b>, contains information about a specific shipping service offered by a carrier.  Rates include shipping carrier and service, the to and from locations, the pickup and delivery windows, the seller's shipping parameters, the service constraints, and the cost for the base service and a list of additional shipping options.  <br><br>Each rate offered is supported by a label service where you can purchase the rate, and associated shipping label, via a call to <b>createFromShippingQuote</b>. */
		rates?: Array<Rate>;

		/** This complex type contains contact information for an individual buyer or seller. */
		shipFrom?: Contact;

		/** This complex type contains contact information for an individual buyer or seller. */
		shipTo?: Contact;

		/** The unique eBay-assigned ID for this shipping quote. The value of this field is associated with a specific package, based on its origin, destination, and size. */
		shippingQuoteId?: string | null;

		/** A list of any warnings triggered by the request. */
		warnings?: Array<Error>;
	}

	/** This complex type describes a "shipping quote," which contains the parameters for a package shipment. The shipping quote contains a list of "live quotes" or <i>rates</i> for the shipment. Rates are offerd by a carrier for a particular service, of set of services, for shipping the package. Included in the shipping quote are the package specifications, the shipment's origin and destination addresses, and the shipping parameters specified by the seller.  <br><br>Use the <b>rateId</b> value to select the specific service you want when you create a shipment by calling <b>createFromShippingQuote</b>. */
	export interface ShippingQuoteFormProperties {

		/** The date and time this quote was created, expressed as an ISO 8601 UTC string. */
		creationDate: FormControl<string | null | undefined>,

		/** The last date and time that this quote will be honored, expressed as an ISO 8601 UTC string. After this time the quote expires and the expressed rates can no longer be purchased. */
		expirationDate: FormControl<string | null | undefined>,

		/** The unique eBay-assigned ID for this shipping quote. The value of this field is associated with a specific package, based on its origin, destination, and size. */
		shippingQuoteId: FormControl<string | null | undefined>,
	}
	export function CreateShippingQuoteFormGroup() {
		return new FormGroup<ShippingQuoteFormProperties>({
			creationDate: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<string | null | undefined>(undefined),
			shippingQuoteId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type defines the request body for <b>createShippingQuote</b>. Sellers <i>request a quote</i> for a shipment by defining the "To" and "From" addresses for the package, plus the package's size.  <br><br>Carriers respond by offering up a "rate" for the service of theirs that best fits seller's needs. */
	export interface ShippingQuoteRequest {

		/** A seller-defined list that contains information about the orders in the package. This allows sellers to include information about the line items in the package with the shipment information.  <br><br>A package can contain any number of line items from one or more orders, providing they all ship in the same package.  <br><br><b>Maximum list size:</b> 10 */
		orders?: Array<Order>;

		/** This complex type specifies the dimensions and weight of a package. */
		packageSpecification?: PackageSpecification;

		/** This complex type contains contact information for an individual buyer or seller. */
		shipFrom?: Contact;

		/** This complex type contains contact information for an individual buyer or seller. */
		shipTo?: Contact;
	}

	/** This complex type defines the request body for <b>createShippingQuote</b>. Sellers <i>request a quote</i> for a shipment by defining the "To" and "From" addresses for the package, plus the package's size.  <br><br>Carriers respond by offering up a "rate" for the service of theirs that best fits seller's needs. */
	export interface ShippingQuoteRequestFormProperties {
	}
	export function CreateShippingQuoteRequestFormGroup() {
		return new FormGroup<ShippingQuoteRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This method creates a "shipment" based on the <b>shippingQuoteId</b> and <b>rateId</b> values supplied in the request. The rate identified by the <b>rateId</b> value specifies the carrier and service for the package shipment, and the rate ID must be contained in the shipping quote identified by the <b>shippingQuoteId</b> value. Call <b>createShippingQuote</b> to retrieve a set of live shipping rates.  <br><br>When you create a shipment, eBay generates a shipping label that you can download and use to ship your package.  <br><br>In a <b>createFromShippingQuote</b> request, sellers can include a list of shipping options they want to add to the base service quoted in the selected rate. The list of available shipping options is specific to each quoted rate and if available, the options are listed in the rate container of the of the shipping quote.  <br><br>In addition to a configurable return-to location and other details about the shipment, the response to this method includes:  <ul><li>The shipping carrier and service to be used for the package shipment</li> <li>A list of selected shipping options, if any</li> <li>The shipment tracking number</li> <li>The total shipping cost (the sum cost of the base shipping service and any added options)</li></ul> When you create a shipment, your billing agreement account is charged the sum of the <b>baseShippingCost</b> and the total cost of any additional shipping options you might have selected. Use the URL returned in <b>labelDownloadUrl</b> field, or call <b>downloadLabelFile</b> with the <b>shipmentId</b> value from the response, to download a shipping label for your package. <p class="tablenote"><b>Important!</b> Sellers must set up their payment method with eBay before they can use this method to create a shipment and the associated shipping label.</p>
		 * Post shipment/create_from_shipping_quote
		 * @param {CreateShipmentFromQuoteRequest} requestBody The create shipment from quote request.
		 * @return {void} 
		 */
		CreateFromShippingQuote(requestBody: CreateShipmentFromQuoteRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'shipment/create_from_shipping_quote', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the shipment details for the specified shipment ID. Call <b>createFromShippingQuote</b> to generate a shipment ID.
		 * Get shipment/{shipmentId}
		 * @param {string} shipmentId This path parameter specifies the unique eBay-assigned ID of the shipment you want to retrieve. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.
		 * @return {Shipment} Success
		 */
		GetShipment(shipmentId: string): Observable<Shipment> {
			return this.http.get<Shipment>(this.baseUri + 'shipment/' + (shipmentId == null ? '' : encodeURIComponent(shipmentId)), {});
		}

		/**
		 * This method cancels the shipment associated with the specified shipment ID and the associated shipping label is deleted. When you cancel a shipment, the <b>totalShippingCost</b> of the canceled shipment is refunded to the account established by the user's billing agreement.  <br><br>Note that you cannot cancel a shipment if you have used the associated shipping label.
		 * Post shipment/{shipmentId}/cancel
		 * @param {string} shipmentId This path parameter specifies the unique eBay-assigned ID of the shipment to be canceled. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.
		 * @return {Shipment} Success
		 */
		CancelShipment(shipmentId: string): Observable<Shipment> {
			return this.http.post<Shipment>(this.baseUri + 'shipment/' + (shipmentId == null ? '' : encodeURIComponent(shipmentId)) + '/cancel', null, {});
		}

		/**
		 * This method returns the shipping label file that was generated for the <b>shipmentId</b> value specified in the request. Call <b>createFromShippingQuote</b> to generate a shipment ID.  <br><br>Use the <code>Accept</code> HTTP header to specify the format of the returned file. The default file format is a PDF file. <!-- Are other options available? -->
		 * Get shipment/{shipmentId}/download_label_file
		 * @param {string} shipmentId This path parameter specifies the unique eBay-assigned ID of the shipment associated with the shipping label you want to download. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.
		 * @return {void} Success
		 */
		DownloadLabelFile(shipmentId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shipment/' + (shipmentId == null ? '' : encodeURIComponent(shipmentId)) + '/download_label_file', { observe: 'response', responseType: 'text' });
		}

		/**
		 * The <b>createShippingQuote</b> method returns a <i>shipping quote </i> that contains a list of live "rates."  <br><br>Each rate represents an offer made by a shipping carrier for a specific service and each offer has a live quote for the base service cost. Rates have a time window in which they are "live," and rates expire when their purchase window ends. If offered by the carrier, rates can include shipping options (and their associated prices), and users can add any offered shipping option to the base service should they desire.  Also, depending on the services required, rates can also include pickup and delivery windows.  <br><br>Each rate is for a single package and is based on the following information: <ul><li>The shipping origin</li> <li>The shipping destination</li> <li>The package size (weight and dimensions)</li></ul>  Rates are identified by a unique eBay-assigned <b>rateId</b> and rates are based on price points, pickup and delivery time frames, and other user requirements. Because each rate offered must be compliant with the eBay shipping program, all rates reflect eBay-negotiated prices.  <br><br>The various rates returned in a shipping quote offer the user a choice from which they can choose a shipping service that best fits their needs. Select the rate for your shipment and using the associated <b>rateId</b>, call <b>createFromShippingQuote</b> to create a shipment and generate a shipping label that you can use to ship the package.
		 * Post shipping_quote
		 * @param {ShippingQuoteRequest} requestBody The request object for <b>createShippingQuote</b>.
		 * @return {void} 
		 */
		CreateShippingQuote(requestBody: ShippingQuoteRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'shipping_quote', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the complete details of the shipping quote associated with the specified <b>shippingQuoteId</b> value.  <br><br>A "shipping quote" pertains to a single specific package and contains a set of shipping "rates" that quote the cost to ship the package by different shipping carriers and services. The quotes are based on the package's origin, destination, and size.  <br><br>Call <b>createShippingQuote</b> to create a <b>shippingQuoteId</b>.
		 * Get shipping_quote/{shippingQuoteId}
		 * @param {string} shippingQuoteId This path parameter specifies the unique eBay-assigned ID of the shipping quote you want to retrieve. The <b>shippingQuoteId</b> value is generated and returned by a call to <b>createShippingQuote</b>.
		 * @return {ShippingQuote} Success
		 */
		GetShippingQuote(shippingQuoteId: string): Observable<ShippingQuote> {
			return this.http.get<ShippingQuote>(this.baseUri + 'shipping_quote/' + (shippingQuoteId == null ? '' : encodeURIComponent(shippingQuoteId)), {});
		}
	}

}

