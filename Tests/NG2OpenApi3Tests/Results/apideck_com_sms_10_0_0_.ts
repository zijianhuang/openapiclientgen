import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
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

	export interface CreateMessageResponse {

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
	export interface CreateMessageResponseFormProperties {

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
	export function CreateCreateMessageResponseFormGroup() {
		return new FormGroup<CreateMessageResponseFormProperties>({
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

	export interface DeleteMessageResponse {

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
	export interface DeleteMessageResponseFormProperties {

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
	export function CreateDeleteMessageResponseFormGroup() {
		return new FormGroup<DeleteMessageResponseFormProperties>({
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

	export interface GetMessageResponse {

		/** Required */
		data: Message;

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
	export interface GetMessageResponseFormProperties {

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
	export function CreateGetMessageResponseFormGroup() {
		return new FormGroup<GetMessageResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Message {

		/**
		 * The message text.
		 * Required
		 * Max length: 1600
		 */
		body: string;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The direction of the message. */
		direction?: MessageDirection | null;

		/** The error returned if your message status is failed or undelivered. */
		error?: MessageError;

		/**
		 * The phone number that initiated the message.
		 * Required
		 */
		from: string;

		/** A unique identifier for an object. */
		id?: string | null;

		/** The ID of the Messaging Service used with the message. In case of Plivo this links to the Powerpack ID. */
		messaging_service_id?: string | null;

		/**
		 * The number of media files associated with the message.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number_of_media_files?: number | null;

		/**
		 * The number of units that make up the complete message. Messages can be split up due to the constraints of the message size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number_of_units?: number | null;

		/** Price of the message. */
		price?: MessagePrice;

		/** A client reference. */
		reference?: string | null;

		/** The scheduled date and time of the message. */
		scheduled_at?: Date | null;

		/** The date and time that the message was sent */
		sent_at?: Date | null;

		/** Status of the delivery of the message. */
		status?: MessageStatus | null;
		subject?: string | null;

		/**
		 * The phone number that received the message.
		 * Required
		 */
		to: string;

		/** Set to sms for SMS messages and mms for MMS messages. */
		type?: MessageType | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;

		/** Define a webhook to receive delivery notifications. */
		webhook_url?: string | null;
	}
	export interface MessageFormProperties {

		/**
		 * The message text.
		 * Required
		 * Max length: 1600
		 */
		body: FormControl<string | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** The direction of the message. */
		direction: FormControl<MessageDirection | null | undefined>,

		/**
		 * The phone number that initiated the message.
		 * Required
		 */
		from: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** The ID of the Messaging Service used with the message. In case of Plivo this links to the Powerpack ID. */
		messaging_service_id: FormControl<string | null | undefined>,

		/**
		 * The number of media files associated with the message.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number_of_media_files: FormControl<number | null | undefined>,

		/**
		 * The number of units that make up the complete message. Messages can be split up due to the constraints of the message size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number_of_units: FormControl<number | null | undefined>,

		/** A client reference. */
		reference: FormControl<string | null | undefined>,

		/** The scheduled date and time of the message. */
		scheduled_at: FormControl<Date | null | undefined>,

		/** The date and time that the message was sent */
		sent_at: FormControl<Date | null | undefined>,

		/** Status of the delivery of the message. */
		status: FormControl<MessageStatus | null | undefined>,
		subject: FormControl<string | null | undefined>,

		/**
		 * The phone number that received the message.
		 * Required
		 */
		to: FormControl<string | null | undefined>,

		/** Set to sms for SMS messages and mms for MMS messages. */
		type: FormControl<MessageType | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,

		/** Define a webhook to receive delivery notifications. */
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600)]),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<MessageDirection | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			messaging_service_id: new FormControl<string | null | undefined>(undefined),
			number_of_media_files: new FormControl<number | null | undefined>(undefined),
			number_of_units: new FormControl<number | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			scheduled_at: new FormControl<Date | null | undefined>(undefined),
			sent_at: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<MessageStatus | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<MessageType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			webhook_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MessageDirection { inbound = 'inbound', 'outbound-api' = 'outbound-api', 'outbound-call' = 'outbound-call', 'outbound-reply' = 'outbound-reply', unknown = 'unknown' }

	export interface MessageError {

		/** The error_code provides more information about the failure. If the message was successful, this value is null */
		code?: string | null;
		message?: string | null;
	}
	export interface MessageErrorFormProperties {

		/** The error_code provides more information about the failure. If the message was successful, this value is null */
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateMessageErrorFormGroup() {
		return new FormGroup<MessageErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessagePrice {

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: Currency | null;
		per_unit?: string | null;
		total_amount?: string | null;
	}
	export interface MessagePriceFormProperties {

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<Currency | null | undefined>,
		per_unit: FormControl<string | null | undefined>,
		total_amount: FormControl<string | null | undefined>,
	}
	export function CreateMessagePriceFormGroup() {
		return new FormGroup<MessagePriceFormProperties>({
			currency: new FormControl<Currency | null | undefined>(undefined),
			per_unit: new FormControl<string | null | undefined>(undefined),
			total_amount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MessageStatus { accepted = 'accepted', scheduled = 'scheduled', canceled = 'canceled', queued = 'queued', sending = 'sending', sent = 'sent', failed = 'failed', delivered = 'delivered', undelivered = 'undelivered', receiving = 'receiving', received = 'received', read = 'read' }

	export enum MessageType { sms = 'sms', mms = 'mms' }

	export interface GetMessagesResponse {

		/** Required */
		data: Array<Message>;

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
	export interface GetMessagesResponseFormProperties {

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
	export function CreateGetMessagesResponseFormGroup() {
		return new FormGroup<GetMessagesResponseFormProperties>({
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

	export interface UpdateMessageResponse {

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
	export interface UpdateMessageResponseFormProperties {

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
	export function CreateUpdateMessageResponseFormGroup() {
		return new FormGroup<UpdateMessageResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Messages
		 * List Messages
		 * Get sms/messages
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetMessagesResponse} Messages
		 */
		MessagesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, fields: string | null | undefined): Observable<GetMessagesResponse> {
			return this.http.get<GetMessagesResponse>(this.baseUri + 'sms/messages?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Message
		 * Create Message
		 * Post sms/messages
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		MessagesAdd(raw: boolean | null | undefined, requestBody: Message): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sms/messages?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Message
		 * Delete Message
		 * Delete sms/messages/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteMessageResponse} Messages
		 */
		MessagesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteMessageResponse> {
			return this.http.delete<DeleteMessageResponse>(this.baseUri + 'sms/messages/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Message
		 * Get Message
		 * Get sms/messages/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetMessageResponse} Messages
		 */
		MessagesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetMessageResponse> {
			return this.http.get<GetMessageResponse>(this.baseUri + 'sms/messages/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Message
		 * Update Message
		 * Patch sms/messages/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateMessageResponse} Messages
		 */
		MessagesUpdate(id: string, raw: boolean | null | undefined, requestBody: Message): Observable<UpdateMessageResponse> {
			return this.http.patch<UpdateMessageResponse>(this.baseUri + 'sms/messages/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

