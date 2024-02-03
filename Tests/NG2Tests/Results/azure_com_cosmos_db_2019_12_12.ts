import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ARMProxyResource {

		/** The unique resource identifier of the database account. */
		id?: string | null;

		/** The name of the database account. */
		name?: string | null;

		/** The type of Azure resource. */
		type?: string | null;
	}

	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ARMProxyResourceFormProperties {

		/** The unique resource identifier of the database account. */
		id: FormControl<string | null | undefined>,

		/** The name of the database account. */
		name: FormControl<string | null | undefined>,

		/** The type of Azure resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateARMProxyResourceFormGroup() {
		return new FormGroup<ARMProxyResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The core properties of ARM resources. */
	export interface ARMResourceProperties {

		/** The unique resource identifier of the ARM resource. */
		id?: string | null;

		/** The location of the resource group to which the resource belongs. */
		location?: string | null;

		/** The name of the ARM resource. */
		name?: string | null;

		/** Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". */
		tags?: Tags;

		/** The type of Azure resource. */
		type?: string | null;
	}

	/** The core properties of ARM resources. */
	export interface ARMResourcePropertiesFormProperties {

		/** The unique resource identifier of the ARM resource. */
		id: FormControl<string | null | undefined>,

		/** The location of the resource group to which the resource belongs. */
		location: FormControl<string | null | undefined>,

		/** The name of the ARM resource. */
		name: FormControl<string | null | undefined>,

		/** The type of Azure resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateARMResourcePropertiesFormGroup() {
		return new FormGroup<ARMResourcePropertiesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". */
	export interface Tags {
	}

	/** Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". */
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}


	/** Cosmos DB capability object */
	export interface Capability {

		/** Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin". */
		name?: string | null;
	}

	/** Cosmos DB capability object */
	export interface CapabilityFormProperties {

		/** Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCapabilityFormGroup() {
		return new FormGroup<CapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to create and update Cosmos DB Cassandra keyspace. */
	export interface CassandraKeyspaceCreateUpdateParameters {

		/**
		 * Properties to create and update Azure Cosmos DB Cassandra keyspace.
		 * Required
		 */
		properties: CassandraKeyspaceCreateUpdateProperties;
	}

	/** Parameters to create and update Cosmos DB Cassandra keyspace. */
	export interface CassandraKeyspaceCreateUpdateParametersFormProperties {
	}
	export function CreateCassandraKeyspaceCreateUpdateParametersFormGroup() {
		return new FormGroup<CassandraKeyspaceCreateUpdateParametersFormProperties>({
		});

	}


	/** Properties to create and update Azure Cosmos DB Cassandra keyspace. */
	export interface CassandraKeyspaceCreateUpdateProperties {

		/**
		 * CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"
		 * Required
		 */
		options: CreateUpdateOptions;

		/**
		 * Cosmos DB Cassandra keyspace resource object
		 * Required
		 */
		resource: CassandraKeyspaceResource;
	}

	/** Properties to create and update Azure Cosmos DB Cassandra keyspace. */
	export interface CassandraKeyspaceCreateUpdatePropertiesFormProperties {
	}
	export function CreateCassandraKeyspaceCreateUpdatePropertiesFormGroup() {
		return new FormGroup<CassandraKeyspaceCreateUpdatePropertiesFormProperties>({
		});

	}


	/** CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput" */
	export interface CreateUpdateOptions {
	}

	/** CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput" */
	export interface CreateUpdateOptionsFormProperties {
	}
	export function CreateCreateUpdateOptionsFormGroup() {
		return new FormGroup<CreateUpdateOptionsFormProperties>({
		});

	}


	/** Cosmos DB Cassandra keyspace resource object */
	export interface CassandraKeyspaceResource {

		/**
		 * Name of the Cosmos DB Cassandra keyspace
		 * Required
		 */
		id: string;
	}

	/** Cosmos DB Cassandra keyspace resource object */
	export interface CassandraKeyspaceResourceFormProperties {

		/**
		 * Name of the Cosmos DB Cassandra keyspace
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCassandraKeyspaceResourceFormGroup() {
		return new FormGroup<CassandraKeyspaceResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of an Azure Cosmos DB Cassandra keyspace */
	export interface CassandraKeyspaceGetProperties {
		resource?: CassandraKeyspaceResource;
	}

	/** The properties of an Azure Cosmos DB Cassandra keyspace */
	export interface CassandraKeyspaceGetPropertiesFormProperties {
	}
	export function CreateCassandraKeyspaceGetPropertiesFormGroup() {
		return new FormGroup<CassandraKeyspaceGetPropertiesFormProperties>({
		});

	}


	/** An Azure Cosmos DB Cassandra keyspace. */
	export interface CassandraKeyspaceGetResults {

		/** The properties of an Azure Cosmos DB Cassandra keyspace */
		properties?: CassandraKeyspaceGetProperties;
	}

	/** An Azure Cosmos DB Cassandra keyspace. */
	export interface CassandraKeyspaceGetResultsFormProperties {
	}
	export function CreateCassandraKeyspaceGetResultsFormGroup() {
		return new FormGroup<CassandraKeyspaceGetResultsFormProperties>({
		});

	}


	/** The List operation response, that contains the Cassandra keyspaces and their properties. */
	export interface CassandraKeyspaceListResult {

		/** List of Cassandra keyspaces and their properties. */
		value?: Array<CassandraKeyspaceGetResults>;
	}

	/** The List operation response, that contains the Cassandra keyspaces and their properties. */
	export interface CassandraKeyspaceListResultFormProperties {
	}
	export function CreateCassandraKeyspaceListResultFormGroup() {
		return new FormGroup<CassandraKeyspaceListResultFormProperties>({
		});

	}


	/** Cosmos DB Cassandra table partition key */
	export interface CassandraPartitionKey {

		/** Name of the Cosmos DB Cassandra table partition key */
		name?: string | null;
	}

	/** Cosmos DB Cassandra table partition key */
	export interface CassandraPartitionKeyFormProperties {

		/** Name of the Cosmos DB Cassandra table partition key */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCassandraPartitionKeyFormGroup() {
		return new FormGroup<CassandraPartitionKeyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cosmos DB Cassandra table schema */
	export interface CassandraSchema {

		/** List of cluster key. */
		clusterKeys?: Array<ClusterKey>;

		/** List of Cassandra table columns. */
		columns?: Array<Column>;

		/** List of partition key. */
		partitionKeys?: Array<CassandraPartitionKey>;
	}

	/** Cosmos DB Cassandra table schema */
	export interface CassandraSchemaFormProperties {
	}
	export function CreateCassandraSchemaFormGroup() {
		return new FormGroup<CassandraSchemaFormProperties>({
		});

	}


	/** Cosmos DB Cassandra table cluster key */
	export interface ClusterKey {

		/** Name of the Cosmos DB Cassandra table cluster key */
		name?: string | null;

		/** Order of the Cosmos DB Cassandra table cluster key, only support "Asc" and "Desc" */
		orderBy?: string | null;
	}

	/** Cosmos DB Cassandra table cluster key */
	export interface ClusterKeyFormProperties {

		/** Name of the Cosmos DB Cassandra table cluster key */
		name: FormControl<string | null | undefined>,

		/** Order of the Cosmos DB Cassandra table cluster key, only support "Asc" and "Desc" */
		orderBy: FormControl<string | null | undefined>,
	}
	export function CreateClusterKeyFormGroup() {
		return new FormGroup<ClusterKeyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cosmos DB Cassandra table column */
	export interface Column {

		/** Name of the Cosmos DB Cassandra table column */
		name?: string | null;

		/** Type of the Cosmos DB Cassandra table column */
		type?: string | null;
	}

	/** Cosmos DB Cassandra table column */
	export interface ColumnFormProperties {

		/** Name of the Cosmos DB Cassandra table column */
		name: FormControl<string | null | undefined>,

		/** Type of the Cosmos DB Cassandra table column */
		type: FormControl<string | null | undefined>,
	}
	export function CreateColumnFormGroup() {
		return new FormGroup<ColumnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to create and update Cosmos DB Cassandra table. */
	export interface CassandraTableCreateUpdateParameters {

		/**
		 * Properties to create and update Azure Cosmos DB Cassandra table.
		 * Required
		 */
		properties: CassandraTableCreateUpdateProperties;
	}

	/** Parameters to create and update Cosmos DB Cassandra table. */
	export interface CassandraTableCreateUpdateParametersFormProperties {
	}
	export function CreateCassandraTableCreateUpdateParametersFormGroup() {
		return new FormGroup<CassandraTableCreateUpdateParametersFormProperties>({
		});

	}


	/** Properties to create and update Azure Cosmos DB Cassandra table. */
	export interface CassandraTableCreateUpdateProperties {

		/**
		 * CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"
		 * Required
		 */
		options: CreateUpdateOptions;

		/**
		 * Cosmos DB Cassandra table resource object
		 * Required
		 */
		resource: CassandraTableResource;
	}

	/** Properties to create and update Azure Cosmos DB Cassandra table. */
	export interface CassandraTableCreateUpdatePropertiesFormProperties {
	}
	export function CreateCassandraTableCreateUpdatePropertiesFormGroup() {
		return new FormGroup<CassandraTableCreateUpdatePropertiesFormProperties>({
		});

	}


	/** Cosmos DB Cassandra table resource object */
	export interface CassandraTableResource {

		/** Time to live of the Cosmos DB Cassandra table */
		defaultTtl?: number | null;

		/**
		 * Name of the Cosmos DB Cassandra table
		 * Required
		 */
		id: string;

		/** Cosmos DB Cassandra table schema */
		schema?: CassandraSchema;
	}

	/** Cosmos DB Cassandra table resource object */
	export interface CassandraTableResourceFormProperties {

		/** Time to live of the Cosmos DB Cassandra table */
		defaultTtl: FormControl<number | null | undefined>,

		/**
		 * Name of the Cosmos DB Cassandra table
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCassandraTableResourceFormGroup() {
		return new FormGroup<CassandraTableResourceFormProperties>({
			defaultTtl: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of an Azure Cosmos DB Cassandra table */
	export interface CassandraTableGetProperties {
		resource?: CassandraTableResource;
	}

	/** The properties of an Azure Cosmos DB Cassandra table */
	export interface CassandraTableGetPropertiesFormProperties {
	}
	export function CreateCassandraTableGetPropertiesFormGroup() {
		return new FormGroup<CassandraTableGetPropertiesFormProperties>({
		});

	}


	/** An Azure Cosmos DB Cassandra table. */
	export interface CassandraTableGetResults {

		/** The properties of an Azure Cosmos DB Cassandra table */
		properties?: CassandraTableGetProperties;
	}

	/** An Azure Cosmos DB Cassandra table. */
	export interface CassandraTableGetResultsFormProperties {
	}
	export function CreateCassandraTableGetResultsFormGroup() {
		return new FormGroup<CassandraTableGetResultsFormProperties>({
		});

	}


	/** The List operation response, that contains the Cassandra tables and their properties. */
	export interface CassandraTableListResult {

		/** List of Cassandra tables and their properties. */
		value?: Array<CassandraTableGetResults>;
	}

	/** The List operation response, that contains the Cassandra tables and their properties. */
	export interface CassandraTableListResultFormProperties {
	}
	export function CreateCassandraTableListResultFormGroup() {
		return new FormGroup<CassandraTableListResultFormProperties>({
		});

	}

	export interface CompositePath {

		/** Sort order for composite paths. */
		order?: CompositePathOrder | null;

		/** The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) */
		path?: string | null;
	}
	export interface CompositePathFormProperties {

		/** Sort order for composite paths. */
		order: FormControl<CompositePathOrder | null | undefined>,

		/** The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) */
		path: FormControl<string | null | undefined>,
	}
	export function CreateCompositePathFormGroup() {
		return new FormGroup<CompositePathFormProperties>({
			order: new FormControl<CompositePathOrder | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CompositePathOrder { Ascending = 'Ascending', Descending = 'Descending' }


	/** The conflict resolution policy for the container. */
	export interface ConflictResolutionPolicy {

		/** The conflict resolution path in the case of LastWriterWins mode. */
		conflictResolutionPath?: string | null;

		/** The procedure to resolve conflicts in the case of custom mode. */
		conflictResolutionProcedure?: string | null;

		/** Indicates the conflict resolution mode. */
		mode?: ConflictResolutionPolicyMode | null;
	}

	/** The conflict resolution policy for the container. */
	export interface ConflictResolutionPolicyFormProperties {

		/** The conflict resolution path in the case of LastWriterWins mode. */
		conflictResolutionPath: FormControl<string | null | undefined>,

		/** The procedure to resolve conflicts in the case of custom mode. */
		conflictResolutionProcedure: FormControl<string | null | undefined>,

		/** Indicates the conflict resolution mode. */
		mode: FormControl<ConflictResolutionPolicyMode | null | undefined>,
	}
	export function CreateConflictResolutionPolicyFormGroup() {
		return new FormGroup<ConflictResolutionPolicyFormProperties>({
			conflictResolutionPath: new FormControl<string | null | undefined>(undefined),
			conflictResolutionProcedure: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<ConflictResolutionPolicyMode | null | undefined>(undefined),
		});

	}

	export enum ConflictResolutionPolicyMode { LastWriterWins = 'LastWriterWins', Custom = 'Custom' }


	/** The cassandra connector offer type for the Cosmos DB C* database account. */
	export enum ConnectorOffer { Small = 'Small' }


	/** The consistency policy for the Cosmos DB database account. */
	export interface ConsistencyPolicy {

		/**
		 * The default consistency level and configuration settings of the Cosmos DB account.
		 * Required
		 */
		defaultConsistencyLevel: ConsistencyPolicyDefaultConsistencyLevel;

		/**
		 * When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
		 * Minimum: 5
		 * Maximum: 86400
		 */
		maxIntervalInSeconds?: number | null;

		/**
		 * When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		maxStalenessPrefix?: number | null;
	}

	/** The consistency policy for the Cosmos DB database account. */
	export interface ConsistencyPolicyFormProperties {

		/**
		 * The default consistency level and configuration settings of the Cosmos DB account.
		 * Required
		 */
		defaultConsistencyLevel: FormControl<ConsistencyPolicyDefaultConsistencyLevel | null | undefined>,

		/**
		 * When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
		 * Minimum: 5
		 * Maximum: 86400
		 */
		maxIntervalInSeconds: FormControl<number | null | undefined>,

		/**
		 * When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		maxStalenessPrefix: FormControl<number | null | undefined>,
	}
	export function CreateConsistencyPolicyFormGroup() {
		return new FormGroup<ConsistencyPolicyFormProperties>({
			defaultConsistencyLevel: new FormControl<ConsistencyPolicyDefaultConsistencyLevel | null | undefined>(undefined, [Validators.required]),
			maxIntervalInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(86400)]),
			maxStalenessPrefix: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(2147483647)]),
		});

	}

	export enum ConsistencyPolicyDefaultConsistencyLevel { Eventual = 'Eventual', Session = 'Session', BoundedStaleness = 'BoundedStaleness', Strong = 'Strong', ConsistentPrefix = 'ConsistentPrefix' }


	/** The configuration of the partition key to be used for partitioning data into multiple partitions */
	export interface ContainerPartitionKey {

		/** Indicates the kind of algorithm used for partitioning */
		kind?: ContainerPartitionKeyKind | null;

		/** List of paths using which data within the container can be partitioned */
		paths?: Array<string>;

		/**
		 * Indicates the version of the partition key definition
		 * Minimum: 1
		 * Maximum: 2
		 */
		version?: number | null;
	}

	/** The configuration of the partition key to be used for partitioning data into multiple partitions */
	export interface ContainerPartitionKeyFormProperties {

		/** Indicates the kind of algorithm used for partitioning */
		kind: FormControl<ContainerPartitionKeyKind | null | undefined>,

		/**
		 * Indicates the version of the partition key definition
		 * Minimum: 1
		 * Maximum: 2
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateContainerPartitionKeyFormGroup() {
		return new FormGroup<ContainerPartitionKeyFormProperties>({
			kind: new FormControl<ContainerPartitionKeyKind | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(2)]),
		});

	}

	export enum ContainerPartitionKeyKind { Hash = 'Hash', Range = 'Range' }


	/** Connection string for the Cosmos DB account */
	export interface DatabaseAccountConnectionString {

		/** Value of the connection string */
		connectionString?: string | null;

		/** Description of the connection string */
		description?: string | null;
	}

	/** Connection string for the Cosmos DB account */
	export interface DatabaseAccountConnectionStringFormProperties {

		/** Value of the connection string */
		connectionString: FormControl<string | null | undefined>,

		/** Description of the connection string */
		description: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseAccountConnectionStringFormGroup() {
		return new FormGroup<DatabaseAccountConnectionStringFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to create and update Cosmos DB database accounts. */
	export interface DatabaseAccountCreateUpdateParameters {

		/** Indicates the type of database account. This can only be set at database account creation. */
		kind?: DatabaseAccountCreateUpdateParametersKind | null;

		/**
		 * Properties to create and update Azure Cosmos DB database accounts.
		 * Required
		 */
		properties: DatabaseAccountCreateUpdateProperties;
	}

	/** Parameters to create and update Cosmos DB database accounts. */
	export interface DatabaseAccountCreateUpdateParametersFormProperties {

		/** Indicates the type of database account. This can only be set at database account creation. */
		kind: FormControl<DatabaseAccountCreateUpdateParametersKind | null | undefined>,
	}
	export function CreateDatabaseAccountCreateUpdateParametersFormGroup() {
		return new FormGroup<DatabaseAccountCreateUpdateParametersFormProperties>({
			kind: new FormControl<DatabaseAccountCreateUpdateParametersKind | null | undefined>(undefined),
		});

	}

	export enum DatabaseAccountCreateUpdateParametersKind { GlobalDocumentDB = 'GlobalDocumentDB', MongoDB = 'MongoDB', Parse = 'Parse' }


	/** Properties to create and update Azure Cosmos DB database accounts. */
	export interface DatabaseAccountCreateUpdateProperties {

		/** List of Cosmos DB capabilities for the account */
		capabilities?: Array<Capability>;

		/** The cassandra connector offer type for the Cosmos DB C* database account. */
		connectorOffer?: ConnectorOffer | null;

		/** The consistency policy for the Cosmos DB database account. */
		consistencyPolicy?: ConsistencyPolicy;

		/**
		 * The offer type for the Cosmos DB database account.
		 * Required
		 */
		databaseAccountOfferType: DatabaseAccountCreateUpdatePropertiesDatabaseAccountOfferType;

		/** Disable write operations on metadata resources (databases, containers, throughput) via account keys */
		disableKeyBasedMetadataWriteAccess?: boolean | null;

		/** Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. */
		enableAutomaticFailover?: boolean | null;

		/** Enables the cassandra connector on the Cosmos DB C* account */
		enableCassandraConnector?: boolean | null;

		/** Enables the account to write in multiple locations */
		enableMultipleWriteLocations?: boolean | null;

		/** Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces. */
		ipRangeFilter?: string | null;

		/** Flag to indicate whether to enable/disable Virtual Network ACL rules. */
		isVirtualNetworkFilterEnabled?: boolean | null;

		/** The URI of the key vault */
		keyVaultKeyUri?: string | null;

		/**
		 * An array that contains the georeplication locations enabled for the Cosmos DB account.
		 * Required
		 */
		locations: Array<Location>;

		/** List of Virtual Network ACL rules configured for the Cosmos DB account. */
		virtualNetworkRules?: Array<VirtualNetworkRule>;
	}

	/** Properties to create and update Azure Cosmos DB database accounts. */
	export interface DatabaseAccountCreateUpdatePropertiesFormProperties {

		/** The cassandra connector offer type for the Cosmos DB C* database account. */
		connectorOffer: FormControl<ConnectorOffer | null | undefined>,

		/**
		 * The offer type for the Cosmos DB database account.
		 * Required
		 */
		databaseAccountOfferType: FormControl<DatabaseAccountCreateUpdatePropertiesDatabaseAccountOfferType | null | undefined>,

		/** Disable write operations on metadata resources (databases, containers, throughput) via account keys */
		disableKeyBasedMetadataWriteAccess: FormControl<boolean | null | undefined>,

		/** Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. */
		enableAutomaticFailover: FormControl<boolean | null | undefined>,

		/** Enables the cassandra connector on the Cosmos DB C* account */
		enableCassandraConnector: FormControl<boolean | null | undefined>,

		/** Enables the account to write in multiple locations */
		enableMultipleWriteLocations: FormControl<boolean | null | undefined>,

		/** Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces. */
		ipRangeFilter: FormControl<string | null | undefined>,

		/** Flag to indicate whether to enable/disable Virtual Network ACL rules. */
		isVirtualNetworkFilterEnabled: FormControl<boolean | null | undefined>,

		/** The URI of the key vault */
		keyVaultKeyUri: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseAccountCreateUpdatePropertiesFormGroup() {
		return new FormGroup<DatabaseAccountCreateUpdatePropertiesFormProperties>({
			connectorOffer: new FormControl<ConnectorOffer | null | undefined>(undefined),
			databaseAccountOfferType: new FormControl<DatabaseAccountCreateUpdatePropertiesDatabaseAccountOfferType | null | undefined>(undefined, [Validators.required]),
			disableKeyBasedMetadataWriteAccess: new FormControl<boolean | null | undefined>(undefined),
			enableAutomaticFailover: new FormControl<boolean | null | undefined>(undefined),
			enableCassandraConnector: new FormControl<boolean | null | undefined>(undefined),
			enableMultipleWriteLocations: new FormControl<boolean | null | undefined>(undefined),
			ipRangeFilter: new FormControl<string | null | undefined>(undefined),
			isVirtualNetworkFilterEnabled: new FormControl<boolean | null | undefined>(undefined),
			keyVaultKeyUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseAccountCreateUpdatePropertiesDatabaseAccountOfferType { Standard = 'Standard' }


	/** A region in which the Azure Cosmos DB database account is deployed. */
	export interface Location {

		/** The connection endpoint for the specific region. Example: https://&lt;accountName&gt;-&lt;locationName&gt;.documents.azure.com:443/ */
		documentEndpoint?: string | null;

		/**
		 * The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
		 * Minimum: 0
		 */
		failoverPriority?: number | null;

		/** The unique identifier of the region within the database account. Example: &lt;accountName&gt;-&lt;locationName&gt;. */
		id?: string | null;

		/** Flag to indicate whether or not this region is an AvailabilityZone region */
		isZoneRedundant?: boolean | null;

		/** The name of the region. */
		locationName?: string | null;

		/** The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. */
		provisioningState?: string | null;
	}

	/** A region in which the Azure Cosmos DB database account is deployed. */
	export interface LocationFormProperties {

		/** The connection endpoint for the specific region. Example: https://&lt;accountName&gt;-&lt;locationName&gt;.documents.azure.com:443/ */
		documentEndpoint: FormControl<string | null | undefined>,

		/**
		 * The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
		 * Minimum: 0
		 */
		failoverPriority: FormControl<number | null | undefined>,

		/** The unique identifier of the region within the database account. Example: &lt;accountName&gt;-&lt;locationName&gt;. */
		id: FormControl<string | null | undefined>,

		/** Flag to indicate whether or not this region is an AvailabilityZone region */
		isZoneRedundant: FormControl<boolean | null | undefined>,

		/** The name of the region. */
		locationName: FormControl<string | null | undefined>,

		/** The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			documentEndpoint: new FormControl<string | null | undefined>(undefined),
			failoverPriority: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			id: new FormControl<string | null | undefined>(undefined),
			isZoneRedundant: new FormControl<boolean | null | undefined>(undefined),
			locationName: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Virtual Network ACL Rule object */
	export interface VirtualNetworkRule {

		/** Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}. */
		id?: string | null;

		/** Create firewall rule before the virtual network has vnet service endpoint enabled. */
		ignoreMissingVNetServiceEndpoint?: boolean | null;
	}

	/** Virtual Network ACL Rule object */
	export interface VirtualNetworkRuleFormProperties {

		/** Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}. */
		id: FormControl<string | null | undefined>,

		/** Create firewall rule before the virtual network has vnet service endpoint enabled. */
		ignoreMissingVNetServiceEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateVirtualNetworkRuleFormGroup() {
		return new FormGroup<VirtualNetworkRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			ignoreMissingVNetServiceEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Properties for the database account. */
	export interface DatabaseAccountGetProperties {

		/** List of Cosmos DB capabilities for the account */
		capabilities?: Array<Capability>;

		/** The cassandra connector offer type for the Cosmos DB C* database account. */
		connectorOffer?: ConnectorOffer | null;

		/** The consistency policy for the Cosmos DB database account. */
		consistencyPolicy?: ConsistencyPolicy;

		/** The offer type for the Cosmos DB database account. */
		databaseAccountOfferType?: DatabaseAccountCreateUpdatePropertiesDatabaseAccountOfferType | null;

		/** Disable write operations on metadata resources (databases, containers, throughput) via account keys */
		disableKeyBasedMetadataWriteAccess?: boolean | null;

		/** The connection endpoint for the Cosmos DB database account. */
		documentEndpoint?: string | null;

		/** Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. */
		enableAutomaticFailover?: boolean | null;

		/** Enables the cassandra connector on the Cosmos DB C* account */
		enableCassandraConnector?: boolean | null;

		/** Enables the account to write in multiple locations */
		enableMultipleWriteLocations?: boolean | null;

		/** An array that contains the regions ordered by their failover priorities. */
		failoverPolicies?: Array<FailoverPolicy>;

		/** Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces. */
		ipRangeFilter?: string | null;

		/** Flag to indicate whether to enable/disable Virtual Network ACL rules. */
		isVirtualNetworkFilterEnabled?: boolean | null;

		/** The URI of the key vault */
		keyVaultKeyUri?: string | null;

		/** An array that contains all of the locations enabled for the Cosmos DB account. */
		locations?: Array<Location>;

		/** The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. */
		provisioningState?: string | null;

		/** An array that contains of the read locations enabled for the Cosmos DB account. */
		readLocations?: Array<Location>;

		/** List of Virtual Network ACL rules configured for the Cosmos DB account. */
		virtualNetworkRules?: Array<VirtualNetworkRule>;

		/** An array that contains the write location for the Cosmos DB account. */
		writeLocations?: Array<Location>;
	}

	/** Properties for the database account. */
	export interface DatabaseAccountGetPropertiesFormProperties {

		/** The cassandra connector offer type for the Cosmos DB C* database account. */
		connectorOffer: FormControl<ConnectorOffer | null | undefined>,

		/** The offer type for the Cosmos DB database account. */
		databaseAccountOfferType: FormControl<DatabaseAccountCreateUpdatePropertiesDatabaseAccountOfferType | null | undefined>,

		/** Disable write operations on metadata resources (databases, containers, throughput) via account keys */
		disableKeyBasedMetadataWriteAccess: FormControl<boolean | null | undefined>,

		/** The connection endpoint for the Cosmos DB database account. */
		documentEndpoint: FormControl<string | null | undefined>,

		/** Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. */
		enableAutomaticFailover: FormControl<boolean | null | undefined>,

		/** Enables the cassandra connector on the Cosmos DB C* account */
		enableCassandraConnector: FormControl<boolean | null | undefined>,

		/** Enables the account to write in multiple locations */
		enableMultipleWriteLocations: FormControl<boolean | null | undefined>,

		/** Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces. */
		ipRangeFilter: FormControl<string | null | undefined>,

		/** Flag to indicate whether to enable/disable Virtual Network ACL rules. */
		isVirtualNetworkFilterEnabled: FormControl<boolean | null | undefined>,

		/** The URI of the key vault */
		keyVaultKeyUri: FormControl<string | null | undefined>,

		/** The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseAccountGetPropertiesFormGroup() {
		return new FormGroup<DatabaseAccountGetPropertiesFormProperties>({
			connectorOffer: new FormControl<ConnectorOffer | null | undefined>(undefined),
			databaseAccountOfferType: new FormControl<DatabaseAccountCreateUpdatePropertiesDatabaseAccountOfferType | null | undefined>(undefined),
			disableKeyBasedMetadataWriteAccess: new FormControl<boolean | null | undefined>(undefined),
			documentEndpoint: new FormControl<string | null | undefined>(undefined),
			enableAutomaticFailover: new FormControl<boolean | null | undefined>(undefined),
			enableCassandraConnector: new FormControl<boolean | null | undefined>(undefined),
			enableMultipleWriteLocations: new FormControl<boolean | null | undefined>(undefined),
			ipRangeFilter: new FormControl<string | null | undefined>(undefined),
			isVirtualNetworkFilterEnabled: new FormControl<boolean | null | undefined>(undefined),
			keyVaultKeyUri: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The failover policy for a given region of a database account. */
	export interface FailoverPolicy {

		/**
		 * The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
		 * Minimum: 0
		 */
		failoverPriority?: number | null;

		/** The unique identifier of the region in which the database account replicates to. Example: &lt;accountName&gt;-&lt;locationName&gt;. */
		id?: string | null;

		/** The name of the region in which the database account exists. */
		locationName?: string | null;
	}

	/** The failover policy for a given region of a database account. */
	export interface FailoverPolicyFormProperties {

		/**
		 * The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
		 * Minimum: 0
		 */
		failoverPriority: FormControl<number | null | undefined>,

		/** The unique identifier of the region in which the database account replicates to. Example: &lt;accountName&gt;-&lt;locationName&gt;. */
		id: FormControl<string | null | undefined>,

		/** The name of the region in which the database account exists. */
		locationName: FormControl<string | null | undefined>,
	}
	export function CreateFailoverPolicyFormGroup() {
		return new FormGroup<FailoverPolicyFormProperties>({
			failoverPriority: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			id: new FormControl<string | null | undefined>(undefined),
			locationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure Cosmos DB database account. */
	export interface DatabaseAccountGetResults {

		/** Indicates the type of database account. This can only be set at database account creation. */
		kind?: DatabaseAccountCreateUpdateParametersKind | null;

		/** Properties for the database account. */
		properties?: DatabaseAccountGetProperties;
	}

	/** An Azure Cosmos DB database account. */
	export interface DatabaseAccountGetResultsFormProperties {

		/** Indicates the type of database account. This can only be set at database account creation. */
		kind: FormControl<DatabaseAccountCreateUpdateParametersKind | null | undefined>,
	}
	export function CreateDatabaseAccountGetResultsFormGroup() {
		return new FormGroup<DatabaseAccountGetResultsFormProperties>({
			kind: new FormControl<DatabaseAccountCreateUpdateParametersKind | null | undefined>(undefined),
		});

	}


	/** The connection strings for the given database account. */
	export interface DatabaseAccountListConnectionStringsResult {

		/** An array that contains the connection strings for the Cosmos DB account. */
		connectionStrings?: Array<DatabaseAccountConnectionString>;
	}

	/** The connection strings for the given database account. */
	export interface DatabaseAccountListConnectionStringsResultFormProperties {
	}
	export function CreateDatabaseAccountListConnectionStringsResultFormGroup() {
		return new FormGroup<DatabaseAccountListConnectionStringsResultFormProperties>({
		});

	}


	/** The access keys for the given database account. */
	export interface DatabaseAccountListKeysResult extends DatabaseAccountListReadOnlyKeysResult {

		/** Base 64 encoded value of the primary read-write key. */
		primaryMasterKey?: string | null;

		/** Base 64 encoded value of the secondary read-write key. */
		secondaryMasterKey?: string | null;
	}

	/** The access keys for the given database account. */
	export interface DatabaseAccountListKeysResultFormProperties extends DatabaseAccountListReadOnlyKeysResultFormProperties {

		/** Base 64 encoded value of the primary read-write key. */
		primaryMasterKey: FormControl<string | null | undefined>,

		/** Base 64 encoded value of the secondary read-write key. */
		secondaryMasterKey: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseAccountListKeysResultFormGroup() {
		return new FormGroup<DatabaseAccountListKeysResultFormProperties>({
			primaryReadonlyMasterKey: new FormControl<string | null | undefined>(undefined),
			secondaryReadonlyMasterKey: new FormControl<string | null | undefined>(undefined),
			primaryMasterKey: new FormControl<string | null | undefined>(undefined),
			secondaryMasterKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The read-only access keys for the given database account. */
	export interface DatabaseAccountListReadOnlyKeysResult {

		/** Base 64 encoded value of the primary read-only key. */
		primaryReadonlyMasterKey?: string | null;

		/** Base 64 encoded value of the secondary read-only key. */
		secondaryReadonlyMasterKey?: string | null;
	}

	/** The read-only access keys for the given database account. */
	export interface DatabaseAccountListReadOnlyKeysResultFormProperties {

		/** Base 64 encoded value of the primary read-only key. */
		primaryReadonlyMasterKey: FormControl<string | null | undefined>,

		/** Base 64 encoded value of the secondary read-only key. */
		secondaryReadonlyMasterKey: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseAccountListReadOnlyKeysResultFormGroup() {
		return new FormGroup<DatabaseAccountListReadOnlyKeysResultFormProperties>({
			primaryReadonlyMasterKey: new FormControl<string | null | undefined>(undefined),
			secondaryReadonlyMasterKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The offer type for the Cosmos DB database account. */
	export enum DatabaseAccountOfferType { Standard = 'Standard' }


	/** Parameters to regenerate the keys within the database account. */
	export interface DatabaseAccountRegenerateKeyParameters {

		/**
		 * The access key to regenerate.
		 * Required
		 */
		keyKind: DatabaseAccountRegenerateKeyParametersKeyKind;
	}

	/** Parameters to regenerate the keys within the database account. */
	export interface DatabaseAccountRegenerateKeyParametersFormProperties {

		/**
		 * The access key to regenerate.
		 * Required
		 */
		keyKind: FormControl<DatabaseAccountRegenerateKeyParametersKeyKind | null | undefined>,
	}
	export function CreateDatabaseAccountRegenerateKeyParametersFormGroup() {
		return new FormGroup<DatabaseAccountRegenerateKeyParametersFormProperties>({
			keyKind: new FormControl<DatabaseAccountRegenerateKeyParametersKeyKind | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DatabaseAccountRegenerateKeyParametersKeyKind { primary = 'primary', secondary = 'secondary', primaryReadonly = 'primaryReadonly', secondaryReadonly = 'secondaryReadonly' }


	/** Parameters for patching Azure Cosmos DB database account properties. */
	export interface DatabaseAccountUpdateParameters {

		/** The location of the resource group to which the resource belongs. */
		location?: string | null;

		/** Properties to update Azure Cosmos DB database accounts. */
		properties?: DatabaseAccountUpdateProperties;

		/** Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". */
		tags?: Tags;
	}

	/** Parameters for patching Azure Cosmos DB database account properties. */
	export interface DatabaseAccountUpdateParametersFormProperties {

		/** The location of the resource group to which the resource belongs. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseAccountUpdateParametersFormGroup() {
		return new FormGroup<DatabaseAccountUpdateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties to update Azure Cosmos DB database accounts. */
	export interface DatabaseAccountUpdateProperties {

		/** List of Cosmos DB capabilities for the account */
		capabilities?: Array<Capability>;

		/** The cassandra connector offer type for the Cosmos DB C* database account. */
		connectorOffer?: ConnectorOffer | null;

		/** The consistency policy for the Cosmos DB database account. */
		consistencyPolicy?: ConsistencyPolicy;

		/** Disable write operations on metadata resources (databases, containers, throughput) via account keys */
		disableKeyBasedMetadataWriteAccess?: boolean | null;

		/** Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. */
		enableAutomaticFailover?: boolean | null;

		/** Enables the cassandra connector on the Cosmos DB C* account */
		enableCassandraConnector?: boolean | null;

		/** Enables the account to write in multiple locations */
		enableMultipleWriteLocations?: boolean | null;

		/** Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces. */
		ipRangeFilter?: string | null;

		/** Flag to indicate whether to enable/disable Virtual Network ACL rules. */
		isVirtualNetworkFilterEnabled?: boolean | null;

		/** The URI of the key vault */
		keyVaultKeyUri?: string | null;

		/** An array that contains the georeplication locations enabled for the Cosmos DB account. */
		locations?: Array<Location>;

		/** List of Virtual Network ACL rules configured for the Cosmos DB account. */
		virtualNetworkRules?: Array<VirtualNetworkRule>;
	}

	/** Properties to update Azure Cosmos DB database accounts. */
	export interface DatabaseAccountUpdatePropertiesFormProperties {

		/** The cassandra connector offer type for the Cosmos DB C* database account. */
		connectorOffer: FormControl<ConnectorOffer | null | undefined>,

		/** Disable write operations on metadata resources (databases, containers, throughput) via account keys */
		disableKeyBasedMetadataWriteAccess: FormControl<boolean | null | undefined>,

		/** Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. */
		enableAutomaticFailover: FormControl<boolean | null | undefined>,

		/** Enables the cassandra connector on the Cosmos DB C* account */
		enableCassandraConnector: FormControl<boolean | null | undefined>,

		/** Enables the account to write in multiple locations */
		enableMultipleWriteLocations: FormControl<boolean | null | undefined>,

		/** Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces. */
		ipRangeFilter: FormControl<string | null | undefined>,

		/** Flag to indicate whether to enable/disable Virtual Network ACL rules. */
		isVirtualNetworkFilterEnabled: FormControl<boolean | null | undefined>,

		/** The URI of the key vault */
		keyVaultKeyUri: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseAccountUpdatePropertiesFormGroup() {
		return new FormGroup<DatabaseAccountUpdatePropertiesFormProperties>({
			connectorOffer: new FormControl<ConnectorOffer | null | undefined>(undefined),
			disableKeyBasedMetadataWriteAccess: new FormControl<boolean | null | undefined>(undefined),
			enableAutomaticFailover: new FormControl<boolean | null | undefined>(undefined),
			enableCassandraConnector: new FormControl<boolean | null | undefined>(undefined),
			enableMultipleWriteLocations: new FormControl<boolean | null | undefined>(undefined),
			ipRangeFilter: new FormControl<string | null | undefined>(undefined),
			isVirtualNetworkFilterEnabled: new FormControl<boolean | null | undefined>(undefined),
			keyVaultKeyUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List operation response, that contains the database accounts and their properties. */
	export interface DatabaseAccountsListResult {

		/** List of database account and their properties. */
		value?: Array<DatabaseAccountGetResults>;
	}

	/** The List operation response, that contains the database accounts and their properties. */
	export interface DatabaseAccountsListResultFormProperties {
	}
	export function CreateDatabaseAccountsListResultFormGroup() {
		return new FormGroup<DatabaseAccountsListResultFormProperties>({
		});

	}


	/** Error Response. */
	export interface ErrorResponse {

		/** Error code. */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Error Response. */
	export interface ErrorResponseFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExcludedPath {

		/** The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) */
		path?: string | null;
	}
	export interface ExcludedPathFormProperties {

		/** The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) */
		path: FormControl<string | null | undefined>,
	}
	export function CreateExcludedPathFormGroup() {
		return new FormGroup<ExcludedPathFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The system generated resource properties associated with SQL databases, SQL containers, Gremlin databases and Gremlin graphs. */
	export interface ExtendedResourceProperties {

		/** A system generated property representing the resource etag required for optimistic concurrency control. */
		_etag?: string | null;

		/** A system generated property. A unique identifier. */
		_rid?: string | null;

		/** A system generated property that denotes the last updated timestamp of the resource. */
		_ts?: any;
	}

	/** The system generated resource properties associated with SQL databases, SQL containers, Gremlin databases and Gremlin graphs. */
	export interface ExtendedResourcePropertiesFormProperties {

		/** A system generated property representing the resource etag required for optimistic concurrency control. */
		_etag: FormControl<string | null | undefined>,

		/** A system generated property. A unique identifier. */
		_rid: FormControl<string | null | undefined>,

		/** A system generated property that denotes the last updated timestamp of the resource. */
		_ts: FormControl<any | null | undefined>,
	}
	export function CreateExtendedResourcePropertiesFormGroup() {
		return new FormGroup<ExtendedResourcePropertiesFormProperties>({
			_etag: new FormControl<string | null | undefined>(undefined),
			_rid: new FormControl<string | null | undefined>(undefined),
			_ts: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The list of new failover policies for the failover priority change. */
	export interface FailoverPolicies {

		/**
		 * List of failover policies.
		 * Required
		 */
		failoverPolicies: Array<FailoverPolicy>;
	}

	/** The list of new failover policies for the failover priority change. */
	export interface FailoverPoliciesFormProperties {
	}
	export function CreateFailoverPoliciesFormGroup() {
		return new FormGroup<FailoverPoliciesFormProperties>({
		});

	}


	/** Parameters to create and update Cosmos DB Gremlin database. */
	export interface GremlinDatabaseCreateUpdateParameters {

		/**
		 * Properties to create and update Azure Cosmos DB Gremlin database.
		 * Required
		 */
		properties: GremlinDatabaseCreateUpdateProperties;
	}

	/** Parameters to create and update Cosmos DB Gremlin database. */
	export interface GremlinDatabaseCreateUpdateParametersFormProperties {
	}
	export function CreateGremlinDatabaseCreateUpdateParametersFormGroup() {
		return new FormGroup<GremlinDatabaseCreateUpdateParametersFormProperties>({
		});

	}


	/** Properties to create and update Azure Cosmos DB Gremlin database. */
	export interface GremlinDatabaseCreateUpdateProperties {

		/**
		 * CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"
		 * Required
		 */
		options: CreateUpdateOptions;

		/**
		 * Cosmos DB Gremlin database resource object
		 * Required
		 */
		resource: GremlinDatabaseResource;
	}

	/** Properties to create and update Azure Cosmos DB Gremlin database. */
	export interface GremlinDatabaseCreateUpdatePropertiesFormProperties {
	}
	export function CreateGremlinDatabaseCreateUpdatePropertiesFormGroup() {
		return new FormGroup<GremlinDatabaseCreateUpdatePropertiesFormProperties>({
		});

	}


	/** Cosmos DB Gremlin database resource object */
	export interface GremlinDatabaseResource {

		/**
		 * Name of the Cosmos DB Gremlin database
		 * Required
		 */
		id: string;
	}

	/** Cosmos DB Gremlin database resource object */
	export interface GremlinDatabaseResourceFormProperties {

		/**
		 * Name of the Cosmos DB Gremlin database
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGremlinDatabaseResourceFormGroup() {
		return new FormGroup<GremlinDatabaseResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of an Azure Cosmos DB SQL database */
	export interface GremlinDatabaseGetProperties {
		resource?: GremlinDatabaseResource;
	}

	/** The properties of an Azure Cosmos DB SQL database */
	export interface GremlinDatabaseGetPropertiesFormProperties {
	}
	export function CreateGremlinDatabaseGetPropertiesFormGroup() {
		return new FormGroup<GremlinDatabaseGetPropertiesFormProperties>({
		});

	}


	/** An Azure Cosmos DB Gremlin database. */
	export interface GremlinDatabaseGetResults {

		/** The properties of an Azure Cosmos DB SQL database */
		properties?: GremlinDatabaseGetProperties;
	}

	/** An Azure Cosmos DB Gremlin database. */
	export interface GremlinDatabaseGetResultsFormProperties {
	}
	export function CreateGremlinDatabaseGetResultsFormGroup() {
		return new FormGroup<GremlinDatabaseGetResultsFormProperties>({
		});

	}


	/** The List operation response, that contains the Gremlin databases and their properties. */
	export interface GremlinDatabaseListResult {

		/** List of Gremlin databases and their properties. */
		value?: Array<GremlinDatabaseGetResults>;
	}

	/** The List operation response, that contains the Gremlin databases and their properties. */
	export interface GremlinDatabaseListResultFormProperties {
	}
	export function CreateGremlinDatabaseListResultFormGroup() {
		return new FormGroup<GremlinDatabaseListResultFormProperties>({
		});

	}


	/** Parameters to create and update Cosmos DB Gremlin graph. */
	export interface GremlinGraphCreateUpdateParameters {

		/**
		 * Properties to create and update Azure Cosmos DB Gremlin graph.
		 * Required
		 */
		properties: GremlinGraphCreateUpdateProperties;
	}

	/** Parameters to create and update Cosmos DB Gremlin graph. */
	export interface GremlinGraphCreateUpdateParametersFormProperties {
	}
	export function CreateGremlinGraphCreateUpdateParametersFormGroup() {
		return new FormGroup<GremlinGraphCreateUpdateParametersFormProperties>({
		});

	}


	/** Properties to create and update Azure Cosmos DB Gremlin graph. */
	export interface GremlinGraphCreateUpdateProperties {

		/**
		 * CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"
		 * Required
		 */
		options: CreateUpdateOptions;

		/**
		 * Cosmos DB Gremlin graph resource object
		 * Required
		 */
		resource: GremlinGraphResource;
	}

	/** Properties to create and update Azure Cosmos DB Gremlin graph. */
	export interface GremlinGraphCreateUpdatePropertiesFormProperties {
	}
	export function CreateGremlinGraphCreateUpdatePropertiesFormGroup() {
		return new FormGroup<GremlinGraphCreateUpdatePropertiesFormProperties>({
		});

	}


	/** Cosmos DB Gremlin graph resource object */
	export interface GremlinGraphResource {

		/** The conflict resolution policy for the container. */
		conflictResolutionPolicy?: ConflictResolutionPolicy;

		/** Default time to live */
		defaultTtl?: number | null;

		/**
		 * Name of the Cosmos DB Gremlin graph
		 * Required
		 */
		id: string;

		/** Cosmos DB indexing policy */
		indexingPolicy?: IndexingPolicy;

		/** The configuration of the partition key to be used for partitioning data into multiple partitions */
		partitionKey?: ContainerPartitionKey;

		/** The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service. */
		uniqueKeyPolicy?: UniqueKeyPolicy;
	}

	/** Cosmos DB Gremlin graph resource object */
	export interface GremlinGraphResourceFormProperties {

		/** Default time to live */
		defaultTtl: FormControl<number | null | undefined>,

		/**
		 * Name of the Cosmos DB Gremlin graph
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGremlinGraphResourceFormGroup() {
		return new FormGroup<GremlinGraphResourceFormProperties>({
			defaultTtl: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Cosmos DB indexing policy */
	export interface IndexingPolicy {

		/** Indicates if the indexing policy is automatic */
		automatic?: boolean | null;

		/** List of composite path list */
		compositeIndexes?: Array<Array<CompositePath>>;

		/** List of paths to exclude from indexing */
		excludedPaths?: Array<ExcludedPath>;

		/** List of paths to include in the indexing */
		includedPaths?: Array<IncludedPath>;

		/** Indicates the indexing mode. */
		indexingMode?: IndexingPolicyIndexingMode | null;

		/** List of spatial specifics */
		spatialIndexes?: Array<SpatialSpec>;
	}

	/** Cosmos DB indexing policy */
	export interface IndexingPolicyFormProperties {

		/** Indicates if the indexing policy is automatic */
		automatic: FormControl<boolean | null | undefined>,

		/** Indicates the indexing mode. */
		indexingMode: FormControl<IndexingPolicyIndexingMode | null | undefined>,
	}
	export function CreateIndexingPolicyFormGroup() {
		return new FormGroup<IndexingPolicyFormProperties>({
			automatic: new FormControl<boolean | null | undefined>(undefined),
			indexingMode: new FormControl<IndexingPolicyIndexingMode | null | undefined>(undefined),
		});

	}


	/** The paths that are included in indexing */
	export interface IncludedPath {

		/** List of indexes for this path */
		indexes?: Array<Indexes>;

		/** The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) */
		path?: string | null;
	}

	/** The paths that are included in indexing */
	export interface IncludedPathFormProperties {

		/** The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) */
		path: FormControl<string | null | undefined>,
	}
	export function CreateIncludedPathFormGroup() {
		return new FormGroup<IncludedPathFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The indexes for the path. */
	export interface Indexes {

		/** The datatype for which the indexing behavior is applied to. */
		dataType?: IndexesDataType | null;

		/** Indicates the type of index. */
		kind?: IndexesKind | null;

		/** The precision of the index. -1 is maximum precision. */
		precision?: number | null;
	}

	/** The indexes for the path. */
	export interface IndexesFormProperties {

		/** The datatype for which the indexing behavior is applied to. */
		dataType: FormControl<IndexesDataType | null | undefined>,

		/** Indicates the type of index. */
		kind: FormControl<IndexesKind | null | undefined>,

		/** The precision of the index. -1 is maximum precision. */
		precision: FormControl<number | null | undefined>,
	}
	export function CreateIndexesFormGroup() {
		return new FormGroup<IndexesFormProperties>({
			dataType: new FormControl<IndexesDataType | null | undefined>(undefined),
			kind: new FormControl<IndexesKind | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum IndexesDataType { String = 'String', Number = 'Number', Point = 'Point', Polygon = 'Polygon', LineString = 'LineString', MultiPolygon = 'MultiPolygon' }

	export enum IndexesKind { Hash = 'Hash', Range = 'Range', Spatial = 'Spatial' }

	export enum IndexingPolicyIndexingMode { Consistent = 'Consistent', Lazy = 'Lazy', None = 'None' }

	export interface SpatialSpec {

		/** The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) */
		path?: string | null;

		/** List of path's spatial type */
		types?: Array<SpatialType>;
	}
	export interface SpatialSpecFormProperties {

		/** The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) */
		path: FormControl<string | null | undefined>,
	}
	export function CreateSpatialSpecFormGroup() {
		return new FormGroup<SpatialSpecFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates the spatial type of index. */
	export enum SpatialType { Point = 'Point', LineString = 'LineString', Polygon = 'Polygon', MultiPolygon = 'MultiPolygon' }


	/** The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service. */
	export interface UniqueKeyPolicy {

		/** List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service. */
		uniqueKeys?: Array<UniqueKey>;
	}

	/** The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service. */
	export interface UniqueKeyPolicyFormProperties {
	}
	export function CreateUniqueKeyPolicyFormGroup() {
		return new FormGroup<UniqueKeyPolicyFormProperties>({
		});

	}


	/** The unique key on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service. */
	export interface UniqueKey {

		/** List of paths must be unique for each document in the Azure Cosmos DB service */
		paths?: Array<string>;
	}

	/** The unique key on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service. */
	export interface UniqueKeyFormProperties {
	}
	export function CreateUniqueKeyFormGroup() {
		return new FormGroup<UniqueKeyFormProperties>({
		});

	}


	/** The properties of an Azure Cosmos DB Gremlin graph */
	export interface GremlinGraphGetProperties {
		resource?: GremlinGraphResource;
	}

	/** The properties of an Azure Cosmos DB Gremlin graph */
	export interface GremlinGraphGetPropertiesFormProperties {
	}
	export function CreateGremlinGraphGetPropertiesFormGroup() {
		return new FormGroup<GremlinGraphGetPropertiesFormProperties>({
		});

	}


	/** An Azure Cosmos DB Gremlin graph. */
	export interface GremlinGraphGetResults {

		/** The properties of an Azure Cosmos DB Gremlin graph */
		properties?: GremlinGraphGetProperties;
	}

	/** An Azure Cosmos DB Gremlin graph. */
	export interface GremlinGraphGetResultsFormProperties {
	}
	export function CreateGremlinGraphGetResultsFormGroup() {
		return new FormGroup<GremlinGraphGetResultsFormProperties>({
		});

	}


	/** The List operation response, that contains the graphs and their properties. */
	export interface GremlinGraphListResult {

		/** List of graphs and their properties. */
		value?: Array<GremlinGraphGetResults>;
	}

	/** The List operation response, that contains the graphs and their properties. */
	export interface GremlinGraphListResultFormProperties {
	}
	export function CreateGremlinGraphListResultFormGroup() {
		return new FormGroup<GremlinGraphListResultFormProperties>({
		});

	}


	/** Metric data */
	export interface Metric {

		/** The end time for the metric (ISO-8601 format). */
		endTime?: Date | null;

		/** The metric values for the specified time window and timestep. */
		metricValues?: Array<MetricValue>;

		/** A metric name. */
		name?: MetricName;

		/** The start time for the metric (ISO-8601 format). */
		startTime?: Date | null;

		/** The time grain to be used to summarize the metric values. */
		timeGrain?: string | null;

		/** The unit of the metric. */
		unit?: MetricUnit | null;
	}

	/** Metric data */
	export interface MetricFormProperties {

		/** The end time for the metric (ISO-8601 format). */
		endTime: FormControl<Date | null | undefined>,

		/** The start time for the metric (ISO-8601 format). */
		startTime: FormControl<Date | null | undefined>,

		/** The time grain to be used to summarize the metric values. */
		timeGrain: FormControl<string | null | undefined>,

		/** The unit of the metric. */
		unit: FormControl<MetricUnit | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<MetricUnit | null | undefined>(undefined),
		});

	}


	/** Represents metrics values. */
	export interface MetricValue {

		/** The number of values for the metric. */
		_count?: string | null;

		/** The average value of the metric. */
		average?: number | null;

		/** The max value of the metric. */
		maximum?: number | null;

		/** The min value of the metric. */
		minimum?: number | null;

		/** The metric timestamp (ISO-8601 format). */
		timestamp?: Date | null;

		/** The total value of the metric. */
		total?: number | null;
	}

	/** Represents metrics values. */
	export interface MetricValueFormProperties {

		/** The number of values for the metric. */
		_count: FormControl<string | null | undefined>,

		/** The average value of the metric. */
		average: FormControl<number | null | undefined>,

		/** The max value of the metric. */
		maximum: FormControl<number | null | undefined>,

		/** The min value of the metric. */
		minimum: FormControl<number | null | undefined>,

		/** The metric timestamp (ISO-8601 format). */
		timestamp: FormControl<Date | null | undefined>,

		/** The total value of the metric. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateMetricValueFormGroup() {
		return new FormGroup<MetricValueFormProperties>({
			_count: new FormControl<string | null | undefined>(undefined),
			average: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MetricUnit { Count = 'Count', Bytes = 'Bytes', Seconds = 'Seconds', Percent = 'Percent', CountPerSecond = 'CountPerSecond', BytesPerSecond = 'BytesPerSecond', Milliseconds = 'Milliseconds' }


	/** The availability of the metric. */
	export interface MetricAvailability {

		/** The retention for the metric values. */
		retention?: string | null;

		/** The time grain to be used to summarize the metric values. */
		timeGrain?: string | null;
	}

	/** The availability of the metric. */
	export interface MetricAvailabilityFormProperties {

		/** The retention for the metric values. */
		retention: FormControl<string | null | undefined>,

		/** The time grain to be used to summarize the metric values. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateMetricAvailabilityFormGroup() {
		return new FormGroup<MetricAvailabilityFormProperties>({
			retention: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of a metric. */
	export interface MetricDefinition {

		/** The list of metric availabilities for the account. */
		metricAvailabilities?: Array<MetricAvailability>;

		/** A metric name. */
		name?: MetricName;

		/** The primary aggregation type of the metric. */
		primaryAggregationType?: MetricDefinitionPrimaryAggregationType | null;

		/** The resource uri of the database. */
		resourceUri?: string | null;

		/** The unit of the metric. */
		unit?: MetricUnit | null;
	}

	/** The definition of a metric. */
	export interface MetricDefinitionFormProperties {

		/** The primary aggregation type of the metric. */
		primaryAggregationType: FormControl<MetricDefinitionPrimaryAggregationType | null | undefined>,

		/** The resource uri of the database. */
		resourceUri: FormControl<string | null | undefined>,

		/** The unit of the metric. */
		unit: FormControl<MetricUnit | null | undefined>,
	}
	export function CreateMetricDefinitionFormGroup() {
		return new FormGroup<MetricDefinitionFormProperties>({
			primaryAggregationType: new FormControl<MetricDefinitionPrimaryAggregationType | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<MetricUnit | null | undefined>(undefined),
		});

	}

	export enum MetricDefinitionPrimaryAggregationType { None = 'None', Average = 'Average', Total = 'Total', Minimum = 'Minimum', Maximum = 'Maximum', Last = 'Last' }


	/** The response to a list metric definitions request. */
	export interface MetricDefinitionsListResult {

		/** The list of metric definitions for the account. */
		value?: Array<MetricDefinition>;
	}

	/** The response to a list metric definitions request. */
	export interface MetricDefinitionsListResultFormProperties {
	}
	export function CreateMetricDefinitionsListResultFormGroup() {
		return new FormGroup<MetricDefinitionsListResultFormProperties>({
		});

	}


	/** The response to a list metrics request. */
	export interface MetricListResult {

		/** The list of metrics for the account. */
		value?: Array<Metric>;
	}

	/** The response to a list metrics request. */
	export interface MetricListResultFormProperties {
	}
	export function CreateMetricListResultFormGroup() {
		return new FormGroup<MetricListResultFormProperties>({
		});

	}


	/** A metric name. */
	export interface MetricName {

		/** The friendly name of the metric. */
		localizedValue?: string | null;

		/** The name of the metric. */
		value?: string | null;
	}

	/** A metric name. */
	export interface MetricNameFormProperties {

		/** The friendly name of the metric. */
		localizedValue: FormControl<string | null | undefined>,

		/** The name of the metric. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetricNameFormGroup() {
		return new FormGroup<MetricNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to create and update Cosmos DB MongoDB collection. */
	export interface MongoDBCollectionCreateUpdateParameters {

		/**
		 * Properties to create and update Azure Cosmos DB MongoDB collection.
		 * Required
		 */
		properties: MongoDBCollectionCreateUpdateProperties;
	}

	/** Parameters to create and update Cosmos DB MongoDB collection. */
	export interface MongoDBCollectionCreateUpdateParametersFormProperties {
	}
	export function CreateMongoDBCollectionCreateUpdateParametersFormGroup() {
		return new FormGroup<MongoDBCollectionCreateUpdateParametersFormProperties>({
		});

	}


	/** Properties to create and update Azure Cosmos DB MongoDB collection. */
	export interface MongoDBCollectionCreateUpdateProperties {

		/**
		 * CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"
		 * Required
		 */
		options: CreateUpdateOptions;

		/**
		 * Cosmos DB MongoDB collection resource object
		 * Required
		 */
		resource: MongoDBCollectionResource;
	}

	/** Properties to create and update Azure Cosmos DB MongoDB collection. */
	export interface MongoDBCollectionCreateUpdatePropertiesFormProperties {
	}
	export function CreateMongoDBCollectionCreateUpdatePropertiesFormGroup() {
		return new FormGroup<MongoDBCollectionCreateUpdatePropertiesFormProperties>({
		});

	}


	/** Cosmos DB MongoDB collection resource object */
	export interface MongoDBCollectionResource {

		/**
		 * Name of the Cosmos DB MongoDB collection
		 * Required
		 */
		id: string;

		/** List of index keys */
		indexes?: Array<MongoIndex>;

		/** The shard key and partition kind pair, only support "Hash" partition kind */
		shardKey?: ShardKeys;
	}

	/** Cosmos DB MongoDB collection resource object */
	export interface MongoDBCollectionResourceFormProperties {

		/**
		 * Name of the Cosmos DB MongoDB collection
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateMongoDBCollectionResourceFormGroup() {
		return new FormGroup<MongoDBCollectionResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Cosmos DB MongoDB collection index key */
	export interface MongoIndex {

		/** Cosmos DB MongoDB collection resource object */
		key?: MongoIndexKeys;

		/** Cosmos DB MongoDB collection index options */
		options?: MongoIndexOptions;
	}

	/** Cosmos DB MongoDB collection index key */
	export interface MongoIndexFormProperties {
	}
	export function CreateMongoIndexFormGroup() {
		return new FormGroup<MongoIndexFormProperties>({
		});

	}


	/** Cosmos DB MongoDB collection resource object */
	export interface MongoIndexKeys {

		/** List of keys for each MongoDB collection in the Azure Cosmos DB service */
		keys?: Array<string>;
	}

	/** Cosmos DB MongoDB collection resource object */
	export interface MongoIndexKeysFormProperties {
	}
	export function CreateMongoIndexKeysFormGroup() {
		return new FormGroup<MongoIndexKeysFormProperties>({
		});

	}


	/** Cosmos DB MongoDB collection index options */
	export interface MongoIndexOptions {

		/** Expire after seconds */
		expireAfterSeconds?: number | null;

		/** Is unique or not */
		unique?: boolean | null;
	}

	/** Cosmos DB MongoDB collection index options */
	export interface MongoIndexOptionsFormProperties {

		/** Expire after seconds */
		expireAfterSeconds: FormControl<number | null | undefined>,

		/** Is unique or not */
		unique: FormControl<boolean | null | undefined>,
	}
	export function CreateMongoIndexOptionsFormGroup() {
		return new FormGroup<MongoIndexOptionsFormProperties>({
			expireAfterSeconds: new FormControl<number | null | undefined>(undefined),
			unique: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The shard key and partition kind pair, only support "Hash" partition kind */
	export interface ShardKeys {
	}

	/** The shard key and partition kind pair, only support "Hash" partition kind */
	export interface ShardKeysFormProperties {
	}
	export function CreateShardKeysFormGroup() {
		return new FormGroup<ShardKeysFormProperties>({
		});

	}


	/** The properties of an Azure Cosmos DB MongoDB collection */
	export interface MongoDBCollectionGetProperties {
		resource?: MongoDBCollectionResource;
	}

	/** The properties of an Azure Cosmos DB MongoDB collection */
	export interface MongoDBCollectionGetPropertiesFormProperties {
	}
	export function CreateMongoDBCollectionGetPropertiesFormGroup() {
		return new FormGroup<MongoDBCollectionGetPropertiesFormProperties>({
		});

	}


	/** An Azure Cosmos DB MongoDB collection. */
	export interface MongoDBCollectionGetResults {

		/** The properties of an Azure Cosmos DB MongoDB collection */
		properties?: MongoDBCollectionGetProperties;
	}

	/** An Azure Cosmos DB MongoDB collection. */
	export interface MongoDBCollectionGetResultsFormProperties {
	}
	export function CreateMongoDBCollectionGetResultsFormGroup() {
		return new FormGroup<MongoDBCollectionGetResultsFormProperties>({
		});

	}


	/** The List operation response, that contains the MongoDB collections and their properties. */
	export interface MongoDBCollectionListResult {

		/** List of MongoDB collections and their properties. */
		value?: Array<MongoDBCollectionGetResults>;
	}

	/** The List operation response, that contains the MongoDB collections and their properties. */
	export interface MongoDBCollectionListResultFormProperties {
	}
	export function CreateMongoDBCollectionListResultFormGroup() {
		return new FormGroup<MongoDBCollectionListResultFormProperties>({
		});

	}


	/** Parameters to create and update Cosmos DB MongoDB database. */
	export interface MongoDBDatabaseCreateUpdateParameters {

		/**
		 * Properties to create and update Azure Cosmos DB MongoDB database.
		 * Required
		 */
		properties: MongoDBDatabaseCreateUpdateProperties;
	}

	/** Parameters to create and update Cosmos DB MongoDB database. */
	export interface MongoDBDatabaseCreateUpdateParametersFormProperties {
	}
	export function CreateMongoDBDatabaseCreateUpdateParametersFormGroup() {
		return new FormGroup<MongoDBDatabaseCreateUpdateParametersFormProperties>({
		});

	}


	/** Properties to create and update Azure Cosmos DB MongoDB database. */
	export interface MongoDBDatabaseCreateUpdateProperties {

		/**
		 * CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"
		 * Required
		 */
		options: CreateUpdateOptions;

		/**
		 * Cosmos DB MongoDB database resource object
		 * Required
		 */
		resource: MongoDBDatabaseResource;
	}

	/** Properties to create and update Azure Cosmos DB MongoDB database. */
	export interface MongoDBDatabaseCreateUpdatePropertiesFormProperties {
	}
	export function CreateMongoDBDatabaseCreateUpdatePropertiesFormGroup() {
		return new FormGroup<MongoDBDatabaseCreateUpdatePropertiesFormProperties>({
		});

	}


	/** Cosmos DB MongoDB database resource object */
	export interface MongoDBDatabaseResource {

		/**
		 * Name of the Cosmos DB MongoDB database
		 * Required
		 */
		id: string;
	}

	/** Cosmos DB MongoDB database resource object */
	export interface MongoDBDatabaseResourceFormProperties {

		/**
		 * Name of the Cosmos DB MongoDB database
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateMongoDBDatabaseResourceFormGroup() {
		return new FormGroup<MongoDBDatabaseResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of an Azure Cosmos DB MongoDB database */
	export interface MongoDBDatabaseGetProperties {
		resource?: MongoDBDatabaseResource;
	}

	/** The properties of an Azure Cosmos DB MongoDB database */
	export interface MongoDBDatabaseGetPropertiesFormProperties {
	}
	export function CreateMongoDBDatabaseGetPropertiesFormGroup() {
		return new FormGroup<MongoDBDatabaseGetPropertiesFormProperties>({
		});

	}


	/** An Azure Cosmos DB MongoDB database. */
	export interface MongoDBDatabaseGetResults {

		/** The properties of an Azure Cosmos DB MongoDB database */
		properties?: MongoDBDatabaseGetProperties;
	}

	/** An Azure Cosmos DB MongoDB database. */
	export interface MongoDBDatabaseGetResultsFormProperties {
	}
	export function CreateMongoDBDatabaseGetResultsFormGroup() {
		return new FormGroup<MongoDBDatabaseGetResultsFormProperties>({
		});

	}


	/** The List operation response, that contains the MongoDB databases and their properties. */
	export interface MongoDBDatabaseListResult {

		/** List of MongoDB databases and their properties. */
		value?: Array<MongoDBDatabaseGetResults>;
	}

	/** The List operation response, that contains the MongoDB databases and their properties. */
	export interface MongoDBDatabaseListResultFormProperties {
	}
	export function CreateMongoDBDatabaseListResultFormGroup() {
		return new FormGroup<MongoDBDatabaseListResultFormProperties>({
		});

	}


	/** REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** REST API operation */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of operations supported by the Resource Provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metric values for a single partition. */
	export interface PartitionMetric extends Metric {

		/** The partition id (GUID identifier) of the metric values. */
		partitionId?: string | null;

		/** The partition key range id (integer identifier) of the metric values. */
		partitionKeyRangeId?: string | null;
	}

	/** The metric values for a single partition. */
	export interface PartitionMetricFormProperties extends MetricFormProperties {

		/** The partition id (GUID identifier) of the metric values. */
		partitionId: FormControl<string | null | undefined>,

		/** The partition key range id (integer identifier) of the metric values. */
		partitionKeyRangeId: FormControl<string | null | undefined>,
	}
	export function CreatePartitionMetricFormGroup() {
		return new FormGroup<PartitionMetricFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<MetricUnit | null | undefined>(undefined),
			partitionId: new FormControl<string | null | undefined>(undefined),
			partitionKeyRangeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a list partition metrics request. */
	export interface PartitionMetricListResult {

		/** The list of partition-level metrics for the account. */
		value?: Array<PartitionMetric>;
	}

	/** The response to a list partition metrics request. */
	export interface PartitionMetricListResultFormProperties {
	}
	export function CreatePartitionMetricListResultFormGroup() {
		return new FormGroup<PartitionMetricListResultFormProperties>({
		});

	}


	/** The partition level usage data for a usage request. */
	export interface PartitionUsage extends Usage {

		/** The partition id (GUID identifier) of the usages. */
		partitionId?: string | null;

		/** The partition key range id (integer identifier) of the usages. */
		partitionKeyRangeId?: string | null;
	}

	/** The partition level usage data for a usage request. */
	export interface PartitionUsageFormProperties extends UsageFormProperties {

		/** The partition id (GUID identifier) of the usages. */
		partitionId: FormControl<string | null | undefined>,

		/** The partition key range id (integer identifier) of the usages. */
		partitionKeyRangeId: FormControl<string | null | undefined>,
	}
	export function CreatePartitionUsageFormGroup() {
		return new FormGroup<PartitionUsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			quotaPeriod: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<MetricUnit | null | undefined>(undefined),
			partitionId: new FormControl<string | null | undefined>(undefined),
			partitionKeyRangeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a list partition level usage request. */
	export interface PartitionUsagesResult {

		/** The list of partition-level usages for the database. A usage is a point in time metric */
		value?: Array<PartitionUsage>;
	}

	/** The response to a list partition level usage request. */
	export interface PartitionUsagesResultFormProperties {
	}
	export function CreatePartitionUsagesResultFormGroup() {
		return new FormGroup<PartitionUsagesResultFormProperties>({
		});

	}


	/** Percentile Metric data */
	export interface PercentileMetric {

		/** The end time for the metric (ISO-8601 format). */
		endTime?: Date | null;

		/** The percentile metric values for the specified time window and timestep. */
		metricValues?: Array<PercentileMetricValue>;

		/** A metric name. */
		name?: MetricName;

		/** The start time for the metric (ISO-8601 format). */
		startTime?: Date | null;

		/** The time grain to be used to summarize the metric values. */
		timeGrain?: string | null;

		/** The unit of the metric. */
		unit?: MetricUnit | null;
	}

	/** Percentile Metric data */
	export interface PercentileMetricFormProperties {

		/** The end time for the metric (ISO-8601 format). */
		endTime: FormControl<Date | null | undefined>,

		/** The start time for the metric (ISO-8601 format). */
		startTime: FormControl<Date | null | undefined>,

		/** The time grain to be used to summarize the metric values. */
		timeGrain: FormControl<string | null | undefined>,

		/** The unit of the metric. */
		unit: FormControl<MetricUnit | null | undefined>,
	}
	export function CreatePercentileMetricFormGroup() {
		return new FormGroup<PercentileMetricFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<MetricUnit | null | undefined>(undefined),
		});

	}


	/** Represents percentile metrics values. */
	export interface PercentileMetricValue extends MetricValue {

		/** The 10th percentile value for the metric. */
		P10?: number | null;

		/** The 25th percentile value for the metric. */
		P25?: number | null;

		/** The 50th percentile value for the metric. */
		P50?: number | null;

		/** The 75th percentile value for the metric. */
		P75?: number | null;

		/** The 90th percentile value for the metric. */
		P90?: number | null;

		/** The 95th percentile value for the metric. */
		P95?: number | null;

		/** The 99th percentile value for the metric. */
		P99?: number | null;
	}

	/** Represents percentile metrics values. */
	export interface PercentileMetricValueFormProperties extends MetricValueFormProperties {

		/** The 10th percentile value for the metric. */
		P10: FormControl<number | null | undefined>,

		/** The 25th percentile value for the metric. */
		P25: FormControl<number | null | undefined>,

		/** The 50th percentile value for the metric. */
		P50: FormControl<number | null | undefined>,

		/** The 75th percentile value for the metric. */
		P75: FormControl<number | null | undefined>,

		/** The 90th percentile value for the metric. */
		P90: FormControl<number | null | undefined>,

		/** The 95th percentile value for the metric. */
		P95: FormControl<number | null | undefined>,

		/** The 99th percentile value for the metric. */
		P99: FormControl<number | null | undefined>,
	}
	export function CreatePercentileMetricValueFormGroup() {
		return new FormGroup<PercentileMetricValueFormProperties>({
			_count: new FormControl<string | null | undefined>(undefined),
			average: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			P10: new FormControl<number | null | undefined>(undefined),
			P25: new FormControl<number | null | undefined>(undefined),
			P50: new FormControl<number | null | undefined>(undefined),
			P75: new FormControl<number | null | undefined>(undefined),
			P90: new FormControl<number | null | undefined>(undefined),
			P95: new FormControl<number | null | undefined>(undefined),
			P99: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response to a list percentile metrics request. */
	export interface PercentileMetricListResult {

		/** The list of percentile metrics for the account. */
		value?: Array<PercentileMetric>;
	}

	/** The response to a list percentile metrics request. */
	export interface PercentileMetricListResultFormProperties {
	}
	export function CreatePercentileMetricListResultFormGroup() {
		return new FormGroup<PercentileMetricListResultFormProperties>({
		});

	}


	/** Cosmos DB region to online or offline. */
	export interface RegionForOnlineOffline {

		/**
		 * Cosmos DB region, with spaces between words and each word capitalized.
		 * Required
		 */
		region: string;
	}

	/** Cosmos DB region to online or offline. */
	export interface RegionForOnlineOfflineFormProperties {

		/**
		 * Cosmos DB region, with spaces between words and each word capitalized.
		 * Required
		 */
		region: FormControl<string | null | undefined>,
	}
	export function CreateRegionForOnlineOfflineFormGroup() {
		return new FormGroup<RegionForOnlineOfflineFormProperties>({
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters to create and update Cosmos DB container. */
	export interface SqlContainerCreateUpdateParameters {

		/**
		 * Properties to create and update Azure Cosmos DB container.
		 * Required
		 */
		properties: SqlContainerCreateUpdateProperties;
	}

	/** Parameters to create and update Cosmos DB container. */
	export interface SqlContainerCreateUpdateParametersFormProperties {
	}
	export function CreateSqlContainerCreateUpdateParametersFormGroup() {
		return new FormGroup<SqlContainerCreateUpdateParametersFormProperties>({
		});

	}


	/** Properties to create and update Azure Cosmos DB container. */
	export interface SqlContainerCreateUpdateProperties {

		/**
		 * CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"
		 * Required
		 */
		options: CreateUpdateOptions;

		/**
		 * Cosmos DB SQL container resource object
		 * Required
		 */
		resource: SqlContainerResource;
	}

	/** Properties to create and update Azure Cosmos DB container. */
	export interface SqlContainerCreateUpdatePropertiesFormProperties {
	}
	export function CreateSqlContainerCreateUpdatePropertiesFormGroup() {
		return new FormGroup<SqlContainerCreateUpdatePropertiesFormProperties>({
		});

	}


	/** Cosmos DB SQL container resource object */
	export interface SqlContainerResource {

		/** The conflict resolution policy for the container. */
		conflictResolutionPolicy?: ConflictResolutionPolicy;

		/** Default time to live */
		defaultTtl?: number | null;

		/**
		 * Name of the Cosmos DB SQL container
		 * Required
		 */
		id: string;

		/** Cosmos DB indexing policy */
		indexingPolicy?: IndexingPolicy;

		/** The configuration of the partition key to be used for partitioning data into multiple partitions */
		partitionKey?: ContainerPartitionKey;

		/** The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service. */
		uniqueKeyPolicy?: UniqueKeyPolicy;
	}

	/** Cosmos DB SQL container resource object */
	export interface SqlContainerResourceFormProperties {

		/** Default time to live */
		defaultTtl: FormControl<number | null | undefined>,

		/**
		 * Name of the Cosmos DB SQL container
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSqlContainerResourceFormGroup() {
		return new FormGroup<SqlContainerResourceFormProperties>({
			defaultTtl: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of an Azure Cosmos DB container */
	export interface SqlContainerGetProperties {
		resource?: SqlContainerResource;
	}

	/** The properties of an Azure Cosmos DB container */
	export interface SqlContainerGetPropertiesFormProperties {
	}
	export function CreateSqlContainerGetPropertiesFormGroup() {
		return new FormGroup<SqlContainerGetPropertiesFormProperties>({
		});

	}


	/** An Azure Cosmos DB container. */
	export interface SqlContainerGetResults {

		/** The properties of an Azure Cosmos DB container */
		properties?: SqlContainerGetProperties;
	}

	/** An Azure Cosmos DB container. */
	export interface SqlContainerGetResultsFormProperties {
	}
	export function CreateSqlContainerGetResultsFormGroup() {
		return new FormGroup<SqlContainerGetResultsFormProperties>({
		});

	}


	/** The List operation response, that contains the containers and their properties. */
	export interface SqlContainerListResult {

		/** List of containers and their properties. */
		value?: Array<SqlContainerGetResults>;
	}

	/** The List operation response, that contains the containers and their properties. */
	export interface SqlContainerListResultFormProperties {
	}
	export function CreateSqlContainerListResultFormGroup() {
		return new FormGroup<SqlContainerListResultFormProperties>({
		});

	}


	/** Parameters to create and update Cosmos DB SQL database. */
	export interface SqlDatabaseCreateUpdateParameters {

		/**
		 * Properties to create and update Azure Cosmos DB SQL database.
		 * Required
		 */
		properties: SqlDatabaseCreateUpdateProperties;
	}

	/** Parameters to create and update Cosmos DB SQL database. */
	export interface SqlDatabaseCreateUpdateParametersFormProperties {
	}
	export function CreateSqlDatabaseCreateUpdateParametersFormGroup() {
		return new FormGroup<SqlDatabaseCreateUpdateParametersFormProperties>({
		});

	}


	/** Properties to create and update Azure Cosmos DB SQL database. */
	export interface SqlDatabaseCreateUpdateProperties {

		/**
		 * CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"
		 * Required
		 */
		options: CreateUpdateOptions;

		/**
		 * Cosmos DB SQL database resource object
		 * Required
		 */
		resource: SqlDatabaseResource;
	}

	/** Properties to create and update Azure Cosmos DB SQL database. */
	export interface SqlDatabaseCreateUpdatePropertiesFormProperties {
	}
	export function CreateSqlDatabaseCreateUpdatePropertiesFormGroup() {
		return new FormGroup<SqlDatabaseCreateUpdatePropertiesFormProperties>({
		});

	}


	/** Cosmos DB SQL database resource object */
	export interface SqlDatabaseResource {

		/**
		 * Name of the Cosmos DB SQL database
		 * Required
		 */
		id: string;
	}

	/** Cosmos DB SQL database resource object */
	export interface SqlDatabaseResourceFormProperties {

		/**
		 * Name of the Cosmos DB SQL database
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSqlDatabaseResourceFormGroup() {
		return new FormGroup<SqlDatabaseResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of an Azure Cosmos DB SQL database */
	export interface SqlDatabaseGetProperties {
		resource?: SqlDatabaseResource;
	}

	/** The properties of an Azure Cosmos DB SQL database */
	export interface SqlDatabaseGetPropertiesFormProperties {
	}
	export function CreateSqlDatabaseGetPropertiesFormGroup() {
		return new FormGroup<SqlDatabaseGetPropertiesFormProperties>({
		});

	}


	/** An Azure Cosmos DB SQL database. */
	export interface SqlDatabaseGetResults {

		/** The properties of an Azure Cosmos DB SQL database */
		properties?: SqlDatabaseGetProperties;
	}

	/** An Azure Cosmos DB SQL database. */
	export interface SqlDatabaseGetResultsFormProperties {
	}
	export function CreateSqlDatabaseGetResultsFormGroup() {
		return new FormGroup<SqlDatabaseGetResultsFormProperties>({
		});

	}


	/** The List operation response, that contains the SQL databases and their properties. */
	export interface SqlDatabaseListResult {

		/** List of SQL databases and their properties. */
		value?: Array<SqlDatabaseGetResults>;
	}

	/** The List operation response, that contains the SQL databases and their properties. */
	export interface SqlDatabaseListResultFormProperties {
	}
	export function CreateSqlDatabaseListResultFormGroup() {
		return new FormGroup<SqlDatabaseListResultFormProperties>({
		});

	}


	/** Parameters to create and update Cosmos DB storedProcedure. */
	export interface SqlStoredProcedureCreateUpdateParameters {

		/**
		 * Properties to create and update Azure Cosmos DB storedProcedure.
		 * Required
		 */
		properties: SqlStoredProcedureCreateUpdateProperties;
	}

	/** Parameters to create and update Cosmos DB storedProcedure. */
	export interface SqlStoredProcedureCreateUpdateParametersFormProperties {
	}
	export function CreateSqlStoredProcedureCreateUpdateParametersFormGroup() {
		return new FormGroup<SqlStoredProcedureCreateUpdateParametersFormProperties>({
		});

	}


	/** Properties to create and update Azure Cosmos DB storedProcedure. */
	export interface SqlStoredProcedureCreateUpdateProperties {

		/**
		 * CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"
		 * Required
		 */
		options: CreateUpdateOptions;

		/**
		 * Cosmos DB SQL storedProcedure resource object
		 * Required
		 */
		resource: SqlStoredProcedureResource;
	}

	/** Properties to create and update Azure Cosmos DB storedProcedure. */
	export interface SqlStoredProcedureCreateUpdatePropertiesFormProperties {
	}
	export function CreateSqlStoredProcedureCreateUpdatePropertiesFormGroup() {
		return new FormGroup<SqlStoredProcedureCreateUpdatePropertiesFormProperties>({
		});

	}


	/** Cosmos DB SQL storedProcedure resource object */
	export interface SqlStoredProcedureResource {

		/** Body of the Stored Procedure */
		body?: string | null;

		/**
		 * Name of the Cosmos DB SQL storedProcedure
		 * Required
		 */
		id: string;
	}

	/** Cosmos DB SQL storedProcedure resource object */
	export interface SqlStoredProcedureResourceFormProperties {

		/** Body of the Stored Procedure */
		body: FormControl<string | null | undefined>,

		/**
		 * Name of the Cosmos DB SQL storedProcedure
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSqlStoredProcedureResourceFormGroup() {
		return new FormGroup<SqlStoredProcedureResourceFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of an Azure Cosmos DB StoredProcedure */
	export interface SqlStoredProcedureGetProperties {
		resource?: SqlStoredProcedureResource;
	}

	/** The properties of an Azure Cosmos DB StoredProcedure */
	export interface SqlStoredProcedureGetPropertiesFormProperties {
	}
	export function CreateSqlStoredProcedureGetPropertiesFormGroup() {
		return new FormGroup<SqlStoredProcedureGetPropertiesFormProperties>({
		});

	}


	/** An Azure Cosmos DB storedProcedure. */
	export interface SqlStoredProcedureGetResults {

		/** The properties of an Azure Cosmos DB StoredProcedure */
		properties?: SqlStoredProcedureGetProperties;
	}

	/** An Azure Cosmos DB storedProcedure. */
	export interface SqlStoredProcedureGetResultsFormProperties {
	}
	export function CreateSqlStoredProcedureGetResultsFormGroup() {
		return new FormGroup<SqlStoredProcedureGetResultsFormProperties>({
		});

	}


	/** The List operation response, that contains the storedProcedures and their properties. */
	export interface SqlStoredProcedureListResult {

		/** List of storedProcedures and their properties. */
		value?: Array<SqlStoredProcedureGetResults>;
	}

	/** The List operation response, that contains the storedProcedures and their properties. */
	export interface SqlStoredProcedureListResultFormProperties {
	}
	export function CreateSqlStoredProcedureListResultFormGroup() {
		return new FormGroup<SqlStoredProcedureListResultFormProperties>({
		});

	}


	/** Parameters to create and update Cosmos DB trigger. */
	export interface SqlTriggerCreateUpdateParameters {

		/**
		 * Properties to create and update Azure Cosmos DB trigger.
		 * Required
		 */
		properties: SqlTriggerCreateUpdateProperties;
	}

	/** Parameters to create and update Cosmos DB trigger. */
	export interface SqlTriggerCreateUpdateParametersFormProperties {
	}
	export function CreateSqlTriggerCreateUpdateParametersFormGroup() {
		return new FormGroup<SqlTriggerCreateUpdateParametersFormProperties>({
		});

	}


	/** Properties to create and update Azure Cosmos DB trigger. */
	export interface SqlTriggerCreateUpdateProperties {

		/**
		 * CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"
		 * Required
		 */
		options: CreateUpdateOptions;

		/**
		 * Cosmos DB SQL trigger resource object
		 * Required
		 */
		resource: SqlTriggerResource;
	}

	/** Properties to create and update Azure Cosmos DB trigger. */
	export interface SqlTriggerCreateUpdatePropertiesFormProperties {
	}
	export function CreateSqlTriggerCreateUpdatePropertiesFormGroup() {
		return new FormGroup<SqlTriggerCreateUpdatePropertiesFormProperties>({
		});

	}


	/** Cosmos DB SQL trigger resource object */
	export interface SqlTriggerResource {

		/** Body of the Trigger */
		body?: string | null;

		/**
		 * Name of the Cosmos DB SQL trigger
		 * Required
		 */
		id: string;

		/** The operation the trigger is associated with */
		triggerOperation?: SqlTriggerResourceTriggerOperation | null;

		/** Type of the Trigger */
		triggerType?: SqlTriggerResourceTriggerType | null;
	}

	/** Cosmos DB SQL trigger resource object */
	export interface SqlTriggerResourceFormProperties {

		/** Body of the Trigger */
		body: FormControl<string | null | undefined>,

		/**
		 * Name of the Cosmos DB SQL trigger
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The operation the trigger is associated with */
		triggerOperation: FormControl<SqlTriggerResourceTriggerOperation | null | undefined>,

		/** Type of the Trigger */
		triggerType: FormControl<SqlTriggerResourceTriggerType | null | undefined>,
	}
	export function CreateSqlTriggerResourceFormGroup() {
		return new FormGroup<SqlTriggerResourceFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			triggerOperation: new FormControl<SqlTriggerResourceTriggerOperation | null | undefined>(undefined),
			triggerType: new FormControl<SqlTriggerResourceTriggerType | null | undefined>(undefined),
		});

	}

	export enum SqlTriggerResourceTriggerOperation { All = 'All', Create = 'Create', Update = 'Update', Delete = 'Delete', Replace = 'Replace' }

	export enum SqlTriggerResourceTriggerType { Pre = 'Pre', Post = 'Post' }


	/** The properties of an Azure Cosmos DB trigger */
	export interface SqlTriggerGetProperties {
		resource?: SqlTriggerResource;
	}

	/** The properties of an Azure Cosmos DB trigger */
	export interface SqlTriggerGetPropertiesFormProperties {
	}
	export function CreateSqlTriggerGetPropertiesFormGroup() {
		return new FormGroup<SqlTriggerGetPropertiesFormProperties>({
		});

	}


	/** An Azure Cosmos DB trigger. */
	export interface SqlTriggerGetResults {

		/** The properties of an Azure Cosmos DB trigger */
		properties?: SqlTriggerGetProperties;
	}

	/** An Azure Cosmos DB trigger. */
	export interface SqlTriggerGetResultsFormProperties {
	}
	export function CreateSqlTriggerGetResultsFormGroup() {
		return new FormGroup<SqlTriggerGetResultsFormProperties>({
		});

	}


	/** The List operation response, that contains the triggers and their properties. */
	export interface SqlTriggerListResult {

		/** List of triggers and their properties. */
		value?: Array<SqlTriggerGetResults>;
	}

	/** The List operation response, that contains the triggers and their properties. */
	export interface SqlTriggerListResultFormProperties {
	}
	export function CreateSqlTriggerListResultFormGroup() {
		return new FormGroup<SqlTriggerListResultFormProperties>({
		});

	}


	/** Parameters to create and update Cosmos DB userDefinedFunction. */
	export interface SqlUserDefinedFunctionCreateUpdateParameters {

		/**
		 * Properties to create and update Azure Cosmos DB userDefinedFunction.
		 * Required
		 */
		properties: SqlUserDefinedFunctionCreateUpdateProperties;
	}

	/** Parameters to create and update Cosmos DB userDefinedFunction. */
	export interface SqlUserDefinedFunctionCreateUpdateParametersFormProperties {
	}
	export function CreateSqlUserDefinedFunctionCreateUpdateParametersFormGroup() {
		return new FormGroup<SqlUserDefinedFunctionCreateUpdateParametersFormProperties>({
		});

	}


	/** Properties to create and update Azure Cosmos DB userDefinedFunction. */
	export interface SqlUserDefinedFunctionCreateUpdateProperties {

		/**
		 * CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"
		 * Required
		 */
		options: CreateUpdateOptions;

		/**
		 * Cosmos DB SQL userDefinedFunction resource object
		 * Required
		 */
		resource: SqlUserDefinedFunctionResource;
	}

	/** Properties to create and update Azure Cosmos DB userDefinedFunction. */
	export interface SqlUserDefinedFunctionCreateUpdatePropertiesFormProperties {
	}
	export function CreateSqlUserDefinedFunctionCreateUpdatePropertiesFormGroup() {
		return new FormGroup<SqlUserDefinedFunctionCreateUpdatePropertiesFormProperties>({
		});

	}


	/** Cosmos DB SQL userDefinedFunction resource object */
	export interface SqlUserDefinedFunctionResource {

		/** Body of the User Defined Function */
		body?: string | null;

		/**
		 * Name of the Cosmos DB SQL userDefinedFunction
		 * Required
		 */
		id: string;
	}

	/** Cosmos DB SQL userDefinedFunction resource object */
	export interface SqlUserDefinedFunctionResourceFormProperties {

		/** Body of the User Defined Function */
		body: FormControl<string | null | undefined>,

		/**
		 * Name of the Cosmos DB SQL userDefinedFunction
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSqlUserDefinedFunctionResourceFormGroup() {
		return new FormGroup<SqlUserDefinedFunctionResourceFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of an Azure Cosmos DB userDefinedFunction */
	export interface SqlUserDefinedFunctionGetProperties {
		resource?: SqlUserDefinedFunctionResource;
	}

	/** The properties of an Azure Cosmos DB userDefinedFunction */
	export interface SqlUserDefinedFunctionGetPropertiesFormProperties {
	}
	export function CreateSqlUserDefinedFunctionGetPropertiesFormGroup() {
		return new FormGroup<SqlUserDefinedFunctionGetPropertiesFormProperties>({
		});

	}


	/** An Azure Cosmos DB userDefinedFunction. */
	export interface SqlUserDefinedFunctionGetResults {

		/** The properties of an Azure Cosmos DB userDefinedFunction */
		properties?: SqlUserDefinedFunctionGetProperties;
	}

	/** An Azure Cosmos DB userDefinedFunction. */
	export interface SqlUserDefinedFunctionGetResultsFormProperties {
	}
	export function CreateSqlUserDefinedFunctionGetResultsFormGroup() {
		return new FormGroup<SqlUserDefinedFunctionGetResultsFormProperties>({
		});

	}


	/** The List operation response, that contains the userDefinedFunctions and their properties. */
	export interface SqlUserDefinedFunctionListResult {

		/** List of userDefinedFunctions and their properties. */
		value?: Array<SqlUserDefinedFunctionGetResults>;
	}

	/** The List operation response, that contains the userDefinedFunctions and their properties. */
	export interface SqlUserDefinedFunctionListResultFormProperties {
	}
	export function CreateSqlUserDefinedFunctionListResultFormGroup() {
		return new FormGroup<SqlUserDefinedFunctionListResultFormProperties>({
		});

	}


	/** Parameters to create and update Cosmos DB Table. */
	export interface TableCreateUpdateParameters {

		/**
		 * Properties to create and update Azure Cosmos DB Table.
		 * Required
		 */
		properties: TableCreateUpdateProperties;
	}

	/** Parameters to create and update Cosmos DB Table. */
	export interface TableCreateUpdateParametersFormProperties {
	}
	export function CreateTableCreateUpdateParametersFormGroup() {
		return new FormGroup<TableCreateUpdateParametersFormProperties>({
		});

	}


	/** Properties to create and update Azure Cosmos DB Table. */
	export interface TableCreateUpdateProperties {

		/**
		 * CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput"
		 * Required
		 */
		options: CreateUpdateOptions;

		/**
		 * Cosmos DB table resource object
		 * Required
		 */
		resource: TableResource;
	}

	/** Properties to create and update Azure Cosmos DB Table. */
	export interface TableCreateUpdatePropertiesFormProperties {
	}
	export function CreateTableCreateUpdatePropertiesFormGroup() {
		return new FormGroup<TableCreateUpdatePropertiesFormProperties>({
		});

	}


	/** Cosmos DB table resource object */
	export interface TableResource {

		/**
		 * Name of the Cosmos DB table
		 * Required
		 */
		id: string;
	}

	/** Cosmos DB table resource object */
	export interface TableResourceFormProperties {

		/**
		 * Name of the Cosmos DB table
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateTableResourceFormGroup() {
		return new FormGroup<TableResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of an Azure Cosmos Table */
	export interface TableGetProperties {
		resource?: TableResource;
	}

	/** The properties of an Azure Cosmos Table */
	export interface TableGetPropertiesFormProperties {
	}
	export function CreateTableGetPropertiesFormGroup() {
		return new FormGroup<TableGetPropertiesFormProperties>({
		});

	}


	/** An Azure Cosmos DB Table. */
	export interface TableGetResults {

		/** The properties of an Azure Cosmos Table */
		properties?: TableGetProperties;
	}

	/** An Azure Cosmos DB Table. */
	export interface TableGetResultsFormProperties {
	}
	export function CreateTableGetResultsFormGroup() {
		return new FormGroup<TableGetResultsFormProperties>({
		});

	}


	/** The List operation response, that contains the Table and their properties. */
	export interface TableListResult {

		/** List of Table and their properties. */
		value?: Array<TableGetResults>;
	}

	/** The List operation response, that contains the Table and their properties. */
	export interface TableListResultFormProperties {
	}
	export function CreateTableListResultFormGroup() {
		return new FormGroup<TableListResultFormProperties>({
		});

	}


	/** The properties of an Azure Cosmos DB resource throughput */
	export interface ThroughputSettingsGetProperties {
		resource?: ThroughputSettingsResource;
	}

	/** The properties of an Azure Cosmos DB resource throughput */
	export interface ThroughputSettingsGetPropertiesFormProperties {
	}
	export function CreateThroughputSettingsGetPropertiesFormGroup() {
		return new FormGroup<ThroughputSettingsGetPropertiesFormProperties>({
		});

	}


	/** Cosmos DB resource throughput object */
	export interface ThroughputSettingsResource {

		/** The minimum throughput of the resource */
		minimumThroughput?: string | null;

		/** The throughput replace is pending */
		offerReplacePending?: string | null;

		/**
		 * Value of the Cosmos DB resource throughput
		 * Required
		 */
		throughput: number;
	}

	/** Cosmos DB resource throughput object */
	export interface ThroughputSettingsResourceFormProperties {

		/** The minimum throughput of the resource */
		minimumThroughput: FormControl<string | null | undefined>,

		/** The throughput replace is pending */
		offerReplacePending: FormControl<string | null | undefined>,

		/**
		 * Value of the Cosmos DB resource throughput
		 * Required
		 */
		throughput: FormControl<number | null | undefined>,
	}
	export function CreateThroughputSettingsResourceFormGroup() {
		return new FormGroup<ThroughputSettingsResourceFormProperties>({
			minimumThroughput: new FormControl<string | null | undefined>(undefined),
			offerReplacePending: new FormControl<string | null | undefined>(undefined),
			throughput: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An Azure Cosmos DB resource throughput. */
	export interface ThroughputSettingsGetResults {

		/** The properties of an Azure Cosmos DB resource throughput */
		properties?: ThroughputSettingsGetProperties;
	}

	/** An Azure Cosmos DB resource throughput. */
	export interface ThroughputSettingsGetResultsFormProperties {
	}
	export function CreateThroughputSettingsGetResultsFormGroup() {
		return new FormGroup<ThroughputSettingsGetResultsFormProperties>({
		});

	}


	/** Parameters to update Cosmos DB resource throughput. */
	export interface ThroughputSettingsUpdateParameters {

		/**
		 * Properties to update Azure Cosmos DB resource throughput.
		 * Required
		 */
		properties: ThroughputSettingsUpdateProperties;
	}

	/** Parameters to update Cosmos DB resource throughput. */
	export interface ThroughputSettingsUpdateParametersFormProperties {
	}
	export function CreateThroughputSettingsUpdateParametersFormGroup() {
		return new FormGroup<ThroughputSettingsUpdateParametersFormProperties>({
		});

	}


	/** Properties to update Azure Cosmos DB resource throughput. */
	export interface ThroughputSettingsUpdateProperties {

		/**
		 * Cosmos DB resource throughput object
		 * Required
		 */
		resource: ThroughputSettingsResource;
	}

	/** Properties to update Azure Cosmos DB resource throughput. */
	export interface ThroughputSettingsUpdatePropertiesFormProperties {
	}
	export function CreateThroughputSettingsUpdatePropertiesFormGroup() {
		return new FormGroup<ThroughputSettingsUpdatePropertiesFormProperties>({
		});

	}


	/** The unit of the metric. */
	export enum UnitType { Count = 'Count', Bytes = 'Bytes', Seconds = 'Seconds', Percent = 'Percent', CountPerSecond = 'CountPerSecond', BytesPerSecond = 'BytesPerSecond', Milliseconds = 'Milliseconds' }


	/** The usage data for a usage request. */
	export interface Usage {

		/** Current value for this metric */
		currentValue?: number | null;

		/** Maximum value for this metric */
		limit?: number | null;

		/** A metric name. */
		name?: MetricName;

		/** The quota period used to summarize the usage values. */
		quotaPeriod?: string | null;

		/** The unit of the metric. */
		unit?: MetricUnit | null;
	}

	/** The usage data for a usage request. */
	export interface UsageFormProperties {

		/** Current value for this metric */
		currentValue: FormControl<number | null | undefined>,

		/** Maximum value for this metric */
		limit: FormControl<number | null | undefined>,

		/** The quota period used to summarize the usage values. */
		quotaPeriod: FormControl<string | null | undefined>,

		/** The unit of the metric. */
		unit: FormControl<MetricUnit | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			quotaPeriod: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<MetricUnit | null | undefined>(undefined),
		});

	}


	/** The response to a list usage request. */
	export interface UsagesResult {

		/** The list of usages for the database. A usage is a point in time metric */
		value?: Array<Usage>;
	}

	/** The response to a list usage request. */
	export interface UsagesResultFormProperties {
	}
	export function CreateUsagesResultFormGroup() {
		return new FormGroup<UsagesResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Cosmos DB Resource Provider operations.
		 * Get providers/Microsoft.DocumentDB/operations
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {OperationListResult} OK
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.DocumentDB/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the Azure Cosmos DB database accounts available under the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/databaseAccounts
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} subscriptionId Azure subscription ID.
		 * @return {DatabaseAccountsListResult} The operation completed successfully.
		 */
		DatabaseAccounts_List(api_version: string, subscriptionId: string): Observable<DatabaseAccountsListResult> {
			return this.http.get<DatabaseAccountsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DocumentDB/databaseAccounts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the Azure Cosmos DB database accounts available under the given resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} subscriptionId Azure subscription ID.
		 * @return {DatabaseAccountsListResult} The operation completed successfully.
		 */
		DatabaseAccounts_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<DatabaseAccountsListResult> {
			return this.http.get<DatabaseAccountsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the properties of an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {DatabaseAccountGetResults} The database account properties were retrieved successfully.
		 */
		DatabaseAccounts_Get(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<DatabaseAccountGetResults> {
			return this.http.get<DatabaseAccountGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when performing updates on an account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {DatabaseAccountCreateUpdateParameters} requestBody The parameters to provide for the current database account.
		 * @return {DatabaseAccountGetResults} The database account create or update operation will complete asynchronously.
		 */
		DatabaseAccounts_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: DatabaseAccountCreateUpdateParameters): Observable<DatabaseAccountGetResults> {
			return this.http.put<DatabaseAccountGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Azure Cosmos DB database account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {void} 
		 */
		DatabaseAccounts_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the properties of an existing Azure Cosmos DB database account.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {DatabaseAccountUpdateParameters} requestBody The parameters to provide for the current database account.
		 * @return {DatabaseAccountGetResults} The database account update operation will complete asynchronously.
		 */
		DatabaseAccounts_Update(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: DatabaseAccountUpdateParameters): Observable<DatabaseAccountGetResults> {
			return this.http.patch<DatabaseAccountGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Cassandra keyspaces under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {CassandraKeyspaceListResult} The Cassandra keyspace properties were retrieved successfully.
		 */
		CassandraResources_ListCassandraKeyspaces(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<CassandraKeyspaceListResult> {
			return this.http.get<CassandraKeyspaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/cassandraKeyspaces&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the Cassandra keyspaces under an existing Azure Cosmos DB database account with the provided name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} keyspaceName Cosmos DB keyspace name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {CassandraKeyspaceGetResults} The Cassandra keyspace property was retrieved successfully.
		 */
		CassandraResources_GetCassandraKeyspace(subscriptionId: string, resourceGroupName: string, accountName: string, keyspaceName: string, api_version: string): Observable<CassandraKeyspaceGetResults> {
			return this.http.get<CassandraKeyspaceGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/cassandraKeyspaces/' + (keyspaceName == null ? '' : encodeURIComponent(keyspaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an Azure Cosmos DB Cassandra keyspace
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} keyspaceName Cosmos DB keyspace name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {CassandraKeyspaceCreateUpdateParameters} requestBody The parameters to provide for the current Cassandra keyspace.
		 * @return {CassandraKeyspaceGetResults} The Cassandra keyspace create or update operation was completed successfully.
		 */
		CassandraResources_CreateUpdateCassandraKeyspace(subscriptionId: string, resourceGroupName: string, accountName: string, keyspaceName: string, api_version: string, requestBody: CassandraKeyspaceCreateUpdateParameters): Observable<CassandraKeyspaceGetResults> {
			return this.http.put<CassandraKeyspaceGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/cassandraKeyspaces/' + (keyspaceName == null ? '' : encodeURIComponent(keyspaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Azure Cosmos DB Cassandra keyspace.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} keyspaceName Cosmos DB keyspace name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {void} 
		 */
		CassandraResources_DeleteCassandraKeyspace(subscriptionId: string, resourceGroupName: string, accountName: string, keyspaceName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/cassandraKeyspaces/' + (keyspaceName == null ? '' : encodeURIComponent(keyspaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Cassandra table under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} keyspaceName Cosmos DB keyspace name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {CassandraTableListResult} The Cassandra table properties were retrieved successfully.
		 */
		CassandraResources_ListCassandraTables(subscriptionId: string, resourceGroupName: string, accountName: string, keyspaceName: string, api_version: string): Observable<CassandraTableListResult> {
			return this.http.get<CassandraTableListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/cassandraKeyspaces/' + (keyspaceName == null ? '' : encodeURIComponent(keyspaceName)) + '/tables&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the Cassandra table under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} keyspaceName Cosmos DB keyspace name.
		 * @param {string} tableName Cosmos DB table name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {CassandraTableGetResults} The Cassandra table property was retrieved successfully.
		 */
		CassandraResources_GetCassandraTable(subscriptionId: string, resourceGroupName: string, accountName: string, keyspaceName: string, tableName: string, api_version: string): Observable<CassandraTableGetResults> {
			return this.http.get<CassandraTableGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/cassandraKeyspaces/' + (keyspaceName == null ? '' : encodeURIComponent(keyspaceName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an Azure Cosmos DB Cassandra Table
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} keyspaceName Cosmos DB keyspace name.
		 * @param {string} tableName Cosmos DB table name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {CassandraTableCreateUpdateParameters} requestBody The parameters to provide for the current Cassandra Table.
		 * @return {CassandraTableGetResults} The Cassandra Table create or update operation was completed successfully.
		 */
		CassandraResources_CreateUpdateCassandraTable(subscriptionId: string, resourceGroupName: string, accountName: string, keyspaceName: string, tableName: string, api_version: string, requestBody: CassandraTableCreateUpdateParameters): Observable<CassandraTableGetResults> {
			return this.http.put<CassandraTableGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/cassandraKeyspaces/' + (keyspaceName == null ? '' : encodeURIComponent(keyspaceName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Azure Cosmos DB Cassandra table.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} keyspaceName Cosmos DB keyspace name.
		 * @param {string} tableName Cosmos DB table name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {void} 
		 */
		CassandraResources_DeleteCassandraTable(subscriptionId: string, resourceGroupName: string, accountName: string, keyspaceName: string, tableName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/cassandraKeyspaces/' + (keyspaceName == null ? '' : encodeURIComponent(keyspaceName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the RUs per second of the Cassandra table under an existing Azure Cosmos DB database account with the provided name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} keyspaceName Cosmos DB keyspace name.
		 * @param {string} tableName Cosmos DB table name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the Cassandra table was retrieved successfully.
		 */
		CassandraResources_GetCassandraTableThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, keyspaceName: string, tableName: string, api_version: string): Observable<ThroughputSettingsGetResults> {
			return this.http.get<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/cassandraKeyspaces/' + (keyspaceName == null ? '' : encodeURIComponent(keyspaceName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update RUs per second of an Azure Cosmos DB Cassandra table
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} keyspaceName Cosmos DB keyspace name.
		 * @param {string} tableName Cosmos DB table name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {ThroughputSettingsUpdateParameters} requestBody The RUs per second of the parameters to provide for the current Cassandra table.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the Cassandra table update operation was completed successfully.
		 */
		CassandraResources_UpdateCassandraTableThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, keyspaceName: string, tableName: string, api_version: string, requestBody: ThroughputSettingsUpdateParameters): Observable<ThroughputSettingsGetResults> {
			return this.http.put<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/cassandraKeyspaces/' + (keyspaceName == null ? '' : encodeURIComponent(keyspaceName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the RUs per second of the Cassandra Keyspace under an existing Azure Cosmos DB database account with the provided name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} keyspaceName Cosmos DB keyspace name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the Cassandra Keyspace was retrieved successfully.
		 */
		CassandraResources_GetCassandraKeyspaceThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, keyspaceName: string, api_version: string): Observable<ThroughputSettingsGetResults> {
			return this.http.get<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/cassandraKeyspaces/' + (keyspaceName == null ? '' : encodeURIComponent(keyspaceName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update RUs per second of an Azure Cosmos DB Cassandra Keyspace
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} keyspaceName Cosmos DB keyspace name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {ThroughputSettingsUpdateParameters} requestBody The RUs per second of the parameters to provide for the current Cassandra Keyspace.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the Cassandra Keyspace update operation was completed successfully.
		 */
		CassandraResources_UpdateCassandraKeyspaceThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, keyspaceName: string, api_version: string, requestBody: ThroughputSettingsUpdateParameters): Observable<ThroughputSettingsGetResults> {
			return this.http.put<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/cassandraKeyspaces/' + (keyspaceName == null ? '' : encodeURIComponent(keyspaceName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves metric definitions for the given collection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/metricDefinitions
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseRid Cosmos DB database rid.
		 * @param {string} collectionRid Cosmos DB collection rid.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {MetricDefinitionsListResult} The metric definitions for the collection were retrieved successfully.
		 */
		Collection_ListMetricDefinitions(subscriptionId: string, resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, api_version: string): Observable<MetricDefinitionsListResult> {
			return this.http.get<MetricDefinitionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/databases/' + (databaseRid == null ? '' : encodeURIComponent(databaseRid)) + '/collections/' + (collectionRid == null ? '' : encodeURIComponent(collectionRid)) + '/metricDefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the metrics determined by the given filter for the given database account and collection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/metrics
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseRid Cosmos DB database rid.
		 * @param {string} collectionRid Cosmos DB collection rid.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
		 * @return {MetricListResult} The metrics for the database account were retrieved successfully.
		 */
		Collection_ListMetrics(subscriptionId: string, resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, api_version: string, filter: string): Observable<MetricListResult> {
			return this.http.get<MetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/databases/' + (databaseRid == null ? '' : encodeURIComponent(databaseRid)) + '/collections/' + (collectionRid == null ? '' : encodeURIComponent(collectionRid)) + '/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Retrieves the metrics determined by the given filter for the given partition key range id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitionKeyRangeId/{partitionKeyRangeId}/metrics
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseRid Cosmos DB database rid.
		 * @param {string} collectionRid Cosmos DB collection rid.
		 * @param {string} partitionKeyRangeId Partition Key Range Id for which to get data.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
		 * @return {PartitionMetricListResult} The partition-level metrics for the partition key range id were retrieved successfully.
		 */
		PartitionKeyRangeId_ListMetrics(subscriptionId: string, resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, partitionKeyRangeId: string, api_version: string, filter: string): Observable<PartitionMetricListResult> {
			return this.http.get<PartitionMetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/databases/' + (databaseRid == null ? '' : encodeURIComponent(databaseRid)) + '/collections/' + (collectionRid == null ? '' : encodeURIComponent(collectionRid)) + '/partitionKeyRangeId/' + (partitionKeyRangeId == null ? '' : encodeURIComponent(partitionKeyRangeId)) + '/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Retrieves the metrics determined by the given filter for the given collection, split by partition.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitions/metrics
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseRid Cosmos DB database rid.
		 * @param {string} collectionRid Cosmos DB collection rid.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
		 * @return {PartitionMetricListResult} The partition-level metrics for the collection were retrieved successfully.
		 */
		CollectionPartition_ListMetrics(subscriptionId: string, resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, api_version: string, filter: string): Observable<PartitionMetricListResult> {
			return this.http.get<PartitionMetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/databases/' + (databaseRid == null ? '' : encodeURIComponent(databaseRid)) + '/collections/' + (collectionRid == null ? '' : encodeURIComponent(collectionRid)) + '/partitions/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Retrieves the usages (most recent storage data) for the given collection, split by partition.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitions/usages
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseRid Cosmos DB database rid.
		 * @param {string} collectionRid Cosmos DB collection rid.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
		 * @return {PartitionUsagesResult} The usages for the collection, per partition were retrieved successfully.
		 */
		CollectionPartition_ListUsages(subscriptionId: string, resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, api_version: string, filter: string | null | undefined): Observable<PartitionUsagesResult> {
			return this.http.get<PartitionUsagesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/databases/' + (databaseRid == null ? '' : encodeURIComponent(databaseRid)) + '/collections/' + (collectionRid == null ? '' : encodeURIComponent(collectionRid)) + '/partitions/usages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Retrieves the usages (most recent storage data) for the given collection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/usages
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseRid Cosmos DB database rid.
		 * @param {string} collectionRid Cosmos DB collection rid.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
		 * @return {UsagesResult} The usages for the collection were retrieved successfully.
		 */
		Collection_ListUsages(subscriptionId: string, resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, api_version: string, filter: string | null | undefined): Observable<UsagesResult> {
			return this.http.get<UsagesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/databases/' + (databaseRid == null ? '' : encodeURIComponent(databaseRid)) + '/collections/' + (collectionRid == null ? '' : encodeURIComponent(collectionRid)) + '/usages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Retrieves metric definitions for the given database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/metricDefinitions
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseRid Cosmos DB database rid.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {MetricDefinitionsListResult} The metric definitions for the database were retrieved successfully.
		 */
		Database_ListMetricDefinitions(subscriptionId: string, resourceGroupName: string, accountName: string, databaseRid: string, api_version: string): Observable<MetricDefinitionsListResult> {
			return this.http.get<MetricDefinitionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/databases/' + (databaseRid == null ? '' : encodeURIComponent(databaseRid)) + '/metricDefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the metrics determined by the given filter for the given database account and database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/metrics
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseRid Cosmos DB database rid.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
		 * @return {MetricListResult} The metrics for the database account were retrieved successfully.
		 */
		Database_ListMetrics(subscriptionId: string, resourceGroupName: string, accountName: string, databaseRid: string, api_version: string, filter: string): Observable<MetricListResult> {
			return this.http.get<MetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/databases/' + (databaseRid == null ? '' : encodeURIComponent(databaseRid)) + '/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Retrieves the usages (most recent data) for the given database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/usages
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseRid Cosmos DB database rid.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
		 * @return {UsagesResult} The usages for the database were retrieved successfully.
		 */
		Database_ListUsages(subscriptionId: string, resourceGroupName: string, accountName: string, databaseRid: string, api_version: string, filter: string | null | undefined): Observable<UsagesResult> {
			return this.http.get<UsagesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/databases/' + (databaseRid == null ? '' : encodeURIComponent(databaseRid)) + '/usages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Changes the failover priority for the Azure Cosmos DB database account. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/failoverPriorityChange
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {FailoverPolicies} requestBody The new failover policies for the database account.
		 * @return {void} 
		 */
		DatabaseAccounts_FailoverPriorityChange(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: FailoverPolicies): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/failoverPriorityChange&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Gremlin databases under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {GremlinDatabaseListResult} The Gremlin database properties were retrieved successfully.
		 */
		GremlinResources_ListGremlinDatabases(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<GremlinDatabaseListResult> {
			return this.http.get<GremlinDatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/gremlinDatabases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the Gremlin databases under an existing Azure Cosmos DB database account with the provided name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {GremlinDatabaseGetResults} The Gremlin database property was retrieved successfully.
		 */
		GremlinResources_GetGremlinDatabase(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string): Observable<GremlinDatabaseGetResults> {
			return this.http.get<GremlinDatabaseGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/gremlinDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an Azure Cosmos DB Gremlin database
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {GremlinDatabaseCreateUpdateParameters} requestBody The parameters to provide for the current Gremlin database.
		 * @return {GremlinDatabaseGetResults} The Gremlin database create or update operation was completed successfully.
		 */
		GremlinResources_CreateUpdateGremlinDatabase(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string, requestBody: GremlinDatabaseCreateUpdateParameters): Observable<GremlinDatabaseGetResults> {
			return this.http.put<GremlinDatabaseGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/gremlinDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Azure Cosmos DB Gremlin database.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {void} 
		 */
		GremlinResources_DeleteGremlinDatabase(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/gremlinDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Gremlin graph under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {GremlinGraphListResult} The Gremlin graph properties were retrieved successfully.
		 */
		GremlinResources_ListGremlinGraphs(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string): Observable<GremlinGraphListResult> {
			return this.http.get<GremlinGraphListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/gremlinDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/graphs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the Gremlin graph under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} graphName Cosmos DB graph name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {GremlinGraphGetResults} The Gremlin graph property was retrieved successfully.
		 */
		GremlinResources_GetGremlinGraph(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, graphName: string, api_version: string): Observable<GremlinGraphGetResults> {
			return this.http.get<GremlinGraphGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/gremlinDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/graphs/' + (graphName == null ? '' : encodeURIComponent(graphName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an Azure Cosmos DB Gremlin graph
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} graphName Cosmos DB graph name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {GremlinGraphCreateUpdateParameters} requestBody The parameters to provide for the current Gremlin graph.
		 * @return {GremlinGraphGetResults} The Gremlin graph create or update operation was completed successfully.
		 */
		GremlinResources_CreateUpdateGremlinGraph(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, graphName: string, api_version: string, requestBody: GremlinGraphCreateUpdateParameters): Observable<GremlinGraphGetResults> {
			return this.http.put<GremlinGraphGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/gremlinDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/graphs/' + (graphName == null ? '' : encodeURIComponent(graphName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Azure Cosmos DB Gremlin graph.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} graphName Cosmos DB graph name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {void} 
		 */
		GremlinResources_DeleteGremlinGraph(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, graphName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/gremlinDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/graphs/' + (graphName == null ? '' : encodeURIComponent(graphName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Gremlin graph throughput under an existing Azure Cosmos DB database account with the provided name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} graphName Cosmos DB graph name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the Gremlin graph was retrieved successfully.
		 */
		GremlinResources_GetGremlinGraphThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, graphName: string, api_version: string): Observable<ThroughputSettingsGetResults> {
			return this.http.get<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/gremlinDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/graphs/' + (graphName == null ? '' : encodeURIComponent(graphName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update RUs per second of an Azure Cosmos DB Gremlin graph
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} graphName Cosmos DB graph name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {ThroughputSettingsUpdateParameters} requestBody The RUs per second of the parameters to provide for the current Gremlin graph.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the Gremlin graph update operation was completed successfully.
		 */
		GremlinResources_UpdateGremlinGraphThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, graphName: string, api_version: string, requestBody: ThroughputSettingsUpdateParameters): Observable<ThroughputSettingsGetResults> {
			return this.http.put<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/gremlinDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/graphs/' + (graphName == null ? '' : encodeURIComponent(graphName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the RUs per second of the Gremlin database under an existing Azure Cosmos DB database account with the provided name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the Gremlin database was retrieved successfully.
		 */
		GremlinResources_GetGremlinDatabaseThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string): Observable<ThroughputSettingsGetResults> {
			return this.http.get<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/gremlinDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update RUs per second of an Azure Cosmos DB Gremlin database
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {ThroughputSettingsUpdateParameters} requestBody The RUs per second of the parameters to provide for the current Gremlin database.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the Gremlin database update operation was completed successfully.
		 */
		GremlinResources_UpdateGremlinDatabaseThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string, requestBody: ThroughputSettingsUpdateParameters): Observable<ThroughputSettingsGetResults> {
			return this.http.put<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/gremlinDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the connection strings for the specified Azure Cosmos DB database account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/listConnectionStrings
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {DatabaseAccountListConnectionStringsResult} The operation completed successfully.
		 */
		DatabaseAccounts_ListConnectionStrings(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<DatabaseAccountListConnectionStringsResult> {
			return this.http.post<DatabaseAccountListConnectionStringsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/listConnectionStrings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Lists the access keys for the specified Azure Cosmos DB database account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/listKeys
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {DatabaseAccountListKeysResult} The operation completed successfully.
		 */
		DatabaseAccounts_ListKeys(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<DatabaseAccountListKeysResult> {
			return this.http.post<DatabaseAccountListKeysResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Retrieves metric definitions for the given database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/metricDefinitions
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {MetricDefinitionsListResult} The metric definitions for the database account were retrieved successfully.
		 */
		DatabaseAccounts_ListMetricDefinitions(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<MetricDefinitionsListResult> {
			return this.http.get<MetricDefinitionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/metricDefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the metrics determined by the given filter for the given database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/metrics
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
		 * @return {MetricListResult} The metrics for the database account were retrieved successfully.
		 */
		DatabaseAccounts_ListMetrics(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, filter: string): Observable<MetricListResult> {
			return this.http.get<MetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Lists the MongoDB databases under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {MongoDBDatabaseListResult} The MongoDB database properties were retrieved successfully.
		 */
		MongoDBResources_ListMongoDBDatabases(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<MongoDBDatabaseListResult> {
			return this.http.get<MongoDBDatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/mongodbDatabases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the MongoDB databases under an existing Azure Cosmos DB database account with the provided name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {MongoDBDatabaseGetResults} The MongoDB database property was retrieved successfully.
		 */
		MongoDBResources_GetMongoDBDatabase(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string): Observable<MongoDBDatabaseGetResults> {
			return this.http.get<MongoDBDatabaseGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/mongodbDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or updates Azure Cosmos DB MongoDB database
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {MongoDBDatabaseCreateUpdateParameters} requestBody The parameters to provide for the current MongoDB database.
		 * @return {MongoDBDatabaseGetResults} The MongoDB database create or update operation was completed successfully.
		 */
		MongoDBResources_CreateUpdateMongoDBDatabase(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string, requestBody: MongoDBDatabaseCreateUpdateParameters): Observable<MongoDBDatabaseGetResults> {
			return this.http.put<MongoDBDatabaseGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/mongodbDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Azure Cosmos DB MongoDB database.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {void} 
		 */
		MongoDBResources_DeleteMongoDBDatabase(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/mongodbDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the MongoDB collection under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {MongoDBCollectionListResult} The MongoDB collection properties were retrieved successfully.
		 */
		MongoDBResources_ListMongoDBCollections(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string): Observable<MongoDBCollectionListResult> {
			return this.http.get<MongoDBCollectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/mongodbDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/collections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the MongoDB collection under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} collectionName Cosmos DB collection name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {MongoDBCollectionGetResults} The MongoDB collection property was retrieved successfully.
		 */
		MongoDBResources_GetMongoDBCollection(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, collectionName: string, api_version: string): Observable<MongoDBCollectionGetResults> {
			return this.http.get<MongoDBCollectionGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/mongodbDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/collections/' + (collectionName == null ? '' : encodeURIComponent(collectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an Azure Cosmos DB MongoDB Collection
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} collectionName Cosmos DB collection name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {MongoDBCollectionCreateUpdateParameters} requestBody The parameters to provide for the current MongoDB Collection.
		 * @return {MongoDBCollectionGetResults} The MongoDB Collection create or update operation was completed successfully.
		 */
		MongoDBResources_CreateUpdateMongoDBCollection(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, collectionName: string, api_version: string, requestBody: MongoDBCollectionCreateUpdateParameters): Observable<MongoDBCollectionGetResults> {
			return this.http.put<MongoDBCollectionGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/mongodbDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/collections/' + (collectionName == null ? '' : encodeURIComponent(collectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Azure Cosmos DB MongoDB Collection.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} collectionName Cosmos DB collection name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {void} 
		 */
		MongoDBResources_DeleteMongoDBCollection(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, collectionName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/mongodbDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/collections/' + (collectionName == null ? '' : encodeURIComponent(collectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the RUs per second of the MongoDB collection under an existing Azure Cosmos DB database account with the provided name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} collectionName Cosmos DB collection name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the MongoDB collection was retrieved successfully.
		 */
		MongoDBResources_GetMongoDBCollectionThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, collectionName: string, api_version: string): Observable<ThroughputSettingsGetResults> {
			return this.http.get<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/mongodbDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/collections/' + (collectionName == null ? '' : encodeURIComponent(collectionName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update the RUs per second of an Azure Cosmos DB MongoDB collection
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} collectionName Cosmos DB collection name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {ThroughputSettingsUpdateParameters} requestBody The RUs per second of the parameters to provide for the current MongoDB collection.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the MongoDB collection update operation was completed successfully.
		 */
		MongoDBResources_UpdateMongoDBCollectionThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, collectionName: string, api_version: string, requestBody: ThroughputSettingsUpdateParameters): Observable<ThroughputSettingsGetResults> {
			return this.http.put<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/mongodbDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/collections/' + (collectionName == null ? '' : encodeURIComponent(collectionName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the RUs per second of the MongoDB database under an existing Azure Cosmos DB database account with the provided name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the MongoDB database was retrieved successfully.
		 */
		MongoDBResources_GetMongoDBDatabaseThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string): Observable<ThroughputSettingsGetResults> {
			return this.http.get<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/mongodbDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update RUs per second of the an Azure Cosmos DB MongoDB database
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {ThroughputSettingsUpdateParameters} requestBody The RUs per second of the parameters to provide for the current MongoDB database.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the MongoDB database update operation was completed successfully.
		 */
		MongoDBResources_UpdateMongoDBDatabaseThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string, requestBody: ThroughputSettingsUpdateParameters): Observable<ThroughputSettingsGetResults> {
			return this.http.put<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/mongodbDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Offline the specified region for the specified Azure Cosmos DB database account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/offlineRegion
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {RegionForOnlineOffline} requestBody Cosmos DB region to offline for the database account.
		 * @return {void} The offline region operation is completed successfully.
		 */
		DatabaseAccounts_OfflineRegion(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: RegionForOnlineOffline): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/offlineRegion&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Online the specified region for the specified Azure Cosmos DB database account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/onlineRegion
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {RegionForOnlineOffline} requestBody Cosmos DB region to online for the database account.
		 * @return {void} The online region operation is completed successfully.
		 */
		DatabaseAccounts_OnlineRegion(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: RegionForOnlineOffline): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/onlineRegion&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the metrics determined by the given filter for the given database account. This url is only for PBS and Replication Latency data
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/percentile/metrics
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
		 * @return {PercentileMetricListResult} The percentile metrics for the account were retrieved successfully.
		 */
		Percentile_ListMetrics(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, filter: string): Observable<PercentileMetricListResult> {
			return this.http.get<PercentileMetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/percentile/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Lists the read-only access keys for the specified Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/readonlykeys
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {DatabaseAccountListReadOnlyKeysResult} The operation completed successfully.
		 */
		DatabaseAccounts_GetReadOnlyKeys(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<DatabaseAccountListReadOnlyKeysResult> {
			return this.http.get<DatabaseAccountListReadOnlyKeysResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/readonlykeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the read-only access keys for the specified Azure Cosmos DB database account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/readonlykeys
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {DatabaseAccountListReadOnlyKeysResult} The operation completed successfully.
		 */
		DatabaseAccounts_ListReadOnlyKeys(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<DatabaseAccountListReadOnlyKeysResult> {
			return this.http.post<DatabaseAccountListReadOnlyKeysResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/readonlykeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerates an access key for the specified Azure Cosmos DB database account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/regenerateKey
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {DatabaseAccountRegenerateKeyParameters} requestBody The name of the key to regenerate.
		 * @return {void} OK
		 */
		DatabaseAccounts_RegenerateKey(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: DatabaseAccountRegenerateKeyParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/regenerateKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the metrics determined by the given filter for the given database account, collection and region.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/databases/{databaseRid}/collections/{collectionRid}/metrics
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} region Cosmos DB region, with spaces between words and each word capitalized.
		 * @param {string} databaseRid Cosmos DB database rid.
		 * @param {string} collectionRid Cosmos DB collection rid.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
		 * @return {MetricListResult} The metrics for the database account were retrieved successfully.
		 */
		CollectionRegion_ListMetrics(subscriptionId: string, resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, api_version: string, filter: string): Observable<MetricListResult> {
			return this.http.get<MetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/region/' + (region == null ? '' : encodeURIComponent(region)) + '/databases/' + (databaseRid == null ? '' : encodeURIComponent(databaseRid)) + '/collections/' + (collectionRid == null ? '' : encodeURIComponent(collectionRid)) + '/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Retrieves the metrics determined by the given filter for the given partition key range id and region.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/databases/{databaseRid}/collections/{collectionRid}/partitionKeyRangeId/{partitionKeyRangeId}/metrics
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} region Cosmos DB region, with spaces between words and each word capitalized.
		 * @param {string} databaseRid Cosmos DB database rid.
		 * @param {string} collectionRid Cosmos DB collection rid.
		 * @param {string} partitionKeyRangeId Partition Key Range Id for which to get data.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
		 * @return {PartitionMetricListResult} The partition-level metrics for the partition key range id and region were retrieved successfully.
		 */
		PartitionKeyRangeIdRegion_ListMetrics(subscriptionId: string, resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, partitionKeyRangeId: string, api_version: string, filter: string): Observable<PartitionMetricListResult> {
			return this.http.get<PartitionMetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/region/' + (region == null ? '' : encodeURIComponent(region)) + '/databases/' + (databaseRid == null ? '' : encodeURIComponent(databaseRid)) + '/collections/' + (collectionRid == null ? '' : encodeURIComponent(collectionRid)) + '/partitionKeyRangeId/' + (partitionKeyRangeId == null ? '' : encodeURIComponent(partitionKeyRangeId)) + '/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Retrieves the metrics determined by the given filter for the given collection and region, split by partition.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/databases/{databaseRid}/collections/{collectionRid}/partitions/metrics
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} region Cosmos DB region, with spaces between words and each word capitalized.
		 * @param {string} databaseRid Cosmos DB database rid.
		 * @param {string} collectionRid Cosmos DB collection rid.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
		 * @return {PartitionMetricListResult} The partition-level metrics for the collection and region were retrieved successfully.
		 */
		CollectionPartitionRegion_ListMetrics(subscriptionId: string, resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, api_version: string, filter: string): Observable<PartitionMetricListResult> {
			return this.http.get<PartitionMetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/region/' + (region == null ? '' : encodeURIComponent(region)) + '/databases/' + (databaseRid == null ? '' : encodeURIComponent(databaseRid)) + '/collections/' + (collectionRid == null ? '' : encodeURIComponent(collectionRid)) + '/partitions/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Retrieves the metrics determined by the given filter for the given database account and region.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/metrics
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} region Cosmos DB region, with spaces between words and each word capitalized.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
		 * @return {MetricListResult} The metrics for the database account were retrieved successfully.
		 */
		DatabaseAccountRegion_ListMetrics(subscriptionId: string, resourceGroupName: string, accountName: string, region: string, api_version: string, filter: string): Observable<MetricListResult> {
			return this.http.get<MetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/region/' + (region == null ? '' : encodeURIComponent(region)) + '/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Retrieves the metrics determined by the given filter for the given account, source and target region. This url is only for PBS and Replication Latency data
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sourceRegion/{sourceRegion}/targetRegion/{targetRegion}/percentile/metrics
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} sourceRegion Source region from which data is written. Cosmos DB region, with spaces between words and each word capitalized.
		 * @param {string} targetRegion Target region to which data is written. Cosmos DB region, with spaces between words and each word capitalized.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
		 * @return {PercentileMetricListResult} The percentile metrics for the account, source and target regions were retrieved successfully.
		 */
		PercentileSourceTarget_ListMetrics(subscriptionId: string, resourceGroupName: string, accountName: string, sourceRegion: string, targetRegion: string, api_version: string, filter: string): Observable<PercentileMetricListResult> {
			return this.http.get<PercentileMetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sourceRegion/' + (sourceRegion == null ? '' : encodeURIComponent(sourceRegion)) + '/targetRegion/' + (targetRegion == null ? '' : encodeURIComponent(targetRegion)) + '/percentile/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Lists the SQL databases under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {SqlDatabaseListResult} The SQL database properties were retrieved successfully.
		 */
		SqlResources_ListSqlDatabases(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<SqlDatabaseListResult> {
			return this.http.get<SqlDatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the SQL database under an existing Azure Cosmos DB database account with the provided name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {SqlDatabaseGetResults} The SQL database property was retrieved successfully.
		 */
		SqlResources_GetSqlDatabase(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string): Observable<SqlDatabaseGetResults> {
			return this.http.get<SqlDatabaseGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an Azure Cosmos DB SQL database
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {SqlDatabaseCreateUpdateParameters} requestBody The parameters to provide for the current SQL database.
		 * @return {SqlDatabaseGetResults} The SQL database create or update operation was completed successfully.
		 */
		SqlResources_CreateUpdateSqlDatabase(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string, requestBody: SqlDatabaseCreateUpdateParameters): Observable<SqlDatabaseGetResults> {
			return this.http.put<SqlDatabaseGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Azure Cosmos DB SQL database.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {void} 
		 */
		SqlResources_DeleteSqlDatabase(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the SQL container under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {SqlContainerListResult} The SQL container properties were retrieved successfully.
		 */
		SqlResources_ListSqlContainers(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string): Observable<SqlContainerListResult> {
			return this.http.get<SqlContainerListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the SQL container under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {SqlContainerGetResults} The SQL container property was retrieved successfully.
		 */
		SqlResources_GetSqlContainer(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, api_version: string): Observable<SqlContainerGetResults> {
			return this.http.get<SqlContainerGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an Azure Cosmos DB SQL container
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {SqlContainerCreateUpdateParameters} requestBody The parameters to provide for the current SQL container.
		 * @return {SqlContainerGetResults} The SQL container create or update operation was completed successfully.
		 */
		SqlResources_CreateUpdateSqlContainer(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, api_version: string, requestBody: SqlContainerCreateUpdateParameters): Observable<SqlContainerGetResults> {
			return this.http.put<SqlContainerGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Azure Cosmos DB SQL container.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {void} 
		 */
		SqlResources_DeleteSqlContainer(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the SQL storedProcedure under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/storedProcedures
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {SqlStoredProcedureListResult} The SQL stored procedure properties were retrieved successfully.
		 */
		SqlResources_ListSqlStoredProcedures(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, api_version: string): Observable<SqlStoredProcedureListResult> {
			return this.http.get<SqlStoredProcedureListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/storedProcedures&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the SQL storedProcedure under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/storedProcedures/{storedProcedureName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} storedProcedureName Cosmos DB storedProcedure name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {SqlStoredProcedureGetResults} The SQL storedProcedure property was retrieved successfully.
		 */
		SqlResources_GetSqlStoredProcedure(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, storedProcedureName: string, api_version: string): Observable<SqlStoredProcedureGetResults> {
			return this.http.get<SqlStoredProcedureGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/storedProcedures/' + (storedProcedureName == null ? '' : encodeURIComponent(storedProcedureName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an Azure Cosmos DB SQL storedProcedure
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/storedProcedures/{storedProcedureName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} storedProcedureName Cosmos DB storedProcedure name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {SqlStoredProcedureCreateUpdateParameters} requestBody The parameters to provide for the current SQL storedProcedure.
		 * @return {SqlStoredProcedureGetResults} The SQL storedProcedure create or update operation was completed successfully.
		 */
		SqlResources_CreateUpdateSqlStoredProcedure(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, storedProcedureName: string, api_version: string, requestBody: SqlStoredProcedureCreateUpdateParameters): Observable<SqlStoredProcedureGetResults> {
			return this.http.put<SqlStoredProcedureGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/storedProcedures/' + (storedProcedureName == null ? '' : encodeURIComponent(storedProcedureName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Azure Cosmos DB SQL storedProcedure.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/storedProcedures/{storedProcedureName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} storedProcedureName Cosmos DB storedProcedure name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {void} 
		 */
		SqlResources_DeleteSqlStoredProcedure(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, storedProcedureName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/storedProcedures/' + (storedProcedureName == null ? '' : encodeURIComponent(storedProcedureName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the RUs per second of the SQL container under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the SQL container was retrieved successfully.
		 */
		SqlResources_GetSqlContainerThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, api_version: string): Observable<ThroughputSettingsGetResults> {
			return this.http.get<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update RUs per second of an Azure Cosmos DB SQL container
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {ThroughputSettingsUpdateParameters} requestBody The parameters to provide for the RUs per second of the current SQL container.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the SQL container update operation was completed successfully.
		 */
		SqlResources_UpdateSqlContainerThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, api_version: string, requestBody: ThroughputSettingsUpdateParameters): Observable<ThroughputSettingsGetResults> {
			return this.http.put<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the SQL trigger under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/triggers
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {SqlTriggerListResult} The SQL trigger properties were retrieved successfully.
		 */
		SqlResources_ListSqlTriggers(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, api_version: string): Observable<SqlTriggerListResult> {
			return this.http.get<SqlTriggerListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/triggers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the SQL trigger under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/triggers/{triggerName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} triggerName Cosmos DB trigger name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {SqlTriggerGetResults} The SQL trigger property was retrieved successfully.
		 */
		SqlResources_GetSqlTrigger(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, triggerName: string, api_version: string): Observable<SqlTriggerGetResults> {
			return this.http.get<SqlTriggerGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an Azure Cosmos DB SQL trigger
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/triggers/{triggerName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} triggerName Cosmos DB trigger name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {SqlTriggerCreateUpdateParameters} requestBody The parameters to provide for the current SQL trigger.
		 * @return {SqlTriggerGetResults} The SQL trigger create or update operation was completed successfully.
		 */
		SqlResources_CreateUpdateSqlTrigger(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, triggerName: string, api_version: string, requestBody: SqlTriggerCreateUpdateParameters): Observable<SqlTriggerGetResults> {
			return this.http.put<SqlTriggerGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Azure Cosmos DB SQL trigger.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/triggers/{triggerName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} triggerName Cosmos DB trigger name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {void} 
		 */
		SqlResources_DeleteSqlTrigger(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, triggerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the SQL userDefinedFunction under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/userDefinedFunctions
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {SqlUserDefinedFunctionListResult} The SQL userDefinedFunction properties were retrieved successfully.
		 */
		SqlResources_ListSqlUserDefinedFunctions(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, api_version: string): Observable<SqlUserDefinedFunctionListResult> {
			return this.http.get<SqlUserDefinedFunctionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/userDefinedFunctions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the SQL userDefinedFunction under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/userDefinedFunctions/{userDefinedFunctionName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} userDefinedFunctionName Cosmos DB userDefinedFunction name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {SqlUserDefinedFunctionGetResults} The SQL userDefinedFunction property was retrieved successfully.
		 */
		SqlResources_GetSqlUserDefinedFunction(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, userDefinedFunctionName: string, api_version: string): Observable<SqlUserDefinedFunctionGetResults> {
			return this.http.get<SqlUserDefinedFunctionGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/userDefinedFunctions/' + (userDefinedFunctionName == null ? '' : encodeURIComponent(userDefinedFunctionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an Azure Cosmos DB SQL userDefinedFunction
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/userDefinedFunctions/{userDefinedFunctionName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} userDefinedFunctionName Cosmos DB userDefinedFunction name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {SqlUserDefinedFunctionCreateUpdateParameters} requestBody The parameters to provide for the current SQL userDefinedFunction.
		 * @return {SqlUserDefinedFunctionGetResults} The SQL userDefinedFunction create or update operation was completed successfully.
		 */
		SqlResources_CreateUpdateSqlUserDefinedFunction(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, userDefinedFunctionName: string, api_version: string, requestBody: SqlUserDefinedFunctionCreateUpdateParameters): Observable<SqlUserDefinedFunctionGetResults> {
			return this.http.put<SqlUserDefinedFunctionGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/userDefinedFunctions/' + (userDefinedFunctionName == null ? '' : encodeURIComponent(userDefinedFunctionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Azure Cosmos DB SQL userDefinedFunction.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/userDefinedFunctions/{userDefinedFunctionName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} containerName Cosmos DB container name.
		 * @param {string} userDefinedFunctionName Cosmos DB userDefinedFunction name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {void} 
		 */
		SqlResources_DeleteSqlUserDefinedFunction(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, containerName: string, userDefinedFunctionName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/userDefinedFunctions/' + (userDefinedFunctionName == null ? '' : encodeURIComponent(userDefinedFunctionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the RUs per second of the SQL database under an existing Azure Cosmos DB database account with the provided name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the SQL database was retrieved successfully.
		 */
		SqlResources_GetSqlDatabaseThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string): Observable<ThroughputSettingsGetResults> {
			return this.http.get<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update RUs per second of an Azure Cosmos DB SQL database
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} databaseName Cosmos DB database name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {ThroughputSettingsUpdateParameters} requestBody The parameters to provide for the RUs per second of the current SQL database.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the SQL database update operation was completed successfully.
		 */
		SqlResources_UpdateSqlDatabaseThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, databaseName: string, api_version: string, requestBody: ThroughputSettingsUpdateParameters): Observable<ThroughputSettingsGetResults> {
			return this.http.put<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/sqlDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Tables under an existing Azure Cosmos DB database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {TableListResult} The Table properties were retrieved successfully.
		 */
		TableResources_ListTables(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<TableListResult> {
			return this.http.get<TableListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/tables&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the Tables under an existing Azure Cosmos DB database account with the provided name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} tableName Cosmos DB table name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {TableGetResults} The Table property was retrieved successfully.
		 */
		TableResources_GetTable(subscriptionId: string, resourceGroupName: string, accountName: string, tableName: string, api_version: string): Observable<TableGetResults> {
			return this.http.get<TableGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an Azure Cosmos DB Table
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} tableName Cosmos DB table name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {TableCreateUpdateParameters} requestBody The parameters to provide for the current Table.
		 * @return {TableGetResults} The Table create or update operation was completed successfully.
		 */
		TableResources_CreateUpdateTable(subscriptionId: string, resourceGroupName: string, accountName: string, tableName: string, api_version: string, requestBody: TableCreateUpdateParameters): Observable<TableGetResults> {
			return this.http.put<TableGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Azure Cosmos DB Table.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} tableName Cosmos DB table name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {void} 
		 */
		TableResources_DeleteTable(subscriptionId: string, resourceGroupName: string, accountName: string, tableName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the provided name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} tableName Cosmos DB table name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the Table was retrieved successfully.
		 */
		TableResources_GetTableThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, tableName: string, api_version: string): Observable<ThroughputSettingsGetResults> {
			return this.http.get<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update RUs per second of an Azure Cosmos DB Table
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} tableName Cosmos DB table name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {ThroughputSettingsUpdateParameters} requestBody The parameters to provide for the RUs per second of the current Table.
		 * @return {ThroughputSettingsGetResults} The RUs per second of the Table update operation was completed successfully.
		 */
		TableResources_UpdateTableThroughput(subscriptionId: string, resourceGroupName: string, accountName: string, tableName: string, api_version: string, requestBody: ThroughputSettingsUpdateParameters): Observable<ThroughputSettingsGetResults> {
			return this.http.put<ThroughputSettingsGetResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/throughputSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the metrics determined by the given filter for the given account target region. This url is only for PBS and Replication Latency data
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/targetRegion/{targetRegion}/percentile/metrics
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} targetRegion Target region to which data is written. Cosmos DB region, with spaces between words and each word capitalized.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
		 * @return {PercentileMetricListResult} The percentile metrics for the account and target regions were retrieved successfully.
		 */
		PercentileTarget_ListMetrics(subscriptionId: string, resourceGroupName: string, accountName: string, targetRegion: string, api_version: string, filter: string): Observable<PercentileMetricListResult> {
			return this.http.get<PercentileMetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/targetRegion/' + (targetRegion == null ? '' : encodeURIComponent(targetRegion)) + '/percentile/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Retrieves the usages (most recent data) for the given database account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/usages
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} filter An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
		 * @return {UsagesResult} The usages for the database account were retrieved successfully.
		 */
		DatabaseAccounts_ListUsages(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, filter: string | null | undefined): Observable<UsagesResult> {
			return this.http.get<UsagesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/usages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}
	}

}

