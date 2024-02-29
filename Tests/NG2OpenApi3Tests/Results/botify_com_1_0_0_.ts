import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Analysis {
		config?: string | null;
		date_created?: Date | null;
		date_finished?: Date | null;

		/** Date of last modified analysis */
		date_last_modified?: Date | null;
		date_launched?: Date | null;
		features?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		name?: string | null;
		slug?: string | null;
		status?: string | null;
		url?: string | null;
		urls_done?: string | null;
		urls_in_queue?: string | null;

		/** Required */
		user: User;
	}
	export interface AnalysisFormProperties {
		config: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		date_finished: FormControl<Date | null | undefined>,

		/** Date of last modified analysis */
		date_last_modified: FormControl<Date | null | undefined>,
		date_launched: FormControl<Date | null | undefined>,
		features: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		urls_done: FormControl<string | null | undefined>,
		urls_in_queue: FormControl<string | null | undefined>,
	}
	export function CreateAnalysisFormGroup() {
		return new FormGroup<AnalysisFormProperties>({
			config: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_finished: new FormControl<Date | null | undefined>(undefined),
			date_last_modified: new FormControl<Date | null | undefined>(undefined),
			date_launched: new FormControl<Date | null | undefined>(undefined),
			features: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urls_done: new FormControl<string | null | undefined>(undefined),
			urls_in_queue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {
		company_name?: string | null;
		date_joined?: Date | null;
		email?: string | null;
		first_name?: string | null;
		is_organization?: string | null;
		last_name?: string | null;
		login?: string | null;
		status?: string | null;
		url?: string | null;
	}
	export interface UserFormProperties {
		company_name: FormControl<string | null | undefined>,
		date_joined: FormControl<Date | null | undefined>,
		email: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		is_organization: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		login: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			company_name: new FormControl<string | null | undefined>(undefined),
			date_joined: new FormControl<Date | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			is_organization: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnalysisDetail {
		config?: string | null;
		date_finished?: Date | null;

		/** Date of last modified analysis */
		date_last_modified?: Date | null;
		date_launched?: Date | null;
		failures?: string | null;
		features?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		name?: string | null;
		red_button_domain?: string | null;
		slug?: string | null;
		url?: string | null;
		urls_done?: string | null;
		urls_in_queue?: string | null;

		/** Required */
		user: User;
	}
	export interface AnalysisDetailFormProperties {
		config: FormControl<string | null | undefined>,
		date_finished: FormControl<Date | null | undefined>,

		/** Date of last modified analysis */
		date_last_modified: FormControl<Date | null | undefined>,
		date_launched: FormControl<Date | null | undefined>,
		failures: FormControl<string | null | undefined>,
		features: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		red_button_domain: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		urls_done: FormControl<string | null | undefined>,
		urls_in_queue: FormControl<string | null | undefined>,
	}
	export function CreateAnalysisDetailFormGroup() {
		return new FormGroup<AnalysisDetailFormProperties>({
			config: new FormControl<string | null | undefined>(undefined),
			date_finished: new FormControl<Date | null | undefined>(undefined),
			date_last_modified: new FormControl<Date | null | undefined>(undefined),
			date_launched: new FormControl<Date | null | undefined>(undefined),
			failures: new FormControl<string | null | undefined>(undefined),
			features: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			red_button_domain: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urls_done: new FormControl<string | null | undefined>(undefined),
			urls_in_queue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CrawlDatamodel {

		/** Required */
		fields: Array<CrawlDatamodelField>;

		/** Required */
		groups: Array<CrawlDatamodelGroup>;
	}
	export interface CrawlDatamodelFormProperties {
	}
	export function CreateCrawlDatamodelFormGroup() {
		return new FormGroup<CrawlDatamodelFormProperties>({
		});

	}

	export interface CrawlDatamodelField {

		/** Required */
		group: string;

		/** Required */
		id: string;

		/** Required */
		multiple: boolean;

		/** Required */
		name: string;

		/** Required */
		permissions: Array<string>;

		/** Required */
		subtype: string;

		/** Required */
		type: string;
	}
	export interface CrawlDatamodelFieldFormProperties {

		/** Required */
		group: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		multiple: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		subtype: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCrawlDatamodelFieldFormGroup() {
		return new FormGroup<CrawlDatamodelFieldFormProperties>({
			group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			multiple: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subtype: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CrawlDatamodelGroup {

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface CrawlDatamodelGroupFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCrawlDatamodelGroupFormGroup() {
		return new FormGroup<CrawlDatamodelGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CrawlOrphanURLs {

		/** Required */
		url: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		visits: string;
	}
	export interface CrawlOrphanURLsFormProperties {

		/** Required */
		url: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		visits: FormControl<string | null | undefined>,
	}
	export function CreateCrawlOrphanURLsFormGroup() {
		return new FormGroup<CrawlOrphanURLsFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			visits: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CrawlStatistics {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		depth_current: string;

		/** Required */
		last_upd_dt: Date;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones_2xx: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones_3xx: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones_4xx: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones_5xx: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones_networkerror: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones_xxx: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_known: string;
	}
	export interface CrawlStatisticsFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		depth_current: FormControl<string | null | undefined>,

		/** Required */
		last_upd_dt: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones_2xx: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones_3xx: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones_4xx: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones_5xx: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones_networkerror: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_dones_xxx: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		pages_known: FormControl<string | null | undefined>,
	}
	export function CreateCrawlStatisticsFormGroup() {
		return new FormGroup<CrawlStatisticsFormProperties>({
			depth_current: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_upd_dt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			pages_dones: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pages_dones_2xx: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pages_dones_3xx: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pages_dones_4xx: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pages_dones_5xx: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pages_dones_networkerror: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pages_dones_xxx: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pages_known: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CrawlStatisticsTime {

		/** Required */
		avg_delay: Array<CrawlStatisticsTimePoint>;

		/** Required */
		avg_size: Array<CrawlStatisticsTimePoint>;

		/** Required */
		frequency: string;

		/** Required */
		http_code_2xx: Array<CrawlStatisticsTimePoint>;

		/** Required */
		http_code_3xx: Array<CrawlStatisticsTimePoint>;

		/** Required */
		http_code_4xx: Array<CrawlStatisticsTimePoint>;

		/** Required */
		http_code_5xx: Array<CrawlStatisticsTimePoint>;

		/** Required */
		http_code_xxx: Array<CrawlStatisticsTimePoint>;

		/** Required */
		last_update_date: Date;

		/** Required */
		new_urls: Array<CrawlStatisticsTimePoint>;
	}
	export interface CrawlStatisticsTimeFormProperties {

		/** Required */
		frequency: FormControl<string | null | undefined>,

		/** Required */
		last_update_date: FormControl<Date | null | undefined>,
	}
	export function CreateCrawlStatisticsTimeFormGroup() {
		return new FormGroup<CrawlStatisticsTimeFormProperties>({
			frequency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_update_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CrawlStatisticsTimePoint {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		count: string;

		/** Required */
		datetime: Date;
	}
	export interface CrawlStatisticsTimePointFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		count: FormControl<string | null | undefined>,

		/** Required */
		datetime: FormControl<Date | null | undefined>,
	}
	export function CreateCrawlStatisticsTimePointFormGroup() {
		return new FormGroup<CrawlStatisticsTimePointFormProperties>({
			count: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datetime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CrawlStatisticsUrls {

		/** Required */
		content_type: string;

		/** Required */
		date: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		delay_first_byte: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		delay_last_byte: string;

		/** Required */
		gzip: boolean;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		http: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		length: string;
		redirects_to?: string | null;

		/** Required */
		url: string;
	}
	export interface CrawlStatisticsUrlsFormProperties {

		/** Required */
		content_type: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		delay_first_byte: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		delay_last_byte: FormControl<string | null | undefined>,

		/** Required */
		gzip: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		http: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		length: FormControl<string | null | undefined>,
		redirects_to: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCrawlStatisticsUrlsFormGroup() {
		return new FormGroup<CrawlStatisticsUrlsFormProperties>({
			content_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			delay_first_byte: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			delay_last_byte: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gzip: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			http: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			redirects_to: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CsvExportStatus {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		area?: string | null;
		date_created?: Date | null;
		job_id?: string | null;
		job_status?: string | null;
		job_url?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		nb_results?: string | null;

		/** Required */
		query: UrlsQuery;
		results?: string | null;
	}
	export interface CsvExportStatusFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		area: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		job_id: FormControl<string | null | undefined>,
		job_status: FormControl<string | null | undefined>,
		job_url: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		nb_results: FormControl<string | null | undefined>,
		results: FormControl<string | null | undefined>,
	}
	export function CreateCsvExportStatusFormGroup() {
		return new FormGroup<CsvExportStatusFormProperties>({
			area: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			job_id: new FormControl<string | null | undefined>(undefined),
			job_status: new FormControl<string | null | undefined>(undefined),
			job_url: new FormControl<string | null | undefined>(undefined),
			nb_results: new FormControl<string | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
			results: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UrlsQuery {
		fields?: Array<string>;
		filters?: string | null;
		sort?: Array<string>;
	}
	export interface UrlsQueryFormProperties {
		filters: FormControl<string | null | undefined>,
	}
	export function CreateUrlsQueryFormGroup() {
		return new FormGroup<UrlsQueryFormProperties>({
			filters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Default {
	}
	export interface DefaultFormProperties {
	}
	export function CreateDefaultFormGroup() {
		return new FormGroup<DefaultFormProperties>({
		});

	}


	/** default payload for object for all HTTP codes that are not covered individually */
	export interface DefaultPayload {
		error?: DefaultPayloadError;
	}

	/** default payload for object for all HTTP codes that are not covered individually */
	export interface DefaultPayloadFormProperties {
	}
	export function CreateDefaultPayloadFormGroup() {
		return new FormGroup<DefaultPayloadFormProperties>({
		});

	}

	export interface DefaultPayloadError {

		/** Error Code */
		error_code?: string | null;

		/** If available, detailed error */
		error_detail?: string | null;

		/** Error Message */
		message?: string | null;
	}
	export interface DefaultPayloadErrorFormProperties {

		/** Error Code */
		error_code: FormControl<string | null | undefined>,

		/** If available, detailed error */
		error_detail: FormControl<string | null | undefined>,

		/** Error Message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateDefaultPayloadErrorFormGroup() {
		return new FormGroup<DefaultPayloadErrorFormProperties>({
			error_code: new FormControl<string | null | undefined>(undefined),
			error_detail: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FieldValues {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		count: string;

		/** Required */
		results: Array<FieldValuesResult>;
	}
	export interface FieldValuesFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		count: FormControl<string | null | undefined>,
	}
	export function CreateFieldValuesFormGroup() {
		return new FormGroup<FieldValuesFormProperties>({
			count: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FieldValuesResult {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nb_urls: string;

		/** Required */
		value: string;
	}
	export interface FieldValuesResultFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nb_urls: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFieldValuesResultFormGroup() {
		return new FormGroup<FieldValuesResultFormProperties>({
			nb_urls: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LinksPercentiles {

		/** Required */
		domain: string;

		/** Required */
		percentiles: Array<LinksPercentilesItem>;
	}
	export interface LinksPercentilesFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateLinksPercentilesFormGroup() {
		return new FormGroup<LinksPercentilesFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LinksPercentilesItem {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		avg: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		max: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		metric_total: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		min: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		url_total: string;
	}
	export interface LinksPercentilesItemFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		avg: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		max: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		metric_total: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		min: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		url_total: FormControl<string | null | undefined>,
	}
	export function CreateLinksPercentilesItemFormGroup() {
		return new FormGroup<LinksPercentilesItemFormProperties>({
			avg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			max: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metric_total: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			min: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url_total: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LinksTopDomains {

		/** Required */
		domain: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		follow_links: string;

		/** Required */
		follow_samples: Array<LinksTopDomainsSamples>;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nofollow_links: string;

		/** Required */
		nofollow_samples: Array<LinksTopDomainsSamples>;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		unique_follow_links: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		unique_nofollow_links: string;
	}
	export interface LinksTopDomainsFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		follow_links: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nofollow_links: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		unique_follow_links: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		unique_nofollow_links: FormControl<string | null | undefined>,
	}
	export function CreateLinksTopDomainsFormGroup() {
		return new FormGroup<LinksTopDomainsFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			follow_links: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nofollow_links: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unique_follow_links: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unique_nofollow_links: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LinksTopDomainsSamples {

		/** Required */
		sources: Array<string>;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		unique_links: string;

		/** Required */
		url: string;
	}
	export interface LinksTopDomainsSamplesFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		unique_links: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLinksTopDomainsSamplesFormGroup() {
		return new FormGroup<LinksTopDomainsSamplesFormProperties>({
			unique_links: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PageRankLost {

		/**
		 * Required
		 * Type: float
		 */
		external: number;

		/**
		 * Required
		 * Type: float
		 */
		non_crawled: number;

		/**
		 * Required
		 * Type: float
		 */
		robots_txt: number;
	}
	export interface PageRankLostFormProperties {

		/**
		 * Required
		 * Type: float
		 */
		external: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: float
		 */
		non_crawled: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: float
		 */
		robots_txt: FormControl<number | null | undefined>,
	}
	export function CreatePageRankLostFormGroup() {
		return new FormGroup<PageRankLostFormProperties>({
			external: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			non_crawled: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			robots_txt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Project {
		active?: boolean | null;

		/** Required */
		current_settings: ProjectSettingsSerializer;
		date_created?: string | null;

		/** Required */
		name: string;

		/** Required */
		slug: string;

		/** Required */
		user: User;
	}
	export interface ProjectFormProperties {
		active: FormControl<boolean | null | undefined>,
		date_created: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		slug: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			date_created: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProjectSettingsSerializer {

		/** Required */
		allowed_domains: Array<string>;

		/** Required */
		blacklisted_domains: Array<string>;
		compare_crawl?: boolean | null;
		crawl_gzip?: boolean | null;
		extra_headers?: string | null;

		/** Keep email in case user delete his social auth connection */
		google_analytics_account_email?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 90
		 */
		google_analytics_nb_days?: string | null;

		/**
		 * Minimum: -2147483648
		 * Maximum: 2147483647
		 */
		google_analytics_site_id?: string | null;

		/**
		 * Minimum: -2147483648
		 * Maximum: 2147483647
		 */
		google_social_auth_id?: string | null;
		has_robots_txt?: string | null;

		/** Required */
		header_settings: Array<string>;

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		max_depth?: string | null;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		max_nb_pages: string;

		/**
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		max_pages_per_sec?: string | null;
		respect_nofollow?: boolean | null;

		/** Required */
		sitemaps: Array<string>;

		/** Required */
		start_urls: Array<string>;
		user_agent?: string | null;
	}
	export interface ProjectSettingsSerializerFormProperties {
		compare_crawl: FormControl<boolean | null | undefined>,
		crawl_gzip: FormControl<boolean | null | undefined>,
		extra_headers: FormControl<string | null | undefined>,

		/** Keep email in case user delete his social auth connection */
		google_analytics_account_email: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 90
		 */
		google_analytics_nb_days: FormControl<string | null | undefined>,

		/**
		 * Minimum: -2147483648
		 * Maximum: 2147483647
		 */
		google_analytics_site_id: FormControl<string | null | undefined>,

		/**
		 * Minimum: -2147483648
		 * Maximum: 2147483647
		 */
		google_social_auth_id: FormControl<string | null | undefined>,
		has_robots_txt: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		max_depth: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		max_nb_pages: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		max_pages_per_sec: FormControl<string | null | undefined>,
		respect_nofollow: FormControl<boolean | null | undefined>,
		user_agent: FormControl<string | null | undefined>,
	}
	export function CreateProjectSettingsSerializerFormGroup() {
		return new FormGroup<ProjectSettingsSerializerFormProperties>({
			compare_crawl: new FormControl<boolean | null | undefined>(undefined),
			crawl_gzip: new FormControl<boolean | null | undefined>(undefined),
			extra_headers: new FormControl<string | null | undefined>(undefined),
			google_analytics_account_email: new FormControl<string | null | undefined>(undefined),
			google_analytics_nb_days: new FormControl<string | null | undefined>(undefined, [Validators.min(1), Validators.max(90)]),
			google_analytics_site_id: new FormControl<string | null | undefined>(undefined, [Validators.min(-2147483648), Validators.max(2147483647)]),
			google_social_auth_id: new FormControl<string | null | undefined>(undefined, [Validators.min(-2147483648), Validators.max(2147483647)]),
			has_robots_txt: new FormControl<string | null | undefined>(undefined),
			max_depth: new FormControl<string | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
			max_nb_pages: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(2147483647)]),
			max_pages_per_sec: new FormControl<string | null | undefined>(undefined, [Validators.min(1), Validators.max(2147483647)]),
			respect_nofollow: new FormControl<boolean | null | undefined>(undefined),
			user_agent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectSavedFilter {

		/** Required */
		filters: string;
		identifier?: string | null;

		/** Required */
		name: string;
	}
	export interface ProjectSavedFilterFormProperties {

		/** Required */
		filters: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateProjectSavedFilterFormGroup() {
		return new FormGroup<ProjectSavedFilterFormProperties>({
			filters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			identifier: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RewritingRuleSerializer {

		/** Required */
		ignore_case: boolean;

		/** Required */
		regex: string;

		/** Required */
		replace: string;
	}
	export interface RewritingRuleSerializerFormProperties {

		/** Required */
		ignore_case: FormControl<boolean | null | undefined>,

		/** Required */
		regex: FormControl<string | null | undefined>,

		/** Required */
		replace: FormControl<string | null | undefined>,
	}
	export function CreateRewritingRuleSerializerFormGroup() {
		return new FormGroup<RewritingRuleSerializerFormProperties>({
			ignore_case: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			regex: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SitemapsReport {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		count: string;

		/** Required */
		errors: Array<SitemapsReportSitemap>;

		/** Required */
		sitemap_indexes: Array<SitemapsReportSitemap>;

		/** Required */
		sitemap_only: SitemapsReportOnly;

		/** Required */
		sitemaps: Array<SitemapsReportSitemap>;
	}
	export interface SitemapsReportFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		count: FormControl<string | null | undefined>,
	}
	export function CreateSitemapsReportFormGroup() {
		return new FormGroup<SitemapsReportFormProperties>({
			count: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SitemapsReportSitemap {
		error?: SitemapsReportSitemapError;
		file_type?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		invalid_urls?: string | null;
		sitemap_indexes?: Array<string>;

		/** Required */
		url: string;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		valid_urls?: string | null;
	}
	export interface SitemapsReportSitemapFormProperties {
		file_type: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		invalid_urls: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		valid_urls: FormControl<string | null | undefined>,
	}
	export function CreateSitemapsReportSitemapFormGroup() {
		return new FormGroup<SitemapsReportSitemapFormProperties>({
			file_type: new FormControl<string | null | undefined>(undefined),
			invalid_urls: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valid_urls: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SitemapsReportSitemapError {

		/** Required */
		message: string;

		/** Required */
		type: string;
	}
	export interface SitemapsReportSitemapErrorFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSitemapsReportSitemapErrorFormGroup() {
		return new FormGroup<SitemapsReportSitemapErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SitemapsReportOnly {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		in_configuration: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		out_of_configuration: string;
	}
	export interface SitemapsReportOnlyFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		in_configuration: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		out_of_configuration: FormControl<string | null | undefined>,
	}
	export function CreateSitemapsReportOnlyFormGroup() {
		return new FormGroup<SitemapsReportOnlyFormProperties>({
			in_configuration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			out_of_configuration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface URLRewritingRulesSerializer {

		/** Required */
		rules: Array<RewritingRuleSerializer>;

		/** Required */
		urls: Array<string>;
	}
	export interface URLRewritingRulesSerializerFormProperties {
	}
	export function CreateURLRewritingRulesSerializerFormGroup() {
		return new FormGroup<URLRewritingRulesSerializerFormProperties>({
		});

	}

	export interface UrlDetail {
	}
	export interface UrlDetailFormProperties {
	}
	export function CreateUrlDetailFormGroup() {
		return new FormGroup<UrlDetailFormProperties>({
		});

	}

	export interface UrlsAgg {
		aggs?: Array<string>;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		count: string;
	}
	export interface UrlsAggFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		count: FormControl<string | null | undefined>,
	}
	export function CreateUrlsAggFormGroup() {
		return new FormGroup<UrlsAggFormProperties>({
			count: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UrlsAggs {
		data?: UrlsAgg;
		error?: UrlsErrorAgg;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		status: string;
	}
	export interface UrlsAggsFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateUrlsAggsFormGroup() {
		return new FormGroup<UrlsAggsFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UrlsErrorAgg {

		/** Required */
		error_code: string;

		/** Required */
		message: string;
	}
	export interface UrlsErrorAggFormProperties {

		/** Required */
		error_code: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateUrlsErrorAggFormGroup() {
		return new FormGroup<UrlsErrorAggFormProperties>({
			error_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UrlsAggsQuery {
		aggs?: Array<string>;
		filters?: string | null;
	}
	export interface UrlsAggsQueryFormProperties {
		filters: FormControl<string | null | undefined>,
	}
	export function CreateUrlsAggsQueryFormGroup() {
		return new FormGroup<UrlsAggsQueryFormProperties>({
			filters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface String {
	}
	export interface StringFormProperties {
	}
	export function CreateStringFormGroup() {
		return new FormGroup<StringFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all analyses for a project
		 * List all analyses for a project
		 * Get analyses/{username}/{project_slug}
		 * @param {number} page Page Number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} size Page Size
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetProjectAnalysesReturn} Successful operation
		 */
		GetProjectAnalyses(page: number | null | undefined, size: number | null | undefined): Observable<GetProjectAnalysesReturn> {
			return this.http.get<GetProjectAnalysesReturn>(this.baseUri + 'analyses/{username}/{project_slug}?page=' + page + '&size=' + size, {});
		}

		/**
		 * Get an Analysis detail
		 * Get an Analysis detail
		 * Get analyses/{username}/{project_slug}/{analysis_slug}
		 * @return {AnalysisDetail} Successful operation
		 */
		GetAnalysisSummary(): Observable<AnalysisDetail> {
			return this.http.get<AnalysisDetail>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}', {});
		}

		/**
		 * Return global statistics for an analysis
		 * Return global statistics for an analysis
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics
		 * @return {CrawlStatistics} Successful operation
		 */
		GetCrawlStatistics(): Observable<CrawlStatistics> {
			return this.http.get<CrawlStatistics>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics', {});
		}

		/**
		 * Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
		 * Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/time
		 * @param {number} limit max number of elements to retrieve
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {GetCrawlStatisticsByFrequencyFrequency} frequency Aggregation frequency
		 * @return {CrawlStatisticsTime} Successful operation
		 */
		GetCrawlStatisticsByFrequency(limit: number | null | undefined, frequency: GetCrawlStatisticsByFrequencyFrequency): Observable<CrawlStatisticsTime> {
			return this.http.get<CrawlStatisticsTime>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/time?limit=' + limit + '&frequency=' + frequency, {});
		}

		/**
		 * Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
		 * Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/urls/{list_type}
		 */
		GetCrawlStatisticsUrls(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/urls/{list_type}', {});
		}

		/**
		 * List of Orphan URLs
		 * List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/features/ganalytics/orphan_urls/{medium}/{source}
		 * @param {number} page Page Number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} size Page Size
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetGanalyticsOrphanURLsReturn} Successful operation
		 */
		GetGanalyticsOrphanURLs(page: number | null | undefined, size: number | null | undefined): Observable<GetGanalyticsOrphanURLsReturn> {
			return this.http.get<GetGanalyticsOrphanURLsReturn>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/features/ganalytics/orphan_urls/{medium}/{source}?page=' + page + '&size=' + size, {});
		}

		/**
		 * Get inlinks percentiles
		 * Get inlinks percentiles
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/features/links/percentiles
		 * @return {LinksPercentiles} Successful operation
		 */
		GetLinksPercentiles(): Observable<LinksPercentiles> {
			return this.http.get<LinksPercentiles>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/features/links/percentiles', {});
		}

		/**
		 * Lost pagerank
		 * Lost pagerank
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/features/pagerank/lost
		 * @return {PageRankLost} Successful operation
		 */
		GetPageRankLost(): Observable<PageRankLost> {
			return this.http.get<PageRankLost>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/features/pagerank/lost', {});
		}

		/**
		 * Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
		 * Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/report
		 * @return {SitemapsReport} Successful operation
		 */
		GetSitemapsReport(): Observable<SitemapsReport> {
			return this.http.get<SitemapsReport>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/report', {});
		}

		/**
		 * Sample list of URLs which were found in your sitemaps but outside of the
		 * Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/out_of_config
		 * @param {number} page Page Number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} size Page Size
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetSitemapsSamplesOutOfConfigReturn} Successful operation
		 */
		GetSitemapsSamplesOutOfConfig(page: number | null | undefined, size: number | null | undefined): Observable<GetSitemapsSamplesOutOfConfigReturn> {
			return this.http.get<GetSitemapsSamplesOutOfConfigReturn>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/out_of_config?page=' + page + '&size=' + size, {});
		}

		/**
		 * Sample list of URLs which were found in your sitemaps, within the project
		 * Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/sitemap_only
		 * @param {number} page Page Number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} size Page Size
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetSitemapsSamplesSitemapsOnlyReturn} Successful operation
		 */
		GetSitemapsSamplesSitemapsOnly(page: number | null | undefined, size: number | null | undefined): Observable<GetSitemapsSamplesSitemapsOnlyReturn> {
			return this.http.get<GetSitemapsSamplesSitemapsOnlyReturn>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/sitemap_only?page=' + page + '&size=' + size, {});
		}

		/**
		 * Top domains
		 * Top domains
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/domains
		 * @param {number} page Page Number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} size Page Size
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetLinksTopDomainsReturn} Successful operation
		 */
		GetLinksTopDomains(page: number | null | undefined, size: number | null | undefined): Observable<GetLinksTopDomainsReturn> {
			return this.http.get<GetLinksTopDomainsReturn>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/domains?page=' + page + '&size=' + size, {});
		}

		/**
		 * Top subddomains
		 * Top subddomains
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/subdomains
		 * @param {number} page Page Number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} size Page Size
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetLinksTopSubdomainsReturn} Successful operation
		 */
		GetLinksTopSubdomains(page: number | null | undefined, size: number | null | undefined): Observable<GetLinksTopSubdomainsReturn> {
			return this.http.get<GetLinksTopSubdomainsReturn>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/subdomains?page=' + page + '&size=' + size, {});
		}

		/**
		 * Executes a query and returns a paginated response
		 * Executes a query and returns a paginated response
		 * Post analyses/{username}/{project_slug}/{analysis_slug}/urls
		 * @param {GetUrlsArea} area Analysis context to execute the query
		 * @param {number} page Page Number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} size Page Size
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetUrlsReturn} Successful operation
		 */
		GetUrls(area: GetUrlsArea | null | undefined, page: number | null | undefined, size: number | null | undefined, requestBody: UrlsQuery): Observable<GetUrlsReturn> {
			return this.http.post<GetUrlsReturn>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/urls?area=' + area + '&page=' + page + '&size=' + size, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Query aggregator
		 * Query aggregator. It accepts multiple queries
		 * Post analyses/{username}/{project_slug}/{analysis_slug}/urls/aggs
		 */
		GetUrlsAggs(area: GetUrlsArea | null | undefined, requestBody: Array<UrlsAggsQuery>): Observable<Array<string>> {
			return this.http.post<Array<string>>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/urls/aggs?area=' + area, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets an Analysis datamodel
		 * Gets an Analysis datamodel
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/urls/datamodel
		 * @return {CrawlDatamodel} Successful operation
		 */
		GetUrlsDatamodel(area: GetUrlsArea | null | undefined): Observable<CrawlDatamodel> {
			return this.http.get<CrawlDatamodel>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/urls/datamodel?area=' + area, {});
		}

		/**
		 * A list of the CSV Exports requests and their current status
		 * A list of the CSV Exports requests and their current status
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/urls/export
		 * @param {number} page Page Number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} size Page Size
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetUrlsExportsReturn} Successful operation
		 */
		GetUrlsExports(page: number | null | undefined, size: number | null | undefined): Observable<GetUrlsExportsReturn> {
			return this.http.get<GetUrlsExportsReturn>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/urls/export?page=' + page + '&size=' + size, {});
		}

		/**
		 * Creates a new UrlExport object and starts a task that will export the results into a csv
		 * Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task
		 * Post analyses/{username}/{project_slug}/{analysis_slug}/urls/export
		 * @return {void} 
		 */
		CreateUrlsExport(area: GetUrlsArea | null | undefined, requestBody: UrlsQuery): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/urls/export?area=' + area, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks the status of an CSVUrlExportJob object
		 * Checks the status of an CSVUrlExportJob object. Returns json object with the status.
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/urls/export/{url_export_id}
		 * @return {CsvExportStatus} Successful operation
		 */
		GetUrlsExportStatus(): Observable<CsvExportStatus> {
			return this.http.get<CsvExportStatus>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/urls/export/{url_export_id}', {});
		}

		/**
		 * Return most frequent segments (= suggested patterns in the previous version)
		 * Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.
		 * Post analyses/{username}/{project_slug}/{analysis_slug}/urls/suggested_filters
		 * @return {void} 
		 */
		GetUrlsSuggestedFilters(area: GetUrlsSuggestedFiltersArea | null | undefined, requestBody: UrlsAggsQuery): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/urls/suggested_filters?area=' + area, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the detail of an URL for an analysis
		 * Gets the detail of an URL for an analysis
		 * Get analyses/{username}/{project_slug}/{analysis_slug}/urls/{url}
		 * @param {Array<string>} fields comma separated list of fields to return (c.f. URLs Datamodel)
		 * @return {UrlDetail} Successful operation
		 */
		GetUrlDetail(fields: Array<string> | null | undefined): Observable<UrlDetail> {
			return this.http.get<UrlDetail>(this.baseUri + 'analyses/{username}/{project_slug}/{analysis_slug}/urls/{url}?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * List all active projects for the user
		 * List all active projects for the user
		 * Get projects/{username}
		 * @param {number} page Page Number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} size Page Size
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetUserProjectsReturn} Successful operation
		 */
		GetUserProjects(page: number | null | undefined, size: number | null | undefined): Observable<GetUserProjectsReturn> {
			return this.http.get<GetUserProjectsReturn>(this.baseUri + 'projects/{username}?page=' + page + '&size=' + size, {});
		}

		/**
		 * Match and replace parts of a URL based on rules passed in POST data
		 * Match and replace parts of a URL based on rules passed in POST data.
		 * Post projects/{username}/{project_slug}/features/url_rewriting/rules_validator
		 * @return {void} 
		 */
		TestUrlRewritingRules(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects/{username}/{project_slug}/features/url_rewriting/rules_validator', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all the project's saved filters (each filter's name, ID and filter value)
		 * List all the project's saved filters (each filter's name, ID and filter value)
		 * Get projects/{username}/{project_slug}/filters
		 * @param {number} page Page Number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} size Page Size
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetSavedFiltersReturn} Successful operation
		 */
		GetSavedFilters(page: number | null | undefined, size: number | null | undefined): Observable<GetSavedFiltersReturn> {
			return this.http.get<GetSavedFiltersReturn>(this.baseUri + 'projects/{username}/{project_slug}/filters?page=' + page + '&size=' + size, {});
		}

		/**
		 * Retrieves a specific saved filter's name, ID and filter value
		 * Retrieves a specific saved filter's name, ID and filter value
		 * Get projects/{username}/{project_slug}/filters/{identifier}
		 * @return {ProjectSavedFilter} Successful operation
		 */
		GetSavedFilter(): Observable<ProjectSavedFilter> {
			return this.http.get<ProjectSavedFilter>(this.baseUri + 'projects/{username}/{project_slug}/filters/{identifier}', {});
		}

		/**
		 * Project Query aggregator
		 * Project Query aggregator. It accepts multiple queries that will be executed on all completed analyses in the project
		 * Post projects/{username}/{project_slug}/urls/aggs
		 * @param {GetProjectUrlsAggsArea} area Analysis context to execute the queries
		 * @param {string} last_analysis_slug Last analysis on the trend
		 * @param {number} nb_analyses Max number of analysis to return
		 *     Minimum: 1    Maximum: 20
		 * @return {void} 
		 */
		GetProjectUrlsAggs(area: GetProjectUrlsAggsArea | null | undefined, last_analysis_slug: string | null | undefined, nb_analyses: number | null | undefined, requestBody: Array<UrlsAggsQuery>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects/{username}/{project_slug}/urls/aggs?area=' + area + '&last_analysis_slug=' + (last_analysis_slug == null ? '' : encodeURIComponent(last_analysis_slug)) + '&nb_analyses=' + nb_analyses, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface GetProjectAnalysesReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;
		previous?: string | null;
		results?: Array<Analysis>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size?: number | null;
	}
	export interface GetProjectAnalysesReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,
		previous: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetProjectAnalysesReturnFormGroup() {
		return new FormGroup<GetProjectAnalysesReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetCrawlStatisticsByFrequencyFrequency { '1mn' = '1mn', '5mn' = '5mn', '60mn' = '60mn' }

	export interface GetGanalyticsOrphanURLsReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;
		previous?: string | null;
		results?: Array<CrawlOrphanURLs>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size?: number | null;
	}
	export interface GetGanalyticsOrphanURLsReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,
		previous: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetGanalyticsOrphanURLsReturnFormGroup() {
		return new FormGroup<GetGanalyticsOrphanURLsReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSitemapsSamplesOutOfConfigReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;
		previous?: string | null;
		results?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size?: number | null;
	}
	export interface GetSitemapsSamplesOutOfConfigReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,
		previous: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetSitemapsSamplesOutOfConfigReturnFormGroup() {
		return new FormGroup<GetSitemapsSamplesOutOfConfigReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSitemapsSamplesSitemapsOnlyReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;
		previous?: string | null;
		results?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size?: number | null;
	}
	export interface GetSitemapsSamplesSitemapsOnlyReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,
		previous: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetSitemapsSamplesSitemapsOnlyReturnFormGroup() {
		return new FormGroup<GetSitemapsSamplesSitemapsOnlyReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLinksTopDomainsReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;
		previous?: string | null;
		results?: Array<LinksTopDomains>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size?: number | null;
	}
	export interface GetLinksTopDomainsReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,
		previous: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetLinksTopDomainsReturnFormGroup() {
		return new FormGroup<GetLinksTopDomainsReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLinksTopSubdomainsReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;
		previous?: string | null;
		results?: Array<LinksTopDomains>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size?: number | null;
	}
	export interface GetLinksTopSubdomainsReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,
		previous: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetLinksTopSubdomainsReturnFormGroup() {
		return new FormGroup<GetLinksTopSubdomainsReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetUrlsArea { current = 'current', disappeared = 'disappeared', new = 'new', search_engines_orphans = 'search_engines_orphans' }

	export interface GetUrlsReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;
		previous?: string | null;
		results?: Array<UrlDetail>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size?: number | null;
	}
	export interface GetUrlsReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,
		previous: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetUrlsReturnFormGroup() {
		return new FormGroup<GetUrlsReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetUrlsExportsReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;
		previous?: string | null;
		results?: Array<CsvExportStatus>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size?: number | null;
	}
	export interface GetUrlsExportsReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,
		previous: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetUrlsExportsReturnFormGroup() {
		return new FormGroup<GetUrlsExportsReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetUrlsSuggestedFiltersArea { current = 'current', new = 'new' }

	export interface GetUserProjectsReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;
		previous?: string | null;
		results?: Array<Project>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size?: number | null;
	}
	export interface GetUserProjectsReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,
		previous: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetUserProjectsReturnFormGroup() {
		return new FormGroup<GetUserProjectsReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSavedFiltersReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		next?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;
		previous?: string | null;
		results?: Array<ProjectSavedFilter>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size?: number | null;
	}
	export interface GetSavedFiltersReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,
		previous: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetSavedFiltersReturnFormGroup() {
		return new FormGroup<GetSavedFiltersReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetProjectUrlsAggsArea { current = 'current', disappeared = 'disappeared', new = 'new' }

}

