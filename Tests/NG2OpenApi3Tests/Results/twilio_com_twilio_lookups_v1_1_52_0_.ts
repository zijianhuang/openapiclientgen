import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Lookupsv1phone_number {

		/** A JSON string with the results of the Add-ons you specified in the `add_ons` parameters. For the format of the object, see [Using Add-ons](https://www.twilio.com/docs/add-ons). */
		add_ons?: any;

		/** The name of the phone number's owner. If `null`, that information was not available. */
		caller_name?: any;

		/** The telecom company that provides the phone number. */
		carrier?: any;

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for the phone number. */
		country_code?: string | null;

		/** The phone number, in national format. */
		national_format?: string | null;

		/** The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		phone_number?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Lookupsv1phone_numberFormProperties {

		/** A JSON string with the results of the Add-ons you specified in the `add_ons` parameters. For the format of the object, see [Using Add-ons](https://www.twilio.com/docs/add-ons). */
		add_ons: FormControl<any | null | undefined>,

		/** The name of the phone number's owner. If `null`, that information was not available. */
		caller_name: FormControl<any | null | undefined>,

		/** The telecom company that provides the phone number. */
		carrier: FormControl<any | null | undefined>,

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for the phone number. */
		country_code: FormControl<string | null | undefined>,

		/** The phone number, in national format. */
		national_format: FormControl<string | null | undefined>,

		/** The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		phone_number: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLookupsv1phone_numberFormGroup() {
		return new FormGroup<Lookupsv1phone_numberFormProperties>({
			add_ons: new FormControl<any | null | undefined>(undefined),
			caller_name: new FormControl<any | null | undefined>(undefined),
			carrier: new FormControl<any | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			national_format: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Phone_number_enum_type { landline = 0, mobile = 1, voip = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v1/PhoneNumbers/{PhoneNumber}
		 * @param {string} PhoneNumber The phone number to lookup in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
		 * @param {string} CountryCode The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the phone number to fetch. This is used to specify the country when the phone number is provided in a national format.
		 * @param {Array<string>} Type The type of information to return. Can be: `carrier` or `caller-name`. The default is null.  Carrier information costs $0.005 per phone number looked up.  Caller Name information is currently available only in the US and costs $0.01 per phone number looked up.  To retrieve both types on information, specify this parameter twice; once with `carrier` and once with `caller-name` as the value.
		 * @param {Array<string>} AddOns The `unique_name` of an Add-on you would like to invoke. Can be the `unique_name` of an Add-on that is installed on your account. You can specify multiple instances of this parameter to invoke multiple Add-ons. For more information about  Add-ons, see the [Add-ons documentation](https://www.twilio.com/docs/add-ons).
		 * @param {string} AddOnsData Data specific to the add-on you would like to invoke. The content and format of this value depends on the add-on.
		 * @return {Lookupsv1phone_number} OK
		 */
		FetchPhoneNumber(PhoneNumber: string, CountryCode: string | null | undefined, Type: Array<string> | null | undefined, AddOns: Array<string> | null | undefined, AddOnsData: string | null | undefined): Observable<Lookupsv1phone_number> {
			return this.http.get<Lookupsv1phone_number>(this.baseUri + 'v1/PhoneNumbers/' + (PhoneNumber == null ? '' : encodeURIComponent(PhoneNumber)) + '&CountryCode=' + (CountryCode == null ? '' : encodeURIComponent(CountryCode)) + '&' + Type?.map(z => `Type=${encodeURIComponent(z)}`).join('&') + '&' + AddOns?.map(z => `AddOns=${encodeURIComponent(z)}`).join('&') + '&AddOnsData=' + (AddOnsData == null ? '' : encodeURIComponent(AddOnsData)), {});
		}
	}

}

