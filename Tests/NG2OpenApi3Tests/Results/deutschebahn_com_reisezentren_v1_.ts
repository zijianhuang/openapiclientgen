import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Error {
		code?: number | null;
		message?: string | null;
	}
	export interface ErrorFormProperties {
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TravelCenter {

		/** Street address of travel center */
		address?: string | null;

		/** City of travel center */
		city?: string | null;

		/** Identifying number */
		id?: number | null;

		/** Latitude of travel center location */
		lat?: number | null;

		/** Longitude of travel center location */
		lon?: number | null;

		/** Name of travel center */
		name?: string | null;

		/** Opening times of the travel center, ordered by week day */
		openingTimes?: TravelCenterOpeningTimes;

		/** Post code of travel center */
		postCode?: string | null;

		/** Type of travel center */
		type?: TravelCenterType | null;
	}
	export interface TravelCenterFormProperties {

		/** Street address of travel center */
		address: FormControl<string | null | undefined>,

		/** City of travel center */
		city: FormControl<string | null | undefined>,

		/** Identifying number */
		id: FormControl<number | null | undefined>,

		/** Latitude of travel center location */
		lat: FormControl<number | null | undefined>,

		/** Longitude of travel center location */
		lon: FormControl<number | null | undefined>,

		/** Name of travel center */
		name: FormControl<string | null | undefined>,

		/** Post code of travel center */
		postCode: FormControl<string | null | undefined>,

		/** Type of travel center */
		type: FormControl<TravelCenterType | null | undefined>,
	}
	export function CreateTravelCenterFormGroup() {
		return new FormGroup<TravelCenterFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postCode: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TravelCenterType | null | undefined>(undefined),
		});

	}

	export interface TravelCenterOpeningTimes {
		fri?: Array<string>;
		mon?: Array<string>;
		sat?: Array<string>;
		sun?: Array<string>;
		thu?: Array<string>;
		tue?: Array<string>;
		wed?: Array<string>;
	}
	export interface TravelCenterOpeningTimesFormProperties {
	}
	export function CreateTravelCenterOpeningTimesFormGroup() {
		return new FormGroup<TravelCenterOpeningTimesFormProperties>({
		});

	}

	export enum TravelCenterType { Reisezentrum = 'Reisezentrum', 'Mobility Center' = 'Mobility Center' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all station infos
		 * Get all station infos
		 * Get reisezentren
		 * @param {string} name A station name or part of it
		 * @return {Array<TravelCenter>} List has been created
		 */
		ReisezentrenGetByName(name: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<TravelCenter>> {
			return this.http.get<Array<TravelCenter>>(this.baseUri + 'reisezentren?name=' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get information about a station near a location
		 * Get information about a station near a location
		 * Get reisezentren/loc/{lat}/{lon}
		 * @param {number} lat Latitude
		 * @param {number} lon Longitude
		 * @return {TravelCenter} A station was found
		 */
		ReisezentrenLoc_lat_lonGet(lat: number, lon: number, headersHandler?: () => HttpHeaders): Observable<TravelCenter> {
			return this.http.get<TravelCenter>(this.baseUri + 'reisezentren/loc/' + lat + '/' + lon, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get stations in a given radius
		 * Get stations in a given radius
		 * Get reisezentren/loc/{lat}/{lon}/{dist}
		 * @param {number} lat Latitude
		 * @param {number} lon Longitude
		 * @param {number} dist Radius
		 * @return {TravelCenter} A station was found
		 */
		ReisezentrenLoc_lat_lon_distGet(lat: number, lon: number, dist: number, headersHandler?: () => HttpHeaders): Observable<TravelCenter> {
			return this.http.get<TravelCenter>(this.baseUri + 'reisezentren/loc/' + lat + '/' + lon + '/' + dist, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get information about a specific station
		 * Get information about a specific station
		 * Get reisezentren/{id}
		 * @param {string} id Station id
		 * @return {void} The travel center was found
		 */
		Reisezentren_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reisezentren/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

