import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** If the action is successful, the service sends back an HTTP 200 response. */
	export interface DeleteReportDefinitionResponse {

		/** Whether the deletion was successful or not. */
		ResponseMessage?: string;
	}


	/** Deletes the specified report. */
	export interface DeleteReportDefinitionRequest {

		/**
		 * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
		 * Max length: 256
		 * Pattern: [0-9A-Za-z!\-_.*\'()]+
		 */
		ReportName?: string;
	}

	export interface InternalErrorException {
	}

	export interface ValidationException {
	}


	/** If the action is successful, the service sends back an HTTP 200 response. */
	export interface DescribeReportDefinitionsResponse {

		/** A list of report definitions. */
		ReportDefinitions?: Array<ReportDefinition>;

		/** A generic string. */
		NextToken?: string;
	}


	/** The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.  */
	export interface ReportDefinition {

		/**
		 * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
		 * Max length: 256
		 * Pattern: [0-9A-Za-z!\-_.*\'()]+
		 */
		ReportName: string;

		/** The length of time covered by the report. */
		TimeUnit: ReportDefinitionTimeUnit;

		/** The format that AWS saves the report in. */
		Format: ReportDefinitionFormat;

		/** The compression format that AWS uses for the report. */
		Compression: ReportDefinitionCompression;

		/** A list of strings that indicate the content that is included in the report, such as service or usage type. */
		AdditionalSchemaElements: Array<SchemaElement>;

		/**
		 * The S3 bucket where AWS delivers the report.
		 * Max length: 256
		 */
		S3Bucket: string;

		/**
		 * The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.
		 * Max length: 256
		 * Pattern: [0-9A-Za-z!\-_.*\'()/]*
		 */
		S3Prefix: string;

		/** The region of the S3 bucket that AWS delivers the report into. */
		S3Region: ReportDefinitionS3Region;

		/** A list of additional artifacts. */
		AdditionalArtifacts?: Array<AdditionalArtifact>;
		RefreshClosedReports?: boolean;
		ReportVersioning?: ReportDefinitionReportVersioning;
	}

	export enum ReportDefinitionTimeUnit { HOURLY = 0, DAILY = 1 }

	export enum ReportDefinitionFormat { textORcsv = 0, Parquet = 1 }

	export enum ReportDefinitionCompression { ZIP = 0, GZIP = 1, Parquet = 2 }


	/** Whether or not AWS includes resource IDs in the report.  */
	export enum SchemaElement { RESOURCES = 0 }

	export enum ReportDefinitionS3Region { us_east_1 = 0, us_west_1 = 1, us_west_2 = 2, eu_central_1 = 3, eu_west_1 = 4, ap_southeast_1 = 5, ap_southeast_2 = 6, ap_northeast_1 = 7, eu_north_1 = 8, ap_northeast_3 = 9, ap_east_1 = 10 }


	/** The types of manifest that you want AWS to create for this report. */
	export enum AdditionalArtifact { REDSHIFT = 0, QUICKSIGHT = 1, ATHENA = 2 }

	export enum ReportDefinitionReportVersioning { CREATE_NEW_REPORT = 0, OVERWRITE_REPORT = 1 }


	/** Requests a list of AWS Cost and Usage reports owned by the account. */
	export interface DescribeReportDefinitionsRequest {

		/**
		 * The maximum number of results that AWS returns for the operation.
		 * Minimum: 5
		 * Maximum: 5
		 */
		MaxResults?: number;

		/** A generic string. */
		NextToken?: string;
	}

	export interface ModifyReportDefinitionResponse {
	}

	export interface ModifyReportDefinitionRequest {

		/**
		 * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
		 * Max length: 256
		 * Pattern: [0-9A-Za-z!\-_.*\'()]+
		 */
		ReportName: string;

		/** The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. */
		ReportDefinition: ReportDefinition;
	}


	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface PutReportDefinitionResponse {
	}


	/** Creates a Cost and Usage Report. */
	export interface PutReportDefinitionRequest {

		/** The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. */
		ReportDefinition: ReportDefinition;
	}

	export interface DuplicateReportNameException {
	}

	export interface ReportLimitReachedException {
	}


	/** The region of the S3 bucket that AWS delivers the report into. */
	export enum AWSRegion { us_east_1 = 0, us_west_1 = 1, us_west_2 = 2, eu_central_1 = 3, eu_west_1 = 4, ap_southeast_1 = 5, ap_southeast_2 = 6, ap_northeast_1 = 7, eu_north_1 = 8, ap_northeast_3 = 9, ap_east_1 = 10 }


	/** The compression format that AWS uses for the report. */
	export enum CompressionFormat { ZIP = 0, GZIP = 1, Parquet = 2 }


	/** The length of time covered by the report.  */
	export enum TimeUnit { HOURLY = 0, DAILY = 1 }


	/** The format that AWS saves the report in. */
	export enum ReportFormat { textORcsv = 0, Parquet = 1 }

	export enum ReportVersioning { CREATE_NEW_REPORT = 0, OVERWRITE_REPORT = 1 }

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
		DescribeReportDefinitions(MaxResults: string, NextToken: string, requestBody: DescribeReportDefinitionsRequest): Observable<DescribeReportDefinitionsResponse> {
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

	export enum DeleteReportDefinitionX_Amz_Target { AWSOrigamiServiceGatewayService_DeleteReportDefinition = 0 }

	export enum DescribeReportDefinitionsX_Amz_Target { AWSOrigamiServiceGatewayService_DescribeReportDefinitions = 0 }

	export enum ModifyReportDefinitionX_Amz_Target { AWSOrigamiServiceGatewayService_ModifyReportDefinition = 0 }

	export enum PutReportDefinitionX_Amz_Target { AWSOrigamiServiceGatewayService_PutReportDefinition = 0 }

}

