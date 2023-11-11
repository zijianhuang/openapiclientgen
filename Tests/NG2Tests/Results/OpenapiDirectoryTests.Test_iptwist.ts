import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Request {
		ip?: string | null;
	}

	export interface Response {
		city?: string | null;
		country?: string | null;
		country_code?: string | null;
		ip?: string | null;
		latitude?: number | null;
		longitude?: number | null;
		state?: string | null;
		timezone?: string | null;
		zip?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Geolocate a given IP address
		 * Post 
		 * @param {Request} requestBody IP address
		 * @return {Response} Successful IP geolocation
		 */
		MainPost(requestBody: Request): Observable<Response> {
			return this.http.post<Response>(this.baseUri + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

