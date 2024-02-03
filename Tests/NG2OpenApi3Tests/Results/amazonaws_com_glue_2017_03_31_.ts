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
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Contains details about an error. */
	export interface ErrorDetailFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchCreatePartitionRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		PartitionInputList: Array<PartitionInput>;
	}
	export interface BatchCreatePartitionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreatePartitionRequestFormGroup() {
		return new FormGroup<BatchCreatePartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure used to create and update a partition. */
	export interface PartitionInput {
		Values?: Array<string>;
		LastAccessTime?: Date;
		StorageDescriptor?: StorageDescriptor;
		Parameters?: ParametersMap;
		LastAnalyzedTime?: Date;
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
		Location?: string;
		AdditionalLocations?: Array<string>;
		InputFormat?: string;
		OutputFormat?: string;
		Compressed?: boolean | null;
		NumberOfBuckets?: number | null;
		SerdeInfo?: SerDeInfo;
		BucketColumns?: Array<string>;
		SortColumns?: Array<Order>;
		Parameters?: ParametersMap;
		SkewedInfo?: SkewedInfo;
		StoredAsSubDirectories?: boolean | null;
		SchemaReference?: SchemaReference;
	}

	/** Describes the physical storage of table data. */
	export interface StorageDescriptorFormProperties {
		Location: FormControl<string | null | undefined>,
		InputFormat: FormControl<string | null | undefined>,
		OutputFormat: FormControl<string | null | undefined>,
		Compressed: FormControl<boolean | null | undefined>,
		NumberOfBuckets: FormControl<number | null | undefined>,
		StoredAsSubDirectories: FormControl<boolean | null | undefined>,
	}
	export function CreateStorageDescriptorFormGroup() {
		return new FormGroup<StorageDescriptorFormProperties>({
			Location: new FormControl<string | null | undefined>(undefined),
			InputFormat: new FormControl<string | null | undefined>(undefined),
			OutputFormat: new FormControl<string | null | undefined>(undefined),
			Compressed: new FormControl<boolean | null | undefined>(undefined),
			NumberOfBuckets: new FormControl<number | null | undefined>(undefined),
			StoredAsSubDirectories: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A column in a <code>Table</code>. */
	export interface Column {

		/** Required */
		Name: string;
		Type?: string;
		Comment?: string;
		Parameters?: ParametersMap;
	}

	/** A column in a <code>Table</code>. */
	export interface ColumnFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateColumnFormGroup() {
		return new FormGroup<ColumnFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
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
		Name?: string;
		SerializationLibrary?: string;
		Parameters?: ParametersMap;
	}

	/** Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader. */
	export interface SerDeInfoFormProperties {
		Name: FormControl<string | null | undefined>,
		SerializationLibrary: FormControl<string | null | undefined>,
	}
	export function CreateSerDeInfoFormGroup() {
		return new FormGroup<SerDeInfoFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			SerializationLibrary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the sort order of a sorted column. */
	export interface Order {

		/** Required */
		Column: string;

		/** Required */
		SortOrder: number;
	}

	/** Specifies the sort order of a sorted column. */
	export interface OrderFormProperties {

		/** Required */
		Column: FormControl<string | null | undefined>,

		/** Required */
		SortOrder: FormControl<number | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			Column: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SortOrder: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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


	/** An object that references a schema stored in the Glue Schema Registry. */
	export interface SchemaReference {
		SchemaId?: SchemaId;
		SchemaVersionId?: string;
		SchemaVersionNumber?: number | null;
	}

	/** An object that references a schema stored in the Glue Schema Registry. */
	export interface SchemaReferenceFormProperties {
		SchemaVersionId: FormControl<string | null | undefined>,
		SchemaVersionNumber: FormControl<number | null | undefined>,
	}
	export function CreateSchemaReferenceFormGroup() {
		return new FormGroup<SchemaReferenceFormProperties>({
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
			SchemaVersionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The unique ID of the schema in the Glue schema registry. */
	export interface SchemaId {
		SchemaArn?: string;
		SchemaName?: string;
		RegistryName?: string;
	}

	/** The unique ID of the schema in the Glue schema registry. */
	export interface SchemaIdFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		RegistryName: FormControl<string | null | undefined>,
	}
	export function CreateSchemaIdFormGroup() {
		return new FormGroup<SchemaIdFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			RegistryName: new FormControl<string | null | undefined>(undefined),
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
		CatalogId?: string;

		/** Required */
		ConnectionNameList: Array<string>;
	}
	export interface BatchDeleteConnectionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteConnectionRequestFormGroup() {
		return new FormGroup<BatchDeleteConnectionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
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
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		PartitionsToDelete: Array<PartitionValueList>;
	}
	export interface BatchDeletePartitionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeletePartitionRequestFormGroup() {
		return new FormGroup<BatchDeletePartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		TableName?: string;
		ErrorDetail?: ErrorDetail;
	}

	/** An error record for table operations. */
	export interface TableErrorFormProperties {
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateTableErrorFormGroup() {
		return new FormGroup<TableErrorFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDeleteTableRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TablesToDelete: Array<string>;
		TransactionId?: string;
	}
	export interface BatchDeleteTableRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteTableRequestFormGroup() {
		return new FormGroup<BatchDeleteTableRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TransactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotReadyException {
	}
	export interface ResourceNotReadyExceptionFormProperties {
	}
	export function CreateResourceNotReadyExceptionFormGroup() {
		return new FormGroup<ResourceNotReadyExceptionFormProperties>({
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
		TableName?: string;
		VersionId?: string;
		ErrorDetail?: ErrorDetail;
	}

	/** An error record for table-version operations. */
	export interface TableVersionErrorFormProperties {
		TableName: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateTableVersionErrorFormGroup() {
		return new FormGroup<TableVersionErrorFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDeleteTableVersionRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		VersionIds: Array<string>;
	}
	export interface BatchDeleteTableVersionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteTableVersionRequestFormGroup() {
		return new FormGroup<BatchDeleteTableVersionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGetBlueprintsResponse {
		Blueprints?: Array<Blueprint>;
		MissingBlueprints?: Array<string>;
	}
	export interface BatchGetBlueprintsResponseFormProperties {
	}
	export function CreateBatchGetBlueprintsResponseFormGroup() {
		return new FormGroup<BatchGetBlueprintsResponseFormProperties>({
		});

	}


	/** The details of a blueprint. */
	export interface Blueprint {
		Name?: string;
		Description?: string;
		CreatedOn?: Date;
		LastModifiedOn?: Date;
		ParameterSpec?: string;
		BlueprintLocation?: string;
		BlueprintServiceLocation?: string;
		Status?: BlueprintStatus;
		ErrorMessage?: string;
		LastActiveDefinition?: LastActiveDefinition;
	}

	/** The details of a blueprint. */
	export interface BlueprintFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		ParameterSpec: FormControl<string | null | undefined>,
		BlueprintLocation: FormControl<string | null | undefined>,
		BlueprintServiceLocation: FormControl<string | null | undefined>,
		Status: FormControl<BlueprintStatus | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBlueprintFormGroup() {
		return new FormGroup<BlueprintFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			ParameterSpec: new FormControl<string | null | undefined>(undefined),
			BlueprintLocation: new FormControl<string | null | undefined>(undefined),
			BlueprintServiceLocation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<BlueprintStatus | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BlueprintStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', FAILED = 'FAILED' }


	/** When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service. */
	export interface LastActiveDefinition {
		Description?: string;
		LastModifiedOn?: Date;
		ParameterSpec?: string;
		BlueprintLocation?: string;
		BlueprintServiceLocation?: string;
	}

	/** When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service. */
	export interface LastActiveDefinitionFormProperties {
		Description: FormControl<string | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		ParameterSpec: FormControl<string | null | undefined>,
		BlueprintLocation: FormControl<string | null | undefined>,
		BlueprintServiceLocation: FormControl<string | null | undefined>,
	}
	export function CreateLastActiveDefinitionFormGroup() {
		return new FormGroup<LastActiveDefinitionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			ParameterSpec: new FormControl<string | null | undefined>(undefined),
			BlueprintLocation: new FormControl<string | null | undefined>(undefined),
			BlueprintServiceLocation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetBlueprintsRequest {

		/** Required */
		Names: Array<string>;
		IncludeBlueprint?: boolean | null;
		IncludeParameterSpec?: boolean | null;
	}
	export interface BatchGetBlueprintsRequestFormProperties {
		IncludeBlueprint: FormControl<boolean | null | undefined>,
		IncludeParameterSpec: FormControl<boolean | null | undefined>,
	}
	export function CreateBatchGetBlueprintsRequestFormGroup() {
		return new FormGroup<BatchGetBlueprintsRequestFormProperties>({
			IncludeBlueprint: new FormControl<boolean | null | undefined>(undefined),
			IncludeParameterSpec: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BatchGetCrawlersResponse {
		Crawlers?: Array<Crawler>;
		CrawlersNotFound?: Array<string>;
	}
	export interface BatchGetCrawlersResponseFormProperties {
	}
	export function CreateBatchGetCrawlersResponseFormGroup() {
		return new FormGroup<BatchGetCrawlersResponseFormProperties>({
		});

	}


	/** Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the Glue Data Catalog. */
	export interface Crawler {
		Name?: string;
		Role?: string;
		Targets?: CrawlerTargets;
		DatabaseName?: string;
		Description?: string;
		Classifiers?: Array<string>;
		RecrawlPolicy?: RecrawlPolicy;
		SchemaChangePolicy?: SchemaChangePolicy;
		LineageConfiguration?: LineageConfiguration;
		State?: CrawlerState;
		TablePrefix?: string;
		Schedule?: Schedule;
		CrawlElapsedTime?: number | null;
		CreationTime?: Date;
		LastUpdated?: Date;
		LastCrawl?: LastCrawlInfo;
		Version?: number | null;
		Configuration?: string;
		CrawlerSecurityConfiguration?: string;
		LakeFormationConfiguration?: LakeFormationConfiguration;
	}

	/** Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the Glue Data Catalog. */
	export interface CrawlerFormProperties {
		Name: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<CrawlerState | null | undefined>,
		TablePrefix: FormControl<string | null | undefined>,
		CrawlElapsedTime: FormControl<number | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		Version: FormControl<number | null | undefined>,
		Configuration: FormControl<string | null | undefined>,
		CrawlerSecurityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateCrawlerFormGroup() {
		return new FormGroup<CrawlerFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CrawlerState | null | undefined>(undefined),
			TablePrefix: new FormControl<string | null | undefined>(undefined),
			CrawlElapsedTime: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			Configuration: new FormControl<string | null | undefined>(undefined),
			CrawlerSecurityConfiguration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies data stores to crawl. */
	export interface CrawlerTargets {
		S3Targets?: Array<S3Target>;
		JdbcTargets?: Array<JdbcTarget>;
		MongoDBTargets?: Array<MongoDBTarget>;
		DynamoDBTargets?: Array<DynamoDBTarget>;
		CatalogTargets?: Array<CatalogTarget>;
		DeltaTargets?: Array<DeltaTarget>;
		IcebergTargets?: Array<IcebergTarget>;
		HudiTargets?: Array<HudiTarget>;
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
		Path?: string;
		Exclusions?: Array<string>;
		ConnectionName?: string;
		SampleSize?: number | null;
		EventQueueArn?: string;
		DlqEventQueueArn?: string;
	}

	/** Specifies a data store in Amazon Simple Storage Service (Amazon S3). */
	export interface S3TargetFormProperties {
		Path: FormControl<string | null | undefined>,
		ConnectionName: FormControl<string | null | undefined>,
		SampleSize: FormControl<number | null | undefined>,
		EventQueueArn: FormControl<string | null | undefined>,
		DlqEventQueueArn: FormControl<string | null | undefined>,
	}
	export function CreateS3TargetFormGroup() {
		return new FormGroup<S3TargetFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			ConnectionName: new FormControl<string | null | undefined>(undefined),
			SampleSize: new FormControl<number | null | undefined>(undefined),
			EventQueueArn: new FormControl<string | null | undefined>(undefined),
			DlqEventQueueArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a JDBC data store to crawl. */
	export interface JdbcTarget {
		ConnectionName?: string;
		Path?: string;
		Exclusions?: Array<string>;
		EnableAdditionalMetadata?: Array<JdbcMetadataEntry>;
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

	export enum JdbcMetadataEntry { COMMENTS = 'COMMENTS', RAWTYPES = 'RAWTYPES' }


	/** Specifies an Amazon DocumentDB or MongoDB data store to crawl. */
	export interface MongoDBTarget {
		ConnectionName?: string;
		Path?: string;
		ScanAll?: boolean | null;
	}

	/** Specifies an Amazon DocumentDB or MongoDB data store to crawl. */
	export interface MongoDBTargetFormProperties {
		ConnectionName: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		ScanAll: FormControl<boolean | null | undefined>,
	}
	export function CreateMongoDBTargetFormGroup() {
		return new FormGroup<MongoDBTargetFormProperties>({
			ConnectionName: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			ScanAll: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies an Amazon DynamoDB table to crawl. */
	export interface DynamoDBTarget {
		Path?: string;
		scanAll?: boolean | null;
		scanRate?: number | null;
	}

	/** Specifies an Amazon DynamoDB table to crawl. */
	export interface DynamoDBTargetFormProperties {
		Path: FormControl<string | null | undefined>,
		scanAll: FormControl<boolean | null | undefined>,
		scanRate: FormControl<number | null | undefined>,
	}
	export function CreateDynamoDBTargetFormGroup() {
		return new FormGroup<DynamoDBTargetFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			scanAll: new FormControl<boolean | null | undefined>(undefined),
			scanRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies an Glue Data Catalog target. */
	export interface CatalogTarget {

		/** Required */
		DatabaseName: string;

		/** Required */
		Tables: Array<string>;
		ConnectionName?: string;
		EventQueueArn?: string;
		DlqEventQueueArn?: string;
	}

	/** Specifies an Glue Data Catalog target. */
	export interface CatalogTargetFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
		ConnectionName: FormControl<string | null | undefined>,
		EventQueueArn: FormControl<string | null | undefined>,
		DlqEventQueueArn: FormControl<string | null | undefined>,
	}
	export function CreateCatalogTargetFormGroup() {
		return new FormGroup<CatalogTargetFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionName: new FormControl<string | null | undefined>(undefined),
			EventQueueArn: new FormControl<string | null | undefined>(undefined),
			DlqEventQueueArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a Delta data store to crawl one or more Delta tables. */
	export interface DeltaTarget {
		DeltaTables?: Array<string>;
		ConnectionName?: string;
		WriteManifest?: boolean | null;
		CreateNativeDeltaTable?: boolean | null;
	}

	/** Specifies a Delta data store to crawl one or more Delta tables. */
	export interface DeltaTargetFormProperties {
		ConnectionName: FormControl<string | null | undefined>,
		WriteManifest: FormControl<boolean | null | undefined>,
		CreateNativeDeltaTable: FormControl<boolean | null | undefined>,
	}
	export function CreateDeltaTargetFormGroup() {
		return new FormGroup<DeltaTargetFormProperties>({
			ConnectionName: new FormControl<string | null | undefined>(undefined),
			WriteManifest: new FormControl<boolean | null | undefined>(undefined),
			CreateNativeDeltaTable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies an Apache Iceberg data source where Iceberg tables are stored in Amazon S3. */
	export interface IcebergTarget {
		Paths?: Array<string>;
		ConnectionName?: string;
		Exclusions?: Array<string>;
		MaximumTraversalDepth?: number | null;
	}

	/** Specifies an Apache Iceberg data source where Iceberg tables are stored in Amazon S3. */
	export interface IcebergTargetFormProperties {
		ConnectionName: FormControl<string | null | undefined>,
		MaximumTraversalDepth: FormControl<number | null | undefined>,
	}
	export function CreateIcebergTargetFormGroup() {
		return new FormGroup<IcebergTargetFormProperties>({
			ConnectionName: new FormControl<string | null | undefined>(undefined),
			MaximumTraversalDepth: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies an Apache Hudi data source. */
	export interface HudiTarget {
		Paths?: Array<string>;
		ConnectionName?: string;
		Exclusions?: Array<string>;
		MaximumTraversalDepth?: number | null;
	}

	/** Specifies an Apache Hudi data source. */
	export interface HudiTargetFormProperties {
		ConnectionName: FormControl<string | null | undefined>,
		MaximumTraversalDepth: FormControl<number | null | undefined>,
	}
	export function CreateHudiTargetFormGroup() {
		return new FormGroup<HudiTargetFormProperties>({
			ConnectionName: new FormControl<string | null | undefined>(undefined),
			MaximumTraversalDepth: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/incremental-crawls.html">Incremental Crawls in Glue</a> in the developer guide. */
	export interface RecrawlPolicy {
		RecrawlBehavior?: RecrawlBehavior;
	}

	/** When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/incremental-crawls.html">Incremental Crawls in Glue</a> in the developer guide. */
	export interface RecrawlPolicyFormProperties {
		RecrawlBehavior: FormControl<RecrawlBehavior | null | undefined>,
	}
	export function CreateRecrawlPolicyFormGroup() {
		return new FormGroup<RecrawlPolicyFormProperties>({
			RecrawlBehavior: new FormControl<RecrawlBehavior | null | undefined>(undefined),
		});

	}

	export enum RecrawlBehavior { CRAWL_EVERYTHING = 'CRAWL_EVERYTHING', CRAWL_NEW_FOLDERS_ONLY = 'CRAWL_NEW_FOLDERS_ONLY', CRAWL_EVENT_MODE = 'CRAWL_EVENT_MODE' }


	/** A policy that specifies update and deletion behaviors for the crawler. */
	export interface SchemaChangePolicy {
		UpdateBehavior?: UpdateBehavior;
		DeleteBehavior?: DeleteBehavior;
	}

	/** A policy that specifies update and deletion behaviors for the crawler. */
	export interface SchemaChangePolicyFormProperties {
		UpdateBehavior: FormControl<UpdateBehavior | null | undefined>,
		DeleteBehavior: FormControl<DeleteBehavior | null | undefined>,
	}
	export function CreateSchemaChangePolicyFormGroup() {
		return new FormGroup<SchemaChangePolicyFormProperties>({
			UpdateBehavior: new FormControl<UpdateBehavior | null | undefined>(undefined),
			DeleteBehavior: new FormControl<DeleteBehavior | null | undefined>(undefined),
		});

	}

	export enum UpdateBehavior { LOG = 'LOG', UPDATE_IN_DATABASE = 'UPDATE_IN_DATABASE' }

	export enum DeleteBehavior { LOG = 'LOG', DELETE_FROM_DATABASE = 'DELETE_FROM_DATABASE', DEPRECATE_IN_DATABASE = 'DEPRECATE_IN_DATABASE' }


	/** Specifies data lineage configuration settings for the crawler. */
	export interface LineageConfiguration {
		CrawlerLineageSettings?: CrawlerLineageSettings;
	}

	/** Specifies data lineage configuration settings for the crawler. */
	export interface LineageConfigurationFormProperties {
		CrawlerLineageSettings: FormControl<CrawlerLineageSettings | null | undefined>,
	}
	export function CreateLineageConfigurationFormGroup() {
		return new FormGroup<LineageConfigurationFormProperties>({
			CrawlerLineageSettings: new FormControl<CrawlerLineageSettings | null | undefined>(undefined),
		});

	}

	export enum CrawlerLineageSettings { ENABLE = 'ENABLE', DISABLE = 'DISABLE' }

	export enum CrawlerState { READY = 'READY', RUNNING = 'RUNNING', STOPPING = 'STOPPING' }


	/** A scheduling object using a <code>cron</code> statement to schedule an event. */
	export interface Schedule {
		ScheduleExpression?: string;
		State?: ScheduleState;
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

	export enum ScheduleState { SCHEDULED = 'SCHEDULED', NOT_SCHEDULED = 'NOT_SCHEDULED', TRANSITIONING = 'TRANSITIONING' }


	/** Status and error information about the most recent crawl. */
	export interface LastCrawlInfo {
		Status?: LastCrawlStatus;
		ErrorMessage?: string;
		LogGroup?: string;
		LogStream?: string;
		MessagePrefix?: string;
		StartTime?: Date;
	}

	/** Status and error information about the most recent crawl. */
	export interface LastCrawlInfoFormProperties {
		Status: FormControl<LastCrawlStatus | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		LogGroup: FormControl<string | null | undefined>,
		LogStream: FormControl<string | null | undefined>,
		MessagePrefix: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateLastCrawlInfoFormGroup() {
		return new FormGroup<LastCrawlInfoFormProperties>({
			Status: new FormControl<LastCrawlStatus | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			LogGroup: new FormControl<string | null | undefined>(undefined),
			LogStream: new FormControl<string | null | undefined>(undefined),
			MessagePrefix: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum LastCrawlStatus { SUCCEEDED = 'SUCCEEDED', CANCELLED = 'CANCELLED', FAILED = 'FAILED' }


	/** Specifies Lake Formation configuration settings for the crawler. */
	export interface LakeFormationConfiguration {
		UseLakeFormationCredentials?: boolean | null;
		AccountId?: string;
	}

	/** Specifies Lake Formation configuration settings for the crawler. */
	export interface LakeFormationConfigurationFormProperties {
		UseLakeFormationCredentials: FormControl<boolean | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateLakeFormationConfigurationFormGroup() {
		return new FormGroup<LakeFormationConfigurationFormProperties>({
			UseLakeFormationCredentials: new FormControl<boolean | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetCrawlersRequest {

		/** Required */
		CrawlerNames: Array<string>;
	}
	export interface BatchGetCrawlersRequestFormProperties {
	}
	export function CreateBatchGetCrawlersRequestFormGroup() {
		return new FormGroup<BatchGetCrawlersRequestFormProperties>({
		});

	}

	export interface BatchGetCustomEntityTypesResponse {
		CustomEntityTypes?: Array<CustomEntityType>;
		CustomEntityTypesNotFound?: Array<string>;
	}
	export interface BatchGetCustomEntityTypesResponseFormProperties {
	}
	export function CreateBatchGetCustomEntityTypesResponseFormGroup() {
		return new FormGroup<BatchGetCustomEntityTypesResponseFormProperties>({
		});

	}


	/** An object representing a custom pattern for detecting sensitive data across the columns and rows of your structured data. */
	export interface CustomEntityType {

		/** Required */
		Name: string;

		/** Required */
		RegexString: string;
		ContextWords?: Array<string>;
	}

	/** An object representing a custom pattern for detecting sensitive data across the columns and rows of your structured data. */
	export interface CustomEntityTypeFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RegexString: FormControl<string | null | undefined>,
	}
	export function CreateCustomEntityTypeFormGroup() {
		return new FormGroup<CustomEntityTypeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RegexString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGetCustomEntityTypesRequest {

		/** Required */
		Names: Array<string>;
	}
	export interface BatchGetCustomEntityTypesRequestFormProperties {
	}
	export function CreateBatchGetCustomEntityTypesRequestFormGroup() {
		return new FormGroup<BatchGetCustomEntityTypesRequestFormProperties>({
		});

	}

	export interface BatchGetDataQualityResultResponse {

		/** Required */
		Results: Array<DataQualityResult>;
		ResultsNotFound?: Array<string>;
	}
	export interface BatchGetDataQualityResultResponseFormProperties {
	}
	export function CreateBatchGetDataQualityResultResponseFormGroup() {
		return new FormGroup<BatchGetDataQualityResultResponseFormProperties>({
		});

	}


	/** Describes a data quality result. */
	export interface DataQualityResult {
		ResultId?: string;
		Score?: number | null;
		DataSource?: DataSource;
		RulesetName?: string;
		EvaluationContext?: string;
		StartedOn?: Date;
		CompletedOn?: Date;
		JobName?: string;
		JobRunId?: string;
		RulesetEvaluationRunId?: string;
		RuleResults?: Array<DataQualityRuleResult>;
	}

	/** Describes a data quality result. */
	export interface DataQualityResultFormProperties {
		ResultId: FormControl<string | null | undefined>,
		Score: FormControl<number | null | undefined>,
		RulesetName: FormControl<string | null | undefined>,
		EvaluationContext: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobRunId: FormControl<string | null | undefined>,
		RulesetEvaluationRunId: FormControl<string | null | undefined>,
	}
	export function CreateDataQualityResultFormGroup() {
		return new FormGroup<DataQualityResultFormProperties>({
			ResultId: new FormControl<string | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			RulesetName: new FormControl<string | null | undefined>(undefined),
			EvaluationContext: new FormControl<string | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobRunId: new FormControl<string | null | undefined>(undefined),
			RulesetEvaluationRunId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data source (an Glue table) for which you want data quality results. */
	export interface DataSource {

		/** Required */
		GlueTable: GlueTable;
	}

	/** A data source (an Glue table) for which you want data quality results. */
	export interface DataSourceFormProperties {
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
		});

	}


	/** The database and table in the Glue Data Catalog that is used for input or output data. */
	export interface GlueTable {

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		CatalogId?: string;
		ConnectionName?: string;
		AdditionalOptions?: GlueTableAdditionalOptions;
	}

	/** The database and table in the Glue Data Catalog that is used for input or output data. */
	export interface GlueTableFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
		CatalogId: FormControl<string | null | undefined>,
		ConnectionName: FormControl<string | null | undefined>,
	}
	export function CreateGlueTableFormGroup() {
		return new FormGroup<GlueTableFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CatalogId: new FormControl<string | null | undefined>(undefined),
			ConnectionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GlueTableAdditionalOptions {
	}
	export interface GlueTableAdditionalOptionsFormProperties {
	}
	export function CreateGlueTableAdditionalOptionsFormGroup() {
		return new FormGroup<GlueTableAdditionalOptionsFormProperties>({
		});

	}


	/** Describes the result of the evaluation of a data quality rule. */
	export interface DataQualityRuleResult {
		Name?: string;
		Description?: string;
		EvaluationMessage?: string;
		Result?: DataQualityRuleResultStatus;
		EvaluatedMetrics?: EvaluatedMetricsMap;
	}

	/** Describes the result of the evaluation of a data quality rule. */
	export interface DataQualityRuleResultFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EvaluationMessage: FormControl<string | null | undefined>,
		Result: FormControl<DataQualityRuleResultStatus | null | undefined>,
	}
	export function CreateDataQualityRuleResultFormGroup() {
		return new FormGroup<DataQualityRuleResultFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EvaluationMessage: new FormControl<string | null | undefined>(undefined),
			Result: new FormControl<DataQualityRuleResultStatus | null | undefined>(undefined),
		});

	}

	export enum DataQualityRuleResultStatus { PASS = 'PASS', FAIL = 'FAIL', ERROR = 'ERROR' }

	export interface EvaluatedMetricsMap {
	}
	export interface EvaluatedMetricsMapFormProperties {
	}
	export function CreateEvaluatedMetricsMapFormGroup() {
		return new FormGroup<EvaluatedMetricsMapFormProperties>({
		});

	}

	export interface BatchGetDataQualityResultRequest {

		/** Required */
		ResultIds: Array<string>;
	}
	export interface BatchGetDataQualityResultRequestFormProperties {
	}
	export function CreateBatchGetDataQualityResultRequestFormGroup() {
		return new FormGroup<BatchGetDataQualityResultRequestFormProperties>({
		});

	}

	export interface BatchGetDevEndpointsResponse {
		DevEndpoints?: Array<DevEndpoint>;
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
		EndpointName?: string;
		RoleArn?: string;
		SecurityGroupIds?: Array<string>;
		SubnetId?: string;
		YarnEndpointAddress?: string;
		PrivateAddress?: string;
		ZeppelinRemoteSparkInterpreterPort?: number | null;
		PublicAddress?: string;
		Status?: string;
		WorkerType?: WorkerType;
		GlueVersion?: string;
		NumberOfWorkers?: number | null;
		NumberOfNodes?: number | null;
		AvailabilityZone?: string;
		VpcId?: string;
		ExtraPythonLibsS3Path?: string;
		ExtraJarsS3Path?: string;
		FailureReason?: string;
		LastUpdateStatus?: string;
		CreatedTimestamp?: Date;
		LastModifiedTimestamp?: Date;
		PublicKey?: string;
		PublicKeys?: Array<string>;
		SecurityConfiguration?: string;
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
		WorkerType: FormControl<WorkerType | null | undefined>,
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
		SecurityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateDevEndpointFormGroup() {
		return new FormGroup<DevEndpointFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			YarnEndpointAddress: new FormControl<string | null | undefined>(undefined),
			PrivateAddress: new FormControl<string | null | undefined>(undefined),
			ZeppelinRemoteSparkInterpreterPort: new FormControl<number | null | undefined>(undefined),
			PublicAddress: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			WorkerType: new FormControl<WorkerType | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
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
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkerType { Standard = 'Standard', 'G.1X' = 'G.1X', 'G.2X' = 'G.2X', 'G.025X' = 'G.025X', 'G.4X' = 'G.4X', 'G.8X' = 'G.8X', 'Z.2X' = 'Z.2X' }

	export interface MapValue {
	}
	export interface MapValueFormProperties {
	}
	export function CreateMapValueFormGroup() {
		return new FormGroup<MapValueFormProperties>({
		});

	}

	export interface BatchGetDevEndpointsRequest {

		/** Required */
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
		Name?: string;
		Description?: string;
		LogUri?: string;
		Role?: string;
		CreatedOn?: Date;
		LastModifiedOn?: Date;
		ExecutionProperty?: ExecutionProperty;
		Command?: JobCommand;
		DefaultArguments?: GenericMap;
		NonOverridableArguments?: GenericMap;
		Connections?: ConnectionsList;
		MaxRetries?: number | null;
		AllocatedCapacity?: number | null;
		Timeout?: number | null;
		MaxCapacity?: number | null;
		WorkerType?: WorkerType;
		NumberOfWorkers?: number | null;
		SecurityConfiguration?: string;
		NotificationProperty?: NotificationProperty;
		GlueVersion?: string;
		CodeGenConfigurationNodes?: CodeGenConfigurationNodes;
		ExecutionClass?: ExecutionClass;
		SourceControlDetails?: SourceControlDetails;
	}

	/** Specifies a job definition. */
	export interface JobFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LogUri: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		CreatedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
		AllocatedCapacity: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<WorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		SecurityConfiguration: FormControl<string | null | undefined>,
		GlueVersion: FormControl<string | null | undefined>,
		ExecutionClass: FormControl<ExecutionClass | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
			AllocatedCapacity: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<WorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
			ExecutionClass: new FormControl<ExecutionClass | null | undefined>(undefined),
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


	/** Specifies code that runs when a job is run. */
	export interface JobCommand {
		Name?: string;
		ScriptLocation?: string;
		PythonVersion?: string;
		Runtime?: string;
	}

	/** Specifies code that runs when a job is run. */
	export interface JobCommandFormProperties {
		Name: FormControl<string | null | undefined>,
		ScriptLocation: FormControl<string | null | undefined>,
		PythonVersion: FormControl<string | null | undefined>,
		Runtime: FormControl<string | null | undefined>,
	}
	export function CreateJobCommandFormGroup() {
		return new FormGroup<JobCommandFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ScriptLocation: new FormControl<string | null | undefined>(undefined),
			PythonVersion: new FormControl<string | null | undefined>(undefined),
			Runtime: new FormControl<string | null | undefined>(undefined),
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
		NotifyDelayAfter?: number | null;
	}

	/** Specifies configuration properties of a notification. */
	export interface NotificationPropertyFormProperties {
		NotifyDelayAfter: FormControl<number | null | undefined>,
	}
	export function CreateNotificationPropertyFormGroup() {
		return new FormGroup<NotificationPropertyFormProperties>({
			NotifyDelayAfter: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CodeGenConfigurationNodes {
	}
	export interface CodeGenConfigurationNodesFormProperties {
	}
	export function CreateCodeGenConfigurationNodesFormGroup() {
		return new FormGroup<CodeGenConfigurationNodesFormProperties>({
		});

	}

	export enum ExecutionClass { FLEX = 'FLEX', STANDARD = 'STANDARD' }


	/** The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository. */
	export interface SourceControlDetails {
		Provider?: SourceControlProvider;
		Repository?: string;
		Owner?: string;
		Branch?: string;
		Folder?: string;
		LastCommitId?: string;
		AuthStrategy?: SourceControlAuthStrategy;
		AuthToken?: string;
	}

	/** The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository. */
	export interface SourceControlDetailsFormProperties {
		Provider: FormControl<SourceControlProvider | null | undefined>,
		Repository: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		Branch: FormControl<string | null | undefined>,
		Folder: FormControl<string | null | undefined>,
		LastCommitId: FormControl<string | null | undefined>,
		AuthStrategy: FormControl<SourceControlAuthStrategy | null | undefined>,
		AuthToken: FormControl<string | null | undefined>,
	}
	export function CreateSourceControlDetailsFormGroup() {
		return new FormGroup<SourceControlDetailsFormProperties>({
			Provider: new FormControl<SourceControlProvider | null | undefined>(undefined),
			Repository: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			Branch: new FormControl<string | null | undefined>(undefined),
			Folder: new FormControl<string | null | undefined>(undefined),
			LastCommitId: new FormControl<string | null | undefined>(undefined),
			AuthStrategy: new FormControl<SourceControlAuthStrategy | null | undefined>(undefined),
			AuthToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SourceControlProvider { GITHUB = 'GITHUB', AWS_CODE_COMMIT = 'AWS_CODE_COMMIT' }

	export enum SourceControlAuthStrategy { PERSONAL_ACCESS_TOKEN = 'PERSONAL_ACCESS_TOKEN', AWS_SECRETS_MANAGER = 'AWS_SECRETS_MANAGER' }

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
		DatabaseName?: string;
		TableName?: string;
		CreationTime?: Date;
		LastAccessTime?: Date;
		StorageDescriptor?: StorageDescriptor;
		Parameters?: ParametersMap;
		LastAnalyzedTime?: Date;
		CatalogId?: string;
	}

	/** Represents a slice of table data. */
	export interface PartitionFormProperties {
		DatabaseName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastAccessTime: FormControl<Date | null | undefined>,
		LastAnalyzedTime: FormControl<Date | null | undefined>,
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreatePartitionFormGroup() {
		return new FormGroup<PartitionFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastAccessTime: new FormControl<Date | null | undefined>(undefined),
			LastAnalyzedTime: new FormControl<Date | null | undefined>(undefined),
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetPartitionRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		PartitionsToGet: Array<PartitionValueList>;
	}
	export interface BatchGetPartitionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetPartitionRequestFormGroup() {
		return new FormGroup<BatchGetPartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidStateException {
	}
	export interface InvalidStateExceptionFormProperties {
	}
	export function CreateInvalidStateExceptionFormGroup() {
		return new FormGroup<InvalidStateExceptionFormProperties>({
		});

	}

	export interface FederationSourceException {
	}
	export interface FederationSourceExceptionFormProperties {
	}
	export function CreateFederationSourceExceptionFormGroup() {
		return new FormGroup<FederationSourceExceptionFormProperties>({
		});

	}

	export interface FederationSourceRetryableException {
	}
	export interface FederationSourceRetryableExceptionFormProperties {
	}
	export function CreateFederationSourceRetryableExceptionFormGroup() {
		return new FormGroup<FederationSourceRetryableExceptionFormProperties>({
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
		Name?: string;
		WorkflowName?: string;
		Id?: string;
		Type?: TriggerType;
		State?: TriggerState;
		Description?: string;
		Schedule?: string;
		Actions?: Array<Action>;
		Predicate?: Predicate;
		EventBatchingCondition?: EventBatchingCondition;
	}

	/** Information about a specific trigger. */
	export interface TriggerFormProperties {
		Name: FormControl<string | null | undefined>,
		WorkflowName: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Type: FormControl<TriggerType | null | undefined>,
		State: FormControl<TriggerState | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
	}
	export function CreateTriggerFormGroup() {
		return new FormGroup<TriggerFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			WorkflowName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<TriggerType | null | undefined>(undefined),
			State: new FormControl<TriggerState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TriggerType { SCHEDULED = 'SCHEDULED', CONDITIONAL = 'CONDITIONAL', ON_DEMAND = 'ON_DEMAND', EVENT = 'EVENT' }

	export enum TriggerState { CREATING = 'CREATING', CREATED = 'CREATED', ACTIVATING = 'ACTIVATING', ACTIVATED = 'ACTIVATED', DEACTIVATING = 'DEACTIVATING', DEACTIVATED = 'DEACTIVATED', DELETING = 'DELETING', UPDATING = 'UPDATING' }


	/** Defines an action to be initiated by a trigger. */
	export interface Action {
		JobName?: string;
		Arguments?: GenericMap;
		Timeout?: number | null;
		SecurityConfiguration?: string;
		NotificationProperty?: NotificationProperty;
		CrawlerName?: string;
	}

	/** Defines an action to be initiated by a trigger. */
	export interface ActionFormProperties {
		JobName: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		SecurityConfiguration: FormControl<string | null | undefined>,
		CrawlerName: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
			CrawlerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the predicate of the trigger, which determines when it fires. */
	export interface Predicate {
		Logical?: Logical;
		Conditions?: Array<Condition>;
	}

	/** Defines the predicate of the trigger, which determines when it fires. */
	export interface PredicateFormProperties {
		Logical: FormControl<Logical | null | undefined>,
	}
	export function CreatePredicateFormGroup() {
		return new FormGroup<PredicateFormProperties>({
			Logical: new FormControl<Logical | null | undefined>(undefined),
		});

	}

	export enum Logical { AND = 'AND', ANY = 'ANY' }


	/** Defines a condition under which a trigger fires. */
	export interface Condition {
		LogicalOperator?: LogicalOperator;
		JobName?: string;
		State?: JobRunState;
		CrawlerName?: string;
		CrawlState?: CrawlState;
	}

	/** Defines a condition under which a trigger fires. */
	export interface ConditionFormProperties {
		LogicalOperator: FormControl<LogicalOperator | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		State: FormControl<JobRunState | null | undefined>,
		CrawlerName: FormControl<string | null | undefined>,
		CrawlState: FormControl<CrawlState | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			LogicalOperator: new FormControl<LogicalOperator | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<JobRunState | null | undefined>(undefined),
			CrawlerName: new FormControl<string | null | undefined>(undefined),
			CrawlState: new FormControl<CrawlState | null | undefined>(undefined),
		});

	}

	export enum LogicalOperator { EQUALS = 'EQUALS' }

	export enum JobRunState { STARTING = 'STARTING', RUNNING = 'RUNNING', STOPPING = 'STOPPING', STOPPED = 'STOPPED', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', TIMEOUT = 'TIMEOUT', ERROR = 'ERROR', WAITING = 'WAITING' }

	export enum CrawlState { RUNNING = 'RUNNING', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', ERROR = 'ERROR' }


	/** Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires. */
	export interface EventBatchingCondition {

		/** Required */
		BatchSize: number;
		BatchWindow?: number | null;
	}

	/** Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires. */
	export interface EventBatchingConditionFormProperties {

		/** Required */
		BatchSize: FormControl<number | null | undefined>,
		BatchWindow: FormControl<number | null | undefined>,
	}
	export function CreateEventBatchingConditionFormGroup() {
		return new FormGroup<EventBatchingConditionFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			BatchWindow: new FormControl<number | null | undefined>(undefined),
		});

	}

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
		Workflows?: Array<Workflow>;
		MissingWorkflows?: Array<string>;
	}
	export interface BatchGetWorkflowsResponseFormProperties {
	}
	export function CreateBatchGetWorkflowsResponseFormGroup() {
		return new FormGroup<BatchGetWorkflowsResponseFormProperties>({
		});

	}


	/** A workflow is a collection of multiple dependent Glue jobs and crawlers that are run to complete a complex ETL task. A workflow manages the execution and monitoring of all its jobs and crawlers. */
	export interface Workflow {
		Name?: string;
		Description?: string;
		DefaultRunProperties?: WorkflowRunProperties;
		CreatedOn?: Date;
		LastModifiedOn?: Date;
		LastRun?: WorkflowRun;
		Graph?: WorkflowGraph;
		MaxConcurrentRuns?: number | null;
		BlueprintDetails?: BlueprintDetails;
	}

	/** A workflow is a collection of multiple dependent Glue jobs and crawlers that are run to complete a complex ETL task. A workflow manages the execution and monitoring of all its jobs and crawlers. */
	export interface WorkflowFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		MaxConcurrentRuns: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowFormGroup() {
		return new FormGroup<WorkflowFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			MaxConcurrentRuns: new FormControl<number | null | undefined>(undefined),
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
		Name?: string;
		WorkflowRunId?: string;
		PreviousRunId?: string;
		WorkflowRunProperties?: WorkflowRunProperties;
		StartedOn?: Date;
		CompletedOn?: Date;
		Status?: WorkflowRunStatus;
		ErrorMessage?: string;
		Statistics?: WorkflowRunStatistics;
		Graph?: WorkflowGraph;
		StartingEventBatchCondition?: StartingEventBatchCondition;
	}

	/** A workflow run is an execution of a workflow providing all the runtime information. */
	export interface WorkflowRunFormProperties {
		Name: FormControl<string | null | undefined>,
		WorkflowRunId: FormControl<string | null | undefined>,
		PreviousRunId: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		Status: FormControl<WorkflowRunStatus | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowRunFormGroup() {
		return new FormGroup<WorkflowRunFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			WorkflowRunId: new FormControl<string | null | undefined>(undefined),
			PreviousRunId: new FormControl<string | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<WorkflowRunStatus | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkflowRunStatus { RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', STOPPING = 'STOPPING', STOPPED = 'STOPPED', ERROR = 'ERROR' }


	/** Workflow run statistics provides statistics about the workflow run. */
	export interface WorkflowRunStatistics {
		TotalActions?: number | null;
		TimeoutActions?: number | null;
		FailedActions?: number | null;
		StoppedActions?: number | null;
		SucceededActions?: number | null;
		RunningActions?: number | null;
		ErroredActions?: number | null;
		WaitingActions?: number | null;
	}

	/** Workflow run statistics provides statistics about the workflow run. */
	export interface WorkflowRunStatisticsFormProperties {
		TotalActions: FormControl<number | null | undefined>,
		TimeoutActions: FormControl<number | null | undefined>,
		FailedActions: FormControl<number | null | undefined>,
		StoppedActions: FormControl<number | null | undefined>,
		SucceededActions: FormControl<number | null | undefined>,
		RunningActions: FormControl<number | null | undefined>,
		ErroredActions: FormControl<number | null | undefined>,
		WaitingActions: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowRunStatisticsFormGroup() {
		return new FormGroup<WorkflowRunStatisticsFormProperties>({
			TotalActions: new FormControl<number | null | undefined>(undefined),
			TimeoutActions: new FormControl<number | null | undefined>(undefined),
			FailedActions: new FormControl<number | null | undefined>(undefined),
			StoppedActions: new FormControl<number | null | undefined>(undefined),
			SucceededActions: new FormControl<number | null | undefined>(undefined),
			RunningActions: new FormControl<number | null | undefined>(undefined),
			ErroredActions: new FormControl<number | null | undefined>(undefined),
			WaitingActions: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A workflow graph represents the complete workflow containing all the Glue components present in the workflow and all the directed connections between them. */
	export interface WorkflowGraph {
		Nodes?: Array<Node>;
		Edges?: Array<Edge>;
	}

	/** A workflow graph represents the complete workflow containing all the Glue components present in the workflow and all the directed connections between them. */
	export interface WorkflowGraphFormProperties {
	}
	export function CreateWorkflowGraphFormGroup() {
		return new FormGroup<WorkflowGraphFormProperties>({
		});

	}


	/** A node represents an Glue component (trigger, crawler, or job) on a workflow graph. */
	export interface Node {
		Type?: NodeType;
		Name?: string;
		UniqueId?: string;
		TriggerDetails?: TriggerNodeDetails;
		JobDetails?: JobNodeDetails;
		CrawlerDetails?: CrawlerNodeDetails;
	}

	/** A node represents an Glue component (trigger, crawler, or job) on a workflow graph. */
	export interface NodeFormProperties {
		Type: FormControl<NodeType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		UniqueId: FormControl<string | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			Type: new FormControl<NodeType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			UniqueId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NodeType { CRAWLER = 'CRAWLER', JOB = 'JOB', TRIGGER = 'TRIGGER' }


	/** The details of a Trigger node present in the workflow. */
	export interface TriggerNodeDetails {
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
		Id?: string;
		Attempt?: number | null;
		PreviousRunId?: string;
		TriggerName?: string;
		JobName?: string;
		StartedOn?: Date;
		LastModifiedOn?: Date;
		CompletedOn?: Date;
		JobRunState?: JobRunState;
		Arguments?: GenericMap;
		ErrorMessage?: string;
		PredecessorRuns?: Array<Predecessor>;
		AllocatedCapacity?: number | null;
		ExecutionTime?: number | null;
		Timeout?: number | null;
		MaxCapacity?: number | null;
		WorkerType?: WorkerType;
		NumberOfWorkers?: number | null;
		SecurityConfiguration?: string;
		LogGroupName?: string;
		NotificationProperty?: NotificationProperty;
		GlueVersion?: string;
		DPUSeconds?: number | null;
		ExecutionClass?: ExecutionClass;
	}

	/** Contains information about a job run. */
	export interface JobRunFormProperties {
		Id: FormControl<string | null | undefined>,
		Attempt: FormControl<number | null | undefined>,
		PreviousRunId: FormControl<string | null | undefined>,
		TriggerName: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		JobRunState: FormControl<JobRunState | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		AllocatedCapacity: FormControl<number | null | undefined>,
		ExecutionTime: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<WorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		SecurityConfiguration: FormControl<string | null | undefined>,
		LogGroupName: FormControl<string | null | undefined>,
		GlueVersion: FormControl<string | null | undefined>,
		DPUSeconds: FormControl<number | null | undefined>,
		ExecutionClass: FormControl<ExecutionClass | null | undefined>,
	}
	export function CreateJobRunFormGroup() {
		return new FormGroup<JobRunFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Attempt: new FormControl<number | null | undefined>(undefined),
			PreviousRunId: new FormControl<string | null | undefined>(undefined),
			TriggerName: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			JobRunState: new FormControl<JobRunState | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			AllocatedCapacity: new FormControl<number | null | undefined>(undefined),
			ExecutionTime: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<WorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
			LogGroupName: new FormControl<string | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
			DPUSeconds: new FormControl<number | null | undefined>(undefined),
			ExecutionClass: new FormControl<ExecutionClass | null | undefined>(undefined),
		});

	}


	/** A job run that was used in the predicate of a conditional trigger that triggered this job run. */
	export interface Predecessor {
		JobName?: string;
		RunId?: string;
	}

	/** A job run that was used in the predicate of a conditional trigger that triggered this job run. */
	export interface PredecessorFormProperties {
		JobName: FormControl<string | null | undefined>,
		RunId: FormControl<string | null | undefined>,
	}
	export function CreatePredecessorFormGroup() {
		return new FormGroup<PredecessorFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			RunId: new FormControl<string | null | undefined>(undefined),
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
		State?: CrawlState;
		StartedOn?: Date;
		CompletedOn?: Date;
		ErrorMessage?: string;
		LogGroup?: string;
		LogStream?: string;
	}

	/** The details of a crawl in the workflow. */
	export interface CrawlFormProperties {
		State: FormControl<CrawlState | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		LogGroup: FormControl<string | null | undefined>,
		LogStream: FormControl<string | null | undefined>,
	}
	export function CreateCrawlFormGroup() {
		return new FormGroup<CrawlFormProperties>({
			State: new FormControl<CrawlState | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			LogGroup: new FormControl<string | null | undefined>(undefined),
			LogStream: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An edge represents a directed connection between two Glue components that are part of the workflow the edge belongs to. */
	export interface Edge {
		SourceId?: string;
		DestinationId?: string;
	}

	/** An edge represents a directed connection between two Glue components that are part of the workflow the edge belongs to. */
	export interface EdgeFormProperties {
		SourceId: FormControl<string | null | undefined>,
		DestinationId: FormControl<string | null | undefined>,
	}
	export function CreateEdgeFormGroup() {
		return new FormGroup<EdgeFormProperties>({
			SourceId: new FormControl<string | null | undefined>(undefined),
			DestinationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The batch condition that started the workflow run. Either the number of events in the batch size arrived, in which case the BatchSize member is non-zero, or the batch window expired, in which case the BatchWindow member is non-zero. */
	export interface StartingEventBatchCondition {
		BatchSize?: number | null;
		BatchWindow?: number | null;
	}

	/** The batch condition that started the workflow run. Either the number of events in the batch size arrived, in which case the BatchSize member is non-zero, or the batch window expired, in which case the BatchWindow member is non-zero. */
	export interface StartingEventBatchConditionFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		BatchWindow: FormControl<number | null | undefined>,
	}
	export function CreateStartingEventBatchConditionFormGroup() {
		return new FormGroup<StartingEventBatchConditionFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			BatchWindow: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The details of a blueprint. */
	export interface BlueprintDetails {
		BlueprintName?: string;
		RunId?: string;
	}

	/** The details of a blueprint. */
	export interface BlueprintDetailsFormProperties {
		BlueprintName: FormControl<string | null | undefined>,
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateBlueprintDetailsFormGroup() {
		return new FormGroup<BlueprintDetailsFormProperties>({
			BlueprintName: new FormControl<string | null | undefined>(undefined),
			RunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetWorkflowsRequest {

		/** Required */
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
		JobName?: string;
		JobRunId?: string;
	}

	/** Records a successful request to stop a specified <code>JobRun</code>. */
	export interface BatchStopJobRunSuccessfulSubmissionFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobRunId: FormControl<string | null | undefined>,
	}
	export function CreateBatchStopJobRunSuccessfulSubmissionFormGroup() {
		return new FormGroup<BatchStopJobRunSuccessfulSubmissionFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobRunId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Records an error that occurred when attempting to stop a specified job run. */
	export interface BatchStopJobRunError {
		JobName?: string;
		JobRunId?: string;
		ErrorDetail?: ErrorDetail;
	}

	/** Records an error that occurred when attempting to stop a specified job run. */
	export interface BatchStopJobRunErrorFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobRunId: FormControl<string | null | undefined>,
	}
	export function CreateBatchStopJobRunErrorFormGroup() {
		return new FormGroup<BatchStopJobRunErrorFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobRunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchStopJobRunRequest {

		/** Required */
		JobName: string;

		/** Required */
		JobRunIds: Array<string>;
	}
	export interface BatchStopJobRunRequestFormProperties {

		/** Required */
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateBatchStopJobRunRequestFormGroup() {
		return new FormGroup<BatchStopJobRunRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchUpdatePartitionResponse {
		Errors?: Array<BatchUpdatePartitionFailureEntry>;
	}
	export interface BatchUpdatePartitionResponseFormProperties {
	}
	export function CreateBatchUpdatePartitionResponseFormGroup() {
		return new FormGroup<BatchUpdatePartitionResponseFormProperties>({
		});

	}


	/** Contains information about a batch update partition error. */
	export interface BatchUpdatePartitionFailureEntry {
		PartitionValueList?: Array<string>;
		ErrorDetail?: ErrorDetail;
	}

	/** Contains information about a batch update partition error. */
	export interface BatchUpdatePartitionFailureEntryFormProperties {
	}
	export function CreateBatchUpdatePartitionFailureEntryFormGroup() {
		return new FormGroup<BatchUpdatePartitionFailureEntryFormProperties>({
		});

	}

	export interface BatchUpdatePartitionRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		Entries: Array<BatchUpdatePartitionRequestEntry>;
	}
	export interface BatchUpdatePartitionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdatePartitionRequestFormGroup() {
		return new FormGroup<BatchUpdatePartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure that contains the values and structure used to update a partition. */
	export interface BatchUpdatePartitionRequestEntry {

		/** Required */
		PartitionValueList: Array<string>;

		/** Required */
		PartitionInput: PartitionInput;
	}

	/** A structure that contains the values and structure used to update a partition. */
	export interface BatchUpdatePartitionRequestEntryFormProperties {
	}
	export function CreateBatchUpdatePartitionRequestEntryFormGroup() {
		return new FormGroup<BatchUpdatePartitionRequestEntryFormProperties>({
		});

	}

	export interface CancelDataQualityRuleRecommendationRunResponse {
	}
	export interface CancelDataQualityRuleRecommendationRunResponseFormProperties {
	}
	export function CreateCancelDataQualityRuleRecommendationRunResponseFormGroup() {
		return new FormGroup<CancelDataQualityRuleRecommendationRunResponseFormProperties>({
		});

	}

	export interface CancelDataQualityRuleRecommendationRunRequest {

		/** Required */
		RunId: string;
	}
	export interface CancelDataQualityRuleRecommendationRunRequestFormProperties {

		/** Required */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateCancelDataQualityRuleRecommendationRunRequestFormGroup() {
		return new FormGroup<CancelDataQualityRuleRecommendationRunRequestFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelDataQualityRulesetEvaluationRunResponse {
	}
	export interface CancelDataQualityRulesetEvaluationRunResponseFormProperties {
	}
	export function CreateCancelDataQualityRulesetEvaluationRunResponseFormGroup() {
		return new FormGroup<CancelDataQualityRulesetEvaluationRunResponseFormProperties>({
		});

	}

	export interface CancelDataQualityRulesetEvaluationRunRequest {

		/** Required */
		RunId: string;
	}
	export interface CancelDataQualityRulesetEvaluationRunRequestFormProperties {

		/** Required */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateCancelDataQualityRulesetEvaluationRunRequestFormGroup() {
		return new FormGroup<CancelDataQualityRulesetEvaluationRunRequestFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelMLTaskRunResponse {
		TransformId?: string;
		TaskRunId?: string;
		Status?: TaskStatusType;
	}
	export interface CancelMLTaskRunResponseFormProperties {
		TransformId: FormControl<string | null | undefined>,
		TaskRunId: FormControl<string | null | undefined>,
		Status: FormControl<TaskStatusType | null | undefined>,
	}
	export function CreateCancelMLTaskRunResponseFormGroup() {
		return new FormGroup<CancelMLTaskRunResponseFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined),
			TaskRunId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskStatusType | null | undefined>(undefined),
		});

	}

	export enum TaskStatusType { STARTING = 'STARTING', RUNNING = 'RUNNING', STOPPING = 'STOPPING', STOPPED = 'STOPPED', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', TIMEOUT = 'TIMEOUT' }

	export interface CancelMLTaskRunRequest {

		/** Required */
		TransformId: string;

		/** Required */
		TaskRunId: string;
	}
	export interface CancelMLTaskRunRequestFormProperties {

		/** Required */
		TransformId: FormControl<string | null | undefined>,

		/** Required */
		TaskRunId: FormControl<string | null | undefined>,
	}
	export function CreateCancelMLTaskRunRequestFormGroup() {
		return new FormGroup<CancelMLTaskRunRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TaskRunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelStatementResponse {
	}
	export interface CancelStatementResponseFormProperties {
	}
	export function CreateCancelStatementResponseFormGroup() {
		return new FormGroup<CancelStatementResponseFormProperties>({
		});

	}

	export interface CancelStatementRequest {

		/** Required */
		SessionId: string;

		/** Required */
		Id: number;
		RequestOrigin?: string;
	}
	export interface CancelStatementRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<number | null | undefined>,
		RequestOrigin: FormControl<string | null | undefined>,
	}
	export function CreateCancelStatementRequestFormGroup() {
		return new FormGroup<CancelStatementRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RequestOrigin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IllegalSessionStateException {
	}
	export interface IllegalSessionStateExceptionFormProperties {
	}
	export function CreateIllegalSessionStateExceptionFormGroup() {
		return new FormGroup<IllegalSessionStateExceptionFormProperties>({
		});

	}

	export interface CheckSchemaVersionValidityResponse {
		Valid?: boolean | null;
		Error?: string;
	}
	export interface CheckSchemaVersionValidityResponseFormProperties {
		Valid: FormControl<boolean | null | undefined>,
		Error: FormControl<string | null | undefined>,
	}
	export function CreateCheckSchemaVersionValidityResponseFormGroup() {
		return new FormGroup<CheckSchemaVersionValidityResponseFormProperties>({
			Valid: new FormControl<boolean | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CheckSchemaVersionValidityInput {

		/** Required */
		DataFormat: DataFormat;

		/** Required */
		SchemaDefinition: string;
	}
	export interface CheckSchemaVersionValidityInputFormProperties {

		/** Required */
		DataFormat: FormControl<DataFormat | null | undefined>,

		/** Required */
		SchemaDefinition: FormControl<string | null | undefined>,
	}
	export function CreateCheckSchemaVersionValidityInputFormGroup() {
		return new FormGroup<CheckSchemaVersionValidityInputFormProperties>({
			DataFormat: new FormControl<DataFormat | null | undefined>(undefined, [Validators.required]),
			SchemaDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataFormat { AVRO = 'AVRO', JSON = 'JSON', PROTOBUF = 'PROTOBUF' }

	export interface CreateBlueprintResponse {
		Name?: string;
	}
	export interface CreateBlueprintResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateBlueprintResponseFormGroup() {
		return new FormGroup<CreateBlueprintResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBlueprintRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		BlueprintLocation: string;
		Tags?: TagsMap;
	}
	export interface CreateBlueprintRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		BlueprintLocation: FormControl<string | null | undefined>,
	}
	export function CreateCreateBlueprintRequestFormGroup() {
		return new FormGroup<CreateBlueprintRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			BlueprintLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateClassifierResponse {
	}
	export interface CreateClassifierResponseFormProperties {
	}
	export function CreateCreateClassifierResponseFormGroup() {
		return new FormGroup<CreateClassifierResponseFormProperties>({
		});

	}

	export interface CreateClassifierRequest {
		GrokClassifier?: CreateGrokClassifierRequest;
		XMLClassifier?: CreateXMLClassifierRequest;
		JsonClassifier?: CreateJsonClassifierRequest;
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

		/** Required */
		Name: string;

		/** Required */
		GrokPattern: string;
		CustomPatterns?: string;
	}

	/** Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create. */
	export interface CreateGrokClassifierRequestFormProperties {

		/** Required */
		Classification: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		GrokPattern: FormControl<string | null | undefined>,
		CustomPatterns: FormControl<string | null | undefined>,
	}
	export function CreateCreateGrokClassifierRequestFormGroup() {
		return new FormGroup<CreateGrokClassifierRequestFormProperties>({
			Classification: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GrokPattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CustomPatterns: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an XML classifier for <code>CreateClassifier</code> to create. */
	export interface CreateXMLClassifierRequest {

		/** Required */
		Classification: string;

		/** Required */
		Name: string;
		RowTag?: string;
	}

	/** Specifies an XML classifier for <code>CreateClassifier</code> to create. */
	export interface CreateXMLClassifierRequestFormProperties {

		/** Required */
		Classification: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		RowTag: FormControl<string | null | undefined>,
	}
	export function CreateCreateXMLClassifierRequestFormGroup() {
		return new FormGroup<CreateXMLClassifierRequestFormProperties>({
			Classification: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RowTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a JSON classifier for <code>CreateClassifier</code> to create. */
	export interface CreateJsonClassifierRequest {

		/** Required */
		Name: string;

		/** Required */
		JsonPath: string;
	}

	/** Specifies a JSON classifier for <code>CreateClassifier</code> to create. */
	export interface CreateJsonClassifierRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		JsonPath: FormControl<string | null | undefined>,
	}
	export function CreateCreateJsonClassifierRequestFormGroup() {
		return new FormGroup<CreateJsonClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JsonPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a custom CSV classifier for <code>CreateClassifier</code> to create. */
	export interface CreateCsvClassifierRequest {

		/** Required */
		Name: string;
		Delimiter?: string;
		QuoteSymbol?: string;
		ContainsHeader?: CsvHeaderOption;
		Header?: Array<string>;
		DisableValueTrimming?: boolean | null;
		AllowSingleColumn?: boolean | null;
		CustomDatatypeConfigured?: boolean | null;
		CustomDatatypes?: Array<string>;
	}

	/** Specifies a custom CSV classifier for <code>CreateClassifier</code> to create. */
	export interface CreateCsvClassifierRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Delimiter: FormControl<string | null | undefined>,
		QuoteSymbol: FormControl<string | null | undefined>,
		ContainsHeader: FormControl<CsvHeaderOption | null | undefined>,
		DisableValueTrimming: FormControl<boolean | null | undefined>,
		AllowSingleColumn: FormControl<boolean | null | undefined>,
		CustomDatatypeConfigured: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateCsvClassifierRequestFormGroup() {
		return new FormGroup<CreateCsvClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Delimiter: new FormControl<string | null | undefined>(undefined),
			QuoteSymbol: new FormControl<string | null | undefined>(undefined),
			ContainsHeader: new FormControl<CsvHeaderOption | null | undefined>(undefined),
			DisableValueTrimming: new FormControl<boolean | null | undefined>(undefined),
			AllowSingleColumn: new FormControl<boolean | null | undefined>(undefined),
			CustomDatatypeConfigured: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CsvHeaderOption { UNKNOWN = 'UNKNOWN', PRESENT = 'PRESENT', ABSENT = 'ABSENT' }

	export interface CreateConnectionResponse {
	}
	export interface CreateConnectionResponseFormProperties {
	}
	export function CreateCreateConnectionResponseFormGroup() {
		return new FormGroup<CreateConnectionResponseFormProperties>({
		});

	}

	export interface CreateConnectionRequest {
		CatalogId?: string;

		/** Required */
		ConnectionInput: ConnectionInput;
		Tags?: TagsMap;
	}
	export interface CreateConnectionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionRequestFormGroup() {
		return new FormGroup<CreateConnectionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that is used to specify a connection to create or update. */
	export interface ConnectionInput {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		ConnectionType: ConnectionType;
		MatchCriteria?: Array<string>;

		/** Required */
		ConnectionProperties: ConnectionProperties;
		PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
	}

	/** A structure that is used to specify a connection to create or update. */
	export interface ConnectionInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		ConnectionType: FormControl<ConnectionType | null | undefined>,
	}
	export function CreateConnectionInputFormGroup() {
		return new FormGroup<ConnectionInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<ConnectionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConnectionType { JDBC = 'JDBC', SFTP = 'SFTP', MONGODB = 'MONGODB', KAFKA = 'KAFKA', NETWORK = 'NETWORK', MARKETPLACE = 'MARKETPLACE', CUSTOM = 'CUSTOM' }

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
		SubnetId?: string;
		SecurityGroupIdList?: Array<string>;
		AvailabilityZone?: string;
	}

	/** Specifies the physical requirements for a connection. */
	export interface PhysicalConnectionRequirementsFormProperties {
		SubnetId: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreatePhysicalConnectionRequirementsFormGroup() {
		return new FormGroup<PhysicalConnectionRequirementsFormProperties>({
			SubnetId: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		Name: string;

		/** Required */
		Role: string;
		DatabaseName?: string;
		Description?: string;

		/** Required */
		Targets: CrawlerTargets;
		Schedule?: string;
		Classifiers?: Array<string>;
		TablePrefix?: string;
		SchemaChangePolicy?: SchemaChangePolicy;
		RecrawlPolicy?: RecrawlPolicy;
		LineageConfiguration?: LineageConfiguration;
		LakeFormationConfiguration?: LakeFormationConfiguration;
		Configuration?: string;
		CrawlerSecurityConfiguration?: string;
		Tags?: TagsMap;
	}
	export interface CreateCrawlerRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		TablePrefix: FormControl<string | null | undefined>,
		Configuration: FormControl<string | null | undefined>,
		CrawlerSecurityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateCreateCrawlerRequestFormGroup() {
		return new FormGroup<CreateCrawlerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
			TablePrefix: new FormControl<string | null | undefined>(undefined),
			Configuration: new FormControl<string | null | undefined>(undefined),
			CrawlerSecurityConfiguration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCustomEntityTypeResponse {
		Name?: string;
	}
	export interface CreateCustomEntityTypeResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomEntityTypeResponseFormGroup() {
		return new FormGroup<CreateCustomEntityTypeResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCustomEntityTypeRequest {

		/** Required */
		Name: string;

		/** Required */
		RegexString: string;
		ContextWords?: Array<string>;
		Tags?: TagsMap;
	}
	export interface CreateCustomEntityTypeRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RegexString: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomEntityTypeRequestFormGroup() {
		return new FormGroup<CreateCustomEntityTypeRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RegexString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateDataQualityRulesetResponse {
		Name?: string;
	}
	export interface CreateDataQualityRulesetResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataQualityRulesetResponseFormGroup() {
		return new FormGroup<CreateDataQualityRulesetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataQualityRulesetRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		Ruleset: string;
		Tags?: TagsMap;
		TargetTable?: DataQualityTargetTable;
		ClientToken?: string;
	}
	export interface CreateDataQualityRulesetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Ruleset: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataQualityRulesetRequestFormGroup() {
		return new FormGroup<CreateDataQualityRulesetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Ruleset: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing an Glue table. */
	export interface DataQualityTargetTable {

		/** Required */
		TableName: string;

		/** Required */
		DatabaseName: string;
		CatalogId?: string;
	}

	/** An object representing an Glue table. */
	export interface DataQualityTargetTableFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateDataQualityTargetTableFormGroup() {
		return new FormGroup<DataQualityTargetTableFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CatalogId: new FormControl<string | null | undefined>(undefined),
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
		CatalogId?: string;

		/** Required */
		DatabaseInput: DatabaseInput;
		Tags?: TagsMap;
	}
	export interface CreateDatabaseRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatabaseRequestFormGroup() {
		return new FormGroup<CreateDatabaseRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure used to create or update a database. */
	export interface DatabaseInput {

		/** Required */
		Name: string;
		Description?: string;
		LocationUri?: string;
		Parameters?: ParametersMap;
		CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
		TargetDatabase?: DatabaseIdentifier;
		FederatedDatabase?: FederatedDatabase;
	}

	/** The structure used to create or update a database. */
	export interface DatabaseInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseInputFormGroup() {
		return new FormGroup<DatabaseInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Permissions granted to a principal. */
	export interface PrincipalPermissions {
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


	/** The Lake Formation principal. */
	export interface DataLakePrincipal {
		DataLakePrincipalIdentifier?: string;
	}

	/** The Lake Formation principal. */
	export interface DataLakePrincipalFormProperties {
		DataLakePrincipalIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDataLakePrincipalFormGroup() {
		return new FormGroup<DataLakePrincipalFormProperties>({
			DataLakePrincipalIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Permission { ALL = 'ALL', SELECT = 'SELECT', ALTER = 'ALTER', DROP = 'DROP', DELETE = 'DELETE', INSERT = 'INSERT', CREATE_DATABASE = 'CREATE_DATABASE', CREATE_TABLE = 'CREATE_TABLE', DATA_LOCATION_ACCESS = 'DATA_LOCATION_ACCESS' }


	/** A structure that describes a target database for resource linking. */
	export interface DatabaseIdentifier {
		CatalogId?: string;
		DatabaseName?: string;
		Region?: string;
	}

	/** A structure that describes a target database for resource linking. */
	export interface DatabaseIdentifierFormProperties {
		CatalogId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseIdentifierFormGroup() {
		return new FormGroup<DatabaseIdentifierFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A database that points to an entity outside the Glue Data Catalog. */
	export interface FederatedDatabase {
		Identifier?: string;
		ConnectionName?: string;
	}

	/** A database that points to an entity outside the Glue Data Catalog. */
	export interface FederatedDatabaseFormProperties {
		Identifier: FormControl<string | null | undefined>,
		ConnectionName: FormControl<string | null | undefined>,
	}
	export function CreateFederatedDatabaseFormGroup() {
		return new FormGroup<FederatedDatabaseFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined),
			ConnectionName: new FormControl<string | null | undefined>(undefined),
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

	export interface FederatedResourceAlreadyExistsException {
	}
	export interface FederatedResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateFederatedResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<FederatedResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateDevEndpointResponse {
		EndpointName?: string;
		Status?: string;
		SecurityGroupIds?: Array<string>;
		SubnetId?: string;
		RoleArn?: string;
		YarnEndpointAddress?: string;
		ZeppelinRemoteSparkInterpreterPort?: number | null;
		NumberOfNodes?: number | null;
		WorkerType?: WorkerType;
		GlueVersion?: string;
		NumberOfWorkers?: number | null;
		AvailabilityZone?: string;
		VpcId?: string;
		ExtraPythonLibsS3Path?: string;
		ExtraJarsS3Path?: string;
		FailureReason?: string;
		SecurityConfiguration?: string;
		CreatedTimestamp?: Date;
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
		WorkerType: FormControl<WorkerType | null | undefined>,
		GlueVersion: FormControl<string | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		ExtraPythonLibsS3Path: FormControl<string | null | undefined>,
		ExtraJarsS3Path: FormControl<string | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		SecurityConfiguration: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCreateDevEndpointResponseFormGroup() {
		return new FormGroup<CreateDevEndpointResponseFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			YarnEndpointAddress: new FormControl<string | null | undefined>(undefined),
			ZeppelinRemoteSparkInterpreterPort: new FormControl<number | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<WorkerType | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			ExtraPythonLibsS3Path: new FormControl<string | null | undefined>(undefined),
			ExtraJarsS3Path: new FormControl<string | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateDevEndpointRequest {

		/** Required */
		EndpointName: string;

		/** Required */
		RoleArn: string;
		SecurityGroupIds?: Array<string>;
		SubnetId?: string;
		PublicKey?: string;
		PublicKeys?: Array<string>;
		NumberOfNodes?: number | null;
		WorkerType?: WorkerType;
		GlueVersion?: string;
		NumberOfWorkers?: number | null;
		ExtraPythonLibsS3Path?: string;
		ExtraJarsS3Path?: string;
		SecurityConfiguration?: string;
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
		WorkerType: FormControl<WorkerType | null | undefined>,
		GlueVersion: FormControl<string | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		ExtraPythonLibsS3Path: FormControl<string | null | undefined>,
		ExtraJarsS3Path: FormControl<string | null | undefined>,
		SecurityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateCreateDevEndpointRequestFormGroup() {
		return new FormGroup<CreateDevEndpointRequestFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			PublicKey: new FormControl<string | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<WorkerType | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			ExtraPythonLibsS3Path: new FormControl<string | null | undefined>(undefined),
			ExtraJarsS3Path: new FormControl<string | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
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
		Name?: string;
	}
	export interface CreateJobResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobResponseFormGroup() {
		return new FormGroup<CreateJobResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateJobRequest {

		/** Required */
		Name: string;
		Description?: string;
		LogUri?: string;

		/** Required */
		Role: string;
		ExecutionProperty?: ExecutionProperty;

		/** Required */
		Command: JobCommand;
		DefaultArguments?: GenericMap;
		NonOverridableArguments?: GenericMap;
		Connections?: ConnectionsList;
		MaxRetries?: number | null;
		AllocatedCapacity?: number | null;
		Timeout?: number | null;
		MaxCapacity?: number | null;
		SecurityConfiguration?: string;
		Tags?: TagsMap;
		NotificationProperty?: NotificationProperty;
		GlueVersion?: string;
		NumberOfWorkers?: number | null;
		WorkerType?: WorkerType;
		CodeGenConfigurationNodes?: CodeGenConfigurationNodes;
		ExecutionClass?: ExecutionClass;
		SourceControlDetails?: SourceControlDetails;
	}
	export interface CreateJobRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LogUri: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
		AllocatedCapacity: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		SecurityConfiguration: FormControl<string | null | undefined>,
		GlueVersion: FormControl<string | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		WorkerType: FormControl<WorkerType | null | undefined>,
		ExecutionClass: FormControl<ExecutionClass | null | undefined>,
	}
	export function CreateCreateJobRequestFormGroup() {
		return new FormGroup<CreateJobRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
			AllocatedCapacity: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<WorkerType | null | undefined>(undefined),
			ExecutionClass: new FormControl<ExecutionClass | null | undefined>(undefined),
		});

	}

	export interface CreateMLTransformResponse {
		TransformId?: string;
	}
	export interface CreateMLTransformResponseFormProperties {
		TransformId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMLTransformResponseFormGroup() {
		return new FormGroup<CreateMLTransformResponseFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMLTransformRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		InputRecordTables: Array<GlueTable>;

		/** Required */
		Parameters: TransformParameters;

		/** Required */
		Role: string;
		GlueVersion?: string;
		MaxCapacity?: number | null;
		WorkerType?: WorkerType;
		NumberOfWorkers?: number | null;
		Timeout?: number | null;
		MaxRetries?: number | null;
		Tags?: TagsMap;
		TransformEncryption?: TransformEncryption;
	}
	export interface CreateMLTransformRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,
		GlueVersion: FormControl<string | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<WorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
	}
	export function CreateCreateMLTransformRequestFormGroup() {
		return new FormGroup<CreateMLTransformRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<WorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The algorithm-specific parameters that are associated with the machine learning transform. */
	export interface TransformParameters {

		/** Required */
		TransformType: TransformType;
		FindMatchesParameters?: FindMatchesParameters;
	}

	/** The algorithm-specific parameters that are associated with the machine learning transform. */
	export interface TransformParametersFormProperties {

		/** Required */
		TransformType: FormControl<TransformType | null | undefined>,
	}
	export function CreateTransformParametersFormGroup() {
		return new FormGroup<TransformParametersFormProperties>({
			TransformType: new FormControl<TransformType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TransformType { FIND_MATCHES = 'FIND_MATCHES' }


	/** The parameters to configure the find matches transform. */
	export interface FindMatchesParameters {
		PrimaryKeyColumnName?: string;
		PrecisionRecallTradeoff?: number | null;
		AccuracyCostTradeoff?: number | null;
		EnforceProvidedLabels?: boolean | null;
	}

	/** The parameters to configure the find matches transform. */
	export interface FindMatchesParametersFormProperties {
		PrimaryKeyColumnName: FormControl<string | null | undefined>,
		PrecisionRecallTradeoff: FormControl<number | null | undefined>,
		AccuracyCostTradeoff: FormControl<number | null | undefined>,
		EnforceProvidedLabels: FormControl<boolean | null | undefined>,
	}
	export function CreateFindMatchesParametersFormGroup() {
		return new FormGroup<FindMatchesParametersFormProperties>({
			PrimaryKeyColumnName: new FormControl<string | null | undefined>(undefined),
			PrecisionRecallTradeoff: new FormControl<number | null | undefined>(undefined),
			AccuracyCostTradeoff: new FormControl<number | null | undefined>(undefined),
			EnforceProvidedLabels: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p> <p>Additionally, imported labels and trained transforms can now be encrypted using a customer provided KMS key.</p> */
	export interface TransformEncryption {
		MlUserDataEncryption?: MLUserDataEncryption;
		TaskRunSecurityConfigurationName?: string;
	}

	/** <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p> <p>Additionally, imported labels and trained transforms can now be encrypted using a customer provided KMS key.</p> */
	export interface TransformEncryptionFormProperties {
		TaskRunSecurityConfigurationName: FormControl<string | null | undefined>,
	}
	export function CreateTransformEncryptionFormGroup() {
		return new FormGroup<TransformEncryptionFormProperties>({
			TaskRunSecurityConfigurationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The encryption-at-rest settings of the transform that apply to accessing user data. */
	export interface MLUserDataEncryption {

		/** Required */
		MlUserDataEncryptionMode: MLUserDataEncryptionModeString;
		KmsKeyId?: string;
	}

	/** The encryption-at-rest settings of the transform that apply to accessing user data. */
	export interface MLUserDataEncryptionFormProperties {

		/** Required */
		MlUserDataEncryptionMode: FormControl<MLUserDataEncryptionModeString | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateMLUserDataEncryptionFormGroup() {
		return new FormGroup<MLUserDataEncryptionFormProperties>({
			MlUserDataEncryptionMode: new FormControl<MLUserDataEncryptionModeString | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MLUserDataEncryptionModeString { DISABLED = 'DISABLED', 'SSE-KMS' = 'SSE-KMS' }

	export interface CreatePartitionResponse {
	}
	export interface CreatePartitionResponseFormProperties {
	}
	export function CreateCreatePartitionResponseFormGroup() {
		return new FormGroup<CreatePartitionResponseFormProperties>({
		});

	}

	export interface CreatePartitionRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		PartitionInput: PartitionInput;
	}
	export interface CreatePartitionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateCreatePartitionRequestFormGroup() {
		return new FormGroup<CreatePartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePartitionIndexResponse {
	}
	export interface CreatePartitionIndexResponseFormProperties {
	}
	export function CreateCreatePartitionIndexResponseFormGroup() {
		return new FormGroup<CreatePartitionIndexResponseFormProperties>({
		});

	}

	export interface CreatePartitionIndexRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		PartitionIndex: PartitionIndex;
	}
	export interface CreatePartitionIndexRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateCreatePartitionIndexRequestFormGroup() {
		return new FormGroup<CreatePartitionIndexRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure for a partition index. */
	export interface PartitionIndex {

		/** Required */
		Keys: Array<string>;

		/** Required */
		IndexName: string;
	}

	/** A structure for a partition index. */
	export interface PartitionIndexFormProperties {

		/** Required */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreatePartitionIndexFormGroup() {
		return new FormGroup<PartitionIndexFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRegistryResponse {
		RegistryArn?: string;
		RegistryName?: string;
		Description?: string;
		Tags?: TagsMap;
	}
	export interface CreateRegistryResponseFormProperties {
		RegistryArn: FormControl<string | null | undefined>,
		RegistryName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateRegistryResponseFormGroup() {
		return new FormGroup<CreateRegistryResponseFormProperties>({
			RegistryArn: new FormControl<string | null | undefined>(undefined),
			RegistryName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRegistryInput {

		/** Required */
		RegistryName: string;
		Description?: string;
		Tags?: TagsMap;
	}
	export interface CreateRegistryInputFormProperties {

		/** Required */
		RegistryName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateRegistryInputFormGroup() {
		return new FormGroup<CreateRegistryInputFormProperties>({
			RegistryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSchemaResponse {
		RegistryName?: string;
		RegistryArn?: string;
		SchemaName?: string;
		SchemaArn?: string;
		Description?: string;
		DataFormat?: DataFormat;
		Compatibility?: Compatibility;
		SchemaCheckpoint?: number | null;
		LatestSchemaVersion?: number | null;
		NextSchemaVersion?: number | null;
		SchemaStatus?: SchemaStatus;
		Tags?: TagsMap;
		SchemaVersionId?: string;
		SchemaVersionStatus?: SchemaVersionStatus;
	}
	export interface CreateSchemaResponseFormProperties {
		RegistryName: FormControl<string | null | undefined>,
		RegistryArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		SchemaArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DataFormat: FormControl<DataFormat | null | undefined>,
		Compatibility: FormControl<Compatibility | null | undefined>,
		SchemaCheckpoint: FormControl<number | null | undefined>,
		LatestSchemaVersion: FormControl<number | null | undefined>,
		NextSchemaVersion: FormControl<number | null | undefined>,
		SchemaStatus: FormControl<SchemaStatus | null | undefined>,
		SchemaVersionId: FormControl<string | null | undefined>,
		SchemaVersionStatus: FormControl<SchemaVersionStatus | null | undefined>,
	}
	export function CreateCreateSchemaResponseFormGroup() {
		return new FormGroup<CreateSchemaResponseFormProperties>({
			RegistryName: new FormControl<string | null | undefined>(undefined),
			RegistryArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DataFormat: new FormControl<DataFormat | null | undefined>(undefined),
			Compatibility: new FormControl<Compatibility | null | undefined>(undefined),
			SchemaCheckpoint: new FormControl<number | null | undefined>(undefined),
			LatestSchemaVersion: new FormControl<number | null | undefined>(undefined),
			NextSchemaVersion: new FormControl<number | null | undefined>(undefined),
			SchemaStatus: new FormControl<SchemaStatus | null | undefined>(undefined),
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
			SchemaVersionStatus: new FormControl<SchemaVersionStatus | null | undefined>(undefined),
		});

	}

	export enum Compatibility { NONE = 'NONE', DISABLED = 'DISABLED', BACKWARD = 'BACKWARD', BACKWARD_ALL = 'BACKWARD_ALL', FORWARD = 'FORWARD', FORWARD_ALL = 'FORWARD_ALL', FULL = 'FULL', FULL_ALL = 'FULL_ALL' }

	export enum SchemaStatus { AVAILABLE = 'AVAILABLE', PENDING = 'PENDING', DELETING = 'DELETING' }

	export enum SchemaVersionStatus { AVAILABLE = 'AVAILABLE', PENDING = 'PENDING', FAILURE = 'FAILURE', DELETING = 'DELETING' }

	export interface CreateSchemaInput {
		RegistryId?: RegistryId;

		/** Required */
		SchemaName: string;

		/** Required */
		DataFormat: DataFormat;
		Compatibility?: Compatibility;
		Description?: string;
		Tags?: TagsMap;
		SchemaDefinition?: string;
	}
	export interface CreateSchemaInputFormProperties {

		/** Required */
		SchemaName: FormControl<string | null | undefined>,

		/** Required */
		DataFormat: FormControl<DataFormat | null | undefined>,
		Compatibility: FormControl<Compatibility | null | undefined>,
		Description: FormControl<string | null | undefined>,
		SchemaDefinition: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchemaInputFormGroup() {
		return new FormGroup<CreateSchemaInputFormProperties>({
			SchemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataFormat: new FormControl<DataFormat | null | undefined>(undefined, [Validators.required]),
			Compatibility: new FormControl<Compatibility | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			SchemaDefinition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A wrapper structure that may contain the registry name and Amazon Resource Name (ARN). */
	export interface RegistryId {
		RegistryName?: string;
		RegistryArn?: string;
	}

	/** A wrapper structure that may contain the registry name and Amazon Resource Name (ARN). */
	export interface RegistryIdFormProperties {
		RegistryName: FormControl<string | null | undefined>,
		RegistryArn: FormControl<string | null | undefined>,
	}
	export function CreateRegistryIdFormGroup() {
		return new FormGroup<RegistryIdFormProperties>({
			RegistryName: new FormControl<string | null | undefined>(undefined),
			RegistryArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateScriptResponse {
		PythonScript?: string;
		ScalaCode?: string;
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
		Language?: Language;
	}
	export interface CreateScriptRequestFormProperties {
		Language: FormControl<Language | null | undefined>,
	}
	export function CreateCreateScriptRequestFormGroup() {
		return new FormGroup<CreateScriptRequestFormProperties>({
			Language: new FormControl<Language | null | undefined>(undefined),
		});

	}


	/** Represents a node in a directed acyclic graph (DAG) */
	export interface CodeGenNode {

		/** Required */
		Id: string;

		/** Required */
		NodeType: string;

		/** Required */
		Args: Array<CodeGenNodeArg>;
		LineNumber?: number | null;
	}

	/** Represents a node in a directed acyclic graph (DAG) */
	export interface CodeGenNodeFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		NodeType: FormControl<string | null | undefined>,
		LineNumber: FormControl<number | null | undefined>,
	}
	export function CreateCodeGenNodeFormGroup() {
		return new FormGroup<CodeGenNodeFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Source: string;

		/** Required */
		Target: string;
		TargetParameter?: string;
	}

	/** Represents a directional edge in a directed acyclic graph (DAG). */
	export interface CodeGenEdgeFormProperties {

		/** Required */
		Source: FormControl<string | null | undefined>,

		/** Required */
		Target: FormControl<string | null | undefined>,
		TargetParameter: FormControl<string | null | undefined>,
	}
	export function CreateCodeGenEdgeFormGroup() {
		return new FormGroup<CodeGenEdgeFormProperties>({
			Source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetParameter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Language { PYTHON = 'PYTHON', SCALA = 'SCALA' }

	export interface CreateSecurityConfigurationResponse {
		Name?: string;
		CreatedTimestamp?: Date;
	}
	export interface CreateSecurityConfigurationResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCreateSecurityConfigurationResponseFormGroup() {
		return new FormGroup<CreateSecurityConfigurationResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateSecurityConfigurationRequest {

		/** Required */
		Name: string;

		/** Required */
		EncryptionConfiguration: EncryptionConfiguration;
	}
	export interface CreateSecurityConfigurationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSecurityConfigurationRequestFormGroup() {
		return new FormGroup<CreateSecurityConfigurationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies an encryption configuration. */
	export interface EncryptionConfiguration {
		S3Encryption?: Array<S3Encryption>;
		CloudWatchEncryption?: CloudWatchEncryption;
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
		S3EncryptionMode?: S3EncryptionMode;
		KmsKeyArn?: string;
	}

	/** Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted. */
	export interface S3EncryptionFormProperties {
		S3EncryptionMode: FormControl<S3EncryptionMode | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateS3EncryptionFormGroup() {
		return new FormGroup<S3EncryptionFormProperties>({
			S3EncryptionMode: new FormControl<S3EncryptionMode | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum S3EncryptionMode { DISABLED = 'DISABLED', 'SSE-KMS' = 'SSE-KMS', 'SSE-S3' = 'SSE-S3' }


	/** Specifies how Amazon CloudWatch data should be encrypted. */
	export interface CloudWatchEncryption {
		CloudWatchEncryptionMode?: MLUserDataEncryptionModeString;
		KmsKeyArn?: string;
	}

	/** Specifies how Amazon CloudWatch data should be encrypted. */
	export interface CloudWatchEncryptionFormProperties {
		CloudWatchEncryptionMode: FormControl<MLUserDataEncryptionModeString | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchEncryptionFormGroup() {
		return new FormGroup<CloudWatchEncryptionFormProperties>({
			CloudWatchEncryptionMode: new FormControl<MLUserDataEncryptionModeString | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies how job bookmark data should be encrypted. */
	export interface JobBookmarksEncryption {
		JobBookmarksEncryptionMode?: JobBookmarksEncryptionMode;
		KmsKeyArn?: string;
	}

	/** Specifies how job bookmark data should be encrypted. */
	export interface JobBookmarksEncryptionFormProperties {
		JobBookmarksEncryptionMode: FormControl<JobBookmarksEncryptionMode | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateJobBookmarksEncryptionFormGroup() {
		return new FormGroup<JobBookmarksEncryptionFormProperties>({
			JobBookmarksEncryptionMode: new FormControl<JobBookmarksEncryptionMode | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobBookmarksEncryptionMode { DISABLED = 'DISABLED', 'CSE-KMS' = 'CSE-KMS' }

	export interface CreateSessionResponse {
		Session?: Session;
	}
	export interface CreateSessionResponseFormProperties {
	}
	export function CreateCreateSessionResponseFormGroup() {
		return new FormGroup<CreateSessionResponseFormProperties>({
		});

	}


	/** The period in which a remote Spark runtime environment is running. */
	export interface Session {
		Id?: string;
		CreatedOn?: Date;
		Status?: SessionStatus;
		ErrorMessage?: string;
		Description?: string;
		Role?: string;
		Command?: SessionCommand;
		DefaultArguments?: OrchestrationArgumentsMap;
		Connections?: ConnectionsList;
		Progress?: number | null;
		MaxCapacity?: number | null;
		SecurityConfiguration?: string;
		GlueVersion?: string;
	}

	/** The period in which a remote Spark runtime environment is running. */
	export interface SessionFormProperties {
		Id: FormControl<string | null | undefined>,
		CreatedOn: FormControl<Date | null | undefined>,
		Status: FormControl<SessionStatus | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		Progress: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		SecurityConfiguration: FormControl<string | null | undefined>,
		GlueVersion: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<SessionStatus | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			Progress: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SessionStatus { PROVISIONING = 'PROVISIONING', READY = 'READY', FAILED = 'FAILED', TIMEOUT = 'TIMEOUT', STOPPING = 'STOPPING', STOPPED = 'STOPPED' }


	/** The <code>SessionCommand</code> that runs the job. */
	export interface SessionCommand {
		Name?: string;
		PythonVersion?: string;
	}

	/** The <code>SessionCommand</code> that runs the job. */
	export interface SessionCommandFormProperties {
		Name: FormControl<string | null | undefined>,
		PythonVersion: FormControl<string | null | undefined>,
	}
	export function CreateSessionCommandFormGroup() {
		return new FormGroup<SessionCommandFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			PythonVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrchestrationArgumentsMap {
	}
	export interface OrchestrationArgumentsMapFormProperties {
	}
	export function CreateOrchestrationArgumentsMapFormGroup() {
		return new FormGroup<OrchestrationArgumentsMapFormProperties>({
		});

	}


	/** Request to create a new session. */
	export interface CreateSessionRequest {

		/** Required */
		Id: string;
		Description?: string;

		/** Required */
		Role: string;

		/** Required */
		Command: SessionCommand;
		Timeout?: number | null;
		IdleTimeout?: number | null;
		DefaultArguments?: OrchestrationArgumentsMap;
		Connections?: ConnectionsList;
		MaxCapacity?: number | null;
		NumberOfWorkers?: number | null;
		WorkerType?: WorkerType;
		SecurityConfiguration?: string;
		GlueVersion?: string;
		Tags?: TagsMap;
		RequestOrigin?: string;
	}

	/** Request to create a new session. */
	export interface CreateSessionRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		IdleTimeout: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		WorkerType: FormControl<WorkerType | null | undefined>,
		SecurityConfiguration: FormControl<string | null | undefined>,
		GlueVersion: FormControl<string | null | undefined>,
		RequestOrigin: FormControl<string | null | undefined>,
	}
	export function CreateCreateSessionRequestFormGroup() {
		return new FormGroup<CreateSessionRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timeout: new FormControl<number | null | undefined>(undefined),
			IdleTimeout: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<WorkerType | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
			RequestOrigin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTableResponse {
	}
	export interface CreateTableResponseFormProperties {
	}
	export function CreateCreateTableResponseFormGroup() {
		return new FormGroup<CreateTableResponseFormProperties>({
		});

	}

	export interface CreateTableRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableInput: TableInput;
		PartitionIndexes?: Array<PartitionIndex>;
		TransactionId?: string;
		OpenTableFormatInput?: OpenTableFormatInput;
	}
	export interface CreateTableRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTableRequestFormGroup() {
		return new FormGroup<CreateTableRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TransactionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure used to define a table. */
	export interface TableInput {

		/** Required */
		Name: string;
		Description?: string;
		Owner?: string;
		LastAccessTime?: Date;
		LastAnalyzedTime?: Date;
		Retention?: number | null;
		StorageDescriptor?: StorageDescriptor;
		PartitionKeys?: Array<Column>;
		ViewOriginalText?: string;
		ViewExpandedText?: string;
		TableType?: string;
		Parameters?: ParametersMap;
		TargetTable?: TableIdentifier;
	}

	/** A structure used to define a table. */
	export interface TableInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		LastAccessTime: FormControl<Date | null | undefined>,
		LastAnalyzedTime: FormControl<Date | null | undefined>,
		Retention: FormControl<number | null | undefined>,
		ViewOriginalText: FormControl<string | null | undefined>,
		ViewExpandedText: FormControl<string | null | undefined>,
		TableType: FormControl<string | null | undefined>,
	}
	export function CreateTableInputFormGroup() {
		return new FormGroup<TableInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			LastAccessTime: new FormControl<Date | null | undefined>(undefined),
			LastAnalyzedTime: new FormControl<Date | null | undefined>(undefined),
			Retention: new FormControl<number | null | undefined>(undefined),
			ViewOriginalText: new FormControl<string | null | undefined>(undefined),
			ViewExpandedText: new FormControl<string | null | undefined>(undefined),
			TableType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that describes a target table for resource linking. */
	export interface TableIdentifier {
		CatalogId?: string;
		DatabaseName?: string;
		Name?: string;
		Region?: string;
	}

	/** A structure that describes a target table for resource linking. */
	export interface TableIdentifierFormProperties {
		CatalogId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateTableIdentifierFormGroup() {
		return new FormGroup<TableIdentifierFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure representing an open format table. */
	export interface OpenTableFormatInput {
		IcebergInput?: IcebergInput;
	}

	/** A structure representing an open format table. */
	export interface OpenTableFormatInputFormProperties {
	}
	export function CreateOpenTableFormatInputFormGroup() {
		return new FormGroup<OpenTableFormatInputFormProperties>({
		});

	}


	/** A structure that defines an Apache Iceberg metadata table to create in the catalog. */
	export interface IcebergInput {

		/** Required */
		MetadataOperation: MetadataOperation;
		Version?: string;
	}

	/** A structure that defines an Apache Iceberg metadata table to create in the catalog. */
	export interface IcebergInputFormProperties {

		/** Required */
		MetadataOperation: FormControl<MetadataOperation | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateIcebergInputFormGroup() {
		return new FormGroup<IcebergInputFormProperties>({
			MetadataOperation: new FormControl<MetadataOperation | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MetadataOperation { CREATE = 'CREATE' }

	export interface CreateTriggerResponse {
		Name?: string;
	}
	export interface CreateTriggerResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateTriggerResponseFormGroup() {
		return new FormGroup<CreateTriggerResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTriggerRequest {

		/** Required */
		Name: string;
		WorkflowName?: string;

		/** Required */
		Type: TriggerType;
		Schedule?: string;
		Predicate?: Predicate;

		/** Required */
		Actions: Array<Action>;
		Description?: string;
		StartOnCreation?: boolean | null;
		Tags?: TagsMap;
		EventBatchingCondition?: EventBatchingCondition;
	}
	export interface CreateTriggerRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		WorkflowName: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<TriggerType | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		StartOnCreation: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateTriggerRequestFormGroup() {
		return new FormGroup<CreateTriggerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkflowName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<TriggerType | null | undefined>(undefined, [Validators.required]),
			Schedule: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
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
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		FunctionInput: UserDefinedFunctionInput;
	}
	export interface CreateUserDefinedFunctionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserDefinedFunctionRequestFormGroup() {
		return new FormGroup<CreateUserDefinedFunctionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure used to create or update a user-defined function. */
	export interface UserDefinedFunctionInput {
		FunctionName?: string;
		ClassName?: string;
		OwnerName?: string;
		OwnerType?: PrincipalType;
		ResourceUris?: Array<ResourceUri>;
	}

	/** A structure used to create or update a user-defined function. */
	export interface UserDefinedFunctionInputFormProperties {
		FunctionName: FormControl<string | null | undefined>,
		ClassName: FormControl<string | null | undefined>,
		OwnerName: FormControl<string | null | undefined>,
		OwnerType: FormControl<PrincipalType | null | undefined>,
	}
	export function CreateUserDefinedFunctionInputFormGroup() {
		return new FormGroup<UserDefinedFunctionInputFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined),
			ClassName: new FormControl<string | null | undefined>(undefined),
			OwnerName: new FormControl<string | null | undefined>(undefined),
			OwnerType: new FormControl<PrincipalType | null | undefined>(undefined),
		});

	}

	export enum PrincipalType { USER = 'USER', ROLE = 'ROLE', GROUP = 'GROUP' }


	/** The URIs for function resources. */
	export interface ResourceUri {
		ResourceType?: ResourceType;
		Uri?: string;
	}

	/** The URIs for function resources. */
	export interface ResourceUriFormProperties {
		ResourceType: FormControl<ResourceType | null | undefined>,
		Uri: FormControl<string | null | undefined>,
	}
	export function CreateResourceUriFormGroup() {
		return new FormGroup<ResourceUriFormProperties>({
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			Uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceType { JAR = 'JAR', FILE = 'FILE', ARCHIVE = 'ARCHIVE' }

	export interface CreateWorkflowResponse {
		Name?: string;
	}
	export interface CreateWorkflowResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkflowResponseFormGroup() {
		return new FormGroup<CreateWorkflowResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorkflowRequest {

		/** Required */
		Name: string;
		Description?: string;
		DefaultRunProperties?: WorkflowRunProperties;
		Tags?: TagsMap;
		MaxConcurrentRuns?: number | null;
	}
	export interface CreateWorkflowRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		MaxConcurrentRuns: FormControl<number | null | undefined>,
	}
	export function CreateCreateWorkflowRequestFormGroup() {
		return new FormGroup<CreateWorkflowRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			MaxConcurrentRuns: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteBlueprintResponse {
		Name?: string;
	}
	export interface DeleteBlueprintResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBlueprintResponseFormGroup() {
		return new FormGroup<DeleteBlueprintResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBlueprintRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteBlueprintRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBlueprintRequestFormGroup() {
		return new FormGroup<DeleteBlueprintRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;
	}
	export interface DeleteClassifierRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteClassifierRequestFormGroup() {
		return new FormGroup<DeleteClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteColumnStatisticsForPartitionResponse {
	}
	export interface DeleteColumnStatisticsForPartitionResponseFormProperties {
	}
	export function CreateDeleteColumnStatisticsForPartitionResponseFormGroup() {
		return new FormGroup<DeleteColumnStatisticsForPartitionResponseFormProperties>({
		});

	}

	export interface DeleteColumnStatisticsForPartitionRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		PartitionValues: Array<string>;

		/** Required */
		ColumnName: string;
	}
	export interface DeleteColumnStatisticsForPartitionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		ColumnName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteColumnStatisticsForPartitionRequestFormGroup() {
		return new FormGroup<DeleteColumnStatisticsForPartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteColumnStatisticsForTableResponse {
	}
	export interface DeleteColumnStatisticsForTableResponseFormProperties {
	}
	export function CreateDeleteColumnStatisticsForTableResponseFormGroup() {
		return new FormGroup<DeleteColumnStatisticsForTableResponseFormProperties>({
		});

	}

	export interface DeleteColumnStatisticsForTableRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		ColumnName: string;
	}
	export interface DeleteColumnStatisticsForTableRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		ColumnName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteColumnStatisticsForTableRequestFormGroup() {
		return new FormGroup<DeleteColumnStatisticsForTableRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		CatalogId?: string;

		/** Required */
		ConnectionName: string;
	}
	export interface DeleteConnectionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		ConnectionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConnectionRequestFormGroup() {
		return new FormGroup<DeleteConnectionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			ConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;
	}
	export interface DeleteCrawlerRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCrawlerRequestFormGroup() {
		return new FormGroup<DeleteCrawlerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteCustomEntityTypeResponse {
		Name?: string;
	}
	export interface DeleteCustomEntityTypeResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomEntityTypeResponseFormGroup() {
		return new FormGroup<DeleteCustomEntityTypeResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteCustomEntityTypeRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteCustomEntityTypeRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomEntityTypeRequestFormGroup() {
		return new FormGroup<DeleteCustomEntityTypeRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDataQualityRulesetResponse {
	}
	export interface DeleteDataQualityRulesetResponseFormProperties {
	}
	export function CreateDeleteDataQualityRulesetResponseFormGroup() {
		return new FormGroup<DeleteDataQualityRulesetResponseFormProperties>({
		});

	}

	export interface DeleteDataQualityRulesetRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteDataQualityRulesetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataQualityRulesetRequestFormGroup() {
		return new FormGroup<DeleteDataQualityRulesetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		CatalogId?: string;

		/** Required */
		Name: string;
	}
	export interface DeleteDatabaseRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatabaseRequestFormGroup() {
		return new FormGroup<DeleteDatabaseRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		JobName?: string;
	}
	export interface DeleteJobResponseFormProperties {
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteJobResponseFormGroup() {
		return new FormGroup<DeleteJobResponseFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteJobRequest {

		/** Required */
		JobName: string;
	}
	export interface DeleteJobRequestFormProperties {

		/** Required */
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteJobRequestFormGroup() {
		return new FormGroup<DeleteJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMLTransformResponse {
		TransformId?: string;
	}
	export interface DeleteMLTransformResponseFormProperties {
		TransformId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMLTransformResponseFormGroup() {
		return new FormGroup<DeleteMLTransformResponseFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteMLTransformRequest {

		/** Required */
		TransformId: string;
	}
	export interface DeleteMLTransformRequestFormProperties {

		/** Required */
		TransformId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMLTransformRequestFormGroup() {
		return new FormGroup<DeleteMLTransformRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		PartitionValues: Array<string>;
	}
	export interface DeletePartitionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDeletePartitionRequestFormGroup() {
		return new FormGroup<DeletePartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePartitionIndexResponse {
	}
	export interface DeletePartitionIndexResponseFormProperties {
	}
	export function CreateDeletePartitionIndexResponseFormGroup() {
		return new FormGroup<DeletePartitionIndexResponseFormProperties>({
		});

	}

	export interface DeletePartitionIndexRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		IndexName: string;
	}
	export interface DeletePartitionIndexRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateDeletePartitionIndexRequestFormGroup() {
		return new FormGroup<DeletePartitionIndexRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteRegistryResponse {
		RegistryName?: string;
		RegistryArn?: string;
		Status?: RegistryStatus;
	}
	export interface DeleteRegistryResponseFormProperties {
		RegistryName: FormControl<string | null | undefined>,
		RegistryArn: FormControl<string | null | undefined>,
		Status: FormControl<RegistryStatus | null | undefined>,
	}
	export function CreateDeleteRegistryResponseFormGroup() {
		return new FormGroup<DeleteRegistryResponseFormProperties>({
			RegistryName: new FormControl<string | null | undefined>(undefined),
			RegistryArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RegistryStatus | null | undefined>(undefined),
		});

	}

	export enum RegistryStatus { AVAILABLE = 'AVAILABLE', DELETING = 'DELETING' }

	export interface DeleteRegistryInput {

		/** Required */
		RegistryId: RegistryId;
	}
	export interface DeleteRegistryInputFormProperties {
	}
	export function CreateDeleteRegistryInputFormGroup() {
		return new FormGroup<DeleteRegistryInputFormProperties>({
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
		PolicyHashCondition?: string;
		ResourceArn?: string;
	}
	export interface DeleteResourcePolicyRequestFormProperties {
		PolicyHashCondition: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
			PolicyHashCondition: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
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

	export interface DeleteSchemaResponse {
		SchemaArn?: string;
		SchemaName?: string;
		Status?: SchemaStatus;
	}
	export interface DeleteSchemaResponseFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		Status: FormControl<SchemaStatus | null | undefined>,
	}
	export function CreateDeleteSchemaResponseFormGroup() {
		return new FormGroup<DeleteSchemaResponseFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<SchemaStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteSchemaInput {

		/** Required */
		SchemaId: SchemaId;
	}
	export interface DeleteSchemaInputFormProperties {
	}
	export function CreateDeleteSchemaInputFormGroup() {
		return new FormGroup<DeleteSchemaInputFormProperties>({
		});

	}

	export interface DeleteSchemaVersionsResponse {
		SchemaVersionErrors?: Array<SchemaVersionErrorItem>;
	}
	export interface DeleteSchemaVersionsResponseFormProperties {
	}
	export function CreateDeleteSchemaVersionsResponseFormGroup() {
		return new FormGroup<DeleteSchemaVersionsResponseFormProperties>({
		});

	}


	/** An object that contains the error details for an operation on a schema version. */
	export interface SchemaVersionErrorItem {
		VersionNumber?: number | null;
		ErrorDetails?: ErrorDetails;
	}

	/** An object that contains the error details for an operation on a schema version. */
	export interface SchemaVersionErrorItemFormProperties {
		VersionNumber: FormControl<number | null | undefined>,
	}
	export function CreateSchemaVersionErrorItemFormGroup() {
		return new FormGroup<SchemaVersionErrorItemFormProperties>({
			VersionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object containing error details. */
	export interface ErrorDetails {
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** An object containing error details. */
	export interface ErrorDetailsFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSchemaVersionsInput {

		/** Required */
		SchemaId: SchemaId;

		/** Required */
		Versions: string;
	}
	export interface DeleteSchemaVersionsInputFormProperties {

		/** Required */
		Versions: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSchemaVersionsInputFormGroup() {
		return new FormGroup<DeleteSchemaVersionsInputFormProperties>({
			Versions: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;
	}
	export interface DeleteSecurityConfigurationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSecurityConfigurationRequestFormGroup() {
		return new FormGroup<DeleteSecurityConfigurationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSessionResponse {
		Id?: string;
	}
	export interface DeleteSessionResponseFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSessionResponseFormGroup() {
		return new FormGroup<DeleteSessionResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSessionRequest {

		/** Required */
		Id: string;
		RequestOrigin?: string;
	}
	export interface DeleteSessionRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		RequestOrigin: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSessionRequestFormGroup() {
		return new FormGroup<DeleteSessionRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequestOrigin: new FormControl<string | null | undefined>(undefined),
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
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		Name: string;
		TransactionId?: string;
	}
	export interface DeleteTableRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTableRequestFormGroup() {
		return new FormGroup<DeleteTableRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TransactionId: new FormControl<string | null | undefined>(undefined),
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
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		VersionId: string;
	}
	export interface DeleteTableVersionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTableVersionRequestFormGroup() {
		return new FormGroup<DeleteTableVersionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTriggerResponse {
		Name?: string;
	}
	export interface DeleteTriggerResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTriggerResponseFormGroup() {
		return new FormGroup<DeleteTriggerResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteTriggerRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteTriggerRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTriggerRequestFormGroup() {
		return new FormGroup<DeleteTriggerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		FunctionName: string;
	}
	export interface DeleteUserDefinedFunctionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		FunctionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserDefinedFunctionRequestFormGroup() {
		return new FormGroup<DeleteUserDefinedFunctionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWorkflowResponse {
		Name?: string;
	}
	export interface DeleteWorkflowResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkflowResponseFormGroup() {
		return new FormGroup<DeleteWorkflowResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteWorkflowRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteWorkflowRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkflowRequestFormGroup() {
		return new FormGroup<DeleteWorkflowRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBlueprintResponse {
		Blueprint?: Blueprint;
	}
	export interface GetBlueprintResponseFormProperties {
	}
	export function CreateGetBlueprintResponseFormGroup() {
		return new FormGroup<GetBlueprintResponseFormProperties>({
		});

	}

	export interface GetBlueprintRequest {

		/** Required */
		Name: string;
		IncludeBlueprint?: boolean | null;
		IncludeParameterSpec?: boolean | null;
	}
	export interface GetBlueprintRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		IncludeBlueprint: FormControl<boolean | null | undefined>,
		IncludeParameterSpec: FormControl<boolean | null | undefined>,
	}
	export function CreateGetBlueprintRequestFormGroup() {
		return new FormGroup<GetBlueprintRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IncludeBlueprint: new FormControl<boolean | null | undefined>(undefined),
			IncludeParameterSpec: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetBlueprintRunResponse {
		BlueprintRun?: BlueprintRun;
	}
	export interface GetBlueprintRunResponseFormProperties {
	}
	export function CreateGetBlueprintRunResponseFormGroup() {
		return new FormGroup<GetBlueprintRunResponseFormProperties>({
		});

	}


	/** The details of a blueprint run. */
	export interface BlueprintRun {
		BlueprintName?: string;
		RunId?: string;
		WorkflowName?: string;
		State?: BlueprintRunState;
		StartedOn?: Date;
		CompletedOn?: Date;
		ErrorMessage?: string;
		RollbackErrorMessage?: string;
		Parameters?: string;
		RoleArn?: string;
	}

	/** The details of a blueprint run. */
	export interface BlueprintRunFormProperties {
		BlueprintName: FormControl<string | null | undefined>,
		RunId: FormControl<string | null | undefined>,
		WorkflowName: FormControl<string | null | undefined>,
		State: FormControl<BlueprintRunState | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		RollbackErrorMessage: FormControl<string | null | undefined>,
		Parameters: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateBlueprintRunFormGroup() {
		return new FormGroup<BlueprintRunFormProperties>({
			BlueprintName: new FormControl<string | null | undefined>(undefined),
			RunId: new FormControl<string | null | undefined>(undefined),
			WorkflowName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<BlueprintRunState | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			RollbackErrorMessage: new FormControl<string | null | undefined>(undefined),
			Parameters: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BlueprintRunState { RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', ROLLING_BACK = 'ROLLING_BACK' }

	export interface GetBlueprintRunRequest {

		/** Required */
		BlueprintName: string;

		/** Required */
		RunId: string;
	}
	export interface GetBlueprintRunRequestFormProperties {

		/** Required */
		BlueprintName: FormControl<string | null | undefined>,

		/** Required */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateGetBlueprintRunRequestFormGroup() {
		return new FormGroup<GetBlueprintRunRequestFormProperties>({
			BlueprintName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBlueprintRunsResponse {
		BlueprintRuns?: Array<BlueprintRun>;
		NextToken?: string;
	}
	export interface GetBlueprintRunsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBlueprintRunsResponseFormGroup() {
		return new FormGroup<GetBlueprintRunsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBlueprintRunsRequest {

		/** Required */
		BlueprintName: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetBlueprintRunsRequestFormProperties {

		/** Required */
		BlueprintName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetBlueprintRunsRequestFormGroup() {
		return new FormGroup<GetBlueprintRunsRequestFormProperties>({
			BlueprintName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetCatalogImportStatusResponse {
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
		ImportTime?: Date;
		ImportedBy?: string;
	}

	/** A structure containing migration status information. */
	export interface CatalogImportStatusFormProperties {
		ImportCompleted: FormControl<boolean | null | undefined>,
		ImportTime: FormControl<Date | null | undefined>,
		ImportedBy: FormControl<string | null | undefined>,
	}
	export function CreateCatalogImportStatusFormGroup() {
		return new FormGroup<CatalogImportStatusFormProperties>({
			ImportCompleted: new FormControl<boolean | null | undefined>(undefined),
			ImportTime: new FormControl<Date | null | undefined>(undefined),
			ImportedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCatalogImportStatusRequest {
		CatalogId?: string;
	}
	export interface GetCatalogImportStatusRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateGetCatalogImportStatusRequestFormGroup() {
		return new FormGroup<GetCatalogImportStatusRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetClassifierResponse {
		Classifier?: Classifier;
	}
	export interface GetClassifierResponseFormProperties {
	}
	export function CreateGetClassifierResponseFormGroup() {
		return new FormGroup<GetClassifierResponseFormProperties>({
		});

	}


	/** <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p> */
	export interface Classifier {
		GrokClassifier?: GrokClassifier;
		XMLClassifier?: XMLClassifier;
		JsonClassifier?: JsonClassifier;
		CsvClassifier?: CsvClassifier;
	}

	/** <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p> */
	export interface ClassifierFormProperties {
	}
	export function CreateClassifierFormGroup() {
		return new FormGroup<ClassifierFormProperties>({
		});

	}


	/** A classifier that uses <code>grok</code> patterns. */
	export interface GrokClassifier {

		/** Required */
		Name: string;

		/** Required */
		Classification: string;
		CreationTime?: Date;
		LastUpdated?: Date;
		Version?: number | null;

		/** Required */
		GrokPattern: string;
		CustomPatterns?: string;
	}

	/** A classifier that uses <code>grok</code> patterns. */
	export interface GrokClassifierFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Classification: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		Version: FormControl<number | null | undefined>,

		/** Required */
		GrokPattern: FormControl<string | null | undefined>,
		CustomPatterns: FormControl<string | null | undefined>,
	}
	export function CreateGrokClassifierFormGroup() {
		return new FormGroup<GrokClassifierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Classification: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			GrokPattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CustomPatterns: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A classifier for <code>XML</code> content. */
	export interface XMLClassifier {

		/** Required */
		Name: string;

		/** Required */
		Classification: string;
		CreationTime?: Date;
		LastUpdated?: Date;
		Version?: number | null;
		RowTag?: string;
	}

	/** A classifier for <code>XML</code> content. */
	export interface XMLClassifierFormProperties {

		/** Required */
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
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Classification: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			RowTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A classifier for <code>JSON</code> content. */
	export interface JsonClassifier {

		/** Required */
		Name: string;
		CreationTime?: Date;
		LastUpdated?: Date;
		Version?: number | null;

		/** Required */
		JsonPath: string;
	}

	/** A classifier for <code>JSON</code> content. */
	export interface JsonClassifierFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		Version: FormControl<number | null | undefined>,

		/** Required */
		JsonPath: FormControl<string | null | undefined>,
	}
	export function CreateJsonClassifierFormGroup() {
		return new FormGroup<JsonClassifierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			JsonPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A classifier for custom <code>CSV</code> content. */
	export interface CsvClassifier {

		/** Required */
		Name: string;
		CreationTime?: Date;
		LastUpdated?: Date;
		Version?: number | null;
		Delimiter?: string;
		QuoteSymbol?: string;
		ContainsHeader?: CsvHeaderOption;
		Header?: Array<string>;
		DisableValueTrimming?: boolean | null;
		AllowSingleColumn?: boolean | null;
		CustomDatatypeConfigured?: boolean | null;
		CustomDatatypes?: Array<string>;
	}

	/** A classifier for custom <code>CSV</code> content. */
	export interface CsvClassifierFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		Version: FormControl<number | null | undefined>,
		Delimiter: FormControl<string | null | undefined>,
		QuoteSymbol: FormControl<string | null | undefined>,
		ContainsHeader: FormControl<CsvHeaderOption | null | undefined>,
		DisableValueTrimming: FormControl<boolean | null | undefined>,
		AllowSingleColumn: FormControl<boolean | null | undefined>,
		CustomDatatypeConfigured: FormControl<boolean | null | undefined>,
	}
	export function CreateCsvClassifierFormGroup() {
		return new FormGroup<CsvClassifierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			Delimiter: new FormControl<string | null | undefined>(undefined),
			QuoteSymbol: new FormControl<string | null | undefined>(undefined),
			ContainsHeader: new FormControl<CsvHeaderOption | null | undefined>(undefined),
			DisableValueTrimming: new FormControl<boolean | null | undefined>(undefined),
			AllowSingleColumn: new FormControl<boolean | null | undefined>(undefined),
			CustomDatatypeConfigured: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetClassifierRequest {

		/** Required */
		Name: string;
	}
	export interface GetClassifierRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetClassifierRequestFormGroup() {
		return new FormGroup<GetClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetClassifiersResponse {
		Classifiers?: Array<Classifier>;
		NextToken?: string;
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
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetClassifiersRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetClassifiersRequestFormGroup() {
		return new FormGroup<GetClassifiersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetColumnStatisticsForPartitionResponse {
		ColumnStatisticsList?: Array<ColumnStatistics>;
		Errors?: Array<ColumnError>;
	}
	export interface GetColumnStatisticsForPartitionResponseFormProperties {
	}
	export function CreateGetColumnStatisticsForPartitionResponseFormGroup() {
		return new FormGroup<GetColumnStatisticsForPartitionResponseFormProperties>({
		});

	}


	/** Represents the generated column-level statistics for a table or partition. */
	export interface ColumnStatistics {

		/** Required */
		ColumnName: string;

		/** Required */
		ColumnType: string;

		/** Required */
		AnalyzedTime: Date;

		/** Required */
		StatisticsData: ColumnStatisticsData;
	}

	/** Represents the generated column-level statistics for a table or partition. */
	export interface ColumnStatisticsFormProperties {

		/** Required */
		ColumnName: FormControl<string | null | undefined>,

		/** Required */
		ColumnType: FormControl<string | null | undefined>,

		/** Required */
		AnalyzedTime: FormControl<Date | null | undefined>,
	}
	export function CreateColumnStatisticsFormGroup() {
		return new FormGroup<ColumnStatisticsFormProperties>({
			ColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ColumnType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AnalyzedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute. */
	export interface ColumnStatisticsData {

		/** Required */
		Type: ColumnStatisticsType;
		BooleanColumnStatisticsData?: BooleanColumnStatisticsData;
		DateColumnStatisticsData?: DateColumnStatisticsData;
		DecimalColumnStatisticsData?: DecimalColumnStatisticsData;
		DoubleColumnStatisticsData?: DoubleColumnStatisticsData;
		LongColumnStatisticsData?: LongColumnStatisticsData;
		StringColumnStatisticsData?: StringColumnStatisticsData;
		BinaryColumnStatisticsData?: BinaryColumnStatisticsData;
	}

	/** Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute. */
	export interface ColumnStatisticsDataFormProperties {

		/** Required */
		Type: FormControl<ColumnStatisticsType | null | undefined>,
	}
	export function CreateColumnStatisticsDataFormGroup() {
		return new FormGroup<ColumnStatisticsDataFormProperties>({
			Type: new FormControl<ColumnStatisticsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ColumnStatisticsType { BOOLEAN = 'BOOLEAN', DATE = 'DATE', DECIMAL = 'DECIMAL', DOUBLE = 'DOUBLE', LONG = 'LONG', STRING = 'STRING', BINARY = 'BINARY' }


	/** Defines column statistics supported for Boolean data columns. */
	export interface BooleanColumnStatisticsData {

		/** Required */
		NumberOfTrues: number;

		/** Required */
		NumberOfFalses: number;

		/** Required */
		NumberOfNulls: number;
	}

	/** Defines column statistics supported for Boolean data columns. */
	export interface BooleanColumnStatisticsDataFormProperties {

		/** Required */
		NumberOfTrues: FormControl<number | null | undefined>,

		/** Required */
		NumberOfFalses: FormControl<number | null | undefined>,

		/** Required */
		NumberOfNulls: FormControl<number | null | undefined>,
	}
	export function CreateBooleanColumnStatisticsDataFormGroup() {
		return new FormGroup<BooleanColumnStatisticsDataFormProperties>({
			NumberOfTrues: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NumberOfFalses: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NumberOfNulls: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines column statistics supported for timestamp data columns. */
	export interface DateColumnStatisticsData {
		MinimumValue?: Date;
		MaximumValue?: Date;

		/** Required */
		NumberOfNulls: number;

		/** Required */
		NumberOfDistinctValues: number;
	}

	/** Defines column statistics supported for timestamp data columns. */
	export interface DateColumnStatisticsDataFormProperties {
		MinimumValue: FormControl<Date | null | undefined>,
		MaximumValue: FormControl<Date | null | undefined>,

		/** Required */
		NumberOfNulls: FormControl<number | null | undefined>,

		/** Required */
		NumberOfDistinctValues: FormControl<number | null | undefined>,
	}
	export function CreateDateColumnStatisticsDataFormGroup() {
		return new FormGroup<DateColumnStatisticsDataFormProperties>({
			MinimumValue: new FormControl<Date | null | undefined>(undefined),
			MaximumValue: new FormControl<Date | null | undefined>(undefined),
			NumberOfNulls: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NumberOfDistinctValues: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines column statistics supported for fixed-point number data columns. */
	export interface DecimalColumnStatisticsData {
		MinimumValue?: DecimalNumber;
		MaximumValue?: DecimalNumber;

		/** Required */
		NumberOfNulls: number;

		/** Required */
		NumberOfDistinctValues: number;
	}

	/** Defines column statistics supported for fixed-point number data columns. */
	export interface DecimalColumnStatisticsDataFormProperties {

		/** Required */
		NumberOfNulls: FormControl<number | null | undefined>,

		/** Required */
		NumberOfDistinctValues: FormControl<number | null | undefined>,
	}
	export function CreateDecimalColumnStatisticsDataFormGroup() {
		return new FormGroup<DecimalColumnStatisticsDataFormProperties>({
			NumberOfNulls: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NumberOfDistinctValues: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains a numeric value in decimal format. */
	export interface DecimalNumber {

		/** Required */
		UnscaledValue: string;

		/** Required */
		Scale: number;
	}

	/** Contains a numeric value in decimal format. */
	export interface DecimalNumberFormProperties {

		/** Required */
		UnscaledValue: FormControl<string | null | undefined>,

		/** Required */
		Scale: FormControl<number | null | undefined>,
	}
	export function CreateDecimalNumberFormGroup() {
		return new FormGroup<DecimalNumberFormProperties>({
			UnscaledValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scale: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines column statistics supported for floating-point number data columns. */
	export interface DoubleColumnStatisticsData {
		MinimumValue?: number | null;
		MaximumValue?: number | null;

		/** Required */
		NumberOfNulls: number;

		/** Required */
		NumberOfDistinctValues: number;
	}

	/** Defines column statistics supported for floating-point number data columns. */
	export interface DoubleColumnStatisticsDataFormProperties {
		MinimumValue: FormControl<number | null | undefined>,
		MaximumValue: FormControl<number | null | undefined>,

		/** Required */
		NumberOfNulls: FormControl<number | null | undefined>,

		/** Required */
		NumberOfDistinctValues: FormControl<number | null | undefined>,
	}
	export function CreateDoubleColumnStatisticsDataFormGroup() {
		return new FormGroup<DoubleColumnStatisticsDataFormProperties>({
			MinimumValue: new FormControl<number | null | undefined>(undefined),
			MaximumValue: new FormControl<number | null | undefined>(undefined),
			NumberOfNulls: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NumberOfDistinctValues: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines column statistics supported for integer data columns. */
	export interface LongColumnStatisticsData {
		MinimumValue?: number | null;
		MaximumValue?: number | null;

		/** Required */
		NumberOfNulls: number;

		/** Required */
		NumberOfDistinctValues: number;
	}

	/** Defines column statistics supported for integer data columns. */
	export interface LongColumnStatisticsDataFormProperties {
		MinimumValue: FormControl<number | null | undefined>,
		MaximumValue: FormControl<number | null | undefined>,

		/** Required */
		NumberOfNulls: FormControl<number | null | undefined>,

		/** Required */
		NumberOfDistinctValues: FormControl<number | null | undefined>,
	}
	export function CreateLongColumnStatisticsDataFormGroup() {
		return new FormGroup<LongColumnStatisticsDataFormProperties>({
			MinimumValue: new FormControl<number | null | undefined>(undefined),
			MaximumValue: new FormControl<number | null | undefined>(undefined),
			NumberOfNulls: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NumberOfDistinctValues: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines column statistics supported for character sequence data values. */
	export interface StringColumnStatisticsData {

		/** Required */
		MaximumLength: number;

		/** Required */
		AverageLength: number;

		/** Required */
		NumberOfNulls: number;

		/** Required */
		NumberOfDistinctValues: number;
	}

	/** Defines column statistics supported for character sequence data values. */
	export interface StringColumnStatisticsDataFormProperties {

		/** Required */
		MaximumLength: FormControl<number | null | undefined>,

		/** Required */
		AverageLength: FormControl<number | null | undefined>,

		/** Required */
		NumberOfNulls: FormControl<number | null | undefined>,

		/** Required */
		NumberOfDistinctValues: FormControl<number | null | undefined>,
	}
	export function CreateStringColumnStatisticsDataFormGroup() {
		return new FormGroup<StringColumnStatisticsDataFormProperties>({
			MaximumLength: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			AverageLength: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NumberOfNulls: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NumberOfDistinctValues: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines column statistics supported for bit sequence data values. */
	export interface BinaryColumnStatisticsData {

		/** Required */
		MaximumLength: number;

		/** Required */
		AverageLength: number;

		/** Required */
		NumberOfNulls: number;
	}

	/** Defines column statistics supported for bit sequence data values. */
	export interface BinaryColumnStatisticsDataFormProperties {

		/** Required */
		MaximumLength: FormControl<number | null | undefined>,

		/** Required */
		AverageLength: FormControl<number | null | undefined>,

		/** Required */
		NumberOfNulls: FormControl<number | null | undefined>,
	}
	export function CreateBinaryColumnStatisticsDataFormGroup() {
		return new FormGroup<BinaryColumnStatisticsDataFormProperties>({
			MaximumLength: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			AverageLength: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NumberOfNulls: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Encapsulates a column name that failed and the reason for failure. */
	export interface ColumnError {
		ColumnName?: string;
		Error?: ErrorDetail;
	}

	/** Encapsulates a column name that failed and the reason for failure. */
	export interface ColumnErrorFormProperties {
		ColumnName: FormControl<string | null | undefined>,
	}
	export function CreateColumnErrorFormGroup() {
		return new FormGroup<ColumnErrorFormProperties>({
			ColumnName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetColumnStatisticsForPartitionRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		PartitionValues: Array<string>;

		/** Required */
		ColumnNames: Array<string>;
	}
	export interface GetColumnStatisticsForPartitionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateGetColumnStatisticsForPartitionRequestFormGroup() {
		return new FormGroup<GetColumnStatisticsForPartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetColumnStatisticsForTableResponse {
		ColumnStatisticsList?: Array<ColumnStatistics>;
		Errors?: Array<ColumnError>;
	}
	export interface GetColumnStatisticsForTableResponseFormProperties {
	}
	export function CreateGetColumnStatisticsForTableResponseFormGroup() {
		return new FormGroup<GetColumnStatisticsForTableResponseFormProperties>({
		});

	}

	export interface GetColumnStatisticsForTableRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		ColumnNames: Array<string>;
	}
	export interface GetColumnStatisticsForTableRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateGetColumnStatisticsForTableRequestFormGroup() {
		return new FormGroup<GetColumnStatisticsForTableRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConnectionResponse {
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
		Name?: string;
		Description?: string;
		ConnectionType?: ConnectionType;
		MatchCriteria?: Array<string>;
		ConnectionProperties?: ConnectionProperties;
		PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
		LastUpdatedBy?: string;
	}

	/** Defines a connection to a data source. */
	export interface ConnectionFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ConnectionType: FormControl<ConnectionType | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		LastUpdatedBy: FormControl<string | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<ConnectionType | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConnectionRequest {
		CatalogId?: string;

		/** Required */
		Name: string;
		HidePassword?: boolean | null;
	}
	export interface GetConnectionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		HidePassword: FormControl<boolean | null | undefined>,
	}
	export function CreateGetConnectionRequestFormGroup() {
		return new FormGroup<GetConnectionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HidePassword: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetConnectionsResponse {
		ConnectionList?: Array<Connection>;
		NextToken?: string;
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
		CatalogId?: string;
		Filter?: GetConnectionsFilter;
		HidePassword?: boolean | null;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetConnectionsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
		HidePassword: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetConnectionsRequestFormGroup() {
		return new FormGroup<GetConnectionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			HidePassword: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Filters the connection definitions that are returned by the <code>GetConnections</code> API operation. */
	export interface GetConnectionsFilter {
		MatchCriteria?: Array<string>;
		ConnectionType?: ConnectionType;
	}

	/** Filters the connection definitions that are returned by the <code>GetConnections</code> API operation. */
	export interface GetConnectionsFilterFormProperties {
		ConnectionType: FormControl<ConnectionType | null | undefined>,
	}
	export function CreateGetConnectionsFilterFormGroup() {
		return new FormGroup<GetConnectionsFilterFormProperties>({
			ConnectionType: new FormControl<ConnectionType | null | undefined>(undefined),
		});

	}

	export interface GetCrawlerResponse {
		Crawler?: Crawler;
	}
	export interface GetCrawlerResponseFormProperties {
	}
	export function CreateGetCrawlerResponseFormGroup() {
		return new FormGroup<GetCrawlerResponseFormProperties>({
		});

	}

	export interface GetCrawlerRequest {

		/** Required */
		Name: string;
	}
	export interface GetCrawlerRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetCrawlerRequestFormGroup() {
		return new FormGroup<GetCrawlerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCrawlerMetricsResponse {
		CrawlerMetricsList?: Array<CrawlerMetrics>;
		NextToken?: string;
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
		CrawlerName?: string;
		TimeLeftSeconds?: number | null;
		StillEstimating?: boolean | null;
		LastRuntimeSeconds?: number | null;
		MedianRuntimeSeconds?: number | null;
		TablesCreated?: number | null;
		TablesUpdated?: number | null;
		TablesDeleted?: number | null;
	}

	/** Metrics for a specified crawler. */
	export interface CrawlerMetricsFormProperties {
		CrawlerName: FormControl<string | null | undefined>,
		TimeLeftSeconds: FormControl<number | null | undefined>,
		StillEstimating: FormControl<boolean | null | undefined>,
		LastRuntimeSeconds: FormControl<number | null | undefined>,
		MedianRuntimeSeconds: FormControl<number | null | undefined>,
		TablesCreated: FormControl<number | null | undefined>,
		TablesUpdated: FormControl<number | null | undefined>,
		TablesDeleted: FormControl<number | null | undefined>,
	}
	export function CreateCrawlerMetricsFormGroup() {
		return new FormGroup<CrawlerMetricsFormProperties>({
			CrawlerName: new FormControl<string | null | undefined>(undefined),
			TimeLeftSeconds: new FormControl<number | null | undefined>(undefined),
			StillEstimating: new FormControl<boolean | null | undefined>(undefined),
			LastRuntimeSeconds: new FormControl<number | null | undefined>(undefined),
			MedianRuntimeSeconds: new FormControl<number | null | undefined>(undefined),
			TablesCreated: new FormControl<number | null | undefined>(undefined),
			TablesUpdated: new FormControl<number | null | undefined>(undefined),
			TablesDeleted: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetCrawlerMetricsRequest {
		CrawlerNameList?: Array<string>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetCrawlerMetricsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCrawlerMetricsRequestFormGroup() {
		return new FormGroup<GetCrawlerMetricsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCrawlersResponse {
		Crawlers?: Array<Crawler>;
		NextToken?: string;
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
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetCrawlersRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCrawlersRequestFormGroup() {
		return new FormGroup<GetCrawlersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCustomEntityTypeResponse {
		Name?: string;
		RegexString?: string;
		ContextWords?: Array<string>;
	}
	export interface GetCustomEntityTypeResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		RegexString: FormControl<string | null | undefined>,
	}
	export function CreateGetCustomEntityTypeResponseFormGroup() {
		return new FormGroup<GetCustomEntityTypeResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			RegexString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCustomEntityTypeRequest {

		/** Required */
		Name: string;
	}
	export interface GetCustomEntityTypeRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetCustomEntityTypeRequestFormGroup() {
		return new FormGroup<GetCustomEntityTypeRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDataCatalogEncryptionSettingsResponse {
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
		EncryptionAtRest?: EncryptionAtRest;
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
		CatalogEncryptionMode: MLUserDataEncryptionModeString;
		SseAwsKmsKeyId?: string;
	}

	/** Specifies the encryption-at-rest configuration for the Data Catalog. */
	export interface EncryptionAtRestFormProperties {

		/** Required */
		CatalogEncryptionMode: FormControl<MLUserDataEncryptionModeString | null | undefined>,
		SseAwsKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionAtRestFormGroup() {
		return new FormGroup<EncryptionAtRestFormProperties>({
			CatalogEncryptionMode: new FormControl<MLUserDataEncryptionModeString | null | undefined>(undefined, [Validators.required]),
			SseAwsKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The data structure used by the Data Catalog to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p> <p>When a <code>CreationConnection</code> request arrives containing a password, the Data Catalog first encrypts the password using your KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.</p> <p>This encryption requires that you set KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.</p> */
	export interface ConnectionPasswordEncryption {

		/** Required */
		ReturnConnectionPasswordEncrypted: boolean;
		AwsKmsKeyId?: string;
	}

	/** <p>The data structure used by the Data Catalog to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p> <p>When a <code>CreationConnection</code> request arrives containing a password, the Data Catalog first encrypts the password using your KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.</p> <p>This encryption requires that you set KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.</p> */
	export interface ConnectionPasswordEncryptionFormProperties {

		/** Required */
		ReturnConnectionPasswordEncrypted: FormControl<boolean | null | undefined>,
		AwsKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateConnectionPasswordEncryptionFormGroup() {
		return new FormGroup<ConnectionPasswordEncryptionFormProperties>({
			ReturnConnectionPasswordEncrypted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			AwsKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDataCatalogEncryptionSettingsRequest {
		CatalogId?: string;
	}
	export interface GetDataCatalogEncryptionSettingsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateGetDataCatalogEncryptionSettingsRequestFormGroup() {
		return new FormGroup<GetDataCatalogEncryptionSettingsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDataQualityResultResponse {
		ResultId?: string;
		Score?: number | null;
		DataSource?: DataSource;
		RulesetName?: string;
		EvaluationContext?: string;
		StartedOn?: Date;
		CompletedOn?: Date;
		JobName?: string;
		JobRunId?: string;
		RulesetEvaluationRunId?: string;
		RuleResults?: Array<DataQualityRuleResult>;
	}
	export interface GetDataQualityResultResponseFormProperties {
		ResultId: FormControl<string | null | undefined>,
		Score: FormControl<number | null | undefined>,
		RulesetName: FormControl<string | null | undefined>,
		EvaluationContext: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobRunId: FormControl<string | null | undefined>,
		RulesetEvaluationRunId: FormControl<string | null | undefined>,
	}
	export function CreateGetDataQualityResultResponseFormGroup() {
		return new FormGroup<GetDataQualityResultResponseFormProperties>({
			ResultId: new FormControl<string | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			RulesetName: new FormControl<string | null | undefined>(undefined),
			EvaluationContext: new FormControl<string | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobRunId: new FormControl<string | null | undefined>(undefined),
			RulesetEvaluationRunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDataQualityResultRequest {

		/** Required */
		ResultId: string;
	}
	export interface GetDataQualityResultRequestFormProperties {

		/** Required */
		ResultId: FormControl<string | null | undefined>,
	}
	export function CreateGetDataQualityResultRequestFormGroup() {
		return new FormGroup<GetDataQualityResultRequestFormProperties>({
			ResultId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDataQualityRuleRecommendationRunResponse {
		RunId?: string;
		DataSource?: DataSource;
		Role?: string;
		NumberOfWorkers?: number | null;
		Timeout?: number | null;
		Status?: TaskStatusType;
		ErrorString?: string;
		StartedOn?: Date;
		LastModifiedOn?: Date;
		CompletedOn?: Date;
		ExecutionTime?: number | null;
		RecommendedRuleset?: string;
		CreatedRulesetName?: string;
	}
	export interface GetDataQualityRuleRecommendationRunResponseFormProperties {
		RunId: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		Status: FormControl<TaskStatusType | null | undefined>,
		ErrorString: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		ExecutionTime: FormControl<number | null | undefined>,
		RecommendedRuleset: FormControl<string | null | undefined>,
		CreatedRulesetName: FormControl<string | null | undefined>,
	}
	export function CreateGetDataQualityRuleRecommendationRunResponseFormGroup() {
		return new FormGroup<GetDataQualityRuleRecommendationRunResponseFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<TaskStatusType | null | undefined>(undefined),
			ErrorString: new FormControl<string | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			ExecutionTime: new FormControl<number | null | undefined>(undefined),
			RecommendedRuleset: new FormControl<string | null | undefined>(undefined),
			CreatedRulesetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDataQualityRuleRecommendationRunRequest {

		/** Required */
		RunId: string;
	}
	export interface GetDataQualityRuleRecommendationRunRequestFormProperties {

		/** Required */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateGetDataQualityRuleRecommendationRunRequestFormGroup() {
		return new FormGroup<GetDataQualityRuleRecommendationRunRequestFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDataQualityRulesetResponse {
		Name?: string;
		Description?: string;
		Ruleset?: string;
		TargetTable?: DataQualityTargetTable;
		CreatedOn?: Date;
		LastModifiedOn?: Date;
		RecommendationRunId?: string;
	}
	export interface GetDataQualityRulesetResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Ruleset: FormControl<string | null | undefined>,
		CreatedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		RecommendationRunId: FormControl<string | null | undefined>,
	}
	export function CreateGetDataQualityRulesetResponseFormGroup() {
		return new FormGroup<GetDataQualityRulesetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Ruleset: new FormControl<string | null | undefined>(undefined),
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			RecommendationRunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDataQualityRulesetRequest {

		/** Required */
		Name: string;
	}
	export interface GetDataQualityRulesetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetDataQualityRulesetRequestFormGroup() {
		return new FormGroup<GetDataQualityRulesetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDataQualityRulesetEvaluationRunResponse {
		RunId?: string;
		DataSource?: DataSource;
		Role?: string;
		NumberOfWorkers?: number | null;
		Timeout?: number | null;
		AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions;
		Status?: TaskStatusType;
		ErrorString?: string;
		StartedOn?: Date;
		LastModifiedOn?: Date;
		CompletedOn?: Date;
		ExecutionTime?: number | null;
		RulesetNames?: Array<string>;
		ResultIds?: Array<string>;
		AdditionalDataSources?: DataSourceMap;
	}
	export interface GetDataQualityRulesetEvaluationRunResponseFormProperties {
		RunId: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		Status: FormControl<TaskStatusType | null | undefined>,
		ErrorString: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		ExecutionTime: FormControl<number | null | undefined>,
	}
	export function CreateGetDataQualityRulesetEvaluationRunResponseFormGroup() {
		return new FormGroup<GetDataQualityRulesetEvaluationRunResponseFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<TaskStatusType | null | undefined>(undefined),
			ErrorString: new FormControl<string | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			ExecutionTime: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional run options you can specify for an evaluation run. */
	export interface DataQualityEvaluationRunAdditionalRunOptions {
		CloudWatchMetricsEnabled?: boolean | null;
		ResultsS3Prefix?: string;
	}

	/** Additional run options you can specify for an evaluation run. */
	export interface DataQualityEvaluationRunAdditionalRunOptionsFormProperties {
		CloudWatchMetricsEnabled: FormControl<boolean | null | undefined>,
		ResultsS3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateDataQualityEvaluationRunAdditionalRunOptionsFormGroup() {
		return new FormGroup<DataQualityEvaluationRunAdditionalRunOptionsFormProperties>({
			CloudWatchMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			ResultsS3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataSourceMap {
	}
	export interface DataSourceMapFormProperties {
	}
	export function CreateDataSourceMapFormGroup() {
		return new FormGroup<DataSourceMapFormProperties>({
		});

	}

	export interface GetDataQualityRulesetEvaluationRunRequest {

		/** Required */
		RunId: string;
	}
	export interface GetDataQualityRulesetEvaluationRunRequestFormProperties {

		/** Required */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateGetDataQualityRulesetEvaluationRunRequestFormGroup() {
		return new FormGroup<GetDataQualityRulesetEvaluationRunRequestFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDatabaseResponse {
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

		/** Required */
		Name: string;
		Description?: string;
		LocationUri?: string;
		Parameters?: ParametersMap;
		CreateTime?: Date;
		CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
		TargetDatabase?: DatabaseIdentifier;
		CatalogId?: string;
		FederatedDatabase?: FederatedDatabase;
	}

	/** The <code>Database</code> object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS. */
	export interface DatabaseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDatabaseRequest {
		CatalogId?: string;

		/** Required */
		Name: string;
	}
	export interface GetDatabaseRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetDatabaseRequestFormGroup() {
		return new FormGroup<GetDatabaseRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDatabasesResponse {

		/** Required */
		DatabaseList: Array<Database>;
		NextToken?: string;
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
		CatalogId?: string;
		NextToken?: string;
		MaxResults?: number | null;
		ResourceShareType?: ResourceShareType;
	}
	export interface GetDatabasesRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		ResourceShareType: FormControl<ResourceShareType | null | undefined>,
	}
	export function CreateGetDatabasesRequestFormGroup() {
		return new FormGroup<GetDatabasesRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			ResourceShareType: new FormControl<ResourceShareType | null | undefined>(undefined),
		});

	}

	export enum ResourceShareType { FOREIGN = 'FOREIGN', ALL = 'ALL', FEDERATED = 'FEDERATED' }

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
		PythonScript?: string;
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
		NextToken?: string;
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
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetDevEndpointsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDevEndpointsRequestFormGroup() {
		return new FormGroup<GetDevEndpointsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetJobResponse {
		Job?: Job;
	}
	export interface GetJobResponseFormProperties {
	}
	export function CreateGetJobResponseFormGroup() {
		return new FormGroup<GetJobResponseFormProperties>({
		});

	}

	export interface GetJobRequest {

		/** Required */
		JobName: string;
	}
	export interface GetJobRequestFormProperties {

		/** Required */
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateGetJobRequestFormGroup() {
		return new FormGroup<GetJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetJobBookmarkResponse {
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
		JobName?: string;
		Version?: number | null;
		Run?: number | null;
		Attempt?: number | null;
		PreviousRunId?: string;
		RunId?: string;
		JobBookmark?: string;
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
		RunId?: string;
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
		JobRun?: JobRun;
	}
	export interface GetJobRunResponseFormProperties {
	}
	export function CreateGetJobRunResponseFormGroup() {
		return new FormGroup<GetJobRunResponseFormProperties>({
		});

	}

	export interface GetJobRunRequest {

		/** Required */
		JobName: string;

		/** Required */
		RunId: string;
		PredecessorsIncluded?: boolean | null;
	}
	export interface GetJobRunRequestFormProperties {

		/** Required */
		JobName: FormControl<string | null | undefined>,

		/** Required */
		RunId: FormControl<string | null | undefined>,
		PredecessorsIncluded: FormControl<boolean | null | undefined>,
	}
	export function CreateGetJobRunRequestFormGroup() {
		return new FormGroup<GetJobRunRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PredecessorsIncluded: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetJobRunsResponse {
		JobRuns?: Array<JobRun>;
		NextToken?: string;
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

		/** Required */
		JobName: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetJobRunsRequestFormProperties {

		/** Required */
		JobName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetJobRunsRequestFormGroup() {
		return new FormGroup<GetJobRunsRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetJobsResponse {
		Jobs?: Array<Job>;
		NextToken?: string;
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
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetJobsRequestFormGroup() {
		return new FormGroup<GetJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMLTaskRunResponse {
		TransformId?: string;
		TaskRunId?: string;
		Status?: TaskStatusType;
		LogGroupName?: string;
		Properties?: TaskRunProperties;
		ErrorString?: string;
		StartedOn?: Date;
		LastModifiedOn?: Date;
		CompletedOn?: Date;
		ExecutionTime?: number | null;
	}
	export interface GetMLTaskRunResponseFormProperties {
		TransformId: FormControl<string | null | undefined>,
		TaskRunId: FormControl<string | null | undefined>,
		Status: FormControl<TaskStatusType | null | undefined>,
		LogGroupName: FormControl<string | null | undefined>,
		ErrorString: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		ExecutionTime: FormControl<number | null | undefined>,
	}
	export function CreateGetMLTaskRunResponseFormGroup() {
		return new FormGroup<GetMLTaskRunResponseFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined),
			TaskRunId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskStatusType | null | undefined>(undefined),
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
		TaskType?: TaskType;
		ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;
		ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;
		LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;
		FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties;
	}

	/** The configuration properties for the task run. */
	export interface TaskRunPropertiesFormProperties {
		TaskType: FormControl<TaskType | null | undefined>,
	}
	export function CreateTaskRunPropertiesFormGroup() {
		return new FormGroup<TaskRunPropertiesFormProperties>({
			TaskType: new FormControl<TaskType | null | undefined>(undefined),
		});

	}

	export enum TaskType { EVALUATION = 'EVALUATION', LABELING_SET_GENERATION = 'LABELING_SET_GENERATION', IMPORT_LABELS = 'IMPORT_LABELS', EXPORT_LABELS = 'EXPORT_LABELS', FIND_MATCHES = 'FIND_MATCHES' }


	/** Specifies configuration properties for an importing labels task run. */
	export interface ImportLabelsTaskRunProperties {
		InputS3Path?: string;
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
		OutputS3Path?: string;
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
		OutputS3Path?: string;
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
		JobId?: string;
		JobName?: string;
		JobRunId?: string;
	}

	/** Specifies configuration properties for a Find Matches task run. */
	export interface FindMatchesTaskRunPropertiesFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobRunId: FormControl<string | null | undefined>,
	}
	export function CreateFindMatchesTaskRunPropertiesFormGroup() {
		return new FormGroup<FindMatchesTaskRunPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobRunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMLTaskRunRequest {

		/** Required */
		TransformId: string;

		/** Required */
		TaskRunId: string;
	}
	export interface GetMLTaskRunRequestFormProperties {

		/** Required */
		TransformId: FormControl<string | null | undefined>,

		/** Required */
		TaskRunId: FormControl<string | null | undefined>,
	}
	export function CreateGetMLTaskRunRequestFormGroup() {
		return new FormGroup<GetMLTaskRunRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TaskRunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMLTaskRunsResponse {
		TaskRuns?: Array<TaskRun>;
		NextToken?: string;
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
		TransformId?: string;
		TaskRunId?: string;
		Status?: TaskStatusType;
		LogGroupName?: string;
		Properties?: TaskRunProperties;
		ErrorString?: string;
		StartedOn?: Date;
		LastModifiedOn?: Date;
		CompletedOn?: Date;
		ExecutionTime?: number | null;
	}

	/** The sampling parameters that are associated with the machine learning transform. */
	export interface TaskRunFormProperties {
		TransformId: FormControl<string | null | undefined>,
		TaskRunId: FormControl<string | null | undefined>,
		Status: FormControl<TaskStatusType | null | undefined>,
		LogGroupName: FormControl<string | null | undefined>,
		ErrorString: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		ExecutionTime: FormControl<number | null | undefined>,
	}
	export function CreateTaskRunFormGroup() {
		return new FormGroup<TaskRunFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined),
			TaskRunId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskStatusType | null | undefined>(undefined),
			LogGroupName: new FormControl<string | null | undefined>(undefined),
			ErrorString: new FormControl<string | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			ExecutionTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMLTaskRunsRequest {

		/** Required */
		TransformId: string;
		NextToken?: string;
		MaxResults?: number | null;
		Filter?: TaskRunFilterCriteria;
		Sort?: TaskRunSortCriteria;
	}
	export interface GetMLTaskRunsRequestFormProperties {

		/** Required */
		TransformId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetMLTaskRunsRequestFormGroup() {
		return new FormGroup<GetMLTaskRunsRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The criteria that are used to filter the task runs for the machine learning transform. */
	export interface TaskRunFilterCriteria {
		TaskRunType?: TaskType;
		Status?: TaskStatusType;
		StartedBefore?: Date;
		StartedAfter?: Date;
	}

	/** The criteria that are used to filter the task runs for the machine learning transform. */
	export interface TaskRunFilterCriteriaFormProperties {
		TaskRunType: FormControl<TaskType | null | undefined>,
		Status: FormControl<TaskStatusType | null | undefined>,
		StartedBefore: FormControl<Date | null | undefined>,
		StartedAfter: FormControl<Date | null | undefined>,
	}
	export function CreateTaskRunFilterCriteriaFormGroup() {
		return new FormGroup<TaskRunFilterCriteriaFormProperties>({
			TaskRunType: new FormControl<TaskType | null | undefined>(undefined),
			Status: new FormControl<TaskStatusType | null | undefined>(undefined),
			StartedBefore: new FormControl<Date | null | undefined>(undefined),
			StartedAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The sorting criteria that are used to sort the list of task runs for the machine learning transform. */
	export interface TaskRunSortCriteria {

		/** Required */
		Column: TaskRunSortColumnType;

		/** Required */
		SortDirection: SortDirectionType;
	}

	/** The sorting criteria that are used to sort the list of task runs for the machine learning transform. */
	export interface TaskRunSortCriteriaFormProperties {

		/** Required */
		Column: FormControl<TaskRunSortColumnType | null | undefined>,

		/** Required */
		SortDirection: FormControl<SortDirectionType | null | undefined>,
	}
	export function CreateTaskRunSortCriteriaFormGroup() {
		return new FormGroup<TaskRunSortCriteriaFormProperties>({
			Column: new FormControl<TaskRunSortColumnType | null | undefined>(undefined, [Validators.required]),
			SortDirection: new FormControl<SortDirectionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TaskRunSortColumnType { TASK_RUN_TYPE = 'TASK_RUN_TYPE', STATUS = 'STATUS', STARTED = 'STARTED' }

	export enum SortDirectionType { DESCENDING = 'DESCENDING', ASCENDING = 'ASCENDING' }

	export interface GetMLTransformResponse {
		TransformId?: string;
		Name?: string;
		Description?: string;
		Status?: TransformStatusType;
		CreatedOn?: Date;
		LastModifiedOn?: Date;
		InputRecordTables?: Array<GlueTable>;
		Parameters?: TransformParameters;
		EvaluationMetrics?: EvaluationMetrics;
		LabelCount?: number | null;
		Schema?: Array<SchemaColumn>;
		Role?: string;
		GlueVersion?: string;
		MaxCapacity?: number | null;
		WorkerType?: WorkerType;
		NumberOfWorkers?: number | null;
		Timeout?: number | null;
		MaxRetries?: number | null;
		TransformEncryption?: TransformEncryption;
	}
	export interface GetMLTransformResponseFormProperties {
		TransformId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<TransformStatusType | null | undefined>,
		CreatedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		LabelCount: FormControl<number | null | undefined>,
		Role: FormControl<string | null | undefined>,
		GlueVersion: FormControl<string | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<WorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
	}
	export function CreateGetMLTransformResponseFormGroup() {
		return new FormGroup<GetMLTransformResponseFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TransformStatusType | null | undefined>(undefined),
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			LabelCount: new FormControl<number | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<WorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TransformStatusType { NOT_READY = 'NOT_READY', READY = 'READY', DELETING = 'DELETING' }


	/** Evaluation metrics provide an estimate of the quality of your machine learning transform. */
	export interface EvaluationMetrics {

		/** Required */
		TransformType: TransformType;
		FindMatchesMetrics?: FindMatchesMetrics;
	}

	/** Evaluation metrics provide an estimate of the quality of your machine learning transform. */
	export interface EvaluationMetricsFormProperties {

		/** Required */
		TransformType: FormControl<TransformType | null | undefined>,
	}
	export function CreateEvaluationMetricsFormGroup() {
		return new FormGroup<EvaluationMetricsFormProperties>({
			TransformType: new FormControl<TransformType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise. */
	export interface FindMatchesMetrics {
		AreaUnderPRCurve?: number | null;
		Precision?: number | null;
		Recall?: number | null;
		F1?: number | null;
		ConfusionMatrix?: ConfusionMatrix;
		ColumnImportances?: Array<ColumnImportance>;
	}

	/** The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise. */
	export interface FindMatchesMetricsFormProperties {
		AreaUnderPRCurve: FormControl<number | null | undefined>,
		Precision: FormControl<number | null | undefined>,
		Recall: FormControl<number | null | undefined>,
		F1: FormControl<number | null | undefined>,
	}
	export function CreateFindMatchesMetricsFormGroup() {
		return new FormGroup<FindMatchesMetricsFormProperties>({
			AreaUnderPRCurve: new FormControl<number | null | undefined>(undefined),
			Precision: new FormControl<number | null | undefined>(undefined),
			Recall: new FormControl<number | null | undefined>(undefined),
			F1: new FormControl<number | null | undefined>(undefined),
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


	/** <p>A structure containing the column name and column importance score for a column. </p> <p>Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.</p> */
	export interface ColumnImportance {
		ColumnName?: string;
		Importance?: number | null;
	}

	/** <p>A structure containing the column name and column importance score for a column. </p> <p>Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.</p> */
	export interface ColumnImportanceFormProperties {
		ColumnName: FormControl<string | null | undefined>,
		Importance: FormControl<number | null | undefined>,
	}
	export function CreateColumnImportanceFormGroup() {
		return new FormGroup<ColumnImportanceFormProperties>({
			ColumnName: new FormControl<string | null | undefined>(undefined),
			Importance: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A key-value pair representing a column and data type that this transform can run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures. */
	export interface SchemaColumn {
		Name?: string;
		DataType?: string;
	}

	/** A key-value pair representing a column and data type that this transform can run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures. */
	export interface SchemaColumnFormProperties {
		Name: FormControl<string | null | undefined>,
		DataType: FormControl<string | null | undefined>,
	}
	export function CreateSchemaColumnFormGroup() {
		return new FormGroup<SchemaColumnFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMLTransformRequest {

		/** Required */
		TransformId: string;
	}
	export interface GetMLTransformRequestFormProperties {

		/** Required */
		TransformId: FormControl<string | null | undefined>,
	}
	export function CreateGetMLTransformRequestFormGroup() {
		return new FormGroup<GetMLTransformRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMLTransformsResponse {

		/** Required */
		Transforms: Array<MLTransform>;
		NextToken?: string;
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
		TransformId?: string;
		Name?: string;
		Description?: string;
		Status?: TransformStatusType;
		CreatedOn?: Date;
		LastModifiedOn?: Date;
		InputRecordTables?: Array<GlueTable>;
		Parameters?: TransformParameters;
		EvaluationMetrics?: EvaluationMetrics;
		LabelCount?: number | null;
		Schema?: Array<SchemaColumn>;
		Role?: string;
		GlueVersion?: string;
		MaxCapacity?: number | null;
		WorkerType?: WorkerType;
		NumberOfWorkers?: number | null;
		Timeout?: number | null;
		MaxRetries?: number | null;
		TransformEncryption?: TransformEncryption;
	}

	/** A structure for a machine learning transform. */
	export interface MLTransformFormProperties {
		TransformId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<TransformStatusType | null | undefined>,
		CreatedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		LabelCount: FormControl<number | null | undefined>,
		Role: FormControl<string | null | undefined>,
		GlueVersion: FormControl<string | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<WorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
	}
	export function CreateMLTransformFormGroup() {
		return new FormGroup<MLTransformFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TransformStatusType | null | undefined>(undefined),
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			LabelCount: new FormControl<number | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<WorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMLTransformsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filter?: TransformFilterCriteria;
		Sort?: TransformSortCriteria;
	}
	export interface GetMLTransformsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetMLTransformsRequestFormGroup() {
		return new FormGroup<GetMLTransformsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The criteria used to filter the machine learning transforms. */
	export interface TransformFilterCriteria {
		Name?: string;
		TransformType?: TransformType;
		Status?: TransformStatusType;
		GlueVersion?: string;
		CreatedBefore?: Date;
		CreatedAfter?: Date;
		LastModifiedBefore?: Date;
		LastModifiedAfter?: Date;
		Schema?: Array<SchemaColumn>;
	}

	/** The criteria used to filter the machine learning transforms. */
	export interface TransformFilterCriteriaFormProperties {
		Name: FormControl<string | null | undefined>,
		TransformType: FormControl<TransformType | null | undefined>,
		Status: FormControl<TransformStatusType | null | undefined>,
		GlueVersion: FormControl<string | null | undefined>,
		CreatedBefore: FormControl<Date | null | undefined>,
		CreatedAfter: FormControl<Date | null | undefined>,
		LastModifiedBefore: FormControl<Date | null | undefined>,
		LastModifiedAfter: FormControl<Date | null | undefined>,
	}
	export function CreateTransformFilterCriteriaFormGroup() {
		return new FormGroup<TransformFilterCriteriaFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			TransformType: new FormControl<TransformType | null | undefined>(undefined),
			Status: new FormControl<TransformStatusType | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
			CreatedBefore: new FormControl<Date | null | undefined>(undefined),
			CreatedAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The sorting criteria that are associated with the machine learning transform. */
	export interface TransformSortCriteria {

		/** Required */
		Column: TransformSortColumnType;

		/** Required */
		SortDirection: SortDirectionType;
	}

	/** The sorting criteria that are associated with the machine learning transform. */
	export interface TransformSortCriteriaFormProperties {

		/** Required */
		Column: FormControl<TransformSortColumnType | null | undefined>,

		/** Required */
		SortDirection: FormControl<SortDirectionType | null | undefined>,
	}
	export function CreateTransformSortCriteriaFormGroup() {
		return new FormGroup<TransformSortCriteriaFormProperties>({
			Column: new FormControl<TransformSortColumnType | null | undefined>(undefined, [Validators.required]),
			SortDirection: new FormControl<SortDirectionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TransformSortColumnType { NAME = 'NAME', TRANSFORM_TYPE = 'TRANSFORM_TYPE', STATUS = 'STATUS', CREATED = 'CREATED', LAST_MODIFIED = 'LAST_MODIFIED' }

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
		SourceTable?: string;
		SourcePath?: string;
		SourceType?: string;
		TargetTable?: string;
		TargetPath?: string;
		TargetType?: string;
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

		/** Required */
		Source: CatalogEntry;
		Sinks?: Array<CatalogEntry>;
		Location?: Location;
	}
	export interface GetMappingRequestFormProperties {
	}
	export function CreateGetMappingRequestFormGroup() {
		return new FormGroup<GetMappingRequestFormProperties>({
		});

	}


	/** Specifies a table definition in the Glue Data Catalog. */
	export interface CatalogEntry {

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
	}

	/** Specifies a table definition in the Glue Data Catalog. */
	export interface CatalogEntryFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateCatalogEntryFormGroup() {
		return new FormGroup<CatalogEntryFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The location of resources. */
	export interface Location {
		Jdbc?: Array<CodeGenNodeArg>;
		S3?: Array<CodeGenNodeArg>;
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
		Partition?: Partition;
	}
	export interface GetPartitionResponseFormProperties {
	}
	export function CreateGetPartitionResponseFormGroup() {
		return new FormGroup<GetPartitionResponseFormProperties>({
		});

	}

	export interface GetPartitionRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		PartitionValues: Array<string>;
	}
	export interface GetPartitionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateGetPartitionRequestFormGroup() {
		return new FormGroup<GetPartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPartitionIndexesResponse {
		PartitionIndexDescriptorList?: Array<PartitionIndexDescriptor>;
		NextToken?: string;
	}
	export interface GetPartitionIndexesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetPartitionIndexesResponseFormGroup() {
		return new FormGroup<GetPartitionIndexesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A descriptor for a partition index in a table. */
	export interface PartitionIndexDescriptor {

		/** Required */
		IndexName: string;

		/** Required */
		Keys: Array<KeySchemaElement>;

		/** Required */
		IndexStatus: PartitionIndexStatus;
		BackfillErrors?: Array<BackfillError>;
	}

	/** A descriptor for a partition index in a table. */
	export interface PartitionIndexDescriptorFormProperties {

		/** Required */
		IndexName: FormControl<string | null | undefined>,

		/** Required */
		IndexStatus: FormControl<PartitionIndexStatus | null | undefined>,
	}
	export function CreatePartitionIndexDescriptorFormGroup() {
		return new FormGroup<PartitionIndexDescriptorFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexStatus: new FormControl<PartitionIndexStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A partition key pair consisting of a name and a type. */
	export interface KeySchemaElement {

		/** Required */
		Name: string;

		/** Required */
		Type: string;
	}

	/** A partition key pair consisting of a name and a type. */
	export interface KeySchemaElementFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateKeySchemaElementFormGroup() {
		return new FormGroup<KeySchemaElementFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PartitionIndexStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', FAILED = 'FAILED' }


	/** <p>A list of errors that can occur when registering partition indexes for an existing table.</p> <p>These errors give the details about why an index registration failed and provide a limited number of partitions in the response, so that you can fix the partitions at fault and try registering the index again. The most common set of errors that can occur are categorized as follows:</p> <ul> <li> <p>EncryptedPartitionError: The partitions are encrypted.</p> </li> <li> <p>InvalidPartitionTypeDataError: The partition value doesn't match the data type for that partition column.</p> </li> <li> <p>MissingPartitionValueError: The partitions are encrypted.</p> </li> <li> <p>UnsupportedPartitionCharacterError: Characters inside the partition value are not supported. For example: U+0000 , U+0001, U+0002.</p> </li> <li> <p>InternalError: Any error which does not belong to other error codes.</p> </li> </ul> */
	export interface BackfillError {
		Code?: BackfillErrorCode;
		Partitions?: Array<PartitionValueList>;
	}

	/** <p>A list of errors that can occur when registering partition indexes for an existing table.</p> <p>These errors give the details about why an index registration failed and provide a limited number of partitions in the response, so that you can fix the partitions at fault and try registering the index again. The most common set of errors that can occur are categorized as follows:</p> <ul> <li> <p>EncryptedPartitionError: The partitions are encrypted.</p> </li> <li> <p>InvalidPartitionTypeDataError: The partition value doesn't match the data type for that partition column.</p> </li> <li> <p>MissingPartitionValueError: The partitions are encrypted.</p> </li> <li> <p>UnsupportedPartitionCharacterError: Characters inside the partition value are not supported. For example: U+0000 , U+0001, U+0002.</p> </li> <li> <p>InternalError: Any error which does not belong to other error codes.</p> </li> </ul> */
	export interface BackfillErrorFormProperties {
		Code: FormControl<BackfillErrorCode | null | undefined>,
	}
	export function CreateBackfillErrorFormGroup() {
		return new FormGroup<BackfillErrorFormProperties>({
			Code: new FormControl<BackfillErrorCode | null | undefined>(undefined),
		});

	}

	export enum BackfillErrorCode { ENCRYPTED_PARTITION_ERROR = 'ENCRYPTED_PARTITION_ERROR', INTERNAL_ERROR = 'INTERNAL_ERROR', INVALID_PARTITION_TYPE_DATA_ERROR = 'INVALID_PARTITION_TYPE_DATA_ERROR', MISSING_PARTITION_VALUE_ERROR = 'MISSING_PARTITION_VALUE_ERROR', UNSUPPORTED_PARTITION_CHARACTER_ERROR = 'UNSUPPORTED_PARTITION_CHARACTER_ERROR' }

	export interface GetPartitionIndexesRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		NextToken?: string;
	}
	export interface GetPartitionIndexesRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetPartitionIndexesRequestFormGroup() {
		return new FormGroup<GetPartitionIndexesRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPartitionsResponse {
		Partitions?: Array<Partition>;
		NextToken?: string;
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
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		Expression?: string;
		NextToken?: string;
		Segment?: Segment;
		MaxResults?: number | null;
		ExcludeColumnSchema?: boolean | null;
		TransactionId?: string;
		QueryAsOfTime?: Date;
	}
	export interface GetPartitionsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
		Expression: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		ExcludeColumnSchema: FormControl<boolean | null | undefined>,
		TransactionId: FormControl<string | null | undefined>,
		QueryAsOfTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetPartitionsRequestFormGroup() {
		return new FormGroup<GetPartitionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Expression: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			ExcludeColumnSchema: new FormControl<boolean | null | undefined>(undefined),
			TransactionId: new FormControl<string | null | undefined>(undefined),
			QueryAsOfTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Defines a non-overlapping region of a table's partitions, allowing multiple requests to be run in parallel. */
	export interface Segment {

		/** Required */
		SegmentNumber: number;

		/** Required */
		TotalSegments: number;
	}

	/** Defines a non-overlapping region of a table's partitions, allowing multiple requests to be run in parallel. */
	export interface SegmentFormProperties {

		/** Required */
		SegmentNumber: FormControl<number | null | undefined>,

		/** Required */
		TotalSegments: FormControl<number | null | undefined>,
	}
	export function CreateSegmentFormGroup() {
		return new FormGroup<SegmentFormProperties>({
			SegmentNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TotalSegments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPlanResponse {
		PythonScript?: string;
		ScalaCode?: string;
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

		/** Required */
		Source: CatalogEntry;
		Sinks?: Array<CatalogEntry>;
		Location?: Location;
		Language?: Language;
		AdditionalPlanOptionsMap?: AdditionalPlanOptionsMap;
	}
	export interface GetPlanRequestFormProperties {
		Language: FormControl<Language | null | undefined>,
	}
	export function CreateGetPlanRequestFormGroup() {
		return new FormGroup<GetPlanRequestFormProperties>({
			Language: new FormControl<Language | null | undefined>(undefined),
		});

	}

	export interface AdditionalPlanOptionsMap {
	}
	export interface AdditionalPlanOptionsMapFormProperties {
	}
	export function CreateAdditionalPlanOptionsMapFormGroup() {
		return new FormGroup<AdditionalPlanOptionsMapFormProperties>({
		});

	}

	export interface GetRegistryResponse {
		RegistryName?: string;
		RegistryArn?: string;
		Description?: string;
		Status?: RegistryStatus;
		CreatedTime?: string;
		UpdatedTime?: string;
	}
	export interface GetRegistryResponseFormProperties {
		RegistryName: FormControl<string | null | undefined>,
		RegistryArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<RegistryStatus | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
		UpdatedTime: FormControl<string | null | undefined>,
	}
	export function CreateGetRegistryResponseFormGroup() {
		return new FormGroup<GetRegistryResponseFormProperties>({
			RegistryName: new FormControl<string | null | undefined>(undefined),
			RegistryArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RegistryStatus | null | undefined>(undefined),
			CreatedTime: new FormControl<string | null | undefined>(undefined),
			UpdatedTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRegistryInput {

		/** Required */
		RegistryId: RegistryId;
	}
	export interface GetRegistryInputFormProperties {
	}
	export function CreateGetRegistryInputFormGroup() {
		return new FormGroup<GetRegistryInputFormProperties>({
		});

	}

	export interface GetResourcePoliciesResponse {
		GetResourcePoliciesResponseList?: Array<GluePolicy>;
		NextToken?: string;
	}
	export interface GetResourcePoliciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePoliciesResponseFormGroup() {
		return new FormGroup<GetResourcePoliciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure for returning a resource policy. */
	export interface GluePolicy {
		PolicyInJson?: string;
		PolicyHash?: string;
		CreateTime?: Date;
		UpdateTime?: Date;
	}

	/** A structure for returning a resource policy. */
	export interface GluePolicyFormProperties {
		PolicyInJson: FormControl<string | null | undefined>,
		PolicyHash: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateGluePolicyFormGroup() {
		return new FormGroup<GluePolicyFormProperties>({
			PolicyInJson: new FormControl<string | null | undefined>(undefined),
			PolicyHash: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetResourcePoliciesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetResourcePoliciesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourcePoliciesRequestFormGroup() {
		return new FormGroup<GetResourcePoliciesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetResourcePolicyResponse {
		PolicyInJson?: string;
		PolicyHash?: string;
		CreateTime?: Date;
		UpdateTime?: Date;
	}
	export interface GetResourcePolicyResponseFormProperties {
		PolicyInJson: FormControl<string | null | undefined>,
		PolicyHash: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetResourcePolicyResponseFormGroup() {
		return new FormGroup<GetResourcePolicyResponseFormProperties>({
			PolicyInJson: new FormControl<string | null | undefined>(undefined),
			PolicyHash: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetResourcePolicyRequest {
		ResourceArn?: string;
	}
	export interface GetResourcePolicyRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyRequestFormGroup() {
		return new FormGroup<GetResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSchemaResponse {
		RegistryName?: string;
		RegistryArn?: string;
		SchemaName?: string;
		SchemaArn?: string;
		Description?: string;
		DataFormat?: DataFormat;
		Compatibility?: Compatibility;
		SchemaCheckpoint?: number | null;
		LatestSchemaVersion?: number | null;
		NextSchemaVersion?: number | null;
		SchemaStatus?: SchemaStatus;
		CreatedTime?: string;
		UpdatedTime?: string;
	}
	export interface GetSchemaResponseFormProperties {
		RegistryName: FormControl<string | null | undefined>,
		RegistryArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		SchemaArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DataFormat: FormControl<DataFormat | null | undefined>,
		Compatibility: FormControl<Compatibility | null | undefined>,
		SchemaCheckpoint: FormControl<number | null | undefined>,
		LatestSchemaVersion: FormControl<number | null | undefined>,
		NextSchemaVersion: FormControl<number | null | undefined>,
		SchemaStatus: FormControl<SchemaStatus | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
		UpdatedTime: FormControl<string | null | undefined>,
	}
	export function CreateGetSchemaResponseFormGroup() {
		return new FormGroup<GetSchemaResponseFormProperties>({
			RegistryName: new FormControl<string | null | undefined>(undefined),
			RegistryArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DataFormat: new FormControl<DataFormat | null | undefined>(undefined),
			Compatibility: new FormControl<Compatibility | null | undefined>(undefined),
			SchemaCheckpoint: new FormControl<number | null | undefined>(undefined),
			LatestSchemaVersion: new FormControl<number | null | undefined>(undefined),
			NextSchemaVersion: new FormControl<number | null | undefined>(undefined),
			SchemaStatus: new FormControl<SchemaStatus | null | undefined>(undefined),
			CreatedTime: new FormControl<string | null | undefined>(undefined),
			UpdatedTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSchemaInput {

		/** Required */
		SchemaId: SchemaId;
	}
	export interface GetSchemaInputFormProperties {
	}
	export function CreateGetSchemaInputFormGroup() {
		return new FormGroup<GetSchemaInputFormProperties>({
		});

	}

	export interface GetSchemaByDefinitionResponse {
		SchemaVersionId?: string;
		SchemaArn?: string;
		DataFormat?: DataFormat;
		Status?: SchemaVersionStatus;
		CreatedTime?: string;
	}
	export interface GetSchemaByDefinitionResponseFormProperties {
		SchemaVersionId: FormControl<string | null | undefined>,
		SchemaArn: FormControl<string | null | undefined>,
		DataFormat: FormControl<DataFormat | null | undefined>,
		Status: FormControl<SchemaVersionStatus | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
	}
	export function CreateGetSchemaByDefinitionResponseFormGroup() {
		return new FormGroup<GetSchemaByDefinitionResponseFormProperties>({
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			DataFormat: new FormControl<DataFormat | null | undefined>(undefined),
			Status: new FormControl<SchemaVersionStatus | null | undefined>(undefined),
			CreatedTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSchemaByDefinitionInput {

		/** Required */
		SchemaId: SchemaId;

		/** Required */
		SchemaDefinition: string;
	}
	export interface GetSchemaByDefinitionInputFormProperties {

		/** Required */
		SchemaDefinition: FormControl<string | null | undefined>,
	}
	export function CreateGetSchemaByDefinitionInputFormGroup() {
		return new FormGroup<GetSchemaByDefinitionInputFormProperties>({
			SchemaDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSchemaVersionResponse {
		SchemaVersionId?: string;
		SchemaDefinition?: string;
		DataFormat?: DataFormat;
		SchemaArn?: string;
		VersionNumber?: number | null;
		Status?: SchemaVersionStatus;
		CreatedTime?: string;
	}
	export interface GetSchemaVersionResponseFormProperties {
		SchemaVersionId: FormControl<string | null | undefined>,
		SchemaDefinition: FormControl<string | null | undefined>,
		DataFormat: FormControl<DataFormat | null | undefined>,
		SchemaArn: FormControl<string | null | undefined>,
		VersionNumber: FormControl<number | null | undefined>,
		Status: FormControl<SchemaVersionStatus | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
	}
	export function CreateGetSchemaVersionResponseFormGroup() {
		return new FormGroup<GetSchemaVersionResponseFormProperties>({
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
			SchemaDefinition: new FormControl<string | null | undefined>(undefined),
			DataFormat: new FormControl<DataFormat | null | undefined>(undefined),
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<SchemaVersionStatus | null | undefined>(undefined),
			CreatedTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSchemaVersionInput {
		SchemaId?: SchemaId;
		SchemaVersionId?: string;
		SchemaVersionNumber?: SchemaVersionNumber;
	}
	export interface GetSchemaVersionInputFormProperties {
		SchemaVersionId: FormControl<string | null | undefined>,
	}
	export function CreateGetSchemaVersionInputFormGroup() {
		return new FormGroup<GetSchemaVersionInputFormProperties>({
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure containing the schema version information. */
	export interface SchemaVersionNumber {
		LatestVersion?: boolean | null;
		VersionNumber?: number | null;
	}

	/** A structure containing the schema version information. */
	export interface SchemaVersionNumberFormProperties {
		LatestVersion: FormControl<boolean | null | undefined>,
		VersionNumber: FormControl<number | null | undefined>,
	}
	export function CreateSchemaVersionNumberFormGroup() {
		return new FormGroup<SchemaVersionNumberFormProperties>({
			LatestVersion: new FormControl<boolean | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSchemaVersionsDiffResponse {
		Diff?: string;
	}
	export interface GetSchemaVersionsDiffResponseFormProperties {
		Diff: FormControl<string | null | undefined>,
	}
	export function CreateGetSchemaVersionsDiffResponseFormGroup() {
		return new FormGroup<GetSchemaVersionsDiffResponseFormProperties>({
			Diff: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSchemaVersionsDiffInput {

		/** Required */
		SchemaId: SchemaId;

		/** Required */
		FirstSchemaVersionNumber: SchemaVersionNumber;

		/** Required */
		SecondSchemaVersionNumber: SchemaVersionNumber;

		/** Required */
		SchemaDiffType: SchemaDiffType;
	}
	export interface GetSchemaVersionsDiffInputFormProperties {

		/** Required */
		SchemaDiffType: FormControl<SchemaDiffType | null | undefined>,
	}
	export function CreateGetSchemaVersionsDiffInputFormGroup() {
		return new FormGroup<GetSchemaVersionsDiffInputFormProperties>({
			SchemaDiffType: new FormControl<SchemaDiffType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SchemaDiffType { SYNTAX_DIFF = 'SYNTAX_DIFF' }

	export interface GetSecurityConfigurationResponse {
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
		Name?: string;
		CreatedTimeStamp?: Date;
		EncryptionConfiguration?: EncryptionConfiguration;
	}

	/** Specifies a security configuration. */
	export interface SecurityConfigurationFormProperties {
		Name: FormControl<string | null | undefined>,
		CreatedTimeStamp: FormControl<Date | null | undefined>,
	}
	export function CreateSecurityConfigurationFormGroup() {
		return new FormGroup<SecurityConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetSecurityConfigurationRequest {

		/** Required */
		Name: string;
	}
	export interface GetSecurityConfigurationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetSecurityConfigurationRequestFormGroup() {
		return new FormGroup<GetSecurityConfigurationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSecurityConfigurationsResponse {
		SecurityConfigurations?: Array<SecurityConfiguration>;
		NextToken?: string;
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
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetSecurityConfigurationsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSecurityConfigurationsRequestFormGroup() {
		return new FormGroup<GetSecurityConfigurationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSessionResponse {
		Session?: Session;
	}
	export interface GetSessionResponseFormProperties {
	}
	export function CreateGetSessionResponseFormGroup() {
		return new FormGroup<GetSessionResponseFormProperties>({
		});

	}

	export interface GetSessionRequest {

		/** Required */
		Id: string;
		RequestOrigin?: string;
	}
	export interface GetSessionRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		RequestOrigin: FormControl<string | null | undefined>,
	}
	export function CreateGetSessionRequestFormGroup() {
		return new FormGroup<GetSessionRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequestOrigin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStatementResponse {
		Statement?: Statement;
	}
	export interface GetStatementResponseFormProperties {
	}
	export function CreateGetStatementResponseFormGroup() {
		return new FormGroup<GetStatementResponseFormProperties>({
		});

	}


	/** The statement or request for a particular action to occur in a session. */
	export interface Statement {
		Id?: number | null;
		Code?: string;
		State?: StatementState;
		Output?: StatementOutput;
		Progress?: number | null;
		StartedOn?: number | null;
		CompletedOn?: number | null;
	}

	/** The statement or request for a particular action to occur in a session. */
	export interface StatementFormProperties {
		Id: FormControl<number | null | undefined>,
		Code: FormControl<string | null | undefined>,
		State: FormControl<StatementState | null | undefined>,
		Progress: FormControl<number | null | undefined>,
		StartedOn: FormControl<number | null | undefined>,
		CompletedOn: FormControl<number | null | undefined>,
	}
	export function CreateStatementFormGroup() {
		return new FormGroup<StatementFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<StatementState | null | undefined>(undefined),
			Progress: new FormControl<number | null | undefined>(undefined),
			StartedOn: new FormControl<number | null | undefined>(undefined),
			CompletedOn: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum StatementState { WAITING = 'WAITING', RUNNING = 'RUNNING', AVAILABLE = 'AVAILABLE', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED', ERROR = 'ERROR' }


	/** The code execution output in JSON format. */
	export interface StatementOutput {
		Data?: StatementOutputData;
		ExecutionCount?: number | null;
		Status?: StatementState;
		ErrorName?: string;
		ErrorValue?: string;
		Traceback?: Array<string>;
	}

	/** The code execution output in JSON format. */
	export interface StatementOutputFormProperties {
		ExecutionCount: FormControl<number | null | undefined>,
		Status: FormControl<StatementState | null | undefined>,
		ErrorName: FormControl<string | null | undefined>,
		ErrorValue: FormControl<string | null | undefined>,
	}
	export function CreateStatementOutputFormGroup() {
		return new FormGroup<StatementOutputFormProperties>({
			ExecutionCount: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<StatementState | null | undefined>(undefined),
			ErrorName: new FormControl<string | null | undefined>(undefined),
			ErrorValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The code execution output in JSON format. */
	export interface StatementOutputData {
		TextPlain?: string;
	}

	/** The code execution output in JSON format. */
	export interface StatementOutputDataFormProperties {
		TextPlain: FormControl<string | null | undefined>,
	}
	export function CreateStatementOutputDataFormGroup() {
		return new FormGroup<StatementOutputDataFormProperties>({
			TextPlain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStatementRequest {

		/** Required */
		SessionId: string;

		/** Required */
		Id: number;
		RequestOrigin?: string;
	}
	export interface GetStatementRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<number | null | undefined>,
		RequestOrigin: FormControl<string | null | undefined>,
	}
	export function CreateGetStatementRequestFormGroup() {
		return new FormGroup<GetStatementRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RequestOrigin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTableResponse {
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

		/** Required */
		Name: string;
		DatabaseName?: string;
		Description?: string;
		Owner?: string;
		CreateTime?: Date;
		UpdateTime?: Date;
		LastAccessTime?: Date;
		LastAnalyzedTime?: Date;
		Retention?: number | null;
		StorageDescriptor?: StorageDescriptor;
		PartitionKeys?: Array<Column>;
		ViewOriginalText?: string;
		ViewExpandedText?: string;
		TableType?: string;
		Parameters?: ParametersMap;
		CreatedBy?: string;
		IsRegisteredWithLakeFormation?: boolean | null;
		TargetTable?: TableIdentifier;
		CatalogId?: string;
		VersionId?: string;
		FederatedTable?: FederatedTable;
	}

	/** Represents a collection of related data organized in columns and rows. */
	export interface TableFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
		UpdateTime: FormControl<Date | null | undefined>,
		LastAccessTime: FormControl<Date | null | undefined>,
		LastAnalyzedTime: FormControl<Date | null | undefined>,
		Retention: FormControl<number | null | undefined>,
		ViewOriginalText: FormControl<string | null | undefined>,
		ViewExpandedText: FormControl<string | null | undefined>,
		TableType: FormControl<string | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		IsRegisteredWithLakeFormation: FormControl<boolean | null | undefined>,
		CatalogId: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateTableFormGroup() {
		return new FormGroup<TableFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined),
			LastAccessTime: new FormControl<Date | null | undefined>(undefined),
			LastAnalyzedTime: new FormControl<Date | null | undefined>(undefined),
			Retention: new FormControl<number | null | undefined>(undefined),
			ViewOriginalText: new FormControl<string | null | undefined>(undefined),
			ViewExpandedText: new FormControl<string | null | undefined>(undefined),
			TableType: new FormControl<string | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			IsRegisteredWithLakeFormation: new FormControl<boolean | null | undefined>(undefined),
			CatalogId: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A table that points to an entity outside the Glue Data Catalog. */
	export interface FederatedTable {
		Identifier?: string;
		DatabaseIdentifier?: string;
		ConnectionName?: string;
	}

	/** A table that points to an entity outside the Glue Data Catalog. */
	export interface FederatedTableFormProperties {
		Identifier: FormControl<string | null | undefined>,
		DatabaseIdentifier: FormControl<string | null | undefined>,
		ConnectionName: FormControl<string | null | undefined>,
	}
	export function CreateFederatedTableFormGroup() {
		return new FormGroup<FederatedTableFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined),
			DatabaseIdentifier: new FormControl<string | null | undefined>(undefined),
			ConnectionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTableRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		Name: string;
		TransactionId?: string;
		QueryAsOfTime?: Date;
	}
	export interface GetTableRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		TransactionId: FormControl<string | null | undefined>,
		QueryAsOfTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetTableRequestFormGroup() {
		return new FormGroup<GetTableRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TransactionId: new FormControl<string | null | undefined>(undefined),
			QueryAsOfTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetTableVersionResponse {
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
		Table?: Table;
		VersionId?: string;
	}

	/** Specifies a version of a table. */
	export interface TableVersionFormProperties {
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateTableVersionFormGroup() {
		return new FormGroup<TableVersionFormProperties>({
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTableVersionRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		VersionId?: string;
	}
	export interface GetTableVersionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateGetTableVersionRequestFormGroup() {
		return new FormGroup<GetTableVersionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTableVersionsResponse {
		TableVersions?: Array<TableVersion>;
		NextToken?: string;
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
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetTableVersionsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetTableVersionsRequestFormGroup() {
		return new FormGroup<GetTableVersionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTablesResponse {
		TableList?: Array<Table>;
		NextToken?: string;
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
		CatalogId?: string;

		/** Required */
		DatabaseName: string;
		Expression?: string;
		NextToken?: string;
		MaxResults?: number | null;
		TransactionId?: string;
		QueryAsOfTime?: Date;
	}
	export interface GetTablesRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
		Expression: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		TransactionId: FormControl<string | null | undefined>,
		QueryAsOfTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetTablesRequestFormGroup() {
		return new FormGroup<GetTablesRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Expression: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			TransactionId: new FormControl<string | null | undefined>(undefined),
			QueryAsOfTime: new FormControl<Date | null | undefined>(undefined),
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

		/** Required */
		ResourceArn: string;
	}
	export interface GetTagsRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetTagsRequestFormGroup() {
		return new FormGroup<GetTagsRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTriggerResponse {
		Trigger?: Trigger;
	}
	export interface GetTriggerResponseFormProperties {
	}
	export function CreateGetTriggerResponseFormGroup() {
		return new FormGroup<GetTriggerResponseFormProperties>({
		});

	}

	export interface GetTriggerRequest {

		/** Required */
		Name: string;
	}
	export interface GetTriggerRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetTriggerRequestFormGroup() {
		return new FormGroup<GetTriggerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTriggersResponse {
		Triggers?: Array<Trigger>;
		NextToken?: string;
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
		NextToken?: string;
		DependentJobName?: string;
		MaxResults?: number | null;
	}
	export interface GetTriggersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		DependentJobName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetTriggersRequestFormGroup() {
		return new FormGroup<GetTriggersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			DependentJobName: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetUnfilteredPartitionMetadataResponse {
		Partition?: Partition;
		AuthorizedColumns?: Array<string>;
		IsRegisteredWithLakeFormation?: boolean | null;
	}
	export interface GetUnfilteredPartitionMetadataResponseFormProperties {
		IsRegisteredWithLakeFormation: FormControl<boolean | null | undefined>,
	}
	export function CreateGetUnfilteredPartitionMetadataResponseFormGroup() {
		return new FormGroup<GetUnfilteredPartitionMetadataResponseFormProperties>({
			IsRegisteredWithLakeFormation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetUnfilteredPartitionMetadataRequest {

		/** Required */
		CatalogId: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		PartitionValues: Array<string>;
		AuditContext?: AuditContext;

		/** Required */
		SupportedPermissionTypes: Array<PermissionType>;
	}
	export interface GetUnfilteredPartitionMetadataRequestFormProperties {

		/** Required */
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateGetUnfilteredPartitionMetadataRequestFormGroup() {
		return new FormGroup<GetUnfilteredPartitionMetadataRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure containing the Lake Formation audit context. */
	export interface AuditContext {
		AdditionalAuditContext?: string;
		RequestedColumns?: Array<string>;
		AllColumnsRequested?: boolean | null;
	}

	/** A structure containing the Lake Formation audit context. */
	export interface AuditContextFormProperties {
		AdditionalAuditContext: FormControl<string | null | undefined>,
		AllColumnsRequested: FormControl<boolean | null | undefined>,
	}
	export function CreateAuditContextFormGroup() {
		return new FormGroup<AuditContextFormProperties>({
			AdditionalAuditContext: new FormControl<string | null | undefined>(undefined),
			AllColumnsRequested: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PermissionType { COLUMN_PERMISSION = 'COLUMN_PERMISSION', CELL_FILTER_PERMISSION = 'CELL_FILTER_PERMISSION', NESTED_PERMISSION = 'NESTED_PERMISSION', NESTED_CELL_PERMISSION = 'NESTED_CELL_PERMISSION' }

	export interface PermissionTypeMismatchException {
	}
	export interface PermissionTypeMismatchExceptionFormProperties {
	}
	export function CreatePermissionTypeMismatchExceptionFormGroup() {
		return new FormGroup<PermissionTypeMismatchExceptionFormProperties>({
		});

	}

	export interface GetUnfilteredPartitionsMetadataResponse {
		UnfilteredPartitions?: Array<UnfilteredPartition>;
		NextToken?: string;
	}
	export interface GetUnfilteredPartitionsMetadataResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetUnfilteredPartitionsMetadataResponseFormGroup() {
		return new FormGroup<GetUnfilteredPartitionsMetadataResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A partition that contains unfiltered metadata. */
	export interface UnfilteredPartition {
		Partition?: Partition;
		AuthorizedColumns?: Array<string>;
		IsRegisteredWithLakeFormation?: boolean | null;
	}

	/** A partition that contains unfiltered metadata. */
	export interface UnfilteredPartitionFormProperties {
		IsRegisteredWithLakeFormation: FormControl<boolean | null | undefined>,
	}
	export function CreateUnfilteredPartitionFormGroup() {
		return new FormGroup<UnfilteredPartitionFormProperties>({
			IsRegisteredWithLakeFormation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetUnfilteredPartitionsMetadataRequest {

		/** Required */
		CatalogId: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		Expression?: string;
		AuditContext?: AuditContext;

		/** Required */
		SupportedPermissionTypes: Array<PermissionType>;
		NextToken?: string;
		Segment?: Segment;
		MaxResults?: number | null;
	}
	export interface GetUnfilteredPartitionsMetadataRequestFormProperties {

		/** Required */
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
		Expression: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetUnfilteredPartitionsMetadataRequestFormGroup() {
		return new FormGroup<GetUnfilteredPartitionsMetadataRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Expression: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetUnfilteredTableMetadataResponse {
		Table?: Table;
		AuthorizedColumns?: Array<string>;
		IsRegisteredWithLakeFormation?: boolean | null;
		CellFilters?: Array<ColumnRowFilter>;
	}
	export interface GetUnfilteredTableMetadataResponseFormProperties {
		IsRegisteredWithLakeFormation: FormControl<boolean | null | undefined>,
	}
	export function CreateGetUnfilteredTableMetadataResponseFormGroup() {
		return new FormGroup<GetUnfilteredTableMetadataResponseFormProperties>({
			IsRegisteredWithLakeFormation: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A filter that uses both column-level and row-level filtering. */
	export interface ColumnRowFilter {
		ColumnName?: string;
		RowFilterExpression?: string;
	}

	/** A filter that uses both column-level and row-level filtering. */
	export interface ColumnRowFilterFormProperties {
		ColumnName: FormControl<string | null | undefined>,
		RowFilterExpression: FormControl<string | null | undefined>,
	}
	export function CreateColumnRowFilterFormGroup() {
		return new FormGroup<ColumnRowFilterFormProperties>({
			ColumnName: new FormControl<string | null | undefined>(undefined),
			RowFilterExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUnfilteredTableMetadataRequest {

		/** Required */
		CatalogId: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		Name: string;
		AuditContext?: AuditContext;

		/** Required */
		SupportedPermissionTypes: Array<PermissionType>;
	}
	export interface GetUnfilteredTableMetadataRequestFormProperties {

		/** Required */
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetUnfilteredTableMetadataRequestFormGroup() {
		return new FormGroup<GetUnfilteredTableMetadataRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUserDefinedFunctionResponse {
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
		FunctionName?: string;
		DatabaseName?: string;
		ClassName?: string;
		OwnerName?: string;
		OwnerType?: PrincipalType;
		CreateTime?: Date;
		ResourceUris?: Array<ResourceUri>;
		CatalogId?: string;
	}

	/** Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition. */
	export interface UserDefinedFunctionFormProperties {
		FunctionName: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		ClassName: FormControl<string | null | undefined>,
		OwnerName: FormControl<string | null | undefined>,
		OwnerType: FormControl<PrincipalType | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateUserDefinedFunctionFormGroup() {
		return new FormGroup<UserDefinedFunctionFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			ClassName: new FormControl<string | null | undefined>(undefined),
			OwnerName: new FormControl<string | null | undefined>(undefined),
			OwnerType: new FormControl<PrincipalType | null | undefined>(undefined),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUserDefinedFunctionRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		FunctionName: string;
	}
	export interface GetUserDefinedFunctionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		FunctionName: FormControl<string | null | undefined>,
	}
	export function CreateGetUserDefinedFunctionRequestFormGroup() {
		return new FormGroup<GetUserDefinedFunctionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUserDefinedFunctionsResponse {
		UserDefinedFunctions?: Array<UserDefinedFunction>;
		NextToken?: string;
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
		CatalogId?: string;
		DatabaseName?: string;

		/** Required */
		Pattern: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetUserDefinedFunctionsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		Pattern: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetUserDefinedFunctionsRequestFormGroup() {
		return new FormGroup<GetUserDefinedFunctionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Pattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetWorkflowResponse {
		Workflow?: Workflow;
	}
	export interface GetWorkflowResponseFormProperties {
	}
	export function CreateGetWorkflowResponseFormGroup() {
		return new FormGroup<GetWorkflowResponseFormProperties>({
		});

	}

	export interface GetWorkflowRequest {

		/** Required */
		Name: string;
		IncludeGraph?: boolean | null;
	}
	export interface GetWorkflowRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		IncludeGraph: FormControl<boolean | null | undefined>,
	}
	export function CreateGetWorkflowRequestFormGroup() {
		return new FormGroup<GetWorkflowRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IncludeGraph: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetWorkflowRunResponse {
		Run?: WorkflowRun;
	}
	export interface GetWorkflowRunResponseFormProperties {
	}
	export function CreateGetWorkflowRunResponseFormGroup() {
		return new FormGroup<GetWorkflowRunResponseFormProperties>({
		});

	}

	export interface GetWorkflowRunRequest {

		/** Required */
		Name: string;

		/** Required */
		RunId: string;
		IncludeGraph?: boolean | null;
	}
	export interface GetWorkflowRunRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RunId: FormControl<string | null | undefined>,
		IncludeGraph: FormControl<boolean | null | undefined>,
	}
	export function CreateGetWorkflowRunRequestFormGroup() {
		return new FormGroup<GetWorkflowRunRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;

		/** Required */
		RunId: string;
	}
	export interface GetWorkflowRunPropertiesRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkflowRunPropertiesRequestFormGroup() {
		return new FormGroup<GetWorkflowRunPropertiesRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetWorkflowRunsResponse {
		Runs?: Array<WorkflowRun>;
		NextToken?: string;
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

		/** Required */
		Name: string;
		IncludeGraph?: boolean | null;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetWorkflowRunsRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		IncludeGraph: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetWorkflowRunsRequestFormGroup() {
		return new FormGroup<GetWorkflowRunsRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IncludeGraph: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
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
		CatalogId?: string;
	}
	export interface ImportCatalogToGlueRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateImportCatalogToGlueRequestFormGroup() {
		return new FormGroup<ImportCatalogToGlueRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBlueprintsResponse {
		Blueprints?: Array<string>;
		NextToken?: string;
	}
	export interface ListBlueprintsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBlueprintsResponseFormGroup() {
		return new FormGroup<ListBlueprintsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBlueprintsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Tags?: TagsMap;
	}
	export interface ListBlueprintsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListBlueprintsRequestFormGroup() {
		return new FormGroup<ListBlueprintsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListCrawlersResponse {
		CrawlerNames?: Array<string>;
		NextToken?: string;
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
		MaxResults?: number | null;
		NextToken?: string;
		Tags?: TagsMap;
	}
	export interface ListCrawlersRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCrawlersRequestFormGroup() {
		return new FormGroup<ListCrawlersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCrawlsResponse {
		Crawls?: Array<CrawlerHistory>;
		NextToken?: string;
	}
	export interface ListCrawlsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCrawlsResponseFormGroup() {
		return new FormGroup<ListCrawlsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the information for a run of a crawler. */
	export interface CrawlerHistory {
		CrawlId?: string;
		State?: CrawlerHistoryState;
		StartTime?: Date;
		EndTime?: Date;
		Summary?: string;
		ErrorMessage?: string;
		LogGroup?: string;
		LogStream?: string;
		MessagePrefix?: string;
		DPUHour?: number | null;
	}

	/** Contains the information for a run of a crawler. */
	export interface CrawlerHistoryFormProperties {
		CrawlId: FormControl<string | null | undefined>,
		State: FormControl<CrawlerHistoryState | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Summary: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		LogGroup: FormControl<string | null | undefined>,
		LogStream: FormControl<string | null | undefined>,
		MessagePrefix: FormControl<string | null | undefined>,
		DPUHour: FormControl<number | null | undefined>,
	}
	export function CreateCrawlerHistoryFormGroup() {
		return new FormGroup<CrawlerHistoryFormProperties>({
			CrawlId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CrawlerHistoryState | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Summary: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			LogGroup: new FormControl<string | null | undefined>(undefined),
			LogStream: new FormControl<string | null | undefined>(undefined),
			MessagePrefix: new FormControl<string | null | undefined>(undefined),
			DPUHour: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CrawlerHistoryState { RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', FAILED = 'FAILED', STOPPED = 'STOPPED' }

	export interface ListCrawlsRequest {

		/** Required */
		CrawlerName: string;
		MaxResults?: number | null;
		Filters?: Array<CrawlsFilter>;
		NextToken?: string;
	}
	export interface ListCrawlsRequestFormProperties {

		/** Required */
		CrawlerName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCrawlsRequestFormGroup() {
		return new FormGroup<ListCrawlsRequestFormProperties>({
			CrawlerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of fields, comparators and value that you can use to filter the crawler runs for a specified crawler. */
	export interface CrawlsFilter {
		FieldName?: FieldName;
		FilterOperator?: FilterOperator;
		FieldValue?: string;
	}

	/** A list of fields, comparators and value that you can use to filter the crawler runs for a specified crawler. */
	export interface CrawlsFilterFormProperties {
		FieldName: FormControl<FieldName | null | undefined>,
		FilterOperator: FormControl<FilterOperator | null | undefined>,
		FieldValue: FormControl<string | null | undefined>,
	}
	export function CreateCrawlsFilterFormGroup() {
		return new FormGroup<CrawlsFilterFormProperties>({
			FieldName: new FormControl<FieldName | null | undefined>(undefined),
			FilterOperator: new FormControl<FilterOperator | null | undefined>(undefined),
			FieldValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FieldName { CRAWL_ID = 'CRAWL_ID', STATE = 'STATE', START_TIME = 'START_TIME', END_TIME = 'END_TIME', DPU_HOUR = 'DPU_HOUR' }

	export enum FilterOperator { GT = 'GT', GE = 'GE', LT = 'LT', LE = 'LE', EQ = 'EQ', NE = 'NE' }

	export interface ListCustomEntityTypesResponse {
		CustomEntityTypes?: Array<CustomEntityType>;
		NextToken?: string;
	}
	export interface ListCustomEntityTypesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomEntityTypesResponseFormGroup() {
		return new FormGroup<ListCustomEntityTypesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomEntityTypesRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Tags?: TagsMap;
	}
	export interface ListCustomEntityTypesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCustomEntityTypesRequestFormGroup() {
		return new FormGroup<ListCustomEntityTypesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDataQualityResultsResponse {

		/** Required */
		Results: Array<DataQualityResultDescription>;
		NextToken?: string;
	}
	export interface ListDataQualityResultsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataQualityResultsResponseFormGroup() {
		return new FormGroup<ListDataQualityResultsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a data quality result. */
	export interface DataQualityResultDescription {
		ResultId?: string;
		DataSource?: DataSource;
		JobName?: string;
		JobRunId?: string;
		StartedOn?: Date;
	}

	/** Describes a data quality result. */
	export interface DataQualityResultDescriptionFormProperties {
		ResultId: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobRunId: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
	}
	export function CreateDataQualityResultDescriptionFormGroup() {
		return new FormGroup<DataQualityResultDescriptionFormProperties>({
			ResultId: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobRunId: new FormControl<string | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDataQualityResultsRequest {
		Filter?: DataQualityResultFilterCriteria;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDataQualityResultsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDataQualityResultsRequestFormGroup() {
		return new FormGroup<ListDataQualityResultsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Criteria used to return data quality results. */
	export interface DataQualityResultFilterCriteria {
		DataSource?: DataSource;
		JobName?: string;
		JobRunId?: string;
		StartedAfter?: Date;
		StartedBefore?: Date;
	}

	/** Criteria used to return data quality results. */
	export interface DataQualityResultFilterCriteriaFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobRunId: FormControl<string | null | undefined>,
		StartedAfter: FormControl<Date | null | undefined>,
		StartedBefore: FormControl<Date | null | undefined>,
	}
	export function CreateDataQualityResultFilterCriteriaFormGroup() {
		return new FormGroup<DataQualityResultFilterCriteriaFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobRunId: new FormControl<string | null | undefined>(undefined),
			StartedAfter: new FormControl<Date | null | undefined>(undefined),
			StartedBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDataQualityRuleRecommendationRunsResponse {
		Runs?: Array<DataQualityRuleRecommendationRunDescription>;
		NextToken?: string;
	}
	export interface ListDataQualityRuleRecommendationRunsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataQualityRuleRecommendationRunsResponseFormGroup() {
		return new FormGroup<ListDataQualityRuleRecommendationRunsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the result of a data quality rule recommendation run. */
	export interface DataQualityRuleRecommendationRunDescription {
		RunId?: string;
		Status?: TaskStatusType;
		StartedOn?: Date;
		DataSource?: DataSource;
	}

	/** Describes the result of a data quality rule recommendation run. */
	export interface DataQualityRuleRecommendationRunDescriptionFormProperties {
		RunId: FormControl<string | null | undefined>,
		Status: FormControl<TaskStatusType | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
	}
	export function CreateDataQualityRuleRecommendationRunDescriptionFormGroup() {
		return new FormGroup<DataQualityRuleRecommendationRunDescriptionFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskStatusType | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDataQualityRuleRecommendationRunsRequest {
		Filter?: DataQualityRuleRecommendationRunFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDataQualityRuleRecommendationRunsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDataQualityRuleRecommendationRunsRequestFormGroup() {
		return new FormGroup<ListDataQualityRuleRecommendationRunsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A filter for listing data quality recommendation runs. */
	export interface DataQualityRuleRecommendationRunFilter {

		/** Required */
		DataSource: DataSource;
		StartedBefore?: Date;
		StartedAfter?: Date;
	}

	/** A filter for listing data quality recommendation runs. */
	export interface DataQualityRuleRecommendationRunFilterFormProperties {
		StartedBefore: FormControl<Date | null | undefined>,
		StartedAfter: FormControl<Date | null | undefined>,
	}
	export function CreateDataQualityRuleRecommendationRunFilterFormGroup() {
		return new FormGroup<DataQualityRuleRecommendationRunFilterFormProperties>({
			StartedBefore: new FormControl<Date | null | undefined>(undefined),
			StartedAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDataQualityRulesetEvaluationRunsResponse {
		Runs?: Array<DataQualityRulesetEvaluationRunDescription>;
		NextToken?: string;
	}
	export interface ListDataQualityRulesetEvaluationRunsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataQualityRulesetEvaluationRunsResponseFormGroup() {
		return new FormGroup<ListDataQualityRulesetEvaluationRunsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the result of a data quality ruleset evaluation run. */
	export interface DataQualityRulesetEvaluationRunDescription {
		RunId?: string;
		Status?: TaskStatusType;
		StartedOn?: Date;
		DataSource?: DataSource;
	}

	/** Describes the result of a data quality ruleset evaluation run. */
	export interface DataQualityRulesetEvaluationRunDescriptionFormProperties {
		RunId: FormControl<string | null | undefined>,
		Status: FormControl<TaskStatusType | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
	}
	export function CreateDataQualityRulesetEvaluationRunDescriptionFormGroup() {
		return new FormGroup<DataQualityRulesetEvaluationRunDescriptionFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskStatusType | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDataQualityRulesetEvaluationRunsRequest {
		Filter?: DataQualityRulesetEvaluationRunFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDataQualityRulesetEvaluationRunsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDataQualityRulesetEvaluationRunsRequestFormGroup() {
		return new FormGroup<ListDataQualityRulesetEvaluationRunsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The filter criteria. */
	export interface DataQualityRulesetEvaluationRunFilter {

		/** Required */
		DataSource: DataSource;
		StartedBefore?: Date;
		StartedAfter?: Date;
	}

	/** The filter criteria. */
	export interface DataQualityRulesetEvaluationRunFilterFormProperties {
		StartedBefore: FormControl<Date | null | undefined>,
		StartedAfter: FormControl<Date | null | undefined>,
	}
	export function CreateDataQualityRulesetEvaluationRunFilterFormGroup() {
		return new FormGroup<DataQualityRulesetEvaluationRunFilterFormProperties>({
			StartedBefore: new FormControl<Date | null | undefined>(undefined),
			StartedAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDataQualityRulesetsResponse {
		Rulesets?: Array<DataQualityRulesetListDetails>;
		NextToken?: string;
	}
	export interface ListDataQualityRulesetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataQualityRulesetsResponseFormGroup() {
		return new FormGroup<ListDataQualityRulesetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a data quality ruleset returned by <code>GetDataQualityRuleset</code>. */
	export interface DataQualityRulesetListDetails {
		Name?: string;
		Description?: string;
		CreatedOn?: Date;
		LastModifiedOn?: Date;
		TargetTable?: DataQualityTargetTable;
		RecommendationRunId?: string;
		RuleCount?: number | null;
	}

	/** Describes a data quality ruleset returned by <code>GetDataQualityRuleset</code>. */
	export interface DataQualityRulesetListDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedOn: FormControl<Date | null | undefined>,
		LastModifiedOn: FormControl<Date | null | undefined>,
		RecommendationRunId: FormControl<string | null | undefined>,
		RuleCount: FormControl<number | null | undefined>,
	}
	export function CreateDataQualityRulesetListDetailsFormGroup() {
		return new FormGroup<DataQualityRulesetListDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			LastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			RecommendationRunId: new FormControl<string | null | undefined>(undefined),
			RuleCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDataQualityRulesetsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filter?: DataQualityRulesetFilterCriteria;
		Tags?: TagsMap;
	}
	export interface ListDataQualityRulesetsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDataQualityRulesetsRequestFormGroup() {
		return new FormGroup<ListDataQualityRulesetsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The criteria used to filter data quality rulesets. */
	export interface DataQualityRulesetFilterCriteria {
		Name?: string;
		Description?: string;
		CreatedBefore?: Date;
		CreatedAfter?: Date;
		LastModifiedBefore?: Date;
		LastModifiedAfter?: Date;
		TargetTable?: DataQualityTargetTable;
	}

	/** The criteria used to filter data quality rulesets. */
	export interface DataQualityRulesetFilterCriteriaFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedBefore: FormControl<Date | null | undefined>,
		CreatedAfter: FormControl<Date | null | undefined>,
		LastModifiedBefore: FormControl<Date | null | undefined>,
		LastModifiedAfter: FormControl<Date | null | undefined>,
	}
	export function CreateDataQualityRulesetFilterCriteriaFormGroup() {
		return new FormGroup<DataQualityRulesetFilterCriteriaFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedBefore: new FormControl<Date | null | undefined>(undefined),
			CreatedAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDevEndpointsResponse {
		DevEndpointNames?: Array<string>;
		NextToken?: string;
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
		NextToken?: string;
		MaxResults?: number | null;
		Tags?: TagsMap;
	}
	export interface ListDevEndpointsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDevEndpointsRequestFormGroup() {
		return new FormGroup<ListDevEndpointsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListJobsResponse {
		JobNames?: Array<string>;
		NextToken?: string;
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
		NextToken?: string;
		MaxResults?: number | null;
		Tags?: TagsMap;
	}
	export interface ListJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListJobsRequestFormGroup() {
		return new FormGroup<ListJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMLTransformsResponse {

		/** Required */
		TransformIds: Array<string>;
		NextToken?: string;
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
		NextToken?: string;
		MaxResults?: number | null;
		Filter?: TransformFilterCriteria;
		Sort?: TransformSortCriteria;
		Tags?: TagsMap;
	}
	export interface ListMLTransformsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMLTransformsRequestFormGroup() {
		return new FormGroup<ListMLTransformsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRegistriesResponse {
		Registries?: Array<RegistryListItem>;
		NextToken?: string;
	}
	export interface ListRegistriesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRegistriesResponseFormGroup() {
		return new FormGroup<ListRegistriesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure containing the details for a registry. */
	export interface RegistryListItem {
		RegistryName?: string;
		RegistryArn?: string;
		Description?: string;
		Status?: RegistryStatus;
		CreatedTime?: string;
		UpdatedTime?: string;
	}

	/** A structure containing the details for a registry. */
	export interface RegistryListItemFormProperties {
		RegistryName: FormControl<string | null | undefined>,
		RegistryArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<RegistryStatus | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
		UpdatedTime: FormControl<string | null | undefined>,
	}
	export function CreateRegistryListItemFormGroup() {
		return new FormGroup<RegistryListItemFormProperties>({
			RegistryName: new FormControl<string | null | undefined>(undefined),
			RegistryArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RegistryStatus | null | undefined>(undefined),
			CreatedTime: new FormControl<string | null | undefined>(undefined),
			UpdatedTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRegistriesInput {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListRegistriesInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRegistriesInputFormGroup() {
		return new FormGroup<ListRegistriesInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSchemaVersionsResponse {
		Schemas?: Array<SchemaVersionListItem>;
		NextToken?: string;
	}
	export interface ListSchemaVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemaVersionsResponseFormGroup() {
		return new FormGroup<ListSchemaVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object containing the details about a schema version. */
	export interface SchemaVersionListItem {
		SchemaArn?: string;
		SchemaVersionId?: string;
		VersionNumber?: number | null;
		Status?: SchemaVersionStatus;
		CreatedTime?: string;
	}

	/** An object containing the details about a schema version. */
	export interface SchemaVersionListItemFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
		SchemaVersionId: FormControl<string | null | undefined>,
		VersionNumber: FormControl<number | null | undefined>,
		Status: FormControl<SchemaVersionStatus | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
	}
	export function CreateSchemaVersionListItemFormGroup() {
		return new FormGroup<SchemaVersionListItemFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<SchemaVersionStatus | null | undefined>(undefined),
			CreatedTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSchemaVersionsInput {

		/** Required */
		SchemaId: SchemaId;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListSchemaVersionsInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemaVersionsInputFormGroup() {
		return new FormGroup<ListSchemaVersionsInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSchemasResponse {
		Schemas?: Array<SchemaListItem>;
		NextToken?: string;
	}
	export interface ListSchemasResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemasResponseFormGroup() {
		return new FormGroup<ListSchemasResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains minimal details for a schema. */
	export interface SchemaListItem {
		RegistryName?: string;
		SchemaName?: string;
		SchemaArn?: string;
		Description?: string;
		SchemaStatus?: SchemaStatus;
		CreatedTime?: string;
		UpdatedTime?: string;
	}

	/** An object that contains minimal details for a schema. */
	export interface SchemaListItemFormProperties {
		RegistryName: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		SchemaArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		SchemaStatus: FormControl<SchemaStatus | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
		UpdatedTime: FormControl<string | null | undefined>,
	}
	export function CreateSchemaListItemFormGroup() {
		return new FormGroup<SchemaListItemFormProperties>({
			RegistryName: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			SchemaStatus: new FormControl<SchemaStatus | null | undefined>(undefined),
			CreatedTime: new FormControl<string | null | undefined>(undefined),
			UpdatedTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSchemasInput {
		RegistryId?: RegistryId;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListSchemasInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemasInputFormGroup() {
		return new FormGroup<ListSchemasInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSessionsResponse {
		Ids?: Array<string>;
		Sessions?: Array<Session>;
		NextToken?: string;
	}
	export interface ListSessionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSessionsResponseFormGroup() {
		return new FormGroup<ListSessionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSessionsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Tags?: TagsMap;
		RequestOrigin?: string;
	}
	export interface ListSessionsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		RequestOrigin: FormControl<string | null | undefined>,
	}
	export function CreateListSessionsRequestFormGroup() {
		return new FormGroup<ListSessionsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			RequestOrigin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStatementsResponse {
		Statements?: Array<Statement>;
		NextToken?: string;
	}
	export interface ListStatementsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStatementsResponseFormGroup() {
		return new FormGroup<ListStatementsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStatementsRequest {

		/** Required */
		SessionId: string;
		RequestOrigin?: string;
		NextToken?: string;
	}
	export interface ListStatementsRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
		RequestOrigin: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStatementsRequestFormGroup() {
		return new FormGroup<ListStatementsRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequestOrigin: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTriggersResponse {
		TriggerNames?: Array<string>;
		NextToken?: string;
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
		NextToken?: string;
		DependentJobName?: string;
		MaxResults?: number | null;
		Tags?: TagsMap;
	}
	export interface ListTriggersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		DependentJobName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTriggersRequestFormGroup() {
		return new FormGroup<ListTriggersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			DependentJobName: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWorkflowsResponse {
		Workflows?: Array<string>;
		NextToken?: string;
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
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListWorkflowsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorkflowsRequestFormGroup() {
		return new FormGroup<ListWorkflowsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
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
		CatalogId?: string;

		/** Required */
		DataCatalogEncryptionSettings: DataCatalogEncryptionSettings;
	}
	export interface PutDataCatalogEncryptionSettingsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreatePutDataCatalogEncryptionSettingsRequestFormGroup() {
		return new FormGroup<PutDataCatalogEncryptionSettingsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyResponse {
		PolicyHash?: string;
	}
	export interface PutResourcePolicyResponseFormProperties {
		PolicyHash: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
			PolicyHash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyRequest {

		/** Required */
		PolicyInJson: string;
		ResourceArn?: string;
		PolicyHashCondition?: string;
		PolicyExistsCondition?: ExistCondition;
		EnableHybrid?: EnableHybridValues;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		PolicyInJson: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		PolicyHashCondition: FormControl<string | null | undefined>,
		PolicyExistsCondition: FormControl<ExistCondition | null | undefined>,
		EnableHybrid: FormControl<EnableHybridValues | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			PolicyInJson: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			PolicyHashCondition: new FormControl<string | null | undefined>(undefined),
			PolicyExistsCondition: new FormControl<ExistCondition | null | undefined>(undefined),
			EnableHybrid: new FormControl<EnableHybridValues | null | undefined>(undefined),
		});

	}

	export enum ExistCondition { MUST_EXIST = 'MUST_EXIST', NOT_EXIST = 'NOT_EXIST', NONE = 'NONE' }

	export enum EnableHybridValues { TRUE = 'TRUE', FALSE = 'FALSE' }

	export interface PutSchemaVersionMetadataResponse {
		SchemaArn?: string;
		SchemaName?: string;
		RegistryName?: string;
		LatestVersion?: boolean | null;
		VersionNumber?: number | null;
		SchemaVersionId?: string;
		MetadataKey?: string;
		MetadataValue?: string;
	}
	export interface PutSchemaVersionMetadataResponseFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		RegistryName: FormControl<string | null | undefined>,
		LatestVersion: FormControl<boolean | null | undefined>,
		VersionNumber: FormControl<number | null | undefined>,
		SchemaVersionId: FormControl<string | null | undefined>,
		MetadataKey: FormControl<string | null | undefined>,
		MetadataValue: FormControl<string | null | undefined>,
	}
	export function CreatePutSchemaVersionMetadataResponseFormGroup() {
		return new FormGroup<PutSchemaVersionMetadataResponseFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			RegistryName: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<boolean | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined),
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
			MetadataKey: new FormControl<string | null | undefined>(undefined),
			MetadataValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutSchemaVersionMetadataInput {
		SchemaId?: SchemaId;
		SchemaVersionNumber?: SchemaVersionNumber;
		SchemaVersionId?: string;

		/** Required */
		MetadataKeyValue: MetadataKeyValuePair;
	}
	export interface PutSchemaVersionMetadataInputFormProperties {
		SchemaVersionId: FormControl<string | null | undefined>,
	}
	export function CreatePutSchemaVersionMetadataInputFormGroup() {
		return new FormGroup<PutSchemaVersionMetadataInputFormProperties>({
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure containing a key value pair for metadata. */
	export interface MetadataKeyValuePair {
		MetadataKey?: string;
		MetadataValue?: string;
	}

	/** A structure containing a key value pair for metadata. */
	export interface MetadataKeyValuePairFormProperties {
		MetadataKey: FormControl<string | null | undefined>,
		MetadataValue: FormControl<string | null | undefined>,
	}
	export function CreateMetadataKeyValuePairFormGroup() {
		return new FormGroup<MetadataKeyValuePairFormProperties>({
			MetadataKey: new FormControl<string | null | undefined>(undefined),
			MetadataValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutWorkflowRunPropertiesResponse {
	}
	export interface PutWorkflowRunPropertiesResponseFormProperties {
	}
	export function CreatePutWorkflowRunPropertiesResponseFormGroup() {
		return new FormGroup<PutWorkflowRunPropertiesResponseFormProperties>({
		});

	}

	export interface PutWorkflowRunPropertiesRequest {

		/** Required */
		Name: string;

		/** Required */
		RunId: string;

		/** Required */
		RunProperties: WorkflowRunProperties;
	}
	export interface PutWorkflowRunPropertiesRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreatePutWorkflowRunPropertiesRequestFormGroup() {
		return new FormGroup<PutWorkflowRunPropertiesRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface QuerySchemaVersionMetadataResponse {
		MetadataInfoMap?: MetadataInfoMap;
		SchemaVersionId?: string;
		NextToken?: string;
	}
	export interface QuerySchemaVersionMetadataResponseFormProperties {
		SchemaVersionId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateQuerySchemaVersionMetadataResponseFormGroup() {
		return new FormGroup<QuerySchemaVersionMetadataResponseFormProperties>({
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MetadataInfoMap {
	}
	export interface MetadataInfoMapFormProperties {
	}
	export function CreateMetadataInfoMapFormGroup() {
		return new FormGroup<MetadataInfoMapFormProperties>({
		});

	}

	export interface QuerySchemaVersionMetadataInput {
		SchemaId?: SchemaId;
		SchemaVersionNumber?: SchemaVersionNumber;
		SchemaVersionId?: string;
		MetadataList?: Array<MetadataKeyValuePair>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface QuerySchemaVersionMetadataInputFormProperties {
		SchemaVersionId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateQuerySchemaVersionMetadataInputFormGroup() {
		return new FormGroup<QuerySchemaVersionMetadataInputFormProperties>({
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterSchemaVersionResponse {
		SchemaVersionId?: string;
		VersionNumber?: number | null;
		Status?: SchemaVersionStatus;
	}
	export interface RegisterSchemaVersionResponseFormProperties {
		SchemaVersionId: FormControl<string | null | undefined>,
		VersionNumber: FormControl<number | null | undefined>,
		Status: FormControl<SchemaVersionStatus | null | undefined>,
	}
	export function CreateRegisterSchemaVersionResponseFormGroup() {
		return new FormGroup<RegisterSchemaVersionResponseFormProperties>({
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<SchemaVersionStatus | null | undefined>(undefined),
		});

	}

	export interface RegisterSchemaVersionInput {

		/** Required */
		SchemaId: SchemaId;

		/** Required */
		SchemaDefinition: string;
	}
	export interface RegisterSchemaVersionInputFormProperties {

		/** Required */
		SchemaDefinition: FormControl<string | null | undefined>,
	}
	export function CreateRegisterSchemaVersionInputFormGroup() {
		return new FormGroup<RegisterSchemaVersionInputFormProperties>({
			SchemaDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveSchemaVersionMetadataResponse {
		SchemaArn?: string;
		SchemaName?: string;
		RegistryName?: string;
		LatestVersion?: boolean | null;
		VersionNumber?: number | null;
		SchemaVersionId?: string;
		MetadataKey?: string;
		MetadataValue?: string;
	}
	export interface RemoveSchemaVersionMetadataResponseFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		RegistryName: FormControl<string | null | undefined>,
		LatestVersion: FormControl<boolean | null | undefined>,
		VersionNumber: FormControl<number | null | undefined>,
		SchemaVersionId: FormControl<string | null | undefined>,
		MetadataKey: FormControl<string | null | undefined>,
		MetadataValue: FormControl<string | null | undefined>,
	}
	export function CreateRemoveSchemaVersionMetadataResponseFormGroup() {
		return new FormGroup<RemoveSchemaVersionMetadataResponseFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			RegistryName: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<boolean | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined),
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
			MetadataKey: new FormControl<string | null | undefined>(undefined),
			MetadataValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveSchemaVersionMetadataInput {
		SchemaId?: SchemaId;
		SchemaVersionNumber?: SchemaVersionNumber;
		SchemaVersionId?: string;

		/** Required */
		MetadataKeyValue: MetadataKeyValuePair;
	}
	export interface RemoveSchemaVersionMetadataInputFormProperties {
		SchemaVersionId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveSchemaVersionMetadataInputFormGroup() {
		return new FormGroup<RemoveSchemaVersionMetadataInputFormProperties>({
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResetJobBookmarkResponse {
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
		RunId?: string;
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

	export interface ResumeWorkflowRunResponse {
		RunId?: string;
		NodeIds?: Array<string>;
	}
	export interface ResumeWorkflowRunResponseFormProperties {
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateResumeWorkflowRunResponseFormGroup() {
		return new FormGroup<ResumeWorkflowRunResponseFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResumeWorkflowRunRequest {

		/** Required */
		Name: string;

		/** Required */
		RunId: string;

		/** Required */
		NodeIds: Array<string>;
	}
	export interface ResumeWorkflowRunRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateResumeWorkflowRunRequestFormGroup() {
		return new FormGroup<ResumeWorkflowRunRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface IllegalWorkflowStateException {
	}
	export interface IllegalWorkflowStateExceptionFormProperties {
	}
	export function CreateIllegalWorkflowStateExceptionFormGroup() {
		return new FormGroup<IllegalWorkflowStateExceptionFormProperties>({
		});

	}

	export interface RunStatementResponse {
		Id?: number | null;
	}
	export interface RunStatementResponseFormProperties {
		Id: FormControl<number | null | undefined>,
	}
	export function CreateRunStatementResponseFormGroup() {
		return new FormGroup<RunStatementResponseFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RunStatementRequest {

		/** Required */
		SessionId: string;

		/** Required */
		Code: string;
		RequestOrigin?: string;
	}
	export interface RunStatementRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,

		/** Required */
		Code: FormControl<string | null | undefined>,
		RequestOrigin: FormControl<string | null | undefined>,
	}
	export function CreateRunStatementRequestFormGroup() {
		return new FormGroup<RunStatementRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequestOrigin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchTablesResponse {
		NextToken?: string;
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
		CatalogId?: string;
		NextToken?: string;
		Filters?: Array<PropertyPredicate>;
		SearchText?: string;
		SortCriteria?: Array<SortCriterion>;
		MaxResults?: number | null;
		ResourceShareType?: ResourceShareType;
	}
	export interface SearchTablesRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SearchText: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		ResourceShareType: FormControl<ResourceShareType | null | undefined>,
	}
	export function CreateSearchTablesRequestFormGroup() {
		return new FormGroup<SearchTablesRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SearchText: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			ResourceShareType: new FormControl<ResourceShareType | null | undefined>(undefined),
		});

	}


	/** Defines a property predicate. */
	export interface PropertyPredicate {
		Key?: string;
		Value?: string;
		Comparator?: Comparator;
	}

	/** Defines a property predicate. */
	export interface PropertyPredicateFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Comparator: FormControl<Comparator | null | undefined>,
	}
	export function CreatePropertyPredicateFormGroup() {
		return new FormGroup<PropertyPredicateFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Comparator: new FormControl<Comparator | null | undefined>(undefined),
		});

	}

	export enum Comparator { EQUALS = 'EQUALS', GREATER_THAN = 'GREATER_THAN', LESS_THAN = 'LESS_THAN', GREATER_THAN_EQUALS = 'GREATER_THAN_EQUALS', LESS_THAN_EQUALS = 'LESS_THAN_EQUALS' }


	/** Specifies a field to sort by and a sort order. */
	export interface SortCriterion {
		FieldName?: string;
		Sort?: Sort;
	}

	/** Specifies a field to sort by and a sort order. */
	export interface SortCriterionFormProperties {
		FieldName: FormControl<string | null | undefined>,
		Sort: FormControl<Sort | null | undefined>,
	}
	export function CreateSortCriterionFormGroup() {
		return new FormGroup<SortCriterionFormProperties>({
			FieldName: new FormControl<string | null | undefined>(undefined),
			Sort: new FormControl<Sort | null | undefined>(undefined),
		});

	}

	export enum Sort { ASC = 'ASC', DESC = 'DESC' }

	export interface StartBlueprintRunResponse {
		RunId?: string;
	}
	export interface StartBlueprintRunResponseFormProperties {
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateStartBlueprintRunResponseFormGroup() {
		return new FormGroup<StartBlueprintRunResponseFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartBlueprintRunRequest {

		/** Required */
		BlueprintName: string;
		Parameters?: string;

		/** Required */
		RoleArn: string;
	}
	export interface StartBlueprintRunRequestFormProperties {

		/** Required */
		BlueprintName: FormControl<string | null | undefined>,
		Parameters: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateStartBlueprintRunRequestFormGroup() {
		return new FormGroup<StartBlueprintRunRequestFormProperties>({
			BlueprintName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Parameters: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IllegalBlueprintStateException {
	}
	export interface IllegalBlueprintStateExceptionFormProperties {
	}
	export function CreateIllegalBlueprintStateExceptionFormGroup() {
		return new FormGroup<IllegalBlueprintStateExceptionFormProperties>({
		});

	}

	export interface StartCrawlerResponse {
	}
	export interface StartCrawlerResponseFormProperties {
	}
	export function CreateStartCrawlerResponseFormGroup() {
		return new FormGroup<StartCrawlerResponseFormProperties>({
		});

	}

	export interface StartCrawlerRequest {

		/** Required */
		Name: string;
	}
	export interface StartCrawlerRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartCrawlerRequestFormGroup() {
		return new FormGroup<StartCrawlerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		CrawlerName: string;
	}
	export interface StartCrawlerScheduleRequestFormProperties {

		/** Required */
		CrawlerName: FormControl<string | null | undefined>,
	}
	export function CreateStartCrawlerScheduleRequestFormGroup() {
		return new FormGroup<StartCrawlerScheduleRequestFormProperties>({
			CrawlerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface StartDataQualityRuleRecommendationRunResponse {
		RunId?: string;
	}
	export interface StartDataQualityRuleRecommendationRunResponseFormProperties {
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateStartDataQualityRuleRecommendationRunResponseFormGroup() {
		return new FormGroup<StartDataQualityRuleRecommendationRunResponseFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDataQualityRuleRecommendationRunRequest {

		/** Required */
		DataSource: DataSource;

		/** Required */
		Role: string;
		NumberOfWorkers?: number | null;
		Timeout?: number | null;
		CreatedRulesetName?: string;
		ClientToken?: string;
	}
	export interface StartDataQualityRuleRecommendationRunRequestFormProperties {

		/** Required */
		Role: FormControl<string | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		CreatedRulesetName: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartDataQualityRuleRecommendationRunRequestFormGroup() {
		return new FormGroup<StartDataQualityRuleRecommendationRunRequestFormProperties>({
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			CreatedRulesetName: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDataQualityRulesetEvaluationRunResponse {
		RunId?: string;
	}
	export interface StartDataQualityRulesetEvaluationRunResponseFormProperties {
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateStartDataQualityRulesetEvaluationRunResponseFormGroup() {
		return new FormGroup<StartDataQualityRulesetEvaluationRunResponseFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDataQualityRulesetEvaluationRunRequest {

		/** Required */
		DataSource: DataSource;

		/** Required */
		Role: string;
		NumberOfWorkers?: number | null;
		Timeout?: number | null;
		ClientToken?: string;
		AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions;

		/** Required */
		RulesetNames: Array<string>;
		AdditionalDataSources?: DataSourceMap;
	}
	export interface StartDataQualityRulesetEvaluationRunRequestFormProperties {

		/** Required */
		Role: FormControl<string | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartDataQualityRulesetEvaluationRunRequestFormGroup() {
		return new FormGroup<StartDataQualityRulesetEvaluationRunRequestFormProperties>({
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartExportLabelsTaskRunResponse {
		TaskRunId?: string;
	}
	export interface StartExportLabelsTaskRunResponseFormProperties {
		TaskRunId: FormControl<string | null | undefined>,
	}
	export function CreateStartExportLabelsTaskRunResponseFormGroup() {
		return new FormGroup<StartExportLabelsTaskRunResponseFormProperties>({
			TaskRunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartExportLabelsTaskRunRequest {

		/** Required */
		TransformId: string;

		/** Required */
		OutputS3Path: string;
	}
	export interface StartExportLabelsTaskRunRequestFormProperties {

		/** Required */
		TransformId: FormControl<string | null | undefined>,

		/** Required */
		OutputS3Path: FormControl<string | null | undefined>,
	}
	export function CreateStartExportLabelsTaskRunRequestFormGroup() {
		return new FormGroup<StartExportLabelsTaskRunRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputS3Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartImportLabelsTaskRunResponse {
		TaskRunId?: string;
	}
	export interface StartImportLabelsTaskRunResponseFormProperties {
		TaskRunId: FormControl<string | null | undefined>,
	}
	export function CreateStartImportLabelsTaskRunResponseFormGroup() {
		return new FormGroup<StartImportLabelsTaskRunResponseFormProperties>({
			TaskRunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartImportLabelsTaskRunRequest {

		/** Required */
		TransformId: string;

		/** Required */
		InputS3Path: string;
		ReplaceAllLabels?: boolean | null;
	}
	export interface StartImportLabelsTaskRunRequestFormProperties {

		/** Required */
		TransformId: FormControl<string | null | undefined>,

		/** Required */
		InputS3Path: FormControl<string | null | undefined>,
		ReplaceAllLabels: FormControl<boolean | null | undefined>,
	}
	export function CreateStartImportLabelsTaskRunRequestFormGroup() {
		return new FormGroup<StartImportLabelsTaskRunRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InputS3Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplaceAllLabels: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartJobRunResponse {
		JobRunId?: string;
	}
	export interface StartJobRunResponseFormProperties {
		JobRunId: FormControl<string | null | undefined>,
	}
	export function CreateStartJobRunResponseFormGroup() {
		return new FormGroup<StartJobRunResponseFormProperties>({
			JobRunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartJobRunRequest {

		/** Required */
		JobName: string;
		JobRunId?: string;
		Arguments?: GenericMap;
		AllocatedCapacity?: number | null;
		Timeout?: number | null;
		MaxCapacity?: number | null;
		SecurityConfiguration?: string;
		NotificationProperty?: NotificationProperty;
		WorkerType?: WorkerType;
		NumberOfWorkers?: number | null;
		ExecutionClass?: ExecutionClass;
	}
	export interface StartJobRunRequestFormProperties {

		/** Required */
		JobName: FormControl<string | null | undefined>,
		JobRunId: FormControl<string | null | undefined>,
		AllocatedCapacity: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		SecurityConfiguration: FormControl<string | null | undefined>,
		WorkerType: FormControl<WorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		ExecutionClass: FormControl<ExecutionClass | null | undefined>,
	}
	export function CreateStartJobRunRequestFormGroup() {
		return new FormGroup<StartJobRunRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobRunId: new FormControl<string | null | undefined>(undefined),
			AllocatedCapacity: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
			WorkerType: new FormControl<WorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			ExecutionClass: new FormControl<ExecutionClass | null | undefined>(undefined),
		});

	}

	export interface StartMLEvaluationTaskRunResponse {
		TaskRunId?: string;
	}
	export interface StartMLEvaluationTaskRunResponseFormProperties {
		TaskRunId: FormControl<string | null | undefined>,
	}
	export function CreateStartMLEvaluationTaskRunResponseFormGroup() {
		return new FormGroup<StartMLEvaluationTaskRunResponseFormProperties>({
			TaskRunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMLEvaluationTaskRunRequest {

		/** Required */
		TransformId: string;
	}
	export interface StartMLEvaluationTaskRunRequestFormProperties {

		/** Required */
		TransformId: FormControl<string | null | undefined>,
	}
	export function CreateStartMLEvaluationTaskRunRequestFormGroup() {
		return new FormGroup<StartMLEvaluationTaskRunRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		TaskRunId?: string;
	}
	export interface StartMLLabelingSetGenerationTaskRunResponseFormProperties {
		TaskRunId: FormControl<string | null | undefined>,
	}
	export function CreateStartMLLabelingSetGenerationTaskRunResponseFormGroup() {
		return new FormGroup<StartMLLabelingSetGenerationTaskRunResponseFormProperties>({
			TaskRunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMLLabelingSetGenerationTaskRunRequest {

		/** Required */
		TransformId: string;

		/** Required */
		OutputS3Path: string;
	}
	export interface StartMLLabelingSetGenerationTaskRunRequestFormProperties {

		/** Required */
		TransformId: FormControl<string | null | undefined>,

		/** Required */
		OutputS3Path: FormControl<string | null | undefined>,
	}
	export function CreateStartMLLabelingSetGenerationTaskRunRequestFormGroup() {
		return new FormGroup<StartMLLabelingSetGenerationTaskRunRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputS3Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartTriggerResponse {
		Name?: string;
	}
	export interface StartTriggerResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartTriggerResponseFormGroup() {
		return new FormGroup<StartTriggerResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartTriggerRequest {

		/** Required */
		Name: string;
	}
	export interface StartTriggerRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartTriggerRequestFormGroup() {
		return new FormGroup<StartTriggerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartWorkflowRunResponse {
		RunId?: string;
	}
	export interface StartWorkflowRunResponseFormProperties {
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateStartWorkflowRunResponseFormGroup() {
		return new FormGroup<StartWorkflowRunResponseFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartWorkflowRunRequest {

		/** Required */
		Name: string;
		RunProperties?: WorkflowRunProperties;
	}
	export interface StartWorkflowRunRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartWorkflowRunRequestFormGroup() {
		return new FormGroup<StartWorkflowRunRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;
	}
	export interface StopCrawlerRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopCrawlerRequestFormGroup() {
		return new FormGroup<StopCrawlerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		CrawlerName: string;
	}
	export interface StopCrawlerScheduleRequestFormProperties {

		/** Required */
		CrawlerName: FormControl<string | null | undefined>,
	}
	export function CreateStopCrawlerScheduleRequestFormGroup() {
		return new FormGroup<StopCrawlerScheduleRequestFormProperties>({
			CrawlerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface StopSessionResponse {
		Id?: string;
	}
	export interface StopSessionResponseFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateStopSessionResponseFormGroup() {
		return new FormGroup<StopSessionResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopSessionRequest {

		/** Required */
		Id: string;
		RequestOrigin?: string;
	}
	export interface StopSessionRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		RequestOrigin: FormControl<string | null | undefined>,
	}
	export function CreateStopSessionRequestFormGroup() {
		return new FormGroup<StopSessionRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequestOrigin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopTriggerResponse {
		Name?: string;
	}
	export interface StopTriggerResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopTriggerResponseFormGroup() {
		return new FormGroup<StopTriggerResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopTriggerRequest {

		/** Required */
		Name: string;
	}
	export interface StopTriggerRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopTriggerRequestFormGroup() {
		return new FormGroup<StopTriggerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;

		/** Required */
		RunId: string;
	}
	export interface StopWorkflowRunRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateStopWorkflowRunRequestFormGroup() {
		return new FormGroup<StopWorkflowRunRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		ResourceArn: string;

		/** Required */
		TagsToAdd: TagsMap;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		ResourceArn: string;

		/** Required */
		TagsToRemove: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateBlueprintResponse {
		Name?: string;
	}
	export interface UpdateBlueprintResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBlueprintResponseFormGroup() {
		return new FormGroup<UpdateBlueprintResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBlueprintRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		BlueprintLocation: string;
	}
	export interface UpdateBlueprintRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		BlueprintLocation: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBlueprintRequestFormGroup() {
		return new FormGroup<UpdateBlueprintRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			BlueprintLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		GrokClassifier?: UpdateGrokClassifierRequest;
		XMLClassifier?: UpdateXMLClassifierRequest;
		JsonClassifier?: UpdateJsonClassifierRequest;
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

		/** Required */
		Name: string;
		Classification?: string;
		GrokPattern?: string;
		CustomPatterns?: string;
	}

	/** Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>. */
	export interface UpdateGrokClassifierRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Classification: FormControl<string | null | undefined>,
		GrokPattern: FormControl<string | null | undefined>,
		CustomPatterns: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGrokClassifierRequestFormGroup() {
		return new FormGroup<UpdateGrokClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Classification: new FormControl<string | null | undefined>(undefined),
			GrokPattern: new FormControl<string | null | undefined>(undefined),
			CustomPatterns: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an XML classifier to be updated. */
	export interface UpdateXMLClassifierRequest {

		/** Required */
		Name: string;
		Classification?: string;
		RowTag?: string;
	}

	/** Specifies an XML classifier to be updated. */
	export interface UpdateXMLClassifierRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Classification: FormControl<string | null | undefined>,
		RowTag: FormControl<string | null | undefined>,
	}
	export function CreateUpdateXMLClassifierRequestFormGroup() {
		return new FormGroup<UpdateXMLClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Classification: new FormControl<string | null | undefined>(undefined),
			RowTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a JSON classifier to be updated. */
	export interface UpdateJsonClassifierRequest {

		/** Required */
		Name: string;
		JsonPath?: string;
	}

	/** Specifies a JSON classifier to be updated. */
	export interface UpdateJsonClassifierRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		JsonPath: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJsonClassifierRequestFormGroup() {
		return new FormGroup<UpdateJsonClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JsonPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a custom CSV classifier to be updated. */
	export interface UpdateCsvClassifierRequest {

		/** Required */
		Name: string;
		Delimiter?: string;
		QuoteSymbol?: string;
		ContainsHeader?: CsvHeaderOption;
		Header?: Array<string>;
		DisableValueTrimming?: boolean | null;
		AllowSingleColumn?: boolean | null;
		CustomDatatypeConfigured?: boolean | null;
		CustomDatatypes?: Array<string>;
	}

	/** Specifies a custom CSV classifier to be updated. */
	export interface UpdateCsvClassifierRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Delimiter: FormControl<string | null | undefined>,
		QuoteSymbol: FormControl<string | null | undefined>,
		ContainsHeader: FormControl<CsvHeaderOption | null | undefined>,
		DisableValueTrimming: FormControl<boolean | null | undefined>,
		AllowSingleColumn: FormControl<boolean | null | undefined>,
		CustomDatatypeConfigured: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateCsvClassifierRequestFormGroup() {
		return new FormGroup<UpdateCsvClassifierRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Delimiter: new FormControl<string | null | undefined>(undefined),
			QuoteSymbol: new FormControl<string | null | undefined>(undefined),
			ContainsHeader: new FormControl<CsvHeaderOption | null | undefined>(undefined),
			DisableValueTrimming: new FormControl<boolean | null | undefined>(undefined),
			AllowSingleColumn: new FormControl<boolean | null | undefined>(undefined),
			CustomDatatypeConfigured: new FormControl<boolean | null | undefined>(undefined),
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

	export interface UpdateColumnStatisticsForPartitionResponse {
		Errors?: Array<ColumnStatisticsError>;
	}
	export interface UpdateColumnStatisticsForPartitionResponseFormProperties {
	}
	export function CreateUpdateColumnStatisticsForPartitionResponseFormGroup() {
		return new FormGroup<UpdateColumnStatisticsForPartitionResponseFormProperties>({
		});

	}


	/** Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure. */
	export interface ColumnStatisticsError {
		ColumnStatistics?: ColumnStatistics;
		Error?: ErrorDetail;
	}

	/** Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure. */
	export interface ColumnStatisticsErrorFormProperties {
	}
	export function CreateColumnStatisticsErrorFormGroup() {
		return new FormGroup<ColumnStatisticsErrorFormProperties>({
		});

	}

	export interface UpdateColumnStatisticsForPartitionRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		PartitionValues: Array<string>;

		/** Required */
		ColumnStatisticsList: Array<ColumnStatistics>;
	}
	export interface UpdateColumnStatisticsForPartitionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateColumnStatisticsForPartitionRequestFormGroup() {
		return new FormGroup<UpdateColumnStatisticsForPartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateColumnStatisticsForTableResponse {
		Errors?: Array<ColumnStatisticsError>;
	}
	export interface UpdateColumnStatisticsForTableResponseFormProperties {
	}
	export function CreateUpdateColumnStatisticsForTableResponseFormGroup() {
		return new FormGroup<UpdateColumnStatisticsForTableResponseFormProperties>({
		});

	}

	export interface UpdateColumnStatisticsForTableRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		ColumnStatisticsList: Array<ColumnStatistics>;
	}
	export interface UpdateColumnStatisticsForTableRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateColumnStatisticsForTableRequestFormGroup() {
		return new FormGroup<UpdateColumnStatisticsForTableRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		CatalogId?: string;

		/** Required */
		Name: string;

		/** Required */
		ConnectionInput: ConnectionInput;
	}
	export interface UpdateConnectionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectionRequestFormGroup() {
		return new FormGroup<UpdateConnectionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;
		Role?: string;
		DatabaseName?: string;
		Description?: string;
		Targets?: CrawlerTargets;
		Schedule?: string;
		Classifiers?: Array<string>;
		TablePrefix?: string;
		SchemaChangePolicy?: SchemaChangePolicy;
		RecrawlPolicy?: RecrawlPolicy;
		LineageConfiguration?: LineageConfiguration;
		LakeFormationConfiguration?: LakeFormationConfiguration;
		Configuration?: string;
		CrawlerSecurityConfiguration?: string;
	}
	export interface UpdateCrawlerRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		TablePrefix: FormControl<string | null | undefined>,
		Configuration: FormControl<string | null | undefined>,
		CrawlerSecurityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCrawlerRequestFormGroup() {
		return new FormGroup<UpdateCrawlerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Role: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
			TablePrefix: new FormControl<string | null | undefined>(undefined),
			Configuration: new FormControl<string | null | undefined>(undefined),
			CrawlerSecurityConfiguration: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		CrawlerName: string;
		Schedule?: string;
	}
	export interface UpdateCrawlerScheduleRequestFormProperties {

		/** Required */
		CrawlerName: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCrawlerScheduleRequestFormGroup() {
		return new FormGroup<UpdateCrawlerScheduleRequestFormProperties>({
			CrawlerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Schedule: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataQualityRulesetResponse {
		Name?: string;
		Description?: string;
		Ruleset?: string;
	}
	export interface UpdateDataQualityRulesetResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Ruleset: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataQualityRulesetResponseFormGroup() {
		return new FormGroup<UpdateDataQualityRulesetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Ruleset: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataQualityRulesetRequest {

		/** Required */
		Name: string;
		Description?: string;
		Ruleset?: string;
	}
	export interface UpdateDataQualityRulesetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Ruleset: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataQualityRulesetRequestFormGroup() {
		return new FormGroup<UpdateDataQualityRulesetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Ruleset: new FormControl<string | null | undefined>(undefined),
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
		CatalogId?: string;

		/** Required */
		Name: string;

		/** Required */
		DatabaseInput: DatabaseInput;
	}
	export interface UpdateDatabaseRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatabaseRequestFormGroup() {
		return new FormGroup<UpdateDatabaseRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		PublicKey?: string;
		AddPublicKeys?: Array<string>;
		DeletePublicKeys?: Array<string>;
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
		ExtraPythonLibsS3Path?: string;
		ExtraJarsS3Path?: string;
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
		JobName?: string;
	}
	export interface UpdateJobResponseFormProperties {
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobResponseFormGroup() {
		return new FormGroup<UpdateJobResponseFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateJobRequest {

		/** Required */
		JobName: string;

		/** Required */
		JobUpdate: JobUpdate;
	}
	export interface UpdateJobRequestFormProperties {

		/** Required */
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobRequestFormGroup() {
		return new FormGroup<UpdateJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information. */
	export interface JobUpdate {
		Description?: string;
		LogUri?: string;
		Role?: string;
		ExecutionProperty?: ExecutionProperty;
		Command?: JobCommand;
		DefaultArguments?: GenericMap;
		NonOverridableArguments?: GenericMap;
		Connections?: ConnectionsList;
		MaxRetries?: number | null;
		AllocatedCapacity?: number | null;
		Timeout?: number | null;
		MaxCapacity?: number | null;
		WorkerType?: WorkerType;
		NumberOfWorkers?: number | null;
		SecurityConfiguration?: string;
		NotificationProperty?: NotificationProperty;
		GlueVersion?: string;
		CodeGenConfigurationNodes?: CodeGenConfigurationNodes;
		ExecutionClass?: ExecutionClass;
		SourceControlDetails?: SourceControlDetails;
	}

	/** Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information. */
	export interface JobUpdateFormProperties {
		Description: FormControl<string | null | undefined>,
		LogUri: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
		AllocatedCapacity: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<WorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		SecurityConfiguration: FormControl<string | null | undefined>,
		GlueVersion: FormControl<string | null | undefined>,
		ExecutionClass: FormControl<ExecutionClass | null | undefined>,
	}
	export function CreateJobUpdateFormGroup() {
		return new FormGroup<JobUpdateFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
			AllocatedCapacity: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<WorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
			ExecutionClass: new FormControl<ExecutionClass | null | undefined>(undefined),
		});

	}

	export interface UpdateJobFromSourceControlResponse {
		JobName?: string;
	}
	export interface UpdateJobFromSourceControlResponseFormProperties {
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobFromSourceControlResponseFormGroup() {
		return new FormGroup<UpdateJobFromSourceControlResponseFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateJobFromSourceControlRequest {
		JobName?: string;
		Provider?: SourceControlProvider;
		RepositoryName?: string;
		RepositoryOwner?: string;
		BranchName?: string;
		Folder?: string;
		CommitId?: string;
		AuthStrategy?: SourceControlAuthStrategy;
		AuthToken?: string;
	}
	export interface UpdateJobFromSourceControlRequestFormProperties {
		JobName: FormControl<string | null | undefined>,
		Provider: FormControl<SourceControlProvider | null | undefined>,
		RepositoryName: FormControl<string | null | undefined>,
		RepositoryOwner: FormControl<string | null | undefined>,
		BranchName: FormControl<string | null | undefined>,
		Folder: FormControl<string | null | undefined>,
		CommitId: FormControl<string | null | undefined>,
		AuthStrategy: FormControl<SourceControlAuthStrategy | null | undefined>,
		AuthToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobFromSourceControlRequestFormGroup() {
		return new FormGroup<UpdateJobFromSourceControlRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			Provider: new FormControl<SourceControlProvider | null | undefined>(undefined),
			RepositoryName: new FormControl<string | null | undefined>(undefined),
			RepositoryOwner: new FormControl<string | null | undefined>(undefined),
			BranchName: new FormControl<string | null | undefined>(undefined),
			Folder: new FormControl<string | null | undefined>(undefined),
			CommitId: new FormControl<string | null | undefined>(undefined),
			AuthStrategy: new FormControl<SourceControlAuthStrategy | null | undefined>(undefined),
			AuthToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMLTransformResponse {
		TransformId?: string;
	}
	export interface UpdateMLTransformResponseFormProperties {
		TransformId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMLTransformResponseFormGroup() {
		return new FormGroup<UpdateMLTransformResponseFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMLTransformRequest {

		/** Required */
		TransformId: string;
		Name?: string;
		Description?: string;
		Parameters?: TransformParameters;
		Role?: string;
		GlueVersion?: string;
		MaxCapacity?: number | null;
		WorkerType?: WorkerType;
		NumberOfWorkers?: number | null;
		Timeout?: number | null;
		MaxRetries?: number | null;
	}
	export interface UpdateMLTransformRequestFormProperties {

		/** Required */
		TransformId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		GlueVersion: FormControl<string | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		WorkerType: FormControl<WorkerType | null | undefined>,
		NumberOfWorkers: FormControl<number | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMLTransformRequestFormGroup() {
		return new FormGroup<UpdateMLTransformRequestFormProperties>({
			TransformId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			GlueVersion: new FormControl<string | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			WorkerType: new FormControl<WorkerType | null | undefined>(undefined),
			NumberOfWorkers: new FormControl<number | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
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
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		PartitionValueList: Array<string>;

		/** Required */
		PartitionInput: PartitionInput;
	}
	export interface UpdatePartitionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePartitionRequestFormGroup() {
		return new FormGroup<UpdatePartitionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRegistryResponse {
		RegistryName?: string;
		RegistryArn?: string;
	}
	export interface UpdateRegistryResponseFormProperties {
		RegistryName: FormControl<string | null | undefined>,
		RegistryArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegistryResponseFormGroup() {
		return new FormGroup<UpdateRegistryResponseFormProperties>({
			RegistryName: new FormControl<string | null | undefined>(undefined),
			RegistryArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRegistryInput {

		/** Required */
		RegistryId: RegistryId;

		/** Required */
		Description: string;
	}
	export interface UpdateRegistryInputFormProperties {

		/** Required */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegistryInputFormGroup() {
		return new FormGroup<UpdateRegistryInputFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSchemaResponse {
		SchemaArn?: string;
		SchemaName?: string;
		RegistryName?: string;
	}
	export interface UpdateSchemaResponseFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		RegistryName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSchemaResponseFormGroup() {
		return new FormGroup<UpdateSchemaResponseFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			RegistryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSchemaInput {

		/** Required */
		SchemaId: SchemaId;
		SchemaVersionNumber?: SchemaVersionNumber;
		Compatibility?: Compatibility;
		Description?: string;
	}
	export interface UpdateSchemaInputFormProperties {
		Compatibility: FormControl<Compatibility | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSchemaInputFormGroup() {
		return new FormGroup<UpdateSchemaInputFormProperties>({
			Compatibility: new FormControl<Compatibility | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSourceControlFromJobResponse {
		JobName?: string;
	}
	export interface UpdateSourceControlFromJobResponseFormProperties {
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSourceControlFromJobResponseFormGroup() {
		return new FormGroup<UpdateSourceControlFromJobResponseFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSourceControlFromJobRequest {
		JobName?: string;
		Provider?: SourceControlProvider;
		RepositoryName?: string;
		RepositoryOwner?: string;
		BranchName?: string;
		Folder?: string;
		CommitId?: string;
		AuthStrategy?: SourceControlAuthStrategy;
		AuthToken?: string;
	}
	export interface UpdateSourceControlFromJobRequestFormProperties {
		JobName: FormControl<string | null | undefined>,
		Provider: FormControl<SourceControlProvider | null | undefined>,
		RepositoryName: FormControl<string | null | undefined>,
		RepositoryOwner: FormControl<string | null | undefined>,
		BranchName: FormControl<string | null | undefined>,
		Folder: FormControl<string | null | undefined>,
		CommitId: FormControl<string | null | undefined>,
		AuthStrategy: FormControl<SourceControlAuthStrategy | null | undefined>,
		AuthToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSourceControlFromJobRequestFormGroup() {
		return new FormGroup<UpdateSourceControlFromJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			Provider: new FormControl<SourceControlProvider | null | undefined>(undefined),
			RepositoryName: new FormControl<string | null | undefined>(undefined),
			RepositoryOwner: new FormControl<string | null | undefined>(undefined),
			BranchName: new FormControl<string | null | undefined>(undefined),
			Folder: new FormControl<string | null | undefined>(undefined),
			CommitId: new FormControl<string | null | undefined>(undefined),
			AuthStrategy: new FormControl<SourceControlAuthStrategy | null | undefined>(undefined),
			AuthToken: new FormControl<string | null | undefined>(undefined),
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
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableInput: TableInput;
		SkipArchive?: boolean | null;
		TransactionId?: string;
		VersionId?: string;
	}
	export interface UpdateTableRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
		SkipArchive: FormControl<boolean | null | undefined>,
		TransactionId: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableRequestFormGroup() {
		return new FormGroup<UpdateTableRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SkipArchive: new FormControl<boolean | null | undefined>(undefined),
			TransactionId: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTriggerResponse {
		Trigger?: Trigger;
	}
	export interface UpdateTriggerResponseFormProperties {
	}
	export function CreateUpdateTriggerResponseFormGroup() {
		return new FormGroup<UpdateTriggerResponseFormProperties>({
		});

	}

	export interface UpdateTriggerRequest {

		/** Required */
		Name: string;

		/** Required */
		TriggerUpdate: TriggerUpdate;
	}
	export interface UpdateTriggerRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTriggerRequestFormGroup() {
		return new FormGroup<UpdateTriggerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely. */
	export interface TriggerUpdate {
		Name?: string;
		Description?: string;
		Schedule?: string;
		Actions?: Array<Action>;
		Predicate?: Predicate;
		EventBatchingCondition?: EventBatchingCondition;
	}

	/** A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely. */
	export interface TriggerUpdateFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
	}
	export function CreateTriggerUpdateFormGroup() {
		return new FormGroup<TriggerUpdateFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
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
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		FunctionName: string;

		/** Required */
		FunctionInput: UserDefinedFunctionInput;
	}
	export interface UpdateUserDefinedFunctionRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		FunctionName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserDefinedFunctionRequestFormGroup() {
		return new FormGroup<UpdateUserDefinedFunctionRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWorkflowResponse {
		Name?: string;
	}
	export interface UpdateWorkflowResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkflowResponseFormGroup() {
		return new FormGroup<UpdateWorkflowResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkflowRequest {

		/** Required */
		Name: string;
		Description?: string;
		DefaultRunProperties?: WorkflowRunProperties;
		MaxConcurrentRuns?: number | null;
	}
	export interface UpdateWorkflowRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		MaxConcurrentRuns: FormControl<number | null | undefined>,
	}
	export function CreateUpdateWorkflowRequestFormGroup() {
		return new FormGroup<UpdateWorkflowRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			MaxConcurrentRuns: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AdditionalOptionKeys { 'performanceTuning.caching' = 'performanceTuning.caching' }

	export interface AdditionalOptions {
	}
	export interface AdditionalOptionsFormProperties {
	}
	export function CreateAdditionalOptionsFormGroup() {
		return new FormGroup<AdditionalOptionsFormProperties>({
		});

	}

	export enum AggFunction { avg = 'avg', countDistinct = 'countDistinct', count = 'count', first = 'first', last = 'last', kurtosis = 'kurtosis', max = 'max', min = 'min', skewness = 'skewness', stddev_samp = 'stddev_samp', stddev_pop = 'stddev_pop', sum = 'sum', sumDistinct = 'sumDistinct', var_samp = 'var_samp', var_pop = 'var_pop' }


	/** Specifies the set of parameters needed to perform aggregation in the aggregate transform. */
	export interface AggregateOperation {

		/** Required */
		Column: Array<string>;

		/** Required */
		AggFunc: AggFunction;
	}

	/** Specifies the set of parameters needed to perform aggregation in the aggregate transform. */
	export interface AggregateOperationFormProperties {

		/** Required */
		AggFunc: FormControl<AggFunction | null | undefined>,
	}
	export function CreateAggregateOperationFormGroup() {
		return new FormGroup<AggregateOperationFormProperties>({
			AggFunc: new FormControl<AggFunction | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a transform that groups rows by chosen fields and computes the aggregated value by specified function. */
	export interface Aggregate {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Groups: Array<Array<string>>;

		/** Required */
		Aggs: Array<AggregateOperation>;
	}

	/** Specifies a transform that groups rows by chosen fields and computes the aggregated value by specified function. */
	export interface AggregateFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAggregateFormGroup() {
		return new FormGroup<AggregateFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies an optional value when connecting to the Redshift cluster. */
	export interface AmazonRedshiftAdvancedOption {
		Key?: string;
		Value?: string;
	}

	/** Specifies an optional value when connecting to the Redshift cluster. */
	export interface AmazonRedshiftAdvancedOptionFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAmazonRedshiftAdvancedOptionFormGroup() {
		return new FormGroup<AmazonRedshiftAdvancedOptionFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an option value. */
	export interface Option {
		Value?: string;
		Label?: string;
		Description?: string;
	}

	/** Specifies an option value. */
	export interface OptionFormProperties {
		Value: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateOptionFormGroup() {
		return new FormGroup<OptionFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			Label: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an Amazon Redshift node. */
	export interface AmazonRedshiftNodeData {
		AccessType?: string;
		SourceType?: string;
		Connection?: Option;
		Schema?: Option;
		Table?: Option;
		CatalogDatabase?: Option;
		CatalogTable?: Option;
		CatalogRedshiftSchema?: string;
		CatalogRedshiftTable?: string;
		TempDir?: string;
		IamRole?: Option;
		AdvancedOptions?: Array<AmazonRedshiftAdvancedOption>;
		SampleQuery?: string;
		PreAction?: string;
		PostAction?: string;
		Action?: string;
		TablePrefix?: string;
		Upsert?: boolean | null;
		MergeAction?: string;
		MergeWhenMatched?: string;
		MergeWhenNotMatched?: string;
		MergeClause?: string;
		CrawlerConnection?: string;
		TableSchema?: Array<Option>;
		StagingTable?: string;
		SelectedColumns?: Array<Option>;
	}

	/** Specifies an Amazon Redshift node. */
	export interface AmazonRedshiftNodeDataFormProperties {
		AccessType: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		CatalogRedshiftSchema: FormControl<string | null | undefined>,
		CatalogRedshiftTable: FormControl<string | null | undefined>,
		TempDir: FormControl<string | null | undefined>,
		SampleQuery: FormControl<string | null | undefined>,
		PreAction: FormControl<string | null | undefined>,
		PostAction: FormControl<string | null | undefined>,
		Action: FormControl<string | null | undefined>,
		TablePrefix: FormControl<string | null | undefined>,
		Upsert: FormControl<boolean | null | undefined>,
		MergeAction: FormControl<string | null | undefined>,
		MergeWhenMatched: FormControl<string | null | undefined>,
		MergeWhenNotMatched: FormControl<string | null | undefined>,
		MergeClause: FormControl<string | null | undefined>,
		CrawlerConnection: FormControl<string | null | undefined>,
		StagingTable: FormControl<string | null | undefined>,
	}
	export function CreateAmazonRedshiftNodeDataFormGroup() {
		return new FormGroup<AmazonRedshiftNodeDataFormProperties>({
			AccessType: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			CatalogRedshiftSchema: new FormControl<string | null | undefined>(undefined),
			CatalogRedshiftTable: new FormControl<string | null | undefined>(undefined),
			TempDir: new FormControl<string | null | undefined>(undefined),
			SampleQuery: new FormControl<string | null | undefined>(undefined),
			PreAction: new FormControl<string | null | undefined>(undefined),
			PostAction: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<string | null | undefined>(undefined),
			TablePrefix: new FormControl<string | null | undefined>(undefined),
			Upsert: new FormControl<boolean | null | undefined>(undefined),
			MergeAction: new FormControl<string | null | undefined>(undefined),
			MergeWhenMatched: new FormControl<string | null | undefined>(undefined),
			MergeWhenNotMatched: new FormControl<string | null | undefined>(undefined),
			MergeClause: new FormControl<string | null | undefined>(undefined),
			CrawlerConnection: new FormControl<string | null | undefined>(undefined),
			StagingTable: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an Amazon Redshift source. */
	export interface AmazonRedshiftSource {
		Name?: string;
		Data?: AmazonRedshiftNodeData;
	}

	/** Specifies an Amazon Redshift source. */
	export interface AmazonRedshiftSourceFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAmazonRedshiftSourceFormGroup() {
		return new FormGroup<AmazonRedshiftSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an Amazon Redshift target. */
	export interface AmazonRedshiftTarget {
		Name?: string;
		Data?: AmazonRedshiftNodeData;
		Inputs?: Array<string>;
	}

	/** Specifies an Amazon Redshift target. */
	export interface AmazonRedshiftTargetFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAmazonRedshiftTargetFormGroup() {
		return new FormGroup<AmazonRedshiftTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the mapping of data property keys. */
	export interface Mapping {
		ToKey?: string;
		FromPath?: Array<string>;
		FromType?: string;
		ToType?: string;
		Dropped?: boolean | null;
		Children?: Array<Mapping>;
	}

	/** Specifies the mapping of data property keys. */
	export interface MappingFormProperties {
		ToKey: FormControl<string | null | undefined>,
		FromType: FormControl<string | null | undefined>,
		ToType: FormControl<string | null | undefined>,
		Dropped: FormControl<boolean | null | undefined>,
	}
	export function CreateMappingFormGroup() {
		return new FormGroup<MappingFormProperties>({
			ToKey: new FormControl<string | null | undefined>(undefined),
			FromType: new FormControl<string | null | undefined>(undefined),
			ToType: new FormControl<string | null | undefined>(undefined),
			Dropped: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies a transform that maps data property keys in the data source to data property keys in the data target. You can rename keys, modify the data types for keys, and choose which keys to drop from the dataset. */
	export interface ApplyMapping {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Mapping: Array<Mapping>;
	}

	/** Specifies a transform that maps data property keys in the data source to data property keys in the data target. You can rename keys, modify the data types for keys, and choose which keys to drop from the dataset. */
	export interface ApplyMappingFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateApplyMappingFormGroup() {
		return new FormGroup<ApplyMappingFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a user-defined schema when a schema cannot be determined by Glue. */
	export interface GlueSchema {
		Columns?: Array<GlueStudioSchemaColumn>;
	}

	/** Specifies a user-defined schema when a schema cannot be determined by Glue. */
	export interface GlueSchemaFormProperties {
	}
	export function CreateGlueSchemaFormGroup() {
		return new FormGroup<GlueSchemaFormProperties>({
		});

	}


	/** Specifies a single column in a Glue schema definition. */
	export interface GlueStudioSchemaColumn {

		/** Required */
		Name: string;
		Type?: string;
	}

	/** Specifies a single column in a Glue schema definition. */
	export interface GlueStudioSchemaColumnFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateGlueStudioSchemaColumnFormGroup() {
		return new FormGroup<GlueStudioSchemaColumnFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a connector to an Amazon Athena data source. */
	export interface AthenaConnectorSource {

		/** Required */
		Name: string;

		/** Required */
		ConnectionName: string;

		/** Required */
		ConnectorName: string;

		/** Required */
		ConnectionType: string;
		ConnectionTable?: string;

		/** Required */
		SchemaName: string;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a connector to an Amazon Athena data source. */
	export interface AthenaConnectorSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ConnectionName: FormControl<string | null | undefined>,

		/** Required */
		ConnectorName: FormControl<string | null | undefined>,

		/** Required */
		ConnectionType: FormControl<string | null | undefined>,
		ConnectionTable: FormControl<string | null | undefined>,

		/** Required */
		SchemaName: FormControl<string | null | undefined>,
	}
	export function CreateAthenaConnectorSourceFormGroup() {
		return new FormGroup<AthenaConnectorSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionTable: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a target that uses a Glue Data Catalog table. */
	export interface BasicCatalogTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
	}

	/** Specifies a target that uses a Glue Data Catalog table. */
	export interface BasicCatalogTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateBasicCatalogTargetFormGroup() {
		return new FormGroup<BasicCatalogTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a Delta Lake data source that is registered in the Glue Data Catalog. */
	export interface CatalogDeltaSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
		AdditionalDeltaOptions?: AdditionalOptions;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a Delta Lake data source that is registered in the Glue Data Catalog. */
	export interface CatalogDeltaSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateCatalogDeltaSourceFormGroup() {
		return new FormGroup<CatalogDeltaSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CatalogEncryptionMode { DISABLED = 'DISABLED', 'SSE-KMS' = 'SSE-KMS' }


	/** Specifies a Hudi data source that is registered in the Glue Data Catalog. */
	export interface CatalogHudiSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
		AdditionalHudiOptions?: AdditionalOptions;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a Hudi data source that is registered in the Glue Data Catalog. */
	export interface CatalogHudiSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateCatalogHudiSourceFormGroup() {
		return new FormGroup<CatalogHudiSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Additional options for streaming. */
	export interface KafkaStreamingSourceOptions {
		BootstrapServers?: string;
		SecurityProtocol?: string;
		ConnectionName?: string;
		TopicName?: string;
		Assign?: string;
		SubscribePattern?: string;
		Classification?: string;
		Delimiter?: string;
		StartingOffsets?: string;
		EndingOffsets?: string;
		PollTimeoutMs?: number | null;
		NumRetries?: number | null;
		RetryIntervalMs?: number | null;
		MaxOffsetsPerTrigger?: number | null;
		MinPartitions?: number | null;
		IncludeHeaders?: boolean | null;
		AddRecordTimestamp?: string;
		EmitConsumerLagMetrics?: string;
		StartingTimestamp?: Date;
	}

	/** Additional options for streaming. */
	export interface KafkaStreamingSourceOptionsFormProperties {
		BootstrapServers: FormControl<string | null | undefined>,
		SecurityProtocol: FormControl<string | null | undefined>,
		ConnectionName: FormControl<string | null | undefined>,
		TopicName: FormControl<string | null | undefined>,
		Assign: FormControl<string | null | undefined>,
		SubscribePattern: FormControl<string | null | undefined>,
		Classification: FormControl<string | null | undefined>,
		Delimiter: FormControl<string | null | undefined>,
		StartingOffsets: FormControl<string | null | undefined>,
		EndingOffsets: FormControl<string | null | undefined>,
		PollTimeoutMs: FormControl<number | null | undefined>,
		NumRetries: FormControl<number | null | undefined>,
		RetryIntervalMs: FormControl<number | null | undefined>,
		MaxOffsetsPerTrigger: FormControl<number | null | undefined>,
		MinPartitions: FormControl<number | null | undefined>,
		IncludeHeaders: FormControl<boolean | null | undefined>,
		AddRecordTimestamp: FormControl<string | null | undefined>,
		EmitConsumerLagMetrics: FormControl<string | null | undefined>,
		StartingTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateKafkaStreamingSourceOptionsFormGroup() {
		return new FormGroup<KafkaStreamingSourceOptionsFormProperties>({
			BootstrapServers: new FormControl<string | null | undefined>(undefined),
			SecurityProtocol: new FormControl<string | null | undefined>(undefined),
			ConnectionName: new FormControl<string | null | undefined>(undefined),
			TopicName: new FormControl<string | null | undefined>(undefined),
			Assign: new FormControl<string | null | undefined>(undefined),
			SubscribePattern: new FormControl<string | null | undefined>(undefined),
			Classification: new FormControl<string | null | undefined>(undefined),
			Delimiter: new FormControl<string | null | undefined>(undefined),
			StartingOffsets: new FormControl<string | null | undefined>(undefined),
			EndingOffsets: new FormControl<string | null | undefined>(undefined),
			PollTimeoutMs: new FormControl<number | null | undefined>(undefined),
			NumRetries: new FormControl<number | null | undefined>(undefined),
			RetryIntervalMs: new FormControl<number | null | undefined>(undefined),
			MaxOffsetsPerTrigger: new FormControl<number | null | undefined>(undefined),
			MinPartitions: new FormControl<number | null | undefined>(undefined),
			IncludeHeaders: new FormControl<boolean | null | undefined>(undefined),
			AddRecordTimestamp: new FormControl<string | null | undefined>(undefined),
			EmitConsumerLagMetrics: new FormControl<string | null | undefined>(undefined),
			StartingTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Specifies options related to data preview for viewing a sample of your data. */
	export interface StreamingDataPreviewOptions {
		PollingTime?: number | null;
		RecordPollingLimit?: number | null;
	}

	/** Specifies options related to data preview for viewing a sample of your data. */
	export interface StreamingDataPreviewOptionsFormProperties {
		PollingTime: FormControl<number | null | undefined>,
		RecordPollingLimit: FormControl<number | null | undefined>,
	}
	export function CreateStreamingDataPreviewOptionsFormGroup() {
		return new FormGroup<StreamingDataPreviewOptionsFormProperties>({
			PollingTime: new FormControl<number | null | undefined>(undefined),
			RecordPollingLimit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies an Apache Kafka data store in the Data Catalog. */
	export interface CatalogKafkaSource {

		/** Required */
		Name: string;
		WindowSize?: number | null;
		DetectSchema?: boolean | null;

		/** Required */
		Table: string;

		/** Required */
		Database: string;
		StreamingOptions?: KafkaStreamingSourceOptions;
		DataPreviewOptions?: StreamingDataPreviewOptions;
	}

	/** Specifies an Apache Kafka data store in the Data Catalog. */
	export interface CatalogKafkaSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		WindowSize: FormControl<number | null | undefined>,
		DetectSchema: FormControl<boolean | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,
	}
	export function CreateCatalogKafkaSourceFormGroup() {
		return new FormGroup<CatalogKafkaSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WindowSize: new FormControl<number | null | undefined>(undefined),
			DetectSchema: new FormControl<boolean | null | undefined>(undefined),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Additional options for the Amazon Kinesis streaming data source. */
	export interface KinesisStreamingSourceOptions {
		EndpointUrl?: string;
		StreamName?: string;
		Classification?: string;
		Delimiter?: string;
		StartingPosition?: StartingPosition;
		MaxFetchTimeInMs?: number | null;
		MaxFetchRecordsPerShard?: number | null;
		MaxRecordPerRead?: number | null;
		AddIdleTimeBetweenReads?: boolean | null;
		IdleTimeBetweenReadsInMs?: number | null;
		DescribeShardInterval?: number | null;
		NumRetries?: number | null;
		RetryIntervalMs?: number | null;
		MaxRetryIntervalMs?: number | null;
		AvoidEmptyBatches?: boolean | null;
		StreamArn?: string;
		RoleArn?: string;
		RoleSessionName?: string;
		AddRecordTimestamp?: string;
		EmitConsumerLagMetrics?: string;
		StartingTimestamp?: Date;
	}

	/** Additional options for the Amazon Kinesis streaming data source. */
	export interface KinesisStreamingSourceOptionsFormProperties {
		EndpointUrl: FormControl<string | null | undefined>,
		StreamName: FormControl<string | null | undefined>,
		Classification: FormControl<string | null | undefined>,
		Delimiter: FormControl<string | null | undefined>,
		StartingPosition: FormControl<StartingPosition | null | undefined>,
		MaxFetchTimeInMs: FormControl<number | null | undefined>,
		MaxFetchRecordsPerShard: FormControl<number | null | undefined>,
		MaxRecordPerRead: FormControl<number | null | undefined>,
		AddIdleTimeBetweenReads: FormControl<boolean | null | undefined>,
		IdleTimeBetweenReadsInMs: FormControl<number | null | undefined>,
		DescribeShardInterval: FormControl<number | null | undefined>,
		NumRetries: FormControl<number | null | undefined>,
		RetryIntervalMs: FormControl<number | null | undefined>,
		MaxRetryIntervalMs: FormControl<number | null | undefined>,
		AvoidEmptyBatches: FormControl<boolean | null | undefined>,
		StreamArn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		RoleSessionName: FormControl<string | null | undefined>,
		AddRecordTimestamp: FormControl<string | null | undefined>,
		EmitConsumerLagMetrics: FormControl<string | null | undefined>,
		StartingTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateKinesisStreamingSourceOptionsFormGroup() {
		return new FormGroup<KinesisStreamingSourceOptionsFormProperties>({
			EndpointUrl: new FormControl<string | null | undefined>(undefined),
			StreamName: new FormControl<string | null | undefined>(undefined),
			Classification: new FormControl<string | null | undefined>(undefined),
			Delimiter: new FormControl<string | null | undefined>(undefined),
			StartingPosition: new FormControl<StartingPosition | null | undefined>(undefined),
			MaxFetchTimeInMs: new FormControl<number | null | undefined>(undefined),
			MaxFetchRecordsPerShard: new FormControl<number | null | undefined>(undefined),
			MaxRecordPerRead: new FormControl<number | null | undefined>(undefined),
			AddIdleTimeBetweenReads: new FormControl<boolean | null | undefined>(undefined),
			IdleTimeBetweenReadsInMs: new FormControl<number | null | undefined>(undefined),
			DescribeShardInterval: new FormControl<number | null | undefined>(undefined),
			NumRetries: new FormControl<number | null | undefined>(undefined),
			RetryIntervalMs: new FormControl<number | null | undefined>(undefined),
			MaxRetryIntervalMs: new FormControl<number | null | undefined>(undefined),
			AvoidEmptyBatches: new FormControl<boolean | null | undefined>(undefined),
			StreamArn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			RoleSessionName: new FormControl<string | null | undefined>(undefined),
			AddRecordTimestamp: new FormControl<string | null | undefined>(undefined),
			EmitConsumerLagMetrics: new FormControl<string | null | undefined>(undefined),
			StartingTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum StartingPosition { latest = 'latest', trim_horizon = 'trim_horizon', earliest = 'earliest', timestamp = 'timestamp' }


	/** Specifies a Kinesis data source in the Glue Data Catalog. */
	export interface CatalogKinesisSource {

		/** Required */
		Name: string;
		WindowSize?: number | null;
		DetectSchema?: boolean | null;

		/** Required */
		Table: string;

		/** Required */
		Database: string;
		StreamingOptions?: KinesisStreamingSourceOptions;
		DataPreviewOptions?: StreamingDataPreviewOptions;
	}

	/** Specifies a Kinesis data source in the Glue Data Catalog. */
	export interface CatalogKinesisSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		WindowSize: FormControl<number | null | undefined>,
		DetectSchema: FormControl<boolean | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,
	}
	export function CreateCatalogKinesisSourceFormGroup() {
		return new FormGroup<CatalogKinesisSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WindowSize: new FormControl<number | null | undefined>(undefined),
			DetectSchema: new FormControl<boolean | null | undefined>(undefined),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateCatalogBehavior { UPDATE_IN_DATABASE = 'UPDATE_IN_DATABASE', LOG = 'LOG' }


	/** A policy that specifies update behavior for the crawler. */
	export interface CatalogSchemaChangePolicy {
		EnableUpdateCatalog?: boolean | null;
		UpdateBehavior?: UpdateCatalogBehavior;
	}

	/** A policy that specifies update behavior for the crawler. */
	export interface CatalogSchemaChangePolicyFormProperties {
		EnableUpdateCatalog: FormControl<boolean | null | undefined>,
		UpdateBehavior: FormControl<UpdateCatalogBehavior | null | undefined>,
	}
	export function CreateCatalogSchemaChangePolicyFormGroup() {
		return new FormGroup<CatalogSchemaChangePolicyFormProperties>({
			EnableUpdateCatalog: new FormControl<boolean | null | undefined>(undefined),
			UpdateBehavior: new FormControl<UpdateCatalogBehavior | null | undefined>(undefined),
		});

	}


	/** Specifies a data store in the Glue Data Catalog. */
	export interface CatalogSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
	}

	/** Specifies a data store in the Glue Data Catalog. */
	export interface CatalogSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateCatalogSourceFormGroup() {
		return new FormGroup<CatalogSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CloudWatchEncryptionMode { DISABLED = 'DISABLED', 'SSE-KMS' = 'SSE-KMS' }


	/** Specifies a connector to a JDBC data source. */
	export interface JDBCConnectorSource {

		/** Required */
		Name: string;

		/** Required */
		ConnectionName: string;

		/** Required */
		ConnectorName: string;

		/** Required */
		ConnectionType: string;
		AdditionalOptions?: JDBCConnectorOptions;
		ConnectionTable?: string;
		Query?: string;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a connector to a JDBC data source. */
	export interface JDBCConnectorSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ConnectionName: FormControl<string | null | undefined>,

		/** Required */
		ConnectorName: FormControl<string | null | undefined>,

		/** Required */
		ConnectionType: FormControl<string | null | undefined>,
		ConnectionTable: FormControl<string | null | undefined>,
		Query: FormControl<string | null | undefined>,
	}
	export function CreateJDBCConnectorSourceFormGroup() {
		return new FormGroup<JDBCConnectorSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionTable: new FormControl<string | null | undefined>(undefined),
			Query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional connection options for the connector. */
	export interface JDBCConnectorOptions {
		FilterPredicate?: string;
		PartitionColumn?: string;
		LowerBound?: number | null;
		UpperBound?: number | null;
		NumPartitions?: number | null;
		JobBookmarkKeys?: Array<string>;
		JobBookmarkKeysSortOrder?: string;
		DataTypeMapping?: JDBCDataTypeMapping;
	}

	/** Additional connection options for the connector. */
	export interface JDBCConnectorOptionsFormProperties {
		FilterPredicate: FormControl<string | null | undefined>,
		PartitionColumn: FormControl<string | null | undefined>,
		LowerBound: FormControl<number | null | undefined>,
		UpperBound: FormControl<number | null | undefined>,
		NumPartitions: FormControl<number | null | undefined>,
		JobBookmarkKeysSortOrder: FormControl<string | null | undefined>,
	}
	export function CreateJDBCConnectorOptionsFormGroup() {
		return new FormGroup<JDBCConnectorOptionsFormProperties>({
			FilterPredicate: new FormControl<string | null | undefined>(undefined),
			PartitionColumn: new FormControl<string | null | undefined>(undefined),
			LowerBound: new FormControl<number | null | undefined>(undefined),
			UpperBound: new FormControl<number | null | undefined>(undefined),
			NumPartitions: new FormControl<number | null | undefined>(undefined),
			JobBookmarkKeysSortOrder: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JDBCDataTypeMapping {
	}
	export interface JDBCDataTypeMappingFormProperties {
	}
	export function CreateJDBCDataTypeMappingFormGroup() {
		return new FormGroup<JDBCDataTypeMappingFormProperties>({
		});

	}


	/** Specifies a connector to an Apache Spark data source. */
	export interface SparkConnectorSource {

		/** Required */
		Name: string;

		/** Required */
		ConnectionName: string;

		/** Required */
		ConnectorName: string;

		/** Required */
		ConnectionType: string;
		AdditionalOptions?: AdditionalOptions;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a connector to an Apache Spark data source. */
	export interface SparkConnectorSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ConnectionName: FormControl<string | null | undefined>,

		/** Required */
		ConnectorName: FormControl<string | null | undefined>,

		/** Required */
		ConnectionType: FormControl<string | null | undefined>,
	}
	export function CreateSparkConnectorSourceFormGroup() {
		return new FormGroup<SparkConnectorSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies an Amazon Redshift data store. */
	export interface RedshiftSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
		RedshiftTmpDir?: string;
		TmpDirIAMRole?: string;
	}

	/** Specifies an Amazon Redshift data store. */
	export interface RedshiftSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
		RedshiftTmpDir: FormControl<string | null | undefined>,
		TmpDirIAMRole: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftSourceFormGroup() {
		return new FormGroup<RedshiftSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RedshiftTmpDir: new FormControl<string | null | undefined>(undefined),
			TmpDirIAMRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an Amazon S3 data store in the Glue Data Catalog. */
	export interface S3CatalogSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
		PartitionPredicate?: string;
		AdditionalOptions?: S3SourceAdditionalOptions;
	}

	/** Specifies an Amazon S3 data store in the Glue Data Catalog. */
	export interface S3CatalogSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
		PartitionPredicate: FormControl<string | null | undefined>,
	}
	export function CreateS3CatalogSourceFormGroup() {
		return new FormGroup<S3CatalogSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PartitionPredicate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies additional connection options for the Amazon S3 data store. */
	export interface S3SourceAdditionalOptions {
		BoundedSize?: number | null;
		BoundedFiles?: number | null;
	}

	/** Specifies additional connection options for the Amazon S3 data store. */
	export interface S3SourceAdditionalOptionsFormProperties {
		BoundedSize: FormControl<number | null | undefined>,
		BoundedFiles: FormControl<number | null | undefined>,
	}
	export function CreateS3SourceAdditionalOptionsFormGroup() {
		return new FormGroup<S3SourceAdditionalOptionsFormProperties>({
			BoundedSize: new FormControl<number | null | undefined>(undefined),
			BoundedFiles: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies a command-separated value (CSV) data store stored in Amazon S3. */
	export interface S3CsvSource {

		/** Required */
		Name: string;

		/** Required */
		Paths: Array<string>;
		CompressionType?: CompressionType;
		Exclusions?: Array<string>;
		GroupSize?: string;
		GroupFiles?: string;
		Recurse?: boolean | null;
		MaxBand?: number | null;
		MaxFilesInBand?: number | null;
		AdditionalOptions?: S3DirectSourceAdditionalOptions;

		/** Required */
		Separator: Separator;
		Escaper?: string;

		/** Required */
		QuoteChar: QuoteChar;
		Multiline?: boolean | null;
		WithHeader?: boolean | null;
		WriteHeader?: boolean | null;
		SkipFirst?: boolean | null;
		OptimizePerformance?: boolean | null;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a command-separated value (CSV) data store stored in Amazon S3. */
	export interface S3CsvSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		CompressionType: FormControl<CompressionType | null | undefined>,
		GroupSize: FormControl<string | null | undefined>,
		GroupFiles: FormControl<string | null | undefined>,
		Recurse: FormControl<boolean | null | undefined>,
		MaxBand: FormControl<number | null | undefined>,
		MaxFilesInBand: FormControl<number | null | undefined>,

		/** Required */
		Separator: FormControl<Separator | null | undefined>,
		Escaper: FormControl<string | null | undefined>,

		/** Required */
		QuoteChar: FormControl<QuoteChar | null | undefined>,
		Multiline: FormControl<boolean | null | undefined>,
		WithHeader: FormControl<boolean | null | undefined>,
		WriteHeader: FormControl<boolean | null | undefined>,
		SkipFirst: FormControl<boolean | null | undefined>,
		OptimizePerformance: FormControl<boolean | null | undefined>,
	}
	export function CreateS3CsvSourceFormGroup() {
		return new FormGroup<S3CsvSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CompressionType: new FormControl<CompressionType | null | undefined>(undefined),
			GroupSize: new FormControl<string | null | undefined>(undefined),
			GroupFiles: new FormControl<string | null | undefined>(undefined),
			Recurse: new FormControl<boolean | null | undefined>(undefined),
			MaxBand: new FormControl<number | null | undefined>(undefined),
			MaxFilesInBand: new FormControl<number | null | undefined>(undefined),
			Separator: new FormControl<Separator | null | undefined>(undefined, [Validators.required]),
			Escaper: new FormControl<string | null | undefined>(undefined),
			QuoteChar: new FormControl<QuoteChar | null | undefined>(undefined, [Validators.required]),
			Multiline: new FormControl<boolean | null | undefined>(undefined),
			WithHeader: new FormControl<boolean | null | undefined>(undefined),
			WriteHeader: new FormControl<boolean | null | undefined>(undefined),
			SkipFirst: new FormControl<boolean | null | undefined>(undefined),
			OptimizePerformance: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CompressionType { gzip = 'gzip', bzip2 = 'bzip2' }


	/** Specifies additional connection options for the Amazon S3 data store. */
	export interface S3DirectSourceAdditionalOptions {
		BoundedSize?: number | null;
		BoundedFiles?: number | null;
		EnableSamplePath?: boolean | null;
		SamplePath?: string;
	}

	/** Specifies additional connection options for the Amazon S3 data store. */
	export interface S3DirectSourceAdditionalOptionsFormProperties {
		BoundedSize: FormControl<number | null | undefined>,
		BoundedFiles: FormControl<number | null | undefined>,
		EnableSamplePath: FormControl<boolean | null | undefined>,
		SamplePath: FormControl<string | null | undefined>,
	}
	export function CreateS3DirectSourceAdditionalOptionsFormGroup() {
		return new FormGroup<S3DirectSourceAdditionalOptionsFormProperties>({
			BoundedSize: new FormControl<number | null | undefined>(undefined),
			BoundedFiles: new FormControl<number | null | undefined>(undefined),
			EnableSamplePath: new FormControl<boolean | null | undefined>(undefined),
			SamplePath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Separator { comma = 'comma', ctrla = 'ctrla', pipe = 'pipe', semicolon = 'semicolon', tab = 'tab' }

	export enum QuoteChar { quote = 'quote', quillemet = 'quillemet', single_quote = 'single_quote', disabled = 'disabled' }


	/** Specifies a JSON data store stored in Amazon S3. */
	export interface S3JsonSource {

		/** Required */
		Name: string;

		/** Required */
		Paths: Array<string>;
		CompressionType?: CompressionType;
		Exclusions?: Array<string>;
		GroupSize?: string;
		GroupFiles?: string;
		Recurse?: boolean | null;
		MaxBand?: number | null;
		MaxFilesInBand?: number | null;
		AdditionalOptions?: S3DirectSourceAdditionalOptions;
		JsonPath?: string;
		Multiline?: boolean | null;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a JSON data store stored in Amazon S3. */
	export interface S3JsonSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		CompressionType: FormControl<CompressionType | null | undefined>,
		GroupSize: FormControl<string | null | undefined>,
		GroupFiles: FormControl<string | null | undefined>,
		Recurse: FormControl<boolean | null | undefined>,
		MaxBand: FormControl<number | null | undefined>,
		MaxFilesInBand: FormControl<number | null | undefined>,
		JsonPath: FormControl<string | null | undefined>,
		Multiline: FormControl<boolean | null | undefined>,
	}
	export function CreateS3JsonSourceFormGroup() {
		return new FormGroup<S3JsonSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CompressionType: new FormControl<CompressionType | null | undefined>(undefined),
			GroupSize: new FormControl<string | null | undefined>(undefined),
			GroupFiles: new FormControl<string | null | undefined>(undefined),
			Recurse: new FormControl<boolean | null | undefined>(undefined),
			MaxBand: new FormControl<number | null | undefined>(undefined),
			MaxFilesInBand: new FormControl<number | null | undefined>(undefined),
			JsonPath: new FormControl<string | null | undefined>(undefined),
			Multiline: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies an Apache Parquet data store stored in Amazon S3. */
	export interface S3ParquetSource {

		/** Required */
		Name: string;

		/** Required */
		Paths: Array<string>;
		CompressionType?: ParquetCompressionType;
		Exclusions?: Array<string>;
		GroupSize?: string;
		GroupFiles?: string;
		Recurse?: boolean | null;
		MaxBand?: number | null;
		MaxFilesInBand?: number | null;
		AdditionalOptions?: S3DirectSourceAdditionalOptions;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies an Apache Parquet data store stored in Amazon S3. */
	export interface S3ParquetSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		CompressionType: FormControl<ParquetCompressionType | null | undefined>,
		GroupSize: FormControl<string | null | undefined>,
		GroupFiles: FormControl<string | null | undefined>,
		Recurse: FormControl<boolean | null | undefined>,
		MaxBand: FormControl<number | null | undefined>,
		MaxFilesInBand: FormControl<number | null | undefined>,
	}
	export function CreateS3ParquetSourceFormGroup() {
		return new FormGroup<S3ParquetSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CompressionType: new FormControl<ParquetCompressionType | null | undefined>(undefined),
			GroupSize: new FormControl<string | null | undefined>(undefined),
			GroupFiles: new FormControl<string | null | undefined>(undefined),
			Recurse: new FormControl<boolean | null | undefined>(undefined),
			MaxBand: new FormControl<number | null | undefined>(undefined),
			MaxFilesInBand: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ParquetCompressionType { snappy = 'snappy', lzo = 'lzo', gzip = 'gzip', uncompressed = 'uncompressed', none = 'none' }


	/** Specifies a Relational database data source in the Glue Data Catalog. */
	export interface RelationalCatalogSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
	}

	/** Specifies a Relational database data source in the Glue Data Catalog. */
	export interface RelationalCatalogSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateRelationalCatalogSourceFormGroup() {
		return new FormGroup<RelationalCatalogSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a DynamoDB data source in the Glue Data Catalog. */
	export interface DynamoDBCatalogSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
	}

	/** Specifies a DynamoDB data source in the Glue Data Catalog. */
	export interface DynamoDBCatalogSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateDynamoDBCatalogSourceFormGroup() {
		return new FormGroup<DynamoDBCatalogSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage. */
	export interface JDBCConnectorTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		ConnectionName: string;

		/** Required */
		ConnectionTable: string;

		/** Required */
		ConnectorName: string;

		/** Required */
		ConnectionType: string;
		AdditionalOptions?: AdditionalOptions;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage. */
	export interface JDBCConnectorTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ConnectionName: FormControl<string | null | undefined>,

		/** Required */
		ConnectionTable: FormControl<string | null | undefined>,

		/** Required */
		ConnectorName: FormControl<string | null | undefined>,

		/** Required */
		ConnectionType: FormControl<string | null | undefined>,
	}
	export function CreateJDBCConnectorTargetFormGroup() {
		return new FormGroup<JDBCConnectorTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionTable: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a target that uses an Apache Spark connector. */
	export interface SparkConnectorTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		ConnectionName: string;

		/** Required */
		ConnectorName: string;

		/** Required */
		ConnectionType: string;
		AdditionalOptions?: AdditionalOptions;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a target that uses an Apache Spark connector. */
	export interface SparkConnectorTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ConnectionName: FormControl<string | null | undefined>,

		/** Required */
		ConnectorName: FormControl<string | null | undefined>,

		/** Required */
		ConnectionType: FormControl<string | null | undefined>,
	}
	export function CreateSparkConnectorTargetFormGroup() {
		return new FormGroup<SparkConnectorTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a target that uses Amazon Redshift. */
	export interface RedshiftTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
		RedshiftTmpDir?: string;
		TmpDirIAMRole?: string;
		UpsertRedshiftOptions?: UpsertRedshiftTargetOptions;
	}

	/** Specifies a target that uses Amazon Redshift. */
	export interface RedshiftTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
		RedshiftTmpDir: FormControl<string | null | undefined>,
		TmpDirIAMRole: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftTargetFormGroup() {
		return new FormGroup<RedshiftTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RedshiftTmpDir: new FormControl<string | null | undefined>(undefined),
			TmpDirIAMRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The options to configure an upsert operation when writing to a Redshift target . */
	export interface UpsertRedshiftTargetOptions {
		TableLocation?: string;
		ConnectionName?: string;
		UpsertKeys?: Array<string>;
	}

	/** The options to configure an upsert operation when writing to a Redshift target . */
	export interface UpsertRedshiftTargetOptionsFormProperties {
		TableLocation: FormControl<string | null | undefined>,
		ConnectionName: FormControl<string | null | undefined>,
	}
	export function CreateUpsertRedshiftTargetOptionsFormGroup() {
		return new FormGroup<UpsertRedshiftTargetOptionsFormProperties>({
			TableLocation: new FormControl<string | null | undefined>(undefined),
			ConnectionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a data target that writes to Amazon S3 using the Glue Data Catalog. */
	export interface S3CatalogTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;
		PartitionKeys?: Array<Array<string>>;

		/** Required */
		Table: string;

		/** Required */
		Database: string;
		SchemaChangePolicy?: CatalogSchemaChangePolicy;
	}

	/** Specifies a data target that writes to Amazon S3 using the Glue Data Catalog. */
	export interface S3CatalogTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,
	}
	export function CreateS3CatalogTargetFormGroup() {
		return new FormGroup<S3CatalogTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage. */
	export interface S3GlueParquetTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;
		PartitionKeys?: Array<Array<string>>;

		/** Required */
		Path: string;
		Compression?: ParquetCompressionType;
		SchemaChangePolicy?: DirectSchemaChangePolicy;
	}

	/** Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage. */
	export interface S3GlueParquetTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Path: FormControl<string | null | undefined>,
		Compression: FormControl<ParquetCompressionType | null | undefined>,
	}
	export function CreateS3GlueParquetTargetFormGroup() {
		return new FormGroup<S3GlueParquetTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Compression: new FormControl<ParquetCompressionType | null | undefined>(undefined),
		});

	}


	/** A policy that specifies update behavior for the crawler. */
	export interface DirectSchemaChangePolicy {
		EnableUpdateCatalog?: boolean | null;
		UpdateBehavior?: UpdateCatalogBehavior;
		Table?: string;
		Database?: string;
	}

	/** A policy that specifies update behavior for the crawler. */
	export interface DirectSchemaChangePolicyFormProperties {
		EnableUpdateCatalog: FormControl<boolean | null | undefined>,
		UpdateBehavior: FormControl<UpdateCatalogBehavior | null | undefined>,
		Table: FormControl<string | null | undefined>,
		Database: FormControl<string | null | undefined>,
	}
	export function CreateDirectSchemaChangePolicyFormGroup() {
		return new FormGroup<DirectSchemaChangePolicyFormProperties>({
			EnableUpdateCatalog: new FormControl<boolean | null | undefined>(undefined),
			UpdateBehavior: new FormControl<UpdateCatalogBehavior | null | undefined>(undefined),
			Table: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a data target that writes to Amazon S3. */
	export interface S3DirectTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;
		PartitionKeys?: Array<Array<string>>;

		/** Required */
		Path: string;
		Compression?: string;

		/** Required */
		Format: TargetFormat;
		SchemaChangePolicy?: DirectSchemaChangePolicy;
	}

	/** Specifies a data target that writes to Amazon S3. */
	export interface S3DirectTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Path: FormControl<string | null | undefined>,
		Compression: FormControl<string | null | undefined>,

		/** Required */
		Format: FormControl<TargetFormat | null | undefined>,
	}
	export function CreateS3DirectTargetFormGroup() {
		return new FormGroup<S3DirectTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Compression: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<TargetFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TargetFormat { json = 'json', csv = 'csv', avro = 'avro', orc = 'orc', parquet = 'parquet', hudi = 'hudi', delta = 'delta' }


	/** Specifies a transform that chooses the data property keys that you want to keep. */
	export interface SelectFields {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Paths: Array<Array<string>>;
	}

	/** Specifies a transform that chooses the data property keys that you want to keep. */
	export interface SelectFieldsFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSelectFieldsFormGroup() {
		return new FormGroup<SelectFieldsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a transform that chooses the data property keys that you want to drop. */
	export interface DropFields {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Paths: Array<Array<string>>;
	}

	/** Specifies a transform that chooses the data property keys that you want to drop. */
	export interface DropFieldsFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDropFieldsFormGroup() {
		return new FormGroup<DropFieldsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a transform that renames a single data property key. */
	export interface RenameField {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		SourcePath: Array<string>;

		/** Required */
		TargetPath: Array<string>;
	}

	/** Specifies a transform that renames a single data property key. */
	export interface RenameFieldFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRenameFieldFormGroup() {
		return new FormGroup<RenameFieldFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a transform that writes samples of the data to an Amazon S3 bucket. */
	export interface Spigot {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Path: string;
		Topk?: number | null;
		Prob?: number | null;
	}

	/** Specifies a transform that writes samples of the data to an Amazon S3 bucket. */
	export interface SpigotFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Path: FormControl<string | null | undefined>,
		Topk: FormControl<number | null | undefined>,
		Prob: FormControl<number | null | undefined>,
	}
	export function CreateSpigotFormGroup() {
		return new FormGroup<SpigotFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Topk: new FormControl<number | null | undefined>(undefined),
			Prob: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies a transform that joins two datasets into one dataset using a comparison phrase on the specified data property keys. You can use inner, outer, left, right, left semi, and left anti joins. */
	export interface Join {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		JoinType: JoinType;

		/** Required */
		Columns: Array<JoinColumn>;
	}

	/** Specifies a transform that joins two datasets into one dataset using a comparison phrase on the specified data property keys. You can use inner, outer, left, right, left semi, and left anti joins. */
	export interface JoinFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		JoinType: FormControl<JoinType | null | undefined>,
	}
	export function CreateJoinFormGroup() {
		return new FormGroup<JoinFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JoinType: new FormControl<JoinType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JoinType { equijoin = 'equijoin', left = 'left', right = 'right', outer = 'outer', leftsemi = 'leftsemi', leftanti = 'leftanti' }


	/** Specifies a column to be joined. */
	export interface JoinColumn {

		/** Required */
		From: string;

		/** Required */
		Keys: Array<Array<string>>;
	}

	/** Specifies a column to be joined. */
	export interface JoinColumnFormProperties {

		/** Required */
		From: FormControl<string | null | undefined>,
	}
	export function CreateJoinColumnFormGroup() {
		return new FormGroup<JoinColumnFormProperties>({
			From: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a transform that splits data property keys into two <code>DynamicFrames</code>. The output is a collection of <code>DynamicFrames</code>: one with selected data property keys, and one with the remaining data property keys. */
	export interface SplitFields {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Paths: Array<Array<string>>;
	}

	/** Specifies a transform that splits data property keys into two <code>DynamicFrames</code>. The output is a collection of <code>DynamicFrames</code>: one with selected data property keys, and one with the remaining data property keys. */
	export interface SplitFieldsFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSplitFieldsFormGroup() {
		return new FormGroup<SplitFieldsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a transform that chooses one <code>DynamicFrame</code> from a collection of <code>DynamicFrames</code>. The output is the selected <code>DynamicFrame</code>  */
	export interface SelectFromCollection {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Index: number;
	}

	/** Specifies a transform that chooses one <code>DynamicFrame</code> from a collection of <code>DynamicFrames</code>. The output is the selected <code>DynamicFrame</code>  */
	export interface SelectFromCollectionFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Index: FormControl<number | null | undefined>,
	}
	export function CreateSelectFromCollectionFormGroup() {
		return new FormGroup<SelectFromCollectionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Index: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a transform that locates records in the dataset that have missing values and adds a new field with a value determined by imputation. The input data set is used to train the machine learning model that determines what the missing value should be. */
	export interface FillMissingValues {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		ImputedPath: string;
		FilledPath?: string;
	}

	/** Specifies a transform that locates records in the dataset that have missing values and adds a new field with a value determined by imputation. The input data set is used to train the machine learning model that determines what the missing value should be. */
	export interface FillMissingValuesFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ImputedPath: FormControl<string | null | undefined>,
		FilledPath: FormControl<string | null | undefined>,
	}
	export function CreateFillMissingValuesFormGroup() {
		return new FormGroup<FillMissingValuesFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImputedPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FilledPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a transform that splits a dataset into two, based on a filter condition. */
	export interface Filter {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		LogicalOperator: FilterLogicalOperator;

		/** Required */
		Filters: Array<FilterExpression>;
	}

	/** Specifies a transform that splits a dataset into two, based on a filter condition. */
	export interface FilterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		LogicalOperator: FormControl<FilterLogicalOperator | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogicalOperator: new FormControl<FilterLogicalOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FilterLogicalOperator { AND = 'AND', OR = 'OR' }


	/** Specifies a filter expression. */
	export interface FilterExpression {

		/** Required */
		Operation: FilterOperation;
		Negated?: boolean | null;

		/** Required */
		Values: Array<FilterValue>;
	}

	/** Specifies a filter expression. */
	export interface FilterExpressionFormProperties {

		/** Required */
		Operation: FormControl<FilterOperation | null | undefined>,
		Negated: FormControl<boolean | null | undefined>,
	}
	export function CreateFilterExpressionFormGroup() {
		return new FormGroup<FilterExpressionFormProperties>({
			Operation: new FormControl<FilterOperation | null | undefined>(undefined, [Validators.required]),
			Negated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FilterOperation { EQ = 'EQ', LT = 'LT', GT = 'GT', LTE = 'LTE', GTE = 'GTE', REGEX = 'REGEX', ISNULL = 'ISNULL' }


	/** Represents a single entry in the list of values for a <code>FilterExpression</code>.  */
	export interface FilterValue {

		/** Required */
		Type: FilterValueType;

		/** Required */
		Value: Array<string>;
	}

	/** Represents a single entry in the list of values for a <code>FilterExpression</code>.  */
	export interface FilterValueFormProperties {

		/** Required */
		Type: FormControl<FilterValueType | null | undefined>,
	}
	export function CreateFilterValueFormGroup() {
		return new FormGroup<FilterValueFormProperties>({
			Type: new FormControl<FilterValueType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FilterValueType { COLUMNEXTRACTED = 'COLUMNEXTRACTED', CONSTANT = 'CONSTANT' }


	/** Specifies a transform that uses custom code you provide to perform the data transformation. The output is a collection of DynamicFrames. */
	export interface CustomCode {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Code: string;

		/** Required */
		ClassName: string;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a transform that uses custom code you provide to perform the data transformation. The output is a collection of DynamicFrames. */
	export interface CustomCodeFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Code: FormControl<string | null | undefined>,

		/** Required */
		ClassName: FormControl<string | null | undefined>,
	}
	export function CreateCustomCodeFormGroup() {
		return new FormGroup<CustomCodeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClassName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a transform where you enter a SQL query using Spark SQL syntax to transform the data. The output is a single <code>DynamicFrame</code>. */
	export interface SparkSQL {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		SqlQuery: string;

		/** Required */
		SqlAliases: Array<SqlAlias>;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a transform where you enter a SQL query using Spark SQL syntax to transform the data. The output is a single <code>DynamicFrame</code>. */
	export interface SparkSQLFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SqlQuery: FormControl<string | null | undefined>,
	}
	export function CreateSparkSQLFormGroup() {
		return new FormGroup<SparkSQLFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SqlQuery: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a single entry in the list of values for <code>SqlAliases</code>.  */
	export interface SqlAlias {

		/** Required */
		From: string;

		/** Required */
		Alias: string;
	}

	/** Represents a single entry in the list of values for <code>SqlAliases</code>.  */
	export interface SqlAliasFormProperties {

		/** Required */
		From: FormControl<string | null | undefined>,

		/** Required */
		Alias: FormControl<string | null | undefined>,
	}
	export function CreateSqlAliasFormGroup() {
		return new FormGroup<SqlAliasFormProperties>({
			From: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Alias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a direct Amazon Kinesis data source. */
	export interface DirectKinesisSource {

		/** Required */
		Name: string;
		WindowSize?: number | null;
		DetectSchema?: boolean | null;
		StreamingOptions?: KinesisStreamingSourceOptions;
		DataPreviewOptions?: StreamingDataPreviewOptions;
	}

	/** Specifies a direct Amazon Kinesis data source. */
	export interface DirectKinesisSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		WindowSize: FormControl<number | null | undefined>,
		DetectSchema: FormControl<boolean | null | undefined>,
	}
	export function CreateDirectKinesisSourceFormGroup() {
		return new FormGroup<DirectKinesisSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WindowSize: new FormControl<number | null | undefined>(undefined),
			DetectSchema: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies an Apache Kafka data store. */
	export interface DirectKafkaSource {

		/** Required */
		Name: string;
		StreamingOptions?: KafkaStreamingSourceOptions;
		WindowSize?: number | null;
		DetectSchema?: boolean | null;
		DataPreviewOptions?: StreamingDataPreviewOptions;
	}

	/** Specifies an Apache Kafka data store. */
	export interface DirectKafkaSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		WindowSize: FormControl<number | null | undefined>,
		DetectSchema: FormControl<boolean | null | undefined>,
	}
	export function CreateDirectKafkaSourceFormGroup() {
		return new FormGroup<DirectKafkaSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WindowSize: new FormControl<number | null | undefined>(undefined),
			DetectSchema: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies a transform that removes columns from the dataset if all values in the column are 'null'. By default, Glue Studio will recognize null objects, but some values such as empty strings, strings that are "null", -1 integers or other placeholders such as zeros, are not automatically recognized as nulls. */
	export interface DropNullFields {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;
		NullCheckBoxList?: NullCheckBoxList;
		NullTextList?: Array<NullValueField>;
	}

	/** Specifies a transform that removes columns from the dataset if all values in the column are 'null'. By default, Glue Studio will recognize null objects, but some values such as empty strings, strings that are "null", -1 integers or other placeholders such as zeros, are not automatically recognized as nulls. */
	export interface DropNullFieldsFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDropNullFieldsFormGroup() {
		return new FormGroup<DropNullFieldsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents whether certain values are recognized as null values for removal. */
	export interface NullCheckBoxList {
		IsEmpty?: boolean | null;
		IsNullString?: boolean | null;
		IsNegOne?: boolean | null;
	}

	/** Represents whether certain values are recognized as null values for removal. */
	export interface NullCheckBoxListFormProperties {
		IsEmpty: FormControl<boolean | null | undefined>,
		IsNullString: FormControl<boolean | null | undefined>,
		IsNegOne: FormControl<boolean | null | undefined>,
	}
	export function CreateNullCheckBoxListFormGroup() {
		return new FormGroup<NullCheckBoxListFormProperties>({
			IsEmpty: new FormControl<boolean | null | undefined>(undefined),
			IsNullString: new FormControl<boolean | null | undefined>(undefined),
			IsNegOne: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a custom null value such as a zeros or other value being used as a null placeholder unique to the dataset. */
	export interface NullValueField {

		/** Required */
		Value: string;

		/** Required */
		Datatype: Datatype;
	}

	/** Represents a custom null value such as a zeros or other value being used as a null placeholder unique to the dataset. */
	export interface NullValueFieldFormProperties {

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateNullValueFieldFormGroup() {
		return new FormGroup<NullValueFieldFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure representing the datatype of the value. */
	export interface Datatype {

		/** Required */
		Id: string;

		/** Required */
		Label: string;
	}

	/** A structure representing the datatype of the value. */
	export interface DatatypeFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Label: FormControl<string | null | undefined>,
	}
	export function CreateDatatypeFormGroup() {
		return new FormGroup<DatatypeFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a transform that merges a <code>DynamicFrame</code> with a staging <code>DynamicFrame</code> based on the specified primary keys to identify records. Duplicate records (records with the same primary keys) are not de-duplicated.  */
	export interface Merge {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Source: string;

		/** Required */
		PrimaryKeys: Array<Array<string>>;
	}

	/** Specifies a transform that merges a <code>DynamicFrame</code> with a staging <code>DynamicFrame</code> based on the specified primary keys to identify records. Duplicate records (records with the same primary keys) are not de-duplicated.  */
	export interface MergeFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Source: FormControl<string | null | undefined>,
	}
	export function CreateMergeFormGroup() {
		return new FormGroup<MergeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a transform that combines the rows from two or more datasets into a single result. */
	export interface Union {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		UnionType: UnionType;
	}

	/** Specifies a transform that combines the rows from two or more datasets into a single result. */
	export interface UnionFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		UnionType: FormControl<UnionType | null | undefined>,
	}
	export function CreateUnionFormGroup() {
		return new FormGroup<UnionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UnionType: new FormControl<UnionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UnionType { ALL = 'ALL', DISTINCT = 'DISTINCT' }


	/** Specifies a transform that identifies, removes or masks PII data. */
	export interface PIIDetection {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		PiiType: PiiType;

		/** Required */
		EntityTypesToDetect: Array<string>;
		OutputColumnName?: string;
		SampleFraction?: number | null;
		ThresholdFraction?: number | null;
		MaskValue?: string;
	}

	/** Specifies a transform that identifies, removes or masks PII data. */
	export interface PIIDetectionFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		PiiType: FormControl<PiiType | null | undefined>,
		OutputColumnName: FormControl<string | null | undefined>,
		SampleFraction: FormControl<number | null | undefined>,
		ThresholdFraction: FormControl<number | null | undefined>,
		MaskValue: FormControl<string | null | undefined>,
	}
	export function CreatePIIDetectionFormGroup() {
		return new FormGroup<PIIDetectionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PiiType: new FormControl<PiiType | null | undefined>(undefined, [Validators.required]),
			OutputColumnName: new FormControl<string | null | undefined>(undefined),
			SampleFraction: new FormControl<number | null | undefined>(undefined),
			ThresholdFraction: new FormControl<number | null | undefined>(undefined),
			MaskValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PiiType { RowAudit = 'RowAudit', RowMasking = 'RowMasking', ColumnAudit = 'ColumnAudit', ColumnMasking = 'ColumnMasking' }


	/** Specifies a transform that removes rows of repeating data from a data set.  */
	export interface DropDuplicates {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;
		Columns?: Array<Array<string>>;
	}

	/** Specifies a transform that removes rows of repeating data from a data set.  */
	export interface DropDuplicatesFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDropDuplicatesFormGroup() {
		return new FormGroup<DropDuplicatesFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a data target that writes to Amazon S3 using the Glue Data Catalog. */
	export interface GovernedCatalogTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;
		PartitionKeys?: Array<Array<string>>;

		/** Required */
		Table: string;

		/** Required */
		Database: string;
		SchemaChangePolicy?: CatalogSchemaChangePolicy;
	}

	/** Specifies a data target that writes to Amazon S3 using the Glue Data Catalog. */
	export interface GovernedCatalogTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,
	}
	export function CreateGovernedCatalogTargetFormGroup() {
		return new FormGroup<GovernedCatalogTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the data store in the governed Glue Data Catalog. */
	export interface GovernedCatalogSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
		PartitionPredicate?: string;
		AdditionalOptions?: S3SourceAdditionalOptions;
	}

	/** Specifies the data store in the governed Glue Data Catalog. */
	export interface GovernedCatalogSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
		PartitionPredicate: FormControl<string | null | undefined>,
	}
	export function CreateGovernedCatalogSourceFormGroup() {
		return new FormGroup<GovernedCatalogSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PartitionPredicate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a Microsoft SQL server data source in the Glue Data Catalog. */
	export interface MicrosoftSQLServerCatalogSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
	}

	/** Specifies a Microsoft SQL server data source in the Glue Data Catalog. */
	export interface MicrosoftSQLServerCatalogSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateMicrosoftSQLServerCatalogSourceFormGroup() {
		return new FormGroup<MicrosoftSQLServerCatalogSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a MySQL data source in the Glue Data Catalog. */
	export interface MySQLCatalogSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
	}

	/** Specifies a MySQL data source in the Glue Data Catalog. */
	export interface MySQLCatalogSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateMySQLCatalogSourceFormGroup() {
		return new FormGroup<MySQLCatalogSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies an Oracle data source in the Glue Data Catalog. */
	export interface OracleSQLCatalogSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
	}

	/** Specifies an Oracle data source in the Glue Data Catalog. */
	export interface OracleSQLCatalogSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateOracleSQLCatalogSourceFormGroup() {
		return new FormGroup<OracleSQLCatalogSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a PostgresSQL data source in the Glue Data Catalog. */
	export interface PostgreSQLCatalogSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
	}

	/** Specifies a PostgresSQL data source in the Glue Data Catalog. */
	export interface PostgreSQLCatalogSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreatePostgreSQLCatalogSourceFormGroup() {
		return new FormGroup<PostgreSQLCatalogSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a target that uses Microsoft SQL. */
	export interface MicrosoftSQLServerCatalogTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
	}

	/** Specifies a target that uses Microsoft SQL. */
	export interface MicrosoftSQLServerCatalogTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateMicrosoftSQLServerCatalogTargetFormGroup() {
		return new FormGroup<MicrosoftSQLServerCatalogTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a target that uses MySQL. */
	export interface MySQLCatalogTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
	}

	/** Specifies a target that uses MySQL. */
	export interface MySQLCatalogTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateMySQLCatalogTargetFormGroup() {
		return new FormGroup<MySQLCatalogTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a target that uses Oracle SQL. */
	export interface OracleSQLCatalogTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
	}

	/** Specifies a target that uses Oracle SQL. */
	export interface OracleSQLCatalogTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateOracleSQLCatalogTargetFormGroup() {
		return new FormGroup<OracleSQLCatalogTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a target that uses Postgres SQL. */
	export interface PostgreSQLCatalogTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
	}

	/** Specifies a target that uses Postgres SQL. */
	export interface PostgreSQLCatalogTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreatePostgreSQLCatalogTargetFormGroup() {
		return new FormGroup<PostgreSQLCatalogTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the set of parameters needed to perform the dynamic transform. */
	export interface DynamicTransform {

		/** Required */
		Name: string;

		/** Required */
		TransformName: string;

		/** Required */
		Inputs: Array<string>;
		Parameters?: Array<TransformConfigParameter>;

		/** Required */
		FunctionName: string;

		/** Required */
		Path: string;
		Version?: string;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies the set of parameters needed to perform the dynamic transform. */
	export interface DynamicTransformFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		TransformName: FormControl<string | null | undefined>,

		/** Required */
		FunctionName: FormControl<string | null | undefined>,

		/** Required */
		Path: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateDynamicTransformFormGroup() {
		return new FormGroup<DynamicTransformFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TransformName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the parameters in the config file of the dynamic transform. */
	export interface TransformConfigParameter {

		/** Required */
		Name: string;

		/** Required */
		Type: ParamType;
		ValidationRule?: string;
		ValidationMessage?: string;
		Value?: Array<string>;
		ListType?: ParamType;
		IsOptional?: boolean | null;
	}

	/** Specifies the parameters in the config file of the dynamic transform. */
	export interface TransformConfigParameterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ParamType | null | undefined>,
		ValidationRule: FormControl<string | null | undefined>,
		ValidationMessage: FormControl<string | null | undefined>,
		ListType: FormControl<ParamType | null | undefined>,
		IsOptional: FormControl<boolean | null | undefined>,
	}
	export function CreateTransformConfigParameterFormGroup() {
		return new FormGroup<TransformConfigParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ParamType | null | undefined>(undefined, [Validators.required]),
			ValidationRule: new FormControl<string | null | undefined>(undefined),
			ValidationMessage: new FormControl<string | null | undefined>(undefined),
			ListType: new FormControl<ParamType | null | undefined>(undefined),
			IsOptional: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ParamType { str = 'str', int = 'int', float = 'float', complex = 'complex', bool = 'bool', list = 'list', null = 'null' }


	/** Specifies your data quality evaluation criteria. */
	export interface EvaluateDataQuality {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Ruleset: string;
		Output?: DQTransformOutput;
		PublishingOptions?: DQResultsPublishingOptions;
		StopJobOnFailureOptions?: DQStopJobOnFailureOptions;
	}

	/** Specifies your data quality evaluation criteria. */
	export interface EvaluateDataQualityFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Ruleset: FormControl<string | null | undefined>,
		Output: FormControl<DQTransformOutput | null | undefined>,
	}
	export function CreateEvaluateDataQualityFormGroup() {
		return new FormGroup<EvaluateDataQualityFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Ruleset: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Output: new FormControl<DQTransformOutput | null | undefined>(undefined),
		});

	}

	export enum DQTransformOutput { PrimaryInput = 'PrimaryInput', EvaluationResults = 'EvaluationResults' }


	/** Options to configure how your data quality evaluation results are published. */
	export interface DQResultsPublishingOptions {
		EvaluationContext?: string;
		ResultsS3Prefix?: string;
		CloudWatchMetricsEnabled?: boolean | null;
		ResultsPublishingEnabled?: boolean | null;
	}

	/** Options to configure how your data quality evaluation results are published. */
	export interface DQResultsPublishingOptionsFormProperties {
		EvaluationContext: FormControl<string | null | undefined>,
		ResultsS3Prefix: FormControl<string | null | undefined>,
		CloudWatchMetricsEnabled: FormControl<boolean | null | undefined>,
		ResultsPublishingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDQResultsPublishingOptionsFormGroup() {
		return new FormGroup<DQResultsPublishingOptionsFormProperties>({
			EvaluationContext: new FormControl<string | null | undefined>(undefined),
			ResultsS3Prefix: new FormControl<string | null | undefined>(undefined),
			CloudWatchMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			ResultsPublishingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options to configure how your job will stop if your data quality evaluation fails. */
	export interface DQStopJobOnFailureOptions {
		StopJobOnFailureTiming?: DQStopJobOnFailureTiming;
	}

	/** Options to configure how your job will stop if your data quality evaluation fails. */
	export interface DQStopJobOnFailureOptionsFormProperties {
		StopJobOnFailureTiming: FormControl<DQStopJobOnFailureTiming | null | undefined>,
	}
	export function CreateDQStopJobOnFailureOptionsFormGroup() {
		return new FormGroup<DQStopJobOnFailureOptionsFormProperties>({
			StopJobOnFailureTiming: new FormControl<DQStopJobOnFailureTiming | null | undefined>(undefined),
		});

	}

	export enum DQStopJobOnFailureTiming { Immediate = 'Immediate', AfterDataLoad = 'AfterDataLoad' }


	/** Specifies a Hudi data source that is registered in the Glue Data Catalog. The Hudi data source must be stored in Amazon S3. */
	export interface S3CatalogHudiSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
		AdditionalHudiOptions?: AdditionalOptions;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a Hudi data source that is registered in the Glue Data Catalog. The Hudi data source must be stored in Amazon S3. */
	export interface S3CatalogHudiSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateS3CatalogHudiSourceFormGroup() {
		return new FormGroup<S3CatalogHudiSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a Hudi data source stored in Amazon S3. */
	export interface S3HudiSource {

		/** Required */
		Name: string;

		/** Required */
		Paths: Array<string>;
		AdditionalHudiOptions?: AdditionalOptions;
		AdditionalOptions?: S3DirectSourceAdditionalOptions;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a Hudi data source stored in Amazon S3. */
	export interface S3HudiSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateS3HudiSourceFormGroup() {
		return new FormGroup<S3HudiSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a target that writes to a Hudi data source in the Glue Data Catalog. */
	export interface S3HudiCatalogTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;
		PartitionKeys?: Array<Array<string>>;

		/** Required */
		Table: string;

		/** Required */
		Database: string;

		/** Required */
		AdditionalOptions: AdditionalOptions;
		SchemaChangePolicy?: CatalogSchemaChangePolicy;
	}

	/** Specifies a target that writes to a Hudi data source in the Glue Data Catalog. */
	export interface S3HudiCatalogTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,
	}
	export function CreateS3HudiCatalogTargetFormGroup() {
		return new FormGroup<S3HudiCatalogTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a target that writes to a Hudi data source in Amazon S3. */
	export interface S3HudiDirectTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		Path: string;

		/** Required */
		Compression: HudiTargetCompressionType;
		PartitionKeys?: Array<Array<string>>;

		/** Required */
		Format: TargetFormat;

		/** Required */
		AdditionalOptions: AdditionalOptions;
		SchemaChangePolicy?: DirectSchemaChangePolicy;
	}

	/** Specifies a target that writes to a Hudi data source in Amazon S3. */
	export interface S3HudiDirectTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Path: FormControl<string | null | undefined>,

		/** Required */
		Compression: FormControl<HudiTargetCompressionType | null | undefined>,

		/** Required */
		Format: FormControl<TargetFormat | null | undefined>,
	}
	export function CreateS3HudiDirectTargetFormGroup() {
		return new FormGroup<S3HudiDirectTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Compression: new FormControl<HudiTargetCompressionType | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<TargetFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HudiTargetCompressionType { gzip = 'gzip', lzo = 'lzo', uncompressed = 'uncompressed', snappy = 'snappy' }


	/** Specifies the direct JDBC source connection. */
	export interface DirectJDBCSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;

		/** Required */
		ConnectionName: string;

		/** Required */
		ConnectionType: JDBCConnectionType;
		RedshiftTmpDir?: string;
	}

	/** Specifies the direct JDBC source connection. */
	export interface DirectJDBCSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,

		/** Required */
		ConnectionName: FormControl<string | null | undefined>,

		/** Required */
		ConnectionType: FormControl<JDBCConnectionType | null | undefined>,
		RedshiftTmpDir: FormControl<string | null | undefined>,
	}
	export function CreateDirectJDBCSourceFormGroup() {
		return new FormGroup<DirectJDBCSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionType: new FormControl<JDBCConnectionType | null | undefined>(undefined, [Validators.required]),
			RedshiftTmpDir: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JDBCConnectionType { sqlserver = 'sqlserver', mysql = 'mysql', oracle = 'oracle', postgresql = 'postgresql', redshift = 'redshift' }


	/** Specifies a Delta Lake data source that is registered in the Glue Data Catalog. The data source must be stored in Amazon S3. */
	export interface S3CatalogDeltaSource {

		/** Required */
		Name: string;

		/** Required */
		Database: string;

		/** Required */
		Table: string;
		AdditionalDeltaOptions?: AdditionalOptions;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a Delta Lake data source that is registered in the Glue Data Catalog. The data source must be stored in Amazon S3. */
	export interface S3CatalogDeltaSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,
	}
	export function CreateS3CatalogDeltaSourceFormGroup() {
		return new FormGroup<S3CatalogDeltaSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a Delta Lake data source stored in Amazon S3. */
	export interface S3DeltaSource {

		/** Required */
		Name: string;

		/** Required */
		Paths: Array<string>;
		AdditionalDeltaOptions?: AdditionalOptions;
		AdditionalOptions?: S3DirectSourceAdditionalOptions;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a Delta Lake data source stored in Amazon S3. */
	export interface S3DeltaSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateS3DeltaSourceFormGroup() {
		return new FormGroup<S3DeltaSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a target that writes to a Delta Lake data source in the Glue Data Catalog. */
	export interface S3DeltaCatalogTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;
		PartitionKeys?: Array<Array<string>>;

		/** Required */
		Table: string;

		/** Required */
		Database: string;
		AdditionalOptions?: AdditionalOptions;
		SchemaChangePolicy?: CatalogSchemaChangePolicy;
	}

	/** Specifies a target that writes to a Delta Lake data source in the Glue Data Catalog. */
	export interface S3DeltaCatalogTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Table: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,
	}
	export function CreateS3DeltaCatalogTargetFormGroup() {
		return new FormGroup<S3DeltaCatalogTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Table: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a target that writes to a Delta Lake data source in Amazon S3. */
	export interface S3DeltaDirectTarget {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;
		PartitionKeys?: Array<Array<string>>;

		/** Required */
		Path: string;

		/** Required */
		Compression: DeltaTargetCompressionType;

		/** Required */
		Format: TargetFormat;
		AdditionalOptions?: AdditionalOptions;
		SchemaChangePolicy?: DirectSchemaChangePolicy;
	}

	/** Specifies a target that writes to a Delta Lake data source in Amazon S3. */
	export interface S3DeltaDirectTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Path: FormControl<string | null | undefined>,

		/** Required */
		Compression: FormControl<DeltaTargetCompressionType | null | undefined>,

		/** Required */
		Format: FormControl<TargetFormat | null | undefined>,
	}
	export function CreateS3DeltaDirectTargetFormGroup() {
		return new FormGroup<S3DeltaDirectTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Compression: new FormControl<DeltaTargetCompressionType | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<TargetFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeltaTargetCompressionType { uncompressed = 'uncompressed', snappy = 'snappy' }


	/** Specifies your data quality evaluation criteria. */
	export interface EvaluateDataQualityMultiFrame {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;
		AdditionalDataSources?: DQDLAliases;

		/** Required */
		Ruleset: string;
		PublishingOptions?: DQResultsPublishingOptions;
		AdditionalOptions?: DQAdditionalOptions;
		StopJobOnFailureOptions?: DQStopJobOnFailureOptions;
	}

	/** Specifies your data quality evaluation criteria. */
	export interface EvaluateDataQualityMultiFrameFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Ruleset: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateDataQualityMultiFrameFormGroup() {
		return new FormGroup<EvaluateDataQualityMultiFrameFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Ruleset: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DQDLAliases {
	}
	export interface DQDLAliasesFormProperties {
	}
	export function CreateDQDLAliasesFormGroup() {
		return new FormGroup<DQDLAliasesFormProperties>({
		});

	}

	export interface DQAdditionalOptions {
	}
	export interface DQAdditionalOptionsFormProperties {
	}
	export function CreateDQAdditionalOptionsFormGroup() {
		return new FormGroup<DQAdditionalOptionsFormProperties>({
		});

	}


	/** A Glue Studio node that uses a Glue DataBrew recipe in Glue jobs. */
	export interface Recipe {

		/** Required */
		Name: string;

		/** Required */
		Inputs: Array<string>;

		/** Required */
		RecipeReference: RecipeReference;
	}

	/** A Glue Studio node that uses a Glue DataBrew recipe in Glue jobs. */
	export interface RecipeFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRecipeFormGroup() {
		return new FormGroup<RecipeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A reference to a Glue DataBrew recipe. */
	export interface RecipeReference {

		/** Required */
		RecipeArn: string;

		/** Required */
		RecipeVersion: string;
	}

	/** A reference to a Glue DataBrew recipe. */
	export interface RecipeReferenceFormProperties {

		/** Required */
		RecipeArn: FormControl<string | null | undefined>,

		/** Required */
		RecipeVersion: FormControl<string | null | undefined>,
	}
	export function CreateRecipeReferenceFormGroup() {
		return new FormGroup<RecipeReferenceFormProperties>({
			RecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecipeVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a Snowflake data source. */
	export interface SnowflakeSource {

		/** Required */
		Name: string;

		/** Required */
		Data: SnowflakeNodeData;
		OutputSchemas?: Array<GlueSchema>;
	}

	/** Specifies a Snowflake data source. */
	export interface SnowflakeSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSnowflakeSourceFormGroup() {
		return new FormGroup<SnowflakeSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies configuration for Snowflake nodes in Glue Studio. */
	export interface SnowflakeNodeData {
		SourceType?: string;
		Connection?: Option;
		Schema?: string;
		Table?: string;
		Database?: string;
		TempDir?: string;
		IamRole?: Option;
		AdditionalOptions?: AdditionalOptions;
		SampleQuery?: string;
		PreAction?: string;
		PostAction?: string;
		Action?: string;
		Upsert?: boolean | null;
		MergeAction?: string;
		MergeWhenMatched?: string;
		MergeWhenNotMatched?: string;
		MergeClause?: string;
		StagingTable?: string;
		SelectedColumns?: Array<Option>;
		AutoPushdown?: boolean | null;
		TableSchema?: Array<Option>;
	}

	/** Specifies configuration for Snowflake nodes in Glue Studio. */
	export interface SnowflakeNodeDataFormProperties {
		SourceType: FormControl<string | null | undefined>,
		Schema: FormControl<string | null | undefined>,
		Table: FormControl<string | null | undefined>,
		Database: FormControl<string | null | undefined>,
		TempDir: FormControl<string | null | undefined>,
		SampleQuery: FormControl<string | null | undefined>,
		PreAction: FormControl<string | null | undefined>,
		PostAction: FormControl<string | null | undefined>,
		Action: FormControl<string | null | undefined>,
		Upsert: FormControl<boolean | null | undefined>,
		MergeAction: FormControl<string | null | undefined>,
		MergeWhenMatched: FormControl<string | null | undefined>,
		MergeWhenNotMatched: FormControl<string | null | undefined>,
		MergeClause: FormControl<string | null | undefined>,
		StagingTable: FormControl<string | null | undefined>,
		AutoPushdown: FormControl<boolean | null | undefined>,
	}
	export function CreateSnowflakeNodeDataFormGroup() {
		return new FormGroup<SnowflakeNodeDataFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
			Table: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined),
			TempDir: new FormControl<string | null | undefined>(undefined),
			SampleQuery: new FormControl<string | null | undefined>(undefined),
			PreAction: new FormControl<string | null | undefined>(undefined),
			PostAction: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<string | null | undefined>(undefined),
			Upsert: new FormControl<boolean | null | undefined>(undefined),
			MergeAction: new FormControl<string | null | undefined>(undefined),
			MergeWhenMatched: new FormControl<string | null | undefined>(undefined),
			MergeWhenNotMatched: new FormControl<string | null | undefined>(undefined),
			MergeClause: new FormControl<string | null | undefined>(undefined),
			StagingTable: new FormControl<string | null | undefined>(undefined),
			AutoPushdown: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies a Snowflake target. */
	export interface SnowflakeTarget {

		/** Required */
		Name: string;

		/** Required */
		Data: SnowflakeNodeData;
		Inputs?: Array<string>;
	}

	/** Specifies a Snowflake target. */
	export interface SnowflakeTargetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSnowflakeTargetFormGroup() {
		return new FormGroup<SnowflakeTargetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  <code>CodeGenConfigurationNode</code> enumerates all valid Node types. One and only one of its member variables can be populated. */
	export interface CodeGenConfigurationNode {
		AthenaConnectorSource?: AthenaConnectorSource;
		JDBCConnectorSource?: JDBCConnectorSource;
		SparkConnectorSource?: SparkConnectorSource;
		CatalogSource?: CatalogSource;
		RedshiftSource?: RedshiftSource;
		S3CatalogSource?: S3CatalogSource;
		S3CsvSource?: S3CsvSource;
		S3JsonSource?: S3JsonSource;
		S3ParquetSource?: S3ParquetSource;
		RelationalCatalogSource?: RelationalCatalogSource;
		DynamoDBCatalogSource?: DynamoDBCatalogSource;
		JDBCConnectorTarget?: JDBCConnectorTarget;
		SparkConnectorTarget?: SparkConnectorTarget;
		CatalogTarget?: BasicCatalogTarget;
		RedshiftTarget?: RedshiftTarget;
		S3CatalogTarget?: S3CatalogTarget;
		S3GlueParquetTarget?: S3GlueParquetTarget;
		S3DirectTarget?: S3DirectTarget;
		ApplyMapping?: ApplyMapping;
		SelectFields?: SelectFields;
		DropFields?: DropFields;
		RenameField?: RenameField;
		Spigot?: Spigot;
		Join?: Join;
		SplitFields?: SplitFields;
		SelectFromCollection?: SelectFromCollection;
		FillMissingValues?: FillMissingValues;
		Filter?: Filter;
		CustomCode?: CustomCode;
		SparkSQL?: SparkSQL;
		DirectKinesisSource?: DirectKinesisSource;
		DirectKafkaSource?: DirectKafkaSource;
		CatalogKinesisSource?: CatalogKinesisSource;
		CatalogKafkaSource?: CatalogKafkaSource;
		DropNullFields?: DropNullFields;
		Merge?: Merge;
		Union?: Union;
		PIIDetection?: PIIDetection;
		Aggregate?: Aggregate;
		DropDuplicates?: DropDuplicates;
		GovernedCatalogTarget?: GovernedCatalogTarget;
		GovernedCatalogSource?: GovernedCatalogSource;
		MicrosoftSQLServerCatalogSource?: MicrosoftSQLServerCatalogSource;
		MySQLCatalogSource?: MySQLCatalogSource;
		OracleSQLCatalogSource?: OracleSQLCatalogSource;
		PostgreSQLCatalogSource?: PostgreSQLCatalogSource;
		MicrosoftSQLServerCatalogTarget?: MicrosoftSQLServerCatalogTarget;
		MySQLCatalogTarget?: MySQLCatalogTarget;
		OracleSQLCatalogTarget?: OracleSQLCatalogTarget;
		PostgreSQLCatalogTarget?: PostgreSQLCatalogTarget;
		DynamicTransform?: DynamicTransform;
		EvaluateDataQuality?: EvaluateDataQuality;
		S3CatalogHudiSource?: S3CatalogHudiSource;
		CatalogHudiSource?: CatalogHudiSource;
		S3HudiSource?: S3HudiSource;
		S3HudiCatalogTarget?: S3HudiCatalogTarget;
		S3HudiDirectTarget?: S3HudiDirectTarget;

		/** Specifies the direct JDBC source connection. */
		DirectJDBCSource?: DirectJDBCSource;
		S3CatalogDeltaSource?: S3CatalogDeltaSource;
		CatalogDeltaSource?: CatalogDeltaSource;
		S3DeltaSource?: S3DeltaSource;
		S3DeltaCatalogTarget?: S3DeltaCatalogTarget;
		S3DeltaDirectTarget?: S3DeltaDirectTarget;
		AmazonRedshiftSource?: AmazonRedshiftSource;
		AmazonRedshiftTarget?: AmazonRedshiftTarget;
		EvaluateDataQualityMultiFrame?: EvaluateDataQualityMultiFrame;
		Recipe?: Recipe;
		SnowflakeSource?: SnowflakeSource;
		SnowflakeTarget?: SnowflakeTarget;
	}

	/**  <code>CodeGenConfigurationNode</code> enumerates all valid Node types. One and only one of its member variables can be populated. */
	export interface CodeGenConfigurationNodeFormProperties {
	}
	export function CreateCodeGenConfigurationNodeFormGroup() {
		return new FormGroup<CodeGenConfigurationNodeFormProperties>({
		});

	}

	export enum ConnectionPropertyKey { HOST = 'HOST', PORT = 'PORT', USERNAME = 'USERNAME', PASSWORD = 'PASSWORD', ENCRYPTED_PASSWORD = 'ENCRYPTED_PASSWORD', JDBC_DRIVER_JAR_URI = 'JDBC_DRIVER_JAR_URI', JDBC_DRIVER_CLASS_NAME = 'JDBC_DRIVER_CLASS_NAME', JDBC_ENGINE = 'JDBC_ENGINE', JDBC_ENGINE_VERSION = 'JDBC_ENGINE_VERSION', CONFIG_FILES = 'CONFIG_FILES', INSTANCE_ID = 'INSTANCE_ID', JDBC_CONNECTION_URL = 'JDBC_CONNECTION_URL', JDBC_ENFORCE_SSL = 'JDBC_ENFORCE_SSL', CUSTOM_JDBC_CERT = 'CUSTOM_JDBC_CERT', SKIP_CUSTOM_JDBC_CERT_VALIDATION = 'SKIP_CUSTOM_JDBC_CERT_VALIDATION', CUSTOM_JDBC_CERT_STRING = 'CUSTOM_JDBC_CERT_STRING', CONNECTION_URL = 'CONNECTION_URL', KAFKA_BOOTSTRAP_SERVERS = 'KAFKA_BOOTSTRAP_SERVERS', KAFKA_SSL_ENABLED = 'KAFKA_SSL_ENABLED', KAFKA_CUSTOM_CERT = 'KAFKA_CUSTOM_CERT', KAFKA_SKIP_CUSTOM_CERT_VALIDATION = 'KAFKA_SKIP_CUSTOM_CERT_VALIDATION', KAFKA_CLIENT_KEYSTORE = 'KAFKA_CLIENT_KEYSTORE', KAFKA_CLIENT_KEYSTORE_PASSWORD = 'KAFKA_CLIENT_KEYSTORE_PASSWORD', KAFKA_CLIENT_KEY_PASSWORD = 'KAFKA_CLIENT_KEY_PASSWORD', ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD = 'ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD', ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD = 'ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD', SECRET_ID = 'SECRET_ID', CONNECTOR_URL = 'CONNECTOR_URL', CONNECTOR_TYPE = 'CONNECTOR_TYPE', CONNECTOR_CLASS_NAME = 'CONNECTOR_CLASS_NAME', KAFKA_SASL_MECHANISM = 'KAFKA_SASL_MECHANISM', KAFKA_SASL_SCRAM_USERNAME = 'KAFKA_SASL_SCRAM_USERNAME', KAFKA_SASL_SCRAM_PASSWORD = 'KAFKA_SASL_SCRAM_PASSWORD', KAFKA_SASL_SCRAM_SECRETS_ARN = 'KAFKA_SASL_SCRAM_SECRETS_ARN', ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD = 'ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD', KAFKA_SASL_GSSAPI_KEYTAB = 'KAFKA_SASL_GSSAPI_KEYTAB', KAFKA_SASL_GSSAPI_KRB5_CONF = 'KAFKA_SASL_GSSAPI_KRB5_CONF', KAFKA_SASL_GSSAPI_SERVICE = 'KAFKA_SASL_GSSAPI_SERVICE', KAFKA_SASL_GSSAPI_PRINCIPAL = 'KAFKA_SASL_GSSAPI_PRINCIPAL' }

	export enum GlueRecordType { DATE = 'DATE', STRING = 'STRING', TIMESTAMP = 'TIMESTAMP', INT = 'INT', FLOAT = 'FLOAT', LONG = 'LONG', BIGDECIMAL = 'BIGDECIMAL', BYTE = 'BYTE', SHORT = 'SHORT', DOUBLE = 'DOUBLE' }

	export enum JDBCDataType { ARRAY = 'ARRAY', BIGINT = 'BIGINT', BINARY = 'BINARY', BIT = 'BIT', BLOB = 'BLOB', BOOLEAN = 'BOOLEAN', CHAR = 'CHAR', CLOB = 'CLOB', DATALINK = 'DATALINK', DATE = 'DATE', DECIMAL = 'DECIMAL', DISTINCT = 'DISTINCT', DOUBLE = 'DOUBLE', FLOAT = 'FLOAT', INTEGER = 'INTEGER', JAVA_OBJECT = 'JAVA_OBJECT', LONGNVARCHAR = 'LONGNVARCHAR', LONGVARBINARY = 'LONGVARBINARY', LONGVARCHAR = 'LONGVARCHAR', NCHAR = 'NCHAR', NCLOB = 'NCLOB', NULL = 'NULL', NUMERIC = 'NUMERIC', NVARCHAR = 'NVARCHAR', OTHER = 'OTHER', REAL = 'REAL', REF = 'REF', REF_CURSOR = 'REF_CURSOR', ROWID = 'ROWID', SMALLINT = 'SMALLINT', SQLXML = 'SQLXML', STRUCT = 'STRUCT', TIME = 'TIME', TIME_WITH_TIMEZONE = 'TIME_WITH_TIMEZONE', TIMESTAMP = 'TIMESTAMP', TIMESTAMP_WITH_TIMEZONE = 'TIMESTAMP_WITH_TIMEZONE', TINYINT = 'TINYINT', VARBINARY = 'VARBINARY', VARCHAR = 'VARCHAR' }


	/** A structure containing other metadata for a schema version belonging to the same metadata key. */
	export interface OtherMetadataValueListItem {
		MetadataValue?: string;
		CreatedTime?: string;
	}

	/** A structure containing other metadata for a schema version belonging to the same metadata key. */
	export interface OtherMetadataValueListItemFormProperties {
		MetadataValue: FormControl<string | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
	}
	export function CreateOtherMetadataValueListItemFormGroup() {
		return new FormGroup<OtherMetadataValueListItemFormProperties>({
			MetadataValue: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure containing metadata information for a schema version. */
	export interface MetadataInfo {
		MetadataValue?: string;
		CreatedTime?: string;
		OtherMetadataValueList?: Array<OtherMetadataValueListItem>;
	}

	/** A structure containing metadata information for a schema version. */
	export interface MetadataInfoFormProperties {
		MetadataValue: FormControl<string | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
	}
	export function CreateMetadataInfoFormGroup() {
		return new FormGroup<MetadataInfoFormProperties>({
			MetadataValue: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		 * <p>Deletes multiple tables at once.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
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
		 * Retrieves information about a list of blueprints.
		 * Post #X-Amz-Target=AWSGlue.BatchGetBlueprints
		 * @return {BatchGetBlueprintsResponse} Success
		 */
		BatchGetBlueprints(requestBody: BatchGetBlueprintsRequest): Observable<BatchGetBlueprintsResponse> {
			return this.http.post<BatchGetBlueprintsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchGetBlueprints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Retrieves the details for the custom patterns specified by a list of names.
		 * Post #X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes
		 * @return {BatchGetCustomEntityTypesResponse} Success
		 */
		BatchGetCustomEntityTypes(requestBody: BatchGetCustomEntityTypesRequest): Observable<BatchGetCustomEntityTypesResponse> {
			return this.http.post<BatchGetCustomEntityTypesResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchGetCustomEntityTypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of data quality results for the specified result IDs.
		 * Post #X-Amz-Target=AWSGlue.BatchGetDataQualityResult
		 * @return {BatchGetDataQualityResultResponse} Success
		 */
		BatchGetDataQualityResult(requestBody: BatchGetDataQualityResultRequest): Observable<BatchGetDataQualityResultResponse> {
			return this.http.post<BatchGetDataQualityResultResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchGetDataQualityResult', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Updates one or more partitions in a batch operation.
		 * Post #X-Amz-Target=AWSGlue.BatchUpdatePartition
		 * @return {BatchUpdatePartitionResponse} Success
		 */
		BatchUpdatePartition(requestBody: BatchUpdatePartitionRequest): Observable<BatchUpdatePartitionResponse> {
			return this.http.post<BatchUpdatePartitionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.BatchUpdatePartition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the specified recommendation run that was being used to generate rules.
		 * Post #X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun
		 * @return {CancelDataQualityRuleRecommendationRunResponse} Success
		 */
		CancelDataQualityRuleRecommendationRun(requestBody: CancelDataQualityRuleRecommendationRunRequest): Observable<CancelDataQualityRuleRecommendationRunResponse> {
			return this.http.post<CancelDataQualityRuleRecommendationRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CancelDataQualityRuleRecommendationRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a run where a ruleset is being evaluated against a data source.
		 * Post #X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun
		 * @return {CancelDataQualityRulesetEvaluationRunResponse} Success
		 */
		CancelDataQualityRulesetEvaluationRun(requestBody: CancelDataQualityRulesetEvaluationRunRequest): Observable<CancelDataQualityRulesetEvaluationRunResponse> {
			return this.http.post<CancelDataQualityRulesetEvaluationRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CancelDataQualityRulesetEvaluationRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>.
		 * Post #X-Amz-Target=AWSGlue.CancelMLTaskRun
		 * @return {CancelMLTaskRunResponse} Success
		 */
		CancelMLTaskRun(requestBody: CancelMLTaskRunRequest): Observable<CancelMLTaskRunResponse> {
			return this.http.post<CancelMLTaskRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CancelMLTaskRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the statement.
		 * Post #X-Amz-Target=AWSGlue.CancelStatement
		 * @return {CancelStatementResponse} Success
		 */
		CancelStatement(requestBody: CancelStatementRequest): Observable<CancelStatementResponse> {
			return this.http.post<CancelStatementResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CancelStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.
		 * Post #X-Amz-Target=AWSGlue.CheckSchemaVersionValidity
		 * @return {CheckSchemaVersionValidityResponse} Success
		 */
		CheckSchemaVersionValidity(requestBody: CheckSchemaVersionValidityInput): Observable<CheckSchemaVersionValidityResponse> {
			return this.http.post<CheckSchemaVersionValidityResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CheckSchemaVersionValidity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a blueprint with Glue.
		 * Post #X-Amz-Target=AWSGlue.CreateBlueprint
		 * @return {CreateBlueprintResponse} Success
		 */
		CreateBlueprint(requestBody: CreateBlueprintRequest): Observable<CreateBlueprintResponse> {
			return this.http.post<CreateBlueprintResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateBlueprint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data.</p> <p>Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.</p>
		 * Post #X-Amz-Target=AWSGlue.CreateCustomEntityType
		 * @return {CreateCustomEntityTypeResponse} Success
		 */
		CreateCustomEntityType(requestBody: CreateCustomEntityTypeRequest): Observable<CreateCustomEntityTypeResponse> {
			return this.http.post<CreateCustomEntityTypeResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateCustomEntityType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a data quality ruleset with DQDL rules applied to a specified Glue table.</p> <p>You create the ruleset using the Data Quality Definition Language (DQDL). For more information, see the Glue developer guide.</p>
		 * Post #X-Amz-Target=AWSGlue.CreateDataQualityRuleset
		 * @return {CreateDataQualityRulesetResponse} Success
		 */
		CreateDataQualityRuleset(requestBody: CreateDataQualityRulesetRequest): Observable<CreateDataQualityRulesetResponse> {
			return this.http.post<CreateDataQualityRulesetResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateDataQualityRuleset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Creates an Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it.</p> <p>Call this operation as the first step in the process of using a machine learning transform (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an optional <code>Description</code>, in addition to the parameters that you want to use for your algorithm.</p> <p>You must also specify certain parameters for the tasks that Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include <code>Role</code>, and optionally, <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
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
		 * Creates a specified partition index in an existing table.
		 * Post #X-Amz-Target=AWSGlue.CreatePartitionIndex
		 * @return {CreatePartitionIndexResponse} Success
		 */
		CreatePartitionIndex(requestBody: CreatePartitionIndexRequest): Observable<CreatePartitionIndexResponse> {
			return this.http.post<CreatePartitionIndexResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreatePartitionIndex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new registry which may be used to hold a collection of schemas.
		 * Post #X-Amz-Target=AWSGlue.CreateRegistry
		 * @return {CreateRegistryResponse} Success
		 */
		CreateRegistry(requestBody: CreateRegistryInput): Observable<CreateRegistryResponse> {
			return this.http.post<CreateRegistryResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateRegistry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version.</p> <p>When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the <code>RegisterSchemaVersion</code> API is used.</p> <p>When this API is called without a <code>RegistryId</code>, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.</p>
		 * Post #X-Amz-Target=AWSGlue.CreateSchema
		 * @return {CreateSchemaResponse} Success
		 */
		CreateSchema(requestBody: CreateSchemaInput): Observable<CreateSchemaResponse> {
			return this.http.post<CreateSchemaResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.
		 * Post #X-Amz-Target=AWSGlue.CreateSecurityConfiguration
		 * @return {CreateSecurityConfigurationResponse} Success
		 */
		CreateSecurityConfiguration(requestBody: CreateSecurityConfigurationRequest): Observable<CreateSecurityConfigurationResponse> {
			return this.http.post<CreateSecurityConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateSecurityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new session.
		 * Post #X-Amz-Target=AWSGlue.CreateSession
		 * @return {CreateSessionResponse} Success
		 */
		CreateSession(requestBody: CreateSessionRequest): Observable<CreateSessionResponse> {
			return this.http.post<CreateSessionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.CreateSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Deletes an existing blueprint.
		 * Post #X-Amz-Target=AWSGlue.DeleteBlueprint
		 * @return {DeleteBlueprintResponse} Success
		 */
		DeleteBlueprint(requestBody: DeleteBlueprintRequest): Observable<DeleteBlueprintResponse> {
			return this.http.post<DeleteBlueprintResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteBlueprint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Delete the partition column statistics of a column.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
		 * Post #X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition
		 * @return {DeleteColumnStatisticsForPartitionResponse} Success
		 */
		DeleteColumnStatisticsForPartition(requestBody: DeleteColumnStatisticsForPartitionRequest): Observable<DeleteColumnStatisticsForPartitionResponse> {
			return this.http.post<DeleteColumnStatisticsForPartitionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForPartition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeleteTable</code>.</p>
		 * Post #X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable
		 * @return {DeleteColumnStatisticsForTableResponse} Success
		 */
		DeleteColumnStatisticsForTable(requestBody: DeleteColumnStatisticsForTableRequest): Observable<DeleteColumnStatisticsForTableResponse> {
			return this.http.post<DeleteColumnStatisticsForTableResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteColumnStatisticsForTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Removes a specified crawler from the Glue Data Catalog, unless the crawler state is <code>RUNNING</code>.
		 * Post #X-Amz-Target=AWSGlue.DeleteCrawler
		 * @return {DeleteCrawlerResponse} Success
		 */
		DeleteCrawler(requestBody: DeleteCrawlerRequest): Observable<DeleteCrawlerResponse> {
			return this.http.post<DeleteCrawlerResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteCrawler', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a custom pattern by specifying its name.
		 * Post #X-Amz-Target=AWSGlue.DeleteCustomEntityType
		 * @return {DeleteCustomEntityTypeResponse} Success
		 */
		DeleteCustomEntityType(requestBody: DeleteCustomEntityTypeRequest): Observable<DeleteCustomEntityTypeResponse> {
			return this.http.post<DeleteCustomEntityTypeResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteCustomEntityType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a data quality ruleset.
		 * Post #X-Amz-Target=AWSGlue.DeleteDataQualityRuleset
		 * @return {DeleteDataQualityRulesetResponse} Success
		 */
		DeleteDataQualityRuleset(requestBody: DeleteDataQualityRulesetRequest): Observable<DeleteDataQualityRulesetResponse> {
			return this.http.post<DeleteDataQualityRulesetResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteDataQualityRuleset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a specified database from a Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that belong to the database.</p> </note>
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
		 * Deletes an Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. If you no longer need a transform, you can delete it by calling <code>DeleteMLTransforms</code>. However, any Glue jobs that still reference the deleted transform will no longer succeed.
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
		 * Deletes a specified partition index from an existing table.
		 * Post #X-Amz-Target=AWSGlue.DeletePartitionIndex
		 * @return {DeletePartitionIndexResponse} Success
		 */
		DeletePartitionIndex(requestBody: DeletePartitionIndexRequest): Observable<DeletePartitionIndexResponse> {
			return this.http.post<DeletePartitionIndexResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeletePartitionIndex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the <code>GetRegistry</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the registry such as the <code>UpdateRegistry</code>, <code>CreateSchema</code>, <code>UpdateSchema</code>, and <code>RegisterSchemaVersion</code> APIs.
		 * Post #X-Amz-Target=AWSGlue.DeleteRegistry
		 * @return {DeleteRegistryResponse} Success
		 */
		DeleteRegistry(requestBody: DeleteRegistryInput): Observable<DeleteRegistryResponse> {
			return this.http.post<DeleteRegistryResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteRegistry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call <code>GetSchema</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the <code>GetSchemaByDefinition</code>, and <code>RegisterSchemaVersion</code> APIs.
		 * Post #X-Amz-Target=AWSGlue.DeleteSchema
		 * @return {DeleteSchemaResponse} Success
		 */
		DeleteSchema(requestBody: DeleteSchemaInput): Observable<DeleteSchemaResponse> {
			return this.http.post<DeleteSchemaResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the <code>GetSchemaVersions</code> API after this call will list the status of the deleted versions.</p> <p>When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the <code>DeleteSchemaCheckpoint</code> API before using this API.</p> <p>You cannot use the <code>DeleteSchemaVersions</code> API to delete the first schema version in the schema set. The first schema version can only be deleted by the <code>DeleteSchema</code> API. This operation will also delete the attached <code>SchemaVersionMetadata</code> under the schema versions. Hard deletes will be enforced on the database.</p> <p>If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.</p>
		 * Post #X-Amz-Target=AWSGlue.DeleteSchemaVersions
		 * @return {DeleteSchemaVersionsResponse} Success
		 */
		DeleteSchemaVersions(requestBody: DeleteSchemaVersionsInput): Observable<DeleteSchemaVersionsResponse> {
			return this.http.post<DeleteSchemaVersionsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteSchemaVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Deletes the session.
		 * Post #X-Amz-Target=AWSGlue.DeleteSession
		 * @return {DeleteSessionResponse} Success
		 */
		DeleteSession(requestBody: DeleteSessionRequest): Observable<DeleteSessionResponse> {
			return this.http.post<DeleteSessionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.DeleteSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a table definition from the Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
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
		 * Retrieves the details of a blueprint.
		 * Post #X-Amz-Target=AWSGlue.GetBlueprint
		 * @return {GetBlueprintResponse} Success
		 */
		GetBlueprint(requestBody: GetBlueprintRequest): Observable<GetBlueprintResponse> {
			return this.http.post<GetBlueprintResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetBlueprint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the details of a blueprint run.
		 * Post #X-Amz-Target=AWSGlue.GetBlueprintRun
		 * @return {GetBlueprintRunResponse} Success
		 */
		GetBlueprintRun(requestBody: GetBlueprintRunRequest): Observable<GetBlueprintRunResponse> {
			return this.http.post<GetBlueprintRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetBlueprintRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the details of blueprint runs for a specified blueprint.
		 * Post #X-Amz-Target=AWSGlue.GetBlueprintRuns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetBlueprintRunsResponse} Success
		 */
		GetBlueprintRuns(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetBlueprintRunsRequest): Observable<GetBlueprintRunsResponse> {
			return this.http.post<GetBlueprintRunsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetBlueprintRuns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Retrieves partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>
		 * Post #X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition
		 * @return {GetColumnStatisticsForPartitionResponse} Success
		 */
		GetColumnStatisticsForPartition(requestBody: GetColumnStatisticsForPartitionRequest): Observable<GetColumnStatisticsForPartitionResponse> {
			return this.http.post<GetColumnStatisticsForPartitionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetColumnStatisticsForPartition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
		 * Post #X-Amz-Target=AWSGlue.GetColumnStatisticsForTable
		 * @return {GetColumnStatisticsForTableResponse} Success
		 */
		GetColumnStatisticsForTable(requestBody: GetColumnStatisticsForTableRequest): Observable<GetColumnStatisticsForTableResponse> {
			return this.http.post<GetColumnStatisticsForTableResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetColumnStatisticsForTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Retrieves the details of a custom pattern by specifying its name.
		 * Post #X-Amz-Target=AWSGlue.GetCustomEntityType
		 * @return {GetCustomEntityTypeResponse} Success
		 */
		GetCustomEntityType(requestBody: GetCustomEntityTypeRequest): Observable<GetCustomEntityTypeResponse> {
			return this.http.post<GetCustomEntityTypeResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetCustomEntityType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Retrieves the result of a data quality rule evaluation.
		 * Post #X-Amz-Target=AWSGlue.GetDataQualityResult
		 * @return {GetDataQualityResultResponse} Success
		 */
		GetDataQualityResult(requestBody: GetDataQualityResultRequest): Observable<GetDataQualityResultResponse> {
			return this.http.post<GetDataQualityResultResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetDataQualityResult', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the specified recommendation run that was used to generate rules.
		 * Post #X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun
		 * @return {GetDataQualityRuleRecommendationRunResponse} Success
		 */
		GetDataQualityRuleRecommendationRun(requestBody: GetDataQualityRuleRecommendationRunRequest): Observable<GetDataQualityRuleRecommendationRunResponse> {
			return this.http.post<GetDataQualityRuleRecommendationRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetDataQualityRuleRecommendationRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an existing ruleset by identifier or name.
		 * Post #X-Amz-Target=AWSGlue.GetDataQualityRuleset
		 * @return {GetDataQualityRulesetResponse} Success
		 */
		GetDataQualityRuleset(requestBody: GetDataQualityRulesetRequest): Observable<GetDataQualityRulesetResponse> {
			return this.http.post<GetDataQualityRulesetResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetDataQualityRuleset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a specific run where a ruleset is evaluated against a data source.
		 * Post #X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun
		 * @return {GetDataQualityRulesetEvaluationRunResponse} Success
		 */
		GetDataQualityRulesetEvaluationRun(requestBody: GetDataQualityRulesetEvaluationRunRequest): Observable<GetDataQualityRulesetEvaluationRunResponse> {
			return this.http.post<GetDataQualityRulesetEvaluationRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetDataQualityRulesetEvaluationRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Retrieves information about a specified development endpoint.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
		 * Post #X-Amz-Target=AWSGlue.GetDevEndpoint
		 * @return {GetDevEndpointResponse} Success
		 */
		GetDevEndpoint(requestBody: GetDevEndpointRequest): Observable<GetDevEndpointResponse> {
			return this.http.post<GetDevEndpointResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetDevEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves all the development endpoints in this Amazon Web Services account.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
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
		 * <p>Returns information on a job bookmark entry.</p> <p>For more information about enabling and using job bookmarks, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a> </p> </li> </ul>
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
		 * Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's <code>TransformID</code>.
		 * Post #X-Amz-Target=AWSGlue.GetMLTaskRun
		 * @return {GetMLTaskRunResponse} Success
		 */
		GetMLTaskRun(requestBody: GetMLTaskRunRequest): Observable<GetMLTaskRunResponse> {
			return this.http.post<GetMLTaskRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetMLTaskRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other optional parameters as documented in this section.</p> <p>This operation returns a list of historic runs and must be paginated.</p>
		 * Post #X-Amz-Target=AWSGlue.GetMLTaskRuns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetMLTaskRunsResponse} Success
		 */
		GetMLTaskRuns(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetMLTaskRunsRequest): Observable<GetMLTaskRunsResponse> {
			return this.http.post<GetMLTaskRunsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetMLTaskRuns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets an Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. You can retrieve their metadata by calling <code>GetMLTransform</code>.
		 * Post #X-Amz-Target=AWSGlue.GetMLTransform
		 * @return {GetMLTransformResponse} Success
		 */
		GetMLTransform(requestBody: GetMLTransformRequest): Observable<GetMLTransformResponse> {
			return this.http.post<GetMLTransformResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetMLTransform', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a sortable, filterable list of existing Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue, and you can retrieve their metadata by calling <code>GetMLTransforms</code>.
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
		 * Retrieves the partition indexes associated with a table.
		 * Post #X-Amz-Target=AWSGlue.GetPartitionIndexes
		 * @param {string} NextToken Pagination token
		 * @return {GetPartitionIndexesResponse} Success
		 */
		GetPartitionIndexes(NextToken: string | null | undefined, requestBody: GetPartitionIndexesRequest): Observable<GetPartitionIndexesResponse> {
			return this.http.post<GetPartitionIndexesResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetPartitionIndexes?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Describes the specified registry in detail.
		 * Post #X-Amz-Target=AWSGlue.GetRegistry
		 * @return {GetRegistryResponse} Success
		 */
		GetRegistry(requestBody: GetRegistryInput): Observable<GetRegistryResponse> {
			return this.http.post<GetRegistryResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetRegistry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the resource policies set on individual resources by Resource Access Manager during cross-account permission grants. Also retrieves the Data Catalog resource policy.</p> <p>If you enabled metadata encryption in Data Catalog settings, and you do not have permission on the KMS key, the operation can't return the Data Catalog resource policy.</p>
		 * Post #X-Amz-Target=AWSGlue.GetResourcePolicies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetResourcePoliciesResponse} Success
		 */
		GetResourcePolicies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetResourcePoliciesRequest): Observable<GetResourcePoliciesResponse> {
			return this.http.post<GetResourcePoliciesResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetResourcePolicies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Describes the specified schema in detail.
		 * Post #X-Amz-Target=AWSGlue.GetSchema
		 * @return {GetSchemaResponse} Success
		 */
		GetSchema(requestBody: GetSchemaInput): Observable<GetSchemaResponse> {
			return this.http.post<GetSchemaResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.
		 * Post #X-Amz-Target=AWSGlue.GetSchemaByDefinition
		 * @return {GetSchemaByDefinitionResponse} Success
		 */
		GetSchemaByDefinition(requestBody: GetSchemaByDefinitionInput): Observable<GetSchemaByDefinitionResponse> {
			return this.http.post<GetSchemaByDefinitionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetSchemaByDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.
		 * Post #X-Amz-Target=AWSGlue.GetSchemaVersion
		 * @return {GetSchemaVersionResponse} Success
		 */
		GetSchemaVersion(requestBody: GetSchemaVersionInput): Observable<GetSchemaVersionResponse> {
			return this.http.post<GetSchemaVersionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetSchemaVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p> <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>
		 * Post #X-Amz-Target=AWSGlue.GetSchemaVersionsDiff
		 * @return {GetSchemaVersionsDiffResponse} Success
		 */
		GetSchemaVersionsDiff(requestBody: GetSchemaVersionsDiffInput): Observable<GetSchemaVersionsDiffResponse> {
			return this.http.post<GetSchemaVersionsDiffResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetSchemaVersionsDiff', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Retrieves the session.
		 * Post #X-Amz-Target=AWSGlue.GetSession
		 * @return {GetSessionResponse} Success
		 */
		GetSession(requestBody: GetSessionRequest): Observable<GetSessionResponse> {
			return this.http.post<GetSessionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the statement.
		 * Post #X-Amz-Target=AWSGlue.GetStatement
		 * @return {GetStatementResponse} Success
		 */
		GetStatement(requestBody: GetStatementRequest): Observable<GetStatementResponse> {
			return this.http.post<GetStatementResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartition</code>.</p>
		 * Post #X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata
		 * @return {GetUnfilteredPartitionMetadataResponse} Success
		 */
		GetUnfilteredPartitionMetadata(requestBody: GetUnfilteredPartitionMetadataRequest): Observable<GetUnfilteredPartitionMetadataResponse> {
			return this.http.post<GetUnfilteredPartitionMetadataResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetUnfilteredPartitionMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartitions</code>.</p>
		 * Post #X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetUnfilteredPartitionsMetadataResponse} Success
		 */
		GetUnfilteredPartitionsMetadata(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetUnfilteredPartitionsMetadataRequest): Observable<GetUnfilteredPartitionsMetadataResponse> {
			return this.http.post<GetUnfilteredPartitionsMetadataResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetUnfilteredPartitionsMetadata?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves table metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetTable</code>.</p>
		 * Post #X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata
		 * @return {GetUnfilteredTableMetadataResponse} Success
		 */
		GetUnfilteredTableMetadata(requestBody: GetUnfilteredTableMetadataRequest): Observable<GetUnfilteredTableMetadataResponse> {
			return this.http.post<GetUnfilteredTableMetadataResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.GetUnfilteredTableMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Imports an existing Amazon Athena Data Catalog to Glue.
		 * Post #X-Amz-Target=AWSGlue.ImportCatalogToGlue
		 * @return {ImportCatalogToGlueResponse} Success
		 */
		ImportCatalogToGlue(requestBody: ImportCatalogToGlueRequest): Observable<ImportCatalogToGlueResponse> {
			return this.http.post<ImportCatalogToGlueResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ImportCatalogToGlue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the blueprint names in an account.
		 * Post #X-Amz-Target=AWSGlue.ListBlueprints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBlueprintsResponse} Success
		 */
		ListBlueprints(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListBlueprintsRequest): Observable<ListBlueprintsResponse> {
			return this.http.post<ListBlueprintsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListBlueprints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the names of all crawler resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
		 * Post #X-Amz-Target=AWSGlue.ListCrawlers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCrawlersResponse} Success
		 */
		ListCrawlers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCrawlersRequest): Observable<ListCrawlersResponse> {
			return this.http.post<ListCrawlersResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListCrawlers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all the crawls of a specified crawler. Returns only the crawls that have occurred since the launch date of the crawler history feature, and only retains up to 12 months of crawls. Older crawls will not be returned.</p> <p>You may use this API to:</p> <ul> <li> <p>Retrive all the crawls of a specified crawler.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler within a limited count.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler in a specific time range.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler with a particular state, crawl ID, or DPU hour value.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSGlue.ListCrawls
		 * @return {ListCrawlsResponse} Success
		 */
		ListCrawls(requestBody: ListCrawlsRequest): Observable<ListCrawlsResponse> {
			return this.http.post<ListCrawlsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListCrawls', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the custom patterns that have been created.
		 * Post #X-Amz-Target=AWSGlue.ListCustomEntityTypes
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCustomEntityTypesResponse} Success
		 */
		ListCustomEntityTypes(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCustomEntityTypesRequest): Observable<ListCustomEntityTypesResponse> {
			return this.http.post<ListCustomEntityTypesResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListCustomEntityTypes?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all data quality execution results for your account.
		 * Post #X-Amz-Target=AWSGlue.ListDataQualityResults
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataQualityResultsResponse} Success
		 */
		ListDataQualityResults(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDataQualityResultsRequest): Observable<ListDataQualityResultsResponse> {
			return this.http.post<ListDataQualityResultsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListDataQualityResults?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the recommendation runs meeting the filter criteria.
		 * Post #X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataQualityRuleRecommendationRunsResponse} Success
		 */
		ListDataQualityRuleRecommendationRuns(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDataQualityRuleRecommendationRunsRequest): Observable<ListDataQualityRuleRecommendationRunsResponse> {
			return this.http.post<ListDataQualityRuleRecommendationRunsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListDataQualityRuleRecommendationRuns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the runs meeting the filter criteria, where a ruleset is evaluated against a data source.
		 * Post #X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataQualityRulesetEvaluationRunsResponse} Success
		 */
		ListDataQualityRulesetEvaluationRuns(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDataQualityRulesetEvaluationRunsRequest): Observable<ListDataQualityRulesetEvaluationRunsResponse> {
			return this.http.post<ListDataQualityRulesetEvaluationRunsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListDataQualityRulesetEvaluationRuns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of rulesets for the specified list of Glue tables.
		 * Post #X-Amz-Target=AWSGlue.ListDataQualityRulesets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataQualityRulesetsResponse} Success
		 */
		ListDataQualityRulesets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDataQualityRulesetsRequest): Observable<ListDataQualityRulesetsResponse> {
			return this.http.post<ListDataQualityRulesetsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListDataQualityRulesets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the names of all <code>DevEndpoint</code> resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
		 * Post #X-Amz-Target=AWSGlue.ListDevEndpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDevEndpointsResponse} Success
		 */
		ListDevEndpoints(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDevEndpointsRequest): Observable<ListDevEndpointsResponse> {
			return this.http.post<ListDevEndpointsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListDevEndpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the names of all job resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
		 * Post #X-Amz-Target=AWSGlue.ListJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListJobsRequest): Observable<ListJobsResponse> {
			return this.http.post<ListJobsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account, or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved.
		 * Post #X-Amz-Target=AWSGlue.ListMLTransforms
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMLTransformsResponse} Success
		 */
		ListMLTransforms(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMLTransformsRequest): Observable<ListMLTransformsResponse> {
			return this.http.post<ListMLTransformsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListMLTransforms?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of registries that you have created, with minimal registry information. Registries in the <code>Deleting</code> status will not be included in the results. Empty results will be returned if there are no registries available.
		 * Post #X-Amz-Target=AWSGlue.ListRegistries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRegistriesResponse} Success
		 */
		ListRegistries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRegistriesInput): Observable<ListRegistriesResponse> {
			return this.http.post<ListRegistriesResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListRegistries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.
		 * Post #X-Amz-Target=AWSGlue.ListSchemaVersions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSchemaVersionsResponse} Success
		 */
		ListSchemaVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSchemaVersionsInput): Observable<ListSchemaVersionsResponse> {
			return this.http.post<ListSchemaVersionsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListSchemaVersions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available.</p> <p>When the <code>RegistryId</code> is not provided, all the schemas across registries will be part of the API response.</p>
		 * Post #X-Amz-Target=AWSGlue.ListSchemas
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSchemasResponse} Success
		 */
		ListSchemas(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSchemasInput): Observable<ListSchemasResponse> {
			return this.http.post<ListSchemasResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListSchemas?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a list of sessions.
		 * Post #X-Amz-Target=AWSGlue.ListSessions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSessionsResponse} Success
		 */
		ListSessions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSessionsRequest): Observable<ListSessionsResponse> {
			return this.http.post<ListSessionsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListSessions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists statements for the session.
		 * Post #X-Amz-Target=AWSGlue.ListStatements
		 * @return {ListStatementsResponse} Success
		 */
		ListStatements(requestBody: ListStatementsRequest): Observable<ListStatementsResponse> {
			return this.http.post<ListStatementsResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ListStatements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
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
		 * Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.
		 * Post #X-Amz-Target=AWSGlue.PutSchemaVersionMetadata
		 * @return {PutSchemaVersionMetadataResponse} Success
		 */
		PutSchemaVersionMetadata(requestBody: PutSchemaVersionMetadataInput): Observable<PutSchemaVersionMetadataResponse> {
			return this.http.post<PutSchemaVersionMetadataResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.PutSchemaVersionMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Queries for the schema version metadata information.
		 * Post #X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata
		 * @return {QuerySchemaVersionMetadataResponse} Success
		 */
		QuerySchemaVersionMetadata(requestBody: QuerySchemaVersionMetadataInput): Observable<QuerySchemaVersionMetadataResponse> {
			return this.http.post<QuerySchemaVersionMetadataResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.QuerySchemaVersionMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry.</p> <p>If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the <code>GetSchemaVersion</code> API with the <code>SchemaVersionId</code> to check compatibility modes.</p> <p>If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</p>
		 * Post #X-Amz-Target=AWSGlue.RegisterSchemaVersion
		 * @return {RegisterSchemaVersionResponse} Success
		 */
		RegisterSchemaVersion(requestBody: RegisterSchemaVersionInput): Observable<RegisterSchemaVersionResponse> {
			return this.http.post<RegisterSchemaVersionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.RegisterSchemaVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a key value pair from the schema version metadata for the specified schema version ID.
		 * Post #X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata
		 * @return {RemoveSchemaVersionMetadataResponse} Success
		 */
		RemoveSchemaVersionMetadata(requestBody: RemoveSchemaVersionMetadataInput): Observable<RemoveSchemaVersionMetadataResponse> {
			return this.http.post<RemoveSchemaVersionMetadataResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.RemoveSchemaVersionMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resets a bookmark entry.</p> <p>For more information about enabling and using job bookmarks, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AWSGlue.ResetJobBookmark
		 * @return {ResetJobBookmarkResponse} Success
		 */
		ResetJobBookmark(requestBody: ResetJobBookmarkRequest): Observable<ResetJobBookmarkResponse> {
			return this.http.post<ResetJobBookmarkResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ResetJobBookmark', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.
		 * Post #X-Amz-Target=AWSGlue.ResumeWorkflowRun
		 * @return {ResumeWorkflowRunResponse} Success
		 */
		ResumeWorkflowRun(requestBody: ResumeWorkflowRunRequest): Observable<ResumeWorkflowRunResponse> {
			return this.http.post<ResumeWorkflowRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.ResumeWorkflowRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Executes the statement.
		 * Post #X-Amz-Target=AWSGlue.RunStatement
		 * @return {RunStatementResponse} Success
		 */
		RunStatement(requestBody: RunStatementRequest): Observable<RunStatementResponse> {
			return this.http.post<RunStatementResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.RunStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Starts a new run of the specified blueprint.
		 * Post #X-Amz-Target=AWSGlue.StartBlueprintRun
		 * @return {StartBlueprintRunResponse} Success
		 */
		StartBlueprintRun(requestBody: StartBlueprintRunRequest): Observable<StartBlueprintRunResponse> {
			return this.http.post<StartBlueprintRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StartBlueprintRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Starts a recommendation run that is used to generate rules when you don't know what rules to write. Glue Data Quality analyzes the data and comes up with recommendations for a potential ruleset. You can then triage the ruleset and modify the generated ruleset to your liking.
		 * Post #X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun
		 * @return {StartDataQualityRuleRecommendationRunResponse} Success
		 */
		StartDataQualityRuleRecommendationRun(requestBody: StartDataQualityRuleRecommendationRunRequest): Observable<StartDataQualityRuleRecommendationRunResponse> {
			return this.http.post<StartDataQualityRuleRecommendationRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StartDataQualityRuleRecommendationRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Once you have a ruleset definition (either recommended or your own), you call this operation to evaluate the ruleset against a data source (Glue table). The evaluation computes results which you can retrieve with the <code>GetDataQualityResult</code> API.
		 * Post #X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun
		 * @return {StartDataQualityRulesetEvaluationRunResponse} Success
		 */
		StartDataQualityRulesetEvaluationRun(requestBody: StartDataQualityRulesetEvaluationRunRequest): Observable<StartDataQualityRulesetEvaluationRunResponse> {
			return this.http.post<StartDataQualityRulesetEvaluationRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StartDataQualityRulesetEvaluationRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Enables you to provide additional labels (examples of truth) to be used to teach the machine learning transform and improve its quality. This API operation is generally used as part of the active learning workflow that starts with the <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in improving the quality of your machine learning transform. </p> <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue machine learning will have generated a series of questions for humans to answer. (Answering these questions is often called 'labeling' in the machine learning workflows). In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” After the labeling process is finished, users upload their answers/labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform use the new and improved labels and perform a higher-quality transformation.</p> <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and combines all labels that you upload unless you set <code>Replace</code> to true. If you set <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all previously uploaded labels and learns only from the exact set that you upload. Replacing labels can be helpful if you realize that you previously uploaded incorrect labels, and you believe that they are having a negative effect on your transform quality.</p> <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code> operation. </p>
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
		 * <p>Starts a task to estimate the quality of the transform. </p> <p>When you provide label sets as examples of truth, Glue machine learning uses some of those examples to learn from them. The rest of the labels are used as a test to estimate quality.</p> <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more information about the stats of the <code>EvaluationTaskRun</code>.</p>
		 * Post #X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun
		 * @return {StartMLEvaluationTaskRunResponse} Success
		 */
		StartMLEvaluationTaskRun(requestBody: StartMLEvaluationTaskRunRequest): Observable<StartMLEvaluationTaskRunResponse> {
			return this.http.post<StartMLEvaluationTaskRunResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StartMLEvaluationTaskRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the active learning workflow for your machine learning transform to improve the transform's quality by generating label sets and adding labels.</p> <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue will have generated a "labeling set" or a set of questions for humans to answer.</p> <p>In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” </p> <p>After the labeling process is finished, you can upload your labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation.</p>
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
		 * Stops the session.
		 * Post #X-Amz-Target=AWSGlue.StopSession
		 * @return {StopSessionResponse} Success
		 */
		StopSession(requestBody: StopSessionRequest): Observable<StopSessionResponse> {
			return this.http.post<StopSessionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.StopSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Adds tags to a resource. A tag is a label you can assign to an Amazon Web Services resource. In Glue, you can tag only certain resources. For information about what resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a>.
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
		 * Updates a registered blueprint.
		 * Post #X-Amz-Target=AWSGlue.UpdateBlueprint
		 * @return {UpdateBlueprintResponse} Success
		 */
		UpdateBlueprint(requestBody: UpdateBlueprintRequest): Observable<UpdateBlueprintResponse> {
			return this.http.post<UpdateBlueprintResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateBlueprint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Creates or updates partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdatePartition</code>.</p>
		 * Post #X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition
		 * @return {UpdateColumnStatisticsForPartitionResponse} Success
		 */
		UpdateColumnStatisticsForPartition(requestBody: UpdateColumnStatisticsForPartitionRequest): Observable<UpdateColumnStatisticsForPartitionResponse> {
			return this.http.post<UpdateColumnStatisticsForPartitionResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForPartition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
		 * Post #X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable
		 * @return {UpdateColumnStatisticsForTableResponse} Success
		 */
		UpdateColumnStatisticsForTable(requestBody: UpdateColumnStatisticsForTableRequest): Observable<UpdateColumnStatisticsForTableResponse> {
			return this.http.post<UpdateColumnStatisticsForTableResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateColumnStatisticsForTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Updates the specified data quality ruleset.
		 * Post #X-Amz-Target=AWSGlue.UpdateDataQualityRuleset
		 * @return {UpdateDataQualityRulesetResponse} Success
		 */
		UpdateDataQualityRuleset(requestBody: UpdateDataQualityRulesetRequest): Observable<UpdateDataQualityRulesetResponse> {
			return this.http.post<UpdateDataQualityRulesetResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateDataQualityRuleset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Updates an existing job definition. The previous job definition is completely overwritten by this information.
		 * Post #X-Amz-Target=AWSGlue.UpdateJob
		 * @return {UpdateJobResponse} Success
		 */
		UpdateJob(requestBody: UpdateJobRequest): Observable<UpdateJobResponse> {
			return this.http.post<UpdateJobResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Synchronizes a job from the source control repository. This operation takes the job artifacts that are located in the remote repository and updates the Glue internal stores with these artifacts.</p> <p>This API supports optional parameters which take in the repository information.</p>
		 * Post #X-Amz-Target=AWSGlue.UpdateJobFromSourceControl
		 * @return {UpdateJobFromSourceControlResponse} Success
		 */
		UpdateJobFromSourceControl(requestBody: UpdateJobFromSourceControlRequest): Observable<UpdateJobFromSourceControlResponse> {
			return this.http.post<UpdateJobFromSourceControlResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateJobFromSourceControl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry.
		 * Post #X-Amz-Target=AWSGlue.UpdateRegistry
		 * @return {UpdateRegistryResponse} Success
		 */
		UpdateRegistry(requestBody: UpdateRegistryInput): Observable<UpdateRegistryResponse> {
			return this.http.post<UpdateRegistryResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateRegistry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the description, compatibility setting, or version checkpoint for a schema set.</p> <p>For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for <code>Compatibility</code> is provided, the <code>VersionNumber</code> (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.</p> <p>If the value for the <code>VersionNumber</code> (checkpoint) is provided, <code>Compatibility</code> is optional and this can be used to set/reset a checkpoint for the schema.</p> <p>This update will happen only if the schema is in the AVAILABLE state.</p>
		 * Post #X-Amz-Target=AWSGlue.UpdateSchema
		 * @return {UpdateSchemaResponse} Success
		 */
		UpdateSchema(requestBody: UpdateSchemaInput): Observable<UpdateSchemaResponse> {
			return this.http.post<UpdateSchemaResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Synchronizes a job to the source control repository. This operation takes the job artifacts from the Glue internal stores and makes a commit to the remote repository that is configured on the job.</p> <p>This API supports optional parameters which take in the repository information.</p>
		 * Post #X-Amz-Target=AWSGlue.UpdateSourceControlFromJob
		 * @return {UpdateSourceControlFromJobResponse} Success
		 */
		UpdateSourceControlFromJob(requestBody: UpdateSourceControlFromJobRequest): Observable<UpdateSourceControlFromJobResponse> {
			return this.http.post<UpdateSourceControlFromJobResponse>(this.baseUri + '#X-Amz-Target=AWSGlue.UpdateSourceControlFromJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

	export enum BatchCreatePartitionX_Amz_Target { 'AWSGlue.BatchCreatePartition' = 'AWSGlue.BatchCreatePartition' }

	export enum BatchDeleteConnectionX_Amz_Target { 'AWSGlue.BatchDeleteConnection' = 'AWSGlue.BatchDeleteConnection' }

	export enum BatchDeletePartitionX_Amz_Target { 'AWSGlue.BatchDeletePartition' = 'AWSGlue.BatchDeletePartition' }

	export enum BatchDeleteTableX_Amz_Target { 'AWSGlue.BatchDeleteTable' = 'AWSGlue.BatchDeleteTable' }

	export enum BatchDeleteTableVersionX_Amz_Target { 'AWSGlue.BatchDeleteTableVersion' = 'AWSGlue.BatchDeleteTableVersion' }

	export enum BatchGetBlueprintsX_Amz_Target { 'AWSGlue.BatchGetBlueprints' = 'AWSGlue.BatchGetBlueprints' }

	export enum BatchGetCrawlersX_Amz_Target { 'AWSGlue.BatchGetCrawlers' = 'AWSGlue.BatchGetCrawlers' }

	export enum BatchGetCustomEntityTypesX_Amz_Target { 'AWSGlue.BatchGetCustomEntityTypes' = 'AWSGlue.BatchGetCustomEntityTypes' }

	export enum BatchGetDataQualityResultX_Amz_Target { 'AWSGlue.BatchGetDataQualityResult' = 'AWSGlue.BatchGetDataQualityResult' }

	export enum BatchGetDevEndpointsX_Amz_Target { 'AWSGlue.BatchGetDevEndpoints' = 'AWSGlue.BatchGetDevEndpoints' }

	export enum BatchGetJobsX_Amz_Target { 'AWSGlue.BatchGetJobs' = 'AWSGlue.BatchGetJobs' }

	export enum BatchGetPartitionX_Amz_Target { 'AWSGlue.BatchGetPartition' = 'AWSGlue.BatchGetPartition' }

	export enum BatchGetTriggersX_Amz_Target { 'AWSGlue.BatchGetTriggers' = 'AWSGlue.BatchGetTriggers' }

	export enum BatchGetWorkflowsX_Amz_Target { 'AWSGlue.BatchGetWorkflows' = 'AWSGlue.BatchGetWorkflows' }

	export enum BatchStopJobRunX_Amz_Target { 'AWSGlue.BatchStopJobRun' = 'AWSGlue.BatchStopJobRun' }

	export enum BatchUpdatePartitionX_Amz_Target { 'AWSGlue.BatchUpdatePartition' = 'AWSGlue.BatchUpdatePartition' }

	export enum CancelDataQualityRuleRecommendationRunX_Amz_Target { 'AWSGlue.CancelDataQualityRuleRecommendationRun' = 'AWSGlue.CancelDataQualityRuleRecommendationRun' }

	export enum CancelDataQualityRulesetEvaluationRunX_Amz_Target { 'AWSGlue.CancelDataQualityRulesetEvaluationRun' = 'AWSGlue.CancelDataQualityRulesetEvaluationRun' }

	export enum CancelMLTaskRunX_Amz_Target { 'AWSGlue.CancelMLTaskRun' = 'AWSGlue.CancelMLTaskRun' }

	export enum CancelStatementX_Amz_Target { 'AWSGlue.CancelStatement' = 'AWSGlue.CancelStatement' }

	export enum CheckSchemaVersionValidityX_Amz_Target { 'AWSGlue.CheckSchemaVersionValidity' = 'AWSGlue.CheckSchemaVersionValidity' }

	export enum CreateBlueprintX_Amz_Target { 'AWSGlue.CreateBlueprint' = 'AWSGlue.CreateBlueprint' }

	export enum CreateClassifierX_Amz_Target { 'AWSGlue.CreateClassifier' = 'AWSGlue.CreateClassifier' }

	export enum CreateConnectionX_Amz_Target { 'AWSGlue.CreateConnection' = 'AWSGlue.CreateConnection' }

	export enum CreateCrawlerX_Amz_Target { 'AWSGlue.CreateCrawler' = 'AWSGlue.CreateCrawler' }

	export enum CreateCustomEntityTypeX_Amz_Target { 'AWSGlue.CreateCustomEntityType' = 'AWSGlue.CreateCustomEntityType' }

	export enum CreateDataQualityRulesetX_Amz_Target { 'AWSGlue.CreateDataQualityRuleset' = 'AWSGlue.CreateDataQualityRuleset' }

	export enum CreateDatabaseX_Amz_Target { 'AWSGlue.CreateDatabase' = 'AWSGlue.CreateDatabase' }

	export enum CreateDevEndpointX_Amz_Target { 'AWSGlue.CreateDevEndpoint' = 'AWSGlue.CreateDevEndpoint' }

	export enum CreateJobX_Amz_Target { 'AWSGlue.CreateJob' = 'AWSGlue.CreateJob' }

	export enum CreateMLTransformX_Amz_Target { 'AWSGlue.CreateMLTransform' = 'AWSGlue.CreateMLTransform' }

	export enum CreatePartitionX_Amz_Target { 'AWSGlue.CreatePartition' = 'AWSGlue.CreatePartition' }

	export enum CreatePartitionIndexX_Amz_Target { 'AWSGlue.CreatePartitionIndex' = 'AWSGlue.CreatePartitionIndex' }

	export enum CreateRegistryX_Amz_Target { 'AWSGlue.CreateRegistry' = 'AWSGlue.CreateRegistry' }

	export enum CreateSchemaX_Amz_Target { 'AWSGlue.CreateSchema' = 'AWSGlue.CreateSchema' }

	export enum CreateScriptX_Amz_Target { 'AWSGlue.CreateScript' = 'AWSGlue.CreateScript' }

	export enum CreateSecurityConfigurationX_Amz_Target { 'AWSGlue.CreateSecurityConfiguration' = 'AWSGlue.CreateSecurityConfiguration' }

	export enum CreateSessionX_Amz_Target { 'AWSGlue.CreateSession' = 'AWSGlue.CreateSession' }

	export enum CreateTableX_Amz_Target { 'AWSGlue.CreateTable' = 'AWSGlue.CreateTable' }

	export enum CreateTriggerX_Amz_Target { 'AWSGlue.CreateTrigger' = 'AWSGlue.CreateTrigger' }

	export enum CreateUserDefinedFunctionX_Amz_Target { 'AWSGlue.CreateUserDefinedFunction' = 'AWSGlue.CreateUserDefinedFunction' }

	export enum CreateWorkflowX_Amz_Target { 'AWSGlue.CreateWorkflow' = 'AWSGlue.CreateWorkflow' }

	export enum DeleteBlueprintX_Amz_Target { 'AWSGlue.DeleteBlueprint' = 'AWSGlue.DeleteBlueprint' }

	export enum DeleteClassifierX_Amz_Target { 'AWSGlue.DeleteClassifier' = 'AWSGlue.DeleteClassifier' }

	export enum DeleteColumnStatisticsForPartitionX_Amz_Target { 'AWSGlue.DeleteColumnStatisticsForPartition' = 'AWSGlue.DeleteColumnStatisticsForPartition' }

	export enum DeleteColumnStatisticsForTableX_Amz_Target { 'AWSGlue.DeleteColumnStatisticsForTable' = 'AWSGlue.DeleteColumnStatisticsForTable' }

	export enum DeleteConnectionX_Amz_Target { 'AWSGlue.DeleteConnection' = 'AWSGlue.DeleteConnection' }

	export enum DeleteCrawlerX_Amz_Target { 'AWSGlue.DeleteCrawler' = 'AWSGlue.DeleteCrawler' }

	export enum DeleteCustomEntityTypeX_Amz_Target { 'AWSGlue.DeleteCustomEntityType' = 'AWSGlue.DeleteCustomEntityType' }

	export enum DeleteDataQualityRulesetX_Amz_Target { 'AWSGlue.DeleteDataQualityRuleset' = 'AWSGlue.DeleteDataQualityRuleset' }

	export enum DeleteDatabaseX_Amz_Target { 'AWSGlue.DeleteDatabase' = 'AWSGlue.DeleteDatabase' }

	export enum DeleteDevEndpointX_Amz_Target { 'AWSGlue.DeleteDevEndpoint' = 'AWSGlue.DeleteDevEndpoint' }

	export enum DeleteJobX_Amz_Target { 'AWSGlue.DeleteJob' = 'AWSGlue.DeleteJob' }

	export enum DeleteMLTransformX_Amz_Target { 'AWSGlue.DeleteMLTransform' = 'AWSGlue.DeleteMLTransform' }

	export enum DeletePartitionX_Amz_Target { 'AWSGlue.DeletePartition' = 'AWSGlue.DeletePartition' }

	export enum DeletePartitionIndexX_Amz_Target { 'AWSGlue.DeletePartitionIndex' = 'AWSGlue.DeletePartitionIndex' }

	export enum DeleteRegistryX_Amz_Target { 'AWSGlue.DeleteRegistry' = 'AWSGlue.DeleteRegistry' }

	export enum DeleteResourcePolicyX_Amz_Target { 'AWSGlue.DeleteResourcePolicy' = 'AWSGlue.DeleteResourcePolicy' }

	export enum DeleteSchemaX_Amz_Target { 'AWSGlue.DeleteSchema' = 'AWSGlue.DeleteSchema' }

	export enum DeleteSchemaVersionsX_Amz_Target { 'AWSGlue.DeleteSchemaVersions' = 'AWSGlue.DeleteSchemaVersions' }

	export enum DeleteSecurityConfigurationX_Amz_Target { 'AWSGlue.DeleteSecurityConfiguration' = 'AWSGlue.DeleteSecurityConfiguration' }

	export enum DeleteSessionX_Amz_Target { 'AWSGlue.DeleteSession' = 'AWSGlue.DeleteSession' }

	export enum DeleteTableX_Amz_Target { 'AWSGlue.DeleteTable' = 'AWSGlue.DeleteTable' }

	export enum DeleteTableVersionX_Amz_Target { 'AWSGlue.DeleteTableVersion' = 'AWSGlue.DeleteTableVersion' }

	export enum DeleteTriggerX_Amz_Target { 'AWSGlue.DeleteTrigger' = 'AWSGlue.DeleteTrigger' }

	export enum DeleteUserDefinedFunctionX_Amz_Target { 'AWSGlue.DeleteUserDefinedFunction' = 'AWSGlue.DeleteUserDefinedFunction' }

	export enum DeleteWorkflowX_Amz_Target { 'AWSGlue.DeleteWorkflow' = 'AWSGlue.DeleteWorkflow' }

	export enum GetBlueprintX_Amz_Target { 'AWSGlue.GetBlueprint' = 'AWSGlue.GetBlueprint' }

	export enum GetBlueprintRunX_Amz_Target { 'AWSGlue.GetBlueprintRun' = 'AWSGlue.GetBlueprintRun' }

	export enum GetBlueprintRunsX_Amz_Target { 'AWSGlue.GetBlueprintRuns' = 'AWSGlue.GetBlueprintRuns' }

	export enum GetCatalogImportStatusX_Amz_Target { 'AWSGlue.GetCatalogImportStatus' = 'AWSGlue.GetCatalogImportStatus' }

	export enum GetClassifierX_Amz_Target { 'AWSGlue.GetClassifier' = 'AWSGlue.GetClassifier' }

	export enum GetClassifiersX_Amz_Target { 'AWSGlue.GetClassifiers' = 'AWSGlue.GetClassifiers' }

	export enum GetColumnStatisticsForPartitionX_Amz_Target { 'AWSGlue.GetColumnStatisticsForPartition' = 'AWSGlue.GetColumnStatisticsForPartition' }

	export enum GetColumnStatisticsForTableX_Amz_Target { 'AWSGlue.GetColumnStatisticsForTable' = 'AWSGlue.GetColumnStatisticsForTable' }

	export enum GetConnectionX_Amz_Target { 'AWSGlue.GetConnection' = 'AWSGlue.GetConnection' }

	export enum GetConnectionsX_Amz_Target { 'AWSGlue.GetConnections' = 'AWSGlue.GetConnections' }

	export enum GetCrawlerX_Amz_Target { 'AWSGlue.GetCrawler' = 'AWSGlue.GetCrawler' }

	export enum GetCrawlerMetricsX_Amz_Target { 'AWSGlue.GetCrawlerMetrics' = 'AWSGlue.GetCrawlerMetrics' }

	export enum GetCrawlersX_Amz_Target { 'AWSGlue.GetCrawlers' = 'AWSGlue.GetCrawlers' }

	export enum GetCustomEntityTypeX_Amz_Target { 'AWSGlue.GetCustomEntityType' = 'AWSGlue.GetCustomEntityType' }

	export enum GetDataCatalogEncryptionSettingsX_Amz_Target { 'AWSGlue.GetDataCatalogEncryptionSettings' = 'AWSGlue.GetDataCatalogEncryptionSettings' }

	export enum GetDataQualityResultX_Amz_Target { 'AWSGlue.GetDataQualityResult' = 'AWSGlue.GetDataQualityResult' }

	export enum GetDataQualityRuleRecommendationRunX_Amz_Target { 'AWSGlue.GetDataQualityRuleRecommendationRun' = 'AWSGlue.GetDataQualityRuleRecommendationRun' }

	export enum GetDataQualityRulesetX_Amz_Target { 'AWSGlue.GetDataQualityRuleset' = 'AWSGlue.GetDataQualityRuleset' }

	export enum GetDataQualityRulesetEvaluationRunX_Amz_Target { 'AWSGlue.GetDataQualityRulesetEvaluationRun' = 'AWSGlue.GetDataQualityRulesetEvaluationRun' }

	export enum GetDatabaseX_Amz_Target { 'AWSGlue.GetDatabase' = 'AWSGlue.GetDatabase' }

	export enum GetDatabasesX_Amz_Target { 'AWSGlue.GetDatabases' = 'AWSGlue.GetDatabases' }

	export enum GetDataflowGraphX_Amz_Target { 'AWSGlue.GetDataflowGraph' = 'AWSGlue.GetDataflowGraph' }

	export enum GetDevEndpointX_Amz_Target { 'AWSGlue.GetDevEndpoint' = 'AWSGlue.GetDevEndpoint' }

	export enum GetDevEndpointsX_Amz_Target { 'AWSGlue.GetDevEndpoints' = 'AWSGlue.GetDevEndpoints' }

	export enum GetJobX_Amz_Target { 'AWSGlue.GetJob' = 'AWSGlue.GetJob' }

	export enum GetJobBookmarkX_Amz_Target { 'AWSGlue.GetJobBookmark' = 'AWSGlue.GetJobBookmark' }

	export enum GetJobRunX_Amz_Target { 'AWSGlue.GetJobRun' = 'AWSGlue.GetJobRun' }

	export enum GetJobRunsX_Amz_Target { 'AWSGlue.GetJobRuns' = 'AWSGlue.GetJobRuns' }

	export enum GetJobsX_Amz_Target { 'AWSGlue.GetJobs' = 'AWSGlue.GetJobs' }

	export enum GetMLTaskRunX_Amz_Target { 'AWSGlue.GetMLTaskRun' = 'AWSGlue.GetMLTaskRun' }

	export enum GetMLTaskRunsX_Amz_Target { 'AWSGlue.GetMLTaskRuns' = 'AWSGlue.GetMLTaskRuns' }

	export enum GetMLTransformX_Amz_Target { 'AWSGlue.GetMLTransform' = 'AWSGlue.GetMLTransform' }

	export enum GetMLTransformsX_Amz_Target { 'AWSGlue.GetMLTransforms' = 'AWSGlue.GetMLTransforms' }

	export enum GetMappingX_Amz_Target { 'AWSGlue.GetMapping' = 'AWSGlue.GetMapping' }

	export enum GetPartitionX_Amz_Target { 'AWSGlue.GetPartition' = 'AWSGlue.GetPartition' }

	export enum GetPartitionIndexesX_Amz_Target { 'AWSGlue.GetPartitionIndexes' = 'AWSGlue.GetPartitionIndexes' }

	export enum GetPartitionsX_Amz_Target { 'AWSGlue.GetPartitions' = 'AWSGlue.GetPartitions' }

	export enum GetPlanX_Amz_Target { 'AWSGlue.GetPlan' = 'AWSGlue.GetPlan' }

	export enum GetRegistryX_Amz_Target { 'AWSGlue.GetRegistry' = 'AWSGlue.GetRegistry' }

	export enum GetResourcePoliciesX_Amz_Target { 'AWSGlue.GetResourcePolicies' = 'AWSGlue.GetResourcePolicies' }

	export enum GetResourcePolicyX_Amz_Target { 'AWSGlue.GetResourcePolicy' = 'AWSGlue.GetResourcePolicy' }

	export enum GetSchemaX_Amz_Target { 'AWSGlue.GetSchema' = 'AWSGlue.GetSchema' }

	export enum GetSchemaByDefinitionX_Amz_Target { 'AWSGlue.GetSchemaByDefinition' = 'AWSGlue.GetSchemaByDefinition' }

	export enum GetSchemaVersionX_Amz_Target { 'AWSGlue.GetSchemaVersion' = 'AWSGlue.GetSchemaVersion' }

	export enum GetSchemaVersionsDiffX_Amz_Target { 'AWSGlue.GetSchemaVersionsDiff' = 'AWSGlue.GetSchemaVersionsDiff' }

	export enum GetSecurityConfigurationX_Amz_Target { 'AWSGlue.GetSecurityConfiguration' = 'AWSGlue.GetSecurityConfiguration' }

	export enum GetSecurityConfigurationsX_Amz_Target { 'AWSGlue.GetSecurityConfigurations' = 'AWSGlue.GetSecurityConfigurations' }

	export enum GetSessionX_Amz_Target { 'AWSGlue.GetSession' = 'AWSGlue.GetSession' }

	export enum GetStatementX_Amz_Target { 'AWSGlue.GetStatement' = 'AWSGlue.GetStatement' }

	export enum GetTableX_Amz_Target { 'AWSGlue.GetTable' = 'AWSGlue.GetTable' }

	export enum GetTableVersionX_Amz_Target { 'AWSGlue.GetTableVersion' = 'AWSGlue.GetTableVersion' }

	export enum GetTableVersionsX_Amz_Target { 'AWSGlue.GetTableVersions' = 'AWSGlue.GetTableVersions' }

	export enum GetTablesX_Amz_Target { 'AWSGlue.GetTables' = 'AWSGlue.GetTables' }

	export enum GetTagsX_Amz_Target { 'AWSGlue.GetTags' = 'AWSGlue.GetTags' }

	export enum GetTriggerX_Amz_Target { 'AWSGlue.GetTrigger' = 'AWSGlue.GetTrigger' }

	export enum GetTriggersX_Amz_Target { 'AWSGlue.GetTriggers' = 'AWSGlue.GetTriggers' }

	export enum GetUnfilteredPartitionMetadataX_Amz_Target { 'AWSGlue.GetUnfilteredPartitionMetadata' = 'AWSGlue.GetUnfilteredPartitionMetadata' }

	export enum GetUnfilteredPartitionsMetadataX_Amz_Target { 'AWSGlue.GetUnfilteredPartitionsMetadata' = 'AWSGlue.GetUnfilteredPartitionsMetadata' }

	export enum GetUnfilteredTableMetadataX_Amz_Target { 'AWSGlue.GetUnfilteredTableMetadata' = 'AWSGlue.GetUnfilteredTableMetadata' }

	export enum GetUserDefinedFunctionX_Amz_Target { 'AWSGlue.GetUserDefinedFunction' = 'AWSGlue.GetUserDefinedFunction' }

	export enum GetUserDefinedFunctionsX_Amz_Target { 'AWSGlue.GetUserDefinedFunctions' = 'AWSGlue.GetUserDefinedFunctions' }

	export enum GetWorkflowX_Amz_Target { 'AWSGlue.GetWorkflow' = 'AWSGlue.GetWorkflow' }

	export enum GetWorkflowRunX_Amz_Target { 'AWSGlue.GetWorkflowRun' = 'AWSGlue.GetWorkflowRun' }

	export enum GetWorkflowRunPropertiesX_Amz_Target { 'AWSGlue.GetWorkflowRunProperties' = 'AWSGlue.GetWorkflowRunProperties' }

	export enum GetWorkflowRunsX_Amz_Target { 'AWSGlue.GetWorkflowRuns' = 'AWSGlue.GetWorkflowRuns' }

	export enum ImportCatalogToGlueX_Amz_Target { 'AWSGlue.ImportCatalogToGlue' = 'AWSGlue.ImportCatalogToGlue' }

	export enum ListBlueprintsX_Amz_Target { 'AWSGlue.ListBlueprints' = 'AWSGlue.ListBlueprints' }

	export enum ListCrawlersX_Amz_Target { 'AWSGlue.ListCrawlers' = 'AWSGlue.ListCrawlers' }

	export enum ListCrawlsX_Amz_Target { 'AWSGlue.ListCrawls' = 'AWSGlue.ListCrawls' }

	export enum ListCustomEntityTypesX_Amz_Target { 'AWSGlue.ListCustomEntityTypes' = 'AWSGlue.ListCustomEntityTypes' }

	export enum ListDataQualityResultsX_Amz_Target { 'AWSGlue.ListDataQualityResults' = 'AWSGlue.ListDataQualityResults' }

	export enum ListDataQualityRuleRecommendationRunsX_Amz_Target { 'AWSGlue.ListDataQualityRuleRecommendationRuns' = 'AWSGlue.ListDataQualityRuleRecommendationRuns' }

	export enum ListDataQualityRulesetEvaluationRunsX_Amz_Target { 'AWSGlue.ListDataQualityRulesetEvaluationRuns' = 'AWSGlue.ListDataQualityRulesetEvaluationRuns' }

	export enum ListDataQualityRulesetsX_Amz_Target { 'AWSGlue.ListDataQualityRulesets' = 'AWSGlue.ListDataQualityRulesets' }

	export enum ListDevEndpointsX_Amz_Target { 'AWSGlue.ListDevEndpoints' = 'AWSGlue.ListDevEndpoints' }

	export enum ListJobsX_Amz_Target { 'AWSGlue.ListJobs' = 'AWSGlue.ListJobs' }

	export enum ListMLTransformsX_Amz_Target { 'AWSGlue.ListMLTransforms' = 'AWSGlue.ListMLTransforms' }

	export enum ListRegistriesX_Amz_Target { 'AWSGlue.ListRegistries' = 'AWSGlue.ListRegistries' }

	export enum ListSchemaVersionsX_Amz_Target { 'AWSGlue.ListSchemaVersions' = 'AWSGlue.ListSchemaVersions' }

	export enum ListSchemasX_Amz_Target { 'AWSGlue.ListSchemas' = 'AWSGlue.ListSchemas' }

	export enum ListSessionsX_Amz_Target { 'AWSGlue.ListSessions' = 'AWSGlue.ListSessions' }

	export enum ListStatementsX_Amz_Target { 'AWSGlue.ListStatements' = 'AWSGlue.ListStatements' }

	export enum ListTriggersX_Amz_Target { 'AWSGlue.ListTriggers' = 'AWSGlue.ListTriggers' }

	export enum ListWorkflowsX_Amz_Target { 'AWSGlue.ListWorkflows' = 'AWSGlue.ListWorkflows' }

	export enum PutDataCatalogEncryptionSettingsX_Amz_Target { 'AWSGlue.PutDataCatalogEncryptionSettings' = 'AWSGlue.PutDataCatalogEncryptionSettings' }

	export enum PutResourcePolicyX_Amz_Target { 'AWSGlue.PutResourcePolicy' = 'AWSGlue.PutResourcePolicy' }

	export enum PutSchemaVersionMetadataX_Amz_Target { 'AWSGlue.PutSchemaVersionMetadata' = 'AWSGlue.PutSchemaVersionMetadata' }

	export enum PutWorkflowRunPropertiesX_Amz_Target { 'AWSGlue.PutWorkflowRunProperties' = 'AWSGlue.PutWorkflowRunProperties' }

	export enum QuerySchemaVersionMetadataX_Amz_Target { 'AWSGlue.QuerySchemaVersionMetadata' = 'AWSGlue.QuerySchemaVersionMetadata' }

	export enum RegisterSchemaVersionX_Amz_Target { 'AWSGlue.RegisterSchemaVersion' = 'AWSGlue.RegisterSchemaVersion' }

	export enum RemoveSchemaVersionMetadataX_Amz_Target { 'AWSGlue.RemoveSchemaVersionMetadata' = 'AWSGlue.RemoveSchemaVersionMetadata' }

	export enum ResetJobBookmarkX_Amz_Target { 'AWSGlue.ResetJobBookmark' = 'AWSGlue.ResetJobBookmark' }

	export enum ResumeWorkflowRunX_Amz_Target { 'AWSGlue.ResumeWorkflowRun' = 'AWSGlue.ResumeWorkflowRun' }

	export enum RunStatementX_Amz_Target { 'AWSGlue.RunStatement' = 'AWSGlue.RunStatement' }

	export enum SearchTablesX_Amz_Target { 'AWSGlue.SearchTables' = 'AWSGlue.SearchTables' }

	export enum StartBlueprintRunX_Amz_Target { 'AWSGlue.StartBlueprintRun' = 'AWSGlue.StartBlueprintRun' }

	export enum StartCrawlerX_Amz_Target { 'AWSGlue.StartCrawler' = 'AWSGlue.StartCrawler' }

	export enum StartCrawlerScheduleX_Amz_Target { 'AWSGlue.StartCrawlerSchedule' = 'AWSGlue.StartCrawlerSchedule' }

	export enum StartDataQualityRuleRecommendationRunX_Amz_Target { 'AWSGlue.StartDataQualityRuleRecommendationRun' = 'AWSGlue.StartDataQualityRuleRecommendationRun' }

	export enum StartDataQualityRulesetEvaluationRunX_Amz_Target { 'AWSGlue.StartDataQualityRulesetEvaluationRun' = 'AWSGlue.StartDataQualityRulesetEvaluationRun' }

	export enum StartExportLabelsTaskRunX_Amz_Target { 'AWSGlue.StartExportLabelsTaskRun' = 'AWSGlue.StartExportLabelsTaskRun' }

	export enum StartImportLabelsTaskRunX_Amz_Target { 'AWSGlue.StartImportLabelsTaskRun' = 'AWSGlue.StartImportLabelsTaskRun' }

	export enum StartJobRunX_Amz_Target { 'AWSGlue.StartJobRun' = 'AWSGlue.StartJobRun' }

	export enum StartMLEvaluationTaskRunX_Amz_Target { 'AWSGlue.StartMLEvaluationTaskRun' = 'AWSGlue.StartMLEvaluationTaskRun' }

	export enum StartMLLabelingSetGenerationTaskRunX_Amz_Target { 'AWSGlue.StartMLLabelingSetGenerationTaskRun' = 'AWSGlue.StartMLLabelingSetGenerationTaskRun' }

	export enum StartTriggerX_Amz_Target { 'AWSGlue.StartTrigger' = 'AWSGlue.StartTrigger' }

	export enum StartWorkflowRunX_Amz_Target { 'AWSGlue.StartWorkflowRun' = 'AWSGlue.StartWorkflowRun' }

	export enum StopCrawlerX_Amz_Target { 'AWSGlue.StopCrawler' = 'AWSGlue.StopCrawler' }

	export enum StopCrawlerScheduleX_Amz_Target { 'AWSGlue.StopCrawlerSchedule' = 'AWSGlue.StopCrawlerSchedule' }

	export enum StopSessionX_Amz_Target { 'AWSGlue.StopSession' = 'AWSGlue.StopSession' }

	export enum StopTriggerX_Amz_Target { 'AWSGlue.StopTrigger' = 'AWSGlue.StopTrigger' }

	export enum StopWorkflowRunX_Amz_Target { 'AWSGlue.StopWorkflowRun' = 'AWSGlue.StopWorkflowRun' }

	export enum TagResourceX_Amz_Target { 'AWSGlue.TagResource' = 'AWSGlue.TagResource' }

	export enum UntagResourceX_Amz_Target { 'AWSGlue.UntagResource' = 'AWSGlue.UntagResource' }

	export enum UpdateBlueprintX_Amz_Target { 'AWSGlue.UpdateBlueprint' = 'AWSGlue.UpdateBlueprint' }

	export enum UpdateClassifierX_Amz_Target { 'AWSGlue.UpdateClassifier' = 'AWSGlue.UpdateClassifier' }

	export enum UpdateColumnStatisticsForPartitionX_Amz_Target { 'AWSGlue.UpdateColumnStatisticsForPartition' = 'AWSGlue.UpdateColumnStatisticsForPartition' }

	export enum UpdateColumnStatisticsForTableX_Amz_Target { 'AWSGlue.UpdateColumnStatisticsForTable' = 'AWSGlue.UpdateColumnStatisticsForTable' }

	export enum UpdateConnectionX_Amz_Target { 'AWSGlue.UpdateConnection' = 'AWSGlue.UpdateConnection' }

	export enum UpdateCrawlerX_Amz_Target { 'AWSGlue.UpdateCrawler' = 'AWSGlue.UpdateCrawler' }

	export enum UpdateCrawlerScheduleX_Amz_Target { 'AWSGlue.UpdateCrawlerSchedule' = 'AWSGlue.UpdateCrawlerSchedule' }

	export enum UpdateDataQualityRulesetX_Amz_Target { 'AWSGlue.UpdateDataQualityRuleset' = 'AWSGlue.UpdateDataQualityRuleset' }

	export enum UpdateDatabaseX_Amz_Target { 'AWSGlue.UpdateDatabase' = 'AWSGlue.UpdateDatabase' }

	export enum UpdateDevEndpointX_Amz_Target { 'AWSGlue.UpdateDevEndpoint' = 'AWSGlue.UpdateDevEndpoint' }

	export enum UpdateJobX_Amz_Target { 'AWSGlue.UpdateJob' = 'AWSGlue.UpdateJob' }

	export enum UpdateJobFromSourceControlX_Amz_Target { 'AWSGlue.UpdateJobFromSourceControl' = 'AWSGlue.UpdateJobFromSourceControl' }

	export enum UpdateMLTransformX_Amz_Target { 'AWSGlue.UpdateMLTransform' = 'AWSGlue.UpdateMLTransform' }

	export enum UpdatePartitionX_Amz_Target { 'AWSGlue.UpdatePartition' = 'AWSGlue.UpdatePartition' }

	export enum UpdateRegistryX_Amz_Target { 'AWSGlue.UpdateRegistry' = 'AWSGlue.UpdateRegistry' }

	export enum UpdateSchemaX_Amz_Target { 'AWSGlue.UpdateSchema' = 'AWSGlue.UpdateSchema' }

	export enum UpdateSourceControlFromJobX_Amz_Target { 'AWSGlue.UpdateSourceControlFromJob' = 'AWSGlue.UpdateSourceControlFromJob' }

	export enum UpdateTableX_Amz_Target { 'AWSGlue.UpdateTable' = 'AWSGlue.UpdateTable' }

	export enum UpdateTriggerX_Amz_Target { 'AWSGlue.UpdateTrigger' = 'AWSGlue.UpdateTrigger' }

	export enum UpdateUserDefinedFunctionX_Amz_Target { 'AWSGlue.UpdateUserDefinedFunction' = 'AWSGlue.UpdateUserDefinedFunction' }

	export enum UpdateWorkflowX_Amz_Target { 'AWSGlue.UpdateWorkflow' = 'AWSGlue.UpdateWorkflow' }

}

