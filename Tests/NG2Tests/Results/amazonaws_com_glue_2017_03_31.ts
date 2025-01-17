import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchCreatePartitionResponse {
		Errors?: Array<PartitionError>;
	}
	export interface BatchCreatePartitionResponseFormProperties {
	}
	export function CreateBatchCreatePartitionResponseFormGroup() {
		return new FormGroup<BatchCreatePartitionResponseFormProperties>({
		});

	}


	/** Contains information about a partition error. */
	export interface PartitionError {
		PartitionValues?: Array<string>;

		/** Contains details about an error. */
		ErrorDetail?: ErrorDetail;
	}

	/** Contains information about a partition error. */
	export interface PartitionErrorFormProperties {
	}
	export function CreatePartitionErrorFormGroup() {
		return new FormGroup<PartitionErrorFormProperties>({
		});

	}


	/** Contains details about an error. */
	export interface ErrorDetail {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ErrorCode?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		ErrorMessage?: string | null;
	}

	/** Contains details about an error. */
	export interface ErrorDetailFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ErrorCode: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface BatchCreatePartitionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		PartitionInputList: Array<PartitionInput>;
	}
	export interface BatchCreatePartitionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreatePartitionRequestFormGroup() {
		return new FormGroup<BatchCreatePartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** The structure used to create and update a partition. */
	export interface PartitionInput {
		Values?: Array<string>;
		LastAccessTime?: Date | null;

		/** Describes the physical storage of table data. */
		StorageDescriptor?: StorageDescriptor;
		Parameters?: ParametersMap;
		LastAnalyzedTime?: Date | null;
	}

	/** The structure used to create and update a partition. */
	export interface PartitionInputFormProperties {
		LastAccessTime: FormControl<Date | null | undefined>,
		LastAnalyzedTime: FormControl<Date | null | undefined>,
	}
	export function CreatePartitionInputFormGroup() {
		return new FormGroup<PartitionInputFormProperties>({
			LastAccessTime: new FormControl<Date | null | undefined>(undefined),
			LastAnalyzedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the physical storage of table data. */
	export interface StorageDescriptor {
		Columns?: Array<Column>;

		/** Max length: 2056 */
		Location?: string | null;

		/** Max length: 128 */
		InputFormat?: string | null;

		/** Max length: 128 */
		OutputFormat?: string | null;
		Compressed?: boolean | null;
		NumberOfBuckets?: number | null;

		/** Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader. */
		SerdeInfo?: SerDeInfo;
		BucketColumns?: Array<string>;
		SortColumns?: Array<Order>;
		Parameters?: ParametersMap;

		/** Specifies skewed values in a table. Skewed values are those that occur with very high frequency. */
		SkewedInfo?: SkewedInfo;
		StoredAsSubDirectories?: boolean | null;
	}

	/** Describes the physical storage of table data. */
	export interface StorageDescriptorFormProperties {

		/** Max length: 2056 */
		Location: FormControl<string | null | undefined>,

		/** Max length: 128 */
		InputFormat: FormControl<string | null | undefined>,

		/** Max length: 128 */
		OutputFormat: FormControl<string | null | undefined>,
		Compressed: FormControl<boolean | null | undefined>,
		NumberOfBuckets: FormControl<number | null | undefined>,
		StoredAsSubDirectories: FormControl<boolean | null | undefined>,
	}
	export function CreateStorageDescriptorFormGroup() {
		return new FormGroup<StorageDescriptorFormProperties>({
			Location: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2056)]),
			InputFormat: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			OutputFormat: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			Compressed: new FormControl<boolean | null | undefined>(undefined),
			NumberOfBuckets: new FormControl<number | null | undefined>(undefined),
			StoredAsSubDirectories: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A column in a <code>Table</code>. */
	export interface Column {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 131072
		 * Min length: 0
		 */
		Type?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		Comment?: string | null;
		Parameters?: ParametersMap;
	}

	/** A column in a <code>Table</code>. */
	export interface ColumnFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 131072
		 * Min length: 0
		 */
		Type: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateColumnFormGroup() {
		return new FormGroup<ColumnFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(131072)]),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface ParametersMap {
	}
	export interface ParametersMapFormProperties {
	}
	export function CreateParametersMapFormGroup() {
		return new FormGroup<ParametersMapFormProperties>({
		});

	}


	/** Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader. */
	export interface SerDeInfo {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SerializationLibrary?: string | null;
		Parameters?: ParametersMap;
	}

	/** Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader. */
	export interface SerDeInfoFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SerializationLibrary: FormControl<string | null | undefined>,
	}
	export function CreateSerDeInfoFormGroup() {
		return new FormGroup<SerDeInfoFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			SerializationLibrary: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** Specifies the sort order of a sorted column. */
	export interface Order {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Column: string;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		SortOrder: number;
	}

	/** Specifies the sort order of a sorted column. */
	export interface OrderFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Column: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		SortOrder: FormControl<number | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			Column: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			SortOrder: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
		});

	}


	/** Specifies skewed values in a table. Skewed values are those that occur with very high frequency. */
	export interface SkewedInfo {
		SkewedColumnNames?: Array<string>;
		SkewedColumnValues?: Array<string>;
		SkewedColumnValueLocationMaps?: LocationMap;
	}

	/** Specifies skewed values in a table. Skewed values are those that occur with very high frequency. */
	export interface SkewedInfoFormProperties {
	}
	export function CreateSkewedInfoFormGroup() {
		return new FormGroup<SkewedInfoFormProperties>({
		});

	}

	export interface LocationMap {
	}
	export interface LocationMapFormProperties {
	}
	export function CreateLocationMapFormGroup() {
		return new FormGroup<LocationMapFormProperties>({
		});

	}

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
		});

	}

	export interface AlreadyExistsException {
	}
	export interface AlreadyExistsExceptionFormProperties {
	}
	export function CreateAlreadyExistsExceptionFormGroup() {
		return new FormGroup<AlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ResourceNumberLimitExceededException {
	}
	export interface ResourceNumberLimitExceededExceptionFormProperties {
	}
	export function CreateResourceNumberLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceNumberLimitExceededExceptionFormProperties>({
		});

	}

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
		});

	}

	export interface EntityNotFoundException {
	}
	export interface EntityNotFoundExceptionFormProperties {
	}
	export function CreateEntityNotFoundExceptionFormGroup() {
		return new FormGroup<EntityNotFoundExceptionFormProperties>({
		});

	}

	export interface OperationTimeoutException {
	}
	export interface OperationTimeoutExceptionFormProperties {
	}
	export function CreateOperationTimeoutExceptionFormGroup() {
		return new FormGroup<OperationTimeoutExceptionFormProperties>({
		});

	}

	export interface GlueEncryptionException {
	}
	export interface GlueEncryptionExceptionFormProperties {
	}
	export function CreateGlueEncryptionExceptionFormGroup() {
		return new FormGroup<GlueEncryptionExceptionFormProperties>({
		});

	}

	export interface BatchDeleteConnectionResponse {
		Succeeded?: Array<string>;
		Errors?: ErrorByName;
	}
	export interface BatchDeleteConnectionResponseFormProperties {
	}
	export function CreateBatchDeleteConnectionResponseFormGroup() {
		return new FormGroup<BatchDeleteConnectionResponseFormProperties>({
		});

	}

	export interface ErrorByName {
	}
	export interface ErrorByNameFormProperties {
	}
	export function CreateErrorByNameFormGroup() {
		return new FormGroup<ErrorByNameFormProperties>({
		});

	}

	export interface BatchDeleteConnectionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 25
		 */
		ConnectionNameList: Array<string>;
	}
	export interface BatchDeleteConnectionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteConnectionRequestFormGroup() {
		return new FormGroup<BatchDeleteConnectionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface BatchDeletePartitionResponse {
		Errors?: Array<PartitionError>;
	}
	export interface BatchDeletePartitionResponseFormProperties {
	}
	export function CreateBatchDeletePartitionResponseFormGroup() {
		return new FormGroup<BatchDeletePartitionResponseFormProperties>({
		});

	}

	export interface BatchDeletePartitionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 25
		 */
		PartitionsToDelete: Array<PartitionValueList>;
	}
	export interface BatchDeletePartitionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeletePartitionRequestFormGroup() {
		return new FormGroup<BatchDeletePartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** Contains a list of values defining partitions. */
	export interface PartitionValueList {

		/** Required */
		Values: Array<string>;
	}

	/** Contains a list of values defining partitions. */
	export interface PartitionValueListFormProperties {
	}
	export function CreatePartitionValueListFormGroup() {
		return new FormGroup<PartitionValueListFormProperties>({
		});

	}

	export interface BatchDeleteTableResponse {
		Errors?: Array<TableError>;
	}
	export interface BatchDeleteTableResponseFormProperties {
	}
	export function CreateBatchDeleteTableResponseFormGroup() {
		return new FormGroup<BatchDeleteTableResponseFormProperties>({
		});

	}


	/** An error record for table operations. */
	export interface TableError {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TableName?: string | null;

		/** Contains details about an error. */
		ErrorDetail?: ErrorDetail;
	}

	/** An error record for table operations. */
	export interface TableErrorFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateTableErrorFormGroup() {
		return new FormGroup<TableErrorFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface BatchDeleteTableRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		TablesToDelete: Array<string>;
	}
	export interface BatchDeleteTableRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteTableRequestFormGroup() {
		return new FormGroup<BatchDeleteTableRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface BatchDeleteTableVersionResponse {
		Errors?: Array<TableVersionError>;
	}
	export interface BatchDeleteTableVersionResponseFormProperties {
	}
	export function CreateBatchDeleteTableVersionResponseFormGroup() {
		return new FormGroup<BatchDeleteTableVersionResponseFormProperties>({
		});

	}


	/** An error record for table-version operations. */
	export interface TableVersionError {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TableName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		VersionId?: string | null;

		/** Contains details about an error. */
		ErrorDetail?: ErrorDetail;
	}

	/** An error record for table-version operations. */
	export interface TableVersionErrorFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateTableVersionErrorFormGroup() {
		return new FormGroup<TableVersionErrorFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface BatchDeleteTableVersionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		VersionIds: Array<string>;
	}
	export interface BatchDeleteTableVersionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteTableVersionRequestFormGroup() {
		return new FormGroup<BatchDeleteTableVersionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface BatchGetCrawlersResponse {
		Crawlers?: Array<Crawler>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		CrawlersNotFound?: Array<string>;
	}
	export interface BatchGetCrawlersResponseFormProperties {
	}
	export function CreateBatchGetCrawlersResponseFormGroup() {
		return new FormGroup<BatchGetCrawlersResponseFormProperties>({
		});

	}


	/** Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the AWS Glue Data Catalog. */
	export interface Crawler {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
		Role?: string | null;

		/** Specifies data stores to crawl. */
		Targets?: CrawlerTargets;
		DatabaseName?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;
		Classifiers?: Array<string>;

		/** A policy that specifies update and deletion behaviors for the crawler. */
		SchemaChangePolicy?: SchemaChangePolicy;
		State?: CrawlerState | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		TablePrefix?: string | null;

		/** A scheduling object using a <code>cron</code> statement to schedule an event. */
		Schedule?: Schedule;
		CrawlElapsedTime?: number | null;
		CreationTime?: Date | null;
		LastUpdated?: Date | null;

		/** Status and error information about the most recent crawl. */
		LastCrawl?: LastCrawlInfo;
		Version?: number | null;
		Configuration?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		CrawlerSecurityConfiguration?: string | null;
	}

	/** Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the AWS Glue Data Catalog. */
	export interface CrawlerFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		State: FormControl<CrawlerState | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		TablePrefix: FormControl<string | null | undefined>,
		CrawlElapsedTime: FormControl<number | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		Version: FormControl<number | null | undefined>,
		Configuration: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		CrawlerSecurityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateCrawlerFormGroup() {
		return new FormGroup<CrawlerFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Role: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			State: new FormControl<CrawlerState | null | undefined>(undefined),
			TablePrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			CrawlElapsedTime: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			Configuration: new FormControl<string | null | undefined>(undefined),
			CrawlerSecurityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
		});

	}


	/** Specifies data stores to crawl. */
	export interface CrawlerTargets {
		S3Targets?: Array<S3Target>;
		JdbcTargets?: Array<JdbcTarget>;
		DynamoDBTargets?: Array<DynamoDBTarget>;
		CatalogTargets?: Array<CatalogTarget>;
	}

	/** Specifies data stores to crawl. */
	export interface CrawlerTargetsFormProperties {
	}
	export function CreateCrawlerTargetsFormGroup() {
		return new FormGroup<CrawlerTargetsFormProperties>({
		});

	}


	/** Specifies a data store in Amazon Simple Storage Service (Amazon S3). */
	export interface S3Target {
		Path?: string | null;
		Exclusions?: Array<string>;
	}

	/** Specifies a data store in Amazon Simple Storage Service (Amazon S3). */
	export interface S3TargetFormProperties {
		Path: FormControl<string | null | undefined>,
	}
	export function CreateS3TargetFormGroup() {
		return new FormGroup<S3TargetFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a JDBC data store to crawl. */
	export interface JdbcTarget {
		ConnectionName?: string | null;
		Path?: string | null;
		Exclusions?: Array<string>;
	}

	/** Specifies a JDBC data store to crawl. */
	export interface JdbcTargetFormProperties {
		ConnectionName: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
	}
	export function CreateJdbcTargetFormGroup() {
		return new FormGroup<JdbcTargetFormProperties>({
			ConnectionName: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an Amazon DynamoDB table to crawl. */
	export interface DynamoDBTarget {
		Path?: string | null;
	}

	/** Specifies an Amazon DynamoDB table to crawl. */
	export interface DynamoDBTargetFormProperties {
		Path: FormControl<string | null | undefined>,
	}
	export function CreateDynamoDBTargetFormGroup() {
		return new FormGroup<DynamoDBTargetFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an AWS Glue Data Catalog target. */
	export interface CatalogTarget {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Tables: Array<string>;
	}

	/** Specifies an AWS Glue Data Catalog target. */
	export interface CatalogTargetFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateCatalogTargetFormGroup() {
		return new FormGroup<CatalogTargetFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** A policy that specifies update and deletion behaviors for the crawler. */
	export interface SchemaChangePolicy {
		UpdateBehavior?: SchemaChangePolicyUpdateBehavior | null;
		DeleteBehavior?: SchemaChangePolicyDeleteBehavior | null;
	}

	/** A policy that specifies update and deletion behaviors for the crawler. */
	export interface SchemaChangePolicyFormProperties {
		UpdateBehavior: FormControl<SchemaChangePolicyUpdateBehavior | null | undefined>,
		DeleteBehavior: FormControl<SchemaChangePolicyDeleteBehavior | null | undefined>,
	}
	export function CreateSchemaChangePolicyFormGroup() {
		return new FormGroup<SchemaChangePolicyFormProperties>({
			UpdateBehavior: new FormControl<SchemaChangePolicyUpdateBehavior | null | undefined>(undefined),
			DeleteBehavior: new FormControl<SchemaChangePolicyDeleteBehavior | null | undefined>(undefined),
		});

	}

	export enum SchemaChangePolicyUpdateBehavior { LOG = 0, UPDATE_IN_DATABASE = 1 }

	export enum SchemaChangePolicyDeleteBehavior { LOG = 0, DELETE_FROM_DATABASE = 1, DEPRECATE_IN_DATABASE = 2 }

	export enum CrawlerState { READY = 0, RUNNING = 1, STOPPING = 2 }


	/** A scheduling object using a <code>cron</code> statement to schedule an event. */
	export interface Schedule {
		ScheduleExpression?: string | null;
		State?: ScheduleState | null;
	}

	/** A scheduling object using a <code>cron</code> statement to schedule an event. */
	export interface ScheduleFormProperties {
		ScheduleExpression: FormControl<string | null | undefined>,
		State: FormControl<ScheduleState | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ScheduleState | null | undefined>(undefined),
		});

	}

	export enum ScheduleState { SCHEDULED = 0, NOT_SCHEDULED = 1, TRANSITIONING = 2 }


	/** Status and error information about the most recent crawl. */
	export interface LastCrawlInfo {
		Status?: LastCrawlInfoStatus | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		ErrorMessage?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		LogGroup?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		LogStream?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MessagePrefix?: string | null;
		StartTime?: Date | null;
	}

	/** Status and error information about the most recent crawl. */
	export interface LastCrawlInfoFormProperties {
		Status: FormControl<LastCrawlInfoStatus | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		ErrorMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		LogGroup: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		LogStream: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MessagePrefix: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateLastCrawlInfoFormGroup() {
		return new FormGroup<LastCrawlInfoFormProperties>({
			Status: new FormControl<LastCrawlInfoStatus | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			LogGroup: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('[\.\-_/#A-Za-z0-9]+')]),
			LogStream: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('[^:*]*')]),
			MessagePrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum LastCrawlInfoStatus { SUCCEEDED = 0, CANCELLED = 1, FAILED = 2 }

	export interface BatchGetCrawlersRequest {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		CrawlerNames: Array<string>;
	}
	export interface BatchGetCrawlersRequestFormProperties {
	}
	export function CreateBatchGetCrawlersRequestFormGroup() {
		return new FormGroup<BatchGetCrawlersRequestFormProperties>({
		});

	}

	export interface BatchGetDevEndpointsResponse {
		DevEndpoints?: Array<DevEndpoint>;

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		DevEndpointsNotFound?: Array<string>;
	}
	export interface BatchGetDevEndpointsResponseFormProperties {
	}
	export function CreateBatchGetDevEndpointsResponseFormGroup() {
		return new FormGroup<BatchGetDevEndpointsResponseFormProperties>({
		});

	}


	/** A development endpoint where a developer can remotely debug extract, transform, and load (ETL) scripts. */
	export interface DevEndpoint {
		EndpointName?: string | null;
		RoleArn?: string | null;
		SecurityGroupIds?: Array<string>;
		SubnetId?: string | null;
		YarnEndpointAddress?: string | null;
		PrivateAddress?: string | null;
		ZeppelinRemoteSparkInterpreterPort?: number | null;
		PublicAddress?: string | null;
		Status?: string | null;
		WorkerType?: DevEndpointWorkerType | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion?: string | null;
		NumberOfWorkers?: number | null;
		NumberOfNodes?: number | null;
		AvailabilityZone?: string | null;
		VpcId?: string | null;
		ExtraPythonLibsS3Path?: string | null;
		ExtraJarsS3Path?: string | null;
		FailureReason?: string | null;
		LastUpdateStatus?: string | null;
		CreatedTimestamp?: Date | null;
		LastModifiedTimestamp?: Date | null;
		PublicKey?: string | null;

		/** Maximum items: 5 */
		PublicKeys?: Array<string>;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration?: string | null;
		Arguments?: MapValue;
	}

	/** A development endpoint where a developer can remotely debug extract, transform, and load (ETL) scripts. */
	export interface DevEndpointFormProperties {
		EndpointName: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		YarnEndpointAddress: FormControl<string | null | undefined>,
		PrivateAddress: FormControl<string | null | undefined>,
		ZeppelinRemoteSparkInterpreterPort: FormControl<number | null | undefined>,
		PublicAddress: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		WorkerType: FormControl<DevEndpointWorkerType | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion: FormControl<string | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		ExtraPythonLibsS3Path: FormControl<string | null | undefined>,
		ExtraJarsS3Path: FormControl<string | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		LastUpdateStatus: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastModifiedTimestamp: FormControl<Date | null | undefined>,
		PublicKey: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateDevEndpointFormGroup() {
		return new FormGroup<DevEndpointFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:aws:iam::\d{12}:role/.*')]),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			YarnEndpointAddress: new FormControl<string | null | undefined>(undefined),
			PrivateAddress: new FormControl<string | null | undefined>(undefined),
			ZeppelinRemoteSparkInterpreterPort: new FormControl<number | null | undefined>(undefined),
			PublicAddress: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			WorkerType: new FormControl<DevEndpointWorkerType | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^\w+\.\w+$')]),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			ExtraPythonLibsS3Path: new FormControl<string | null | undefined>(undefined),
			ExtraJarsS3Path: new FormControl<string | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			LastUpdateStatus: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			PublicKey: new FormControl<string | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export enum DevEndpointWorkerType { Standard = 0, 'G.1X' = 1, 'G.2X' = 2 }

	export interface MapValue {
	}
	export interface MapValueFormProperties {
	}
	export function CreateMapValueFormGroup() {
		return new FormGroup<MapValueFormProperties>({
		});

	}

	export interface BatchGetDevEndpointsRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		DevEndpointNames: Array<string>;
	}
	export interface BatchGetDevEndpointsRequestFormProperties {
	}
	export function CreateBatchGetDevEndpointsRequestFormGroup() {
		return new FormGroup<BatchGetDevEndpointsRequestFormProperties>({
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

	export interface BatchGetJobsResponse {
		Jobs?: Array<Job>;
		JobsNotFound?: Array<string>;
	}
	export interface BatchGetJobsResponseFormProperties {
	}
	export function CreateBatchGetJobsResponseFormGroup() {
		return new FormGroup<BatchGetJobsResponseFormProperties>({
		});

	}


	/** Specifies a job definition. */
	export interface Job {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;
		LogUri?: string | null;
		Role?: string | null;
		CreatedOn?: Date | null;
		LastModifiedOn?: Date | null;

		/** An execution property of a job. */
		ExecutionProperty?: ExecutionProperty;

		/** Specifies code executed when a job is run. */
		Command?: JobCommand;
		DefaultArguments?: GenericMap;
		NonOverridableArguments?: GenericMap;

		/** Specifies the connections used by a job. */
		Connections?: ConnectionsList;
		MaxRetries?: number | null;
		AllocatedCapacity?: number | null;

		/** Minimum: 1 */
		Timeout?: number | null;
		MaxCapacity?: number | null;
		WorkerType?: DevEndpointWorkerType | null;
		NumberOfWorkers?: number | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration?: string | null;

		/** Specifies configuration properties of a notification. */
		NotificationProperty?: NotificationProperty;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion?: string | null;
	}

	/** Specifies a job definition. */
	export interface JobFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		LogUri: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		CreatedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
		AllocatedCapacity: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		Timeout: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<DevEndpointWorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion: FormControl<string | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
			AllocatedCapacity: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<DevEndpointWorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			GlueVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^\w+\.\w+$')]),
		});

	}


	/** An execution property of a job. */
	export interface ExecutionProperty {
		MaxConcurrentRuns?: number | null;
	}

	/** An execution property of a job. */
	export interface ExecutionPropertyFormProperties {
		MaxConcurrentRuns: FormControl<number | null | undefined>,
	}
	export function CreateExecutionPropertyFormGroup() {
		return new FormGroup<ExecutionPropertyFormProperties>({
			MaxConcurrentRuns: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies code executed when a job is run. */
	export interface JobCommand {
		Name?: string | null;
		ScriptLocation?: string | null;
		PythonVersion?: string | null;
	}

	/** Specifies code executed when a job is run. */
	export interface JobCommandFormProperties {
		Name: FormControl<string | null | undefined>,
		ScriptLocation: FormControl<string | null | undefined>,
		PythonVersion: FormControl<string | null | undefined>,
	}
	export function CreateJobCommandFormGroup() {
		return new FormGroup<JobCommandFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ScriptLocation: new FormControl<string | null | undefined>(undefined),
			PythonVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[2-3]$')]),
		});

	}

	export interface GenericMap {
	}
	export interface GenericMapFormProperties {
	}
	export function CreateGenericMapFormGroup() {
		return new FormGroup<GenericMapFormProperties>({
		});

	}


	/** Specifies the connections used by a job. */
	export interface ConnectionsList {
		Connections?: Array<string>;
	}

	/** Specifies the connections used by a job. */
	export interface ConnectionsListFormProperties {
	}
	export function CreateConnectionsListFormGroup() {
		return new FormGroup<ConnectionsListFormProperties>({
		});

	}


	/** Specifies configuration properties of a notification. */
	export interface NotificationProperty {

		/** Minimum: 1 */
		NotifyDelayAfter?: number | null;
	}

	/** Specifies configuration properties of a notification. */
	export interface NotificationPropertyFormProperties {

		/** Minimum: 1 */
		NotifyDelayAfter: FormControl<number | null | undefined>,
	}
	export function CreateNotificationPropertyFormGroup() {
		return new FormGroup<NotificationPropertyFormProperties>({
			NotifyDelayAfter: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface BatchGetJobsRequest {

		/** Required */
		JobNames: Array<string>;
	}
	export interface BatchGetJobsRequestFormProperties {
	}
	export function CreateBatchGetJobsRequestFormGroup() {
		return new FormGroup<BatchGetJobsRequestFormProperties>({
		});

	}

	export interface BatchGetPartitionResponse {
		Partitions?: Array<Partition>;

		/**
		 * Minimum items: 0
		 * Maximum items: 1000
		 */
		UnprocessedKeys?: Array<PartitionValueList>;
	}
	export interface BatchGetPartitionResponseFormProperties {
	}
	export function CreateBatchGetPartitionResponseFormGroup() {
		return new FormGroup<BatchGetPartitionResponseFormProperties>({
		});

	}


	/** Represents a slice of table data. */
	export interface Partition {
		Values?: Array<string>;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TableName?: string | null;
		CreationTime?: Date | null;
		LastAccessTime?: Date | null;

		/** Describes the physical storage of table data. */
		StorageDescriptor?: StorageDescriptor;
		Parameters?: ParametersMap;
		LastAnalyzedTime?: Date | null;
	}

	/** Represents a slice of table data. */
	export interface PartitionFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastAccessTime: FormControl<Date | null | undefined>,
		LastAnalyzedTime: FormControl<Date | null | undefined>,
	}
	export function CreatePartitionFormGroup() {
		return new FormGroup<PartitionFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastAccessTime: new FormControl<Date | null | undefined>(undefined),
			LastAnalyzedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface BatchGetPartitionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 1000
		 */
		PartitionsToGet: Array<PartitionValueList>;
	}
	export interface BatchGetPartitionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetPartitionRequestFormGroup() {
		return new FormGroup<BatchGetPartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface BatchGetTriggersResponse {
		Triggers?: Array<Trigger>;
		TriggersNotFound?: Array<string>;
	}
	export interface BatchGetTriggersResponseFormProperties {
	}
	export function CreateBatchGetTriggersResponseFormGroup() {
		return new FormGroup<BatchGetTriggersResponseFormProperties>({
		});

	}


	/** Information about a specific trigger. */
	export interface Trigger {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		WorkflowName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Id?: string | null;
		Type?: TriggerType | null;
		State?: TriggerState | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;
		Schedule?: string | null;
		Actions?: Array<Action>;

		/** Defines the predicate of the trigger, which determines when it fires. */
		Predicate?: Predicate;
	}

	/** Information about a specific trigger. */
	export interface TriggerFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		WorkflowName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		Type: FormControl<TriggerType | null | undefined>,
		State: FormControl<TriggerState | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
	}
	export function CreateTriggerFormGroup() {
		return new FormGroup<TriggerFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			WorkflowName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Type: new FormControl<TriggerType | null | undefined>(undefined),
			State: new FormControl<TriggerState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			Schedule: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TriggerType { SCHEDULED = 0, CONDITIONAL = 1, ON_DEMAND = 2 }

	export enum TriggerState { CREATING = 0, CREATED = 1, ACTIVATING = 2, ACTIVATED = 3, DEACTIVATING = 4, DEACTIVATED = 5, DELETING = 6, UPDATING = 7 }


	/** Defines an action to be initiated by a trigger. */
	export interface Action {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName?: string | null;
		Arguments?: GenericMap;

		/** Minimum: 1 */
		Timeout?: number | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration?: string | null;

		/** Specifies configuration properties of a notification. */
		NotificationProperty?: NotificationProperty;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CrawlerName?: string | null;
	}

	/** Defines an action to be initiated by a trigger. */
	export interface ActionFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		Timeout: FormControl<number | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CrawlerName: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			CrawlerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** Defines the predicate of the trigger, which determines when it fires. */
	export interface Predicate {
		Logical?: PredicateLogical | null;
		Conditions?: Array<Condition>;
	}

	/** Defines the predicate of the trigger, which determines when it fires. */
	export interface PredicateFormProperties {
		Logical: FormControl<PredicateLogical | null | undefined>,
	}
	export function CreatePredicateFormGroup() {
		return new FormGroup<PredicateFormProperties>({
			Logical: new FormControl<PredicateLogical | null | undefined>(undefined),
		});

	}

	export enum PredicateLogical { AND = 0, ANY = 1 }


	/** Defines a condition under which a trigger fires. */
	export interface Condition {
		LogicalOperator?: ConditionLogicalOperator | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName?: string | null;
		State?: ConditionState | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CrawlerName?: string | null;
		CrawlState?: ConditionCrawlState | null;
	}

	/** Defines a condition under which a trigger fires. */
	export interface ConditionFormProperties {
		LogicalOperator: FormControl<ConditionLogicalOperator | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,
		State: FormControl<ConditionState | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CrawlerName: FormControl<string | null | undefined>,
		CrawlState: FormControl<ConditionCrawlState | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			LogicalOperator: new FormControl<ConditionLogicalOperator | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			State: new FormControl<ConditionState | null | undefined>(undefined),
			CrawlerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			CrawlState: new FormControl<ConditionCrawlState | null | undefined>(undefined),
		});

	}

	export enum ConditionLogicalOperator { EQUALS = 0 }

	export enum ConditionState { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3, SUCCEEDED = 4, FAILED = 5, TIMEOUT = 6 }

	export enum ConditionCrawlState { RUNNING = 0, CANCELLING = 1, CANCELLED = 2, SUCCEEDED = 3, FAILED = 4 }

	export interface BatchGetTriggersRequest {

		/** Required */
		TriggerNames: Array<string>;
	}
	export interface BatchGetTriggersRequestFormProperties {
	}
	export function CreateBatchGetTriggersRequestFormGroup() {
		return new FormGroup<BatchGetTriggersRequestFormProperties>({
		});

	}

	export interface BatchGetWorkflowsResponse {

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		Workflows?: Array<Workflow>;

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		MissingWorkflows?: Array<string>;
	}
	export interface BatchGetWorkflowsResponseFormProperties {
	}
	export function CreateBatchGetWorkflowsResponseFormGroup() {
		return new FormGroup<BatchGetWorkflowsResponseFormProperties>({
		});

	}


	/** A workflow represents a flow in which AWS Glue components should be executed to complete a logical task. */
	export interface Workflow {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
		Description?: string | null;
		DefaultRunProperties?: WorkflowRunProperties;
		CreatedOn?: Date | null;
		LastModifiedOn?: Date | null;

		/** A workflow run is an execution of a workflow providing all the runtime information. */
		LastRun?: WorkflowRun;

		/** A workflow graph represents the complete workflow containing all the AWS Glue components present in the workflow and all the directed connections between them. */
		Graph?: WorkflowGraph;
	}

	/** A workflow represents a flow in which AWS Glue components should be executed to complete a logical task. */
	export interface WorkflowFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
	}
	export function CreateWorkflowFormGroup() {
		return new FormGroup<WorkflowFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface WorkflowRunProperties {
	}
	export interface WorkflowRunPropertiesFormProperties {
	}
	export function CreateWorkflowRunPropertiesFormGroup() {
		return new FormGroup<WorkflowRunPropertiesFormProperties>({
		});

	}


	/** A workflow run is an execution of a workflow providing all the runtime information. */
	export interface WorkflowRun {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		WorkflowRunId?: string | null;
		WorkflowRunProperties?: WorkflowRunProperties;
		StartedOn?: Date | null;
		CompletedOn?: Date | null;
		Status?: WorkflowRunStatus | null;

		/** Workflow run statistics provides statistics about the workflow run. */
		Statistics?: WorkflowRunStatistics;

		/** A workflow graph represents the complete workflow containing all the AWS Glue components present in the workflow and all the directed connections between them. */
		Graph?: WorkflowGraph;
	}

	/** A workflow run is an execution of a workflow providing all the runtime information. */
	export interface WorkflowRunFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		WorkflowRunId: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		Status: FormControl<WorkflowRunStatus | null | undefined>,
	}
	export function CreateWorkflowRunFormGroup() {
		return new FormGroup<WorkflowRunFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			WorkflowRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<WorkflowRunStatus | null | undefined>(undefined),
		});

	}

	export enum WorkflowRunStatus { RUNNING = 0, COMPLETED = 1, STOPPING = 2, STOPPED = 3 }


	/** Workflow run statistics provides statistics about the workflow run. */
	export interface WorkflowRunStatistics {
		TotalActions?: number | null;
		TimeoutActions?: number | null;
		FailedActions?: number | null;
		StoppedActions?: number | null;
		SucceededActions?: number | null;
		RunningActions?: number | null;
	}

	/** Workflow run statistics provides statistics about the workflow run. */
	export interface WorkflowRunStatisticsFormProperties {
		TotalActions: FormControl<number | null | undefined>,
		TimeoutActions: FormControl<number | null | undefined>,
		FailedActions: FormControl<number | null | undefined>,
		StoppedActions: FormControl<number | null | undefined>,
		SucceededActions: FormControl<number | null | undefined>,
		RunningActions: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowRunStatisticsFormGroup() {
		return new FormGroup<WorkflowRunStatisticsFormProperties>({
			TotalActions: new FormControl<number | null | undefined>(undefined),
			TimeoutActions: new FormControl<number | null | undefined>(undefined),
			FailedActions: new FormControl<number | null | undefined>(undefined),
			StoppedActions: new FormControl<number | null | undefined>(undefined),
			SucceededActions: new FormControl<number | null | undefined>(undefined),
			RunningActions: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A workflow graph represents the complete workflow containing all the AWS Glue components present in the workflow and all the directed connections between them. */
	export interface WorkflowGraph {
		Nodes?: Array<Node>;
		Edges?: Array<Edge>;
	}

	/** A workflow graph represents the complete workflow containing all the AWS Glue components present in the workflow and all the directed connections between them. */
	export interface WorkflowGraphFormProperties {
	}
	export function CreateWorkflowGraphFormGroup() {
		return new FormGroup<WorkflowGraphFormProperties>({
		});

	}


	/** A node represents an AWS Glue component like Trigger, Job etc. which is part of a workflow. */
	export interface Node {
		Type?: NodeType | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		UniqueId?: string | null;

		/** The details of a Trigger node present in the workflow. */
		TriggerDetails?: TriggerNodeDetails;

		/** The details of a Job node present in the workflow. */
		JobDetails?: JobNodeDetails;

		/** The details of a Crawler node present in the workflow. */
		CrawlerDetails?: CrawlerNodeDetails;
	}

	/** A node represents an AWS Glue component like Trigger, Job etc. which is part of a workflow. */
	export interface NodeFormProperties {
		Type: FormControl<NodeType | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		UniqueId: FormControl<string | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			Type: new FormControl<NodeType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			UniqueId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export enum NodeType { CRAWLER = 0, JOB = 1, TRIGGER = 2 }


	/** The details of a Trigger node present in the workflow. */
	export interface TriggerNodeDetails {

		/** Information about a specific trigger. */
		Trigger?: Trigger;
	}

	/** The details of a Trigger node present in the workflow. */
	export interface TriggerNodeDetailsFormProperties {
	}
	export function CreateTriggerNodeDetailsFormGroup() {
		return new FormGroup<TriggerNodeDetailsFormProperties>({
		});

	}


	/** The details of a Job node present in the workflow. */
	export interface JobNodeDetails {
		JobRuns?: Array<JobRun>;
	}

	/** The details of a Job node present in the workflow. */
	export interface JobNodeDetailsFormProperties {
	}
	export function CreateJobNodeDetailsFormGroup() {
		return new FormGroup<JobNodeDetailsFormProperties>({
		});

	}


	/** Contains information about a job run. */
	export interface JobRun {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Id?: string | null;
		Attempt?: number | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		PreviousRunId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TriggerName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName?: string | null;
		StartedOn?: Date | null;
		LastModifiedOn?: Date | null;
		CompletedOn?: Date | null;
		JobRunState?: ConditionState | null;
		Arguments?: GenericMap;
		ErrorMessage?: string | null;
		PredecessorRuns?: Array<Predecessor>;
		AllocatedCapacity?: number | null;
		ExecutionTime?: number | null;

		/** Minimum: 1 */
		Timeout?: number | null;
		MaxCapacity?: number | null;
		WorkerType?: DevEndpointWorkerType | null;
		NumberOfWorkers?: number | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration?: string | null;
		LogGroupName?: string | null;

		/** Specifies configuration properties of a notification. */
		NotificationProperty?: NotificationProperty;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion?: string | null;
	}

	/** Contains information about a job run. */
	export interface JobRunFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		Attempt: FormControl<number | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		PreviousRunId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TriggerName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		JobRunState: FormControl<ConditionState | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		AllocatedCapacity: FormControl<number | null | undefined>,
		ExecutionTime: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		Timeout: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<DevEndpointWorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration: FormControl<string | null | undefined>,
		LogGroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion: FormControl<string | null | undefined>,
	}
	export function CreateJobRunFormGroup() {
		return new FormGroup<JobRunFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Attempt: new FormControl<number | null | undefined>(undefined),
			PreviousRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			TriggerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			JobRunState: new FormControl<ConditionState | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			AllocatedCapacity: new FormControl<number | null | undefined>(undefined),
			ExecutionTime: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<DevEndpointWorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			LogGroupName: new FormControl<string | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^\w+\.\w+$')]),
		});

	}


	/** A job run that was used in the predicate of a conditional trigger that triggered this job run. */
	export interface Predecessor {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		RunId?: string | null;
	}

	/** A job run that was used in the predicate of a conditional trigger that triggered this job run. */
	export interface PredecessorFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreatePredecessorFormGroup() {
		return new FormGroup<PredecessorFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** The details of a Crawler node present in the workflow. */
	export interface CrawlerNodeDetails {
		Crawls?: Array<Crawl>;
	}

	/** The details of a Crawler node present in the workflow. */
	export interface CrawlerNodeDetailsFormProperties {
	}
	export function CreateCrawlerNodeDetailsFormGroup() {
		return new FormGroup<CrawlerNodeDetailsFormProperties>({
		});

	}


	/** The details of a crawl in the workflow. */
	export interface Crawl {
		State?: ConditionCrawlState | null;
		StartedOn?: Date | null;
		CompletedOn?: Date | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		ErrorMessage?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		LogGroup?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		LogStream?: string | null;
	}

	/** The details of a crawl in the workflow. */
	export interface CrawlFormProperties {
		State: FormControl<ConditionCrawlState | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		ErrorMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		LogGroup: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		LogStream: FormControl<string | null | undefined>,
	}
	export function CreateCrawlFormGroup() {
		return new FormGroup<CrawlFormProperties>({
			State: new FormControl<ConditionCrawlState | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			LogGroup: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('[\.\-_/#A-Za-z0-9]+')]),
			LogStream: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('[^:*]*')]),
		});

	}


	/** An edge represents a directed connection between two AWS Glue components which are part of the workflow the edge belongs to. */
	export interface Edge {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SourceId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DestinationId?: string | null;
	}

	/** An edge represents a directed connection between two AWS Glue components which are part of the workflow the edge belongs to. */
	export interface EdgeFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SourceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DestinationId: FormControl<string | null | undefined>,
	}
	export function CreateEdgeFormGroup() {
		return new FormGroup<EdgeFormProperties>({
			SourceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DestinationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface BatchGetWorkflowsRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		Names: Array<string>;
		IncludeGraph?: boolean | null;
	}
	export interface BatchGetWorkflowsRequestFormProperties {
		IncludeGraph: FormControl<boolean | null | undefined>,
	}
	export function CreateBatchGetWorkflowsRequestFormGroup() {
		return new FormGroup<BatchGetWorkflowsRequestFormProperties>({
			IncludeGraph: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BatchStopJobRunResponse {
		SuccessfulSubmissions?: Array<BatchStopJobRunSuccessfulSubmission>;
		Errors?: Array<BatchStopJobRunError>;
	}
	export interface BatchStopJobRunResponseFormProperties {
	}
	export function CreateBatchStopJobRunResponseFormGroup() {
		return new FormGroup<BatchStopJobRunResponseFormProperties>({
		});

	}


	/** Records a successful request to stop a specified <code>JobRun</code>. */
	export interface BatchStopJobRunSuccessfulSubmission {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobRunId?: string | null;
	}

	/** Records a successful request to stop a specified <code>JobRun</code>. */
	export interface BatchStopJobRunSuccessfulSubmissionFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobRunId: FormControl<string | null | undefined>,
	}
	export function CreateBatchStopJobRunSuccessfulSubmissionFormGroup() {
		return new FormGroup<BatchStopJobRunSuccessfulSubmissionFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			JobRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** Records an error that occurred when attempting to stop a specified job run. */
	export interface BatchStopJobRunError {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobRunId?: string | null;

		/** Contains details about an error. */
		ErrorDetail?: ErrorDetail;
	}

	/** Records an error that occurred when attempting to stop a specified job run. */
	export interface BatchStopJobRunErrorFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobRunId: FormControl<string | null | undefined>,
	}
	export function CreateBatchStopJobRunErrorFormGroup() {
		return new FormGroup<BatchStopJobRunErrorFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			JobRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface BatchStopJobRunRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		JobRunIds: Array<string>;
	}
	export interface BatchStopJobRunRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateBatchStopJobRunRequestFormGroup() {
		return new FormGroup<BatchStopJobRunRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CancelMLTaskRunResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId?: string | null;
		Status?: ConditionState | null;
	}
	export interface CancelMLTaskRunResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId: FormControl<string | null | undefined>,
		Status: FormControl<ConditionState | null | undefined>,
	}
	export function CreateCancelMLTaskRunResponseFormGroup() {
		return new FormGroup<CancelMLTaskRunResponseFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			TaskRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Status: new FormControl<ConditionState | null | undefined>(undefined),
		});

	}

	export interface CancelMLTaskRunRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId: string;
	}
	export interface CancelMLTaskRunRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId: FormControl<string | null | undefined>,
	}
	export function CreateCancelMLTaskRunRequestFormGroup() {
		return new FormGroup<CancelMLTaskRunRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TaskRunId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateClassifierResponse {
	}
	export interface CreateClassifierResponseFormProperties {
	}
	export function CreateCreateClassifierResponseFormGroup() {
		return new FormGroup<CreateClassifierResponseFormProperties>({
		});

	}

	export interface CreateClassifierRequest {

		/** Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create. */
		GrokClassifier?: CreateGrokClassifierRequest;

		/** Specifies an XML classifier for <code>CreateClassifier</code> to create. */
		XMLClassifier?: CreateXMLClassifierRequest;

		/** Specifies a JSON classifier for <code>CreateClassifier</code> to create. */
		JsonClassifier?: CreateJsonClassifierRequest;

		/** Specifies a custom CSV classifier for <code>CreateClassifier</code> to create. */
		CsvClassifier?: CreateCsvClassifierRequest;
	}
	export interface CreateClassifierRequestFormProperties {
	}
	export function CreateCreateClassifierRequestFormGroup() {
		return new FormGroup<CreateClassifierRequestFormProperties>({
		});

	}


	/** Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create. */
	export interface CreateGrokClassifierRequest {

		/** Required */
		Classification: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		GrokPattern: string;

		/**
		 * Max length: 16000
		 * Min length: 0
		 */
		CustomPatterns?: string | null;
	}

	/** Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create. */
	export interface CreateGrokClassifierRequestFormProperties {

		/** Required */
		Classification: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		GrokPattern: FormControl<string | null | undefined>,

		/**
		 * Max length: 16000
		 * Min length: 0
		 */
		CustomPatterns: FormControl<string | null | undefined>,
	}
	export function CreateCreateGrokClassifierRequestFormGroup() {
		return new FormGroup<CreateGrokClassifierRequestFormProperties>({
			Classification: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			GrokPattern: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			CustomPatterns: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(16000)]),
		});

	}


	/** Specifies an XML classifier for <code>CreateClassifier</code> to create. */
	export interface CreateXMLClassifierRequest {

		/** Required */
		Classification: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
		RowTag?: string | null;
	}

	/** Specifies an XML classifier for <code>CreateClassifier</code> to create. */
	export interface CreateXMLClassifierRequestFormProperties {

		/** Required */
		Classification: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		RowTag: FormControl<string | null | undefined>,
	}
	export function CreateCreateXMLClassifierRequestFormGroup() {
		return new FormGroup<CreateXMLClassifierRequestFormProperties>({
			Classification: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			RowTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a JSON classifier for <code>CreateClassifier</code> to create. */
	export interface CreateJsonClassifierRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		JsonPath: string;
	}

	/** Specifies a JSON classifier for <code>CreateClassifier</code> to create. */
	export interface CreateJsonClassifierRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		JsonPath: FormControl<string | null | undefined>,
	}
	export function CreateCreateJsonClassifierRequestFormGroup() {
		return new FormGroup<CreateJsonClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			JsonPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a custom CSV classifier for <code>CreateClassifier</code> to create. */
	export interface CreateCsvClassifierRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		Delimiter?: string | null;

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		QuoteSymbol?: string | null;
		ContainsHeader?: CreateCsvClassifierRequestContainsHeader | null;
		Header?: Array<string>;
		DisableValueTrimming?: boolean | null;
		AllowSingleColumn?: boolean | null;
	}

	/** Specifies a custom CSV classifier for <code>CreateClassifier</code> to create. */
	export interface CreateCsvClassifierRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		Delimiter: FormControl<string | null | undefined>,

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		QuoteSymbol: FormControl<string | null | undefined>,
		ContainsHeader: FormControl<CreateCsvClassifierRequestContainsHeader | null | undefined>,
		DisableValueTrimming: FormControl<boolean | null | undefined>,
		AllowSingleColumn: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateCsvClassifierRequestFormGroup() {
		return new FormGroup<CreateCsvClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Delimiter: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1), Validators.pattern('[^\r\n]')]),
			QuoteSymbol: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1), Validators.pattern('[^\r\n]')]),
			ContainsHeader: new FormControl<CreateCsvClassifierRequestContainsHeader | null | undefined>(undefined),
			DisableValueTrimming: new FormControl<boolean | null | undefined>(undefined),
			AllowSingleColumn: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CreateCsvClassifierRequestContainsHeader { UNKNOWN = 0, PRESENT = 1, ABSENT = 2 }

	export interface CreateConnectionResponse {
	}
	export interface CreateConnectionResponseFormProperties {
	}
	export function CreateCreateConnectionResponseFormGroup() {
		return new FormGroup<CreateConnectionResponseFormProperties>({
		});

	}

	export interface CreateConnectionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * A structure that is used to specify a connection to create or update.
		 * Required
		 */
		ConnectionInput: ConnectionInput;
	}
	export interface CreateConnectionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionRequestFormGroup() {
		return new FormGroup<CreateConnectionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** A structure that is used to specify a connection to create or update. */
	export interface ConnectionInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;

		/** Required */
		ConnectionType: ConnectionInputConnectionType;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		MatchCriteria?: Array<string>;

		/** Required */
		ConnectionProperties: ConnectionProperties;

		/** Specifies the physical requirements for a connection. */
		PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
	}

	/** A structure that is used to specify a connection to create or update. */
	export interface ConnectionInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Required */
		ConnectionType: FormControl<ConnectionInputConnectionType | null | undefined>,
	}
	export function CreateConnectionInputFormGroup() {
		return new FormGroup<ConnectionInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			ConnectionType: new FormControl<ConnectionInputConnectionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConnectionInputConnectionType { JDBC = 0, SFTP = 1, MONGODB = 2, KAFKA = 3 }

	export interface ConnectionProperties {
	}
	export interface ConnectionPropertiesFormProperties {
	}
	export function CreateConnectionPropertiesFormGroup() {
		return new FormGroup<ConnectionPropertiesFormProperties>({
		});

	}


	/** Specifies the physical requirements for a connection. */
	export interface PhysicalConnectionRequirements {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SubnetId?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		SecurityGroupIdList?: Array<string>;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AvailabilityZone?: string | null;
	}

	/** Specifies the physical requirements for a connection. */
	export interface PhysicalConnectionRequirementsFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SubnetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreatePhysicalConnectionRequirementsFormGroup() {
		return new FormGroup<PhysicalConnectionRequirementsFormProperties>({
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateCrawlerResponse {
	}
	export interface CreateCrawlerResponseFormProperties {
	}
	export function CreateCreateCrawlerResponseFormGroup() {
		return new FormGroup<CreateCrawlerResponseFormProperties>({
		});

	}

	export interface CreateCrawlerRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		Role: string;
		DatabaseName?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Specifies data stores to crawl.
		 * Required
		 */
		Targets: CrawlerTargets;
		Schedule?: string | null;
		Classifiers?: Array<string>;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		TablePrefix?: string | null;

		/** A policy that specifies update and deletion behaviors for the crawler. */
		SchemaChangePolicy?: SchemaChangePolicy;
		Configuration?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		CrawlerSecurityConfiguration?: string | null;
		Tags?: TagsMap;
	}
	export interface CreateCrawlerRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		TablePrefix: FormControl<string | null | undefined>,
		Configuration: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		CrawlerSecurityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateCreateCrawlerRequestFormGroup() {
		return new FormGroup<CreateCrawlerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			Schedule: new FormControl<string | null | undefined>(undefined),
			TablePrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			Configuration: new FormControl<string | null | undefined>(undefined),
			CrawlerSecurityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
		});

	}

	export interface TagsMap {
	}
	export interface TagsMapFormProperties {
	}
	export function CreateTagsMapFormGroup() {
		return new FormGroup<TagsMapFormProperties>({
		});

	}

	export interface CreateDatabaseResponse {
	}
	export interface CreateDatabaseResponseFormProperties {
	}
	export function CreateCreateDatabaseResponseFormGroup() {
		return new FormGroup<CreateDatabaseResponseFormProperties>({
		});

	}

	export interface CreateDatabaseRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The structure used to create or update a database.
		 * Required
		 */
		DatabaseInput: DatabaseInput;
	}
	export interface CreateDatabaseRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatabaseRequestFormGroup() {
		return new FormGroup<CreateDatabaseRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** The structure used to create or update a database. */
	export interface DatabaseInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		LocationUri?: string | null;
		Parameters?: ParametersMap;
		CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
	}

	/** The structure used to create or update a database. */
	export interface DatabaseInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		LocationUri: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseInputFormGroup() {
		return new FormGroup<DatabaseInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			LocationUri: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** Permissions granted to a principal. */
	export interface PrincipalPermissions {

		/** The AWS Lake Formation principal. */
		Principal?: DataLakePrincipal;
		Permissions?: Array<Permission>;
	}

	/** Permissions granted to a principal. */
	export interface PrincipalPermissionsFormProperties {
	}
	export function CreatePrincipalPermissionsFormGroup() {
		return new FormGroup<PrincipalPermissionsFormProperties>({
		});

	}


	/** The AWS Lake Formation principal. */
	export interface DataLakePrincipal {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DataLakePrincipalIdentifier?: string | null;
	}

	/** The AWS Lake Formation principal. */
	export interface DataLakePrincipalFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DataLakePrincipalIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDataLakePrincipalFormGroup() {
		return new FormGroup<DataLakePrincipalFormProperties>({
			DataLakePrincipalIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export enum Permission { ALL = 0, SELECT = 1, ALTER = 2, DROP = 3, DELETE = 4, INSERT = 5, CREATE_DATABASE = 6, CREATE_TABLE = 7, DATA_LOCATION_ACCESS = 8 }

	export interface CreateDevEndpointResponse {
		EndpointName?: string | null;
		Status?: string | null;
		SecurityGroupIds?: Array<string>;
		SubnetId?: string | null;
		RoleArn?: string | null;
		YarnEndpointAddress?: string | null;
		ZeppelinRemoteSparkInterpreterPort?: number | null;
		NumberOfNodes?: number | null;
		WorkerType?: DevEndpointWorkerType | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion?: string | null;
		NumberOfWorkers?: number | null;
		AvailabilityZone?: string | null;
		VpcId?: string | null;
		ExtraPythonLibsS3Path?: string | null;
		ExtraJarsS3Path?: string | null;
		FailureReason?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration?: string | null;
		CreatedTimestamp?: Date | null;
		Arguments?: MapValue;
	}
	export interface CreateDevEndpointResponseFormProperties {
		EndpointName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		YarnEndpointAddress: FormControl<string | null | undefined>,
		ZeppelinRemoteSparkInterpreterPort: FormControl<number | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
		WorkerType: FormControl<DevEndpointWorkerType | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion: FormControl<string | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		ExtraPythonLibsS3Path: FormControl<string | null | undefined>,
		ExtraJarsS3Path: FormControl<string | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCreateDevEndpointResponseFormGroup() {
		return new FormGroup<CreateDevEndpointResponseFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:aws:iam::\d{12}:role/.*')]),
			YarnEndpointAddress: new FormControl<string | null | undefined>(undefined),
			ZeppelinRemoteSparkInterpreterPort: new FormControl<number | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<DevEndpointWorkerType | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^\w+\.\w+$')]),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			ExtraPythonLibsS3Path: new FormControl<string | null | undefined>(undefined),
			ExtraJarsS3Path: new FormControl<string | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateDevEndpointRequest {

		/** Required */
		EndpointName: string;

		/** Required */
		RoleArn: string;
		SecurityGroupIds?: Array<string>;
		SubnetId?: string | null;
		PublicKey?: string | null;

		/** Maximum items: 5 */
		PublicKeys?: Array<string>;
		NumberOfNodes?: number | null;
		WorkerType?: DevEndpointWorkerType | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion?: string | null;
		NumberOfWorkers?: number | null;
		ExtraPythonLibsS3Path?: string | null;
		ExtraJarsS3Path?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration?: string | null;
		Tags?: TagsMap;
		Arguments?: MapValue;
	}
	export interface CreateDevEndpointRequestFormProperties {

		/** Required */
		EndpointName: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		PublicKey: FormControl<string | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
		WorkerType: FormControl<DevEndpointWorkerType | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion: FormControl<string | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		ExtraPythonLibsS3Path: FormControl<string | null | undefined>,
		ExtraJarsS3Path: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateCreateDevEndpointRequestFormGroup() {
		return new FormGroup<CreateDevEndpointRequestFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:aws:iam::\d{12}:role/.*')]),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			PublicKey: new FormControl<string | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<DevEndpointWorkerType | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^\w+\.\w+$')]),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			ExtraPythonLibsS3Path: new FormControl<string | null | undefined>(undefined),
			ExtraJarsS3Path: new FormControl<string | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface IdempotentParameterMismatchException {
	}
	export interface IdempotentParameterMismatchExceptionFormProperties {
	}
	export function CreateIdempotentParameterMismatchExceptionFormGroup() {
		return new FormGroup<IdempotentParameterMismatchExceptionFormProperties>({
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

	export interface CreateJobResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface CreateJobResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobResponseFormGroup() {
		return new FormGroup<CreateJobResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateJobRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;
		LogUri?: string | null;

		/** Required */
		Role: string;

		/** An execution property of a job. */
		ExecutionProperty?: ExecutionProperty;

		/**
		 * Specifies code executed when a job is run.
		 * Required
		 */
		Command: JobCommand;
		DefaultArguments?: GenericMap;
		NonOverridableArguments?: GenericMap;

		/** Specifies the connections used by a job. */
		Connections?: ConnectionsList;
		MaxRetries?: number | null;
		AllocatedCapacity?: number | null;

		/** Minimum: 1 */
		Timeout?: number | null;
		MaxCapacity?: number | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration?: string | null;
		Tags?: TagsMap;

		/** Specifies configuration properties of a notification. */
		NotificationProperty?: NotificationProperty;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion?: string | null;
		NumberOfWorkers?: number | null;
		WorkerType?: DevEndpointWorkerType | null;
	}
	export interface CreateJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		LogUri: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
		AllocatedCapacity: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		Timeout: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion: FormControl<string | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		WorkerType: FormControl<DevEndpointWorkerType | null | undefined>,
	}
	export function CreateCreateJobRequestFormGroup() {
		return new FormGroup<CreateJobRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
			AllocatedCapacity: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			GlueVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^\w+\.\w+$')]),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<DevEndpointWorkerType | null | undefined>(undefined),
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface CreateMLTransformResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId?: string | null;
	}
	export interface CreateMLTransformResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMLTransformResponseFormGroup() {
		return new FormGroup<CreateMLTransformResponseFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateMLTransformRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		InputRecordTables: Array<GlueTable>;

		/**
		 * The algorithm-specific parameters that are associated with the machine learning transform.
		 * Required
		 */
		Parameters: TransformParameters;

		/** Required */
		Role: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion?: string | null;
		MaxCapacity?: number | null;
		WorkerType?: DevEndpointWorkerType | null;
		NumberOfWorkers?: number | null;

		/** Minimum: 1 */
		Timeout?: number | null;
		MaxRetries?: number | null;
		Tags?: TagsMap;
	}
	export interface CreateMLTransformRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion: FormControl<string | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<DevEndpointWorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		Timeout: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
	}
	export function CreateCreateMLTransformRequestFormGroup() {
		return new FormGroup<CreateMLTransformRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GlueVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^\w+\.\w+$')]),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<DevEndpointWorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The database and table in the AWS Glue Data Catalog that is used for input or output data. */
	export interface GlueTable {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ConnectionName?: string | null;
	}

	/** The database and table in the AWS Glue Data Catalog that is used for input or output data. */
	export interface GlueTableFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ConnectionName: FormControl<string | null | undefined>,
	}
	export function CreateGlueTableFormGroup() {
		return new FormGroup<GlueTableFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** The algorithm-specific parameters that are associated with the machine learning transform. */
	export interface TransformParameters {

		/** Required */
		TransformType: TransformParametersTransformType;

		/** The parameters to configure the find matches transform. */
		FindMatchesParameters?: FindMatchesParameters;
	}

	/** The algorithm-specific parameters that are associated with the machine learning transform. */
	export interface TransformParametersFormProperties {

		/** Required */
		TransformType: FormControl<TransformParametersTransformType | null | undefined>,
	}
	export function CreateTransformParametersFormGroup() {
		return new FormGroup<TransformParametersFormProperties>({
			TransformType: new FormControl<TransformParametersTransformType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TransformParametersTransformType { FIND_MATCHES = 0 }


	/** The parameters to configure the find matches transform. */
	export interface FindMatchesParameters {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		PrimaryKeyColumnName?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		PrecisionRecallTradeoff?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		AccuracyCostTradeoff?: number | null;
		EnforceProvidedLabels?: boolean | null;
	}

	/** The parameters to configure the find matches transform. */
	export interface FindMatchesParametersFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		PrimaryKeyColumnName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		PrecisionRecallTradeoff: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		AccuracyCostTradeoff: FormControl<number | null | undefined>,
		EnforceProvidedLabels: FormControl<boolean | null | undefined>,
	}
	export function CreateFindMatchesParametersFormGroup() {
		return new FormGroup<FindMatchesParametersFormProperties>({
			PrimaryKeyColumnName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			PrecisionRecallTradeoff: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			AccuracyCostTradeoff: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			EnforceProvidedLabels: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreatePartitionResponse {
	}
	export interface CreatePartitionResponseFormProperties {
	}
	export function CreateCreatePartitionResponseFormGroup() {
		return new FormGroup<CreatePartitionResponseFormProperties>({
		});

	}

	export interface CreatePartitionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * The structure used to create and update a partition.
		 * Required
		 */
		PartitionInput: PartitionInput;
	}
	export interface CreatePartitionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateCreatePartitionRequestFormGroup() {
		return new FormGroup<CreatePartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateScriptResponse {
		PythonScript?: string | null;
		ScalaCode?: string | null;
	}
	export interface CreateScriptResponseFormProperties {
		PythonScript: FormControl<string | null | undefined>,
		ScalaCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateScriptResponseFormGroup() {
		return new FormGroup<CreateScriptResponseFormProperties>({
			PythonScript: new FormControl<string | null | undefined>(undefined),
			ScalaCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateScriptRequest {
		DagNodes?: Array<CodeGenNode>;
		DagEdges?: Array<CodeGenEdge>;
		Language?: CreateScriptRequestLanguage | null;
	}
	export interface CreateScriptRequestFormProperties {
		Language: FormControl<CreateScriptRequestLanguage | null | undefined>,
	}
	export function CreateCreateScriptRequestFormGroup() {
		return new FormGroup<CreateScriptRequestFormProperties>({
			Language: new FormControl<CreateScriptRequestLanguage | null | undefined>(undefined),
		});

	}


	/** Represents a node in a directed acyclic graph (DAG) */
	export interface CodeGenNode {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Id: string;

		/** Required */
		NodeType: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Args: Array<CodeGenNodeArg>;
		LineNumber?: number | null;
	}

	/** Represents a node in a directed acyclic graph (DAG) */
	export interface CodeGenNodeFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Required */
		NodeType: FormControl<string | null | undefined>,
		LineNumber: FormControl<number | null | undefined>,
	}
	export function CreateCodeGenNodeFormGroup() {
		return new FormGroup<CodeGenNodeFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[A-Za-z_][A-Za-z0-9_]*')]),
			NodeType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LineNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An argument or property of a node. */
	export interface CodeGenNodeArg {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
		Param?: boolean | null;
	}

	/** An argument or property of a node. */
	export interface CodeGenNodeArgFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
		Param: FormControl<boolean | null | undefined>,
	}
	export function CreateCodeGenNodeArgFormGroup() {
		return new FormGroup<CodeGenNodeArgFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Param: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a directional edge in a directed acyclic graph (DAG). */
	export interface CodeGenEdge {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Source: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Target: string;
		TargetParameter?: string | null;
	}

	/** Represents a directional edge in a directed acyclic graph (DAG). */
	export interface CodeGenEdgeFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Source: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Target: FormControl<string | null | undefined>,
		TargetParameter: FormControl<string | null | undefined>,
	}
	export function CreateCodeGenEdgeFormGroup() {
		return new FormGroup<CodeGenEdgeFormProperties>({
			Source: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[A-Za-z_][A-Za-z0-9_]*')]),
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[A-Za-z_][A-Za-z0-9_]*')]),
			TargetParameter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateScriptRequestLanguage { PYTHON = 0, SCALA = 1 }

	export interface CreateSecurityConfigurationResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
		CreatedTimestamp?: Date | null;
	}
	export interface CreateSecurityConfigurationResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCreateSecurityConfigurationResponseFormGroup() {
		return new FormGroup<CreateSecurityConfigurationResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateSecurityConfigurationRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Specifies an encryption configuration.
		 * Required
		 */
		EncryptionConfiguration: EncryptionConfiguration;
	}
	export interface CreateSecurityConfigurationRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSecurityConfigurationRequestFormGroup() {
		return new FormGroup<CreateSecurityConfigurationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** Specifies an encryption configuration. */
	export interface EncryptionConfiguration {
		S3Encryption?: Array<S3Encryption>;

		/** Specifies how Amazon CloudWatch data should be encrypted. */
		CloudWatchEncryption?: CloudWatchEncryption;

		/** Specifies how job bookmark data should be encrypted. */
		JobBookmarksEncryption?: JobBookmarksEncryption;
	}

	/** Specifies an encryption configuration. */
	export interface EncryptionConfigurationFormProperties {
	}
	export function CreateEncryptionConfigurationFormGroup() {
		return new FormGroup<EncryptionConfigurationFormProperties>({
		});

	}


	/** Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted. */
	export interface S3Encryption {
		S3EncryptionMode?: S3EncryptionS3EncryptionMode | null;
		KmsKeyArn?: string | null;
	}

	/** Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted. */
	export interface S3EncryptionFormProperties {
		S3EncryptionMode: FormControl<S3EncryptionS3EncryptionMode | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateS3EncryptionFormGroup() {
		return new FormGroup<S3EncryptionFormProperties>({
			S3EncryptionMode: new FormControl<S3EncryptionS3EncryptionMode | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:aws:kms:.*')]),
		});

	}

	export enum S3EncryptionS3EncryptionMode { DISABLED = 0, 'SSE-KMS' = 1, 'SSE-S3' = 2 }


	/** Specifies how Amazon CloudWatch data should be encrypted. */
	export interface CloudWatchEncryption {
		CloudWatchEncryptionMode?: CloudWatchEncryptionCloudWatchEncryptionMode | null;
		KmsKeyArn?: string | null;
	}

	/** Specifies how Amazon CloudWatch data should be encrypted. */
	export interface CloudWatchEncryptionFormProperties {
		CloudWatchEncryptionMode: FormControl<CloudWatchEncryptionCloudWatchEncryptionMode | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchEncryptionFormGroup() {
		return new FormGroup<CloudWatchEncryptionFormProperties>({
			CloudWatchEncryptionMode: new FormControl<CloudWatchEncryptionCloudWatchEncryptionMode | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:aws:kms:.*')]),
		});

	}

	export enum CloudWatchEncryptionCloudWatchEncryptionMode { DISABLED = 0, 'SSE-KMS' = 1 }


	/** Specifies how job bookmark data should be encrypted. */
	export interface JobBookmarksEncryption {
		JobBookmarksEncryptionMode?: JobBookmarksEncryptionJobBookmarksEncryptionMode | null;
		KmsKeyArn?: string | null;
	}

	/** Specifies how job bookmark data should be encrypted. */
	export interface JobBookmarksEncryptionFormProperties {
		JobBookmarksEncryptionMode: FormControl<JobBookmarksEncryptionJobBookmarksEncryptionMode | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateJobBookmarksEncryptionFormGroup() {
		return new FormGroup<JobBookmarksEncryptionFormProperties>({
			JobBookmarksEncryptionMode: new FormControl<JobBookmarksEncryptionJobBookmarksEncryptionMode | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:aws:kms:.*')]),
		});

	}

	export enum JobBookmarksEncryptionJobBookmarksEncryptionMode { DISABLED = 0, 'CSE-KMS' = 1 }

	export interface CreateTableResponse {
	}
	export interface CreateTableResponseFormProperties {
	}
	export function CreateCreateTableResponseFormGroup() {
		return new FormGroup<CreateTableResponseFormProperties>({
		});

	}

	export interface CreateTableRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * A structure used to define a table.
		 * Required
		 */
		TableInput: TableInput;
	}
	export interface CreateTableRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateCreateTableRequestFormGroup() {
		return new FormGroup<CreateTableRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** A structure used to define a table. */
	export interface TableInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Owner?: string | null;
		LastAccessTime?: Date | null;
		LastAnalyzedTime?: Date | null;

		/** Minimum: 0 */
		Retention?: number | null;

		/** Describes the physical storage of table data. */
		StorageDescriptor?: StorageDescriptor;
		PartitionKeys?: Array<Column>;

		/** Max length: 409600 */
		ViewOriginalText?: string | null;

		/** Max length: 409600 */
		ViewExpandedText?: string | null;

		/** Max length: 255 */
		TableType?: string | null;
		Parameters?: ParametersMap;
	}

	/** A structure used to define a table. */
	export interface TableInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Owner: FormControl<string | null | undefined>,
		LastAccessTime: FormControl<Date | null | undefined>,
		LastAnalyzedTime: FormControl<Date | null | undefined>,

		/** Minimum: 0 */
		Retention: FormControl<number | null | undefined>,

		/** Max length: 409600 */
		ViewOriginalText: FormControl<string | null | undefined>,

		/** Max length: 409600 */
		ViewExpandedText: FormControl<string | null | undefined>,

		/** Max length: 255 */
		TableType: FormControl<string | null | undefined>,
	}
	export function CreateTableInputFormGroup() {
		return new FormGroup<TableInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			LastAccessTime: new FormControl<Date | null | undefined>(undefined),
			LastAnalyzedTime: new FormControl<Date | null | undefined>(undefined),
			Retention: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ViewOriginalText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(409600)]),
			ViewExpandedText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(409600)]),
			TableType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}

	export interface CreateTriggerResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface CreateTriggerResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateTriggerResponseFormGroup() {
		return new FormGroup<CreateTriggerResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateTriggerRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		WorkflowName?: string | null;

		/** Required */
		Type: TriggerType;
		Schedule?: string | null;

		/** Defines the predicate of the trigger, which determines when it fires. */
		Predicate?: Predicate;

		/** Required */
		Actions: Array<Action>;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;
		StartOnCreation?: boolean | null;
		Tags?: TagsMap;
	}
	export interface CreateTriggerRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		WorkflowName: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<TriggerType | null | undefined>,
		Schedule: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		StartOnCreation: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateTriggerRequestFormGroup() {
		return new FormGroup<CreateTriggerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			WorkflowName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Type: new FormControl<TriggerType | null | undefined>(undefined, [Validators.required]),
			Schedule: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			StartOnCreation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateUserDefinedFunctionResponse {
	}
	export interface CreateUserDefinedFunctionResponseFormProperties {
	}
	export function CreateCreateUserDefinedFunctionResponseFormGroup() {
		return new FormGroup<CreateUserDefinedFunctionResponseFormProperties>({
		});

	}

	export interface CreateUserDefinedFunctionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * A structure used to create or update a user-defined function.
		 * Required
		 */
		FunctionInput: UserDefinedFunctionInput;
	}
	export interface CreateUserDefinedFunctionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserDefinedFunctionRequestFormGroup() {
		return new FormGroup<CreateUserDefinedFunctionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** A structure used to create or update a user-defined function. */
	export interface UserDefinedFunctionInput {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		FunctionName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ClassName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		OwnerName?: string | null;
		OwnerType?: UserDefinedFunctionInputOwnerType | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 1000
		 */
		ResourceUris?: Array<ResourceUri>;
	}

	/** A structure used to create or update a user-defined function. */
	export interface UserDefinedFunctionInputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		FunctionName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ClassName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		OwnerName: FormControl<string | null | undefined>,
		OwnerType: FormControl<UserDefinedFunctionInputOwnerType | null | undefined>,
	}
	export function CreateUserDefinedFunctionInputFormGroup() {
		return new FormGroup<UserDefinedFunctionInputFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ClassName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			OwnerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			OwnerType: new FormControl<UserDefinedFunctionInputOwnerType | null | undefined>(undefined),
		});

	}

	export enum UserDefinedFunctionInputOwnerType { USER = 0, ROLE = 1, GROUP = 2 }


	/** The URIs for function resources. */
	export interface ResourceUri {
		ResourceType?: ResourceUriResourceType | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Uri?: string | null;
	}

	/** The URIs for function resources. */
	export interface ResourceUriFormProperties {
		ResourceType: FormControl<ResourceUriResourceType | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Uri: FormControl<string | null | undefined>,
	}
	export function CreateResourceUriFormGroup() {
		return new FormGroup<ResourceUriFormProperties>({
			ResourceType: new FormControl<ResourceUriResourceType | null | undefined>(undefined),
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export enum ResourceUriResourceType { JAR = 0, FILE = 1, ARCHIVE = 2 }

	export interface CreateWorkflowResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface CreateWorkflowResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkflowResponseFormGroup() {
		return new FormGroup<CreateWorkflowResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateWorkflowRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
		Description?: string | null;
		DefaultRunProperties?: WorkflowRunProperties;
		Tags?: TagsMap;
	}
	export interface CreateWorkflowRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkflowRequestFormGroup() {
		return new FormGroup<CreateWorkflowRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteClassifierResponse {
	}
	export interface DeleteClassifierResponseFormProperties {
	}
	export function CreateDeleteClassifierResponseFormGroup() {
		return new FormGroup<DeleteClassifierResponseFormProperties>({
		});

	}

	export interface DeleteClassifierRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DeleteClassifierRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteClassifierRequestFormGroup() {
		return new FormGroup<DeleteClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteConnectionResponse {
	}
	export interface DeleteConnectionResponseFormProperties {
	}
	export function CreateDeleteConnectionResponseFormGroup() {
		return new FormGroup<DeleteConnectionResponseFormProperties>({
		});

	}

	export interface DeleteConnectionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ConnectionName: string;
	}
	export interface DeleteConnectionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ConnectionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConnectionRequestFormGroup() {
		return new FormGroup<DeleteConnectionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteCrawlerResponse {
	}
	export interface DeleteCrawlerResponseFormProperties {
	}
	export function CreateDeleteCrawlerResponseFormGroup() {
		return new FormGroup<DeleteCrawlerResponseFormProperties>({
		});

	}

	export interface DeleteCrawlerRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DeleteCrawlerRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCrawlerRequestFormGroup() {
		return new FormGroup<DeleteCrawlerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CrawlerRunningException {
	}
	export interface CrawlerRunningExceptionFormProperties {
	}
	export function CreateCrawlerRunningExceptionFormGroup() {
		return new FormGroup<CrawlerRunningExceptionFormProperties>({
		});

	}

	export interface SchedulerTransitioningException {
	}
	export interface SchedulerTransitioningExceptionFormProperties {
	}
	export function CreateSchedulerTransitioningExceptionFormGroup() {
		return new FormGroup<SchedulerTransitioningExceptionFormProperties>({
		});

	}

	export interface DeleteDatabaseResponse {
	}
	export interface DeleteDatabaseResponseFormProperties {
	}
	export function CreateDeleteDatabaseResponseFormGroup() {
		return new FormGroup<DeleteDatabaseResponseFormProperties>({
		});

	}

	export interface DeleteDatabaseRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DeleteDatabaseRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatabaseRequestFormGroup() {
		return new FormGroup<DeleteDatabaseRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteDevEndpointResponse {
	}
	export interface DeleteDevEndpointResponseFormProperties {
	}
	export function CreateDeleteDevEndpointResponseFormGroup() {
		return new FormGroup<DeleteDevEndpointResponseFormProperties>({
		});

	}

	export interface DeleteDevEndpointRequest {

		/** Required */
		EndpointName: string;
	}
	export interface DeleteDevEndpointRequestFormProperties {

		/** Required */
		EndpointName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDevEndpointRequestFormGroup() {
		return new FormGroup<DeleteDevEndpointRequestFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteJobResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName?: string | null;
	}
	export interface DeleteJobResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteJobResponseFormGroup() {
		return new FormGroup<DeleteJobResponseFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteJobRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: string;
	}
	export interface DeleteJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteJobRequestFormGroup() {
		return new FormGroup<DeleteJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteMLTransformResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId?: string | null;
	}
	export interface DeleteMLTransformResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMLTransformResponseFormGroup() {
		return new FormGroup<DeleteMLTransformResponseFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteMLTransformRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: string;
	}
	export interface DeleteMLTransformRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMLTransformRequestFormGroup() {
		return new FormGroup<DeleteMLTransformRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeletePartitionResponse {
	}
	export interface DeletePartitionResponseFormProperties {
	}
	export function CreateDeletePartitionResponseFormGroup() {
		return new FormGroup<DeletePartitionResponseFormProperties>({
		});

	}

	export interface DeletePartitionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/** Required */
		PartitionValues: Array<string>;
	}
	export interface DeletePartitionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDeletePartitionRequestFormGroup() {
		return new FormGroup<DeletePartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteResourcePolicyResponse {
	}
	export interface DeleteResourcePolicyResponseFormProperties {
	}
	export function CreateDeleteResourcePolicyResponseFormGroup() {
		return new FormGroup<DeleteResourcePolicyResponseFormProperties>({
		});

	}

	export interface DeleteResourcePolicyRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		PolicyHashCondition?: string | null;
	}
	export interface DeleteResourcePolicyRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		PolicyHashCondition: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
			PolicyHashCondition: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface ConditionCheckFailureException {
	}
	export interface ConditionCheckFailureExceptionFormProperties {
	}
	export function CreateConditionCheckFailureExceptionFormGroup() {
		return new FormGroup<ConditionCheckFailureExceptionFormProperties>({
		});

	}

	export interface DeleteSecurityConfigurationResponse {
	}
	export interface DeleteSecurityConfigurationResponseFormProperties {
	}
	export function CreateDeleteSecurityConfigurationResponseFormGroup() {
		return new FormGroup<DeleteSecurityConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteSecurityConfigurationRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DeleteSecurityConfigurationRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSecurityConfigurationRequestFormGroup() {
		return new FormGroup<DeleteSecurityConfigurationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteTableResponse {
	}
	export interface DeleteTableResponseFormProperties {
	}
	export function CreateDeleteTableResponseFormGroup() {
		return new FormGroup<DeleteTableResponseFormProperties>({
		});

	}

	export interface DeleteTableRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DeleteTableRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTableRequestFormGroup() {
		return new FormGroup<DeleteTableRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteTableVersionResponse {
	}
	export interface DeleteTableVersionResponseFormProperties {
	}
	export function CreateDeleteTableVersionResponseFormGroup() {
		return new FormGroup<DeleteTableVersionResponseFormProperties>({
		});

	}

	export interface DeleteTableVersionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		VersionId: string;
	}
	export interface DeleteTableVersionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTableVersionRequestFormGroup() {
		return new FormGroup<DeleteTableVersionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteTriggerResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface DeleteTriggerResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTriggerResponseFormGroup() {
		return new FormGroup<DeleteTriggerResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteTriggerRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DeleteTriggerRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTriggerRequestFormGroup() {
		return new FormGroup<DeleteTriggerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteUserDefinedFunctionResponse {
	}
	export interface DeleteUserDefinedFunctionResponseFormProperties {
	}
	export function CreateDeleteUserDefinedFunctionResponseFormGroup() {
		return new FormGroup<DeleteUserDefinedFunctionResponseFormProperties>({
		});

	}

	export interface DeleteUserDefinedFunctionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		FunctionName: string;
	}
	export interface DeleteUserDefinedFunctionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		FunctionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserDefinedFunctionRequestFormGroup() {
		return new FormGroup<DeleteUserDefinedFunctionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteWorkflowResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface DeleteWorkflowResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkflowResponseFormGroup() {
		return new FormGroup<DeleteWorkflowResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteWorkflowRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DeleteWorkflowRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkflowRequestFormGroup() {
		return new FormGroup<DeleteWorkflowRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetCatalogImportStatusResponse {

		/** A structure containing migration status information. */
		ImportStatus?: CatalogImportStatus;
	}
	export interface GetCatalogImportStatusResponseFormProperties {
	}
	export function CreateGetCatalogImportStatusResponseFormGroup() {
		return new FormGroup<GetCatalogImportStatusResponseFormProperties>({
		});

	}


	/** A structure containing migration status information. */
	export interface CatalogImportStatus {
		ImportCompleted?: boolean | null;
		ImportTime?: Date | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ImportedBy?: string | null;
	}

	/** A structure containing migration status information. */
	export interface CatalogImportStatusFormProperties {
		ImportCompleted: FormControl<boolean | null | undefined>,
		ImportTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ImportedBy: FormControl<string | null | undefined>,
	}
	export function CreateCatalogImportStatusFormGroup() {
		return new FormGroup<CatalogImportStatusFormProperties>({
			ImportCompleted: new FormControl<boolean | null | undefined>(undefined),
			ImportTime: new FormControl<Date | null | undefined>(undefined),
			ImportedBy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetCatalogImportStatusRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;
	}
	export interface GetCatalogImportStatusRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateGetCatalogImportStatusRequestFormGroup() {
		return new FormGroup<GetCatalogImportStatusRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetClassifierResponse {

		/** <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that AWS Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p> */
		Classifier?: Classifier;
	}
	export interface GetClassifierResponseFormProperties {
	}
	export function CreateGetClassifierResponseFormGroup() {
		return new FormGroup<GetClassifierResponseFormProperties>({
		});

	}


	/** <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that AWS Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p> */
	export interface Classifier {

		/** A classifier that uses <code>grok</code> patterns. */
		GrokClassifier?: GrokClassifier;

		/** A classifier for <code>XML</code> content. */
		XMLClassifier?: XMLClassifier;

		/** A classifier for <code>JSON</code> content. */
		JsonClassifier?: JsonClassifier;

		/** A classifier for custom <code>CSV</code> content. */
		CsvClassifier?: CsvClassifier;
	}

	/** <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that AWS Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p> */
	export interface ClassifierFormProperties {
	}
	export function CreateClassifierFormGroup() {
		return new FormGroup<ClassifierFormProperties>({
		});

	}


	/** A classifier that uses <code>grok</code> patterns. */
	export interface GrokClassifier {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		Classification: string;
		CreationTime?: Date | null;
		LastUpdated?: Date | null;
		Version?: number | null;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		GrokPattern: string;

		/**
		 * Max length: 16000
		 * Min length: 0
		 */
		CustomPatterns?: string | null;
	}

	/** A classifier that uses <code>grok</code> patterns. */
	export interface GrokClassifierFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Classification: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		Version: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		GrokPattern: FormControl<string | null | undefined>,

		/**
		 * Max length: 16000
		 * Min length: 0
		 */
		CustomPatterns: FormControl<string | null | undefined>,
	}
	export function CreateGrokClassifierFormGroup() {
		return new FormGroup<GrokClassifierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Classification: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			GrokPattern: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			CustomPatterns: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(16000)]),
		});

	}


	/** A classifier for <code>XML</code> content. */
	export interface XMLClassifier {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		Classification: string;
		CreationTime?: Date | null;
		LastUpdated?: Date | null;
		Version?: number | null;
		RowTag?: string | null;
	}

	/** A classifier for <code>XML</code> content. */
	export interface XMLClassifierFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Classification: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		Version: FormControl<number | null | undefined>,
		RowTag: FormControl<string | null | undefined>,
	}
	export function CreateXMLClassifierFormGroup() {
		return new FormGroup<XMLClassifierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Classification: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			RowTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A classifier for <code>JSON</code> content. */
	export interface JsonClassifier {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
		CreationTime?: Date | null;
		LastUpdated?: Date | null;
		Version?: number | null;

		/** Required */
		JsonPath: string;
	}

	/** A classifier for <code>JSON</code> content. */
	export interface JsonClassifierFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		Version: FormControl<number | null | undefined>,

		/** Required */
		JsonPath: FormControl<string | null | undefined>,
	}
	export function CreateJsonClassifierFormGroup() {
		return new FormGroup<JsonClassifierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			JsonPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A classifier for custom <code>CSV</code> content. */
	export interface CsvClassifier {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
		CreationTime?: Date | null;
		LastUpdated?: Date | null;
		Version?: number | null;

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		Delimiter?: string | null;

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		QuoteSymbol?: string | null;
		ContainsHeader?: CreateCsvClassifierRequestContainsHeader | null;
		Header?: Array<string>;
		DisableValueTrimming?: boolean | null;
		AllowSingleColumn?: boolean | null;
	}

	/** A classifier for custom <code>CSV</code> content. */
	export interface CsvClassifierFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		Version: FormControl<number | null | undefined>,

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		Delimiter: FormControl<string | null | undefined>,

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		QuoteSymbol: FormControl<string | null | undefined>,
		ContainsHeader: FormControl<CreateCsvClassifierRequestContainsHeader | null | undefined>,
		DisableValueTrimming: FormControl<boolean | null | undefined>,
		AllowSingleColumn: FormControl<boolean | null | undefined>,
	}
	export function CreateCsvClassifierFormGroup() {
		return new FormGroup<CsvClassifierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			Delimiter: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1), Validators.pattern('[^\r\n]')]),
			QuoteSymbol: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1), Validators.pattern('[^\r\n]')]),
			ContainsHeader: new FormControl<CreateCsvClassifierRequestContainsHeader | null | undefined>(undefined),
			DisableValueTrimming: new FormControl<boolean | null | undefined>(undefined),
			AllowSingleColumn: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetClassifierRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface GetClassifierRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetClassifierRequestFormGroup() {
		return new FormGroup<GetClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetClassifiersResponse {
		Classifiers?: Array<Classifier>;
		NextToken?: string | null;
	}
	export interface GetClassifiersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetClassifiersResponseFormGroup() {
		return new FormGroup<GetClassifiersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetClassifiersRequest {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface GetClassifiersRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetClassifiersRequestFormGroup() {
		return new FormGroup<GetClassifiersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConnectionResponse {

		/** Defines a connection to a data source. */
		Connection?: Connection;
	}
	export interface GetConnectionResponseFormProperties {
	}
	export function CreateGetConnectionResponseFormGroup() {
		return new FormGroup<GetConnectionResponseFormProperties>({
		});

	}


	/** Defines a connection to a data source. */
	export interface Connection {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;
		ConnectionType?: ConnectionInputConnectionType | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		MatchCriteria?: Array<string>;
		ConnectionProperties?: ConnectionProperties;

		/** Specifies the physical requirements for a connection. */
		PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
		CreationTime?: Date | null;
		LastUpdatedTime?: Date | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		LastUpdatedBy?: string | null;
	}

	/** Defines a connection to a data source. */
	export interface ConnectionFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		ConnectionType: FormControl<ConnectionInputConnectionType | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		LastUpdatedBy: FormControl<string | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			ConnectionType: new FormControl<ConnectionInputConnectionType | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedBy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetConnectionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
		HidePassword?: boolean | null;
	}
	export interface GetConnectionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		HidePassword: FormControl<boolean | null | undefined>,
	}
	export function CreateGetConnectionRequestFormGroup() {
		return new FormGroup<GetConnectionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			HidePassword: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetConnectionsResponse {
		ConnectionList?: Array<Connection>;
		NextToken?: string | null;
	}
	export interface GetConnectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetConnectionsResponseFormGroup() {
		return new FormGroup<GetConnectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConnectionsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/** Filters the connection definitions that are returned by the <code>GetConnections</code> API operation. */
		Filter?: GetConnectionsFilter;
		HidePassword?: boolean | null;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface GetConnectionsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
		HidePassword: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetConnectionsRequestFormGroup() {
		return new FormGroup<GetConnectionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			HidePassword: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}


	/** Filters the connection definitions that are returned by the <code>GetConnections</code> API operation. */
	export interface GetConnectionsFilter {

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		MatchCriteria?: Array<string>;
		ConnectionType?: ConnectionInputConnectionType | null;
	}

	/** Filters the connection definitions that are returned by the <code>GetConnections</code> API operation. */
	export interface GetConnectionsFilterFormProperties {
		ConnectionType: FormControl<ConnectionInputConnectionType | null | undefined>,
	}
	export function CreateGetConnectionsFilterFormGroup() {
		return new FormGroup<GetConnectionsFilterFormProperties>({
			ConnectionType: new FormControl<ConnectionInputConnectionType | null | undefined>(undefined),
		});

	}

	export interface GetCrawlerResponse {

		/** Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the AWS Glue Data Catalog. */
		Crawler?: Crawler;
	}
	export interface GetCrawlerResponseFormProperties {
	}
	export function CreateGetCrawlerResponseFormGroup() {
		return new FormGroup<GetCrawlerResponseFormProperties>({
		});

	}

	export interface GetCrawlerRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface GetCrawlerRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetCrawlerRequestFormGroup() {
		return new FormGroup<GetCrawlerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetCrawlerMetricsResponse {
		CrawlerMetricsList?: Array<CrawlerMetrics>;
		NextToken?: string | null;
	}
	export interface GetCrawlerMetricsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCrawlerMetricsResponseFormGroup() {
		return new FormGroup<GetCrawlerMetricsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metrics for a specified crawler. */
	export interface CrawlerMetrics {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CrawlerName?: string | null;

		/** Minimum: 0 */
		TimeLeftSeconds?: number | null;
		StillEstimating?: boolean | null;

		/** Minimum: 0 */
		LastRuntimeSeconds?: number | null;

		/** Minimum: 0 */
		MedianRuntimeSeconds?: number | null;

		/** Minimum: 0 */
		TablesCreated?: number | null;

		/** Minimum: 0 */
		TablesUpdated?: number | null;

		/** Minimum: 0 */
		TablesDeleted?: number | null;
	}

	/** Metrics for a specified crawler. */
	export interface CrawlerMetricsFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CrawlerName: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		TimeLeftSeconds: FormControl<number | null | undefined>,
		StillEstimating: FormControl<boolean | null | undefined>,

		/** Minimum: 0 */
		LastRuntimeSeconds: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		MedianRuntimeSeconds: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		TablesCreated: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		TablesUpdated: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		TablesDeleted: FormControl<number | null | undefined>,
	}
	export function CreateCrawlerMetricsFormGroup() {
		return new FormGroup<CrawlerMetricsFormProperties>({
			CrawlerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			TimeLeftSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			StillEstimating: new FormControl<boolean | null | undefined>(undefined),
			LastRuntimeSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			MedianRuntimeSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			TablesCreated: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			TablesUpdated: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			TablesDeleted: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface GetCrawlerMetricsRequest {

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		CrawlerNameList?: Array<string>;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface GetCrawlerMetricsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCrawlerMetricsRequestFormGroup() {
		return new FormGroup<GetCrawlerMetricsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCrawlersResponse {
		Crawlers?: Array<Crawler>;
		NextToken?: string | null;
	}
	export interface GetCrawlersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCrawlersResponseFormGroup() {
		return new FormGroup<GetCrawlersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCrawlersRequest {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface GetCrawlersRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCrawlersRequestFormGroup() {
		return new FormGroup<GetCrawlersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDataCatalogEncryptionSettingsResponse {

		/** Contains configuration information for maintaining Data Catalog security. */
		DataCatalogEncryptionSettings?: DataCatalogEncryptionSettings;
	}
	export interface GetDataCatalogEncryptionSettingsResponseFormProperties {
	}
	export function CreateGetDataCatalogEncryptionSettingsResponseFormGroup() {
		return new FormGroup<GetDataCatalogEncryptionSettingsResponseFormProperties>({
		});

	}


	/** Contains configuration information for maintaining Data Catalog security. */
	export interface DataCatalogEncryptionSettings {

		/** Specifies the encryption-at-rest configuration for the Data Catalog. */
		EncryptionAtRest?: EncryptionAtRest;

		/** <p>The data structure used by the Data Catalog to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p> <p>When a <code>CreationConnection</code> request arrives containing a password, the Data Catalog first encrypts the password using your AWS KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.</p> <p>This encryption requires that you set AWS KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.</p> */
		ConnectionPasswordEncryption?: ConnectionPasswordEncryption;
	}

	/** Contains configuration information for maintaining Data Catalog security. */
	export interface DataCatalogEncryptionSettingsFormProperties {
	}
	export function CreateDataCatalogEncryptionSettingsFormGroup() {
		return new FormGroup<DataCatalogEncryptionSettingsFormProperties>({
		});

	}


	/** Specifies the encryption-at-rest configuration for the Data Catalog. */
	export interface EncryptionAtRest {

		/** Required */
		CatalogEncryptionMode: CloudWatchEncryptionCloudWatchEncryptionMode;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SseAwsKmsKeyId?: string | null;
	}

	/** Specifies the encryption-at-rest configuration for the Data Catalog. */
	export interface EncryptionAtRestFormProperties {

		/** Required */
		CatalogEncryptionMode: FormControl<CloudWatchEncryptionCloudWatchEncryptionMode | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SseAwsKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionAtRestFormGroup() {
		return new FormGroup<EncryptionAtRestFormProperties>({
			CatalogEncryptionMode: new FormControl<CloudWatchEncryptionCloudWatchEncryptionMode | null | undefined>(undefined, [Validators.required]),
			SseAwsKmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** <p>The data structure used by the Data Catalog to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p> <p>When a <code>CreationConnection</code> request arrives containing a password, the Data Catalog first encrypts the password using your AWS KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.</p> <p>This encryption requires that you set AWS KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.</p> */
	export interface ConnectionPasswordEncryption {

		/** Required */
		ReturnConnectionPasswordEncrypted: boolean;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AwsKmsKeyId?: string | null;
	}

	/** <p>The data structure used by the Data Catalog to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p> <p>When a <code>CreationConnection</code> request arrives containing a password, the Data Catalog first encrypts the password using your AWS KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.</p> <p>This encryption requires that you set AWS KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.</p> */
	export interface ConnectionPasswordEncryptionFormProperties {

		/** Required */
		ReturnConnectionPasswordEncrypted: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AwsKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateConnectionPasswordEncryptionFormGroup() {
		return new FormGroup<ConnectionPasswordEncryptionFormProperties>({
			ReturnConnectionPasswordEncrypted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			AwsKmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetDataCatalogEncryptionSettingsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;
	}
	export interface GetDataCatalogEncryptionSettingsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateGetDataCatalogEncryptionSettingsRequestFormGroup() {
		return new FormGroup<GetDataCatalogEncryptionSettingsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetDatabaseResponse {

		/** The <code>Database</code> object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS. */
		Database?: Database;
	}
	export interface GetDatabaseResponseFormProperties {
	}
	export function CreateGetDatabaseResponseFormGroup() {
		return new FormGroup<GetDatabaseResponseFormProperties>({
		});

	}


	/** The <code>Database</code> object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS. */
	export interface Database {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		LocationUri?: string | null;
		Parameters?: ParametersMap;
		CreateTime?: Date | null;
		CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
	}

	/** The <code>Database</code> object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS. */
	export interface DatabaseFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		LocationUri: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			LocationUri: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetDatabaseRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface GetDatabaseRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetDatabaseRequestFormGroup() {
		return new FormGroup<GetDatabaseRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetDatabasesResponse {

		/** Required */
		DatabaseList: Array<Database>;
		NextToken?: string | null;
	}
	export interface GetDatabasesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDatabasesResponseFormGroup() {
		return new FormGroup<GetDatabasesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDatabasesRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface GetDatabasesRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetDatabasesRequestFormGroup() {
		return new FormGroup<GetDatabasesRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface GetDataflowGraphResponse {
		DagNodes?: Array<CodeGenNode>;
		DagEdges?: Array<CodeGenEdge>;
	}
	export interface GetDataflowGraphResponseFormProperties {
	}
	export function CreateGetDataflowGraphResponseFormGroup() {
		return new FormGroup<GetDataflowGraphResponseFormProperties>({
		});

	}

	export interface GetDataflowGraphRequest {
		PythonScript?: string | null;
	}
	export interface GetDataflowGraphRequestFormProperties {
		PythonScript: FormControl<string | null | undefined>,
	}
	export function CreateGetDataflowGraphRequestFormGroup() {
		return new FormGroup<GetDataflowGraphRequestFormProperties>({
			PythonScript: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDevEndpointResponse {

		/** A development endpoint where a developer can remotely debug extract, transform, and load (ETL) scripts. */
		DevEndpoint?: DevEndpoint;
	}
	export interface GetDevEndpointResponseFormProperties {
	}
	export function CreateGetDevEndpointResponseFormGroup() {
		return new FormGroup<GetDevEndpointResponseFormProperties>({
		});

	}

	export interface GetDevEndpointRequest {

		/** Required */
		EndpointName: string;
	}
	export interface GetDevEndpointRequestFormProperties {

		/** Required */
		EndpointName: FormControl<string | null | undefined>,
	}
	export function CreateGetDevEndpointRequestFormGroup() {
		return new FormGroup<GetDevEndpointRequestFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDevEndpointsResponse {
		DevEndpoints?: Array<DevEndpoint>;
		NextToken?: string | null;
	}
	export interface GetDevEndpointsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDevEndpointsResponseFormGroup() {
		return new FormGroup<GetDevEndpointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDevEndpointsRequest {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface GetDevEndpointsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDevEndpointsRequestFormGroup() {
		return new FormGroup<GetDevEndpointsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetJobResponse {

		/** Specifies a job definition. */
		Job?: Job;
	}
	export interface GetJobResponseFormProperties {
	}
	export function CreateGetJobResponseFormGroup() {
		return new FormGroup<GetJobResponseFormProperties>({
		});

	}

	export interface GetJobRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: string;
	}
	export interface GetJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateGetJobRequestFormGroup() {
		return new FormGroup<GetJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetJobBookmarkResponse {

		/** Defines a point that a job can resume processing. */
		JobBookmarkEntry?: JobBookmarkEntry;
	}
	export interface GetJobBookmarkResponseFormProperties {
	}
	export function CreateGetJobBookmarkResponseFormGroup() {
		return new FormGroup<GetJobBookmarkResponseFormProperties>({
		});

	}


	/** Defines a point that a job can resume processing. */
	export interface JobBookmarkEntry {
		JobName?: string | null;
		Version?: number | null;
		Run?: number | null;
		Attempt?: number | null;
		PreviousRunId?: string | null;
		RunId?: string | null;
		JobBookmark?: string | null;
	}

	/** Defines a point that a job can resume processing. */
	export interface JobBookmarkEntryFormProperties {
		JobName: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
		Run: FormControl<number | null | undefined>,
		Attempt: FormControl<number | null | undefined>,
		PreviousRunId: FormControl<string | null | undefined>,
		RunId: FormControl<string | null | undefined>,
		JobBookmark: FormControl<string | null | undefined>,
	}
	export function CreateJobBookmarkEntryFormGroup() {
		return new FormGroup<JobBookmarkEntryFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			Run: new FormControl<number | null | undefined>(undefined),
			Attempt: new FormControl<number | null | undefined>(undefined),
			PreviousRunId: new FormControl<string | null | undefined>(undefined),
			RunId: new FormControl<string | null | undefined>(undefined),
			JobBookmark: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetJobBookmarkRequest {

		/** Required */
		JobName: string;
		RunId?: string | null;
	}
	export interface GetJobBookmarkRequestFormProperties {

		/** Required */
		JobName: FormControl<string | null | undefined>,
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateGetJobBookmarkRequestFormGroup() {
		return new FormGroup<GetJobBookmarkRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetJobRunResponse {

		/** Contains information about a job run. */
		JobRun?: JobRun;
	}
	export interface GetJobRunResponseFormProperties {
	}
	export function CreateGetJobRunResponseFormGroup() {
		return new FormGroup<GetJobRunResponseFormProperties>({
		});

	}

	export interface GetJobRunRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		RunId: string;
		PredecessorsIncluded?: boolean | null;
	}
	export interface GetJobRunRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		RunId: FormControl<string | null | undefined>,
		PredecessorsIncluded: FormControl<boolean | null | undefined>,
	}
	export function CreateGetJobRunRequestFormGroup() {
		return new FormGroup<GetJobRunRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			PredecessorsIncluded: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetJobRunsResponse {
		JobRuns?: Array<JobRun>;
		NextToken?: string | null;
	}
	export interface GetJobRunsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetJobRunsResponseFormGroup() {
		return new FormGroup<GetJobRunsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetJobRunsRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: string;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface GetJobRunsRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetJobRunsRequestFormGroup() {
		return new FormGroup<GetJobRunsRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface GetJobsResponse {
		Jobs?: Array<Job>;
		NextToken?: string | null;
	}
	export interface GetJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetJobsResponseFormGroup() {
		return new FormGroup<GetJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetJobsRequest {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface GetJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetJobsRequestFormGroup() {
		return new FormGroup<GetJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface GetMLTaskRunResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId?: string | null;
		Status?: ConditionState | null;
		LogGroupName?: string | null;

		/** The configuration properties for the task run. */
		Properties?: TaskRunProperties;
		ErrorString?: string | null;
		StartedOn?: Date | null;
		LastModifiedOn?: Date | null;
		CompletedOn?: Date | null;
		ExecutionTime?: number | null;
	}
	export interface GetMLTaskRunResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId: FormControl<string | null | undefined>,
		Status: FormControl<ConditionState | null | undefined>,
		LogGroupName: FormControl<string | null | undefined>,
		ErrorString: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		ExecutionTime: FormControl<number | null | undefined>,
	}
	export function CreateGetMLTaskRunResponseFormGroup() {
		return new FormGroup<GetMLTaskRunResponseFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			TaskRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Status: new FormControl<ConditionState | null | undefined>(undefined),
			LogGroupName: new FormControl<string | null | undefined>(undefined),
			ErrorString: new FormControl<string | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			ExecutionTime: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The configuration properties for the task run. */
	export interface TaskRunProperties {
		TaskType?: TaskRunPropertiesTaskType | null;

		/** Specifies configuration properties for an importing labels task run. */
		ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;

		/** Specifies configuration properties for an exporting labels task run. */
		ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;

		/** Specifies configuration properties for a labeling set generation task run. */
		LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;

		/** Specifies configuration properties for a Find Matches task run. */
		FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties;
	}

	/** The configuration properties for the task run. */
	export interface TaskRunPropertiesFormProperties {
		TaskType: FormControl<TaskRunPropertiesTaskType | null | undefined>,
	}
	export function CreateTaskRunPropertiesFormGroup() {
		return new FormGroup<TaskRunPropertiesFormProperties>({
			TaskType: new FormControl<TaskRunPropertiesTaskType | null | undefined>(undefined),
		});

	}

	export enum TaskRunPropertiesTaskType { EVALUATION = 0, LABELING_SET_GENERATION = 1, IMPORT_LABELS = 2, EXPORT_LABELS = 3, FIND_MATCHES = 4 }


	/** Specifies configuration properties for an importing labels task run. */
	export interface ImportLabelsTaskRunProperties {
		InputS3Path?: string | null;
		Replace?: boolean | null;
	}

	/** Specifies configuration properties for an importing labels task run. */
	export interface ImportLabelsTaskRunPropertiesFormProperties {
		InputS3Path: FormControl<string | null | undefined>,
		Replace: FormControl<boolean | null | undefined>,
	}
	export function CreateImportLabelsTaskRunPropertiesFormGroup() {
		return new FormGroup<ImportLabelsTaskRunPropertiesFormProperties>({
			InputS3Path: new FormControl<string | null | undefined>(undefined),
			Replace: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies configuration properties for an exporting labels task run. */
	export interface ExportLabelsTaskRunProperties {
		OutputS3Path?: string | null;
	}

	/** Specifies configuration properties for an exporting labels task run. */
	export interface ExportLabelsTaskRunPropertiesFormProperties {
		OutputS3Path: FormControl<string | null | undefined>,
	}
	export function CreateExportLabelsTaskRunPropertiesFormGroup() {
		return new FormGroup<ExportLabelsTaskRunPropertiesFormProperties>({
			OutputS3Path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies configuration properties for a labeling set generation task run. */
	export interface LabelingSetGenerationTaskRunProperties {
		OutputS3Path?: string | null;
	}

	/** Specifies configuration properties for a labeling set generation task run. */
	export interface LabelingSetGenerationTaskRunPropertiesFormProperties {
		OutputS3Path: FormControl<string | null | undefined>,
	}
	export function CreateLabelingSetGenerationTaskRunPropertiesFormGroup() {
		return new FormGroup<LabelingSetGenerationTaskRunPropertiesFormProperties>({
			OutputS3Path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies configuration properties for a Find Matches task run. */
	export interface FindMatchesTaskRunProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobRunId?: string | null;
	}

	/** Specifies configuration properties for a Find Matches task run. */
	export interface FindMatchesTaskRunPropertiesFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobRunId: FormControl<string | null | undefined>,
	}
	export function CreateFindMatchesTaskRunPropertiesFormGroup() {
		return new FormGroup<FindMatchesTaskRunPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			JobRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetMLTaskRunRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId: string;
	}
	export interface GetMLTaskRunRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId: FormControl<string | null | undefined>,
	}
	export function CreateGetMLTaskRunRequestFormGroup() {
		return new FormGroup<GetMLTaskRunRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TaskRunId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetMLTaskRunsResponse {
		TaskRuns?: Array<TaskRun>;
		NextToken?: string | null;
	}
	export interface GetMLTaskRunsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetMLTaskRunsResponseFormGroup() {
		return new FormGroup<GetMLTaskRunsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The sampling parameters that are associated with the machine learning transform. */
	export interface TaskRun {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId?: string | null;
		Status?: ConditionState | null;
		LogGroupName?: string | null;

		/** The configuration properties for the task run. */
		Properties?: TaskRunProperties;
		ErrorString?: string | null;
		StartedOn?: Date | null;
		LastModifiedOn?: Date | null;
		CompletedOn?: Date | null;
		ExecutionTime?: number | null;
	}

	/** The sampling parameters that are associated with the machine learning transform. */
	export interface TaskRunFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId: FormControl<string | null | undefined>,
		Status: FormControl<ConditionState | null | undefined>,
		LogGroupName: FormControl<string | null | undefined>,
		ErrorString: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		ExecutionTime: FormControl<number | null | undefined>,
	}
	export function CreateTaskRunFormGroup() {
		return new FormGroup<TaskRunFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			TaskRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Status: new FormControl<ConditionState | null | undefined>(undefined),
			LogGroupName: new FormControl<string | null | undefined>(undefined),
			ErrorString: new FormControl<string | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			ExecutionTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMLTaskRunsRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: string;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/** The criteria that are used to filter the task runs for the machine learning transform. */
		Filter?: TaskRunFilterCriteria;

		/** The sorting criteria that are used to sort the list of task runs for the machine learning transform. */
		Sort?: TaskRunSortCriteria;
	}
	export interface GetMLTaskRunsRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetMLTaskRunsRequestFormGroup() {
		return new FormGroup<GetMLTaskRunsRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}


	/** The criteria that are used to filter the task runs for the machine learning transform. */
	export interface TaskRunFilterCriteria {
		TaskRunType?: TaskRunPropertiesTaskType | null;
		Status?: ConditionState | null;
		StartedBefore?: Date | null;
		StartedAfter?: Date | null;
	}

	/** The criteria that are used to filter the task runs for the machine learning transform. */
	export interface TaskRunFilterCriteriaFormProperties {
		TaskRunType: FormControl<TaskRunPropertiesTaskType | null | undefined>,
		Status: FormControl<ConditionState | null | undefined>,
		StartedBefore: FormControl<Date | null | undefined>,
		StartedAfter: FormControl<Date | null | undefined>,
	}
	export function CreateTaskRunFilterCriteriaFormGroup() {
		return new FormGroup<TaskRunFilterCriteriaFormProperties>({
			TaskRunType: new FormControl<TaskRunPropertiesTaskType | null | undefined>(undefined),
			Status: new FormControl<ConditionState | null | undefined>(undefined),
			StartedBefore: new FormControl<Date | null | undefined>(undefined),
			StartedAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The sorting criteria that are used to sort the list of task runs for the machine learning transform. */
	export interface TaskRunSortCriteria {

		/** Required */
		Column: TaskRunSortCriteriaColumn;

		/** Required */
		SortDirection: TaskRunSortCriteriaSortDirection;
	}

	/** The sorting criteria that are used to sort the list of task runs for the machine learning transform. */
	export interface TaskRunSortCriteriaFormProperties {

		/** Required */
		Column: FormControl<TaskRunSortCriteriaColumn | null | undefined>,

		/** Required */
		SortDirection: FormControl<TaskRunSortCriteriaSortDirection | null | undefined>,
	}
	export function CreateTaskRunSortCriteriaFormGroup() {
		return new FormGroup<TaskRunSortCriteriaFormProperties>({
			Column: new FormControl<TaskRunSortCriteriaColumn | null | undefined>(undefined, [Validators.required]),
			SortDirection: new FormControl<TaskRunSortCriteriaSortDirection | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TaskRunSortCriteriaColumn { TASK_RUN_TYPE = 0, STATUS = 1, STARTED = 2 }

	export enum TaskRunSortCriteriaSortDirection { DESCENDING = 0, ASCENDING = 1 }

	export interface GetMLTransformResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;
		Status?: GetMLTransformResponseStatus | null;
		CreatedOn?: Date | null;
		LastModifiedOn?: Date | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		InputRecordTables?: Array<GlueTable>;

		/** The algorithm-specific parameters that are associated with the machine learning transform. */
		Parameters?: TransformParameters;

		/** Evaluation metrics provide an estimate of the quality of your machine learning transform. */
		EvaluationMetrics?: EvaluationMetrics;
		LabelCount?: number | null;

		/** Maximum items: 100 */
		Schema?: Array<SchemaColumn>;
		Role?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion?: string | null;
		MaxCapacity?: number | null;
		WorkerType?: DevEndpointWorkerType | null;
		NumberOfWorkers?: number | null;

		/** Minimum: 1 */
		Timeout?: number | null;
		MaxRetries?: number | null;
	}
	export interface GetMLTransformResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		Status: FormControl<GetMLTransformResponseStatus | null | undefined>,
		CreatedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		LabelCount: FormControl<number | null | undefined>,
		Role: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion: FormControl<string | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<DevEndpointWorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		Timeout: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
	}
	export function CreateGetMLTransformResponseFormGroup() {
		return new FormGroup<GetMLTransformResponseFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			Status: new FormControl<GetMLTransformResponseStatus | null | undefined>(undefined),
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			LabelCount: new FormControl<number | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^\w+\.\w+$')]),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<DevEndpointWorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetMLTransformResponseStatus { NOT_READY = 0, READY = 1, DELETING = 2 }


	/** Evaluation metrics provide an estimate of the quality of your machine learning transform. */
	export interface EvaluationMetrics {

		/** Required */
		TransformType: TransformParametersTransformType;

		/** The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise. */
		FindMatchesMetrics?: FindMatchesMetrics;
	}

	/** Evaluation metrics provide an estimate of the quality of your machine learning transform. */
	export interface EvaluationMetricsFormProperties {

		/** Required */
		TransformType: FormControl<TransformParametersTransformType | null | undefined>,
	}
	export function CreateEvaluationMetricsFormGroup() {
		return new FormGroup<EvaluationMetricsFormProperties>({
			TransformType: new FormControl<TransformParametersTransformType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise. */
	export interface FindMatchesMetrics {

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		AreaUnderPRCurve?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		Precision?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		Recall?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		F1?: number | null;

		/** <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p> <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p> */
		ConfusionMatrix?: ConfusionMatrix;
	}

	/** The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise. */
	export interface FindMatchesMetricsFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		AreaUnderPRCurve: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		Precision: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		Recall: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		F1: FormControl<number | null | undefined>,
	}
	export function CreateFindMatchesMetricsFormGroup() {
		return new FormGroup<FindMatchesMetricsFormProperties>({
			AreaUnderPRCurve: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			Precision: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			Recall: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			F1: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}


	/** <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p> <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p> */
	export interface ConfusionMatrix {
		NumTruePositives?: number | null;
		NumFalsePositives?: number | null;
		NumTrueNegatives?: number | null;
		NumFalseNegatives?: number | null;
	}

	/** <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p> <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p> */
	export interface ConfusionMatrixFormProperties {
		NumTruePositives: FormControl<number | null | undefined>,
		NumFalsePositives: FormControl<number | null | undefined>,
		NumTrueNegatives: FormControl<number | null | undefined>,
		NumFalseNegatives: FormControl<number | null | undefined>,
	}
	export function CreateConfusionMatrixFormGroup() {
		return new FormGroup<ConfusionMatrixFormProperties>({
			NumTruePositives: new FormControl<number | null | undefined>(undefined),
			NumFalsePositives: new FormControl<number | null | undefined>(undefined),
			NumTrueNegatives: new FormControl<number | null | undefined>(undefined),
			NumFalseNegatives: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A key-value pair representing a column and data type that this transform can run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures. */
	export interface SchemaColumn {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 131072
		 * Min length: 0
		 */
		DataType?: string | null;
	}

	/** A key-value pair representing a column and data type that this transform can run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures. */
	export interface SchemaColumnFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 131072
		 * Min length: 0
		 */
		DataType: FormControl<string | null | undefined>,
	}
	export function CreateSchemaColumnFormGroup() {
		return new FormGroup<SchemaColumnFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			DataType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(131072)]),
		});

	}

	export interface GetMLTransformRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: string;
	}
	export interface GetMLTransformRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,
	}
	export function CreateGetMLTransformRequestFormGroup() {
		return new FormGroup<GetMLTransformRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetMLTransformsResponse {

		/** Required */
		Transforms: Array<MLTransform>;
		NextToken?: string | null;
	}
	export interface GetMLTransformsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetMLTransformsResponseFormGroup() {
		return new FormGroup<GetMLTransformsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure for a machine learning transform. */
	export interface MLTransform {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;
		Status?: GetMLTransformResponseStatus | null;
		CreatedOn?: Date | null;
		LastModifiedOn?: Date | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		InputRecordTables?: Array<GlueTable>;

		/** The algorithm-specific parameters that are associated with the machine learning transform. */
		Parameters?: TransformParameters;

		/** Evaluation metrics provide an estimate of the quality of your machine learning transform. */
		EvaluationMetrics?: EvaluationMetrics;
		LabelCount?: number | null;

		/** Maximum items: 100 */
		Schema?: Array<SchemaColumn>;
		Role?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion?: string | null;
		MaxCapacity?: number | null;
		WorkerType?: DevEndpointWorkerType | null;
		NumberOfWorkers?: number | null;

		/** Minimum: 1 */
		Timeout?: number | null;
		MaxRetries?: number | null;
	}

	/** A structure for a machine learning transform. */
	export interface MLTransformFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		Status: FormControl<GetMLTransformResponseStatus | null | undefined>,
		CreatedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		LabelCount: FormControl<number | null | undefined>,
		Role: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion: FormControl<string | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<DevEndpointWorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		Timeout: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
	}
	export function CreateMLTransformFormGroup() {
		return new FormGroup<MLTransformFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			Status: new FormControl<GetMLTransformResponseStatus | null | undefined>(undefined),
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			LabelCount: new FormControl<number | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^\w+\.\w+$')]),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<DevEndpointWorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMLTransformsRequest {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/** The criteria used to filter the machine learning transforms. */
		Filter?: TransformFilterCriteria;

		/** The sorting criteria that are associated with the machine learning transform. */
		Sort?: TransformSortCriteria;
	}
	export interface GetMLTransformsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetMLTransformsRequestFormGroup() {
		return new FormGroup<GetMLTransformsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}


	/** The criteria used to filter the machine learning transforms. */
	export interface TransformFilterCriteria {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
		TransformType?: TransformParametersTransformType | null;
		Status?: GetMLTransformResponseStatus | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion?: string | null;
		CreatedBefore?: Date | null;
		CreatedAfter?: Date | null;
		LastModifiedBefore?: Date | null;
		LastModifiedAfter?: Date | null;

		/** Maximum items: 100 */
		Schema?: Array<SchemaColumn>;
	}

	/** The criteria used to filter the machine learning transforms. */
	export interface TransformFilterCriteriaFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		TransformType: FormControl<TransformParametersTransformType | null | undefined>,
		Status: FormControl<GetMLTransformResponseStatus | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion: FormControl<string | null | undefined>,
		CreatedBefore: FormControl<Date | null | undefined>,
		CreatedAfter: FormControl<Date | null | undefined>,
		LastModifiedBefore: FormControl<Date | null | undefined>,
		LastModifiedAfter: FormControl<Date | null | undefined>,
	}
	export function CreateTransformFilterCriteriaFormGroup() {
		return new FormGroup<TransformFilterCriteriaFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			TransformType: new FormControl<TransformParametersTransformType | null | undefined>(undefined),
			Status: new FormControl<GetMLTransformResponseStatus | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^\w+\.\w+$')]),
			CreatedBefore: new FormControl<Date | null | undefined>(undefined),
			CreatedAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The sorting criteria that are associated with the machine learning transform. */
	export interface TransformSortCriteria {

		/** Required */
		Column: TransformSortCriteriaColumn;

		/** Required */
		SortDirection: TaskRunSortCriteriaSortDirection;
	}

	/** The sorting criteria that are associated with the machine learning transform. */
	export interface TransformSortCriteriaFormProperties {

		/** Required */
		Column: FormControl<TransformSortCriteriaColumn | null | undefined>,

		/** Required */
		SortDirection: FormControl<TaskRunSortCriteriaSortDirection | null | undefined>,
	}
	export function CreateTransformSortCriteriaFormGroup() {
		return new FormGroup<TransformSortCriteriaFormProperties>({
			Column: new FormControl<TransformSortCriteriaColumn | null | undefined>(undefined, [Validators.required]),
			SortDirection: new FormControl<TaskRunSortCriteriaSortDirection | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TransformSortCriteriaColumn { NAME = 0, TRANSFORM_TYPE = 1, STATUS = 2, CREATED = 3, LAST_MODIFIED = 4 }

	export interface GetMappingResponse {

		/** Required */
		Mapping: Array<MappingEntry>;
	}
	export interface GetMappingResponseFormProperties {
	}
	export function CreateGetMappingResponseFormGroup() {
		return new FormGroup<GetMappingResponseFormProperties>({
		});

	}


	/** Defines a mapping. */
	export interface MappingEntry {
		SourceTable?: string | null;
		SourcePath?: string | null;
		SourceType?: string | null;
		TargetTable?: string | null;
		TargetPath?: string | null;
		TargetType?: string | null;
	}

	/** Defines a mapping. */
	export interface MappingEntryFormProperties {
		SourceTable: FormControl<string | null | undefined>,
		SourcePath: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		TargetTable: FormControl<string | null | undefined>,
		TargetPath: FormControl<string | null | undefined>,
		TargetType: FormControl<string | null | undefined>,
	}
	export function CreateMappingEntryFormGroup() {
		return new FormGroup<MappingEntryFormProperties>({
			SourceTable: new FormControl<string | null | undefined>(undefined),
			SourcePath: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			TargetTable: new FormControl<string | null | undefined>(undefined),
			TargetPath: new FormControl<string | null | undefined>(undefined),
			TargetType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMappingRequest {

		/**
		 * Specifies a table definition in the AWS Glue Data Catalog.
		 * Required
		 */
		Source: CatalogEntry;
		Sinks?: Array<CatalogEntry>;

		/** The location of resources. */
		Location?: Location;
	}
	export interface GetMappingRequestFormProperties {
	}
	export function CreateGetMappingRequestFormGroup() {
		return new FormGroup<GetMappingRequestFormProperties>({
		});

	}


	/** Specifies a table definition in the AWS Glue Data Catalog. */
	export interface CatalogEntry {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;
	}

	/** Specifies a table definition in the AWS Glue Data Catalog. */
	export interface CatalogEntryFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateCatalogEntryFormGroup() {
		return new FormGroup<CatalogEntryFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** The location of resources. */
	export interface Location {

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Jdbc?: Array<CodeGenNodeArg>;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		S3?: Array<CodeGenNodeArg>;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		DynamoDB?: Array<CodeGenNodeArg>;
	}

	/** The location of resources. */
	export interface LocationFormProperties {
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
		});

	}

	export interface GetPartitionResponse {

		/** Represents a slice of table data. */
		Partition?: Partition;
	}
	export interface GetPartitionResponseFormProperties {
	}
	export function CreateGetPartitionResponseFormGroup() {
		return new FormGroup<GetPartitionResponseFormProperties>({
		});

	}

	export interface GetPartitionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/** Required */
		PartitionValues: Array<string>;
	}
	export interface GetPartitionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateGetPartitionRequestFormGroup() {
		return new FormGroup<GetPartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetPartitionsResponse {
		Partitions?: Array<Partition>;
		NextToken?: string | null;
	}
	export interface GetPartitionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetPartitionsResponseFormGroup() {
		return new FormGroup<GetPartitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPartitionsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Expression?: string | null;
		NextToken?: string | null;

		/** Defines a non-overlapping region of a table's partitions, allowing multiple requests to be executed in parallel. */
		Segment?: Segment;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface GetPartitionsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Expression: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetPartitionsRequestFormGroup() {
		return new FormGroup<GetPartitionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Expression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}


	/** Defines a non-overlapping region of a table's partitions, allowing multiple requests to be executed in parallel. */
	export interface Segment {

		/**
		 * Required
		 * Minimum: 0
		 */
		SegmentNumber: number;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 10
		 */
		TotalSegments: number;
	}

	/** Defines a non-overlapping region of a table's partitions, allowing multiple requests to be executed in parallel. */
	export interface SegmentFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		SegmentNumber: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 10
		 */
		TotalSegments: FormControl<number | null | undefined>,
	}
	export function CreateSegmentFormGroup() {
		return new FormGroup<SegmentFormProperties>({
			SegmentNumber: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			TotalSegments: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(10)]),
		});

	}

	export interface GetPlanResponse {
		PythonScript?: string | null;
		ScalaCode?: string | null;
	}
	export interface GetPlanResponseFormProperties {
		PythonScript: FormControl<string | null | undefined>,
		ScalaCode: FormControl<string | null | undefined>,
	}
	export function CreateGetPlanResponseFormGroup() {
		return new FormGroup<GetPlanResponseFormProperties>({
			PythonScript: new FormControl<string | null | undefined>(undefined),
			ScalaCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPlanRequest {

		/** Required */
		Mapping: Array<MappingEntry>;

		/**
		 * Specifies a table definition in the AWS Glue Data Catalog.
		 * Required
		 */
		Source: CatalogEntry;
		Sinks?: Array<CatalogEntry>;

		/** The location of resources. */
		Location?: Location;
		Language?: CreateScriptRequestLanguage | null;
	}
	export interface GetPlanRequestFormProperties {
		Language: FormControl<CreateScriptRequestLanguage | null | undefined>,
	}
	export function CreateGetPlanRequestFormGroup() {
		return new FormGroup<GetPlanRequestFormProperties>({
			Language: new FormControl<CreateScriptRequestLanguage | null | undefined>(undefined),
		});

	}

	export interface GetResourcePolicyResponse {

		/**
		 * Max length: 10240
		 * Min length: 2
		 */
		PolicyInJson?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		PolicyHash?: string | null;
		CreateTime?: Date | null;
		UpdateTime?: Date | null;
	}
	export interface GetResourcePolicyResponseFormProperties {

		/**
		 * Max length: 10240
		 * Min length: 2
		 */
		PolicyInJson: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		PolicyHash: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetResourcePolicyResponseFormGroup() {
		return new FormGroup<GetResourcePolicyResponseFormProperties>({
			PolicyInJson: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(10240)]),
			PolicyHash: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetResourcePolicyRequest {
	}
	export interface GetResourcePolicyRequestFormProperties {
	}
	export function CreateGetResourcePolicyRequestFormGroup() {
		return new FormGroup<GetResourcePolicyRequestFormProperties>({
		});

	}

	export interface GetSecurityConfigurationResponse {

		/** Specifies a security configuration. */
		SecurityConfiguration?: SecurityConfiguration;
	}
	export interface GetSecurityConfigurationResponseFormProperties {
	}
	export function CreateGetSecurityConfigurationResponseFormGroup() {
		return new FormGroup<GetSecurityConfigurationResponseFormProperties>({
		});

	}


	/** Specifies a security configuration. */
	export interface SecurityConfiguration {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
		CreatedTimeStamp?: Date | null;

		/** Specifies an encryption configuration. */
		EncryptionConfiguration?: EncryptionConfiguration;
	}

	/** Specifies a security configuration. */
	export interface SecurityConfigurationFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		CreatedTimeStamp: FormControl<Date | null | undefined>,
	}
	export function CreateSecurityConfigurationFormGroup() {
		return new FormGroup<SecurityConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			CreatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetSecurityConfigurationRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface GetSecurityConfigurationRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetSecurityConfigurationRequestFormGroup() {
		return new FormGroup<GetSecurityConfigurationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetSecurityConfigurationsResponse {
		SecurityConfigurations?: Array<SecurityConfiguration>;
		NextToken?: string | null;
	}
	export interface GetSecurityConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSecurityConfigurationsResponseFormGroup() {
		return new FormGroup<GetSecurityConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSecurityConfigurationsRequest {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface GetSecurityConfigurationsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSecurityConfigurationsRequestFormGroup() {
		return new FormGroup<GetSecurityConfigurationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTableResponse {

		/** Represents a collection of related data organized in columns and rows. */
		Table?: Table;
	}
	export interface GetTableResponseFormProperties {
	}
	export function CreateGetTableResponseFormGroup() {
		return new FormGroup<GetTableResponseFormProperties>({
		});

	}


	/** Represents a collection of related data organized in columns and rows. */
	export interface Table {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Owner?: string | null;
		CreateTime?: Date | null;
		UpdateTime?: Date | null;
		LastAccessTime?: Date | null;
		LastAnalyzedTime?: Date | null;

		/** Minimum: 0 */
		Retention?: number | null;

		/** Describes the physical storage of table data. */
		StorageDescriptor?: StorageDescriptor;
		PartitionKeys?: Array<Column>;

		/** Max length: 409600 */
		ViewOriginalText?: string | null;

		/** Max length: 409600 */
		ViewExpandedText?: string | null;

		/** Max length: 255 */
		TableType?: string | null;
		Parameters?: ParametersMap;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CreatedBy?: string | null;
		IsRegisteredWithLakeFormation?: boolean | null;
	}

	/** Represents a collection of related data organized in columns and rows. */
	export interface TableFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Owner: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
		UpdateTime: FormControl<Date | null | undefined>,
		LastAccessTime: FormControl<Date | null | undefined>,
		LastAnalyzedTime: FormControl<Date | null | undefined>,

		/** Minimum: 0 */
		Retention: FormControl<number | null | undefined>,

		/** Max length: 409600 */
		ViewOriginalText: FormControl<string | null | undefined>,

		/** Max length: 409600 */
		ViewExpandedText: FormControl<string | null | undefined>,

		/** Max length: 255 */
		TableType: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CreatedBy: FormControl<string | null | undefined>,
		IsRegisteredWithLakeFormation: FormControl<boolean | null | undefined>,
	}
	export function CreateTableFormGroup() {
		return new FormGroup<TableFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined),
			LastAccessTime: new FormControl<Date | null | undefined>(undefined),
			LastAnalyzedTime: new FormControl<Date | null | undefined>(undefined),
			Retention: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ViewOriginalText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(409600)]),
			ViewExpandedText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(409600)]),
			TableType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			CreatedBy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			IsRegisteredWithLakeFormation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetTableRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface GetTableRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetTableRequestFormGroup() {
		return new FormGroup<GetTableRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetTableVersionResponse {

		/** Specifies a version of a table. */
		TableVersion?: TableVersion;
	}
	export interface GetTableVersionResponseFormProperties {
	}
	export function CreateGetTableVersionResponseFormGroup() {
		return new FormGroup<GetTableVersionResponseFormProperties>({
		});

	}


	/** Specifies a version of a table. */
	export interface TableVersion {

		/** Represents a collection of related data organized in columns and rows. */
		Table?: Table;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		VersionId?: string | null;
	}

	/** Specifies a version of a table. */
	export interface TableVersionFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateTableVersionFormGroup() {
		return new FormGroup<TableVersionFormProperties>({
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetTableVersionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		VersionId?: string | null;
	}
	export interface GetTableVersionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateGetTableVersionRequestFormGroup() {
		return new FormGroup<GetTableVersionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetTableVersionsResponse {
		TableVersions?: Array<TableVersion>;
		NextToken?: string | null;
	}
	export interface GetTableVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTableVersionsResponseFormGroup() {
		return new FormGroup<GetTableVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTableVersionsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface GetTableVersionsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetTableVersionsRequestFormGroup() {
		return new FormGroup<GetTableVersionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface GetTablesResponse {
		TableList?: Array<Table>;
		NextToken?: string | null;
	}
	export interface GetTablesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTablesResponseFormGroup() {
		return new FormGroup<GetTablesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTablesRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Expression?: string | null;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface GetTablesRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Expression: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetTablesRequestFormGroup() {
		return new FormGroup<GetTablesRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Expression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface GetTagsResponse {
		Tags?: TagsMap;
	}
	export interface GetTagsResponseFormProperties {
	}
	export function CreateGetTagsResponseFormGroup() {
		return new FormGroup<GetTagsResponseFormProperties>({
		});

	}

	export interface GetTagsRequest {

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 1
		 */
		ResourceArn: string;
	}
	export interface GetTagsRequestFormProperties {

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetTagsRequestFormGroup() {
		return new FormGroup<GetTagsRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10240), Validators.pattern('arn:aws:glue:.*')]),
		});

	}

	export interface GetTriggerResponse {

		/** Information about a specific trigger. */
		Trigger?: Trigger;
	}
	export interface GetTriggerResponseFormProperties {
	}
	export function CreateGetTriggerResponseFormGroup() {
		return new FormGroup<GetTriggerResponseFormProperties>({
		});

	}

	export interface GetTriggerRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface GetTriggerRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetTriggerRequestFormGroup() {
		return new FormGroup<GetTriggerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetTriggersResponse {
		Triggers?: Array<Trigger>;
		NextToken?: string | null;
	}
	export interface GetTriggersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTriggersResponseFormGroup() {
		return new FormGroup<GetTriggersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTriggersRequest {
		NextToken?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DependentJobName?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface GetTriggersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DependentJobName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetTriggersRequestFormGroup() {
		return new FormGroup<GetTriggersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			DependentJobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface GetUserDefinedFunctionResponse {

		/** Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition. */
		UserDefinedFunction?: UserDefinedFunction;
	}
	export interface GetUserDefinedFunctionResponseFormProperties {
	}
	export function CreateGetUserDefinedFunctionResponseFormGroup() {
		return new FormGroup<GetUserDefinedFunctionResponseFormProperties>({
		});

	}


	/** Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition. */
	export interface UserDefinedFunction {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		FunctionName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ClassName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		OwnerName?: string | null;
		OwnerType?: UserDefinedFunctionInputOwnerType | null;
		CreateTime?: Date | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 1000
		 */
		ResourceUris?: Array<ResourceUri>;
	}

	/** Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition. */
	export interface UserDefinedFunctionFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		FunctionName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ClassName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		OwnerName: FormControl<string | null | undefined>,
		OwnerType: FormControl<UserDefinedFunctionInputOwnerType | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUserDefinedFunctionFormGroup() {
		return new FormGroup<UserDefinedFunctionFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ClassName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			OwnerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			OwnerType: new FormControl<UserDefinedFunctionInputOwnerType | null | undefined>(undefined),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetUserDefinedFunctionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		FunctionName: string;
	}
	export interface GetUserDefinedFunctionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		FunctionName: FormControl<string | null | undefined>,
	}
	export function CreateGetUserDefinedFunctionRequestFormGroup() {
		return new FormGroup<GetUserDefinedFunctionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetUserDefinedFunctionsResponse {
		UserDefinedFunctions?: Array<UserDefinedFunction>;
		NextToken?: string | null;
	}
	export interface GetUserDefinedFunctionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetUserDefinedFunctionsResponseFormGroup() {
		return new FormGroup<GetUserDefinedFunctionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUserDefinedFunctionsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Pattern: string;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface GetUserDefinedFunctionsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Pattern: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetUserDefinedFunctionsRequestFormGroup() {
		return new FormGroup<GetUserDefinedFunctionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Pattern: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface GetWorkflowResponse {

		/** A workflow represents a flow in which AWS Glue components should be executed to complete a logical task. */
		Workflow?: Workflow;
	}
	export interface GetWorkflowResponseFormProperties {
	}
	export function CreateGetWorkflowResponseFormGroup() {
		return new FormGroup<GetWorkflowResponseFormProperties>({
		});

	}

	export interface GetWorkflowRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
		IncludeGraph?: boolean | null;
	}
	export interface GetWorkflowRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		IncludeGraph: FormControl<boolean | null | undefined>,
	}
	export function CreateGetWorkflowRequestFormGroup() {
		return new FormGroup<GetWorkflowRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			IncludeGraph: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetWorkflowRunResponse {

		/** A workflow run is an execution of a workflow providing all the runtime information. */
		Run?: WorkflowRun;
	}
	export interface GetWorkflowRunResponseFormProperties {
	}
	export function CreateGetWorkflowRunResponseFormGroup() {
		return new FormGroup<GetWorkflowRunResponseFormProperties>({
		});

	}

	export interface GetWorkflowRunRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		RunId: string;
		IncludeGraph?: boolean | null;
	}
	export interface GetWorkflowRunRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		RunId: FormControl<string | null | undefined>,
		IncludeGraph: FormControl<boolean | null | undefined>,
	}
	export function CreateGetWorkflowRunRequestFormGroup() {
		return new FormGroup<GetWorkflowRunRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			IncludeGraph: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetWorkflowRunPropertiesResponse {
		RunProperties?: WorkflowRunProperties;
	}
	export interface GetWorkflowRunPropertiesResponseFormProperties {
	}
	export function CreateGetWorkflowRunPropertiesResponseFormGroup() {
		return new FormGroup<GetWorkflowRunPropertiesResponseFormProperties>({
		});

	}

	export interface GetWorkflowRunPropertiesRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		RunId: string;
	}
	export interface GetWorkflowRunPropertiesRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkflowRunPropertiesRequestFormGroup() {
		return new FormGroup<GetWorkflowRunPropertiesRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetWorkflowRunsResponse {

		/**
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		Runs?: Array<WorkflowRun>;
		NextToken?: string | null;
	}
	export interface GetWorkflowRunsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkflowRunsResponseFormGroup() {
		return new FormGroup<GetWorkflowRunsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetWorkflowRunsRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
		IncludeGraph?: boolean | null;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface GetWorkflowRunsRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		IncludeGraph: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetWorkflowRunsRequestFormGroup() {
		return new FormGroup<GetWorkflowRunsRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			IncludeGraph: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface ImportCatalogToGlueResponse {
	}
	export interface ImportCatalogToGlueResponseFormProperties {
	}
	export function CreateImportCatalogToGlueResponseFormGroup() {
		return new FormGroup<ImportCatalogToGlueResponseFormProperties>({
		});

	}

	export interface ImportCatalogToGlueRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;
	}
	export interface ImportCatalogToGlueRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateImportCatalogToGlueRequestFormGroup() {
		return new FormGroup<ImportCatalogToGlueRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface ListCrawlersResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		CrawlerNames?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListCrawlersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCrawlersResponseFormGroup() {
		return new FormGroup<ListCrawlersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCrawlersRequest {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
		Tags?: TagsMap;
	}
	export interface ListCrawlersRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCrawlersRequestFormGroup() {
		return new FormGroup<ListCrawlersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDevEndpointsResponse {
		DevEndpointNames?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListDevEndpointsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevEndpointsResponseFormGroup() {
		return new FormGroup<ListDevEndpointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDevEndpointsRequest {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
		Tags?: TagsMap;
	}
	export interface ListDevEndpointsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDevEndpointsRequestFormGroup() {
		return new FormGroup<ListDevEndpointsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface ListJobsResponse {
		JobNames?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListJobsRequest {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
		Tags?: TagsMap;
	}
	export interface ListJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListJobsRequestFormGroup() {
		return new FormGroup<ListJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface ListMLTransformsResponse {

		/** Required */
		TransformIds: Array<string>;
		NextToken?: string | null;
	}
	export interface ListMLTransformsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMLTransformsResponseFormGroup() {
		return new FormGroup<ListMLTransformsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMLTransformsRequest {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/** The criteria used to filter the machine learning transforms. */
		Filter?: TransformFilterCriteria;

		/** The sorting criteria that are associated with the machine learning transform. */
		Sort?: TransformSortCriteria;
		Tags?: TagsMap;
	}
	export interface ListMLTransformsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMLTransformsRequestFormGroup() {
		return new FormGroup<ListMLTransformsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface ListTriggersResponse {
		TriggerNames?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListTriggersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTriggersResponseFormGroup() {
		return new FormGroup<ListTriggersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTriggersRequest {
		NextToken?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DependentJobName?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
		Tags?: TagsMap;
	}
	export interface ListTriggersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DependentJobName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTriggersRequestFormGroup() {
		return new FormGroup<ListTriggersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			DependentJobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface ListWorkflowsResponse {

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		Workflows?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListWorkflowsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowsResponseFormGroup() {
		return new FormGroup<ListWorkflowsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkflowsRequest {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface ListWorkflowsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorkflowsRequestFormGroup() {
		return new FormGroup<ListWorkflowsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface PutDataCatalogEncryptionSettingsResponse {
	}
	export interface PutDataCatalogEncryptionSettingsResponseFormProperties {
	}
	export function CreatePutDataCatalogEncryptionSettingsResponseFormGroup() {
		return new FormGroup<PutDataCatalogEncryptionSettingsResponseFormProperties>({
		});

	}

	export interface PutDataCatalogEncryptionSettingsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Contains configuration information for maintaining Data Catalog security.
		 * Required
		 */
		DataCatalogEncryptionSettings: DataCatalogEncryptionSettings;
	}
	export interface PutDataCatalogEncryptionSettingsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreatePutDataCatalogEncryptionSettingsRequestFormGroup() {
		return new FormGroup<PutDataCatalogEncryptionSettingsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface PutResourcePolicyResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		PolicyHash?: string | null;
	}
	export interface PutResourcePolicyResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		PolicyHash: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
			PolicyHash: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface PutResourcePolicyRequest {

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 2
		 */
		PolicyInJson: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		PolicyHashCondition?: string | null;
		PolicyExistsCondition?: PutResourcePolicyRequestPolicyExistsCondition | null;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 2
		 */
		PolicyInJson: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		PolicyHashCondition: FormControl<string | null | undefined>,
		PolicyExistsCondition: FormControl<PutResourcePolicyRequestPolicyExistsCondition | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			PolicyInJson: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(10240)]),
			PolicyHashCondition: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			PolicyExistsCondition: new FormControl<PutResourcePolicyRequestPolicyExistsCondition | null | undefined>(undefined),
		});

	}

	export enum PutResourcePolicyRequestPolicyExistsCondition { MUST_EXIST = 0, NOT_EXIST = 1, NONE = 2 }

	export interface PutWorkflowRunPropertiesResponse {
	}
	export interface PutWorkflowRunPropertiesResponseFormProperties {
	}
	export function CreatePutWorkflowRunPropertiesResponseFormGroup() {
		return new FormGroup<PutWorkflowRunPropertiesResponseFormProperties>({
		});

	}

	export interface PutWorkflowRunPropertiesRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		RunId: string;

		/** Required */
		RunProperties: WorkflowRunProperties;
	}
	export interface PutWorkflowRunPropertiesRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreatePutWorkflowRunPropertiesRequestFormGroup() {
		return new FormGroup<PutWorkflowRunPropertiesRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface ResetJobBookmarkResponse {

		/** Defines a point that a job can resume processing. */
		JobBookmarkEntry?: JobBookmarkEntry;
	}
	export interface ResetJobBookmarkResponseFormProperties {
	}
	export function CreateResetJobBookmarkResponseFormGroup() {
		return new FormGroup<ResetJobBookmarkResponseFormProperties>({
		});

	}

	export interface ResetJobBookmarkRequest {

		/** Required */
		JobName: string;
		RunId?: string | null;
	}
	export interface ResetJobBookmarkRequestFormProperties {

		/** Required */
		JobName: FormControl<string | null | undefined>,
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateResetJobBookmarkRequestFormGroup() {
		return new FormGroup<ResetJobBookmarkRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchTablesResponse {
		NextToken?: string | null;
		TableList?: Array<Table>;
	}
	export interface SearchTablesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchTablesResponseFormGroup() {
		return new FormGroup<SearchTablesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchTablesRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;
		NextToken?: string | null;
		Filters?: Array<PropertyPredicate>;

		/** Max length: 1024 */
		SearchText?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		SortCriteria?: Array<SortCriterion>;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface SearchTablesRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		SearchText: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchTablesRequestFormGroup() {
		return new FormGroup<SearchTablesRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SearchText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}


	/** Defines a property predicate. */
	export interface PropertyPredicate {

		/** Max length: 1024 */
		Key?: string | null;

		/** Max length: 1024 */
		Value?: string | null;
		Comparator?: PropertyPredicateComparator | null;
	}

	/** Defines a property predicate. */
	export interface PropertyPredicateFormProperties {

		/** Max length: 1024 */
		Key: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		Value: FormControl<string | null | undefined>,
		Comparator: FormControl<PropertyPredicateComparator | null | undefined>,
	}
	export function CreatePropertyPredicateFormGroup() {
		return new FormGroup<PropertyPredicateFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			Comparator: new FormControl<PropertyPredicateComparator | null | undefined>(undefined),
		});

	}

	export enum PropertyPredicateComparator { EQUALS = 0, GREATER_THAN = 1, LESS_THAN = 2, GREATER_THAN_EQUALS = 3, LESS_THAN_EQUALS = 4 }


	/** Specifies a field to sort by and a sort order. */
	export interface SortCriterion {

		/** Max length: 1024 */
		FieldName?: string | null;
		Sort?: SortCriterionSort | null;
	}

	/** Specifies a field to sort by and a sort order. */
	export interface SortCriterionFormProperties {

		/** Max length: 1024 */
		FieldName: FormControl<string | null | undefined>,
		Sort: FormControl<SortCriterionSort | null | undefined>,
	}
	export function CreateSortCriterionFormGroup() {
		return new FormGroup<SortCriterionFormProperties>({
			FieldName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			Sort: new FormControl<SortCriterionSort | null | undefined>(undefined),
		});

	}

	export enum SortCriterionSort { ASC = 0, DESC = 1 }

	export interface StartCrawlerResponse {
	}
	export interface StartCrawlerResponseFormProperties {
	}
	export function CreateStartCrawlerResponseFormGroup() {
		return new FormGroup<StartCrawlerResponseFormProperties>({
		});

	}

	export interface StartCrawlerRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface StartCrawlerRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartCrawlerRequestFormGroup() {
		return new FormGroup<StartCrawlerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface StartCrawlerScheduleResponse {
	}
	export interface StartCrawlerScheduleResponseFormProperties {
	}
	export function CreateStartCrawlerScheduleResponseFormGroup() {
		return new FormGroup<StartCrawlerScheduleResponseFormProperties>({
		});

	}

	export interface StartCrawlerScheduleRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		CrawlerName: string;
	}
	export interface StartCrawlerScheduleRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		CrawlerName: FormControl<string | null | undefined>,
	}
	export function CreateStartCrawlerScheduleRequestFormGroup() {
		return new FormGroup<StartCrawlerScheduleRequestFormProperties>({
			CrawlerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface SchedulerRunningException {
	}
	export interface SchedulerRunningExceptionFormProperties {
	}
	export function CreateSchedulerRunningExceptionFormGroup() {
		return new FormGroup<SchedulerRunningExceptionFormProperties>({
		});

	}

	export interface NoScheduleException {
	}
	export interface NoScheduleExceptionFormProperties {
	}
	export function CreateNoScheduleExceptionFormGroup() {
		return new FormGroup<NoScheduleExceptionFormProperties>({
		});

	}

	export interface StartExportLabelsTaskRunResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId?: string | null;
	}
	export interface StartExportLabelsTaskRunResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId: FormControl<string | null | undefined>,
	}
	export function CreateStartExportLabelsTaskRunResponseFormGroup() {
		return new FormGroup<StartExportLabelsTaskRunResponseFormProperties>({
			TaskRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface StartExportLabelsTaskRunRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: string;

		/** Required */
		OutputS3Path: string;
	}
	export interface StartExportLabelsTaskRunRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,

		/** Required */
		OutputS3Path: FormControl<string | null | undefined>,
	}
	export function CreateStartExportLabelsTaskRunRequestFormGroup() {
		return new FormGroup<StartExportLabelsTaskRunRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			OutputS3Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartImportLabelsTaskRunResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId?: string | null;
	}
	export interface StartImportLabelsTaskRunResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId: FormControl<string | null | undefined>,
	}
	export function CreateStartImportLabelsTaskRunResponseFormGroup() {
		return new FormGroup<StartImportLabelsTaskRunResponseFormProperties>({
			TaskRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface StartImportLabelsTaskRunRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: string;

		/** Required */
		InputS3Path: string;
		ReplaceAllLabels?: boolean | null;
	}
	export interface StartImportLabelsTaskRunRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,

		/** Required */
		InputS3Path: FormControl<string | null | undefined>,
		ReplaceAllLabels: FormControl<boolean | null | undefined>,
	}
	export function CreateStartImportLabelsTaskRunRequestFormGroup() {
		return new FormGroup<StartImportLabelsTaskRunRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			InputS3Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplaceAllLabels: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartJobRunResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobRunId?: string | null;
	}
	export interface StartJobRunResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobRunId: FormControl<string | null | undefined>,
	}
	export function CreateStartJobRunResponseFormGroup() {
		return new FormGroup<StartJobRunResponseFormProperties>({
			JobRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface StartJobRunRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobRunId?: string | null;
		Arguments?: GenericMap;
		AllocatedCapacity?: number | null;

		/** Minimum: 1 */
		Timeout?: number | null;
		MaxCapacity?: number | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration?: string | null;

		/** Specifies configuration properties of a notification. */
		NotificationProperty?: NotificationProperty;
		WorkerType?: DevEndpointWorkerType | null;
		NumberOfWorkers?: number | null;
	}
	export interface StartJobRunRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobRunId: FormControl<string | null | undefined>,
		AllocatedCapacity: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		Timeout: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration: FormControl<string | null | undefined>,
		WorkerType: FormControl<DevEndpointWorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
	}
	export function CreateStartJobRunRequestFormGroup() {
		return new FormGroup<StartJobRunRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			JobRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			AllocatedCapacity: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			WorkerType: new FormControl<DevEndpointWorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConcurrentRunsExceededException {
	}
	export interface ConcurrentRunsExceededExceptionFormProperties {
	}
	export function CreateConcurrentRunsExceededExceptionFormGroup() {
		return new FormGroup<ConcurrentRunsExceededExceptionFormProperties>({
		});

	}

	export interface StartMLEvaluationTaskRunResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId?: string | null;
	}
	export interface StartMLEvaluationTaskRunResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId: FormControl<string | null | undefined>,
	}
	export function CreateStartMLEvaluationTaskRunResponseFormGroup() {
		return new FormGroup<StartMLEvaluationTaskRunResponseFormProperties>({
			TaskRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface StartMLEvaluationTaskRunRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: string;
	}
	export interface StartMLEvaluationTaskRunRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,
	}
	export function CreateStartMLEvaluationTaskRunRequestFormGroup() {
		return new FormGroup<StartMLEvaluationTaskRunRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface MLTransformNotReadyException {
	}
	export interface MLTransformNotReadyExceptionFormProperties {
	}
	export function CreateMLTransformNotReadyExceptionFormGroup() {
		return new FormGroup<MLTransformNotReadyExceptionFormProperties>({
		});

	}

	export interface StartMLLabelingSetGenerationTaskRunResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId?: string | null;
	}
	export interface StartMLLabelingSetGenerationTaskRunResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TaskRunId: FormControl<string | null | undefined>,
	}
	export function CreateStartMLLabelingSetGenerationTaskRunResponseFormGroup() {
		return new FormGroup<StartMLLabelingSetGenerationTaskRunResponseFormProperties>({
			TaskRunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface StartMLLabelingSetGenerationTaskRunRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: string;

		/** Required */
		OutputS3Path: string;
	}
	export interface StartMLLabelingSetGenerationTaskRunRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,

		/** Required */
		OutputS3Path: FormControl<string | null | undefined>,
	}
	export function CreateStartMLLabelingSetGenerationTaskRunRequestFormGroup() {
		return new FormGroup<StartMLLabelingSetGenerationTaskRunRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			OutputS3Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartTriggerResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface StartTriggerResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartTriggerResponseFormGroup() {
		return new FormGroup<StartTriggerResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface StartTriggerRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface StartTriggerRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartTriggerRequestFormGroup() {
		return new FormGroup<StartTriggerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface StartWorkflowRunResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		RunId?: string | null;
	}
	export interface StartWorkflowRunResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateStartWorkflowRunResponseFormGroup() {
		return new FormGroup<StartWorkflowRunResponseFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface StartWorkflowRunRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface StartWorkflowRunRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartWorkflowRunRequestFormGroup() {
		return new FormGroup<StartWorkflowRunRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface StopCrawlerResponse {
	}
	export interface StopCrawlerResponseFormProperties {
	}
	export function CreateStopCrawlerResponseFormGroup() {
		return new FormGroup<StopCrawlerResponseFormProperties>({
		});

	}

	export interface StopCrawlerRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface StopCrawlerRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopCrawlerRequestFormGroup() {
		return new FormGroup<StopCrawlerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CrawlerNotRunningException {
	}
	export interface CrawlerNotRunningExceptionFormProperties {
	}
	export function CreateCrawlerNotRunningExceptionFormGroup() {
		return new FormGroup<CrawlerNotRunningExceptionFormProperties>({
		});

	}

	export interface CrawlerStoppingException {
	}
	export interface CrawlerStoppingExceptionFormProperties {
	}
	export function CreateCrawlerStoppingExceptionFormGroup() {
		return new FormGroup<CrawlerStoppingExceptionFormProperties>({
		});

	}

	export interface StopCrawlerScheduleResponse {
	}
	export interface StopCrawlerScheduleResponseFormProperties {
	}
	export function CreateStopCrawlerScheduleResponseFormGroup() {
		return new FormGroup<StopCrawlerScheduleResponseFormProperties>({
		});

	}

	export interface StopCrawlerScheduleRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		CrawlerName: string;
	}
	export interface StopCrawlerScheduleRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		CrawlerName: FormControl<string | null | undefined>,
	}
	export function CreateStopCrawlerScheduleRequestFormGroup() {
		return new FormGroup<StopCrawlerScheduleRequestFormProperties>({
			CrawlerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface SchedulerNotRunningException {
	}
	export interface SchedulerNotRunningExceptionFormProperties {
	}
	export function CreateSchedulerNotRunningExceptionFormGroup() {
		return new FormGroup<SchedulerNotRunningExceptionFormProperties>({
		});

	}

	export interface StopTriggerResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface StopTriggerResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopTriggerResponseFormGroup() {
		return new FormGroup<StopTriggerResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface StopTriggerRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface StopTriggerRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopTriggerRequestFormGroup() {
		return new FormGroup<StopTriggerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface StopWorkflowRunResponse {
	}
	export interface StopWorkflowRunResponseFormProperties {
	}
	export function CreateStopWorkflowRunResponseFormGroup() {
		return new FormGroup<StopWorkflowRunResponseFormProperties>({
		});

	}

	export interface StopWorkflowRunRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		RunId: string;
	}
	export interface StopWorkflowRunRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateStopWorkflowRunRequestFormGroup() {
		return new FormGroup<StopWorkflowRunRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface IllegalWorkflowStateException {
	}
	export interface IllegalWorkflowStateExceptionFormProperties {
	}
	export function CreateIllegalWorkflowStateExceptionFormGroup() {
		return new FormGroup<IllegalWorkflowStateExceptionFormProperties>({
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

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 1
		 */
		ResourceArn: string;

		/** Required */
		TagsToAdd: TagsMap;
	}
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10240), Validators.pattern('arn:aws:glue:.*')]),
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

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 1
		 */
		ResourceArn: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		TagsToRemove: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10240), Validators.pattern('arn:aws:glue:.*')]),
		});

	}

	export interface UpdateClassifierResponse {
	}
	export interface UpdateClassifierResponseFormProperties {
	}
	export function CreateUpdateClassifierResponseFormGroup() {
		return new FormGroup<UpdateClassifierResponseFormProperties>({
		});

	}

	export interface UpdateClassifierRequest {

		/** Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>. */
		GrokClassifier?: UpdateGrokClassifierRequest;

		/** Specifies an XML classifier to be updated. */
		XMLClassifier?: UpdateXMLClassifierRequest;

		/** Specifies a JSON classifier to be updated. */
		JsonClassifier?: UpdateJsonClassifierRequest;

		/** Specifies a custom CSV classifier to be updated. */
		CsvClassifier?: UpdateCsvClassifierRequest;
	}
	export interface UpdateClassifierRequestFormProperties {
	}
	export function CreateUpdateClassifierRequestFormGroup() {
		return new FormGroup<UpdateClassifierRequestFormProperties>({
		});

	}


	/** Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>. */
	export interface UpdateGrokClassifierRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
		Classification?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		GrokPattern?: string | null;

		/**
		 * Max length: 16000
		 * Min length: 0
		 */
		CustomPatterns?: string | null;
	}

	/** Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>. */
	export interface UpdateGrokClassifierRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Classification: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		GrokPattern: FormControl<string | null | undefined>,

		/**
		 * Max length: 16000
		 * Min length: 0
		 */
		CustomPatterns: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGrokClassifierRequestFormGroup() {
		return new FormGroup<UpdateGrokClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Classification: new FormControl<string | null | undefined>(undefined),
			GrokPattern: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			CustomPatterns: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(16000)]),
		});

	}


	/** Specifies an XML classifier to be updated. */
	export interface UpdateXMLClassifierRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
		Classification?: string | null;
		RowTag?: string | null;
	}

	/** Specifies an XML classifier to be updated. */
	export interface UpdateXMLClassifierRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Classification: FormControl<string | null | undefined>,
		RowTag: FormControl<string | null | undefined>,
	}
	export function CreateUpdateXMLClassifierRequestFormGroup() {
		return new FormGroup<UpdateXMLClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Classification: new FormControl<string | null | undefined>(undefined),
			RowTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a JSON classifier to be updated. */
	export interface UpdateJsonClassifierRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
		JsonPath?: string | null;
	}

	/** Specifies a JSON classifier to be updated. */
	export interface UpdateJsonClassifierRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		JsonPath: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJsonClassifierRequestFormGroup() {
		return new FormGroup<UpdateJsonClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			JsonPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a custom CSV classifier to be updated. */
	export interface UpdateCsvClassifierRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		Delimiter?: string | null;

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		QuoteSymbol?: string | null;
		ContainsHeader?: CreateCsvClassifierRequestContainsHeader | null;
		Header?: Array<string>;
		DisableValueTrimming?: boolean | null;
		AllowSingleColumn?: boolean | null;
	}

	/** Specifies a custom CSV classifier to be updated. */
	export interface UpdateCsvClassifierRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		Delimiter: FormControl<string | null | undefined>,

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		QuoteSymbol: FormControl<string | null | undefined>,
		ContainsHeader: FormControl<CreateCsvClassifierRequestContainsHeader | null | undefined>,
		DisableValueTrimming: FormControl<boolean | null | undefined>,
		AllowSingleColumn: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateCsvClassifierRequestFormGroup() {
		return new FormGroup<UpdateCsvClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Delimiter: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1), Validators.pattern('[^\r\n]')]),
			QuoteSymbol: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1), Validators.pattern('[^\r\n]')]),
			ContainsHeader: new FormControl<CreateCsvClassifierRequestContainsHeader | null | undefined>(undefined),
			DisableValueTrimming: new FormControl<boolean | null | undefined>(undefined),
			AllowSingleColumn: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface VersionMismatchException {
	}
	export interface VersionMismatchExceptionFormProperties {
	}
	export function CreateVersionMismatchExceptionFormGroup() {
		return new FormGroup<VersionMismatchExceptionFormProperties>({
		});

	}

	export interface UpdateConnectionResponse {
	}
	export interface UpdateConnectionResponseFormProperties {
	}
	export function CreateUpdateConnectionResponseFormGroup() {
		return new FormGroup<UpdateConnectionResponseFormProperties>({
		});

	}

	export interface UpdateConnectionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * A structure that is used to specify a connection to create or update.
		 * Required
		 */
		ConnectionInput: ConnectionInput;
	}
	export interface UpdateConnectionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectionRequestFormGroup() {
		return new FormGroup<UpdateConnectionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdateCrawlerResponse {
	}
	export interface UpdateCrawlerResponseFormProperties {
	}
	export function CreateUpdateCrawlerResponseFormGroup() {
		return new FormGroup<UpdateCrawlerResponseFormProperties>({
		});

	}

	export interface UpdateCrawlerRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
		Role?: string | null;
		DatabaseName?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;

		/** Specifies data stores to crawl. */
		Targets?: CrawlerTargets;
		Schedule?: string | null;
		Classifiers?: Array<string>;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		TablePrefix?: string | null;

		/** A policy that specifies update and deletion behaviors for the crawler. */
		SchemaChangePolicy?: SchemaChangePolicy;
		Configuration?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		CrawlerSecurityConfiguration?: string | null;
	}
	export interface UpdateCrawlerRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		TablePrefix: FormControl<string | null | undefined>,
		Configuration: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		CrawlerSecurityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCrawlerRequestFormGroup() {
		return new FormGroup<UpdateCrawlerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Role: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			Schedule: new FormControl<string | null | undefined>(undefined),
			TablePrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			Configuration: new FormControl<string | null | undefined>(undefined),
			CrawlerSecurityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
		});

	}

	export interface UpdateCrawlerScheduleResponse {
	}
	export interface UpdateCrawlerScheduleResponseFormProperties {
	}
	export function CreateUpdateCrawlerScheduleResponseFormGroup() {
		return new FormGroup<UpdateCrawlerScheduleResponseFormProperties>({
		});

	}

	export interface UpdateCrawlerScheduleRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		CrawlerName: string;
		Schedule?: string | null;
	}
	export interface UpdateCrawlerScheduleRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		CrawlerName: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCrawlerScheduleRequestFormGroup() {
		return new FormGroup<UpdateCrawlerScheduleRequestFormProperties>({
			CrawlerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Schedule: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDatabaseResponse {
	}
	export interface UpdateDatabaseResponseFormProperties {
	}
	export function CreateUpdateDatabaseResponseFormGroup() {
		return new FormGroup<UpdateDatabaseResponseFormProperties>({
		});

	}

	export interface UpdateDatabaseRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The structure used to create or update a database.
		 * Required
		 */
		DatabaseInput: DatabaseInput;
	}
	export interface UpdateDatabaseRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatabaseRequestFormGroup() {
		return new FormGroup<UpdateDatabaseRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdateDevEndpointResponse {
	}
	export interface UpdateDevEndpointResponseFormProperties {
	}
	export function CreateUpdateDevEndpointResponseFormGroup() {
		return new FormGroup<UpdateDevEndpointResponseFormProperties>({
		});

	}

	export interface UpdateDevEndpointRequest {

		/** Required */
		EndpointName: string;
		PublicKey?: string | null;

		/** Maximum items: 5 */
		AddPublicKeys?: Array<string>;

		/** Maximum items: 5 */
		DeletePublicKeys?: Array<string>;

		/** Custom libraries to be loaded into a development endpoint. */
		CustomLibraries?: DevEndpointCustomLibraries;
		UpdateEtlLibraries?: boolean | null;
		DeleteArguments?: Array<string>;
		AddArguments?: MapValue;
	}
	export interface UpdateDevEndpointRequestFormProperties {

		/** Required */
		EndpointName: FormControl<string | null | undefined>,
		PublicKey: FormControl<string | null | undefined>,
		UpdateEtlLibraries: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDevEndpointRequestFormGroup() {
		return new FormGroup<UpdateDevEndpointRequestFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PublicKey: new FormControl<string | null | undefined>(undefined),
			UpdateEtlLibraries: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Custom libraries to be loaded into a development endpoint. */
	export interface DevEndpointCustomLibraries {
		ExtraPythonLibsS3Path?: string | null;
		ExtraJarsS3Path?: string | null;
	}

	/** Custom libraries to be loaded into a development endpoint. */
	export interface DevEndpointCustomLibrariesFormProperties {
		ExtraPythonLibsS3Path: FormControl<string | null | undefined>,
		ExtraJarsS3Path: FormControl<string | null | undefined>,
	}
	export function CreateDevEndpointCustomLibrariesFormGroup() {
		return new FormGroup<DevEndpointCustomLibrariesFormProperties>({
			ExtraPythonLibsS3Path: new FormControl<string | null | undefined>(undefined),
			ExtraJarsS3Path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateJobResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName?: string | null;
	}
	export interface UpdateJobResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobResponseFormGroup() {
		return new FormGroup<UpdateJobResponseFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdateJobRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: string;

		/**
		 * Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information.
		 * Required
		 */
		JobUpdate: JobUpdate;
	}
	export interface UpdateJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobRequestFormGroup() {
		return new FormGroup<UpdateJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information. */
	export interface JobUpdate {

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;
		LogUri?: string | null;
		Role?: string | null;

		/** An execution property of a job. */
		ExecutionProperty?: ExecutionProperty;

		/** Specifies code executed when a job is run. */
		Command?: JobCommand;
		DefaultArguments?: GenericMap;
		NonOverridableArguments?: GenericMap;

		/** Specifies the connections used by a job. */
		Connections?: ConnectionsList;
		MaxRetries?: number | null;
		AllocatedCapacity?: number | null;

		/** Minimum: 1 */
		Timeout?: number | null;
		MaxCapacity?: number | null;
		WorkerType?: DevEndpointWorkerType | null;
		NumberOfWorkers?: number | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration?: string | null;

		/** Specifies configuration properties of a notification. */
		NotificationProperty?: NotificationProperty;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion?: string | null;
	}

	/** Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information. */
	export interface JobUpdateFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		LogUri: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
		AllocatedCapacity: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		Timeout: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<DevEndpointWorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SecurityConfiguration: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion: FormControl<string | null | undefined>,
	}
	export function CreateJobUpdateFormGroup() {
		return new FormGroup<JobUpdateFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
			AllocatedCapacity: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<DevEndpointWorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			GlueVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^\w+\.\w+$')]),
		});

	}

	export interface UpdateMLTransformResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId?: string | null;
	}
	export interface UpdateMLTransformResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMLTransformResponseFormGroup() {
		return new FormGroup<UpdateMLTransformResponseFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdateMLTransformRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;

		/** The algorithm-specific parameters that are associated with the machine learning transform. */
		Parameters?: TransformParameters;
		Role?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion?: string | null;
		MaxCapacity?: number | null;
		WorkerType?: DevEndpointWorkerType | null;
		NumberOfWorkers?: number | null;

		/** Minimum: 1 */
		Timeout?: number | null;
		MaxRetries?: number | null;
	}
	export interface UpdateMLTransformRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransformId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		GlueVersion: FormControl<string | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<DevEndpointWorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		Timeout: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMLTransformRequestFormGroup() {
		return new FormGroup<UpdateMLTransformRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			Role: new FormControl<string | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^\w+\.\w+$')]),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<DevEndpointWorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdatePartitionResponse {
	}
	export interface UpdatePartitionResponseFormProperties {
	}
	export function CreateUpdatePartitionResponseFormGroup() {
		return new FormGroup<UpdatePartitionResponseFormProperties>({
		});

	}

	export interface UpdatePartitionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		PartitionValueList: Array<string>;

		/**
		 * The structure used to create and update a partition.
		 * Required
		 */
		PartitionInput: PartitionInput;
	}
	export interface UpdatePartitionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePartitionRequestFormGroup() {
		return new FormGroup<UpdatePartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdateTableResponse {
	}
	export interface UpdateTableResponseFormProperties {
	}
	export function CreateUpdateTableResponseFormGroup() {
		return new FormGroup<UpdateTableResponseFormProperties>({
		});

	}

	export interface UpdateTableRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * A structure used to define a table.
		 * Required
		 */
		TableInput: TableInput;
		SkipArchive?: boolean | null;
	}
	export interface UpdateTableRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,
		SkipArchive: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateTableRequestFormGroup() {
		return new FormGroup<UpdateTableRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			SkipArchive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateTriggerResponse {

		/** Information about a specific trigger. */
		Trigger?: Trigger;
	}
	export interface UpdateTriggerResponseFormProperties {
	}
	export function CreateUpdateTriggerResponseFormGroup() {
		return new FormGroup<UpdateTriggerResponseFormProperties>({
		});

	}

	export interface UpdateTriggerRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely.
		 * Required
		 */
		TriggerUpdate: TriggerUpdate;
	}
	export interface UpdateTriggerRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTriggerRequestFormGroup() {
		return new FormGroup<UpdateTriggerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely. */
	export interface TriggerUpdate {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description?: string | null;
		Schedule?: string | null;
		Actions?: Array<Action>;

		/** Defines the predicate of the trigger, which determines when it fires. */
		Predicate?: Predicate;
	}

	/** A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely. */
	export interface TriggerUpdateFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
	}
	export function CreateTriggerUpdateFormGroup() {
		return new FormGroup<TriggerUpdateFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			Schedule: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserDefinedFunctionResponse {
	}
	export interface UpdateUserDefinedFunctionResponseFormProperties {
	}
	export function CreateUpdateUserDefinedFunctionResponseFormGroup() {
		return new FormGroup<UpdateUserDefinedFunctionResponseFormProperties>({
		});

	}

	export interface UpdateUserDefinedFunctionRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		FunctionName: string;

		/**
		 * A structure used to create or update a user-defined function.
		 * Required
		 */
		FunctionInput: UserDefinedFunctionInput;
	}
	export interface UpdateUserDefinedFunctionRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		FunctionName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserDefinedFunctionRequestFormGroup() {
		return new FormGroup<UpdateUserDefinedFunctionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdateWorkflowResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface UpdateWorkflowResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkflowResponseFormGroup() {
		return new FormGroup<UpdateWorkflowResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdateWorkflowRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
		Description?: string | null;
		DefaultRunProperties?: WorkflowRunProperties;
	}
	export interface UpdateWorkflowRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkflowRequestFormGroup() {
		return new FormGroup<UpdateWorkflowRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TaskStatusType { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3, SUCCEEDED = 4, FAILED = 5, TIMEOUT = 6 }

	export enum CatalogEncryptionMode { DISABLED = 0, 'SSE-KMS' = 1 }

	export enum CloudWatchEncryptionMode { DISABLED = 0, 'SSE-KMS' = 1 }

	export enum Comparator { EQUALS = 0, GREATER_THAN = 1, LESS_THAN = 2, GREATER_THAN_EQUALS = 3, LESS_THAN_EQUALS = 4 }

	export enum LogicalOperator { EQUALS = 0 }

	export enum JobRunState { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3, SUCCEEDED = 4, FAILED = 5, TIMEOUT = 6 }

	export enum CrawlState { RUNNING = 0, CANCELLING = 1, CANCELLED = 2, SUCCEEDED = 3, FAILED = 4 }

	export enum ConnectionType { JDBC = 0, SFTP = 1, MONGODB = 2, KAFKA = 3 }

	export enum ConnectionPropertyKey { HOST = 0, PORT = 1, USERNAME = 2, PASSWORD = 3, ENCRYPTED_PASSWORD = 4, JDBC_DRIVER_JAR_URI = 5, JDBC_DRIVER_CLASS_NAME = 6, JDBC_ENGINE = 7, JDBC_ENGINE_VERSION = 8, CONFIG_FILES = 9, INSTANCE_ID = 10, JDBC_CONNECTION_URL = 11, JDBC_ENFORCE_SSL = 12, CUSTOM_JDBC_CERT = 13, SKIP_CUSTOM_JDBC_CERT_VALIDATION = 14, CUSTOM_JDBC_CERT_STRING = 15, CONNECTION_URL = 16, KAFKA_BOOTSTRAP_SERVERS = 17 }

	export enum CsvHeaderOption { UNKNOWN = 0, PRESENT = 1, ABSENT = 2 }

	export enum WorkerType { Standard = 0, 'G.1X' = 1, 'G.2X' = 2 }

	export enum Language { PYTHON = 0, SCALA = 1 }

	export enum DeleteBehavior { LOG = 0, DELETE_FROM_DATABASE = 1, DEPRECATE_IN_DATABASE = 2 }

	export enum TransformType { FIND_MATCHES = 0 }

	export enum ExistCondition { MUST_EXIST = 0, NOT_EXIST = 1, NONE = 2 }

	export enum TransformStatusType { NOT_READY = 0, READY = 1, DELETING = 2 }

	export enum JobBookmarksEncryptionMode { DISABLED = 0, 'CSE-KMS' = 1 }

	export enum LastCrawlStatus { SUCCEEDED = 0, CANCELLED = 1, FAILED = 2 }

	export enum Logical { AND = 0, ANY = 1 }

	export enum PrincipalType { USER = 0, ROLE = 1, GROUP = 2 }

	export enum ResourceType { JAR = 0, FILE = 1, ARCHIVE = 2 }

	export enum S3EncryptionMode { DISABLED = 0, 'SSE-KMS' = 1, 'SSE-S3' = 2 }

	export enum UpdateBehavior { LOG = 0, UPDATE_IN_DATABASE = 1 }

	export enum Sort { ASC = 0, DESC = 1 }

	export enum SortDirectionType { DESCENDING = 0, ASCENDING = 1 }

	export enum TaskType { EVALUATION = 0, LABELING_SET_GENERATION = 1, IMPORT_LABELS = 2, EXPORT_LABELS = 3, FIND_MATCHES = 4 }

	export enum TaskRunSortColumnType { TASK_RUN_TYPE = 0, STATUS = 1, STARTED = 2 }

	export enum TransformSortColumnType { NAME = 0, TRANSFORM_TYPE = 1, STATUS = 2, CREATED = 3, LAST_MODIFIED = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates one or more partitions in a batch operation.
		 * Post #X-Amz-Target=AWSGlue.BatchCreatePartition
		 * @return {BatchCreatePartitionResponse} Success
		 */
		BatchCreatePartition(requestBody: BatchCreatePartitionRequest): Observable<BatchCreatePartitionResponse> {
			return this.http.post<BatchCreatePartitionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchCreatePartition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a list of connection definitions from the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.BatchDeleteConnection
		 * @return {BatchDeleteConnectionResponse} Success
		 */
		BatchDeleteConnection(requestBody: BatchDeleteConnectionRequest): Observable<BatchDeleteConnectionResponse> {
			return this.http.post<BatchDeleteConnectionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchDeleteConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes one or more partitions in a batch operation.
		 * Post #X-Amz-Target=AWSGlue.BatchDeletePartition
		 * @return {BatchDeletePartitionResponse} Success
		 */
		BatchDeletePartition(requestBody: BatchDeletePartitionRequest): Observable<BatchDeletePartitionResponse> {
			return this.http.post<BatchDeletePartitionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchDeletePartition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes multiple tables at once.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. AWS Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
		 * Post #X-Amz-Target=AWSGlue.BatchDeleteTable
		 * @return {BatchDeleteTableResponse} Success
		 */
		BatchDeleteTable(requestBody: BatchDeleteTableRequest): Observable<BatchDeleteTableResponse> {
			return this.http.post<BatchDeleteTableResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchDeleteTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified batch of versions of a table.
		 * Post #X-Amz-Target=AWSGlue.BatchDeleteTableVersion
		 * @return {BatchDeleteTableVersionResponse} Success
		 */
		BatchDeleteTableVersion(requestBody: BatchDeleteTableVersionRequest): Observable<BatchDeleteTableVersionResponse> {
			return this.http.post<BatchDeleteTableVersionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchDeleteTableVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
		 * Post #X-Amz-Target=AWSGlue.BatchGetCrawlers
		 * @return {BatchGetCrawlersResponse} Success
		 */
		BatchGetCrawlers(requestBody: BatchGetCrawlersRequest): Observable<BatchGetCrawlersResponse> {
			return this.http.post<BatchGetCrawlersResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchGetCrawlers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of resource metadata for a given list of development endpoint names. After calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
		 * Post #X-Amz-Target=AWSGlue.BatchGetDevEndpoints
		 * @return {BatchGetDevEndpointsResponse} Success
		 */
		BatchGetDevEndpoints(requestBody: BatchGetDevEndpointsRequest): Observable<BatchGetDevEndpointsResponse> {
			return this.http.post<BatchGetDevEndpointsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchGetDevEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
		 * Post #X-Amz-Target=AWSGlue.BatchGetJobs
		 * @return {BatchGetJobsResponse} Success
		 */
		BatchGetJobs(requestBody: BatchGetJobsRequest): Observable<BatchGetJobsResponse> {
			return this.http.post<BatchGetJobsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchGetJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves partitions in a batch request.
		 * Post #X-Amz-Target=AWSGlue.BatchGetPartition
		 * @return {BatchGetPartitionResponse} Success
		 */
		BatchGetPartition(requestBody: BatchGetPartitionRequest): Observable<BatchGetPartitionResponse> {
			return this.http.post<BatchGetPartitionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchGetPartition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
		 * Post #X-Amz-Target=AWSGlue.BatchGetTriggers
		 * @return {BatchGetTriggersResponse} Success
		 */
		BatchGetTriggers(requestBody: BatchGetTriggersRequest): Observable<BatchGetTriggersResponse> {
			return this.http.post<BatchGetTriggersResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchGetTriggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
		 * Post #X-Amz-Target=AWSGlue.BatchGetWorkflows
		 * @return {BatchGetWorkflowsResponse} Success
		 */
		BatchGetWorkflows(requestBody: BatchGetWorkflowsRequest): Observable<BatchGetWorkflowsResponse> {
			return this.http.post<BatchGetWorkflowsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchGetWorkflows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops one or more job runs for a specified job definition.
		 * Post #X-Amz-Target=AWSGlue.BatchStopJobRun
		 * @return {BatchStopJobRunResponse} Success
		 */
		BatchStopJobRun(requestBody: BatchStopJobRunRequest): Observable<BatchStopJobRunResponse> {
			return this.http.post<BatchStopJobRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchStopJobRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that AWS Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>.
		 * Post #X-Amz-Target=AWSGlue.CancelMLTaskRun
		 * @return {CancelMLTaskRunResponse} Success
		 */
		CancelMLTaskRun(requestBody: CancelMLTaskRunRequest): Observable<CancelMLTaskRunResponse> {
			return this.http.post<CancelMLTaskRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CancelMLTaskRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field of the request is present.
		 * Post #X-Amz-Target=AWSGlue.CreateClassifier
		 * @return {CreateClassifierResponse} Success
		 */
		CreateClassifier(requestBody: CreateClassifierRequest): Observable<CreateClassifierResponse> {
			return this.http.post<CreateClassifierResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateClassifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a connection definition in the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.CreateConnection
		 * @return {CreateConnectionResponse} Success
		 */
		CreateConnection(requestBody: CreateConnectionRequest): Observable<CreateConnectionResponse> {
			return this.http.post<CreateConnectionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the <code>s3Targets</code> field, the <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.
		 * Post #X-Amz-Target=AWSGlue.CreateCrawler
		 * @return {CreateCrawlerResponse} Success
		 */
		CreateCrawler(requestBody: CreateCrawlerRequest): Observable<CreateCrawlerResponse> {
			return this.http.post<CreateCrawlerResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateCrawler', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new database in a Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.CreateDatabase
		 * @return {CreateDatabaseResponse} Success
		 */
		CreateDatabase(requestBody: CreateDatabaseRequest): Observable<CreateDatabaseResponse> {
			return this.http.post<CreateDatabaseResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new development endpoint.
		 * Post #X-Amz-Target=AWSGlue.CreateDevEndpoint
		 * @return {CreateDevEndpointResponse} Success
		 */
		CreateDevEndpoint(requestBody: CreateDevEndpointRequest): Observable<CreateDevEndpointResponse> {
			return this.http.post<CreateDevEndpointResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateDevEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new job definition.
		 * Post #X-Amz-Target=AWSGlue.CreateJob
		 * @return {CreateJobResponse} Success
		 */
		CreateJob(requestBody: CreateJobRequest): Observable<CreateJobResponse> {
			return this.http.post<CreateJobResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an AWS Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it.</p> <p>Call this operation as the first step in the process of using a machine learning transform (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an optional <code>Description</code>, in addition to the parameters that you want to use for your algorithm.</p> <p>You must also specify certain parameters for the tasks that AWS Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include <code>Role</code>, and optionally, <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
		 * Post #X-Amz-Target=AWSGlue.CreateMLTransform
		 * @return {CreateMLTransformResponse} Success
		 */
		CreateMLTransform(requestBody: CreateMLTransformRequest): Observable<CreateMLTransformResponse> {
			return this.http.post<CreateMLTransformResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateMLTransform', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new partition.
		 * Post #X-Amz-Target=AWSGlue.CreatePartition
		 * @return {CreatePartitionResponse} Success
		 */
		CreatePartition(requestBody: CreatePartitionRequest): Observable<CreatePartitionResponse> {
			return this.http.post<CreatePartitionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreatePartition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Transforms a directed acyclic graph (DAG) into code.
		 * Post #X-Amz-Target=AWSGlue.CreateScript
		 * @return {CreateScriptResponse} Success
		 */
		CreateScript(requestBody: CreateScriptRequest): Observable<CreateScriptResponse> {
			return this.http.post<CreateScriptResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateScript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new security configuration. A security configuration is a set of security properties that can be used by AWS Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.
		 * Post #X-Amz-Target=AWSGlue.CreateSecurityConfiguration
		 * @return {CreateSecurityConfigurationResponse} Success
		 */
		CreateSecurityConfiguration(requestBody: CreateSecurityConfigurationRequest): Observable<CreateSecurityConfigurationResponse> {
			return this.http.post<CreateSecurityConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateSecurityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new table definition in the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.CreateTable
		 * @return {CreateTableResponse} Success
		 */
		CreateTable(requestBody: CreateTableRequest): Observable<CreateTableResponse> {
			return this.http.post<CreateTableResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new trigger.
		 * Post #X-Amz-Target=AWSGlue.CreateTrigger
		 * @return {CreateTriggerResponse} Success
		 */
		CreateTrigger(requestBody: CreateTriggerRequest): Observable<CreateTriggerResponse> {
			return this.http.post<CreateTriggerResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateTrigger', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new function definition in the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.CreateUserDefinedFunction
		 * @return {CreateUserDefinedFunctionResponse} Success
		 */
		CreateUserDefinedFunction(requestBody: CreateUserDefinedFunctionRequest): Observable<CreateUserDefinedFunctionResponse> {
			return this.http.post<CreateUserDefinedFunctionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateUserDefinedFunction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new workflow.
		 * Post #X-Amz-Target=AWSGlue.CreateWorkflow
		 * @return {CreateWorkflowResponse} Success
		 */
		CreateWorkflow(requestBody: CreateWorkflowRequest): Observable<CreateWorkflowResponse> {
			return this.http.post<CreateWorkflowResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateWorkflow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a classifier from the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.DeleteClassifier
		 * @return {DeleteClassifierResponse} Success
		 */
		DeleteClassifier(requestBody: DeleteClassifierRequest): Observable<DeleteClassifierResponse> {
			return this.http.post<DeleteClassifierResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteClassifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a connection from the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.DeleteConnection
		 * @return {DeleteConnectionResponse} Success
		 */
		DeleteConnection(requestBody: DeleteConnectionRequest): Observable<DeleteConnectionResponse> {
			return this.http.post<DeleteConnectionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a specified crawler from the AWS Glue Data Catalog, unless the crawler state is <code>RUNNING</code>.
		 * Post #X-Amz-Target=AWSGlue.DeleteCrawler
		 * @return {DeleteCrawlerResponse} Success
		 */
		DeleteCrawler(requestBody: DeleteCrawlerRequest): Observable<DeleteCrawlerResponse> {
			return this.http.post<DeleteCrawlerResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteCrawler', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a specified database from a Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. AWS Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that belong to the database.</p> </note>
		 * Post #X-Amz-Target=AWSGlue.DeleteDatabase
		 * @return {DeleteDatabaseResponse} Success
		 */
		DeleteDatabase(requestBody: DeleteDatabaseRequest): Observable<DeleteDatabaseResponse> {
			return this.http.post<DeleteDatabaseResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified development endpoint.
		 * Post #X-Amz-Target=AWSGlue.DeleteDevEndpoint
		 * @return {DeleteDevEndpointResponse} Success
		 */
		DeleteDevEndpoint(requestBody: DeleteDevEndpointRequest): Observable<DeleteDevEndpointResponse> {
			return this.http.post<DeleteDevEndpointResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteDevEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified job definition. If the job definition is not found, no exception is thrown.
		 * Post #X-Amz-Target=AWSGlue.DeleteJob
		 * @return {DeleteJobResponse} Success
		 */
		DeleteJob(requestBody: DeleteJobRequest): Observable<DeleteJobResponse> {
			return this.http.post<DeleteJobResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an AWS Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by AWS Glue. If you no longer need a transform, you can delete it by calling <code>DeleteMLTransforms</code>. However, any AWS Glue jobs that still reference the deleted transform will no longer succeed.
		 * Post #X-Amz-Target=AWSGlue.DeleteMLTransform
		 * @return {DeleteMLTransformResponse} Success
		 */
		DeleteMLTransform(requestBody: DeleteMLTransformRequest): Observable<DeleteMLTransformResponse> {
			return this.http.post<DeleteMLTransformResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteMLTransform', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified partition.
		 * Post #X-Amz-Target=AWSGlue.DeletePartition
		 * @return {DeletePartitionResponse} Success
		 */
		DeletePartition(requestBody: DeletePartitionRequest): Observable<DeletePartitionResponse> {
			return this.http.post<DeletePartitionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeletePartition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified policy.
		 * Post #X-Amz-Target=AWSGlue.DeleteResourcePolicy
		 * @return {DeleteResourcePolicyResponse} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyRequest): Observable<DeleteResourcePolicyResponse> {
			return this.http.post<DeleteResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified security configuration.
		 * Post #X-Amz-Target=AWSGlue.DeleteSecurityConfiguration
		 * @return {DeleteSecurityConfigurationResponse} Success
		 */
		DeleteSecurityConfiguration(requestBody: DeleteSecurityConfigurationRequest): Observable<DeleteSecurityConfigurationResponse> {
			return this.http.post<DeleteSecurityConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteSecurityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a table definition from the Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. AWS Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
		 * Post #X-Amz-Target=AWSGlue.DeleteTable
		 * @return {DeleteTableResponse} Success
		 */
		DeleteTable(requestBody: DeleteTableRequest): Observable<DeleteTableResponse> {
			return this.http.post<DeleteTableResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified version of a table.
		 * Post #X-Amz-Target=AWSGlue.DeleteTableVersion
		 * @return {DeleteTableVersionResponse} Success
		 */
		DeleteTableVersion(requestBody: DeleteTableVersionRequest): Observable<DeleteTableVersionResponse> {
			return this.http.post<DeleteTableVersionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteTableVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified trigger. If the trigger is not found, no exception is thrown.
		 * Post #X-Amz-Target=AWSGlue.DeleteTrigger
		 * @return {DeleteTriggerResponse} Success
		 */
		DeleteTrigger(requestBody: DeleteTriggerRequest): Observable<DeleteTriggerResponse> {
			return this.http.post<DeleteTriggerResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteTrigger', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing function definition from the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.DeleteUserDefinedFunction
		 * @return {DeleteUserDefinedFunctionResponse} Success
		 */
		DeleteUserDefinedFunction(requestBody: DeleteUserDefinedFunctionRequest): Observable<DeleteUserDefinedFunctionResponse> {
			return this.http.post<DeleteUserDefinedFunctionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteUserDefinedFunction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a workflow.
		 * Post #X-Amz-Target=AWSGlue.DeleteWorkflow
		 * @return {DeleteWorkflowResponse} Success
		 */
		DeleteWorkflow(requestBody: DeleteWorkflowRequest): Observable<DeleteWorkflowResponse> {
			return this.http.post<DeleteWorkflowResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteWorkflow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the status of a migration operation.
		 * Post #X-Amz-Target=AWSGlue.GetCatalogImportStatus
		 * @return {GetCatalogImportStatusResponse} Success
		 */
		GetCatalogImportStatus(requestBody: GetCatalogImportStatusRequest): Observable<GetCatalogImportStatusResponse> {
			return this.http.post<GetCatalogImportStatusResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetCatalogImportStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a classifier by name.
		 * Post #X-Amz-Target=AWSGlue.GetClassifier
		 * @return {GetClassifierResponse} Success
		 */
		GetClassifier(requestBody: GetClassifierRequest): Observable<GetClassifierResponse> {
			return this.http.post<GetClassifierResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetClassifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all classifier objects in the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.GetClassifiers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetClassifiersResponse} Success
		 */
		GetClassifiers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetClassifiersRequest): Observable<GetClassifiersResponse> {
			return this.http.post<GetClassifiersResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetClassifiers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a connection definition from the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.GetConnection
		 * @return {GetConnectionResponse} Success
		 */
		GetConnection(requestBody: GetConnectionRequest): Observable<GetConnectionResponse> {
			return this.http.post<GetConnectionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of connection definitions from the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.GetConnections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetConnectionsResponse} Success
		 */
		GetConnections(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetConnectionsRequest): Observable<GetConnectionsResponse> {
			return this.http.post<GetConnectionsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetConnections?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves metadata for a specified crawler.
		 * Post #X-Amz-Target=AWSGlue.GetCrawler
		 * @return {GetCrawlerResponse} Success
		 */
		GetCrawler(requestBody: GetCrawlerRequest): Observable<GetCrawlerResponse> {
			return this.http.post<GetCrawlerResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetCrawler', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves metrics about specified crawlers.
		 * Post #X-Amz-Target=AWSGlue.GetCrawlerMetrics
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCrawlerMetricsResponse} Success
		 */
		GetCrawlerMetrics(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetCrawlerMetricsRequest): Observable<GetCrawlerMetricsResponse> {
			return this.http.post<GetCrawlerMetricsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetCrawlerMetrics?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves metadata for all crawlers defined in the customer account.
		 * Post #X-Amz-Target=AWSGlue.GetCrawlers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCrawlersResponse} Success
		 */
		GetCrawlers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetCrawlersRequest): Observable<GetCrawlersResponse> {
			return this.http.post<GetCrawlersResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetCrawlers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the security configuration for a specified catalog.
		 * Post #X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings
		 * @return {GetDataCatalogEncryptionSettingsResponse} Success
		 */
		GetDataCatalogEncryptionSettings(requestBody: GetDataCatalogEncryptionSettingsRequest): Observable<GetDataCatalogEncryptionSettingsResponse> {
			return this.http.post<GetDataCatalogEncryptionSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetDataCatalogEncryptionSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the definition of a specified database.
		 * Post #X-Amz-Target=AWSGlue.GetDatabase
		 * @return {GetDatabaseResponse} Success
		 */
		GetDatabase(requestBody: GetDatabaseRequest): Observable<GetDatabaseResponse> {
			return this.http.post<GetDatabaseResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all databases defined in a given Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.GetDatabases
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetDatabasesResponse} Success
		 */
		GetDatabases(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetDatabasesRequest): Observable<GetDatabasesResponse> {
			return this.http.post<GetDatabasesResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetDatabases?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Transforms a Python script into a directed acyclic graph (DAG).
		 * Post #X-Amz-Target=AWSGlue.GetDataflowGraph
		 * @return {GetDataflowGraphResponse} Success
		 */
		GetDataflowGraph(requestBody: GetDataflowGraphRequest): Observable<GetDataflowGraphResponse> {
			return this.http.post<GetDataflowGraphResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetDataflowGraph', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information about a specified development endpoint.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, AWS Glue returns only a public IP address.</p> </note>
		 * Post #X-Amz-Target=AWSGlue.GetDevEndpoint
		 * @return {GetDevEndpointResponse} Success
		 */
		GetDevEndpoint(requestBody: GetDevEndpointRequest): Observable<GetDevEndpointResponse> {
			return this.http.post<GetDevEndpointResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetDevEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves all the development endpoints in this AWS account.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, AWS Glue returns only a public IP address.</p> </note>
		 * Post #X-Amz-Target=AWSGlue.GetDevEndpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetDevEndpointsResponse} Success
		 */
		GetDevEndpoints(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetDevEndpointsRequest): Observable<GetDevEndpointsResponse> {
			return this.http.post<GetDevEndpointsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetDevEndpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an existing job definition.
		 * Post #X-Amz-Target=AWSGlue.GetJob
		 * @return {GetJobResponse} Success
		 */
		GetJob(requestBody: GetJobRequest): Observable<GetJobResponse> {
			return this.http.post<GetJobResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information on a job bookmark entry.
		 * Post #X-Amz-Target=AWSGlue.GetJobBookmark
		 * @return {GetJobBookmarkResponse} Success
		 */
		GetJobBookmark(requestBody: GetJobBookmarkRequest): Observable<GetJobBookmarkResponse> {
			return this.http.post<GetJobBookmarkResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetJobBookmark', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the metadata for a given job run.
		 * Post #X-Amz-Target=AWSGlue.GetJobRun
		 * @return {GetJobRunResponse} Success
		 */
		GetJobRun(requestBody: GetJobRunRequest): Observable<GetJobRunResponse> {
			return this.http.post<GetJobRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetJobRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves metadata for all runs of a given job definition.
		 * Post #X-Amz-Target=AWSGlue.GetJobRuns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetJobRunsResponse} Success
		 */
		GetJobRuns(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetJobRunsRequest): Observable<GetJobRunsResponse> {
			return this.http.post<GetJobRunsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetJobRuns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all current job definitions.
		 * Post #X-Amz-Target=AWSGlue.GetJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetJobsResponse} Success
		 */
		GetJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetJobsRequest): Observable<GetJobsResponse> {
			return this.http.post<GetJobsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that AWS Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's <code>TransformID</code>.
		 * Post #X-Amz-Target=AWSGlue.GetMLTaskRun
		 * @return {GetMLTaskRunResponse} Success
		 */
		GetMLTaskRun(requestBody: GetMLTaskRunRequest): Observable<GetMLTaskRunResponse> {
			return this.http.post<GetMLTaskRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetMLTaskRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that AWS Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other optional parameters as documented in this section.</p> <p>This operation returns a list of historic runs and must be paginated.</p>
		 * Post #X-Amz-Target=AWSGlue.GetMLTaskRuns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetMLTaskRunsResponse} Success
		 */
		GetMLTaskRuns(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetMLTaskRunsRequest): Observable<GetMLTaskRunsResponse> {
			return this.http.post<GetMLTaskRunsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetMLTaskRuns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets an AWS Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by AWS Glue. You can retrieve their metadata by calling <code>GetMLTransform</code>.
		 * Post #X-Amz-Target=AWSGlue.GetMLTransform
		 * @return {GetMLTransformResponse} Success
		 */
		GetMLTransform(requestBody: GetMLTransformRequest): Observable<GetMLTransformResponse> {
			return this.http.post<GetMLTransformResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetMLTransform', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a sortable, filterable list of existing AWS Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by AWS Glue, and you can retrieve their metadata by calling <code>GetMLTransforms</code>.
		 * Post #X-Amz-Target=AWSGlue.GetMLTransforms
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetMLTransformsResponse} Success
		 */
		GetMLTransforms(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetMLTransformsRequest): Observable<GetMLTransformsResponse> {
			return this.http.post<GetMLTransformsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetMLTransforms?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates mappings.
		 * Post #X-Amz-Target=AWSGlue.GetMapping
		 * @return {GetMappingResponse} Success
		 */
		GetMapping(requestBody: GetMappingRequest): Observable<GetMappingResponse> {
			return this.http.post<GetMappingResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetMapping', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a specified partition.
		 * Post #X-Amz-Target=AWSGlue.GetPartition
		 * @return {GetPartitionResponse} Success
		 */
		GetPartition(requestBody: GetPartitionRequest): Observable<GetPartitionResponse> {
			return this.http.post<GetPartitionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetPartition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the partitions in a table.
		 * Post #X-Amz-Target=AWSGlue.GetPartitions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetPartitionsResponse} Success
		 */
		GetPartitions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetPartitionsRequest): Observable<GetPartitionsResponse> {
			return this.http.post<GetPartitionsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetPartitions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets code to perform a specified mapping.
		 * Post #X-Amz-Target=AWSGlue.GetPlan
		 * @return {GetPlanResponse} Success
		 */
		GetPlan(requestBody: GetPlanRequest): Observable<GetPlanResponse> {
			return this.http.post<GetPlanResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a specified resource policy.
		 * Post #X-Amz-Target=AWSGlue.GetResourcePolicy
		 * @return {GetResourcePolicyResponse} Success
		 */
		GetResourcePolicy(requestBody: GetResourcePolicyRequest): Observable<GetResourcePolicyResponse> {
			return this.http.post<GetResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a specified security configuration.
		 * Post #X-Amz-Target=AWSGlue.GetSecurityConfiguration
		 * @return {GetSecurityConfigurationResponse} Success
		 */
		GetSecurityConfiguration(requestBody: GetSecurityConfigurationRequest): Observable<GetSecurityConfigurationResponse> {
			return this.http.post<GetSecurityConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetSecurityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of all security configurations.
		 * Post #X-Amz-Target=AWSGlue.GetSecurityConfigurations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetSecurityConfigurationsResponse} Success
		 */
		GetSecurityConfigurations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetSecurityConfigurationsRequest): Observable<GetSecurityConfigurationsResponse> {
			return this.http.post<GetSecurityConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetSecurityConfigurations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the <code>Table</code> definition in a Data Catalog for a specified table.
		 * Post #X-Amz-Target=AWSGlue.GetTable
		 * @return {GetTableResponse} Success
		 */
		GetTable(requestBody: GetTableRequest): Observable<GetTableResponse> {
			return this.http.post<GetTableResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a specified version of a table.
		 * Post #X-Amz-Target=AWSGlue.GetTableVersion
		 * @return {GetTableVersionResponse} Success
		 */
		GetTableVersion(requestBody: GetTableVersionRequest): Observable<GetTableVersionResponse> {
			return this.http.post<GetTableVersionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetTableVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of strings that identify available versions of a specified table.
		 * Post #X-Amz-Target=AWSGlue.GetTableVersions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTableVersionsResponse} Success
		 */
		GetTableVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetTableVersionsRequest): Observable<GetTableVersionsResponse> {
			return this.http.post<GetTableVersionsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetTableVersions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the definitions of some or all of the tables in a given <code>Database</code>.
		 * Post #X-Amz-Target=AWSGlue.GetTables
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTablesResponse} Success
		 */
		GetTables(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetTablesRequest): Observable<GetTablesResponse> {
			return this.http.post<GetTablesResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetTables?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of tags associated with a resource.
		 * Post #X-Amz-Target=AWSGlue.GetTags
		 * @return {GetTagsResponse} Success
		 */
		GetTags(requestBody: GetTagsRequest): Observable<GetTagsResponse> {
			return this.http.post<GetTagsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the definition of a trigger.
		 * Post #X-Amz-Target=AWSGlue.GetTrigger
		 * @return {GetTriggerResponse} Success
		 */
		GetTrigger(requestBody: GetTriggerRequest): Observable<GetTriggerResponse> {
			return this.http.post<GetTriggerResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetTrigger', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all the triggers associated with a job.
		 * Post #X-Amz-Target=AWSGlue.GetTriggers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTriggersResponse} Success
		 */
		GetTriggers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetTriggersRequest): Observable<GetTriggersResponse> {
			return this.http.post<GetTriggersResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetTriggers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a specified function definition from the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.GetUserDefinedFunction
		 * @return {GetUserDefinedFunctionResponse} Success
		 */
		GetUserDefinedFunction(requestBody: GetUserDefinedFunctionRequest): Observable<GetUserDefinedFunctionResponse> {
			return this.http.post<GetUserDefinedFunctionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetUserDefinedFunction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves multiple function definitions from the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.GetUserDefinedFunctions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetUserDefinedFunctionsResponse} Success
		 */
		GetUserDefinedFunctions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetUserDefinedFunctionsRequest): Observable<GetUserDefinedFunctionsResponse> {
			return this.http.post<GetUserDefinedFunctionsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetUserDefinedFunctions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves resource metadata for a workflow.
		 * Post #X-Amz-Target=AWSGlue.GetWorkflow
		 * @return {GetWorkflowResponse} Success
		 */
		GetWorkflow(requestBody: GetWorkflowRequest): Observable<GetWorkflowResponse> {
			return this.http.post<GetWorkflowResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetWorkflow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the metadata for a given workflow run.
		 * Post #X-Amz-Target=AWSGlue.GetWorkflowRun
		 * @return {GetWorkflowRunResponse} Success
		 */
		GetWorkflowRun(requestBody: GetWorkflowRunRequest): Observable<GetWorkflowRunResponse> {
			return this.http.post<GetWorkflowRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetWorkflowRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the workflow run properties which were set during the run.
		 * Post #X-Amz-Target=AWSGlue.GetWorkflowRunProperties
		 * @return {GetWorkflowRunPropertiesResponse} Success
		 */
		GetWorkflowRunProperties(requestBody: GetWorkflowRunPropertiesRequest): Observable<GetWorkflowRunPropertiesResponse> {
			return this.http.post<GetWorkflowRunPropertiesResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetWorkflowRunProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves metadata for all runs of a given workflow.
		 * Post #X-Amz-Target=AWSGlue.GetWorkflowRuns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetWorkflowRunsResponse} Success
		 */
		GetWorkflowRuns(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetWorkflowRunsRequest): Observable<GetWorkflowRunsResponse> {
			return this.http.post<GetWorkflowRunsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetWorkflowRuns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports an existing Amazon Athena Data Catalog to AWS Glue
		 * Post #X-Amz-Target=AWSGlue.ImportCatalogToGlue
		 * @return {ImportCatalogToGlueResponse} Success
		 */
		ImportCatalogToGlue(requestBody: ImportCatalogToGlueRequest): Observable<ImportCatalogToGlueResponse> {
			return this.http.post<ImportCatalogToGlueResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ImportCatalogToGlue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the names of all crawler resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
		 * Post #X-Amz-Target=AWSGlue.ListCrawlers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCrawlersResponse} Success
		 */
		ListCrawlers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCrawlersRequest): Observable<ListCrawlersResponse> {
			return this.http.post<ListCrawlersResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListCrawlers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the names of all <code>DevEndpoint</code> resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
		 * Post #X-Amz-Target=AWSGlue.ListDevEndpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDevEndpointsResponse} Success
		 */
		ListDevEndpoints(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDevEndpointsRequest): Observable<ListDevEndpointsResponse> {
			return this.http.post<ListDevEndpointsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListDevEndpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the names of all job resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
		 * Post #X-Amz-Target=AWSGlue.ListJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListJobsRequest): Observable<ListJobsResponse> {
			return this.http.post<ListJobsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a sortable, filterable list of existing AWS Glue machine learning transforms in this AWS account, or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved.
		 * Post #X-Amz-Target=AWSGlue.ListMLTransforms
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMLTransformsResponse} Success
		 */
		ListMLTransforms(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMLTransformsRequest): Observable<ListMLTransformsResponse> {
			return this.http.post<ListMLTransformsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListMLTransforms?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the names of all trigger resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
		 * Post #X-Amz-Target=AWSGlue.ListTriggers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTriggersResponse} Success
		 */
		ListTriggers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTriggersRequest): Observable<ListTriggersResponse> {
			return this.http.post<ListTriggersResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListTriggers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists names of workflows created in the account.
		 * Post #X-Amz-Target=AWSGlue.ListWorkflows
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWorkflowsResponse} Success
		 */
		ListWorkflows(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWorkflowsRequest): Observable<ListWorkflowsResponse> {
			return this.http.post<ListWorkflowsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListWorkflows?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.
		 * Post #X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings
		 * @return {PutDataCatalogEncryptionSettingsResponse} Success
		 */
		PutDataCatalogEncryptionSettings(requestBody: PutDataCatalogEncryptionSettingsRequest): Observable<PutDataCatalogEncryptionSettingsResponse> {
			return this.http.post<PutDataCatalogEncryptionSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.PutDataCatalogEncryptionSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the Data Catalog resource policy for access control.
		 * Post #X-Amz-Target=AWSGlue.PutResourcePolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyRequest): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.
		 * Post #X-Amz-Target=AWSGlue.PutWorkflowRunProperties
		 * @return {PutWorkflowRunPropertiesResponse} Success
		 */
		PutWorkflowRunProperties(requestBody: PutWorkflowRunPropertiesRequest): Observable<PutWorkflowRunPropertiesResponse> {
			return this.http.post<PutWorkflowRunPropertiesResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.PutWorkflowRunProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets a bookmark entry.
		 * Post #X-Amz-Target=AWSGlue.ResetJobBookmark
		 * @return {ResetJobBookmarkResponse} Success
		 */
		ResetJobBookmark(requestBody: ResetJobBookmarkRequest): Observable<ResetJobBookmarkResponse> {
			return this.http.post<ResetJobBookmarkResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ResetJobBookmark', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p> <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
		 * Post #X-Amz-Target=AWSGlue.SearchTables
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchTablesResponse} Success
		 */
		SearchTables(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchTablesRequest): Observable<SearchTablesResponse> {
			return this.http.post<SearchTablesResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.SearchTables?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.
		 * Post #X-Amz-Target=AWSGlue.StartCrawler
		 * @return {StartCrawlerResponse} Success
		 */
		StartCrawler(requestBody: StartCrawlerRequest): Observable<StartCrawlerResponse> {
			return this.http.post<StartCrawlerResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StartCrawler', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the schedule state of the specified crawler to <code>SCHEDULED</code>, unless the crawler is already running or the schedule state is already <code>SCHEDULED</code>.
		 * Post #X-Amz-Target=AWSGlue.StartCrawlerSchedule
		 * @return {StartCrawlerScheduleResponse} Success
		 */
		StartCrawlerSchedule(requestBody: StartCrawlerScheduleRequest): Observable<StartCrawlerScheduleResponse> {
			return this.http.post<StartCrawlerScheduleResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StartCrawlerSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a <code>TaskRunId</code>. You can check on the status of your task run by calling the <code>GetMLTaskRun</code> API.
		 * Post #X-Amz-Target=AWSGlue.StartExportLabelsTaskRun
		 * @return {StartExportLabelsTaskRunResponse} Success
		 */
		StartExportLabelsTaskRun(requestBody: StartExportLabelsTaskRunRequest): Observable<StartExportLabelsTaskRunResponse> {
			return this.http.post<StartExportLabelsTaskRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StartExportLabelsTaskRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables you to provide additional labels (examples of truth) to be used to teach the machine learning transform and improve its quality. This API operation is generally used as part of the active learning workflow that starts with the <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in improving the quality of your machine learning transform. </p> <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, AWS Glue machine learning will have generated a series of questions for humans to answer. (Answering these questions is often called 'labeling' in the machine learning workflows). In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” After the labeling process is finished, users upload their answers/labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform use the new and improved labels and perform a higher-quality transformation.</p> <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and combines all labels that you upload unless you set <code>Replace</code> to true. If you set <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all previously uploaded labels and learns only from the exact set that you upload. Replacing labels can be helpful if you realize that you previously uploaded incorrect labels, and you believe that they are having a negative effect on your transform quality.</p> <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code> operation. </p>
		 * Post #X-Amz-Target=AWSGlue.StartImportLabelsTaskRun
		 * @return {StartImportLabelsTaskRunResponse} Success
		 */
		StartImportLabelsTaskRun(requestBody: StartImportLabelsTaskRunRequest): Observable<StartImportLabelsTaskRunResponse> {
			return this.http.post<StartImportLabelsTaskRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StartImportLabelsTaskRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a job run using a job definition.
		 * Post #X-Amz-Target=AWSGlue.StartJobRun
		 * @return {StartJobRunResponse} Success
		 */
		StartJobRun(requestBody: StartJobRunRequest): Observable<StartJobRunResponse> {
			return this.http.post<StartJobRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StartJobRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a task to estimate the quality of the transform. </p> <p>When you provide label sets as examples of truth, AWS Glue machine learning uses some of those examples to learn from them. The rest of the labels are used as a test to estimate quality.</p> <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more information about the stats of the <code>EvaluationTaskRun</code>.</p>
		 * Post #X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun
		 * @return {StartMLEvaluationTaskRunResponse} Success
		 */
		StartMLEvaluationTaskRun(requestBody: StartMLEvaluationTaskRunRequest): Observable<StartMLEvaluationTaskRunResponse> {
			return this.http.post<StartMLEvaluationTaskRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the active learning workflow for your machine learning transform to improve the transform's quality by generating label sets and adding labels.</p> <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, AWS Glue will have generated a "labeling set" or a set of questions for humans to answer.</p> <p>In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” </p> <p>After the labeling process is finished, you can upload your labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation.</p>
		 * Post #X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun
		 * @return {StartMLLabelingSetGenerationTaskRunResponse} Success
		 */
		StartMLLabelingSetGenerationTaskRun(requestBody: StartMLLabelingSetGenerationTaskRunRequest): Observable<StartMLLabelingSetGenerationTaskRunResponse> {
			return this.http.post<StartMLLabelingSetGenerationTaskRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StartMLLabelingSetGenerationTaskRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering Jobs</a> for information about how different types of trigger are started.
		 * Post #X-Amz-Target=AWSGlue.StartTrigger
		 * @return {StartTriggerResponse} Success
		 */
		StartTrigger(requestBody: StartTriggerRequest): Observable<StartTriggerResponse> {
			return this.http.post<StartTriggerResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StartTrigger', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a new run of the specified workflow.
		 * Post #X-Amz-Target=AWSGlue.StartWorkflowRun
		 * @return {StartWorkflowRunResponse} Success
		 */
		StartWorkflowRun(requestBody: StartWorkflowRunRequest): Observable<StartWorkflowRunResponse> {
			return this.http.post<StartWorkflowRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StartWorkflowRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * If the specified crawler is running, stops the crawl.
		 * Post #X-Amz-Target=AWSGlue.StopCrawler
		 * @return {StopCrawlerResponse} Success
		 */
		StopCrawler(requestBody: StopCrawlerRequest): Observable<StopCrawlerResponse> {
			return this.http.post<StopCrawlerResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StopCrawler', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the schedule state of the specified crawler to <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is already running.
		 * Post #X-Amz-Target=AWSGlue.StopCrawlerSchedule
		 * @return {StopCrawlerScheduleResponse} Success
		 */
		StopCrawlerSchedule(requestBody: StopCrawlerScheduleRequest): Observable<StopCrawlerScheduleResponse> {
			return this.http.post<StopCrawlerScheduleResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StopCrawlerSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a specified trigger.
		 * Post #X-Amz-Target=AWSGlue.StopTrigger
		 * @return {StopTriggerResponse} Success
		 */
		StopTrigger(requestBody: StopTriggerRequest): Observable<StopTriggerResponse> {
			return this.http.post<StopTriggerResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StopTrigger', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the execution of the specified workflow run.
		 * Post #X-Amz-Target=AWSGlue.StopWorkflowRun
		 * @return {StopWorkflowRunResponse} Success
		 */
		StopWorkflowRun(requestBody: StopWorkflowRunRequest): Observable<StopWorkflowRunResponse> {
			return this.http.post<StopWorkflowRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StopWorkflowRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds tags to a resource. A tag is a label you can assign to an AWS resource. In AWS Glue, you can tag only certain resources. For information about what resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a>.
		 * Post #X-Amz-Target=AWSGlue.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a resource.
		 * Post #X-Amz-Target=AWSGlue.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies an existing classifier (a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field is present).
		 * Post #X-Amz-Target=AWSGlue.UpdateClassifier
		 * @return {UpdateClassifierResponse} Success
		 */
		UpdateClassifier(requestBody: UpdateClassifierRequest): Observable<UpdateClassifierResponse> {
			return this.http.post<UpdateClassifierResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateClassifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a connection definition in the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.UpdateConnection
		 * @return {UpdateConnectionResponse} Success
		 */
		UpdateConnection(requestBody: UpdateConnectionRequest): Observable<UpdateConnectionResponse> {
			return this.http.post<UpdateConnectionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a crawler. If a crawler is running, you must stop it using <code>StopCrawler</code> before updating it.
		 * Post #X-Amz-Target=AWSGlue.UpdateCrawler
		 * @return {UpdateCrawlerResponse} Success
		 */
		UpdateCrawler(requestBody: UpdateCrawlerRequest): Observable<UpdateCrawlerResponse> {
			return this.http.post<UpdateCrawlerResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateCrawler', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the schedule of a crawler using a <code>cron</code> expression.
		 * Post #X-Amz-Target=AWSGlue.UpdateCrawlerSchedule
		 * @return {UpdateCrawlerScheduleResponse} Success
		 */
		UpdateCrawlerSchedule(requestBody: UpdateCrawlerScheduleRequest): Observable<UpdateCrawlerScheduleResponse> {
			return this.http.post<UpdateCrawlerScheduleResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateCrawlerSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing database definition in a Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.UpdateDatabase
		 * @return {UpdateDatabaseResponse} Success
		 */
		UpdateDatabase(requestBody: UpdateDatabaseRequest): Observable<UpdateDatabaseResponse> {
			return this.http.post<UpdateDatabaseResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a specified development endpoint.
		 * Post #X-Amz-Target=AWSGlue.UpdateDevEndpoint
		 * @return {UpdateDevEndpointResponse} Success
		 */
		UpdateDevEndpoint(requestBody: UpdateDevEndpointRequest): Observable<UpdateDevEndpointResponse> {
			return this.http.post<UpdateDevEndpointResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateDevEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing job definition.
		 * Post #X-Amz-Target=AWSGlue.UpdateJob
		 * @return {UpdateJobResponse} Success
		 */
		UpdateJob(requestBody: UpdateJobRequest): Observable<UpdateJobResponse> {
			return this.http.post<UpdateJobResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p> <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code> operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).</p>
		 * Post #X-Amz-Target=AWSGlue.UpdateMLTransform
		 * @return {UpdateMLTransformResponse} Success
		 */
		UpdateMLTransform(requestBody: UpdateMLTransformRequest): Observable<UpdateMLTransformResponse> {
			return this.http.post<UpdateMLTransformResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateMLTransform', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a partition.
		 * Post #X-Amz-Target=AWSGlue.UpdatePartition
		 * @return {UpdatePartitionResponse} Success
		 */
		UpdatePartition(requestBody: UpdatePartitionRequest): Observable<UpdatePartitionResponse> {
			return this.http.post<UpdatePartitionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdatePartition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a metadata table in the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.UpdateTable
		 * @return {UpdateTableResponse} Success
		 */
		UpdateTable(requestBody: UpdateTableRequest): Observable<UpdateTableResponse> {
			return this.http.post<UpdateTableResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a trigger definition.
		 * Post #X-Amz-Target=AWSGlue.UpdateTrigger
		 * @return {UpdateTriggerResponse} Success
		 */
		UpdateTrigger(requestBody: UpdateTriggerRequest): Observable<UpdateTriggerResponse> {
			return this.http.post<UpdateTriggerResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateTrigger', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing function definition in the Data Catalog.
		 * Post #X-Amz-Target=AWSGlue.UpdateUserDefinedFunction
		 * @return {UpdateUserDefinedFunctionResponse} Success
		 */
		UpdateUserDefinedFunction(requestBody: UpdateUserDefinedFunctionRequest): Observable<UpdateUserDefinedFunctionResponse> {
			return this.http.post<UpdateUserDefinedFunctionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateUserDefinedFunction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing workflow.
		 * Post #X-Amz-Target=AWSGlue.UpdateWorkflow
		 * @return {UpdateWorkflowResponse} Success
		 */
		UpdateWorkflow(requestBody: UpdateWorkflowRequest): Observable<UpdateWorkflowResponse> {
			return this.http.post<UpdateWorkflowResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateWorkflow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchCreatePartitionX_Amz_Target { 'AWSGlue.BatchCreatePartition' = 0 }

	export enum BatchDeleteConnectionX_Amz_Target { 'AWSGlue.BatchDeleteConnection' = 0 }

	export enum BatchDeletePartitionX_Amz_Target { 'AWSGlue.BatchDeletePartition' = 0 }

	export enum BatchDeleteTableX_Amz_Target { 'AWSGlue.BatchDeleteTable' = 0 }

	export enum BatchDeleteTableVersionX_Amz_Target { 'AWSGlue.BatchDeleteTableVersion' = 0 }

	export enum BatchGetCrawlersX_Amz_Target { 'AWSGlue.BatchGetCrawlers' = 0 }

	export enum BatchGetDevEndpointsX_Amz_Target { 'AWSGlue.BatchGetDevEndpoints' = 0 }

	export enum BatchGetJobsX_Amz_Target { 'AWSGlue.BatchGetJobs' = 0 }

	export enum BatchGetPartitionX_Amz_Target { 'AWSGlue.BatchGetPartition' = 0 }

	export enum BatchGetTriggersX_Amz_Target { 'AWSGlue.BatchGetTriggers' = 0 }

	export enum BatchGetWorkflowsX_Amz_Target { 'AWSGlue.BatchGetWorkflows' = 0 }

	export enum BatchStopJobRunX_Amz_Target { 'AWSGlue.BatchStopJobRun' = 0 }

	export enum CancelMLTaskRunX_Amz_Target { 'AWSGlue.CancelMLTaskRun' = 0 }

	export enum CreateClassifierX_Amz_Target { 'AWSGlue.CreateClassifier' = 0 }

	export enum CreateConnectionX_Amz_Target { 'AWSGlue.CreateConnection' = 0 }

	export enum CreateCrawlerX_Amz_Target { 'AWSGlue.CreateCrawler' = 0 }

	export enum CreateDatabaseX_Amz_Target { 'AWSGlue.CreateDatabase' = 0 }

	export enum CreateDevEndpointX_Amz_Target { 'AWSGlue.CreateDevEndpoint' = 0 }

	export enum CreateJobX_Amz_Target { 'AWSGlue.CreateJob' = 0 }

	export enum CreateMLTransformX_Amz_Target { 'AWSGlue.CreateMLTransform' = 0 }

	export enum CreatePartitionX_Amz_Target { 'AWSGlue.CreatePartition' = 0 }

	export enum CreateScriptX_Amz_Target { 'AWSGlue.CreateScript' = 0 }

	export enum CreateSecurityConfigurationX_Amz_Target { 'AWSGlue.CreateSecurityConfiguration' = 0 }

	export enum CreateTableX_Amz_Target { 'AWSGlue.CreateTable' = 0 }

	export enum CreateTriggerX_Amz_Target { 'AWSGlue.CreateTrigger' = 0 }

	export enum CreateUserDefinedFunctionX_Amz_Target { 'AWSGlue.CreateUserDefinedFunction' = 0 }

	export enum CreateWorkflowX_Amz_Target { 'AWSGlue.CreateWorkflow' = 0 }

	export enum DeleteClassifierX_Amz_Target { 'AWSGlue.DeleteClassifier' = 0 }

	export enum DeleteConnectionX_Amz_Target { 'AWSGlue.DeleteConnection' = 0 }

	export enum DeleteCrawlerX_Amz_Target { 'AWSGlue.DeleteCrawler' = 0 }

	export enum DeleteDatabaseX_Amz_Target { 'AWSGlue.DeleteDatabase' = 0 }

	export enum DeleteDevEndpointX_Amz_Target { 'AWSGlue.DeleteDevEndpoint' = 0 }

	export enum DeleteJobX_Amz_Target { 'AWSGlue.DeleteJob' = 0 }

	export enum DeleteMLTransformX_Amz_Target { 'AWSGlue.DeleteMLTransform' = 0 }

	export enum DeletePartitionX_Amz_Target { 'AWSGlue.DeletePartition' = 0 }

	export enum DeleteResourcePolicyX_Amz_Target { 'AWSGlue.DeleteResourcePolicy' = 0 }

	export enum DeleteSecurityConfigurationX_Amz_Target { 'AWSGlue.DeleteSecurityConfiguration' = 0 }

	export enum DeleteTableX_Amz_Target { 'AWSGlue.DeleteTable' = 0 }

	export enum DeleteTableVersionX_Amz_Target { 'AWSGlue.DeleteTableVersion' = 0 }

	export enum DeleteTriggerX_Amz_Target { 'AWSGlue.DeleteTrigger' = 0 }

	export enum DeleteUserDefinedFunctionX_Amz_Target { 'AWSGlue.DeleteUserDefinedFunction' = 0 }

	export enum DeleteWorkflowX_Amz_Target { 'AWSGlue.DeleteWorkflow' = 0 }

	export enum GetCatalogImportStatusX_Amz_Target { 'AWSGlue.GetCatalogImportStatus' = 0 }

	export enum GetClassifierX_Amz_Target { 'AWSGlue.GetClassifier' = 0 }

	export enum GetClassifiersX_Amz_Target { 'AWSGlue.GetClassifiers' = 0 }

	export enum GetConnectionX_Amz_Target { 'AWSGlue.GetConnection' = 0 }

	export enum GetConnectionsX_Amz_Target { 'AWSGlue.GetConnections' = 0 }

	export enum GetCrawlerX_Amz_Target { 'AWSGlue.GetCrawler' = 0 }

	export enum GetCrawlerMetricsX_Amz_Target { 'AWSGlue.GetCrawlerMetrics' = 0 }

	export enum GetCrawlersX_Amz_Target { 'AWSGlue.GetCrawlers' = 0 }

	export enum GetDataCatalogEncryptionSettingsX_Amz_Target { 'AWSGlue.GetDataCatalogEncryptionSettings' = 0 }

	export enum GetDatabaseX_Amz_Target { 'AWSGlue.GetDatabase' = 0 }

	export enum GetDatabasesX_Amz_Target { 'AWSGlue.GetDatabases' = 0 }

	export enum GetDataflowGraphX_Amz_Target { 'AWSGlue.GetDataflowGraph' = 0 }

	export enum GetDevEndpointX_Amz_Target { 'AWSGlue.GetDevEndpoint' = 0 }

	export enum GetDevEndpointsX_Amz_Target { 'AWSGlue.GetDevEndpoints' = 0 }

	export enum GetJobX_Amz_Target { 'AWSGlue.GetJob' = 0 }

	export enum GetJobBookmarkX_Amz_Target { 'AWSGlue.GetJobBookmark' = 0 }

	export enum GetJobRunX_Amz_Target { 'AWSGlue.GetJobRun' = 0 }

	export enum GetJobRunsX_Amz_Target { 'AWSGlue.GetJobRuns' = 0 }

	export enum GetJobsX_Amz_Target { 'AWSGlue.GetJobs' = 0 }

	export enum GetMLTaskRunX_Amz_Target { 'AWSGlue.GetMLTaskRun' = 0 }

	export enum GetMLTaskRunsX_Amz_Target { 'AWSGlue.GetMLTaskRuns' = 0 }

	export enum GetMLTransformX_Amz_Target { 'AWSGlue.GetMLTransform' = 0 }

	export enum GetMLTransformsX_Amz_Target { 'AWSGlue.GetMLTransforms' = 0 }

	export enum GetMappingX_Amz_Target { 'AWSGlue.GetMapping' = 0 }

	export enum GetPartitionX_Amz_Target { 'AWSGlue.GetPartition' = 0 }

	export enum GetPartitionsX_Amz_Target { 'AWSGlue.GetPartitions' = 0 }

	export enum GetPlanX_Amz_Target { 'AWSGlue.GetPlan' = 0 }

	export enum GetResourcePolicyX_Amz_Target { 'AWSGlue.GetResourcePolicy' = 0 }

	export enum GetSecurityConfigurationX_Amz_Target { 'AWSGlue.GetSecurityConfiguration' = 0 }

	export enum GetSecurityConfigurationsX_Amz_Target { 'AWSGlue.GetSecurityConfigurations' = 0 }

	export enum GetTableX_Amz_Target { 'AWSGlue.GetTable' = 0 }

	export enum GetTableVersionX_Amz_Target { 'AWSGlue.GetTableVersion' = 0 }

	export enum GetTableVersionsX_Amz_Target { 'AWSGlue.GetTableVersions' = 0 }

	export enum GetTablesX_Amz_Target { 'AWSGlue.GetTables' = 0 }

	export enum GetTagsX_Amz_Target { 'AWSGlue.GetTags' = 0 }

	export enum GetTriggerX_Amz_Target { 'AWSGlue.GetTrigger' = 0 }

	export enum GetTriggersX_Amz_Target { 'AWSGlue.GetTriggers' = 0 }

	export enum GetUserDefinedFunctionX_Amz_Target { 'AWSGlue.GetUserDefinedFunction' = 0 }

	export enum GetUserDefinedFunctionsX_Amz_Target { 'AWSGlue.GetUserDefinedFunctions' = 0 }

	export enum GetWorkflowX_Amz_Target { 'AWSGlue.GetWorkflow' = 0 }

	export enum GetWorkflowRunX_Amz_Target { 'AWSGlue.GetWorkflowRun' = 0 }

	export enum GetWorkflowRunPropertiesX_Amz_Target { 'AWSGlue.GetWorkflowRunProperties' = 0 }

	export enum GetWorkflowRunsX_Amz_Target { 'AWSGlue.GetWorkflowRuns' = 0 }

	export enum ImportCatalogToGlueX_Amz_Target { 'AWSGlue.ImportCatalogToGlue' = 0 }

	export enum ListCrawlersX_Amz_Target { 'AWSGlue.ListCrawlers' = 0 }

	export enum ListDevEndpointsX_Amz_Target { 'AWSGlue.ListDevEndpoints' = 0 }

	export enum ListJobsX_Amz_Target { 'AWSGlue.ListJobs' = 0 }

	export enum ListMLTransformsX_Amz_Target { 'AWSGlue.ListMLTransforms' = 0 }

	export enum ListTriggersX_Amz_Target { 'AWSGlue.ListTriggers' = 0 }

	export enum ListWorkflowsX_Amz_Target { 'AWSGlue.ListWorkflows' = 0 }

	export enum PutDataCatalogEncryptionSettingsX_Amz_Target { 'AWSGlue.PutDataCatalogEncryptionSettings' = 0 }

	export enum PutResourcePolicyX_Amz_Target { 'AWSGlue.PutResourcePolicy' = 0 }

	export enum PutWorkflowRunPropertiesX_Amz_Target { 'AWSGlue.PutWorkflowRunProperties' = 0 }

	export enum ResetJobBookmarkX_Amz_Target { 'AWSGlue.ResetJobBookmark' = 0 }

	export enum SearchTablesX_Amz_Target { 'AWSGlue.SearchTables' = 0 }

	export enum StartCrawlerX_Amz_Target { 'AWSGlue.StartCrawler' = 0 }

	export enum StartCrawlerScheduleX_Amz_Target { 'AWSGlue.StartCrawlerSchedule' = 0 }

	export enum StartExportLabelsTaskRunX_Amz_Target { 'AWSGlue.StartExportLabelsTaskRun' = 0 }

	export enum StartImportLabelsTaskRunX_Amz_Target { 'AWSGlue.StartImportLabelsTaskRun' = 0 }

	export enum StartJobRunX_Amz_Target { 'AWSGlue.StartJobRun' = 0 }

	export enum StartMLEvaluationTaskRunX_Amz_Target { 'AWSGlue.StartMLEvaluationTaskRun' = 0 }

	export enum StartMLLabelingSetGenerationTaskRunX_Amz_Target { 'AWSGlue.StartMLLabelingSetGenerationTaskRun' = 0 }

	export enum StartTriggerX_Amz_Target { 'AWSGlue.StartTrigger' = 0 }

	export enum StartWorkflowRunX_Amz_Target { 'AWSGlue.StartWorkflowRun' = 0 }

	export enum StopCrawlerX_Amz_Target { 'AWSGlue.StopCrawler' = 0 }

	export enum StopCrawlerScheduleX_Amz_Target { 'AWSGlue.StopCrawlerSchedule' = 0 }

	export enum StopTriggerX_Amz_Target { 'AWSGlue.StopTrigger' = 0 }

	export enum StopWorkflowRunX_Amz_Target { 'AWSGlue.StopWorkflowRun' = 0 }

	export enum TagResourceX_Amz_Target { 'AWSGlue.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AWSGlue.UntagResource' = 0 }

	export enum UpdateClassifierX_Amz_Target { 'AWSGlue.UpdateClassifier' = 0 }

	export enum UpdateConnectionX_Amz_Target { 'AWSGlue.UpdateConnection' = 0 }

	export enum UpdateCrawlerX_Amz_Target { 'AWSGlue.UpdateCrawler' = 0 }

	export enum UpdateCrawlerScheduleX_Amz_Target { 'AWSGlue.UpdateCrawlerSchedule' = 0 }

	export enum UpdateDatabaseX_Amz_Target { 'AWSGlue.UpdateDatabase' = 0 }

	export enum UpdateDevEndpointX_Amz_Target { 'AWSGlue.UpdateDevEndpoint' = 0 }

	export enum UpdateJobX_Amz_Target { 'AWSGlue.UpdateJob' = 0 }

	export enum UpdateMLTransformX_Amz_Target { 'AWSGlue.UpdateMLTransform' = 0 }

	export enum UpdatePartitionX_Amz_Target { 'AWSGlue.UpdatePartition' = 0 }

	export enum UpdateTableX_Amz_Target { 'AWSGlue.UpdateTable' = 0 }

	export enum UpdateTriggerX_Amz_Target { 'AWSGlue.UpdateTrigger' = 0 }

	export enum UpdateUserDefinedFunctionX_Amz_Target { 'AWSGlue.UpdateUserDefinedFunction' = 0 }

	export enum UpdateWorkflowX_Amz_Target { 'AWSGlue.UpdateWorkflow' = 0 }

}

