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
		 * Returns images
		 * Returns the picture of the day
		 * Get apod
		 * @param {string} date The date of the APOD image to retrieve
		 * @param {boolean} hd Retrieve the URL for the high resolution image
		 * @return {Array<string>} successful operation
		 */
		Request_tagGetByDateAndHd(date: string | null | undefined, hd: boolean | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'apod?date=' + (date == null ? '' : encodeURIComponent(date)) + '&hd=' + hd, {});
		}
	}

}

