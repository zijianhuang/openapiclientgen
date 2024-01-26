import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DateTimeJsonResponse {

		/**
		 * the abbreviated name of the timezone
		 * Required
		 */
		abbreviation: string;

		/**
		 * the IP of the client making the request
		 * Required
		 */
		client_ip: string;

		/**
		 * an ISO8601-valid string representing the current, local date/time
		 * Required
		 */
		datetime: string;

		/**
		 * current day number of the week, where sunday is 0
		 * Required
		 */
		day_of_week: number;

		/**
		 * ordinal date of the current year
		 * Required
		 */
		day_of_year: number;

		/**
		 * flag indicating whether the local time is in daylight savings
		 * Required
		 */
		dst: boolean;

		/** an ISO8601-valid string representing the datetime when daylight savings started for this timezone */
		dst_from?: string | null;

		/**
		 * the difference in seconds between the current local time and daylight saving time for the location
		 * Required
		 */
		dst_offset: number;

		/** an ISO8601-valid string representing the datetime when daylight savings will end for this timezone */
		dst_until?: string | null;

		/** the difference in seconds between the current local time and the time in UTC, excluding any daylight saving difference (see dst_offset) */
		raw_offset?: number | null;

		/**
		 * timezone in `Area/Location` or `Area/Location/Region` format
		 * Required
		 */
		timezone: string;

		/**
		 * number of seconds since the Epoch
		 * Required
		 */
		unixtime: number;

		/**
		 * an ISO8601-valid string representing the current date/time in UTC
		 * Required
		 */
		utc_datetime: string;

		/**
		 * an ISO8601-valid string representing the offset from UTC
		 * Required
		 */
		utc_offset: string;

		/**
		 * the current week number
		 * Required
		 */
		week_number: number;
	}
	export interface DateTimeJsonResponseFormProperties {

		/**
		 * the abbreviated name of the timezone
		 * Required
		 */
		abbreviation: FormControl<string | null | undefined>,

		/**
		 * the IP of the client making the request
		 * Required
		 */
		client_ip: FormControl<string | null | undefined>,

		/**
		 * an ISO8601-valid string representing the current, local date/time
		 * Required
		 */
		datetime: FormControl<string | null | undefined>,

		/**
		 * current day number of the week, where sunday is 0
		 * Required
		 */
		day_of_week: FormControl<number | null | undefined>,

		/**
		 * ordinal date of the current year
		 * Required
		 */
		day_of_year: FormControl<number | null | undefined>,

		/**
		 * flag indicating whether the local time is in daylight savings
		 * Required
		 */
		dst: FormControl<boolean | null | undefined>,

		/** an ISO8601-valid string representing the datetime when daylight savings started for this timezone */
		dst_from: FormControl<string | null | undefined>,

		/**
		 * the difference in seconds between the current local time and daylight saving time for the location
		 * Required
		 */
		dst_offset: FormControl<number | null | undefined>,

		/** an ISO8601-valid string representing the datetime when daylight savings will end for this timezone */
		dst_until: FormControl<string | null | undefined>,

		/** the difference in seconds between the current local time and the time in UTC, excluding any daylight saving difference (see dst_offset) */
		raw_offset: FormControl<number | null | undefined>,

		/**
		 * timezone in `Area/Location` or `Area/Location/Region` format
		 * Required
		 */
		timezone: FormControl<string | null | undefined>,

		/**
		 * number of seconds since the Epoch
		 * Required
		 */
		unixtime: FormControl<number | null | undefined>,

		/**
		 * an ISO8601-valid string representing the current date/time in UTC
		 * Required
		 */
		utc_datetime: FormControl<string | null | undefined>,

		/**
		 * an ISO8601-valid string representing the offset from UTC
		 * Required
		 */
		utc_offset: FormControl<string | null | undefined>,

		/**
		 * the current week number
		 * Required
		 */
		week_number: FormControl<number | null | undefined>,
	}
	export function CreateDateTimeJsonResponseFormGroup() {
		return new FormGroup<DateTimeJsonResponseFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			client_ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datetime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			day_of_week: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			day_of_year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dst: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			dst_from: new FormControl<string | null | undefined>(undefined),
			dst_offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dst_until: new FormControl<string | null | undefined>(undefined),
			raw_offset: new FormControl<number | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unixtime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			utc_datetime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			utc_offset: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			week_number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorJsonResponse {

		/**
		 * details about the error encountered
		 * Required
		 */
		error: string;
	}
	export interface ErrorJsonResponseFormProperties {

		/**
		 * details about the error encountered
		 * Required
		 */
		error: FormControl<string | null | undefined>,
	}
	export function CreateErrorJsonResponseFormGroup() {
		return new FormGroup<ErrorJsonResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
		 * Get ip
		 * @return {DateTimeJsonResponse} the current time for the timezone requested in JSON format
		 */
		IpGet(headersHandler?: () => HttpHeaders): Observable<DateTimeJsonResponse> {
			return this.http.get<DateTimeJsonResponse>(this.baseUri + 'ip', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
		 * Get ip.txt
		 * @return {string} the current time for the timezone requested in plain text
		 */
		Ip_txtGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'ip.txt', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
		 * Get ip/{ipv4}
		 * @return {DateTimeJsonResponse} the current time for the timezone requested in JSON format
		 */
		Ip_ipv4Get(ipv4: string, headersHandler?: () => HttpHeaders): Observable<DateTimeJsonResponse> {
			return this.http.get<DateTimeJsonResponse>(this.baseUri + 'ip/' + (ipv4 == null ? '' : encodeURIComponent(ipv4)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
		 * Get ip/{ipv4}.txt
		 * @return {string} the current time for the timezone requested in plain text
		 */
		Ip_ipv4_txtGet(ipv4: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'ip/' + (ipv4 == null ? '' : encodeURIComponent(ipv4)) + '.txt', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * a listing of all timezones.
		 * Get timezone
		 * @return {void} 
		 */
		TimezoneGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'timezone', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * a listing of all timezones.
		 * Get timezone.txt
		 * @return {void} 
		 */
		Timezone_txtGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'timezone.txt', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * a listing of all timezones available for that area.
		 * Get timezone/{area}
		 * @return {Array<string>} the list of available timezones in JSON format
		 */
		Timezone_areaGet(area: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'timezone/' + (area == null ? '' : encodeURIComponent(area)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * a listing of all timezones available for that area.
		 * Get timezone/{area}.txt
		 * @return {string} the list of available timezones in plain text
		 */
		Timezone_area_txtGet(area: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'timezone/' + (area == null ? '' : encodeURIComponent(area)) + '.txt', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * request the current time for a timezone.
		 * Get timezone/{area}/{location}
		 * @return {DateTimeJsonResponse} the current time for the timezone requested in JSON format
		 */
		Timezone_area_locationGet(area: string, location: string, headersHandler?: () => HttpHeaders): Observable<DateTimeJsonResponse> {
			return this.http.get<DateTimeJsonResponse>(this.baseUri + 'timezone/' + (area == null ? '' : encodeURIComponent(area)) + '/' + (location == null ? '' : encodeURIComponent(location)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * request the current time for a timezone.
		 * Get timezone/{area}/{location}.txt
		 * @return {string} the current time for the timezone requested in plain text
		 */
		Timezone_area_location_txtGet(area: string, location: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'timezone/' + (area == null ? '' : encodeURIComponent(area)) + '/' + (location == null ? '' : encodeURIComponent(location)) + '.txt', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * request the current time for a timezone.
		 * Get timezone/{area}/{location}/{region}
		 * @return {DateTimeJsonResponse} the current time for the timezone requested in JSON format
		 */
		Timezone_area_location_regionGet(area: string, location: string, region: string, headersHandler?: () => HttpHeaders): Observable<DateTimeJsonResponse> {
			return this.http.get<DateTimeJsonResponse>(this.baseUri + 'timezone/' + (area == null ? '' : encodeURIComponent(area)) + '/' + (location == null ? '' : encodeURIComponent(location)) + '/' + (region == null ? '' : encodeURIComponent(region)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * request the current time for a timezone.
		 * Get timezone/{area}/{location}/{region}.txt
		 * @return {string} the current time for the timezone requested in plain text
		 */
		Timezone_area_location_region_txtGet(area: string, location: string, region: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'timezone/' + (area == null ? '' : encodeURIComponent(area)) + '/' + (location == null ? '' : encodeURIComponent(location)) + '/' + (region == null ? '' : encodeURIComponent(region)) + '.txt', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}
	}

}

