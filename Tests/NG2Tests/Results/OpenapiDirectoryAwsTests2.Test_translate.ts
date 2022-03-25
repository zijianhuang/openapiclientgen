import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface DeleteTerminologyRequest {
		Name: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface TooManyRequestsException {
	}

	export interface InternalServerException {
	}

	export interface DescribeTextTranslationJobResponse {

		/** Provides information about a translation job. */
		TextTranslationJobProperties?: TextTranslationJobProperties;
	}


	/** Provides information about a translation job. */
	export interface TextTranslationJobProperties {
		JobId?: string;
		JobName?: string;
		JobStatus?: TextTranslationJobPropertiesJobStatus;

		/** The number of documents successfully and unsuccessfully processed during a translation job. */
		JobDetails?: JobDetails;
		SourceLanguageCode?: string;
		TargetLanguageCodes?: Array<string>;
		TerminologyNames?: Array<string>;
		Message?: string;
		SubmittedTime?: Date;
		EndTime?: Date;

		/** The input configuration properties for requesting a batch translation job. */
		InputDataConfig?: InputDataConfig;

		/** The output configuration properties for a batch translation job. */
		OutputDataConfig?: OutputDataConfig;
		DataAccessRoleArn?: string;
	}

	export enum TextTranslationJobPropertiesJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, COMPLETED_WITH_ERROR = 3, FAILED = 4, STOP_REQUESTED = 5, STOPPED = 6 }


	/** The number of documents successfully and unsuccessfully processed during a translation job. */
	export interface JobDetails {
		TranslatedDocumentsCount?: number;
		DocumentsWithErrorsCount?: number;
		InputDocumentsCount?: number;
	}


	/** The input configuration properties for requesting a batch translation job. */
	export interface InputDataConfig {
		S3Uri: string;
		ContentType: string;
	}


	/** The output configuration properties for a batch translation job. */
	export interface OutputDataConfig {
		S3Uri: string;
	}

	export interface DescribeTextTranslationJobRequest {
		JobId: string;
	}

	export interface GetTerminologyResponse {

		/** The properties of the custom terminology. */
		TerminologyProperties?: TerminologyProperties;

		/** The location of the custom terminology data. */
		TerminologyDataLocation?: TerminologyDataLocation;
	}


	/** The properties of the custom terminology. */
	export interface TerminologyProperties {
		Name?: string;
		Description?: string;
		Arn?: string;
		SourceLanguageCode?: string;
		TargetLanguageCodes?: Array<string>;

		/** The encryption key used to encrypt the custom terminologies used by Amazon Translate. */
		EncryptionKey?: EncryptionKey;
		SizeBytes?: number;
		TermCount?: number;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
	}


	/** The encryption key used to encrypt the custom terminologies used by Amazon Translate. */
	export interface EncryptionKey {
		Type: EncryptionKeyType;
		Id: string;
	}

	export enum EncryptionKeyType { KMS = 0 }


	/** The location of the custom terminology data. */
	export interface TerminologyDataLocation {
		RepositoryType: string;
		Location: string;
	}

	export interface GetTerminologyRequest {
		Name: string;
		TerminologyDataFormat: GetTerminologyRequestTerminologyDataFormat;
	}

	export enum GetTerminologyRequestTerminologyDataFormat { CSV = 0, TMX = 1 }

	export interface InvalidParameterValueException {
	}

	export interface ImportTerminologyResponse {

		/** The properties of the custom terminology. */
		TerminologyProperties?: TerminologyProperties;
	}

	export interface ImportTerminologyRequest {
		Name: string;
		MergeStrategy: ImportTerminologyRequestMergeStrategy;
		Description?: string;

		/**
		 * The data associated with the custom terminology.
		 * Required
		 */
		TerminologyData: TerminologyData;

		/** The encryption key used to encrypt the custom terminologies used by Amazon Translate. */
		EncryptionKey?: EncryptionKey;
	}

	export enum ImportTerminologyRequestMergeStrategy { OVERWRITE = 0 }


	/** The data associated with the custom terminology. */
	export interface TerminologyData {
		File: string;
		Format: GetTerminologyRequestTerminologyDataFormat;
	}

	export interface LimitExceededException {
	}

	export interface ListTerminologiesResponse {
		TerminologyPropertiesList?: Array<TerminologyProperties>;
		NextToken?: string;
	}

	export interface ListTerminologiesRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListTextTranslationJobsResponse {
		TextTranslationJobPropertiesList?: Array<TextTranslationJobProperties>;
		NextToken?: string;
	}

	export interface ListTextTranslationJobsRequest {

		/** Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>. */
		Filter?: TextTranslationJobFilter;
		NextToken?: string;
		MaxResults?: number;
	}


	/** Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>. */
	export interface TextTranslationJobFilter {
		JobName?: string;
		JobStatus?: TextTranslationJobPropertiesJobStatus;
		SubmittedBeforeTime?: Date;
		SubmittedAfterTime?: Date;
	}

	export interface InvalidRequestException {
	}

	export interface InvalidFilterException {
	}

	export interface StartTextTranslationJobResponse {
		JobId?: string;
		JobStatus?: TextTranslationJobPropertiesJobStatus;
	}

	export interface StartTextTranslationJobRequest {
		JobName?: string;

		/**
		 * The input configuration properties for requesting a batch translation job.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * The output configuration properties for a batch translation job.
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		SourceLanguageCode: string;
		TargetLanguageCodes: Array<string>;
		TerminologyNames?: Array<string>;
		ClientToken: string;
	}

	export interface UnsupportedLanguagePairException {
	}

	export interface StopTextTranslationJobResponse {
		JobId?: string;
		JobStatus?: TextTranslationJobPropertiesJobStatus;
	}

	export interface StopTextTranslationJobRequest {
		JobId: string;
	}

	export interface TranslateTextResponse {
		TranslatedText: string;
		SourceLanguageCode: string;
		TargetLanguageCode: string;
		AppliedTerminologies?: Array<AppliedTerminology>;
	}


	/** The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request. */
	export interface AppliedTerminology {
		Name?: string;
		Terms?: Array<Term>;
	}


	/** The term being translated by the custom terminology. */
	export interface Term {
		SourceText?: string;
		TargetText?: string;
	}

	export interface TranslateTextRequest {
		Text: string;
		TerminologyNames?: Array<string>;
		SourceLanguageCode: string;
		TargetLanguageCode: string;
	}

	export interface TextSizeLimitExceededException {
	}

	export interface DetectedLanguageLowConfidenceException {
	}

	export interface ServiceUnavailableException {
	}

	export enum TerminologyDataFormat { CSV = 0, TMX = 1 }

	export enum MergeStrategy { OVERWRITE = 0 }

	export enum JobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, COMPLETED_WITH_ERROR = 3, FAILED = 4, STOP_REQUESTED = 5, STOPPED = 6 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * A synchronous action that deletes a custom terminology.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology
		 * @return {void} Success
		 */
		DeleteTerminology(requestBody: DeleteTerminologyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the properties associated with an asycnhronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob
		 * @return {DescribeTextTranslationJobResponse} Success
		 */
		DescribeTextTranslationJob(requestBody: DescribeTextTranslationJobRequest): Observable<DescribeTextTranslationJobResponse> {
			return this.http.post<DescribeTextTranslationJobResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a custom terminology.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology
		 * @return {GetTerminologyResponse} Success
		 */
		GetTerminology(requestBody: GetTerminologyRequest): Observable<GetTerminologyResponse> {
			return this.http.post<GetTerminologyResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates a custom terminology, depending on whether or not one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. Currently, the only supported merge strategy is OVERWRITE, and so the imported terminology will overwrite an existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology take up to 10 minutes to fully propagate and be available for use in a translation due to cache policies with the DataPlane service that performs the translations.</p>
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology
		 * @return {ImportTerminologyResponse} Success
		 */
		ImportTerminology(requestBody: ImportTerminologyRequest): Observable<ImportTerminologyResponse> {
			return this.http.post<ImportTerminologyResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of custom terminologies associated with your account.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTerminologiesResponse} Success
		 */
		ListTerminologies(MaxResults: string, NextToken: string, requestBody: ListTerminologiesRequest): Observable<ListTerminologiesResponse> {
			return this.http.post<ListTerminologiesResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the batch translation jobs that you have submitted.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTextTranslationJobsResponse} Success
		 */
		ListTextTranslationJobs(MaxResults: string, NextToken: string, requestBody: ListTextTranslationJobsRequest): Observable<ListTextTranslationJobsResponse> {
			return this.http.post<ListTextTranslationJobsResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts an asynchronous batch translation job. Batch translation jobs can be used to translate large volumes of text across multiple documents at once. For more information, see <a>async</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p> <note> <p>Amazon Translate does not support batch translation of multiple source languages at once.</p> </note>
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob
		 * @return {StartTextTranslationJobResponse} Success
		 */
		StartTextTranslationJob(requestBody: StartTextTranslationJobRequest): Observable<StartTextTranslationJobResponse> {
			return this.http.post<StartTextTranslationJobResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob
		 * @return {StopTextTranslationJobResponse} Success
		 */
		StopTextTranslationJob(requestBody: StopTextTranslationJobRequest): Observable<StopTextTranslationJobResponse> {
			return this.http.post<StopTextTranslationJobResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Translates input text from the source language to the target language. For a list of available languages and language codes, see <a>what-is-languages</a>.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.TranslateText
		 * @return {TranslateTextResponse} Success
		 */
		TranslateText(requestBody: TranslateTextRequest): Observable<TranslateTextResponse> {
			return this.http.post<TranslateTextResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DeleteTerminologyX_Amz_Target { AWSShineFrontendService_20170701_DeleteTerminology = 0 }

	export enum DescribeTextTranslationJobX_Amz_Target { AWSShineFrontendService_20170701_DescribeTextTranslationJob = 0 }

	export enum GetTerminologyX_Amz_Target { AWSShineFrontendService_20170701_GetTerminology = 0 }

	export enum ImportTerminologyX_Amz_Target { AWSShineFrontendService_20170701_ImportTerminology = 0 }

	export enum ListTerminologiesX_Amz_Target { AWSShineFrontendService_20170701_ListTerminologies = 0 }

	export enum ListTextTranslationJobsX_Amz_Target { AWSShineFrontendService_20170701_ListTextTranslationJobs = 0 }

	export enum StartTextTranslationJobX_Amz_Target { AWSShineFrontendService_20170701_StartTextTranslationJob = 0 }

	export enum StopTextTranslationJobX_Amz_Target { AWSShineFrontendService_20170701_StopTextTranslationJob = 0 }

	export enum TranslateTextX_Amz_Target { AWSShineFrontendService_20170701_TranslateText = 0 }

}

