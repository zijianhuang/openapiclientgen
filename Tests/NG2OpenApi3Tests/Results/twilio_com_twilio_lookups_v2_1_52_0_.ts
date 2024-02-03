import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Lookupsv2phone_number {

		/** An object that contains information on the unconditional call forwarding status of mobile phone number. */
		call_forwarding?: any;

		/** An object that contains caller name information based on [CNAM](https://support.twilio.com/hc/en-us/articles/360051670533-Getting-Started-with-CNAM-Caller-ID). */
		caller_name?: any;

		/** International dialing prefix of the phone number defined in the E.164 standard. */
		calling_country_code?: string | null;

		/** The phone number's [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		country_code?: string | null;

		/** An object that contains identity match information. The result of comparing user-provided information including name, address, date of birth, national ID, against authoritative phone-based data sources */
		identity_match?: any;

		/** An object that contains line type information including the carrier name, mobile country code, and mobile network code. */
		line_type_intelligence?: any;

		/** An object that contains live activity information for a mobile phone number. */
		live_activity?: any;

		/** The phone number in [national format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers). */
		national_format?: string | null;

		/** The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		phone_number?: string | null;

		/** An object that contains information of a mobile phone number quality score. Quality score will return a risk score about the phone number. */
		phone_number_quality_score?: any;

		/** An object that contains reassigned number information. Reassigned Numbers will return a phone number's reassignment status given a phone number and date */
		reassigned_number?: any;

		/** An object that contains information on the last date the subscriber identity module (SIM) was changed for a mobile phone number. */
		sim_swap?: any;

		/** An object that contains information on if a phone number has been currently or previously blocked by Verify Fraud Guard for receiving malicious SMS pumping traffic as well as other signals associated with risky carriers and low conversion rates. */
		sms_pumping_risk?: any;

		/** The absolute URL of the resource. */
		url?: string | null;

		/** Boolean which indicates if the phone number is in a valid range that can be freely assigned by a carrier to a user. */
		valid?: boolean | null;

		/** Contains reasons why a phone number is invalid. Possible values: TOO_SHORT, TOO_LONG, INVALID_BUT_POSSIBLE, INVALID_COUNTRY_CODE, INVALID_LENGTH, NOT_A_NUMBER. */
		validation_errors?: Array<Phone_number_enum_validation_error>;
	}
	export interface Lookupsv2phone_numberFormProperties {

		/** An object that contains information on the unconditional call forwarding status of mobile phone number. */
		call_forwarding: FormControl<any | null | undefined>,

		/** An object that contains caller name information based on [CNAM](https://support.twilio.com/hc/en-us/articles/360051670533-Getting-Started-with-CNAM-Caller-ID). */
		caller_name: FormControl<any | null | undefined>,

		/** International dialing prefix of the phone number defined in the E.164 standard. */
		calling_country_code: FormControl<string | null | undefined>,

		/** The phone number's [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		country_code: FormControl<string | null | undefined>,

		/** An object that contains identity match information. The result of comparing user-provided information including name, address, date of birth, national ID, against authoritative phone-based data sources */
		identity_match: FormControl<any | null | undefined>,

		/** An object that contains line type information including the carrier name, mobile country code, and mobile network code. */
		line_type_intelligence: FormControl<any | null | undefined>,

		/** An object that contains live activity information for a mobile phone number. */
		live_activity: FormControl<any | null | undefined>,

		/** The phone number in [national format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers). */
		national_format: FormControl<string | null | undefined>,

		/** The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		phone_number: FormControl<string | null | undefined>,

		/** An object that contains information of a mobile phone number quality score. Quality score will return a risk score about the phone number. */
		phone_number_quality_score: FormControl<any | null | undefined>,

		/** An object that contains reassigned number information. Reassigned Numbers will return a phone number's reassignment status given a phone number and date */
		reassigned_number: FormControl<any | null | undefined>,

		/** An object that contains information on the last date the subscriber identity module (SIM) was changed for a mobile phone number. */
		sim_swap: FormControl<any | null | undefined>,

		/** An object that contains information on if a phone number has been currently or previously blocked by Verify Fraud Guard for receiving malicious SMS pumping traffic as well as other signals associated with risky carriers and low conversion rates. */
		sms_pumping_risk: FormControl<any | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,

		/** Boolean which indicates if the phone number is in a valid range that can be freely assigned by a carrier to a user. */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateLookupsv2phone_numberFormGroup() {
		return new FormGroup<Lookupsv2phone_numberFormProperties>({
			call_forwarding: new FormControl<any | null | undefined>(undefined),
			caller_name: new FormControl<any | null | undefined>(undefined),
			calling_country_code: new FormControl<string | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			identity_match: new FormControl<any | null | undefined>(undefined),
			line_type_intelligence: new FormControl<any | null | undefined>(undefined),
			live_activity: new FormControl<any | null | undefined>(undefined),
			national_format: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			phone_number_quality_score: new FormControl<any | null | undefined>(undefined),
			reassigned_number: new FormControl<any | null | undefined>(undefined),
			sim_swap: new FormControl<any | null | undefined>(undefined),
			sms_pumping_risk: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Phone_number_enum_validation_error { TOO_SHORT = 'TOO_SHORT', TOO_LONG = 'TOO_LONG', INVALID_BUT_POSSIBLE = 'INVALID_BUT_POSSIBLE', INVALID_COUNTRY_CODE = 'INVALID_COUNTRY_CODE', INVALID_LENGTH = 'INVALID_LENGTH', NOT_A_NUMBER = 'NOT_A_NUMBER' }

	export enum Phone_number_enum_type { landline = 'landline', mobile = 'mobile', voip = 'voip' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v2/PhoneNumbers/{PhoneNumber}
		 * @param {string} PhoneNumber The phone number to lookup in E.164 or national format. Default country code is +1 (North America).
		 * @param {string} Fields A comma-separated list of fields to return. Possible values are caller_name, sim_swap, call_forwarding, live_activity, line_type_intelligence, identity_match, reassigned_number.
		 * @param {string} CountryCode The [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) used if the phone number provided is in national format.
		 * @param {string} FirstName User’s first name. This query parameter is only used (optionally) for identity_match package requests.
		 * @param {string} LastName User’s last name. This query parameter is only used (optionally) for identity_match package requests.
		 * @param {string} AddressLine1 User’s first address line. This query parameter is only used (optionally) for identity_match package requests.
		 * @param {string} AddressLine2 User’s second address line. This query parameter is only used (optionally) for identity_match package requests.
		 * @param {string} City User’s city. This query parameter is only used (optionally) for identity_match package requests.
		 * @param {string} State User’s country subdivision, such as state, province, or locality. This query parameter is only used (optionally) for identity_match package requests.
		 * @param {string} PostalCode User’s postal zip code. This query parameter is only used (optionally) for identity_match package requests.
		 * @param {string} AddressCountryCode User’s country, up to two characters. This query parameter is only used (optionally) for identity_match package requests.
		 * @param {string} NationalId User’s national ID, such as SSN or Passport ID. This query parameter is only used (optionally) for identity_match package requests.
		 * @param {string} DateOfBirth User’s date of birth, in YYYYMMDD format. This query parameter is only used (optionally) for identity_match package requests.
		 * @param {string} LastVerifiedDate The date you obtained consent to call or text the end-user of the phone number or a date on which you are reasonably certain that the end-user could still be reached at that number. This query parameter is only used (optionally) for reassigned_number package requests.
		 * @return {Lookupsv2phone_number} OK
		 */
		FetchPhoneNumber(PhoneNumber: string, Fields: string | null | undefined, CountryCode: string | null | undefined, FirstName: string | null | undefined, LastName: string | null | undefined, AddressLine1: string | null | undefined, AddressLine2: string | null | undefined, City: string | null | undefined, State: string | null | undefined, PostalCode: string | null | undefined, AddressCountryCode: string | null | undefined, NationalId: string | null | undefined, DateOfBirth: string | null | undefined, LastVerifiedDate: string | null | undefined): Observable<Lookupsv2phone_number> {
			return this.http.get<Lookupsv2phone_number>(this.baseUri + 'v2/PhoneNumbers/' + (PhoneNumber == null ? '' : encodeURIComponent(PhoneNumber)) + '&Fields=' + (Fields == null ? '' : encodeURIComponent(Fields)) + '&CountryCode=' + (CountryCode == null ? '' : encodeURIComponent(CountryCode)) + '&FirstName=' + (FirstName == null ? '' : encodeURIComponent(FirstName)) + '&LastName=' + (LastName == null ? '' : encodeURIComponent(LastName)) + '&AddressLine1=' + (AddressLine1 == null ? '' : encodeURIComponent(AddressLine1)) + '&AddressLine2=' + (AddressLine2 == null ? '' : encodeURIComponent(AddressLine2)) + '&City=' + (City == null ? '' : encodeURIComponent(City)) + '&State=' + (State == null ? '' : encodeURIComponent(State)) + '&PostalCode=' + (PostalCode == null ? '' : encodeURIComponent(PostalCode)) + '&AddressCountryCode=' + (AddressCountryCode == null ? '' : encodeURIComponent(AddressCountryCode)) + '&NationalId=' + (NationalId == null ? '' : encodeURIComponent(NationalId)) + '&DateOfBirth=' + (DateOfBirth == null ? '' : encodeURIComponent(DateOfBirth)) + '&LastVerifiedDate=' + (LastVerifiedDate == null ? '' : encodeURIComponent(LastVerifiedDate)), {});
		}
	}

}

