import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address {

		/** Apartment number if any */
		apartment_number?: string | null;

		/** City name */
		city?: string | null;

		/** Country name */
		country?: string | null;

		/** City zip code */
		postal_code?: string | null;

		/** Province or state */
		state?: string | null;

		/** Street */
		street?: string | null;

		/** Street number */
		street_number?: string | null;
	}
	export interface AddressFormProperties {

		/** Apartment number if any */
		apartment_number: FormControl<string | null | undefined>,

		/** City name */
		city: FormControl<string | null | undefined>,

		/** Country name */
		country: FormControl<string | null | undefined>,

		/** City zip code */
		postal_code: FormControl<string | null | undefined>,

		/** Province or state */
		state: FormControl<string | null | undefined>,

		/** Street */
		street: FormControl<string | null | undefined>,

		/** Street number */
		street_number: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			apartment_number: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
			street_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		fields?: string | null;
		message?: string | null;
	}
	export interface ErrorFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		fields: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			fields: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Location {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Country name */
		name?: string | null;
		rates?: Array<TaxRate>;

		/** State/province name if exists */
		state?: string | null;

		/** Zipcode */
		zip?: string | null;
	}
	export interface LocationFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Country name */
		name: FormControl<string | null | undefined>,

		/** State/province name if exists */
		state: FormControl<string | null | undefined>,

		/** Zipcode */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxRate {

		/** The tax name and description (VAT, GST, PIT, CIT etc) */
		data_name?: string | null;

		/** The tax value in percents */
		data_value?: string | null;

		/** The tax type */
		type?: string | null;
	}
	export interface TaxRateFormProperties {

		/** The tax name and description (VAT, GST, PIT, CIT etc) */
		data_name: FormControl<string | null | undefined>,

		/** The tax value in percents */
		data_value: FormControl<string | null | undefined>,

		/** The tax type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTaxRateFormGroup() {
		return new FormGroup<TaxRateFormProperties>({
			data_name: new FormControl<string | null | undefined>(undefined),
			data_value: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Rates {

		/** The country name */
		country_name?: string | null;
		taxes?: Array<Tax>;
	}
	export interface RatesFormProperties {

		/** The country name */
		country_name: FormControl<string | null | undefined>,
	}
	export function CreateRatesFormGroup() {
		return new FormGroup<RatesFormProperties>({
			country_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tax {

		/** The country name */
		Country?: string | null;

		/** The tax type */
		Type?: string | null;

		/** The tax name and description (VAT, GST, PIT, CIT etc) */
		data_name?: string | null;

		/** The tax value in percents */
		data_value?: string | null;
	}
	export interface TaxFormProperties {

		/** The country name */
		Country: FormControl<string | null | undefined>,

		/** The tax type */
		Type: FormControl<string | null | undefined>,

		/** The tax name and description (VAT, GST, PIT, CIT etc) */
		data_name: FormControl<string | null | undefined>,

		/** The tax value in percents */
		data_value: FormControl<string | null | undefined>,
	}
	export function CreateTaxFormGroup() {
		return new FormGroup<TaxFormProperties>({
			Country: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			data_name: new FormControl<string | null | undefined>(undefined),
			data_value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get tax rates by address
		 * This endpoint returns tax rates for the country based on the address provided <pre><code class="js">var taxrates_endpoint = 'tax/address';
		 * var taxrates_params = '?domain=api.taxrates.io';
		 * var taxrates_url = '/api/v1/';
		 * var taxrates_body = '{
		 * "street":"MyStreetName",
		 * "street_number":"107",
		 * "apartment_number":"d34",
		 * "city":"Dublin",
		 * "zip":"84534"
		 * "state":"",
		 * "country":"Ireland"
		 * }';
		 * if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
		 * jQuery.support.cors = true;
		 * jQuery.ajax({
		 * url: taxrates_url+taxrates_endpoint+taxrates_params,
		 * type: 'post',
		 * method: 'post',
		 * dataType: "json",
		 * data: taxrates_body,
		 * beforeSend: function (request) {
		 * request.withCredentials = true;
		 * request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
		 * },
		 * headers: {
		 * "accept": "application/json"
		 * },
		 * contentType: 'application/json; charset=utf-8',
		 * success: function (data) {
		 * //Maintain errors inside success because the API may return 200 in general, but different code inside
		 * if(data.ErrorCode=='404' || data.ErrorCode=='500'){
		 * //Maintain errors here
		 * console.log(data.ErrorMessage);
		 * return false;
		 * }else{
		 * var rates = [];
		 * var i=0;
		 * jQuery.each(data.Rates, function(k, v) {
		 * if(v.hasOwnProperty("taxes")){
		 * jQuery.each(v.taxes, function(m, w) {
		 * rates[i] = [];
		 * //Only showing standard rate type
		 * if( w.Type == "standard" ){
		 * rates[i][0] = w.Country;
		 * rates[i][1] = w.Type;
		 * rates[i][2] = w.data_value;
		 * i++;
		 * }
		 * });
		 * }
		 * //Now you have all your rates inside rates variable.
		 * }).fail(function(xhr) {
		 * //Maintain your errors here
		 * return false;
		 * });
		 * return true;
		 * }else{
		 * //Not logged into taxrates.io
		 * //Maintain your errors here
		 * return false;
		 * }</code></pre>
		 * Post v1/tax/byaddress
		 * @param {string} domain Domain name: api.taxrates.io
		 * @param {string} filter You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.
		 * @param {Address} requestBody Address
		 * @return {Rates} Success
		 */
		Tax_servicePostByDomainAndFilter(domain: string, filter: string | null | undefined, requestBody: Address): Observable<Rates> {
			return this.http.post<Rates>(this.baseUri + 'v1/tax/byaddress?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns tax rate for selected country
		 * This endpoint returns all available tax rates for selected country <pre><code class="js">var taxrates_endpoint = 'tax/countrycode';
		 * var taxrates_params = {'domain':'api.taxrates.io', 'country_code':'IE'};
		 * var taxrates_url = '/api/v1/';
		 * if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
		 * jQuery.support.cors = true;
		 * jQuery.ajax({
		 * url: taxrates_url+taxrates_endpoint,
		 * type: 'get',
		 * method: 'get',
		 * dataType: "json",
		 * data: taxrates_params,
		 * beforeSend: function (request) {
		 * request.withCredentials = true;
		 * request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
		 * },
		 * headers: {
		 * "accept": "application/json"
		 * },
		 * contentType: 'application/json; charset=utf-8',
		 * success: function (data) {
		 * //Maintain errors inside success because the API may return 200 in general, but different code inside
		 * if(data.ErrorCode=='404' || data.ErrorCode=='500'){
		 * //Maintain errors here
		 * console.log(data.ErrorMessage);
		 * return false;
		 * }else{
		 * var rates = [];
		 * var i=0;
		 * jQuery.each(data.Rates, function(k, v) {
		 * if(v.hasOwnProperty("taxes")){
		 * jQuery.each(v.taxes, function(m, w) {
		 * rates[i] = [];
		 * //Only showing standard rate type
		 * if( w.Type == "standard" ){
		 * rates[i][0] = w.Country;
		 * rates[i][1] = w.Type;
		 * rates[i][2] = w.data_value;
		 * i++;
		 * }
		 * });
		 * }
		 * //Now you have all your rates inside rates variable.
		 * }).fail(function(xhr) {
		 * //Maintain your errors here
		 * return false;
		 * });
		 * return true;
		 * }else{
		 * //Not logged into taxrates.io
		 * //Maintain your errors here
		 * return false;
		 * }</code></pre>
		 * Get v1/tax/countrycode
		 * @param {string} domain Domain name: api.taxrates.io
		 * @param {string} country_code Country code alpha 2
		 * @param {string} filter You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.
		 * @param {string} zip You must provide a zip code if one of your selected countries is United States and you've had selected a state on your Taxrates.io member's dashboard.
		 * @return {Rates} Success
		 */
		Tax_serviceGetByDomainAndCountry_codeAndFilterAndZip(domain: string, country_code: string, filter: string | null | undefined, zip: string | null | undefined): Observable<Rates> {
			return this.http.get<Rates>(this.baseUri + 'v1/tax/countrycode?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&country_code=' + (country_code == null ? '' : encodeURIComponent(country_code)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&zip=' + (zip == null ? '' : encodeURIComponent(zip)), {});
		}

		/**
		 * Tax rates by geolocation based on Customer IP address
		 * This endpoint will return tax rates for country discovered based on Customer's IP address <pre><code class="js">var taxrates_endpoint = 'tax/ip';
		 * var taxrates_params = {'domain':'api.taxrates.io', 'ip':'208.80.152.201'};
		 * var taxrates_url = '/api/v1/';
		 * if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
		 * jQuery.support.cors = true;
		 * jQuery.ajax({
		 * url: taxrates_url+taxrates_endpoint,
		 * type: 'get',
		 * method: 'get',
		 * dataType: "json",
		 * data: taxrates_params,
		 * beforeSend: function (request) {
		 * request.withCredentials = true;
		 * request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
		 * },
		 * headers: {
		 * "accept": "application/json"
		 * },
		 * contentType: 'application/json; charset=utf-8',
		 * success: function (data) {
		 * //Maintain errors inside success because the API may return 200 in general, but different code inside
		 * if(data.ErrorCode=='404' || data.ErrorCode=='500'){
		 * //Maintain errors here
		 * console.log(data.ErrorMessage);
		 * return false;
		 * }else{
		 * var rates = [];
		 * var i=0;
		 * jQuery.each(data.Rates, function(k, v) {
		 * if(v.hasOwnProperty("taxes")){
		 * jQuery.each(v.taxes, function(m, w) {
		 * rates[i] = [];
		 * //Only showing standard rate type
		 * if( w.Type == "standard" ){
		 * rates[i][0] = w.Country;
		 * rates[i][1] = w.Type;
		 * rates[i][2] = w.data_value;
		 * i++;
		 * }
		 * });
		 * }
		 * //Now you have all your rates inside rates variable.
		 * }).fail(function(xhr) {
		 * //Maintain your errors here
		 * return false;
		 * });
		 * return true;
		 * }else{
		 * //Not logged into taxrates.io
		 * //Maintain your errors here
		 * return false;
		 * }</code></pre>
		 * Get v1/tax/ip
		 * @param {string} domain Domain name: api.taxrates.io
		 * @param {string} ip Customer's IP address
		 * @param {string} filter You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.
		 * @param {string} zip You must provide a zip code if one of your selected countries is United States and you've had selected a state on your Taxrates.io member's dashboard.
		 * @return {Array<Rates>} An array of tax rates for VAT, GST & TAX
		 */
		Tax_serviceGetByDomainAndIpAndFilterAndZip(domain: string, ip: string, filter: string | null | undefined, zip: string | null | undefined): Observable<Array<Rates>> {
			return this.http.get<Array<Rates>>(this.baseUri + 'v1/tax/ip?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&zip=' + (zip == null ? '' : encodeURIComponent(zip)), {});
		}

		/**
		 * Get all tax rates
		 * This method returns all tax rates configured on Member's account using cursor. Use X-Cursor-Next header to recursively read all rates. Max limit is 500 records per request. <pre><code class="js">
		 * var taxrates_endpoint = 'tax/rates';
		 * var taxrates_params = {'domain':'api.taxrates.io'};
		 * var taxrates_url = '/api/v3/';
		 * if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
		 * jQuery.support.cors = true;
		 * jQuery.ajax({
		 * url: taxrates_url+taxrates_endpoint,
		 * type: 'get',
		 * method: 'get',
		 * dataType: "json",
		 * data: taxrates_params,
		 * beforeSend: function (request) {
		 * request.withCredentials = true;
		 * request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
		 * },
		 * headers: {
		 * "accept": "application/json"
		 * },
		 * contentType: 'application/json; charset=utf-8',
		 * success: function (data) {
		 * //Maintain errors inside success because the API may return 200 in general, but different code inside
		 * if(data.ErrorCode=='404' || data.ErrorCode=='500'){
		 * //Maintain errors here
		 * console.log(data.ErrorMessage);
		 * return false;
		 * }else{
		 * var rates = [];
		 * var i=0;
		 * var taxrates_range = '';
		 * jQuery.each(data, function(k, v) {
		 * if(v.hasOwnProperty("rates")){
		 * jQuery.each(v.rates, function(m, w) {
		 * rates[i] = [];
		 * //Only showing standard rate type
		 * if( w.Type == "standard" ){
		 * rates[i][0] = w.Type;
		 * rates[i][1] = w.data_value;
		 * i++;
		 * }
		 * });
		 * }
		 * //Now you have all your rates inside rates variable.
		 * }).fail(function(xhr) {
		 * //Maintain your errors here
		 * return false;
		 * });
		 * return true;
		 * }else{
		 * //Not logged into taxrates.io
		 * //Maintain your errors here
		 * return false;
		 * }</code></pre>
		 * Get v3/tax/rates
		 * @param {string} domain Domain name: api.taxrates.io
		 * @param {string} filter You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.
		 * @param {string} cursor Cursor shows from which record you want to get information. Default value is 0, next value can be retrieved from X-Cursor-Next header.
		 * @return {Array<Location>} An array of locations with tax rates
		 */
		Tax_serviceGetByDomainAndFilterAndCursor(domain: string, filter: string | null | undefined, cursor: string | null | undefined): Observable<Array<Location>> {
			return this.http.get<Array<Location>>(this.baseUri + 'v3/tax/rates?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)), {});
		}
	}

}

