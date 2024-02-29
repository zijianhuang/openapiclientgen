import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface API_Key_Info {

		/** State */
		customer_email?: string | null;

		/** State */
		customer_name?: string | null;

		/** State */
		expires?: string | null;

		/** State */
		item_id?: string | null;

		/** State */
		item_name?: string | null;

		/** State */
		license?: string | null;

		/** State */
		license_limit?: string | null;

		/** State */
		price_id?: string | null;

		/** State */
		success?: string | null;
	}
	export interface API_Key_InfoFormProperties {

		/** State */
		customer_email: FormControl<string | null | undefined>,

		/** State */
		customer_name: FormControl<string | null | undefined>,

		/** State */
		expires: FormControl<string | null | undefined>,

		/** State */
		item_id: FormControl<string | null | undefined>,

		/** State */
		item_name: FormControl<string | null | undefined>,

		/** State */
		license: FormControl<string | null | undefined>,

		/** State */
		license_limit: FormControl<string | null | undefined>,

		/** State */
		price_id: FormControl<string | null | undefined>,

		/** State */
		success: FormControl<string | null | undefined>,
	}
	export function CreateAPI_Key_InfoFormGroup() {
		return new FormGroup<API_Key_InfoFormProperties>({
			customer_email: new FormControl<string | null | undefined>(undefined),
			customer_name: new FormControl<string | null | undefined>(undefined),
			expires: new FormControl<string | null | undefined>(undefined),
			item_id: new FormControl<string | null | undefined>(undefined),
			item_name: new FormControl<string | null | undefined>(undefined),
			license: new FormControl<string | null | undefined>(undefined),
			license_limit: new FormControl<string | null | undefined>(undefined),
			price_id: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Domains {
		A?: Array<string>;
		CNAME?: Array<string>;
		MX?: Array<MX_records>;
		NS?: Array<string>;
		TXT?: Array<string>;

		/** Hosting Country */
		country?: string | null;

		/** Domain creation date */
		create_date?: Date | null;

		/** Domain name */
		domain?: string | null;

		/** If Domain is Dead */
		isDead?: string | null;

		/** Domain last update date */
		update_date?: Date | null;
	}
	export interface DomainsFormProperties {

		/** Hosting Country */
		country: FormControl<string | null | undefined>,

		/** Domain creation date */
		create_date: FormControl<Date | null | undefined>,

		/** Domain name */
		domain: FormControl<string | null | undefined>,

		/** If Domain is Dead */
		isDead: FormControl<string | null | undefined>,

		/** Domain last update date */
		update_date: FormControl<Date | null | undefined>,
	}
	export function CreateDomainsFormGroup() {
		return new FormGroup<DomainsFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			create_date: new FormControl<Date | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			isDead: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface MX_records {

		/** MX domain */
		exchange?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		priority?: number | null;
	}
	export interface MX_recordsFormProperties {

		/** MX domain */
		exchange: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateMX_recordsFormGroup() {
		return new FormGroup<MX_recordsFormProperties>({
			exchange: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Response_Parameters {

		/** Next page id */
		next_page?: string | null;

		/**
		 * Time took
		 * Required
		 */
		time: string;

		/**
		 * Total days reported
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface Response_ParametersFormProperties {

		/** Next page id */
		next_page: FormControl<string | null | undefined>,

		/**
		 * Time took
		 * Required
		 */
		time: FormControl<string | null | undefined>,

		/**
		 * Total days reported
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateResponse_ParametersFormGroup() {
		return new FormGroup<Response_ParametersFormProperties>({
			next_page: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Search_Results extends Response_Parameters {
		domains?: Array<Domains>;
	}
	export interface Search_ResultsFormProperties extends Response_ParametersFormProperties {
	}
	export function CreateSearch_ResultsFormGroup() {
		return new FormGroup<Search_ResultsFormProperties>({
			next_page: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Update_model {

		/** Updates added list */
		added?: string | null;

		/** Download link for added */
		added_download?: string | null;

		/** Update date */
		date?: string | null;

		/** Updates deleted list */
		deleted?: string | null;

		/** Download link for deleted */
		deleted_download?: string | null;
	}
	export interface Update_modelFormProperties {

		/** Updates added list */
		added: FormControl<string | null | undefined>,

		/** Download link for added */
		added_download: FormControl<string | null | undefined>,

		/** Update date */
		date: FormControl<string | null | undefined>,

		/** Updates deleted list */
		deleted: FormControl<string | null | undefined>,

		/** Download link for deleted */
		deleted_download: FormControl<string | null | undefined>,
	}
	export function CreateUpdate_modelFormGroup() {
		return new FormGroup<Update_modelFormProperties>({
			added: new FormControl<string | null | undefined>(undefined),
			added_download: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<string | null | undefined>(undefined),
			deleted_download: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Zone_info {
		description?: Array<string>;
		in_bundles?: Array<string>;
		includes?: Array<string>;

		/**
		 * TLD type
		 * Required
		 */
		type: string;

		/**
		 * TLD name
		 * Required
		 */
		zone: string;
	}
	export interface Zone_infoFormProperties {

		/**
		 * TLD type
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * TLD name
		 * Required
		 */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateZone_infoFormGroup() {
		return new FormGroup<Zone_infoFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Zone_statistics {

		/**
		 * Report Date
		 * Required
		 */
		date: Date;

		/**
		 * Increase
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dec: number;

		/**
		 * Decrease
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		inc: number;

		/**
		 * Total number of records
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;

		/**
		 * TLD name
		 * Required
		 */
		zone: string;
	}
	export interface Zone_statisticsFormProperties {

		/**
		 * Report Date
		 * Required
		 */
		date: FormControl<Date | null | undefined>,

		/**
		 * Increase
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dec: FormControl<number | null | undefined>,

		/**
		 * Decrease
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		inc: FormControl<number | null | undefined>,

		/**
		 * Total number of records
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * TLD name
		 * Required
		 */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateZone_statisticsFormGroup() {
		return new FormGroup<Zone_statisticsFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			dec: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			inc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Zone_stats extends Response_Parameters {
		statistics?: Array<Zone_statistics>;
	}
	export interface Zone_statsFormProperties extends Response_ParametersFormProperties {
	}
	export function CreateZone_statsFormGroup() {
		return new FormGroup<Zone_statsFormProperties>({
			next_page: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Domains Database Search
		 * Get domains/search
		 * @param {string} api_key API key
		 * @param {string} date Request date
		 * @param {string} page Search page to request
		 * @param {number} limit Results per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} domain Domain includes
		 * @param {string} zone In Zone
		 * @param {string} country Hosting Country
		 * @param {boolean} isDead Dead or Not, default not
		 * @param {string} A A record includes
		 * @param {string} NS NS record includes
		 * @param {string} CNAME CNAME record includes
		 * @param {string} MX MX record includes
		 * @param {string} TXT TXT record includes
		 * @return {Search_Results} Success
		 */
		DomainsSearchGetByApi_keyAndDateAndPageAndLimitAndDomainAndZoneAndCountryAndIsDeadAndAAndNSAndCNAMEAndMXAndTXT(api_key: string | null | undefined, date: string | null | undefined, page: string | null | undefined, limit: number | null | undefined, domain: string | null | undefined, zone: string | null | undefined, country: string | null | undefined, isDead: boolean | null | undefined, A: string | null | undefined, NS: string | null | undefined, CNAME: string | null | undefined, MX: string | null | undefined, TXT: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Search_Results> {
			return this.http.get<Search_Results>(this.baseUri + 'domains/search?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit + '&domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&zone=' + (zone == null ? '' : encodeURIComponent(zone)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&isDead=' + isDead + '&A=' + (A == null ? '' : encodeURIComponent(A)) + '&NS=' + (NS == null ? '' : encodeURIComponent(NS)) + '&CNAME=' + (CNAME == null ? '' : encodeURIComponent(CNAME)) + '&MX=' + (MX == null ? '' : encodeURIComponent(MX)) + '&TXT=' + (TXT == null ? '' : encodeURIComponent(TXT)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get TLD records
		 * Get domains/tld/{zone_id}
		 * @param {string} api_key API key
		 * @param {string} date Request date
		 * @param {string} page Search page to request
		 * @param {number} limit Results per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} domain Domain includes
		 * @param {string} country Hosting Country
		 * @param {boolean} isDead Dead or Not, default not
		 * @param {string} A A record includes
		 * @param {string} NS NS record includes
		 * @param {string} CNAME CNAME record includes
		 * @param {string} MX MX record includes
		 * @param {string} TXT TXT record includes
		 * @return {Search_Results} Success
		 */
		DomainsTld_zone_idGetByApi_keyAndDateAndPageAndLimitAndDomainAndCountryAndIsDeadAndAAndNSAndCNAMEAndMXAndTXT(api_key: string | null | undefined, date: string | null | undefined, page: string | null | undefined, limit: number | null | undefined, domain: string | null | undefined, country: string | null | undefined, isDead: boolean | null | undefined, A: string | null | undefined, NS: string | null | undefined, CNAME: string | null | undefined, MX: string | null | undefined, TXT: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Search_Results> {
			return this.http.get<Search_Results>(this.baseUri + 'domains/tld/{zone_id}?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit + '&domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&isDead=' + isDead + '&A=' + (A == null ? '' : encodeURIComponent(A)) + '&NS=' + (NS == null ? '' : encodeURIComponent(NS)) + '&CNAME=' + (CNAME == null ? '' : encodeURIComponent(CNAME)) + '&MX=' + (MX == null ? '' : encodeURIComponent(MX)) + '&TXT=' + (TXT == null ? '' : encodeURIComponent(TXT)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download Whole Dataset for TLD
		 * Get domains/tld/{zone_id}/download
		 * @param {string} api_key API key
		 * @param {string} date Request date
		 * @return {void} 
		 */
		DomainsTld_zone_idDownloadGetByApi_keyAndDate(api_key: string | null | undefined, date: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'domains/tld/{zone_id}/download?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&date=' + (date == null ? '' : encodeURIComponent(date)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Domains Search for TLD
		 * Get domains/tld/{zone_id}/search
		 * @param {string} api_key API key
		 * @param {string} date Request date
		 * @param {string} page Search page to request
		 * @param {number} limit Results per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} domain Domain includes
		 * @param {string} country Hosting Country
		 * @param {boolean} isDead Dead or Not, default not
		 * @param {string} A A record includes
		 * @param {string} NS NS record includes
		 * @param {string} CNAME CNAME record includes
		 * @param {string} MX MX record includes
		 * @param {string} TXT TXT record includes
		 * @return {Search_Results} Success
		 */
		DomainsTld_zone_idSearchGetByApi_keyAndDateAndPageAndLimitAndDomainAndCountryAndIsDeadAndAAndNSAndCNAMEAndMXAndTXT(api_key: string | null | undefined, date: string | null | undefined, page: string | null | undefined, limit: number | null | undefined, domain: string | null | undefined, country: string | null | undefined, isDead: boolean | null | undefined, A: string | null | undefined, NS: string | null | undefined, CNAME: string | null | undefined, MX: string | null | undefined, TXT: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Search_Results> {
			return this.http.get<Search_Results>(this.baseUri + 'domains/tld/{zone_id}/search?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit + '&domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&isDead=' + isDead + '&A=' + (A == null ? '' : encodeURIComponent(A)) + '&NS=' + (NS == null ? '' : encodeURIComponent(NS)) + '&CNAME=' + (CNAME == null ? '' : encodeURIComponent(CNAME)) + '&MX=' + (MX == null ? '' : encodeURIComponent(MX)) + '&TXT=' + (TXT == null ? '' : encodeURIComponent(TXT)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get added domains, latest if date not specified
		 * Get domains/updates/added
		 * @param {string} api_key API key
		 * @param {string} date Request date
		 * @param {string} page Search page to request
		 * @param {number} limit Results per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Search_Results} Success
		 */
		DomainsUpdatesAddedGetByApi_keyAndDateAndPageAndLimit(api_key: string | null | undefined, date: string | null | undefined, page: string | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Search_Results> {
			return this.http.get<Search_Results>(this.baseUri + 'domains/updates/added?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download added domains, latest if date not specified
		 * Get domains/updates/added/download
		 * @param {string} api_key API key
		 * @param {string} date Request date
		 * @return {void} 
		 */
		DomainsUpdatesAddedDownloadGetByApi_keyAndDate(api_key: string | null | undefined, date: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'domains/updates/added/download?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&date=' + (date == null ? '' : encodeURIComponent(date)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get deleted domains, latest if date not specified
		 * Get domains/updates/deleted
		 * @param {string} api_key API key
		 * @param {string} date Request date
		 * @param {string} page Search page to request
		 * @param {number} limit Results per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Search_Results} Success
		 */
		DomainsUpdatesDeletedGetByApi_keyAndDateAndPageAndLimit(api_key: string | null | undefined, date: string | null | undefined, page: string | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Search_Results> {
			return this.http.get<Search_Results>(this.baseUri + 'domains/updates/deleted?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download deleted domains, latest if date not specified
		 * Get domains/updates/deleted/download
		 * @param {string} api_key API key
		 * @param {string} date Request date
		 * @return {void} 
		 */
		DomainsUpdatesDeletedDownloadGetByApi_keyAndDate(api_key: string | null | undefined, date: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'domains/updates/deleted/download?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&date=' + (date == null ? '' : encodeURIComponent(date)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List of updates
		 * Get domains/updates/list
		 * @param {string} api_key API key
		 * @return {Update_model} Success
		 */
		DomainsUpdatesListGetByApi_key(api_key: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Update_model> {
			return this.http.get<Update_model>(this.baseUri + 'domains/updates/list?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get info/api
		 * @param {string} api_key API key
		 * @return {API_Key_Info} Success
		 */
		InfoApiGetByApi_key(api_key: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<API_Key_Info> {
			return this.http.get<API_Key_Info>(this.baseUri + 'info/api?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns overall stagtistics
		 * Get info/stat/
		 * @param {string} page Search page to request
		 * @param {number} limit Results per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Zone_stats>} Success
		 */
		InfoStatGetByPageAndLimit(page: string | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Zone_stats>> {
			return this.http.get<Array<Zone_stats>>(this.baseUri + 'info/stat/?page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns statistics for specific zone
		 * Get info/stat/{zone}
		 * @param {string} page Search page to request
		 * @param {number} limit Results per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Zone_stats} Success
		 */
		InfoStat_zoneGetByPageAndLimit(page: string | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Zone_stats> {
			return this.http.get<Zone_stats>(this.baseUri + 'info/stat/{zone}?page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns overall Tld info
		 * Get info/tld/
		 * @return {Array<Zone_info>} Success
		 */
		InfoTldGet(headersHandler?: () => HttpHeaders): Observable<Array<Zone_info>> {
			return this.http.get<Array<Zone_info>>(this.baseUri + 'info/tld/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns statistics for specific zone
		 * Get info/tld/{zone}
		 * @param {string} page Search page to request
		 * @param {number} limit Results per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Zone_info} Success
		 */
		InfoTld_zoneGetByPageAndLimit(page: string | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Zone_info> {
			return this.http.get<Zone_info>(this.baseUri + 'info/tld/{zone}?page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

