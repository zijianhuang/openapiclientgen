import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateKeyspaceResponse {

		/** Required */
		resourceArn: string;
	}
	export interface CreateKeyspaceResponseFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateKeyspaceResponseFormGroup() {
		return new FormGroup<CreateKeyspaceResponseFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateKeyspaceRequest {

		/** Required */
		keyspaceName: string;
		tags?: Array<Tag>;
		replicationSpecification?: ReplicationSpecification;
	}
	export interface CreateKeyspaceRequestFormProperties {

		/** Required */
		keyspaceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateKeyspaceRequestFormGroup() {
		return new FormGroup<CreateKeyspaceRequestFormProperties>({
			keyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single Amazon Keyspaces resource.</p> <p>Amazon Web Services-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. Amazon Web Services-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code> in the Cost Allocation Report. You cannot backdate the application of a tag.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single Amazon Keyspaces resource.</p> <p>Amazon Web Services-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. Amazon Web Services-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code> in the Cost Allocation Report. You cannot backdate the application of a tag.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p> The replication specification of the keyspace includes:</p> <ul> <li> <p> <code>regionList</code> - up to six Amazon Web Services Regions where the keyspace is replicated in.</p> </li> <li> <p> <code>replicationStrategy</code> - the required value is <code>SINGLE_REGION</code> or <code>MULTI_REGION</code>.</p> </li> </ul> */
	export interface ReplicationSpecification {

		/** Required */
		replicationStrategy: Rs;
		regionList?: Array<string>;
	}

	/** <p> The replication specification of the keyspace includes:</p> <ul> <li> <p> <code>regionList</code> - up to six Amazon Web Services Regions where the keyspace is replicated in.</p> </li> <li> <p> <code>replicationStrategy</code> - the required value is <code>SINGLE_REGION</code> or <code>MULTI_REGION</code>.</p> </li> </ul> */
	export interface ReplicationSpecificationFormProperties {

		/** Required */
		replicationStrategy: FormControl<Rs | null | undefined>,
	}
	export function CreateReplicationSpecificationFormGroup() {
		return new FormGroup<ReplicationSpecificationFormProperties>({
			replicationStrategy: new FormControl<Rs | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Rs { SINGLE_REGION = 0, MULTI_REGION = 1 }

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface CreateTableResponse {

		/** Required */
		resourceArn: string;
	}
	export interface CreateTableResponseFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTableResponseFormGroup() {
		return new FormGroup<CreateTableResponseFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTableRequest {

		/** Required */
		keyspaceName: string;

		/** Required */
		tableName: string;

		/** Required */
		schemaDefinition: SchemaDefinition;
		comment?: Comment;
		capacitySpecification?: CapacitySpecification;
		encryptionSpecification?: EncryptionSpecification;
		pointInTimeRecovery?: PointInTimeRecovery;
		ttl?: TimeToLive;
		defaultTimeToLive?: number | null;
		tags?: Array<Tag>;
		clientSideTimestamps?: ClientSideTimestamps;
	}
	export interface CreateTableRequestFormProperties {

		/** Required */
		keyspaceName: FormControl<string | null | undefined>,

		/** Required */
		tableName: FormControl<string | null | undefined>,
		defaultTimeToLive: FormControl<number | null | undefined>,
	}
	export function CreateCreateTableRequestFormGroup() {
		return new FormGroup<CreateTableRequestFormProperties>({
			keyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			defaultTimeToLive: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the schema of the table. */
	export interface SchemaDefinition {

		/** Required */
		allColumns: Array<ColumnDefinition>;

		/** Required */
		partitionKeys: Array<PartitionKey>;
		clusteringKeys?: Array<ClusteringKey>;
		staticColumns?: Array<StaticColumn>;
	}

	/** Describes the schema of the table. */
	export interface SchemaDefinitionFormProperties {
	}
	export function CreateSchemaDefinitionFormGroup() {
		return new FormGroup<SchemaDefinitionFormProperties>({
		});

	}


	/** The names and data types of regular columns. */
	export interface ColumnDefinition {

		/** Required */
		name: string;

		/** Required */
		type: string;
	}

	/** The names and data types of regular columns. */
	export interface ColumnDefinitionFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateColumnDefinitionFormGroup() {
		return new FormGroup<ColumnDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The partition key portion of the primary key is required and determines how Amazon Keyspaces stores the data. The partition key can be a single column, or it can be a compound value composed of two or more columns. */
	export interface PartitionKey {

		/** Required */
		name: string;
	}

	/** The partition key portion of the primary key is required and determines how Amazon Keyspaces stores the data. The partition key can be a single column, or it can be a compound value composed of two or more columns. */
	export interface PartitionKeyFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePartitionKeyFormGroup() {
		return new FormGroup<PartitionKeyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The optional clustering column portion of your primary key determines how the data is clustered and sorted within each partition. */
	export interface ClusteringKey {

		/** Required */
		name: string;

		/** Required */
		orderBy: SortOrder;
	}

	/** The optional clustering column portion of your primary key determines how the data is clustered and sorted within each partition. */
	export interface ClusteringKeyFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		orderBy: FormControl<SortOrder | null | undefined>,
	}
	export function CreateClusteringKeyFormGroup() {
		return new FormGroup<ClusteringKeyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orderBy: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SortOrder { ASC = 0, DESC = 1 }


	/** The static columns of the table. Static columns store values that are shared by all rows in the same partition. */
	export interface StaticColumn {

		/** Required */
		name: string;
	}

	/** The static columns of the table. Static columns store values that are shared by all rows in the same partition. */
	export interface StaticColumnFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateStaticColumnFormGroup() {
		return new FormGroup<StaticColumnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An optional comment that describes the table. */
	export interface Comment {

		/** Required */
		message: string;
	}

	/** An optional comment that describes the table. */
	export interface CommentFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Amazon Keyspaces has two read/write capacity modes for processing reads and writes on your tables: </p> <ul> <li> <p>On-demand (default)</p> </li> <li> <p>Provisioned</p> </li> </ul> <p>The read/write capacity mode that you choose controls how you are charged for read and write throughput and how table throughput capacity is managed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> */
	export interface CapacitySpecification {

		/** Required */
		throughputMode: ThroughputMode;
		readCapacityUnits?: number | null;
		writeCapacityUnits?: number | null;
	}

	/** <p>Amazon Keyspaces has two read/write capacity modes for processing reads and writes on your tables: </p> <ul> <li> <p>On-demand (default)</p> </li> <li> <p>Provisioned</p> </li> </ul> <p>The read/write capacity mode that you choose controls how you are charged for read and write throughput and how table throughput capacity is managed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> */
	export interface CapacitySpecificationFormProperties {

		/** Required */
		throughputMode: FormControl<ThroughputMode | null | undefined>,
		readCapacityUnits: FormControl<number | null | undefined>,
		writeCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateCapacitySpecificationFormGroup() {
		return new FormGroup<CapacitySpecificationFormProperties>({
			throughputMode: new FormControl<ThroughputMode | null | undefined>(undefined, [Validators.required]),
			readCapacityUnits: new FormControl<number | null | undefined>(undefined),
			writeCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ThroughputMode { PAY_PER_REQUEST = 0, PROVISIONED = 1 }


	/** <p>Amazon Keyspaces encrypts and decrypts the table data at rest transparently and integrates with Key Management Service for storing and managing the encryption key. You can choose one of the following KMS keys (KMS keys):</p> <ul> <li> <p>Amazon Web Services owned key - This is the default encryption type. The key is owned by Amazon Keyspaces (no additional charge). </p> </li> <li> <p>Customer managed key - This key is stored in your account and is created, owned, and managed by you. You have full control over the customer managed key (KMS charges apply).</p> </li> </ul> <p>For more information about encryption at rest in Amazon Keyspaces, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For more information about KMS, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">KMS management service concepts</a> in the <i>Key Management Service Developer Guide</i>.</p> */
	export interface EncryptionSpecification {

		/** Required */
		type: EncryptionType;
		kmsKeyIdentifier?: string;
	}

	/** <p>Amazon Keyspaces encrypts and decrypts the table data at rest transparently and integrates with Key Management Service for storing and managing the encryption key. You can choose one of the following KMS keys (KMS keys):</p> <ul> <li> <p>Amazon Web Services owned key - This is the default encryption type. The key is owned by Amazon Keyspaces (no additional charge). </p> </li> <li> <p>Customer managed key - This key is stored in your account and is created, owned, and managed by you. You have full control over the customer managed key (KMS charges apply).</p> </li> </ul> <p>For more information about encryption at rest in Amazon Keyspaces, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For more information about KMS, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">KMS management service concepts</a> in the <i>Key Management Service Developer Guide</i>.</p> */
	export interface EncryptionSpecificationFormProperties {

		/** Required */
		type: FormControl<EncryptionType | null | undefined>,
		kmsKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionSpecificationFormGroup() {
		return new FormGroup<EncryptionSpecificationFormProperties>({
			type: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
			kmsKeyIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncryptionType { CUSTOMER_MANAGED_KMS_KEY = 0, AWS_OWNED_KMS_KEY = 1 }


	/** <p>Point-in-time recovery (PITR) helps protect your Amazon Keyspaces tables from accidental write or delete operations by providing you continuous backups of your table data.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> */
	export interface PointInTimeRecovery {

		/** Required */
		status: PointInTimeRecoveryStatus;
	}

	/** <p>Point-in-time recovery (PITR) helps protect your Amazon Keyspaces tables from accidental write or delete operations by providing you continuous backups of your table data.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> */
	export interface PointInTimeRecoveryFormProperties {

		/** Required */
		status: FormControl<PointInTimeRecoveryStatus | null | undefined>,
	}
	export function CreatePointInTimeRecoveryFormGroup() {
		return new FormGroup<PointInTimeRecoveryFormProperties>({
			status: new FormControl<PointInTimeRecoveryStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PointInTimeRecoveryStatus { ENABLED = 0, DISABLED = 1 }


	/** <p>Enable custom Time to Live (TTL) settings for rows and columns without setting a TTL default for the specified table.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_enabling">Enabling TTL on tables</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> */
	export interface TimeToLive {

		/** Required */
		status: TimeToLiveStatus;
	}

	/** <p>Enable custom Time to Live (TTL) settings for rows and columns without setting a TTL default for the specified table.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_enabling">Enabling TTL on tables</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> */
	export interface TimeToLiveFormProperties {

		/** Required */
		status: FormControl<TimeToLiveStatus | null | undefined>,
	}
	export function CreateTimeToLiveFormGroup() {
		return new FormGroup<TimeToLiveFormProperties>({
			status: new FormControl<TimeToLiveStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TimeToLiveStatus { ENABLED = 0 }


	/** <p>The client-side timestamp setting of the table.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/client-side-timestamps-how-it-works.html">How it works: Amazon Keyspaces client-side timestamps</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> */
	export interface ClientSideTimestamps {

		/** Required */
		status: TimeToLiveStatus;
	}

	/** <p>The client-side timestamp setting of the table.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/client-side-timestamps-how-it-works.html">How it works: Amazon Keyspaces client-side timestamps</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> */
	export interface ClientSideTimestampsFormProperties {

		/** Required */
		status: FormControl<TimeToLiveStatus | null | undefined>,
	}
	export function CreateClientSideTimestampsFormGroup() {
		return new FormGroup<ClientSideTimestampsFormProperties>({
			status: new FormControl<TimeToLiveStatus | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteKeyspaceResponse {
	}
	export interface DeleteKeyspaceResponseFormProperties {
	}
	export function CreateDeleteKeyspaceResponseFormGroup() {
		return new FormGroup<DeleteKeyspaceResponseFormProperties>({
		});

	}

	export interface DeleteKeyspaceRequest {

		/** Required */
		keyspaceName: string;
	}
	export interface DeleteKeyspaceRequestFormProperties {

		/** Required */
		keyspaceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteKeyspaceRequestFormGroup() {
		return new FormGroup<DeleteKeyspaceRequestFormProperties>({
			keyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		keyspaceName: string;

		/** Required */
		tableName: string;
	}
	export interface DeleteTableRequestFormProperties {

		/** Required */
		keyspaceName: FormControl<string | null | undefined>,

		/** Required */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTableRequestFormGroup() {
		return new FormGroup<DeleteTableRequestFormProperties>({
			keyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetKeyspaceResponse {

		/** Required */
		keyspaceName: string;

		/** Required */
		resourceArn: string;

		/** Required */
		replicationStrategy: Rs;
		replicationRegions?: Array<string>;
	}
	export interface GetKeyspaceResponseFormProperties {

		/** Required */
		keyspaceName: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		replicationStrategy: FormControl<Rs | null | undefined>,
	}
	export function CreateGetKeyspaceResponseFormGroup() {
		return new FormGroup<GetKeyspaceResponseFormProperties>({
			keyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replicationStrategy: new FormControl<Rs | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetKeyspaceRequest {

		/** Required */
		keyspaceName: string;
	}
	export interface GetKeyspaceRequestFormProperties {

		/** Required */
		keyspaceName: FormControl<string | null | undefined>,
	}
	export function CreateGetKeyspaceRequestFormGroup() {
		return new FormGroup<GetKeyspaceRequestFormProperties>({
			keyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTableResponse {

		/** Required */
		keyspaceName: string;

		/** Required */
		tableName: string;

		/** Required */
		resourceArn: string;
		creationTimestamp?: Date;
		status?: TableStatus;
		schemaDefinition?: SchemaDefinition;
		capacitySpecification?: CapacitySpecificationSummary;
		encryptionSpecification?: EncryptionSpecification;
		pointInTimeRecovery?: PointInTimeRecoverySummary;
		ttl?: TimeToLive;
		defaultTimeToLive?: number | null;
		comment?: Comment;
		clientSideTimestamps?: ClientSideTimestamps;
	}
	export interface GetTableResponseFormProperties {

		/** Required */
		keyspaceName: FormControl<string | null | undefined>,

		/** Required */
		tableName: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
		creationTimestamp: FormControl<Date | null | undefined>,
		status: FormControl<TableStatus | null | undefined>,
		defaultTimeToLive: FormControl<number | null | undefined>,
	}
	export function CreateGetTableResponseFormGroup() {
		return new FormGroup<GetTableResponseFormProperties>({
			keyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTimestamp: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<TableStatus | null | undefined>(undefined),
			defaultTimeToLive: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TableStatus { ACTIVE = 0, CREATING = 1, UPDATING = 2, DELETING = 3, DELETED = 4, RESTORING = 5, INACCESSIBLE_ENCRYPTION_CREDENTIALS = 6 }


	/** <p>The read/write throughput capacity mode for a table. The options are:</p> <ul> <li> <p> <code>throughputMode:PAY_PER_REQUEST</code> and </p> </li> <li> <p> <code>throughputMode:PROVISIONED</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> */
	export interface CapacitySpecificationSummary {

		/** Required */
		throughputMode: ThroughputMode;
		readCapacityUnits?: number | null;
		writeCapacityUnits?: number | null;
		lastUpdateToPayPerRequestTimestamp?: Date;
	}

	/** <p>The read/write throughput capacity mode for a table. The options are:</p> <ul> <li> <p> <code>throughputMode:PAY_PER_REQUEST</code> and </p> </li> <li> <p> <code>throughputMode:PROVISIONED</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> */
	export interface CapacitySpecificationSummaryFormProperties {

		/** Required */
		throughputMode: FormControl<ThroughputMode | null | undefined>,
		readCapacityUnits: FormControl<number | null | undefined>,
		writeCapacityUnits: FormControl<number | null | undefined>,
		lastUpdateToPayPerRequestTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCapacitySpecificationSummaryFormGroup() {
		return new FormGroup<CapacitySpecificationSummaryFormProperties>({
			throughputMode: new FormControl<ThroughputMode | null | undefined>(undefined, [Validators.required]),
			readCapacityUnits: new FormControl<number | null | undefined>(undefined),
			writeCapacityUnits: new FormControl<number | null | undefined>(undefined),
			lastUpdateToPayPerRequestTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The point-in-time recovery status of the specified table. */
	export interface PointInTimeRecoverySummary {

		/** Required */
		status: PointInTimeRecoveryStatus;
		earliestRestorableTimestamp?: Date;
	}

	/** The point-in-time recovery status of the specified table. */
	export interface PointInTimeRecoverySummaryFormProperties {

		/** Required */
		status: FormControl<PointInTimeRecoveryStatus | null | undefined>,
		earliestRestorableTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePointInTimeRecoverySummaryFormGroup() {
		return new FormGroup<PointInTimeRecoverySummaryFormProperties>({
			status: new FormControl<PointInTimeRecoveryStatus | null | undefined>(undefined, [Validators.required]),
			earliestRestorableTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetTableRequest {

		/** Required */
		keyspaceName: string;

		/** Required */
		tableName: string;
	}
	export interface GetTableRequestFormProperties {

		/** Required */
		keyspaceName: FormControl<string | null | undefined>,

		/** Required */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateGetTableRequestFormGroup() {
		return new FormGroup<GetTableRequestFormProperties>({
			keyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListKeyspacesResponse {
		nextToken?: string;

		/** Required */
		keyspaces: Array<KeyspaceSummary>;
	}
	export interface ListKeyspacesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKeyspacesResponseFormGroup() {
		return new FormGroup<ListKeyspacesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the properties of a keyspace. */
	export interface KeyspaceSummary {

		/** Required */
		keyspaceName: string;

		/** Required */
		resourceArn: string;

		/** Required */
		replicationStrategy: Rs;
		replicationRegions?: Array<string>;
	}

	/** Represents the properties of a keyspace. */
	export interface KeyspaceSummaryFormProperties {

		/** Required */
		keyspaceName: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		replicationStrategy: FormControl<Rs | null | undefined>,
	}
	export function CreateKeyspaceSummaryFormGroup() {
		return new FormGroup<KeyspaceSummaryFormProperties>({
			keyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replicationStrategy: new FormControl<Rs | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListKeyspacesRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListKeyspacesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListKeyspacesRequestFormGroup() {
		return new FormGroup<ListKeyspacesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTablesResponse {
		nextToken?: string;
		tables?: Array<TableSummary>;
	}
	export interface ListTablesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTablesResponseFormGroup() {
		return new FormGroup<ListTablesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the name of the specified table, the keyspace it is stored in, and the unique identifier in the format of an Amazon Resource Name (ARN). */
	export interface TableSummary {

		/** Required */
		keyspaceName: string;

		/** Required */
		tableName: string;

		/** Required */
		resourceArn: string;
	}

	/** Returns the name of the specified table, the keyspace it is stored in, and the unique identifier in the format of an Amazon Resource Name (ARN). */
	export interface TableSummaryFormProperties {

		/** Required */
		keyspaceName: FormControl<string | null | undefined>,

		/** Required */
		tableName: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTableSummaryFormGroup() {
		return new FormGroup<TableSummaryFormProperties>({
			keyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTablesRequest {
		nextToken?: string;
		maxResults?: number | null;

		/** Required */
		keyspaceName: string;
	}
	export interface ListTablesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,

		/** Required */
		keyspaceName: FormControl<string | null | undefined>,
	}
	export function CreateListTablesRequestFormGroup() {
		return new FormGroup<ListTablesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			keyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		nextToken?: string;
		tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		resourceArn: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RestoreTableResponse {

		/** Required */
		restoredTableARN: string;
	}
	export interface RestoreTableResponseFormProperties {

		/** Required */
		restoredTableARN: FormControl<string | null | undefined>,
	}
	export function CreateRestoreTableResponseFormGroup() {
		return new FormGroup<RestoreTableResponseFormProperties>({
			restoredTableARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RestoreTableRequest {

		/** Required */
		sourceKeyspaceName: string;

		/** Required */
		sourceTableName: string;

		/** Required */
		targetKeyspaceName: string;

		/** Required */
		targetTableName: string;
		restoreTimestamp?: Date;
		capacitySpecificationOverride?: CapacitySpecification;
		encryptionSpecificationOverride?: EncryptionSpecification;
		pointInTimeRecoveryOverride?: PointInTimeRecovery;
		tagsOverride?: Array<Tag>;
	}
	export interface RestoreTableRequestFormProperties {

		/** Required */
		sourceKeyspaceName: FormControl<string | null | undefined>,

		/** Required */
		sourceTableName: FormControl<string | null | undefined>,

		/** Required */
		targetKeyspaceName: FormControl<string | null | undefined>,

		/** Required */
		targetTableName: FormControl<string | null | undefined>,
		restoreTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateRestoreTableRequestFormGroup() {
		return new FormGroup<RestoreTableRequestFormProperties>({
			sourceKeyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetKeyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			restoreTimestamp: new FormControl<Date | null | undefined>(undefined),
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
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateTableResponse {

		/** Required */
		resourceArn: string;
	}
	export interface UpdateTableResponseFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableResponseFormGroup() {
		return new FormGroup<UpdateTableResponseFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateTableRequest {

		/** Required */
		keyspaceName: string;

		/** Required */
		tableName: string;
		addColumns?: Array<ColumnDefinition>;
		capacitySpecification?: CapacitySpecification;
		encryptionSpecification?: EncryptionSpecification;
		pointInTimeRecovery?: PointInTimeRecovery;
		ttl?: TimeToLive;
		defaultTimeToLive?: number | null;
		clientSideTimestamps?: ClientSideTimestamps;
	}
	export interface UpdateTableRequestFormProperties {

		/** Required */
		keyspaceName: FormControl<string | null | undefined>,

		/** Required */
		tableName: FormControl<string | null | undefined>,
		defaultTimeToLive: FormControl<number | null | undefined>,
	}
	export function CreateUpdateTableRequestFormGroup() {
		return new FormGroup<UpdateTableRequestFormProperties>({
			keyspaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			defaultTimeToLive: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ClientSideTimestampsStatus { ENABLED = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>The <code>CreateKeyspace</code> operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names must be unique within each Region.</p> <p> <code>CreateKeyspace</code> is an asynchronous operation. You can monitor the creation status of the new keyspace by using the <code>GetKeyspace</code> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-keyspaces.html#keyspaces-create">Creating keyspaces</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
		 * Post #X-Amz-Target=KeyspacesService.CreateKeyspace
		 * @return {CreateKeyspaceResponse} Success
		 */
		CreateKeyspace(requestBody: CreateKeyspaceRequest): Observable<CreateKeyspaceResponse> {
			return this.http.post<CreateKeyspaceResponse>(this.baseUri + '#X-Amz-Target=KeyspacesService.CreateKeyspace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>CreateTable</code> operation adds a new table to the specified keyspace. Within a keyspace, table names must be unique.</p> <p> <code>CreateTable</code> is an asynchronous operation. When the request is received, the status of the table is set to <code>CREATING</code>. You can monitor the creation status of the new table by using the <code>GetTable</code> operation, which returns the current <code>status</code> of the table. You can start using a table when the status is <code>ACTIVE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-tables.html#tables-create">Creating tables</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
		 * Post #X-Amz-Target=KeyspacesService.CreateTable
		 * @return {CreateTableResponse} Success
		 */
		CreateTable(requestBody: CreateTableRequest): Observable<CreateTableResponse> {
			return this.http.post<CreateTableResponse>(this.baseUri + '#X-Amz-Target=KeyspacesService.CreateTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>DeleteKeyspace</code> operation deletes a keyspace and all of its tables.
		 * Post #X-Amz-Target=KeyspacesService.DeleteKeyspace
		 * @return {DeleteKeyspaceResponse} Success
		 */
		DeleteKeyspace(requestBody: DeleteKeyspaceRequest): Observable<DeleteKeyspaceResponse> {
			return this.http.post<DeleteKeyspaceResponse>(this.baseUri + '#X-Amz-Target=KeyspacesService.DeleteKeyspace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>DeleteTable</code> operation deletes a table and all of its data. After a <code>DeleteTable</code> request is received, the specified table is in the <code>DELETING</code> state until Amazon Keyspaces completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is either in the <code>CREATING</code> or <code>UPDATING</code> states, then Amazon Keyspaces returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon Keyspaces returns a <code>ResourceNotFoundException</code>. If the table is already in the <code>DELETING</code> state, no error is returned.
		 * Post #X-Amz-Target=KeyspacesService.DeleteTable
		 * @return {DeleteTableResponse} Success
		 */
		DeleteTable(requestBody: DeleteTableRequest): Observable<DeleteTableResponse> {
			return this.http.post<DeleteTableResponse>(this.baseUri + '#X-Amz-Target=KeyspacesService.DeleteTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the name and the Amazon Resource Name (ARN) of the specified table.
		 * Post #X-Amz-Target=KeyspacesService.GetKeyspace
		 * @return {GetKeyspaceResponse} Success
		 */
		GetKeyspace(requestBody: GetKeyspaceRequest): Observable<GetKeyspaceResponse> {
			return this.http.post<GetKeyspaceResponse>(this.baseUri + '#X-Amz-Target=KeyspacesService.GetKeyspace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the table, including the table's name and current status, the keyspace name, configuration settings, and metadata.</p> <p>To read table metadata using <code>GetTable</code>, <code>Select</code> action permissions for the table and system tables are required to complete the operation.</p>
		 * Post #X-Amz-Target=KeyspacesService.GetTable
		 * @return {GetTableResponse} Success
		 */
		GetTable(requestBody: GetTableRequest): Observable<GetTableResponse> {
			return this.http.post<GetTableResponse>(this.baseUri + '#X-Amz-Target=KeyspacesService.GetTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of keyspaces.
		 * Post #X-Amz-Target=KeyspacesService.ListKeyspaces
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListKeyspacesResponse} Success
		 */
		ListKeyspaces(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListKeyspacesRequest): Observable<ListKeyspacesResponse> {
			return this.http.post<ListKeyspacesResponse>(this.baseUri + '#X-Amz-Target=KeyspacesService.ListKeyspaces?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of tables for a specified keyspace.
		 * Post #X-Amz-Target=KeyspacesService.ListTables
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTablesResponse} Success
		 */
		ListTables(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTablesRequest): Observable<ListTablesResponse> {
			return this.http.post<ListTablesResponse>(this.baseUri + '#X-Amz-Target=KeyspacesService.ListTables?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all tags associated with the specified Amazon Keyspaces resource.
		 * Post #X-Amz-Target=KeyspacesService.ListTagsForResource
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=KeyspacesService.ListTagsForResource?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Restores the specified table to the specified point in time within the <code>earliest_restorable_timestamp</code> and the current time. For more information about restore points, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_window"> Time window for PITR continuous backups</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.</p> <p>When you restore using point in time recovery, Amazon Keyspaces restores your source table's schema and data to the state based on the selected timestamp <code>(day:hour:minute:second)</code> to a new table. The Time to Live (TTL) settings are also restored to the state based on the selected timestamp.</p> <p>In addition to the table's schema, data, and TTL settings, <code>RestoreTable</code> restores the capacity mode, encryption, and point-in-time recovery settings from the source table. Unlike the table's schema data and TTL settings, which are restored based on the selected timestamp, these settings are always restored based on the table's settings as of the current time or when the table was deleted.</p> <p>You can also overwrite these settings during restore:</p> <ul> <li> <p>Read/write capacity mode</p> </li> <li> <p>Provisioned throughput capacity settings</p> </li> <li> <p>Point-in-time (PITR) settings</p> </li> <li> <p>Tags</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_settings">PITR restore settings</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Note that the following settings are not restored, and you must configure them manually for the new table:</p> <ul> <li> <p>Automatic scaling policies (for tables that use provisioned capacity mode)</p> </li> <li> <p>Identity and Access Management (IAM) policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> </ul>
		 * Post #X-Amz-Target=KeyspacesService.RestoreTable
		 * @return {RestoreTableResponse} Success
		 */
		RestoreTable(requestBody: RestoreTableRequest): Observable<RestoreTableResponse> {
			return this.http.post<RestoreTableResponse>(this.baseUri + '#X-Amz-Target=KeyspacesService.RestoreTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates a set of tags with a Amazon Keyspaces resource. You can then activate these user-defined tags so that they appear on the Cost Management Console for cost allocation tracking. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For IAM policy examples that show how to control access to Amazon Keyspaces resources based on tags, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-tags">Amazon Keyspaces resource access based on tags</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
		 * Post #X-Amz-Target=KeyspacesService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=KeyspacesService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the association of tags from a Amazon Keyspaces resource.
		 * Post #X-Amz-Target=KeyspacesService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=KeyspacesService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds new columns to the table or updates one of the table's settings, for example capacity mode, encryption, point-in-time recovery, or ttl settings. Note that you can only update one specific table setting per update operation.
		 * Post #X-Amz-Target=KeyspacesService.UpdateTable
		 * @return {UpdateTableResponse} Success
		 */
		UpdateTable(requestBody: UpdateTableRequest): Observable<UpdateTableResponse> {
			return this.http.post<UpdateTableResponse>(this.baseUri + '#X-Amz-Target=KeyspacesService.UpdateTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateKeyspaceX_Amz_Target { 'KeyspacesService.CreateKeyspace' = 0 }

	export enum CreateTableX_Amz_Target { 'KeyspacesService.CreateTable' = 0 }

	export enum DeleteKeyspaceX_Amz_Target { 'KeyspacesService.DeleteKeyspace' = 0 }

	export enum DeleteTableX_Amz_Target { 'KeyspacesService.DeleteTable' = 0 }

	export enum GetKeyspaceX_Amz_Target { 'KeyspacesService.GetKeyspace' = 0 }

	export enum GetTableX_Amz_Target { 'KeyspacesService.GetTable' = 0 }

	export enum ListKeyspacesX_Amz_Target { 'KeyspacesService.ListKeyspaces' = 0 }

	export enum ListTablesX_Amz_Target { 'KeyspacesService.ListTables' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'KeyspacesService.ListTagsForResource' = 0 }

	export enum RestoreTableX_Amz_Target { 'KeyspacesService.RestoreTable' = 0 }

	export enum TagResourceX_Amz_Target { 'KeyspacesService.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'KeyspacesService.UntagResource' = 0 }

	export enum UpdateTableX_Amz_Target { 'KeyspacesService.UpdateTable' = 0 }

}

