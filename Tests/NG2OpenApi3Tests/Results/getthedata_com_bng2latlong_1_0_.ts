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
		 * Returns latitude and longitude for the given easting and northing.
		 * Takes an OSGB36 easting and northing (British National Grid) and returns the geographically equivalent WGS84 latitude and longitude.
		 * #### A successful request returns the following fields:
		 * * status - this will be `ok`
		 * * easting - the easting provided in the request
		 * * northing - the northing provided in the request
		 * * latitude - the latitude of the converted coordinates
		 * * longitude - the longitude of the converted coordinates
		 * #### An unsuccessful request returns the following fields:
		 * * status - this will be `error`
		 * * error - an error message
		 * Get bng2latlong/{easting}/{northing}
		 * @param {number} easting An OSGB36 (British National Grid) easting.
		 * @param {number} northing An OSGB36 (British National Grid) northing.
		 * @return {Bng2latlong_easting_northingGetReturn} A JSON object containing the original easting and northing, and the converted latitude and longitude.
		 */
		Bng2latlong_easting_northingGet(easting: number, northing: number, headersHandler?: () => HttpHeaders): Observable<Bng2latlong_easting_northingGetReturn> {
			return this.http.get<Bng2latlong_easting_northingGetReturn>(this.baseUri + 'bng2latlong/' + easting + '/' + northing, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface Bng2latlong_easting_northingGetReturn {
		easting?: number | null;
		error?: string | null;
		latitude?: number | null;
		longitude?: number | null;
		northing?: number | null;
		status?: Bng2latlong_easting_northingGetReturnStatus | null;
	}
	export interface Bng2latlong_easting_northingGetReturnFormProperties {
		easting: FormControl<number | null | undefined>,
		error: FormControl<string | null | undefined>,
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
		northing: FormControl<number | null | undefined>,
		status: FormControl<Bng2latlong_easting_northingGetReturnStatus | null | undefined>,
	}
	export function CreateBng2latlong_easting_northingGetReturnFormGroup() {
		return new FormGroup<Bng2latlong_easting_northingGetReturnFormProperties>({
			easting: new FormControl<number | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			northing: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Bng2latlong_easting_northingGetReturnStatus | null | undefined>(undefined),
		});

	}

	export enum Bng2latlong_easting_northingGetReturnStatus { ok = 'ok', error = 'error' }

}

