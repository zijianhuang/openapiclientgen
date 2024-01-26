import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Area {

		/** Required */
		Description: string;
		Id?: string | null;

		/** Required */
		Name: string;

		/** Required */
		XLatitude: string;

		/** Required */
		XLongitude: string;

		/** Required */
		YLatitude: string;

		/** Required */
		YLongitude: string;
	}
	export interface AreaFormProperties {

		/** Required */
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		XLatitude: FormControl<string | null | undefined>,

		/** Required */
		XLongitude: FormControl<string | null | undefined>,

		/** Required */
		YLatitude: FormControl<string | null | undefined>,

		/** Required */
		YLongitude: FormControl<string | null | undefined>,
	}
	export function CreateAreaFormGroup() {
		return new FormGroup<AreaFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			XLatitude: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,15})?))$')]),
			XLongitude: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,15})?))$')]),
			YLatitude: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,15})?))$')]),
			YLongitude: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,15})?))$')]),
		});

	}

	export interface AreaResponse {
		areas?: Array<Area>;
		row_count?: number | null;
	}
	export interface AreaResponseFormProperties {
		row_count: FormControl<number | null | undefined>,
	}
	export function CreateAreaResponseFormGroup() {
		return new FormGroup<AreaResponseFormProperties>({
			row_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DailyQualityResponse {
		Qualities?: Array<Qualities>;
		row_count?: number | null;
	}
	export interface DailyQualityResponseFormProperties {
		row_count: FormControl<number | null | undefined>,
	}
	export function CreateDailyQualityResponseFormGroup() {
		return new FormGroup<DailyQualityResponseFormProperties>({
			row_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Qualities {
		Date?: Date | null;
		Quality?: number | null;
	}
	export interface QualitiesFormProperties {
		Date: FormControl<Date | null | undefined>,
		Quality: FormControl<number | null | undefined>,
	}
	export function CreateQualitiesFormGroup() {
		return new FormGroup<QualitiesFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined),
			Quality: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Object {
	}
	export interface ObjectFormProperties {
	}
	export function CreateObjectFormGroup() {
		return new FormGroup<ObjectFormProperties>({
		});

	}

	export interface OverallQualityResponse {
		data_quality?: number | null;
		end_date?: string | null;
		row_count?: number | null;
		sites?: string | null;
		start_date?: string | null;
	}
	export interface OverallQualityResponseFormProperties {
		data_quality: FormControl<number | null | undefined>,
		end_date: FormControl<string | null | undefined>,
		row_count: FormControl<number | null | undefined>,
		sites: FormControl<string | null | undefined>,
		start_date: FormControl<string | null | undefined>,
	}
	export function CreateOverallQualityResponseFormGroup() {
		return new FormGroup<OverallQualityResponseFormProperties>({
			data_quality: new FormControl<number | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined),
			row_count: new FormControl<number | null | undefined>(undefined),
			sites: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteResponse {
		row_count?: number | null;
		sites?: Array<SiteResult>;
	}
	export interface SiteResponseFormProperties {
		row_count: FormControl<number | null | undefined>,
	}
	export function CreateSiteResponseFormGroup() {
		return new FormGroup<SiteResponseFormProperties>({
			row_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SiteResult {
		Description?: string | null;
		Id?: string | null;
		Latitude?: number | null;
		Longitude?: number | null;
		Name?: string | null;
		Status?: string | null;
	}
	export interface SiteResultFormProperties {
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Latitude: FormControl<number | null | undefined>,
		Longitude: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateSiteResultFormGroup() {
		return new FormGroup<SiteResultFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<number | null | undefined>(undefined),
			Longitude: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteType {
		Description?: string | null;
		Id?: string | null;
	}
	export interface SiteTypeFormProperties {
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateSiteTypeFormGroup() {
		return new FormGroup<SiteTypeFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteTypeLayer {
		Sites?: Array<Sites>;
	}
	export interface SiteTypeLayerFormProperties {
	}
	export function CreateSiteTypeLayerFormGroup() {
		return new FormGroup<SiteTypeLayerFormProperties>({
		});

	}

	export interface Sites {
		Active?: Array<boolean>;
		Description?: Array<string>;
		Id?: Array<string>;
		Lattitude?: Array<number>;
		Longitude?: Array<number>;
		SiteId?: Array<string>;
	}
	export interface SitesFormProperties {
	}
	export function CreateSitesFormGroup() {
		return new FormGroup<SitesFormProperties>({
		});

	}

	export interface SiteTypeResponse {
		row_count?: number | null;
		sitetypes?: Array<SiteType>;
	}
	export interface SiteTypeResponseFormProperties {
		row_count: FormControl<number | null | undefined>,
	}
	export function CreateSiteTypeResponseFormGroup() {
		return new FormGroup<SiteTypeResponseFormProperties>({
			row_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns list of areas
		 * Get v{version}/areas
		 * @return {AreaResponse} 
		 */
		Areas_Get(version: string): Observable<AreaResponse> {
			return this.http.get<AreaResponse>(this.baseUri + 'v' + (version == null ? '' : encodeURIComponent(version)) + '/areas', {});
		}

		/**
		 * Returns details of selected area
		 * Get v{version}/areas/{area_Ids}
		 * @return {AreaResponse} 
		 */
		AreasGetByArea_IdsAndVersion(area_Ids: string, version: string): Observable<AreaResponse> {
			return this.http.get<AreaResponse>(this.baseUri + 'v' + (version == null ? '' : encodeURIComponent(version)) + '/areas/' + (area_Ids == null ? '' : encodeURIComponent(area_Ids)), {});
		}

		/**
		 * Get Site DailyQuality
		 * Get v{version}/quality/daily
		 * @param {string} start_date The start date of the report in the format ddmmyyyy (i.e 31012016)
		 * @param {string} end_date The end date of the report in the format ddmmyyyy (i.e 31012016)
		 * @return {DailyQualityResponse} 
		 */
		Quality_GetDailyDataQualityForSite(siteId: string, start_date: string, end_date: string, version: string): Observable<DailyQualityResponse> {
			return this.http.get<DailyQualityResponse>(this.baseUri + 'v' + (version == null ? '' : encodeURIComponent(version)) + '/quality/daily?siteId=' + (siteId == null ? '' : encodeURIComponent(siteId)) + '&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)), {});
		}

		/**
		 * Get Site OverallQuality
		 * Get v{version}/quality/overall
		 * @param {string} sites Get site quality by site id delimited by ,
		 * @param {string} start_date The start date of the report in the format ddmmyyyy (i.e 31012016)
		 * @param {string} end_date The end date of the report in the format ddmmyyyy (i.e 31012016)
		 * @return {OverallQualityResponse} 
		 */
		Quality_GetOverallDataQualityForSites(sites: string, start_date: string, end_date: string, version: string): Observable<OverallQualityResponse> {
			return this.http.get<OverallQualityResponse>(this.baseUri + 'v' + (version == null ? '' : encodeURIComponent(version)) + '/quality/overall?sites=' + (sites == null ? '' : encodeURIComponent(sites)) + '&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)), {});
		}

		/**
		 * Gets the daily report.
		 * Get's the report.
		 * Get v{version}/reports/{report_type}
		 * @param {string} report_type Report Type Id (i.e Daily, Monthly, Annual)
		 * @param {string} sites Comma separated list of site Ids.
		 * @param {string} start_date The start date of the report in the format ddmmyyyy (i.e 31012016)
		 * @param {string} end_date The end date of the report in the format ddmmyyyy (i.e 31012016)
		 * @param {number} page The page offset to return.
		 * @param {number} page_size The number of rows to return.
		 * @return {Object} 
		 */
		Reports_Index(report_type: string, sites: string, start_date: string, end_date: string, page: number, page_size: number, reportSubTypeId: number | null | undefined, version: string): Observable<Object> {
			return this.http.get<Object>(this.baseUri + 'v' + (version == null ? '' : encodeURIComponent(version)) + '/reports/' + (report_type == null ? '' : encodeURIComponent(report_type)) + '&sites=' + (sites == null ? '' : encodeURIComponent(sites)) + '&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&page=' + page + '&page_size=' + page_size + '&reportSubTypeId=' + reportSubTypeId, {});
		}

		/**
		 * Gets the daily report.
		 * Get's the report.
		 * Get v{version}/reports/{start_date}/to/{end_date}/{report_type}
		 * @param {string} report_type Report Type Id (i.e Daily, Monthly, Annual)
		 * @param {string} sites Comma separated list of site Ids.
		 * @param {string} start_date The start date of the report in the format ddmmyyyy (i.e 31012016)
		 * @param {string} end_date The end date of the report in the format ddmmyyyy (i.e 31012016)
		 * @param {number} page The page offset to return.
		 * @param {number} page_size The number of rows to return.
		 * @return {Object} 
		 */
		ReportsGetByReport_typeAndSitesAndStart_dateAndEnd_dateAndPageAndPage_sizeAndReportSubTypeIdAndVersion(report_type: string, sites: string, start_date: string, end_date: string, page: number, page_size: number, reportSubTypeId: number | null | undefined, version: string): Observable<Object> {
			return this.http.get<Object>(this.baseUri + 'v' + (version == null ? '' : encodeURIComponent(version)) + '/reports/' + (start_date == null ? '' : encodeURIComponent(start_date)) + '/to/' + (end_date == null ? '' : encodeURIComponent(end_date)) + '/' + (report_type == null ? '' : encodeURIComponent(report_type)) + '&sites=' + (sites == null ? '' : encodeURIComponent(sites)) + '&page=' + page + '&page_size=' + page_size + '&reportSubTypeId=' + reportSubTypeId, {});
		}

		/**
		 * Get a list of sites
		 * Get v{version}/sites
		 * @return {SiteResponse} 
		 */
		Sites_Index(version: string): Observable<SiteResponse> {
			return this.http.get<SiteResponse>(this.baseUri + 'v' + (version == null ? '' : encodeURIComponent(version)) + '/sites', {});
		}

		/**
		 * Get selected sites
		 * Get v{version}/sites/{site_Ids}
		 * @param {string} site_Ids site id
		 * @return {SiteResponse} 
		 */
		SitesGetBySite_IdsAndVersion(site_Ids: string, version: string): Observable<SiteResponse> {
			return this.http.get<SiteResponse>(this.baseUri + 'v' + (version == null ? '' : encodeURIComponent(version)) + '/sites/' + (site_Ids == null ? '' : encodeURIComponent(site_Ids)), {});
		}

		/**
		 * Return list of site types
		 * Get v{version}/sitetypes
		 * @return {SiteTypeResponse} 
		 */
		SiteTypes_Index(version: string): Observable<SiteTypeResponse> {
			return this.http.get<SiteTypeResponse>(this.baseUri + 'v' + (version == null ? '' : encodeURIComponent(version)) + '/sitetypes', {});
		}

		/**
		 * Returns the layer metadata for the LayerId specified.
		 * Get v{version}/sitetypes/{siteType_Id}/sites
		 * @param {number} siteType_Id 1 = MIDAS, 2 = TAME, 3 = TMU, 4 = TRADS Legacy
		 * @return {SiteTypeLayer} 
		 */
		SiteTypes_GetSitesForPublicFacingAPI(siteType_Id: number, version: string): Observable<SiteTypeLayer> {
			return this.http.get<SiteTypeLayer>(this.baseUri + 'v' + (version == null ? '' : encodeURIComponent(version)) + '/sitetypes/' + siteType_Id + '/sites', {});
		}
	}

}

