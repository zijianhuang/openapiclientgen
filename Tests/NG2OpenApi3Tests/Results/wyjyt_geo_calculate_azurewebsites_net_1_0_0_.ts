import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GeoConvertRequest {

		/** Comma-separated list of Geo Coordinates to convert. See accepted Systems below. */
		coordinates?: string | null;

		/**
		 * Output format:
		 * (decimal, degree, minutes, seconds.)
		 * Default is decimal.
		 */
		format?: string | null;

		/**
		 * Output standard coordinate system:
		 * (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian).
		 * Default is latlon.
		 */
		system?: string | null;
	}
	export interface GeoConvertRequestFormProperties {

		/** Comma-separated list of Geo Coordinates to convert. See accepted Systems below. */
		coordinates: FormControl<string | null | undefined>,

		/**
		 * Output format:
		 * (decimal, degree, minutes, seconds.)
		 * Default is decimal.
		 */
		format: FormControl<string | null | undefined>,

		/**
		 * Output standard coordinate system:
		 * (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian).
		 * Default is latlon.
		 */
		system: FormControl<string | null | undefined>,
	}
	export function CreateGeoConvertRequestFormGroup() {
		return new FormGroup<GeoConvertRequestFormProperties>({
			coordinates: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			system: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeoConvertResponse {

		/** Comma-separated list of formatted Geo Coordinates. */
		coordinates?: string | null;
	}
	export interface GeoConvertResponseFormProperties {

		/** Comma-separated list of formatted Geo Coordinates. */
		coordinates: FormControl<string | null | undefined>,
	}
	export function CreateGeoConvertResponseFormGroup() {
		return new FormGroup<GeoConvertResponseFormProperties>({
			coordinates: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeoDistanceRequest {

		/**
		 * Geo Coordinate 1 to calculate from.
		 * Standards are (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		 */
		coordinate1?: string | null;

		/**
		 * Geo Coordinate 2 to calculate to.
		 * Standards are (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		 */
		coordinate2?: string | null;

		/**
		 * Flag to use ellipsoid calculation.
		 * Default is false, spherical.
		 */
		useEllipse?: boolean | null;
	}
	export interface GeoDistanceRequestFormProperties {

		/**
		 * Geo Coordinate 1 to calculate from.
		 * Standards are (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		 */
		coordinate1: FormControl<string | null | undefined>,

		/**
		 * Geo Coordinate 2 to calculate to.
		 * Standards are (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		 */
		coordinate2: FormControl<string | null | undefined>,

		/**
		 * Flag to use ellipsoid calculation.
		 * Default is false, spherical.
		 */
		useEllipse: FormControl<boolean | null | undefined>,
	}
	export function CreateGeoDistanceRequestFormGroup() {
		return new FormGroup<GeoDistanceRequestFormProperties>({
			coordinate1: new FormControl<string | null | undefined>(undefined),
			coordinate2: new FormControl<string | null | undefined>(undefined),
			useEllipse: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GeoDistanceResponse {

		/**
		 * Bearing direction between the two coordinates in degrees.
		 * Type: double
		 */
		bearing?: number | null;

		/**
		 * Distance between the two coordinates in meters.
		 * Type: double
		 */
		meters?: number | null;
	}
	export interface GeoDistanceResponseFormProperties {

		/**
		 * Bearing direction between the two coordinates in degrees.
		 * Type: double
		 */
		bearing: FormControl<number | null | undefined>,

		/**
		 * Distance between the two coordinates in meters.
		 * Type: double
		 */
		meters: FormControl<number | null | undefined>,
	}
	export function CreateGeoDistanceResponseFormGroup() {
		return new FormGroup<GeoDistanceResponseFormProperties>({
			bearing: new FormControl<number | null | undefined>(undefined),
			meters: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Celestial event information. */
	export interface GeoEventDto {
		fall?: Date | null;
		lastApogee?: Date | null;
		lastPerigee?: Date | null;
		nextApogee?: Date | null;
		nextPerigee?: Date | null;
		spring?: Date | null;
		summer?: Date | null;
		winter?: Date | null;
		zodiacSign?: string | null;
	}

	/** Celestial event information. */
	export interface GeoEventDtoFormProperties {
		fall: FormControl<Date | null | undefined>,
		lastApogee: FormControl<Date | null | undefined>,
		lastPerigee: FormControl<Date | null | undefined>,
		nextApogee: FormControl<Date | null | undefined>,
		nextPerigee: FormControl<Date | null | undefined>,
		spring: FormControl<Date | null | undefined>,
		summer: FormControl<Date | null | undefined>,
		winter: FormControl<Date | null | undefined>,
		zodiacSign: FormControl<string | null | undefined>,
	}
	export function CreateGeoEventDtoFormGroup() {
		return new FormGroup<GeoEventDtoFormProperties>({
			fall: new FormControl<Date | null | undefined>(undefined),
			lastApogee: new FormControl<Date | null | undefined>(undefined),
			lastPerigee: new FormControl<Date | null | undefined>(undefined),
			nextApogee: new FormControl<Date | null | undefined>(undefined),
			nextPerigee: new FormControl<Date | null | undefined>(undefined),
			spring: new FormControl<Date | null | undefined>(undefined),
			summer: new FormControl<Date | null | undefined>(undefined),
			winter: new FormControl<Date | null | undefined>(undefined),
			zodiacSign: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeoFenceRequest {

		/**
		 * Array of coordinates to check if in the fence.
		 * Accepted standards: (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		 */
		checkCoordinates?: Array<string>;

		/**
		 * Array of coordinates that define the fence.  First and last should be the same for polygons.
		 * Accepted standards: (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		 */
		fenceCoordinates?: Array<string>;
	}
	export interface GeoFenceRequestFormProperties {
	}
	export function CreateGeoFenceRequestFormGroup() {
		return new FormGroup<GeoFenceRequestFormProperties>({
		});

	}

	export interface GeoFenceResponse {

		/** List of distances from the fence. */
		distances?: Array<number>;

		/** List of flags indicating inside or outside of the fence. */
		insides?: Array<boolean>;
	}
	export interface GeoFenceResponseFormProperties {
	}
	export function CreateGeoFenceResponseFormGroup() {
		return new FormGroup<GeoFenceResponseFormProperties>({
		});

	}


	/** Lunar information. */
	export interface GeoMoonDto {

		/** Type: double */
		altitude?: number | null;

		/** Type: double */
		azimuth?: number | null;

		/** Type: double */
		bearing?: number | null;

		/** Type: double */
		declination?: number | null;

		/** Type: double */
		distance?: number | null;
		illumination?: MoonIllum;
		isUp?: boolean | null;
		lastEclipse?: LunarEclipseDetails;
		name?: string | null;
		nextEclipse?: LunarEclipseDetails;

		/** Type: double */
		rightAscension?: number | null;
		rise?: Date | null;
		set?: Date | null;
		sign?: string | null;
	}

	/** Lunar information. */
	export interface GeoMoonDtoFormProperties {

		/** Type: double */
		altitude: FormControl<number | null | undefined>,

		/** Type: double */
		azimuth: FormControl<number | null | undefined>,

		/** Type: double */
		bearing: FormControl<number | null | undefined>,

		/** Type: double */
		declination: FormControl<number | null | undefined>,

		/** Type: double */
		distance: FormControl<number | null | undefined>,
		isUp: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: double */
		rightAscension: FormControl<number | null | undefined>,
		rise: FormControl<Date | null | undefined>,
		set: FormControl<Date | null | undefined>,
		sign: FormControl<string | null | undefined>,
	}
	export function CreateGeoMoonDtoFormGroup() {
		return new FormGroup<GeoMoonDtoFormProperties>({
			altitude: new FormControl<number | null | undefined>(undefined),
			azimuth: new FormControl<number | null | undefined>(undefined),
			bearing: new FormControl<number | null | undefined>(undefined),
			declination: new FormControl<number | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			isUp: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rightAscension: new FormControl<number | null | undefined>(undefined),
			rise: new FormControl<Date | null | undefined>(undefined),
			set: new FormControl<Date | null | undefined>(undefined),
			sign: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MoonIllum {

		/** Type: double */
		angle?: number | null;

		/** Type: double */
		fraction?: number | null;

		/** Type: double */
		phase?: number | null;
		phaseName?: string | null;
		phaseNameEnum?: MoonIllumPhaseNameEnum;
	}
	export interface MoonIllumFormProperties {

		/** Type: double */
		angle: FormControl<number | null | undefined>,

		/** Type: double */
		fraction: FormControl<number | null | undefined>,

		/** Type: double */
		phase: FormControl<number | null | undefined>,
		phaseName: FormControl<string | null | undefined>,
		phaseNameEnum: FormControl<MoonIllumPhaseNameEnum | null | undefined>,
	}
	export function CreateMoonIllumFormGroup() {
		return new FormGroup<MoonIllumFormProperties>({
			angle: new FormControl<number | null | undefined>(undefined),
			fraction: new FormControl<number | null | undefined>(undefined),
			phase: new FormControl<number | null | undefined>(undefined),
			phaseName: new FormControl<string | null | undefined>(undefined),
			phaseNameEnum: new FormControl<MoonIllumPhaseNameEnum | null | undefined>(undefined),
		});

	}

	export enum MoonIllumPhaseNameEnum { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7 }

	export interface LunarEclipseDetails {
		date?: Date | null;
		hasEclipseData?: boolean | null;
		midEclipse?: Date | null;
		partialEclispeBegin?: Date | null;
		partialEclispeEnd?: Date | null;
		penumbralEclipseBegin?: Date | null;
		penumbralEclispeEnd?: Date | null;
		totalEclipseBegin?: Date | null;
		totalEclipseEnd?: Date | null;
		type?: LunarEclipseDetailsType;
	}
	export interface LunarEclipseDetailsFormProperties {
		date: FormControl<Date | null | undefined>,
		hasEclipseData: FormControl<boolean | null | undefined>,
		midEclipse: FormControl<Date | null | undefined>,
		partialEclispeBegin: FormControl<Date | null | undefined>,
		partialEclispeEnd: FormControl<Date | null | undefined>,
		penumbralEclipseBegin: FormControl<Date | null | undefined>,
		penumbralEclispeEnd: FormControl<Date | null | undefined>,
		totalEclipseBegin: FormControl<Date | null | undefined>,
		totalEclipseEnd: FormControl<Date | null | undefined>,
		type: FormControl<LunarEclipseDetailsType | null | undefined>,
	}
	export function CreateLunarEclipseDetailsFormGroup() {
		return new FormGroup<LunarEclipseDetailsFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			hasEclipseData: new FormControl<boolean | null | undefined>(undefined),
			midEclipse: new FormControl<Date | null | undefined>(undefined),
			partialEclispeBegin: new FormControl<Date | null | undefined>(undefined),
			partialEclispeEnd: new FormControl<Date | null | undefined>(undefined),
			penumbralEclipseBegin: new FormControl<Date | null | undefined>(undefined),
			penumbralEclispeEnd: new FormControl<Date | null | undefined>(undefined),
			totalEclipseBegin: new FormControl<Date | null | undefined>(undefined),
			totalEclipseEnd: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<LunarEclipseDetailsType | null | undefined>(undefined),
		});

	}

	export enum LunarEclipseDetailsType { _0 = 0, _1 = 1, _2 = 2 }

	export interface GeoSkyRequest {

		/** Location coordinate of sky data. */
		coordinate?: string | null;

		/** Date on which to fetch sky data. */
		date?: Date | null;
	}
	export interface GeoSkyRequestFormProperties {

		/** Location coordinate of sky data. */
		coordinate: FormControl<string | null | undefined>,

		/** Date on which to fetch sky data. */
		date: FormControl<Date | null | undefined>,
	}
	export function CreateGeoSkyRequestFormGroup() {
		return new FormGroup<GeoSkyRequestFormProperties>({
			coordinate: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GeoSkyResponse {

		/** Celestial event information. */
		event?: GeoEventDto;

		/** Lunar information. */
		moon?: GeoMoonDto;

		/** Solar information. */
		sun?: GeoSunDto;
	}
	export interface GeoSkyResponseFormProperties {
	}
	export function CreateGeoSkyResponseFormGroup() {
		return new FormGroup<GeoSkyResponseFormProperties>({
		});

	}


	/** Solar information. */
	export interface GeoSunDto {

		/** Type: double */
		altitude?: number | null;

		/** Type: double */
		azimuth?: number | null;
		dawn?: Date | null;

		/** Type: double */
		declination?: number | null;
		dusk?: Date | null;
		isUp?: boolean | null;
		lastEclipse?: SolarEclipseDetails;
		nextEclipse?: SolarEclipseDetails;
		noon?: Date | null;

		/** Type: double */
		rightAscension?: number | null;
		rise?: Date | null;
		set?: Date | null;
	}

	/** Solar information. */
	export interface GeoSunDtoFormProperties {

		/** Type: double */
		altitude: FormControl<number | null | undefined>,

		/** Type: double */
		azimuth: FormControl<number | null | undefined>,
		dawn: FormControl<Date | null | undefined>,

		/** Type: double */
		declination: FormControl<number | null | undefined>,
		dusk: FormControl<Date | null | undefined>,
		isUp: FormControl<boolean | null | undefined>,
		noon: FormControl<Date | null | undefined>,

		/** Type: double */
		rightAscension: FormControl<number | null | undefined>,
		rise: FormControl<Date | null | undefined>,
		set: FormControl<Date | null | undefined>,
	}
	export function CreateGeoSunDtoFormGroup() {
		return new FormGroup<GeoSunDtoFormProperties>({
			altitude: new FormControl<number | null | undefined>(undefined),
			azimuth: new FormControl<number | null | undefined>(undefined),
			dawn: new FormControl<Date | null | undefined>(undefined),
			declination: new FormControl<number | null | undefined>(undefined),
			dusk: new FormControl<Date | null | undefined>(undefined),
			isUp: new FormControl<boolean | null | undefined>(undefined),
			noon: new FormControl<Date | null | undefined>(undefined),
			rightAscension: new FormControl<number | null | undefined>(undefined),
			rise: new FormControl<Date | null | undefined>(undefined),
			set: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SolarEclipseDetails {
		aorTDuration?: string | null;
		aorTEclipseBegin?: Date | null;
		aorTEclipseEnd?: Date | null;
		date?: Date | null;
		hasEclipseData?: boolean | null;
		maximumEclipse?: Date | null;
		partialEclispeBegin?: Date | null;
		partialEclispeEnd?: Date | null;
		type?: SolarEclipseDetailsType;
	}
	export interface SolarEclipseDetailsFormProperties {
		aorTDuration: FormControl<string | null | undefined>,
		aorTEclipseBegin: FormControl<Date | null | undefined>,
		aorTEclipseEnd: FormControl<Date | null | undefined>,
		date: FormControl<Date | null | undefined>,
		hasEclipseData: FormControl<boolean | null | undefined>,
		maximumEclipse: FormControl<Date | null | undefined>,
		partialEclispeBegin: FormControl<Date | null | undefined>,
		partialEclispeEnd: FormControl<Date | null | undefined>,
		type: FormControl<SolarEclipseDetailsType | null | undefined>,
	}
	export function CreateSolarEclipseDetailsFormGroup() {
		return new FormGroup<SolarEclipseDetailsFormProperties>({
			aorTDuration: new FormControl<string | null | undefined>(undefined),
			aorTEclipseBegin: new FormControl<Date | null | undefined>(undefined),
			aorTEclipseEnd: new FormControl<Date | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			hasEclipseData: new FormControl<boolean | null | undefined>(undefined),
			maximumEclipse: new FormControl<Date | null | undefined>(undefined),
			partialEclispeBegin: new FormControl<Date | null | undefined>(undefined),
			partialEclispeEnd: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<SolarEclipseDetailsType | null | undefined>(undefined),
		});

	}

	export enum SolarEclipseDetailsType { _0 = 0, _1 = 1, _2 = 2 }

	export interface WyjytErrorResponse {

		/** Error message. */
		reason?: string | null;

		/** Success or fail. */
		success?: boolean | null;
	}
	export interface WyjytErrorResponseFormProperties {

		/** Error message. */
		reason: FormControl<string | null | undefined>,

		/** Success or fail. */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateWyjytErrorResponseFormGroup() {
		return new FormGroup<WyjytErrorResponseFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Convert the list of geo coordinates to a standard format - (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		 * Convert the list of geo coordinates to a standard format - (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		 * Post Convert
		 * @return {GeoConvertResponse} Success
		 */
		Convert(requestBody: GeoConvertRequest): Observable<GeoConvertResponse> {
			return this.http.post<GeoConvertResponse>(this.baseUri + 'Convert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Calculate the distance between two geo coordinates.
		 * Calculate the distance between two geo coordinates.
		 * Post Distance
		 * @return {GeoDistanceResponse} Success
		 */
		Distance(requestBody: GeoDistanceRequest): Observable<GeoDistanceResponse> {
			return this.http.post<GeoDistanceResponse>(this.baseUri + 'Distance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Check if a list of coordinates are inside of a fence of coordinates.
		 * Check if a list of coordinates are inside of a fence of coordinates.
		 * Post Fence
		 * @return {GeoFenceResponse} Success
		 */
		Fence(requestBody: GeoFenceRequest): Observable<GeoFenceResponse> {
			return this.http.post<GeoFenceResponse>(this.baseUri + 'Fence', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Calculate sun, moon, eclipse and sky information for the date and location.
		 * Calculate sun, moon, eclipse and sky information for the date and location.
		 * Post Sky
		 * @return {GeoSkyResponse} Success
		 */
		Sky(requestBody: GeoSkyRequest): Observable<GeoSkyResponse> {
			return this.http.post<GeoSkyResponse>(this.baseUri + 'Sky', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

