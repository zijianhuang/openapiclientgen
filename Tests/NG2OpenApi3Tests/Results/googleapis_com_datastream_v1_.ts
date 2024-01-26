import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** AVRO file format configuration. */
	export interface AvroFileFormat {
	}

	/** AVRO file format configuration. */
	export interface AvroFileFormatFormProperties {
	}
	export function CreateAvroFileFormatFormGroup() {
		return new FormGroup<AvroFileFormatFormProperties>({
		});

	}


	/** Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded. */
	export interface BackfillAllStrategy {

		/** MySQL database structure */
		mysqlExcludedObjects?: MysqlRdbms;

		/** Oracle database structure. */
		oracleExcludedObjects?: OracleRdbms;

		/** PostgreSQL database structure. */
		postgresqlExcludedObjects?: PostgresqlRdbms;
	}

	/** Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded. */
	export interface BackfillAllStrategyFormProperties {
	}
	export function CreateBackfillAllStrategyFormGroup() {
		return new FormGroup<BackfillAllStrategyFormProperties>({
		});

	}


	/** MySQL database structure */
	export interface MysqlRdbms {

		/** Mysql databases on the server */
		mysqlDatabases?: Array<MysqlDatabase>;
	}

	/** MySQL database structure */
	export interface MysqlRdbmsFormProperties {
	}
	export function CreateMysqlRdbmsFormGroup() {
		return new FormGroup<MysqlRdbmsFormProperties>({
		});

	}


	/** MySQL database. */
	export interface MysqlDatabase {

		/** Database name. */
		database?: string | null;

		/** Tables in the database. */
		mysqlTables?: Array<MysqlTable>;
	}

	/** MySQL database. */
	export interface MysqlDatabaseFormProperties {

		/** Database name. */
		database: FormControl<string | null | undefined>,
	}
	export function CreateMysqlDatabaseFormGroup() {
		return new FormGroup<MysqlDatabaseFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MySQL table. */
	export interface MysqlTable {

		/** MySQL columns in the database. When unspecified as part of include/exclude objects, includes/excludes everything. */
		mysqlColumns?: Array<MysqlColumn>;

		/** Table name. */
		table?: string | null;
	}

	/** MySQL table. */
	export interface MysqlTableFormProperties {

		/** Table name. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateMysqlTableFormGroup() {
		return new FormGroup<MysqlTableFormProperties>({
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MySQL Column. */
	export interface MysqlColumn {

		/** Column collation. */
		collation?: string | null;

		/** Column name. */
		column?: string | null;

		/** The MySQL data type. Full data types list can be found here: https://dev.mysql.com/doc/refman/8.0/en/data-types.html */
		dataType?: string | null;

		/** Column length. */
		length?: number | null;

		/** Whether or not the column can accept a null value. */
		nullable?: boolean | null;

		/** The ordinal position of the column in the table. */
		ordinalPosition?: number | null;

		/** Column precision. */
		precision?: number | null;

		/** Whether or not the column represents a primary key. */
		primaryKey?: boolean | null;

		/** Column scale. */
		scale?: number | null;
	}

	/** MySQL Column. */
	export interface MysqlColumnFormProperties {

		/** Column collation. */
		collation: FormControl<string | null | undefined>,

		/** Column name. */
		column: FormControl<string | null | undefined>,

		/** The MySQL data type. Full data types list can be found here: https://dev.mysql.com/doc/refman/8.0/en/data-types.html */
		dataType: FormControl<string | null | undefined>,

		/** Column length. */
		length: FormControl<number | null | undefined>,

		/** Whether or not the column can accept a null value. */
		nullable: FormControl<boolean | null | undefined>,

		/** The ordinal position of the column in the table. */
		ordinalPosition: FormControl<number | null | undefined>,

		/** Column precision. */
		precision: FormControl<number | null | undefined>,

		/** Whether or not the column represents a primary key. */
		primaryKey: FormControl<boolean | null | undefined>,

		/** Column scale. */
		scale: FormControl<number | null | undefined>,
	}
	export function CreateMysqlColumnFormGroup() {
		return new FormGroup<MysqlColumnFormProperties>({
			collation: new FormControl<string | null | undefined>(undefined),
			column: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			nullable: new FormControl<boolean | null | undefined>(undefined),
			ordinalPosition: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			primaryKey: new FormControl<boolean | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Oracle database structure. */
	export interface OracleRdbms {

		/** Oracle schemas/databases in the database server. */
		oracleSchemas?: Array<OracleSchema>;
	}

	/** Oracle database structure. */
	export interface OracleRdbmsFormProperties {
	}
	export function CreateOracleRdbmsFormGroup() {
		return new FormGroup<OracleRdbmsFormProperties>({
		});

	}


	/** Oracle schema. */
	export interface OracleSchema {

		/** Tables in the schema. */
		oracleTables?: Array<OracleTable>;

		/** Schema name. */
		schema?: string | null;
	}

	/** Oracle schema. */
	export interface OracleSchemaFormProperties {

		/** Schema name. */
		schema: FormControl<string | null | undefined>,
	}
	export function CreateOracleSchemaFormGroup() {
		return new FormGroup<OracleSchemaFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Oracle table. */
	export interface OracleTable {

		/** Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything. */
		oracleColumns?: Array<OracleColumn>;

		/** Table name. */
		table?: string | null;
	}

	/** Oracle table. */
	export interface OracleTableFormProperties {

		/** Table name. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateOracleTableFormGroup() {
		return new FormGroup<OracleTableFormProperties>({
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Oracle Column. */
	export interface OracleColumn {

		/** Column name. */
		column?: string | null;

		/** The Oracle data type. */
		dataType?: string | null;

		/** Column encoding. */
		encoding?: string | null;

		/** Column length. */
		length?: number | null;

		/** Whether or not the column can accept a null value. */
		nullable?: boolean | null;

		/** The ordinal position of the column in the table. */
		ordinalPosition?: number | null;

		/** Column precision. */
		precision?: number | null;

		/** Whether or not the column represents a primary key. */
		primaryKey?: boolean | null;

		/** Column scale. */
		scale?: number | null;
	}

	/** Oracle Column. */
	export interface OracleColumnFormProperties {

		/** Column name. */
		column: FormControl<string | null | undefined>,

		/** The Oracle data type. */
		dataType: FormControl<string | null | undefined>,

		/** Column encoding. */
		encoding: FormControl<string | null | undefined>,

		/** Column length. */
		length: FormControl<number | null | undefined>,

		/** Whether or not the column can accept a null value. */
		nullable: FormControl<boolean | null | undefined>,

		/** The ordinal position of the column in the table. */
		ordinalPosition: FormControl<number | null | undefined>,

		/** Column precision. */
		precision: FormControl<number | null | undefined>,

		/** Whether or not the column represents a primary key. */
		primaryKey: FormControl<boolean | null | undefined>,

		/** Column scale. */
		scale: FormControl<number | null | undefined>,
	}
	export function CreateOracleColumnFormGroup() {
		return new FormGroup<OracleColumnFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			nullable: new FormControl<boolean | null | undefined>(undefined),
			ordinalPosition: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			primaryKey: new FormControl<boolean | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** PostgreSQL database structure. */
	export interface PostgresqlRdbms {

		/** PostgreSQL schemas in the database server. */
		postgresqlSchemas?: Array<PostgresqlSchema>;
	}

	/** PostgreSQL database structure. */
	export interface PostgresqlRdbmsFormProperties {
	}
	export function CreatePostgresqlRdbmsFormGroup() {
		return new FormGroup<PostgresqlRdbmsFormProperties>({
		});

	}


	/** PostgreSQL schema. */
	export interface PostgresqlSchema {

		/** Tables in the schema. */
		postgresqlTables?: Array<PostgresqlTable>;

		/** Schema name. */
		schema?: string | null;
	}

	/** PostgreSQL schema. */
	export interface PostgresqlSchemaFormProperties {

		/** Schema name. */
		schema: FormControl<string | null | undefined>,
	}
	export function CreatePostgresqlSchemaFormGroup() {
		return new FormGroup<PostgresqlSchemaFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PostgreSQL table. */
	export interface PostgresqlTable {

		/** PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything. */
		postgresqlColumns?: Array<PostgresqlColumn>;

		/** Table name. */
		table?: string | null;
	}

	/** PostgreSQL table. */
	export interface PostgresqlTableFormProperties {

		/** Table name. */
		table: FormControl<string | null | undefined>,
	}
	export function CreatePostgresqlTableFormGroup() {
		return new FormGroup<PostgresqlTableFormProperties>({
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PostgreSQL Column. */
	export interface PostgresqlColumn {

		/** Column name. */
		column?: string | null;

		/** The PostgreSQL data type. */
		dataType?: string | null;

		/** Column length. */
		length?: number | null;

		/** Whether or not the column can accept a null value. */
		nullable?: boolean | null;

		/** The ordinal position of the column in the table. */
		ordinalPosition?: number | null;

		/** Column precision. */
		precision?: number | null;

		/** Whether or not the column represents a primary key. */
		primaryKey?: boolean | null;

		/** Column scale. */
		scale?: number | null;
	}

	/** PostgreSQL Column. */
	export interface PostgresqlColumnFormProperties {

		/** Column name. */
		column: FormControl<string | null | undefined>,

		/** The PostgreSQL data type. */
		dataType: FormControl<string | null | undefined>,

		/** Column length. */
		length: FormControl<number | null | undefined>,

		/** Whether or not the column can accept a null value. */
		nullable: FormControl<boolean | null | undefined>,

		/** The ordinal position of the column in the table. */
		ordinalPosition: FormControl<number | null | undefined>,

		/** Column precision. */
		precision: FormControl<number | null | undefined>,

		/** Whether or not the column represents a primary key. */
		primaryKey: FormControl<boolean | null | undefined>,

		/** Column scale. */
		scale: FormControl<number | null | undefined>,
	}
	export function CreatePostgresqlColumnFormGroup() {
		return new FormGroup<PostgresqlColumnFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			nullable: new FormControl<boolean | null | undefined>(undefined),
			ordinalPosition: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			primaryKey: new FormControl<boolean | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a backfill job on a specific stream object. */
	export interface BackfillJob {

		/** Output only. Errors which caused the backfill job to fail. */
		errors?: Array<Error>;

		/** Output only. Backfill job's end time. */
		lastEndTime?: string | null;

		/** Output only. Backfill job's start time. */
		lastStartTime?: string | null;

		/** Output only. Backfill job state. */
		state?: BackfillJobState | null;

		/** Backfill job's triggering reason. */
		trigger?: BackfillJobTrigger | null;
	}

	/** Represents a backfill job on a specific stream object. */
	export interface BackfillJobFormProperties {

		/** Output only. Backfill job's end time. */
		lastEndTime: FormControl<string | null | undefined>,

		/** Output only. Backfill job's start time. */
		lastStartTime: FormControl<string | null | undefined>,

		/** Output only. Backfill job state. */
		state: FormControl<BackfillJobState | null | undefined>,

		/** Backfill job's triggering reason. */
		trigger: FormControl<BackfillJobTrigger | null | undefined>,
	}
	export function CreateBackfillJobFormGroup() {
		return new FormGroup<BackfillJobFormProperties>({
			lastEndTime: new FormControl<string | null | undefined>(undefined),
			lastStartTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BackfillJobState | null | undefined>(undefined),
			trigger: new FormControl<BackfillJobTrigger | null | undefined>(undefined),
		});

	}


	/** Represent a user-facing Error. */
	export interface Error {

		/** Additional information about the error. */
		details?: {[id: string]: string };

		/** The time when the error occurred. */
		errorTime?: string | null;

		/** A unique identifier for this specific error, allowing it to be traced throughout the system in logs and API responses. */
		errorUuid?: string | null;

		/** A message containing more information about the error that occurred. */
		message?: string | null;

		/** A title that explains the reason for the error. */
		reason?: string | null;
	}

	/** Represent a user-facing Error. */
	export interface ErrorFormProperties {

		/** Additional information about the error. */
		details: FormControl<{[id: string]: string } | null | undefined>,

		/** The time when the error occurred. */
		errorTime: FormControl<string | null | undefined>,

		/** A unique identifier for this specific error, allowing it to be traced throughout the system in logs and API responses. */
		errorUuid: FormControl<string | null | undefined>,

		/** A message containing more information about the error that occurred. */
		message: FormControl<string | null | undefined>,

		/** A title that explains the reason for the error. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			details: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			errorTime: new FormControl<string | null | undefined>(undefined),
			errorUuid: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackfillJobState { STATE_UNSPECIFIED = 0, NOT_STARTED = 1, PENDING = 2, ACTIVE = 3, STOPPED = 4, FAILED = 5, COMPLETED = 6, UNSUPPORTED = 7 }

	export enum BackfillJobTrigger { TRIGGER_UNSPECIFIED = 0, AUTOMATIC = 1, MANUAL = 2 }


	/** Backfill strategy to disable automatic backfill for the Stream's objects. */
	export interface BackfillNoneStrategy {
	}

	/** Backfill strategy to disable automatic backfill for the Stream's objects. */
	export interface BackfillNoneStrategyFormProperties {
	}
	export function CreateBackfillNoneStrategyFormGroup() {
		return new FormGroup<BackfillNoneStrategyFormProperties>({
		});

	}


	/** BigQuery destination configuration */
	export interface BigQueryDestinationConfig {

		/** The guaranteed data freshness (in seconds) when querying tables created by the stream. Editing this field will only affect new tables created in the future, but existing tables will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost. */
		dataFreshness?: string | null;

		/** A single target dataset to which all data will be streamed. */
		singleTargetDataset?: SingleTargetDataset;

		/** Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy. */
		sourceHierarchyDatasets?: SourceHierarchyDatasets;
	}

	/** BigQuery destination configuration */
	export interface BigQueryDestinationConfigFormProperties {

		/** The guaranteed data freshness (in seconds) when querying tables created by the stream. Editing this field will only affect new tables created in the future, but existing tables will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost. */
		dataFreshness: FormControl<string | null | undefined>,
	}
	export function CreateBigQueryDestinationConfigFormGroup() {
		return new FormGroup<BigQueryDestinationConfigFormProperties>({
			dataFreshness: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single target dataset to which all data will be streamed. */
	export interface SingleTargetDataset {

		/** The dataset ID of the target dataset. DatasetIds allowed characters: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#datasetreference. */
		datasetId?: string | null;
	}

	/** A single target dataset to which all data will be streamed. */
	export interface SingleTargetDatasetFormProperties {

		/** The dataset ID of the target dataset. DatasetIds allowed characters: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#datasetreference. */
		datasetId: FormControl<string | null | undefined>,
	}
	export function CreateSingleTargetDatasetFormGroup() {
		return new FormGroup<SingleTargetDatasetFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy. */
	export interface SourceHierarchyDatasets {

		/** Dataset template used for dynamic dataset creation. */
		datasetTemplate?: DatasetTemplate;
	}

	/** Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy. */
	export interface SourceHierarchyDatasetsFormProperties {
	}
	export function CreateSourceHierarchyDatasetsFormGroup() {
		return new FormGroup<SourceHierarchyDatasetsFormProperties>({
		});

	}


	/** Dataset template used for dynamic dataset creation. */
	export interface DatasetTemplate {

		/** If supplied, every created dataset will have its name prefixed by the provided value. The prefix and name will be separated by an underscore. i.e. _. */
		datasetIdPrefix?: string | null;

		/** Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}. See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information. */
		kmsKeyName?: string | null;

		/** Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. */
		location?: string | null;
	}

	/** Dataset template used for dynamic dataset creation. */
	export interface DatasetTemplateFormProperties {

		/** If supplied, every created dataset will have its name prefixed by the provided value. The prefix and name will be separated by an underscore. i.e. _. */
		datasetIdPrefix: FormControl<string | null | undefined>,

		/** Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}. See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information. */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateDatasetTemplateFormGroup() {
		return new FormGroup<DatasetTemplateFormProperties>({
			datasetIdPrefix: new FormControl<string | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BigQuery warehouse profile. */
	export interface BigQueryProfile {
	}

	/** BigQuery warehouse profile. */
	export interface BigQueryProfileFormProperties {
	}
	export function CreateBigQueryProfileFormGroup() {
		return new FormGroup<BigQueryProfileFormProperties>({
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** The strategy that the stream uses for CDC replication. */
	export interface CdcStrategy {

		/** CDC strategy to start replicating from the most recent position in the source. */
		mostRecentStartPosition?: MostRecentStartPosition;

		/** CDC strategy to resume replication from the next available position in the source. */
		nextAvailableStartPosition?: NextAvailableStartPosition;

		/** CDC strategy to start replicating from a specific position in the source. */
		specificStartPosition?: SpecificStartPosition;
	}

	/** The strategy that the stream uses for CDC replication. */
	export interface CdcStrategyFormProperties {
	}
	export function CreateCdcStrategyFormGroup() {
		return new FormGroup<CdcStrategyFormProperties>({
		});

	}


	/** CDC strategy to start replicating from the most recent position in the source. */
	export interface MostRecentStartPosition {
	}

	/** CDC strategy to start replicating from the most recent position in the source. */
	export interface MostRecentStartPositionFormProperties {
	}
	export function CreateMostRecentStartPositionFormGroup() {
		return new FormGroup<MostRecentStartPositionFormProperties>({
		});

	}


	/** CDC strategy to resume replication from the next available position in the source. */
	export interface NextAvailableStartPosition {
	}

	/** CDC strategy to resume replication from the next available position in the source. */
	export interface NextAvailableStartPositionFormProperties {
	}
	export function CreateNextAvailableStartPositionFormGroup() {
		return new FormGroup<NextAvailableStartPositionFormProperties>({
		});

	}


	/** CDC strategy to start replicating from a specific position in the source. */
	export interface SpecificStartPosition {

		/** MySQL log position */
		mysqlLogPosition?: MysqlLogPosition;
	}

	/** CDC strategy to start replicating from a specific position in the source. */
	export interface SpecificStartPositionFormProperties {
	}
	export function CreateSpecificStartPositionFormGroup() {
		return new FormGroup<SpecificStartPositionFormProperties>({
		});

	}


	/** MySQL log position */
	export interface MysqlLogPosition {

		/** Required. The binary log file name. */
		logFile?: string | null;

		/** Optional. The position within the binary log file. Default is head of file. */
		logPosition?: number | null;
	}

	/** MySQL log position */
	export interface MysqlLogPositionFormProperties {

		/** Required. The binary log file name. */
		logFile: FormControl<string | null | undefined>,

		/** Optional. The position within the binary log file. Default is head of file. */
		logPosition: FormControl<number | null | undefined>,
	}
	export function CreateMysqlLogPositionFormGroup() {
		return new FormGroup<MysqlLogPositionFormProperties>({
			logFile: new FormControl<string | null | undefined>(undefined),
			logPosition: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A set of reusable connection configurations to be used as a source or destination for a stream. */
	export interface ConnectionProfile {

		/** BigQuery warehouse profile. */
		bigqueryProfile?: BigQueryProfile;

		/** Output only. The create time of the resource. */
		createTime?: string | null;

		/** Required. Display name. */
		displayName?: string | null;

		/** Forward SSH Tunnel connectivity. */
		forwardSshConnectivity?: ForwardSshTunnelConnectivity;

		/** Cloud Storage bucket profile. */
		gcsProfile?: GcsProfile;

		/** Labels. */
		labels?: {[id: string]: string };

		/** MySQL database profile. */
		mysqlProfile?: MysqlProfile;

		/** Output only. The resource's name. */
		name?: string | null;

		/** Oracle database profile. */
		oracleProfile?: OracleProfile;

		/** PostgreSQL database profile. */
		postgresqlProfile?: PostgresqlProfile;

		/** Private Connectivity */
		privateConnectivity?: PrivateConnectivity;

		/** Static IP address connectivity. Used when the source database is configured to allow incoming connections from the Datastream public IP addresses for the region specified in the connection profile. */
		staticServiceIpConnectivity?: StaticServiceIpConnectivity;

		/** Output only. The update time of the resource. */
		updateTime?: string | null;
	}

	/** A set of reusable connection configurations to be used as a source or destination for a stream. */
	export interface ConnectionProfileFormProperties {

		/** Output only. The create time of the resource. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Display name. */
		displayName: FormControl<string | null | undefined>,

		/** Labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The resource's name. */
		name: FormControl<string | null | undefined>,

		/** Output only. The update time of the resource. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateConnectionProfileFormGroup() {
		return new FormGroup<ConnectionProfileFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Forward SSH Tunnel connectivity. */
	export interface ForwardSshTunnelConnectivity {

		/** Required. Hostname for the SSH tunnel. */
		hostname?: string | null;

		/** Input only. SSH password. */
		password?: string | null;

		/** Port for the SSH tunnel, default value is 22. */
		port?: number | null;

		/** Input only. SSH private key. */
		privateKey?: string | null;

		/** Required. Username for the SSH tunnel. */
		username?: string | null;
	}

	/** Forward SSH Tunnel connectivity. */
	export interface ForwardSshTunnelConnectivityFormProperties {

		/** Required. Hostname for the SSH tunnel. */
		hostname: FormControl<string | null | undefined>,

		/** Input only. SSH password. */
		password: FormControl<string | null | undefined>,

		/** Port for the SSH tunnel, default value is 22. */
		port: FormControl<number | null | undefined>,

		/** Input only. SSH private key. */
		privateKey: FormControl<string | null | undefined>,

		/** Required. Username for the SSH tunnel. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateForwardSshTunnelConnectivityFormGroup() {
		return new FormGroup<ForwardSshTunnelConnectivityFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			privateKey: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cloud Storage bucket profile. */
	export interface GcsProfile {

		/** Required. The Cloud Storage bucket name. */
		bucket?: string | null;

		/** The root path inside the Cloud Storage bucket. */
		rootPath?: string | null;
	}

	/** Cloud Storage bucket profile. */
	export interface GcsProfileFormProperties {

		/** Required. The Cloud Storage bucket name. */
		bucket: FormControl<string | null | undefined>,

		/** The root path inside the Cloud Storage bucket. */
		rootPath: FormControl<string | null | undefined>,
	}
	export function CreateGcsProfileFormGroup() {
		return new FormGroup<GcsProfileFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			rootPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MySQL database profile. */
	export interface MysqlProfile {

		/** Required. Hostname for the MySQL connection. */
		hostname?: string | null;

		/** Required. Input only. Password for the MySQL connection. */
		password?: string | null;

		/** Port for the MySQL connection, default value is 3306. */
		port?: number | null;

		/** MySQL SSL configuration information. */
		sslConfig?: MysqlSslConfig;

		/** Required. Username for the MySQL connection. */
		username?: string | null;
	}

	/** MySQL database profile. */
	export interface MysqlProfileFormProperties {

		/** Required. Hostname for the MySQL connection. */
		hostname: FormControl<string | null | undefined>,

		/** Required. Input only. Password for the MySQL connection. */
		password: FormControl<string | null | undefined>,

		/** Port for the MySQL connection, default value is 3306. */
		port: FormControl<number | null | undefined>,

		/** Required. Username for the MySQL connection. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateMysqlProfileFormGroup() {
		return new FormGroup<MysqlProfileFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MySQL SSL configuration information. */
	export interface MysqlSslConfig {

		/** Input only. PEM-encoded certificate of the CA that signed the source database server's certificate. */
		caCertificate?: string | null;

		/** Output only. Indicates whether the ca_certificate field is set. */
		caCertificateSet?: boolean | null;

		/** Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory. */
		clientCertificate?: string | null;

		/** Output only. Indicates whether the client_certificate field is set. */
		clientCertificateSet?: boolean | null;

		/** Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory. */
		clientKey?: string | null;

		/** Output only. Indicates whether the client_key field is set. */
		clientKeySet?: boolean | null;
	}

	/** MySQL SSL configuration information. */
	export interface MysqlSslConfigFormProperties {

		/** Input only. PEM-encoded certificate of the CA that signed the source database server's certificate. */
		caCertificate: FormControl<string | null | undefined>,

		/** Output only. Indicates whether the ca_certificate field is set. */
		caCertificateSet: FormControl<boolean | null | undefined>,

		/** Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory. */
		clientCertificate: FormControl<string | null | undefined>,

		/** Output only. Indicates whether the client_certificate field is set. */
		clientCertificateSet: FormControl<boolean | null | undefined>,

		/** Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory. */
		clientKey: FormControl<string | null | undefined>,

		/** Output only. Indicates whether the client_key field is set. */
		clientKeySet: FormControl<boolean | null | undefined>,
	}
	export function CreateMysqlSslConfigFormGroup() {
		return new FormGroup<MysqlSslConfigFormProperties>({
			caCertificate: new FormControl<string | null | undefined>(undefined),
			caCertificateSet: new FormControl<boolean | null | undefined>(undefined),
			clientCertificate: new FormControl<string | null | undefined>(undefined),
			clientCertificateSet: new FormControl<boolean | null | undefined>(undefined),
			clientKey: new FormControl<string | null | undefined>(undefined),
			clientKeySet: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Oracle database profile. */
	export interface OracleProfile {

		/** Connection string attributes */
		connectionAttributes?: {[id: string]: string };

		/** Required. Database for the Oracle connection. */
		databaseService?: string | null;

		/** Required. Hostname for the Oracle connection. */
		hostname?: string | null;

		/** Oracle SSL configuration information. */
		oracleSslConfig?: OracleSslConfig;

		/** Required. Password for the Oracle connection. */
		password?: string | null;

		/** Port for the Oracle connection, default value is 1521. */
		port?: number | null;

		/** Required. Username for the Oracle connection. */
		username?: string | null;
	}

	/** Oracle database profile. */
	export interface OracleProfileFormProperties {

		/** Connection string attributes */
		connectionAttributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Database for the Oracle connection. */
		databaseService: FormControl<string | null | undefined>,

		/** Required. Hostname for the Oracle connection. */
		hostname: FormControl<string | null | undefined>,

		/** Required. Password for the Oracle connection. */
		password: FormControl<string | null | undefined>,

		/** Port for the Oracle connection, default value is 1521. */
		port: FormControl<number | null | undefined>,

		/** Required. Username for the Oracle connection. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateOracleProfileFormGroup() {
		return new FormGroup<OracleProfileFormProperties>({
			connectionAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			databaseService: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Oracle SSL configuration information. */
	export interface OracleSslConfig {

		/** Input only. PEM-encoded certificate of the CA that signed the source database server's certificate. */
		caCertificate?: string | null;

		/** Output only. Indicates whether the ca_certificate field has been set for this Connection-Profile. */
		caCertificateSet?: boolean | null;
	}

	/** Oracle SSL configuration information. */
	export interface OracleSslConfigFormProperties {

		/** Input only. PEM-encoded certificate of the CA that signed the source database server's certificate. */
		caCertificate: FormControl<string | null | undefined>,

		/** Output only. Indicates whether the ca_certificate field has been set for this Connection-Profile. */
		caCertificateSet: FormControl<boolean | null | undefined>,
	}
	export function CreateOracleSslConfigFormGroup() {
		return new FormGroup<OracleSslConfigFormProperties>({
			caCertificate: new FormControl<string | null | undefined>(undefined),
			caCertificateSet: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** PostgreSQL database profile. */
	export interface PostgresqlProfile {

		/** Required. Database for the PostgreSQL connection. */
		database?: string | null;

		/** Required. Hostname for the PostgreSQL connection. */
		hostname?: string | null;

		/** Required. Password for the PostgreSQL connection. */
		password?: string | null;

		/** Port for the PostgreSQL connection, default value is 5432. */
		port?: number | null;

		/** Required. Username for the PostgreSQL connection. */
		username?: string | null;
	}

	/** PostgreSQL database profile. */
	export interface PostgresqlProfileFormProperties {

		/** Required. Database for the PostgreSQL connection. */
		database: FormControl<string | null | undefined>,

		/** Required. Hostname for the PostgreSQL connection. */
		hostname: FormControl<string | null | undefined>,

		/** Required. Password for the PostgreSQL connection. */
		password: FormControl<string | null | undefined>,

		/** Port for the PostgreSQL connection, default value is 5432. */
		port: FormControl<number | null | undefined>,

		/** Required. Username for the PostgreSQL connection. */
		username: FormControl<string | null | undefined>,
	}
	export function CreatePostgresqlProfileFormGroup() {
		return new FormGroup<PostgresqlProfileFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Private Connectivity */
	export interface PrivateConnectivity {

		/** Required. A reference to a private connection resource. Format: `projects/{project}/locations/{location}/privateConnections/{name}` */
		privateConnection?: string | null;
	}

	/** Private Connectivity */
	export interface PrivateConnectivityFormProperties {

		/** Required. A reference to a private connection resource. Format: `projects/{project}/locations/{location}/privateConnections/{name}` */
		privateConnection: FormControl<string | null | undefined>,
	}
	export function CreatePrivateConnectivityFormGroup() {
		return new FormGroup<PrivateConnectivityFormProperties>({
			privateConnection: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Static IP address connectivity. Used when the source database is configured to allow incoming connections from the Datastream public IP addresses for the region specified in the connection profile. */
	export interface StaticServiceIpConnectivity {
	}

	/** Static IP address connectivity. Used when the source database is configured to allow incoming connections from the Datastream public IP addresses for the region specified in the connection profile. */
	export interface StaticServiceIpConnectivityFormProperties {
	}
	export function CreateStaticServiceIpConnectivityFormGroup() {
		return new FormGroup<StaticServiceIpConnectivityFormProperties>({
		});

	}


	/** The configuration of the stream destination. */
	export interface DestinationConfig {

		/** BigQuery destination configuration */
		bigqueryDestinationConfig?: BigQueryDestinationConfig;

		/** Required. Destination connection profile resource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}` */
		destinationConnectionProfile?: string | null;

		/** Google Cloud Storage destination configuration */
		gcsDestinationConfig?: GcsDestinationConfig;
	}

	/** The configuration of the stream destination. */
	export interface DestinationConfigFormProperties {

		/** Required. Destination connection profile resource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}` */
		destinationConnectionProfile: FormControl<string | null | undefined>,
	}
	export function CreateDestinationConfigFormGroup() {
		return new FormGroup<DestinationConfigFormProperties>({
			destinationConnectionProfile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google Cloud Storage destination configuration */
	export interface GcsDestinationConfig {

		/** AVRO file format configuration. */
		avroFileFormat?: AvroFileFormat;

		/** The maximum duration for which new events are added before a file is closed and a new file is created. Values within the range of 15-60 seconds are allowed. */
		fileRotationInterval?: string | null;

		/** The maximum file size to be saved in the bucket. */
		fileRotationMb?: number | null;

		/** JSON file format configuration. */
		jsonFileFormat?: JsonFileFormat;

		/** Path inside the Cloud Storage bucket to write data to. */
		path?: string | null;
	}

	/** Google Cloud Storage destination configuration */
	export interface GcsDestinationConfigFormProperties {

		/** The maximum duration for which new events are added before a file is closed and a new file is created. Values within the range of 15-60 seconds are allowed. */
		fileRotationInterval: FormControl<string | null | undefined>,

		/** The maximum file size to be saved in the bucket. */
		fileRotationMb: FormControl<number | null | undefined>,

		/** Path inside the Cloud Storage bucket to write data to. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateGcsDestinationConfigFormGroup() {
		return new FormGroup<GcsDestinationConfigFormProperties>({
			fileRotationInterval: new FormControl<string | null | undefined>(undefined),
			fileRotationMb: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON file format configuration. */
	export interface JsonFileFormat {

		/** Compression of the loaded JSON file. */
		compression?: JsonFileFormatCompression | null;

		/** The schema file format along JSON data files. */
		schemaFileFormat?: JsonFileFormatSchemaFileFormat | null;
	}

	/** JSON file format configuration. */
	export interface JsonFileFormatFormProperties {

		/** Compression of the loaded JSON file. */
		compression: FormControl<JsonFileFormatCompression | null | undefined>,

		/** The schema file format along JSON data files. */
		schemaFileFormat: FormControl<JsonFileFormatSchemaFileFormat | null | undefined>,
	}
	export function CreateJsonFileFormatFormGroup() {
		return new FormGroup<JsonFileFormatFormProperties>({
			compression: new FormControl<JsonFileFormatCompression | null | undefined>(undefined),
			schemaFileFormat: new FormControl<JsonFileFormatSchemaFileFormat | null | undefined>(undefined),
		});

	}

	export enum JsonFileFormatCompression { JSON_COMPRESSION_UNSPECIFIED = 0, NO_COMPRESSION = 1, GZIP = 2 }

	export enum JsonFileFormatSchemaFileFormat { SCHEMA_FILE_FORMAT_UNSPECIFIED = 0, NO_SCHEMA_FILE = 1, AVRO_SCHEMA_FILE = 2 }


	/** Request message for 'discover' ConnectionProfile request. */
	export interface DiscoverConnectionProfileRequest {

		/** A set of reusable connection configurations to be used as a source or destination for a stream. */
		connectionProfile?: ConnectionProfile;

		/** A reference to an existing connection profile. */
		connectionProfileName?: string | null;

		/** Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE). */
		fullHierarchy?: boolean | null;

		/** The number of hierarchy levels below the current level to be retrieved. */
		hierarchyDepth?: number | null;

		/** MySQL database structure */
		mysqlRdbms?: MysqlRdbms;

		/** Oracle database structure. */
		oracleRdbms?: OracleRdbms;

		/** PostgreSQL database structure. */
		postgresqlRdbms?: PostgresqlRdbms;
	}

	/** Request message for 'discover' ConnectionProfile request. */
	export interface DiscoverConnectionProfileRequestFormProperties {

		/** A reference to an existing connection profile. */
		connectionProfileName: FormControl<string | null | undefined>,

		/** Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE). */
		fullHierarchy: FormControl<boolean | null | undefined>,

		/** The number of hierarchy levels below the current level to be retrieved. */
		hierarchyDepth: FormControl<number | null | undefined>,
	}
	export function CreateDiscoverConnectionProfileRequestFormGroup() {
		return new FormGroup<DiscoverConnectionProfileRequestFormProperties>({
			connectionProfileName: new FormControl<string | null | undefined>(undefined),
			fullHierarchy: new FormControl<boolean | null | undefined>(undefined),
			hierarchyDepth: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response from a discover request. */
	export interface DiscoverConnectionProfileResponse {

		/** MySQL database structure */
		mysqlRdbms?: MysqlRdbms;

		/** Oracle database structure. */
		oracleRdbms?: OracleRdbms;

		/** PostgreSQL database structure. */
		postgresqlRdbms?: PostgresqlRdbms;
	}

	/** Response from a discover request. */
	export interface DiscoverConnectionProfileResponseFormProperties {
	}
	export function CreateDiscoverConnectionProfileResponseFormGroup() {
		return new FormGroup<DiscoverConnectionProfileResponseFormProperties>({
		});

	}


	/** Configuration to drop large object values. */
	export interface DropLargeObjects {
	}

	/** Configuration to drop large object values. */
	export interface DropLargeObjectsFormProperties {
	}
	export function CreateDropLargeObjectsFormGroup() {
		return new FormGroup<DropLargeObjectsFormProperties>({
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Response message for a 'FetchStaticIps' response. */
	export interface FetchStaticIpsResponse {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** list of static ips by account */
		staticIps?: Array<string>;
	}

	/** Response message for a 'FetchStaticIps' response. */
	export interface FetchStaticIpsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFetchStaticIpsResponseFormGroup() {
		return new FormGroup<FetchStaticIpsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing connection profiles. */
	export interface ListConnectionProfilesResponse {

		/** List of connection profiles. */
		connectionProfiles?: Array<ConnectionProfile>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for listing connection profiles. */
	export interface ListConnectionProfilesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionProfilesResponseFormGroup() {
		return new FormGroup<ListConnectionProfilesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing a list of private connection configurations. */
	export interface ListPrivateConnectionsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of private connectivity configurations. */
		privateConnections?: Array<PrivateConnection>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response containing a list of private connection configurations. */
	export interface ListPrivateConnectionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrivateConnectionsResponseFormGroup() {
		return new FormGroup<ListPrivateConnectionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. */
	export interface PrivateConnection {

		/** Output only. The create time of the resource. */
		createTime?: string | null;

		/** Required. Display name. */
		displayName?: string | null;

		/** Represent a user-facing Error. */
		error?: Error;

		/** Labels. */
		labels?: {[id: string]: string };

		/** Output only. The resource's name. */
		name?: string | null;

		/** Output only. The state of the Private Connection. */
		state?: PrivateConnectionState | null;

		/** Output only. The update time of the resource. */
		updateTime?: string | null;

		/** The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC. */
		vpcPeeringConfig?: VpcPeeringConfig;
	}

	/** The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. */
	export interface PrivateConnectionFormProperties {

		/** Output only. The create time of the resource. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Display name. */
		displayName: FormControl<string | null | undefined>,

		/** Labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The resource's name. */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the Private Connection. */
		state: FormControl<PrivateConnectionState | null | undefined>,

		/** Output only. The update time of the resource. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePrivateConnectionFormGroup() {
		return new FormGroup<PrivateConnectionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<PrivateConnectionState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PrivateConnectionState { STATE_UNSPECIFIED = 0, CREATING = 1, CREATED = 2, FAILED = 3, DELETING = 4, FAILED_TO_DELETE = 5 }


	/** The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC. */
	export interface VpcPeeringConfig {

		/** Required. A free subnet for peering. (CIDR of /29) */
		subnet?: string | null;

		/** Required. Fully qualified name of the VPC that Datastream will peer to. Format: `projects/{project}/global/{networks}/{name}` */
		vpc?: string | null;
	}

	/** The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC. */
	export interface VpcPeeringConfigFormProperties {

		/** Required. A free subnet for peering. (CIDR of /29) */
		subnet: FormControl<string | null | undefined>,

		/** Required. Fully qualified name of the VPC that Datastream will peer to. Format: `projects/{project}/global/{networks}/{name}` */
		vpc: FormControl<string | null | undefined>,
	}
	export function CreateVpcPeeringConfigFormGroup() {
		return new FormGroup<VpcPeeringConfigFormProperties>({
			subnet: new FormControl<string | null | undefined>(undefined),
			vpc: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Route list response. */
	export interface ListRoutesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of Routes. */
		routes?: Array<Route>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Route list response. */
	export interface ListRoutesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoutesResponseFormGroup() {
		return new FormGroup<ListRoutesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The route resource is the child of the private connection resource, used for defining a route for a private connection. */
	export interface Route {

		/** Output only. The create time of the resource. */
		createTime?: string | null;

		/** Required. Destination address for connection */
		destinationAddress?: string | null;

		/** Destination port for connection */
		destinationPort?: number | null;

		/** Required. Display name. */
		displayName?: string | null;

		/** Labels. */
		labels?: {[id: string]: string };

		/** Output only. The resource's name. */
		name?: string | null;

		/** Output only. The update time of the resource. */
		updateTime?: string | null;
	}

	/** The route resource is the child of the private connection resource, used for defining a route for a private connection. */
	export interface RouteFormProperties {

		/** Output only. The create time of the resource. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Destination address for connection */
		destinationAddress: FormControl<string | null | undefined>,

		/** Destination port for connection */
		destinationPort: FormControl<number | null | undefined>,

		/** Required. Display name. */
		displayName: FormControl<string | null | undefined>,

		/** Labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The resource's name. */
		name: FormControl<string | null | undefined>,

		/** Output only. The update time of the resource. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateRouteFormGroup() {
		return new FormGroup<RouteFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			destinationAddress: new FormControl<string | null | undefined>(undefined),
			destinationPort: new FormControl<number | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing the objects for a stream. */
	export interface ListStreamObjectsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. */
		nextPageToken?: string | null;

		/** List of stream objects. */
		streamObjects?: Array<StreamObject>;
	}

	/** Response containing the objects for a stream. */
	export interface ListStreamObjectsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamObjectsResponseFormGroup() {
		return new FormGroup<ListStreamObjectsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A specific stream object (e.g a specific DB table). */
	export interface StreamObject {

		/** Represents a backfill job on a specific stream object. */
		backfillJob?: BackfillJob;

		/** Output only. The creation time of the object. */
		createTime?: string | null;

		/** Required. Display name. */
		displayName?: string | null;

		/** Output only. Active errors on the object. */
		errors?: Array<Error>;

		/** Output only. The object resource's name. */
		name?: string | null;

		/** Represents an identifier of an object in the data source. */
		sourceObject?: SourceObjectIdentifier;

		/** Output only. The last update time of the object. */
		updateTime?: string | null;
	}

	/** A specific stream object (e.g a specific DB table). */
	export interface StreamObjectFormProperties {

		/** Output only. The creation time of the object. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Display name. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The object resource's name. */
		name: FormControl<string | null | undefined>,

		/** Output only. The last update time of the object. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateStreamObjectFormGroup() {
		return new FormGroup<StreamObjectFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an identifier of an object in the data source. */
	export interface SourceObjectIdentifier {

		/** Mysql data source object identifier. */
		mysqlIdentifier?: MysqlObjectIdentifier;

		/** Oracle data source object identifier. */
		oracleIdentifier?: OracleObjectIdentifier;

		/** PostgreSQL data source object identifier. */
		postgresqlIdentifier?: PostgresqlObjectIdentifier;
	}

	/** Represents an identifier of an object in the data source. */
	export interface SourceObjectIdentifierFormProperties {
	}
	export function CreateSourceObjectIdentifierFormGroup() {
		return new FormGroup<SourceObjectIdentifierFormProperties>({
		});

	}


	/** Mysql data source object identifier. */
	export interface MysqlObjectIdentifier {

		/** Required. The database name. */
		database?: string | null;

		/** Required. The table name. */
		table?: string | null;
	}

	/** Mysql data source object identifier. */
	export interface MysqlObjectIdentifierFormProperties {

		/** Required. The database name. */
		database: FormControl<string | null | undefined>,

		/** Required. The table name. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateMysqlObjectIdentifierFormGroup() {
		return new FormGroup<MysqlObjectIdentifierFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Oracle data source object identifier. */
	export interface OracleObjectIdentifier {

		/** Required. The schema name. */
		schema?: string | null;

		/** Required. The table name. */
		table?: string | null;
	}

	/** Oracle data source object identifier. */
	export interface OracleObjectIdentifierFormProperties {

		/** Required. The schema name. */
		schema: FormControl<string | null | undefined>,

		/** Required. The table name. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateOracleObjectIdentifierFormGroup() {
		return new FormGroup<OracleObjectIdentifierFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PostgreSQL data source object identifier. */
	export interface PostgresqlObjectIdentifier {

		/** Required. The schema name. */
		schema?: string | null;

		/** Required. The table name. */
		table?: string | null;
	}

	/** PostgreSQL data source object identifier. */
	export interface PostgresqlObjectIdentifierFormProperties {

		/** Required. The schema name. */
		schema: FormControl<string | null | undefined>,

		/** Required. The table name. */
		table: FormControl<string | null | undefined>,
	}
	export function CreatePostgresqlObjectIdentifierFormGroup() {
		return new FormGroup<PostgresqlObjectIdentifierFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing streams. */
	export interface ListStreamsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of streams */
		streams?: Array<Stream>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for listing streams. */
	export interface ListStreamsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsResponseFormGroup() {
		return new FormGroup<ListStreamsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource representing streaming data from a source to a destination. */
	export interface Stream {

		/** Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded. */
		backfillAll?: BackfillAllStrategy;

		/** Backfill strategy to disable automatic backfill for the Stream's objects. */
		backfillNone?: BackfillNoneStrategy;

		/** Output only. The creation time of the stream. */
		createTime?: string | null;

		/** Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS. */
		customerManagedEncryptionKey?: string | null;

		/** The configuration of the stream destination. */
		destinationConfig?: DestinationConfig;

		/** Required. Display name. */
		displayName?: string | null;

		/** Output only. Errors on the Stream. */
		errors?: Array<Error>;

		/** Labels. */
		labels?: {[id: string]: string };

		/** Output only. If the stream was recovered, the time of the last recovery. Note: This field is currently experimental. */
		lastRecoveryTime?: string | null;

		/** Output only. The stream's name. */
		name?: string | null;

		/** The configuration of the stream source. */
		sourceConfig?: SourceConfig;

		/** The state of the stream. */
		state?: StreamState | null;

		/** Output only. The last update time of the stream. */
		updateTime?: string | null;
	}

	/** A resource representing streaming data from a source to a destination. */
	export interface StreamFormProperties {

		/** Output only. The creation time of the stream. */
		createTime: FormControl<string | null | undefined>,

		/** Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS. */
		customerManagedEncryptionKey: FormControl<string | null | undefined>,

		/** Required. Display name. */
		displayName: FormControl<string | null | undefined>,

		/** Labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. If the stream was recovered, the time of the last recovery. Note: This field is currently experimental. */
		lastRecoveryTime: FormControl<string | null | undefined>,

		/** Output only. The stream's name. */
		name: FormControl<string | null | undefined>,

		/** The state of the stream. */
		state: FormControl<StreamState | null | undefined>,

		/** Output only. The last update time of the stream. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateStreamFormGroup() {
		return new FormGroup<StreamFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			customerManagedEncryptionKey: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lastRecoveryTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<StreamState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration of the stream source. */
	export interface SourceConfig {

		/** MySQL source configuration */
		mysqlSourceConfig?: MysqlSourceConfig;

		/** Oracle data source configuration */
		oracleSourceConfig?: OracleSourceConfig;

		/** PostgreSQL data source configuration */
		postgresqlSourceConfig?: PostgresqlSourceConfig;

		/** Required. Source connection profile resoource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}` */
		sourceConnectionProfile?: string | null;
	}

	/** The configuration of the stream source. */
	export interface SourceConfigFormProperties {

		/** Required. Source connection profile resoource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}` */
		sourceConnectionProfile: FormControl<string | null | undefined>,
	}
	export function CreateSourceConfigFormGroup() {
		return new FormGroup<SourceConfigFormProperties>({
			sourceConnectionProfile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MySQL source configuration */
	export interface MysqlSourceConfig {

		/** MySQL database structure */
		excludeObjects?: MysqlRdbms;

		/** MySQL database structure */
		includeObjects?: MysqlRdbms;

		/** Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used. */
		maxConcurrentBackfillTasks?: number | null;

		/** Maximum number of concurrent CDC tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used. */
		maxConcurrentCdcTasks?: number | null;
	}

	/** MySQL source configuration */
	export interface MysqlSourceConfigFormProperties {

		/** Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used. */
		maxConcurrentBackfillTasks: FormControl<number | null | undefined>,

		/** Maximum number of concurrent CDC tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used. */
		maxConcurrentCdcTasks: FormControl<number | null | undefined>,
	}
	export function CreateMysqlSourceConfigFormGroup() {
		return new FormGroup<MysqlSourceConfigFormProperties>({
			maxConcurrentBackfillTasks: new FormControl<number | null | undefined>(undefined),
			maxConcurrentCdcTasks: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Oracle data source configuration */
	export interface OracleSourceConfig {

		/** Configuration to drop large object values. */
		dropLargeObjects?: DropLargeObjects;

		/** Oracle database structure. */
		excludeObjects?: OracleRdbms;

		/** Oracle database structure. */
		includeObjects?: OracleRdbms;

		/** Maximum number of concurrent backfill tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used. */
		maxConcurrentBackfillTasks?: number | null;

		/** Maximum number of concurrent CDC tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used. */
		maxConcurrentCdcTasks?: number | null;

		/** Configuration to stream large object values. */
		streamLargeObjects?: StreamLargeObjects;
	}

	/** Oracle data source configuration */
	export interface OracleSourceConfigFormProperties {

		/** Maximum number of concurrent backfill tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used. */
		maxConcurrentBackfillTasks: FormControl<number | null | undefined>,

		/** Maximum number of concurrent CDC tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used. */
		maxConcurrentCdcTasks: FormControl<number | null | undefined>,
	}
	export function CreateOracleSourceConfigFormGroup() {
		return new FormGroup<OracleSourceConfigFormProperties>({
			maxConcurrentBackfillTasks: new FormControl<number | null | undefined>(undefined),
			maxConcurrentCdcTasks: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration to stream large object values. */
	export interface StreamLargeObjects {
	}

	/** Configuration to stream large object values. */
	export interface StreamLargeObjectsFormProperties {
	}
	export function CreateStreamLargeObjectsFormGroup() {
		return new FormGroup<StreamLargeObjectsFormProperties>({
		});

	}


	/** PostgreSQL data source configuration */
	export interface PostgresqlSourceConfig {

		/** PostgreSQL database structure. */
		excludeObjects?: PostgresqlRdbms;

		/** PostgreSQL database structure. */
		includeObjects?: PostgresqlRdbms;

		/** Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used. */
		maxConcurrentBackfillTasks?: number | null;

		/** Required. The name of the publication that includes the set of all tables that are defined in the stream's include_objects. */
		publication?: string | null;

		/** Required. Immutable. The name of the logical replication slot that's configured with the pgoutput plugin. */
		replicationSlot?: string | null;
	}

	/** PostgreSQL data source configuration */
	export interface PostgresqlSourceConfigFormProperties {

		/** Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used. */
		maxConcurrentBackfillTasks: FormControl<number | null | undefined>,

		/** Required. The name of the publication that includes the set of all tables that are defined in the stream's include_objects. */
		publication: FormControl<string | null | undefined>,

		/** Required. Immutable. The name of the logical replication slot that's configured with the pgoutput plugin. */
		replicationSlot: FormControl<string | null | undefined>,
	}
	export function CreatePostgresqlSourceConfigFormGroup() {
		return new FormGroup<PostgresqlSourceConfigFormProperties>({
			maxConcurrentBackfillTasks: new FormControl<number | null | undefined>(undefined),
			publication: new FormControl<string | null | undefined>(undefined),
			replicationSlot: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StreamState { STATE_UNSPECIFIED = 0, NOT_STARTED = 1, RUNNING = 2, PAUSED = 3, MAINTENANCE = 4, FAILED = 5, FAILED_PERMANENTLY = 6, STARTING = 7, DRAINING = 8 }


	/** Request for looking up a specific stream object by its source object identifier. */
	export interface LookupStreamObjectRequest {

		/** Represents an identifier of an object in the data source. */
		sourceObjectIdentifier?: SourceObjectIdentifier;
	}

	/** Request for looking up a specific stream object by its source object identifier. */
	export interface LookupStreamObjectRequestFormProperties {
	}
	export function CreateLookupStreamObjectRequestFormGroup() {
		return new FormGroup<LookupStreamObjectRequestFormProperties>({
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Contains the current validation results. */
		validationResult?: ValidationResult;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the current validation results. */
	export interface ValidationResult {

		/** A list of validations (includes both executed as well as not executed validations). */
		validations?: Array<Validation>;
	}

	/** Contains the current validation results. */
	export interface ValidationResultFormProperties {
	}
	export function CreateValidationResultFormGroup() {
		return new FormGroup<ValidationResultFormProperties>({
		});

	}


	/** A validation to perform on a stream. */
	export interface Validation {

		/** A custom code identifying this validation. */
		code?: string | null;

		/** A short description of the validation. */
		description?: string | null;

		/** Messages reflecting the validation results. */
		message?: Array<ValidationMessage>;

		/** Output only. Validation execution status. */
		state?: ValidationState | null;
	}

	/** A validation to perform on a stream. */
	export interface ValidationFormProperties {

		/** A custom code identifying this validation. */
		code: FormControl<string | null | undefined>,

		/** A short description of the validation. */
		description: FormControl<string | null | undefined>,

		/** Output only. Validation execution status. */
		state: FormControl<ValidationState | null | undefined>,
	}
	export function CreateValidationFormGroup() {
		return new FormGroup<ValidationFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ValidationState | null | undefined>(undefined),
		});

	}


	/** Represent user-facing validation result message. */
	export interface ValidationMessage {

		/** A custom code identifying this specific message. */
		code?: string | null;

		/** Message severity level (warning or error). */
		level?: ValidationMessageLevel | null;

		/** The result of the validation. */
		message?: string | null;

		/** Additional metadata related to the result. */
		metadata?: {[id: string]: string };
	}

	/** Represent user-facing validation result message. */
	export interface ValidationMessageFormProperties {

		/** A custom code identifying this specific message. */
		code: FormControl<string | null | undefined>,

		/** Message severity level (warning or error). */
		level: FormControl<ValidationMessageLevel | null | undefined>,

		/** The result of the validation. */
		message: FormControl<string | null | undefined>,

		/** Additional metadata related to the result. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateValidationMessageFormGroup() {
		return new FormGroup<ValidationMessageFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<ValidationMessageLevel | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum ValidationMessageLevel { LEVEL_UNSPECIFIED = 0, WARNING = 1, ERROR = 2 }

	export enum ValidationState { STATE_UNSPECIFIED = 0, NOT_EXECUTED = 1, FAILED = 2, PASSED = 3, WARNING = 4 }


	/** Request message for running a stream. */
	export interface RunStreamRequest {

		/** The strategy that the stream uses for CDC replication. */
		cdcStrategy?: CdcStrategy;
	}

	/** Request message for running a stream. */
	export interface RunStreamRequestFormProperties {
	}
	export function CreateRunStreamRequestFormGroup() {
		return new FormGroup<RunStreamRequestFormProperties>({
		});

	}


	/** Request for manually initiating a backfill job for a specific stream object. */
	export interface StartBackfillJobRequest {
	}

	/** Request for manually initiating a backfill job for a specific stream object. */
	export interface StartBackfillJobRequestFormProperties {
	}
	export function CreateStartBackfillJobRequestFormGroup() {
		return new FormGroup<StartBackfillJobRequestFormProperties>({
		});

	}


	/** Response for manually initiating a backfill job for a specific stream object. */
	export interface StartBackfillJobResponse {

		/** A specific stream object (e.g a specific DB table). */
		object?: StreamObject;
	}

	/** Response for manually initiating a backfill job for a specific stream object. */
	export interface StartBackfillJobResponseFormProperties {
	}
	export function CreateStartBackfillJobResponseFormGroup() {
		return new FormGroup<StartBackfillJobResponseFormProperties>({
		});

	}


	/** Request for manually stopping a running backfill job for a specific stream object. */
	export interface StopBackfillJobRequest {
	}

	/** Request for manually stopping a running backfill job for a specific stream object. */
	export interface StopBackfillJobRequestFormProperties {
	}
	export function CreateStopBackfillJobRequestFormGroup() {
		return new FormGroup<StopBackfillJobRequestFormProperties>({
		});

	}


	/** Response for manually stop a backfill job for a specific stream object. */
	export interface StopBackfillJobResponse {

		/** A specific stream object (e.g a specific DB table). */
		object?: StreamObject;
	}

	/** Response for manually stop a backfill job for a specific stream object. */
	export interface StopBackfillJobResponseFormProperties {
	}
	export function CreateStopBackfillJobResponseFormGroup() {
		return new FormGroup<StopBackfillJobResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Use this method to delete a stream.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the stream resource to delete.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Datastream_projects_locations_streams_delete(name: string, requestId: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Use this method to get details about a stream object.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the stream object resource to get.
		 * @return {StreamObject} Successful response
		 */
		Datastream_projects_locations_streams_objects_get(name: string): Observable<StreamObject> {
			return this.http.get<StreamObject>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Use this method to update the configuration of a stream.
		 * Patch v1/{name}
		 * @param {string} name Output only. The stream's name.
		 * @param {boolean} force Optional. Update the stream without validating it.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} updateMask Optional. Field mask is used to specify the fields to be overwritten in the stream resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
		 * @param {boolean} validateOnly Optional. Only validate the stream with the changes, without actually updating it. The default is false.
		 * @return {Operation} Successful response
		 */
		Datastream_projects_locations_streams_patch(name: string, force: boolean | null | undefined, requestId: string | null | undefined, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Stream): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Datastream_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Datastream_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Datastream_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The FetchStaticIps API call exposes the static IP addresses used by Datastream.
		 * Get v1/{name}:fetchStaticIps
		 * @param {string} name Required. The resource name for the location for which static IPs should be returned. Must be in the format `projects/locations/*`.
		 * @param {number} pageSize Maximum number of Ips to return, will likely not be specified.
		 * @param {string} pageToken A page token, received from a previous `ListStaticIps` call. will likely not be specified.
		 * @return {FetchStaticIpsResponse} Successful response
		 */
		Datastream_projects_locations_fetchStaticIps(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<FetchStaticIpsResponse> {
			return this.http.get<FetchStaticIpsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':fetchStaticIps&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Use this method to start, resume or recover a stream with a non default CDC strategy. NOTE: This feature is currently experimental.
		 * Post v1/{name}:run
		 * @param {string} name Required. Name of the stream resource to start, in the format: projects/{project_id}/locations/{location}/streams/{stream_name}
		 * @return {Operation} Successful response
		 */
		Datastream_projects_locations_streams_run(name: string, requestBody: RunStreamRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this method to start a backfill job for the specified stream object.
		 * Post v1/{object}:startBackfillJob
		 * @param {string} object Required. The name of the stream object resource to start a backfill job for.
		 * @return {StartBackfillJobResponse} Successful response
		 */
		Datastream_projects_locations_streams_objects_startBackfillJob(object: string, requestBody: StartBackfillJobRequest): Observable<StartBackfillJobResponse> {
			return this.http.post<StartBackfillJobResponse>(this.baseUri + 'v1/' + (object == null ? '' : encodeURIComponent(object)) + ':startBackfillJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this method to stop a backfill job for the specified stream object.
		 * Post v1/{object}:stopBackfillJob
		 * @param {string} object Required. The name of the stream object resource to stop the backfill job for.
		 * @return {StopBackfillJobResponse} Successful response
		 */
		Datastream_projects_locations_streams_objects_stopBackfillJob(object: string, requestBody: StopBackfillJobRequest): Observable<StopBackfillJobResponse> {
			return this.http.post<StopBackfillJobResponse>(this.baseUri + 'v1/' + (object == null ? '' : encodeURIComponent(object)) + ':stopBackfillJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this method to list connection profiles created in a project and location.
		 * Get v1/{parent}/connectionProfiles
		 * @param {string} parent Required. The parent that owns the collection of connection profiles.
		 * @param {string} filter Filter request.
		 * @param {string} orderBy Order by fields for the result.
		 * @param {number} pageSize Maximum number of connection profiles to return. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Page token received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token.
		 * @return {ListConnectionProfilesResponse} Successful response
		 */
		Datastream_projects_locations_connectionProfiles_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListConnectionProfilesResponse> {
			return this.http.get<ListConnectionProfilesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectionProfiles&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Use this method to create a connection profile in a project and location.
		 * Post v1/{parent}/connectionProfiles
		 * @param {string} parent Required. The parent that owns the collection of ConnectionProfiles.
		 * @param {string} connectionProfileId Required. The connection profile identifier.
		 * @param {boolean} force Optional. Create the connection profile without validating it.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. Only validate the connection profile, but don't create any resources. The default is false.
		 * @return {Operation} Successful response
		 */
		Datastream_projects_locations_connectionProfiles_create(parent: string, connectionProfileId: string | null | undefined, force: boolean | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: ConnectionProfile): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectionProfiles&connectionProfileId=' + (connectionProfileId == null ? '' : encodeURIComponent(connectionProfileId)) + '&force=' + force + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
		 * Post v1/{parent}/connectionProfiles:discover
		 * @param {string} parent Required. The parent resource of the connection profile type. Must be in the format `projects/locations/*`.
		 * @return {DiscoverConnectionProfileResponse} Successful response
		 */
		Datastream_projects_locations_connectionProfiles_discover(parent: string, requestBody: DiscoverConnectionProfileRequest): Observable<DiscoverConnectionProfileResponse> {
			return this.http.post<DiscoverConnectionProfileResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectionProfiles:discover', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this method to list the objects of a specific stream.
		 * Get v1/{parent}/objects
		 * @param {string} parent Required. The parent stream that owns the collection of objects.
		 * @param {number} pageSize Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Page token received from a previous `ListStreamObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreamObjectsRequest` must match the call that provided the page token.
		 * @return {ListStreamObjectsResponse} Successful response
		 */
		Datastream_projects_locations_streams_objects_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListStreamObjectsResponse> {
			return this.http.get<ListStreamObjectsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/objects&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Use this method to look up a stream object by its source object identifier.
		 * Post v1/{parent}/objects:lookup
		 * @param {string} parent Required. The parent stream that owns the collection of objects.
		 * @return {StreamObject} Successful response
		 */
		Datastream_projects_locations_streams_objects_lookup(parent: string, requestBody: LookupStreamObjectRequest): Observable<StreamObject> {
			return this.http.post<StreamObject>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/objects:lookup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this method to list private connectivity configurations in a project and location.
		 * Get v1/{parent}/privateConnections
		 * @param {string} parent Required. The parent that owns the collection of private connectivity configurations.
		 * @param {string} filter Filter request.
		 * @param {string} orderBy Order by fields for the result.
		 * @param {number} pageSize Maximum number of private connectivity configurations to return. If unspecified, at most 50 private connectivity configurations that will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token.
		 * @return {ListPrivateConnectionsResponse} Successful response
		 */
		Datastream_projects_locations_privateConnections_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPrivateConnectionsResponse> {
			return this.http.get<ListPrivateConnectionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/privateConnections&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Use this method to create a private connectivity configuration.
		 * Post v1/{parent}/privateConnections
		 * @param {string} parent Required. The parent that owns the collection of PrivateConnections.
		 * @param {boolean} force Optional. If set to true, will skip validations.
		 * @param {string} privateConnectionId Required. The private connectivity identifier.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Datastream_projects_locations_privateConnections_create(parent: string, force: boolean | null | undefined, privateConnectionId: string | null | undefined, requestId: string | null | undefined, requestBody: PrivateConnection): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/privateConnections&force=' + force + '&privateConnectionId=' + (privateConnectionId == null ? '' : encodeURIComponent(privateConnectionId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this method to list routes created for a private connectivity configuration in a project and location.
		 * Get v1/{parent}/routes
		 * @param {string} parent Required. The parent that owns the collection of Routess.
		 * @param {string} filter Filter request.
		 * @param {string} orderBy Order by fields for the result.
		 * @param {number} pageSize Maximum number of Routes to return. The service may return fewer than this value. If unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Page token received from a previous `ListRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRoutes` must match the call that provided the page token.
		 * @return {ListRoutesResponse} Successful response
		 */
		Datastream_projects_locations_privateConnections_routes_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRoutesResponse> {
			return this.http.get<ListRoutesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/routes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Use this method to create a route for a private connectivity configuration in a project and location.
		 * Post v1/{parent}/routes
		 * @param {string} parent Required. The parent that owns the collection of Routes.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} routeId Required. The Route identifier.
		 * @return {Operation} Successful response
		 */
		Datastream_projects_locations_privateConnections_routes_create(parent: string, requestId: string | null | undefined, routeId: string | null | undefined, requestBody: Route): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/routes&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&routeId=' + (routeId == null ? '' : encodeURIComponent(routeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this method to list streams in a project and location.
		 * Get v1/{parent}/streams
		 * @param {string} parent Required. The parent that owns the collection of streams.
		 * @param {string} filter Filter request.
		 * @param {string} orderBy Order by fields for the result.
		 * @param {number} pageSize Maximum number of streams to return. If unspecified, at most 50 streams will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Page token received from a previous `ListStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreams` must match the call that provided the page token.
		 * @return {ListStreamsResponse} Successful response
		 */
		Datastream_projects_locations_streams_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListStreamsResponse> {
			return this.http.get<ListStreamsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/streams&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Use this method to create a stream.
		 * Post v1/{parent}/streams
		 * @param {string} parent Required. The parent that owns the collection of streams.
		 * @param {boolean} force Optional. Create the stream without validating it.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} streamId Required. The stream identifier.
		 * @param {boolean} validateOnly Optional. Only validate the stream, but don't create any resources. The default is false.
		 * @return {Operation} Successful response
		 */
		Datastream_projects_locations_streams_create(parent: string, force: boolean | null | undefined, requestId: string | null | undefined, streamId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Stream): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/streams&force=' + force + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&streamId=' + (streamId == null ? '' : encodeURIComponent(streamId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

