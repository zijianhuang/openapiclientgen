import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address {

		/**
		 * City name
		 * Required
		 */
		city: string;

		/**
		 * Full country name
		 * Required
		 */
		country: string;

		/**
		 * Two-letter country abbreviation
		 * Required
		 */
		country_code: string;

		/**
		 * State abbreviation
		 * Required
		 */
		state: string;

		/**
		 * Street number and name
		 * Required
		 */
		street: string;

		/**
		 * Standard Values: HOME, WORK
		 * Required
		 */
		type: string;

		/**
		 * ZIP code
		 * Required
		 */
		zip: string;
	}
	export interface AddressFormProperties {

		/**
		 * City name
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * Full country name
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Two-letter country abbreviation
		 * Required
		 */
		country_code: FormControl<string | null | undefined>,

		/**
		 * State abbreviation
		 * Required
		 */
		state: FormControl<string | null | undefined>,

		/**
		 * Street number and name
		 * Required
		 */
		street: FormControl<string | null | undefined>,

		/**
		 * Standard Values: HOME, WORK
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * ZIP code
		 * Required
		 */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Application_Settings {

		/**
		 * Backoff delay for a failed callback in milliseconds
		 * This setting is used to configure the amount of time the backoff delays before retrying a failed callback. The backoff delay increases linearly by this value each time a callback fails to get a HTTPS 200 OK response. The backoff delay is capped by the max_callback_backoff_delay_ms setting.
		 */
		callback_backoff_delay_ms?: string | null;

		/** Stores callbacks on disk until they are successfully acknowledged by the Webhook or not. Restart required. */
		callback_persist?: boolean | null;

		/** Multiconnect: Interval of the Master node monitoring of Coreapp nodes in seconds */
		heartbeat_interval?: number | null;

		/** Maximum delay for a failed callback in milliseconds */
		max_callback_backoff_delay_ms?: string | null;
		media?: Media;

		/** Set to valid WhatsApp Group with users who wish to see alerts for critical errors and messages. */
		on_call_pager?: string | null;

		/**
		 * When true, removes messages from the local database after they are delivered to or read by the recipient. When false, saves all messages on local storage until they are explicitly deleted.
		 * When messages are sent, they are stored in a local database. This database is used as the application's history. Since the business keeps its own history, you can specify whether you want message pass_through or not. Restart required.
		 */
		pass_through?: boolean | null;

		/** Receive a notification that a message is sent to server. When true, you will receive a message indicating that a message has been sent. If false (default), you will not receive notification. */
		sent_status?: boolean | null;

		/** Multiconnect: Maximum amount of seconds a Master node waits for a Coreapp node to respond to a heartbeat before considering it unhealthy and starting the failover process. */
		unhealthy_interval?: number | null;
		webhooks?: Webhooks;
	}
	export interface Application_SettingsFormProperties {

		/**
		 * Backoff delay for a failed callback in milliseconds
		 * This setting is used to configure the amount of time the backoff delays before retrying a failed callback. The backoff delay increases linearly by this value each time a callback fails to get a HTTPS 200 OK response. The backoff delay is capped by the max_callback_backoff_delay_ms setting.
		 */
		callback_backoff_delay_ms: FormControl<string | null | undefined>,

		/** Stores callbacks on disk until they are successfully acknowledged by the Webhook or not. Restart required. */
		callback_persist: FormControl<boolean | null | undefined>,

		/** Multiconnect: Interval of the Master node monitoring of Coreapp nodes in seconds */
		heartbeat_interval: FormControl<number | null | undefined>,

		/** Maximum delay for a failed callback in milliseconds */
		max_callback_backoff_delay_ms: FormControl<string | null | undefined>,

		/** Set to valid WhatsApp Group with users who wish to see alerts for critical errors and messages. */
		on_call_pager: FormControl<string | null | undefined>,

		/**
		 * When true, removes messages from the local database after they are delivered to or read by the recipient. When false, saves all messages on local storage until they are explicitly deleted.
		 * When messages are sent, they are stored in a local database. This database is used as the application's history. Since the business keeps its own history, you can specify whether you want message pass_through or not. Restart required.
		 */
		pass_through: FormControl<boolean | null | undefined>,

		/** Receive a notification that a message is sent to server. When true, you will receive a message indicating that a message has been sent. If false (default), you will not receive notification. */
		sent_status: FormControl<boolean | null | undefined>,

		/** Multiconnect: Maximum amount of seconds a Master node waits for a Coreapp node to respond to a heartbeat before considering it unhealthy and starting the failover process. */
		unhealthy_interval: FormControl<number | null | undefined>,
	}
	export function CreateApplication_SettingsFormGroup() {
		return new FormGroup<Application_SettingsFormProperties>({
			callback_backoff_delay_ms: new FormControl<string | null | undefined>(undefined),
			callback_persist: new FormControl<boolean | null | undefined>(undefined),
			heartbeat_interval: new FormControl<number | null | undefined>(undefined),
			max_callback_backoff_delay_ms: new FormControl<string | null | undefined>(undefined),
			on_call_pager: new FormControl<string | null | undefined>(undefined),
			pass_through: new FormControl<boolean | null | undefined>(undefined),
			sent_status: new FormControl<boolean | null | undefined>(undefined),
			unhealthy_interval: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Media {

		/**
		 * An array specifying which types of media to automatically download.
		 * Required
		 */
		auto_download: Array<string>;
	}
	export interface MediaFormProperties {
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
		});

	}

	export interface Webhooks {

		/** Configures the maximum number of inflight callback requests that are sent out. Can be set to 6 (default), 12, 18, or 24. */
		max_concurrent_requests?: WebhooksMax_concurrent_requests;

		/** Inbound and outbound notifications are routed to this URL. A HTTPS-based endpoint is required; HTTP will not work. */
		url?: string | null;
	}
	export interface WebhooksFormProperties {

		/** Configures the maximum number of inflight callback requests that are sent out. Can be set to 6 (default), 12, 18, or 24. */
		max_concurrent_requests: FormControl<WebhooksMax_concurrent_requests | null | undefined>,

		/** Inbound and outbound notifications are routed to this URL. A HTTPS-based endpoint is required; HTTP will not work. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhooksFormGroup() {
		return new FormGroup<WebhooksFormProperties>({
			max_concurrent_requests: new FormControl<WebhooksMax_concurrent_requests | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WebhooksMax_concurrent_requests { _6 = 0, _12 = 1, _18 = 2, _24 = 3 }


	/** The media object containing audio */
	export interface Audio {
	}

	/** The media object containing audio */
	export interface AudioFormProperties {
	}
	export function CreateAudioFormGroup() {
		return new FormGroup<AudioFormProperties>({
		});

	}

	export interface AudioById {

		/** Required */
		id: string;
	}
	export interface AudioByIdFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAudioByIdFormGroup() {
		return new FormGroup<AudioByIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AudioByProvider {

		/** Required */
		link: string;

		/** Required */
		provider: Provider;
	}
	export interface AudioByProviderFormProperties {

		/** Required */
		link: FormControl<string | null | undefined>,
	}
	export function CreateAudioByProviderFormGroup() {
		return new FormGroup<AudioByProviderFormProperties>({
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Provider {

		/** Required */
		name: string;
	}
	export interface ProviderFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateProviderFormGroup() {
		return new FormGroup<ProviderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Backup_Settings {

		/** The data that has been backed up, encrypted for security. */
		data?: string | null;
	}
	export interface Backup_SettingsFormProperties {

		/** The data that has been backed up, encrypted for security. */
		data: FormControl<string | null | undefined>,
	}
	export function CreateBackup_SettingsFormGroup() {
		return new FormGroup<Backup_SettingsFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Backup_Settings_Request_Body {

		/**
		 * Used to encrypt backup data for security
		 * Required
		 */
		password: string;
	}
	export interface Backup_Settings_Request_BodyFormProperties {

		/**
		 * Used to encrypt backup data for security
		 * Required
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateBackup_Settings_Request_BodyFormGroup() {
		return new FormGroup<Backup_Settings_Request_BodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Save the data value as that will be used along with your password to restore the information. */
	export interface Backup_Settings_Response {
		settings?: Backup_Settings;
	}

	/** Save the data value as that will be used along with your password to restore the information. */
	export interface Backup_Settings_ResponseFormProperties {
	}
	export function CreateBackup_Settings_ResponseFormGroup() {
		return new FormGroup<Backup_Settings_ResponseFormProperties>({
		});

	}

	export interface Basic {
		password?: string | null;
		username?: string | null;
	}
	export interface BasicFormProperties {
		password: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateBasicFormGroup() {
		return new FormGroup<BasicFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Business_Profile {

		/**
		 * Address of the business
		 * Maximum of 256 characters
		 * Required
		 */
		address: string;

		/**
		 * Description of the business
		 * Maximum of 256 characters
		 * Required
		 */
		description: string;

		/**
		 * Email address to contact the business
		 * Maximum of 128 characters
		 * Required
		 */
		email: string;

		/**
		 * Industry of the business
		 * Maximum of 128 characters
		 * Required
		 */
		vertical: string;

		/**
		 * URLs associated with business (e.g., website, Facebook page, Instagram)
		 * Maximum of 2 websites with a maximum of 256 characters each
		 * Required
		 */
		websites: Array<string>;
	}
	export interface Business_ProfileFormProperties {

		/**
		 * Address of the business
		 * Maximum of 256 characters
		 * Required
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * Description of the business
		 * Maximum of 256 characters
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Email address to contact the business
		 * Maximum of 128 characters
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Industry of the business
		 * Maximum of 128 characters
		 * Required
		 */
		vertical: FormControl<string | null | undefined>,
	}
	export function CreateBusiness_ProfileFormGroup() {
		return new FormGroup<Business_ProfileFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vertical: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Business_Settings {
		business?: Business_Settings_Business;
	}
	export interface Business_SettingsFormProperties {
	}
	export function CreateBusiness_SettingsFormGroup() {
		return new FormGroup<Business_SettingsFormProperties>({
		});

	}

	export interface Business_Settings_Business {
		profile?: Business_Profile;
	}
	export interface Business_Settings_BusinessFormProperties {
	}
	export function CreateBusiness_Settings_BusinessFormGroup() {
		return new FormGroup<Business_Settings_BusinessFormProperties>({
		});

	}

	export interface Check_Contact {

		/** The value you sent in the contacts field of the JSON request. */
		input?: string | null;

		/** Status of the user. */
		status?: Check_ContactStatus | null;

		/** WhatsApp user identifier that can be used in other API calls. Only returned if the status is valid. */
		wa_id?: string | null;
	}
	export interface Check_ContactFormProperties {

		/** The value you sent in the contacts field of the JSON request. */
		input: FormControl<string | null | undefined>,

		/** Status of the user. */
		status: FormControl<Check_ContactStatus | null | undefined>,

		/** WhatsApp user identifier that can be used in other API calls. Only returned if the status is valid. */
		wa_id: FormControl<string | null | undefined>,
	}
	export function CreateCheck_ContactFormGroup() {
		return new FormGroup<Check_ContactFormProperties>({
			input: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<Check_ContactStatus | null | undefined>(undefined),
			wa_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Check_ContactStatus { processing = 0, valid = 1, invalid = 2 }

	export interface Check_Contact_Request_Body {

		/** Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous). */
		blocking?: Check_Contact_Request_BodyBlocking | null;

		/**
		 * Array of contact phone numbers. The numbers can be in any standard telephone number format.
		 * Required
		 */
		contacts: Array<string>;
	}
	export interface Check_Contact_Request_BodyFormProperties {

		/** Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous). */
		blocking: FormControl<Check_Contact_Request_BodyBlocking | null | undefined>,
	}
	export function CreateCheck_Contact_Request_BodyFormGroup() {
		return new FormGroup<Check_Contact_Request_BodyFormProperties>({
			blocking: new FormControl<Check_Contact_Request_BodyBlocking | null | undefined>(undefined),
		});

	}

	export enum Check_Contact_Request_BodyBlocking { no_wait = 0, wait = 1 }

	export interface Check_Contact_Response {
	}
	export interface Check_Contact_ResponseFormProperties {
	}
	export function CreateCheck_Contact_ResponseFormGroup() {
		return new FormGroup<Check_Contact_ResponseFormProperties>({
		});

	}

	export interface Check_Health_Response {
		health?: Gateway_Status;
	}
	export interface Check_Health_ResponseFormProperties {
		health: FormControl<Gateway_Status | null | undefined>,
	}
	export function CreateCheck_Health_ResponseFormGroup() {
		return new FormGroup<Check_Health_ResponseFormProperties>({
			health: new FormControl<Gateway_Status | null | undefined>(undefined),
		});

	}

	export enum Gateway_Status { connected = 0, connecting = 1, disconnected = 2, uninitialized = 3, unregistered = 4 }

	export interface Config {
	}
	export interface ConfigFormProperties {
	}
	export function CreateConfigFormGroup() {
		return new FormGroup<ConfigFormProperties>({
		});

	}

	export interface Config_Basic {
		basic?: Basic;
	}
	export interface Config_BasicFormProperties {
	}
	export function CreateConfig_BasicFormGroup() {
		return new FormGroup<Config_BasicFormProperties>({
		});

	}

	export interface Config_Bearer {

		/** Required */
		bearer: string;
	}
	export interface Config_BearerFormProperties {

		/** Required */
		bearer: FormControl<string | null | undefined>,
	}
	export function CreateConfig_BearerFormGroup() {
		return new FormGroup<Config_BearerFormProperties>({
			bearer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Contact {

		/** Full contact address(es) */
		addresses?: Array<Address>;

		/** YYYY-MM-DD formatted string */
		birthday?: string | null;

		/** Contact email address(es) */
		emails?: Array<Email>;
		ims?: Array<string>;

		/** Full contact name */
		name?: Name;

		/** Contact organization information */
		org?: Org;

		/** Contact phone number(s) */
		phones?: Array<Phone>;

		/** Contact URL(s) */
		urls?: Array<Url>;
	}
	export interface ContactFormProperties {

		/** YYYY-MM-DD formatted string */
		birthday: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			birthday: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Email {

		/** Required */
		email: string;

		/** Required */
		type: string;
	}
	export interface EmailFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEmailFormGroup() {
		return new FormGroup<EmailFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Full contact name */
	export interface Name {

		/** First name */
		first_name?: string | null;

		/**
		 * Full name as it normally appears
		 * Required
		 */
		formatted_name: string;

		/** Last name */
		last_name?: string | null;

		/** Name preffix */
		prefix?: string | null;

		/** Name suffix */
		suffix?: string | null;
	}

	/** Full contact name */
	export interface NameFormProperties {

		/** First name */
		first_name: FormControl<string | null | undefined>,

		/**
		 * Full name as it normally appears
		 * Required
		 */
		formatted_name: FormControl<string | null | undefined>,

		/** Last name */
		last_name: FormControl<string | null | undefined>,

		/** Name preffix */
		prefix: FormControl<string | null | undefined>,

		/** Name suffix */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateNameFormGroup() {
		return new FormGroup<NameFormProperties>({
			first_name: new FormControl<string | null | undefined>(undefined),
			formatted_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_name: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contact organization information */
	export interface Org {

		/**
		 * Name of the contact's company
		 * Required
		 */
		company: string;

		/** Name of the contact's department */
		department?: string | null;

		/** Contact's business title */
		title?: string | null;
	}

	/** Contact organization information */
	export interface OrgFormProperties {

		/**
		 * Name of the contact's company
		 * Required
		 */
		company: FormControl<string | null | undefined>,

		/** Name of the contact's department */
		department: FormControl<string | null | undefined>,

		/** Contact's business title */
		title: FormControl<string | null | undefined>,
	}
	export function CreateOrgFormGroup() {
		return new FormGroup<OrgFormProperties>({
			company: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			department: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Phone {
		phone?: string | null;

		/** Standard Values: CELL, MAIN, IPHONE, HOME, WORK */
		type?: string | null;

		/** WhatsApp ID */
		wa_id?: string | null;
	}
	export interface PhoneFormProperties {
		phone: FormControl<string | null | undefined>,

		/** Standard Values: CELL, MAIN, IPHONE, HOME, WORK */
		type: FormControl<string | null | undefined>,

		/** WhatsApp ID */
		wa_id: FormControl<string | null | undefined>,
	}
	export function CreatePhoneFormGroup() {
		return new FormGroup<PhoneFormProperties>({
			phone: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			wa_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Standard Values: HOME, WORK */
	export interface Url {

		/** Standard Values: HOME, WORK */
		type?: string | null;

		/** URL */
		url?: string | null;
	}

	/** Standard Values: HOME, WORK */
	export interface UrlFormProperties {

		/** Standard Values: HOME, WORK */
		type: FormControl<string | null | undefined>,

		/** URL */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUrlFormGroup() {
		return new FormGroup<UrlFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Create_Group_Request_Body {

		/** Required */
		subject: string;
	}
	export interface Create_Group_Request_BodyFormProperties {

		/** Required */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateCreate_Group_Request_BodyFormGroup() {
		return new FormGroup<Create_Group_Request_BodyFormProperties>({
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Create_User_Request_Body {

		/**
		 * username
		 * Required
		 */
		password: string;

		/**
		 * password
		 * Required
		 */
		username: string;
	}
	export interface Create_User_Request_BodyFormProperties {

		/**
		 * username
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * password
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCreate_User_Request_BodyFormGroup() {
		return new FormGroup<Create_User_Request_BodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Currency {

		/** Required */
		amount_1000: number;

		/** Required */
		currency_code: string;
	}
	export interface CurrencyFormProperties {

		/** Required */
		amount_1000: FormControl<number | null | undefined>,

		/** Required */
		currency_code: FormControl<string | null | undefined>,
	}
	export function CreateCurrencyFormGroup() {
		return new FormGroup<CurrencyFormProperties>({
			amount_1000: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currency_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Date/time by component */
	export interface Date_Time_Component {

		/** The day of month */
		day_of_month?: number | null;

		/** Both strings and numbers are accepted. If different from the value derived from the date (if specified), use the derived value. */
		day_of_week?: Date_Time_ComponentDay_of_week;

		/** The hour */
		hour?: number | null;

		/** The minute */
		minute?: number | null;

		/** The month */
		month?: number | null;

		/** The year */
		year?: number | null;
	}

	/** Date/time by component */
	export interface Date_Time_ComponentFormProperties {

		/** The day of month */
		day_of_month: FormControl<number | null | undefined>,

		/** Both strings and numbers are accepted. If different from the value derived from the date (if specified), use the derived value. */
		day_of_week: FormControl<Date_Time_ComponentDay_of_week | null | undefined>,

		/** The hour */
		hour: FormControl<number | null | undefined>,

		/** The minute */
		minute: FormControl<number | null | undefined>,

		/** The month */
		month: FormControl<number | null | undefined>,

		/** The year */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDate_Time_ComponentFormGroup() {
		return new FormGroup<Date_Time_ComponentFormProperties>({
			day_of_month: new FormControl<number | null | undefined>(undefined),
			day_of_week: new FormControl<Date_Time_ComponentDay_of_week | null | undefined>(undefined),
			hour: new FormControl<number | null | undefined>(undefined),
			minute: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Date_Time_ComponentDay_of_week { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _6 = 5, _7 = 6 }


	/** The Whatsapp Business API Client will attempt to format the date/time based on a specified localization. */
	export interface Date_Time_Object {

		/** Date/time by component */
		component?: Date_Time_Component;

		/** Date/time by Unix epoch */
		unix_epoch?: Date_Time_Unix_Epoch;
	}

	/** The Whatsapp Business API Client will attempt to format the date/time based on a specified localization. */
	export interface Date_Time_ObjectFormProperties {
	}
	export function CreateDate_Time_ObjectFormGroup() {
		return new FormGroup<Date_Time_ObjectFormProperties>({
		});

	}


	/** Date/time by Unix epoch */
	export interface Date_Time_Unix_Epoch {

		/** Epoch timestamp in seconds */
		timestamp?: number | null;
	}

	/** Date/time by Unix epoch */
	export interface Date_Time_Unix_EpochFormProperties {

		/** Epoch timestamp in seconds */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateDate_Time_Unix_EpochFormGroup() {
		return new FormGroup<Date_Time_Unix_EpochFormProperties>({
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Detailed_User_Response {
	}
	export interface Detailed_User_ResponseFormProperties {
	}
	export function CreateDetailed_User_ResponseFormGroup() {
		return new FormGroup<Detailed_User_ResponseFormProperties>({
		});

	}

	export interface Detailed_User_Response_Item {
		ROLES?: Detailed_User_Response_ItemROLES | null;
		username?: string | null;
	}
	export interface Detailed_User_Response_ItemFormProperties {
		ROLES: FormControl<Detailed_User_Response_ItemROLES | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateDetailed_User_Response_ItemFormGroup() {
		return new FormGroup<Detailed_User_Response_ItemFormProperties>({
			ROLES: new FormControl<Detailed_User_Response_ItemROLES | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Detailed_User_Response_ItemROLES { ROLE_ADMIN = 0, ROLE_USER = 1 }


	/** The media object containing a document */
	export interface Document {
	}

	/** The media object containing a document */
	export interface DocumentFormProperties {
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
		});

	}

	export interface DocumentById {

		/** Required */
		caption: string;

		/** Required */
		filename: string;

		/** Required */
		id: string;
	}
	export interface DocumentByIdFormProperties {

		/** Required */
		caption: FormControl<string | null | undefined>,

		/** Required */
		filename: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDocumentByIdFormGroup() {
		return new FormGroup<DocumentByIdFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DocumentByProvider {

		/** Required */
		caption: string;

		/** Required */
		filename: string;

		/** Required */
		link: string;

		/** Required */
		provider: Provider;
	}
	export interface DocumentByProviderFormProperties {

		/** Required */
		caption: FormControl<string | null | undefined>,

		/** Required */
		filename: FormControl<string | null | undefined>,

		/** Required */
		link: FormControl<string | null | undefined>,
	}
	export function CreateDocumentByProviderFormGroup() {
		return new FormGroup<DocumentByProviderFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Enable_Two_Step_Request_Body {

		/** Required */
		pin: string;
	}
	export interface Enable_Two_Step_Request_BodyFormProperties {

		/** Required */
		pin: FormControl<string | null | undefined>,
	}
	export function CreateEnable_Two_Step_Request_BodyFormGroup() {
		return new FormGroup<Enable_Two_Step_Request_BodyFormProperties>({
			pin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {

		/** See the https://developers.facebook.com/docs/whatsapp/api/errors for more information. */
		code?: number | null;

		/** error detail */
		details?: string | null;

		/** location for error detail */
		href?: string | null;

		/** error title */
		title?: string | null;
	}
	export interface ErrorFormProperties {

		/** See the https://developers.facebook.com/docs/whatsapp/api/errors for more information. */
		code: FormControl<number | null | undefined>,

		/** error detail */
		details: FormControl<string | null | undefined>,

		/** location for error detail */
		href: FormControl<string | null | undefined>,

		/** error title */
		title: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gateway_Node_Status {
		gateway_status?: string | null;
		role?: Gateway_Node_StatusRole | null;
	}
	export interface Gateway_Node_StatusFormProperties {
		gateway_status: FormControl<string | null | undefined>,
		role: FormControl<Gateway_Node_StatusRole | null | undefined>,
	}
	export function CreateGateway_Node_StatusFormGroup() {
		return new FormGroup<Gateway_Node_StatusFormProperties>({
			gateway_status: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<Gateway_Node_StatusRole | null | undefined>(undefined),
		});

	}

	export enum Gateway_Node_StatusRole { primary_master = 0, secondary_master = 1, coreapp = 2 }

	export interface Get_Business_Profile_Response {
	}
	export interface Get_Business_Profile_ResponseFormProperties {
	}
	export function CreateGet_Business_Profile_ResponseFormGroup() {
		return new FormGroup<Get_Business_Profile_ResponseFormProperties>({
		});

	}

	export interface Get_Media_Providers_Response {
	}
	export interface Get_Media_Providers_ResponseFormProperties {
	}
	export function CreateGet_Media_Providers_ResponseFormGroup() {
		return new FormGroup<Get_Media_Providers_ResponseFormProperties>({
		});

	}

	export interface Get_Profile_About_Response {
		settings?: Profile_About_Settings;
	}
	export interface Get_Profile_About_ResponseFormProperties {
	}
	export function CreateGet_Profile_About_ResponseFormGroup() {
		return new FormGroup<Get_Profile_About_ResponseFormProperties>({
		});

	}

	export interface Profile_About_Settings {
		profile?: Profile_About_Settings_Profile;
	}
	export interface Profile_About_SettingsFormProperties {
	}
	export function CreateProfile_About_SettingsFormGroup() {
		return new FormGroup<Profile_About_SettingsFormProperties>({
		});

	}

	export interface Profile_About_Settings_Profile {
		about?: Profile_About;
	}
	export interface Profile_About_Settings_ProfileFormProperties {
	}
	export function CreateProfile_About_Settings_ProfileFormGroup() {
		return new FormGroup<Profile_About_Settings_ProfileFormProperties>({
		});

	}

	export interface Profile_About {

		/**
		 * Text to display in your profile's About section
		 * The max length for the string is 139 characters.
		 * Required
		 */
		text: string;
	}
	export interface Profile_AboutFormProperties {

		/**
		 * Text to display in your profile's About section
		 * The max length for the string is 139 characters.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateProfile_AboutFormGroup() {
		return new FormGroup<Profile_AboutFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Get_Profile_Photo_Response {
		settings?: Profile_Photo_Settings;
	}
	export interface Get_Profile_Photo_ResponseFormProperties {
	}
	export function CreateGet_Profile_Photo_ResponseFormGroup() {
		return new FormGroup<Get_Profile_Photo_ResponseFormProperties>({
		});

	}

	export interface Profile_Photo_Settings {
		profile?: Profile_Photo_SettingsProfile;
	}
	export interface Profile_Photo_SettingsFormProperties {
	}
	export function CreateProfile_Photo_SettingsFormGroup() {
		return new FormGroup<Profile_Photo_SettingsFormProperties>({
		});

	}

	export interface Profile_Photo_SettingsProfile {
		photo?: Profile_Photo_SettingsProfilePhoto;
	}
	export interface Profile_Photo_SettingsProfileFormProperties {
	}
	export function CreateProfile_Photo_SettingsProfileFormGroup() {
		return new FormGroup<Profile_Photo_SettingsProfileFormProperties>({
		});

	}

	export interface Profile_Photo_SettingsProfilePhoto {
		link?: string | null;
	}
	export interface Profile_Photo_SettingsProfilePhotoFormProperties {
		link: FormControl<string | null | undefined>,
	}
	export function CreateProfile_Photo_SettingsProfilePhotoFormGroup() {
		return new FormGroup<Profile_Photo_SettingsProfilePhotoFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Group {

		/** timestamp */
		creation_time?: number | null;
		id?: string | null;
	}
	export interface GroupFormProperties {

		/** timestamp */
		creation_time: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			creation_time: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Group_Admin_Request_Body {

		/**
		 * The WhatsApp IDs of the people to be added or removed as group admins
		 * Required
		 */
		wa_ids: Array<string>;
	}
	export interface Group_Admin_Request_BodyFormProperties {
	}
	export function CreateGroup_Admin_Request_BodyFormGroup() {
		return new FormGroup<Group_Admin_Request_BodyFormProperties>({
		});

	}

	export interface Group_Info {

		/**
		 * Group administrators
		 * Lists IDs of the creator of the group and any administrators added
		 */
		admins?: Array<string>;

		/** Group creation time */
		creation_time?: number | null;

		/** ID of the creator of this group */
		creator?: string | null;

		/**
		 * Participants of the group
		 * This is an array of all the IDs of the participants in the group. Initially, this will be the creator of the group.
		 */
		participants?: Array<string>;

		/** Subject of the group */
		subject?: string | null;
	}
	export interface Group_InfoFormProperties {

		/** Group creation time */
		creation_time: FormControl<number | null | undefined>,

		/** ID of the creator of this group */
		creator: FormControl<string | null | undefined>,

		/** Subject of the group */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateGroup_InfoFormGroup() {
		return new FormGroup<Group_InfoFormProperties>({
			creation_time: new FormControl<number | null | undefined>(undefined),
			creator: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Group_Invite {
		link?: string | null;
	}
	export interface Group_InviteFormProperties {
		link: FormControl<string | null | undefined>,
	}
	export function CreateGroup_InviteFormGroup() {
		return new FormGroup<Group_InviteFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Group_Invite_Response {
	}
	export interface Group_Invite_ResponseFormProperties {
	}
	export function CreateGroup_Invite_ResponseFormGroup() {
		return new FormGroup<Group_Invite_ResponseFormProperties>({
		});

	}

	export interface Group_Response {
	}
	export interface Group_ResponseFormProperties {
	}
	export function CreateGroup_ResponseFormGroup() {
		return new FormGroup<Group_ResponseFormProperties>({
		});

	}

	export interface Groups_Response {
	}
	export interface Groups_ResponseFormProperties {
	}
	export function CreateGroups_ResponseFormGroup() {
		return new FormGroup<Groups_ResponseFormProperties>({
		});

	}


	/** The containing element for the message content — Indicates that the message is highly structured. Parameters contained within provide the structure. */
	export interface Hsm {

		/**
		 * The element name that indicates which template to use within the namespace
		 * Required
		 */
		element_name: string;

		/** Required */
		language: Language;

		/**
		 * This field is an array of values to apply to variables in the template
		 * Required
		 */
		localizable_params: Array<LocalizableParam>;

		/**
		 * The namespace that will be used
		 * Required
		 */
		namespace: string;
	}

	/** The containing element for the message content — Indicates that the message is highly structured. Parameters contained within provide the structure. */
	export interface HsmFormProperties {

		/**
		 * The element name that indicates which template to use within the namespace
		 * Required
		 */
		element_name: FormControl<string | null | undefined>,

		/**
		 * The namespace that will be used
		 * Required
		 */
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateHsmFormGroup() {
		return new FormGroup<HsmFormProperties>({
			element_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Language {

		/**
		 * The code of the language or locale to use — Accepts both language and language_locale formats (e.g., en and en_US).
		 * Required
		 */
		code: string;

		/**
		 * The language policy the message should follow
		 * Required
		 */
		policy: LanguagePolicy;
	}
	export interface LanguageFormProperties {

		/**
		 * The code of the language or locale to use — Accepts both language and language_locale formats (e.g., en and en_US).
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * The language policy the message should follow
		 * Required
		 */
		policy: FormControl<LanguagePolicy | null | undefined>,
	}
	export function CreateLanguageFormGroup() {
		return new FormGroup<LanguageFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policy: new FormControl<LanguagePolicy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LanguagePolicy { fallback = 0, deterministic = 1 }

	export interface LocalizableParam {
		currency?: Currency;

		/** The Whatsapp Business API Client will attempt to format the date/time based on a specified localization. */
		date_time?: Date_Time_Object;

		/**
		 * Default text if localization fails
		 * Required
		 */
		default: string;
	}
	export interface LocalizableParamFormProperties {

		/**
		 * Default text if localization fails
		 * Required
		 */
		default: FormControl<string | null | undefined>,
	}
	export function CreateLocalizableParamFormGroup() {
		return new FormGroup<LocalizableParamFormProperties>({
			default: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The media object containing an image */
	export interface Image {
	}

	/** The media object containing an image */
	export interface ImageFormProperties {
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
		});

	}

	export interface ImageById {

		/** Required */
		caption: string;

		/** Required */
		id: string;
	}
	export interface ImageByIdFormProperties {

		/** Required */
		caption: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateImageByIdFormGroup() {
		return new FormGroup<ImageByIdFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImageByProvider {

		/** Required */
		caption: string;

		/** Required */
		link: string;

		/** Required */
		provider: Provider;
	}
	export interface ImageByProviderFormProperties {

		/** Required */
		caption: FormControl<string | null | undefined>,

		/** Required */
		link: FormControl<string | null | undefined>,
	}
	export function CreateImageByProviderFormGroup() {
		return new FormGroup<ImageByProviderFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Location {

		/**
		 * Address of the location. Only displayed if name is present.
		 * Required
		 */
		address: string;

		/**
		 * Latitude of the location
		 * Required
		 */
		latitude: string;

		/**
		 * Longitude of the location
		 * Required
		 */
		longitude: string;

		/**
		 * Name of the location
		 * Required
		 */
		name: string;
	}
	export interface LocationFormProperties {

		/**
		 * Address of the location. Only displayed if name is present.
		 * Required
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * Latitude of the location
		 * Required
		 */
		latitude: FormControl<string | null | undefined>,

		/**
		 * Longitude of the location
		 * Required
		 */
		longitude: FormControl<string | null | undefined>,

		/**
		 * Name of the location
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Login_Admin_Request_Body {

		/** Required */
		new_password: string;
	}
	export interface Login_Admin_Request_BodyFormProperties {

		/** Required */
		new_password: FormControl<string | null | undefined>,
	}
	export function CreateLogin_Admin_Request_BodyFormGroup() {
		return new FormGroup<Login_Admin_Request_BodyFormProperties>({
			new_password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Mark_Message_As_Read_Request_Body {

		/** Required */
		status: string;
	}
	export interface Mark_Message_As_Read_Request_BodyFormProperties {

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateMark_Message_As_Read_Request_BodyFormGroup() {
		return new FormGroup<Mark_Message_As_Read_Request_BodyFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Media_Provider {
		config?: Config;

		/** The name for the provider */
		name?: string | null;

		/** The type of provider */
		type?: string | null;
	}
	export interface Media_ProviderFormProperties {

		/** The name for the provider */
		name: FormControl<string | null | undefined>,

		/** The type of provider */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMedia_ProviderFormGroup() {
		return new FormGroup<Media_ProviderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Media_Provider_Settings {
		application?: Media_Provider_Settings_Application;
	}
	export interface Media_Provider_SettingsFormProperties {
	}
	export function CreateMedia_Provider_SettingsFormGroup() {
		return new FormGroup<Media_Provider_SettingsFormProperties>({
		});

	}

	export interface Media_Provider_Settings_Application {
		media?: Media_Provider_Settings_Application_Media;
	}
	export interface Media_Provider_Settings_ApplicationFormProperties {
	}
	export function CreateMedia_Provider_Settings_ApplicationFormGroup() {
		return new FormGroup<Media_Provider_Settings_ApplicationFormProperties>({
		});

	}

	export interface Media_Provider_Settings_Application_Media {
		providers?: Array<Media_Provider>;
	}
	export interface Media_Provider_Settings_Application_MediaFormProperties {
	}
	export function CreateMedia_Provider_Settings_Application_MediaFormGroup() {
		return new FormGroup<Media_Provider_Settings_Application_MediaFormProperties>({
		});

	}

	export interface Message {
		id?: string | null;
	}
	export interface MessageFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Message_Context {

		/** Sender Whatsapp id of context-message */
		from?: string | null;

		/** GroupId of context message */
		group_id?: string | null;

		/** message id */
		id?: string | null;

		/** Whats app ids */
		mentions?: Array<string>;
	}
	export interface Message_ContextFormProperties {

		/** Sender Whatsapp id of context-message */
		from: FormControl<string | null | undefined>,

		/** GroupId of context message */
		group_id: FormControl<string | null | undefined>,

		/** message id */
		id: FormControl<string | null | undefined>,
	}
	export function CreateMessage_ContextFormGroup() {
		return new FormGroup<Message_ContextFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			group_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Message_Response {
	}
	export interface Message_ResponseFormProperties {
	}
	export function CreateMessage_ResponseFormGroup() {
		return new FormGroup<Message_ResponseFormProperties>({
		});

	}


	/** type of the message */
	export enum Message_Type { audio = 0, contacts = 1, document = 2, hsm = 3, image = 4, location = 5, text = 6, video = 7, voice = 8, unknown = 9 }


	/** Contains generic information such as WhatsApp Business API Client version. */
	export interface Meta {
		api_status?: MetaApi_status | null;
		version?: string | null;
	}

	/** Contains generic information such as WhatsApp Business API Client version. */
	export interface MetaFormProperties {
		api_status: FormControl<MetaApi_status | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			api_status: new FormControl<MetaApi_status | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MetaApi_status { deprecated = 0, experimental = 1, stable = 2 }

	export interface Profile_Photo_Settings_Profile {
		photo?: Profile_Photo_Settings_Profile_Photo;
	}
	export interface Profile_Photo_Settings_ProfileFormProperties {
	}
	export function CreateProfile_Photo_Settings_ProfileFormGroup() {
		return new FormGroup<Profile_Photo_Settings_ProfileFormProperties>({
		});

	}

	export interface Profile_Photo_Settings_Profile_Photo {
		link?: string | null;
	}
	export interface Profile_Photo_Settings_Profile_PhotoFormProperties {
		link: FormControl<string | null | undefined>,
	}
	export function CreateProfile_Photo_Settings_Profile_PhotoFormGroup() {
		return new FormGroup<Profile_Photo_Settings_Profile_PhotoFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Register_Account_Request_Body {

		/** Required */
		code: string;
	}
	export interface Register_Account_Request_BodyFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,
	}
	export function CreateRegister_Account_Request_BodyFormGroup() {
		return new FormGroup<Register_Account_Request_BodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Remove_Group_Participant_Request_Body {

		/** Required */
		wa_ids: Array<string>;
	}
	export interface Remove_Group_Participant_Request_BodyFormProperties {
	}
	export function CreateRemove_Group_Participant_Request_BodyFormGroup() {
		return new FormGroup<Remove_Group_Participant_Request_BodyFormProperties>({
		});

	}

	export interface Request_Code_Account {
		vname?: string | null;
	}
	export interface Request_Code_AccountFormProperties {
		vname: FormControl<string | null | undefined>,
	}
	export function CreateRequest_Code_AccountFormGroup() {
		return new FormGroup<Request_Code_AccountFormProperties>({
			vname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Request_Code_Request_Body {

		/**
		 * Numerical country code for the phone number you are registering
		 * Required
		 */
		cc: string;

		/**
		 * Base64-encoded Verified Name certificate
		 * Required
		 */
		cert: string;

		/**
		 * Method of receiving your registration code
		 * Required
		 */
		method: Request_Code_Request_BodyMethod;

		/**
		 * Phone number you are registering, without the country code or plus symbol (+)
		 * Required
		 */
		phone_number: string;

		/** Existing 6-digit PIN — This is only required when two-factor verification is enabled on this account. */
		pin?: string | null;
	}
	export interface Request_Code_Request_BodyFormProperties {

		/**
		 * Numerical country code for the phone number you are registering
		 * Required
		 */
		cc: FormControl<string | null | undefined>,

		/**
		 * Base64-encoded Verified Name certificate
		 * Required
		 */
		cert: FormControl<string | null | undefined>,

		/**
		 * Method of receiving your registration code
		 * Required
		 */
		method: FormControl<Request_Code_Request_BodyMethod | null | undefined>,

		/**
		 * Phone number you are registering, without the country code or plus symbol (+)
		 * Required
		 */
		phone_number: FormControl<string | null | undefined>,

		/** Existing 6-digit PIN — This is only required when two-factor verification is enabled on this account. */
		pin: FormControl<string | null | undefined>,
	}
	export function CreateRequest_Code_Request_BodyFormGroup() {
		return new FormGroup<Request_Code_Request_BodyFormProperties>({
			cc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cert: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<Request_Code_Request_BodyMethod | null | undefined>(undefined, [Validators.required]),
			phone_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Request_Code_Request_BodyMethod { sms = 0, voice = 1 }

	export interface Request_Code_Response {
		account?: Array<Request_Code_Account>;
	}
	export interface Request_Code_ResponseFormProperties {
	}
	export function CreateRequest_Code_ResponseFormGroup() {
		return new FormGroup<Request_Code_ResponseFormProperties>({
		});

	}

	export interface Response {

		/** Only returned with a failed request. Contains an array of error objects that are present when there is an error. */
		errors?: Array<Error>;

		/** Contains generic information such as WhatsApp Business API Client version. */
		meta?: Meta;
	}
	export interface ResponseFormProperties {
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
		});

	}

	export interface Restore_Settings_Request_Body {

		/**
		 * The data that was returned by the /v1/settings/backup API call
		 * Required
		 */
		data: string;

		/**
		 * The password you used in the /v1/settings/backup API call to encrypt the backup data
		 * Required
		 */
		password: string;
	}
	export interface Restore_Settings_Request_BodyFormProperties {

		/**
		 * The data that was returned by the /v1/settings/backup API call
		 * Required
		 */
		data: FormControl<string | null | undefined>,

		/**
		 * The password you used in the /v1/settings/backup API call to encrypt the backup data
		 * Required
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateRestore_Settings_Request_BodyFormGroup() {
		return new FormGroup<Restore_Settings_Request_BodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Send_Message_Request_Body {

		/** The media object containing audio */
		audio?: Audio;
		contacts?: Array<Contact>;

		/** The media object containing a document */
		document?: Document;

		/** The containing element for the message content — Indicates that the message is highly structured. Parameters contained within provide the structure. */
		hsm?: Hsm;

		/** The media object containing an image */
		image?: Image;
		location?: Location;

		/**
		 * Specifying preview_url in the request is optional when not including a URL in your message.
		 * To include a URL preview, set preview_url to true in the message body and make sure the URL begins with http:// or https://. For more information, see the Sending URLs in Text Messages section.
		 */
		preview_url?: boolean | null;

		/**
		 * Determines whether the recipient is an individual or a group
		 * Specifying recipient_type in the request is optional when the value is individual.
		 * However, recipient_type is required when using group. If sending a text message to a group, see the Sending Group Messages documentation.
		 */
		recipient_type?: Send_Message_Request_BodyRecipient_type | null;
		text?: Text;

		/**
		 * When recipient_type is individual, this field is the WhatsApp ID (phone number) returned from contacts endpoint. When recipient_type is group, this field is the WhatsApp group ID.
		 * Required
		 */
		to: string;
		ttl?: string | null;

		/** type of the message */
		type?: Message_Type | null;

		/** The media object containing a video */
		video?: Video;
	}
	export interface Send_Message_Request_BodyFormProperties {

		/**
		 * Specifying preview_url in the request is optional when not including a URL in your message.
		 * To include a URL preview, set preview_url to true in the message body and make sure the URL begins with http:// or https://. For more information, see the Sending URLs in Text Messages section.
		 */
		preview_url: FormControl<boolean | null | undefined>,

		/**
		 * Determines whether the recipient is an individual or a group
		 * Specifying recipient_type in the request is optional when the value is individual.
		 * However, recipient_type is required when using group. If sending a text message to a group, see the Sending Group Messages documentation.
		 */
		recipient_type: FormControl<Send_Message_Request_BodyRecipient_type | null | undefined>,

		/**
		 * When recipient_type is individual, this field is the WhatsApp ID (phone number) returned from contacts endpoint. When recipient_type is group, this field is the WhatsApp group ID.
		 * Required
		 */
		to: FormControl<string | null | undefined>,
		ttl: FormControl<string | null | undefined>,

		/** type of the message */
		type: FormControl<Message_Type | null | undefined>,
	}
	export function CreateSend_Message_Request_BodyFormGroup() {
		return new FormGroup<Send_Message_Request_BodyFormProperties>({
			preview_url: new FormControl<boolean | null | undefined>(undefined),
			recipient_type: new FormControl<Send_Message_Request_BodyRecipient_type | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ttl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<Message_Type | null | undefined>(undefined),
		});

	}

	export enum Send_Message_Request_BodyRecipient_type { individual = 0, group = 1 }

	export interface Text {

		/** Required */
		body: string;
	}
	export interface TextFormProperties {

		/** Required */
		body: FormControl<string | null | undefined>,
	}
	export function CreateTextFormGroup() {
		return new FormGroup<TextFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The media object containing a video */
	export interface Video {
	}

	/** The media object containing a video */
	export interface VideoFormProperties {
	}
	export function CreateVideoFormGroup() {
		return new FormGroup<VideoFormProperties>({
		});

	}

	export interface Set_Shards_Request_Body {

		/** Required */
		cc: string;

		/** Required */
		phone_number: string;

		/** Required */
		pin: string;

		/** Required */
		shards: Set_Shards_Request_BodyShards;
	}
	export interface Set_Shards_Request_BodyFormProperties {

		/** Required */
		cc: FormControl<string | null | undefined>,

		/** Required */
		phone_number: FormControl<string | null | undefined>,

		/** Required */
		pin: FormControl<string | null | undefined>,

		/** Required */
		shards: FormControl<Set_Shards_Request_BodyShards | null | undefined>,
	}
	export function CreateSet_Shards_Request_BodyFormGroup() {
		return new FormGroup<Set_Shards_Request_BodyFormProperties>({
			cc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shards: new FormControl<Set_Shards_Request_BodyShards | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Set_Shards_Request_BodyShards { _1 = 0, _2 = 1, _4 = 2, _8 = 3, _16 = 4, _32 = 5 }

	export interface Update_Group_Info_Request_Body {

		/** Required */
		subject: string;
	}
	export interface Update_Group_Info_Request_BodyFormProperties {

		/** Required */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateUpdate_Group_Info_Request_BodyFormGroup() {
		return new FormGroup<Update_Group_Info_Request_BodyFormProperties>({
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Update_User_Request_Body {

		/**
		 * password
		 * Required
		 */
		password: string;
	}
	export interface Update_User_Request_BodyFormProperties {

		/**
		 * password
		 * Required
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateUpdate_User_Request_BodyFormGroup() {
		return new FormGroup<Update_User_Request_BodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Upload_Media {
		id?: string | null;
	}
	export interface Upload_MediaFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpload_MediaFormGroup() {
		return new FormGroup<Upload_MediaFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Upload_Media_Response {
	}
	export interface Upload_Media_ResponseFormProperties {
	}
	export function CreateUpload_Media_ResponseFormGroup() {
		return new FormGroup<Upload_Media_ResponseFormProperties>({
		});

	}

	export interface User_Login_Response {
	}
	export interface User_Login_ResponseFormProperties {
	}
	export function CreateUser_Login_ResponseFormGroup() {
		return new FormGroup<User_Login_ResponseFormProperties>({
		});

	}

	export interface User_Login_Response_Item {

		/** Token expiration timestamp. By default, this is 7 days. */
		expires_after?: Date | null;

		/**
		 * Authentication token to be used for all other WhatsApp Business API calls. The token must be sent in the authorization header in the format:
		 * Authorization: Bearer <authentication-token>
		 */
		token?: string | null;
	}
	export interface User_Login_Response_ItemFormProperties {

		/** Token expiration timestamp. By default, this is 7 days. */
		expires_after: FormControl<Date | null | undefined>,

		/**
		 * Authentication token to be used for all other WhatsApp Business API calls. The token must be sent in the authorization header in the format:
		 * Authorization: Bearer <authentication-token>
		 */
		token: FormControl<string | null | undefined>,
	}
	export function CreateUser_Login_Response_ItemFormGroup() {
		return new FormGroup<User_Login_Response_ItemFormProperties>({
			expires_after: new FormControl<Date | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User_Response {
	}
	export interface User_ResponseFormProperties {
	}
	export function CreateUser_ResponseFormGroup() {
		return new FormGroup<User_ResponseFormProperties>({
		});

	}

	export interface User_Response_Item {
		username?: string | null;
	}
	export interface User_Response_ItemFormProperties {
		username: FormControl<string | null | undefined>,
	}
	export function CreateUser_Response_ItemFormGroup() {
		return new FormGroup<User_Response_ItemFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum User_Role { ROLE_ADMIN = 0, ROLE_USER = 1 }

	export interface VideoById {

		/** Required */
		caption: string;

		/** Required */
		id: string;
	}
	export interface VideoByIdFormProperties {

		/** Required */
		caption: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateVideoByIdFormGroup() {
		return new FormGroup<VideoByIdFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VideoByProvider {

		/** Required */
		caption: string;

		/** Required */
		link: string;

		/** Required */
		provider: Provider;
	}
	export interface VideoByProviderFormProperties {

		/** Required */
		caption: FormControl<string | null | undefined>,

		/** Required */
		link: FormControl<string | null | undefined>,
	}
	export function CreateVideoByProviderFormGroup() {
		return new FormGroup<VideoByProviderFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Webhook_Audio {

		/** Optional. Only present if specified. */
		caption?: string | null;

		/** Absolute filename and location on media volume. This parameter is deprecated. */
		file?: string | null;

		/** Filename on the sender's device. This will only be present in audio and document media messages. */
		filename?: string | null;

		/** ID of the media. Can be used to delete the media if stored locally on the client. */
		id?: string | null;
		link?: string | null;

		/** Mime type of media */
		mime_type?: string | null;

		/** Checksum */
		sha256?: string | null;
	}
	export interface Webhook_AudioFormProperties {

		/** Optional. Only present if specified. */
		caption: FormControl<string | null | undefined>,

		/** Absolute filename and location on media volume. This parameter is deprecated. */
		file: FormControl<string | null | undefined>,

		/** Filename on the sender's device. This will only be present in audio and document media messages. */
		filename: FormControl<string | null | undefined>,

		/** ID of the media. Can be used to delete the media if stored locally on the client. */
		id: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,

		/** Mime type of media */
		mime_type: FormControl<string | null | undefined>,

		/** Checksum */
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_AudioFormGroup() {
		return new FormGroup<Webhook_AudioFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			mime_type: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_Contact {
		profile?: Webhook_Contact_Profile;

		/** The WhatsApp ID of the contact */
		wa_id?: string | null;
	}
	export interface Webhook_ContactFormProperties {

		/** The WhatsApp ID of the contact */
		wa_id: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_ContactFormGroup() {
		return new FormGroup<Webhook_ContactFormProperties>({
			wa_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_Contact_Profile {

		/** Optional. As of v2.21.4, contains the sender's profile name. */
		name?: string | null;
	}
	export interface Webhook_Contact_ProfileFormProperties {

		/** Optional. As of v2.21.4, contains the sender's profile name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_Contact_ProfileFormGroup() {
		return new FormGroup<Webhook_Contact_ProfileFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_Document {

		/** Optional. Only present if specified. */
		caption?: string | null;

		/** Absolute filename and location on media volume. This parameter is deprecated. */
		file?: string | null;

		/** Filename on the sender's device. This will only be present in audio and document media messages. */
		filename?: string | null;

		/** ID of the media. Can be used to delete the media if stored locally on the client. */
		id?: string | null;
		link?: string | null;

		/** Mime type of media */
		mime_type?: string | null;

		/** Checksum */
		sha256?: string | null;
	}
	export interface Webhook_DocumentFormProperties {

		/** Optional. Only present if specified. */
		caption: FormControl<string | null | undefined>,

		/** Absolute filename and location on media volume. This parameter is deprecated. */
		file: FormControl<string | null | undefined>,

		/** Filename on the sender's device. This will only be present in audio and document media messages. */
		filename: FormControl<string | null | undefined>,

		/** ID of the media. Can be used to delete the media if stored locally on the client. */
		id: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,

		/** Mime type of media */
		mime_type: FormControl<string | null | undefined>,

		/** Checksum */
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_DocumentFormGroup() {
		return new FormGroup<Webhook_DocumentFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			mime_type: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_Event {
		contacts?: Array<Webhook_Contact>;
		errors?: Array<Error>;
		messages?: Array<Webhook_Message>;
		statuses?: Array<Webhook_Status>;
	}
	export interface Webhook_EventFormProperties {
	}
	export function CreateWebhook_EventFormGroup() {
		return new FormGroup<Webhook_EventFormProperties>({
		});

	}

	export interface Webhook_Message {
		audio?: Webhook_Audio;
		contacts?: Array<Contact>;
		context?: Message_Context;
		document?: Webhook_Document;
		errors?: Array<Error>;

		/** WhatsApp ID of the sender */
		from?: string | null;

		/** Optional. WhatsApp group ID */
		group_id?: string | null;

		/** Message ID */
		id?: string | null;
		image?: Webhook_Image;
		location?: Webhook_Location;
		system?: Webhook_System;
		text?: Webhook_Text;

		/** Message received timestamp */
		timestamp?: string | null;

		/** type of the message */
		type?: Message_Type | null;
		video?: Webhook_Video;
		voice?: Webhook_Voice;
	}
	export interface Webhook_MessageFormProperties {

		/** WhatsApp ID of the sender */
		from: FormControl<string | null | undefined>,

		/** Optional. WhatsApp group ID */
		group_id: FormControl<string | null | undefined>,

		/** Message ID */
		id: FormControl<string | null | undefined>,

		/** Message received timestamp */
		timestamp: FormControl<string | null | undefined>,

		/** type of the message */
		type: FormControl<Message_Type | null | undefined>,
	}
	export function CreateWebhook_MessageFormGroup() {
		return new FormGroup<Webhook_MessageFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			group_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<Message_Type | null | undefined>(undefined),
		});

	}

	export interface Webhook_Image {

		/** Optional. Only present if specified. */
		caption?: string | null;

		/** Absolute filename and location on media volume. This parameter is deprecated. */
		file?: string | null;

		/** ID of the media. Can be used to delete the media if stored locally on the client. */
		id?: string | null;
		link?: string | null;

		/** Mime type of media */
		mime_type?: string | null;

		/** Checksum */
		sha256?: string | null;
	}
	export interface Webhook_ImageFormProperties {

		/** Optional. Only present if specified. */
		caption: FormControl<string | null | undefined>,

		/** Absolute filename and location on media volume. This parameter is deprecated. */
		file: FormControl<string | null | undefined>,

		/** ID of the media. Can be used to delete the media if stored locally on the client. */
		id: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,

		/** Mime type of media */
		mime_type: FormControl<string | null | undefined>,

		/** Checksum */
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_ImageFormGroup() {
		return new FormGroup<Webhook_ImageFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			mime_type: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_Location {

		/** Address of the location */
		address?: string | null;

		/** Latitude of location being sent */
		latitude?: number | null;

		/** Longitude of location being sent */
		longitude?: number | null;

		/** Name of the location */
		name?: string | null;

		/** URL for the website where the user downloaded the location information */
		url?: string | null;
	}
	export interface Webhook_LocationFormProperties {

		/** Address of the location */
		address: FormControl<string | null | undefined>,

		/** Latitude of location being sent */
		latitude: FormControl<number | null | undefined>,

		/** Longitude of location being sent */
		longitude: FormControl<number | null | undefined>,

		/** Name of the location */
		name: FormControl<string | null | undefined>,

		/** URL for the website where the user downloaded the location information */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_LocationFormGroup() {
		return new FormGroup<Webhook_LocationFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_System {
		body?: string | null;
		type?: Webhook_SystemType | null;
	}
	export interface Webhook_SystemFormProperties {
		body: FormControl<string | null | undefined>,
		type: FormControl<Webhook_SystemType | null | undefined>,
	}
	export function CreateWebhook_SystemFormGroup() {
		return new FormGroup<Webhook_SystemFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<Webhook_SystemType | null | undefined>(undefined),
		});

	}

	export enum Webhook_SystemType { group_created = 0, group_user_promoted = 1, group_user_demoted = 2, group_user_joined = 3, group_user_left = 4, group_subject_changed = 5, group_description_changed = 6, group_icon_changed = 7, group_icon_deleted = 8, group_invite_link_revoked = 9, user_identity_changed = 10, group_user_changed_number = 11, group_error_fetching_photo = 12, group_error_adding_users = 13, group_error_adding_user = 14, group_error_full_adding_users = 15, group_error_removing_user = 16, broadcast_list_created = 17, group_ended = 18, group_error_blocked_adding_user = 19 }

	export interface Webhook_Text {

		/** Message text */
		body?: string | null;
	}
	export interface Webhook_TextFormProperties {

		/** Message text */
		body: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_TextFormGroup() {
		return new FormGroup<Webhook_TextFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_Video {

		/** Optional. Only present if specified. */
		caption?: string | null;

		/** Absolute filename and location on media volume. This parameter is deprecated. */
		file?: string | null;

		/** ID of the media. Can be used to delete the media if stored locally on the client. */
		id?: string | null;
		link?: string | null;

		/** Mime type of media */
		mime_type?: string | null;

		/** Checksum */
		sha256?: string | null;
	}
	export interface Webhook_VideoFormProperties {

		/** Optional. Only present if specified. */
		caption: FormControl<string | null | undefined>,

		/** Absolute filename and location on media volume. This parameter is deprecated. */
		file: FormControl<string | null | undefined>,

		/** ID of the media. Can be used to delete the media if stored locally on the client. */
		id: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,

		/** Mime type of media */
		mime_type: FormControl<string | null | undefined>,

		/** Checksum */
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_VideoFormGroup() {
		return new FormGroup<Webhook_VideoFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			mime_type: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_Voice {

		/** Optional. Only present if specified. */
		caption?: string | null;

		/** Absolute filename and location on media volume. This parameter is deprecated. */
		file?: string | null;

		/** ID of the media. Can be used to delete the media if stored locally on the client. */
		id?: string | null;
		link?: string | null;

		/** Mime type of media */
		mime_type?: string | null;

		/** Checksum */
		sha256?: string | null;
	}
	export interface Webhook_VoiceFormProperties {

		/** Optional. Only present if specified. */
		caption: FormControl<string | null | undefined>,

		/** Absolute filename and location on media volume. This parameter is deprecated. */
		file: FormControl<string | null | undefined>,

		/** ID of the media. Can be used to delete the media if stored locally on the client. */
		id: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,

		/** Mime type of media */
		mime_type: FormControl<string | null | undefined>,

		/** Checksum */
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_VoiceFormGroup() {
		return new FormGroup<Webhook_VoiceFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			mime_type: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_Status {
		errors?: Array<Error>;

		/** Message ID */
		id?: string | null;

		/** WhatsApp ID of recipient */
		recipient_id?: string | null;

		/** Status of message */
		status?: Webhook_StatusStatus | null;

		/** Timestamp of the status message */
		timestamp?: string | null;
	}
	export interface Webhook_StatusFormProperties {

		/** Message ID */
		id: FormControl<string | null | undefined>,

		/** WhatsApp ID of recipient */
		recipient_id: FormControl<string | null | undefined>,

		/** Status of message */
		status: FormControl<Webhook_StatusStatus | null | undefined>,

		/** Timestamp of the status message */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_StatusFormGroup() {
		return new FormGroup<Webhook_StatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			recipient_id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<Webhook_StatusStatus | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Webhook_StatusStatus { sent = 0, delivered = 1, read = 2, failed = 3, deleted = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Request-Code
		 * Post account
		 * @return {void} 
		 */
		RequestCode(requestBody: Request_Code_Request_Body): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Set-Shards
		 * Post account/shards
		 * @return {void} 
		 */
		SetShards(requestBody: Set_Shards_Request_Body): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/shards', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Register-Account
		 * Post account/verify
		 * @return {void} 
		 */
		RegisterAccount(requestBody: Register_Account_Request_Body): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Download-CA-Certificate
		 * Get certificates/external/ca
		 * @return {string} 
		 */
		DownloadCaCertificate(): Observable<string> {
			return this.http.get(this.baseUri + 'certificates/external/ca', { responseType: 'text' });
		}

		/**
		 * Delete Webhook CA Certificate
		 * Delete certificates/webhooks/ca
		 * @return {void} 
		 */
		DeleteWebhookCaCertificate(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'certificates/webhooks/ca', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download Webhook CA Certificate
		 * Get certificates/webhooks/ca
		 * @return {string} 
		 */
		DownloadWebhookCaCertificate(): Observable<string> {
			return this.http.get(this.baseUri + 'certificates/webhooks/ca', { responseType: 'text' });
		}

		/**
		 * Check-Contact
		 * Post contacts
		 * @return {Check_Contact_Response} 
		 */
		CheckContact(requestBody: Check_Contact_Request_Body): Observable<Check_Contact_Response> {
			return this.http.post<Check_Contact_Response>(this.baseUri + 'contacts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get-All-Groups
		 * Get groups
		 * @return {Groups_Response} 
		 */
		GetAllGroups(): Observable<Groups_Response> {
			return this.http.get<Groups_Response>(this.baseUri + 'groups', {});
		}

		/**
		 * Create-Group
		 * Post groups
		 * @return {Groups_Response} 
		 */
		CreateGroup(requestBody: Create_Group_Request_Body): Observable<Groups_Response> {
			return this.http.post<Groups_Response>(this.baseUri + 'groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get-Group-Info
		 * Get groups/{GroupId}
		 * @return {Group_Response} 
		 */
		GetGroupInfo(GroupId: string): Observable<Group_Response> {
			return this.http.get<Group_Response>(this.baseUri + 'groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)), {});
		}

		/**
		 * Update-Group-Info
		 * Put groups/{GroupId}
		 * @return {void} 
		 */
		UpdateGroupInfo(GroupId: string, requestBody: Update_Group_Info_Request_Body): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Demote-Group-Admin
		 * Delete groups/{GroupId}/admins
		 * @return {void} 
		 */
		DemoteGroupAdmin(GroupId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/admins', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Promote-To-Group-Admin
		 * Patch groups/{GroupId}/admins
		 * @return {void} 
		 */
		PromoteToGroupAdmin(GroupId: string, requestBody: Group_Admin_Request_Body): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/admins', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete-Group-Icon
		 * Delete groups/{GroupId}/icon
		 * @return {void} 
		 */
		DeleteGroupIcon(GroupId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/icon', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get-Group-Icon-Binary
		 * Get groups/{GroupId}/icon
		 * @return {void} 
		 */
		GetGroupIconBinary(GroupId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/icon', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete-Group-Invite
		 * Delete groups/{GroupId}/invite
		 * @return {void} 
		 */
		DeleteGroupInvite(GroupId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/invite', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get-Group-Invite
		 * Get groups/{GroupId}/invite
		 * @return {Group_Invite_Response} 
		 */
		GetGroupInvite(GroupId: string): Observable<Group_Invite_Response> {
			return this.http.get<Group_Invite_Response>(this.baseUri + 'groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/invite', {});
		}

		/**
		 * Leave-Group
		 * Post groups/{GroupId}/leave
		 * @return {void} 
		 */
		LeaveGroup(GroupId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/leave', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove-Group-Participant
		 * Delete groups/{GroupId}/participants
		 * @return {void} 
		 */
		RemoveGroupParticipant(GroupId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/participants', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check-Health
		 * Get health
		 * @return {void} 
		 */
		CheckHealth(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete-Media
		 * Delete media/{MediaId}
		 * @return {void} 
		 */
		DeleteMedia(MediaId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'media/' + (MediaId == null ? '' : encodeURIComponent(MediaId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download-Media
		 * Get media/{MediaId}
		 * @return {void} 
		 */
		DownloadMedia(MediaId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'media/' + (MediaId == null ? '' : encodeURIComponent(MediaId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Send-Message
		 * Post messages
		 * @return {Message_Response} 
		 */
		SendMessage(requestBody: Send_Message_Request_Body): Observable<Message_Response> {
			return this.http.post<Message_Response>(this.baseUri + 'messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Mark-Message-As-Read
		 * Put messages/{MessageID}
		 * @param {string} MessageID Message ID from Webhook
		 * @return {void} 
		 */
		MarkMessageAsRead(MessageID: string, requestBody: Mark_Message_As_Read_Request_Body): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'messages/' + (MessageID == null ? '' : encodeURIComponent(MessageID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get-Metrics (since v2.21.3)
		 * Get metrics
		 * @return {string} 
		 */
		GetMetrics(format: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'metrics?format=' + (format == null ? '' : encodeURIComponent(format)), { responseType: 'text' });
		}

		/**
		 * Disable-Two-Step
		 * Delete settings/account/two-step
		 * @return {void} 
		 */
		DisableTwoStep(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'settings/account/two-step', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable-Two-Step
		 * Post settings/account/two-step
		 * @return {void} 
		 */
		EnableTwoStep(requestBody: Enable_Two_Step_Request_Body): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'settings/account/two-step', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset-Application-Settings
		 * Delete settings/application
		 * @return {void} 
		 */
		ResetApplicationSettings(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'settings/application', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get-Application-Settings
		 * Get settings/application
		 * @return {Application_Settings} 
		 */
		GetApplicationSettings(): Observable<Application_Settings> {
			return this.http.get<Application_Settings>(this.baseUri + 'settings/application', {});
		}

		/**
		 * Update-Application-Settings
		 * If a field is not present in the request, no change is made to that setting. For example, if on_call_pager is not sent with the request, the existing configuration for on_call_pager is unchanged.
		 * Patch settings/application
		 * @return {Response} 
		 */
		UpdateApplicationSettings(requestBody: Application_Settings): Observable<Response> {
			return this.http.patch<Response>(this.baseUri + 'settings/application', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get-Media-Providers
		 * Get settings/application/media/providers
		 * @return {Get_Media_Providers_Response} 
		 */
		GetMediaProviders(): Observable<Get_Media_Providers_Response> {
			return this.http.get<Get_Media_Providers_Response>(this.baseUri + 'settings/application/media/providers', {});
		}

		/**
		 * Update-Media-Providers
		 * Post settings/application/media/providers
		 * @return {void} 
		 */
		UpdateMediaProviders(requestBody: Array<Media_Provider>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'settings/application/media/providers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete-Media-Providers
		 * Delete settings/application/media/providers/{ProviderName}
		 * @param {string} ProviderName Provider Name
		 * @return {void} 
		 */
		DeleteMediaProviders(ProviderName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'settings/application/media/providers/' + (ProviderName == null ? '' : encodeURIComponent(ProviderName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Backup-Settings
		 * Post settings/backup
		 * @return {Backup_Settings_Response} 
		 */
		BackupSettings(requestBody: Backup_Settings_Request_Body): Observable<Backup_Settings_Response> {
			return this.http.post<Backup_Settings_Response>(this.baseUri + 'settings/backup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get-Business-Profile
		 * Get settings/business/profile
		 * @return {Get_Business_Profile_Response} 
		 */
		GetBusinessProfile(): Observable<Get_Business_Profile_Response> {
			return this.http.get<Get_Business_Profile_Response>(this.baseUri + 'settings/business/profile', {});
		}

		/**
		 * Update-Business-Profile
		 * Post settings/business/profile
		 * @return {void} 
		 */
		UpdateBusinessProfile(requestBody: Business_Profile): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'settings/business/profile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get-Profile-About
		 * Get settings/profile/about
		 * @return {Get_Profile_About_Response} 
		 */
		GetProfileAbout(): Observable<Get_Profile_About_Response> {
			return this.http.get<Get_Profile_About_Response>(this.baseUri + 'settings/profile/about', {});
		}

		/**
		 * Update-Profile-About
		 * Patch settings/profile/about
		 * @return {void} 
		 */
		UpdateProfileAbout(requestBody: Profile_About): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'settings/profile/about', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete-Profile-Photo
		 * Delete settings/profile/photo
		 * @return {void} 
		 */
		DeleteProfilePhoto(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'settings/profile/photo', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get-Profile-Photo
		 * Get settings/profile/photo
		 * @return {Get_Profile_Photo_Response} 
		 */
		GetProfilePhoto(format: string | null | undefined): Observable<Get_Profile_Photo_Response> {
			return this.http.get<Get_Profile_Photo_Response>(this.baseUri + 'settings/profile/photo?format=' + (format == null ? '' : encodeURIComponent(format)), {});
		}

		/**
		 * Restore-Settings
		 * Post settings/restore
		 * @return {void} 
		 */
		RestoreSettings(requestBody: Restore_Settings_Request_Body): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'settings/restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get-App-Stats
		 * Get stats/app
		 * @return {string} 
		 */
		GetAppStats(format: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'stats/app?format=' + (format == null ? '' : encodeURIComponent(format)), { responseType: 'text' });
		}

		/**
		 * Get-DB-Stats
		 * Get stats/db
		 * @return {string} 
		 */
		GetDbStats(format: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'stats/db?format=' + (format == null ? '' : encodeURIComponent(format)), { responseType: 'text' });
		}

		/**
		 * Get-Support-Info
		 * Get support
		 * @return {string} 
		 */
		GetSupportInfo(): Observable<string> {
			return this.http.get(this.baseUri + 'support', { responseType: 'text' });
		}

		/**
		 * Create-User
		 * Post users
		 * @return {User_Response} 
		 */
		CreateUser(requestBody: Create_User_Request_Body): Observable<User_Response> {
			return this.http.post<User_Response>(this.baseUri + 'users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Login-User
		 * Post users/login
		 * @return {User_Login_Response} OK
		 */
		LoginUser(requestBody: Login_Admin_Request_Body): Observable<User_Login_Response> {
			return this.http.post<User_Login_Response>(this.baseUri + 'users/login', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Logout-User
		 * Post users/logout
		 * @return {void} 
		 */
		LogoutUser(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/logout', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete-User
		 * Delete users/{UserUsername}
		 * @return {User_Response} 
		 */
		DeleteUser(UserUsername: string): Observable<User_Response> {
			return this.http.delete<User_Response>(this.baseUri + 'users/' + (UserUsername == null ? '' : encodeURIComponent(UserUsername)), {});
		}

		/**
		 * Get-User
		 * Get users/{UserUsername}
		 * @return {Detailed_User_Response} 
		 */
		GetUser(UserUsername: string): Observable<Detailed_User_Response> {
			return this.http.get<Detailed_User_Response>(this.baseUri + 'users/' + (UserUsername == null ? '' : encodeURIComponent(UserUsername)), {});
		}

		/**
		 * Update-User
		 * Put users/{UserUsername}
		 * @return {User_Response} 
		 */
		UpdateUser(UserUsername: string, requestBody: Update_User_Request_Body): Observable<User_Response> {
			return this.http.put<User_Response>(this.baseUri + 'users/' + (UserUsername == null ? '' : encodeURIComponent(UserUsername)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

