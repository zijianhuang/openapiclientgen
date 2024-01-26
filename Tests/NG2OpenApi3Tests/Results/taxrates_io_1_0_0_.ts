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
		 * Tax rates by Country Code
		 * Get request. This method returns all tax rates for country discovered based on country code. The country code must be 2 letters ISO 3166-1 alfa-2 country code (see <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes">here</a> for more information). You can use 'filter' parameter to narrow results to selected type of tax
		 * <p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
		 * <ul>
		 * <li>CombinedRate</li>
		 * <li>StateRate</li>
		 * <li>CountyRate</li>
		 * <li>CityRate</li>
		 * <li>SpecialRate</li>
		 * </ul>
		 * <pre><code class="js">var taxrates_endpoint = 'tax/countrycode';
		 * var taxrates_params = {'domain':'api.taxrates.io', 'country_code':'IE', 'product_code':'C010'};
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
		 * jQuery.each(data, function(k, v) {
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
		 * @param {string} product_codes_ Use one or many product code/s.
		 * @param {string} province  Use for Canada
		 * @return {TaxRatesByCountryCodeReturn} Success
		 */
		TaxRatesByCountryCode(domain: string | null | undefined, country_code: string | null | undefined, filter: string | null | undefined, zip: string | null | undefined, product_codes_: string | null | undefined, province : string | null | undefined, date: string | null | undefined): Observable<TaxRatesByCountryCodeReturn> {
			return this.http.get<TaxRatesByCountryCodeReturn>(this.baseUri + 'v1/tax/countrycode?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&country_code=' + (country_code == null ? '' : encodeURIComponent(country_code)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&zip=' + (zip == null ? '' : encodeURIComponent(zip)) + '&product_codes_=' + (product_codes_ == null ? '' : encodeURIComponent(product_codes_)) + '&province =' + (province  == null ? '' : encodeURIComponent(province )) + '&date=' + (date == null ? '' : encodeURIComponent(date)), {});
		}

		/**
		 * Tax rates by IP address
		 * Get request. This method returns all tax rates for country discovered on either your IP address or IP address param. The IP param is not required. When empty, the taxrates.io will try to discover your IP address and based on this will retrieve the tax rates. You can use 'filter' parameter to narrow results to selected type of tax
		 * <p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
		 * <ul>
		 * <li>CombinedRate</li>
		 * <li>StateRate</li>
		 * <li>CountyRate</li>
		 * <li>CityRate</li>
		 * <li>SpecialRate</li>
		 * </ul>
		 * <pre><code class="js">var taxrates_endpoint = 'tax/ip';
		 * var taxrates_params = {'domain':'api.taxrates.io', 'ip':'208.80.152.201', 'product_code':'C010'};
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
		 * jQuery.each(data, function(k, v) {
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
		 * @param {string} filter For US sales tax you can filter the tax type
		 * @param {string} zip For US sales tax a Zipcode must be proivded
		 * @param {string} product_code Your can filter your taxes by product code
		 * @return {Array<TaxRatesByIpAddressReturn>} An array of tax rates for VAT, GST & TAX
		 */
		TaxRatesByIpAddress(domain: string | null | undefined, ip: string | null | undefined, filter: string | null | undefined, zip: string | null | undefined, product_code: string | null | undefined): Observable<Array<TaxRatesByIpAddressReturn>> {
			return this.http.get<Array<TaxRatesByIpAddressReturn>>(this.baseUri + 'v1/tax/ip?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&zip=' + (zip == null ? '' : encodeURIComponent(zip)) + '&product_code=' + (product_code == null ? '' : encodeURIComponent(product_code)), {});
		}

		/**
		 * All tax rates
		 * <p>Get request. This method returns all tax rates configured on your account. Based on your country selection the endpoint will return all taxes for all countries. You can use the 'filter' parameter to narrow results to selected type of tax. Use 'zip' parameter when you have selected the United States.</p>
		 * <p>We have development an easy to use scheduler so you can call the API to get the rates every hour or day. Please click on the following link to see the <a href="https://gist.github.com/gregbird/cd904ff230cdf86253716aa351154edb">code on Github</a>.</p>
		 * <p><b>Please note</b> in cases when a US state doesn't have sales tax and when a product is tax exempt for a zip code or for a state the API response will be "null"</p>
		 * <p>To get a response you need to have selected a product code in your Taxrates.io dashboard, please see the Introduction section above for description of the different types of product codes.</p>
		 * <p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
		 * <ul>
		 * <li>CombinedRate</li>
		 * <li>StateRate</li>
		 * <li>CountyRate</li>
		 * <li>CityRate</li>
		 * <li>SpecialRate</li>
		 * </ul>
		 * <pre><code class="js">
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
		 * success: function (data, textStatus, jqXHR) {
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
		 * rates[i][2] = w.product_code;
		 * i++;
		 * }
		 * });
		 * }
		 * }).fail(function(xhr) {
		 * //Maintain your errors here
		 * return false;
		 * });
		 * var cursor = jqXHR.getResponseHeader('X-Cursor-Next');
		 * if (cursor) {
		 * // get next page...
		 * }
		 * return true;
		 * }else{
		 * //Not logged into taxrates.io
		 * //Maintain your errors here
		 * return false;
		 * }</code></pre>
		 * Get v3/tax/rates
		 * @param {string} domain Domain name: api.taxrates.io
		 * @param {string} filter You can filter your taxes by one of following types: 'standard', 'CombinedRate', 'CountyRate', 'CityRate', 'SPDRate' and 'MTARate'.
		 * @param {string} cursor Cursor shows from which record you want to get information. Default value is 0, next value can be retrieved from X-Cursor-Next header.
		 * @return {Array<AllTaxRatesReturn>} An array of locations with tax rates
		 */
		AllTaxRates(domain: string | null | undefined, filter: string | null | undefined, cursor: string | null | undefined, Product_code: string | null | undefined): Observable<Array<AllTaxRatesReturn>> {
			return this.http.get<Array<AllTaxRatesReturn>>(this.baseUri + 'v3/tax/rates?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&Product_code=' + (Product_code == null ? '' : encodeURIComponent(Product_code)), {});
		}
	}

	export interface TaxRatesByCountryCodeReturn {
		country_name?: string | null;
		TaxRatesByCountryCodeReturnTaxes?: Array<TaxRatesByCountryCodeReturnTaxes>;
	}
	export interface TaxRatesByCountryCodeReturnFormProperties {
		country_name: FormControl<string | null | undefined>,
	}
	export function CreateTaxRatesByCountryCodeReturnFormGroup() {
		return new FormGroup<TaxRatesByCountryCodeReturnFormProperties>({
			country_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxRatesByCountryCodeReturnTaxes {
		Country?: string | null;
		Type?: string | null;
		data_name?: string | null;
		data_value?: string | null;
	}
	export interface TaxRatesByCountryCodeReturnTaxesFormProperties {
		Country: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		data_name: FormControl<string | null | undefined>,
		data_value: FormControl<string | null | undefined>,
	}
	export function CreateTaxRatesByCountryCodeReturnTaxesFormGroup() {
		return new FormGroup<TaxRatesByCountryCodeReturnTaxesFormProperties>({
			Country: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			data_name: new FormControl<string | null | undefined>(undefined),
			data_value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxRatesByIpAddressReturn {
		country_name?: string | null;
		TaxRatesByIpAddressReturnTaxes?: Array<TaxRatesByIpAddressReturnTaxes>;
	}
	export interface TaxRatesByIpAddressReturnFormProperties {
		country_name: FormControl<string | null | undefined>,
	}
	export function CreateTaxRatesByIpAddressReturnFormGroup() {
		return new FormGroup<TaxRatesByIpAddressReturnFormProperties>({
			country_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxRatesByIpAddressReturnTaxes {
		Country?: string | null;
		Type?: string | null;
		data_name?: string | null;
		data_value?: string | null;
	}
	export interface TaxRatesByIpAddressReturnTaxesFormProperties {
		Country: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		data_name: FormControl<string | null | undefined>,
		data_value: FormControl<string | null | undefined>,
	}
	export function CreateTaxRatesByIpAddressReturnTaxesFormGroup() {
		return new FormGroup<TaxRatesByIpAddressReturnTaxesFormProperties>({
			Country: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			data_name: new FormControl<string | null | undefined>(undefined),
			data_value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AllTaxRatesReturn {
		id?: string | null;
		name?: string | null;
		AllTaxRatesReturnRates?: Array<AllTaxRatesReturnRates>;
		state?: string | null;
		zip?: string | null;
	}
	export interface AllTaxRatesReturnFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		zip: FormControl<string | null | undefined>,
	}
	export function CreateAllTaxRatesReturnFormGroup() {
		return new FormGroup<AllTaxRatesReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AllTaxRatesReturnRates {
		data_name?: string | null;
		data_value?: string | null;
		product_code?: string | null;
		type?: string | null;
	}
	export interface AllTaxRatesReturnRatesFormProperties {
		data_name: FormControl<string | null | undefined>,
		data_value: FormControl<string | null | undefined>,
		product_code: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateAllTaxRatesReturnRatesFormGroup() {
		return new FormGroup<AllTaxRatesReturnRatesFormProperties>({
			data_name: new FormControl<string | null | undefined>(undefined),
			data_value: new FormControl<string | null | undefined>(undefined),
			product_code: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

}

