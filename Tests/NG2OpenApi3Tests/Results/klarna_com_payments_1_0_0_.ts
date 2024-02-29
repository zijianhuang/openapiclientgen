import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ErrorV2 {
		authorized_payment_method?: Authorized_payment_method;
		correlation_id?: string | null;
		error_code?: string | null;
		error_messages?: Array<string>;
		fraud_status?: string | null;
		reason?: string | null;
	}
	export interface ErrorV2FormProperties {
		correlation_id: FormControl<string | null | undefined>,
		error_code: FormControl<string | null | undefined>,
		fraud_status: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateErrorV2FormGroup() {
		return new FormGroup<ErrorV2FormProperties>({
			correlation_id: new FormControl<string | null | undefined>(undefined),
			error_code: new FormControl<string | null | undefined>(undefined),
			fraud_status: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Authorized_payment_method {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_of_days?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_of_installments?: number | null;

		/** Required */
		type: Authorized_payment_methodType;
	}
	export interface Authorized_payment_methodFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_of_days: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_of_installments: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<Authorized_payment_methodType | null | undefined>,
	}
	export function CreateAuthorized_payment_methodFormGroup() {
		return new FormGroup<Authorized_payment_methodFormProperties>({
			number_of_days: new FormControl<number | null | undefined>(undefined),
			number_of_installments: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<Authorized_payment_methodType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Authorized_payment_methodType { invoice = 'invoice', fixed_amount = 'fixed_amount', base_account = 'base_account', direct_debit = 'direct_debit', direct_bank_transfer = 'direct_bank_transfer', b2b_invoice = 'b2b_invoice', card = 'card', slice_it_by_card = 'slice_it_by_card', pay_later_by_card = 'pay_later_by_card', pay_by_card = 'pay_by_card', fixed_sum_credit = 'fixed_sum_credit' }

	export interface Address {

		/**
		 * ‘Attn.’ (if applicable). Only applicable for B2B customers.
		 * Min length: 0
		 * Max length: 99
		 */
		attention?: string | null;

		/**
		 * Customer’s city.
		 * Min length: 0
		 * Max length: 99
		 */
		city?: string | null;

		/** Customer’s country. This value overrides the purchase country if they are different. Should follow the standard of ISO 3166 alpha-2. E.g. GB, US, DE, SE. */
		country?: string | null;

		/**
		 * Customer’s email address.
		 * Min length: 0
		 * Max length: 99
		 */
		email?: string | null;

		/**
		 * Customers family name in UTF-8 encoding.
		 * Cannot be only numbers, must be more than 1 character.
		 * Allowed special characters: -'’.
		 * More information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)
		 * Min length: 0
		 * Max length: 99
		 */
		family_name?: string | null;

		/**
		 * Customers given name in UTF-8 encoding.
		 * Cannot be only numbers, must be more than 1 character.
		 * Allowed special characters: -'’.
		 * More information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)
		 * Min length: 0
		 * Max length: 99
		 */
		given_name?: string | null;

		/**
		 * Organization name (if applicable). Only applicable for B2B customers.
		 * Min length: 0
		 * Max length: 99
		 */
		organization_name?: string | null;

		/**
		 * Phone number. Preferably a mobile phone number.
		 * Min length: 5
		 * Max length: 99
		 */
		phone?: string | null;

		/**
		 * Customer’s postal code. Validation according to Universal Postal Union addressing systems.
		 * E.g. 12345, W1G OPW.
		 * Min length: 0
		 * Max length: 10
		 */
		postal_code?: string | null;

		/**
		 * Customer’s region or state - Mandatory for US and AU market. Validations according to ISO 3166-2 format, e.g. OH, NJ, etc.
		 * Min length: 0
		 * Max length: 99
		 */
		region?: string | null;

		/**
		 * Customer’s street address. Regional formatting is required, as follows:
		 * UK/US/FR: 33 Cavendish Square
		 * Rest of EU: De Ruijterkade 7
		 * Min length: 0
		 * Max length: 99
		 */
		street_address?: string | null;

		/**
		 * Customer’s street address. Second Line.
		 * Min length: 0
		 * Max length: 99
		 */
		street_address2?: string | null;

		/**
		 * Customer’s Title. Allowed values per country:
		 * UK - "Mr", "Ms"
		 * DE - "Herr", "Frau"
		 * AT: "Herr, "Frau"
		 * CH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme"
		 * BE: "Dhr.", "Mevr."
		 * NL: "Dhr.", "Mevr."
		 * Min length: 0
		 * Max length: 20
		 */
		title?: string | null;
	}
	export interface AddressFormProperties {

		/**
		 * ‘Attn.’ (if applicable). Only applicable for B2B customers.
		 * Min length: 0
		 * Max length: 99
		 */
		attention: FormControl<string | null | undefined>,

		/**
		 * Customer’s city.
		 * Min length: 0
		 * Max length: 99
		 */
		city: FormControl<string | null | undefined>,

		/** Customer’s country. This value overrides the purchase country if they are different. Should follow the standard of ISO 3166 alpha-2. E.g. GB, US, DE, SE. */
		country: FormControl<string | null | undefined>,

		/**
		 * Customer’s email address.
		 * Min length: 0
		 * Max length: 99
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Customers family name in UTF-8 encoding.
		 * Cannot be only numbers, must be more than 1 character.
		 * Allowed special characters: -'’.
		 * More information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)
		 * Min length: 0
		 * Max length: 99
		 */
		family_name: FormControl<string | null | undefined>,

		/**
		 * Customers given name in UTF-8 encoding.
		 * Cannot be only numbers, must be more than 1 character.
		 * Allowed special characters: -'’.
		 * More information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)
		 * Min length: 0
		 * Max length: 99
		 */
		given_name: FormControl<string | null | undefined>,

		/**
		 * Organization name (if applicable). Only applicable for B2B customers.
		 * Min length: 0
		 * Max length: 99
		 */
		organization_name: FormControl<string | null | undefined>,

		/**
		 * Phone number. Preferably a mobile phone number.
		 * Min length: 5
		 * Max length: 99
		 */
		phone: FormControl<string | null | undefined>,

		/**
		 * Customer’s postal code. Validation according to Universal Postal Union addressing systems.
		 * E.g. 12345, W1G OPW.
		 * Min length: 0
		 * Max length: 10
		 */
		postal_code: FormControl<string | null | undefined>,

		/**
		 * Customer’s region or state - Mandatory for US and AU market. Validations according to ISO 3166-2 format, e.g. OH, NJ, etc.
		 * Min length: 0
		 * Max length: 99
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * Customer’s street address. Regional formatting is required, as follows:
		 * UK/US/FR: 33 Cavendish Square
		 * Rest of EU: De Ruijterkade 7
		 * Min length: 0
		 * Max length: 99
		 */
		street_address: FormControl<string | null | undefined>,

		/**
		 * Customer’s street address. Second Line.
		 * Min length: 0
		 * Max length: 99
		 */
		street_address2: FormControl<string | null | undefined>,

		/**
		 * Customer’s Title. Allowed values per country:
		 * UK - "Mr", "Ms"
		 * DE - "Herr", "Frau"
		 * AT: "Herr, "Frau"
		 * CH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme"
		 * BE: "Dhr.", "Mevr."
		 * NL: "Dhr.", "Mevr."
		 * Min length: 0
		 * Max length: 20
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			attention: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(99)]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(99)]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z]{2,2}$')]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(99)]),
			family_name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(99)]),
			given_name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(99)]),
			organization_name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(99)]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(99)]),
			postal_code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(10)]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(99)]),
			street_address: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(99)]),
			street_address2: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(99)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(20)]),
		});

	}

	export interface Asset_urls {

		/** URL of the descriptive asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated. */
		descriptive?: string | null;

		/** URL of the standard asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated. */
		standard?: string | null;
	}
	export interface Asset_urlsFormProperties {

		/** URL of the descriptive asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated. */
		descriptive: FormControl<string | null | undefined>,

		/** URL of the standard asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated. */
		standard: FormControl<string | null | undefined>,
	}
	export function CreateAsset_urlsFormGroup() {
		return new FormGroup<Asset_urlsFormProperties>({
			descriptive: new FormControl<string | null | undefined>(undefined),
			standard: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Attachment {

		/**
		 * The content of the extra merchant data should be presented as a string inside this property. The body should be an object containing any of the keys and sub-objects described below serialized to JSON. More information on that object can be found [here](https://developers.klarna.com/api/#attachment-schema).
		 * Required
		 */
		body: string;

		/**
		 * The content type of the body. It is usually represented as "application/vnd.klarna.internal.emd-v2+json"
		 * Required
		 */
		content_type: string;
	}
	export interface AttachmentFormProperties {

		/**
		 * The content of the extra merchant data should be presented as a string inside this property. The body should be an object containing any of the keys and sub-objects described below serialized to JSON. More information on that object can be found [here](https://developers.klarna.com/api/#attachment-schema).
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * The content type of the body. It is usually represented as "application/vnd.klarna.internal.emd-v2+json"
		 * Required
		 */
		content_type: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			content_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Create_order_request {

		/** Authorization token. */
		authorization_token?: string | null;

		/** Allow merchant to trigger auto capturing. */
		auto_capture?: boolean | null;
		billing_address?: Address;

		/** Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. */
		custom_payment_method_ids?: Array<string>;
		customer?: Customer;

		/**
		 * Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.
		 * The following values are applicable:
		 * AT: "de-AT", "de-DE", "en-DE"
		 * BE: "be-BE", "nl-BE", "fr-BE", "en-BE"
		 * CH: "it-CH", "de-CH", "fr-CH", "en-CH"
		 * DE: "de-DE", "de-AT", "en-DE"
		 * DK: "da-DK", "en-DK"
		 * ES: "es-ES", "ca-ES", "en-ES"
		 * FI: "fi-FI", "sv-FI", "en-FI"
		 * GB: "en-GB"
		 * IT: "it-IT", "en-IT"
		 * NL: "nl-NL", "en-NL"
		 * NO: "nb-NO", "en-NO"
		 * PL: "pl-PL", "en-PL"
		 * SE: "sv-SE", "en-SE"
		 * US: "en-US".
		 */
		locale?: string | null;

		/**
		 * Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)
		 * Min length: 0
		 * Max length: 6000
		 */
		merchant_data?: string | null;

		/**
		 * Used for storing merchant's internal order number or other reference.
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference1?: string | null;

		/**
		 * Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference2?: string | null;
		merchant_urls?: Merchant_urls;

		/**
		 * Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Required
		 * Minimum: 0
		 */
		order_amount: string;

		/**
		 * The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		order_lines: Array<Order_line>;

		/**
		 * Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Minimum: 0
		 */
		order_tax_amount?: string | null;

		/** Available payment method categories */
		payment_method_categories?: Array<Payment_method_category>;

		/**
		 * The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.
		 * Required
		 */
		purchase_country: string;

		/**
		 * The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.
		 * Required
		 */
		purchase_currency: string;
		shipping_address?: Address;

		/** The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed. */
		status?: Create_order_requestStatus | null;
	}
	export interface Create_order_requestFormProperties {

		/** Authorization token. */
		authorization_token: FormControl<string | null | undefined>,

		/** Allow merchant to trigger auto capturing. */
		auto_capture: FormControl<boolean | null | undefined>,

		/**
		 * Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.
		 * The following values are applicable:
		 * AT: "de-AT", "de-DE", "en-DE"
		 * BE: "be-BE", "nl-BE", "fr-BE", "en-BE"
		 * CH: "it-CH", "de-CH", "fr-CH", "en-CH"
		 * DE: "de-DE", "de-AT", "en-DE"
		 * DK: "da-DK", "en-DK"
		 * ES: "es-ES", "ca-ES", "en-ES"
		 * FI: "fi-FI", "sv-FI", "en-FI"
		 * GB: "en-GB"
		 * IT: "it-IT", "en-IT"
		 * NL: "nl-NL", "en-NL"
		 * NO: "nb-NO", "en-NO"
		 * PL: "pl-PL", "en-PL"
		 * SE: "sv-SE", "en-SE"
		 * US: "en-US".
		 */
		locale: FormControl<string | null | undefined>,

		/**
		 * Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)
		 * Min length: 0
		 * Max length: 6000
		 */
		merchant_data: FormControl<string | null | undefined>,

		/**
		 * Used for storing merchant's internal order number or other reference.
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference1: FormControl<string | null | undefined>,

		/**
		 * Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference2: FormControl<string | null | undefined>,

		/**
		 * Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Required
		 * Minimum: 0
		 */
		order_amount: FormControl<string | null | undefined>,

		/**
		 * Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Minimum: 0
		 */
		order_tax_amount: FormControl<string | null | undefined>,

		/**
		 * The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.
		 * Required
		 */
		purchase_country: FormControl<string | null | undefined>,

		/**
		 * The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.
		 * Required
		 */
		purchase_currency: FormControl<string | null | undefined>,

		/** The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed. */
		status: FormControl<Create_order_requestStatus | null | undefined>,
	}
	export function CreateCreate_order_requestFormGroup() {
		return new FormGroup<Create_order_requestFormProperties>({
			authorization_token: new FormControl<string | null | undefined>(undefined),
			auto_capture: new FormControl<boolean | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z]{2,2}(?:-[A-Za-z]{2,2})*$')]),
			merchant_data: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(6000)]),
			merchant_reference1: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			merchant_reference2: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			order_amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			order_tax_amount: new FormControl<string | null | undefined>(undefined, [Validators.min(0)]),
			purchase_country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z]{2,2}$')]),
			purchase_currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z]{3,3}$')]),
			status: new FormControl<Create_order_requestStatus | null | undefined>(undefined),
		});

	}

	export interface Customer {

		/** Customer’s date of birth. The format is ‘yyyy-mm-dd’ */
		date_of_birth?: string | null;

		/** Customer’s gender - ‘male’ or ‘female’ */
		gender?: string | null;

		/** Last four digits of the customer's social security number. This value is available for US customers. */
		last_four_ssn?: string | null;

		/** The customer's national identification number. This value is available for EU customers utilizing national identification numbers. */
		national_identification_number?: string | null;

		/** Organization entity type. Only applicable for B2B customers. */
		organization_entity_type?: CustomerOrganization_entity_type | null;

		/** Organization registration id. Only applicable for B2B customers. */
		organization_registration_id?: string | null;

		/**
		 * Customer’s Title. Allowed values per country:
		 * UK - "Mr", "Ms"
		 * DE - "Herr", "Frau"
		 * AT: "Herr, "Frau"
		 * CH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme"
		 * BE: "Dhr.", "Mevr."
		 * NL: "Dhr.", "Mevr."
		 */
		title?: string | null;

		/** Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session. */
		type?: string | null;

		/** VAT ID. Only applicable for B2B customers. */
		vat_id?: string | null;
	}
	export interface CustomerFormProperties {

		/** Customer’s date of birth. The format is ‘yyyy-mm-dd’ */
		date_of_birth: FormControl<string | null | undefined>,

		/** Customer’s gender - ‘male’ or ‘female’ */
		gender: FormControl<string | null | undefined>,

		/** Last four digits of the customer's social security number. This value is available for US customers. */
		last_four_ssn: FormControl<string | null | undefined>,

		/** The customer's national identification number. This value is available for EU customers utilizing national identification numbers. */
		national_identification_number: FormControl<string | null | undefined>,

		/** Organization entity type. Only applicable for B2B customers. */
		organization_entity_type: FormControl<CustomerOrganization_entity_type | null | undefined>,

		/** Organization registration id. Only applicable for B2B customers. */
		organization_registration_id: FormControl<string | null | undefined>,

		/**
		 * Customer’s Title. Allowed values per country:
		 * UK - "Mr", "Ms"
		 * DE - "Herr", "Frau"
		 * AT: "Herr, "Frau"
		 * CH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme"
		 * BE: "Dhr.", "Mevr."
		 * NL: "Dhr.", "Mevr."
		 */
		title: FormControl<string | null | undefined>,

		/** Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session. */
		type: FormControl<string | null | undefined>,

		/** VAT ID. Only applicable for B2B customers. */
		vat_id: FormControl<string | null | undefined>,
	}
	export function CreateCustomerFormGroup() {
		return new FormGroup<CustomerFormProperties>({
			date_of_birth: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			last_four_ssn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([0-9]{4}|[0-9]{9})$')]),
			national_identification_number: new FormControl<string | null | undefined>(undefined),
			organization_entity_type: new FormControl<CustomerOrganization_entity_type | null | undefined>(undefined),
			organization_registration_id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(person|organization)$')]),
			vat_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomerOrganization_entity_type { LIMITED_COMPANY = 'LIMITED_COMPANY', PUBLIC_LIMITED_COMPANY = 'PUBLIC_LIMITED_COMPANY', ENTREPRENEURIAL_COMPANY = 'ENTREPRENEURIAL_COMPANY', LIMITED_PARTNERSHIP_LIMITED_COMPANY = 'LIMITED_PARTNERSHIP_LIMITED_COMPANY', LIMITED_PARTNERSHIP = 'LIMITED_PARTNERSHIP', GENERAL_PARTNERSHIP = 'GENERAL_PARTNERSHIP', REGISTERED_SOLE_TRADER = 'REGISTERED_SOLE_TRADER', SOLE_TRADER = 'SOLE_TRADER', CIVIL_LAW_PARTNERSHIP = 'CIVIL_LAW_PARTNERSHIP', PUBLIC_INSTITUTION = 'PUBLIC_INSTITUTION', OTHER = 'OTHER' }

	export interface Merchant_urls {

		/**
		 * URL for receiving the authorization token when payment is completed. Used for Authorization Callback.
		 * Min length: 0
		 * Max length: 2000
		 */
		authorization?: string | null;

		/**
		 * URL of the merchant confirmation page. The consumer will be redirected back to the confirmation page if the consumer is sent to the redirect URL after placing the order. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL(max 2000 characters).
		 * Min length: 0
		 * Max length: 2000
		 */
		confirmation?: string | null;

		/**
		 * URL for notifications on pending orders. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL (max 2000 characters).
		 * Min length: 0
		 * Max length: 2000
		 */
		notification?: string | null;

		/**
		 * URL that will be requested when an order is completed. Should be different than checkout and confirmation URLs. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL (max 2000 characters).
		 * Min length: 0
		 * Max length: 2000
		 */
		push?: string | null;
	}
	export interface Merchant_urlsFormProperties {

		/**
		 * URL for receiving the authorization token when payment is completed. Used for Authorization Callback.
		 * Min length: 0
		 * Max length: 2000
		 */
		authorization: FormControl<string | null | undefined>,

		/**
		 * URL of the merchant confirmation page. The consumer will be redirected back to the confirmation page if the consumer is sent to the redirect URL after placing the order. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL(max 2000 characters).
		 * Min length: 0
		 * Max length: 2000
		 */
		confirmation: FormControl<string | null | undefined>,

		/**
		 * URL for notifications on pending orders. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL (max 2000 characters).
		 * Min length: 0
		 * Max length: 2000
		 */
		notification: FormControl<string | null | undefined>,

		/**
		 * URL that will be requested when an order is completed. Should be different than checkout and confirmation URLs. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL (max 2000 characters).
		 * Min length: 0
		 * Max length: 2000
		 */
		push: FormControl<string | null | undefined>,
	}
	export function CreateMerchant_urlsFormGroup() {
		return new FormGroup<Merchant_urlsFormProperties>({
			authorization: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2000)]),
			confirmation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2000)]),
			notification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2000)]),
			push: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2000)]),
		});

	}

	export interface Order_line {

		/**
		 * URL to an image that can be later embedded in communications between Klarna and the customer. (max 1024 characters).
		 * A minimum of 250x250 px resolution is recommended for the image to look good in the Klarna app, and below 50x50 px won't even show. We recommend using a good sized image (650x650 px or more), however the file size must not exceed 12MB.
		 * Min length: 0
		 * Max length: 1024
		 */
		image_url?: string | null;

		/**
		 * Used for storing merchant's internal order number or other reference. Pass through field. (max 1024 characters)
		 * Min length: 0
		 * Max length: 1024
		 */
		merchant_data?: string | null;

		/**
		 * Descriptive name of the order line item.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: string;
		product_identifiers?: Product_identifiers;

		/**
		 * URL to the product in the merchant’s webshop that can be later used in communications between Klarna and the customer. (max 1024 characters)
		 * Min length: 0
		 * Max length: 1024
		 */
		product_url?: string | null;

		/**
		 * Quantity of the order line item. Must be a non-negative number.
		 * Required
		 * Minimum: 0
		 */
		quantity: string;

		/**
		 * Unit used to describe the quantity, e.g. kg, pcs, etc. If defined the value has to be 1-8 characters.
		 * Min length: 1
		 * Max length: 8
		 */
		quantity_unit?: string | null;

		/**
		 * Client facing article number, SKU or similar. Max length is 256 characters.
		 * Min length: 0
		 * Max length: 256
		 */
		reference?: string | null;
		subscription?: Subscription;

		/**
		 * Tax rate of the order line. Non-negative value. The percentage value is represented with two implicit decimals. I.e 1900 = 19%.
		 * Minimum: 0
		 * Maximum: 10000
		 */
		tax_rate?: string | null;

		/**
		 * Total amount of the order line. Must be defined as minor units. Includes tax and discount. Eg: 2500=25 euros
		 * Value = (quantity x unit_price) - total_discount_amount.
		 * (max value: 100000000)
		 * Required
		 * Maximum: 100000000
		 */
		total_amount: string;

		/**
		 * Non-negative minor units. Includes tax. Eg: 500=5 euros
		 * Minimum: 0
		 */
		total_discount_amount?: string | null;

		/**
		 * Total tax amount of the order line. Must be within ±1 of total_amount - total_amount 10000 / (10000 + tax_rate). Negative when type is discount.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		total_tax_amount?: string | null;

		/**
		 * Type of the order line item. The possible values are:
		 * physical
		 * discount
		 * shipping_fee
		 * sales_tax
		 * digital
		 * gift_card
		 * store_credit
		 * surcharge
		 */
		type?: string | null;

		/**
		 * Price for a single unit of the order line. Must be defined as minor units. Includes tax, excludes discount. (max value: 100000000)
		 * Required
		 * Maximum: 100000000
		 */
		unit_price: string;
	}
	export interface Order_lineFormProperties {

		/**
		 * URL to an image that can be later embedded in communications between Klarna and the customer. (max 1024 characters).
		 * A minimum of 250x250 px resolution is recommended for the image to look good in the Klarna app, and below 50x50 px won't even show. We recommend using a good sized image (650x650 px or more), however the file size must not exceed 12MB.
		 * Min length: 0
		 * Max length: 1024
		 */
		image_url: FormControl<string | null | undefined>,

		/**
		 * Used for storing merchant's internal order number or other reference. Pass through field. (max 1024 characters)
		 * Min length: 0
		 * Max length: 1024
		 */
		merchant_data: FormControl<string | null | undefined>,

		/**
		 * Descriptive name of the order line item.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * URL to the product in the merchant’s webshop that can be later used in communications between Klarna and the customer. (max 1024 characters)
		 * Min length: 0
		 * Max length: 1024
		 */
		product_url: FormControl<string | null | undefined>,

		/**
		 * Quantity of the order line item. Must be a non-negative number.
		 * Required
		 * Minimum: 0
		 */
		quantity: FormControl<string | null | undefined>,

		/**
		 * Unit used to describe the quantity, e.g. kg, pcs, etc. If defined the value has to be 1-8 characters.
		 * Min length: 1
		 * Max length: 8
		 */
		quantity_unit: FormControl<string | null | undefined>,

		/**
		 * Client facing article number, SKU or similar. Max length is 256 characters.
		 * Min length: 0
		 * Max length: 256
		 */
		reference: FormControl<string | null | undefined>,

		/**
		 * Tax rate of the order line. Non-negative value. The percentage value is represented with two implicit decimals. I.e 1900 = 19%.
		 * Minimum: 0
		 * Maximum: 10000
		 */
		tax_rate: FormControl<string | null | undefined>,

		/**
		 * Total amount of the order line. Must be defined as minor units. Includes tax and discount. Eg: 2500=25 euros
		 * Value = (quantity x unit_price) - total_discount_amount.
		 * (max value: 100000000)
		 * Required
		 * Maximum: 100000000
		 */
		total_amount: FormControl<string | null | undefined>,

		/**
		 * Non-negative minor units. Includes tax. Eg: 500=5 euros
		 * Minimum: 0
		 */
		total_discount_amount: FormControl<string | null | undefined>,

		/**
		 * Total tax amount of the order line. Must be within ±1 of total_amount - total_amount 10000 / (10000 + tax_rate). Negative when type is discount.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		total_tax_amount: FormControl<string | null | undefined>,

		/**
		 * Type of the order line item. The possible values are:
		 * physical
		 * discount
		 * shipping_fee
		 * sales_tax
		 * digital
		 * gift_card
		 * store_credit
		 * surcharge
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * Price for a single unit of the order line. Must be defined as minor units. Includes tax, excludes discount. (max value: 100000000)
		 * Required
		 * Maximum: 100000000
		 */
		unit_price: FormControl<string | null | undefined>,
	}
	export function CreateOrder_lineFormGroup() {
		return new FormGroup<Order_lineFormProperties>({
			image_url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			merchant_data: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			product_url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			quantity: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			quantity_unit: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			tax_rate: new FormControl<string | null | undefined>(undefined, [Validators.min(0), Validators.max(10000)]),
			total_amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.max(100000000)]),
			total_discount_amount: new FormControl<string | null | undefined>(undefined, [Validators.min(0)]),
			total_tax_amount: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			unit_price: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.max(100000000)]),
		});

	}

	export interface Product_identifiers {

		/**
		 * The product's brand name as generally recognized by consumers. If no brand is available for a product, do not supply any value.
		 * Min length: 0
		 * Max length: 70
		 */
		brand?: string | null;

		/**
		 * The product's category path as used in the merchant's webshop. Include the full and most detailed category and separate the segments with ' > '
		 * Min length: 0
		 * Max length: 750
		 */
		category_path?: string | null;

		/**
		 * Color to be shown to the end customer (max 64 characters).
		 * Min length: 0
		 * Max length: 64
		 */
		color?: string | null;

		/**
		 * The product's Global Trade Item Number (GTIN). Common types of GTIN are EAN, ISBN or UPC. Exclude dashes and spaces, where possible
		 * Min length: 0
		 * Max length: 50
		 */
		global_trade_item_number?: string | null;

		/**
		 * The product's Manufacturer Part Number (MPN), which - together with the brand - uniquely identifies a product. Only submit MPNs assigned by a manufacturer and use the most specific MPN possible
		 * Min length: 0
		 * Max length: 70
		 */
		manufacturer_part_number?: string | null;

		/**
		 * Size to be shown to the end customer (max 64 characters).
		 * Min length: 0
		 * Max length: 64
		 */
		size?: string | null;
	}
	export interface Product_identifiersFormProperties {

		/**
		 * The product's brand name as generally recognized by consumers. If no brand is available for a product, do not supply any value.
		 * Min length: 0
		 * Max length: 70
		 */
		brand: FormControl<string | null | undefined>,

		/**
		 * The product's category path as used in the merchant's webshop. Include the full and most detailed category and separate the segments with ' > '
		 * Min length: 0
		 * Max length: 750
		 */
		category_path: FormControl<string | null | undefined>,

		/**
		 * Color to be shown to the end customer (max 64 characters).
		 * Min length: 0
		 * Max length: 64
		 */
		color: FormControl<string | null | undefined>,

		/**
		 * The product's Global Trade Item Number (GTIN). Common types of GTIN are EAN, ISBN or UPC. Exclude dashes and spaces, where possible
		 * Min length: 0
		 * Max length: 50
		 */
		global_trade_item_number: FormControl<string | null | undefined>,

		/**
		 * The product's Manufacturer Part Number (MPN), which - together with the brand - uniquely identifies a product. Only submit MPNs assigned by a manufacturer and use the most specific MPN possible
		 * Min length: 0
		 * Max length: 70
		 */
		manufacturer_part_number: FormControl<string | null | undefined>,

		/**
		 * Size to be shown to the end customer (max 64 characters).
		 * Min length: 0
		 * Max length: 64
		 */
		size: FormControl<string | null | undefined>,
	}
	export function CreateProduct_identifiersFormGroup() {
		return new FormGroup<Product_identifiersFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(70)]),
			category_path: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(750)]),
			color: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			global_trade_item_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50)]),
			manufacturer_part_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(70)]),
			size: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
		});

	}

	export interface Subscription {

		/**
		 * The cadence unit for this.
		 * Required
		 */
		interval: SubscriptionInterval;

		/**
		 * The number of intervals
		 * Required
		 * Minimum: 1
		 */
		interval_count: number;

		/**
		 * The name of the subscription product
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: string;
	}
	export interface SubscriptionFormProperties {

		/**
		 * The cadence unit for this.
		 * Required
		 */
		interval: FormControl<SubscriptionInterval | null | undefined>,

		/**
		 * The number of intervals
		 * Required
		 * Minimum: 1
		 */
		interval_count: FormControl<number | null | undefined>,

		/**
		 * The name of the subscription product
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			interval: new FormControl<SubscriptionInterval | null | undefined>(undefined, [Validators.required]),
			interval_count: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export enum SubscriptionInterval { DAY = 'DAY', WEEK = 'WEEK', MONTH = 'MONTH', YEAR = 'YEAR' }

	export interface Payment_method_category {
		asset_urls?: Asset_urls;

		/**
		 * ID of the payment method category to be used while loading the widget later.
		 * The possible values are:<ul><li>klarna</li><li>pay_later</li><li>pay_now</li><li>pay_over_time</li><li>direct_bank_transfer</li><li>direct_debit</li></ul>
		 */
		identifier?: string | null;

		/** Name of the payment method category. These names are dynamic depending on what payment method is in the category. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated, or any updates of included payment methods by you. */
		name?: string | null;
	}
	export interface Payment_method_categoryFormProperties {

		/**
		 * ID of the payment method category to be used while loading the widget later.
		 * The possible values are:<ul><li>klarna</li><li>pay_later</li><li>pay_now</li><li>pay_over_time</li><li>direct_bank_transfer</li><li>direct_debit</li></ul>
		 */
		identifier: FormControl<string | null | undefined>,

		/** Name of the payment method category. These names are dynamic depending on what payment method is in the category. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated, or any updates of included payment methods by you. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePayment_method_categoryFormGroup() {
		return new FormGroup<Payment_method_categoryFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Create_order_requestStatus { complete = 'complete', incomplete = 'incomplete' }

	export interface Customer_read {

		/** Customer’s date of birth. The format is ‘yyyy-mm-dd’ */
		date_of_birth?: string | null;

		/** Customer’s gender - ‘male’ or ‘female’ */
		gender?: string | null;

		/** Organization entity type. Only applicable for B2B customers. */
		organization_entity_type?: CustomerOrganization_entity_type | null;

		/** Organization registration id. Only applicable for B2B customers. */
		organization_registration_id?: string | null;

		/**
		 * Customer’s Title. Allowed values per country:
		 * UK - "Mr", "Ms"
		 * DE - "Herr", "Frau"
		 * AT: "Herr, "Frau"
		 * CH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme"
		 * BE: "Dhr.", "Mevr."
		 * NL: "Dhr.", "Mevr."
		 */
		title?: string | null;

		/** Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session. */
		type?: string | null;

		/** VAT ID. Only applicable for B2B customers. */
		vat_id?: string | null;
	}
	export interface Customer_readFormProperties {

		/** Customer’s date of birth. The format is ‘yyyy-mm-dd’ */
		date_of_birth: FormControl<string | null | undefined>,

		/** Customer’s gender - ‘male’ or ‘female’ */
		gender: FormControl<string | null | undefined>,

		/** Organization entity type. Only applicable for B2B customers. */
		organization_entity_type: FormControl<CustomerOrganization_entity_type | null | undefined>,

		/** Organization registration id. Only applicable for B2B customers. */
		organization_registration_id: FormControl<string | null | undefined>,

		/**
		 * Customer’s Title. Allowed values per country:
		 * UK - "Mr", "Ms"
		 * DE - "Herr", "Frau"
		 * AT: "Herr, "Frau"
		 * CH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme"
		 * BE: "Dhr.", "Mevr."
		 * NL: "Dhr.", "Mevr."
		 */
		title: FormControl<string | null | undefined>,

		/** Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session. */
		type: FormControl<string | null | undefined>,

		/** VAT ID. Only applicable for B2B customers. */
		vat_id: FormControl<string | null | undefined>,
	}
	export function CreateCustomer_readFormGroup() {
		return new FormGroup<Customer_readFormProperties>({
			date_of_birth: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			organization_entity_type: new FormControl<CustomerOrganization_entity_type | null | undefined>(undefined),
			organization_registration_id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			vat_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Customer_read_create_token {

		/** Customer’s date of birth. The format is ‘yyyy-mm-dd’ */
		date_of_birth?: string | null;

		/** Customer’s gender - ‘male’ or ‘female’ */
		gender?: string | null;
	}
	export interface Customer_read_create_tokenFormProperties {

		/** Customer’s date of birth. The format is ‘yyyy-mm-dd’ */
		date_of_birth: FormControl<string | null | undefined>,

		/** Customer’s gender - ‘male’ or ‘female’ */
		gender: FormControl<string | null | undefined>,
	}
	export function CreateCustomer_read_create_tokenFormGroup() {
		return new FormGroup<Customer_read_create_tokenFormProperties>({
			date_of_birth: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Customer_token_creation_request {
		billing_address?: Address;
		customer?: Customer;

		/**
		 * Description of the purpose of the token.
		 * Required
		 * Max length: 255
		 */
		description: string;

		/**
		 * Intended use for the token.
		 * Required
		 */
		intended_use: Customer_token_creation_requestIntended_use;

		/**
		 * RFC 1766 customer's locale.
		 * Required
		 */
		locale: string;

		/**
		 * ISO 3166 alpha-2 purchase country.
		 * Required
		 */
		purchase_country: string;

		/**
		 * ISO 4217 purchase currency.
		 * Required
		 */
		purchase_currency: string;
	}
	export interface Customer_token_creation_requestFormProperties {

		/**
		 * Description of the purpose of the token.
		 * Required
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Intended use for the token.
		 * Required
		 */
		intended_use: FormControl<Customer_token_creation_requestIntended_use | null | undefined>,

		/**
		 * RFC 1766 customer's locale.
		 * Required
		 */
		locale: FormControl<string | null | undefined>,

		/**
		 * ISO 3166 alpha-2 purchase country.
		 * Required
		 */
		purchase_country: FormControl<string | null | undefined>,

		/**
		 * ISO 4217 purchase currency.
		 * Required
		 */
		purchase_currency: FormControl<string | null | undefined>,
	}
	export function CreateCustomer_token_creation_requestFormGroup() {
		return new FormGroup<Customer_token_creation_requestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			intended_use: new FormControl<Customer_token_creation_requestIntended_use | null | undefined>(undefined, [Validators.required]),
			locale: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z]{2,2}(?:-[A-Za-z]{2,2})*$')]),
			purchase_country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z]{2,2}$')]),
			purchase_currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z]{3,3}$')]),
		});

	}

	export enum Customer_token_creation_requestIntended_use { SUBSCRIPTION = 'SUBSCRIPTION' }

	export interface Customer_token_creation_response {
		billing_address?: Address;
		customer?: Customer_read_create_token;

		/** Used to connect customers with payment method when it is present. */
		payment_method_reference?: string | null;

		/** URL to redirect the customer to after placing the order. This is a Klarna URL where Klarna will place a cookie in the customer’s browser (if redirected) and redirect the customer back to the confirmation URL provided by the merchant. This is not a mandatory step but a recommended one to improve the returning customer’s experience. */
		redirect_url?: string | null;

		/**
		 * Generated customer token. This token will be used to create a new order for the subscription using the Create a New order using token API.
		 * Required
		 */
		token_id: string;
	}
	export interface Customer_token_creation_responseFormProperties {

		/** Used to connect customers with payment method when it is present. */
		payment_method_reference: FormControl<string | null | undefined>,

		/** URL to redirect the customer to after placing the order. This is a Klarna URL where Klarna will place a cookie in the customer’s browser (if redirected) and redirect the customer back to the confirmation URL provided by the merchant. This is not a mandatory step but a recommended one to improve the returning customer’s experience. */
		redirect_url: FormControl<string | null | undefined>,

		/**
		 * Generated customer token. This token will be used to create a new order for the subscription using the Create a New order using token API.
		 * Required
		 */
		token_id: FormControl<string | null | undefined>,
	}
	export function CreateCustomer_token_creation_responseFormGroup() {
		return new FormGroup<Customer_token_creation_responseFormProperties>({
			payment_method_reference: new FormControl<string | null | undefined>(undefined),
			redirect_url: new FormControl<string | null | undefined>(undefined),
			token_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Merchant_session {

		/**
		 * Client token to be passed to the JS client while initializing the JS SDK in the next step.
		 * Required
		 * Min length: 0
		 * Max length: 4096
		 */
		client_token: string;

		/** Available payment method categories for this particular session */
		payment_method_categories?: Array<Payment_method_category>;

		/**
		 * ID of the created session. Please use this ID to share with Klarna for identifying any issues during integration.
		 * Required
		 * Min length: 0
		 * Max length: 255
		 */
		session_id: string;
	}
	export interface Merchant_sessionFormProperties {

		/**
		 * Client token to be passed to the JS client while initializing the JS SDK in the next step.
		 * Required
		 * Min length: 0
		 * Max length: 4096
		 */
		client_token: FormControl<string | null | undefined>,

		/**
		 * ID of the created session. Please use this ID to share with Klarna for identifying any issues during integration.
		 * Required
		 * Min length: 0
		 * Max length: 255
		 */
		session_id: FormControl<string | null | undefined>,
	}
	export function CreateMerchant_sessionFormGroup() {
		return new FormGroup<Merchant_sessionFormProperties>({
			client_token: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(4096)]),
			session_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface Options {

		/** Color for the border of elements within the iFrame. Value should be a CSS hex color, e.g. "#FF9900" */
		color_border?: string | null;

		/** Color for the border of elements within the iFrame when selected by the customer. Value should be a CSS hex color, e.g. "#FF9900" */
		color_border_selected?: string | null;

		/** Color for the bullet points within the iFrame. Value should be a CSS hex color, e.g. "#FF9900" */
		color_details?: string | null;

		/** Color for the texts within the iFrame. Value should be a CSS hex color, e.g. "#FF9900" */
		color_text?: string | null;

		/** Radius for the border of elements within the iFrame. */
		radius_border?: string | null;
	}
	export interface OptionsFormProperties {

		/** Color for the border of elements within the iFrame. Value should be a CSS hex color, e.g. "#FF9900" */
		color_border: FormControl<string | null | undefined>,

		/** Color for the border of elements within the iFrame when selected by the customer. Value should be a CSS hex color, e.g. "#FF9900" */
		color_border_selected: FormControl<string | null | undefined>,

		/** Color for the bullet points within the iFrame. Value should be a CSS hex color, e.g. "#FF9900" */
		color_details: FormControl<string | null | undefined>,

		/** Color for the texts within the iFrame. Value should be a CSS hex color, e.g. "#FF9900" */
		color_text: FormControl<string | null | undefined>,

		/** Radius for the border of elements within the iFrame. */
		radius_border: FormControl<string | null | undefined>,
	}
	export function CreateOptionsFormGroup() {
		return new FormGroup<OptionsFormProperties>({
			color_border: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^#[A-Fa-f0-9]{6}$')]),
			color_border_selected: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^#[A-Fa-f0-9]{6}$')]),
			color_details: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^#[A-Fa-f0-9]{6}$')]),
			color_text: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^#[A-Fa-f0-9]{6}$')]),
			radius_border: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Order {
		authorized_payment_method?: Authorized_payment_method;

		/** Fraud status for the order. Either ACCEPTED or PENDING. If ACCEPTED, the order could be captured. If PENDING, please wait till you receive the notification from Klarna in the notification URL that the order has been approved. You can find additional information here. */
		fraud_status?: string | null;

		/**
		 * Unique order ID of the transaction. This ID will be used for all order management processes.
		 * Required
		 */
		order_id: string;

		/** URL to redirect the customer to after placing the order. This is a Klarna URL to which the merchant should redirect the customer to. Klarna will place a cookie in the customer’s browser (if redirected) and redirect the customer back to the confirmation URL provided by the merchant. This is not a mandatory step but a recommended one to improve the returning customer’s experience. It is a spontaneous step and does not harm the customer’s experience. */
		redirect_url?: string | null;
	}
	export interface OrderFormProperties {

		/** Fraud status for the order. Either ACCEPTED or PENDING. If ACCEPTED, the order could be captured. If PENDING, please wait till you receive the notification from Klarna in the notification URL that the order has been approved. You can find additional information here. */
		fraud_status: FormControl<string | null | undefined>,

		/**
		 * Unique order ID of the transaction. This ID will be used for all order management processes.
		 * Required
		 */
		order_id: FormControl<string | null | undefined>,

		/** URL to redirect the customer to after placing the order. This is a Klarna URL to which the merchant should redirect the customer to. Klarna will place a cookie in the customer’s browser (if redirected) and redirect the customer back to the confirmation URL provided by the merchant. This is not a mandatory step but a recommended one to improve the returning customer’s experience. It is a spontaneous step and does not harm the customer’s experience. */
		redirect_url: FormControl<string | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			fraud_status: new FormControl<string | null | undefined>(undefined),
			order_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			redirect_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Session {

		/** The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement. */
		acquiring_channel?: SessionAcquiring_channel | null;
		attachment?: Attachment;

		/** Authorization token. */
		authorization_token?: string | null;
		billing_address?: Address;

		/**
		 * Token to be passed to the JS client
		 * Min length: 0
		 * Max length: 4096
		 */
		client_token?: string | null;

		/** Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. */
		custom_payment_method_ids?: Array<string>;
		customer?: Customer;

		/** Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter. */
		design?: string | null;

		/** Session expiration date */
		expires_at?: Date | null;

		/** Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session. */
		intent?: SessionIntent | null;

		/**
		 * Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.
		 * The following values are applicable:
		 * AT: "de-AT", "de-DE", "en-DE"
		 * BE: "be-BE", "nl-BE", "fr-BE", "en-BE"
		 * CH: "it-CH", "de-CH", "fr-CH", "en-CH"
		 * DE: "de-DE", "de-AT", "en-DE"
		 * DK: "da-DK", "en-DK"
		 * ES: "es-ES", "ca-ES", "en-ES"
		 * FI: "fi-FI", "sv-FI", "en-FI"
		 * GB: "en-GB"
		 * IT: "it-IT", "en-IT"
		 * NL: "nl-NL", "en-NL"
		 * NO: "nb-NO", "en-NO"
		 * PL: "pl-PL", "en-PL"
		 * SE: "sv-SE", "en-SE"
		 * US: "en-US".
		 */
		locale?: string | null;

		/**
		 * Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)
		 * Min length: 0
		 * Max length: 6000
		 */
		merchant_data?: string | null;

		/**
		 * Used for storing merchant's internal order number or other reference.
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference1?: string | null;

		/**
		 * Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference2?: string | null;
		merchant_urls?: Merchant_urls;
		options?: Options;

		/**
		 * Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Minimum: 0
		 */
		order_amount?: string | null;

		/**
		 * The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		order_lines?: Array<Order_line>;

		/**
		 * Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Minimum: 0
		 */
		order_tax_amount?: string | null;

		/** Available payment method categories */
		payment_method_categories?: Array<Payment_method_category>;

		/** The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc. */
		purchase_country?: string | null;

		/** The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc. */
		purchase_currency?: string | null;
		shipping_address?: Address;

		/** The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed. */
		status?: Create_order_requestStatus | null;
	}
	export interface SessionFormProperties {

		/** The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement. */
		acquiring_channel: FormControl<SessionAcquiring_channel | null | undefined>,

		/** Authorization token. */
		authorization_token: FormControl<string | null | undefined>,

		/**
		 * Token to be passed to the JS client
		 * Min length: 0
		 * Max length: 4096
		 */
		client_token: FormControl<string | null | undefined>,

		/** Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter. */
		design: FormControl<string | null | undefined>,

		/** Session expiration date */
		expires_at: FormControl<Date | null | undefined>,

		/** Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session. */
		intent: FormControl<SessionIntent | null | undefined>,

		/**
		 * Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.
		 * The following values are applicable:
		 * AT: "de-AT", "de-DE", "en-DE"
		 * BE: "be-BE", "nl-BE", "fr-BE", "en-BE"
		 * CH: "it-CH", "de-CH", "fr-CH", "en-CH"
		 * DE: "de-DE", "de-AT", "en-DE"
		 * DK: "da-DK", "en-DK"
		 * ES: "es-ES", "ca-ES", "en-ES"
		 * FI: "fi-FI", "sv-FI", "en-FI"
		 * GB: "en-GB"
		 * IT: "it-IT", "en-IT"
		 * NL: "nl-NL", "en-NL"
		 * NO: "nb-NO", "en-NO"
		 * PL: "pl-PL", "en-PL"
		 * SE: "sv-SE", "en-SE"
		 * US: "en-US".
		 */
		locale: FormControl<string | null | undefined>,

		/**
		 * Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)
		 * Min length: 0
		 * Max length: 6000
		 */
		merchant_data: FormControl<string | null | undefined>,

		/**
		 * Used for storing merchant's internal order number or other reference.
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference1: FormControl<string | null | undefined>,

		/**
		 * Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference2: FormControl<string | null | undefined>,

		/**
		 * Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Minimum: 0
		 */
		order_amount: FormControl<string | null | undefined>,

		/**
		 * Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Minimum: 0
		 */
		order_tax_amount: FormControl<string | null | undefined>,

		/** The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc. */
		purchase_country: FormControl<string | null | undefined>,

		/** The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc. */
		purchase_currency: FormControl<string | null | undefined>,

		/** The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed. */
		status: FormControl<Create_order_requestStatus | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			acquiring_channel: new FormControl<SessionAcquiring_channel | null | undefined>(undefined),
			authorization_token: new FormControl<string | null | undefined>(undefined),
			client_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4096)]),
			design: new FormControl<string | null | undefined>(undefined),
			expires_at: new FormControl<Date | null | undefined>(undefined),
			intent: new FormControl<SessionIntent | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z]{2,2}(?:-[A-Za-z]{2,2})*$')]),
			merchant_data: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(6000)]),
			merchant_reference1: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			merchant_reference2: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			order_amount: new FormControl<string | null | undefined>(undefined, [Validators.min(0)]),
			order_tax_amount: new FormControl<string | null | undefined>(undefined, [Validators.min(0)]),
			purchase_country: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z]{2,2}$')]),
			purchase_currency: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z]{3,3}$')]),
			status: new FormControl<Create_order_requestStatus | null | undefined>(undefined),
		});

	}

	export enum SessionAcquiring_channel { ECOMMERCE = 'ECOMMERCE', IN_STORE = 'IN_STORE', TELESALES = 'TELESALES' }

	export enum SessionIntent { buy = 'buy', tokenize = 'tokenize', buy_and_tokenize = 'buy_and_tokenize' }

	export interface Session_create {

		/** The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement. */
		acquiring_channel?: SessionAcquiring_channel | null;
		attachment?: Attachment;

		/** Authorization token. */
		authorization_token?: string | null;
		billing_address?: Address;

		/**
		 * Token to be passed to the JS client
		 * Min length: 0
		 * Max length: 4096
		 */
		client_token?: string | null;

		/** Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. */
		custom_payment_method_ids?: Array<string>;
		customer?: Customer;

		/** Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter. */
		design?: string | null;

		/** Session expiration date */
		expires_at?: Date | null;

		/** Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session. */
		intent?: SessionIntent | null;

		/**
		 * Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.
		 * The following values are applicable:
		 * AT: "de-AT", "de-DE", "en-DE"
		 * BE: "be-BE", "nl-BE", "fr-BE", "en-BE"
		 * CH: "it-CH", "de-CH", "fr-CH", "en-CH"
		 * DE: "de-DE", "de-AT", "en-DE"
		 * DK: "da-DK", "en-DK"
		 * ES: "es-ES", "ca-ES", "en-ES"
		 * FI: "fi-FI", "sv-FI", "en-FI"
		 * GB: "en-GB"
		 * IT: "it-IT", "en-IT"
		 * NL: "nl-NL", "en-NL"
		 * NO: "nb-NO", "en-NO"
		 * PL: "pl-PL", "en-PL"
		 * SE: "sv-SE", "en-SE"
		 * US: "en-US". Default value is "en-US".
		 */
		locale?: string | null;

		/**
		 * Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)
		 * Min length: 0
		 * Max length: 6000
		 */
		merchant_data?: string | null;

		/**
		 * Used for storing merchant's internal order number or other reference.
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference1?: string | null;

		/**
		 * Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference2?: string | null;
		merchant_urls?: Merchant_urls;
		options?: Options;

		/**
		 * Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Required
		 * Minimum: 0
		 */
		order_amount: string;

		/**
		 * The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		order_lines: Array<Order_line>;

		/**
		 * Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Minimum: 0
		 */
		order_tax_amount?: string | null;

		/** Available payment method categories */
		payment_method_categories?: Array<Payment_method_category>;

		/**
		 * The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.
		 * Required
		 */
		purchase_country: string;

		/**
		 * The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.
		 * Required
		 */
		purchase_currency: string;
		shipping_address?: Address;

		/** The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed. */
		status?: Create_order_requestStatus | null;
	}
	export interface Session_createFormProperties {

		/** The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement. */
		acquiring_channel: FormControl<SessionAcquiring_channel | null | undefined>,

		/** Authorization token. */
		authorization_token: FormControl<string | null | undefined>,

		/**
		 * Token to be passed to the JS client
		 * Min length: 0
		 * Max length: 4096
		 */
		client_token: FormControl<string | null | undefined>,

		/** Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter. */
		design: FormControl<string | null | undefined>,

		/** Session expiration date */
		expires_at: FormControl<Date | null | undefined>,

		/** Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session. */
		intent: FormControl<SessionIntent | null | undefined>,

		/**
		 * Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.
		 * The following values are applicable:
		 * AT: "de-AT", "de-DE", "en-DE"
		 * BE: "be-BE", "nl-BE", "fr-BE", "en-BE"
		 * CH: "it-CH", "de-CH", "fr-CH", "en-CH"
		 * DE: "de-DE", "de-AT", "en-DE"
		 * DK: "da-DK", "en-DK"
		 * ES: "es-ES", "ca-ES", "en-ES"
		 * FI: "fi-FI", "sv-FI", "en-FI"
		 * GB: "en-GB"
		 * IT: "it-IT", "en-IT"
		 * NL: "nl-NL", "en-NL"
		 * NO: "nb-NO", "en-NO"
		 * PL: "pl-PL", "en-PL"
		 * SE: "sv-SE", "en-SE"
		 * US: "en-US". Default value is "en-US".
		 */
		locale: FormControl<string | null | undefined>,

		/**
		 * Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)
		 * Min length: 0
		 * Max length: 6000
		 */
		merchant_data: FormControl<string | null | undefined>,

		/**
		 * Used for storing merchant's internal order number or other reference.
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference1: FormControl<string | null | undefined>,

		/**
		 * Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference2: FormControl<string | null | undefined>,

		/**
		 * Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Required
		 * Minimum: 0
		 */
		order_amount: FormControl<string | null | undefined>,

		/**
		 * Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Minimum: 0
		 */
		order_tax_amount: FormControl<string | null | undefined>,

		/**
		 * The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.
		 * Required
		 */
		purchase_country: FormControl<string | null | undefined>,

		/**
		 * The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.
		 * Required
		 */
		purchase_currency: FormControl<string | null | undefined>,

		/** The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed. */
		status: FormControl<Create_order_requestStatus | null | undefined>,
	}
	export function CreateSession_createFormGroup() {
		return new FormGroup<Session_createFormProperties>({
			acquiring_channel: new FormControl<SessionAcquiring_channel | null | undefined>(undefined),
			authorization_token: new FormControl<string | null | undefined>(undefined),
			client_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4096)]),
			design: new FormControl<string | null | undefined>(undefined),
			expires_at: new FormControl<Date | null | undefined>(undefined),
			intent: new FormControl<SessionIntent | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z]{2,2}(?:-[A-Za-z]{2,2})*$')]),
			merchant_data: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(6000)]),
			merchant_reference1: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			merchant_reference2: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			order_amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			order_tax_amount: new FormControl<string | null | undefined>(undefined, [Validators.min(0)]),
			purchase_country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z]{2,2}$')]),
			purchase_currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z]{3,3}$')]),
			status: new FormControl<Create_order_requestStatus | null | undefined>(undefined),
		});

	}

	export interface Session_read {

		/** The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement. */
		acquiring_channel?: SessionAcquiring_channel | null;
		attachment?: Attachment;

		/** Authorization token. */
		authorization_token?: string | null;
		billing_address?: Address;

		/**
		 * Token to be passed to the JS client
		 * Min length: 0
		 * Max length: 4096
		 */
		client_token?: string | null;

		/** Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. */
		custom_payment_method_ids?: Array<string>;
		customer?: Customer_read;

		/** Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter. */
		design?: string | null;

		/** Session expiration date */
		expires_at?: Date | null;

		/** Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session. */
		intent?: SessionIntent | null;

		/**
		 * Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.
		 * The following values are applicable:
		 * AT: "de-AT", "de-DE", "en-DE"
		 * BE: "be-BE", "nl-BE", "fr-BE", "en-BE"
		 * CH: "it-CH", "de-CH", "fr-CH", "en-CH"
		 * DE: "de-DE", "de-AT", "en-DE"
		 * DK: "da-DK", "en-DK"
		 * ES: "es-ES", "ca-ES", "en-ES"
		 * FI: "fi-FI", "sv-FI", "en-FI"
		 * GB: "en-GB"
		 * IT: "it-IT", "en-IT"
		 * NL: "nl-NL", "en-NL"
		 * NO: "nb-NO", "en-NO"
		 * PL: "pl-PL", "en-PL"
		 * SE: "sv-SE", "en-SE"
		 * US: "en-US".
		 */
		locale?: string | null;

		/**
		 * Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)
		 * Min length: 0
		 * Max length: 6000
		 */
		merchant_data?: string | null;

		/**
		 * Used for storing merchant's internal order number or other reference.
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference1?: string | null;

		/**
		 * Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference2?: string | null;
		merchant_urls?: Merchant_urls;
		options?: Options;

		/**
		 * Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Minimum: 0
		 */
		order_amount?: string | null;

		/**
		 * The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		order_lines?: Array<Order_line>;

		/**
		 * Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Minimum: 0
		 */
		order_tax_amount?: string | null;

		/** Available payment method categories */
		payment_method_categories?: Array<Payment_method_category>;

		/** The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc. */
		purchase_country?: string | null;

		/** The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc. */
		purchase_currency?: string | null;
		shipping_address?: Address;

		/** The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed. */
		status?: Create_order_requestStatus | null;
	}
	export interface Session_readFormProperties {

		/** The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement. */
		acquiring_channel: FormControl<SessionAcquiring_channel | null | undefined>,

		/** Authorization token. */
		authorization_token: FormControl<string | null | undefined>,

		/**
		 * Token to be passed to the JS client
		 * Min length: 0
		 * Max length: 4096
		 */
		client_token: FormControl<string | null | undefined>,

		/** Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter. */
		design: FormControl<string | null | undefined>,

		/** Session expiration date */
		expires_at: FormControl<Date | null | undefined>,

		/** Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session. */
		intent: FormControl<SessionIntent | null | undefined>,

		/**
		 * Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.
		 * The following values are applicable:
		 * AT: "de-AT", "de-DE", "en-DE"
		 * BE: "be-BE", "nl-BE", "fr-BE", "en-BE"
		 * CH: "it-CH", "de-CH", "fr-CH", "en-CH"
		 * DE: "de-DE", "de-AT", "en-DE"
		 * DK: "da-DK", "en-DK"
		 * ES: "es-ES", "ca-ES", "en-ES"
		 * FI: "fi-FI", "sv-FI", "en-FI"
		 * GB: "en-GB"
		 * IT: "it-IT", "en-IT"
		 * NL: "nl-NL", "en-NL"
		 * NO: "nb-NO", "en-NO"
		 * PL: "pl-PL", "en-PL"
		 * SE: "sv-SE", "en-SE"
		 * US: "en-US".
		 */
		locale: FormControl<string | null | undefined>,

		/**
		 * Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)
		 * Min length: 0
		 * Max length: 6000
		 */
		merchant_data: FormControl<string | null | undefined>,

		/**
		 * Used for storing merchant's internal order number or other reference.
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference1: FormControl<string | null | undefined>,

		/**
		 * Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).
		 * Min length: 0
		 * Max length: 255
		 */
		merchant_reference2: FormControl<string | null | undefined>,

		/**
		 * Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Minimum: 0
		 */
		order_amount: FormControl<string | null | undefined>,

		/**
		 * Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
		 * Minimum: 0
		 */
		order_tax_amount: FormControl<string | null | undefined>,

		/** The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc. */
		purchase_country: FormControl<string | null | undefined>,

		/** The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc. */
		purchase_currency: FormControl<string | null | undefined>,

		/** The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed. */
		status: FormControl<Create_order_requestStatus | null | undefined>,
	}
	export function CreateSession_readFormGroup() {
		return new FormGroup<Session_readFormProperties>({
			acquiring_channel: new FormControl<SessionAcquiring_channel | null | undefined>(undefined),
			authorization_token: new FormControl<string | null | undefined>(undefined),
			client_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4096)]),
			design: new FormControl<string | null | undefined>(undefined),
			expires_at: new FormControl<Date | null | undefined>(undefined),
			intent: new FormControl<SessionIntent | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z]{2,2}(?:-[A-Za-z]{2,2})*$')]),
			merchant_data: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(6000)]),
			merchant_reference1: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			merchant_reference2: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			order_amount: new FormControl<string | null | undefined>(undefined, [Validators.min(0)]),
			order_tax_amount: new FormControl<string | null | undefined>(undefined, [Validators.min(0)]),
			purchase_country: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z]{2,2}$')]),
			purchase_currency: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z]{3,3}$')]),
			status: new FormControl<Create_order_requestStatus | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancel an existing authorization
		 * Use this API call to cancel/release an authorization. If the `authorization_token` received during a Klarna Payments won’t be used to place an order immediately you could release the authorization.
		 * Read more on **[Cancel an existing authorization](https://docs.klarna.com/klarna-payments/other-actions/cancel-an-authorization/)**.
		 * Delete payments/v1/authorizations/{authorizationToken}
		 * @return {void} 
		 */
		CancelAuthorization(authorizationToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'payments/v1/authorizations/' + (authorizationToken == null ? '' : encodeURIComponent(authorizationToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate a consumer token
		 * Use this API call to create a Klarna Customer Token.<br/>After having obtained an `authorization_token` for a successful authorization, this can be used to create a purchase token instead of placing the order. Creating a Klarna Customer Token results in Klarna storing customer and payment method details.
		 * Read more on **[Generate a consumer token](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-token/)**.
		 * Post payments/v1/authorizations/{authorizationToken}/customer-token
		 * @return {Customer_token_creation_response} Token was successfully created.
		 */
		PurchaseToken(authorizationToken: string, requestBody: Customer_token_creation_request): Observable<Customer_token_creation_response> {
			return this.http.post<Customer_token_creation_response>(this.baseUri + 'payments/v1/authorizations/' + (authorizationToken == null ? '' : encodeURIComponent(authorizationToken)) + '/customer-token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new order
		 * Use this API call to create a new order. Placing an order towards Klarna means that the Klarna Payments session will be closed and that an order will be created in Klarna's system.<br/>When you have received the `authorization_token` for a successful authorization you can place the order. Among the other order details in this request, you include a URL to the confirmation page for the customer.<br/>When the Order has been successfully placed at Klarna, you need to handle it either through the Merchant Portal or using [Klarna’s Order Management API](#order-management-api).
		 * Read more on **[Create a new order](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-3-create-an-order/)**.
		 * Post payments/v1/authorizations/{authorizationToken}/order
		 * @return {Order} Order was successfully created.
		 */
		CreateOrder(authorizationToken: string, requestBody: Create_order_request): Observable<Order> {
			return this.http.post<Order>(this.baseUri + 'payments/v1/authorizations/' + (authorizationToken == null ? '' : encodeURIComponent(authorizationToken)) + '/order', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new payment session
		 * Use this API call to create a Klarna Payments session.<br/>When a session is created you will receive the available `payment_method_categories` for the session, a `session_id` and a `client_token`. The `session_id` can be used to read or update the session using the REST API. The `client_token` should be passed to the browser.
		 * Read more on **[Create a new payment session](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/)**.
		 * Post payments/v1/sessions
		 * @param {Session_create} requestBody session_request
		 * @return {Merchant_session} successful operation
		 */
		CreateCreditSession(requestBody: Session_create): Observable<Merchant_session> {
			return this.http.post<Merchant_session>(this.baseUri + 'payments/v1/sessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Read an existing payment session
		 * Use this API call to read a Klarna Payments session. You can read the Klarna Payments session at any time after it has been created, to get information about it. This will return all data that has been collected during the session.
		 * Read more on **[Read an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/check-the-details-of-a-payment-session/)**.
		 * Get payments/v1/sessions/{session_id}
		 * @param {string} session_id session_id
		 * @return {Session_read} successful operation
		 */
		ReadCreditSession(session_id: string): Observable<Session_read> {
			return this.http.get<Session_read>(this.baseUri + 'payments/v1/sessions/' + (session_id == null ? '' : encodeURIComponent(session_id)), {});
		}

		/**
		 * Update an existing payment session
		 * Use this API call to update a Klarna Payments session with new details, in case something in the order has changed and the checkout has been reloaded. Including if the consumer adds a new item to the cart or if consumer details are updated.
		 * Read more on **[Update an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/update-the-cart/)**.
		 * Post payments/v1/sessions/{session_id}
		 * @param {string} session_id session_id
		 * @param {Session} requestBody session_request
		 * @return {void} 
		 */
		UpdateCreditSession(session_id: string, requestBody: Session): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'payments/v1/sessions/' + (session_id == null ? '' : encodeURIComponent(session_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

