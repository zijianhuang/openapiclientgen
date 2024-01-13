import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The common properties of the export. */
	export interface CommonExportProperties {

		/**
		 * The definition of a query.
		 * Required
		 */
		definition: QueryDefinition;

		/**
		 * The delivery information associated with a export.
		 * Required
		 */
		deliveryInfo: ExportDeliveryInfo;

		/** The format of the export being delivered. */
		format?: CommonExportPropertiesFormat | null;
	}

	/** The common properties of the export. */
	export interface CommonExportPropertiesFormProperties {

		/** The format of the export being delivered. */
		format: FormControl<CommonExportPropertiesFormat | null | undefined>,
	}
	export function CreateCommonExportPropertiesFormGroup() {
		return new FormGroup<CommonExportPropertiesFormProperties>({
			format: new FormControl<CommonExportPropertiesFormat | null | undefined>(undefined),
		});

	}

	export enum CommonExportPropertiesFormat { Csv = 0 }

	export interface Dimension {
		properties?: DimensionProperties;
	}
	export interface DimensionFormProperties {
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
		});

	}

	export interface DimensionProperties {

		/** Dimension category. */
		category?: string | null;
		data?: Array<string>;

		/** Dimension description. */
		description?: string | null;

		/** Filter enabled. */
		filterEnabled?: boolean | null;

		/** Grouping enabled. */
		groupingEnabled?: boolean | null;

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** Total number of data for the dimension. */
		total?: number | null;

		/** Usage end. */
		usageEnd?: Date | null;

		/** Usage start. */
		usageStart?: Date | null;
	}
	export interface DimensionPropertiesFormProperties {

		/** Dimension category. */
		category: FormControl<string | null | undefined>,

		/** Dimension description. */
		description: FormControl<string | null | undefined>,

		/** Filter enabled. */
		filterEnabled: FormControl<boolean | null | undefined>,

		/** Grouping enabled. */
		groupingEnabled: FormControl<boolean | null | undefined>,

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,

		/** Total number of data for the dimension. */
		total: FormControl<number | null | undefined>,

		/** Usage end. */
		usageEnd: FormControl<Date | null | undefined>,

		/** Usage start. */
		usageStart: FormControl<Date | null | undefined>,
	}
	export function CreateDimensionPropertiesFormGroup() {
		return new FormGroup<DimensionPropertiesFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			filterEnabled: new FormControl<boolean | null | undefined>(undefined),
			groupingEnabled: new FormControl<boolean | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			usageEnd: new FormControl<Date | null | undefined>(undefined),
			usageStart: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Result of listing dimensions. It contains a list of available dimensions. */
	export interface DimensionsListResult {

		/** The list of dimensions. */
		value?: Array<Dimension>;
	}

	/** Result of listing dimensions. It contains a list of available dimensions. */
	export interface DimensionsListResultFormProperties {
	}
	export function CreateDimensionsListResultFormGroup() {
		return new FormGroup<DimensionsListResultFormProperties>({
		});

	}


	/** The details of the error. */
	export interface ErrorDetails {

		/** Error code. */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** The details of the error. */
	export interface ErrorDetailsFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponse {

		/** The details of the error. */
		error?: ErrorDetails;
	}

	/** Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** A export resource. */
	export interface Export {

		/** The properties of the export. */
		properties?: ExportProperties;
	}

	/** A export resource. */
	export interface ExportFormProperties {
	}
	export function CreateExportFormGroup() {
		return new FormGroup<ExportFormProperties>({
		});

	}


	/** The properties of the export. */
	export interface ExportProperties {

		/** The schedule associated with a export. */
		schedule?: ExportSchedule;
	}

	/** The properties of the export. */
	export interface ExportPropertiesFormProperties {
	}
	export function CreateExportPropertiesFormGroup() {
		return new FormGroup<ExportPropertiesFormProperties>({
		});

	}


	/** The destination information for the delivery of the export. To allow access to a storage account, you must register the account's subscription with the Microsoft.CostManagementExports resource provider. This is required once per subscription. When creating an export in the Azure portal, it is done automatically, however API users need to register the subscription. For more information see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-supported-services . */
	export interface ExportDeliveryDestination {

		/**
		 * The name of the container where exports will be uploaded.
		 * Required
		 */
		container: string;

		/**
		 * The resource id of the storage account where exports will be delivered.
		 * Required
		 */
		resourceId: string;

		/** The name of the directory where exports will be uploaded. */
		rootFolderPath?: string | null;
	}

	/** The destination information for the delivery of the export. To allow access to a storage account, you must register the account's subscription with the Microsoft.CostManagementExports resource provider. This is required once per subscription. When creating an export in the Azure portal, it is done automatically, however API users need to register the subscription. For more information see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-supported-services . */
	export interface ExportDeliveryDestinationFormProperties {

		/**
		 * The name of the container where exports will be uploaded.
		 * Required
		 */
		container: FormControl<string | null | undefined>,

		/**
		 * The resource id of the storage account where exports will be delivered.
		 * Required
		 */
		resourceId: FormControl<string | null | undefined>,

		/** The name of the directory where exports will be uploaded. */
		rootFolderPath: FormControl<string | null | undefined>,
	}
	export function CreateExportDeliveryDestinationFormGroup() {
		return new FormGroup<ExportDeliveryDestinationFormProperties>({
			container: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rootFolderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The delivery information associated with a export. */
	export interface ExportDeliveryInfo {

		/**
		 * The destination information for the delivery of the export. To allow access to a storage account, you must register the account's subscription with the Microsoft.CostManagementExports resource provider. This is required once per subscription. When creating an export in the Azure portal, it is done automatically, however API users need to register the subscription. For more information see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-supported-services .
		 * Required
		 */
		destination: ExportDeliveryDestination;
	}

	/** The delivery information associated with a export. */
	export interface ExportDeliveryInfoFormProperties {
	}
	export function CreateExportDeliveryInfoFormGroup() {
		return new FormGroup<ExportDeliveryInfoFormProperties>({
		});

	}


	/** A export execution. */
	export interface ExportExecution {

		/** The properties of the export execution. */
		properties?: ExportExecutionProperties;
	}

	/** A export execution. */
	export interface ExportExecutionFormProperties {
	}
	export function CreateExportExecutionFormGroup() {
		return new FormGroup<ExportExecutionFormProperties>({
		});

	}


	/** Result of listing exports execution history of a export by name */
	export interface ExportExecutionListResult {

		/** The list of export executions. */
		value?: Array<ExportExecution>;
	}

	/** Result of listing exports execution history of a export by name */
	export interface ExportExecutionListResultFormProperties {
	}
	export function CreateExportExecutionListResultFormGroup() {
		return new FormGroup<ExportExecutionListResultFormProperties>({
		});

	}


	/** The properties of the export execution. */
	export interface ExportExecutionProperties {

		/** The type of the export execution. */
		executionType?: ExportExecutionPropertiesExecutionType | null;

		/** The name of the file export got written to. */
		fileName?: string | null;

		/** The time when export execution finished. */
		processingEndTime?: Date | null;

		/** The time when export was picked up to be executed. */
		processingStartTime?: Date | null;

		/** The common properties of the export. */
		runSettings?: CommonExportProperties;

		/** The status of the export execution. */
		status?: ExportExecutionPropertiesStatus | null;

		/** The identifier for the entity that executed the export. For OnDemand executions, it is the email id. For Scheduled executions, it is the constant value - System. */
		submittedBy?: string | null;

		/** The time when export was queued to be executed. */
		submittedTime?: Date | null;
	}

	/** The properties of the export execution. */
	export interface ExportExecutionPropertiesFormProperties {

		/** The type of the export execution. */
		executionType: FormControl<ExportExecutionPropertiesExecutionType | null | undefined>,

		/** The name of the file export got written to. */
		fileName: FormControl<string | null | undefined>,

		/** The time when export execution finished. */
		processingEndTime: FormControl<Date | null | undefined>,

		/** The time when export was picked up to be executed. */
		processingStartTime: FormControl<Date | null | undefined>,

		/** The status of the export execution. */
		status: FormControl<ExportExecutionPropertiesStatus | null | undefined>,

		/** The identifier for the entity that executed the export. For OnDemand executions, it is the email id. For Scheduled executions, it is the constant value - System. */
		submittedBy: FormControl<string | null | undefined>,

		/** The time when export was queued to be executed. */
		submittedTime: FormControl<Date | null | undefined>,
	}
	export function CreateExportExecutionPropertiesFormGroup() {
		return new FormGroup<ExportExecutionPropertiesFormProperties>({
			executionType: new FormControl<ExportExecutionPropertiesExecutionType | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			processingEndTime: new FormControl<Date | null | undefined>(undefined),
			processingStartTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ExportExecutionPropertiesStatus | null | undefined>(undefined),
			submittedBy: new FormControl<string | null | undefined>(undefined),
			submittedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ExportExecutionPropertiesExecutionType { OnDemand = 0, Scheduled = 1 }

	export enum ExportExecutionPropertiesStatus { Queued = 0, InProgress = 1, Completed = 2, Failed = 3, Timeout = 4, NewDataNotAvailable = 5, DataNotAvailable = 6 }


	/** Result of listing exports. It contains a list of available exports in the scope provided. */
	export interface ExportListResult {

		/** The list of exports. */
		value?: Array<Export>;
	}

	/** Result of listing exports. It contains a list of available exports in the scope provided. */
	export interface ExportListResultFormProperties {
	}
	export function CreateExportListResultFormGroup() {
		return new FormGroup<ExportListResultFormProperties>({
		});

	}


	/** The start and end date for recurrence schedule. */
	export interface ExportRecurrencePeriod {

		/**
		 * The start date of recurrence.
		 * Required
		 */
		from: Date;

		/** The end date of recurrence. */
		to?: Date | null;
	}

	/** The start and end date for recurrence schedule. */
	export interface ExportRecurrencePeriodFormProperties {

		/**
		 * The start date of recurrence.
		 * Required
		 */
		from: FormControl<Date | null | undefined>,

		/** The end date of recurrence. */
		to: FormControl<Date | null | undefined>,
	}
	export function CreateExportRecurrencePeriodFormGroup() {
		return new FormGroup<ExportRecurrencePeriodFormProperties>({
			from: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The schedule associated with a export. */
	export interface ExportSchedule {

		/**
		 * The schedule recurrence.
		 * Required
		 */
		recurrence: ExportScheduleRecurrence;

		/** The start and end date for recurrence schedule. */
		recurrencePeriod?: ExportRecurrencePeriod;

		/** The status of the schedule. Whether active or not. If inactive, the export's scheduled execution is paused. */
		status?: ExportScheduleStatus | null;
	}

	/** The schedule associated with a export. */
	export interface ExportScheduleFormProperties {

		/**
		 * The schedule recurrence.
		 * Required
		 */
		recurrence: FormControl<ExportScheduleRecurrence | null | undefined>,

		/** The status of the schedule. Whether active or not. If inactive, the export's scheduled execution is paused. */
		status: FormControl<ExportScheduleStatus | null | undefined>,
	}
	export function CreateExportScheduleFormGroup() {
		return new FormGroup<ExportScheduleFormProperties>({
			recurrence: new FormControl<ExportScheduleRecurrence | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ExportScheduleStatus | null | undefined>(undefined),
		});

	}

	export enum ExportScheduleRecurrence { Daily = 0, Weekly = 1, Monthly = 2, Annually = 3 }

	export enum ExportScheduleStatus { Active = 0, Inactive = 1 }


	/** A Cost management REST API operation. */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;
	}

	/** A Cost management REST API operation. */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of listing cost management operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of cost management operations supported by the Microsoft.CostManagement resource provider. */
		value?: Array<Operation>;
	}

	/** Result of listing cost management operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The aggregation expression to be used in the query. */
	export interface QueryAggregation {

		/**
		 * The name of the aggregation function to use.
		 * Required
		 */
		function: QueryAggregationFunction;

		/**
		 * The name of the column to aggregate.
		 * Required
		 */
		name: string;
	}

	/** The aggregation expression to be used in the query. */
	export interface QueryAggregationFormProperties {

		/**
		 * The name of the aggregation function to use.
		 * Required
		 */
		function: FormControl<QueryAggregationFunction | null | undefined>,

		/**
		 * The name of the column to aggregate.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateQueryAggregationFormGroup() {
		return new FormGroup<QueryAggregationFormProperties>({
			function: new FormControl<QueryAggregationFunction | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum QueryAggregationFunction { Sum = 0 }

	export interface QueryColumn {

		/** The name of column. */
		name?: string | null;

		/** The type of column. */
		type?: string | null;
	}
	export interface QueryColumnFormProperties {

		/** The name of column. */
		name: FormControl<string | null | undefined>,

		/** The type of column. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryColumnFormGroup() {
		return new FormGroup<QueryColumnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type of the column in the export. */
	export enum QueryColumnType { Tag = 0, Dimension = 1 }


	/** The comparison expression to be used in the query. */
	export interface QueryComparisonExpression {

		/**
		 * The name of the column to use in comparison.
		 * Required
		 */
		name: string;

		/**
		 * The operator to use for comparison.
		 * Required
		 */
		operator: QueryComparisonExpressionOperator;

		/**
		 * Array of values to use for comparison
		 * Required
		 * Minimum items: 1
		 */
		values: Array<string>;
	}

	/** The comparison expression to be used in the query. */
	export interface QueryComparisonExpressionFormProperties {

		/**
		 * The name of the column to use in comparison.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The operator to use for comparison.
		 * Required
		 */
		operator: FormControl<QueryComparisonExpressionOperator | null | undefined>,
	}
	export function CreateQueryComparisonExpressionFormGroup() {
		return new FormGroup<QueryComparisonExpressionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<QueryComparisonExpressionOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum QueryComparisonExpressionOperator { In = 0 }


	/** The definition of data present in the query. */
	export interface QueryDataset {

		/**
		 * Dictionary of aggregation expression to use in the query. The key of each item in the dictionary is the alias for the aggregated column. Query can have up to 2 aggregation clauses.
		 * Maximum items: 2
		 */
		aggregation?: {[id: string]: QueryAggregation };

		/** The configuration of dataset in the query. */
		configuration?: QueryDatasetConfiguration;

		/** The filter expression to be used in the export. */
		filter?: QueryFilter;

		/** The granularity of rows in the query. */
		granularity?: QueryDatasetGranularity | null;

		/**
		 * Array of group by expression to use in the query. Query can have up to 2 group by clauses.
		 * Maximum items: 2
		 */
		grouping?: Array<QueryGrouping>;
	}

	/** The definition of data present in the query. */
	export interface QueryDatasetFormProperties {

		/**
		 * Dictionary of aggregation expression to use in the query. The key of each item in the dictionary is the alias for the aggregated column. Query can have up to 2 aggregation clauses.
		 * Maximum items: 2
		 */
		aggregation: FormControl<{[id: string]: QueryAggregation } | null | undefined>,

		/** The granularity of rows in the query. */
		granularity: FormControl<QueryDatasetGranularity | null | undefined>,
	}
	export function CreateQueryDatasetFormGroup() {
		return new FormGroup<QueryDatasetFormProperties>({
			aggregation: new FormControl<{[id: string]: QueryAggregation } | null | undefined>(undefined, [Validators.maxLength(2)]),
			granularity: new FormControl<QueryDatasetGranularity | null | undefined>(undefined),
		});

	}

	export enum QueryDatasetGranularity { Daily = 0 }


	/** The group by expression to be used in the query. */
	export interface QueryGrouping {

		/**
		 * The name of the column to group.
		 * Required
		 */
		name: string;

		/**
		 * The type of the column in the export.
		 * Required
		 */
		type: QueryColumnType;
	}

	/** The group by expression to be used in the query. */
	export interface QueryGroupingFormProperties {

		/**
		 * The name of the column to group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of the column in the export.
		 * Required
		 */
		type: FormControl<QueryColumnType | null | undefined>,
	}
	export function CreateQueryGroupingFormGroup() {
		return new FormGroup<QueryGroupingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<QueryColumnType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration of dataset in the query. */
	export interface QueryDatasetConfiguration {

		/** Array of column names to be included in the query. Any valid query column name is allowed. If not provided, then query includes all columns. */
		columns?: Array<string>;
	}

	/** The configuration of dataset in the query. */
	export interface QueryDatasetConfigurationFormProperties {
	}
	export function CreateQueryDatasetConfigurationFormGroup() {
		return new FormGroup<QueryDatasetConfigurationFormProperties>({
		});

	}


	/** The definition of a query. */
	export interface QueryDefinition {

		/** The definition of data present in the query. */
		dataset?: QueryDataset;

		/** The start and end date for pulling data for the query. */
		timePeriod?: QueryTimePeriod;

		/**
		 * The time frame for pulling data for the query. If custom, then a specific time period must be provided.
		 * Required
		 */
		timeframe: QueryDefinitionTimeframe;

		/**
		 * The type of the query.
		 * Required
		 */
		type: QueryDefinitionType;
	}

	/** The definition of a query. */
	export interface QueryDefinitionFormProperties {

		/**
		 * The time frame for pulling data for the query. If custom, then a specific time period must be provided.
		 * Required
		 */
		timeframe: FormControl<QueryDefinitionTimeframe | null | undefined>,

		/**
		 * The type of the query.
		 * Required
		 */
		type: FormControl<QueryDefinitionType | null | undefined>,
	}
	export function CreateQueryDefinitionFormGroup() {
		return new FormGroup<QueryDefinitionFormProperties>({
			timeframe: new FormControl<QueryDefinitionTimeframe | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<QueryDefinitionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum QueryDefinitionTimeframe { MonthToDate = 0, BillingMonthToDate = 1, TheLastMonth = 2, TheLastBillingMonth = 3, WeekToDate = 4, Custom = 5 }

	export enum QueryDefinitionType { Usage = 0, ActualCost = 1, AmortizedCost = 2 }


	/** The filter expression to be used in the export. */
	export interface QueryFilter {

		/**
		 * The logical "AND" expression. Must have at least 2 items.
		 * Minimum items: 2
		 */
		and?: Array<QueryFilter>;

		/** The comparison expression to be used in the query. */
		dimension?: QueryComparisonExpression;

		/** The filter expression to be used in the export. */
		not?: QueryFilter;

		/**
		 * The logical "OR" expression. Must have at least 2 items.
		 * Minimum items: 2
		 */
		or?: Array<QueryFilter>;

		/** The comparison expression to be used in the query. */
		tag?: QueryComparisonExpression;
	}

	/** The filter expression to be used in the export. */
	export interface QueryFilterFormProperties {
	}
	export function CreateQueryFilterFormGroup() {
		return new FormGroup<QueryFilterFormProperties>({
		});

	}

	export interface QueryProperties {

		/** Array of columns */
		columns?: Array<QueryColumn>;

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** Array of rows */
		rows?: Array<string>;
	}
	export interface QueryPropertiesFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateQueryPropertiesFormGroup() {
		return new FormGroup<QueryPropertiesFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of query. It contains all columns listed under groupings and aggregation. */
	export interface QueryResult {
		properties?: QueryProperties;
	}

	/** Result of query. It contains all columns listed under groupings and aggregation. */
	export interface QueryResultFormProperties {
	}
	export function CreateQueryResultFormGroup() {
		return new FormGroup<QueryResultFormProperties>({
		});

	}


	/** The start and end date for pulling data for the query. */
	export interface QueryTimePeriod {

		/**
		 * The start date to pull data from.
		 * Required
		 */
		from: Date;

		/**
		 * The end date to pull data to.
		 * Required
		 */
		to: Date;
	}

	/** The start and end date for pulling data for the query. */
	export interface QueryTimePeriodFormProperties {

		/**
		 * The start date to pull data from.
		 * Required
		 */
		from: FormControl<Date | null | undefined>,

		/**
		 * The end date to pull data to.
		 * Required
		 */
		to: FormControl<Date | null | undefined>,
	}
	export function CreateQueryTimePeriodFormGroup() {
		return new FormGroup<QueryTimePeriodFormProperties>({
			from: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Resource model definition. */
	export interface Resource {

		/** Resource Id. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource tags. */
		tags?: {[id: string]: string };

		/** Resource type. */
		type?: string | null;
	}

	/** The Resource model definition. */
	export interface ResourceFormProperties {

		/** Resource Id. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available cost management REST API operations.
		 * Get providers/Microsoft.CostManagement/operations
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-11-01.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.CostManagement/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the dimensions by the defined scope.
		 * Get {scope}/providers/Microsoft.CostManagement/dimensions
		 * @param {string} scope The scope associated with dimension operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, and 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-11-01.
		 * @param {string} filter May be used to filter dimensions by properties/category, properties/usageStart, properties/usageEnd. Supported operators are 'eq','lt', 'gt', 'le', 'ge'.
		 * @param {string} expand May be used to expand the properties/data within a dimension category. By default, data is not included when listing dimensions.
		 * @param {string} skiptoken Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
		 * @param {number} top May be used to limit the number of results to the most recent N dimension data.
		 * @return {DimensionsListResult} OK. The request has succeeded.
		 */
		Dimensions_List(scope: string, api_version: string, filter: string | null | undefined, expand: string | null | undefined, skiptoken: string | null | undefined, top: number | null | undefined): Observable<DimensionsListResult> {
			return this.http.get<DimensionsListResult>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.CostManagement/dimensions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)) + '&top=' + top + '', {});
		}

		/**
		 * The operation to list all exports at the given scope.
		 * Get {scope}/providers/Microsoft.CostManagement/exports
		 * @param {string} scope The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-11-01.
		 * @return {ExportListResult} OK. The request has succeeded.
		 */
		Exports_List(scope: string, api_version: string): Observable<ExportListResult> {
			return this.http.get<ExportListResult>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.CostManagement/exports&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * The operation to get the export for the defined scope by export name.
		 * Get {scope}/providers/Microsoft.CostManagement/exports/{exportName}
		 * @param {string} scope The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-11-01.
		 * @param {string} exportName Export Name.
		 * @return {Export} OK. The request has succeeded.
		 */
		Exports_Get(scope: string, api_version: string, exportName: string): Observable<Export> {
			return this.http.get<Export>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.CostManagement/exports/' + (exportName == null ? '' : encodeURIComponent(exportName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * The operation to create or update a export. Update operation requires latest eTag to be set in the request. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.
		 * Put {scope}/providers/Microsoft.CostManagement/exports/{exportName}
		 * @param {string} scope The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-11-01.
		 * @param {string} exportName Export Name.
		 * @param {Export} requestBody Parameters supplied to the CreateOrUpdate Export operation.
		 * @return {Export} OK. The request has succeeded.
		 */
		Exports_CreateOrUpdate(scope: string, api_version: string, exportName: string, requestBody: Export): Observable<Export> {
			return this.http.put<Export>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.CostManagement/exports/' + (exportName == null ? '' : encodeURIComponent(exportName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The operation to delete a export.
		 * Delete {scope}/providers/Microsoft.CostManagement/exports/{exportName}
		 * @param {string} scope The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-11-01.
		 * @param {string} exportName Export Name.
		 * @return {void} OK. The request has succeeded.
		 */
		Exports_Delete(scope: string, api_version: string, exportName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.CostManagement/exports/' + (exportName == null ? '' : encodeURIComponent(exportName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to execute a export.
		 * Post {scope}/providers/Microsoft.CostManagement/exports/{exportName}/run
		 * @param {string} scope The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-11-01.
		 * @param {string} exportName Export Name.
		 * @return {void} OK. The request has succeeded.
		 */
		Exports_Execute(scope: string, api_version: string, exportName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.CostManagement/exports/' + (exportName == null ? '' : encodeURIComponent(exportName)) + '/run&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * The operation to get the execution history of an export for the defined scope by export name.
		 * Get {scope}/providers/Microsoft.CostManagement/exports/{exportName}/runHistory
		 * @param {string} scope The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-11-01.
		 * @param {string} exportName Export Name.
		 * @return {ExportExecutionListResult} OK. The request has succeeded.
		 */
		Exports_GetExecutionHistory(scope: string, api_version: string, exportName: string): Observable<ExportExecutionListResult> {
			return this.http.get<ExportExecutionListResult>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.CostManagement/exports/' + (exportName == null ? '' : encodeURIComponent(exportName)) + '/runHistory&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Query the usage data for scope defined.
		 * Post {scope}/providers/Microsoft.CostManagement/query
		 * @param {string} scope The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-11-01.
		 * @param {QueryDefinition} requestBody Parameters supplied to the CreateOrUpdate Query Config operation.
		 * @return {QueryResult} OK. The request has succeeded.
		 */
		Query_Usage(scope: string, api_version: string, requestBody: QueryDefinition): Observable<QueryResult> {
			return this.http.post<QueryResult>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.CostManagement/query&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

