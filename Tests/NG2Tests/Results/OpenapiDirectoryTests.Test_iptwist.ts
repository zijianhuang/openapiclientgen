import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Request {
		ip?: string | null;
	}
	export interface RequestFormProperties {
		ip: FormControl<string | null | undefined>,
	}
	export function CreateRequestFormGroup() {
		return new FormGroup<RequestFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface ResponseFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		country_code: FormControl<string | null | undefined>,
		ip: FormControl<string | null | undefined>,
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
		state: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,
		zip: FormControl<string | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

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

