import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** gdata */
	export interface GdataBlobstore2Info {

		/** gdata */
		blobGeneration?: string | null;

		/** gdata */
		blobId?: string | null;

		/** gdata */
		downloadReadHandle?: string | null;

		/** gdata */
		readToken?: string | null;

		/** gdata */
		uploadMetadataContainer?: string | null;
	}

	/** gdata */
	export interface GdataBlobstore2InfoFormProperties {

		/** gdata */
		blobGeneration: FormControl<string | null | undefined>,

		/** gdata */
		blobId: FormControl<string | null | undefined>,

		/** gdata */
		downloadReadHandle: FormControl<string | null | undefined>,

		/** gdata */
		readToken: FormControl<string | null | undefined>,

		/** gdata */
		uploadMetadataContainer: FormControl<string | null | undefined>,
	}
	export function CreateGdataBlobstore2InfoFormGroup() {
		return new FormGroup<GdataBlobstore2InfoFormProperties>({
			blobGeneration: new FormControl<string | null | undefined>(undefined),
			blobId: new FormControl<string | null | undefined>(undefined),
			downloadReadHandle: new FormControl<string | null | undefined>(undefined),
			readToken: new FormControl<string | null | undefined>(undefined),
			uploadMetadataContainer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** gdata */
	export interface GdataCompositeMedia {

		/** gdata */
		blobRef?: string | null;

		/** gdata */
		blobstore2Info?: GdataBlobstore2Info;

		/** gdata */
		cosmoBinaryReference?: string | null;

		/** gdata */
		crc32cHash?: number | null;

		/** gdata */
		inline?: string | null;

		/** gdata */
		length?: string | null;

		/** gdata */
		md5Hash?: string | null;

		/** gdata */
		objectId?: GdataObjectId;

		/** gdata */
		path?: string | null;

		/** gdata */
		referenceType?: GdataCompositeMediaReferenceType | null;

		/** gdata */
		sha1Hash?: string | null;
	}

	/** gdata */
	export interface GdataCompositeMediaFormProperties {

		/** gdata */
		blobRef: FormControl<string | null | undefined>,

		/** gdata */
		cosmoBinaryReference: FormControl<string | null | undefined>,

		/** gdata */
		crc32cHash: FormControl<number | null | undefined>,

		/** gdata */
		inline: FormControl<string | null | undefined>,

		/** gdata */
		length: FormControl<string | null | undefined>,

		/** gdata */
		md5Hash: FormControl<string | null | undefined>,

		/** gdata */
		path: FormControl<string | null | undefined>,

		/** gdata */
		referenceType: FormControl<GdataCompositeMediaReferenceType | null | undefined>,

		/** gdata */
		sha1Hash: FormControl<string | null | undefined>,
	}
	export function CreateGdataCompositeMediaFormGroup() {
		return new FormGroup<GdataCompositeMediaFormProperties>({
			blobRef: new FormControl<string | null | undefined>(undefined),
			cosmoBinaryReference: new FormControl<string | null | undefined>(undefined),
			crc32cHash: new FormControl<number | null | undefined>(undefined),
			inline: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
			md5Hash: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			referenceType: new FormControl<GdataCompositeMediaReferenceType | null | undefined>(undefined),
			sha1Hash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** gdata */
	export interface GdataObjectId {

		/** gdata */
		bucketName?: string | null;

		/** gdata */
		generation?: string | null;

		/** gdata */
		objectName?: string | null;
	}

	/** gdata */
	export interface GdataObjectIdFormProperties {

		/** gdata */
		bucketName: FormControl<string | null | undefined>,

		/** gdata */
		generation: FormControl<string | null | undefined>,

		/** gdata */
		objectName: FormControl<string | null | undefined>,
	}
	export function CreateGdataObjectIdFormGroup() {
		return new FormGroup<GdataObjectIdFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GdataCompositeMediaReferenceType { PATH = 'PATH', BLOB_REF = 'BLOB_REF', INLINE = 'INLINE', BIGSTORE_REF = 'BIGSTORE_REF', COSMO_BINARY_REFERENCE = 'COSMO_BINARY_REFERENCE' }


	/** gdata */
	export interface GdataContentTypeInfo {

		/** gdata */
		bestGuess?: string | null;

		/** gdata */
		fromBytes?: string | null;

		/** gdata */
		fromFileName?: string | null;

		/** gdata */
		fromHeader?: string | null;

		/** gdata */
		fromUrlPath?: string | null;
	}

	/** gdata */
	export interface GdataContentTypeInfoFormProperties {

		/** gdata */
		bestGuess: FormControl<string | null | undefined>,

		/** gdata */
		fromBytes: FormControl<string | null | undefined>,

		/** gdata */
		fromFileName: FormControl<string | null | undefined>,

		/** gdata */
		fromHeader: FormControl<string | null | undefined>,

		/** gdata */
		fromUrlPath: FormControl<string | null | undefined>,
	}
	export function CreateGdataContentTypeInfoFormGroup() {
		return new FormGroup<GdataContentTypeInfoFormProperties>({
			bestGuess: new FormControl<string | null | undefined>(undefined),
			fromBytes: new FormControl<string | null | undefined>(undefined),
			fromFileName: new FormControl<string | null | undefined>(undefined),
			fromHeader: new FormControl<string | null | undefined>(undefined),
			fromUrlPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** gdata */
	export interface GdataDiffChecksumsResponse {

		/** gdata */
		checksumsLocation?: GdataCompositeMedia;

		/** gdata */
		chunkSizeBytes?: string | null;

		/** gdata */
		objectLocation?: GdataCompositeMedia;

		/** gdata */
		objectSizeBytes?: string | null;

		/** gdata */
		objectVersion?: string | null;
	}

	/** gdata */
	export interface GdataDiffChecksumsResponseFormProperties {

		/** gdata */
		chunkSizeBytes: FormControl<string | null | undefined>,

		/** gdata */
		objectSizeBytes: FormControl<string | null | undefined>,

		/** gdata */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateGdataDiffChecksumsResponseFormGroup() {
		return new FormGroup<GdataDiffChecksumsResponseFormProperties>({
			chunkSizeBytes: new FormControl<string | null | undefined>(undefined),
			objectSizeBytes: new FormControl<string | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** gdata */
	export interface GdataDiffDownloadResponse {

		/** gdata */
		objectLocation?: GdataCompositeMedia;
	}

	/** gdata */
	export interface GdataDiffDownloadResponseFormProperties {
	}
	export function CreateGdataDiffDownloadResponseFormGroup() {
		return new FormGroup<GdataDiffDownloadResponseFormProperties>({
		});

	}


	/** gdata */
	export interface GdataDiffUploadRequest {

		/** gdata */
		checksumsInfo?: GdataCompositeMedia;

		/** gdata */
		objectInfo?: GdataCompositeMedia;

		/** gdata */
		objectVersion?: string | null;
	}

	/** gdata */
	export interface GdataDiffUploadRequestFormProperties {

		/** gdata */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateGdataDiffUploadRequestFormGroup() {
		return new FormGroup<GdataDiffUploadRequestFormProperties>({
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** gdata */
	export interface GdataDiffUploadResponse {

		/** gdata */
		objectVersion?: string | null;

		/** gdata */
		originalObject?: GdataCompositeMedia;
	}

	/** gdata */
	export interface GdataDiffUploadResponseFormProperties {

		/** gdata */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateGdataDiffUploadResponseFormGroup() {
		return new FormGroup<GdataDiffUploadResponseFormProperties>({
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** gdata */
	export interface GdataDiffVersionResponse {

		/** gdata */
		objectSizeBytes?: string | null;

		/** gdata */
		objectVersion?: string | null;
	}

	/** gdata */
	export interface GdataDiffVersionResponseFormProperties {

		/** gdata */
		objectSizeBytes: FormControl<string | null | undefined>,

		/** gdata */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateGdataDiffVersionResponseFormGroup() {
		return new FormGroup<GdataDiffVersionResponseFormProperties>({
			objectSizeBytes: new FormControl<string | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** gdata */
	export interface GdataDownloadParameters {

		/** gdata */
		allowGzipCompression?: boolean | null;

		/** gdata */
		ignoreRange?: boolean | null;
	}

	/** gdata */
	export interface GdataDownloadParametersFormProperties {

		/** gdata */
		allowGzipCompression: FormControl<boolean | null | undefined>,

		/** gdata */
		ignoreRange: FormControl<boolean | null | undefined>,
	}
	export function CreateGdataDownloadParametersFormGroup() {
		return new FormGroup<GdataDownloadParametersFormProperties>({
			allowGzipCompression: new FormControl<boolean | null | undefined>(undefined),
			ignoreRange: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** gdata */
	export interface GdataMedia {

		/** gdata */
		algorithm?: string | null;

		/** gdata */
		bigstoreObjectRef?: string | null;

		/** gdata */
		blobRef?: string | null;

		/** gdata */
		blobstore2Info?: GdataBlobstore2Info;

		/** gdata */
		compositeMedia?: Array<GdataCompositeMedia>;

		/** gdata */
		contentType?: string | null;

		/** gdata */
		contentTypeInfo?: GdataContentTypeInfo;

		/** gdata */
		cosmoBinaryReference?: string | null;

		/** gdata */
		crc32cHash?: number | null;

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
		filename?: string | null;

		/** gdata */
		hash?: string | null;

		/** gdata */
		hashVerified?: boolean | null;

		/** gdata */
		inline?: string | null;

		/** gdata */
		isPotentialRetry?: boolean | null;

		/** gdata */
		length?: string | null;

		/** gdata */
		md5Hash?: string | null;

		/** gdata */
		mediaId?: string | null;

		/** gdata */
		objectId?: GdataObjectId;

		/** gdata */
		path?: string | null;

		/** gdata */
		referenceType?: GdataMediaReferenceType | null;

		/** gdata */
		sha1Hash?: string | null;

		/** gdata */
		sha256Hash?: string | null;

		/** gdata */
		timestamp?: string | null;

		/** gdata */
		token?: string | null;
	}

	/** gdata */
	export interface GdataMediaFormProperties {

		/** gdata */
		algorithm: FormControl<string | null | undefined>,

		/** gdata */
		bigstoreObjectRef: FormControl<string | null | undefined>,

		/** gdata */
		blobRef: FormControl<string | null | undefined>,

		/** gdata */
		contentType: FormControl<string | null | undefined>,

		/** gdata */
		cosmoBinaryReference: FormControl<string | null | undefined>,

		/** gdata */
		crc32cHash: FormControl<number | null | undefined>,

		/** gdata */
		filename: FormControl<string | null | undefined>,

		/** gdata */
		hash: FormControl<string | null | undefined>,

		/** gdata */
		hashVerified: FormControl<boolean | null | undefined>,

		/** gdata */
		inline: FormControl<string | null | undefined>,

		/** gdata */
		isPotentialRetry: FormControl<boolean | null | undefined>,

		/** gdata */
		length: FormControl<string | null | undefined>,

		/** gdata */
		md5Hash: FormControl<string | null | undefined>,

		/** gdata */
		mediaId: FormControl<string | null | undefined>,

		/** gdata */
		path: FormControl<string | null | undefined>,

		/** gdata */
		referenceType: FormControl<GdataMediaReferenceType | null | undefined>,

		/** gdata */
		sha1Hash: FormControl<string | null | undefined>,

		/** gdata */
		sha256Hash: FormControl<string | null | undefined>,

		/** gdata */
		timestamp: FormControl<string | null | undefined>,

		/** gdata */
		token: FormControl<string | null | undefined>,
	}
	export function CreateGdataMediaFormGroup() {
		return new FormGroup<GdataMediaFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined),
			bigstoreObjectRef: new FormControl<string | null | undefined>(undefined),
			blobRef: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			cosmoBinaryReference: new FormControl<string | null | undefined>(undefined),
			crc32cHash: new FormControl<number | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			hashVerified: new FormControl<boolean | null | undefined>(undefined),
			inline: new FormControl<string | null | undefined>(undefined),
			isPotentialRetry: new FormControl<boolean | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
			md5Hash: new FormControl<string | null | undefined>(undefined),
			mediaId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			referenceType: new FormControl<GdataMediaReferenceType | null | undefined>(undefined),
			sha1Hash: new FormControl<string | null | undefined>(undefined),
			sha256Hash: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GdataMediaReferenceType { PATH = 'PATH', BLOB_REF = 'BLOB_REF', INLINE = 'INLINE', GET_MEDIA = 'GET_MEDIA', COMPOSITE_MEDIA = 'COMPOSITE_MEDIA', BIGSTORE_REF = 'BIGSTORE_REF', DIFF_VERSION_RESPONSE = 'DIFF_VERSION_RESPONSE', DIFF_CHECKSUMS_RESPONSE = 'DIFF_CHECKSUMS_RESPONSE', DIFF_DOWNLOAD_RESPONSE = 'DIFF_DOWNLOAD_RESPONSE', DIFF_UPLOAD_REQUEST = 'DIFF_UPLOAD_REQUEST', DIFF_UPLOAD_RESPONSE = 'DIFF_UPLOAD_RESPONSE', COSMO_BINARY_REFERENCE = 'COSMO_BINARY_REFERENCE', ARBITRARY_BYTES = 'ARBITRARY_BYTES' }


	/** A job creating reports of a specific type. */
	export interface Job {

		/** The creation date/time of the job. */
		createTime?: string | null;

		/** The date/time when this job will expire/expired. After a job expired, no new reports are generated. */
		expireTime?: string | null;

		/** The server-generated ID of the job (max. 40 characters). */
		id?: string | null;

		/** The name of the job (max. 100 characters). */
		name?: string | null;

		/** The type of reports this job creates. Corresponds to the ID of a ReportType. */
		reportTypeId?: string | null;

		/** True if this a system-managed job that cannot be modified by the user; otherwise false. */
		systemManaged?: boolean | null;
	}

	/** A job creating reports of a specific type. */
	export interface JobFormProperties {

		/** The creation date/time of the job. */
		createTime: FormControl<string | null | undefined>,

		/** The date/time when this job will expire/expired. After a job expired, no new reports are generated. */
		expireTime: FormControl<string | null | undefined>,

		/** The server-generated ID of the job (max. 40 characters). */
		id: FormControl<string | null | undefined>,

		/** The name of the job (max. 100 characters). */
		name: FormControl<string | null | undefined>,

		/** The type of reports this job creates. Corresponds to the ID of a ReportType. */
		reportTypeId: FormControl<string | null | undefined>,

		/** True if this a system-managed job that cannot be modified by the user; otherwise false. */
		systemManaged: FormControl<boolean | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reportTypeId: new FormControl<string | null | undefined>(undefined),
			systemManaged: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for ReportingService.ListJobs. */
	export interface ListJobsResponse {

		/** The list of jobs. */
		jobs?: Array<Job>;

		/** A token to retrieve next page of results. Pass this value in the ListJobsRequest.page_token field in the subsequent call to `ListJobs` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for ReportingService.ListJobs. */
	export interface ListJobsResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in the ListJobsRequest.page_token field in the subsequent call to `ListJobs` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ReportingService.ListReportTypes. */
	export interface ListReportTypesResponse {

		/** A token to retrieve next page of results. Pass this value in the ListReportTypesRequest.page_token field in the subsequent call to `ListReportTypes` method to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of report types. */
		reportTypes?: Array<ReportType>;
	}

	/** Response message for ReportingService.ListReportTypes. */
	export interface ListReportTypesResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in the ListReportTypesRequest.page_token field in the subsequent call to `ListReportTypes` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReportTypesResponseFormGroup() {
		return new FormGroup<ListReportTypesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A report type. */
	export interface ReportType {

		/** The date/time when this report type was/will be deprecated. */
		deprecateTime?: string | null;

		/** The ID of the report type (max. 100 characters). */
		id?: string | null;

		/** The name of the report type (max. 100 characters). */
		name?: string | null;

		/** True if this a system-managed report type; otherwise false. Reporting jobs for system-managed report types are created automatically and can thus not be used in the `CreateJob` method. */
		systemManaged?: boolean | null;
	}

	/** A report type. */
	export interface ReportTypeFormProperties {

		/** The date/time when this report type was/will be deprecated. */
		deprecateTime: FormControl<string | null | undefined>,

		/** The ID of the report type (max. 100 characters). */
		id: FormControl<string | null | undefined>,

		/** The name of the report type (max. 100 characters). */
		name: FormControl<string | null | undefined>,

		/** True if this a system-managed report type; otherwise false. Reporting jobs for system-managed report types are created automatically and can thus not be used in the `CreateJob` method. */
		systemManaged: FormControl<boolean | null | undefined>,
	}
	export function CreateReportTypeFormGroup() {
		return new FormGroup<ReportTypeFormProperties>({
			deprecateTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			systemManaged: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for ReportingService.ListReports. */
	export interface ListReportsResponse {

		/** A token to retrieve next page of results. Pass this value in the ListReportsRequest.page_token field in the subsequent call to `ListReports` method to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of report types. */
		reports?: Array<Report>;
	}

	/** Response message for ReportingService.ListReports. */
	export interface ListReportsResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in the ListReportsRequest.page_token field in the subsequent call to `ListReports` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReportsResponseFormGroup() {
		return new FormGroup<ListReportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A report's metadata including the URL from which the report itself can be downloaded. */
	export interface Report {

		/** The date/time when this report was created. */
		createTime?: string | null;

		/** The URL from which the report can be downloaded (max. 1000 characters). */
		downloadUrl?: string | null;

		/** The end of the time period that the report instance covers. The value is exclusive. */
		endTime?: string | null;

		/** The server-generated ID of the report. */
		id?: string | null;

		/** The date/time when the job this report belongs to will expire/expired. */
		jobExpireTime?: string | null;

		/** The ID of the job that created this report. */
		jobId?: string | null;

		/** The start of the time period that the report instance covers. The value is inclusive. */
		startTime?: string | null;
	}

	/** A report's metadata including the URL from which the report itself can be downloaded. */
	export interface ReportFormProperties {

		/** The date/time when this report was created. */
		createTime: FormControl<string | null | undefined>,

		/** The URL from which the report can be downloaded (max. 1000 characters). */
		downloadUrl: FormControl<string | null | undefined>,

		/** The end of the time period that the report instance covers. The value is exclusive. */
		endTime: FormControl<string | null | undefined>,

		/** The server-generated ID of the report. */
		id: FormControl<string | null | undefined>,

		/** The date/time when the job this report belongs to will expire/expired. */
		jobExpireTime: FormControl<string | null | undefined>,

		/** The ID of the job that created this report. */
		jobId: FormControl<string | null | undefined>,

		/** The start of the time period that the report instance covers. The value is inclusive. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			downloadUrl: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			jobExpireTime: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists jobs.
		 * Get v1/jobs
		 * @param {boolean} includeSystemManaged If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted.
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
		 * @param {number} pageSize Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method.
		 * @return {ListJobsResponse} Successful response
		 */
		Youtubereporting_jobs_list(includeSystemManaged: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'v1/jobs?includeSystemManaged=' + includeSystemManaged + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a job and returns it.
		 * Post v1/jobs
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
		 * @return {Job} Successful response
		 */
		Youtubereporting_jobs_create(onBehalfOfContentOwner: string | null | undefined, requestBody: Job): Observable<Job> {
			return this.http.post<Job>(this.baseUri + 'v1/jobs?onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a job.
		 * Delete v1/jobs/{jobId}
		 * @param {string} jobId The ID of the job to delete.
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
		 * @return {Empty} Successful response
		 */
		Youtubereporting_jobs_delete(jobId: string, onBehalfOfContentOwner: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), {});
		}

		/**
		 * Gets a job.
		 * Get v1/jobs/{jobId}
		 * @param {string} jobId The ID of the job to retrieve.
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
		 * @return {Job} Successful response
		 */
		Youtubereporting_jobs_get(jobId: string, onBehalfOfContentOwner: string | null | undefined): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'v1/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), {});
		}

		/**
		 * Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.
		 * Get v1/jobs/{jobId}/reports
		 * @param {string} jobId The ID of the job.
		 * @param {string} createdAfter If set, only reports created after the specified date/time are returned.
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
		 * @param {number} pageSize Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method.
		 * @param {string} startTimeAtOrAfter If set, only reports whose start time is greater than or equal the specified date/time are returned.
		 * @param {string} startTimeBefore If set, only reports whose start time is smaller than the specified date/time are returned.
		 * @return {ListReportsResponse} Successful response
		 */
		Youtubereporting_jobs_reports_list(jobId: string, createdAfter: string | null | undefined, onBehalfOfContentOwner: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, startTimeAtOrAfter: string | null | undefined, startTimeBefore: string | null | undefined): Observable<ListReportsResponse> {
			return this.http.get<ListReportsResponse>(this.baseUri + 'v1/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/reports&createdAfter=' + (createdAfter == null ? '' : encodeURIComponent(createdAfter)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startTimeAtOrAfter=' + (startTimeAtOrAfter == null ? '' : encodeURIComponent(startTimeAtOrAfter)) + '&startTimeBefore=' + (startTimeBefore == null ? '' : encodeURIComponent(startTimeBefore)), {});
		}

		/**
		 * Gets the metadata of a specific report.
		 * Get v1/jobs/{jobId}/reports/{reportId}
		 * @param {string} jobId The ID of the job.
		 * @param {string} reportId The ID of the report to retrieve.
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
		 * @return {Report} Successful response
		 */
		Youtubereporting_jobs_reports_get(jobId: string, reportId: string, onBehalfOfContentOwner: string | null | undefined): Observable<Report> {
			return this.http.get<Report>(this.baseUri + 'v1/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), {});
		}

		/**
		 * Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.
		 * Get v1/media/{resourceName}
		 * @param {string} resourceName Name of the media that is being downloaded.
		 * @return {GdataMedia} Successful response
		 */
		Youtubereporting_media_download(resourceName: string): Observable<GdataMedia> {
			return this.http.get<GdataMedia>(this.baseUri + 'v1/media/' + (resourceName == null ? '' : encodeURIComponent(resourceName)), {});
		}

		/**
		 * Lists report types.
		 * Get v1/reportTypes
		 * @param {boolean} includeSystemManaged If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned.
		 * @param {string} onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
		 * @param {number} pageSize Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method.
		 * @return {ListReportTypesResponse} Successful response
		 */
		Youtubereporting_reportTypes_list(includeSystemManaged: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReportTypesResponse> {
			return this.http.get<ListReportTypesResponse>(this.baseUri + 'v1/reportTypes?includeSystemManaged=' + includeSystemManaged + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

