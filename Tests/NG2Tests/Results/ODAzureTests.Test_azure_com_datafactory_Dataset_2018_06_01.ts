import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Amazon Marketplace Web Service dataset. */
	export interface AmazonMWSObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Amazon Marketplace Web Service dataset. */
	export interface AmazonMWSObjectDatasetFormProperties {
	}
	export function CreateAmazonMWSObjectDatasetFormGroup() {
		return new FormGroup<AmazonMWSObjectDatasetFormProperties>({
		});

	}


	/** The Amazon Redshift table dataset. */
	export interface AmazonRedshiftTableDataset {

		/** Amazon Redshift table dataset properties. */
		typeProperties?: AmazonRedshiftTableDatasetTypeProperties;
	}

	/** The Amazon Redshift table dataset. */
	export interface AmazonRedshiftTableDatasetFormProperties {
	}
	export function CreateAmazonRedshiftTableDatasetFormGroup() {
		return new FormGroup<AmazonRedshiftTableDatasetFormProperties>({
		});

	}


	/** Amazon Redshift table dataset properties. */
	export interface AmazonRedshiftTableDatasetTypeProperties {

		/** The Amazon Redshift schema name. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The Amazon Redshift table name. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Amazon Redshift table dataset properties. */
	export interface AmazonRedshiftTableDatasetTypePropertiesFormProperties {

		/** The Amazon Redshift schema name. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The Amazon Redshift table name. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateAmazonRedshiftTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<AmazonRedshiftTableDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single Amazon Simple Storage Service (S3) object or a set of S3 objects. */
	export interface AmazonS3Dataset {

		/**
		 * Amazon S3 dataset properties.
		 * Required
		 */
		typeProperties: AmazonS3DatasetTypeProperties;
	}

	/** A single Amazon Simple Storage Service (S3) object or a set of S3 objects. */
	export interface AmazonS3DatasetFormProperties {
	}
	export function CreateAmazonS3DatasetFormGroup() {
		return new FormGroup<AmazonS3DatasetFormProperties>({
		});

	}


	/** Amazon S3 dataset properties. */
	export interface AmazonS3DatasetTypeProperties {

		/**
		 * The name of the Amazon S3 bucket. Type: string (or Expression with resultType string).
		 * Required
		 */
		bucketName: string;

		/** The compression method used on a dataset. */
		compression?: DatasetCompression;

		/** The format definition of a storage. */
		format?: DatasetStorageFormat;

		/** The key of the Amazon S3 object. Type: string (or Expression with resultType string). */
		key?: string | null;

		/** The end of S3 object's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd?: string | null;

		/** The start of S3 object's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart?: string | null;

		/** The prefix filter for the S3 object name. Type: string (or Expression with resultType string). */
		prefix?: string | null;

		/** The version for the S3 object. Type: string (or Expression with resultType string). */
		version?: string | null;
	}

	/** Amazon S3 dataset properties. */
	export interface AmazonS3DatasetTypePropertiesFormProperties {

		/**
		 * The name of the Amazon S3 bucket. Type: string (or Expression with resultType string).
		 * Required
		 */
		bucketName: FormControl<string | null | undefined>,

		/** The key of the Amazon S3 object. Type: string (or Expression with resultType string). */
		key: FormControl<string | null | undefined>,

		/** The end of S3 object's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd: FormControl<string | null | undefined>,

		/** The start of S3 object's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart: FormControl<string | null | undefined>,

		/** The prefix filter for the S3 object name. Type: string (or Expression with resultType string). */
		prefix: FormControl<string | null | undefined>,

		/** The version for the S3 object. Type: string (or Expression with resultType string). */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAmazonS3DatasetTypePropertiesFormGroup() {
		return new FormGroup<AmazonS3DatasetTypePropertiesFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeEnd: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeStart: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The compression method used on a dataset. */
	export interface DatasetCompression {

		/**
		 * Type of dataset compression.
		 * Required
		 */
		type: string;
	}

	/** The compression method used on a dataset. */
	export interface DatasetCompressionFormProperties {

		/**
		 * Type of dataset compression.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDatasetCompressionFormGroup() {
		return new FormGroup<DatasetCompressionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The format definition of a storage. */
	export interface DatasetStorageFormat {

		/** Deserializer. Type: string (or Expression with resultType string). */
		deserializer?: string | null;

		/** Serializer. Type: string (or Expression with resultType string). */
		serializer?: string | null;

		/**
		 * Type of dataset storage format.
		 * Required
		 */
		type: string;
	}

	/** The format definition of a storage. */
	export interface DatasetStorageFormatFormProperties {

		/** Deserializer. Type: string (or Expression with resultType string). */
		deserializer: FormControl<string | null | undefined>,

		/** Serializer. Type: string (or Expression with resultType string). */
		serializer: FormControl<string | null | undefined>,

		/**
		 * Type of dataset storage format.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDatasetStorageFormatFormGroup() {
		return new FormGroup<DatasetStorageFormatFormProperties>({
			deserializer: new FormControl<string | null | undefined>(undefined),
			serializer: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The location of amazon S3 dataset. */
	export interface AmazonS3Location {

		/** Specify the bucketName of amazon S3. Type: string (or Expression with resultType string) */
		bucketName?: string | null;

		/** Specify the version of amazon S3. Type: string (or Expression with resultType string). */
		version?: string | null;
	}

	/** The location of amazon S3 dataset. */
	export interface AmazonS3LocationFormProperties {

		/** Specify the bucketName of amazon S3. Type: string (or Expression with resultType string) */
		bucketName: FormControl<string | null | undefined>,

		/** Specify the version of amazon S3. Type: string (or Expression with resultType string). */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAmazonS3LocationFormGroup() {
		return new FormGroup<AmazonS3LocationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Avro dataset. */
	export interface AvroDataset {

		/** Avro dataset properties. */
		typeProperties?: AvroDatasetTypeProperties;
	}

	/** Avro dataset. */
	export interface AvroDatasetFormProperties {
	}
	export function CreateAvroDatasetFormGroup() {
		return new FormGroup<AvroDatasetFormProperties>({
		});

	}


	/** Avro dataset properties. */
	export interface AvroDatasetTypeProperties {
		avroCompressionCodec?: AvroDatasetTypePropertiesAvroCompressionCodec | null;

		/**
		 * Minimum: 1
		 * Maximum: 9
		 */
		avroCompressionLevel?: number | null;

		/**
		 * Dataset location.
		 * Required
		 */
		location: DatasetLocation;
	}

	/** Avro dataset properties. */
	export interface AvroDatasetTypePropertiesFormProperties {
		avroCompressionCodec: FormControl<AvroDatasetTypePropertiesAvroCompressionCodec | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 9
		 */
		avroCompressionLevel: FormControl<number | null | undefined>,
	}
	export function CreateAvroDatasetTypePropertiesFormGroup() {
		return new FormGroup<AvroDatasetTypePropertiesFormProperties>({
			avroCompressionCodec: new FormControl<AvroDatasetTypePropertiesAvroCompressionCodec | null | undefined>(undefined),
			avroCompressionLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(9)]),
		});

	}

	export enum AvroDatasetTypePropertiesAvroCompressionCodec { none = 0, deflate = 1, snappy = 2, xz = 3, bzip2 = 4 }


	/** Dataset location. */
	export interface DatasetLocation {

		/** Specify the file name of dataset. Type: string (or Expression with resultType string). */
		fileName?: string | null;

		/** Specify the folder path of dataset. Type: string (or Expression with resultType string) */
		folderPath?: string | null;

		/**
		 * Type of dataset storage location.
		 * Required
		 */
		type: string;
	}

	/** Dataset location. */
	export interface DatasetLocationFormProperties {

		/** Specify the file name of dataset. Type: string (or Expression with resultType string). */
		fileName: FormControl<string | null | undefined>,

		/** Specify the folder path of dataset. Type: string (or Expression with resultType string) */
		folderPath: FormControl<string | null | undefined>,

		/**
		 * Type of dataset storage location.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDatasetLocationFormGroup() {
		return new FormGroup<DatasetLocationFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The data stored in Avro format. */
	export interface AvroFormat {
	}

	/** The data stored in Avro format. */
	export interface AvroFormatFormProperties {
	}
	export function CreateAvroFormatFormGroup() {
		return new FormGroup<AvroFormatFormProperties>({
		});

	}


	/** The Azure Blob storage. */
	export interface AzureBlobDataset {

		/** Azure Blob dataset properties. */
		typeProperties?: AzureBlobDatasetTypeProperties;
	}

	/** The Azure Blob storage. */
	export interface AzureBlobDatasetFormProperties {
	}
	export function CreateAzureBlobDatasetFormGroup() {
		return new FormGroup<AzureBlobDatasetFormProperties>({
		});

	}


	/** Azure Blob dataset properties. */
	export interface AzureBlobDatasetTypeProperties {

		/** The compression method used on a dataset. */
		compression?: DatasetCompression;

		/** The name of the Azure Blob. Type: string (or Expression with resultType string). */
		fileName?: string | null;

		/** The path of the Azure Blob storage. Type: string (or Expression with resultType string). */
		folderPath?: string | null;

		/** The format definition of a storage. */
		format?: DatasetStorageFormat;

		/** The end of Azure Blob's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd?: string | null;

		/** The start of Azure Blob's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart?: string | null;

		/** The root of blob path. Type: string (or Expression with resultType string). */
		tableRootLocation?: string | null;
	}

	/** Azure Blob dataset properties. */
	export interface AzureBlobDatasetTypePropertiesFormProperties {

		/** The name of the Azure Blob. Type: string (or Expression with resultType string). */
		fileName: FormControl<string | null | undefined>,

		/** The path of the Azure Blob storage. Type: string (or Expression with resultType string). */
		folderPath: FormControl<string | null | undefined>,

		/** The end of Azure Blob's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd: FormControl<string | null | undefined>,

		/** The start of Azure Blob's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart: FormControl<string | null | undefined>,

		/** The root of blob path. Type: string (or Expression with resultType string). */
		tableRootLocation: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobDatasetTypePropertiesFormGroup() {
		return new FormGroup<AzureBlobDatasetTypePropertiesFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeEnd: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeStart: new FormControl<string | null | undefined>(undefined),
			tableRootLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Azure Data Lake Storage Gen2 storage. */
	export interface AzureBlobFSDataset {

		/** Azure Data Lake Storage Gen2 dataset properties. */
		typeProperties?: AzureBlobFSDatasetTypeProperties;
	}

	/** The Azure Data Lake Storage Gen2 storage. */
	export interface AzureBlobFSDatasetFormProperties {
	}
	export function CreateAzureBlobFSDatasetFormGroup() {
		return new FormGroup<AzureBlobFSDatasetFormProperties>({
		});

	}


	/** Azure Data Lake Storage Gen2 dataset properties. */
	export interface AzureBlobFSDatasetTypeProperties {

		/** The compression method used on a dataset. */
		compression?: DatasetCompression;

		/** The name of the Azure Data Lake Storage Gen2. Type: string (or Expression with resultType string). */
		fileName?: string | null;

		/** The path of the Azure Data Lake Storage Gen2 storage. Type: string (or Expression with resultType string). */
		folderPath?: string | null;

		/** The format definition of a storage. */
		format?: DatasetStorageFormat;
	}

	/** Azure Data Lake Storage Gen2 dataset properties. */
	export interface AzureBlobFSDatasetTypePropertiesFormProperties {

		/** The name of the Azure Data Lake Storage Gen2. Type: string (or Expression with resultType string). */
		fileName: FormControl<string | null | undefined>,

		/** The path of the Azure Data Lake Storage Gen2 storage. Type: string (or Expression with resultType string). */
		folderPath: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobFSDatasetTypePropertiesFormGroup() {
		return new FormGroup<AzureBlobFSDatasetTypePropertiesFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location of azure blobFS dataset. */
	export interface AzureBlobFSLocation {

		/** Specify the fileSystem of azure blobFS. Type: string (or Expression with resultType string). */
		fileSystem?: string | null;
	}

	/** The location of azure blobFS dataset. */
	export interface AzureBlobFSLocationFormProperties {

		/** Specify the fileSystem of azure blobFS. Type: string (or Expression with resultType string). */
		fileSystem: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobFSLocationFormGroup() {
		return new FormGroup<AzureBlobFSLocationFormProperties>({
			fileSystem: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location of azure blob dataset. */
	export interface AzureBlobStorageLocation {

		/** Specify the container of azure blob. Type: string (or Expression with resultType string). */
		container?: string | null;
	}

	/** The location of azure blob dataset. */
	export interface AzureBlobStorageLocationFormProperties {

		/** Specify the container of azure blob. Type: string (or Expression with resultType string). */
		container: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobStorageLocationFormGroup() {
		return new FormGroup<AzureBlobStorageLocationFormProperties>({
			container: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Data Explorer (Kusto) dataset properties. */
	export interface AzureDataExplorerDatasetTypeProperties {

		/** The table name of the Azure Data Explorer database. Type: string (or Expression with resultType string). */
		table?: string | null;
	}

	/** Azure Data Explorer (Kusto) dataset properties. */
	export interface AzureDataExplorerDatasetTypePropertiesFormProperties {

		/** The table name of the Azure Data Explorer database. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataExplorerDatasetTypePropertiesFormGroup() {
		return new FormGroup<AzureDataExplorerDatasetTypePropertiesFormProperties>({
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Azure Data Explorer (Kusto) dataset. */
	export interface AzureDataExplorerTableDataset {

		/**
		 * Azure Data Explorer (Kusto) dataset properties.
		 * Required
		 */
		typeProperties: AzureDataExplorerDatasetTypeProperties;
	}

	/** The Azure Data Explorer (Kusto) dataset. */
	export interface AzureDataExplorerTableDatasetFormProperties {
	}
	export function CreateAzureDataExplorerTableDatasetFormGroup() {
		return new FormGroup<AzureDataExplorerTableDatasetFormProperties>({
		});

	}


	/** Azure Data Lake Store dataset. */
	export interface AzureDataLakeStoreDataset {

		/** Azure Data Lake Store dataset properties. */
		typeProperties?: AzureDataLakeStoreDatasetTypeProperties;
	}

	/** Azure Data Lake Store dataset. */
	export interface AzureDataLakeStoreDatasetFormProperties {
	}
	export function CreateAzureDataLakeStoreDatasetFormGroup() {
		return new FormGroup<AzureDataLakeStoreDatasetFormProperties>({
		});

	}


	/** Azure Data Lake Store dataset properties. */
	export interface AzureDataLakeStoreDatasetTypeProperties {

		/** The compression method used on a dataset. */
		compression?: DatasetCompression;

		/** The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string). */
		fileName?: string | null;

		/** Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string). */
		folderPath?: string | null;

		/** The format definition of a storage. */
		format?: DatasetStorageFormat;
	}

	/** Azure Data Lake Store dataset properties. */
	export interface AzureDataLakeStoreDatasetTypePropertiesFormProperties {

		/** The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string). */
		fileName: FormControl<string | null | undefined>,

		/** Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string). */
		folderPath: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataLakeStoreDatasetTypePropertiesFormGroup() {
		return new FormGroup<AzureDataLakeStoreDatasetTypePropertiesFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location of azure data lake store dataset. */
	export interface AzureDataLakeStoreLocation {
	}

	/** The location of azure data lake store dataset. */
	export interface AzureDataLakeStoreLocationFormProperties {
	}
	export function CreateAzureDataLakeStoreLocationFormGroup() {
		return new FormGroup<AzureDataLakeStoreLocationFormProperties>({
		});

	}


	/** The location of file server dataset. */
	export interface AzureFileStorageLocation {
	}

	/** The location of file server dataset. */
	export interface AzureFileStorageLocationFormProperties {
	}
	export function CreateAzureFileStorageLocationFormGroup() {
		return new FormGroup<AzureFileStorageLocationFormProperties>({
		});

	}


	/** Azure Database for MariaDB dataset. */
	export interface AzureMariaDBTableDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Azure Database for MariaDB dataset. */
	export interface AzureMariaDBTableDatasetFormProperties {
	}
	export function CreateAzureMariaDBTableDatasetFormGroup() {
		return new FormGroup<AzureMariaDBTableDatasetFormProperties>({
		});

	}


	/** The Azure MySQL database dataset. */
	export interface AzureMySqlTableDataset {

		/**
		 * Azure MySQL database dataset properties.
		 * Required
		 */
		typeProperties: AzureMySqlTableDatasetTypeProperties;
	}

	/** The Azure MySQL database dataset. */
	export interface AzureMySqlTableDatasetFormProperties {
	}
	export function CreateAzureMySqlTableDatasetFormGroup() {
		return new FormGroup<AzureMySqlTableDatasetFormProperties>({
		});

	}


	/** Azure MySQL database dataset properties. */
	export interface AzureMySqlTableDatasetTypeProperties {

		/** The name of Azure MySQL database table. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** The Azure MySQL database table name. Type: string (or Expression with resultType string). */
		tableName?: string | null;
	}

	/** Azure MySQL database dataset properties. */
	export interface AzureMySqlTableDatasetTypePropertiesFormProperties {

		/** The name of Azure MySQL database table. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** The Azure MySQL database table name. Type: string (or Expression with resultType string). */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateAzureMySqlTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<AzureMySqlTableDatasetTypePropertiesFormProperties>({
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure PostgreSQL dataset. */
	export interface AzurePostgreSqlTableDataset {

		/** Azure PostgreSQL dataset properties. */
		typeProperties?: AzurePostgreSqlTableDatasetTypeProperties;
	}

	/** Azure PostgreSQL dataset. */
	export interface AzurePostgreSqlTableDatasetFormProperties {
	}
	export function CreateAzurePostgreSqlTableDatasetFormGroup() {
		return new FormGroup<AzurePostgreSqlTableDatasetFormProperties>({
		});

	}


	/** Azure PostgreSQL dataset properties. */
	export interface AzurePostgreSqlTableDatasetTypeProperties {

		/** The schema name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** The table name of the Azure PostgreSQL database which includes both schema and table. Type: string (or Expression with resultType string). */
		tableName?: string | null;
	}

	/** Azure PostgreSQL dataset properties. */
	export interface AzurePostgreSqlTableDatasetTypePropertiesFormProperties {

		/** The schema name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** The table name of the Azure PostgreSQL database which includes both schema and table. Type: string (or Expression with resultType string). */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateAzurePostgreSqlTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<AzurePostgreSqlTableDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Azure Search Index. */
	export interface AzureSearchIndexDataset {

		/**
		 * Properties specific to this dataset type.
		 * Required
		 */
		typeProperties: AzureSearchIndexDatasetTypeProperties;
	}

	/** The Azure Search Index. */
	export interface AzureSearchIndexDatasetFormProperties {
	}
	export function CreateAzureSearchIndexDatasetFormGroup() {
		return new FormGroup<AzureSearchIndexDatasetFormProperties>({
		});

	}


	/** Properties specific to this dataset type. */
	export interface AzureSearchIndexDatasetTypeProperties {

		/**
		 * The name of the Azure Search Index. Type: string (or Expression with resultType string).
		 * Required
		 */
		indexName: string;
	}

	/** Properties specific to this dataset type. */
	export interface AzureSearchIndexDatasetTypePropertiesFormProperties {

		/**
		 * The name of the Azure Search Index. Type: string (or Expression with resultType string).
		 * Required
		 */
		indexName: FormControl<string | null | undefined>,
	}
	export function CreateAzureSearchIndexDatasetTypePropertiesFormGroup() {
		return new FormGroup<AzureSearchIndexDatasetTypePropertiesFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Azure SQL Data Warehouse dataset. */
	export interface AzureSqlDWTableDataset {

		/** Azure SQL Data Warehouse dataset properties. */
		typeProperties?: AzureSqlDWTableDatasetTypeProperties;
	}

	/** The Azure SQL Data Warehouse dataset. */
	export interface AzureSqlDWTableDatasetFormProperties {
	}
	export function CreateAzureSqlDWTableDatasetFormGroup() {
		return new FormGroup<AzureSqlDWTableDatasetFormProperties>({
		});

	}


	/** Azure SQL Data Warehouse dataset properties. */
	export interface AzureSqlDWTableDatasetTypeProperties {

		/** The schema name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Azure SQL Data Warehouse dataset properties. */
	export interface AzureSqlDWTableDatasetTypePropertiesFormProperties {

		/** The schema name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateAzureSqlDWTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<AzureSqlDWTableDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Azure SQL Managed Instance dataset. */
	export interface AzureSqlMITableDataset {

		/** Azure SQL Managed Instance dataset properties. */
		typeProperties?: AzureSqlMITableDatasetTypeProperties;
	}

	/** The Azure SQL Managed Instance dataset. */
	export interface AzureSqlMITableDatasetFormProperties {
	}
	export function CreateAzureSqlMITableDatasetFormGroup() {
		return new FormGroup<AzureSqlMITableDatasetFormProperties>({
		});

	}


	/** Azure SQL Managed Instance dataset properties. */
	export interface AzureSqlMITableDatasetTypeProperties {

		/** The schema name of the Azure SQL Managed Instance. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the Azure SQL Managed Instance dataset. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Azure SQL Managed Instance dataset properties. */
	export interface AzureSqlMITableDatasetTypePropertiesFormProperties {

		/** The schema name of the Azure SQL Managed Instance. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the Azure SQL Managed Instance dataset. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateAzureSqlMITableDatasetTypePropertiesFormGroup() {
		return new FormGroup<AzureSqlMITableDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Azure SQL Server database dataset. */
	export interface AzureSqlTableDataset {

		/** Azure SQL dataset properties. */
		typeProperties?: AzureSqlTableDatasetTypeProperties;
	}

	/** The Azure SQL Server database dataset. */
	export interface AzureSqlTableDatasetFormProperties {
	}
	export function CreateAzureSqlTableDatasetFormGroup() {
		return new FormGroup<AzureSqlTableDatasetFormProperties>({
		});

	}


	/** Azure SQL dataset properties. */
	export interface AzureSqlTableDatasetTypeProperties {

		/** The schema name of the Azure SQL database. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the Azure SQL database. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Azure SQL dataset properties. */
	export interface AzureSqlTableDatasetTypePropertiesFormProperties {

		/** The schema name of the Azure SQL database. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the Azure SQL database. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateAzureSqlTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<AzureSqlTableDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Azure Table storage dataset. */
	export interface AzureTableDataset {

		/**
		 * Azure Table dataset properties.
		 * Required
		 */
		typeProperties: AzureTableDatasetTypeProperties;
	}

	/** The Azure Table storage dataset. */
	export interface AzureTableDatasetFormProperties {
	}
	export function CreateAzureTableDatasetFormGroup() {
		return new FormGroup<AzureTableDatasetFormProperties>({
		});

	}


	/** Azure Table dataset properties. */
	export interface AzureTableDatasetTypeProperties {

		/**
		 * The table name of the Azure Table storage. Type: string (or Expression with resultType string).
		 * Required
		 */
		tableName: string;
	}

	/** Azure Table dataset properties. */
	export interface AzureTableDatasetTypePropertiesFormProperties {

		/**
		 * The table name of the Azure Table storage. Type: string (or Expression with resultType string).
		 * Required
		 */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateAzureTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<AzureTableDatasetTypePropertiesFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Binary dataset. */
	export interface BinaryDataset {

		/** Binary dataset properties. */
		typeProperties?: BinaryDatasetTypeProperties;
	}

	/** Binary dataset. */
	export interface BinaryDatasetFormProperties {
	}
	export function CreateBinaryDatasetFormGroup() {
		return new FormGroup<BinaryDatasetFormProperties>({
		});

	}


	/** Binary dataset properties. */
	export interface BinaryDatasetTypeProperties {

		/** The compression method used on a dataset. */
		compression?: DatasetCompression;

		/**
		 * Dataset location.
		 * Required
		 */
		location: DatasetLocation;
	}

	/** Binary dataset properties. */
	export interface BinaryDatasetTypePropertiesFormProperties {
	}
	export function CreateBinaryDatasetTypePropertiesFormGroup() {
		return new FormGroup<BinaryDatasetTypePropertiesFormProperties>({
		});

	}


	/** The Cassandra database dataset. */
	export interface CassandraTableDataset {

		/** Cassandra dataset properties. */
		typeProperties?: CassandraTableDatasetTypeProperties;
	}

	/** The Cassandra database dataset. */
	export interface CassandraTableDatasetFormProperties {
	}
	export function CreateCassandraTableDatasetFormGroup() {
		return new FormGroup<CassandraTableDatasetFormProperties>({
		});

	}


	/** Cassandra dataset properties. */
	export interface CassandraTableDatasetTypeProperties {

		/** The keyspace of the Cassandra database. Type: string (or Expression with resultType string). */
		keyspace?: string | null;

		/** The table name of the Cassandra database. Type: string (or Expression with resultType string). */
		tableName?: string | null;
	}

	/** Cassandra dataset properties. */
	export interface CassandraTableDatasetTypePropertiesFormProperties {

		/** The keyspace of the Cassandra database. Type: string (or Expression with resultType string). */
		keyspace: FormControl<string | null | undefined>,

		/** The table name of the Cassandra database. Type: string (or Expression with resultType string). */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateCassandraTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<CassandraTableDatasetTypePropertiesFormProperties>({
			keyspace: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Common Data Service for Apps entity dataset. */
	export interface CommonDataServiceForAppsEntityDataset {

		/** Common Data Service for Apps entity dataset properties. */
		typeProperties?: CommonDataServiceForAppsEntityDatasetTypeProperties;
	}

	/** The Common Data Service for Apps entity dataset. */
	export interface CommonDataServiceForAppsEntityDatasetFormProperties {
	}
	export function CreateCommonDataServiceForAppsEntityDatasetFormGroup() {
		return new FormGroup<CommonDataServiceForAppsEntityDatasetFormProperties>({
		});

	}


	/** Common Data Service for Apps entity dataset properties. */
	export interface CommonDataServiceForAppsEntityDatasetTypeProperties {

		/** The logical name of the entity. Type: string (or Expression with resultType string). */
		entityName?: string | null;
	}

	/** Common Data Service for Apps entity dataset properties. */
	export interface CommonDataServiceForAppsEntityDatasetTypePropertiesFormProperties {

		/** The logical name of the entity. Type: string (or Expression with resultType string). */
		entityName: FormControl<string | null | undefined>,
	}
	export function CreateCommonDataServiceForAppsEntityDatasetTypePropertiesFormGroup() {
		return new FormGroup<CommonDataServiceForAppsEntityDatasetTypePropertiesFormProperties>({
			entityName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** All available compression levels. */
	export enum CompressionLevel { Optimal = 0, Fastest = 1 }


	/** Concur Service dataset. */
	export interface ConcurObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Concur Service dataset. */
	export interface ConcurObjectDatasetFormProperties {
	}
	export function CreateConcurObjectDatasetFormGroup() {
		return new FormGroup<ConcurObjectDatasetFormProperties>({
		});

	}


	/** The CosmosDB (MongoDB API) database dataset. */
	export interface CosmosDbMongoDbApiCollectionDataset {

		/**
		 * CosmosDB (MongoDB API) database dataset properties.
		 * Required
		 */
		typeProperties: CosmosDbMongoDbApiCollectionDatasetTypeProperties;
	}

	/** The CosmosDB (MongoDB API) database dataset. */
	export interface CosmosDbMongoDbApiCollectionDatasetFormProperties {
	}
	export function CreateCosmosDbMongoDbApiCollectionDatasetFormGroup() {
		return new FormGroup<CosmosDbMongoDbApiCollectionDatasetFormProperties>({
		});

	}


	/** CosmosDB (MongoDB API) database dataset properties. */
	export interface CosmosDbMongoDbApiCollectionDatasetTypeProperties {

		/**
		 * The collection name of the CosmosDB (MongoDB API) database. Type: string (or Expression with resultType string).
		 * Required
		 */
		collection: string;
	}

	/** CosmosDB (MongoDB API) database dataset properties. */
	export interface CosmosDbMongoDbApiCollectionDatasetTypePropertiesFormProperties {

		/**
		 * The collection name of the CosmosDB (MongoDB API) database. Type: string (or Expression with resultType string).
		 * Required
		 */
		collection: FormControl<string | null | undefined>,
	}
	export function CreateCosmosDbMongoDbApiCollectionDatasetTypePropertiesFormGroup() {
		return new FormGroup<CosmosDbMongoDbApiCollectionDatasetTypePropertiesFormProperties>({
			collection: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Microsoft Azure CosmosDB (SQL API) Collection dataset. */
	export interface CosmosDbSqlApiCollectionDataset {

		/**
		 * CosmosDB (SQL API) Collection dataset properties.
		 * Required
		 */
		typeProperties: CosmosDbSqlApiCollectionDatasetTypeProperties;
	}

	/** Microsoft Azure CosmosDB (SQL API) Collection dataset. */
	export interface CosmosDbSqlApiCollectionDatasetFormProperties {
	}
	export function CreateCosmosDbSqlApiCollectionDatasetFormGroup() {
		return new FormGroup<CosmosDbSqlApiCollectionDatasetFormProperties>({
		});

	}


	/** CosmosDB (SQL API) Collection dataset properties. */
	export interface CosmosDbSqlApiCollectionDatasetTypeProperties {

		/**
		 * CosmosDB (SQL API) collection name. Type: string (or Expression with resultType string).
		 * Required
		 */
		collectionName: string;
	}

	/** CosmosDB (SQL API) Collection dataset properties. */
	export interface CosmosDbSqlApiCollectionDatasetTypePropertiesFormProperties {

		/**
		 * CosmosDB (SQL API) collection name. Type: string (or Expression with resultType string).
		 * Required
		 */
		collectionName: FormControl<string | null | undefined>,
	}
	export function CreateCosmosDbSqlApiCollectionDatasetTypePropertiesFormGroup() {
		return new FormGroup<CosmosDbSqlApiCollectionDatasetTypePropertiesFormProperties>({
			collectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Couchbase server dataset. */
	export interface CouchbaseTableDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Couchbase server dataset. */
	export interface CouchbaseTableDatasetFormProperties {
	}
	export function CreateCouchbaseTableDatasetFormGroup() {
		return new FormGroup<CouchbaseTableDatasetFormProperties>({
		});

	}


	/** The custom dataset. */
	export interface CustomDataset {

		/** Custom dataset properties. */
		typeProperties?: string | null;
	}

	/** The custom dataset. */
	export interface CustomDatasetFormProperties {

		/** Custom dataset properties. */
		typeProperties: FormControl<string | null | undefined>,
	}
	export function CreateCustomDatasetFormGroup() {
		return new FormGroup<CustomDatasetFormProperties>({
			typeProperties: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents. */
	export interface Dataset {

		/** List of tags that can be used for describing the Dataset. */
		annotations?: Array<string>;

		/** Dataset description. */
		description?: string | null;

		/** The folder that this Dataset is in. If not specified, Dataset will appear at the root level. */
		folder?: DatasetFolder;

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: any;

		/** Definition of all parameters for an entity. */
		parameters?: {[id: string]: DatasetParameters };

		/** Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement. */
		schema?: string | null;

		/** Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement. */
		structure?: string | null;

		/**
		 * Type of dataset.
		 * Required
		 */
		type: string;
	}

	/** The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents. */
	export interface DatasetFormProperties {

		/** Dataset description. */
		description: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: FormControl<any | null | undefined>,

		/** Definition of all parameters for an entity. */
		parameters: FormControl<{[id: string]: DatasetParameters } | null | undefined>,

		/** Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement. */
		schema: FormControl<string | null | undefined>,

		/** Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement. */
		structure: FormControl<string | null | undefined>,

		/**
		 * Type of dataset.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			linkedServiceName: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<{[id: string]: DatasetParameters } | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			structure: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DatasetFolder {

		/** The name of the folder that this Dataset is in. */
		name?: string | null;
	}
	export interface DatasetFolderFormProperties {

		/** The name of the folder that this Dataset is in. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDatasetFolderFormGroup() {
		return new FormGroup<DatasetFolderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatasetParameters {

		/** Default value of parameter. */
		defaultValue?: string | null;

		/**
		 * Parameter type.
		 * Required
		 */
		type: DatasetParametersType;
	}
	export interface DatasetParametersFormProperties {

		/** Default value of parameter. */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * Parameter type.
		 * Required
		 */
		type: FormControl<DatasetParametersType | null | undefined>,
	}
	export function CreateDatasetParametersFormGroup() {
		return new FormGroup<DatasetParametersFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DatasetParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DatasetParametersType { Object = 0, String = 1, Int = 2, Float = 3, Bool = 4, Array = 5, SecureString = 6 }


	/** The BZip2 compression method used on a dataset. */
	export interface DatasetBZip2Compression {
	}

	/** The BZip2 compression method used on a dataset. */
	export interface DatasetBZip2CompressionFormProperties {
	}
	export function CreateDatasetBZip2CompressionFormGroup() {
		return new FormGroup<DatasetBZip2CompressionFormProperties>({
		});

	}


	/** Columns that define the structure of the dataset. */
	export interface DatasetDataElement {

		/** Name of the column. Type: string (or Expression with resultType string). */
		name?: string | null;

		/** Type of the column. Type: string (or Expression with resultType string). */
		type?: string | null;
	}

	/** Columns that define the structure of the dataset. */
	export interface DatasetDataElementFormProperties {

		/** Name of the column. Type: string (or Expression with resultType string). */
		name: FormControl<string | null | undefined>,

		/** Type of the column. Type: string (or Expression with resultType string). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDatasetDataElementFormGroup() {
		return new FormGroup<DatasetDataElementFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Deflate compression method used on a dataset. */
	export interface DatasetDeflateCompression {

		/** All available compression levels. */
		level?: CompressionLevel;
	}

	/** The Deflate compression method used on a dataset. */
	export interface DatasetDeflateCompressionFormProperties {

		/** All available compression levels. */
		level: FormControl<CompressionLevel | null | undefined>,
	}
	export function CreateDatasetDeflateCompressionFormGroup() {
		return new FormGroup<DatasetDeflateCompressionFormProperties>({
			level: new FormControl<CompressionLevel | null | undefined>(undefined),
		});

	}


	/** The GZip compression method used on a dataset. */
	export interface DatasetGZipCompression {

		/** All available compression levels. */
		level?: CompressionLevel;
	}

	/** The GZip compression method used on a dataset. */
	export interface DatasetGZipCompressionFormProperties {

		/** All available compression levels. */
		level: FormControl<CompressionLevel | null | undefined>,
	}
	export function CreateDatasetGZipCompressionFormGroup() {
		return new FormGroup<DatasetGZipCompressionFormProperties>({
			level: new FormControl<CompressionLevel | null | undefined>(undefined),
		});

	}


	/** Columns that define the physical type schema of the dataset. */
	export interface DatasetSchemaDataElement {

		/** Name of the schema column. Type: string (or Expression with resultType string). */
		name?: string | null;

		/** Type of the schema column. Type: string (or Expression with resultType string). */
		type?: string | null;
	}

	/** Columns that define the physical type schema of the dataset. */
	export interface DatasetSchemaDataElementFormProperties {

		/** Name of the schema column. Type: string (or Expression with resultType string). */
		name: FormControl<string | null | undefined>,

		/** Type of the schema column. Type: string (or Expression with resultType string). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDatasetSchemaDataElementFormGroup() {
		return new FormGroup<DatasetSchemaDataElementFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ZipDeflate compression method used on a dataset. */
	export interface DatasetZipDeflateCompression {

		/** All available compression levels. */
		level?: CompressionLevel;
	}

	/** The ZipDeflate compression method used on a dataset. */
	export interface DatasetZipDeflateCompressionFormProperties {

		/** All available compression levels. */
		level: FormControl<CompressionLevel | null | undefined>,
	}
	export function CreateDatasetZipDeflateCompressionFormGroup() {
		return new FormGroup<DatasetZipDeflateCompressionFormProperties>({
			level: new FormControl<CompressionLevel | null | undefined>(undefined),
		});

	}


	/** The Db2 table dataset. */
	export interface Db2TableDataset {

		/** Db2 table dataset properties. */
		typeProperties?: Db2TableDatasetTypeProperties;
	}

	/** The Db2 table dataset. */
	export interface Db2TableDatasetFormProperties {
	}
	export function CreateDb2TableDatasetFormGroup() {
		return new FormGroup<Db2TableDatasetFormProperties>({
		});

	}


	/** Db2 table dataset properties. */
	export interface Db2TableDatasetTypeProperties {

		/** The Db2 schema name. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The Db2 table name. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Db2 table dataset properties. */
	export interface Db2TableDatasetTypePropertiesFormProperties {

		/** The Db2 schema name. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The Db2 table name. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateDb2TableDatasetTypePropertiesFormGroup() {
		return new FormGroup<Db2TableDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Delimited text dataset. */
	export interface DelimitedTextDataset {

		/** DelimitedText dataset properties. */
		typeProperties?: DelimitedTextDatasetTypeProperties;
	}

	/** Delimited text dataset. */
	export interface DelimitedTextDatasetFormProperties {
	}
	export function CreateDelimitedTextDatasetFormGroup() {
		return new FormGroup<DelimitedTextDatasetFormProperties>({
		});

	}


	/** DelimitedText dataset properties. */
	export interface DelimitedTextDatasetTypeProperties {

		/** The column delimiter. Type: string (or Expression with resultType string). */
		columnDelimiter?: string | null;
		compressionCodec?: DelimitedTextDatasetTypePropertiesCompressionCodec;

		/** All available compression levels. */
		compressionLevel?: CompressionLevel;

		/** The code page name of the preferred encoding. If miss, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
		encodingName?: string | null;

		/** The escape character. Type: string (or Expression with resultType string). */
		escapeChar?: string | null;

		/** When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). */
		firstRowAsHeader?: string | null;

		/**
		 * Dataset location.
		 * Required
		 */
		location: DatasetLocation;

		/** The null value string. Type: string (or Expression with resultType string). */
		nullValue?: string | null;

		/** The quote character. Type: string (or Expression with resultType string). */
		quoteChar?: string | null;

		/** The row delimiter. Type: string (or Expression with resultType string). */
		rowDelimiter?: string | null;
	}

	/** DelimitedText dataset properties. */
	export interface DelimitedTextDatasetTypePropertiesFormProperties {

		/** The column delimiter. Type: string (or Expression with resultType string). */
		columnDelimiter: FormControl<string | null | undefined>,
		compressionCodec: FormControl<DelimitedTextDatasetTypePropertiesCompressionCodec | null | undefined>,

		/** All available compression levels. */
		compressionLevel: FormControl<CompressionLevel | null | undefined>,

		/** The code page name of the preferred encoding. If miss, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
		encodingName: FormControl<string | null | undefined>,

		/** The escape character. Type: string (or Expression with resultType string). */
		escapeChar: FormControl<string | null | undefined>,

		/** When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). */
		firstRowAsHeader: FormControl<string | null | undefined>,

		/** The null value string. Type: string (or Expression with resultType string). */
		nullValue: FormControl<string | null | undefined>,

		/** The quote character. Type: string (or Expression with resultType string). */
		quoteChar: FormControl<string | null | undefined>,

		/** The row delimiter. Type: string (or Expression with resultType string). */
		rowDelimiter: FormControl<string | null | undefined>,
	}
	export function CreateDelimitedTextDatasetTypePropertiesFormGroup() {
		return new FormGroup<DelimitedTextDatasetTypePropertiesFormProperties>({
			columnDelimiter: new FormControl<string | null | undefined>(undefined),
			compressionCodec: new FormControl<DelimitedTextDatasetTypePropertiesCompressionCodec | null | undefined>(undefined),
			compressionLevel: new FormControl<CompressionLevel | null | undefined>(undefined),
			encodingName: new FormControl<string | null | undefined>(undefined),
			escapeChar: new FormControl<string | null | undefined>(undefined),
			firstRowAsHeader: new FormControl<string | null | undefined>(undefined),
			nullValue: new FormControl<string | null | undefined>(undefined),
			quoteChar: new FormControl<string | null | undefined>(undefined),
			rowDelimiter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DelimitedTextDatasetTypePropertiesCompressionCodec { bzip2 = 0, gzip = 1, deflate = 2, zipDeflate = 3, snappy = 4, lz4 = 5 }


	/** Microsoft Azure Document Database Collection dataset. */
	export interface DocumentDbCollectionDataset {

		/**
		 * DocumentDB Collection dataset properties.
		 * Required
		 */
		typeProperties: DocumentDbCollectionDatasetTypeProperties;
	}

	/** Microsoft Azure Document Database Collection dataset. */
	export interface DocumentDbCollectionDatasetFormProperties {
	}
	export function CreateDocumentDbCollectionDatasetFormGroup() {
		return new FormGroup<DocumentDbCollectionDatasetFormProperties>({
		});

	}


	/** DocumentDB Collection dataset properties. */
	export interface DocumentDbCollectionDatasetTypeProperties {

		/**
		 * Document Database collection name. Type: string (or Expression with resultType string).
		 * Required
		 */
		collectionName: string;
	}

	/** DocumentDB Collection dataset properties. */
	export interface DocumentDbCollectionDatasetTypePropertiesFormProperties {

		/**
		 * Document Database collection name. Type: string (or Expression with resultType string).
		 * Required
		 */
		collectionName: FormControl<string | null | undefined>,
	}
	export function CreateDocumentDbCollectionDatasetTypePropertiesFormGroup() {
		return new FormGroup<DocumentDbCollectionDatasetTypePropertiesFormProperties>({
			collectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Drill Dataset Properties */
	export interface DrillDatasetTypeProperties {

		/** The schema name of the Drill. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the Drill. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Drill Dataset Properties */
	export interface DrillDatasetTypePropertiesFormProperties {

		/** The schema name of the Drill. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the Drill. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateDrillDatasetTypePropertiesFormGroup() {
		return new FormGroup<DrillDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Drill server dataset. */
	export interface DrillTableDataset {

		/** Drill Dataset Properties */
		typeProperties?: DrillDatasetTypeProperties;
	}

	/** Drill server dataset. */
	export interface DrillTableDatasetFormProperties {
	}
	export function CreateDrillTableDatasetFormGroup() {
		return new FormGroup<DrillTableDatasetFormProperties>({
		});

	}


	/** The path of the Dynamics AX OData entity. */
	export interface DynamicsAXResourceDataset {

		/**
		 * Dynamics AX OData resource dataset properties.
		 * Required
		 */
		typeProperties: DynamicsAXResourceDatasetTypeProperties;
	}

	/** The path of the Dynamics AX OData entity. */
	export interface DynamicsAXResourceDatasetFormProperties {
	}
	export function CreateDynamicsAXResourceDatasetFormGroup() {
		return new FormGroup<DynamicsAXResourceDatasetFormProperties>({
		});

	}


	/** Dynamics AX OData resource dataset properties. */
	export interface DynamicsAXResourceDatasetTypeProperties {

		/**
		 * The path of the Dynamics AX OData entity. Type: string (or Expression with resultType string).
		 * Required
		 */
		path: string;
	}

	/** Dynamics AX OData resource dataset properties. */
	export interface DynamicsAXResourceDatasetTypePropertiesFormProperties {

		/**
		 * The path of the Dynamics AX OData entity. Type: string (or Expression with resultType string).
		 * Required
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsAXResourceDatasetTypePropertiesFormGroup() {
		return new FormGroup<DynamicsAXResourceDatasetTypePropertiesFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Dynamics CRM entity dataset. */
	export interface DynamicsCrmEntityDataset {

		/** Dynamics CRM entity dataset properties. */
		typeProperties?: DynamicsCrmEntityDatasetTypeProperties;
	}

	/** The Dynamics CRM entity dataset. */
	export interface DynamicsCrmEntityDatasetFormProperties {
	}
	export function CreateDynamicsCrmEntityDatasetFormGroup() {
		return new FormGroup<DynamicsCrmEntityDatasetFormProperties>({
		});

	}


	/** Dynamics CRM entity dataset properties. */
	export interface DynamicsCrmEntityDatasetTypeProperties {

		/** The logical name of the entity. Type: string (or Expression with resultType string). */
		entityName?: string | null;
	}

	/** Dynamics CRM entity dataset properties. */
	export interface DynamicsCrmEntityDatasetTypePropertiesFormProperties {

		/** The logical name of the entity. Type: string (or Expression with resultType string). */
		entityName: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsCrmEntityDatasetTypePropertiesFormGroup() {
		return new FormGroup<DynamicsCrmEntityDatasetTypePropertiesFormProperties>({
			entityName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Dynamics entity dataset. */
	export interface DynamicsEntityDataset {

		/** Dynamics entity dataset properties. */
		typeProperties?: DynamicsEntityDatasetTypeProperties;
	}

	/** The Dynamics entity dataset. */
	export interface DynamicsEntityDatasetFormProperties {
	}
	export function CreateDynamicsEntityDatasetFormGroup() {
		return new FormGroup<DynamicsEntityDatasetFormProperties>({
		});

	}


	/** Dynamics entity dataset properties. */
	export interface DynamicsEntityDatasetTypeProperties {

		/** The logical name of the entity. Type: string (or Expression with resultType string). */
		entityName?: string | null;
	}

	/** Dynamics entity dataset properties. */
	export interface DynamicsEntityDatasetTypePropertiesFormProperties {

		/** The logical name of the entity. Type: string (or Expression with resultType string). */
		entityName: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsEntityDatasetTypePropertiesFormGroup() {
		return new FormGroup<DynamicsEntityDatasetTypePropertiesFormProperties>({
			entityName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Eloqua server dataset. */
	export interface EloquaObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Eloqua server dataset. */
	export interface EloquaObjectDatasetFormProperties {
	}
	export function CreateEloquaObjectDatasetFormGroup() {
		return new FormGroup<EloquaObjectDatasetFormProperties>({
		});

	}


	/** The location of file server dataset. */
	export interface FileServerLocation {
	}

	/** The location of file server dataset. */
	export interface FileServerLocationFormProperties {
	}
	export function CreateFileServerLocationFormGroup() {
		return new FormGroup<FileServerLocationFormProperties>({
		});

	}


	/** An on-premises file system dataset. */
	export interface FileShareDataset {

		/** On-premises file system dataset properties. */
		typeProperties?: FileShareDatasetTypeProperties;
	}

	/** An on-premises file system dataset. */
	export interface FileShareDatasetFormProperties {
	}
	export function CreateFileShareDatasetFormGroup() {
		return new FormGroup<FileShareDatasetFormProperties>({
		});

	}


	/** On-premises file system dataset properties. */
	export interface FileShareDatasetTypeProperties {

		/** The compression method used on a dataset. */
		compression?: DatasetCompression;

		/** Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string). */
		fileFilter?: string | null;

		/** The name of the on-premises file system. Type: string (or Expression with resultType string). */
		fileName?: string | null;

		/** The path of the on-premises file system. Type: string (or Expression with resultType string). */
		folderPath?: string | null;

		/** The format definition of a storage. */
		format?: DatasetStorageFormat;

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd?: string | null;

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart?: string | null;
	}

	/** On-premises file system dataset properties. */
	export interface FileShareDatasetTypePropertiesFormProperties {

		/** Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string). */
		fileFilter: FormControl<string | null | undefined>,

		/** The name of the on-premises file system. Type: string (or Expression with resultType string). */
		fileName: FormControl<string | null | undefined>,

		/** The path of the on-premises file system. Type: string (or Expression with resultType string). */
		folderPath: FormControl<string | null | undefined>,

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd: FormControl<string | null | undefined>,

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart: FormControl<string | null | undefined>,
	}
	export function CreateFileShareDatasetTypePropertiesFormGroup() {
		return new FormGroup<FileShareDatasetTypePropertiesFormProperties>({
			fileFilter: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeEnd: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeStart: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location of ftp server dataset. */
	export interface FtpServerLocation {
	}

	/** The location of ftp server dataset. */
	export interface FtpServerLocationFormProperties {
	}
	export function CreateFtpServerLocationFormGroup() {
		return new FormGroup<FtpServerLocationFormProperties>({
		});

	}


	/** Properties specific to this dataset type. */
	export interface GenericDatasetTypeProperties {

		/** The table name. Type: string (or Expression with resultType string). */
		tableName?: string | null;
	}

	/** Properties specific to this dataset type. */
	export interface GenericDatasetTypePropertiesFormProperties {

		/** The table name. Type: string (or Expression with resultType string). */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateGenericDatasetTypePropertiesFormGroup() {
		return new FormGroup<GenericDatasetTypePropertiesFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google AdWords service dataset. */
	export interface GoogleAdWordsObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Google AdWords service dataset. */
	export interface GoogleAdWordsObjectDatasetFormProperties {
	}
	export function CreateGoogleAdWordsObjectDatasetFormGroup() {
		return new FormGroup<GoogleAdWordsObjectDatasetFormProperties>({
		});

	}


	/** Google BigQuery Dataset Properties */
	export interface GoogleBigQueryDatasetTypeProperties {

		/** The database name of the Google BigQuery. Type: string (or Expression with resultType string). */
		dataset?: string | null;

		/** The table name of the Google BigQuery. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using database + table properties instead. */
		tableName?: string | null;
	}

	/** Google BigQuery Dataset Properties */
	export interface GoogleBigQueryDatasetTypePropertiesFormProperties {

		/** The database name of the Google BigQuery. Type: string (or Expression with resultType string). */
		dataset: FormControl<string | null | undefined>,

		/** The table name of the Google BigQuery. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using database + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleBigQueryDatasetTypePropertiesFormGroup() {
		return new FormGroup<GoogleBigQueryDatasetTypePropertiesFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google BigQuery service dataset. */
	export interface GoogleBigQueryObjectDataset {

		/** Google BigQuery Dataset Properties */
		typeProperties?: GoogleBigQueryDatasetTypeProperties;
	}

	/** Google BigQuery service dataset. */
	export interface GoogleBigQueryObjectDatasetFormProperties {
	}
	export function CreateGoogleBigQueryObjectDatasetFormGroup() {
		return new FormGroup<GoogleBigQueryObjectDatasetFormProperties>({
		});

	}


	/** The location of Google Cloud Storage dataset. */
	export interface GoogleCloudStorageLocation {

		/** Specify the bucketName of Google Cloud Storage. Type: string (or Expression with resultType string) */
		bucketName?: string | null;

		/** Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string). */
		version?: string | null;
	}

	/** The location of Google Cloud Storage dataset. */
	export interface GoogleCloudStorageLocationFormProperties {

		/** Specify the bucketName of Google Cloud Storage. Type: string (or Expression with resultType string) */
		bucketName: FormControl<string | null | undefined>,

		/** Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string). */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudStorageLocationFormGroup() {
		return new FormGroup<GoogleCloudStorageLocationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Greenplum Dataset Properties */
	export interface GreenplumDatasetTypeProperties {

		/** The schema name of Greenplum. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of Greenplum. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Greenplum Dataset Properties */
	export interface GreenplumDatasetTypePropertiesFormProperties {

		/** The schema name of Greenplum. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of Greenplum. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateGreenplumDatasetTypePropertiesFormGroup() {
		return new FormGroup<GreenplumDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Greenplum Database dataset. */
	export interface GreenplumTableDataset {

		/** Greenplum Dataset Properties */
		typeProperties?: GreenplumDatasetTypeProperties;
	}

	/** Greenplum Database dataset. */
	export interface GreenplumTableDatasetFormProperties {
	}
	export function CreateGreenplumTableDatasetFormGroup() {
		return new FormGroup<GreenplumTableDatasetFormProperties>({
		});

	}


	/** HBase server dataset. */
	export interface HBaseObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** HBase server dataset. */
	export interface HBaseObjectDatasetFormProperties {
	}
	export function CreateHBaseObjectDatasetFormGroup() {
		return new FormGroup<HBaseObjectDatasetFormProperties>({
		});

	}


	/** The location of HDFS. */
	export interface HdfsLocation {
	}

	/** The location of HDFS. */
	export interface HdfsLocationFormProperties {
	}
	export function CreateHdfsLocationFormGroup() {
		return new FormGroup<HdfsLocationFormProperties>({
		});

	}


	/** Hive Properties */
	export interface HiveDatasetTypeProperties {

		/** The schema name of the Hive. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the Hive. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Hive Properties */
	export interface HiveDatasetTypePropertiesFormProperties {

		/** The schema name of the Hive. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the Hive. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateHiveDatasetTypePropertiesFormGroup() {
		return new FormGroup<HiveDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hive Server dataset. */
	export interface HiveObjectDataset {

		/** Hive Properties */
		typeProperties?: HiveDatasetTypeProperties;
	}

	/** Hive Server dataset. */
	export interface HiveObjectDatasetFormProperties {
	}
	export function CreateHiveObjectDatasetFormGroup() {
		return new FormGroup<HiveObjectDatasetFormProperties>({
		});

	}


	/** A file in an HTTP web server. */
	export interface HttpDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: HttpDatasetTypeProperties;
	}

	/** A file in an HTTP web server. */
	export interface HttpDatasetFormProperties {
	}
	export function CreateHttpDatasetFormGroup() {
		return new FormGroup<HttpDatasetFormProperties>({
		});

	}


	/** Properties specific to this dataset type. */
	export interface HttpDatasetTypeProperties {

		/**
		 * The headers for the HTTP Request. e.g. request-header-name-1:request-header-value-1
		 * ...
		 * request-header-name-n:request-header-value-n Type: string (or Expression with resultType string).
		 */
		additionalHeaders?: string | null;

		/** The compression method used on a dataset. */
		compression?: DatasetCompression;

		/** The format definition of a storage. */
		format?: DatasetStorageFormat;

		/** The relative URL based on the URL in the HttpLinkedService refers to an HTTP file Type: string (or Expression with resultType string). */
		relativeUrl?: string | null;

		/** The body for the HTTP request. Type: string (or Expression with resultType string). */
		requestBody?: string | null;

		/** The HTTP method for the HTTP request. Type: string (or Expression with resultType string). */
		requestMethod?: string | null;
	}

	/** Properties specific to this dataset type. */
	export interface HttpDatasetTypePropertiesFormProperties {

		/**
		 * The headers for the HTTP Request. e.g. request-header-name-1:request-header-value-1
		 * ...
		 * request-header-name-n:request-header-value-n Type: string (or Expression with resultType string).
		 */
		additionalHeaders: FormControl<string | null | undefined>,

		/** The relative URL based on the URL in the HttpLinkedService refers to an HTTP file Type: string (or Expression with resultType string). */
		relativeUrl: FormControl<string | null | undefined>,

		/** The body for the HTTP request. Type: string (or Expression with resultType string). */
		requestBody: FormControl<string | null | undefined>,

		/** The HTTP method for the HTTP request. Type: string (or Expression with resultType string). */
		requestMethod: FormControl<string | null | undefined>,
	}
	export function CreateHttpDatasetTypePropertiesFormGroup() {
		return new FormGroup<HttpDatasetTypePropertiesFormProperties>({
			additionalHeaders: new FormControl<string | null | undefined>(undefined),
			relativeUrl: new FormControl<string | null | undefined>(undefined),
			requestBody: new FormControl<string | null | undefined>(undefined),
			requestMethod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location of http server. */
	export interface HttpServerLocation {

		/** Specify the relativeUrl of http server. Type: string (or Expression with resultType string) */
		relativeUrl?: string | null;
	}

	/** The location of http server. */
	export interface HttpServerLocationFormProperties {

		/** Specify the relativeUrl of http server. Type: string (or Expression with resultType string) */
		relativeUrl: FormControl<string | null | undefined>,
	}
	export function CreateHttpServerLocationFormGroup() {
		return new FormGroup<HttpServerLocationFormProperties>({
			relativeUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hubspot Service dataset. */
	export interface HubspotObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Hubspot Service dataset. */
	export interface HubspotObjectDatasetFormProperties {
	}
	export function CreateHubspotObjectDatasetFormGroup() {
		return new FormGroup<HubspotObjectDatasetFormProperties>({
		});

	}


	/** Impala Dataset Properties */
	export interface ImpalaDatasetTypeProperties {

		/** The schema name of the Impala. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the Impala. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Impala Dataset Properties */
	export interface ImpalaDatasetTypePropertiesFormProperties {

		/** The schema name of the Impala. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the Impala. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateImpalaDatasetTypePropertiesFormGroup() {
		return new FormGroup<ImpalaDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Impala server dataset. */
	export interface ImpalaObjectDataset {

		/** Impala Dataset Properties */
		typeProperties?: ImpalaDatasetTypeProperties;
	}

	/** Impala server dataset. */
	export interface ImpalaObjectDatasetFormProperties {
	}
	export function CreateImpalaObjectDatasetFormGroup() {
		return new FormGroup<ImpalaObjectDatasetFormProperties>({
		});

	}


	/** The Informix table dataset. */
	export interface InformixTableDataset {

		/** Informix table dataset properties. */
		typeProperties?: InformixTableDatasetTypeProperties;
	}

	/** The Informix table dataset. */
	export interface InformixTableDatasetFormProperties {
	}
	export function CreateInformixTableDatasetFormGroup() {
		return new FormGroup<InformixTableDatasetFormProperties>({
		});

	}


	/** Informix table dataset properties. */
	export interface InformixTableDatasetTypeProperties {

		/** The Informix table name. Type: string (or Expression with resultType string). */
		tableName?: string | null;
	}

	/** Informix table dataset properties. */
	export interface InformixTableDatasetTypePropertiesFormProperties {

		/** The Informix table name. Type: string (or Expression with resultType string). */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateInformixTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<InformixTableDatasetTypePropertiesFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Jira Service dataset. */
	export interface JiraObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Jira Service dataset. */
	export interface JiraObjectDatasetFormProperties {
	}
	export function CreateJiraObjectDatasetFormGroup() {
		return new FormGroup<JiraObjectDatasetFormProperties>({
		});

	}


	/** Json dataset. */
	export interface JsonDataset {

		/** Json dataset properties. */
		typeProperties?: JsonDatasetTypeProperties;
	}

	/** Json dataset. */
	export interface JsonDatasetFormProperties {
	}
	export function CreateJsonDatasetFormGroup() {
		return new FormGroup<JsonDatasetFormProperties>({
		});

	}


	/** Json dataset properties. */
	export interface JsonDatasetTypeProperties {

		/** The compression method used on a dataset. */
		compression?: DatasetCompression;

		/** The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
		encodingName?: string | null;

		/**
		 * Dataset location.
		 * Required
		 */
		location: DatasetLocation;
	}

	/** Json dataset properties. */
	export interface JsonDatasetTypePropertiesFormProperties {

		/** The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
		encodingName: FormControl<string | null | undefined>,
	}
	export function CreateJsonDatasetTypePropertiesFormGroup() {
		return new FormGroup<JsonDatasetTypePropertiesFormProperties>({
			encodingName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data stored in JSON format. */
	export interface JsonFormat {

		/** The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference: https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string). */
		encodingName?: string | null;

		/** JSON format file pattern. A property of JsonFormat. */
		filePattern?: JsonFormatFilePattern;

		/** The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string). */
		jsonNodeReference?: string | null;

		/** The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object). */
		jsonPathDefinition?: string | null;

		/** The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string). */
		nestingSeparator?: string | null;
	}

	/** The data stored in JSON format. */
	export interface JsonFormatFormProperties {

		/** The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference: https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string). */
		encodingName: FormControl<string | null | undefined>,

		/** JSON format file pattern. A property of JsonFormat. */
		filePattern: FormControl<JsonFormatFilePattern | null | undefined>,

		/** The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string). */
		jsonNodeReference: FormControl<string | null | undefined>,

		/** The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object). */
		jsonPathDefinition: FormControl<string | null | undefined>,

		/** The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string). */
		nestingSeparator: FormControl<string | null | undefined>,
	}
	export function CreateJsonFormatFormGroup() {
		return new FormGroup<JsonFormatFormProperties>({
			encodingName: new FormControl<string | null | undefined>(undefined),
			filePattern: new FormControl<JsonFormatFilePattern | null | undefined>(undefined),
			jsonNodeReference: new FormControl<string | null | undefined>(undefined),
			jsonPathDefinition: new FormControl<string | null | undefined>(undefined),
			nestingSeparator: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON format file pattern. A property of JsonFormat. */
	export enum JsonFormatFilePattern { setOfObjects = 0, arrayOfObjects = 1 }


	/** Magento server dataset. */
	export interface MagentoObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Magento server dataset. */
	export interface MagentoObjectDatasetFormProperties {
	}
	export function CreateMagentoObjectDatasetFormGroup() {
		return new FormGroup<MagentoObjectDatasetFormProperties>({
		});

	}


	/** MariaDB server dataset. */
	export interface MariaDBTableDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** MariaDB server dataset. */
	export interface MariaDBTableDatasetFormProperties {
	}
	export function CreateMariaDBTableDatasetFormGroup() {
		return new FormGroup<MariaDBTableDatasetFormProperties>({
		});

	}


	/** Marketo server dataset. */
	export interface MarketoObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Marketo server dataset. */
	export interface MarketoObjectDatasetFormProperties {
	}
	export function CreateMarketoObjectDatasetFormGroup() {
		return new FormGroup<MarketoObjectDatasetFormProperties>({
		});

	}


	/** The Microsoft Access table dataset. */
	export interface MicrosoftAccessTableDataset {

		/** Microsoft Access table dataset properties. */
		typeProperties?: MicrosoftAccessTableDatasetTypeProperties;
	}

	/** The Microsoft Access table dataset. */
	export interface MicrosoftAccessTableDatasetFormProperties {
	}
	export function CreateMicrosoftAccessTableDatasetFormGroup() {
		return new FormGroup<MicrosoftAccessTableDatasetFormProperties>({
		});

	}


	/** Microsoft Access table dataset properties. */
	export interface MicrosoftAccessTableDatasetTypeProperties {

		/** The Microsoft Access table name. Type: string (or Expression with resultType string). */
		tableName?: string | null;
	}

	/** Microsoft Access table dataset properties. */
	export interface MicrosoftAccessTableDatasetTypePropertiesFormProperties {

		/** The Microsoft Access table name. Type: string (or Expression with resultType string). */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateMicrosoftAccessTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<MicrosoftAccessTableDatasetTypePropertiesFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The MongoDB database dataset. */
	export interface MongoDbCollectionDataset {

		/**
		 * MongoDB database dataset properties.
		 * Required
		 */
		typeProperties: MongoDbCollectionDatasetTypeProperties;
	}

	/** The MongoDB database dataset. */
	export interface MongoDbCollectionDatasetFormProperties {
	}
	export function CreateMongoDbCollectionDatasetFormGroup() {
		return new FormGroup<MongoDbCollectionDatasetFormProperties>({
		});

	}


	/** MongoDB database dataset properties. */
	export interface MongoDbCollectionDatasetTypeProperties {

		/**
		 * The table name of the MongoDB database. Type: string (or Expression with resultType string).
		 * Required
		 */
		collectionName: string;
	}

	/** MongoDB database dataset properties. */
	export interface MongoDbCollectionDatasetTypePropertiesFormProperties {

		/**
		 * The table name of the MongoDB database. Type: string (or Expression with resultType string).
		 * Required
		 */
		collectionName: FormControl<string | null | undefined>,
	}
	export function CreateMongoDbCollectionDatasetTypePropertiesFormGroup() {
		return new FormGroup<MongoDbCollectionDatasetTypePropertiesFormProperties>({
			collectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The MongoDB database dataset. */
	export interface MongoDbV2CollectionDataset {

		/**
		 * MongoDB database dataset properties.
		 * Required
		 */
		typeProperties: MongoDbV2CollectionDatasetTypeProperties;
	}

	/** The MongoDB database dataset. */
	export interface MongoDbV2CollectionDatasetFormProperties {
	}
	export function CreateMongoDbV2CollectionDatasetFormGroup() {
		return new FormGroup<MongoDbV2CollectionDatasetFormProperties>({
		});

	}


	/** MongoDB database dataset properties. */
	export interface MongoDbV2CollectionDatasetTypeProperties {

		/**
		 * The collection name of the MongoDB database. Type: string (or Expression with resultType string).
		 * Required
		 */
		collection: string;
	}

	/** MongoDB database dataset properties. */
	export interface MongoDbV2CollectionDatasetTypePropertiesFormProperties {

		/**
		 * The collection name of the MongoDB database. Type: string (or Expression with resultType string).
		 * Required
		 */
		collection: FormControl<string | null | undefined>,
	}
	export function CreateMongoDbV2CollectionDatasetTypePropertiesFormGroup() {
		return new FormGroup<MongoDbV2CollectionDatasetTypePropertiesFormProperties>({
			collection: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The MySQL table dataset. */
	export interface MySqlTableDataset {

		/** MySql table dataset properties. */
		typeProperties?: MySqlTableDatasetTypeProperties;
	}

	/** The MySQL table dataset. */
	export interface MySqlTableDatasetFormProperties {
	}
	export function CreateMySqlTableDatasetFormGroup() {
		return new FormGroup<MySqlTableDatasetFormProperties>({
		});

	}


	/** MySql table dataset properties. */
	export interface MySqlTableDatasetTypeProperties {

		/** The MySQL table name. Type: string (or Expression with resultType string). */
		tableName?: string | null;
	}

	/** MySql table dataset properties. */
	export interface MySqlTableDatasetTypePropertiesFormProperties {

		/** The MySQL table name. Type: string (or Expression with resultType string). */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateMySqlTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<MySqlTableDatasetTypePropertiesFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Netezza dataset. */
	export interface NetezzaTableDataset {

		/** Netezza dataset properties. */
		typeProperties?: NetezzaTableDatasetTypeProperties;
	}

	/** Netezza dataset. */
	export interface NetezzaTableDatasetFormProperties {
	}
	export function CreateNetezzaTableDatasetFormGroup() {
		return new FormGroup<NetezzaTableDatasetFormProperties>({
		});

	}


	/** Netezza dataset properties. */
	export interface NetezzaTableDatasetTypeProperties {

		/** The schema name of the Netezza. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the Netezza. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Netezza dataset properties. */
	export interface NetezzaTableDatasetTypePropertiesFormProperties {

		/** The schema name of the Netezza. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the Netezza. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateNetezzaTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<NetezzaTableDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Open Data Protocol (OData) resource dataset. */
	export interface ODataResourceDataset {

		/** OData dataset properties. */
		typeProperties?: ODataResourceDatasetTypeProperties;
	}

	/** The Open Data Protocol (OData) resource dataset. */
	export interface ODataResourceDatasetFormProperties {
	}
	export function CreateODataResourceDatasetFormGroup() {
		return new FormGroup<ODataResourceDatasetFormProperties>({
		});

	}


	/** OData dataset properties. */
	export interface ODataResourceDatasetTypeProperties {

		/** The OData resource path. Type: string (or Expression with resultType string). */
		path?: string | null;
	}

	/** OData dataset properties. */
	export interface ODataResourceDatasetTypePropertiesFormProperties {

		/** The OData resource path. Type: string (or Expression with resultType string). */
		path: FormControl<string | null | undefined>,
	}
	export function CreateODataResourceDatasetTypePropertiesFormGroup() {
		return new FormGroup<ODataResourceDatasetTypePropertiesFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ODBC table dataset. */
	export interface OdbcTableDataset {

		/** ODBC table dataset properties. */
		typeProperties?: OdbcTableDatasetTypeProperties;
	}

	/** The ODBC table dataset. */
	export interface OdbcTableDatasetFormProperties {
	}
	export function CreateOdbcTableDatasetFormGroup() {
		return new FormGroup<OdbcTableDatasetFormProperties>({
		});

	}


	/** ODBC table dataset properties. */
	export interface OdbcTableDatasetTypeProperties {

		/** The ODBC table name. Type: string (or Expression with resultType string). */
		tableName?: string | null;
	}

	/** ODBC table dataset properties. */
	export interface OdbcTableDatasetTypePropertiesFormProperties {

		/** The ODBC table name. Type: string (or Expression with resultType string). */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateOdbcTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<OdbcTableDatasetTypePropertiesFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Office365 account. */
	export interface Office365Dataset {

		/**
		 * Office365 dataset properties.
		 * Required
		 */
		typeProperties: Office365DatasetTypeProperties;
	}

	/** The Office365 account. */
	export interface Office365DatasetFormProperties {
	}
	export function CreateOffice365DatasetFormGroup() {
		return new FormGroup<Office365DatasetFormProperties>({
		});

	}


	/** Office365 dataset properties. */
	export interface Office365DatasetTypeProperties {

		/** A predicate expression that can be used to filter the specific rows to extract from Office 365. Type: string (or Expression with resultType string). */
		predicate?: string | null;

		/**
		 * Name of the dataset to extract from Office 365. Type: string (or Expression with resultType string).
		 * Required
		 */
		tableName: string;
	}

	/** Office365 dataset properties. */
	export interface Office365DatasetTypePropertiesFormProperties {

		/** A predicate expression that can be used to filter the specific rows to extract from Office 365. Type: string (or Expression with resultType string). */
		predicate: FormControl<string | null | undefined>,

		/**
		 * Name of the dataset to extract from Office 365. Type: string (or Expression with resultType string).
		 * Required
		 */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateOffice365DatasetTypePropertiesFormGroup() {
		return new FormGroup<Office365DatasetTypePropertiesFormProperties>({
			predicate: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Oracle Service Cloud dataset. */
	export interface OracleServiceCloudObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Oracle Service Cloud dataset. */
	export interface OracleServiceCloudObjectDatasetFormProperties {
	}
	export function CreateOracleServiceCloudObjectDatasetFormGroup() {
		return new FormGroup<OracleServiceCloudObjectDatasetFormProperties>({
		});

	}


	/** The on-premises Oracle database dataset. */
	export interface OracleTableDataset {

		/** On-premises Oracle dataset properties. */
		typeProperties?: OracleTableDatasetTypeProperties;
	}

	/** The on-premises Oracle database dataset. */
	export interface OracleTableDatasetFormProperties {
	}
	export function CreateOracleTableDatasetFormGroup() {
		return new FormGroup<OracleTableDatasetFormProperties>({
		});

	}


	/** On-premises Oracle dataset properties. */
	export interface OracleTableDatasetTypeProperties {

		/** The schema name of the on-premises Oracle database. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the on-premises Oracle database. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** On-premises Oracle dataset properties. */
	export interface OracleTableDatasetTypePropertiesFormProperties {

		/** The schema name of the on-premises Oracle database. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the on-premises Oracle database. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateOracleTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<OracleTableDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ORC dataset. */
	export interface OrcDataset {

		/** ORC dataset properties. */
		typeProperties?: OrcDatasetTypeProperties;
	}

	/** ORC dataset. */
	export interface OrcDatasetFormProperties {
	}
	export function CreateOrcDatasetFormGroup() {
		return new FormGroup<OrcDatasetFormProperties>({
		});

	}


	/** ORC dataset properties. */
	export interface OrcDatasetTypeProperties {

		/**
		 * Dataset location.
		 * Required
		 */
		location: DatasetLocation;
		orcCompressionCodec?: OrcDatasetTypePropertiesOrcCompressionCodec | null;
	}

	/** ORC dataset properties. */
	export interface OrcDatasetTypePropertiesFormProperties {
		orcCompressionCodec: FormControl<OrcDatasetTypePropertiesOrcCompressionCodec | null | undefined>,
	}
	export function CreateOrcDatasetTypePropertiesFormGroup() {
		return new FormGroup<OrcDatasetTypePropertiesFormProperties>({
			orcCompressionCodec: new FormControl<OrcDatasetTypePropertiesOrcCompressionCodec | null | undefined>(undefined),
		});

	}

	export enum OrcDatasetTypePropertiesOrcCompressionCodec { none = 0, zlib = 1, snappy = 2 }


	/** The data stored in Optimized Row Columnar (ORC) format. */
	export interface OrcFormat {
	}

	/** The data stored in Optimized Row Columnar (ORC) format. */
	export interface OrcFormatFormProperties {
	}
	export function CreateOrcFormatFormGroup() {
		return new FormGroup<OrcFormatFormProperties>({
		});

	}


	/** Parquet dataset. */
	export interface ParquetDataset {

		/** Parquet dataset properties. */
		typeProperties?: ParquetDatasetTypeProperties;
	}

	/** Parquet dataset. */
	export interface ParquetDatasetFormProperties {
	}
	export function CreateParquetDatasetFormGroup() {
		return new FormGroup<ParquetDatasetFormProperties>({
		});

	}


	/** Parquet dataset properties. */
	export interface ParquetDatasetTypeProperties {
		compressionCodec?: ParquetDatasetTypePropertiesCompressionCodec;

		/**
		 * Dataset location.
		 * Required
		 */
		location: DatasetLocation;
	}

	/** Parquet dataset properties. */
	export interface ParquetDatasetTypePropertiesFormProperties {
		compressionCodec: FormControl<ParquetDatasetTypePropertiesCompressionCodec | null | undefined>,
	}
	export function CreateParquetDatasetTypePropertiesFormGroup() {
		return new FormGroup<ParquetDatasetTypePropertiesFormProperties>({
			compressionCodec: new FormControl<ParquetDatasetTypePropertiesCompressionCodec | null | undefined>(undefined),
		});

	}

	export enum ParquetDatasetTypePropertiesCompressionCodec { none = 0, gzip = 1, snappy = 2, lzo = 3 }


	/** The data stored in Parquet format. */
	export interface ParquetFormat {
	}

	/** The data stored in Parquet format. */
	export interface ParquetFormatFormProperties {
	}
	export function CreateParquetFormatFormGroup() {
		return new FormGroup<ParquetFormatFormProperties>({
		});

	}


	/** Paypal Service dataset. */
	export interface PaypalObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Paypal Service dataset. */
	export interface PaypalObjectDatasetFormProperties {
	}
	export function CreatePaypalObjectDatasetFormGroup() {
		return new FormGroup<PaypalObjectDatasetFormProperties>({
		});

	}


	/** Phoenix Dataset Properties */
	export interface PhoenixDatasetTypeProperties {

		/** The schema name of the Phoenix. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the Phoenix. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Phoenix Dataset Properties */
	export interface PhoenixDatasetTypePropertiesFormProperties {

		/** The schema name of the Phoenix. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the Phoenix. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreatePhoenixDatasetTypePropertiesFormGroup() {
		return new FormGroup<PhoenixDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Phoenix server dataset. */
	export interface PhoenixObjectDataset {

		/** Phoenix Dataset Properties */
		typeProperties?: PhoenixDatasetTypeProperties;
	}

	/** Phoenix server dataset. */
	export interface PhoenixObjectDatasetFormProperties {
	}
	export function CreatePhoenixObjectDatasetFormGroup() {
		return new FormGroup<PhoenixObjectDatasetFormProperties>({
		});

	}


	/** The PostgreSQL table dataset. */
	export interface PostgreSqlTableDataset {

		/** PostgreSQL table dataset properties. */
		typeProperties?: PostgreSqlTableDatasetTypeProperties;
	}

	/** The PostgreSQL table dataset. */
	export interface PostgreSqlTableDatasetFormProperties {
	}
	export function CreatePostgreSqlTableDatasetFormGroup() {
		return new FormGroup<PostgreSqlTableDatasetFormProperties>({
		});

	}


	/** PostgreSQL table dataset properties. */
	export interface PostgreSqlTableDatasetTypeProperties {

		/** The PostgreSQL schema name. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The PostgreSQL table name. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** PostgreSQL table dataset properties. */
	export interface PostgreSqlTableDatasetTypePropertiesFormProperties {

		/** The PostgreSQL schema name. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The PostgreSQL table name. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreatePostgreSqlTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<PostgreSqlTableDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Presto Dataset Properties */
	export interface PrestoDatasetTypeProperties {

		/** The schema name of the Presto. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the Presto. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Presto Dataset Properties */
	export interface PrestoDatasetTypePropertiesFormProperties {

		/** The schema name of the Presto. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the Presto. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreatePrestoDatasetTypePropertiesFormGroup() {
		return new FormGroup<PrestoDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Presto server dataset. */
	export interface PrestoObjectDataset {

		/** Presto Dataset Properties */
		typeProperties?: PrestoDatasetTypeProperties;
	}

	/** Presto server dataset. */
	export interface PrestoObjectDatasetFormProperties {
	}
	export function CreatePrestoObjectDatasetFormGroup() {
		return new FormGroup<PrestoObjectDatasetFormProperties>({
		});

	}


	/** QuickBooks server dataset. */
	export interface QuickBooksObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** QuickBooks server dataset. */
	export interface QuickBooksObjectDatasetFormProperties {
	}
	export function CreateQuickBooksObjectDatasetFormGroup() {
		return new FormGroup<QuickBooksObjectDatasetFormProperties>({
		});

	}


	/** The relational table dataset. */
	export interface RelationalTableDataset {

		/** Relational table dataset properties. */
		typeProperties?: RelationalTableDatasetTypeProperties;
	}

	/** The relational table dataset. */
	export interface RelationalTableDatasetFormProperties {
	}
	export function CreateRelationalTableDatasetFormGroup() {
		return new FormGroup<RelationalTableDatasetFormProperties>({
		});

	}


	/** Relational table dataset properties. */
	export interface RelationalTableDatasetTypeProperties {

		/** The relational table name. Type: string (or Expression with resultType string). */
		tableName?: string | null;
	}

	/** Relational table dataset properties. */
	export interface RelationalTableDatasetTypePropertiesFormProperties {

		/** The relational table name. Type: string (or Expression with resultType string). */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateRelationalTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<RelationalTableDatasetTypePropertiesFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Responsys dataset. */
	export interface ResponsysObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Responsys dataset. */
	export interface ResponsysObjectDatasetFormProperties {
	}
	export function CreateResponsysObjectDatasetFormGroup() {
		return new FormGroup<ResponsysObjectDatasetFormProperties>({
		});

	}


	/** A Rest service dataset. */
	export interface RestResourceDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: RestResourceDatasetTypeProperties;
	}

	/** A Rest service dataset. */
	export interface RestResourceDatasetFormProperties {
	}
	export function CreateRestResourceDatasetFormGroup() {
		return new FormGroup<RestResourceDatasetFormProperties>({
		});

	}


	/** Properties specific to this dataset type. */
	export interface RestResourceDatasetTypeProperties {

		/** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
		additionalHeaders?: string | null;

		/** The pagination rules to compose next page requests. Type: string (or Expression with resultType string). */
		paginationRules?: string | null;

		/** The relative URL to the resource that the RESTful API provides. Type: string (or Expression with resultType string). */
		relativeUrl?: string | null;

		/** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
		requestBody?: string | null;

		/** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
		requestMethod?: string | null;
	}

	/** Properties specific to this dataset type. */
	export interface RestResourceDatasetTypePropertiesFormProperties {

		/** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
		additionalHeaders: FormControl<string | null | undefined>,

		/** The pagination rules to compose next page requests. Type: string (or Expression with resultType string). */
		paginationRules: FormControl<string | null | undefined>,

		/** The relative URL to the resource that the RESTful API provides. Type: string (or Expression with resultType string). */
		relativeUrl: FormControl<string | null | undefined>,

		/** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
		requestBody: FormControl<string | null | undefined>,

		/** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
		requestMethod: FormControl<string | null | undefined>,
	}
	export function CreateRestResourceDatasetTypePropertiesFormGroup() {
		return new FormGroup<RestResourceDatasetTypePropertiesFormProperties>({
			additionalHeaders: new FormControl<string | null | undefined>(undefined),
			paginationRules: new FormControl<string | null | undefined>(undefined),
			relativeUrl: new FormControl<string | null | undefined>(undefined),
			requestBody: new FormControl<string | null | undefined>(undefined),
			requestMethod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Salesforce Marketing Cloud dataset. */
	export interface SalesforceMarketingCloudObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Salesforce Marketing Cloud dataset. */
	export interface SalesforceMarketingCloudObjectDatasetFormProperties {
	}
	export function CreateSalesforceMarketingCloudObjectDatasetFormGroup() {
		return new FormGroup<SalesforceMarketingCloudObjectDatasetFormProperties>({
		});

	}


	/** The Salesforce object dataset. */
	export interface SalesforceObjectDataset {

		/** Salesforce object dataset properties. */
		typeProperties?: SalesforceObjectDatasetTypeProperties;
	}

	/** The Salesforce object dataset. */
	export interface SalesforceObjectDatasetFormProperties {
	}
	export function CreateSalesforceObjectDatasetFormGroup() {
		return new FormGroup<SalesforceObjectDatasetFormProperties>({
		});

	}


	/** Salesforce object dataset properties. */
	export interface SalesforceObjectDatasetTypeProperties {

		/** The Salesforce object API name. Type: string (or Expression with resultType string). */
		objectApiName?: string | null;
	}

	/** Salesforce object dataset properties. */
	export interface SalesforceObjectDatasetTypePropertiesFormProperties {

		/** The Salesforce object API name. Type: string (or Expression with resultType string). */
		objectApiName: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceObjectDatasetTypePropertiesFormGroup() {
		return new FormGroup<SalesforceObjectDatasetTypePropertiesFormProperties>({
			objectApiName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Salesforce Service Cloud object dataset. */
	export interface SalesforceServiceCloudObjectDataset {

		/** Salesforce Service Cloud object dataset properties. */
		typeProperties?: SalesforceServiceCloudObjectDatasetTypeProperties;
	}

	/** The Salesforce Service Cloud object dataset. */
	export interface SalesforceServiceCloudObjectDatasetFormProperties {
	}
	export function CreateSalesforceServiceCloudObjectDatasetFormGroup() {
		return new FormGroup<SalesforceServiceCloudObjectDatasetFormProperties>({
		});

	}


	/** Salesforce Service Cloud object dataset properties. */
	export interface SalesforceServiceCloudObjectDatasetTypeProperties {

		/** The Salesforce Service Cloud object API name. Type: string (or Expression with resultType string). */
		objectApiName?: string | null;
	}

	/** Salesforce Service Cloud object dataset properties. */
	export interface SalesforceServiceCloudObjectDatasetTypePropertiesFormProperties {

		/** The Salesforce Service Cloud object API name. Type: string (or Expression with resultType string). */
		objectApiName: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceServiceCloudObjectDatasetTypePropertiesFormGroup() {
		return new FormGroup<SalesforceServiceCloudObjectDatasetTypePropertiesFormProperties>({
			objectApiName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SAP BW cube dataset. */
	export interface SapBwCubeDataset {
	}

	/** The SAP BW cube dataset. */
	export interface SapBwCubeDatasetFormProperties {
	}
	export function CreateSapBwCubeDatasetFormGroup() {
		return new FormGroup<SapBwCubeDatasetFormProperties>({
		});

	}


	/** The path of the SAP Cloud for Customer OData entity. */
	export interface SapCloudForCustomerResourceDataset {

		/**
		 * Sap Cloud For Customer OData resource dataset properties.
		 * Required
		 */
		typeProperties: SapCloudForCustomerResourceDatasetTypeProperties;
	}

	/** The path of the SAP Cloud for Customer OData entity. */
	export interface SapCloudForCustomerResourceDatasetFormProperties {
	}
	export function CreateSapCloudForCustomerResourceDatasetFormGroup() {
		return new FormGroup<SapCloudForCustomerResourceDatasetFormProperties>({
		});

	}


	/** Sap Cloud For Customer OData resource dataset properties. */
	export interface SapCloudForCustomerResourceDatasetTypeProperties {

		/**
		 * The path of the SAP Cloud for Customer OData entity. Type: string (or Expression with resultType string).
		 * Required
		 */
		path: string;
	}

	/** Sap Cloud For Customer OData resource dataset properties. */
	export interface SapCloudForCustomerResourceDatasetTypePropertiesFormProperties {

		/**
		 * The path of the SAP Cloud for Customer OData entity. Type: string (or Expression with resultType string).
		 * Required
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateSapCloudForCustomerResourceDatasetTypePropertiesFormGroup() {
		return new FormGroup<SapCloudForCustomerResourceDatasetTypePropertiesFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The path of the SAP ECC OData entity. */
	export interface SapEccResourceDataset {

		/**
		 * Sap ECC OData resource dataset properties.
		 * Required
		 */
		typeProperties: SapEccResourceDatasetTypeProperties;
	}

	/** The path of the SAP ECC OData entity. */
	export interface SapEccResourceDatasetFormProperties {
	}
	export function CreateSapEccResourceDatasetFormGroup() {
		return new FormGroup<SapEccResourceDatasetFormProperties>({
		});

	}


	/** Sap ECC OData resource dataset properties. */
	export interface SapEccResourceDatasetTypeProperties {

		/**
		 * The path of the SAP ECC OData entity. Type: string (or Expression with resultType string).
		 * Required
		 */
		path: string;
	}

	/** Sap ECC OData resource dataset properties. */
	export interface SapEccResourceDatasetTypePropertiesFormProperties {

		/**
		 * The path of the SAP ECC OData entity. Type: string (or Expression with resultType string).
		 * Required
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateSapEccResourceDatasetTypePropertiesFormGroup() {
		return new FormGroup<SapEccResourceDatasetTypePropertiesFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** SAP HANA Table properties. */
	export interface SapHanaTableDataset {

		/** SAP HANA Table properties. */
		typeProperties?: SapHanaTableDatasetTypeProperties;
	}

	/** SAP HANA Table properties. */
	export interface SapHanaTableDatasetFormProperties {
	}
	export function CreateSapHanaTableDatasetFormGroup() {
		return new FormGroup<SapHanaTableDatasetFormProperties>({
		});

	}


	/** SAP HANA Table properties. */
	export interface SapHanaTableDatasetTypeProperties {

		/** The schema name of SAP HANA. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of SAP HANA. Type: string (or Expression with resultType string). */
		table?: string | null;
	}

	/** SAP HANA Table properties. */
	export interface SapHanaTableDatasetTypePropertiesFormProperties {

		/** The schema name of SAP HANA. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of SAP HANA. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,
	}
	export function CreateSapHanaTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<SapHanaTableDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sap Business Warehouse Open Hub Destination Table properties. */
	export interface SapOpenHubTableDataset {

		/**
		 * Sap Business Warehouse Open Hub Destination Table properties.
		 * Required
		 */
		typeProperties: SapOpenHubTableDatasetTypeProperties;
	}

	/** Sap Business Warehouse Open Hub Destination Table properties. */
	export interface SapOpenHubTableDatasetFormProperties {
	}
	export function CreateSapOpenHubTableDatasetFormGroup() {
		return new FormGroup<SapOpenHubTableDatasetFormProperties>({
		});

	}


	/** Sap Business Warehouse Open Hub Destination Table properties. */
	export interface SapOpenHubTableDatasetTypeProperties {

		/** The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). */
		baseRequestId?: string | null;

		/** Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). */
		excludeLastRequest?: string | null;

		/**
		 * The name of the Open Hub Destination with destination type as Database Table. Type: string (or Expression with resultType string).
		 * Required
		 */
		openHubDestinationName: string;
	}

	/** Sap Business Warehouse Open Hub Destination Table properties. */
	export interface SapOpenHubTableDatasetTypePropertiesFormProperties {

		/** The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). */
		baseRequestId: FormControl<string | null | undefined>,

		/** Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). */
		excludeLastRequest: FormControl<string | null | undefined>,

		/**
		 * The name of the Open Hub Destination with destination type as Database Table. Type: string (or Expression with resultType string).
		 * Required
		 */
		openHubDestinationName: FormControl<string | null | undefined>,
	}
	export function CreateSapOpenHubTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<SapOpenHubTableDatasetTypePropertiesFormProperties>({
			baseRequestId: new FormControl<string | null | undefined>(undefined),
			excludeLastRequest: new FormControl<string | null | undefined>(undefined),
			openHubDestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** SAP Table Resource properties. */
	export interface SapTableResourceDataset {

		/**
		 * SAP Table Resource properties.
		 * Required
		 */
		typeProperties: SapTableResourceDatasetTypeProperties;
	}

	/** SAP Table Resource properties. */
	export interface SapTableResourceDatasetFormProperties {
	}
	export function CreateSapTableResourceDatasetFormGroup() {
		return new FormGroup<SapTableResourceDatasetFormProperties>({
		});

	}


	/** SAP Table Resource properties. */
	export interface SapTableResourceDatasetTypeProperties {

		/**
		 * The name of the SAP Table. Type: string (or Expression with resultType string).
		 * Required
		 */
		tableName: string;
	}

	/** SAP Table Resource properties. */
	export interface SapTableResourceDatasetTypePropertiesFormProperties {

		/**
		 * The name of the SAP Table. Type: string (or Expression with resultType string).
		 * Required
		 */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateSapTableResourceDatasetTypePropertiesFormGroup() {
		return new FormGroup<SapTableResourceDatasetTypePropertiesFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** ServiceNow server dataset. */
	export interface ServiceNowObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** ServiceNow server dataset. */
	export interface ServiceNowObjectDatasetFormProperties {
	}
	export function CreateServiceNowObjectDatasetFormGroup() {
		return new FormGroup<ServiceNowObjectDatasetFormProperties>({
		});

	}


	/** The location of SFTP dataset. */
	export interface SftpLocation {
	}

	/** The location of SFTP dataset. */
	export interface SftpLocationFormProperties {
	}
	export function CreateSftpLocationFormGroup() {
		return new FormGroup<SftpLocationFormProperties>({
		});

	}


	/** Shopify Service dataset. */
	export interface ShopifyObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Shopify Service dataset. */
	export interface ShopifyObjectDatasetFormProperties {
	}
	export function CreateShopifyObjectDatasetFormGroup() {
		return new FormGroup<ShopifyObjectDatasetFormProperties>({
		});

	}


	/** Spark Properties */
	export interface SparkDatasetTypeProperties {

		/** The schema name of the Spark. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the Spark. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Spark Properties */
	export interface SparkDatasetTypePropertiesFormProperties {

		/** The schema name of the Spark. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the Spark. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateSparkDatasetTypePropertiesFormGroup() {
		return new FormGroup<SparkDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Spark Server dataset. */
	export interface SparkObjectDataset {

		/** Spark Properties */
		typeProperties?: SparkDatasetTypeProperties;
	}

	/** Spark Server dataset. */
	export interface SparkObjectDatasetFormProperties {
	}
	export function CreateSparkObjectDatasetFormGroup() {
		return new FormGroup<SparkObjectDatasetFormProperties>({
		});

	}


	/** The on-premises SQL Server dataset. */
	export interface SqlServerTableDataset {

		/** On-premises SQL Server dataset properties. */
		typeProperties?: SqlServerTableDatasetTypeProperties;
	}

	/** The on-premises SQL Server dataset. */
	export interface SqlServerTableDatasetFormProperties {
	}
	export function CreateSqlServerTableDatasetFormGroup() {
		return new FormGroup<SqlServerTableDatasetFormProperties>({
		});

	}


	/** On-premises SQL Server dataset properties. */
	export interface SqlServerTableDatasetTypeProperties {

		/** The schema name of the SQL Server dataset. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the SQL Server dataset. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** On-premises SQL Server dataset properties. */
	export interface SqlServerTableDatasetTypePropertiesFormProperties {

		/** The schema name of the SQL Server dataset. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the SQL Server dataset. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateSqlServerTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<SqlServerTableDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Square Service dataset. */
	export interface SquareObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Square Service dataset. */
	export interface SquareObjectDatasetFormProperties {
	}
	export function CreateSquareObjectDatasetFormGroup() {
		return new FormGroup<SquareObjectDatasetFormProperties>({
		});

	}


	/** The Sybase table dataset. */
	export interface SybaseTableDataset {

		/** Sybase table dataset properties. */
		typeProperties?: SybaseTableDatasetTypeProperties;
	}

	/** The Sybase table dataset. */
	export interface SybaseTableDatasetFormProperties {
	}
	export function CreateSybaseTableDatasetFormGroup() {
		return new FormGroup<SybaseTableDatasetFormProperties>({
		});

	}


	/** Sybase table dataset properties. */
	export interface SybaseTableDatasetTypeProperties {

		/** The Sybase table name. Type: string (or Expression with resultType string). */
		tableName?: string | null;
	}

	/** Sybase table dataset properties. */
	export interface SybaseTableDatasetTypePropertiesFormProperties {

		/** The Sybase table name. Type: string (or Expression with resultType string). */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateSybaseTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<SybaseTableDatasetTypePropertiesFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Teradata database dataset. */
	export interface TeradataTableDataset {

		/** Teradata dataset properties. */
		typeProperties?: TeradataTableDatasetTypeProperties;
	}

	/** The Teradata database dataset. */
	export interface TeradataTableDatasetFormProperties {
	}
	export function CreateTeradataTableDatasetFormGroup() {
		return new FormGroup<TeradataTableDatasetFormProperties>({
		});

	}


	/** Teradata dataset properties. */
	export interface TeradataTableDatasetTypeProperties {

		/** The database name of Teradata. Type: string (or Expression with resultType string). */
		database?: string | null;

		/** The table name of Teradata. Type: string (or Expression with resultType string). */
		table?: string | null;
	}

	/** Teradata dataset properties. */
	export interface TeradataTableDatasetTypePropertiesFormProperties {

		/** The database name of Teradata. Type: string (or Expression with resultType string). */
		database: FormControl<string | null | undefined>,

		/** The table name of Teradata. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,
	}
	export function CreateTeradataTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<TeradataTableDatasetTypePropertiesFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data stored in text format. */
	export interface TextFormat {

		/** The column delimiter. Type: string (or Expression with resultType string). */
		columnDelimiter?: string | null;

		/** The code page name of the preferred encoding. If miss, the default value is ΓÇ£utf-8ΓÇ¥, unless BOM denotes another Unicode encoding. Refer to the ΓÇ£NameΓÇ¥ column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
		encodingName?: string | null;

		/** The escape character. Type: string (or Expression with resultType string). */
		escapeChar?: string | null;

		/** When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). */
		firstRowAsHeader?: string | null;

		/** The null value string. Type: string (or Expression with resultType string). */
		nullValue?: string | null;

		/** The quote character. Type: string (or Expression with resultType string). */
		quoteChar?: string | null;

		/** The row delimiter. Type: string (or Expression with resultType string). */
		rowDelimiter?: string | null;

		/** The number of lines/rows to be skipped when parsing text files. The default value is 0. Type: integer (or Expression with resultType integer). */
		skipLineCount?: string | null;

		/** Treat empty column values in the text file as null. The default value is true. Type: boolean (or Expression with resultType boolean). */
		treatEmptyAsNull?: string | null;
	}

	/** The data stored in text format. */
	export interface TextFormatFormProperties {

		/** The column delimiter. Type: string (or Expression with resultType string). */
		columnDelimiter: FormControl<string | null | undefined>,

		/** The code page name of the preferred encoding. If miss, the default value is ΓÇ£utf-8ΓÇ¥, unless BOM denotes another Unicode encoding. Refer to the ΓÇ£NameΓÇ¥ column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
		encodingName: FormControl<string | null | undefined>,

		/** The escape character. Type: string (or Expression with resultType string). */
		escapeChar: FormControl<string | null | undefined>,

		/** When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). */
		firstRowAsHeader: FormControl<string | null | undefined>,

		/** The null value string. Type: string (or Expression with resultType string). */
		nullValue: FormControl<string | null | undefined>,

		/** The quote character. Type: string (or Expression with resultType string). */
		quoteChar: FormControl<string | null | undefined>,

		/** The row delimiter. Type: string (or Expression with resultType string). */
		rowDelimiter: FormControl<string | null | undefined>,

		/** The number of lines/rows to be skipped when parsing text files. The default value is 0. Type: integer (or Expression with resultType integer). */
		skipLineCount: FormControl<string | null | undefined>,

		/** Treat empty column values in the text file as null. The default value is true. Type: boolean (or Expression with resultType boolean). */
		treatEmptyAsNull: FormControl<string | null | undefined>,
	}
	export function CreateTextFormatFormGroup() {
		return new FormGroup<TextFormatFormProperties>({
			columnDelimiter: new FormControl<string | null | undefined>(undefined),
			encodingName: new FormControl<string | null | undefined>(undefined),
			escapeChar: new FormControl<string | null | undefined>(undefined),
			firstRowAsHeader: new FormControl<string | null | undefined>(undefined),
			nullValue: new FormControl<string | null | undefined>(undefined),
			quoteChar: new FormControl<string | null | undefined>(undefined),
			rowDelimiter: new FormControl<string | null | undefined>(undefined),
			skipLineCount: new FormControl<string | null | undefined>(undefined),
			treatEmptyAsNull: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Vertica Properties */
	export interface VerticaDatasetTypeProperties {

		/** The schema name of the Vertica. Type: string (or Expression with resultType string). */
		schema?: string | null;

		/** The table name of the Vertica. Type: string (or Expression with resultType string). */
		table?: string | null;

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName?: string | null;
	}

	/** Vertica Properties */
	export interface VerticaDatasetTypePropertiesFormProperties {

		/** The schema name of the Vertica. Type: string (or Expression with resultType string). */
		schema: FormControl<string | null | undefined>,

		/** The table name of the Vertica. Type: string (or Expression with resultType string). */
		table: FormControl<string | null | undefined>,

		/** This property will be retired. Please consider using schema + table properties instead. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateVerticaDatasetTypePropertiesFormGroup() {
		return new FormGroup<VerticaDatasetTypePropertiesFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Vertica dataset. */
	export interface VerticaTableDataset {

		/** Vertica Properties */
		typeProperties?: VerticaDatasetTypeProperties;
	}

	/** Vertica dataset. */
	export interface VerticaTableDatasetFormProperties {
	}
	export function CreateVerticaTableDatasetFormGroup() {
		return new FormGroup<VerticaTableDatasetFormProperties>({
		});

	}


	/** The dataset points to a HTML table in the web page. */
	export interface WebTableDataset {

		/**
		 * Web table dataset properties.
		 * Required
		 */
		typeProperties: WebTableDatasetTypeProperties;
	}

	/** The dataset points to a HTML table in the web page. */
	export interface WebTableDatasetFormProperties {
	}
	export function CreateWebTableDatasetFormGroup() {
		return new FormGroup<WebTableDatasetFormProperties>({
		});

	}


	/** Web table dataset properties. */
	export interface WebTableDatasetTypeProperties {

		/**
		 * The zero-based index of the table in the web page. Type: integer (or Expression with resultType integer), minimum: 0.
		 * Required
		 */
		index: string;

		/** The relative URL to the web page from the linked service URL. Type: string (or Expression with resultType string). */
		path?: string | null;
	}

	/** Web table dataset properties. */
	export interface WebTableDatasetTypePropertiesFormProperties {

		/**
		 * The zero-based index of the table in the web page. Type: integer (or Expression with resultType integer), minimum: 0.
		 * Required
		 */
		index: FormControl<string | null | undefined>,

		/** The relative URL to the web page from the linked service URL. Type: string (or Expression with resultType string). */
		path: FormControl<string | null | undefined>,
	}
	export function CreateWebTableDatasetTypePropertiesFormGroup() {
		return new FormGroup<WebTableDatasetTypePropertiesFormProperties>({
			index: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Xero Service dataset. */
	export interface XeroObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Xero Service dataset. */
	export interface XeroObjectDatasetFormProperties {
	}
	export function CreateXeroObjectDatasetFormGroup() {
		return new FormGroup<XeroObjectDatasetFormProperties>({
		});

	}


	/** Zoho server dataset. */
	export interface ZohoObjectDataset {

		/** Properties specific to this dataset type. */
		typeProperties?: GenericDatasetTypeProperties;
	}

	/** Zoho server dataset. */
	export interface ZohoObjectDatasetFormProperties {
	}
	export function CreateZohoObjectDatasetFormGroup() {
		return new FormGroup<ZohoObjectDatasetFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

