import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Voicev1archived_call {

		/** The date */
		date?: Date | null;

		/**
		 * The call sid
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Voicev1archived_callFormProperties {

		/** The date */
		date: FormControl<Date | null | undefined>,

		/**
		 * The call sid
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVoicev1archived_callFormGroup() {
		return new FormGroup<Voicev1archived_callFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CA[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Voicev1byoc_trunk {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the BYOC Trunk resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all inbound calls to the BYOC Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information. */
		cnam_lookup_enabled?: boolean | null;

		/**
		 * The SID of the Connection Policy that Twilio will use when routing traffic to your communications infrastructure.
		 * Max length: 34
		 * Min length: 34
		 */
		connection_policy_sid?: string | null;

		/** The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/**
		 * The SID of the SIP Domain that should be used in the `From` header of originating calls sent to your SIP infrastructure. If your SIP infrastructure allows users to "call back" an incoming call, configure this with a [SIP Domain](https://www.twilio.com/docs/voice/api/sending-sip) to ensure proper routing. If not configured, the from domain will default to "sip.twilio.com".
		 * Max length: 34
		 * Min length: 34
		 */
		from_domain_sid?: string | null;

		/**
		 * The unique string that that we created to identify the BYOC Trunk resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The HTTP method we use to call `status_callback_url`. Either `GET` or `POST`. */
		status_callback_method?: Voicev1byoc_trunkStatus_callback_method | null;

		/** The URL that we call to pass status parameters (such as call ended) to your application. */
		status_callback_url?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;

		/** The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
		voice_fallback_method?: Voicev1byoc_trunkStatus_callback_method | null;

		/** The URL that we call when an error occurs while retrieving or executing the TwiML requested from `voice_url`. */
		voice_fallback_url?: string | null;

		/** The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`. */
		voice_method?: Voicev1byoc_trunkStatus_callback_method | null;

		/** The URL we call using the `voice_method` when the BYOC Trunk receives a call. */
		voice_url?: string | null;
	}
	export interface Voicev1byoc_trunkFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the BYOC Trunk resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all inbound calls to the BYOC Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information. */
		cnam_lookup_enabled: FormControl<boolean | null | undefined>,

		/**
		 * The SID of the Connection Policy that Twilio will use when routing traffic to your communications infrastructure.
		 * Max length: 34
		 * Min length: 34
		 */
		connection_policy_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * The SID of the SIP Domain that should be used in the `From` header of originating calls sent to your SIP infrastructure. If your SIP infrastructure allows users to "call back" an incoming call, configure this with a [SIP Domain](https://www.twilio.com/docs/voice/api/sending-sip) to ensure proper routing. If not configured, the from domain will default to "sip.twilio.com".
		 * Max length: 34
		 * Min length: 34
		 */
		from_domain_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that that we created to identify the BYOC Trunk resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The HTTP method we use to call `status_callback_url`. Either `GET` or `POST`. */
		status_callback_method: FormControl<Voicev1byoc_trunkStatus_callback_method | null | undefined>,

		/** The URL that we call to pass status parameters (such as call ended) to your application. */
		status_callback_url: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,

		/** The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
		voice_fallback_method: FormControl<Voicev1byoc_trunkStatus_callback_method | null | undefined>,

		/** The URL that we call when an error occurs while retrieving or executing the TwiML requested from `voice_url`. */
		voice_fallback_url: FormControl<string | null | undefined>,

		/** The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`. */
		voice_method: FormControl<Voicev1byoc_trunkStatus_callback_method | null | undefined>,

		/** The URL we call using the `voice_method` when the BYOC Trunk receives a call. */
		voice_url: FormControl<string | null | undefined>,
	}
	export function CreateVoicev1byoc_trunkFormGroup() {
		return new FormGroup<Voicev1byoc_trunkFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			cnam_lookup_enabled: new FormControl<boolean | null | undefined>(undefined),
			connection_policy_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^NY[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			from_domain_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^SD[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^BY[0-9a-fA-F]{32}$')]),
			status_callback_method: new FormControl<Voicev1byoc_trunkStatus_callback_method | null | undefined>(undefined),
			status_callback_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			voice_fallback_method: new FormControl<Voicev1byoc_trunkStatus_callback_method | null | undefined>(undefined),
			voice_fallback_url: new FormControl<string | null | undefined>(undefined),
			voice_method: new FormControl<Voicev1byoc_trunkStatus_callback_method | null | undefined>(undefined),
			voice_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Voicev1byoc_trunkStatus_callback_method { HEAD = 'HEAD', GET = 'GET', POST = 'POST', PATCH = 'PATCH', PUT = 'PUT', DELETE = 'DELETE' }

	export interface Voicev1connection_policy {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Connection Policy resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** The URLs of related resources. */
		links?: string | null;

		/**
		 * The unique string that we created to identify the Connection Policy resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Voicev1connection_policyFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Connection Policy resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Connection Policy resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVoicev1connection_policyFormGroup() {
		return new FormGroup<Voicev1connection_policyFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^NY[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Voicev1connection_policyconnection_policy_target {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Target resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the Connection Policy that owns the Target.
		 * Max length: 34
		 * Min length: 34
		 */
		connection_policy_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** Whether the target is enabled. The default is `true`. */
		enabled?: boolean | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** The relative importance of the target. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important target. */
		priority?: number | null;

		/**
		 * The unique string that we created to identify the Target resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The SIP address you want Twilio to route your calls to. This must be a `sip:` schema. `sips` is NOT supported. */
		target?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;

		/** The value that determines the relative share of the load the Target should receive compared to other Targets with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. Targets with higher values receive more load than those with lower ones with the same priority. */
		weight?: number | null;
	}
	export interface Voicev1connection_policyconnection_policy_targetFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Target resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Connection Policy that owns the Target.
		 * Max length: 34
		 * Min length: 34
		 */
		connection_policy_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** Whether the target is enabled. The default is `true`. */
		enabled: FormControl<boolean | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** The relative importance of the target. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important target. */
		priority: FormControl<number | null | undefined>,

		/**
		 * The unique string that we created to identify the Target resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The SIP address you want Twilio to route your calls to. This must be a `sip:` schema. `sips` is NOT supported. */
		target: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,

		/** The value that determines the relative share of the load the Target should receive compared to other Targets with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. Targets with higher values receive more load than those with lower ones with the same priority. */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateVoicev1connection_policyconnection_policy_targetFormGroup() {
		return new FormGroup<Voicev1connection_policyconnection_policy_targetFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			connection_policy_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^NY[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^NE[0-9a-fA-F]{32}$')]),
			target: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Voicev1dialing_permissions {
	}
	export interface Voicev1dialing_permissionsFormProperties {
	}
	export function CreateVoicev1dialing_permissionsFormGroup() {
		return new FormGroup<Voicev1dialing_permissionsFormProperties>({
		});

	}

	export interface Voicev1dialing_permissionsdialing_permissions_country {

		/** The name of the continent in which the country is located. */
		continent?: string | null;

		/** The E.164 assigned [country codes(s)](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html) */
		country_codes?: Array<string>;

		/** Whether dialing to high-risk special services numbers is enabled. These prefixes include number ranges allocated by the country and include premium numbers, special services, shared cost, and others */
		high_risk_special_numbers_enabled?: boolean | null;

		/** Whether dialing to high-risk [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html) numbers is enabled. These prefixes include narrow number ranges that have a high-risk of international revenue sharing fraud (IRSF) attacks, also known as [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html). These prefixes are collected from anti-fraud databases and verified by analyzing calls on our network. These prefixes are not available for download and are updated frequently */
		high_risk_tollfraud_numbers_enabled?: boolean | null;

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_code?: string | null;

		/** A list of URLs related to this resource. */
		links?: string | null;

		/** Whether dialing to low-risk numbers is enabled. */
		low_risk_numbers_enabled?: boolean | null;

		/** The name of the country. */
		name?: string | null;

		/** The absolute URL of this resource. */
		url?: string | null;
	}
	export interface Voicev1dialing_permissionsdialing_permissions_countryFormProperties {

		/** The name of the continent in which the country is located. */
		continent: FormControl<string | null | undefined>,

		/** Whether dialing to high-risk special services numbers is enabled. These prefixes include number ranges allocated by the country and include premium numbers, special services, shared cost, and others */
		high_risk_special_numbers_enabled: FormControl<boolean | null | undefined>,

		/** Whether dialing to high-risk [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html) numbers is enabled. These prefixes include narrow number ranges that have a high-risk of international revenue sharing fraud (IRSF) attacks, also known as [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html). These prefixes are collected from anti-fraud databases and verified by analyzing calls on our network. These prefixes are not available for download and are updated frequently */
		high_risk_tollfraud_numbers_enabled: FormControl<boolean | null | undefined>,

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_code: FormControl<string | null | undefined>,

		/** A list of URLs related to this resource. */
		links: FormControl<string | null | undefined>,

		/** Whether dialing to low-risk numbers is enabled. */
		low_risk_numbers_enabled: FormControl<boolean | null | undefined>,

		/** The name of the country. */
		name: FormControl<string | null | undefined>,

		/** The absolute URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVoicev1dialing_permissionsdialing_permissions_countryFormGroup() {
		return new FormGroup<Voicev1dialing_permissionsdialing_permissions_countryFormProperties>({
			continent: new FormControl<string | null | undefined>(undefined),
			high_risk_special_numbers_enabled: new FormControl<boolean | null | undefined>(undefined),
			high_risk_tollfraud_numbers_enabled: new FormControl<boolean | null | undefined>(undefined),
			iso_code: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			low_risk_numbers_enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Voicev1dialing_permissionsdialing_permissions_country_instance {

		/** The name of the continent in which the country is located. */
		continent?: string | null;

		/** The E.164 assigned [country codes(s)](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html) */
		country_codes?: Array<string>;

		/** Whether dialing to high-risk special services numbers is enabled. These prefixes include number ranges allocated by the country and include premium numbers, special services, shared cost, and others */
		high_risk_special_numbers_enabled?: boolean | null;

		/** Whether dialing to high-risk [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html) numbers is enabled. These prefixes include narrow number ranges that have a high-risk of international revenue sharing fraud (IRSF) attacks, also known as [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html). These prefixes are collected from anti-fraud databases and verified by analyzing calls on our network. These prefixes are not available for download and are updated frequently */
		high_risk_tollfraud_numbers_enabled?: boolean | null;

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_code?: string | null;

		/** A list of URLs related to this resource. */
		links?: string | null;

		/** Whether dialing to low-risk numbers is enabled. */
		low_risk_numbers_enabled?: boolean | null;

		/** The name of the country. */
		name?: string | null;

		/** The absolute URL of this resource. */
		url?: string | null;
	}
	export interface Voicev1dialing_permissionsdialing_permissions_country_instanceFormProperties {

		/** The name of the continent in which the country is located. */
		continent: FormControl<string | null | undefined>,

		/** Whether dialing to high-risk special services numbers is enabled. These prefixes include number ranges allocated by the country and include premium numbers, special services, shared cost, and others */
		high_risk_special_numbers_enabled: FormControl<boolean | null | undefined>,

		/** Whether dialing to high-risk [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html) numbers is enabled. These prefixes include narrow number ranges that have a high-risk of international revenue sharing fraud (IRSF) attacks, also known as [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html). These prefixes are collected from anti-fraud databases and verified by analyzing calls on our network. These prefixes are not available for download and are updated frequently */
		high_risk_tollfraud_numbers_enabled: FormControl<boolean | null | undefined>,

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_code: FormControl<string | null | undefined>,

		/** A list of URLs related to this resource. */
		links: FormControl<string | null | undefined>,

		/** Whether dialing to low-risk numbers is enabled. */
		low_risk_numbers_enabled: FormControl<boolean | null | undefined>,

		/** The name of the country. */
		name: FormControl<string | null | undefined>,

		/** The absolute URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVoicev1dialing_permissionsdialing_permissions_country_instanceFormGroup() {
		return new FormGroup<Voicev1dialing_permissionsdialing_permissions_country_instanceFormProperties>({
			continent: new FormControl<string | null | undefined>(undefined),
			high_risk_special_numbers_enabled: new FormControl<boolean | null | undefined>(undefined),
			high_risk_tollfraud_numbers_enabled: new FormControl<boolean | null | undefined>(undefined),
			iso_code: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			low_risk_numbers_enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Voicev1dialing_permissionsdialing_permissions_countrydialing_permissions_hrs_prefixes {

		/** A prefix is a contiguous number range for a block of E.164 numbers that includes the E.164 assigned country code. For example, a North American Numbering Plan prefix like `+1510720` written like `+1(510) 720` matches all numbers inclusive from `+1(510) 720-0000` to `+1(510) 720-9999`. */
		prefix?: string | null;
	}
	export interface Voicev1dialing_permissionsdialing_permissions_countrydialing_permissions_hrs_prefixesFormProperties {

		/** A prefix is a contiguous number range for a block of E.164 numbers that includes the E.164 assigned country code. For example, a North American Numbering Plan prefix like `+1510720` written like `+1(510) 720` matches all numbers inclusive from `+1(510) 720-0000` to `+1(510) 720-9999`. */
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateVoicev1dialing_permissionsdialing_permissions_countrydialing_permissions_hrs_prefixesFormGroup() {
		return new FormGroup<Voicev1dialing_permissionsdialing_permissions_countrydialing_permissions_hrs_prefixesFormProperties>({
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Voicev1dialing_permissionsdialing_permissions_country_bulk_update {

		/** The number of countries updated */
		update_count?: number | null;

		/** A bulk update request to change voice dialing country permissions stored as a URL-encoded, JSON array of update objects. For example : `[ { "iso_code": "GB", "low_risk_numbers_enabled": "true", "high_risk_special_numbers_enabled":"true", "high_risk_tollfraud_numbers_enabled": "false" } ]` */
		update_request?: string | null;
	}
	export interface Voicev1dialing_permissionsdialing_permissions_country_bulk_updateFormProperties {

		/** The number of countries updated */
		update_count: FormControl<number | null | undefined>,

		/** A bulk update request to change voice dialing country permissions stored as a URL-encoded, JSON array of update objects. For example : `[ { "iso_code": "GB", "low_risk_numbers_enabled": "true", "high_risk_special_numbers_enabled":"true", "high_risk_tollfraud_numbers_enabled": "false" } ]` */
		update_request: FormControl<string | null | undefined>,
	}
	export function CreateVoicev1dialing_permissionsdialing_permissions_country_bulk_updateFormGroup() {
		return new FormGroup<Voicev1dialing_permissionsdialing_permissions_country_bulk_updateFormProperties>({
			update_count: new FormControl<number | null | undefined>(undefined),
			update_request: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Voicev1dialing_permissionsdialing_permissions_settings {

		/** `true` if the sub-account will inherit voice dialing permissions from the Master Project; otherwise `false`. */
		dialing_permissions_inheritance?: boolean | null;

		/** The absolute URL of this resource. */
		url?: string | null;
	}
	export interface Voicev1dialing_permissionsdialing_permissions_settingsFormProperties {

		/** `true` if the sub-account will inherit voice dialing permissions from the Master Project; otherwise `false`. */
		dialing_permissions_inheritance: FormControl<boolean | null | undefined>,

		/** The absolute URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVoicev1dialing_permissionsdialing_permissions_settingsFormGroup() {
		return new FormGroup<Voicev1dialing_permissionsdialing_permissions_settingsFormProperties>({
			dialing_permissions_inheritance: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Voicev1ip_record {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IP Record resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** An integer representing the length of the [CIDR](https://tools.ietf.org/html/rfc4632) prefix to use with this IP address. By default the entire IP address is used, which for IPv4 is value 32. */
		cidr_prefix_length?: number | null;

		/** The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** An IP address in dotted decimal notation, IPv4 only. */
		ip_address?: string | null;

		/**
		 * The unique string that we created to identify the IP Record resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Voicev1ip_recordFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IP Record resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** An integer representing the length of the [CIDR](https://tools.ietf.org/html/rfc4632) prefix to use with this IP address. By default the entire IP address is used, which for IPv4 is value 32. */
		cidr_prefix_length: FormControl<number | null | undefined>,

		/** The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** An IP address in dotted decimal notation, IPv4 only. */
		ip_address: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the IP Record resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVoicev1ip_recordFormGroup() {
		return new FormGroup<Voicev1ip_recordFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			cidr_prefix_length: new FormControl<number | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			ip_address: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IL[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Voicev1source_ip_mapping {

		/** The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/**
		 * The Twilio-provided string that uniquely identifies the IP Record resource to map from.
		 * Max length: 34
		 * Min length: 34
		 */
		ip_record_sid?: string | null;

		/**
		 * The unique string that we created to identify the IP Record resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/**
		 * The SID of the SIP Domain that the IP Record is mapped to.
		 * Max length: 34
		 * Min length: 34
		 */
		sip_domain_sid?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Voicev1source_ip_mappingFormProperties {

		/** The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The Twilio-provided string that uniquely identifies the IP Record resource to map from.
		 * Max length: 34
		 * Min length: 34
		 */
		ip_record_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the IP Record resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the SIP Domain that the IP Record is mapped to.
		 * Max length: 34
		 * Min length: 34
		 */
		sip_domain_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVoicev1source_ip_mappingFormGroup() {
		return new FormGroup<Voicev1source_ip_mappingFormProperties>({
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			ip_record_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IL[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IB[0-9a-fA-F]{32}$')]),
			sip_domain_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^SD[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
		 * Delete v1/Archives/{Date}/Calls/{Sid}
		 * @param {Date} Date The date of the Call in UTC.
		 * @param {string} Sid The Twilio-provided Call SID that uniquely identifies the Call resource to delete
		 * @return {void} 
		 */
		DeleteArchivedCall(Date: Date, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Archives/' + Date.toISOString() + '/Calls/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/ByocTrunks
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListByocTrunkReturn} OK
		 */
		ListByocTrunk(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListByocTrunkReturn> {
			return this.http.get<ListByocTrunkReturn>(this.baseUri + 'v1/ByocTrunks?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/ByocTrunks/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the BYOC Trunk resource to delete.
		 * @return {void} 
		 */
		DeleteByocTrunk(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/ByocTrunks/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/ByocTrunks/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the BYOC Trunk resource to fetch.
		 * @return {Voicev1byoc_trunk} OK
		 */
		FetchByocTrunk(Sid: string): Observable<Voicev1byoc_trunk> {
			return this.http.get<Voicev1byoc_trunk>(this.baseUri + 'v1/ByocTrunks/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/ConnectionPolicies
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListConnectionPolicyReturn} OK
		 */
		ListConnectionPolicy(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListConnectionPolicyReturn> {
			return this.http.get<ListConnectionPolicyReturn>(this.baseUri + 'v1/ConnectionPolicies?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/ConnectionPolicies/{ConnectionPolicySid}/Targets
		 * @param {string} ConnectionPolicySid The SID of the Connection Policy from which to read the Targets.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListConnectionPolicyTargetReturn} OK
		 */
		ListConnectionPolicyTarget(ConnectionPolicySid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListConnectionPolicyTargetReturn> {
			return this.http.get<ListConnectionPolicyTargetReturn>(this.baseUri + 'v1/ConnectionPolicies/' + (ConnectionPolicySid == null ? '' : encodeURIComponent(ConnectionPolicySid)) + '/Targets&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}
		 * @param {string} ConnectionPolicySid The SID of the Connection Policy that owns the Target.
		 * @param {string} Sid The unique string that we created to identify the Target resource to delete.
		 * @return {void} 
		 */
		DeleteConnectionPolicyTarget(ConnectionPolicySid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/ConnectionPolicies/' + (ConnectionPolicySid == null ? '' : encodeURIComponent(ConnectionPolicySid)) + '/Targets/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}
		 * @param {string} ConnectionPolicySid The SID of the Connection Policy that owns the Target.
		 * @param {string} Sid The unique string that we created to identify the Target resource to fetch.
		 * @return {Voicev1connection_policyconnection_policy_target} OK
		 */
		FetchConnectionPolicyTarget(ConnectionPolicySid: string, Sid: string): Observable<Voicev1connection_policyconnection_policy_target> {
			return this.http.get<Voicev1connection_policyconnection_policy_target>(this.baseUri + 'v1/ConnectionPolicies/' + (ConnectionPolicySid == null ? '' : encodeURIComponent(ConnectionPolicySid)) + '/Targets/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete v1/ConnectionPolicies/{Sid}
		 * @param {string} Sid The unique string that we created to identify the Connection Policy resource to delete.
		 * @return {void} 
		 */
		DeleteConnectionPolicy(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/ConnectionPolicies/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/ConnectionPolicies/{Sid}
		 * @param {string} Sid The unique string that we created to identify the Connection Policy resource to fetch.
		 * @return {Voicev1connection_policy} OK
		 */
		FetchConnectionPolicy(Sid: string): Observable<Voicev1connection_policy> {
			return this.http.get<Voicev1connection_policy>(this.baseUri + 'v1/ConnectionPolicies/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve all voice dialing country permissions for this account
		 * Get v1/DialingPermissions/Countries
		 * @param {string} IsoCode Filter to retrieve the country permissions by specifying the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
		 * @param {string} Continent Filter to retrieve the country permissions by specifying the continent
		 * @param {string} CountryCode Filter the results by specified [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
		 * @param {boolean} LowRiskNumbersEnabled Filter to retrieve the country permissions with dialing to low-risk numbers enabled. Can be: `true` or `false`.
		 * @param {boolean} HighRiskSpecialNumbersEnabled Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled. Can be: `true` or `false`
		 * @param {boolean} HighRiskTollfraudNumbersEnabled Filter to retrieve the country permissions with dialing to high-risk [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html) numbers enabled. Can be: `true` or `false`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListDialingPermissionsCountryReturn} OK
		 */
		ListDialingPermissionsCountry(IsoCode: string | null | undefined, Continent: string | null | undefined, CountryCode: string | null | undefined, LowRiskNumbersEnabled: boolean | null | undefined, HighRiskSpecialNumbersEnabled: boolean | null | undefined, HighRiskTollfraudNumbersEnabled: boolean | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListDialingPermissionsCountryReturn> {
			return this.http.get<ListDialingPermissionsCountryReturn>(this.baseUri + 'v1/DialingPermissions/Countries?IsoCode=' + (IsoCode == null ? '' : encodeURIComponent(IsoCode)) + '&Continent=' + (Continent == null ? '' : encodeURIComponent(Continent)) + '&CountryCode=' + (CountryCode == null ? '' : encodeURIComponent(CountryCode)) + '&LowRiskNumbersEnabled=' + LowRiskNumbersEnabled + '&HighRiskSpecialNumbersEnabled=' + HighRiskSpecialNumbersEnabled + '&HighRiskTollfraudNumbersEnabled=' + HighRiskTollfraudNumbersEnabled + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve voice dialing country permissions identified by the given ISO country code
		 * Get v1/DialingPermissions/Countries/{IsoCode}
		 * @param {string} IsoCode The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the DialingPermissions Country resource to fetch
		 * @return {Voicev1dialing_permissionsdialing_permissions_country_instance} OK
		 */
		FetchDialingPermissionsCountry(IsoCode: string): Observable<Voicev1dialing_permissionsdialing_permissions_country_instance> {
			return this.http.get<Voicev1dialing_permissionsdialing_permissions_country_instance>(this.baseUri + 'v1/DialingPermissions/Countries/' + (IsoCode == null ? '' : encodeURIComponent(IsoCode)), {});
		}

		/**
		 * Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
		 * Get v1/DialingPermissions/Countries/{IsoCode}/HighRiskSpecialPrefixes
		 * @param {string} IsoCode The [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) to identify the country permissions from which high-risk special service number prefixes are fetched
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListDialingPermissionsHrsPrefixesReturn} OK
		 */
		ListDialingPermissionsHrsPrefixes(IsoCode: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListDialingPermissionsHrsPrefixesReturn> {
			return this.http.get<ListDialingPermissionsHrsPrefixesReturn>(this.baseUri + 'v1/DialingPermissions/Countries/' + (IsoCode == null ? '' : encodeURIComponent(IsoCode)) + '/HighRiskSpecialPrefixes&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/IpRecords
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListIpRecordReturn} OK
		 */
		ListIpRecord(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListIpRecordReturn> {
			return this.http.get<ListIpRecordReturn>(this.baseUri + 'v1/IpRecords?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/IpRecords/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the IP Record resource to delete.
		 * @return {void} 
		 */
		DeleteIpRecord(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/IpRecords/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/IpRecords/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the IP Record resource to fetch.
		 * @return {Voicev1ip_record} OK
		 */
		FetchIpRecord(Sid: string): Observable<Voicev1ip_record> {
			return this.http.get<Voicev1ip_record>(this.baseUri + 'v1/IpRecords/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve voice dialing permissions inheritance for the sub-account
		 * Get v1/Settings
		 * @return {Voicev1dialing_permissionsdialing_permissions_settings} OK
		 */
		FetchDialingPermissionsSettings(): Observable<Voicev1dialing_permissionsdialing_permissions_settings> {
			return this.http.get<Voicev1dialing_permissionsdialing_permissions_settings>(this.baseUri + 'v1/Settings', {});
		}

		/**
		 * Get v1/SourceIpMappings
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSourceIpMappingReturn} OK
		 */
		ListSourceIpMapping(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSourceIpMappingReturn> {
			return this.http.get<ListSourceIpMappingReturn>(this.baseUri + 'v1/SourceIpMappings?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/SourceIpMappings/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the IP Record resource to delete.
		 * @return {void} 
		 */
		DeleteSourceIpMapping(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/SourceIpMappings/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/SourceIpMappings/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the IP Record resource to fetch.
		 * @return {Voicev1source_ip_mapping} OK
		 */
		FetchSourceIpMapping(Sid: string): Observable<Voicev1source_ip_mapping> {
			return this.http.get<Voicev1source_ip_mapping>(this.baseUri + 'v1/SourceIpMappings/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}
	}

	export interface ListByocTrunkReturn {
		byoc_trunks?: Array<Voicev1byoc_trunk>;
		meta?: ListByocTrunkReturnMeta;
	}
	export interface ListByocTrunkReturnFormProperties {
	}
	export function CreateListByocTrunkReturnFormGroup() {
		return new FormGroup<ListByocTrunkReturnFormProperties>({
		});

	}

	export interface ListByocTrunkReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListByocTrunkReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListByocTrunkReturnMetaFormGroup() {
		return new FormGroup<ListByocTrunkReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConnectionPolicyReturn {
		connection_policies?: Array<Voicev1connection_policy>;
		meta?: ListConnectionPolicyReturnMeta;
	}
	export interface ListConnectionPolicyReturnFormProperties {
	}
	export function CreateListConnectionPolicyReturnFormGroup() {
		return new FormGroup<ListConnectionPolicyReturnFormProperties>({
		});

	}

	export interface ListConnectionPolicyReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListConnectionPolicyReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionPolicyReturnMetaFormGroup() {
		return new FormGroup<ListConnectionPolicyReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConnectionPolicyTargetReturn {
		meta?: ListConnectionPolicyTargetReturnMeta;
		targets?: Array<Voicev1connection_policyconnection_policy_target>;
	}
	export interface ListConnectionPolicyTargetReturnFormProperties {
	}
	export function CreateListConnectionPolicyTargetReturnFormGroup() {
		return new FormGroup<ListConnectionPolicyTargetReturnFormProperties>({
		});

	}

	export interface ListConnectionPolicyTargetReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListConnectionPolicyTargetReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionPolicyTargetReturnMetaFormGroup() {
		return new FormGroup<ListConnectionPolicyTargetReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDialingPermissionsCountryReturn {
		content?: Array<Voicev1dialing_permissionsdialing_permissions_country>;
		meta?: ListDialingPermissionsCountryReturnMeta;
	}
	export interface ListDialingPermissionsCountryReturnFormProperties {
	}
	export function CreateListDialingPermissionsCountryReturnFormGroup() {
		return new FormGroup<ListDialingPermissionsCountryReturnFormProperties>({
		});

	}

	export interface ListDialingPermissionsCountryReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListDialingPermissionsCountryReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListDialingPermissionsCountryReturnMetaFormGroup() {
		return new FormGroup<ListDialingPermissionsCountryReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDialingPermissionsHrsPrefixesReturn {
		content?: Array<Voicev1dialing_permissionsdialing_permissions_countrydialing_permissions_hrs_prefixes>;
		meta?: ListDialingPermissionsHrsPrefixesReturnMeta;
	}
	export interface ListDialingPermissionsHrsPrefixesReturnFormProperties {
	}
	export function CreateListDialingPermissionsHrsPrefixesReturnFormGroup() {
		return new FormGroup<ListDialingPermissionsHrsPrefixesReturnFormProperties>({
		});

	}

	export interface ListDialingPermissionsHrsPrefixesReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListDialingPermissionsHrsPrefixesReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListDialingPermissionsHrsPrefixesReturnMetaFormGroup() {
		return new FormGroup<ListDialingPermissionsHrsPrefixesReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIpRecordReturn {
		ip_records?: Array<Voicev1ip_record>;
		meta?: ListIpRecordReturnMeta;
	}
	export interface ListIpRecordReturnFormProperties {
	}
	export function CreateListIpRecordReturnFormGroup() {
		return new FormGroup<ListIpRecordReturnFormProperties>({
		});

	}

	export interface ListIpRecordReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListIpRecordReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListIpRecordReturnMetaFormGroup() {
		return new FormGroup<ListIpRecordReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSourceIpMappingReturn {
		meta?: ListSourceIpMappingReturnMeta;
		source_ip_mappings?: Array<Voicev1source_ip_mapping>;
	}
	export interface ListSourceIpMappingReturnFormProperties {
	}
	export function CreateListSourceIpMappingReturnFormGroup() {
		return new FormGroup<ListSourceIpMappingReturnFormProperties>({
		});

	}

	export interface ListSourceIpMappingReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSourceIpMappingReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSourceIpMappingReturnMetaFormGroup() {
		return new FormGroup<ListSourceIpMappingReturnMetaFormProperties>({
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

