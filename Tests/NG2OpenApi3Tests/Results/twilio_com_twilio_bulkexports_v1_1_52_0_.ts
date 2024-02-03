import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Bulkexportsv1export {

		/** Contains a dictionary of URL links to nested resources of this Export. */
		links?: string | null;

		/** The type of communication – Messages, Calls, Conferences, and Participants */
		resource_type?: string | null;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Bulkexportsv1exportFormProperties {

		/** Contains a dictionary of URL links to nested resources of this Export. */
		links: FormControl<string | null | undefined>,

		/** The type of communication – Messages, Calls, Conferences, and Participants */
		resource_type: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateBulkexportsv1exportFormGroup() {
		return new FormGroup<Bulkexportsv1exportFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
			resource_type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Bulkexportsv1exportday {

		/** The ISO 8601 format date when resources is created */
		create_date?: string | null;

		/** The ISO 8601 format date of the resources in the file, for a UTC day */
		day?: string | null;

		/** The friendly name specified when creating the job */
		friendly_name?: string | null;

		/** The type of communication – Messages, Calls, Conferences, and Participants */
		resource_type?: string | null;

		/** The size of the day's data file in bytes */
		size?: number | null;
	}
	export interface Bulkexportsv1exportdayFormProperties {

		/** The ISO 8601 format date when resources is created */
		create_date: FormControl<string | null | undefined>,

		/** The ISO 8601 format date of the resources in the file, for a UTC day */
		day: FormControl<string | null | undefined>,

		/** The friendly name specified when creating the job */
		friendly_name: FormControl<string | null | undefined>,

		/** The type of communication – Messages, Calls, Conferences, and Participants */
		resource_type: FormControl<string | null | undefined>,

		/** The size of the day's data file in bytes */
		size: FormControl<number | null | undefined>,
	}
	export function CreateBulkexportsv1exportdayFormGroup() {
		return new FormGroup<Bulkexportsv1exportdayFormProperties>({
			create_date: new FormControl<string | null | undefined>(undefined),
			day: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			resource_type: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Bulkexportsv1exportday_instance {
		redirect_to?: string | null;
	}
	export interface Bulkexportsv1exportday_instanceFormProperties {
		redirect_to: FormControl<string | null | undefined>,
	}
	export function CreateBulkexportsv1exportday_instanceFormGroup() {
		return new FormGroup<Bulkexportsv1exportday_instanceFormProperties>({
			redirect_to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Bulkexportsv1exportexport_custom_job {

		/** The details of a job which is an object that contains an array of status grouped by `status` state.  Each `status` object has a `status` string, a count which is the number of days in that `status`, and list of days in that `status`. The day strings are in the format yyyy-MM-dd. As an example, a currently running job may have a status object for COMPLETED and a `status` object for SUBMITTED each with its own count and list of days. */
		details?: any;

		/** The optional email to send the completion notification to */
		email?: string | null;

		/** The end day for the export specified when creating the job */
		end_day?: string | null;

		/** this is the time estimated until your job is complete. This is calculated each time you request the job list. The time is calculated based on the current rate of job completion (which may vary) and your job queue position */
		estimated_completion_time?: string | null;

		/** The friendly name specified when creating the job */
		friendly_name?: string | null;

		/** This is the job position from the 1st in line. Your queue position will never increase. As jobs ahead of yours in the queue are processed, the queue position number will decrease */
		job_queue_position?: string | null;

		/**
		 * The unique job_sid returned when the custom export was created
		 * Max length: 34
		 * Min length: 34
		 */
		job_sid?: string | null;

		/** The type of communication – Messages, Calls, Conferences, and Participants */
		resource_type?: string | null;

		/** The start day for the custom export specified when creating the job */
		start_day?: string | null;

		/** This is the method used to call the webhook on completion of the job. If this is supplied, `WebhookUrl` must also be supplied. */
		webhook_method?: string | null;

		/** The optional webhook url called on completion of the job. If this is supplied, `WebhookMethod` must also be supplied. */
		webhook_url?: string | null;
	}
	export interface Bulkexportsv1exportexport_custom_jobFormProperties {

		/** The details of a job which is an object that contains an array of status grouped by `status` state.  Each `status` object has a `status` string, a count which is the number of days in that `status`, and list of days in that `status`. The day strings are in the format yyyy-MM-dd. As an example, a currently running job may have a status object for COMPLETED and a `status` object for SUBMITTED each with its own count and list of days. */
		details: FormControl<any | null | undefined>,

		/** The optional email to send the completion notification to */
		email: FormControl<string | null | undefined>,

		/** The end day for the export specified when creating the job */
		end_day: FormControl<string | null | undefined>,

		/** this is the time estimated until your job is complete. This is calculated each time you request the job list. The time is calculated based on the current rate of job completion (which may vary) and your job queue position */
		estimated_completion_time: FormControl<string | null | undefined>,

		/** The friendly name specified when creating the job */
		friendly_name: FormControl<string | null | undefined>,

		/** This is the job position from the 1st in line. Your queue position will never increase. As jobs ahead of yours in the queue are processed, the queue position number will decrease */
		job_queue_position: FormControl<string | null | undefined>,

		/**
		 * The unique job_sid returned when the custom export was created
		 * Max length: 34
		 * Min length: 34
		 */
		job_sid: FormControl<string | null | undefined>,

		/** The type of communication – Messages, Calls, Conferences, and Participants */
		resource_type: FormControl<string | null | undefined>,

		/** The start day for the custom export specified when creating the job */
		start_day: FormControl<string | null | undefined>,

		/** This is the method used to call the webhook on completion of the job. If this is supplied, `WebhookUrl` must also be supplied. */
		webhook_method: FormControl<string | null | undefined>,

		/** The optional webhook url called on completion of the job. If this is supplied, `WebhookMethod` must also be supplied. */
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateBulkexportsv1exportexport_custom_jobFormGroup() {
		return new FormGroup<Bulkexportsv1exportexport_custom_jobFormProperties>({
			details: new FormControl<any | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			end_day: new FormControl<string | null | undefined>(undefined),
			estimated_completion_time: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			job_queue_position: new FormControl<string | null | undefined>(undefined),
			job_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^JS[0-9a-fA-F]{32}$')]),
			resource_type: new FormControl<string | null | undefined>(undefined),
			start_day: new FormControl<string | null | undefined>(undefined),
			webhook_method: new FormControl<string | null | undefined>(undefined),
			webhook_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Bulkexportsv1exportjob {

		/** The details of a job which is an object that contains an array of status grouped by `status` state.  Each `status` object has a `status` string, a count which is the number of days in that `status`, and list of days in that `status`. The day strings are in the format yyyy-MM-dd. As an example, a currently running job may have a status object for COMPLETED and a `status` object for SUBMITTED each with its own count and list of days. */
		details?: any;

		/** The optional email to send the completion notification to */
		email?: string | null;

		/** The end time for the export specified when creating the job */
		end_day?: string | null;

		/** this is the time estimated until your job is complete. This is calculated each time you request the job list. The time is calculated based on the current rate of job completion (which may vary) and your job queue position */
		estimated_completion_time?: string | null;

		/** The friendly name specified when creating the job */
		friendly_name?: string | null;

		/** This is the job position from the 1st in line. Your queue position will never increase. As jobs ahead of yours in the queue are processed, the queue position number will decrease */
		job_queue_position?: string | null;

		/**
		 * The job_sid returned when the export was created
		 * Max length: 34
		 * Min length: 34
		 */
		job_sid?: string | null;

		/** The type of communication – Messages, Calls, Conferences, and Participants */
		resource_type?: string | null;

		/** The start time for the export specified when creating the job */
		start_day?: string | null;
		url?: string | null;

		/** This is the method used to call the webhook */
		webhook_method?: string | null;

		/** The optional webhook url called on completion */
		webhook_url?: string | null;
	}
	export interface Bulkexportsv1exportjobFormProperties {

		/** The details of a job which is an object that contains an array of status grouped by `status` state.  Each `status` object has a `status` string, a count which is the number of days in that `status`, and list of days in that `status`. The day strings are in the format yyyy-MM-dd. As an example, a currently running job may have a status object for COMPLETED and a `status` object for SUBMITTED each with its own count and list of days. */
		details: FormControl<any | null | undefined>,

		/** The optional email to send the completion notification to */
		email: FormControl<string | null | undefined>,

		/** The end time for the export specified when creating the job */
		end_day: FormControl<string | null | undefined>,

		/** this is the time estimated until your job is complete. This is calculated each time you request the job list. The time is calculated based on the current rate of job completion (which may vary) and your job queue position */
		estimated_completion_time: FormControl<string | null | undefined>,

		/** The friendly name specified when creating the job */
		friendly_name: FormControl<string | null | undefined>,

		/** This is the job position from the 1st in line. Your queue position will never increase. As jobs ahead of yours in the queue are processed, the queue position number will decrease */
		job_queue_position: FormControl<string | null | undefined>,

		/**
		 * The job_sid returned when the export was created
		 * Max length: 34
		 * Min length: 34
		 */
		job_sid: FormControl<string | null | undefined>,

		/** The type of communication – Messages, Calls, Conferences, and Participants */
		resource_type: FormControl<string | null | undefined>,

		/** The start time for the export specified when creating the job */
		start_day: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** This is the method used to call the webhook */
		webhook_method: FormControl<string | null | undefined>,

		/** The optional webhook url called on completion */
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateBulkexportsv1exportjobFormGroup() {
		return new FormGroup<Bulkexportsv1exportjobFormProperties>({
			details: new FormControl<any | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			end_day: new FormControl<string | null | undefined>(undefined),
			estimated_completion_time: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			job_queue_position: new FormControl<string | null | undefined>(undefined),
			job_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^JS[0-9a-fA-F]{32}$')]),
			resource_type: new FormControl<string | null | undefined>(undefined),
			start_day: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			webhook_method: new FormControl<string | null | undefined>(undefined),
			webhook_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Bulkexportsv1export_configuration {

		/** If true, Twilio will automatically generate every day's file when the day is over. */
		enabled?: boolean | null;

		/** The type of communication – Messages, Calls, Conferences, and Participants */
		resource_type?: string | null;

		/** The URL of this resource. */
		url?: string | null;

		/** Sets whether Twilio should call a webhook URL when the automatic generation is complete, using GET or POST. The actual destination is set in the webhook_url */
		webhook_method?: string | null;

		/** Stores the URL destination for the method specified in webhook_method. */
		webhook_url?: string | null;
	}
	export interface Bulkexportsv1export_configurationFormProperties {

		/** If true, Twilio will automatically generate every day's file when the day is over. */
		enabled: FormControl<boolean | null | undefined>,

		/** The type of communication – Messages, Calls, Conferences, and Participants */
		resource_type: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,

		/** Sets whether Twilio should call a webhook URL when the automatic generation is complete, using GET or POST. The actual destination is set in the webhook_url */
		webhook_method: FormControl<string | null | undefined>,

		/** Stores the URL destination for the method specified in webhook_method. */
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateBulkexportsv1export_configurationFormGroup() {
		return new FormGroup<Bulkexportsv1export_configurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			resource_type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			webhook_method: new FormControl<string | null | undefined>(undefined),
			webhook_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Export_custom_job_enum_status { ErrorDuringRun = 'ErrorDuringRun', Submitted = 'Submitted', Running = 'Running', CompletedEmptyRecords = 'CompletedEmptyRecords', Completed = 'Completed', Failed = 'Failed', RunningToBeDeleted = 'RunningToBeDeleted', DeletedByUserRequest = 'DeletedByUserRequest' }

	export enum Job_enum_status { ErrorDuringRun = 'ErrorDuringRun', Submitted = 'Submitted', Running = 'Running', CompletedEmptyRecords = 'CompletedEmptyRecords', Completed = 'Completed', Failed = 'Failed', RunningToBeDeleted = 'RunningToBeDeleted', DeletedByUserRequest = 'DeletedByUserRequest' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete v1/Exports/Jobs/{JobSid}
		 * @param {string} JobSid The unique string that that we created to identify the Bulk Export job
		 * @return {void} 
		 */
		DeleteJob(JobSid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Exports/Jobs/' + (JobSid == null ? '' : encodeURIComponent(JobSid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Exports/Jobs/{JobSid}
		 * @param {string} JobSid The unique string that that we created to identify the Bulk Export job
		 * @return {Bulkexportsv1exportjob} OK
		 */
		FetchJob(JobSid: string): Observable<Bulkexportsv1exportjob> {
			return this.http.get<Bulkexportsv1exportjob>(this.baseUri + 'v1/Exports/Jobs/' + (JobSid == null ? '' : encodeURIComponent(JobSid)), {});
		}

		/**
		 * Fetch a specific Export.
		 * Get v1/Exports/{ResourceType}
		 * @param {string} ResourceType The type of communication – Messages, Calls, Conferences, and Participants
		 * @return {Bulkexportsv1export} OK
		 */
		FetchExport(ResourceType: string): Observable<Bulkexportsv1export> {
			return this.http.get<Bulkexportsv1export>(this.baseUri + 'v1/Exports/' + (ResourceType == null ? '' : encodeURIComponent(ResourceType)), {});
		}

		/**
		 * Fetch a specific Export Configuration.
		 * Get v1/Exports/{ResourceType}/Configuration
		 * @param {string} ResourceType The type of communication – Messages, Calls, Conferences, and Participants
		 * @return {Bulkexportsv1export_configuration} OK
		 */
		FetchExportConfiguration(ResourceType: string): Observable<Bulkexportsv1export_configuration> {
			return this.http.get<Bulkexportsv1export_configuration>(this.baseUri + 'v1/Exports/' + (ResourceType == null ? '' : encodeURIComponent(ResourceType)) + '/Configuration', {});
		}

		/**
		 * Retrieve a list of all Days for a resource.
		 * Get v1/Exports/{ResourceType}/Days
		 * @param {string} ResourceType The type of communication – Messages, Calls, Conferences, and Participants
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListDayReturn} OK
		 */
		ListDay(ResourceType: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListDayReturn> {
			return this.http.get<ListDayReturn>(this.baseUri + 'v1/Exports/' + (ResourceType == null ? '' : encodeURIComponent(ResourceType)) + '/Days&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Fetch a specific Day.
		 * Get v1/Exports/{ResourceType}/Days/{Day}
		 * @param {string} ResourceType The type of communication – Messages, Calls, Conferences, and Participants
		 * @param {string} Day The ISO 8601 format date of the resources in the file, for a UTC day
		 * @return {void} 
		 */
		FetchDay(ResourceType: string, Day: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/Exports/' + (ResourceType == null ? '' : encodeURIComponent(ResourceType)) + '/Days/' + (Day == null ? '' : encodeURIComponent(Day)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Exports/{ResourceType}/Jobs
		 * @param {string} ResourceType The type of communication – Messages, Calls, Conferences, and Participants
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListExportCustomJobReturn} OK
		 */
		ListExportCustomJob(ResourceType: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListExportCustomJobReturn> {
			return this.http.get<ListExportCustomJobReturn>(this.baseUri + 'v1/Exports/' + (ResourceType == null ? '' : encodeURIComponent(ResourceType)) + '/Jobs&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}
	}

	export interface ListDayReturn {
		days?: Array<Bulkexportsv1exportday>;
		meta?: ListDayReturnMeta;
	}
	export interface ListDayReturnFormProperties {
	}
	export function CreateListDayReturnFormGroup() {
		return new FormGroup<ListDayReturnFormProperties>({
		});

	}

	export interface ListDayReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListDayReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListDayReturnMetaFormGroup() {
		return new FormGroup<ListDayReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExportCustomJobReturn {
		jobs?: Array<Bulkexportsv1exportexport_custom_job>;
		meta?: ListExportCustomJobReturnMeta;
	}
	export interface ListExportCustomJobReturnFormProperties {
	}
	export function CreateListExportCustomJobReturnFormGroup() {
		return new FormGroup<ListExportCustomJobReturnFormProperties>({
		});

	}

	export interface ListExportCustomJobReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListExportCustomJobReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListExportCustomJobReturnMetaFormGroup() {
		return new FormGroup<ListExportCustomJobReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

