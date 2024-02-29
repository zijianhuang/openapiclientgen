import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Country_read {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critical?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths?: number | null;
		lastChange?: Date | null;
		lastUpdate?: Date | null;

		/** Type: double */
		latitude?: number | null;

		/** Type: double */
		longitude?: number | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered?: number | null;
	}
	export interface Country_readFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critical: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths: FormControl<number | null | undefined>,
		lastChange: FormControl<Date | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,

		/** Type: double */
		latitude: FormControl<number | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered: FormControl<number | null | undefined>,
	}
	export function CreateCountry_readFormGroup() {
		return new FormGroup<Country_readFormProperties>({
			confirmed: new FormControl<number | null | undefined>(undefined),
			critical: new FormControl<number | null | undefined>(undefined),
			deaths: new FormControl<number | null | undefined>(undefined),
			lastChange: new FormControl<Date | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			recovered: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DailyReport_read {
	}
	export interface DailyReport_readFormProperties {
	}
	export function CreateDailyReport_readFormGroup() {
		return new FormGroup<DailyReport_readFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * getLatestCountryDataByName
		 * Get latest data for specific country. Country name and format are in parametars.
		 * Get country
		 * @param {string} name Name of the country
		 * @param {GetLatestCountryDataByNameFormat} format Format of the response
		 * @return {Array<GetLatestCountryDataByNameReturn>} Latest data about COVID-19 for selected country
		 */
		GetLatestCountryDataByName(name: string, format: GetLatestCountryDataByNameFormat | null | undefined): Observable<Array<GetLatestCountryDataByNameReturn>> {
			return this.http.get<Array<GetLatestCountryDataByNameReturn>>(this.baseUri + 'country?name=' + (name == null ? '' : encodeURIComponent(name)) + '&format=' + format, {});
		}

		/**
		 * getLatestAllCountries
		 * Get latest data from all countries.
		 * Get country/all
		 * @param {GetLatestCountryDataByNameFormat} format Format of the response
		 * @return {Array<GetLatestAllCountriesReturn>} Returns all countries with latest data about COVID-19
		 */
		GetLatestAllCountries(format: GetLatestCountryDataByNameFormat | null | undefined): Observable<Array<GetLatestAllCountriesReturn>> {
			return this.http.get<Array<GetLatestAllCountriesReturn>>(this.baseUri + 'country/all?format=' + format, {});
		}

		/**
		 * getLatestCountryDataByCode
		 * Get latest data for specific country. Country code and format are in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type.
		 * Get country/code
		 * @param {string} code Country code
		 * @param {GetLatestCountryDataByNameFormat} format Format of the response
		 * @return {Array<GetLatestCountryDataByCodeReturn>} Latest data about COVID-19 for selected country
		 */
		GetLatestCountryDataByCode(code: string, format: GetLatestCountryDataByNameFormat | null | undefined): Observable<Array<GetLatestCountryDataByCodeReturn>> {
			return this.http.get<Array<GetLatestCountryDataByCodeReturn>>(this.baseUri + 'country/code?code=' + (code == null ? '' : encodeURIComponent(code)) + '&format=' + format, {});
		}

		/**
		 * getListOfCountries
		 * Get name name, alpha-2, alpha-3 code, latitude and longitude for every country.
		 * Get help/countries
		 * @param {GetLatestCountryDataByNameFormat} format Format of the response
		 * @return {Array<GetListOfCountriesReturn>} Get name name, alpha-2, alpha-3 code, latitude and longitude for every country
		 */
		GetListOfCountries(format: GetLatestCountryDataByNameFormat | null | undefined): Observable<Array<GetListOfCountriesReturn>> {
			return this.http.get<Array<GetListOfCountriesReturn>>(this.baseUri + 'help/countries?format=' + format, {});
		}

		/**
		 * getDailyReportAllCountries
		 * Get daily report for all countries. Date is mandatory parametar. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter.
		 * Get report/country/all
		 * @param {string} date Date of the report.
		 * @param {GetDailyReportAllCountriesDate_format} date_format Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.
		 * @param {GetLatestCountryDataByNameFormat} format Format of the response
		 * @return {Array<GetDailyReportAllCountriesReturn>} Daily report for COVID-19 for selected country.
		 */
		GetDailyReportAllCountries(date: string, date_format: GetDailyReportAllCountriesDate_format | null | undefined, format: GetLatestCountryDataByNameFormat | null | undefined): Observable<Array<GetDailyReportAllCountriesReturn>> {
			return this.http.get<Array<GetDailyReportAllCountriesReturn>>(this.baseUri + 'report/country/all?date=' + (date == null ? '' : encodeURIComponent(date)) + '&date_format=' + date_format + '&format=' + format, {});
		}

		/**
		 * getDailyReportByCountryCode
		 * Get daily report for specific country. Country code and date are mandatory in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter
		 * Get report/country/code
		 * @param {string} code Country code. Country code is by ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type.
		 * @param {string} date Date of the report.
		 * @param {GetDailyReportAllCountriesDate_format} date_format Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.
		 * @param {GetLatestCountryDataByNameFormat} format Format of the response
		 * @return {Array<GetDailyReportByCountryCodeReturn>} Daily report for COVID-19 for selected country.
		 */
		GetDailyReportByCountryCode(code: string, date: string, date_format: GetDailyReportAllCountriesDate_format | null | undefined, format: GetLatestCountryDataByNameFormat | null | undefined): Observable<Array<GetDailyReportByCountryCodeReturn>> {
			return this.http.get<Array<GetDailyReportByCountryCodeReturn>>(this.baseUri + 'report/country/code?code=' + (code == null ? '' : encodeURIComponent(code)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&date_format=' + date_format + '&format=' + format, {});
		}

		/**
		 * getDailyReportByCountryName
		 * Get daily report for specific country. Country name and date are mandatory in parametars. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter
		 * Get report/country/name
		 * @param {string} name Country name.
		 * @param {string} date Date of the report.
		 * @param {GetDailyReportAllCountriesDate_format} date_format Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.
		 * @param {GetLatestCountryDataByNameFormat} format Format of the response
		 * @return {Array<GetDailyReportByCountryNameReturn>} Daily report for COVID-19 for selected country.
		 */
		GetDailyReportByCountryName(name: string, date: string, date_format: GetDailyReportAllCountriesDate_format | null | undefined, format: GetLatestCountryDataByNameFormat | null | undefined): Observable<Array<GetDailyReportByCountryNameReturn>> {
			return this.http.get<Array<GetDailyReportByCountryNameReturn>>(this.baseUri + 'report/country/name?name=' + (name == null ? '' : encodeURIComponent(name)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&date_format=' + date_format + '&format=' + format, {});
		}

		/**
		 * getDailyReportTotals
		 * Get daily report data for whole world.
		 * Get report/totals
		 * @param {string} date Date of the report. If you don't put this field all dates will be returned.
		 * @param {GetDailyReportAllCountriesDate_format} date_format Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format.
		 * @param {GetLatestCountryDataByNameFormat} format Format of the response. If you don't put this field JSON will be response format.
		 * @return {Array<GetDailyReportTotalsReturn>} Data about COVID-19 for whole world
		 */
		GetDailyReportTotals(date: string | null | undefined, date_format: GetDailyReportAllCountriesDate_format | null | undefined, format: GetLatestCountryDataByNameFormat | null | undefined): Observable<Array<GetDailyReportTotalsReturn>> {
			return this.http.get<Array<GetDailyReportTotalsReturn>>(this.baseUri + 'report/totals?date=' + (date == null ? '' : encodeURIComponent(date)) + '&date_format=' + date_format + '&format=' + format, {});
		}

		/**
		 * getLatestTotals
		 * Get latest data for whole world.
		 * Get totals
		 * @param {GetLatestCountryDataByNameFormat} format Format of the response
		 * @return {Array<GetLatestTotalsReturn>} Latest data about COVID-19 for whole world
		 */
		GetLatestTotals(format: GetLatestCountryDataByNameFormat | null | undefined): Observable<Array<GetLatestTotalsReturn>> {
			return this.http.get<Array<GetLatestTotalsReturn>>(this.baseUri + 'totals?format=' + format, {});
		}
	}

	export enum GetLatestCountryDataByNameFormat { json = 'json', xml = 'xml' }

	export interface GetLatestCountryDataByNameReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed?: number | null;
		country?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critical?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths?: number | null;
		lastChange?: Date | null;
		lastUpdate?: Date | null;

		/** Type: float */
		latitude?: number | null;

		/** Type: float */
		longitude?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered?: number | null;
	}
	export interface GetLatestCountryDataByNameReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed: FormControl<number | null | undefined>,
		country: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critical: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths: FormControl<number | null | undefined>,
		lastChange: FormControl<Date | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,

		/** Type: float */
		latitude: FormControl<number | null | undefined>,

		/** Type: float */
		longitude: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered: FormControl<number | null | undefined>,
	}
	export function CreateGetLatestCountryDataByNameReturnFormGroup() {
		return new FormGroup<GetLatestCountryDataByNameReturnFormProperties>({
			confirmed: new FormControl<number | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			critical: new FormControl<number | null | undefined>(undefined),
			deaths: new FormControl<number | null | undefined>(undefined),
			lastChange: new FormControl<Date | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			recovered: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLatestAllCountriesReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed?: number | null;
		country?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critical?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths?: number | null;
		lastChange?: Date | null;
		lastUpdate?: Date | null;

		/** Type: float */
		latitude?: number | null;

		/** Type: float */
		longitude?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered?: number | null;
	}
	export interface GetLatestAllCountriesReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed: FormControl<number | null | undefined>,
		country: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critical: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths: FormControl<number | null | undefined>,
		lastChange: FormControl<Date | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,

		/** Type: float */
		latitude: FormControl<number | null | undefined>,

		/** Type: float */
		longitude: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered: FormControl<number | null | undefined>,
	}
	export function CreateGetLatestAllCountriesReturnFormGroup() {
		return new FormGroup<GetLatestAllCountriesReturnFormProperties>({
			confirmed: new FormControl<number | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			critical: new FormControl<number | null | undefined>(undefined),
			deaths: new FormControl<number | null | undefined>(undefined),
			lastChange: new FormControl<Date | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			recovered: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLatestCountryDataByCodeReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed?: number | null;
		country?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critical?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths?: number | null;
		lastChange?: Date | null;
		lastUpdate?: Date | null;

		/** Type: float */
		latitude?: number | null;

		/** Type: float */
		longitude?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered?: number | null;
	}
	export interface GetLatestCountryDataByCodeReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed: FormControl<number | null | undefined>,
		country: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critical: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths: FormControl<number | null | undefined>,
		lastChange: FormControl<Date | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,

		/** Type: float */
		latitude: FormControl<number | null | undefined>,

		/** Type: float */
		longitude: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered: FormControl<number | null | undefined>,
	}
	export function CreateGetLatestCountryDataByCodeReturnFormGroup() {
		return new FormGroup<GetLatestCountryDataByCodeReturnFormProperties>({
			confirmed: new FormControl<number | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			critical: new FormControl<number | null | undefined>(undefined),
			deaths: new FormControl<number | null | undefined>(undefined),
			lastChange: new FormControl<Date | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			recovered: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetListOfCountriesReturn {
		'alpha-2-code'?: string | null;
		'alpha-3-code'?: string | null;

		/** Type: float */
		latitude?: number | null;

		/** Type: float */
		longitude?: number | null;
		name?: string | null;
	}
	export interface GetListOfCountriesReturnFormProperties {
		'alpha-2-code': FormControl<string | null | undefined>,
		'alpha-3-code': FormControl<string | null | undefined>,

		/** Type: float */
		latitude: FormControl<number | null | undefined>,

		/** Type: float */
		longitude: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetListOfCountriesReturnFormGroup() {
		return new FormGroup<GetListOfCountriesReturnFormProperties>({
			'alpha-2-code': new FormControl<string | null | undefined>(undefined),
			'alpha-3-code': new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetDailyReportAllCountriesDate_format { 'YYYY-MM-DD' = 'YYYY-MM-DD', 'YYYY-DD-MM' = 'YYYY-DD-MM', 'DD-MM-YYYY' = 'DD-MM-YYYY', 'MM-DD-YYYY' = 'MM-DD-YYYY' }

	export interface GetDailyReportAllCountriesReturn {
		country?: string | null;
		date?: string | null;

		/** Type: float */
		latitude?: number | null;

		/** Type: float */
		longitude?: number | null;
		GetDailyReportAllCountriesReturnProvince?: Array<GetDailyReportAllCountriesReturnProvince>;
	}
	export interface GetDailyReportAllCountriesReturnFormProperties {
		country: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,

		/** Type: float */
		latitude: FormControl<number | null | undefined>,

		/** Type: float */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGetDailyReportAllCountriesReturnFormGroup() {
		return new FormGroup<GetDailyReportAllCountriesReturnFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDailyReportAllCountriesReturnProvince {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		active?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered?: number | null;
	}
	export interface GetDailyReportAllCountriesReturnProvinceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		active: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered: FormControl<number | null | undefined>,
	}
	export function CreateGetDailyReportAllCountriesReturnProvinceFormGroup() {
		return new FormGroup<GetDailyReportAllCountriesReturnProvinceFormProperties>({
			active: new FormControl<number | null | undefined>(undefined),
			confirmed: new FormControl<number | null | undefined>(undefined),
			deaths: new FormControl<number | null | undefined>(undefined),
			recovered: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDailyReportByCountryCodeReturn {
		country?: string | null;
		date?: string | null;

		/** Type: float */
		latitude?: number | null;

		/** Type: float */
		longitude?: number | null;
		GetDailyReportByCountryCodeReturnProvince?: Array<GetDailyReportByCountryCodeReturnProvince>;
	}
	export interface GetDailyReportByCountryCodeReturnFormProperties {
		country: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,

		/** Type: float */
		latitude: FormControl<number | null | undefined>,

		/** Type: float */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGetDailyReportByCountryCodeReturnFormGroup() {
		return new FormGroup<GetDailyReportByCountryCodeReturnFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDailyReportByCountryCodeReturnProvince {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		active?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered?: number | null;
	}
	export interface GetDailyReportByCountryCodeReturnProvinceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		active: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered: FormControl<number | null | undefined>,
	}
	export function CreateGetDailyReportByCountryCodeReturnProvinceFormGroup() {
		return new FormGroup<GetDailyReportByCountryCodeReturnProvinceFormProperties>({
			active: new FormControl<number | null | undefined>(undefined),
			confirmed: new FormControl<number | null | undefined>(undefined),
			deaths: new FormControl<number | null | undefined>(undefined),
			recovered: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDailyReportByCountryNameReturn {
		country?: string | null;
		date?: string | null;

		/** Type: float */
		latitude?: number | null;

		/** Type: float */
		longitude?: number | null;
		GetDailyReportByCountryNameReturnProvince?: Array<GetDailyReportByCountryNameReturnProvince>;
	}
	export interface GetDailyReportByCountryNameReturnFormProperties {
		country: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,

		/** Type: float */
		latitude: FormControl<number | null | undefined>,

		/** Type: float */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGetDailyReportByCountryNameReturnFormGroup() {
		return new FormGroup<GetDailyReportByCountryNameReturnFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDailyReportByCountryNameReturnProvince {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		active?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered?: number | null;
	}
	export interface GetDailyReportByCountryNameReturnProvinceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		active: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered: FormControl<number | null | undefined>,
	}
	export function CreateGetDailyReportByCountryNameReturnProvinceFormGroup() {
		return new FormGroup<GetDailyReportByCountryNameReturnProvinceFormProperties>({
			active: new FormControl<number | null | undefined>(undefined),
			confirmed: new FormControl<number | null | undefined>(undefined),
			deaths: new FormControl<number | null | undefined>(undefined),
			recovered: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDailyReportTotalsReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		active?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critical?: number | null;
		date?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered?: number | null;
	}
	export interface GetDailyReportTotalsReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		active: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critical: FormControl<number | null | undefined>,
		date: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered: FormControl<number | null | undefined>,
	}
	export function CreateGetDailyReportTotalsReturnFormGroup() {
		return new FormGroup<GetDailyReportTotalsReturnFormProperties>({
			active: new FormControl<number | null | undefined>(undefined),
			confirmed: new FormControl<number | null | undefined>(undefined),
			critical: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			deaths: new FormControl<number | null | undefined>(undefined),
			recovered: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLatestTotalsReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critical?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths?: number | null;
		lastChange?: Date | null;
		lastUpdate?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered?: number | null;
	}
	export interface GetLatestTotalsReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		confirmed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critical: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		deaths: FormControl<number | null | undefined>,
		lastChange: FormControl<Date | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		recovered: FormControl<number | null | undefined>,
	}
	export function CreateGetLatestTotalsReturnFormGroup() {
		return new FormGroup<GetLatestTotalsReturnFormProperties>({
			confirmed: new FormControl<number | null | undefined>(undefined),
			critical: new FormControl<number | null | undefined>(undefined),
			deaths: new FormControl<number | null | undefined>(undefined),
			lastChange: new FormControl<Date | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			recovered: new FormControl<number | null | undefined>(undefined),
		});

	}

}

