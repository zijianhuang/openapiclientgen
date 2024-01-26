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
		 * Returns all regions present in Tanzania
		 * Fetches all regions present in Tanzania and then return a response as json
		 * Get {country}
		 * @param {string} country Country name in lowercase eg (Tanzania)
		 * @return {void} Successful response
		 */
		Tanzania_regions(country: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (country == null ? '' : encodeURIComponent(country)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all districts in region
		 * Returns a post code and all districts in a specified region
		 * Get {country}/{region}
		 * @param {string} country Country name in lowercase eg( tanzania)
		 * @param {string} region Name of the region eg (Mbeya)
		 * @return {void} Successful response
		 */
		Districts_in_a_region(country: string, region: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (country == null ? '' : encodeURIComponent(country)) + '/' + (region == null ? '' : encodeURIComponent(region)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all wards in a district
		 * Returns all wards in a  specified district and district postcode
		 * Get {country}/{region}/{district}
		 * @param {string} country Country name in lowercase eg( tanzania)
		 * @param {string} region Name of the region eg (Mbeya)
		 * @param {string} district Name of the District eg (Rungwe)
		 * @return {void} Successful response
		 */
		Wards_in_a_district(country: string, region: string, district: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (country == null ? '' : encodeURIComponent(country)) + '/' + (region == null ? '' : encodeURIComponent(region)) + '/' + (district == null ? '' : encodeURIComponent(district)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all streets in a ward
		 * Returns all streets in a specified ward and ward postcode
		 * Get {country}/{region}/{district}/{ward}
		 * @param {string} country Country name in lowercase eg( tanzania)
		 * @param {string} region Name of the region eg (Mbeya)
		 * @param {string} district Name of the District eg (Rungwe)
		 * @param {string} ward Name of the Ward eg (Kiwira)
		 * @return {void} Successful response
		 */
		Streets_in_a_ward(country: string, region: string, district: string, ward: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (country == null ? '' : encodeURIComponent(country)) + '/' + (region == null ? '' : encodeURIComponent(region)) + '/' + (district == null ? '' : encodeURIComponent(district)) + '/' + (ward == null ? '' : encodeURIComponent(ward)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all neighborhood in a street
		 * Returns all neighborhood in a specified street
		 * Get {country}/{region}/{district}/{ward}/{street}
		 * @param {string} country Country name in lowercase eg( tanzania)
		 * @param {string} region Name of the region eg (Mbeya)
		 * @param {string} district Name of the District eg (Rungwe)
		 * @param {string} ward Name of the Ward eg (Kiwira)
		 * @param {string} street Name of the Street eg (Ilundo)
		 * @return {void} Successful response
		 */
		Neighborhood_in_a_street_(country: string, region: string, district: string, ward: string, street: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (country == null ? '' : encodeURIComponent(country)) + '/' + (region == null ? '' : encodeURIComponent(region)) + '/' + (district == null ? '' : encodeURIComponent(district)) + '/' + (ward == null ? '' : encodeURIComponent(ward)) + '/' + (street == null ? '' : encodeURIComponent(street)) + '', { observe: 'response', responseType: 'text' });
		}
	}

}

