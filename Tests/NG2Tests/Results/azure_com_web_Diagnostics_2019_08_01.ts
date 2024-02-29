import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Class representing Abnormal Time Period identified in diagnosis */
	export interface AbnormalTimePeriod {

		/** End time of the downtime */
		endTime?: Date | null;

		/** List of Possible Cause of downtime */
		events?: Array<DetectorAbnormalTimePeriod>;

		/** List of proposed solutions */
		solutions?: Array<Solution>;

		/** Start time of the downtime */
		startTime?: Date | null;
	}

	/** Class representing Abnormal Time Period identified in diagnosis */
	export interface AbnormalTimePeriodFormProperties {

		/** End time of the downtime */
		endTime: FormControl<Date | null | undefined>,

		/** Start time of the downtime */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateAbnormalTimePeriodFormGroup() {
		return new FormGroup<AbnormalTimePeriodFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Class representing Abnormal Time Period detected. */
	export interface DetectorAbnormalTimePeriod {

		/** End time of the correlated event */
		endTime?: Date | null;

		/** Message describing the event */
		message?: string | null;

		/** Downtime metadata */
		metaData?: Array<string>;

		/**
		 * Represents the rank of the Detector
		 * Type: double
		 */
		priority?: number | null;

		/** List of proposed solutions */
		solutions?: Array<Solution>;

		/** Represents the name of the Detector */
		source?: string | null;

		/** Start time of the correlated event */
		startTime?: Date | null;

		/** Represents the type of the Detector */
		type?: DetectorAbnormalTimePeriodType | null;
	}

	/** Class representing Abnormal Time Period detected. */
	export interface DetectorAbnormalTimePeriodFormProperties {

		/** End time of the correlated event */
		endTime: FormControl<Date | null | undefined>,

		/** Message describing the event */
		message: FormControl<string | null | undefined>,

		/**
		 * Represents the rank of the Detector
		 * Type: double
		 */
		priority: FormControl<number | null | undefined>,

		/** Represents the name of the Detector */
		source: FormControl<string | null | undefined>,

		/** Start time of the correlated event */
		startTime: FormControl<Date | null | undefined>,

		/** Represents the type of the Detector */
		type: FormControl<DetectorAbnormalTimePeriodType | null | undefined>,
	}
	export function CreateDetectorAbnormalTimePeriodFormGroup() {
		return new FormGroup<DetectorAbnormalTimePeriodFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<DetectorAbnormalTimePeriodType | null | undefined>(undefined),
		});

	}


	/** Class Representing Solution for problems detected. */
	export interface Solution {

		/** Solution Data. */
		data?: Array<string>;

		/** Description of the solution */
		description?: string | null;

		/** Display Name of the solution */
		displayName?: string | null;

		/**
		 * Solution Id.
		 * Type: double
		 */
		id?: number | null;

		/** Solution Metadata. */
		metadata?: Array<string>;

		/**
		 * Order of the solution.
		 * Type: double
		 */
		order?: number | null;

		/** Type of Solution */
		type?: SolutionType | null;
	}

	/** Class Representing Solution for problems detected. */
	export interface SolutionFormProperties {

		/** Description of the solution */
		description: FormControl<string | null | undefined>,

		/** Display Name of the solution */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Solution Id.
		 * Type: double
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Order of the solution.
		 * Type: double
		 */
		order: FormControl<number | null | undefined>,

		/** Type of Solution */
		type: FormControl<SolutionType | null | undefined>,
	}
	export function CreateSolutionFormGroup() {
		return new FormGroup<SolutionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<SolutionType | null | undefined>(undefined),
		});

	}

	export enum SolutionType { QuickSolution = 'QuickSolution', DeepInvestigation = 'DeepInvestigation', BestPractices = 'BestPractices' }

	export enum DetectorAbnormalTimePeriodType { ServiceIncident = 'ServiceIncident', AppDeployment = 'AppDeployment', AppCrash = 'AppCrash', RuntimeIssueDetected = 'RuntimeIssueDetected', AseDeployment = 'AseDeployment', UserIssue = 'UserIssue', PlatformIssue = 'PlatformIssue', Other = 'Other' }


	/** Class Representing Detector Evidence used for analysis */
	export interface AnalysisData {

		/** Additional Source Data */
		data?: Array<string>;

		/** Class representing detector definition */
		detectorDefinition?: DetectorDefinition;
		detectorMetaData?: ResponseMetaData;

		/** Source Metrics */
		metrics?: Array<DiagnosticMetricSet>;

		/** Name of the Detector */
		source?: string | null;
	}

	/** Class Representing Detector Evidence used for analysis */
	export interface AnalysisDataFormProperties {

		/** Name of the Detector */
		source: FormControl<string | null | undefined>,
	}
	export function CreateAnalysisDataFormGroup() {
		return new FormGroup<AnalysisDataFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing detector definition */
	export interface DetectorDefinition {

		/** DetectorDefinition resource specific properties */
		properties?: any;
	}

	/** Class representing detector definition */
	export interface DetectorDefinitionFormProperties {

		/** DetectorDefinition resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDetectorDefinitionFormGroup() {
		return new FormGroup<DetectorDefinitionFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface ResponseMetaData {

		/** Class representing data source used by the detectors */
		dataSource?: DataSource;
	}
	export interface ResponseMetaDataFormProperties {
	}
	export function CreateResponseMetaDataFormGroup() {
		return new FormGroup<ResponseMetaDataFormProperties>({
		});

	}


	/** Class representing data source used by the detectors */
	export interface DataSource {

		/** Datasource Uri Links */
		DataSourceDataSourceUri?: Array<DataSourceDataSourceUri>;

		/** Instructions if any for the data source */
		instructions?: Array<string>;
	}

	/** Class representing data source used by the detectors */
	export interface DataSourceFormProperties {
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
		});

	}

	export interface DataSourceDataSourceUri {

		/** Pair name. */
		name?: string | null;

		/** Pair value. */
		value?: string | null;
	}
	export interface DataSourceDataSourceUriFormProperties {

		/** Pair name. */
		name: FormControl<string | null | undefined>,

		/** Pair value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceDataSourceUriFormGroup() {
		return new FormGroup<DataSourceDataSourceUriFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing Diagnostic Metric information */
	export interface DiagnosticMetricSet {

		/** End time of the period */
		endTime?: Date | null;

		/** Name of the metric */
		name?: string | null;

		/** Start time of the period */
		startTime?: Date | null;

		/** Presented time grain. Supported grains at the moment are PT1M, PT1H, P1D */
		timeGrain?: string | null;

		/** Metric's unit */
		unit?: string | null;

		/** Collection of metric values for the selected period based on the {Microsoft.Web.Hosting.Administration.DiagnosticMetricSet.TimeGrain} */
		values?: Array<DiagnosticMetricSample>;
	}

	/** Class representing Diagnostic Metric information */
	export interface DiagnosticMetricSetFormProperties {

		/** End time of the period */
		endTime: FormControl<Date | null | undefined>,

		/** Name of the metric */
		name: FormControl<string | null | undefined>,

		/** Start time of the period */
		startTime: FormControl<Date | null | undefined>,

		/** Presented time grain. Supported grains at the moment are PT1M, PT1H, P1D */
		timeGrain: FormControl<string | null | undefined>,

		/** Metric's unit */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateDiagnosticMetricSetFormGroup() {
		return new FormGroup<DiagnosticMetricSetFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing Diagnostic Metric */
	export interface DiagnosticMetricSample {

		/** Whether the values are aggregates across all workers or not */
		isAggregated?: boolean | null;

		/**
		 * Maximum of the metric sampled during the time period
		 * Type: double
		 */
		maximum?: number | null;

		/**
		 * Minimum of the metric sampled during the time period
		 * Type: double
		 */
		minimum?: number | null;

		/**
		 * Role Instance. Null if this counter is not per instance
		 * This is returned and should be whichever instance name we desire to be returned
		 * i.e. CPU and Memory return RDWORKERNAME (LargeDed..._IN_0)
		 * where RDWORKERNAME is Machine name below and RoleInstance name in parenthesis
		 */
		roleInstance?: string | null;

		/** Time at which metric is measured */
		timestamp?: Date | null;

		/**
		 * Total value of the metric. If multiple measurements are made this will have sum of all.
		 * Type: double
		 */
		total?: number | null;
	}

	/** Class representing Diagnostic Metric */
	export interface DiagnosticMetricSampleFormProperties {

		/** Whether the values are aggregates across all workers or not */
		isAggregated: FormControl<boolean | null | undefined>,

		/**
		 * Maximum of the metric sampled during the time period
		 * Type: double
		 */
		maximum: FormControl<number | null | undefined>,

		/**
		 * Minimum of the metric sampled during the time period
		 * Type: double
		 */
		minimum: FormControl<number | null | undefined>,

		/**
		 * Role Instance. Null if this counter is not per instance
		 * This is returned and should be whichever instance name we desire to be returned
		 * i.e. CPU and Memory return RDWORKERNAME (LargeDed..._IN_0)
		 * where RDWORKERNAME is Machine name below and RoleInstance name in parenthesis
		 */
		roleInstance: FormControl<string | null | undefined>,

		/** Time at which metric is measured */
		timestamp: FormControl<Date | null | undefined>,

		/**
		 * Total value of the metric. If multiple measurements are made this will have sum of all.
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateDiagnosticMetricSampleFormGroup() {
		return new FormGroup<DiagnosticMetricSampleFormProperties>({
			isAggregated: new FormControl<boolean | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			roleInstance: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Definition of Analysis */
	export interface AnalysisDefinition {

		/** AnalysisDefinition resource specific properties */
		properties?: any;
	}

	/** Definition of Analysis */
	export interface AnalysisDefinitionFormProperties {

		/** AnalysisDefinition resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAnalysisDefinitionFormGroup() {
		return new FormGroup<AnalysisDefinitionFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Column definition */
	export interface DataTableResponseColumn {

		/** Name of the column */
		columnName?: string | null;

		/** Column Type */
		columnType?: string | null;

		/** Data type which looks like 'String' or 'Int32'. */
		dataType?: string | null;
	}

	/** Column definition */
	export interface DataTableResponseColumnFormProperties {

		/** Name of the column */
		columnName: FormControl<string | null | undefined>,

		/** Column Type */
		columnType: FormControl<string | null | undefined>,

		/** Data type which looks like 'String' or 'Int32'. */
		dataType: FormControl<string | null | undefined>,
	}
	export function CreateDataTableResponseColumnFormGroup() {
		return new FormGroup<DataTableResponseColumnFormProperties>({
			columnName: new FormControl<string | null | undefined>(undefined),
			columnType: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Table which defines columns and raw row values */
	export interface DataTableResponseObject {

		/** List of columns with data types */
		columns?: Array<DataTableResponseColumn>;

		/** Raw row values */
		rows?: Array<string>;

		/** Name of the table */
		tableName?: string | null;
	}

	/** Data Table which defines columns and raw row values */
	export interface DataTableResponseObjectFormProperties {

		/** Name of the table */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateDataTableResponseObjectFormGroup() {
		return new FormGroup<DataTableResponseObjectFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of Detector */
	export interface DetectorInfo {

		/** Support Category */
		category?: string | null;

		/** Short description of the detector and its purpose */
		description?: string | null;

		/** Support Sub Category */
		subCategory?: string | null;

		/** Support Topic Id */
		supportTopicId?: string | null;
	}

	/** Definition of Detector */
	export interface DetectorInfoFormProperties {

		/** Support Category */
		category: FormControl<string | null | undefined>,

		/** Short description of the detector and its purpose */
		description: FormControl<string | null | undefined>,

		/** Support Sub Category */
		subCategory: FormControl<string | null | undefined>,

		/** Support Topic Id */
		supportTopicId: FormControl<string | null | undefined>,
	}
	export function CreateDetectorInfoFormGroup() {
		return new FormGroup<DetectorInfoFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			subCategory: new FormControl<string | null | undefined>(undefined),
			supportTopicId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing Response from Detector */
	export interface DetectorResponse {

		/** DetectorResponse resource specific properties */
		properties?: any;
	}

	/** Class representing Response from Detector */
	export interface DetectorResponseFormProperties {

		/** DetectorResponse resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDetectorResponseFormGroup() {
		return new FormGroup<DetectorResponseFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of detector responses */
	export interface DetectorResponseCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<DetectorResponse>;
	}

	/** Collection of detector responses */
	export interface DetectorResponseCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDetectorResponseCollectionFormGroup() {
		return new FormGroup<DetectorResponseCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing a diagnostic analysis done on an application */
	export interface DiagnosticAnalysis {

		/** DiagnosticAnalysis resource specific properties */
		properties?: any;
	}

	/** Class representing a diagnostic analysis done on an application */
	export interface DiagnosticAnalysisFormProperties {

		/** DiagnosticAnalysis resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDiagnosticAnalysisFormGroup() {
		return new FormGroup<DiagnosticAnalysisFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of Diagnostic Analyses */
	export interface DiagnosticAnalysisCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<AnalysisDefinition>;
	}

	/** Collection of Diagnostic Analyses */
	export interface DiagnosticAnalysisCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDiagnosticAnalysisCollectionFormGroup() {
		return new FormGroup<DiagnosticAnalysisCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing detector definition */
	export interface DiagnosticCategory {

		/** DiagnosticCategory resource specific properties */
		properties?: any;
	}

	/** Class representing detector definition */
	export interface DiagnosticCategoryFormProperties {

		/** DiagnosticCategory resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDiagnosticCategoryFormGroup() {
		return new FormGroup<DiagnosticCategoryFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of Diagnostic Categories */
	export interface DiagnosticCategoryCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<DiagnosticCategory>;
	}

	/** Collection of Diagnostic Categories */
	export interface DiagnosticCategoryCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDiagnosticCategoryCollectionFormGroup() {
		return new FormGroup<DiagnosticCategoryCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of data with rendering instructions */
	export interface DiagnosticData {

		/** Instructions for rendering the data */
		renderingProperties?: Rendering;

		/** Data Table which defines columns and raw row values */
		table?: DataTableResponseObject;
	}

	/** Set of data with rendering instructions */
	export interface DiagnosticDataFormProperties {
	}
	export function CreateDiagnosticDataFormGroup() {
		return new FormGroup<DiagnosticDataFormProperties>({
		});

	}


	/** Instructions for rendering the data */
	export interface Rendering {

		/** Description of the data that will help it be interpreted */
		description?: string | null;

		/** Title of data */
		title?: string | null;

		/** Rendering Type */
		type?: RenderingType | null;
	}

	/** Instructions for rendering the data */
	export interface RenderingFormProperties {

		/** Description of the data that will help it be interpreted */
		description: FormControl<string | null | undefined>,

		/** Title of data */
		title: FormControl<string | null | undefined>,

		/** Rendering Type */
		type: FormControl<RenderingType | null | undefined>,
	}
	export function CreateRenderingFormGroup() {
		return new FormGroup<RenderingFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<RenderingType | null | undefined>(undefined),
		});

	}

	export enum RenderingType { NoGraph = 'NoGraph', Table = 'Table', TimeSeries = 'TimeSeries', TimeSeriesPerInstance = 'TimeSeriesPerInstance' }


	/** Collection of Diagnostic Detectors */
	export interface DiagnosticDetectorCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<DetectorDefinition>;
	}

	/** Collection of Diagnostic Detectors */
	export interface DiagnosticDetectorCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDiagnosticDetectorCollectionFormGroup() {
		return new FormGroup<DiagnosticDetectorCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing Response from Diagnostic Detectors */
	export interface DiagnosticDetectorResponse {

		/** DiagnosticDetectorResponse resource specific properties */
		properties?: any;
	}

	/** Class representing Response from Diagnostic Detectors */
	export interface DiagnosticDetectorResponseFormProperties {

		/** DiagnosticDetectorResponse resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDiagnosticDetectorResponseFormGroup() {
		return new FormGroup<DiagnosticDetectorResponseFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Hosting Environment Detector Responses
		 * Description for List Hosting Environment Detector Responses
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/detectors
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} name Site Name
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DetectorResponseCollection} OK
		 */
		Diagnostics_ListHostingEnvironmentDetectorResponses(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<DetectorResponseCollection> {
			return this.http.get<DetectorResponseCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/detectors&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Hosting Environment Detector Response
		 * Description for Get Hosting Environment Detector Response
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/detectors/{detectorName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} name App Service Environment Name
		 * @param {string} detectorName Detector Resource Name
		 * @param {Date} startTime Start Time
		 * @param {Date} endTime End Time
		 * @param {string} timeGrain Time Grain
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DetectorResponse} OK
		 */
		Diagnostics_GetHostingEnvironmentDetectorResponse(resourceGroupName: string, name: string, detectorName: string, startTime: Date | null | undefined, endTime: Date | null | undefined, timeGrain: string | null | undefined, subscriptionId: string, api_version: string): Observable<DetectorResponse> {
			return this.http.get<DetectorResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/detectors/' + (detectorName == null ? '' : encodeURIComponent(detectorName)) + '&startTime=' + startTime?.toISOString() + '&endTime=' + endTime?.toISOString() + '&timeGrain=' + (timeGrain == null ? '' : encodeURIComponent(timeGrain)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List Site Detector Responses
		 * Description for List Site Detector Responses
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/detectors
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DetectorResponseCollection} OK
		 */
		Diagnostics_ListSiteDetectorResponses(resourceGroupName: string, siteName: string, subscriptionId: string, api_version: string): Observable<DetectorResponseCollection> {
			return this.http.get<DetectorResponseCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/detectors&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get site detector response
		 * Description for Get site detector response
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/detectors/{detectorName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} detectorName Detector Resource Name
		 * @param {Date} startTime Start Time
		 * @param {Date} endTime End Time
		 * @param {string} timeGrain Time Grain
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DetectorResponse} OK
		 */
		Diagnostics_GetSiteDetectorResponse(resourceGroupName: string, siteName: string, detectorName: string, startTime: Date | null | undefined, endTime: Date | null | undefined, timeGrain: string | null | undefined, subscriptionId: string, api_version: string): Observable<DetectorResponse> {
			return this.http.get<DetectorResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/detectors/' + (detectorName == null ? '' : encodeURIComponent(detectorName)) + '&startTime=' + startTime?.toISOString() + '&endTime=' + endTime?.toISOString() + '&timeGrain=' + (timeGrain == null ? '' : encodeURIComponent(timeGrain)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Diagnostics Categories
		 * Description for Get Diagnostics Categories
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DiagnosticCategoryCollection} OK
		 */
		Diagnostics_ListSiteDiagnosticCategories(resourceGroupName: string, siteName: string, subscriptionId: string, api_version: string): Observable<DiagnosticCategoryCollection> {
			return this.http.get<DiagnosticCategoryCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/diagnostics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Diagnostics Category
		 * Description for Get Diagnostics Category
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} diagnosticCategory Diagnostic Category
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DiagnosticCategory} OK
		 */
		Diagnostics_GetSiteDiagnosticCategory(resourceGroupName: string, siteName: string, diagnosticCategory: string, subscriptionId: string, api_version: string): Observable<DiagnosticCategory> {
			return this.http.get<DiagnosticCategory>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Site Analyses
		 * Description for Get Site Analyses
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory}/analyses
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} diagnosticCategory Diagnostic Category
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DiagnosticAnalysisCollection} OK
		 */
		Diagnostics_ListSiteAnalyses(resourceGroupName: string, siteName: string, diagnosticCategory: string, subscriptionId: string, api_version: string): Observable<DiagnosticAnalysisCollection> {
			return this.http.get<DiagnosticAnalysisCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '/analyses&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Site Analysis
		 * Description for Get Site Analysis
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory}/analyses/{analysisName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} diagnosticCategory Diagnostic Category
		 * @param {string} analysisName Analysis Name
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AnalysisDefinition} OK
		 */
		Diagnostics_GetSiteAnalysis(resourceGroupName: string, siteName: string, diagnosticCategory: string, analysisName: string, subscriptionId: string, api_version: string): Observable<AnalysisDefinition> {
			return this.http.get<AnalysisDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '/analyses/' + (analysisName == null ? '' : encodeURIComponent(analysisName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Execute Analysis
		 * Description for Execute Analysis
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory}/analyses/{analysisName}/execute
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} diagnosticCategory Category Name
		 * @param {string} analysisName Analysis Resource Name
		 * @param {Date} startTime Start Time
		 * @param {Date} endTime End Time
		 * @param {string} timeGrain Time Grain
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DiagnosticAnalysis} OK
		 */
		Diagnostics_ExecuteSiteAnalysis(resourceGroupName: string, siteName: string, diagnosticCategory: string, analysisName: string, startTime: Date | null | undefined, endTime: Date | null | undefined, timeGrain: string | null | undefined, subscriptionId: string, api_version: string): Observable<DiagnosticAnalysis> {
			return this.http.post<DiagnosticAnalysis>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '/analyses/' + (analysisName == null ? '' : encodeURIComponent(analysisName)) + '/execute&startTime=' + startTime?.toISOString() + '&endTime=' + endTime?.toISOString() + '&timeGrain=' + (timeGrain == null ? '' : encodeURIComponent(timeGrain)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get Detectors
		 * Description for Get Detectors
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory}/detectors
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} diagnosticCategory Diagnostic Category
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DiagnosticDetectorCollection} OK
		 */
		Diagnostics_ListSiteDetectors(resourceGroupName: string, siteName: string, diagnosticCategory: string, subscriptionId: string, api_version: string): Observable<DiagnosticDetectorCollection> {
			return this.http.get<DiagnosticDetectorCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '/detectors&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Detector
		 * Description for Get Detector
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory}/detectors/{detectorName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} diagnosticCategory Diagnostic Category
		 * @param {string} detectorName Detector Name
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DetectorDefinition} OK
		 */
		Diagnostics_GetSiteDetector(resourceGroupName: string, siteName: string, diagnosticCategory: string, detectorName: string, subscriptionId: string, api_version: string): Observable<DetectorDefinition> {
			return this.http.get<DetectorDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '/detectors/' + (detectorName == null ? '' : encodeURIComponent(detectorName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Execute Detector
		 * Description for Execute Detector
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/diagnostics/{diagnosticCategory}/detectors/{detectorName}/execute
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} detectorName Detector Resource Name
		 * @param {string} diagnosticCategory Category Name
		 * @param {Date} startTime Start Time
		 * @param {Date} endTime End Time
		 * @param {string} timeGrain Time Grain
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DiagnosticDetectorResponse} OK
		 */
		Diagnostics_ExecuteSiteDetector(resourceGroupName: string, siteName: string, detectorName: string, diagnosticCategory: string, startTime: Date | null | undefined, endTime: Date | null | undefined, timeGrain: string | null | undefined, subscriptionId: string, api_version: string): Observable<DiagnosticDetectorResponse> {
			return this.http.post<DiagnosticDetectorResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '/detectors/' + (detectorName == null ? '' : encodeURIComponent(detectorName)) + '/execute&startTime=' + startTime?.toISOString() + '&endTime=' + endTime?.toISOString() + '&timeGrain=' + (timeGrain == null ? '' : encodeURIComponent(timeGrain)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * List Site Detector Responses
		 * Description for List Site Detector Responses
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/detectors
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} slot Slot Name
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DetectorResponseCollection} OK
		 */
		Diagnostics_ListSiteDetectorResponsesSlot(resourceGroupName: string, siteName: string, slot: string, subscriptionId: string, api_version: string): Observable<DetectorResponseCollection> {
			return this.http.get<DetectorResponseCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/detectors&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get site detector response
		 * Description for Get site detector response
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/detectors/{detectorName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} detectorName Detector Resource Name
		 * @param {string} slot Slot Name
		 * @param {Date} startTime Start Time
		 * @param {Date} endTime End Time
		 * @param {string} timeGrain Time Grain
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DetectorResponse} OK
		 */
		Diagnostics_GetSiteDetectorResponseSlot(resourceGroupName: string, siteName: string, detectorName: string, slot: string, startTime: Date | null | undefined, endTime: Date | null | undefined, timeGrain: string | null | undefined, subscriptionId: string, api_version: string): Observable<DetectorResponse> {
			return this.http.get<DetectorResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/detectors/' + (detectorName == null ? '' : encodeURIComponent(detectorName)) + '&startTime=' + startTime?.toISOString() + '&endTime=' + endTime?.toISOString() + '&timeGrain=' + (timeGrain == null ? '' : encodeURIComponent(timeGrain)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Diagnostics Categories
		 * Description for Get Diagnostics Categories
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} slot Slot Name
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DiagnosticCategoryCollection} OK
		 */
		Diagnostics_ListSiteDiagnosticCategoriesSlot(resourceGroupName: string, siteName: string, slot: string, subscriptionId: string, api_version: string): Observable<DiagnosticCategoryCollection> {
			return this.http.get<DiagnosticCategoryCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/diagnostics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Diagnostics Category
		 * Description for Get Diagnostics Category
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} diagnosticCategory Diagnostic Category
		 * @param {string} slot Slot Name
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DiagnosticCategory} OK
		 */
		Diagnostics_GetSiteDiagnosticCategorySlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, slot: string, subscriptionId: string, api_version: string): Observable<DiagnosticCategory> {
			return this.http.get<DiagnosticCategory>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Site Analyses
		 * Description for Get Site Analyses
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory}/analyses
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} diagnosticCategory Diagnostic Category
		 * @param {string} slot Slot Name
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DiagnosticAnalysisCollection} OK
		 */
		Diagnostics_ListSiteAnalysesSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, slot: string, subscriptionId: string, api_version: string): Observable<DiagnosticAnalysisCollection> {
			return this.http.get<DiagnosticAnalysisCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '/analyses&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Site Analysis
		 * Description for Get Site Analysis
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory}/analyses/{analysisName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} diagnosticCategory Diagnostic Category
		 * @param {string} analysisName Analysis Name
		 * @param {string} slot Slot - optional
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AnalysisDefinition} OK
		 */
		Diagnostics_GetSiteAnalysisSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, analysisName: string, slot: string, subscriptionId: string, api_version: string): Observable<AnalysisDefinition> {
			return this.http.get<AnalysisDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '/analyses/' + (analysisName == null ? '' : encodeURIComponent(analysisName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Execute Analysis
		 * Description for Execute Analysis
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory}/analyses/{analysisName}/execute
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} diagnosticCategory Category Name
		 * @param {string} analysisName Analysis Resource Name
		 * @param {string} slot Slot Name
		 * @param {Date} startTime Start Time
		 * @param {Date} endTime End Time
		 * @param {string} timeGrain Time Grain
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DiagnosticAnalysis} OK
		 */
		Diagnostics_ExecuteSiteAnalysisSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, analysisName: string, slot: string, startTime: Date | null | undefined, endTime: Date | null | undefined, timeGrain: string | null | undefined, subscriptionId: string, api_version: string): Observable<DiagnosticAnalysis> {
			return this.http.post<DiagnosticAnalysis>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '/analyses/' + (analysisName == null ? '' : encodeURIComponent(analysisName)) + '/execute&startTime=' + startTime?.toISOString() + '&endTime=' + endTime?.toISOString() + '&timeGrain=' + (timeGrain == null ? '' : encodeURIComponent(timeGrain)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get Detectors
		 * Description for Get Detectors
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory}/detectors
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} diagnosticCategory Diagnostic Category
		 * @param {string} slot Slot Name
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DiagnosticDetectorCollection} OK
		 */
		Diagnostics_ListSiteDetectorsSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, slot: string, subscriptionId: string, api_version: string): Observable<DiagnosticDetectorCollection> {
			return this.http.get<DiagnosticDetectorCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '/detectors&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Detector
		 * Description for Get Detector
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory}/detectors/{detectorName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} diagnosticCategory Diagnostic Category
		 * @param {string} detectorName Detector Name
		 * @param {string} slot Slot Name
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DetectorDefinition} OK
		 */
		Diagnostics_GetSiteDetectorSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, detectorName: string, slot: string, subscriptionId: string, api_version: string): Observable<DetectorDefinition> {
			return this.http.get<DetectorDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '/detectors/' + (detectorName == null ? '' : encodeURIComponent(detectorName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Execute Detector
		 * Description for Execute Detector
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slot}/diagnostics/{diagnosticCategory}/detectors/{detectorName}/execute
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} siteName Site Name
		 * @param {string} detectorName Detector Resource Name
		 * @param {string} diagnosticCategory Category Name
		 * @param {string} slot Slot Name
		 * @param {Date} startTime Start Time
		 * @param {Date} endTime End Time
		 * @param {string} timeGrain Time Grain
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DiagnosticDetectorResponse} OK
		 */
		Diagnostics_ExecuteSiteDetectorSlot(resourceGroupName: string, siteName: string, detectorName: string, diagnosticCategory: string, slot: string, startTime: Date | null | undefined, endTime: Date | null | undefined, timeGrain: string | null | undefined, subscriptionId: string, api_version: string): Observable<DiagnosticDetectorResponse> {
			return this.http.post<DiagnosticDetectorResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (siteName == null ? '' : encodeURIComponent(siteName)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/diagnostics/' + (diagnosticCategory == null ? '' : encodeURIComponent(diagnosticCategory)) + '/detectors/' + (detectorName == null ? '' : encodeURIComponent(detectorName)) + '/execute&startTime=' + startTime?.toISOString() + '&endTime=' + endTime?.toISOString() + '&timeGrain=' + (timeGrain == null ? '' : encodeURIComponent(timeGrain)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

}

