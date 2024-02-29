import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Error {

		/** Required */
		error: string;
	}
	export interface ErrorFormProperties {

		/** Required */
		error: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Forecast {

		/**
		 * Required
		 * Type: double
		 */
		uv: number;

		/** Required */
		uv_time: string;
	}
	export interface ForecastFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		uv: FormControl<number | null | undefined>,

		/** Required */
		uv_time: FormControl<string | null | undefined>,
	}
	export function CreateForecastFormGroup() {
		return new FormGroup<ForecastFormProperties>({
			uv: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uv_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProtectionResult {

		/**
		 * Required
		 * Type: double
		 */
		ozone: number;

		/** Required */
		ozone_time: string;

		/**
		 * Required
		 * Type: double
		 */
		uv: number;

		/**
		 * Required
		 * Type: double
		 */
		uv_max: number;

		/** Required */
		uv_max_time: string;

		/** Required */
		uv_time: string;
	}
	export interface ProtectionResultFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		ozone: FormControl<number | null | undefined>,

		/** Required */
		ozone_time: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		uv: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		uv_max: FormControl<number | null | undefined>,

		/** Required */
		uv_max_time: FormControl<string | null | undefined>,

		/** Required */
		uv_time: FormControl<string | null | undefined>,
	}
	export function CreateProtectionResultFormGroup() {
		return new FormGroup<ProtectionResultFormProperties>({
			ozone: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ozone_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uv: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uv_max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uv_max_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uv_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UvIndexResult {

		/** Required */
		from_time: string;

		/**
		 * Required
		 * Type: double
		 */
		from_uv: number;

		/** Required */
		to_time: string;

		/**
		 * Required
		 * Type: double
		 */
		to_uv: number;
	}
	export interface UvIndexResultFormProperties {

		/** Required */
		from_time: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		from_uv: FormControl<number | null | undefined>,

		/** Required */
		to_time: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		to_uv: FormControl<number | null | undefined>,
	}
	export function CreateUvIndexResultFormGroup() {
		return new FormGroup<UvIndexResultFormProperties>({
			from_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from_uv: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			to_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to_uv: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.
		 * Get forecast
		 * @param {number} lat latitude, from -90.00 to 90.00
		 *     Type: double
		 * @param {number} lng longitude, from -180.00 to 180.00
		 *     Type: double
		 * @param {number} alt Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.
		 *     Type: double
		 * @param {number} ozone Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.
		 *     Type: double
		 * @param {Date} dt UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time.
		 */
		ForecastGetByLatAndLngAndAltAndOzoneAndDt(lat: number, lng: number, alt: number | null | undefined, ozone: number | null | undefined, dt: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Array<Forecast>>> {
			return this.http.get<Array<Array<Forecast>>>(this.baseUri + 'forecast?lat=' + lat + '&lng=' + lng + '&alt=' + alt + '&ozone=' + ozone + '&dt=' + dt?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.
		 * Get protection
		 * @param {number} lat latitude, from -90.00 to 90.00
		 *     Type: double
		 * @param {number} lng longitude, from -180.00 to 180.00
		 *     Type: double
		 * @param {number} from UV Index from value for protection datetime lookup. From 0 to 40.
		 *     Type: double
		 * @param {number} to UV Index to value for protection datetime lookup. From 0 to 40.
		 *     Type: double
		 * @param {number} alt Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.
		 *     Type: double
		 * @param {number} ozone Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.
		 *     Type: double
		 */
		ProtectionGetByLatAndLngAndFromAndToAndAltAndOzone(lat: number, lng: number, from: number, to: number, alt: number | null | undefined, ozone: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ProtectionResult> {
			return this.http.get<ProtectionResult>(this.baseUri + 'protection?lat=' + lat + '&lng=' + lng + '&from=' + from + '&to=' + to + '&alt=' + alt + '&ozone=' + ozone, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.
		 * Get uv
		 * @param {number} lat latitude, from -90.00 to 90.00
		 *     Type: double
		 * @param {number} lng longitude, from -180.00 to 180.00
		 *     Type: double
		 * @param {number} alt Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.
		 *     Type: double
		 * @param {number} ozone Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.
		 *     Type: double
		 * @param {Date} dt UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time.
		 */
		UvGetByLatAndLngAndAltAndOzoneAndDt(lat: number, lng: number, alt: number | null | undefined, ozone: number | null | undefined, dt: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<UvIndexResult> {
			return this.http.get<UvIndexResult>(this.baseUri + 'uv?lat=' + lat + '&lng=' + lng + '&alt=' + alt + '&ozone=' + ozone + '&dt=' + dt?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

