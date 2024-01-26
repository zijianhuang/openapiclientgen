import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface _18_24 {
		average?: number | null;
		multiplicity?: number | null;
		percentile?: number | null;
		statistical_info?: Statistical_info_18;
		stdev?: number | null;
		value?: number | null;
	}
	export interface _18_24FormProperties {
		average: FormControl<number | null | undefined>,
		multiplicity: FormControl<number | null | undefined>,
		percentile: FormControl<number | null | undefined>,
		stdev: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function Create_18_24FormGroup() {
		return new FormGroup<_18_24FormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			multiplicity: new FormControl<number | null | undefined>(undefined),
			percentile: new FormControl<number | null | undefined>(undefined),
			stdev: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Statistical_info_18 {
		error_range?: number | null;
		lower_bound?: number | null;
		upper_bound?: number | null;
	}
	export interface Statistical_info_18FormProperties {
		error_range: FormControl<number | null | undefined>,
		lower_bound: FormControl<number | null | undefined>,
		upper_bound: FormControl<number | null | undefined>,
	}
	export function CreateStatistical_info_18FormGroup() {
		return new FormGroup<Statistical_info_18FormProperties>({
			error_range: new FormControl<number | null | undefined>(undefined),
			lower_bound: new FormControl<number | null | undefined>(undefined),
			upper_bound: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface _25_34 {
		average?: number | null;
		multiplicity?: number | null;
		percentile?: number | null;
		statistical_info?: Statistical_info_25;
		stdev?: number | null;
		value?: number | null;
	}
	export interface _25_34FormProperties {
		average: FormControl<number | null | undefined>,
		multiplicity: FormControl<number | null | undefined>,
		percentile: FormControl<number | null | undefined>,
		stdev: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function Create_25_34FormGroup() {
		return new FormGroup<_25_34FormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			multiplicity: new FormControl<number | null | undefined>(undefined),
			percentile: new FormControl<number | null | undefined>(undefined),
			stdev: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Statistical_info_25 {
		error_range?: number | null;
		lower_bound?: number | null;
		upper_bound?: number | null;
	}
	export interface Statistical_info_25FormProperties {
		error_range: FormControl<number | null | undefined>,
		lower_bound: FormControl<number | null | undefined>,
		upper_bound: FormControl<number | null | undefined>,
	}
	export function CreateStatistical_info_25FormGroup() {
		return new FormGroup<Statistical_info_25FormProperties>({
			error_range: new FormControl<number | null | undefined>(undefined),
			lower_bound: new FormControl<number | null | undefined>(undefined),
			upper_bound: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface _35_44 {
		average?: number | null;
		multiplicity?: number | null;
		percentile?: number | null;
		statistical_info?: Statistical_info_35;
		stdev?: number | null;
		value?: number | null;
	}
	export interface _35_44FormProperties {
		average: FormControl<number | null | undefined>,
		multiplicity: FormControl<number | null | undefined>,
		percentile: FormControl<number | null | undefined>,
		stdev: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function Create_35_44FormGroup() {
		return new FormGroup<_35_44FormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			multiplicity: new FormControl<number | null | undefined>(undefined),
			percentile: new FormControl<number | null | undefined>(undefined),
			stdev: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Statistical_info_35 {
		error_range?: number | null;
		lower_bound?: number | null;
		upper_bound?: number | null;
	}
	export interface Statistical_info_35FormProperties {
		error_range: FormControl<number | null | undefined>,
		lower_bound: FormControl<number | null | undefined>,
		upper_bound: FormControl<number | null | undefined>,
	}
	export function CreateStatistical_info_35FormGroup() {
		return new FormGroup<Statistical_info_35FormProperties>({
			error_range: new FormControl<number | null | undefined>(undefined),
			lower_bound: new FormControl<number | null | undefined>(undefined),
			upper_bound: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface _400_Error {
		error_code_msg?: string | null;
		msg?: string | null;
		success?: string | null;
	}
	export interface _400_ErrorFormProperties {
		error_code_msg: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function Create_400_ErrorFormGroup() {
		return new FormGroup<_400_ErrorFormProperties>({
			error_code_msg: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface _401_Error {
		error_code_msg?: string | null;
		msg?: string | null;
		success?: string | null;
	}
	export interface _401_ErrorFormProperties {
		error_code_msg: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function Create_401_ErrorFormGroup() {
		return new FormGroup<_401_ErrorFormProperties>({
			error_code_msg: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface _403_Error {
		error_code_msg?: string | null;
		msg?: string | null;
		success?: string | null;
	}
	export interface _403_ErrorFormProperties {
		error_code_msg: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function Create_403_ErrorFormGroup() {
		return new FormGroup<_403_ErrorFormProperties>({
			error_code_msg: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface _404_Error {
		error_code_msg?: string | null;
		msg?: string | null;
		success?: string | null;
	}
	export interface _404_ErrorFormProperties {
		error_code_msg: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function Create_404_ErrorFormGroup() {
		return new FormGroup<_404_ErrorFormProperties>({
			error_code_msg: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface _500_Error {
		error_code_msg?: string | null;
		msg?: string | null;
		success?: string | null;
	}
	export interface _500_ErrorFormProperties {
		error_code_msg: FormControl<string | null | undefined>,
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function Create_500_ErrorFormGroup() {
		return new FormGroup<_500_ErrorFormProperties>({
			error_code_msg: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Application_Status {
		data?: Application_response;
		msg?: string | null;
		success?: string | null;
	}
	export interface Application_StatusFormProperties {
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function CreateApplication_StatusFormGroup() {
		return new FormGroup<Application_StatusFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Application_response {
		remaining_count?: number | null;
		reports?: Report_info;
		total_reports_count?: number | null;
		total_reports_done?: number | null;
	}
	export interface Application_responseFormProperties {
		remaining_count: FormControl<number | null | undefined>,
		total_reports_count: FormControl<number | null | undefined>,
		total_reports_done: FormControl<number | null | undefined>,
	}
	export function CreateApplication_responseFormGroup() {
		return new FormGroup<Application_responseFormProperties>({
			remaining_count: new FormControl<number | null | undefined>(undefined),
			total_reports_count: new FormControl<number | null | undefined>(undefined),
			total_reports_done: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Report_info {
		created?: string | null;
		name?: string | null;
		report_type?: string | null;
		status?: string | null;
	}
	export interface Report_infoFormProperties {
		created: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		report_type: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateReport_infoFormGroup() {
		return new FormGroup<Report_infoFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			report_type: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Combined_Age {
		'18 - 24'?: _18_24;
		'25 - 34'?: _25_34;
		'35 - 44'?: _35_44;
	}
	export interface Combined_AgeFormProperties {
	}
	export function CreateCombined_AgeFormGroup() {
		return new FormGroup<Combined_AgeFormProperties>({
		});

	}

	export interface Create_Tweet {
		data?: Create_tweet_response;
		msg?: string | null;
		success?: string | null;
	}
	export interface Create_TweetFormProperties {
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function CreateCreate_TweetFormGroup() {
		return new FormGroup<Create_TweetFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Create_tweet_response {
		aggregate_report_hash?: string | null;
		daily_report_hash?: string | null;
		monthly_report_hash?: string | null;
		weekly_report_hash?: string | null;
	}
	export interface Create_tweet_responseFormProperties {
		aggregate_report_hash: FormControl<string | null | undefined>,
		daily_report_hash: FormControl<string | null | undefined>,
		monthly_report_hash: FormControl<string | null | undefined>,
		weekly_report_hash: FormControl<string | null | undefined>,
	}
	export function CreateCreate_tweet_responseFormGroup() {
		return new FormGroup<Create_tweet_responseFormProperties>({
			aggregate_report_hash: new FormControl<string | null | undefined>(undefined),
			daily_report_hash: new FormControl<string | null | undefined>(undefined),
			monthly_report_hash: new FormControl<string | null | undefined>(undefined),
			weekly_report_hash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Create_Twitter {
		data?: Follower_create_response;
		msg?: string | null;
		success?: string | null;
	}
	export interface Create_TwitterFormProperties {
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function CreateCreate_TwitterFormGroup() {
		return new FormGroup<Create_TwitterFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Follower_create_response {
		report_hash?: string | null;
	}
	export interface Follower_create_responseFormProperties {
		report_hash: FormControl<string | null | undefined>,
	}
	export function CreateFollower_create_responseFormGroup() {
		return new FormGroup<Follower_create_responseFormProperties>({
			report_hash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Custom_Create {
		data?: Custom_create_response;
		msg?: string | null;
		success?: string | null;
	}
	export interface Custom_CreateFormProperties {
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function CreateCustom_CreateFormGroup() {
		return new FormGroup<Custom_CreateFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Custom_create_response {
		report_hash?: string | null;
	}
	export interface Custom_create_responseFormProperties {
		report_hash: FormControl<string | null | undefined>,
	}
	export function CreateCustom_create_responseFormGroup() {
		return new FormGroup<Custom_create_responseFormProperties>({
			report_hash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Custom_Generate {
		data?: Custom_generate_response;
		msg?: string | null;
		success?: string | null;
	}
	export interface Custom_GenerateFormProperties {
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function CreateCustom_GenerateFormGroup() {
		return new FormGroup<Custom_GenerateFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Custom_generate_response {
		upload_hash?: string | null;
	}
	export interface Custom_generate_responseFormProperties {
		upload_hash: FormControl<string | null | undefined>,
	}
	export function CreateCustom_generate_responseFormGroup() {
		return new FormGroup<Custom_generate_responseFormProperties>({
			upload_hash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Custom_Insert {
		data?: Custom_insert_response;
		msg?: string | null;
		success?: string | null;
	}
	export interface Custom_InsertFormProperties {
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function CreateCustom_InsertFormGroup() {
		return new FormGroup<Custom_InsertFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Custom_insert_response {
		distinct_relations?: number | null;
		total_relations?: number | null;
	}
	export interface Custom_insert_responseFormProperties {
		distinct_relations: FormControl<number | null | undefined>,
		total_relations: FormControl<number | null | undefined>,
	}
	export function CreateCustom_insert_responseFormGroup() {
		return new FormGroup<Custom_insert_responseFormProperties>({
			distinct_relations: new FormControl<number | null | undefined>(undefined),
			total_relations: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Female {
		average?: number | null;
		multiplicity?: number | null;
		percentile?: number | null;
		statistical_info?: Statistical_info_f;
		stdev?: number | null;
		value?: number | null;
	}
	export interface FemaleFormProperties {
		average: FormControl<number | null | undefined>,
		multiplicity: FormControl<number | null | undefined>,
		percentile: FormControl<number | null | undefined>,
		stdev: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateFemaleFormGroup() {
		return new FormGroup<FemaleFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			multiplicity: new FormControl<number | null | undefined>(undefined),
			percentile: new FormControl<number | null | undefined>(undefined),
			stdev: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Statistical_info_f {
		error_range?: number | null;
		lower_bound?: number | null;
		upper_bound?: number | null;
	}
	export interface Statistical_info_fFormProperties {
		error_range: FormControl<number | null | undefined>,
		lower_bound: FormControl<number | null | undefined>,
		upper_bound: FormControl<number | null | undefined>,
	}
	export function CreateStatistical_info_fFormGroup() {
		return new FormGroup<Statistical_info_fFormProperties>({
			error_range: new FormControl<number | null | undefined>(undefined),
			lower_bound: new FormControl<number | null | undefined>(undefined),
			upper_bound: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Male {
		average?: number | null;
		multiplicity?: number | null;
		percentile?: number | null;
		statistical_info?: Statistical_info_m;
		stdev?: number | null;
		value?: number | null;
	}
	export interface MaleFormProperties {
		average: FormControl<number | null | undefined>,
		multiplicity: FormControl<number | null | undefined>,
		percentile: FormControl<number | null | undefined>,
		stdev: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateMaleFormGroup() {
		return new FormGroup<MaleFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			multiplicity: new FormControl<number | null | undefined>(undefined),
			percentile: new FormControl<number | null | undefined>(undefined),
			stdev: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Statistical_info_m {
		error_range?: number | null;
		lower_bound?: number | null;
		upper_bound?: number | null;
	}
	export interface Statistical_info_mFormProperties {
		error_range: FormControl<number | null | undefined>,
		lower_bound: FormControl<number | null | undefined>,
		upper_bound: FormControl<number | null | undefined>,
	}
	export function CreateStatistical_info_mFormGroup() {
		return new FormGroup<Statistical_info_mFormProperties>({
			error_range: new FormControl<number | null | undefined>(undefined),
			lower_bound: new FormControl<number | null | undefined>(undefined),
			upper_bound: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Report_Dates {
		data?: Array<number>;
		msg?: string | null;
		success?: string | null;
	}
	export interface Report_DatesFormProperties {
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function CreateReport_DatesFormGroup() {
		return new FormGroup<Report_DatesFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Report_Status {
		msg?: string | null;
		success?: string | null;
	}
	export interface Report_StatusFormProperties {
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function CreateReport_StatusFormGroup() {
		return new FormGroup<Report_StatusFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Report_Success {
		data?: Report_response;
		msg?: string | null;
		success?: string | null;
	}
	export interface Report_SuccessFormProperties {
		msg: FormControl<string | null | undefined>,
		success: FormControl<string | null | undefined>,
	}
	export function CreateReport_SuccessFormGroup() {
		return new FormGroup<Report_SuccessFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Report_response {
		'Combined Age'?: Combined_Age;
		Sex?: Sex;
	}
	export interface Report_responseFormProperties {
	}
	export function CreateReport_responseFormGroup() {
		return new FormGroup<Report_responseFormProperties>({
		});

	}

	export interface Sex {
		Female?: Female;
		Male?: Male;
	}
	export interface SexFormProperties {
	}
	export function CreateSexFormGroup() {
		return new FormGroup<SexFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Used to understand API usage
		 * Remaining window and remaining count details, also returns reports that have been generated by this account.
		 * Get applications/status/
		 * @param {string} key User application key
		 * @return {Application_Status} Success
		 */
		ApplicationsStatusGetByKey(key: string, headersHandler?: () => HttpHeaders): Observable<Application_Status> {
			return this.http.get<Application_Status>(this.baseUri + 'applications/status/?key=' + (key == null ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Obtain report output
		 * Output is ordered by Demographic and followed by Affinity information. For each data point the following metrics are provided value, count, mean, percentile, multiplicity and average. For Geographic, and Demographic data points an additional statistical_info metric will be present with information regarding statistical relevance.
		 * Get reports/
		 * @param {string} report_hash Unique report hash
		 * @param {number} baseline Default value will be 'world'
		 * @param {number} report_date report_date represents a Unix timestamp of when the report was generated. Default value will be the latest report generated. You can request the /report/dates/ endpoint in order to obtain available timestamps. Date must be in the future.
		 * @param {number} sample Sample report indicator
		 * @return {Report_Success} Success
		 */
		ReportsGetByReport_hashAndBaselineAndReport_dateAndSample(report_hash: string, baseline: number | null | undefined, report_date: number | null | undefined, sample: number, headersHandler?: () => HttpHeaders): Observable<Report_Success> {
			return this.http.get<Report_Success>(this.baseUri + 'reports/?report_hash=' + (report_hash == null ? '' : encodeURIComponent(report_hash)) + '&baseline=' + baseline + '&report_date=' + report_date + '&sample=' + sample, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Obtain report output
		 * Output is ordered by Demographic and followed by Affinity information. For each data point the following metrics are provided value, count, mean, percentile, multiplicity and average. For Geographic, and Demographic data points an additional statistical_info metric will be present with information regarding statistical relevance.
		 * Post reports/
		 * @param {string} report_hash Unique report hash
		 * @param {number} baseline Default value will be 'world'
		 * @param {number} report_date report_date represents a Unix timestamp of when the report was generated. Default value will be the latest report generated. You can request the /report/dates/ endpoint in order to obtain available timestamps. Date must be in the future.
		 * @param {number} sample Sample report indicator
		 * @return {Report_Success} Success
		 */
		ReportsPostByReport_hashAndBaselineAndReport_dateAndSample(report_hash: string, baseline: number | null | undefined, report_date: number | null | undefined, sample: number, headersHandler?: () => HttpHeaders): Observable<Report_Success> {
			return this.http.post<Report_Success>(this.baseUri + 'reports/?report_hash=' + (report_hash == null ? '' : encodeURIComponent(report_hash)) + '&baseline=' + baseline + '&report_date=' + report_date + '&sample=' + sample, null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Step 3 of executing custom report
		 * Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.
		 * Get reports/custom/create/
		 * @param {string} upload_hash Upload hash to be used for inserting handles
		 * @param {string} filter Filtering options to be used when creating a filtered report. The options must be in JSON form, example: {'gender':['male'],'ages':['18-24'],'countries':['usa']}
		 * @return {void} 
		 */
		ReportsCustomCreateGetByUpload_hashAndFilter(upload_hash: string, filter: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reports/custom/create/?upload_hash=' + (upload_hash == null ? '' : encodeURIComponent(upload_hash)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Step 3 of executing custom report
		 * Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.
		 * Post reports/custom/create/
		 * @param {string} upload_hash Upload hash to be used for inserting handles
		 * @param {string} filter Filtering options to be used when creating a filtered report. The options must be in JSON form, example: {'gender':['male'],'ages':['18-24'],'countries':['usa']}
		 * @return {void} 
		 */
		ReportsCustomCreatePostByUpload_hashAndFilter(upload_hash: string, filter: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reports/custom/create/?upload_hash=' + (upload_hash == null ? '' : encodeURIComponent(upload_hash)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Step 1 of executing custom report
		 * Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.
		 * Get reports/custom/generate/
		 * @param {string} report_name Name of the report
		 * @return {Custom_Generate} Success
		 */
		ReportsCustomGenerateGetByReport_name(report_name: string, headersHandler?: () => HttpHeaders): Observable<Custom_Generate> {
			return this.http.get<Custom_Generate>(this.baseUri + 'reports/custom/generate/?report_name=' + (report_name == null ? '' : encodeURIComponent(report_name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Step 1 of executing custom report
		 * Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.
		 * Post reports/custom/generate/
		 * @param {string} report_name Name of the report
		 * @return {Custom_Generate} Success
		 */
		ReportsCustomGeneratePostByReport_name(report_name: string, headersHandler?: () => HttpHeaders): Observable<Custom_Generate> {
			return this.http.post<Custom_Generate>(this.baseUri + 'reports/custom/generate/?report_name=' + (report_name == null ? '' : encodeURIComponent(report_name)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Step 2 of executing custom report
		 * Inserting twitter ids or handles into a custom report. This is used for custom reports only
		 * Get reports/custom/insert/
		 * @param {string} upload_hash Upload hash to be used for inserting handles
		 * @param {Array<string>} ids List of twitter ids, separated by commas, to be inserted into report. Ids must be enclosed with brackets ie. [177490485] or [177490485,23423434]
		 * @return {void} 
		 */
		ReportsCustomInsertGetByUpload_hashAndIds(upload_hash: string, ids: Array<string>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reports/custom/insert/?upload_hash=' + (upload_hash == null ? '' : encodeURIComponent(upload_hash)) + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Step 2 of executing custom report
		 * Inserting twitter ids or handles into a custom report. This is used for custom reports only
		 * Post reports/custom/insert/
		 * @param {string} upload_hash Upload hash to be used for inserting handles
		 * @param {Array<string>} ids List of twitter ids, separated by commas, to be inserted into report. Ids must be enclosed with brackets ie. [177490485] or [177490485,23423434]
		 * @return {void} 
		 */
		ReportsCustomInsertPostByUpload_hashAndIds(upload_hash: string, ids: Array<string>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reports/custom/insert/?upload_hash=' + (upload_hash == null ? '' : encodeURIComponent(upload_hash)) + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&'), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get report dates available for a specific report
		 * Get report dates available for a specific report.
		 * Get reports/dates/
		 * @param {string} report_hash Unique report hash
		 * @return {Report_Dates} Success
		 */
		ReportsDatesGetByReport_hash(report_hash: string, headersHandler?: () => HttpHeaders): Observable<Report_Dates> {
			return this.http.get<Report_Dates>(this.baseUri + 'reports/dates/?report_hash=' + (report_hash == null ? '' : encodeURIComponent(report_hash)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get report dates available for a specific report
		 * Get report dates available for a specific report.
		 * Post reports/dates/
		 * @param {string} report_hash Unique report hash
		 * @return {Report_Dates} Success
		 */
		ReportsDatesPostByReport_hash(report_hash: string, headersHandler?: () => HttpHeaders): Observable<Report_Dates> {
			return this.http.post<Report_Dates>(this.baseUri + 'reports/dates/?report_hash=' + (report_hash == null ? '' : encodeURIComponent(report_hash)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of generated reports
		 * Returns a list of custom reports generated by user (report name to upload hash etc).
		 * Get reports/status/
		 * @param {string} report_hash Unique hash belonging to report
		 * @return {Report_Status} Success
		 */
		ReportsStatusGetByReport_hash(report_hash: string, headersHandler?: () => HttpHeaders): Observable<Report_Status> {
			return this.http.get<Report_Status>(this.baseUri + 'reports/status/?report_hash=' + (report_hash == null ? '' : encodeURIComponent(report_hash)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of generated reports
		 * Returns a list of custom reports generated by user (report name to upload hash etc).
		 * Post reports/status/
		 * @param {string} report_hash Unique hash belonging to report
		 * @return {Report_Status} Success
		 */
		ReportsStatusPostByReport_hash(report_hash: string, headersHandler?: () => HttpHeaders): Observable<Report_Status> {
			return this.http.post<Report_Status>(this.baseUri + 'reports/status/?report_hash=' + (report_hash == null ? '' : encodeURIComponent(report_hash)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Used to create tweet reports
		 * This report details the audience of the users who have tweeted content that matches what was provided in the keywords. To create custom or twitter reports other methods must be used.
		 * Get reports/tweet/create/
		 * @param {string} report_name Name of report
		 * @param {number} start_date A unix timestamp. start_date will be set to the previous midnight.
		 * @param {number} end_date A unix timestamp. end_date will be set to the next midnight.
		 * @param {string} terms If you are tracking a single term, then the keyword itself is suffice otherwise, tracking multiple terms must be in JSON form, example '[{"operator":"","word":"http://google.com"},{"operator":"or","word":"#test"},{"operator":"and","word":"test2"}]' Which results in filtering tweets containing 'http://google.com' OR '#test' AND 'test2'. (NOTE) Make sure to URL encode the terms value for multiple terms.
		 * @param {string} filter Filtering options to be used when creating a filtered report. The options must be in JSON form, example: {'gender':['male'],'ages':['18-24'],'countries':['usa']}
		 * @return {void} 
		 */
		ReportsTweetCreateGetByReport_nameAndStart_dateAndEnd_dateAndTermsAndFilter(report_name: string, start_date: number, end_date: number, terms: string, filter: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reports/tweet/create/?report_name=' + (report_name == null ? '' : encodeURIComponent(report_name)) + '&start_date=' + start_date + '&end_date=' + end_date + '&terms=' + (terms == null ? '' : encodeURIComponent(terms)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Used to create tweet reports
		 * This report details the audience of the users who have tweeted content that matches what was provided in the keywords. To create custom or twitter reports other methods must be used.
		 * Post reports/tweet/create/
		 * @param {string} report_name Name of report
		 * @param {number} start_date A unix timestamp. start_date will be set to the previous midnight.
		 * @param {number} end_date A unix timestamp. end_date will be set to the next midnight.
		 * @param {string} terms If you are tracking a single term, then the keyword itself is suffice otherwise, tracking multiple terms must be in JSON form, example '[{"operator":"","word":"http://google.com"},{"operator":"or","word":"#test"},{"operator":"and","word":"test2"}]' Which results in filtering tweets containing 'http://google.com' OR '#test' AND 'test2'. (NOTE) Make sure to URL encode the terms value for multiple terms.
		 * @param {string} filter Filtering options to be used when creating a filtered report. The options must be in JSON form, example: {'gender':['male'],'ages':['18-24'],'countries':['usa']}
		 * @return {void} 
		 */
		ReportsTweetCreatePostByReport_nameAndStart_dateAndEnd_dateAndTermsAndFilter(report_name: string, start_date: number, end_date: number, terms: string, filter: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reports/tweet/create/?report_name=' + (report_name == null ? '' : encodeURIComponent(report_name)) + '&start_date=' + start_date + '&end_date=' + end_date + '&terms=' + (terms == null ? '' : encodeURIComponent(terms)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Used to create twitter follower report
		 * This report uses the twitter followers as the audience. To create custom or tweet reports other methods must be used. Any report older than two days will be automatically regenerated upon create.
		 * Get reports/twitter/create/
		 * @param {number} twitter_id (required if twitter_handle is not supplied) twitter_id must be sent with all client requests. Multiple handles are separated by commas.
		 * @param {string} twitter_handle (required if twitter_id is not supplied) twitter_handle must be sent with all client requests. Multiple ids are separated by commas.
		 * @param {string} filter Filtering options to be used when creating a filtered report. The options must be in JSON form, example: {'gender':['male'],'ages':['18-24'],'countries':['usa']}
		 * @return {void} 
		 */
		ReportsTwitterCreateGetByTwitter_idAndTwitter_handleAndFilter(twitter_id: number | null | undefined, twitter_handle: string | null | undefined, filter: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reports/twitter/create/?twitter_id=' + twitter_id + '&twitter_handle=' + (twitter_handle == null ? '' : encodeURIComponent(twitter_handle)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Used to create twitter follower report
		 * This report uses the twitter followers as the audience. To create custom or tweet reports other methods must be used. Any report older than two days will be automatically regenerated upon create.
		 * Post reports/twitter/create/
		 * @param {number} twitter_id (required if twitter_handle is not supplied) twitter_id must be sent with all client requests. Multiple handles are separated by commas.
		 * @param {string} twitter_handle (required if twitter_id is not supplied) twitter_handle must be sent with all client requests. Multiple ids are separated by commas.
		 * @param {string} filter Filtering options to be used when creating a filtered report. The options must be in JSON form, example: {'gender':['male'],'ages':['18-24'],'countries':['usa']}
		 * @return {void} 
		 */
		ReportsTwitterCreatePostByTwitter_idAndTwitter_handleAndFilter(twitter_id: number | null | undefined, twitter_handle: string | null | undefined, filter: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reports/twitter/create/?twitter_id=' + twitter_id + '&twitter_handle=' + (twitter_handle == null ? '' : encodeURIComponent(twitter_handle)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

