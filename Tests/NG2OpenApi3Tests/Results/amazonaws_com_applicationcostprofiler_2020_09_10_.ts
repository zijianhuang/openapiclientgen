import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeleteReportDefinitionResult {
		reportId?: string;
	}
	export interface DeleteReportDefinitionResultFormProperties {
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReportDefinitionResultFormGroup() {
		return new FormGroup<DeleteReportDefinitionResultFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface GetReportDefinitionResult {

		/** Required */
		reportId: string;

		/** Required */
		reportDescription: string;

		/** Required */
		reportFrequency: ReportFrequency;

		/** Required */
		format: Format;

		/** Required */
		destinationS3Location: S3Location;

		/** Required */
		createdAt: Date;

		/** Required */
		lastUpdated: Date;
	}
	export interface GetReportDefinitionResultFormProperties {

		/** Required */
		reportId: FormControl<string | null | undefined>,

		/** Required */
		reportDescription: FormControl<string | null | undefined>,

		/** Required */
		reportFrequency: FormControl<ReportFrequency | null | undefined>,

		/** Required */
		format: FormControl<Format | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateGetReportDefinitionResultFormGroup() {
		return new FormGroup<GetReportDefinitionResultFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reportDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reportFrequency: new FormControl<ReportFrequency | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReportFrequency { MONTHLY = 'MONTHLY', DAILY = 'DAILY', ALL = 'ALL' }

	export enum Format { CSV = 'CSV', PARQUET = 'PARQUET' }


	/** Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to. */
	export interface S3Location {

		/** Required */
		bucket: string;

		/** Required */
		prefix: string;
	}

	/** Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to. */
	export interface S3LocationFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,

		/** Required */
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportApplicationUsageResult {

		/** Required */
		importId: string;
	}
	export interface ImportApplicationUsageResultFormProperties {

		/** Required */
		importId: FormControl<string | null | undefined>,
	}
	export function CreateImportApplicationUsageResultFormGroup() {
		return new FormGroup<ImportApplicationUsageResultFormProperties>({
			importId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum S3BucketRegion { 'ap-east-1' = 'ap-east-1', 'me-south-1' = 'me-south-1', 'eu-south-1' = 'eu-south-1', 'af-south-1' = 'af-south-1' }

	export interface ListReportDefinitionsResult {
		reportDefinitions?: Array<ReportDefinition>;
		nextToken?: string;
	}
	export interface ListReportDefinitionsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReportDefinitionsResultFormGroup() {
		return new FormGroup<ListReportDefinitionsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration of a report in AWS Application Cost Profiler. */
	export interface ReportDefinition {
		reportId?: string;
		reportDescription?: string;
		reportFrequency?: ReportFrequency;
		format?: Format;
		destinationS3Location?: S3Location;
		createdAt?: Date;
		lastUpdatedAt?: Date;
	}

	/** The configuration of a report in AWS Application Cost Profiler. */
	export interface ReportDefinitionFormProperties {
		reportId: FormControl<string | null | undefined>,
		reportDescription: FormControl<string | null | undefined>,
		reportFrequency: FormControl<ReportFrequency | null | undefined>,
		format: FormControl<Format | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateReportDefinitionFormGroup() {
		return new FormGroup<ReportDefinitionFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined),
			reportDescription: new FormControl<string | null | undefined>(undefined),
			reportFrequency: new FormControl<ReportFrequency | null | undefined>(undefined),
			format: new FormControl<Format | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PutReportDefinitionResult {
		reportId?: string;
	}
	export interface PutReportDefinitionResultFormProperties {
		reportId: FormControl<string | null | undefined>,
	}
	export function CreatePutReportDefinitionResultFormGroup() {
		return new FormGroup<PutReportDefinitionResultFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface UpdateReportDefinitionResult {
		reportId?: string;
	}
	export interface UpdateReportDefinitionResultFormProperties {
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReportDefinitionResultFormGroup() {
		return new FormGroup<UpdateReportDefinitionResultFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteReportDefinitionRequest {
	}
	export interface DeleteReportDefinitionRequestFormProperties {
	}
	export function CreateDeleteReportDefinitionRequestFormGroup() {
		return new FormGroup<DeleteReportDefinitionRequestFormProperties>({
		});

	}

	export interface GetReportDefinitionRequest {
	}
	export interface GetReportDefinitionRequestFormProperties {
	}
	export function CreateGetReportDefinitionRequestFormGroup() {
		return new FormGroup<GetReportDefinitionRequestFormProperties>({
		});

	}


	/** Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from. */
	export interface SourceS3Location {

		/** Required */
		bucket: string;

		/** Required */
		key: string;
		region?: S3BucketRegion;
	}

	/** Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from. */
	export interface SourceS3LocationFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
		region: FormControl<S3BucketRegion | null | undefined>,
	}
	export function CreateSourceS3LocationFormGroup() {
		return new FormGroup<SourceS3LocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<S3BucketRegion | null | undefined>(undefined),
		});

	}

	export interface ImportApplicationUsageRequest {

		/** Required */
		sourceS3Location: SourceS3Location;
	}
	export interface ImportApplicationUsageRequestFormProperties {
	}
	export function CreateImportApplicationUsageRequestFormGroup() {
		return new FormGroup<ImportApplicationUsageRequestFormProperties>({
		});

	}

	export interface ListReportDefinitionsRequest {
	}
	export interface ListReportDefinitionsRequestFormProperties {
	}
	export function CreateListReportDefinitionsRequestFormGroup() {
		return new FormGroup<ListReportDefinitionsRequestFormProperties>({
		});

	}

	export interface PutReportDefinitionRequest {

		/** Required */
		reportId: string;

		/** Required */
		reportDescription: string;

		/** Required */
		reportFrequency: ReportFrequency;

		/** Required */
		format: Format;

		/** Required */
		destinationS3Location: S3Location;
	}
	export interface PutReportDefinitionRequestFormProperties {

		/** Required */
		reportId: FormControl<string | null | undefined>,

		/** Required */
		reportDescription: FormControl<string | null | undefined>,

		/** Required */
		reportFrequency: FormControl<ReportFrequency | null | undefined>,

		/** Required */
		format: FormControl<Format | null | undefined>,
	}
	export function CreatePutReportDefinitionRequestFormGroup() {
		return new FormGroup<PutReportDefinitionRequestFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reportDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reportFrequency: new FormControl<ReportFrequency | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateReportDefinitionRequest {

		/** Required */
		reportDescription: string;

		/** Required */
		reportFrequency: ReportFrequency;

		/** Required */
		format: Format;

		/** Required */
		destinationS3Location: S3Location;
	}
	export interface UpdateReportDefinitionRequestFormProperties {

		/** Required */
		reportDescription: FormControl<string | null | undefined>,

		/** Required */
		reportFrequency: FormControl<ReportFrequency | null | undefined>,

		/** Required */
		format: FormControl<Format | null | undefined>,
	}
	export function CreateUpdateReportDefinitionRequestFormGroup() {
		return new FormGroup<UpdateReportDefinitionRequestFormProperties>({
			reportDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reportFrequency: new FormControl<ReportFrequency | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.
		 * Delete reportDefinition/{reportId}
		 * @param {string} reportId Required. ID of the report to delete.
		 *     Min length: 1    Max length: 255
		 * @return {DeleteReportDefinitionResult} Success
		 */
		DeleteReportDefinition(reportId: string): Observable<DeleteReportDefinitionResult> {
			return this.http.delete<DeleteReportDefinitionResult>(this.baseUri + 'reportDefinition/' + (reportId == null ? '' : encodeURIComponent(reportId)), {});
		}

		/**
		 * Retrieves the definition of a report already configured in AWS Application Cost Profiler.
		 * Get reportDefinition/{reportId}
		 * @param {string} reportId ID of the report to retrieve.
		 *     Min length: 1    Max length: 255
		 * @return {GetReportDefinitionResult} Success
		 */
		GetReportDefinition(reportId: string): Observable<GetReportDefinitionResult> {
			return this.http.get<GetReportDefinitionResult>(this.baseUri + 'reportDefinition/' + (reportId == null ? '' : encodeURIComponent(reportId)), {});
		}

		/**
		 * Updates existing report in AWS Application Cost Profiler.
		 * Put reportDefinition/{reportId}
		 * @param {string} reportId Required. ID of the report to update.
		 *     Min length: 1    Max length: 255
		 * @return {UpdateReportDefinitionResult} Success
		 */
		UpdateReportDefinition(reportId: string, requestBody: UpdateReportDefinitionPutBody): Observable<UpdateReportDefinitionResult> {
			return this.http.put<UpdateReportDefinitionResult>(this.baseUri + 'reportDefinition/' + (reportId == null ? '' : encodeURIComponent(reportId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p> <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.</p>
		 * Post importApplicationUsage
		 * @return {ImportApplicationUsageResult} Success
		 */
		ImportApplicationUsage(requestBody: ImportApplicationUsagePostBody): Observable<ImportApplicationUsageResult> {
			return this.http.post<ImportApplicationUsageResult>(this.baseUri + 'importApplicationUsage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list of all reports and their configurations for your AWS account.</p> <p>The maximum number of reports is one.</p>
		 * Get reportDefinition
		 * @param {string} nextToken The token value from a previous call to access the next page of results.
		 *     Min length: 1    Max length: 102400
		 * @param {number} maxResults The maximum number of results to return.
		 *     Minimum: 1    Maximum: 100
		 * @return {ListReportDefinitionsResult} Success
		 */
		ListReportDefinitions(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListReportDefinitionsResult> {
			return this.http.get<ListReportDefinitionsResult>(this.baseUri + 'reportDefinition?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates the report definition for a report in Application Cost Profiler.
		 * Post reportDefinition
		 * @return {PutReportDefinitionResult} Success
		 */
		PutReportDefinition(requestBody: PutReportDefinitionPostBody): Observable<PutReportDefinitionResult> {
			return this.http.post<PutReportDefinitionResult>(this.baseUri + 'reportDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface UpdateReportDefinitionPutBody {

		/**
		 * Required. Description of the report.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		reportDescription: string;

		/**
		 * Required. The cadence to generate the report.
		 * Required
		 */
		reportFrequency: ReportFrequency;

		/**
		 * Required. The format to use for the generated report.
		 * Required
		 */
		format: Format;

		/**
		 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
		 * Required
		 */
		destinationS3Location: UpdateReportDefinitionPutBodyDestinationS3Location;
	}
	export interface UpdateReportDefinitionPutBodyFormProperties {

		/**
		 * Required. Description of the report.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		reportDescription: FormControl<string | null | undefined>,

		/**
		 * Required. The cadence to generate the report.
		 * Required
		 */
		reportFrequency: FormControl<ReportFrequency | null | undefined>,

		/**
		 * Required. The format to use for the generated report.
		 * Required
		 */
		format: FormControl<Format | null | undefined>,
	}
	export function CreateUpdateReportDefinitionPutBodyFormGroup() {
		return new FormGroup<UpdateReportDefinitionPutBodyFormProperties>({
			reportDescription: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('.*\S.*')]),
			reportFrequency: new FormControl<ReportFrequency | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateReportDefinitionPutBodyDestinationS3Location {
		bucket?: string;
		prefix?: string;
	}
	export interface UpdateReportDefinitionPutBodyDestinationS3LocationFormProperties {
		bucket: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReportDefinitionPutBodyDestinationS3LocationFormGroup() {
		return new FormGroup<UpdateReportDefinitionPutBodyDestinationS3LocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportApplicationUsagePostBody {

		/**
		 * Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.
		 * Required
		 */
		sourceS3Location: ImportApplicationUsagePostBodySourceS3Location;
	}
	export interface ImportApplicationUsagePostBodyFormProperties {
	}
	export function CreateImportApplicationUsagePostBodyFormGroup() {
		return new FormGroup<ImportApplicationUsagePostBodyFormProperties>({
		});

	}

	export interface ImportApplicationUsagePostBodySourceS3Location {
		bucket?: string;
		key?: string;
		region?: S3BucketRegion;
	}
	export interface ImportApplicationUsagePostBodySourceS3LocationFormProperties {
		bucket: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		region: FormControl<S3BucketRegion | null | undefined>,
	}
	export function CreateImportApplicationUsagePostBodySourceS3LocationFormGroup() {
		return new FormGroup<ImportApplicationUsagePostBodySourceS3LocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<S3BucketRegion | null | undefined>(undefined),
		});

	}

	export interface PutReportDefinitionPostBody {

		/**
		 * Required. ID of the report. You can choose any valid string matching the pattern for the ID.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		reportId: string;

		/**
		 * Required. Description of the report.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		reportDescription: string;

		/**
		 * Required. The cadence to generate the report.
		 * Required
		 */
		reportFrequency: ReportFrequency;

		/**
		 * Required. The format to use for the generated report.
		 * Required
		 */
		format: Format;

		/**
		 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
		 * Required
		 */
		destinationS3Location: PutReportDefinitionPostBodyDestinationS3Location;
	}
	export interface PutReportDefinitionPostBodyFormProperties {

		/**
		 * Required. ID of the report. You can choose any valid string matching the pattern for the ID.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		reportId: FormControl<string | null | undefined>,

		/**
		 * Required. Description of the report.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		reportDescription: FormControl<string | null | undefined>,

		/**
		 * Required. The cadence to generate the report.
		 * Required
		 */
		reportFrequency: FormControl<ReportFrequency | null | undefined>,

		/**
		 * Required. The format to use for the generated report.
		 * Required
		 */
		format: FormControl<Format | null | undefined>,
	}
	export function CreatePutReportDefinitionPostBodyFormGroup() {
		return new FormGroup<PutReportDefinitionPostBodyFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[0-9A-Za-z\.\-_]+$')]),
			reportDescription: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('.*\S.*')]),
			reportFrequency: new FormControl<ReportFrequency | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutReportDefinitionPostBodyDestinationS3Location {
		bucket?: string;
		prefix?: string;
	}
	export interface PutReportDefinitionPostBodyDestinationS3LocationFormProperties {
		bucket: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreatePutReportDefinitionPostBodyDestinationS3LocationFormGroup() {
		return new FormGroup<PutReportDefinitionPostBodyDestinationS3LocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

}

