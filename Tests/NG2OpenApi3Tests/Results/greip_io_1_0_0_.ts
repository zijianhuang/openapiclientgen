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
		 * ASNLookup endpoint: This method helps you lookup any AS Number. It returns the type, organisation details, routes, etc.
		 * Get ASNLookup
		 * @param {string} key Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.
		 * @param {string} asn The AS Number you want to lookup
		 * @param {string} isList Set this to true if you want to list all routes of both IPv4 and IPv6.
		 * @param {string} format Sets the format of the API response. JSON is the default format.
		 * @return {void} OK
		 */
		ASNLookupGetByKeyAndAsnAndIsListAndFormat(key: string, asn: string, isList: string | null | undefined, format: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ASNLookup?key=' + (key == null ? '' : encodeURIComponent(key)) + '&asn=' + (asn == null ? '' : encodeURIComponent(asn)) + '&isList=' + (isList == null ? '' : encodeURIComponent(isList)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method helps you validate any BIN/IIN number and retrieve the full details related to the bank, brand, type, scheme, country, etc.
		 * Get BINLookup
		 * @param {string} key Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.
		 * @param {string} bin The BIN/IIN you want to lookup/validate.
		 * @param {string} format Sets the format of the API response. JSON is the default format.
		 * @return {void} OK
		 */
		BINLookupGetByKeyAndBinAndFormat(key: string, bin: string, format: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'BINLookup?key=' + (key == null ? '' : encodeURIComponent(key)) + '&bin=' + (bin == null ? '' : encodeURIComponent(bin)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.
		 * Get BulkLookup
		 * @param {string} key Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.
		 * @param {string} ips The IP Addresses you want to lookup. It's a CSV (Comma Separated Values)
		 * @param {string} _params The modules you want to use of the request. It's a CSV (Comma Separated Values)
		 * @param {string} lang Used to inform the API to retrieve the response in your native language.
		 * @param {string} format Sets the format of the API response. JSON is the default format.
		 * @return {void} OK
		 */
		BulkLookupGetByKeyAndIpsAnd_paramsAndLangAndFormat(key: string, ips: string, _params: string | null | undefined, lang: string | null | undefined, format: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'BulkLookup?key=' + (key == null ? '' : encodeURIComponent(key)) + '&ips=' + (ips == null ? '' : encodeURIComponent(ips)) + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Country endpoint: Returns the information of a specific country by passing the `countrCode`.
		 * Get Country
		 * @param {string} key Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.
		 * @param {string} CountryCode The Country Code of the country you want to fetch it's data.
		 * @param {string} _params The modules you want to use of the request. It's a CSV (Comma Separated Values)
		 * @param {string} lang Used to inform the API to retrieve the response in your native language.
		 * @param {string} format Sets the format of the API response. JSON is the default format.
		 * @return {void} OK
		 */
		CountryGetByKeyAndCountryCodeAnd_paramsAndLangAndFormat(key: string, CountryCode: string, _params: string | null | undefined, lang: string | null | undefined, format: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Country?key=' + (key == null ? '' : encodeURIComponent(key)) + '&CountryCode=' + (CountryCode == null ? '' : encodeURIComponent(CountryCode)) + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the geolocation data of the visitor.
		 * Get GeoIP
		 * @param {string} key Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.
		 * @param {string} _params The modules you want to use of the request. It's a CSV (Comma Separated Values)
		 * @param {string} lang Used to inform the API to retrieve the response in your native language.
		 * @param {string} format Sets the format of the API response. JSON is the default format.
		 * @return {void} OK
		 */
		GeoIPGetByKeyAnd_paramsAndLangAndFormat(key: string, _params: string | null | undefined, lang: string | null | undefined, format: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'GeoIP?key=' + (key == null ? '' : encodeURIComponent(key)) + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the geolocation data of a specific IP Address.
		 * Get IPLookup
		 * @param {string} key Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.
		 * @param {string} ip The IP Address you want to lookup.
		 * @param {string} _params The modules you want to use of the request. It's a CSV (Comma Separated Values)
		 * @param {string} lang Used to inform the API to retrieve the response in your native language.
		 * @param {string} format Sets the format of the API response. JSON is the default format.
		 * @return {void} OK
		 */
		IPLookupGetByKeyAndIpAnd_paramsAndLangAndFormat(key: string, ip: string, _params: string | null | undefined, lang: string | null | undefined, format: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'IPLookup?key=' + (key == null ? '' : encodeURIComponent(key)) + '&ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&_params=' + (_params == null ? '' : encodeURIComponent(_params)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * badWords endpoint: Detects whether user inputs contain profanity or not.
		 * Get badWords
		 * @param {string} key Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.
		 * @param {string} text The text you want to check.
		 * @param {string} listBadWords Set to `yes` to list the bad-words as an Array.
		 * @param {string} scoreOnly Set to `yes` to return only the score of the text and whether it's safe or not.
		 * @param {string} format Sets the format of the API response. JSON is the default format.
		 * @return {void} OK
		 */
		BadWordsGetByKeyAndTextAndListBadWordsAndScoreOnlyAndFormat(key: string, text: string, listBadWords: string | null | undefined, scoreOnly: string | null | undefined, format: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'badWords?key=' + (key == null ? '' : encodeURIComponent(key)) + '&text=' + (text == null ? '' : encodeURIComponent(text)) + '&listBadWords=' + (listBadWords == null ? '' : encodeURIComponent(listBadWords)) + '&scoreOnly=' + (scoreOnly == null ? '' : encodeURIComponent(scoreOnly)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method can be used as an extra-layer of your system for validating email addresses.
		 * Get validateEmail
		 * @param {string} key Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.
		 * @param {string} email The Email Address you want to validate.
		 * @param {string} format Sets the format of the API response. JSON is the default format.
		 * @return {void} OK
		 */
		ValidateEmailGetByKeyAndEmailAndFormat(key: string, email: string, format: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'validateEmail?key=' + (key == null ? '' : encodeURIComponent(key)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method can be used as an extra-layer of your system for validating phone numbers.
		 * Get validatePhone
		 * @param {string} key Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.
		 * @param {string} phone The Phone Number you want to validate.
		 * @param {string} countryCode The ISO 3166-1 alpha-2 format of the country code of the phone number.
		 * @param {string} format Sets the format of the API response. JSON is the default format.
		 * @return {void} OK
		 */
		ValidatePhoneGetByKeyAndPhoneAndCountryCodeAndFormat(key: string, phone: string, countryCode: string, format: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'validatePhone?key=' + (key == null ? '' : encodeURIComponent(key)) + '&phone=' + (phone == null ? '' : encodeURIComponent(phone)) + '&countryCode=' + (countryCode == null ? '' : encodeURIComponent(countryCode)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

