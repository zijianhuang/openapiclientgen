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

	export enum AddressType { primary = 'primary', secondary = 'secondary', home = 'home', office = 'office', shipping = 'shipping', billing = 'billing', other = 'other' }

	export interface BadRequestResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
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

		/**
		 * HTTP status code
		 * Type: double
		 */
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

	export interface CreateItemResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateItemResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateItemResponseFormGroup() {
		return new FormGroup<CreateItemResponseFormProperties>({
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

	export interface CreateLocationResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateLocationResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateLocationResponseFormGroup() {
		return new FormGroup<CreateLocationResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMerchantResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateMerchantResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateMerchantResponseFormGroup() {
		return new FormGroup<CreateMerchantResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateModifierGroupResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateModifierGroupResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateModifierGroupResponseFormGroup() {
		return new FormGroup<CreateModifierGroupResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateModifierResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateModifierResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateModifierResponseFormGroup() {
		return new FormGroup<CreateModifierResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateOrderResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateOrderResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateOrderResponseFormGroup() {
		return new FormGroup<CreateOrderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateOrderTypeResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateOrderTypeResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateOrderTypeResponseFormGroup() {
		return new FormGroup<CreateOrderTypeResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePosPaymentResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreatePosPaymentResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreatePosPaymentResponseFormGroup() {
		return new FormGroup<CreatePosPaymentResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTenderResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateTenderResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateTenderResponseFormGroup() {
		return new FormGroup<CreateTenderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
	export enum Currency { UNKNOWN_CURRENCY = 'UNKNOWN_CURRENCY', AED = 'AED', AFN = 'AFN', ALL = 'ALL', AMD = 'AMD', ANG = 'ANG', AOA = 'AOA', ARS = 'ARS', AUD = 'AUD', AWG = 'AWG', AZN = 'AZN', BAM = 'BAM', BBD = 'BBD', BDT = 'BDT', BGN = 'BGN', BHD = 'BHD', BIF = 'BIF', BMD = 'BMD', BND = 'BND', BOB = 'BOB', BOV = 'BOV', BRL = 'BRL', BSD = 'BSD', BTN = 'BTN', BWP = 'BWP', BYR = 'BYR', BZD = 'BZD', CAD = 'CAD', CDF = 'CDF', CHE = 'CHE', CHF = 'CHF', CHW = 'CHW', CLF = 'CLF', CLP = 'CLP', CNY = 'CNY', COP = 'COP', COU = 'COU', CRC = 'CRC', CUC = 'CUC', CUP = 'CUP', CVE = 'CVE', CZK = 'CZK', DJF = 'DJF', DKK = 'DKK', DOP = 'DOP', DZD = 'DZD', EGP = 'EGP', ERN = 'ERN', ETB = 'ETB', EUR = 'EUR', FJD = 'FJD', FKP = 'FKP', GBP = 'GBP', GEL = 'GEL', GHS = 'GHS', GIP = 'GIP', GMD = 'GMD', GNF = 'GNF', GTQ = 'GTQ', GYD = 'GYD', HKD = 'HKD', HNL = 'HNL', HRK = 'HRK', HTG = 'HTG', HUF = 'HUF', IDR = 'IDR', ILS = 'ILS', INR = 'INR', IQD = 'IQD', IRR = 'IRR', ISK = 'ISK', JMD = 'JMD', JOD = 'JOD', JPY = 'JPY', KES = 'KES', KGS = 'KGS', KHR = 'KHR', KMF = 'KMF', KPW = 'KPW', KRW = 'KRW', KWD = 'KWD', KYD = 'KYD', KZT = 'KZT', LAK = 'LAK', LBP = 'LBP', LKR = 'LKR', LRD = 'LRD', LSL = 'LSL', LTL = 'LTL', LVL = 'LVL', LYD = 'LYD', MAD = 'MAD', MDL = 'MDL', MGA = 'MGA', MKD = 'MKD', MMK = 'MMK', MNT = 'MNT', MOP = 'MOP', MRO = 'MRO', MUR = 'MUR', MVR = 'MVR', MWK = 'MWK', MXN = 'MXN', MXV = 'MXV', MYR = 'MYR', MZN = 'MZN', NAD = 'NAD', NGN = 'NGN', NIO = 'NIO', NOK = 'NOK', NPR = 'NPR', NZD = 'NZD', OMR = 'OMR', PAB = 'PAB', PEN = 'PEN', PGK = 'PGK', PHP = 'PHP', PKR = 'PKR', PLN = 'PLN', PYG = 'PYG', QAR = 'QAR', RON = 'RON', RSD = 'RSD', RUB = 'RUB', RWF = 'RWF', SAR = 'SAR', SBD = 'SBD', SCR = 'SCR', SDG = 'SDG', SEK = 'SEK', SGD = 'SGD', SHP = 'SHP', SLL = 'SLL', SOS = 'SOS', SRD = 'SRD', SSP = 'SSP', STD = 'STD', SVC = 'SVC', SYP = 'SYP', SZL = 'SZL', THB = 'THB', TJS = 'TJS', TMT = 'TMT', TND = 'TND', TOP = 'TOP', TRC = 'TRC', TRY = 'TRY', TTD = 'TTD', TWD = 'TWD', TZS = 'TZS', UAH = 'UAH', UGX = 'UGX', USD = 'USD', USN = 'USN', USS = 'USS', UYI = 'UYI', UYU = 'UYU', UZS = 'UZS', VEF = 'VEF', VND = 'VND', VUV = 'VUV', WST = 'WST', XAF = 'XAF', XAG = 'XAG', XAU = 'XAU', XBA = 'XBA', XBB = 'XBB', XBC = 'XBC', XBD = 'XBD', XCD = 'XCD', XDR = 'XDR', XOF = 'XOF', XPD = 'XPD', XPF = 'XPF', XPT = 'XPT', XTS = 'XTS', XXX = 'XXX', YER = 'YER', ZAR = 'ZAR', ZMK = 'ZMK', ZMW = 'ZMW', BTC = 'BTC', ETH = 'ETH' }

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

	export interface DeleteItemResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteItemResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteItemResponseFormGroup() {
		return new FormGroup<DeleteItemResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLocationResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteLocationResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteLocationResponseFormGroup() {
		return new FormGroup<DeleteLocationResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMerchantResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteMerchantResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteMerchantResponseFormGroup() {
		return new FormGroup<DeleteMerchantResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteModifierGroupResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteModifierGroupResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteModifierGroupResponseFormGroup() {
		return new FormGroup<DeleteModifierGroupResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteModifierResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteModifierResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteModifierResponseFormGroup() {
		return new FormGroup<DeleteModifierResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteOrderResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteOrderResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteOrderResponseFormGroup() {
		return new FormGroup<DeleteOrderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteOrderTypeResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteOrderTypeResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteOrderTypeResponseFormGroup() {
		return new FormGroup<DeleteOrderTypeResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePosPaymentResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeletePosPaymentResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeletePosPaymentResponseFormGroup() {
		return new FormGroup<DeletePosPaymentResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTenderResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteTenderResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteTenderResponseFormGroup() {
		return new FormGroup<DeleteTenderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

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

	export enum EmailType { primary = 'primary', secondary = 'secondary', work = 'work', personal = 'personal', billing = 'billing', other = 'other' }

	export interface GetItemResponse {

		/** Required */
		data: Item;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetItemResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetItemResponseFormGroup() {
		return new FormGroup<GetItemResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item {
		abbreviation?: string | null;

		/** A list of locations where the object is not present, even if present_at_all_locations is true. This can include locations that are deactivated. */
		absent_at_location_ids?: Array<string>;
		available?: boolean | null;
		available_for_pickup?: boolean | null;
		available_online?: boolean | null;
		ItemCategories?: Array<ItemCategories>;

		/** Product code, e.g. UPC or EAN */
		code?: string | null;

		/** Type: double */
		cost?: number | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Flag to indicate if the object is deleted. */
		deleted?: boolean | null;
		description?: string | null;
		hidden?: boolean | null;
		id?: string | null;

		/**
		 * A value you specify that uniquely identifies this request among requests you have sent.
		 * Max length: 45
		 */
		idempotency_key?: string | null;

		/** True if this item should be counted as revenue. For example, gift cards and donations would not be counted as revenue. */
		is_revenue?: boolean | null;
		ItemModifier_groups?: Array<ItemModifier_groups>;

		/** Required */
		name: string;

		/** List of options pertaining to this item's attribute variation */
		ItemOptions?: Array<ItemOptions>;
		present_at_all_locations?: boolean | null;

		/** Type: double */
		price_amount?: number | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		price_currency?: Currency | null;
		pricing_type?: ItemPricing_type | null;
		product_type?: ItemProduct_type | null;

		/** SKU of the item */
		sku?: string | null;

		/** A list of Tax IDs for the product. */
		tax_ids?: Array<string>;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
		use_default_tax_rates?: boolean | null;
		ItemVariations?: Array<ItemVariations>;

		/** The user who last updated the object. */
		version?: string | null;
	}
	export interface ItemFormProperties {
		abbreviation: FormControl<string | null | undefined>,
		available: FormControl<boolean | null | undefined>,
		available_for_pickup: FormControl<boolean | null | undefined>,
		available_online: FormControl<boolean | null | undefined>,

		/** Product code, e.g. UPC or EAN */
		code: FormControl<string | null | undefined>,

		/** Type: double */
		cost: FormControl<number | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Flag to indicate if the object is deleted. */
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,

		/**
		 * A value you specify that uniquely identifies this request among requests you have sent.
		 * Max length: 45
		 */
		idempotency_key: FormControl<string | null | undefined>,

		/** True if this item should be counted as revenue. For example, gift cards and donations would not be counted as revenue. */
		is_revenue: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		present_at_all_locations: FormControl<boolean | null | undefined>,

		/** Type: double */
		price_amount: FormControl<number | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		price_currency: FormControl<Currency | null | undefined>,
		pricing_type: FormControl<ItemPricing_type | null | undefined>,
		product_type: FormControl<ItemProduct_type | null | undefined>,

		/** SKU of the item */
		sku: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
		use_default_tax_rates: FormControl<boolean | null | undefined>,

		/** The user who last updated the object. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			available: new FormControl<boolean | null | undefined>(undefined),
			available_for_pickup: new FormControl<boolean | null | undefined>(undefined),
			available_online: new FormControl<boolean | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			cost: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			idempotency_key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(45)]),
			is_revenue: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			present_at_all_locations: new FormControl<boolean | null | undefined>(undefined),
			price_amount: new FormControl<number | null | undefined>(undefined),
			price_currency: new FormControl<Currency | null | undefined>(undefined),
			pricing_type: new FormControl<ItemPricing_type | null | undefined>(undefined),
			product_type: new FormControl<ItemProduct_type | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			use_default_tax_rates: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemCategories {

		/** A unique identifier for an object. */
		id?: string | null;
		image_ids?: Array<string>;
		name?: string | null;
	}
	export interface ItemCategoriesFormProperties {

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateItemCategoriesFormGroup() {
		return new FormGroup<ItemCategoriesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemModifier_groups {

		/** A unique identifier for an object. */
		id?: string | null;
	}
	export interface ItemModifier_groupsFormProperties {

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateItemModifier_groupsFormGroup() {
		return new FormGroup<ItemModifier_groupsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemOptions {
		attribute_id?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface ItemOptionsFormProperties {
		attribute_id: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateItemOptionsFormGroup() {
		return new FormGroup<ItemOptionsFormProperties>({
			attribute_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ItemPricing_type { fixed = 'fixed', variable = 'variable', per_unit = 'per_unit', other = 'other' }

	export enum ItemProduct_type { regular = 'regular', other = 'other' }

	export interface ItemVariations {

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** A unique identifier for an object. */
		item_id?: string | null;
		name?: string | null;
		present_at_all_locations?: boolean | null;

		/** Type: double */
		price_amount?: number | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		price_currency?: Currency | null;
		pricing_type?: ItemVariationsPricing_type | null;

		/** Type: double */
		sequence?: number | null;
		sku?: string | null;
		stockable?: boolean | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		version?: string | null;
	}
	export interface ItemVariationsFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		item_id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		present_at_all_locations: FormControl<boolean | null | undefined>,

		/** Type: double */
		price_amount: FormControl<number | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		price_currency: FormControl<Currency | null | undefined>,
		pricing_type: FormControl<ItemVariationsPricing_type | null | undefined>,

		/** Type: double */
		sequence: FormControl<number | null | undefined>,
		sku: FormControl<string | null | undefined>,
		stockable: FormControl<boolean | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateItemVariationsFormGroup() {
		return new FormGroup<ItemVariationsFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			item_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			present_at_all_locations: new FormControl<boolean | null | undefined>(undefined),
			price_amount: new FormControl<number | null | undefined>(undefined),
			price_currency: new FormControl<Currency | null | undefined>(undefined),
			pricing_type: new FormControl<ItemVariationsPricing_type | null | undefined>(undefined),
			sequence: new FormControl<number | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			stockable: new FormControl<boolean | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ItemVariationsPricing_type { fixed = 'fixed', variable = 'variable', other = 'other' }

	export interface GetItemsResponse {

		/** Required */
		data: Array<Item>;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetItemsResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetItemsResponseFormGroup() {
		return new FormGroup<GetItemsResponseFormProperties>({
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

		/**
		 * Number of items returned in the data property of the response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		items_on_page?: number | null;
	}

	/** Response metadata */
	export interface MetaFormProperties {

		/**
		 * Number of items returned in the data property of the response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

	export interface GetLocationResponse {

		/** Required */
		data: Location;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetLocationResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetLocationResponseFormGroup() {
		return new FormGroup<GetLocationResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Location {
		address?: Address;

		/** The business name of the location */
		business_name?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** A unique identifier for an object. */
		id?: string | null;
		merchant_id?: string | null;

		/** The name of the location */
		name?: string | null;

		/** Status of this location. */
		status?: LocationStatus | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface LocationFormProperties {

		/** The business name of the location */
		business_name: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,
		merchant_id: FormControl<string | null | undefined>,

		/** The name of the location */
		name: FormControl<string | null | undefined>,

		/** Status of this location. */
		status: FormControl<LocationStatus | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			business_name: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			merchant_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<LocationStatus | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LocationStatus { active = 'active', inactive = 'inactive', other = 'other' }

	export interface GetLocationsResponse {

		/** Required */
		data: Array<Location>;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetLocationsResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetLocationsResponseFormGroup() {
		return new FormGroup<GetLocationsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMerchantResponse {

		/** Required */
		data: Merchant;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetMerchantResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetMerchantResponseFormGroup() {
		return new FormGroup<GetMerchantResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Merchant {
		address?: Address;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** A unique identifier for an object. */
		id?: string | null;

		/** language code according to ISO 639-1. For the United States - EN */
		language?: string | null;

		/** The main location ID of the merchant */
		main_location_id?: string | null;

		/** The name of the merchant */
		name?: string | null;
		owner_id?: string | null;
		service_charges?: Array<ServiceCharge>;

		/** Status of this merchant. */
		status?: LocationStatus | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface MerchantFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** language code according to ISO 639-1. For the United States - EN */
		language: FormControl<string | null | undefined>,

		/** The main location ID of the merchant */
		main_location_id: FormControl<string | null | undefined>,

		/** The name of the merchant */
		name: FormControl<string | null | undefined>,
		owner_id: FormControl<string | null | undefined>,

		/** Status of this merchant. */
		status: FormControl<LocationStatus | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateMerchantFormGroup() {
		return new FormGroup<MerchantFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			main_location_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner_id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<LocationStatus | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceCharge {
		active?: boolean | null;

		/** Type: double */
		amount?: number | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** Service charge name */
		name?: string | null;

		/**
		 * Service charge percentage. Use this field to calculate the amount of the service charge. Pass a percentage and amount at the same time.
		 * Type: double
		 */
		percentage?: number | null;

		/** The type of the service charge. */
		type?: ServiceChargeType | null;
	}
	export interface ServiceChargeFormProperties {
		active: FormControl<boolean | null | undefined>,

		/** Type: double */
		amount: FormControl<number | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** Service charge name */
		name: FormControl<string | null | undefined>,

		/**
		 * Service charge percentage. Use this field to calculate the amount of the service charge. Pass a percentage and amount at the same time.
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,

		/** The type of the service charge. */
		type: FormControl<ServiceChargeType | null | undefined>,
	}
	export function CreateServiceChargeFormGroup() {
		return new FormGroup<ServiceChargeFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<ServiceChargeType | null | undefined>(undefined),
		});

	}

	export enum ServiceChargeType { auto_gratuity = 'auto_gratuity', custom = 'custom' }

	export interface GetMerchantsResponse {

		/** Required */
		data: Array<Merchant>;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetMerchantsResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetMerchantsResponseFormGroup() {
		return new FormGroup<GetMerchantsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetModifierGroupResponse {

		/** Required */
		data: ModifierGroup;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetModifierGroupResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetModifierGroupResponseFormGroup() {
		return new FormGroup<GetModifierGroupResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifierGroup {
		alternate_name?: string | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Flag to indicate if the object is deleted. */
		deleted?: boolean | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maximum_allowed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimum_required?: number | null;
		ModifierGroupModifiers?: Array<ModifierGroupModifiers>;
		name?: string | null;
		present_at_all_locations?: boolean | null;

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version?: string | null;
		selection_type?: ModifierGroupSelection_type | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface ModifierGroupFormProperties {
		alternate_name: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Flag to indicate if the object is deleted. */
		deleted: FormControl<boolean | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maximum_allowed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimum_required: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		present_at_all_locations: FormControl<boolean | null | undefined>,

		/** A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. */
		row_version: FormControl<string | null | undefined>,
		selection_type: FormControl<ModifierGroupSelection_type | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateModifierGroupFormGroup() {
		return new FormGroup<ModifierGroupFormProperties>({
			alternate_name: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			maximum_allowed: new FormControl<number | null | undefined>(undefined),
			minimum_required: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			present_at_all_locations: new FormControl<boolean | null | undefined>(undefined),
			row_version: new FormControl<string | null | undefined>(undefined),
			selection_type: new FormControl<ModifierGroupSelection_type | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifierGroupModifiers {
		alternate_name?: string | null;
		available?: boolean | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;
		id?: string | null;
		name?: string | null;

		/** Type: double */
		price_amount?: number | null;
	}
	export interface ModifierGroupModifiersFormProperties {
		alternate_name: FormControl<string | null | undefined>,
		available: FormControl<boolean | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: double */
		price_amount: FormControl<number | null | undefined>,
	}
	export function CreateModifierGroupModifiersFormGroup() {
		return new FormGroup<ModifierGroupModifiersFormProperties>({
			alternate_name: new FormControl<string | null | undefined>(undefined),
			available: new FormControl<boolean | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ModifierGroupSelection_type { single = 'single', multiple = 'multiple' }

	export interface GetModifierGroupsResponse {

		/** Required */
		data: Array<ModifierGroup>;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetModifierGroupsResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetModifierGroupsResponseFormGroup() {
		return new FormGroup<GetModifierGroupsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetModifierResponse {

		/** Required */
		data: Modifier;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetModifierResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetModifierResponseFormGroup() {
		return new FormGroup<GetModifierResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Modifier {
		alternate_name?: string | null;
		available?: boolean | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** A unique identifier for an object. */
		id?: string | null;

		/**
		 * A value you specify that uniquely identifies this request among requests you have sent.
		 * Max length: 45
		 */
		idempotency_key?: string | null;

		/** Required */
		modifier_group_id: string;

		/** Required */
		name: string;

		/** Type: double */
		price_amount?: number | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface ModifierFormProperties {
		alternate_name: FormControl<string | null | undefined>,
		available: FormControl<boolean | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * A value you specify that uniquely identifies this request among requests you have sent.
		 * Max length: 45
		 */
		idempotency_key: FormControl<string | null | undefined>,

		/** Required */
		modifier_group_id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Type: double */
		price_amount: FormControl<number | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateModifierFormGroup() {
		return new FormGroup<ModifierFormProperties>({
			alternate_name: new FormControl<string | null | undefined>(undefined),
			available: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			idempotency_key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(45)]),
			modifier_group_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price_amount: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetModifiersResponse {

		/** Required */
		data: Array<Modifier>;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetModifiersResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetModifiersResponseFormGroup() {
		return new FormGroup<GetModifiersResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetOrderResponse {

		/** Required */
		data: Order;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetOrderResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetOrderResponseFormGroup() {
		return new FormGroup<GetOrderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Order {

		/** Type: DateOnly */
		closed_date?: Date | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;
		customer_id?: string | null;
		OrderCustomers?: Array<OrderCustomers>;
		OrderDiscounts?: Array<OrderDiscounts>;
		employee_id?: string | null;
		OrderFulfillments?: Array<OrderFulfillments>;

		/** A unique identifier for an object. */
		id?: string | null;

		/**
		 * A value you specify that uniquely identifies this request among requests you have sent.
		 * Max length: 45
		 */
		idempotency_key?: string | null;
		OrderLine_items?: Array<OrderLine_items>;

		/** Required */
		location_id: string;

		/** Required */
		merchant_id: string;

		/** A note with information about this order, may be printed on the order receipt and displayed in apps */
		note?: string | null;

		/** Type: DateOnly */
		order_date?: Date | null;
		order_number?: string | null;
		order_type_id?: string | null;

		/** Is this order paid or not? */
		payment_status?: OrderPayment_status | null;
		OrderPayments?: Array<OrderPayments>;

		/** An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system. */
		reference_id?: string | null;
		refunded?: boolean | null;
		OrderRefunds?: Array<OrderRefunds>;
		seat?: string | null;

		/** Optional service charges or gratuity tip applied to the order. */
		service_charges?: Array<ServiceCharge>;

		/** Source of order. Indicates the way that the order was placed. */
		source?: OrderSource | null;

		/** Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]() */
		status?: OrderStatus | null;
		table?: string | null;
		OrderTaxes?: Array<OrderTaxes>;
		OrderTenders?: Array<OrderTenders>;
		title?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_amount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_discount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_refund?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_service_charge?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_tax?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_tip?: number | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
		version?: string | null;
		voided?: boolean | null;
		voided_at?: Date | null;
	}
	export interface OrderFormProperties {

		/** Type: DateOnly */
		closed_date: FormControl<Date | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,
		customer_id: FormControl<string | null | undefined>,
		employee_id: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * A value you specify that uniquely identifies this request among requests you have sent.
		 * Max length: 45
		 */
		idempotency_key: FormControl<string | null | undefined>,

		/** Required */
		location_id: FormControl<string | null | undefined>,

		/** Required */
		merchant_id: FormControl<string | null | undefined>,

		/** A note with information about this order, may be printed on the order receipt and displayed in apps */
		note: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		order_date: FormControl<Date | null | undefined>,
		order_number: FormControl<string | null | undefined>,
		order_type_id: FormControl<string | null | undefined>,

		/** Is this order paid or not? */
		payment_status: FormControl<OrderPayment_status | null | undefined>,

		/** An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system. */
		reference_id: FormControl<string | null | undefined>,
		refunded: FormControl<boolean | null | undefined>,
		seat: FormControl<string | null | undefined>,

		/** Source of order. Indicates the way that the order was placed. */
		source: FormControl<OrderSource | null | undefined>,

		/** Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]() */
		status: FormControl<OrderStatus | null | undefined>,
		table: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_amount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_discount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_refund: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_service_charge: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_tax: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_tip: FormControl<number | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		voided: FormControl<boolean | null | undefined>,
		voided_at: FormControl<Date | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			closed_date: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			customer_id: new FormControl<string | null | undefined>(undefined),
			employee_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			idempotency_key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(45)]),
			location_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			merchant_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined),
			order_date: new FormControl<Date | null | undefined>(undefined),
			order_number: new FormControl<string | null | undefined>(undefined),
			order_type_id: new FormControl<string | null | undefined>(undefined),
			payment_status: new FormControl<OrderPayment_status | null | undefined>(undefined),
			reference_id: new FormControl<string | null | undefined>(undefined),
			refunded: new FormControl<boolean | null | undefined>(undefined),
			seat: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<OrderSource | null | undefined>(undefined),
			status: new FormControl<OrderStatus | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
			total_discount: new FormControl<number | null | undefined>(undefined),
			total_refund: new FormControl<number | null | undefined>(undefined),
			total_service_charge: new FormControl<number | null | undefined>(undefined),
			total_tax: new FormControl<number | null | undefined>(undefined),
			total_tip: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			voided: new FormControl<boolean | null | undefined>(undefined),
			voided_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OrderCustomers {
		emails?: Array<Email>;
		first_name?: string | null;
		id?: string | null;
		last_name?: string | null;
		middle_name?: string | null;
		phone_numbers?: Array<PhoneNumber>;
	}
	export interface OrderCustomersFormProperties {
		first_name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		middle_name: FormControl<string | null | undefined>,
	}
	export function CreateOrderCustomersFormGroup() {
		return new FormGroup<OrderCustomersFormProperties>({
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
		});

	}

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

	export enum PhoneNumberType { primary = 'primary', secondary = 'secondary', home = 'home', work = 'work', office = 'office', mobile = 'mobile', assistant = 'assistant', fax = 'fax', 'direct-dial-in' = 'direct-dial-in', personal = 'personal', other = 'other' }

	export interface OrderDiscounts {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount?: number | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;

		/** A unique identifier for an object. */
		id?: string | null;
		name?: string | null;

		/** A unique identifier for an object. */
		product_id?: string | null;
		scope?: OrderDiscountsScope | null;

		/** Required */
		type: OrderDiscountsType;
	}
	export interface OrderDiscountsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount: FormControl<number | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		product_id: FormControl<string | null | undefined>,
		scope: FormControl<OrderDiscountsScope | null | undefined>,

		/** Required */
		type: FormControl<OrderDiscountsType | null | undefined>,
	}
	export function CreateOrderDiscountsFormGroup() {
		return new FormGroup<OrderDiscountsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			product_id: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<OrderDiscountsScope | null | undefined>(undefined),
			type: new FormControl<OrderDiscountsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OrderDiscountsScope { order = 'order', line_item = 'line_item' }

	export enum OrderDiscountsType { percentage = 'percentage', flat_fee = 'flat_fee' }

	export interface OrderFulfillments {
		id?: string | null;
		pickup_details?: OrderFulfillmentsPickup_details;
		shipment_details?: string | null;

		/** The state of the fulfillment. */
		status?: OrderFulfillmentsStatus | null;
		type?: OrderFulfillmentsType | null;
	}
	export interface OrderFulfillmentsFormProperties {
		id: FormControl<string | null | undefined>,
		shipment_details: FormControl<string | null | undefined>,

		/** The state of the fulfillment. */
		status: FormControl<OrderFulfillmentsStatus | null | undefined>,
		type: FormControl<OrderFulfillmentsType | null | undefined>,
	}
	export function CreateOrderFulfillmentsFormGroup() {
		return new FormGroup<OrderFulfillmentsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			shipment_details: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<OrderFulfillmentsStatus | null | undefined>(undefined),
			type: new FormControl<OrderFulfillmentsType | null | undefined>(undefined),
		});

	}

	export interface OrderFulfillmentsPickup_details {
		accepted_at?: Date | null;

		/** The duration of time after which an open and accepted pickup fulfillment is automatically moved to the COMPLETED state. The duration must be in RFC 3339 format (for example, 'P1W3D'). */
		auto_complete_duration?: string | null;

		/** A description of why the pickup was canceled. */
		cancel_reason?: string | null;

		/**
		 * Indicating when the fulfillment was canceled. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		canceled_at?: Date | null;

		/** Specific details for curbside pickup. */
		curbside_pickup_details?: OrderFulfillmentsPickup_detailsCurbside_pickup_details;

		/**
		 * Indicating when the fulfillment expired. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		expired_at?: Date | null;

		/**
		 * Indicating when this fulfillment expires if it is not accepted. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z"). The expiration time can only be set up to 7 days in the future.
		 * If `expires_at` is not set, this pickup fulfillment is automatically accepted when
		 * placed.
		 */
		expires_at?: Date | null;

		/** If set to `true`, indicates that this pickup order is for curbside pickup, not in-store pickup. */
		is_curbside_pickup?: boolean | null;

		/**
		 * A note meant to provide additional instructions about the pickup
		 * fulfillment displayed in the Square Point of Sale application and set by the API.
		 */
		note?: string | null;

		/**
		 * Indicating when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		picked_up_at?: Date | null;

		/**
		 * The timestamp that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g.,
		 * "2016-09-04T23:59:33.123Z".
		 * For fulfillments with the schedule type `ASAP`, this is automatically set
		 * to the current time plus the expected duration to prepare the fulfillment.
		 */
		pickup_at?: Date | null;

		/**
		 * The window of time in which the order should be picked up after the `pickup_at` timestamp.
		 * Must be in RFC 3339 duration format, e.g., "P1W3D". Can be used as an
		 * informational guideline for merchants.
		 */
		pickup_window_duration?: string | null;

		/**
		 * Indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		placed_at?: Date | null;

		/**
		 * The duration of time it takes to prepare this fulfillment.
		 * The duration must be in RFC 3339 format (for example, "P1W3D").
		 */
		prep_time_duration?: string | null;

		/**
		 * Indicating when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		ready_at?: Date | null;
		recipient?: OrderFulfillmentsPickup_detailsRecipient;

		/**
		 * Indicating when the fulfillment was rejected. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		rejected_at?: Date | null;

		/** The schedule type of the pickup fulfillment. */
		schedule_type?: OrderFulfillmentsPickup_detailsSchedule_type | null;
	}
	export interface OrderFulfillmentsPickup_detailsFormProperties {
		accepted_at: FormControl<Date | null | undefined>,

		/** The duration of time after which an open and accepted pickup fulfillment is automatically moved to the COMPLETED state. The duration must be in RFC 3339 format (for example, 'P1W3D'). */
		auto_complete_duration: FormControl<string | null | undefined>,

		/** A description of why the pickup was canceled. */
		cancel_reason: FormControl<string | null | undefined>,

		/**
		 * Indicating when the fulfillment was canceled. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		canceled_at: FormControl<Date | null | undefined>,

		/**
		 * Indicating when the fulfillment expired. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		expired_at: FormControl<Date | null | undefined>,

		/**
		 * Indicating when this fulfillment expires if it is not accepted. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z"). The expiration time can only be set up to 7 days in the future.
		 * If `expires_at` is not set, this pickup fulfillment is automatically accepted when
		 * placed.
		 */
		expires_at: FormControl<Date | null | undefined>,

		/** If set to `true`, indicates that this pickup order is for curbside pickup, not in-store pickup. */
		is_curbside_pickup: FormControl<boolean | null | undefined>,

		/**
		 * A note meant to provide additional instructions about the pickup
		 * fulfillment displayed in the Square Point of Sale application and set by the API.
		 */
		note: FormControl<string | null | undefined>,

		/**
		 * Indicating when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		picked_up_at: FormControl<Date | null | undefined>,

		/**
		 * The timestamp that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g.,
		 * "2016-09-04T23:59:33.123Z".
		 * For fulfillments with the schedule type `ASAP`, this is automatically set
		 * to the current time plus the expected duration to prepare the fulfillment.
		 */
		pickup_at: FormControl<Date | null | undefined>,

		/**
		 * The window of time in which the order should be picked up after the `pickup_at` timestamp.
		 * Must be in RFC 3339 duration format, e.g., "P1W3D". Can be used as an
		 * informational guideline for merchants.
		 */
		pickup_window_duration: FormControl<string | null | undefined>,

		/**
		 * Indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		placed_at: FormControl<Date | null | undefined>,

		/**
		 * The duration of time it takes to prepare this fulfillment.
		 * The duration must be in RFC 3339 format (for example, "P1W3D").
		 */
		prep_time_duration: FormControl<string | null | undefined>,

		/**
		 * Indicating when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		ready_at: FormControl<Date | null | undefined>,

		/**
		 * Indicating when the fulfillment was rejected. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		rejected_at: FormControl<Date | null | undefined>,

		/** The schedule type of the pickup fulfillment. */
		schedule_type: FormControl<OrderFulfillmentsPickup_detailsSchedule_type | null | undefined>,
	}
	export function CreateOrderFulfillmentsPickup_detailsFormGroup() {
		return new FormGroup<OrderFulfillmentsPickup_detailsFormProperties>({
			accepted_at: new FormControl<Date | null | undefined>(undefined),
			auto_complete_duration: new FormControl<string | null | undefined>(undefined),
			cancel_reason: new FormControl<string | null | undefined>(undefined),
			canceled_at: new FormControl<Date | null | undefined>(undefined),
			expired_at: new FormControl<Date | null | undefined>(undefined),
			expires_at: new FormControl<Date | null | undefined>(undefined),
			is_curbside_pickup: new FormControl<boolean | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			picked_up_at: new FormControl<Date | null | undefined>(undefined),
			pickup_at: new FormControl<Date | null | undefined>(undefined),
			pickup_window_duration: new FormControl<string | null | undefined>(undefined),
			placed_at: new FormControl<Date | null | undefined>(undefined),
			prep_time_duration: new FormControl<string | null | undefined>(undefined),
			ready_at: new FormControl<Date | null | undefined>(undefined),
			rejected_at: new FormControl<Date | null | undefined>(undefined),
			schedule_type: new FormControl<OrderFulfillmentsPickup_detailsSchedule_type | null | undefined>(undefined),
		});

	}

	export interface OrderFulfillmentsPickup_detailsCurbside_pickup_details {

		/**
		 * Indicating when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		buyer_arrived_at?: Date | null;

		/**
		 * Specific details for curbside pickup, such as parking number and vehicle model.
		 * Max length: 250
		 */
		curbside_details?: string | null;
	}
	export interface OrderFulfillmentsPickup_detailsCurbside_pickup_detailsFormProperties {

		/**
		 * Indicating when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format
		 * (for example, "2016-09-04T23:59:33.123Z").
		 */
		buyer_arrived_at: FormControl<Date | null | undefined>,

		/**
		 * Specific details for curbside pickup, such as parking number and vehicle model.
		 * Max length: 250
		 */
		curbside_details: FormControl<string | null | undefined>,
	}
	export function CreateOrderFulfillmentsPickup_detailsCurbside_pickup_detailsFormGroup() {
		return new FormGroup<OrderFulfillmentsPickup_detailsCurbside_pickup_detailsFormProperties>({
			buyer_arrived_at: new FormControl<Date | null | undefined>(undefined),
			curbside_details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(250)]),
		});

	}

	export interface OrderFulfillmentsPickup_detailsRecipient {
		address?: Address;
		customer_id?: string | null;
		display_name?: string | null;
		email?: Email;
		phone_number?: PhoneNumber;
	}
	export interface OrderFulfillmentsPickup_detailsRecipientFormProperties {
		customer_id: FormControl<string | null | undefined>,
		display_name: FormControl<string | null | undefined>,
	}
	export function CreateOrderFulfillmentsPickup_detailsRecipientFormGroup() {
		return new FormGroup<OrderFulfillmentsPickup_detailsRecipientFormProperties>({
			customer_id: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrderFulfillmentsPickup_detailsSchedule_type { scheduled = 'scheduled' }

	export enum OrderFulfillmentsStatus { proposed = 'proposed', reserved = 'reserved', prepared = 'prepared', completed = 'completed', cancelled = 'cancelled', failed = 'failed', other = 'other' }

	export enum OrderFulfillmentsType { pickup = 'pickup', shipment = 'shipment' }

	export interface OrderLine_items {
		OrderLine_itemsApplied_discounts?: Array<OrderLine_itemsApplied_discounts>;
		OrderLine_itemsApplied_taxes?: Array<OrderLine_itemsApplied_taxes>;

		/** A unique identifier for an object. */
		id?: string | null;
		item?: any;

		/** Customizable options – toppings, add-ons, or special requests – create item modifiers. Modifiers that are applied to items will display on your customers’ digital receipts */
		OrderLine_itemsModifiers?: Array<OrderLine_itemsModifiers>;
		name?: string | null;

		/** Type: double */
		quantity?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_amount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_discount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_tax?: number | null;

		/** Type: double */
		unit_price?: number | null;
	}
	export interface OrderLine_itemsFormProperties {

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,
		item: FormControl<any | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: double */
		quantity: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_amount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_discount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_tax: FormControl<number | null | undefined>,

		/** Type: double */
		unit_price: FormControl<number | null | undefined>,
	}
	export function CreateOrderLine_itemsFormGroup() {
		return new FormGroup<OrderLine_itemsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			item: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
			total_discount: new FormControl<number | null | undefined>(undefined),
			total_tax: new FormControl<number | null | undefined>(undefined),
			unit_price: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrderLine_itemsApplied_discounts {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount?: number | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;
		discount_id?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;
	}
	export interface OrderLine_itemsApplied_discountsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount: FormControl<number | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,
		discount_id: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateOrderLine_itemsApplied_discountsFormGroup() {
		return new FormGroup<OrderLine_itemsApplied_discountsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			discount_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderLine_itemsApplied_taxes {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount?: number | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;

		/** A unique identifier for an object. */
		id?: string | null;
		tax_id?: string | null;
	}
	export interface OrderLine_itemsApplied_taxesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount: FormControl<number | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,
		tax_id: FormControl<string | null | undefined>,
	}
	export function CreateOrderLine_itemsApplied_taxesFormGroup() {
		return new FormGroup<OrderLine_itemsApplied_taxesFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			tax_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderLine_itemsModifiers {
		alternate_name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount?: number | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;
		id?: string | null;
		modifier_group_id?: string | null;
		name?: string | null;
	}
	export interface OrderLine_itemsModifiersFormProperties {
		alternate_name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount: FormControl<number | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,
		id: FormControl<string | null | undefined>,
		modifier_group_id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateOrderLine_itemsModifiersFormGroup() {
		return new FormGroup<OrderLine_itemsModifiersFormProperties>({
			alternate_name: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modifier_group_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrderPayment_status { open = 'open', paid = 'paid', refunded = 'refunded', credited = 'credited', partially_paid = 'partially_paid', partially_refunded = 'partially_refunded', unknown = 'unknown' }

	export interface OrderPayments {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount?: number | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;

		/** A unique identifier for an object. */
		id?: string | null;
	}
	export interface OrderPaymentsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount: FormControl<number | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateOrderPaymentsFormGroup() {
		return new FormGroup<OrderPaymentsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderRefunds {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount?: number | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** A unique identifier for an object. */
		location_id?: string | null;
		reason?: string | null;
		status?: OrderRefundsStatus | null;

		/** A unique identifier for an object. */
		tender_id?: string | null;

		/** A unique identifier for an object. */
		transaction_id?: string | null;
	}
	export interface OrderRefundsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount: FormControl<number | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		location_id: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		status: FormControl<OrderRefundsStatus | null | undefined>,

		/** A unique identifier for an object. */
		tender_id: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		transaction_id: FormControl<string | null | undefined>,
	}
	export function CreateOrderRefundsFormGroup() {
		return new FormGroup<OrderRefundsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location_id: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<OrderRefundsStatus | null | undefined>(undefined),
			tender_id: new FormControl<string | null | undefined>(undefined),
			transaction_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrderRefundsStatus { pending = 'pending', approved = 'approved', rejected = 'rejected', failed = 'failed' }

	export enum OrderSource { 'in-store' = 'in-store', online = 'online', opt = 'opt', api = 'api', kiosk = 'kiosk', 'caller-id' = 'caller-id', google = 'google', invoice = 'invoice' }

	export enum OrderStatus { open = 'open', draft = 'draft', delivered = 'delivered', delayed = 'delayed', voided = 'voided', completed = 'completed', hidden = 'hidden' }

	export interface OrderTaxes {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount?: number | null;

		/** Square-only: Determines whether the tax was automatically applied to the order based on the catalog configuration. For an example, see Automatically Apply Taxes to an Order. [https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes]() */
		auto_applied?: boolean | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;
		id?: string | null;

		/** The tax's name. */
		name?: string | null;

		/** Type: double */
		percentage?: number | null;
		scope?: OrderDiscountsScope | null;
		type?: OrderTaxesType | null;
	}
	export interface OrderTaxesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		amount: FormControl<number | null | undefined>,

		/** Square-only: Determines whether the tax was automatically applied to the order based on the catalog configuration. For an example, see Automatically Apply Taxes to an Order. [https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes]() */
		auto_applied: FormControl<boolean | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The tax's name. */
		name: FormControl<string | null | undefined>,

		/** Type: double */
		percentage: FormControl<number | null | undefined>,
		scope: FormControl<OrderDiscountsScope | null | undefined>,
		type: FormControl<OrderTaxesType | null | undefined>,
	}
	export function CreateOrderTaxesFormGroup() {
		return new FormGroup<OrderTaxesFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			auto_applied: new FormControl<boolean | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			scope: new FormControl<OrderDiscountsScope | null | undefined>(undefined),
			type: new FormControl<OrderTaxesType | null | undefined>(undefined),
		});

	}

	export enum OrderTaxesType { unknown = 'unknown', additive = 'additive', inclusive = 'inclusive' }

	export interface OrderTenders {

		/** Type: double */
		amount?: number | null;

		/**
		 * The amount (in cents) of cash tendered by the buyer. Only applicable when the tender type is cash.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		buyer_tendered_cash_amount?: number | null;

		/** A card's non-confidential details. */
		card?: PaymentCard;

		/** The entry method of the card. Only applicable when the tender type is card. */
		card_entry_method?: OrderTendersCard_entry_method | null;

		/** The status of the card. Only applicable when the tender type is card. */
		card_status?: OrderTendersCard_status | null;

		/**
		 * The amount (in cents) of cash returned to the buyer. Only applicable when the tender type is cash.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		change_back_cash_amount?: number | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** A unique identifier for an object. */
		location_id?: string | null;
		name?: string | null;
		note?: string | null;

		/** A unique identifier for an object. */
		payment_id?: string | null;

		/** Type: double */
		percentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_amount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_discount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_processing_fee?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_refund?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_service_charge?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_tax?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_tip?: number | null;

		/** A unique identifier for an object. */
		transaction_id?: string | null;
		type?: OrderTendersType | null;
	}
	export interface OrderTendersFormProperties {

		/** Type: double */
		amount: FormControl<number | null | undefined>,

		/**
		 * The amount (in cents) of cash tendered by the buyer. Only applicable when the tender type is cash.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		buyer_tendered_cash_amount: FormControl<number | null | undefined>,

		/** The entry method of the card. Only applicable when the tender type is card. */
		card_entry_method: FormControl<OrderTendersCard_entry_method | null | undefined>,

		/** The status of the card. Only applicable when the tender type is card. */
		card_status: FormControl<OrderTendersCard_status | null | undefined>,

		/**
		 * The amount (in cents) of cash returned to the buyer. Only applicable when the tender type is cash.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		change_back_cash_amount: FormControl<number | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		location_id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		note: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		payment_id: FormControl<string | null | undefined>,

		/** Type: double */
		percentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_amount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_discount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_processing_fee: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_refund: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_service_charge: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_tax: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_tip: FormControl<number | null | undefined>,

		/** A unique identifier for an object. */
		transaction_id: FormControl<string | null | undefined>,
		type: FormControl<OrderTendersType | null | undefined>,
	}
	export function CreateOrderTendersFormGroup() {
		return new FormGroup<OrderTendersFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			buyer_tendered_cash_amount: new FormControl<number | null | undefined>(undefined),
			card_entry_method: new FormControl<OrderTendersCard_entry_method | null | undefined>(undefined),
			card_status: new FormControl<OrderTendersCard_status | null | undefined>(undefined),
			change_back_cash_amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			payment_id: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			total_amount: new FormControl<number | null | undefined>(undefined),
			total_discount: new FormControl<number | null | undefined>(undefined),
			total_processing_fee: new FormControl<number | null | undefined>(undefined),
			total_refund: new FormControl<number | null | undefined>(undefined),
			total_service_charge: new FormControl<number | null | undefined>(undefined),
			total_tax: new FormControl<number | null | undefined>(undefined),
			total_tip: new FormControl<number | null | undefined>(undefined),
			transaction_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<OrderTendersType | null | undefined>(undefined),
		});

	}


	/** A card's non-confidential details. */
	export interface PaymentCard {
		billing_address?: Address;

		/** The first six digits of the card number, known as the Bank Identification Number (BIN). */
		bin?: string | null;

		/** The first six digits of the card number, known as the Bank Identification Number (BIN). */
		card_brand?: PaymentCardCard_brand | null;
		card_type?: PaymentCardCard_type | null;
		cardholder_name?: string | null;
		customer_id?: string | null;

		/** Indicates whether or not a card can be used for payments. */
		enabled?: boolean | null;

		/**
		 * The expiration month of the associated card as an integer between 1 and 12.
		 * Minimum: 1
		 * Maximum: 12
		 */
		exp_month?: number | null;

		/**
		 * The four-digit year of the card's expiration date.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exp_year?: number | null;
		fingerprint?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;
		last_4?: string | null;
		merchant_id?: string | null;
		prepaid_type?: PaymentCardPrepaid_type | null;

		/** An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system. */
		reference_id?: string | null;
		version?: string | null;
	}

	/** A card's non-confidential details. */
	export interface PaymentCardFormProperties {

		/** The first six digits of the card number, known as the Bank Identification Number (BIN). */
		bin: FormControl<string | null | undefined>,

		/** The first six digits of the card number, known as the Bank Identification Number (BIN). */
		card_brand: FormControl<PaymentCardCard_brand | null | undefined>,
		card_type: FormControl<PaymentCardCard_type | null | undefined>,
		cardholder_name: FormControl<string | null | undefined>,
		customer_id: FormControl<string | null | undefined>,

		/** Indicates whether or not a card can be used for payments. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The expiration month of the associated card as an integer between 1 and 12.
		 * Minimum: 1
		 * Maximum: 12
		 */
		exp_month: FormControl<number | null | undefined>,

		/**
		 * The four-digit year of the card's expiration date.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exp_year: FormControl<number | null | undefined>,
		fingerprint: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,
		last_4: FormControl<string | null | undefined>,
		merchant_id: FormControl<string | null | undefined>,
		prepaid_type: FormControl<PaymentCardPrepaid_type | null | undefined>,

		/** An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system. */
		reference_id: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreatePaymentCardFormGroup() {
		return new FormGroup<PaymentCardFormProperties>({
			bin: new FormControl<string | null | undefined>(undefined),
			card_brand: new FormControl<PaymentCardCard_brand | null | undefined>(undefined),
			card_type: new FormControl<PaymentCardCard_type | null | undefined>(undefined),
			cardholder_name: new FormControl<string | null | undefined>(undefined),
			customer_id: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			exp_month: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(12)]),
			exp_year: new FormControl<number | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_4: new FormControl<string | null | undefined>(undefined),
			merchant_id: new FormControl<string | null | undefined>(undefined),
			prepaid_type: new FormControl<PaymentCardPrepaid_type | null | undefined>(undefined),
			reference_id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PaymentCardCard_brand { visa = 'visa', mastercard = 'mastercard', amex = 'amex', discover = 'discover', 'discover-diners' = 'discover-diners', jcb = 'jcb', 'china-unionpay' = 'china-unionpay', 'square-gift-card' = 'square-gift-card', 'square-capital-card' = 'square-capital-card', interac = 'interac', eftpos = 'eftpos', felica = 'felica', ebt = 'ebt', other = 'other' }

	export enum PaymentCardCard_type { credit = 'credit', debit = 'debit', prepaid = 'prepaid', other = 'other' }

	export enum PaymentCardPrepaid_type { 'non-prepaid' = 'non-prepaid', prepaid = 'prepaid', unknown = 'unknown' }

	export enum OrderTendersCard_entry_method { evm = 'evm', swiped = 'swiped', keyed = 'keyed', 'on-file' = 'on-file', contactless = 'contactless' }

	export enum OrderTendersCard_status { authorized = 'authorized', captured = 'captured', failed = 'failed', voided = 'voided' }

	export enum OrderTendersType { cash = 'cash', card = 'card', other = 'other' }

	export interface GetOrderTypeResponse {

		/** Required */
		data: OrderType;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetOrderTypeResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetOrderTypeResponseFormGroup() {
		return new FormGroup<GetOrderTypeResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OrderType {

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;
		default?: boolean | null;

		/** A unique identifier for an object. */
		id?: string | null;
		name?: string | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface OrderTypeFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,
		default: FormControl<boolean | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateOrderTypeFormGroup() {
		return new FormGroup<OrderTypeFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			default: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOrderTypesResponse {

		/** Required */
		data: Array<OrderType>;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetOrderTypesResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetOrderTypesResponseFormGroup() {
		return new FormGroup<GetOrderTypesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetOrdersResponse {

		/** Required */
		data: Array<Order>;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetOrdersResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetOrdersResponseFormGroup() {
		return new FormGroup<GetOrdersResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPosPaymentResponse {

		/** Required */
		data: PosPayment;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetPosPaymentResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetPosPaymentResponseFormGroup() {
		return new FormGroup<GetPosPaymentResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PosPayment {

		/**
		 * Required
		 * Type: double
		 */
		amount: number;

		/**
		 * The amount the developer is taking as a fee for facilitating the payment on behalf of the seller.
		 * Type: double
		 */
		app_fee?: number | null;

		/**
		 * The initial amount of money approved for this payment.
		 * Type: double
		 */
		approved?: number | null;

		/** Card details for this payment. This field is currently not available. Reach out to our team for more info. */
		bank_account?: PosBankAccount;
		card_details?: PosPaymentCard_details;

		/** Cash details for this payment */
		cash?: PosPaymentCash;

		/** Type: double */
		change_back_cash_amount?: number | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/**
		 * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
		 * Required
		 */
		currency: Currency;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Required */
		customer_id: string;
		device_id?: string | null;
		employee_id?: string | null;

		/** Details about an external payment. */
		external_details?: PosPaymentExternal_details;
		external_payment_id?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/**
		 * A value you specify that uniquely identifies this request among requests you have sent.
		 * Max length: 45
		 */
		idempotency_key?: string | null;
		location_id?: string | null;
		merchant_id?: string | null;

		/** Required */
		order_id: string;
		PosPaymentProcessing_fees?: Array<PosPaymentProcessing_fees>;

		/**
		 * The initial amount of money approved for this payment.
		 * Type: double
		 */
		refunded?: number | null;

		/** Optional service charges or gratuity tip applied to the order. */
		service_charges?: Array<ServiceCharge>;

		/** Source of this payment. */
		source?: PosPaymentSource | null;

		/**
		 * The ID for the source of funds for this payment. Square-only: This can be a payment token (card nonce) generated by the payment form or a card on file made linked to the customer. if recording a payment that the seller received outside of Square, specify either `CASH` or `EXTERNAL`.
		 * Required
		 */
		source_id: string;

		/** Status of this payment. */
		status?: PosPaymentStatus | null;

		/** Type: double */
		tax?: number | null;

		/** Required */
		tender_id: string;

		/** Type: double */
		tip?: number | null;

		/** Type: double */
		total?: number | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;

		/** Wallet details for this payment. This field is currently not available. Reach out to our team for more info. */
		wallet?: PosPaymentWallet;
	}
	export interface PosPaymentFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The amount the developer is taking as a fee for facilitating the payment on behalf of the seller.
		 * Type: double
		 */
		app_fee: FormControl<number | null | undefined>,

		/**
		 * The initial amount of money approved for this payment.
		 * Type: double
		 */
		approved: FormControl<number | null | undefined>,

		/** Type: double */
		change_back_cash_amount: FormControl<number | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/**
		 * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
		 * Required
		 */
		currency: FormControl<Currency | null | undefined>,

		/** Required */
		customer_id: FormControl<string | null | undefined>,
		device_id: FormControl<string | null | undefined>,
		employee_id: FormControl<string | null | undefined>,
		external_payment_id: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * A value you specify that uniquely identifies this request among requests you have sent.
		 * Max length: 45
		 */
		idempotency_key: FormControl<string | null | undefined>,
		location_id: FormControl<string | null | undefined>,
		merchant_id: FormControl<string | null | undefined>,

		/** Required */
		order_id: FormControl<string | null | undefined>,

		/**
		 * The initial amount of money approved for this payment.
		 * Type: double
		 */
		refunded: FormControl<number | null | undefined>,

		/** Source of this payment. */
		source: FormControl<PosPaymentSource | null | undefined>,

		/**
		 * The ID for the source of funds for this payment. Square-only: This can be a payment token (card nonce) generated by the payment form or a card on file made linked to the customer. if recording a payment that the seller received outside of Square, specify either `CASH` or `EXTERNAL`.
		 * Required
		 */
		source_id: FormControl<string | null | undefined>,

		/** Status of this payment. */
		status: FormControl<PosPaymentStatus | null | undefined>,

		/** Type: double */
		tax: FormControl<number | null | undefined>,

		/** Required */
		tender_id: FormControl<string | null | undefined>,

		/** Type: double */
		tip: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreatePosPaymentFormGroup() {
		return new FormGroup<PosPaymentFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			app_fee: new FormControl<number | null | undefined>(undefined),
			approved: new FormControl<number | null | undefined>(undefined),
			change_back_cash_amount: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined, [Validators.required]),
			customer_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			device_id: new FormControl<string | null | undefined>(undefined),
			employee_id: new FormControl<string | null | undefined>(undefined),
			external_payment_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			idempotency_key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(45)]),
			location_id: new FormControl<string | null | undefined>(undefined),
			merchant_id: new FormControl<string | null | undefined>(undefined),
			order_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refunded: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<PosPaymentSource | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<PosPaymentStatus | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			tender_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tip: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Card details for this payment. This field is currently not available. Reach out to our team for more info. */
	export interface PosBankAccount {

		/**
		 * The ownership type of the bank account performing the transfer.
		 * The type can be `INDIVIDUAL`, `COMPANY`, or `UNKNOWN`.
		 * Max length: 50
		 */
		account_ownership_type?: string | null;

		/** ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`. */
		ach_details?: PosBankAccountAch_details;

		/**
		 * The name of the bank associated with the bank account.
		 * Max length: 100
		 */
		bank_name?: string | null;

		/**
		 * Country code according to ISO 3166-1 alpha-2.
		 * Min length: 2
		 * Max length: 2
		 */
		country?: string | null;

		/**
		 * Uniquely identifies the bank account for this seller and can be used
		 * to determine if payments are from the same bank account.
		 * Max length: 255
		 */
		fingerprint?: string | null;

		/**
		 * The statement description as sent to the bank.
		 * Max length: 1000
		 */
		statement_description?: string | null;

		/**
		 * The type of the bank transfer. The type can be `ACH` or `UNKNOWN`.
		 * Max length: 50
		 */
		transfer_type?: string | null;
	}

	/** Card details for this payment. This field is currently not available. Reach out to our team for more info. */
	export interface PosBankAccountFormProperties {

		/**
		 * The ownership type of the bank account performing the transfer.
		 * The type can be `INDIVIDUAL`, `COMPANY`, or `UNKNOWN`.
		 * Max length: 50
		 */
		account_ownership_type: FormControl<string | null | undefined>,

		/**
		 * The name of the bank associated with the bank account.
		 * Max length: 100
		 */
		bank_name: FormControl<string | null | undefined>,

		/**
		 * Country code according to ISO 3166-1 alpha-2.
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Uniquely identifies the bank account for this seller and can be used
		 * to determine if payments are from the same bank account.
		 * Max length: 255
		 */
		fingerprint: FormControl<string | null | undefined>,

		/**
		 * The statement description as sent to the bank.
		 * Max length: 1000
		 */
		statement_description: FormControl<string | null | undefined>,

		/**
		 * The type of the bank transfer. The type can be `ACH` or `UNKNOWN`.
		 * Max length: 50
		 */
		transfer_type: FormControl<string | null | undefined>,
	}
	export function CreatePosBankAccountFormGroup() {
		return new FormGroup<PosBankAccountFormProperties>({
			account_ownership_type: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			bank_name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2)]),
			fingerprint: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			statement_description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000)]),
			transfer_type: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
		});

	}

	export interface PosBankAccountAch_details {

		/**
		 * The last few digits of the bank account number.
		 * Max length: 4
		 */
		account_number_suffix?: string | null;

		/**
		 * The type of the bank account performing the transfer. The account type can be `CHECKING`,
		 * `SAVINGS`, or `UNKNOWN`.
		 * Max length: 50
		 */
		account_type?: string | null;

		/**
		 * The routing number for the bank account.
		 * Max length: 50
		 */
		routing_number?: string | null;
	}
	export interface PosBankAccountAch_detailsFormProperties {

		/**
		 * The last few digits of the bank account number.
		 * Max length: 4
		 */
		account_number_suffix: FormControl<string | null | undefined>,

		/**
		 * The type of the bank account performing the transfer. The account type can be `CHECKING`,
		 * `SAVINGS`, or `UNKNOWN`.
		 * Max length: 50
		 */
		account_type: FormControl<string | null | undefined>,

		/**
		 * The routing number for the bank account.
		 * Max length: 50
		 */
		routing_number: FormControl<string | null | undefined>,
	}
	export function CreatePosBankAccountAch_detailsFormGroup() {
		return new FormGroup<PosBankAccountAch_detailsFormProperties>({
			account_number_suffix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4)]),
			account_type: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			routing_number: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
		});

	}

	export interface PosPaymentCard_details {

		/** A card's non-confidential details. */
		card?: PaymentCard;
	}
	export interface PosPaymentCard_detailsFormProperties {
	}
	export function CreatePosPaymentCard_detailsFormGroup() {
		return new FormGroup<PosPaymentCard_detailsFormProperties>({
		});

	}

	export interface PosPaymentCash {

		/** The amount of cash given by the customer. */
		amount?: any;

		/** The amount of change due back to the buyer. For Square: this read-only field is calculated from the amount_money and buyer_supplied_money fields. */
		charge_back_amount?: any;
	}
	export interface PosPaymentCashFormProperties {

		/** The amount of cash given by the customer. */
		amount: FormControl<any | null | undefined>,

		/** The amount of change due back to the buyer. For Square: this read-only field is calculated from the amount_money and buyer_supplied_money fields. */
		charge_back_amount: FormControl<any | null | undefined>,
	}
	export function CreatePosPaymentCashFormGroup() {
		return new FormGroup<PosPaymentCashFormProperties>({
			amount: new FormControl<any | null | undefined>(undefined),
			charge_back_amount: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PosPaymentExternal_details {

		/**
		 * A description of the external payment source. For example,
		 * "Food Delivery Service".
		 * Required
		 * Max length: 255
		 */
		source: string;

		/**
		 * The fees paid to the source. The amount minus this field is the net amount seller receives.
		 * Type: double
		 */
		source_fee_amount?: number | null;

		/**
		 * An ID to associate the payment to its originating source.
		 * Max length: 255
		 */
		source_id?: string | null;

		/**
		 * The type of external payment the seller received. It can be one of the following:
		 * - CHECK - Paid using a physical check.
		 * - BANK_TRANSFER - Paid using external bank transfer.
		 * - OTHER\_GIFT\_CARD - Paid using a non-Square gift card.
		 * - CRYPTO - Paid using a crypto currency.
		 * - SQUARE_CASH - Paid using Square Cash App.
		 * - SOCIAL - Paid using peer-to-peer payment applications.
		 * - EXTERNAL - A third-party application gathered this payment outside of Square.
		 * - EMONEY - Paid using an E-money provider.
		 * - CARD - A credit or debit card that Square does not support.
		 * - STORED_BALANCE - Use for house accounts, store credit, and so forth.
		 * - FOOD_VOUCHER - Restaurant voucher provided by employers to employees to pay for meals
		 * - OTHER - A type not listed here.
		 * Required
		 * Max length: 50
		 */
		type: PosPaymentExternal_detailsType;
	}
	export interface PosPaymentExternal_detailsFormProperties {

		/**
		 * A description of the external payment source. For example,
		 * "Food Delivery Service".
		 * Required
		 * Max length: 255
		 */
		source: FormControl<string | null | undefined>,

		/**
		 * The fees paid to the source. The amount minus this field is the net amount seller receives.
		 * Type: double
		 */
		source_fee_amount: FormControl<number | null | undefined>,

		/**
		 * An ID to associate the payment to its originating source.
		 * Max length: 255
		 */
		source_id: FormControl<string | null | undefined>,

		/**
		 * The type of external payment the seller received. It can be one of the following:
		 * - CHECK - Paid using a physical check.
		 * - BANK_TRANSFER - Paid using external bank transfer.
		 * - OTHER\_GIFT\_CARD - Paid using a non-Square gift card.
		 * - CRYPTO - Paid using a crypto currency.
		 * - SQUARE_CASH - Paid using Square Cash App.
		 * - SOCIAL - Paid using peer-to-peer payment applications.
		 * - EXTERNAL - A third-party application gathered this payment outside of Square.
		 * - EMONEY - Paid using an E-money provider.
		 * - CARD - A credit or debit card that Square does not support.
		 * - STORED_BALANCE - Use for house accounts, store credit, and so forth.
		 * - FOOD_VOUCHER - Restaurant voucher provided by employers to employees to pay for meals
		 * - OTHER - A type not listed here.
		 * Required
		 * Max length: 50
		 */
		type: FormControl<PosPaymentExternal_detailsType | null | undefined>,
	}
	export function CreatePosPaymentExternal_detailsFormGroup() {
		return new FormGroup<PosPaymentExternal_detailsFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			source_fee_amount: new FormControl<number | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			type: new FormControl<PosPaymentExternal_detailsType | null | undefined>(undefined, [Validators.required, Validators.maxLength(50)]),
		});

	}

	export enum PosPaymentExternal_detailsType { check = 'check', bank_transfer = 'bank_transfer', other_gift_card = 'other_gift_card', crypto = 'crypto', square_cash = 'square_cash', social = 'social', external = 'external', emoney = 'emoney', card = 'card', stored_balance = 'stored_balance', food_voucher = 'food_voucher', other = 'other' }

	export interface PosPaymentProcessing_fees {

		/** Type: double */
		amount?: number | null;
		effective_at?: Date | null;
		processing_type?: PosPaymentProcessing_feesProcessing_type | null;
	}
	export interface PosPaymentProcessing_feesFormProperties {

		/** Type: double */
		amount: FormControl<number | null | undefined>,
		effective_at: FormControl<Date | null | undefined>,
		processing_type: FormControl<PosPaymentProcessing_feesProcessing_type | null | undefined>,
	}
	export function CreatePosPaymentProcessing_feesFormGroup() {
		return new FormGroup<PosPaymentProcessing_feesFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			effective_at: new FormControl<Date | null | undefined>(undefined),
			processing_type: new FormControl<PosPaymentProcessing_feesProcessing_type | null | undefined>(undefined),
		});

	}

	export enum PosPaymentProcessing_feesProcessing_type { initial = 'initial', adjustment = 'adjustment' }

	export enum PosPaymentSource { card = 'card', bank_account = 'bank_account', wallet = 'wallet', bnpl = 'bnpl', cash = 'cash', external = 'external', other = 'other' }

	export enum PosPaymentStatus { approved = 'approved', pending = 'pending', completed = 'completed', canceled = 'canceled', failed = 'failed', other = 'other' }

	export interface PosPaymentWallet {

		/**
		 * The status of the wallet payment. The status can be AUTHORIZED, CAPTURED, VOIDED, or FAILED.
		 * Max length: 50
		 */
		status?: PosPaymentWalletStatus | null;
	}
	export interface PosPaymentWalletFormProperties {

		/**
		 * The status of the wallet payment. The status can be AUTHORIZED, CAPTURED, VOIDED, or FAILED.
		 * Max length: 50
		 */
		status: FormControl<PosPaymentWalletStatus | null | undefined>,
	}
	export function CreatePosPaymentWalletFormGroup() {
		return new FormGroup<PosPaymentWalletFormProperties>({
			status: new FormControl<PosPaymentWalletStatus | null | undefined>(undefined, [Validators.maxLength(50)]),
		});

	}

	export enum PosPaymentWalletStatus { authorized = 'authorized', captured = 'captured', voided = 'voided', failed = 'failed', other = 'other' }

	export interface GetPosPaymentsResponse {

		/** Required */
		data: Array<PosPayment>;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetPosPaymentsResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetPosPaymentsResponseFormGroup() {
		return new FormGroup<GetPosPaymentsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTenderResponse {

		/** Required */
		data: Tender;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetTenderResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetTenderResponseFormGroup() {
		return new FormGroup<GetTenderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Tender {
		active?: boolean | null;

		/** Allow tipping on payment from tender */
		allows_tipping?: boolean | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;
		editable?: boolean | null;
		hidden?: boolean | null;

		/** A unique identifier for an object. */
		id?: string | null;
		key?: string | null;
		label?: string | null;

		/** If this tender opens the cash drawer */
		opens_cash_drawer?: boolean | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface TenderFormProperties {
		active: FormControl<boolean | null | undefined>,

		/** Allow tipping on payment from tender */
		allows_tipping: FormControl<boolean | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,
		editable: FormControl<boolean | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,

		/** If this tender opens the cash drawer */
		opens_cash_drawer: FormControl<boolean | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateTenderFormGroup() {
		return new FormGroup<TenderFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			allows_tipping: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			editable: new FormControl<boolean | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			opens_cash_drawer: new FormControl<boolean | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTendersResponse {

		/** Required */
		data: Array<Tender>;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetTendersResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetTendersResponseFormGroup() {
		return new FormGroup<GetTendersResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifierGroupFilter {

		/** Id of the job to filter on */
		modifier_group_id?: string | null;
	}
	export interface ModifierGroupFilterFormProperties {

		/** Id of the job to filter on */
		modifier_group_id: FormControl<string | null | undefined>,
	}
	export function CreateModifierGroupFilterFormGroup() {
		return new FormGroup<ModifierGroupFilterFormProperties>({
			modifier_group_id: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * HTTP status code
		 * Type: double
		 */
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

		/**
		 * HTTP status code
		 * Type: double
		 */
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

		/**
		 * HTTP status code
		 * Type: double
		 */
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

		/**
		 * HTTP status code
		 * Type: double
		 */
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

	export interface PaymentRequiredResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
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

		/**
		 * HTTP status code
		 * Type: double
		 */
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

	export interface PosWebhookEvent {
	}
	export interface PosWebhookEventFormProperties {
	}
	export function CreatePosWebhookEventFormGroup() {
		return new FormGroup<PosWebhookEventFormProperties>({
		});

	}

	export interface SocialLink {

		/** Unique identifier of the social link */
		id?: string | null;

		/** Type of the social link, e.g. twitter */
		type?: string | null;

		/**
		 * URL of the social link, e.g. https://www.twitter.com/apideck
		 * Required
		 * Min length: 1
		 */
		url: string;
	}
	export interface SocialLinkFormProperties {

		/** Unique identifier of the social link */
		id: FormControl<string | null | undefined>,

		/** Type of the social link, e.g. twitter */
		type: FormControl<string | null | undefined>,

		/**
		 * URL of the social link, e.g. https://www.twitter.com/apideck
		 * Required
		 * Min length: 1
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSocialLinkFormGroup() {
		return new FormGroup<SocialLinkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface TooManyRequestsResponse {
		detail?: TooManyRequestsResponseDetail;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
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

		/**
		 * HTTP status code
		 * Type: double
		 */
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

		/**
		 * HTTP status code
		 * Type: double
		 */
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

		/**
		 * HTTP status code
		 * Type: double
		 */
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

		/**
		 * HTTP status code
		 * Type: double
		 */
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

		/**
		 * HTTP status code
		 * Type: double
		 */
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

		/**
		 * HTTP status code
		 * Type: double
		 */
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

		/**
		 * HTTP status code
		 * Type: double
		 */
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

	export interface UpdateItemResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateItemResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateItemResponseFormGroup() {
		return new FormGroup<UpdateItemResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateLocationResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateLocationResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateLocationResponseFormGroup() {
		return new FormGroup<UpdateLocationResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateMerchantResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateMerchantResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMerchantResponseFormGroup() {
		return new FormGroup<UpdateMerchantResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateModifierGroupResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateModifierGroupResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateModifierGroupResponseFormGroup() {
		return new FormGroup<UpdateModifierGroupResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateModifierResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateModifierResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateModifierResponseFormGroup() {
		return new FormGroup<UpdateModifierResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrderResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateOrderResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateOrderResponseFormGroup() {
		return new FormGroup<UpdateOrderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrderTypeResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateOrderTypeResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateOrderTypeResponseFormGroup() {
		return new FormGroup<UpdateOrderTypeResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePosPaymentResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdatePosPaymentResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePosPaymentResponseFormGroup() {
		return new FormGroup<UpdatePosPaymentResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateTenderResponse {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateTenderResponseFormProperties {

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateTenderResponseFormGroup() {
		return new FormGroup<UpdateTenderResponseFormProperties>({
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

	export enum WebsiteType { primary = 'primary', secondary = 'secondary', work = 'work', personal = 'personal', other = 'other' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Items
		 * List Items
		 * Get pos/items
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetItemsResponse} Items
		 */
		ItemsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, fields: string | null | undefined): Observable<GetItemsResponse> {
			return this.http.get<GetItemsResponse>(this.baseUri + 'pos/items?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Item
		 * Create Item
		 * Post pos/items
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		ItemsAdd(raw: boolean | null | undefined, requestBody: Item): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pos/items?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Item
		 * Delete Item
		 * Delete pos/items/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteItemResponse} Items
		 */
		ItemsDelete(id: string, raw: boolean | null | undefined): Observable<DeleteItemResponse> {
			return this.http.delete<DeleteItemResponse>(this.baseUri + 'pos/items/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Item
		 * Get Item
		 * Get pos/items/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetItemResponse} Items
		 */
		ItemsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetItemResponse> {
			return this.http.get<GetItemResponse>(this.baseUri + 'pos/items/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Item
		 * Update Item
		 * Patch pos/items/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateItemResponse} Items
		 */
		ItemsUpdate(id: string, raw: boolean | null | undefined, requestBody: Item): Observable<UpdateItemResponse> {
			return this.http.patch<UpdateItemResponse>(this.baseUri + 'pos/items/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Locations
		 * List Locations
		 * Get pos/locations
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetLocationsResponse} Locations
		 */
		LocationsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, fields: string | null | undefined): Observable<GetLocationsResponse> {
			return this.http.get<GetLocationsResponse>(this.baseUri + 'pos/locations?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Location
		 * Create Location
		 * Post pos/locations
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		LocationsAdd(raw: boolean | null | undefined, requestBody: Location): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pos/locations?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Location
		 * Delete Location
		 * Delete pos/locations/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteLocationResponse} Locations
		 */
		LocationsDelete(id: string, raw: boolean | null | undefined): Observable<DeleteLocationResponse> {
			return this.http.delete<DeleteLocationResponse>(this.baseUri + 'pos/locations/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Location
		 * Get Location
		 * Get pos/locations/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetLocationResponse} Locations
		 */
		LocationsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetLocationResponse> {
			return this.http.get<GetLocationResponse>(this.baseUri + 'pos/locations/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Location
		 * Update Location
		 * Patch pos/locations/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateLocationResponse} Locations
		 */
		LocationsUpdate(id: string, raw: boolean | null | undefined, requestBody: Location): Observable<UpdateLocationResponse> {
			return this.http.patch<UpdateLocationResponse>(this.baseUri + 'pos/locations/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Merchants
		 * List Merchants
		 * Get pos/merchants
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetMerchantsResponse} Merchants
		 */
		MerchantsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, fields: string | null | undefined): Observable<GetMerchantsResponse> {
			return this.http.get<GetMerchantsResponse>(this.baseUri + 'pos/merchants?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Merchant
		 * Create Merchant
		 * Post pos/merchants
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		MerchantsAdd(raw: boolean | null | undefined, requestBody: Merchant): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pos/merchants?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Merchant
		 * Delete Merchant
		 * Delete pos/merchants/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteMerchantResponse} Merchants
		 */
		MerchantsDelete(id: string, raw: boolean | null | undefined): Observable<DeleteMerchantResponse> {
			return this.http.delete<DeleteMerchantResponse>(this.baseUri + 'pos/merchants/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Merchant
		 * Get Merchant
		 * Get pos/merchants/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetMerchantResponse} Merchants
		 */
		MerchantsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetMerchantResponse> {
			return this.http.get<GetMerchantResponse>(this.baseUri + 'pos/merchants/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Merchant
		 * Update Merchant
		 * Patch pos/merchants/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateMerchantResponse} Merchants
		 */
		MerchantsUpdate(id: string, raw: boolean | null | undefined, requestBody: Merchant): Observable<UpdateMerchantResponse> {
			return this.http.patch<UpdateMerchantResponse>(this.baseUri + 'pos/merchants/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Modifier Groups
		 * List Modifier Groups
		 * Get pos/modifier-groups
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetModifierGroupsResponse} ModifierGroups
		 */
		ModifierGroupsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, fields: string | null | undefined): Observable<GetModifierGroupsResponse> {
			return this.http.get<GetModifierGroupsResponse>(this.baseUri + 'pos/modifier-groups?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Modifier Group
		 * Create Modifier Group
		 * Post pos/modifier-groups
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		ModifierGroupsAdd(raw: boolean | null | undefined, requestBody: ModifierGroup): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pos/modifier-groups?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Modifier Group
		 * Delete Modifier Group
		 * Delete pos/modifier-groups/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteModifierGroupResponse} ModifierGroups
		 */
		ModifierGroupsDelete(id: string, raw: boolean | null | undefined): Observable<DeleteModifierGroupResponse> {
			return this.http.delete<DeleteModifierGroupResponse>(this.baseUri + 'pos/modifier-groups/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Modifier Group
		 * Get Modifier Group
		 * Get pos/modifier-groups/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetModifierGroupResponse} ModifierGroups
		 */
		ModifierGroupsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetModifierGroupResponse> {
			return this.http.get<GetModifierGroupResponse>(this.baseUri + 'pos/modifier-groups/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Modifier Group
		 * Update Modifier Group
		 * Patch pos/modifier-groups/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateModifierGroupResponse} ModifierGroups
		 */
		ModifierGroupsUpdate(id: string, raw: boolean | null | undefined, requestBody: ModifierGroup): Observable<UpdateModifierGroupResponse> {
			return this.http.patch<UpdateModifierGroupResponse>(this.baseUri + 'pos/modifier-groups/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Modifiers
		 * List Modifiers
		 * Get pos/modifiers
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetModifiersResponse} Modifiers
		 */
		ModifiersAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, fields: string | null | undefined): Observable<GetModifiersResponse> {
			return this.http.get<GetModifiersResponse>(this.baseUri + 'pos/modifiers?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Modifier
		 * Create Modifier
		 * Post pos/modifiers
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		ModifiersAdd(raw: boolean | null | undefined, requestBody: Modifier): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pos/modifiers?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Modifier
		 * Delete Modifier
		 * Delete pos/modifiers/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {ModifierGroupFilter} filter Apply filters
		 * @return {DeleteModifierResponse} Modifiers
		 */
		ModifiersDelete(id: string, raw: boolean | null | undefined, filter: ModifierGroupFilter | null | undefined): Observable<DeleteModifierResponse> {
			return this.http.delete<DeleteModifierResponse>(this.baseUri + 'pos/modifiers/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&filter=' + filter, {});
		}

		/**
		 * Get Modifier
		 * Get Modifier
		 * Get pos/modifiers/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {ModifierGroupFilter} filter Apply filters
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetModifierResponse} Modifiers
		 */
		ModifiersOne(id: string, raw: boolean | null | undefined, filter: ModifierGroupFilter | null | undefined, fields: string | null | undefined): Observable<GetModifierResponse> {
			return this.http.get<GetModifierResponse>(this.baseUri + 'pos/modifiers/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&filter=' + filter + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Modifier
		 * Update Modifier
		 * Patch pos/modifiers/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateModifierResponse} Modifiers
		 */
		ModifiersUpdate(id: string, raw: boolean | null | undefined, requestBody: Modifier): Observable<UpdateModifierResponse> {
			return this.http.patch<UpdateModifierResponse>(this.baseUri + 'pos/modifiers/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Order Types
		 * List Order Types
		 * Get pos/order-types
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetOrderTypesResponse} OrderTypes
		 */
		OrderTypesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, fields: string | null | undefined): Observable<GetOrderTypesResponse> {
			return this.http.get<GetOrderTypesResponse>(this.baseUri + 'pos/order-types?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Order Type
		 * Create Order Type
		 * Post pos/order-types
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		OrderTypesAdd(raw: boolean | null | undefined, requestBody: OrderType): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pos/order-types?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Order Type
		 * Delete Order Type
		 * Delete pos/order-types/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteOrderTypeResponse} OrderTypes
		 */
		OrderTypesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteOrderTypeResponse> {
			return this.http.delete<DeleteOrderTypeResponse>(this.baseUri + 'pos/order-types/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Order Type
		 * Get Order Type
		 * Get pos/order-types/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetOrderTypeResponse} OrderTypes
		 */
		OrderTypesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetOrderTypeResponse> {
			return this.http.get<GetOrderTypeResponse>(this.baseUri + 'pos/order-types/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Order Type
		 * Update Order Type
		 * Patch pos/order-types/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateOrderTypeResponse} OrderTypes
		 */
		OrderTypesUpdate(id: string, raw: boolean | null | undefined, requestBody: OrderType): Observable<UpdateOrderTypeResponse> {
			return this.http.patch<UpdateOrderTypeResponse>(this.baseUri + 'pos/order-types/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Orders
		 * List Orders
		 * Get pos/orders
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {string} location_id ID of the location.
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetOrdersResponse} Orders
		 */
		OrdersAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, location_id: string | null | undefined, fields: string | null | undefined): Observable<GetOrdersResponse> {
			return this.http.get<GetOrdersResponse>(this.baseUri + 'pos/orders?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&location_id=' + (location_id == null ? '' : encodeURIComponent(location_id)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Order
		 * Create Order
		 * Post pos/orders
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		OrdersAdd(raw: boolean | null | undefined, requestBody: Order): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pos/orders?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Order
		 * Delete Order
		 * Delete pos/orders/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteOrderResponse} Orders
		 */
		OrdersDelete(id: string, raw: boolean | null | undefined): Observable<DeleteOrderResponse> {
			return this.http.delete<DeleteOrderResponse>(this.baseUri + 'pos/orders/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Order
		 * Get Order
		 * Get pos/orders/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetOrderResponse} Orders
		 */
		OrdersOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetOrderResponse> {
			return this.http.get<GetOrderResponse>(this.baseUri + 'pos/orders/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Order
		 * Updates an open order by adding, replacing, or deleting fields. Square-only: Orders with a `completed` or `canceled` status cannot be updated. To pay for an order, use the [payments endpoint](#tag/Payments).
		 * Patch pos/orders/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateOrderResponse} Orders
		 */
		OrdersUpdate(id: string, raw: boolean | null | undefined, requestBody: Order): Observable<UpdateOrderResponse> {
			return this.http.patch<UpdateOrderResponse>(this.baseUri + 'pos/orders/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pay Order
		 * Pay Order
		 * Post pos/orders/{id}/pay
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {void} 
		 */
		OrdersPay(id: string, raw: boolean | null | undefined, fields: string | null | undefined, requestBody: Order): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pos/orders/' + (id == null ? '' : encodeURIComponent(id)) + '/pay&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Payments
		 * List Payments
		 * Get pos/payments
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetPosPaymentsResponse} PosPayments
		 */
		PaymentsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, fields: string | null | undefined): Observable<GetPosPaymentsResponse> {
			return this.http.get<GetPosPaymentsResponse>(this.baseUri + 'pos/payments?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Payment
		 * Create Payment
		 * Post pos/payments
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		PaymentsAdd(raw: boolean | null | undefined, requestBody: PosPayment): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pos/payments?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Payment
		 * Delete Payment
		 * Delete pos/payments/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeletePosPaymentResponse} PosPayments
		 */
		PaymentsDelete(id: string, raw: boolean | null | undefined): Observable<DeletePosPaymentResponse> {
			return this.http.delete<DeletePosPaymentResponse>(this.baseUri + 'pos/payments/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Payment
		 * Get Payment
		 * Get pos/payments/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetPosPaymentResponse} PosPayments
		 */
		PaymentsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetPosPaymentResponse> {
			return this.http.get<GetPosPaymentResponse>(this.baseUri + 'pos/payments/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Payment
		 * Update Payment
		 * Patch pos/payments/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdatePosPaymentResponse} PosPayments
		 */
		PaymentsUpdate(id: string, raw: boolean | null | undefined, requestBody: PosPayment): Observable<UpdatePosPaymentResponse> {
			return this.http.patch<UpdatePosPaymentResponse>(this.baseUri + 'pos/payments/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Tenders
		 * List Tenders
		 * Get pos/tenders
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetTendersResponse} Tenders
		 */
		TendersAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, fields: string | null | undefined): Observable<GetTendersResponse> {
			return this.http.get<GetTendersResponse>(this.baseUri + 'pos/tenders?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Tender
		 * Create Tender
		 * Post pos/tenders
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		TendersAdd(raw: boolean | null | undefined, requestBody: Tender): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pos/tenders?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Tender
		 * Delete Tender
		 * Delete pos/tenders/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteTenderResponse} Tenders
		 */
		TendersDelete(id: string, raw: boolean | null | undefined): Observable<DeleteTenderResponse> {
			return this.http.delete<DeleteTenderResponse>(this.baseUri + 'pos/tenders/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Tender
		 * Get Tender
		 * Get pos/tenders/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetTenderResponse} Tenders
		 */
		TendersOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetTenderResponse> {
			return this.http.get<GetTenderResponse>(this.baseUri + 'pos/tenders/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Tender
		 * Update Tender
		 * Patch pos/tenders/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateTenderResponse} Tenders
		 */
		TendersUpdate(id: string, raw: boolean | null | undefined, requestBody: Tender): Observable<UpdateTenderResponse> {
			return this.http.patch<UpdateTenderResponse>(this.baseUri + 'pos/tenders/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

