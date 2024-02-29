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
		 * Compute atmospheric density and temperatures
		 * under given conditions.
		 * Get jb2008
		 * @param {number} year Year in YYYY format
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} month Month in MM format
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} day Day in DD format
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} altitude Altitude in (km)
		 *     Type: double
		 * @param {number} geodetic_latitude GeodeticLatitude (deg) -90 to 90 deg
		 *     Type: double
		 * @param {number} geodetic_longitude GeodeticLongitude (deg) 0 to 360 deg
		 *     Type: double
		 * @param {number} utc Coordinated Universal Time (hrs)
		 *     Type: double
		 * @return {App_api_endpoints_JB2008_sample_atmosphereReturn} Successful atmospheric density calculation
		 */
		App_api_endpoints_JB2008_sample_atmosphere(year: number, month: number, day: number, altitude: number, geodetic_latitude: number, geodetic_longitude: number, utc: number): Observable<App_api_endpoints_JB2008_sample_atmosphereReturn> {
			return this.http.get<App_api_endpoints_JB2008_sample_atmosphereReturn>(this.baseUri + 'jb2008?year=' + year + '&month=' + month + '&day=' + day + '&altitude=' + altitude + '&geodetic_latitude=' + geodetic_latitude + '&geodetic_longitude=' + geodetic_longitude + '&utc=' + utc, {});
		}

		/**
		 * Compute atmospheric composition, density, and temperatures
		 * at specified conditions.
		 * Get nrlmsise00
		 * @param {number} year Year in YYYY format
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} month Month in MM format
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} day Day in DD format
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} altitude Altitude in (km)
		 *     Type: double
		 * @param {number} geodetic_latitude GeodeticLatitude (deg) -90 to 90 deg
		 *     Type: double
		 * @param {number} geodetic_longitude GeodeticLongitude (deg) 0 to 360 deg
		 *     Type: double
		 * @param {number} utc Coordinated Universal Time (hrs)
		 *     Type: double
		 * @param {number} f107a (Optional) 81 day average of F10.7 flux (SFU) centered on the specified day. F107 and F107A values correspond to the 10.7 cm radio flux at the actual distance of Earth from Sun rather than radio flux at 1 AU. F107, F107A, AP effects can be neglected below 80 km. If unspecified, values provided by the US National Oceanic and  Atmospheric Administration are retrieved automatically.
		 *     Type: double
		 * @param {number} f107 (Optional) Daily F10.7 cm radio flux for previous day (SFU). F107 and F107A values correspond to the 10.7 cm radio flux at the actual distance of Earth from Sun rather than radio flux at 1 AU. F107, F107A, AP effects can be neglected below 80 km. If unspecified, values provided by the US National Oceanic and  Atmospheric Administration are retrieved automatically.
		 *     Type: double
		 * @param {number} ap (Optional) The Ap-index provides a daily average level for geomagnetic activity F107, F107A, AP effects can be neglected below 80 km. If unspecified, the average of values in the 24 hours preceding the date-time  are automatically calculated from data provided by GFZ German Research Centre  for Geosciences.
		 *     Type: double
		 * @return {App_api_endpoints_NRLMSISE00_sample_atmosphereReturn} Successful atmospheric density calculation
		 */
		App_api_endpoints_NRLMSISE00_sample_atmosphere(year: number, month: number, day: number, altitude: number, geodetic_latitude: number, geodetic_longitude: number, utc: number, f107a: number | null | undefined, f107: number | null | undefined, ap: number | null | undefined): Observable<App_api_endpoints_NRLMSISE00_sample_atmosphereReturn> {
			return this.http.get<App_api_endpoints_NRLMSISE00_sample_atmosphereReturn>(this.baseUri + 'nrlmsise00?year=' + year + '&month=' + month + '&day=' + day + '&altitude=' + altitude + '&geodetic_latitude=' + geodetic_latitude + '&geodetic_longitude=' + geodetic_longitude + '&utc=' + utc + '&f107a=' + f107a + '&f107=' + f107 + '&ap=' + ap, {});
		}

		/**
		 * Forecast winds, ion and molecular densities, and temperatures in the atmosphere
		 * at a given position and time on 42-48 hour forecast horizon (10 minute resolution). NOTE: latitudes outside the interval (-90,90) are clipped to the endpoints; longitudes outside (0,360) are wrapped.
		 * Get wam-ipe
		 * @param {number} latitude Latitude (deg) -90 to 90 deg
		 *     Type: double
		 * @param {number} longitude Longitude (deg) 0 to 360 deg or -180 to 180 deg
		 *     Type: double
		 * @param {number} altitude Altitude in (km)
		 *     Type: double
		 * @param {number} year Year in YYYY format
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} month Month in MM format
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} day Day in DD format
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} hour UTC Hour of the day in 24 hour format
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} minute Minute of the given hour
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {App_api_wfs_endpoints_WFS_get_valuesReturn} Successful wam-ipe calculation
		 */
		App_api_wfs_endpoints_WFS_get_values(latitude: number, longitude: number, altitude: number, year: number, month: number, day: number, hour: number, minute: number): Observable<App_api_wfs_endpoints_WFS_get_valuesReturn> {
			return this.http.get<App_api_wfs_endpoints_WFS_get_valuesReturn>(this.baseUri + 'wam-ipe?latitude=' + latitude + '&longitude=' + longitude + '&altitude=' + altitude + '&year=' + year + '&month=' + month + '&day=' + day + '&hour=' + hour + '&minute=' + minute, {});
		}
	}

	export interface App_api_endpoints_JB2008_sample_atmosphereReturn {
		at_alt_temp?: App_api_endpoints_JB2008_sample_atmosphereReturnAt_alt_temp;
		exospheric_temp?: App_api_endpoints_JB2008_sample_atmosphereReturnExospheric_temp;
		total_mass_density?: App_api_endpoints_JB2008_sample_atmosphereReturnTotal_mass_density;
	}
	export interface App_api_endpoints_JB2008_sample_atmosphereReturnFormProperties {
	}
	export function CreateApp_api_endpoints_JB2008_sample_atmosphereReturnFormGroup() {
		return new FormGroup<App_api_endpoints_JB2008_sample_atmosphereReturnFormProperties>({
		});

	}

	export interface App_api_endpoints_JB2008_sample_atmosphereReturnAt_alt_temp {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_JB2008_sample_atmosphereReturnAt_alt_tempFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_JB2008_sample_atmosphereReturnAt_alt_tempFormGroup() {
		return new FormGroup<App_api_endpoints_JB2008_sample_atmosphereReturnAt_alt_tempFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_JB2008_sample_atmosphereReturnExospheric_temp {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_JB2008_sample_atmosphereReturnExospheric_tempFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_JB2008_sample_atmosphereReturnExospheric_tempFormGroup() {
		return new FormGroup<App_api_endpoints_JB2008_sample_atmosphereReturnExospheric_tempFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_JB2008_sample_atmosphereReturnTotal_mass_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_JB2008_sample_atmosphereReturnTotal_mass_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_JB2008_sample_atmosphereReturnTotal_mass_densityFormGroup() {
		return new FormGroup<App_api_endpoints_JB2008_sample_atmosphereReturnTotal_mass_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturn {
		Ar_density?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAr_density;
		H_density?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnH_density;
		He_density?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnHe_density;
		N2_density?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnN2_density;
		N_density?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnN_density;
		O2_density?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnO2_density;
		O_density?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnO_density;
		anomalous_O_density?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAnomalous_O_density;
		ap?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAp;
		at_alt_temp?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAt_alt_temp;
		exospheric_temp?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnExospheric_temp;
		f107?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnF107;
		f107a?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnF107a;
		total_mass_density?: App_api_endpoints_NRLMSISE00_sample_atmosphereReturnTotal_mass_density;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnFormProperties {
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnFormProperties>({
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAr_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAr_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnAr_densityFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAr_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnH_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnH_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnH_densityFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnH_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnHe_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnHe_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnHe_densityFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnHe_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnN2_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnN2_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnN2_densityFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnN2_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnN_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnN_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnN_densityFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnN_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnO2_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnO2_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnO2_densityFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnO2_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnO_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnO_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnO_densityFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnO_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAnomalous_O_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAnomalous_O_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnAnomalous_O_densityFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAnomalous_O_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAp {

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnApFormProperties {

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnApFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnApFormProperties>({
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAt_alt_temp {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAt_alt_tempFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnAt_alt_tempFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnAt_alt_tempFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnExospheric_temp {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnExospheric_tempFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnExospheric_tempFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnExospheric_tempFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnF107 {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnF107FormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnF107FormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnF107FormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnF107a {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnF107aFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnF107aFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnF107aFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnTotal_mass_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_endpoints_NRLMSISE00_sample_atmosphereReturnTotal_mass_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_endpoints_NRLMSISE00_sample_atmosphereReturnTotal_mass_densityFormGroup() {
		return new FormGroup<App_api_endpoints_NRLMSISE00_sample_atmosphereReturnTotal_mass_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_wfs_endpoints_WFS_get_valuesReturn {

		/**
		 * Molecular nitrogen density in (/m3).
		 */
		N2_density?: App_api_wfs_endpoints_WFS_get_valuesReturnN2_density;

		/**
		 * Moleculary oxygen density in (/m3).
		 */
		O2_density?: App_api_wfs_endpoints_WFS_get_valuesReturnO2_density;

		/**
		 * Oxygen atomic density in (/m3).
		 */
		O_density?: App_api_wfs_endpoints_WFS_get_valuesReturnO_density;

		/**
		 * Easterly component of neutral wind velocity in (m/s).
		 */
		eastward_wind_neutral?: App_api_wfs_endpoints_WFS_get_valuesReturnEastward_wind_neutral;

		/**
		 * Northerly component of neutral wind velocity in (m/s).
		 */
		northward_wind_neutral?: App_api_wfs_endpoints_WFS_get_valuesReturnNorthward_wind_neutral;

		/** The given point in the request. */
		point?: App_api_wfs_endpoints_WFS_get_valuesReturnPoint;

		/**
		 * Temperature of the atmosphere in (K).
		 */
		temp_neutral?: App_api_wfs_endpoints_WFS_get_valuesReturnTemp_neutral;

		/**
		 * Total mass density (kg/m3).
		 */
		total_mass_density?: App_api_wfs_endpoints_WFS_get_valuesReturnTotal_mass_density;

		/**
		 * Upward component of neutral wind velocity in (m/s).
		 */
		upward_wind_neutral?: App_api_wfs_endpoints_WFS_get_valuesReturnUpward_wind_neutral;
	}
	export interface App_api_wfs_endpoints_WFS_get_valuesReturnFormProperties {
	}
	export function CreateApp_api_wfs_endpoints_WFS_get_valuesReturnFormGroup() {
		return new FormGroup<App_api_wfs_endpoints_WFS_get_valuesReturnFormProperties>({
		});

	}

	export interface App_api_wfs_endpoints_WFS_get_valuesReturnN2_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_wfs_endpoints_WFS_get_valuesReturnN2_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_wfs_endpoints_WFS_get_valuesReturnN2_densityFormGroup() {
		return new FormGroup<App_api_wfs_endpoints_WFS_get_valuesReturnN2_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_wfs_endpoints_WFS_get_valuesReturnO2_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_wfs_endpoints_WFS_get_valuesReturnO2_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_wfs_endpoints_WFS_get_valuesReturnO2_densityFormGroup() {
		return new FormGroup<App_api_wfs_endpoints_WFS_get_valuesReturnO2_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_wfs_endpoints_WFS_get_valuesReturnO_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_wfs_endpoints_WFS_get_valuesReturnO_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_wfs_endpoints_WFS_get_valuesReturnO_densityFormGroup() {
		return new FormGroup<App_api_wfs_endpoints_WFS_get_valuesReturnO_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_wfs_endpoints_WFS_get_valuesReturnEastward_wind_neutral {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_wfs_endpoints_WFS_get_valuesReturnEastward_wind_neutralFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_wfs_endpoints_WFS_get_valuesReturnEastward_wind_neutralFormGroup() {
		return new FormGroup<App_api_wfs_endpoints_WFS_get_valuesReturnEastward_wind_neutralFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_wfs_endpoints_WFS_get_valuesReturnNorthward_wind_neutral {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_wfs_endpoints_WFS_get_valuesReturnNorthward_wind_neutralFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_wfs_endpoints_WFS_get_valuesReturnNorthward_wind_neutralFormGroup() {
		return new FormGroup<App_api_wfs_endpoints_WFS_get_valuesReturnNorthward_wind_neutralFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_wfs_endpoints_WFS_get_valuesReturnPoint {

		/** Type: double */
		altitude?: number | null;

		/** Type: double */
		latitude?: number | null;

		/** Type: double */
		longitude?: number | null;
	}
	export interface App_api_wfs_endpoints_WFS_get_valuesReturnPointFormProperties {

		/** Type: double */
		altitude: FormControl<number | null | undefined>,

		/** Type: double */
		latitude: FormControl<number | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_wfs_endpoints_WFS_get_valuesReturnPointFormGroup() {
		return new FormGroup<App_api_wfs_endpoints_WFS_get_valuesReturnPointFormProperties>({
			altitude: new FormControl<number | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_wfs_endpoints_WFS_get_valuesReturnTemp_neutral {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_wfs_endpoints_WFS_get_valuesReturnTemp_neutralFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_wfs_endpoints_WFS_get_valuesReturnTemp_neutralFormGroup() {
		return new FormGroup<App_api_wfs_endpoints_WFS_get_valuesReturnTemp_neutralFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_wfs_endpoints_WFS_get_valuesReturnTotal_mass_density {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_wfs_endpoints_WFS_get_valuesReturnTotal_mass_densityFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_wfs_endpoints_WFS_get_valuesReturnTotal_mass_densityFormGroup() {
		return new FormGroup<App_api_wfs_endpoints_WFS_get_valuesReturnTotal_mass_densityFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_wfs_endpoints_WFS_get_valuesReturnUpward_wind_neutral {
		units?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface App_api_wfs_endpoints_WFS_get_valuesReturnUpward_wind_neutralFormProperties {
		units: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_wfs_endpoints_WFS_get_valuesReturnUpward_wind_neutralFormGroup() {
		return new FormGroup<App_api_wfs_endpoints_WFS_get_valuesReturnUpward_wind_neutralFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

}

