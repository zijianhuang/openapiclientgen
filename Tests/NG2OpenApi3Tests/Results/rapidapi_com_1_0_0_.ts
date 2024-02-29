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
		 * Get Advanced Moon Phase Data
		 * Get Advanced Moon Phase Data
		 * Get advanced
		 * @param {string} filters Filter data in the Advanced Moon API by specifying the desired fields using the `filters` parameter in the request. Include a comma-separated list of keys to retrieve customized data, allowing you to fetch specific moon phase information and related details.
		 * @return {GetAdvancedMoonPhaseDataReturn} Get Advanced Moon Phase Data
		 */
		GetAdvancedMoonPhaseData(filters: string | null | undefined): Observable<GetAdvancedMoonPhaseDataReturn> {
			return this.http.get<GetAdvancedMoonPhaseDataReturn>(this.baseUri + 'advanced?filters=' + (filters == null ? '' : encodeURIComponent(filters)), {});
		}

		/**
		 * Get Basic Moon Phase Data
		 * Get Basic Moon Phase Data
		 * Get basic
		 * @return {GetBasicMoonPhaseDataReturn} Get Basic Moon Phase Data
		 */
		GetBasicMoonPhaseData(): Observable<GetBasicMoonPhaseDataReturn> {
			return this.http.get<GetBasicMoonPhaseDataReturn>(this.baseUri + 'basic', {});
		}

		/**
		 * Get Lunar Calendar
		 * Get Lunar Calendar
		 * Get calendar
		 * @param {string} filters Filter data in the Advanced Moon API by specifying the desired fields using the `filters` parameter in the request. Include a comma-separated list of keys to retrieve customized data, allowing you to fetch specific moon phase information and related details.
		 * @return {void} Get Lunar Calendar
		 */
		GetLunarCalendar(filters: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendar?filters=' + (filters == null ? '' : encodeURIComponent(filters)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Emoji of Moon Phase
		 * Get Emoji of Moon Phase
		 * Get emoji
		 * @return {void} Get Emoji of Moon Phase
		 */
		GetEmojiOfMoonPhase(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'emoji', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Plain Text Moon Phase Data
		 * Get Plain Text Moon Phase Data
		 * Get plain-text
		 * @return {void} Get Plain Text Moon Phase Data
		 */
		GetPlainTextMoonPhaseData(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'plain-text', { observe: 'response', responseType: 'text' });
		}
	}

	export interface GetAdvancedMoonPhaseDataReturn {
		datestamp?: string | null;
		moon?: GetAdvancedMoonPhaseDataReturnMoon;
		moon_phases?: GetAdvancedMoonPhaseDataReturnMoon_phases;
		sun?: GetAdvancedMoonPhaseDataReturnSun;

		/** Type: double */
		timestamp?: number | null;
	}
	export interface GetAdvancedMoonPhaseDataReturnFormProperties {
		datestamp: FormControl<string | null | undefined>,

		/** Type: double */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGetAdvancedMoonPhaseDataReturnFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnFormProperties>({
			datestamp: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon {

		/** Type: double */
		age_days?: number | null;
		emoji?: string | null;
		illumination?: string | null;
		lunar_cycle?: string | null;

		/** Type: double */
		moon_altitude?: number | null;

		/** Type: double */
		moon_azimuth?: number | null;

		/** Type: double */
		moon_distance?: number | null;

		/** Type: double */
		moon_parallactic_angle?: number | null;
		moonrise?: string | null;

		/** Type: double */
		moonrise_timestamp?: number | null;
		moonset?: string | null;

		/** Type: double */
		moonset_timestamp?: number | null;
		phase?: string | null;
		phase_name?: string | null;
		stage?: string | null;
		zodiac_sign?: string | null;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoonFormProperties {

		/** Type: double */
		age_days: FormControl<number | null | undefined>,
		emoji: FormControl<string | null | undefined>,
		illumination: FormControl<string | null | undefined>,
		lunar_cycle: FormControl<string | null | undefined>,

		/** Type: double */
		moon_altitude: FormControl<number | null | undefined>,

		/** Type: double */
		moon_azimuth: FormControl<number | null | undefined>,

		/** Type: double */
		moon_distance: FormControl<number | null | undefined>,

		/** Type: double */
		moon_parallactic_angle: FormControl<number | null | undefined>,
		moonrise: FormControl<string | null | undefined>,

		/** Type: double */
		moonrise_timestamp: FormControl<number | null | undefined>,
		moonset: FormControl<string | null | undefined>,

		/** Type: double */
		moonset_timestamp: FormControl<number | null | undefined>,
		phase: FormControl<string | null | undefined>,
		phase_name: FormControl<string | null | undefined>,
		stage: FormControl<string | null | undefined>,
		zodiac_sign: FormControl<string | null | undefined>,
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoonFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoonFormProperties>({
			age_days: new FormControl<number | null | undefined>(undefined),
			emoji: new FormControl<string | null | undefined>(undefined),
			illumination: new FormControl<string | null | undefined>(undefined),
			lunar_cycle: new FormControl<string | null | undefined>(undefined),
			moon_altitude: new FormControl<number | null | undefined>(undefined),
			moon_azimuth: new FormControl<number | null | undefined>(undefined),
			moon_distance: new FormControl<number | null | undefined>(undefined),
			moon_parallactic_angle: new FormControl<number | null | undefined>(undefined),
			moonrise: new FormControl<string | null | undefined>(undefined),
			moonrise_timestamp: new FormControl<number | null | undefined>(undefined),
			moonset: new FormControl<string | null | undefined>(undefined),
			moonset_timestamp: new FormControl<number | null | undefined>(undefined),
			phase: new FormControl<string | null | undefined>(undefined),
			phase_name: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<string | null | undefined>(undefined),
			zodiac_sign: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon_phases {
		first_quarter?: GetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarter;
		full_moon?: GetAdvancedMoonPhaseDataReturnMoon_phasesFull_moon;
		last_quarter?: GetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarter;
		new_moon?: GetAdvancedMoonPhaseDataReturnMoon_phasesNew_moon;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesFormProperties {
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoon_phasesFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoon_phasesFormProperties>({
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarter {
		current?: GetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarterCurrent;
		next?: GetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarterNext;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarterFormProperties {
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarterFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarterFormProperties>({
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarterCurrent {
		datestamp?: string | null;

		/** Type: double */
		days_ago?: number | null;

		/** Type: double */
		timestamp?: number | null;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarterCurrentFormProperties {
		datestamp: FormControl<string | null | undefined>,

		/** Type: double */
		days_ago: FormControl<number | null | undefined>,

		/** Type: double */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarterCurrentFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarterCurrentFormProperties>({
			datestamp: new FormControl<string | null | undefined>(undefined),
			days_ago: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarterNext {
		datestamp?: string | null;

		/** Type: double */
		days_ahead?: number | null;

		/** Type: double */
		timestamp?: number | null;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarterNextFormProperties {
		datestamp: FormControl<string | null | undefined>,

		/** Type: double */
		days_ahead: FormControl<number | null | undefined>,

		/** Type: double */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarterNextFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoon_phasesFirst_quarterNextFormProperties>({
			datestamp: new FormControl<string | null | undefined>(undefined),
			days_ahead: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesFull_moon {
		current?: GetAdvancedMoonPhaseDataReturnMoon_phasesFull_moonCurrent;
		next?: GetAdvancedMoonPhaseDataReturnMoon_phasesFull_moonNext;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesFull_moonFormProperties {
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoon_phasesFull_moonFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoon_phasesFull_moonFormProperties>({
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesFull_moonCurrent {
		datestamp?: string | null;

		/** Type: double */
		days_ago?: number | null;

		/** Type: double */
		timestamp?: number | null;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesFull_moonCurrentFormProperties {
		datestamp: FormControl<string | null | undefined>,

		/** Type: double */
		days_ago: FormControl<number | null | undefined>,

		/** Type: double */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoon_phasesFull_moonCurrentFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoon_phasesFull_moonCurrentFormProperties>({
			datestamp: new FormControl<string | null | undefined>(undefined),
			days_ago: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesFull_moonNext {
		datestamp?: string | null;

		/** Type: double */
		days_ahead?: number | null;

		/** Type: double */
		timestamp?: number | null;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesFull_moonNextFormProperties {
		datestamp: FormControl<string | null | undefined>,

		/** Type: double */
		days_ahead: FormControl<number | null | undefined>,

		/** Type: double */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoon_phasesFull_moonNextFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoon_phasesFull_moonNextFormProperties>({
			datestamp: new FormControl<string | null | undefined>(undefined),
			days_ahead: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarter {
		current?: GetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarterCurrent;
		next?: GetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarterNext;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarterFormProperties {
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarterFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarterFormProperties>({
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarterCurrent {
		datestamp?: string | null;

		/** Type: double */
		days_ago?: number | null;

		/** Type: double */
		timestamp?: number | null;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarterCurrentFormProperties {
		datestamp: FormControl<string | null | undefined>,

		/** Type: double */
		days_ago: FormControl<number | null | undefined>,

		/** Type: double */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarterCurrentFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarterCurrentFormProperties>({
			datestamp: new FormControl<string | null | undefined>(undefined),
			days_ago: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarterNext {
		datestamp?: string | null;

		/** Type: double */
		days_ahead?: number | null;

		/** Type: double */
		timestamp?: number | null;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarterNextFormProperties {
		datestamp: FormControl<string | null | undefined>,

		/** Type: double */
		days_ahead: FormControl<number | null | undefined>,

		/** Type: double */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarterNextFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoon_phasesLast_quarterNextFormProperties>({
			datestamp: new FormControl<string | null | undefined>(undefined),
			days_ahead: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesNew_moon {
		current?: GetAdvancedMoonPhaseDataReturnMoon_phasesNew_moonCurrent;
		next?: GetAdvancedMoonPhaseDataReturnMoon_phasesNew_moonNext;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesNew_moonFormProperties {
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoon_phasesNew_moonFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoon_phasesNew_moonFormProperties>({
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesNew_moonCurrent {
		datestamp?: string | null;

		/** Type: double */
		days_ago?: number | null;

		/** Type: double */
		timestamp?: number | null;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesNew_moonCurrentFormProperties {
		datestamp: FormControl<string | null | undefined>,

		/** Type: double */
		days_ago: FormControl<number | null | undefined>,

		/** Type: double */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoon_phasesNew_moonCurrentFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoon_phasesNew_moonCurrentFormProperties>({
			datestamp: new FormControl<string | null | undefined>(undefined),
			days_ago: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesNew_moonNext {
		datestamp?: string | null;

		/** Type: double */
		days_ahead?: number | null;

		/** Type: double */
		timestamp?: number | null;
	}
	export interface GetAdvancedMoonPhaseDataReturnMoon_phasesNew_moonNextFormProperties {
		datestamp: FormControl<string | null | undefined>,

		/** Type: double */
		days_ahead: FormControl<number | null | undefined>,

		/** Type: double */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGetAdvancedMoonPhaseDataReturnMoon_phasesNew_moonNextFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnMoon_phasesNew_moonNextFormProperties>({
			datestamp: new FormControl<string | null | undefined>(undefined),
			days_ahead: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAdvancedMoonPhaseDataReturnSun {
		day_length?: string | null;
		solar_noon?: string | null;

		/** Type: double */
		sun_altitude?: number | null;

		/** Type: double */
		sun_azimuth?: number | null;

		/** Type: double */
		sun_distance?: number | null;

		/** Type: double */
		sunrise?: number | null;
		sunrise_timestamp?: string | null;

		/** Type: double */
		sunset?: number | null;
		sunset_timestamp?: string | null;
	}
	export interface GetAdvancedMoonPhaseDataReturnSunFormProperties {
		day_length: FormControl<string | null | undefined>,
		solar_noon: FormControl<string | null | undefined>,

		/** Type: double */
		sun_altitude: FormControl<number | null | undefined>,

		/** Type: double */
		sun_azimuth: FormControl<number | null | undefined>,

		/** Type: double */
		sun_distance: FormControl<number | null | undefined>,

		/** Type: double */
		sunrise: FormControl<number | null | undefined>,
		sunrise_timestamp: FormControl<string | null | undefined>,

		/** Type: double */
		sunset: FormControl<number | null | undefined>,
		sunset_timestamp: FormControl<string | null | undefined>,
	}
	export function CreateGetAdvancedMoonPhaseDataReturnSunFormGroup() {
		return new FormGroup<GetAdvancedMoonPhaseDataReturnSunFormProperties>({
			day_length: new FormControl<string | null | undefined>(undefined),
			solar_noon: new FormControl<string | null | undefined>(undefined),
			sun_altitude: new FormControl<number | null | undefined>(undefined),
			sun_azimuth: new FormControl<number | null | undefined>(undefined),
			sun_distance: new FormControl<number | null | undefined>(undefined),
			sunrise: new FormControl<number | null | undefined>(undefined),
			sunrise_timestamp: new FormControl<string | null | undefined>(undefined),
			sunset: new FormControl<number | null | undefined>(undefined),
			sunset_timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBasicMoonPhaseDataReturn {

		/** Type: double */
		days_until_next_full_moon?: number | null;

		/** Type: double */
		days_until_next_new_moon?: number | null;
		phase_name?: string | null;
		stage?: string | null;
	}
	export interface GetBasicMoonPhaseDataReturnFormProperties {

		/** Type: double */
		days_until_next_full_moon: FormControl<number | null | undefined>,

		/** Type: double */
		days_until_next_new_moon: FormControl<number | null | undefined>,
		phase_name: FormControl<string | null | undefined>,
		stage: FormControl<string | null | undefined>,
	}
	export function CreateGetBasicMoonPhaseDataReturnFormGroup() {
		return new FormGroup<GetBasicMoonPhaseDataReturnFormProperties>({
			days_until_next_full_moon: new FormControl<number | null | undefined>(undefined),
			days_until_next_new_moon: new FormControl<number | null | undefined>(undefined),
			phase_name: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<string | null | undefined>(undefined),
		});

	}

}

