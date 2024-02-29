import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A complex type that describes the value of a monetary amount as represented by a global currency. When passing in an amount in a request payload, both <b>currency</b> and <b>value</b> fields are required, and both fields are also always returned for an amount in a response field. */
	export interface Amount {

		/** The base currency applied to the <b>value</b> field to establish a monetary amount.  <br/><br/>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " title="https://www.iso.org " target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.<br/><br/><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		currency?: string | null;

		/** The monetary amount in the specified <b>currency</b>. */
		value?: string | null;
	}

	/** A complex type that describes the value of a monetary amount as represented by a global currency. When passing in an amount in a request payload, both <b>currency</b> and <b>value</b> fields are required, and both fields are also always returned for an amount in a response field. */
	export interface AmountFormProperties {

		/** The base currency applied to the <b>value</b> field to establish a monetary amount.  <br/><br/>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " title="https://www.iso.org " target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.<br/><br/><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
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


	/** The category type discerns whether the policy applies to motor vehicle listings, or to any other items except motor vehicle listings. <br/><br/>Each business policy can be associated with either or both categories ('MOTORS_VEHICLES' and 'ALL_EXCLUDING_MOTORS_VEHICLES'); however, return business policies are not applicable for motor vehicle listings. */
	export interface CategoryType {

		/** <span class="tablenote"><strong>Note:</strong> This field has been deprecated and is no longer used.<ul><li>Do not include this field in any <b>create</b> or <b>update</b> method.</li><li>This field may be returned within the payload of a <b>get</b> method, but it can be ignored.</li></ul></span> */
		default?: boolean | null;

		/** The category type to which the policy applies (motor vehicles or non-motor vehicles). <br /><br />The <code>MOTORS_VEHICLES</code> category type is not valid for return policies. eBay flows do not support the return of motor vehicles. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CategoryTypeEnum'>eBay API documentation</a> */
		name?: string | null;
	}

	/** The category type discerns whether the policy applies to motor vehicle listings, or to any other items except motor vehicle listings. <br/><br/>Each business policy can be associated with either or both categories ('MOTORS_VEHICLES' and 'ALL_EXCLUDING_MOTORS_VEHICLES'); however, return business policies are not applicable for motor vehicle listings. */
	export interface CategoryTypeFormProperties {

		/** <span class="tablenote"><strong>Note:</strong> This field has been deprecated and is no longer used.<ul><li>Do not include this field in any <b>create</b> or <b>update</b> method.</li><li>This field may be returned within the payload of a <b>get</b> method, but it can be ignored.</li></ul></span> */
		default: FormControl<boolean | null | undefined>,

		/** The category type to which the policy applies (motor vehicles or non-motor vehicles). <br /><br />The <code>MOTORS_VEHICLES</code> category type is not valid for return policies. eBay flows do not support the return of motor vehicles. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CategoryTypeEnum'>eBay API documentation</a> */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryTypeFormGroup() {
		return new FormGroup<CategoryTypeFormProperties>({
			default: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response payload for requests that return a list of custom policies. */
	export interface CompactCustomPolicyResponse {

		/** The unique custom policy identifier for the policy being returned.<br/><br/><span class="tablenote"><strong>Note:</strong> This value is automatically assigned by the system when the policy is created.</span> */
		customPolicyId?: string | null;

		/** Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65 */
		label?: string | null;

		/** The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br /><br /><b>Max length:</b> 65 */
		name?: string | null;

		/** Specifies the type of Custom Policy being returned. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CustomPolicyTypeEnum'>eBay API documentation</a> */
		policyType?: string | null;
	}

	/** The response payload for requests that return a list of custom policies. */
	export interface CompactCustomPolicyResponseFormProperties {

		/** The unique custom policy identifier for the policy being returned.<br/><br/><span class="tablenote"><strong>Note:</strong> This value is automatically assigned by the system when the policy is created.</span> */
		customPolicyId: FormControl<string | null | undefined>,

		/** Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65 */
		label: FormControl<string | null | undefined>,

		/** The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br /><br /><b>Max length:</b> 65 */
		name: FormControl<string | null | undefined>,

		/** Specifies the type of Custom Policy being returned. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CustomPolicyTypeEnum'>eBay API documentation</a> */
		policyType: FormControl<string | null | undefined>,
	}
	export function CreateCompactCustomPolicyResponseFormGroup() {
		return new FormGroup<CompactCustomPolicyResponseFormProperties>({
			customPolicyId: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			policyType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This container defines a seller's custom policy identified by policy ID for the selected eBay marketplace. A successful call returns the requested policy information. */
	export interface CustomPolicy {

		/** The unique custom policy identifier for a policy.<br/><br/><span class="tablenote"><strong>Note:</strong> This value is automatically assigned by the system when the policy is created.</span> */
		customPolicyId?: string | null;

		/** Details of the seller's specific policy and terms associated with the policy. Buyers access this information from the View Item page for items to which the policy has been applied.<br/><br/><b>Max length:</b> 15,000 */
		description?: string | null;

		/** Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65 */
		label?: string | null;

		/** The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br/><br/><b>Max length:</b> 65 */
		name?: string | null;

		/** Specifies the type of Custom Policy. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CustomPolicyTypeEnum'>eBay API documentation</a> */
		policyType?: string | null;
	}

	/** This container defines a seller's custom policy identified by policy ID for the selected eBay marketplace. A successful call returns the requested policy information. */
	export interface CustomPolicyFormProperties {

		/** The unique custom policy identifier for a policy.<br/><br/><span class="tablenote"><strong>Note:</strong> This value is automatically assigned by the system when the policy is created.</span> */
		customPolicyId: FormControl<string | null | undefined>,

		/** Details of the seller's specific policy and terms associated with the policy. Buyers access this information from the View Item page for items to which the policy has been applied.<br/><br/><b>Max length:</b> 15,000 */
		description: FormControl<string | null | undefined>,

		/** Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65 */
		label: FormControl<string | null | undefined>,

		/** The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br/><br/><b>Max length:</b> 65 */
		name: FormControl<string | null | undefined>,

		/** Specifies the type of Custom Policy. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CustomPolicyTypeEnum'>eBay API documentation</a> */
		policyType: FormControl<string | null | undefined>,
	}
	export function CreateCustomPolicyFormGroup() {
		return new FormGroup<CustomPolicyFormProperties>({
			customPolicyId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			policyType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the request payload of the createCustomPolicy method to define a new custom policy for a specific marketplace. */
	export interface CustomPolicyCreateRequest {

		/** Details of the seller's specific policy and terms for this policy.<br/><br/><b>Max length:</b> 15,000 */
		description?: string | null;

		/** Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65 */
		label?: string | null;

		/** The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br/><br/><b>Max length:</b> 65 */
		name?: string | null;

		/** Specifies the type of custom policy being created. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CustomPolicyTypeEnum'>eBay API documentation</a> */
		policyType?: string | null;
	}

	/** This type is used by the request payload of the createCustomPolicy method to define a new custom policy for a specific marketplace. */
	export interface CustomPolicyCreateRequestFormProperties {

		/** Details of the seller's specific policy and terms for this policy.<br/><br/><b>Max length:</b> 15,000 */
		description: FormControl<string | null | undefined>,

		/** Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65 */
		label: FormControl<string | null | undefined>,

		/** The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br/><br/><b>Max length:</b> 65 */
		name: FormControl<string | null | undefined>,

		/** Specifies the type of custom policy being created. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CustomPolicyTypeEnum'>eBay API documentation</a> */
		policyType: FormControl<string | null | undefined>,
	}
	export function CreateCustomPolicyCreateRequestFormGroup() {
		return new FormGroup<CustomPolicyCreateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			policyType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomPolicyRequest {

		/** Details of the seller's specific policy and terms for this policy.<br/><br/><b>Max length:</b> 15,000 */
		description?: string | null;

		/** Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65 */
		label?: string | null;

		/** The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br/><br/><b>Max length:</b> 65 */
		name?: string | null;
	}
	export interface CustomPolicyRequestFormProperties {

		/** Details of the seller's specific policy and terms for this policy.<br/><br/><b>Max length:</b> 15,000 */
		description: FormControl<string | null | undefined>,

		/** Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65 */
		label: FormControl<string | null | undefined>,

		/** The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br/><br/><b>Max length:</b> 65 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomPolicyRequestFormGroup() {
		return new FormGroup<CustomPolicyRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomPolicyResponse {

		/** This array contains the custom policies that match the input criteria. */
		customPolicies?: Array<CompactCustomPolicyResponse>;

		/** <i>This field is for future use.</i> */
		href?: string | null;

		/**
		 * <i>This field is for future use.</i>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** <i>This field is for future use.</i> */
		next?: string | null;

		/**
		 * <i>This field is for future use.</i>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** <i>This field is for future use.</i> */
		prev?: string | null;

		/**
		 * <i>This field is for future use.</i>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface CustomPolicyResponseFormProperties {

		/** <i>This field is for future use.</i> */
		href: FormControl<string | null | undefined>,

		/**
		 * <i>This field is for future use.</i>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** <i>This field is for future use.</i> */
		next: FormControl<string | null | undefined>,

		/**
		 * <i>This field is for future use.</i>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** <i>This field is for future use.</i> */
		prev: FormControl<string | null | undefined>,

		/**
		 * <i>This field is for future use.</i>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateCustomPolicyResponseFormGroup() {
		return new FormGroup<CustomPolicyResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type is used to specify/indicate that an initial deposit is required for a motor vehicle listing. */
	export interface Deposit {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. When passing in an amount in a request payload, both <b>currency</b> and <b>value</b> fields are required, and both fields are also always returned for an amount in a response field. */
		amount?: Amount;

		/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
		dueIn?: TimeDuration;

		/** This array is no longer applicable and should not be used since eBay now manages the electronic payment options available to buyers to pay the deposit. */
		paymentMethods?: Array<PaymentMethod>;
	}

	/** This type is used to specify/indicate that an initial deposit is required for a motor vehicle listing. */
	export interface DepositFormProperties {
	}
	export function CreateDepositFormGroup() {
		return new FormGroup<DepositFormProperties>({
		});

	}


	/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
	export interface TimeDuration {

		/** These enum values represent the time measurement unit, such as <code>DAY</code>. A span of time is defined when you apply the value specified in the <b>value</b> field to the value specified for <b>unit</b>. <br/><br/>See <b>TimeDurationUnitEnum</b> for a complete list of possible time-measurement units. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:TimeDurationUnitEnum'>eBay API documentation</a> */
		unit?: string | null;

		/**
		 * An integer that represents an amount of time, as measured by the time-measurement unit specified in the <b>unit</b> field.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}

	/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
	export interface TimeDurationFormProperties {

		/** These enum values represent the time measurement unit, such as <code>DAY</code>. A span of time is defined when you apply the value specified in the <b>value</b> field to the value specified for <b>unit</b>. <br/><br/>See <b>TimeDurationUnitEnum</b> for a complete list of possible time-measurement units. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:TimeDurationUnitEnum'>eBay API documentation</a> */
		unit: FormControl<string | null | undefined>,

		/**
		 * An integer that represents an amount of time, as measured by the time-measurement unit specified in the <b>unit</b> field.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateTimeDurationFormGroup() {
		return new FormGroup<TimeDurationFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type is used by the <b>paymentMethods</b> container, which is used by the seller to specify one or more offline payment methods. <br /><br /> <span class="tablenote"><b>Note</b>: eBay now controls all electronic payment methods available for a marketplace, so a seller will no longer use this type to specify any electronic payment methods.</span> */
	export interface PaymentMethod {

		/** <span class="tablenote"><b>Note</b>: This array is no longer applicable and should not be used. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods, including any credit card brands accepted. </span> */
		brands?: Array<string>;

		/** eBay now controls all electronic payment methods available for a marketplace, so only offline payment method enum values may be used in this field, and offline payment methods will only be applicable to listings that require or support offline payments. See the <b>PaymentMethodTypeEnum</b> type for supported offline payment method enum values. </p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentMethodTypeEnum'>eBay API documentation</a> */
		paymentMethodType?: string | null;

		/** <span class="tablenote"><b>Note</b>: This type is no longer applicable. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span> */
		recipientAccountReference?: RecipientAccountReference;
	}

	/** This type is used by the <b>paymentMethods</b> container, which is used by the seller to specify one or more offline payment methods. <br /><br /> <span class="tablenote"><b>Note</b>: eBay now controls all electronic payment methods available for a marketplace, so a seller will no longer use this type to specify any electronic payment methods.</span> */
	export interface PaymentMethodFormProperties {

		/** eBay now controls all electronic payment methods available for a marketplace, so only offline payment method enum values may be used in this field, and offline payment methods will only be applicable to listings that require or support offline payments. See the <b>PaymentMethodTypeEnum</b> type for supported offline payment method enum values. </p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentMethodTypeEnum'>eBay API documentation</a> */
		paymentMethodType: FormControl<string | null | undefined>,
	}
	export function CreatePaymentMethodFormGroup() {
		return new FormGroup<PaymentMethodFormProperties>({
			paymentMethodType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <span class="tablenote"><b>Note</b>: This type is no longer applicable. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span> */
	export interface RecipientAccountReference {

		/** <span class="tablenote"><b>Note</b>: DO NOT USE THIS FIELD. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span> */
		referenceId?: string | null;

		/** <span class="tablenote"><b>Note</b>: DO NOT USE THIS FIELD. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RecipientAccountReferenceTypeEnum'>eBay API documentation</a> */
		referenceType?: string | null;
	}

	/** <span class="tablenote"><b>Note</b>: This type is no longer applicable. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span> */
	export interface RecipientAccountReferenceFormProperties {

		/** <span class="tablenote"><b>Note</b>: DO NOT USE THIS FIELD. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span> */
		referenceId: FormControl<string | null | undefined>,

		/** <span class="tablenote"><b>Note</b>: DO NOT USE THIS FIELD. eBay now controls all electronic payment methods available for a marketplace, and a seller never has to specify any electronic payment methods.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RecipientAccountReferenceTypeEnum'>eBay API documentation</a> */
		referenceType: FormControl<string | null | undefined>,
	}
	export function CreateRecipientAccountReferenceFormGroup() {
		return new FormGroup<RecipientAccountReferenceFormProperties>({
			referenceId: new FormControl<string | null | undefined>(undefined),
			referenceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container that defines the elements of error and warning messages. */
	export interface Error {

		/** The category type for this error or warning. It is a string that can have one of three values:<ul><li><code>Application</code>: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service's business logic, system failures, or request errors from a dependency.</li><li><code>Business</code>: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as "Seller does not ship item to Antarctica" or "Buyer ineligible to purchase an alcoholic item". Business errors are not syntactical input errors.</li><li><code>Request</code>: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.</li></ul> */
		category?: string | null;

		/** Name of the domain ,or primary system, of the service or application where the error occurred. */
		domain?: string | null;

		/**
		 * A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId?: number | null;

		/** Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use <i>JSONPath</i> notation. */
		inputRefIds?: Array<string>;

		/** A more detailed explanation of the error than given in the <code>message</code> error field. */
		longMessage?: string | null;

		/** Information on how to correct the problem, in the end user's terms and language where applicable. Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale. */
		message?: string | null;

		/** Identifies specific response elements associated with the error, if any. Path format is the same as <code>inputRefId</code>. */
		outputRefIds?: Array<string>;

		/** This optional list of name/value pairs that contain context-specific <code>ErrorParameter</code> objects, with each item in the list being a parameter (or input field name) that caused an error condition. Each <code>ErrorParameter</code> object consists of two fields, a <code>name</code> and a <code>value</code>. */
		parameters?: Array<ErrorParameter>;

		/** If present, indicates the subsystem in which the error occurred. */
		subdomain?: string | null;
	}

	/** A container that defines the elements of error and warning messages. */
	export interface ErrorFormProperties {

		/** The category type for this error or warning. It is a string that can have one of three values:<ul><li><code>Application</code>: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service's business logic, system failures, or request errors from a dependency.</li><li><code>Business</code>: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as "Seller does not ship item to Antarctica" or "Buyer ineligible to purchase an alcoholic item". Business errors are not syntactical input errors.</li><li><code>Request</code>: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.</li></ul> */
		category: FormControl<string | null | undefined>,

		/** Name of the domain ,or primary system, of the service or application where the error occurred. */
		domain: FormControl<string | null | undefined>,

		/**
		 * A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId: FormControl<number | null | undefined>,

		/** A more detailed explanation of the error than given in the <code>message</code> error field. */
		longMessage: FormControl<string | null | undefined>,

		/** Information on how to correct the problem, in the end user's terms and language where applicable. Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale. */
		message: FormControl<string | null | undefined>,

		/** If present, indicates the subsystem in which the error occurred. */
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


	/** A complex type that indicates a parameter that caused an error and the value of the parameter which caused the error. */
	export interface ErrorParameter {

		/** Name of the parameter that caused the error. */
		name?: string | null;

		/** The value of the parameter that caused the error. */
		value?: string | null;
	}

	/** A complex type that indicates a parameter that caused an error and the value of the parameter which caused the error. */
	export interface ErrorParameterFormProperties {

		/** Name of the parameter that caused the error. */
		name: FormControl<string | null | undefined>,

		/** The value of the parameter that caused the error. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorParameterFormGroup() {
		return new FormGroup<ErrorParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the <b>fulfillmentPolicy</b> response container, a container which defines a seller's fulfillment policy for a specific marketplace. */
	export interface FulfillmentPolicy {

		/** This container indicates whether the fulfillment policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings. */
		categoryTypes?: Array<CategoryType>;

		/** A seller-defined description of the fulfillment policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250 */
		description?: string | null;

		/** If returned as <code>true</code>, the seller offers freight shipping. Freight shipping can be used for large items over 150 lbs. */
		freightShipping?: boolean | null;

		/** A unique eBay-assigned ID for the fulfillment policy. This ID is generated when the policy is created. */
		fulfillmentPolicyId?: string | null;

		/** If returned as <code>true</code>, eBay's Global Shipping Program will be used by the seller to ship items to international locations.<br /><br /><span class="tablenote"><b>Note</b>: On the US marketplace, the <em><b>Global Shipping Program</b></em> is scheduled to be replaced by a new intermediated international shipping program called <em><b>eBay International Shipping</b></em>. US sellers who are opted in to the Global Shipping Program will be automatically opted in to eBay International Shipping when it becomes available to them. All US sellers will be migrated by March 31, 2023. <br /><br />eBay International Shipping is an account level setting, and no field needs to be set in a Fulfillment business policy to enable it. As long as the US seller's account is opted in to eBay International Shipping, this shipping option will be enabled automatically for all listings where international shipping is available. <br /><br />A US seller who is opted in to eBay International Shipping can also specify individual international shipping service options for a Fulfillment business policy.</span> */
		globalShipping?: boolean | null;

		/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
		handlingTime?: TimeDuration;

		/** If returned as <code>true</code>, local pickup is available for this policy. */
		localPickup?: boolean | null;

		/** The ID of the eBay marketplace to which this fulfillment policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** A seller-defined name for this fulfillment policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64 */
		name?: string | null;

		/** If returned as <code>true</code>, the seller offers the "Click and Collect" option. <br/><br/>Currently, "Click and Collect" is available only to large retail merchants the eBay AU and UK marketplaces. */
		pickupDropOff?: boolean | null;

		/** This type consists of the <b>regionIncluded</b> and <b>regionExcluded</b> arrays, which indicate the areas to where the seller does and doesn't ship. */
		shipToLocations?: RegionSet;

		/** This array is used to provide detailed information on the domestic and international shipping options available for the policy. A separate <b>ShippingOption</b> object covers domestic shipping service options and international shipping service options (if the seller ships to international locations). <br /><br />The <b>optionType</b> field indicates whether the <b>ShippingOption</b> object applies to domestic or international shipping, and the <b>costType</b> field indicates whether flat-rate shipping or calculated shipping will be used. <p>A separate <b>ShippingServices</b> object is used to specify cost and other details for every available domestic and international shipping service option. </p> */
		shippingOptions?: Array<ShippingOption>;
	}

	/** This type is used by the <b>fulfillmentPolicy</b> response container, a container which defines a seller's fulfillment policy for a specific marketplace. */
	export interface FulfillmentPolicyFormProperties {

		/** A seller-defined description of the fulfillment policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250 */
		description: FormControl<string | null | undefined>,

		/** If returned as <code>true</code>, the seller offers freight shipping. Freight shipping can be used for large items over 150 lbs. */
		freightShipping: FormControl<boolean | null | undefined>,

		/** A unique eBay-assigned ID for the fulfillment policy. This ID is generated when the policy is created. */
		fulfillmentPolicyId: FormControl<string | null | undefined>,

		/** If returned as <code>true</code>, eBay's Global Shipping Program will be used by the seller to ship items to international locations.<br /><br /><span class="tablenote"><b>Note</b>: On the US marketplace, the <em><b>Global Shipping Program</b></em> is scheduled to be replaced by a new intermediated international shipping program called <em><b>eBay International Shipping</b></em>. US sellers who are opted in to the Global Shipping Program will be automatically opted in to eBay International Shipping when it becomes available to them. All US sellers will be migrated by March 31, 2023. <br /><br />eBay International Shipping is an account level setting, and no field needs to be set in a Fulfillment business policy to enable it. As long as the US seller's account is opted in to eBay International Shipping, this shipping option will be enabled automatically for all listings where international shipping is available. <br /><br />A US seller who is opted in to eBay International Shipping can also specify individual international shipping service options for a Fulfillment business policy.</span> */
		globalShipping: FormControl<boolean | null | undefined>,

		/** If returned as <code>true</code>, local pickup is available for this policy. */
		localPickup: FormControl<boolean | null | undefined>,

		/** The ID of the eBay marketplace to which this fulfillment policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** A seller-defined name for this fulfillment policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64 */
		name: FormControl<string | null | undefined>,

		/** If returned as <code>true</code>, the seller offers the "Click and Collect" option. <br/><br/>Currently, "Click and Collect" is available only to large retail merchants the eBay AU and UK marketplaces. */
		pickupDropOff: FormControl<boolean | null | undefined>,
	}
	export function CreateFulfillmentPolicyFormGroup() {
		return new FormGroup<FulfillmentPolicyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			freightShipping: new FormControl<boolean | null | undefined>(undefined),
			fulfillmentPolicyId: new FormControl<string | null | undefined>(undefined),
			globalShipping: new FormControl<boolean | null | undefined>(undefined),
			localPickup: new FormControl<boolean | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pickupDropOff: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This type consists of the <b>regionIncluded</b> and <b>regionExcluded</b> arrays, which indicate the areas to where the seller does and doesn't ship. */
	export interface RegionSet {

		/** An array of one or more <b>regionName</b> values that specify the areas to where a seller does not ship. A <b>regionExcluded</b> list should only be set in the top-level <b>shipToLocations</b> container and not within the <b>shippingServices.shipToLocations</b> container used to specify which shipping regions are serviced by each available shipping service option. <p>Many sellers are willing to ship to many international locations, but they may want to exclude some world regions or some countries as places they are willing to ship to.<br/><br/>This array will be returned as empty if no shipping regions are excluded with the fulfillment business policy.<br /> <br /><span class="tablenote"><b>Note: </b> The <b>regionExcluded</b> array is not applicable for motor vehicle business policies on the US, CA, or UK marketplaces. If this array is used in a <b>createFulfillmentPolicy</b> or <b>updateFulfillmentPolicy</b> request, it will be ignored.</span> */
		regionExcluded?: Array<Region>;

		/** An array of one or more <b>regionName</b> fields that specify the areas to where a seller ships. <br />Each eBay marketplace supports its own set of allowable shipping locations.<br /> <br /><span class="tablenote"><b>Note: </b> The <b>regionIncluded</b> array is not applicable for motor vehicle business policies on the US, CA, or UK marketplaces. If this array is used in a <b>createFulfillmentPolicy</b> or <b>updateFulfillmentPolicy</b> request, it will be ignored.</span> */
		regionIncluded?: Array<Region>;
	}

	/** This type consists of the <b>regionIncluded</b> and <b>regionExcluded</b> arrays, which indicate the areas to where the seller does and doesn't ship. */
	export interface RegionSetFormProperties {
	}
	export function CreateRegionSetFormGroup() {
		return new FormGroup<RegionSetFormProperties>({
		});

	}


	/** This type is used to define specific shipping regions. There are four 'levels' of shipping regions, including large geographical regions (like 'Asia', 'Europe', or 'Middle East'), individual countries, US states or Canadian provinces, and special locations/domestic regions within a country (like 'Alaska/Hawaii' or 'PO Box'). */
	export interface Region {

		/** A string that indicates the name of a region, as defined by eBay. A "region" can be either a 'world region' (e.g., the "Middle East" or "Southeast Asia"), a country (represented with a two-letter country code), a state or province (represented with a two-letter code), or a special domestic region within a country. <br /><br />The <b>GeteBayDetails</b> call in the Trading API can be used to retrieve the world regions and special domestic regions within a specific country. To get these enumeration values, call <b>GeteBayDetails</b> with the <b>DetailName</b> value set to <b>ExcludeShippingLocationDetails</b>. */
		regionName?: string | null;

		/** Reserved for future use. <!--The region's type, which can be one of the following: 'COUNTRY', 'COUNTRY_REGION', 'STATE_OR_PROVINCE', 'WORLD_REGION', or 'WORLDWIDE'.--> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:RegionTypeEnum'>eBay API documentation</a> */
		regionType?: string | null;
	}

	/** This type is used to define specific shipping regions. There are four 'levels' of shipping regions, including large geographical regions (like 'Asia', 'Europe', or 'Middle East'), individual countries, US states or Canadian provinces, and special locations/domestic regions within a country (like 'Alaska/Hawaii' or 'PO Box'). */
	export interface RegionFormProperties {

		/** A string that indicates the name of a region, as defined by eBay. A "region" can be either a 'world region' (e.g., the "Middle East" or "Southeast Asia"), a country (represented with a two-letter country code), a state or province (represented with a two-letter code), or a special domestic region within a country. <br /><br />The <b>GeteBayDetails</b> call in the Trading API can be used to retrieve the world regions and special domestic regions within a specific country. To get these enumeration values, call <b>GeteBayDetails</b> with the <b>DetailName</b> value set to <b>ExcludeShippingLocationDetails</b>. */
		regionName: FormControl<string | null | undefined>,

		/** Reserved for future use. <!--The region's type, which can be one of the following: 'COUNTRY', 'COUNTRY_REGION', 'STATE_OR_PROVINCE', 'WORLD_REGION', or 'WORLDWIDE'.--> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:RegionTypeEnum'>eBay API documentation</a> */
		regionType: FormControl<string | null | undefined>,
	}
	export function CreateRegionFormGroup() {
		return new FormGroup<RegionFormProperties>({
			regionName: new FormControl<string | null | undefined>(undefined),
			regionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the <b>shippingOptions</b> array, which is used to provide detailed information on the domestic and international shipping options available for the policy. A separate <b>ShippingOption</b> object covers domestic shipping service options and international shipping service options (if the seller ships to international locations). */
	export interface ShippingOption {

		/** This field defines whether the shipping cost model is <code>FLAT_RATE</code> (the same rate for all buyers, or buyers within a region if shipping rate tables are used) or <code>CALCULATED</code> (the shipping rate varies by the ship-to location and size and weight of the package). <br/><br/>This field is conditionally required if any shipping service options are specified (domestic and/or international). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ShippingCostTypeEnum'>eBay API documentation</a> */
		costType?: string | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. When passing in an amount in a request payload, both <b>currency</b> and <b>value</b> fields are required, and both fields are also always returned for an amount in a response field. */
		insuranceFee?: Amount;

		/** This field has been deprecated. <br/><br/>Shipping insurance is offered only via a shipping carrier's shipping services and is no longer available via eBay shipping policies. */
		insuranceOffered?: boolean | null;

		/** This field is used to indicate if the corresponding shipping service options (under <b>shippingServices</b> array) are domestic or international shipping service options. This field is conditionally required if any shipping service options are specified (domestic and/or international). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ShippingOptionTypeEnum'>eBay API documentation</a> */
		optionType?: string | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. When passing in an amount in a request payload, both <b>currency</b> and <b>value</b> fields are required, and both fields are also always returned for an amount in a response field. */
		packageHandlingCost?: Amount;

		/** This field is used if the seller wants to associate a domestic or international shipping rate table to the fulfillment business policy. The <a href="/api-docs/sell/account/resources/rate_table/methods/getRateTables">getRateTables</a> method can be used to retrieve shipping rate table IDs.<br/><br/>With domestic and international shipping rate tables, the seller can set different shipping costs based on shipping regions and shipping speed/level of service (one-day, expedited, standard, economy). There are also options to additional per-weight and handling charges.<br/><br/>Sellers need to be careful that shipping rate tables match the corresponding shipping service options. In other words, a domestic shipping rate table must not be specified in the same container where international shipping service options are being specified, and vice versa, and the shipping speed/level of service of the provided shipping service options should match the shipping speed/level of service options that are defined in the shipping rate tables. <br /><br />For example, if the corresponding shipping rate table defines costs for one-day shipping services, there should be at least one one-day shipping service option specified under the <b>shippingServices</b> array.<br/><br/>This field is returned if set. */
		rateTableId?: string | null;

		/** This field is the unique identifier of a seller's domestic or international shipping discount profile. If a buyer satisfies the requirements of the discount rule, this buyer will receive a shipping discount for the order. <br /><br />The seller can create and manage shipping discount profiles using (Get/Set) <b>ShippingDiscountProfiles</b> calls in the <b>Trading API</b> or through the <b>Shipping Preferences</b> in <b>My eBay</b>. <br/><br/><span class="tablenote"><b>Note: </b>Initially, shipping discount profiles in the <b>Account API</b> will <i>not</i> be available to all sellers.</span> */
		shippingDiscountProfileId?: string | null;

		/** This boolean indicates whether or not the seller has set up a promotional shipping discount that will be available to buyers who satisfy the requirements of the shipping discount rule. <br/><br/>The seller can create and manage shipping promotional discounts using (Get/Set) <b>ShippingDiscountProfiles</b> calls in the <b>Trading API</b> or through the <b>Shipping Preferences</b> in <b>My eBay</b>. <br/><br/><span class="tablenote"><b>Note: </b>Initially, shipping discount profiles in the <b>Account API</b> will <i>not</i> be available to all sellers.</span> */
		shippingPromotionOffered?: boolean | null;

		/** This array consists of the domestic or international shipping services options that are defined for the policy. The shipping service options defined under this array should match what is set in the corresponding <b>shippingOptions.optionType</b> field (which controls whether domestic or international shipping service options are being defined). If a shipping rate table is being used, the specified shipping service options should also match the shipping rate table settings (domestic or international, shipping speed/level of service, etc.) <br/><br/>Sellers can specify up to four domestic shipping services and up to five international shipping service options by using separate <b>shippingService</b> containers for each. If the seller is using the Global Shipping Program as an international option, only a total of four international shipping service options (including GSP) can be offered. <br/><br/> See <a href="/api-docs/sell/static/seller-accounts/ht_shipping-setting-shipping-carrier-and-service-values.html" target="_blank">How to set up shipping carrier and shipping service values</a>. <br /><br />To use the eBay standard envelope service (eSE), see <a href="/api-docs/sell/static/seller-accounts/using-the-ebay-standard-envelope-service.html" target="_blank">Using eBay standard envelope (eSE) service</a>.<br /><br />This array is conditionally required if the seller is offering one or more domestic and/or international shipping service options. */
		shippingServices?: Array<ShippingService>;
	}

	/** This type is used by the <b>shippingOptions</b> array, which is used to provide detailed information on the domestic and international shipping options available for the policy. A separate <b>ShippingOption</b> object covers domestic shipping service options and international shipping service options (if the seller ships to international locations). */
	export interface ShippingOptionFormProperties {

		/** This field defines whether the shipping cost model is <code>FLAT_RATE</code> (the same rate for all buyers, or buyers within a region if shipping rate tables are used) or <code>CALCULATED</code> (the shipping rate varies by the ship-to location and size and weight of the package). <br/><br/>This field is conditionally required if any shipping service options are specified (domestic and/or international). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ShippingCostTypeEnum'>eBay API documentation</a> */
		costType: FormControl<string | null | undefined>,

		/** This field has been deprecated. <br/><br/>Shipping insurance is offered only via a shipping carrier's shipping services and is no longer available via eBay shipping policies. */
		insuranceOffered: FormControl<boolean | null | undefined>,

		/** This field is used to indicate if the corresponding shipping service options (under <b>shippingServices</b> array) are domestic or international shipping service options. This field is conditionally required if any shipping service options are specified (domestic and/or international). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ShippingOptionTypeEnum'>eBay API documentation</a> */
		optionType: FormControl<string | null | undefined>,

		/** This field is used if the seller wants to associate a domestic or international shipping rate table to the fulfillment business policy. The <a href="/api-docs/sell/account/resources/rate_table/methods/getRateTables">getRateTables</a> method can be used to retrieve shipping rate table IDs.<br/><br/>With domestic and international shipping rate tables, the seller can set different shipping costs based on shipping regions and shipping speed/level of service (one-day, expedited, standard, economy). There are also options to additional per-weight and handling charges.<br/><br/>Sellers need to be careful that shipping rate tables match the corresponding shipping service options. In other words, a domestic shipping rate table must not be specified in the same container where international shipping service options are being specified, and vice versa, and the shipping speed/level of service of the provided shipping service options should match the shipping speed/level of service options that are defined in the shipping rate tables. <br /><br />For example, if the corresponding shipping rate table defines costs for one-day shipping services, there should be at least one one-day shipping service option specified under the <b>shippingServices</b> array.<br/><br/>This field is returned if set. */
		rateTableId: FormControl<string | null | undefined>,

		/** This field is the unique identifier of a seller's domestic or international shipping discount profile. If a buyer satisfies the requirements of the discount rule, this buyer will receive a shipping discount for the order. <br /><br />The seller can create and manage shipping discount profiles using (Get/Set) <b>ShippingDiscountProfiles</b> calls in the <b>Trading API</b> or through the <b>Shipping Preferences</b> in <b>My eBay</b>. <br/><br/><span class="tablenote"><b>Note: </b>Initially, shipping discount profiles in the <b>Account API</b> will <i>not</i> be available to all sellers.</span> */
		shippingDiscountProfileId: FormControl<string | null | undefined>,

		/** This boolean indicates whether or not the seller has set up a promotional shipping discount that will be available to buyers who satisfy the requirements of the shipping discount rule. <br/><br/>The seller can create and manage shipping promotional discounts using (Get/Set) <b>ShippingDiscountProfiles</b> calls in the <b>Trading API</b> or through the <b>Shipping Preferences</b> in <b>My eBay</b>. <br/><br/><span class="tablenote"><b>Note: </b>Initially, shipping discount profiles in the <b>Account API</b> will <i>not</i> be available to all sellers.</span> */
		shippingPromotionOffered: FormControl<boolean | null | undefined>,
	}
	export function CreateShippingOptionFormGroup() {
		return new FormGroup<ShippingOptionFormProperties>({
			costType: new FormControl<string | null | undefined>(undefined),
			insuranceOffered: new FormControl<boolean | null | undefined>(undefined),
			optionType: new FormControl<string | null | undefined>(undefined),
			rateTableId: new FormControl<string | null | undefined>(undefined),
			shippingDiscountProfileId: new FormControl<string | null | undefined>(undefined),
			shippingPromotionOffered: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This type is used by the <b>shippingServices</b> array, an array that provides details about every domestic and international shipping service option that is defined for the policy. */
	export interface ShippingService {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. When passing in an amount in a request payload, both <b>currency</b> and <b>value</b> fields are required, and both fields are also always returned for an amount in a response field. */
		additionalShippingCost?: Amount;

		/** This field should be included and set to <code>true</code> for a motor vehicle listing if it will be the buyer's responsibility to pick up the purchased motor vehicle after full payment is made. <br /><br />This field is only applicable to motor vehicle listings. In the majority of motor vehicle listings, the seller does make the buyer responsible for pickup or shipment of the vehicle. <br/><br/>This field is returned if set.<br/><br/><b>Default</b>: false */
		buyerResponsibleForPickup?: boolean | null;

		/** This field should be included and set to <code>true</code> for a motor vehicle listing if it will be the buyer's responsibility to arrange for shipment of a purchased motor vehicle after full payment is made. <br /><br />This field is only applicable to motor vehicle listings. In the majority of motor vehicle listings, the seller does make the buyer responsible for pickup or shipment of the vehicle. <br/><br/>This field is returned if set.<br/><br/><b>Default</b>: false */
		buyerResponsibleForShipping?: boolean | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. When passing in an amount in a request payload, both <b>currency</b> and <b>value</b> fields are required, and both fields are also always returned for an amount in a response field. */
		cashOnDeliveryFee?: Amount;

		/** This field is included and set to <code>true</code> if the seller offers a free shipping option to the buyer. <br /><br />This field can only be included and set to <code>true</code> for the first domestic shipping service option specified in the <b>shippingServices</b> container (it is ignored if set for subsequent shipping services or for any international shipping service option). <br /><br />The first specified shipping service option has a <b>sortOrder</b> value of <code>1</code> or if the <b>sortOrderId</b> field is not used, it is the shipping service option that's specified first in the <b>shippingServices</b> container.<br/><br/>This container is returned if set. */
		freeShipping?: boolean | null;

		/** This type consists of the <b>regionIncluded</b> and <b>regionExcluded</b> arrays, which indicate the areas to where the seller does and doesn't ship. */
		shipToLocations?: RegionSet;

		/** This field sets/indicates the shipping carrier, such as <code>USPS</code>, <code>FedEx</code>, or <code>UPS</code>. Although this field uses the <b>string</b> type, the seller must pass in a pre-defined enumeration value here. <br /><br />For a full list of shipping carrier enum values for a specified eBay marketplace, the <b>GeteBayDetails</b> call of the <b>Trading API</b> can be used, and the <b>DetailName</b> field's value should be set to <code>ShippingCarrierDetails</code>. The enum values for each shipping carriers can be found in each <b>ShippingCarrierDetails.ShippingCarrier</b> field in the response payload.<br/><br/> This field is actually optional, as the shipping carrier is also tied into the <b>shippingServiceCode</b> enum value, and that field is required for every specified shipping service option.<br/><br/>This field is returned if set. */
		shippingCarrierCode?: string | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. When passing in an amount in a request payload, both <b>currency</b> and <b>value</b> fields are required, and both fields are also always returned for an amount in a response field. */
		shippingCost?: Amount;

		/** This field sets/indicates the domestic or international shipping service option, such as <code>USPSPriority</code>, <code>FedEx2Day</code>, or <code>UPS3rdDay</code>. Although this field uses the <b>string</b> type, the seller must pass in a pre-defined enumeration value here. <br /><br />For a full list of shipping service option enum values for a specified eBay marketplace, the <b>GeteBayDetails</b> call of the <b>Trading API</b> can be used, and the <b>DetailName</b> field's value should be set to <code>ShippingServiceDetails</code>. <br /><br />The enum values for each shipping service option can be found in each <b>ShippingServiceDetails.ShippingService</b> field in the response payload. The seller must make sure that the shipping service option is still valid, which is indicated by a <code>true</code> value in the corresponding <b>ValidForSellingFlow</b> boolean field. International shipping service options are typically returned at the top of the response payload, and are indicated by an <b>InternationalService</b> boolean field that reads <code>true</code>. <br /><br />The <b>InternationalService</b> boolean field is not returned at all for domestic shipping service options. <br/><br/> This field is required for every specified shipping service option.<br/><br/>This field is returned if set. */
		shippingServiceCode?: string | null;

		/**
		 * The integer value set in this field controls the order of the corresponding domestic or international shipping service option in the View Item and Checkout pages. <br/><br/>Sellers can specify up to four domestic shipping services (in four separate <b>shippingService</b> containers), so valid values are 1, 2, 3, and 4. A shipping service option with a <b>sortOrder</b> value of <code>1</code> appears at the top of View Item and Checkout pages. Conversely, a shipping service option with a <b>sortOrder</b> value of <code>1</code> appears at the bottom of the list. <br/><br/>Sellers can specify up to five international shipping services (in five separate <b>shippingService</b> containers), so valid values for international shipping services are 1, 2, 3, 4, and 5. Similarly to domestic shipping service options, the <b>sortOrder</b> value of a international shipping service option controls the placement of that shipping service option in the View Item and Checkout pages. <br/><br/>If the <b>sortOrder</b> field is not supplied, the order of domestic and international shipping service options is determined by the order in which they are listed in the API call. <br/><br/><b>Min</b>: 1. <b>Max</b>: 4 (for domestic shipping service) or 5 (for international shipping service).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sortOrder?: number | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. When passing in an amount in a request payload, both <b>currency</b> and <b>value</b> fields are required, and both fields are also always returned for an amount in a response field. */
		surcharge?: Amount;
	}

	/** This type is used by the <b>shippingServices</b> array, an array that provides details about every domestic and international shipping service option that is defined for the policy. */
	export interface ShippingServiceFormProperties {

		/** This field should be included and set to <code>true</code> for a motor vehicle listing if it will be the buyer's responsibility to pick up the purchased motor vehicle after full payment is made. <br /><br />This field is only applicable to motor vehicle listings. In the majority of motor vehicle listings, the seller does make the buyer responsible for pickup or shipment of the vehicle. <br/><br/>This field is returned if set.<br/><br/><b>Default</b>: false */
		buyerResponsibleForPickup: FormControl<boolean | null | undefined>,

		/** This field should be included and set to <code>true</code> for a motor vehicle listing if it will be the buyer's responsibility to arrange for shipment of a purchased motor vehicle after full payment is made. <br /><br />This field is only applicable to motor vehicle listings. In the majority of motor vehicle listings, the seller does make the buyer responsible for pickup or shipment of the vehicle. <br/><br/>This field is returned if set.<br/><br/><b>Default</b>: false */
		buyerResponsibleForShipping: FormControl<boolean | null | undefined>,

		/** This field is included and set to <code>true</code> if the seller offers a free shipping option to the buyer. <br /><br />This field can only be included and set to <code>true</code> for the first domestic shipping service option specified in the <b>shippingServices</b> container (it is ignored if set for subsequent shipping services or for any international shipping service option). <br /><br />The first specified shipping service option has a <b>sortOrder</b> value of <code>1</code> or if the <b>sortOrderId</b> field is not used, it is the shipping service option that's specified first in the <b>shippingServices</b> container.<br/><br/>This container is returned if set. */
		freeShipping: FormControl<boolean | null | undefined>,

		/** This field sets/indicates the shipping carrier, such as <code>USPS</code>, <code>FedEx</code>, or <code>UPS</code>. Although this field uses the <b>string</b> type, the seller must pass in a pre-defined enumeration value here. <br /><br />For a full list of shipping carrier enum values for a specified eBay marketplace, the <b>GeteBayDetails</b> call of the <b>Trading API</b> can be used, and the <b>DetailName</b> field's value should be set to <code>ShippingCarrierDetails</code>. The enum values for each shipping carriers can be found in each <b>ShippingCarrierDetails.ShippingCarrier</b> field in the response payload.<br/><br/> This field is actually optional, as the shipping carrier is also tied into the <b>shippingServiceCode</b> enum value, and that field is required for every specified shipping service option.<br/><br/>This field is returned if set. */
		shippingCarrierCode: FormControl<string | null | undefined>,

		/** This field sets/indicates the domestic or international shipping service option, such as <code>USPSPriority</code>, <code>FedEx2Day</code>, or <code>UPS3rdDay</code>. Although this field uses the <b>string</b> type, the seller must pass in a pre-defined enumeration value here. <br /><br />For a full list of shipping service option enum values for a specified eBay marketplace, the <b>GeteBayDetails</b> call of the <b>Trading API</b> can be used, and the <b>DetailName</b> field's value should be set to <code>ShippingServiceDetails</code>. <br /><br />The enum values for each shipping service option can be found in each <b>ShippingServiceDetails.ShippingService</b> field in the response payload. The seller must make sure that the shipping service option is still valid, which is indicated by a <code>true</code> value in the corresponding <b>ValidForSellingFlow</b> boolean field. International shipping service options are typically returned at the top of the response payload, and are indicated by an <b>InternationalService</b> boolean field that reads <code>true</code>. <br /><br />The <b>InternationalService</b> boolean field is not returned at all for domestic shipping service options. <br/><br/> This field is required for every specified shipping service option.<br/><br/>This field is returned if set. */
		shippingServiceCode: FormControl<string | null | undefined>,

		/**
		 * The integer value set in this field controls the order of the corresponding domestic or international shipping service option in the View Item and Checkout pages. <br/><br/>Sellers can specify up to four domestic shipping services (in four separate <b>shippingService</b> containers), so valid values are 1, 2, 3, and 4. A shipping service option with a <b>sortOrder</b> value of <code>1</code> appears at the top of View Item and Checkout pages. Conversely, a shipping service option with a <b>sortOrder</b> value of <code>1</code> appears at the bottom of the list. <br/><br/>Sellers can specify up to five international shipping services (in five separate <b>shippingService</b> containers), so valid values for international shipping services are 1, 2, 3, 4, and 5. Similarly to domestic shipping service options, the <b>sortOrder</b> value of a international shipping service option controls the placement of that shipping service option in the View Item and Checkout pages. <br/><br/>If the <b>sortOrder</b> field is not supplied, the order of domestic and international shipping service options is determined by the order in which they are listed in the API call. <br/><br/><b>Min</b>: 1. <b>Max</b>: 4 (for domestic shipping service) or 5 (for international shipping service).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateShippingServiceFormGroup() {
		return new FormGroup<ShippingServiceFormProperties>({
			buyerResponsibleForPickup: new FormControl<boolean | null | undefined>(undefined),
			buyerResponsibleForShipping: new FormControl<boolean | null | undefined>(undefined),
			freeShipping: new FormControl<boolean | null | undefined>(undefined),
			shippingCarrierCode: new FormControl<string | null | undefined>(undefined),
			shippingServiceCode: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This root container defines a seller's fulfillment policy for a specific marketplace and category group. This type is used when creating or updating a fulfillment business policy. */
	export interface FulfillmentPolicyRequest {

		/** This container is used to specify whether the fulfillment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings. */
		categoryTypes?: Array<CategoryType>;

		/** A seller-defined description of the fulfillment policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250 */
		description?: string | null;

		/** This field is included and set to <code>true</code> if freight shipping is available for the item. Freight shipping can be used for large items over 150 lbs.<br/><br/><b>Default</b>: false */
		freightShipping?: boolean | null;

		/** This field is included and set to <code>true</code> if the seller wants to use the Global Shipping Program for international shipments. See the <a href="https://pages.ebay.com/help/sell/shipping-globally.html ">Global Shipping Program</a> help topic for more details and requirements on the Global Shipping Program.<br/><br/>It is possible for a seller to use a combination of the Global Shipping Program and other international shipping services. <br/><br/>If this value is set to <code>false</code> or if the field is omitted, the seller is responsible for manually specifying individual international shipping services (if the seller ships internationally)., as described in <a href="https://developer.ebay.com/api-docs/sell/static/seller-accounts/ht_shipping-worldwide.html ">Setting up worldwide shipping</a>. <br/><br/>Sellers can opt in or out of the Global Shipping Program through the Shipping preferences in My eBay.<br /><br /><span class="tablenote"><b>Note</b>: On the US marketplace, the <em><b>Global Shipping Program</b></em> is scheduled to be replaced by a new intermediated international shipping program called <em><b>eBay International Shipping</b></em>. US sellers who are opted in to the Global Shipping Program will be automatically opted in to eBay International Shipping when it becomes available to them. All US sellers will be migrated by March 31, 2023. <br /><br />eBay International Shipping is an account level setting, and no field needs to be set in a Fulfillment business policy to enable it. As long as the US seller's account is opted in to eBay International Shipping, this shipping option will be enabled automatically for all listings where international shipping is available. <br /><br />A US seller who is opted in to eBay International Shipping can also specify individual international shipping service options for a Fulfillment business policy.</span><p><b>Default</b>: false</p> */
		globalShipping?: boolean | null;

		/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
		handlingTime?: TimeDuration;

		/** This field should be included and set to <code>true</code> if local pickup is one of the fulfillment options available to the buyer. It is possible for the seller to make local pickup and some shipping service options available to the buyer.<br/><br/>With local pickup, the buyer and seller make arrangements for pickup time and location.<br/><br/><b>Default</b>: <code>false</code> */
		localPickup?: boolean | null;

		/** The ID of the eBay marketplace to which this fulfillment policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** A seller-defined name for this fulfillment policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64 */
		name?: string | null;

		/** This field should be included and set to <code>true</code> if the seller offers the "Click and Collect" feature for an item. <p>To enable "Click and Collect" on a listing, a seller must be eligible for Click and Collect. Currently, Click and Collect is available to only large retail merchants selling in the eBay AU and UK marketplaces.</p>  <p>In addition to setting this field to <code>true</code>, the merchant must also do the following to enable the "Click and Collect" option on a listing: <ul><li>Have inventory for the product at one or more physical stores tied to the merchant's account. <p>Sellers can use the <b>createInventoryLocaion</b> method in the Inventory API to associate physical stores to their account and they can then can add inventory to specific store locations.</p></li><li>Set an immediate payment requirement on the item. The immediate payment feature requires the seller to: <ul><li>Set the <b>immediatePay</b> flag in the payment policy to 'true'.</li><li>Have a valid store location with a complete street address.</li></ul></li></ul><p>When a merchant successfully lists an item with Click and Collect, prospective buyers within a reasonable distance from one of the merchant's stores (that has stock available) will see the "Available for Click and Collect" option on the listing, along with information on the closest store that has the item.</p><b>Default</b>: false */
		pickupDropOff?: boolean | null;

		/** This type consists of the <b>regionIncluded</b> and <b>regionExcluded</b> arrays, which indicate the areas to where the seller does and doesn't ship. */
		shipToLocations?: RegionSet;

		/** This array is used to provide detailed information on the domestic and international shipping options available for the policy. <br /><br />A separate <b>ShippingOption</b> object is required for domestic shipping service options and for international shipping service options (if the seller ships to international locations). <ul><li>The <b>optionType</b> field is used to indicate whether the <b>ShippingOption</b> object applies to domestic or international shipping, and the <b>costType</b> field is used to indicate whether flat-rate shipping or calculated shipping will be used.</li> <li>The <b>rateTableId</b> field can be used to associate a defined shipping rate table to the policy, and the <b>packageHandlingCost</b> container can be used to set a handling charge for the policy.</li></ul> <p>A separate <b>ShippingServices</b> object will be used to specify cost and other details for every available domestic and international shipping service option. </p> */
		shippingOptions?: Array<ShippingOption>;
	}

	/** This root container defines a seller's fulfillment policy for a specific marketplace and category group. This type is used when creating or updating a fulfillment business policy. */
	export interface FulfillmentPolicyRequestFormProperties {

		/** A seller-defined description of the fulfillment policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250 */
		description: FormControl<string | null | undefined>,

		/** This field is included and set to <code>true</code> if freight shipping is available for the item. Freight shipping can be used for large items over 150 lbs.<br/><br/><b>Default</b>: false */
		freightShipping: FormControl<boolean | null | undefined>,

		/** This field is included and set to <code>true</code> if the seller wants to use the Global Shipping Program for international shipments. See the <a href="https://pages.ebay.com/help/sell/shipping-globally.html ">Global Shipping Program</a> help topic for more details and requirements on the Global Shipping Program.<br/><br/>It is possible for a seller to use a combination of the Global Shipping Program and other international shipping services. <br/><br/>If this value is set to <code>false</code> or if the field is omitted, the seller is responsible for manually specifying individual international shipping services (if the seller ships internationally)., as described in <a href="https://developer.ebay.com/api-docs/sell/static/seller-accounts/ht_shipping-worldwide.html ">Setting up worldwide shipping</a>. <br/><br/>Sellers can opt in or out of the Global Shipping Program through the Shipping preferences in My eBay.<br /><br /><span class="tablenote"><b>Note</b>: On the US marketplace, the <em><b>Global Shipping Program</b></em> is scheduled to be replaced by a new intermediated international shipping program called <em><b>eBay International Shipping</b></em>. US sellers who are opted in to the Global Shipping Program will be automatically opted in to eBay International Shipping when it becomes available to them. All US sellers will be migrated by March 31, 2023. <br /><br />eBay International Shipping is an account level setting, and no field needs to be set in a Fulfillment business policy to enable it. As long as the US seller's account is opted in to eBay International Shipping, this shipping option will be enabled automatically for all listings where international shipping is available. <br /><br />A US seller who is opted in to eBay International Shipping can also specify individual international shipping service options for a Fulfillment business policy.</span><p><b>Default</b>: false</p> */
		globalShipping: FormControl<boolean | null | undefined>,

		/** This field should be included and set to <code>true</code> if local pickup is one of the fulfillment options available to the buyer. It is possible for the seller to make local pickup and some shipping service options available to the buyer.<br/><br/>With local pickup, the buyer and seller make arrangements for pickup time and location.<br/><br/><b>Default</b>: <code>false</code> */
		localPickup: FormControl<boolean | null | undefined>,

		/** The ID of the eBay marketplace to which this fulfillment policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** A seller-defined name for this fulfillment policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64 */
		name: FormControl<string | null | undefined>,

		/** This field should be included and set to <code>true</code> if the seller offers the "Click and Collect" feature for an item. <p>To enable "Click and Collect" on a listing, a seller must be eligible for Click and Collect. Currently, Click and Collect is available to only large retail merchants selling in the eBay AU and UK marketplaces.</p>  <p>In addition to setting this field to <code>true</code>, the merchant must also do the following to enable the "Click and Collect" option on a listing: <ul><li>Have inventory for the product at one or more physical stores tied to the merchant's account. <p>Sellers can use the <b>createInventoryLocaion</b> method in the Inventory API to associate physical stores to their account and they can then can add inventory to specific store locations.</p></li><li>Set an immediate payment requirement on the item. The immediate payment feature requires the seller to: <ul><li>Set the <b>immediatePay</b> flag in the payment policy to 'true'.</li><li>Have a valid store location with a complete street address.</li></ul></li></ul><p>When a merchant successfully lists an item with Click and Collect, prospective buyers within a reasonable distance from one of the merchant's stores (that has stock available) will see the "Available for Click and Collect" option on the listing, along with information on the closest store that has the item.</p><b>Default</b>: false */
		pickupDropOff: FormControl<boolean | null | undefined>,
	}
	export function CreateFulfillmentPolicyRequestFormGroup() {
		return new FormGroup<FulfillmentPolicyRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			freightShipping: new FormControl<boolean | null | undefined>(undefined),
			globalShipping: new FormControl<boolean | null | undefined>(undefined),
			localPickup: new FormControl<boolean | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pickupDropOff: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The response payload for the <b>getFulfillmentPolicies</b> method.<br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getFulfillmentPolicies</b>, so all of the pagination-related fields are for future use.</span> */
	export interface FulfillmentPolicyResponse {

		/** A list of all of the seller's fulfillment policies defined for the specified marketplace. This array will be returned as empty if no fulfillment policies are defined for the specified marketplace. */
		fulfillmentPolicies?: Array<FulfillmentPolicy>;

		/** This field is for future use. */
		href?: string | null;

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** This field is for future use. */
		next?: string | null;

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** This field is for future use. */
		prev?: string | null;

		/**
		 * The total number of fulfillment policies retrieved in the result set.  <br/><br/>If no fulfillment policies are defined for the specified marketplace, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** The response payload for the <b>getFulfillmentPolicies</b> method.<br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getFulfillmentPolicies</b>, so all of the pagination-related fields are for future use.</span> */
	export interface FulfillmentPolicyResponseFormProperties {

		/** This field is for future use. */
		href: FormControl<string | null | undefined>,

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** This field is for future use. */
		next: FormControl<string | null | undefined>,

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** This field is for future use. */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of fulfillment policies retrieved in the result set.  <br/><br/>If no fulfillment policies are defined for the specified marketplace, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateFulfillmentPolicyResponseFormGroup() {
		return new FormGroup<FulfillmentPolicyResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type defines the fields for a seller's international return policy. Sellers have the ability to set separate domestic and international return policies, but if an international return policy is not set, the same return policy settings specified for the domestic return policy are also used for returns for international buyers.  */
	export interface InternationalReturnOverrideType {

		/** This field sets/indicates if the seller offers replacement items to the buyer in the case of an international return. The buyer must be willing to accept a replacement item; otherwise, the seller will need to issue a refund for a return. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a> */
		returnMethod?: string | null;

		/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
		returnPeriod?: TimeDuration;

		/** This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for 'significantly not as described' (SNAD) issues.  <br/><br/>This field is conditionally required if the <b>internationalOverride.returnsAccepted</b> field is set to <code>true</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a> */
		returnShippingCostPayer?: string | null;

		/** If set to <code>true</code>, the seller accepts international returns. If set to <code>false</code>, the seller does not accept international returns.  <br/><br/>This field is conditionally required if the seller chooses to have a separate international return policy. */
		returnsAccepted?: boolean | null;
	}

	/** This type defines the fields for a seller's international return policy. Sellers have the ability to set separate domestic and international return policies, but if an international return policy is not set, the same return policy settings specified for the domestic return policy are also used for returns for international buyers.  */
	export interface InternationalReturnOverrideTypeFormProperties {

		/** This field sets/indicates if the seller offers replacement items to the buyer in the case of an international return. The buyer must be willing to accept a replacement item; otherwise, the seller will need to issue a refund for a return. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a> */
		returnMethod: FormControl<string | null | undefined>,

		/** This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for 'significantly not as described' (SNAD) issues.  <br/><br/>This field is conditionally required if the <b>internationalOverride.returnsAccepted</b> field is set to <code>true</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a> */
		returnShippingCostPayer: FormControl<string | null | undefined>,

		/** If set to <code>true</code>, the seller accepts international returns. If set to <code>false</code>, the seller does not accept international returns.  <br/><br/>This field is conditionally required if the seller chooses to have a separate international return policy. */
		returnsAccepted: FormControl<boolean | null | undefined>,
	}
	export function CreateInternationalReturnOverrideTypeFormGroup() {
		return new FormGroup<InternationalReturnOverrideTypeFormProperties>({
			returnMethod: new FormControl<string | null | undefined>(undefined),
			returnShippingCostPayer: new FormControl<string | null | undefined>(undefined),
			returnsAccepted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This type is used to provide details about any KYC check that is applicable to the managed payments seller. */
	export interface KycCheck {

		/** This field gives a short summary of what is required from the seller. An example might be, '<code>Upload bank document now.</code>'. The <b>detailMessage</b> field will often provide more details on what is required of the seller. */
		alert?: string | null;

		/** The enumeration value returned in this field categorizes the type of details needed for the KYC check. More information about the check is shown in the <b>detailMessage</b> and other applicable, corresponding fields. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/kyc:DetailsType'>eBay API documentation</a> */
		dataRequired?: string | null;

		/** This field gives a detailed message about what is required from the seller. An example might be, '<code>Please upload a bank document by 2020-08-01 to get your account back in good standing.</code>'. */
		detailMessage?: string | null;

		/** The timestamp in this field indicates the date by which the seller should resolve the KYC requirement.<br><br>The timestamp in this field uses the UTC date and time format described in the <a href="https://www.iso.org/iso-8601-date-and-time-format.html" target="_blank">ISO 8601 Standard</a>. See below for this format and an example: <br><br><i>MM-DD-YYYY HH:MM:SS</i><br/><code>06-05-2020 10:34:18</code> */
		dueDate?: string | null;

		/** If applicable and available, a URL will be returned in this field, and the link will take the seller to an eBay page where they can provide the requested information. */
		remedyUrl?: string | null;
	}

	/** This type is used to provide details about any KYC check that is applicable to the managed payments seller. */
	export interface KycCheckFormProperties {

		/** This field gives a short summary of what is required from the seller. An example might be, '<code>Upload bank document now.</code>'. The <b>detailMessage</b> field will often provide more details on what is required of the seller. */
		alert: FormControl<string | null | undefined>,

		/** The enumeration value returned in this field categorizes the type of details needed for the KYC check. More information about the check is shown in the <b>detailMessage</b> and other applicable, corresponding fields. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/kyc:DetailsType'>eBay API documentation</a> */
		dataRequired: FormControl<string | null | undefined>,

		/** This field gives a detailed message about what is required from the seller. An example might be, '<code>Please upload a bank document by 2020-08-01 to get your account back in good standing.</code>'. */
		detailMessage: FormControl<string | null | undefined>,

		/** The timestamp in this field indicates the date by which the seller should resolve the KYC requirement.<br><br>The timestamp in this field uses the UTC date and time format described in the <a href="https://www.iso.org/iso-8601-date-and-time-format.html" target="_blank">ISO 8601 Standard</a>. See below for this format and an example: <br><br><i>MM-DD-YYYY HH:MM:SS</i><br/><code>06-05-2020 10:34:18</code> */
		dueDate: FormControl<string | null | undefined>,

		/** If applicable and available, a URL will be returned in this field, and the link will take the seller to an eBay page where they can provide the requested information. */
		remedyUrl: FormControl<string | null | undefined>,
	}
	export function CreateKycCheckFormGroup() {
		return new FormGroup<KycCheckFormProperties>({
			alert: new FormControl<string | null | undefined>(undefined),
			dataRequired: new FormControl<string | null | undefined>(undefined),
			detailMessage: new FormControl<string | null | undefined>(undefined),
			dueDate: new FormControl<string | null | undefined>(undefined),
			remedyUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is the base response type of the <b>getKYC</b> method. */
	export interface KycResponse {

		/** This array contains one or more KYC checks required from a managed payments seller. The seller may need to provide more documentation and/or information about themselves, their company, or the bank account they are using for seller payouts.<br/><br/>If no KYC checks are currently required from the seller, this array is not returned, and the seller only receives a <code>204 No Content</code> HTTP status code. */
		kycChecks?: Array<KycCheck>;
	}

	/** This is the base response type of the <b>getKYC</b> method. */
	export interface KycResponseFormProperties {
	}
	export function CreateKycResponseFormGroup() {
		return new FormGroup<KycResponseFormProperties>({
		});

	}


	/** This type is used by the <b>paymentPolicy</b> response container, a container which defines a seller's payment business policy for a specific marketplace. */
	export interface PaymentPolicy {

		/** This container indicates whether the fulfillment policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings. */
		categoryTypes?: Array<CategoryType>;

		/** This type is used to specify/indicate that an initial deposit is required for a motor vehicle listing. */
		deposit?: Deposit;

		/** A seller-defined description of the payment policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250 */
		description?: string | null;

		/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
		fullPaymentDueIn?: TimeDuration;

		/** If this field is returned as <code>true</code>, immediate payment is required from the buyer for: <ul><li>A fixed-price item</li><li>An auction item where the buyer uses the 'Buy it Now' option</li><li>A deposit for a motor vehicle listing</li></ul><br />It is possible for the seller to set this field as <code>true</code> in the payment business policy, but it will not apply in some scenarios. For example, immediate payment is not applicable for auction listings that have a winning bidder, for buyer purchases that involve the Best Offer feature, or for transactions that happen offline between the buyer and seller. */
		immediatePay?: boolean | null;

		/** The ID of the eBay marketplace to which the payment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** A seller-defined name for this fulfillment policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64 */
		name?: string | null;

		/** Although this field may be returned for some older payment business policies, payment instructions are no longer supported by payment business policies. If this field is returned, it can be ignored and these payment instructions will not appear in any listings that use the corresponding business policy. <br/><br/><b>Max length</b>: 1000 */
		paymentInstructions?: string | null;

		/** This container is returned to show the payment methods that are accepted for the payment business policy.  <br><br>Sellers do not have to specify any electronic payment methods for listings, so this array will often be returned empty unless the payment business policy is intended for motor vehicle listings or other items in categories where offline payments are required or supported. */
		paymentMethods?: Array<PaymentMethod>;

		/** A unique eBay-assigned ID for a payment business policy. This ID is generated when the policy is created. */
		paymentPolicyId?: string | null;
	}

	/** This type is used by the <b>paymentPolicy</b> response container, a container which defines a seller's payment business policy for a specific marketplace. */
	export interface PaymentPolicyFormProperties {

		/** A seller-defined description of the payment policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250 */
		description: FormControl<string | null | undefined>,

		/** If this field is returned as <code>true</code>, immediate payment is required from the buyer for: <ul><li>A fixed-price item</li><li>An auction item where the buyer uses the 'Buy it Now' option</li><li>A deposit for a motor vehicle listing</li></ul><br />It is possible for the seller to set this field as <code>true</code> in the payment business policy, but it will not apply in some scenarios. For example, immediate payment is not applicable for auction listings that have a winning bidder, for buyer purchases that involve the Best Offer feature, or for transactions that happen offline between the buyer and seller. */
		immediatePay: FormControl<boolean | null | undefined>,

		/** The ID of the eBay marketplace to which the payment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** A seller-defined name for this fulfillment policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64 */
		name: FormControl<string | null | undefined>,

		/** Although this field may be returned for some older payment business policies, payment instructions are no longer supported by payment business policies. If this field is returned, it can be ignored and these payment instructions will not appear in any listings that use the corresponding business policy. <br/><br/><b>Max length</b>: 1000 */
		paymentInstructions: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a payment business policy. This ID is generated when the policy is created. */
		paymentPolicyId: FormControl<string | null | undefined>,
	}
	export function CreatePaymentPolicyFormGroup() {
		return new FormGroup<PaymentPolicyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			immediatePay: new FormControl<boolean | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			paymentInstructions: new FormControl<string | null | undefined>(undefined),
			paymentPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This root container defines a seller's payment business policy for a specific marketplace and category group. This type is used when creating or updating a payment business policy. */
	export interface PaymentPolicyRequest {

		/** This container is used to specify whether the payment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings. */
		categoryTypes?: Array<CategoryType>;

		/** This type is used to specify/indicate that an initial deposit is required for a motor vehicle listing. */
		deposit?: Deposit;

		/** A seller-defined description of the payment business policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250 */
		description?: string | null;

		/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
		fullPaymentDueIn?: TimeDuration;

		/** This field should be included and set to <code>true</code> if the seller wants to require immediate payment from the buyer for: <ul><li>A fixed-price item</li><li>An auction item where the buyer is using the 'Buy it Now' option</li><li>A deposit for a motor vehicle listing</li></ul><br /><b>Default:</b> False */
		immediatePay?: boolean | null;

		/** The ID of the eBay marketplace to which this payment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64 */
		name?: string | null;

		/** <p class="tablenote"><b>Note:</b> DO NOT USE THIS FIELD. Payment instructions are no longer supported by payment business policies.</p>A free-form string field that allows sellers to add detailed payment instructions to their listings. */
		paymentInstructions?: string | null;

		/** <p class="tablenote"><b>Note:</b> This field applies only when the seller needs to specify one or more offline payment methods. eBay now manages the electronic payment options available to buyers to pay for the item.</p>This array is used to specify one or more offline payment methods that will be accepted for payment that occurs off of eBay's platform. */
		paymentMethods?: Array<PaymentMethod>;
	}

	/** This root container defines a seller's payment business policy for a specific marketplace and category group. This type is used when creating or updating a payment business policy. */
	export interface PaymentPolicyRequestFormProperties {

		/** A seller-defined description of the payment business policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250 */
		description: FormControl<string | null | undefined>,

		/** This field should be included and set to <code>true</code> if the seller wants to require immediate payment from the buyer for: <ul><li>A fixed-price item</li><li>An auction item where the buyer is using the 'Buy it Now' option</li><li>A deposit for a motor vehicle listing</li></ul><br /><b>Default:</b> False */
		immediatePay: FormControl<boolean | null | undefined>,

		/** The ID of the eBay marketplace to which this payment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64 */
		name: FormControl<string | null | undefined>,

		/** <p class="tablenote"><b>Note:</b> DO NOT USE THIS FIELD. Payment instructions are no longer supported by payment business policies.</p>A free-form string field that allows sellers to add detailed payment instructions to their listings. */
		paymentInstructions: FormControl<string | null | undefined>,
	}
	export function CreatePaymentPolicyRequestFormGroup() {
		return new FormGroup<PaymentPolicyRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			immediatePay: new FormControl<boolean | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			paymentInstructions: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response payload for the <b>getPaymentPolicies</b> method. <br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getPaymentPolicies</b>, so all of the pagination-related fields are for future use.</span> */
	export interface PaymentPolicyResponse {

		/** This field is for future use. */
		href?: string | null;

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** This field is for future use. */
		next?: string | null;

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** A list of all of the seller's payment business policies defined for the specified marketplace. This array will be returned as empty if no payment business policies are defined for the specified marketplace. */
		paymentPolicies?: Array<PaymentPolicy>;

		/** This field is for future use. */
		prev?: string | null;

		/**
		 * The total number of payment business policies retrieved in the result set.  <br/><br/>If no payment business policies are defined for the specified marketplace, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** The response payload for the <b>getPaymentPolicies</b> method. <br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getPaymentPolicies</b>, so all of the pagination-related fields are for future use.</span> */
	export interface PaymentPolicyResponseFormProperties {

		/** This field is for future use. */
		href: FormControl<string | null | undefined>,

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** This field is for future use. */
		next: FormControl<string | null | undefined>,

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** This field is for future use. */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of payment business policies retrieved in the result set.  <br/><br/>If no payment business policies are defined for the specified marketplace, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePaymentPolicyResponseFormGroup() {
		return new FormGroup<PaymentPolicyResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Type used by the payments program onboarding response */
	export interface PaymentsProgramOnboardingResponse {

		/** This enumeration value indicates the eligibility of payment onboarding for the registered site. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramOnboardingStatus'>eBay API documentation</a> */
		onboardingStatus?: string | null;

		/** An array of the active process steps for payment onboarding and the status of each step. This array includes the step <strong>name</strong>, step <strong>status</strong>, and a <strong>webUrl</strong> to the <code>IN_PROGRESS</code> step. The step names are returned in sequential order. */
		steps?: Array<PaymentsProgramOnboardingSteps>;
	}

	/** Type used by the payments program onboarding response */
	export interface PaymentsProgramOnboardingResponseFormProperties {

		/** This enumeration value indicates the eligibility of payment onboarding for the registered site. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramOnboardingStatus'>eBay API documentation</a> */
		onboardingStatus: FormControl<string | null | undefined>,
	}
	export function CreatePaymentsProgramOnboardingResponseFormGroup() {
		return new FormGroup<PaymentsProgramOnboardingResponseFormProperties>({
			onboardingStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The payments program onboarding steps, status, and link. */
	export interface PaymentsProgramOnboardingSteps {

		/** The name of the step in the steps array. Over time, these names are subject to change as processes change. The output sample contains example step names. Review an actual call response for updated step names. */
		name?: string | null;

		/** This enumeration value indicates the status of the associated step. <p> <span class="tablenote"><strong>Note:</strong> Only one step can be <code>IN_PROGRESS</code> at a time.</span></p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramOnboardingStepStatus'>eBay API documentation</a> */
		status?: string | null;

		/** This URL provides access to the <code>IN_PROGRESS</code> step. */
		webUrl?: string | null;
	}

	/** The payments program onboarding steps, status, and link. */
	export interface PaymentsProgramOnboardingStepsFormProperties {

		/** The name of the step in the steps array. Over time, these names are subject to change as processes change. The output sample contains example step names. Review an actual call response for updated step names. */
		name: FormControl<string | null | undefined>,

		/** This enumeration value indicates the status of the associated step. <p> <span class="tablenote"><strong>Note:</strong> Only one step can be <code>IN_PROGRESS</code> at a time.</span></p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramOnboardingStepStatus'>eBay API documentation</a> */
		status: FormControl<string | null | undefined>,

		/** This URL provides access to the <code>IN_PROGRESS</code> step. */
		webUrl: FormControl<string | null | undefined>,
	}
	export function CreatePaymentsProgramOnboardingStepsFormGroup() {
		return new FormGroup<PaymentsProgramOnboardingStepsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			webUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object containing the sellers status with regards to the specified payment program. */
	export interface PaymentsProgramResponse {

		/** The ID of the eBay marketplace to which the payment program applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** This parameter specifies the payment program whose status is returned by the call.  <br><br>Currently the only supported payments program is <code>EBAY_PAYMENTS</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramType'>eBay API documentation</a> */
		paymentsProgramType?: string | null;

		/** The enumeration value returned in this field indicates whether or not the seller's account is enabled for the payments program. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramStatus'>eBay API documentation</a> */
		status?: string | null;

		/** If returned as <code>true</code>, the seller was at one point opted-in to the associated payment program, but they later opted out of the program. A value of <code>false</code> indicates the seller never opted-in to the program or if they did opt-in to the program, they never opted-out of it.  <br><br>It's important to note that the setting of this field does not indicate the seller's current status regarding the payment program. It is possible for this field to return <code>true</code> while the <b>status</b> field returns <code>OPTED_IN</code>. */
		wasPreviouslyOptedIn?: boolean | null;
	}

	/** The response object containing the sellers status with regards to the specified payment program. */
	export interface PaymentsProgramResponseFormProperties {

		/** The ID of the eBay marketplace to which the payment program applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** This parameter specifies the payment program whose status is returned by the call.  <br><br>Currently the only supported payments program is <code>EBAY_PAYMENTS</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramType'>eBay API documentation</a> */
		paymentsProgramType: FormControl<string | null | undefined>,

		/** The enumeration value returned in this field indicates whether or not the seller's account is enabled for the payments program. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramStatus'>eBay API documentation</a> */
		status: FormControl<string | null | undefined>,

		/** If returned as <code>true</code>, the seller was at one point opted-in to the associated payment program, but they later opted out of the program. A value of <code>false</code> indicates the seller never opted-in to the program or if they did opt-in to the program, they never opted-out of it.  <br><br>It's important to note that the setting of this field does not indicate the seller's current status regarding the payment program. It is possible for this field to return <code>true</code> while the <b>status</b> field returns <code>OPTED_IN</code>. */
		wasPreviouslyOptedIn: FormControl<boolean | null | undefined>,
	}
	export function CreatePaymentsProgramResponseFormGroup() {
		return new FormGroup<PaymentsProgramResponseFormProperties>({
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			paymentsProgramType: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			wasPreviouslyOptedIn: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A seller program in to which a seller can opt-in. */
	export interface Program {

		/** A seller program in to which a seller can opt-in. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ProgramTypeEnum'>eBay API documentation</a> */
		programType?: string | null;
	}

	/** A seller program in to which a seller can opt-in. */
	export interface ProgramFormProperties {

		/** A seller program in to which a seller can opt-in. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ProgramTypeEnum'>eBay API documentation</a> */
		programType: FormControl<string | null | undefined>,
	}
	export function CreateProgramFormGroup() {
		return new FormGroup<ProgramFormProperties>({
			programType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The base response type of the <b>getOptedInPrograms</b> method. */
	export interface Programs {

		/** An array of seller programs that the seller's account is opted in to. */
		programs?: Array<Program>;
	}

	/** The base response type of the <b>getOptedInPrograms</b> method. */
	export interface ProgramsFormProperties {
	}
	export function CreateProgramsFormGroup() {
		return new FormGroup<ProgramsFormProperties>({
		});

	}


	/** This type is used to provide details about each shipping rate table that is returned in the <b>getRateTables</b> response. */
	export interface RateTable {

		/** A two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> country code representing the eBay marketplace where the shipping rate table is defined. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		countryCode?: string | null;

		/** This enumeration value returned here indicates whether the shipping rate table is a domestic or international shipping rate table. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ShippingOptionTypeEnum'>eBay API documentation</a> */
		locality?: string | null;

		/** The seller-defined name for the shipping rate table. */
		name?: string | null;

		/** A unique eBay-assigned ID for a seller's shipping rate table. These <b>rateTableId</b> values are used to associate shipping rate tables to fulfillment business policies or directly to listings through an add/revise/relist call in the Trading API. */
		rateTableId?: string | null;
	}

	/** This type is used to provide details about each shipping rate table that is returned in the <b>getRateTables</b> response. */
	export interface RateTableFormProperties {

		/** A two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> country code representing the eBay marketplace where the shipping rate table is defined. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		countryCode: FormControl<string | null | undefined>,

		/** This enumeration value returned here indicates whether the shipping rate table is a domestic or international shipping rate table. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ShippingOptionTypeEnum'>eBay API documentation</a> */
		locality: FormControl<string | null | undefined>,

		/** The seller-defined name for the shipping rate table. */
		name: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a seller's shipping rate table. These <b>rateTableId</b> values are used to associate shipping rate tables to fulfillment business policies or directly to listings through an add/revise/relist call in the Trading API. */
		rateTableId: FormControl<string | null | undefined>,
	}
	export function CreateRateTableFormGroup() {
		return new FormGroup<RateTableFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rateTableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is the base response of the <b>getRateTables</b> method. */
	export interface RateTableResponse {

		/** An array of all shipping rate tables defined for a marketplace (or all marketplaces if no <b>country_code</b> query parameter is used). This array will be returned as empty if the seller has no defined shipping rate tables for the specified marketplace. */
		rateTables?: Array<RateTable>;
	}

	/** This type is the base response of the <b>getRateTables</b> method. */
	export interface RateTableResponseFormProperties {
	}
	export function CreateRateTableResponseFormGroup() {
		return new FormGroup<RateTableResponseFormProperties>({
		});

	}


	/** This type is used by the <b>returnPolicy</b> response container, a container which defines a seller's return business policy for a specific marketplace. */
	export interface ReturnPolicy {

		/** This container indicates which category group that the return policy applies to.<br/><br/><span class="tablenote"><b>Note</b>: Return business policies are not applicable to motor vehicle listings, so the <b>categoryTypes.name</b> value will always be <code>ALL_EXCLUDING_MOTORS_VEHICLES</code> for return business policies.</span> */
		categoryTypes?: Array<CategoryType>;

		/** A seller-defined description of the return business policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250 */
		description?: string | null;

		/** <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer supports extended holiday returns. Any value supplied in this field is neither read nor returned.</p> */
		extendedHolidayReturnsOffered?: boolean | null;

		/** This type defines the fields for a seller's international return policy. Sellers have the ability to set separate domestic and international return policies, but if an international return policy is not set, the same return policy settings specified for the domestic return policy are also used for returns for international buyers. */
		internationalOverride?: InternationalReturnOverrideType;

		/** The ID of the eBay marketplace to which this return business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64 */
		name?: string | null;

		/** If a seller indicates that they will accept buyer returns, this value will be set to <code>MONEY_BACK</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RefundMethodEnum'>eBay API documentation</a> */
		refundMethod?: string | null;

		/** <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer allows sellers to charge a restocking fee for buyer remorse returns. If this field is included, it is ignored and it is no longer returned.</p> */
		restockingFeePercentage?: string | null;

		/** This text-based field provides more details on seller-specified return instructions. This field is only returned if set for the return business policy. <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is no longer supported on many eBay marketplaces. To see if a marketplace and eBay category does support this field, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>. Then you will look for the <b>policyDescriptionEnabled</b> field with a value of <code>true</code> for the eBay category.</span></p><br/><b>Max length</b>: 5000 (8000 for DE) */
		returnInstructions?: string | null;

		/** This field is only returned if the seller is willing to offer a replacement item as an alternative to 'Money Back'. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a> */
		returnMethod?: string | null;

		/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
		returnPeriod?: TimeDuration;

		/** A unique eBay-assigned ID for a return business policy. This ID is generated when the policy is created. */
		returnPolicyId?: string | null;

		/** This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for SNAD-related issues. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a> */
		returnShippingCostPayer?: string | null;

		/** If this field is returned as <code>true</code>, the seller accepts returns. <br/><br/><span class="tablenote"><strong>Note:</strong>Top-Rated sellers must accept item returns and the <b>handlingTime</b> should be set to zero days or one day for a listing to receive a Top-Rated Plus badge on the View Item or search result pages. For more information on eBay's Top-Rated seller program, see <a href="https://pages.ebay.com/help/sell/top-rated.html ">Becoming a Top Rated Seller and qualifying for Top Rated Plus benefits</a>.</span> */
		returnsAccepted?: boolean | null;
	}

	/** This type is used by the <b>returnPolicy</b> response container, a container which defines a seller's return business policy for a specific marketplace. */
	export interface ReturnPolicyFormProperties {

		/** A seller-defined description of the return business policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250 */
		description: FormControl<string | null | undefined>,

		/** <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer supports extended holiday returns. Any value supplied in this field is neither read nor returned.</p> */
		extendedHolidayReturnsOffered: FormControl<boolean | null | undefined>,

		/** The ID of the eBay marketplace to which this return business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64 */
		name: FormControl<string | null | undefined>,

		/** If a seller indicates that they will accept buyer returns, this value will be set to <code>MONEY_BACK</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RefundMethodEnum'>eBay API documentation</a> */
		refundMethod: FormControl<string | null | undefined>,

		/** <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer allows sellers to charge a restocking fee for buyer remorse returns. If this field is included, it is ignored and it is no longer returned.</p> */
		restockingFeePercentage: FormControl<string | null | undefined>,

		/** This text-based field provides more details on seller-specified return instructions. This field is only returned if set for the return business policy. <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is no longer supported on many eBay marketplaces. To see if a marketplace and eBay category does support this field, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>. Then you will look for the <b>policyDescriptionEnabled</b> field with a value of <code>true</code> for the eBay category.</span></p><br/><b>Max length</b>: 5000 (8000 for DE) */
		returnInstructions: FormControl<string | null | undefined>,

		/** This field is only returned if the seller is willing to offer a replacement item as an alternative to 'Money Back'. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a> */
		returnMethod: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a return business policy. This ID is generated when the policy is created. */
		returnPolicyId: FormControl<string | null | undefined>,

		/** This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for SNAD-related issues. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a> */
		returnShippingCostPayer: FormControl<string | null | undefined>,

		/** If this field is returned as <code>true</code>, the seller accepts returns. <br/><br/><span class="tablenote"><strong>Note:</strong>Top-Rated sellers must accept item returns and the <b>handlingTime</b> should be set to zero days or one day for a listing to receive a Top-Rated Plus badge on the View Item or search result pages. For more information on eBay's Top-Rated seller program, see <a href="https://pages.ebay.com/help/sell/top-rated.html ">Becoming a Top Rated Seller and qualifying for Top Rated Plus benefits</a>.</span> */
		returnsAccepted: FormControl<boolean | null | undefined>,
	}
	export function CreateReturnPolicyFormGroup() {
		return new FormGroup<ReturnPolicyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			extendedHolidayReturnsOffered: new FormControl<boolean | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refundMethod: new FormControl<string | null | undefined>(undefined),
			restockingFeePercentage: new FormControl<string | null | undefined>(undefined),
			returnInstructions: new FormControl<string | null | undefined>(undefined),
			returnMethod: new FormControl<string | null | undefined>(undefined),
			returnPolicyId: new FormControl<string | null | undefined>(undefined),
			returnShippingCostPayer: new FormControl<string | null | undefined>(undefined),
			returnsAccepted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This root container defines a seller's return business policy for a specific marketplace and category group. This type is used when creating or updating a return business policy. */
	export interface ReturnPolicyRequest {

		/** This container indicates which category group that the return policy applies to.<br/><br/><span class="tablenote"><b>Note</b>: Return business policies are not applicable to motor vehicle listings, so the <b>categoryTypes.name</b> value must be set to <code>ALL_EXCLUDING_MOTORS_VEHICLES</code> for return business policies.</span> */
		categoryTypes?: Array<CategoryType>;

		/** A seller-defined description of the return business policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250 */
		description?: string | null;

		/** <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer supports extended holiday returns. Any value supplied in this field is neither read nor returned.</p> */
		extendedHolidayReturnsOffered?: boolean | null;

		/** This type defines the fields for a seller's international return policy. Sellers have the ability to set separate domestic and international return policies, but if an international return policy is not set, the same return policy settings specified for the domestic return policy are also used for returns for international buyers. */
		internationalOverride?: InternationalReturnOverrideType;

		/** The ID of the eBay marketplace to which this return business policy applies.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** A seller-defined name for this return business policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64 */
		name?: string | null;

		/** This value indicates the refund method that will be used by the seller for buyer returns.<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> If this field is not included in a return business policy, it will default to MONEY_BACK.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RefundMethodEnum'>eBay API documentation</a> */
		refundMethod?: string | null;

		/** <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer allows sellers to charge a restocking fee for buyer remorse returns. If this field is included, it is ignored.</p> */
		restockingFeePercentage?: string | null;

		/** This text-based field provides more details on seller-specified return instructions. <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is no longer supported on many eBay marketplaces. To see if a marketplace and eBay category does support this field, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>. Then you will look for the <b>policyDescriptionEnabled</b> field with a value of <code>true</code> for the eBay category.</span></p><br/><b>Max length</b>: 5000 (8000 for DE) */
		returnInstructions?: string | null;

		/** This field can be used if the seller is willing and able to offer a replacement item as an alternative to 'Money Back'. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a> */
		returnMethod?: string | null;

		/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
		returnPeriod?: TimeDuration;

		/** This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for SNAD-related issues.  <br/><br/>This field is conditionally required if <b>returnsAccepted</b> is set to <code>true</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a> */
		returnShippingCostPayer?: string | null;

		/** If set to <code>true</code>, the seller accepts returns. <p><span class="tablenote"><strong>Note:</strong>Top-Rated sellers must accept item returns and the <b>handlingTime</b> should be set to zero days or one day for a listing to receive a Top-Rated Plus badge on the View Item or search result pages. For more information on eBay's Top-Rated seller program, see <a href="http://pages.ebay.com/help/sell/top-rated.html ">Becoming a Top Rated Seller and qualifying for Top Rated Plus benefits</a>.</span></p> */
		returnsAccepted?: boolean | null;
	}

	/** This root container defines a seller's return business policy for a specific marketplace and category group. This type is used when creating or updating a return business policy. */
	export interface ReturnPolicyRequestFormProperties {

		/** A seller-defined description of the return business policy. This description is only for the seller's use, and is not exposed on any eBay pages.  <br/><br/><b>Max length</b>: 250 */
		description: FormControl<string | null | undefined>,

		/** <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer supports extended holiday returns. Any value supplied in this field is neither read nor returned.</p> */
		extendedHolidayReturnsOffered: FormControl<boolean | null | undefined>,

		/** The ID of the eBay marketplace to which this return business policy applies.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** A seller-defined name for this return business policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64 */
		name: FormControl<string | null | undefined>,

		/** This value indicates the refund method that will be used by the seller for buyer returns.<p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> If this field is not included in a return business policy, it will default to MONEY_BACK.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RefundMethodEnum'>eBay API documentation</a> */
		refundMethod: FormControl<string | null | undefined>,

		/** <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer allows sellers to charge a restocking fee for buyer remorse returns. If this field is included, it is ignored.</p> */
		restockingFeePercentage: FormControl<string | null | undefined>,

		/** This text-based field provides more details on seller-specified return instructions. <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is no longer supported on many eBay marketplaces. To see if a marketplace and eBay category does support this field, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>. Then you will look for the <b>policyDescriptionEnabled</b> field with a value of <code>true</code> for the eBay category.</span></p><br/><b>Max length</b>: 5000 (8000 for DE) */
		returnInstructions: FormControl<string | null | undefined>,

		/** This field can be used if the seller is willing and able to offer a replacement item as an alternative to 'Money Back'. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a> */
		returnMethod: FormControl<string | null | undefined>,

		/** This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for SNAD-related issues.  <br/><br/>This field is conditionally required if <b>returnsAccepted</b> is set to <code>true</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a> */
		returnShippingCostPayer: FormControl<string | null | undefined>,

		/** If set to <code>true</code>, the seller accepts returns. <p><span class="tablenote"><strong>Note:</strong>Top-Rated sellers must accept item returns and the <b>handlingTime</b> should be set to zero days or one day for a listing to receive a Top-Rated Plus badge on the View Item or search result pages. For more information on eBay's Top-Rated seller program, see <a href="http://pages.ebay.com/help/sell/top-rated.html ">Becoming a Top Rated Seller and qualifying for Top Rated Plus benefits</a>.</span></p> */
		returnsAccepted: FormControl<boolean | null | undefined>,
	}
	export function CreateReturnPolicyRequestFormGroup() {
		return new FormGroup<ReturnPolicyRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			extendedHolidayReturnsOffered: new FormControl<boolean | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refundMethod: new FormControl<string | null | undefined>(undefined),
			restockingFeePercentage: new FormControl<string | null | undefined>(undefined),
			returnInstructions: new FormControl<string | null | undefined>(undefined),
			returnMethod: new FormControl<string | null | undefined>(undefined),
			returnShippingCostPayer: new FormControl<string | null | undefined>(undefined),
			returnsAccepted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The response payload for the <b>getReturnPolicies</b> method. <br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getReturnPolicies</b>, so all of the pagination-related fields are for future use.</span> */
	export interface ReturnPolicyResponse {

		/** This field is for future use. */
		href?: string | null;

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** This field is for future use. */
		next?: string | null;

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** This field is for future use. */
		prev?: string | null;

		/** A list of all of the seller's return business policies defined for the specified marketplace. This array will be returned as empty if no return business policies are defined for the specified marketplace. */
		returnPolicies?: Array<ReturnPolicy>;

		/**
		 * The total number of return business policies retrieved in the result set.  <br/><br/>If no return business policies are defined for the specified marketplace, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** The response payload for the <b>getReturnPolicies</b> method. <br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getReturnPolicies</b>, so all of the pagination-related fields are for future use.</span> */
	export interface ReturnPolicyResponseFormProperties {

		/** This field is for future use. */
		href: FormControl<string | null | undefined>,

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** This field is for future use. */
		next: FormControl<string | null | undefined>,

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** This field is for future use. */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of return business policies retrieved in the result set.  <br/><br/>If no return business policies are defined for the specified marketplace, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateReturnPolicyResponseFormGroup() {
		return new FormGroup<ReturnPolicyResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type is used to provide sales tax settings for a specific tax jurisdiction. */
	export interface SalesTax {

		/** The country code enumeration value identifies the country to which this sales tax rate applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		countryCode?: string | null;

		/** A unique ID that identifies the sales tax jurisdiction to which the sales tax rate applies (for example, a state within the United States). */
		salesTaxJurisdictionId?: string | null;

		/** The sales tax rate that will be applied to sales price. The <b>shippingAndHandlingTaxed</b> value will indicate whether or not sales tax is also applied to shipping and handling charges<br><br>Although it is a string, a percentage value is returned here, such as <code>7.75</code> */
		salesTaxPercentage?: string | null;

		/** If returned as <code>true</code>, sales tax is also applied to shipping and handling charges, and not just the total sales price of the order. */
		shippingAndHandlingTaxed?: boolean | null;
	}

	/** This type is used to provide sales tax settings for a specific tax jurisdiction. */
	export interface SalesTaxFormProperties {

		/** The country code enumeration value identifies the country to which this sales tax rate applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum'>eBay API documentation</a> */
		countryCode: FormControl<string | null | undefined>,

		/** A unique ID that identifies the sales tax jurisdiction to which the sales tax rate applies (for example, a state within the United States). */
		salesTaxJurisdictionId: FormControl<string | null | undefined>,

		/** The sales tax rate that will be applied to sales price. The <b>shippingAndHandlingTaxed</b> value will indicate whether or not sales tax is also applied to shipping and handling charges<br><br>Although it is a string, a percentage value is returned here, such as <code>7.75</code> */
		salesTaxPercentage: FormControl<string | null | undefined>,

		/** If returned as <code>true</code>, sales tax is also applied to shipping and handling charges, and not just the total sales price of the order. */
		shippingAndHandlingTaxed: FormControl<boolean | null | undefined>,
	}
	export function CreateSalesTaxFormGroup() {
		return new FormGroup<SalesTaxFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			salesTaxJurisdictionId: new FormControl<string | null | undefined>(undefined),
			salesTaxPercentage: new FormControl<string | null | undefined>(undefined),
			shippingAndHandlingTaxed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This type is used by the base request of the <b>createOrReplaceSalesTax</b>.  */
	export interface SalesTaxBase {

		/** This field is used to set the sales tax rate for the tax jurisdiction set in the call URI. When applicable to an order, this sales tax rate will be applied to sales price. The <b>shippingAndHandlingTaxed</b> value will indicate whether or not sales tax is also applied to shipping and handling charges<br><br>Although it is a string, a percentage value is set here, such as <code>7.75</code>. */
		salesTaxPercentage?: string | null;

		/** This field is set to <code>true</code> if the seller wishes to apply sales tax to shipping and handling charges, and not just the total sales price of the order. Otherwise, this field's value should be set to <code>false</code>. */
		shippingAndHandlingTaxed?: boolean | null;
	}

	/** This type is used by the base request of the <b>createOrReplaceSalesTax</b>.  */
	export interface SalesTaxBaseFormProperties {

		/** This field is used to set the sales tax rate for the tax jurisdiction set in the call URI. When applicable to an order, this sales tax rate will be applied to sales price. The <b>shippingAndHandlingTaxed</b> value will indicate whether or not sales tax is also applied to shipping and handling charges<br><br>Although it is a string, a percentage value is set here, such as <code>7.75</code>. */
		salesTaxPercentage: FormControl<string | null | undefined>,

		/** This field is set to <code>true</code> if the seller wishes to apply sales tax to shipping and handling charges, and not just the total sales price of the order. Otherwise, this field's value should be set to <code>false</code>. */
		shippingAndHandlingTaxed: FormControl<boolean | null | undefined>,
	}
	export function CreateSalesTaxBaseFormGroup() {
		return new FormGroup<SalesTaxBaseFormProperties>({
			salesTaxPercentage: new FormControl<string | null | undefined>(undefined),
			shippingAndHandlingTaxed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This type is used by the root response of the <b>getSalesTaxes</b> method. */
	export interface SalesTaxes {

		/** An array of one or more sales tax rate entries for a specific marketplace (or all applicable marketplaces if the <b>country_code</b> query parameter is not used.<br><br>If no sales tax rate entries are set up, no response payload is returned, but only an HTTP status code of <code>204 No Content</code>. */
		salesTaxes?: Array<SalesTax>;
	}

	/** This type is used by the root response of the <b>getSalesTaxes</b> method. */
	export interface SalesTaxesFormProperties {
	}
	export function CreateSalesTaxesFormGroup() {
		return new FormGroup<SalesTaxesFormProperties>({
		});

	}


	/** The base response of the <b>getAdvertisingEligibility</b> method that contains the seller eligibility information for one or more advertising programs. */
	export interface SellerEligibilityMultiProgramResponse {

		/** An array of response fields that define the seller eligibility for eBay adverstising programs. */
		advertisingEligibility?: Array<SellerEligibilityResponse>;
	}

	/** The base response of the <b>getAdvertisingEligibility</b> method that contains the seller eligibility information for one or more advertising programs. */
	export interface SellerEligibilityMultiProgramResponseFormProperties {
	}
	export function CreateSellerEligibilityMultiProgramResponseFormGroup() {
		return new FormGroup<SellerEligibilityMultiProgramResponseFormProperties>({
		});

	}


	/** A type that is used to provide the seller's eligibility status for an eBay advertising program. */
	export interface SellerEligibilityResponse {

		/** The eBay advertising program for which a seller may be eligible. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/plser:AdvertisingProgramEnum'>eBay API documentation</a> */
		programType?: string | null;

		/** The reason why a seller is ineligible for the specified eBay advertising program.<br /><br />This field is only returned if the seller is ineligible for the eBay advertising program. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/plser:SellerIneligibleReasonEnum'>eBay API documentation</a> */
		reason?: string | null;

		/** The seller elibibilty status for the specified eBay advertising program. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/cmlib:SellerEligibilityEnum'>eBay API documentation</a> */
		status?: string | null;
	}

	/** A type that is used to provide the seller's eligibility status for an eBay advertising program. */
	export interface SellerEligibilityResponseFormProperties {

		/** The eBay advertising program for which a seller may be eligible. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/plser:AdvertisingProgramEnum'>eBay API documentation</a> */
		programType: FormControl<string | null | undefined>,

		/** The reason why a seller is ineligible for the specified eBay advertising program.<br /><br />This field is only returned if the seller is ineligible for the eBay advertising program. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/plser:SellerIneligibleReasonEnum'>eBay API documentation</a> */
		reason: FormControl<string | null | undefined>,

		/** The seller elibibilty status for the specified eBay advertising program. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/cmlib:SellerEligibilityEnum'>eBay API documentation</a> */
		status: FormControl<string | null | undefined>,
	}
	export function CreateSellerEligibilityResponseFormGroup() {
		return new FormGroup<SellerEligibilityResponseFormProperties>({
			programType: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type used by the <b>sellingLimit</b> container, a container that lists the monthly cap for the quantity of items sold and total sales amount allowed for the seller's account. */
	export interface SellingLimit {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. When passing in an amount in a request payload, both <b>currency</b> and <b>value</b> fields are required, and both fields are also always returned for an amount in a response field. */
		amount?: Amount;

		/**
		 * This field shows the monthly cap for total quantity sold allowed for the seller's account. This container may not be returned if a seller does not have a monthly cap for total quantity sold.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;
	}

	/** Type used by the <b>sellingLimit</b> container, a container that lists the monthly cap for the quantity of items sold and total sales amount allowed for the seller's account. */
	export interface SellingLimitFormProperties {

		/**
		 * This field shows the monthly cap for total quantity sold allowed for the seller's account. This container may not be returned if a seller does not have a monthly cap for total quantity sold.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateSellingLimitFormGroup() {
		return new FormGroup<SellingLimitFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type is used by the base response of the <b>getPrivileges</b> method. */
	export interface SellingPrivileges {

		/** If this field is returned as <code>true</code>, the seller's registration is completed. If this field is returned as <code>false</code>, the registration process is not complete. */
		sellerRegistrationCompleted?: boolean | null;

		/** Type used by the <b>sellingLimit</b> container, a container that lists the monthly cap for the quantity of items sold and total sales amount allowed for the seller's account. */
		sellingLimit?: SellingLimit;
	}

	/** This type is used by the base response of the <b>getPrivileges</b> method. */
	export interface SellingPrivilegesFormProperties {

		/** If this field is returned as <code>true</code>, the seller's registration is completed. If this field is returned as <code>false</code>, the registration process is not complete. */
		sellerRegistrationCompleted: FormControl<boolean | null | undefined>,
	}
	export function CreateSellingPrivilegesFormGroup() {
		return new FormGroup<SellingPrivilegesFormProperties>({
			sellerRegistrationCompleted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Complex type that that gets populated with a response containing a fulfillment policy. */
	export interface SetFulfillmentPolicyResponse {

		/** This container indicates whether the fulfillment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings. */
		categoryTypes?: Array<CategoryType>;

		/** A seller-defined description of the fulfillment policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250 */
		description?: string | null;

		/** If returned as <code>true</code>, the seller offers freight shipping. Freight shipping can be used for large items over 150 lbs. */
		freightShipping?: boolean | null;

		/** A unique eBay-assigned ID for a fulfillment business policy. This ID is generated when the policy is created. */
		fulfillmentPolicyId?: string | null;

		/** If returned as <code>true</code>, the eBay Global Shipping Program will be used by the seller to ship items to international locations.<br /><br /><span class="tablenote"><b>Note</b>: On the US marketplace, the <em><b>Global Shipping Program</b></em> is scheduled to be replaced by a new intermediated international shipping program called <em><b>eBay International Shipping</b></em>. US sellers who are opted in to the Global Shipping Program will be automatically opted in to eBay International Shipping when it becomes available to them. All US sellers will be migrated by March 31, 2023. <br /><br />eBay International Shipping is an account level setting, and no field needs to be set in a Fulfillment business policy to enable it. As long as the US seller's account is opted in to eBay International Shipping, this shipping option will be enabled automatically for all listings where international shipping is available. <br /><br />A US seller who is opted in to eBay International Shipping can also specify individual international shipping service options for a Fulfillment business policy.</span> */
		globalShipping?: boolean | null;

		/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
		handlingTime?: TimeDuration;

		/** If returned as <code>true</code>, local pickup is available for this policy. */
		localPickup?: boolean | null;

		/** The ID of the eBay marketplace to which this fulfillment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** A seller-defined name for this fulfillment business policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64 */
		name?: string | null;

		/** If returned as <code>true</code>, the seller offers the "Click and Collect" option. <br/><br/>Currently, "Click and Collect" is available only to large retail merchants the eBay AU and UK marketplaces. */
		pickupDropOff?: boolean | null;

		/** This type consists of the <b>regionIncluded</b> and <b>regionExcluded</b> arrays, which indicate the areas to where the seller does and doesn't ship. */
		shipToLocations?: RegionSet;

		/** This array is used to provide detailed information on the domestic and international shipping options available for the policy. A separate <b>ShippingOption</b> object covers domestic shipping service options and international shipping service options (if the seller ships to international locations). <br /><br />The <b>optionType</b> field indicates whether the <b>ShippingOption</b> object applies to domestic or international shipping, and the <b>costType</b> field indicates whether flat-rate shipping or calculated shipping will be used. <p>A separate <b>ShippingServices</b> object is used to specify cost and other details for every available domestic and international shipping service option. </p> */
		shippingOptions?: Array<ShippingOption>;

		/** An array of one or more errors or warnings that were generated during the processing of the request. If there were no issues with the request, this array will return empty. */
		warnings?: Array<Error>;
	}

	/** Complex type that that gets populated with a response containing a fulfillment policy. */
	export interface SetFulfillmentPolicyResponseFormProperties {

		/** A seller-defined description of the fulfillment policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250 */
		description: FormControl<string | null | undefined>,

		/** If returned as <code>true</code>, the seller offers freight shipping. Freight shipping can be used for large items over 150 lbs. */
		freightShipping: FormControl<boolean | null | undefined>,

		/** A unique eBay-assigned ID for a fulfillment business policy. This ID is generated when the policy is created. */
		fulfillmentPolicyId: FormControl<string | null | undefined>,

		/** If returned as <code>true</code>, the eBay Global Shipping Program will be used by the seller to ship items to international locations.<br /><br /><span class="tablenote"><b>Note</b>: On the US marketplace, the <em><b>Global Shipping Program</b></em> is scheduled to be replaced by a new intermediated international shipping program called <em><b>eBay International Shipping</b></em>. US sellers who are opted in to the Global Shipping Program will be automatically opted in to eBay International Shipping when it becomes available to them. All US sellers will be migrated by March 31, 2023. <br /><br />eBay International Shipping is an account level setting, and no field needs to be set in a Fulfillment business policy to enable it. As long as the US seller's account is opted in to eBay International Shipping, this shipping option will be enabled automatically for all listings where international shipping is available. <br /><br />A US seller who is opted in to eBay International Shipping can also specify individual international shipping service options for a Fulfillment business policy.</span> */
		globalShipping: FormControl<boolean | null | undefined>,

		/** If returned as <code>true</code>, local pickup is available for this policy. */
		localPickup: FormControl<boolean | null | undefined>,

		/** The ID of the eBay marketplace to which this fulfillment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** A seller-defined name for this fulfillment business policy. Names must be unique for policies assigned to the same marketplace. <br/><br/><b>Max length</b>: 64 */
		name: FormControl<string | null | undefined>,

		/** If returned as <code>true</code>, the seller offers the "Click and Collect" option. <br/><br/>Currently, "Click and Collect" is available only to large retail merchants the eBay AU and UK marketplaces. */
		pickupDropOff: FormControl<boolean | null | undefined>,
	}
	export function CreateSetFulfillmentPolicyResponseFormGroup() {
		return new FormGroup<SetFulfillmentPolicyResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			freightShipping: new FormControl<boolean | null | undefined>(undefined),
			fulfillmentPolicyId: new FormControl<string | null | undefined>(undefined),
			globalShipping: new FormControl<boolean | null | undefined>(undefined),
			localPickup: new FormControl<boolean | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pickupDropOff: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Complex type that that gets populated with a response containing a payment policy. */
	export interface SetPaymentPolicyResponse {

		/** This container indicates whether the payment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings. */
		categoryTypes?: Array<CategoryType>;

		/** This type is used to specify/indicate that an initial deposit is required for a motor vehicle listing. */
		deposit?: Deposit;

		/** A seller-defined description of the payment business policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250 */
		description?: string | null;

		/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
		fullPaymentDueIn?: TimeDuration;

		/** The value returned in this field will reflect the value set by the seller in the <b>immediatePay</b> request field. A value of <code>true</code> indicates that immediate payment is required from the buyer for: <ul><li>A fixed-price item</li><li>An auction item where the buyer is using the 'Buy it Now' option</li><li>A deposit for a motor vehicle listing</li></ul><br />It is possible for the seller to set this field as <code>true</code> in the payment business policy, but it will not apply in some scenarios. For example, immediate payment is not applicable for auction listings that have a winning bidder, for buyer purchases that involve the Best Offer feature, or for transactions that happen offline between the buyer and seller. */
		immediatePay?: boolean | null;

		/** The ID of the eBay marketplace to which this payment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64 */
		name?: string | null;

		/** <p class="tablenote"><b>Note:</b> NO LONGER SUPPORTED. Although this field may be returned for some older payment business policies, payment instructions are no longer supported by payment business policies. If this field is returned, it can be ignored and these payment instructions will not appear in any listings that use the corresponding business policy.</p>A free-form string field that allows sellers to add detailed payment instructions to their listings. */
		paymentInstructions?: string | null;

		/** This array shows the available payment methods that the seller has set for the payment business policy.<br /><br />Sellers do not have to specify any electronic payment methods for listings, so this array will often be returned empty unless the payment business policy is intended for motor vehicle listings or other items in categories where offline payments are required or supported. */
		paymentMethods?: Array<PaymentMethod>;

		/** A unique eBay-assigned ID for a payment business policy. This ID is generated when the policy is created. */
		paymentPolicyId?: string | null;

		/** An array of one or more errors or warnings that were generated during the processing of the request. If there were no issues with the request, this array will return empty. */
		warnings?: Array<Error>;
	}

	/** Complex type that that gets populated with a response containing a payment policy. */
	export interface SetPaymentPolicyResponseFormProperties {

		/** A seller-defined description of the payment business policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250 */
		description: FormControl<string | null | undefined>,

		/** The value returned in this field will reflect the value set by the seller in the <b>immediatePay</b> request field. A value of <code>true</code> indicates that immediate payment is required from the buyer for: <ul><li>A fixed-price item</li><li>An auction item where the buyer is using the 'Buy it Now' option</li><li>A deposit for a motor vehicle listing</li></ul><br />It is possible for the seller to set this field as <code>true</code> in the payment business policy, but it will not apply in some scenarios. For example, immediate payment is not applicable for auction listings that have a winning bidder, for buyer purchases that involve the Best Offer feature, or for transactions that happen offline between the buyer and seller. */
		immediatePay: FormControl<boolean | null | undefined>,

		/** The ID of the eBay marketplace to which this payment business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64 */
		name: FormControl<string | null | undefined>,

		/** <p class="tablenote"><b>Note:</b> NO LONGER SUPPORTED. Although this field may be returned for some older payment business policies, payment instructions are no longer supported by payment business policies. If this field is returned, it can be ignored and these payment instructions will not appear in any listings that use the corresponding business policy.</p>A free-form string field that allows sellers to add detailed payment instructions to their listings. */
		paymentInstructions: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a payment business policy. This ID is generated when the policy is created. */
		paymentPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateSetPaymentPolicyResponseFormGroup() {
		return new FormGroup<SetPaymentPolicyResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			immediatePay: new FormControl<boolean | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			paymentInstructions: new FormControl<string | null | undefined>(undefined),
			paymentPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that is populated with a response containing a return policies. */
	export interface SetReturnPolicyResponse {

		/** This field always returns <code>ALL_EXCLUDING_MOTORS_VEHICLES</code> for return business policies, since return business policies are not applicable to motor vehicle listings. */
		categoryTypes?: Array<CategoryType>;

		/** A seller-defined description of the return business policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250 */
		description?: string | null;

		/** <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer supports extended holiday returns. This field should no longer be returned.</p> */
		extendedHolidayReturnsOffered?: boolean | null;

		/** This type defines the fields for a seller's international return policy. Sellers have the ability to set separate domestic and international return policies, but if an international return policy is not set, the same return policy settings specified for the domestic return policy are also used for returns for international buyers. */
		internationalOverride?: InternationalReturnOverrideType;

		/** The ID of the eBay marketplace to which this return business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** A seller-defined name for this return business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64 */
		name?: string | null;

		/** If a seller indicates that they will accept buyer returns, this value will be <code>MONEY_BACK</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RefundMethodEnum'>eBay API documentation</a> */
		refundMethod?: string | null;

		/** <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer allows sellers to charge a restocking fee for buyer remorse returns.</p> */
		restockingFeePercentage?: string | null;

		/** This text-based field provides more details on seller-specified return instructions. <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is no longer supported on many eBay marketplaces. To see if a marketplace and eBay category does support this field, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>. Then you will look for the <b>policyDescriptionEnabled</b> field with a value of <code>true</code> for the eBay category.</span></p><br/><b>Max length</b>: 5000 (8000 for DE) */
		returnInstructions?: string | null;

		/** This field will be returned if the seller is willing and able to offer a replacement item as an alternative to 'Money Back'. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a> */
		returnMethod?: string | null;

		/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
		returnPeriod?: TimeDuration;

		/** A unique eBay-assigned ID for a return business policy. This ID is generated when the policy is created. */
		returnPolicyId?: string | null;

		/** This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Note that the seller is always responsible for return shipping costs for SNAD-related issues.  <br/><br/>This container will be returned unless the business policy states that the seller does not accept returns. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a> */
		returnShippingCostPayer?: string | null;

		/** If set to <code>true</code>, the seller accepts returns. If set to <code>false</code>, this field indicates that the seller does not accept returns. */
		returnsAccepted?: boolean | null;

		/** An array of one or more errors or warnings that were generated during the processing of the request. If there were no issues with the request, this array will return empty. */
		warnings?: Array<Error>;
	}

	/** A complex type that is populated with a response containing a return policies. */
	export interface SetReturnPolicyResponseFormProperties {

		/** A seller-defined description of the return business policy. This description is only for the seller's use, and is not exposed on any eBay pages. This field is returned if set for the policy. <br/><br/><b>Max length</b>: 250 */
		description: FormControl<string | null | undefined>,

		/** <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer supports extended holiday returns. This field should no longer be returned.</p> */
		extendedHolidayReturnsOffered: FormControl<boolean | null | undefined>,

		/** The ID of the eBay marketplace to which this return business policy applies. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** A seller-defined name for this return business policy. Names must be unique for policies assigned to the same marketplace.<br /><br /><b>Max length:</b> 64 */
		name: FormControl<string | null | undefined>,

		/** If a seller indicates that they will accept buyer returns, this value will be <code>MONEY_BACK</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:RefundMethodEnum'>eBay API documentation</a> */
		refundMethod: FormControl<string | null | undefined>,

		/** <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is deprecated, since eBay no longer allows sellers to charge a restocking fee for buyer remorse returns.</p> */
		restockingFeePercentage: FormControl<string | null | undefined>,

		/** This text-based field provides more details on seller-specified return instructions. <p class="tablenote"><span  style="color: #dd1e31;"><b>Important!</b></span> This field is no longer supported on many eBay marketplaces. To see if a marketplace and eBay category does support this field, call <a href="/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies">getReturnPolicies</a> method of the <b>Metadata API</b>. Then you will look for the <b>policyDescriptionEnabled</b> field with a value of <code>true</code> for the eBay category.</span></p><br/><b>Max length</b>: 5000 (8000 for DE) */
		returnInstructions: FormControl<string | null | undefined>,

		/** This field will be returned if the seller is willing and able to offer a replacement item as an alternative to 'Money Back'. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum'>eBay API documentation</a> */
		returnMethod: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a return business policy. This ID is generated when the policy is created. */
		returnPolicyId: FormControl<string | null | undefined>,

		/** This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either <code>BUYER</code> or <code>SELLER</code>.  <br/><br/>Note that the seller is always responsible for return shipping costs for SNAD-related issues.  <br/><br/>This container will be returned unless the business policy states that the seller does not accept returns. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a> */
		returnShippingCostPayer: FormControl<string | null | undefined>,

		/** If set to <code>true</code>, the seller accepts returns. If set to <code>false</code>, this field indicates that the seller does not accept returns. */
		returnsAccepted: FormControl<boolean | null | undefined>,
	}
	export function CreateSetReturnPolicyResponseFormGroup() {
		return new FormGroup<SetReturnPolicyResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			extendedHolidayReturnsOffered: new FormControl<boolean | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refundMethod: new FormControl<string | null | undefined>(undefined),
			restockingFeePercentage: new FormControl<string | null | undefined>(undefined),
			returnInstructions: new FormControl<string | null | undefined>(undefined),
			returnMethod: new FormControl<string | null | undefined>(undefined),
			returnPolicyId: new FormControl<string | null | undefined>(undefined),
			returnShippingCostPayer: new FormControl<string | null | undefined>(undefined),
			returnsAccepted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This type is used by the <strong>getSubscription</strong> response container, which defines the subscription types and levels for the seller account. */
	export interface Subscription {

		/** The marketplace with which the subscription is associated. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** The subscription ID. */
		subscriptionId?: string | null;

		/** The subscription level. For example, subscription levels for an eBay store include Starter, Basic, Featured, Anchor, and Enterprise levels. */
		subscriptionLevel?: string | null;

		/** The kind of entity with which the subscription is associated, such as an eBay store. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:SubscriptionTypeEnum'>eBay API documentation</a> */
		subscriptionType?: string | null;

		/** A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned. */
		term?: TimeDuration;
	}

	/** This type is used by the <strong>getSubscription</strong> response container, which defines the subscription types and levels for the seller account. */
	export interface SubscriptionFormProperties {

		/** The marketplace with which the subscription is associated. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** The subscription ID. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The subscription level. For example, subscription levels for an eBay store include Starter, Basic, Featured, Anchor, and Enterprise levels. */
		subscriptionLevel: FormControl<string | null | undefined>,

		/** The kind of entity with which the subscription is associated, such as an eBay store. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:SubscriptionTypeEnum'>eBay API documentation</a> */
		subscriptionType: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			subscriptionLevel: new FormControl<string | null | undefined>(undefined),
			subscriptionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used by the response payload for the <b>getSubscription</b> method.<br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getSubscription</b>, so all of the pagination-related fields are for future use.</span> */
	export interface SubscriptionResponse {

		/** This field is for future use. */
		href?: string | null;

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** This field is for future use. */
		next?: string | null;

		/** An array of subscriptions associated with the seller account. */
		subscriptions?: Array<Subscription>;

		/**
		 * The total number of subscriptions displayed on the current page of results.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** This type is used by the response payload for the <b>getSubscription</b> method.<br /><br /><span class="tablenote"><b>Note</b>: Pagination has not yet been enabled for <b>getSubscription</b>, so all of the pagination-related fields are for future use.</span> */
	export interface SubscriptionResponseFormProperties {

		/** This field is for future use. */
		href: FormControl<string | null | undefined>,

		/**
		 * This field is for future use.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** This field is for future use. */
		next: FormControl<string | null | undefined>,

		/**
		 * The total number of subscriptions displayed on the current page of results.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionResponseFormGroup() {
		return new FormGroup<SubscriptionResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This method allows developers to check the seller eligibility status for eBay advertising programs.
		 * Get advertising_eligibility
		 * @param {string} program_types A comma-separated list of eBay advertising programs.<br /><br /><span class="tablenote"><b>Tip:</b> See the <a href="/api-docs/sell/account/types/plser:AdvertisingProgramEnum"> AdvertisingProgramEnum</a> type for possible values.</span><br /><br />If no programs are specified, the results will be returned for all programs.
		 * @return {SellerEligibilityMultiProgramResponse} Success
		 */
		GetAdvertisingEligibility(program_types: string | null | undefined): Observable<SellerEligibilityMultiProgramResponse> {
			return this.http.get<SellerEligibilityMultiProgramResponse>(this.baseUri + 'advertising_eligibility?program_types=' + (program_types == null ? '' : encodeURIComponent(program_types)), {});
		}

		/**
		 * This method retrieves the list of custom policies specified by the <b>policy_types</b> query parameter for the selected eBay marketplace.<br/> <br/> <span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>As a part of Digital Services Act (DSA) requirements, all custom policies will become global (and no longer marketplace-specific) on April 3, 2023. A seller will be able to apply any custom policy to listings on any eBay marketplace where they sell.<br/><br/>Due to this change, the X-EBAY-C-MARKETPLACE-ID request header is no longer relevant. If this header is passed in after April 3, it will just be ignored in all four methods.</p></div><br/><br/>For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
		 * Get custom_policy/
		 * @param {string} policy_types This query parameter specifies the type of custom policies to be returned.<br /><br />Multiple policy types may be requested in a single call by providing a comma-delimited set of all policy types to be returned.<br/><br/><span class="tablenote"><strong>Note:</strong> Omitting this query parameter from a request will also return policies of all policy types.</span><br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul>
		 * @return {CustomPolicyResponse} Success
		 */
		GetCustomPolicies(policy_types: string | null | undefined): Observable<CustomPolicyResponse> {
			return this.http.get<CustomPolicyResponse>(this.baseUri + 'custom_policy/?policy_types=' + (policy_types == null ? '' : encodeURIComponent(policy_types)), {});
		}

		/**
		 * This method creates a new custom policy in which a seller specifies their terms for complying with local governmental regulations. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul>Each Custom Policy targets a <b>policyType</b> and <b>eBay marketplace</b> combination. Multiple policies may be created as follows: <ul><li><b>Product Compliance</b>: a maximum of 10 policies per eBay marketplace may be created</li> <li><b>Takeback</b>: a maximum of 3 policies per eBay marketplace may be created</li></ul>A successful create policy call returns an HTTP status code of <b>201 Created</b> with the system-generated policy ID included in the <b>Location</b> response header.<br/><br/><b>Product Compliance Policy</b><br/><br/>Product Compliance policies disclose product information as required for regulatory compliance.<br/><br/><span class="tablenote"><strong>Note:</strong> A maximum of 10 Product Compliance policies per eBay marketplace may be created.</span> <br/><br/> <b>Takeback Policy</b><br/><br/>Takeback policies describe the seller's legal obligation to take back a previously purchased item when the buyer purchases a new one.<br/><br/><span class="tablenote"><strong>Note:</strong> A maximum of 3 Takeback policies per eBay marketplace may be created.</span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>As a part of Digital Services Act (DSA) requirements, all custom policies will become global (and no longer marketplace-specific) on April 3, 2023. A seller will be able to apply any custom policy to listings on any eBay marketplace where they sell.<br/><br/>Due to this change, the X-EBAY-C-MARKETPLACE-ID request header is no longer relevant. If this header is passed in after April 3, it will just be ignored in all four methods.</p></div>
		 * Post custom_policy/
		 * @param {CustomPolicyCreateRequest} requestBody Request to create a new Custom Policy.
		 * @return {void} 
		 */
		CreateCustomPolicy(requestBody: CustomPolicyCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'custom_policy/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the custom policy specified by the <b>custom_policy_id</b> path parameter for the selected eBay marketplace.<br/> <br/> <span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>As a part of Digital Services Act (DSA) requirements, all custom policies will become global (and no longer marketplace-specific) on April 3, 2023. A seller will be able to apply any custom policy to listings on any eBay marketplace where they sell.<br/><br/>Due to this change, the X-EBAY-C-MARKETPLACE-ID request header is no longer relevant. If this header is passed in after April 3, it will just be ignored in all four methods.</p></div><br/><br/>For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
		 * Get custom_policy/{custom_policy_id}
		 * @param {string} custom_policy_id This path parameter is the unique custom policy identifier for the policy to be returned.<br/><br/><span class="tablenote"><strong>Note:</strong> This value is automatically assigned by the system when the policy is created.</span>
		 * @return {CustomPolicy} Success
		 */
		GetCustomPolicy(custom_policy_id: string): Observable<CustomPolicy> {
			return this.http.get<CustomPolicy>(this.baseUri + 'custom_policy/' + (custom_policy_id == null ? '' : encodeURIComponent(custom_policy_id)), {});
		}

		/**
		 * This method updates an existing custom policy specified by the <b>custom_policy_id</b> path parameter for the selected marketplace. This method overwrites the policy's <b>Name</b>, <b>Label</b>, and <b>Description</b> fields. Therefore, the complete, current text of all three policy fields must be included in the request payload even when one or two of these fields will not actually be updated.<br/> <br/>For example, the value for the <b>Label</b> field is to be updated, but the <b>Name</b> and <b>Description</b> values will remain unchanged. The existing <b>Name</b> and <b>Description</b> values, as they are defined in the current policy, must also be passed in. <br/><br/>A successful policy update call returns an HTTP status code of <b>204 No Content</b>.<br/><br/><span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>As a part of Digital Services Act (DSA) requirements, all custom policies will become global (and no longer marketplace-specific) on April 3, 2023. A seller will be able to apply any custom policy to listings on any eBay marketplace where they sell.<br/><br/>Due to this change, the X-EBAY-C-MARKETPLACE-ID request header is no longer relevant. If this header is passed in after April 3, it will just be ignored in all four methods.</p></div><br/><br/>For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
		 * Put custom_policy/{custom_policy_id}
		 * @param {string} custom_policy_id This path parameter is the unique custom policy identifier for the policy to be returned.<br/><br/><span class="tablenote"><strong>Note:</strong> This value is automatically assigned by the system when the policy is created.</span>
		 * @param {CustomPolicyRequest} requestBody Request to update a current custom policy.
		 * @return {void} 
		 */
		UpdateCustomPolicy(custom_policy_id: string, requestBody: CustomPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'custom_policy/' + (custom_policy_id == null ? '' : encodeURIComponent(custom_policy_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves all the fulfillment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
		 * Get fulfillment_policy
		 * @param {string} marketplace_id This query parameter specifies the eBay marketplace of the policies you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
		 * @return {FulfillmentPolicyResponse} Success
		 */
		GetFulfillmentPolicies(marketplace_id: string): Observable<FulfillmentPolicyResponse> {
			return this.http.get<FulfillmentPolicyResponse>(this.baseUri + 'fulfillment_policy?marketplace_id=' + (marketplace_id == null ? '' : encodeURIComponent(marketplace_id)), {});
		}

		/**
		 * This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item purchases. Fulfillment policies include the shipment options that the seller offers to buyers.  <br/><br/>Each policy targets a specific eBay marketplace and a category group type, and you can create multiple policies for each combination. <br/><br/>A successful request returns the <b>getFulfillmentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>  <p><b>Using the eBay standard envelope service (eSE)</b></p>  <p>The eBay standard envelope service (eSE) is a domestic envelope service with tracking through eBay. This service applies to specific Trading Cards categories (not all categories are supported), and to Coins & Paper Money, Postcards, and Stamps. See <a href="/api-docs/sell/static/seller-accounts/using-the-ebay-standard-envelope-service.html" target="_blank">Using the eBay standard envelope (eSE) service</a>.</p>
		 * Post fulfillment_policy/
		 * @param {FulfillmentPolicyRequest} requestBody Request to create a seller account fulfillment policy.
		 * @return {void} 
		 */
		CreateFulfillmentPolicy(requestBody: FulfillmentPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'fulfillment_policy/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the details for a specific fulfillment policy. In the request, supply both the policy <code>name</code> and its associated <code>marketplace_id</code> as query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
		 * Get fulfillment_policy/get_by_policy_name
		 * @param {string} marketplace_id This query parameter specifies the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
		 * @param {string} name This query parameter specifies the seller-defined name of the fulfillment policy you want to retrieve.
		 * @return {FulfillmentPolicy} Success
		 */
		GetFulfillmentPolicyByName(marketplace_id: string, name: string): Observable<FulfillmentPolicy> {
			return this.http.get<FulfillmentPolicy>(this.baseUri + 'fulfillment_policy/get_by_policy_name?marketplace_id=' + (marketplace_id == null ? '' : encodeURIComponent(marketplace_id)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * This method deletes a fulfillment policy. Supply the ID of the policy you want to delete in the <b>fulfillmentPolicyId</b> path parameter.
		 * Delete fulfillment_policy/{fulfillmentPolicyId}
		 * @param {string} fulfillmentPolicyId This path parameter specifies the ID of the fulfillment policy to delete.
		 * @return {void} 
		 */
		DeleteFulfillmentPolicy(fulfillmentPolicyId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'fulfillment_policy/' + (fulfillmentPolicyId == null ? '' : encodeURIComponent(fulfillmentPolicyId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the complete details of a fulfillment policy. Supply the ID of the policy you want to retrieve using the <b>fulfillmentPolicyId</b> path parameter.
		 * Get fulfillment_policy/{fulfillmentPolicyId}
		 * @param {string} fulfillmentPolicyId This path parameter specifies the ID of the fulfillment policy you want to retrieve.
		 * @return {FulfillmentPolicy} Success
		 */
		GetFulfillmentPolicy(fulfillmentPolicyId: string): Observable<FulfillmentPolicy> {
			return this.http.get<FulfillmentPolicy>(this.baseUri + 'fulfillment_policy/' + (fulfillmentPolicyId == null ? '' : encodeURIComponent(fulfillmentPolicyId)), {});
		}

		/**
		 * This method updates an existing fulfillment policy. Specify the policy you want to update using the <b>fulfillment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
		 * Put fulfillment_policy/{fulfillmentPolicyId}
		 * @param {string} fulfillmentPolicyId This path parameter specifies the ID of the fulfillment policy you want to update.
		 * @param {FulfillmentPolicyRequest} requestBody Fulfillment policy request
		 * @return {SetFulfillmentPolicyResponse} OK
		 */
		UpdateFulfillmentPolicy(fulfillmentPolicyId: string, requestBody: FulfillmentPolicyRequest): Observable<SetFulfillmentPolicyResponse> {
			return this.http.put<SetFulfillmentPolicyResponse>(this.baseUri + 'fulfillment_policy/' + (fulfillmentPolicyId == null ? '' : encodeURIComponent(fulfillmentPolicyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <span class="tablenote"><b>Note:</b>This method was originally created to see which onboarding requirements were still pending for sellers being onboarded for eBay managed payments, but now that all seller accounts are onboarded globally, this method should now just returne an empty payload with a <code>204 No Content</code> HTTP status code. </span>
		 * Get kyc
		 * @return {KycResponse} OK
		 */
		GetKYC(): Observable<KycResponse> {
			return this.http.get<KycResponse>(this.baseUri + 'kyc', {});
		}

		/**
		 * This method retrieves all the payment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
		 * Get payment_policy
		 * @param {string} marketplace_id This query parameter specifies the eBay marketplace of the policies you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
		 * @return {PaymentPolicyResponse} Success
		 */
		GetPaymentPolicies(marketplace_id: string): Observable<PaymentPolicyResponse> {
			return this.http.get<PaymentPolicyResponse>(this.baseUri + 'payment_policy?marketplace_id=' + (marketplace_id == null ? '' : encodeURIComponent(marketplace_id)), {});
		}

		/**
		 * This method creates a new payment policy where the policy encapsulates seller's terms for order payments.  <br/><br/>Each policy targets a specific eBay marketplace and category group, and you can create multiple policies for each combination.  <br/><br/>A successful request returns the <b>getPaymentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>
		 * Post payment_policy
		 * @param {PaymentPolicyRequest} requestBody Payment policy request
		 * @return {void} 
		 */
		CreatePaymentPolicy(requestBody: PaymentPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'payment_policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the details of a specific payment policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
		 * Get payment_policy/get_by_policy_name
		 * @param {string} marketplace_id This query parameter specifies the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
		 * @param {string} name This query parameter specifies the seller-defined name of the payment policy you want to retrieve.
		 * @return {PaymentPolicy} Success
		 */
		GetPaymentPolicyByName(marketplace_id: string, name: string): Observable<PaymentPolicy> {
			return this.http.get<PaymentPolicy>(this.baseUri + 'payment_policy/get_by_policy_name?marketplace_id=' + (marketplace_id == null ? '' : encodeURIComponent(marketplace_id)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * This method deletes a payment policy. Supply the ID of the policy you want to delete in the <b>paymentPolicyId</b> path parameter.
		 * Delete payment_policy/{payment_policy_id}
		 * @param {string} payment_policy_id This path parameter specifies the ID of the payment policy you want to delete.
		 * @return {void} 
		 */
		DeletePaymentPolicy(payment_policy_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'payment_policy/' + (payment_policy_id == null ? '' : encodeURIComponent(payment_policy_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve using the <b>paymentPolicyId</b> path parameter.
		 * Get payment_policy/{payment_policy_id}
		 * @param {string} payment_policy_id This path parameter specifies the ID of the payment policy you want to retrieve.
		 * @return {PaymentPolicy} Success
		 */
		GetPaymentPolicy(payment_policy_id: string): Observable<PaymentPolicy> {
			return this.http.get<PaymentPolicy>(this.baseUri + 'payment_policy/' + (payment_policy_id == null ? '' : encodeURIComponent(payment_policy_id)), {});
		}

		/**
		 * This method updates an existing payment policy. Specify the policy you want to update using the <b>payment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
		 * Put payment_policy/{payment_policy_id}
		 * @param {string} payment_policy_id This path parameter specifies the ID of the payment policy you want to update.
		 * @param {PaymentPolicyRequest} requestBody Payment policy request
		 * @return {SetPaymentPolicyResponse} OK
		 */
		UpdatePaymentPolicy(payment_policy_id: string, requestBody: PaymentPolicyRequest): Observable<SetPaymentPolicyResponse> {
			return this.http.put<SetPaymentPolicyResponse>(this.baseUri + 'payment_policy/' + (payment_policy_id == null ? '' : encodeURIComponent(payment_policy_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method returns whether or not the user is opted-in to the specified payments program. Sellers opt-in to payments programs by marketplace and you use the <b>marketplace_id</b> path parameter to specify the marketplace of the status flag you want returned.
		 * Get payments_program/{marketplace_id}/{payments_program_type}
		 * @param {string} marketplace_id This path parameter specifies the eBay marketplace of the payments program for which you want to retrieve the seller's status.
		 * @param {string} payments_program_type This path parameter specifies the payments program whose status is returned by the call.
		 * @return {PaymentsProgramResponse} Success
		 */
		GetPaymentsProgram(marketplace_id: string, payments_program_type: string): Observable<PaymentsProgramResponse> {
			return this.http.get<PaymentsProgramResponse>(this.baseUri + 'payments_program/' + (marketplace_id == null ? '' : encodeURIComponent(marketplace_id)) + '/' + (payments_program_type == null ? '' : encodeURIComponent(payments_program_type)), {});
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method retrieves a seller's onboarding status for a payments program for a specified marketplace. The overall onboarding status of the seller and the status of each onboarding step is returned.
		 * Get payments_program/{marketplace_id}/{payments_program_type}/onboarding
		 * @param {string} marketplace_id The eBay marketplace ID associated with the onboarding status to retrieve.
		 * @param {string} payments_program_type The type of payments program whose status is returned by the method.
		 * @return {PaymentsProgramOnboardingResponse} Success
		 */
		GetPaymentsProgramOnboarding(marketplace_id: string, payments_program_type: string): Observable<PaymentsProgramOnboardingResponse> {
			return this.http.get<PaymentsProgramOnboardingResponse>(this.baseUri + 'payments_program/' + (marketplace_id == null ? '' : encodeURIComponent(marketplace_id)) + '/' + (payments_program_type == null ? '' : encodeURIComponent(payments_program_type)) + '/onboarding', {});
		}

		/**
		 * This method retrieves the seller's current set of privileges, including whether or not the seller's eBay registration has been completed, as well as the details of their site-wide <b>sellingLimt</b> (the amount and quantity they can sell on a given day).
		 * Get privilege
		 * @return {SellingPrivileges} Success
		 */
		GetPrivileges(): Observable<SellingPrivileges> {
			return this.http.get<SellingPrivileges>(this.baseUri + 'privilege', {});
		}

		/**
		 * This method gets a list of the seller programs that the seller has opted-in to.
		 * Get program/get_opted_in_programs
		 * @return {Programs} Success
		 */
		GetOptedInPrograms(): Observable<Programs> {
			return this.http.get<Programs>(this.baseUri + 'program/get_opted_in_programs', {});
		}

		/**
		 * This method opts the seller in to an eBay seller program. Refer to the <a href="/api-docs/sell/account/overview.html#opt-in" target="_blank">Account API overview</a> for information about available eBay seller programs.<br /><br /><span class="tablenote"><b>Note:</b> It can take up to 24-hours for eBay to process your request to opt-in to a Seller Program. Use the <a href="/api-docs/sell/account/resources/program/methods/getOptedInPrograms" target="_blank">getOptedInPrograms</a> call to check the status of your request after the processing period has passed.</span>
		 * Post program/opt_in
		 * @param {Program} requestBody Program being opted-in to.
		 * @return {string} Success
		 */
		OptInToProgram(requestBody: Program): Observable<string> {
			return this.http.post(this.baseUri + 'program/opt_in', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * This method opts the seller out of a seller program to which you have previously opted-in to. Get a list of the seller programs you have opted-in to using the <b>getOptedInPrograms</b> call.
		 * Post program/opt_out
		 * @param {Program} requestBody Program being opted-out of.
		 * @return {string} Success
		 */
		OptOutOfProgram(requestBody: Program): Observable<string> {
			return this.http.post(this.baseUri + 'program/opt_out', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * This method retrieves a seller's <i>shipping rate tables</i> for the country specified in the <b>country_code</b> query parameter. If you call this method without specifying a country code, the call returns all of the seller's shipping rate tables.  <br/><br/>The method's response includes a <b>rateTableId</b> for each table defined by the seller. This <b>rateTableId</b> value is used in add/revise item call or in create/update fulfillment business policy call to specify the shipping rate table to use for that policy's domestic or international shipping options. <br/><br/>This call currently supports getting rate tables related to the following marketplaces:<ul><li><code>EBAY_AU</code></li> <li><code>EBAY_CA</code></li> <li><code>EBAY_DE</code></li> <li><code>EBAY_ES</code></li> <li><code>EBAY_FR</code></li> <li><code>EBAY_GB</code></li> <li><code>EBAY_IT</code></li> <li><code>EBAY_US</code></li></ul>  <span class="tablenote"><b>Note:</b> Rate tables created with the Trading API might not have been assigned a <b>rateTableId</b> at the time of their creation. This method can assign and return <b>rateTableId</b> values for rate tables with missing IDs if you make a request using the <b>country_code</b> where the seller has defined rate tables.</span>  <br/><br/>Sellers can define up to 40 shipping rate tables for their account, which lets them set up different rate tables for each of the marketplaces they sell into. Go to <a href="https://www.ebay.com/ship/rt ">Shipping rate tables</a> in  <b>My eBay</b> to create and update rate tables.
		 * Get rate_table
		 * @param {string} country_code This query parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code of country for which you want shipping rate table information. If you do not specify a country code, the request returns all of the seller's defined shipping rate tables for all eBay marketplaces. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum
		 * @return {RateTableResponse} Success
		 */
		GetRateTables(country_code: string | null | undefined): Observable<RateTableResponse> {
			return this.http.get<RateTableResponse>(this.baseUri + 'rate_table?country_code=' + (country_code == null ? '' : encodeURIComponent(country_code)), {});
		}

		/**
		 * This method retrieves all the return policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
		 * Get return_policy
		 * @param {string} marketplace_id This query parameter specifies the ID of the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
		 * @return {ReturnPolicyResponse} Success
		 */
		GetReturnPolicies(marketplace_id: string): Observable<ReturnPolicyResponse> {
			return this.http.get<ReturnPolicyResponse>(this.baseUri + 'return_policy?marketplace_id=' + (marketplace_id == null ? '' : encodeURIComponent(marketplace_id)), {});
		}

		/**
		 * This method creates a new return policy where the policy encapsulates seller's terms for returning items.  <br/><br/>Each policy targets a specific marketplace, and you can create multiple policies for each marketplace. Return policies are not applicable to motor-vehicle listings.<br/><br/>A successful request returns the <b>getReturnPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>
		 * Post return_policy
		 * @param {ReturnPolicyRequest} requestBody Return policy request
		 * @return {void} 
		 */
		CreateReturnPolicy(requestBody: ReturnPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'return_policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the details of a specific return policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
		 * Get return_policy/get_by_policy_name
		 * @param {string} marketplace_id This query parameter specifies the ID of the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
		 * @param {string} name This query parameter specifies the seller-defined name of the return policy you want to retrieve.
		 * @return {ReturnPolicy} Success
		 */
		GetReturnPolicyByName(marketplace_id: string, name: string): Observable<ReturnPolicy> {
			return this.http.get<ReturnPolicy>(this.baseUri + 'return_policy/get_by_policy_name?marketplace_id=' + (marketplace_id == null ? '' : encodeURIComponent(marketplace_id)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * This method deletes a return policy. Supply the ID of the policy you want to delete in the <b>returnPolicyId</b> path parameter.
		 * Delete return_policy/{return_policy_id}
		 * @param {string} return_policy_id This path parameter specifies the ID of the return policy you want to delete.
		 * @return {void} 
		 */
		DeleteReturnPolicy(return_policy_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'return_policy/' + (return_policy_id == null ? '' : encodeURIComponent(return_policy_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the complete details of the return policy specified by the <b>returnPolicyId</b> path parameter.
		 * Get return_policy/{return_policy_id}
		 * @param {string} return_policy_id This path parameter specifies the of the return policy you want to retrieve.
		 * @return {ReturnPolicy} Success
		 */
		GetReturnPolicy(return_policy_id: string): Observable<ReturnPolicy> {
			return this.http.get<ReturnPolicy>(this.baseUri + 'return_policy/' + (return_policy_id == null ? '' : encodeURIComponent(return_policy_id)), {});
		}

		/**
		 * This method updates an existing return policy. Specify the policy you want to update using the <b>return_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
		 * Put return_policy/{return_policy_id}
		 * @param {string} return_policy_id This path parameter specifies the ID of the return policy you want to update.
		 * @param {ReturnPolicyRequest} requestBody Container for a return policy request.
		 * @return {SetReturnPolicyResponse} OK
		 */
		UpdateReturnPolicy(return_policy_id: string, requestBody: ReturnPolicyRequest): Observable<SetReturnPolicyResponse> {
			return this.http.put<SetReturnPolicyResponse>(this.baseUri + 'return_policy/' + (return_policy_id == null ? '' : encodeURIComponent(return_policy_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this call to retrieve all sales tax table entries that the seller has defined for a specific country. All four response fields will be returned for each tax jurisdiction that matches the search criteria. <br/><br/><span class="tablenote"><b>Important!</b> In most US states and territories, eBay now 'collects and remits' sales tax, so sellers can no longer configure sales tax rates for these states/territories.</span>
		 * Get sales_tax
		 * @param {string} country_code This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code for the country whose tax table you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum
		 * @return {SalesTaxes} Success
		 */
		GetSalesTaxes(country_code: string): Observable<SalesTaxes> {
			return this.http.get<SalesTaxes>(this.baseUri + 'sales_tax?country_code=' + (country_code == null ? '' : encodeURIComponent(country_code)), {});
		}

		/**
		 * This call deletes a sales tax table entry for a jurisdiction. Specify the jurisdiction to delete using the <b>countryCode</b> and <b>jurisdictionId</b> path parameters.
		 * Delete sales_tax/{countryCode}/{jurisdictionId}
		 * @param {string} countryCode This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code for the country whose sales tax table entry you want to delete.
		 * @param {string} jurisdictionId This path parameter specifies the ID of the sales tax jurisdiction whose table entry you want to delete. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.
		 * @return {void} 
		 */
		DeleteSalesTax(countryCode: string, jurisdictionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sales_tax/' + (countryCode == null ? '' : encodeURIComponent(countryCode)) + '/' + (jurisdictionId == null ? '' : encodeURIComponent(jurisdictionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This call gets the current sales tax table entry for a specific tax jurisdiction. Specify the jurisdiction to retrieve using the <b>countryCode</b> and <b>jurisdictionId</b> path parameters. All four response fields will be returned if a sales tax entry exists for the tax jurisdiction. Otherwise, the response will be returned as empty.<br/><br/><span class="tablenote"><b>Important!</b> In most US states and territories, eBay now 'collects and remits' sales tax, so sellers can no longer configure sales tax rates for these states/territories.</span>
		 * Get sales_tax/{countryCode}/{jurisdictionId}
		 * @param {string} countryCode This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code for the country whose sales tax table you want to retrieve.
		 * @param {string} jurisdictionId This path parameter specifies the ID of the sales tax jurisdiction for the tax table entry you want to retrieve. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.
		 * @return {SalesTax} Success
		 */
		GetSalesTax(countryCode: string, jurisdictionId: string): Observable<SalesTax> {
			return this.http.get<SalesTax>(this.baseUri + 'sales_tax/' + (countryCode == null ? '' : encodeURIComponent(countryCode)) + '/' + (jurisdictionId == null ? '' : encodeURIComponent(jurisdictionId)), {});
		}

		/**
		 * This method creates or updates a sales tax table entry for a jurisdiction. Specify the tax table entry you want to configure using the two path parameters: <b>countryCode</b> and <b>jurisdictionId</b>.  <br/><br/>A tax table entry for a jurisdiction is comprised of two fields: one for the jurisdiction's sales-tax rate and another that's a boolean value indicating whether or not shipping and handling are taxed in the jurisdiction.  <br/><br/>You can set up <i>tax tables</i> for countries that support different <i>tax jurisdictions</i>. Currently, only Canada, India, and the US support separate tax jurisdictions. If you sell into any of these countries, you can set up tax tables for any of the country's jurisdictions. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.  <br/><br/>For details on using this call, see <a href="/api-docs/sell/static/seller-accounts/tax-tables.html">Establishing sales-tax tables</a>. <br/><br/><span class="tablenote"><b>Important!</b> In the US, eBay now 'collects and remits' sales tax for every US state except for Missouri (and a few US territories), so sellers can no longer configure sales tax rates for any states except Missouri. With eBay 'collect and remit', eBay calculates the sales tax, collects the sales tax from the buyer, and remits the sales tax to the tax authorities at the buyer's location.</span>
		 * Put sales_tax/{countryCode}/{jurisdictionId}
		 * @param {string} countryCode This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code for the country for which you want to create a sales tax table entry.
		 * @param {string} jurisdictionId This path parameter specifies the ID of the tax jurisdiction for the table entry you want to create. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.
		 * @param {SalesTaxBase} requestBody A container that describes the how the sales tax is calculated.
		 * @return {void} 
		 */
		CreateOrReplaceSalesTax(countryCode: string, jurisdictionId: string, requestBody: SalesTaxBase): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sales_tax/' + (countryCode == null ? '' : encodeURIComponent(countryCode)) + '/' + (jurisdictionId == null ? '' : encodeURIComponent(jurisdictionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves a list of subscriptions associated with the seller account.
		 * Get subscription
		 * @param {string} limit This field is for future use.
		 * @param {string} continuation_token This field is for future use.
		 * @return {SubscriptionResponse} Success
		 */
		GetSubscription(limit: string | null | undefined, continuation_token: string | null | undefined): Observable<SubscriptionResponse> {
			return this.http.get<SubscriptionResponse>(this.baseUri + 'subscription?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&continuation_token=' + (continuation_token == null ? '' : encodeURIComponent(continuation_token)), {});
		}
	}

}

