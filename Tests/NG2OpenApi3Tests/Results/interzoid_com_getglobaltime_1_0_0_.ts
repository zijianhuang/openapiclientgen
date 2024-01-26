import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the current time for a global locale
		 * Gets the current time for a global locale (city, state, region, or country such as Chicago, London, Paris, Seoul, Spain, Buenos Aires, Hawaii, Moscow, Tokyo, Hanoi, etc.)
		 * Get getglobaltime
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} locale Geographic locale to get the current time for
		 * @return {GetglobaltimeReturn} Current global time in many forms and related information
		 */
		Getglobaltime(license: string, locale: string): Observable<GetglobaltimeReturn> {
			return this.http.get<GetglobaltimeReturn>(this.baseUri + 'getglobaltime?license=' + (license == null ? '' : encodeURIComponent(license)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), {});
		}
	}

	export interface GetglobaltimeReturn {
		ClockTime?: string | null;
		Code?: string | null;
		Credits?: string | null;
		CurrentDate?: string | null;
		CurrentTime?: string | null;
		Day?: string | null;
		Hour?: string | null;
		Locale?: string | null;
		Minute?: string | null;
		Month?: string | null;
		MonthNumber?: string | null;
		Second?: string | null;
		TimeStamp?: string | null;
		Weekday?: string | null;
		Year?: string | null;
		Zone?: string | null;
	}
	export interface GetglobaltimeReturnFormProperties {
		ClockTime: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		CurrentDate: FormControl<string | null | undefined>,
		CurrentTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		Hour: FormControl<string | null | undefined>,
		Locale: FormControl<string | null | undefined>,
		Minute: FormControl<string | null | undefined>,
		Month: FormControl<string | null | undefined>,
		MonthNumber: FormControl<string | null | undefined>,
		Second: FormControl<string | null | undefined>,
		TimeStamp: FormControl<string | null | undefined>,
		Weekday: FormControl<string | null | undefined>,
		Year: FormControl<string | null | undefined>,
		Zone: FormControl<string | null | undefined>,
	}
	export function CreateGetglobaltimeReturnFormGroup() {
		return new FormGroup<GetglobaltimeReturnFormProperties>({
			ClockTime: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			CurrentDate: new FormControl<string | null | undefined>(undefined),
			CurrentTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			Hour: new FormControl<string | null | undefined>(undefined),
			Locale: new FormControl<string | null | undefined>(undefined),
			Minute: new FormControl<string | null | undefined>(undefined),
			Month: new FormControl<string | null | undefined>(undefined),
			MonthNumber: new FormControl<string | null | undefined>(undefined),
			Second: new FormControl<string | null | undefined>(undefined),
			TimeStamp: new FormControl<string | null | undefined>(undefined),
			Weekday: new FormControl<string | null | undefined>(undefined),
			Year: new FormControl<string | null | undefined>(undefined),
			Zone: new FormControl<string | null | undefined>(undefined),
		});

	}

}

