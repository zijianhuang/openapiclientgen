import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Phone_number_enum_address_requirement { none = 'none', any = 'any', local = 'local', foreign = 'foreign' }

	export enum Recording_enum_recording_mode { 'do-not-record' = 'do-not-record', 'record-from-ringing' = 'record-from-ringing', 'record-from-answer' = 'record-from-answer', 'record-from-ringing-dual' = 'record-from-ringing-dual', 'record-from-answer-dual' = 'record-from-answer-dual' }

	export enum Recording_enum_recording_trim { 'trim-silence' = 'trim-silence', 'do-not-trim' = 'do-not-trim' }

	export enum Trunk_enum_transfer_caller_id { 'from-transferee' = 'from-transferee', 'from-transferor' = 'from-transferor' }

	export enum Trunk_enum_transfer_setting { 'disable-all' = 'disable-all', 'enable-all' = 'enable-all', 'sip-only' = 'sip-only' }

	export interface Trunkingv1trunk {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Trunk resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The types of authentication mapped to the domain. Can be: `IP_ACL` and `CREDENTIAL_LIST`. If both are mapped, the values are returned in a comma delimited list. If empty, the domain will not receive any traffic. */
		auth_type?: string | null;

		/** Reserved. */
		auth_type_set?: Array<string>;

		/** Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all inbound calls to the SIP Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information. */
		cnam_lookup_enabled?: boolean | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The HTTP method we use to call the `disaster_recovery_url`. Can be: `GET` or `POST`. */
		disaster_recovery_method?: Trunkingv1trunkDisaster_recovery_method | null;

		/** The URL we call using the `disaster_recovery_method` if an error occurs while sending SIP traffic towards the configured Origination URL. We retrieve TwiML from this URL and execute the instructions like any other normal TwiML call. See [Disaster Recovery](https://www.twilio.com/docs/sip-trunking#disaster-recovery) for more information. */
		disaster_recovery_url?: string | null;

		/** The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and `-` and must end with `pstn.twilio.com`. See [Termination Settings](https://www.twilio.com/docs/sip-trunking#termination) for more information. */
		domain_name?: string | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** The URLs of related resources. */
		links?: string | null;

		/** The recording settings for the trunk. Can be: `do-not-record`, `record-from-ringing`, `record-from-answer`. If set to `record-from-ringing` or `record-from-answer`, all calls going through the trunk will be recorded. The only way to change recording parameters is on a sub-resource of a Trunk after it has been created. e.g.`/Trunks/[Trunk_SID]/Recording -XPOST -d'Mode=record-from-answer'`. See [Recording](https://www.twilio.com/docs/sip-trunking#recording) for more information. */
		recording?: any;

		/** Whether Secure Trunking is enabled for the trunk. If enabled, all calls going through the trunk will be secure using SRTP for media and TLS for signaling. If disabled, then RTP will be used for media. See [Secure Trunking](https://www.twilio.com/docs/sip-trunking#securetrunking) for more information. */
		secure?: boolean | null;

		/**
		 * The unique string that we created to identify the Trunk resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;
		transfer_caller_id?: Trunk_enum_transfer_caller_id | null;
		transfer_mode?: Trunk_enum_transfer_setting | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Trunkingv1trunkFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Trunk resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The types of authentication mapped to the domain. Can be: `IP_ACL` and `CREDENTIAL_LIST`. If both are mapped, the values are returned in a comma delimited list. If empty, the domain will not receive any traffic. */
		auth_type: FormControl<string | null | undefined>,

		/** Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all inbound calls to the SIP Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information. */
		cnam_lookup_enabled: FormControl<boolean | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The HTTP method we use to call the `disaster_recovery_url`. Can be: `GET` or `POST`. */
		disaster_recovery_method: FormControl<Trunkingv1trunkDisaster_recovery_method | null | undefined>,

		/** The URL we call using the `disaster_recovery_method` if an error occurs while sending SIP traffic towards the configured Origination URL. We retrieve TwiML from this URL and execute the instructions like any other normal TwiML call. See [Disaster Recovery](https://www.twilio.com/docs/sip-trunking#disaster-recovery) for more information. */
		disaster_recovery_url: FormControl<string | null | undefined>,

		/** The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and `-` and must end with `pstn.twilio.com`. See [Termination Settings](https://www.twilio.com/docs/sip-trunking#termination) for more information. */
		domain_name: FormControl<string | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/** The recording settings for the trunk. Can be: `do-not-record`, `record-from-ringing`, `record-from-answer`. If set to `record-from-ringing` or `record-from-answer`, all calls going through the trunk will be recorded. The only way to change recording parameters is on a sub-resource of a Trunk after it has been created. e.g.`/Trunks/[Trunk_SID]/Recording -XPOST -d'Mode=record-from-answer'`. See [Recording](https://www.twilio.com/docs/sip-trunking#recording) for more information. */
		recording: FormControl<any | null | undefined>,

		/** Whether Secure Trunking is enabled for the trunk. If enabled, all calls going through the trunk will be secure using SRTP for media and TLS for signaling. If disabled, then RTP will be used for media. See [Secure Trunking](https://www.twilio.com/docs/sip-trunking#securetrunking) for more information. */
		secure: FormControl<boolean | null | undefined>,

		/**
		 * The unique string that we created to identify the Trunk resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,
		transfer_caller_id: FormControl<Trunk_enum_transfer_caller_id | null | undefined>,
		transfer_mode: FormControl<Trunk_enum_transfer_setting | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTrunkingv1trunkFormGroup() {
		return new FormGroup<Trunkingv1trunkFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			auth_type: new FormControl<string | null | undefined>(undefined),
			cnam_lookup_enabled: new FormControl<boolean | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			disaster_recovery_method: new FormControl<Trunkingv1trunkDisaster_recovery_method | null | undefined>(undefined),
			disaster_recovery_url: new FormControl<string | null | undefined>(undefined),
			domain_name: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			recording: new FormControl<any | null | undefined>(undefined),
			secure: new FormControl<boolean | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^TK[0-9a-fA-F]{32}$')]),
			transfer_caller_id: new FormControl<Trunk_enum_transfer_caller_id | null | undefined>(undefined),
			transfer_mode: new FormControl<Trunk_enum_transfer_setting | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Trunkingv1trunkDisaster_recovery_method { HEAD = 'HEAD', GET = 'GET', POST = 'POST', PATCH = 'PATCH', PUT = 'PUT', DELETE = 'DELETE' }

	export interface Trunkingv1trunkcredential_list {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialList resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/**
		 * The unique string that we created to identify the CredentialList resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/**
		 * The SID of the Trunk the credential list in associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		trunk_sid?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Trunkingv1trunkcredential_listFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialList resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the CredentialList resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Trunk the credential list in associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		trunk_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTrunkingv1trunkcredential_listFormGroup() {
		return new FormGroup<Trunkingv1trunkcredential_listFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CL[0-9a-fA-F]{32}$')]),
			trunk_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^TK[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Trunkingv1trunkip_access_control_list {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IpAccessControlList resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/**
		 * The unique string that we created to identify the IpAccessControlList resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/**
		 * The SID of the Trunk the resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		trunk_sid?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Trunkingv1trunkip_access_control_listFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IpAccessControlList resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the IpAccessControlList resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Trunk the resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		trunk_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTrunkingv1trunkip_access_control_listFormGroup() {
		return new FormGroup<Trunkingv1trunkip_access_control_listFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AL[0-9a-fA-F]{32}$')]),
			trunk_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^TK[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Trunkingv1trunkorigination_url {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OriginationUrl resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** Whether the URL is enabled. The default is `true`. */
		enabled?: boolean | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/**
		 * The relative importance of the URI. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important URI.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/**
		 * The unique string that we created to identify the OriginationUrl resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The SIP address you want Twilio to route your Origination calls to. This must be a `sip:` schema. */
		sip_url?: string | null;

		/**
		 * The SID of the Trunk that owns the Origination URL.
		 * Min length: 34
		 * Max length: 34
		 */
		trunk_sid?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;

		/**
		 * The value that determines the relative share of the load the URI should receive compared to other URIs with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. URLs with higher values receive more load than those with lower ones with the same priority.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight?: number | null;
	}
	export interface Trunkingv1trunkorigination_urlFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OriginationUrl resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** Whether the URL is enabled. The default is `true`. */
		enabled: FormControl<boolean | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * The relative importance of the URI. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important URI.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/**
		 * The unique string that we created to identify the OriginationUrl resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The SIP address you want Twilio to route your Origination calls to. This must be a `sip:` schema. */
		sip_url: FormControl<string | null | undefined>,

		/**
		 * The SID of the Trunk that owns the Origination URL.
		 * Min length: 34
		 * Max length: 34
		 */
		trunk_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The value that determines the relative share of the load the URI should receive compared to other URIs with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. URLs with higher values receive more load than those with lower ones with the same priority.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateTrunkingv1trunkorigination_urlFormGroup() {
		return new FormGroup<Trunkingv1trunkorigination_urlFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^OU[0-9a-fA-F]{32}$')]),
			sip_url: new FormControl<string | null | undefined>(undefined),
			trunk_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^TK[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Trunkingv1trunkphone_number {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the PhoneNumber resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;
		address_requirements?: Phone_number_enum_address_requirement | null;

		/** The API version used to start a new TwiML session. */
		api_version?: string | null;

		/** Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
		beta?: boolean | null;

		/** The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are  `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`. */
		capabilities?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** The URLs of related resources. */
		links?: string | null;

		/** The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		phone_number?: string | null;

		/**
		 * The unique string that we created to identify the PhoneNumber resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/**
		 * The SID of the application that handles SMS messages sent to the phone number. If an `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the application.
		 * Min length: 34
		 * Max length: 34
		 */
		sms_application_sid?: string | null;

		/** The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`. */
		sms_fallback_method?: Trunkingv1trunkDisaster_recovery_method | null;

		/** The URL that we call using the `sms_fallback_method` when an error occurs while retrieving or executing the TwiML from `sms_url`. */
		sms_fallback_url?: string | null;

		/** The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`. */
		sms_method?: Trunkingv1trunkDisaster_recovery_method | null;

		/** The URL we call using the `sms_method` when the phone number receives an incoming SMS message. */
		sms_url?: string | null;

		/** The URL we call using the `status_callback_method` to send status information to your application. */
		status_callback?: string | null;

		/** The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`. */
		status_callback_method?: Trunkingv1trunkDisaster_recovery_method | null;

		/**
		 * The SID of the Trunk that handles calls to the phone number. If a `trunk_sid` is present, we ignore all of the voice URLs and voice applications and use those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa.
		 * Min length: 34
		 * Max length: 34
		 */
		trunk_sid?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;

		/**
		 * The SID of the application that handles calls to the phone number. If a `voice_application_sid` is present, we ignore all of the voice URLs and use those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa.
		 * Min length: 34
		 * Max length: 34
		 */
		voice_application_sid?: string | null;

		/** Whether we look up the caller's caller-ID name from the CNAM database ($0.01 per look up). Can be: `true` or `false`. */
		voice_caller_id_lookup?: boolean | null;

		/** The HTTP method that we use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
		voice_fallback_method?: Trunkingv1trunkDisaster_recovery_method | null;

		/** The URL that we call using the `voice_fallback_method` when an error occurs retrieving or executing the TwiML requested by `url`. */
		voice_fallback_url?: string | null;

		/** The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`. */
		voice_method?: Trunkingv1trunkDisaster_recovery_method | null;

		/** The URL we call using the `voice_method` when the phone number receives a call. The `voice_url` is not be used if a `voice_application_sid` or a `trunk_sid` is set. */
		voice_url?: string | null;
	}
	export interface Trunkingv1trunkphone_numberFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the PhoneNumber resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,
		address_requirements: FormControl<Phone_number_enum_address_requirement | null | undefined>,

		/** The API version used to start a new TwiML session. */
		api_version: FormControl<string | null | undefined>,

		/** Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
		beta: FormControl<boolean | null | undefined>,

		/** The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are  `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`. */
		capabilities: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/** The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		phone_number: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the PhoneNumber resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the application that handles SMS messages sent to the phone number. If an `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the application.
		 * Min length: 34
		 * Max length: 34
		 */
		sms_application_sid: FormControl<string | null | undefined>,

		/** The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`. */
		sms_fallback_method: FormControl<Trunkingv1trunkDisaster_recovery_method | null | undefined>,

		/** The URL that we call using the `sms_fallback_method` when an error occurs while retrieving or executing the TwiML from `sms_url`. */
		sms_fallback_url: FormControl<string | null | undefined>,

		/** The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`. */
		sms_method: FormControl<Trunkingv1trunkDisaster_recovery_method | null | undefined>,

		/** The URL we call using the `sms_method` when the phone number receives an incoming SMS message. */
		sms_url: FormControl<string | null | undefined>,

		/** The URL we call using the `status_callback_method` to send status information to your application. */
		status_callback: FormControl<string | null | undefined>,

		/** The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`. */
		status_callback_method: FormControl<Trunkingv1trunkDisaster_recovery_method | null | undefined>,

		/**
		 * The SID of the Trunk that handles calls to the phone number. If a `trunk_sid` is present, we ignore all of the voice URLs and voice applications and use those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa.
		 * Min length: 34
		 * Max length: 34
		 */
		trunk_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The SID of the application that handles calls to the phone number. If a `voice_application_sid` is present, we ignore all of the voice URLs and use those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa.
		 * Min length: 34
		 * Max length: 34
		 */
		voice_application_sid: FormControl<string | null | undefined>,

		/** Whether we look up the caller's caller-ID name from the CNAM database ($0.01 per look up). Can be: `true` or `false`. */
		voice_caller_id_lookup: FormControl<boolean | null | undefined>,

		/** The HTTP method that we use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
		voice_fallback_method: FormControl<Trunkingv1trunkDisaster_recovery_method | null | undefined>,

		/** The URL that we call using the `voice_fallback_method` when an error occurs retrieving or executing the TwiML requested by `url`. */
		voice_fallback_url: FormControl<string | null | undefined>,

		/** The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`. */
		voice_method: FormControl<Trunkingv1trunkDisaster_recovery_method | null | undefined>,

		/** The URL we call using the `voice_method` when the phone number receives a call. The `voice_url` is not be used if a `voice_application_sid` or a `trunk_sid` is set. */
		voice_url: FormControl<string | null | undefined>,
	}
	export function CreateTrunkingv1trunkphone_numberFormGroup() {
		return new FormGroup<Trunkingv1trunkphone_numberFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			address_requirements: new FormControl<Phone_number_enum_address_requirement | null | undefined>(undefined),
			api_version: new FormControl<string | null | undefined>(undefined),
			beta: new FormControl<boolean | null | undefined>(undefined),
			capabilities: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^PN[0-9a-fA-F]{32}$')]),
			sms_application_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AP[0-9a-fA-F]{32}$')]),
			sms_fallback_method: new FormControl<Trunkingv1trunkDisaster_recovery_method | null | undefined>(undefined),
			sms_fallback_url: new FormControl<string | null | undefined>(undefined),
			sms_method: new FormControl<Trunkingv1trunkDisaster_recovery_method | null | undefined>(undefined),
			sms_url: new FormControl<string | null | undefined>(undefined),
			status_callback: new FormControl<string | null | undefined>(undefined),
			status_callback_method: new FormControl<Trunkingv1trunkDisaster_recovery_method | null | undefined>(undefined),
			trunk_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^TK[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			voice_application_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AP[0-9a-fA-F]{32}$')]),
			voice_caller_id_lookup: new FormControl<boolean | null | undefined>(undefined),
			voice_fallback_method: new FormControl<Trunkingv1trunkDisaster_recovery_method | null | undefined>(undefined),
			voice_fallback_url: new FormControl<string | null | undefined>(undefined),
			voice_method: new FormControl<Trunkingv1trunkDisaster_recovery_method | null | undefined>(undefined),
			voice_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Trunkingv1trunkrecording {
		mode?: Recording_enum_recording_mode | null;
		trim?: Recording_enum_recording_trim | null;
	}
	export interface Trunkingv1trunkrecordingFormProperties {
		mode: FormControl<Recording_enum_recording_mode | null | undefined>,
		trim: FormControl<Recording_enum_recording_trim | null | undefined>,
	}
	export function CreateTrunkingv1trunkrecordingFormGroup() {
		return new FormGroup<Trunkingv1trunkrecordingFormProperties>({
			mode: new FormControl<Recording_enum_recording_mode | null | undefined>(undefined),
			trim: new FormControl<Recording_enum_recording_trim | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v1/Trunks
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListTrunkReturn} OK
		 */
		ListTrunk(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListTrunkReturn> {
			return this.http.get<ListTrunkReturn>(this.baseUri + 'v1/Trunks?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Trunks/{Sid}
		 * @param {string} Sid The unique string that we created to identify the Trunk resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteTrunk(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Trunks/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Trunks/{Sid}
		 * @param {string} Sid The unique string that we created to identify the Trunk resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Trunkingv1trunk} OK
		 */
		FetchTrunk(Sid: string): Observable<Trunkingv1trunk> {
			return this.http.get<Trunkingv1trunk>(this.baseUri + 'v1/Trunks/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Trunks/{TrunkSid}/CredentialLists
		 * @param {string} TrunkSid The SID of the Trunk from which to read the credential lists.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListCredentialListReturn} OK
		 */
		ListCredentialList(TrunkSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListCredentialListReturn> {
			return this.http.get<ListCredentialListReturn>(this.baseUri + 'v1/Trunks/' + (TrunkSid == null ? '' : encodeURIComponent(TrunkSid)) + '/CredentialLists&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Trunks/{TrunkSid}/CredentialLists/{Sid}
		 * @param {string} TrunkSid The SID of the Trunk from which to delete the credential list.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The unique string that we created to identify the CredentialList resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteCredentialList(TrunkSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Trunks/' + (TrunkSid == null ? '' : encodeURIComponent(TrunkSid)) + '/CredentialLists/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Trunks/{TrunkSid}/CredentialLists/{Sid}
		 * @param {string} TrunkSid The SID of the Trunk from which to fetch the credential list.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The unique string that we created to identify the CredentialList resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Trunkingv1trunkcredential_list} OK
		 */
		FetchCredentialList(TrunkSid: string, Sid: string): Observable<Trunkingv1trunkcredential_list> {
			return this.http.get<Trunkingv1trunkcredential_list>(this.baseUri + 'v1/Trunks/' + (TrunkSid == null ? '' : encodeURIComponent(TrunkSid)) + '/CredentialLists/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * List all IP Access Control Lists for a Trunk
		 * Get v1/Trunks/{TrunkSid}/IpAccessControlLists
		 * @param {string} TrunkSid The SID of the Trunk from which to read the IP Access Control Lists.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListIpAccessControlListReturn} OK
		 */
		ListIpAccessControlList(TrunkSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListIpAccessControlListReturn> {
			return this.http.get<ListIpAccessControlListReturn>(this.baseUri + 'v1/Trunks/' + (TrunkSid == null ? '' : encodeURIComponent(TrunkSid)) + '/IpAccessControlLists&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Remove an associated IP Access Control List from a Trunk
		 * Delete v1/Trunks/{TrunkSid}/IpAccessControlLists/{Sid}
		 * @param {string} TrunkSid The SID of the Trunk from which to delete the IP Access Control List.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The unique string that we created to identify the IpAccessControlList resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteIpAccessControlList(TrunkSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Trunks/' + (TrunkSid == null ? '' : encodeURIComponent(TrunkSid)) + '/IpAccessControlLists/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Trunks/{TrunkSid}/IpAccessControlLists/{Sid}
		 * @param {string} TrunkSid The SID of the Trunk from which to fetch the IP Access Control List.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The unique string that we created to identify the IpAccessControlList resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Trunkingv1trunkip_access_control_list} OK
		 */
		FetchIpAccessControlList(TrunkSid: string, Sid: string): Observable<Trunkingv1trunkip_access_control_list> {
			return this.http.get<Trunkingv1trunkip_access_control_list>(this.baseUri + 'v1/Trunks/' + (TrunkSid == null ? '' : encodeURIComponent(TrunkSid)) + '/IpAccessControlLists/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Trunks/{TrunkSid}/OriginationUrls
		 * @param {string} TrunkSid The SID of the Trunk from which to read the OriginationUrl.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListOriginationUrlReturn} OK
		 */
		ListOriginationUrl(TrunkSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListOriginationUrlReturn> {
			return this.http.get<ListOriginationUrlReturn>(this.baseUri + 'v1/Trunks/' + (TrunkSid == null ? '' : encodeURIComponent(TrunkSid)) + '/OriginationUrls&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Trunks/{TrunkSid}/OriginationUrls/{Sid}
		 * @param {string} TrunkSid The SID of the Trunk from which to delete the OriginationUrl.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The unique string that we created to identify the OriginationUrl resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteOriginationUrl(TrunkSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Trunks/' + (TrunkSid == null ? '' : encodeURIComponent(TrunkSid)) + '/OriginationUrls/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Trunks/{TrunkSid}/OriginationUrls/{Sid}
		 * @param {string} TrunkSid The SID of the Trunk from which to fetch the OriginationUrl.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The unique string that we created to identify the OriginationUrl resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Trunkingv1trunkorigination_url} OK
		 */
		FetchOriginationUrl(TrunkSid: string, Sid: string): Observable<Trunkingv1trunkorigination_url> {
			return this.http.get<Trunkingv1trunkorigination_url>(this.baseUri + 'v1/Trunks/' + (TrunkSid == null ? '' : encodeURIComponent(TrunkSid)) + '/OriginationUrls/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Trunks/{TrunkSid}/PhoneNumbers
		 * @param {string} TrunkSid The SID of the Trunk from which to read the PhoneNumber resources.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListPhoneNumberReturn} OK
		 */
		ListPhoneNumber(TrunkSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListPhoneNumberReturn> {
			return this.http.get<ListPhoneNumberReturn>(this.baseUri + 'v1/Trunks/' + (TrunkSid == null ? '' : encodeURIComponent(TrunkSid)) + '/PhoneNumbers&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Trunks/{TrunkSid}/PhoneNumbers/{Sid}
		 * @param {string} TrunkSid The SID of the Trunk from which to delete the PhoneNumber resource.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The unique string that we created to identify the PhoneNumber resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeletePhoneNumber(TrunkSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Trunks/' + (TrunkSid == null ? '' : encodeURIComponent(TrunkSid)) + '/PhoneNumbers/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Trunks/{TrunkSid}/PhoneNumbers/{Sid}
		 * @param {string} TrunkSid The SID of the Trunk from which to fetch the PhoneNumber resource.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The unique string that we created to identify the PhoneNumber resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Trunkingv1trunkphone_number} OK
		 */
		FetchPhoneNumber(TrunkSid: string, Sid: string): Observable<Trunkingv1trunkphone_number> {
			return this.http.get<Trunkingv1trunkphone_number>(this.baseUri + 'v1/Trunks/' + (TrunkSid == null ? '' : encodeURIComponent(TrunkSid)) + '/PhoneNumbers/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Trunks/{TrunkSid}/Recording
		 * @param {string} TrunkSid The SID of the Trunk from which to fetch the recording settings.
		 *     Min length: 34    Max length: 34
		 * @return {Trunkingv1trunkrecording} OK
		 */
		FetchRecording(TrunkSid: string): Observable<Trunkingv1trunkrecording> {
			return this.http.get<Trunkingv1trunkrecording>(this.baseUri + 'v1/Trunks/' + (TrunkSid == null ? '' : encodeURIComponent(TrunkSid)) + '/Recording', {});
		}
	}

	export interface ListTrunkReturn {
		meta?: ListTrunkReturnMeta;
		trunks?: Array<Trunkingv1trunk>;
	}
	export interface ListTrunkReturnFormProperties {
	}
	export function CreateListTrunkReturnFormGroup() {
		return new FormGroup<ListTrunkReturnFormProperties>({
		});

	}

	export interface ListTrunkReturnMeta {
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
	export interface ListTrunkReturnMetaFormProperties {
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
	export function CreateListTrunkReturnMetaFormGroup() {
		return new FormGroup<ListTrunkReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCredentialListReturn {
		credential_lists?: Array<Trunkingv1trunkcredential_list>;
		meta?: ListCredentialListReturnMeta;
	}
	export interface ListCredentialListReturnFormProperties {
	}
	export function CreateListCredentialListReturnFormGroup() {
		return new FormGroup<ListCredentialListReturnFormProperties>({
		});

	}

	export interface ListCredentialListReturnMeta {
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
	export interface ListCredentialListReturnMetaFormProperties {
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
	export function CreateListCredentialListReturnMetaFormGroup() {
		return new FormGroup<ListCredentialListReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIpAccessControlListReturn {
		ip_access_control_lists?: Array<Trunkingv1trunkip_access_control_list>;
		meta?: ListIpAccessControlListReturnMeta;
	}
	export interface ListIpAccessControlListReturnFormProperties {
	}
	export function CreateListIpAccessControlListReturnFormGroup() {
		return new FormGroup<ListIpAccessControlListReturnFormProperties>({
		});

	}

	export interface ListIpAccessControlListReturnMeta {
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
	export interface ListIpAccessControlListReturnMetaFormProperties {
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
	export function CreateListIpAccessControlListReturnMetaFormGroup() {
		return new FormGroup<ListIpAccessControlListReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOriginationUrlReturn {
		meta?: ListOriginationUrlReturnMeta;
		origination_urls?: Array<Trunkingv1trunkorigination_url>;
	}
	export interface ListOriginationUrlReturnFormProperties {
	}
	export function CreateListOriginationUrlReturnFormGroup() {
		return new FormGroup<ListOriginationUrlReturnFormProperties>({
		});

	}

	export interface ListOriginationUrlReturnMeta {
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
	export interface ListOriginationUrlReturnMetaFormProperties {
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
	export function CreateListOriginationUrlReturnMetaFormGroup() {
		return new FormGroup<ListOriginationUrlReturnMetaFormProperties>({
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
		phone_numbers?: Array<Trunkingv1trunkphone_number>;
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

}

