import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Routesv2phone_number {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date that this phone number was assigned an Inbound Processing Region, given in ISO 8601 format. */
		date_created?: Date | null;

		/** The date that the Inbound Processing Region was updated for this phone number, given in ISO 8601 format. */
		date_updated?: Date | null;

		/** A human readable description of the Inbound Processing Region assignments for this phone number, up to 64 characters. */
		friendly_name?: string | null;

		/** The phone number in E.164 format */
		phone_number?: string | null;

		/**
		 * A 34 character string that uniquely identifies the Inbound Processing Region assignments for this phone number.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;

		/** The Inbound Processing Region used for this phone number for voice. */
		voice_region?: string | null;
	}
	export interface Routesv2phone_numberFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date that this phone number was assigned an Inbound Processing Region, given in ISO 8601 format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date that the Inbound Processing Region was updated for this phone number, given in ISO 8601 format. */
		date_updated: FormControl<Date | null | undefined>,

		/** A human readable description of the Inbound Processing Region assignments for this phone number, up to 64 characters. */
		friendly_name: FormControl<string | null | undefined>,

		/** The phone number in E.164 format */
		phone_number: FormControl<string | null | undefined>,

		/**
		 * A 34 character string that uniquely identifies the Inbound Processing Region assignments for this phone number.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,

		/** The Inbound Processing Region used for this phone number for voice. */
		voice_region: FormControl<string | null | undefined>,
	}
	export function CreateRoutesv2phone_numberFormGroup() {
		return new FormGroup<Routesv2phone_numberFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^QQ[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			voice_region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Routesv2sip_domain {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;
		date_created?: Date | null;
		date_updated?: Date | null;
		friendly_name?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		sip_domain?: string | null;
		url?: string | null;
		voice_region?: string | null;
	}
	export interface Routesv2sip_domainFormProperties {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		date_updated: FormControl<Date | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		sip_domain: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		voice_region: FormControl<string | null | undefined>,
	}
	export function CreateRoutesv2sip_domainFormGroup() {
		return new FormGroup<Routesv2sip_domainFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^QQ[0-9a-fA-F]{32}$')]),
			sip_domain: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			voice_region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Routesv2trunks {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date that this SIP Trunk was assigned an Inbound Processing Region, given in ISO 8601 format. */
		date_created?: Date | null;

		/** The date that the Inbound Processing Region was updated for this SIP Trunk, given in ISO 8601 format. */
		date_updated?: Date | null;

		/** A human readable description of the Inbound Processing Region assignments for this SIP Trunk, up to 64 characters. */
		friendly_name?: string | null;

		/**
		 * A 34 character string that uniquely identifies the Inbound Processing Region assignments for this SIP Trunk.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the SIP Trunk */
		sip_trunk_domain?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;

		/** The Inbound Processing Region used for this SIP Trunk for voice. */
		voice_region?: string | null;
	}
	export interface Routesv2trunksFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date that this SIP Trunk was assigned an Inbound Processing Region, given in ISO 8601 format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date that the Inbound Processing Region was updated for this SIP Trunk, given in ISO 8601 format. */
		date_updated: FormControl<Date | null | undefined>,

		/** A human readable description of the Inbound Processing Region assignments for this SIP Trunk, up to 64 characters. */
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * A 34 character string that uniquely identifies the Inbound Processing Region assignments for this SIP Trunk.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the SIP Trunk */
		sip_trunk_domain: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,

		/** The Inbound Processing Region used for this SIP Trunk for voice. */
		voice_region: FormControl<string | null | undefined>,
	}
	export function CreateRoutesv2trunksFormGroup() {
		return new FormGroup<Routesv2trunksFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^QQ[0-9a-fA-F]{32}$')]),
			sip_trunk_domain: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			voice_region: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fetch the Inbound Processing Region assigned to a phone number.
		 * Get v2/PhoneNumbers/{PhoneNumber}
		 * @param {string} PhoneNumber The phone number in E.164 format
		 * @return {Routesv2phone_number} OK
		 */
		FetchPhoneNumber(PhoneNumber: string): Observable<Routesv2phone_number> {
			return this.http.get<Routesv2phone_number>(this.baseUri + 'v2/PhoneNumbers/' + (PhoneNumber == null ? '' : encodeURIComponent(PhoneNumber)), {});
		}

		/**
		 * Get v2/SipDomains/{SipDomain}
		 * @return {Routesv2sip_domain} OK
		 */
		FetchSipDomain(SipDomain: string): Observable<Routesv2sip_domain> {
			return this.http.get<Routesv2sip_domain>(this.baseUri + 'v2/SipDomains/' + (SipDomain == null ? '' : encodeURIComponent(SipDomain)), {});
		}

		/**
		 * Fetch the Inbound Processing Region assigned to a SIP Trunk.
		 * Get v2/Trunks/{SipTrunkDomain}
		 * @param {string} SipTrunkDomain The absolute URL of the SIP Trunk
		 * @return {Routesv2trunks} OK
		 */
		FetchTrunks(SipTrunkDomain: string): Observable<Routesv2trunks> {
			return this.http.get<Routesv2trunks>(this.baseUri + 'v2/Trunks/' + (SipTrunkDomain == null ? '' : encodeURIComponent(SipTrunkDomain)), {});
		}
	}

}

