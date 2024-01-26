import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Analysis {

		/**
		 * The commit identifier.
		 * The commit identifier is included only if the same commit was successfully analyzed for all languages. A detailed breakdown of which commit was analyzed for each language is provided in the `languages` property.
		 */
		'commit-id'?: string | null;

		/** The analysis identifier. */
		id?: string | null;

		/** Per-language information. */
		languages?: Array<Language_stats>;

		/** A page on LGTM to view the logs for this analysis. */
		'log-url'?: string | null;
		project?: Project;

		/** A page on LGTM to view the results of this analysis. */
		'results-url'?: string | null;
	}
	export interface AnalysisFormProperties {

		/**
		 * The commit identifier.
		 * The commit identifier is included only if the same commit was successfully analyzed for all languages. A detailed breakdown of which commit was analyzed for each language is provided in the `languages` property.
		 */
		'commit-id': FormControl<string | null | undefined>,

		/** The analysis identifier. */
		id: FormControl<string | null | undefined>,

		/** A page on LGTM to view the logs for this analysis. */
		'log-url': FormControl<string | null | undefined>,

		/** A page on LGTM to view the results of this analysis. */
		'results-url': FormControl<string | null | undefined>,
	}
	export function CreateAnalysisFormGroup() {
		return new FormGroup<AnalysisFormProperties>({
			'commit-id': new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			'log-url': new FormControl<string | null | undefined>(undefined),
			'results-url': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Language_stats {

		/** The number of alerts for this language. */
		alerts?: number | null;

		/** The time the commit was analyzed. */
		'analysis-date'?: Date | null;

		/** The time of the commit. */
		'commit-date'?: Date | null;

		/** The latest successfully analyzed commit for the language. All statistics refer to this commit. */
		'commit-id'?: string | null;

		/** The short name for the language. */
		language?: string | null;

		/** The number of lines of code for this language. */
		lines?: number | null;

		/** The status of the analysis of this language. */
		status?: Language_statsStatus | null;
	}
	export interface Language_statsFormProperties {

		/** The number of alerts for this language. */
		alerts: FormControl<number | null | undefined>,

		/** The time the commit was analyzed. */
		'analysis-date': FormControl<Date | null | undefined>,

		/** The time of the commit. */
		'commit-date': FormControl<Date | null | undefined>,

		/** The latest successfully analyzed commit for the language. All statistics refer to this commit. */
		'commit-id': FormControl<string | null | undefined>,

		/** The short name for the language. */
		language: FormControl<string | null | undefined>,

		/** The number of lines of code for this language. */
		lines: FormControl<number | null | undefined>,

		/** The status of the analysis of this language. */
		status: FormControl<Language_statsStatus | null | undefined>,
	}
	export function CreateLanguage_statsFormGroup() {
		return new FormGroup<Language_statsFormProperties>({
			alerts: new FormControl<number | null | undefined>(undefined),
			'analysis-date': new FormControl<Date | null | undefined>(undefined),
			'commit-date': new FormControl<Date | null | undefined>(undefined),
			'commit-id': new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			lines: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Language_statsStatus | null | undefined>(undefined),
		});

	}

	export enum Language_statsStatus { success = 0, failure = 1, pending = 2 }

	export interface Project {

		/** The numeric identifier of the project. */
		id?: number | null;

		/** The display name of the project. */
		name?: string | null;

		/** The full URL of the project on LGTM. */
		url?: string | null;

		/** The URL identifier of the project. */
		'url-identifier'?: string | null;
	}
	export interface ProjectFormProperties {

		/** The numeric identifier of the project. */
		id: FormControl<number | null | undefined>,

		/** The display name of the project. */
		name: FormControl<string | null | undefined>,

		/** The full URL of the project on LGTM. */
		url: FormControl<string | null | undefined>,

		/** The URL identifier of the project. */
		'url-identifier': FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			'url-identifier': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Code_review {

		/** The identifier for the review. */
		id?: string | null;

		/** Detailed information for each language analyzed. */
		languages?: Array<Codereview_languages>;

		/** A page on LGTM to view the status and results of this code review. */
		'results-url'?: string | null;

		/** The status of the code review. */
		status?: Codereview_languagesStatus | null;

		/** A summary of the current status of the code review. */
		'status-message'?: string | null;
	}
	export interface Code_reviewFormProperties {

		/** The identifier for the review. */
		id: FormControl<string | null | undefined>,

		/** A page on LGTM to view the status and results of this code review. */
		'results-url': FormControl<string | null | undefined>,

		/** The status of the code review. */
		status: FormControl<Codereview_languagesStatus | null | undefined>,

		/** A summary of the current status of the code review. */
		'status-message': FormControl<string | null | undefined>,
	}
	export function CreateCode_reviewFormGroup() {
		return new FormGroup<Code_reviewFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			'results-url': new FormControl<string | null | undefined>(undefined),
			status: new FormControl<Codereview_languagesStatus | null | undefined>(undefined),
			'status-message': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Codereview_languages {

		/** The list of added and fixed alerts per query for this language. */
		alerts?: Array<Codereview_alerts>;

		/** The total number of alerts fixed by the patch for this language. */
		fixed?: number | null;

		/** The language analyzed. */
		language?: string | null;

		/** The total number of alerts introduced by the patch for this language. */
		new?: number | null;

		/** The status for analysis of this language. */
		status?: Codereview_languagesStatus | null;

		/** The current state of analysis of this langauge. When available, a summary of analysis results. */
		'status-message'?: string | null;
	}
	export interface Codereview_languagesFormProperties {

		/** The total number of alerts fixed by the patch for this language. */
		fixed: FormControl<number | null | undefined>,

		/** The language analyzed. */
		language: FormControl<string | null | undefined>,

		/** The total number of alerts introduced by the patch for this language. */
		new: FormControl<number | null | undefined>,

		/** The status for analysis of this language. */
		status: FormControl<Codereview_languagesStatus | null | undefined>,

		/** The current state of analysis of this langauge. When available, a summary of analysis results. */
		'status-message': FormControl<string | null | undefined>,
	}
	export function CreateCodereview_languagesFormGroup() {
		return new FormGroup<Codereview_languagesFormProperties>({
			fixed: new FormControl<number | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			new: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Codereview_languagesStatus | null | undefined>(undefined),
			'status-message': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Codereview_alerts {

		/** The number of alerts fixed by the patch for this query. */
		fixed?: number | null;

		/** The number of alerts introduced by the patch for this query. */
		new?: number | null;
		query?: Query;
	}
	export interface Codereview_alertsFormProperties {

		/** The number of alerts fixed by the patch for this query. */
		fixed: FormControl<number | null | undefined>,

		/** The number of alerts introduced by the patch for this query. */
		new: FormControl<number | null | undefined>,
	}
	export function CreateCodereview_alertsFormGroup() {
		return new FormGroup<Codereview_alertsFormProperties>({
			fixed: new FormControl<number | null | undefined>(undefined),
			new: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Query {

		/** The numeric identifier of the query. */
		id?: number | null;

		/** The [language code](https://lgtm.com/help/lgtm/analysis-faqs#which-languages-are-supported) of the query. */
		language?: string | null;

		/** The `@name` of the query. */
		name?: string | null;

		/** The name of the query pack that contains the query. */
		pack?: string | null;
		properties?: Query_properties;

		/** A page on LGTM to view the details of the query. */
		url?: string | null;
	}
	export interface QueryFormProperties {

		/** The numeric identifier of the query. */
		id: FormControl<number | null | undefined>,

		/** The [language code](https://lgtm.com/help/lgtm/analysis-faqs#which-languages-are-supported) of the query. */
		language: FormControl<string | null | undefined>,

		/** The `@name` of the query. */
		name: FormControl<string | null | undefined>,

		/** The name of the query pack that contains the query. */
		pack: FormControl<string | null | undefined>,

		/** A page on LGTM to view the details of the query. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pack: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Query_properties {

		/** The `@id` of the query. */
		id?: string | null;

		/** The `@name` of the query. */
		name?: string | null;

		/** The severity of the query. */
		severity?: string | null;

		/** The `@tags` associated with the query. */
		tags?: Array<string>;
	}
	export interface Query_propertiesFormProperties {

		/** The `@id` of the query. */
		id: FormControl<string | null | undefined>,

		/** The `@name` of the query. */
		name: FormControl<string | null | undefined>,

		/** The severity of the query. */
		severity: FormControl<string | null | undefined>,
	}
	export function CreateQuery_propertiesFormGroup() {
		return new FormGroup<Query_propertiesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Codereview_languagesStatus { pending = 0, failure = 1, success = 2 }

	export interface Health {

		/** A description of the status of the service. */
		description?: string | null;

		/** Details of the health of the service. This contains information about the status of the components on which the service depends. */
		details?: {[id: string]: Health };

		/** The status of the service. */
		status?: HealthStatus | null;
	}
	export interface HealthFormProperties {

		/** A description of the status of the service. */
		description: FormControl<string | null | undefined>,

		/** Details of the health of the service. This contains information about the status of the components on which the service depends. */
		details: FormControl<{[id: string]: Health } | null | undefined>,

		/** The status of the service. */
		status: FormControl<HealthStatus | null | undefined>,
	}
	export function CreateHealthFormGroup() {
		return new FormGroup<HealthFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<{[id: string]: Health } | null | undefined>(undefined),
			status: new FormControl<HealthStatus | null | undefined>(undefined),
		});

	}

	export enum HealthStatus { UNKNOWN = 0, UP = 1, DOWN = 2 }

	export interface Measurement {

		/** The date and time when this metric was computed. */
		timestamp?: Date | null;

		/** The value of this metric at the timestamp reported. */
		value?: number | null;
	}
	export interface MeasurementFormProperties {

		/** The date and time when this metric was computed. */
		timestamp: FormControl<Date | null | undefined>,

		/** The value of this metric at the timestamp reported. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateMeasurementFormGroup() {
		return new FormGroup<MeasurementFormProperties>({
			timestamp: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Metric {

		/** A time series of values taken by the metric at different timestamps. */
		measurements?: Array<Measurement>;

		/** The identifier by which this metric is referenced in the API. */
		'metric-id'?: string | null;
	}
	export interface MetricFormProperties {

		/** The identifier by which this metric is referenced in the API. */
		'metric-id': FormControl<string | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			'metric-id': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Metric_name {

		/** The name by which the metric is listed in the user interface. */
		description?: string | null;

		/** The identifier by which this metric is referenced in the API. */
		'metric-id'?: string | null;
	}
	export interface Metric_nameFormProperties {

		/** The name by which the metric is listed in the user interface. */
		description: FormControl<string | null | undefined>,

		/** The identifier by which this metric is referenced in the API. */
		'metric-id': FormControl<string | null | undefined>,
	}
	export function CreateMetric_nameFormGroup() {
		return new FormGroup<Metric_nameFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			'metric-id': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Metrics_list {

		/** The list of names and identifiers by which the metrics are referenced. */
		data?: Array<Metric_name>;
	}
	export interface Metrics_listFormProperties {
	}
	export function CreateMetrics_listFormGroup() {
		return new FormGroup<Metrics_listFormProperties>({
		});

	}

	export interface Operation {

		/** The identifier for the operation. */
		id?: number | null;

		/** Status of the operation. */
		status?: OperationStatus | null;
		'task-result'?: Analysis;

		/** The URL for the result of the task. For some operations, included only on completion. */
		'task-result-url'?: string | null;

		/** Required */
		'task-type': OperationTask_type;
		uploads?: {[id: string]: Upload_session };
	}
	export interface OperationFormProperties {

		/** The identifier for the operation. */
		id: FormControl<number | null | undefined>,

		/** Status of the operation. */
		status: FormControl<OperationStatus | null | undefined>,

		/** The URL for the result of the task. For some operations, included only on completion. */
		'task-result-url': FormControl<string | null | undefined>,

		/** Required */
		'task-type': FormControl<OperationTask_type | null | undefined>,
		uploads: FormControl<{[id: string]: Upload_session } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<OperationStatus | null | undefined>(undefined),
			'task-result-url': new FormControl<string | null | undefined>(undefined),
			'task-type': new FormControl<OperationTask_type | null | undefined>(undefined, [Validators.required]),
			uploads: new FormControl<{[id: string]: Upload_session } | null | undefined>(undefined),
		});

	}

	export enum OperationStatus { pending = 0, done = 1 }

	export enum OperationTask_type { analysis = 0, codereview = 1, queryjob = 2 }

	export interface Upload_session {

		/** The identifier of the upload session */
		id?: string | null;

		/** The URL for uploading file content. */
		url?: string | null;
	}
	export interface Upload_sessionFormProperties {

		/** The identifier of the upload session */
		id: FormControl<string | null | undefined>,

		/** The URL for uploading file content. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUpload_sessionFormGroup() {
		return new FormGroup<Upload_sessionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Project_details extends Project {

		/** Per-language information. */
		languages?: Array<Project_language_stats>;
	}
	export interface Project_detailsFormProperties extends ProjectFormProperties {
	}
	export function CreateProject_detailsFormGroup() {
		return new FormGroup<Project_detailsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			'url-identifier': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Project_language_stats extends Language_stats {

		/** The grade of the code for this language. */
		grade?: Project_language_statsGrade | null;
	}
	export interface Project_language_statsFormProperties extends Language_statsFormProperties {

		/** The grade of the code for this language. */
		grade: FormControl<Project_language_statsGrade | null | undefined>,
	}
	export function CreateProject_language_statsFormGroup() {
		return new FormGroup<Project_language_statsFormProperties>({
			alerts: new FormControl<number | null | undefined>(undefined),
			'analysis-date': new FormControl<Date | null | undefined>(undefined),
			'commit-date': new FormControl<Date | null | undefined>(undefined),
			'commit-id': new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			lines: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Language_statsStatus | null | undefined>(undefined),
			grade: new FormControl<Project_language_statsGrade | null | undefined>(undefined),
		});

	}

	export enum Project_language_statsGrade { 'A+' = 0, A = 1, B = 2, C = 3, D = 4, E = 5 }

	export interface Project_list {

		/** A single page of projects. */
		data?: Array<Project>;

		/** The URL to retrieve the next page of projects. Omitted if there is no next page. */
		nextPageUrl?: string | null;
	}
	export interface Project_listFormProperties {

		/** The URL to retrieve the next page of projects. Omitted if there is no next page. */
		nextPageUrl: FormControl<string | null | undefined>,
	}
	export function CreateProject_listFormGroup() {
		return new FormGroup<Project_listFormProperties>({
			nextPageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Query_result_entry {
		file?: string | null;
		line?: number | null;
		url?: string | null;
		value?: string | null;
	}
	export interface Query_result_entryFormProperties {
		file: FormControl<string | null | undefined>,
		line: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateQuery_result_entryFormGroup() {
		return new FormGroup<Query_result_entryFormProperties>({
			file: new FormControl<string | null | undefined>(undefined),
			line: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Queryjob {

		/** The identifier for the QueryJob. */
		id?: string | null;

		/** URL to view the result of the query job. */
		'result-url'?: string | null;
		stats?: Queryjob_stats;
	}
	export interface QueryjobFormProperties {

		/** The identifier for the QueryJob. */
		id: FormControl<string | null | undefined>,

		/** URL to view the result of the query job. */
		'result-url': FormControl<string | null | undefined>,
	}
	export function CreateQueryjobFormGroup() {
		return new FormGroup<QueryjobFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			'result-url': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Queryjob_stats {

		/** The number of projects for which the query failed. */
		failed?: number | null;

		/**
		 * The number of projects scheduled for execution but pending. For very large jobs, not all projects are scheduled at the same time. Therefore, this number might increase as more projects are scheduled. This means that `successful + failed + pending` might be smaller than the total number of project that will be analyzed.
		 */
		pending?: number | null;

		/** The number of projects for which the query returned results. */
		'success-with-result'?: number | null;

		/** The number of projects for which the query was successful but returned no results. */
		'success-without-result'?: number | null;

		/**
		 * The number of projects for which the query completed succesfully. These are broken down further between the ones that have results (`success-with-result`) and the ones that do not (`success-without-result`): `successful = success-with-result + success-without-result`.
		 */
		successful?: number | null;
	}
	export interface Queryjob_statsFormProperties {

		/** The number of projects for which the query failed. */
		failed: FormControl<number | null | undefined>,

		/**
		 * The number of projects scheduled for execution but pending. For very large jobs, not all projects are scheduled at the same time. Therefore, this number might increase as more projects are scheduled. This means that `successful + failed + pending` might be smaller than the total number of project that will be analyzed.
		 */
		pending: FormControl<number | null | undefined>,

		/** The number of projects for which the query returned results. */
		'success-with-result': FormControl<number | null | undefined>,

		/** The number of projects for which the query was successful but returned no results. */
		'success-without-result': FormControl<number | null | undefined>,

		/**
		 * The number of projects for which the query completed succesfully. These are broken down further between the ones that have results (`success-with-result`) and the ones that do not (`success-without-result`): `successful = success-with-result + success-without-result`.
		 */
		successful: FormControl<number | null | undefined>,
	}
	export function CreateQueryjob_statsFormGroup() {
		return new FormGroup<Queryjob_statsFormProperties>({
			failed: new FormControl<number | null | undefined>(undefined),
			pending: new FormControl<number | null | undefined>(undefined),
			'success-with-result': new FormControl<number | null | undefined>(undefined),
			'success-without-result': new FormControl<number | null | undefined>(undefined),
			successful: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Queryjob_project_results {

		/** Columns returned by the query. */
		columns?: Array<string>;

		/** Results of the query divided by row. */
		data?: Array<string>;

		/** URL for retrieving the next part of the results (if applicable). */
		next?: string | null;
		project?: Project;
	}
	export interface Queryjob_project_resultsFormProperties {

		/** URL for retrieving the next part of the results (if applicable). */
		next: FormControl<string | null | undefined>,
	}
	export function CreateQueryjob_project_resultsFormGroup() {
		return new FormGroup<Queryjob_project_resultsFormProperties>({
			next: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Queryjob_results_overview {
		data?: Array<Queryjob_results_overview_entry>;
		next?: string | null;
	}
	export interface Queryjob_results_overviewFormProperties {
		next: FormControl<string | null | undefined>,
	}
	export function CreateQueryjob_results_overviewFormGroup() {
		return new FormGroup<Queryjob_results_overviewFormProperties>({
			next: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Queryjob_results_overview_entry {

		/** Error message. Only applies if `status` is `error`. */
		error?: string | null;

		/** Number of results that refer to elements outside the source tree (e.g., libraries). Only applies if `status` is `success`. */
		external?: number | null;

		/** Number of results that refer to elements within the source tree. Only applies if `status` is `success`. */
		internal?: number | null;
		project?: Project;

		/** Describes whether the query was sucessfully executed against the project. */
		status?: Queryjob_results_overview_entryStatus | null;

		/**
		 * Number of results returned by the query. This is broken down further into `internal` and `external` results. Only applies if `status` is `success`.
		 */
		total?: number | null;
	}
	export interface Queryjob_results_overview_entryFormProperties {

		/** Error message. Only applies if `status` is `error`. */
		error: FormControl<string | null | undefined>,

		/** Number of results that refer to elements outside the source tree (e.g., libraries). Only applies if `status` is `success`. */
		external: FormControl<number | null | undefined>,

		/** Number of results that refer to elements within the source tree. Only applies if `status` is `success`. */
		internal: FormControl<number | null | undefined>,

		/** Describes whether the query was sucessfully executed against the project. */
		status: FormControl<Queryjob_results_overview_entryStatus | null | undefined>,

		/**
		 * Number of results returned by the query. This is broken down further into `internal` and `external` results. Only applies if `status` is `success`.
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateQueryjob_results_overview_entryFormGroup() {
		return new FormGroup<Queryjob_results_overview_entryFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			external: new FormControl<number | null | undefined>(undefined),
			internal: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Queryjob_results_overview_entryStatus | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Queryjob_results_overview_entryStatus { success = 0, error = 1 }

	export interface Version {

		/** The version number of the API. */
		apiVersion?: string | null;
	}
	export interface VersionFormProperties {

		/** The version number of the API. */
		apiVersion: FormControl<string | null | undefined>,
	}
	export function CreateVersionFormGroup() {
		return new FormGroup<VersionFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Version information
		 * Get the version information of this API.
		 * Get 
		 * @return {Version} Success. Requested data returned.
		 */
		GetVersion(): Observable<Version> {
			return this.http.get<Version>(this.baseUri + '', {});
		}

		/**
		 * Get analysis summary
		 * Get a summary of the analysis results for a specific analysis identifier.
		 * To find the analysis identifier for a commit, use the `/analyses/{project-id}/commits/{commit-id}` endpoint. For more information, see [Get analysis summary for a specific commit](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAnalysisForCommit).
		 * This endpoint reports the commit analyzed and a summary of the results for each language. Alternatively, you can use this identifier to download full details  of all the alerts found by the analysis. For more information, see [Get detailed alert information](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAlerts).
		 * Get analyses/{analysis_id}
		 * @param {string} analysis_id The analysis identifier.
		 * @return {Analysis} Success. Requested data returned.
		 */
		GetAnalysis(analysis_id: string): Observable<Analysis> {
			return this.http.get<Analysis>(this.baseUri + 'analyses/{analysis_id}', {});
		}

		/**
		 * Get detailed alert information
		 * Download all the alerts found by an analysis.
		 * Use the `Accept:` request header to specify the output media type as either CSV or [SARIF](https://lgtm.com/help/lgtm/sarif-results-file):
		 * - `application/sarif+json`: Alerts in SARIF format. If no version is specified the latest supported SARIF version is used.
		 * - `application/json`: Alerts in SARIF format (*deprecated*).
		 * If no version is specified, [SARIF 2.0.0](http://docs.oasis-open.org/sarif/sarif/v2.0/sarif-v2.0.html)
		 * is used for backwards compatibility.
		 * - `text/csv`: Alerts in CSV format. The `text/csv` media type has two optional parameters:
		 * - `charset`: determines the character encoding of the text, by default UTF-8.
		 * - `header`: determines whether a header row with column names is `present` or `absent`.
		 * The default value for this parameter is `present`.
		 * For example, an Accept header with value `text/csv; header=absent`
		 * would result in CSV output without a header row.
		 * To find the analysis identifier for a commit, use the `/analyses/{project-id}/commits/{commit-id}`  endpoint. For more information, see [Get analysis summary for a specific commit](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAnalysisForCommit).
		 * Get analyses/{analysis_id}/alerts
		 * @param {string} analysis_id The analysis identifier.
		 * @param {string} sarif_version The desired version of the SARIF format. Currently supported versions are `1.0.0`, `2.0.0`, and `2.1.0`.
		 * @param {boolean} excluded_files Set `true` to include results in files that are excluded from the output by default. This includes results in test code and generated files. For more information, see [File classification](https://lgtm.com/help/lgtm/file-classification).
		 * @return {string} Success. Requested data returned.
		 */
		GetAlerts(analysis_id: string, sarif_version: string | null | undefined, excluded_files: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'analyses/{analysis_id}/alerts?sarif_version=' + (sarif_version == null ? '' : encodeURIComponent(sarif_version)) + '&excluded_files=' + excluded_files, { responseType: 'text' });
		}

		/**
		 * Run analysis of a specific commit
		 * Trigger the analysis of a specific commit to a project. If a previous attempt to analyze that commit failed, this triggers a fresh analysis.  This is supported for all LGTM projects, regardless of repository type or host. The commit must be available in the main repository, but can be on a branch that isn't tracked by LGTM. For both LGTM.com and LGTM Enterprise, you must include an access token with the `analyses:write` scope.
		 * When you request the analysis of a commit, the API returns:
		 * - `operation-id`: used to track the status of the task using the `/operations` endpoint. For more information, see [Get operation status](https://lgtm.com/help/lgtm/api/api-v1#opIdgetOperation).
		 * - `status`: initially pending.
		 * - `task-result`: containing information about the progress and results of the analysis.
		 * Post analyses/{project_id}
		 * @param {number} project_id The numeric project identifier.
		 * @param {string} commit The identifier of the commit to analyze.
		 * @param {Array<string>} language The language codes of the languages to analyze.
		 * For a list of available languages, see [Supported languages](https://lgtm.com/help/lgtm/analysis-faqs#which-languages-are-supported). To specify more than one language, this parameter can be repeated. If no language is specified, all the project's languages will be analyzed.
		 * @return {void} 
		 */
		RequestAnalysis(project_id: number, commit: string, language: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'analyses/{project_id}?commit=' + (commit == null ? '' : encodeURIComponent(commit)) + '&' + language?.map(z => `language=${encodeURIComponent(z)}`).join('&'), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get analysis summary for a specific commit
		 * Get a summary of the analysis results for a specific commit, or the latest commit, to a project. (For projects configured for sparse or upload analysis, only `latest` is supported.)
		 * This endpoint reports a summary of results for each language, and also the analysis identifier. You can use the analysis identifier to download full details of all the alerts  found by the analysis. For more information, see [Get detailed alert information](https://lgtm.com/help/lgtm/api/api-v1#opIdgetAlerts).
		 * Get analyses/{project_id}/commits/{commit_id}
		 * @param {number} project_id The numeric project identifier.
		 * @param {string} commit_id The identifier of a specific commit. Alternatively, use `latest` for the most recent analyzed commit.
		 * @return {Analysis} Success. Data returned.
		 */
		GetAnalysisForCommit(project_id: number, commit_id: string): Observable<Analysis> {
			return this.http.get<Analysis>(this.baseUri + 'analyses/{project_id}/commits/{commit_id}', {});
		}

		/**
		 * Get results of code review
		 * Get the results of a code review using the review identifier for the task.
		 * When you request a code review, the response includes a task result URL of the form: `/codereviews/{review-id}`.
		 * This endpoint reports the results of a complete code review, or the status of a review  that's still in progress.
		 * Get codereviews/{review_id}
		 * @param {string} review_id The identifier for the review (from the `task-result-url`).
		 * @return {Array<Code_review>} Success. Requested data returned.
		 */
		GetCodeReview(review_id: string): Observable<Array<Code_review>> {
			return this.http.get<Array<Code_review>>(this.baseUri + 'codereviews/{review_id}', {});
		}

		/**
		 * Get detailed alert information for an issue
		 * Fetch the alert information for an issue in [SARIF](https://lgtm.com/help/lgtm/sarif-results-file) format.
		 * Get issues/{project_id}/{alert_key}
		 * @param {number} project_id The numeric project identifier.
		 * @param {string} alert_key The alert key is generated by LGTM when it posts an issue `create` webhook request 
		 *  to an external system using the [issue tracker Webhook API](https://lgtm.com/admin/help/issuetracker-webhook-api).
		 *  This key is an opaque identifier that tracks the alert's location over time. For example, if a file containing the alert
		 *  is modified, the SARIF data will reflect the updated location of the alert.
		 *  Note that the key needs to be URL encoded as it may contain characters that are not web-safe.  
		 * @return {void} Success. Requested data returned.
		 */
		GetIssue(project_id: number, alert_key: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'issues/{project_id}/{alert_key}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * API specification
		 * Get the specification of this API in [OpenAPI](https://github.com/OAI/OpenAPI-Specification) format. This endpoint does not require an access token. This makes it easier for you to use the specification with third-party tools.
		 * Get openapi
		 * @return {string} Success. Requested data returned.
		 */
		GetSpec(): Observable<string> {
			return this.http.get(this.baseUri + 'openapi', { responseType: 'text' });
		}

		/**
		 * Get operation status
		 * Track progress of a long-running operation using the operations identifier returned when you  created the operation. For example, by triggering the analysis of a commit, or the code review of a patch. For both LGTM.com and LGTM Enterprise, you must include an access token with the `operations:read` scope.
		 * Get operations/{operation_id}
		 * @param {number} operation_id The operation identifier returned on creating the task.
		 * @return {Operation} Success. Requested data returned.
		 */
		GetOperation(operation_id: number): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'operations/{operation_id}', {});
		}

		/**
		 * List projects
		 * List all the projects the current user has authorization to view.
		 * A maximum of 100 projects are returned in each response. When further results are available, the response includes the URL you need to request the next page of results.
		 * Use the optional parameter, `limit`, to change the number of results reported in each response (range of 1&mdash;100). If you supply an invalid value for this  parameter, the default value of 100 is used.
		 * When more than one page of results is available, each response includes a `nextPageUrl` response parameter. You can use this URL to request the next page of results. The `nextPageUrl` includes an automatically generated `start` parameter, which specifies the projects to return in the next page of results.
		 * Get projects
		 * @param {number} limit The maximum number of projects to return in each response (1-100).
		 * @param {string} start An opaque identifier generated by the API.
		 * @return {Project_list} Success. Requested data returned.
		 */
		GetProjects(limit: number | null | undefined, start: string | null | undefined): Observable<Project_list> {
			return this.http.get<Project_list>(this.baseUri + 'projects?limit=' + limit + '&start=' + (start == null ? '' : encodeURIComponent(start)), {});
		}

		/**
		 * Delete project by numeric identifier
		 * Delete a project with a particular numeric project identifier.
		 * In addition to access to the project, administrative access to LGTM or the LGTM Enterprise instance is required to delete projects.
		 * Delete projects/{project_id}
		 * @param {number} project_id The numeric project identifier
		 * @return {Project_details} Success. Details of the deleted project returned.
		 */
		DeleteProject(project_id: number): Observable<Project_details> {
			return this.http.delete<Project_details>(this.baseUri + 'projects/{project_id}', {});
		}

		/**
		 * Get project by numeric identifier
		 * Get the latest summary for a specific project using the numeric project identifier.
		 * To find the LGTM identifier for a project, list all projects using the `/projects`  endpoint and look up the project by name. Alternatively, use the `/projects/{provider}/{org}/{name}` endpoint. If you have administration access, the project identifier is also displayed in  the administration page for the project.
		 * Get projects/{project_id}
		 * @param {number} project_id The numeric project identifier
		 * @return {Project_details} Success. Requested data returned.
		 */
		GetProject(project_id: number): Observable<Project_details> {
			return this.http.get<Project_details>(this.baseUri + 'projects/{project_id}', {});
		}

		/**
		 * Get configuration for a project identified by numeric identifier
		 * Get the latest configuration for a specific project using the numeric project identifier.
		 * Get projects/{project_id}/settings/analysis-configuration
		 * @param {number} project_id The numeric project identifier
		 * @param {GetProjectConfigSource} source The type of project configuration to retrieve.
		 * If this parameter isn't specified, the request retrieves the effective configuration. That is, the configuration that is actually applied to the project, which may be from:
		 * * the repository
		 * * the administrator-set, project configuration
		 * * the global configuration.
		 * If you do specify this value, it must be one of:
		 *  * `repository` to retrieve the configuration specified by a YAML file in the repository. A 404 status is returned if there is no repository configuration. 
		 *  * `administrator` to retrieve the administrator-set, project configuration. A 404 status is returned if there is no administrator configuration.
		 * @return {void} Success. Requested data returned.
		 */
		GetProjectConfig(project_id: number, source: GetProjectConfigSource | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/{project_id}/settings/analysis-configuration?source=' + source, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project by URL identifier
		 * Get the latest summary for a specific project using the project's URL identifier `{provider}/{org}/{name}`.
		 * To find the URL identifier for a project, view the project overview page in LGTM. The URL identifier follows after `/projects`. For example, for a project with the URL `https://lgtm.example.com/projects/g/apache/commons-io` the URL identifier is `g/apache/commons-io`. In the example, `g` represents the `provider` (repository host), `apache` is the `organization` and `commons-io` is the `name` of the repository.
		 * Get projects/{provider}/{org}/{name}
		 * @param {string} provider The first part of the URL identifier of a project, which represents the repository host.
		 * @param {string} org The second part of the URL identifier of a project, the organization.
		 * @param {string} name The third part of the URL identifier of a project, the repository name.
		 * @return {Project_details} Success. Requested data returned.
		 */
		GetProjectByUrlIdentifier(provider: string, org: string, name: string): Observable<Project_details> {
			return this.http.get<Project_details>(this.baseUri + 'projects/' + (provider == null ? '' : encodeURIComponent(provider)) + '/' + (org == null ? '' : encodeURIComponent(org)) + '/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Get the status of a query job
		 * Get the status of a query job using the query job identifier for the task.
		 * When you create a query job, the response includes a task result URL of the form: `/queryjobs/{queryjob-id}`.
		 * Get queryjobs/{queryjob_id}
		 * @param {string} queryjob_id The identifier of the query job, from the `task-result` given in the response to the initial `POST /queryjobs` request.
		 * @return {Queryjob} Success. Requested data returned.
		 */
		GetQueryJob(queryjob_id: string): Observable<Queryjob> {
			return this.http.get<Queryjob>(this.baseUri + 'queryjobs/{queryjob_id}', {});
		}

		/**
		 * Provide a summary of results for the projects in the query job
		 * This endpoint provides a summary of the results generated by completed query runs for each  project specified in the the POST /queryjobs endpoint.  For completed query jobs, the summary includes:
		 * * The number of results for successful query runs.
		 * * Error information for failed query runs.
		 * No information is included in the response for any project for which the query  run is still in progress.
		 * Get queryjobs/{queryjob_id}/results
		 * @param {string} queryjob_id The identifier of the query job, from the `task-result` given in the response to the initial `POST /queryjobs` request.
		 * @param {string} start An opaque identifier generated by the API used for pagination. 
		 * This identifier will be included as part of the response for this endpoint whenever more than one page of results is available. 
		 * @param {number} limit The number of results to return. Useful for pagination.
		 * @param {string} filter Only return a subset of results. Legal values are `w-results`, `wo-results`, `error`.
		 * @return {Queryjob_results_overview} Success. Requested data returned.
		 */
		GetQueryJobResultsOverview(queryjob_id: string, start: string | null | undefined, limit: number | null | undefined, filter: string | null | undefined): Observable<Queryjob_results_overview> {
			return this.http.get<Queryjob_results_overview>(this.baseUri + 'queryjobs/{queryjob_id}/results?start=' + (start == null ? '' : encodeURIComponent(start)) + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Fetch the results of a query job for a specific project
		 * Fetch the results for a specific project. The endpoint succeeds only if the query was successful,  and returns a `404` error otherwise.  By default, the endpoint provides only results that are within the source tree. To obtain all results, specify the `nofilter` parameter.
		 * Get queryjobs/{queryjob_id}/results/{project_id}
		 * @param {string} queryjob_id The identifier of the query job, from the `task-result` given in the response to the initial `POST /queryjobs` request.
		 * @param {string} project_id The identifier for the project.
		 * @param {number} start Start point for the page of results.
		 * @param {number} limit The maximum number of results to display (less than 100).
		 * @param {boolean} nofilter Include results that are not part of the source tree. These results are filtered out by default.
		 * @return {Queryjob_project_results} Success. The result contains three items: column headers, data, and pagination information.
		 */
		GetQueryJobResultsForProject(queryjob_id: string, project_id: string, start: number | null | undefined, limit: number | null | undefined, nofilter: boolean | null | undefined): Observable<Queryjob_project_results> {
			return this.http.get<Queryjob_project_results>(this.baseUri + 'queryjobs/{queryjob_id}/results/{project_id}?start=' + start + '&limit=' + limit + '&nofilter=' + nofilter, {});
		}

		/**
		 * Abort database upload process
		 * Aborts the specified upload session and deletes any uploaded parts. After the session is aborted it cannot be restarted.
		 * If any part uploads are in progress when the session is aborted, their data may not be deleted. To ensure that uploaded parts are deleted correctly, you should only abort an upload session after all part uploads have completed.
		 * Delete snapshots/uploads/{session_id}
		 * @param {string} session_id The id of the upload session.
		 * @return {void} 
		 */
		AbortUpload(session_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'snapshots/uploads/{session_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Complete snapshot upload session
		 * Completes the database upload by closing the upload session, upgrading the database if appropriate, and scheduling analysis of that snapshot of the codebase.
		 * You can view the analysis progress and access the results using the `task-result-url`.
		 * Post snapshots/uploads/{session_id}
		 * @param {string} session_id The id of the upload session.
		 * @return {void} 
		 */
		CompleteUpload(session_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'snapshots/uploads/{session_id}', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download a snapshot
		 * Download a CodeQL database from LGTM, representing a snapshot of the codebase, to run queries in your IDE.
		 * This endpoint works for projects that have been successfully analyzed for the language specified in the request.  A successful request redirects you to a URL for downloading a database that represents the code snapshot, as specified in the `Location:` header in the response. Therefore, your HTTP client should be configured to follow redirects. For example, if you are using `curl`, you can add the`-L` flag to the command.
		 * The database is downloaded as a zip file that can be imported into an IDE equipped with a  CodeQL extension. The extension must be up to date to analyze databases downloaded from LGTM. For more information on running queries locally in your IDE, see [Runnning queries in your IDE](https://lgtm.com/help/lgtm/running-queries-ide).
		 * Get snapshots/{project_id}/{language}
		 * @param {number} project_id The numeric project identifier.
		 * @param {string} language The language of the database to download.
		 * @return {void} 
		 */
		GetSnapshot(project_id: number, language: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'snapshots/{project_id}/' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start snapshot upload session
		 * Start a session to upload an externally-built database (which represents a snapshot of a codebase) to a project on LGTM.
		 * This endpoint works for projects that are already on LGTM, and the selected language of  the database must already be configured. The project must be configured with 'upload' analysis mode. You can upload a "bundled" CodeQL database or a database exported by  the QL command-line tools (`odasa`).
		 * If your database was generated using a version of the  command line that is older than LGTM,  LGTM will try to upgrade and analyze it when the upload is complete. You can include cached predicates in the upload, but they are ignored as the cache is  repopulated after the database has been upgraded and analyzed. However, if you want to include results with your database, make sure the database is  compatible before you start the upload session.  Incompatible databases with results won't be upgraded and therefore cannot be uploaded.  For further information on externally-built databases,  see [Preparing snapshots to upload to LGTM using the QL command-line tools](https://help.semmle.com/wiki/display/SD/Preparing+snapshots+to+upload+to+LGTM).
		 * When the upload session has been successfully started, upload the database to the  upload URL returned in the response. The database can be uploaded to the upload URL in parts using  the [`PUT /snapshots/uploads/{session-id}`](https://lgtm.com/help/lgtm/api/api-v1#opIduploadPart) endpoint. After uploading all the parts you must call  the [`POST /snapshots/uploads/{session-id}`](https://lgtm.com/help/lgtm/api/api-v1#opIdcompleteUpload) endpoint to complete the upload session.
		 * Post snapshots/{project_id}/{language}
		 * @param {number} project_id The numeric project identifier.
		 * @param {string} language The language of the database to upload.
		 * @param {string} commit The identifier of the analyzed commit.
		 * @param {Date} date The date and time of the analyzed commit (default the current time).
		 * @return {Upload_session} Success.
		 */
		InitSnapshotUpload(project_id: number, language: string, commit: string, date: Date | null | undefined): Observable<Upload_session> {
			return this.http.post<Upload_session>(this.baseUri + 'snapshots/{project_id}/' + (language == null ? '' : encodeURIComponent(language)) + '&commit=' + (commit == null ? '' : encodeURIComponent(commit)) + '&date=' + date?.toISOString(), null, {});
		}

		/**
		 * Get a summary of the application's health
		 * Return an indication of whether the application is working as expected (up) or needs  attention (down).
		 * \> The `description` and `details` fields are reported only if the request includes an access token for a user account that has administration rights for this LGTM server.
		 * Get system/health
		 * @return {Health} The application is up.
		 */
		GetHealth(): Observable<Health> {
			return this.http.get<Health>(this.baseUri + 'system/health', {});
		}

		/**
		 * Get the identifiers and descriptions of the usage metrics
		 * LGTM administrators can use this endpoint to list the usage metrics that are available to download.
		 * Get system/metrics
		 * @return {Metrics_list} The metric identifiers and descriptions are returned.
		 */
		GetMetrics(): Observable<Metrics_list> {
			return this.http.get<Metrics_list>(this.baseUri + 'system/metrics', {});
		}

		/**
		 * Get the computed values of the specified metric
		 * LGTM administrators can download usage data using this endpoint. The response includes up to 1000 values for the specified metric and reports the date-time that each value was calculated. There is normally one value per day.
		 * Get system/metrics/{metric_id}
		 * @param {string} metric_id The identifier of the metric.
		 * @return {Metric} Success. Requested data returned.
		 */
		GetMetric(metric_id: string): Observable<Metric> {
			return this.http.get<Metric>(this.baseUri + 'system/metrics/{metric_id}', {});
		}
	}

	export enum AddProjectMode { full = 0, sparse = 1, upload = 2 }

	export enum GetProjectConfigSource { repository = 0, administrator = 1 }

}

