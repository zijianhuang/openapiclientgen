import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateBatchLoadTaskResponse {

		/** Required */
		TaskId: string;
	}
	export interface CreateBatchLoadTaskResponseFormProperties {

		/** Required */
		TaskId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchLoadTaskResponseFormGroup() {
		return new FormGroup<CreateBatchLoadTaskResponseFormProperties>({
			TaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBatchLoadTaskRequest {
		ClientToken?: string;

		/** <p/> */
		DataModelConfiguration?: DataModelConfiguration;

		/** Required */
		DataSourceConfiguration: DataSourceConfiguration;

		/**
		 * Report configuration for a batch load task. This contains details about where error reports are stored.
		 * Required
		 */
		ReportConfiguration: ReportConfiguration;

		/** Required */
		TargetDatabaseName: string;

		/** Required */
		TargetTableName: string;
		RecordVersion?: number | null;
	}
	export interface CreateBatchLoadTaskRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		TargetDatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TargetTableName: FormControl<string | null | undefined>,
		RecordVersion: FormControl<number | null | undefined>,
	}
	export function CreateCreateBatchLoadTaskRequestFormGroup() {
		return new FormGroup<CreateBatchLoadTaskRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			TargetDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecordVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DataModelConfiguration {
		DataModel?: DataModel;
		DataModelS3Configuration?: DataModelS3Configuration;
	}

	/** <p/> */
	export interface DataModelConfigurationFormProperties {
	}
	export function CreateDataModelConfigurationFormGroup() {
		return new FormGroup<DataModelConfigurationFormProperties>({
		});

	}


	/** Data model for a batch load task. */
	export interface DataModel {
		TimeColumn?: string;
		TimeUnit?: TimeUnit;

		/** Required */
		DimensionMappings: Array<DimensionMapping>;
		MultiMeasureMappings?: MultiMeasureMappings;
		MixedMeasureMappings?: Array<MixedMeasureMapping>;
		MeasureNameColumn?: string;
	}

	/** Data model for a batch load task. */
	export interface DataModelFormProperties {
		TimeColumn: FormControl<string | null | undefined>,
		TimeUnit: FormControl<TimeUnit | null | undefined>,
		MeasureNameColumn: FormControl<string | null | undefined>,
	}
	export function CreateDataModelFormGroup() {
		return new FormGroup<DataModelFormProperties>({
			TimeColumn: new FormControl<string | null | undefined>(undefined),
			TimeUnit: new FormControl<TimeUnit | null | undefined>(undefined),
			MeasureNameColumn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TimeUnit { MILLISECONDS = 0, SECONDS = 1, MICROSECONDS = 2, NANOSECONDS = 3 }


	/** <p/> */
	export interface DimensionMapping {
		SourceColumn?: string;
		DestinationColumn?: string;
	}

	/** <p/> */
	export interface DimensionMappingFormProperties {
		SourceColumn: FormControl<string | null | undefined>,
		DestinationColumn: FormControl<string | null | undefined>,
	}
	export function CreateDimensionMappingFormGroup() {
		return new FormGroup<DimensionMappingFormProperties>({
			SourceColumn: new FormControl<string | null | undefined>(undefined),
			DestinationColumn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface MultiMeasureMappings {
		TargetMultiMeasureName?: string;

		/** Required */
		MultiMeasureAttributeMappings: Array<MultiMeasureAttributeMapping>;
	}

	/** <p/> */
	export interface MultiMeasureMappingsFormProperties {
		TargetMultiMeasureName: FormControl<string | null | undefined>,
	}
	export function CreateMultiMeasureMappingsFormGroup() {
		return new FormGroup<MultiMeasureMappingsFormProperties>({
			TargetMultiMeasureName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface MultiMeasureAttributeMapping {

		/** Required */
		SourceColumn: string;
		TargetMultiMeasureAttributeName?: string;
		MeasureValueType?: ScalarMeasureValueType;
	}

	/** <p/> */
	export interface MultiMeasureAttributeMappingFormProperties {

		/** Required */
		SourceColumn: FormControl<string | null | undefined>,
		TargetMultiMeasureAttributeName: FormControl<string | null | undefined>,
		MeasureValueType: FormControl<ScalarMeasureValueType | null | undefined>,
	}
	export function CreateMultiMeasureAttributeMappingFormGroup() {
		return new FormGroup<MultiMeasureAttributeMappingFormProperties>({
			SourceColumn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetMultiMeasureAttributeName: new FormControl<string | null | undefined>(undefined),
			MeasureValueType: new FormControl<ScalarMeasureValueType | null | undefined>(undefined),
		});

	}

	export enum ScalarMeasureValueType { DOUBLE = 0, BIGINT = 1, BOOLEAN = 2, VARCHAR = 3, TIMESTAMP = 4 }


	/** <p/> */
	export interface MixedMeasureMapping {
		MeasureName?: string;
		SourceColumn?: string;
		TargetMeasureName?: string;

		/** Required */
		MeasureValueType: MeasureValueType;
		MultiMeasureAttributeMappings?: Array<MultiMeasureAttributeMapping>;
	}

	/** <p/> */
	export interface MixedMeasureMappingFormProperties {
		MeasureName: FormControl<string | null | undefined>,
		SourceColumn: FormControl<string | null | undefined>,
		TargetMeasureName: FormControl<string | null | undefined>,

		/** Required */
		MeasureValueType: FormControl<MeasureValueType | null | undefined>,
	}
	export function CreateMixedMeasureMappingFormGroup() {
		return new FormGroup<MixedMeasureMappingFormProperties>({
			MeasureName: new FormControl<string | null | undefined>(undefined),
			SourceColumn: new FormControl<string | null | undefined>(undefined),
			TargetMeasureName: new FormControl<string | null | undefined>(undefined),
			MeasureValueType: new FormControl<MeasureValueType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MeasureValueType { DOUBLE = 0, BIGINT = 1, VARCHAR = 2, BOOLEAN = 3, TIMESTAMP = 4, MULTI = 5 }


	/** <p/> */
	export interface DataModelS3Configuration {
		BucketName?: string;
		ObjectKey?: string;
	}

	/** <p/> */
	export interface DataModelS3ConfigurationFormProperties {
		BucketName: FormControl<string | null | undefined>,
		ObjectKey: FormControl<string | null | undefined>,
	}
	export function CreateDataModelS3ConfigurationFormGroup() {
		return new FormGroup<DataModelS3ConfigurationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			ObjectKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines configuration details about the data source. */
	export interface DataSourceConfiguration {

		/** Required */
		DataSourceS3Configuration: DataSourceS3Configuration;

		/** A delimited data format where the column separator can be a comma and the record separator is a newline character. */
		CsvConfiguration?: CsvConfiguration;

		/** Required */
		DataFormat: BatchLoadDataFormat;
	}

	/** Defines configuration details about the data source. */
	export interface DataSourceConfigurationFormProperties {

		/** Required */
		DataFormat: FormControl<BatchLoadDataFormat | null | undefined>,
	}
	export function CreateDataSourceConfigurationFormGroup() {
		return new FormGroup<DataSourceConfigurationFormProperties>({
			DataFormat: new FormControl<BatchLoadDataFormat | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**   */
	export interface DataSourceS3Configuration {

		/** Required */
		BucketName: string;
		ObjectKeyPrefix?: string;
	}

	/**   */
	export interface DataSourceS3ConfigurationFormProperties {

		/** Required */
		BucketName: FormControl<string | null | undefined>,
		ObjectKeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceS3ConfigurationFormGroup() {
		return new FormGroup<DataSourceS3ConfigurationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectKeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A delimited data format where the column separator can be a comma and the record separator is a newline character. */
	export interface CsvConfiguration {
		ColumnSeparator?: string;
		EscapeChar?: string;
		QuoteChar?: string;
		NullValue?: string;
		TrimWhiteSpace?: boolean | null;
	}

	/** A delimited data format where the column separator can be a comma and the record separator is a newline character. */
	export interface CsvConfigurationFormProperties {
		ColumnSeparator: FormControl<string | null | undefined>,
		EscapeChar: FormControl<string | null | undefined>,
		QuoteChar: FormControl<string | null | undefined>,
		NullValue: FormControl<string | null | undefined>,
		TrimWhiteSpace: FormControl<boolean | null | undefined>,
	}
	export function CreateCsvConfigurationFormGroup() {
		return new FormGroup<CsvConfigurationFormProperties>({
			ColumnSeparator: new FormControl<string | null | undefined>(undefined),
			EscapeChar: new FormControl<string | null | undefined>(undefined),
			QuoteChar: new FormControl<string | null | undefined>(undefined),
			NullValue: new FormControl<string | null | undefined>(undefined),
			TrimWhiteSpace: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum BatchLoadDataFormat { CSV = 0 }


	/** Report configuration for a batch load task. This contains details about where error reports are stored. */
	export interface ReportConfiguration {
		ReportS3Configuration?: ReportS3Configuration;
	}

	/** Report configuration for a batch load task. This contains details about where error reports are stored. */
	export interface ReportConfigurationFormProperties {
	}
	export function CreateReportConfigurationFormGroup() {
		return new FormGroup<ReportConfigurationFormProperties>({
		});

	}


	/** <p/> */
	export interface ReportS3Configuration {

		/** Required */
		BucketName: string;
		ObjectKeyPrefix?: string;
		EncryptionOption?: S3EncryptionOption;
		KmsKeyId?: string;
	}

	/** <p/> */
	export interface ReportS3ConfigurationFormProperties {

		/** Required */
		BucketName: FormControl<string | null | undefined>,
		ObjectKeyPrefix: FormControl<string | null | undefined>,
		EncryptionOption: FormControl<S3EncryptionOption | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateReportS3ConfigurationFormGroup() {
		return new FormGroup<ReportS3ConfigurationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectKeyPrefix: new FormControl<string | null | undefined>(undefined),
			EncryptionOption: new FormControl<S3EncryptionOption | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum S3EncryptionOption { SSE_S3 = 0, SSE_KMS = 1 }

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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface InvalidEndpointException {
	}
	export interface InvalidEndpointExceptionFormProperties {
	}
	export function CreateInvalidEndpointExceptionFormGroup() {
		return new FormGroup<InvalidEndpointExceptionFormProperties>({
		});

	}

	export interface CreateDatabaseResponse {
		Database?: Database;
	}
	export interface CreateDatabaseResponseFormProperties {
	}
	export function CreateCreateDatabaseResponseFormGroup() {
		return new FormGroup<CreateDatabaseResponseFormProperties>({
		});

	}


	/** A top-level container for a table. Databases and tables are the fundamental management concepts in Amazon Timestream. All tables in a database are encrypted with the same KMS key. */
	export interface Database {
		Arn?: string;
		DatabaseName?: string;
		TableCount?: number | null;
		KmsKeyId?: string;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
	}

	/** A top-level container for a table. Databases and tables are the fundamental management concepts in Amazon Timestream. All tables in a database are encrypted with the same KMS key. */
	export interface DatabaseFormProperties {
		Arn: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		TableCount: FormControl<number | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableCount: new FormControl<number | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateDatabaseRequest {

		/** Required */
		DatabaseName: string;
		KmsKeyId?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateDatabaseRequestFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatabaseRequestFormGroup() {
		return new FormGroup<CreateDatabaseRequestFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. With tags, you can categorize databases and/or tables, for example, by purpose, owner, or environment.  */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/**  A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. With tags, you can categorize databases and/or tables, for example, by purpose, owner, or environment.  */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTableResponse {
		Table?: Table;
	}
	export interface CreateTableResponseFormProperties {
	}
	export function CreateCreateTableResponseFormGroup() {
		return new FormGroup<CreateTableResponseFormProperties>({
		});

	}


	/** Represents a database table in Timestream. Tables contain one or more related time series. You can modify the retention duration of the memory store and the magnetic store for a table.  */
	export interface Table {
		Arn?: string;
		TableName?: string;
		DatabaseName?: string;
		TableStatus?: TableStatus;
		RetentionProperties?: RetentionProperties;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
		MagneticStoreWriteProperties?: MagneticStoreWriteProperties;
		Schema?: Schema;
	}

	/** Represents a database table in Timestream. Tables contain one or more related time series. You can modify the retention duration of the memory store and the magnetic store for a table.  */
	export interface TableFormProperties {
		Arn: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		TableStatus: FormControl<TableStatus | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateTableFormGroup() {
		return new FormGroup<TableFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableStatus: new FormControl<TableStatus | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum TableStatus { ACTIVE = 0, DELETING = 1, RESTORING = 2 }


	/** Retention properties contain the duration for which your time-series data must be stored in the magnetic store and the memory store.  */
	export interface RetentionProperties {

		/** Required */
		MemoryStoreRetentionPeriodInHours: number;

		/** Required */
		MagneticStoreRetentionPeriodInDays: number;
	}

	/** Retention properties contain the duration for which your time-series data must be stored in the magnetic store and the memory store.  */
	export interface RetentionPropertiesFormProperties {

		/** Required */
		MemoryStoreRetentionPeriodInHours: FormControl<number | null | undefined>,

		/** Required */
		MagneticStoreRetentionPeriodInDays: FormControl<number | null | undefined>,
	}
	export function CreateRetentionPropertiesFormGroup() {
		return new FormGroup<RetentionPropertiesFormProperties>({
			MemoryStoreRetentionPeriodInHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MagneticStoreRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The set of properties on a table for configuring magnetic store writes. */
	export interface MagneticStoreWriteProperties {

		/** Required */
		EnableMagneticStoreWrites: boolean;
		MagneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocation;
	}

	/** The set of properties on a table for configuring magnetic store writes. */
	export interface MagneticStoreWritePropertiesFormProperties {

		/** Required */
		EnableMagneticStoreWrites: FormControl<boolean | null | undefined>,
	}
	export function CreateMagneticStoreWritePropertiesFormGroup() {
		return new FormGroup<MagneticStoreWritePropertiesFormProperties>({
			EnableMagneticStoreWrites: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The location to write error reports for records rejected, asynchronously, during magnetic store writes. */
	export interface MagneticStoreRejectedDataLocation {
		S3Configuration?: S3Configuration;
	}

	/** The location to write error reports for records rejected, asynchronously, during magnetic store writes. */
	export interface MagneticStoreRejectedDataLocationFormProperties {
	}
	export function CreateMagneticStoreRejectedDataLocationFormGroup() {
		return new FormGroup<MagneticStoreRejectedDataLocationFormProperties>({
		});

	}


	/** The configuration that specifies an S3 location. */
	export interface S3Configuration {
		BucketName?: string;
		ObjectKeyPrefix?: string;
		EncryptionOption?: S3EncryptionOption;
		KmsKeyId?: string;
	}

	/** The configuration that specifies an S3 location. */
	export interface S3ConfigurationFormProperties {
		BucketName: FormControl<string | null | undefined>,
		ObjectKeyPrefix: FormControl<string | null | undefined>,
		EncryptionOption: FormControl<S3EncryptionOption | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateS3ConfigurationFormGroup() {
		return new FormGroup<S3ConfigurationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			ObjectKeyPrefix: new FormControl<string | null | undefined>(undefined),
			EncryptionOption: new FormControl<S3EncryptionOption | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A Schema specifies the expected data model of the table.  */
	export interface Schema {
		CompositePartitionKey?: Array<PartitionKey>;
	}

	/**  A Schema specifies the expected data model of the table.  */
	export interface SchemaFormProperties {
	}
	export function CreateSchemaFormGroup() {
		return new FormGroup<SchemaFormProperties>({
		});

	}


	/**  An attribute used in partitioning data in a table. A dimension key partitions data using the values of the dimension specified by the dimension-name as partition key, while a measure key partitions data using measure names (values of the 'measure_name' column).  */
	export interface PartitionKey {

		/** Required */
		Type: PartitionKeyType;
		Name?: string;
		EnforcementInRecord?: PartitionKeyEnforcementLevel;
	}

	/**  An attribute used in partitioning data in a table. A dimension key partitions data using the values of the dimension specified by the dimension-name as partition key, while a measure key partitions data using measure names (values of the 'measure_name' column).  */
	export interface PartitionKeyFormProperties {

		/** Required */
		Type: FormControl<PartitionKeyType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		EnforcementInRecord: FormControl<PartitionKeyEnforcementLevel | null | undefined>,
	}
	export function CreatePartitionKeyFormGroup() {
		return new FormGroup<PartitionKeyFormProperties>({
			Type: new FormControl<PartitionKeyType | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			EnforcementInRecord: new FormControl<PartitionKeyEnforcementLevel | null | undefined>(undefined),
		});

	}

	export enum PartitionKeyType { DIMENSION = 0, MEASURE = 1 }

	export enum PartitionKeyEnforcementLevel { REQUIRED = 0, OPTIONAL = 1 }

	export interface CreateTableRequest {

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		RetentionProperties?: RetentionProperties;
		Tags?: Array<Tag>;
		MagneticStoreWriteProperties?: MagneticStoreWriteProperties;
		Schema?: Schema;
	}
	export interface CreateTableRequestFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateCreateTableRequestFormGroup() {
		return new FormGroup<CreateTableRequestFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDatabaseRequest {

		/** Required */
		DatabaseName: string;
	}
	export interface DeleteDatabaseRequestFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatabaseRequestFormGroup() {
		return new FormGroup<DeleteDatabaseRequestFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTableRequest {

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
	}
	export interface DeleteTableRequestFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTableRequestFormGroup() {
		return new FormGroup<DeleteTableRequestFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeBatchLoadTaskResponse {

		/** Required */
		BatchLoadTaskDescription: BatchLoadTaskDescription;
	}
	export interface DescribeBatchLoadTaskResponseFormProperties {
	}
	export function CreateDescribeBatchLoadTaskResponseFormGroup() {
		return new FormGroup<DescribeBatchLoadTaskResponseFormProperties>({
		});

	}


	/** Details about a batch load task. */
	export interface BatchLoadTaskDescription {
		TaskId?: string;
		ErrorMessage?: string;
		DataSourceConfiguration?: DataSourceConfiguration;
		ProgressReport?: BatchLoadProgressReport;
		ReportConfiguration?: ReportConfiguration;
		DataModelConfiguration?: DataModelConfiguration;
		TargetDatabaseName?: string;
		TargetTableName?: string;
		TaskStatus?: BatchLoadStatus;
		RecordVersion?: number | null;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
		ResumableUntil?: Date;
	}

	/** Details about a batch load task. */
	export interface BatchLoadTaskDescriptionFormProperties {
		TaskId: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		TargetDatabaseName: FormControl<string | null | undefined>,
		TargetTableName: FormControl<string | null | undefined>,
		TaskStatus: FormControl<BatchLoadStatus | null | undefined>,
		RecordVersion: FormControl<number | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		ResumableUntil: FormControl<Date | null | undefined>,
	}
	export function CreateBatchLoadTaskDescriptionFormGroup() {
		return new FormGroup<BatchLoadTaskDescriptionFormProperties>({
			TaskId: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			TargetDatabaseName: new FormControl<string | null | undefined>(undefined),
			TargetTableName: new FormControl<string | null | undefined>(undefined),
			TaskStatus: new FormControl<BatchLoadStatus | null | undefined>(undefined),
			RecordVersion: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			ResumableUntil: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details about the progress of a batch load task. */
	export interface BatchLoadProgressReport {
		RecordsProcessed?: number | null;
		RecordsIngested?: number | null;
		ParseFailures?: number | null;
		RecordIngestionFailures?: number | null;
		FileFailures?: number | null;
		BytesMetered?: number | null;
	}

	/** Details about the progress of a batch load task. */
	export interface BatchLoadProgressReportFormProperties {
		RecordsProcessed: FormControl<number | null | undefined>,
		RecordsIngested: FormControl<number | null | undefined>,
		ParseFailures: FormControl<number | null | undefined>,
		RecordIngestionFailures: FormControl<number | null | undefined>,
		FileFailures: FormControl<number | null | undefined>,
		BytesMetered: FormControl<number | null | undefined>,
	}
	export function CreateBatchLoadProgressReportFormGroup() {
		return new FormGroup<BatchLoadProgressReportFormProperties>({
			RecordsProcessed: new FormControl<number | null | undefined>(undefined),
			RecordsIngested: new FormControl<number | null | undefined>(undefined),
			ParseFailures: new FormControl<number | null | undefined>(undefined),
			RecordIngestionFailures: new FormControl<number | null | undefined>(undefined),
			FileFailures: new FormControl<number | null | undefined>(undefined),
			BytesMetered: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchLoadStatus { CREATED = 0, IN_PROGRESS = 1, FAILED = 2, SUCCEEDED = 3, PROGRESS_STOPPED = 4, PENDING_RESUME = 5 }

	export interface DescribeBatchLoadTaskRequest {

		/** Required */
		TaskId: string;
	}
	export interface DescribeBatchLoadTaskRequestFormProperties {

		/** Required */
		TaskId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBatchLoadTaskRequestFormGroup() {
		return new FormGroup<DescribeBatchLoadTaskRequestFormProperties>({
			TaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDatabaseResponse {
		Database?: Database;
	}
	export interface DescribeDatabaseResponseFormProperties {
	}
	export function CreateDescribeDatabaseResponseFormGroup() {
		return new FormGroup<DescribeDatabaseResponseFormProperties>({
		});

	}

	export interface DescribeDatabaseRequest {

		/** Required */
		DatabaseName: string;
	}
	export interface DescribeDatabaseRequestFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatabaseRequestFormGroup() {
		return new FormGroup<DescribeDatabaseRequestFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEndpointsResponse {

		/** Required */
		Endpoints: Array<Endpoint>;
	}
	export interface DescribeEndpointsResponseFormProperties {
	}
	export function CreateDescribeEndpointsResponseFormGroup() {
		return new FormGroup<DescribeEndpointsResponseFormProperties>({
		});

	}


	/** Represents an available endpoint against which to make API calls against, as well as the TTL for that endpoint. */
	export interface Endpoint {

		/** Required */
		Address: string;

		/** Required */
		CachePeriodInMinutes: number;
	}

	/** Represents an available endpoint against which to make API calls against, as well as the TTL for that endpoint. */
	export interface EndpointFormProperties {

		/** Required */
		Address: FormControl<string | null | undefined>,

		/** Required */
		CachePeriodInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CachePeriodInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEndpointsRequest {
	}
	export interface DescribeEndpointsRequestFormProperties {
	}
	export function CreateDescribeEndpointsRequestFormGroup() {
		return new FormGroup<DescribeEndpointsRequestFormProperties>({
		});

	}

	export interface DescribeTableResponse {
		Table?: Table;
	}
	export interface DescribeTableResponseFormProperties {
	}
	export function CreateDescribeTableResponseFormGroup() {
		return new FormGroup<DescribeTableResponseFormProperties>({
		});

	}

	export interface DescribeTableRequest {

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
	}
	export interface DescribeTableRequestFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTableRequestFormGroup() {
		return new FormGroup<DescribeTableRequestFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListBatchLoadTasksResponse {
		NextToken?: string;
		BatchLoadTasks?: Array<BatchLoadTask>;
	}
	export interface ListBatchLoadTasksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBatchLoadTasksResponseFormGroup() {
		return new FormGroup<ListBatchLoadTasksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a batch load task. */
	export interface BatchLoadTask {
		TaskId?: string;
		TaskStatus?: BatchLoadStatus;
		DatabaseName?: string;
		TableName?: string;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
		ResumableUntil?: Date;
	}

	/** Details about a batch load task. */
	export interface BatchLoadTaskFormProperties {
		TaskId: FormControl<string | null | undefined>,
		TaskStatus: FormControl<BatchLoadStatus | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		ResumableUntil: FormControl<Date | null | undefined>,
	}
	export function CreateBatchLoadTaskFormGroup() {
		return new FormGroup<BatchLoadTaskFormProperties>({
			TaskId: new FormControl<string | null | undefined>(undefined),
			TaskStatus: new FormControl<BatchLoadStatus | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			ResumableUntil: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListBatchLoadTasksRequest {
		NextToken?: string;
		MaxResults?: number | null;
		TaskStatus?: BatchLoadStatus;
	}
	export interface ListBatchLoadTasksRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		TaskStatus: FormControl<BatchLoadStatus | null | undefined>,
	}
	export function CreateListBatchLoadTasksRequestFormGroup() {
		return new FormGroup<ListBatchLoadTasksRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			TaskStatus: new FormControl<BatchLoadStatus | null | undefined>(undefined),
		});

	}

	export interface ListDatabasesResponse {
		Databases?: Array<Database>;
		NextToken?: string;
	}
	export interface ListDatabasesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatabasesResponseFormGroup() {
		return new FormGroup<ListDatabasesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatabasesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDatabasesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatabasesRequestFormGroup() {
		return new FormGroup<ListDatabasesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTablesResponse {
		Tables?: Array<Table>;
		NextToken?: string;
	}
	export interface ListTablesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTablesResponseFormGroup() {
		return new FormGroup<ListTablesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTablesRequest {
		DatabaseName?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTablesRequestFormProperties {
		DatabaseName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTablesRequestFormGroup() {
		return new FormGroup<ListTablesRequestFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResumeBatchLoadTaskResponse {
	}
	export interface ResumeBatchLoadTaskResponseFormProperties {
	}
	export function CreateResumeBatchLoadTaskResponseFormGroup() {
		return new FormGroup<ResumeBatchLoadTaskResponseFormProperties>({
		});

	}

	export interface ResumeBatchLoadTaskRequest {

		/** Required */
		TaskId: string;
	}
	export interface ResumeBatchLoadTaskRequestFormProperties {

		/** Required */
		TaskId: FormControl<string | null | undefined>,
	}
	export function CreateResumeBatchLoadTaskRequestFormGroup() {
		return new FormGroup<ResumeBatchLoadTaskRequestFormProperties>({
			TaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDatabaseResponse {

		/** A top-level container for a table. Databases and tables are the fundamental management concepts in Amazon Timestream. All tables in a database are encrypted with the same KMS key. */
		Database?: Database;
	}
	export interface UpdateDatabaseResponseFormProperties {
	}
	export function CreateUpdateDatabaseResponseFormGroup() {
		return new FormGroup<UpdateDatabaseResponseFormProperties>({
		});

	}

	export interface UpdateDatabaseRequest {

		/** Required */
		DatabaseName: string;

		/** Required */
		KmsKeyId: string;
	}
	export interface UpdateDatabaseRequestFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatabaseRequestFormGroup() {
		return new FormGroup<UpdateDatabaseRequestFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateTableResponse {
		Table?: Table;
	}
	export interface UpdateTableResponseFormProperties {
	}
	export function CreateUpdateTableResponseFormGroup() {
		return new FormGroup<UpdateTableResponseFormProperties>({
		});

	}

	export interface UpdateTableRequest {

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		RetentionProperties?: RetentionProperties;
		MagneticStoreWriteProperties?: MagneticStoreWriteProperties;
		Schema?: Schema;
	}
	export interface UpdateTableRequestFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableRequestFormGroup() {
		return new FormGroup<UpdateTableRequestFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WriteRecordsResponse {
		RecordsIngested?: RecordsIngested;
	}
	export interface WriteRecordsResponseFormProperties {
	}
	export function CreateWriteRecordsResponseFormGroup() {
		return new FormGroup<WriteRecordsResponseFormProperties>({
		});

	}


	/** Information on the records ingested by this request. */
	export interface RecordsIngested {
		Total?: number | null;
		MemoryStore?: number | null;
		MagneticStore?: number | null;
	}

	/** Information on the records ingested by this request. */
	export interface RecordsIngestedFormProperties {
		Total: FormControl<number | null | undefined>,
		MemoryStore: FormControl<number | null | undefined>,
		MagneticStore: FormControl<number | null | undefined>,
	}
	export function CreateRecordsIngestedFormGroup() {
		return new FormGroup<RecordsIngestedFormProperties>({
			Total: new FormControl<number | null | undefined>(undefined),
			MemoryStore: new FormControl<number | null | undefined>(undefined),
			MagneticStore: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WriteRecordsRequest {

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		CommonAttributes?: Record;

		/** Required */
		Records: Array<Record>;
	}
	export interface WriteRecordsRequestFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateWriteRecordsRequestFormGroup() {
		return new FormGroup<WriteRecordsRequestFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Represents a time-series data point being written into Timestream. Each record contains an array of dimensions. Dimensions represent the metadata attributes of a time-series data point, such as the instance name or Availability Zone of an EC2 instance. A record also contains the measure name, which is the name of the measure being collected (for example, the CPU utilization of an EC2 instance). Additionally, a record contains the measure value and the value type, which is the data type of the measure value. Also, the record contains the timestamp of when the measure was collected and the timestamp unit, which represents the granularity of the timestamp. </p> <p> Records have a <code>Version</code> field, which is a 64-bit <code>long</code> that you can use for updating data points. Writes of a duplicate record with the same dimension, timestamp, and measure name but different measure value will only succeed if the <code>Version</code> attribute of the record in the write request is higher than that of the existing record. Timestream defaults to a <code>Version</code> of <code>1</code> for records without the <code>Version</code> field. </p> */
	export interface Record {
		Dimensions?: Array<Dimension>;
		MeasureName?: string;
		MeasureValue?: string;
		MeasureValueType?: MeasureValueType;
		Time?: string;
		TimeUnit?: TimeUnit;
		Version?: number | null;
		MeasureValues?: Array<MeasureValue>;
	}

	/** <p>Represents a time-series data point being written into Timestream. Each record contains an array of dimensions. Dimensions represent the metadata attributes of a time-series data point, such as the instance name or Availability Zone of an EC2 instance. A record also contains the measure name, which is the name of the measure being collected (for example, the CPU utilization of an EC2 instance). Additionally, a record contains the measure value and the value type, which is the data type of the measure value. Also, the record contains the timestamp of when the measure was collected and the timestamp unit, which represents the granularity of the timestamp. </p> <p> Records have a <code>Version</code> field, which is a 64-bit <code>long</code> that you can use for updating data points. Writes of a duplicate record with the same dimension, timestamp, and measure name but different measure value will only succeed if the <code>Version</code> attribute of the record in the write request is higher than that of the existing record. Timestream defaults to a <code>Version</code> of <code>1</code> for records without the <code>Version</code> field. </p> */
	export interface RecordFormProperties {
		MeasureName: FormControl<string | null | undefined>,
		MeasureValue: FormControl<string | null | undefined>,
		MeasureValueType: FormControl<MeasureValueType | null | undefined>,
		Time: FormControl<string | null | undefined>,
		TimeUnit: FormControl<TimeUnit | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
			MeasureName: new FormControl<string | null | undefined>(undefined),
			MeasureValue: new FormControl<string | null | undefined>(undefined),
			MeasureValueType: new FormControl<MeasureValueType | null | undefined>(undefined),
			Time: new FormControl<string | null | undefined>(undefined),
			TimeUnit: new FormControl<TimeUnit | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the metadata attributes of the time series. For example, the name and Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions.  */
	export interface Dimension {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
		DimensionValueType?: DimensionValueType;
	}

	/** Represents the metadata attributes of the time series. For example, the name and Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions.  */
	export interface DimensionFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
		DimensionValueType: FormControl<DimensionValueType | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DimensionValueType: new FormControl<DimensionValueType | null | undefined>(undefined),
		});

	}

	export enum DimensionValueType { VARCHAR = 0 }


	/** <p> Represents the data attribute of the time series. For example, the CPU utilization of an EC2 instance or the RPM of a wind turbine are measures. MeasureValue has both name and value. </p> <p> MeasureValue is only allowed for type <code>MULTI</code>. Using <code>MULTI</code> type, you can pass multiple data attributes associated with the same time series in a single record </p> */
	export interface MeasureValue {

		/** Required */
		Name: string;

		/** Required */
		Value: string;

		/** Required */
		Type: MeasureValueType;
	}

	/** <p> Represents the data attribute of the time series. For example, the CPU utilization of an EC2 instance or the RPM of a wind turbine are measures. MeasureValue has both name and value. </p> <p> MeasureValue is only allowed for type <code>MULTI</code>. Using <code>MULTI</code> type, you can pass multiple data attributes associated with the same time series in a single record </p> */
	export interface MeasureValueFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<MeasureValueType | null | undefined>,
	}
	export function CreateMeasureValueFormGroup() {
		return new FormGroup<MeasureValueFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<MeasureValueType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RejectedRecordsException {
	}
	export interface RejectedRecordsExceptionFormProperties {
	}
	export function CreateRejectedRecordsExceptionFormGroup() {
		return new FormGroup<RejectedRecordsExceptionFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new Timestream batch load task. A batch load task processes data from a CSV source in an S3 location and writes to a Timestream table. A mapping from source to target is defined in a batch load task. Errors and events are written to a report at an S3 location. For the report, if the KMS key is not specified, the report will be encrypted with an S3 managed key when <code>SSE_S3</code> is the option. Otherwise an error is thrown. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-batch-load.html">code sample</a>.
		 * Post #X-Amz-Target=Timestream_20181101.CreateBatchLoadTask
		 * @return {CreateBatchLoadTaskResponse} Success
		 */
		CreateBatchLoadTask(requestBody: CreateBatchLoadTaskRequest): Observable<CreateBatchLoadTaskResponse> {
			return this.http.post<CreateBatchLoadTaskResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html">code sample</a>.
		 * Post #X-Amz-Target=Timestream_20181101.CreateDatabase
		 * @return {CreateDatabaseResponse} Success
		 */
		CreateDatabase(requestBody: CreateDatabaseRequest): Observable<CreateDatabaseResponse> {
			return this.http.post<CreateDatabaseResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.CreateDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html">code sample</a> for details.
		 * Post #X-Amz-Target=Timestream_20181101.CreateTable
		 * @return {CreateTableResponse} Success
		 */
		CreateTable(requestBody: CreateTableRequest): Observable<CreateTableResponse> {
			return this.http.post<CreateTableResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.CreateTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a given Timestream database. <i>This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered.</i> </p> <note> <p>All tables in the database must be deleted first, or a ValidationException error will be thrown. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html">code sample</a> for details.</p>
		 * Post #X-Amz-Target=Timestream_20181101.DeleteDatabase
		 * @return {void} Success
		 */
		DeleteDatabase(requestBody: DeleteDatabaseRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Timestream_20181101.DeleteDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time-series data stored in the table cannot be recovered. </p> <note> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code sample</a> for details.</p>
		 * Post #X-Amz-Target=Timestream_20181101.DeleteTable
		 * @return {void} Success
		 */
		DeleteTable(requestBody: DeleteTableRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Timestream_20181101.DeleteTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about the batch load task, including configurations, mappings, progress, and other details. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-batch-load.html">code sample</a> for details.
		 * Post #X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask
		 * @return {DescribeBatchLoadTaskResponse} Success
		 */
		DescribeBatchLoadTask(requestBody: DescribeBatchLoadTaskRequest): Observable<DescribeBatchLoadTaskResponse> {
			return this.http.post<DescribeBatchLoadTaskResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-db.html">code sample</a> for details.
		 * Post #X-Amz-Target=Timestream_20181101.DescribeDatabase
		 * @return {DescribeDatabaseResponse} Success
		 */
		DescribeDatabase(requestBody: DescribeDatabaseRequest): Observable<DescribeDatabaseResponse> {
			return this.http.post<DescribeDatabaseResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.DescribeDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of available endpoints to make Timestream API calls against. This API operation is available through both the Write and Query APIs.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>we don't recommend that you use this API operation unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream</a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>
		 * Post #X-Amz-Target=Timestream_20181101.DescribeEndpoints
		 * @return {DescribeEndpointsResponse} Success
		 */
		DescribeEndpoints(requestBody: DescribeEndpointsRequest): Observable<DescribeEndpointsResponse> {
			return this.http.post<DescribeEndpointsResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.DescribeEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-table.html">code sample</a> for details.
		 * Post #X-Amz-Target=Timestream_20181101.DescribeTable
		 * @return {DescribeTableResponse} Success
		 */
		DescribeTable(requestBody: DescribeTableRequest): Observable<DescribeTableResponse> {
			return this.http.post<DescribeTableResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.DescribeTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of batch load tasks, along with the name, status, when the task is resumable until, and other details. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-batch-load-tasks.html">code sample</a> for details.
		 * Post #X-Amz-Target=Timestream_20181101.ListBatchLoadTasks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBatchLoadTasksResponse} Success
		 */
		ListBatchLoadTasks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListBatchLoadTasksRequest): Observable<ListBatchLoadTasksResponse> {
			return this.http.post<ListBatchLoadTasksResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of your Timestream databases. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-db.html">code sample</a> for details.
		 * Post #X-Amz-Target=Timestream_20181101.ListDatabases
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatabasesResponse} Success
		 */
		ListDatabases(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatabasesRequest): Observable<ListDatabasesResponse> {
			return this.http.post<ListDatabasesResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.ListDatabases?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of tables, along with the name, status, and retention properties of each table. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html">code sample</a> for details.
		 * Post #X-Amz-Target=Timestream_20181101.ListTables
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTablesResponse} Success
		 */
		ListTables(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTablesRequest): Observable<ListTablesResponse> {
			return this.http.post<ListTablesResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.ListTables?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags on a Timestream resource.
		 * Post #X-Amz-Target=Timestream_20181101.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post #X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask
		 * @return {ResumeBatchLoadTaskResponse} Success
		 */
		ResumeBatchLoadTask(requestBody: ResumeBatchLoadTaskRequest): Observable<ResumeBatchLoadTaskResponse> {
			return this.http.post<ResumeBatchLoadTaskResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking.
		 * Post #X-Amz-Target=Timestream_20181101.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the association of tags from a Timestream resource.
		 * Post #X-Amz-Target=Timestream_20181101.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>). If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-db.html">code sample</a> for details.</p>
		 * Post #X-Amz-Target=Timestream_20181101.UpdateDatabase
		 * @return {UpdateDatabaseResponse} Success
		 */
		UpdateDatabase(requestBody: UpdateDatabaseRequest): Observable<UpdateDatabaseResponse> {
			return this.http.post<UpdateDatabaseResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.UpdateDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-table.html">code sample</a> for details.</p>
		 * Post #X-Amz-Target=Timestream_20181101.UpdateTable
		 * @return {UpdateTableResponse} Success
		 */
		UpdateTable(requestBody: UpdateTableRequest): Observable<UpdateTableResponse> {
			return this.http.post<UpdateTableResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.UpdateTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. </p> <p>Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for details.</p> <p> <b>Upserts</b> </p> <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to update data points. Timestream tracks a version number with each record. <code>Version</code> defaults to <code>1</code> when it's not specified for the record in the request. Timestream updates an existing record’s measure value along with its <code>Version</code> when it receives a write request with a higher <code>Version</code> number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates <code>Version</code>, if it is greater than the existing value of <code>Version</code>. You can update a data point as many times as desired, as long as the value of <code>Version</code> continuously increases. </p> <p> For example, suppose you write a new record without indicating <code>Version</code> in the request. Timestream stores this record, and set <code>Version</code> to <code>1</code>. Now, suppose you try to update this record with a <code>WriteRecords</code> request of the same record with a different measure value but, like before, do not provide <code>Version</code>. In this case, Timestream will reject this update with a <code>RejectedRecordsException</code> since the updated record’s version is not greater than the existing value of Version. </p> <p>However, if you were to resend the update request with <code>Version</code> set to <code>2</code>, Timestream would then succeed in updating the record’s value, and the <code>Version</code> would be set to <code>2</code>. Next, suppose you sent a <code>WriteRecords</code> request with this same record and an identical measure value, but with <code>Version</code> set to <code>3</code>. In this case, Timestream would only update <code>Version</code> to <code>3</code>. Any further updates would need to send a version number greater than <code>3</code>, or the update requests would receive a <code>RejectedRecordsException</code>. </p>
		 * Post #X-Amz-Target=Timestream_20181101.WriteRecords
		 * @return {WriteRecordsResponse} Success
		 */
		WriteRecords(requestBody: WriteRecordsRequest): Observable<WriteRecordsResponse> {
			return this.http.post<WriteRecordsResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.WriteRecords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateBatchLoadTaskX_Amz_Target { 'Timestream_20181101.CreateBatchLoadTask' = 0 }

	export enum CreateDatabaseX_Amz_Target { 'Timestream_20181101.CreateDatabase' = 0 }

	export enum CreateTableX_Amz_Target { 'Timestream_20181101.CreateTable' = 0 }

	export enum DeleteDatabaseX_Amz_Target { 'Timestream_20181101.DeleteDatabase' = 0 }

	export enum DeleteTableX_Amz_Target { 'Timestream_20181101.DeleteTable' = 0 }

	export enum DescribeBatchLoadTaskX_Amz_Target { 'Timestream_20181101.DescribeBatchLoadTask' = 0 }

	export enum DescribeDatabaseX_Amz_Target { 'Timestream_20181101.DescribeDatabase' = 0 }

	export enum DescribeEndpointsX_Amz_Target { 'Timestream_20181101.DescribeEndpoints' = 0 }

	export enum DescribeTableX_Amz_Target { 'Timestream_20181101.DescribeTable' = 0 }

	export enum ListBatchLoadTasksX_Amz_Target { 'Timestream_20181101.ListBatchLoadTasks' = 0 }

	export enum ListDatabasesX_Amz_Target { 'Timestream_20181101.ListDatabases' = 0 }

	export enum ListTablesX_Amz_Target { 'Timestream_20181101.ListTables' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'Timestream_20181101.ListTagsForResource' = 0 }

	export enum ResumeBatchLoadTaskX_Amz_Target { 'Timestream_20181101.ResumeBatchLoadTask' = 0 }

	export enum TagResourceX_Amz_Target { 'Timestream_20181101.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'Timestream_20181101.UntagResource' = 0 }

	export enum UpdateDatabaseX_Amz_Target { 'Timestream_20181101.UpdateDatabase' = 0 }

	export enum UpdateTableX_Amz_Target { 'Timestream_20181101.UpdateTable' = 0 }

	export enum WriteRecordsX_Amz_Target { 'Timestream_20181101.WriteRecords' = 0 }

}

