import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ActivitiesFilter {
		updated_since?: Date | null;
	}
	export interface ActivitiesFilterFormProperties {
		updated_since: FormControl<Date | null | undefined>,
	}
	export function CreateActivitiesFilterFormGroup() {
		return new FormGroup<ActivitiesFilterFormProperties>({
			updated_since: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Activity {

		/** The account related to the activity */
		account_id?: string | null;

		/** The date of the activity */
		activity_date?: string | null;

		/** The date and time of the activity */
		activity_datetime?: string | null;

		/** Whether the Activity is an all day event or not */
		all_day_event?: boolean | null;

		/** Whether the activity is archived or not */
		archived?: boolean | null;

		/** The asset related to the activity */
		asset_id?: string | null;
		attendees?: Array<ActivityAttendee>;

		/** The campaign related to the activity */
		campaign_id?: string | null;

		/** The case related to the activity */
		case_id?: string | null;

		/** Whether the activity is a child of another activity or not */
		child?: boolean | null;

		/** The company related to the activity */
		company_id?: string | null;

		/** The contact related to the activity */
		contact_id?: string | null;

		/** The contract related to the activity */
		contract_id?: string | null;

		/** The date and time when the activity was created */
		created_at?: string | null;

		/** The user who created the activity */
		created_by?: string | null;

		/** Custom fields of the activity */
		custom_fields?: Array<CustomField>;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The custom object related to the activity */
		custom_object_id?: string | null;

		/** Whether the activity is deleted or not */
		deleted?: boolean | null;

		/** A description of the activity */
		description?: string | null;

		/** Whether the Activity is done or not */
		done?: boolean | null;

		/** The third-party API ID of original entity */
		downstream_id?: string | null;

		/** The duration of the activity in minutes */
		duration_minutes?: number | null;

		/**
		 * The duration of the activity in seconds
		 * Minimum: 0
		 */
		duration_seconds?: number | null;

		/** The end date of the activity */
		end_date?: string | null;

		/** The end date and time of the activity */
		end_datetime?: string | null;

		/** The sub type of the group event */
		event_sub_type?: string | null;

		/** Whether the Activity is a group event or not */
		group_event?: boolean | null;

		/** The type of the group event */
		group_event_type?: string | null;

		/** The unique identifier of the activity */
		id?: string | null;

		/** The lead related to the activity */
		lead_id?: string | null;

		/** The location of the activity */
		location?: string | null;
		location_address?: Address;

		/** An internal note about the activity */
		note?: string | null;

		/** The opportunity related to the activity */
		opportunity_id?: string | null;

		/** The owner of the activity */
		owner_id?: string | null;

		/** Whether the Activity is private or not */
		private?: boolean | null;

		/** The product related to the activity */
		product_id?: string | null;

		/** Whether the activity is recurrent or not */
		recurrent?: boolean | null;

		/** The date and time of the reminder */
		reminder_datetime?: string | null;

		/** Whether the reminder is set or not */
		reminder_set?: boolean | null;
		show_as?: ActivityShow_as | null;

		/** The solution related to the activity */
		solution_id?: string | null;

		/** The start date and time of the activity */
		start_datetime?: string | null;

		/** The title of the activity */
		title?: string | null;

		/**
		 * The type of the activity
		 * Required
		 */
		type: ActivityType;

		/** The date and time when the activity was last updated */
		updated_at?: string | null;

		/** The user who last updated the activity */
		updated_by?: string | null;

		/** The user related to the activity */
		user_id?: string | null;

		/** The ID of the video conference */
		video_conference_id?: string | null;

		/** The URL of the video conference */
		video_conference_url?: string | null;
	}
	export interface ActivityFormProperties {

		/** The account related to the activity */
		account_id: FormControl<string | null | undefined>,

		/** The date of the activity */
		activity_date: FormControl<string | null | undefined>,

		/** The date and time of the activity */
		activity_datetime: FormControl<string | null | undefined>,

		/** Whether the Activity is an all day event or not */
		all_day_event: FormControl<boolean | null | undefined>,

		/** Whether the activity is archived or not */
		archived: FormControl<boolean | null | undefined>,

		/** The asset related to the activity */
		asset_id: FormControl<string | null | undefined>,

		/** The campaign related to the activity */
		campaign_id: FormControl<string | null | undefined>,

		/** The case related to the activity */
		case_id: FormControl<string | null | undefined>,

		/** Whether the activity is a child of another activity or not */
		child: FormControl<boolean | null | undefined>,

		/** The company related to the activity */
		company_id: FormControl<string | null | undefined>,

		/** The contact related to the activity */
		contact_id: FormControl<string | null | undefined>,

		/** The contract related to the activity */
		contract_id: FormControl<string | null | undefined>,

		/** The date and time when the activity was created */
		created_at: FormControl<string | null | undefined>,

		/** The user who created the activity */
		created_by: FormControl<string | null | undefined>,

		/** The custom object related to the activity */
		custom_object_id: FormControl<string | null | undefined>,

		/** Whether the activity is deleted or not */
		deleted: FormControl<boolean | null | undefined>,

		/** A description of the activity */
		description: FormControl<string | null | undefined>,

		/** Whether the Activity is done or not */
		done: FormControl<boolean | null | undefined>,

		/** The third-party API ID of original entity */
		downstream_id: FormControl<string | null | undefined>,

		/** The duration of the activity in minutes */
		duration_minutes: FormControl<number | null | undefined>,

		/**
		 * The duration of the activity in seconds
		 * Minimum: 0
		 */
		duration_seconds: FormControl<number | null | undefined>,

		/** The end date of the activity */
		end_date: FormControl<string | null | undefined>,

		/** The end date and time of the activity */
		end_datetime: FormControl<string | null | undefined>,

		/** The sub type of the group event */
		event_sub_type: FormControl<string | null | undefined>,

		/** Whether the Activity is a group event or not */
		group_event: FormControl<boolean | null | undefined>,

		/** The type of the group event */
		group_event_type: FormControl<string | null | undefined>,

		/** The unique identifier of the activity */
		id: FormControl<string | null | undefined>,

		/** The lead related to the activity */
		lead_id: FormControl<string | null | undefined>,

		/** The location of the activity */
		location: FormControl<string | null | undefined>,

		/** An internal note about the activity */
		note: FormControl<string | null | undefined>,

		/** The opportunity related to the activity */
		opportunity_id: FormControl<string | null | undefined>,

		/** The owner of the activity */
		owner_id: FormControl<string | null | undefined>,

		/** Whether the Activity is private or not */
		private: FormControl<boolean | null | undefined>,

		/** The product related to the activity */
		product_id: FormControl<string | null | undefined>,

		/** Whether the activity is recurrent or not */
		recurrent: FormControl<boolean | null | undefined>,

		/** The date and time of the reminder */
		reminder_datetime: FormControl<string | null | undefined>,

		/** Whether the reminder is set or not */
		reminder_set: FormControl<boolean | null | undefined>,
		show_as: FormControl<ActivityShow_as | null | undefined>,

		/** The solution related to the activity */
		solution_id: FormControl<string | null | undefined>,

		/** The start date and time of the activity */
		start_datetime: FormControl<string | null | undefined>,

		/** The title of the activity */
		title: FormControl<string | null | undefined>,

		/**
		 * The type of the activity
		 * Required
		 */
		type: FormControl<ActivityType | null | undefined>,

		/** The date and time when the activity was last updated */
		updated_at: FormControl<string | null | undefined>,

		/** The user who last updated the activity */
		updated_by: FormControl<string | null | undefined>,

		/** The user related to the activity */
		user_id: FormControl<string | null | undefined>,

		/** The ID of the video conference */
		video_conference_id: FormControl<string | null | undefined>,

		/** The URL of the video conference */
		video_conference_url: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			activity_date: new FormControl<string | null | undefined>(undefined),
			activity_datetime: new FormControl<string | null | undefined>(undefined),
			all_day_event: new FormControl<boolean | null | undefined>(undefined),
			archived: new FormControl<boolean | null | undefined>(undefined),
			asset_id: new FormControl<string | null | undefined>(undefined),
			campaign_id: new FormControl<string | null | undefined>(undefined),
			case_id: new FormControl<string | null | undefined>(undefined),
			child: new FormControl<boolean | null | undefined>(undefined),
			company_id: new FormControl<string | null | undefined>(undefined),
			contact_id: new FormControl<string | null | undefined>(undefined),
			contract_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			custom_object_id: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			done: new FormControl<boolean | null | undefined>(undefined),
			downstream_id: new FormControl<string | null | undefined>(undefined),
			duration_minutes: new FormControl<number | null | undefined>(undefined),
			duration_seconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			end_date: new FormControl<string | null | undefined>(undefined),
			end_datetime: new FormControl<string | null | undefined>(undefined),
			event_sub_type: new FormControl<string | null | undefined>(undefined),
			group_event: new FormControl<boolean | null | undefined>(undefined),
			group_event_type: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lead_id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			opportunity_id: new FormControl<string | null | undefined>(undefined),
			owner_id: new FormControl<string | null | undefined>(undefined),
			private: new FormControl<boolean | null | undefined>(undefined),
			product_id: new FormControl<string | null | undefined>(undefined),
			recurrent: new FormControl<boolean | null | undefined>(undefined),
			reminder_datetime: new FormControl<string | null | undefined>(undefined),
			reminder_set: new FormControl<boolean | null | undefined>(undefined),
			show_as: new FormControl<ActivityShow_as | null | undefined>(undefined),
			solution_id: new FormControl<string | null | undefined>(undefined),
			start_datetime: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ActivityType | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<string | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
			video_conference_id: new FormControl<string | null | undefined>(undefined),
			video_conference_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityAttendee {

		/** The identifier for a related contact */
		contact_id?: string | null;

		/** The time the attendee was created (ISO 8601) */
		created_at?: Date | null;

		/** Email address of the attendee */
		email_address?: string | null;

		/** First name of the attendee */
		first_name?: string | null;

		/** Unique identifier for the attendee */
		id?: string | null;

		/** Whether the attendee is the organizer of the activity */
		is_organizer?: boolean | null;

		/** Last name of the attendee */
		last_name?: string | null;

		/** Middle name of the attendee */
		middle_name?: string | null;

		/**
		 * Full name of the attendee
		 * Min length: 1
		 */
		name?: string | null;

		/** Prefix of the attendee */
		prefix?: string | null;

		/** Status of the attendee */
		status?: ActivityAttendeeStatus | null;

		/** Suffix of the attendee */
		suffix?: string | null;

		/** The last time the attendee was updated (ISO 8601) */
		updated_at?: Date | null;

		/** The identifier for a related user */
		user_id?: string | null;
	}
	export interface ActivityAttendeeFormProperties {

		/** The identifier for a related contact */
		contact_id: FormControl<string | null | undefined>,

		/** The time the attendee was created (ISO 8601) */
		created_at: FormControl<Date | null | undefined>,

		/** Email address of the attendee */
		email_address: FormControl<string | null | undefined>,

		/** First name of the attendee */
		first_name: FormControl<string | null | undefined>,

		/** Unique identifier for the attendee */
		id: FormControl<string | null | undefined>,

		/** Whether the attendee is the organizer of the activity */
		is_organizer: FormControl<boolean | null | undefined>,

		/** Last name of the attendee */
		last_name: FormControl<string | null | undefined>,

		/** Middle name of the attendee */
		middle_name: FormControl<string | null | undefined>,

		/**
		 * Full name of the attendee
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Prefix of the attendee */
		prefix: FormControl<string | null | undefined>,

		/** Status of the attendee */
		status: FormControl<ActivityAttendeeStatus | null | undefined>,

		/** Suffix of the attendee */
		suffix: FormControl<string | null | undefined>,

		/** The last time the attendee was updated (ISO 8601) */
		updated_at: FormControl<Date | null | undefined>,

		/** The identifier for a related user */
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateActivityAttendeeFormGroup() {
		return new FormGroup<ActivityAttendeeFormProperties>({
			contact_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			email_address: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_organizer: new FormControl<boolean | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			prefix: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ActivityAttendeeStatus | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActivityAttendeeStatus { accepted = 'accepted', tentative = 'tentative', declined = 'declined' }

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

	export enum ActivityShow_as { free = 'free', busy = 'busy' }

	export enum ActivityType { call = 'call', meeting = 'meeting', email = 'email', note = 'note', task = 'task', deadline = 'deadline', 'send-letter' = 'send-letter', 'send-quote' = 'send-quote', other = 'other' }

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

	export interface BankAccount {

		/** The name which you used in opening your bank account. */
		account_name?: string | null;

		/** A bank account number is a number that is tied to your bank account. If you have several bank accounts, such as personal, joint, business (and so on), each account will have a different account number. */
		account_number?: string | null;

		/** The type of bank account. */
		account_type?: BankAccountAccount_type | null;

		/** A bank code is a code assigned by a central bank, a bank supervisory body or a Bankers Association in a country to all its licensed member banks or financial institutions. */
		bank_code?: string | null;

		/** The name of the bank */
		bank_name?: string | null;

		/** The Bank Identifier Code (BIC). */
		bic?: string | null;

		/** A branch identifier is a unique identifier for a branch of a bank or financial institution. */
		branch_identifier?: string | null;

		/** A BSB is a 6 digit numeric code used for identifying the branch of an Australian or New Zealand bank or financial institution. */
		bsb_number?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/** The International Bank Account Number (IBAN). */
		iban?: string | null;

		/** A routing number is a nine-digit code used to identify a financial institution in the United States. */
		routing_number?: string | null;
	}
	export interface BankAccountFormProperties {

		/** The name which you used in opening your bank account. */
		account_name: FormControl<string | null | undefined>,

		/** A bank account number is a number that is tied to your bank account. If you have several bank accounts, such as personal, joint, business (and so on), each account will have a different account number. */
		account_number: FormControl<string | null | undefined>,

		/** The type of bank account. */
		account_type: FormControl<BankAccountAccount_type | null | undefined>,

		/** A bank code is a code assigned by a central bank, a bank supervisory body or a Bankers Association in a country to all its licensed member banks or financial institutions. */
		bank_code: FormControl<string | null | undefined>,

		/** The name of the bank */
		bank_name: FormControl<string | null | undefined>,

		/** The Bank Identifier Code (BIC). */
		bic: FormControl<string | null | undefined>,

		/** A branch identifier is a unique identifier for a branch of a bank or financial institution. */
		branch_identifier: FormControl<string | null | undefined>,

		/** A BSB is a 6 digit numeric code used for identifying the branch of an Australian or New Zealand bank or financial institution. */
		bsb_number: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** The International Bank Account Number (IBAN). */
		iban: FormControl<string | null | undefined>,

		/** A routing number is a nine-digit code used to identify a financial institution in the United States. */
		routing_number: FormControl<string | null | undefined>,
	}
	export function CreateBankAccountFormGroup() {
		return new FormGroup<BankAccountFormProperties>({
			account_name: new FormControl<string | null | undefined>(undefined),
			account_number: new FormControl<string | null | undefined>(undefined),
			account_type: new FormControl<BankAccountAccount_type | null | undefined>(undefined),
			bank_code: new FormControl<string | null | undefined>(undefined),
			bank_name: new FormControl<string | null | undefined>(undefined),
			bic: new FormControl<string | null | undefined>(undefined),
			branch_identifier: new FormControl<string | null | undefined>(undefined),
			bsb_number: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			iban: new FormControl<string | null | undefined>(undefined),
			routing_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BankAccountAccount_type { bank_account = 'bank_account', credit_card = 'credit_card', other = 'other' }

	export enum BankAccountCurrency { UNKNOWN_CURRENCY = 'UNKNOWN_CURRENCY', AED = 'AED', AFN = 'AFN', ALL = 'ALL', AMD = 'AMD', ANG = 'ANG', AOA = 'AOA', ARS = 'ARS', AUD = 'AUD', AWG = 'AWG', AZN = 'AZN', BAM = 'BAM', BBD = 'BBD', BDT = 'BDT', BGN = 'BGN', BHD = 'BHD', BIF = 'BIF', BMD = 'BMD', BND = 'BND', BOB = 'BOB', BOV = 'BOV', BRL = 'BRL', BSD = 'BSD', BTN = 'BTN', BWP = 'BWP', BYR = 'BYR', BZD = 'BZD', CAD = 'CAD', CDF = 'CDF', CHE = 'CHE', CHF = 'CHF', CHW = 'CHW', CLF = 'CLF', CLP = 'CLP', CNY = 'CNY', COP = 'COP', COU = 'COU', CRC = 'CRC', CUC = 'CUC', CUP = 'CUP', CVE = 'CVE', CZK = 'CZK', DJF = 'DJF', DKK = 'DKK', DOP = 'DOP', DZD = 'DZD', EGP = 'EGP', ERN = 'ERN', ETB = 'ETB', EUR = 'EUR', FJD = 'FJD', FKP = 'FKP', GBP = 'GBP', GEL = 'GEL', GHS = 'GHS', GIP = 'GIP', GMD = 'GMD', GNF = 'GNF', GTQ = 'GTQ', GYD = 'GYD', HKD = 'HKD', HNL = 'HNL', HRK = 'HRK', HTG = 'HTG', HUF = 'HUF', IDR = 'IDR', ILS = 'ILS', INR = 'INR', IQD = 'IQD', IRR = 'IRR', ISK = 'ISK', JMD = 'JMD', JOD = 'JOD', JPY = 'JPY', KES = 'KES', KGS = 'KGS', KHR = 'KHR', KMF = 'KMF', KPW = 'KPW', KRW = 'KRW', KWD = 'KWD', KYD = 'KYD', KZT = 'KZT', LAK = 'LAK', LBP = 'LBP', LKR = 'LKR', LRD = 'LRD', LSL = 'LSL', LTL = 'LTL', LVL = 'LVL', LYD = 'LYD', MAD = 'MAD', MDL = 'MDL', MGA = 'MGA', MKD = 'MKD', MMK = 'MMK', MNT = 'MNT', MOP = 'MOP', MRO = 'MRO', MUR = 'MUR', MVR = 'MVR', MWK = 'MWK', MXN = 'MXN', MXV = 'MXV', MYR = 'MYR', MZN = 'MZN', NAD = 'NAD', NGN = 'NGN', NIO = 'NIO', NOK = 'NOK', NPR = 'NPR', NZD = 'NZD', OMR = 'OMR', PAB = 'PAB', PEN = 'PEN', PGK = 'PGK', PHP = 'PHP', PKR = 'PKR', PLN = 'PLN', PYG = 'PYG', QAR = 'QAR', RON = 'RON', RSD = 'RSD', RUB = 'RUB', RWF = 'RWF', SAR = 'SAR', SBD = 'SBD', SCR = 'SCR', SDG = 'SDG', SEK = 'SEK', SGD = 'SGD', SHP = 'SHP', SLL = 'SLL', SOS = 'SOS', SRD = 'SRD', SSP = 'SSP', STD = 'STD', SVC = 'SVC', SYP = 'SYP', SZL = 'SZL', THB = 'THB', TJS = 'TJS', TMT = 'TMT', TND = 'TND', TOP = 'TOP', TRC = 'TRC', TRY = 'TRY', TTD = 'TTD', TWD = 'TWD', TZS = 'TZS', UAH = 'UAH', UGX = 'UGX', USD = 'USD', USN = 'USN', USS = 'USS', UYI = 'UYI', UYU = 'UYU', UZS = 'UZS', VEF = 'VEF', VND = 'VND', VUV = 'VUV', WST = 'WST', XAF = 'XAF', XAG = 'XAG', XAU = 'XAU', XBA = 'XBA', XBB = 'XBB', XBC = 'XBC', XBD = 'XBD', XCD = 'XCD', XDR = 'XDR', XOF = 'XOF', XPD = 'XPD', XPF = 'XPF', XPT = 'XPT', XTS = 'XTS', XXX = 'XXX', YER = 'YER', ZAR = 'ZAR', ZMK = 'ZMK', ZMW = 'ZMW', BTC = 'BTC', ETH = 'ETH' }

	export interface CompaniesFilter {

		/** Name of the company to filter on */
		name?: string | null;
	}
	export interface CompaniesFilterFormProperties {

		/** Name of the company to filter on */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCompaniesFilterFormGroup() {
		return new FormGroup<CompaniesFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompaniesSort {

		/** The field on which to sort the Companies */
		by?: CompaniesSortBy | null;

		/** The direction in which to sort the results */
		direction?: CompaniesSortDirection | null;
	}
	export interface CompaniesSortFormProperties {

		/** The field on which to sort the Companies */
		by: FormControl<CompaniesSortBy | null | undefined>,

		/** The direction in which to sort the results */
		direction: FormControl<CompaniesSortDirection | null | undefined>,
	}
	export function CreateCompaniesSortFormGroup() {
		return new FormGroup<CompaniesSortFormProperties>({
			by: new FormControl<CompaniesSortBy | null | undefined>(undefined),
			direction: new FormControl<CompaniesSortDirection | null | undefined>(undefined),
		});

	}

	export enum CompaniesSortBy { created_at = 'created_at', updated_at = 'updated_at', name = 'name' }

	export enum CompaniesSortDirection { asc = 'asc', desc = 'desc' }

	export interface Company {

		/** An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity. */
		abn_branch?: string | null;

		/** An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia. */
		abn_or_tfn?: string | null;

		/** The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank. */
		acn?: string | null;
		addresses?: Array<Address>;

		/** The annual revenue of the company */
		annual_revenue?: string | null;
		bank_accounts?: Array<BankAccount>;

		/** The date of birth of the person. */
		birthday?: Date | null;

		/** Creation date */
		created_at?: Date | null;

		/** Created by user ID */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;
		custom_fields?: Array<CustomField>;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Whether the company is deleted or not */
		deleted?: boolean | null;

		/** A description of the company */
		description?: string | null;
		emails?: Array<Email>;

		/** The fax number of the company */
		fax?: string | null;

		/** The first name of the person. */
		first_name?: string | null;

		/** Unique identifier for the company */
		id?: string | null;

		/** The Image URL of the company */
		image?: string | null;

		/** The industry represents the type of business the company is in. */
		industry?: string | null;

		/** Number of interactions */
		interaction_count?: number | null;

		/** Last activity date */
		last_activity_at?: Date | null;

		/** The last name of the person. */
		last_name?: string | null;

		/**
		 * Name of the company
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** Number of employees */
		number_of_employees?: string | null;

		/** Owner ID */
		owner_id?: string | null;

		/** The ownership indicates the type of ownership of the company. */
		ownership?: string | null;

		/** Parent ID */
		parent_id?: string | null;

		/** A payee number is a unique number that identifies a payee for tax purposes. */
		payee_number?: string | null;
		phone_numbers?: Array<PhoneNumber>;

		/** Whether the company is read-only or not */
		read_only?: boolean | null;
		row_type?: CompanyRow_type;

		/** A sales tax number is a unique number that identifies a company for tax purposes. */
		sales_tax_number?: string | null;

		/** A formal salutation for the person. For example, 'Mr', 'Mrs' */
		salutation?: string | null;
		social_links?: Array<SocialLink>;

		/** The status of the company */
		status?: string | null;
		tags?: Array<string>;

		/** Last updated date */
		updated_at?: Date | null;

		/** Updated by user ID */
		updated_by?: string | null;

		/** The VAT number of the company */
		vat_number?: string | null;
		websites?: Array<Website>;
	}
	export interface CompanyFormProperties {

		/** An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity. */
		abn_branch: FormControl<string | null | undefined>,

		/** An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia. */
		abn_or_tfn: FormControl<string | null | undefined>,

		/** The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank. */
		acn: FormControl<string | null | undefined>,

		/** The annual revenue of the company */
		annual_revenue: FormControl<string | null | undefined>,

		/** The date of birth of the person. */
		birthday: FormControl<Date | null | undefined>,

		/** Creation date */
		created_at: FormControl<Date | null | undefined>,

		/** Created by user ID */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** Whether the company is deleted or not */
		deleted: FormControl<boolean | null | undefined>,

		/** A description of the company */
		description: FormControl<string | null | undefined>,

		/** The fax number of the company */
		fax: FormControl<string | null | undefined>,

		/** The first name of the person. */
		first_name: FormControl<string | null | undefined>,

		/** Unique identifier for the company */
		id: FormControl<string | null | undefined>,

		/** The Image URL of the company */
		image: FormControl<string | null | undefined>,

		/** The industry represents the type of business the company is in. */
		industry: FormControl<string | null | undefined>,

		/** Number of interactions */
		interaction_count: FormControl<number | null | undefined>,

		/** Last activity date */
		last_activity_at: FormControl<Date | null | undefined>,

		/** The last name of the person. */
		last_name: FormControl<string | null | undefined>,

		/**
		 * Name of the company
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Number of employees */
		number_of_employees: FormControl<string | null | undefined>,

		/** Owner ID */
		owner_id: FormControl<string | null | undefined>,

		/** The ownership indicates the type of ownership of the company. */
		ownership: FormControl<string | null | undefined>,

		/** Parent ID */
		parent_id: FormControl<string | null | undefined>,

		/** A payee number is a unique number that identifies a payee for tax purposes. */
		payee_number: FormControl<string | null | undefined>,

		/** Whether the company is read-only or not */
		read_only: FormControl<boolean | null | undefined>,

		/** A sales tax number is a unique number that identifies a company for tax purposes. */
		sales_tax_number: FormControl<string | null | undefined>,

		/** A formal salutation for the person. For example, 'Mr', 'Mrs' */
		salutation: FormControl<string | null | undefined>,

		/** The status of the company */
		status: FormControl<string | null | undefined>,

		/** Last updated date */
		updated_at: FormControl<Date | null | undefined>,

		/** Updated by user ID */
		updated_by: FormControl<string | null | undefined>,

		/** The VAT number of the company */
		vat_number: FormControl<string | null | undefined>,
	}
	export function CreateCompanyFormGroup() {
		return new FormGroup<CompanyFormProperties>({
			abn_branch: new FormControl<string | null | undefined>(undefined),
			abn_or_tfn: new FormControl<string | null | undefined>(undefined),
			acn: new FormControl<string | null | undefined>(undefined),
			annual_revenue: new FormControl<string | null | undefined>(undefined),
			birthday: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			industry: new FormControl<string | null | undefined>(undefined),
			interaction_count: new FormControl<number | null | undefined>(undefined),
			last_activity_at: new FormControl<Date | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			number_of_employees: new FormControl<string | null | undefined>(undefined),
			owner_id: new FormControl<string | null | undefined>(undefined),
			ownership: new FormControl<string | null | undefined>(undefined),
			parent_id: new FormControl<string | null | undefined>(undefined),
			payee_number: new FormControl<string | null | undefined>(undefined),
			read_only: new FormControl<boolean | null | undefined>(undefined),
			sales_tax_number: new FormControl<string | null | undefined>(undefined),
			salutation: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			vat_number: new FormControl<string | null | undefined>(undefined),
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

	export interface CompanyRow_type {
		id?: string | null;
		name?: string | null;
	}
	export interface CompanyRow_typeFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCompanyRow_typeFormGroup() {
		return new FormGroup<CompanyRow_typeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
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

	export interface Contact {

		/** The active status of the contact. */
		active?: boolean | null;
		addresses?: Array<Address>;

		/** The birthday of the contact. */
		birthday?: string | null;

		/** The company the contact is associated with. */
		company_id?: string | null;

		/** The name of the company the contact is associated with. */
		company_name?: string | null;

		/** The creation date of the contact. */
		created_at?: Date | null;

		/** The current balance of the contact. */
		current_balance?: number | null;
		custom_fields?: Array<CustomField>;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The department of the contact. */
		department?: string | null;

		/** The description of the contact. */
		description?: string | null;
		email_domain?: string | null;
		emails?: Array<Email>;

		/** The fax number of the contact. */
		fax?: string | null;

		/** The first call date of the contact. */
		first_call_at?: Date | null;

		/** The first email date of the contact. */
		first_email_at?: Date | null;

		/** The first name of the contact. */
		first_name?: string | null;

		/** The gender of the contact. */
		gender?: ContactGender | null;

		/** Unique identifier for the contact. */
		id?: string | null;
		image?: string | null;

		/** language code according to ISO 639-1. For the United States - EN */
		language?: string | null;

		/** The last activity date of the contact. */
		last_activity_at?: Date | null;

		/** The last name of the contact. */
		last_name?: string | null;

		/** The lead the contact is associated with. */
		lead_id?: string | null;

		/** The lead source of the contact. */
		lead_source?: string | null;

		/** The middle name of the contact. */
		middle_name?: string | null;

		/**
		 * Full name of the contact.
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** The owner of the contact. */
		owner_id?: string | null;
		phone_numbers?: Array<PhoneNumber>;

		/** The URL of the photo of a person. */
		photo_url?: string | null;

		/** The prefix of the contact. */
		prefix?: string | null;
		social_links?: Array<SocialLink>;

		/** The status of the contact. */
		status?: string | null;

		/** The suffix of the contact. */
		suffix?: string | null;
		tags?: Array<string>;

		/** The job title of the contact. */
		title?: string | null;

		/** The type of the contact. */
		type?: ContactType | null;

		/** The last update date of the contact. */
		updated_at?: Date | null;
		websites?: Array<Website>;
	}
	export interface ContactFormProperties {

		/** The active status of the contact. */
		active: FormControl<boolean | null | undefined>,

		/** The birthday of the contact. */
		birthday: FormControl<string | null | undefined>,

		/** The company the contact is associated with. */
		company_id: FormControl<string | null | undefined>,

		/** The name of the company the contact is associated with. */
		company_name: FormControl<string | null | undefined>,

		/** The creation date of the contact. */
		created_at: FormControl<Date | null | undefined>,

		/** The current balance of the contact. */
		current_balance: FormControl<number | null | undefined>,

		/** The department of the contact. */
		department: FormControl<string | null | undefined>,

		/** The description of the contact. */
		description: FormControl<string | null | undefined>,
		email_domain: FormControl<string | null | undefined>,

		/** The fax number of the contact. */
		fax: FormControl<string | null | undefined>,

		/** The first call date of the contact. */
		first_call_at: FormControl<Date | null | undefined>,

		/** The first email date of the contact. */
		first_email_at: FormControl<Date | null | undefined>,

		/** The first name of the contact. */
		first_name: FormControl<string | null | undefined>,

		/** The gender of the contact. */
		gender: FormControl<ContactGender | null | undefined>,

		/** Unique identifier for the contact. */
		id: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,

		/** language code according to ISO 639-1. For the United States - EN */
		language: FormControl<string | null | undefined>,

		/** The last activity date of the contact. */
		last_activity_at: FormControl<Date | null | undefined>,

		/** The last name of the contact. */
		last_name: FormControl<string | null | undefined>,

		/** The lead the contact is associated with. */
		lead_id: FormControl<string | null | undefined>,

		/** The lead source of the contact. */
		lead_source: FormControl<string | null | undefined>,

		/** The middle name of the contact. */
		middle_name: FormControl<string | null | undefined>,

		/**
		 * Full name of the contact.
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** The owner of the contact. */
		owner_id: FormControl<string | null | undefined>,

		/** The URL of the photo of a person. */
		photo_url: FormControl<string | null | undefined>,

		/** The prefix of the contact. */
		prefix: FormControl<string | null | undefined>,

		/** The status of the contact. */
		status: FormControl<string | null | undefined>,

		/** The suffix of the contact. */
		suffix: FormControl<string | null | undefined>,

		/** The job title of the contact. */
		title: FormControl<string | null | undefined>,

		/** The type of the contact. */
		type: FormControl<ContactType | null | undefined>,

		/** The last update date of the contact. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			birthday: new FormControl<string | null | undefined>(undefined),
			company_id: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			current_balance: new FormControl<number | null | undefined>(undefined),
			department: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			email_domain: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			first_call_at: new FormControl<Date | null | undefined>(undefined),
			first_email_at: new FormControl<Date | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<ContactGender | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			last_activity_at: new FormControl<Date | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			lead_id: new FormControl<string | null | undefined>(undefined),
			lead_source: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			owner_id: new FormControl<string | null | undefined>(undefined),
			photo_url: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ContactType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ContactGender { male = 'male', female = 'female', unisex = 'unisex' }

	export enum ContactType { customer = 'customer', supplier = 'supplier', employee = 'employee', personal = 'personal' }

	export interface ContactsFilter {

		/** Unique identifier for the associated company of the contact to filter on */
		company_id?: string | null;

		/** Email of the contact to filter on */
		email?: string | null;

		/** First name of the contact to filter on */
		first_name?: string | null;

		/** Last name of the contact to filter on */
		last_name?: string | null;

		/** Name of the contact to filter on */
		name?: string | null;
	}
	export interface ContactsFilterFormProperties {

		/** Unique identifier for the associated company of the contact to filter on */
		company_id: FormControl<string | null | undefined>,

		/** Email of the contact to filter on */
		email: FormControl<string | null | undefined>,

		/** First name of the contact to filter on */
		first_name: FormControl<string | null | undefined>,

		/** Last name of the contact to filter on */
		last_name: FormControl<string | null | undefined>,

		/** Name of the contact to filter on */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContactsFilterFormGroup() {
		return new FormGroup<ContactsFilterFormProperties>({
			company_id: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactsSort {

		/** The field on which to sort the Contacts */
		by?: ContactsSortBy | null;

		/** The direction in which to sort the results */
		direction?: CompaniesSortDirection | null;
	}
	export interface ContactsSortFormProperties {

		/** The field on which to sort the Contacts */
		by: FormControl<ContactsSortBy | null | undefined>,

		/** The direction in which to sort the results */
		direction: FormControl<CompaniesSortDirection | null | undefined>,
	}
	export function CreateContactsSortFormGroup() {
		return new FormGroup<ContactsSortFormProperties>({
			by: new FormControl<ContactsSortBy | null | undefined>(undefined),
			direction: new FormControl<CompaniesSortDirection | null | undefined>(undefined),
		});

	}

	export enum ContactsSortBy { created_at = 'created_at', updated_at = 'updated_at', name = 'name', first_name = 'first_name', last_name = 'last_name', email = 'email' }

	export interface CreateActivityResponse {

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
	export interface CreateActivityResponseFormProperties {

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
	export function CreateCreateActivityResponseFormGroup() {
		return new FormGroup<CreateActivityResponseFormProperties>({
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

	export interface CreateCompanyResponse {

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
	export interface CreateCompanyResponseFormProperties {

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
	export function CreateCreateCompanyResponseFormGroup() {
		return new FormGroup<CreateCompanyResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateContactResponse {

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
	export interface CreateContactResponseFormProperties {

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
	export function CreateCreateContactResponseFormGroup() {
		return new FormGroup<CreateContactResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLeadResponse {

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
	export interface CreateLeadResponseFormProperties {

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
	export function CreateCreateLeadResponseFormGroup() {
		return new FormGroup<CreateLeadResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNoteResponse {

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
	export interface CreateNoteResponseFormProperties {

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
	export function CreateCreateNoteResponseFormGroup() {
		return new FormGroup<CreateNoteResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateOpportunityResponse {

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
	export interface CreateOpportunityResponseFormProperties {

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
	export function CreateCreateOpportunityResponseFormGroup() {
		return new FormGroup<CreateOpportunityResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePipelineResponse {

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
	export interface CreatePipelineResponseFormProperties {

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
	export function CreateCreatePipelineResponseFormGroup() {
		return new FormGroup<CreatePipelineResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUserResponse {

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
	export interface CreateUserResponseFormProperties {

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
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CrmEventType { '*' = '*', 'crm.activity.created' = 'crm.activity.created', 'crm.activity.updated' = 'crm.activity.updated', 'crm.activity.deleted' = 'crm.activity.deleted', 'crm.company.created' = 'crm.company.created', 'crm.company.updated' = 'crm.company.updated', 'crm.company.deleted' = 'crm.company.deleted', 'crm.contact.created' = 'crm.contact.created', 'crm.contact.updated' = 'crm.contact.updated', 'crm.contact.deleted' = 'crm.contact.deleted', 'crm.lead.created' = 'crm.lead.created', 'crm.lead.updated' = 'crm.lead.updated', 'crm.lead.deleted' = 'crm.lead.deleted', 'crm.note.created' = 'crm.note.created', 'crm.note.updated' = 'crm.note.updated', 'crm.note.deleted' = 'crm.note.deleted', 'crm.opportunity.created' = 'crm.opportunity.created', 'crm.opportunity.updated' = 'crm.opportunity.updated', 'crm.opportunity.deleted' = 'crm.opportunity.deleted' }

	export interface CrmWebhookEvent {
	}
	export interface CrmWebhookEventFormProperties {
	}
	export function CreateCrmWebhookEventFormGroup() {
		return new FormGroup<CrmWebhookEventFormProperties>({
		});

	}


	/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
	export enum Currency { UNKNOWN_CURRENCY = 'UNKNOWN_CURRENCY', AED = 'AED', AFN = 'AFN', ALL = 'ALL', AMD = 'AMD', ANG = 'ANG', AOA = 'AOA', ARS = 'ARS', AUD = 'AUD', AWG = 'AWG', AZN = 'AZN', BAM = 'BAM', BBD = 'BBD', BDT = 'BDT', BGN = 'BGN', BHD = 'BHD', BIF = 'BIF', BMD = 'BMD', BND = 'BND', BOB = 'BOB', BOV = 'BOV', BRL = 'BRL', BSD = 'BSD', BTN = 'BTN', BWP = 'BWP', BYR = 'BYR', BZD = 'BZD', CAD = 'CAD', CDF = 'CDF', CHE = 'CHE', CHF = 'CHF', CHW = 'CHW', CLF = 'CLF', CLP = 'CLP', CNY = 'CNY', COP = 'COP', COU = 'COU', CRC = 'CRC', CUC = 'CUC', CUP = 'CUP', CVE = 'CVE', CZK = 'CZK', DJF = 'DJF', DKK = 'DKK', DOP = 'DOP', DZD = 'DZD', EGP = 'EGP', ERN = 'ERN', ETB = 'ETB', EUR = 'EUR', FJD = 'FJD', FKP = 'FKP', GBP = 'GBP', GEL = 'GEL', GHS = 'GHS', GIP = 'GIP', GMD = 'GMD', GNF = 'GNF', GTQ = 'GTQ', GYD = 'GYD', HKD = 'HKD', HNL = 'HNL', HRK = 'HRK', HTG = 'HTG', HUF = 'HUF', IDR = 'IDR', ILS = 'ILS', INR = 'INR', IQD = 'IQD', IRR = 'IRR', ISK = 'ISK', JMD = 'JMD', JOD = 'JOD', JPY = 'JPY', KES = 'KES', KGS = 'KGS', KHR = 'KHR', KMF = 'KMF', KPW = 'KPW', KRW = 'KRW', KWD = 'KWD', KYD = 'KYD', KZT = 'KZT', LAK = 'LAK', LBP = 'LBP', LKR = 'LKR', LRD = 'LRD', LSL = 'LSL', LTL = 'LTL', LVL = 'LVL', LYD = 'LYD', MAD = 'MAD', MDL = 'MDL', MGA = 'MGA', MKD = 'MKD', MMK = 'MMK', MNT = 'MNT', MOP = 'MOP', MRO = 'MRO', MUR = 'MUR', MVR = 'MVR', MWK = 'MWK', MXN = 'MXN', MXV = 'MXV', MYR = 'MYR', MZN = 'MZN', NAD = 'NAD', NGN = 'NGN', NIO = 'NIO', NOK = 'NOK', NPR = 'NPR', NZD = 'NZD', OMR = 'OMR', PAB = 'PAB', PEN = 'PEN', PGK = 'PGK', PHP = 'PHP', PKR = 'PKR', PLN = 'PLN', PYG = 'PYG', QAR = 'QAR', RON = 'RON', RSD = 'RSD', RUB = 'RUB', RWF = 'RWF', SAR = 'SAR', SBD = 'SBD', SCR = 'SCR', SDG = 'SDG', SEK = 'SEK', SGD = 'SGD', SHP = 'SHP', SLL = 'SLL', SOS = 'SOS', SRD = 'SRD', SSP = 'SSP', STD = 'STD', SVC = 'SVC', SYP = 'SYP', SZL = 'SZL', THB = 'THB', TJS = 'TJS', TMT = 'TMT', TND = 'TND', TOP = 'TOP', TRC = 'TRC', TRY = 'TRY', TTD = 'TTD', TWD = 'TWD', TZS = 'TZS', UAH = 'UAH', UGX = 'UGX', USD = 'USD', USN = 'USN', USS = 'USS', UYI = 'UYI', UYU = 'UYU', UZS = 'UZS', VEF = 'VEF', VND = 'VND', VUV = 'VUV', WST = 'WST', XAF = 'XAF', XAG = 'XAG', XAU = 'XAU', XBA = 'XBA', XBB = 'XBB', XBC = 'XBC', XBD = 'XBD', XCD = 'XCD', XDR = 'XDR', XOF = 'XOF', XPD = 'XPD', XPF = 'XPF', XPT = 'XPT', XTS = 'XTS', XXX = 'XXX', YER = 'YER', ZAR = 'ZAR', ZMK = 'ZMK', ZMW = 'ZMW', BTC = 'BTC', ETH = 'ETH' }

	export interface DeleteActivityResponse {

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
	export interface DeleteActivityResponseFormProperties {

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
	export function CreateDeleteActivityResponseFormGroup() {
		return new FormGroup<DeleteActivityResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteCompanyResponse {

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
	export interface DeleteCompanyResponseFormProperties {

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
	export function CreateDeleteCompanyResponseFormGroup() {
		return new FormGroup<DeleteCompanyResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteContactResponse {

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
	export interface DeleteContactResponseFormProperties {

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
	export function CreateDeleteContactResponseFormGroup() {
		return new FormGroup<DeleteContactResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLeadResponse {

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
	export interface DeleteLeadResponseFormProperties {

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
	export function CreateDeleteLeadResponseFormGroup() {
		return new FormGroup<DeleteLeadResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteNoteResponse {

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
	export interface DeleteNoteResponseFormProperties {

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
	export function CreateDeleteNoteResponseFormGroup() {
		return new FormGroup<DeleteNoteResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteOpportunityResponse {

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
	export interface DeleteOpportunityResponseFormProperties {

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
	export function CreateDeleteOpportunityResponseFormGroup() {
		return new FormGroup<DeleteOpportunityResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePipelineResponse {

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
	export interface DeletePipelineResponseFormProperties {

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
	export function CreateDeletePipelineResponseFormGroup() {
		return new FormGroup<DeletePipelineResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteUserResponse {

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
	export interface DeleteUserResponseFormProperties {

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
	export function CreateDeleteUserResponseFormGroup() {
		return new FormGroup<DeleteUserResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetActivitiesResponse {

		/** Required */
		data: Array<Activity>;

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
	export interface GetActivitiesResponseFormProperties {

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
	export function CreateGetActivitiesResponseFormGroup() {
		return new FormGroup<GetActivitiesResponseFormProperties>({
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

	export interface GetActivityResponse {

		/** Required */
		data: Activity;

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
	export interface GetActivityResponseFormProperties {

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
	export function CreateGetActivityResponseFormGroup() {
		return new FormGroup<GetActivityResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCompaniesResponse {

		/** Required */
		data: Array<Company>;

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
	export interface GetCompaniesResponseFormProperties {

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
	export function CreateGetCompaniesResponseFormGroup() {
		return new FormGroup<GetCompaniesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCompanyResponse {

		/** Required */
		data: Company;

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
	export interface GetCompanyResponseFormProperties {

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
	export function CreateGetCompanyResponseFormGroup() {
		return new FormGroup<GetCompanyResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContactResponse {

		/** Required */
		data: Contact;

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
	export interface GetContactResponseFormProperties {

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
	export function CreateGetContactResponseFormGroup() {
		return new FormGroup<GetContactResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContactsResponse {

		/** Required */
		data: Array<Contact>;

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
	export interface GetContactsResponseFormProperties {

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
	export function CreateGetContactsResponseFormGroup() {
		return new FormGroup<GetContactsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLeadResponse {

		/** Required */
		data: Lead;

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
	export interface GetLeadResponseFormProperties {

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
	export function CreateGetLeadResponseFormGroup() {
		return new FormGroup<GetLeadResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Lead {
		addresses?: Array<Address>;

		/** The company the lead is associated with. */
		company_id?: string | null;

		/**
		 * The name of the company the lead is associated with.
		 * Required
		 */
		company_name: string;

		/** Date created in ISO 8601 format */
		created_at?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;
		custom_fields?: Array<CustomField>;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The description of the lead. */
		description?: string | null;
		emails?: Array<Email>;

		/** The fax number of the lead. */
		fax?: string | null;

		/** The first name of the lead. */
		first_name?: string | null;

		/** Unique identifier for the contact. */
		id?: string | null;

		/** language code according to ISO 639-1. For the United States - EN */
		language?: string | null;

		/** The last name of the lead. */
		last_name?: string | null;

		/** The identifier of the lead. */
		lead_id?: string | null;

		/** The source of the lead. */
		lead_source?: string | null;

		/** The monetary amount of the lead. */
		monetary_amount?: number | null;

		/**
		 * Full name of the lead.
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** The owner of the lead. */
		owner_id?: string | null;
		phone_numbers?: Array<PhoneNumber>;

		/** The prefix of the lead. */
		prefix?: string | null;
		social_links?: Array<SocialLink>;
		status?: string | null;
		tags?: Array<string>;

		/** The job title of the lead. */
		title?: string | null;

		/** Date updated in ISO 8601 format */
		updated_at?: string | null;
		websites?: Array<Website>;
	}
	export interface LeadFormProperties {

		/** The company the lead is associated with. */
		company_id: FormControl<string | null | undefined>,

		/**
		 * The name of the company the lead is associated with.
		 * Required
		 */
		company_name: FormControl<string | null | undefined>,

		/** Date created in ISO 8601 format */
		created_at: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** The description of the lead. */
		description: FormControl<string | null | undefined>,

		/** The fax number of the lead. */
		fax: FormControl<string | null | undefined>,

		/** The first name of the lead. */
		first_name: FormControl<string | null | undefined>,

		/** Unique identifier for the contact. */
		id: FormControl<string | null | undefined>,

		/** language code according to ISO 639-1. For the United States - EN */
		language: FormControl<string | null | undefined>,

		/** The last name of the lead. */
		last_name: FormControl<string | null | undefined>,

		/** The identifier of the lead. */
		lead_id: FormControl<string | null | undefined>,

		/** The source of the lead. */
		lead_source: FormControl<string | null | undefined>,

		/** The monetary amount of the lead. */
		monetary_amount: FormControl<number | null | undefined>,

		/**
		 * Full name of the lead.
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** The owner of the lead. */
		owner_id: FormControl<string | null | undefined>,

		/** The prefix of the lead. */
		prefix: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,

		/** The job title of the lead. */
		title: FormControl<string | null | undefined>,

		/** Date updated in ISO 8601 format */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateLeadFormGroup() {
		return new FormGroup<LeadFormProperties>({
			company_id: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_at: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$')]),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			lead_id: new FormControl<string | null | undefined>(undefined),
			lead_source: new FormControl<string | null | undefined>(undefined),
			monetary_amount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			owner_id: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$')]),
		});

	}

	export interface GetLeadsResponse {

		/** Required */
		data: Array<Lead>;

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
	export interface GetLeadsResponseFormProperties {

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
	export function CreateGetLeadsResponseFormGroup() {
		return new FormGroup<GetLeadsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetNoteResponse {

		/** Required */
		data: Note;

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
	export interface GetNoteResponseFormProperties {

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
	export function CreateGetNoteResponseFormGroup() {
		return new FormGroup<GetNoteResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Note {

		/** Whether the Note is active or not. */
		active?: boolean | null;

		/** The company that is related to the note. */
		company_id?: string | null;

		/** The contact that is related to the note. */
		contact_id?: string | null;

		/** The content of the note. */
		content?: string | null;

		/** The timestamp when the note was created */
		created_at?: string | null;

		/** The user that created the note. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The unique identifier of the note */
		id?: string | null;

		/** The lead that is related to the note. */
		lead_id?: string | null;

		/** The opportunity that is related to the note. */
		opportunity_id?: string | null;

		/** The user that owns the note. */
		owner_id?: string | null;

		/** The title of the note */
		title?: string | null;

		/** The timestamp when the note was last updated */
		updated_at?: string | null;

		/** The user that last updated the note. */
		updated_by?: string | null;
	}
	export interface NoteFormProperties {

		/** Whether the Note is active or not. */
		active: FormControl<boolean | null | undefined>,

		/** The company that is related to the note. */
		company_id: FormControl<string | null | undefined>,

		/** The contact that is related to the note. */
		contact_id: FormControl<string | null | undefined>,

		/** The content of the note. */
		content: FormControl<string | null | undefined>,

		/** The timestamp when the note was created */
		created_at: FormControl<string | null | undefined>,

		/** The user that created the note. */
		created_by: FormControl<string | null | undefined>,

		/** The unique identifier of the note */
		id: FormControl<string | null | undefined>,

		/** The lead that is related to the note. */
		lead_id: FormControl<string | null | undefined>,

		/** The opportunity that is related to the note. */
		opportunity_id: FormControl<string | null | undefined>,

		/** The user that owns the note. */
		owner_id: FormControl<string | null | undefined>,

		/** The title of the note */
		title: FormControl<string | null | undefined>,

		/** The timestamp when the note was last updated */
		updated_at: FormControl<string | null | undefined>,

		/** The user that last updated the note. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateNoteFormGroup() {
		return new FormGroup<NoteFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			company_id: new FormControl<string | null | undefined>(undefined),
			contact_id: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lead_id: new FormControl<string | null | undefined>(undefined),
			opportunity_id: new FormControl<string | null | undefined>(undefined),
			owner_id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetNotesResponse {

		/** Required */
		data: Array<Note>;

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
	export interface GetNotesResponseFormProperties {

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
	export function CreateGetNotesResponseFormGroup() {
		return new FormGroup<GetNotesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetOpportunitiesResponse {

		/** Required */
		data: Array<Opportunity>;

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
	export interface GetOpportunitiesResponseFormProperties {

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
	export function CreateGetOpportunitiesResponseFormGroup() {
		return new FormGroup<GetOpportunitiesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Opportunity {

		/** The actual closing date for the opportunity. If close_date is null, the opportunity is not closed yet. */
		close_date?: Date | null;

		/** The unique identifier of the company associated with the opportunity. */
		company_id?: string | null;

		/** The name of the company associated with the opportunity. */
		company_name?: string | null;

		/** The unique identifier of the contact associated with the opportunity. */
		contact_id?: string | null;

		/** An array of unique identifiers of all contacts associated with the opportunity. */
		contact_ids?: Array<string>;

		/** The date and time when the opportunity was created. */
		created_at?: Date | null;

		/** The unique identifier of the user who created the opportunity. */
		created_by?: string | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;
		custom_fields?: Array<CustomField>;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The date and time when the opportunity was last contacted. */
		date_last_contacted?: Date | null;

		/** The date and time when the lead associated with the opportunity was created. */
		date_lead_created?: Date | null;

		/** The date and time when the stage of the opportunity was last changed. */
		date_stage_changed?: Date | null;

		/** Indicates whether the opportunity has been deleted. */
		deleted?: boolean | null;

		/** A description of the opportunity. */
		description?: string | null;

		/** The expected revenue from the opportunity */
		expected_revenue?: number | null;

		/** A unique identifier for the opportunity. */
		id?: string | null;

		/** The number of interactions with the opportunity. */
		interaction_count?: number | null;

		/** The date and time of the last activity associated with the opportunity. */
		last_activity_at?: string | null;

		/** The unique identifier of the lead associated with the opportunity. */
		lead_id?: string | null;

		/** The source of the lead associated with the opportunity. */
		lead_source?: string | null;

		/** The reason why the opportunity was lost. */
		loss_reason?: string | null;

		/** The unique identifier of the reason why the opportunity was lost. */
		loss_reason_id?: string | null;

		/** The monetary value associated with the opportunity */
		monetary_amount?: number | null;

		/** The unique identifier of the user who owns the opportunity. */
		owner_id?: string | null;

		/** The unique identifier of the pipeline associated with the opportunity */
		pipeline_id?: string | null;

		/** The unique identifier of the stage in the pipeline associated with the opportunity. */
		pipeline_stage_id?: string | null;

		/**
		 * The unique identifier of the primary contact associated with the opportunity.
		 * Required
		 */
		primary_contact_id: string;

		/** The priority level of the opportunity. */
		priority?: string | null;

		/** The unique identifier of the source of the opportunity. */
		source_id?: string | null;

		/** The date and time when the stage of the opportunity was last changed. */
		stage_last_changed_at?: Date | null;

		/** The current status of the opportunity. */
		status?: string | null;

		/** The unique identifier of the current status of the opportunity. */
		status_id?: string | null;
		tags?: Array<string>;

		/**
		 * The title or name of the opportunity.
		 * Required
		 * Min length: 1
		 */
		title: string;

		/** The type of the opportunity */
		type?: string | null;

		/** The date and time when the opportunity was last updated. */
		updated_at?: Date | null;

		/** The unique identifier of the user who last updated the opportunity. */
		updated_by?: string | null;

		/** The probability of winning the opportunity, expressed as a percentage. */
		win_probability?: number | null;

		/** The reason why the opportunity was won. */
		won_reason?: string | null;

		/** The unique identifier of the reason why the opportunity was won. */
		won_reason_id?: string | null;
	}
	export interface OpportunityFormProperties {

		/** The actual closing date for the opportunity. If close_date is null, the opportunity is not closed yet. */
		close_date: FormControl<Date | null | undefined>,

		/** The unique identifier of the company associated with the opportunity. */
		company_id: FormControl<string | null | undefined>,

		/** The name of the company associated with the opportunity. */
		company_name: FormControl<string | null | undefined>,

		/** The unique identifier of the contact associated with the opportunity. */
		contact_id: FormControl<string | null | undefined>,

		/** The date and time when the opportunity was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The unique identifier of the user who created the opportunity. */
		created_by: FormControl<string | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** The date and time when the opportunity was last contacted. */
		date_last_contacted: FormControl<Date | null | undefined>,

		/** The date and time when the lead associated with the opportunity was created. */
		date_lead_created: FormControl<Date | null | undefined>,

		/** The date and time when the stage of the opportunity was last changed. */
		date_stage_changed: FormControl<Date | null | undefined>,

		/** Indicates whether the opportunity has been deleted. */
		deleted: FormControl<boolean | null | undefined>,

		/** A description of the opportunity. */
		description: FormControl<string | null | undefined>,

		/** The expected revenue from the opportunity */
		expected_revenue: FormControl<number | null | undefined>,

		/** A unique identifier for the opportunity. */
		id: FormControl<string | null | undefined>,

		/** The number of interactions with the opportunity. */
		interaction_count: FormControl<number | null | undefined>,

		/** The date and time of the last activity associated with the opportunity. */
		last_activity_at: FormControl<string | null | undefined>,

		/** The unique identifier of the lead associated with the opportunity. */
		lead_id: FormControl<string | null | undefined>,

		/** The source of the lead associated with the opportunity. */
		lead_source: FormControl<string | null | undefined>,

		/** The reason why the opportunity was lost. */
		loss_reason: FormControl<string | null | undefined>,

		/** The unique identifier of the reason why the opportunity was lost. */
		loss_reason_id: FormControl<string | null | undefined>,

		/** The monetary value associated with the opportunity */
		monetary_amount: FormControl<number | null | undefined>,

		/** The unique identifier of the user who owns the opportunity. */
		owner_id: FormControl<string | null | undefined>,

		/** The unique identifier of the pipeline associated with the opportunity */
		pipeline_id: FormControl<string | null | undefined>,

		/** The unique identifier of the stage in the pipeline associated with the opportunity. */
		pipeline_stage_id: FormControl<string | null | undefined>,

		/**
		 * The unique identifier of the primary contact associated with the opportunity.
		 * Required
		 */
		primary_contact_id: FormControl<string | null | undefined>,

		/** The priority level of the opportunity. */
		priority: FormControl<string | null | undefined>,

		/** The unique identifier of the source of the opportunity. */
		source_id: FormControl<string | null | undefined>,

		/** The date and time when the stage of the opportunity was last changed. */
		stage_last_changed_at: FormControl<Date | null | undefined>,

		/** The current status of the opportunity. */
		status: FormControl<string | null | undefined>,

		/** The unique identifier of the current status of the opportunity. */
		status_id: FormControl<string | null | undefined>,

		/**
		 * The title or name of the opportunity.
		 * Required
		 * Min length: 1
		 */
		title: FormControl<string | null | undefined>,

		/** The type of the opportunity */
		type: FormControl<string | null | undefined>,

		/** The date and time when the opportunity was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The unique identifier of the user who last updated the opportunity. */
		updated_by: FormControl<string | null | undefined>,

		/** The probability of winning the opportunity, expressed as a percentage. */
		win_probability: FormControl<number | null | undefined>,

		/** The reason why the opportunity was won. */
		won_reason: FormControl<string | null | undefined>,

		/** The unique identifier of the reason why the opportunity was won. */
		won_reason_id: FormControl<string | null | undefined>,
	}
	export function CreateOpportunityFormGroup() {
		return new FormGroup<OpportunityFormProperties>({
			close_date: new FormControl<Date | null | undefined>(undefined),
			company_id: new FormControl<string | null | undefined>(undefined),
			company_name: new FormControl<string | null | undefined>(undefined),
			contact_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			date_last_contacted: new FormControl<Date | null | undefined>(undefined),
			date_lead_created: new FormControl<Date | null | undefined>(undefined),
			date_stage_changed: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expected_revenue: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			interaction_count: new FormControl<number | null | undefined>(undefined),
			last_activity_at: new FormControl<string | null | undefined>(undefined),
			lead_id: new FormControl<string | null | undefined>(undefined),
			lead_source: new FormControl<string | null | undefined>(undefined),
			loss_reason: new FormControl<string | null | undefined>(undefined),
			loss_reason_id: new FormControl<string | null | undefined>(undefined),
			monetary_amount: new FormControl<number | null | undefined>(undefined),
			owner_id: new FormControl<string | null | undefined>(undefined),
			pipeline_id: new FormControl<string | null | undefined>(undefined),
			pipeline_stage_id: new FormControl<string | null | undefined>(undefined),
			primary_contact_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<string | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined),
			stage_last_changed_at: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			status_id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			win_probability: new FormControl<number | null | undefined>(undefined),
			won_reason: new FormControl<string | null | undefined>(undefined),
			won_reason_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOpportunityResponse {

		/** Required */
		data: Opportunity;

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
	export interface GetOpportunityResponseFormProperties {

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
	export function CreateGetOpportunityResponseFormGroup() {
		return new FormGroup<GetOpportunityResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPipelineResponse {

		/** Required */
		data: Pipeline;

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
	export interface GetPipelineResponseFormProperties {

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
	export function CreateGetPipelineResponseFormGroup() {
		return new FormGroup<GetPipelineResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Pipeline {

		/** Whether the Pipeline is active or not. */
		active?: boolean | null;

		/** Whether the Pipeline is archived or not. */
		archived?: boolean | null;

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency?: BankAccountCurrency | null;

		/** The order in which the Pipeline is displayed in the UI. */
		display_order?: number | null;

		/** The unique identifier of the Pipeline. */
		id?: string | null;

		/**
		 * The name of the Pipeline.
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** The Pipeline Stages. */
		PipelineStages?: Array<PipelineStages>;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** Whether the Pipeline has win probability enabled or not. */
		win_probability_enabled?: boolean | null;
	}
	export interface PipelineFormProperties {

		/** Whether the Pipeline is active or not. */
		active: FormControl<boolean | null | undefined>,

		/** Whether the Pipeline is archived or not. */
		archived: FormControl<boolean | null | undefined>,

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). */
		currency: FormControl<BankAccountCurrency | null | undefined>,

		/** The order in which the Pipeline is displayed in the UI. */
		display_order: FormControl<number | null | undefined>,

		/** The unique identifier of the Pipeline. */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the Pipeline.
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** Whether the Pipeline has win probability enabled or not. */
		win_probability_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePipelineFormGroup() {
		return new FormGroup<PipelineFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			archived: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			currency: new FormControl<BankAccountCurrency | null | undefined>(undefined),
			display_order: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			win_probability_enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PipelineStages {

		/** The order in which the Pipeline Stage is displayed in the UI. */
		display_order?: number | null;

		/** The unique identifier of the Pipeline Stage. */
		id?: string | null;

		/** The name of the Pipeline Stage. */
		name?: string | null;

		/** The value of the Pipeline Stage. */
		value?: string | null;

		/** The expected probability of winning an Opportunity in this Pipeline Stage. Valid values are [0-100]. */
		win_probability?: number | null;
	}
	export interface PipelineStagesFormProperties {

		/** The order in which the Pipeline Stage is displayed in the UI. */
		display_order: FormControl<number | null | undefined>,

		/** The unique identifier of the Pipeline Stage. */
		id: FormControl<string | null | undefined>,

		/** The name of the Pipeline Stage. */
		name: FormControl<string | null | undefined>,

		/** The value of the Pipeline Stage. */
		value: FormControl<string | null | undefined>,

		/** The expected probability of winning an Opportunity in this Pipeline Stage. Valid values are [0-100]. */
		win_probability: FormControl<number | null | undefined>,
	}
	export function CreatePipelineStagesFormGroup() {
		return new FormGroup<PipelineStagesFormProperties>({
			display_order: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			win_probability: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetPipelinesResponse {

		/** Required */
		data: Array<Pipeline>;

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
	export interface GetPipelinesResponseFormProperties {

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
	export function CreateGetPipelinesResponseFormGroup() {
		return new FormGroup<GetPipelinesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUserResponse {

		/** Required */
		data: User;

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
	export interface GetUserResponseFormProperties {

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
	export function CreateGetUserResponseFormGroup() {
		return new FormGroup<GetUserResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface User {
		addresses?: Array<Address>;

		/** The name of the company. */
		company_name?: string | null;

		/** The date and time when the user was created. */
		created_at?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field. */
		department?: string | null;

		/** A description of the object. */
		description?: string | null;

		/** The division the person is currently in. Usually a collection of departments or teams or regions. */
		division?: string | null;

		/** Required */
		emails: Array<Email>;

		/** An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company. */
		employee_number?: string | null;

		/** The first name of the person. */
		first_name?: string | null;

		/** The unique identifier for the user */
		id?: string | null;

		/** The URL of the user's avatar */
		image?: string | null;

		/** language code according to ISO 639-1. For the United States - EN */
		language?: string | null;

		/** The last name of the person. */
		last_name?: string | null;

		/** The parent user id */
		parent_id?: string | null;

		/** The password of the user */
		password?: string | null;
		phone_numbers?: Array<PhoneNumber>;

		/** The status of the user */
		status?: string | null;

		/** The job title of the person. */
		title?: string | null;

		/** The date and time when the user was last updated. */
		updated_at?: string | null;

		/** The username of the user */
		username?: string | null;
	}
	export interface UserFormProperties {

		/** The name of the company. */
		company_name: FormControl<string | null | undefined>,

		/** The date and time when the user was created. */
		created_at: FormControl<string | null | undefined>,

		/** The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field. */
		department: FormControl<string | null | undefined>,

		/** A description of the object. */
		description: FormControl<string | null | undefined>,

		/** The division the person is currently in. Usually a collection of departments or teams or regions. */
		division: FormControl<string | null | undefined>,

		/** An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company. */
		employee_number: FormControl<string | null | undefined>,

		/** The first name of the person. */
		first_name: FormControl<string | null | undefined>,

		/** The unique identifier for the user */
		id: FormControl<string | null | undefined>,

		/** The URL of the user's avatar */
		image: FormControl<string | null | undefined>,

		/** language code according to ISO 639-1. For the United States - EN */
		language: FormControl<string | null | undefined>,

		/** The last name of the person. */
		last_name: FormControl<string | null | undefined>,

		/** The parent user id */
		parent_id: FormControl<string | null | undefined>,

		/** The password of the user */
		password: FormControl<string | null | undefined>,

		/** The status of the user */
		status: FormControl<string | null | undefined>,

		/** The job title of the person. */
		title: FormControl<string | null | undefined>,

		/** The date and time when the user was last updated. */
		updated_at: FormControl<string | null | undefined>,

		/** The username of the user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			company_name: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			department: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			division: new FormControl<string | null | undefined>(undefined),
			employee_number: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			parent_id: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUsersResponse {

		/** Required */
		data: Array<User>;

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
	export interface GetUsersResponseFormProperties {

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
	export function CreateGetUsersResponseFormGroup() {
		return new FormGroup<GetUsersResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LeadsFilter {

		/** E-mail of the lead to filter on */
		email?: string | null;

		/** First name of the lead to filter on */
		first_name?: string | null;

		/** Last name of the lead to filter on */
		last_name?: string | null;

		/** Name of the lead to filter on */
		name?: string | null;
	}
	export interface LeadsFilterFormProperties {

		/** E-mail of the lead to filter on */
		email: FormControl<string | null | undefined>,

		/** First name of the lead to filter on */
		first_name: FormControl<string | null | undefined>,

		/** Last name of the lead to filter on */
		last_name: FormControl<string | null | undefined>,

		/** Name of the lead to filter on */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLeadsFilterFormGroup() {
		return new FormGroup<LeadsFilterFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LeadsSort {

		/** The field on which to sort the Leads */
		by?: ContactsSortBy | null;

		/** The direction in which to sort the results */
		direction?: CompaniesSortDirection | null;
	}
	export interface LeadsSortFormProperties {

		/** The field on which to sort the Leads */
		by: FormControl<ContactsSortBy | null | undefined>,

		/** The direction in which to sort the results */
		direction: FormControl<CompaniesSortDirection | null | undefined>,
	}
	export function CreateLeadsSortFormGroup() {
		return new FormGroup<LeadsSortFormProperties>({
			by: new FormControl<ContactsSortBy | null | undefined>(undefined),
			direction: new FormControl<CompaniesSortDirection | null | undefined>(undefined),
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

	export interface OpportunitiesFilter {

		/** Company ID to filter on */
		company_id?: string | null;

		/** Monetary amount to filter on */
		monetary_amount?: number | null;

		/** Status to filter on */
		status?: string | null;

		/** Title of the opportunity to filter on */
		title?: string | null;

		/** Win probability to filter on */
		win_probability?: number | null;
	}
	export interface OpportunitiesFilterFormProperties {

		/** Company ID to filter on */
		company_id: FormControl<string | null | undefined>,

		/** Monetary amount to filter on */
		monetary_amount: FormControl<number | null | undefined>,

		/** Status to filter on */
		status: FormControl<string | null | undefined>,

		/** Title of the opportunity to filter on */
		title: FormControl<string | null | undefined>,

		/** Win probability to filter on */
		win_probability: FormControl<number | null | undefined>,
	}
	export function CreateOpportunitiesFilterFormGroup() {
		return new FormGroup<OpportunitiesFilterFormProperties>({
			company_id: new FormControl<string | null | undefined>(undefined),
			monetary_amount: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			win_probability: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OpportunitiesSort {

		/** The field on which to sort the Opportunities */
		by?: OpportunitiesSortBy | null;

		/** The direction in which to sort the results */
		direction?: CompaniesSortDirection | null;
	}
	export interface OpportunitiesSortFormProperties {

		/** The field on which to sort the Opportunities */
		by: FormControl<OpportunitiesSortBy | null | undefined>,

		/** The direction in which to sort the results */
		direction: FormControl<CompaniesSortDirection | null | undefined>,
	}
	export function CreateOpportunitiesSortFormGroup() {
		return new FormGroup<OpportunitiesSortFormProperties>({
			by: new FormControl<OpportunitiesSortBy | null | undefined>(undefined),
			direction: new FormControl<CompaniesSortDirection | null | undefined>(undefined),
		});

	}

	export enum OpportunitiesSortBy { created_at = 'created_at', updated_at = 'updated_at', title = 'title', win_probability = 'win_probability', monetary_amount = 'monetary_amount', status = 'status' }

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


	/** The direction in which to sort the results */
	export enum SortDirection { asc = 'asc', desc = 'desc' }

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

	export interface UpdateActivityResponse {

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
	export interface UpdateActivityResponseFormProperties {

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
	export function CreateUpdateActivityResponseFormGroup() {
		return new FormGroup<UpdateActivityResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCompanyResponse {

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
	export interface UpdateCompanyResponseFormProperties {

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
	export function CreateUpdateCompanyResponseFormGroup() {
		return new FormGroup<UpdateCompanyResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateContactResponse {

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
	export interface UpdateContactResponseFormProperties {

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
	export function CreateUpdateContactResponseFormGroup() {
		return new FormGroup<UpdateContactResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateLeadResponse {

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
	export interface UpdateLeadResponseFormProperties {

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
	export function CreateUpdateLeadResponseFormGroup() {
		return new FormGroup<UpdateLeadResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNoteResponse {

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
	export interface UpdateNoteResponseFormProperties {

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
	export function CreateUpdateNoteResponseFormGroup() {
		return new FormGroup<UpdateNoteResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOpportunityResponse {

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
	export interface UpdateOpportunityResponseFormProperties {

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
	export function CreateUpdateOpportunityResponseFormGroup() {
		return new FormGroup<UpdateOpportunityResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePipelineResponse {

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
	export interface UpdatePipelineResponseFormProperties {

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
	export function CreateUpdatePipelineResponseFormGroup() {
		return new FormGroup<UpdatePipelineResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateUserResponse {

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
	export interface UpdateUserResponseFormProperties {

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
	export function CreateUpdateUserResponseFormGroup() {
		return new FormGroup<UpdateUserResponseFormProperties>({
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
		 * List activities
		 * List activities
		 * Get crm/activities
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {ActivitiesFilter} filter Apply filters
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetActivitiesResponse} Activities
		 */
		ActivitiesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: ActivitiesFilter | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetActivitiesResponse> {
			return this.http.get<GetActivitiesResponse>(this.baseUri + 'crm/activities?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create activity
		 * Create activity
		 * Post crm/activities
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		ActivitiesAdd(raw: boolean | null | undefined, requestBody: Activity): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'crm/activities?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete activity
		 * Delete activity
		 * Delete crm/activities/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteActivityResponse} Activity deleted
		 */
		ActivitiesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteActivityResponse> {
			return this.http.delete<DeleteActivityResponse>(this.baseUri + 'crm/activities/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get activity
		 * Get activity
		 * Get crm/activities/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetActivityResponse} Activity
		 */
		ActivitiesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetActivityResponse> {
			return this.http.get<GetActivityResponse>(this.baseUri + 'crm/activities/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update activity
		 * Update activity
		 * Patch crm/activities/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateActivityResponse} Activity updated
		 */
		ActivitiesUpdate(id: string, raw: boolean | null | undefined, requestBody: Activity): Observable<UpdateActivityResponse> {
			return this.http.patch<UpdateActivityResponse>(this.baseUri + 'crm/activities/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List companies
		 * List companies
		 * Get crm/companies
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {CompaniesFilter} filter Apply filters
		 * @param {CompaniesSort} sort Apply sorting
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetCompaniesResponse} Companies
		 */
		CompaniesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: CompaniesFilter | null | undefined, sort: CompaniesSort | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetCompaniesResponse> {
			return this.http.get<GetCompaniesResponse>(this.baseUri + 'crm/companies?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&sort=' + sort + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create company
		 * Create company
		 * Post crm/companies
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		CompaniesAdd(raw: boolean | null | undefined, requestBody: Company): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'crm/companies?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete company
		 * Delete company
		 * Delete crm/companies/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteCompanyResponse} Company deleted
		 */
		CompaniesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteCompanyResponse> {
			return this.http.delete<DeleteCompanyResponse>(this.baseUri + 'crm/companies/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get company
		 * Get company
		 * Get crm/companies/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetCompanyResponse} Company
		 */
		CompaniesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetCompanyResponse> {
			return this.http.get<GetCompanyResponse>(this.baseUri + 'crm/companies/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update company
		 * Update company
		 * Patch crm/companies/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateCompanyResponse} Company updated
		 */
		CompaniesUpdate(id: string, raw: boolean | null | undefined, requestBody: Company): Observable<UpdateCompanyResponse> {
			return this.http.patch<UpdateCompanyResponse>(this.baseUri + 'crm/companies/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List contacts
		 * List contacts
		 * Get crm/contacts
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {ContactsFilter} filter Apply filters
		 * @param {ContactsSort} sort Apply sorting
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetContactsResponse} Contacts
		 */
		ContactsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: ContactsFilter | null | undefined, sort: ContactsSort | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetContactsResponse> {
			return this.http.get<GetContactsResponse>(this.baseUri + 'crm/contacts?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&sort=' + sort + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create contact
		 * Create contact
		 * Post crm/contacts
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		ContactsAdd(raw: boolean | null | undefined, requestBody: Contact): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'crm/contacts?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete contact
		 * Delete contact
		 * Delete crm/contacts/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteContactResponse} Contact deleted
		 */
		ContactsDelete(id: string, raw: boolean | null | undefined): Observable<DeleteContactResponse> {
			return this.http.delete<DeleteContactResponse>(this.baseUri + 'crm/contacts/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get contact
		 * Get contact
		 * Get crm/contacts/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetContactResponse} Contact
		 */
		ContactsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetContactResponse> {
			return this.http.get<GetContactResponse>(this.baseUri + 'crm/contacts/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update contact
		 * Update contact
		 * Patch crm/contacts/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateContactResponse} Contact updated
		 */
		ContactsUpdate(id: string, raw: boolean | null | undefined, requestBody: Contact): Observable<UpdateContactResponse> {
			return this.http.patch<UpdateContactResponse>(this.baseUri + 'crm/contacts/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List leads
		 * List leads
		 * Get crm/leads
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {LeadsFilter} filter Apply filters
		 * @param {LeadsSort} sort Apply sorting
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetLeadsResponse} Leads
		 */
		LeadsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: LeadsFilter | null | undefined, sort: LeadsSort | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetLeadsResponse> {
			return this.http.get<GetLeadsResponse>(this.baseUri + 'crm/leads?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&sort=' + sort + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create lead
		 * Create lead
		 * Post crm/leads
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		LeadsAdd(raw: boolean | null | undefined, requestBody: Lead): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'crm/leads?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete lead
		 * Delete lead
		 * Delete crm/leads/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteLeadResponse} Lead deleted
		 */
		LeadsDelete(id: string, raw: boolean | null | undefined): Observable<DeleteLeadResponse> {
			return this.http.delete<DeleteLeadResponse>(this.baseUri + 'crm/leads/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get lead
		 * Get lead
		 * Get crm/leads/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetLeadResponse} Lead
		 */
		LeadsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetLeadResponse> {
			return this.http.get<GetLeadResponse>(this.baseUri + 'crm/leads/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update lead
		 * Update lead
		 * Patch crm/leads/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateLeadResponse} Lead updated
		 */
		LeadsUpdate(id: string, raw: boolean | null | undefined, requestBody: Lead): Observable<UpdateLeadResponse> {
			return this.http.patch<UpdateLeadResponse>(this.baseUri + 'crm/leads/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List notes
		 * List notes
		 * Get crm/notes
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetNotesResponse} Notes
		 */
		NotesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetNotesResponse> {
			return this.http.get<GetNotesResponse>(this.baseUri + 'crm/notes?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create note
		 * Create note
		 * Post crm/notes
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		NotesAdd(raw: boolean | null | undefined, requestBody: Note): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'crm/notes?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete note
		 * Delete note
		 * Delete crm/notes/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteNoteResponse} Note deleted
		 */
		NotesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteNoteResponse> {
			return this.http.delete<DeleteNoteResponse>(this.baseUri + 'crm/notes/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get note
		 * Get note
		 * Get crm/notes/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetNoteResponse} Note
		 */
		NotesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetNoteResponse> {
			return this.http.get<GetNoteResponse>(this.baseUri + 'crm/notes/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update note
		 * Update note
		 * Patch crm/notes/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateNoteResponse} Note updated
		 */
		NotesUpdate(id: string, raw: boolean | null | undefined, requestBody: Note): Observable<UpdateNoteResponse> {
			return this.http.patch<UpdateNoteResponse>(this.baseUri + 'crm/notes/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List opportunities
		 * List opportunities
		 * Get crm/opportunities
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {OpportunitiesFilter} filter Apply filters
		 * @param {OpportunitiesSort} sort Apply sorting
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetOpportunitiesResponse} Opportunities
		 */
		OpportunitiesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: OpportunitiesFilter | null | undefined, sort: OpportunitiesSort | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetOpportunitiesResponse> {
			return this.http.get<GetOpportunitiesResponse>(this.baseUri + 'crm/opportunities?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&sort=' + sort + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create opportunity
		 * Create opportunity
		 * Post crm/opportunities
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		OpportunitiesAdd(raw: boolean | null | undefined, requestBody: Opportunity): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'crm/opportunities?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete opportunity
		 * Delete opportunity
		 * Delete crm/opportunities/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteOpportunityResponse} Opportunity deleted
		 */
		OpportunitiesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteOpportunityResponse> {
			return this.http.delete<DeleteOpportunityResponse>(this.baseUri + 'crm/opportunities/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get opportunity
		 * Get opportunity
		 * Get crm/opportunities/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetOpportunityResponse} Opportunity
		 */
		OpportunitiesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetOpportunityResponse> {
			return this.http.get<GetOpportunityResponse>(this.baseUri + 'crm/opportunities/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update opportunity
		 * Update opportunity
		 * Patch crm/opportunities/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateOpportunityResponse} Opportunity updated
		 */
		OpportunitiesUpdate(id: string, raw: boolean | null | undefined, requestBody: Opportunity): Observable<UpdateOpportunityResponse> {
			return this.http.patch<UpdateOpportunityResponse>(this.baseUri + 'crm/opportunities/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List pipelines
		 * List pipelines
		 * Get crm/pipelines
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetPipelinesResponse} Pipelines
		 */
		PipelinesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetPipelinesResponse> {
			return this.http.get<GetPipelinesResponse>(this.baseUri + 'crm/pipelines?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create pipeline
		 * Create pipeline
		 * Post crm/pipelines
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		PipelinesAdd(raw: boolean | null | undefined, requestBody: Pipeline): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'crm/pipelines?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete pipeline
		 * Delete pipeline
		 * Delete crm/pipelines/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeletePipelineResponse} Pipeline deleted
		 */
		PipelinesDelete(id: string, raw: boolean | null | undefined): Observable<DeletePipelineResponse> {
			return this.http.delete<DeletePipelineResponse>(this.baseUri + 'crm/pipelines/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get pipeline
		 * Get pipeline
		 * Get crm/pipelines/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetPipelineResponse} Pipeline
		 */
		PipelinesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetPipelineResponse> {
			return this.http.get<GetPipelineResponse>(this.baseUri + 'crm/pipelines/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update pipeline
		 * Update pipeline
		 * Patch crm/pipelines/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdatePipelineResponse} Pipeline updated
		 */
		PipelinesUpdate(id: string, raw: boolean | null | undefined, requestBody: Pipeline): Observable<UpdatePipelineResponse> {
			return this.http.patch<UpdatePipelineResponse>(this.baseUri + 'crm/pipelines/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List users
		 * List users
		 * Get crm/users
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetUsersResponse} Users
		 */
		UsersAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetUsersResponse> {
			return this.http.get<GetUsersResponse>(this.baseUri + 'crm/users?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create user
		 * Create user
		 * Post crm/users
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		UsersAdd(raw: boolean | null | undefined, requestBody: User): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'crm/users?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete user
		 * Delete user
		 * Delete crm/users/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteUserResponse} User deleted
		 */
		UsersDelete(id: string, raw: boolean | null | undefined): Observable<DeleteUserResponse> {
			return this.http.delete<DeleteUserResponse>(this.baseUri + 'crm/users/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get user
		 * Get user
		 * Get crm/users/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetUserResponse} User
		 */
		UsersOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetUserResponse> {
			return this.http.get<GetUserResponse>(this.baseUri + 'crm/users/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update user
		 * Update user
		 * Patch crm/users/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateUserResponse} User updated
		 */
		UsersUpdate(id: string, raw: boolean | null | undefined, requestBody: User): Observable<UpdateUserResponse> {
			return this.http.patch<UpdateUserResponse>(this.baseUri + 'crm/users/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

