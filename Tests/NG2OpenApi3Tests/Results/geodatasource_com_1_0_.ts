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
		 * Get City name by using latitude and longitude
		 * Get city
		 * @return {void} Get response from longitude latitude lookup
		 */
		CityGetByKeyAndLngAndLatAndFormat(key: string, lng: number, lat: number, format: CityGetByKeyAndLngAndLatAndFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'city?key=' + (key == null ? '' : encodeURIComponent(key)) + '&lng=' + lng + '&lat=' + lat + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum CityGetByKeyAndLngAndLatAndFormatFormat { json = 'json', xml = 'xml' }

}

