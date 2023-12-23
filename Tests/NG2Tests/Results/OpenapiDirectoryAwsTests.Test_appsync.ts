import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the output of a <code>CreateApiCache</code> operation. */
	export interface CreateApiCacheResponse {

		/** The <code>ApiCache</code> object. */
		apiCache?: ApiCache;
	}

	/** Represents the output of a <code>CreateApiCache</code> operation. */
	export interface CreateApiCacheResponseFormProperties {
	}
	export function CreateCreateApiCacheResponseFormGroup() {
		return new FormGroup<CreateApiCacheResponseFormProperties>({
		});

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

	/** The <code>ApiCache</code> object. */
	export interface ApiCacheFormProperties {
		ttl: FormControl<number | null | undefined>,
		apiCachingBehavior: FormControl<ApiCacheApiCachingBehavior | null | undefined>,
		transitEncryptionEnabled: FormControl<boolean | null | undefined>,
		atRestEncryptionEnabled: FormControl<boolean | null | undefined>,
		type: FormControl<ApiCacheType | null | undefined>,
		status: FormControl<ApiCacheStatus | null | undefined>,
	}
	export function CreateApiCacheFormGroup() {
		return new FormGroup<ApiCacheFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined),
			apiCachingBehavior: new FormControl<ApiCacheApiCachingBehavior | null | undefined>(undefined),
			transitEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			atRestEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<ApiCacheType | null | undefined>(undefined),
			status: new FormControl<ApiCacheStatus | null | undefined>(undefined),
		});

	}

	export enum ApiCacheApiCachingBehavior { FULL_REQUEST_CACHING = 0, PER_RESOLVER_CACHING = 1 }

	export enum ApiCacheType { T2_SMALL = 0, T2_MEDIUM = 1, R4_LARGE = 2, R4_XLARGE = 3, R4_2XLARGE = 4, R4_4XLARGE = 5, R4_8XLARGE = 6 }

	export enum ApiCacheStatus { AVAILABLE = 0, CREATING = 1, DELETING = 2, MODIFYING = 3, FAILED = 4 }

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
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

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
		});

	}

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
		});

	}

	export interface CreateApiKeyResponse {

		/** <p>Describes an API key.</p> <p>Customers invoke AWS AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: This version was introduced at launch in November 2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB TTL. The keys ceased to be valid after February 21, 2018 and should not be used after that date.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we will delete these keys from the table after February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: This version was introduced in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds. Key expiration can only be updated while the key has not expired.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as seconds.</p> </li> </ul> */
		apiKey?: ApiKey;
	}
	export interface CreateApiKeyResponseFormProperties {
	}
	export function CreateCreateApiKeyResponseFormGroup() {
		return new FormGroup<CreateApiKeyResponseFormProperties>({
		});

	}


	/** <p>Describes an API key.</p> <p>Customers invoke AWS AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: This version was introduced at launch in November 2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB TTL. The keys ceased to be valid after February 21, 2018 and should not be used after that date.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we will delete these keys from the table after February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: This version was introduced in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds. Key expiration can only be updated while the key has not expired.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as seconds.</p> </li> </ul> */
	export interface ApiKey {
		id?: string | null;
		description?: string | null;
		expires?: number | null;
	}

	/** <p>Describes an API key.</p> <p>Customers invoke AWS AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: This version was introduced at launch in November 2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB TTL. The keys ceased to be valid after February 21, 2018 and should not be used after that date.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we will delete these keys from the table after February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: This version was introduced in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds. Key expiration can only be updated while the key has not expired.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as seconds.</p> </li> </ul> */
	export interface ApiKeyFormProperties {
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		expires: FormControl<number | null | undefined>,
	}
	export function CreateApiKeyFormGroup() {
		return new FormGroup<ApiKeyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expires: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface ApiKeyLimitExceededException {
	}
	export interface ApiKeyLimitExceededExceptionFormProperties {
	}
	export function CreateApiKeyLimitExceededExceptionFormGroup() {
		return new FormGroup<ApiKeyLimitExceededExceptionFormProperties>({
		});

	}

	export interface ApiKeyValidityOutOfBoundsException {
	}
	export interface ApiKeyValidityOutOfBoundsExceptionFormProperties {
	}
	export function CreateApiKeyValidityOutOfBoundsExceptionFormGroup() {
		return new FormGroup<ApiKeyValidityOutOfBoundsExceptionFormProperties>({
		});

	}

	export interface CreateDataSourceResponse {

		/** Describes a data source. */
		dataSource?: DataSource;
	}
	export interface CreateDataSourceResponseFormProperties {
	}
	export function CreateCreateDataSourceResponseFormGroup() {
		return new FormGroup<CreateDataSourceResponseFormProperties>({
		});

	}


	/** Describes a data source. */
	export interface DataSource {
		dataSourceArn?: string | null;

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name?: string | null;
		description?: string | null;
		type?: DataSourceType | null;
		serviceRoleArn?: string | null;

		/** Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: DynamodbDataSourceConfig;

		/** Describes an AWS Lambda data source configuration. */
		lambdaConfig?: LambdaDataSourceConfig;

		/** Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: ElasticsearchDataSourceConfig;

		/** Describes an HTTP data source configuration. */
		httpConfig?: HttpDataSourceConfig;

		/** Describes a relational database data source configuration. */
		relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
	}

	/** Describes a data source. */
	export interface DataSourceFormProperties {
		dataSourceArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		type: FormControl<DataSourceType | null | undefined>,
		serviceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			dataSourceArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DataSourceType | null | undefined>(undefined),
			serviceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataSourceType { AWS_LAMBDA = 0, AMAZON_DYNAMODB = 1, AMAZON_ELASTICSEARCH = 2, NONE = 3, HTTP = 4, RELATIONAL_DATABASE = 5 }


	/** Describes an Amazon DynamoDB data source configuration. */
	export interface DynamodbDataSourceConfig {

		/** Required */
		tableName: string;

		/** Required */
		awsRegion: string;
		useCallerCredentials?: boolean | null;

		/** Describes a Delta Sync configuration. */
		deltaSyncConfig?: DeltaSyncConfig;
		versioned?: boolean | null;
	}

	/** Describes an Amazon DynamoDB data source configuration. */
	export interface DynamodbDataSourceConfigFormProperties {

		/** Required */
		tableName: FormControl<string | null | undefined>,

		/** Required */
		awsRegion: FormControl<string | null | undefined>,
		useCallerCredentials: FormControl<boolean | null | undefined>,
		versioned: FormControl<boolean | null | undefined>,
	}
	export function CreateDynamodbDataSourceConfigFormGroup() {
		return new FormGroup<DynamodbDataSourceConfigFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			awsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useCallerCredentials: new FormControl<boolean | null | undefined>(undefined),
			versioned: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a Delta Sync configuration. */
	export interface DeltaSyncConfig {
		baseTableTTL?: number | null;
		deltaSyncTableName?: string | null;
		deltaSyncTableTTL?: number | null;
	}

	/** Describes a Delta Sync configuration. */
	export interface DeltaSyncConfigFormProperties {
		baseTableTTL: FormControl<number | null | undefined>,
		deltaSyncTableName: FormControl<string | null | undefined>,
		deltaSyncTableTTL: FormControl<number | null | undefined>,
	}
	export function CreateDeltaSyncConfigFormGroup() {
		return new FormGroup<DeltaSyncConfigFormProperties>({
			baseTableTTL: new FormControl<number | null | undefined>(undefined),
			deltaSyncTableName: new FormControl<string | null | undefined>(undefined),
			deltaSyncTableTTL: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes an AWS Lambda data source configuration. */
	export interface LambdaDataSourceConfig {

		/** Required */
		lambdaFunctionArn: string;
	}

	/** Describes an AWS Lambda data source configuration. */
	export interface LambdaDataSourceConfigFormProperties {

		/** Required */
		lambdaFunctionArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaDataSourceConfigFormGroup() {
		return new FormGroup<LambdaDataSourceConfigFormProperties>({
			lambdaFunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an Elasticsearch data source configuration. */
	export interface ElasticsearchDataSourceConfig {

		/** Required */
		endpoint: string;

		/** Required */
		awsRegion: string;
	}

	/** Describes an Elasticsearch data source configuration. */
	export interface ElasticsearchDataSourceConfigFormProperties {

		/** Required */
		endpoint: FormControl<string | null | undefined>,

		/** Required */
		awsRegion: FormControl<string | null | undefined>,
	}
	export function CreateElasticsearchDataSourceConfigFormGroup() {
		return new FormGroup<ElasticsearchDataSourceConfigFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			awsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an HTTP data source configuration. */
	export interface HttpDataSourceConfig {
		endpoint?: string | null;

		/** The authorization config in case the HTTP endpoint requires authorization. */
		authorizationConfig?: AuthorizationConfig;
	}

	/** Describes an HTTP data source configuration. */
	export interface HttpDataSourceConfigFormProperties {
		endpoint: FormControl<string | null | undefined>,
	}
	export function CreateHttpDataSourceConfigFormGroup() {
		return new FormGroup<HttpDataSourceConfigFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The authorization config in case the HTTP endpoint requires authorization. */
	export interface AuthorizationConfig {

		/** Required */
		authorizationType: AuthorizationConfigAuthorizationType;

		/** The AWS IAM configuration. */
		awsIamConfig?: AwsIamConfig;
	}

	/** The authorization config in case the HTTP endpoint requires authorization. */
	export interface AuthorizationConfigFormProperties {

		/** Required */
		authorizationType: FormControl<AuthorizationConfigAuthorizationType | null | undefined>,
	}
	export function CreateAuthorizationConfigFormGroup() {
		return new FormGroup<AuthorizationConfigFormProperties>({
			authorizationType: new FormControl<AuthorizationConfigAuthorizationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuthorizationConfigAuthorizationType { AWS_IAM = 0 }


	/** The AWS IAM configuration. */
	export interface AwsIamConfig {
		signingRegion?: string | null;
		signingServiceName?: string | null;
	}

	/** The AWS IAM configuration. */
	export interface AwsIamConfigFormProperties {
		signingRegion: FormControl<string | null | undefined>,
		signingServiceName: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamConfigFormGroup() {
		return new FormGroup<AwsIamConfigFormProperties>({
			signingRegion: new FormControl<string | null | undefined>(undefined),
			signingServiceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a relational database data source configuration. */
	export interface RelationalDatabaseDataSourceConfig {
		relationalDatabaseSourceType?: RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType | null;

		/** The Amazon RDS HTTP endpoint configuration. */
		rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
	}

	/** Describes a relational database data source configuration. */
	export interface RelationalDatabaseDataSourceConfigFormProperties {
		relationalDatabaseSourceType: FormControl<RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType | null | undefined>,
	}
	export function CreateRelationalDatabaseDataSourceConfigFormGroup() {
		return new FormGroup<RelationalDatabaseDataSourceConfigFormProperties>({
			relationalDatabaseSourceType: new FormControl<RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType | null | undefined>(undefined),
		});

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

	/** The Amazon RDS HTTP endpoint configuration. */
	export interface RdsHttpEndpointConfigFormProperties {
		awsRegion: FormControl<string | null | undefined>,
		dbClusterIdentifier: FormControl<string | null | undefined>,
		databaseName: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,
		awsSecretStoreArn: FormControl<string | null | undefined>,
	}
	export function CreateRdsHttpEndpointConfigFormGroup() {
		return new FormGroup<RdsHttpEndpointConfigFormProperties>({
			awsRegion: new FormControl<string | null | undefined>(undefined),
			dbClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			awsSecretStoreArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RelationalDatabaseSourceType { RDS_HTTP_ENDPOINT = 0 }

	export interface CreateFunctionResponse {

		/** A function is a reusable entity. Multiple functions can be used to compose the resolver logic. */
		functionConfiguration?: FunctionConfiguration;
	}
	export interface CreateFunctionResponseFormProperties {
	}
	export function CreateCreateFunctionResponseFormGroup() {
		return new FormGroup<CreateFunctionResponseFormProperties>({
		});

	}


	/** A function is a reusable entity. Multiple functions can be used to compose the resolver logic. */
	export interface FunctionConfiguration {
		functionId?: string | null;
		functionArn?: string | null;

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name?: string | null;
		description?: string | null;

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName?: string | null;

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate?: string | null;

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string | null;
		functionVersion?: string | null;
	}

	/** A function is a reusable entity. Multiple functions can be used to compose the resolver logic. */
	export interface FunctionConfigurationFormProperties {
		functionId: FormControl<string | null | undefined>,
		functionArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,
		functionVersion: FormControl<string | null | undefined>,
	}
	export function CreateFunctionConfigurationFormGroup() {
		return new FormGroup<FunctionConfigurationFormProperties>({
			functionId: new FormControl<string | null | undefined>(undefined),
			functionArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined),
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			functionVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGraphqlApiResponse {

		/** Describes a GraphQL API. */
		graphqlApi?: GraphqlApi;
	}
	export interface CreateGraphqlApiResponseFormProperties {
	}
	export function CreateCreateGraphqlApiResponseFormGroup() {
		return new FormGroup<CreateGraphqlApiResponseFormProperties>({
		});

	}


	/** Describes a GraphQL API. */
	export interface GraphqlApi {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name?: string | null;
		apiId?: string | null;
		authenticationType?: GraphqlApiAuthenticationType | null;

		/** The CloudWatch Logs configuration. */
		logConfig?: LogConfig;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: UserPoolConfig;

		/** Describes an OpenID Connect configuration. */
		openIDConnectConfig?: OpenIDConnectConfig;
		arn?: string | null;
		uris?: MapOfStringToString;

		/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags?: TagMap;
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;
		xrayEnabled?: boolean | null;
	}

	/** Describes a GraphQL API. */
	export interface GraphqlApiFormProperties {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: FormControl<string | null | undefined>,
		apiId: FormControl<string | null | undefined>,
		authenticationType: FormControl<GraphqlApiAuthenticationType | null | undefined>,
		arn: FormControl<string | null | undefined>,
		xrayEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGraphqlApiFormGroup() {
		return new FormGroup<GraphqlApiFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			apiId: new FormControl<string | null | undefined>(undefined),
			authenticationType: new FormControl<GraphqlApiAuthenticationType | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			xrayEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GraphqlApiAuthenticationType { API_KEY = 0, AWS_IAM = 1, AMAZON_COGNITO_USER_POOLS = 2, OPENID_CONNECT = 3 }


	/** The CloudWatch Logs configuration. */
	export interface LogConfig {

		/** Required */
		fieldLogLevel: LogConfigFieldLogLevel;

		/** Required */
		cloudWatchLogsRoleArn: string;
		excludeVerboseContent?: boolean | null;
	}

	/** The CloudWatch Logs configuration. */
	export interface LogConfigFormProperties {

		/** Required */
		fieldLogLevel: FormControl<LogConfigFieldLogLevel | null | undefined>,

		/** Required */
		cloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		excludeVerboseContent: FormControl<boolean | null | undefined>,
	}
	export function CreateLogConfigFormGroup() {
		return new FormGroup<LogConfigFormProperties>({
			fieldLogLevel: new FormControl<LogConfigFieldLogLevel | null | undefined>(undefined, [Validators.required]),
			cloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			excludeVerboseContent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LogConfigFieldLogLevel { NONE = 0, ERROR = 1, ALL = 2 }


	/** Describes an Amazon Cognito user pool configuration. */
	export interface UserPoolConfig {

		/** Required */
		userPoolId: string;

		/** Required */
		awsRegion: string;

		/** Required */
		defaultAction: UserPoolConfigDefaultAction;
		appIdClientRegex?: string | null;
	}

	/** Describes an Amazon Cognito user pool configuration. */
	export interface UserPoolConfigFormProperties {

		/** Required */
		userPoolId: FormControl<string | null | undefined>,

		/** Required */
		awsRegion: FormControl<string | null | undefined>,

		/** Required */
		defaultAction: FormControl<UserPoolConfigDefaultAction | null | undefined>,
		appIdClientRegex: FormControl<string | null | undefined>,
	}
	export function CreateUserPoolConfigFormGroup() {
		return new FormGroup<UserPoolConfigFormProperties>({
			userPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			awsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			defaultAction: new FormControl<UserPoolConfigDefaultAction | null | undefined>(undefined, [Validators.required]),
			appIdClientRegex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserPoolConfigDefaultAction { ALLOW = 0, DENY = 1 }


	/** Describes an OpenID Connect configuration. */
	export interface OpenIDConnectConfig {

		/** Required */
		issuer: string;
		clientId?: string | null;
		iatTTL?: number | null;
		authTTL?: number | null;
	}

	/** Describes an OpenID Connect configuration. */
	export interface OpenIDConnectConfigFormProperties {

		/** Required */
		issuer: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		iatTTL: FormControl<number | null | undefined>,
		authTTL: FormControl<number | null | undefined>,
	}
	export function CreateOpenIDConnectConfigFormGroup() {
		return new FormGroup<OpenIDConnectConfigFormProperties>({
			issuer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientId: new FormControl<string | null | undefined>(undefined),
			iatTTL: new FormControl<number | null | undefined>(undefined),
			authTTL: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MapOfStringToString {
	}
	export interface MapOfStringToStringFormProperties {
	}
	export function CreateMapOfStringToStringFormGroup() {
		return new FormGroup<MapOfStringToStringFormProperties>({
		});

	}


	/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
	export interface TagMap {
	}

	/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** Describes an additional authentication provider. */
	export interface AdditionalAuthenticationProvider {
		authenticationType?: GraphqlApiAuthenticationType | null;

		/** Describes an OpenID Connect configuration. */
		openIDConnectConfig?: OpenIDConnectConfig;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: CognitoUserPoolConfig;
	}

	/** Describes an additional authentication provider. */
	export interface AdditionalAuthenticationProviderFormProperties {
		authenticationType: FormControl<GraphqlApiAuthenticationType | null | undefined>,
	}
	export function CreateAdditionalAuthenticationProviderFormGroup() {
		return new FormGroup<AdditionalAuthenticationProviderFormProperties>({
			authenticationType: new FormControl<GraphqlApiAuthenticationType | null | undefined>(undefined),
		});

	}


	/** Describes an Amazon Cognito user pool configuration. */
	export interface CognitoUserPoolConfig {

		/** Required */
		userPoolId: string;

		/** Required */
		awsRegion: string;
		appIdClientRegex?: string | null;
	}

	/** Describes an Amazon Cognito user pool configuration. */
	export interface CognitoUserPoolConfigFormProperties {

		/** Required */
		userPoolId: FormControl<string | null | undefined>,

		/** Required */
		awsRegion: FormControl<string | null | undefined>,
		appIdClientRegex: FormControl<string | null | undefined>,
	}
	export function CreateCognitoUserPoolConfigFormGroup() {
		return new FormGroup<CognitoUserPoolConfigFormProperties>({
			userPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			awsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appIdClientRegex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FieldLogLevel { NONE = 0, ERROR = 1, ALL = 2 }

	export enum DefaultAction { ALLOW = 0, DENY = 1 }

	export interface ApiLimitExceededException {
	}
	export interface ApiLimitExceededExceptionFormProperties {
	}
	export function CreateApiLimitExceededExceptionFormGroup() {
		return new FormGroup<ApiLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateResolverResponse {

		/** Describes a resolver. */
		resolver?: Resolver;
	}
	export interface CreateResolverResponseFormProperties {
	}
	export function CreateCreateResolverResponseFormGroup() {
		return new FormGroup<CreateResolverResponseFormProperties>({
		});

	}


	/** Describes a resolver. */
	export interface Resolver {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		typeName?: string | null;

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		fieldName?: string | null;

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName?: string | null;
		resolverArn?: string | null;

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate?: string | null;

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string | null;
		kind?: ResolverKind | null;

		/** The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: PipelineConfig;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: SyncConfig;

		/** The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: CachingConfig;
	}

	/** Describes a resolver. */
	export interface ResolverFormProperties {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		typeName: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		fieldName: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: FormControl<string | null | undefined>,
		resolverArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,
		kind: FormControl<ResolverKind | null | undefined>,
	}
	export function CreateResolverFormGroup() {
		return new FormGroup<ResolverFormProperties>({
			typeName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			fieldName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			resolverArn: new FormControl<string | null | undefined>(undefined),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			kind: new FormControl<ResolverKind | null | undefined>(undefined),
		});

	}

	export enum ResolverKind { UNIT = 0, PIPELINE = 1 }


	/** The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
	export interface PipelineConfig {
		functions?: Array<string>;
	}

	/** The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
	export interface PipelineConfigFormProperties {
	}
	export function CreatePipelineConfigFormGroup() {
		return new FormGroup<PipelineConfigFormProperties>({
		});

	}


	/** <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
	export interface SyncConfig {
		conflictHandler?: SyncConfigConflictHandler | null;
		conflictDetection?: SyncConfigConflictDetection | null;

		/** The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler. */
		lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
	}

	/** <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
	export interface SyncConfigFormProperties {
		conflictHandler: FormControl<SyncConfigConflictHandler | null | undefined>,
		conflictDetection: FormControl<SyncConfigConflictDetection | null | undefined>,
	}
	export function CreateSyncConfigFormGroup() {
		return new FormGroup<SyncConfigFormProperties>({
			conflictHandler: new FormControl<SyncConfigConflictHandler | null | undefined>(undefined),
			conflictDetection: new FormControl<SyncConfigConflictDetection | null | undefined>(undefined),
		});

	}

	export enum SyncConfigConflictHandler { OPTIMISTIC_CONCURRENCY = 0, LAMBDA = 1, AUTOMERGE = 2, NONE = 3 }

	export enum SyncConfigConflictDetection { VERSION = 0, NONE = 1 }


	/** The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler. */
	export interface LambdaConflictHandlerConfig {
		lambdaConflictHandlerArn?: string | null;
	}

	/** The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler. */
	export interface LambdaConflictHandlerConfigFormProperties {
		lambdaConflictHandlerArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaConflictHandlerConfigFormGroup() {
		return new FormGroup<LambdaConflictHandlerConfigFormProperties>({
			lambdaConflictHandlerArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The caching configuration for a resolver that has caching enabled. */
	export interface CachingConfig {
		ttl?: number | null;
		cachingKeys?: Array<string>;
	}

	/** The caching configuration for a resolver that has caching enabled. */
	export interface CachingConfigFormProperties {
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateCachingConfigFormGroup() {
		return new FormGroup<CachingConfigFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ConflictHandlerType { OPTIMISTIC_CONCURRENCY = 0, LAMBDA = 1, AUTOMERGE = 2, NONE = 3 }

	export enum ConflictDetectionType { VERSION = 0, NONE = 1 }

	export interface CreateTypeResponse {

		/** Describes a type. */
		type?: Type;
	}
	export interface CreateTypeResponseFormProperties {
	}
	export function CreateCreateTypeResponseFormGroup() {
		return new FormGroup<CreateTypeResponseFormProperties>({
		});

	}


	/** Describes a type. */
	export interface Type {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name?: string | null;
		description?: string | null;
		arn?: string | null;
		definition?: string | null;
		format?: TypeFormat | null;
	}

	/** Describes a type. */
	export interface TypeFormProperties {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		definition: FormControl<string | null | undefined>,
		format: FormControl<TypeFormat | null | undefined>,
	}
	export function CreateTypeFormGroup() {
		return new FormGroup<TypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<TypeFormat | null | undefined>(undefined),
		});

	}

	export enum TypeFormat { SDL = 0, JSON = 1 }


	/** Represents the output of a <code>DeleteApiCache</code> operation. */
	export interface DeleteApiCacheResponse {
	}

	/** Represents the output of a <code>DeleteApiCache</code> operation. */
	export interface DeleteApiCacheResponseFormProperties {
	}
	export function CreateDeleteApiCacheResponseFormGroup() {
		return new FormGroup<DeleteApiCacheResponseFormProperties>({
		});

	}

	export interface DeleteApiKeyResponse {
	}
	export interface DeleteApiKeyResponseFormProperties {
	}
	export function CreateDeleteApiKeyResponseFormGroup() {
		return new FormGroup<DeleteApiKeyResponseFormProperties>({
		});

	}

	export interface DeleteDataSourceResponse {
	}
	export interface DeleteDataSourceResponseFormProperties {
	}
	export function CreateDeleteDataSourceResponseFormGroup() {
		return new FormGroup<DeleteDataSourceResponseFormProperties>({
		});

	}

	export interface DeleteFunctionResponse {
	}
	export interface DeleteFunctionResponseFormProperties {
	}
	export function CreateDeleteFunctionResponseFormGroup() {
		return new FormGroup<DeleteFunctionResponseFormProperties>({
		});

	}

	export interface DeleteGraphqlApiResponse {
	}
	export interface DeleteGraphqlApiResponseFormProperties {
	}
	export function CreateDeleteGraphqlApiResponseFormGroup() {
		return new FormGroup<DeleteGraphqlApiResponseFormProperties>({
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

	export interface DeleteResolverResponse {
	}
	export interface DeleteResolverResponseFormProperties {
	}
	export function CreateDeleteResolverResponseFormGroup() {
		return new FormGroup<DeleteResolverResponseFormProperties>({
		});

	}

	export interface DeleteTypeResponse {
	}
	export interface DeleteTypeResponseFormProperties {
	}
	export function CreateDeleteTypeResponseFormGroup() {
		return new FormGroup<DeleteTypeResponseFormProperties>({
		});

	}


	/** Represents the output of a <code>FlushApiCache</code> operation. */
	export interface FlushApiCacheResponse {
	}

	/** Represents the output of a <code>FlushApiCache</code> operation. */
	export interface FlushApiCacheResponseFormProperties {
	}
	export function CreateFlushApiCacheResponseFormGroup() {
		return new FormGroup<FlushApiCacheResponseFormProperties>({
		});

	}


	/** Represents the output of a <code>GetApiCache</code> operation. */
	export interface GetApiCacheResponse {

		/** The <code>ApiCache</code> object. */
		apiCache?: ApiCache;
	}

	/** Represents the output of a <code>GetApiCache</code> operation. */
	export interface GetApiCacheResponseFormProperties {
	}
	export function CreateGetApiCacheResponseFormGroup() {
		return new FormGroup<GetApiCacheResponseFormProperties>({
		});

	}

	export interface GetDataSourceResponse {

		/** Describes a data source. */
		dataSource?: DataSource;
	}
	export interface GetDataSourceResponseFormProperties {
	}
	export function CreateGetDataSourceResponseFormGroup() {
		return new FormGroup<GetDataSourceResponseFormProperties>({
		});

	}

	export interface GetFunctionResponse {

		/** A function is a reusable entity. Multiple functions can be used to compose the resolver logic. */
		functionConfiguration?: FunctionConfiguration;
	}
	export interface GetFunctionResponseFormProperties {
	}
	export function CreateGetFunctionResponseFormGroup() {
		return new FormGroup<GetFunctionResponseFormProperties>({
		});

	}

	export interface GetGraphqlApiResponse {

		/** Describes a GraphQL API. */
		graphqlApi?: GraphqlApi;
	}
	export interface GetGraphqlApiResponseFormProperties {
	}
	export function CreateGetGraphqlApiResponseFormGroup() {
		return new FormGroup<GetGraphqlApiResponseFormProperties>({
		});

	}

	export interface GetIntrospectionSchemaResponse {
		schema?: string | null;
	}
	export interface GetIntrospectionSchemaResponseFormProperties {
		schema: FormControl<string | null | undefined>,
	}
	export function CreateGetIntrospectionSchemaResponseFormGroup() {
		return new FormGroup<GetIntrospectionSchemaResponseFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GraphQLSchemaException {
	}
	export interface GraphQLSchemaExceptionFormProperties {
	}
	export function CreateGraphQLSchemaExceptionFormGroup() {
		return new FormGroup<GraphQLSchemaExceptionFormProperties>({
		});

	}

	export interface GetResolverResponse {

		/** Describes a resolver. */
		resolver?: Resolver;
	}
	export interface GetResolverResponseFormProperties {
	}
	export function CreateGetResolverResponseFormGroup() {
		return new FormGroup<GetResolverResponseFormProperties>({
		});

	}

	export interface GetSchemaCreationStatusResponse {
		status?: GetSchemaCreationStatusResponseStatus | null;
		details?: string | null;
	}
	export interface GetSchemaCreationStatusResponseFormProperties {
		status: FormControl<GetSchemaCreationStatusResponseStatus | null | undefined>,
		details: FormControl<string | null | undefined>,
	}
	export function CreateGetSchemaCreationStatusResponseFormGroup() {
		return new FormGroup<GetSchemaCreationStatusResponseFormProperties>({
			status: new FormControl<GetSchemaCreationStatusResponseStatus | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetSchemaCreationStatusResponseStatus { PROCESSING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, SUCCESS = 4, NOT_APPLICABLE = 5 }

	export interface GetTypeResponse {

		/** Describes a type. */
		type?: Type;
	}
	export interface GetTypeResponseFormProperties {
	}
	export function CreateGetTypeResponseFormGroup() {
		return new FormGroup<GetTypeResponseFormProperties>({
		});

	}

	export interface ListApiKeysResponse {
		apiKeys?: Array<ApiKey>;

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken?: string | null;
	}
	export interface ListApiKeysResponseFormProperties {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApiKeysResponseFormGroup() {
		return new FormGroup<ListApiKeysResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
		});

	}

	export interface ListDataSourcesResponse {
		dataSources?: Array<DataSource>;

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken?: string | null;
	}
	export interface ListDataSourcesResponseFormProperties {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSourcesResponseFormGroup() {
		return new FormGroup<ListDataSourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
		});

	}

	export interface ListFunctionsResponse {
		functions?: Array<FunctionConfiguration>;

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken?: string | null;
	}
	export interface ListFunctionsResponseFormProperties {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFunctionsResponseFormGroup() {
		return new FormGroup<ListFunctionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
		});

	}

	export interface ListGraphqlApisResponse {
		graphqlApis?: Array<GraphqlApi>;

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken?: string | null;
	}
	export interface ListGraphqlApisResponseFormProperties {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGraphqlApisResponseFormGroup() {
		return new FormGroup<ListGraphqlApisResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
		});

	}

	export interface ListResolversResponse {
		resolvers?: Array<Resolver>;

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken?: string | null;
	}
	export interface ListResolversResponseFormProperties {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolversResponseFormGroup() {
		return new FormGroup<ListResolversResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
		});

	}

	export interface ListResolversByFunctionResponse {
		resolvers?: Array<Resolver>;

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken?: string | null;
	}
	export interface ListResolversByFunctionResponseFormProperties {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolversByFunctionResponseFormGroup() {
		return new FormGroup<ListResolversByFunctionResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
		});

	}

	export interface ListTagsForResourceResponse {

		/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTypesResponse {
		types?: Array<Type>;

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken?: string | null;
	}
	export interface ListTypesResponseFormProperties {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [\\S]+
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypesResponseFormGroup() {
		return new FormGroup<ListTypesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
		});

	}

	export interface StartSchemaCreationResponse {
		status?: GetSchemaCreationStatusResponseStatus | null;
	}
	export interface StartSchemaCreationResponseFormProperties {
		status: FormControl<GetSchemaCreationStatusResponseStatus | null | undefined>,
	}
	export function CreateStartSchemaCreationResponseFormGroup() {
		return new FormGroup<StartSchemaCreationResponseFormProperties>({
			status: new FormControl<GetSchemaCreationStatusResponseStatus | null | undefined>(undefined),
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


	/** Represents the output of a <code>UpdateApiCache</code> operation. */
	export interface UpdateApiCacheResponse {

		/** The <code>ApiCache</code> object. */
		apiCache?: ApiCache;
	}

	/** Represents the output of a <code>UpdateApiCache</code> operation. */
	export interface UpdateApiCacheResponseFormProperties {
	}
	export function CreateUpdateApiCacheResponseFormGroup() {
		return new FormGroup<UpdateApiCacheResponseFormProperties>({
		});

	}

	export interface UpdateApiKeyResponse {

		/** <p>Describes an API key.</p> <p>Customers invoke AWS AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: This version was introduced at launch in November 2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB TTL. The keys ceased to be valid after February 21, 2018 and should not be used after that date.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we will delete these keys from the table after February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: This version was introduced in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds. Key expiration can only be updated while the key has not expired.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as seconds.</p> </li> </ul> */
		apiKey?: ApiKey;
	}
	export interface UpdateApiKeyResponseFormProperties {
	}
	export function CreateUpdateApiKeyResponseFormGroup() {
		return new FormGroup<UpdateApiKeyResponseFormProperties>({
		});

	}

	export interface UpdateDataSourceResponse {

		/** Describes a data source. */
		dataSource?: DataSource;
	}
	export interface UpdateDataSourceResponseFormProperties {
	}
	export function CreateUpdateDataSourceResponseFormGroup() {
		return new FormGroup<UpdateDataSourceResponseFormProperties>({
		});

	}

	export interface UpdateFunctionResponse {

		/** A function is a reusable entity. Multiple functions can be used to compose the resolver logic. */
		functionConfiguration?: FunctionConfiguration;
	}
	export interface UpdateFunctionResponseFormProperties {
	}
	export function CreateUpdateFunctionResponseFormGroup() {
		return new FormGroup<UpdateFunctionResponseFormProperties>({
		});

	}

	export interface UpdateGraphqlApiResponse {

		/** Describes a GraphQL API. */
		graphqlApi?: GraphqlApi;
	}
	export interface UpdateGraphqlApiResponseFormProperties {
	}
	export function CreateUpdateGraphqlApiResponseFormGroup() {
		return new FormGroup<UpdateGraphqlApiResponseFormProperties>({
		});

	}

	export interface UpdateResolverResponse {

		/** Describes a resolver. */
		resolver?: Resolver;
	}
	export interface UpdateResolverResponseFormProperties {
	}
	export function CreateUpdateResolverResponseFormGroup() {
		return new FormGroup<UpdateResolverResponseFormProperties>({
		});

	}

	export interface UpdateTypeResponse {

		/** Describes a type. */
		type?: Type;
	}
	export interface UpdateTypeResponseFormProperties {
	}
	export function CreateUpdateTypeResponseFormGroup() {
		return new FormGroup<UpdateTypeResponseFormProperties>({
		});

	}

	export enum AuthenticationType { API_KEY = 0, AWS_IAM = 1, AMAZON_COGNITO_USER_POOLS = 2, OPENID_CONNECT = 3 }

	export enum ApiCachingBehavior { FULL_REQUEST_CACHING = 0, PER_RESOLVER_CACHING = 1 }

	export enum AuthorizationType { AWS_IAM = 0 }


	/** Represents the input of a <code>CreateApiCache</code> operation. */
	export interface CreateApiCacheRequest {

		/** Required */
		ttl: number;
		transitEncryptionEnabled?: boolean | null;
		atRestEncryptionEnabled?: boolean | null;

		/** Required */
		apiCachingBehavior: ApiCacheApiCachingBehavior;

		/** Required */
		type: ApiCacheType;
	}

	/** Represents the input of a <code>CreateApiCache</code> operation. */
	export interface CreateApiCacheRequestFormProperties {

		/** Required */
		ttl: FormControl<number | null | undefined>,
		transitEncryptionEnabled: FormControl<boolean | null | undefined>,
		atRestEncryptionEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		apiCachingBehavior: FormControl<ApiCacheApiCachingBehavior | null | undefined>,

		/** Required */
		type: FormControl<ApiCacheType | null | undefined>,
	}
	export function CreateCreateApiCacheRequestFormGroup() {
		return new FormGroup<CreateApiCacheRequestFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			transitEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			atRestEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			apiCachingBehavior: new FormControl<ApiCacheApiCachingBehavior | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ApiCacheType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateApiKeyRequest {
		description?: string | null;
		expires?: number | null;
	}
	export interface CreateApiKeyRequestFormProperties {
		description: FormControl<string | null | undefined>,
		expires: FormControl<number | null | undefined>,
	}
	export function CreateCreateApiKeyRequestFormGroup() {
		return new FormGroup<CreateApiKeyRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expires: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourceRequest {

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: string;
		description?: string | null;

		/** Required */
		type: DataSourceType;
		serviceRoleArn?: string | null;

		/** Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: DynamodbDataSourceConfig;

		/** Describes an AWS Lambda data source configuration. */
		lambdaConfig?: LambdaDataSourceConfig;

		/** Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: ElasticsearchDataSourceConfig;

		/** Describes an HTTP data source configuration. */
		httpConfig?: HttpDataSourceConfig;

		/** Describes a relational database data source configuration. */
		relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
	}
	export interface CreateDataSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<DataSourceType | null | undefined>,
		serviceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourceRequestFormGroup() {
		return new FormGroup<CreateDataSourceRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DataSourceType | null | undefined>(undefined, [Validators.required]),
			serviceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionRequest {

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: string;
		description?: string | null;

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: string;

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: string;

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string | null;

		/** Required */
		functionVersion: string;
	}
	export interface CreateFunctionRequestFormProperties {

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,

		/** Required */
		functionVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionRequestFormGroup() {
		return new FormGroup<CreateFunctionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined),
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			functionVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGraphqlApiRequest {

		/** Required */
		name: string;

		/** The CloudWatch Logs configuration. */
		logConfig?: LogConfig;

		/** Required */
		authenticationType: GraphqlApiAuthenticationType;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: UserPoolConfig;

		/** Describes an OpenID Connect configuration. */
		openIDConnectConfig?: OpenIDConnectConfig;

		/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags?: TagMap;
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;
		xrayEnabled?: boolean | null;
	}
	export interface CreateGraphqlApiRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		authenticationType: FormControl<GraphqlApiAuthenticationType | null | undefined>,
		xrayEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateGraphqlApiRequestFormGroup() {
		return new FormGroup<CreateGraphqlApiRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationType: new FormControl<GraphqlApiAuthenticationType | null | undefined>(undefined, [Validators.required]),
			xrayEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateResolverRequest {

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		fieldName: string;

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName?: string | null;

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: string;

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string | null;
		kind?: ResolverKind | null;

		/** The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: PipelineConfig;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: SyncConfig;

		/** The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: CachingConfig;
	}
	export interface CreateResolverRequestFormProperties {

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		fieldName: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,
		kind: FormControl<ResolverKind | null | undefined>,
	}
	export function CreateCreateResolverRequestFormGroup() {
		return new FormGroup<CreateResolverRequestFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			kind: new FormControl<ResolverKind | null | undefined>(undefined),
		});

	}

	export enum TypeDefinitionFormat { SDL = 0, JSON = 1 }

	export interface CreateTypeRequest {

		/** Required */
		definition: string;

		/** Required */
		format: TypeFormat;
	}
	export interface CreateTypeRequestFormProperties {

		/** Required */
		definition: FormControl<string | null | undefined>,

		/** Required */
		format: FormControl<TypeFormat | null | undefined>,
	}
	export function CreateCreateTypeRequestFormGroup() {
		return new FormGroup<CreateTypeRequestFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<TypeFormat | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input of a <code>DeleteApiCache</code> operation. */
	export interface DeleteApiCacheRequest {
	}

	/** Represents the input of a <code>DeleteApiCache</code> operation. */
	export interface DeleteApiCacheRequestFormProperties {
	}
	export function CreateDeleteApiCacheRequestFormGroup() {
		return new FormGroup<DeleteApiCacheRequestFormProperties>({
		});

	}

	export interface DeleteApiKeyRequest {
	}
	export interface DeleteApiKeyRequestFormProperties {
	}
	export function CreateDeleteApiKeyRequestFormGroup() {
		return new FormGroup<DeleteApiKeyRequestFormProperties>({
		});

	}

	export interface DeleteDataSourceRequest {
	}
	export interface DeleteDataSourceRequestFormProperties {
	}
	export function CreateDeleteDataSourceRequestFormGroup() {
		return new FormGroup<DeleteDataSourceRequestFormProperties>({
		});

	}

	export interface DeleteFunctionRequest {
	}
	export interface DeleteFunctionRequestFormProperties {
	}
	export function CreateDeleteFunctionRequestFormGroup() {
		return new FormGroup<DeleteFunctionRequestFormProperties>({
		});

	}

	export interface DeleteGraphqlApiRequest {
	}
	export interface DeleteGraphqlApiRequestFormProperties {
	}
	export function CreateDeleteGraphqlApiRequestFormGroup() {
		return new FormGroup<DeleteGraphqlApiRequestFormProperties>({
		});

	}

	export interface DeleteResolverRequest {
	}
	export interface DeleteResolverRequestFormProperties {
	}
	export function CreateDeleteResolverRequestFormGroup() {
		return new FormGroup<DeleteResolverRequestFormProperties>({
		});

	}

	export interface DeleteTypeRequest {
	}
	export interface DeleteTypeRequestFormProperties {
	}
	export function CreateDeleteTypeRequestFormGroup() {
		return new FormGroup<DeleteTypeRequestFormProperties>({
		});

	}


	/** Represents the input of a <code>FlushApiCache</code> operation. */
	export interface FlushApiCacheRequest {
	}

	/** Represents the input of a <code>FlushApiCache</code> operation. */
	export interface FlushApiCacheRequestFormProperties {
	}
	export function CreateFlushApiCacheRequestFormGroup() {
		return new FormGroup<FlushApiCacheRequestFormProperties>({
		});

	}


	/** Represents the input of a <code>GetApiCache</code> operation. */
	export interface GetApiCacheRequest {
	}

	/** Represents the input of a <code>GetApiCache</code> operation. */
	export interface GetApiCacheRequestFormProperties {
	}
	export function CreateGetApiCacheRequestFormGroup() {
		return new FormGroup<GetApiCacheRequestFormProperties>({
		});

	}

	export interface GetDataSourceRequest {
	}
	export interface GetDataSourceRequestFormProperties {
	}
	export function CreateGetDataSourceRequestFormGroup() {
		return new FormGroup<GetDataSourceRequestFormProperties>({
		});

	}

	export interface GetFunctionRequest {
	}
	export interface GetFunctionRequestFormProperties {
	}
	export function CreateGetFunctionRequestFormGroup() {
		return new FormGroup<GetFunctionRequestFormProperties>({
		});

	}

	export interface GetGraphqlApiRequest {
	}
	export interface GetGraphqlApiRequestFormProperties {
	}
	export function CreateGetGraphqlApiRequestFormGroup() {
		return new FormGroup<GetGraphqlApiRequestFormProperties>({
		});

	}

	export enum OutputType { SDL = 0, JSON = 1 }

	export interface GetIntrospectionSchemaRequest {
	}
	export interface GetIntrospectionSchemaRequestFormProperties {
	}
	export function CreateGetIntrospectionSchemaRequestFormGroup() {
		return new FormGroup<GetIntrospectionSchemaRequestFormProperties>({
		});

	}

	export interface GetResolverRequest {
	}
	export interface GetResolverRequestFormProperties {
	}
	export function CreateGetResolverRequestFormGroup() {
		return new FormGroup<GetResolverRequestFormProperties>({
		});

	}

	export interface GetSchemaCreationStatusRequest {
	}
	export interface GetSchemaCreationStatusRequestFormProperties {
	}
	export function CreateGetSchemaCreationStatusRequestFormGroup() {
		return new FormGroup<GetSchemaCreationStatusRequestFormProperties>({
		});

	}

	export enum SchemaStatus { PROCESSING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, SUCCESS = 4, NOT_APPLICABLE = 5 }

	export interface GetTypeRequest {
	}
	export interface GetTypeRequestFormProperties {
	}
	export function CreateGetTypeRequestFormGroup() {
		return new FormGroup<GetTypeRequestFormProperties>({
		});

	}

	export interface ListApiKeysRequest {
	}
	export interface ListApiKeysRequestFormProperties {
	}
	export function CreateListApiKeysRequestFormGroup() {
		return new FormGroup<ListApiKeysRequestFormProperties>({
		});

	}

	export interface ListDataSourcesRequest {
	}
	export interface ListDataSourcesRequestFormProperties {
	}
	export function CreateListDataSourcesRequestFormGroup() {
		return new FormGroup<ListDataSourcesRequestFormProperties>({
		});

	}

	export interface ListFunctionsRequest {
	}
	export interface ListFunctionsRequestFormProperties {
	}
	export function CreateListFunctionsRequestFormGroup() {
		return new FormGroup<ListFunctionsRequestFormProperties>({
		});

	}

	export interface ListGraphqlApisRequest {
	}
	export interface ListGraphqlApisRequestFormProperties {
	}
	export function CreateListGraphqlApisRequestFormGroup() {
		return new FormGroup<ListGraphqlApisRequestFormProperties>({
		});

	}

	export interface ListResolversByFunctionRequest {
	}
	export interface ListResolversByFunctionRequestFormProperties {
	}
	export function CreateListResolversByFunctionRequestFormGroup() {
		return new FormGroup<ListResolversByFunctionRequestFormProperties>({
		});

	}

	export interface ListResolversRequest {
	}
	export interface ListResolversRequestFormProperties {
	}
	export function CreateListResolversRequestFormGroup() {
		return new FormGroup<ListResolversRequestFormProperties>({
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

	export interface ListTypesRequest {
	}
	export interface ListTypesRequestFormProperties {
	}
	export function CreateListTypesRequestFormGroup() {
		return new FormGroup<ListTypesRequestFormProperties>({
		});

	}

	export interface StartSchemaCreationRequest {

		/** Required */
		definition: string;
	}
	export interface StartSchemaCreationRequestFormProperties {

		/** Required */
		definition: FormControl<string | null | undefined>,
	}
	export function CreateStartSchemaCreationRequestFormGroup() {
		return new FormGroup<StartSchemaCreationRequestFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/**
		 * A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects.
		 * Required
		 */
		tags: TagMap;
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


	/** Represents the input of a <code>UpdateApiCache</code> operation. */
	export interface UpdateApiCacheRequest {

		/** Required */
		ttl: number;

		/** Required */
		apiCachingBehavior: ApiCacheApiCachingBehavior;

		/** Required */
		type: ApiCacheType;
	}

	/** Represents the input of a <code>UpdateApiCache</code> operation. */
	export interface UpdateApiCacheRequestFormProperties {

		/** Required */
		ttl: FormControl<number | null | undefined>,

		/** Required */
		apiCachingBehavior: FormControl<ApiCacheApiCachingBehavior | null | undefined>,

		/** Required */
		type: FormControl<ApiCacheType | null | undefined>,
	}
	export function CreateUpdateApiCacheRequestFormGroup() {
		return new FormGroup<UpdateApiCacheRequestFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			apiCachingBehavior: new FormControl<ApiCacheApiCachingBehavior | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ApiCacheType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateApiKeyRequest {
		description?: string | null;
		expires?: number | null;
	}
	export interface UpdateApiKeyRequestFormProperties {
		description: FormControl<string | null | undefined>,
		expires: FormControl<number | null | undefined>,
	}
	export function CreateUpdateApiKeyRequestFormGroup() {
		return new FormGroup<UpdateApiKeyRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expires: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourceRequest {
		description?: string | null;

		/** Required */
		type: DataSourceType;
		serviceRoleArn?: string | null;

		/** Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: DynamodbDataSourceConfig;

		/** Describes an AWS Lambda data source configuration. */
		lambdaConfig?: LambdaDataSourceConfig;

		/** Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: ElasticsearchDataSourceConfig;

		/** Describes an HTTP data source configuration. */
		httpConfig?: HttpDataSourceConfig;

		/** Describes a relational database data source configuration. */
		relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
	}
	export interface UpdateDataSourceRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<DataSourceType | null | undefined>,
		serviceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourceRequestFormGroup() {
		return new FormGroup<UpdateDataSourceRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DataSourceType | null | undefined>(undefined, [Validators.required]),
			serviceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionRequest {

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: string;
		description?: string | null;

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: string;

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: string;

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string | null;

		/** Required */
		functionVersion: string;
	}
	export interface UpdateFunctionRequestFormProperties {

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,

		/** Required */
		functionVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionRequestFormGroup() {
		return new FormGroup<UpdateFunctionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined),
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			functionVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateGraphqlApiRequest {

		/** Required */
		name: string;

		/** The CloudWatch Logs configuration. */
		logConfig?: LogConfig;
		authenticationType?: GraphqlApiAuthenticationType | null;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: UserPoolConfig;

		/** Describes an OpenID Connect configuration. */
		openIDConnectConfig?: OpenIDConnectConfig;
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;
		xrayEnabled?: boolean | null;
	}
	export interface UpdateGraphqlApiRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		authenticationType: FormControl<GraphqlApiAuthenticationType | null | undefined>,
		xrayEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateGraphqlApiRequestFormGroup() {
		return new FormGroup<UpdateGraphqlApiRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationType: new FormControl<GraphqlApiAuthenticationType | null | undefined>(undefined),
			xrayEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateResolverRequest {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName?: string | null;

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: string;

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate?: string | null;
		kind?: ResolverKind | null;

		/** The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: PipelineConfig;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: SyncConfig;

		/** The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: CachingConfig;
	}
	export interface UpdateResolverRequestFormProperties {

		/**
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,
		kind: FormControl<ResolverKind | null | undefined>,
	}
	export function CreateUpdateResolverRequestFormGroup() {
		return new FormGroup<UpdateResolverRequestFormProperties>({
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			kind: new FormControl<ResolverKind | null | undefined>(undefined),
		});

	}

	export interface UpdateTypeRequest {
		definition?: string | null;

		/** Required */
		format: TypeFormat;
	}
	export interface UpdateTypeRequestFormProperties {
		definition: FormControl<string | null | undefined>,

		/** Required */
		format: FormControl<TypeFormat | null | undefined>,
	}
	export function CreateUpdateTypeRequestFormGroup() {
		return new FormGroup<UpdateTypeRequestFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<TypeFormat | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface CreateApiCachePostBodyFormProperties {

		/**
		 * <p>TTL in seconds for cache entries.</p> <p>Valid values are between 1 and 3600 seconds.</p>
		 * Required
		 */
		ttl: FormControl<number | null | undefined>,

		/** Transit encryption flag when connecting to cache. This setting cannot be updated after creation. */
		transitEncryptionEnabled: FormControl<boolean | null | undefined>,

		/** At rest encryption flag for cache. This setting cannot be updated after creation. */
		atRestEncryptionEnabled: FormControl<boolean | null | undefined>,

		/**
		 * <p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resovlers that you specify are cached.</p> </li> </ul>
		 * Required
		 */
		apiCachingBehavior: FormControl<ApiCacheApiCachingBehavior | null | undefined>,

		/**
		 * <p>The cache instance type.</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul>
		 * Required
		 */
		type: FormControl<ApiCacheType | null | undefined>,
	}
	export function CreateCreateApiCachePostBodyFormGroup() {
		return new FormGroup<CreateApiCachePostBodyFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			transitEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			atRestEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			apiCachingBehavior: new FormControl<ApiCacheApiCachingBehavior | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ApiCacheType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateApiKeyPostBody {

		/** A description of the purpose of the API key. */
		description?: string | null;

		/** The time from creation time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see . */
		expires?: number | null;
	}
	export interface CreateApiKeyPostBodyFormProperties {

		/** A description of the purpose of the API key. */
		description: FormControl<string | null | undefined>,

		/** The time from creation time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see . */
		expires: FormControl<number | null | undefined>,
	}
	export function CreateCreateApiKeyPostBodyFormGroup() {
		return new FormGroup<CreateApiKeyPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expires: new FormControl<number | null | undefined>(undefined),
		});

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
		dynamodbConfig?: CreateDataSourcePostBodyDynamodbConfig;

		/** Describes an AWS Lambda data source configuration. */
		lambdaConfig?: CreateDataSourcePostBodyLambdaConfig;

		/** Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: CreateDataSourcePostBodyElasticsearchConfig;

		/** Describes an HTTP data source configuration. */
		httpConfig?: CreateDataSourcePostBodyHttpConfig;

		/** Describes a relational database data source configuration. */
		relationalDatabaseConfig?: CreateDataSourcePostBodyRelationalDatabaseConfig;
	}
	export interface CreateDataSourcePostBodyFormProperties {

		/**
		 * A user-supplied name for the <code>DataSource</code>.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: FormControl<string | null | undefined>,

		/** A description of the <code>DataSource</code>. */
		description: FormControl<string | null | undefined>,

		/**
		 * The type of the <code>DataSource</code>.
		 * Required
		 */
		type: FormControl<DataSourceType | null | undefined>,

		/** The AWS IAM service role ARN for the data source. The system assumes this role when accessing the data source. */
		serviceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourcePostBodyFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DataSourceType | null | undefined>(undefined, [Validators.required]),
			serviceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourcePostBodyDynamodbConfig {
		tableName?: string | null;
		awsRegion?: string | null;
		useCallerCredentials?: boolean | null;

		/** Describes a Delta Sync configuration. */
		deltaSyncConfig?: DeltaSyncConfig;
		versioned?: boolean | null;
	}
	export interface CreateDataSourcePostBodyDynamodbConfigFormProperties {
		tableName: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
		useCallerCredentials: FormControl<boolean | null | undefined>,
		versioned: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDataSourcePostBodyDynamodbConfigFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyDynamodbConfigFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			useCallerCredentials: new FormControl<boolean | null | undefined>(undefined),
			versioned: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourcePostBodyLambdaConfig {
		lambdaFunctionArn?: string | null;
	}
	export interface CreateDataSourcePostBodyLambdaConfigFormProperties {
		lambdaFunctionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourcePostBodyLambdaConfigFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyLambdaConfigFormProperties>({
			lambdaFunctionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourcePostBodyElasticsearchConfig {
		endpoint?: string | null;
		awsRegion?: string | null;
	}
	export interface CreateDataSourcePostBodyElasticsearchConfigFormProperties {
		endpoint: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourcePostBodyElasticsearchConfigFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyElasticsearchConfigFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourcePostBodyHttpConfig {
		endpoint?: string | null;

		/** The authorization config in case the HTTP endpoint requires authorization. */
		authorizationConfig?: AuthorizationConfig;
	}
	export interface CreateDataSourcePostBodyHttpConfigFormProperties {
		endpoint: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourcePostBodyHttpConfigFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyHttpConfigFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourcePostBodyRelationalDatabaseConfig {
		relationalDatabaseSourceType?: RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType | null;

		/** The Amazon RDS HTTP endpoint configuration. */
		rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
	}
	export interface CreateDataSourcePostBodyRelationalDatabaseConfigFormProperties {
		relationalDatabaseSourceType: FormControl<RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType | null | undefined>,
	}
	export function CreateCreateDataSourcePostBodyRelationalDatabaseConfigFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyRelationalDatabaseConfigFormProperties>({
			relationalDatabaseSourceType: new FormControl<RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType | null | undefined>(undefined),
		});

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
	export interface CreateFunctionPostBodyFormProperties {

		/**
		 * The <code>Function</code> name. The function name does not have to be unique.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: FormControl<string | null | undefined>,

		/** The <code>Function</code> description. */
		description: FormControl<string | null | undefined>,

		/**
		 * The <code>Function</code> <code>DataSource</code> name.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * The <code>Function</code> response mapping template.
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * The <code>version</code> of the request mapping template. Currently the supported value is 2018-05-29.
		 * Required
		 */
		functionVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionPostBodyFormGroup() {
		return new FormGroup<CreateFunctionPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined),
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			functionVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGraphqlApiPostBody {

		/**
		 * A user-supplied name for the <code>GraphqlApi</code>.
		 * Required
		 */
		name: string;

		/** The CloudWatch Logs configuration. */
		logConfig?: CreateGraphqlApiPostBodyLogConfig;

		/**
		 * The authentication type: API key, AWS IAM, OIDC, or Amazon Cognito user pools.
		 * Required
		 */
		authenticationType: GraphqlApiAuthenticationType;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: CreateGraphqlApiPostBodyUserPoolConfig;

		/** Describes an OpenID Connect configuration. */
		openIDConnectConfig?: CreateGraphqlApiPostBodyOpenIDConnectConfig;

		/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags?: {[id: string]: string };

		/** A list of additional authentication providers for the <code>GraphqlApi</code> API. */
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;

		/** A flag indicating whether to enable X-Ray tracing for the <code>GraphqlApi</code>. */
		xrayEnabled?: boolean | null;
	}
	export interface CreateGraphqlApiPostBodyFormProperties {

		/**
		 * A user-supplied name for the <code>GraphqlApi</code>.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The authentication type: API key, AWS IAM, OIDC, or Amazon Cognito user pools.
		 * Required
		 */
		authenticationType: FormControl<GraphqlApiAuthenticationType | null | undefined>,

		/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** A flag indicating whether to enable X-Ray tracing for the <code>GraphqlApi</code>. */
		xrayEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateGraphqlApiPostBodyFormGroup() {
		return new FormGroup<CreateGraphqlApiPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationType: new FormControl<GraphqlApiAuthenticationType | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			xrayEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateGraphqlApiPostBodyLogConfig {
		fieldLogLevel?: LogConfigFieldLogLevel | null;
		cloudWatchLogsRoleArn?: string | null;
		excludeVerboseContent?: boolean | null;
	}
	export interface CreateGraphqlApiPostBodyLogConfigFormProperties {
		fieldLogLevel: FormControl<LogConfigFieldLogLevel | null | undefined>,
		cloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		excludeVerboseContent: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateGraphqlApiPostBodyLogConfigFormGroup() {
		return new FormGroup<CreateGraphqlApiPostBodyLogConfigFormProperties>({
			fieldLogLevel: new FormControl<LogConfigFieldLogLevel | null | undefined>(undefined),
			cloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			excludeVerboseContent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateGraphqlApiPostBodyUserPoolConfig {
		userPoolId?: string | null;
		awsRegion?: string | null;
		defaultAction?: UserPoolConfigDefaultAction | null;
		appIdClientRegex?: string | null;
	}
	export interface CreateGraphqlApiPostBodyUserPoolConfigFormProperties {
		userPoolId: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
		defaultAction: FormControl<UserPoolConfigDefaultAction | null | undefined>,
		appIdClientRegex: FormControl<string | null | undefined>,
	}
	export function CreateCreateGraphqlApiPostBodyUserPoolConfigFormGroup() {
		return new FormGroup<CreateGraphqlApiPostBodyUserPoolConfigFormProperties>({
			userPoolId: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			defaultAction: new FormControl<UserPoolConfigDefaultAction | null | undefined>(undefined),
			appIdClientRegex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGraphqlApiPostBodyOpenIDConnectConfig {
		issuer?: string | null;
		clientId?: string | null;
		iatTTL?: number | null;
		authTTL?: number | null;
	}
	export interface CreateGraphqlApiPostBodyOpenIDConnectConfigFormProperties {
		issuer: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		iatTTL: FormControl<number | null | undefined>,
		authTTL: FormControl<number | null | undefined>,
	}
	export function CreateCreateGraphqlApiPostBodyOpenIDConnectConfigFormGroup() {
		return new FormGroup<CreateGraphqlApiPostBodyOpenIDConnectConfigFormProperties>({
			issuer: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			iatTTL: new FormControl<number | null | undefined>(undefined),
			authTTL: new FormControl<number | null | undefined>(undefined),
		});

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
		pipelineConfig?: CreateResolverPostBodyPipelineConfig;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: CreateResolverPostBodySyncConfig;

		/** The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: CreateResolverPostBodyCachingConfig;
	}
	export interface CreateResolverPostBodyFormProperties {

		/**
		 * The name of the field to attach the resolver to.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		fieldName: FormControl<string | null | undefined>,

		/**
		 * The name of the data source for which the resolver is being created.
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * <p>The mapping template to be used for requests.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p>
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * The mapping template to be used for responses from the data source.
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,

		/** <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of <code>Function</code> in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.</p> </li> </ul> */
		kind: FormControl<ResolverKind | null | undefined>,
	}
	export function CreateCreateResolverPostBodyFormGroup() {
		return new FormGroup<CreateResolverPostBodyFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			kind: new FormControl<ResolverKind | null | undefined>(undefined),
		});

	}

	export interface CreateResolverPostBodyPipelineConfig {
		functions?: Array<string>;
	}
	export interface CreateResolverPostBodyPipelineConfigFormProperties {
	}
	export function CreateCreateResolverPostBodyPipelineConfigFormGroup() {
		return new FormGroup<CreateResolverPostBodyPipelineConfigFormProperties>({
		});

	}

	export interface CreateResolverPostBodySyncConfig {
		conflictHandler?: SyncConfigConflictHandler | null;
		conflictDetection?: SyncConfigConflictDetection | null;

		/** The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler. */
		lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
	}
	export interface CreateResolverPostBodySyncConfigFormProperties {
		conflictHandler: FormControl<SyncConfigConflictHandler | null | undefined>,
		conflictDetection: FormControl<SyncConfigConflictDetection | null | undefined>,
	}
	export function CreateCreateResolverPostBodySyncConfigFormGroup() {
		return new FormGroup<CreateResolverPostBodySyncConfigFormProperties>({
			conflictHandler: new FormControl<SyncConfigConflictHandler | null | undefined>(undefined),
			conflictDetection: new FormControl<SyncConfigConflictDetection | null | undefined>(undefined),
		});

	}

	export interface CreateResolverPostBodyCachingConfig {
		ttl?: number | null;
		cachingKeys?: Array<string>;
	}
	export interface CreateResolverPostBodyCachingConfigFormProperties {
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateCreateResolverPostBodyCachingConfigFormGroup() {
		return new FormGroup<CreateResolverPostBodyCachingConfigFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined),
		});

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
	export interface CreateTypePostBodyFormProperties {

		/**
		 * <p>The type definition, in GraphQL Schema Definition Language (SDL) format.</p> <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL documentation</a>.</p>
		 * Required
		 */
		definition: FormControl<string | null | undefined>,

		/**
		 * The type format: SDL or JSON.
		 * Required
		 */
		format: FormControl<TypeFormat | null | undefined>,
	}
	export function CreateCreateTypePostBodyFormGroup() {
		return new FormGroup<CreateTypePostBodyFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<TypeFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateApiKeyPostBody {

		/** A description of the purpose of the API key. */
		description?: string | null;

		/** The time from update time after which the API key expires. The date is represented as seconds since the epoch. For more information, see . */
		expires?: number | null;
	}
	export interface UpdateApiKeyPostBodyFormProperties {

		/** A description of the purpose of the API key. */
		description: FormControl<string | null | undefined>,

		/** The time from update time after which the API key expires. The date is represented as seconds since the epoch. For more information, see . */
		expires: FormControl<number | null | undefined>,
	}
	export function CreateUpdateApiKeyPostBodyFormGroup() {
		return new FormGroup<UpdateApiKeyPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expires: new FormControl<number | null | undefined>(undefined),
		});

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
		dynamodbConfig?: UpdateDataSourcePostBodyDynamodbConfig;

		/** Describes an AWS Lambda data source configuration. */
		lambdaConfig?: UpdateDataSourcePostBodyLambdaConfig;

		/** Describes an Elasticsearch data source configuration. */
		elasticsearchConfig?: UpdateDataSourcePostBodyElasticsearchConfig;

		/** Describes an HTTP data source configuration. */
		httpConfig?: UpdateDataSourcePostBodyHttpConfig;

		/** Describes a relational database data source configuration. */
		relationalDatabaseConfig?: UpdateDataSourcePostBodyRelationalDatabaseConfig;
	}
	export interface UpdateDataSourcePostBodyFormProperties {

		/** The new description for the data source. */
		description: FormControl<string | null | undefined>,

		/**
		 * The new data source type.
		 * Required
		 */
		type: FormControl<DataSourceType | null | undefined>,

		/** The new service role ARN for the data source. */
		serviceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourcePostBodyFormGroup() {
		return new FormGroup<UpdateDataSourcePostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DataSourceType | null | undefined>(undefined, [Validators.required]),
			serviceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourcePostBodyDynamodbConfig {
		tableName?: string | null;
		awsRegion?: string | null;
		useCallerCredentials?: boolean | null;

		/** Describes a Delta Sync configuration. */
		deltaSyncConfig?: DeltaSyncConfig;
		versioned?: boolean | null;
	}
	export interface UpdateDataSourcePostBodyDynamodbConfigFormProperties {
		tableName: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
		useCallerCredentials: FormControl<boolean | null | undefined>,
		versioned: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDataSourcePostBodyDynamodbConfigFormGroup() {
		return new FormGroup<UpdateDataSourcePostBodyDynamodbConfigFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			useCallerCredentials: new FormControl<boolean | null | undefined>(undefined),
			versioned: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourcePostBodyLambdaConfig {
		lambdaFunctionArn?: string | null;
	}
	export interface UpdateDataSourcePostBodyLambdaConfigFormProperties {
		lambdaFunctionArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourcePostBodyLambdaConfigFormGroup() {
		return new FormGroup<UpdateDataSourcePostBodyLambdaConfigFormProperties>({
			lambdaFunctionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourcePostBodyElasticsearchConfig {
		endpoint?: string | null;
		awsRegion?: string | null;
	}
	export interface UpdateDataSourcePostBodyElasticsearchConfigFormProperties {
		endpoint: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourcePostBodyElasticsearchConfigFormGroup() {
		return new FormGroup<UpdateDataSourcePostBodyElasticsearchConfigFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourcePostBodyHttpConfig {
		endpoint?: string | null;

		/** The authorization config in case the HTTP endpoint requires authorization. */
		authorizationConfig?: AuthorizationConfig;
	}
	export interface UpdateDataSourcePostBodyHttpConfigFormProperties {
		endpoint: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourcePostBodyHttpConfigFormGroup() {
		return new FormGroup<UpdateDataSourcePostBodyHttpConfigFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourcePostBodyRelationalDatabaseConfig {
		relationalDatabaseSourceType?: RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType | null;

		/** The Amazon RDS HTTP endpoint configuration. */
		rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
	}
	export interface UpdateDataSourcePostBodyRelationalDatabaseConfigFormProperties {
		relationalDatabaseSourceType: FormControl<RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType | null | undefined>,
	}
	export function CreateUpdateDataSourcePostBodyRelationalDatabaseConfigFormGroup() {
		return new FormGroup<UpdateDataSourcePostBodyRelationalDatabaseConfigFormProperties>({
			relationalDatabaseSourceType: new FormControl<RelationalDatabaseDataSourceConfigRelationalDatabaseSourceType | null | undefined>(undefined),
		});

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
	export interface UpdateFunctionPostBodyFormProperties {

		/**
		 * The <code>Function</code> name.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		name: FormControl<string | null | undefined>,

		/** The <code>Function</code> description. */
		description: FormControl<string | null | undefined>,

		/**
		 * The <code>Function</code> <code>DataSource</code> name.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * The <code>Function</code> request mapping template.
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * The <code>version</code> of the request mapping template. Currently the supported value is 2018-05-29.
		 * Required
		 */
		functionVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionPostBodyFormGroup() {
		return new FormGroup<UpdateFunctionPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined),
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			functionVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateGraphqlApiPostBody {

		/**
		 * The new name for the <code>GraphqlApi</code> object.
		 * Required
		 */
		name: string;

		/** The CloudWatch Logs configuration. */
		logConfig?: UpdateGraphqlApiPostBodyLogConfig;

		/** The new authentication type for the <code>GraphqlApi</code> object. */
		authenticationType?: GraphqlApiAuthenticationType | null;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: UpdateGraphqlApiPostBodyUserPoolConfig;

		/** Describes an OpenID Connect configuration. */
		openIDConnectConfig?: UpdateGraphqlApiPostBodyOpenIDConnectConfig;

		/** A list of additional authentication providers for the <code>GraphqlApi</code> API. */
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;

		/** A flag indicating whether to enable X-Ray tracing for the <code>GraphqlApi</code>. */
		xrayEnabled?: boolean | null;
	}
	export interface UpdateGraphqlApiPostBodyFormProperties {

		/**
		 * The new name for the <code>GraphqlApi</code> object.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The new authentication type for the <code>GraphqlApi</code> object. */
		authenticationType: FormControl<GraphqlApiAuthenticationType | null | undefined>,

		/** A flag indicating whether to enable X-Ray tracing for the <code>GraphqlApi</code>. */
		xrayEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateGraphqlApiPostBodyFormGroup() {
		return new FormGroup<UpdateGraphqlApiPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationType: new FormControl<GraphqlApiAuthenticationType | null | undefined>(undefined),
			xrayEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateGraphqlApiPostBodyLogConfig {
		fieldLogLevel?: LogConfigFieldLogLevel | null;
		cloudWatchLogsRoleArn?: string | null;
		excludeVerboseContent?: boolean | null;
	}
	export interface UpdateGraphqlApiPostBodyLogConfigFormProperties {
		fieldLogLevel: FormControl<LogConfigFieldLogLevel | null | undefined>,
		cloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		excludeVerboseContent: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateGraphqlApiPostBodyLogConfigFormGroup() {
		return new FormGroup<UpdateGraphqlApiPostBodyLogConfigFormProperties>({
			fieldLogLevel: new FormControl<LogConfigFieldLogLevel | null | undefined>(undefined),
			cloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			excludeVerboseContent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateGraphqlApiPostBodyUserPoolConfig {
		userPoolId?: string | null;
		awsRegion?: string | null;
		defaultAction?: UserPoolConfigDefaultAction | null;
		appIdClientRegex?: string | null;
	}
	export interface UpdateGraphqlApiPostBodyUserPoolConfigFormProperties {
		userPoolId: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
		defaultAction: FormControl<UserPoolConfigDefaultAction | null | undefined>,
		appIdClientRegex: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGraphqlApiPostBodyUserPoolConfigFormGroup() {
		return new FormGroup<UpdateGraphqlApiPostBodyUserPoolConfigFormProperties>({
			userPoolId: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			defaultAction: new FormControl<UserPoolConfigDefaultAction | null | undefined>(undefined),
			appIdClientRegex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGraphqlApiPostBodyOpenIDConnectConfig {
		issuer?: string | null;
		clientId?: string | null;
		iatTTL?: number | null;
		authTTL?: number | null;
	}
	export interface UpdateGraphqlApiPostBodyOpenIDConnectConfigFormProperties {
		issuer: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		iatTTL: FormControl<number | null | undefined>,
		authTTL: FormControl<number | null | undefined>,
	}
	export function CreateUpdateGraphqlApiPostBodyOpenIDConnectConfigFormGroup() {
		return new FormGroup<UpdateGraphqlApiPostBodyOpenIDConnectConfigFormProperties>({
			issuer: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			iatTTL: new FormControl<number | null | undefined>(undefined),
			authTTL: new FormControl<number | null | undefined>(undefined),
		});

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
		pipelineConfig?: UpdateResolverPostBodyPipelineConfig;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p> */
		syncConfig?: UpdateResolverPostBodySyncConfig;

		/** The caching configuration for a resolver that has caching enabled. */
		cachingConfig?: UpdateResolverPostBodyCachingConfig;
	}
	export interface UpdateResolverPostBodyFormProperties {

		/**
		 * The new data source name.
		 * Max length: 65536
		 * Min length: 1
		 * Pattern: [_A-Za-z][_0-9A-Za-z]*
		 */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * The new request mapping template.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * The new response mapping template.
		 * Max length: 65536
		 * Min length: 1
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,

		/** <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of <code>Function</code> in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.</p> </li> </ul> */
		kind: FormControl<ResolverKind | null | undefined>,
	}
	export function CreateUpdateResolverPostBodyFormGroup() {
		return new FormGroup<UpdateResolverPostBodyFormProperties>({
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536), Validators.minLength(1)]),
			kind: new FormControl<ResolverKind | null | undefined>(undefined),
		});

	}

	export interface UpdateResolverPostBodyPipelineConfig {
		functions?: Array<string>;
	}
	export interface UpdateResolverPostBodyPipelineConfigFormProperties {
	}
	export function CreateUpdateResolverPostBodyPipelineConfigFormGroup() {
		return new FormGroup<UpdateResolverPostBodyPipelineConfigFormProperties>({
		});

	}

	export interface UpdateResolverPostBodySyncConfig {
		conflictHandler?: SyncConfigConflictHandler | null;
		conflictDetection?: SyncConfigConflictDetection | null;

		/** The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler. */
		lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
	}
	export interface UpdateResolverPostBodySyncConfigFormProperties {
		conflictHandler: FormControl<SyncConfigConflictHandler | null | undefined>,
		conflictDetection: FormControl<SyncConfigConflictDetection | null | undefined>,
	}
	export function CreateUpdateResolverPostBodySyncConfigFormGroup() {
		return new FormGroup<UpdateResolverPostBodySyncConfigFormProperties>({
			conflictHandler: new FormControl<SyncConfigConflictHandler | null | undefined>(undefined),
			conflictDetection: new FormControl<SyncConfigConflictDetection | null | undefined>(undefined),
		});

	}

	export interface UpdateResolverPostBodyCachingConfig {
		ttl?: number | null;
		cachingKeys?: Array<string>;
	}
	export interface UpdateResolverPostBodyCachingConfigFormProperties {
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateUpdateResolverPostBodyCachingConfigFormGroup() {
		return new FormGroup<UpdateResolverPostBodyCachingConfigFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined),
		});

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
	export interface UpdateTypePostBodyFormProperties {

		/** The new definition. */
		definition: FormControl<string | null | undefined>,

		/**
		 * The new type format: SDL or JSON.
		 * Required
		 */
		format: FormControl<TypeFormat | null | undefined>,
	}
	export function CreateUpdateTypePostBodyFormGroup() {
		return new FormGroup<UpdateTypePostBodyFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<TypeFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartSchemaCreationPostBody {

		/**
		 * The schema definition, in GraphQL schema language format.
		 * Required
		 */
		definition: string;
	}
	export interface StartSchemaCreationPostBodyFormProperties {

		/**
		 * The schema definition, in GraphQL schema language format.
		 * Required
		 */
		definition: FormControl<string | null | undefined>,
	}
	export function CreateStartSchemaCreationPostBodyFormGroup() {
		return new FormGroup<StartSchemaCreationPostBodyFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface UpdateApiCachePostBodyFormProperties {

		/**
		 * <p>TTL in seconds for cache entries.</p> <p>Valid values are between 1 and 3600 seconds.</p>
		 * Required
		 */
		ttl: FormControl<number | null | undefined>,

		/**
		 * <p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resovlers that you specify are cached.</p> </li> </ul>
		 * Required
		 */
		apiCachingBehavior: FormControl<ApiCacheApiCachingBehavior | null | undefined>,

		/**
		 * <p>The cache instance type.</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul>
		 * Required
		 */
		type: FormControl<ApiCacheType | null | undefined>,
	}
	export function CreateUpdateApiCachePostBodyFormGroup() {
		return new FormGroup<UpdateApiCachePostBodyFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			apiCachingBehavior: new FormControl<ApiCacheApiCachingBehavior | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ApiCacheType | null | undefined>(undefined, [Validators.required]),
		});

	}

}

