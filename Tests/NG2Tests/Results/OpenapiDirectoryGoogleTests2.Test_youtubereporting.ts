import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/** gdata */
	export interface GdataBlobstore2Info {

		/** gdata */
		blobGeneration?: string;

		/** gdata */
		blobId?: string;

		/** gdata */
		downloadReadHandle?: string;

		/** gdata */
		readToken?: string;

		/** gdata */
		uploadMetadataContainer?: string;
	}


	/** gdata */
	export interface GdataCompositeMedia {

		/** gdata */
		blobRef?: string;

		/** gdata */
		blobstore2Info?: GdataBlobstore2Info;

		/** gdata */
		cosmoBinaryReference?: string;

		/** gdata */
		crc32cHash?: string;

		/** gdata */
		inline?: string;

		/** gdata */
		length?: string;

		/** gdata */
		md5Hash?: string;

		/** gdata */
		objectId?: GdataObjectId;

		/** gdata */
		path?: string;

		/** gdata */
		referenceType?: GdataCompositeMediaReferenceType;

		/** gdata */
		sha1Hash?: string;
	}


	/** gdata */
	export interface GdataObjectId {

		/** gdata */
		bucketName?: string;

		/** gdata */
		generation?: string;

		/** gdata */
		objectName?: string;
	}

	export enum GdataCompositeMediaReferenceType { PATH = 0, BLOB_REF = 1, INLINE = 2, BIGSTORE_REF = 3, COSMO_BINARY_REFERENCE = 4 }


	/** gdata */
	export interface GdataContentTypeInfo {

		/** gdata */
		bestGuess?: string;

		/** gdata */
		fromBytes?: string;

		/** gdata */
		fromFileName?: string;

		/** gdata */
		fromHeader?: string;

		/** gdata */
		fromUrlPath?: string;
	}


	/** gdata */
	export interface GdataDiffChecksumsResponse {

		/** gdata */
		checksumsLocation?: GdataCompositeMedia;

		/** gdata */
		chunkSizeBytes?: string;

		/** gdata */
		objectLocation?: GdataCompositeMedia;

		/** gdata */
		objectSizeBytes?: string;

		/** gdata */
		objectVersion?: string;
	}


	/** gdata */
	export interface GdataDiffDownloadResponse {

		/** gdata */
		objectLocation?: GdataCompositeMedia;
	}


	/** gdata */
	export interface GdataDiffUploadRequest {

		/** gdata */
		checksumsInfo?: GdataCompositeMedia;

		/** gdata */
		objectInfo?: GdataCompositeMedia;

		/** gdata */
		objectVersion?: string;
	}


	/** gdata */
	export interface GdataDiffUploadResponse {

		/** gdata */
		objectVersion?: string;

		/** gdata */
		originalObject?: GdataCompositeMedia;
	}


	/** gdata */
	export interface GdataDiffVersionResponse {

		/** gdata */
		objectSizeBytes?: string;

		/** gdata */
		objectVersion?: string;
	}


	/** gdata */
	export interface GdataDownloadParameters {

		/** gdata */
		allowGzipCompression?: boolean;

		/** gdata */
		ignoreRange?: boolean;
	}


	/** gdata */
	export interface GdataMedia {

		/** gdata */
		algorithm?: string;

		/** gdata */
		bigstoreObjectRef?: string;

		/** gdata */
		blobRef?: string;

		/** gdata */
		blobstore2Info?: GdataBlobstore2Info;

		/** gdata */
		compositeMedia?: Array<GdataCompositeMedia>;

		/** gdata */
		contentType?: string;

		/** gdata */
		contentTypeInfo?: GdataContentTypeInfo;

		/** gdata */
		cosmoBinaryReference?: string;

		/** gdata */
		crc32cHash?: string;

		/** gdata */
		diffChecksumsResponse?: GdataDiffChecksumsResponse;

		/** gdata */
		diffDownloadResponse?: GdataDiffDownloadResponse;

		/** gdata */
		diffUploadRequest?: GdataDiffUploadRequest;

		/** gdata */
		diffUploadResponse?: GdataDiffUploadResponse;

		/** gdata */
		diffVersionResponse?: GdataDiffVersionResponse;

		/** gdata */
		downloadParameters?: GdataDownloadParameters;

		/** gdata */
		filename?: string;

		/** gdata */
		hash?: string;

		/** gdata */
		hashVerified?: boolean;

		/** gdata */
		inline?: string;

		/** gdata */
		isPotentialRetry?: boolean;

		/** gdata */
		length?: string;

		/** gdata */
		md5Hash?: string;

		/** gdata */
		mediaId?: string;

		/** gdata */
		objectId?: GdataObjectId;

		/** gdata */
		path?: string;

		/** gdata */
		referenceType?: GdataMediaReferenceType;

		/** gdata */
		sha1Hash?: string;

		/** gdata */
		sha256Hash?: string;

		/** gdata */
		timestamp?: string;

		/** gdata */
		token?: string;
	}

	export enum GdataMediaReferenceType { PATH = 0, BLOB_REF = 1, INLINE = 2, GET_MEDIA = 3, COMPOSITE_MEDIA = 4, BIGSTORE_REF = 5, DIFF_VERSION_RESPONSE = 6, DIFF_CHECKSUMS_RESPONSE = 7, DIFF_DOWNLOAD_RESPONSE = 8, DIFF_UPLOAD_REQUEST = 9, DIFF_UPLOAD_RESPONSE = 10, COSMO_BINARY_REFERENCE = 11, ARBITRARY_BYTES = 12 }


	/** A job creating reports of a specific type. */
	export interface Job {

		/** The creation date/time of the job. */
		createTime?: string;

		/**
		 * The date/time when this job will expire/expired. After a job expired, no
		 * new reports are generated.
		 */
		expireTime?: string;

		/** The server-generated ID of the job (max. 40 characters). */
		id?: string;

		/** The name of the job (max. 100 characters). */
		name?: string;

		/**
		 * The type of reports this job creates. Corresponds to the ID of a
		 * ReportType.
		 */
		reportTypeId?: string;

		/**
		 * True if this a system-managed job that cannot be modified by the user;
		 * otherwise false.
		 */
		systemManaged?: boolean;
	}


	/** Response message for ReportingService.ListJobs. */
	export interface ListJobsResponse {

		/** The list of jobs. */
		jobs?: Array<Job>;

		/**
		 * A token to retrieve next page of results.
		 * Pass this value in the
		 * ListJobsRequest.page_token
		 * field in the subsequent call to `ListJobs` method to retrieve the next
		 * page of results.
		 */
		nextPageToken?: string;
	}


	/** Response message for ReportingService.ListReportTypes. */
	export interface ListReportTypesResponse {

		/**
		 * A token to retrieve next page of results.
		 * Pass this value in the
		 * ListReportTypesRequest.page_token
		 * field in the subsequent call to `ListReportTypes` method to retrieve the
		 * next page of results.
		 */
		nextPageToken?: string;

		/** The list of report types. */
		reportTypes?: Array<ReportType>;
	}


	/** A report type. */
	export interface ReportType {

		/** The date/time when this report type was/will be deprecated. */
		deprecateTime?: string;

		/** The ID of the report type (max. 100 characters). */
		id?: string;

		/** The name of the report type (max. 100 characters). */
		name?: string;

		/**
		 * True if this a system-managed report type; otherwise false. Reporting jobs
		 * for system-managed report types are created automatically and can thus not
		 * be used in the `CreateJob` method.
		 */
		systemManaged?: boolean;
	}


	/** Response message for ReportingService.ListReports. */
	export interface ListReportsResponse {

		/**
		 * A token to retrieve next page of results.
		 * Pass this value in the
		 * ListReportsRequest.page_token
		 * field in the subsequent call to `ListReports` method to retrieve the next
		 * page of results.
		 */
		nextPageToken?: string;

		/** The list of report types. */
		reports?: Array<Report>;
	}


	/**
	 * A report's metadata including the URL from which the report itself can be
	 * downloaded.
	 */
	export interface Report {

		/** The date/time when this report was created. */
		createTime?: string;

		/** The URL from which the report can be downloaded (max. 1000 characters). */
		downloadUrl?: string;

		/**
		 * The end of the time period that the report instance covers. The value is
		 * exclusive.
		 */
		endTime?: string;

		/** The server-generated ID of the report. */
		id?: string;

		/** The date/time when the job this report belongs to will expire/expired. */
		jobExpireTime?: string;

		/** The ID of the job that created this report. */
		jobId?: string;

		/**
		 * The start of the time period that the report instance covers. The value is
		 * inclusive.
		 */
		startTime?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists jobs.
		 * Get v1/jobs
		 * @param {boolean} includeSystemManaged If set to true, also system-managed jobs will be returned; otherwise only
		 * user-created jobs will be returned. System-managed jobs can neither be
		 * modified nor deleted.
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If
		 * not set, the user is acting for himself (his own channel).
		 * @param {number} pageSize Requested page size. Server may return fewer jobs than requested.
		 * If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically,
		 * this is the value of
		 * ListReportTypesResponse.next_page_token
		 * returned in response to the previous call to the `ListJobs` method.
		 * @return {void} Successful response
		 */
		Youtubereporting_jobs_list(includeSystemManaged: boolean, onBehalfOfContentOwner: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/jobs?includeSystemManaged=' + includeSystemManaged + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a job and returns it.
		 * Post v1/jobs
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If
		 * not set, the user is acting for himself (his own channel).
		 * @return {void} Successful response
		 */
		Youtubereporting_jobs_create(onBehalfOfContentOwner: string, requestBody: Job): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/jobs?onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a job.
		 * Delete v1/jobs/{jobId}
		 * @param {string} jobId The ID of the job to delete.
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If
		 * not set, the user is acting for himself (his own channel).
		 * @return {void} Successful response
		 */
		Youtubereporting_jobs_delete(jobId: string, onBehalfOfContentOwner: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a job.
		 * Get v1/jobs/{jobId}
		 * @param {string} jobId The ID of the job to retrieve.
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If
		 * not set, the user is acting for himself (his own channel).
		 * @return {void} Successful response
		 */
		Youtubereporting_jobs_get(jobId: string, onBehalfOfContentOwner: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists reports created by a specific job.
		 * Returns NOT_FOUND if the job does not exist.
		 * Get v1/jobs/{jobId}/reports
		 * @param {string} jobId The ID of the job.
		 * @param {string} createdAfter If set, only reports created after the specified date/time are returned.
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If
		 * not set, the user is acting for himself (his own channel).
		 * @param {number} pageSize Requested page size. Server may return fewer report types than requested.
		 * If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically,
		 * this is the value of
		 * ListReportsResponse.next_page_token
		 * returned in response to the previous call to the `ListReports` method.
		 * @param {string} startTimeAtOrAfter If set, only reports whose start time is greater than or equal the
		 * specified date/time are returned.
		 * @param {string} startTimeBefore If set, only reports whose start time is smaller than the specified
		 * date/time are returned.
		 * @return {void} Successful response
		 */
		Youtubereporting_jobs_reports_list(jobId: string, createdAfter: string, onBehalfOfContentOwner: string, pageSize: number, pageToken: string, startTimeAtOrAfter: string, startTimeBefore: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/reports&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startTimeAtOrAfter=' + (startTimeAtOrAfter == null ? '' : encodeURIComponent(startTimeAtOrAfter)) + '&startTimeBefore=' + (startTimeBefore == null ? '' : encodeURIComponent(startTimeBefore)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the metadata of a specific report.
		 * Get v1/jobs/{jobId}/reports/{reportId}
		 * @param {string} jobId The ID of the job.
		 * @param {string} reportId The ID of the report to retrieve.
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If
		 * not set, the user is acting for himself (his own channel).
		 * @return {void} Successful response
		 */
		Youtubereporting_jobs_reports_get(jobId: string, reportId: string, onBehalfOfContentOwner: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Method for media download. Download is supported
		 * on the URI `/v1/media/{+name}?alt=media`.
		 * Get v1/media/{resourceName}
		 * @param {string} resourceName Name of the media that is being downloaded.
		 * @return {void} Successful response
		 */
		Youtubereporting_media_download(resourceName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/media/' + (resourceName == null ? '' : encodeURIComponent(resourceName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists report types.
		 * Get v1/reportTypes
		 * @param {boolean} includeSystemManaged If set to true, also system-managed report types will be returned;
		 * otherwise only the report types that can be used to create new reporting
		 * jobs will be returned.
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If
		 * not set, the user is acting for himself (his own channel).
		 * @param {number} pageSize Requested page size. Server may return fewer report types than requested.
		 * If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically,
		 * this is the value of
		 * ListReportTypesResponse.next_page_token
		 * returned in response to the previous call to the `ListReportTypes` method.
		 * @return {void} Successful response
		 */
		Youtubereporting_reportTypes_list(includeSystemManaged: boolean, onBehalfOfContentOwner: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/reportTypes?includeSystemManaged=' + includeSystemManaged + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}
	}

}

