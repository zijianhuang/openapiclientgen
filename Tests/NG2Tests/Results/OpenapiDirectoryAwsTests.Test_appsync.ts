import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Represents the output of a <code>CreateApiCache</code> operation. */
	export interface CreateApiCacheResponse {

		/** The <code>ApiCache</code> object. */
		apiCache?: ApiCache | null;
	}


	/** The <code>ApiCache</code> object. */
	export interface ApiCache {
		ttl?: number | null;
		apiCachingBehavior?: ApiCacheApiCachingBehavior | null;
		transitEncryptionEnabled?: boolean | null;
		atRestEncryptionEnabled?: boolean | null;
		type?: ApiCacheType | null;
		status?: ApiCacheStatus | null;
	}

	export enum ApiCacheApiCachingBehavior { FULL_REQUEST_CACHING = 0, PER_RESOLVER_CACHING = 1 }

	export enum ApiCacheType { T2_SMALL = 0, T2_MEDIUM = 1, R4_LARGE = 2, R4_XLARGE = 3, R4_2XLARGE = 4, R4_4XLARGE = 5, R4_8XLARGE = 6 }

	export enum ApiCacheStatus { AVAILABLE = 0, CREATING = 1, DELETING = 2, MODIFYING = 3, FAILED = 4 }

	export interface BadRequestException {
	}

	export interface ConcurrentModificationException {
	}

	export interface NotFoundException {
	}

	export interface UnauthorizedException {
	}

	export interface InternalFailureException {
	}

	export interface CreateApiKeyResponse {

		/** <p>Describes an API key.</p> <p>Customers invoke AWS AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: This version was introduced at launch in November 2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB TTL. The keys ceased to be valid after February 21, 2018 and should not be used after that date.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we will delete these keys from the table after February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: This version was introduced in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds. Key expiration can only be updated while the key has not expired.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as seconds.</p> </li> </ul> */
		apiKey?: ApiKey | null;
	}


	/** <p>Describes an API key.</p> <p>Customers invoke AWS AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: This version was introduced at launch in November 2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB TTL. The keys ceased to be valid after February 21, 2018 and should not be used after that date.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we will delete these keys from the table after February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: This version was introduced in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds. Key expiration can only be updated while the key has not expired.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as seconds.</p> </li> </ul> */
	export interface ApiKey {
		id?: string | null;
		description?: string | null;
		expires?: number | null;
	}

	export interface LimitExceededException {
	}

	export interface ApiKeyLimitExceededException {
	}

	export interface ApiKeyValidityOutOfBoundsException {
	}

	export interface CreateDataSourceResponse {

		/** Describes a data source. */
		dataSource?: DataSource | null;
	}


	/** Describes a data source. */
	export interface DataSource {
		dataSourceArn?: string | null;
		name?: string | null;
		description?: string | null;
		type?: DataSourceType | null;
		serviceRoleArn?: string | null;

		/** Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: DynamodbDataSourceConfig | null;

		/** Describes an AWS Lambda data source configuration. */
		lambdaConfig?: LambdaDataSourceConfig | null;

		/** Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: ElasticsearchDataSourceConfig | null;

		/** Describes an HTTP data source configuration. */
		httpConfig?: HttpDataSourceConfig | null;

		/** Describes a relational database data source configuration. */
		relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig | null;
	}

	export enum DataSourceType { AWS_LAMBDA = 0, AMAZON_DYNAMODB = 1, AMAZON_ELASTICSEARCH = 2, NONE = 3, HTTP = 4, RELATIONAL_DATABASE = 5 }


	/** Describes an Amazon DynamoDB data source configuration. */
	export interface DynamodbDataSourceConfig {
		tableName: string;
		awsRegion: string;
		useCallerCredentials?: boolean | null;

		/** Describes a Delta Sync configuration. */
		deltaSyncConfig?: DeltaSyncConfig | null;
		versioned?: boolean | null;
	}


	/** Describes a Delta Sync configuration. */
	export interface DeltaSyncConfig {
		baseTableTTL?: number | null;
		deltaSyncTableName?: string | null;
		deltaSyncTableTTL?: number | null;
	}


	/** Describes an AWS Lambda data source configuration. */
	export interface LambdaDataSourceConfig {
		lambdaFunctionArn: string;
	}


	/** Describes an Elasticsearch data source configuration. */
	export interface ElasticsearchDataSourceConfig {
		endpoint: string;
		awsRegion: string;
	}


	/** Describes an HTTP data source configuration. */
	export interface HttpDataSourceConfig {
		endpoint?: string | null;

		/** The authorization config in case the HTTP endpoint requires authorization. */
		authorizationConfig?: AuthorizationConfig | null;
	}


	/** The authorization config in case the HTTP endpoint requires authorization. */
	export interface AuthorizationConfig {
		authorizationType: AuthorizationConfigAuthorizationType;

		/** The AWS IAM configuration. */
		awsIamConfig?: AwsIamConfig | null;
	}

	export enum AuthorizationConfigAuthorizationType { AWS_IAM = 0 }


	/** The AWS IAM configuration. */
	export interface AwsIamConfig {
		signingRegion?: string | null;
		signingServiceName?: string | null;
	}


	/** Describes a relational database data source configuration. */
	export interface RelationalDatabaseDataSourceConfig {
		relationalDatabaseSourceType?: RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType | null;

		/** The Amazon RDS HTTP endpoint configuration. */
		rdsHttpEndpointConfig?: RdsHttpEndpointConfig | null;
	}

	export enum RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType { RDS_HTTP_ENDPOINT = 0 }


	/** The Amazon RDS HTTP endpoint configuration. */
	export interface RdsHttpEndpointConfig {
		awsRegion?: string | null;
		dbClusterIdentifier?: string | null;
		databaseName?: string | null;
		schema?: string | null;
		awsSecretStoreArn?: string | null;
	}

	export enum RelationalDatabaseSourceType { RDS_HTTP_ENDPOINT = 0 }

	export interface CreateFunctionResponse {

		/** A function is a reusable entity. Multiple functions can be used to compose the resolver logic. */
		functionConfiguration?: FunctionConfiguration | null;
	}


	/** A function is a reusable entity. Multiple functions can be used to compose the resolver logic. */
	export interface FunctionConfiguration {
		functionId?: string | null;
		functionArn?: string | null;
		name?: string | null;
		description?: string | null;
		dataSourceName?: string | null;
		requestMappingTemplate?: string | null;
		responseMappingTemplate?: string | null;
		functionVersion?: string | null;
	}

	export interface CreateGraphqlApiResponse {

		/** Describes a GraphQL API. */
		graphqlApi?: GraphqlApi | null;
	}


	/** Describes a GraphQL API. */
	export interface GraphqlApi {
		name?: string | null;
		apiId?: string | null;
		authenticationType?: GraphqlApiAuthenticationType | null;

		/** The CloudWatch Logs configuration. */
		logConfig?: LogConfig | null;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: UserPoolConfig | null;

		/** Describes an OpenID Connect configuration. */
		openIDConnectConfig?: OpenIDConnectConfig | null;
		arn?: string | null;
		uris?: MapOfStringToString | null;

		/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags?: TagMap | null;
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider> | null;
		xrayEnabled?: boolean | null;
	}

	export enum GraphqlApiAuthenticationType { API_KEY = 0, AWS_IAM = 1, AMAZON_COGNITO_USER_POOLS = 2, OPENID_CONNECT = 3 }


	/** The CloudWatch Logs configuration. */
	export interface LogConfig {
		fieldLogLevel: LogConfigFieldLogLevel;
		cloudWatchLogsRoleArn: string;
		excludeVerboseContent?: boolean | null;
	}

	export enum LogConfigFieldLogLevel { NONE = 0, ERROR = 1, ALL = 2 }


	/** Describes an Amazon Cognito user pool configuration. */
	export interface UserPoolConfig {
		userPoolId: string;
		awsRegion: string;
		defaultAction: UserPoolConfigDefaultAction;
		appIdClientRegex?: string | null;
	}

	export enum UserPoolConfigDefaultAction { ALLOW = 0, DENY = 1 }


	/** Describes an OpenID Connect configuration. */
	export interface OpenIDConnectConfig {
		issuer: string;
		clientId?: string | null;
		iatTTL?: number | null;
		authTTL?: number | null;
	}

	export interface MapOfStringToString {
	}


	/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
	export interface TagMap {
	}


	/** Describes an additional authentication provider. */
	export interface AdditionalAuthenticationProvider {
		authenticationType?: GraphqlApiAuthenticationType | null;

		/** Describes an OpenID Connect configuration. */
		openIDConnectConfig?: OpenIDConnectConfig | null;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: CognitoUserPoolConfig | null;
	}


	/** Describes an Amazon Cognito user pool configuration. */
	export interface CognitoUserPoolConfig {
		userPoolId: string;
		awsRegion: string;
		appIdClientRegex?: string | null;
	}

	export enum FieldLogLevel { NONE = 0, ERROR = 1, ALL = 2 }

	export enum DefaultAction { ALLOW = 0, DENY = 1 }

	export interface ApiLimitExceededException {
	}

	export interface CreateResolverResponse {

		/** Describes a resolver. */
		resolver?: Resolver | null;
	}


	/** Describes a resolver. */
	export interface Resolver {
		typeName?: string | null;
		fieldName?: string | null;
		dataSourceName?: string | null;
		resolverArn?: string | null;
		requestMappingTemplate?: string | null;
		responseMappingTemplate?: string | null;
		kind?: ResolverKind | null;

		/** The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: PipelineConfig | null;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: SyncConfig | null;

		/** The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: CachingConfig | null;
	}

	export enum ResolverKind { UNIT = 0, PIPELINE = 1 }


	/** The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
	export interface PipelineConfig {
		functions?: Array<string> | null;
	}


	/** <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
	export interface SyncConfig {
		conflictHandler?: SyncConfigConflictHandler | null;
		conflictDetection?: SyncConfigConflictDetection | null;

		/** The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler. */
		lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig | null;
	}

	export enum SyncConfigConflictHandler { OPTIMISTIC_CONCURRENCY = 0, LAMBDA = 1, AUTOMERGE = 2, NONE = 3 }

	export enum SyncConfigConflictDetection { VERSION = 0, NONE = 1 }


	/** The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler. */
	export interface LambdaConflictHandlerConfig {
		lambdaConflictHandlerArn?: string | null;
	}


	/** The caching configuration for a resolver that has caching enabled. */
	export interface CachingConfig {
		ttl?: number | null;
		cachingKeys?: Array<string> | null;
	}

	export enum ConflictHandlerType { OPTIMISTIC_CONCURRENCY = 0, LAMBDA = 1, AUTOMERGE = 2, NONE = 3 }

	export enum ConflictDetectionType { VERSION = 0, NONE = 1 }

	export interface CreateTypeResponse {

		/** Describes a type. */
		type?: Type | null;
	}


	/** Describes a type. */
	export interface Type {
		name?: string | null;
		description?: string | null;
		arn?: string | null;
		definition?: string | null;
		format?: TypeFormat | null;
	}

	export enum TypeFormat { SDL = 0, JSON = 1 }


	/** Represents the output of a <code>DeleteApiCache</code> operation. */
	export interface DeleteApiCacheResponse {
	}

	export interface DeleteApiKeyResponse {
	}

	export interface DeleteDataSourceResponse {
	}

	export interface DeleteFunctionResponse {
	}

	export interface DeleteGraphqlApiResponse {
	}

	export interface AccessDeniedException {
	}

	export interface DeleteResolverResponse {
	}

	export interface DeleteTypeResponse {
	}


	/** Represents the output of a <code>FlushApiCache</code> operation. */
	export interface FlushApiCacheResponse {
	}


	/** Represents the output of a <code>GetApiCache</code> operation. */
	export interface GetApiCacheResponse {

		/** The <code>ApiCache</code> object. */
		apiCache?: ApiCache | null;
	}

	export interface GetDataSourceResponse {

		/** Describes a data source. */
		dataSource?: DataSource | null;
	}

	export interface GetFunctionResponse {

		/** A function is a reusable entity. Multiple functions can be used to compose the resolver logic. */
		functionConfiguration?: FunctionConfiguration | null;
	}

	export interface GetGraphqlApiResponse {

		/** Describes a GraphQL API. */
		graphqlApi?: GraphqlApi | null;
	}

	export interface GetIntrospectionSchemaResponse {
		schema?: string | null;
	}

	export interface GraphQLSchemaException {
	}

	export interface GetResolverResponse {

		/** Describes a resolver. */
		resolver?: Resolver | null;
	}

	export interface GetSchemaCreationStatusResponse {
		status?: GetSchemaCreationStatusResponseStatus | null;
		details?: string | null;
	}

	export enum GetSchemaCreationStatusResponseStatus { PROCESSING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, SUCCESS = 4, NOT_APPLICABLE = 5 }

	export interface GetTypeResponse {

		/** Describes a type. */
		type?: Type | null;
	}

	export interface ListApiKeysResponse {
		apiKeys?: Array<ApiKey> | null;
		nextToken?: string | null;
	}

	export interface ListDataSourcesResponse {
		dataSources?: Array<DataSource> | null;
		nextToken?: string | null;
	}

	export interface ListFunctionsResponse {
		functions?: Array<FunctionConfiguration> | null;
		nextToken?: string | null;
	}

	export interface ListGraphqlApisResponse {
		graphqlApis?: Array<GraphqlApi> | null;
		nextToken?: string | null;
	}

	export interface ListResolversResponse {
		resolvers?: Array<Resolver> | null;
		nextToken?: string | null;
	}

	export interface ListResolversByFunctionResponse {
		resolvers?: Array<Resolver> | null;
		nextToken?: string | null;
	}

	export interface ListTagsForResourceResponse {

		/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags?: TagMap | null;
	}

	export interface ListTypesResponse {
		types?: Array<Type> | null;
		nextToken?: string | null;
	}

	export interface StartSchemaCreationResponse {
		status?: GetSchemaCreationStatusResponseStatus | null;
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}


	/** Represents the output of a <code>UpdateApiCache</code> operation. */
	export interface UpdateApiCacheResponse {

		/** The <code>ApiCache</code> object. */
		apiCache?: ApiCache | null;
	}

	export interface UpdateApiKeyResponse {

		/** <p>Describes an API key.</p> <p>Customers invoke AWS AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: This version was introduced at launch in November 2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB TTL. The keys ceased to be valid after February 21, 2018 and should not be used after that date.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we will delete these keys from the table after February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: This version was introduced in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds. Key expiration can only be updated while the key has not expired.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as seconds.</p> </li> </ul> */
		apiKey?: ApiKey | null;
	}

	export interface UpdateDataSourceResponse {

		/** Describes a data source. */
		dataSource?: DataSource | null;
	}

	export interface UpdateFunctionResponse {

		/** A function is a reusable entity. Multiple functions can be used to compose the resolver logic. */
		functionConfiguration?: FunctionConfiguration | null;
	}

	export interface UpdateGraphqlApiResponse {

		/** Describes a GraphQL API. */
		graphqlApi?: GraphqlApi | null;
	}

	export interface UpdateResolverResponse {

		/** Describes a resolver. */
		resolver?: Resolver | null;
	}

	export interface UpdateTypeResponse {

		/** Describes a type. */
		type?: Type | null;
	}

	export enum AuthenticationType { API_KEY = 0, AWS_IAM = 1, AMAZON_COGNITO_USER_POOLS = 2, OPENID_CONNECT = 3 }

	export enum ApiCachingBehavior { FULL_REQUEST_CACHING = 0, PER_RESOLVER_CACHING = 1 }

	export enum AuthorizationType { AWS_IAM = 0 }


	/** Represents the input of a <code>CreateApiCache</code> operation. */
	export interface CreateApiCacheRequest {
		ttl: number;
		transitEncryptionEnabled?: boolean | null;
		atRestEncryptionEnabled?: boolean | null;
		apiCachingBehavior: ApiCacheApiCachingBehavior;
		type: ApiCacheType;
	}

	export interface CreateApiKeyRequest {
		description?: string | null;
		expires?: number | null;
	}

	export interface CreateDataSourceRequest {
		name: string;
		description?: string | null;
		type: DataSourceType;
		serviceRoleArn?: string | null;

		/** Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: DynamodbDataSourceConfig | null;

		/** Describes an AWS Lambda data source configuration. */
		lambdaConfig?: LambdaDataSourceConfig | null;

		/** Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: ElasticsearchDataSourceConfig | null;

		/** Describes an HTTP data source configuration. */
		httpConfig?: HttpDataSourceConfig | null;

		/** Describes a relational database data source configuration. */
		relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig | null;
	}

	export interface CreateFunctionRequest {
		name: string;
		description?: string | null;
		dataSourceName: string;
		requestMappingTemplate: string;
		responseMappingTemplate?: string | null;
		functionVersion: string;
	}

	export interface CreateGraphqlApiRequest {
		name: string;

		/** The CloudWatch Logs configuration. */
		logConfig?: LogConfig | null;
		authenticationType: GraphqlApiAuthenticationType;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: UserPoolConfig | null;

		/** Describes an OpenID Connect configuration. */
		openIDConnectConfig?: OpenIDConnectConfig | null;

		/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags?: TagMap | null;
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider> | null;
		xrayEnabled?: boolean | null;
	}

	export interface CreateResolverRequest {
		fieldName: string;
		dataSourceName?: string | null;
		requestMappingTemplate: string;
		responseMappingTemplate?: string | null;
		kind?: ResolverKind | null;

		/** The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: PipelineConfig | null;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: SyncConfig | null;

		/** The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: CachingConfig | null;
	}

	export enum TypeDefinitionFormat { SDL = 0, JSON = 1 }

	export interface CreateTypeRequest {
		definition: string;
		format: TypeFormat;
	}


	/** Represents the input of a <code>DeleteApiCache</code> operation. */
	export interface DeleteApiCacheRequest {
	}

	export interface DeleteApiKeyRequest {
	}

	export interface DeleteDataSourceRequest {
	}

	export interface DeleteFunctionRequest {
	}

	export interface DeleteGraphqlApiRequest {
	}

	export interface DeleteResolverRequest {
	}

	export interface DeleteTypeRequest {
	}


	/** Represents the input of a <code>FlushApiCache</code> operation. */
	export interface FlushApiCacheRequest {
	}


	/** Represents the input of a <code>GetApiCache</code> operation. */
	export interface GetApiCacheRequest {
	}

	export interface GetDataSourceRequest {
	}

	export interface GetFunctionRequest {
	}

	export interface GetGraphqlApiRequest {
	}

	export enum OutputType { SDL = 0, JSON = 1 }

	export interface GetIntrospectionSchemaRequest {
	}

	export interface GetResolverRequest {
	}

	export interface GetSchemaCreationStatusRequest {
	}

	export enum SchemaStatus { PROCESSING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, SUCCESS = 4, NOT_APPLICABLE = 5 }

	export interface GetTypeRequest {
	}

	export interface ListApiKeysRequest {
	}

	export interface ListDataSourcesRequest {
	}

	export interface ListFunctionsRequest {
	}

	export interface ListGraphqlApisRequest {
	}

	export interface ListResolversByFunctionRequest {
	}

	export interface ListResolversRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface ListTypesRequest {
	}

	export interface StartSchemaCreationRequest {
		definition: string;
	}

	export interface TagResourceRequest {

		/**
		 * A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects.
		 * Required
		 */
		tags: TagMap;
	}

	export interface UntagResourceRequest {
	}


	/** Represents the input of a <code>UpdateApiCache</code> operation. */
	export interface UpdateApiCacheRequest {
		ttl: number;
		apiCachingBehavior: ApiCacheApiCachingBehavior;
		type: ApiCacheType;
	}

	export interface UpdateApiKeyRequest {
		description?: string | null;
		expires?: number | null;
	}

	export interface UpdateDataSourceRequest {
		description?: string | null;
		type: DataSourceType;
		serviceRoleArn?: string | null;

		/** Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: DynamodbDataSourceConfig | null;

		/** Describes an AWS Lambda data source configuration. */
		lambdaConfig?: LambdaDataSourceConfig | null;

		/** Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: ElasticsearchDataSourceConfig | null;

		/** Describes an HTTP data source configuration. */
		httpConfig?: HttpDataSourceConfig | null;

		/** Describes a relational database data source configuration. */
		relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig | null;
	}

	export interface UpdateFunctionRequest {
		name: string;
		description?: string | null;
		dataSourceName: string;
		requestMappingTemplate: string;
		responseMappingTemplate?: string | null;
		functionVersion: string;
	}

	export interface UpdateGraphqlApiRequest {
		name: string;

		/** The CloudWatch Logs configuration. */
		logConfig?: LogConfig | null;
		authenticationType?: GraphqlApiAuthenticationType | null;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: UserPoolConfig | null;

		/** Describes an OpenID Connect configuration. */
		openIDConnectConfig?: OpenIDConnectConfig | null;
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider> | null;
		xrayEnabled?: boolean | null;
	}

	export interface UpdateResolverRequest {
		dataSourceName?: string | null;
		requestMappingTemplate: string;
		responseMappingTemplate?: string | null;
		kind?: ResolverKind | null;

		/** The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: PipelineConfig | null;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: SyncConfig | null;

		/** The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: CachingConfig | null;
	}

	export interface UpdateTypeRequest {
		definition?: string | null;
		format: TypeFormat;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a cache for the GraphQL API.
		 * Post v1/apis/{apiId}/ApiCaches
		 * @param {string} apiId The GraphQL API Id.
		 * @return {CreateApiCacheResponse} Success
		 */
		CreateApiCache(apiId: string, requestBody: CreateApiCachePostBody): Observable<CreateApiCacheResponse> {
			return this.http.post<CreateApiCacheResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/ApiCaches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an <code>ApiCache</code> object.
		 * Delete v1/apis/{apiId}/ApiCaches
		 * @param {string} apiId The API ID.
		 * @return {DeleteApiCacheResponse} Success
		 */
		DeleteApiCache(apiId: string): Observable<DeleteApiCacheResponse> {
			return this.http.delete<DeleteApiCacheResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/ApiCaches', {});
		}

		/**
		 * Retrieves an <code>ApiCache</code> object.
		 * Get v1/apis/{apiId}/ApiCaches
		 * @param {string} apiId The API ID.
		 * @return {GetApiCacheResponse} Success
		 */
		GetApiCache(apiId: string): Observable<GetApiCacheResponse> {
			return this.http.get<GetApiCacheResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/ApiCaches', {});
		}

		/**
		 * Creates a unique key that you can distribute to clients who are executing your API.
		 * Post v1/apis/{apiId}/apikeys
		 * @param {string} apiId The ID for your GraphQL API.
		 * @return {CreateApiKeyResponse} Success
		 */
		CreateApiKey(apiId: string, requestBody: CreateApiKeyPostBody): Observable<CreateApiKeyResponse> {
			return this.http.post<CreateApiKeyResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/apikeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically sometime after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
		 * Get v1/apis/{apiId}/apikeys
		 * @param {string} apiId The API ID.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListApiKeysResponse} Success
		 */
		ListApiKeys(apiId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListApiKeysResponse> {
			return this.http.get<ListApiKeysResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/apikeys&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a <code>DataSource</code> object.
		 * Post v1/apis/{apiId}/datasources
		 * @param {string} apiId The API ID for the GraphQL API for the <code>DataSource</code>.
		 * @return {CreateDataSourceResponse} Success
		 */
		CreateDataSource(apiId: string, requestBody: CreateDataSourcePostBody): Observable<CreateDataSourceResponse> {
			return this.http.post<CreateDataSourceResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/datasources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the data sources for a given API.
		 * Get v1/apis/{apiId}/datasources
		 * @param {string} apiId The API ID.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListDataSourcesResponse} Success
		 */
		ListDataSources(apiId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDataSourcesResponse> {
			return this.http.get<ListDataSourcesResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/datasources&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. Multiple functions can be used to compose the resolver logic.</p>
		 * Post v1/apis/{apiId}/functions
		 * @param {string} apiId The GraphQL API ID.
		 * @return {CreateFunctionResponse} Success
		 */
		CreateFunction(apiId: string, requestBody: CreateFunctionPostBody): Observable<CreateFunctionResponse> {
			return this.http.post<CreateFunctionResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/functions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List multiple functions.
		 * Get v1/apis/{apiId}/functions
		 * @param {string} apiId The GraphQL API ID.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListFunctionsResponse} Success
		 */
		ListFunctions(apiId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListFunctionsResponse> {
			return this.http.get<ListFunctionsResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/functions&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a <code>GraphqlApi</code> object.
		 * Post v1/apis
		 * @return {CreateGraphqlApiResponse} Success
		 */
		CreateGraphqlApi(requestBody: CreateGraphqlApiPostBody): Observable<CreateGraphqlApiResponse> {
			return this.http.post<CreateGraphqlApiResponse>(this.baseUri + 'v1/apis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists your GraphQL APIs.
		 * Get v1/apis
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListGraphqlApisResponse} Success
		 */
		ListGraphqlApis(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListGraphqlApisResponse> {
			return this.http.get<ListGraphqlApisResponse>(this.baseUri + 'v1/apis?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand and converts the data source's responses into GraphQL.</p>
		 * Post v1/apis/{apiId}/types/{typeName}/resolvers
		 * @param {string} apiId The ID for the GraphQL API for which the resolver is being created.
		 * @param {string} typeName The name of the <code>Type</code>.
		 * @return {CreateResolverResponse} Success
		 */
		CreateResolver(apiId: string, typeName: string, requestBody: CreateResolverPostBody): Observable<CreateResolverResponse> {
			return this.http.post<CreateResolverResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '/resolvers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resolvers for a given API and type.
		 * Get v1/apis/{apiId}/types/{typeName}/resolvers
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The type name.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListResolversResponse} Success
		 */
		ListResolvers(apiId: string, typeName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListResolversResponse> {
			return this.http.get<ListResolversResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '/resolvers&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a <code>Type</code> object.
		 * Post v1/apis/{apiId}/types
		 * @param {string} apiId The API ID.
		 * @return {CreateTypeResponse} Success
		 */
		CreateType(apiId: string, requestBody: CreateTypePostBody): Observable<CreateTypeResponse> {
			return this.http.post<CreateTypeResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an API key.
		 * Delete v1/apis/{apiId}/apikeys/{id}
		 * @param {string} apiId The API ID.
		 * @param {string} id The ID for the API key.
		 * @return {DeleteApiKeyResponse} Success
		 */
		DeleteApiKey(apiId: string, id: string): Observable<DeleteApiKeyResponse> {
			return this.http.delete<DeleteApiKeyResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/apikeys/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates an API key.
		 * Post v1/apis/{apiId}/apikeys/{id}
		 * @param {string} apiId The ID for the GraphQL API.
		 * @param {string} id The API key ID.
		 * @return {UpdateApiKeyResponse} Success
		 */
		UpdateApiKey(apiId: string, id: string, requestBody: UpdateApiKeyPostBody): Observable<UpdateApiKeyResponse> {
			return this.http.post<UpdateApiKeyResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/apikeys/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a <code>DataSource</code> object.
		 * Delete v1/apis/{apiId}/datasources/{name}
		 * @param {string} apiId The API ID.
		 * @param {string} name The name of the data source.
		 * @return {DeleteDataSourceResponse} Success
		 */
		DeleteDataSource(apiId: string, name: string): Observable<DeleteDataSourceResponse> {
			return this.http.delete<DeleteDataSourceResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/datasources/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Retrieves a <code>DataSource</code> object.
		 * Get v1/apis/{apiId}/datasources/{name}
		 * @param {string} apiId The API ID.
		 * @param {string} name The name of the data source.
		 * @return {GetDataSourceResponse} Success
		 */
		GetDataSource(apiId: string, name: string): Observable<GetDataSourceResponse> {
			return this.http.get<GetDataSourceResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/datasources/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a <code>DataSource</code> object.
		 * Post v1/apis/{apiId}/datasources/{name}
		 * @param {string} apiId The API ID.
		 * @param {string} name The new name for the data source.
		 * @return {UpdateDataSourceResponse} Success
		 */
		UpdateDataSource(apiId: string, name: string, requestBody: UpdateDataSourcePostBody): Observable<UpdateDataSourceResponse> {
			return this.http.post<UpdateDataSourceResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/datasources/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a <code>Function</code>.
		 * Delete v1/apis/{apiId}/functions/{functionId}
		 * @param {string} apiId The GraphQL API ID.
		 * @param {string} functionId The <code>Function</code> ID.
		 * @return {DeleteFunctionResponse} Success
		 */
		DeleteFunction(apiId: string, functionId: string): Observable<DeleteFunctionResponse> {
			return this.http.delete<DeleteFunctionResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/functions/' + (functionId == null ? '' : encodeURIComponent(functionId)), {});
		}

		/**
		 * Get a <code>Function</code>.
		 * Get v1/apis/{apiId}/functions/{functionId}
		 * @param {string} apiId The GraphQL API ID.
		 * @param {string} functionId The <code>Function</code> ID.
		 * @return {GetFunctionResponse} Success
		 */
		GetFunction(apiId: string, functionId: string): Observable<GetFunctionResponse> {
			return this.http.get<GetFunctionResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/functions/' + (functionId == null ? '' : encodeURIComponent(functionId)), {});
		}

		/**
		 * Updates a <code>Function</code> object.
		 * Post v1/apis/{apiId}/functions/{functionId}
		 * @param {string} apiId The GraphQL API ID.
		 * @param {string} functionId The function ID.
		 * @return {UpdateFunctionResponse} Success
		 */
		UpdateFunction(apiId: string, functionId: string, requestBody: UpdateFunctionPostBody): Observable<UpdateFunctionResponse> {
			return this.http.post<UpdateFunctionResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/functions/' + (functionId == null ? '' : encodeURIComponent(functionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a <code>GraphqlApi</code> object.
		 * Delete v1/apis/{apiId}
		 * @param {string} apiId The API ID.
		 * @return {DeleteGraphqlApiResponse} Success
		 */
		DeleteGraphqlApi(apiId: string): Observable<DeleteGraphqlApiResponse> {
			return this.http.delete<DeleteGraphqlApiResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)), {});
		}

		/**
		 * Retrieves a <code>GraphqlApi</code> object.
		 * Get v1/apis/{apiId}
		 * @param {string} apiId The API ID for the GraphQL API.
		 * @return {GetGraphqlApiResponse} Success
		 */
		GetGraphqlApi(apiId: string): Observable<GetGraphqlApiResponse> {
			return this.http.get<GetGraphqlApiResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)), {});
		}

		/**
		 * Updates a <code>GraphqlApi</code> object.
		 * Post v1/apis/{apiId}
		 * @param {string} apiId The API ID.
		 * @return {UpdateGraphqlApiResponse} Success
		 */
		UpdateGraphqlApi(apiId: string, requestBody: UpdateGraphqlApiPostBody): Observable<UpdateGraphqlApiResponse> {
			return this.http.post<UpdateGraphqlApiResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a <code>Resolver</code> object.
		 * Delete v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The name of the resolver type.
		 * @param {string} fieldName The resolver field name.
		 * @return {DeleteResolverResponse} Success
		 */
		DeleteResolver(apiId: string, typeName: string, fieldName: string): Observable<DeleteResolverResponse> {
			return this.http.delete<DeleteResolverResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '/resolvers/' + (fieldName == null ? '' : encodeURIComponent(fieldName)), {});
		}

		/**
		 * Retrieves a <code>Resolver</code> object.
		 * Get v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The resolver type name.
		 * @param {string} fieldName The resolver field name.
		 * @return {GetResolverResponse} Success
		 */
		GetResolver(apiId: string, typeName: string, fieldName: string): Observable<GetResolverResponse> {
			return this.http.get<GetResolverResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '/resolvers/' + (fieldName == null ? '' : encodeURIComponent(fieldName)), {});
		}

		/**
		 * Updates a <code>Resolver</code> object.
		 * Post v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The new type name.
		 * @param {string} fieldName The new field name.
		 * @return {UpdateResolverResponse} Success
		 */
		UpdateResolver(apiId: string, typeName: string, fieldName: string, requestBody: UpdateResolverPostBody): Observable<UpdateResolverResponse> {
			return this.http.post<UpdateResolverResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '/resolvers/' + (fieldName == null ? '' : encodeURIComponent(fieldName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a <code>Type</code> object.
		 * Delete v1/apis/{apiId}/types/{typeName}
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The type name.
		 * @return {DeleteTypeResponse} Success
		 */
		DeleteType(apiId: string, typeName: string): Observable<DeleteTypeResponse> {
			return this.http.delete<DeleteTypeResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)), {});
		}

		/**
		 * Updates a <code>Type</code> object.
		 * Post v1/apis/{apiId}/types/{typeName}
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The new type name.
		 * @return {UpdateTypeResponse} Success
		 */
		UpdateType(apiId: string, typeName: string, requestBody: UpdateTypePostBody): Observable<UpdateTypeResponse> {
			return this.http.post<UpdateTypeResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Flushes an <code>ApiCache</code> object.
		 * Delete v1/apis/{apiId}/FlushCache
		 * @param {string} apiId The API ID.
		 * @return {FlushApiCacheResponse} Success
		 */
		FlushApiCache(apiId: string): Observable<FlushApiCacheResponse> {
			return this.http.delete<FlushApiCacheResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/FlushCache', {});
		}

		/**
		 * Retrieves the introspection schema for a GraphQL API.
		 * Get v1/apis/{apiId}/schema#format
		 * @param {string} apiId The API ID.
		 * @param {TypeFormat} format The schema format: SDL or JSON.
		 * @param {boolean} includeDirectives A flag that specifies whether the schema introspection should contain directives.
		 * @return {GetIntrospectionSchemaResponse} Success
		 */
		GetIntrospectionSchema(apiId: string, format: TypeFormat, includeDirectives: boolean | null | undefined): Observable<GetIntrospectionSchemaResponse> {
			return this.http.get<GetIntrospectionSchemaResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/schema#format&format=' + format + '&includeDirectives=' + includeDirectives, {});
		}

		/**
		 * Retrieves the current status of a schema creation operation.
		 * Get v1/apis/{apiId}/schemacreation
		 * @param {string} apiId The API ID.
		 * @return {GetSchemaCreationStatusResponse} Success
		 */
		GetSchemaCreationStatus(apiId: string): Observable<GetSchemaCreationStatusResponse> {
			return this.http.get<GetSchemaCreationStatusResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/schemacreation', {});
		}

		/**
		 * <p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>
		 * Post v1/apis/{apiId}/schemacreation
		 * @param {string} apiId The API ID.
		 * @return {StartSchemaCreationResponse} Success
		 */
		StartSchemaCreation(apiId: string, requestBody: StartSchemaCreationPostBody): Observable<StartSchemaCreationResponse> {
			return this.http.post<StartSchemaCreationResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/schemacreation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a <code>Type</code> object.
		 * Get v1/apis/{apiId}/types/{typeName}#format
		 * @param {string} apiId The API ID.
		 * @param {string} typeName The type name.
		 * @param {TypeFormat} format The type format: SDL or JSON.
		 * @return {GetTypeResponse} Success
		 */
		GetType(apiId: string, typeName: string, format: TypeFormat): Observable<GetTypeResponse> {
			return this.http.get<GetTypeResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '#format&format=' + format, {});
		}

		/**
		 * List the resolvers that are associated with a specific function.
		 * Get v1/apis/{apiId}/functions/{functionId}/resolvers
		 * @param {string} apiId The API ID.
		 * @param {string} functionId The Function ID.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListResolversByFunctionResponse} Success
		 */
		ListResolversByFunction(apiId: string, functionId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListResolversByFunctionResponse> {
			return this.http.get<ListResolversByFunctionResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/functions/' + (functionId == null ? '' : encodeURIComponent(functionId)) + '/resolvers&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the tags for a resource.
		 * Get v1/tags/{resourceArn}
		 * @param {string} resourceArn The <code>GraphqlApi</code> ARN.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Tags a resource with user-supplied tags.
		 * Post v1/tags/{resourceArn}
		 * @param {string} resourceArn The <code>GraphqlApi</code> ARN.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the types for a given API.
		 * Get v1/apis/{apiId}/types#format
		 * @param {string} apiId The API ID.
		 * @param {TypeFormat} format The type format: SDL or JSON.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
		 * @param {number} maxResults The maximum number of results you want the request to return.
		 * @return {ListTypesResponse} Success
		 */
		ListTypes(apiId: string, format: TypeFormat, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListTypesResponse> {
			return this.http.get<ListTypesResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types#format&format=' + format + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Untags a resource.
		 * Delete v1/tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The <code>GraphqlApi</code> ARN.
		 * @param {Array<string>} tagKeys A list of <code>TagKey</code> objects.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates the cache for the GraphQL API.
		 * Post v1/apis/{apiId}/ApiCaches/update
		 * @param {string} apiId The GraphQL API Id.
		 * @return {UpdateApiCacheResponse} Success
		 */
		UpdateApiCache(apiId: string, requestBody: UpdateApiCachePostBody): Observable<UpdateApiCacheResponse> {
			return this.http.post<UpdateApiCacheResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/ApiCaches/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateApiCachePostBody {

		/**
		 * <p>TTL in seconds for cache entries.</p> <p>Valid values are between 1 and 3600 seconds.</p>
		 * Required
		 */
		ttl: number;

		/** Transit encryption flag when connecting to cache. This setting cannot be updated after creation. */
		transitEncryptionEnabled?: boolean | null;

		/** At rest encryption flag for cache. This setting cannot be updated after creation. */
		atRestEncryptionEnabled?: boolean | null;

		/**
		 * <p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resovlers that you specify are cached.</p> </li> </ul>
		 * Required
		 */
		apiCachingBehavior: ApiCacheApiCachingBehavior;

		/**
		 * <p>The cache instance type.</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul>
		 * Required
		 */
		type: ApiCacheType;
	}

	export interface CreateApiKeyPostBody {

		/** A description of the purpose of the API key. */
		description?: string | null;

		/** The time from creation time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see . */
		expires?: number | null;
	}

	export interface CreateDataSourcePostBody {

		/**
		 * A user-supplied name for the <code>DataSource</code>.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: string;

		/** A description of the <code>DataSource</code>. */
		description?: string | null;

		/**
		 * The type of the <code>DataSource</code>.
		 * Required
		 */
		type: DataSourceType;

		/** The AWS IAM service role ARN for the data source. The system assumes this role when accessing the data source. */
		serviceRoleArn?: string | null;

		/** Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: CreateDataSourcePostBodyDynamodbConfig | null;

		/** Describes an AWS Lambda data source configuration. */
		lambdaConfig?: CreateDataSourcePostBodyLambdaConfig | null;

		/** Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: CreateDataSourcePostBodyElasticsearchConfig | null;

		/** Describes an HTTP data source configuration. */
		httpConfig?: CreateDataSourcePostBodyHttpConfig | null;

		/** Describes a relational database data source configuration. */
		relationalDatabaseConfig?: CreateDataSourcePostBodyRelationalDatabaseConfig | null;
	}

	export interface CreateDataSourcePostBodyDynamodbConfig {
		tableName?: string | null;
		awsRegion?: string | null;
		useCallerCredentials?: boolean | null;

		/** Describes a Delta Sync configuration. */
		deltaSyncConfig?: DeltaSyncConfig | null;
		versioned?: boolean | null;
	}

	export interface CreateDataSourcePostBodyLambdaConfig {
		lambdaFunctionArn?: string | null;
	}

	export interface CreateDataSourcePostBodyElasticsearchConfig {
		endpoint?: string | null;
		awsRegion?: string | null;
	}

	export interface CreateDataSourcePostBodyHttpConfig {
		endpoint?: string | null;

		/** The authorization config in case the HTTP endpoint requires authorization. */
		authorizationConfig?: AuthorizationConfig | null;
	}

	export interface CreateDataSourcePostBodyRelationalDatabaseConfig {
		relationalDatabaseSourceType?: RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType | null;

		/** The Amazon RDS HTTP endpoint configuration. */
		rdsHttpEndpointConfig?: RdsHttpEndpointConfig | null;
	}

	export interface CreateFunctionPostBody {

		/**
		 * The <code>Function</code> name. The function name does not have to be unique.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: string;

		/** The <code>Function</code> description. */
		description?: string | null;

		/**
		 * The <code>Function</code> <code>DataSource</code> name.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: string;

		/**
		 * The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: string;

		/**
		 * The <code>Function</code> response mapping template.
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string | null;

		/**
		 * The <code>version</code> of the request mapping template. Currently the supported value is 2018-05-29.
		 * Required
		 */
		functionVersion: string;
	}

	export interface CreateGraphqlApiPostBody {

		/**
		 * A user-supplied name for the <code>GraphqlApi</code>.
		 * Required
		 */
		name: string;

		/** The CloudWatch Logs configuration. */
		logConfig?: CreateGraphqlApiPostBodyLogConfig | null;

		/**
		 * The authentication type: API key, AWS IAM, OIDC, or Amazon Cognito user pools.
		 * Required
		 */
		authenticationType: GraphqlApiAuthenticationType;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: CreateGraphqlApiPostBodyUserPoolConfig | null;

		/** Describes an OpenID Connect configuration. */
		openIDConnectConfig?: CreateGraphqlApiPostBodyOpenIDConnectConfig | null;

		/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags?: {[id: string]: string } | null;

		/** A list of additional authentication providers for the <code>GraphqlApi</code> API. */
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider> | null;

		/** A flag indicating whether to enable X-Ray tracing for the <code>GraphqlApi</code>. */
		xrayEnabled?: boolean | null;
	}

	export interface CreateGraphqlApiPostBodyLogConfig {
		fieldLogLevel?: LogConfigFieldLogLevel | null;
		cloudWatchLogsRoleArn?: string | null;
		excludeVerboseContent?: boolean | null;
	}

	export interface CreateGraphqlApiPostBodyUserPoolConfig {
		userPoolId?: string | null;
		awsRegion?: string | null;
		defaultAction?: UserPoolConfigDefaultAction | null;
		appIdClientRegex?: string | null;
	}

	export interface CreateGraphqlApiPostBodyOpenIDConnectConfig {
		issuer?: string | null;
		clientId?: string | null;
		iatTTL?: number | null;
		authTTL?: number | null;
	}

	export interface CreateResolverPostBody {

		/**
		 * The name of the field to attach the resolver to.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		fieldName: string;

		/**
		 * The name of the data source for which the resolver is being created.
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName?: string | null;

		/**
		 * <p>The mapping template to be used for requests.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p>
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: string;

		/**
		 * The mapping template to be used for responses from the data source.
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string | null;

		/** <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of <code>Function</code> in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.</p> </li> </ul> */
		kind?: ResolverKind | null;

		/** The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: CreateResolverPostBodyPipelineConfig | null;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: CreateResolverPostBodySyncConfig | null;

		/** The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: CreateResolverPostBodyCachingConfig | null;
	}

	export interface CreateResolverPostBodyPipelineConfig {
		functions?: Array<string> | null;
	}

	export interface CreateResolverPostBodySyncConfig {
		conflictHandler?: SyncConfigConflictHandler | null;
		conflictDetection?: SyncConfigConflictDetection | null;

		/** The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler. */
		lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig | null;
	}

	export interface CreateResolverPostBodyCachingConfig {
		ttl?: number | null;
		cachingKeys?: Array<string> | null;
	}

	export interface CreateTypePostBody {

		/**
		 * <p>The type definition, in GraphQL Schema Definition Language (SDL) format.</p> <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL documentation</a>.</p>
		 * Required
		 */
		definition: string;

		/**
		 * The type format: SDL or JSON.
		 * Required
		 */
		format: TypeFormat;
	}

	export interface UpdateApiKeyPostBody {

		/** A description of the purpose of the API key. */
		description?: string | null;

		/** The time from update time after which the API key expires. The date is represented as seconds since the epoch. For more information, see . */
		expires?: number | null;
	}

	export interface UpdateDataSourcePostBody {

		/** The new description for the data source. */
		description?: string | null;

		/**
		 * The new data source type.
		 * Required
		 */
		type: DataSourceType;

		/** The new service role ARN for the data source. */
		serviceRoleArn?: string | null;

		/** Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: UpdateDataSourcePostBodyDynamodbConfig | null;

		/** Describes an AWS Lambda data source configuration. */
		lambdaConfig?: UpdateDataSourcePostBodyLambdaConfig | null;

		/** Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: UpdateDataSourcePostBodyElasticsearchConfig | null;

		/** Describes an HTTP data source configuration. */
		httpConfig?: UpdateDataSourcePostBodyHttpConfig | null;

		/** Describes a relational database data source configuration. */
		relationalDatabaseConfig?: UpdateDataSourcePostBodyRelationalDatabaseConfig | null;
	}

	export interface UpdateDataSourcePostBodyDynamodbConfig {
		tableName?: string | null;
		awsRegion?: string | null;
		useCallerCredentials?: boolean | null;

		/** Describes a Delta Sync configuration. */
		deltaSyncConfig?: DeltaSyncConfig | null;
		versioned?: boolean | null;
	}

	export interface UpdateDataSourcePostBodyLambdaConfig {
		lambdaFunctionArn?: string | null;
	}

	export interface UpdateDataSourcePostBodyElasticsearchConfig {
		endpoint?: string | null;
		awsRegion?: string | null;
	}

	export interface UpdateDataSourcePostBodyHttpConfig {
		endpoint?: string | null;

		/** The authorization config in case the HTTP endpoint requires authorization. */
		authorizationConfig?: AuthorizationConfig | null;
	}

	export interface UpdateDataSourcePostBodyRelationalDatabaseConfig {
		relationalDatabaseSourceType?: RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType | null;

		/** The Amazon RDS HTTP endpoint configuration. */
		rdsHttpEndpointConfig?: RdsHttpEndpointConfig | null;
	}

	export interface UpdateFunctionPostBody {

		/**
		 * The <code>Function</code> name.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: string;

		/** The <code>Function</code> description. */
		description?: string | null;

		/**
		 * The <code>Function</code> <code>DataSource</code> name.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: string;

		/**
		 * The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: string;

		/**
		 * The <code>Function</code> request mapping template.
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string | null;

		/**
		 * The <code>version</code> of the request mapping template. Currently the supported value is 2018-05-29.
		 * Required
		 */
		functionVersion: string;
	}

	export interface UpdateGraphqlApiPostBody {

		/**
		 * The new name for the <code>GraphqlApi</code> object.
		 * Required
		 */
		name: string;

		/** The CloudWatch Logs configuration. */
		logConfig?: UpdateGraphqlApiPostBodyLogConfig | null;

		/** The new authentication type for the <code>GraphqlApi</code> object. */
		authenticationType?: GraphqlApiAuthenticationType | null;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: UpdateGraphqlApiPostBodyUserPoolConfig | null;

		/** Describes an OpenID Connect configuration. */
		openIDConnectConfig?: UpdateGraphqlApiPostBodyOpenIDConnectConfig | null;

		/** A list of additional authentication providers for the <code>GraphqlApi</code> API. */
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider> | null;

		/** A flag indicating whether to enable X-Ray tracing for the <code>GraphqlApi</code>. */
		xrayEnabled?: boolean | null;
	}

	export interface UpdateGraphqlApiPostBodyLogConfig {
		fieldLogLevel?: LogConfigFieldLogLevel | null;
		cloudWatchLogsRoleArn?: string | null;
		excludeVerboseContent?: boolean | null;
	}

	export interface UpdateGraphqlApiPostBodyUserPoolConfig {
		userPoolId?: string | null;
		awsRegion?: string | null;
		defaultAction?: UserPoolConfigDefaultAction | null;
		appIdClientRegex?: string | null;
	}

	export interface UpdateGraphqlApiPostBodyOpenIDConnectConfig {
		issuer?: string | null;
		clientId?: string | null;
		iatTTL?: number | null;
		authTTL?: number | null;
	}

	export interface UpdateResolverPostBody {

		/**
		 * The new data source name.
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName?: string | null;

		/**
		 * The new request mapping template.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: string;

		/**
		 * The new response mapping template.
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string | null;

		/** <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of <code>Function</code> in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.</p> </li> </ul> */
		kind?: ResolverKind | null;

		/** The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: UpdateResolverPostBodyPipelineConfig | null;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: UpdateResolverPostBodySyncConfig | null;

		/** The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: UpdateResolverPostBodyCachingConfig | null;
	}

	export interface UpdateResolverPostBodyPipelineConfig {
		functions?: Array<string> | null;
	}

	export interface UpdateResolverPostBodySyncConfig {
		conflictHandler?: SyncConfigConflictHandler | null;
		conflictDetection?: SyncConfigConflictDetection | null;

		/** The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler. */
		lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig | null;
	}

	export interface UpdateResolverPostBodyCachingConfig {
		ttl?: number | null;
		cachingKeys?: Array<string> | null;
	}

	export interface UpdateTypePostBody {

		/** The new definition. */
		definition?: string | null;

		/**
		 * The new type format: SDL or JSON.
		 * Required
		 */
		format: TypeFormat;
	}

	export interface StartSchemaCreationPostBody {

		/**
		 * The schema definition, in GraphQL schema language format.
		 * Required
		 */
		definition: string;
	}

	export interface TagResourcePostBody {

		/**
		 * A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects.
		 * Required
		 */
		tags: {[id: string]: string };
	}

	export interface UpdateApiCachePostBody {

		/**
		 * <p>TTL in seconds for cache entries.</p> <p>Valid values are between 1 and 3600 seconds.</p>
		 * Required
		 */
		ttl: number;

		/**
		 * <p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resovlers that you specify are cached.</p> </li> </ul>
		 * Required
		 */
		apiCachingBehavior: ApiCacheApiCachingBehavior;

		/**
		 * <p>The cache instance type.</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul>
		 * Required
		 */
		type: ApiCacheType;
	}

}

