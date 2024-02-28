import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Forecast {

		/** Every hour with forecast data is represented with an object in this array */
		ForecastHours?: Array<ForecastHours>;
		meta?: ForecastMeta;
	}
	export interface ForecastFormProperties {
	}
	export function CreateForecastFormGroup() {
		return new FormGroup<ForecastFormProperties>({
		});

	}

	export interface ForecastHours {
		ForecastHoursAirTemperature?: Array<ForecastHoursAirTemperature>;
		ForecastHoursSwellDirection?: Array<ForecastHoursSwellDirection>;
		ForecastHoursSwellHeight?: Array<ForecastHoursSwellHeight>;
		ForecastHoursSwellPeriod?: Array<ForecastHoursSwellPeriod>;

		/** Timestamp in utc for the hour represented */
		time?: string | null;
		ForecastHoursWaterTemperature?: Array<ForecastHoursWaterTemperature>;
		ForecastHoursWaveDirection?: Array<ForecastHoursWaveDirection>;
		ForecastHoursWaveHeight?: Array<ForecastHoursWaveHeight>;
		ForecastHoursWavePeriod?: Array<ForecastHoursWavePeriod>;
		ForecastHoursWindDirection?: Array<ForecastHoursWindDirection>;
		ForecastHoursWindSpeed?: Array<ForecastHoursWindSpeed>;
	}
	export interface ForecastHoursFormProperties {

		/** Timestamp in utc for the hour represented */
		time: FormControl<string | null | undefined>,
	}
	export function CreateForecastHoursFormGroup() {
		return new FormGroup<ForecastHoursFormProperties>({
			time: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForecastHoursAirTemperature {
		source?: string | null;
		value?: string | null;
	}
	export interface ForecastHoursAirTemperatureFormProperties {
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateForecastHoursAirTemperatureFormGroup() {
		return new FormGroup<ForecastHoursAirTemperatureFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForecastHoursSwellDirection {
		source?: string | null;
		value?: string | null;
	}
	export interface ForecastHoursSwellDirectionFormProperties {
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateForecastHoursSwellDirectionFormGroup() {
		return new FormGroup<ForecastHoursSwellDirectionFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForecastHoursSwellHeight {
		source?: string | null;
		value?: string | null;
	}
	export interface ForecastHoursSwellHeightFormProperties {
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateForecastHoursSwellHeightFormGroup() {
		return new FormGroup<ForecastHoursSwellHeightFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForecastHoursSwellPeriod {
		source?: string | null;
		value?: string | null;
	}
	export interface ForecastHoursSwellPeriodFormProperties {
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateForecastHoursSwellPeriodFormGroup() {
		return new FormGroup<ForecastHoursSwellPeriodFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForecastHoursWaterTemperature {
		source?: string | null;
		value?: string | null;
	}
	export interface ForecastHoursWaterTemperatureFormProperties {
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateForecastHoursWaterTemperatureFormGroup() {
		return new FormGroup<ForecastHoursWaterTemperatureFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForecastHoursWaveDirection {
		source?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface ForecastHoursWaveDirectionFormProperties {
		source: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateForecastHoursWaveDirectionFormGroup() {
		return new FormGroup<ForecastHoursWaveDirectionFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ForecastHoursWaveHeight {
		source?: string | null;
		value?: string | null;
	}
	export interface ForecastHoursWaveHeightFormProperties {
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateForecastHoursWaveHeightFormGroup() {
		return new FormGroup<ForecastHoursWaveHeightFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForecastHoursWavePeriod {
		source?: string | null;
		value?: string | null;
	}
	export interface ForecastHoursWavePeriodFormProperties {
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateForecastHoursWavePeriodFormGroup() {
		return new FormGroup<ForecastHoursWavePeriodFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForecastHoursWindDirection {
		source?: string | null;
		value?: string | null;
	}
	export interface ForecastHoursWindDirectionFormProperties {
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateForecastHoursWindDirectionFormGroup() {
		return new FormGroup<ForecastHoursWindDirectionFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForecastHoursWindSpeed {
		source?: string | null;
		value?: string | null;
	}
	export interface ForecastHoursWindSpeedFormProperties {
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateForecastHoursWindSpeedFormGroup() {
		return new FormGroup<ForecastHoursWindSpeedFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForecastMeta {

		/**
		 * The number of successful requests you can do on one day
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dailyQuota?: number | null;

		/**
		 * The latitude the response is showing forecast data for
		 * Type: double
		 */
		lat?: number | null;

		/**
		 * The longitude the response is showing forecast data for
		 * Type: double
		 */
		lng?: number | null;

		/**
		 * The number of successful requests made this day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestCount?: number | null;
	}
	export interface ForecastMetaFormProperties {

		/**
		 * The number of successful requests you can do on one day
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dailyQuota: FormControl<number | null | undefined>,

		/**
		 * The latitude the response is showing forecast data for
		 * Type: double
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * The longitude the response is showing forecast data for
		 * Type: double
		 */
		lng: FormControl<number | null | undefined>,

		/**
		 * The number of successful requests made this day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestCount: FormControl<number | null | undefined>,
	}
	export function CreateForecastMetaFormGroup() {
		return new FormGroup<ForecastMetaFormProperties>({
			dailyQuota: new FormControl<number | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
			requestCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get hourly forecasts by coordinates
		 * Get forecast info for the given coordinates. For every hour and property, you will get a list of weather sources and their values.
		 * Get forecast
		 * @param {number} lat The latitude for a location. Valid input is a number between -90 and 90.
		 * @param {number} lng The longitude for a location. Valid input is a number between -180 and 180.
		 * @return {Forecast} Successful request
		 */
		GetForecast(lat: number, lng: number): Observable<Forecast> {
			return this.http.get<Forecast>(this.baseUri + 'forecast?lat=' + lat + '&lng=' + lng, {});
		}
	}

}

