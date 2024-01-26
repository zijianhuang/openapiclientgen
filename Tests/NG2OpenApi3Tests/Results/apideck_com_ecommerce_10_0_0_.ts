import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
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

	export enum AddressType { primary = 0, secondary = 1, home = 2, office = 3, shipping = 4, billing = 5, other = 6 }

	export interface BadRequestResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
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

		/** HTTP status code */
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

	export interface CreateEcommerceCustomerResponse {

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
		 */
		status_code: number;
	}
	export interface CreateEcommerceCustomerResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateEcommerceCustomerResponseFormGroup() {
		return new FormGroup<CreateEcommerceCustomerResponseFormProperties>({
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

	export interface CreateEcommerceOrderResponse {

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
		 */
		status_code: number;
	}
	export interface CreateEcommerceOrderResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateEcommerceOrderResponseFormGroup() {
		return new FormGroup<CreateEcommerceOrderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProductResponse {

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
		 */
		status_code: number;
	}
	export interface CreateProductResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateProductResponseFormGroup() {
		return new FormGroup<CreateProductResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
	export enum Currency { UNKNOWN_CURRENCY = 0, AED = 1, AFN = 2, ALL = 3, AMD = 4, ANG = 5, AOA = 6, ARS = 7, AUD = 8, AWG = 9, AZN = 10, BAM = 11, BBD = 12, BDT = 13, BGN = 14, BHD = 15, BIF = 16, BMD = 17, BND = 18, BOB = 19, BOV = 20, BRL = 21, BSD = 22, BTN = 23, BWP = 24, BYR = 25, BZD = 26, CAD = 27, CDF = 28, CHE = 29, CHF = 30, CHW = 31, CLF = 32, CLP = 33, CNY = 34, COP = 35, COU = 36, CRC = 37, CUC = 38, CUP = 39, CVE = 40, CZK = 41, DJF = 42, DKK = 43, DOP = 44, DZD = 45, EGP = 46, ERN = 47, ETB = 48, EUR = 49, FJD = 50, FKP = 51, GBP = 52, GEL = 53, GHS = 54, GIP = 55, GMD = 56, GNF = 57, GTQ = 58, GYD = 59, HKD = 60, HNL = 61, HRK = 62, HTG = 63, HUF = 64, IDR = 65, ILS = 66, INR = 67, IQD = 68, IRR = 69, ISK = 70, JMD = 71, JOD = 72, JPY = 73, KES = 74, KGS = 75, KHR = 76, KMF = 77, KPW = 78, KRW = 79, KWD = 80, KYD = 81, KZT = 82, LAK = 83, LBP = 84, LKR = 85, LRD = 86, LSL = 87, LTL = 88, LVL = 89, LYD = 90, MAD = 91, MDL = 92, MGA = 93, MKD = 94, MMK = 95, MNT = 96, MOP = 97, MRO = 98, MUR = 99, MVR = 100, MWK = 101, MXN = 102, MXV = 103, MYR = 104, MZN = 105, NAD = 106, NGN = 107, NIO = 108, NOK = 109, NPR = 110, NZD = 111, OMR = 112, PAB = 113, PEN = 114, PGK = 115, PHP = 116, PKR = 117, PLN = 118, PYG = 119, QAR = 120, RON = 121, RSD = 122, RUB = 123, RWF = 124, SAR = 125, SBD = 126, SCR = 127, SDG = 128, SEK = 129, SGD = 130, SHP = 131, SLL = 132, SOS = 133, SRD = 134, SSP = 135, STD = 136, SVC = 137, SYP = 138, SZL = 139, THB = 140, TJS = 141, TMT = 142, TND = 143, TOP = 144, TRC = 145, TRY = 146, TTD = 147, TWD = 148, TZS = 149, UAH = 150, UGX = 151, USD = 152, USN = 153, USS = 154, UYI = 155, UYU = 156, UZS = 157, VEF = 158, VND = 159, VUV = 160, WST = 161, XAF = 162, XAG = 163, XAU = 164, XBA = 165, XBB = 166, XBC = 167, XBD = 168, XCD = 169, XDR = 170, XOF = 171, XPD = 172, XPF = 173, XPT = 174, XTS = 175, XXX = 176, YER = 177, ZAR = 178, ZMK = 179, ZMW = 180, BTC = 181, ETH = 182 }

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

	export interface DeleteEcommerceCustomerResponse {

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
		 */
		status_code: number;
	}
	export interface DeleteEcommerceCustomerResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteEcommerceCustomerResponseFormGroup() {
		return new FormGroup<DeleteEcommerceCustomerResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEcommerceOrderResponse {

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
		 */
		status_code: number;
	}
	export interface DeleteEcommerceOrderResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteEcommerceOrderResponseFormGroup() {
		return new FormGroup<DeleteEcommerceOrderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteProductResponse {

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
		 */
		status_code: number;
	}
	export interface DeleteProductResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteProductResponseFormGroup() {
		return new FormGroup<DeleteProductResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Department {
		code?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;
		description?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** Department name */
		name?: string | null;

		/** Parent ID */
		parent_id?: string | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface DepartmentFormProperties {
		code: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** Department name */
		name: FormControl<string | null | undefined>,

		/** Parent ID */
		parent_id: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateDepartmentFormGroup() {
		return new FormGroup<DepartmentFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent_id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing a shipping or billing address. */
	export interface EcommerceAddress {

		/** City of the billing address. */
		city?: string | null;

		/** Company name of the customer */
		company_name?: string | null;

		/**
		 * Country of the billing address.
		 * Max length: 2
		 */
		country?: string | null;

		/** Address line 1 of the billing address. */
		line1?: string | null;

		/** Address line 2 of the billing address. */
		line2?: string | null;

		/** Postal/ZIP code of the billing address. */
		postal_code?: string | null;

		/** State/province of the billing address. */
		state?: string | null;
	}

	/** An object representing a shipping or billing address. */
	export interface EcommerceAddressFormProperties {

		/** City of the billing address. */
		city: FormControl<string | null | undefined>,

		/** Company name of the customer */
		company_name: FormControl<string | null | undefined>,

		/**
		 * Country of the billing address.
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,

		/** Address line 1 of the billing address. */
		line1: FormControl<string | null | undefined>,

		/** Address line 2 of the billing address. */
		line2: FormControl<string | null | undefined>,

		/** Postal/ZIP code of the billing address. */
		postal_code: FormControl<string | null | undefined>,

		/** State/province of the billing address. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateEcommerceAddressFormGroup() {
		return new FormGroup<EcommerceAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2)]),
			line1: new FormControl<string | null | undefined>(undefined),
			line2: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EcommerceCustomer {

		/** An array of addresses for the customer. */
		EcommerceCustomerAddresses?: Array<EcommerceCustomerAddresses>;

		/** Company name of the customer */
		company_name?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** An array of email addresses for the customer. */
		emails?: Array<Email>;

		/** First name of the customer */
		first_name?: string | null;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/** Last name of the customer */
		last_name?: string | null;

		/** Full name of the customer */
		name?: string | null;
		orders?: Array<LinkedEcommerceOrder>;

		/** An array of phone numbers for the customer. */
		phone_numbers?: Array<PhoneNumber>;

		/** The current status of the customer */
		status?: EcommerceCustomerStatus | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;
	}
	export interface EcommerceCustomerFormProperties {

		/** Company name of the customer */
		company_name: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,

		/** First name of the customer */
		first_name: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Last name of the customer */
		last_name: FormControl<string | null | undefined>,

		/** Full name of the customer */
		name: FormControl<string | null | undefined>,

		/** The current status of the customer */
		status: FormControl<EcommerceCustomerStatus | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateEcommerceCustomerFormGroup() {
		return new FormGroup<EcommerceCustomerFormProperties>({
			company_name: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EcommerceCustomerStatus | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface EcommerceCustomerAddresses {

		/** City of the customer */
		city?: string | null;

		/** Country of the customer */
		country?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** First line of the street address of the customer */
		line1?: string | null;

		/** Second line of the street address of the customer */
		line2?: string | null;

		/** Postal code of the customer */
		postal_code?: string | null;

		/** State of the customer */
		state?: string | null;
		type?: EcommerceCustomerAddressesType | null;
	}
	export interface EcommerceCustomerAddressesFormProperties {

		/** City of the customer */
		city: FormControl<string | null | undefined>,

		/** Country of the customer */
		country: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** First line of the street address of the customer */
		line1: FormControl<string | null | undefined>,

		/** Second line of the street address of the customer */
		line2: FormControl<string | null | undefined>,

		/** Postal code of the customer */
		postal_code: FormControl<string | null | undefined>,

		/** State of the customer */
		state: FormControl<string | null | undefined>,
		type: FormControl<EcommerceCustomerAddressesType | null | undefined>,
	}
	export function CreateEcommerceCustomerAddressesFormGroup() {
		return new FormGroup<EcommerceCustomerAddressesFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			line1: new FormControl<string | null | undefined>(undefined),
			line2: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EcommerceCustomerAddressesType | null | undefined>(undefined),
		});

	}

	export enum EcommerceCustomerAddressesType { billing = 0, shipping = 1, other = 2 }

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

	export enum EmailType { primary = 0, secondary = 1, work = 2, personal = 3, billing = 4, other = 5 }


	/** The order this entity is linked to. */
	export interface LinkedEcommerceOrder {

		/** A unique identifier for an object. */
		id?: string | null;

		/** Current status of the order. */
		status?: LinkedEcommerceOrderStatus | null;

		/** The total amount of the order. */
		total?: string | null;
	}

	/** The order this entity is linked to. */
	export interface LinkedEcommerceOrderFormProperties {

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** Current status of the order. */
		status: FormControl<LinkedEcommerceOrderStatus | null | undefined>,

		/** The total amount of the order. */
		total: FormControl<string | null | undefined>,
	}
	export function CreateLinkedEcommerceOrderFormGroup() {
		return new FormGroup<LinkedEcommerceOrderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<LinkedEcommerceOrderStatus | null | undefined>(undefined),
			total: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LinkedEcommerceOrderStatus { active = 0, completed = 1, cancelled = 2, archived = 3, unknown = 4 }

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

	export enum PhoneNumberType { primary = 0, secondary = 1, home = 2, work = 3, office = 4, mobile = 5, assistant = 6, fax = 7, 'direct-dial-in' = 8, personal = 9, other = 10 }

	export enum EcommerceCustomerStatus { active = 0, archived = 1 }

	export interface EcommerceCustomersFilter {

		/** Customer email address to filter on */
		email?: string | null;

		/** Customer phone number to filter on */
		phone_number?: string | null;
	}
	export interface EcommerceCustomersFilterFormProperties {

		/** Customer email address to filter on */
		email: FormControl<string | null | undefined>,

		/** Customer phone number to filter on */
		phone_number: FormControl<string | null | undefined>,
	}
	export function CreateEcommerceCustomersFilterFormGroup() {
		return new FormGroup<EcommerceCustomersFilterFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing a discount applied to an ecommerce order or product. */
	export interface EcommerceDiscount {

		/** The fixed amount of the discount. */
		amount?: string | null;

		/** The code used to apply the discount. */
		code?: string | null;

		/** The percentage of the discount. */
		percentage?: string | null;
	}

	/** An object representing a discount applied to an ecommerce order or product. */
	export interface EcommerceDiscountFormProperties {

		/** The fixed amount of the discount. */
		amount: FormControl<string | null | undefined>,

		/** The code used to apply the discount. */
		code: FormControl<string | null | undefined>,

		/** The percentage of the discount. */
		percentage: FormControl<string | null | undefined>,
	}
	export function CreateEcommerceDiscountFormGroup() {
		return new FormGroup<EcommerceDiscountFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EcommerceOrder {

		/** An object representing a shipping or billing address. */
		billing_address?: EcommerceAddress;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The customer this entity is linked to. */
		customer?: LinkedEcommerceCustomer;
		discounts?: Array<EcommerceDiscount>;

		/** Current fulfillment status of the order. */
		fulfillment_status?: EcommerceOrderFulfillment_status | null;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;
		line_items?: Array<EcommerceOrderLineItem>;

		/** Note for the order. */
		note?: string | null;

		/** Order number, if any. */
		order_number?: string | null;

		/** Payment method used for this order. */
		payment_method?: string | null;

		/** Current payment status of the order. */
		payment_status?: EcommerceOrderPayment_status | null;

		/** An object representing a shipping or billing address. */
		shipping_address?: EcommerceAddress;

		/** Shipping cost, if any. */
		shipping_cost?: string | null;

		/** Current status of the order. */
		status?: LinkedEcommerceOrderStatus | null;

		/** Sub-total amount, normally before tax. */
		sub_total?: string | null;

		/** Total amount due. */
		total_amount?: string | null;

		/** Total discount, if any. */
		total_discount?: string | null;

		/** Total tax, if any. */
		total_tax?: string | null;
		tracking?: Array<TrackingItem>;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;
	}
	export interface EcommerceOrderFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,

		/** Current fulfillment status of the order. */
		fulfillment_status: FormControl<EcommerceOrderFulfillment_status | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Note for the order. */
		note: FormControl<string | null | undefined>,

		/** Order number, if any. */
		order_number: FormControl<string | null | undefined>,

		/** Payment method used for this order. */
		payment_method: FormControl<string | null | undefined>,

		/** Current payment status of the order. */
		payment_status: FormControl<EcommerceOrderPayment_status | null | undefined>,

		/** Shipping cost, if any. */
		shipping_cost: FormControl<string | null | undefined>,

		/** Current status of the order. */
		status: FormControl<LinkedEcommerceOrderStatus | null | undefined>,

		/** Sub-total amount, normally before tax. */
		sub_total: FormControl<string | null | undefined>,

		/** Total amount due. */
		total_amount: FormControl<string | null | undefined>,

		/** Total discount, if any. */
		total_discount: FormControl<string | null | undefined>,

		/** Total tax, if any. */
		total_tax: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateEcommerceOrderFormGroup() {
		return new FormGroup<EcommerceOrderFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			fulfillment_status: new FormControl<EcommerceOrderFulfillment_status | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined),
			order_number: new FormControl<string | null | undefined>(undefined),
			payment_method: new FormControl<string | null | undefined>(undefined),
			payment_status: new FormControl<EcommerceOrderPayment_status | null | undefined>(undefined),
			shipping_cost: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<LinkedEcommerceOrderStatus | null | undefined>(undefined),
			sub_total: new FormControl<string | null | undefined>(undefined),
			total_amount: new FormControl<string | null | undefined>(undefined),
			total_discount: new FormControl<string | null | undefined>(undefined),
			total_tax: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The customer this entity is linked to. */
	export interface LinkedEcommerceCustomer {

		/** Company name of the customer */
		company_name?: string | null;
		emails?: Array<Email>;

		/** First name of the customer */
		first_name?: string | null;

		/**
		 * The ID of the customer this entity is linked to.
		 * Required
		 */
		id: string;

		/** Last name of the customer */
		last_name?: string | null;

		/** Full name of the customer */
		name?: string | null;
		phone_numbers?: Array<PhoneNumber>;
	}

	/** The customer this entity is linked to. */
	export interface LinkedEcommerceCustomerFormProperties {

		/** Company name of the customer */
		company_name: FormControl<string | null | undefined>,

		/** First name of the customer */
		first_name: FormControl<string | null | undefined>,

		/**
		 * The ID of the customer this entity is linked to.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Last name of the customer */
		last_name: FormControl<string | null | undefined>,

		/** Full name of the customer */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLinkedEcommerceCustomerFormGroup() {
		return new FormGroup<LinkedEcommerceCustomerFormProperties>({
			company_name: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EcommerceOrderFulfillment_status { pending = 0, shipped = 1, partial = 2, delivered = 3, cancelled = 4, returned = 5, unknown = 6 }


	/** A single line item of an ecommerce order, representing a product or variant with associated options, quantity, and pricing information. */
	export interface EcommerceOrderLineItem {

		/** The description of the product or variant associated with the line item. */
		description?: string | null;
		discounts?: Array<EcommerceDiscount>;

		/** A unique identifier for an object. */
		id?: string | null;

		/**
		 * The name of the product or variant associated with the line item.
		 * Required
		 */
		name: string;
		EcommerceOrderLineItemOptions?: Array<EcommerceOrderLineItemOptions>;

		/** A unique identifier for the product associated with the line item. */
		product_id?: string | null;

		/**
		 * The quantity of the product or variant associated with the line item.
		 * Required
		 */
		quantity: string;

		/** The SKU of the product or variant associated with the line item. */
		sku?: string | null;

		/** The total tax amount applied to the product or variant associated with the line item. */
		tax_amount?: string | null;

		/** The tax rate applied to the product or variant associated with the line item. */
		tax_rate?: string | null;

		/**
		 * The total amount for the product(s) or variant associated with the line item, including taxes and discounts.
		 * Required
		 */
		total_amount: string;

		/** The unit price of the product or variant associated with the line item. */
		unit_price?: string | null;

		/** A unique identifier for the variant of the product associated with the line item, if applicable. */
		variant_id?: string | null;
	}

	/** A single line item of an ecommerce order, representing a product or variant with associated options, quantity, and pricing information. */
	export interface EcommerceOrderLineItemFormProperties {

		/** The description of the product or variant associated with the line item. */
		description: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the product or variant associated with the line item.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** A unique identifier for the product associated with the line item. */
		product_id: FormControl<string | null | undefined>,

		/**
		 * The quantity of the product or variant associated with the line item.
		 * Required
		 */
		quantity: FormControl<string | null | undefined>,

		/** The SKU of the product or variant associated with the line item. */
		sku: FormControl<string | null | undefined>,

		/** The total tax amount applied to the product or variant associated with the line item. */
		tax_amount: FormControl<string | null | undefined>,

		/** The tax rate applied to the product or variant associated with the line item. */
		tax_rate: FormControl<string | null | undefined>,

		/**
		 * The total amount for the product(s) or variant associated with the line item, including taxes and discounts.
		 * Required
		 */
		total_amount: FormControl<string | null | undefined>,

		/** The unit price of the product or variant associated with the line item. */
		unit_price: FormControl<string | null | undefined>,

		/** A unique identifier for the variant of the product associated with the line item, if applicable. */
		variant_id: FormControl<string | null | undefined>,
	}
	export function CreateEcommerceOrderLineItemFormGroup() {
		return new FormGroup<EcommerceOrderLineItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			product_id: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sku: new FormControl<string | null | undefined>(undefined),
			tax_amount: new FormControl<string | null | undefined>(undefined),
			tax_rate: new FormControl<string | null | undefined>(undefined),
			total_amount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unit_price: new FormControl<string | null | undefined>(undefined),
			variant_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EcommerceOrderLineItemOptions {

		/** A unique identifier for the option. */
		id?: string | null;

		/** The name of the option. */
		name?: string | null;

		/** The value of the option. */
		value?: string | null;
	}
	export interface EcommerceOrderLineItemOptionsFormProperties {

		/** A unique identifier for the option. */
		id: FormControl<string | null | undefined>,

		/** The name of the option. */
		name: FormControl<string | null | undefined>,

		/** The value of the option. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEcommerceOrderLineItemOptionsFormGroup() {
		return new FormGroup<EcommerceOrderLineItemOptionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EcommerceOrderPayment_status { pending = 0, authorized = 1, paid = 2, partial = 3, refunded = 4, voided = 5, unknown = 6 }


	/** Represents the tracking information associated with an ecommerce order. */
	export interface TrackingItem {

		/**
		 * The tracking number associated with the shipment, which can be used to track the progress of the delivery.
		 * Required
		 */
		number: string;

		/**
		 * The name or code of the carrier or shipping company that is handling the shipment.
		 * Required
		 */
		provider: string;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The URL of the carrier's tracking page, which can be used to view detailed information about the shipment's progress. */
		url?: string | null;
	}

	/** Represents the tracking information associated with an ecommerce order. */
	export interface TrackingItemFormProperties {

		/**
		 * The tracking number associated with the shipment, which can be used to track the progress of the delivery.
		 * Required
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * The name or code of the carrier or shipping company that is handling the shipment.
		 * Required
		 */
		provider: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The URL of the carrier's tracking page, which can be used to view detailed information about the shipment's progress. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTrackingItemFormGroup() {
		return new FormGroup<TrackingItemFormProperties>({
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Current status of the order. */
	export enum EcommerceOrderStatus { active = 0, completed = 1, cancelled = 2, archived = 3, unknown = 4 }

	export interface EcommerceOrdersFilter {

		/** Customer email address to filter on */
		email?: string | null;
	}
	export interface EcommerceOrdersFilterFormProperties {

		/** Customer email address to filter on */
		email: FormControl<string | null | undefined>,
	}
	export function CreateEcommerceOrdersFilterFormGroup() {
		return new FormGroup<EcommerceOrdersFilterFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EcommerceProduct {

		/** An array of categories for the product, used for organization and searching. */
		EcommerceProductCategories?: Array<EcommerceProductCategories>;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** A detailed description of the product. */
		description?: string | null;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/** An array of image URLs for the product. */
		EcommerceProductImages?: Array<EcommerceProductImages>;

		/** The quantity of the product in stock. */
		inventory_quantity?: string | null;

		/** The name of the product as it should be displayed to customers. */
		name?: string | null;

		/** An array of options for the product. */
		EcommerceProductOptions?: Array<EcommerceProductOptions>;

		/** The price of the product. */
		price?: string | null;

		/** The stock keeping unit of the product. */
		sku?: string | null;

		/** The current status of the product (active or archived). */
		status?: EcommerceCustomerStatus | null;

		/** An array of tags for the product, used for organization and searching. */
		tags?: Array<string>;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;
		EcommerceProductVariants?: Array<EcommerceProductVariants>;

		/** The weight of the product. */
		weight?: string | null;

		/** The unit of measurement for the weight of the product. */
		weight_unit?: string | null;
	}
	export interface EcommerceProductFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** A detailed description of the product. */
		description: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The quantity of the product in stock. */
		inventory_quantity: FormControl<string | null | undefined>,

		/** The name of the product as it should be displayed to customers. */
		name: FormControl<string | null | undefined>,

		/** The price of the product. */
		price: FormControl<string | null | undefined>,

		/** The stock keeping unit of the product. */
		sku: FormControl<string | null | undefined>,

		/** The current status of the product (active or archived). */
		status: FormControl<EcommerceCustomerStatus | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The weight of the product. */
		weight: FormControl<string | null | undefined>,

		/** The unit of measurement for the weight of the product. */
		weight_unit: FormControl<string | null | undefined>,
	}
	export function CreateEcommerceProductFormGroup() {
		return new FormGroup<EcommerceProductFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inventory_quantity: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EcommerceCustomerStatus | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			weight: new FormControl<string | null | undefined>(undefined),
			weight_unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EcommerceProductCategories {

		/** A unique identifier for an object. */
		id?: string | null;

		/** The name of the category. */
		name?: string | null;
	}
	export interface EcommerceProductCategoriesFormProperties {

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** The name of the category. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEcommerceProductCategoriesFormGroup() {
		return new FormGroup<EcommerceProductCategoriesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EcommerceProductImages {

		/** A unique identifier for an object. */
		id?: string | null;

		/** The URL of an image of the product. */
		url?: string | null;
	}
	export interface EcommerceProductImagesFormProperties {

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** The URL of an image of the product. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEcommerceProductImagesFormGroup() {
		return new FormGroup<EcommerceProductImagesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EcommerceProductOptions {

		/** A unique identifier for the option of the product. */
		id?: string | null;

		/** The name of the option for the product. */
		name?: string | null;
		values?: Array<string>;
	}
	export interface EcommerceProductOptionsFormProperties {

		/** A unique identifier for the option of the product. */
		id: FormControl<string | null | undefined>,

		/** The name of the option for the product. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEcommerceProductOptionsFormGroup() {
		return new FormGroup<EcommerceProductOptionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EcommerceProductVariants {

		/** A unique identifier for the variant of the product. */
		id?: string | null;
		EcommerceProductVariantsImages?: Array<EcommerceProductVariantsImages>;

		/** The quantity of the variant in stock. */
		inventory_quantity?: string | null;

		/** The name for the variant, used for displaying to customers. */
		name?: string | null;
		EcommerceProductVariantsOptions?: Array<EcommerceProductVariantsOptions>;

		/** The price of the variant. */
		price?: string | null;

		/** The stock keeping unit of the variant. */
		sku?: string | null;

		/** The weight of the variant. */
		weight?: string | null;

		/** The unit of measurement for the weight of the variant. */
		weight_unit?: string | null;
	}
	export interface EcommerceProductVariantsFormProperties {

		/** A unique identifier for the variant of the product. */
		id: FormControl<string | null | undefined>,

		/** The quantity of the variant in stock. */
		inventory_quantity: FormControl<string | null | undefined>,

		/** The name for the variant, used for displaying to customers. */
		name: FormControl<string | null | undefined>,

		/** The price of the variant. */
		price: FormControl<string | null | undefined>,

		/** The stock keeping unit of the variant. */
		sku: FormControl<string | null | undefined>,

		/** The weight of the variant. */
		weight: FormControl<string | null | undefined>,

		/** The unit of measurement for the weight of the variant. */
		weight_unit: FormControl<string | null | undefined>,
	}
	export function CreateEcommerceProductVariantsFormGroup() {
		return new FormGroup<EcommerceProductVariantsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			inventory_quantity: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<string | null | undefined>(undefined),
			weight_unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EcommerceProductVariantsImages {

		/** A unique identifier for an object. */
		id?: string | null;

		/** The URL of an image of the variant. */
		url?: string | null;
	}
	export interface EcommerceProductVariantsImagesFormProperties {

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** The URL of an image of the variant. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEcommerceProductVariantsImagesFormGroup() {
		return new FormGroup<EcommerceProductVariantsImagesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EcommerceProductVariantsOptions {

		/** A unique identifier for the option of the variant. */
		id?: string | null;

		/** The name of the option for the variant. */
		name?: string | null;

		/** The value of the option for the variant. */
		value?: string | null;
	}
	export interface EcommerceProductVariantsOptionsFormProperties {

		/** A unique identifier for the option of the variant. */
		id: FormControl<string | null | undefined>,

		/** The name of the option for the variant. */
		name: FormControl<string | null | undefined>,

		/** The value of the option for the variant. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEcommerceProductVariantsOptionsFormGroup() {
		return new FormGroup<EcommerceProductVariantsOptionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EcommerceStore {

		/** The store's admin login URL */
		admin_url?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/** The store's name */
		name?: string | null;

		/** The store's website URL */
		store_url?: string | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;
	}
	export interface EcommerceStoreFormProperties {

		/** The store's admin login URL */
		admin_url: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The store's name */
		name: FormControl<string | null | undefined>,

		/** The store's website URL */
		store_url: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateEcommerceStoreFormGroup() {
		return new FormGroup<EcommerceStoreFormProperties>({
			admin_url: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^https?://')]),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			store_url: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^https?://')]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The gender represents the gender identity of a person. */
	export enum Gender { male = 0, female = 1, unisex = 2, other = 3, not_specified = 4 }

	export interface GetEcommerceCustomerResponse {

		/** Required */
		data: EcommerceCustomer;

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
		 */
		status_code: number;
	}
	export interface GetEcommerceCustomerResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetEcommerceCustomerResponseFormGroup() {
		return new FormGroup<GetEcommerceCustomerResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEcommerceCustomersResponse {

		/** Required */
		data: Array<EcommerceCustomer>;

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
		 */
		status_code: number;
	}
	export interface GetEcommerceCustomersResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetEcommerceCustomersResponseFormGroup() {
		return new FormGroup<GetEcommerceCustomersResponseFormProperties>({
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

		/** Number of items returned in the data property of the response */
		items_on_page?: number | null;
	}

	/** Response metadata */
	export interface MetaFormProperties {

		/** Number of items returned in the data property of the response */
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

	export interface GetEcommerceOrderResponse {

		/** Required */
		data: EcommerceOrder;

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
		 */
		status_code: number;
	}
	export interface GetEcommerceOrderResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetEcommerceOrderResponseFormGroup() {
		return new FormGroup<GetEcommerceOrderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEcommerceOrdersResponse {

		/** Required */
		data: Array<EcommerceOrder>;

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
		 */
		status_code: number;
	}
	export interface GetEcommerceOrdersResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetEcommerceOrdersResponseFormGroup() {
		return new FormGroup<GetEcommerceOrdersResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductResponse {

		/** Required */
		data: EcommerceProduct;

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
		 */
		status_code: number;
	}
	export interface GetProductResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetProductResponseFormGroup() {
		return new FormGroup<GetProductResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductsResponse {

		/** Required */
		data: Array<EcommerceProduct>;

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
		 */
		status_code: number;
	}
	export interface GetProductsResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetProductsResponseFormGroup() {
		return new FormGroup<GetProductsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetStoreResponse {

		/** Required */
		data: EcommerceStore;

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
		 */
		status_code: number;
	}
	export interface GetStoreResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetStoreResponseFormGroup() {
		return new FormGroup<GetStoreResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetStoresResponse {

		/** Required */
		data: Array<EcommerceStore>;

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
		 */
		status_code: number;
	}
	export interface GetStoresResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetStoresResponseFormGroup() {
		return new FormGroup<GetStoresResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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


	/** Unit of measurement for employee compensation. */
	export enum PaymentUnit { hour = 0, week = 1, month = 2, year = 3, paycheck = 4, other = 5 }

	export interface TooManyRequestsResponse {
		detail?: TooManyRequestsResponseDetail;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

		/** HTTP status code */
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

	export interface UpdateEcommerceCustomerResponse {

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
		 */
		status_code: number;
	}
	export interface UpdateEcommerceCustomerResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEcommerceCustomerResponseFormGroup() {
		return new FormGroup<UpdateEcommerceCustomerResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEcommerceOrderResponse {

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
		 */
		status_code: number;
	}
	export interface UpdateEcommerceOrderResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEcommerceOrderResponseFormGroup() {
		return new FormGroup<UpdateEcommerceOrderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateProductResponse {

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
		 */
		status_code: number;
	}
	export interface UpdateProductResponseFormProperties {

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
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateProductResponseFormGroup() {
		return new FormGroup<UpdateProductResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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

	export enum WebsiteType { primary = 0, secondary = 1, work = 2, personal = 3, other = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Customers
		 * List Customers
		 * Get ecommerce/customers
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {EcommerceCustomersFilter} filter Apply filters
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetEcommerceCustomersResponse} Customers
		 */
		CustomersAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: EcommerceCustomersFilter | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetEcommerceCustomersResponse> {
			return this.http.get<GetEcommerceCustomersResponse>(this.baseUri + 'ecommerce/customers?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Get Customer
		 * Get Customer
		 * Get ecommerce/customers/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetEcommerceCustomerResponse} Customers
		 */
		CustomersOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetEcommerceCustomerResponse> {
			return this.http.get<GetEcommerceCustomerResponse>(this.baseUri + 'ecommerce/customers/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * List Orders
		 * List Orders
		 * Get ecommerce/orders
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {EcommerceOrdersFilter} filter Apply filters
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetEcommerceOrdersResponse} Orders
		 */
		OrdersAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: EcommerceOrdersFilter | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetEcommerceOrdersResponse> {
			return this.http.get<GetEcommerceOrdersResponse>(this.baseUri + 'ecommerce/orders?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Get Order
		 * Get Order
		 * Get ecommerce/orders/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetEcommerceOrderResponse} Orders
		 */
		OrdersOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetEcommerceOrderResponse> {
			return this.http.get<GetEcommerceOrderResponse>(this.baseUri + 'ecommerce/orders/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * List Products
		 * List Products
		 * Get ecommerce/products
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetProductsResponse} Products
		 */
		ProductsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetProductsResponse> {
			return this.http.get<GetProductsResponse>(this.baseUri + 'ecommerce/products?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Get Product
		 * Get Product
		 * Get ecommerce/products/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetProductResponse} Products
		 */
		ProductsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetProductResponse> {
			return this.http.get<GetProductResponse>(this.baseUri + 'ecommerce/products/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Get Store
		 * Get Store
		 * Get ecommerce/store
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetStoreResponse} Stores
		 */
		StoresOne(raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetStoreResponse> {
			return this.http.get<GetStoreResponse>(this.baseUri + 'ecommerce/store?raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}
	}

}

