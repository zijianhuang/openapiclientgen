import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ActivateAnomalyDetectorResponse {
	}
	export interface ActivateAnomalyDetectorResponseFormProperties {
	}
	export function CreateActivateAnomalyDetectorResponseFormGroup() {
		return new FormGroup<ActivateAnomalyDetectorResponseFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface BackTestAnomalyDetectorResponse {
	}
	export interface BackTestAnomalyDetectorResponseFormProperties {
	}
	export function CreateBackTestAnomalyDetectorResponseFormGroup() {
		return new FormGroup<BackTestAnomalyDetectorResponseFormProperties>({
		});

	}

	export interface CreateAlertResponse {
		AlertArn?: string;
	}
	export interface CreateAlertResponseFormProperties {
		AlertArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAlertResponseFormGroup() {
		return new FormGroup<CreateAlertResponseFormProperties>({
			AlertArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic. */
	export interface SNSConfiguration {

		/** Required */
		RoleArn: string;

		/** Required */
		SnsTopicArn: string;
		SnsFormat?: SnsFormat;
	}

	/** Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic. */
	export interface SNSConfigurationFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		SnsTopicArn: FormControl<string | null | undefined>,
		SnsFormat: FormControl<SnsFormat | null | undefined>,
	}
	export function CreateSNSConfigurationFormGroup() {
		return new FormGroup<SNSConfigurationFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnsFormat: new FormControl<SnsFormat | null | undefined>(undefined),
		});

	}

	export enum SnsFormat { LONG_TEXT = 0, SHORT_TEXT = 1, JSON = 2 }


	/** Contains information about a Lambda configuration. */
	export interface LambdaConfiguration {

		/** Required */
		RoleArn: string;

		/** Required */
		LambdaArn: string;
	}

	/** Contains information about a Lambda configuration. */
	export interface LambdaConfigurationFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		LambdaArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaConfigurationFormGroup() {
		return new FormGroup<LambdaConfigurationFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LambdaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The dimension filter, containing DimensionName and DimensionValueList. */
	export interface DimensionFilter {
		DimensionName?: string;
		DimensionValueList?: Array<string>;
	}

	/** The dimension filter, containing DimensionName and DimensionValueList. */
	export interface DimensionFilterFormProperties {
		DimensionName: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFilterFormGroup() {
		return new FormGroup<DimensionFilterFormProperties>({
			DimensionName: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateAnomalyDetectorResponse {
		AnomalyDetectorArn?: string;
	}
	export interface CreateAnomalyDetectorResponseFormProperties {
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAnomalyDetectorResponseFormGroup() {
		return new FormGroup<CreateAnomalyDetectorResponseFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Frequency { P1D = 0, PT1H = 1, PT10M = 2, PT5M = 3 }

	export interface CreateMetricSetResponse {
		MetricSetArn?: string;
	}
	export interface CreateMetricSetResponseFormProperties {
		MetricSetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMetricSetResponseFormGroup() {
		return new FormGroup<CreateMetricSetResponseFormProperties>({
			MetricSetArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A calculation made by contrasting a measure and a dimension from your source data. */
	export interface Metric {

		/** Required */
		MetricName: string;

		/** Required */
		AggregationFunction: AggregationFunction;
		Namespace?: string;
	}

	/** A calculation made by contrasting a measure and a dimension from your source data. */
	export interface MetricFormProperties {

		/** Required */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		AggregationFunction: FormControl<AggregationFunction | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AggregationFunction: new FormControl<AggregationFunction | null | undefined>(undefined, [Validators.required]),
			Namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AggregationFunction { AVG = 0, SUM = 1 }


	/** Contains information about the configuration of the S3 bucket that contains source files. */
	export interface S3SourceConfig {
		RoleArn?: string;
		TemplatedPathList?: Array<string>;
		HistoricalDataPathList?: Array<string>;
		FileFormatDescriptor?: FileFormatDescriptor;
	}

	/** Contains information about the configuration of the S3 bucket that contains source files. */
	export interface S3SourceConfigFormProperties {
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateS3SourceConfigFormGroup() {
		return new FormGroup<S3SourceConfigFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a source file's formatting. */
	export interface FileFormatDescriptor {
		CsvFormatDescriptor?: CsvFormatDescriptor;
		JsonFormatDescriptor?: JsonFormatDescriptor;
	}

	/** Contains information about a source file's formatting. */
	export interface FileFormatDescriptorFormProperties {
	}
	export function CreateFileFormatDescriptorFormGroup() {
		return new FormGroup<FileFormatDescriptorFormProperties>({
		});

	}


	/** Contains information about how a source CSV data file should be analyzed. */
	export interface CsvFormatDescriptor {
		FileCompression?: CSVFileCompression;
		Charset?: string;
		ContainsHeader?: boolean | null;
		Delimiter?: string;
		HeaderList?: Array<string>;
		QuoteSymbol?: string;
	}

	/** Contains information about how a source CSV data file should be analyzed. */
	export interface CsvFormatDescriptorFormProperties {
		FileCompression: FormControl<CSVFileCompression | null | undefined>,
		Charset: FormControl<string | null | undefined>,
		ContainsHeader: FormControl<boolean | null | undefined>,
		Delimiter: FormControl<string | null | undefined>,
		QuoteSymbol: FormControl<string | null | undefined>,
	}
	export function CreateCsvFormatDescriptorFormGroup() {
		return new FormGroup<CsvFormatDescriptorFormProperties>({
			FileCompression: new FormControl<CSVFileCompression | null | undefined>(undefined),
			Charset: new FormControl<string | null | undefined>(undefined),
			ContainsHeader: new FormControl<boolean | null | undefined>(undefined),
			Delimiter: new FormControl<string | null | undefined>(undefined),
			QuoteSymbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CSVFileCompression { NONE = 0, GZIP = 1 }


	/** Contains information about how a source JSON data file should be analyzed. */
	export interface JsonFormatDescriptor {
		FileCompression?: CSVFileCompression;
		Charset?: string;
	}

	/** Contains information about how a source JSON data file should be analyzed. */
	export interface JsonFormatDescriptorFormProperties {
		FileCompression: FormControl<CSVFileCompression | null | undefined>,
		Charset: FormControl<string | null | undefined>,
	}
	export function CreateJsonFormatDescriptorFormGroup() {
		return new FormGroup<JsonFormatDescriptorFormProperties>({
			FileCompression: new FormControl<CSVFileCompression | null | undefined>(undefined),
			Charset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an Amazon AppFlow flow datasource. */
	export interface AppFlowConfig {
		RoleArn?: string;
		FlowName?: string;
	}

	/** Details about an Amazon AppFlow flow datasource. */
	export interface AppFlowConfigFormProperties {
		RoleArn: FormControl<string | null | undefined>,
		FlowName: FormControl<string | null | undefined>,
	}
	export function CreateAppFlowConfigFormGroup() {
		return new FormGroup<AppFlowConfigFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
			FlowName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an Amazon CloudWatch datasource. */
	export interface CloudWatchConfig {
		RoleArn?: string;
		BackTestConfiguration?: BackTestConfiguration;
	}

	/** Details about an Amazon CloudWatch datasource. */
	export interface CloudWatchConfigFormProperties {
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchConfigFormGroup() {
		return new FormGroup<CloudWatchConfigFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for backtest mode. */
	export interface BackTestConfiguration {

		/** Required */
		RunBackTestMode: boolean;
	}

	/** Settings for backtest mode. */
	export interface BackTestConfigurationFormProperties {

		/** Required */
		RunBackTestMode: FormControl<boolean | null | undefined>,
	}
	export function CreateBackTestConfigurationFormGroup() {
		return new FormGroup<BackTestConfigurationFormProperties>({
			RunBackTestMode: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the Amazon Relational Database Service (RDS) configuration. */
	export interface RDSSourceConfig {
		DBInstanceIdentifier?: string;
		DatabaseHost?: string;
		DatabasePort?: number | null;
		SecretManagerArn?: string;
		DatabaseName?: string;
		TableName?: string;
		RoleArn?: string;
		VpcConfiguration?: VpcConfiguration;
	}

	/** Contains information about the Amazon Relational Database Service (RDS) configuration. */
	export interface RDSSourceConfigFormProperties {
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		DatabaseHost: FormControl<string | null | undefined>,
		DatabasePort: FormControl<number | null | undefined>,
		SecretManagerArn: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateRDSSourceConfigFormGroup() {
		return new FormGroup<RDSSourceConfigFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			DatabaseHost: new FormControl<string | null | undefined>(undefined),
			DatabasePort: new FormControl<number | null | undefined>(undefined),
			SecretManagerArn: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains configuration information about the Amazon Virtual Private Cloud (VPC). */
	export interface VpcConfiguration {

		/** Required */
		SubnetIdList: Array<string>;

		/** Required */
		SecurityGroupIdList: Array<string>;
	}

	/** Contains configuration information about the Amazon Virtual Private Cloud (VPC). */
	export interface VpcConfigurationFormProperties {
	}
	export function CreateVpcConfigurationFormGroup() {
		return new FormGroup<VpcConfigurationFormProperties>({
		});

	}


	/** Provides information about the Amazon Redshift database configuration. */
	export interface RedshiftSourceConfig {
		ClusterIdentifier?: string;
		DatabaseHost?: string;
		DatabasePort?: number | null;
		SecretManagerArn?: string;
		DatabaseName?: string;
		TableName?: string;
		RoleArn?: string;
		VpcConfiguration?: VpcConfiguration;
	}

	/** Provides information about the Amazon Redshift database configuration. */
	export interface RedshiftSourceConfigFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		DatabaseHost: FormControl<string | null | undefined>,
		DatabasePort: FormControl<number | null | undefined>,
		SecretManagerArn: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftSourceConfigFormGroup() {
		return new FormGroup<RedshiftSourceConfigFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			DatabaseHost: new FormControl<string | null | undefined>(undefined),
			DatabasePort: new FormControl<number | null | undefined>(undefined),
			SecretManagerArn: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an Amazon Athena datasource. */
	export interface AthenaSourceConfig {
		RoleArn?: string;
		DatabaseName?: string;
		DataCatalog?: string;
		TableName?: string;
		WorkGroupName?: string;
		S3ResultsPath?: string;
		BackTestConfiguration?: BackTestConfiguration;
	}

	/** Details about an Amazon Athena datasource. */
	export interface AthenaSourceConfigFormProperties {
		RoleArn: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		DataCatalog: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		WorkGroupName: FormControl<string | null | undefined>,
		S3ResultsPath: FormControl<string | null | undefined>,
	}
	export function CreateAthenaSourceConfigFormGroup() {
		return new FormGroup<AthenaSourceConfigFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			DataCatalog: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			WorkGroupName: new FormControl<string | null | undefined>(undefined),
			S3ResultsPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a list of filters for choosing a subset of dimension values. Each filter consists of the dimension and one of its values that you want to include. When multiple dimensions or values are specified, the dimensions are joined with an AND operation and the values are joined with an OR operation.  */
	export interface MetricSetDimensionFilter {
		Name?: string;
		FilterList?: Array<Filter>;
	}

	/** Describes a list of filters for choosing a subset of dimension values. Each filter consists of the dimension and one of its values that you want to include. When multiple dimensions or values are specified, the dimensions are joined with an AND operation and the values are joined with an OR operation.  */
	export interface MetricSetDimensionFilterFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateMetricSetDimensionFilterFormGroup() {
		return new FormGroup<MetricSetDimensionFilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a filter for choosing a subset of dimension values. Each filter consists of the dimension that you want to include and the condition statement. The condition statement is specified in the <code>FilterOperation</code> object. */
	export interface Filter {
		DimensionValue?: string;
		FilterOperation?: FilterOperation;
	}

	/** Describes a filter for choosing a subset of dimension values. Each filter consists of the dimension that you want to include and the condition statement. The condition statement is specified in the <code>FilterOperation</code> object. */
	export interface FilterFormProperties {
		DimensionValue: FormControl<string | null | undefined>,
		FilterOperation: FormControl<FilterOperation | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			DimensionValue: new FormControl<string | null | undefined>(undefined),
			FilterOperation: new FormControl<FilterOperation | null | undefined>(undefined),
		});

	}

	export enum FilterOperation { EQUALS = 0 }

	export interface DeactivateAnomalyDetectorResponse {
	}
	export interface DeactivateAnomalyDetectorResponseFormProperties {
	}
	export function CreateDeactivateAnomalyDetectorResponseFormGroup() {
		return new FormGroup<DeactivateAnomalyDetectorResponseFormProperties>({
		});

	}

	export interface DeleteAlertResponse {
	}
	export interface DeleteAlertResponseFormProperties {
	}
	export function CreateDeleteAlertResponseFormGroup() {
		return new FormGroup<DeleteAlertResponseFormProperties>({
		});

	}

	export interface DeleteAnomalyDetectorResponse {
	}
	export interface DeleteAnomalyDetectorResponseFormProperties {
	}
	export function CreateDeleteAnomalyDetectorResponseFormGroup() {
		return new FormGroup<DeleteAnomalyDetectorResponseFormProperties>({
		});

	}

	export interface DescribeAlertResponse {
		Alert?: Alert;
	}
	export interface DescribeAlertResponseFormProperties {
	}
	export function CreateDescribeAlertResponseFormGroup() {
		return new FormGroup<DescribeAlertResponseFormProperties>({
		});

	}


	/** A configuration for Amazon SNS-integrated notifications. */
	export interface Alert {
		Action?: Action;
		AlertDescription?: string;
		AlertArn?: string;
		AnomalyDetectorArn?: string;
		AlertName?: string;
		AlertSensitivityThreshold?: number | null;
		AlertType?: AlertType;
		AlertStatus?: AlertStatus;
		LastModificationTime?: Date;
		CreationTime?: Date;
		AlertFilters?: AlertFilters;
	}

	/** A configuration for Amazon SNS-integrated notifications. */
	export interface AlertFormProperties {
		AlertDescription: FormControl<string | null | undefined>,
		AlertArn: FormControl<string | null | undefined>,
		AnomalyDetectorArn: FormControl<string | null | undefined>,
		AlertName: FormControl<string | null | undefined>,
		AlertSensitivityThreshold: FormControl<number | null | undefined>,
		AlertType: FormControl<AlertType | null | undefined>,
		AlertStatus: FormControl<AlertStatus | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateAlertFormGroup() {
		return new FormGroup<AlertFormProperties>({
			AlertDescription: new FormControl<string | null | undefined>(undefined),
			AlertArn: new FormControl<string | null | undefined>(undefined),
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined),
			AlertName: new FormControl<string | null | undefined>(undefined),
			AlertSensitivityThreshold: new FormControl<number | null | undefined>(undefined),
			AlertType: new FormControl<AlertType | null | undefined>(undefined),
			AlertStatus: new FormControl<AlertStatus | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A configuration that specifies the action to perform when anomalies are detected. */
	export interface Action {
		SNSConfiguration?: SNSConfiguration;
		LambdaConfiguration?: LambdaConfiguration;
	}

	/** A configuration that specifies the action to perform when anomalies are detected. */
	export interface ActionFormProperties {
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
		});

	}

	export enum AlertType { SNS = 0, LAMBDA = 1 }

	export enum AlertStatus { ACTIVE = 0, INACTIVE = 1 }


	/** The configuration of the alert filters. */
	export interface AlertFilters {
		MetricList?: Array<string>;
		DimensionFilterList?: Array<DimensionFilter>;
	}

	/** The configuration of the alert filters. */
	export interface AlertFiltersFormProperties {
	}
	export function CreateAlertFiltersFormGroup() {
		return new FormGroup<AlertFiltersFormProperties>({
		});

	}

	export interface DescribeAnomalyDetectionExecutionsResponse {
		ExecutionList?: Array<ExecutionStatus>;
		NextToken?: string;
	}
	export interface DescribeAnomalyDetectionExecutionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAnomalyDetectionExecutionsResponseFormGroup() {
		return new FormGroup<DescribeAnomalyDetectionExecutionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of an anomaly detector run. */
	export interface ExecutionStatus {
		Timestamp?: string;
		Status?: AnomalyDetectionTaskStatus;
		FailureReason?: string;
	}

	/** The status of an anomaly detector run. */
	export interface ExecutionStatusFormProperties {
		Timestamp: FormControl<string | null | undefined>,
		Status: FormControl<AnomalyDetectionTaskStatus | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateExecutionStatusFormGroup() {
		return new FormGroup<ExecutionStatusFormProperties>({
			Timestamp: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AnomalyDetectionTaskStatus | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnomalyDetectionTaskStatus { PENDING = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, FAILED_TO_SCHEDULE = 4 }

	export interface DescribeAnomalyDetectorResponse {
		AnomalyDetectorArn?: string;
		AnomalyDetectorName?: string;
		AnomalyDetectorDescription?: string;
		AnomalyDetectorConfig?: AnomalyDetectorConfigSummary;
		CreationTime?: Date;
		LastModificationTime?: Date;
		Status?: AnomalyDetectorStatus;
		FailureReason?: string;
		KmsKeyArn?: string;
		FailureType?: AnomalyDetectorFailureType;
	}
	export interface DescribeAnomalyDetectorResponseFormProperties {
		AnomalyDetectorArn: FormControl<string | null | undefined>,
		AnomalyDetectorName: FormControl<string | null | undefined>,
		AnomalyDetectorDescription: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		Status: FormControl<AnomalyDetectorStatus | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		FailureType: FormControl<AnomalyDetectorFailureType | null | undefined>,
	}
	export function CreateDescribeAnomalyDetectorResponseFormGroup() {
		return new FormGroup<DescribeAnomalyDetectorResponseFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined),
			AnomalyDetectorName: new FormControl<string | null | undefined>(undefined),
			AnomalyDetectorDescription: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<AnomalyDetectorStatus | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			FailureType: new FormControl<AnomalyDetectorFailureType | null | undefined>(undefined),
		});

	}


	/** Contains information about a detector's configuration. */
	export interface AnomalyDetectorConfigSummary {
		AnomalyDetectorFrequency?: Frequency;
	}

	/** Contains information about a detector's configuration. */
	export interface AnomalyDetectorConfigSummaryFormProperties {
		AnomalyDetectorFrequency: FormControl<Frequency | null | undefined>,
	}
	export function CreateAnomalyDetectorConfigSummaryFormGroup() {
		return new FormGroup<AnomalyDetectorConfigSummaryFormProperties>({
			AnomalyDetectorFrequency: new FormControl<Frequency | null | undefined>(undefined),
		});

	}

	export enum AnomalyDetectorStatus { ACTIVE = 0, ACTIVATING = 1, DELETING = 2, FAILED = 3, INACTIVE = 4, LEARNING = 5, BACK_TEST_ACTIVATING = 6, BACK_TEST_ACTIVE = 7, BACK_TEST_COMPLETE = 8, DEACTIVATED = 9, DEACTIVATING = 10 }

	export enum AnomalyDetectorFailureType { ACTIVATION_FAILURE = 0, BACK_TEST_ACTIVATION_FAILURE = 1, DELETION_FAILURE = 2, DEACTIVATION_FAILURE = 3 }

	export interface DescribeMetricSetResponse {
		MetricSetArn?: string;
		AnomalyDetectorArn?: string;
		MetricSetName?: string;
		MetricSetDescription?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
		Offset?: number | null;
		MetricList?: Array<Metric>;
		TimestampColumn?: TimestampColumn;
		DimensionList?: Array<string>;
		MetricSetFrequency?: Frequency;
		Timezone?: string;
		MetricSource?: MetricSource;
		DimensionFilterList?: Array<MetricSetDimensionFilter>;
	}
	export interface DescribeMetricSetResponseFormProperties {
		MetricSetArn: FormControl<string | null | undefined>,
		AnomalyDetectorArn: FormControl<string | null | undefined>,
		MetricSetName: FormControl<string | null | undefined>,
		MetricSetDescription: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		Offset: FormControl<number | null | undefined>,
		MetricSetFrequency: FormControl<Frequency | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMetricSetResponseFormGroup() {
		return new FormGroup<DescribeMetricSetResponseFormProperties>({
			MetricSetArn: new FormControl<string | null | undefined>(undefined),
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined),
			MetricSetName: new FormControl<string | null | undefined>(undefined),
			MetricSetDescription: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			Offset: new FormControl<number | null | undefined>(undefined),
			MetricSetFrequency: new FormControl<Frequency | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the column used to track time in a source data file. */
	export interface TimestampColumn {
		ColumnName?: string;
		ColumnFormat?: string;
	}

	/** Contains information about the column used to track time in a source data file. */
	export interface TimestampColumnFormProperties {
		ColumnName: FormControl<string | null | undefined>,
		ColumnFormat: FormControl<string | null | undefined>,
	}
	export function CreateTimestampColumnFormGroup() {
		return new FormGroup<TimestampColumnFormProperties>({
			ColumnName: new FormControl<string | null | undefined>(undefined),
			ColumnFormat: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about source data used to generate metrics. */
	export interface MetricSource {

		/** Contains information about the configuration of the S3 bucket that contains source files. */
		S3SourceConfig?: S3SourceConfig;
		AppFlowConfig?: AppFlowConfig;
		CloudWatchConfig?: CloudWatchConfig;
		RDSSourceConfig?: RDSSourceConfig;
		RedshiftSourceConfig?: RedshiftSourceConfig;
		AthenaSourceConfig?: AthenaSourceConfig;
	}

	/** Contains information about source data used to generate metrics. */
	export interface MetricSourceFormProperties {
	}
	export function CreateMetricSourceFormGroup() {
		return new FormGroup<MetricSourceFormProperties>({
		});

	}

	export interface DetectMetricSetConfigResponse {
		DetectedMetricSetConfig?: DetectedMetricSetConfig;
	}
	export interface DetectMetricSetConfigResponseFormProperties {
	}
	export function CreateDetectMetricSetConfigResponseFormGroup() {
		return new FormGroup<DetectMetricSetConfigResponseFormProperties>({
		});

	}


	/** An inferred dataset configuration. */
	export interface DetectedMetricSetConfig {
		Offset?: DetectedField;
		MetricSetFrequency?: DetectedField;
		MetricSource?: DetectedMetricSource;
	}

	/** An inferred dataset configuration. */
	export interface DetectedMetricSetConfigFormProperties {
	}
	export function CreateDetectedMetricSetConfigFormGroup() {
		return new FormGroup<DetectedMetricSetConfigFormProperties>({
		});

	}


	/** An inferred field. */
	export interface DetectedField {
		Value?: AttributeValue;
		Confidence?: Confidence;
		Message?: string;
	}

	/** An inferred field. */
	export interface DetectedFieldFormProperties {
		Confidence: FormControl<Confidence | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDetectedFieldFormGroup() {
		return new FormGroup<DetectedFieldFormProperties>({
			Confidence: new FormControl<Confidence | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An attribute value. */
	export interface AttributeValue {
		S?: string;
		N?: string;
		B?: string;
		SS?: Array<string>;
		NS?: Array<string>;
		BS?: Array<string>;
	}

	/** An attribute value. */
	export interface AttributeValueFormProperties {
		S: FormControl<string | null | undefined>,
		N: FormControl<string | null | undefined>,
		B: FormControl<string | null | undefined>,
	}
	export function CreateAttributeValueFormGroup() {
		return new FormGroup<AttributeValueFormProperties>({
			S: new FormControl<string | null | undefined>(undefined),
			N: new FormControl<string | null | undefined>(undefined),
			B: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Confidence { HIGH = 0, LOW = 1, NONE = 2 }


	/** An inferred data source. */
	export interface DetectedMetricSource {
		S3SourceConfig?: DetectedS3SourceConfig;
	}

	/** An inferred data source. */
	export interface DetectedMetricSourceFormProperties {
	}
	export function CreateDetectedMetricSourceFormGroup() {
		return new FormGroup<DetectedMetricSourceFormProperties>({
		});

	}


	/** An inferred source configuration. */
	export interface DetectedS3SourceConfig {
		FileFormatDescriptor?: DetectedFileFormatDescriptor;
	}

	/** An inferred source configuration. */
	export interface DetectedS3SourceConfigFormProperties {
	}
	export function CreateDetectedS3SourceConfigFormGroup() {
		return new FormGroup<DetectedS3SourceConfigFormProperties>({
		});

	}


	/** Properties of an inferred data format. */
	export interface DetectedFileFormatDescriptor {
		CsvFormatDescriptor?: DetectedCsvFormatDescriptor;
		JsonFormatDescriptor?: DetectedJsonFormatDescriptor;
	}

	/** Properties of an inferred data format. */
	export interface DetectedFileFormatDescriptorFormProperties {
	}
	export function CreateDetectedFileFormatDescriptorFormGroup() {
		return new FormGroup<DetectedFileFormatDescriptorFormProperties>({
		});

	}


	/** Properties of an inferred CSV format. */
	export interface DetectedCsvFormatDescriptor {
		FileCompression?: DetectedField;
		Charset?: DetectedField;
		ContainsHeader?: DetectedField;
		Delimiter?: DetectedField;
		HeaderList?: DetectedField;
		QuoteSymbol?: DetectedField;
	}

	/** Properties of an inferred CSV format. */
	export interface DetectedCsvFormatDescriptorFormProperties {
	}
	export function CreateDetectedCsvFormatDescriptorFormGroup() {
		return new FormGroup<DetectedCsvFormatDescriptorFormProperties>({
		});

	}


	/** A detected JSON format descriptor. */
	export interface DetectedJsonFormatDescriptor {
		FileCompression?: DetectedField;
		Charset?: DetectedField;
	}

	/** A detected JSON format descriptor. */
	export interface DetectedJsonFormatDescriptorFormProperties {
	}
	export function CreateDetectedJsonFormatDescriptorFormGroup() {
		return new FormGroup<DetectedJsonFormatDescriptorFormProperties>({
		});

	}


	/** An auto detection source config. */
	export interface AutoDetectionS3SourceConfig {
		TemplatedPathList?: Array<string>;
		HistoricalDataPathList?: Array<string>;
	}

	/** An auto detection source config. */
	export interface AutoDetectionS3SourceConfigFormProperties {
	}
	export function CreateAutoDetectionS3SourceConfigFormGroup() {
		return new FormGroup<AutoDetectionS3SourceConfigFormProperties>({
		});

	}

	export interface GetAnomalyGroupResponse {
		AnomalyGroup?: AnomalyGroup;
	}
	export interface GetAnomalyGroupResponseFormProperties {
	}
	export function CreateGetAnomalyGroupResponseFormGroup() {
		return new FormGroup<GetAnomalyGroupResponseFormProperties>({
		});

	}


	/** A group of anomalous metrics */
	export interface AnomalyGroup {
		StartTime?: string;
		EndTime?: string;
		AnomalyGroupId?: string;
		AnomalyGroupScore?: number | null;
		PrimaryMetricName?: string;
		MetricLevelImpactList?: Array<MetricLevelImpact>;
	}

	/** A group of anomalous metrics */
	export interface AnomalyGroupFormProperties {
		StartTime: FormControl<string | null | undefined>,
		EndTime: FormControl<string | null | undefined>,
		AnomalyGroupId: FormControl<string | null | undefined>,
		AnomalyGroupScore: FormControl<number | null | undefined>,
		PrimaryMetricName: FormControl<string | null | undefined>,
	}
	export function CreateAnomalyGroupFormGroup() {
		return new FormGroup<AnomalyGroupFormProperties>({
			StartTime: new FormControl<string | null | undefined>(undefined),
			EndTime: new FormControl<string | null | undefined>(undefined),
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined),
			AnomalyGroupScore: new FormControl<number | null | undefined>(undefined),
			PrimaryMetricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a measure affected by an anomaly. */
	export interface MetricLevelImpact {
		MetricName?: string;
		NumTimeSeries?: number | null;
		ContributionMatrix?: ContributionMatrix;
	}

	/** Details about a measure affected by an anomaly. */
	export interface MetricLevelImpactFormProperties {
		MetricName: FormControl<string | null | undefined>,
		NumTimeSeries: FormControl<number | null | undefined>,
	}
	export function CreateMetricLevelImpactFormGroup() {
		return new FormGroup<MetricLevelImpactFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			NumTimeSeries: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details about dimensions that contributed to an anomaly. */
	export interface ContributionMatrix {
		DimensionContributionList?: Array<DimensionContribution>;
	}

	/** Details about dimensions that contributed to an anomaly. */
	export interface ContributionMatrixFormProperties {
	}
	export function CreateContributionMatrixFormGroup() {
		return new FormGroup<ContributionMatrixFormProperties>({
		});

	}


	/** Details about a dimension that contributed to an anomaly. */
	export interface DimensionContribution {
		DimensionName?: string;
		DimensionValueContributionList?: Array<DimensionValueContribution>;
	}

	/** Details about a dimension that contributed to an anomaly. */
	export interface DimensionContributionFormProperties {
		DimensionName: FormControl<string | null | undefined>,
	}
	export function CreateDimensionContributionFormGroup() {
		return new FormGroup<DimensionContributionFormProperties>({
			DimensionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The severity of a value of a dimension that contributed to an anomaly. */
	export interface DimensionValueContribution {
		DimensionValue?: string;
		ContributionScore?: number | null;
	}

	/** The severity of a value of a dimension that contributed to an anomaly. */
	export interface DimensionValueContributionFormProperties {
		DimensionValue: FormControl<string | null | undefined>,
		ContributionScore: FormControl<number | null | undefined>,
	}
	export function CreateDimensionValueContributionFormGroup() {
		return new FormGroup<DimensionValueContributionFormProperties>({
			DimensionValue: new FormControl<string | null | undefined>(undefined),
			ContributionScore: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDataQualityMetricsResponse {
		AnomalyDetectorDataQualityMetricList?: Array<AnomalyDetectorDataQualityMetric>;
	}
	export interface GetDataQualityMetricsResponseFormProperties {
	}
	export function CreateGetDataQualityMetricsResponseFormGroup() {
		return new FormGroup<GetDataQualityMetricsResponseFormProperties>({
		});

	}


	/** Aggregated details about the data quality metrics collected for the <code>AnomalyDetectorArn</code> provided in the <a>GetDataQualityMetrics</a> object. */
	export interface AnomalyDetectorDataQualityMetric {
		StartTimestamp?: Date;
		MetricSetDataQualityMetricList?: Array<MetricSetDataQualityMetric>;
	}

	/** Aggregated details about the data quality metrics collected for the <code>AnomalyDetectorArn</code> provided in the <a>GetDataQualityMetrics</a> object. */
	export interface AnomalyDetectorDataQualityMetricFormProperties {
		StartTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAnomalyDetectorDataQualityMetricFormGroup() {
		return new FormGroup<AnomalyDetectorDataQualityMetricFormProperties>({
			StartTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An array of <code>DataQualityMetric</code> objects that describes one or more data quality metrics. */
	export interface MetricSetDataQualityMetric {
		MetricSetArn?: string;
		DataQualityMetricList?: Array<DataQualityMetric>;
	}

	/** An array of <code>DataQualityMetric</code> objects that describes one or more data quality metrics. */
	export interface MetricSetDataQualityMetricFormProperties {
		MetricSetArn: FormControl<string | null | undefined>,
	}
	export function CreateMetricSetDataQualityMetricFormGroup() {
		return new FormGroup<MetricSetDataQualityMetricFormProperties>({
			MetricSetArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array that describes a data quality metric. Each <code>DataQualityMetric</code> object contains the data quality metric name, its value, a description of the metric, and the affected column. */
	export interface DataQualityMetric {
		MetricType?: DataQualityMetricType;
		MetricDescription?: string;
		RelatedColumnName?: string;
		MetricValue?: number | null;
	}

	/** An array that describes a data quality metric. Each <code>DataQualityMetric</code> object contains the data quality metric name, its value, a description of the metric, and the affected column. */
	export interface DataQualityMetricFormProperties {
		MetricType: FormControl<DataQualityMetricType | null | undefined>,
		MetricDescription: FormControl<string | null | undefined>,
		RelatedColumnName: FormControl<string | null | undefined>,
		MetricValue: FormControl<number | null | undefined>,
	}
	export function CreateDataQualityMetricFormGroup() {
		return new FormGroup<DataQualityMetricFormProperties>({
			MetricType: new FormControl<DataQualityMetricType | null | undefined>(undefined),
			MetricDescription: new FormControl<string | null | undefined>(undefined),
			RelatedColumnName: new FormControl<string | null | undefined>(undefined),
			MetricValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DataQualityMetricType { COLUMN_COMPLETENESS = 0, DIMENSION_UNIQUENESS = 1, TIME_SERIES_COUNT = 2, ROWS_PROCESSED = 3, ROWS_PARTIAL_COMPLIANCE = 4, INVALID_ROWS_COMPLIANCE = 5, BACKTEST_TRAINING_DATA_START_TIME_STAMP = 6, BACKTEST_TRAINING_DATA_END_TIME_STAMP = 7, BACKTEST_INFERENCE_DATA_START_TIME_STAMP = 8, BACKTEST_INFERENCE_DATA_END_TIME_STAMP = 9 }

	export interface GetFeedbackResponse {
		AnomalyGroupTimeSeriesFeedback?: Array<TimeSeriesFeedback>;
		NextToken?: string;
	}
	export interface GetFeedbackResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetFeedbackResponseFormGroup() {
		return new FormGroup<GetFeedbackResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about feedback submitted for an anomalous metric. */
	export interface TimeSeriesFeedback {
		TimeSeriesId?: string;
		IsAnomaly?: boolean | null;
	}

	/** Details about feedback submitted for an anomalous metric. */
	export interface TimeSeriesFeedbackFormProperties {
		TimeSeriesId: FormControl<string | null | undefined>,
		IsAnomaly: FormControl<boolean | null | undefined>,
	}
	export function CreateTimeSeriesFeedbackFormGroup() {
		return new FormGroup<TimeSeriesFeedbackFormProperties>({
			TimeSeriesId: new FormControl<string | null | undefined>(undefined),
			IsAnomaly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetSampleDataResponse {
		HeaderValues?: Array<string>;
		SampleRows?: Array<Array<string>>;
	}
	export interface GetSampleDataResponseFormProperties {
	}
	export function CreateGetSampleDataResponseFormGroup() {
		return new FormGroup<GetSampleDataResponseFormProperties>({
		});

	}

	export interface ListAlertsResponse {
		AlertSummaryList?: Array<AlertSummary>;
		NextToken?: string;
	}
	export interface ListAlertsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAlertsResponseFormGroup() {
		return new FormGroup<ListAlertsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of an alert's configuration. */
	export interface AlertSummary {
		AlertArn?: string;
		AnomalyDetectorArn?: string;
		AlertName?: string;
		AlertSensitivityThreshold?: number | null;
		AlertType?: AlertType;
		AlertStatus?: AlertStatus;
		LastModificationTime?: Date;
		CreationTime?: Date;
		Tags?: TagMap;
	}

	/** Provides a summary of an alert's configuration. */
	export interface AlertSummaryFormProperties {
		AlertArn: FormControl<string | null | undefined>,
		AnomalyDetectorArn: FormControl<string | null | undefined>,
		AlertName: FormControl<string | null | undefined>,
		AlertSensitivityThreshold: FormControl<number | null | undefined>,
		AlertType: FormControl<AlertType | null | undefined>,
		AlertStatus: FormControl<AlertStatus | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateAlertSummaryFormGroup() {
		return new FormGroup<AlertSummaryFormProperties>({
			AlertArn: new FormControl<string | null | undefined>(undefined),
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined),
			AlertName: new FormControl<string | null | undefined>(undefined),
			AlertSensitivityThreshold: new FormControl<number | null | undefined>(undefined),
			AlertType: new FormControl<AlertType | null | undefined>(undefined),
			AlertStatus: new FormControl<AlertStatus | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface ListAnomalyDetectorsResponse {
		AnomalyDetectorSummaryList?: Array<AnomalyDetectorSummary>;
		NextToken?: string;
	}
	export interface ListAnomalyDetectorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalyDetectorsResponseFormGroup() {
		return new FormGroup<ListAnomalyDetectorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an an anomaly detector. */
	export interface AnomalyDetectorSummary {
		AnomalyDetectorArn?: string;
		AnomalyDetectorName?: string;
		AnomalyDetectorDescription?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
		Status?: AnomalyDetectorStatus;
		Tags?: TagMap;
	}

	/** Contains information about an an anomaly detector. */
	export interface AnomalyDetectorSummaryFormProperties {
		AnomalyDetectorArn: FormControl<string | null | undefined>,
		AnomalyDetectorName: FormControl<string | null | undefined>,
		AnomalyDetectorDescription: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		Status: FormControl<AnomalyDetectorStatus | null | undefined>,
	}
	export function CreateAnomalyDetectorSummaryFormGroup() {
		return new FormGroup<AnomalyDetectorSummaryFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined),
			AnomalyDetectorName: new FormControl<string | null | undefined>(undefined),
			AnomalyDetectorDescription: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<AnomalyDetectorStatus | null | undefined>(undefined),
		});

	}

	export interface ListAnomalyGroupRelatedMetricsResponse {
		InterMetricImpactList?: Array<InterMetricImpactDetails>;
		NextToken?: string;
	}
	export interface ListAnomalyGroupRelatedMetricsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalyGroupRelatedMetricsResponseFormGroup() {
		return new FormGroup<ListAnomalyGroupRelatedMetricsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Aggregated details about the measures contributing to the anomaly group, and the measures potentially impacted by the anomaly group.</p> <p/> */
	export interface InterMetricImpactDetails {
		MetricName?: string;
		AnomalyGroupId?: string;
		RelationshipType?: RelationshipType;
		ContributionPercentage?: number | null;
	}

	/** <p>Aggregated details about the measures contributing to the anomaly group, and the measures potentially impacted by the anomaly group.</p> <p/> */
	export interface InterMetricImpactDetailsFormProperties {
		MetricName: FormControl<string | null | undefined>,
		AnomalyGroupId: FormControl<string | null | undefined>,
		RelationshipType: FormControl<RelationshipType | null | undefined>,
		ContributionPercentage: FormControl<number | null | undefined>,
	}
	export function CreateInterMetricImpactDetailsFormGroup() {
		return new FormGroup<InterMetricImpactDetailsFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined),
			RelationshipType: new FormControl<RelationshipType | null | undefined>(undefined),
			ContributionPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RelationshipType { CAUSE_OF_INPUT_ANOMALY_GROUP = 0, EFFECT_OF_INPUT_ANOMALY_GROUP = 1 }

	export interface ListAnomalyGroupSummariesResponse {
		AnomalyGroupSummaryList?: Array<AnomalyGroupSummary>;
		AnomalyGroupStatistics?: AnomalyGroupStatistics;
		NextToken?: string;
	}
	export interface ListAnomalyGroupSummariesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalyGroupSummariesResponseFormGroup() {
		return new FormGroup<ListAnomalyGroupSummariesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a group of anomalous metrics. */
	export interface AnomalyGroupSummary {
		StartTime?: string;
		EndTime?: string;
		AnomalyGroupId?: string;
		AnomalyGroupScore?: number | null;
		PrimaryMetricName?: string;
	}

	/** Details about a group of anomalous metrics. */
	export interface AnomalyGroupSummaryFormProperties {
		StartTime: FormControl<string | null | undefined>,
		EndTime: FormControl<string | null | undefined>,
		AnomalyGroupId: FormControl<string | null | undefined>,
		AnomalyGroupScore: FormControl<number | null | undefined>,
		PrimaryMetricName: FormControl<string | null | undefined>,
	}
	export function CreateAnomalyGroupSummaryFormGroup() {
		return new FormGroup<AnomalyGroupSummaryFormProperties>({
			StartTime: new FormControl<string | null | undefined>(undefined),
			EndTime: new FormControl<string | null | undefined>(undefined),
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined),
			AnomalyGroupScore: new FormControl<number | null | undefined>(undefined),
			PrimaryMetricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Aggregated statistics for a group of anomalous metrics. */
	export interface AnomalyGroupStatistics {
		EvaluationStartDate?: string;
		TotalCount?: number | null;
		ItemizedMetricStatsList?: Array<ItemizedMetricStats>;
	}

	/** Aggregated statistics for a group of anomalous metrics. */
	export interface AnomalyGroupStatisticsFormProperties {
		EvaluationStartDate: FormControl<string | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateAnomalyGroupStatisticsFormGroup() {
		return new FormGroup<AnomalyGroupStatisticsFormProperties>({
			EvaluationStartDate: new FormControl<string | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Aggregated statistics about a measure affected by an anomaly. */
	export interface ItemizedMetricStats {
		MetricName?: string;
		OccurrenceCount?: number | null;
	}

	/** Aggregated statistics about a measure affected by an anomaly. */
	export interface ItemizedMetricStatsFormProperties {
		MetricName: FormControl<string | null | undefined>,
		OccurrenceCount: FormControl<number | null | undefined>,
	}
	export function CreateItemizedMetricStatsFormGroup() {
		return new FormGroup<ItemizedMetricStatsFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			OccurrenceCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAnomalyGroupTimeSeriesResponse {
		AnomalyGroupId?: string;
		MetricName?: string;
		TimestampList?: Array<string>;
		NextToken?: string;
		TimeSeriesList?: Array<TimeSeries>;
	}
	export interface ListAnomalyGroupTimeSeriesResponseFormProperties {
		AnomalyGroupId: FormControl<string | null | undefined>,
		MetricName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalyGroupTimeSeriesResponseFormGroup() {
		return new FormGroup<ListAnomalyGroupTimeSeriesResponseFormProperties>({
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as <i>availability</i> in the <i>us-east-1</i> Region. */
	export interface TimeSeries {

		/** Required */
		TimeSeriesId: string;

		/** Required */
		DimensionList: Array<DimensionNameValue>;

		/** Required */
		MetricValueList: Array<number>;
	}

	/** Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as <i>availability</i> in the <i>us-east-1</i> Region. */
	export interface TimeSeriesFormProperties {

		/** Required */
		TimeSeriesId: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesFormGroup() {
		return new FormGroup<TimeSeriesFormProperties>({
			TimeSeriesId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A dimension name and value. */
	export interface DimensionNameValue {

		/** Required */
		DimensionName: string;

		/** Required */
		DimensionValue: string;
	}

	/** A dimension name and value. */
	export interface DimensionNameValueFormProperties {

		/** Required */
		DimensionName: FormControl<string | null | undefined>,

		/** Required */
		DimensionValue: FormControl<string | null | undefined>,
	}
	export function CreateDimensionNameValueFormGroup() {
		return new FormGroup<DimensionNameValueFormProperties>({
			DimensionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DimensionValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListMetricSetsResponse {
		MetricSetSummaryList?: Array<MetricSetSummary>;
		NextToken?: string;
	}
	export interface ListMetricSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMetricSetsResponseFormGroup() {
		return new FormGroup<ListMetricSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a dataset. */
	export interface MetricSetSummary {
		MetricSetArn?: string;
		AnomalyDetectorArn?: string;
		MetricSetDescription?: string;
		MetricSetName?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
		Tags?: TagMap;
	}

	/** Contains information about a dataset. */
	export interface MetricSetSummaryFormProperties {
		MetricSetArn: FormControl<string | null | undefined>,
		AnomalyDetectorArn: FormControl<string | null | undefined>,
		MetricSetDescription: FormControl<string | null | undefined>,
		MetricSetName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateMetricSetSummaryFormGroup() {
		return new FormGroup<MetricSetSummaryFormProperties>({
			MetricSetArn: new FormControl<string | null | undefined>(undefined),
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined),
			MetricSetDescription: new FormControl<string | null | undefined>(undefined),
			MetricSetName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface PutFeedbackResponse {
	}
	export interface PutFeedbackResponseFormProperties {
	}
	export function CreatePutFeedbackResponseFormGroup() {
		return new FormGroup<PutFeedbackResponseFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateAlertResponse {
		AlertArn?: string;
	}
	export interface UpdateAlertResponseFormProperties {
		AlertArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAlertResponseFormGroup() {
		return new FormGroup<UpdateAlertResponseFormProperties>({
			AlertArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAnomalyDetectorResponse {
		AnomalyDetectorArn?: string;
	}
	export interface UpdateAnomalyDetectorResponseFormProperties {
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnomalyDetectorResponseFormGroup() {
		return new FormGroup<UpdateAnomalyDetectorResponseFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMetricSetResponse {
		MetricSetArn?: string;
	}
	export interface UpdateMetricSetResponseFormProperties {
		MetricSetArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMetricSetResponseFormGroup() {
		return new FormGroup<UpdateMetricSetResponseFormProperties>({
			MetricSetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivateAnomalyDetectorRequest {

		/** Required */
		AnomalyDetectorArn: string;
	}
	export interface ActivateAnomalyDetectorRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateActivateAnomalyDetectorRequestFormGroup() {
		return new FormGroup<ActivateAnomalyDetectorRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about a detector's configuration. */
	export interface AnomalyDetectorConfig {
		AnomalyDetectorFrequency?: Frequency;
	}

	/** Contains information about a detector's configuration. */
	export interface AnomalyDetectorConfigFormProperties {
		AnomalyDetectorFrequency: FormControl<Frequency | null | undefined>,
	}
	export function CreateAnomalyDetectorConfigFormGroup() {
		return new FormGroup<AnomalyDetectorConfigFormProperties>({
			AnomalyDetectorFrequency: new FormControl<Frequency | null | undefined>(undefined),
		});

	}


	/** An anomalous metric in an anomaly group. */
	export interface AnomalyGroupTimeSeries {

		/** Required */
		AnomalyGroupId: string;
		TimeSeriesId?: string;
	}

	/** An anomalous metric in an anomaly group. */
	export interface AnomalyGroupTimeSeriesFormProperties {

		/** Required */
		AnomalyGroupId: FormControl<string | null | undefined>,
		TimeSeriesId: FormControl<string | null | undefined>,
	}
	export function CreateAnomalyGroupTimeSeriesFormGroup() {
		return new FormGroup<AnomalyGroupTimeSeriesFormProperties>({
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimeSeriesId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Feedback for an anomalous metric. */
	export interface AnomalyGroupTimeSeriesFeedback {

		/** Required */
		AnomalyGroupId: string;

		/** Required */
		TimeSeriesId: string;

		/** Required */
		IsAnomaly: boolean;
	}

	/** Feedback for an anomalous metric. */
	export interface AnomalyGroupTimeSeriesFeedbackFormProperties {

		/** Required */
		AnomalyGroupId: FormControl<string | null | undefined>,

		/** Required */
		TimeSeriesId: FormControl<string | null | undefined>,

		/** Required */
		IsAnomaly: FormControl<boolean | null | undefined>,
	}
	export function CreateAnomalyGroupTimeSeriesFeedbackFormGroup() {
		return new FormGroup<AnomalyGroupTimeSeriesFeedbackFormProperties>({
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimeSeriesId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsAnomaly: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An auto detection metric source. */
	export interface AutoDetectionMetricSource {
		S3SourceConfig?: AutoDetectionS3SourceConfig;
	}

	/** An auto detection metric source. */
	export interface AutoDetectionMetricSourceFormProperties {
	}
	export function CreateAutoDetectionMetricSourceFormGroup() {
		return new FormGroup<AutoDetectionMetricSourceFormProperties>({
		});

	}

	export interface BackTestAnomalyDetectorRequest {

		/** Required */
		AnomalyDetectorArn: string;
	}
	export interface BackTestAnomalyDetectorRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateBackTestAnomalyDetectorRequestFormGroup() {
		return new FormGroup<BackTestAnomalyDetectorRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAlertRequest {

		/** Required */
		AlertName: string;
		AlertSensitivityThreshold?: number | null;
		AlertDescription?: string;

		/** Required */
		AnomalyDetectorArn: string;

		/** Required */
		Action: Action;
		Tags?: TagMap;
		AlertFilters?: AlertFilters;
	}
	export interface CreateAlertRequestFormProperties {

		/** Required */
		AlertName: FormControl<string | null | undefined>,
		AlertSensitivityThreshold: FormControl<number | null | undefined>,
		AlertDescription: FormControl<string | null | undefined>,

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAlertRequestFormGroup() {
		return new FormGroup<CreateAlertRequestFormProperties>({
			AlertName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AlertSensitivityThreshold: new FormControl<number | null | undefined>(undefined),
			AlertDescription: new FormControl<string | null | undefined>(undefined),
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAnomalyDetectorRequest {

		/** Required */
		AnomalyDetectorName: string;
		AnomalyDetectorDescription?: string;

		/** Required */
		AnomalyDetectorConfig: AnomalyDetectorConfig;
		KmsKeyArn?: string;
		Tags?: TagMap;
	}
	export interface CreateAnomalyDetectorRequestFormProperties {

		/** Required */
		AnomalyDetectorName: FormControl<string | null | undefined>,
		AnomalyDetectorDescription: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAnomalyDetectorRequestFormGroup() {
		return new FormGroup<CreateAnomalyDetectorRequestFormProperties>({
			AnomalyDetectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AnomalyDetectorDescription: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMetricSetRequest {

		/** Required */
		AnomalyDetectorArn: string;

		/** Required */
		MetricSetName: string;
		MetricSetDescription?: string;

		/** Required */
		MetricList: Array<Metric>;
		Offset?: number | null;
		TimestampColumn?: TimestampColumn;
		DimensionList?: Array<string>;
		MetricSetFrequency?: Frequency;

		/** Required */
		MetricSource: MetricSource;
		Timezone?: string;
		Tags?: TagMap;
		DimensionFilterList?: Array<MetricSetDimensionFilter>;
	}
	export interface CreateMetricSetRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/** Required */
		MetricSetName: FormControl<string | null | undefined>,
		MetricSetDescription: FormControl<string | null | undefined>,
		Offset: FormControl<number | null | undefined>,
		MetricSetFrequency: FormControl<Frequency | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
	}
	export function CreateCreateMetricSetRequestFormGroup() {
		return new FormGroup<CreateMetricSetRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MetricSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MetricSetDescription: new FormControl<string | null | undefined>(undefined),
			Offset: new FormControl<number | null | undefined>(undefined),
			MetricSetFrequency: new FormControl<Frequency | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeactivateAnomalyDetectorRequest {

		/** Required */
		AnomalyDetectorArn: string;
	}
	export interface DeactivateAnomalyDetectorRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeactivateAnomalyDetectorRequestFormGroup() {
		return new FormGroup<DeactivateAnomalyDetectorRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAlertRequest {

		/** Required */
		AlertArn: string;
	}
	export interface DeleteAlertRequestFormProperties {

		/** Required */
		AlertArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAlertRequestFormGroup() {
		return new FormGroup<DeleteAlertRequestFormProperties>({
			AlertArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAnomalyDetectorRequest {

		/** Required */
		AnomalyDetectorArn: string;
	}
	export interface DeleteAnomalyDetectorRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAnomalyDetectorRequestFormGroup() {
		return new FormGroup<DeleteAnomalyDetectorRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAlertRequest {

		/** Required */
		AlertArn: string;
	}
	export interface DescribeAlertRequestFormProperties {

		/** Required */
		AlertArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAlertRequestFormGroup() {
		return new FormGroup<DescribeAlertRequestFormProperties>({
			AlertArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAnomalyDetectionExecutionsRequest {

		/** Required */
		AnomalyDetectorArn: string;
		Timestamp?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeAnomalyDetectionExecutionsRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
		Timestamp: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAnomalyDetectionExecutionsRequestFormGroup() {
		return new FormGroup<DescribeAnomalyDetectionExecutionsRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timestamp: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAnomalyDetectorRequest {

		/** Required */
		AnomalyDetectorArn: string;
	}
	export interface DescribeAnomalyDetectorRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAnomalyDetectorRequestFormGroup() {
		return new FormGroup<DescribeAnomalyDetectorRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeMetricSetRequest {

		/** Required */
		MetricSetArn: string;
	}
	export interface DescribeMetricSetRequestFormProperties {

		/** Required */
		MetricSetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMetricSetRequestFormGroup() {
		return new FormGroup<DescribeMetricSetRequestFormProperties>({
			MetricSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectMetricSetConfigRequest {

		/** Required */
		AnomalyDetectorArn: string;

		/** Required */
		AutoDetectionMetricSource: AutoDetectionMetricSource;
	}
	export interface DetectMetricSetConfigRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateDetectMetricSetConfigRequestFormGroup() {
		return new FormGroup<DetectMetricSetConfigRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAnomalyGroupRequest {

		/** Required */
		AnomalyGroupId: string;

		/** Required */
		AnomalyDetectorArn: string;
	}
	export interface GetAnomalyGroupRequestFormProperties {

		/** Required */
		AnomalyGroupId: FormControl<string | null | undefined>,

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateGetAnomalyGroupRequestFormGroup() {
		return new FormGroup<GetAnomalyGroupRequestFormProperties>({
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDataQualityMetricsRequest {

		/** Required */
		AnomalyDetectorArn: string;
		MetricSetArn?: string;
	}
	export interface GetDataQualityMetricsRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
		MetricSetArn: FormControl<string | null | undefined>,
	}
	export function CreateGetDataQualityMetricsRequestFormGroup() {
		return new FormGroup<GetDataQualityMetricsRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MetricSetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFeedbackRequest {

		/** Required */
		AnomalyDetectorArn: string;

		/** Required */
		AnomalyGroupTimeSeriesFeedback: AnomalyGroupTimeSeries;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetFeedbackRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetFeedbackRequestFormGroup() {
		return new FormGroup<GetFeedbackRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the source configuration in Amazon S3. */
	export interface SampleDataS3SourceConfig {

		/** Required */
		RoleArn: string;
		TemplatedPathList?: Array<string>;
		HistoricalDataPathList?: Array<string>;

		/**
		 * Contains information about a source file's formatting.
		 * Required
		 */
		FileFormatDescriptor: FileFormatDescriptor;
	}

	/** Contains information about the source configuration in Amazon S3. */
	export interface SampleDataS3SourceConfigFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateSampleDataS3SourceConfigFormGroup() {
		return new FormGroup<SampleDataS3SourceConfigFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSampleDataRequest {
		S3SourceConfig?: SampleDataS3SourceConfig;
	}
	export interface GetSampleDataRequestFormProperties {
	}
	export function CreateGetSampleDataRequestFormGroup() {
		return new FormGroup<GetSampleDataRequestFormProperties>({
		});

	}

	export enum JsonFileCompression { NONE = 0, GZIP = 1 }

	export interface ListAlertsRequest {
		AnomalyDetectorArn?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListAlertsRequestFormProperties {
		AnomalyDetectorArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAlertsRequestFormGroup() {
		return new FormGroup<ListAlertsRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAnomalyDetectorsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAnomalyDetectorsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalyDetectorsRequestFormGroup() {
		return new FormGroup<ListAnomalyDetectorsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAnomalyGroupRelatedMetricsRequest {

		/** Required */
		AnomalyDetectorArn: string;

		/** Required */
		AnomalyGroupId: string;
		RelationshipTypeFilter?: RelationshipType;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAnomalyGroupRelatedMetricsRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/** Required */
		AnomalyGroupId: FormControl<string | null | undefined>,
		RelationshipTypeFilter: FormControl<RelationshipType | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalyGroupRelatedMetricsRequestFormGroup() {
		return new FormGroup<ListAnomalyGroupRelatedMetricsRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RelationshipTypeFilter: new FormControl<RelationshipType | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAnomalyGroupSummariesRequest {

		/** Required */
		AnomalyDetectorArn: string;

		/** Required */
		SensitivityThreshold: number;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAnomalyGroupSummariesRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/** Required */
		SensitivityThreshold: FormControl<number | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalyGroupSummariesRequestFormGroup() {
		return new FormGroup<ListAnomalyGroupSummariesRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SensitivityThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAnomalyGroupTimeSeriesRequest {

		/** Required */
		AnomalyDetectorArn: string;

		/** Required */
		AnomalyGroupId: string;

		/** Required */
		MetricName: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAnomalyGroupTimeSeriesRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/** Required */
		AnomalyGroupId: FormControl<string | null | undefined>,

		/** Required */
		MetricName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalyGroupTimeSeriesRequestFormGroup() {
		return new FormGroup<ListAnomalyGroupTimeSeriesRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMetricSetsRequest {
		AnomalyDetectorArn?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListMetricSetsRequestFormProperties {
		AnomalyDetectorArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMetricSetsRequestFormGroup() {
		return new FormGroup<ListMetricSetsRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface PutFeedbackRequest {

		/** Required */
		AnomalyDetectorArn: string;

		/** Required */
		AnomalyGroupTimeSeriesFeedback: AnomalyGroupTimeSeriesFeedback;
	}
	export interface PutFeedbackRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreatePutFeedbackRequestFormGroup() {
		return new FormGroup<PutFeedbackRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateAlertRequest {

		/** Required */
		AlertArn: string;
		AlertDescription?: string;
		AlertSensitivityThreshold?: number | null;
		Action?: Action;
		AlertFilters?: AlertFilters;
	}
	export interface UpdateAlertRequestFormProperties {

		/** Required */
		AlertArn: FormControl<string | null | undefined>,
		AlertDescription: FormControl<string | null | undefined>,
		AlertSensitivityThreshold: FormControl<number | null | undefined>,
	}
	export function CreateUpdateAlertRequestFormGroup() {
		return new FormGroup<UpdateAlertRequestFormProperties>({
			AlertArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AlertDescription: new FormControl<string | null | undefined>(undefined),
			AlertSensitivityThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateAnomalyDetectorRequest {

		/** Required */
		AnomalyDetectorArn: string;
		KmsKeyArn?: string;
		AnomalyDetectorDescription?: string;
		AnomalyDetectorConfig?: AnomalyDetectorConfig;
	}
	export interface UpdateAnomalyDetectorRequestFormProperties {

		/** Required */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		AnomalyDetectorDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnomalyDetectorRequestFormGroup() {
		return new FormGroup<UpdateAnomalyDetectorRequestFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			AnomalyDetectorDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMetricSetRequest {

		/** Required */
		MetricSetArn: string;
		MetricSetDescription?: string;
		MetricList?: Array<Metric>;
		Offset?: number | null;
		TimestampColumn?: TimestampColumn;
		DimensionList?: Array<string>;
		MetricSetFrequency?: Frequency;

		/** Contains information about source data used to generate metrics. */
		MetricSource?: MetricSource;
		DimensionFilterList?: Array<MetricSetDimensionFilter>;
	}
	export interface UpdateMetricSetRequestFormProperties {

		/** Required */
		MetricSetArn: FormControl<string | null | undefined>,
		MetricSetDescription: FormControl<string | null | undefined>,
		Offset: FormControl<number | null | undefined>,
		MetricSetFrequency: FormControl<Frequency | null | undefined>,
	}
	export function CreateUpdateMetricSetRequestFormGroup() {
		return new FormGroup<UpdateMetricSetRequestFormProperties>({
			MetricSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MetricSetDescription: new FormControl<string | null | undefined>(undefined),
			Offset: new FormControl<number | null | undefined>(undefined),
			MetricSetFrequency: new FormControl<Frequency | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Activates an anomaly detector.
		 * Post ActivateAnomalyDetector
		 * @return {ActivateAnomalyDetectorResponse} Success
		 */
		ActivateAnomalyDetector(requestBody: ActivateAnomalyDetectorPostBody): Observable<ActivateAnomalyDetectorResponse> {
			return this.http.post<ActivateAnomalyDetectorResponse>(this.baseUri + 'ActivateAnomalyDetector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs a backtest for anomaly detection for the specified resource.
		 * Post BackTestAnomalyDetector
		 * @return {BackTestAnomalyDetectorResponse} Success
		 */
		BackTestAnomalyDetector(requestBody: BackTestAnomalyDetectorPostBody): Observable<BackTestAnomalyDetectorResponse> {
			return this.http.post<BackTestAnomalyDetectorResponse>(this.baseUri + 'BackTestAnomalyDetector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an alert for an anomaly detector.
		 * Post CreateAlert
		 * @return {CreateAlertResponse} Success
		 */
		CreateAlert(requestBody: CreateAlertPostBody): Observable<CreateAlertResponse> {
			return this.http.post<CreateAlertResponse>(this.baseUri + 'CreateAlert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an anomaly detector.
		 * Post CreateAnomalyDetector
		 * @return {CreateAnomalyDetectorResponse} Success
		 */
		CreateAnomalyDetector(requestBody: CreateAnomalyDetectorPostBody): Observable<CreateAnomalyDetectorResponse> {
			return this.http.post<CreateAnomalyDetectorResponse>(this.baseUri + 'CreateAnomalyDetector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a dataset.
		 * Post CreateMetricSet
		 * @return {CreateMetricSetResponse} Success
		 */
		CreateMetricSet(requestBody: CreateMetricSetPostBody): Observable<CreateMetricSetResponse> {
			return this.http.post<CreateMetricSetResponse>(this.baseUri + 'CreateMetricSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deactivates an anomaly detector.
		 * Post DeactivateAnomalyDetector
		 * @return {DeactivateAnomalyDetectorResponse} Success
		 */
		DeactivateAnomalyDetector(requestBody: DeactivateAnomalyDetectorPostBody): Observable<DeactivateAnomalyDetectorResponse> {
			return this.http.post<DeactivateAnomalyDetectorResponse>(this.baseUri + 'DeactivateAnomalyDetector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an alert.
		 * Post DeleteAlert
		 * @return {DeleteAlertResponse} Success
		 */
		DeleteAlert(requestBody: DeleteAlertPostBody): Observable<DeleteAlertResponse> {
			return this.http.post<DeleteAlertResponse>(this.baseUri + 'DeleteAlert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.
		 * Post DeleteAnomalyDetector
		 * @return {DeleteAnomalyDetectorResponse} Success
		 */
		DeleteAnomalyDetector(requestBody: DeleteAnomalyDetectorPostBody): Observable<DeleteAnomalyDetectorResponse> {
			return this.http.post<DeleteAnomalyDetectorResponse>(this.baseUri + 'DeleteAnomalyDetector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
		 * Post DescribeAlert
		 * @return {DescribeAlertResponse} Success
		 */
		DescribeAlert(requestBody: DescribeAlertPostBody): Observable<DescribeAlertResponse> {
			return this.http.post<DescribeAlertResponse>(this.baseUri + 'DescribeAlert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the status of the specified anomaly detection jobs.
		 * Post DescribeAnomalyDetectionExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAnomalyDetectionExecutionsResponse} Success
		 */
		DescribeAnomalyDetectionExecutions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAnomalyDetectionExecutionsPostBody): Observable<DescribeAnomalyDetectionExecutionsResponse> {
			return this.http.post<DescribeAnomalyDetectionExecutionsResponse>(this.baseUri + 'DescribeAnomalyDetectionExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
		 * Post DescribeAnomalyDetector
		 * @return {DescribeAnomalyDetectorResponse} Success
		 */
		DescribeAnomalyDetector(requestBody: DescribeAnomalyDetectorPostBody): Observable<DescribeAnomalyDetectorResponse> {
			return this.http.post<DescribeAnomalyDetectorResponse>(this.baseUri + 'DescribeAnomalyDetector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
		 * Post DescribeMetricSet
		 * @return {DescribeMetricSetResponse} Success
		 */
		DescribeMetricSet(requestBody: DescribeMetricSetPostBody): Observable<DescribeMetricSetResponse> {
			return this.http.post<DescribeMetricSetResponse>(this.baseUri + 'DescribeMetricSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detects an Amazon S3 dataset's file format, interval, and offset.
		 * Post DetectMetricSetConfig
		 * @return {DetectMetricSetConfigResponse} Success
		 */
		DetectMetricSetConfig(requestBody: DetectMetricSetConfigPostBody): Observable<DetectMetricSetConfigResponse> {
			return this.http.post<DetectMetricSetConfigResponse>(this.baseUri + 'DetectMetricSetConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns details about a group of anomalous metrics.
		 * Post GetAnomalyGroup
		 * @return {GetAnomalyGroupResponse} Success
		 */
		GetAnomalyGroup(requestBody: GetAnomalyGroupPostBody): Observable<GetAnomalyGroupResponse> {
			return this.http.post<GetAnomalyGroupResponse>(this.baseUri + 'GetAnomalyGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns details about the requested data quality metrics.
		 * Post GetDataQualityMetrics
		 * @return {GetDataQualityMetricsResponse} Success
		 */
		GetDataQualityMetrics(requestBody: GetDataQualityMetricsPostBody): Observable<GetDataQualityMetricsResponse> {
			return this.http.post<GetDataQualityMetricsResponse>(this.baseUri + 'GetDataQualityMetrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get feedback for an anomaly group.
		 * Post GetFeedback
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetFeedbackResponse} Success
		 */
		GetFeedback(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetFeedbackPostBody): Observable<GetFeedbackResponse> {
			return this.http.post<GetFeedbackResponse>(this.baseUri + 'GetFeedback?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a selection of sample records from an Amazon S3 datasource.
		 * Post GetSampleData
		 * @return {GetSampleDataResponse} Success
		 */
		GetSampleData(requestBody: GetSampleDataPostBody): Observable<GetSampleDataResponse> {
			return this.http.post<GetSampleDataResponse>(this.baseUri + 'GetSampleData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
		 * Post ListAlerts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAlertsResponse} Success
		 */
		ListAlerts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAlertsPostBody): Observable<ListAlertsResponse> {
			return this.http.post<ListAlertsResponse>(this.baseUri + 'ListAlerts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
		 * Post ListAnomalyDetectors
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAnomalyDetectorsResponse} Success
		 */
		ListAnomalyDetectors(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAnomalyDetectorsPostBody): Observable<ListAnomalyDetectorsResponse> {
			return this.http.post<ListAnomalyDetectorsResponse>(this.baseUri + 'ListAnomalyDetectors?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of measures that are potential causes or effects of an anomaly group.
		 * Post ListAnomalyGroupRelatedMetrics
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAnomalyGroupRelatedMetricsResponse} Success
		 */
		ListAnomalyGroupRelatedMetrics(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAnomalyGroupRelatedMetricsPostBody): Observable<ListAnomalyGroupRelatedMetricsResponse> {
			return this.http.post<ListAnomalyGroupRelatedMetricsResponse>(this.baseUri + 'ListAnomalyGroupRelatedMetrics?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of anomaly groups.
		 * Post ListAnomalyGroupSummaries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAnomalyGroupSummariesResponse} Success
		 */
		ListAnomalyGroupSummaries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAnomalyGroupSummariesPostBody): Observable<ListAnomalyGroupSummariesResponse> {
			return this.http.post<ListAnomalyGroupSummariesResponse>(this.baseUri + 'ListAnomalyGroupSummaries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of anomalous metrics for a measure in an anomaly group.
		 * Post ListAnomalyGroupTimeSeries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAnomalyGroupTimeSeriesResponse} Success
		 */
		ListAnomalyGroupTimeSeries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAnomalyGroupTimeSeriesPostBody): Observable<ListAnomalyGroupTimeSeriesResponse> {
			return this.http.post<ListAnomalyGroupTimeSeriesResponse>(this.baseUri + 'ListAnomalyGroupTimeSeries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
		 * Post ListMetricSets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMetricSetsResponse} Success
		 */
		ListMetricSets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMetricSetsPostBody): Observable<ListMetricSetsResponse> {
			return this.http.post<ListMetricSetsResponse>(this.baseUri + 'ListMetricSets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The resource's Amazon Resource Name (ARN).
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The resource's Amazon Resource Name (ARN).
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add feedback for an anomalous metric.
		 * Post PutFeedback
		 * @return {PutFeedbackResponse} Success
		 */
		PutFeedback(requestBody: PutFeedbackPostBody): Observable<PutFeedbackResponse> {
			return this.http.post<PutFeedbackResponse>(this.baseUri + 'PutFeedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The resource's Amazon Resource Name (ARN).
		 * @param {Array<string>} tagKeys Keys to remove from the resource's tags.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Make changes to an existing alert.
		 * Post UpdateAlert
		 * @return {UpdateAlertResponse} Success
		 */
		UpdateAlert(requestBody: UpdateAlertPostBody): Observable<UpdateAlertResponse> {
			return this.http.post<UpdateAlertResponse>(this.baseUri + 'UpdateAlert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a detector. After activation, you can only change a detector's ingestion delay and description.
		 * Post UpdateAnomalyDetector
		 * @return {UpdateAnomalyDetectorResponse} Success
		 */
		UpdateAnomalyDetector(requestBody: UpdateAnomalyDetectorPostBody): Observable<UpdateAnomalyDetectorResponse> {
			return this.http.post<UpdateAnomalyDetectorResponse>(this.baseUri + 'UpdateAnomalyDetector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a dataset.
		 * Post UpdateMetricSet
		 * @return {UpdateMetricSetResponse} Success
		 */
		UpdateMetricSet(requestBody: UpdateMetricSetPostBody): Observable<UpdateMetricSetResponse> {
			return this.http.post<UpdateMetricSetResponse>(this.baseUri + 'UpdateMetricSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface ActivateAnomalyDetectorPostBody {

		/**
		 * The ARN of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;
	}
	export interface ActivateAnomalyDetectorPostBodyFormProperties {

		/**
		 * The ARN of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateActivateAnomalyDetectorPostBodyFormGroup() {
		return new FormGroup<ActivateAnomalyDetectorPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
		});

	}

	export interface BackTestAnomalyDetectorPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;
	}
	export interface BackTestAnomalyDetectorPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateBackTestAnomalyDetectorPostBodyFormGroup() {
		return new FormGroup<BackTestAnomalyDetectorPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
		});

	}

	export interface CreateAlertPostBody {

		/**
		 * The name of the alert.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AlertName: string;

		/**
		 * An integer from 0 to 100 specifying the alert sensitivity threshold.
		 * Minimum: 0
		 * Maximum: 100
		 */
		AlertSensitivityThreshold?: number | null;

		/**
		 * A description of the alert.
		 * Max length: 256
		 */
		AlertDescription?: string | null;

		/**
		 * The ARN of the detector to which the alert is attached.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;

		/**
		 * A configuration that specifies the action to perform when anomalies are detected.
		 * Required
		 */
		Action: CreateAlertPostBodyAction;

		/** A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the alert. */
		Tags?: {[id: string]: string };

		/** The configuration of the alert filters. */
		AlertFilters?: CreateAlertPostBodyAlertFilters;
	}
	export interface CreateAlertPostBodyFormProperties {

		/**
		 * The name of the alert.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AlertName: FormControl<string | null | undefined>,

		/**
		 * An integer from 0 to 100 specifying the alert sensitivity threshold.
		 * Minimum: 0
		 * Maximum: 100
		 */
		AlertSensitivityThreshold: FormControl<number | null | undefined>,

		/**
		 * A description of the alert.
		 * Max length: 256
		 */
		AlertDescription: FormControl<string | null | undefined>,

		/**
		 * The ARN of the detector to which the alert is attached.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/** A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the alert. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAlertPostBodyFormGroup() {
		return new FormGroup<CreateAlertPostBodyFormProperties>({
			AlertName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			AlertSensitivityThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			AlertDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('.*\S.*')]),
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateAlertPostBodyAction {
		SNSConfiguration?: SNSConfiguration;
		LambdaConfiguration?: LambdaConfiguration;
	}
	export interface CreateAlertPostBodyActionFormProperties {
	}
	export function CreateCreateAlertPostBodyActionFormGroup() {
		return new FormGroup<CreateAlertPostBodyActionFormProperties>({
		});

	}

	export interface CreateAlertPostBodyAlertFilters {
		MetricList?: Array<string>;
		DimensionFilterList?: Array<DimensionFilter>;
	}
	export interface CreateAlertPostBodyAlertFiltersFormProperties {
	}
	export function CreateCreateAlertPostBodyAlertFiltersFormGroup() {
		return new FormGroup<CreateAlertPostBodyAlertFiltersFormProperties>({
		});

	}

	export interface CreateAnomalyDetectorPostBody {

		/**
		 * The name of the detector.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AnomalyDetectorName: string;

		/**
		 * A description of the detector.
		 * Max length: 256
		 * Min length: 1
		 */
		AnomalyDetectorDescription?: string | null;

		/**
		 * Contains information about a detector's configuration.
		 * Required
		 */
		AnomalyDetectorConfig: CreateAnomalyDetectorPostBodyAnomalyDetectorConfig;

		/**
		 * The ARN of the KMS key to use to encrypt your data.
		 * Max length: 2048
		 * Min length: 20
		 */
		KmsKeyArn?: string | null;

		/** A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the anomaly detector. */
		Tags?: {[id: string]: string };
	}
	export interface CreateAnomalyDetectorPostBodyFormProperties {

		/**
		 * The name of the detector.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AnomalyDetectorName: FormControl<string | null | undefined>,

		/**
		 * A description of the detector.
		 * Max length: 256
		 * Min length: 1
		 */
		AnomalyDetectorDescription: FormControl<string | null | undefined>,

		/**
		 * The ARN of the KMS key to use to encrypt your data.
		 * Max length: 2048
		 * Min length: 20
		 */
		KmsKeyArn: FormControl<string | null | undefined>,

		/** A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the anomaly detector. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAnomalyDetectorPostBodyFormGroup() {
		return new FormGroup<CreateAnomalyDetectorPostBodyFormProperties>({
			AnomalyDetectorName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			AnomalyDetectorDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('.*\S.*')]),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:aws.*:kms:.*:[0-9]{12}:key/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateAnomalyDetectorPostBodyAnomalyDetectorConfig {
		AnomalyDetectorFrequency?: Frequency;
	}
	export interface CreateAnomalyDetectorPostBodyAnomalyDetectorConfigFormProperties {
		AnomalyDetectorFrequency: FormControl<Frequency | null | undefined>,
	}
	export function CreateCreateAnomalyDetectorPostBodyAnomalyDetectorConfigFormGroup() {
		return new FormGroup<CreateAnomalyDetectorPostBodyAnomalyDetectorConfigFormProperties>({
			AnomalyDetectorFrequency: new FormControl<Frequency | null | undefined>(undefined),
		});

	}

	export interface CreateMetricSetPostBody {

		/**
		 * The ARN of the anomaly detector that will use the dataset.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;

		/**
		 * The name of the dataset.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MetricSetName: string;

		/**
		 * A description of the dataset you are creating.
		 * Max length: 256
		 * Min length: 1
		 */
		MetricSetDescription?: string | null;

		/**
		 * A list of metrics that the dataset will contain.
		 * Required
		 * Minimum items: 1
		 */
		MetricList: Array<Metric>;

		/**
		 * After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.
		 * Minimum: 0
		 * Maximum: 432000
		 */
		Offset?: number | null;

		/** Contains information about the column used to track time in a source data file. */
		TimestampColumn?: CreateMetricSetPostBodyTimestampColumn;

		/**
		 * A list of the fields you want to treat as dimensions.
		 * Minimum items: 1
		 */
		DimensionList?: Array<string>;

		/** The frequency with which the source data will be analyzed for anomalies. */
		MetricSetFrequency?: Frequency | null;

		/**
		 * Contains information about source data used to generate metrics.
		 * Required
		 */
		MetricSource: CreateMetricSetPostBodyMetricSource;

		/**
		 * The time zone in which your source data was recorded.
		 * Max length: 60
		 */
		Timezone?: string | null;

		/** A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the dataset. */
		Tags?: {[id: string]: string };

		/** A list of filters that specify which data is kept for anomaly detection. */
		DimensionFilterList?: Array<MetricSetDimensionFilter>;
	}
	export interface CreateMetricSetPostBodyFormProperties {

		/**
		 * The ARN of the anomaly detector that will use the dataset.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/**
		 * The name of the dataset.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MetricSetName: FormControl<string | null | undefined>,

		/**
		 * A description of the dataset you are creating.
		 * Max length: 256
		 * Min length: 1
		 */
		MetricSetDescription: FormControl<string | null | undefined>,

		/**
		 * After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.
		 * Minimum: 0
		 * Maximum: 432000
		 */
		Offset: FormControl<number | null | undefined>,

		/** The frequency with which the source data will be analyzed for anomalies. */
		MetricSetFrequency: FormControl<Frequency | null | undefined>,

		/**
		 * The time zone in which your source data was recorded.
		 * Max length: 60
		 */
		Timezone: FormControl<string | null | undefined>,

		/** A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the dataset. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateMetricSetPostBodyFormGroup() {
		return new FormGroup<CreateMetricSetPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
			MetricSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			MetricSetDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('.*\S.*')]),
			Offset: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(432000)]),
			MetricSetFrequency: new FormControl<Frequency | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(60), Validators.pattern('.*\S.*')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateMetricSetPostBodyTimestampColumn {
		ColumnName?: string;
		ColumnFormat?: string;
	}
	export interface CreateMetricSetPostBodyTimestampColumnFormProperties {
		ColumnName: FormControl<string | null | undefined>,
		ColumnFormat: FormControl<string | null | undefined>,
	}
	export function CreateCreateMetricSetPostBodyTimestampColumnFormGroup() {
		return new FormGroup<CreateMetricSetPostBodyTimestampColumnFormProperties>({
			ColumnName: new FormControl<string | null | undefined>(undefined),
			ColumnFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMetricSetPostBodyMetricSource {

		/** Contains information about the configuration of the S3 bucket that contains source files. */
		S3SourceConfig?: S3SourceConfig;
		AppFlowConfig?: AppFlowConfig;
		CloudWatchConfig?: CloudWatchConfig;
		RDSSourceConfig?: RDSSourceConfig;
		RedshiftSourceConfig?: RedshiftSourceConfig;
		AthenaSourceConfig?: AthenaSourceConfig;
	}
	export interface CreateMetricSetPostBodyMetricSourceFormProperties {
	}
	export function CreateCreateMetricSetPostBodyMetricSourceFormGroup() {
		return new FormGroup<CreateMetricSetPostBodyMetricSourceFormProperties>({
		});

	}

	export interface DeactivateAnomalyDetectorPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;
	}
	export interface DeactivateAnomalyDetectorPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeactivateAnomalyDetectorPostBodyFormGroup() {
		return new FormGroup<DeactivateAnomalyDetectorPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
		});

	}

	export interface DeleteAlertPostBody {

		/**
		 * The ARN of the alert to delete.
		 * Required
		 * Max length: 256
		 */
		AlertArn: string;
	}
	export interface DeleteAlertPostBodyFormProperties {

		/**
		 * The ARN of the alert to delete.
		 * Required
		 * Max length: 256
		 */
		AlertArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAlertPostBodyFormGroup() {
		return new FormGroup<DeleteAlertPostBodyFormProperties>({
			AlertArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
		});

	}

	export interface DeleteAnomalyDetectorPostBody {

		/**
		 * The ARN of the detector to delete.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;
	}
	export interface DeleteAnomalyDetectorPostBodyFormProperties {

		/**
		 * The ARN of the detector to delete.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAnomalyDetectorPostBodyFormGroup() {
		return new FormGroup<DeleteAnomalyDetectorPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
		});

	}

	export interface DescribeAlertPostBody {

		/**
		 * The ARN of the alert to describe.
		 * Required
		 * Max length: 256
		 */
		AlertArn: string;
	}
	export interface DescribeAlertPostBodyFormProperties {

		/**
		 * The ARN of the alert to describe.
		 * Required
		 * Max length: 256
		 */
		AlertArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAlertPostBodyFormGroup() {
		return new FormGroup<DescribeAlertPostBodyFormProperties>({
			AlertArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
		});

	}

	export interface DescribeAnomalyDetectionExecutionsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;

		/**
		 * The timestamp of the anomaly detection job.
		 * Max length: 60
		 */
		Timestamp?: string | null;

		/**
		 * The number of items to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeAnomalyDetectionExecutionsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/**
		 * The timestamp of the anomaly detection job.
		 * Max length: 60
		 */
		Timestamp: FormControl<string | null | undefined>,

		/**
		 * The number of items to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAnomalyDetectionExecutionsPostBodyFormGroup() {
		return new FormGroup<DescribeAnomalyDetectionExecutionsPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
			Timestamp: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(60), Validators.pattern('^([12]\d{3})-(1[0-2]|0[1-9])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d):([0-5]\d)(Z|(\+|\-)(0\d|1[0-2]):([0-5]\d)(\[[[:alnum:]\/\_]+\])?)$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(3000), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DescribeAnomalyDetectorPostBody {

		/**
		 * The ARN of the detector to describe.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;
	}
	export interface DescribeAnomalyDetectorPostBodyFormProperties {

		/**
		 * The ARN of the detector to describe.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAnomalyDetectorPostBodyFormGroup() {
		return new FormGroup<DescribeAnomalyDetectorPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
		});

	}

	export interface DescribeMetricSetPostBody {

		/**
		 * The ARN of the dataset.
		 * Required
		 * Max length: 256
		 */
		MetricSetArn: string;
	}
	export interface DescribeMetricSetPostBodyFormProperties {

		/**
		 * The ARN of the dataset.
		 * Required
		 * Max length: 256
		 */
		MetricSetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMetricSetPostBodyFormGroup() {
		return new FormGroup<DescribeMetricSetPostBodyFormProperties>({
			MetricSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
		});

	}

	export interface DetectMetricSetConfigPostBody {

		/**
		 * An anomaly detector ARN.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;

		/**
		 * An auto detection metric source.
		 * Required
		 */
		AutoDetectionMetricSource: DetectMetricSetConfigPostBodyAutoDetectionMetricSource;
	}
	export interface DetectMetricSetConfigPostBodyFormProperties {

		/**
		 * An anomaly detector ARN.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateDetectMetricSetConfigPostBodyFormGroup() {
		return new FormGroup<DetectMetricSetConfigPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
		});

	}

	export interface DetectMetricSetConfigPostBodyAutoDetectionMetricSource {
		S3SourceConfig?: AutoDetectionS3SourceConfig;
	}
	export interface DetectMetricSetConfigPostBodyAutoDetectionMetricSourceFormProperties {
	}
	export function CreateDetectMetricSetConfigPostBodyAutoDetectionMetricSourceFormGroup() {
		return new FormGroup<DetectMetricSetConfigPostBodyAutoDetectionMetricSourceFormProperties>({
		});

	}

	export interface GetAnomalyGroupPostBody {

		/**
		 * The ID of the anomaly group.
		 * Required
		 * Max length: 63
		 */
		AnomalyGroupId: string;

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;
	}
	export interface GetAnomalyGroupPostBodyFormProperties {

		/**
		 * The ID of the anomaly group.
		 * Required
		 * Max length: 63
		 */
		AnomalyGroupId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreateGetAnomalyGroupPostBodyFormGroup() {
		return new FormGroup<GetAnomalyGroupPostBodyFormProperties>({
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}')]),
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
		});

	}

	export interface GetDataQualityMetricsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector that you want to investigate.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;

		/**
		 * The Amazon Resource Name (ARN) of a specific data quality metric set.
		 * Max length: 256
		 */
		MetricSetArn?: string | null;
	}
	export interface GetDataQualityMetricsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector that you want to investigate.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of a specific data quality metric set.
		 * Max length: 256
		 */
		MetricSetArn: FormControl<string | null | undefined>,
	}
	export function CreateGetDataQualityMetricsPostBodyFormGroup() {
		return new FormGroup<GetDataQualityMetricsPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
			MetricSetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
		});

	}

	export interface GetFeedbackPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;

		/**
		 * An anomalous metric in an anomaly group.
		 * Required
		 */
		AnomalyGroupTimeSeriesFeedback: GetFeedbackPostBodyAnomalyGroupTimeSeriesFeedback;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface GetFeedbackPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetFeedbackPostBodyFormGroup() {
		return new FormGroup<GetFeedbackPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(3000), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetFeedbackPostBodyAnomalyGroupTimeSeriesFeedback {
		AnomalyGroupId?: string;
		TimeSeriesId?: string;
	}
	export interface GetFeedbackPostBodyAnomalyGroupTimeSeriesFeedbackFormProperties {
		AnomalyGroupId: FormControl<string | null | undefined>,
		TimeSeriesId: FormControl<string | null | undefined>,
	}
	export function CreateGetFeedbackPostBodyAnomalyGroupTimeSeriesFeedbackFormGroup() {
		return new FormGroup<GetFeedbackPostBodyAnomalyGroupTimeSeriesFeedbackFormProperties>({
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined),
			TimeSeriesId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSampleDataPostBody {

		/** Contains information about the source configuration in Amazon S3. */
		S3SourceConfig?: GetSampleDataPostBodyS3SourceConfig;
	}
	export interface GetSampleDataPostBodyFormProperties {
	}
	export function CreateGetSampleDataPostBodyFormGroup() {
		return new FormGroup<GetSampleDataPostBodyFormProperties>({
		});

	}

	export interface GetSampleDataPostBodyS3SourceConfig {
		RoleArn?: string;
		TemplatedPathList?: Array<string>;
		HistoricalDataPathList?: Array<string>;

		/** Contains information about a source file's formatting. */
		FileFormatDescriptor?: FileFormatDescriptor;
	}
	export interface GetSampleDataPostBodyS3SourceConfigFormProperties {
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateGetSampleDataPostBodyS3SourceConfigFormGroup() {
		return new FormGroup<GetSampleDataPostBodyS3SourceConfigFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAlertsPostBody {

		/**
		 * The ARN of the alert's detector.
		 * Max length: 256
		 */
		AnomalyDetectorArn?: string | null;

		/**
		 * If the result of the previous request is truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results that will be displayed by the request.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListAlertsPostBodyFormProperties {

		/**
		 * The ARN of the alert's detector.
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/**
		 * If the result of the previous request is truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results that will be displayed by the request.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAlertsPostBodyFormGroup() {
		return new FormGroup<ListAlertsPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(3000), Validators.pattern('.*\S.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListAnomalyDetectorsPostBody {

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListAnomalyDetectorsPostBodyFormProperties {

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalyDetectorsPostBodyFormGroup() {
		return new FormGroup<ListAnomalyDetectorsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(3000), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListAnomalyGroupRelatedMetricsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;

		/**
		 * The ID of the anomaly group.
		 * Required
		 * Max length: 63
		 */
		AnomalyGroupId: string;

		/** Filter for potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>) or downstream effects (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>) of the anomaly group. */
		RelationshipTypeFilter?: RelationshipType | null;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListAnomalyGroupRelatedMetricsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/**
		 * The ID of the anomaly group.
		 * Required
		 * Max length: 63
		 */
		AnomalyGroupId: FormControl<string | null | undefined>,

		/** Filter for potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>) or downstream effects (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>) of the anomaly group. */
		RelationshipTypeFilter: FormControl<RelationshipType | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalyGroupRelatedMetricsPostBodyFormGroup() {
		return new FormGroup<ListAnomalyGroupRelatedMetricsPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}')]),
			RelationshipTypeFilter: new FormControl<RelationshipType | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(3000), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListAnomalyGroupSummariesPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;

		/**
		 * The minimum severity score for inclusion in the output.
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		SensitivityThreshold: number;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListAnomalyGroupSummariesPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/**
		 * The minimum severity score for inclusion in the output.
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		SensitivityThreshold: FormControl<number | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalyGroupSummariesPostBodyFormGroup() {
		return new FormGroup<ListAnomalyGroupSummariesPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
			SensitivityThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(100)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(3000), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListAnomalyGroupTimeSeriesPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;

		/**
		 * The ID of the anomaly group.
		 * Required
		 * Max length: 63
		 */
		AnomalyGroupId: string;

		/**
		 * The name of the measure field.
		 * Required
		 * Max length: 256
		 */
		MetricName: string;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListAnomalyGroupTimeSeriesPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/**
		 * The ID of the anomaly group.
		 * Required
		 * Max length: 63
		 */
		AnomalyGroupId: FormControl<string | null | undefined>,

		/**
		 * The name of the measure field.
		 * Required
		 * Max length: 256
		 */
		MetricName: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalyGroupTimeSeriesPostBodyFormGroup() {
		return new FormGroup<ListAnomalyGroupTimeSeriesPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(3000), Validators.pattern('.*\S.*')]),
		});

	}

	export interface ListMetricSetsPostBody {

		/**
		 * The ARN of the anomaly detector containing the metrics sets to list.
		 * Max length: 256
		 */
		AnomalyDetectorArn?: string | null;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListMetricSetsPostBodyFormProperties {

		/**
		 * The ARN of the anomaly detector containing the metrics sets to list.
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMetricSetsPostBodyFormGroup() {
		return new FormGroup<ListMetricSetsPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(3000), Validators.pattern('.*\S.*')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Tags to apply to the resource. Tag keys and values can contain letters, numbers, spaces, and the following symbols: <code>_.:/=+@-</code>
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Tags to apply to the resource. Tag keys and values can contain letters, numbers, spaces, and the following symbols: <code>_.:/=+@-</code>
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutFeedbackPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;

		/**
		 * Feedback for an anomalous metric.
		 * Required
		 */
		AnomalyGroupTimeSeriesFeedback: PutFeedbackPostBodyAnomalyGroupTimeSeriesFeedback;
	}
	export interface PutFeedbackPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the anomaly detector.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,
	}
	export function CreatePutFeedbackPostBodyFormGroup() {
		return new FormGroup<PutFeedbackPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
		});

	}

	export interface PutFeedbackPostBodyAnomalyGroupTimeSeriesFeedback {
		AnomalyGroupId?: string;
		TimeSeriesId?: string;
		IsAnomaly?: boolean | null;
	}
	export interface PutFeedbackPostBodyAnomalyGroupTimeSeriesFeedbackFormProperties {
		AnomalyGroupId: FormControl<string | null | undefined>,
		TimeSeriesId: FormControl<string | null | undefined>,
		IsAnomaly: FormControl<boolean | null | undefined>,
	}
	export function CreatePutFeedbackPostBodyAnomalyGroupTimeSeriesFeedbackFormGroup() {
		return new FormGroup<PutFeedbackPostBodyAnomalyGroupTimeSeriesFeedbackFormProperties>({
			AnomalyGroupId: new FormControl<string | null | undefined>(undefined),
			TimeSeriesId: new FormControl<string | null | undefined>(undefined),
			IsAnomaly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateAlertPostBody {

		/**
		 * The ARN of the alert to update.
		 * Required
		 * Max length: 256
		 */
		AlertArn: string;

		/**
		 * A description of the alert.
		 * Max length: 256
		 */
		AlertDescription?: string | null;

		/**
		 * An integer from 0 to 100 specifying the alert sensitivity threshold.
		 * Minimum: 0
		 * Maximum: 100
		 */
		AlertSensitivityThreshold?: number | null;

		/** A configuration that specifies the action to perform when anomalies are detected. */
		Action?: UpdateAlertPostBodyAction;

		/** The configuration of the alert filters. */
		AlertFilters?: UpdateAlertPostBodyAlertFilters;
	}
	export interface UpdateAlertPostBodyFormProperties {

		/**
		 * The ARN of the alert to update.
		 * Required
		 * Max length: 256
		 */
		AlertArn: FormControl<string | null | undefined>,

		/**
		 * A description of the alert.
		 * Max length: 256
		 */
		AlertDescription: FormControl<string | null | undefined>,

		/**
		 * An integer from 0 to 100 specifying the alert sensitivity threshold.
		 * Minimum: 0
		 * Maximum: 100
		 */
		AlertSensitivityThreshold: FormControl<number | null | undefined>,
	}
	export function CreateUpdateAlertPostBodyFormGroup() {
		return new FormGroup<UpdateAlertPostBodyFormProperties>({
			AlertArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
			AlertDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('.*\S.*')]),
			AlertSensitivityThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface UpdateAlertPostBodyAction {
		SNSConfiguration?: SNSConfiguration;
		LambdaConfiguration?: LambdaConfiguration;
	}
	export interface UpdateAlertPostBodyActionFormProperties {
	}
	export function CreateUpdateAlertPostBodyActionFormGroup() {
		return new FormGroup<UpdateAlertPostBodyActionFormProperties>({
		});

	}

	export interface UpdateAlertPostBodyAlertFilters {
		MetricList?: Array<string>;
		DimensionFilterList?: Array<DimensionFilter>;
	}
	export interface UpdateAlertPostBodyAlertFiltersFormProperties {
	}
	export function CreateUpdateAlertPostBodyAlertFiltersFormGroup() {
		return new FormGroup<UpdateAlertPostBodyAlertFiltersFormProperties>({
		});

	}

	export interface UpdateAnomalyDetectorPostBody {

		/**
		 * The ARN of the detector to update.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: string;

		/**
		 * The Amazon Resource Name (ARN) of an AWS KMS encryption key.
		 * Max length: 2048
		 * Min length: 20
		 */
		KmsKeyArn?: string | null;

		/**
		 * The updated detector description.
		 * Max length: 256
		 * Min length: 1
		 */
		AnomalyDetectorDescription?: string | null;

		/** Contains information about a detector's configuration. */
		AnomalyDetectorConfig?: UpdateAnomalyDetectorPostBodyAnomalyDetectorConfig;
	}
	export interface UpdateAnomalyDetectorPostBodyFormProperties {

		/**
		 * The ARN of the detector to update.
		 * Required
		 * Max length: 256
		 */
		AnomalyDetectorArn: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an AWS KMS encryption key.
		 * Max length: 2048
		 * Min length: 20
		 */
		KmsKeyArn: FormControl<string | null | undefined>,

		/**
		 * The updated detector description.
		 * Max length: 256
		 * Min length: 1
		 */
		AnomalyDetectorDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnomalyDetectorPostBodyFormGroup() {
		return new FormGroup<UpdateAnomalyDetectorPostBodyFormProperties>({
			AnomalyDetectorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:aws.*:kms:.*:[0-9]{12}:key/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}')]),
			AnomalyDetectorDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateAnomalyDetectorPostBodyAnomalyDetectorConfig {
		AnomalyDetectorFrequency?: Frequency;
	}
	export interface UpdateAnomalyDetectorPostBodyAnomalyDetectorConfigFormProperties {
		AnomalyDetectorFrequency: FormControl<Frequency | null | undefined>,
	}
	export function CreateUpdateAnomalyDetectorPostBodyAnomalyDetectorConfigFormGroup() {
		return new FormGroup<UpdateAnomalyDetectorPostBodyAnomalyDetectorConfigFormProperties>({
			AnomalyDetectorFrequency: new FormControl<Frequency | null | undefined>(undefined),
		});

	}

	export interface UpdateMetricSetPostBody {

		/**
		 * The ARN of the dataset to update.
		 * Required
		 * Max length: 256
		 */
		MetricSetArn: string;

		/**
		 * The dataset's description.
		 * Max length: 256
		 * Min length: 1
		 */
		MetricSetDescription?: string | null;

		/**
		 * The metric list.
		 * Minimum items: 1
		 */
		MetricList?: Array<Metric>;

		/**
		 * After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.
		 * Minimum: 0
		 * Maximum: 432000
		 */
		Offset?: number | null;

		/** Contains information about the column used to track time in a source data file. */
		TimestampColumn?: UpdateMetricSetPostBodyTimestampColumn;

		/**
		 * The dimension list.
		 * Minimum items: 1
		 */
		DimensionList?: Array<string>;

		/** The dataset's interval. */
		MetricSetFrequency?: Frequency | null;

		/** Contains information about source data used to generate metrics. */
		MetricSource?: UpdateMetricSetPostBodyMetricSource;

		/** Describes a list of filters for choosing specific dimensions and specific values. Each filter consists of the dimension and one of its values that you want to include. When multiple dimensions or values are specified, the dimensions are joined with an AND operation and the values are joined with an OR operation. */
		DimensionFilterList?: Array<MetricSetDimensionFilter>;
	}
	export interface UpdateMetricSetPostBodyFormProperties {

		/**
		 * The ARN of the dataset to update.
		 * Required
		 * Max length: 256
		 */
		MetricSetArn: FormControl<string | null | undefined>,

		/**
		 * The dataset's description.
		 * Max length: 256
		 * Min length: 1
		 */
		MetricSetDescription: FormControl<string | null | undefined>,

		/**
		 * After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.
		 * Minimum: 0
		 * Maximum: 432000
		 */
		Offset: FormControl<number | null | undefined>,

		/** The dataset's interval. */
		MetricSetFrequency: FormControl<Frequency | null | undefined>,
	}
	export function CreateUpdateMetricSetPostBodyFormGroup() {
		return new FormGroup<UpdateMetricSetPostBodyFormProperties>({
			MetricSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):.*:.*:.*:.+')]),
			MetricSetDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('.*\S.*')]),
			Offset: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(432000)]),
			MetricSetFrequency: new FormControl<Frequency | null | undefined>(undefined),
		});

	}

	export interface UpdateMetricSetPostBodyTimestampColumn {
		ColumnName?: string;
		ColumnFormat?: string;
	}
	export interface UpdateMetricSetPostBodyTimestampColumnFormProperties {
		ColumnName: FormControl<string | null | undefined>,
		ColumnFormat: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMetricSetPostBodyTimestampColumnFormGroup() {
		return new FormGroup<UpdateMetricSetPostBodyTimestampColumnFormProperties>({
			ColumnName: new FormControl<string | null | undefined>(undefined),
			ColumnFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMetricSetPostBodyMetricSource {

		/** Contains information about the configuration of the S3 bucket that contains source files. */
		S3SourceConfig?: S3SourceConfig;
		AppFlowConfig?: AppFlowConfig;
		CloudWatchConfig?: CloudWatchConfig;
		RDSSourceConfig?: RDSSourceConfig;
		RedshiftSourceConfig?: RedshiftSourceConfig;
		AthenaSourceConfig?: AthenaSourceConfig;
	}
	export interface UpdateMetricSetPostBodyMetricSourceFormProperties {
	}
	export function CreateUpdateMetricSetPostBodyMetricSourceFormGroup() {
		return new FormGroup<UpdateMetricSetPostBodyMetricSourceFormProperties>({
		});

	}

}

