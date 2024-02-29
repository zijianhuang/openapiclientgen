import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Interaction_enum_resource_status { accepted = 'accepted', answered = 'answered', busy = 'busy', canceled = 'canceled', completed = 'completed', deleted = 'deleted', delivered = 'delivered', 'delivery-unknown' = 'delivery-unknown', failed = 'failed', 'in-progress' = 'in-progress', initiated = 'initiated', 'no-answer' = 'no-answer', queued = 'queued', received = 'received', receiving = 'receiving', ringing = 'ringing', scheduled = 'scheduled', sending = 'sending', sent = 'sent', undelivered = 'undelivered', unknown = 'unknown' }

	export enum Interaction_enum_type { message = 'message', voice = 'voice', unknown = 'unknown' }

	export enum Message_interaction_enum_resource_status { accepted = 'accepted', answered = 'answered', busy = 'busy', canceled = 'canceled', completed = 'completed', deleted = 'deleted', delivered = 'delivered', 'delivery-unknown' = 'delivery-unknown', failed = 'failed', 'in-progress' = 'in-progress', initiated = 'initiated', 'no-answer' = 'no-answer', queued = 'queued', received = 'received', receiving = 'receiving', ringing = 'ringing', scheduled = 'scheduled', sending = 'sending', sent = 'sent', undelivered = 'undelivered', unknown = 'unknown' }

	export enum Message_interaction_enum_type { message = 'message', voice = 'voice', unknown = 'unknown' }

	export interface Proxyv1service {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The URL we call when the interaction status changes. */
		callback_url?: string | null;

		/**
		 * The SID of the Chat Service Instance managed by Proxy Service. The Chat Service enables Proxy to forward SMS and channel messages to this chat instance. This is a one-to-one relationship.
		 * Min length: 34
		 * Max length: 34
		 */
		chat_instance_sid?: string | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created. */
		date_created?: Date | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated?: Date | null;

		/**
		 * The default `ttl` value for Sessions created in the Service. The TTL (time to live) is measured in seconds after the Session's last create or last Interaction. The default value of `0` indicates an unlimited Session length. You can override a Session's default TTL value by setting its `ttl` value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		default_ttl?: number | null;
		geo_match_level?: Proxyv1serviceGeo_match_level | null;

		/** The URL we call on each interaction. If we receive a 403 status, we block the interaction; otherwise the interaction continues. */
		intercept_callback_url?: string | null;

		/** The URLs of resources related to the Service. */
		links?: string | null;
		number_selection_behavior?: Proxyv1serviceNumber_selection_behavior | null;

		/** The URL we call when an inbound call or SMS action occurs on a closed or non-existent Session. If your server (or a Twilio [function](https://www.twilio.com/en-us/serverless/functions)) responds with valid [TwiML](https://www.twilio.com/docs/voice/twiml), we will process it. This means it is possible, for example, to play a message for a call, send an automated text message response, or redirect a call to another Phone Number. See [Out-of-Session Callback Response Guide](https://www.twilio.com/docs/proxy/out-session-callback-response-guide) for more information. */
		out_of_session_callback_url?: string | null;

		/**
		 * The unique string that we created to identify the Service resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. Supports UTF-8 characters. **This value should not have PII.** */
		unique_name?: string | null;

		/** The absolute URL of the Service resource. */
		url?: string | null;
	}
	export interface Proxyv1serviceFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The URL we call when the interaction status changes. */
		callback_url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Chat Service Instance managed by Proxy Service. The Chat Service enables Proxy to forward SMS and channel messages to this chat instance. This is a one-to-one relationship.
		 * Min length: 34
		 * Max length: 34
		 */
		chat_instance_sid: FormControl<string | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created. */
		date_created: FormControl<Date | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The default `ttl` value for Sessions created in the Service. The TTL (time to live) is measured in seconds after the Session's last create or last Interaction. The default value of `0` indicates an unlimited Session length. You can override a Session's default TTL value by setting its `ttl` value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		default_ttl: FormControl<number | null | undefined>,
		geo_match_level: FormControl<Proxyv1serviceGeo_match_level | null | undefined>,

		/** The URL we call on each interaction. If we receive a 403 status, we block the interaction; otherwise the interaction continues. */
		intercept_callback_url: FormControl<string | null | undefined>,

		/** The URLs of resources related to the Service. */
		links: FormControl<string | null | undefined>,
		number_selection_behavior: FormControl<Proxyv1serviceNumber_selection_behavior | null | undefined>,

		/** The URL we call when an inbound call or SMS action occurs on a closed or non-existent Session. If your server (or a Twilio [function](https://www.twilio.com/en-us/serverless/functions)) responds with valid [TwiML](https://www.twilio.com/docs/voice/twiml), we will process it. This means it is possible, for example, to play a message for a call, send an automated text message response, or redirect a call to another Phone Number. See [Out-of-Session Callback Response Guide](https://www.twilio.com/docs/proxy/out-session-callback-response-guide) for more information. */
		out_of_session_callback_url: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Service resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. Supports UTF-8 characters. **This value should not have PII.** */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Service resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateProxyv1serviceFormGroup() {
		return new FormGroup<Proxyv1serviceFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			callback_url: new FormControl<string | null | undefined>(undefined),
			chat_instance_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			default_ttl: new FormControl<number | null | undefined>(undefined),
			geo_match_level: new FormControl<Proxyv1serviceGeo_match_level | null | undefined>(undefined),
			intercept_callback_url: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			number_selection_behavior: new FormControl<Proxyv1serviceNumber_selection_behavior | null | undefined>(undefined),
			out_of_session_callback_url: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KS[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Proxyv1serviceGeo_match_level { 'area-code' = 'area-code', overlay = 'overlay', radius = 'radius', country = 'country' }

	export enum Proxyv1serviceNumber_selection_behavior { 'avoid-sticky' = 'avoid-sticky', 'prefer-sticky' = 'prefer-sticky' }

	export interface Proxyv1servicephone_number {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the PhoneNumber resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The capabilities of the phone number. */
		capabilities?: Proxyv1servicephone_numberCapabilities;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created. */
		date_created?: Date | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/**
		 * The number of open session assigned to the number. See the [How many Phone Numbers do I need?](https://www.twilio.com/docs/proxy/phone-numbers-needed) guide for more information.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		in_use?: number | null;

		/** Whether the phone number should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information. */
		is_reserved?: boolean | null;

		/** The ISO Country Code for the phone number. */
		iso_country?: string | null;

		/** The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		phone_number?: string | null;

		/**
		 * The SID of the PhoneNumber resource's parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the PhoneNumber resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the PhoneNumber resource. */
		url?: string | null;
	}
	export interface Proxyv1servicephone_numberFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the PhoneNumber resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created. */
		date_created: FormControl<Date | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * The number of open session assigned to the number. See the [How many Phone Numbers do I need?](https://www.twilio.com/docs/proxy/phone-numbers-needed) guide for more information.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		in_use: FormControl<number | null | undefined>,

		/** Whether the phone number should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information. */
		is_reserved: FormControl<boolean | null | undefined>,

		/** The ISO Country Code for the phone number. */
		iso_country: FormControl<string | null | undefined>,

		/** The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		phone_number: FormControl<string | null | undefined>,

		/**
		 * The SID of the PhoneNumber resource's parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the PhoneNumber resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the PhoneNumber resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateProxyv1servicephone_numberFormGroup() {
		return new FormGroup<Proxyv1servicephone_numberFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			in_use: new FormControl<number | null | undefined>(undefined),
			is_reserved: new FormControl<boolean | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^PN[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Proxyv1servicephone_numberCapabilities {
		fax?: boolean | null;
		mms?: boolean | null;
		sms?: boolean | null;
		voice?: boolean | null;
	}
	export interface Proxyv1servicephone_numberCapabilitiesFormProperties {
		fax: FormControl<boolean | null | undefined>,
		mms: FormControl<boolean | null | undefined>,
		sms: FormControl<boolean | null | undefined>,
		voice: FormControl<boolean | null | undefined>,
	}
	export function CreateProxyv1servicephone_numberCapabilitiesFormGroup() {
		return new FormGroup<Proxyv1servicephone_numberCapabilitiesFormProperties>({
			fax: new FormControl<boolean | null | undefined>(undefined),
			mms: new FormControl<boolean | null | undefined>(undefined),
			sms: new FormControl<boolean | null | undefined>(undefined),
			voice: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Proxyv1servicesession {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Session resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The reason the Session ended. */
		closed_reason?: string | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created. */
		date_created?: Date | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session ended. */
		date_ended?: Date | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire. If this is value is present, it overrides the `ttl` value. */
		date_expiry?: Date | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session last had an interaction. */
		date_last_interaction?: Date | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session started. */
		date_started?: Date | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated?: Date | null;

		/** The URLs of resources related to the Session. */
		links?: string | null;
		mode?: Proxyv1servicesessionMode | null;

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/proxy/api/service) the session is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Session resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;
		status?: Proxyv1servicesessionStatus | null;

		/**
		 * The time, in seconds, when the session will expire. The time is measured from the last Session create or the Session's last Interaction.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ttl?: number | null;

		/** An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. Supports UTF-8 characters. **This value should not have PII.** */
		unique_name?: string | null;

		/** The absolute URL of the Session resource. */
		url?: string | null;
	}
	export interface Proxyv1servicesessionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Session resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The reason the Session ended. */
		closed_reason: FormControl<string | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created. */
		date_created: FormControl<Date | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session ended. */
		date_ended: FormControl<Date | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire. If this is value is present, it overrides the `ttl` value. */
		date_expiry: FormControl<Date | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session last had an interaction. */
		date_last_interaction: FormControl<Date | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session started. */
		date_started: FormControl<Date | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated: FormControl<Date | null | undefined>,

		/** The URLs of resources related to the Session. */
		links: FormControl<string | null | undefined>,
		mode: FormControl<Proxyv1servicesessionMode | null | undefined>,

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/proxy/api/service) the session is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Session resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Proxyv1servicesessionStatus | null | undefined>,

		/**
		 * The time, in seconds, when the session will expire. The time is measured from the last Session create or the Session's last Interaction.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ttl: FormControl<number | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. Supports UTF-8 characters. **This value should not have PII.** */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Session resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateProxyv1servicesessionFormGroup() {
		return new FormGroup<Proxyv1servicesessionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			closed_reason: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_ended: new FormControl<Date | null | undefined>(undefined),
			date_expiry: new FormControl<Date | null | undefined>(undefined),
			date_last_interaction: new FormControl<Date | null | undefined>(undefined),
			date_started: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<Proxyv1servicesessionMode | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KC[0-9a-fA-F]{32}$')]),
			status: new FormControl<Proxyv1servicesessionStatus | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Proxyv1servicesessionMode { 'message-only' = 'message-only', 'voice-only' = 'voice-only', 'voice-and-message' = 'voice-and-message' }

	export enum Proxyv1servicesessionStatus { open = 'open', 'in-progress' = 'in-progress', closed = 'closed', failed = 'failed', unknown = 'unknown' }

	export interface Proxyv1servicesessioninteraction {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Interaction resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** A JSON string that includes the message body of message interactions (e.g. `{"body": "hello"}`) or the call duration (when available) of a call (e.g. `{"duration": "5"}`). */
		data?: string | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the Interaction was created. */
		date_created?: Date | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated?: Date | null;

		/**
		 * The SID of the inbound [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		inbound_participant_sid?: string | null;

		/**
		 * The SID of the inbound resource; either the [Call](https://www.twilio.com/docs/voice/api/call-resource) or [Message](https://www.twilio.com/docs/sms/api/message-resource).
		 * Min length: 34
		 * Max length: 34
		 */
		inbound_resource_sid?: string | null;
		inbound_resource_status?: Interaction_enum_resource_status | null;

		/** The inbound resource type. Can be [Call](https://www.twilio.com/docs/voice/api/call-resource) or [Message](https://www.twilio.com/docs/sms/api/message-resource). */
		inbound_resource_type?: string | null;

		/** The URL of the Twilio inbound resource */
		inbound_resource_url?: string | null;

		/**
		 * The SID of the outbound [Participant](https://www.twilio.com/docs/proxy/api/participant)).
		 * Min length: 34
		 * Max length: 34
		 */
		outbound_participant_sid?: string | null;

		/**
		 * The SID of the outbound resource; either the [Call](https://www.twilio.com/docs/voice/api/call-resource) or [Message](https://www.twilio.com/docs/sms/api/message-resource).
		 * Min length: 34
		 * Max length: 34
		 */
		outbound_resource_sid?: string | null;
		outbound_resource_status?: Interaction_enum_resource_status | null;

		/** The outbound resource type. Can be: [Call](https://www.twilio.com/docs/voice/api/call-resource) or [Message](https://www.twilio.com/docs/sms/api/message-resource). */
		outbound_resource_type?: string | null;

		/** The URL of the Twilio outbound resource. */
		outbound_resource_url?: string | null;

		/**
		 * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		session_sid?: string | null;

		/**
		 * The unique string that we created to identify the Interaction resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;
		type?: Interaction_enum_type | null;

		/** The absolute URL of the Interaction resource. */
		url?: string | null;
	}
	export interface Proxyv1servicesessioninteractionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Interaction resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** A JSON string that includes the message body of message interactions (e.g. `{"body": "hello"}`) or the call duration (when available) of a call (e.g. `{"duration": "5"}`). */
		data: FormControl<string | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the Interaction was created. */
		date_created: FormControl<Date | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The SID of the inbound [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		inbound_participant_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the inbound resource; either the [Call](https://www.twilio.com/docs/voice/api/call-resource) or [Message](https://www.twilio.com/docs/sms/api/message-resource).
		 * Min length: 34
		 * Max length: 34
		 */
		inbound_resource_sid: FormControl<string | null | undefined>,
		inbound_resource_status: FormControl<Interaction_enum_resource_status | null | undefined>,

		/** The inbound resource type. Can be [Call](https://www.twilio.com/docs/voice/api/call-resource) or [Message](https://www.twilio.com/docs/sms/api/message-resource). */
		inbound_resource_type: FormControl<string | null | undefined>,

		/** The URL of the Twilio inbound resource */
		inbound_resource_url: FormControl<string | null | undefined>,

		/**
		 * The SID of the outbound [Participant](https://www.twilio.com/docs/proxy/api/participant)).
		 * Min length: 34
		 * Max length: 34
		 */
		outbound_participant_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the outbound resource; either the [Call](https://www.twilio.com/docs/voice/api/call-resource) or [Message](https://www.twilio.com/docs/sms/api/message-resource).
		 * Min length: 34
		 * Max length: 34
		 */
		outbound_resource_sid: FormControl<string | null | undefined>,
		outbound_resource_status: FormControl<Interaction_enum_resource_status | null | undefined>,

		/** The outbound resource type. Can be: [Call](https://www.twilio.com/docs/voice/api/call-resource) or [Message](https://www.twilio.com/docs/sms/api/message-resource). */
		outbound_resource_type: FormControl<string | null | undefined>,

		/** The URL of the Twilio outbound resource. */
		outbound_resource_url: FormControl<string | null | undefined>,

		/**
		 * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		session_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Interaction resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,
		type: FormControl<Interaction_enum_type | null | undefined>,

		/** The absolute URL of the Interaction resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateProxyv1servicesessioninteractionFormGroup() {
		return new FormGroup<Proxyv1servicesessioninteractionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			data: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			inbound_participant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KP[0-9a-fA-F]{32}$')]),
			inbound_resource_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^[a-zA-Z]{2}[0-9a-fA-F]{32}$')]),
			inbound_resource_status: new FormControl<Interaction_enum_resource_status | null | undefined>(undefined),
			inbound_resource_type: new FormControl<string | null | undefined>(undefined),
			inbound_resource_url: new FormControl<string | null | undefined>(undefined),
			outbound_participant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KP[0-9a-fA-F]{32}$')]),
			outbound_resource_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^[a-zA-Z]{2}[0-9a-fA-F]{32}$')]),
			outbound_resource_status: new FormControl<Interaction_enum_resource_status | null | undefined>(undefined),
			outbound_resource_type: new FormControl<string | null | undefined>(undefined),
			outbound_resource_url: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KS[0-9a-fA-F]{32}$')]),
			session_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KC[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KI[0-9a-fA-F]{32}$')]),
			type: new FormControl<Interaction_enum_type | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Proxyv1servicesessionparticipant {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created. */
		date_created?: Date | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Participant was removed from the session. */
		date_deleted?: Date | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the participant. This value must be 255 characters or fewer. Supports UTF-8 characters. **This value should not have PII.** */
		friendly_name?: string | null;

		/** The phone number or channel identifier of the Participant. This value must be 191 characters or fewer. Supports UTF-8 characters. */
		identifier?: string | null;

		/** The URLs to resources related the participant. */
		links?: string | null;

		/** The phone number or short code (masked number) of the participant's partner. The participant will call or message the partner participant at this number. */
		proxy_identifier?: string | null;

		/**
		 * The SID of the Proxy Identifier assigned to the Participant.
		 * Min length: 34
		 * Max length: 34
		 */
		proxy_identifier_sid?: string | null;

		/**
		 * The SID of the resource's parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		session_sid?: string | null;

		/**
		 * The unique string that we created to identify the Participant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Participant resource. */
		url?: string | null;
	}
	export interface Proxyv1servicesessionparticipantFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created. */
		date_created: FormControl<Date | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Participant was removed from the session. */
		date_deleted: FormControl<Date | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the participant. This value must be 255 characters or fewer. Supports UTF-8 characters. **This value should not have PII.** */
		friendly_name: FormControl<string | null | undefined>,

		/** The phone number or channel identifier of the Participant. This value must be 191 characters or fewer. Supports UTF-8 characters. */
		identifier: FormControl<string | null | undefined>,

		/** The URLs to resources related the participant. */
		links: FormControl<string | null | undefined>,

		/** The phone number or short code (masked number) of the participant's partner. The participant will call or message the partner participant at this number. */
		proxy_identifier: FormControl<string | null | undefined>,

		/**
		 * The SID of the Proxy Identifier assigned to the Participant.
		 * Min length: 34
		 * Max length: 34
		 */
		proxy_identifier_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the resource's parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		session_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Participant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Participant resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateProxyv1servicesessionparticipantFormGroup() {
		return new FormGroup<Proxyv1servicesessionparticipantFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_deleted: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			proxy_identifier: new FormControl<string | null | undefined>(undefined),
			proxy_identifier_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^PN[0-9a-fA-F]{32}$')]),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KS[0-9a-fA-F]{32}$')]),
			session_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KC[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KP[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Proxyv1servicesessionparticipantmessage_interaction {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the MessageInteraction resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** A JSON string that includes the message body sent to the participant. (e.g. `{"body": "hello"}`) */
		data?: string | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created. */
		date_created?: Date | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated?: Date | null;

		/**
		 * Always empty for created Message Interactions.
		 * Min length: 34
		 * Max length: 34
		 */
		inbound_participant_sid?: string | null;

		/**
		 * Always empty for created Message Interactions.
		 * Min length: 34
		 * Max length: 34
		 */
		inbound_resource_sid?: string | null;
		inbound_resource_status?: Interaction_enum_resource_status | null;

		/** Always empty for created Message Interactions. */
		inbound_resource_type?: string | null;

		/** Always empty for created Message Interactions. */
		inbound_resource_url?: string | null;

		/**
		 * The SID of the outbound [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		outbound_participant_sid?: string | null;

		/**
		 * The SID of the outbound [Message](https://www.twilio.com/docs/sms/api/message-resource) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		outbound_resource_sid?: string | null;
		outbound_resource_status?: Interaction_enum_resource_status | null;

		/** The outbound resource type. This value is always `Message`. */
		outbound_resource_type?: string | null;

		/** The URL of the Twilio message resource. */
		outbound_resource_url?: string | null;

		/**
		 * The SID of the [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		participant_sid?: string | null;

		/**
		 * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		session_sid?: string | null;

		/**
		 * The unique string that we created to identify the MessageInteraction resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;
		type?: Interaction_enum_type | null;

		/** The absolute URL of the MessageInteraction resource. */
		url?: string | null;
	}
	export interface Proxyv1servicesessionparticipantmessage_interactionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the MessageInteraction resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** A JSON string that includes the message body sent to the participant. (e.g. `{"body": "hello"}`) */
		data: FormControl<string | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created. */
		date_created: FormControl<Date | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * Always empty for created Message Interactions.
		 * Min length: 34
		 * Max length: 34
		 */
		inbound_participant_sid: FormControl<string | null | undefined>,

		/**
		 * Always empty for created Message Interactions.
		 * Min length: 34
		 * Max length: 34
		 */
		inbound_resource_sid: FormControl<string | null | undefined>,
		inbound_resource_status: FormControl<Interaction_enum_resource_status | null | undefined>,

		/** Always empty for created Message Interactions. */
		inbound_resource_type: FormControl<string | null | undefined>,

		/** Always empty for created Message Interactions. */
		inbound_resource_url: FormControl<string | null | undefined>,

		/**
		 * The SID of the outbound [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		outbound_participant_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the outbound [Message](https://www.twilio.com/docs/sms/api/message-resource) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		outbound_resource_sid: FormControl<string | null | undefined>,
		outbound_resource_status: FormControl<Interaction_enum_resource_status | null | undefined>,

		/** The outbound resource type. This value is always `Message`. */
		outbound_resource_type: FormControl<string | null | undefined>,

		/** The URL of the Twilio message resource. */
		outbound_resource_url: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		participant_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		session_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the MessageInteraction resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,
		type: FormControl<Interaction_enum_type | null | undefined>,

		/** The absolute URL of the MessageInteraction resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateProxyv1servicesessionparticipantmessage_interactionFormGroup() {
		return new FormGroup<Proxyv1servicesessionparticipantmessage_interactionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			data: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			inbound_participant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KP[0-9a-fA-F]{32}$')]),
			inbound_resource_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^[a-zA-Z]{2}[0-9a-fA-F]{32}$')]),
			inbound_resource_status: new FormControl<Interaction_enum_resource_status | null | undefined>(undefined),
			inbound_resource_type: new FormControl<string | null | undefined>(undefined),
			inbound_resource_url: new FormControl<string | null | undefined>(undefined),
			outbound_participant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KP[0-9a-fA-F]{32}$')]),
			outbound_resource_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^[a-zA-Z]{2}[0-9a-fA-F]{32}$')]),
			outbound_resource_status: new FormControl<Interaction_enum_resource_status | null | undefined>(undefined),
			outbound_resource_type: new FormControl<string | null | undefined>(undefined),
			outbound_resource_url: new FormControl<string | null | undefined>(undefined),
			participant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KP[0-9a-fA-F]{32}$')]),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KS[0-9a-fA-F]{32}$')]),
			session_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KC[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KI[0-9a-fA-F]{32}$')]),
			type: new FormControl<Interaction_enum_type | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Proxyv1serviceshort_code {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The capabilities of the short code. */
		capabilities?: Proxyv1serviceshort_codeCapabilities;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created. */
		date_created?: Date | null;

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated?: Date | null;

		/** Whether the short code should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information. */
		is_reserved?: boolean | null;

		/** The ISO Country Code for the short code. */
		iso_country?: string | null;

		/**
		 * The SID of the ShortCode resource's parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/** The short code's number. */
		short_code?: string | null;

		/**
		 * The unique string that we created to identify the ShortCode resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the ShortCode resource. */
		url?: string | null;
	}
	export interface Proxyv1serviceshort_codeFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created. */
		date_created: FormControl<Date | null | undefined>,

		/** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated. */
		date_updated: FormControl<Date | null | undefined>,

		/** Whether the short code should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information. */
		is_reserved: FormControl<boolean | null | undefined>,

		/** The ISO Country Code for the short code. */
		iso_country: FormControl<string | null | undefined>,

		/**
		 * The SID of the ShortCode resource's parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/** The short code's number. */
		short_code: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the ShortCode resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the ShortCode resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateProxyv1serviceshort_codeFormGroup() {
		return new FormGroup<Proxyv1serviceshort_codeFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			is_reserved: new FormControl<boolean | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KS[0-9a-fA-F]{32}$')]),
			short_code: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^SC[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Proxyv1serviceshort_codeCapabilities {
		fax?: boolean | null;
		mms?: boolean | null;
		sms?: boolean | null;
		voice?: boolean | null;
	}
	export interface Proxyv1serviceshort_codeCapabilitiesFormProperties {
		fax: FormControl<boolean | null | undefined>,
		mms: FormControl<boolean | null | undefined>,
		sms: FormControl<boolean | null | undefined>,
		voice: FormControl<boolean | null | undefined>,
	}
	export function CreateProxyv1serviceshort_codeCapabilitiesFormGroup() {
		return new FormGroup<Proxyv1serviceshort_codeCapabilitiesFormProperties>({
			fax: new FormControl<boolean | null | undefined>(undefined),
			mms: new FormControl<boolean | null | undefined>(undefined),
			sms: new FormControl<boolean | null | undefined>(undefined),
			voice: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Service_enum_geo_match_level { 'area-code' = 'area-code', overlay = 'overlay', radius = 'radius', country = 'country' }

	export enum Service_enum_number_selection_behavior { 'avoid-sticky' = 'avoid-sticky', 'prefer-sticky' = 'prefer-sticky' }

	export enum Session_enum_mode { 'message-only' = 'message-only', 'voice-only' = 'voice-only', 'voice-and-message' = 'voice-and-message' }

	export enum Session_enum_status { open = 'open', 'in-progress' = 'in-progress', closed = 'closed', failed = 'failed', unknown = 'unknown' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.
		 * Get v1/Services
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListServiceReturn} OK
		 */
		ListService(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListServiceReturn> {
			return this.http.get<ListServiceReturn>(this.baseUri + 'v1/Services?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.
		 * Get v1/Services/{ServiceSid}/PhoneNumbers
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the PhoneNumber resources to read.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListPhoneNumberReturn} OK
		 */
		ListPhoneNumber(ServiceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListPhoneNumberReturn> {
			return this.http.get<ListPhoneNumberReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/PhoneNumbers&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a specific Phone Number from a Service.
		 * Delete v1/Services/{ServiceSid}/PhoneNumbers/{Sid}
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the PhoneNumber resource to delete.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the PhoneNumber resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeletePhoneNumber(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/PhoneNumbers/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific Phone Number.
		 * Get v1/Services/{ServiceSid}/PhoneNumbers/{Sid}
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the PhoneNumber resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the PhoneNumber resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Proxyv1servicephone_number} OK
		 */
		FetchPhoneNumber(ServiceSid: string, Sid: string): Observable<Proxyv1servicephone_number> {
			return this.http.get<Proxyv1servicephone_number>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/PhoneNumbers/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.
		 * Get v1/Services/{ServiceSid}/Sessions
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to read.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSessionReturn} OK
		 */
		ListSession(ServiceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSessionReturn> {
			return this.http.get<ListSessionReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Sessions&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.
		 * Get v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) to read the resources from.
		 *     Min length: 34    Max length: 34
		 * @param {string} SessionSid The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) to read the resources from.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListInteractionReturn} OK
		 */
		ListInteraction(ServiceSid: string, SessionSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListInteractionReturn> {
			return this.http.get<ListInteractionReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Sessions/' + (SessionSid == null ? '' : encodeURIComponent(SessionSid)) + '/Interactions&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a specific Interaction.
		 * Delete v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions/{Sid}
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to delete.
		 *     Min length: 34    Max length: 34
		 * @param {string} SessionSid The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the resource to delete.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Interaction resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteInteraction(ServiceSid: string, SessionSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Sessions/' + (SessionSid == null ? '' : encodeURIComponent(SessionSid)) + '/Interactions/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).
		 * Get v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions/{Sid}
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} SessionSid The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Interaction resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Proxyv1servicesessioninteraction} OK
		 */
		FetchInteraction(ServiceSid: string, SessionSid: string, Sid: string): Observable<Proxyv1servicesessioninteraction> {
			return this.http.get<Proxyv1servicesessioninteraction>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Sessions/' + (SessionSid == null ? '' : encodeURIComponent(SessionSid)) + '/Interactions/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of all Participants in a Session.
		 * Get v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resources to read.
		 *     Min length: 34    Max length: 34
		 * @param {string} SessionSid The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the resources to read.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListParticipantReturn} OK
		 */
		ListParticipant(ServiceSid: string, SessionSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListParticipantReturn> {
			return this.http.get<ListParticipantReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Sessions/' + (SessionSid == null ? '' : encodeURIComponent(SessionSid)) + '/Participants&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) to read the resources from.
		 *     Min length: 34    Max length: 34
		 * @param {string} SessionSid The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) to read the resources from.
		 *     Min length: 34    Max length: 34
		 * @param {string} ParticipantSid The SID of the [Participant](https://www.twilio.com/docs/proxy/api/participant) to read the resources from.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListMessageInteractionReturn} OK
		 */
		ListMessageInteraction(ServiceSid: string, SessionSid: string, ParticipantSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListMessageInteractionReturn> {
			return this.http.get<ListMessageInteractionReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Sessions/' + (SessionSid == null ? '' : encodeURIComponent(SessionSid)) + '/Participants/' + (ParticipantSid == null ? '' : encodeURIComponent(ParticipantSid)) + '/MessageInteractions&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions/{Sid}
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} SessionSid The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} ParticipantSid The SID of the [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the MessageInteraction resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Proxyv1servicesessionparticipantmessage_interaction} OK
		 */
		FetchMessageInteraction(ServiceSid: string, SessionSid: string, ParticipantSid: string, Sid: string): Observable<Proxyv1servicesessionparticipantmessage_interaction> {
			return this.http.get<Proxyv1servicesessionparticipantmessage_interaction>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Sessions/' + (SessionSid == null ? '' : encodeURIComponent(SessionSid)) + '/Participants/' + (ParticipantSid == null ? '' : encodeURIComponent(ParticipantSid)) + '/MessageInteractions/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.
		 * Delete v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to delete.
		 *     Min length: 34    Max length: 34
		 * @param {string} SessionSid The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the resource to delete.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Participant resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteParticipant(ServiceSid: string, SessionSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Sessions/' + (SessionSid == null ? '' : encodeURIComponent(SessionSid)) + '/Participants/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific Participant.
		 * Get v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} SessionSid The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Participant resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Proxyv1servicesessionparticipant} OK
		 */
		FetchParticipant(ServiceSid: string, SessionSid: string, Sid: string): Observable<Proxyv1servicesessionparticipant> {
			return this.http.get<Proxyv1servicesessionparticipant>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Sessions/' + (SessionSid == null ? '' : encodeURIComponent(SessionSid)) + '/Participants/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete a specific Session.
		 * Delete v1/Services/{ServiceSid}/Sessions/{Sid}
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to delete.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Session resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteSession(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Sessions/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific Session.
		 * Get v1/Services/{ServiceSid}/Sessions/{Sid}
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Session resource to fetch.
		 * @return {Proxyv1servicesession} OK
		 */
		FetchSession(ServiceSid: string, Sid: string): Observable<Proxyv1servicesession> {
			return this.http.get<Proxyv1servicesession>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Sessions/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.
		 * Get v1/Services/{ServiceSid}/ShortCodes
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) to read the resources from.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListShortCodeReturn} OK
		 */
		ListShortCode(ServiceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListShortCodeReturn> {
			return this.http.get<ListShortCodeReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/ShortCodes&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a specific Short Code from a Service.
		 * Delete v1/Services/{ServiceSid}/ShortCodes/{Sid}
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource to delete the ShortCode resource from.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the ShortCode resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteShortCode(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/ShortCodes/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific Short Code.
		 * Get v1/Services/{ServiceSid}/ShortCodes/{Sid}
		 * @param {string} ServiceSid The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) to fetch the resource from.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the ShortCode resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Proxyv1serviceshort_code} OK
		 */
		FetchShortCode(ServiceSid: string, Sid: string): Observable<Proxyv1serviceshort_code> {
			return this.http.get<Proxyv1serviceshort_code>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/ShortCodes/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete a specific Service.
		 * Delete v1/Services/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Service resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteService(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific Service.
		 * Get v1/Services/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Service resource to fetch.
		 * @return {Proxyv1service} OK
		 */
		FetchService(Sid: string): Observable<Proxyv1service> {
			return this.http.get<Proxyv1service>(this.baseUri + 'v1/Services/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}
	}

	export interface ListServiceReturn {
		meta?: ListServiceReturnMeta;
		services?: Array<Proxyv1service>;
	}
	export interface ListServiceReturnFormProperties {
	}
	export function CreateListServiceReturnFormGroup() {
		return new FormGroup<ListServiceReturnFormProperties>({
		});

	}

	export interface ListServiceReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListServiceReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListServiceReturnMetaFormGroup() {
		return new FormGroup<ListServiceReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPhoneNumberReturn {
		meta?: ListPhoneNumberReturnMeta;
		phone_numbers?: Array<Proxyv1servicephone_number>;
	}
	export interface ListPhoneNumberReturnFormProperties {
	}
	export function CreateListPhoneNumberReturnFormGroup() {
		return new FormGroup<ListPhoneNumberReturnFormProperties>({
		});

	}

	export interface ListPhoneNumberReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListPhoneNumberReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListPhoneNumberReturnMetaFormGroup() {
		return new FormGroup<ListPhoneNumberReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSessionReturn {
		meta?: ListSessionReturnMeta;
		sessions?: Array<Proxyv1servicesession>;
	}
	export interface ListSessionReturnFormProperties {
	}
	export function CreateListSessionReturnFormGroup() {
		return new FormGroup<ListSessionReturnFormProperties>({
		});

	}

	export interface ListSessionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSessionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSessionReturnMetaFormGroup() {
		return new FormGroup<ListSessionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInteractionReturn {
		interactions?: Array<Proxyv1servicesessioninteraction>;
		meta?: ListInteractionReturnMeta;
	}
	export interface ListInteractionReturnFormProperties {
	}
	export function CreateListInteractionReturnFormGroup() {
		return new FormGroup<ListInteractionReturnFormProperties>({
		});

	}

	export interface ListInteractionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListInteractionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListInteractionReturnMetaFormGroup() {
		return new FormGroup<ListInteractionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListParticipantReturn {
		meta?: ListParticipantReturnMeta;
		participants?: Array<Proxyv1servicesessionparticipant>;
	}
	export interface ListParticipantReturnFormProperties {
	}
	export function CreateListParticipantReturnFormGroup() {
		return new FormGroup<ListParticipantReturnFormProperties>({
		});

	}

	export interface ListParticipantReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListParticipantReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListParticipantReturnMetaFormGroup() {
		return new FormGroup<ListParticipantReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMessageInteractionReturn {
		interactions?: Array<Proxyv1servicesessionparticipantmessage_interaction>;
		meta?: ListMessageInteractionReturnMeta;
	}
	export interface ListMessageInteractionReturnFormProperties {
	}
	export function CreateListMessageInteractionReturnFormGroup() {
		return new FormGroup<ListMessageInteractionReturnFormProperties>({
		});

	}

	export interface ListMessageInteractionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListMessageInteractionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListMessageInteractionReturnMetaFormGroup() {
		return new FormGroup<ListMessageInteractionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListShortCodeReturn {
		meta?: ListShortCodeReturnMeta;
		short_codes?: Array<Proxyv1serviceshort_code>;
	}
	export interface ListShortCodeReturnFormProperties {
	}
	export function CreateListShortCodeReturnFormGroup() {
		return new FormGroup<ListShortCodeReturnFormProperties>({
		});

	}

	export interface ListShortCodeReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListShortCodeReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListShortCodeReturnMetaFormGroup() {
		return new FormGroup<ListShortCodeReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

