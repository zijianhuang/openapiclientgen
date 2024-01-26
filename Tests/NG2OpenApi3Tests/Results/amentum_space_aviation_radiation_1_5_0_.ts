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
		 * The ambient dose equivalent rate calculated for a single particle type, or accumulated over all particle types.
		 * The ambient dose equivalent, H*(10), is an operational quantity that simulates the  human body by measuring the dose equivalent at a depth of 10 mm within a tissue  equivalent sphere of 300 mm diameter. It is a measurable quantity that is  used to calibrate area monitors (radiation detectors) for mixed radiation fields.
		 * Use this endpoint if you are comparing model predictions to measurements.
		 * Get cari7/ambient_dose
		 * @param {number} altitude Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).
		 * @param {number} latitude Latitude. -90 (S) to 90 (N).
		 * @param {number} longitude Longitude. -180 (W) to 180 (E).
		 * @param {number} year Year in YYYY.
		 * @param {number} month Month in MM.
		 * @param {number} day Day in DD.
		 * @param {number} utc Hour in 24 hour time.
		 * @param {App_api_cari7_endpoints_CARI7_ambient_doseParticle} particle The particle type as a string. Specifying 'total' returns the dose for all particle types.
		 * @return {App_api_cari7_endpoints_CARI7_ambient_doseReturn} Successful dose calculation
		 */
		App_api_cari7_endpoints_CARI7_ambient_dose(altitude: number, latitude: number, longitude: number, year: number, month: number, day: number, utc: number, particle: App_api_cari7_endpoints_CARI7_ambient_doseParticle): Observable<App_api_cari7_endpoints_CARI7_ambient_doseReturn> {
			return this.http.get<App_api_cari7_endpoints_CARI7_ambient_doseReturn>(this.baseUri + 'cari7/ambient_dose?altitude=' + altitude + '&latitude=' + latitude + '&longitude=' + longitude + '&year=' + year + '&month=' + month + '&day=' + day + '&utc=' + utc + '&particle=' + particle, {});
		}

		/**
		 * The effective dose rate calculated for a single particle type, or accumulated over all particle types.
		 * Effective Dose is a radiation protection quantity defined by the International Commission on
		 * Radiological Protection (ICRP) and represents the stochastic health
		 * risk to the human body at low levels of radiation.
		 * It accounts for the different sensitivities of organs to ionising radiation, as well as the different effectiveness of various types of radiation.
		 * Use this endpoint if you need to estimate radiation exposures of personnel.
		 * Get cari7/effective_dose
		 * @param {number} altitude Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).
		 * @param {number} latitude Latitude. -90 (S) to 90 (N).
		 * @param {number} longitude Longitude. -180 (W) to 180 (E).
		 * @param {number} year Year in YYYY.
		 * @param {number} month Month in MM.
		 * @param {number} day Day in DD.
		 * @param {number} utc Hour in 24 hour time.
		 * @param {App_api_cari7_endpoints_CARI7_ambient_doseParticle} particle The particle type as a string. Specifying 'total' returns the dose for all particle types.
		 * @return {App_api_cari7_endpoints_CARI7_effective_doseReturn} Successful dose calculation
		 */
		App_api_cari7_endpoints_CARI7_effective_dose(altitude: number, latitude: number, longitude: number, year: number, month: number, day: number, utc: number, particle: App_api_cari7_endpoints_CARI7_ambient_doseParticle): Observable<App_api_cari7_endpoints_CARI7_effective_doseReturn> {
			return this.http.get<App_api_cari7_endpoints_CARI7_effective_doseReturn>(this.baseUri + 'cari7/effective_dose?altitude=' + altitude + '&latitude=' + latitude + '&longitude=' + longitude + '&year=' + year + '&month=' + month + '&day=' + day + '&utc=' + utc + '&particle=' + particle, {});
		}

		/**
		 * The ambient dose equivalent rate calculated for a single particle type, or accumulated over all particle types.
		 * The ambient dose equivalent, H*(10), is an operational quantity that simulates the  human body by measuring the dose equivalent at a depth of 10 mm within a tissue  equivalent sphere of 300 mm diameter. It is a measurable quantity that is  used to calibrate area monitors (radiation detectors) for mixed radiation fields.
		 * Use this endpoint if you are comparing model predictions to measurements.
		 * Get parma/ambient_dose
		 * @param {number} altitude Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).
		 * @param {number} atmospheric_depth Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.
		 * @param {number} latitude Latitude. -90 (S) to 90 (N).
		 * @param {number} longitude Longitude. -180 (W) to 180 (E).
		 * @param {number} year Year in YYYY.
		 * @param {number} month Month in MM.
		 * @param {number} day Day in DD.
		 * @param {App_api_parma_endpoints_PARMA_ambient_doseParticle} particle The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.
		 * @return {App_api_parma_endpoints_PARMA_ambient_doseReturn} Successful dose read operation
		 */
		App_api_parma_endpoints_PARMA_ambient_dose(altitude: number | null | undefined, atmospheric_depth: number | null | undefined, latitude: number, longitude: number, year: number, month: number, day: number, particle: App_api_parma_endpoints_PARMA_ambient_doseParticle): Observable<App_api_parma_endpoints_PARMA_ambient_doseReturn> {
			return this.http.get<App_api_parma_endpoints_PARMA_ambient_doseReturn>(this.baseUri + 'parma/ambient_dose?altitude=' + altitude + '&atmospheric_depth=' + atmospheric_depth + '&latitude=' + latitude + '&longitude=' + longitude + '&year=' + year + '&month=' + month + '&day=' + day + '&particle=' + particle, {});
		}

		/**
		 * The energy differential intensity of a particle at a given zenith angle.
		 * The differential intensity of a particle is a directional quantity that describes the number of particles per unit area, per unit solid angle, per unit energy, and per unit time. The API leverages the functionality of PARMA to calculate differential intensity distributions with energies in units of MeV and Intensity in units of /cm2/sr/MeV/s.
		 * Get parma/differential_intensity
		 * @param {number} altitude Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).
		 * @param {number} atmospheric_depth Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.
		 * @param {number} latitude Latitude. -90 (S) to 90 (N).
		 * @param {number} longitude Longitude. -180 (W) to 180 (E).
		 * @param {number} year Year in YYYY.
		 * @param {number} month Month in MM.
		 * @param {number} day Day in DD.
		 * @param {App_api_parma_endpoints_PARMA_ambient_doseParticle} particle The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.
		 * @param {number} angle Direction cosine. 1.0 is in the downward direction.
		 * @return {App_api_parma_endpoints_PARMA_differential_intensityReturn} Successful read of intensity operation
		 */
		App_api_parma_endpoints_PARMA_differential_intensity(altitude: number | null | undefined, atmospheric_depth: number | null | undefined, latitude: number, longitude: number, year: number, month: number, day: number, particle: App_api_parma_endpoints_PARMA_ambient_doseParticle, angle: number): Observable<App_api_parma_endpoints_PARMA_differential_intensityReturn> {
			return this.http.get<App_api_parma_endpoints_PARMA_differential_intensityReturn>(this.baseUri + 'parma/differential_intensity?altitude=' + altitude + '&atmospheric_depth=' + atmospheric_depth + '&latitude=' + latitude + '&longitude=' + longitude + '&year=' + year + '&month=' + month + '&day=' + day + '&particle=' + particle + '&angle=' + angle, {});
		}

		/**
		 * The effective dose rate calculated for a single particle type, or accumulated over all particle types.
		 * Effective dose is a radiation protection quantity defined by the International Commission on Radiological Protection (ICRP) and represents the stochastic health risk to the human body at low levels of radiation. It accounts for the different sensitivities of organs to ionising radiation, as well as the different effectiveness of various types of radiation.
		 * Use this endpoint if you need to estimate radiation exposures of personnel.
		 * Get parma/effective_dose
		 * @param {number} altitude Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).
		 * @param {number} atmospheric_depth Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.
		 * @param {number} latitude Latitude. -90 (S) to 90 (N).
		 * @param {number} longitude Longitude. -180 (W) to 180 (E).
		 * @param {number} year Year in YYYY.
		 * @param {number} month Month in MM.
		 * @param {number} day Day in DD.
		 * @param {App_api_parma_endpoints_PARMA_ambient_doseParticle} particle The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.
		 * @return {App_api_parma_endpoints_PARMA_effective_doseReturn} Successful dose read operation
		 */
		App_api_parma_endpoints_PARMA_effective_dose(altitude: number | null | undefined, atmospheric_depth: number | null | undefined, latitude: number, longitude: number, year: number, month: number, day: number, particle: App_api_parma_endpoints_PARMA_ambient_doseParticle): Observable<App_api_parma_endpoints_PARMA_effective_doseReturn> {
			return this.http.get<App_api_parma_endpoints_PARMA_effective_doseReturn>(this.baseUri + 'parma/effective_dose?altitude=' + altitude + '&atmospheric_depth=' + atmospheric_depth + '&latitude=' + latitude + '&longitude=' + longitude + '&year=' + year + '&month=' + month + '&day=' + day + '&particle=' + particle, {});
		}

		/**
		 * Calculate the ambient equivalent dose along a great circle flight route.
		 * The ambient dose equivalent, H*(10), is an operational quantity that simulates the  human body by measuring the dose equivalent at a depth of 10 mm within a tissue  equivalent sphere of 300 mm diameter. It is a measurable quantity that is  used to calibrate area monitors (radiation detectors) for mixed radiation fields.  <br> <br> Use this endpoint if you are comparing model predictions to measurements. <br> <br> This API can run in two modes: <br> <br> Either specify <br> <b>altitude</b>, <b>duration</b><br> for constant altitude calculations; <br> <br> Or specify <br> <b>initial_altitude</b>, <b>cruising_altitudes</b>, <b>climb_times</b>, <b>cruising_times</b>, <b>descent_time</b>, <b>final_altitude</b><br> to calculate dose accounting for a step climb. <br> <br> Note: the airport codes or coordinates (depending on which was specified), and the date in DD/MM/YYYY format, are echoed in the json response as strings.
		 * Get route/ambient_dose
		 * @param {string} origin The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the origin airport.
		 * @param {string} destination The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the destination airport.
		 * @param {number} altitude Altitude (in km). The minimum is 0 m, the maximum is 20 km.
		 * @param {number} duration The flight duration in hours. The minimum is 0, the maximum is 20 hrs.
		 * @param {number} initial_altitude Initial altitude (in km). The minimum is 0 m, the maximum is 20 km.
		 * @param {Array<number>} cruising_altitudes Cruising altitudes (in km). The minimum is 0 m, the maximum is 20 km.
		 * @param {Array<number>} climb_times Climb times for each cruising altitude (hours).
		 * @param {Array<number>} cruising_times Cruising times at each cruising altitude (hours).
		 * @param {number} descent_time Descent time from last cruising altitude to final altitude (hours).
		 * @param {number} final_altitude Final altitude (in km).
		 * @param {number} year Year in YYYY.
		 * @param {number} month Month in MM.
		 * @param {number} day Day in DD.
		 * @return {App_api_icaro_endpoints_ICARO_ambient_doseReturn} Successful dose calculation
		 */
		App_api_icaro_endpoints_ICARO_ambient_dose(origin: string, destination: string, altitude: number | null | undefined, duration: number | null | undefined, initial_altitude: number | null | undefined, cruising_altitudes: Array<number> | null | undefined, climb_times: Array<number> | null | undefined, cruising_times: Array<number> | null | undefined, descent_time: number | null | undefined, final_altitude: number | null | undefined, year: number, month: number, day: number): Observable<App_api_icaro_endpoints_ICARO_ambient_doseReturn> {
			return this.http.get<App_api_icaro_endpoints_ICARO_ambient_doseReturn>(this.baseUri + 'route/ambient_dose?origin=' + (origin == null ? '' : encodeURIComponent(origin)) + '&destination=' + (destination == null ? '' : encodeURIComponent(destination)) + '&altitude=' + altitude + '&duration=' + duration + '&initial_altitude=' + initial_altitude + '&' + cruising_altitudes?.map(z => `cruising_altitudes=${z}`).join('&') + '&' + climb_times?.map(z => `climb_times=${z}`).join('&') + '&' + cruising_times?.map(z => `cruising_times=${z}`).join('&') + '&descent_time=' + descent_time + '&final_altitude=' + final_altitude + '&year=' + year + '&month=' + month + '&day=' + day, {});
		}

		/**
		 * Calculate the total effective dose along a great circle flight route.
		 * Effective Dose is a radiation protection quantity defined by the International Commission on
		 * Radiological Protection (ICRP) and represents the stochastic health
		 * risk to the human body at low levels of radiation.
		 * It accounts for the different sensitivities of organs to ionising radiation, as well as the different effectiveness of various types of radiation. <br> <br> Use this endpoint if you need to estimate radiation exposures of personnel. <br> <br> This API can run in two modes: <br> <br> Either specify <br> <b>altitude</b>, <b>duration</b><br> for constant altitude calculations; <br> <br> Or specify <br> <b>initial_altitude</b>, <b>cruising_altitudes</b>, <b>climb_times</b>, <b>cruising_times</b>, <b>descent_time</b>, <b>final_altitude</b><br> to calculate dose accounting for a step climb. <br> <br> Note: the airport codes or coordinates (depending on which was specified), and the date in DD/MM/YYYY format, are echoed in the json response as strings.
		 * Get route/effective_dose
		 * @param {string} origin The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the origin airport.
		 * @param {string} destination The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the destination airport.
		 * @param {number} altitude Altitude (in km). The minimum is 0 m, the maximum is 20 km.
		 * @param {number} duration The flight duration in hours. The minimum is 0, the maximum is 20 hrs.
		 * @param {number} initial_altitude Initial altitude (in km). The minimum is 0 m, the maximum is 20 km.
		 * @param {Array<number>} cruising_altitudes Cruising altitudes (in km). The minimum is 0 m, the maximum is 20 km.
		 * @param {Array<number>} climb_times Climb times for each cruising altitude (hours).
		 * @param {Array<number>} cruising_times Cruising times at each cruising altitude (hours).
		 * @param {number} descent_time Descent time from last cruising altitude to final altitude (hours).
		 * @param {number} final_altitude Final altitude (in km).
		 * @param {number} year Year in YYYY.
		 * @param {number} month Month in MM.
		 * @param {number} day Day in DD.
		 * @return {App_api_icaro_endpoints_ICARO_effective_doseReturn} Successful dose calculation
		 */
		App_api_icaro_endpoints_ICARO_effective_dose(origin: string, destination: string, altitude: number | null | undefined, duration: number | null | undefined, initial_altitude: number | null | undefined, cruising_altitudes: Array<number> | null | undefined, climb_times: Array<number> | null | undefined, cruising_times: Array<number> | null | undefined, descent_time: number | null | undefined, final_altitude: number | null | undefined, year: number, month: number, day: number): Observable<App_api_icaro_endpoints_ICARO_effective_doseReturn> {
			return this.http.get<App_api_icaro_endpoints_ICARO_effective_doseReturn>(this.baseUri + 'route/effective_dose?origin=' + (origin == null ? '' : encodeURIComponent(origin)) + '&destination=' + (destination == null ? '' : encodeURIComponent(destination)) + '&altitude=' + altitude + '&duration=' + duration + '&initial_altitude=' + initial_altitude + '&' + cruising_altitudes?.map(z => `cruising_altitudes=${z}`).join('&') + '&' + climb_times?.map(z => `climb_times=${z}`).join('&') + '&' + cruising_times?.map(z => `cruising_times=${z}`).join('&') + '&descent_time=' + descent_time + '&final_altitude=' + final_altitude + '&year=' + year + '&month=' + month + '&day=' + day, {});
		}
	}

	export enum App_api_cari7_endpoints_CARI7_ambient_doseParticle { total = 0, neutron = 1, photon = 2, 'e-' = 3, 'e+' = 4, 'mu-' = 5, 'mu+' = 6, proton = 7, 'pi-' = 8, 'pi+' = 9, deuteron = 10, triton = 11, helion = 12, alpha = 13, Li = 14, Be = 15, B = 16, C = 17, N = 18, O = 19, F = 20, Ne = 21, Na = 22, Mg = 23, Al = 24, Si = 25, P = 26, S = 27, Cl = 28, Ar = 29, K = 30, Ca = 31, Sc = 32, Ti = 33, V = 34, Cr = 35, Mn = 36, Fe = 37 }

	export interface App_api_cari7_endpoints_CARI7_ambient_doseReturn {
		'dose rate'?: App_api_cari7_endpoints_CARI7_ambient_doseReturn_dose_rate_;
	}
	export interface App_api_cari7_endpoints_CARI7_ambient_doseReturnFormProperties {
	}
	export function CreateApp_api_cari7_endpoints_CARI7_ambient_doseReturnFormGroup() {
		return new FormGroup<App_api_cari7_endpoints_CARI7_ambient_doseReturnFormProperties>({
		});

	}

	export interface App_api_cari7_endpoints_CARI7_ambient_doseReturn_dose_rate_ {
		units?: string | null;
		value?: number | null;
	}
	export interface App_api_cari7_endpoints_CARI7_ambient_doseReturn_dose_rate_FormProperties {
		units: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_cari7_endpoints_CARI7_ambient_doseReturn_dose_rate_FormGroup() {
		return new FormGroup<App_api_cari7_endpoints_CARI7_ambient_doseReturn_dose_rate_FormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_cari7_endpoints_CARI7_effective_doseReturn {
		'dose rate'?: App_api_cari7_endpoints_CARI7_effective_doseReturn_dose_rate_;
	}
	export interface App_api_cari7_endpoints_CARI7_effective_doseReturnFormProperties {
	}
	export function CreateApp_api_cari7_endpoints_CARI7_effective_doseReturnFormGroup() {
		return new FormGroup<App_api_cari7_endpoints_CARI7_effective_doseReturnFormProperties>({
		});

	}

	export interface App_api_cari7_endpoints_CARI7_effective_doseReturn_dose_rate_ {
		units?: string | null;
		value?: number | null;
	}
	export interface App_api_cari7_endpoints_CARI7_effective_doseReturn_dose_rate_FormProperties {
		units: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_cari7_endpoints_CARI7_effective_doseReturn_dose_rate_FormGroup() {
		return new FormGroup<App_api_cari7_endpoints_CARI7_effective_doseReturn_dose_rate_FormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum App_api_parma_endpoints_PARMA_ambient_doseParticle { total = 0, 'e-' = 1, 'e+' = 2, 'mu+' = 3, 'mu-' = 4, gamma = 5, neutron = 6, proton = 7, alpha = 8 }

	export interface App_api_parma_endpoints_PARMA_ambient_doseReturn {
		'dose rate'?: App_api_parma_endpoints_PARMA_ambient_doseReturn_dose_rate_;
	}
	export interface App_api_parma_endpoints_PARMA_ambient_doseReturnFormProperties {
	}
	export function CreateApp_api_parma_endpoints_PARMA_ambient_doseReturnFormGroup() {
		return new FormGroup<App_api_parma_endpoints_PARMA_ambient_doseReturnFormProperties>({
		});

	}

	export interface App_api_parma_endpoints_PARMA_ambient_doseReturn_dose_rate_ {
		units?: string | null;
		value?: number | null;
	}
	export interface App_api_parma_endpoints_PARMA_ambient_doseReturn_dose_rate_FormProperties {
		units: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_parma_endpoints_PARMA_ambient_doseReturn_dose_rate_FormGroup() {
		return new FormGroup<App_api_parma_endpoints_PARMA_ambient_doseReturn_dose_rate_FormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_parma_endpoints_PARMA_differential_intensityReturn {
		energies?: App_api_parma_endpoints_PARMA_differential_intensityReturnEnergies;
		intensities?: App_api_parma_endpoints_PARMA_differential_intensityReturnIntensities;
	}
	export interface App_api_parma_endpoints_PARMA_differential_intensityReturnFormProperties {
	}
	export function CreateApp_api_parma_endpoints_PARMA_differential_intensityReturnFormGroup() {
		return new FormGroup<App_api_parma_endpoints_PARMA_differential_intensityReturnFormProperties>({
		});

	}

	export interface App_api_parma_endpoints_PARMA_differential_intensityReturnEnergies {
		data?: Array<number>;
		units?: string | null;
	}
	export interface App_api_parma_endpoints_PARMA_differential_intensityReturnEnergiesFormProperties {
		units: FormControl<string | null | undefined>,
	}
	export function CreateApp_api_parma_endpoints_PARMA_differential_intensityReturnEnergiesFormGroup() {
		return new FormGroup<App_api_parma_endpoints_PARMA_differential_intensityReturnEnergiesFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface App_api_parma_endpoints_PARMA_differential_intensityReturnIntensities {
		data?: Array<number>;
		units?: string | null;
	}
	export interface App_api_parma_endpoints_PARMA_differential_intensityReturnIntensitiesFormProperties {
		units: FormControl<string | null | undefined>,
	}
	export function CreateApp_api_parma_endpoints_PARMA_differential_intensityReturnIntensitiesFormGroup() {
		return new FormGroup<App_api_parma_endpoints_PARMA_differential_intensityReturnIntensitiesFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface App_api_parma_endpoints_PARMA_effective_doseReturn {
		'dose rate'?: App_api_parma_endpoints_PARMA_effective_doseReturn_dose_rate_;
	}
	export interface App_api_parma_endpoints_PARMA_effective_doseReturnFormProperties {
	}
	export function CreateApp_api_parma_endpoints_PARMA_effective_doseReturnFormGroup() {
		return new FormGroup<App_api_parma_endpoints_PARMA_effective_doseReturnFormProperties>({
		});

	}

	export interface App_api_parma_endpoints_PARMA_effective_doseReturn_dose_rate_ {
		units?: string | null;
		value?: number | null;
	}
	export interface App_api_parma_endpoints_PARMA_effective_doseReturn_dose_rate_FormProperties {
		units: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_parma_endpoints_PARMA_effective_doseReturn_dose_rate_FormGroup() {
		return new FormGroup<App_api_parma_endpoints_PARMA_effective_doseReturn_dose_rate_FormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_icaro_endpoints_ICARO_ambient_doseReturn {
		dose?: App_api_icaro_endpoints_ICARO_ambient_doseReturnDose;
	}
	export interface App_api_icaro_endpoints_ICARO_ambient_doseReturnFormProperties {
	}
	export function CreateApp_api_icaro_endpoints_ICARO_ambient_doseReturnFormGroup() {
		return new FormGroup<App_api_icaro_endpoints_ICARO_ambient_doseReturnFormProperties>({
		});

	}

	export interface App_api_icaro_endpoints_ICARO_ambient_doseReturnDose {
		date?: string | null;
		destination?: string | null;
		origin?: string | null;
		units?: string | null;
		value?: number | null;
	}
	export interface App_api_icaro_endpoints_ICARO_ambient_doseReturnDoseFormProperties {
		date: FormControl<string | null | undefined>,
		destination: FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
		units: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_icaro_endpoints_ICARO_ambient_doseReturnDoseFormGroup() {
		return new FormGroup<App_api_icaro_endpoints_ICARO_ambient_doseReturnDoseFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface App_api_icaro_endpoints_ICARO_effective_doseReturn {
		dose?: App_api_icaro_endpoints_ICARO_effective_doseReturnDose;
	}
	export interface App_api_icaro_endpoints_ICARO_effective_doseReturnFormProperties {
	}
	export function CreateApp_api_icaro_endpoints_ICARO_effective_doseReturnFormGroup() {
		return new FormGroup<App_api_icaro_endpoints_ICARO_effective_doseReturnFormProperties>({
		});

	}

	export interface App_api_icaro_endpoints_ICARO_effective_doseReturnDose {
		date?: string | null;
		destination?: string | null;
		origin?: string | null;
		units?: string | null;
		value?: number | null;
	}
	export interface App_api_icaro_endpoints_ICARO_effective_doseReturnDoseFormProperties {
		date: FormControl<string | null | undefined>,
		destination: FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
		units: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateApp_api_icaro_endpoints_ICARO_effective_doseReturnDoseFormGroup() {
		return new FormGroup<App_api_icaro_endpoints_ICARO_effective_doseReturnDoseFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

}

