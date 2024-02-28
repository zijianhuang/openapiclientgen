import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AirportDetailsDto {

		/** City where the airport is located. */
		city?: string | null;
		country?: Country;
		geoCoordinates?: GeoCoordinates;

		/** Unique identifier. */
		id?: string | null;
		inboundRoutes?: Link;

		/** Name of the airport. */
		name?: string | null;
		outboundRoutes?: Link;
	}
	export interface AirportDetailsDtoFormProperties {

		/** City where the airport is located. */
		city: FormControl<string | null | undefined>,

		/** Unique identifier. */
		id: FormControl<string | null | undefined>,

		/** Name of the airport. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAirportDetailsDtoFormGroup() {
		return new FormGroup<AirportDetailsDtoFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Country {
		code?: string | null;
		name?: string | null;
	}
	export interface CountryFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeoCoordinates {

		/** Type: double */
		latitude?: number | null;

		/** Type: double */
		longitude?: number | null;
	}
	export interface GeoCoordinatesFormProperties {

		/** Type: double */
		latitude: FormControl<number | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGeoCoordinatesFormGroup() {
		return new FormGroup<GeoCoordinatesFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Link {
		href?: string | null;
	}
	export interface LinkFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AirportDto {

		/** City where the airport is located. */
		city?: string | null;
		country?: Country;
		geoCoordinates?: GeoCoordinates;

		/** Unique identifier. */
		id?: string | null;

		/** Name of the airport. */
		name?: string | null;
		self?: Link;
	}
	export interface AirportDtoFormProperties {

		/** City where the airport is located. */
		city: FormControl<string | null | undefined>,

		/** Unique identifier. */
		id: FormControl<string | null | undefined>,

		/** Name of the airport. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAirportDtoFormGroup() {
		return new FormGroup<AirportDtoFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BadRequestResponse {
		errorMessages?: Array<string>;
	}
	export interface BadRequestResponseFormProperties {
	}
	export function CreateBadRequestResponseFormGroup() {
		return new FormGroup<BadRequestResponseFormProperties>({
		});

	}

	export interface InternalServerErrorResponse {
		errorMessage?: string | null;
		referenceId?: string | null;
	}
	export interface InternalServerErrorResponseFormProperties {
		errorMessage: FormControl<string | null | undefined>,
		referenceId: FormControl<string | null | undefined>,
	}
	export function CreateInternalServerErrorResponseFormGroup() {
		return new FormGroup<InternalServerErrorResponseFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			referenceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NearestAirportDto {

		/** City where the airport is located. */
		city?: string | null;
		country?: Country;

		/**
		 * Distance in kilometers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		distanceInKm?: number | null;
		geoCoordinates?: GeoCoordinates;

		/** Unique identifier. */
		id?: string | null;

		/** Name of the airport. */
		name?: string | null;
		self?: Link;
	}
	export interface NearestAirportDtoFormProperties {

		/** City where the airport is located. */
		city: FormControl<string | null | undefined>,

		/**
		 * Distance in kilometers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		distanceInKm: FormControl<number | null | undefined>,

		/** Unique identifier. */
		id: FormControl<string | null | undefined>,

		/** Name of the airport. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNearestAirportDtoFormGroup() {
		return new FormGroup<NearestAirportDtoFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			distanceInKm: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * All airports
		 * Retrieve all airports.
		 * Get 
		 * @return {Array<AirportDto>} OK
		 */
		Get(headersHandler?: () => HttpHeaders): Observable<Array<AirportDto>> {
			return this.http.get<Array<AirportDto>>(this.baseUri + '', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Airport(s) by country code.
		 * Retrieve airports by country code.
		 * Get countrycode/{countryCode}
		 * @param {string} countryCode Comma-separated list of country codes (2-character ISO 3166-1). More than 3 country codes is not allowed.
		 * @return {Array<AirportDto>} OK
		 */
		Countrycode_countryCodeGet(countryCode: string, headersHandler?: () => HttpHeaders): Observable<Array<AirportDto>> {
			return this.http.get<Array<AirportDto>>(this.baseUri + 'countrycode/' + (countryCode == null ? '' : encodeURIComponent(countryCode)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Nearest airport(s) by geo coordinates.
		 * Retrieve nearest airports by geo coordinates (latitude/longitude).
		 * Get nearest
		 * @param {string} latitude Latitude in decimals, lower than -90.0 and higher than 90.0 is not allowed.
		 * @param {string} longitude Longitude in decimals, lower than -180.0 and higher than 180.0 is not allowed.
		 * @param {string} maxDistanceInKm Maximum distance in kilometers, lower than 1 and higher than 500 is not allowed. If not set, max value is applied.
		 * @param {string} limit Limits the result, lower than 0 is not allowed. If not set, the result is not limited.
		 * @return {Array<NearestAirportDto>} OK
		 */
		NearestGetByLatitudeAndLongitudeAndMaxDistanceInKmAndLimit(latitude: string | null | undefined, longitude: string | null | undefined, maxDistanceInKm: string | null | undefined, limit: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<NearestAirportDto>> {
			return this.http.get<Array<NearestAirportDto>>(this.baseUri + 'nearest?latitude=' + (latitude == null ? '' : encodeURIComponent(latitude)) + '&longitude=' + (longitude == null ? '' : encodeURIComponent(longitude)) + '&maxDistanceInKm=' + (maxDistanceInKm == null ? '' : encodeURIComponent(maxDistanceInKm)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Nearest airport(s) by airport id.
		 * Retrieve nearest airports by station id.
		 * Get nearest/{id}
		 * @param {string} id Airport (IATA code) to search nearest airports for.
		 * @param {string} maxDistanceInKm Maximum distance in kilometers, lower than 1 and higher than 500 is not allowed. If not set, max value is applied.
		 * @param {string} limit Limits the result, lower than 0 is not allowed. If not set, the result is not limited.
		 * @return {Array<NearestAirportDto>} OK
		 */
		Nearest_idGetByMaxDistanceInKmAndLimit(id: string, maxDistanceInKm: string | null | undefined, limit: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<NearestAirportDto>> {
			return this.http.get<Array<NearestAirportDto>>(this.baseUri + 'nearest/' + (id == null ? '' : encodeURIComponent(id)) + '&maxDistanceInKm=' + (maxDistanceInKm == null ? '' : encodeURIComponent(maxDistanceInKm)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Airport by id.
		 * Retrieve airport by id.
		 * Get {id}
		 * @param {string} id Airport code (3-character IATA code).
		 * @return {AirportDetailsDto} OK
		 */
		_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<AirportDetailsDto> {
			return this.http.get<AirportDetailsDto>(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

