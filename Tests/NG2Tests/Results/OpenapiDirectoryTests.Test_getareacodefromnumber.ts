import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets area code information from a telephone number
		 * The area code will be parsed out of a telephone number and used to retrieve information about the area code.
		 * Get getareacodefromnumber
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} number Telephone number to retrieve area code information
		 * @return {GetareacodefromnumberGetByLicenseAndNumberReturn} Telephone number area code information
		 */
		GetareacodefromnumberGetByLicenseAndNumber(license: string, number: string, headersHandler?: () => HttpHeaders): Observable<GetareacodefromnumberGetByLicenseAndNumberReturn> {
			return this.http.get<GetareacodefromnumberGetByLicenseAndNumberReturn>(this.baseUri + 'getareacodefromnumber?license=' + (license == null ? '' : encodeURIComponent(license)) + '&number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface GetareacodefromnumberGetByLicenseAndNumberReturn {
		Abbreviation?: string;
		AreaCode?: string;
		Code?: string;
		Credits?: string;
		Locale?: string;
		PrimaryCity?: string;
	}

}

