import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** If the action is successful, the service sends back an HTTP 200 response. */
	export interface DeleteReportDefinitionResponse {

		/** Whether the deletion was successful or not. */
		ResponseMessage?: string | null;
	}

	/** If the action is successful, the service sends back an HTTP 200 response. */
	export interface DeleteReportDefinitionResponseFormProperties {

		/** Whether the deletion was successful or not. */
		ResponseMessage: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReportDefinitionResponseFormGroup() {
		return new FormGroup<DeleteReportDefinitionResponseFormProperties>({
			ResponseMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deletes the specified report. */
	export interface DeleteReportDefinitionRequest {
		ReportName?: string;
	}

	/** Deletes the specified report. */
	export interface DeleteReportDefinitionRequestFormProperties {
		ReportName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReportDefinitionRequestFormGroup() {
		return new FormGroup<DeleteReportDefinitionRequestFormProperties>({
			ReportName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InternalErrorException {
	}
	export interface InternalErrorExceptionFormProperties {
	}
	export function CreateInternalErrorExceptionFormGroup() {
		return new FormGroup<InternalErrorExceptionFormProperties>({
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


	/** If the action is successful, the service sends back an HTTP 200 response. */
	export interface DescribeReportDefinitionsResponse {
		ReportDefinitions?: Array<ReportDefinition>;

		/**
		 * A generic string.
		 * Max length: 256
		 */
		NextToken?: string | null;
	}

	/** If the action is successful, the service sends back an HTTP 200 response. */
	export interface DescribeReportDefinitionsResponseFormProperties {

		/**
		 * A generic string.
		 * Max length: 256
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReportDefinitionsResponseFormGroup() {
		return new FormGroup<DescribeReportDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('[A-Za-z0-9_\.\-=]*')]),
		});

	}


	/** The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.  */
	export interface ReportDefinition {

		/**
		 * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
		 * Required
		 * Max length: 256
		 */
		ReportName: string;

		/**
		 * The length of time covered by the report.
		 * Required
		 */
		TimeUnit: ReportDefinitionTimeUnit;

		/**
		 * The format that AWS saves the report in.
		 * Required
		 */
		Format: ReportDefinitionFormat;

		/**
		 * The compression format that AWS uses for the report.
		 * Required
		 */
		Compression: ReportDefinitionCompression;

		/** Required */
		AdditionalSchemaElements: Array<SchemaElement>;

		/**
		 * The S3 bucket where AWS delivers the report.
		 * Required
		 * Max length: 256
		 */
		S3Bucket: string;

		/**
		 * The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.
		 * Required
		 * Max length: 256
		 */
		S3Prefix: string;

		/**
		 * The region of the S3 bucket that AWS delivers the report into.
		 * Required
		 */
		S3Region: ReportDefinitionS3Region;
		AdditionalArtifacts?: Array<AdditionalArtifact>;
		RefreshClosedReports?: boolean | null;
		ReportVersioning?: ReportVersioning;
		BillingViewArn?: string;
	}

	/** The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.  */
	export interface ReportDefinitionFormProperties {

		/**
		 * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
		 * Required
		 * Max length: 256
		 */
		ReportName: FormControl<string | null | undefined>,

		/**
		 * The length of time covered by the report.
		 * Required
		 */
		TimeUnit: FormControl<ReportDefinitionTimeUnit | null | undefined>,

		/**
		 * The format that AWS saves the report in.
		 * Required
		 */
		Format: FormControl<ReportDefinitionFormat | null | undefined>,

		/**
		 * The compression format that AWS uses for the report.
		 * Required
		 */
		Compression: FormControl<ReportDefinitionCompression | null | undefined>,

		/**
		 * The S3 bucket where AWS delivers the report.
		 * Required
		 * Max length: 256
		 */
		S3Bucket: FormControl<string | null | undefined>,

		/**
		 * The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.
		 * Required
		 * Max length: 256
		 */
		S3Prefix: FormControl<string | null | undefined>,

		/**
		 * The region of the S3 bucket that AWS delivers the report into.
		 * Required
		 */
		S3Region: FormControl<ReportDefinitionS3Region | null | undefined>,
		RefreshClosedReports: FormControl<boolean | null | undefined>,
		ReportVersioning: FormControl<ReportVersioning | null | undefined>,
		BillingViewArn: FormControl<string | null | undefined>,
	}
	export function CreateReportDefinitionFormGroup() {
		return new FormGroup<ReportDefinitionFormProperties>({
			ReportName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[0-9A-Za-z!\-_.*\\\'()]+')]),
			TimeUnit: new FormControl<ReportDefinitionTimeUnit | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<ReportDefinitionFormat | null | undefined>(undefined, [Validators.required]),
			Compression: new FormControl<ReportDefinitionCompression | null | undefined>(undefined, [Validators.required]),
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[A-Za-z0-9_\.\-]+')]),
			S3Prefix: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[0-9A-Za-z!\-_.*\\\'()/]*')]),
			S3Region: new FormControl<ReportDefinitionS3Region | null | undefined>(undefined, [Validators.required]),
			RefreshClosedReports: new FormControl<boolean | null | undefined>(undefined),
			ReportVersioning: new FormControl<ReportVersioning | null | undefined>(undefined),
			BillingViewArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportDefinitionTimeUnit { HOURLY = 'HOURLY', DAILY = 'DAILY', MONTHLY = 'MONTHLY' }

	export enum ReportDefinitionFormat { textORcsv = 'textORcsv', Parquet = 'Parquet' }

	export enum ReportDefinitionCompression { ZIP = 'ZIP', GZIP = 'GZIP', Parquet = 'Parquet' }


	/** Whether or not AWS includes resource IDs in the report.  */
	export enum SchemaElement { RESOURCES = 'RESOURCES', SPLIT_COST_ALLOCATION_DATA = 'SPLIT_COST_ALLOCATION_DATA' }

	export enum ReportDefinitionS3Region { 'af-south-1' = 'af-south-1', 'ap-east-1' = 'ap-east-1', 'ap-south-1' = 'ap-south-1', 'ap-south-2' = 'ap-south-2', 'ap-southeast-1' = 'ap-southeast-1', 'ap-southeast-2' = 'ap-southeast-2', 'ap-southeast-3' = 'ap-southeast-3', 'ap-northeast-1' = 'ap-northeast-1', 'ap-northeast-2' = 'ap-northeast-2', 'ap-northeast-3' = 'ap-northeast-3', 'ca-central-1' = 'ca-central-1', 'eu-central-1' = 'eu-central-1', 'eu-central-2' = 'eu-central-2', 'eu-west-1' = 'eu-west-1', 'eu-west-2' = 'eu-west-2', 'eu-west-3' = 'eu-west-3', 'eu-north-1' = 'eu-north-1', 'eu-south-1' = 'eu-south-1', 'eu-south-2' = 'eu-south-2', 'me-central-1' = 'me-central-1', 'me-south-1' = 'me-south-1', 'sa-east-1' = 'sa-east-1', 'us-east-1' = 'us-east-1', 'us-east-2' = 'us-east-2', 'us-west-1' = 'us-west-1', 'us-west-2' = 'us-west-2', 'cn-north-1' = 'cn-north-1', 'cn-northwest-1' = 'cn-northwest-1' }


	/** The types of manifest that you want AWS to create for this report. */
	export enum AdditionalArtifact { REDSHIFT = 'REDSHIFT', QUICKSIGHT = 'QUICKSIGHT', ATHENA = 'ATHENA' }

	export enum ReportVersioning { CREATE_NEW_REPORT = 'CREATE_NEW_REPORT', OVERWRITE_REPORT = 'OVERWRITE_REPORT' }


	/** Requests a list of AWS Cost and Usage reports owned by the account. */
	export interface DescribeReportDefinitionsRequest {

		/**
		 * The maximum number of results that AWS returns for the operation.
		 * Minimum: 5
		 * Maximum: 5
		 */
		MaxResults?: number | null;

		/**
		 * A generic string.
		 * Max length: 256
		 */
		NextToken?: string | null;
	}

	/** Requests a list of AWS Cost and Usage reports owned by the account. */
	export interface DescribeReportDefinitionsRequestFormProperties {

		/**
		 * The maximum number of results that AWS returns for the operation.
		 * Minimum: 5
		 * Maximum: 5
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * A generic string.
		 * Max length: 256
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReportDefinitionsRequestFormGroup() {
		return new FormGroup<DescribeReportDefinitionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(5)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('[A-Za-z0-9_\.\-=]*')]),
		});

	}

	export interface ModifyReportDefinitionResponse {
	}
	export interface ModifyReportDefinitionResponseFormProperties {
	}
	export function CreateModifyReportDefinitionResponseFormGroup() {
		return new FormGroup<ModifyReportDefinitionResponseFormProperties>({
		});

	}

	export interface ModifyReportDefinitionRequest {

		/**
		 * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
		 * Required
		 * Max length: 256
		 */
		ReportName: string;

		/**
		 * The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.
		 * Required
		 */
		ReportDefinition: ReportDefinition;
	}
	export interface ModifyReportDefinitionRequestFormProperties {

		/**
		 * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
		 * Required
		 * Max length: 256
		 */
		ReportName: FormControl<string | null | undefined>,
	}
	export function CreateModifyReportDefinitionRequestFormGroup() {
		return new FormGroup<ModifyReportDefinitionRequestFormProperties>({
			ReportName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[0-9A-Za-z!\-_.*\\\'()]+')]),
		});

	}


	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface PutReportDefinitionResponse {
	}

	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface PutReportDefinitionResponseFormProperties {
	}
	export function CreatePutReportDefinitionResponseFormGroup() {
		return new FormGroup<PutReportDefinitionResponseFormProperties>({
		});

	}


	/** Creates a Cost and Usage Report. */
	export interface PutReportDefinitionRequest {

		/** Required */
		ReportDefinition: ReportDefinition;
	}

	/** Creates a Cost and Usage Report. */
	export interface PutReportDefinitionRequestFormProperties {
	}
	export function CreatePutReportDefinitionRequestFormGroup() {
		return new FormGroup<PutReportDefinitionRequestFormProperties>({
		});

	}

	export interface DuplicateReportNameException {
	}
	export interface DuplicateReportNameExceptionFormProperties {
	}
	export function CreateDuplicateReportNameExceptionFormGroup() {
		return new FormGroup<DuplicateReportNameExceptionFormProperties>({
		});

	}

	export interface ReportLimitReachedException {
	}
	export interface ReportLimitReachedExceptionFormProperties {
	}
	export function CreateReportLimitReachedExceptionFormGroup() {
		return new FormGroup<ReportLimitReachedExceptionFormProperties>({
		});

	}


	/** The region of the S3 bucket that AWS delivers the report into. */
	export enum AWSRegion { 'af-south-1' = 'af-south-1', 'ap-east-1' = 'ap-east-1', 'ap-south-1' = 'ap-south-1', 'ap-south-2' = 'ap-south-2', 'ap-southeast-1' = 'ap-southeast-1', 'ap-southeast-2' = 'ap-southeast-2', 'ap-southeast-3' = 'ap-southeast-3', 'ap-northeast-1' = 'ap-northeast-1', 'ap-northeast-2' = 'ap-northeast-2', 'ap-northeast-3' = 'ap-northeast-3', 'ca-central-1' = 'ca-central-1', 'eu-central-1' = 'eu-central-1', 'eu-central-2' = 'eu-central-2', 'eu-west-1' = 'eu-west-1', 'eu-west-2' = 'eu-west-2', 'eu-west-3' = 'eu-west-3', 'eu-north-1' = 'eu-north-1', 'eu-south-1' = 'eu-south-1', 'eu-south-2' = 'eu-south-2', 'me-central-1' = 'me-central-1', 'me-south-1' = 'me-south-1', 'sa-east-1' = 'sa-east-1', 'us-east-1' = 'us-east-1', 'us-east-2' = 'us-east-2', 'us-west-1' = 'us-west-1', 'us-west-2' = 'us-west-2', 'cn-north-1' = 'cn-north-1', 'cn-northwest-1' = 'cn-northwest-1' }


	/** The compression format that AWS uses for the report. */
	export enum CompressionFormat { ZIP = 'ZIP', GZIP = 'GZIP', Parquet = 'Parquet' }


	/** The length of time covered by the report.  */
	export enum TimeUnit { HOURLY = 'HOURLY', DAILY = 'DAILY', MONTHLY = 'MONTHLY' }


	/** The format that AWS saves the report in. */
	export enum ReportFormat { textORcsv = 'textORcsv', Parquet = 'Parquet' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the specified report.
		 * Post #X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition
		 * @return {DeleteReportDefinitionResponse} Success
		 */
		DeleteReportDefinition(requestBody: DeleteReportDefinitionRequest): Observable<DeleteReportDefinitionResponse> {
			return this.http.post<DeleteReportDefinitionResponse>(this.baseUri + '#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the AWS Cost and Usage reports available to this account.
		 * Post #X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeReportDefinitionsResponse} Success
		 */
		DescribeReportDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeReportDefinitionsRequest): Observable<DescribeReportDefinitionsResponse> {
			return this.http.post<DescribeReportDefinitionsResponse>(this.baseUri + '#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to programatically update your report preferences.
		 * Post #X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition
		 * @return {ModifyReportDefinitionResponse} Success
		 */
		ModifyReportDefinition(requestBody: ModifyReportDefinitionRequest): Observable<ModifyReportDefinitionResponse> {
			return this.http.post<ModifyReportDefinitionResponse>(this.baseUri + '#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new report using the description that you provide.
		 * Post #X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition
		 * @return {PutReportDefinitionResponse} Success
		 */
		PutReportDefinition(requestBody: PutReportDefinitionRequest): Observable<PutReportDefinitionResponse> {
			return this.http.post<PutReportDefinitionResponse>(this.baseUri + '#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DeleteReportDefinitionX_Amz_Target { 'AWSOrigamiServiceGatewayService.DeleteReportDefinition' = 'AWSOrigamiServiceGatewayService.DeleteReportDefinition' }

	export enum DescribeReportDefinitionsX_Amz_Target { 'AWSOrigamiServiceGatewayService.DescribeReportDefinitions' = 'AWSOrigamiServiceGatewayService.DescribeReportDefinitions' }

	export enum ModifyReportDefinitionX_Amz_Target { 'AWSOrigamiServiceGatewayService.ModifyReportDefinition' = 'AWSOrigamiServiceGatewayService.ModifyReportDefinition' }

	export enum PutReportDefinitionX_Amz_Target { 'AWSOrigamiServiceGatewayService.PutReportDefinition' = 'AWSOrigamiServiceGatewayService.PutReportDefinition' }

}

