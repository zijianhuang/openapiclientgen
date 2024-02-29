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
		 * Calculate magnetic declination, inclination, total field intensity, and grid variation
		 * at specified conditions.
		 * Get magnetic_field
		 * @param {number} altitude Geodetic Altitude 0 km to 600 km.
		 *     Type: double
		 * @param {number} latitude Geodetic Latitude. -90 deg (S) to 90 deg (N).
		 *     Type: double
		 * @param {number} longitude Geodetic Longitude. -180 deg (W) to 180 deg (E).
		 *     Type: double
		 * @param {number} year Year as a decimal in the range 2015-2025 (2017.5 would be half way through 2017).
		 *     Type: double
		 * @return {App_api_wmm_endpoints_WMM_magnetic_fieldReturn} Successful magnetic field intensity calculation
		 */
		App_api_wmm_endpoints_WMM_magnetic_field(altitude: number, latitude: number, longitude: number, year: number): Observable<App_api_wmm_endpoints_WMM_magnetic_fieldReturn> {
			return this.http.get<App_api_wmm_endpoints_WMM_magnetic_fieldReturn>(this.baseUri + 'magnetic_field?altitude=' + altitude + '&latitude=' + latitude + '&longitude=' + longitude + '&year=' + year, {});
		}
	}

	export interface App_api_wmm_endpoints_WMM_magnetic_fieldReturn {

		/**
		 * The angle in the horizontal plane between magnetic north and true north. Declination is positive when magnetic north is east of true north.
		 */
		declination?: App_api_wmm_endpoints_WMM_magnetic_fieldReturnDeclination;

		/**
		 * Referenced to grid north, referenced to 0 deg meridian of a polar stereographic projection.  Only defined for latitudes greater than 55 degrees and less than -55 degrees (arctic and antarctic).
		 */
		grid_variation?: App_api_wmm_endpoints_WMM_magnetic_fieldReturnGrid_variation;

		/**
		 * Also known as 'dip', is the angle made between the horizontal plane and the magnetic field vector at some position. Positive inclination corresponds to a downward pointing.
		 */
		inclination?: App_api_wmm_endpoints_WMM_magnetic_fieldReturnInclination;

		/**
		 * Total magnetic field intensity in nano Teslas.
		 */
		total_intensity?: App_api_wmm_endpoints_WMM_magnetic_fieldReturnTotal_intensity;
	}
	export interface App_api_wmm_endpoints_WMM_magnetic_fieldReturnFormProperties {
	}
	export function CreateApp_api_wmm_endpoints_WMM_magnetic_fieldReturnFormGroup() {
		return new FormGroup<App_api_wmm_endpoints_WMM_magnetic_fieldReturnFormProperties>({
		});

	}

	export interface App_api_wmm_endpoints_WMM_magnetic_fieldReturnDeclination {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_wmm_endpoints_WMM_magnetic_fieldReturnDeclinationFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_wmm_endpoints_WMM_magnetic_fieldReturnDeclinationFormGroup() {
		return new FormGroup<App_api_wmm_endpoints_WMM_magnetic_fieldReturnDeclinationFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_wmm_endpoints_WMM_magnetic_fieldReturnGrid_variation {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_wmm_endpoints_WMM_magnetic_fieldReturnGrid_variationFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_wmm_endpoints_WMM_magnetic_fieldReturnGrid_variationFormGroup() {
		return new FormGroup<App_api_wmm_endpoints_WMM_magnetic_fieldReturnGrid_variationFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_wmm_endpoints_WMM_magnetic_fieldReturnInclination {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_wmm_endpoints_WMM_magnetic_fieldReturnInclinationFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_wmm_endpoints_WMM_magnetic_fieldReturnInclinationFormGroup() {
		return new FormGroup<App_api_wmm_endpoints_WMM_magnetic_fieldReturnInclinationFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_wmm_endpoints_WMM_magnetic_fieldReturnTotal_intensity {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_wmm_endpoints_WMM_magnetic_fieldReturnTotal_intensityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_wmm_endpoints_WMM_magnetic_fieldReturnTotal_intensityFormGroup() {
		return new FormGroup<App_api_wmm_endpoints_WMM_magnetic_fieldReturnTotal_intensityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

}

